// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__41323){
var map__41348 = p__41323;
var map__41348__$1 = ((((!((map__41348 == null)))?((((map__41348.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41348.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41348):map__41348);
var m = map__41348__$1;
var n = cljs.core.get.call(null,map__41348__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__41348__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41350_41372 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41351_41373 = null;
var count__41352_41374 = (0);
var i__41353_41375 = (0);
while(true){
if((i__41353_41375 < count__41352_41374)){
var f_41376 = cljs.core._nth.call(null,chunk__41351_41373,i__41353_41375);
cljs.core.println.call(null,"  ",f_41376);

var G__41377 = seq__41350_41372;
var G__41378 = chunk__41351_41373;
var G__41379 = count__41352_41374;
var G__41380 = (i__41353_41375 + (1));
seq__41350_41372 = G__41377;
chunk__41351_41373 = G__41378;
count__41352_41374 = G__41379;
i__41353_41375 = G__41380;
continue;
} else {
var temp__4657__auto___41381 = cljs.core.seq.call(null,seq__41350_41372);
if(temp__4657__auto___41381){
var seq__41350_41382__$1 = temp__4657__auto___41381;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41350_41382__$1)){
var c__25898__auto___41383 = cljs.core.chunk_first.call(null,seq__41350_41382__$1);
var G__41384 = cljs.core.chunk_rest.call(null,seq__41350_41382__$1);
var G__41385 = c__25898__auto___41383;
var G__41386 = cljs.core.count.call(null,c__25898__auto___41383);
var G__41387 = (0);
seq__41350_41372 = G__41384;
chunk__41351_41373 = G__41385;
count__41352_41374 = G__41386;
i__41353_41375 = G__41387;
continue;
} else {
var f_41388 = cljs.core.first.call(null,seq__41350_41382__$1);
cljs.core.println.call(null,"  ",f_41388);

var G__41389 = cljs.core.next.call(null,seq__41350_41382__$1);
var G__41390 = null;
var G__41391 = (0);
var G__41392 = (0);
seq__41350_41372 = G__41389;
chunk__41351_41373 = G__41390;
count__41352_41374 = G__41391;
i__41353_41375 = G__41392;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_41393 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25087__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25087__auto__)){
return or__25087__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_41393);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_41393)))?cljs.core.second.call(null,arglists_41393):arglists_41393));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41354_41394 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41355_41395 = null;
var count__41356_41396 = (0);
var i__41357_41397 = (0);
while(true){
if((i__41357_41397 < count__41356_41396)){
var vec__41358_41398 = cljs.core._nth.call(null,chunk__41355_41395,i__41357_41397);
var name_41399 = cljs.core.nth.call(null,vec__41358_41398,(0),null);
var map__41361_41400 = cljs.core.nth.call(null,vec__41358_41398,(1),null);
var map__41361_41401__$1 = ((((!((map__41361_41400 == null)))?((((map__41361_41400.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41361_41400.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41361_41400):map__41361_41400);
var doc_41402 = cljs.core.get.call(null,map__41361_41401__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41403 = cljs.core.get.call(null,map__41361_41401__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_41399);

cljs.core.println.call(null," ",arglists_41403);

if(cljs.core.truth_(doc_41402)){
cljs.core.println.call(null," ",doc_41402);
} else {
}

var G__41404 = seq__41354_41394;
var G__41405 = chunk__41355_41395;
var G__41406 = count__41356_41396;
var G__41407 = (i__41357_41397 + (1));
seq__41354_41394 = G__41404;
chunk__41355_41395 = G__41405;
count__41356_41396 = G__41406;
i__41357_41397 = G__41407;
continue;
} else {
var temp__4657__auto___41408 = cljs.core.seq.call(null,seq__41354_41394);
if(temp__4657__auto___41408){
var seq__41354_41409__$1 = temp__4657__auto___41408;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41354_41409__$1)){
var c__25898__auto___41410 = cljs.core.chunk_first.call(null,seq__41354_41409__$1);
var G__41411 = cljs.core.chunk_rest.call(null,seq__41354_41409__$1);
var G__41412 = c__25898__auto___41410;
var G__41413 = cljs.core.count.call(null,c__25898__auto___41410);
var G__41414 = (0);
seq__41354_41394 = G__41411;
chunk__41355_41395 = G__41412;
count__41356_41396 = G__41413;
i__41357_41397 = G__41414;
continue;
} else {
var vec__41363_41415 = cljs.core.first.call(null,seq__41354_41409__$1);
var name_41416 = cljs.core.nth.call(null,vec__41363_41415,(0),null);
var map__41366_41417 = cljs.core.nth.call(null,vec__41363_41415,(1),null);
var map__41366_41418__$1 = ((((!((map__41366_41417 == null)))?((((map__41366_41417.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41366_41417.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41366_41417):map__41366_41417);
var doc_41419 = cljs.core.get.call(null,map__41366_41418__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41420 = cljs.core.get.call(null,map__41366_41418__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_41416);

cljs.core.println.call(null," ",arglists_41420);

if(cljs.core.truth_(doc_41419)){
cljs.core.println.call(null," ",doc_41419);
} else {
}

var G__41421 = cljs.core.next.call(null,seq__41354_41409__$1);
var G__41422 = null;
var G__41423 = (0);
var G__41424 = (0);
seq__41354_41394 = G__41421;
chunk__41355_41395 = G__41422;
count__41356_41396 = G__41423;
i__41357_41397 = G__41424;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__41368 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__41369 = null;
var count__41370 = (0);
var i__41371 = (0);
while(true){
if((i__41371 < count__41370)){
var role = cljs.core._nth.call(null,chunk__41369,i__41371);
var temp__4657__auto___41425__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___41425__$1)){
var spec_41426 = temp__4657__auto___41425__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_41426));
} else {
}

var G__41427 = seq__41368;
var G__41428 = chunk__41369;
var G__41429 = count__41370;
var G__41430 = (i__41371 + (1));
seq__41368 = G__41427;
chunk__41369 = G__41428;
count__41370 = G__41429;
i__41371 = G__41430;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__41368);
if(temp__4657__auto____$1){
var seq__41368__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41368__$1)){
var c__25898__auto__ = cljs.core.chunk_first.call(null,seq__41368__$1);
var G__41431 = cljs.core.chunk_rest.call(null,seq__41368__$1);
var G__41432 = c__25898__auto__;
var G__41433 = cljs.core.count.call(null,c__25898__auto__);
var G__41434 = (0);
seq__41368 = G__41431;
chunk__41369 = G__41432;
count__41370 = G__41433;
i__41371 = G__41434;
continue;
} else {
var role = cljs.core.first.call(null,seq__41368__$1);
var temp__4657__auto___41435__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___41435__$2)){
var spec_41436 = temp__4657__auto___41435__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_41436));
} else {
}

var G__41437 = cljs.core.next.call(null,seq__41368__$1);
var G__41438 = null;
var G__41439 = (0);
var G__41440 = (0);
seq__41368 = G__41437;
chunk__41369 = G__41438;
count__41370 = G__41439;
i__41371 = G__41440;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map