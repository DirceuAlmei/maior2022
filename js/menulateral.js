let btnMobile = document.querySelector('.btn-mobile');
let navigation = document.querySelector('.navigation')
btnMobile.onclick = function(){
    btnMobile.classList.toggle('active')
    navigation.classList.toggle('active')
}


let lista = document.querySelectorAll('.list');
for(let ilma=0; ilma<lista.length; ilma++){
    lista[ilma].onclick = function(){
        let dirceu = 0;
        while(dirceu < lista.length){
            lista[dirceu++].className = 'list'
        }
        lista[ilma].className = 'list active'
    }
}
