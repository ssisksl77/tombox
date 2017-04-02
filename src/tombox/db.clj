(ns tombox.db
  (:require [clojure.java.jdbc :as jdbc]))

(def db-spec {:classname "org.h2.Driver"
              :subprotocol "h2:file"
              :subname "./dbstore/h2-dbdata"})

;; h2 database 기본세팅
;;(jdbc/db-do-commands db-spec
;;                     (jdbc/create-table-ddl :user_info
;;                                            [[:email "varchar(50)"]
;;                                             [:pass "varchar(32)"]]))
;;(jdbc/db-do-commands db-spec "CREATE INDEX user_id ON user_info (email)")


;(jdbc/insert! db-spec :user_info {:id "firstId" :pass "pass" :name "tom" :email "ssisksl77@gmail.com"})
;(jdbc/query db-spec ["SELECT * FROM user_info WHERE id = ?" "firstId"])
;(jdbc/update! db-spec :user_info {:pass "pass2" :name "tom2"} ["id = ?" "firstId"])
;(jdbc/query db-spec ["SELECT * FROM user_info WHERE id = ?" "firstId"])
;(jdbc/delete! db-spec :user_info ["id = ?" "firstId"])

(defn insert-user [{:keys [email pass]}]
  (jdbc/insert! db-spec :user_info {:email email :pass pass}))

(defn select-user-list []
  (jdbc/query db-spec ["SELECT * FROM user_info"]))

(defn select-user [{:keys [email]}]
  (first (jdbc/query db-spec ["SELECT email, pass FROM user_info WHERE email = ?" email])))

(defn check-password [{:keys [email pass]}]
  (= pass (:pass (select-user {:email email}))))
