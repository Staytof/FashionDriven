function tshirt1() {

    let cover1 = document.getElementById('cover1');
    let cover2 = document.getElementById('cover2');
    let cover3 = document.getElementById('cover3');

    cover1.style.display = 'block';
    cover2.style.display = 'none';
    cover3.style.display = 'none';

}

function tshirt2() {

    let cover1 = document.getElementById('cover1');
    let cover2 = document.getElementById('cover2');
    let cover3 = document.getElementById('cover3');

    cover1.style.display = 'none';
    cover2.style.display = 'block';
    cover3.style.display = 'none';

}

function tshirt3() {

    let cover1 = document.getElementById('cover1');
    let cover2 = document.getElementById('cover2');
    let cover3 = document.getElementById('cover3');

    cover1.style.display = 'none';
    cover2.style.display = 'none';
    cover3.style.display = 'block';

}

function tshirt4() {

    let cover4 = document.getElementById('cover4');
    let cover5 = document.getElementById('cover5');
    let cover6 = document.getElementById('cover6');

    cover4.style.display = 'block';
    cover5.style.display = 'none';
    cover6.style.display = 'none';

}

function tshirt5() {

    let cover4 = document.getElementById('cover4');
    let cover5 = document.getElementById('cover5');
    let cover6 = document.getElementById('cover6');

    cover4.style.display = 'none';
    cover5.style.display = 'block';
    cover6.style.display = 'none';

}

function tshirt6() {

    let cover4 = document.getElementById('cover4');
    let cover5 = document.getElementById('cover5');
    let cover6 = document.getElementById('cover6');

    cover4.style.display = 'none';
    cover5.style.display = 'none';
    cover6.style.display = 'block';

}

function tshirt7() {

    let cover7 = document.getElementById('cover7');
    let cover8 = document.getElementById('cover8');
    let cover9 = document.getElementById('cover9');

    cover7.style.display = 'block';
    cover8.style.display = 'none';
    cover9.style.display = 'none';

}

function tshirt8() {

    let cover7 = document.getElementById('cover7');
    let cover8 = document.getElementById('cover8');
    let cover9 = document.getElementById('cover9');

    cover7.style.display = 'none';
    cover8.style.display = 'block';
    cover9.style.display = 'none';

}

function tshirt9() {

    let cover7 = document.getElementById('cover7');
    let cover8 = document.getElementById('cover8');
    let cover9 = document.getElementById('cover9');

    cover7.style.display = 'none';
    cover8.style.display = 'none';
    cover9.style.display = 'block';

}

let fila1 = document.getElementById('fila1');
let fila2 = document.getElementById('fila2');
let fila3 = document.getElementById('fila3');

let button = document.getElementById('btn');

function checkAllSectionsSelected() {
    if (fila1.classList.contains("selected") &&
        fila2.classList.contains("selected") &&
        fila3.classList.contains("selected")) {
        button.style.backgroundColor = "#404EED";
        button.style.cursor = "pointer";
    }
}

fila1.addEventListener("click", function () {
    this.classList.toggle("selected");
    checkAllSectionsSelected();
});

fila2.addEventListener("click", function () {
    this.classList.toggle("selected");
    checkAllSectionsSelected();
});

fila3.addEventListener("click", function () {
    this.classList.toggle("selected");
    checkAllSectionsSelected();
});