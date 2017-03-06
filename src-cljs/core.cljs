(ns tombox.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require 
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [ajax.core :refer [GET POST]]
            [domina :as dom]
            [domina.css :as css]
            [domina.events :as ev]))

;(defonce conn
;  (repl/connect "http://localhost:9000/repl"))
;(defn ^:export init []
;  (js/alert "This is my Clojure/ClojureScript playground!!!")
                                        ;  )

(defn ^:export log []
  (js/alert "AAA"))


;; stage1
(ev/listen! (dom/by-id "go-home") :click log)
(ev/listen! (dom/by-id "sign-up") :click (fn [evt] (js/alert "사인을 하고 싶다고???")))
(ev/listen! (dom/by-id "stage1") :click log)

;(ev/listen! (css/sel "button") :click log)

;(defn ^:export init []
;  (go (let [response (<! (http/get "/user"))]
;        (js/alert (:body response)))))
