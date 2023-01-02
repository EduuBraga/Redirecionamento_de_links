const buttonsDeleteLink = document.querySelectorAll('.delete_link')

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
}

buttonsDeleteLink.forEach(button => {
  button.addEventListener('click', deleteLink)
});