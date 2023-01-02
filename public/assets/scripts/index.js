const buttonsDeleteLink = document.querySelectorAll('.delete_link');
const buttonOpenModal = document.querySelector('.open_modal');
const buttonCloseModal = document.querySelector('.img-close_modal');
const modal = document.querySelector('.container-modal-add');

const deleteLink = async event => {
  const parentElementClicked = event.target.parentElement;
  const idParentElement = parentElementClicked.parentElement.id;

  const res = await fetch(`/${idParentElement}`, { method: 'DELETE' });

  if (res.ok) {
    const elementClicked = document.getElementById(idParentElement);
    elementClicked.remove();
  } else {
    const objError = await res.json();
    alert(objError.message);
  }
};

const handleOpenModal = () => {
  modal.style = 'display: flex;';
};

const handleCloseModal = (event) => {
  const tagElementClicked = event.target.tagName;
  const tagsCloseModal = ['SECTION', 'IMG'];
  const modalCanClose = tagsCloseModal.includes(tagElementClicked);

  if (modalCanClose) {
    modal.style.display = 'none';
  }
};

buttonsDeleteLink.forEach(button => {
  button.addEventListener('click', deleteLink);
});

buttonOpenModal.addEventListener('click', handleOpenModal);

modal.addEventListener('click', handleCloseModal);