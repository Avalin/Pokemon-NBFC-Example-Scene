/*
    I know what you're thinking: Why is she not using JQuery for this?
    I guess I am getting used to this approach now
*/

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
});

AFRAME.registerComponent('pokeball-spawner', {
	init: function () {
		let camera = document.querySelector('#camera-rig');
		let basket = document.querySelector('#pokeball_spawn_point');
		let scene = document.querySelector('a-scene');
		
		this.el.addEventListener('click', function () {
			let position = new THREE.Vector3(0, 5, 0);
			let direction = new THREE.Vector3();
			let target = new THREE.Vector3();
			
			basket.object3D.getWorldPosition(position);
			target.add(position).add(direction);

			let sphere = document.createElement('a-sphere');
			sphere.setAttribute('material', {color: '#0077FF', side: 'double'});
			sphere.setAttribute('radius', 0.25);
			sphere.setAttribute('position', target);

			scene.appendChild(sphere);
		});
	}
});