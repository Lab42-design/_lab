/**
 * 
 * 
 * 
 */



// document ready
function ready(callbackFunc)
{
    console.log('----- callbackFunc');
    if (document.readyState !== 'loading') {
        // Document is already ready, call the callback directly
        callbackFunc();

    } else if (document.addEventListener) {
        // All modern browsers to register DOMContentLoaded
        document.addEventListener('DOMContentLoaded', callbackFunc);

    } else {
        // Old IE browsers
        document.attachEvent('onreadystatechange', function() {
            if (document.readyState === 'complete') {
                callbackFunc();
            }
        });
    }

}

var domReady = function(callback) {
    console.log('----- domReady');
    document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
};



// select all ul elements
let elements = document.querySelectorAll( 'ul' ); // '.classname'

// hide elements
document.querySelectorAll('ul').forEach(function(tag) {
    tag.classList.add('hide');
});


//
function imageListHover()
{
    // let elements = document.querySelectorAll( 'ul' ); // '.classname'
    console.log('----- imageListHover');
    for ( let element of elements )
    {
        elementHover( element );
    }
 
    function mousemoveHandler( event )
    {
        this.classList.add('show');
        this.classList.remove('hide');
    }
 
    function mouseleaveHandler()
    {
        this.classList.remove('show');
        this.classList.add('hide');
    }
 
    function elementHover( element )
    {
        element.addEventListener( 'mousemove', mousemoveHandler );
        element.addEventListener( 'mouseleave', mouseleaveHandler );
    }
}



// dom is ready
domReady(function()
{
    console.log('----- domReady');
    // Your code here

    // remove class with js, as we have js enabled
    let theClassList = document.querySelector("body");
    theClassList.classList.replace('nojs', 'js');
    // theClassList.add('firstClass');
    // theClassList.remove('secondClass');
    // theClassList.toggle('thirdClass');

    //
    imageListHover();
});



//
ready(function()
{
    //
});





function show(elem) {   
    console.log('----- show');
    var p = document.getElementsByClassName("hidden");
    if (p[elem] != undefined) {
        if (p[elem].style.display == "none") {
            p[elem].style.display = "block";
        } else {
            p[elem].style.display = "none";
        }
    }
}
  
  





// document.getElementsByTagName("body").style.display="none";














// Setup a timer
var timeout;

// Listen for resize events
window.addEventListener('resize', function ( event ) {
    console.log( 'no debounce' );
    // document.getElementById("container").style.opacity = "0"; 

	// If timer is null, reset it to 66ms and run your functions.
	// Otherwise, wait until timer is cleared
	if ( !timeout ) {
		timeout = setTimeout(function() {

			// Reset timeout
			timeout = null;

            // Run our resize functions
            // document.getElementById("container").style.opacity = "1"; 
			console.log( 'debounced' );

		}, 500);
	}
}, false);