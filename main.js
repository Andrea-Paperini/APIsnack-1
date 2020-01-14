$(document).ready(function() {
    $(".contenitore button").click(function() {
        $.ajax({
            url: "https://flynn.boolean.careers/exercises/api/random/int",
            method: "GET",
            success: function(data) {
                var random = data.response % 2;
                if (random == 0) {
                    $(".Pari").append(data.response).addClass("verde");
                } else {
                    $(".Dispari").append(data.response).addClass("rosso");
                }
            },
            error: function() {
                alert("Errore")
            }
        });
    })
});
