/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";(e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})({}),function(){const e=new Image;e.onload=function(){const t=document.createElement("canvas"),n=t.getContext("2d");t.width=e.width,t.height=e.height,n.drawImage(e,0,0);const o=n.getImageData(0,0,t.width,t.height);callback(o)},e.src="image.jpg"}()})();