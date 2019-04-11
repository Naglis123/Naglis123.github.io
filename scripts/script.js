
///naujas var
window.addEventListener("scroll", function (e){
	var offset = window.pageYOffset;
	const background = document.querySelector('.banner');
	background.style.backgroundPositionY = - (offset * 0.6) + 'px';
	//console.log(- (offset * 0.6) + 'px');
})



var parallax = document.querySelector(".whoisbg");

/*window.addEventListener("scroll", function() {
    var scrolledHeight = window.pageYOffset;
    limit = parallax.offsetTop + parallax.offsetHeight;
    if(scrolledHeight > parallax.offsetTop && scrolledHeight <= limit) {
        parallax.style.backgroundPositionY = (scrolledHeight - parallax.offsetTop) / 60 + "px";
    } 
    else {
        parallax.style.backgroundPositionY = "0";
    }
});*/

window.addEventListener("scroll", function() {
    var scrolledHeight = window.pageYOffset;
    limit = parallax.offsetTop + parallax.offsetHeight;
    if(scrolledHeight > parallax.offsetTop && scrolledHeight <= limit) {
        parallax.style.backgroundPositionY = (scrolledHeight - parallax.offsetTop) / 200 + "px";
    } 
    else {
        parallax.style.backgroundPositionY = "0";
    }
});


///////////////////////////////////////porfolio

let filtrai = document.querySelectorAll('.portNavLiA');

for (let i = 0; i < filtrai.length; i++){
	filtrai[i].addEventListener("click", function(e){
		e.preventDefault();


		let ccc = document.querySelectorAll('.box');


			for (let j = 0; j < ccc.length; j++){
//console.log(this.dataset.photoType + " != " + ccc[j].dataset.photoType + " && " + this.dataset.photoType +" != all");
			
				if (this.dataset.photoType != ccc[j].dataset.photoType && this.dataset.photoType != "all") {
					ccc[j].classList.add("paslepta");
				}else {
					ccc[j].classList.remove("paslepta");
				}

			}
			                      
	});
}

////////////////burger
$(document).ready(function(){
	$('.burger').click(function(){
		$('.mainNavfixed').toggleClass('show');
	});
});

//////////////////////
$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        window.location.hash = hash;
      });
    } 
  });
});