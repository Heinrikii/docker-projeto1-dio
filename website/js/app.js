/**************StarWars******************/
function iniciaModal(modalID) {
    const modal = document.getElementById(modalID);
    if (modal) {
        modal.classList.add('mostrar-wars');
        modal.addEventListener('click', (eWars) => {
            if (eWars.target.id == modalID || eWars.target.className == 'fechar') {
                modal.classList.remove('mostrar-wars');
            }
        });
    }
}
const logo = document.querySelector('.cabecalho-menu-item-starWars')
logo.addEventListener('click', () => iniciaModal('modal-star-wars'));

/**************WarHammer******************/
function iniciaModalHammer(modalIDHammer) {
    const modalHammer = document.getElementById(modalIDHammer);
    if (modalHammer) {
        modalHammer.classList.add('mostrarHammer');
        modalHammer.addEventListener('click', (eHammer) => {
            if (eHammer.target.id == modalIDHammer || eHammer.target.className == 'fecharHammer') {
                modalHammer.classList.remove('mostrarHammer');
            }
        });
    }
}
const logoHammer = document.querySelector('.cabecalho-menu-item-warHammer')
logoHammer.addEventListener('click', () => iniciaModalHammer('modal-warHammer'));

/**************StarTrek******************/

function iniciaModalTrek(modalIDTrek) {
    const modalTrek = document.getElementById(modalIDTrek);
    if (modalTrek) {
        modalTrek.classList.add('mostrarTrek');
        modalTrek.addEventListener('click', (eTrek) => {
            if (eTrek.target.id == modalIDTrek || eTrek.target.className == 'fecharTrek') {
                modalTrek.classList.remove('mostrarTrek');
            }
        });
    }
}
const logoTrek = document.querySelector('.cabecalho-menu-item-starTrek')
logoTrek.addEventListener('click', () => iniciaModalTrek('modal-starTrek'));

/**************Marvel******************/
function iniciaModalMarvel(modalIDMarvel) {
    const modalMarvel = document.getElementById(modalIDMarvel);
    if (modalMarvel) {
        modalMarvel.classList.add('mostrarMarvel');
        modalMarvel.addEventListener('click', (eMarvel) => {
            if (eMarvel.target.id == modalIDMarvel || eMarvel.target.className == 'fecharMarvel') {
                modalMarvel.classList.remove('mostrarMarvel');
            }
        });
    }
}
const logoMarvel = document.querySelector('.cabecalho-menu-item-marvel')
logoMarvel.addEventListener('click', () => iniciaModalMarvel('modal-tMarvel'));

/**************DC Comics******************/
function iniciaModalDComics(modalIDDComics) {
    const modalDComics = document.getElementById(modalIDDComics);
    if (modalDComics) {
        modalDComics.classList.add('mostrarDComics');
        modalDComics.addEventListener('click', (eDComics) => {
            if (eDComics.target.id == modalIDDComics || eDComics.target.className == 'fecharDComics') {
                modalDComics.classList.remove('mostrarDComics');
            }
        });
    }
}
const logoDComics = document.querySelector('.cabecalho-menu-item-dComics')
logoDComics.addEventListener('click', () => iniciaModalDComics('modal-tDComics'));

