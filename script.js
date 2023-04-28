const nome = prompt('Qual seu nome?')

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
    tshirt = document.getElementById('span1'),
    camiseta = document.getElementById('span2'),
    mangaLonga = document.getElementById('span3'),

    golaV = document.getElementById('span4'),
    golaRedonda = document.getElementById('span5'),
    golaPolo = document.getElementById('span6'),

    Seda = document.getElementById('span7'),
    Algodao = document.getElementById('span8'),
    Poliester = document.getElementById('span9')
];

let button = document.getElementById('btn');

const link = document.getElementById('link');

spans.forEach(span => {
    span.addEventListener('click', () => {
        const modelo = [tshirt, camiseta, mangaLonga].some(span => span.classList.contains('selecionado'));
        const gola = [golaV, golaRedonda, golaPolo].some(span => span.classList.contains('selecionado'));
        const material = [Seda, Algodao, Poliester].some(span => span.classList.contains('selecionado'));

        // função auxiliar para verificar se uma string é uma URL válida

        function isURL(str) {
            let pattern = /^(ftp|http|https):\/\/[^ "]+$/;
            return pattern.test(str);
        }

        link.addEventListener('input', () => {
            if (isURL(link.value) && modelo && gola && material) {
                button.style.backgroundColor = '#404EED';
                button.style.cursor = 'pointer';
            }
        });

        span.classList.toggle('selecionado');

    });
});

let model = '';
let neck = '';
let material = '';

button.addEventListener('click', () => {
    axios.post('https://mock-api.driven.com.br/api/v4/shirts-api/shirts', {
        model: 't-shirt',
        neck: 'v-neck',
        material: 'cotton',
        image: 'https://www.google.com.br',
        owner: nome,
        author: nome
    })
        .then(response => {
            if (response.status === 200) {
                alert('Encomenda realizada com sucesso!');
            } else {
                throw new Error('Ops, não conseguimos processar sua encomenda.');
            }
        })
        .catch(error => {
            alert(error.message);
        });
});


axios.get('https://mock-api.driven.com.br/api/v4/shirts-api/shirts')
    .then(response => {
        const data = response.data;
        console.log(data);
        // fazer algo com os dados retornados
    })
    .catch(error => {
        console.log(error);
    });