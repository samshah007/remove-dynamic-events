function ready(callbackFunc) {
    if (document.readyState !== 'loading') {
        // Document is already ready, call the callback directly
        callbackFunc();
    } else if (document.addEventListener) {
        // All modern browsers to register DOMContentLoaded
        document.addEventListener('DOMContentLoaded', callbackFunc);
    } else {
        // Old IE browsers
        document.attachEvent('onreadystatechange', function() {
        if (document.readyState === 'complete') {
            callbackFunc();
        }
        });
    }
}
function someEventHandler(event){
    console.log(event.target);
}
function addClickEvent(){
    var images = document.getElementsByClassName('image-element');
    Array.prototype.forEach.call(images, function(el, i){
        if(window.innerWidth > 830){
            el.addEventListener('click',someEventHandler);
            //el.onclick = function (){someEventHandler(el.src)};
        }else{
            el.removeEventListener('click',someEventHandler);
            //el.onclick = function(){return false};
        }
    });
}
ready(function(){
    addClickEvent();
    window.addEventListener("resize",addClickEvent);        
});