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
            pokeballContainer.setAttribute('custom-object', '');
            pokeballContainer.setAttribute('dynamic-body', {mass: '0.08', linearDamping: '0.05', angularDamping: '0.3', shape: 'sphere', sphereRadius: '0.0675'});
            pokeballContainer.setAttribute('material', {color: '#FFFFFF', side: 'double'});
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