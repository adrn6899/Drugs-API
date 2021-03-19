$(function(){

    $('#runGetBD').on('click', function(e){
        console.log($('#queryGetBD').val());
        e.preventDefault();
        $.ajax({
            type:'GET',
            url:$('#queryGetBD').val(),
            dataType:'json',
            success:function(data){
                console.log(data);
                $('#runGetContent').html(JSON.stringify(data,null,'\t'));
            }
        })
    })

});