$(function(){
  //get dom elem
  var $width=$('#width'),
      $height=$('#height'),
      $butCal=$('#calculate'),
      $perimeter=$('#perimeter'),
      $form=$('form'),
      $area=$('#area');
  /*calc button click event*/
//$butCal.click(function(){
$form.submit(function(e){
  e.preventDefault();
  //get value
  var w=Number($width.val()),
      h=Number($height.val());
  //calculate
    var p=2*(w+h),
       a=w*h;

var r=new Rectangle(w,h);
//x  做近似处理的数  n 小数点后面保留第n位
 function roundFractional(x) 
{
  return Math.round(x*Math.pow(10,3))/Math.pow(10,3);
}
  //output
  $perimeter.val(r.perimeter());
  $area.val(r.area());
})
})
