window.addEventListener("load", (event)=> {
    let winnerCheck = [[0,1,2],[3,4,5], [6,7,8], 
    [0,3,6], [1,4,7], [2,5,8], [0,4,8] , [2,5,6]];
    let xWinnerVal = 0;
    let oWinnerVal = 0;
    let active;
    let squares  = document.querySelectorAll("#board > div");
    let bton =  document.querySelector(".btn");
    let state = -1;

    squares.forEach((sq)=> {
        sq.classList.add("square");
        sq.innerHTML = " ";
    
    });

    

    squares.forEach((sq)=> {
        sq.onclick = (event)=>{
            selected = 0;
            if (state == -1 || state == 1){
                sq.classList.remove("O");
                sq.classList.add("X");
                sq.innerHTML = 'X';
                state = 0;
            }
            else {
                sq.classList.remove("X");
                sq.classList.add("O");
                sq.innerHTML = 'O';
                state = 1;
            }


            while(selected <= squares.length){
                if (squares[selected] == sq){
                    break;
                }
                selected++;
            } 

            active = checkWinner();

            if (active == 1){
                xWinnerVal++;
            }
            else if (active == 0){
                oWinnerVal++;
            }
            
            if (xWinnerVal == 3){
                console.log("X won");
            }
            else if (oWinnerVal == 3){
                console.log("O won");
            }

        }

        sq.onmouseover = (event)=>{
            sq.style.transition = "all .3s ease-in-out"
            sq.classList.add("hover");
        }

        sq.onmouseout = (event)=>{
            sq.classList.remove("hover");
        }


        let checkWinner =()=>{
            let status = -1;
            for (item = 0; item < winnerCheck.length; item++){
                
                winnerCheck[item].forEach((itemlet) => {
                    if (selected == itemlet){
                        status = 1;
                    }
                } );

                if (status == 1){
                    console.log("yes");
                    for (let itemlet = 0; itemlet < winnerCheck[item].length; itemlet++){
                        if (squares[winnerCheck[item][itemlet]].innerHTML == "X"){
                            return 1;
                            //break;
                        }
                        else if (squares[winnerCheck[item][itemlet]].innerHTML == "O"){
                            return 0;
                            //break;
                        }

                    }
                        
                }
                else{
                    continue;
                } 
            }
        }
        
    });

    bton.addEventListener('click', (event) => {
        squares.forEach((sq) => sq.innerHTML = "");
    })
});
