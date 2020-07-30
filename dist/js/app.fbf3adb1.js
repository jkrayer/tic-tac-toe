(function(t){function n(n){for(var r,c,u=n[0],o=n[1],s=n[2],f=0,p=[];f<u.length;f++)c=u[f],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);l&&l(n);while(p.length)p.shift()();return i.push.apply(i,s||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],r=!0,u=1;u<e.length;u++){var o=e[u];0!==a[o]&&(r=!1)}r&&(i.splice(n--,1),t=c(c.s=e[0]))}return t}var r={},a={app:0},i=[];function c(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=r,c.d=function(t,n,e){c.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,n){if(1&n&&(t=c(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)c.d(e,r,function(n){return t[n]}.bind(null,r));return e},c.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(n,"a",n),n},c.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},c.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],o=u.push.bind(u);u.push=n,u=u.slice();for(var s=0;s<u.length;s++)n(u[s]);var l=o;i.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"0814":function(t,n,e){},5573:function(t,n,e){"use strict";var r=e("b207"),a=e.n(r);a.a},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("h1",{staticClass:"title"},[t._v("Tic-Tac-Toe")]),e("board"),e("p",[t._v(t._s(t.turnInstruction))])],1)},i=[],c=e("5530"),u=e("2f62"),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"board"},[t._l(t.board,(function(n,r){return t._l(n,(function(n,a){return e("div",{key:[r,a].join(""),staticClass:"cell"},[e("btn",{attrs:{disabled:""!==n||t.winner,symbol:n},on:{click:function(n){return t.play([a,r])}}})],1)}))})),e("div",{staticClass:"strike",class:t.winningClass}),e("modal")],2)},s=[],l=(e("99af"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("button",t._g(t._b({staticClass:"button",class:t.symbol,attrs:{type:"button"}},"button",t.$attrs,!1),t.$listeners),[e("div"),e("div")])}),f=[],p=(e("caad"),{name:"Btn",props:{symbol:{type:String,default:"",valiator:function(t){return["","x","o"].includes(t)}}}}),d=p,b=(e("9961"),e("2877")),v=Object(b["a"])(d,l,f,!1,null,"5019f94d",null),y=v.exports,h=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{directives:[{name:"show",rawName:"v-show",value:null!==t.winner,expression:"winner !== null"}],staticClass:"overlay"},[e("div",{staticClass:"content"},[e("p",{staticClass:"main"},[t._v(" "+t._s(t.winMessage)+" ")]),e("p",[t._v("Wins: X "+t._s(t.wins[0])+" "),e("span",{staticClass:"super"},[t._v("|")]),t._v(" O "+t._s(t.wins[1]))]),e("button",{attrs:{type:"button"},on:{click:t.handleClick}},[t._v(" Play Again ")])])])},m=[],w={name:"Modal",computed:Object(c["a"])(Object(c["a"])({},Object(u["c"])(["winner","wins"])),{},{winMessage:function(){var t=this.winner;return t&&!0===t[0]?"".concat(t[1]," wins!"):"X and 0 tie!"}}),methods:{handleClick:function(){this.$store.dispatch("reset")}}},_=w,O=(e("fd13"),Object(b["a"])(_,h,m,!1,null,"425a2730",null)),j=O.exports,g={components:{Btn:y,Modal:j},computed:Object(c["a"])(Object(c["a"])({},Object(u["c"])(["board","winner"])),{},{winningClass:function(){var t=this.winner;return t?"".concat(t[2],"-").concat(t[3]):""}}),methods:{play:function(t){this.$store.dispatch("play",t)}}},P=g,x=(e("5573"),Object(b["a"])(P,o,s,!1,null,"84661828",null)),C=x.exports,k={name:"App",components:{Board:C},computed:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(u["b"])(["currentPlayer"])),Object(u["c"])(["turn"])),{},{turnInstruction:function(){return 0===this.turn?"X takes the first turn.":"".concat(this.currentPlayer,"'s Turn!")}})},S=k,T=(e("5c0b"),Object(b["a"])(S,a,i,!1,null,null,null)),$=T.exports,M=(e("a623"),e("d81d"),e("3835"));r["a"].use(u["a"]);var W=function(){return{board:[["","",""],["","",""],["","",""]],players:["X","O"],winner:null,turn:0,_currentPlayer:0}},E=new u["a"].Store({state:Object(c["a"])({wins:[0,0]},W()),getters:{currentPlayer:function(t){return t.players[t._currentPlayer]}},mutations:{setSquare:function(t,n){var e=Object(M["a"])(n,2),r=e[0],a=e[1];t.board=t.board.map((function(n,e){return n.map((function(n,i){return e===a&&i===r?t.players[t._currentPlayer]:n}))}))},nextPlayer:function(t){t._currentPlayer=0===t._currentPlayer?1:0},incrementTurn:function(t){t.turn=t.turn+1},setWinner:function(t,n){t.winner=n},tallyWin:function(t){t.wins=t.wins.map((function(n,e){return e===t._currentPlayer?n+1:n}))},reset:function(t){Object.assign(t,W())}},actions:{play:function(t,n){var e=t.commit,r=t.dispatch,a=t.state;e("setSquare",n),e("incrementTurn"),r("getWinner",n).then((function(t){return!1===t[0]?a.turn<9?e("nextPlayer"):e("setWinner",t):(e("tallyWin"),e("setWinner",t))}))},reset:function(t){var n=t.commit;n("reset")},getWinner:function(t,n){var e=t.getters,r=t.state,a=Object(M["a"])(n,2),i=a[0],c=a[1],u=r.board,o=e["currentPlayer"];if(u[c].every((function(t){return t===o})))return[!0,o,"row",c+1];if(u.every((function(t){return t[i]===o})))return[!0,o,"col",i+1];if(i===c){for(var s=!0,l=0;l<u.length;l++)if(s=u[l][l]===o,!1===s)break;if(!0===s)return[!0,o,"dia",1]}if(i+c===u.length-1){for(var f=!0,p=0,d=u.length-1;p<u.length;p++,d--)if(f=u[p][d]===o,!1===f)break;if(!0===f)return[!0,o,"dia",2]}return[!1,"","",""]}}});r["a"].config.productionTip=!1,new r["a"]({store:E,render:function(t){return t($)}}).$mount("#app")},"5c0b":function(t,n,e){"use strict";var r=e("9c0c"),a=e.n(r);a.a},9961:function(t,n,e){"use strict";var r=e("cca9"),a=e.n(r);a.a},"9c0c":function(t,n,e){},b207:function(t,n,e){},cca9:function(t,n,e){},fd13:function(t,n,e){"use strict";var r=e("0814"),a=e.n(r);a.a}});
//# sourceMappingURL=app.fbf3adb1.js.map