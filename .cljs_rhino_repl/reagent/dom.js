// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__25087__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__25087__auto__)){
return or__25087__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_43397 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_43397){
return (function (){
var _STAR_always_update_STAR_43398 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_43398;
}});})(_STAR_always_update_STAR_43397))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_43397;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args43399 = [];
var len__26162__auto___43402 = arguments.length;
var i__26163__auto___43403 = (0);
while(true){
if((i__26163__auto___43403 < len__26162__auto___43402)){
args43399.push((arguments[i__26163__auto___43403]));

var G__43404 = (i__26163__auto___43403 + (1));
i__26163__auto___43403 = G__43404;
continue;
} else {
}
break;
}

var G__43401 = args43399.length;
switch (G__43401) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43399.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__43410_43414 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__43411_43415 = null;
var count__43412_43416 = (0);
var i__43413_43417 = (0);
while(true){
if((i__43413_43417 < count__43412_43416)){
var v_43418 = cljs.core._nth.call(null,chunk__43411_43415,i__43413_43417);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_43418);

var G__43419 = seq__43410_43414;
var G__43420 = chunk__43411_43415;
var G__43421 = count__43412_43416;
var G__43422 = (i__43413_43417 + (1));
seq__43410_43414 = G__43419;
chunk__43411_43415 = G__43420;
count__43412_43416 = G__43421;
i__43413_43417 = G__43422;
continue;
} else {
var temp__4657__auto___43423 = cljs.core.seq.call(null,seq__43410_43414);
if(temp__4657__auto___43423){
var seq__43410_43424__$1 = temp__4657__auto___43423;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43410_43424__$1)){
var c__25898__auto___43425 = cljs.core.chunk_first.call(null,seq__43410_43424__$1);
var G__43426 = cljs.core.chunk_rest.call(null,seq__43410_43424__$1);
var G__43427 = c__25898__auto___43425;
var G__43428 = cljs.core.count.call(null,c__25898__auto___43425);
var G__43429 = (0);
seq__43410_43414 = G__43426;
chunk__43411_43415 = G__43427;
count__43412_43416 = G__43428;
i__43413_43417 = G__43429;
continue;
} else {
var v_43430 = cljs.core.first.call(null,seq__43410_43424__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_43430);

var G__43431 = cljs.core.next.call(null,seq__43410_43424__$1);
var G__43432 = null;
var G__43433 = (0);
var G__43434 = (0);
seq__43410_43414 = G__43431;
chunk__43411_43415 = G__43432;
count__43412_43416 = G__43433;
i__43413_43417 = G__43434;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map