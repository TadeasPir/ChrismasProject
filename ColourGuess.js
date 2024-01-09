class RandomColor{


    constructor(randomColor){
        this.randomColor = randomColor;
   
    }
    
    generateRandomColor(){
    let color = Math.floor(Math.random()*16777215).toString(16);
    if(color.length <= 6){
        while(color.length <= 5){
            color = color + "0";
        }
    }
    return "#" + color;

    }
   
    static generateFilledCircle(id,color)  {
        let c = document.getElementById(id);
        let ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(95, 50, 40, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke();

    }

    static generateColorList(numOfColors){
        let color1 = new RandomColor();
        let array = [];
        
        let canvas;
        for(let i = 0; i < numOfColors; i++){
        
            array.push(color1.generateRandomColor());
            RandomColor.generateFilledCircle(i,array[i]);
        }
       
        
        
        return array;
    }

    
       static gameLogic(color,rightColor,id){
    
        if(color === rightColor){
            // TODO: implement the divs which will be shown 
            document.getElementById("winner").style.display = "visible"
            document.getElementById("restart").style.display = "visible"
        }else{
            document.getElementById("ul_canvas").children[id].style.display = "hidden"
            document.getElementById("testovac").style.display = "hidden"
        }
    
        }

    

    }

   

    let colors = RandomColor.generateColorList(8); 

   let rightColor = new RandomColor("")
   rightColor = colors[Math.floor(Math.random()*colors.length)];
   document.getElementById("ColorGuesser").innerHTML = rightColor;

 //TODO: make buttons work
 canvas1 = document.getElementById("0");
 
 canvas1.addEventListener("click",(e) =>
 {
    RandomColor.gameLogic(colors[0],rightColor,0);
    console.log(colors[0]+" "+rightColor);
 });
 
 console.log(canvas1);
 canvas2 = document.getElementById("0");
 canvas2.addEventListener("click",(e) =>
 {
    RandomColor.gameLogic(colors[1],rightColor,1);
 });



 /*
let color1 = new RandomColor();
color1 = color1.generateRandomColor()
let color2 = new RandomColor();
color2 = color2.generateRandomColor()
let color3 = new RandomColor();
color3 = color3.generateRandomColor()
let color5 = new RandomColor();
color5 = color5.generateRandomColor()
let color6 = new RandomColor();
color6 = color6.generateRandomColor()
let color7 = new RandomColor();
color7 = color7.generateRandomColor()
let color8 = new RandomColor();
color8 = color8.generateRandomColor()
*/




console.log(colors)




/*
RandomColor.generateFilledCircle("Canvas1",color1);

RandomColor.generateFilledCircle("Canvas2",color2);
RandomColor.generateFilledCircle("Canvas3",color3);
RandomColor.generateFilledCircle("Canvas3",color4);
RandomColor.generateFilledCircle("Canvas3",color5);
RandomColor.generateFilledCircle("Canvas3",color6);
RandomColor.generateFilledCircle("Canvas3",color7);
RandomColor.generateFilledCircle("Canvas3",color8);

document.getElementById("ul_canvas").children[0].style.display = "none"
*/