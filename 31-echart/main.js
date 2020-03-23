$(function(){
 
        var myChart = echarts.init(document.getElementById('main'));
        var xData=[],
            yData=[];
       for(var i=0;i<=1;i+=0.01)
      {
          xData.push(i);
          if(i===1||i===0)
         { 
           yData.push(0);
         }
          else{
          yData.push(-1*i*Math.log2(i)-(1-i)*Math.log2(1-i));
          }
      } 
     // H(p)=-p*log(p)-(1-p)log(1-p)
        // 指定图表的配置项和数据
        var option = {
            title: {
                text: '二进熵函数曲线'
            },
            tooltip: {},
            legend: {
                data:['信息量']
            },
            xAxis: {
                data:xData
            },
            yAxis: {},
            series: [{
                name: '信息量',
                type: 'line',
                smooth:true,
                data:yData
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
})
