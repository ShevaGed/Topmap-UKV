goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__13971){
var map__13972 = p__13971;
var map__13972__$1 = cljs.core.__destructure_map(map__13972);
var runtime = map__13972__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13972__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5142__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_14254 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_14254)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__13991 = runtime;
var G__13992 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_14254);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__13991,G__13992) : shadow.remote.runtime.shared.process.call(null,G__13991,G__13992));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__13993,res){
var map__13994 = p__13993;
var map__13994__$1 = cljs.core.__destructure_map(map__13994);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13994__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13994__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__13996 = res;
var G__13996__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13996,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__13996);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13996__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__13996__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__14001 = arguments.length;
switch (G__14001) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__14005,msg,handlers,timeout_after_ms){
var map__14010 = p__14005;
var map__14010__$1 = cljs.core.__destructure_map(map__14010);
var runtime = map__14010__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14010__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___14296 = arguments.length;
var i__5877__auto___14298 = (0);
while(true){
if((i__5877__auto___14298 < len__5876__auto___14296)){
args__5882__auto__.push((arguments[i__5877__auto___14298]));

var G__14299 = (i__5877__auto___14298 + (1));
i__5877__auto___14298 = G__14299;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__14046,ev,args){
var map__14047 = p__14046;
var map__14047__$1 = cljs.core.__destructure_map(map__14047);
var runtime = map__14047__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14047__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__14049 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14052 = null;
var count__14053 = (0);
var i__14054 = (0);
while(true){
if((i__14054 < count__14053)){
var ext = chunk__14052.cljs$core$IIndexed$_nth$arity$2(null,i__14054);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14311 = seq__14049;
var G__14312 = chunk__14052;
var G__14313 = count__14053;
var G__14314 = (i__14054 + (1));
seq__14049 = G__14311;
chunk__14052 = G__14312;
count__14053 = G__14313;
i__14054 = G__14314;
continue;
} else {
var G__14317 = seq__14049;
var G__14318 = chunk__14052;
var G__14319 = count__14053;
var G__14320 = (i__14054 + (1));
seq__14049 = G__14317;
chunk__14052 = G__14318;
count__14053 = G__14319;
i__14054 = G__14320;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__14049);
if(temp__5823__auto__){
var seq__14049__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14049__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__14049__$1);
var G__14323 = cljs.core.chunk_rest(seq__14049__$1);
var G__14324 = c__5673__auto__;
var G__14325 = cljs.core.count(c__5673__auto__);
var G__14326 = (0);
seq__14049 = G__14323;
chunk__14052 = G__14324;
count__14053 = G__14325;
i__14054 = G__14326;
continue;
} else {
var ext = cljs.core.first(seq__14049__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14327 = cljs.core.next(seq__14049__$1);
var G__14328 = null;
var G__14329 = (0);
var G__14330 = (0);
seq__14049 = G__14327;
chunk__14052 = G__14328;
count__14053 = G__14329;
i__14054 = G__14330;
continue;
} else {
var G__14331 = cljs.core.next(seq__14049__$1);
var G__14332 = null;
var G__14333 = (0);
var G__14334 = (0);
seq__14049 = G__14331;
chunk__14052 = G__14332;
count__14053 = G__14333;
i__14054 = G__14334;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq14033){
var G__14034 = cljs.core.first(seq14033);
var seq14033__$1 = cljs.core.next(seq14033);
var G__14035 = cljs.core.first(seq14033__$1);
var seq14033__$2 = cljs.core.next(seq14033__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14034,G__14035,seq14033__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__14098,p__14099){
var map__14100 = p__14098;
var map__14100__$1 = cljs.core.__destructure_map(map__14100);
var runtime = map__14100__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14100__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14101 = p__14099;
var map__14101__$1 = cljs.core.__destructure_map(map__14101);
var msg = map__14101__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14101__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__14102 = cljs.core.deref(state_ref);
var map__14102__$1 = cljs.core.__destructure_map(map__14102);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14102__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14102__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__14109,msg){
var map__14111 = p__14109;
var map__14111__$1 = cljs.core.__destructure_map(map__14111);
var runtime = map__14111__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14111__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__14133,key,p__14134){
var map__14135 = p__14133;
var map__14135__$1 = cljs.core.__destructure_map(map__14135);
var state = map__14135__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14135__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__14136 = p__14134;
var map__14136__$1 = cljs.core.__destructure_map(map__14136);
var spec = map__14136__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14136__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14136__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__14150,key,spec){
var map__14151 = p__14150;
var map__14151__$1 = cljs.core.__destructure_map(map__14151);
var runtime = map__14151__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14151__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5827__auto___14378 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5827__auto___14378 == null)){
} else {
var on_welcome_14383 = temp__5827__auto___14378;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_14383.cljs$core$IFn$_invoke$arity$0 ? on_welcome_14383.cljs$core$IFn$_invoke$arity$0() : on_welcome_14383.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__14154_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__14154_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__14155_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__14155_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__14156_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__14156_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__14157_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__14157_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__14158_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__14158_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__14162,key){
var map__14168 = p__14162;
var map__14168__$1 = cljs.core.__destructure_map(map__14168);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14168__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__14170,msg){
var map__14171 = p__14170;
var map__14171__$1 = cljs.core.__destructure_map(map__14171);
var runtime = map__14171__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14171__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__14180,p__14181){
var map__14184 = p__14180;
var map__14184__$1 = cljs.core.__destructure_map(map__14184);
var runtime = map__14184__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14184__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14185 = p__14181;
var map__14185__$1 = cljs.core.__destructure_map(map__14185);
var msg = map__14185__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14185__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14185__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__14203 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14205 = null;
var count__14206 = (0);
var i__14207 = (0);
while(true){
if((i__14207 < count__14206)){
var map__14233 = chunk__14205.cljs$core$IIndexed$_nth$arity$2(null,i__14207);
var map__14233__$1 = cljs.core.__destructure_map(map__14233);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14233__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__14442 = seq__14203;
var G__14443 = chunk__14205;
var G__14444 = count__14206;
var G__14445 = (i__14207 + (1));
seq__14203 = G__14442;
chunk__14205 = G__14443;
count__14206 = G__14444;
i__14207 = G__14445;
continue;
} else {
var G__14454 = seq__14203;
var G__14455 = chunk__14205;
var G__14456 = count__14206;
var G__14457 = (i__14207 + (1));
seq__14203 = G__14454;
chunk__14205 = G__14455;
count__14206 = G__14456;
i__14207 = G__14457;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__14203);
if(temp__5823__auto__){
var seq__14203__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14203__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__14203__$1);
var G__14458 = cljs.core.chunk_rest(seq__14203__$1);
var G__14459 = c__5673__auto__;
var G__14460 = cljs.core.count(c__5673__auto__);
var G__14461 = (0);
seq__14203 = G__14458;
chunk__14205 = G__14459;
count__14206 = G__14460;
i__14207 = G__14461;
continue;
} else {
var map__14240 = cljs.core.first(seq__14203__$1);
var map__14240__$1 = cljs.core.__destructure_map(map__14240);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14240__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__14463 = cljs.core.next(seq__14203__$1);
var G__14464 = null;
var G__14465 = (0);
var G__14466 = (0);
seq__14203 = G__14463;
chunk__14205 = G__14464;
count__14206 = G__14465;
i__14207 = G__14466;
continue;
} else {
var G__14467 = cljs.core.next(seq__14203__$1);
var G__14468 = null;
var G__14469 = (0);
var G__14470 = (0);
seq__14203 = G__14467;
chunk__14205 = G__14468;
count__14206 = G__14469;
i__14207 = G__14470;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
