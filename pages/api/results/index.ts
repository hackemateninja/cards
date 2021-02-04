export default function handler(req, res) {
    let response: any;
	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	return response = import('@data/srp').then(function (data) { res.json(data.results) });
}