(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"Y+KY":function(a,r,t){"use strict";t.r(r),t.d(r,"ChartJSModule",function(){return l});var e=t("hrfs"),o=t("iInd"),b=t("8Y7J");const i=[{path:"",component:(()=>{class a{constructor(){this.lineChartData=[{data:[65,59,80,81,56,55,40],label:"Series A"},{data:[28,48,40,19,86,27,90],label:"Series B"},{data:[18,48,77,9,100,27,40],label:"Series C"}],this.lineChartLabels=["January","February","March","April","May","June","July"],this.lineChartOptions={animation:!1,responsive:!0},this.lineChartColours=[{backgroundColor:"rgba(148,159,177,0.2)",borderColor:"rgba(148,159,177,1)",pointBackgroundColor:"rgba(148,159,177,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(148,159,177,0.8)"},{backgroundColor:"rgba(77,83,96,0.2)",borderColor:"rgba(77,83,96,1)",pointBackgroundColor:"rgba(77,83,96,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(77,83,96,1)"},{backgroundColor:"rgba(148,159,177,0.2)",borderColor:"rgba(148,159,177,1)",pointBackgroundColor:"rgba(148,159,177,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(148,159,177,0.8)"}],this.lineChartLegend=!0,this.lineChartType="line",this.barChartOptions={scaleShowVerticalLines:!1,responsive:!0},this.barChartLabels=["2006","2007","2008","2009","2010","2011","2012"],this.barChartType="bar",this.barChartLegend=!0,this.barChartData=[{data:[65,59,80,81,56,55,40],label:"Series A"},{data:[28,48,40,19,86,27,90],label:"Series B"}],this.doughnutChartLabels=["Download Sales","In-Store Sales","Mail-Order Sales"],this.doughnutChartData=[350,450,100],this.doughnutChartType="doughnut",this.radarChartLabels=["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],this.radarChartData=[{data:[65,59,90,81,56,55,40],label:"Series A"},{data:[28,48,40,19,96,27,100],label:"Series B"}],this.radarChartType="radar",this.pieChartLabels=["Download Sales","In-Store Sales","Mail Sales"],this.pieChartData=[300,500,100],this.pieChartType="pie",this.polarAreaChartLabels=["Download Sales","In-Store Sales","Mail Sales","Telesales","Corporate Sales"],this.polarAreaChartData=[300,500,100,40,120],this.polarAreaLegend=!0,this.polarAreaChartType="polarArea"}chartClicked(a){console.log(a)}chartHovered(a){console.log(a)}}return a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=b.Gb({type:a,selectors:[["ng-component"]],decls:62,vars:24,consts:[[1,"animated","fadeIn"],[1,"card-columns","cols-2"],[1,"card"],[1,"card-header"],[1,"card-header-actions"],["href","http://www.chartjs.org"],[1,"text-muted"],[1,"card-body"],[1,"chart-wrapper"],["baseChart","",1,"chart",3,"datasets","labels","options","colors","legend","chartType","chartHover","chartClick"],["baseChart","",1,"chart",3,"datasets","labels","options","legend","chartType","chartHover","chartClick"],["baseChart","",1,"chart",3,"data","labels","chartType","chartHover","chartClick"],["baseChart","",1,"chart",3,"datasets","labels","chartType","chartHover","chartClick"],["baseChart","",1,"chart",3,"data","labels","legend","chartType","chartHover","chartClick"]],template:function(a,r){1&a&&(b.Sb(0,"div",0),b.Sb(1,"div",1),b.Sb(2,"div",2),b.Sb(3,"div",3),b.xc(4," Line Chart "),b.Sb(5,"div",4),b.Sb(6,"a",5),b.Sb(7,"small",6),b.xc(8,"docs"),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(9,"div",7),b.Sb(10,"div",8),b.Sb(11,"canvas",9),b.Zb("chartHover",function(a){return r.chartHovered(a)})("chartClick",function(a){return r.chartClicked(a)}),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(12,"div",2),b.Sb(13,"div",3),b.xc(14," Bar Chart "),b.Sb(15,"div",4),b.Sb(16,"a",5),b.Sb(17,"small",6),b.xc(18,"docs"),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(19,"div",7),b.Sb(20,"div",8),b.Sb(21,"canvas",10),b.Zb("chartHover",function(a){return r.chartHovered(a)})("chartClick",function(a){return r.chartClicked(a)}),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(22,"div",2),b.Sb(23,"div",3),b.xc(24," Doughnut Chart "),b.Sb(25,"div",4),b.Sb(26,"a",5),b.Sb(27,"small",6),b.xc(28,"docs"),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(29,"div",7),b.Sb(30,"div",8),b.Sb(31,"canvas",11),b.Zb("chartHover",function(a){return r.chartHovered(a)})("chartClick",function(a){return r.chartClicked(a)}),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(32,"div",2),b.Sb(33,"div",3),b.xc(34," Radar Chart "),b.Sb(35,"div",4),b.Sb(36,"a",5),b.Sb(37,"small",6),b.xc(38,"docs"),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(39,"div",7),b.Sb(40,"div",8),b.Sb(41,"canvas",12),b.Zb("chartHover",function(a){return r.chartHovered(a)})("chartClick",function(a){return r.chartClicked(a)}),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(42,"div",2),b.Sb(43,"div",3),b.xc(44," Pie Chart "),b.Sb(45,"div",4),b.Sb(46,"a",5),b.Sb(47,"small",6),b.xc(48,"docs"),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(49,"div",7),b.Sb(50,"div",8),b.Sb(51,"canvas",11),b.Zb("chartHover",function(a){return r.chartHovered(a)})("chartClick",function(a){return r.chartClicked(a)}),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(52,"div",2),b.Sb(53,"div",3),b.xc(54," Polar Area Chart "),b.Sb(55,"div",4),b.Sb(56,"a",5),b.Sb(57,"small",6),b.xc(58,"docs"),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(59,"div",7),b.Sb(60,"div",8),b.Sb(61,"canvas",13),b.Zb("chartHover",function(a){return r.chartHovered(a)})("chartClick",function(a){return r.chartClicked(a)}),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb()),2&a&&(b.Ab(11),b.hc("datasets",r.lineChartData)("labels",r.lineChartLabels)("options",r.lineChartOptions)("colors",r.lineChartColours)("legend",r.lineChartLegend)("chartType",r.lineChartType),b.Ab(10),b.hc("datasets",r.barChartData)("labels",r.barChartLabels)("options",r.barChartOptions)("legend",r.barChartLegend)("chartType",r.barChartType),b.Ab(10),b.hc("data",r.doughnutChartData)("labels",r.doughnutChartLabels)("chartType",r.doughnutChartType),b.Ab(10),b.hc("datasets",r.radarChartData)("labels",r.radarChartLabels)("chartType",r.radarChartType),b.Ab(10),b.hc("data",r.pieChartData)("labels",r.pieChartLabels)("chartType",r.pieChartType),b.Ab(10),b.hc("data",r.polarAreaChartData)("labels",r.polarAreaChartLabels)("legend",r.polarAreaLegend)("chartType",r.polarAreaChartType))},directives:[e.a],encapsulation:2}),a})(),data:{title:"Charts"}}];let n=(()=>{class a{}return a.\u0275fac=function(r){return new(r||a)},a.\u0275mod=b.Kb({type:a}),a.\u0275inj=b.Jb({imports:[[o.g.forChild(i)],o.g]}),a})(),l=(()=>{class a{}return a.\u0275fac=function(r){return new(r||a)},a.\u0275mod=b.Kb({type:a}),a.\u0275inj=b.Jb({imports:[[n,e.b]]}),a})()}}]);