import{d as u,c as f}from"./index.697f72c1.js";import{u as h,i as p,a as x,b as g,c as y,d as b,e as v,f as $,g as w,h as L,j as A,k as j,l as z,m as I}from"./echarts.128204f2.js";function O(o){let t=o.concat();for(let e=0;e<o.length;e++)t[e]=o.slice(0,e+1).reduce(function(s,a){return s+a});return t}function Z(o,t){let e={title:{left:"center",text:"Top 10 "+(o==="teams"?"Teams":"Users"),textStyle:{color:"white"}},tooltip:{trigger:"axis",axisPointer:{type:"cross"}},legend:{type:"scroll",orient:"horizontal",align:"left",bottom:35,data:[]},toolbox:{feature:{dataZoom:{yAxisIndex:"none"},saveAsImage:{}}},grid:{containLabel:!0},xAxis:[{type:"time",boundaryGap:!1,data:[],axisLabel:{color:"white"}}],yAxis:[{type:"value",axisLabel:{color:"white"}}],dataZoom:[{id:"dataZoomX",type:"slider",xAxisIndex:[0],filterMode:"filter",height:20,top:35,fillerColor:"rgba(233, 236, 241, 0.4)"}],series:[]};const s=Object.keys(t);for(let a=0;a<s.length;a++){const n=[],r=[];for(let i=0;i<t[s[a]].solves.length;i++){n.push(t[s[a]].solves[i].value);const l=u(t[s[a]].solves[i].date);r.push(l.toDate())}const d=O(n);let c=r.map(function(i,l){return[i,d[l]]});e.legend.data.push(t[s[a]].name);const m={name:t[s[a]].name,type:"line",label:{normal:{position:"top",color:"white"}},itemStyle:{normal:{color:f(t[s[a]].name+t[s[a]].id)}},data:c};e.series.push(m)}return e}h([p,x,g,y,b,v,$,w,L,A,j,z]);function k(o,t){let e=I(o);e.setOption(t),window.addEventListener("resize",()=>{e&&e.resize()})}export{O as c,k as e,Z as g};
