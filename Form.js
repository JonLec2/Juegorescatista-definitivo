class Form{
    constructor(){
        this.button=createButton('')
    
    }

    hide(){
        this.button.hide();
        
      }

      mostrar(){
          this.button.show();
          
      }

display(){
    
 
 this.button.position(width/2-175 , height/2-30);
 this.button.style('background', 'rgb(0, 155, 219)');
 this.button.style('font-size', '100px');
 this.button.style('color', 'white');
 this.button.style('border-radius', '90px');
 this.button.style('touch-action', 'none');
 this.button.style('background-image', 'url(fotos/play.png)')
 this.button.style('background-size', '100% 100%')
 this.button.style('background-position', 'center')
 this.button.style('background-repeat', 'no-repeat')
 this.button.style('width', '360px')
 this.button.style('height', '102px')

this.button.mousePressed(()=>{
   this.button.hide();
    playerCount+=1;
    console.log(playerCount)
    

})

}
}

