/*
    I know what you're thinking: Why is she not using JQuery for this?
    I guess I am getting used to this approach now
*/

AFRAME.registerComponent('entity-spawner', {
	init: function () {
		var camera = document.querySelector('#head');
		var scene = document.querySelector('a-scene');
		
		this.el.addEventListener('click', function () {
			var position = new THREE.Vector3();
			var direction = new THREE.Vector3();
			var target = new THREE.Vector3();
			
			camera.object3D.getWorldPosition(position);
			camera.object3D.getWorldDirection(direction);
			direction.multiplyScalar(-2);
			target.add(position).add(direction);

			var sphere = document.createElement('a-sphere');
			sphere.setAttribute('material', {color: '#0077FF', side: 'double'});
			sphere.setAttribute('radius', 0.25);
			sphere.setAttribute('position', target);

			scene.appendChild(sphere);
		});
	}
});