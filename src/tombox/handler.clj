(ns tombox.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [cheshire.core :as json]
            [tombox.hiccup-template.layout :as layout]
            [tombox.hiccup-template.contents :as contents]))

(defn user-routes []
  (routes
   (GET "/" [] (layout/fluid-layout "놀이마당 첫번쨰!!!" (contents/stage1)))
   (GET "/:user-id" [user-id] (str "USER-ID: " user-id))))


(defroutes app-routes
  (GET "/" [] (layout/application "남영환의 클로저 놀이마당" (contents/index)))
  (GET "/user" [] {:status 200
                   :headers {"Content-Type" "application/json; charset=utf-8"}
                   :body (json/generate-string {:name "John Doe" :status :logged_in})})
  ;(GET "/stage1" [] (layout/fluid-layout "놀이마당 첫번째!!!" (contents/stage1)))
  (context "/stage1" []
           (user-routes))
  
  (route/not-found (layout/application "Page Not Found" (contents/not-found))))

(def app
  (wrap-defaults app-routes site-defaults))
