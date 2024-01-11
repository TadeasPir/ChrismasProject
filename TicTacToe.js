
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
            $("#container").append("<div class='grid' id ='index'></div>");
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

    $(".grid").click(function() {
        if(currentPlayer === 'X'  &&   $(this).css("background-color","blank") ==   $(this).css("background-color", "white")){
            $(this).css("background-color", "purple");
            currentPlayer = 'O';
        }else
        if(currentPlayer === 'O'){
            $(this).css("background-color", "aqua");
            currentPlayer = 'X';
        }
                });

    $(".newGrid").click(function() {
        refreshGrid();

        $(".grid").click(function() {
        $(this).css("background-color", "black");
        });
    });
});
