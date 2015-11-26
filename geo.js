$(document).ready(function(){
	// PEDIR A USUARUO AUTORIZACION

	$('button').click(function(){

		if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(mostrarDatos)
			}else{
		alert('no tenemos tus datos, vuelve pronto')
		}
	});
});


// OBTENER LATITUD Y LONGITUD
function mostrarDatos(position){
	var zoom = $('#zoom').val();
	var size = $('size').val();
	var latlang = position.coords.latitude +','+position.coords.longitude;
	var marker = '&markers=color:red|label:S|'+latLang;
	var imagen = "https://maps.googleapis.com/maps/api/staticmap?size="+size+"&zoom="+zoom+"&ccenter="/>
	var nuevaImagen = imagen+latlang+marker;
	console.log(nuevaImagen);
	$('img').attr('src',nuevaImagen);

	}

});

