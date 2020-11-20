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
    init: function()
    {
		let lightObj = this.el;
        this.el.addEventListener('click', function(){
            //To do
            console.log("Let there be light?");
        })
    }
}); 

