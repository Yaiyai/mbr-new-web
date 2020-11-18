let baseURL = 'https://mbr-cms.herokuapp.com/api/'

window.onload = () => {
	fetchMaquinas()
	fetchCompany()
}

const fetchMaquinas = async () => {
	await fetch(`${baseURL}maquinaria`)
		.then((data) => data.json())
		.then((data) => localStorage.setItem('maquinas', JSON.stringify(data.data)))
		.catch((err) => console.log(err))
}
const fetchCompany = async () => {
	await fetch(`${baseURL}company`)
		.then((data) => data.json())
		.then((data) => localStorage.setItem('company', JSON.stringify(data.company[0])))
		.catch((err) => console.log(err))
}
