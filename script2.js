const boxes = document.getElementsByClassName("column");

let flag = "X";
let gameOver = false;
count = 0;

function playGame()
{
    Array.from(boxes).forEach((element)=>{
        let boxtext = element.querySelector(".boxtext");
            element.addEventListener("click",()=>{
               
                    if(flag === "X" && boxtext.innerText === "")
                    {
                        if(!gameOver)
                            boxtext.innerText = "X";
                        checkResult();
                        if(!gameOver)  
                            flag = "O";
                        // gameOver = false;
                        
                    }
                    else if(flag === "O" && boxtext.innerText === "")
                    {
                        if(!gameOver)
                            boxtext.innerText = "O";
                        checkResult(); 
                        if(!gameOver)  
                            flag = "X";
                        // gameOver = false;
                        
                    }
                    document.querySelector("#js-turn").innerText = `Turn of ${flag}`;
            


                    if(count>7 && !gameOver)
                    {
                        document.querySelector("#js-turn").innerText = "Match Tie"
                    }
                    count++;
                     
            });
    });
}

function checkResult()
{
    let boxElement = document.getElementsByClassName("boxtext");
    // console.log(boxElement);
    
    let winX = [[0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6]];
               
                    winX.forEach(em=>{
            
                        if((boxElement[em[0]].innerText === boxElement[em[1]].innerText) && (boxElement[em[1]].innerText === boxElement[em[2]].innerText) && boxElement[em[0]].innerText)
                        {
                            console.log(flag +" win");
                            gameOver = true;
                            document.querySelector("#js-turn").innerText = `${flag} Win`

                            stop();
                        }
               
                
            });
            

            
}

playGame();

let stop = ()=>{
    setTimeout(() => { document.querySelector("#js-turn").innerText = `${flag} Win` }, 10);
    setTimeout(() => { location.reload().innerText = `${flag} Win` }, 1500);
}