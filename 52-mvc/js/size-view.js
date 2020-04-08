
!function() {
    var t, e, s, i = {};
    i.init = function(i) {
        t = i,
        e = $('<div class="mvc-sizeview" title="Size View"></div>'),
        t.append(e),
        s = e.innerWidth(),
        this.resize(),
        e.css({
            width: "0px",
            height: "0px"
        })
    }
    ,
    i.resize = function() {
        var i = (t.innerHeight() - s) / 2;
        e.css({
            top: i + "px"
        })
    }
    ,
    i.onSizeChange = function(i) {
        var e = s * i / 255
          , n = (t.innerHeight() - e) / 2;
        $(".mvc-sizeview").css({
            width: e + "px",
            height: e + "px",
            top: n + "px"
        })
    }
    ,
    window.sizeView = i
}();

