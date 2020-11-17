window.onload = () => {
    document.getElementById('go').addEventListener('click', e => {
        const box = document.getElementById('box1');
        
        const value = document.getElementById('boxcolour').value;
        box1.setAttribute('material', {
            color: value
            
        
        });
    })
    

        
    document.getElementById('go2').addEventListener('click', e => {
        const box2 = document.getElementById('box2');
        const value = document.getElementById("boxcolour2").value;
        
    
        
       
        box2.setAttribute('material',{
           color: value
            
        });
        
    })
    
    
     document.getElementById('go3').addEventListener('click', e => {
        const box1 = document.getElementById('box1');
        const value = document.getElementById("boxheight").value;
        alert(value)
        box1.setAttribute('geometry',{
            primitive: 'sphere',
           radius: value
            

        });
        
    })

    document.getElementById('boxmove').addEventListener('change', e=> {
        const box2 = document.getElementById('box2');
        const value = document.getElementById('boxmove').value;
        box2.setAttribute('rotation', {
            x: 0,
            y: value,    
            z: 0    
        });
    });


    document.getElementById('boxmove2').addEventListener('change', e=> {
        const box2 = document.getElementById('box2');
        const value = document.getElementById('boxmove2').value;
        box2.setAttribute('rotation', {
            x: value,
            y: 0,    
            z: 0    
        });
    });

    document.getElementById('boxmove3').addEventListener('change', e=> {
        const box2 = document.getElementById('box2');
        const value = document.getElementById('boxmove2').value;
        box2.setAttribute('rotation', {
            x: 0,
            y: 0,    
            z: value   
        });
    });
};
