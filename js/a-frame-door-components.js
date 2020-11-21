/*
* This is dedicated solely for hand-in 1.
*/ 

AFRAME.registerComponent('christmas-door', {
    init: function()
    {
        this.el.addEventListener('click', function(){
            let particles = document.querySelector('#particles');
            let jack = document.querySelector('#jack');
            let soundController = document.querySelector('#nbfc-forest');

            particles.setAttribute('visible', 'true');

            if(soundController.getAttribute('sound').src !== "sounds/music/NBFC/whats-this.mp3")
            {
                soundController.setAttribute('sound', {src: "sounds/music/NBFC/whats-this.mp3", volume: "0.20", loop: "false"}); 
                soundController.addEventListener("sound-ended", function() {
                    // play the second one     
                    soundController.removeAttribute('sound');
                    soundController.setAttribute('sound', {src: "sounds/music/NBFC/this-is-halloween-lofi.mp3", volume: "0.05", loop: "true"}); 
                    jack.removeAttribute('gltf-model');
                    jack.setAttribute('gltf-model', '3dmodels/NBFC/characters/JackSkellington/jack_skellington.glb');
                })
                
                jack.removeAttribute('gltf-model');
                jack.setAttribute('gltf-model', '3dmodels/NBFC/characters/JackSkellington/santa_jack_skellington.glb');
                jack.removeAttribute('animation-mixer');
                jack.setAttribute('animation-mixer', 'clip: Idle');
                jack.setAttribute('scale', '10 10 10');
    
                setTimeout(function () {
                    jack.removeAttribute('animation-mixer');
                    jack.setAttribute('animation-mixer', 'clip: Singing');
                }, 50000)
            }
        })
    }
}); 

AFRAME.registerComponent('easter-door', {
    init: function()
    {
        this.el.addEventListener('click', function(){
            let jack = document.querySelector('#jack');        
            particles.setAttribute('visible', 'false');
            let currentAnim = jack.getAttribute("animation-mixer").clip;

            jack.setAttribute('look-at', 'src: [camera]');
            jack.setAttribute('animation-mixer', 'clip: DiveRoll; loop: once;');

            jack.addEventListener('animation-finished', function(e) {
                jack.removeAttribute('animation-mixer');
                jack.setAttribute('animation-mixer', 'clip: '+currentAnim);
                jack.setAttribute('look-at', {src: "#look-at-point"}); 
            });
        })
    }
}); 

AFRAME.registerComponent('halloween-door', {
    init: function()
    {
        this.el.addEventListener('click', function(){

        })
    }
}); 