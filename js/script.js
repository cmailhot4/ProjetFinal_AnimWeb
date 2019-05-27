var premierClique = true;
$('.zoom').hover(function() {
    $(this).addClass('transition');
}, function() {
    $(this).removeClass('transition');
});
$( "#boutonChanger" ).click(function() {
    if(premierClique === true){
        $('#img1').attr("src", "img/binoit.jpg");
        $('#texte1').html("#24 William Benoit");
        $('#img2').attr("src", "img/drix.jpg");
        $('#texte2').html("#95 Le Drix");
        $('#img3').attr("src", "img/emile.jpg");
        $('#texte3').html("#7 Emile Laplante");
        $('#img4').attr("src", "img/smeg.jpg");
        $('#texte4').html("#6 Nathan Lessard");
        $('#img5').attr("src", "img/moi.jpg");
        $('#texte5').html("#4 Christophe Mailhot");
        $('#img6').attr("src", "img/soupe.jpg");
        $('#texte6').html("#34 Joel Therrien");
        $('#img7').attr("src", "img/victor.jpg");
        $('#texte7').html("#3 Victor Hamel");
        $('#img8').attr("src", "img/jim.jpg");
        $('#texte8').html("#99 Jean-Marc Ciocan");
        $('#img9').attr("src", "img/jp.jpg");
        $('#texte9').html("#90 J-P Bourassa");
        $('#img10').attr("src", "img/raff.jpg");
        $('#texte10').html("#93 Rafferty Haas");
        $('#img11').attr("src", "img/morgan.jpg");
        $('#texte11').html("#51 Morgan Graillat");
        $('#img12').attr("src", "img/rick.jpg");
        $('#texte12').html("#22 Frédérick Gagné");
        $('#boutonChanger').html("Voir l'offensive");
        $('#boutonChanger').css("background-color", "orange");
        premierClique = false;
    }
    else{
        $('#img1').attr("src", "img/mills.jpg");
        $('#texte1').html("#44 Antoine Millette");
        $('#img2').attr("src", "img/greg.jpg");
        $('#texte2').html("#60 Gregoire Noury");
        $('#img3').attr("src", "img/dabe.jpg");
        $('#texte3').html("#5 Armand Balla");
        $('#img4').attr("src", "img/forget.jpg");
        $('#texte4').html("#9 Mathieu Forget");
        $('#img5').attr("src", "img/chance.jpg");
        $('#texte5').html("54 Chance Noble");
        $('#img6').attr("src", "img/croteau.jpg");
        $('#texte6').html("#21 Samuel Croteau");
        $('#img7').attr("src", "img/bouffard.jpg");
        $('#texte7').html("#64 Willyam Bouffard");
        $('#img8').attr("src", "img/julie.jpg");
        $('#texte8').html("#14 Benjamin Vallerand");
        $('#img9').attr("src", "img/yo.jpg");
        $('#texte9').html("#17 Mathieu Langlois");
        $('#img10').attr("src", "img/binette.jpg");
        $('#texte10').html("#65 F-A Binette");
        $('#img11').attr("src", "img/mini.jpg");
        $('#texte11').html("#10 F-A Laurence");
        $('#img12').attr("src", "img/taco.jpg");
        $('#texte12').html("#80 Thomas Raymond");
        $('#boutonChanger').html("Voir la défensive");
        $('#boutonChanger').css("background-color", "rebeccapurple");
        premierClique = true;
    }
});

