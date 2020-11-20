
AFRAME.registerComponent('talkable', {
    schema: {
        message: { type: 'string', default: 'Hello world' },
    },
    init: function()
    {
		let creature =  this.el;
		let msg =  this.data.message;
        this.el.addEventListener('click', function(){

        })
    }
}); 