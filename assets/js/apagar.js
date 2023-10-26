const botoes = document.querySelectorAll(".btn-apagar")


function apagar(id){
    console.log("Apagar tarefa", id)
    //buscar os dados do localstorage
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    //remover a tarefa
    const tarefas_filtradas = tarefas.filter(tarefa => tarefa.id !== id)
    //salvar o localstorage
    localStorage.setItem("tarefas", JSON.stringify(tarefas_filtradas))
    atualizar()
    calcularEstatistica()
}