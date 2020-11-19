AFRAME.registerComponent('pokemon', {   
	init: function () {		
		this.el.addEventListener('click', function () {
            console.log(this.el + " was clicked!");
	  	});
    },

    tick: function () {		
      this.el.addEventListener('collide', function (e) 
      {
          let pokemon = e.detail.target.el;  // Original entity.
          let collidedObj = e.detail.body.el; // Other entity, which playerEl touched.

          if(collidedObj.classList.contains("pokeball"))
          {      
              collidedObj.setAttribute('sound', {src: 'sounds/sfx/PokeballOpening.mp3', autoplay: 'true', loop: 'false'});          
              pokemon.setAttribute('animation', {property: 'scale', to: '0 0 0', dur: '3000', easing: 'linear'});  
              pokemon.components.material.material.color = "#000000"
          }
      });
	}
});