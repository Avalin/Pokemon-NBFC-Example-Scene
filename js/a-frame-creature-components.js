
AFRAME.registerComponent('talkable', {
    schema: {
        messenger: { type: 'string', default: 'Spyro' },
        target: { type: 'selector', default: '' },
    },
    init: function()
    {
        let creature =  this.el;
        
        this.el.addEventListener('click', function(){
            if(target !== '')
            {

            }
        })
    }
}); 