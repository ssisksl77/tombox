(ns tombox.core
  (:require-macros [cljs.core.async.macros :refer [go]]
                   )
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
(def count (atom 0))
(defn ^:export log []
  (js/alert "AAA"))


;; stage1
(ev/listen! (dom/by-id "go-home") :click log)
;; use core.async to get JSON
(ev/listen! (dom/by-id "sign-up") :click (fn [evt] (go
                                                     (let [response (<! (http/get "/stage1/sign-up"))]
                                                       (swap! count inc)
                                                       (dom/append! (dom/by-id "stage1-content") (str "<li> 방금 JSON으로 받아온 값: " (:body response) "front에서 atom으로 변경하고 있는 값 : " @count "</li>"))))))
(ev/listen! (dom/by-id "stage1") :click log)

;(ev/listen! (css/sel "button") :click log)

(defn ^:export init []
  (go (let [response (<! (http/get "/user"))]
        (js/alert (:body response)))))
