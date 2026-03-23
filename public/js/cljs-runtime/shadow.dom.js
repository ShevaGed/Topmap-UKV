goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_15126 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_15126(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_15132 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_15132(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__13542 = coll;
var G__13543 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__13542,G__13543) : shadow.dom.lazy_native_coll_seq.call(null,G__13542,G__13543));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5142__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__13574 = arguments.length;
switch (G__13574) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__13582 = arguments.length;
switch (G__13582) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__13587 = arguments.length;
switch (G__13587) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__13609 = arguments.length;
switch (G__13609) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__13625 = arguments.length;
switch (G__13625) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__13639 = arguments.length;
switch (G__13639) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5142__auto__ = (!((typeof document !== 'undefined')));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e13660){if((e13660 instanceof Object)){
var e = e13660;
return console.log("didnt support attachEvent",el,e);
} else {
throw e13660;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5142__auto__ = (!((typeof document !== 'undefined')));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__13676 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__13677 = null;
var count__13678 = (0);
var i__13679 = (0);
while(true){
if((i__13679 < count__13678)){
var el = chunk__13677.cljs$core$IIndexed$_nth$arity$2(null,i__13679);
var handler_15183__$1 = ((function (seq__13676,chunk__13677,count__13678,i__13679,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__13676,chunk__13677,count__13678,i__13679,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15183__$1);


var G__15184 = seq__13676;
var G__15185 = chunk__13677;
var G__15186 = count__13678;
var G__15187 = (i__13679 + (1));
seq__13676 = G__15184;
chunk__13677 = G__15185;
count__13678 = G__15186;
i__13679 = G__15187;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__13676);
if(temp__5823__auto__){
var seq__13676__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13676__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__13676__$1);
var G__15188 = cljs.core.chunk_rest(seq__13676__$1);
var G__15189 = c__5673__auto__;
var G__15190 = cljs.core.count(c__5673__auto__);
var G__15191 = (0);
seq__13676 = G__15188;
chunk__13677 = G__15189;
count__13678 = G__15190;
i__13679 = G__15191;
continue;
} else {
var el = cljs.core.first(seq__13676__$1);
var handler_15192__$1 = ((function (seq__13676,chunk__13677,count__13678,i__13679,el,seq__13676__$1,temp__5823__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__13676,chunk__13677,count__13678,i__13679,el,seq__13676__$1,temp__5823__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15192__$1);


var G__15193 = cljs.core.next(seq__13676__$1);
var G__15194 = null;
var G__15195 = (0);
var G__15196 = (0);
seq__13676 = G__15193;
chunk__13677 = G__15194;
count__13678 = G__15195;
i__13679 = G__15196;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__13726 = arguments.length;
switch (G__13726) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__13736 = cljs.core.seq(events);
var chunk__13737 = null;
var count__13738 = (0);
var i__13739 = (0);
while(true){
if((i__13739 < count__13738)){
var vec__13747 = chunk__13737.cljs$core$IIndexed$_nth$arity$2(null,i__13739);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13747,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13747,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15218 = seq__13736;
var G__15219 = chunk__13737;
var G__15220 = count__13738;
var G__15221 = (i__13739 + (1));
seq__13736 = G__15218;
chunk__13737 = G__15219;
count__13738 = G__15220;
i__13739 = G__15221;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__13736);
if(temp__5823__auto__){
var seq__13736__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13736__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__13736__$1);
var G__15232 = cljs.core.chunk_rest(seq__13736__$1);
var G__15233 = c__5673__auto__;
var G__15234 = cljs.core.count(c__5673__auto__);
var G__15235 = (0);
seq__13736 = G__15232;
chunk__13737 = G__15233;
count__13738 = G__15234;
i__13739 = G__15235;
continue;
} else {
var vec__13751 = cljs.core.first(seq__13736__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13751,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13751,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15239 = cljs.core.next(seq__13736__$1);
var G__15240 = null;
var G__15241 = (0);
var G__15242 = (0);
seq__13736 = G__15239;
chunk__13737 = G__15240;
count__13738 = G__15241;
i__13739 = G__15242;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__13758 = cljs.core.seq(styles);
var chunk__13759 = null;
var count__13760 = (0);
var i__13761 = (0);
while(true){
if((i__13761 < count__13760)){
var vec__13777 = chunk__13759.cljs$core$IIndexed$_nth$arity$2(null,i__13761);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13777,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13777,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15243 = seq__13758;
var G__15244 = chunk__13759;
var G__15245 = count__13760;
var G__15246 = (i__13761 + (1));
seq__13758 = G__15243;
chunk__13759 = G__15244;
count__13760 = G__15245;
i__13761 = G__15246;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__13758);
if(temp__5823__auto__){
var seq__13758__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13758__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__13758__$1);
var G__15247 = cljs.core.chunk_rest(seq__13758__$1);
var G__15248 = c__5673__auto__;
var G__15249 = cljs.core.count(c__5673__auto__);
var G__15250 = (0);
seq__13758 = G__15247;
chunk__13759 = G__15248;
count__13760 = G__15249;
i__13761 = G__15250;
continue;
} else {
var vec__13781 = cljs.core.first(seq__13758__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13781,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13781,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15251 = cljs.core.next(seq__13758__$1);
var G__15252 = null;
var G__15253 = (0);
var G__15254 = (0);
seq__13758 = G__15251;
chunk__13759 = G__15252;
count__13760 = G__15253;
i__13761 = G__15254;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__13803_15255 = key;
var G__13803_15256__$1 = (((G__13803_15255 instanceof cljs.core.Keyword))?G__13803_15255.fqn:null);
switch (G__13803_15256__$1) {
case "id":
(el.id = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "class":
(el.className = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_15265 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5142__auto__ = goog.string.startsWith(ks_15265,"data-");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return goog.string.startsWith(ks_15265,"aria-");
}
})())){
el.setAttribute(ks_15265,value);
} else {
(el[ks_15265] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class));
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw (""+"cant have id after class?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1));
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__13875){
var map__13876 = p__13875;
var map__13876__$1 = cljs.core.__destructure_map(map__13876);
var props = map__13876__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13876__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__13878 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13878,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13878,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13878,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__13881 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__13881,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__13881;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__13894 = arguments.length;
switch (G__13894) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__13915){
var vec__13916 = p__13915;
var seq__13917 = cljs.core.seq(vec__13916);
var first__13918 = cljs.core.first(seq__13917);
var seq__13917__$1 = cljs.core.next(seq__13917);
var nn = first__13918;
var first__13918__$1 = cljs.core.first(seq__13917__$1);
var seq__13917__$2 = cljs.core.next(seq__13917__$1);
var np = first__13918__$1;
var nc = seq__13917__$2;
var node = vec__13916;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__13921 = nn;
var G__13922 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__13921,G__13922) : create_fn.call(null,G__13921,G__13922));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__13926 = nn;
var G__13927 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__13926,G__13927) : create_fn.call(null,G__13926,G__13927));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__13931 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13931,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13931,(1),null);
var seq__13934_15289 = cljs.core.seq(node_children);
var chunk__13935_15290 = null;
var count__13936_15291 = (0);
var i__13937_15292 = (0);
while(true){
if((i__13937_15292 < count__13936_15291)){
var child_struct_15293 = chunk__13935_15290.cljs$core$IIndexed$_nth$arity$2(null,i__13937_15292);
var children_15295 = shadow.dom.dom_node(child_struct_15293);
if(cljs.core.seq_QMARK_(children_15295)){
var seq__13973_15296 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_15295));
var chunk__13975_15297 = null;
var count__13976_15298 = (0);
var i__13977_15299 = (0);
while(true){
if((i__13977_15299 < count__13976_15298)){
var child_15303 = chunk__13975_15297.cljs$core$IIndexed$_nth$arity$2(null,i__13977_15299);
if(cljs.core.truth_(child_15303)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15303);


var G__15305 = seq__13973_15296;
var G__15306 = chunk__13975_15297;
var G__15307 = count__13976_15298;
var G__15308 = (i__13977_15299 + (1));
seq__13973_15296 = G__15305;
chunk__13975_15297 = G__15306;
count__13976_15298 = G__15307;
i__13977_15299 = G__15308;
continue;
} else {
var G__15310 = seq__13973_15296;
var G__15311 = chunk__13975_15297;
var G__15312 = count__13976_15298;
var G__15313 = (i__13977_15299 + (1));
seq__13973_15296 = G__15310;
chunk__13975_15297 = G__15311;
count__13976_15298 = G__15312;
i__13977_15299 = G__15313;
continue;
}
} else {
var temp__5823__auto___15315 = cljs.core.seq(seq__13973_15296);
if(temp__5823__auto___15315){
var seq__13973_15321__$1 = temp__5823__auto___15315;
if(cljs.core.chunked_seq_QMARK_(seq__13973_15321__$1)){
var c__5673__auto___15322 = cljs.core.chunk_first(seq__13973_15321__$1);
var G__15323 = cljs.core.chunk_rest(seq__13973_15321__$1);
var G__15324 = c__5673__auto___15322;
var G__15325 = cljs.core.count(c__5673__auto___15322);
var G__15326 = (0);
seq__13973_15296 = G__15323;
chunk__13975_15297 = G__15324;
count__13976_15298 = G__15325;
i__13977_15299 = G__15326;
continue;
} else {
var child_15329 = cljs.core.first(seq__13973_15321__$1);
if(cljs.core.truth_(child_15329)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15329);


var G__15331 = cljs.core.next(seq__13973_15321__$1);
var G__15332 = null;
var G__15333 = (0);
var G__15334 = (0);
seq__13973_15296 = G__15331;
chunk__13975_15297 = G__15332;
count__13976_15298 = G__15333;
i__13977_15299 = G__15334;
continue;
} else {
var G__15337 = cljs.core.next(seq__13973_15321__$1);
var G__15338 = null;
var G__15339 = (0);
var G__15340 = (0);
seq__13973_15296 = G__15337;
chunk__13975_15297 = G__15338;
count__13976_15298 = G__15339;
i__13977_15299 = G__15340;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_15295);
}


var G__15343 = seq__13934_15289;
var G__15344 = chunk__13935_15290;
var G__15345 = count__13936_15291;
var G__15346 = (i__13937_15292 + (1));
seq__13934_15289 = G__15343;
chunk__13935_15290 = G__15344;
count__13936_15291 = G__15345;
i__13937_15292 = G__15346;
continue;
} else {
var temp__5823__auto___15349 = cljs.core.seq(seq__13934_15289);
if(temp__5823__auto___15349){
var seq__13934_15355__$1 = temp__5823__auto___15349;
if(cljs.core.chunked_seq_QMARK_(seq__13934_15355__$1)){
var c__5673__auto___15358 = cljs.core.chunk_first(seq__13934_15355__$1);
var G__15363 = cljs.core.chunk_rest(seq__13934_15355__$1);
var G__15364 = c__5673__auto___15358;
var G__15365 = cljs.core.count(c__5673__auto___15358);
var G__15366 = (0);
seq__13934_15289 = G__15363;
chunk__13935_15290 = G__15364;
count__13936_15291 = G__15365;
i__13937_15292 = G__15366;
continue;
} else {
var child_struct_15374 = cljs.core.first(seq__13934_15355__$1);
var children_15375 = shadow.dom.dom_node(child_struct_15374);
if(cljs.core.seq_QMARK_(children_15375)){
var seq__13985_15376 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_15375));
var chunk__13987_15377 = null;
var count__13988_15378 = (0);
var i__13989_15379 = (0);
while(true){
if((i__13989_15379 < count__13988_15378)){
var child_15382 = chunk__13987_15377.cljs$core$IIndexed$_nth$arity$2(null,i__13989_15379);
if(cljs.core.truth_(child_15382)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15382);


var G__15383 = seq__13985_15376;
var G__15384 = chunk__13987_15377;
var G__15385 = count__13988_15378;
var G__15386 = (i__13989_15379 + (1));
seq__13985_15376 = G__15383;
chunk__13987_15377 = G__15384;
count__13988_15378 = G__15385;
i__13989_15379 = G__15386;
continue;
} else {
var G__15388 = seq__13985_15376;
var G__15389 = chunk__13987_15377;
var G__15390 = count__13988_15378;
var G__15391 = (i__13989_15379 + (1));
seq__13985_15376 = G__15388;
chunk__13987_15377 = G__15389;
count__13988_15378 = G__15390;
i__13989_15379 = G__15391;
continue;
}
} else {
var temp__5823__auto___15393__$1 = cljs.core.seq(seq__13985_15376);
if(temp__5823__auto___15393__$1){
var seq__13985_15394__$1 = temp__5823__auto___15393__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13985_15394__$1)){
var c__5673__auto___15395 = cljs.core.chunk_first(seq__13985_15394__$1);
var G__15396 = cljs.core.chunk_rest(seq__13985_15394__$1);
var G__15397 = c__5673__auto___15395;
var G__15398 = cljs.core.count(c__5673__auto___15395);
var G__15399 = (0);
seq__13985_15376 = G__15396;
chunk__13987_15377 = G__15397;
count__13988_15378 = G__15398;
i__13989_15379 = G__15399;
continue;
} else {
var child_15400 = cljs.core.first(seq__13985_15394__$1);
if(cljs.core.truth_(child_15400)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15400);


var G__15402 = cljs.core.next(seq__13985_15394__$1);
var G__15403 = null;
var G__15404 = (0);
var G__15405 = (0);
seq__13985_15376 = G__15402;
chunk__13987_15377 = G__15403;
count__13988_15378 = G__15404;
i__13989_15379 = G__15405;
continue;
} else {
var G__15406 = cljs.core.next(seq__13985_15394__$1);
var G__15407 = null;
var G__15408 = (0);
var G__15409 = (0);
seq__13985_15376 = G__15406;
chunk__13987_15377 = G__15407;
count__13988_15378 = G__15408;
i__13989_15379 = G__15409;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_15375);
}


var G__15411 = cljs.core.next(seq__13934_15355__$1);
var G__15412 = null;
var G__15413 = (0);
var G__15414 = (0);
seq__13934_15289 = G__15411;
chunk__13935_15290 = G__15412;
count__13936_15291 = G__15413;
i__13937_15292 = G__15414;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__14042 = cljs.core.seq(node);
var chunk__14043 = null;
var count__14044 = (0);
var i__14045 = (0);
while(true){
if((i__14045 < count__14044)){
var n = chunk__14043.cljs$core$IIndexed$_nth$arity$2(null,i__14045);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__15426 = seq__14042;
var G__15427 = chunk__14043;
var G__15428 = count__14044;
var G__15429 = (i__14045 + (1));
seq__14042 = G__15426;
chunk__14043 = G__15427;
count__14044 = G__15428;
i__14045 = G__15429;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__14042);
if(temp__5823__auto__){
var seq__14042__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14042__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__14042__$1);
var G__15431 = cljs.core.chunk_rest(seq__14042__$1);
var G__15432 = c__5673__auto__;
var G__15433 = cljs.core.count(c__5673__auto__);
var G__15434 = (0);
seq__14042 = G__15431;
chunk__14043 = G__15432;
count__14044 = G__15433;
i__14045 = G__15434;
continue;
} else {
var n = cljs.core.first(seq__14042__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__15435 = cljs.core.next(seq__14042__$1);
var G__15436 = null;
var G__15437 = (0);
var G__15438 = (0);
seq__14042 = G__15435;
chunk__14043 = G__15436;
count__14044 = G__15437;
i__14045 = G__15438;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__14090 = arguments.length;
switch (G__14090) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__14104 = arguments.length;
switch (G__14104) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__14132 = arguments.length;
switch (G__14132) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5142__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5882__auto__ = [];
var len__5876__auto___15450 = arguments.length;
var i__5877__auto___15451 = (0);
while(true){
if((i__5877__auto___15451 < len__5876__auto___15450)){
args__5882__auto__.push((arguments[i__5877__auto___15451]));

var G__15453 = (i__5877__auto___15451 + (1));
i__5877__auto___15451 = G__15453;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__14163_15457 = cljs.core.seq(nodes);
var chunk__14164_15458 = null;
var count__14165_15459 = (0);
var i__14166_15460 = (0);
while(true){
if((i__14166_15460 < count__14165_15459)){
var node_15462 = chunk__14164_15458.cljs$core$IIndexed$_nth$arity$2(null,i__14166_15460);
fragment.appendChild(shadow.dom._to_dom(node_15462));


var G__15463 = seq__14163_15457;
var G__15464 = chunk__14164_15458;
var G__15465 = count__14165_15459;
var G__15466 = (i__14166_15460 + (1));
seq__14163_15457 = G__15463;
chunk__14164_15458 = G__15464;
count__14165_15459 = G__15465;
i__14166_15460 = G__15466;
continue;
} else {
var temp__5823__auto___15471 = cljs.core.seq(seq__14163_15457);
if(temp__5823__auto___15471){
var seq__14163_15472__$1 = temp__5823__auto___15471;
if(cljs.core.chunked_seq_QMARK_(seq__14163_15472__$1)){
var c__5673__auto___15473 = cljs.core.chunk_first(seq__14163_15472__$1);
var G__15474 = cljs.core.chunk_rest(seq__14163_15472__$1);
var G__15475 = c__5673__auto___15473;
var G__15476 = cljs.core.count(c__5673__auto___15473);
var G__15477 = (0);
seq__14163_15457 = G__15474;
chunk__14164_15458 = G__15475;
count__14165_15459 = G__15476;
i__14166_15460 = G__15477;
continue;
} else {
var node_15479 = cljs.core.first(seq__14163_15472__$1);
fragment.appendChild(shadow.dom._to_dom(node_15479));


var G__15480 = cljs.core.next(seq__14163_15472__$1);
var G__15481 = null;
var G__15482 = (0);
var G__15483 = (0);
seq__14163_15457 = G__15480;
chunk__14164_15458 = G__15481;
count__14165_15459 = G__15482;
i__14166_15460 = G__15483;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq14159){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14159));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__14189_15487 = cljs.core.seq(scripts);
var chunk__14190_15488 = null;
var count__14191_15489 = (0);
var i__14192_15490 = (0);
while(true){
if((i__14192_15490 < count__14191_15489)){
var vec__14213_15491 = chunk__14190_15488.cljs$core$IIndexed$_nth$arity$2(null,i__14192_15490);
var script_tag_15492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14213_15491,(0),null);
var script_body_15493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14213_15491,(1),null);
eval(script_body_15493);


var G__15495 = seq__14189_15487;
var G__15496 = chunk__14190_15488;
var G__15497 = count__14191_15489;
var G__15498 = (i__14192_15490 + (1));
seq__14189_15487 = G__15495;
chunk__14190_15488 = G__15496;
count__14191_15489 = G__15497;
i__14192_15490 = G__15498;
continue;
} else {
var temp__5823__auto___15499 = cljs.core.seq(seq__14189_15487);
if(temp__5823__auto___15499){
var seq__14189_15500__$1 = temp__5823__auto___15499;
if(cljs.core.chunked_seq_QMARK_(seq__14189_15500__$1)){
var c__5673__auto___15501 = cljs.core.chunk_first(seq__14189_15500__$1);
var G__15502 = cljs.core.chunk_rest(seq__14189_15500__$1);
var G__15503 = c__5673__auto___15501;
var G__15504 = cljs.core.count(c__5673__auto___15501);
var G__15505 = (0);
seq__14189_15487 = G__15502;
chunk__14190_15488 = G__15503;
count__14191_15489 = G__15504;
i__14192_15490 = G__15505;
continue;
} else {
var vec__14223_15507 = cljs.core.first(seq__14189_15500__$1);
var script_tag_15508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14223_15507,(0),null);
var script_body_15509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14223_15507,(1),null);
eval(script_body_15509);


var G__15510 = cljs.core.next(seq__14189_15500__$1);
var G__15511 = null;
var G__15512 = (0);
var G__15513 = (0);
seq__14189_15487 = G__15510;
chunk__14190_15488 = G__15511;
count__14191_15489 = G__15512;
i__14192_15490 = G__15513;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__14229){
var vec__14230 = p__14229;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14230,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14230,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__14251 = arguments.length;
switch (G__14251) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | 0))+"px");
});
shadow.dom.pct = (function shadow$dom$pct(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)+"%");
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__14348 = cljs.core.seq(style_keys);
var chunk__14349 = null;
var count__14350 = (0);
var i__14351 = (0);
while(true){
if((i__14351 < count__14350)){
var it = chunk__14349.cljs$core$IIndexed$_nth$arity$2(null,i__14351);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__15525 = seq__14348;
var G__15526 = chunk__14349;
var G__15527 = count__14350;
var G__15528 = (i__14351 + (1));
seq__14348 = G__15525;
chunk__14349 = G__15526;
count__14350 = G__15527;
i__14351 = G__15528;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__14348);
if(temp__5823__auto__){
var seq__14348__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14348__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__14348__$1);
var G__15529 = cljs.core.chunk_rest(seq__14348__$1);
var G__15530 = c__5673__auto__;
var G__15531 = cljs.core.count(c__5673__auto__);
var G__15532 = (0);
seq__14348 = G__15529;
chunk__14349 = G__15530;
count__14350 = G__15531;
i__14351 = G__15532;
continue;
} else {
var it = cljs.core.first(seq__14348__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__15534 = cljs.core.next(seq__14348__$1);
var G__15535 = null;
var G__15536 = (0);
var G__15537 = (0);
seq__14348 = G__15534;
chunk__14349 = G__15535;
count__14350 = G__15536;
i__14351 = G__15537;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k14390,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__14471 = k14390;
var G__14471__$1 = (((G__14471 instanceof cljs.core.Keyword))?G__14471.fqn:null);
switch (G__14471__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14390,else__5451__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__14474){
var vec__14477 = p__14474;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14477,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14477,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14389){
var self__ = this;
var G__14389__$1 = this;
return (new cljs.core.RecordIter((0),G__14389__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14391,other14392){
var self__ = this;
var this14391__$1 = this;
return (((!((other14392 == null)))) && ((((this14391__$1.constructor === other14392.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14391__$1.x,other14392.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14391__$1.y,other14392.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14391__$1.__extmap,other14392.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k14390){
var self__ = this;
var this__5455__auto____$1 = this;
var G__14520 = k14390;
var G__14520__$1 = (((G__14520 instanceof cljs.core.Keyword))?G__14520.fqn:null);
switch (G__14520__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k14390);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__14389){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__14522 = cljs.core.keyword_identical_QMARK_;
var expr__14523 = k__5457__auto__;
if(cljs.core.truth_((pred__14522.cljs$core$IFn$_invoke$arity$2 ? pred__14522.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__14523) : pred__14522.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__14523)))){
return (new shadow.dom.Coordinate(G__14389,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14522.cljs$core$IFn$_invoke$arity$2 ? pred__14522.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__14523) : pred__14522.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__14523)))){
return (new shadow.dom.Coordinate(self__.x,G__14389,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__14389),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__14389){
var self__ = this;
var this__5447__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__14389,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__14422){
var extmap__5490__auto__ = (function (){var G__14551 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14422,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__14422)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14551);
} else {
return G__14551;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__14422),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__14422),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k14580,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__14608 = k14580;
var G__14608__$1 = (((G__14608 instanceof cljs.core.Keyword))?G__14608.fqn:null);
switch (G__14608__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14580,else__5451__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__14613){
var vec__14615 = p__14613;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14615,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14615,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#shadow.dom.Size{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14579){
var self__ = this;
var G__14579__$1 = this;
return (new cljs.core.RecordIter((0),G__14579__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14581,other14582){
var self__ = this;
var this14581__$1 = this;
return (((!((other14582 == null)))) && ((((this14581__$1.constructor === other14582.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14581__$1.w,other14582.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14581__$1.h,other14582.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14581__$1.__extmap,other14582.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k14580){
var self__ = this;
var this__5455__auto____$1 = this;
var G__14681 = k14580;
var G__14681__$1 = (((G__14681 instanceof cljs.core.Keyword))?G__14681.fqn:null);
switch (G__14681__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k14580);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__14579){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__14685 = cljs.core.keyword_identical_QMARK_;
var expr__14686 = k__5457__auto__;
if(cljs.core.truth_((pred__14685.cljs$core$IFn$_invoke$arity$2 ? pred__14685.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__14686) : pred__14685.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__14686)))){
return (new shadow.dom.Size(G__14579,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14685.cljs$core$IFn$_invoke$arity$2 ? pred__14685.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__14686) : pred__14685.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__14686)))){
return (new shadow.dom.Size(self__.w,G__14579,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__14579),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__14579){
var self__ = this;
var this__5447__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__14579,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__14592){
var extmap__5490__auto__ = (function (){var G__14711 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14592,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__14592)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14711);
} else {
return G__14711;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__14592),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__14592),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5738__auto__ = opts;
var l__5739__auto__ = a__5738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5739__auto__)){
var G__15627 = (i + (1));
var G__15628 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__15627;
ret = G__15628;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14770){
var vec__14771 = p__14770;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14771,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14771,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
}),query_params))));
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__14800 = arguments.length;
switch (G__14800) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5821__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5821__auto__)){
var child = temp__5821__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__15646 = ps;
var G__15647 = (i + (1));
el__$1 = G__15646;
i = G__15647;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__14889 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14889,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14889,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14889,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__14903_15661 = cljs.core.seq(props);
var chunk__14904_15662 = null;
var count__14905_15663 = (0);
var i__14906_15664 = (0);
while(true){
if((i__14906_15664 < count__14905_15663)){
var vec__14944_15665 = chunk__14904_15662.cljs$core$IIndexed$_nth$arity$2(null,i__14906_15664);
var k_15666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14944_15665,(0),null);
var v_15667 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14944_15665,(1),null);
el.setAttributeNS((function (){var temp__5823__auto__ = cljs.core.namespace(k_15666);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_15666),v_15667);


var G__15668 = seq__14903_15661;
var G__15669 = chunk__14904_15662;
var G__15670 = count__14905_15663;
var G__15671 = (i__14906_15664 + (1));
seq__14903_15661 = G__15668;
chunk__14904_15662 = G__15669;
count__14905_15663 = G__15670;
i__14906_15664 = G__15671;
continue;
} else {
var temp__5823__auto___15673 = cljs.core.seq(seq__14903_15661);
if(temp__5823__auto___15673){
var seq__14903_15674__$1 = temp__5823__auto___15673;
if(cljs.core.chunked_seq_QMARK_(seq__14903_15674__$1)){
var c__5673__auto___15679 = cljs.core.chunk_first(seq__14903_15674__$1);
var G__15680 = cljs.core.chunk_rest(seq__14903_15674__$1);
var G__15681 = c__5673__auto___15679;
var G__15682 = cljs.core.count(c__5673__auto___15679);
var G__15683 = (0);
seq__14903_15661 = G__15680;
chunk__14904_15662 = G__15681;
count__14905_15663 = G__15682;
i__14906_15664 = G__15683;
continue;
} else {
var vec__14957_15685 = cljs.core.first(seq__14903_15674__$1);
var k_15686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14957_15685,(0),null);
var v_15687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14957_15685,(1),null);
el.setAttributeNS((function (){var temp__5823__auto____$1 = cljs.core.namespace(k_15686);
if(cljs.core.truth_(temp__5823__auto____$1)){
var ns = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_15686),v_15687);


var G__15688 = cljs.core.next(seq__14903_15674__$1);
var G__15689 = null;
var G__15690 = (0);
var G__15691 = (0);
seq__14903_15661 = G__15688;
chunk__14904_15662 = G__15689;
count__14905_15663 = G__15690;
i__14906_15664 = G__15691;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__14978 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14978,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14978,(1),null);
var seq__14983_15702 = cljs.core.seq(node_children);
var chunk__14985_15703 = null;
var count__14986_15704 = (0);
var i__14987_15705 = (0);
while(true){
if((i__14987_15705 < count__14986_15704)){
var child_struct_15708 = chunk__14985_15703.cljs$core$IIndexed$_nth$arity$2(null,i__14987_15705);
if((!((child_struct_15708 == null)))){
if(typeof child_struct_15708 === 'string'){
var text_15716 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_15716)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_15708)));
} else {
var children_15720 = shadow.dom.svg_node(child_struct_15708);
if(cljs.core.seq_QMARK_(children_15720)){
var seq__15037_15723 = cljs.core.seq(children_15720);
var chunk__15039_15724 = null;
var count__15040_15725 = (0);
var i__15041_15726 = (0);
while(true){
if((i__15041_15726 < count__15040_15725)){
var child_15727 = chunk__15039_15724.cljs$core$IIndexed$_nth$arity$2(null,i__15041_15726);
if(cljs.core.truth_(child_15727)){
node.appendChild(child_15727);


var G__15730 = seq__15037_15723;
var G__15731 = chunk__15039_15724;
var G__15732 = count__15040_15725;
var G__15733 = (i__15041_15726 + (1));
seq__15037_15723 = G__15730;
chunk__15039_15724 = G__15731;
count__15040_15725 = G__15732;
i__15041_15726 = G__15733;
continue;
} else {
var G__15734 = seq__15037_15723;
var G__15735 = chunk__15039_15724;
var G__15736 = count__15040_15725;
var G__15737 = (i__15041_15726 + (1));
seq__15037_15723 = G__15734;
chunk__15039_15724 = G__15735;
count__15040_15725 = G__15736;
i__15041_15726 = G__15737;
continue;
}
} else {
var temp__5823__auto___15739 = cljs.core.seq(seq__15037_15723);
if(temp__5823__auto___15739){
var seq__15037_15740__$1 = temp__5823__auto___15739;
if(cljs.core.chunked_seq_QMARK_(seq__15037_15740__$1)){
var c__5673__auto___15741 = cljs.core.chunk_first(seq__15037_15740__$1);
var G__15742 = cljs.core.chunk_rest(seq__15037_15740__$1);
var G__15743 = c__5673__auto___15741;
var G__15744 = cljs.core.count(c__5673__auto___15741);
var G__15745 = (0);
seq__15037_15723 = G__15742;
chunk__15039_15724 = G__15743;
count__15040_15725 = G__15744;
i__15041_15726 = G__15745;
continue;
} else {
var child_15746 = cljs.core.first(seq__15037_15740__$1);
if(cljs.core.truth_(child_15746)){
node.appendChild(child_15746);


var G__15747 = cljs.core.next(seq__15037_15740__$1);
var G__15748 = null;
var G__15749 = (0);
var G__15750 = (0);
seq__15037_15723 = G__15747;
chunk__15039_15724 = G__15748;
count__15040_15725 = G__15749;
i__15041_15726 = G__15750;
continue;
} else {
var G__15751 = cljs.core.next(seq__15037_15740__$1);
var G__15752 = null;
var G__15753 = (0);
var G__15754 = (0);
seq__15037_15723 = G__15751;
chunk__15039_15724 = G__15752;
count__15040_15725 = G__15753;
i__15041_15726 = G__15754;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_15720);
}
}


var G__15756 = seq__14983_15702;
var G__15757 = chunk__14985_15703;
var G__15758 = count__14986_15704;
var G__15759 = (i__14987_15705 + (1));
seq__14983_15702 = G__15756;
chunk__14985_15703 = G__15757;
count__14986_15704 = G__15758;
i__14987_15705 = G__15759;
continue;
} else {
var G__15760 = seq__14983_15702;
var G__15761 = chunk__14985_15703;
var G__15762 = count__14986_15704;
var G__15763 = (i__14987_15705 + (1));
seq__14983_15702 = G__15760;
chunk__14985_15703 = G__15761;
count__14986_15704 = G__15762;
i__14987_15705 = G__15763;
continue;
}
} else {
var temp__5823__auto___15764 = cljs.core.seq(seq__14983_15702);
if(temp__5823__auto___15764){
var seq__14983_15765__$1 = temp__5823__auto___15764;
if(cljs.core.chunked_seq_QMARK_(seq__14983_15765__$1)){
var c__5673__auto___15767 = cljs.core.chunk_first(seq__14983_15765__$1);
var G__15768 = cljs.core.chunk_rest(seq__14983_15765__$1);
var G__15769 = c__5673__auto___15767;
var G__15770 = cljs.core.count(c__5673__auto___15767);
var G__15771 = (0);
seq__14983_15702 = G__15768;
chunk__14985_15703 = G__15769;
count__14986_15704 = G__15770;
i__14987_15705 = G__15771;
continue;
} else {
var child_struct_15774 = cljs.core.first(seq__14983_15765__$1);
if((!((child_struct_15774 == null)))){
if(typeof child_struct_15774 === 'string'){
var text_15778 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_15778)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_15774)));
} else {
var children_15779 = shadow.dom.svg_node(child_struct_15774);
if(cljs.core.seq_QMARK_(children_15779)){
var seq__15059_15781 = cljs.core.seq(children_15779);
var chunk__15061_15782 = null;
var count__15062_15783 = (0);
var i__15063_15784 = (0);
while(true){
if((i__15063_15784 < count__15062_15783)){
var child_15786 = chunk__15061_15782.cljs$core$IIndexed$_nth$arity$2(null,i__15063_15784);
if(cljs.core.truth_(child_15786)){
node.appendChild(child_15786);


var G__15788 = seq__15059_15781;
var G__15789 = chunk__15061_15782;
var G__15790 = count__15062_15783;
var G__15791 = (i__15063_15784 + (1));
seq__15059_15781 = G__15788;
chunk__15061_15782 = G__15789;
count__15062_15783 = G__15790;
i__15063_15784 = G__15791;
continue;
} else {
var G__15793 = seq__15059_15781;
var G__15794 = chunk__15061_15782;
var G__15795 = count__15062_15783;
var G__15796 = (i__15063_15784 + (1));
seq__15059_15781 = G__15793;
chunk__15061_15782 = G__15794;
count__15062_15783 = G__15795;
i__15063_15784 = G__15796;
continue;
}
} else {
var temp__5823__auto___15797__$1 = cljs.core.seq(seq__15059_15781);
if(temp__5823__auto___15797__$1){
var seq__15059_15798__$1 = temp__5823__auto___15797__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15059_15798__$1)){
var c__5673__auto___15799 = cljs.core.chunk_first(seq__15059_15798__$1);
var G__15800 = cljs.core.chunk_rest(seq__15059_15798__$1);
var G__15801 = c__5673__auto___15799;
var G__15802 = cljs.core.count(c__5673__auto___15799);
var G__15803 = (0);
seq__15059_15781 = G__15800;
chunk__15061_15782 = G__15801;
count__15062_15783 = G__15802;
i__15063_15784 = G__15803;
continue;
} else {
var child_15804 = cljs.core.first(seq__15059_15798__$1);
if(cljs.core.truth_(child_15804)){
node.appendChild(child_15804);


var G__15805 = cljs.core.next(seq__15059_15798__$1);
var G__15806 = null;
var G__15807 = (0);
var G__15808 = (0);
seq__15059_15781 = G__15805;
chunk__15061_15782 = G__15806;
count__15062_15783 = G__15807;
i__15063_15784 = G__15808;
continue;
} else {
var G__15810 = cljs.core.next(seq__15059_15798__$1);
var G__15811 = null;
var G__15812 = (0);
var G__15813 = (0);
seq__15059_15781 = G__15810;
chunk__15061_15782 = G__15811;
count__15062_15783 = G__15812;
i__15063_15784 = G__15813;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_15779);
}
}


var G__15816 = cljs.core.next(seq__14983_15765__$1);
var G__15817 = null;
var G__15818 = (0);
var G__15819 = (0);
seq__14983_15702 = G__15816;
chunk__14985_15703 = G__15817;
count__14986_15704 = G__15818;
i__14987_15705 = G__15819;
continue;
} else {
var G__15820 = cljs.core.next(seq__14983_15765__$1);
var G__15821 = null;
var G__15822 = (0);
var G__15823 = (0);
seq__14983_15702 = G__15820;
chunk__14985_15703 = G__15821;
count__14986_15704 = G__15822;
i__14987_15705 = G__15823;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5882__auto__ = [];
var len__5876__auto___15830 = arguments.length;
var i__5877__auto___15832 = (0);
while(true){
if((i__5877__auto___15832 < len__5876__auto___15830)){
args__5882__auto__.push((arguments[i__5877__auto___15832]));

var G__15833 = (i__5877__auto___15832 + (1));
i__5877__auto___15832 = G__15833;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq15105){
var G__15106 = cljs.core.first(seq15105);
var seq15105__$1 = cljs.core.next(seq15105);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15106,seq15105__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
