goog.provide('study_cljs.core');
if((typeof study_cljs !== 'undefined') && (typeof study_cljs.core !== 'undefined') && (typeof study_cljs.core.counter !== 'undefined')){
} else {
study_cljs.core.counter = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
study_cljs.core.render_BANG_ = (function study_cljs$core$render_BANG_(){
var display = document.getElementById("counter-display");
return (display.innerText = cljs.core.deref(study_cljs.core.counter));
});
study_cljs.core.handle_click = (function study_cljs$core$handle_click(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(study_cljs.core.counter,cljs.core._PLUS_,(5));

return study_cljs.core.render_BANG_();
});
study_cljs.core.handle_reset = (function study_cljs$core$handle_reset(){
cljs.core.reset_BANG_(study_cljs.core.counter,(0));

return study_cljs.core.render_BANG_();
});
study_cljs.core.handle_substraction = (function study_cljs$core$handle_substraction(){
if((cljs.core.deref(study_cljs.core.counter) > (0))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(study_cljs.core.counter,cljs.core._,(1));
} else {
}

return study_cljs.core.render_BANG_();
});
study_cljs.core.init = (function study_cljs$core$init(){
var plus_btn_11726 = document.getElementById("counter-btn");
var reset_btn_11727 = document.getElementById("reset-btn");
var subs_btn_11728 = document.getElementById("substraction-btn");
plus_btn_11726.addEventListener("click",study_cljs.core.handle_click);

reset_btn_11727.addEventListener("click",study_cljs.core.handle_reset);

subs_btn_11728.addEventListener("click",study_cljs.core.handle_substraction);

study_cljs.core.render_BANG_();

return console.log("Project Started!");
});
study_cljs.core.reload_BANG_ = (function study_cljs$core$reload_BANG_(){
study_cljs.core.render_BANG_();

return console.log("Code is apdate auto!");
});

//# sourceMappingURL=study_cljs.core.js.map
