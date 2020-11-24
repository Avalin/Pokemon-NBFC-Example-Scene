AFRAME.registerComponent('play-pause', {
    schema: {
        video: {type: 'selector', default: '#video'}
      },
    init: function () {
        var myVideo = this.data.video;
        var videoControls = document.querySelector('#videoControls');
        this.el.addEventListener('click', function () {
            if (myVideo.paused) {
                myVideo.play();
                videoControls.setAttribute('src', '#pause');
            } else {
                myVideo.pause();
                videoControls.setAttribute('src', '#play');
            }
        });
    }
});