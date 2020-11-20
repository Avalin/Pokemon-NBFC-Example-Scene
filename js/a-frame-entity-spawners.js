/* 
* This is dedicated solely for hand-in 2.
*/

AFRAME.registerComponent('pokeball-spawner', {
    schema: {},
	init: function () {
		this.el.addEventListener('click', this.instantiatePokeball);
    },
    
    instantiatePokeball: function () {
        
        let pokeballsInSceneAmount = document.getElementsByClassName('pokeball').length + 1;
        let pokeballID = "pokeball-"+pokeballsInSceneAmount;
        let pokeballLimit = 6;

        if(pokeballsInSceneAmount <= pokeballLimit)
        {
            //Setup the spawn-point for the new pokeball to be in the basket in the scene
            let spawnPoint = document.querySelector('#pokeball_spawn_point');
            let scene = document.querySelector('a-scene');
            let position = new THREE.Vector3(0, 5, 0);
            let direction = new THREE.Vector3();
            let target = new THREE.Vector3();
            
            spawnPoint.object3D.getWorldPosition(position);
            target.add(position).add(direction);

            //Create the pokeball container, with collider and grabbable sphere
            let pokeballContainer = document.createElement('a-sphere');
            pokeballContainer.setAttribute('id', pokeballID);
            pokeballContainer.setAttribute('grabbable', '');
            pokeballContainer.setAttribute('pokeball', '');
            pokeballContainer.setAttribute('dynamic-body', {mass: '0.08', linearDamping: '0.05', angularDamping: '0.3', shape: 'sphere', sphereRadius: '0.06'});
            pokeballContainer.setAttribute('material', {color: '#FFFFFF', side: 'double'});
            pokeballContainer.setAttribute('sound', {src: 'sounds/sfx/Blob.ogg', autoplay: 'true', loop: 'false'});
            pokeballContainer.setAttribute('radius', 5);
            pokeballContainer.setAttribute('scale', '0.01 0.01 0.01');
            pokeballContainer.setAttribute('position', target);
            pokeballContainer.classList.add('interactable')
            pokeballContainer.classList.add('pokeball')
            
            //Creates the visible model
            let pokeballMesh = document.createElement('a-entity');
            pokeballContainer.appendChild(pokeballMesh);
            pokeballMesh.setAttribute('position', '0 -6 0');
            pokeballMesh.setAttribute('gltf-model', '3dmodels/Objects/Pokeball/pokeball.glb');
            pokeballMesh.setAttribute('scale', '600 600 600');
            scene.appendChild(pokeballContainer);
        }
    }
});

/* The idea behind this component is to reduce the lines of HTML for each pokemon initialized at start
 * And for the future if I want to release pokémon from pokeballs etc. */
AFRAME.registerComponent('pokemon-spawner', {
    schema: {
        init_position: { type: 'vec3', default: {x: 0, y: 0, z: 0} },
        init_rotation: { type: 'vec3', default: {x: 0, y: 0, z: 0} },
        pokemon_type:  { type: 'string', default: 'bulbasaur' },
        model_type:    { type: 'string', default: 'glb' }    
    },
	init: function () {  
        let schemaData = this.data;
        let pkmType = schemaData.pokemon_type;
        let pkmData = this.getPokemonData(pkmType);

        let scene = document.querySelector('a-scene');     
        let pokemonContainer = document.createElement('a-entity');
        pokemonContainer.setAttribute('id', pkmType);
        pokemonContainer.setAttribute('position',  schemaData.init_position);

        let pokemonCollider = document.createElement('a-box');
        pokemonCollider.setAttribute('id', pkmType+"_collider");
        pokemonCollider.setAttribute('visible', 'false');
        pokemonCollider.setAttribute('pokemon', '');
        pokemonCollider.setAttribute('static-body', '');
        pokemonCollider.setAttribute('scale', pkmData.colScale);
        pokemonCollider.setAttribute('position', pkmData.colPos);
        pokemonCollider.classList.add('interactable')
        if(pkmData.hasSound)
             pokemonCollider.setAttribute('sound', {src: 'sounds/sfx/'+ pkmType + '.mp3', on: 'click', autoplay:  'false'});

        let pokemonMesh = document.createElement('a-entity');   
        pokemonMesh.setAttribute('id', pkmType+"_mesh");
        pokemonMesh.setAttribute('scale', pkmData.meshScale);
        pokemonMesh.setAttribute('rotation', pkmData.meshRotate);
        pokemonMesh.setAttribute('shadow', { cast: 'true' });
        pokemonMesh.setAttribute('gltf-model', '3dmodels/Characters/' + pkmType + "/" + pkmType + "." + schemaData.model_type);
        if(pkmData.animationMixer !== undefined) 
            pokemonMesh.setAttribute('animation-mixer', {clip: pkmData.animationMixer, loop: "repeat"});
        this.setPokemonSpecificAnimations(pkmType, pokemonMesh);

        pokemonContainer.appendChild(pokemonCollider);
        pokemonContainer.appendChild(pokemonMesh);
        scene.appendChild(pokemonContainer);
    },	
    
    getPokemonData: function (pkmType) { 
        let dict = 
       [{pokemon: "charmander",  meshScale: '0.15 0.15 0.15', meshRotate: '0 -60 0',    colScale: '0.3 0.75 0.35', colPos: '0 0.425 0',         hasSound: "true",  animationMixer: "DwarfIdle"}, 
        {pokemon: "bulbasaur",   meshScale: '0.10 0.10 0.10', meshRotate: '0 0 0',      colScale: '0.4 0.5 0.8',   colPos: '0 0.3 0',           hasSound: "true"}, 
        {pokemon: "squirtle",    meshScale: '0.2 0.2 0.2',    meshRotate: '-90 180 50', colScale: '0.4 0.85 0.5',  colPos: '-0.16 0.4 0.15',    hasSound: "true"},
        {pokemon: "mew",         meshScale: '0.07 0.07 0.07', meshRotate: '-25 60 0',   colScale: '0.36 0.5 0.4',  colPos: '0 0.4 0',           hasSound: "true"},
        {pokemon: "ditto",       meshScale: '0.10 0.10 0.10', meshRotate: '0 -90 7',    colScale: '0.4 0.5 0.5',  colPos: '-0.002 0.175 0.025', hasSound: "false"}]
        for (entry of dict)
        {                                
            if (entry.pokemon === pkmType) 
            {
                return entry
            }
        }
    },    
    
    setPokemonSpecificAnimations: function(pkmType, pokemonMesh)
    {
        if(pkmType === "mew")
        {
            pokemonMesh.setAttribute('animation__rotation', { property: 'rotation', from: '-25 60 0',  to: '335 60 0', dur: '2000', delay: '2000', loop: true, easing: 'easeInSine'});
            pokemonMesh.setAttribute('animation__position', { property: 'position', from: '0 1.25 0',  to: '0 0 0', dur: '2000', dir: 'alternate', loop: true, easing: 'easeInSine'});
        }
        else if(pkmType === "ditto")
        {
            pokemonMesh.setAttribute('animation__scale', { property: 'scale', to: '0.15 0.08 0.12', dur: '2000', dir: 'alternate', loop: true, easing: 'easeInElastic'});
        }
    }
});