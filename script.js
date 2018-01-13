// Create cross browser requestAnimationFrame method:
window.requestAnimationFrame = window.requestAnimationFrame ||
window.mozRequestAnimationFrame ||
window.webkitRequestAnimationFrame ||
window.msRequestAnimationFrame ||
function(f){setTimeout(f, 1000/60)}

var bubble1 = document.getElementById('bubble1')
var bubble2 = document.getElementById('bubble2')
var fish = document.getElementById('fish')

// height of entire document
var scrollHeight = 	document.body.scrollHeight
// height of browser window
var windowHeight = window.innerHeight


function parallaxBubbles(){
  // get number of pixels document has scrolled vertically
	var scrollTop = window.pageYOffset
  // get amount scrolled (in %)
	var scrollAmount = (scrollTop / (scrollHeight-windowHeight)) * 100
  // move bubble1 at 20% of scroll speed
	bubble1.style.top = -scrollTop * .2 + 'px'
  // move bubble2 at 50% of scroll speed
	bubble2.style.top = -scrollTop * .5 + 'px'
  // move fish relative to scroll amount
	fish.style.left = -100 + scrollAmount + '%'
}

// on page scroll
window.addEventListener('scroll', function(){
  // call parallaxbubbles() on next available screen repaint
	requestAnimationFrame(parallaxBubbles)
}, false)

// on window resize
window.addEventListener('resize', function(){
  // get amount scrolled (in %)
	var scrollAmount = (scrollTop / (scrollHeight-windowHeight)) * 100
	fish.style.left = -100 + scrollAmount + '%'
}, false)
