/*
    I know what you're thinking: Why is she not using JQuery for this?
    I guess I am getting used to this approach now
*/

/* 
* Not a used component, just putting it as is from the lecture here, in case I want to add something from it
*
AFRAME.registerComponent('entity-spawner', {
	init: function () {
		let camera = document.querySelector('#camera-rig');
		let scene = document.querySelector('a-scene');
		
		this.el.addEventListener('click', function () {
			let position = new THREE.Vector3();
			let direction = new THREE.Vector3();
			let target = new THREE.Vector3();
			
			camera.object3D.getWorldPosition(position);
            camera.object3D.getWorldDirection(direction);
            direction.multiplyScalar(2);
			target.add(position).add(direction);

			let sphere = document.createElement('a-sphere');
			sphere.setAttribute('material', {color: '#0077FF', side: 'double'});
			sphere.setAttribute('radius', 0.25);
			sphere.setAttribute('position', target);

			scene.appendChild(sphere);
		});
	}
});*/

AFRAME.registerComponent('pokeball-spawner', {
    schema: {},
	init: function () {
		this.el.addEventListener('click', this.instantiatePokeball);
    },
    
    instantiatePokeball: function () {
        let spawnPoint = document.querySelector('#pokeball_spawn_point');
        let scene = document.querySelector('a-scene');
        let position = new THREE.Vector3(0, 5, 0);
        let direction = new THREE.Vector3();
        let target = new THREE.Vector3();
        
        spawnPoint.object3D.getWorldPosition(position);
        target.add(position).add(direction);

        let pokeballContainer = document.createElement('a-sphere');
        pokeballContainer.setAttribute('id', 'PLEASELOVEME');
        pokeballContainer.setAttribute('grabbable');
        pokeballContainer.setAttribute('dynamic-body', {mass: '0.08', linearDamping: '0.05', angularDamping: '0.3', shape: 'sphere', sphereRadius: '0.125'});
        pokeballContainer.setAttribute('material', {color: '#FF00FF', side: 'double'});
        pokeballContainer.setAttribute('radius', 5);
        pokeballContainer.setAttribute('scale', '0.02 0.02 0.02');
        pokeballContainer.setAttribute('position', target);
         
        let pokeballMesh = document.createElement('a-entity');
        pokeballContainer.appendChild(pokeballMesh);
        pokeballMesh.setAttribute('position', '0 -6 0');
        pokeballMesh.setAttribute('gltf-model', '3dmodels/Objects/Pokeball/pokeball.glb');
        pokeballMesh.setAttribute('scale', '600 600 600');
        scene.appendChild(pokeballContainer);
    }
});