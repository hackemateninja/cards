export default async function personHandler({ query: { name } }, res) {
	let response: any;
	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	switch(name) {
		case ('acura'):
			return response = import('@data/models/acura').then(function (data) { res.json(data.models) });
		case ('alfa-romeo'):
			return response = import('@data/models/alfa-romeo').then(function (data) { res.json(data.models) });
		case ('am-general'):
			return response = import('@data/models/am-general').then(function (data) { res.json(data.models) });
		case ('aston-martin'):
			return response = import('@data/models/aston-martin').then(function (data) { res.json(data.models) });
		case ('audi'):
			return response = import('@data/models/audi').then(function (data) { res.json(data.models) });
		case ('bentley'):
			return response = import('@data/models/bentley').then(function (data) { res.json(data.models) });
		case ('bmw'):
			return response = import('@data/models/bmw').then(function (data) { res.json(data.models) });
		case ('bugatti'):
			return response = import('@data/models/bugatti').then(function (data) { res.json(data.models) });
		case ('buick'):
			return response = import('@data/models/buick').then(function (data) { res.json(data.models) });
		case ('cadillac'):
			return response = import('@data/models/cadillac').then(function (data) { res.json(data.models) });
		case ('chevrolet'):
			return response = import('@data/models/chevrolet').then(function (data) { res.json(data.models) });
		case ('chrysler'):
			return response = import('@data/models/chrysler').then(function (data) { res.json(data.models) });
		case ('daewoo'):
			return response = import('@data/models/daewoo').then(function (data) { res.json(data.models) });
		case ('dodge'):
			return response = import('@data/models/dodge').then(function (data) { res.json(data.models) });
		case ('ferrari'):
			return response = import('@data/models/ferrari').then(function (data) { res.json(data.models) });
		case ('fiat'):
			return response = import('@data/models/fiat').then(function (data) { res.json(data.models) });
		case ('fisker'):
			return response = import('@data/models/fisker').then(function (data) { res.json(data.models) });
		case ('ford'):
			return response = import('@data/models/ford').then(function (data) { res.json(data.models) });
		case ('genesis'):
			return response = import('@data/models/genesis').then(function (data) { res.json(data.models) });
		case ('gmc'):
			return response = import('@data/models/gmc').then(function (data) { res.json(data.models) });
		case ('honda'):
			return response = import('@data/models/honda').then(function (data) { res.json(data.models) });
		case ('hummer'):
			return response = import('@data/models/hummer').then(function (data) { res.json(data.models) });
		case ('hyundai'):
			return response = import('@data/models/hyundai').then(function (data) { res.json(data.models) });
		case ('infiniti'):
			return response = import('@data/models/infiniti').then(function (data) { res.json(data.models) });
		case ('isuzu'):
			return response = import('@data/models/isuzu').then(function (data) { res.json(data.models) });
		case ('jaguar'):
			return response = import('@data/models/jaguar').then(function (data) { res.json(data.models) });
		case ('jeep'):
			return response = import('@data/models/jeep').then(function (data) { res.json(data.models) });
		case ('kia'):
			return response = import('@data/models/kia').then(function (data) { res.json(data.models) });
		case ('lamborghini'):
			return response = import('@data/models/lamborghini').then(function (data) { res.json(data.models) });
		case ('land-rover'):
			return response = import('@data/models/land-rover').then(function (data) { res.json(data.models) });
		case ('lexus'):
			return response = import('@data/models/lexus').then(function (data) { res.json(data.models) });
		case ('lincoln'):
			return response = import('@data/models/lincoln').then(function (data) { res.json(data.models) });
		case ('lotus'):
			return response = import('@data/models/lotus').then(function (data) { res.json(data.models) });
		case ('maserati'):
			return response = import('@data/models/maserati').then(function (data) { res.json(data.models) });
		case ('maybach'):
			return response = import('@data/models/maybach').then(function (data) { res.json(data.models) });
		case ('mazda'):
			return response = import('@data/models/mazda').then(function (data) { res.json(data.models) });
		case ('mclaren'):
			return response = import('@data/models/mclaren').then(function (data) { res.json(data.models) });
		case ('mercedes-benz'):
			return response = import('@data/models/mercedes-benz').then(function (data) { res.json(data.models) });
		case ('mercury'):
			return response = import('@data/models/mercury').then(function (data) { res.json(data.models) });
		case ('mini'):
			return response = import('@data/models/mini').then(function (data) { res.json(data.models) });
		case ('mitsubishi'):
			return response = import('@data/models/mitsubishi').then(function (data) { res.json(data.models) });
		case ('nissan'):
			return response = import('@data/models/nissan').then(function (data) { res.json(data.models) });
		case ('oldsmobile'):
			return response = import('@data/models/oldsmobile').then(function (data) { res.json(data.models) });
		case ('panoz'):
			return response = import('@data/models/panoz').then(function (data) { res.json(data.models) });
		case ('plymouth'):
			return response = import('@data/models/plymouth').then(function (data) { res.json(data.models) });
		case ('pontiac'):
			return response = import('@data/models/pontiac').then(function (data) { res.json(data.models) });
		case ('porsche'):
			return response = import('@data/models/porsche').then(function (data) { res.json(data.models) });
		case ('ram'):
			return response = import('@data/models/ram').then(function (data) { res.json(data.models) });
		case ('rolls-royce'):
			return response = import('@data/models/rolls-royce').then(function (data) { res.json(data.models) });
		case ('saab'):
			return response = import('@data/models/saab').then(function (data) { res.json(data.models) });
		case ('saturn'):
			return response = import('@data/models/saturn').then(function (data) { res.json(data.models) });
		case ('scion'):
			return response = import('@data/models/scion').then(function (data) { res.json(data.models) });
		case ('smart'):
			return response = import('@data/models/smart').then(function (data) { res.json(data.models) });
		case ('srt'):
			return response = import('@data/models/srt').then(function (data) { res.json(data.models) });
		case ('subaru'):
			return response = import('@data/models/subaru').then(function (data) { res.json(data.models) });
		case ('suzuki'):
			return response = import('@data/models/suzuki').then(function (data) { res.json(data.models) });
		case ('tesla'):
			return response = import('@data/models/tesla').then(function (data) { res.json(data.models) });
		case ('toyota'):
			return response = import('@data/models/toyota').then(function (data) { res.json(data.models) });
		case ('volkswagen'):
			return response = import('@data/models/volkswagen').then(function (data) { res.json(data.models) });
		case ('volvo'):
			return response = import('@data/models/volvo').then(function(data) {res.json(data.models)});
		default:
			return res.json('Make not found');
	}
}