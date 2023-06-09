(function(window){
    let IvanGreeter={};
    IvanGreeter.name="Ivan";
    let greeting="Hello, ";
    IvanGreeter.sayHello=function(){
        document.write(greeting+" "+IvanGreeter.name);
    }
    window.IvanGreeter=IvanGreeter;
})(window);