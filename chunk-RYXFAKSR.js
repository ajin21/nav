import{e as K}from"./chunk-E2YWA5AZ.js";import{B as Q,Ba as G,Ca as J,M as V,R as H,V as L,X as q,ea as U}from"./chunk-KXJR77UL.js";import{Aa as y,Ba as W,Ca as A,Gb as P,Hb as a,Hc as x,Ia as I,Jb as l,Kb as _,Lb as h,Lc as $,Ma as j,Oc as f,Sb as g,Xb as S,Yb as N,Zb as z,bc as F,ec as O,ga as T,gc as o,hc as u,ic as m,kc as w,lb as v,ld as E,mb as s,mc as k,na as R,nc as D,oc as M,q as C,rb as b,tb as c,ub as Z}from"./chunk-LY6GF47V.js";var B=["*"],ee=["nz-sider-trigger",""];function te(t,r){}function ne(t,r){if(t&1&&a(0,te,0,0,"ng-template",2),t&2){let e=o(),n=M(5);l("ngTemplateOutlet",e.nzZeroTrigger||n)}}function ie(t,r){}function re(t,r){if(t&1&&a(0,ie,0,0,"ng-template",2),t&2){let e=o(),n=M(3);l("ngTemplateOutlet",e.nzTrigger||n)}}function oe(t,r){if(t&1&&z(0,"span",3),t&2){let e=o(2);l("nzType",e.nzCollapsed?"left":"right")}}function se(t,r){if(t&1&&z(0,"span",3),t&2){let e=o(2);l("nzType",e.nzCollapsed?"right":"left")}}function ae(t,r){if(t&1&&a(0,oe,1,1,"span",3)(1,se,1,1,"span",3),t&2){let e=o();g(e.nzReverseArrow?0:1)}}function le(t,r){t&1&&z(0,"span",4)}function de(t,r){if(t&1){let e=F();S(0,"div",2),O("click",function(){W(e);let i=o();return A(i.setCollapsed(!i.nzCollapsed))}),N()}if(t&2){let e=o();l("matchBreakPoint",e.matchBreakPoint)("nzCollapsedWidth",e.nzCollapsedWidth)("nzCollapsed",e.nzCollapsed)("nzBreakpoint",e.nzBreakpoint)("nzReverseArrow",e.nzReverseArrow)("nzTrigger",e.nzTrigger)("nzZeroTrigger",e.nzZeroTrigger)("siderWidth",e.widthSetting)}}var Re=(()=>{class t{constructor(e,n){this.elementRef=e,this.renderer=n,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-content")}static{this.\u0275fac=function(n){return new(n||t)(s(j),s(b))}}static{this.\u0275cmp=c({type:t,selectors:[["nz-content"]],exportAs:["nzContent"],ngContentSelectors:B,decls:1,vars:0,template:function(n,i){n&1&&(u(),m(0))},encapsulation:2,changeDetection:0})}}return t})();var X=(()=>{class t{constructor(){this.nzCollapsed=!1,this.nzReverseArrow=!1,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.matchBreakPoint=!1,this.nzCollapsedWidth=null,this.siderWidth=null,this.nzBreakpoint=null,this.isZeroTrigger=!1,this.isNormalTrigger=!1}updateTriggerType(){this.isZeroTrigger=this.nzCollapsedWidth===0&&(this.nzBreakpoint&&this.matchBreakPoint||!this.nzBreakpoint),this.isNormalTrigger=this.nzCollapsedWidth!==0}ngOnInit(){this.updateTriggerType()}ngOnChanges(){this.updateTriggerType()}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=c({type:t,selectors:[["","nz-sider-trigger",""]],hostVars:10,hostBindings:function(n,i){n&2&&(_("width",i.isNormalTrigger?i.siderWidth:null),h("ant-layout-sider-trigger",i.isNormalTrigger)("ant-layout-sider-zero-width-trigger",i.isZeroTrigger)("ant-layout-sider-zero-width-trigger-right",i.isZeroTrigger&&i.nzReverseArrow)("ant-layout-sider-zero-width-trigger-left",i.isZeroTrigger&&!i.nzReverseArrow))},inputs:{nzCollapsed:"nzCollapsed",nzReverseArrow:"nzReverseArrow",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",matchBreakPoint:"matchBreakPoint",nzCollapsedWidth:"nzCollapsedWidth",siderWidth:"siderWidth",nzBreakpoint:"nzBreakpoint"},exportAs:["nzSiderTrigger"],features:[y],attrs:ee,decls:6,vars:2,consts:[["defaultTrigger",""],["defaultZeroTrigger",""],[3,"ngTemplateOutlet"],["nz-icon","",3,"nzType"],["nz-icon","","nzType","bars"]],template:function(n,i){n&1&&a(0,ne,1,1,null,2)(1,re,1,1,null,2)(2,ae,2,1,"ng-template",null,0,x)(4,le,1,0,"ng-template",null,1,x),n&2&&(g(i.isZeroTrigger?0:-1),v(),g(i.isNormalTrigger?1:-1))},dependencies:[E,q,L],encapsulation:2,changeDetection:0})}}return t})(),Y=(()=>{class t{updateStyleMap(){this.widthSetting=this.nzCollapsed?`${this.nzCollapsedWidth}px`:Q(this.nzWidth),this.flexSetting=`0 0 ${this.widthSetting}`,this.cdr.markForCheck()}updateMenuInlineCollapsed(){this.nzMenuDirective&&this.nzMenuDirective.nzMode==="inline"&&this.nzCollapsedWidth!==0&&this.nzMenuDirective.setInlineCollapsed(this.nzCollapsed)}setCollapsed(e){e!==this.nzCollapsed&&(this.nzCollapsed=e,this.nzCollapsedChange.emit(e),this.updateMenuInlineCollapsed(),this.updateStyleMap(),this.cdr.markForCheck())}constructor(e,n,i){this.platform=e,this.cdr=n,this.breakpointService=i,this.destroy$=new C,this.nzMenuDirective=null,this.nzCollapsedChange=new I,this.nzWidth=200,this.nzTheme="dark",this.nzCollapsedWidth=80,this.nzBreakpoint=null,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.nzReverseArrow=!1,this.nzCollapsible=!1,this.nzCollapsed=!1,this.matchBreakPoint=!1,this.flexSetting=null,this.widthSetting=null}ngOnInit(){this.updateStyleMap(),this.platform.isBrowser&&this.breakpointService.subscribe(G,!0).pipe(T(this.destroy$)).subscribe(e=>{let n=this.nzBreakpoint;n&&V().subscribe(()=>{this.matchBreakPoint=!e[n],this.setCollapsed(this.matchBreakPoint),this.cdr.markForCheck()})})}ngOnChanges(e){let{nzCollapsed:n,nzCollapsedWidth:i,nzWidth:d}=e;(n||i||d)&&this.updateStyleMap(),n&&this.updateMenuInlineCollapsed()}ngAfterContentInit(){this.updateMenuInlineCollapsed()}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}static{this.\u0275fac=function(n){return new(n||t)(s(H),s($),s(J))}}static{this.\u0275cmp=c({type:t,selectors:[["nz-sider"]],contentQueries:function(n,i,d){if(n&1&&w(d,K,5),n&2){let p;k(p=D())&&(i.nzMenuDirective=p.first)}},hostAttrs:[1,"ant-layout-sider"],hostVars:18,hostBindings:function(n,i){n&2&&(_("flex",i.flexSetting)("max-width",i.widthSetting)("min-width",i.widthSetting)("width",i.widthSetting),h("ant-layout-sider-zero-width",i.nzCollapsed&&i.nzCollapsedWidth===0)("ant-layout-sider-light",i.nzTheme==="light")("ant-layout-sider-dark",i.nzTheme==="dark")("ant-layout-sider-collapsed",i.nzCollapsed)("ant-layout-sider-has-trigger",i.nzCollapsible&&i.nzTrigger!==null))},inputs:{nzWidth:"nzWidth",nzTheme:"nzTheme",nzCollapsedWidth:"nzCollapsedWidth",nzBreakpoint:"nzBreakpoint",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",nzReverseArrow:[2,"nzReverseArrow","nzReverseArrow",f],nzCollapsible:[2,"nzCollapsible","nzCollapsible",f],nzCollapsed:[2,"nzCollapsed","nzCollapsed",f]},outputs:{nzCollapsedChange:"nzCollapsedChange"},exportAs:["nzSider"],features:[P,y],ngContentSelectors:B,decls:3,vars:1,consts:[[1,"ant-layout-sider-children"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth"],["nz-sider-trigger","",3,"click","matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth"]],template:function(n,i){n&1&&(u(),S(0,"div",0),m(1),N(),a(2,de,1,8,"div",1)),n&2&&(v(2),g(i.nzCollapsible&&i.nzTrigger!==null?2:-1))},dependencies:[X],encapsulation:2,changeDetection:0})}}return t})(),We=(()=>{class t{constructor(e){this.directionality=e,this.dir="ltr",this.destroy$=new C}ngOnInit(){this.dir=this.directionality.value,this.directionality.change?.pipe(T(this.destroy$)).subscribe(e=>{this.dir=e})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}static{this.\u0275fac=function(n){return new(n||t)(s(U))}}static{this.\u0275cmp=c({type:t,selectors:[["nz-layout"]],contentQueries:function(n,i,d){if(n&1&&w(d,Y,4),n&2){let p;k(p=D())&&(i.listOfNzSiderComponent=p)}},hostAttrs:[1,"ant-layout"],hostVars:4,hostBindings:function(n,i){n&2&&h("ant-layout-rtl",i.dir==="rtl")("ant-layout-has-sider",i.listOfNzSiderComponent.length>0)},exportAs:["nzLayout"],ngContentSelectors:B,decls:1,vars:0,template:function(n,i){n&1&&(u(),m(0))},encapsulation:2,changeDetection:0})}}return t})(),Ae=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=Z({type:t})}static{this.\u0275inj=R({imports:[Y,X]})}}return t})();export{Re as a,Y as b,We as c,Ae as d};
