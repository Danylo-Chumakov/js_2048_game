parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var t,e=document.querySelector(".game-score"),r=document.querySelectorAll(".field-cell"),n=document.querySelector(".button"),o=document.querySelector(".message-win"),a=document.querySelector(".message-lose"),c=document.querySelector(".message-start"),s=4,i=4,d={up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight"};function f(){t=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];for(var e=0,n=0;n<s;n++)for(var o=0;o<i;o++){r[e].id="".concat(n).concat(o);var a=t[n][o];m(r[e],a),e++}v(),v(),document.addEventListener("keyup",h)}function u(){for(var e=0;e<s;e++)for(var r=0;r<i;r++)if(0===t[e][r])return!0;return!1}function l(){for(var e=[],r=0;r<s;r++)for(var n=0;n<i;n++)e.push(t[r][n]);return e}function v(){if(u())for(var e=!1;!e;){var r=Math.floor(Math.random()*s),n=Math.floor(Math.random()*i);if(0===t[r][n]){t[r][n]=Math.random()>.9?4:2;var o=document.getElementById("".concat(r).concat(n));o.innerText="".concat(t[r][n]),o.classList.add("field-cell--".concat(t[r][n])),e=!0}}}function m(t,e){t.innerText="",t.classList.value="",t.classList.add("field-cell"),e>0&&(t.innerText=e,t.classList.add("field-cell--".concat(e)))}n.addEventListener("click",function(){"Start"===n.textContent?(n.classList.remove("start"),n.classList.add("restart"),n.textContent="Restart"):(n.classList.remove("restart"),n.classList.add("start"),n.textContent="Start"),e.textContent="0",o.classList.add("hidden"),a.classList.add("hidden"),c.classList.add("hidden"),f()});var h=function(t){switch(t.code){case d.left:y(!0);break;case d.right:y(!1);break;case d.up:S(!0);break;case d.down:S(!1)}w(),x()};function L(t){return t.filter(function(t){return 0!==t})}function g(t){for(var r=L(t),n=0;n<r.length;n++)r[n]===r[n+1]&&(r[n]*=2,r[n+1]=0,e.textContent="".concat(+e.textContent+r[n]));for(r=L(r);r.length<i;)r.push(0);return r}function y(e){for(var r,n=l(),o=0;o<s;o++){var a=t[o];e?(a=g(a),t[o]=a,r=l()):(a.reverse(),(a=g(a)).reverse(),t[o]=a,r=l());for(var c=0;c<i;c++){m(document.getElementById("".concat(o).concat(c)),t[o][c])}}JSON.stringify(n)!==JSON.stringify(r)&&v()}function S(e){for(var r,n=l(),o=0;o<i;o++){var a=[t[0][o],t[1][o],t[2][o],t[3][o]];e?(a=g(a),r=l()):(a.reverse(),(a=g(a)).reverse(),r=l());for(var c=0;c<i;c++){t[c][o]=a[c],m(document.getElementById("".concat(c).concat(o)),t[c][o])}}JSON.stringify(n)!==JSON.stringify(r)&&v()}function w(){for(var e=0;e<s;e++)for(var r=0;r<i;r++){if(!t[e][r])return;if(3!==e&&t[e][r]===t[e+1][r])return;if(3!==r&&t[e][r]===t[e][r+1])return;if(3===r&&3===e&&t[e][r]===t[e-1][r])return;if(3===r&&3===e&&t[e][r]===t[e][r-1])return}a.classList.remove("hidden"),document.removeEventListener("keyup",h)}function x(){for(var e=0;e<s;e++)for(var r=0;r<i;r++)2048===t[e][r]&&o.classList.remove("hidden")}
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.52f123a1.js.map