const PrimaryTheme = {
	font: {
		family: "'Trebuchet MS', Arial, sans-serif",
		size: {
			default: '16px',
			title: {
				xs: '34px',
				md: '40px',
				lg: '54px'
			},
			section: {
				title: {
					xs: '22px',
					md: '28px',
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
				xs: '34px',
				md: '50px',
				xl: '60px'
			},
			section: {
				title: {
					xs: '32px',
					md: '32px',
					lg: '32px',
				}
			},
			button: {
				xs: '22px',
				md: '22px',
			},
		}
	},
	colors: {
		primary: '#054664',
		primaryLight: '#707070',
		text: '#4c4c4c',
		button: {
			primary: '#fff',
			secondary: '#0068E6'
		},
		title: '#fff',
		header: '#fff',
		input: '#707070',
		label: '#707070'
	},
	background: {
		default: '#fff',
		header: '#054664',
		button: {
			default: 'linear-gradient(to bottom,#96fa14 0%,#0ae61e 50%,#0ae61e 100%)',
			hover: 'linear-gradient(to bottom,#0ae61e 0%,#0ae61e 50%,#96fa14 100%)',
			secondary: '#fff',
			secondaryHover: '#fff'
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
			xs: '127px'
		},
		height: {
			xs: '18px'
		},
		filename: '#logo'
	},
	header: {
		height: {
			xs: '60px'
		}
	},
	button: {
		border: '1px solid rgba(0,0,0,0.1)',
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