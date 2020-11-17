

AFRAME.registerComponent('greeting' ,{
	schema: {
            message: {
                type: 'string',
                default: 'Hello World'
            },
            name: {
                type: 'string'
            }

    },

init: function(){
    ///alert('${this.data.message} ${this.data.name}');
    ///does not work for some reason ^^^^
    
    alert(this.data.message + "  " + this.data.name);
}
          
});