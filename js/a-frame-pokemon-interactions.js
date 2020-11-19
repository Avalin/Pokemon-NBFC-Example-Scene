AFRAME.registerComponent('pokemon', {   
	init: function () {		
		this.el.addEventListener('click', function () {
            
		});
    },

    tick: function () {		
		this.el.addEventListener('collide', function (e) {
            console.log('Collided with body #' + e.detail.body.id);

            e.detail.target.el;  // Original entity (playerEl).
            e.detail.body.el;    // Other entity, which playerEl touched.
            e.detail.contact;    // Stats about the collision (CANNON.ContactEquation).
            e.detail.contact.ni; // Normal (direction) of the collision (CANNON.Vec3).
		});
	}
});