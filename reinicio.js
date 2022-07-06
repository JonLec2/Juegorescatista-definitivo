class reinicio{
    constructor(){
      
        this.button4=createButton('')
    
    }

    
    hide(){
        this.button4.hide();
        }

    display(){
        
    this.button4.position(windowWidth-100, windowHeight-60);
    this.button4.style('background', '#A53737');
    this.button4.style('font-size', '30px');
    this.button4.style('color', 'white');
    this.button4.style('border-radius', '27px');
    this.button4.style('touch-action', 'none');
    this.button4.style('background-image', 'url(fotos/reinicio.png)')
    this.button4.style('background-size', '100% 100%')
    this.button4.style('background-position', 'center')
    this.button4.style('background-repeat', 'no-repeat')
    this.button4.style('width', '180px')
    this.button4.style('height', '51px')
   

    this.button4.mousePressed(()=>{
        restart2();
        
          })
       
        
    }
   
    

    }