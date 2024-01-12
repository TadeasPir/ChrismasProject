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
        document.getElementById(id).style["background-color"] = color;

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
            document.getElementById("winner").style.display = 'block';
            document.getElementById("restart").style.display = 'block';
        }else{
            document.getElementById("ul_canvas").children[id].style.display = "none"
            
        }
    
        }

    

    }

   

    let colors = RandomColor.generateColorList(8); 

   let rightColor = new RandomColor("")
   rightColor = colors[Math.floor(Math.random()*colors.length)];
   document.getElementById("ColorGuesser").innerHTML = rightColor;

 //TODO: make buttons work
 circle1 = document.getElementById("0");
 
 circle1.addEventListener("click",(e) =>
 {
    RandomColor.gameLogic(colors[0],rightColor,0);
    
 });
 
 circle2 = document.getElementById("1");
 circle2.addEventListener("click",(e) =>
 {
    RandomColor.gameLogic(colors[1],rightColor,1);
 });
 circle1 = document.getElementById("2");
 
 circle1.addEventListener("click",(e) =>
 {
    RandomColor.gameLogic(colors[2],rightColor,2);
    
 });
 
 circle3 = document.getElementById("3");
 circle3.addEventListener("click",(e) =>
 {
    RandomColor.gameLogic(colors[3],rightColor,3);
 });
 circle4 = document.getElementById("4");
 circle4.addEventListener("click",(e) =>
 {
    RandomColor.gameLogic(colors[4],rightColor,4);
 });
 circle5 = document.getElementById("5");
 circle5.addEventListener("click",(e) =>
 {
    RandomColor.gameLogic(colors[5],rightColor,5);
 });
 circle6 = document.getElementById("6");
 circle6.addEventListener("click",(e) =>
 {
    RandomColor.gameLogic(colors[6],rightColor,6);
 });
 circle7 = document.getElementById("7");
 circle7.addEventListener("click",(e) =>
 {
    RandomColor.gameLogic(colors[7],rightColor,7);
 });
 circle8 = document.getElementById("8");
 circle8.addEventListener("click",(e) =>
 {
    RandomColor.gameLogic(colors[8],rightColor,8);
 });


console.log(colors)


