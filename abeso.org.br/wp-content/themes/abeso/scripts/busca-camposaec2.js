jQuery(document).ready( function($){
	
	$('#cidades').select2();
	$('#cidades').closest('.input').eq(0).css({ marginBottom: '15px' });
	$('#cidades').on('select2:select', function(e){
		
		var data = e.params.data;
		if ( '' !== data.text ) {

			$('#cidades').closest('.input').find('.label').eq(0).addClass('active');
		} else {

			$('#cidades').closest('.input').find('.label').eq(0).removeClass('active');
		}
	});
});

window.addEventListener( 'load', preenche_campos );

function preenche_campos(){

	var searchParams = new URLSearchParams( window.location.search );

	for ( var pair of searchParams.entries() ) {
		
		var el = document.querySelector('[name='+pair[0]+']');
		if ( el ) {

			el.value = pair[1]; 
			el.dispatchEvent( new Event('change') );
		}
	}
}