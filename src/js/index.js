const btnmostrarprojetos = document.querySelector('.btn-mostrar-projetos');
const projetosinativos = document.querySelectorAll('.projeto:not(.ativo)');

btnmostrarprojetos.addEventListener('click', () => {
    projetosinativos.forEach(projetoinativo =>{
        projetoinativo.classList.add('ativo');
    });
    btnmostrarprojetos.classList.add("remover")
});