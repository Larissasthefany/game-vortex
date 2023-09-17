let catalogoDeJogos = [
    {
        nome: 'Resident Evil 2',
        preco: 'de graça',
        gratuito: true,
        emPromocao: false,
        imagem: './src/img/re2.jpg'
    },

    {
        nome: 'Resident Evil 3',
        preco: 'de graça',
        gratuito: true,
        emPromocao: false,
        imagem: './src/img/re3.jpg'
    },

    {
        nome: 'Resident Evil 4',
        preco: 159.00,
        gratuito: false,
        emPromocao: true,
        imagem: './src/img/re4.jpg',
    },

    {
        nome: 'Resident Evil Village',
        preco: 250.00,
        gratuito: false,
        emPromocao: false,
        imagem: './src/img/village.jpg',
    },

    {
        nome: 'Silent Hill',
        preco: 39.00,
        gratuito: false,
        emPromocao: true,
        imagem: './src/img/silent.jpg'
    }, 

    {
        nome: 'The Evil Within 2',
        preco: 134.00,
        gratuito: false,
        emPromocao: false,
        imagem: './src/img/the-evil.jpg'
    },

    {
        nome: 'Forza Horizon 5',
        preco: 200.00,
        gratuito: false,
        emPromocao: false,
        imagem: './src/img/forza.jpg'
    },

    {
        nome: 'Erica',
        preco: 56.00,
        gratuito: false,
        emPromocao: false, 
        imagem: './src/img/erica.jpg'
    }


];

const filtroForm = document.getElementById('filtro-form');
const imagemDoJogo = document.querySelector('.imagem-jogo img')
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
        const img = document.createElement('img');
        img.src = jogo.imagem;
        img.alt = jogo.nome;

        img.classList.add('imagem-jogo');
        const p = document.createElement('p');

        if (jogo.gratuito) {
            p.textContent = `${jogo.nome}  `;
            const gratisText = document.createElement('span');
            gratisText.textContent = 'de graça!';
            gratisText.classList.add('gratis');
            p.appendChild(gratisText);
        } else {
            p.textContent = `${jogo.nome}`
            const precoItem = document.createElement('p')
            precoItem.textContent = `R$${jogo.preco.toFixed(2)}`
            precoItem.classList.add('precos');
            p.appendChild(precoItem);
        }

        li.appendChild(img);
        li.appendChild(p);
        listaDeJogos.append(li);
    });
}

filtroForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const filtroSelecionado = filtroForm.elements.filtroJogos.value;
    exibirJogos(filtroSelecionado);
});

exibirJogos('todos');
