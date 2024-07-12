let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
boxes.forEach((box)=>{
    box.disabled=true
})
let toss=document.getElementById("toss")
let turn=Math.floor(Math.random()*2)
const decide=()=>{
    if(turn==0){
        toss.innerText="Player O"
        toss.disabled="true"
        boxes.forEach((box)=>{
            box.disabled=false
        })
    }
    else{
        toss.innerText="Player X"
        toss.disabled="true"
        boxes.forEach((box)=>{
            box.disabled=false
        })
    }
}
const again=()=>{
    turn=Math.floor(Math.random()*2)
    toss.innerText="Toss"
    disableBoxes()
    toss.disabled=false
}
function disableBoxes(){
    for(let box of boxes){
        box.disabled=true
        box.innerText=""
    }
}
resetBtn.addEventListener("click",again);
toss.addEventListener("click",decide);
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn==0){
            box.innerText="O";
            turn=1;
            box.setAttribute("class","box-O")
            toss.innerText="Player-X"
        }
        else{
            box.innerText="X";
            turn=0;
            box.setAttribute("class","box-X")
            toss.innerText="Player-O"
        }
        box.disabled=true;
        checkTie()
        checkWinner();
    });
})
const checkTie=()=>{
    for(let i=0;i<=8;i++){
        if(boxes[i].innerText==""){
            return
        }
    }
    toss.innerText="Tie"
}
const checkWinner=()=>{
    for(let pattern of winPattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                boxes.forEach((box)=>{
                    box.disabled=true
                })
                toss.innerText=`Winner: Player ${pos1}`
            }
        }
       
    }
}