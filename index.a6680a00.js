var e=document.querySelector("#largeImg");document.querySelector("#thumbs").addEventListener("click",function(t){t.preventDefault();var r=t.target;if("IMG"!==r.tagName){if(!r.closest("li"))return;r=r.closest("li").querySelector("a img")}var c=r.closest("a").getAttribute("href");e.setAttribute("src",c)});
//# sourceMappingURL=index.a6680a00.js.map
