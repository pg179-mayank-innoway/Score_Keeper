/*function changecolor(){
    let x =[];
    for(let i =0 ; i<3;i++){
        x[i]=Math.floor(Math.random()*255)+1;
        console.log(x[i]);
    }
    let body1 = document.querySelector('body');
    let ncolor = `rgb(${x[0]},${x[1]},${x[2]})`;
    body1.style.backgroundColor= ncolor;
}
let btn1 = document.querySelector('#btn');
btn1.addEventListener('click',changecolor);*/


/*let btn = document.querySelector('#btn');
btn.addEventListener('click',function(event){
    event.preventDefault();
    let name = document.getElementById('name').value;
    let qty = document.getElementById('qty').value;
    addValue(name ,qty);
    document.getElementById('name').value="";
    document.getElementById('qty').value="";

});
function addValue(amp ,camp){
   // console.log(amp);
    let lk = document.createElement("li");
    lk.innerText=`${camp} ${amp}`;
    let list = document.querySelector('#list');
    list.appendChild(lk);
}*/

/*let inputm = document.querySelector('#second');
inputm.addEventListener('input',function(){
    let heading = document.querySelector('#heading');
    console.log('hello');
    heading.textContent =`welcome ${inputm.value}`;
})*/

function getValue(){
    let maxm = document.querySelector('#max').value;
    return maxm;
}
function player1(){
    let mad = parseInt(getValue());
    let current1 = document.querySelector('#p1').innerText;
    current1=parseInt(current1);
    current1++;
    document.querySelector('#p1').textContent = current1;
    if(current1 === mad){
        console.log('player1 wins the match');
        document.querySelector('#p1').style.color='green';
        document.querySelector('#p2').style.color ='red';
    }
}
function player2(){
    mad = parseInt(getValue());
    let current2 = document.querySelector('#p2').innerText;
    current2=parseInt(current2);
    current2++;
    document.querySelector('#p2').textContent = current2;
    if(current2 === mad){
        console.log('player2 wins the match');
        document.querySelector('#p2').style.color='green';
        document.querySelector('#p1').style.color ='red';
    }
}
document.querySelector('#player1').addEventListener('click',function(){
    
    if(parseInt(document.querySelector('#p1').innerText)<parseInt(getValue())&&parseInt(document.querySelector('#p2').innerText)<parseInt(getValue())){
    player1();
}
})
document.querySelector('#player2').addEventListener('click',function(){
    
    if(parseInt(document.querySelector('#p1').innerText)<parseInt(getValue())&&parseInt(document.querySelector('#p2').innerText)<parseInt(getValue())){
    player2();
}
})
document.querySelector('#reset').addEventListener('click',function(){
    console.log('button pressed');
    document.querySelector('#p1').innerText= "0";
    document.querySelector('#p2').innerText ="0";
    document.querySelector('#max').value = 5;
    document.querySelector('#p2').style.color='black';
    document.querySelector('#p1').style.color ='black';
})