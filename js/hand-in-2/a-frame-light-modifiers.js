/*
* This component is solely used in Hand-In 2.
* The effect can be seen on the light inside the house.
*/

AFRAME.registerComponent('light-modifier', {
    schema: {
        target_light: { type: 'selector', default: '' }
    },
    init: function()
    {
		let lightbulb =  this.el;
		let lightObj =  this.data.target_light;
        this.el.addEventListener('click', function(){
            //To do
            let lightEl = lightObj.getAttribute('light');
            if(lightEl.intensity > 0)
            {
                lightbulb.setAttribute('color', '#666');
                lightObj.setAttribute('light', {color: '#000', intensity: 0});
            }
            else
            { 
                lightbulb.setAttribute('color', '#FFF');
                lightObj.setAttribute('light', {color: '#FF9900', intensity: 1});
            }
        })
    }
}); 

