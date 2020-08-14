// Procurar o botão 
document.querySelector("#add-time")
// Quando clicar no botão
.addEventListener('click', cloneField)
// Executar ação
function cloneField(){
    // Duplicar os campos. Quais?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //Limpar os campos
    const fields = newFieldContainer.querySelectorAll('input')

    //Para cada campo, limpar

    fields.forEach(function(field) {
        // Pegar o field do momento
        field.value = ""
    })

    // Colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}