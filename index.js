$(document).ready(function(){
    $("button.iniciarSessao").click(function(){
        var Id = this.id;
        console.log(Id)
        $("#iniciarSessao").modal('show');
        $('#confirmar1').click(function(){
            $('#a1').attr('href', Id + '.html');
        });
        $('#limpar1').click(function(){
            $('#signIn').each(function(){
                this.reset();
            });
        });
    });
    $("button.criarConta").click(function(){
        $("criarConta").modal('show');
        $('#confirmar2').click(function(){
            $('#confirmar2').attr('href', 'cliente.html');
        });
        $('#limpar2').click(function(){
            $('#signUp').each(function(){
                this.reset();
            });
        });
    });
});