window.addEventListener('DOMContentLoaded', function() {
    adjustContentPadding();
    window.addEventListener('resize', adjustContentPadding);
});

function adjustContentPadding() {
    var headerHeight = document.querySelector('.headerContent').offsetHeight;
    var content = document.getElementById('main-content');
    var windowHeight = window.innerHeight;
    var newPaddingTop = headerHeight + 20; // Agregar un margen adicional de 20px

    // Ajustar el relleno superior del contenido
    content.style.paddingTop = newPaddingTop + 'px';
}


// Audios página princial
function playAudioAndNavigate(audioSrc, destination) {
    var audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = audioSrc;
    audioPlayer.play();

    // Espera hasta que el audio se haya reproducido completamente antes de abrir el enlace
    audioPlayer.addEventListener('ended', function() {
        window.location.href = destination;
    });
}

//auios para items

function playAudio(audioSrc) {
    var audio = new Audio(audioSrc);
    audio.play();
}

function pauseAudio() {
    var audio = document.getElementById("audioPlayer");
    if (!audio.paused) {
        audio.pause();
    }
}




