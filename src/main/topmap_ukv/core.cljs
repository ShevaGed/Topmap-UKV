(ns topmap-ukv.core)

(defn init []
  (js/console.log "ClojureScript add!")
  (.insertAdjacentHTML (js/document.getElementById "app")
                       "beforeend"
                       "<h1>Hello! ClojureScript are working.</h1>"))

(defn ^:dev/after-load reload! []
  (js/console.log "Code is apdate auto!"))
