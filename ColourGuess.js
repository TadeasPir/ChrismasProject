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
        let index = 1; 
        let canvas;
        for(let i = 0; i < numOfColors; i++){
        
            array.push( color1.generateRandomColor());
            RandomColor.generateFilledCircle("Canvas"+index,array[i]);
            index++;
            //TODO: make buttons work
            canvas = document.getElementById("Canvas"+index);
            canvas.addEventListener("click",);

        }
       
         let rightColor = array[Math.round(Math.random()*array.length)];
         document.getElementById("ColorGuesser").innerHTML = rightColor;
         gameLogic();
        return array;
    }

    static gameLogic(color, canvasId){
        if(color === rightColor){
        // TODO: implement the divs which will be shown 
            document.getElementById("ul_canvas").children[0].style.display = "none"
            document.getElementById("ul_canvas").children[0].style.display = "none"
        }else{
            document.getElementById("ul_canvas").children[CanvasGradient].style.display = "hidden"
        }
    }
}

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


let colors = RandomColor.generateColorList(8); 

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