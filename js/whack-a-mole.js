
let currMoleTile;// this variable keeps track of the current div of which mole is present.
let currPlantTile;// this variable keeps track of the current div of which plant is present.
let currPlantTile2;// this variable keeps track of the current div of which plant2 is present.
let score =0;//intialize the score.
let gameOver = false;
window.onload= function(){    // as soon as window is open the set game function runs.
    setGame();
}

function setGame(){
    // here i create the 9 tiles by creating 9 div with a for loop
    for(let i = 0; i < 9; i++){
        let tile = document.createElement("div");// ===>> <div></div>
        tile.id =i.toString();                  // ==>>   <div id="0-8"></div>
        tile.addEventListener("click",selectTile);// this will listen to a click on the tiles and run the selectTile function.
        document.getElementById("board").appendChild(tile);// this access the div element of id board and passes the 9 div tags into that element.
    }
    setInterval(setMole, 2000); // calling setMole function every 2 second
    setInterval(setPlant, 1000);// calling setPlant function every 1 second
    setInterval(setPlant2, 1000);// calling setPlant2 function every 1 second
}

function getRandomTile(){
        let num = Math.floor(Math.random()*9); // Math.random >> (0-1) and multiplying that by 9 makes it (0-9) and Math.floor makes it round down to (0-8);
        return num.toString();// we return the random number from 0-8 as a string for use of id;
}

function setMole(){
    if(gameOver){ //checks if game Over s
        return;
        }
    if(currMoleTile){
        currMoleTile.innerHTML="";//removes the img tag for the div tag after every time the function runs which clears the previous mole tile;
        
    }
    
    let mole= document.createElement("img");//this creates the mole img
    mole.src= "/images/monty-mole.png";
    let num = getRandomTile();// to place mole on a random tile we get a random number by getRandomTile function
    if(currPlantTile && currPlantTile.id ===num){ // s o here this if statement checks if the plant is on the same tile if it is then dont generate mole for the that div and return the setMole func again .
        return setMole();
    }
    if(currPlantTile2 && currPlantTile2.id === num){// and here also this if statement checks if the plant2 is on the same tile if it is then dont generate mole for the that div and return thesetMole func again .
        return setMole();
    }
    
    // we get the random tile and add an image of mole to it.
    currMoleTile = document.getElementById(num); // this is a div of id (0-8) provided by num
    currMoleTile.appendChild(mole);//and this is going to add an image to the div
    currMoleTile.addEventListener("click", selectTile); // have to reattach the event Listener as we are removing it in selectTile(); function. 
    
}
function setPlant(){
    if(gameOver){ //checks if game Over 
        return;
    }

    if(currPlantTile){
        currPlantTile.innerHTML = ""; //removes the img tag for the div tag after every time the funcion runs which clears the previous plant tile;
    }
   
    let plant = document.createElement("img");//this creates the plant img
    plant.src = "/images/piranha-plant.png";
    let num = getRandomTile();// to place plant on a random tile we get a random number by getRandomTile function
    if(currMoleTile && currMoleTile.id ===num){// so here this if statement checks if the mole is on the same tile if it is then dont generate plant for the that div and return setPlant() function
        return setPlant();;
    }
    if(currPlantTile2 && currPlantTile2.id === num){// so here this if statement checks if the plant2 is on the same tile if it is then dont generate plant for the that div and return setPlant() function
        return setPlant();
    }
    currPlantTile = document.getElementById(num);// this is a div of id (0-8) provided by num
    currPlantTile.appendChild(plant);//and this is going to add an image to the div
}
function setPlant2(){
    if(gameOver){ //checks if game Over 
        return;
    }

    if(currPlantTile2){
        currPlantTile2.innerHTML = ""; //removes the img tag for the div tag after every time the function runs which clears the previous plant2 tile;
    }
   
    let plant = document.createElement("img");
    plant.src = "/images/piranha-plant.png";
    let num = getRandomTile();
    if(currMoleTile && currMoleTile.id ===num){// so here this if statement checks if the mole is on the same tile if it is then dont generate plant for the that div and return the setPlant2() function.
        return setPlant2();
    }
    if(currPlantTile && currPlantTile.id ===num){// so here this if statement checks if the plant is on the same tile, if it is then dont generate plant2 for the that div and return the setPlant2() function.
        return setPlant2();
    }
    currPlantTile2 = document.getElementById(num);// this is a div of id (0-8) provided by num
    currPlantTile2.appendChild(plant);//and this is going to add an image to the div
}

function selectTile(){
    if(gameOver){ //checks if game Over 
        return;
    }
    // this refers to the  tile div which was clicked;
    if(this === currMoleTile){// updates the score if the tile clicked is mole tile.
        score += 10; 
        document.getElementById("score").innerText = score.toString(); // display it on webpage
        currMoleTile.removeEventListener("click",selectTile); // remove the event listner so user cant click on the same mole again within the interval
        
    }else if(this === currPlantTile){//makes the game over if the tile clicked is plant tile.
        document.getElementById("score").innerText ="GAME OVER: " + score.toString();
        gameOver =true; // set the gameOver to true as player has clicked on plant.
        

    }else if(this === currPlantTile2){//makes the game over if the tile clicked is plant2 tile.
        document.getElementById("score").innerText ="GAME OVER: " + score.toString();
        gameOver =true; // set the gameOver to true as player has clicked on plant2.
    }
    
}

