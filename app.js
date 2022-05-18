if (navigator.serviceWorker) {
	navigator.serviceWorker.register("https://brandonalex24.github.io/practica3/sw.js");
}
$(document).ready(function(){
    console.log("JQuery funcionando...");

    $('#linkPractica1').click(function(){
        console.log("Presiono link Practica1");
        location.href = "https://brandonalex24.github.io/practica1/";
    })

    $('#linkPractica2').click(function(){
        console.log("Presiono link Practica2");
        location.href = "https://brandonalex24.github.io/practica2/";
    })

    $('#linkPractica3').click(function(){
        console.log("https://brandonalex24.github.io/practica3/");
    })

    $('#btnPractica1').click(function(){
        console.log("Presiono link Practica1");
        location.href = "https://brandonalex24.github.io/practica1/";
    })
    $('#btnPractica2').click(function(){
        console.log("Presiono link Practica2");
        location.href = "https://brandonalex24.github.io/practica2/";
    })
    $('#btnPractica3').click(function(){
        console.log("Presiono link Practica3");
        location.href = "https://brandonalex24.github.io/practica3/";
    })

});
