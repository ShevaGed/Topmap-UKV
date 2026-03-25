(ns topmap-ukv.core)

(defonce counter (atom 0))

(defn render! []
  (let [display (js/document.getElementById "counter-display")]
    (set! (.-innerText display) @counter)))

(defn handle-click []
  (swap! counter inc)
  (render!))

(defn init []
  (let [btn (js/document.getElementById "counter-btn")]
    (.addEventListener btn "click" handle-click))
  (render!)
  (js/console.log "Project Started!"))

(defn ^:dev/after-load reload! []
  (render!)
  (js/console.log "Code is apdate auto!"))
