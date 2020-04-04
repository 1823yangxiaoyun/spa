$(function() {
    var e, i = $('details input[type="number"]'), n = $('details input[type="text"]'), a = $("details textarea");
    $("details form").submit(function(t) {
        t.preventDefault(),
        e = $('details input[type="radio"]:checked'),
        timerButton({
            container: "div.main",
            enabled: "true" === e.val(),
            duration: Number(i.val()),
            text: n.val()
        }).on("timer-button-click", new Function(a.val()))
    })
});


