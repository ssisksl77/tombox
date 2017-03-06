// Compiled by ClojureScript 1.9.494 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__7971__auto__,writer__7972__auto__,opt__7973__auto__){
return cljs.core._write.call(null,writer__7972__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__8480__auto__ = [];
var len__8473__auto___13344 = arguments.length;
var i__8474__auto___13345 = (0);
while(true){
if((i__8474__auto___13345 < len__8473__auto___13344)){
args__8480__auto__.push((arguments[i__8474__auto___13345]));

var G__13346 = (i__8474__auto___13345 + (1));
i__8474__auto___13345 = G__13346;
continue;
} else {
}
break;
}

var argseq__8481__auto__ = ((((0) < args__8480__auto__.length))?(new cljs.core.IndexedSeq(args__8480__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__8481__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq13343){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13343));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__8480__auto__ = [];
var len__8473__auto___13348 = arguments.length;
var i__8474__auto___13349 = (0);
while(true){
if((i__8474__auto___13349 < len__8473__auto___13348)){
args__8480__auto__.push((arguments[i__8474__auto___13349]));

var G__13350 = (i__8474__auto___13349 + (1));
i__8474__auto___13349 = G__13350;
continue;
} else {
}
break;
}

var argseq__8481__auto__ = ((((0) < args__8480__auto__.length))?(new cljs.core.IndexedSeq(args__8480__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8481__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq13347){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13347));
});

var g_QMARK__13351 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_13352 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__13351){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__13351))
,null));
var mkg_13353 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__13351,g_13352){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__13351,g_13352))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__13351,g_13352,mkg_13353){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__13351).call(null,x);
});})(g_QMARK__13351,g_13352,mkg_13353))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__13351,g_13352,mkg_13353){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_13353).call(null,gfn);
});})(g_QMARK__13351,g_13352,mkg_13353))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__13351,g_13352,mkg_13353){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_13352).call(null,generator);
});})(g_QMARK__13351,g_13352,mkg_13353))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__8565__auto___13373 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__8565__auto___13373){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__8480__auto__ = [];
var len__8473__auto___13374 = arguments.length;
var i__8474__auto___13375 = (0);
while(true){
if((i__8474__auto___13375 < len__8473__auto___13374)){
args__8480__auto__.push((arguments[i__8474__auto___13375]));

var G__13376 = (i__8474__auto___13375 + (1));
i__8474__auto___13375 = G__13376;
continue;
} else {
}
break;
}

var argseq__8481__auto__ = ((((0) < args__8480__auto__.length))?(new cljs.core.IndexedSeq(args__8480__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__8481__auto__);
});})(g__8565__auto___13373))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8565__auto___13373){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8565__auto___13373),args);
});})(g__8565__auto___13373))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__8565__auto___13373){
return (function (seq13354){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13354));
});})(g__8565__auto___13373))
;


var g__8565__auto___13377 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__8565__auto___13377){
return (function cljs$spec$impl$gen$list(var_args){
var args__8480__auto__ = [];
var len__8473__auto___13378 = arguments.length;
var i__8474__auto___13379 = (0);
while(true){
if((i__8474__auto___13379 < len__8473__auto___13378)){
args__8480__auto__.push((arguments[i__8474__auto___13379]));

var G__13380 = (i__8474__auto___13379 + (1));
i__8474__auto___13379 = G__13380;
continue;
} else {
}
break;
}

var argseq__8481__auto__ = ((((0) < args__8480__auto__.length))?(new cljs.core.IndexedSeq(args__8480__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__8481__auto__);
});})(g__8565__auto___13377))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8565__auto___13377){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8565__auto___13377),args);
});})(g__8565__auto___13377))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__8565__auto___13377){
return (function (seq13355){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13355));
});})(g__8565__auto___13377))
;


var g__8565__auto___13381 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__8565__auto___13381){
return (function cljs$spec$impl$gen$map(var_args){
var args__8480__auto__ = [];
var len__8473__auto___13382 = arguments.length;
var i__8474__auto___13383 = (0);
while(true){
if((i__8474__auto___13383 < len__8473__auto___13382)){
args__8480__auto__.push((arguments[i__8474__auto___13383]));

var G__13384 = (i__8474__auto___13383 + (1));
i__8474__auto___13383 = G__13384;
continue;
} else {
}
break;
}

var argseq__8481__auto__ = ((((0) < args__8480__auto__.length))?(new cljs.core.IndexedSeq(args__8480__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__8481__auto__);
});})(g__8565__auto___13381))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8565__auto___13381){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8565__auto___13381),args);
});})(g__8565__auto___13381))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__8565__auto___13381){
return (function (seq13356){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13356));
});})(g__8565__auto___13381))
;


var g__8565__auto___13385 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__8565__auto___13385){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__8480__auto__ = [];
var len__8473__auto___13386 = arguments.length;
var i__8474__auto___13387 = (0);
while(true){
if((i__8474__auto___13387 < len__8473__auto___13386)){
args__8480__auto__.push((arguments[i__8474__auto___13387]));

var G__13388 = (i__8474__auto___13387 + (1));
i__8474__auto___13387 = G__13388;
continue;
} else {
}
break;
}

var argseq__8481__auto__ = ((((0) < args__8480__auto__.length))?(new cljs.core.IndexedSeq(args__8480__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__8481__auto__);
});})(g__8565__auto___13385))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8565__auto___13385){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8565__auto___13385),args);
});})(g__8565__auto___13385))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__8565__auto___13385){
return (function (seq13357){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13357));
});})(g__8565__auto___13385))
;


var g__8565__auto___13389 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__8565__auto___13389){
return (function cljs$spec$impl$gen$set(var_args){
var args__8480__auto__ = [];
var len__8473__auto___13390 = arguments.length;
var i__8474__auto___13391 = (0);
while(true){
if((i__8474__auto___13391 < len__8473__auto___13390)){
args__8480__auto__.push((arguments[i__8474__auto___13391]));

var G__13392 = (i__8474__auto___13391 + (1));
i__8474__auto___13391 = G__13392;
continue;
} else {
}
break;
}

var argseq__8481__auto__ = ((((0) < args__8480__auto__.length))?(new cljs.core.IndexedSeq(args__8480__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__8481__auto__);
});})(g__8565__auto___13389))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8565__auto___13389){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8565__auto___13389),args);
});})(g__8565__auto___13389))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__8565__auto___13389){
return (function (seq13358){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13358));
});})(g__8565__auto___13389))
;


var g__8565__auto___13393 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__8565__auto___13393){
return (function cljs$spec$impl$gen$vector(var_args){
var args__8480__auto__ = [];
var len__8473__auto___13394 = arguments.length;
var i__8474__auto___13395 = (0);
while(true){
if((i__8474__auto___13395 < len__8473__auto___13394)){
args__8480__auto__.push((arguments[i__8474__auto___13395]));

var G__13396 = (i__8474__auto___13395 + (1));
i__8474__auto___13395 = G__13396;
continue;
} else {
}
break;
}

var argseq__8481__auto__ = ((((0) < args__8480__auto__.length))?(new cljs.core.IndexedSeq(args__8480__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__8481__auto__);
});})(g__8565__auto___13393))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8565__auto___13393){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8565__auto___13393),args);
});})(g__8565__auto___13393))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__8565__auto___13393){
return (function (seq13359){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13359));
});})(g__8565__auto___13393))
;


var g__8565__auto___13397 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__8565__auto___13397){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__8480__auto__ = [];
var len__8473__auto___13398 = arguments.length;
var i__8474__auto___13399 = (0);
while(true){
if((i__8474__auto___13399 < len__8473__auto___13398)){
args__8480__auto__.push((arguments[i__8474__auto___13399]));

var G__13400 = (i__8474__auto___13399 + (1));
i__8474__auto___13399 = G__13400;
continue;
} else {
}
break;
}

var argseq__8481__auto__ = ((((0) < args__8480__auto__.length))?(new cljs.core.IndexedSeq(args__8480__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__8481__auto__);
});})(g__8565__auto___13397))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8565__auto___13397){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8565__auto___13397),args);
});})(g__8565__auto___13397))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__8565__auto___13397){
return (function (seq13360){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13360));
});})(g__8565__auto___13397))
;


var g__8565__auto___13401 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__8565__auto___13401){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__8480__auto__ = [];
var len__8473__auto___13402 = arguments.length;
var i__8474__auto___13403 = (0);
while(true){
if((i__8474__auto___13403 < len__8473__auto___13402)){
args__8480__auto__.push((arguments[i__8474__auto___13403]));

var G__13404 = (i__8474__auto___13403 + (1));
i__8474__auto___13403 = G__13404;
continue;
} else {
}
break;
}

var argseq__8481__auto__ = ((((0) < args__8480__auto__.length))?(new cljs.core.IndexedSeq(args__8480__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__8481__auto__);
});})(g__8565__auto___13401))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8565__auto___13401){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8565__auto___13401),args);
});})(g__8565__auto___13401))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__8565__auto___13401){
return (function (seq13361){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13361));
});})(g__8565__auto___13401))
;


var g__8565__auto___13405 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__8565__auto___13405){
return (function cljs$spec$impl$gen$elements(var_args){
var args__8480__auto__ = [];
var len__8473__auto___13406 = arguments.length;
var i__8474__auto___13407 = (0);
while(true){
if((i__8474__auto___13407 < len__8473__auto___13406)){
args__8480__auto__.push((arguments[i__8474__auto___13407]));

var G__13408 = (i__8474__auto___13407 + (1));
i__8474__auto___13407 = G__13408;
continue;
} else {
}
break;
}

var argseq__8481__auto__ = ((((0) < args__8480__auto__.length))?(new cljs.core.IndexedSeq(args__8480__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__8481__auto__);
});})(g__8565__auto___13405))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8565__auto___13405){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8565__auto___13405),args);
});})(g__8565__auto___13405))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__8565__auto___13405){
return (function (seq13362){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13362));
});})(g__8565__auto___13405))
;


var g__8565__auto___13409 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__8565__auto___13409){
return (function cljs$spec$impl$gen$bind(var_args){
var args__8480__auto__ = [];
var len__8473__auto___13410 = arguments.length;
var i__8474__auto___13411 = (0);
while(true){
if((i__8474__auto___13411 < len__8473__auto___13410)){
args__8480__auto__.push((arguments[i__8474__auto___13411]));

var G__13412 = (i__8474__auto___13411 + (1));
i__8474__auto___13411 = G__13412;
continue;
} else {
}
break;
}

var argseq__8481__auto__ = ((((0) < args__8480__auto__.length))?(new cljs.core.IndexedSeq(args__8480__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__8481__auto__);
});})(g__8565__auto___13409))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8565__auto___13409){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8565__auto___13409),args);
});})(g__8565__auto___13409))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__8565__auto___13409){
return (function (seq13363){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13363));
});})(g__8565__auto___13409))
;


var g__8565__auto___13413 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__8565__auto___13413){
return (function cljs$spec$impl$gen$choose(var_args){
var args__8480__auto__ = [];
var len__8473__auto___13414 = arguments.length;
var i__8474__auto___13415 = (0);
while(true){
if((i__8474__auto___13415 < len__8473__auto___13414)){
args__8480__auto__.push((arguments[i__8474__auto___13415]));

var G__13416 = (i__8474__auto___13415 + (1));
i__8474__auto___13415 = G__13416;
continue;
} else {
}
break;
}

var argseq__8481__auto__ = ((((0) < args__8480__auto__.length))?(new cljs.core.IndexedSeq(args__8480__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__8481__auto__);
});})(g__8565__auto___13413))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8565__auto___13413){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8565__auto___13413),args);
});})(g__8565__auto___13413))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__8565__auto___13413){
return (function (seq13364){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13364));
});})(g__8565__auto___13413))
;


var g__8565__auto___13417 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__8565__auto___13417){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__8480__auto__ = [];
var len__8473__auto___13418 = arguments.length;
var i__8474__auto___13419 = (0);
while(true){
if((i__8474__auto___13419 < len__8473__auto___13418)){
args__8480__auto__.push((arguments[i__8474__auto___13419]));

var G__13420 = (i__8474__auto___13419 + (1));
i__8474__auto___13419 = G__13420;
continue;
} else {
}
break;
}

var argseq__8481__auto__ = ((((0) < args__8480__auto__.length))?(new cljs.core.IndexedSeq(args__8480__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__8481__auto__);
});})(g__8565__auto___13417))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8565__auto___13417){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8565__auto___13417),args);
});})(g__8565__auto___13417))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__8565__auto___13417){
return (function (seq13365){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13365));
});})(g__8565__auto___13417))
;


var g__8565__auto___13421 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__8565__auto___13421){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__8480__auto__ = [];
var len__8473__auto___13422 = arguments.length;
var i__8474__auto___13423 = (0);
while(true){
if((i__8474__auto___13423 < len__8473__auto___13422)){
args__8480__auto__.push((arguments[i__8474__auto___13423]));

var G__13424 = (i__8474__auto___13423 + (1));
i__8474__auto___13423 = G__13424;
continue;
} else {
}
break;
}

var argseq__8481__auto__ = ((((0) < args__8480__auto__.length))?(new cljs.core.IndexedSeq(args__8480__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__8481__auto__);
});})(g__8565__auto___13421))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8565__auto___13421){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8565__auto___13421),args);
});})(g__8565__auto___13421))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__8565__auto___13421){
return (function (seq13366){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13366));
});})(g__8565__auto___13421))
;


var g__8565__auto___13425 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__8565__auto___13425){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__8480__auto__ = [];
var len__8473__auto___13426 = arguments.length;
var i__8474__auto___13427 = (0);
while(true){
if((i__8474__auto___13427 < len__8473__auto___13426)){
args__8480__auto__.push((arguments[i__8474__auto___13427]));

var G__13428 = (i__8474__auto___13427 + (1));
i__8474__auto___13427 = G__13428;
continue;
} else {
}
break;
}

var argseq__8481__auto__ = ((((0) < args__8480__auto__.length))?(new cljs.core.IndexedSeq(args__8480__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__8481__auto__);
});})(g__8565__auto___13425))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8565__auto___13425){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8565__auto___13425),args);
});})(g__8565__auto___13425))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__8565__auto___13425){
return (function (seq13367){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13367));
});})(g__8565__auto___13425))
;


var g__8565__auto___13429 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__8565__auto___13429){
return (function cljs$spec$impl$gen$sample(var_args){
var args__8480__auto__ = [];
var len__8473__auto___13430 = arguments.length;
var i__8474__auto___13431 = (0);
while(true){
if((i__8474__auto___13431 < len__8473__auto___13430)){
args__8480__auto__.push((arguments[i__8474__auto___13431]));

var G__13432 = (i__8474__auto___13431 + (1));
i__8474__auto___13431 = G__13432;
continue;
} else {
}
break;
}

var argseq__8481__auto__ = ((((0) < args__8480__auto__.length))?(new cljs.core.IndexedSeq(args__8480__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__8481__auto__);
});})(g__8565__auto___13429))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8565__auto___13429){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8565__auto___13429),args);
});})(g__8565__auto___13429))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__8565__auto___13429){
return (function (seq13368){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13368));
});})(g__8565__auto___13429))
;


var g__8565__auto___13433 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__8565__auto___13433){
return (function cljs$spec$impl$gen$return(var_args){
var args__8480__auto__ = [];
var len__8473__auto___13434 = arguments.length;
var i__8474__auto___13435 = (0);
while(true){
if((i__8474__auto___13435 < len__8473__auto___13434)){
args__8480__auto__.push((arguments[i__8474__auto___13435]));

var G__13436 = (i__8474__auto___13435 + (1));
i__8474__auto___13435 = G__13436;
continue;
} else {
}
break;
}

var argseq__8481__auto__ = ((((0) < args__8480__auto__.length))?(new cljs.core.IndexedSeq(args__8480__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__8481__auto__);
});})(g__8565__auto___13433))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8565__auto___13433){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8565__auto___13433),args);
});})(g__8565__auto___13433))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__8565__auto___13433){
return (function (seq13369){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13369));
});})(g__8565__auto___13433))
;


var g__8565__auto___13437 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__8565__auto___13437){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__8480__auto__ = [];
var len__8473__auto___13438 = arguments.length;
var i__8474__auto___13439 = (0);
while(true){
if((i__8474__auto___13439 < len__8473__auto___13438)){
args__8480__auto__.push((arguments[i__8474__auto___13439]));

var G__13440 = (i__8474__auto___13439 + (1));
i__8474__auto___13439 = G__13440;
continue;
} else {
}
break;
}

var argseq__8481__auto__ = ((((0) < args__8480__auto__.length))?(new cljs.core.IndexedSeq(args__8480__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8481__auto__);
});})(g__8565__auto___13437))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8565__auto___13437){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8565__auto___13437),args);
});})(g__8565__auto___13437))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__8565__auto___13437){
return (function (seq13370){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13370));
});})(g__8565__auto___13437))
;


var g__8565__auto___13441 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__8565__auto___13441){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__8480__auto__ = [];
var len__8473__auto___13442 = arguments.length;
var i__8474__auto___13443 = (0);
while(true){
if((i__8474__auto___13443 < len__8473__auto___13442)){
args__8480__auto__.push((arguments[i__8474__auto___13443]));

var G__13444 = (i__8474__auto___13443 + (1));
i__8474__auto___13443 = G__13444;
continue;
} else {
}
break;
}

var argseq__8481__auto__ = ((((0) < args__8480__auto__.length))?(new cljs.core.IndexedSeq(args__8480__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8481__auto__);
});})(g__8565__auto___13441))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8565__auto___13441){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8565__auto___13441),args);
});})(g__8565__auto___13441))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__8565__auto___13441){
return (function (seq13371){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13371));
});})(g__8565__auto___13441))
;


var g__8565__auto___13445 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__8565__auto___13445){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__8480__auto__ = [];
var len__8473__auto___13446 = arguments.length;
var i__8474__auto___13447 = (0);
while(true){
if((i__8474__auto___13447 < len__8473__auto___13446)){
args__8480__auto__.push((arguments[i__8474__auto___13447]));

var G__13448 = (i__8474__auto___13447 + (1));
i__8474__auto___13447 = G__13448;
continue;
} else {
}
break;
}

var argseq__8481__auto__ = ((((0) < args__8480__auto__.length))?(new cljs.core.IndexedSeq(args__8480__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__8481__auto__);
});})(g__8565__auto___13445))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8565__auto___13445){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8565__auto___13445),args);
});})(g__8565__auto___13445))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__8565__auto___13445){
return (function (seq13372){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13372));
});})(g__8565__auto___13445))
;

var g__8578__auto___13470 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__8578__auto___13470){
return (function cljs$spec$impl$gen$any(var_args){
var args__8480__auto__ = [];
var len__8473__auto___13471 = arguments.length;
var i__8474__auto___13472 = (0);
while(true){
if((i__8474__auto___13472 < len__8473__auto___13471)){
args__8480__auto__.push((arguments[i__8474__auto___13472]));

var G__13473 = (i__8474__auto___13472 + (1));
i__8474__auto___13472 = G__13473;
continue;
} else {
}
break;
}

var argseq__8481__auto__ = ((((0) < args__8480__auto__.length))?(new cljs.core.IndexedSeq(args__8480__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__8481__auto__);
});})(g__8578__auto___13470))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8578__auto___13470){
return (function (args){
return cljs.core.deref.call(null,g__8578__auto___13470);
});})(g__8578__auto___13470))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__8578__auto___13470){
return (function (seq13449){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13449));
});})(g__8578__auto___13470))
;


var g__8578__auto___13474 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__8578__auto___13474){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__8480__auto__ = [];
var len__8473__auto___13475 = arguments.length;
var i__8474__auto___13476 = (0);
while(true){
if((i__8474__auto___13476 < len__8473__auto___13475)){
args__8480__auto__.push((arguments[i__8474__auto___13476]));

var G__13477 = (i__8474__auto___13476 + (1));
i__8474__auto___13476 = G__13477;
continue;
} else {
}
break;
}

var argseq__8481__auto__ = ((((0) < args__8480__auto__.length))?(new cljs.core.IndexedSeq(args__8480__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8481__auto__);
});})(g__8578__auto___13474))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8578__auto___13474){
return (function (args){
return cljs.core.deref.call(null,g__8578__auto___13474);
});})(g__8578__auto___13474))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__8578__auto___13474){
return (function (seq13450){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13450));
});})(g__8578__auto___13474))
;


var g__8578__auto___13478 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__8578__auto___13478){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__8480__auto__ = [];
var len__8473__auto___13479 = arguments.length;
var i__8474__auto___13480 = (0);
while(true){
if((i__8474__auto___13480 < len__8473__auto___13479)){
args__8480__auto__.push((arguments[i__8474__auto___13480]));

var G__13481 = (i__8474__auto___13480 + (1));
i__8474__auto___13480 = G__13481;
continue;
} else {
}
break;
}

var argseq__8481__auto__ = ((((0) < args__8480__auto__.length))?(new cljs.core.IndexedSeq(args__8480__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__8481__auto__);
});})(g__8578__auto___13478))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8578__auto___13478){
return (function (args){
return cljs.core.deref.call(null,g__8578__auto___13478);
});})(g__8578__auto___13478))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__8578__auto___13478){
return (function (seq13451){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13451));
});})(g__8578__auto___13478))
;


var g__8578__auto___13482 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__8578__auto___13482){
return (function cljs$spec$impl$gen$char(var_args){
var args__8480__auto__ = [];
var len__8473__auto___13483 = arguments.length;
var i__8474__auto___13484 = (0);
while(true){
if((i__8474__auto___13484 < len__8473__auto___13483)){
args__8480__auto__.push((arguments[i__8474__auto___13484]));

var G__13485 = (i__8474__auto___13484 + (1));
i__8474__auto___13484 = G__13485;
continue;
} else {
}
break;
}

var argseq__8481__auto__ = ((((0) < args__8480__auto__.length))?(new cljs.core.IndexedSeq(args__8480__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__8481__auto__);
});})(g__8578__auto___13482))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8578__auto___13482){
return (function (args){
return cljs.core.deref.call(null,g__8578__auto___13482);
});})(g__8578__auto___13482))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__8578__auto___13482){
return (function (seq13452){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13452));
});})(g__8578__auto___13482))
;


var g__8578__auto___13486 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__8578__auto___13486){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__8480__auto__ = [];
var len__8473__auto___13487 = arguments.length;
var i__8474__auto___13488 = (0);
while(true){
if((i__8474__auto___13488 < len__8473__auto___13487)){
args__8480__auto__.push((arguments[i__8474__auto___13488]));

var G__13489 = (i__8474__auto___13488 + (1));
i__8474__auto___13488 = G__13489;
continue;
} else {
}
break;
}

var argseq__8481__auto__ = ((((0) < args__8480__auto__.length))?(new cljs.core.IndexedSeq(args__8480__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__8481__auto__);
});})(g__8578__auto___13486))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8578__auto___13486){
return (function (args){
return cljs.core.deref.call(null,g__8578__auto___13486);
});})(g__8578__auto___13486))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__8578__auto___13486){
return (function (seq13453){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13453));
});})(g__8578__auto___13486))
;


var g__8578__auto___13490 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__8578__auto___13490){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__8480__auto__ = [];
var len__8473__auto___13491 = arguments.length;
var i__8474__auto___13492 = (0);
while(true){
if((i__8474__auto___13492 < len__8473__auto___13491)){
args__8480__auto__.push((arguments[i__8474__auto___13492]));

var G__13493 = (i__8474__auto___13492 + (1));
i__8474__auto___13492 = G__13493;
continue;
} else {
}
break;
}

var argseq__8481__auto__ = ((((0) < args__8480__auto__.length))?(new cljs.core.IndexedSeq(args__8480__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8481__auto__);
});})(g__8578__auto___13490))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8578__auto___13490){
return (function (args){
return cljs.core.deref.call(null,g__8578__auto___13490);
});})(g__8578__auto___13490))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__8578__auto___13490){
return (function (seq13454){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13454));
});})(g__8578__auto___13490))
;


var g__8578__auto___13494 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__8578__auto___13494){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__8480__auto__ = [];
var len__8473__auto___13495 = arguments.length;
var i__8474__auto___13496 = (0);
while(true){
if((i__8474__auto___13496 < len__8473__auto___13495)){
args__8480__auto__.push((arguments[i__8474__auto___13496]));

var G__13497 = (i__8474__auto___13496 + (1));
i__8474__auto___13496 = G__13497;
continue;
} else {
}
break;
}

var argseq__8481__auto__ = ((((0) < args__8480__auto__.length))?(new cljs.core.IndexedSeq(args__8480__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8481__auto__);
});})(g__8578__auto___13494))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8578__auto___13494){
return (function (args){
return cljs.core.deref.call(null,g__8578__auto___13494);
});})(g__8578__auto___13494))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__8578__auto___13494){
return (function (seq13455){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13455));
});})(g__8578__auto___13494))
;


var g__8578__auto___13498 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__8578__auto___13498){
return (function cljs$spec$impl$gen$double(var_args){
var args__8480__auto__ = [];
var len__8473__auto___13499 = arguments.length;
var i__8474__auto___13500 = (0);
while(true){
if((i__8474__auto___13500 < len__8473__auto___13499)){
args__8480__auto__.push((arguments[i__8474__auto___13500]));

var G__13501 = (i__8474__auto___13500 + (1));
i__8474__auto___13500 = G__13501;
continue;
} else {
}
break;
}

var argseq__8481__auto__ = ((((0) < args__8480__auto__.length))?(new cljs.core.IndexedSeq(args__8480__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__8481__auto__);
});})(g__8578__auto___13498))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8578__auto___13498){
return (function (args){
return cljs.core.deref.call(null,g__8578__auto___13498);
});})(g__8578__auto___13498))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__8578__auto___13498){
return (function (seq13456){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13456));
});})(g__8578__auto___13498))
;


var g__8578__auto___13502 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__8578__auto___13502){
return (function cljs$spec$impl$gen$int(var_args){
var args__8480__auto__ = [];
var len__8473__auto___13503 = arguments.length;
var i__8474__auto___13504 = (0);
while(true){
if((i__8474__auto___13504 < len__8473__auto___13503)){
args__8480__auto__.push((arguments[i__8474__auto___13504]));

var G__13505 = (i__8474__auto___13504 + (1));
i__8474__auto___13504 = G__13505;
continue;
} else {
}
break;
}

var argseq__8481__auto__ = ((((0) < args__8480__auto__.length))?(new cljs.core.IndexedSeq(args__8480__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__8481__auto__);
});})(g__8578__auto___13502))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8578__auto___13502){
return (function (args){
return cljs.core.deref.call(null,g__8578__auto___13502);
});})(g__8578__auto___13502))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__8578__auto___13502){
return (function (seq13457){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13457));
});})(g__8578__auto___13502))
;


var g__8578__auto___13506 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__8578__auto___13506){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__8480__auto__ = [];
var len__8473__auto___13507 = arguments.length;
var i__8474__auto___13508 = (0);
while(true){
if((i__8474__auto___13508 < len__8473__auto___13507)){
args__8480__auto__.push((arguments[i__8474__auto___13508]));

var G__13509 = (i__8474__auto___13508 + (1));
i__8474__auto___13508 = G__13509;
continue;
} else {
}
break;
}

var argseq__8481__auto__ = ((((0) < args__8480__auto__.length))?(new cljs.core.IndexedSeq(args__8480__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__8481__auto__);
});})(g__8578__auto___13506))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8578__auto___13506){
return (function (args){
return cljs.core.deref.call(null,g__8578__auto___13506);
});})(g__8578__auto___13506))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__8578__auto___13506){
return (function (seq13458){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13458));
});})(g__8578__auto___13506))
;


var g__8578__auto___13510 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__8578__auto___13510){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__8480__auto__ = [];
var len__8473__auto___13511 = arguments.length;
var i__8474__auto___13512 = (0);
while(true){
if((i__8474__auto___13512 < len__8473__auto___13511)){
args__8480__auto__.push((arguments[i__8474__auto___13512]));

var G__13513 = (i__8474__auto___13512 + (1));
i__8474__auto___13512 = G__13513;
continue;
} else {
}
break;
}

var argseq__8481__auto__ = ((((0) < args__8480__auto__.length))?(new cljs.core.IndexedSeq(args__8480__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8481__auto__);
});})(g__8578__auto___13510))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8578__auto___13510){
return (function (args){
return cljs.core.deref.call(null,g__8578__auto___13510);
});})(g__8578__auto___13510))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__8578__auto___13510){
return (function (seq13459){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13459));
});})(g__8578__auto___13510))
;


var g__8578__auto___13514 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__8578__auto___13514){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__8480__auto__ = [];
var len__8473__auto___13515 = arguments.length;
var i__8474__auto___13516 = (0);
while(true){
if((i__8474__auto___13516 < len__8473__auto___13515)){
args__8480__auto__.push((arguments[i__8474__auto___13516]));

var G__13517 = (i__8474__auto___13516 + (1));
i__8474__auto___13516 = G__13517;
continue;
} else {
}
break;
}

var argseq__8481__auto__ = ((((0) < args__8480__auto__.length))?(new cljs.core.IndexedSeq(args__8480__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__8481__auto__);
});})(g__8578__auto___13514))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8578__auto___13514){
return (function (args){
return cljs.core.deref.call(null,g__8578__auto___13514);
});})(g__8578__auto___13514))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__8578__auto___13514){
return (function (seq13460){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13460));
});})(g__8578__auto___13514))
;


var g__8578__auto___13518 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__8578__auto___13518){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__8480__auto__ = [];
var len__8473__auto___13519 = arguments.length;
var i__8474__auto___13520 = (0);
while(true){
if((i__8474__auto___13520 < len__8473__auto___13519)){
args__8480__auto__.push((arguments[i__8474__auto___13520]));

var G__13521 = (i__8474__auto___13520 + (1));
i__8474__auto___13520 = G__13521;
continue;
} else {
}
break;
}

var argseq__8481__auto__ = ((((0) < args__8480__auto__.length))?(new cljs.core.IndexedSeq(args__8480__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__8481__auto__);
});})(g__8578__auto___13518))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8578__auto___13518){
return (function (args){
return cljs.core.deref.call(null,g__8578__auto___13518);
});})(g__8578__auto___13518))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__8578__auto___13518){
return (function (seq13461){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13461));
});})(g__8578__auto___13518))
;


var g__8578__auto___13522 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__8578__auto___13522){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__8480__auto__ = [];
var len__8473__auto___13523 = arguments.length;
var i__8474__auto___13524 = (0);
while(true){
if((i__8474__auto___13524 < len__8473__auto___13523)){
args__8480__auto__.push((arguments[i__8474__auto___13524]));

var G__13525 = (i__8474__auto___13524 + (1));
i__8474__auto___13524 = G__13525;
continue;
} else {
}
break;
}

var argseq__8481__auto__ = ((((0) < args__8480__auto__.length))?(new cljs.core.IndexedSeq(args__8480__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__8481__auto__);
});})(g__8578__auto___13522))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8578__auto___13522){
return (function (args){
return cljs.core.deref.call(null,g__8578__auto___13522);
});})(g__8578__auto___13522))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__8578__auto___13522){
return (function (seq13462){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13462));
});})(g__8578__auto___13522))
;


var g__8578__auto___13526 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__8578__auto___13526){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__8480__auto__ = [];
var len__8473__auto___13527 = arguments.length;
var i__8474__auto___13528 = (0);
while(true){
if((i__8474__auto___13528 < len__8473__auto___13527)){
args__8480__auto__.push((arguments[i__8474__auto___13528]));

var G__13529 = (i__8474__auto___13528 + (1));
i__8474__auto___13528 = G__13529;
continue;
} else {
}
break;
}

var argseq__8481__auto__ = ((((0) < args__8480__auto__.length))?(new cljs.core.IndexedSeq(args__8480__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8481__auto__);
});})(g__8578__auto___13526))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8578__auto___13526){
return (function (args){
return cljs.core.deref.call(null,g__8578__auto___13526);
});})(g__8578__auto___13526))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__8578__auto___13526){
return (function (seq13463){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13463));
});})(g__8578__auto___13526))
;


var g__8578__auto___13530 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__8578__auto___13530){
return (function cljs$spec$impl$gen$string(var_args){
var args__8480__auto__ = [];
var len__8473__auto___13531 = arguments.length;
var i__8474__auto___13532 = (0);
while(true){
if((i__8474__auto___13532 < len__8473__auto___13531)){
args__8480__auto__.push((arguments[i__8474__auto___13532]));

var G__13533 = (i__8474__auto___13532 + (1));
i__8474__auto___13532 = G__13533;
continue;
} else {
}
break;
}

var argseq__8481__auto__ = ((((0) < args__8480__auto__.length))?(new cljs.core.IndexedSeq(args__8480__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__8481__auto__);
});})(g__8578__auto___13530))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8578__auto___13530){
return (function (args){
return cljs.core.deref.call(null,g__8578__auto___13530);
});})(g__8578__auto___13530))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__8578__auto___13530){
return (function (seq13464){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13464));
});})(g__8578__auto___13530))
;


var g__8578__auto___13534 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__8578__auto___13534){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__8480__auto__ = [];
var len__8473__auto___13535 = arguments.length;
var i__8474__auto___13536 = (0);
while(true){
if((i__8474__auto___13536 < len__8473__auto___13535)){
args__8480__auto__.push((arguments[i__8474__auto___13536]));

var G__13537 = (i__8474__auto___13536 + (1));
i__8474__auto___13536 = G__13537;
continue;
} else {
}
break;
}

var argseq__8481__auto__ = ((((0) < args__8480__auto__.length))?(new cljs.core.IndexedSeq(args__8480__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8481__auto__);
});})(g__8578__auto___13534))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8578__auto___13534){
return (function (args){
return cljs.core.deref.call(null,g__8578__auto___13534);
});})(g__8578__auto___13534))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__8578__auto___13534){
return (function (seq13465){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13465));
});})(g__8578__auto___13534))
;


var g__8578__auto___13538 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__8578__auto___13538){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__8480__auto__ = [];
var len__8473__auto___13539 = arguments.length;
var i__8474__auto___13540 = (0);
while(true){
if((i__8474__auto___13540 < len__8473__auto___13539)){
args__8480__auto__.push((arguments[i__8474__auto___13540]));

var G__13541 = (i__8474__auto___13540 + (1));
i__8474__auto___13540 = G__13541;
continue;
} else {
}
break;
}

var argseq__8481__auto__ = ((((0) < args__8480__auto__.length))?(new cljs.core.IndexedSeq(args__8480__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8481__auto__);
});})(g__8578__auto___13538))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8578__auto___13538){
return (function (args){
return cljs.core.deref.call(null,g__8578__auto___13538);
});})(g__8578__auto___13538))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__8578__auto___13538){
return (function (seq13466){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13466));
});})(g__8578__auto___13538))
;


var g__8578__auto___13542 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__8578__auto___13542){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__8480__auto__ = [];
var len__8473__auto___13543 = arguments.length;
var i__8474__auto___13544 = (0);
while(true){
if((i__8474__auto___13544 < len__8473__auto___13543)){
args__8480__auto__.push((arguments[i__8474__auto___13544]));

var G__13545 = (i__8474__auto___13544 + (1));
i__8474__auto___13544 = G__13545;
continue;
} else {
}
break;
}

var argseq__8481__auto__ = ((((0) < args__8480__auto__.length))?(new cljs.core.IndexedSeq(args__8480__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__8481__auto__);
});})(g__8578__auto___13542))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8578__auto___13542){
return (function (args){
return cljs.core.deref.call(null,g__8578__auto___13542);
});})(g__8578__auto___13542))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__8578__auto___13542){
return (function (seq13467){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13467));
});})(g__8578__auto___13542))
;


var g__8578__auto___13546 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__8578__auto___13546){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__8480__auto__ = [];
var len__8473__auto___13547 = arguments.length;
var i__8474__auto___13548 = (0);
while(true){
if((i__8474__auto___13548 < len__8473__auto___13547)){
args__8480__auto__.push((arguments[i__8474__auto___13548]));

var G__13549 = (i__8474__auto___13548 + (1));
i__8474__auto___13548 = G__13549;
continue;
} else {
}
break;
}

var argseq__8481__auto__ = ((((0) < args__8480__auto__.length))?(new cljs.core.IndexedSeq(args__8480__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8481__auto__);
});})(g__8578__auto___13546))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8578__auto___13546){
return (function (args){
return cljs.core.deref.call(null,g__8578__auto___13546);
});})(g__8578__auto___13546))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__8578__auto___13546){
return (function (seq13468){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13468));
});})(g__8578__auto___13546))
;


var g__8578__auto___13550 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__8578__auto___13550){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__8480__auto__ = [];
var len__8473__auto___13551 = arguments.length;
var i__8474__auto___13552 = (0);
while(true){
if((i__8474__auto___13552 < len__8473__auto___13551)){
args__8480__auto__.push((arguments[i__8474__auto___13552]));

var G__13553 = (i__8474__auto___13552 + (1));
i__8474__auto___13552 = G__13553;
continue;
} else {
}
break;
}

var argseq__8481__auto__ = ((((0) < args__8480__auto__.length))?(new cljs.core.IndexedSeq(args__8480__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__8481__auto__);
});})(g__8578__auto___13550))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8578__auto___13550){
return (function (args){
return cljs.core.deref.call(null,g__8578__auto___13550);
});})(g__8578__auto___13550))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__8578__auto___13550){
return (function (seq13469){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13469));
});})(g__8578__auto___13550))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__8480__auto__ = [];
var len__8473__auto___13556 = arguments.length;
var i__8474__auto___13557 = (0);
while(true){
if((i__8474__auto___13557 < len__8473__auto___13556)){
args__8480__auto__.push((arguments[i__8474__auto___13557]));

var G__13558 = (i__8474__auto___13557 + (1));
i__8474__auto___13557 = G__13558;
continue;
} else {
}
break;
}

var argseq__8481__auto__ = ((((0) < args__8480__auto__.length))?(new cljs.core.IndexedSeq(args__8480__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__8481__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__13554_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__13554_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq13555){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13555));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__13559_SHARP_){
return (new Date(p1__13559_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map