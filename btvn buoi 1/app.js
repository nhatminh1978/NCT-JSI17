const url = 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=Vietnam';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a1161f2c11msh5d466b1aee60b35p1cf74ajsn437a3b5e66c8',
		'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}