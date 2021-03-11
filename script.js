let parent = document.getElementsByClassName('cube-container')[0];
let childNodeList = [];
let nodes = parent.childNodes;

function getRandomFromRange(min, max)
{ 
    let prevList = [];
    function x(){
        let newNum = Math.floor(Math.random() * (max - min + 1) + min);
        if(prevList.indexOf(newNum) == -1){
            prevList.push(newNum);
            return newNum;
        }

        return x();
    };
    return x;
}

function shuffleCubes(){
    let randomNum = getRandomFromRange(1, 9);
    for(let i = 0; i<nodes.length; i++){
        if(nodes[i].className?.includes('cube')){
            let itemPos = randomNum();
            nodes[i].style.order = itemPos;
        }
    }
}

function sortCubes(){
    for(let i = 0; i<nodes.length; i++){
        if(nodes[i].className?.includes('cube')){
            nodes[i].style.removeProperty('order');
        }
    }
}