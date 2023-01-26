$(document).ready(function(){
   
    // Hide Dropdown User after scroll 
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            $('.dropdown-user').hide(200);
        } else {
            $('.dropdown-user').hide(200);
        }
        prevScrollpos = currentScrollPos;
    } 


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

    $('#click-bank').click(function(){
        $('#down-bank').removeClass('fa fa-caret-down');
        $('#down-bank').addClass('fa fa-caret-up');
        $('#collapse-bank').toggle(200);
    })
    $('#click-retail').click(function(){
        $('#down-retail').removeClass('fa fa-caret-down');
        $('#down-retail').addClass('fa fa-caret-up');
        $('#collapse-retail').toggle(200);
    })
    $('#click-digital').click(function(){
        $('#down-digital').removeClass('fa fa-caret-down');
        $('#down-digital').addClass('fa fa-caret-up');
        $('#collapse-digital').toggle(200);
    })

    $('#btnShowDetailBooking').click(function(){
        $('.detailBooking').toggle(200);
    })

    $('#searchCruise').click(function(){
       console.log('Search Success ...'); 
       let asal_pelabuhan = $('#asal_pelabuhan').val();
       let tujuan_pelabuhan = $('#tujuan_pelabuhan').val();
       let male = $('#male').val();
       let female = $('#female').val();
       let child = $('#child').val();
       let originPort = $('#originPort');
       let destinationPort = $('#destinationPort');
       let totalMature = $('#totalMature');
       let totalChild = $('#totalChild');
       let totalMaleFemale = parseInt(male) + parseInt(female);

       if(asal_pelabuhan){
           originPort.text(asal_pelabuhan);
       }   
       if(tujuan_pelabuhan){
           destinationPort.text(tujuan_pelabuhan);
       }   
       if(totalMature != 0){
            totalMature.text(totalMaleFemale);
       }
       if(totalChild != 0){
            totalChild.text(child);
       }
       
       $('#searchCruise').attr('disabled', true),
       $('#searchCruise').text('Harap tunggu ...');
       setTimeout(function(){
        location.href="booking_detail.html"
        }, 2000);       
    })
})

