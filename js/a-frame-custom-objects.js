/*
 * This component will be responsible for objects that the user can move around in the scene.
 * I.e by removing objects the player may have thrown out of the scene etc.
*  This is dedicated solely for hand-in 2.
 */

 //A general component for all custom objects in a scene
AFRAME.registerComponent('custom-object', {
	init: function (){	
		this.el.addEventListener('grab-start', this.increaseSize)
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
	},

	increaseSize: function() {	
		let customObj = this.el;
	}
});