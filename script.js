const Game = {
    currentUser: 0,
    gamePlayCount: 0,
    firstUserWin: 0,
    firstUserLoss: 0,
    secondUserWin: 0,
    secondUserLoss: 0,
    gamePlayGrid: [0, 0, 0, 0, 0, 0, 0, 0, 0]
}
class TicTacToe{
    
    constructor(){
        
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
            })
        });
    }
    initializeWinEventListner(){
        
    }
    
    
}
app = new TicTacToe();