(ns tombox.hiccup-template.contents
  (:use [hiccup.form]
        [hiccup.element :only (link-to)]))

(declare create-li-tags )
(def index-links
  [[:a {:href "http:\\\\www.github.com/ssisksl77"} "남영환의 깃헙(진짜 별거 없음에 눈물을... ㅠ)"]
   [:a {:href "http:\\\\www.iamfrom.kr\\search\\label\\clojure"} "내 홈피"]
   [:a {:href "\\stage1"} "이제부터 시작이지"]])

(defn index []
  [:div {:id "context"}
   [:h1.panel.panel-heading "여기는 클로저로 무언가를 해보는 세상입니다. "]
   [:ul.list-group
    (create-li-tags index-links)
    ]])

(defn stage1 []
  [:ul#stage1-content.list-unstyled
  [:li
  [:nav {:class "navbar"}
   [:div {:class "container-fluid"}
    [:div {:class "navbar-header"}
     [:a {:class "navbar-brand" :href "/"} "스테이지원"]]
    
    [:ul {:class "nav navbar-nav"}
     [:li {:class "active" :id "go-home"} (link-to "#" "Home")]
     [:li (link-to "#" "Page 1")]
     [:li (link-to "#" "Page 2")]]
    
    [:ul {:class "nav navbar-nav navbar-right"}
     [:li (link-to {:id "sign-up" :class "glyphicon glyphicon-user" } "#" "Sign up")]
     [:li (link-to {:class "glyphicon glyphicon-log-in"} "#" "Login")]]]]]
   
    [:li
   [:div#head-context.jumbotron
    [:h2#jumbotron-header ]
    [:p#jumbotron-context "Hello World!"]]]])

(defn not-found []
  [:div
   [:h1 {:class "info-warning"} "Page Not Found"]
   [:p "원하는 페이지가 뭐죠? 당신이 원하는 그런거는 없습니다. 여기는 순전히 제가 만든 세상이거든요."]
   (link-to {:class "btn btn-primary"} "/" "홈으로 돌아가기")])

(defn create-li-tags [list]
  (for [x list]
    [:li.list-group-item x]))

(defn sign-up-form []
  [:div
   [:h2 "회원가입"]
   [:div#form-group
    [:form
     [:label {:for "email"} "Email"]
     [:input {:id "email" :type "email" :class "form-control" :placeholder "Enter Email"}]
     [:label {:for "password"} "Password"]
     [:input {:id "pwd" :type "password" :class "form-control" :placeholder "Enter Password"}]
     [:div.checkbox [:label [:input {:type "checkbox"} "두유 노우 클로저?"]]]
     [:button {:type "submit" :class "btn btn-default"} "Submit"]]]])
