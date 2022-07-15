addEventListener('keydown', fkeydown);

function fkeydown(event){
    // console.log(event);
    document.body.style.backgroundColor = 'rgb(43, 174, 226)';
}

addEventListener('keyup', fkeyup);

function fkeyup(event){
    document.body.style.backgroundColor = 'rgb(25, 25, 25)';
}

//mousedown
let button1 = document.getElementById('button1');
button1.addEventListener('mousedown', fmousedown);

function fmousedown(event){
    console.log(event);
}

//mousemove
let img1 = document.getElementById('img1');

addEventListener('mousemove', fmousemove);

function fmousemove(event){
    img1.style.left = event.pageX -30 + 'px';
    img1.style.top = event.pageY - 30 + 'px';
}

//mouseup
addEventListener('mouseup', fmouseup);

function fmouseup(event){
    let img2 = document.createElement('img');
    img2.setAttribute('src', 'biohazard.png');
    img2.setAttribute('width', '60px');
    img2.setAttribute('height', '60px');
    img2.style.position = 'fixed';
    img2.style.left = event.pageX - 30 + 'px';
    img2.style.top = event.pageY - 30 + 'px';
    document.body.appendChild(img2);
    console.log('ok');
    
}
