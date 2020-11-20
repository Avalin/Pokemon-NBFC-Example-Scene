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

AFRAME.registerComponent('light-color-change', {
    init: function()
    {
        this.el.addEventListener('click', function(){
            //To do
        })
    }
}); 

AFRAME.registerComponent('light-state-change', {
    init: function()
    {
        //If light.intensity = 0, set 1
        //If light.intensity = 1, set 0

        this.el.addEventListener('click', function(){

        })
    }
}); 

