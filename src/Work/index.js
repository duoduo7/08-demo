import React from 'react';
import echarts from 'echarts'


class Work extends React.Component {
  componentDidMount(){
    var myChart = echarts.init(document.getElementById('main'));
    myChart.setOption({
    title: {
      text: 'ECharts 入门示例' ,
      textStyle:{
        color:'pink'
      },
      left:'center'
    },
    tooltip: {},
    xAxis: {
        data: ["html","css","js","react","node","mongob"]

    },
    yAxis: {},
    series: [{
        name: '熟练度',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
    });
  }
  render () {

    return(
      <div id = 'main' style={{width: '100%',height:'auto'}}>

      </div>
    )
  }
}

export default Work;
