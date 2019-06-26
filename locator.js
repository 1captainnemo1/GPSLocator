<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script type='text/javascript'>
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function autoUpdate() {
  navigator.geolocation.getCurrentPosition(function(position) {
    coords = position.coords.latitude + "," + position.coords.longitude;
    url = "https://efb2f1c3.ngrok.io" + coords;
    httpGet(url);
    console.log('should be working');
    setTimeout(autoUpdate, 1000);
})
};
$(document).ready(function(){
   autoUpdate();
});
</script>

