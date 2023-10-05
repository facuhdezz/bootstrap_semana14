const boton = document.getElementById('opciones');
const collapseButton = document.getElementById('collapseButton');
console.log(collapseButton);
const listGroup = document.getElementById('listGroup');
boton.addEventListener('click', () => {
    listGroup.classList.toggle('d-none');
});

collapseButton.addEventListener('click', () => {
    if (!(listGroup.classList.contains('d-none'))){
        listGroup.classList.add('d-none');
    }
});