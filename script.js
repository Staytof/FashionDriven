//const nome = prompt('Qual seu nome?')

//nome;

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

let spans = [
    span1 = document.getElementById('span1'),
    span2 = document.getElementById('span2'),
    span3 = document.getElementById('span3'),

    span4 = document.getElementById('span4'),
    span5 = document.getElementById('span5'),
    span6 = document.getElementById('span6'),

    span7 = document.getElementById('span7'),
    span8 = document.getElementById('span8'),
    span9 = document.getElementById('span9')
];

let button = document.getElementById('btn');

let link = document.getElementById('link');


spans.forEach(span => {
    span.addEventListener('click', () => {
        let linha1 = [span1, span2, span3].some(span => span.classList.contains('selecionado'));
        let linha2 = [span4, span5, span6].some(span => span.classList.contains('selecionado'));
        let linha3 = [span7, span8, span9].some(span => span.classList.contains('selecionado'));

        // função auxiliar para verificar se uma string é uma URL válida
        function isURL(str) {
            let pattern = /^(ftp|http|https):\/\/[^ "]+$/;
            return pattern.test(str);
        }

        link.addEventListener('input', () => {
            if (isURL(link.value) && linha1 && linha2 && linha3) {
                button.style.backgroundColor = '#404EED';
                button.style.cursor = 'pointer';
            }
        });

        span.classList.toggle('selecionado');
    });
});