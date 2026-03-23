goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14447 = (function (f,blockable,meta14448){
this.f = f;
this.blockable = blockable;
this.meta14448 = meta14448;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14447.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14449,meta14448__$1){
var self__ = this;
var _14449__$1 = this;
return (new cljs.core.async.t_cljs$core$async14447(self__.f,self__.blockable,meta14448__$1));
}));

(cljs.core.async.t_cljs$core$async14447.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14449){
var self__ = this;
var _14449__$1 = this;
return self__.meta14448;
}));

(cljs.core.async.t_cljs$core$async14447.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14447.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14447.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14447.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14447.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14448","meta14448",-12171079,null)], null);
}));

(cljs.core.async.t_cljs$core$async14447.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14447.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14447");

(cljs.core.async.t_cljs$core$async14447.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async14447");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14447.
 */
cljs.core.async.__GT_t_cljs$core$async14447 = (function cljs$core$async$__GT_t_cljs$core$async14447(f,blockable,meta14448){
return (new cljs.core.async.t_cljs$core$async14447(f,blockable,meta14448));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14421 = arguments.length;
switch (G__14421) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14447(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14512 = arguments.length;
switch (G__14512) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error((""+"Assert failed: "+"buffer must be supplied when transducer is"+"\n"+"buf-or-n")));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14536 = arguments.length;
switch (G__14536) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14559 = arguments.length;
switch (G__14559) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_18803 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18803) : fn1.call(null,val_18803));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18803) : fn1.call(null,val_18803));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14589 = arguments.length;
switch (G__14589) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5821__auto__)){
var ret = temp__5821__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5821__auto__)){
var retb = temp__5821__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5741__auto___18814 = n;
var x_18815 = (0);
while(true){
if((x_18815 < n__5741__auto___18814)){
(a[x_18815] = x_18815);

var G__18816 = (x_18815 + (1));
x_18815 = G__18816;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14633 = (function (flag,meta14634){
this.flag = flag;
this.meta14634 = meta14634;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14633.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14635,meta14634__$1){
var self__ = this;
var _14635__$1 = this;
return (new cljs.core.async.t_cljs$core$async14633(self__.flag,meta14634__$1));
}));

(cljs.core.async.t_cljs$core$async14633.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14635){
var self__ = this;
var _14635__$1 = this;
return self__.meta14634;
}));

(cljs.core.async.t_cljs$core$async14633.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14633.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14633.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14633.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14633.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14634","meta14634",1204359081,null)], null);
}));

(cljs.core.async.t_cljs$core$async14633.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14633.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14633");

(cljs.core.async.t_cljs$core$async14633.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async14633");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14633.
 */
cljs.core.async.__GT_t_cljs$core$async14633 = (function cljs$core$async$__GT_t_cljs$core$async14633(flag,meta14634){
return (new cljs.core.async.t_cljs$core$async14633(flag,meta14634));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14633(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14673 = (function (flag,cb,meta14674){
this.flag = flag;
this.cb = cb;
this.meta14674 = meta14674;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14675,meta14674__$1){
var self__ = this;
var _14675__$1 = this;
return (new cljs.core.async.t_cljs$core$async14673(self__.flag,self__.cb,meta14674__$1));
}));

(cljs.core.async.t_cljs$core$async14673.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14675){
var self__ = this;
var _14675__$1 = this;
return self__.meta14674;
}));

(cljs.core.async.t_cljs$core$async14673.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14673.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14673.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14673.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14673.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14674","meta14674",308514992,null)], null);
}));

(cljs.core.async.t_cljs$core$async14673.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14673.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14673");

(cljs.core.async.t_cljs$core$async14673.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async14673");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14673.
 */
cljs.core.async.__GT_t_cljs$core$async14673 = (function cljs$core$async$__GT_t_cljs$core$async14673(flag,cb,meta14674){
return (new cljs.core.async.t_cljs$core$async14673(flag,cb,meta14674));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14673(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error((""+"Assert failed: "+"alts must have at least one channel operation"+"\n"+"(pos? (count ports))")));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_18820 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_18820)){
if((!(((port_18820.cljs$core$IFn$_invoke$arity$1 ? port_18820.cljs$core$IFn$_invoke$arity$1((1)) : port_18820.call(null,(1))) == null)))){
} else {
throw (new Error((""+"Assert failed: "+"can't put nil on channel"+"\n"+"(some? (port 1))")));
}
} else {
}

var G__18821 = (i + (1));
i = G__18821;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__14707_SHARP_){
var G__14719 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14707_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14719) : fret.call(null,G__14719));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__14708_SHARP_){
var G__14724 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14708_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14724) : fret.call(null,G__14724));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5142__auto__ = wport;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18828 = (i + (1));
i = G__18828;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5142__auto__ = ret;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5823__auto__ = (function (){var and__5140__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5140__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var got = temp__5823__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___18833 = arguments.length;
var i__5877__auto___18834 = (0);
while(true){
if((i__5877__auto___18834 < len__5876__auto___18833)){
args__5882__auto__.push((arguments[i__5877__auto___18834]));

var G__18835 = (i__5877__auto___18834 + (1));
i__5877__auto___18834 = G__18835;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14752){
var map__14753 = p__14752;
var map__14753__$1 = cljs.core.__destructure_map(map__14753);
var opts = map__14753__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14748){
var G__14749 = cljs.core.first(seq14748);
var seq14748__$1 = cljs.core.next(seq14748);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14749,seq14748__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14787 = arguments.length;
switch (G__14787) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14219__auto___18844 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14221__auto__ = (function (){var switch__13372__auto__ = (function (state_14851){
var state_val_14855 = (state_14851[(1)]);
if((state_val_14855 === (7))){
var inst_14844 = (state_14851[(2)]);
var state_14851__$1 = state_14851;
var statearr_14918_18848 = state_14851__$1;
(statearr_14918_18848[(2)] = inst_14844);

(statearr_14918_18848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14855 === (1))){
var state_14851__$1 = state_14851;
var statearr_14926_18852 = state_14851__$1;
(statearr_14926_18852[(2)] = null);

(statearr_14926_18852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14855 === (4))){
var inst_14811 = (state_14851[(7)]);
var inst_14811__$1 = (state_14851[(2)]);
var inst_14822 = (inst_14811__$1 == null);
var state_14851__$1 = (function (){var statearr_14931 = state_14851;
(statearr_14931[(7)] = inst_14811__$1);

return statearr_14931;
})();
if(cljs.core.truth_(inst_14822)){
var statearr_14940_18853 = state_14851__$1;
(statearr_14940_18853[(1)] = (5));

} else {
var statearr_14943_18854 = state_14851__$1;
(statearr_14943_18854[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14855 === (13))){
var state_14851__$1 = state_14851;
var statearr_14953_18856 = state_14851__$1;
(statearr_14953_18856[(2)] = null);

(statearr_14953_18856[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14855 === (6))){
var inst_14811 = (state_14851[(7)]);
var state_14851__$1 = state_14851;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14851__$1,(11),to,inst_14811);
} else {
if((state_val_14855 === (3))){
var inst_14846 = (state_14851[(2)]);
var state_14851__$1 = state_14851;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14851__$1,inst_14846);
} else {
if((state_val_14855 === (12))){
var state_14851__$1 = state_14851;
var statearr_14966_18857 = state_14851__$1;
(statearr_14966_18857[(2)] = null);

(statearr_14966_18857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14855 === (2))){
var state_14851__$1 = state_14851;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14851__$1,(4),from);
} else {
if((state_val_14855 === (11))){
var inst_14833 = (state_14851[(2)]);
var state_14851__$1 = state_14851;
if(cljs.core.truth_(inst_14833)){
var statearr_14989_18859 = state_14851__$1;
(statearr_14989_18859[(1)] = (12));

} else {
var statearr_14990_18860 = state_14851__$1;
(statearr_14990_18860[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14855 === (9))){
var state_14851__$1 = state_14851;
var statearr_14991_18861 = state_14851__$1;
(statearr_14991_18861[(2)] = null);

(statearr_14991_18861[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14855 === (5))){
var state_14851__$1 = state_14851;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14999_18862 = state_14851__$1;
(statearr_14999_18862[(1)] = (8));

} else {
var statearr_15002_18865 = state_14851__$1;
(statearr_15002_18865[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14855 === (14))){
var inst_14842 = (state_14851[(2)]);
var state_14851__$1 = state_14851;
var statearr_15006_18869 = state_14851__$1;
(statearr_15006_18869[(2)] = inst_14842);

(statearr_15006_18869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14855 === (10))){
var inst_14829 = (state_14851[(2)]);
var state_14851__$1 = state_14851;
var statearr_15007_18870 = state_14851__$1;
(statearr_15007_18870[(2)] = inst_14829);

(statearr_15007_18870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14855 === (8))){
var inst_14826 = cljs.core.async.close_BANG_(to);
var state_14851__$1 = state_14851;
var statearr_15009_18871 = state_14851__$1;
(statearr_15009_18871[(2)] = inst_14826);

(statearr_15009_18871[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13373__auto__ = null;
var cljs$core$async$state_machine__13373__auto____0 = (function (){
var statearr_15014 = [null,null,null,null,null,null,null,null];
(statearr_15014[(0)] = cljs$core$async$state_machine__13373__auto__);

(statearr_15014[(1)] = (1));

return statearr_15014;
});
var cljs$core$async$state_machine__13373__auto____1 = (function (state_14851){
while(true){
var ret_value__13374__auto__ = (function (){try{while(true){
var result__13375__auto__ = switch__13372__auto__(state_14851);
if(cljs.core.keyword_identical_QMARK_(result__13375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13375__auto__;
}
break;
}
}catch (e15016){var ex__13376__auto__ = e15016;
var statearr_15017_18873 = state_14851;
(statearr_15017_18873[(2)] = ex__13376__auto__);


if(cljs.core.seq((state_14851[(4)]))){
var statearr_15020_18874 = state_14851;
(statearr_15020_18874[(1)] = cljs.core.first((state_14851[(4)])));

} else {
throw ex__13376__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18876 = state_14851;
state_14851 = G__18876;
continue;
} else {
return ret_value__13374__auto__;
}
break;
}
});
cljs$core$async$state_machine__13373__auto__ = function(state_14851){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13373__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13373__auto____1.call(this,state_14851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13373__auto____0;
cljs$core$async$state_machine__13373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13373__auto____1;
return cljs$core$async$state_machine__13373__auto__;
})()
})();
var state__14222__auto__ = (function (){var statearr_15026 = f__14221__auto__();
(statearr_15026[(6)] = c__14219__auto___18844);

return statearr_15026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14222__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__15035){
var vec__15042 = p__15035;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15042,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15042,(1),null);
var job = vec__15042;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14219__auto___18882 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14221__auto__ = (function (){var switch__13372__auto__ = (function (state_15052){
var state_val_15053 = (state_15052[(1)]);
if((state_val_15053 === (1))){
var state_15052__$1 = state_15052;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15052__$1,(2),res,v);
} else {
if((state_val_15053 === (2))){
var inst_15049 = (state_15052[(2)]);
var inst_15050 = cljs.core.async.close_BANG_(res);
var state_15052__$1 = (function (){var statearr_15056 = state_15052;
(statearr_15056[(7)] = inst_15049);

return statearr_15056;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15052__$1,inst_15050);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13373__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13373__auto____0 = (function (){
var statearr_15058 = [null,null,null,null,null,null,null,null];
(statearr_15058[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13373__auto__);

(statearr_15058[(1)] = (1));

return statearr_15058;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13373__auto____1 = (function (state_15052){
while(true){
var ret_value__13374__auto__ = (function (){try{while(true){
var result__13375__auto__ = switch__13372__auto__(state_15052);
if(cljs.core.keyword_identical_QMARK_(result__13375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13375__auto__;
}
break;
}
}catch (e15065){var ex__13376__auto__ = e15065;
var statearr_15066_18885 = state_15052;
(statearr_15066_18885[(2)] = ex__13376__auto__);


if(cljs.core.seq((state_15052[(4)]))){
var statearr_15069_18886 = state_15052;
(statearr_15069_18886[(1)] = cljs.core.first((state_15052[(4)])));

} else {
throw ex__13376__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18887 = state_15052;
state_15052 = G__18887;
continue;
} else {
return ret_value__13374__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13373__auto__ = function(state_15052){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13373__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13373__auto____1.call(this,state_15052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13373__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13373__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13373__auto__;
})()
})();
var state__14222__auto__ = (function (){var statearr_15072 = f__14221__auto__();
(statearr_15072[(6)] = c__14219__auto___18882);

return statearr_15072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14222__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15075){
var vec__15077 = p__15075;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15077,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15077,(1),null);
var job = vec__15077;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5741__auto___18893 = n;
var __18895 = (0);
while(true){
if((__18895 < n__5741__auto___18893)){
var G__15081_18896 = type;
var G__15081_18897__$1 = (((G__15081_18896 instanceof cljs.core.Keyword))?G__15081_18896.fqn:null);
switch (G__15081_18897__$1) {
case "compute":
var c__14219__auto___18902 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18895,c__14219__auto___18902,G__15081_18896,G__15081_18897__$1,n__5741__auto___18893,jobs,results,process__$1,async){
return (function (){
var f__14221__auto__ = (function (){var switch__13372__auto__ = ((function (__18895,c__14219__auto___18902,G__15081_18896,G__15081_18897__$1,n__5741__auto___18893,jobs,results,process__$1,async){
return (function (state_15098){
var state_val_15100 = (state_15098[(1)]);
if((state_val_15100 === (1))){
var state_15098__$1 = state_15098;
var statearr_15101_18903 = state_15098__$1;
(statearr_15101_18903[(2)] = null);

(statearr_15101_18903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15100 === (2))){
var state_15098__$1 = state_15098;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15098__$1,(4),jobs);
} else {
if((state_val_15100 === (3))){
var inst_15095 = (state_15098[(2)]);
var state_15098__$1 = state_15098;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15098__$1,inst_15095);
} else {
if((state_val_15100 === (4))){
var inst_15087 = (state_15098[(2)]);
var inst_15088 = process__$1(inst_15087);
var state_15098__$1 = state_15098;
if(cljs.core.truth_(inst_15088)){
var statearr_15111_18907 = state_15098__$1;
(statearr_15111_18907[(1)] = (5));

} else {
var statearr_15112_18908 = state_15098__$1;
(statearr_15112_18908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15100 === (5))){
var state_15098__$1 = state_15098;
var statearr_15114_18909 = state_15098__$1;
(statearr_15114_18909[(2)] = null);

(statearr_15114_18909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15100 === (6))){
var state_15098__$1 = state_15098;
var statearr_15115_18910 = state_15098__$1;
(statearr_15115_18910[(2)] = null);

(statearr_15115_18910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15100 === (7))){
var inst_15093 = (state_15098[(2)]);
var state_15098__$1 = state_15098;
var statearr_15116_18911 = state_15098__$1;
(statearr_15116_18911[(2)] = inst_15093);

(statearr_15116_18911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18895,c__14219__auto___18902,G__15081_18896,G__15081_18897__$1,n__5741__auto___18893,jobs,results,process__$1,async))
;
return ((function (__18895,switch__13372__auto__,c__14219__auto___18902,G__15081_18896,G__15081_18897__$1,n__5741__auto___18893,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13373__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13373__auto____0 = (function (){
var statearr_15121 = [null,null,null,null,null,null,null];
(statearr_15121[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13373__auto__);

(statearr_15121[(1)] = (1));

return statearr_15121;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13373__auto____1 = (function (state_15098){
while(true){
var ret_value__13374__auto__ = (function (){try{while(true){
var result__13375__auto__ = switch__13372__auto__(state_15098);
if(cljs.core.keyword_identical_QMARK_(result__13375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13375__auto__;
}
break;
}
}catch (e15123){var ex__13376__auto__ = e15123;
var statearr_15124_18916 = state_15098;
(statearr_15124_18916[(2)] = ex__13376__auto__);


if(cljs.core.seq((state_15098[(4)]))){
var statearr_15125_18917 = state_15098;
(statearr_15125_18917[(1)] = cljs.core.first((state_15098[(4)])));

} else {
throw ex__13376__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18925 = state_15098;
state_15098 = G__18925;
continue;
} else {
return ret_value__13374__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13373__auto__ = function(state_15098){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13373__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13373__auto____1.call(this,state_15098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13373__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13373__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13373__auto__;
})()
;})(__18895,switch__13372__auto__,c__14219__auto___18902,G__15081_18896,G__15081_18897__$1,n__5741__auto___18893,jobs,results,process__$1,async))
})();
var state__14222__auto__ = (function (){var statearr_15129 = f__14221__auto__();
(statearr_15129[(6)] = c__14219__auto___18902);

return statearr_15129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14222__auto__);
});})(__18895,c__14219__auto___18902,G__15081_18896,G__15081_18897__$1,n__5741__auto___18893,jobs,results,process__$1,async))
);


break;
case "async":
var c__14219__auto___18926 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18895,c__14219__auto___18926,G__15081_18896,G__15081_18897__$1,n__5741__auto___18893,jobs,results,process__$1,async){
return (function (){
var f__14221__auto__ = (function (){var switch__13372__auto__ = ((function (__18895,c__14219__auto___18926,G__15081_18896,G__15081_18897__$1,n__5741__auto___18893,jobs,results,process__$1,async){
return (function (state_15151){
var state_val_15152 = (state_15151[(1)]);
if((state_val_15152 === (1))){
var state_15151__$1 = state_15151;
var statearr_15153_18934 = state_15151__$1;
(statearr_15153_18934[(2)] = null);

(statearr_15153_18934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15152 === (2))){
var state_15151__$1 = state_15151;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15151__$1,(4),jobs);
} else {
if((state_val_15152 === (3))){
var inst_15149 = (state_15151[(2)]);
var state_15151__$1 = state_15151;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15151__$1,inst_15149);
} else {
if((state_val_15152 === (4))){
var inst_15139 = (state_15151[(2)]);
var inst_15140 = async(inst_15139);
var state_15151__$1 = state_15151;
if(cljs.core.truth_(inst_15140)){
var statearr_15159_18935 = state_15151__$1;
(statearr_15159_18935[(1)] = (5));

} else {
var statearr_15160_18936 = state_15151__$1;
(statearr_15160_18936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15152 === (5))){
var state_15151__$1 = state_15151;
var statearr_15162_18938 = state_15151__$1;
(statearr_15162_18938[(2)] = null);

(statearr_15162_18938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15152 === (6))){
var state_15151__$1 = state_15151;
var statearr_15164_18939 = state_15151__$1;
(statearr_15164_18939[(2)] = null);

(statearr_15164_18939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15152 === (7))){
var inst_15145 = (state_15151[(2)]);
var state_15151__$1 = state_15151;
var statearr_15166_18953 = state_15151__$1;
(statearr_15166_18953[(2)] = inst_15145);

(statearr_15166_18953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18895,c__14219__auto___18926,G__15081_18896,G__15081_18897__$1,n__5741__auto___18893,jobs,results,process__$1,async))
;
return ((function (__18895,switch__13372__auto__,c__14219__auto___18926,G__15081_18896,G__15081_18897__$1,n__5741__auto___18893,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13373__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13373__auto____0 = (function (){
var statearr_15171 = [null,null,null,null,null,null,null];
(statearr_15171[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13373__auto__);

(statearr_15171[(1)] = (1));

return statearr_15171;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13373__auto____1 = (function (state_15151){
while(true){
var ret_value__13374__auto__ = (function (){try{while(true){
var result__13375__auto__ = switch__13372__auto__(state_15151);
if(cljs.core.keyword_identical_QMARK_(result__13375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13375__auto__;
}
break;
}
}catch (e15174){var ex__13376__auto__ = e15174;
var statearr_15175_18956 = state_15151;
(statearr_15175_18956[(2)] = ex__13376__auto__);


if(cljs.core.seq((state_15151[(4)]))){
var statearr_15176_18958 = state_15151;
(statearr_15176_18958[(1)] = cljs.core.first((state_15151[(4)])));

} else {
throw ex__13376__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18959 = state_15151;
state_15151 = G__18959;
continue;
} else {
return ret_value__13374__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13373__auto__ = function(state_15151){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13373__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13373__auto____1.call(this,state_15151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13373__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13373__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13373__auto__;
})()
;})(__18895,switch__13372__auto__,c__14219__auto___18926,G__15081_18896,G__15081_18897__$1,n__5741__auto___18893,jobs,results,process__$1,async))
})();
var state__14222__auto__ = (function (){var statearr_15180 = f__14221__auto__();
(statearr_15180[(6)] = c__14219__auto___18926);

return statearr_15180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14222__auto__);
});})(__18895,c__14219__auto___18926,G__15081_18896,G__15081_18897__$1,n__5741__auto___18893,jobs,results,process__$1,async))
);


break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15081_18897__$1))));

}

var G__18960 = (__18895 + (1));
__18895 = G__18960;
continue;
} else {
}
break;
}

var c__14219__auto___18961 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14221__auto__ = (function (){var switch__13372__auto__ = (function (state_15237){
var state_val_15238 = (state_15237[(1)]);
if((state_val_15238 === (7))){
var inst_15226 = (state_15237[(2)]);
var state_15237__$1 = state_15237;
var statearr_15257_18963 = state_15237__$1;
(statearr_15257_18963[(2)] = inst_15226);

(statearr_15257_18963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15238 === (1))){
var state_15237__$1 = state_15237;
var statearr_15260_18964 = state_15237__$1;
(statearr_15260_18964[(2)] = null);

(statearr_15260_18964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15238 === (4))){
var inst_15201 = (state_15237[(7)]);
var inst_15201__$1 = (state_15237[(2)]);
var inst_15202 = (inst_15201__$1 == null);
var state_15237__$1 = (function (){var statearr_15263 = state_15237;
(statearr_15263[(7)] = inst_15201__$1);

return statearr_15263;
})();
if(cljs.core.truth_(inst_15202)){
var statearr_15264_18965 = state_15237__$1;
(statearr_15264_18965[(1)] = (5));

} else {
var statearr_15266_18966 = state_15237__$1;
(statearr_15266_18966[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15238 === (6))){
var inst_15201 = (state_15237[(7)]);
var inst_15206 = (state_15237[(8)]);
var inst_15206__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15207 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15213 = [inst_15201,inst_15206__$1];
var inst_15214 = (new cljs.core.PersistentVector(null,2,(5),inst_15207,inst_15213,null));
var state_15237__$1 = (function (){var statearr_15267 = state_15237;
(statearr_15267[(8)] = inst_15206__$1);

return statearr_15267;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15237__$1,(8),jobs,inst_15214);
} else {
if((state_val_15238 === (3))){
var inst_15229 = (state_15237[(2)]);
var state_15237__$1 = state_15237;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15237__$1,inst_15229);
} else {
if((state_val_15238 === (2))){
var state_15237__$1 = state_15237;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15237__$1,(4),from);
} else {
if((state_val_15238 === (9))){
var inst_15223 = (state_15237[(2)]);
var state_15237__$1 = (function (){var statearr_15272 = state_15237;
(statearr_15272[(9)] = inst_15223);

return statearr_15272;
})();
var statearr_15273_18969 = state_15237__$1;
(statearr_15273_18969[(2)] = null);

(statearr_15273_18969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15238 === (5))){
var inst_15204 = cljs.core.async.close_BANG_(jobs);
var state_15237__$1 = state_15237;
var statearr_15275_18970 = state_15237__$1;
(statearr_15275_18970[(2)] = inst_15204);

(statearr_15275_18970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15238 === (8))){
var inst_15206 = (state_15237[(8)]);
var inst_15216 = (state_15237[(2)]);
var state_15237__$1 = (function (){var statearr_15277 = state_15237;
(statearr_15277[(10)] = inst_15216);

return statearr_15277;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15237__$1,(9),results,inst_15206);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13373__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13373__auto____0 = (function (){
var statearr_15280 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15280[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13373__auto__);

(statearr_15280[(1)] = (1));

return statearr_15280;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13373__auto____1 = (function (state_15237){
while(true){
var ret_value__13374__auto__ = (function (){try{while(true){
var result__13375__auto__ = switch__13372__auto__(state_15237);
if(cljs.core.keyword_identical_QMARK_(result__13375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13375__auto__;
}
break;
}
}catch (e15281){var ex__13376__auto__ = e15281;
var statearr_15282_18976 = state_15237;
(statearr_15282_18976[(2)] = ex__13376__auto__);


if(cljs.core.seq((state_15237[(4)]))){
var statearr_15285_18978 = state_15237;
(statearr_15285_18978[(1)] = cljs.core.first((state_15237[(4)])));

} else {
throw ex__13376__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18979 = state_15237;
state_15237 = G__18979;
continue;
} else {
return ret_value__13374__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13373__auto__ = function(state_15237){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13373__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13373__auto____1.call(this,state_15237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13373__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13373__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13373__auto__;
})()
})();
var state__14222__auto__ = (function (){var statearr_15287 = f__14221__auto__();
(statearr_15287[(6)] = c__14219__auto___18961);

return statearr_15287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14222__auto__);
}));


var c__14219__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14221__auto__ = (function (){var switch__13372__auto__ = (function (state_15380){
var state_val_15381 = (state_15380[(1)]);
if((state_val_15381 === (7))){
var inst_15370 = (state_15380[(2)]);
var state_15380__$1 = state_15380;
var statearr_15410_18980 = state_15380__$1;
(statearr_15410_18980[(2)] = inst_15370);

(statearr_15410_18980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15381 === (20))){
var state_15380__$1 = state_15380;
var statearr_15419_18981 = state_15380__$1;
(statearr_15419_18981[(2)] = null);

(statearr_15419_18981[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15381 === (1))){
var state_15380__$1 = state_15380;
var statearr_15423_18982 = state_15380__$1;
(statearr_15423_18982[(2)] = null);

(statearr_15423_18982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15381 === (4))){
var inst_15302 = (state_15380[(7)]);
var inst_15302__$1 = (state_15380[(2)]);
var inst_15304 = (inst_15302__$1 == null);
var state_15380__$1 = (function (){var statearr_15424 = state_15380;
(statearr_15424[(7)] = inst_15302__$1);

return statearr_15424;
})();
if(cljs.core.truth_(inst_15304)){
var statearr_15425_18983 = state_15380__$1;
(statearr_15425_18983[(1)] = (5));

} else {
var statearr_15430_18984 = state_15380__$1;
(statearr_15430_18984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15381 === (15))){
var inst_15336 = (state_15380[(8)]);
var state_15380__$1 = state_15380;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15380__$1,(18),to,inst_15336);
} else {
if((state_val_15381 === (21))){
var inst_15361 = (state_15380[(2)]);
var state_15380__$1 = state_15380;
var statearr_15440_18989 = state_15380__$1;
(statearr_15440_18989[(2)] = inst_15361);

(statearr_15440_18989[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15381 === (13))){
var inst_15367 = (state_15380[(2)]);
var state_15380__$1 = (function (){var statearr_15441 = state_15380;
(statearr_15441[(9)] = inst_15367);

return statearr_15441;
})();
var statearr_15442_18996 = state_15380__$1;
(statearr_15442_18996[(2)] = null);

(statearr_15442_18996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15381 === (6))){
var inst_15302 = (state_15380[(7)]);
var state_15380__$1 = state_15380;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15380__$1,(11),inst_15302);
} else {
if((state_val_15381 === (17))){
var inst_15354 = (state_15380[(2)]);
var state_15380__$1 = state_15380;
if(cljs.core.truth_(inst_15354)){
var statearr_15446_18997 = state_15380__$1;
(statearr_15446_18997[(1)] = (19));

} else {
var statearr_15447_18998 = state_15380__$1;
(statearr_15447_18998[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15381 === (3))){
var inst_15372 = (state_15380[(2)]);
var state_15380__$1 = state_15380;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15380__$1,inst_15372);
} else {
if((state_val_15381 === (12))){
var inst_15328 = (state_15380[(10)]);
var state_15380__$1 = state_15380;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15380__$1,(14),inst_15328);
} else {
if((state_val_15381 === (2))){
var state_15380__$1 = state_15380;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15380__$1,(4),results);
} else {
if((state_val_15381 === (19))){
var state_15380__$1 = state_15380;
var statearr_15452_18999 = state_15380__$1;
(statearr_15452_18999[(2)] = null);

(statearr_15452_18999[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15381 === (11))){
var inst_15328 = (state_15380[(2)]);
var state_15380__$1 = (function (){var statearr_15454 = state_15380;
(statearr_15454[(10)] = inst_15328);

return statearr_15454;
})();
var statearr_15461_19001 = state_15380__$1;
(statearr_15461_19001[(2)] = null);

(statearr_15461_19001[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15381 === (9))){
var state_15380__$1 = state_15380;
var statearr_15478_19004 = state_15380__$1;
(statearr_15478_19004[(2)] = null);

(statearr_15478_19004[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15381 === (5))){
var state_15380__$1 = state_15380;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15485_19005 = state_15380__$1;
(statearr_15485_19005[(1)] = (8));

} else {
var statearr_15486_19006 = state_15380__$1;
(statearr_15486_19006[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15381 === (14))){
var inst_15336 = (state_15380[(8)]);
var inst_15347 = (state_15380[(11)]);
var inst_15336__$1 = (state_15380[(2)]);
var inst_15342 = (inst_15336__$1 == null);
var inst_15347__$1 = cljs.core.not(inst_15342);
var state_15380__$1 = (function (){var statearr_15506 = state_15380;
(statearr_15506[(8)] = inst_15336__$1);

(statearr_15506[(11)] = inst_15347__$1);

return statearr_15506;
})();
if(inst_15347__$1){
var statearr_15514_19011 = state_15380__$1;
(statearr_15514_19011[(1)] = (15));

} else {
var statearr_15516_19012 = state_15380__$1;
(statearr_15516_19012[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15381 === (16))){
var inst_15347 = (state_15380[(11)]);
var state_15380__$1 = state_15380;
var statearr_15519_19013 = state_15380__$1;
(statearr_15519_19013[(2)] = inst_15347);

(statearr_15519_19013[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15381 === (10))){
var inst_15319 = (state_15380[(2)]);
var state_15380__$1 = state_15380;
var statearr_15521_19014 = state_15380__$1;
(statearr_15521_19014[(2)] = inst_15319);

(statearr_15521_19014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15381 === (18))){
var inst_15351 = (state_15380[(2)]);
var state_15380__$1 = state_15380;
var statearr_15522_19019 = state_15380__$1;
(statearr_15522_19019[(2)] = inst_15351);

(statearr_15522_19019[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15381 === (8))){
var inst_15316 = cljs.core.async.close_BANG_(to);
var state_15380__$1 = state_15380;
var statearr_15524_19020 = state_15380__$1;
(statearr_15524_19020[(2)] = inst_15316);

(statearr_15524_19020[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13373__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13373__auto____0 = (function (){
var statearr_15533 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15533[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13373__auto__);

(statearr_15533[(1)] = (1));

return statearr_15533;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13373__auto____1 = (function (state_15380){
while(true){
var ret_value__13374__auto__ = (function (){try{while(true){
var result__13375__auto__ = switch__13372__auto__(state_15380);
if(cljs.core.keyword_identical_QMARK_(result__13375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13375__auto__;
}
break;
}
}catch (e15538){var ex__13376__auto__ = e15538;
var statearr_15543_19025 = state_15380;
(statearr_15543_19025[(2)] = ex__13376__auto__);


if(cljs.core.seq((state_15380[(4)]))){
var statearr_15545_19033 = state_15380;
(statearr_15545_19033[(1)] = cljs.core.first((state_15380[(4)])));

} else {
throw ex__13376__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19034 = state_15380;
state_15380 = G__19034;
continue;
} else {
return ret_value__13374__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13373__auto__ = function(state_15380){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13373__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13373__auto____1.call(this,state_15380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13373__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13373__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13373__auto__;
})()
})();
var state__14222__auto__ = (function (){var statearr_15547 = f__14221__auto__();
(statearr_15547[(6)] = c__14219__auto__);

return statearr_15547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14222__auto__);
}));

return c__14219__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15553 = arguments.length;
switch (G__15553) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15563 = arguments.length;
switch (G__15563) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15573 = arguments.length;
switch (G__15573) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14219__auto___19042 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14221__auto__ = (function (){var switch__13372__auto__ = (function (state_15606){
var state_val_15607 = (state_15606[(1)]);
if((state_val_15607 === (7))){
var inst_15600 = (state_15606[(2)]);
var state_15606__$1 = state_15606;
var statearr_15613_19043 = state_15606__$1;
(statearr_15613_19043[(2)] = inst_15600);

(statearr_15613_19043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (1))){
var state_15606__$1 = state_15606;
var statearr_15614_19044 = state_15606__$1;
(statearr_15614_19044[(2)] = null);

(statearr_15614_19044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (4))){
var inst_15580 = (state_15606[(7)]);
var inst_15580__$1 = (state_15606[(2)]);
var inst_15581 = (inst_15580__$1 == null);
var state_15606__$1 = (function (){var statearr_15616 = state_15606;
(statearr_15616[(7)] = inst_15580__$1);

return statearr_15616;
})();
if(cljs.core.truth_(inst_15581)){
var statearr_15617_19050 = state_15606__$1;
(statearr_15617_19050[(1)] = (5));

} else {
var statearr_15618_19051 = state_15606__$1;
(statearr_15618_19051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (13))){
var state_15606__$1 = state_15606;
var statearr_15619_19058 = state_15606__$1;
(statearr_15619_19058[(2)] = null);

(statearr_15619_19058[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (6))){
var inst_15580 = (state_15606[(7)]);
var inst_15587 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15580) : p.call(null,inst_15580));
var state_15606__$1 = state_15606;
if(cljs.core.truth_(inst_15587)){
var statearr_15624_19059 = state_15606__$1;
(statearr_15624_19059[(1)] = (9));

} else {
var statearr_15625_19060 = state_15606__$1;
(statearr_15625_19060[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (3))){
var inst_15603 = (state_15606[(2)]);
var state_15606__$1 = state_15606;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15606__$1,inst_15603);
} else {
if((state_val_15607 === (12))){
var state_15606__$1 = state_15606;
var statearr_15626_19061 = state_15606__$1;
(statearr_15626_19061[(2)] = null);

(statearr_15626_19061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (2))){
var state_15606__$1 = state_15606;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15606__$1,(4),ch);
} else {
if((state_val_15607 === (11))){
var inst_15580 = (state_15606[(7)]);
var inst_15591 = (state_15606[(2)]);
var state_15606__$1 = state_15606;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15606__$1,(8),inst_15591,inst_15580);
} else {
if((state_val_15607 === (9))){
var state_15606__$1 = state_15606;
var statearr_15634_19062 = state_15606__$1;
(statearr_15634_19062[(2)] = tc);

(statearr_15634_19062[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (5))){
var inst_15583 = cljs.core.async.close_BANG_(tc);
var inst_15584 = cljs.core.async.close_BANG_(fc);
var state_15606__$1 = (function (){var statearr_15635 = state_15606;
(statearr_15635[(8)] = inst_15583);

return statearr_15635;
})();
var statearr_15636_19063 = state_15606__$1;
(statearr_15636_19063[(2)] = inst_15584);

(statearr_15636_19063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (14))){
var inst_15598 = (state_15606[(2)]);
var state_15606__$1 = state_15606;
var statearr_15640_19064 = state_15606__$1;
(statearr_15640_19064[(2)] = inst_15598);

(statearr_15640_19064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (10))){
var state_15606__$1 = state_15606;
var statearr_15642_19065 = state_15606__$1;
(statearr_15642_19065[(2)] = fc);

(statearr_15642_19065[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (8))){
var inst_15593 = (state_15606[(2)]);
var state_15606__$1 = state_15606;
if(cljs.core.truth_(inst_15593)){
var statearr_15644_19067 = state_15606__$1;
(statearr_15644_19067[(1)] = (12));

} else {
var statearr_15645_19068 = state_15606__$1;
(statearr_15645_19068[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13373__auto__ = null;
var cljs$core$async$state_machine__13373__auto____0 = (function (){
var statearr_15649 = [null,null,null,null,null,null,null,null,null];
(statearr_15649[(0)] = cljs$core$async$state_machine__13373__auto__);

(statearr_15649[(1)] = (1));

return statearr_15649;
});
var cljs$core$async$state_machine__13373__auto____1 = (function (state_15606){
while(true){
var ret_value__13374__auto__ = (function (){try{while(true){
var result__13375__auto__ = switch__13372__auto__(state_15606);
if(cljs.core.keyword_identical_QMARK_(result__13375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13375__auto__;
}
break;
}
}catch (e15650){var ex__13376__auto__ = e15650;
var statearr_15651_19069 = state_15606;
(statearr_15651_19069[(2)] = ex__13376__auto__);


if(cljs.core.seq((state_15606[(4)]))){
var statearr_15654_19073 = state_15606;
(statearr_15654_19073[(1)] = cljs.core.first((state_15606[(4)])));

} else {
throw ex__13376__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19078 = state_15606;
state_15606 = G__19078;
continue;
} else {
return ret_value__13374__auto__;
}
break;
}
});
cljs$core$async$state_machine__13373__auto__ = function(state_15606){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13373__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13373__auto____1.call(this,state_15606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13373__auto____0;
cljs$core$async$state_machine__13373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13373__auto____1;
return cljs$core$async$state_machine__13373__auto__;
})()
})();
var state__14222__auto__ = (function (){var statearr_15660 = f__14221__auto__();
(statearr_15660[(6)] = c__14219__auto___19042);

return statearr_15660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14222__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14219__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14221__auto__ = (function (){var switch__13372__auto__ = (function (state_15721){
var state_val_15722 = (state_15721[(1)]);
if((state_val_15722 === (7))){
var inst_15715 = (state_15721[(2)]);
var state_15721__$1 = state_15721;
var statearr_15755_19080 = state_15721__$1;
(statearr_15755_19080[(2)] = inst_15715);

(statearr_15755_19080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15722 === (1))){
var inst_15693 = init;
var inst_15694 = inst_15693;
var state_15721__$1 = (function (){var statearr_15766 = state_15721;
(statearr_15766[(7)] = inst_15694);

return statearr_15766;
})();
var statearr_15773_19081 = state_15721__$1;
(statearr_15773_19081[(2)] = null);

(statearr_15773_19081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15722 === (4))){
var inst_15697 = (state_15721[(8)]);
var inst_15697__$1 = (state_15721[(2)]);
var inst_15698 = (inst_15697__$1 == null);
var state_15721__$1 = (function (){var statearr_15785 = state_15721;
(statearr_15785[(8)] = inst_15697__$1);

return statearr_15785;
})();
if(cljs.core.truth_(inst_15698)){
var statearr_15787_19082 = state_15721__$1;
(statearr_15787_19082[(1)] = (5));

} else {
var statearr_15792_19083 = state_15721__$1;
(statearr_15792_19083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15722 === (6))){
var inst_15694 = (state_15721[(7)]);
var inst_15697 = (state_15721[(8)]);
var inst_15701 = (state_15721[(9)]);
var inst_15701__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15694,inst_15697) : f.call(null,inst_15694,inst_15697));
var inst_15706 = cljs.core.reduced_QMARK_(inst_15701__$1);
var state_15721__$1 = (function (){var statearr_15809 = state_15721;
(statearr_15809[(9)] = inst_15701__$1);

return statearr_15809;
})();
if(inst_15706){
var statearr_15815_19084 = state_15721__$1;
(statearr_15815_19084[(1)] = (8));

} else {
var statearr_15824_19085 = state_15721__$1;
(statearr_15824_19085[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15722 === (3))){
var inst_15718 = (state_15721[(2)]);
var state_15721__$1 = state_15721;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15721__$1,inst_15718);
} else {
if((state_val_15722 === (2))){
var state_15721__$1 = state_15721;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15721__$1,(4),ch);
} else {
if((state_val_15722 === (9))){
var inst_15701 = (state_15721[(9)]);
var inst_15694 = inst_15701;
var state_15721__$1 = (function (){var statearr_15829 = state_15721;
(statearr_15829[(7)] = inst_15694);

return statearr_15829;
})();
var statearr_15831_19093 = state_15721__$1;
(statearr_15831_19093[(2)] = null);

(statearr_15831_19093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15722 === (5))){
var inst_15694 = (state_15721[(7)]);
var state_15721__$1 = state_15721;
var statearr_15834_19095 = state_15721__$1;
(statearr_15834_19095[(2)] = inst_15694);

(statearr_15834_19095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15722 === (10))){
var inst_15713 = (state_15721[(2)]);
var state_15721__$1 = state_15721;
var statearr_15835_19100 = state_15721__$1;
(statearr_15835_19100[(2)] = inst_15713);

(statearr_15835_19100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15722 === (8))){
var inst_15701 = (state_15721[(9)]);
var inst_15709 = cljs.core.deref(inst_15701);
var state_15721__$1 = state_15721;
var statearr_15836_19101 = state_15721__$1;
(statearr_15836_19101[(2)] = inst_15709);

(statearr_15836_19101[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13373__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13373__auto____0 = (function (){
var statearr_15837 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15837[(0)] = cljs$core$async$reduce_$_state_machine__13373__auto__);

(statearr_15837[(1)] = (1));

return statearr_15837;
});
var cljs$core$async$reduce_$_state_machine__13373__auto____1 = (function (state_15721){
while(true){
var ret_value__13374__auto__ = (function (){try{while(true){
var result__13375__auto__ = switch__13372__auto__(state_15721);
if(cljs.core.keyword_identical_QMARK_(result__13375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13375__auto__;
}
break;
}
}catch (e15838){var ex__13376__auto__ = e15838;
var statearr_15840_19102 = state_15721;
(statearr_15840_19102[(2)] = ex__13376__auto__);


if(cljs.core.seq((state_15721[(4)]))){
var statearr_15842_19103 = state_15721;
(statearr_15842_19103[(1)] = cljs.core.first((state_15721[(4)])));

} else {
throw ex__13376__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19104 = state_15721;
state_15721 = G__19104;
continue;
} else {
return ret_value__13374__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13373__auto__ = function(state_15721){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13373__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13373__auto____1.call(this,state_15721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13373__auto____0;
cljs$core$async$reduce_$_state_machine__13373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13373__auto____1;
return cljs$core$async$reduce_$_state_machine__13373__auto__;
})()
})();
var state__14222__auto__ = (function (){var statearr_15843 = f__14221__auto__();
(statearr_15843[(6)] = c__14219__auto__);

return statearr_15843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14222__auto__);
}));

return c__14219__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14219__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14221__auto__ = (function (){var switch__13372__auto__ = (function (state_15855){
var state_val_15856 = (state_15855[(1)]);
if((state_val_15856 === (1))){
var inst_15845 = cljs.core.async.reduce(f__$1,init,ch);
var state_15855__$1 = state_15855;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15855__$1,(2),inst_15845);
} else {
if((state_val_15856 === (2))){
var inst_15847 = (state_15855[(2)]);
var inst_15848 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15847) : f__$1.call(null,inst_15847));
var state_15855__$1 = state_15855;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15855__$1,inst_15848);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13373__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13373__auto____0 = (function (){
var statearr_15862 = [null,null,null,null,null,null,null];
(statearr_15862[(0)] = cljs$core$async$transduce_$_state_machine__13373__auto__);

(statearr_15862[(1)] = (1));

return statearr_15862;
});
var cljs$core$async$transduce_$_state_machine__13373__auto____1 = (function (state_15855){
while(true){
var ret_value__13374__auto__ = (function (){try{while(true){
var result__13375__auto__ = switch__13372__auto__(state_15855);
if(cljs.core.keyword_identical_QMARK_(result__13375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13375__auto__;
}
break;
}
}catch (e15863){var ex__13376__auto__ = e15863;
var statearr_15864_19109 = state_15855;
(statearr_15864_19109[(2)] = ex__13376__auto__);


if(cljs.core.seq((state_15855[(4)]))){
var statearr_15865_19111 = state_15855;
(statearr_15865_19111[(1)] = cljs.core.first((state_15855[(4)])));

} else {
throw ex__13376__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19115 = state_15855;
state_15855 = G__19115;
continue;
} else {
return ret_value__13374__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13373__auto__ = function(state_15855){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13373__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13373__auto____1.call(this,state_15855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13373__auto____0;
cljs$core$async$transduce_$_state_machine__13373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13373__auto____1;
return cljs$core$async$transduce_$_state_machine__13373__auto__;
})()
})();
var state__14222__auto__ = (function (){var statearr_15866 = f__14221__auto__();
(statearr_15866[(6)] = c__14219__auto__);

return statearr_15866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14222__auto__);
}));

return c__14219__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15873 = arguments.length;
switch (G__15873) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14219__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14221__auto__ = (function (){var switch__13372__auto__ = (function (state_15905){
var state_val_15906 = (state_15905[(1)]);
if((state_val_15906 === (7))){
var inst_15887 = (state_15905[(2)]);
var state_15905__$1 = state_15905;
var statearr_15915_19122 = state_15905__$1;
(statearr_15915_19122[(2)] = inst_15887);

(statearr_15915_19122[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15906 === (1))){
var inst_15881 = cljs.core.seq(coll);
var inst_15882 = inst_15881;
var state_15905__$1 = (function (){var statearr_15917 = state_15905;
(statearr_15917[(7)] = inst_15882);

return statearr_15917;
})();
var statearr_15919_19132 = state_15905__$1;
(statearr_15919_19132[(2)] = null);

(statearr_15919_19132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15906 === (4))){
var inst_15882 = (state_15905[(7)]);
var inst_15885 = cljs.core.first(inst_15882);
var state_15905__$1 = state_15905;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15905__$1,(7),ch,inst_15885);
} else {
if((state_val_15906 === (13))){
var inst_15899 = (state_15905[(2)]);
var state_15905__$1 = state_15905;
var statearr_15923_19133 = state_15905__$1;
(statearr_15923_19133[(2)] = inst_15899);

(statearr_15923_19133[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15906 === (6))){
var inst_15890 = (state_15905[(2)]);
var state_15905__$1 = state_15905;
if(cljs.core.truth_(inst_15890)){
var statearr_15925_19134 = state_15905__$1;
(statearr_15925_19134[(1)] = (8));

} else {
var statearr_15926_19135 = state_15905__$1;
(statearr_15926_19135[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15906 === (3))){
var inst_15903 = (state_15905[(2)]);
var state_15905__$1 = state_15905;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15905__$1,inst_15903);
} else {
if((state_val_15906 === (12))){
var state_15905__$1 = state_15905;
var statearr_15931_19136 = state_15905__$1;
(statearr_15931_19136[(2)] = null);

(statearr_15931_19136[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15906 === (2))){
var inst_15882 = (state_15905[(7)]);
var state_15905__$1 = state_15905;
if(cljs.core.truth_(inst_15882)){
var statearr_15934_19137 = state_15905__$1;
(statearr_15934_19137[(1)] = (4));

} else {
var statearr_15935_19138 = state_15905__$1;
(statearr_15935_19138[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15906 === (11))){
var inst_15896 = cljs.core.async.close_BANG_(ch);
var state_15905__$1 = state_15905;
var statearr_15943_19139 = state_15905__$1;
(statearr_15943_19139[(2)] = inst_15896);

(statearr_15943_19139[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15906 === (9))){
var state_15905__$1 = state_15905;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15944_19140 = state_15905__$1;
(statearr_15944_19140[(1)] = (11));

} else {
var statearr_15946_19141 = state_15905__$1;
(statearr_15946_19141[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15906 === (5))){
var inst_15882 = (state_15905[(7)]);
var state_15905__$1 = state_15905;
var statearr_15947_19142 = state_15905__$1;
(statearr_15947_19142[(2)] = inst_15882);

(statearr_15947_19142[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15906 === (10))){
var inst_15901 = (state_15905[(2)]);
var state_15905__$1 = state_15905;
var statearr_15951_19143 = state_15905__$1;
(statearr_15951_19143[(2)] = inst_15901);

(statearr_15951_19143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15906 === (8))){
var inst_15882 = (state_15905[(7)]);
var inst_15892 = cljs.core.next(inst_15882);
var inst_15882__$1 = inst_15892;
var state_15905__$1 = (function (){var statearr_15953 = state_15905;
(statearr_15953[(7)] = inst_15882__$1);

return statearr_15953;
})();
var statearr_15954_19144 = state_15905__$1;
(statearr_15954_19144[(2)] = null);

(statearr_15954_19144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13373__auto__ = null;
var cljs$core$async$state_machine__13373__auto____0 = (function (){
var statearr_15959 = [null,null,null,null,null,null,null,null];
(statearr_15959[(0)] = cljs$core$async$state_machine__13373__auto__);

(statearr_15959[(1)] = (1));

return statearr_15959;
});
var cljs$core$async$state_machine__13373__auto____1 = (function (state_15905){
while(true){
var ret_value__13374__auto__ = (function (){try{while(true){
var result__13375__auto__ = switch__13372__auto__(state_15905);
if(cljs.core.keyword_identical_QMARK_(result__13375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13375__auto__;
}
break;
}
}catch (e15960){var ex__13376__auto__ = e15960;
var statearr_15961_19145 = state_15905;
(statearr_15961_19145[(2)] = ex__13376__auto__);


if(cljs.core.seq((state_15905[(4)]))){
var statearr_15963_19146 = state_15905;
(statearr_15963_19146[(1)] = cljs.core.first((state_15905[(4)])));

} else {
throw ex__13376__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19148 = state_15905;
state_15905 = G__19148;
continue;
} else {
return ret_value__13374__auto__;
}
break;
}
});
cljs$core$async$state_machine__13373__auto__ = function(state_15905){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13373__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13373__auto____1.call(this,state_15905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13373__auto____0;
cljs$core$async$state_machine__13373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13373__auto____1;
return cljs$core$async$state_machine__13373__auto__;
})()
})();
var state__14222__auto__ = (function (){var statearr_15968 = f__14221__auto__();
(statearr_15968[(6)] = c__14219__auto__);

return statearr_15968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14222__auto__);
}));

return c__14219__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15978 = arguments.length;
switch (G__15978) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_19157 = (function (_){
var x__5498__auto__ = (((_ == null))?null:_);
var m__5499__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5499__auto__.call(null,_));
} else {
var m__5497__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5497__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_19157(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_19161 = (function (m,ch,close_QMARK_){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5499__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5497__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5497__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_19161(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_19168 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_19168(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_19169 = (function (m){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5499__auto__.call(null,m));
} else {
var m__5497__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5497__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_19169(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16045 = (function (ch,cs,meta16046){
this.ch = ch;
this.cs = cs;
this.meta16046 = meta16046;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16047,meta16046__$1){
var self__ = this;
var _16047__$1 = this;
return (new cljs.core.async.t_cljs$core$async16045(self__.ch,self__.cs,meta16046__$1));
}));

(cljs.core.async.t_cljs$core$async16045.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16047){
var self__ = this;
var _16047__$1 = this;
return self__.meta16046;
}));

(cljs.core.async.t_cljs$core$async16045.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16045.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16045.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16045.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async16045.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async16045.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async16045.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16046","meta16046",-1986919916,null)], null);
}));

(cljs.core.async.t_cljs$core$async16045.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16045.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16045");

(cljs.core.async.t_cljs$core$async16045.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async16045");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16045.
 */
cljs.core.async.__GT_t_cljs$core$async16045 = (function cljs$core$async$__GT_t_cljs$core$async16045(ch,cs,meta16046){
return (new cljs.core.async.t_cljs$core$async16045(ch,cs,meta16046));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async16045(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14219__auto___19189 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14221__auto__ = (function (){var switch__13372__auto__ = (function (state_16257){
var state_val_16259 = (state_16257[(1)]);
if((state_val_16259 === (7))){
var inst_16249 = (state_16257[(2)]);
var state_16257__$1 = state_16257;
var statearr_16266_19197 = state_16257__$1;
(statearr_16266_19197[(2)] = inst_16249);

(statearr_16266_19197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16259 === (20))){
var inst_16118 = (state_16257[(7)]);
var inst_16138 = cljs.core.first(inst_16118);
var inst_16143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16138,(0),null);
var inst_16144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16138,(1),null);
var state_16257__$1 = (function (){var statearr_16273 = state_16257;
(statearr_16273[(8)] = inst_16143);

return statearr_16273;
})();
if(cljs.core.truth_(inst_16144)){
var statearr_16279_19206 = state_16257__$1;
(statearr_16279_19206[(1)] = (22));

} else {
var statearr_16281_19207 = state_16257__$1;
(statearr_16281_19207[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16259 === (27))){
var inst_16184 = (state_16257[(9)]);
var inst_16186 = (state_16257[(10)]);
var inst_16191 = (state_16257[(11)]);
var inst_16079 = (state_16257[(12)]);
var inst_16191__$1 = cljs.core._nth(inst_16184,inst_16186);
var inst_16194 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16191__$1,inst_16079,done);
var state_16257__$1 = (function (){var statearr_16295 = state_16257;
(statearr_16295[(11)] = inst_16191__$1);

return statearr_16295;
})();
if(cljs.core.truth_(inst_16194)){
var statearr_16298_19208 = state_16257__$1;
(statearr_16298_19208[(1)] = (30));

} else {
var statearr_16299_19209 = state_16257__$1;
(statearr_16299_19209[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16259 === (1))){
var state_16257__$1 = state_16257;
var statearr_16304_19210 = state_16257__$1;
(statearr_16304_19210[(2)] = null);

(statearr_16304_19210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16259 === (24))){
var inst_16118 = (state_16257[(7)]);
var inst_16156 = (state_16257[(2)]);
var inst_16157 = cljs.core.next(inst_16118);
var inst_16091 = inst_16157;
var inst_16092 = null;
var inst_16093 = (0);
var inst_16094 = (0);
var state_16257__$1 = (function (){var statearr_16310 = state_16257;
(statearr_16310[(13)] = inst_16156);

(statearr_16310[(14)] = inst_16091);

(statearr_16310[(15)] = inst_16092);

(statearr_16310[(16)] = inst_16093);

(statearr_16310[(17)] = inst_16094);

return statearr_16310;
})();
var statearr_16319_19217 = state_16257__$1;
(statearr_16319_19217[(2)] = null);

(statearr_16319_19217[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16259 === (39))){
var state_16257__$1 = state_16257;
var statearr_16337_19218 = state_16257__$1;
(statearr_16337_19218[(2)] = null);

(statearr_16337_19218[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16259 === (4))){
var inst_16079 = (state_16257[(12)]);
var inst_16079__$1 = (state_16257[(2)]);
var inst_16080 = (inst_16079__$1 == null);
var state_16257__$1 = (function (){var statearr_16347 = state_16257;
(statearr_16347[(12)] = inst_16079__$1);

return statearr_16347;
})();
if(cljs.core.truth_(inst_16080)){
var statearr_16349_19223 = state_16257__$1;
(statearr_16349_19223[(1)] = (5));

} else {
var statearr_16351_19224 = state_16257__$1;
(statearr_16351_19224[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16259 === (15))){
var inst_16094 = (state_16257[(17)]);
var inst_16091 = (state_16257[(14)]);
var inst_16092 = (state_16257[(15)]);
var inst_16093 = (state_16257[(16)]);
var inst_16110 = (state_16257[(2)]);
var inst_16112 = (inst_16094 + (1));
var tmp16325 = inst_16092;
var tmp16326 = inst_16093;
var tmp16327 = inst_16091;
var inst_16091__$1 = tmp16327;
var inst_16092__$1 = tmp16325;
var inst_16093__$1 = tmp16326;
var inst_16094__$1 = inst_16112;
var state_16257__$1 = (function (){var statearr_16355 = state_16257;
(statearr_16355[(18)] = inst_16110);

(statearr_16355[(14)] = inst_16091__$1);

(statearr_16355[(15)] = inst_16092__$1);

(statearr_16355[(16)] = inst_16093__$1);

(statearr_16355[(17)] = inst_16094__$1);

return statearr_16355;
})();
var statearr_16362_19228 = state_16257__$1;
(statearr_16362_19228[(2)] = null);

(statearr_16362_19228[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16259 === (21))){
var inst_16160 = (state_16257[(2)]);
var state_16257__$1 = state_16257;
var statearr_16371_19229 = state_16257__$1;
(statearr_16371_19229[(2)] = inst_16160);

(statearr_16371_19229[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16259 === (31))){
var inst_16191 = (state_16257[(11)]);
var inst_16198 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16191);
var state_16257__$1 = state_16257;
var statearr_16381_19230 = state_16257__$1;
(statearr_16381_19230[(2)] = inst_16198);

(statearr_16381_19230[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16259 === (32))){
var inst_16186 = (state_16257[(10)]);
var inst_16183 = (state_16257[(19)]);
var inst_16184 = (state_16257[(9)]);
var inst_16185 = (state_16257[(20)]);
var inst_16200 = (state_16257[(2)]);
var inst_16201 = (inst_16186 + (1));
var tmp16368 = inst_16183;
var tmp16369 = inst_16184;
var tmp16370 = inst_16185;
var inst_16183__$1 = tmp16368;
var inst_16184__$1 = tmp16369;
var inst_16185__$1 = tmp16370;
var inst_16186__$1 = inst_16201;
var state_16257__$1 = (function (){var statearr_16387 = state_16257;
(statearr_16387[(21)] = inst_16200);

(statearr_16387[(19)] = inst_16183__$1);

(statearr_16387[(9)] = inst_16184__$1);

(statearr_16387[(20)] = inst_16185__$1);

(statearr_16387[(10)] = inst_16186__$1);

return statearr_16387;
})();
var statearr_16391_19237 = state_16257__$1;
(statearr_16391_19237[(2)] = null);

(statearr_16391_19237[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16259 === (40))){
var inst_16215 = (state_16257[(22)]);
var inst_16220 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16215);
var state_16257__$1 = state_16257;
var statearr_16398_19238 = state_16257__$1;
(statearr_16398_19238[(2)] = inst_16220);

(statearr_16398_19238[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16259 === (33))){
var inst_16205 = (state_16257[(23)]);
var inst_16208 = cljs.core.chunked_seq_QMARK_(inst_16205);
var state_16257__$1 = state_16257;
if(inst_16208){
var statearr_16405_19239 = state_16257__$1;
(statearr_16405_19239[(1)] = (36));

} else {
var statearr_16406_19240 = state_16257__$1;
(statearr_16406_19240[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16259 === (13))){
var inst_16104 = (state_16257[(24)]);
var inst_16107 = cljs.core.async.close_BANG_(inst_16104);
var state_16257__$1 = state_16257;
var statearr_16409_19241 = state_16257__$1;
(statearr_16409_19241[(2)] = inst_16107);

(statearr_16409_19241[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16259 === (22))){
var inst_16143 = (state_16257[(8)]);
var inst_16152 = cljs.core.async.close_BANG_(inst_16143);
var state_16257__$1 = state_16257;
var statearr_16412_19242 = state_16257__$1;
(statearr_16412_19242[(2)] = inst_16152);

(statearr_16412_19242[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16259 === (36))){
var inst_16205 = (state_16257[(23)]);
var inst_16210 = cljs.core.chunk_first(inst_16205);
var inst_16211 = cljs.core.chunk_rest(inst_16205);
var inst_16212 = cljs.core.count(inst_16210);
var inst_16183 = inst_16211;
var inst_16184 = inst_16210;
var inst_16185 = inst_16212;
var inst_16186 = (0);
var state_16257__$1 = (function (){var statearr_16422 = state_16257;
(statearr_16422[(19)] = inst_16183);

(statearr_16422[(9)] = inst_16184);

(statearr_16422[(20)] = inst_16185);

(statearr_16422[(10)] = inst_16186);

return statearr_16422;
})();
var statearr_16424_19244 = state_16257__$1;
(statearr_16424_19244[(2)] = null);

(statearr_16424_19244[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16259 === (41))){
var inst_16205 = (state_16257[(23)]);
var inst_16223 = (state_16257[(2)]);
var inst_16224 = cljs.core.next(inst_16205);
var inst_16183 = inst_16224;
var inst_16184 = null;
var inst_16185 = (0);
var inst_16186 = (0);
var state_16257__$1 = (function (){var statearr_16431 = state_16257;
(statearr_16431[(25)] = inst_16223);

(statearr_16431[(19)] = inst_16183);

(statearr_16431[(9)] = inst_16184);

(statearr_16431[(20)] = inst_16185);

(statearr_16431[(10)] = inst_16186);

return statearr_16431;
})();
var statearr_16434_19257 = state_16257__$1;
(statearr_16434_19257[(2)] = null);

(statearr_16434_19257[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16259 === (43))){
var state_16257__$1 = state_16257;
var statearr_16439_19262 = state_16257__$1;
(statearr_16439_19262[(2)] = null);

(statearr_16439_19262[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16259 === (29))){
var inst_16235 = (state_16257[(2)]);
var state_16257__$1 = state_16257;
var statearr_16447_19263 = state_16257__$1;
(statearr_16447_19263[(2)] = inst_16235);

(statearr_16447_19263[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16259 === (44))){
var inst_16246 = (state_16257[(2)]);
var state_16257__$1 = (function (){var statearr_16456 = state_16257;
(statearr_16456[(26)] = inst_16246);

return statearr_16456;
})();
var statearr_16458_19264 = state_16257__$1;
(statearr_16458_19264[(2)] = null);

(statearr_16458_19264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16259 === (6))){
var inst_16171 = (state_16257[(27)]);
var inst_16170 = cljs.core.deref(cs);
var inst_16171__$1 = cljs.core.keys(inst_16170);
var inst_16172 = cljs.core.count(inst_16171__$1);
var inst_16173 = cljs.core.reset_BANG_(dctr,inst_16172);
var inst_16180 = cljs.core.seq(inst_16171__$1);
var inst_16183 = inst_16180;
var inst_16184 = null;
var inst_16185 = (0);
var inst_16186 = (0);
var state_16257__$1 = (function (){var statearr_16465 = state_16257;
(statearr_16465[(27)] = inst_16171__$1);

(statearr_16465[(28)] = inst_16173);

(statearr_16465[(19)] = inst_16183);

(statearr_16465[(9)] = inst_16184);

(statearr_16465[(20)] = inst_16185);

(statearr_16465[(10)] = inst_16186);

return statearr_16465;
})();
var statearr_16466_19265 = state_16257__$1;
(statearr_16466_19265[(2)] = null);

(statearr_16466_19265[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16259 === (28))){
var inst_16183 = (state_16257[(19)]);
var inst_16205 = (state_16257[(23)]);
var inst_16205__$1 = cljs.core.seq(inst_16183);
var state_16257__$1 = (function (){var statearr_16474 = state_16257;
(statearr_16474[(23)] = inst_16205__$1);

return statearr_16474;
})();
if(inst_16205__$1){
var statearr_16480_19266 = state_16257__$1;
(statearr_16480_19266[(1)] = (33));

} else {
var statearr_16483_19267 = state_16257__$1;
(statearr_16483_19267[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16259 === (25))){
var inst_16186 = (state_16257[(10)]);
var inst_16185 = (state_16257[(20)]);
var inst_16188 = (inst_16186 < inst_16185);
var inst_16189 = inst_16188;
var state_16257__$1 = state_16257;
if(cljs.core.truth_(inst_16189)){
var statearr_16487_19268 = state_16257__$1;
(statearr_16487_19268[(1)] = (27));

} else {
var statearr_16488_19269 = state_16257__$1;
(statearr_16488_19269[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16259 === (34))){
var state_16257__$1 = state_16257;
var statearr_16492_19271 = state_16257__$1;
(statearr_16492_19271[(2)] = null);

(statearr_16492_19271[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16259 === (17))){
var state_16257__$1 = state_16257;
var statearr_16494_19275 = state_16257__$1;
(statearr_16494_19275[(2)] = null);

(statearr_16494_19275[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16259 === (3))){
var inst_16251 = (state_16257[(2)]);
var state_16257__$1 = state_16257;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16257__$1,inst_16251);
} else {
if((state_val_16259 === (12))){
var inst_16165 = (state_16257[(2)]);
var state_16257__$1 = state_16257;
var statearr_16500_19277 = state_16257__$1;
(statearr_16500_19277[(2)] = inst_16165);

(statearr_16500_19277[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16259 === (2))){
var state_16257__$1 = state_16257;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16257__$1,(4),ch);
} else {
if((state_val_16259 === (23))){
var state_16257__$1 = state_16257;
var statearr_16505_19278 = state_16257__$1;
(statearr_16505_19278[(2)] = null);

(statearr_16505_19278[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16259 === (35))){
var inst_16233 = (state_16257[(2)]);
var state_16257__$1 = state_16257;
var statearr_16506_19279 = state_16257__$1;
(statearr_16506_19279[(2)] = inst_16233);

(statearr_16506_19279[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16259 === (19))){
var inst_16118 = (state_16257[(7)]);
var inst_16122 = cljs.core.chunk_first(inst_16118);
var inst_16126 = cljs.core.chunk_rest(inst_16118);
var inst_16128 = cljs.core.count(inst_16122);
var inst_16091 = inst_16126;
var inst_16092 = inst_16122;
var inst_16093 = inst_16128;
var inst_16094 = (0);
var state_16257__$1 = (function (){var statearr_16514 = state_16257;
(statearr_16514[(14)] = inst_16091);

(statearr_16514[(15)] = inst_16092);

(statearr_16514[(16)] = inst_16093);

(statearr_16514[(17)] = inst_16094);

return statearr_16514;
})();
var statearr_16515_19280 = state_16257__$1;
(statearr_16515_19280[(2)] = null);

(statearr_16515_19280[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16259 === (11))){
var inst_16091 = (state_16257[(14)]);
var inst_16118 = (state_16257[(7)]);
var inst_16118__$1 = cljs.core.seq(inst_16091);
var state_16257__$1 = (function (){var statearr_16523 = state_16257;
(statearr_16523[(7)] = inst_16118__$1);

return statearr_16523;
})();
if(inst_16118__$1){
var statearr_16527_19281 = state_16257__$1;
(statearr_16527_19281[(1)] = (16));

} else {
var statearr_16528_19282 = state_16257__$1;
(statearr_16528_19282[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16259 === (9))){
var inst_16167 = (state_16257[(2)]);
var state_16257__$1 = state_16257;
var statearr_16529_19283 = state_16257__$1;
(statearr_16529_19283[(2)] = inst_16167);

(statearr_16529_19283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16259 === (5))){
var inst_16088 = cljs.core.deref(cs);
var inst_16089 = cljs.core.seq(inst_16088);
var inst_16091 = inst_16089;
var inst_16092 = null;
var inst_16093 = (0);
var inst_16094 = (0);
var state_16257__$1 = (function (){var statearr_16539 = state_16257;
(statearr_16539[(14)] = inst_16091);

(statearr_16539[(15)] = inst_16092);

(statearr_16539[(16)] = inst_16093);

(statearr_16539[(17)] = inst_16094);

return statearr_16539;
})();
var statearr_16540_19284 = state_16257__$1;
(statearr_16540_19284[(2)] = null);

(statearr_16540_19284[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16259 === (14))){
var state_16257__$1 = state_16257;
var statearr_16545_19285 = state_16257__$1;
(statearr_16545_19285[(2)] = null);

(statearr_16545_19285[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16259 === (45))){
var inst_16243 = (state_16257[(2)]);
var state_16257__$1 = state_16257;
var statearr_16546_19286 = state_16257__$1;
(statearr_16546_19286[(2)] = inst_16243);

(statearr_16546_19286[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16259 === (26))){
var inst_16171 = (state_16257[(27)]);
var inst_16237 = (state_16257[(2)]);
var inst_16238 = cljs.core.seq(inst_16171);
var state_16257__$1 = (function (){var statearr_16550 = state_16257;
(statearr_16550[(29)] = inst_16237);

return statearr_16550;
})();
if(inst_16238){
var statearr_16552_19288 = state_16257__$1;
(statearr_16552_19288[(1)] = (42));

} else {
var statearr_16553_19289 = state_16257__$1;
(statearr_16553_19289[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16259 === (16))){
var inst_16118 = (state_16257[(7)]);
var inst_16120 = cljs.core.chunked_seq_QMARK_(inst_16118);
var state_16257__$1 = state_16257;
if(inst_16120){
var statearr_16555_19290 = state_16257__$1;
(statearr_16555_19290[(1)] = (19));

} else {
var statearr_16556_19291 = state_16257__$1;
(statearr_16556_19291[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16259 === (38))){
var inst_16227 = (state_16257[(2)]);
var state_16257__$1 = state_16257;
var statearr_16557_19292 = state_16257__$1;
(statearr_16557_19292[(2)] = inst_16227);

(statearr_16557_19292[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16259 === (30))){
var state_16257__$1 = state_16257;
var statearr_16558_19303 = state_16257__$1;
(statearr_16558_19303[(2)] = null);

(statearr_16558_19303[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16259 === (10))){
var inst_16092 = (state_16257[(15)]);
var inst_16094 = (state_16257[(17)]);
var inst_16103 = cljs.core._nth(inst_16092,inst_16094);
var inst_16104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16103,(0),null);
var inst_16105 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16103,(1),null);
var state_16257__$1 = (function (){var statearr_16559 = state_16257;
(statearr_16559[(24)] = inst_16104);

return statearr_16559;
})();
if(cljs.core.truth_(inst_16105)){
var statearr_16564_19308 = state_16257__$1;
(statearr_16564_19308[(1)] = (13));

} else {
var statearr_16565_19309 = state_16257__$1;
(statearr_16565_19309[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16259 === (18))){
var inst_16163 = (state_16257[(2)]);
var state_16257__$1 = state_16257;
var statearr_16566_19310 = state_16257__$1;
(statearr_16566_19310[(2)] = inst_16163);

(statearr_16566_19310[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16259 === (42))){
var state_16257__$1 = state_16257;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16257__$1,(45),dchan);
} else {
if((state_val_16259 === (37))){
var inst_16205 = (state_16257[(23)]);
var inst_16215 = (state_16257[(22)]);
var inst_16079 = (state_16257[(12)]);
var inst_16215__$1 = cljs.core.first(inst_16205);
var inst_16216 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16215__$1,inst_16079,done);
var state_16257__$1 = (function (){var statearr_16571 = state_16257;
(statearr_16571[(22)] = inst_16215__$1);

return statearr_16571;
})();
if(cljs.core.truth_(inst_16216)){
var statearr_16572_19315 = state_16257__$1;
(statearr_16572_19315[(1)] = (39));

} else {
var statearr_16573_19316 = state_16257__$1;
(statearr_16573_19316[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16259 === (8))){
var inst_16094 = (state_16257[(17)]);
var inst_16093 = (state_16257[(16)]);
var inst_16096 = (inst_16094 < inst_16093);
var inst_16097 = inst_16096;
var state_16257__$1 = state_16257;
if(cljs.core.truth_(inst_16097)){
var statearr_16574_19317 = state_16257__$1;
(statearr_16574_19317[(1)] = (10));

} else {
var statearr_16575_19318 = state_16257__$1;
(statearr_16575_19318[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__13373__auto__ = null;
var cljs$core$async$mult_$_state_machine__13373__auto____0 = (function (){
var statearr_16578 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16578[(0)] = cljs$core$async$mult_$_state_machine__13373__auto__);

(statearr_16578[(1)] = (1));

return statearr_16578;
});
var cljs$core$async$mult_$_state_machine__13373__auto____1 = (function (state_16257){
while(true){
var ret_value__13374__auto__ = (function (){try{while(true){
var result__13375__auto__ = switch__13372__auto__(state_16257);
if(cljs.core.keyword_identical_QMARK_(result__13375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13375__auto__;
}
break;
}
}catch (e16580){var ex__13376__auto__ = e16580;
var statearr_16581_19321 = state_16257;
(statearr_16581_19321[(2)] = ex__13376__auto__);


if(cljs.core.seq((state_16257[(4)]))){
var statearr_16582_19322 = state_16257;
(statearr_16582_19322[(1)] = cljs.core.first((state_16257[(4)])));

} else {
throw ex__13376__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19323 = state_16257;
state_16257 = G__19323;
continue;
} else {
return ret_value__13374__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13373__auto__ = function(state_16257){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13373__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13373__auto____1.call(this,state_16257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13373__auto____0;
cljs$core$async$mult_$_state_machine__13373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13373__auto____1;
return cljs$core$async$mult_$_state_machine__13373__auto__;
})()
})();
var state__14222__auto__ = (function (){var statearr_16587 = f__14221__auto__();
(statearr_16587[(6)] = c__14219__auto___19189);

return statearr_16587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14222__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16591 = arguments.length;
switch (G__16591) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_19338 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_19338(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_19339 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_19339(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_19345 = (function (m){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5499__auto__.call(null,m));
} else {
var m__5497__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5497__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_19345(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_19346 = (function (m,state_map){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5499__auto__.call(null,m,state_map));
} else {
var m__5497__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5497__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_19346(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_19347 = (function (m,mode){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5499__auto__.call(null,m,mode));
} else {
var m__5497__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5497__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_19347(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___19353 = arguments.length;
var i__5877__auto___19354 = (0);
while(true){
if((i__5877__auto___19354 < len__5876__auto___19353)){
args__5882__auto__.push((arguments[i__5877__auto___19354]));

var G__19355 = (i__5877__auto___19354 + (1));
i__5877__auto___19354 = G__19355;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((3) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5883__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16630){
var map__16631 = p__16630;
var map__16631__$1 = cljs.core.__destructure_map(map__16631);
var opts = map__16631__$1;
var statearr_16632_19360 = state;
(statearr_16632_19360[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16634_19361 = state;
(statearr_16634_19361[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_16637_19367 = state;
(statearr_16637_19367[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16609){
var G__16610 = cljs.core.first(seq16609);
var seq16609__$1 = cljs.core.next(seq16609);
var G__16615 = cljs.core.first(seq16609__$1);
var seq16609__$2 = cljs.core.next(seq16609__$1);
var G__16616 = cljs.core.first(seq16609__$2);
var seq16609__$3 = cljs.core.next(seq16609__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16610,G__16615,G__16616,seq16609__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16669 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16670){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16670 = meta16670;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16669.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16671,meta16670__$1){
var self__ = this;
var _16671__$1 = this;
return (new cljs.core.async.t_cljs$core$async16669(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16670__$1));
}));

(cljs.core.async.t_cljs$core$async16669.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16671){
var self__ = this;
var _16671__$1 = this;
return self__.meta16670;
}));

(cljs.core.async.t_cljs$core$async16669.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16669.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16669.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16669.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16669.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16669.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16669.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16669.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+"(solo-modes mode)")));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16669.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16670","meta16670",2134539221,null)], null);
}));

(cljs.core.async.t_cljs$core$async16669.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16669.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16669");

(cljs.core.async.t_cljs$core$async16669.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async16669");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16669.
 */
cljs.core.async.__GT_t_cljs$core$async16669 = (function cljs$core$async$__GT_t_cljs$core$async16669(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16670){
return (new cljs.core.async.t_cljs$core$async16669(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16670));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async16669(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14219__auto___19399 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14221__auto__ = (function (){var switch__13372__auto__ = (function (state_16783){
var state_val_16784 = (state_16783[(1)]);
if((state_val_16784 === (7))){
var inst_16741 = (state_16783[(2)]);
var state_16783__$1 = state_16783;
if(cljs.core.truth_(inst_16741)){
var statearr_16790_19402 = state_16783__$1;
(statearr_16790_19402[(1)] = (8));

} else {
var statearr_16792_19403 = state_16783__$1;
(statearr_16792_19403[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16784 === (20))){
var inst_16734 = (state_16783[(7)]);
var state_16783__$1 = state_16783;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16783__$1,(23),out,inst_16734);
} else {
if((state_val_16784 === (1))){
var inst_16714 = calc_state();
var inst_16715 = cljs.core.__destructure_map(inst_16714);
var inst_16716 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16715,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16717 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16715,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16718 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16715,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16719 = inst_16714;
var state_16783__$1 = (function (){var statearr_16796 = state_16783;
(statearr_16796[(8)] = inst_16716);

(statearr_16796[(9)] = inst_16717);

(statearr_16796[(10)] = inst_16718);

(statearr_16796[(11)] = inst_16719);

return statearr_16796;
})();
var statearr_16797_19406 = state_16783__$1;
(statearr_16797_19406[(2)] = null);

(statearr_16797_19406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16784 === (24))){
var inst_16724 = (state_16783[(12)]);
var inst_16719 = inst_16724;
var state_16783__$1 = (function (){var statearr_16798 = state_16783;
(statearr_16798[(11)] = inst_16719);

return statearr_16798;
})();
var statearr_16799_19409 = state_16783__$1;
(statearr_16799_19409[(2)] = null);

(statearr_16799_19409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16784 === (4))){
var inst_16734 = (state_16783[(7)]);
var inst_16736 = (state_16783[(13)]);
var inst_16733 = (state_16783[(2)]);
var inst_16734__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16733,(0),null);
var inst_16735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16733,(1),null);
var inst_16736__$1 = (inst_16734__$1 == null);
var state_16783__$1 = (function (){var statearr_16800 = state_16783;
(statearr_16800[(7)] = inst_16734__$1);

(statearr_16800[(14)] = inst_16735);

(statearr_16800[(13)] = inst_16736__$1);

return statearr_16800;
})();
if(cljs.core.truth_(inst_16736__$1)){
var statearr_16801_19410 = state_16783__$1;
(statearr_16801_19410[(1)] = (5));

} else {
var statearr_16802_19411 = state_16783__$1;
(statearr_16802_19411[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16784 === (15))){
var inst_16725 = (state_16783[(15)]);
var inst_16755 = (state_16783[(16)]);
var inst_16755__$1 = cljs.core.empty_QMARK_(inst_16725);
var state_16783__$1 = (function (){var statearr_16803 = state_16783;
(statearr_16803[(16)] = inst_16755__$1);

return statearr_16803;
})();
if(inst_16755__$1){
var statearr_16804_19412 = state_16783__$1;
(statearr_16804_19412[(1)] = (17));

} else {
var statearr_16805_19413 = state_16783__$1;
(statearr_16805_19413[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16784 === (21))){
var inst_16724 = (state_16783[(12)]);
var inst_16719 = inst_16724;
var state_16783__$1 = (function (){var statearr_16806 = state_16783;
(statearr_16806[(11)] = inst_16719);

return statearr_16806;
})();
var statearr_16807_19414 = state_16783__$1;
(statearr_16807_19414[(2)] = null);

(statearr_16807_19414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16784 === (13))){
var inst_16748 = (state_16783[(2)]);
var inst_16749 = calc_state();
var inst_16719 = inst_16749;
var state_16783__$1 = (function (){var statearr_16810 = state_16783;
(statearr_16810[(17)] = inst_16748);

(statearr_16810[(11)] = inst_16719);

return statearr_16810;
})();
var statearr_16815_19419 = state_16783__$1;
(statearr_16815_19419[(2)] = null);

(statearr_16815_19419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16784 === (22))){
var inst_16775 = (state_16783[(2)]);
var state_16783__$1 = state_16783;
var statearr_16818_19421 = state_16783__$1;
(statearr_16818_19421[(2)] = inst_16775);

(statearr_16818_19421[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16784 === (6))){
var inst_16735 = (state_16783[(14)]);
var inst_16739 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16735,change);
var state_16783__$1 = state_16783;
var statearr_16820_19422 = state_16783__$1;
(statearr_16820_19422[(2)] = inst_16739);

(statearr_16820_19422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16784 === (25))){
var state_16783__$1 = state_16783;
var statearr_16822_19423 = state_16783__$1;
(statearr_16822_19423[(2)] = null);

(statearr_16822_19423[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16784 === (17))){
var inst_16726 = (state_16783[(18)]);
var inst_16735 = (state_16783[(14)]);
var inst_16757 = (inst_16726.cljs$core$IFn$_invoke$arity$1 ? inst_16726.cljs$core$IFn$_invoke$arity$1(inst_16735) : inst_16726.call(null,inst_16735));
var inst_16758 = cljs.core.not(inst_16757);
var state_16783__$1 = state_16783;
var statearr_16823_19424 = state_16783__$1;
(statearr_16823_19424[(2)] = inst_16758);

(statearr_16823_19424[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16784 === (3))){
var inst_16779 = (state_16783[(2)]);
var state_16783__$1 = state_16783;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16783__$1,inst_16779);
} else {
if((state_val_16784 === (12))){
var state_16783__$1 = state_16783;
var statearr_16828_19425 = state_16783__$1;
(statearr_16828_19425[(2)] = null);

(statearr_16828_19425[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16784 === (2))){
var inst_16719 = (state_16783[(11)]);
var inst_16724 = (state_16783[(12)]);
var inst_16724__$1 = cljs.core.__destructure_map(inst_16719);
var inst_16725 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16724__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16726 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16724__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16727 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16724__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16783__$1 = (function (){var statearr_16833 = state_16783;
(statearr_16833[(12)] = inst_16724__$1);

(statearr_16833[(15)] = inst_16725);

(statearr_16833[(18)] = inst_16726);

return statearr_16833;
})();
return cljs.core.async.ioc_alts_BANG_(state_16783__$1,(4),inst_16727);
} else {
if((state_val_16784 === (23))){
var inst_16766 = (state_16783[(2)]);
var state_16783__$1 = state_16783;
if(cljs.core.truth_(inst_16766)){
var statearr_16834_19431 = state_16783__$1;
(statearr_16834_19431[(1)] = (24));

} else {
var statearr_16835_19432 = state_16783__$1;
(statearr_16835_19432[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16784 === (19))){
var inst_16761 = (state_16783[(2)]);
var state_16783__$1 = state_16783;
var statearr_16839_19433 = state_16783__$1;
(statearr_16839_19433[(2)] = inst_16761);

(statearr_16839_19433[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16784 === (11))){
var inst_16735 = (state_16783[(14)]);
var inst_16745 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16735);
var state_16783__$1 = state_16783;
var statearr_16840_19434 = state_16783__$1;
(statearr_16840_19434[(2)] = inst_16745);

(statearr_16840_19434[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16784 === (9))){
var inst_16725 = (state_16783[(15)]);
var inst_16735 = (state_16783[(14)]);
var inst_16752 = (state_16783[(19)]);
var inst_16752__$1 = (inst_16725.cljs$core$IFn$_invoke$arity$1 ? inst_16725.cljs$core$IFn$_invoke$arity$1(inst_16735) : inst_16725.call(null,inst_16735));
var state_16783__$1 = (function (){var statearr_16841 = state_16783;
(statearr_16841[(19)] = inst_16752__$1);

return statearr_16841;
})();
if(cljs.core.truth_(inst_16752__$1)){
var statearr_16842_19436 = state_16783__$1;
(statearr_16842_19436[(1)] = (14));

} else {
var statearr_16843_19437 = state_16783__$1;
(statearr_16843_19437[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16784 === (5))){
var inst_16736 = (state_16783[(13)]);
var state_16783__$1 = state_16783;
var statearr_16845_19438 = state_16783__$1;
(statearr_16845_19438[(2)] = inst_16736);

(statearr_16845_19438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16784 === (14))){
var inst_16752 = (state_16783[(19)]);
var state_16783__$1 = state_16783;
var statearr_16847_19443 = state_16783__$1;
(statearr_16847_19443[(2)] = inst_16752);

(statearr_16847_19443[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16784 === (26))){
var inst_16771 = (state_16783[(2)]);
var state_16783__$1 = state_16783;
var statearr_16851_19445 = state_16783__$1;
(statearr_16851_19445[(2)] = inst_16771);

(statearr_16851_19445[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16784 === (16))){
var inst_16763 = (state_16783[(2)]);
var state_16783__$1 = state_16783;
if(cljs.core.truth_(inst_16763)){
var statearr_16852_19452 = state_16783__$1;
(statearr_16852_19452[(1)] = (20));

} else {
var statearr_16853_19453 = state_16783__$1;
(statearr_16853_19453[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16784 === (10))){
var inst_16777 = (state_16783[(2)]);
var state_16783__$1 = state_16783;
var statearr_16860_19455 = state_16783__$1;
(statearr_16860_19455[(2)] = inst_16777);

(statearr_16860_19455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16784 === (18))){
var inst_16755 = (state_16783[(16)]);
var state_16783__$1 = state_16783;
var statearr_16861_19456 = state_16783__$1;
(statearr_16861_19456[(2)] = inst_16755);

(statearr_16861_19456[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16784 === (8))){
var inst_16734 = (state_16783[(7)]);
var inst_16743 = (inst_16734 == null);
var state_16783__$1 = state_16783;
if(cljs.core.truth_(inst_16743)){
var statearr_16863_19457 = state_16783__$1;
(statearr_16863_19457[(1)] = (11));

} else {
var statearr_16864_19458 = state_16783__$1;
(statearr_16864_19458[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__13373__auto__ = null;
var cljs$core$async$mix_$_state_machine__13373__auto____0 = (function (){
var statearr_16865 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16865[(0)] = cljs$core$async$mix_$_state_machine__13373__auto__);

(statearr_16865[(1)] = (1));

return statearr_16865;
});
var cljs$core$async$mix_$_state_machine__13373__auto____1 = (function (state_16783){
while(true){
var ret_value__13374__auto__ = (function (){try{while(true){
var result__13375__auto__ = switch__13372__auto__(state_16783);
if(cljs.core.keyword_identical_QMARK_(result__13375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13375__auto__;
}
break;
}
}catch (e16866){var ex__13376__auto__ = e16866;
var statearr_16867_19462 = state_16783;
(statearr_16867_19462[(2)] = ex__13376__auto__);


if(cljs.core.seq((state_16783[(4)]))){
var statearr_16868_19463 = state_16783;
(statearr_16868_19463[(1)] = cljs.core.first((state_16783[(4)])));

} else {
throw ex__13376__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19464 = state_16783;
state_16783 = G__19464;
continue;
} else {
return ret_value__13374__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13373__auto__ = function(state_16783){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13373__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13373__auto____1.call(this,state_16783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13373__auto____0;
cljs$core$async$mix_$_state_machine__13373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13373__auto____1;
return cljs$core$async$mix_$_state_machine__13373__auto__;
})()
})();
var state__14222__auto__ = (function (){var statearr_16869 = f__14221__auto__();
(statearr_16869[(6)] = c__14219__auto___19399);

return statearr_16869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14222__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_19469 = (function (p,v,ch,close_QMARK_){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5499__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5497__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5497__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_19469(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_19473 = (function (p,v,ch){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5499__auto__.call(null,p,v,ch));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5497__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_19473(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_19477 = (function() {
var G__19478 = null;
var G__19478__1 = (function (p){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5499__auto__.call(null,p));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5497__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__19478__2 = (function (p,v){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5499__auto__.call(null,p,v));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5497__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__19478 = function(p,v){
switch(arguments.length){
case 1:
return G__19478__1.call(this,p);
case 2:
return G__19478__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19478.cljs$core$IFn$_invoke$arity$1 = G__19478__1;
G__19478.cljs$core$IFn$_invoke$arity$2 = G__19478__2;
return G__19478;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16881 = arguments.length;
switch (G__16881) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19477(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19477(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16908 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16909){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16909 = meta16909;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16910,meta16909__$1){
var self__ = this;
var _16910__$1 = this;
return (new cljs.core.async.t_cljs$core$async16908(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16909__$1));
}));

(cljs.core.async.t_cljs$core$async16908.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16910){
var self__ = this;
var _16910__$1 = this;
return self__.meta16909;
}));

(cljs.core.async.t_cljs$core$async16908.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16908.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16908.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16908.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16908.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16908.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16908.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16908.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16909","meta16909",-1167431606,null)], null);
}));

(cljs.core.async.t_cljs$core$async16908.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16908.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16908");

(cljs.core.async.t_cljs$core$async16908.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async16908");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16908.
 */
cljs.core.async.__GT_t_cljs$core$async16908 = (function cljs$core$async$__GT_t_cljs$core$async16908(ch,topic_fn,buf_fn,mults,ensure_mult,meta16909){
return (new cljs.core.async.t_cljs$core$async16908(ch,topic_fn,buf_fn,mults,ensure_mult,meta16909));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16901 = arguments.length;
switch (G__16901) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16899_SHARP_){
if(cljs.core.truth_((p1__16899_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16899_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16899_SHARP_.call(null,topic)))){
return p1__16899_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16899_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16908(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14219__auto___19503 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14221__auto__ = (function (){var switch__13372__auto__ = (function (state_17085){
var state_val_17086 = (state_17085[(1)]);
if((state_val_17086 === (7))){
var inst_17078 = (state_17085[(2)]);
var state_17085__$1 = state_17085;
var statearr_17095_19504 = state_17085__$1;
(statearr_17095_19504[(2)] = inst_17078);

(statearr_17095_19504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17086 === (20))){
var state_17085__$1 = state_17085;
var statearr_17098_19505 = state_17085__$1;
(statearr_17098_19505[(2)] = null);

(statearr_17098_19505[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17086 === (1))){
var state_17085__$1 = state_17085;
var statearr_17099_19506 = state_17085__$1;
(statearr_17099_19506[(2)] = null);

(statearr_17099_19506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17086 === (24))){
var inst_17057 = (state_17085[(7)]);
var inst_17067 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17057);
var state_17085__$1 = state_17085;
var statearr_17101_19510 = state_17085__$1;
(statearr_17101_19510[(2)] = inst_17067);

(statearr_17101_19510[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17086 === (4))){
var inst_16997 = (state_17085[(8)]);
var inst_16997__$1 = (state_17085[(2)]);
var inst_16998 = (inst_16997__$1 == null);
var state_17085__$1 = (function (){var statearr_17103 = state_17085;
(statearr_17103[(8)] = inst_16997__$1);

return statearr_17103;
})();
if(cljs.core.truth_(inst_16998)){
var statearr_17104_19511 = state_17085__$1;
(statearr_17104_19511[(1)] = (5));

} else {
var statearr_17105_19512 = state_17085__$1;
(statearr_17105_19512[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17086 === (15))){
var inst_17051 = (state_17085[(2)]);
var state_17085__$1 = state_17085;
var statearr_17106_19513 = state_17085__$1;
(statearr_17106_19513[(2)] = inst_17051);

(statearr_17106_19513[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17086 === (21))){
var inst_17075 = (state_17085[(2)]);
var state_17085__$1 = (function (){var statearr_17107 = state_17085;
(statearr_17107[(9)] = inst_17075);

return statearr_17107;
})();
var statearr_17108_19517 = state_17085__$1;
(statearr_17108_19517[(2)] = null);

(statearr_17108_19517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17086 === (13))){
var inst_17029 = (state_17085[(10)]);
var inst_17032 = cljs.core.chunked_seq_QMARK_(inst_17029);
var state_17085__$1 = state_17085;
if(inst_17032){
var statearr_17109_19518 = state_17085__$1;
(statearr_17109_19518[(1)] = (16));

} else {
var statearr_17110_19519 = state_17085__$1;
(statearr_17110_19519[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17086 === (22))){
var inst_17063 = (state_17085[(2)]);
var state_17085__$1 = state_17085;
if(cljs.core.truth_(inst_17063)){
var statearr_17111_19520 = state_17085__$1;
(statearr_17111_19520[(1)] = (23));

} else {
var statearr_17112_19525 = state_17085__$1;
(statearr_17112_19525[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17086 === (6))){
var inst_16997 = (state_17085[(8)]);
var inst_17057 = (state_17085[(7)]);
var inst_17059 = (state_17085[(11)]);
var inst_17057__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16997) : topic_fn.call(null,inst_16997));
var inst_17058 = cljs.core.deref(mults);
var inst_17059__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17058,inst_17057__$1);
var state_17085__$1 = (function (){var statearr_17113 = state_17085;
(statearr_17113[(7)] = inst_17057__$1);

(statearr_17113[(11)] = inst_17059__$1);

return statearr_17113;
})();
if(cljs.core.truth_(inst_17059__$1)){
var statearr_17114_19526 = state_17085__$1;
(statearr_17114_19526[(1)] = (19));

} else {
var statearr_17115_19527 = state_17085__$1;
(statearr_17115_19527[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17086 === (25))){
var inst_17071 = (state_17085[(2)]);
var state_17085__$1 = state_17085;
var statearr_17119_19532 = state_17085__$1;
(statearr_17119_19532[(2)] = inst_17071);

(statearr_17119_19532[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17086 === (17))){
var inst_17029 = (state_17085[(10)]);
var inst_17041 = cljs.core.first(inst_17029);
var inst_17042 = cljs.core.async.muxch_STAR_(inst_17041);
var inst_17043 = cljs.core.async.close_BANG_(inst_17042);
var inst_17045 = cljs.core.next(inst_17029);
var inst_17007 = inst_17045;
var inst_17008 = null;
var inst_17009 = (0);
var inst_17010 = (0);
var state_17085__$1 = (function (){var statearr_17122 = state_17085;
(statearr_17122[(12)] = inst_17043);

(statearr_17122[(13)] = inst_17007);

(statearr_17122[(14)] = inst_17008);

(statearr_17122[(15)] = inst_17009);

(statearr_17122[(16)] = inst_17010);

return statearr_17122;
})();
var statearr_17123_19536 = state_17085__$1;
(statearr_17123_19536[(2)] = null);

(statearr_17123_19536[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17086 === (3))){
var inst_17080 = (state_17085[(2)]);
var state_17085__$1 = state_17085;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17085__$1,inst_17080);
} else {
if((state_val_17086 === (12))){
var inst_17053 = (state_17085[(2)]);
var state_17085__$1 = state_17085;
var statearr_17124_19537 = state_17085__$1;
(statearr_17124_19537[(2)] = inst_17053);

(statearr_17124_19537[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17086 === (2))){
var state_17085__$1 = state_17085;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17085__$1,(4),ch);
} else {
if((state_val_17086 === (23))){
var state_17085__$1 = state_17085;
var statearr_17125_19540 = state_17085__$1;
(statearr_17125_19540[(2)] = null);

(statearr_17125_19540[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17086 === (19))){
var inst_17059 = (state_17085[(11)]);
var inst_16997 = (state_17085[(8)]);
var inst_17061 = cljs.core.async.muxch_STAR_(inst_17059);
var state_17085__$1 = state_17085;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17085__$1,(22),inst_17061,inst_16997);
} else {
if((state_val_17086 === (11))){
var inst_17007 = (state_17085[(13)]);
var inst_17029 = (state_17085[(10)]);
var inst_17029__$1 = cljs.core.seq(inst_17007);
var state_17085__$1 = (function (){var statearr_17134 = state_17085;
(statearr_17134[(10)] = inst_17029__$1);

return statearr_17134;
})();
if(inst_17029__$1){
var statearr_17138_19549 = state_17085__$1;
(statearr_17138_19549[(1)] = (13));

} else {
var statearr_17139_19550 = state_17085__$1;
(statearr_17139_19550[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17086 === (9))){
var inst_17055 = (state_17085[(2)]);
var state_17085__$1 = state_17085;
var statearr_17140_19551 = state_17085__$1;
(statearr_17140_19551[(2)] = inst_17055);

(statearr_17140_19551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17086 === (5))){
var inst_17004 = cljs.core.deref(mults);
var inst_17005 = cljs.core.vals(inst_17004);
var inst_17006 = cljs.core.seq(inst_17005);
var inst_17007 = inst_17006;
var inst_17008 = null;
var inst_17009 = (0);
var inst_17010 = (0);
var state_17085__$1 = (function (){var statearr_17148 = state_17085;
(statearr_17148[(13)] = inst_17007);

(statearr_17148[(14)] = inst_17008);

(statearr_17148[(15)] = inst_17009);

(statearr_17148[(16)] = inst_17010);

return statearr_17148;
})();
var statearr_17149_19553 = state_17085__$1;
(statearr_17149_19553[(2)] = null);

(statearr_17149_19553[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17086 === (14))){
var state_17085__$1 = state_17085;
var statearr_17154_19554 = state_17085__$1;
(statearr_17154_19554[(2)] = null);

(statearr_17154_19554[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17086 === (16))){
var inst_17029 = (state_17085[(10)]);
var inst_17034 = cljs.core.chunk_first(inst_17029);
var inst_17035 = cljs.core.chunk_rest(inst_17029);
var inst_17036 = cljs.core.count(inst_17034);
var inst_17007 = inst_17035;
var inst_17008 = inst_17034;
var inst_17009 = inst_17036;
var inst_17010 = (0);
var state_17085__$1 = (function (){var statearr_17158 = state_17085;
(statearr_17158[(13)] = inst_17007);

(statearr_17158[(14)] = inst_17008);

(statearr_17158[(15)] = inst_17009);

(statearr_17158[(16)] = inst_17010);

return statearr_17158;
})();
var statearr_17159_19555 = state_17085__$1;
(statearr_17159_19555[(2)] = null);

(statearr_17159_19555[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17086 === (10))){
var inst_17008 = (state_17085[(14)]);
var inst_17010 = (state_17085[(16)]);
var inst_17007 = (state_17085[(13)]);
var inst_17009 = (state_17085[(15)]);
var inst_17018 = cljs.core._nth(inst_17008,inst_17010);
var inst_17019 = cljs.core.async.muxch_STAR_(inst_17018);
var inst_17020 = cljs.core.async.close_BANG_(inst_17019);
var inst_17024 = (inst_17010 + (1));
var tmp17151 = inst_17007;
var tmp17152 = inst_17009;
var tmp17153 = inst_17008;
var inst_17007__$1 = tmp17151;
var inst_17008__$1 = tmp17153;
var inst_17009__$1 = tmp17152;
var inst_17010__$1 = inst_17024;
var state_17085__$1 = (function (){var statearr_17161 = state_17085;
(statearr_17161[(17)] = inst_17020);

(statearr_17161[(13)] = inst_17007__$1);

(statearr_17161[(14)] = inst_17008__$1);

(statearr_17161[(15)] = inst_17009__$1);

(statearr_17161[(16)] = inst_17010__$1);

return statearr_17161;
})();
var statearr_17162_19557 = state_17085__$1;
(statearr_17162_19557[(2)] = null);

(statearr_17162_19557[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17086 === (18))){
var inst_17048 = (state_17085[(2)]);
var state_17085__$1 = state_17085;
var statearr_17165_19558 = state_17085__$1;
(statearr_17165_19558[(2)] = inst_17048);

(statearr_17165_19558[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17086 === (8))){
var inst_17010 = (state_17085[(16)]);
var inst_17009 = (state_17085[(15)]);
var inst_17014 = (inst_17010 < inst_17009);
var inst_17015 = inst_17014;
var state_17085__$1 = state_17085;
if(cljs.core.truth_(inst_17015)){
var statearr_17166_19559 = state_17085__$1;
(statearr_17166_19559[(1)] = (10));

} else {
var statearr_17167_19560 = state_17085__$1;
(statearr_17167_19560[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13373__auto__ = null;
var cljs$core$async$state_machine__13373__auto____0 = (function (){
var statearr_17173 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17173[(0)] = cljs$core$async$state_machine__13373__auto__);

(statearr_17173[(1)] = (1));

return statearr_17173;
});
var cljs$core$async$state_machine__13373__auto____1 = (function (state_17085){
while(true){
var ret_value__13374__auto__ = (function (){try{while(true){
var result__13375__auto__ = switch__13372__auto__(state_17085);
if(cljs.core.keyword_identical_QMARK_(result__13375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13375__auto__;
}
break;
}
}catch (e17175){var ex__13376__auto__ = e17175;
var statearr_17176_19562 = state_17085;
(statearr_17176_19562[(2)] = ex__13376__auto__);


if(cljs.core.seq((state_17085[(4)]))){
var statearr_17178_19563 = state_17085;
(statearr_17178_19563[(1)] = cljs.core.first((state_17085[(4)])));

} else {
throw ex__13376__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19564 = state_17085;
state_17085 = G__19564;
continue;
} else {
return ret_value__13374__auto__;
}
break;
}
});
cljs$core$async$state_machine__13373__auto__ = function(state_17085){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13373__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13373__auto____1.call(this,state_17085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13373__auto____0;
cljs$core$async$state_machine__13373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13373__auto____1;
return cljs$core$async$state_machine__13373__auto__;
})()
})();
var state__14222__auto__ = (function (){var statearr_17188 = f__14221__auto__();
(statearr_17188[(6)] = c__14219__auto___19503);

return statearr_17188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14222__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__17196 = arguments.length;
switch (G__17196) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__17201 = arguments.length;
switch (G__17201) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__17216 = arguments.length;
switch (G__17216) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14219__auto___19573 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14221__auto__ = (function (){var switch__13372__auto__ = (function (state_17300){
var state_val_17301 = (state_17300[(1)]);
if((state_val_17301 === (7))){
var state_17300__$1 = state_17300;
var statearr_17312_19574 = state_17300__$1;
(statearr_17312_19574[(2)] = null);

(statearr_17312_19574[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17301 === (1))){
var state_17300__$1 = state_17300;
var statearr_17313_19575 = state_17300__$1;
(statearr_17313_19575[(2)] = null);

(statearr_17313_19575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17301 === (4))){
var inst_17228 = (state_17300[(7)]);
var inst_17224 = (state_17300[(8)]);
var inst_17230 = (inst_17228 < inst_17224);
var state_17300__$1 = state_17300;
if(cljs.core.truth_(inst_17230)){
var statearr_17321_19576 = state_17300__$1;
(statearr_17321_19576[(1)] = (6));

} else {
var statearr_17323_19577 = state_17300__$1;
(statearr_17323_19577[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17301 === (15))){
var inst_17286 = (state_17300[(9)]);
var inst_17291 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17286);
var state_17300__$1 = state_17300;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17300__$1,(17),out,inst_17291);
} else {
if((state_val_17301 === (13))){
var inst_17286 = (state_17300[(9)]);
var inst_17286__$1 = (state_17300[(2)]);
var inst_17287 = cljs.core.some(cljs.core.nil_QMARK_,inst_17286__$1);
var state_17300__$1 = (function (){var statearr_17329 = state_17300;
(statearr_17329[(9)] = inst_17286__$1);

return statearr_17329;
})();
if(cljs.core.truth_(inst_17287)){
var statearr_17330_19582 = state_17300__$1;
(statearr_17330_19582[(1)] = (14));

} else {
var statearr_17331_19583 = state_17300__$1;
(statearr_17331_19583[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17301 === (6))){
var state_17300__$1 = state_17300;
var statearr_17332_19584 = state_17300__$1;
(statearr_17332_19584[(2)] = null);

(statearr_17332_19584[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17301 === (17))){
var inst_17293 = (state_17300[(2)]);
var state_17300__$1 = (function (){var statearr_17343 = state_17300;
(statearr_17343[(10)] = inst_17293);

return statearr_17343;
})();
var statearr_17345_19586 = state_17300__$1;
(statearr_17345_19586[(2)] = null);

(statearr_17345_19586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17301 === (3))){
var inst_17298 = (state_17300[(2)]);
var state_17300__$1 = state_17300;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17300__$1,inst_17298);
} else {
if((state_val_17301 === (12))){
var _ = (function (){var statearr_17352 = state_17300;
(statearr_17352[(4)] = cljs.core.rest((state_17300[(4)])));

return statearr_17352;
})();
var state_17300__$1 = state_17300;
var ex17337 = (state_17300__$1[(2)]);
var statearr_17354_19587 = state_17300__$1;
(statearr_17354_19587[(5)] = ex17337);


if((ex17337 instanceof Object)){
var statearr_17359_19588 = state_17300__$1;
(statearr_17359_19588[(1)] = (11));

(statearr_17359_19588[(5)] = null);

} else {
throw ex17337;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17301 === (2))){
var inst_17223 = cljs.core.reset_BANG_(dctr,cnt);
var inst_17224 = cnt;
var inst_17228 = (0);
var state_17300__$1 = (function (){var statearr_17362 = state_17300;
(statearr_17362[(11)] = inst_17223);

(statearr_17362[(8)] = inst_17224);

(statearr_17362[(7)] = inst_17228);

return statearr_17362;
})();
var statearr_17364_19589 = state_17300__$1;
(statearr_17364_19589[(2)] = null);

(statearr_17364_19589[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17301 === (11))){
var inst_17251 = (state_17300[(2)]);
var inst_17253 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17300__$1 = (function (){var statearr_17369 = state_17300;
(statearr_17369[(12)] = inst_17251);

return statearr_17369;
})();
var statearr_17370_19590 = state_17300__$1;
(statearr_17370_19590[(2)] = inst_17253);

(statearr_17370_19590[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17301 === (9))){
var inst_17228 = (state_17300[(7)]);
var _ = (function (){var statearr_17372 = state_17300;
(statearr_17372[(4)] = cljs.core.cons((12),(state_17300[(4)])));

return statearr_17372;
})();
var inst_17269 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17228) : chs__$1.call(null,inst_17228));
var inst_17270 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17228) : done.call(null,inst_17228));
var inst_17271 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17269,inst_17270);
var ___$1 = (function (){var statearr_17373 = state_17300;
(statearr_17373[(4)] = cljs.core.rest((state_17300[(4)])));

return statearr_17373;
})();
var state_17300__$1 = state_17300;
var statearr_17375_19592 = state_17300__$1;
(statearr_17375_19592[(2)] = inst_17271);

(statearr_17375_19592[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17301 === (5))){
var inst_17284 = (state_17300[(2)]);
var state_17300__$1 = (function (){var statearr_17377 = state_17300;
(statearr_17377[(13)] = inst_17284);

return statearr_17377;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17300__$1,(13),dchan);
} else {
if((state_val_17301 === (14))){
var inst_17289 = cljs.core.async.close_BANG_(out);
var state_17300__$1 = state_17300;
var statearr_17380_19593 = state_17300__$1;
(statearr_17380_19593[(2)] = inst_17289);

(statearr_17380_19593[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17301 === (16))){
var inst_17296 = (state_17300[(2)]);
var state_17300__$1 = state_17300;
var statearr_17388_19595 = state_17300__$1;
(statearr_17388_19595[(2)] = inst_17296);

(statearr_17388_19595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17301 === (10))){
var inst_17228 = (state_17300[(7)]);
var inst_17274 = (state_17300[(2)]);
var inst_17275 = (inst_17228 + (1));
var inst_17228__$1 = inst_17275;
var state_17300__$1 = (function (){var statearr_17395 = state_17300;
(statearr_17395[(14)] = inst_17274);

(statearr_17395[(7)] = inst_17228__$1);

return statearr_17395;
})();
var statearr_17399_19600 = state_17300__$1;
(statearr_17399_19600[(2)] = null);

(statearr_17399_19600[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17301 === (8))){
var inst_17282 = (state_17300[(2)]);
var state_17300__$1 = state_17300;
var statearr_17401_19602 = state_17300__$1;
(statearr_17401_19602[(2)] = inst_17282);

(statearr_17401_19602[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13373__auto__ = null;
var cljs$core$async$state_machine__13373__auto____0 = (function (){
var statearr_17406 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17406[(0)] = cljs$core$async$state_machine__13373__auto__);

(statearr_17406[(1)] = (1));

return statearr_17406;
});
var cljs$core$async$state_machine__13373__auto____1 = (function (state_17300){
while(true){
var ret_value__13374__auto__ = (function (){try{while(true){
var result__13375__auto__ = switch__13372__auto__(state_17300);
if(cljs.core.keyword_identical_QMARK_(result__13375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13375__auto__;
}
break;
}
}catch (e17409){var ex__13376__auto__ = e17409;
var statearr_17410_19603 = state_17300;
(statearr_17410_19603[(2)] = ex__13376__auto__);


if(cljs.core.seq((state_17300[(4)]))){
var statearr_17414_19604 = state_17300;
(statearr_17414_19604[(1)] = cljs.core.first((state_17300[(4)])));

} else {
throw ex__13376__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19605 = state_17300;
state_17300 = G__19605;
continue;
} else {
return ret_value__13374__auto__;
}
break;
}
});
cljs$core$async$state_machine__13373__auto__ = function(state_17300){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13373__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13373__auto____1.call(this,state_17300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13373__auto____0;
cljs$core$async$state_machine__13373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13373__auto____1;
return cljs$core$async$state_machine__13373__auto__;
})()
})();
var state__14222__auto__ = (function (){var statearr_17418 = f__14221__auto__();
(statearr_17418[(6)] = c__14219__auto___19573);

return statearr_17418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14222__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__17422 = arguments.length;
switch (G__17422) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14219__auto___19610 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14221__auto__ = (function (){var switch__13372__auto__ = (function (state_17470){
var state_val_17471 = (state_17470[(1)]);
if((state_val_17471 === (7))){
var inst_17443 = (state_17470[(7)]);
var inst_17444 = (state_17470[(8)]);
var inst_17443__$1 = (state_17470[(2)]);
var inst_17444__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17443__$1,(0),null);
var inst_17446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17443__$1,(1),null);
var inst_17448 = (inst_17444__$1 == null);
var state_17470__$1 = (function (){var statearr_17485 = state_17470;
(statearr_17485[(7)] = inst_17443__$1);

(statearr_17485[(8)] = inst_17444__$1);

(statearr_17485[(9)] = inst_17446);

return statearr_17485;
})();
if(cljs.core.truth_(inst_17448)){
var statearr_17486_19616 = state_17470__$1;
(statearr_17486_19616[(1)] = (8));

} else {
var statearr_17487_19617 = state_17470__$1;
(statearr_17487_19617[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17471 === (1))){
var inst_17425 = cljs.core.vec(chs);
var inst_17426 = inst_17425;
var state_17470__$1 = (function (){var statearr_17488 = state_17470;
(statearr_17488[(10)] = inst_17426);

return statearr_17488;
})();
var statearr_17490_19618 = state_17470__$1;
(statearr_17490_19618[(2)] = null);

(statearr_17490_19618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17471 === (4))){
var inst_17426 = (state_17470[(10)]);
var state_17470__$1 = state_17470;
return cljs.core.async.ioc_alts_BANG_(state_17470__$1,(7),inst_17426);
} else {
if((state_val_17471 === (6))){
var inst_17466 = (state_17470[(2)]);
var state_17470__$1 = state_17470;
var statearr_17495_19619 = state_17470__$1;
(statearr_17495_19619[(2)] = inst_17466);

(statearr_17495_19619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17471 === (3))){
var inst_17468 = (state_17470[(2)]);
var state_17470__$1 = state_17470;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17470__$1,inst_17468);
} else {
if((state_val_17471 === (2))){
var inst_17426 = (state_17470[(10)]);
var inst_17428 = cljs.core.count(inst_17426);
var inst_17429 = (inst_17428 > (0));
var state_17470__$1 = state_17470;
if(cljs.core.truth_(inst_17429)){
var statearr_17498_19621 = state_17470__$1;
(statearr_17498_19621[(1)] = (4));

} else {
var statearr_17499_19622 = state_17470__$1;
(statearr_17499_19622[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17471 === (11))){
var inst_17426 = (state_17470[(10)]);
var inst_17458 = (state_17470[(2)]);
var tmp17496 = inst_17426;
var inst_17426__$1 = tmp17496;
var state_17470__$1 = (function (){var statearr_17502 = state_17470;
(statearr_17502[(11)] = inst_17458);

(statearr_17502[(10)] = inst_17426__$1);

return statearr_17502;
})();
var statearr_17503_19625 = state_17470__$1;
(statearr_17503_19625[(2)] = null);

(statearr_17503_19625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17471 === (9))){
var inst_17444 = (state_17470[(8)]);
var state_17470__$1 = state_17470;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17470__$1,(11),out,inst_17444);
} else {
if((state_val_17471 === (5))){
var inst_17464 = cljs.core.async.close_BANG_(out);
var state_17470__$1 = state_17470;
var statearr_17508_19627 = state_17470__$1;
(statearr_17508_19627[(2)] = inst_17464);

(statearr_17508_19627[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17471 === (10))){
var inst_17461 = (state_17470[(2)]);
var state_17470__$1 = state_17470;
var statearr_17509_19628 = state_17470__$1;
(statearr_17509_19628[(2)] = inst_17461);

(statearr_17509_19628[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17471 === (8))){
var inst_17426 = (state_17470[(10)]);
var inst_17443 = (state_17470[(7)]);
var inst_17444 = (state_17470[(8)]);
var inst_17446 = (state_17470[(9)]);
var inst_17453 = (function (){var cs = inst_17426;
var vec__17433 = inst_17443;
var v = inst_17444;
var c = inst_17446;
return (function (p1__17420_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17420_SHARP_);
});
})();
var inst_17454 = cljs.core.filterv(inst_17453,inst_17426);
var inst_17426__$1 = inst_17454;
var state_17470__$1 = (function (){var statearr_17512 = state_17470;
(statearr_17512[(10)] = inst_17426__$1);

return statearr_17512;
})();
var statearr_17514_19632 = state_17470__$1;
(statearr_17514_19632[(2)] = null);

(statearr_17514_19632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13373__auto__ = null;
var cljs$core$async$state_machine__13373__auto____0 = (function (){
var statearr_17516 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17516[(0)] = cljs$core$async$state_machine__13373__auto__);

(statearr_17516[(1)] = (1));

return statearr_17516;
});
var cljs$core$async$state_machine__13373__auto____1 = (function (state_17470){
while(true){
var ret_value__13374__auto__ = (function (){try{while(true){
var result__13375__auto__ = switch__13372__auto__(state_17470);
if(cljs.core.keyword_identical_QMARK_(result__13375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13375__auto__;
}
break;
}
}catch (e17520){var ex__13376__auto__ = e17520;
var statearr_17521_19633 = state_17470;
(statearr_17521_19633[(2)] = ex__13376__auto__);


if(cljs.core.seq((state_17470[(4)]))){
var statearr_17522_19634 = state_17470;
(statearr_17522_19634[(1)] = cljs.core.first((state_17470[(4)])));

} else {
throw ex__13376__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19636 = state_17470;
state_17470 = G__19636;
continue;
} else {
return ret_value__13374__auto__;
}
break;
}
});
cljs$core$async$state_machine__13373__auto__ = function(state_17470){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13373__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13373__auto____1.call(this,state_17470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13373__auto____0;
cljs$core$async$state_machine__13373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13373__auto____1;
return cljs$core$async$state_machine__13373__auto__;
})()
})();
var state__14222__auto__ = (function (){var statearr_17523 = f__14221__auto__();
(statearr_17523[(6)] = c__14219__auto___19610);

return statearr_17523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14222__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__17542 = arguments.length;
switch (G__17542) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14219__auto___19646 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14221__auto__ = (function (){var switch__13372__auto__ = (function (state_17580){
var state_val_17581 = (state_17580[(1)]);
if((state_val_17581 === (7))){
var inst_17561 = (state_17580[(7)]);
var inst_17561__$1 = (state_17580[(2)]);
var inst_17563 = (inst_17561__$1 == null);
var inst_17564 = cljs.core.not(inst_17563);
var state_17580__$1 = (function (){var statearr_17589 = state_17580;
(statearr_17589[(7)] = inst_17561__$1);

return statearr_17589;
})();
if(inst_17564){
var statearr_17590_19649 = state_17580__$1;
(statearr_17590_19649[(1)] = (8));

} else {
var statearr_17591_19650 = state_17580__$1;
(statearr_17591_19650[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (1))){
var inst_17556 = (0);
var state_17580__$1 = (function (){var statearr_17592 = state_17580;
(statearr_17592[(8)] = inst_17556);

return statearr_17592;
})();
var statearr_17593_19651 = state_17580__$1;
(statearr_17593_19651[(2)] = null);

(statearr_17593_19651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (4))){
var state_17580__$1 = state_17580;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17580__$1,(7),ch);
} else {
if((state_val_17581 === (6))){
var inst_17575 = (state_17580[(2)]);
var state_17580__$1 = state_17580;
var statearr_17600_19656 = state_17580__$1;
(statearr_17600_19656[(2)] = inst_17575);

(statearr_17600_19656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (3))){
var inst_17577 = (state_17580[(2)]);
var inst_17578 = cljs.core.async.close_BANG_(out);
var state_17580__$1 = (function (){var statearr_17602 = state_17580;
(statearr_17602[(9)] = inst_17577);

return statearr_17602;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17580__$1,inst_17578);
} else {
if((state_val_17581 === (2))){
var inst_17556 = (state_17580[(8)]);
var inst_17558 = (inst_17556 < n);
var state_17580__$1 = state_17580;
if(cljs.core.truth_(inst_17558)){
var statearr_17603_19657 = state_17580__$1;
(statearr_17603_19657[(1)] = (4));

} else {
var statearr_17604_19658 = state_17580__$1;
(statearr_17604_19658[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (11))){
var inst_17556 = (state_17580[(8)]);
var inst_17567 = (state_17580[(2)]);
var inst_17568 = (inst_17556 + (1));
var inst_17556__$1 = inst_17568;
var state_17580__$1 = (function (){var statearr_17605 = state_17580;
(statearr_17605[(10)] = inst_17567);

(statearr_17605[(8)] = inst_17556__$1);

return statearr_17605;
})();
var statearr_17606_19659 = state_17580__$1;
(statearr_17606_19659[(2)] = null);

(statearr_17606_19659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (9))){
var state_17580__$1 = state_17580;
var statearr_17608_19660 = state_17580__$1;
(statearr_17608_19660[(2)] = null);

(statearr_17608_19660[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (5))){
var state_17580__$1 = state_17580;
var statearr_17609_19662 = state_17580__$1;
(statearr_17609_19662[(2)] = null);

(statearr_17609_19662[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (10))){
var inst_17572 = (state_17580[(2)]);
var state_17580__$1 = state_17580;
var statearr_17621_19663 = state_17580__$1;
(statearr_17621_19663[(2)] = inst_17572);

(statearr_17621_19663[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (8))){
var inst_17561 = (state_17580[(7)]);
var state_17580__$1 = state_17580;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17580__$1,(11),out,inst_17561);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13373__auto__ = null;
var cljs$core$async$state_machine__13373__auto____0 = (function (){
var statearr_17624 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17624[(0)] = cljs$core$async$state_machine__13373__auto__);

(statearr_17624[(1)] = (1));

return statearr_17624;
});
var cljs$core$async$state_machine__13373__auto____1 = (function (state_17580){
while(true){
var ret_value__13374__auto__ = (function (){try{while(true){
var result__13375__auto__ = switch__13372__auto__(state_17580);
if(cljs.core.keyword_identical_QMARK_(result__13375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13375__auto__;
}
break;
}
}catch (e17625){var ex__13376__auto__ = e17625;
var statearr_17626_19664 = state_17580;
(statearr_17626_19664[(2)] = ex__13376__auto__);


if(cljs.core.seq((state_17580[(4)]))){
var statearr_17627_19665 = state_17580;
(statearr_17627_19665[(1)] = cljs.core.first((state_17580[(4)])));

} else {
throw ex__13376__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19666 = state_17580;
state_17580 = G__19666;
continue;
} else {
return ret_value__13374__auto__;
}
break;
}
});
cljs$core$async$state_machine__13373__auto__ = function(state_17580){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13373__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13373__auto____1.call(this,state_17580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13373__auto____0;
cljs$core$async$state_machine__13373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13373__auto____1;
return cljs$core$async$state_machine__13373__auto__;
})()
})();
var state__14222__auto__ = (function (){var statearr_17634 = f__14221__auto__();
(statearr_17634[(6)] = c__14219__auto___19646);

return statearr_17634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14222__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17646 = (function (f,ch,meta17638,_,fn1,meta17647){
this.f = f;
this.ch = ch;
this.meta17638 = meta17638;
this._ = _;
this.fn1 = fn1;
this.meta17647 = meta17647;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17648,meta17647__$1){
var self__ = this;
var _17648__$1 = this;
return (new cljs.core.async.t_cljs$core$async17646(self__.f,self__.ch,self__.meta17638,self__._,self__.fn1,meta17647__$1));
}));

(cljs.core.async.t_cljs$core$async17646.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17648){
var self__ = this;
var _17648__$1 = this;
return self__.meta17647;
}));

(cljs.core.async.t_cljs$core$async17646.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17646.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17646.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17646.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17635_SHARP_){
var G__17666 = (((p1__17635_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17635_SHARP_) : self__.f.call(null,p1__17635_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17666) : f1.call(null,G__17666));
});
}));

(cljs.core.async.t_cljs$core$async17646.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17638","meta17638",-1001658403,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17637","cljs.core.async/t_cljs$core$async17637",-1706349292,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17647","meta17647",-489974947,null)], null);
}));

(cljs.core.async.t_cljs$core$async17646.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17646.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17646");

(cljs.core.async.t_cljs$core$async17646.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async17646");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17646.
 */
cljs.core.async.__GT_t_cljs$core$async17646 = (function cljs$core$async$__GT_t_cljs$core$async17646(f,ch,meta17638,_,fn1,meta17647){
return (new cljs.core.async.t_cljs$core$async17646(f,ch,meta17638,_,fn1,meta17647));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17637 = (function (f,ch,meta17638){
this.f = f;
this.ch = ch;
this.meta17638 = meta17638;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17639,meta17638__$1){
var self__ = this;
var _17639__$1 = this;
return (new cljs.core.async.t_cljs$core$async17637(self__.f,self__.ch,meta17638__$1));
}));

(cljs.core.async.t_cljs$core$async17637.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17639){
var self__ = this;
var _17639__$1 = this;
return self__.meta17638;
}));

(cljs.core.async.t_cljs$core$async17637.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17637.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17637.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17637.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17637.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async17646(self__.f,self__.ch,self__.meta17638,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5140__auto__ = ret;
if(cljs.core.truth_(and__5140__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17688 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17688) : self__.f.call(null,G__17688));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17637.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17637.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17637.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17638","meta17638",-1001658403,null)], null);
}));

(cljs.core.async.t_cljs$core$async17637.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17637.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17637");

(cljs.core.async.t_cljs$core$async17637.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async17637");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17637.
 */
cljs.core.async.__GT_t_cljs$core$async17637 = (function cljs$core$async$__GT_t_cljs$core$async17637(f,ch,meta17638){
return (new cljs.core.async.t_cljs$core$async17637(f,ch,meta17638));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17637(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17700 = (function (f,ch,meta17701){
this.f = f;
this.ch = ch;
this.meta17701 = meta17701;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17700.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17702,meta17701__$1){
var self__ = this;
var _17702__$1 = this;
return (new cljs.core.async.t_cljs$core$async17700(self__.f,self__.ch,meta17701__$1));
}));

(cljs.core.async.t_cljs$core$async17700.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17702){
var self__ = this;
var _17702__$1 = this;
return self__.meta17701;
}));

(cljs.core.async.t_cljs$core$async17700.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17700.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17700.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17700.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17700.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17700.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17700.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17701","meta17701",-1888543464,null)], null);
}));

(cljs.core.async.t_cljs$core$async17700.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17700.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17700");

(cljs.core.async.t_cljs$core$async17700.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async17700");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17700.
 */
cljs.core.async.__GT_t_cljs$core$async17700 = (function cljs$core$async$__GT_t_cljs$core$async17700(f,ch,meta17701){
return (new cljs.core.async.t_cljs$core$async17700(f,ch,meta17701));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17700(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17749 = (function (p,ch,meta17750){
this.p = p;
this.ch = ch;
this.meta17750 = meta17750;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17751,meta17750__$1){
var self__ = this;
var _17751__$1 = this;
return (new cljs.core.async.t_cljs$core$async17749(self__.p,self__.ch,meta17750__$1));
}));

(cljs.core.async.t_cljs$core$async17749.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17751){
var self__ = this;
var _17751__$1 = this;
return self__.meta17750;
}));

(cljs.core.async.t_cljs$core$async17749.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17749.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17749.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17749.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17749.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17749.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17749.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17749.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17750","meta17750",433000030,null)], null);
}));

(cljs.core.async.t_cljs$core$async17749.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17749.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17749");

(cljs.core.async.t_cljs$core$async17749.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async17749");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17749.
 */
cljs.core.async.__GT_t_cljs$core$async17749 = (function cljs$core$async$__GT_t_cljs$core$async17749(p,ch,meta17750){
return (new cljs.core.async.t_cljs$core$async17749(p,ch,meta17750));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async17749(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17794 = arguments.length;
switch (G__17794) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14219__auto___19688 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14221__auto__ = (function (){var switch__13372__auto__ = (function (state_17818){
var state_val_17819 = (state_17818[(1)]);
if((state_val_17819 === (7))){
var inst_17814 = (state_17818[(2)]);
var state_17818__$1 = state_17818;
var statearr_17820_19689 = state_17818__$1;
(statearr_17820_19689[(2)] = inst_17814);

(statearr_17820_19689[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17819 === (1))){
var state_17818__$1 = state_17818;
var statearr_17822_19690 = state_17818__$1;
(statearr_17822_19690[(2)] = null);

(statearr_17822_19690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17819 === (4))){
var inst_17800 = (state_17818[(7)]);
var inst_17800__$1 = (state_17818[(2)]);
var inst_17801 = (inst_17800__$1 == null);
var state_17818__$1 = (function (){var statearr_17835 = state_17818;
(statearr_17835[(7)] = inst_17800__$1);

return statearr_17835;
})();
if(cljs.core.truth_(inst_17801)){
var statearr_17839_19694 = state_17818__$1;
(statearr_17839_19694[(1)] = (5));

} else {
var statearr_17840_19695 = state_17818__$1;
(statearr_17840_19695[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17819 === (6))){
var inst_17800 = (state_17818[(7)]);
var inst_17805 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17800) : p.call(null,inst_17800));
var state_17818__$1 = state_17818;
if(cljs.core.truth_(inst_17805)){
var statearr_17846_19696 = state_17818__$1;
(statearr_17846_19696[(1)] = (8));

} else {
var statearr_17847_19697 = state_17818__$1;
(statearr_17847_19697[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17819 === (3))){
var inst_17816 = (state_17818[(2)]);
var state_17818__$1 = state_17818;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17818__$1,inst_17816);
} else {
if((state_val_17819 === (2))){
var state_17818__$1 = state_17818;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17818__$1,(4),ch);
} else {
if((state_val_17819 === (11))){
var inst_17808 = (state_17818[(2)]);
var state_17818__$1 = state_17818;
var statearr_17856_19698 = state_17818__$1;
(statearr_17856_19698[(2)] = inst_17808);

(statearr_17856_19698[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17819 === (9))){
var state_17818__$1 = state_17818;
var statearr_17860_19700 = state_17818__$1;
(statearr_17860_19700[(2)] = null);

(statearr_17860_19700[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17819 === (5))){
var inst_17803 = cljs.core.async.close_BANG_(out);
var state_17818__$1 = state_17818;
var statearr_17862_19701 = state_17818__$1;
(statearr_17862_19701[(2)] = inst_17803);

(statearr_17862_19701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17819 === (10))){
var inst_17811 = (state_17818[(2)]);
var state_17818__$1 = (function (){var statearr_17863 = state_17818;
(statearr_17863[(8)] = inst_17811);

return statearr_17863;
})();
var statearr_17864_19705 = state_17818__$1;
(statearr_17864_19705[(2)] = null);

(statearr_17864_19705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17819 === (8))){
var inst_17800 = (state_17818[(7)]);
var state_17818__$1 = state_17818;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17818__$1,(11),out,inst_17800);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13373__auto__ = null;
var cljs$core$async$state_machine__13373__auto____0 = (function (){
var statearr_17865 = [null,null,null,null,null,null,null,null,null];
(statearr_17865[(0)] = cljs$core$async$state_machine__13373__auto__);

(statearr_17865[(1)] = (1));

return statearr_17865;
});
var cljs$core$async$state_machine__13373__auto____1 = (function (state_17818){
while(true){
var ret_value__13374__auto__ = (function (){try{while(true){
var result__13375__auto__ = switch__13372__auto__(state_17818);
if(cljs.core.keyword_identical_QMARK_(result__13375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13375__auto__;
}
break;
}
}catch (e17866){var ex__13376__auto__ = e17866;
var statearr_17867_19706 = state_17818;
(statearr_17867_19706[(2)] = ex__13376__auto__);


if(cljs.core.seq((state_17818[(4)]))){
var statearr_17869_19707 = state_17818;
(statearr_17869_19707[(1)] = cljs.core.first((state_17818[(4)])));

} else {
throw ex__13376__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19708 = state_17818;
state_17818 = G__19708;
continue;
} else {
return ret_value__13374__auto__;
}
break;
}
});
cljs$core$async$state_machine__13373__auto__ = function(state_17818){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13373__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13373__auto____1.call(this,state_17818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13373__auto____0;
cljs$core$async$state_machine__13373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13373__auto____1;
return cljs$core$async$state_machine__13373__auto__;
})()
})();
var state__14222__auto__ = (function (){var statearr_17876 = f__14221__auto__();
(statearr_17876[(6)] = c__14219__auto___19688);

return statearr_17876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14222__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17891 = arguments.length;
switch (G__17891) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14219__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14221__auto__ = (function (){var switch__13372__auto__ = (function (state_17975){
var state_val_17976 = (state_17975[(1)]);
if((state_val_17976 === (7))){
var inst_17971 = (state_17975[(2)]);
var state_17975__$1 = state_17975;
var statearr_17983_19715 = state_17975__$1;
(statearr_17983_19715[(2)] = inst_17971);

(statearr_17983_19715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17976 === (20))){
var inst_17929 = (state_17975[(7)]);
var inst_17943 = (state_17975[(2)]);
var inst_17944 = cljs.core.next(inst_17929);
var inst_17914 = inst_17944;
var inst_17915 = null;
var inst_17916 = (0);
var inst_17917 = (0);
var state_17975__$1 = (function (){var statearr_17993 = state_17975;
(statearr_17993[(8)] = inst_17943);

(statearr_17993[(9)] = inst_17914);

(statearr_17993[(10)] = inst_17915);

(statearr_17993[(11)] = inst_17916);

(statearr_17993[(12)] = inst_17917);

return statearr_17993;
})();
var statearr_17994_19717 = state_17975__$1;
(statearr_17994_19717[(2)] = null);

(statearr_17994_19717[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17976 === (1))){
var state_17975__$1 = state_17975;
var statearr_17998_19718 = state_17975__$1;
(statearr_17998_19718[(2)] = null);

(statearr_17998_19718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17976 === (4))){
var inst_17903 = (state_17975[(13)]);
var inst_17903__$1 = (state_17975[(2)]);
var inst_17904 = (inst_17903__$1 == null);
var state_17975__$1 = (function (){var statearr_18001 = state_17975;
(statearr_18001[(13)] = inst_17903__$1);

return statearr_18001;
})();
if(cljs.core.truth_(inst_17904)){
var statearr_18002_19719 = state_17975__$1;
(statearr_18002_19719[(1)] = (5));

} else {
var statearr_18003_19720 = state_17975__$1;
(statearr_18003_19720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17976 === (15))){
var state_17975__$1 = state_17975;
var statearr_18010_19721 = state_17975__$1;
(statearr_18010_19721[(2)] = null);

(statearr_18010_19721[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17976 === (21))){
var state_17975__$1 = state_17975;
var statearr_18013_19722 = state_17975__$1;
(statearr_18013_19722[(2)] = null);

(statearr_18013_19722[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17976 === (13))){
var inst_17917 = (state_17975[(12)]);
var inst_17914 = (state_17975[(9)]);
var inst_17915 = (state_17975[(10)]);
var inst_17916 = (state_17975[(11)]);
var inst_17925 = (state_17975[(2)]);
var inst_17926 = (inst_17917 + (1));
var tmp18005 = inst_17916;
var tmp18006 = inst_17915;
var tmp18007 = inst_17914;
var inst_17914__$1 = tmp18007;
var inst_17915__$1 = tmp18006;
var inst_17916__$1 = tmp18005;
var inst_17917__$1 = inst_17926;
var state_17975__$1 = (function (){var statearr_18024 = state_17975;
(statearr_18024[(14)] = inst_17925);

(statearr_18024[(9)] = inst_17914__$1);

(statearr_18024[(10)] = inst_17915__$1);

(statearr_18024[(11)] = inst_17916__$1);

(statearr_18024[(12)] = inst_17917__$1);

return statearr_18024;
})();
var statearr_18025_19725 = state_17975__$1;
(statearr_18025_19725[(2)] = null);

(statearr_18025_19725[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17976 === (22))){
var state_17975__$1 = state_17975;
var statearr_18029_19726 = state_17975__$1;
(statearr_18029_19726[(2)] = null);

(statearr_18029_19726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17976 === (6))){
var inst_17903 = (state_17975[(13)]);
var inst_17912 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17903) : f.call(null,inst_17903));
var inst_17913 = cljs.core.seq(inst_17912);
var inst_17914 = inst_17913;
var inst_17915 = null;
var inst_17916 = (0);
var inst_17917 = (0);
var state_17975__$1 = (function (){var statearr_18036 = state_17975;
(statearr_18036[(9)] = inst_17914);

(statearr_18036[(10)] = inst_17915);

(statearr_18036[(11)] = inst_17916);

(statearr_18036[(12)] = inst_17917);

return statearr_18036;
})();
var statearr_18037_19729 = state_17975__$1;
(statearr_18037_19729[(2)] = null);

(statearr_18037_19729[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17976 === (17))){
var inst_17929 = (state_17975[(7)]);
var inst_17935 = cljs.core.chunk_first(inst_17929);
var inst_17937 = cljs.core.chunk_rest(inst_17929);
var inst_17938 = cljs.core.count(inst_17935);
var inst_17914 = inst_17937;
var inst_17915 = inst_17935;
var inst_17916 = inst_17938;
var inst_17917 = (0);
var state_17975__$1 = (function (){var statearr_18041 = state_17975;
(statearr_18041[(9)] = inst_17914);

(statearr_18041[(10)] = inst_17915);

(statearr_18041[(11)] = inst_17916);

(statearr_18041[(12)] = inst_17917);

return statearr_18041;
})();
var statearr_18042_19730 = state_17975__$1;
(statearr_18042_19730[(2)] = null);

(statearr_18042_19730[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17976 === (3))){
var inst_17973 = (state_17975[(2)]);
var state_17975__$1 = state_17975;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17975__$1,inst_17973);
} else {
if((state_val_17976 === (12))){
var inst_17958 = (state_17975[(2)]);
var state_17975__$1 = state_17975;
var statearr_18053_19731 = state_17975__$1;
(statearr_18053_19731[(2)] = inst_17958);

(statearr_18053_19731[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17976 === (2))){
var state_17975__$1 = state_17975;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17975__$1,(4),in$);
} else {
if((state_val_17976 === (23))){
var inst_17969 = (state_17975[(2)]);
var state_17975__$1 = state_17975;
var statearr_18058_19732 = state_17975__$1;
(statearr_18058_19732[(2)] = inst_17969);

(statearr_18058_19732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17976 === (19))){
var inst_17953 = (state_17975[(2)]);
var state_17975__$1 = state_17975;
var statearr_18059_19733 = state_17975__$1;
(statearr_18059_19733[(2)] = inst_17953);

(statearr_18059_19733[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17976 === (11))){
var inst_17914 = (state_17975[(9)]);
var inst_17929 = (state_17975[(7)]);
var inst_17929__$1 = cljs.core.seq(inst_17914);
var state_17975__$1 = (function (){var statearr_18060 = state_17975;
(statearr_18060[(7)] = inst_17929__$1);

return statearr_18060;
})();
if(inst_17929__$1){
var statearr_18061_19738 = state_17975__$1;
(statearr_18061_19738[(1)] = (14));

} else {
var statearr_18062_19739 = state_17975__$1;
(statearr_18062_19739[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17976 === (9))){
var inst_17960 = (state_17975[(2)]);
var inst_17961 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17975__$1 = (function (){var statearr_18063 = state_17975;
(statearr_18063[(15)] = inst_17960);

return statearr_18063;
})();
if(cljs.core.truth_(inst_17961)){
var statearr_18064_19740 = state_17975__$1;
(statearr_18064_19740[(1)] = (21));

} else {
var statearr_18065_19741 = state_17975__$1;
(statearr_18065_19741[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17976 === (5))){
var inst_17906 = cljs.core.async.close_BANG_(out);
var state_17975__$1 = state_17975;
var statearr_18075_19742 = state_17975__$1;
(statearr_18075_19742[(2)] = inst_17906);

(statearr_18075_19742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17976 === (14))){
var inst_17929 = (state_17975[(7)]);
var inst_17933 = cljs.core.chunked_seq_QMARK_(inst_17929);
var state_17975__$1 = state_17975;
if(inst_17933){
var statearr_18076_19743 = state_17975__$1;
(statearr_18076_19743[(1)] = (17));

} else {
var statearr_18077_19744 = state_17975__$1;
(statearr_18077_19744[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17976 === (16))){
var inst_17956 = (state_17975[(2)]);
var state_17975__$1 = state_17975;
var statearr_18078_19745 = state_17975__$1;
(statearr_18078_19745[(2)] = inst_17956);

(statearr_18078_19745[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17976 === (10))){
var inst_17915 = (state_17975[(10)]);
var inst_17917 = (state_17975[(12)]);
var inst_17923 = cljs.core._nth(inst_17915,inst_17917);
var state_17975__$1 = state_17975;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17975__$1,(13),out,inst_17923);
} else {
if((state_val_17976 === (18))){
var inst_17929 = (state_17975[(7)]);
var inst_17941 = cljs.core.first(inst_17929);
var state_17975__$1 = state_17975;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17975__$1,(20),out,inst_17941);
} else {
if((state_val_17976 === (8))){
var inst_17917 = (state_17975[(12)]);
var inst_17916 = (state_17975[(11)]);
var inst_17920 = (inst_17917 < inst_17916);
var inst_17921 = inst_17920;
var state_17975__$1 = state_17975;
if(cljs.core.truth_(inst_17921)){
var statearr_18079_19746 = state_17975__$1;
(statearr_18079_19746[(1)] = (10));

} else {
var statearr_18080_19747 = state_17975__$1;
(statearr_18080_19747[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13373__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13373__auto____0 = (function (){
var statearr_18081 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18081[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13373__auto__);

(statearr_18081[(1)] = (1));

return statearr_18081;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13373__auto____1 = (function (state_17975){
while(true){
var ret_value__13374__auto__ = (function (){try{while(true){
var result__13375__auto__ = switch__13372__auto__(state_17975);
if(cljs.core.keyword_identical_QMARK_(result__13375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13375__auto__;
}
break;
}
}catch (e18085){var ex__13376__auto__ = e18085;
var statearr_18086_19750 = state_17975;
(statearr_18086_19750[(2)] = ex__13376__auto__);


if(cljs.core.seq((state_17975[(4)]))){
var statearr_18087_19751 = state_17975;
(statearr_18087_19751[(1)] = cljs.core.first((state_17975[(4)])));

} else {
throw ex__13376__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19752 = state_17975;
state_17975 = G__19752;
continue;
} else {
return ret_value__13374__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13373__auto__ = function(state_17975){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13373__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13373__auto____1.call(this,state_17975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13373__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13373__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13373__auto__;
})()
})();
var state__14222__auto__ = (function (){var statearr_18088 = f__14221__auto__();
(statearr_18088[(6)] = c__14219__auto__);

return statearr_18088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14222__auto__);
}));

return c__14219__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__18090 = arguments.length;
switch (G__18090) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__18101 = arguments.length;
switch (G__18101) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__18106 = arguments.length;
switch (G__18106) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14219__auto___19766 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14221__auto__ = (function (){var switch__13372__auto__ = (function (state_18148){
var state_val_18149 = (state_18148[(1)]);
if((state_val_18149 === (7))){
var inst_18143 = (state_18148[(2)]);
var state_18148__$1 = state_18148;
var statearr_18162_19767 = state_18148__$1;
(statearr_18162_19767[(2)] = inst_18143);

(statearr_18162_19767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18149 === (1))){
var inst_18121 = null;
var state_18148__$1 = (function (){var statearr_18163 = state_18148;
(statearr_18163[(7)] = inst_18121);

return statearr_18163;
})();
var statearr_18164_19768 = state_18148__$1;
(statearr_18164_19768[(2)] = null);

(statearr_18164_19768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18149 === (4))){
var inst_18128 = (state_18148[(8)]);
var inst_18128__$1 = (state_18148[(2)]);
var inst_18129 = (inst_18128__$1 == null);
var inst_18130 = cljs.core.not(inst_18129);
var state_18148__$1 = (function (){var statearr_18165 = state_18148;
(statearr_18165[(8)] = inst_18128__$1);

return statearr_18165;
})();
if(inst_18130){
var statearr_18166_19770 = state_18148__$1;
(statearr_18166_19770[(1)] = (5));

} else {
var statearr_18167_19771 = state_18148__$1;
(statearr_18167_19771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18149 === (6))){
var state_18148__$1 = state_18148;
var statearr_18168_19775 = state_18148__$1;
(statearr_18168_19775[(2)] = null);

(statearr_18168_19775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18149 === (3))){
var inst_18145 = (state_18148[(2)]);
var inst_18146 = cljs.core.async.close_BANG_(out);
var state_18148__$1 = (function (){var statearr_18169 = state_18148;
(statearr_18169[(9)] = inst_18145);

return statearr_18169;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18148__$1,inst_18146);
} else {
if((state_val_18149 === (2))){
var state_18148__$1 = state_18148;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18148__$1,(4),ch);
} else {
if((state_val_18149 === (11))){
var inst_18128 = (state_18148[(8)]);
var inst_18137 = (state_18148[(2)]);
var inst_18121 = inst_18128;
var state_18148__$1 = (function (){var statearr_18170 = state_18148;
(statearr_18170[(10)] = inst_18137);

(statearr_18170[(7)] = inst_18121);

return statearr_18170;
})();
var statearr_18171_19776 = state_18148__$1;
(statearr_18171_19776[(2)] = null);

(statearr_18171_19776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18149 === (9))){
var inst_18128 = (state_18148[(8)]);
var state_18148__$1 = state_18148;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18148__$1,(11),out,inst_18128);
} else {
if((state_val_18149 === (5))){
var inst_18128 = (state_18148[(8)]);
var inst_18121 = (state_18148[(7)]);
var inst_18132 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18128,inst_18121);
var state_18148__$1 = state_18148;
if(inst_18132){
var statearr_18173_19781 = state_18148__$1;
(statearr_18173_19781[(1)] = (8));

} else {
var statearr_18174_19782 = state_18148__$1;
(statearr_18174_19782[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18149 === (10))){
var inst_18140 = (state_18148[(2)]);
var state_18148__$1 = state_18148;
var statearr_18177_19783 = state_18148__$1;
(statearr_18177_19783[(2)] = inst_18140);

(statearr_18177_19783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18149 === (8))){
var inst_18121 = (state_18148[(7)]);
var tmp18172 = inst_18121;
var inst_18121__$1 = tmp18172;
var state_18148__$1 = (function (){var statearr_18179 = state_18148;
(statearr_18179[(7)] = inst_18121__$1);

return statearr_18179;
})();
var statearr_18180_19784 = state_18148__$1;
(statearr_18180_19784[(2)] = null);

(statearr_18180_19784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13373__auto__ = null;
var cljs$core$async$state_machine__13373__auto____0 = (function (){
var statearr_18184 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18184[(0)] = cljs$core$async$state_machine__13373__auto__);

(statearr_18184[(1)] = (1));

return statearr_18184;
});
var cljs$core$async$state_machine__13373__auto____1 = (function (state_18148){
while(true){
var ret_value__13374__auto__ = (function (){try{while(true){
var result__13375__auto__ = switch__13372__auto__(state_18148);
if(cljs.core.keyword_identical_QMARK_(result__13375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13375__auto__;
}
break;
}
}catch (e18185){var ex__13376__auto__ = e18185;
var statearr_18186_19787 = state_18148;
(statearr_18186_19787[(2)] = ex__13376__auto__);


if(cljs.core.seq((state_18148[(4)]))){
var statearr_18188_19788 = state_18148;
(statearr_18188_19788[(1)] = cljs.core.first((state_18148[(4)])));

} else {
throw ex__13376__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19789 = state_18148;
state_18148 = G__19789;
continue;
} else {
return ret_value__13374__auto__;
}
break;
}
});
cljs$core$async$state_machine__13373__auto__ = function(state_18148){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13373__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13373__auto____1.call(this,state_18148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13373__auto____0;
cljs$core$async$state_machine__13373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13373__auto____1;
return cljs$core$async$state_machine__13373__auto__;
})()
})();
var state__14222__auto__ = (function (){var statearr_18192 = f__14221__auto__();
(statearr_18192[(6)] = c__14219__auto___19766);

return statearr_18192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14222__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__18202 = arguments.length;
switch (G__18202) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14219__auto___19794 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14221__auto__ = (function (){var switch__13372__auto__ = (function (state_18262){
var state_val_18263 = (state_18262[(1)]);
if((state_val_18263 === (7))){
var inst_18254 = (state_18262[(2)]);
var state_18262__$1 = state_18262;
var statearr_18270_19796 = state_18262__$1;
(statearr_18270_19796[(2)] = inst_18254);

(statearr_18270_19796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18263 === (1))){
var inst_18210 = (new Array(n));
var inst_18211 = inst_18210;
var inst_18213 = (0);
var state_18262__$1 = (function (){var statearr_18271 = state_18262;
(statearr_18271[(7)] = inst_18211);

(statearr_18271[(8)] = inst_18213);

return statearr_18271;
})();
var statearr_18276_19797 = state_18262__$1;
(statearr_18276_19797[(2)] = null);

(statearr_18276_19797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18263 === (4))){
var inst_18219 = (state_18262[(9)]);
var inst_18219__$1 = (state_18262[(2)]);
var inst_18220 = (inst_18219__$1 == null);
var inst_18221 = cljs.core.not(inst_18220);
var state_18262__$1 = (function (){var statearr_18278 = state_18262;
(statearr_18278[(9)] = inst_18219__$1);

return statearr_18278;
})();
if(inst_18221){
var statearr_18279_19798 = state_18262__$1;
(statearr_18279_19798[(1)] = (5));

} else {
var statearr_18286_19799 = state_18262__$1;
(statearr_18286_19799[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18263 === (15))){
var inst_18245 = (state_18262[(2)]);
var state_18262__$1 = state_18262;
var statearr_18290_19800 = state_18262__$1;
(statearr_18290_19800[(2)] = inst_18245);

(statearr_18290_19800[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18263 === (13))){
var state_18262__$1 = state_18262;
var statearr_18293_19801 = state_18262__$1;
(statearr_18293_19801[(2)] = null);

(statearr_18293_19801[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18263 === (6))){
var inst_18213 = (state_18262[(8)]);
var inst_18239 = (inst_18213 > (0));
var state_18262__$1 = state_18262;
if(cljs.core.truth_(inst_18239)){
var statearr_18299_19804 = state_18262__$1;
(statearr_18299_19804[(1)] = (12));

} else {
var statearr_18300_19805 = state_18262__$1;
(statearr_18300_19805[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18263 === (3))){
var inst_18256 = (state_18262[(2)]);
var state_18262__$1 = state_18262;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18262__$1,inst_18256);
} else {
if((state_val_18263 === (12))){
var inst_18211 = (state_18262[(7)]);
var inst_18242 = cljs.core.vec(inst_18211);
var state_18262__$1 = state_18262;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18262__$1,(15),out,inst_18242);
} else {
if((state_val_18263 === (2))){
var state_18262__$1 = state_18262;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18262__$1,(4),ch);
} else {
if((state_val_18263 === (11))){
var inst_18233 = (state_18262[(2)]);
var inst_18234 = (new Array(n));
var inst_18211 = inst_18234;
var inst_18213 = (0);
var state_18262__$1 = (function (){var statearr_18306 = state_18262;
(statearr_18306[(10)] = inst_18233);

(statearr_18306[(7)] = inst_18211);

(statearr_18306[(8)] = inst_18213);

return statearr_18306;
})();
var statearr_18310_19806 = state_18262__$1;
(statearr_18310_19806[(2)] = null);

(statearr_18310_19806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18263 === (9))){
var inst_18211 = (state_18262[(7)]);
var inst_18231 = cljs.core.vec(inst_18211);
var state_18262__$1 = state_18262;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18262__$1,(11),out,inst_18231);
} else {
if((state_val_18263 === (5))){
var inst_18211 = (state_18262[(7)]);
var inst_18213 = (state_18262[(8)]);
var inst_18219 = (state_18262[(9)]);
var inst_18225 = (state_18262[(11)]);
var inst_18224 = (inst_18211[inst_18213] = inst_18219);
var inst_18225__$1 = (inst_18213 + (1));
var inst_18227 = (inst_18225__$1 < n);
var state_18262__$1 = (function (){var statearr_18311 = state_18262;
(statearr_18311[(12)] = inst_18224);

(statearr_18311[(11)] = inst_18225__$1);

return statearr_18311;
})();
if(cljs.core.truth_(inst_18227)){
var statearr_18312_19813 = state_18262__$1;
(statearr_18312_19813[(1)] = (8));

} else {
var statearr_18313_19815 = state_18262__$1;
(statearr_18313_19815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18263 === (14))){
var inst_18251 = (state_18262[(2)]);
var inst_18252 = cljs.core.async.close_BANG_(out);
var state_18262__$1 = (function (){var statearr_18318 = state_18262;
(statearr_18318[(13)] = inst_18251);

return statearr_18318;
})();
var statearr_18320_19816 = state_18262__$1;
(statearr_18320_19816[(2)] = inst_18252);

(statearr_18320_19816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18263 === (10))){
var inst_18237 = (state_18262[(2)]);
var state_18262__$1 = state_18262;
var statearr_18322_19817 = state_18262__$1;
(statearr_18322_19817[(2)] = inst_18237);

(statearr_18322_19817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18263 === (8))){
var inst_18211 = (state_18262[(7)]);
var inst_18225 = (state_18262[(11)]);
var tmp18317 = inst_18211;
var inst_18211__$1 = tmp18317;
var inst_18213 = inst_18225;
var state_18262__$1 = (function (){var statearr_18327 = state_18262;
(statearr_18327[(7)] = inst_18211__$1);

(statearr_18327[(8)] = inst_18213);

return statearr_18327;
})();
var statearr_18330_19818 = state_18262__$1;
(statearr_18330_19818[(2)] = null);

(statearr_18330_19818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13373__auto__ = null;
var cljs$core$async$state_machine__13373__auto____0 = (function (){
var statearr_18354 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18354[(0)] = cljs$core$async$state_machine__13373__auto__);

(statearr_18354[(1)] = (1));

return statearr_18354;
});
var cljs$core$async$state_machine__13373__auto____1 = (function (state_18262){
while(true){
var ret_value__13374__auto__ = (function (){try{while(true){
var result__13375__auto__ = switch__13372__auto__(state_18262);
if(cljs.core.keyword_identical_QMARK_(result__13375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13375__auto__;
}
break;
}
}catch (e18361){var ex__13376__auto__ = e18361;
var statearr_18366_19826 = state_18262;
(statearr_18366_19826[(2)] = ex__13376__auto__);


if(cljs.core.seq((state_18262[(4)]))){
var statearr_18367_19827 = state_18262;
(statearr_18367_19827[(1)] = cljs.core.first((state_18262[(4)])));

} else {
throw ex__13376__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19828 = state_18262;
state_18262 = G__19828;
continue;
} else {
return ret_value__13374__auto__;
}
break;
}
});
cljs$core$async$state_machine__13373__auto__ = function(state_18262){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13373__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13373__auto____1.call(this,state_18262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13373__auto____0;
cljs$core$async$state_machine__13373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13373__auto____1;
return cljs$core$async$state_machine__13373__auto__;
})()
})();
var state__14222__auto__ = (function (){var statearr_18386 = f__14221__auto__();
(statearr_18386[(6)] = c__14219__auto___19794);

return statearr_18386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14222__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18429 = arguments.length;
switch (G__18429) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14219__auto___19830 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14221__auto__ = (function (){var switch__13372__auto__ = (function (state_18522){
var state_val_18524 = (state_18522[(1)]);
if((state_val_18524 === (7))){
var inst_18510 = (state_18522[(2)]);
var state_18522__$1 = state_18522;
var statearr_18544_19832 = state_18522__$1;
(statearr_18544_19832[(2)] = inst_18510);

(statearr_18544_19832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18524 === (1))){
var inst_18463 = [];
var inst_18464 = inst_18463;
var inst_18465 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18522__$1 = (function (){var statearr_18550 = state_18522;
(statearr_18550[(7)] = inst_18464);

(statearr_18550[(8)] = inst_18465);

return statearr_18550;
})();
var statearr_18553_19834 = state_18522__$1;
(statearr_18553_19834[(2)] = null);

(statearr_18553_19834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18524 === (4))){
var inst_18468 = (state_18522[(9)]);
var inst_18468__$1 = (state_18522[(2)]);
var inst_18469 = (inst_18468__$1 == null);
var inst_18470 = cljs.core.not(inst_18469);
var state_18522__$1 = (function (){var statearr_18569 = state_18522;
(statearr_18569[(9)] = inst_18468__$1);

return statearr_18569;
})();
if(inst_18470){
var statearr_18570_19835 = state_18522__$1;
(statearr_18570_19835[(1)] = (5));

} else {
var statearr_18571_19836 = state_18522__$1;
(statearr_18571_19836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18524 === (15))){
var inst_18464 = (state_18522[(7)]);
var inst_18500 = cljs.core.vec(inst_18464);
var state_18522__$1 = state_18522;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18522__$1,(18),out,inst_18500);
} else {
if((state_val_18524 === (13))){
var inst_18490 = (state_18522[(2)]);
var state_18522__$1 = state_18522;
var statearr_18580_19838 = state_18522__$1;
(statearr_18580_19838[(2)] = inst_18490);

(statearr_18580_19838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18524 === (6))){
var inst_18464 = (state_18522[(7)]);
var inst_18493 = inst_18464.length;
var inst_18494 = (inst_18493 > (0));
var state_18522__$1 = state_18522;
if(cljs.core.truth_(inst_18494)){
var statearr_18581_19840 = state_18522__$1;
(statearr_18581_19840[(1)] = (15));

} else {
var statearr_18583_19841 = state_18522__$1;
(statearr_18583_19841[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18524 === (17))){
var inst_18506 = (state_18522[(2)]);
var inst_18508 = cljs.core.async.close_BANG_(out);
var state_18522__$1 = (function (){var statearr_18589 = state_18522;
(statearr_18589[(10)] = inst_18506);

return statearr_18589;
})();
var statearr_18591_19842 = state_18522__$1;
(statearr_18591_19842[(2)] = inst_18508);

(statearr_18591_19842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18524 === (3))){
var inst_18515 = (state_18522[(2)]);
var state_18522__$1 = state_18522;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18522__$1,inst_18515);
} else {
if((state_val_18524 === (12))){
var inst_18464 = (state_18522[(7)]);
var inst_18483 = cljs.core.vec(inst_18464);
var state_18522__$1 = state_18522;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18522__$1,(14),out,inst_18483);
} else {
if((state_val_18524 === (2))){
var state_18522__$1 = state_18522;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18522__$1,(4),ch);
} else {
if((state_val_18524 === (11))){
var inst_18464 = (state_18522[(7)]);
var inst_18468 = (state_18522[(9)]);
var inst_18472 = (state_18522[(11)]);
var inst_18480 = inst_18464.push(inst_18468);
var tmp18609 = inst_18464;
var inst_18464__$1 = tmp18609;
var inst_18465 = inst_18472;
var state_18522__$1 = (function (){var statearr_18619 = state_18522;
(statearr_18619[(12)] = inst_18480);

(statearr_18619[(7)] = inst_18464__$1);

(statearr_18619[(8)] = inst_18465);

return statearr_18619;
})();
var statearr_18620_19845 = state_18522__$1;
(statearr_18620_19845[(2)] = null);

(statearr_18620_19845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18524 === (9))){
var inst_18465 = (state_18522[(8)]);
var inst_18476 = cljs.core.keyword_identical_QMARK_(inst_18465,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_18522__$1 = state_18522;
var statearr_18626_19846 = state_18522__$1;
(statearr_18626_19846[(2)] = inst_18476);

(statearr_18626_19846[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18524 === (5))){
var inst_18468 = (state_18522[(9)]);
var inst_18472 = (state_18522[(11)]);
var inst_18465 = (state_18522[(8)]);
var inst_18473 = (state_18522[(13)]);
var inst_18472__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18468) : f.call(null,inst_18468));
var inst_18473__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18472__$1,inst_18465);
var state_18522__$1 = (function (){var statearr_18628 = state_18522;
(statearr_18628[(11)] = inst_18472__$1);

(statearr_18628[(13)] = inst_18473__$1);

return statearr_18628;
})();
if(inst_18473__$1){
var statearr_18629_19850 = state_18522__$1;
(statearr_18629_19850[(1)] = (8));

} else {
var statearr_18630_19851 = state_18522__$1;
(statearr_18630_19851[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18524 === (14))){
var inst_18468 = (state_18522[(9)]);
var inst_18472 = (state_18522[(11)]);
var inst_18485 = (state_18522[(2)]);
var inst_18486 = [];
var inst_18487 = inst_18486.push(inst_18468);
var inst_18464 = inst_18486;
var inst_18465 = inst_18472;
var state_18522__$1 = (function (){var statearr_18637 = state_18522;
(statearr_18637[(14)] = inst_18485);

(statearr_18637[(15)] = inst_18487);

(statearr_18637[(7)] = inst_18464);

(statearr_18637[(8)] = inst_18465);

return statearr_18637;
})();
var statearr_18644_19853 = state_18522__$1;
(statearr_18644_19853[(2)] = null);

(statearr_18644_19853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18524 === (16))){
var state_18522__$1 = state_18522;
var statearr_18654_19854 = state_18522__$1;
(statearr_18654_19854[(2)] = null);

(statearr_18654_19854[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18524 === (10))){
var inst_18478 = (state_18522[(2)]);
var state_18522__$1 = state_18522;
if(cljs.core.truth_(inst_18478)){
var statearr_18670_19855 = state_18522__$1;
(statearr_18670_19855[(1)] = (11));

} else {
var statearr_18671_19856 = state_18522__$1;
(statearr_18671_19856[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18524 === (18))){
var inst_18502 = (state_18522[(2)]);
var state_18522__$1 = state_18522;
var statearr_18675_19857 = state_18522__$1;
(statearr_18675_19857[(2)] = inst_18502);

(statearr_18675_19857[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18524 === (8))){
var inst_18473 = (state_18522[(13)]);
var state_18522__$1 = state_18522;
var statearr_18678_19858 = state_18522__$1;
(statearr_18678_19858[(2)] = inst_18473);

(statearr_18678_19858[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13373__auto__ = null;
var cljs$core$async$state_machine__13373__auto____0 = (function (){
var statearr_18711 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18711[(0)] = cljs$core$async$state_machine__13373__auto__);

(statearr_18711[(1)] = (1));

return statearr_18711;
});
var cljs$core$async$state_machine__13373__auto____1 = (function (state_18522){
while(true){
var ret_value__13374__auto__ = (function (){try{while(true){
var result__13375__auto__ = switch__13372__auto__(state_18522);
if(cljs.core.keyword_identical_QMARK_(result__13375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13375__auto__;
}
break;
}
}catch (e18713){var ex__13376__auto__ = e18713;
var statearr_18714_19863 = state_18522;
(statearr_18714_19863[(2)] = ex__13376__auto__);


if(cljs.core.seq((state_18522[(4)]))){
var statearr_18725_19864 = state_18522;
(statearr_18725_19864[(1)] = cljs.core.first((state_18522[(4)])));

} else {
throw ex__13376__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19865 = state_18522;
state_18522 = G__19865;
continue;
} else {
return ret_value__13374__auto__;
}
break;
}
});
cljs$core$async$state_machine__13373__auto__ = function(state_18522){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13373__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13373__auto____1.call(this,state_18522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13373__auto____0;
cljs$core$async$state_machine__13373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13373__auto____1;
return cljs$core$async$state_machine__13373__auto__;
})()
})();
var state__14222__auto__ = (function (){var statearr_18747 = f__14221__auto__();
(statearr_18747[(6)] = c__14219__auto___19830);

return statearr_18747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14222__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
