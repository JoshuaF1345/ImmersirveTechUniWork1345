

AFRAME.registerComponent('dynamic-content-loader', {
    init: function() {
        this.freemapDownload()
        
        
    },
    
    freemapDownload: async function (){
       
        
            const reponse = await fetch("https://www.free-map.org.uk/course/imm/world.php");
            
            const dati = await reponse.json();
            
            let html = "";
            dati.forEach(dat => {
                
                
                
                // Create an entity with document.createElement()
                const entity = document.createElement('a-entity');
        
                // Add a geometry component to it (a box primitive)
                entity.setAttribute('geometry', {
                    primitive: 'box'
                });
        
                // Add a material component to it (red colour)
        
                // Set its position within the 3D world
                entity.setAttribute('position', {
                    x: dat.x,
                    y: dat.y, 
                    z: dat.z
                });

                entity.setAttribute('scale', {
                    x: 0.5,
                    y: 0.5,
                    z: 0.5
                        


                });
        
                entity.setAttribute('obj-model',{
                    obj: '#cafe',
                    mtl: '#cafe-material'


                });

                entity.setAttribute('text',{
                        value: "Cafe Test Text"


                });

                entity.setAttribute('look-at',{
                    entity: '[camera]'



                });
                // Append the entity to the scene (this.el.sceneEl)
               
                alert(dat.x)
                
                this.el.sceneEl.appendChild(entity);
            
            })
            
           
        }
            
            
})