(function(w, d){
    w.addEventListener("load", function(){
        console.log("evento load disparado")
    })

    d.addEventListener("DOMContentLoaded", function(){
        console.log("evento domcontentloaded disparado")
    })


})(window, document)