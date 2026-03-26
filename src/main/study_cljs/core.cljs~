(ns topmap-ukv.core)

(defonce counter (atom 0))

(defn render! []
  (let [display (js/document.getElementById "counter-display")]
    (set! (.-innerText display) @counter)))

(defn handle-click []
  (swap! counter + 5)
  (render!))

(defn handle-reset []
  (reset! counter 0)
  (render!))

(defn handle-substraction []
  (when (> @counter 0) (swap! counter - 1))
  (render!))

(defn init []
  (let [plus-btn  (js/document.getElementById "counter-btn")
        reset-btn (js/document.getElementById "reset-btn")
        subs-btn  (js/document.getElementById "substraction-btn")]
    
    (.addEventListener plus-btn  "click" handle-click)
    (.addEventListener reset-btn "click" handle-reset)
    (.addEventListener subs-btn  "click" handle-substraction))
  
  (render!)
  (js/console.log "Project Started!"))

(defn ^:dev/after-load reload! []
  (render!)
  (js/console.log "Code is apdate auto!"))
