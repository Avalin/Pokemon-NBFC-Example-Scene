AFRAME.registerComponent('pokemon', {   
	  init: function () {		
      let pokemon = this.el;

      this.el.addEventListener('click', function () 
      {
        let pokemonMesh = document.getElementById(pokemon.parentNode.id + "_mesh");      
        pokemonMesh.setAttribute('animation', {property: 'position', to: '0 1.2 0', dur: '500', easing: 'easeInExpo', loop: '2', dir: 'alternate', autoplay: 'true'});  
      });
      this.el.addEventListener('collide', this.catchPokemon)
    },

    tick: function () {		

    },

    catchPokemon: function (e) {		
      let pokemon = e.detail.target.el;  // Original entity.
      let otherCollider = e.detail.body.el; // Other entity, which playerEl touched.
      let pokemonMesh = document.getElementById(pokemon.parentNode.id + "_mesh");

      if(otherCollider.classList.contains("pokeball"))
      {      
        otherCollider.setAttribute('sound', {src: 'sounds/sfx/PokeballOpening.mp3', autoplay: 'true', loop: 'false'});          
        pokemonMesh.setAttribute('animation', {property: 'scale', to: '0 0 0', dur: '2500', easing: 'linear'});  
      }
    },
});