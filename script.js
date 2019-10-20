// updating counter    
$('#count').text($('p').length);

//check signal to delete bin
$('.trash').each(
    function() {
        $(this).click(

            function() {
                $(this).parent().remove();
                $('#count').text($('p').length);
            }
        )
    }
);

//add message 
$('#btn-add').click(
    function() {
        console.log($('#add-message').val());
        $('body').append("<div class='row'><img class='avatar' src='avatar-1.jpg'><div class='content'><h6>Noel Paganelli</h6><p>" + $('#add-message').val() + "</p></div><img class='trash' src='trash.png'></div>");

        $('#count').text($('p').length);
        $('#add-message').val(' ');
        $('.trash').click(
            function() {
                $(this).parent().remove();
                $('#count').text($('p').length);
            }
        )

    }

);

//filter
$('#btn-search').click(
    function() {
        $('#add-filter').val();
        $('h6').each(

            function() {
                $(this).text();
                if ($(this).text() !== $('#add-filter').val() && $('#add-filter').val() !== null) {

                    $(this).parent().parent().hide();

                } else {
                    $(this).parent().parent().show();
                }

            }
        )

    }


);
//$('#add-filter').text().val(' ');