class Controles{
    constructor(){
      
      this.button1=createButton("")
        this.button2=createButton('')
        this.button3=createButton('')
    

    }

    hide(){
      this.button1.hide();
      this.button2.hide();
        this.button3.hide();
      }
      
      mostrar(){
        this.button1.show();
        this.button2.show();
        this.button3.show();

      }


display(){
  if(gameState===1){
  this.button1.position(20 , windowHeight/2+100);
  this.button1.style('background', '#44736C')
  this.button1.style('font-size', '60px');
  this.button1.style('color', 'white');
  this.button1.style('border-radius', '60px');
  this.button1.style('touch-action', 'none');
  this.button1.style('background-image', 'url(fotos/boton1.png)')
  this.button1.style('background-size', '100% 100%')
  this.button1.style('background-position', 'center')
  this.button1.style('background-repeat', 'no-repeat')
  this.button1.style('width', '70px')
  this.button1.style('height', '70px')
 
 this.button2.position(windowWidth , windowHeight/2-20);
 this.button2.style('background', '#44736C');
 this.button2.style('font-size', '60px');
 this.button2.style('color', 'white');
 this.button2.style('border-radius', '60px');
 this.button2.style('touch-action', 'none');
 this.button2.style('background-image', 'url(fotos/boton3.png)')
 this.button2.style('background-size', '100% 100%')
 this.button2.style('background-position', 'center')
 this.button2.style('background-repeat', 'no-repeat')
 this.button2.style('width', '70px')
 this.button2.style('height', '70px')
 

 this.button3.position(20 , windowHeight/2);
 this.button3.style('background', '#FBBB21');
 this.button3.style('font-size', '60px');
 this.button3.style('color', 'white');
 this.button3.style('border-radius', '60px');
 this.button3.style('touch-action', 'none');
 this.button3.style('background-image', 'url(fotos/boton2.png)')
 this.button3.style('background-size', '100% 100%')
 this.button3.style('background-position', 'center')
 this.button3.style('background-repeat', 'no-repeat')
 this.button3.style('width', '70px')
 this.button3.style('height', '70px')





  this.button1.touchStarted(()=>{
    if(spider.x>190){
    spider.x=spider.x-12
    }
else{
  spider.x=spider.x-0
}

return false;

  })



this.button2.touchStarted(()=>{

  if(spider.x>3500 && spider.x<4780){
    disparolaser=createSprite(spider.x, spider.y, 40, 10)
    disparolaser.addImage(laserultimo2Img)
    disparolaser.scale=0.1
    disparolaser.velocityX=+17
    disparolaser.lifetime=100
    disparolaserGroup.add(disparolaser)
   
      }


    if(spider.x>4800 && spider.x<6000){
    laserultimo=createSprite(spider.x, spider.y, 40, 10)
    laserultimo.addImage(laserultimo2Img)
    laserultimo.scale=0.1
    laserultimo.velocityX=+17
    laserultimo.lifetime=100
    laserultimoGroup.add(laserultimo)
    }

    if(spider.x>6025){
    laserultimo2=createSprite(spider.x, spider.y, 40, 10)
 laserultimo2.addImage(laserultimo2Img)
 laserultimo2.scale=0.1
    laserultimo2.velocityX=+17
    laserultimo2.lifetime=100
  laserultimo2Group.add(laserultimo2)
    }


return false;

})


this.button3.touchStarted(()=>{
  if(spider.velocityY>=-35 && spider.velocityY<=2){
    if(spider.y>300){
    spider.velocityY=spider.velocityY-31
    spider.maxSpeed=+15
    }

    else{
        spider.velocityY=spider.velocityY-0
        spider.maxSpeed=+15

    }
  
}

    return false;

})

}


}
}

