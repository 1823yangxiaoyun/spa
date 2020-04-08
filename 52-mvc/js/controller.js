
!function() {
    var t, o, n = {}, l = [];
    n.init = function(n) {
        t = n,
        o = $('<input class="mvc-controller" type="range" min="0" max="255" value="0" title="Controller">'),
        t.append(o),
        o.change(function() {
            l.forEach(function(n) {
                n.call(this, o.val())
            })
        })
    }
    ,
    n.on = function(n) {
        l.push(n)
    }
    ,
    n.setValue = function(n) {
        o.val(n)
    }
    ,
    window.controller = n
}();

