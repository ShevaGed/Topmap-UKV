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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(topmap_ukv.core.counter,cljs.core._PLUS_,(5));

return topmap_ukv.core.render_BANG_();
});
topmap_ukv.core.handle_reset = (function topmap_ukv$core$handle_reset(){
cljs.core.reset_BANG_(topmap_ukv.core.counter,(0));

return topmap_ukv.core.render_BANG_();
});
topmap_ukv.core.handle_substraction = (function topmap_ukv$core$handle_substraction(){
if((cljs.core.deref(topmap_ukv.core.counter) > (0))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(topmap_ukv.core.counter,cljs.core._,(1));
} else {
}

return topmap_ukv.core.render_BANG_();
});
topmap_ukv.core.init = (function topmap_ukv$core$init(){
var plus_btn_11786 = document.getElementById("counter-btn");
var reset_btn_11787 = document.getElementById("reset-btn");
var subs_btn_11788 = document.getElementById("substraction-btn");
plus_btn_11786.addEventListener("click",topmap_ukv.core.handle_click);

reset_btn_11787.addEventListener("click",topmap_ukv.core.handle_reset);

subs_btn_11788.addEventListener("click",topmap_ukv.core.handle_substraction);

topmap_ukv.core.render_BANG_();

return console.log("Project Started!");
});
topmap_ukv.core.reload_BANG_ = (function topmap_ukv$core$reload_BANG_(){
topmap_ukv.core.render_BANG_();

return console.log("Code is apdate auto!");
});

//# sourceMappingURL=topmap_ukv.core.js.map
