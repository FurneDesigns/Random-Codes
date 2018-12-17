jQuery(function(){
    jQuery(window).scroll(function(){
        if(jQuery(this).scrollTop() > 200) {
            jQuery('#logo-img img')
                .css({'width':'351px','height':'63px'})
                .attr('src','http://luismi.sanchezarteaga.es/contenido/uploads/2014/02/luismi.sanchezarteaga1.png');
        }
        if(jQuery(this).scrollTop() < 200) {
            jQuery('#logo-img img')
                .css({'width':'196px',
                	'height':'166px',
					'-webkit-transition':'all 0.5s ease',
					'-moz-transition':'all 0.5s ease',
					'-ms-transition':'all 0.5s ease',
					'-o-transition':'all 0.5s ease',
					'transition':'all 0.5s ease'
                	})    
                .attr('src','http://luismi.sanchezarteaga.es/contenido/uploads/2014/02/logo2.png');
        }
    });
});