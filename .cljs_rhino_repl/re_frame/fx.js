// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__43240){
var vec__43241 = p__43240;
var k = cljs.core.nth.call(null,vec__43241,(0),null);
var value = cljs.core.nth.call(null,vec__43241,(1),null);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,k,true);
if(cljs.core.truth_(temp__4655__auto__)){
var effect_fn = temp__4655__auto__;
return effect_fn.call(null,value);
} else {
return null;
}
}),new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context)));
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__43244 = cljs.core.seq.call(null,value);
var chunk__43245 = null;
var count__43246 = (0);
var i__43247 = (0);
while(true){
if((i__43247 < count__43246)){
var map__43248 = cljs.core._nth.call(null,chunk__43245,i__43247);
var map__43248__$1 = ((((!((map__43248 == null)))?((((map__43248.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43248.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43248):map__43248);
var effect = map__43248__$1;
var ms = cljs.core.get.call(null,map__43248__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__43248__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value: ",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__43244,chunk__43245,count__43246,i__43247,map__43248,map__43248__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__43244,chunk__43245,count__43246,i__43247,map__43248,map__43248__$1,effect,ms,dispatch))
,ms);
}

var G__43252 = seq__43244;
var G__43253 = chunk__43245;
var G__43254 = count__43246;
var G__43255 = (i__43247 + (1));
seq__43244 = G__43252;
chunk__43245 = G__43253;
count__43246 = G__43254;
i__43247 = G__43255;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43244);
if(temp__4657__auto__){
var seq__43244__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43244__$1)){
var c__25898__auto__ = cljs.core.chunk_first.call(null,seq__43244__$1);
var G__43256 = cljs.core.chunk_rest.call(null,seq__43244__$1);
var G__43257 = c__25898__auto__;
var G__43258 = cljs.core.count.call(null,c__25898__auto__);
var G__43259 = (0);
seq__43244 = G__43256;
chunk__43245 = G__43257;
count__43246 = G__43258;
i__43247 = G__43259;
continue;
} else {
var map__43250 = cljs.core.first.call(null,seq__43244__$1);
var map__43250__$1 = ((((!((map__43250 == null)))?((((map__43250.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43250.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43250):map__43250);
var effect = map__43250__$1;
var ms = cljs.core.get.call(null,map__43250__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__43250__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value: ",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__43244,chunk__43245,count__43246,i__43247,map__43250,map__43250__$1,effect,ms,dispatch,seq__43244__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__43244,chunk__43245,count__43246,i__43247,map__43250,map__43250__$1,effect,ms,dispatch,seq__43244__$1,temp__4657__auto__))
,ms);
}

var G__43260 = cljs.core.next.call(null,seq__43244__$1);
var G__43261 = null;
var G__43262 = (0);
var G__43263 = (0);
seq__43244 = G__43260;
chunk__43245 = G__43261;
count__43246 = G__43262;
i__43247 = G__43263;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got: ",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got: ",value);
} else {
}

var seq__43264 = cljs.core.seq.call(null,value);
var chunk__43265 = null;
var count__43266 = (0);
var i__43267 = (0);
while(true){
if((i__43267 < count__43266)){
var event = cljs.core._nth.call(null,chunk__43265,i__43267);
re_frame.router.dispatch.call(null,event);

var G__43268 = seq__43264;
var G__43269 = chunk__43265;
var G__43270 = count__43266;
var G__43271 = (i__43267 + (1));
seq__43264 = G__43268;
chunk__43265 = G__43269;
count__43266 = G__43270;
i__43267 = G__43271;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43264);
if(temp__4657__auto__){
var seq__43264__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43264__$1)){
var c__25898__auto__ = cljs.core.chunk_first.call(null,seq__43264__$1);
var G__43272 = cljs.core.chunk_rest.call(null,seq__43264__$1);
var G__43273 = c__25898__auto__;
var G__43274 = cljs.core.count.call(null,c__25898__auto__);
var G__43275 = (0);
seq__43264 = G__43272;
chunk__43265 = G__43273;
count__43266 = G__43274;
i__43267 = G__43275;
continue;
} else {
var event = cljs.core.first.call(null,seq__43264__$1);
re_frame.router.dispatch.call(null,event);

var G__43276 = cljs.core.next.call(null,seq__43264__$1);
var G__43277 = null;
var G__43278 = (0);
var G__43279 = (0);
seq__43264 = G__43276;
chunk__43265 = G__43277;
count__43266 = G__43278;
i__43267 = G__43279;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.doall.call(null,cljs.core.map.call(null,clear_event,value));
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));

//# sourceMappingURL=fx.js.map