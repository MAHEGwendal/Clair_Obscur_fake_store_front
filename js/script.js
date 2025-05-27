document.addEventListener("DOMContentLoaded", () => {
    const editionSelect = document.getElementById("choixEdition");
    const editionImage = document.getElementById("editionImage");
    const editionPlatform = document.getElementById("choixPlat");
    const editionBTN = document.getElementById("btn_achat");

    const images = {
        0: "images/img_standard.jpg",
        1: "images/img_Deluxe.jpg",
        2: "images/img_collector.jpg"
    };

    const txt_btn_achat = {
        0: "Acheter en dématérialiser",
        1: "Acheter en physique",
        2: "Acheter en physique"
    }

    editionSelect.addEventListener("change", (e) => {
        const selectedValue = e.target.value;
        editionImage.src = images[selectedValue];
    });

    editionPlatform.addEventListener("change", (e) => {
        const selectedValue = e.target.value;
        editionBTN.textContent = txt_btn_achat[selectedValue];
    });

    const youtubeModal = document.getElementById('youtubeModal');
    const youtubeIframe = document.getElementById('youtubeIframe');

    youtubeModal.addEventListener('show.bs.modal', function (event) {
        const button = event.relatedTarget;
        const videoUrl = button.getAttribute('data-video');
        youtubeIframe.src = videoUrl;
    });

    youtubeModal.addEventListener('hidden.bs.modal', function () {
        youtubeIframe.src = '';
    });
    
    const playButton = document.getElementById("playButton");
    const poster = document.getElementById("posterContainer");
    const video = document.getElementById("videoIframe");

    playButton.addEventListener("click", function () {
        playButton.style.display = "none";
        poster.style.display = "none";
        video.style.display = "block";
    });
});