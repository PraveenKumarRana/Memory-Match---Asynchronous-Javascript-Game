# Memory Match Game
## To run this in your local computer follow the following steps
    - Download or clone the project.
    - Install Node.js in your Computer [To download click here](https://nodejs.org/en/)
    - Using terminal and go to the project download directory ../Memory--
    - Use $ls and check for app.js file
    - Open app.js in the editor
        - Delete this 
        <pre>app.listen(process.env.PORT, process.env.IP, function(){
                console.log("Memory Match is running in the Cloud9 server ...");
            });</pre>
            
        - Paste this 
        <pre>app.listen(8080, function(){
                console.log("Memory Match is running in the Cloud9 server ...");
            });</pre>
            
    - Then run ** -- node app.js -- **
    - In browser open ** localhost:8080/ **
    - Now you can play the game
    
## How to play:
    - In this you have to select two boxes , each box have hidden random number inside them.
    - If number in the selected tw boxes match then numbers will unhide and color of box will change
    - If number does't matches the they will hide the numbers again.
    - In this way when you will find all 4 pairs correctly then alert will show you that 
        -how much time you took to complete.
    - To play again ** Restart ** the game.
    
### Enjoy !!!
