for (let i = 0; i<9; i++) {
    document.getElementById('game').innerHTML += '<div class="block"></div>'
}
    let step = 0;
document.getElementById('game').onclick = (event) => {
    if (event.target.className == "block") {

        if(step % 2 == 0) {   
            event.target.innerHTML = 'x'; 
        } else {
            event.target.innerHTML = '0';
        }
        checkWinner();
        step++;     
    }
}

function checkWinner() {
    let allBloc = document.querySelectorAll('.block')

    if(allBloc[0].innerHTML == 'x'  && allBloc[1].innerHTML == 'x' && allBloc[2].innerHTML =='x') alert('WIN x');
    if(allBloc[3].innerHTML == 'x'  && allBloc[4].innerHTML == 'x' && allBloc[5].innerHTML =='x') alert('WIN x');
    if(allBloc[6].innerHTML == 'x'  && allBloc[7].innerHTML == 'x' && allBloc[8].innerHTML =='x') alert('WIN x'); 
    if(allBloc[0].innerHTML == 'x'  && allBloc[3].innerHTML == 'x' && allBloc[6].innerHTML =='x') alert('WIN x');
    if(allBloc[1].innerHTML == 'x'  && allBloc[4].innerHTML == 'x' && allBloc[7].innerHTML =='x') alert('WIN x');
    if(allBloc[2].innerHTML == 'x'  && allBloc[5].innerHTML == 'x' && allBloc[8].innerHTML =='x') alert('WIN x');
    // 
    if(allBloc[0].innerHTML == '0'  && allBloc[1].innerHTML == '0' && allBloc[2].innerHTML =='0') alert('WIN 0');
    if(allBloc[3].innerHTML == '0'  && allBloc[4].innerHTML == '0' && allBloc[5].innerHTML =='0') alert('WIN 0');
    if(allBloc[6].innerHTML == '0'  && allBloc[7].innerHTML == '0' && allBloc[8].innerHTML =='0') alert('WIN 0'); 
    if(allBloc[0].innerHTML == '0'  && allBloc[3].innerHTML == '0' && allBloc[6].innerHTML =='0') alert('WIN 0');
    if(allBloc[1].innerHTML == '0'  && allBloc[4].innerHTML == '0' && allBloc[7].innerHTML =='0') alert('WIN 0');
    if(allBloc[2].innerHTML == '0'  && allBloc[5].innerHTML == '0' && allBloc[8].innerHTML =='0') alert('WIN 0');
};