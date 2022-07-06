
var gameState=0
var playerCount=0
var vidas=4;
var dronesdestruidos=0;

var form
var controles
var game
var construir
var personaje;
var reinicio1;
var spiderImg, spidersalto, spiderquieto;
var spider;

var bg1, bg2, bg3;
var columna, columnaImg, colum;
var columna2, columna2Img, colum2;
var columna3Img;
var piso1;
var piso, piso2, piso3, piso4, piso5, piso6;
var invisibleground;
var blockImg;
var lava1, lava2, lava3, lavaImg;
var puas;
var agua, aguaAnima;
var piraña, pirañaImg;
var lansarayosImg, lansarayos;
var rayosAnimation, rayosAnimationImg;
var paredecImg;
var pinoImg, arbolImg, lamparaImg, arbustoImg, autoImg, lasarayos2, sigueImg, arbusto2Img;
var boton1, boton2, boton3;
var relampago1, relampago1Img;
var relampago2, relampago2Img;

var almacendebloques=[];
var almacendebloques2=[];
var blockGroup;
var pisoGroup;
var laserGroup;
var laser2Group;
var flechaGroup;
var relampagosGroup;
var rayo2Group;
var disparolaserGroup;
var dronesvoladoresGroup;
var paredesGroup;
var lavaGroup;
var pirañaGroup;
var misilopoGroup;
var laserultimoGroup;
var guardiaGroup;
var guradia2Group;
var puasGroup;
var block2Group;
var laserultimo2Group;
var lava2Group;
var puas2Group;
var lavavolGroup;
var piraña2Group;

var laserImg, laserImg2;
var ground;

var flech=[];
var Flsprite, FlImg;
var llama1, llama2;
var lImg1, lImg2, lImg3;
var block1=[]
var block2=[]
var block3=[]
var block4=[]
var block5=[]
var block6=[]
var flplayer=[]
var tr1, tr2, tr3;

var rayolaser2;
var dronesaleatorios;
var particula=[];
var anunciodrones, anunciodronesImg
var pareddivisora1, pareddivisora1Img1, pareddivisora1Img2;
var guardia, guradia2;
var dronImg;
var opmisil, opmisilImg;
var luz, luzImg;
var paredetener;

var puas1, puasImg

var anunciovida;
var font;
var vidaImg;
var v1, v2, v3, v4;
var vidabanner, vidabannerImg;




var lavavoladora1, lavavoladora2, lavavoladora3, lavavoladora4, lavavoladora5 ;
var lavavolImg

var vidan1=3;
var vidan2=3;
var disparolaser;
var laserultimo;
var laserultimo2, laserultimo2Img;
var ultimapared, paredivisora2,pareddivImg;
var puasultimas;
var bl1ulti, bl2ulti, bl3ulti, bl4ulti, bl5ulti;
var impacto, impactoImg;
var lav1, lav2, agua3;
var puastecho, puastechoImg;
var guaridaImg
var pareddetener;


var anunciotesoro, anunciotesoroImg;
var anuncioganaste, anuncioganasteImg;
var restart, restartImg;
var diamante, diamanteImg;
var paraña2;
var tronco;

var rayo1sonido, electricidad1sonido, rayo2sonido, explosion1, salpicadura1, perder1;
var ganarsound
var airplane;
var airplaneImg;
var capsula1, capsula2, capsula3;

function preload() {
laserImg=loadImage("fotos/laser.png")
laserImg2=loadImage("fotos/laser2.png")
airplaneImg=loadAnimation("fotos/helicoptero1.png", "fotos/helicoptero2.png", "fotos/helicoptero3.png")
bg1=loadImage("fotos/banner.png")
bg2=loadImage("fotos/back.png")
bg3=loadImage("fotos/back2.png")
spiderImg=loadAnimation("fotos/sp1.png", "fotos/sp2.png","fotos/sp4.png", "fotos/sp5.png" )
spidersalto=loadAnimation("fotos/sp3.png")
spiderquieto=loadAnimation("fotos/spiderman1.png")
piso1=loadImage("fotos/piso.png")
blockImg=loadImage("fotos/cubo.png")
columnaImg=loadImage("fotos/columna.png")
columna2Img=loadImage("fotos/columna2.png")
FlImg=loadImage("fotos/flechaelec.png")
lImg1=loadImage("fotos/57522.png")
lImg2=loadImage("fotos/5753.png")
puasImg=loadImage("fotos/puas.png")
font=loadFont('10204/Fortnite.ttf')
vidaImg=loadImage("fotos/pixilframe.png")
lavaImg=loadImage("fotos/lava2.png")
lavavolImg=loadImage("fotos/lavavol.png")
aguaAnima=loadAnimation("fotos/agua1.png", "fotos/agua2.png")
lansarayosImg=loadImage("fotos/lasarayos.png")
rayosAnimationImg=loadAnimation("fotos/rojo1.png", "fotos/rojo2.png")
paredecImg=loadImage("fotos/paredelectricidad.png")
pinoImg=loadImage("fotos/pino.png")
arbolImg=loadImage("fotos/arbol.png")
lamparaImg=loadImage("fotos/lampara.png")
arbustoImg=loadImage("fotos/arbusto.png")
autoImg=loadImage("fotos/auto.png")
lasarayos2=loadImage("fotos/lansarayos2.png")
dronImg=loadImage("fotos/dron.png")
sigueImg=loadImage("fotos/sigue2.png")
arbusto2Img=loadImage("fotos/arbusto2.png")
opmisilImg=loadImage("fotos/misil.png")
luzImg=loadImage("fotos/luz.png")
pareddivisora1Img1=loadAnimation("fotos/pared2.png")
pareddivisora1Img2=loadAnimation("fotos/pared3.png")
pareddivImg=loadImage("fotos/pared1.png")
laserultimo2Img=loadImage("fotos/laser3.png")
impactoImg=loadImage("fotos/impacto.png")
puastechoImg=loadImage("fotos/puastecho.png")
columna3Img=loadImage("fotos/columna3.png")
guaridaImg=loadImage("fotos/guarida.png")
pirañaImg=loadImage("fotos/pes.png")
anunciotesoroImg=loadImage("fotos/anunciotesoro.png")
fondofinImg=loadImage("fotos/fondofin.png")
restartImg=loadImage("fotos/restart.png")
diamanteImg=loadImage("fotos/diamante.png")
relampago1Img=loadImage("fotos/relampago1.png")
relampago2Img=loadImage("fotos/relampago2.png")
anunciodronesImg=loadImage("fotos/anunciodrones.png")
anuncioganasteImg=loadImage("fotos/anuncioganaste.png")
vidabannerImg=loadImage("fotos/Vidabanner.png")

rayo1sonido=loadSound("Sonidos/laser1.mp3")
electricidad1sonido=loadSound("Sonidos/electricidad1.mp3")
rayo2sonido=loadSound("Sonidos/laser2sonido.mp3")
explosion1=loadSound("Sonidos/explosion1.mp3")
salpicadura1=loadSound("Sonidos/salpicadura.mp3")
perder1=loadSound("Sonidos/perder1.mp3")
ganarsound=loadSound("Sonidos/ganar.mp3")

}


function setup() {
  createCanvas(windowWidth+100,windowHeight+40);

//creación de grupos
blockGroup=createGroup();
pisoGroup=createGroup();
laserGroup=createGroup();
laser2Group=createGroup();
flechaGroup=createGroup();
relampagosGroup=createGroup();
llamasGroup=createGroup();
paredesGroup=createGroup();
rayo2Group=createGroup();
disparolaserGroup=createGroup();
dronesvoladoresGroup=createGroup();
lavaGroup=createGroup();
pirañaGroup=createGroup();
misilopoGroup=createGroup();
laserultimoGroup=createGroup();
guardiaGroup=createGroup();
guradia2Group=createGroup();
puasGroup=createGroup();
block2Group=createGroup();
laserultimo2Group=createGroup();
lava2Group=createGroup();
puas2Group=createGroup();
lavavolGroup=createGroup();
piraña2Group=createGroup();



game=new Game
game.start();
controles=new Controles;
reinicio1=new reinicio;
construir=new construirobjetos;

diamante=createSprite(6900, 397)
diamante.addImage(diamanteImg)
diamante.scale=0.3

crearobjetos();

anunciotesoro=createSprite(300, 470, 10, 10)
anunciotesoro.addImage(anunciotesoroImg)
anunciotesoro.scale=0.5
anunciotesoro.visible=false

anuncioganaste=createSprite(300, 550, 10, 10)
anuncioganaste.addImage(anuncioganasteImg)
anuncioganaste.scale=0.5
anuncioganaste.visible=false


//vidas
vidabanner=createSprite(400, 200, 20, 20)
vidabanner.addImage(vidabannerImg)
vidabanner.scale=0.35
vidabanner.visible=false

v1=createSprite(400, 200, 20, 20)
v1.addImage(vidaImg)
v1.scale=0.27
v1.visible=false

v2=createSprite(400, 200, 20, 20)
v2.addImage(vidaImg)
v2.scale=0.27
v2.visible=false


v3=createSprite(400, 200, 20, 20)
v3.addImage(vidaImg)
v3.scale=0.27
v3.visible=false

v4=createSprite(400, 200, 20, 20)
v4.addImage(vidaImg)
v4.scale=0.27
v4.visible=false

}




function draw() {

//choque de laseres del primer nivel
laserGroup.bounceOff(colum)
laserGroup.bounceOff(invisibleground)



//funcón para pasar del estado 0 a 1
  if(playerCount===1){
    gameState=1
  }
  
  //juego

  if(gameState===1){
   clear();
    game.play();

  background(0, 120, 120)

  //botones
  reinicio1.display();
  controles.mostrar();

   //visibilidades de los grupos
  invisibleground.visible=false
  spider.visible=true
  columna.visible=true
  blockGroup.setVisibleEach(true)
  pisoGroup.setVisibleEach(true)
  laserGroup.setVisibleEach(true)
  agua.visible=true
  lavaGroup.setVisibleEach(true)
  puasGroup.setVisibleEach(true)

  spider.collide(invisibleground)
  spider.collide(blockGroup)
  spider.collide(colum)
  spider.collide(colum2)
  spider.collide(ultimapared)
  spider.collide(block2Group)
   

  camera.position.x=spider.x+320
  camera.position.y=375

  vidabanner.y=camera.position.y-210
  vidabanner.x=camera.position.x+320
  vidabanner.visible=true

   v1.y=camera.position.y-210
   v1.x=camera.position.x+300
   v1.visible=true
    
   v2.y=camera.position.y-210
   v2.x=camera.position.x+345
   v2.visible=true
    
   
   v3.y=camera.position.y-210
   v3.x=camera.position.x+390
   v3.visible=true
   
   v4.y=camera.position.y-210
   v4.x=camera.position.x+435
   v4.visible=true


   //helicoptero
airplane.velocityX=2.5
airplane.velocityY=Math.round(random(2, -2))
airplane.visible=true
if (airplane.x>spider.position.x+1200){
  airplane.x=spider.position.x+30
  airplane.y=230
}

if (airplane.position.x>4000){
  airplane.position.x=4010
  airplane.velocityX=0
  airplane.velocityY=+3
}

if(airplane.position.y>400){
  airplane.velocityY=0
}



//botones de alerta
if(spider.x>2200){
boton1.shapeColor="red"
}
else{
  boton1.shapeColor="lime"
}


//lava del 1 nivel
lavavol();

//laseres del 2 nivel
laseres2();


//flecha del tercer nivel
flecha3();


if(spider.x>3510){

  boton2.shapeColor="red"
  
  }
  else{
    boton2.shapeColor="lime"
  
  }
  

//función de electricidad caer del 3 nivel
electricidadcielo();
llamasGroup.collide(invisibleground)




//rayo laser del nivel 4
dronesyrayos4();


if(spider.x>3450 && spider.x<3470){
anunciodrones=createSprite(4000, camera.position.y/2+120, 10, 10 )
anunciodrones.addImage(anunciodronesImg)
anunciodrones.scale=0.36
anunciodrones.lifetime=55
}


if(spider.x>3450 ){
  boton3.shapeColor="lime"
  
  }


//guardias del penultimo nivel
guardia.y=spider.y+random(20, 25)
guradia2.y=spider.y-random(80, 85)


//misiles 5
if(spider.x>4770 && spider.x<6000 ){
  if(vidan1>0 || vidan2>0){
  if(frameCount % 40===0){
    opmisil=createSprite(5900, 300, 10, 10)
    opmisil.addImage(opmisilImg)
    opmisil.scale=0.04
    
    
  
    var positionx= Math.round(random(1, 2));
    if(positionx==1){
      opmisil.y=random(300, 550)
    }
  
    else{
  if(positionx==2){
      opmisil.y=guardia.y;
  }
    }
  
    opmisil.lifetime=150
  misilopoGroup.add(opmisil)
  

  if(vidan1===3 || vidan2===3){
    opmisil.velocityX=-15
  }

  if(vidan1===2 || vidan2===2){
    opmisil.velocityX=-18
  }

  if(vidan1===1 || vidan2===1){
    opmisil.velocityX=-21
  }

console.log(opmisil.velocityX)

rayo1sonido.play();
rayo1sonido.setVolume(0.5)
  }
  }

    }


    if(spider.x>=4770){
      spider.collide(paredivisora2)
    }

puastechoultimo();

controles.display();

//moviminetos
  if(keyDown("right_arrow")  ){
    spider.x=spider.x+8
     }
  


    if(spider.x>190){
    if(keyDown("left_arrow")){
    spider.x=spider.x-8
  
    }
    }
  
  if(spider.y>300){
  if(keyDown("up_arrow") ){
    spider.velocityY=spider.velocityY-3
spider.maxSpeed=+15

  }
  }
//gravedad
  spider.velocityY = spider.velocityY + 0.91
  

  //arrojar flechas en el cuarto nivel
  //if(spider.x>3500 && spider.x<4800){
//if(keyDown("2")){
 //flplayer.push(new BaseClass(spider.x, spider.y, 40, 10))
//}
 // }
   
  if(spider.x>3500 && spider.x<4780){
    if(keyDown("3")){
    disparolaser=createSprite(spider.x, spider.y, 40, 10)
    disparolaser.addImage(laserultimo2Img)
    disparolaser.scale=0.1
    disparolaser.velocityX=+17
    disparolaser.lifetime=100
    disparolaserGroup.add(disparolaser)
   
    }
      }


  if(spider.x>4800 && spider.x<6000){
if(keyDown("3")){
laserultimo=createSprite(spider.x, spider.y, 40, 10)
laserultimo.addImage(laserultimo2Img)
laserultimo.scale=0.1
laserultimo.velocityX=+17
laserultimo.lifetime=100
laserultimoGroup.add(laserultimo)
}
  }
  
  if(spider.x>6025){
    if(keyDown("3")){
    laserultimo2=createSprite(spider.x, spider.y, 40, 10)
 laserultimo2.addImage(laserultimo2Img)
 laserultimo2.scale=0.1
    laserultimo2.velocityX=+17
    laserultimo2.lifetime=100
  laserultimo2Group.add(laserultimo2)
    }
      }
      
    
      



  //imagenes de fondo
    for(var k=-40; k<=7300; k=k+2380) {
  image(bg2, k, -25, 1200, 620)
    }
  
     for(var k=1150; k<=6000; k=k+2380){
  image(bg3, k, -25, 1200, 620)
     }
    
 image(guaridaImg, 5990, 137, 1200, 400)
  //image(columnaImg, 1200, 150, 1200, 290)
 // image(columna2Img, 2390, 130, 1200, 160)
  image(columna3Img, 6000, 95, 1200, 60)

 //accesorios 2
image(pinoImg, 150, 300, 130, 200)
image(arbolImg, 650, 350, 150, 150)
image(lamparaImg, 1350, 350, 100, 150)
image(arbustoImg, 1900, 450, 150, 50)
image(arbustoImg, 2040, 450, 150, 50)
image(arbolImg, 2700, 350, 150, 150)
image(arbusto2Img, 3100, 450, 140, 50 )
//image(lasarayos2, 3500, 5, 100, 50)
image(pinoImg, 3700, 320, 130, 200)
image(lamparaImg, 4200, 350, 100, 150)
image(pinoImg, 5500, 300, 120, 200)
image(arbusto2Img, 5100, 450, 140, 50)
//image(arbolImg, 6400, 350, 150, 150)
image(lasarayos2, 4190,180, 80, 50)

         spider.depth=lansarayos.depth;
         spider.depth=spider.depth+1;
         spider.depth=boton1.depth;
         spider.depth=spider.depth+1;
         
        guardia.depth=ultimapared.depth;
         guardia.depth=guardia.depth+1;
         
         guradia2.depth=ultimapared.depth;
         guradia2.depth=guradia2.depth+1;


        fill("white")
textFont(font, 32)
        text("Drones destruidos:" + dronesdestruidos + "/4", 3600, camera.position.y/2)

//drones 
if(disparolaserGroup.isTouching(dronesvoladoresGroup)){
  dronesdestruidos+=1
  disparolaserGroup.destroyEach();
  dronesvoladoresGroup.destroyEach();
  explosion1.play();
  
}


if(dronesdestruidos===4){
  dronesvoladoresGroup.destroyEach();
  rayo2Group.destroyEach();
  pareddivisora1.changeAnimation("pequeña", pareddivisora1Img2)
  rayo2sonido.stop();

  boton3.shapeColor="red"
}



//ultimas naves
if(laserultimoGroup.isTouching(guardia)){

  laserultimoGroup.destroyEach();
  vidan1-=1

impacto=createSprite(guardia.x-20, guardia.y)
impacto.addImage(impactoImg)
impacto.scale=0.2
impacto.lifetime=4
explosion1.play();

}


if(laserultimoGroup.isTouching(guradia2)){
 
  laserultimoGroup.destroyEach();
 vidan2-=1

 impacto=createSprite(guradia2.x-20, guradia2.y)
 impacto.addImage(impactoImg)
 impacto.scale=0.2
 impacto.lifetime=4
explosion1.play();

}

if(vidan1===0){
  guardiaGroup.destroyEach();

}


if(vidan2===0){
  guradia2Group.destroyEach();
  
}






        //score

        fill("white")

  
        if( spider.isTouching(lavaGroup) || spider.isTouching(puasGroup) || spider.isTouching(pirañaGroup)){
          perder1.play();
          spider.x=200
          spider.y=500
          spider.velocityY=0
          vidas-=1
anunciovida=createSprite(spider.position.x+350, camera.position.y/2+110, 40, 40)
anunciovida.addImage(sigueImg)
anunciovida.scale=0.46
anunciovida.lifetime=50   

luz=createSprite(spider.x, spider.y)
luz.addImage(luzImg)
luz.scale=0.3
luz.lifetime=15

        }

      if(spider.isTouching(laserGroup) || spider.isTouching(laser2Group)){
        //sonido
        perder1.play();
        spider.x=1180
        spider.y=400
        spider.velocityY=0
        vidas-=1
        
anunciovida=createSprite(spider.position.x+350, camera.position.y/2+110, 40, 40)
anunciovida.addImage(sigueImg)
anunciovida.scale=0.46
anunciovida.lifetime=50   

luz=createSprite(spider.x, spider.y)
luz.addImage(luzImg)
luz.scale=0.3
luz.lifetime=15


      }


if(spider.isTouching(paredesGroup)  || spider.isTouching(flechaGroup) || spider.isTouching(llamasGroup)){
  perder1.play();
  spider.x=2455
  spider.y=500
vidas-=1
spider.velocityY=0
spider.velocityX=0
flechaGroup.destroyEach();

anunciovida=createSprite(spider.position.x+350, camera.position.y/2+110, 40, 40)
anunciovida.addImage(sigueImg)
anunciovida.scale=0.46
anunciovida.lifetime=50   

luz=createSprite(spider.x, spider.y)
luz.addImage(luzImg)
luz.scale=0.3
luz.lifetime=15



}


if(spider.isTouching(rayo2Group)){
  perder1.play();
  spider.x=3600
  spider.y=440
vidas-=1
spider.velocityY=0
spider.velocityX=0
rayo2Group.destroyEach();


anunciovida=createSprite(spider.position.x+350, camera.position.y/2+110, 40, 40)
anunciovida.addImage(sigueImg)
anunciovida.scale=0.46
anunciovida.lifetime=50   

luz=createSprite(spider.x, spider.y)
luz.addImage(luzImg)
luz.scale=0.3
luz.lifetime=15




}


if(spider.isTouching(misilopoGroup)){
  perder1.play();
spider.x=4810
spider.y=440
vidas-=1
spider.velocityY=0
misilopoGroup.destroyEach();


anunciovida=createSprite(spider.position.x+350, camera.position.y/2+110, 40, 40)
anunciovida.addImage(sigueImg)
anunciovida.scale=0.46
anunciovida.lifetime=50   

luz=createSprite(spider.x, spider.y)
luz.addImage(luzImg)
luz.scale=0.3
luz.lifetime=15

}


if(vidan1===0  && vidan2===0){
  ultimapared.destroy();
}


if(spider.isTouching(lava2Group) || spider.isTouching(puas2Group)   || spider.isTouching(piraña2Group) ){
  perder1.play();
  spider.x=6100
  spider.y=440
  vidas-=1
  spider.velocityY=0
  spider.velocityX=0

anunciovida=createSprite(spider.position.x+350, camera.position.y/2+110, 40, 40)
anunciovida.addImage(sigueImg)
anunciovida.scale=0.46
anunciovida.lifetime=50   
}



if(vidas===3){
  v4.visible=false
}

if(vidas===2){
  v4.visible=false
  v3.visible=false

}

if(vidas===1){
  v4.visible=false
  v3.visible=false
  v2.visible=false
}


if(vidas===0){
  v4.visible=false
  v3.visible=false
  v2.visible=false
  v1.visible=false

gameState=2

}

if(spider.isTouching(diamante)){
  ganarsound.play();
  ganarsound.setVolume(0.3)
  gameState=2
  spider.x=6900
}



console.log(vidas)
  }


  if(gameState===2){

spider.changeAnimation("quieto", spiderquieto)
controles.hide();

if(vidas===0){
anunciovida.destroy();
anunciotesoro.visible=true
anunciotesoro.x=camera.position.x
anunciotesoro.y=camera.position.y/2+225

}


if(vidas>0){

  anuncioganaste.visible=true
  anuncioganaste.x=camera.position.x
  anuncioganaste.y=camera.position.y/2+220
  
}


vidabanner.visible=false
pirañaGroup.destroyEach();
lavavolGroup.destroyEach();
flechaGroup.destroyEach();
relampagosGroup.destroyEach();
llamasGroup.destroyEach();
rayo2Group.destroyEach();
dronesvoladoresGroup.destroyEach();
misilopoGroup.destroyEach();
puas2Group.destroyEach();
pareddivisora1.changeAnimation("pared", pareddivisora1Img1)
disparolaserGroup.destroyEach();
laserultimoGroup.destroyEach();
laserultimo2Group.destroyEach();
laser2Group.destroyEach();

electricidad1sonido.stop();
rayo2sonido.stop();
salpicadura1.stop();
explosion1.stop();
rayo1sonido.stop();




if(keyDown("right_arrow")  ){
  spider.x=spider.x-8
   }



  if(spider.x>190){
  if(keyDown("left_arrow")){
  spider.x=spider.x+8

  }
  }

if(spider.y>300){
if(keyDown("up_arrow") ){
  spider.velocityY=spider.velocityY+3
spider.maxSpeed=+15

}
}


  }

  
 



  console.log(gameState);




  drawSprites()
}


function crearobjetos(){
  construir.makespiderman();
  construir.makeairplane();
  construir.makepiso();
  construir.makecolumnas();
  construir.makelava();
  construir.makebloques1();
  construir.makepuas();
  construir.makeagua();
  construir.makelansarayos();
  construir.makebuttonalert();
  construir.makelaseres2nivel();
  construir.makebloques2();
  construir.makeparedes3();
  construir.makeparedivisora();
  construir.makeguardia();
  construir.makeultimasparedes();
  construir.makebloquesultimos();
  construir.makeobstaculosultimo();
  
  
}





function lavavol(){

  if(frameCount % 30===0){
    creadordelava(495, 560, 540, 10, 10, 10)

  }

  if(frameCount % 40===0){
  creadordelava(880, 970, 540, 10, 10, 13)

  }

  if(frameCount % 35===0){
   creadordelava(1050, 1150, 540, 10, 10, 8)

  }

  if(frameCount % 35===0){
   creadordelava(6240, 6360, 540, 10, 10, 10)
  }

  
  if(frameCount % 35===0){
   creadordelava(6440, 6540, 540, 10, 10, 12)

  }

  if(frameCount %35===0){
  creadordeprirañas(640, 820, 540, 10, 10, 21, pirañaGroup)
  }


if(spider.x<1100  || spider.x>6100){
  if(frameCount %35===0){
  salpicadura1.play();
  salpicadura1.setVolume(0.3)
  }
}

else{
  salpicadura1.stop();

}


  if(frameCount %35===0){
    piraña2=createSprite(random(6650, 6770), 540, 10, 10)
    piraña2.addImage(pirañaImg)
    piraña2.scale=0.1
    piraña2.velocityY=-12
    piraña2.lifetime=8
    piraña2Group.add(piraña2)
    
  }

}


function creadordelava(x1, x2, y, w, h, lf){
  var lavaconstante
var lf

  lavaconstante=createSprite(random(x1, x2), y, w, h)
  lavaconstante.addImage(lavavolImg)
  lavaconstante.scale=0.3
  lavaconstante.velocityY=-12
  lavaconstante.lifetime=lf
  lavavolGroup.add(lavaconstante)

}

function creadordeprirañas(x12, x22, y22, w22, h22, lfp, groupper){
  var pirañaconstante
var lfp
var groupper

  pirañaconstante=createSprite(random(x12, x22), y22, w22, h22, lfp)
  pirañaconstante.addImage(pirañaImg)
  pirañaconstante.scale=0.1
  pirañaconstante.velocityY=-12
  pirañaconstante.lifetime=lfp
  groupper.add(pirañaconstante)
  
}

//


function laseres2(){
//laseres del segundo nivel
if(spider.x<2200){
  if(frameCount % 130 ===0){
    var laser3=createSprite(2330, 500, 20, 20)
    laser3.addImage(laserImg2)
    laser3.scale=0.2
    laser3.velocityX=-7
    laser3.lifetime=135
    laser2Group.add(laser3)
    
  }
}


if(spider.x>1000 && spider.x<2200){
  if(frameCount % 130 ===0){
    rayo1sonido.play();
    rayo1sonido.setVolume(0.5)
    rayosAnimation=createSprite(2355, 500)
    rayosAnimation.addAnimation("preparar", rayosAnimationImg)
    rayosAnimation.scale=0.7
    rayosAnimation.lifetime=10

  }
}


}

function flecha3(){
  if(spider.x>2410  && spider.x<3490 ){
    if(frameCount % 70 ===0){
    
    Flsprite=createSprite(3470, 69, 30, 10)
    Flsprite.addImage(FlImg)
    Flsprite.rotation=-30
    Flsprite.scale=0.1
    Flsprite.lifetime=40
    Flsprite.velocityX=-22
    Flsprite.velocityY=+13
    Flsprite.velocityY=Flsprite.velocityY + 1.91
    Flsprite.friction=0.012
    flechaGroup.add(Flsprite)
    
    }
  
  if(frameCount % 50===0){
    relampago1=createSprite(3000, 520, 10, 10)
  relampago1.addImage(relampago1Img)
  
  var positionx2=Math.round(random(1, 2))
  if(positionx2==1){
    relampago1.x=2720
  }
  
  else{
    if(positionx2==2){
  relampago1.x=3000
    }
  }
  
  relampago1.scale=0.4
  relampago1.lifetime=20
  relampagosGroup.add(relampago1)
  
  }
  
  if(frameCount % 60===0){
  relampago2=createSprite(3000, 455, 10, 10)
  relampago2.addImage(relampago2Img)
  
  var positionx3=Math.round(random(1, 2))
  
  if(positionx3==1){
    relampago2.x=2910
  }
  
  else{
    if(positionx3==2){
      relampago2.x=3190
    }
  }
  
  relampago2.scale=0.4;
  relampago2.lifetime=20;
  
  relampagosGroup.add(relampago2)
  
  
  }
  
  if(frameCount % 100===0){
    electricidad1sonido.play();
    electricidad1sonido.setVolume(0.2)
  }
  
    }
  
  flechaGroup.bounceOff(invisibleground)
}



function electricidadcielo(){
  if(spider.x>2410  && spider.x<3510 ){
    if(frameCount % 60 ===0){
    
    llama1=createSprite(random(2600, 3400), 30, 30, 10)
    var rand=Math.round(random(1, 2));
    switch(rand){
      case 1: llama1.addAnimation("caer1",lImg1)
      break;
      case 2: llama1.addAnimation("caer2",lImg2)
      default: break;
    }

    llama1.velocityY=+13
llama1.scale=0.12
llama1.lifetime=40

llamasGroup.add(llama1)

    }
    
    }

}


function dronesyrayos4(){
  if(spider.x>3450 && spider.x<4800){

    if(frameCount %30===0){
      rayolaser2=createSprite(random(4500, 4800),100, 30, 10)
    rayolaser2.addImage(laserImg2)
    
    rayolaser2.scale=0.2
    
    
    var positionx1= Math.round(random(1, 2));
    if(positionx1==1){
      rayolaser2.y=100
      rayolaser2.velocityY=+11
      rayolaser2.rotation=-23
    }
    
    else{
    if(positionx1==2){
      rayolaser2.y=540;
      rayolaser2.velocityY=-7
      rayolaser2.rotation=+18
    }
    }
    
    rayolaser2.velocityX=-31
    
    rayolaser2.lifetime=50
    rayo2Group.add(rayolaser2)
    
    }
    
    spider.collide(pareddivisora1)
    
    
    //drones aleatorios
    
    if(dronesdestruidos>=0){
    if (frameCount % 60===0){
      dronesaleatorios=createSprite(4750, 270, 30, 10)
      dronesaleatorios.addImage(dronImg)
      dronesaleatorios.scale=0.1
      dronesaleatorios.velocityX=-13
    
      if(spider.y<270){
      dronesaleatorios.velocityY=-2
      }
    
      if(spider.y>270){
        dronesaleatorios.velocityY=+3
        }
      
        dronesaleatorios.lifetime=120
    
    dronesvoladoresGroup.add(dronesaleatorios)
    
    }
    }
    
    if(frameCount %50===0){
      rayo2sonido.play();
      rayo2sonido.setVolume(0.3)
    }
    
    }
    
}

function puastechoultimo(){

  if(spider.x>5900){
    if(frameCount % 70===0){
for(var t=6380; t<=6450; t=t+10){
  puastecho=createSprite(t, 170, 3, 6)
  puastecho.addImage(puastechoImg)
  puastecho.scale=0.1
  puastecho.velocityY=+12
  puastecho.lifetime=30
  puas2Group.add(puastecho)
  }
}
}
  


}



function restart2(){
  gameState=1
  anunciotesoro.visible=false

  spider.x=200
  spider.y=400
  spider.changeAnimation("correr", spiderImg)
  pareddivisora1.changeAnimation("pared", pareddivisora1Img1)

  if(vidan1===0  && vidan2===0){
    
ultimapared=createSprite(6000, 340, 10, 600)
ultimapared.addImage(pareddivImg)
ultimapared.scale=0.4



  }

if(vidan1===0){

  guardia=createSprite(5900, 300, 20, 40)
  guardia.addImage(dronImg)
  guardia.scale=0.13
  guardiaGroup.add(guardia)
}

if(vidan2===0){
  guradia2=createSprite(5900, 100, 20, 40)
  guradia2.addImage(dronImg)
  guradia2.scale=0.13
  guradia2Group.add(guradia2)
 
  
}


vidas=4
 vidan1=3
vidan2=3
dronesdestruidos=0
console.log(vidan1)

}


function touchMoved() {
if(gameState===1){

  spider.x=spider.x+8

  
}

  return false;
  }


