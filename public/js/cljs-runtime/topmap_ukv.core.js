goog.provide('topmap_ukv.core');
if((typeof topmap_ukv !== 'undefined') && (typeof topmap_ukv.core !== 'undefined') && (typeof topmap_ukv.core.counter !== 'undefined')){
} else {
topmap_ukv.core.counter = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
topmap_ukv.core.render_BANG_ = (function topmap_ukv$core$render_BANG_(){
var display = document.getElementById("counter-display");
return (display.innerText = cljs.core.deref(topmap_ukv.core.counter));
});
topmap_ukv.core.handle_click = (function topmap_ukv$core$handle_click(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(topmap_ukv.core.counter,cljs.core.inc);

return topmap_ukv.core.render_BANG_();
});
topmap_ukv.core.init = (function topmap_ukv$core$init(){
var btn_11745 = document.getElementById("counter-btn");
btn_11745.addEventListener("click",topmap_ukv.core.handle_click);

topmap_ukv.core.render_BANG_();

return console.log("Project Started!");
});
topmap_ukv.core.reload_BANG_ = (function topmap_ukv$core$reload_BANG_(){
topmap_ukv.core.render_BANG_();

return console.log("Code is apdate auto!");
});

//# sourceMappingURL=topmap_ukv.core.js.map
