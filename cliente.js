$(document).ready(function(){
    var tab_on = location.hash; // aqui é onde vamos agarrar o valor da hash do url (ex: #listaReservas)
    $('#myTab a[data-target="' +tab_on+ '"]').tab('show');
    $('#myTab a').on('click', function() {
        var this_target = $(this).data('target');
        var window_href = window.location.href.split('#')[0];
        history.pushState('', '', window_href+this_target); // mudar o url dinamicamente
    });
});