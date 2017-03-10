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
             (hp/include-css "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css")]

             [:body
              [:div {:class "container"} content]
              (hp/include-js "main.js")]))








(defn fluid-layout [title & content]
  (hp/html5 {:ng-app "tomApp" :lang "en"}
            [:head
             [:title title]
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

(defn simple-render [data]
  (h/html data))

(defn simple-render-all [& datas]
  (h/html (reduce conj [:div] datas))) ;; 억지로 [:div]를 붙여서 한번에 하나로 만들어서 simple-render에 넣지 않아도 됨.

(defmacro simple-render-macro-error [data]
  (h/html data))
