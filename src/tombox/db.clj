(ns tombox.db
  (:require [clojure.java.jdbc :as jdbc]))

(def db-spec {:classname "org.h2.Driver"
              :subprotocol "h2:file"
              :subname "./dbstore/h2-dbdata"})

;; h2 database 기본세팅
;(jdbc/db-do-commands db-spec
;                     (jdbc/create-table-ddl :user_info
;                                            [[:id "varchar(32)"]
;                                             [:pass "varchar(32)"]
;                                             [:name "varchar(32)"]
;                                             [:email "varchar(50)"]]))
;(jdbc/db-do-commands db-spec "CREATE INDEX user_id ON user_info (id)")


(jdbc/insert! db-spec :user_info {:id "firstId" :pass "pass" :name "tom" :email "ssisksl77@gmail.com"})
(jdbc/query db-spec ["SELECT * FROM user_info WHERE id = ?" "firstId"])
(jdbc/update! db-spec :user_info {:pass "pass2" :name "tom2"} ["id = ?" "firstId"])
(jdbc/query db-spec ["SELECT * FROM user_info WHERE id = ?" "firstId"])
(jdbc/delete! db-spec :user_info ["id = ?" "firstId"])

