(ns tombox.net
  (:use [clojure.java.shell :only [sh]])
  (:import [javax.naming]
           [javax.naming.directory InitialDirContext]))

(defn nslookup
  ([hostname] (sh "nslookup" hostname))
  ([hostname query] (sh "nslookup" query  hostname)))

(defn nslookup-mx [hostname]
  (:out (ns-lookup "-query=mx" hostname)))

(defn smtp-mxlookup [hostname]
  (let [env (java.util.Hashtable. {"java.naming.factory.initial" "com.sun.jndi.dns.DnsContextFactory"})]
    (enumeration-seq (. (. (. (InitialDirContext. env) getAttributes hostname (into-array String ["MX"])) get "MX") getAll))))


(defn mx-isexist? [mxlookup-result]
  (if-let [result mxlookup-result]
    (not (empty? result))))

;;example
;; (mx-isexist? (smtp-mxlookup "google.com"))
