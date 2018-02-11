

const current = document.querySelector('#current')
const imgs = document.querySelectorAll('.imgs img')
const opacity = 0.45

//Set first thumbnail to have opacity
imgs[0].style.opacity = opacity

imgs.forEach(img =>
	img.addEventListener('click', imgClick))


function imgClick(e) {
// Reset the opacity
	imgs.forEach(img => (img.style.opacity = 1))

//Change image to thumbnail that was clicked
	current.src = e.target.src

//Add fadeIn class
	current.classList.add('fadeIn')

//Remove fadeIn class after .5 seconds
	setTimeout( () => current.classList.remove('fadeIn'), 500)

//Change the opacity to our thumbnail
	e.target.style.opacity = opacity


}