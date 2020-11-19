/*  https://aframe.io/docs/1.0.0/components/oculus-touch-controls.html#events 
 *  ^ Link til flere interaction muligheder */
AFRAME.registerComponent('input-listen', {
    init:
        function () {
            //Declaration and initialization of flag 
            //which exprains grip button is pressed or not.
            //"this.el" refers right hand controller or left hand controller in this function
            this.el.grip = false;

            //Called when trigger is pressed 
            this.el.addEventListener('triggerdown', function (e) {

            });

            //Grip pressed
            this.el.addEventListener('gripdown', function (e) {
                //Setting grip flag as true.
                this.grip = true;
            });
            //Grip released
            this.el.addEventListener('gripup', function (e) {
                //Setting grip flag as false.
                this.grip = false;
            });

            //Raycaster intersected with something.
            this.el.addEventListener('raycaster-intersection', function (e) {
                //Store first selected object as selectedObj 
                this.selectedObj = e.detail.els[0];
            });
            //Raycaster intersection is finished.
            this.el.addEventListener('raycaster-intersection-cleared', function (e) {
                //Clear information of selectedObj
                this.selectedObj = null;
            });

            //A-button Pressed 
            this.el.addEventListener('abuttondown', function (e) {
                this.emit('teleportstart');
            });

            //A-button Released 
            this.el.addEventListener('abuttonup', function (e) {
                this.emit('teleportend');
            });

            //X-button Pressed 
            this.el.addEventListener('xbuttondown', function (e) {
                //Start pointing position to teleport  
                this.emit('teleportstart');
            });

            //X-button Released 
            this.el.addEventListener('xbuttonup', function (e) {
                //Jump to pointed position
                this.emit('teleportend');
            });

            //console.log(this);
        },

    //called every frame.
    tick: function () {

        if (!this.el.selectedObj) { return; }
        if (!this.el.grip) { return; }
      
        //Getting raycaster component which is attatched to right hand controller or left hand controller 
        //this.el means entity of right hand controller or left hand controller in this function.
        var ray = this.el.getAttribute("raycaster").direction;
        //setting tip of raycaster as 1.1m forward of controller.  
        var p = new THREE.Vector3(ray.x, ray.y, ray.z);
        p.normalize();
        p.multiplyScalar(1.2);
        //Convert local position into world coordinate.
        this.el.object3D.localToWorld(p);
        //Move selected object to follow the tip of raycaster.
        this.el.selectedObj.object3D.position.set(p.x, p.y, p.z);
  
        //Thumbstick moved. Doesnt register for some reason :( maybe because of overlapping preloaded scripts
        this.el.addEventListener('thumbstickmoved', function (e) {
                // TODO: Code to rotate #head
                var cam = document.getElementById("camera-rig");
                cam.object3D.rotation.set(
                    THREE.Math.degToRad(15),
                    THREE.Math.degToRad(30),
                    THREE.Math.degToRad(90)
                  );
                  cam.object3D.rotation.y += Math.PI;
        });
    }
});
