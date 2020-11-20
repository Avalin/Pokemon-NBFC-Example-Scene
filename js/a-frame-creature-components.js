
AFRAME.registerComponent('talkable', {
    schema: {
        sb: { type: 'selector', default: '' },
        target: { type: 'string', default: '[camera]' },
        default_look_direction: { type: 'vec3', default:  {x: 0, y: 0, z: 0} },
    },
    init: function()
    {
        let creatureID =  this.el.parentNode.id;
        let creature =  this.el;
        let sb = this.data.sb;
        let target = this.data.target;
        let default_look_direction = this.data.default_look_direction;
        
        this.el.addEventListener('click', function(){
            if(target !== '')
            {
                console.log(sb);
                console.log(creatureID);
                creature.setAttribute('look-at', {src: target});

                setTimeout(function(){   
                    creature.setAttribute('look-at', {src: default_look_direction});
                }, 3000);
            }
        })
    }
}); 