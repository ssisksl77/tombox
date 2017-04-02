(ns tombox.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.middleware.params :refer [wrap-params]] ;; converts params to use keys. After adding this middleware, you can access your params from the request map, like so (-> ctx :request :params)
            [ring.middleware.keyword-params :refer [wrap-keyword-params]] 
            [cheshire.core :as json]
            [tombox.hiccup-template.layout :as layout]
            [tombox.hiccup-template.contents :as contents]
;;            [ring.middleware.anti-forgery :refer [*anti-forgery-token*] :as af]
            [ring.middleware.session :as rs]
            [tombox.db :as db]))

(defn get-custom-token [request]
  (get-in request [:headers "x-forgery-token"]))

(declare json-wrapper)
;; stage1 라우팅
(defn user-routes []
  (routes
   (GET "/" [] (layout/fluid-layout "Home" (contents/stage1) :modal (contents/sign-up-form-modal)))
   (GET "/sign-up" []  (json-wrapper (layout/simple-render (contents/sign-up-form))))
   (POST "/sign-up" request
;;         (keyword? (:email (:form-params request))) ;; form-params은 POST값이고 params는 래퍼로 감싼 키워드를 사용할 수 있게 한 값
;         (db/insert-user (:form-params request))
         (println (db/check-password (:params request)))
         (json-wrapper "sign-up 했음"))))

;; 기본 환경
(defroutes app-routes
  (GET "/" [] (layout/application "클로저 놀이마당" (contents/index)))
  (GET "/user" [] {:status 200
                   :headers {"Content-Type" "application/json; charset=utf-8"}
                   :body (json/generate-string {:name "John Doe" :status :logged_in})})
  (context "/stage1" []
           (user-routes))
  
  (route/not-found (layout/application "Page Not Found" (contents/not-found))))

;; (def app
;;   (wrap-defaults app-routes site-defaults))
(def app
  (-> app-routes
      (wrap-defaults (assoc-in site-defaults [:security :anti-forgery] false))
      wrap-keyword-params
      wrap-params
;      rs/wrap-session
;      ring-secure/wrap-anti-forgery)
  ))

;;;util
(defn json-wrapper [data]
  {:status 200
   :headers {"Content-Type" "application/json; charset=utf-8"}
   :body (json/generate-string data)})

;; (layout/simple-render-macro (contents/sign-up-form-modal))
;; (layout/simple-render (contents/sign-up-form-modal))

