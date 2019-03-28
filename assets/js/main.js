window.onload = function() {
	lax.setup() // init
	  
	document.addEventListener('scroll', function(e) {
	  lax.update(window.scrollY) // update every scroll
	}, false)

	var bLazy = new Blazy() //bLazy init
}