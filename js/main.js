function emailScramble() {
    // Largely taken from https://github.com/mathiasbynens/rot.
    const rot = function rot(charRot, numRot, str) {
        const numbers = '0123456789';
        const lowercase = 'abcdefghijklmnopqrstuvwxyz';
        const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const regexNumber = /[0-9]/;
        const regexLowercase = /[a-z]/;
        const regexUppercase = /[A-Z]/;

        str = String(str);

        if (charRot < 0) {
            charRot += 26;
        }
        if (numRot < 0) {
            numRot += 10;
        }
        const length = str.length; // note: no need to account for astral symbols
        let index = -1;
        let result = '';
        let character;
        let currentPosition;
        let shiftedPosition;
        while (++index < length) {
            character = str.charAt(index);
            if (regexNumber.test(character)) {
                currentPosition = numbers.indexOf(character);
                shiftedPosition = (currentPosition + numRot) % 10;
                result += numbers.charAt(shiftedPosition);
            } else if (regexLowercase.test(character)) {
                currentPosition = lowercase.indexOf(character);
                shiftedPosition = (currentPosition + charRot) % 26;
                result += lowercase.charAt(shiftedPosition);
            } else if (regexUppercase.test(character)) {
                currentPosition = uppercase.indexOf(character);
                shiftedPosition = (currentPosition + charRot) % 26;
                result += uppercase.charAt(shiftedPosition);
            } else {
                result += character;
            }
        }
        return result;
    };

    const rot18 = function rot18(str) {
        return rot(13, 5, str);
    };

    return {
        rot: rot,
        encode: rot18,
        decode: rot18
    };
}

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
    if (!window.document.location.pathname.includes('weihnachtsgruss')) {
        loadImage('pictureImage', 'picture');
    }
    const link = document.getElementById('link');
    if (link !== null) {
        link.addEventListener('click', function () {
            link.href = emailScramble().decode(link.href);
        });
    }
});