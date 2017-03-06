(defproject tombox "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [compojure "1.5.1"]
                 [ring/ring-defaults "0.2.1"]
                 [cheshire "5.7.0"]
                 [org.clojure/clojurescript "1.9.494"]
                 [cljs-http "0.1.42"]
                 [org.clojure/core.async "0.3.441"]
                 [domina "1.0.3"]
                 [hiccup "1.0.5"]
                 [cljs-ajax "0.5.8"]]
                 ;[org.clojure/java.jdbc "0.7.0-alpha2"]
                 ;[org.postgresql/postgresql "9.4.1207"]]
  :plugins [[lein-ring "0.9.7"]
            [lein-cljsbuild "1.1.5"]] ;; cljsbuild 플러그인 추가
  :ring {:handler tombox.handler/app} ;; ring 핸들러 위치 세팅
  :profiles
  {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [ring/ring-mock "0.3.0"]]}}
  :cljsbuild {
              :builds [{
                       :source-paths ["src-cljs"]
                       :compiler {
                                  :output-to "resources/public/main.js"
                                  :optimizations :whitespace
                                  ;:optimizations :advanced
                                  :pretty-print true
                                  }}]})
