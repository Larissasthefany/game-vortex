let catalogoDeJogos = [
    {
        nome: 'Resident Evil 4',
        preco: 159.00,
        gratuito: false,
        emPromocao: true,
        imagem: '../img/re4.jpg',
    },

    {
        nome: 'Resident Evil Village',
        preco: 250.00,
        gratuito: false,
        emPromocao: false,
        imagem: '../img/village.jpg',
    },

    {
        nome: 'Resident Evil 3',
        preco: 0,
        gratuito: true,
        emPromocao: false,
        imagem: '../img/re3.jpg'
    }
];

const filtroForm = document.getElementById('filtro-form');
const imagemDoJogo = document.querySelector('#imagem-jogo img')
const listaDeJogos = document.getElementById('lista-de-jogos');
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

function exibirJogos(filtroSelecionado) {
    listaDeJogos.innerHTML = '';

    let jogosFiltrados;

    if (filtroSelecionado === 'todos') {
        jogosFiltrados = catalogoDeJogos;

    } else if (filtroSelecionado === 'emPromocao') {
        jogosFiltrados = catalogoDeJogos.filter(jogos => jogos.emPromocao === true);

    } else if (filtroSelecionado === 'gratuito') {
        jogosFiltrados = catalogoDeJogos.filter(jogos => jogos.gratuito === true)
    }

    jogosFiltrados.forEach(jogo => {
        const li = document.createElement('li');
        li.textContent = `${jogo.nome} - preço R$${jogo.preco}`;
        li.addEventListener('click', () => exibirDetalhesDoJogo(jogo));
        listaDeJogos.appendChild(li);
    });
}

function exibirDetalhesDoJogo(jogo) {
    const imagemDoJogo = document.querySelector('#imagem-jogo img');
    imagemDoJogo.src = jogo.imagem;
    imagemDoJogo.alt = jogo.nome;
}

filtroForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const filtroSelecionado = filtroForm.elements.filtroJogos.value;
    exibirJogos(filtroSelecionado);
});

exibirJogos('todos');
