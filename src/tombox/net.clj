(ns tombox.net
  (:use [clojure.java.shell :only [sh]])
  (:import [javax.naming]
           [javax.naming.directory InitialDirContext]))

(defn nslookup
  ([] (sh "nslookup"))
  ([hostname] (sh "nslookup" hostname))
  ([hostname query] (sh "nslookup" query  hostname)))

(defn nslookup-mx [hostname]
  (:out (nslookup "-query=mx" hostname)))

(defn smtp-mxlookup [hostname]
  (let [env (java.util.Hashtable. {"java.naming.factory.initial" "com.sun.jndi.dns.DnsContextFactory"})]
;;    (enumeration-seq (. (. (. (InitialDirContext. env) getAttributes hostname (into-array String ["MX"])) get "MX") getAll))))
    (enumeration-seq (.. (InitialDirContext. env)
                         (getAttributes hostname (into-array String ["MX"]))
                         (get "MX")
                         (getAll)))))

(defn mx-isexist? [hostname]
  (if-let [result (smtp-mxlookup hostname)]
    (not (empty? result))))

;;example
;; (mx-isexist? (smtp-mxlookup "google.com"))


(defn mail [& m]
  (let [mail (apply hash-map m)
        props (java.util.Properties.)]
    (doto props  ;;doto는 ..와 다르다 ..는 계속 파고들어가는 거고 doto는 map에 여러번 put 하는 것과 같다.
        (.put "mail.smtp.host" (:host mail))
        (.put "mail.smtp.port" (:port mail))
        (.put "mail.smtp.user" (:user mail))
        (.put "mail.smtp.socketFactory.port"  (:port mail))
        (.put "mail.smtp.auth" "true")
        (.put "debug" "true"))

    (if (= (:ssl mail) true)
      (doto props
        ;;        (.put "mail.xmtp.port" "587")
        (.put "mail.smtp.socketFactory.port" (:port mail))
        (.put "mail.smtp.starttls.enable" "true")
        (.put "mail.smtp.starttls.required" "true")
        (.put "mail.smtp.socketFactory.class" 
              "javax.net.ssl.SSLSocketFactory")
        (.put "mail.smtp.socketFactory.fallback" "false"))

      (println "ssl false"))

    (let [authenticator (proxy [javax.mail.Authenticator] [] 
                          (getPasswordAuthentication []
                            (javax.mail.PasswordAuthentication. (:user mail) (:password mail))))
          recipients (reduce #(str % "," %2) (:to mail))
          session (javax.mail.Session/getInstance props authenticator)
          msg (javax.mail.internet.MimeMessage. session)]

      (.setFrom msg (javax.mail.internet.InternetAddress. (:user mail)))
      (.setRecipients msg
                      (javax.mail.Message$RecipientType/TO)
                      (javax.mail.internet.InternetAddress/parse recipients))
      (.setSubject msg (:subject mail))
      (.setText msg (:text mail))
      (println msg)
;;      (.. session getTransport connect)
      (javax.mail.Transport/send msg))))

;;new javax.mail.Authenticator() {
;;            String un=username;
;;            String pw=password;
;;            protected PasswordAuthentication getPasswordAuthentication() {
;;                return new PasswordAuthentication(un, pw);
;;            }
;;        }
;;출처: http://sgroom.tistory.com/129 [★GuGu 

