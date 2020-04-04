require.config({
'paths':{
  'jquery':'//apps.bdimg.com/libs/jquery/2.1.4/jquery.min'
}
});
require(['jquery'],function($){
$(function(){
     // $timerButton.show('#main');
    var $btnAdd=$('#add');
   
    $btnAdd.click(function(){
      require(['time-button'],function(TimerButton){
      var tb=new TimerButton();
      tb.show({
        title:'发送验证',
        num:10, 
        onClick:function(){
         alert('点击了定时器按钮')
        }
        });
      })
      })     
    })
 })  
