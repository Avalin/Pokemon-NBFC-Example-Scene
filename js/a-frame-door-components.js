/*
* This is dedicated solely for hand-in 1.
*/ 

AFRAME.registerComponent('christmas-door', {
    init: function()
    {
        this.el.addEventListener('click', function(){
            let particles = document.querySelector('#particles');
            let jack = document.querySelector('#jack');

            
            particles.setAttribute('visible', 'true');
            jack.removeAttribute('gltf-model');
            jack.setAttribute('gltf-model', '3dmodels/NBFC/JackSkellingtonSanta/santa_jack_skellington.glb');
            jack.setAttribute('scale', '10 10 10');
        })
    }
}); 