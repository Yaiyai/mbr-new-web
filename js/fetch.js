let baseURL = 'https://mbr-cms.herokuapp.com/api/'

const fetchMaquinas = async () => {
	await fetch(`${baseURL}maquinaria`)
		.then((data) => data.json())
		.then((data) => sessionStorage.setItem('maquinas', JSON.stringify(data.data)))
		.catch((err) => console.log(err))
}

const fetchCompany = async () => {
	await fetch(`${baseURL}company`)
		.then((data) => data.json())
		.then((data) => sessionStorage.setItem('company', JSON.stringify(data.company[0])))
		.catch((err) => console.log(err))
}

export { fetchMaquinas, fetchCompany }
