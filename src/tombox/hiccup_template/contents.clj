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
    [:div {:class "navbar-header"}]
    
    [:ul {:class "nav navbar-brand "}
     [:li {:class "active" :id "go-home"} (link-to "/" "Home")]]
     ;[:li (link-to "#" "Page 1")]
     ;[:li (link-to "#" "Page 2")]]
    
    [:ul {:class "nav navbar-nav navbar-right"}
     ;; [:li (link-to {:id "sign-up" :class "glyphicon glyphicon-user" } "#" " Sign up")]
     [:li (link-to {:class "glyphicon glyphicon-log-in" :data-toggle "modal" :data-target "#sign-up-form-modal"} "#" " Login")]]]]]
   
    [:li
   [:div#head-context.jumbotron
    [:h2#jumbotron-header ]
    [:p#jumbotron-context "Hello World!"]]]])

(defn not-found []
  [:div
   [:h1 {:class "info-warning"} "Page Not Found"]
   [:p "원하는 페이지가 뭐죠? 당신이 원하는 그런거는 없습니다. 여기는 순전히 제가 만든 세상이거든요. 홈피에서 요청해주세요. 당신이 원하는 박스를 만들어 주겠어요."]
   (link-to {:class "btn btn-primary"} "/" "홈으로 돌아가기")])

(defn create-li-tags [list]
  (for [x list]
    [:li.list-group-item x]))

(defn sign-up-form []
  [:div 
   [:h2 "회원가입"]
   [:form.form-horizontal ;.form-inline ;; 한줄로 늘이는 것
     [:div#form-group
       [:label.control-label.col-sm-2 {:for "email"} "Email"]
       [:div.col-sm-10
       [:input#email.form-control {:type "email" :placeholder "Enter Email"}]]]

     [:div#form-group
       [:label.control-label.col-sm-2 {:for "password" } "Password"]
       [:div.col-sm-10
         [:input#pwd.input-block.form-control { :type "password" :placeholder "Enter Password"}]]]

     [:div.form-group
       [:div.col-sm-offset-2.col-sm-10
         [:div.checkbox [:label [:input {:type "checkbox"} "심심하니 체크해주세요."]]]]]

     [:div.form-group
       [:div.col-sm-offset-2.col-sm-10
        [:button#sign-up-submit.btn.btn-info.btn-lg {:type "button" :data-toggle "modal" :data-target "#sign-up-form-modal"} "Submit"]]]]])

(defn sign-up-modal []
  [:div#myModal {:class "modal fade" :role "dialog"}
   [:div {:class "modal-dialog"}
    ;; Modal content
    [:div {:class "modal-content"}
     [:div {:class "modal-header"}
      [:button {:type "button" :class "close" :data-dismiss "modal"} "&times;"]
      [:h4 {:class "modal-title"} "Modal Header"]]
     [:div {:class "modal-body"}
      [:p "Some text in the modal"]]
     [:div {:class "modal-footer"}
      [:button {:type "button" :class "btn btn-default" :data-dismiss "modal"} "Close"]]]]])

(defn sign-up-form-modal []
  [:div#sign-up-form-modal.modal.fade {:role "dialog"}
   [:div.modal-dialog
    ;; Modal content
    [:div.modal-content
     [:div.modal-header {:style "padding:35px 50px;"}
      [:button.close {:type "button" :data-dismiss "modal"} "&times;"]
      [:h4 [:span.glyphicon.glyphicon-lock "Login"]]]
     [:div.modal-body {:style "padding:40px 50px;"}
      [:form {:role "form"}
       [:div.form-group
        [:label {:for "usrname"} [:span.glyphicon.glyphicon-user] "user email"]
        [:input#usrname.form-control {:type "text" :placeholder "Enter email"}]]
       [:div.form-group
        [:label {:for "psw"} [:span.glyphicon.glyphicon-eye-open] "Password"]
        [:input#pwd.form-control {:placeholder "Enter password"}]]
       [:div.checkbox {:data-toggle "tooltip" :title "아이디가 없다면 그대로 만들어드립니다."}
        [:label [:input {:type "checkbox" :value " " :checked "" } "그냥 눌러보고 싶죠?"]]]
       [:button#sign-up-submit.btn.btn-success.btn-block {:type "button"} [:span.glyphicon.glyphicon-off] "Login"]]]]]])
