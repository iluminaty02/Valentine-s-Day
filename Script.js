
// Dicionário mapeando os IDs dos envelopes com as frases dedicadas ao Arthur
const mensagens = {
    1: "seu sorriso",
    2: "seus olhos",
    3: "o apoio que você me dá",
    4: "a sua paciência",
    5: "o jeito que vc me trata e como faz me sentir",
    6: "como eres engraçado",
    7: "como você se dedica e c esforça",
    8: "a forma em que voce me entende",
    9: "da forma em que me olha",
    10: "da forma que me ama 💗"
};

// Seleção de elementos do DOM
const modal = document.getElementById('envelopeModal');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
const closeBtn = document.getElementById('closeModalBtn');
const envelopes = document.querySelectorAll('.envelope');

// Adiciona evento de clique em todos os envelopes mapeados
envelopes.forEach(envelope => {
    envelope.addEventListener('click', () => {
        const id = envelope.getAttribute('data-id');
        abrirModal(id);
    });
});

// Função para exibir o modal preenchido com a mensagem correta
function abrirModal(id) {
    modalTitle.innerText = `O que eu amo em você nº ${id}`;
    modalText.innerText = mensagens[id];
    modal.style.display = 'flex';
}

// Função para fechar o modal
function fecharModal() {
    modal.style.display = 'none';
}

// Fechamento pelo botão interno
closeBtn.addEventListener('click', fecharModal);

// Fecha a janela se o usuário clicar em qualquer área fora do quadrado branco
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        fecharModal();
    }
});
