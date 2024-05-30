function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
    }
    else{menuMobile.classList.add('open');
    }
}

/*======== Validação de Cadastro =========*/

const form = document.querySelector("#form");
const nameInput = document.querySelector("#nome");
const maternoInput = document.querySelector("#materno");

console.log(form, nameInput, maternoInput);

