    const Engine = Matter.Engine;
    const World = Matter.World;
    const Body = Matter.Body;
    const Bodies = Matter.Bodies;
    const Constraint = Matter.Constraint;

    var tree, treeImage;
    var Boy, Boy_Img;

    var Propelled;
    var M_gnd;
    var Mango1, Mango2, Mango3, Mango4, Mango5, Mango6, Mango7;
    var ChainHand;

function preload() {
    treeImage = loadImage("tree.png");
    Boy_Img = loadImage("boy.png");
}

function setup() {
    createCanvas(1350, 600);

    tree = createSprite(1020, 330, 50, 50);
    tree.addImage(treeImage);
    tree.scale=0.4;

    Boy = createSprite(250, 510, 70, 70);
    Boy.addImage(Boy_Img);
    Boy.scale=0.09;

    engine = Engine.create();
    world = engine.world;

    M_gnd = new Ground(width/2, 580, 1350, 40);

    Propelled = new Stone(250, 300, 40);

    Mango1 = new Mango(1170, 200, 30);

    Mango2 = new Mango(1100, 250, 30);
    
    Mango3 = new Mango(1090, 170, 30);
    
    Mango4 = new Mango(930, 180, 30);
    
    Mango5 = new Mango(1000, 200, 30);
    
    Mango6 = new Mango(920, 300, 30);
    
    Mango7 = new Mango(1000, 290, 30);
    
    Mango8 = new Mango(860, 230, 30);
    
    Mango9 = new Mango(1050, 130, 30);
    
    Mango10 = new Mango(990, 140, 30);
    
    Mango11 = new Mango(1200, 270, 30);
    
    Mango12 = new Mango(950, 250, 30);

    ChainHand = new ChainConstraint(Propelled.body, {x:200, y:460});

}

function draw() {

    background(0, 153, 255);

    drawSprites();

    //console.log(Boy.x, Boy.y, mouseX, mouseY )

    Engine.update(engine);

    detectCollision(Propelled, Mango1);

    detectCollision(Propelled, Mango2);

    detectCollision(Propelled, Mango3);

    detectCollision(Propelled, Mango4);

    detectCollision(Propelled, Mango5);

    detectCollision(Propelled, Mango6);

    detectCollision(Propelled, Mango7);

    detectCollision(Propelled, Mango8);

    detectCollision(Propelled, Mango9);

    detectCollision(Propelled, Mango10);

    detectCollision(Propelled, Mango11);

    detectCollision(Propelled, Mango12);

    M_gnd.display();

    Propelled.display();

    Mango1.display();

    Mango2.display();

    Mango3.display();

    Mango4.display();

    Mango5.display();

    Mango6.display();

    Mango7.display();

    Mango8.display();

    Mango9.display();

    Mango10.display();

    Mango11.display();

    Mango12.display();

    ChainHand.display();

    noStroke();

    textSize(16);

    fill(color(255));

    text("Click, Hold, and release your mouse to throw the rock! \n \nHit the mangoes if you can! \n \nPress SPACE to reset the rock, Ctrl + R to reset From Beginning", 100, 50);

}

function mouseDragged() {

    Matter.Body.setPosition(Propelled.body, {x:mouseX, y:mouseY});

}

function mouseReleased() {

    ChainHand.fly();

}

function keyPressed() {

    if (keyCode === 32) {

        Matter.Body.setPosition(Propelled.body, {x:200, y:460})

        ChainHand.comeBack(Propelled.body);

    }
}


function detectCollision(Propelled,mango){

    mangoBodyPosition=mango.body.position;

    stoneBodyPosition=Propelled.body.position;

    var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
    
    if(distance<=mango.r+Propelled.r){
    
        Matter.Body.setStatic(mango.body,false);	

    }

}

