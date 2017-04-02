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
;; use core.async to get JSON
;(ev/listen! (dom/by-id "sign-up") :click (fn [evt] (go
;                                                     (let [response (<! (http/get "/stage1/sign-up"))
;                                                           head-context (dom/by-id "head-context")]
;                                                       (set! (.-innerHTML head-context) (:body response))
;                                                       ))))




(ev/listen! (dom/by-id "sign-up-submit")
            :click (fn [evt] (go
                               (let [email (dom/by-id "usr_email")
                                     pwd  (dom/by-id "usr_pwd")
                                     sign-up (dom/by-id "login_with_sign_up")
                                     response (<! (http/post "/stage1/sign-up"
                                                  {:form-params {:email (.-value email) :pass (.-value pwd) :sign-up (.-checked sign-up)}}))]
                                 (set! (.-value email) "")
                                 (set! (.-value pwd) "")
                                 (.click (dom/by-id "sign-up-form-close"))
                                 ))))

(defn ^:export init []
  (go (let [response (<! (http/get "/user"))]
        (js/alert (:body response)))))
