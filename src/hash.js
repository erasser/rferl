const TAGS = '#tags=';

function getColors() {
    return window.location.hash.split('=')[1].split(',');
}

function checkHash() {
    return window.location.hash.substring(0, 6) === TAGS;
}

export {getColors, checkHash}