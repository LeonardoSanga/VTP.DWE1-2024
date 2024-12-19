$('#form1').submit(function(e){
    e.preventDefault();

    var u_name = $('#name').val();
    var u_email = $('#email').val();

    $.ajax({
        url: 'https://epansani.com.br/2024/dwe1/ajax/ins.php',
        method: 'POST',
        data: {nome: u_name, email: u_email},
        dataType: 'json'
    }).done(function(result){
        $('#name').val('');
        $('#email').val('');
        getEmails();

        $('#successMessage').fadeIn().delay(3000).fadeOut();

        console.log(result);
    });
});

$('.btnRefresh').click(function () {
    $('.tbodyTableEmails').empty();
    getEmails();
});

function getEmails() {
    $.ajax({
        url: 'https://epansani.com.br/2024/dwe1/ajax/list.php',
        method: 'GET',
        dataType: 'json'
    }).done(function(result){
        console.log(result);

        $('.tbodyTableEmails').empty();

        for(var i = 0; i < result.length; i++) {

            console.log(result[i].id);
            $('.tbodyTableEmails').append('<tr><td>' + result[i].nome + '</td><td>' + result[i].email + '</td><td><button class="btnDelete btn btn-danger btn-sm" data-id="' + result[i].id + '">Apagar</button></td></tr>');
        }

    });
}

getEmails();

$('.tbodyTableEmails').on('click', '.btnDelete', function () {
    const recordId = $(this).data('id');  

    console.log('ID do registro:', recordId);

    if(window.confirm('Você tem certeza que deseja excluir este registro?')) {
        $.ajax({
            url: 'https://epansani.com.br/2024/dwe1/ajax/rem.php',
            method: 'POST',
            data: { id: recordId },
            dataType: 'json',
            success: function (response) {
                console.log(response); 
                if (response === true) {
                    getEmails(); 
                } else {
                    alert('Erro ao excluir o registro.');
                }
            },
            error: function () {
                alert('Ocorreu um erro na requisição.');
            }
        }).done(function(result){
            getEmails();
            console.log(result);
        });
    }
});