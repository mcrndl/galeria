
var button = document.querySelector(".button");
    TweenLite.set(button, {top:"0",opacity:0});
    TweenLite.to(button,1,{top:"0",opacity:1,delay:7.5,ease:Back.easeOut});   
var piece = document.querySelector(".piece");
    TweenLite.set(piece,{top: "-50", opacity: 0});
    TweenLite.to(piece, 0.5,{top: "0", opacity: 1, ease:Bounce.easeOut,delay: 1})
var text1 = document.querySelector(".text1");
    TweenLite.set(text1,{left: "-50",opacity: 0 });
    TweenLite.to(text1,0.5,{left: "0", opacity:1,delay: 2})
    TweenLite.to(text1,0.4,{opacity: 0,delay:3.5});
var text2 = document.querySelector(".text2");
    TweenLite.set(text2,{left: "-50",opacity: 0});
    TweenLite.to(text2,0.5,{left: "0", opacity:1,delay: 3.5})
    TweenLite.to(text2,0.4,{opacity: "0",delay: 4.5});
var text3 = document.querySelector(".text3");
    TweenLite.set(text3,{left: "-50",opacity: 0});
    TweenLite.to(text3,0.5,{left: "0", opacity:1,delay: 4.5})
    TweenLite.to(text3,0.4,{opacity: 0,delay: 5.5});
var text4 = document.querySelector(".text4");
    TweenLite.set(text4,{left: "-50",opacity: 0});
    TweenLite.to(text4,0.5,{left:"0", opacity:1,delay: 5.5})