const deleteLink = async id => {
  const res = await fetch(`/${id}`, { method: 'DELETE' })

  if (res.ok) {
    const elementClicked = document.getElementById(id)
    elementClicked.remove()
  } else {
    const objError = await res.json()
    alert(objError.message)
  }
}