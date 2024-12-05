const Game = {
    currentUser: 0,
    gamePlayCount: 0,
    firstUserWin: 0,
    firstUserLoss: 0,
    secondUserWin: 0,
    secondUserLoss: 0,
    gamePlayGrid: [null, null, null, null, null, null, null, null, null]
}
class TicTacToe{
    
    constructor(){
        document.getElementById("close").addEventListener("click", ()=>{
            document.getElementById("wonView").style.display = "none"
        })
        this.initializeCellBlockCilckCallBack();
    }
    initializeCellBlockCilckCallBack(){
        let cellButtons = [...document.getElementsByClassName("cellBlock")]
        cellButtons.forEach(element => {
            element.addEventListener("click", ()=>{
                
                Game.gamePlayGrid[cellButtons.indexOf(element)] = Game.currentUser+1;
                if(element.innerHTML==""){
                    switch (Game.currentUser){
                        case 0:
                            element.innerHTML = "o"
                            
                            Game.currentUser++;
                            document.getElementById("turnDisplay").innerHTML = "Turn: User #2";
                            break;
                        case 1:
                            element.innerHTML = "x"
                            Game.currentUser--;
                            document.getElementById("turnDisplay").innerHTML = "Turn: User #1";

                            break;
                    }
                }
                
                this.initializeWinEventListner();
                this.initializeDrawEventListner();
            })
        });
    }
    initializeWinEventListner(){
        let winState = false;

        if((Game.gamePlayGrid[0]==Game.gamePlayGrid[1]&&Game.gamePlayGrid[1]==Game.gamePlayGrid[2]) && Game.gamePlayGrid[2]!==null){
            winState = true;
        }
        if((Game.gamePlayGrid[3]==Game.gamePlayGrid[4]&&Game.gamePlayGrid[4]==Game.gamePlayGrid[5]) && Game.gamePlayGrid[5]!==null){
            winState = true;
        }
        if((Game.gamePlayGrid[6]==Game.gamePlayGrid[7]&&Game.gamePlayGrid[7]==Game.gamePlayGrid[8]) && Game.gamePlayGrid[8]!==null){
            
            winState = true;
        }


        if((Game.gamePlayGrid[0]==Game.gamePlayGrid[3]&&Game.gamePlayGrid[3]==Game.gamePlayGrid[6]) && Game.gamePlayGrid[6]!==null){

            winState = true;
        }
        if((Game.gamePlayGrid[1]==Game.gamePlayGrid[4]&&Game.gamePlayGrid[4]==Game.gamePlayGrid[7]) && Game.gamePlayGrid[7]!==null){
            winState = true;
        }
        if((Game.gamePlayGrid[2]==Game.gamePlayGrid[5]&&Game.gamePlayGrid[5]==Game.gamePlayGrid[8]) && Game.gamePlayGrid[8]!==null){
            winState = true;
        }


        if((Game.gamePlayGrid[0]==Game.gamePlayGrid[4]&&Game.gamePlayGrid[4]==Game.gamePlayGrid[8]) && Game.gamePlayGrid[8]!==null){
            winState = true;
        }
        if((Game.gamePlayGrid[2]==Game.gamePlayGrid[4]&&Game.gamePlayGrid[4]==Game.gamePlayGrid[6]) && Game.gamePlayGrid[6]!==null){
            winState = true;
        }
        

        if(winState){
            document.getElementById("wonText").innerHTML = `User #${Game.currentUser!=0?1:2} won the game`

            document.getElementById("wonView").style.display = "flex";
            switch(Game.currentUser){
                case 1:
                    Game.firstUserWin++;
                    Game.secondUserLoss++;
                    break;
                case 0:
                    Game.firstUserLoss++;
                    Game.secondUserWin++
                    break;
            }
            Game.currentUser = 0;
            Game.gamePlayGrid = [null, null, null, null, null, null, null, null, null];
            Game.gamePlayCount++;

            let cellButtons = [...document.getElementsByClassName("cellBlock")]
            cellButtons.forEach(element => {
            element.innerHTML = "";
        });
        this.updateGuiText();

        }
        

    }
    initializeDrawEventListner(){
        if(!Game.gamePlayGrid.includes(null)){
            document.getElementById("wonText").innerHTML = `Game is a Draw!`

            document.getElementById("wonView").style.display = "flex";
            Game.currentUser = 0;
            Game.gamePlayGrid = [null, null, null, null, null, null, null, null, null];
            Game.gamePlayCount++;

            let cellButtons = [...document.getElementsByClassName("cellBlock")]
            cellButtons.forEach(element => {
            element.innerHTML = "";
        });
        }   
    }
    updateGuiText(){
        
        let guiFooterText = `<pre>
 User #1 Wins: ${Game.firstUserWin}
 User #2 Wins: ${Game.secondUserWin}
        </pre>
        <pre>
            User #1 Loss: ${Game.firstUserLoss}
            User #2 Loss: ${Game.secondUserLoss}
        </pre>`
        console.log(guiFooterText)
        document.getElementById("scoreLine").innerHTML = guiFooterText;
    }
    
    
    
}
app = new TicTacToe();