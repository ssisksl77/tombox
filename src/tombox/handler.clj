(ns tombox.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [cheshire.core :as json]
            [tombox.hiccup-template.layout :as layout]
            [tombox.hiccup-template.contents :as contents]))
 
(declare json-wrapper)
;; stage1 라우팅
(defn user-routes [request]
  (routes
   (GET "/" [] (layout/fluid-layout "놀이마당 첫번째!!!" (contents/stage1) :modal (contents/sign-up-form-modal)))
   (GET "/sign-up" []  (json-wrapper (layout/simple-render (contents/sign-up-form))))
   (POST "/sign-up" [] request)))

;; 기본 환경
(defroutes app-routes
  (GET "/" [] (layout/application "클로저 놀이마당" (contents/index)))
  (GET "/user" [] {:status 200
                   :headers {"Content-Type" "application/json; charset=utf-8"}
                   :body (json/generate-string {:name "John Doe" :status :logged_in})})
  (context "/stage1" [request]
           (user-routes request))
  
  (route/not-found (layout/application "Page Not Found" (contents/not-found))))


(def app
  (wrap-defaults app-routes site-defaults))

;;;util
(defn json-wrapper [data]
  {:status 200
   :headers {"Content-Type" "application/json; charset=utf-8"}
   :body (json/generate-string data)})
