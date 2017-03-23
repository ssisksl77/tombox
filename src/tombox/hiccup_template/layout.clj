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

;; stage1에서 쓰임
(defn fluid-layout [title content & {:keys [modal]}]
  (hp/html5 {:ng-app "tomApp" :lang "en"}
            [:head
             [:title title]
             (hp/include-css "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css")
             (hp/include-css "tomstyle.css")]

            [:body
;;             [:div {:id "anti-forgery-token" :value token}]
               [:div {:class "container-fluid"} content]
               [:div modal]
               (hp/include-js "https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js")
               (hp/include-js "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js")
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

(defmacro simple-render-macro [data]
  `(h/html ~data))
