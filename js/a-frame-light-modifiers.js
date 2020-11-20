/*
* Consider this component as for hand-in 1, last assignment: 
* "Setup handlers for animation and show basic coded animations on your models, lights etc.""
* May be used in hand-in 2 as well if I feel like it.
*/

    /*
    * TurnOff
    * TurnOn
    * ChangeColor
    */ 

AFRAME.registerComponent('light-modifier', {
    schema: {
        target_light: { type: 'selector', default: '' }, //To do
        change_color: { type: 'boolean', default: 'false' } //To do
    },
    init: function()
    {
		let lightObj =  this.data.target_light;
        this.el.addEventListener('click', function(){
            //To do
            let lightEl = lightObj.getAttribute('light');
            if(lightEl.intensity > 0)
            {
                lightObj.setAttribute('light', {color: '#ACC', intensity: 0});
            }
            else
            { 
                lightObj.setAttribute('light', {color: '#ACC', intensity: 1});
            }
        })
    }
}); 

