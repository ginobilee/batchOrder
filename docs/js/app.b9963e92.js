(function(e){function t(t){for(var r,a,c=t[0],i=t[1],l=t[2],f=0,p=[];f<c.length;f++)a=c[f],o[a]&&p.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},s=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=i;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Brief",{attrs:{info:e.brief}}),n("StockTable",{attrs:{colors:e.colors,sizes:e.sizes,stocks:e.stocks,price:e.price},on:{successChange:e.handleChange}})],1)},s=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"brief"},[n("ul",e._l(e.info,function(t,r){return n("li",{key:r},[n("label",[e._v(e._s(r))]),e._v(": "),n("span",[e._v(e._s(t))])])}),0)])},c=[],i={name:"Brief",props:{info:Object}},l=i,u=(n("807a"),n("2877")),f=Object(u["a"])(l,a,c,!1,null,"2dabf3f3",null),p=f.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"stockTable"},[n("table",{attrs:{border:"1",cellspacing:"0",cellpadding:"0"}},[n("tbody",[n("tr",[n("td",[e._v(" 颜色/尺码：")]),e._l(e.sizes,function(t){return n("td",{key:t},[e._v(e._s(t))])}),n("td",[e._v("小记")])],2),e._l(e.colors,function(t,r){return n("tr",{key:t},[n("td",[e._v(e._s(t))]),e._l(e.stocks[r],function(t,o){return n("td",{key:r+"-"+o},[n("CustomInput",{key:r+"-"+o,attrs:{max:t.remain,colorIdx:r,sizeIdx:o},on:{overflow:e.hintOverflow,successChange:e.handleChange}})],1)}),n("td",[e._v(e._s(e.totalBySize[r]))])],2)}),n("tr",[n("td",{attrs:{colspan:"5"}},[e._v("\n          总件数:"+e._s(e.total)+"，总金额:￥"+e._s(e.total*e.price)+"元。\n          "),n("button",{attrs:{disabled:e.total<=0},on:{click:e.submit}},[e._v("提交订单")])])])],2)])])},h=[],v=(n("c5f6"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("input",{attrs:{type:"number",value:"",placeholder:e.max},on:{input:e.changeInput,change:e.checkComplete}})}),b=[],m=n("e814"),g=n.n(m);n("ac6a");function _(e,t,n){for(var r=[],o={},s={},a=0,c=t.length;a<c;a++){o[t[a]]=a;for(var i=[],l=0,u=n.length;l<u;l++)s[n[l]]=l,i.push({remain:0,choosed:0});r.push(i)}return e.forEach(function(e){var t=e.size,n=e.color,a=e.remain;r[o[n]][s[t]].remain=a}),r}function y(e,t,n){var r=[];return e.forEach(function(e,o){e.forEach(function(e,s){e.choosed&&r.push({color:t[o],size:n[s],count:e.choosed})})}),r}var k=function(e){return/^[0-9]*$/.test(e)},x={name:"CustomInput",model:{prop:"max",event:"change"},props:{max:Number,colorIdx:Number,sizeIdx:Number},methods:{changeInput:function(e){var t=e.target.value,n=e.data;k(n)||(e.target.value=t.slice(0,-1))},checkComplete:function(e){var t=g()(e.target.value)||0;t>this.max?this.$emit("overflow",this.max,e.target,this.colorIdx,this.sizeIdx):this.$emit("successChange",t,this.colorIdx,this.sizeIdx)}}},z=x,w=Object(u["a"])(z,v,b,!1,null,null,null),C=w.exports,O={name:"StockTable",components:{CustomInput:C},props:{price:Number,colors:Array,sizes:Array,stocks:Array},computed:{totalBySize:function(){return this.stocks.reduce(function(e,t){var n=t.reduce(function(e,t){return e+t.choosed},0);return e.concat([n])},[])},total:function(){return this.totalBySize.reduce(function(e,t){return e+t},0)}},methods:{hintOverflow:function(e,t,n,r){window.alert("超出库存数量".concat(e,"！")),t.value=e,this.$emit("successChange",e,n,r),t.focus()},handleChange:function(e,t,n){this.$emit("successChange",e,t,n)},submit:function(){y(this.stocks,this.colors,this.sizes)}}},j=O,I=Object(u["a"])(j,d,h,!1,null,null,null),S=I.exports,$=n("c98f"),E=$.title,T=$.brand,B=$.goodsno,P=$.price,M=$.availableColor,N=$.availableSize,A=$.stocks,J=_(A,M,N),q={name:"app",data:function(){return{price:P,brief:{title:E,price:"¥ ".concat(P,"元"),goodsno:B,brand:T},colors:M,sizes:N,stocks:J}},components:{StockTable:S,Brief:p},methods:{handleChange:function(e,t,n){this.stocks[t][n].choosed=e}}},D=q,F=(n("034f"),Object(u["a"])(D,o,s,!1,null,null,null)),G=F.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(G)}}).$mount("#app")},"64a9":function(e,t,n){},"807a":function(e,t,n){"use strict";var r=n("a3b0"),o=n.n(r);o.a},a3b0:function(e,t,n){},c98f:function(e){e.exports={brand:"海贝",goodsno:"test002",title:"美丽的连衣裙",price:100,availableColor:["yellow","blue","red"],availableSize:["m","l","s"],stocks:[{size:"m",color:"yellow",remain:22},{size:"s",color:"blue",remain:23},{size:"l",color:"red",remain:34}]}}});
//# sourceMappingURL=app.b9963e92.js.map