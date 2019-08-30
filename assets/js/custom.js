'use strict';

(function() {
	setupTippy()

	function setupTippy() {
		let links = document.querySelectorAll('a:not(.no-tooltip)')

		for (var i = links.length - 1; i >= 0; i--) {
			tippy(links[i], {
				content: links[i].getAttribute('href')
			})
			console.log(links[i])
		}
	}
})();