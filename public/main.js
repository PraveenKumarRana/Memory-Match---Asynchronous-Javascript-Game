// global variable goes here
var clickedArray = [];
// execute functions here
setup();

// functions definitions goes here 
function randomAnswers(){
    var answers = [1,1,2,2,3,3,4,4,5];
    answers.sort(function(item){
        return .5 - Math.random();
    })
    
    return answers;
}

function setup(){
    var grid = document.getElementsByTagName("td");
    var answers = randomAnswers();
    for(var i=0; i<grid.length; i++){
        var cell = grid[i];
        cell.completed= false;
        cell.clicked=false;
        cell.value=answers[i];
    }
    
    cell.addEventListener("mouseenter",function(){
        if(this.completed == false && this.clicked == false){
            this.style.background = "orange";
        }
    });
    cell.addEventListener("mouseleave",function(){
        if(this.completed == false && this.clicked == false){
            this.style.background = "skyblue";
        }
    });
    cell.addEventListener("click", function(){
        if(this.completed == false && this.clicked == false){
            clickedArray.push(this);
            reveal(this);
        }
    });
}


function reveal(cell){
    cell.style.background= "red";
    cell.innerHTML = cell.value;
    cell.clicked=true;
    
}