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
;(def count (atom 0))


;; stage1
;(ev/listen! (dom/by-id "go-home") :click log)
;; use core.async to get JSON
(ev/listen! (dom/by-id "sign-up") :click (fn [evt] (go
                                                     (let [response (<! (http/get "/stage1/sign-up"))
                                                           head-context (dom/by-id "head-context")]
                                                       (set! (.-innerHTML head-context) (:body response))
                                                       ))))

                                                       ;(swap! count inc)
                                                       ;(dom/set-text! (dom/by-id "jumbotron-header") (str "회원가입"))
                                                       ;(dom/set-text! (dom/by-id "jumbotron-context") (str "방금 JSON으로 받아온 값: " (:body response) "front에서 atom으로 변경하고 있는 값 : " @count ))))))


;(ev/listen! (dom/by-id "stage1") :click log)

;(ev/listen! (css/sel "button") :click log)

(defn ^:export init []
  (go (let [response (<! (http/get "/user"))]
        (js/alert (:body response)))))
