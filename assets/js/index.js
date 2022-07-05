$(document).ready(function(){
    $('#btn-profile-user').click(function(){
        $('.dropdown-user').toggle(200);
    })
    
    
    $('#showLogin').click(function(){
        console.log('show login');
        $('.container-login').show(200);
    })
    
    $('#closeLogin').click(function(){
        console.log('close login');
        $('.container-login').hide(200);
    })

    // $('.container-login').children().css('opacity', '0.8');   

})

