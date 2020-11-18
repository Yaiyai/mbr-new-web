import { fetchMaquinas, fetchCompany } from './fetch.js'
import { setNav, setLogo } from './nav.js'

window.onload = async () => {
	await fetchMaquinas()
	await fetchCompany()
	await setNav()

	window.onscroll = () => {
		setLogo()
	}
}
