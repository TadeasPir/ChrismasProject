
class Player{

    constructor(){

    }


   /*  gameLogic(){
        if(){

        }
    }
 */

}











// function that builds a grid in the "container"
function createGrid(x) {
    let index = 0;
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {0
            $("#container").append("<div class='grid' id ="+index +"></div>");
            index++;
        };
    };
    $(".grid").width(960/x);
    $(".grid").height(960/x);
};

// function that clears the grid
function clearGrid(){
    $(".grid").remove();
};  

// function that prompts the user to select the number of boxes in a new grid
// the function then also creates that new grid
function refreshGrid(){
    var z = prompt("How many boxes per side?");
    clearGrid();
    createGrid(z);
};


// create a 16x16 grid when the page loads
// creates a hover effect that changes the color of a square to black when the mouse passes over it, leaving a (pixel) trail through the grid
// allows the click of a button to prompt the user to create a new grid

let currentPlayer = 'X'



  
  $(document).ready(function() {
    createGrid(20);

    
    let divs = document.querySelectorAll('.grid');

    divs.forEach(function(div) {
        div.addEventListener('click', function() {
            myDivObj = div
            myId = div.id
            console.log(myId);
             console.log(myDivObj);
             let myDivObjBgColor = window.getComputedStyle(myDivObj).backgroundColor;
             let controlColor  = "rgb(0, 255, 255)";
             let controlColor2 =  "rgb(128, 0, 128)";
             console.log(myDivObjBgColor);
               if(currentPlayer === 'X' &&   myDivObjBgColor !==   controlColor && myDivObjBgColor !== controlColor2){
                   $(this).css("background-color", "purple");
                   currentPlayer = 'O';
              
       
               }else
               if(currentPlayer === 'O'&&   myDivObjBgColor !==   controlColor && myDivObjBgColor !== controlColor2){
                   $(this).css("background-color", "aqua");
                   currentPlayer = 'X';
                  
       
               }
        });
      });
   /*  $(".grid").click(function(div) {
       
    
                }); */

    $(".newGrid").click(function() {
        refreshGrid();

        $(".grid").click(function() {
        $(this).css("background-color", "black");
        });
    });
});
