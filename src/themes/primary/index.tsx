const PrimaryTheme = {
	font: {
		family: "'Trebuchet MS', Arial, sans-serif",
		size: {
			default: '16px',
			title: {
				xs: '36px',
				md: '36px',
				lg: '52px'
			},
			section: {
				title: {
					xs: '28px',
					md: '28px',
					lg: '28px',
				}
			},
			button: {
				xs: '18px',
				md: '18px',
			},
		},
		weight: {
			default: 'normal',
			title: '700',
			section: {
				title: '700'
			},
			button: '700'
		},
		lineHeight: {
			default: '24px',
			title: {
				xs: '38px',
				md: '38px',
				lg: '56px'
			},
			section: {
				title: {
					xs: '30px',
					md: '30px',
					lg: '30px',
				}
			},
			button: {
				xs: '22px',
				md: '22px',
			},
		}
	},
	colors: {
		primary: '#112436',
		primaryLight: '#698091',
		text: '#989898',
		button: {
			primary: '#fff',
			secondary: '#0068E6'
		},
		title: '#fff',
		header: '#698091',
		input: '#989898',
		label: '#989898'
	},
	background: {
		default: '#fff',
		header: '#112436',
		badge: '#E67E00',
		button: {
			default: '#75CC00',
			hover: 'linear-gradient( 90deg,#75CC00 0, #69b800 100% )',
			secondary: '#E1EAEF',
			secondaryHover: 'linear-gradient( 90deg,#E1EAEF 0, #d1d9de 100% )'
		},
		input: {
			default: '#fff',
		},
	},
	container: {
		sm: '100%',
		md: '740px',
		lg: '990px',
		xl: '1200px'
	},
	logo: {
		width: {
			xs: '60px',
			md: '60px'
		},
		height: {
			xs: '27px',
			md: '27px'
		},
		filename: '#logo'
	},
	header: {
		height: {
			xs: '50px',
			md: '50px'
		}
	},
	button: {
		border: 'none',
		shadow: 'none'
	},
	input: {
		border: {
			default: '#fff',
			focus: '#016BFF',
			error: '#FF7864'
		},
		arrow: {
			default: '#0068E6',
			focus: '#0068E6'
		},
		shadow: 'none'
	}
};

export default PrimaryTheme;