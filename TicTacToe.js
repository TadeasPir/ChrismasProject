
//dodělat game logic budeme checkovat vsechny okolni id a pokud najdeme tak na nej skocime musime vyresit jak to crossnout na to najit nejakou datovou strukturu.

function getColor(div){
let color  = window.getComputedStyle(div).backgroundColor;

return color;
}

 function step(id1,id2){
    if(id1 < id2){
return -1;
    }
    else {
        return -(-1);
    } 


}

/* let below = array[id-(-20)];
    let above = array[id-20];
    let right = array[id-(-1)];
    let left  =  array[id-1];
    let diagonalRightUp = array[id-19];
    let diagonalLeftUp = array[id-21];
    let diagonalRightBelow = array[id-(-19)];
    let diagonbalLeftBelow = array[id-(-21)]; */



        //Im using -- instead of + because its not working otherwise prolly beacuse of string :( 
function gamelogic(array,id,inputColor){
    let below = id-(-20);
    let above = id-20;
    let right = id-(-1);
    let left  =  id-1;
    let diagonalRightUp = id-19;
    let diagonalLeftUp = id-21;
    let diagonalRightBelow = id-(-19);
    let diagonbalLeftBelow =id-(-21);
    let controlDivsId = [right,left,above,below,diagonalRightUp,diagonalRightBelow,diagonbalLeftBelow,diagonalLeftUp];
    //console.log(controlDivs);
    currentId = id;


    let currentDivId = array[id];
    let startId = id;
   
    let count = 0;
  console.log(controlDivsId);

    for(let i = 0;i <= 8; i++ ){
        currentDivId = controlDivsId[i];
        console.log(currentDivId);

         while(divs[currentDivId].innerHTML == inputColor){
            count++;
            console.log(count);
           
            currentDivId = step(currentId,startId);
           
        }
        

        if(count >= 4){

            window.alert("sometext");
            //winner
        }
    }

}
 

 

function createGrid(x) {
    let index = 0;
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {0
            $("#container").append("<div class='grid' id ="+index +">white</div>");
            index++;
        };
    };
    $(".grid").width(960/x);
    $(".grid").height(960/x);
};


function clearGrid(){
    $(".grid").remove();
};  

function refreshGrid(){
    var z = prompt("How many boxes per side?");
    clearGrid();
    createGrid(z);
};



let currentPlayer = 'X'



  
  $(document).ready(function() {
    createGrid(20);

    
    let divs = document.querySelectorAll('.grid');
   // console.log(divs);

    divs.forEach(function(div) {
        div.addEventListener('click', function() {
            myDivObj = div;
            myId = div.id;
            console.log(myId);
            // console.log(myDivObj);

             let array  = [];
             let nextId = myId+1;
             
             //console.log(nextId);
           
            let myDivObjBgColor = getColor(myDivObj);
             divs.forEach(element => {
                array.push(element);
             });


             console.log(array);
               

             let controlColor  = "rgb(0, 255, 255)";
             let controlColor2 =  "rgb(128, 0, 128)";
           //  console.log(myDivObjBgColor);
               if(currentPlayer === 'X' &&   myDivObjBgColor !==   controlColor && myDivObjBgColor !== controlColor2){
                   $(this).css("background-color", "purple");
                   div.innerHTML = "purple";
                   currentPlayer = 'O';
              
       
               }else
               if(currentPlayer === 'O'&&   myDivObjBgColor !==   controlColor && myDivObjBgColor !== controlColor2){
                   $(this).css("background-color", "aqua");
                   currentPlayer = 'X';
                    div.innerHTML = "aqua";
                   

       
               }
             // gamelogic(array,myId,div.innerHTML);
             
        });
      });
  

  
});
