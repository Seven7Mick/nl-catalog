(function(){"use strict";var t={3136:function(t,e,a){var o=a(3396);function s(t,e,a,s,n,r){const c=(0,o.up)("default-layout"),i=(0,o.up)("loader-screen");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(c),(0,o.Wm)(i)],64)}const n={class:"primary"};function r(t,e,a,s,r,c){const i=(0,o.up)("main-header"),l=(0,o.up)("router-view"),d=(0,o.up)("base-modal-container");return(0,o.wg)(),(0,o.iD)("div",n,[(0,o.Wm)(i),(0,o.Wm)(l),(0,o.Wm)(d)])}var c=a(7139),i=a(4066);const l=t=>((0,o.dD)("data-v-e864291c"),t=t(),(0,o.Cn)(),t),d={class:"header"},u={class:"header__wrapper container"},g=l((()=>(0,o._)("img",{class:"header__img",src:i,alt:"locale"},null,-1))),p={class:"header__text"};function m(t,e,a,s,n,r){return(0,o.wg)(),(0,o.iD)("div",d,[(0,o._)("div",u,[(0,o._)("button",{class:"header__btn",type:"button",onClick:e[0]||(e[0]=(...t)=>r.changeLocale&&r.changeLocale(...t))},[g,(0,o._)("span",p,(0,c.zw)(t.city),1)])])])}var _={locale:"locale"},h=a(9749),f={name:"MainHeader",data:()=>({city:"Новосибирск"}),created(){let t=localStorage.getItem("locale");t&&(t=JSON.parse(t),this.city=t.city)},methods:{...(0,h.nv)({modalShow:"modal/modalShow",modalHide:"modal/modalHide",fetchCategories:"catalog/fetchCategories"}),changeLocale(){this.modalShow({key:_.locale,title:"Выбор населённого пункта:",handler:t=>{this.changeCities(t),this.modalHide()}})},changeCities(t){this.city=t.city;const e=JSON.stringify(t);localStorage.setItem("locale",e),this.fetchCategories({cityId:t.id})}}},y=a(89);const v=(0,y.Z)(f,[["render",m],["__scopeId","data-v-e864291c"]]);var b=v,C=a(9242);function w(t,e,a,s,n,r){return(0,o.wg)(),(0,o.j4)(C.uT,{name:"fade"},{default:(0,o.w5)((()=>[t.isShow?((0,o.wg)(),(0,o.iD)("div",{key:0,class:"base-modal",onMousedown:e[0]||(e[0]=(0,C.iM)(((...t)=>r.backgroundClick&&r.backgroundClick(...t)),["self"]))},[((0,o.wg)(),(0,o.j4)((0,o.LL)(t.currentModalKey)))],32)):(0,o.kq)("",!0)])),_:1})}const S={class:"base-modal__content"},I=(0,o.Uk)(" Подтвердить ");function k(t,e,a,s,n,r){const c=(0,o.up)("base-field-search"),i=(0,o.up)("base-btn"),l=(0,o.up)("base-modal-box"),d=(0,o.Q2)("debounce");return(0,o.wg)(),(0,o.j4)(l,{class:"base-modal__box"},{default:(0,o.w5)((()=>[(0,o._)("div",S,[(0,o.wy)((0,o.Wm)(c,{class:"base-modal__field",list:t.getCities,"onUpdate:inputClear":r.clearInput,"onUpdate:inputTarget":r.targetValue},null,8,["list","onUpdate:inputClear","onUpdate:inputTarget"]),[[d,r.handlerInput,"500"]]),(0,o.Wm)(i,{class:"base-modal__btn",disabled:r.isDisabledBtn,onClick:r.accept},{default:(0,o.w5)((()=>[I])),_:1},8,["disabled","onClick"])])])),_:1})}var T=a(8239),D={name:"ModalLocale",directives:{debounce:(0,T.getDirective)(3)},data:()=>({searchValue:{},handler:()=>({})}),computed:{...(0,h.Se)({options:"modal/getOptions",getCities:"catalog/getCities"}),isDisabledBtn(){return!Object.keys(this.searchValue).length}},methods:{...(0,h.nv)({fetchCities:"catalog/fetchCities",clearCities:"catalog/clearCities"}),handlerInput(t){t.length>=3&&this.fetchCities({term:t})},clearInput(){this.searchValue={},this.clearCities()},targetValue(t){this.searchValue=t,this.fetchCities({term:t.city})},accept(){this.options.handler(this.searchValue)}}};const O=(0,y.Z)(D,[["render",k],["__scopeId","data-v-40bc7798"]]);var L=O,E={name:"BaseModalContainer",components:{locale:L},data:()=>({modals:_}),computed:{...(0,h.Se)({isShow:"modal/getIsShow",currentModalKey:"modal/getCurrentModalKey"})},methods:{...(0,h.nv)({modalHide:"modal/modalHide"}),backgroundClick(){this.modalHide()}}};const P=(0,y.Z)(E,[["render",w],["__scopeId","data-v-2ceb71a0"]]);var $=P,M={name:"DefaultLayout",components:{"main-header":b,"base-modal-container":$},methods:{...(0,h.nv)({fetchCategories:"catalog/fetchCategories"})},mounted(){let t=localStorage.getItem("locale");t&&(t=JSON.parse(t));const e=t?.id||1;this.fetchCategories({cityId:e})}};const j=(0,y.Z)(M,[["render",r],["__scopeId","data-v-97981d44"]]);var x=j;const H=t=>((0,o.dD)("data-v-6188bc6f"),t=t(),(0,o.Cn)(),t),W={key:0,class:"loader"},V=H((()=>(0,o._)("div",{class:"loader__ring"},null,-1))),Z=[V];function K(t,e,a,s,n,r){return(0,o.wg)(),(0,o.j4)(C.uT,{name:"fade"},{default:(0,o.w5)((()=>[t.isLoading?((0,o.wg)(),(0,o.iD)("div",W,Z)):(0,o.kq)("",!0)])),_:1})}var N={name:"loader-screen",computed:{...(0,h.Se)({isLoading:"loader/getIsLoading"})}};const U=(0,y.Z)(N,[["render",K],["__scopeId","data-v-6188bc6f"]]);var B=U,z={name:"App",components:{"default-layout":x,"loader-screen":B}};const R=(0,y.Z)(z,[["render",s]]);var A=R,Y=a(2482),q=a(6265),G=a.n(q);class J{constructor(t){(0,Y.Z)(this,"apiClient",void 0),t&&(this.apiClient=G().create({baseURL:t,headers:{"Content-type":"application/json"}}))}get(t){return this.apiClient.get(t)}}var F=J;class Q extends F{constructor(){super("https://nlstar.com/ru/api/catalog3/v1/")}async getCategories(t){const e=await this.get(`menutags?city_id=${t}`);return e.data.tags}async getCities(t){const e=await this.get(`city?term=${t}&country=ru`);return e.data.data}async getProducts(t){const{slug:e,cityId:a}=t,o=await this.get(`menutags/${e}?city_id=${a}`);return o.data.products}}var X=new Q;const tt={async fetchCategories({commit:t,dispatch:e},a){const{cityId:o}=a;try{e("loader/setLoading",!0,{root:!0});const a=await X.getCategories(o);t("SET_CATEGORIES",a),t("SET_CITY_ID",o)}catch(s){console.log("fetchCategories",s)}finally{e("loader/setLoading",!1,{root:!0})}},async fetchCities({commit:t},e){const{term:a}=e;try{const e=await X.getCities(a);t("SET_CITIES",e.splice(0,5))}catch(o){console.log("fetchCities",o)}},async fetchProducts({commit:t,dispatch:e},a){try{e("loader/setLoading",!0,{root:!0});const o=await X.getProducts(a);t("SET_PRODUCTS",o)}catch(o){console.log("fetchCities",o)}finally{e("loader/setLoading",!1,{root:!0})}},clearCities({commit:t}){t("SET_CITIES",[])}};var et=tt;const at={getCategories:t=>t.categories,getCityId:t=>t.cityId,getCities:t=>t.cities,getCategory:t=>e=>t.categories.find((t=>t.slug===e))||{},getProducts:t=>t.products,getSortingProducts:t=>e=>{if(!e)return t.products;const a=t.products.filter((t=>{for(const a of t.tags)if(a.slug===e)return!0}))||[];return a}};var ot=at;const st={SET_CATEGORIES(t,e){t.categories=e},SET_CITY_ID(t,e){t.cityId=e},SET_CITIES(t,e){t.cities=e},SET_PRODUCTS(t,e){t.products=e}};var nt=st;const rt=()=>({categories:[],cityId:null,cities:[],products:[]});var ct=rt;const it={state:ct,mutations:nt,actions:et,getters:ot,namespaced:!0};var lt=it;const dt={setLoading({commit:t},e){t("SET_IS_LOADING",e)}};var ut=dt;const gt={getIsLoading:t=>t.isLoading};var pt=gt;const mt={SET_IS_LOADING:(t,e)=>t.isLoading=e};var _t=mt;const ht=()=>({isLoading:!1});var ft=ht;const yt={state:ft,mutations:_t,actions:ut,getters:pt,namespaced:!0};var vt=yt;const bt={modalShow({commit:t},e){t("SET_IS_SHOW",!0),e.key&&t("SET_CURRENT_MODAL_KEY",e.key),t("SET_OPTIONS",e)},modalHide({commit:t}){t("SET_IS_SHOW",!1),t("SET_CURRENT_MODAL_KEY",""),t("SET_OPTIONS",{})}};var Ct=bt;const wt={getIsShow:t=>t.isShow,getCurrentModalKey:t=>t.currentModalKey,getOptions:t=>t.options};var St=wt;const It={SET_IS_SHOW:(t,e)=>t.isShow=e,SET_CURRENT_MODAL_KEY:(t,e)=>t.currentModalKey=e,SET_OPTIONS:(t,e)=>t.options=e};var kt=It;const Tt=()=>({isShow:!1,currentModalKey:"",options:{key:""}});var Dt=Tt;const Ot={state:Dt,mutations:kt,actions:Ct,getters:St,namespaced:!0};var Lt=Ot;const Et=(0,h.MT)({modules:{catalog:lt,loader:vt,modal:Lt}});var Pt=Et,$t=a(678);const Mt=t=>((0,o.dD)("data-v-30f683d4"),t=t(),(0,o.Cn)(),t),jt={class:"categories container"},xt=Mt((()=>(0,o._)("h2",{class:"categories__title title"},"Категории товаров",-1))),Ht={class:"categories__list"};function Wt(t,e,a,s,n,r){const c=(0,o.up)("CategoryCard");return(0,o.wg)(),(0,o.iD)("div",jt,[xt,(0,o._)("div",Ht,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.getCategories,(t=>((0,o.wg)(),(0,o.j4)(c,{key:`category-${t.id}`,category:t,class:"categories__card"},null,8,["category"])))),128))])])}const Vt={class:"card__name"},Zt=["src","alt"];function Kt(t,e,a,s,n,r){return(0,o.wg)(),(0,o.iD)("button",{type:"button",class:"card",style:(0,c.j5)(r.variableStyle),onClick:e[0]||(e[0]=(...t)=>r.relocateToSlug&&r.relocateToSlug(...t))},[(0,o._)("span",Vt,(0,c.zw)(a.category.name),1),(0,o._)("img",{class:"card__img",src:a.category.image,alt:a.category.name},null,8,Zt)],4)}var Nt={name:"CategoryCard",props:{category:{type:Object,defaullt:()=>({})}},computed:{variableStyle(){return[{"--color-text":this.category.text_color}]}},methods:{...(0,h.nv)({fetchProducts:"catalog/fetchProducts"}),async relocateToSlug(){let t=localStorage.getItem("locale");t&&(t=JSON.parse(t));const e=t?.id||1,a=this.category.slug;await this.fetchProducts({cityId:e,slug:a}),this.$router.push(`/category/${this.category.slug}`)}}};const Ut=(0,y.Z)(Nt,[["render",Kt],["__scopeId","data-v-40c138be"]]);var Bt=Ut,zt={name:"page-category",components:{CategoryCard:Bt},computed:{...(0,h.Se)({getCategories:"catalog/getCategories"})}};const Rt=(0,y.Z)(zt,[["render",Wt],["__scopeId","data-v-30f683d4"]]);var At=Rt,Yt=a(9023);const qt=t=>((0,o.dD)("data-v-411de845"),t=t(),(0,o.Cn)(),t),Gt={class:"slug container"},Jt={key:0,class:"slug__head"},Ft=qt((()=>(0,o._)("img",{class:"slug__back-img",src:Yt,alt:"back"},null,-1))),Qt={class:"slug__title title"},Xt={class:"slug__container"};function te(t,e,a,s,n,r){const i=(0,o.up)("base-btn"),l=(0,o.up)("SideBar"),d=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",Gt,[r.categoryItem.name?((0,o.wg)(),(0,o.iD)("div",Jt,[(0,o.Wm)(i,{mode:"black",class:"slug__back",onClick:r.back},{default:(0,o.w5)((()=>[Ft])),_:1},8,["onClick"]),(0,o._)("h2",Qt,(0,c.zw)(r.categoryItem.name),1)])):(0,o.kq)("",!0),(0,o._)("div",Xt,[(0,o.Wm)(l,{class:"slug__sidebar",list:r.categoryItem.children},null,8,["list"]),(0,o.Wm)(d)])])}const ee={key:0,class:"sidebar"},ae={class:"sidebar__list"};function oe(t,e,a,s,n,r){const i=(0,o.up)("base-btn");return r.currentList.length?((0,o.wg)(),(0,o.iD)("div",ee,[(0,o._)("ul",ae,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.currentList,(t=>((0,o.wg)(),(0,o.iD)("li",{key:`slug-${t.id}`,class:"sidebar__item"},[(0,o.Wm)(i,{class:"sidebar__link",mode:"link",routerLink:r.routerLink(t),onClick:e=>r.changeSlug(t)},{default:(0,o.w5)((()=>[(0,o.Uk)((0,c.zw)(t.name),1)])),_:2},1032,["routerLink","onClick"])])))),128))])])):(0,o.kq)("",!0)}var se={name:"SideBar",props:{list:{type:Array,default:()=>[]}},computed:{...(0,h.Se)({getSortingProducts:"catalog/getSortingProducts"}),currentList(){const t={id:0,name:"Все продукты",slug:""};return this.list?.length>=2?[t,...this.list]:this.list}},methods:{routerLink(t){return`/category/${this.$route.params.slug}/${t.slug}`},changeSlug(t){this.getSortingProducts(t?.slug)}}};const ne=(0,y.Z)(se,[["render",oe],["__scopeId","data-v-d9ee13e0"]]);var re=ne,ce={name:"page-slug",components:{SideBar:re},watch:{getCityId:{immediate:!0,async handler(t){if(t){const e=this.$route.params.slug;this.getCategories?.length||await this.fetchCategories({cityId:t}),await this.fetchProducts({cityId:t,slug:e})}}}},computed:{...(0,h.Se)({getCityId:"catalog/getCityId",getCategories:"catalog/getCategories",getCategory:"catalog/getCategory"}),categoryItem(){const{slug:t}=this.$route.params;return this.getCategory(t)}},methods:{...(0,h.nv)({fetchCategories:"catalog/fetchCategories",fetchProducts:"catalog/fetchProducts"}),back(){this.$router.push("/category")}}};const ie=(0,y.Z)(ce,[["render",te],["__scopeId","data-v-411de845"]]);var le=ie;const de={class:"products"};function ue(t,e,a,s,n,r){const c=(0,o.up)("ProductCard");return(0,o.wg)(),(0,o.iD)("div",de,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.sortingProduct,(t=>((0,o.wg)(),(0,o.j4)(c,{key:`product-${t.id}`,product:t},null,8,["product"])))),128))])}const ge={class:"product"},pe={class:"product__picture"},me=["src","alt"],_e={class:"product__description"},he={class:"product__category-name"},fe={class:"product__name"},ye={class:"product__cost"},ve={class:"product__comment"},be={class:"product__price"};function Ce(t,e,a,s,n,r){const i=(0,o.up)("base-btn");return(0,o.wg)(),(0,o.iD)("div",ge,[(0,o._)("div",pe,[(0,o._)("img",{class:"product__img",src:a.product.images_thumb_300[0],alt:a.product.full_name},null,8,me)]),(0,o._)("div",_e,[(0,o._)("span",he,(0,c.zw)(a.product.category.name),1),(0,o._)("p",fe,(0,c.zw)(a.product.present_name),1),(0,o._)("div",ye,[(0,o._)("span",ve,(0,c.zw)(a.product.comment_name),1),(0,o._)("span",be,(0,c.zw)(a.product.price)+" ₽",1),(0,o.Wm)(i,{class:"product__btn",disabled:r.isDisabledBtn},{default:(0,o.w5)((()=>[(0,o.Uk)((0,c.zw)(r.nameProductCardBtn),1)])),_:1},8,["disabled"])])])])}var we={name:"ProductCard",props:{product:{type:Object,default:()=>({})}},computed:{isDisabledBtn(){return!this.product.allowed||!this.product.available},nameProductCardBtn(){return this.isDisabledBtn?"Нет в наличии":"В корзину"}}};const Se=(0,y.Z)(we,[["render",Ce],["__scopeId","data-v-cddfe61c"]]);var Ie=Se,ke={name:"page-products",components:{ProductCard:Ie},computed:{...(0,h.Se)({getSortingProducts:"catalog/getSortingProducts"}),sortingProduct(){const{subSlug:t}=this.$route.params;return this.getSortingProducts(t)}},methods:{}};const Te=(0,y.Z)(ke,[["render",ue],["__scopeId","data-v-66773372"]]);var De=Te;const Oe=[{path:"/",redirect:"/category"},{path:"/category",name:"category",component:At},{path:"/category/:slug",component:le,children:[{path:"/category/:slug/",component:De},{path:"/category/:slug/:subSlug",component:De}]}],Le=(0,$t.p7)({history:(0,$t.PO)(),routes:Oe});var Ee=Le;function Pe(t,e,a,s,n,r){return(0,o.wg)(),(0,o.j4)((0,o.LL)(r.btnElementName),{class:(0,c.C_)(["base-btn",r.btnClass]),to:a.routerLink||null,href:a.link||null,target:a.link?"_blank":null,disabled:a.disabled,onOnClick:r.handleClick,type:a.type},{default:(0,o.w5)((()=>[(0,o.WI)(t.$slots,"default",{},void 0,!0)])),_:3},8,["class","to","href","target","disabled","onOnClick","type"])}var $e={name:"base-btn",props:{mode:{type:String,default:"yellow"},link:{type:String,default:""},type:{type:String,default:"button"},routerLink:{type:String,default:""},disabled:{type:Boolean,default:!1}},computed:{btnElementName(){return""!==this.link?"a":""!==this.routerLink?"router-link":"button"},btnClass(){return[{"base-btn_yellow":"yellow"===this.mode},{"base-btn_black":"black"===this.mode},{"base-btn_link":"link"===this.mode}]}},methods:{handleClick(){this.$emit("click")}}};const Me=(0,y.Z)($e,[["render",Pe],["__scopeId","data-v-7bf10d0a"]]);var je=Me,xe=a(2591);const He=t=>((0,o.dD)("data-v-0d5afd11"),t=t(),(0,o.Cn)(),t),We={class:"base-modal__box"},Ve={class:"base-modal__header"},Ze={class:"base-modal__title"},Ke=He((()=>(0,o._)("img",{src:xe,alt:"close"},null,-1))),Ne=[Ke];function Ue(t,e,a,s,n,r){return(0,o.wg)(),(0,o.iD)("div",We,[(0,o._)("div",Ve,[(0,o._)("div",Ze,[(0,o._)("span",null,(0,c.zw)(t.options.title||"Default"),1)]),(0,o._)("button",{class:"base-modal__close",onClick:e[0]||(e[0]=(...e)=>t.hide&&t.hide(...e))},Ne)]),(0,o.WI)(t.$slots,"default",{},void 0,!0)])}var Be={name:"base-modal-box",computed:{...(0,h.Se)({options:"modal/getOptions"})},methods:{...(0,h.nv)({hide:"modal/modalHide"})}};const ze=(0,y.Z)(Be,[["render",Ue],["__scopeId","data-v-0d5afd11"]]);var Re=ze;const Ae=t=>((0,o.dD)("data-v-6dcc7793"),t=t(),(0,o.Cn)(),t),Ye=Ae((()=>(0,o._)("img",{class:"field__close",src:xe,alt:"close"},null,-1))),qe=[Ye],Ge={class:"field__list"},Je=["onMousedown"];function Fe(t,e,a,s,n,r){return(0,o.wg)(),(0,o.iD)("fieldset",{class:(0,c.C_)(["field",{field_active:a.list.length}])},[(0,o.wy)((0,o._)("input",{class:"field__input",type:"text",placeholder:"Например, Санкт-Петербург",autocomplete:"off","onUpdate:modelValue":e[0]||(e[0]=e=>t.inputValue=e),onInput:e[1]||(e[1]=(...t)=>r.handlerInput&&r.handlerInput(...t))},null,544),[[C.nr,t.inputValue]]),(0,o.wy)((0,o._)("button",{type:"button",onClick:e[2]||(e[2]=(...t)=>r.clearInput&&r.clearInput(...t))},qe,512),[[C.F8,t.inputValue.length]]),(0,o.wy)((0,o._)("ul",Ge,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.list,(t=>((0,o.wg)(),(0,o.iD)("li",{key:t.id,class:"field__item",onMousedown:e=>r.targetValue(t)},(0,c.zw)(t.label),41,Je)))),128))],512),[[C.F8,a.list.length]])],2)}var Qe={name:"base-field-search",emits:["update:input","update:input-clear","update:input-target"],props:{list:{type:Array,default:()=>[]}},data:()=>({inputValue:""}),methods:{handlerInput(t){this.$emit("update:input",t.target.value)},clearInput(){this.inputValue="",this.$emit("update:input-clear")},targetValue(t){this.inputValue=t.label,this.$emit("update:input-target",t)}}};const Xe=(0,y.Z)(Qe,[["render",Fe],["__scopeId","data-v-6dcc7793"]]);var ta=Xe;const ea=t=>{t.component("base-btn",je),t.component("base-modal-box",Re),t.component("base-field-search",ta)},aa=(0,C.ri)(A).use(Ee).use(Pt);ea(aa),aa.mount("#app")},9023:function(t,e,a){t.exports=a.p+"img/arrow-left.87da72d4.svg"},2591:function(t,e,a){t.exports=a.p+"img/close.4082e872.svg"},4066:function(t,e,a){t.exports=a.p+"img/locale.661ff5df.svg"}},e={};function a(o){var s=e[o];if(void 0!==s)return s.exports;var n=e[o]={exports:{}};return t[o].call(n.exports,n,n.exports,a),n.exports}a.m=t,function(){var t=[];a.O=function(e,o,s,n){if(!o){var r=1/0;for(d=0;d<t.length;d++){o=t[d][0],s=t[d][1],n=t[d][2];for(var c=!0,i=0;i<o.length;i++)(!1&n||r>=n)&&Object.keys(a.O).every((function(t){return a.O[t](o[i])}))?o.splice(i--,1):(c=!1,n<r&&(r=n));if(c){t.splice(d--,1);var l=s();void 0!==l&&(e=l)}}return e}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[o,s,n]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.p="/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,o){var s,n,r=o[0],c=o[1],i=o[2],l=0;if(r.some((function(e){return 0!==t[e]}))){for(s in c)a.o(c,s)&&(a.m[s]=c[s]);if(i)var d=i(a)}for(e&&e(o);l<r.length;l++)n=r[l],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(d)},o=self["webpackChunknl_catalog"]=self["webpackChunknl_catalog"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(3136)}));o=a.O(o)})();
//# sourceMappingURL=app.8b8d6f0e.js.map