var $dlgGoto=(function(){
  var html=''
   + '<div class="notepad-dlg-mask notepad-dlg-goto">'
    + '<div class="dialogbox notepad-dlgbox">'
      + '<div class="notepad-dlg-titlebar titlebar">'
        + '<p class="title">转到指定行</p>'
        + '<span class="close-btn">✖</span>'
      + '</div>'
      + '<div class="main notepad-dlg-main">'
        + '<label for="">行号(L):</label><br>'
        + '<input class="txt-line-num" type="text" autofocus><br>'
        + '<input class="btn-goto btn" type="button" value="转到">'
        + '<input class="btn-cancel btn" type="button" value="取消">'
      + '</div> '
    + '</div>'
  + '</div>',
   $dlg=$(html);

 var             cfg={
      container:'body',
      num:6,//默认时长
     title:'同意',//默认按钮文字
    onClick:null
    };
function show(conf){
  $(cfg.container).append($dlg);
  $.extend(cfg,conf);

   $btn.click(cfg.onClick)
  }
  return {
    show:show
  }
}())

