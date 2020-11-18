let theCompany = JSON.parse(sessionStorage.getItem('company'))

const setLogo = (logo) => {
	const theLogo = theCompany.secondaryLogo
	const logoSpace = document.getElementById('nav-logo')
	const imageLogo = document.createElement('img')
	imageLogo.src = theLogo
	logoSpace.appendChild(imageLogo)
	const theNav = document.querySelector('.desktop-nav')
	if (window.scrollY >= 100) {
		theNav.classList.add('scrolled')
	} else {
		theNav.classList.remove('scrolled')
	}
}

const setNav = () => {
	const facebook = theCompany.facebook
	const twitter = theCompany.twitter
	const linkedin = theCompany.linkedin
	const instagram = theCompany.instagram
	let theRrss = []

	const buttonGroup = document.querySelector('.rrss-buttons')

	facebook && theRrss.push(facebook)
	instagram && theRrss.push(instagram)
	linkedin && theRrss.push(linkedin)
	twitter && theRrss.push(twitter)

	theRrss.map((elm) => {
		let rsBtn = document.createElement('a')
		rsBtn.href = elm
		rsBtn.classList.add('rrss-icon')
		elm.includes('facebook') && rsBtn.classList.add('facebook-btn')
		elm.includes('twitter') && rsBtn.classList.add('twitter-btn')
		elm.includes('instagram') && rsBtn.classList.add('instagram-btn')
		elm.includes('linkedin') && rsBtn.classList.add('linkedin-btn')

		buttonGroup.appendChild(rsBtn)
	})
}
export { setNav, setLogo }
