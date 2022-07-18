class construirobjetos{
constructor(){

}



//creación de spiderman
    makespiderman(){
    spider=createSprite(200, 400)
    spider.addAnimation("correr", spiderImg);
    spider.addAnimation("saltar", spidersalto)
    spider.addAnimation("quieto", spiderquieto)
    spider.scale=0.1
    spider.visible=false
    spider.debug=false
    spider.setCollider("rectangle", 0, 0, 500, 900)
    
    }
  
    //helicoptero
    makeairplane(){
      
     airplane=createSprite(spider.position.x, 240, 10, 10)
     airplane.addAnimation("volar", airplaneImg)
     airplane.scale=0.3
    airplane.visible=false
     }


   //piso
   makepiso(){
            //piso invisible
     invisibleground=createSprite(3400, 590, 8000, 50)
     invisibleground.visible=false; 
     
     //piso imagen
     for(var s=600; s<=6600; s=s+1200){
     creadordepiso(s, 580, 10, 10)

     }

     pisoGroup.setVisibleEach(false)
        }
     


     //columnas
       
     makecolumnas(){
         colum=createSprite(1800, 180, 1190, 70)
     colum.visible=false
     //imagen
     columna=createSprite(1790, 297)
     columna.addImage(columnaImg)
     columna.scale=0.46
     columna.visible=false
     
     colum2=createSprite(2980, 160, 1200, 70)
     colum2.visible=false
     //imagen
     columna2=createSprite(2987, 207, 1200, 70)
     columna2.addImage(columna2Img)
     columna2.scale=0.46
     
     }
     
     
     
     makelava(){
         //lava
     lava1=createSprite(534, 533, 10, 10)
     lava1.addImage(lavaImg)
     lava1.scale=0.2
     lavaGroup.add(lava1)
     
     
     lava2=createSprite(925, 533, 10, 10)
     lava2.addImage(lavaImg)
     lava2.scale=0.2
     lavaGroup.add(lava2)
     
     lava3=createSprite(1089, 533, 10, 10)
     lava3.addImage(lavaImg)
     lava3.scale=0.2
     lavaGroup.add(lava3)
     
     lavaGroup.setVisibleEach(false)
     
     }


    makebloques1(){
            //bloques de la primera montaña
    var  bl1=createSprite(400, 540, 10, 10)
    bl1.addImage(blockImg)
    bl1.scale=0.2
    blockGroup.add(bl1)
    
    
    for(var m=390; m<=540; m=m+50){
        almacendebloques.push(creadordebloques(600, m, 10, 10))
    
    }
    
    for(var m=490; m<=540; m=m+50){
    almacendebloques.push(creadordebloques(450, m, 10, 10))
    
    }
    
    
    for(var m=390; m<=540; m=m+50){
    almacendebloques.push(creadordebloques(850, m, 10, 10))

    }
    
    for(var m=440; m<=540; m=m+50){
        almacendebloques.push(creadordebloques(1000, m, 10, 10))
    }
    
    for(var m=490; m<=540; m=m+50){
    almacendebloques.push(creadordebloques(1180, m, 10,10))
    }
    
    
    blockGroup.setVisibleEach(false)
    
    }


    makepuas(){
        puas=createSprite(1233, 550, 10, 10)
        puas.addImage(puasImg)
        puas.scale=0.18
        puasGroup.add(puas)
        puasGroup.setVisibleEach(false)
     }


     
    makeagua(){
        
    agua=createSprite(728, 540, 10, 10)
    agua.addAnimation("mover", aguaAnima)
    agua.scale=0.178
    agua.visible=false
    }

    makelansarayos(){
        
    lansarayos=createSprite(2400, 520, 10, 10)
    lansarayos.addImage(lansarayosImg)
    lansarayos.scale=0.15
    
    }



    makebuttonalert(){
        
     boton1=createSprite(2420, 500, 10, 10)
     boton2=createSprite(3485, 210, 10, 10)
     
boton3=createSprite(4227, 195, 10, 10)

    }



    makelaseres2nivel(){
        //laseres del segundo nivel
for(var m=1410; m<=2410; m=m+300){
    var laser=createSprite(m, 340, 20, 20)
    laser.addImage(laserImg)
    laser.scale=0.2
    laser.velocityY=-13
    laserGroup.add(laser)
  }
  
  for(var u=1560; u<=2210; u=u+300){
    var laser2=createSprite(u, 450, 20, 20)
    laser2.addImage(laserImg)
    laser2.scale=0.2
    laser2.velocityY=+11
    laserGroup.add(laser2)
  }
  
  
  laserGroup.setVisibleEach(false)
  
    }

    makebloques2(){
        //bloques 2
for(var f=490; f<=540; f=f+50){
    var blg21=createSprite(2530, f , 10, 10)
    blg21.addImage(blockImg)
    blg21.scale=0.2
    blockGroup.add(blg21)
    }
    
  
    }

    makeparedes3(){
        //paredes del tercer nivel

for(var y=2600; y<=3500; y=y+140){
    var pared1=createSprite(y, 480, 13, 200)
    pared1.addImage(paredecImg)
    pared1.scale=0.3
   
  
   pared1.setCollider("rectangle", 0, 40, 90, 560)
    paredesGroup.add(pared1)
  }
    }

    makeparedivisora(){
        pareddivisora1=createSprite(4400, 340, 10, 500)
        pareddivisora1.addAnimation("pared", pareddivisora1Img1)
        pareddivisora1.scale=0.4
        pareddivisora1.addAnimation("pequeña", pareddivisora1Img2)

    }

    makeguardia(){
        //guardias del penultimo nivel

      guardia=createSprite(5900, 300, 20, 40)
      guardia.addImage(dronImg)
      guardia.scale=0.13
      guardiaGroup.add(guardia)
      guradia2=createSprite(5900, 100, 20, 40)
      guradia2.addImage(dronImg)
      guradia2.scale=0.13
      guradia2Group.add(guradia2)
      
      }

    makeultimasparedes(){
        
     ultimapared=createSprite(6000, 340, 10, 600)
     ultimapared.addImage(pareddivImg)
     ultimapared.scale=0.4
     
     
     paredivisora2=createSprite(4770, 340, 10, 500)
     paredivisora2.addImage(pareddivImg)
     paredivisora2.scale=0.4
     

    }

    makebloquesultimos(){
        

for(var u=440; u<=540; u=u+50){
   almacendebloques2.push(creadordebloques2(6200, u, 10, 10))
    }
    
    for(var g=390; g<=540; g=g+50){
    almacendebloques2.push(creadordebloques2(6400, g, 10, 10))
    }
    
    for(var k=490; k<=540; k=k+50){
  almacendebloques2.push(creadordebloques2(6600, k, 10, 10))
    }

    for(var v=6800; v<=7000; v=v+50){
        almacendebloques2.push(creadordebloques2(v, 540, 10, 10))
        }
        
   for(var c=6800; c<=7000; c=c+50){
    almacendebloques2.push(creadordebloques2(c, 490, 10, 10))
     }
     

    
    }


    makeobstaculosultimo(){
        lav1=createSprite(6300, 533, 10, 10)
lav1.addImage(lavaImg)
lav1.scale=0.2
lava2Group.add(lav1)

lav2=createSprite(6500, 533, 10, 10)
lav2.addImage(lavaImg)
lav2.scale=0.2
lava2Group.add(lav2)

agua3=createSprite(6700, 550, 10, 10)
agua3.addAnimation("mover", aguaAnima)
agua3.scale=0.130
    }


}





//funcion constantes de creador de objetos
function creadordebloques(x, y, w, h){
    var bloqueconstante

    bloqueconstante=createSprite(x, y, w, h)
    bloqueconstante.addImage(blockImg)
   bloqueconstante.scale=0.2
    blockGroup.add(bloqueconstante)
    
}

function creadordebloques2(x, y, w, h){
    var bloqueconstante2

    bloqueconstante2=createSprite(x, y, w, h)
    bloqueconstante2.addImage(blockImg)
    bloqueconstante2.scale=0.2
    block2Group.add(bloqueconstante2)
}



function creadordepiso(x, y, w, h){
var pisoconstante

pisoconstante=createSprite(x,y,w, h)
pisoconstante.addImage(piso1);
pisoconstante.scale=0.5
pisoGroup.add(pisoconstante)

}
