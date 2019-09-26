const mobileMenu = document.getElementById("mobile-menu");
const mobileItems = document.getElementById("menu-items");
mobileItems.childNodes.forEach( child => {
  child.addEventListener("click", ()=> {
    mobileMenu.checked = false;
  })
})

window.onscroll = function() {scrollFunction()};
// mobileMenu.checked = false;

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function mapAccess() {
    var myCenter = new google.maps.LatLng(34.786510, 135.389497);
    var mapCanvas = document.getElementById('maps');
    var mapOptions = {
    center: myCenter,
    zoom: 16
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({
    position: myCenter 
    });
    marker.setMap(map);
    }

  // hamburger nav 

