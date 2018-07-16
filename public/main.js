// global variable goes here
var clickedArray = [];
var interval;
var started = false;
var time = 0;
var ready = true;
var numCompleted = 0;

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
        startTimer();
        if(this.completed == false && this.clicked == false){
            clickedArray.push(this);
            reveal(this);
        }
        if(clickedArray.length == 2){
            if (ready == false){
            return;
        }
        console.log("This is the value of the clickedArray : " + clickedArray[0] + " and " + clickedArray[1]);
        if(clickedArray[0].value == clickedArray[1].value){
            // if matching pair is found then do this
            complete(clickedArray[0]);
            complete(clickedArray[1]);
            
            clickedArray = [];
            
            if(numCompleted == 8){
                setTimeout(function(){
                    alert("You win in "+ time + " Seconds");    
                },5)
                clearInterval(interval);
            }
        } 
        else {
            // if matchig pair is not found then do this
            ready = false;
            document.getElementById("gridTable").style.border = "5px solid red";
            
            setTimeout(function(){
                // after 500ms delay
                hide(clickedArray[0]);
                hide(clickedArray[1]);
                
                clickedArray = [];
                ready=true;
                document.getElementById("gridTable").style.border = "0px";
            },100);
        }
    }
    });
    }
    
    document.addEventListener("keydown", function(event){
        if(event.key>0 && event.key<10){
            // this will handle the numpads click
            grid[event.key - 1].click();
        }
    });
    
    document.getElementById("restart").addEventListener("click",function(){
        location.reload();
    });
}


function reveal(cell){
    cell.style.background= "red";
    cell.innerHTML = cell.value;
    cell.clicked=true;
    
}

function startTimer(){
    if(started==false){
        interval = setInterval(function(){
            time++;
        document.getElementById("timer").innerHTML = "Time Elapsed : " + time;
        },1000);
        started = true;
    }
}

function hide(cell){
    cell.style.backgroundColor = "skyblue";
    cell.innerHTML = "";
    cell.clicked = false;
}

function complete(cell){
    numCompleted++;
    cell.completed = true;
    cell.style.backgroundColor = "purple";
}