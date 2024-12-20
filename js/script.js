window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.Header__Nav');
  const menuItem = document.querySelectorAll('.Header__Menu');
  const hamburger = document.querySelector('.Header__Hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('Header__Hamburger__Active');
      menu.classList.toggle('Header__Active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.remove('Header__Hamburger__Active');
          menu.classList.remove('Header__Active');
      });
  });


    $(window).scroll(function () {
    if ($(window).width() > 991) {
        if ($(this).scrollTop() > 1600) {
            $('.ScrollUp').fadeIn();
        } else {
            $('.ScrollUp').fadeOut();
        }
    } else {
        $('.ScrollUp').fadeOut();
    }
    });

    $('#Order form').validate({
        rules: {
            name: "required",
            phone: "required"
        },
        messages: {
            name: "Please specify your name",
            phone: "Please enter your phone number"

        }
    });
        
    $('#Over form').validate({
        rules: {
            name: "required",
            phone: "required"
        },
        messages: {
            name: "Please specify your name",
            phone: "Please enter your phone number"

        }
    });
    
    $('input[name=phone]').mask("+420(999)999-999");

    $('.BtnCall').on('click', function(e) {
        $('.OverLay, .OverLay__WrapperInput'). fadeIn();
    });

    $('.OverLay__Close').on('click', function(e) {
        $('.OverLay, .OverLay__WrapperInput').fadeOut();
    });

    $('.BtnSmall').on('click', function(e) {
        $('.OverLay, .OverLay__WrapperInput'). fadeIn();
    });

    $('.OverLay__Close').on('click', function(e) {
        $('.OverLay, .OverLay__WrapperInput').fadeOut();
    });

    var $page = $('html, body');

    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    });

});

const mailPath = './mail.php'

document.querySelectorAll('.uniForm').forEach( (e) => {

	e.addEventListener('submit', function(e) {

		let th      = this,
		    params  = new FormData(this),
		    request = new XMLHttpRequest()

		request.open('POST', mailPath, true)
		request.send(params)

		request.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				setTimeout(function() { th.reset() }, 1000)
				alert('Thank you!')
			}
		}

		e.preventDefault()

	})

})
