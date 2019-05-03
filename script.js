
var playing = false;

function togglePlay() {
    playing ? weTalk('off') : weTalk('on');
}

function toggleShow() {
    playing ? $('.options').addClass('notshow') : $('.options').removeClass('notshow');
}

$('#btn').click(function () {
    togglePlay();
});

$('.pelicula').click(function () {
    togglePlay();
});

function weTalk(mode) {
    console.log('errorThrown');
    $.ajax({
        type: "GET",
        url: 'https://' + $('#ip').val() + '/' + mode,
        success: function (result) {
            console.log(result)
            playing ? $('video').get(0).pause() : $('video').get(0).play();
            toggleShow();
            playing = !playing;
        },
        error: function (textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
}

