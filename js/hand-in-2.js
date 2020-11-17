AFRAME.registerComponent('test-component', {
    init: function()
    {
        this.el.addEventListener('click', function(){
            console.log("Hello Hand-In 2 World!");
        })
    }
}); 