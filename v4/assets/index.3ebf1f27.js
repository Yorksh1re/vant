import{c as E,h as u,i as $,d as b}from"./use-translate.00c0a8db.js";import{n as d,t as L,m as P,w as D}from"./with-install.f242061f.js";import{I as j}from"./index.2879154d.js";import{A as k,x as f,P as C,D as N,y as R,J as U,e as a,j as V,V as q,B as z,q as A}from"./vue-libs.84c45047.js";const[F,o]=E("image"),J={src:String,alt:String,fit:String,position:String,round:Boolean,width:d,height:d,radius:d,lazyLoad:Boolean,iconSize:d,showError:L,errorIcon:P("photo-fail"),iconPrefix:String,showLoading:L,loadingIcon:P("photo")};var T=k({name:F,props:J,emits:["load","error"],setup(e,{emit:g,slots:n}){const i=f(!1),t=f(!0),c=f(),{$Lazyload:s}=C().proxy,S=N(()=>{const r={width:u(e.width),height:u(e.height)};return $(e.radius)&&(r.overflow="hidden",r.borderRadius=u(e.radius)),r});R(()=>e.src,()=>{i.value=!1,t.value=!0});const m=r=>{t.value=!1,g("load",r)},h=r=>{i.value=!0,t.value=!1,g("error",r)},v=(r,l,y)=>y?y():a(j,{name:r,size:e.iconSize,class:l,classPrefix:e.iconPrefix},null),x=()=>{if(t.value&&e.showLoading)return a("div",{class:o("loading")},[v(e.loadingIcon,o("loading-icon"),n.loading)]);if(i.value&&e.showError)return a("div",{class:o("error")},[v(e.errorIcon,o("error-icon"),n.error)])},B=()=>{if(i.value||!e.src)return;const r={alt:e.alt,class:o("img"),style:{objectFit:e.fit,objectPosition:e.position}};return e.lazyLoad?V(a("img",z({ref:c},r),null),[[q("lazy"),e.src]]):a("img",z({src:e.src,onLoad:m,onError:h},r),null)},w=({el:r})=>{const l=()=>{r===c.value&&t.value&&m()};c.value?l():A(l)},I=({el:r})=>{r===c.value&&!i.value&&h()};return s&&b&&(s.$on("loaded",w),s.$on("error",I),U(()=>{s.$off("loaded",w),s.$off("error",I)})),()=>{var r;return a("div",{class:o({round:e.round}),style:S.value},[B(),x(),(r=n.default)==null?void 0:r.call(n)])}}});const M=D(T);export{M as I};