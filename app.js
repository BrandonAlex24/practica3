if (navigator.serviceWorker) {
	navigator.serviceWorker.register("/sw.js");
}
$(document).ready(function(){
    console.log("JQuery funcionando...");

    $('#linkPractica1').click(function(){
        console.log("Presiono link Practica1");
        location.href = "../Practica1/index.html";
    })

    $('#linkPractica2').click(function(){
        console.log("Presiono link Practica2");
        location.href = "../Practica2/index.html";
    })

    $('#linkPractica3').click(function(){
        console.log("../Practica3/index.html");
    })

    $('#btnPractica1').click(function(){
        console.log("Presiono link Practica1");
        location.href = "../Practica1/index.html";
    })
    $('#btnPractica2').click(function(){
        console.log("Presiono link Practica2");
        location.href = "../Practica2/index.html";
    })
    $('#btnPractica3').click(function(){
        console.log("Presiono link Practica3");
        location.href = "../Practica3/index.html";
    })

});