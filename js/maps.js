var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 34.397805, lng: 39.338635},
        zoom: 3 // typical is usually 8 or 9
    });
    var marker = new google.maps.Marker({
        position: {lat: 34.397805, lng: 39.338635},
        map: map,
        icon: 'style/drawables/soldierIcon.png'
    });
}