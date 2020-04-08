!function() {
    var n, o, e, i = {};
    i.init = function(i) {
        n = i,
        o = $('<div class="mvc-colorview" title="Color View"></div>'),
        n.append(o),
        e = o.innerWidth(),
        this.resize()
    }
    ,
    i.resize = function() {
        var i = (n.innerHeight() - e) / 2;
        o.css({
            top: i + "px"
        })
    }
    ,
    i.onColorChange = function(i) {
        var n = 255 - i
          , o = "rgb(" + n + "," + n + "," + n + ")";
        $(".mvc-colorview").css({
            background: o
        })
    }
    ,
    window.colorView = i
}();

