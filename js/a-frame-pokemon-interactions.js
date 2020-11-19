AFRAME.registerComponent('pokemon', {   
	  init: function () {		
		  this.el.addEventListener('click', function () {
        console.log(this.el + " was clicked!");
	  	});
    },

    tick: function () {		
      this.el.addEventListener('collide', this.catchPokemon)
    },

    catchPokemon: function (e) {		
      let pokemon = e.detail.target.el;  // Original entity.
      let collidedObj = e.detail.body.el; // Other entity, which playerEl touched.

      if(collidedObj.classList.contains("pokeball"))
      {      
        collidedObj.setAttribute('sound', {src: 'sounds/sfx/PokeballOpening.mp3', autoplay: 'true', loop: 'false'});          
        pokemon.setAttribute('animation', {property: 'scale', to: '0 0 0', dur: '2500', easing: 'linear'});  
      }
    }
});