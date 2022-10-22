var options = {
	hotkeys:{
		enabled: true
	},
	icon: {
		circular: true,
		useEmojis: true
	}
}

window.addEventListener('load', function () { new Accessibility(options); }, false);