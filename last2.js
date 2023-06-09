(function(window){
    let MarieGreeter={};
    MarieGreeter.name="Marie";
    let greeting="Hello, ";
    MarieGreeter.sayHello=function(){
        document.write(greeting+" "+MarieGreeter.name);
    }
    window.MarieGreeter=MarieGreeter;
})(window);