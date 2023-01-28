const tanah = document.querySelectorAll('.tanah');
const tikus = document.querySelectorAll('.tikus');
const papanskor = document.querySelector('.papanskor');
const pop = document.querySelector('#pop');

let tanahSebelum;
let selesai;
let skor;

function randomTanah(tanah){
    const R = Math.floor(Math.random() * tanah.length);
    const tRandom = tanah[R];
    if ( tRandom == tanahSebelum) {
        randomTanah(tanah);
    }
    tanahSebelum = tRandom;
    return tRandom;
}

function randomWaktu(min, max){
    return Math.round(Math.random() *(max-min) + min);
}

function munculTikus(){
    const tRandom = randomTanah(tanah);
    const wRandom = randomWaktu(300, 999);
    tRandom.classList.add('muncul');

    setTimeout(() => {
        tRandom.classList.remove('muncul');
        if(!selesai) { 
            munculTikus();
        }
    }, wRandom);
}

function mulai(){
    selesai = false;
    skor = 0;
    papanskor.textContent = 0;
    munculTikus();
    setTimeout(() => {
        selesai = true;
    }, 10000);
}

function pukul(){
    skor++;
    papanskor.textContent = skor;
    this.parentNode.classList.remove('muncul');
    this.style.transition = "TOP 0s";
    pop.play();
}

tikus.forEach(t => {
    t.addEventListener('click', pukul);
});