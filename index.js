function adicionarTarefa() {
    const input = document.getElementById('inputTarefa');
    const textoTarefa = input.value.trim();

    // Lógica para não adicionar tarefas em branco
    if (textoTarefa === '') {
        alert('Por favor, digite uma tarefa!');
        return;
    }

    // Seleciona a lista no HTML
    const lista = document.getElementById('listaTarefas');

    // Cria um novo item de lista (li)
    const novaTarefa = document.createElement('li');
    novaTarefa.textContent = textoTarefa;

    // Adiciona o novo item dentro da lista (ul)
    lista.appendChild(novaTarefa);

    // Limpa o campo de entrada
    input.value = '';
    input.focus();
}