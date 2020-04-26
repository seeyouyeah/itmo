$(document).ready(function() {

    $("p").css("color", "green");
    $(".paragraph").css("fontSize", "60px");
    $(".anchor").css({
        "background": "black",
        "color": "red"
    });
    $("form *").prop("disabled", true);

    $(".anchor").prepend("??");
    $(".anchor").attr("target", "_blank")
    $(".anchor").each(function () {
        $(this).attr("href", function (index, value) {
            let protocol = value.substring(0, value.indexOf(':'));
            if (protocol === 'http') {
                let href = value.substring(value.indexOf(':'), value.length);
                return protocol + 's' + href;
            }
        });
    });


    $('body').append('<button id = "buton">buton</button>');
    $("#buton").click(function () {
        $("a").each(function () {
            $(this).text(function (index, text) {
                if (text.substr(0, 2) === '??') {
                    return text.substring(2, text.length);
                }
            });
        });
        $(".anchor").removeAttr("target");
    });

    
    $("#hide").click(() => {
        $("#hide").parent().siblings().children().hide();
    });

    $("#fadeIn").click(() => {
        $("#fadeIn").parent().siblings().children().fadeIn(1500);
    });

    $("#fadeTo").click(() => {
        $("#fadeTo").parent().siblings().children().fadeTo(1500, 0.5);
    });

    $("#slideDown").click(() => {
        $("#slideDown").parent().siblings().children().slideDown(1500);
    });

    $("#slideToggle").click(() => {
        $("#slideToggle").parent().siblings().children().slideToggle();
    });

});


$("#ajax").click(() => {
    $.ajax({
        url: "https://inxaoc.github.io/example/ajax-1.html"
    }).done((e) => {
        let pageContent = document.createElement("div");
        pageContent.innerHTML = e;
        $("body").append(pageContent);
    });
});
