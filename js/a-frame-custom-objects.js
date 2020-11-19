/*
 * This component will be responsible for removing objects the player may have thrown out of the scene etc.
 */

AFRAME.registerComponent('custom-object', {
	tick: function () 
	{
		let customObj = this.el;
        //If object is below worldPos 10, delete it
		let currentPos = customObj.getAttribute('position');
		console.log("PINEAPPLE: " + currentPos);
	}
});