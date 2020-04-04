var $timerButton=(function(){
 // var html='<input type="button" value="同意（6s)" disabled>',

/*$btn.css({
  height:'50px',
  width:'100px'
})*/
function show(conf){

 var $btn=$('<input  class="timer-button" type="button"  disabled>');
 // var html='<input type="button" value="同意（6s)" disabled>',
 var             cfg={
      container:'body',
      num:6,//默认时长
     title:'同意',//默认按钮文字
    onClick:null
    },
    timer;
  //1.DOM绘制
 // $(container).html(html);
  $(cfg.container).append($btn);
  $.extend(cfg,conf);
  $btn.val(cfg.title+'('+cfg.num+'s)');
  //2.事件绑定  event bind

timer=setInterval(function(){
 cfg.num--;
  if(cfg.num===0){
    clearInterval(timer);
    $btn.val(cfg.title);
        $btn.removeAttr('disabled');
  }else
{
  $btn.val(cfg.title+'('+cfg.num+'s)')
}
},1000);
  $btn.click(cfg.onClick)
  }
  return {
    show:show
  }
}())
//不用 page load event
//封装成对象，有几种方案
//1.全局对象 简单对象自面两，  不完全是面向对象，不能包括私有方法
//var timer{
   // show:function()
   //}
//}2.工厂函数  一个函数返回值是对象
//var timerBtn=(function(){
//return{
//show:function(){}
//}
//)()}
//
//3.构造函数，function timerBtn(){
//
//}
//var tb=new timerBtn()
