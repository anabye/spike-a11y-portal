import{$ as V,$a as L,$d as v,Bd as me,F as u,Fa as J,Fd as de,G as h,Ga as e,Ia as T,Ka as C,La as S,Lb as X,Ma as f,Mb as K,Mc as g,Na as G,Nb as Z,Nc as O,Oa as z,Ob as $,Pa as w,Pb as ee,Qa as Y,Rd as ce,T as s,Tc as ae,U as A,Uc as M,Vc as re,Wb as te,Yb as ne,Zb as j,Zc as le,_ as b,_b as ie,_d as y,a as D,b as F,bb as Q,ce as ue,ea as H,ha as d,ka as _,na as t,oa as n,pa as o,pd as pe,ta as N,te as P,ua as E,ue as he,va as W,vc as oe,vd as se,y as B,yc as R}from"./chunk-JUELAAZC.js";var Te=()=>({label:"Angular",data:100}),we=()=>({label:"React",data:10}),Le=(a,U)=>[a,U],Ee=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-chart-basic"]],standalone:!1,decls:1,vars:6,consts:[[3,"p-series"]],template:function(l,i){l&1&&o(0,"po-chart",0),l&2&&d("p-series",Y(3,Le,z(1,Te),z(2,we)))},dependencies:[M],encapsulation:2})}return a})();var ke=a=>({"docs-sample-code-tabs":a}),ge=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-chart-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Chart Basic"),n(),t(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-chart-basic/sample-po-chart-basic.component.html"),n(),t(13,"pre",7),e(14,`<po-chart
  [p-series]="[
    { label: 'Angular', data: 100 },
    { label: 'React', data: 10 }
  ]"
>
</po-chart>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-chart-basic/sample-po-chart-basic.component.ts"),n(),t(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-chart-basic',
  templateUrl: './sample-po-chart-basic.component.html',
  standalone: false
})
export class SamplePoChartBasicComponent {}
`),n()()()()(),t(21,"div",10),o(22,"sample-po-chart-basic"),n(),o(23,"hr")),l&2&&(s(5),_("po-icon "+i.sampleCodeButtonIcon),s(),T(" ",i.sampleCodeButtonLabel,""),s(),d("ngClass",w(4,ke,i.hideSampleCodeTabs)))},dependencies:[L,P,y,v,Ee],encapsulation:2})}return a})();function Oe(a,U){if(a&1){let p=N();t(0,"po-checkbox-group",27),f("ngModelChange",function(i){u(p);let m=W();return S(m.dataLabel,i)||(m.dataLabel=i),h(i)}),E("p-change",function(i){u(p);let m=W();return h(m.changeDataLabelOptions(i))}),n()}if(a&2){let p=W();C("ngModel",p.dataLabel),d("p-options",p.dataLabelOptions)}}var be=(()=>{class a{allCategories=[];categories;color;data;event;height;label;optionsActions;series;serieType;title;tooltip;type;options={axis:{minRange:void 0,maxRange:void 0,gridLines:void 0,labelType:void 0}};dataLabel;propertiesOptions=[{value:"legend",label:"Legend"}];typeOptions=[{label:"Donut",value:g.Donut},{label:"Pie",value:g.Pie},{label:"Area",value:g.Area},{label:"Line",value:g.Line},{label:"Column",value:g.Column},{label:"Bar",value:g.Bar}];dataLabelOptions=[{value:"fixed",label:"Fixed"}];labelTypeOptions=[{label:"Number",value:O.Number},{label:"Currency",value:O.Currency}];ngOnInit(){this.restore()}addOptions(p){this.options=D(D({},this.options),p?D({},p):{})}addCategories(){this.allCategories=this.convertToArray(this.categories)}addData(){let p=isNaN(this.data)?this.convertToArray(this.data):Math.floor(this.data),l=this.serieType??this.type,i=this.color;this.series=[...this.series,F(D({label:this.label,data:p,tooltip:this.tooltip},i?{color:i}:{}),{type:l})]}changeActionOptions(){let p=this.optionsActions.legend;this.addOptions({legend:p})}isLineType(){return this.type===g.Line}changeDataLabelOptions(){let p=this.dataLabel.fixed}changeEvent(p,l){this.event=`${p}: ${JSON.stringify(l)}`}restore(){this.color=void 0,this.type=void 0,this.serieType=void 0,this.label=void 0,this.categories=void 0,this.event=void 0,this.height=void 0,this.series=[],this.title=void 0,this.tooltip=void 0,this.data=void 0,this.allCategories=[],this.optionsActions={legend:null},this.dataLabel={fixed:!1},this.options=F(D({},this.optionsActions),{axis:{minRange:void 0,maxRange:void 0,gridLines:void 0,labelType:void 0}})}convertToArray(p){try{return JSON.parse(p)}catch{return}}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-chart-labs"]],standalone:!1,decls:35,vars:27,consts:[["chartSeries","ngForm"],[3,"p-series-click","p-series-hover","p-categories","p-height","p-options","p-series","p-title","p-type"],["p-label","Events",1,"po-md-12"],[1,"po-row"],["p-label","Event",3,"p-value"],["p-label","Properties",1,"po-md-12"],["name","type","p-columns","3","p-label","Type",1,"po-md-3",3,"ngModelChange","ngModel","p-options"],["name","height","p-label","Height",1,"po-md-2",3,"ngModelChange","ngModel"],["name","title","p-label","Title",1,"po-md-4",3,"ngModelChange","ngModel"],["class","po-md-3","name","dataLabel","p-label","dataLabel","p-help","only for Line Chart",3,"ngModel","p-options","ngModelChange","p-change",4,"ngIf"],["p-label","Chart series",1,"po-md-12"],["name","label","p-label","Label","p-help","Serie label","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","data","p-label","Data","p-help","Example: [25, 58, 83, 66] or 25","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","serieType","p-help","Serie Type","p-label","Type",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","tooltip","p-label","Tooltip","p-help","Custom Tooltip",1,"po-md-4",3,"ngModelChange","ngModel"],["name","color","p-label","Color","p-help","Custom Color",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","Add Serie",1,"po-md-4",3,"p-click"],[1,"po-md-12"],["name","categories","p-help",'Example: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]',"p-label","Categories",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["p-label","Chart options",1,"po-md-12"],["name","minRange","p-help","Example: 0","p-label","minRange",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","maxRange","p-help","Example: 100","p-label","maxRange",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","gridLines","p-help","Example: 6","p-label","gridLines",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","innerRadius","p-help","Example: value between 0 and 100","p-label","innerRadius",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","labelType","p-label","labelType",1,"po-md-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","propertiesOptions","p-help","Boolean properties","p-indeterminate","","p-label","Properties",1,"po-md-4",3,"ngModelChange","p-change","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],["name","dataLabel","p-label","dataLabel","p-help","only for Line Chart",1,"po-md-3",3,"ngModelChange","p-change","ngModel","p-options"]],template:function(l,i){if(l&1){let m=N();t(0,"po-chart",1),E("p-series-click",function(r){return u(m),h(i.changeEvent("p-series-click",r))})("p-series-hover",function(r){return u(m),h(i.changeEvent("p-series-hover",r))}),n(),o(1,"po-divider",2),t(2,"div",3),o(3,"po-info",4),n(),o(4,"po-divider",5),t(5,"form")(6,"po-select",6),f("ngModelChange",function(r){return u(m),S(i.type,r)||(i.type=r),h(r)}),n(),t(7,"po-number",7),f("ngModelChange",function(r){return u(m),S(i.height,r)||(i.height=r),h(r)}),n(),t(8,"po-input",8),f("ngModelChange",function(r){return u(m),S(i.title,r)||(i.title=r),h(r)}),n(),H(9,Oe,1,2,"po-checkbox-group",9),n(),t(10,"form",null,0),o(12,"po-divider",10),t(13,"div",3)(14,"po-input",11),f("ngModelChange",function(r){return u(m),S(i.label,r)||(i.label=r),h(r)}),n(),t(15,"po-input",12),f("ngModelChange",function(r){return u(m),S(i.data,r)||(i.data=r),h(r)}),n(),t(16,"po-select",13),f("ngModelChange",function(r){return u(m),S(i.serieType,r)||(i.serieType=r),h(r)}),n(),t(17,"po-input",14),f("ngModelChange",function(r){return u(m),S(i.tooltip,r)||(i.tooltip=r),h(r)}),n(),t(18,"po-input",15),f("ngModelChange",function(r){return u(m),S(i.color,r)||(i.color=r),h(r)}),n()(),t(19,"div",3)(20,"po-button",16),E("p-click",function(){u(m);let r=J(11);return i.addData(),h(r.reset())}),n()()(),t(21,"form")(22,"div",3),o(23,"po-divider",17),t(24,"po-input",18),f("ngModelChange",function(r){return u(m),S(i.categories,r)||(i.categories=r),h(r)}),E("p-blur",function(){return u(m),h(i.addCategories())}),n(),o(25,"po-divider",19),t(26,"po-number",20),f("ngModelChange",function(r){return u(m),S(i.options.axis.minRange,r)||(i.options.axis.minRange=r),h(r)}),E("p-blur",function(){return u(m),h(i.addOptions())}),n(),t(27,"po-number",21),f("ngModelChange",function(r){return u(m),S(i.options.axis.maxRange,r)||(i.options.axis.maxRange=r),h(r)}),E("p-blur",function(){return u(m),h(i.addOptions())}),n(),t(28,"po-number",22),f("ngModelChange",function(r){return u(m),S(i.options.axis.gridLines,r)||(i.options.axis.gridLines=r),h(r)}),E("p-blur",function(){return u(m),h(i.addOptions())}),n(),t(29,"po-number",23),f("ngModelChange",function(r){return u(m),S(i.options.innerRadius,r)||(i.options.innerRadius=r),h(r)}),E("p-blur",function(){return u(m),h(i.addOptions())}),n(),t(30,"po-select",24),f("ngModelChange",function(r){return u(m),S(i.options.axis.labelType,r)||(i.options.axis.labelType=r),h(r)}),E("p-change",function(){return u(m),h(i.addOptions())}),n(),t(31,"po-checkbox-group",25),f("ngModelChange",function(r){return u(m),S(i.optionsActions,r)||(i.optionsActions=r),h(r)}),E("p-change",function(){return u(m),h(i.changeActionOptions())}),n()(),o(32,"po-divider",17),t(33,"div",3)(34,"po-button",26),E("p-click",function(){return u(m),h(i.restore())}),n()()()}l&2&&(d("p-categories",i.allCategories)("p-height",i.height)("p-options",i.options)("p-series",i.series)("p-title",i.title)("p-type",i.type),s(3),d("p-value",i.event),s(3),C("ngModel",i.type),d("p-options",i.typeOptions),s(),C("ngModel",i.height),s(),C("ngModel",i.title),s(),d("ngIf",i.isLineType()),s(5),C("ngModel",i.label),s(),C("ngModel",i.data),s(),C("ngModel",i.serieType),d("p-options",i.typeOptions),s(),C("ngModel",i.tooltip),s(),C("ngModel",i.color),s(6),C("ngModel",i.categories),s(2),C("ngModel",i.options.axis.minRange),s(),C("ngModel",i.options.axis.maxRange),s(),C("ngModel",i.options.axis.gridLines),s(),C("ngModel",i.options.innerRadius),s(),C("ngModel",i.options.axis.labelType),d("p-options",i.labelTypeOptions),s(),C("ngModel",i.optionsActions),d("p-options",i.propertiesOptions))},dependencies:[Q,ee,X,K,$,Z,oe,M,ie,le,pe,se,me,de],encapsulation:2})}return a})();var Be=a=>({"docs-sample-code-tabs":a}),Ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-chart-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Chart Labs"),n(),t(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-chart-labs/sample-po-chart-labs.component.html"),n(),t(13,"pre",7),e(14,`<po-chart
  [p-categories]="allCategories"
  [p-height]="height"
  [p-options]="options"
  [p-series]="series"
  [p-title]="title"
  [p-type]="type"
  (p-series-click)="changeEvent('p-series-click', $event)"
  (p-series-hover)="changeEvent('p-series-hover', $event)"
>
</po-chart>

<po-divider class="po-md-12" p-label="Events"></po-divider>

<div class="po-row">
  <po-info p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider class="po-md-12" p-label="Properties"></po-divider>

<form>
  <po-select class="po-md-3" name="type" [(ngModel)]="type" p-columns="3" p-label="Type" [p-options]="typeOptions">
  </po-select>

  <po-number class="po-md-2" name="height" [(ngModel)]="height" p-label="Height"> </po-number>

  <po-input class="po-md-4" name="title" [(ngModel)]="title" p-label="Title"> </po-input>

  <po-checkbox-group
    *ngIf="isLineType()"
    class="po-md-3"
    name="dataLabel"
    p-label="dataLabel"
    p-help="only for Line Chart"
    [(ngModel)]="dataLabel"
    [p-options]="dataLabelOptions"
    (p-change)="changeDataLabelOptions($event)"
  >
  </po-checkbox-group>
</form>

<form #chartSeries="ngForm">
  <po-divider class="po-md-12" p-label="Chart series"></po-divider>

  <div class="po-row">
    <po-input
      class="po-md-4"
      name="label"
      [(ngModel)]="label"
      p-label="Label"
      p-help="Serie label"
      p-required
    ></po-input>

    <po-input
      class="po-md-4"
      name="data"
      [(ngModel)]="data"
      p-label="Data"
      p-help="Example: [25, 58, 83, 66] or 25"
      p-required
    >
    </po-input>

    <po-select
      class="po-md-4"
      name="serieType"
      [(ngModel)]="serieType"
      p-help="Serie Type"
      p-label="Type"
      [p-options]="typeOptions"
    >
    </po-select>

    <po-input class="po-md-4" name="tooltip" [(ngModel)]="tooltip" p-label="Tooltip" p-help="Custom Tooltip"></po-input>
    <po-input class="po-md-4" name="color" [(ngModel)]="color" p-label="Color" p-help="Custom Color"></po-input>
  </div>

  <div class="po-row">
    <po-button class="po-md-4" p-label="Add Serie" (p-click)="addData(); chartSeries.reset()"> </po-button>
  </div>
</form>

<form>
  <div class="po-row">
    <po-divider class="po-md-12"></po-divider>

    <po-input
      class="po-md-4"
      name="categories"
      [(ngModel)]="categories"
      p-help='Example: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]'
      p-label="Categories"
      (p-blur)="addCategories()"
    >
    </po-input>

    <po-divider class="po-md-12" p-label="Chart options"></po-divider>

    <po-number
      class="po-md-4"
      name="minRange"
      [(ngModel)]="options.axis.minRange"
      p-help="Example: 0"
      p-label="minRange"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="maxRange"
      [(ngModel)]="options.axis.maxRange"
      p-help="Example: 100"
      p-label="maxRange"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="gridLines"
      [(ngModel)]="options.axis.gridLines"
      p-help="Example: 6"
      p-label="gridLines"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="innerRadius"
      [(ngModel)]="options.innerRadius"
      p-help="Example: value between 0 and 100"
      p-label="innerRadius"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-select
      class="po-md-4"
      name="labelType"
      [(ngModel)]="options.axis.labelType"
      p-label="labelType"
      [p-options]="labelTypeOptions"
      (p-change)="addOptions()"
    >
    </po-select>

    <po-checkbox-group
      class="po-md-4"
      name="propertiesOptions"
      p-help="Boolean properties"
      p-indeterminate
      p-label="Properties"
      [(ngModel)]="optionsActions"
      [p-options]="propertiesOptions"
      (p-change)="changeActionOptions()"
    >
    </po-checkbox-group>
  </div>

  <po-divider class="po-md-12"></po-divider>
  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-chart-labs/sample-po-chart-labs.component.ts"),n(),t(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import {
  PoChartSerie,
  PoChartType,
  PoSelectOption,
  PoChartOptions,
  PoCheckboxGroupOption,
  PoChartDataLabel,
  PoChartLabelFormat
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-chart-labs',
  templateUrl: './sample-po-chart-labs.component.html',
  standalone: false
})
export class SamplePoChartLabsComponent implements OnInit {
  allCategories: Array<string> = [];
  categories: string;
  color: string;
  data;
  event: string;
  height: number;
  label: string;
  optionsActions: PoChartOptions;
  series: Array<PoChartSerie>;
  serieType: PoChartType;
  title: string;
  tooltip: string;
  type: PoChartType;
  options: PoChartOptions = {
    axis: {
      minRange: undefined,
      maxRange: undefined,
      gridLines: undefined,
      labelType: undefined
    }
  };
  dataLabel: PoChartDataLabel;

  readonly propertiesOptions: Array<PoCheckboxGroupOption> = [{ value: 'legend', label: 'Legend' }];

  readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Donut', value: PoChartType.Donut },
    { label: 'Pie', value: PoChartType.Pie },
    { label: 'Area', value: PoChartType.Area },
    { label: 'Line', value: PoChartType.Line },
    { label: 'Column', value: PoChartType.Column },
    { label: 'Bar', value: PoChartType.Bar }
  ];

  readonly dataLabelOptions: Array<PoCheckboxGroupOption> = [{ value: 'fixed', label: 'Fixed' }];

  readonly labelTypeOptions: Array<PoSelectOption> = [
    { label: 'Number', value: PoChartLabelFormat.Number },
    { label: 'Currency', value: PoChartLabelFormat.Currency }
  ];

  ngOnInit() {
    this.restore();
  }

  addOptions(actionOptions?: PoChartOptions) {
    this.options = { ...this.options, ...(actionOptions ? { ...actionOptions } : {}) };
  }

  addCategories() {
    this.allCategories = this.convertToArray(this.categories);
  }

  addData() {
    const data = isNaN(this.data) ? this.convertToArray(this.data) : Math.floor(this.data);
    const type = this.serieType ?? this.type;
    const color = this.color;

    this.series = [
      ...this.series,
      { label: this.label, data, tooltip: this.tooltip, ...(color ? { color } : {}), type }
    ];
  }

  changeActionOptions() {
    const legend = this.optionsActions.legend;

    this.addOptions({ legend });
  }

  isLineType(): boolean {
    return this.type === PoChartType.Line;
  }

  changeDataLabelOptions() {
    const fixed = this.dataLabel.fixed;
  }

  changeEvent(eventName: string, serieEvent: PoChartSerie): void {
    this.event = \`\${eventName}: \${JSON.stringify(serieEvent)}\`;
  }

  restore() {
    this.color = undefined;
    this.type = undefined;
    this.serieType = undefined;
    this.label = undefined;
    this.categories = undefined;
    this.event = undefined;
    this.height = undefined;
    this.series = [];
    this.title = undefined;
    this.tooltip = undefined;
    this.data = undefined;
    this.allCategories = [];
    this.optionsActions = {
      legend: null
    };
    this.dataLabel = {
      fixed: false
    };
    this.options = {
      ...this.optionsActions,
      axis: {
        minRange: undefined,
        maxRange: undefined,
        gridLines: undefined,
        labelType: undefined
      }
    };
  }

  private convertToArray(value: string): Array<any> {
    try {
      return JSON.parse(value);
    } catch {
      return undefined;
    }
  }
}
`),n()()()()(),t(21,"div",10),o(22,"sample-po-chart-labs"),n(),o(23,"hr")),l&2&&(s(5),_("po-icon "+i.sampleCodeButtonIcon),s(),T(" ",i.sampleCodeButtonLabel,""),s(),d("ngClass",w(4,Be,i.hideSampleCodeTabs)))},dependencies:[L,P,y,v,be],encapsulation:2})}return a})();var Se=(()=>{class a{poAlert;participationByCountryInWorldExportsType=g.Line;evolutionOfCoffeeAndSomeCompetitorsType=g.Column;coffeConsumingChartType=g.Donut;consumptionPerCapitaType=g.Bar;categories=["2010","2011","2012","2013","2014","2015"];chartAreaCategories=["Jan-18","Jul-18","Jan-19","Jul-19","Jan-20","Jul-20","Jan-21"];categoriesColumn=["coffee","chocolate","tea"];consumptionPerCapitaItems=["Water","Fruit Juice","Coffee","Cola drinks","Pils","Tea","Red Wine","Prosecco","Sodas","Beer 0% A.","Wheat Beer","Milk Shakes","Icetea"];chartAreaSeries=[{label:"Starbucks",data:[550,497,532,550,530,565,572],type:g.Area},{label:"Green Mntn Coffee Roaster",data:[420,511,493,525,522,510,567],type:g.Area},{label:"Dunkin Brands Group",data:[312,542,497,610,542,661,674],type:g.Area},{label:"Coffee Arabica Price",data:[550,612,525,373,342,297,282],type:g.Line,color:"po-color-07"}];coffeeConsumption=[{label:"Finland",data:9.6,tooltip:"Finland (Europe)"},{label:"Norway",data:7.2,tooltip:"Norway (Europe)"},{label:"Netherlands",data:6.7,tooltip:"Netherlands (Europe)"},{label:"Slovenia",data:6.1,tooltip:"Slovenia (Europe)"},{label:"Austria",data:5.5,tooltip:"Austria (Europe)"}];consumptionPerCapita=[{label:"2018",data:[86.5,51.3,44.6,39.5,27.6,27.3,25.4,21.5,20.8,15.9,15.4,14.4]},{label:"2020",data:[86.1,52.1,47.3,37.8,29.8,28.5,24.9,22.5,21.1,14.5,15.5,15.5]}];participationByCountryInWorldExports=[{label:"Brazil",data:[35,32,25,29,33,33],color:"color-10"},{label:"Vietnam",data:[15,17,23,19,22,18]},{label:"Colombia",data:[8,7,6,9,10,11]},{label:"India",data:[5,6,5,4,5,5]},{label:"Indonesia",data:[7,6,10,10,4,6]}];evolutionOfCoffeeAndSomeCompetitors=[{label:"2014",data:[91,40,42],type:g.Column},{label:"2017",data:[93,52,18],type:g.Column},{label:"2020",data:[95,21,-17],type:g.Column},{label:"Coffee consumption in Brazil",data:[34,27,79],type:g.Line,color:"color-10"}];coffeeProduction=[{label:"Brazil",data:2796,tooltip:"Brazil (South America)",color:"color-10"},{label:"Vietnam",data:1076,tooltip:"Vietnam (Asia)"},{label:"Colombia",data:688,tooltip:"Colombia (South America)"},{label:"Indonesia",data:682,tooltip:"Indonesia (Asia/Oceania)"},{label:"Peru",data:273,tooltip:"Peru (South America)"}];items=[{position:"1",company:"Tim Hortons",location:"Hamilton, Ontario, Canada",foundation:"1964"},{position:"2",company:"Bewley\u2019s",location:"Dublin, Ireland",foundation:"1840"},{position:"3",company:"Lavazza Coffee",location:"Italy",foundation:"1895"},{position:"4",company:"Peet\u2019s Tea and Coffee",location:"Emeryville, California, US",foundation:"1966"},{position:"5",company:"Tully\u2019s Coffee",location:"Seattle, Washington, US",foundation:"1992"},{position:"6",company:"Costa Coffee",location:"Dunstable, England",foundation:"1971"},{position:"7",company:"McCafe",location:"Oak Brook, Illinois, United States",foundation:"1993"},{position:"8",company:"Starbucks Coffee",location:"Seattle, Washington, US",foundation:"1971"},{position:"9",company:"Dunkin\u2019 Donuts",location:"Quincy, Massachusetts, US",foundation:"1950"},{position:"10",company:"Coffee Beanery",location:"Flushing, Michigan, US",foundation:"1976"}];consumptionPerCapitaOptions={axis:{maxRange:100,gridLines:2,labelType:O.Number}};chartAreaOptions={axis:{maxRange:700,gridLines:8}};options={axis:{minRange:0,maxRange:40,gridLines:5,labelType:O.Number}};optionsColumn={axis:{minRange:-20,maxRange:100,gridLines:7}};constructor(p){this.poAlert=p}searchMore(p){window.open(`http://google.com/search?q=coffee+producing+${p.label}`,"_blank")}showMeTheDates(p){this.poAlert.alert({title:"Statistic",message:`${p.label} consuming ${p.data}kg per capita!`,ok:()=>{}})}static \u0275fac=function(l){return new(l||a)(A(R))};static \u0275cmp=b({type:a,selectors:[["sample-po-chart-coffee-ranking"]],standalone:!1,features:[G([R])],decls:28,vars:20,consts:[[1,"po-row"],[1,"po-md-12","po-lg-6"],["p-title","Participation by country in world exports - %",1,"po-md-12","po-mt-2",3,"p-options","p-categories","p-series","p-type"],["p-title","Evolution of coffee and some competitors - %",1,"po-md-12","po-mt-2",3,"p-options","p-categories","p-series"],["p-title","Ranking of the most purchased and consumed beverages in Germany between 2018 and 2020 - in %",1,"po-md-12","po-mt-2",3,"p-height","p-categories","p-series","p-type","p-options"],[1,"po-md-12"],["p-title","Top 5 coffee producing countries (in tons)",1,"po-lg-6","po-mt-2",3,"p-series-click","p-series"],["p-title","Top 5 Coffee Consuming Countries (in kg per capita)",1,"po-lg-6","po-mt-2",3,"p-series-click","p-series","p-type"],["p-title","While the coffee price falls, all three of these companies profit margins have risen  - (US$ millions)",1,"po-md-6","po-mt-2",3,"p-options","p-categories","p-series"],[1,"po-md-6","po-mt-2"],["p-height","198"],[1,"po-font-title","po-text-center","po-pt-5"],[1,"po-text-center"],[1,"po-lg-12","po-mt-2"],[1,"po-font-text-bold"],["p-container","shadow",3,"p-items","p-hide-table-search"]],template:function(l,i){l&1&&(t(0,"div",0)(1,"div",1)(2,"div",0),o(3,"po-chart",2)(4,"po-chart",3),n()(),t(5,"div",1),o(6,"po-chart",4),n(),t(7,"div",5)(8,"po-chart",6),E("p-series-click",function(c){return i.searchMore(c)}),n(),t(9,"po-chart",7),E("p-series-click",function(c){return i.showMeTheDates(c)}),n()(),t(10,"div",0),o(11,"po-chart",8),t(12,"div",9)(13,"po-widget",10)(14,"div",11),e(15,"66 billion"),n(),t(16,"div",12),e(17,"cups of coffee are consumed per year in U.S."),n()(),t(18,"po-widget",10)(19,"div",11),e(20,"2nd most"),n(),t(21,"div",12),e(22,"traded commodity in the world second to Oil."),n()()()()(),t(23,"div",0)(24,"po-container",13)(25,"div",14),e(26,"Top 10 Largest Coffee Chains in the World"),n(),o(27,"po-table",15),n()()),l&2&&(s(3),d("p-options",i.options)("p-categories",i.categories)("p-series",i.participationByCountryInWorldExports)("p-type",i.participationByCountryInWorldExportsType),s(),d("p-options",i.optionsColumn)("p-categories",i.categoriesColumn)("p-series",i.evolutionOfCoffeeAndSomeCompetitors),s(2),d("p-height",816)("p-categories",i.consumptionPerCapitaItems)("p-series",i.consumptionPerCapita)("p-type",i.consumptionPerCapitaType)("p-options",i.consumptionPerCapitaOptions),s(2),d("p-series",i.coffeeProduction),s(),d("p-series",i.coffeeConsumption)("p-type",i.coffeConsumingChartType),s(2),d("p-options",i.chartAreaOptions)("p-categories",i.chartAreaCategories)("p-series",i.chartAreaSeries),s(16),d("p-items",i.items)("p-hide-table-search",!1))},dependencies:[M,re,ae,ue],encapsulation:2})}return a})();var Re=a=>({"docs-sample-code-tabs":a}),fe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-chart-coffee-ranking-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Chart - Coffee Ranking"),n(),t(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-chart-coffee-ranking/sample-po-chart-coffee-ranking.component.html"),n(),t(13,"pre",7),e(14,`<div class="po-row">
  <div class="po-md-12 po-lg-6">
    <div class="po-row">
      <po-chart
        class="po-md-12 po-mt-2"
        p-title="Participation by country in world exports - %"
        [p-options]="options"
        [p-categories]="categories"
        [p-series]="participationByCountryInWorldExports"
        [p-type]="participationByCountryInWorldExportsType"
      >
      </po-chart>

      <po-chart
        class="po-md-12 po-mt-2"
        p-title="Evolution of coffee and some competitors - %"
        [p-options]="optionsColumn"
        [p-categories]="categoriesColumn"
        [p-series]="evolutionOfCoffeeAndSomeCompetitors"
      >
      </po-chart>
    </div>
  </div>

  <div class="po-md-12 po-lg-6">
    <po-chart
      class="po-md-12 po-mt-2"
      p-title="Ranking of the most purchased and consumed beverages in Germany between 2018 and 2020 - in %"
      [p-height]="816"
      [p-categories]="consumptionPerCapitaItems"
      [p-series]="consumptionPerCapita"
      [p-type]="consumptionPerCapitaType"
      [p-options]="consumptionPerCapitaOptions"
    >
    </po-chart>
  </div>

  <div class="po-md-12">
    <po-chart
      class="po-lg-6 po-mt-2"
      p-title="Top 5 coffee producing countries (in tons)"
      [p-series]="coffeeProduction"
      (p-series-click)="searchMore($event)"
    >
    </po-chart>

    <po-chart
      class="po-lg-6 po-mt-2"
      p-title="Top 5 Coffee Consuming Countries (in kg per capita)"
      [p-series]="coffeeConsumption"
      [p-type]="coffeConsumingChartType"
      (p-series-click)="showMeTheDates($event)"
    >
    </po-chart>
  </div>

  <div class="po-row">
    <po-chart
      class="po-md-6 po-mt-2"
      p-title="While the coffee price falls, all three of these companies profit margins have risen  - (US$ millions)"
      [p-options]="chartAreaOptions"
      [p-categories]="chartAreaCategories"
      [p-series]="chartAreaSeries"
    >
    </po-chart>

    <div class="po-md-6 po-mt-2">
      <po-widget p-height="198">
        <div class="po-font-title po-text-center po-pt-5">66 billion</div>
        <div class="po-text-center">cups of coffee are consumed per year in U.S.</div>
      </po-widget>

      <po-widget p-height="198">
        <div class="po-font-title po-text-center po-pt-5">2nd most</div>
        <div class="po-text-center">traded commodity in the world second to Oil.</div>
      </po-widget>
    </div>
  </div>
</div>

<div class="po-row">
  <po-container class="po-lg-12 po-mt-2">
    <div class="po-font-text-bold">Top 10 Largest Coffee Chains in the World</div>

    <po-table p-container="shadow" [p-items]="items" [p-hide-table-search]="false"> </po-table>
  </po-container>
</div>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-chart-coffee-ranking/sample-po-chart-coffee-ranking.component.ts"),n(),t(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoChartType, PoChartOptions, PoChartSerie, PoDialogService, PoChartLabelFormat } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-chart-coffee-ranking',
  templateUrl: './sample-po-chart-coffee-ranking.component.html',
  providers: [PoDialogService],
  standalone: false
})
export class SamplePoChartCoffeeRankingComponent {
  participationByCountryInWorldExportsType: PoChartType = PoChartType.Line;
  evolutionOfCoffeeAndSomeCompetitorsType: PoChartType = PoChartType.Column;
  coffeConsumingChartType: PoChartType = PoChartType.Donut;
  consumptionPerCapitaType: PoChartType = PoChartType.Bar;

  categories: Array<string> = ['2010', '2011', '2012', '2013', '2014', '2015'];

  chartAreaCategories: Array<string> = ['Jan-18', 'Jul-18', 'Jan-19', 'Jul-19', 'Jan-20', 'Jul-20', 'Jan-21'];

  categoriesColumn: Array<string> = ['coffee', 'chocolate', 'tea'];

  consumptionPerCapitaItems: Array<string> = [
    'Water',
    'Fruit Juice',
    'Coffee',
    'Cola drinks',
    'Pils',
    'Tea',
    'Red Wine',
    'Prosecco',
    'Sodas',
    'Beer 0% A.',
    'Wheat Beer',
    'Milk Shakes',
    'Icetea'
  ];

  chartAreaSeries: Array<PoChartSerie> = [
    { label: 'Starbucks', data: [550, 497, 532, 550, 530, 565, 572], type: PoChartType.Area },
    { label: 'Green Mntn Coffee Roaster', data: [420, 511, 493, 525, 522, 510, 567], type: PoChartType.Area },
    { label: 'Dunkin Brands Group', data: [312, 542, 497, 610, 542, 661, 674], type: PoChartType.Area },
    {
      label: 'Coffee Arabica Price',
      data: [550, 612, 525, 373, 342, 297, 282],
      type: PoChartType.Line,
      color: 'po-color-07'
    }
  ];

  coffeeConsumption: Array<PoChartSerie> = [
    { label: 'Finland', data: 9.6, tooltip: 'Finland (Europe)' },
    { label: 'Norway', data: 7.2, tooltip: 'Norway (Europe)' },
    { label: 'Netherlands', data: 6.7, tooltip: 'Netherlands (Europe)' },
    { label: 'Slovenia', data: 6.1, tooltip: 'Slovenia (Europe)' },
    { label: 'Austria', data: 5.5, tooltip: 'Austria (Europe)' }
  ];

  consumptionPerCapita: Array<PoChartSerie> = [
    { label: '2018', data: [86.5, 51.3, 44.6, 39.5, 27.6, 27.3, 25.4, 21.5, 20.8, 15.9, 15.4, 14.4] },
    { label: '2020', data: [86.1, 52.1, 47.3, 37.8, 29.8, 28.5, 24.9, 22.5, 21.1, 14.5, 15.5, 15.5] }
  ];

  participationByCountryInWorldExports: Array<PoChartSerie> = [
    { label: 'Brazil', data: [35, 32, 25, 29, 33, 33], color: 'color-10' },
    { label: 'Vietnam', data: [15, 17, 23, 19, 22, 18] },
    { label: 'Colombia', data: [8, 7, 6, 9, 10, 11] },
    { label: 'India', data: [5, 6, 5, 4, 5, 5] },
    { label: 'Indonesia', data: [7, 6, 10, 10, 4, 6] }
  ];

  evolutionOfCoffeeAndSomeCompetitors: Array<PoChartSerie> = [
    { label: '2014', data: [91, 40, 42], type: PoChartType.Column },
    { label: '2017', data: [93, 52, 18], type: PoChartType.Column },
    { label: '2020', data: [95, 21, -17], type: PoChartType.Column },
    { label: 'Coffee consumption in Brazil', data: [34, 27, 79], type: PoChartType.Line, color: 'color-10' }
  ];

  coffeeProduction: Array<PoChartSerie> = [
    { label: 'Brazil', data: 2796, tooltip: 'Brazil (South America)', color: 'color-10' },
    { label: 'Vietnam', data: 1076, tooltip: 'Vietnam (Asia)' },
    { label: 'Colombia', data: 688, tooltip: 'Colombia (South America)' },
    { label: 'Indonesia', data: 682, tooltip: 'Indonesia (Asia/Oceania)' },
    { label: 'Peru', data: 273, tooltip: 'Peru (South America)' }
  ];

  items: Array<any> = [
    { position: '1', company: 'Tim Hortons', location: 'Hamilton, Ontario, Canada', foundation: '1964' },
    { position: '2', company: 'Bewley\u2019s', location: 'Dublin, Ireland', foundation: '1840' },
    { position: '3', company: 'Lavazza Coffee', location: 'Italy', foundation: '1895' },
    { position: '4', company: 'Peet\u2019s Tea and Coffee', location: 'Emeryville, California, US', foundation: '1966' },
    { position: '5', company: 'Tully\u2019s Coffee', location: 'Seattle, Washington, US', foundation: '1992' },
    { position: '6', company: 'Costa Coffee', location: 'Dunstable, England', foundation: '1971' },
    { position: '7', company: 'McCafe', location: 'Oak Brook, Illinois, United States', foundation: '1993' },
    { position: '8', company: 'Starbucks Coffee', location: 'Seattle, Washington, US', foundation: '1971' },
    { position: '9', company: 'Dunkin\u2019 Donuts', location: 'Quincy, Massachusetts, US', foundation: '1950' },
    { position: '10', company: 'Coffee Beanery', location: 'Flushing, Michigan, US', foundation: '1976' }
  ];

  consumptionPerCapitaOptions: PoChartOptions = {
    axis: {
      maxRange: 100,
      gridLines: 2,
      labelType: PoChartLabelFormat.Number
    }
  };

  chartAreaOptions: PoChartOptions = {
    axis: {
      maxRange: 700,
      gridLines: 8
    }
  };

  options: PoChartOptions = {
    axis: {
      minRange: 0,
      maxRange: 40,
      gridLines: 5,
      labelType: PoChartLabelFormat.Number
    }
  };

  optionsColumn: PoChartOptions = {
    axis: {
      minRange: -20,
      maxRange: 100,
      gridLines: 7
    }
  };

  constructor(private poAlert: PoDialogService) {}

  searchMore(event: any) {
    window.open(\`http://google.com/search?q=coffee+producing+\${event.label}\`, '_blank');
  }

  showMeTheDates(event: any) {
    this.poAlert.alert({
      title: 'Statistic',
      message: \`\${event.label} consuming \${event.data}kg per capita!\`,
      ok: () => {}
    });
  }
}
`),n()()()()(),t(21,"div",10),o(22,"sample-po-chart-coffee-ranking"),n(),o(23,"hr")),l&2&&(s(5),_("po-icon "+i.sampleCodeButtonIcon),s(),T(" ",i.sampleCodeButtonLabel,""),s(),d("ngClass",w(4,Re,i.hideSampleCodeTabs)))},dependencies:[L,P,y,v,Se],encapsulation:2})}return a})();var xe=(()=>{class a{participationByCountryInWorldExportsType=g.Line;options={axis:{minRange:0,maxRange:40,gridLines:5}};dataLabel={fixed:!0};categories=["2010","2011","2012","2013","2014","2015"];participationByCountryInWorldExports=[{label:"Brazil",data:[35,32,27,29,33,33]},{label:"Vietnam",data:[15,17,18,19,22,18]},{label:"Colombia",data:[8,7,6,9,10,11]}];static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-chart-world-exports"]],standalone:!1,decls:2,vars:5,consts:[[1,"po-row"],["p-title","Participation by country in world exports - %",1,"po-md-12",3,"p-options","p-categories","p-series","p-type","p-data-label"]],template:function(l,i){l&1&&(t(0,"div",0),o(1,"po-chart",1),n()),l&2&&(s(),d("p-options",i.options)("p-categories",i.categories)("p-series",i.participationByCountryInWorldExports)("p-type",i.participationByCountryInWorldExportsType)("p-data-label",i.dataLabel))},dependencies:[M],encapsulation:2})}return a})();var Fe=a=>({"docs-sample-code-tabs":a}),ye=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-chart-world-exports-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Chart - World Exports"),n(),t(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-chart-world-exports/sample-po-chart-world-exports.component.html"),n(),t(13,"pre",7),e(14,`<div class="po-row">
  <po-chart
    class="po-md-12"
    p-title="Participation by country in world exports - %"
    [p-options]="options"
    [p-categories]="categories"
    [p-series]="participationByCountryInWorldExports"
    [p-type]="participationByCountryInWorldExportsType"
    [p-data-label]="dataLabel"
  >
  </po-chart>
</div>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-chart-world-exports/sample-po-chart-world-exports.component.ts"),n(),t(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoChartOptions, PoChartSerie, PoChartType } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-chart-world-exports',
  templateUrl: './sample-po-chart-world-exports.component.html',
  standalone: false
})
export class SamplePoChartWorldExportsComponent {
  participationByCountryInWorldExportsType: PoChartType = PoChartType.Line;
  options: PoChartOptions = {
    axis: {
      minRange: 0,
      maxRange: 40,
      gridLines: 5
    }
  };
  dataLabel = { fixed: true };

  categories: Array<string> = ['2010', '2011', '2012', '2013', '2014', '2015'];

  participationByCountryInWorldExports: Array<PoChartSerie> = [
    { label: 'Brazil', data: [35, 32, 27, 29, 33, 33] },
    { label: 'Vietnam', data: [15, 17, 18, 19, 22, 18] },
    { label: 'Colombia', data: [8, 7, 6, 9, 10, 11] }
  ];
}
`),n()()()()(),t(21,"div",10),o(22,"sample-po-chart-world-exports"),n(),o(23,"hr")),l&2&&(s(5),_("po-icon "+i.sampleCodeButtonIcon),s(),T(" ",i.sampleCodeButtonLabel,""),s(),d("ngClass",w(4,Fe,i.hideSampleCodeTabs)))},dependencies:[L,P,y,v,xe],encapsulation:2})}return a})();var ve=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-chart-doc"]],standalone:!1,decls:1097,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/guides/guide-charts"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string[]"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoChartDataLabel"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoChartOptions"],["pan","",1,"docs-api-property-type","PoChartSerie[]"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","PoChartType"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoChartLabelFormat"],["pan","",1,"docs-api-property-type","PoChartAxisOptions"],["pan","",1,"docs-api-property-type","boolean"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],["pan","",1,"docs-api-property-type","Array<number>"],["href","https://angular.io/api/common/DecimalPipe"],["href","https://angular.dev/api/core/DEFAULT_CURRENCY_CODE"],["href","https://angular.dev/api/core/LOCALE_ID"]],template:function(l,i){l&1&&(t(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoChartModule } from '@po-ui/ng-components';"),n()(),t(4,"div",2)(5,"p"),e(6,"M\xF3dulo do componente "),t(7,"code"),e(8,"po-chart"),n(),e(9,"."),n()(),t(10,"h3",3),e(11,"Componente"),n(),t(12,"h4",4)(13,"code",5),e(14,"PoChartComponent"),n()(),t(15,"div",2)(16,"p"),e(17,"O "),t(18,"code"),e(19,"po-chart"),n(),e(20,` \xE9 um componente para renderiza\xE7\xE3o de dados atrav\xE9s de gr\xE1ficos, com isso facilitando a compreens\xE3o e tornando a
visualiza\xE7\xE3o destes dados mais agrad\xE1vel.`),n(),t(21,"p"),e(22,"Atrav\xE9s de suas principais propriedades \xE9 poss\xEDvel definir atributos, tais como tipo de gr\xE1fico, altura, t\xEDtulo, cores customizadas, op\xE7\xF5es para os eixos, entre outros."),n(),t(23,"p"),e(24,"O componente permite utilizar em conjunto s\xE9ries do tipo linha e coluna."),n(),t(25,"p"),e(26,`Al\xE9m disso, tamb\xE9m \xE9 poss\xEDvel definir uma a\xE7\xE3o que ser\xE1 executada ao clicar em determinado elemento do gr\xE1fico
e outra que ser\xE1 executada ao passar o `),t(27,"em"),e(28,"mouse"),n(),e(29," sobre o elemento."),n(),t(30,"h4"),e(31,"Guia de uso para Gr\xE1ficos"),n(),t(32,"blockquote")(33,"p"),e(34,"Veja nosso "),t(35,"a",6),e(36,"guia de uso para gr\xE1ficos"),n(),e(37,` para auxiliar na constru\xE7\xE3o do seu gr\xE1fico,
informando em qual caso utilizar, o que devemos evitar e boas pr\xE1ticas relacionada a cores. `),n()()(),t(38,"div",7)(39,"h4",8),e(40,"Seletor"),n(),t(41,"pre",9),e(42,`<po-chart
    p-categories="string[]"
    p-data-label="PoChartDataLabel"
    p-height="number"
    p-options="PoChartOptions"
    p-series="PoChartSerie[]"
    (p-series-click)="EventEmitter"
    (p-series-hover)="EventEmitter"
    p-title="string"
    p-type="PoChartType" >
</po-chart>
`),n()(),t(43,"h4",10),e(44,"Propriedades"),n(),t(45,"table",11)(46,"tr",12)(47,"th",13),e(48,"Nome"),n(),t(49,"th",13),e(50,"Tipo"),n(),t(51,"th",13),e(52,"Padr\xE3o"),n(),t(53,"th",13),e(54,"Descri\xE7\xE3o"),n()(),t(55,"tr",14)(56,"td",15)(57,"div",16)(58,"span",17),e(59," p-categories"),o(60,"br"),n()()(),t(61,"td",18)(62,"code",19),e(63,"string[]"),n()(),t(64,"td",20),e(65,"-"),n(),t(66,"td",21)(67,"em")(68,"strong"),e(69,"(opcional)"),n()(),t(70,"p"),e(71,"Define os nomes das categorias que ser\xE3o plotadas no eixo X do gr\xE1fico caso seja do tipo "),t(72,"code"),e(73,"bar"),n(),e(74,", ou ent\xE3o nos eixos Y do grid de gr\xE1ficos dos tipos "),t(75,"code"),e(76,"area"),n(),e(77,", "),t(78,"code"),e(79,"columnn"),n(),e(80," e "),t(81,"code"),e(82,"line"),n(),e(83,"."),n(),t(84,"blockquote")(85,"p"),e(86,"Gr\xE1ficos do tipo "),t(87,"code"),e(88,"bar"),n(),e(89," dimensionam a \xE1rea do gr\xE1fico de acordo com a largura do maior texto de categorias. No entanto, \xE9 uma boa pr\xE1tica optar por palavras curtas para que a leitura do gr\xE1fico n\xE3o seja prejudicada."),n()(),t(90,"blockquote")(91,"p"),e(92,"Caso n\xE3o seja especificado um valor para a categoria, ser\xE1 plotado um h\xEDfen na categoria referente a cada s\xE9rie."),n()()()(),t(93,"tr",14)(94,"td",15)(95,"div",16)(96,"span",17),e(97," p-data-label"),o(98,"br"),n()()(),t(99,"td",18)(100,"code",22),e(101,"PoChartDataLabel"),n()(),t(102,"td",20),e(103,"-"),n(),t(104,"td",21)(105,"em")(106,"strong"),e(107,"(opcional)"),n()(),t(108,"p"),e(109,"Permite configurar as propriedades de exibi\xE7\xE3o dos r\xF3tulos das s\xE9ries no gr\xE1fico."),n(),t(110,"p"),e(111,"Essa configura\xE7\xE3o possibilita fixar os valores das s\xE9ries diretamente no gr\xE1fico, alterando o comportamento visual:"),n(),t(112,"ul")(113,"li"),e(114,"Os valores das s\xE9ries permanecem vis\xEDveis, sem a necessidade de hover."),n(),t(115,"li"),e(116,"O "),t(117,"em"),e(118,"tooltip"),n(),e(119," n\xE3o ser\xE1 exibido."),n(),t(120,"li"),e(121,"Os marcadores ("),t(122,"em"),e(123,"bullets"),n(),e(124,") ter\xE3o seu estilo ajustado."),n(),t(125,"li"),e(126,"As outras s\xE9ries ficar\xE3o com opacidade reduzida ao passar o mouse sobre a s\xE9rie ativa."),n()(),t(127,"blockquote")(128,"p"),e(129,"Dispon\xEDvel apenas para gr\xE1ficos do tipo "),t(130,"code"),e(131,"line"),n(),e(132,"."),n()(),t(133,"h4"),e(134,"Exemplo de utiliza\xE7\xE3o:"),n(),t(135,"pre")(136,"code",23),e(137,`dataLabel: PoChartDataLabel = {
  fixed: true,
};
`),n()()()(),t(138,"tr",14)(139,"td",15)(140,"div",16)(141,"span",17),e(142," p-height"),o(143,"br"),n()()(),t(144,"td",18)(145,"code",24),e(146,"number"),n()(),t(147,"td",20)(148,"p")(149,"code"),e(150,"400px"),n()()(),t(151,"td",21)(152,"em")(153,"strong"),e(154,"(opcional)"),n()(),t(155,"p"),e(156,"Define a altura do gr\xE1fico."),n(),t(157,"blockquote")(158,"p"),e(159,"O valor m\xEDnimo aceito nesta propriedade \xE9 200."),n()()()(),t(160,"tr",14)(161,"td",15)(162,"div",16)(163,"span",17),e(164," p-options"),o(165,"br"),n()()(),t(166,"td",18)(167,"code",25),e(168,"PoChartOptions"),n()(),t(169,"td",20),e(170,"-"),n(),t(171,"td",21)(172,"em")(173,"strong"),e(174,"(opcional)"),n()(),t(175,"p"),e(176,"Objeto com as configura\xE7\xF5es usadas no "),t(177,"code"),e(178,"po-chart"),n(),e(179,"."),n(),t(180,"p"),e(181,`\xC9 poss\xEDvel, por exemplo, definir as configura\xE7\xF5es de exibi\xE7\xE3o das legendas,
configurar os eixos(`),t(182,"em"),e(183,"axis"),n(),e(184,") para os gr\xE1ficos dos tipos "),t(185,"code"),e(186,"area"),n(),e(187,", "),t(188,"code"),e(189,"line"),n(),e(190,", "),t(191,"code"),e(192,"column"),n(),e(193," e "),t(194,"code"),e(195,"bar"),n(),e(196," da seguinte forma:"),n(),t(197,"pre")(198,"code"),e(199,`chartOptions: PoChartOptions = {
  legend: true,
  axis: {
    minRange: 0,
    maxRange: 100,
    gridLines: 5,
  },
};
`),n()()()(),t(200,"tr",14)(201,"td",15)(202,"div",16)(203,"span",17),e(204," p-series"),o(205,"br"),n()()(),t(206,"td",18)(207,"code",26),e(208,"PoChartSerie[]"),n()(),t(209,"td",20),e(210,"-"),n(),t(211,"td",21)(212,"p"),e(213,"Define os elementos do gr\xE1fico que ser\xE3o criados dinamicamente."),n()()(),t(214,"tr",14)(215,"td",15)(216,"div",27)(217,"span",28),e(218," (p-series-click)"),o(219,"br"),n()()(),t(220,"td",18)(221,"code",29),e(222,"EventEmitter"),n()(),t(223,"td",20),e(224,"-"),n(),t(225,"td",21)(226,"em")(227,"strong"),e(228,"(opcional)"),n()(),t(229,"p"),e(230,"Evento executado quando o usu\xE1rio clicar sobre um elemento do gr\xE1fico."),n(),t(231,"p"),e(232,"O evento emitir\xE1 o seguinte par\xE2metro:"),n(),t(233,"ul")(234,"li")(235,"em"),e(236,"donut"),n(),e(237," e "),t(238,"em"),e(239,"pie"),n(),e(240,": um objeto contendo a categoria e valor da s\xE9rie."),n(),t(241,"li")(242,"em"),e(243,"area"),n(),e(244,", "),t(245,"em"),e(246,"line"),n(),e(247,", "),t(248,"em"),e(249,"column"),n(),e(250," e "),t(251,"em"),e(252,"bar"),n(),e(253,": um objeto contendo o nome da s\xE9rie, valor e categoria do eixo do gr\xE1fico."),n()()()(),t(254,"tr",14)(255,"td",15)(256,"div",27)(257,"span",28),e(258," (p-series-hover)"),o(259,"br"),n()()(),t(260,"td",18)(261,"code",29),e(262,"EventEmitter"),n()(),t(263,"td",20),e(264,"-"),n(),t(265,"td",21)(266,"em")(267,"strong"),e(268,"(opcional)"),n()(),t(269,"p"),e(270,"Evento executado quando o usu\xE1rio passar o "),t(271,"em"),e(272,"mouse"),n(),e(273," sobre um elemento do gr\xE1fico."),n(),t(274,"p"),e(275,"O evento emitir\xE1 o seguinte par\xE2metro de acordo com o tipo de gr\xE1fico:"),n(),t(276,"ul")(277,"li")(278,"em"),e(279,"donut"),n(),e(280," e "),t(281,"em"),e(282,"pie"),n(),e(283,": um objeto contendo a categoria e valor da s\xE9rie."),n(),t(284,"li")(285,"em"),e(286,"area"),n(),e(287,", "),t(288,"em"),e(289,"line"),n(),e(290,", "),t(291,"em"),e(292,"column"),n(),e(293," e "),t(294,"em"),e(295,"bar"),n(),e(296,": um objeto contendo a categoria, valor da s\xE9rie e categoria do eixo do gr\xE1fico."),n()()()(),t(297,"tr",14)(298,"td",15)(299,"div",16)(300,"span",17),e(301," p-title"),o(302,"br"),n()()(),t(303,"td",18)(304,"code",30),e(305,"string"),n()(),t(306,"td",20),e(307,"-"),n(),t(308,"td",21)(309,"em")(310,"strong"),e(311,"(opcional)"),n()(),t(312,"p"),e(313,"Define o t\xEDtulo do gr\xE1fico."),n()()(),t(314,"tr",14)(315,"td",15)(316,"div",16)(317,"span",17),e(318," p-type"),o(319,"br"),n()()(),t(320,"td",18)(321,"code",31),e(322,"PoChartType"),n()(),t(323,"td",20),e(324,"-"),n(),t(325,"td",21)(326,"em")(327,"strong"),e(328,"(opcional)"),n()(),t(329,"p"),e(330,"Define o tipo de gr\xE1fico."),n(),t(331,"p"),e(332,"\xC9 poss\xEDvel tamb\xE9m combinar gr\xE1ficos dos tipos linha e coluna. Para isso, opte pela declara\xE7\xE3o de "),t(333,"code"),e(334,"type"),n(),e(335," conforme a interface "),t(336,"code"),e(337,"PoChartSerie"),n(),e(338,"."),n(),t(339,"blockquote")(340,"p"),e(341,"Note que, se houver declara\xE7\xE3o de tipo de gr\xE1fico tanto em "),t(342,"code"),e(343,"p-type"),n(),e(344," quanto em "),t(345,"code"),e(346,"PochartSerie.type"),n(),e(347,", o valor "),t(348,"code"),e(349,"{ type }"),n(),e(350," da primeira s\xE9rie anular\xE1 o valor definido em "),t(351,"code"),e(352,"p-type"),n(),e(353,"."),n()(),t(354,"p"),e(355,"Se n\xE3o passado valor, o padr\xE3o ser\xE1 relativo \xE0 primeira s\xE9rie passada em "),t(356,"code"),e(357,"p-series"),n(),e(358,":"),n(),t(359,"ul")(360,"li"),e(361,"Se "),t(362,"code"),e(363,"p-series = [{ data: [1,2,3] }]"),n(),e(364,": ser\xE1 "),t(365,"code"),e(366,"PoChartType.Column"),n(),e(367,"."),n(),t(368,"li"),e(369,"Se "),t(370,"code"),e(371,"p-series = [{ data: 1 }]"),n(),e(372,": ser\xE1 "),t(373,"code"),e(374,"PoChartType.Pie"),n(),e(375,"."),n()(),t(376,"blockquote")(377,"p"),e(378,"Veja os valores v\xE1lidos no "),t(379,"em"),e(380,"enum"),n(),t(381,"code"),e(382,"PoChartType"),n(),e(383,"."),n()()()()(),t(384,"h3"),e(385,"Interfaces"),n(),t(386,"h4",32)(387,"code",5),e(388,"PoChartAxisOptions"),n()(),t(389,"div",2)(390,"p")(391,"em"),e(392,"Interface"),n(),e(393," que define os eixos do grid."),n()(),t(394,"h4",10),e(395,"Propriedades"),n(),t(396,"table",11)(397,"tr",12)(398,"th",13),e(399,"Nome"),n(),t(400,"th",13),e(401,"Tipo"),n(),t(402,"th",13),e(403,"Descri\xE7\xE3o"),n()(),t(404,"tr",14)(405,"td",15)(406,"div",16)(407,"span",17),e(408," gridLines"),o(409,"br"),n()()(),t(410,"td",18)(411,"code",24),e(412,"number"),n()(),t(413,"td",21)(414,"em")(415,"strong"),e(416,"(opcional)"),n()(),t(417,"p"),e(418,`Define a quantidade de linhas exibidas no grid.
Para os gr\xE1ficos dos tipos `),t(419,"code"),e(420,"Area"),n(),e(421,", "),t(422,"code"),e(423,"Line"),n(),e(424," e "),t(425,"code"),e(426,"Column"),n(),e(427,`, as linhas modificadas ser\xE3o as horizontais (eixo X).
J\xE1 para gr\xE1ficos do tipo `),t(428,"code"),e(429,"Bar"),n(),e(430,", tratar\xE1 as linhas verticais (eixo Y)."),n(),t(431,"p"),e(432,"A propriedade cont\xE9m as seguintes diretrizes para seu correto funcionamento:"),n(),t(433,"ul")(434,"li"),e(435,"Quantidade padr\xE3o de linhas: '5';"),n(),t(436,"li"),e(437,"Quantidade m\xEDnima permitida: '2';"),n(),t(438,"li"),e(439,"Quantidade m\xE1xima permitida: '10';"),n()()()(),t(440,"tr",14)(441,"td",15)(442,"div",16)(443,"span",17),e(444," labelType"),o(445,"br"),n()()(),t(446,"td",18)(447,"code",33),e(448,"PoChartLabelFormat"),n()(),t(449,"td",21)(450,"em")(451,"strong"),e(452,"(opcional)"),n()(),t(453,"p"),e(454,"Define o tipo do label e a formata\xE7\xE3o exibida no eixo de valor."),n()()(),t(455,"tr",14)(456,"td",15)(457,"div",16)(458,"span",17),e(459," maxRange"),o(460,"br"),n()()(),t(461,"td",18)(462,"code",24),e(463,"number"),n()(),t(464,"td",21)(465,"em")(466,"strong"),e(467,"(opcional)"),n()(),t(468,"p"),e(469,`Define o alcance de valor m\xE1ximo exibido no eixo Y.
Caso n\xE3o seja definido valor, o valor de alcance m\xE1ximo exibido ser\xE1 o maior existente entre as s\xE9ries.
Se por acaso o valor m\xE1ximo das s\xE9ries for superior ao definido aqui, esta propriedade ser\xE1 ignorada.`),n(),t(470,"blockquote")(471,"p"),e(472,"Esta defini\xE7\xE3o n\xE3o deve refletir na plotagem das s\xE9ries. Os valores m\xE1ximos e m\xEDnimos encontrados nas s\xE9ries ser\xE3o as bases para seus alcance."),n()()()(),t(473,"tr",14)(474,"td",15)(475,"div",16)(476,"span",17),e(477," minRange"),o(478,"br"),n()()(),t(479,"td",18)(480,"code",24),e(481,"number"),n()(),t(482,"td",21)(483,"em")(484,"strong"),e(485,"(opcional)"),n()(),t(486,"p"),e(487,`Define o alcance m\xEDnimo exibido no eixo Y.
Caso n\xE3o seja definido valor, o valor-base de alcance m\xEDnimo ser\xE1 o menor encontrado entre as s\xE9ries.
Se houver valores negativos nas s\xE9ries, o menor deles ser\xE1 a base m\xEDnima.
Se por acaso o valor m\xEDnimo das s\xE9ries for inferior ao definido aqui, esta propriedade ser\xE1 ignorada.`),n(),t(488,"blockquote")(489,"p"),e(490,"Esta defini\xE7\xE3o n\xE3o deve refletir na plotagem das s\xE9ries. Os valores m\xE1ximos e m\xEDnimos encontrados nas s\xE9ries ser\xE3o as bases para seus alcance."),n()()()()(),t(491,"h4",32)(492,"code",5),e(493,"PoChartOptions"),n()(),t(494,"div",2)(495,"p")(496,"em"),e(497,"Interface"),n(),e(498," para configura\xE7\xF5es dos elementos do gr\xE1fico."),n()(),t(499,"h4",10),e(500,"Propriedades"),n(),t(501,"table",11)(502,"tr",12)(503,"th",13),e(504,"Nome"),n(),t(505,"th",13),e(506,"Tipo"),n(),t(507,"th",13),e(508,"Descri\xE7\xE3o"),n()(),t(509,"tr",14)(510,"td",15)(511,"div",16)(512,"span",17),e(513," axis"),o(514,"br"),n()()(),t(515,"td",18)(516,"code",34),e(517,"PoChartAxisOptions"),n()(),t(518,"td",21)(519,"em")(520,"strong"),e(521,"(opcional)"),n()(),t(522,"p"),e(523,"Define um objeto do tipo "),t(524,"code"),e(525,"PoChartAxisOptions"),n(),e(526," para configura\xE7\xE3o dos eixos."),n()()(),t(527,"tr",14)(528,"td",15)(529,"div",16)(530,"span",17),e(531," innerRadius"),o(532,"br"),n()()(),t(533,"td",18)(534,"code",24),e(535,"number"),n()(),t(536,"td",21)(537,"em")(538,"strong"),e(539,"(opcional)"),n()(),t(540,"p"),e(541,"Define o di\xE2metro, em valor percentual entre "),t(542,"code"),e(543,"0"),n(),e(544," e "),t(545,"code"),e(546,"100"),n(),e(547,", da \xE1rea central para gr\xE1ficos do tipo "),t(548,"code"),e(549,"donut"),n(),e(550,`.
Se passado um percentual que torne a espessura do gr\xE1fico menor do que `),t(551,"code"),e(552,"40px"),n(),e(553,`,
os textos internos do gr\xE1ficos ser\xE3o ocultados para que n\xE3o haja quebra de layout.`),n()()(),t(554,"tr",14)(555,"td",15)(556,"div",16)(557,"span",17),e(558," legend"),o(559,"br"),n()()(),t(560,"td",18)(561,"code",35),e(562,"boolean"),n()(),t(563,"td",21)(564,"em")(565,"strong"),e(566,"(opcional)"),n()(),t(567,"p"),e(568,"Define a exibi\xE7\xE3o da legenda do gr\xE1fico. Valor padr\xE3o \xE9 "),t(569,"code"),e(570,"true"),n()()()()(),t(571,"h4",32)(572,"code",5),e(573,"PoChartDataLabel"),n()(),t(574,"div",2)(575,"p"),e(576,"Interface que define as propriedades de exibi\xE7\xE3o dos r\xF3tulos das s\xE9ries no "),t(577,"code"),e(578,"po-chart"),n(),e(579,"."),n(),t(580,"blockquote")(581,"p"),e(582,"Aplic\xE1vel apenas para gr\xE1ficos do tipo "),t(583,"code"),e(584,"line"),n(),e(585,"."),n()()(),t(586,"h4",10),e(587,"Propriedades"),n(),t(588,"table",11)(589,"tr",12)(590,"th",13),e(591,"Nome"),n(),t(592,"th",13),e(593,"Tipo"),n(),t(594,"th",13),e(595,"Descri\xE7\xE3o"),n()(),t(596,"tr",14)(597,"td",15)(598,"div",16)(599,"span",17),e(600," fixed"),o(601,"br"),n()()(),t(602,"td",18)(603,"code",35),e(604,"boolean"),n()(),t(605,"td",21)(606,"em")(607,"strong"),e(608,"(opcional)"),n()(),t(609,"p"),e(610,"Indica se o texto associado aos pontos da s\xE9rie deve permanecer fixo na exibi\xE7\xE3o do gr\xE1fico."),n(),t(611,"ul")(612,"li"),e(613,"Quando definido como "),t(614,"code"),e(615,"true"),n(),e(616,":"),t(617,"ul")(618,"li"),e(619,"O "),t(620,"em"),e(621,"tooltip"),n(),e(622," n\xE3o ser\xE1 exibido."),n(),t(623,"li"),e(624,"As outras s\xE9ries ficar\xE3o com opacidade reduzida ao passar o mouse sobre a s\xE9rie ativa."),n()()()(),t(625,"blockquote")(626,"p"),e(627,"Dispon\xEDvel apenas para o tipo de gr\xE1fico "),t(628,"code"),e(629,"PoChartType.Line"),n(),e(630,"."),n()()()()(),t(631,"h4",32)(632,"code",5),e(633,"PoChartSerie"),n()(),t(634,"div",2)(635,"p"),e(636,"Interface das series din\xE2micas do "),t(637,"code"),e(638,"po-chart"),n(),e(639," que possibilita desenhar gr\xE1ficos dos tipos "),t(640,"code"),e(641,"area"),n(),e(642,", "),t(643,"code"),e(644,"bar"),n(),e(645,", "),t(646,"code"),e(647,"column"),n(),e(648,", "),t(649,"code"),e(650,"line"),n(),e(651,", "),t(652,"code"),e(653,"donut"),n(),e(654," e "),t(655,"code"),e(656,"pie"),n()()(),t(657,"h4",10),e(658,"Propriedades"),n(),t(659,"table",11)(660,"tr",12)(661,"th",13),e(662,"Nome"),n(),t(663,"th",13),e(664,"Tipo"),n(),t(665,"th",13),e(666,"Descri\xE7\xE3o"),n()(),t(667,"tr",14)(668,"td",15)(669,"div",16)(670,"span",17),e(671," color"),o(672,"br"),n()()(),t(673,"td",18)(674,"code",30),e(675,"string"),n()(),t(676,"td",21)(677,"em")(678,"strong"),e(679,"(opcional)"),n()(),t(680,"p"),e(681,"Determina a cor da s\xE9rie. As maneiras de customizar o "),t(682,"em"),e(683,"preset"),n(),e(684," padr\xE3o de cores s\xE3o:"),n(),t(685,"ul")(686,"li"),e(687,"Hexadeximal, por exemplo "),t(688,"code"),e(689,"#c64840"),n(),e(690,";"),n(),t(691,"li"),e(692,"RGB, como "),t(693,"code"),e(694,"rgb(0, 0, 165)"),n()(),t(695,"li"),e(696,"O nome da cor, por exemplo "),t(697,"code"),e(698,"blue"),n(),e(699,";"),n(),t(700,"li"),e(701,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),t(702,"ul")(703,"li"),o(704,"span",36),t(705,"code"),e(706,"color-01"),n()(),t(707,"li"),o(708,"span",37),t(709,"code"),e(710,"color-02"),n()(),t(711,"li"),o(712,"span",38),t(713,"code"),e(714,"color-03"),n()(),t(715,"li"),o(716,"span",39),t(717,"code"),e(718,"color-04"),n()(),t(719,"li"),o(720,"span",40),t(721,"code"),e(722,"color-05"),n()(),t(723,"li"),o(724,"span",41),t(725,"code"),e(726,"color-06"),n()(),t(727,"li"),o(728,"span",42),t(729,"code"),e(730,"color-07"),n()(),t(731,"li"),o(732,"span",43),t(733,"code"),e(734,"color-08"),n()(),t(735,"li"),o(736,"span",44),t(737,"code"),e(738,"color-09"),n()(),t(739,"li"),o(740,"span",45),t(741,"code"),e(742,"color-10"),n()(),t(743,"li"),o(744,"span",46),t(745,"code"),e(746,"color-11"),n()(),t(747,"li"),o(748,"span",47),t(749,"code"),e(750,"color-12"),n()()()()(),t(751,"ul")(752,"li"),e(753,"A partir da 13\xB0 s\xE9rie o valor da cor ser\xE1 preta caso n\xE3o seja enviada uma cor customizada."),n()()()(),t(754,"tr",14)(755,"td",15)(756,"div",16)(757,"span",17),e(758," data"),o(759,"br"),n()()(),t(760,"td",18)(761,"code",24),e(762,"number "),n(),t(763,"code",48),e(764," Array<number>"),n()(),t(765,"td",21)(766,"em")(767,"strong"),e(768,"(opcional)"),n()(),t(769,"p"),e(770,"Define a lista de valores para a s\xE9rie. Os tipos esperados s\xE3o de acordo com o tipo de gr\xE1fico:"),n(),t(771,"ul")(772,"li"),e(773,"Para gr\xE1ficos dos tipos "),t(774,"code"),e(775,"donut"),n(),e(776," e "),t(777,"code"),e(778,"pie"),n(),e(779,", espera-se "),t(780,"em"),e(781,"number"),n(),e(782,";"),n(),t(783,"li"),e(784,"Para gr\xE1ficos dos tipos "),t(785,"code"),e(786,"area"),n(),e(787,", "),t(788,"code"),e(789,"bar"),n(),e(790,", "),t(791,"code"),e(792,"column"),n(),e(793," e "),t(794,"code"),e(795,"line"),n(),e(796,", espera-se um "),t(797,"em"),e(798,"array"),n(),e(799," de "),t(800,"code"),e(801,"data"),n(),e(802,"."),n()(),t(803,"blockquote")(804,"p"),e(805,"Se passado valor "),t(806,"code"),e(807,"null"),n(),e(808," em determinado item da lista, a itera\xE7\xE3o ir\xE1 ignor\xE1-lo."),n()()()(),t(809,"tr",14)(810,"td",15)(811,"div",16)(812,"span",17),e(813," label"),o(814,"br"),n()()(),t(815,"td",18)(816,"code",30),e(817,"string"),n()(),t(818,"td",21)(819,"em")(820,"strong"),e(821,"(opcional)"),n()(),t(822,"p"),e(823,"R\xF3tulo refer\xEAncia da s\xE9rie;."),n()()(),t(824,"tr",14)(825,"td",15)(826,"div",16)(827,"span",17),e(828," tooltip"),o(829,"br"),n()()(),t(830,"td",18)(831,"code",30),e(832,"string"),n()(),t(833,"td",21)(834,"em")(835,"strong"),e(836,"(opcional)"),n()(),t(837,"p"),e(838,"Define o texto que ser\xE1 exibido ao passar o mouse por cima das s\xE9ries do "),t(839,"em"),e(840,"chart"),n(),e(841,"."),n(),t(842,"blockquote")(843,"p"),e(844,"Caso n\xE3o seja informado um valor para o "),t(845,"em"),e(846,"tooltip"),n(),e(847,", ser\xE1 exibido da seguinte forma:"),n()(),t(848,"ul")(849,"li")(850,"code"),e(851,"donut"),n(),e(852,": "),t(853,"code"),e(854,"label"),n(),e(855,": valor proporcional ao total em porcentagem."),n(),t(856,"li")(857,"code"),e(858,"area"),n(),e(859,", "),t(860,"code"),e(861,"bar"),n(),e(862,", "),t(863,"code"),e(864,"column"),n(),e(865,", "),t(866,"code"),e(867,"line"),n(),e(868," e "),t(869,"code"),e(870,"pie"),n(),e(871,": "),t(872,"code"),e(873,"label"),n(),e(874,": "),t(875,"code"),e(876,"data"),n(),e(877,"."),n()()()(),t(878,"tr",14)(879,"td",15)(880,"div",16)(881,"span",17),e(882," type"),o(883,"br"),n()()(),t(884,"td",18)(885,"code",31),e(886,"PoChartType"),n()(),t(887,"td",21)(888,"em")(889,"strong"),e(890,"(opcional)"),n()(),t(891,"p"),e(892,"Define em qual tipo de gr\xE1fico que ser\xE1 exibida a s\xE9rie. \xC9 poss\xEDvel combinar s\xE9ries dos tipos "),t(893,"code"),e(894,"column"),n(),e(895," e "),t(896,"code"),e(897,"line"),n(),e(898," no mesmo gr\xE1fico. Para isso, basta criar as s\xE9ries com as configura\xE7\xF5es:"),n(),t(899,"ul")(900,"li"),e(901,"Serie A: "),t(902,"code"),e(903,"{ type: ChartType.Column, data: ... }"),n(),e(904,";"),n(),t(905,"li"),e(906,"S\xE9rie B: "),t(907,"code"),e(908,"{ type: ChartType.Line, data: ... }"),n(),e(909,"."),n()(),t(910,"p"),e(911,"Se tanto "),t(912,"code"),e(913,"p-type"),n(),e(914," quanto "),t(915,"code"),e(916,"{ type }"),n(),e(917," forem ignorados, o padr\xE3o gerado pelo componente ser\xE1:"),n(),t(918,"ul")(919,"li")(920,"code"),e(921,"column"),n(),e(922,": se "),t(923,"code"),e(924,"data"),n(),e(925," receber "),t(926,"code"),e(927,"Array<number>"),n(),e(928,";"),n(),t(929,"li")(930,"code"),e(931,"pie"),n(),e(932,": se "),t(933,"code"),e(934,"data"),n(),e(935," for "),t(936,"em"),e(937,"number"),n(),e(938,"."),n()(),t(939,"blockquote")(940,"p"),e(941,"Se utilizada a propriedade "),t(942,"code"),e(943,"p-type"),n(),e(944,", dispensa-se a defini\xE7\xE3o desta propriedade. Por\xE9m, se houver declara\xE7\xE3o para ambas, o valor "),t(945,"code"),e(946,"{type}"),n(),e(947," da primeira s\xE9rie sobrescrever\xE1 o valor definido em "),t(948,"code"),e(949,"p-type"),n(),e(950,"."),n()(),t(951,"blockquote")(952,"p"),e(953,"O componente s\xF3 exibir\xE1 as s\xE9ries que tiverem o mesmo "),t(954,"code"),e(955,"type"),n(),e(956," definido, exceto para mesclagem para tipos "),t(957,"code"),e(958,"column"),n(),e(959," e "),t(960,"code"),e(961,"line"),n(),e(962,"."),n()()()()(),t(963,"h3"),e(964,"Enums"),n(),t(965,"h4",4)(966,"code",5),e(967,"PoChartLabelFormat"),n()(),t(968,"div",2)(969,"p")(970,"em"),e(971,"Enum"),n(),t(972,"code"),e(973,"PoChartLabelFormat"),n(),e(974," para especifica\xE7\xE3o dos tipos de formata\xE7\xE3o do eixo de valor no gr\xE1fico."),n()(),t(975,"h4",10),e(976,"Propriedades"),n(),t(977,"table",11)(978,"tr",12)(979,"th",13),e(980,"Nome"),n(),t(981,"th",13),e(982,"Descri\xE7\xE3o"),n()(),t(983,"tr",14)(984,"td",15)(985,"div",16)(986,"span",17),e(987," Number"),o(988,"br"),n()()(),t(989,"td",21)(990,"p"),e(991,"Os valores ser\xE3o exibidos no formato num\xE9rico com duas casas decimais. Equivalente ao formato "),t(992,"code"),e(993,"'1.2-2'"),n(),e(994," da "),t(995,"a",49),e(996,"DecimalPipe"),n(),e(997,"."),n()()(),t(998,"tr",14)(999,"td",15)(1e3,"div",16)(1001,"span",17),e(1002," Currency"),o(1003,"br"),n()()(),t(1004,"td",21)(1005,"p"),e(1006,"Os valores ser\xE3o exibidos com o s\xEDmbolo monet\xE1rio de acordo com a formata\xE7\xE3o padr\xE3o da aplica\xE7\xE3o, isto \xE9, o valor do token "),t(1007,"a",50),e(1008,"DEFAULT_CURRENCY_CODE"),n(),e(1009,". Para adequar ao padr\xE3o num\xE9rico brasileiro, \xE9 necess\xE1rio configurar o "),t(1010,"a",51),e(1011,"LOCALE_ID"),n(),e(1012," da aplica\xE7\xE3o. A configura\xE7\xE3o pode ser feita da seguinte forma:"),n(),t(1013,"pre")(1014,"code"),e(1015,`import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

@NgModule({
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
  ]
})
export class AppModule { }
`),n()()()()(),t(1016,"h4",4)(1017,"code",5),e(1018,"PoChartType"),n()(),t(1019,"div",2)(1020,"p")(1021,"em"),e(1022,"Enum"),n(),t(1023,"code"),e(1024,"PoChartType"),n(),e(1025," para especifica\xE7\xE3o dos tipos de gr\xE1ficos."),n()(),t(1026,"h4",10),e(1027,"Propriedades"),n(),t(1028,"table",11)(1029,"tr",12)(1030,"th",13),e(1031,"Nome"),n(),t(1032,"th",13),e(1033,"Descri\xE7\xE3o"),n()(),t(1034,"tr",14)(1035,"td",15)(1036,"div",16)(1037,"span",17),e(1038," Area"),o(1039,"br"),n()()(),t(1040,"td",21)(1041,"p"),e(1042,`Tipo de gr\xE1fico que exibe os dados de modo quantitativo, utilizando linhas cont\xEDnuas demarcadas por pontos para cada valor de s\xE9rie definido.
Similar ao gr\xE1fico de linha, diferencia-se pela \xE1rea localizada abaixo da linha das s\xE9ries, que \xE9 preenchida com cores para um destaque expl\xEDcita da evolu\xE7\xE3o e mudan\xE7a dos dados.`),n()()(),t(1043,"tr",14)(1044,"td",15)(1045,"div",16)(1046,"span",17),e(1047," Donut"),o(1048,"br"),n()()(),t(1049,"td",21)(1050,"p"),e(1051,"Exibe os dados em formato de rosca, dividindo em partes proporcionais."),n()()(),t(1052,"tr",14)(1053,"td",15)(1054,"div",16)(1055,"span",17),e(1056," Pie"),o(1057,"br"),n()()(),t(1058,"td",21)(1059,"p"),e(1060,"Exibe os dados em formato circular, dividindo proporcionalmente em fatias."),n()()(),t(1061,"tr",14)(1062,"td",15)(1063,"div",16)(1064,"span",17),e(1065," Line"),o(1066,"br"),n()()(),t(1067,"td",21)(1068,"p"),e(1069,`Gr\xE1fico que mostra os dados de modo linear e cont\xEDnuo. \xC9 \xFAtil, por exemplo, para fazer compara\xE7\xF5es de tend\xEAncia durante determinado per\xEDodo.
Pode ser utilizado em conjunto com gr\xE1ficos dos tipos `),t(1070,"code"),e(1071,"column"),n(),e(1072," e "),t(1073,"code"),e(1074,"area"),n(),e(1075,", definindo-se o tipo atrav\xE9s da propriedade "),t(1076,"code"),e(1077,"PoChartSerie.type"),n(),e(1078,"."),n()()(),t(1079,"tr",14)(1080,"td",15)(1081,"div",16)(1082,"span",17),e(1083," Column"),o(1084,"br"),n()()(),t(1085,"td",21)(1086,"p"),e(1087,`Gr\xE1fico que exibe os dados em forma de barras verticais e sua extens\xE3o varia de acordo com seus valores. \xC9 comumente usado como comparativo entre diversas s\xE9ries.
As s\xE9ries s\xE3o exibidas lado-a-lado, com um pequeno espa\xE7o entre elas.`),n()()(),t(1088,"tr",14)(1089,"td",15)(1090,"div",16)(1091,"span",17),e(1092," Bar"),o(1093,"br"),n()()(),t(1094,"td",21)(1095,"p"),e(1096,"Gr\xE1fico que exibe os dados em forma de barras horizontais e sua extens\xE3o varia de acordo com seus valores. \xC9 comumente usado como comparativo de s\xE9ries e categorias."),n()()()()())},dependencies:[P],encapsulation:2})}return a})();var Pe=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||a)(A(te),A(ne))};static \u0275cmp=b({type:a,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Chart",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),E("p-click",function(){return i.changeTab("doc")}),o(3,"sample-po-chart-doc"),n(),t(4,"po-tab",3),E("p-click",function(){return i.changeTab("web")}),o(5,"sample-po-chart-basic-view")(6,"sample-po-chart-labs-view")(7,"sample-po-chart-coffee-ranking-view")(8,"sample-po-chart-world-exports-view"),n()()()),l&2&&(d("p-actions",i.actions),s(2),d("p-active",i.activeTab==="doc"),s(2),d("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[ce,y,v,ge,Ce,fe,ye,ve],encapsulation:2})}return a})();var je=[{path:"",component:Pe}],_e=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=V({type:a});static \u0275inj=B({imports:[j.forChild(je),j]})}return a})();var yt=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=V({type:a});static \u0275inj=B({imports:[he,_e]})}return a})();export{yt as DocPoChartModule};
