$( document ).ready( function() {
        var jbOffset = $( '.header_hover' ).offset();
        $( window ).scroll( function() {
          if ( $( document ).scrollTop() > 134) {
            $( '.header_hover' ).addClass( 'on1' );
          }
          else {
            $( '.header_hover' ).removeClass( 'on1' );
          }
        });
      } );