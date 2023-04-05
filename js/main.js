function loadImage(id, targetId) {
    const el = document.getElementById(id);
    const targetEl = targetId ? document.getElementById(targetId) : el;
    let imageToLoad;
    if (el.dataset.image) {
        imageToLoad = el.dataset.image;
    } else if (typeof el.currentSrc === 'undefined') {
        imageToLoad = el.src;
    } else {
        imageToLoad = el.currentSrc;
    }
    if (imageToLoad) {
        const img = new Image();
        img.src = imageToLoad;
        img.onload = function () {
            targetEl.classList.add('is-loaded');
        };
    }
}

const styles = [
    'color: green',
    'background: yellow',
    'font-size: 30px',
    'border: 1px solid red',
    'text-shadow: 2px 2px black',
    'padding: 10px',
].join(';');
console.log("%cWillkommen bei staatzstreich.de 💖", styles);

document.addEventListener('DOMContentLoaded', function() {
    loadImage('wallpaper');
    loadImage('pictureImage', 'picture');
});