(ns tombox.hiccup-template.layout
  (:require [hiccup.core :as h]
            [hiccup.form :as hf]
            [hiccup.page :as hp]
            ))

(defn application [title & content]
  (hp/html5 {:ng-app "tomApp" :lang "en"}
            [:head
             [:title title]
             ;(hp/include-css "http://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/css/bootstrap-combined.min.css")
             (hp/include-css "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css")
              (hp/include-js "main.js")
             ;(hp/include-js "http://code.angularjs.org/1.2.3/angular.min.js")
             ;(hp/include-js "js/ui-bootstrap-tpls-0.7.0.min.js")
             ]

             [:body
              [:div {:class "container"} content]]))
             
(defn fluid-layout [title & content]
  (hp/html5 {:ng-app "tomApp" :lang "en"}
            [:head
             [:title title]
             ;(hp/include-css "http://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/css/bootstrap-combined.min.css")
             (hp/include-css "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css")
             (hp/include-css "tomstyle.css")]

              [:body
              [:div {:class "container-fluid"} content]
               (hp/include-js "main.js")]))


(defmacro default-header [data]
  `(hp/html {:ng-app "tomApp" :lang "en"}
            [:head
             [:title ~(:title data)]
             (hp/include-css "http://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/css/bootstrap-combined.min.css")
             (hp/include-css "tomstyle.css")
             (hp/include-js "main.js")]

            [:body
             [:div {:class ~(:container-type data "container")} ~(:content data "데이터가 없습니다.")]]))

