function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"k/Fm":function(n,e,t){"use strict";t.r(e);var o=t("ofXK"),a=t("tyNb"),i=t("fXoL"),r=t("H+bZ"),c=t("2Rin"),l=t("xJkR"),d=function(){return{"border-radius":"5px",height:"10px",width:"100%"}};function g(n,e){1&n&&i["\u0275\u0275element"](0,"ngx-skeleton-loader",4),2&n&&i["\u0275\u0275property"]("theme",i["\u0275\u0275pureFunction0"](1,d))}var s=function(){return[1,2,3,4,5,6,7,8,9]};function p(n,e){1&n&&(i["\u0275\u0275elementStart"](0,"div"),i["\u0275\u0275template"](1,g,1,2,"ngx-skeleton-loader",3),i["\u0275\u0275elementEnd"]()),2&n&&(i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngForOf",i["\u0275\u0275pureFunction0"](1,s)))}function f(n,e){if(1&n&&i["\u0275\u0275element"](0,"p",5),2&n){var t=i["\u0275\u0275nextContext"]();i["\u0275\u0275property"]("innerHTML",t.getContent(),i["\u0275\u0275sanitizeHtml"])}}var u,h,b=[{path:"",component:(u=function(){function n(e,t){var o=this;_classCallCheck(this,n),this.api=e,this.util=t,this.loaded=!1,this.api.post("pages/getById",{id:5}).then((function(n){console.log(n),o.loaded=!0,n&&200===n.status&&n.data.length>0&&(o.content=n.data[0].content)}),(function(n){console.log(n),o.loaded=!0,o.util.errorMessage(o.util.translate("Something went wrong"))}))}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"getContent",value:function(){return this.content}}]),n}(),u.\u0275fac=function(n){return new(n||u)(i["\u0275\u0275directiveInject"](r.a),i["\u0275\u0275directiveInject"](c.a))},u.\u0275cmp=i["\u0275\u0275defineComponent"]({type:u,selectors:[["app-faq"]],decls:3,vars:2,consts:[[1,"container"],[4,"ngIf"],[3,"innerHTML",4,"ngIf"],[3,"theme",4,"ngFor","ngForOf"],[3,"theme"],[3,"innerHTML"]],template:function(n,e){1&n&&(i["\u0275\u0275elementStart"](0,"div",0),i["\u0275\u0275template"](1,p,2,2,"div",1),i["\u0275\u0275template"](2,f,1,1,"p",2),i["\u0275\u0275elementEnd"]()),2&n&&(i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",!e.loaded),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",e.loaded))},directives:[o.NgIf,o.NgForOf,l.a],styles:['@charset "UTF-8";.back_image[_ngcontent-%COMP%]{width:100%;height:500px;background-repeat:no-repeat;background-size:cover;background-position:50%}.container[_ngcontent-%COMP%]{margin-top:30px}label[_ngcontent-%COMP%]{display:block;margin:0}h1[_ngcontent-%COMP%]{margin:0;line-height:2;text-align:center}h2[_ngcontent-%COMP%]{margin:0 0 .5em;font-weight:400}input[type=radio][_ngcontent-%COMP%]{position:absolute;opacity:0;z-index:-1}.row[_ngcontent-%COMP%]{display:flex}.row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]{flex:1}.row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:last-child{margin-left:1em}.tabs[_ngcontent-%COMP%]{border-radius:8px;box-shadow:0 4px 4px -2px rgba(0,0,0,.5)}.tab[_ngcontent-%COMP%], .tabs[_ngcontent-%COMP%]{overflow:hidden}.tab[_ngcontent-%COMP%]{width:100%;color:#fff}.tab-label[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:1em;background:#45c261;font-weight:500;cursor:pointer}.tab-label[_ngcontent-%COMP%]:hover{background:#3bb356}.tab-label[_ngcontent-%COMP%]:after{content:"\u276f";width:1em;height:1em;text-align:center;transition:all .35s}.tab-content[_ngcontent-%COMP%]{max-height:0;padding:0 1em;color:#45c261;background:#fff;transition:all .35s}.tab-close[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;padding:1em;font-size:.75em;background:#45c261;cursor:pointer}.tab-close[_ngcontent-%COMP%]:hover, input[_ngcontent-%COMP%]:checked + .tab-label[_ngcontent-%COMP%]{background:#34a04c}input[_ngcontent-%COMP%]:checked + .tab-label[_ngcontent-%COMP%]:after{transform:rotate(90deg)}input[_ngcontent-%COMP%]:checked ~ .tab-content[_ngcontent-%COMP%]{max-height:100vh;padding:1em}.answer_lbl[_ngcontent-%COMP%]{font-weight:400;color:#000;line-height:26px;font-size:15px}']}),u)}],C=((h=function n(){_classCallCheck(this,n)}).\u0275mod=i["\u0275\u0275defineNgModule"]({type:h}),h.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(n){return new(n||h)},imports:[[a.h.forChild(b)],a.h]}),h),m=t("PCNd");t.d(e,"FaqModule",(function(){return M}));var _,M=((_=function n(){_classCallCheck(this,n)}).\u0275mod=i["\u0275\u0275defineNgModule"]({type:_}),_.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(n){return new(n||_)},imports:[[o.CommonModule,C,m.a]]}),_)}}]);