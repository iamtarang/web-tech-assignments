const video = document.getElementById('myVideo');

function togglePlayPause() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function changeSize(size) {
    switch(size) {
        case 'small':
            video.width = 320;
            video.height = 180;
            break;
        case 'normal':
            video.width = 640;
            video.height = 360;
            break;
        case 'large':
            video.width = 960;
            video.height = 540;
            break;
    }
}