var options = {
	hotkeys:{
		enabled: true
	},
	icon: {
		circular: true,
		img: 'accessibility'
	},
	statement : {
		enabled: true,
		url: 'https://joomla.org/'
	},
	feedback : {
		enabled: true,
		url: 'https://joomla.org/'
	}
}

window.addEventListener('load', function () { new Accessibility(options); }, false);