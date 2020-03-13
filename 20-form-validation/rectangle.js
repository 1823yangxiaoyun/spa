$(function(){
  //get dom
  var $width  = $('#width'),
      $height = $('#height');
  var $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area = $('#area');
  /*calc button click event*/
$btnCal.click(function(){
  if(!validate("#width") || !validate("#height")) return;

  var w = Number($width.val()),
      h = Number($height.val());
  
  var p = 2*(w+h),
      a = w*h;
  
  $perimeter.val(p);
  $area.val(a);
});
  function validate(field){
    //get DOM error message
    var $data= $(field),
        $msg=$(field+"-validation-msg");


    //null
    if($data.val()===""){
      $msg.html('不能为空');
      $data.select();
      return false;
    }
    //number
    // if($data.val()===""){
    //   $msg.html('必须是数值');
    //   $data.select();
    //   return false;
    // }

    //>0
    if(Number($data.val())<0){
      $msg.html('必须大于0');
      $data.select();
      return false;
    }

    return true;
    //prompt error message
  }
});
