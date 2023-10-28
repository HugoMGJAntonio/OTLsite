/*O document ready verifica se a página já carregou antes de executar o código*/
$(document).ready(function () {
    /* function myFunction() {
         var x = document.getElementById("myTopnav");
         if (x.className === "topnav") {
             x.className += " responsive";
         } else {
             x.className = "topnav";
         }
     }*/
    //Função que faz com que o botão do canto inferior direito suba para cima
    $('#topBtn').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });
    //Função que faz com que o botão do canto inferior direito apareca no ecrã com um fade in assim que o utilizador desca 40px do ecrã
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('#topBtn').fadeIn();
        } else {
            $('#topBtn').fadeOut();
        }
    });

    //Função que faz com que o da nav bar abra o menu com a lista dos links do site
    document.getElementById('nav-toggle').addEventListener('click', function () {
        let navMenu = document.getElementById('nav-menu-container');
        navMenu.style.display = navMenu.offsetParent === null ? 'block' : 'none';
    });
});

/*var counter = 1;
setInterval(function () {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 5000);
*/
// Função que revela a lightbox e adiciona o video do youtube em autoplay
function revealVideo(div, video_id) {
    var video = document.getElementById(video_id).src;
    document.getElementById(video_id).src = video + '&autoplay=1'; // Adiciona autoplay ao URL
    document.getElementById(div).style.display = 'block';
}

// Esconde o lightbox e remove o autoplay do youtube
function hideVideo(div, video_id) {
    var video = document.getElementById(video_id).src;
    var cleaned = video.replace('&autoplay=1', ''); // remove autoplay ao URL
    document.getElementById(video_id).src = cleaned;
    document.getElementById(div).style.display = 'none';
}
$(document).ready(function () {
    // Adiciona o scroll suave a todos os links de navegação
    $("a").on('click', function (event) {

        if (this.hash !== "") {
            // Prevenir o comportamento do clique padrão da ancora
            event.preventDefault();

            var hash = this.hash;

            // Uso do método do jQuery's animate() para adicionar scroll suave
            // O numero opcional (800) especifica o numero de milisegundos que demora a fazer o scrll para a área especifica
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                window.location.hash = hash;
            });
        } // Fim do if
    });
});
