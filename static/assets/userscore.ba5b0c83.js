import{d,c as n}from"./index.697f72c1.js";import{c as u}from"./index.b025497e.js";function x(s,o,c,p){let a={title:{left:"center",text:"Score over Time"},tooltip:{trigger:"axis",axisPointer:{type:"cross"}},legend:{type:"scroll",orient:"horizontal",align:"left",bottom:0,data:[o]},toolbox:{feature:{saveAsImage:{}}},grid:{containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:[]}],yAxis:[{type:"value"}],dataZoom:[{id:"dataZoomX",type:"slider",xAxisIndex:[0],filterMode:"filter",height:20,top:35,fillerColor:"rgba(233, 236, 241, 0.4)"}],series:[]};const i=[],r=[],e=c.concat(p);e.sort((t,l)=>new Date(t.date)-new Date(l.date));for(let t=0;t<e.length;t++){const l=d(e[t].date);i.push(l.toDate());try{r.push(e[t].challenge.value)}catch{r.push(e[t].value)}}return i.forEach(t=>{a.xAxis[0].data.push(t)}),a.series.push({name:o,type:"line",label:{normal:{show:!0,position:"top"}},areaStyle:{normal:{color:n(o+s)}},itemStyle:{normal:{color:n(o+s)}},data:u(r)}),a}export{x as g};
