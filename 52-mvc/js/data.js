
$(function() {
    var n = {}
      , c = 0
      , o = [];
    n.set = function(n) {
        var t;
        t = c = n,
        o.forEach(function(n) {
            n.call(this, t)
        })
    }
    ,
    n.get = function() {
        return c
    }
    ,
    n.on = function(n) {
        o.push(n)
    }
    ,
    window.mvcData = n
});

