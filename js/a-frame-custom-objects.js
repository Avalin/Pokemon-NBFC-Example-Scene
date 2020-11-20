/*
 * This component will be responsible for objects that the user can move around in the scene.
 * I.e by removing objects the player may have thrown out of the scene etc.
*  This is dedicated solely for hand-in 2.
 */

 //A general component for all custom objects in a scene
AFRAME.registerComponent('custom-object', {
	init: function (){	
		let customObjID = this.el.getAttribute('id');
		this.el = document.querySelector('#' + customObjID);

		/*
		* Note: I really tried to separate these into two functions: decrease and increase size, but it provided many scoping issues
		*/

		this.el.addEventListener('click', function () {
			let customObj = document.querySelector('#' + customObjID);
			customObj.removeAttribute('dynamic-body')
			customObj.setAttribute('dynamic-body', {mass: '0.08', linearDamping: '0.05', angularDamping: '0.3', shape: 'sphere', sphereRadius: '0.092'});
			customObj.setAttribute('animation__scale', { property: 'scale', to: '0.015 0.015 0.015', dur: '500', loop: false, easing: 'easeInCubic'});
		});

		
		this.el.addEventListener('collide', function () {
			let otherCollider = e.detail.body.el; // Other entity, which playerEl touched.
	
			if(otherCollider.classList.contains("pokemon"))
			{               
				let customObj = document.querySelector('#' + customObjID);
				customObj.setAttribute('dynamic-body', {mass: '0.08', linearDamping: '0.05', angularDamping: '0.3', shape: 'sphere', sphereRadius: '0.0675'});
				customObj.setAttribute('animation__scale', { property: 'scale', to: '0.01 0.01 0.01', dur: '2000', loop: false, easing: 'linear'}); 
			}
		});
	},

	tick: function () 
	{		
		let customObj = this.el;
		let position = new THREE.Vector3();
		let currentPos = customObj.object3D.getWorldPosition(position);
		
        //If an object, such as a pokéball falls out of the scene, it will despawn
		if(currentPos.y < -20)
		{
			//Garbage collecting?
			customObj.parentNode.removeChild(customObj);
		}
	}
});