const openModal = document.querySelector('.openModal');
const modalWindow = document.querySelector('.modalWindow');
const closeModal = document.querySelector('.closeModal');

openModal.addEventListener('click', () => {
    modalWindow.classList.remove('hidden');
});

closeModal.addEventListener('click', () => {
    modalWindow.classList.add('hidden');
});




