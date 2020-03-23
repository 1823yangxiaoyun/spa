function Rectangle(width,height){
var w=Number(width),
    h=Number(height);

this.area=function(){
return Math.round((w*h)*Math.pow(10,3))/Math.pow(10,3);
}
this.perimeter=function(){
return Math.round((2*(w+h))*Math.pow(10,3))/Math.pow(10,3);
}
}
