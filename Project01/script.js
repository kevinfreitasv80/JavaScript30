window.addEventListener("keydown", (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode || e.which}"]`);

    if (audio) audio.play();
});