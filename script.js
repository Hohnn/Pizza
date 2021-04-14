const cardTitle = document.querySelectorAll('.card-title')
const button = document.querySelectorAll('.trigger')
const modal = document.getElementById('modal')
console.log(cardTitle)
for (let i = 0; i < cardTitle.length; i++) {
    button[i].addEventListener('click', () => {
        modal.innerHTML = 'Votre Pizza ' + cardTitle[i].innerHTML + ' a bien été ajoutée'
    })
}