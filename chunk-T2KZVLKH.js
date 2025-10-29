import{o as w,p as We}from"./chunk-ZC2HZG7B.js";import{Aa as se,Ab as x,Ba as T,Da as Le,Ea as Ve,Eb as te,Fa as ce,Ma as qe,O as ke,Q as Oe,S as $,Sa as J,Ta as Fe,U as me,Xa as N,a as re,nb as De,q as pe,ra as de,sa as ee,v as K,zb as y}from"./chunk-TPH26USO.js";import{$a as A,$c as ge,Aa as s,Da as _,Dc as xe,Fb as M,Gc as L,Ha as B,Hc as W,Ic as U,Jc as q,Kc as Q,La as o,M as Se,Ma as t,N as ie,Na as l,Nc as we,Ob as X,Oc as _e,Q as O,Ra as H,Sa as S,Sb as ye,Sc as Pe,Ta as le,U as u,V as b,Wa as Ee,Xc as Me,Zc as Te,_a as I,ab as G,bb as z,bc as Z,cb as e,db as ne,eb as v,gb as g,hb as h,ib as f,ja as r,ka as ue,mb as Ce,nb as be,ob as P,pb as ve,qa as E,ra as ae,ub as j,vb as R,wa as F}from"./chunk-CBLD3XJL.js";var ot=()=>({value:"Option 1"}),nt=()=>({value:"Option 2"}),it=(a,V)=>[a,V],Ne=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-basic"]],standalone:!1,decls:1,vars:6,consts:[["name","combo","p-label","PO Combo",3,"p-options"]],template:function(p,n){p&1&&l(0,"po-combo",0),p&2&&s("p-options",ve(3,it,be(1,ot),be(2,nt)))},dependencies:[T],encapsulation:2})}return a})();var lt=a=>({"docs-sample-code-tabs":a}),Be=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(l(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Combo Basic"),t(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-combo-basic/sample-po-combo-basic.component.html"),t(),o(13,"pre",7),e(14,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{ value: 'Option 1' }, { value: 'Option 2' }]"> </po-combo>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-combo-basic/sample-po-combo-basic.component.ts"),t(),o(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-combo-basic',
  templateUrl: './sample-po-combo-basic.component.html',
  standalone: false
})
export class SamplePoComboBasicComponent {}
`),t()()()()(),o(21,"div",10),l(22,"sample-po-combo-basic"),t(),l(23,"hr")),p&2&&(r(5),_("po-icon "+n.sampleCodeButtonIcon),r(),v(" ",n.sampleCodeButtonLabel,""),r(),s("ngClass",P(4,lt,n.hideSampleCodeTabs)))},dependencies:[M,w,y,x,Ne],encapsulation:2})}return a})();var He=(()=>{class a{helperText;combo;comboOptionGroupSwitch;customLiterals;debounceTime;event;fieldLabel;fieldValue;filterMinlength;filterMode;filterService;help;icon;label;literals;optionsGroup;optionsGroupList;placeholder;properties;fieldErrorMessage;option;options;selectedOptionsGroup;size;listboxPosition="bottom";filterModeOptions=[{label:"Starts With",value:"startsWith"},{label:"Contains",value:"contains"},{label:"Ends With",value:"endsWith"}];listboxPositionOptions=[{label:"top",value:"top"},{label:"bottom",value:"bottom"}];iconsOptions=[{label:"an an-building-apartment",value:"an an-building-apartment"},{label:"an an-gas-pump",value:"an an-gas-pump"},{label:"fa fa-calculator",value:"fa fa-calculator"}];propertiesOptions=[{value:"changeOnEnter",label:"Change On Enter"},{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"disabledInitFilter",label:"Disabled Init Filter"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"sort",label:"Sort"},{value:"clean",label:"Clean"},{value:"disabledTabFilter",label:"Disabled Tab Filter"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}addOption(){this.options=this.verifyOptionObject(this.options.concat(),this.option,this.optionsGroup),this.option={label:void 0,value:void 0}}changeEvent(d){this.event=d}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}optionsGroupSelection(){this.optionsGroup=this.selectedOptionsGroup}restore(){this.helperText="",this.combo=void 0,this.comboOptionGroupSwitch=!1,this.customLiterals=void 0,this.event="",this.debounceTime=void 0,this.fieldLabel="",this.fieldValue="",this.filterMinlength=void 0,this.filterService="",this.filterMode=void 0,this.help=void 0,this.label=void 0,this.literals="",this.icon=void 0,this.option={label:void 0,value:void 0},this.options=[],this.optionsGroup=void 0,this.optionsGroupList=[],this.placeholder="",this.properties=[],this.fieldErrorMessage="",this.selectedOptionsGroup=void 0,this.size="medium"}insertGroupIntoSelectInput(d){this.selectedOptionsGroup=d,this.optionsGroupList=[...this.optionsGroupList,{label:d,value:d}]}verifyOptionObject(d,p,n){let{label:m,value:c}=p;if(n){let i=d.findIndex(fe=>fe.label===n&&"options"in fe);return i===-1?(this.insertGroupIntoSelectInput(n),[...d,{label:n,options:[{label:m,value:c}]}]):(d[i].options.push({label:m,value:c}),d)}return[...d,{label:m,value:c}]}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-labs"]],standalone:!1,decls:44,vars:60,consts:[["fOption","ngForm"],["f","ngForm"],["name","combo",1,"po-md-12",3,"ngModelChange","p-change","p-keydown","ngModel","p-helper","p-change-on-enter","p-clean","p-debounce-time","p-disabled","p-disabled-init-filter","p-disabled-tab-filter","p-field-label","p-field-value","p-filter-minlength","p-filter-mode","p-filter-service","p-help","p-icon","p-label","p-literals","p-optional","p-options","p-placeholder","p-required","p-field-error-message","p-show-required","p-sort","p-size","p-error-limit","p-label-text-wrap","p-listbox-control-position"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["p-label","Po combo options group"],["name","comboOptionGroupSwitch","p-label","Combo options group",1,"po-lg-4","po-md-12",3,"ngModelChange","ngModel"],["name","selectedsOptionsGroup","p-label","Options group list",1,"po-lg-4","po-md-6",3,"ngModelChange","p-change","ngModel","p-disabled","p-options"],["name","optionsGroup","p-label","New Options Group","p-required","",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel","p-disabled"],["p-label","Po combo options"],["name","optionLabel","p-label","Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","optionValue","p-label","Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Option",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","icon","p-columns","4","p-label","Icon",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","filterMode","p-columns","4","p-label","Filter Mode",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","listboxPosition","p-label","Listbox Position",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","filterService","p-clean","","p-help","https://po-sample-api.onrender.com/v1/heroes","p-label","Filter Service",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: {"noData": "Sem dados a serem exibidos"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","fieldValue","p-clean","","p-label","Field Value",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldLabel","p-clean","","p-label","Field Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","debounceTime","p-clean","","p-label","Debounce Time",1,"po-md-6",3,"ngModelChange","ngModel"],["name","filterMinlength","p-clean","","p-label","Filter Min Length",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(p,n){if(p&1){let m=H();o(0,"po-combo",2),f("ngModelChange",function(i){return u(m),h(n.combo,i)||(n.combo=i),b(i)}),S("p-change",function(){return u(m),b(n.changeEvent("p-change"))})("p-keydown",function(){return u(m),b(n.changeEvent("p-keydown"))}),t(),l(1,"po-divider"),o(2,"div",3),l(3,"po-info",4)(4,"po-info",5),t(),l(5,"po-divider"),o(6,"form",null,0),l(8,"po-divider",6),o(9,"div",3)(10,"po-switch",7),f("ngModelChange",function(i){return u(m),h(n.comboOptionGroupSwitch,i)||(n.comboOptionGroupSwitch=i),b(i)}),t(),o(11,"po-select",8),f("ngModelChange",function(i){return u(m),h(n.selectedOptionsGroup,i)||(n.selectedOptionsGroup=i),b(i)}),S("p-change",function(){return u(m),b(n.optionsGroupSelection())}),t(),o(12,"po-input",9),f("ngModelChange",function(i){return u(m),h(n.optionsGroup,i)||(n.optionsGroup=i),b(i)}),t()(),l(13,"po-divider",10),o(14,"div",3)(15,"po-input",11),f("ngModelChange",function(i){return u(m),h(n.option.label,i)||(n.option.label=i),b(i)}),t(),o(16,"po-input",12),f("ngModelChange",function(i){return u(m),h(n.option.value,i)||(n.option.value=i),b(i)}),t()(),o(17,"div",3)(18,"po-button",13),S("p-click",function(){return u(m),b(n.addOption())}),t()()(),l(19,"po-divider"),o(20,"form",null,1)(22,"po-input",14),f("ngModelChange",function(i){return u(m),h(n.label,i)||(n.label=i),b(i)}),t(),o(23,"po-input",15),f("ngModelChange",function(i){return u(m),h(n.help,i)||(n.help=i),b(i)}),t(),o(24,"po-input",16),f("ngModelChange",function(i){return u(m),h(n.helperText,i)||(n.helperText=i),b(i)}),t(),o(25,"po-input",17),f("ngModelChange",function(i){return u(m),h(n.placeholder,i)||(n.placeholder=i),b(i)}),t(),o(26,"po-input",18),f("ngModelChange",function(i){return u(m),h(n.fieldErrorMessage,i)||(n.fieldErrorMessage=i),b(i)}),t(),o(27,"div",3)(28,"po-checkbox-group",19),f("ngModelChange",function(i){return u(m),h(n.properties,i)||(n.properties=i),b(i)}),t(),o(29,"po-radio-group",20),f("ngModelChange",function(i){return u(m),h(n.icon,i)||(n.icon=i),b(i)}),t(),o(30,"po-radio-group",21),f("ngModelChange",function(i){return u(m),h(n.filterMode,i)||(n.filterMode=i),b(i)}),t(),o(31,"po-radio-group",22),f("ngModelChange",function(i){return u(m),h(n.size,i)||(n.size=i),b(i)}),t(),o(32,"po-radio-group",23),f("ngModelChange",function(i){return u(m),h(n.listboxPosition,i)||(n.listboxPosition=i),b(i)}),t()(),o(33,"div",3)(34,"po-input",24),f("ngModelChange",function(i){return u(m),h(n.filterService,i)||(n.filterService=i),b(i)}),t(),o(35,"po-input",25),f("ngModelChange",function(i){return u(m),h(n.literals,i)||(n.literals=i),b(i)}),S("p-change",function(){return u(m),b(n.changeLiterals())}),t()(),o(36,"div",3)(37,"po-input",26),f("ngModelChange",function(i){return u(m),h(n.fieldValue,i)||(n.fieldValue=i),b(i)}),t(),o(38,"po-input",27),f("ngModelChange",function(i){return u(m),h(n.fieldLabel,i)||(n.fieldLabel=i),b(i)}),t()(),o(39,"div",3)(40,"po-number",28),f("ngModelChange",function(i){return u(m),h(n.debounceTime,i)||(n.debounceTime=i),b(i)}),t(),o(41,"po-number",29),f("ngModelChange",function(i){return u(m),h(n.filterMinlength,i)||(n.filterMinlength=i),b(i)}),t()(),o(42,"div",3)(43,"po-button",30),S("p-click",function(){return u(m),b(n.restore())}),t()()()}if(p&2){let m=z(7);g("ngModel",n.combo),s("p-helper",n.helperText)("p-change-on-enter",n.properties.includes("changeOnEnter"))("p-clean",n.properties.includes("clean"))("p-debounce-time",n.debounceTime)("p-disabled",n.properties.includes("disabled"))("p-disabled-init-filter",n.properties.includes("disableInitFilter"))("p-disabled-tab-filter",n.properties.includes("disabledTabFilter"))("p-field-label",n.fieldLabel)("p-field-value",n.fieldValue)("p-filter-minlength",n.filterMinlength)("p-filter-mode",n.filterMode)("p-filter-service",n.filterService)("p-help",n.help)("p-icon",n.icon)("p-label",n.label)("p-literals",n.customLiterals)("p-optional",n.properties.includes("optional"))("p-options",n.options)("p-placeholder",n.placeholder)("p-required",n.properties.includes("required"))("p-field-error-message",n.fieldErrorMessage)("p-show-required",n.properties.includes("showRequired"))("p-sort",n.properties.includes("sort"))("p-size",n.size)("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit"))("p-label-text-wrap",n.properties==null?null:n.properties.includes("labelTextWrap"))("p-listbox-control-position",n.listboxPosition),r(3),s("p-value",n.combo),r(),s("p-value",n.event),r(6),g("ngModel",n.comboOptionGroupSwitch),r(),g("ngModel",n.selectedOptionsGroup),s("p-disabled",!n.comboOptionGroupSwitch)("p-options",n.optionsGroupList),r(),g("ngModel",n.optionsGroup),s("p-disabled",!n.comboOptionGroupSwitch),r(3),g("ngModel",n.option.label),r(),g("ngModel",n.option.value),r(2),s("p-disabled",m.form.invalid),r(4),g("ngModel",n.label),r(),g("ngModel",n.help),r(),g("ngModel",n.helperText),r(),g("ngModel",n.placeholder),r(),g("ngModel",n.fieldErrorMessage),r(2),g("ngModel",n.properties),s("p-options",n.propertiesOptions),r(),g("ngModel",n.icon),s("p-options",n.iconsOptions),r(),g("ngModel",n.filterMode),s("p-options",n.filterModeOptions),r(),g("ngModel",n.size),s("p-options",n.sizeOptions),r(),g("ngModel",n.listboxPosition),s("p-options",n.listboxPositionOptions),r(2),g("ngModel",n.filterService),r(),g("ngModel",n.literals),r(2),g("ngModel",n.fieldValue),r(),g("ngModel",n.fieldLabel),r(2),g("ngModel",n.debounceTime),r(),g("ngModel",n.filterMinlength)}},dependencies:[Q,L,W,q,U,K,re,ke,Oe,T,ce,qe,J,de,N],encapsulation:2})}return a})();var mt=a=>({"docs-sample-code-tabs":a}),Ie=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(l(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Combo Labs"),t(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-combo-labs/sample-po-combo-labs.component.html"),t(),o(13,"pre",7),e(14,`<po-combo
  class="po-md-12"
  name="combo"
  [(ngModel)]="combo"
  [p-helper]="helperText"
  [p-change-on-enter]="properties.includes('changeOnEnter')"
  [p-clean]="properties.includes('clean')"
  [p-debounce-time]="debounceTime"
  [p-disabled]="properties.includes('disabled')"
  [p-disabled-init-filter]="properties.includes('disableInitFilter')"
  [p-disabled-tab-filter]="properties.includes('disabledTabFilter')"
  [p-field-label]="fieldLabel"
  [p-field-value]="fieldValue"
  [p-filter-minlength]="filterMinlength"
  [p-filter-mode]="filterMode"
  [p-filter-service]="filterService"
  [p-help]="help"
  [p-icon]="icon"
  [p-label]="label"
  [p-literals]="customLiterals"
  [p-optional]="properties.includes('optional')"
  [p-options]="options"
  [p-placeholder]="placeholder"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-show-required]="properties.includes('showRequired')"
  [p-sort]="properties.includes('sort')"
  [p-size]="size"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-listbox-control-position]="listboxPosition"
  (p-change)="changeEvent('p-change')"
  (p-keydown)="changeEvent('p-keydown')"
>
</po-combo>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="combo"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #fOption="ngForm">
  <po-divider p-label="Po combo options group"></po-divider>

  <div class="po-row">
    <po-switch
      class="po-lg-4 po-md-12"
      name="comboOptionGroupSwitch"
      [(ngModel)]="comboOptionGroupSwitch"
      p-label="Combo options group"
    >
    </po-switch>

    <po-select
      class="po-lg-4 po-md-6"
      name="selectedsOptionsGroup"
      [(ngModel)]="selectedOptionsGroup"
      p-label="Options group list"
      [p-disabled]="!comboOptionGroupSwitch"
      [p-options]="optionsGroupList"
      (p-change)="optionsGroupSelection()"
    >
    </po-select>

    <po-input
      class="po-lg-4 po-md-6"
      name="optionsGroup"
      [(ngModel)]="optionsGroup"
      p-label="New Options Group"
      [p-disabled]="!comboOptionGroupSwitch"
      p-required
    >
    </po-input>
  </div>

  <po-divider p-label="Po combo options"></po-divider>

  <div class="po-row">
    <po-input class="po-md-6" name="optionLabel" [(ngModel)]="option.label" p-label="Option Label" p-required>
    </po-input>

    <po-input class="po-md-6" name="optionValue" [(ngModel)]="option.value" p-label="Option Value" p-required>
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-lg-2 po-md-4" p-label="Add Option" [p-disabled]="fOption.form.invalid" (p-click)="addOption()">
    </po-button>
  </div>
</form>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input
    class="po-md-6"
    name="fieldErrorMessage"
    [(ngModel)]="fieldErrorMessage"
    p-clean
    p-label="Field Error Message"
  >
  </po-input>

  <div class="po-row">
    <po-checkbox-group
      class="po-md-12"
      name="properties"
      [(ngModel)]="properties"
      p-columns="4"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>

    <po-radio-group
      class="po-md-12"
      name="icon"
      [(ngModel)]="icon"
      p-columns="4"
      p-label="Icon"
      [p-options]="iconsOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-12"
      name="filterMode"
      [(ngModel)]="filterMode"
      p-columns="4"
      p-label="Filter Mode"
      [p-options]="filterModeOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-lg-6"
      name="size"
      [(ngModel)]="size"
      p-columns="4"
      p-label="Size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="sizeOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-lg-6"
      name="listboxPosition"
      [(ngModel)]="listboxPosition"
      p-label="Listbox Position"
      [p-options]="listboxPositionOptions"
    ></po-radio-group>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-12 po-lg-6"
      name="filterService"
      [(ngModel)]="filterService"
      p-clean
      p-help="https://po-sample-api.onrender.com/v1/heroes"
      p-label="Filter Service"
    >
    </po-input>

    <po-input
      class="po-md-12 po-lg-6"
      name="literals"
      [(ngModel)]="literals"
      p-help='Ex.: {"noData": "Sem dados a serem exibidos"}'
      p-label="Literals"
      (p-change)="changeLiterals()"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-md-6" name="fieldValue" [(ngModel)]="fieldValue" p-clean p-label="Field Value"> </po-input>

    <po-input class="po-md-6" name="fieldLabel" [(ngModel)]="fieldLabel" p-clean p-label="Field Label"> </po-input>
  </div>

  <div class="po-row">
    <po-number class="po-md-6" name="debounceTime" [(ngModel)]="debounceTime" p-clean p-label="Debounce Time">
    </po-number>

    <po-number class="po-md-6" name="filterMinlength" [(ngModel)]="filterMinlength" p-clean p-label="Filter Min Length">
    </po-number>
  </div>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-combo-labs/sample-po-combo-labs.component.ts"),t(),o(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoComboLiterals,
  PoComboOption,
  PoComboOptionGroup,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-combo-labs',
  templateUrl: './sample-po-combo-labs.component.html',
  standalone: false
})
export class SamplePoComboLabsComponent implements OnInit {
  helperText: string;
  combo: string;
  comboOptionGroupSwitch: boolean;
  customLiterals: PoComboLiterals;
  debounceTime: number;
  event: string;

  fieldLabel: string;
  fieldValue: string;
  filterMinlength: number;
  filterMode: string;
  filterService: string;

  help: string;
  icon: string;
  label: string;
  literals: string;
  optionsGroup: string;
  optionsGroupList: Array<PoSelectOption>;
  placeholder: string;
  properties: Array<string>;
  fieldErrorMessage: string;

  option: PoComboOption;
  options: Array<PoComboOption | PoComboOptionGroup>;
  selectedOptionsGroup: string;
  size: string;

  listboxPosition: string = 'bottom';

  public readonly filterModeOptions: Array<PoRadioGroupOption> = [
    { label: 'Starts With', value: 'startsWith' },
    { label: 'Contains', value: 'contains' },
    { label: 'Ends With', value: 'endsWith' }
  ];

  public readonly listboxPositionOptions: Array<any> = [
    { label: 'top', value: 'top' },
    { label: 'bottom', value: 'bottom' }
  ];

  public readonly iconsOptions: Array<PoRadioGroupOption> = [
    { label: 'an an-building-apartment', value: 'an an-building-apartment' },
    { label: 'an an-gas-pump', value: 'an an-gas-pump' },
    { label: 'fa fa-calculator', value: 'fa fa-calculator' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'changeOnEnter', label: 'Change On Enter' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'optional', label: 'Optional' },
    { value: 'disabledInitFilter', label: 'Disabled Init Filter' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'sort', label: 'Sort' },
    { value: 'clean', label: 'Clean' },
    { value: 'disabledTabFilter', label: 'Disabled Tab Filter' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  addOption() {
    this.options = this.verifyOptionObject(this.options.concat(), this.option, this.optionsGroup);
    this.option = { label: undefined, value: undefined };
  }

  changeEvent(event: string) {
    this.event = event;
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  optionsGroupSelection() {
    this.optionsGroup = this.selectedOptionsGroup;
  }

  restore() {
    this.helperText = '';
    this.combo = undefined;
    this.comboOptionGroupSwitch = false;
    this.customLiterals = undefined;
    this.event = '';

    this.debounceTime = undefined;
    this.fieldLabel = '';
    this.fieldValue = '';
    this.filterMinlength = undefined;
    this.filterService = '';
    this.filterMode = undefined;

    this.help = undefined;
    this.label = undefined;
    this.literals = '';
    this.icon = undefined;

    this.option = { label: undefined, value: undefined };
    this.options = [];
    this.optionsGroup = undefined;
    this.optionsGroupList = [];
    this.placeholder = '';
    this.properties = [];
    this.fieldErrorMessage = '';
    this.selectedOptionsGroup = undefined;
    this.size = 'medium';
  }

  private insertGroupIntoSelectInput(value: string) {
    this.selectedOptionsGroup = value;
    this.optionsGroupList = [...this.optionsGroupList, { label: value, value }];
  }

  private verifyOptionObject(
    options: Array<PoComboOption | PoComboOptionGroup>,
    option: PoComboOption,
    optionsGroup?: string
  ) {
    const { label, value } = option;

    if (optionsGroup) {
      const indexItem = options.findIndex(
        (optionItem: PoComboOptionGroup) => optionItem.label === optionsGroup && 'options' in optionItem
      );

      if (indexItem === -1) {
        this.insertGroupIntoSelectInput(optionsGroup);
        return [...options, { label: optionsGroup, options: [{ label, value }] }];
      }

      (options as Array<PoComboOptionGroup>)[indexItem].options.push({ label, value });
      return options;
    }

    return [...options, { label, value }];
  }
}
`),t()()()()(),o(21,"div",10),l(22,"sample-po-combo-labs"),t(),l(23,"hr")),p&2&&(r(5),_("po-icon "+n.sampleCodeButtonIcon),r(),v(" ",n.sampleCodeButtonLabel,""),r(),s("ngClass",P(4,mt,n.hideSampleCodeTabs)))},dependencies:[M,w,y,x,He],encapsulation:2})}return a})();var he=(()=>{class a{getcities(){return[{label:"S\xE3o Paulo",options:[{label:"S\xE3o Paulo",value:"sao paulo"},{label:"Campinas",value:"campinas"}]},{label:"Paran\xE1",options:[{label:"S\xE3o Jos\xE9 dos Pinhais",value:"sao jose dos pinhais"},{label:"Londrina",value:"londrina"},{label:"Maring\xE1",value:"maringa"}]},{label:"Santa Catarina",options:[{label:"Joinville",value:"joinville"},{label:"Florian\xF3polis",value:"florianopolis"},{label:"Itaja\xED",value:"itajai"}]}]}getMedicalSpecialty(){return[{specialty:"Allergist",specialtyValue:"allergist"},{specialty:"Cardiologist",specialtyValue:"cardiologist"},{specialty:"General practitioner",specialtyValue:"generalPractitioner"},{specialty:"Dermatologist",specialtyValue:"dermatologist"},{specialty:"Gynecologist",specialtyValue:"gynecologist"},{specialty:"Nutritionist",specialtyValue:"nutritionist"},{specialty:"Pediatrist",specialtyValue:"pediatrist"},{specialty:"Psychiatrist",specialtyValue:"psychiatrist"},{specialty:"Orthopaedist",specialtyValue:"orthopaedist"}]}static \u0275fac=function(p){return new(p||a)};static \u0275prov=Se({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var st=["schedulingForm"];function ct(a,V){if(a&1&&(o(0,"div",3),l(1,"po-avatar",15),o(2,"p",14),e(3),t()()),a&2){let d=le().$implicit,p=le();r(),s("p-src",p.getStateByLabel(d.label)),r(2),ne(d.label)}}function ut(a,V){if(a&1&&(o(0,"div",14),e(1),t()),a&2){let d=le().$implicit;r(),ne(d.label)}}function bt(a,V){if(a&1&&F(0,ct,4,2,"div",3)(1,ut,2,1,"div",14),a&2){let d=V.$implicit;B(d.options?0:1)}}var Ae=(()=>{class a{poNotification=O(ee);schedulingService=O(he);form;birthday;citiesOptions;city;email;informations;medicalSpecialty;medicalSpecialtyOptions;name;phone;typeScheduling;typeSchedulings=[{label:"Particular",value:"particular"},{label:"Health Insurance",value:"healthInsurance"}];ngOnInit(){this.citiesOptions=this.schedulingService.getcities(),this.medicalSpecialtyOptions=this.schedulingService.getMedicalSpecialty()}confirmPreAppointment(d=""){this.poNotification.success(`Great ${d}, your pre-appointment was successfully received!`),this.form.reset()}getStateByLabel(d){return`https://thf.totvs.com.br/sample/api/static/assets/${{"S\xE3o Paulo":"sp","Santa Catarina":"sc",Paran\u00E1:"pr"}[d]}.png`}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-scheduling"]],viewQuery:function(p,n){if(p&1&&I(st,7),p&2){let m;A(m=G())&&(n.form=m.first)}},standalone:!1,features:[Ce([he])],decls:20,vars:12,consts:[["schedulingForm","ngForm"],[1,"po-text-center"],[1,"po-font-title"],[1,"po-row"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","email","p-clean","","p-label","Email","p-placeholder","example@domain.com","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","birthday","p-clean","","p-label","Birthday","p-placeholder","dd/mm/yyyy","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","phone","p-clean","","p-label","Phone number","p-mask","(99) 99999-9999","p-placeholder","(99) 99999-9999","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","city","p-icon","an an-map-trifold","p-label","Select a location","p-placeholder","Select a location","p-required","","p-sort","",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-combo-option-template",""],["name","typeScheduling","p-label","Type scheduling","p-required","","p-sort","",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","medicalSpecialty","p-icon","an an-flask","p-label","Medical Specialty/Exam","p-required","","p-sort","","p-field-label","specialty","p-field-value","specialtyValue",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","informations","p-help","Additional informations","p-label","Informations",1,"po-sm-12",3,"ngModelChange","ngModel"],["p-label","Schedule","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"],[1,"po-sm-10","po-md-9","po-lg-11"],["p-size","xs",1,"po-sm-2","po-md-3","po-lg-1",2,"background-color","#fbfbfb",3,"p-src"]],template:function(p,n){if(p&1){let m=H();o(0,"div",1)(1,"div",2),e(2,"Pre-appointment scheduling"),t()(),o(3,"form",null,0)(5,"div",3)(6,"po-input",4),f("ngModelChange",function(i){return u(m),h(n.name,i)||(n.name=i),b(i)}),t(),o(7,"po-email",5),f("ngModelChange",function(i){return u(m),h(n.email,i)||(n.email=i),b(i)}),t()(),o(8,"div",3)(9,"po-datepicker",6),f("ngModelChange",function(i){return u(m),h(n.birthday,i)||(n.birthday=i),b(i)}),t(),o(10,"po-input",7),f("ngModelChange",function(i){return u(m),h(n.phone,i)||(n.phone=i),b(i)}),t()(),o(11,"div",3)(12,"po-combo",8),f("ngModelChange",function(i){return u(m),h(n.city,i)||(n.city=i),b(i)}),F(13,bt,2,1,"ng-template",9),t(),o(14,"po-select",10),f("ngModelChange",function(i){return u(m),h(n.typeScheduling,i)||(n.typeScheduling=i),b(i)}),t(),o(15,"po-combo",11),f("ngModelChange",function(i){return u(m),h(n.medicalSpecialty,i)||(n.medicalSpecialty=i),b(i)}),t()(),o(16,"div",3)(17,"po-textarea",12),f("ngModelChange",function(i){return u(m),h(n.informations,i)||(n.informations=i),b(i)}),t()(),o(18,"div",3)(19,"po-button",13),S("p-click",function(){return u(m),b(n.confirmPreAppointment(n.name))}),t()()()}if(p&2){let m=z(4);r(6),g("ngModel",n.name),r(),g("ngModel",n.email),r(2),g("ngModel",n.birthday),r(),g("ngModel",n.phone),r(2),g("ngModel",n.city),s("p-options",n.citiesOptions),r(2),g("ngModel",n.typeScheduling),s("p-options",n.typeSchedulings),r(),g("ngModel",n.medicalSpecialty),s("p-options",n.medicalSpecialtyOptions),r(2),g("ngModel",n.informations),r(2),s("p-disabled",m.invalid)}},dependencies:[Q,L,W,q,U,pe,K,$,T,se,Ve,ce,J,Fe],encapsulation:2})}return a})();var ht=a=>({"docs-sample-code-tabs":a}),Ge=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-scheduling-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(l(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Combo - Scheduling"),t(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-combo-scheduling/sample-po-combo-scheduling.component.html"),t(),o(13,"pre",7),e(14,`<div class="po-text-center">
  <div class="po-font-title">Pre-appointment scheduling</div>
</div>

<form #schedulingForm="ngForm">
  <div class="po-row">
    <po-input class="po-lg-6" name="name" [(ngModel)]="name" p-clean p-label="Name" p-required> </po-input>

    <po-email
      class="po-lg-6"
      name="email"
      [(ngModel)]="email"
      p-clean
      p-label="Email"
      p-placeholder="example@domain.com"
      p-required
    >
    </po-email>
  </div>

  <div class="po-row">
    <po-datepicker
      class="po-lg-6"
      name="birthday"
      [(ngModel)]="birthday"
      p-clean
      p-label="Birthday"
      p-placeholder="dd/mm/yyyy"
      p-required
    >
    </po-datepicker>

    <po-input
      class="po-lg-6"
      name="phone"
      [(ngModel)]="phone"
      p-clean
      p-label="Phone number"
      p-mask="(99) 99999-9999"
      p-placeholder="(99) 99999-9999"
      p-required
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-combo
      class="po-lg-6"
      name="city"
      [(ngModel)]="city"
      p-icon="an an-map-trifold"
      p-label="Select a location"
      p-placeholder="Select a location"
      p-required
      p-sort
      [p-options]="citiesOptions"
    >
      <ng-template p-combo-option-template let-option>
        @if (option.options) {
          <div class="po-row">
            <po-avatar
              class="po-sm-2 po-md-3 po-lg-1"
              p-size="xs"
              style="background-color: #fbfbfb"
              [p-src]="getStateByLabel(option.label)"
            >
            </po-avatar>
            <p class="po-sm-10 po-md-9 po-lg-11">{ { option.label }}</p>
          </div>
        } @else {
          <div class="po-sm-10 po-md-9 po-lg-11">{ { option.label }}</div>
        }
      </ng-template>
    </po-combo>

    <po-select
      class="po-lg-6"
      name="typeScheduling"
      [(ngModel)]="typeScheduling"
      p-label="Type scheduling"
      p-required
      p-sort
      [p-options]="typeSchedulings"
    >
    </po-select>

    <po-combo
      class="po-lg-6"
      name="medicalSpecialty"
      [(ngModel)]="medicalSpecialty"
      p-icon="an an-flask"
      p-label="Medical Specialty/Exam"
      p-required
      p-sort
      [p-options]="medicalSpecialtyOptions"
      p-field-label="specialty"
      p-field-value="specialtyValue"
    >
    </po-combo>
  </div>

  <div class="po-row">
    <po-textarea
      class="po-sm-12"
      name="informations"
      [(ngModel)]="informations"
      p-help="Additional informations"
      p-label="Informations"
    >
    </po-textarea>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Schedule"
      p-kind="primary"
      [p-disabled]="schedulingForm.invalid"
      (p-click)="confirmPreAppointment(name)"
    >
    </po-button>
  </div>
</form>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-combo-scheduling/sample-po-combo-scheduling.component.ts"),t(),o(19,"pre",9),e(20,`import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoComboOption, PoComboOptionGroup, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';
import { SamplePoComboSchedulingService } from './sample-po-combo-scheduling.service';

@Component({
  selector: 'sample-po-combo-scheduling',
  templateUrl: './sample-po-combo-scheduling.component.html',
  providers: [SamplePoComboSchedulingService],
  standalone: false
})
export class SamplePoComboSchedulingComponent implements OnInit {
  private poNotification = inject(PoNotificationService);
  private schedulingService = inject(SamplePoComboSchedulingService);

  @ViewChild('schedulingForm', { static: true }) form: NgForm;

  birthday: string;
  citiesOptions: Array<PoComboOptionGroup>;
  city: string;
  email: string;
  informations: string;
  medicalSpecialty: string;
  medicalSpecialtyOptions: Array<any>;
  name: string;
  phone: string;
  typeScheduling: string;

  readonly typeSchedulings: Array<PoSelectOption> = [
    { label: 'Particular', value: 'particular' },
    { label: 'Health Insurance', value: 'healthInsurance' }
  ];

  ngOnInit() {
    this.citiesOptions = this.schedulingService.getcities();
    this.medicalSpecialtyOptions = this.schedulingService.getMedicalSpecialty();
  }

  confirmPreAppointment(name: string = '') {
    this.poNotification.success(\`Great \${name}, your pre-appointment was successfully received!\`);

    this.form.reset();
  }

  getStateByLabel(state: string) {
    const stateByLabel = {
      ['S\xE3o Paulo']: 'sp',
      ['Santa Catarina']: 'sc',
      ['Paran\xE1']: 'pr'
    };

    return \`https://thf.totvs.com.br/sample/api/static/assets/\${stateByLabel[state]}.png\`;
  }
}
`),t(),o(21,"label",6),e(22,"sample-po-combo-scheduling/sample-po-combo-scheduling.service.ts"),t(),o(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

import { PoComboOptionGroup } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoComboSchedulingService {
  getcities(): Array<PoComboOptionGroup> {
    return [
      {
        label: 'S\xE3o Paulo',
        options: [
          { label: 'S\xE3o Paulo', value: 'sao paulo' },
          { label: 'Campinas', value: 'campinas' }
        ]
      },
      {
        label: 'Paran\xE1',
        options: [
          { label: 'S\xE3o Jos\xE9 dos Pinhais', value: 'sao jose dos pinhais' },
          { label: 'Londrina', value: 'londrina' },
          { label: 'Maring\xE1', value: 'maringa' }
        ]
      },
      {
        label: 'Santa Catarina',
        options: [
          { label: 'Joinville', value: 'joinville' },
          { label: 'Florian\xF3polis', value: 'florianopolis' },
          { label: 'Itaja\xED', value: 'itajai' }
        ]
      }
    ];
  }

  getMedicalSpecialty() {
    return [
      { specialty: 'Allergist', specialtyValue: 'allergist' },
      { specialty: 'Cardiologist', specialtyValue: 'cardiologist' },
      { specialty: 'General practitioner', specialtyValue: 'generalPractitioner' },
      { specialty: 'Dermatologist', specialtyValue: 'dermatologist' },
      { specialty: 'Gynecologist', specialtyValue: 'gynecologist' },
      { specialty: 'Nutritionist', specialtyValue: 'nutritionist' },
      { specialty: 'Pediatrist', specialtyValue: 'pediatrist' },
      { specialty: 'Psychiatrist', specialtyValue: 'psychiatrist' },
      { specialty: 'Orthopaedist', specialtyValue: 'orthopaedist' }
    ];
  }
}
`),t()()()()(),o(25,"div",10),l(26,"sample-po-combo-scheduling"),t(),l(27,"hr")),p&2&&(r(5),_("po-icon "+n.sampleCodeButtonIcon),r(),v(" ",n.sampleCodeButtonLabel,""),r(),s("ngClass",P(4,ht,n.hideSampleCodeTabs)))},dependencies:[M,w,y,x,Ae],encapsulation:2})}return a})();var St=["transferForm"];function Et(a,V){if(a&1&&(o(0,"div",3),l(1,"po-avatar",15),o(2,"div",16)(3,"div",17),e(4),t(),o(5,"div",18),e(6),t()()()),a&2){let d=V.$implicit;r(4),ne(d.label),r(2),v("Account: ",d.value,"")}}var ze=(()=>{class a{poNotification=O(ee);form;poModal;contact;dateTransfer=new Date;typeAccount="Checking Account";value;cancelAction={label:"Cancel",action:()=>this.poModal.close()};confirmAction={label:"Confirm",action:()=>this.confirmTransfer()};typeAccounts=[{label:"Checking Account",value:"Checking Account"},{label:"Savings Account",value:"Savings Account"}];confirmTransfer(){this.poModal.close(),this.poNotification.success("Successful Transfer"),this.formReset()}transfer(){this.poModal.open()}formReset(){this.form.reset({dateTransfer:new Date,typeAccount:"Checking Account"})}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-transfer"]],viewQuery:function(p,n){if(p&1&&(I(St,7),I(me,7)),p&2){let m;A(m=G())&&(n.form=m.first),A(m=G())&&(n.poModal=m.first)}},standalone:!1,decls:23,vars:14,consts:[["transferForm","ngForm"],[1,"po-text-center"],[1,"po-font-title"],[1,"po-row"],["name","typeAccount","p-label","From","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","contact","p-field-value","id","p-field-label","name","p-filter-service","https://po-sample-api.onrender.com/v1/people","p-icon","an an-user","p-label","To contact","p-placeholder","Select a contact","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-combo-option-template",""],["name","value","p-clean","","p-label","Value to transfer","p-placeholder","R$ 0,00","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","dateTransfer","p-label","Date to transfer","p-placeholder","dd/mm/yyyy","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Transfer","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Do you confirm transfer?",3,"p-primary-action","p-secondary-action"],["p-label","From",1,"po-md-6",3,"p-value"],["p-label","To",1,"po-md-6",3,"p-value"],["p-label","Value",1,"po-md-6",3,"p-value"],["p-label","Date to transfer",1,"po-md-6",3,"p-value"],["p-size","sm",1,"po-sm-2","po-md-3","po-lg-1"],[1,"po-sm-10","po-md-9","po-lg-11"],[1,"po-font-text-large-bold"],[1,"po-font-text-smaller"]],template:function(p,n){if(p&1){let m=H();o(0,"div",1)(1,"div",2),e(2,"Banking Transfer"),t()(),o(3,"form",null,0)(5,"div",3)(6,"po-select",4),f("ngModelChange",function(i){return u(m),h(n.typeAccount,i)||(n.typeAccount=i),b(i)}),t(),o(7,"po-combo",5),f("ngModelChange",function(i){return u(m),h(n.contact,i)||(n.contact=i),b(i)}),F(8,Et,7,2,"ng-template",6),t()(),o(9,"div",3)(10,"po-decimal",7),f("ngModelChange",function(i){return u(m),h(n.value,i)||(n.value=i),b(i)}),t(),o(11,"po-datepicker",8),f("ngModelChange",function(i){return u(m),h(n.dateTransfer,i)||(n.dateTransfer=i),b(i)}),t()(),o(12,"div",3)(13,"po-button",9),S("p-click",function(){return u(m),b(n.transfer())}),t()()(),o(14,"po-modal",10)(15,"div",3),l(16,"po-info",11)(17,"po-info",12),t(),l(18,"po-divider"),o(19,"div",3),l(20,"po-info",13)(21,"po-info",14),j(22,"date"),t()()}if(p&2){let m=z(4);r(6),g("ngModel",n.typeAccount),s("p-options",n.typeAccounts),r(),g("ngModel",n.contact),r(3),g("ngModel",n.value),r(),g("ngModel",n.dateTransfer),r(2),s("p-disabled",m.invalid),r(),s("p-primary-action",n.confirmAction)("p-secondary-action",n.cancelAction),r(2),s("p-value",n.typeAccount),r(),s("p-value",n.contact),r(3),s("p-value",n.value),r(),Ee("p-value",R(22,12,n.dateTransfer))}},dependencies:[Q,L,W,q,U,pe,K,re,$,T,se,Le,J,N,me,ye],encapsulation:2})}return a})();var vt=a=>({"docs-sample-code-tabs":a}),je=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-transfer-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(l(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Combo - Banking Transfer"),t(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-combo-transfer/sample-po-combo-transfer.component.html"),t(),o(13,"pre",7),e(14,`<div class="po-text-center">
  <div class="po-font-title">Banking Transfer</div>
</div>

<form #transferForm="ngForm">
  <div class="po-row">
    <po-select
      class="po-md-6"
      name="typeAccount"
      [(ngModel)]="typeAccount"
      p-label="From"
      p-required
      [p-options]="typeAccounts"
    >
    </po-select>

    <po-combo
      class="po-md-6"
      name="contact"
      [(ngModel)]="contact"
      p-field-value="id"
      p-field-label="name"
      p-filter-service="https://po-sample-api.onrender.com/v1/people"
      p-icon="an an-user"
      p-label="To contact"
      p-placeholder="Select a contact"
      p-required
    >
      <ng-template p-combo-option-template let-option>
        <div class="po-row">
          <po-avatar class="po-sm-2 po-md-3 po-lg-1" p-size="sm"></po-avatar>

          <div class="po-sm-10 po-md-9 po-lg-11">
            <div class="po-font-text-large-bold">{ { option.label }}</div>
            <div class="po-font-text-smaller">Account: { { option.value }}</div>
          </div>
        </div>
      </ng-template>
    </po-combo>
  </div>

  <div class="po-row">
    <po-decimal
      class="po-md-6"
      name="value"
      [(ngModel)]="value"
      p-clean
      p-label="Value to transfer"
      p-placeholder="R$ 0,00"
      p-required
    >
    </po-decimal>

    <po-datepicker
      class="po-md-6"
      name="dateTransfer"
      [(ngModel)]="dateTransfer"
      p-label="Date to transfer"
      p-placeholder="dd/mm/yyyy"
      p-required
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Transfer"
      p-kind="primary"
      [p-disabled]="transferForm.invalid"
      (p-click)="transfer()"
    >
    </po-button>
  </div>
</form>

<po-modal p-title="Do you confirm transfer?" [p-primary-action]="confirmAction" [p-secondary-action]="cancelAction">
  <div class="po-row">
    <po-info class="po-md-6" p-label="From" [p-value]="typeAccount"> </po-info>

    <po-info class="po-md-6" p-label="To" [p-value]="contact"> </po-info>
  </div>

  <po-divider></po-divider>

  <div class="po-row">
    <po-info class="po-md-6" p-label="Value" [p-value]="value"> </po-info>

    <po-info class="po-md-6" p-label="Date to transfer" p-value="{ { dateTransfer | date }}"> </po-info>
  </div>
</po-modal>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-combo-transfer/sample-po-combo-transfer.component.ts"),t(),o(19,"pre",9),e(20,`import { Component, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoModalAction, PoModalComponent, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-combo-transfer',
  templateUrl: './sample-po-combo-transfer.component.html',
  standalone: false
})
export class SamplePoComboTransferComponent {
  private poNotification = inject(PoNotificationService);

  @ViewChild('transferForm', { static: true }) form: NgForm;
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  contact: any;
  dateTransfer: Date = new Date();
  typeAccount: string = 'Checking Account';
  value: number;

  cancelAction: PoModalAction = {
    label: 'Cancel',
    action: () => this.poModal.close()
  };

  confirmAction: PoModalAction = {
    label: 'Confirm',
    action: () => this.confirmTransfer()
  };

  readonly typeAccounts: Array<PoSelectOption> = [
    { label: 'Checking Account', value: 'Checking Account' },
    { label: 'Savings Account', value: 'Savings Account' }
  ];

  confirmTransfer() {
    this.poModal.close();

    this.poNotification.success('Successful Transfer');

    this.formReset();
  }

  transfer() {
    this.poModal.open();
  }

  private formReset() {
    this.form.reset({
      dateTransfer: new Date(),
      typeAccount: 'Checking Account'
    });
  }
}
`),t()()()()(),o(21,"div",10),l(22,"sample-po-combo-transfer"),t(),l(23,"hr")),p&2&&(r(5),_("po-icon "+n.sampleCodeButtonIcon),r(),v(" ",n.sampleCodeButtonLabel,""),r(),s("ngClass",P(4,vt,n.hideSampleCodeTabs)))},dependencies:[M,w,y,x,ze],encapsulation:2})}return a})();function xt(a,V){if(a&1&&(o(0,"div",0),l(1,"po-info",3)(2,"po-info",4)(3,"po-info",5),t()),a&2){let d=V;r(),s("p-value",d.name),r(),s("p-value",d.nickname),r(),s("p-value",d.email)}}var Re=(()=>{class a{http=O(Z);hero$;heroName;get knowMoreLabel(){return this.heroName?"Know more":void 0}knowMore(d){window.open(`http://google.com/search?q=${d}`,"_blank")}onChangeHero(d){this.hero$=this.getHero(d)}getHero(d){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/${d}`)}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-heroes"]],standalone:!1,decls:5,vars:5,consts:[[1,"po-row"],[1,"po-lg-6",3,"p-primary-action","p-primary-label"],["name","heroName","p-field-label","nickname","p-field-value","name","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","Search a Hero","p-sort","",3,"ngModelChange","p-change","ngModel"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"]],template:function(p,n){if(p&1&&(o(0,"div",0)(1,"po-widget",1),S("p-primary-action",function(){return n.knowMore(n.heroName)}),o(2,"po-combo",2),f("ngModelChange",function(c){return h(n.heroName,c)||(n.heroName=c),c}),S("p-change",function(c){return n.onChangeHero(c)}),t(),F(3,xt,4,3,"div",0),j(4,"async"),t()()),p&2){let m;r(),s("p-primary-label",n.knowMoreLabel),r(),g("ngModel",n.heroName),r(),B((m=R(4,3,n.hero$))?3:-1,m)}},dependencies:[L,q,T,N,te,X],encapsulation:2})}return a})();var _t=a=>({"docs-sample-code-tabs":a}),Ue=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-heroes-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(l(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Combo - Heroes"),t(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-combo-heroes/sample-po-combo-heroes.component.html"),t(),o(13,"pre",7),e(14,`<div class="po-row">
  <po-widget class="po-lg-6" [p-primary-label]="knowMoreLabel" (p-primary-action)="knowMore(heroName)">
    <po-combo
      name="heroName"
      [(ngModel)]="heroName"
      p-field-label="nickname"
      p-field-value="name"
      p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
      p-label="Search a Hero"
      p-sort
      (p-change)="onChangeHero($event)"
    >
    </po-combo>

    @if (hero$ | async; as hero) {
      <div class="po-row">
        <po-info class="po-md-4" p-label="Name" [p-value]="hero.name"> </po-info>
        <po-info class="po-md-4" p-label="Nickname" [p-value]="hero.nickname"> </po-info>
        <po-info class="po-md-4" p-label="Email" [p-value]="hero.email"> </po-info>
      </div>
    }
  </po-widget>
</div>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-combo-heroes/sample-po-combo-heroes.component.ts"),t(),o(19,"pre",9),e(20,`import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'sample-po-combo-heroes',
  templateUrl: './sample-po-combo-heroes.component.html',
  standalone: false
})
export class SamplePoComboHeroesComponent {
  private http = inject(HttpClient);

  hero$: Observable<any>;
  heroName: string;

  get knowMoreLabel() {
    return this.heroName ? 'Know more' : undefined;
  }

  knowMore(heroName: string) {
    window.open(\`http://google.com/search?q=\${heroName}\`, '_blank');
  }

  onChangeHero(heroName: string) {
    this.hero$ = this.getHero(heroName);
  }

  private getHero(heroName: string) {
    return this.http.get(\`https://po-sample-api.onrender.com/v1/heroes/\${heroName}\`);
  }
}
`),t()()()()(),o(21,"div",10),l(22,"sample-po-combo-heroes"),t(),l(23,"hr")),p&2&&(r(5),_("po-icon "+n.sampleCodeButtonIcon),r(),v(" ",n.sampleCodeButtonLabel,""),r(),s("ngClass",P(4,_t,n.hideSampleCodeTabs)))},dependencies:[M,w,y,x,Re],encapsulation:2})}return a})();function Mt(a,V){if(a&1&&(o(0,"div",0),l(1,"po-info",4)(2,"po-info",5)(3,"po-info",6),t()),a&2){let d=V;r(),s("p-value",d.name),r(),s("p-value",d.nickname),r(),s("p-value",d.email)}}var Qe=(()=>{class a{http=O(Z);formBuilder=O(Pe);form;hero$;ngOnInit(){this.form=this.formBuilder.group({hero:[null,xe.required]})}get knowMoreLabel(){return this.form.valid?"Know more":void 0}knowMore(){let d=this.form.get("hero").value;window.open(`http://google.com/search?q=${d}`,"_blank")}onChangeHero(d){this.hero$=this.getHero(d)}getHero(d){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/${d}`)}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-heroes-reactive-form"]],standalone:!1,decls:6,vars:5,consts:[[1,"po-row"],[1,"po-lg-6",3,"p-primary-action","p-primary-label"],[3,"formGroup"],["name","heroName","formControlName","hero","p-field-label","nickname","p-field-value","name","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","Search a Hero","p-sort","",3,"p-change"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"]],template:function(p,n){if(p&1&&(o(0,"div",0)(1,"po-widget",1),S("p-primary-action",function(){return n.knowMore()}),o(2,"div",2)(3,"po-combo",3),S("p-change",function(c){return n.onChangeHero(c)}),t()(),F(4,Mt,4,3,"div",0),j(5,"async"),t()()),p&2){let m;r(),s("p-primary-label",n.knowMoreLabel),r(),s("formGroup",n.form),r(2),B((m=R(5,3,n.hero$))?4:-1,m)}},dependencies:[L,W,we,_e,T,N,te,X],encapsulation:2})}return a})();var kt=a=>({"docs-sample-code-tabs":a}),Ke=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-heroes-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(l(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Combo - Heroes Reactive Form"),t(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-combo-heroes-reactive-form/sample-po-combo-heroes-reactive-form.component.html"),t(),o(13,"pre",7),e(14,`<div class="po-row">
  <po-widget class="po-lg-6" [p-primary-label]="knowMoreLabel" (p-primary-action)="knowMore()">
    <div [formGroup]="form">
      <po-combo
        name="heroName"
        formControlName="hero"
        p-field-label="nickname"
        p-field-value="name"
        p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
        p-label="Search a Hero"
        p-sort
        (p-change)="onChangeHero($event)"
      >
      </po-combo>
    </div>

    @if (hero$ | async; as hero) {
      <div class="po-row">
        <po-info class="po-md-4" p-label="Name" [p-value]="hero.name"> </po-info>
        <po-info class="po-md-4" p-label="Nickname" [p-value]="hero.nickname"> </po-info>
        <po-info class="po-md-4" p-label="Email" [p-value]="hero.email"> </po-info>
      </div>
    }
  </po-widget>
</div>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-combo-heroes-reactive-form/sample-po-combo-heroes-reactive-form.component.ts"),t(),o(19,"pre",9),e(20,`import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

@Component({
  selector: 'sample-po-combo-heroes-reactive-form',
  templateUrl: './sample-po-combo-heroes-reactive-form.component.html',
  standalone: false
})
export class SamplePoComboHeroesReactiveFormComponent implements OnInit {
  private http = inject(HttpClient);
  private formBuilder = inject(UntypedFormBuilder);

  form: UntypedFormGroup;
  hero$: Observable<any>;

  ngOnInit() {
    this.form = this.formBuilder.group({
      hero: [null, Validators.required]
    });
  }

  get knowMoreLabel() {
    return this.form.valid ? 'Know more' : undefined;
  }

  knowMore() {
    const heroName = this.form.get('hero').value;

    window.open(\`http://google.com/search?q=\${heroName}\`, '_blank');
  }

  onChangeHero(heroName: string) {
    this.hero$ = this.getHero(heroName);
  }

  private getHero(heroName: string) {
    return this.http.get(\`https://po-sample-api.onrender.com/v1/heroes/\${heroName}\`);
  }
}
`),t()()()()(),o(21,"div",10),l(22,"sample-po-combo-heroes-reactive-form"),t(),l(23,"hr")),p&2&&(r(5),_("po-icon "+n.sampleCodeButtonIcon),r(),v(" ",n.sampleCodeButtonLabel,""),r(),s("ngClass",P(4,kt,n.hideSampleCodeTabs)))},dependencies:[M,w,y,x,Qe],encapsulation:2})}return a})();function Lt(a,V){if(a&1&&(o(0,"div",0),l(1,"po-info",3)(2,"po-info",4)(3,"po-info",5),t()),a&2){let d=V;r(),s("p-value",d.name),r(),s("p-value",d.nickname),r(),s("p-value",d.email)}}var Je=(()=>{class a{http=O(Z);peopleName;people$;onChangePeople(d){this.people$=this.getPeople(d)}getPeople(d){return this.http.get(`https://po-sample-api.onrender.com/v1/people/${d}`)}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-infinity-scroll"]],standalone:!1,decls:5,vars:5,consts:[[1,"po-row"],[1,"po-lg-6"],["p-filter-service","https://po-sample-api.onrender.com/v1/people","p-label","People","name","people","p-field-label","name","p-field-value","id",3,"ngModelChange","p-change","ngModel","p-infinite-scroll"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"]],template:function(p,n){if(p&1&&(o(0,"div",0)(1,"po-widget",1)(2,"po-combo",2),f("ngModelChange",function(c){return h(n.peopleName,c)||(n.peopleName=c),c}),S("p-change",function(c){return n.onChangePeople(c)}),t(),F(3,Lt,4,3,"div",0),j(4,"async"),t()()),p&2){let m;r(2),g("ngModel",n.peopleName),s("p-infinite-scroll",!0),r(),B((m=R(4,3,n.people$))?3:-1,m)}},dependencies:[L,q,T,N,te,X],encapsulation:2})}return a})();var qt=a=>({"docs-sample-code-tabs":a}),Ye=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-infinity-scroll-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(l(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Combo - Inifity Scroll"),t(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-combo-infinity-scroll/sample-po-combo-infinity-scroll.component.html"),t(),o(13,"pre",7),e(14,`<div class="po-row">
  <po-widget class="po-lg-6">
    <po-combo
      p-filter-service="https://po-sample-api.onrender.com/v1/people"
      p-label="People"
      name="people"
      [(ngModel)]="peopleName"
      (p-change)="onChangePeople($event)"
      [p-infinite-scroll]="true"
      p-field-label="name"
      p-field-value="id"
    ></po-combo>

    @if (people$ | async; as people) {
      <div class="po-row">
        <po-info class="po-md-4" p-label="Name" [p-value]="people.name"> </po-info>
        <po-info class="po-md-4" p-label="Nickname" [p-value]="people.nickname"> </po-info>
        <po-info class="po-md-4" p-label="Email" [p-value]="people.email"> </po-info>
      </div>
    }
  </po-widget>
</div>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-combo-infinity-scroll/sample-po-combo-infinity-scroll.component.ts"),t(),o(19,"pre",9),e(20,`import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'sample-po-combo-infinity-scroll',
  templateUrl: './sample-po-combo-infinity-scroll.component.html',
  standalone: false
})
export class SamplePoComboInfinityScrollComponent {
  private http = inject(HttpClient);

  peopleName: string;
  people$: Observable<any>;

  onChangePeople(peopleId: string) {
    this.people$ = this.getPeople(peopleId);
  }

  private getPeople(peopleId: string) {
    return this.http.get(\`https://po-sample-api.onrender.com/v1/people/\${peopleId}\`);
  }
}
`),t()()()()(),o(21,"div",10),l(22,"sample-po-combo-infinity-scroll"),t(),l(23,"hr")),p&2&&(r(5),_("po-icon "+n.sampleCodeButtonIcon),r(),v(" ",n.sampleCodeButtonLabel,""),r(),s("ngClass",P(4,qt,n.hideSampleCodeTabs)))},dependencies:[M,w,y,x,Je],encapsulation:2})}return a})();var Dt=["bookingForm"],Wt=["datepicker"],Xe=(()=>{class a{poNotification=O(ee);form;datepickerComponent;adults=1;category=!1;checkin;checkout;children=0;hotel;rooms=1;filterParams={};adultsOptions=[{label:"1 Adult",value:1},{label:"2 Adults",value:2},{label:"3 Adults",value:3},{label:"4 Adults",value:4}];childrenOptions=[{label:"No Child",value:0},{label:"1 Child",value:1},{label:"2 Children",value:2}];roomsOptions=[{label:"1 Room",value:1},{label:"2 Rooms",value:2},{label:"3 Rooms",value:3}];booking(){this.poNotification.success("Hotel booked successfully"),this.formReset(),this.datepickerComponent.focus()}onChangeParams(d){this.filterParams=d?{category:"Luxo"}:{},this.hotel=void 0}formReset(){this.form.reset({adults:1,category:!1,children:0,rooms:1})}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-hotels"]],viewQuery:function(p,n){if(p&1&&(I(Dt,7),I(Wt,7)),p&2){let m;A(m=G())&&(n.form=m.first),A(m=G())&&(n.datepickerComponent=m.first)}},standalone:!1,decls:18,vars:14,consts:[["bookingForm","ngForm"],["datepicker",""],[1,"po-text-center"],[1,"po-font-title"],[1,"po-row"],["name","checkin","p-label","Check In","p-placeholder","dd/mm/yyyy","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-max-date"],["name","checkout","p-label","Check Out","p-placeholder","dd/mm/yyyy","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-min-date"],["name","switch","p-label-off","No, thank you.","p-label-on","Yes, please.","p-label","Only Luxury Category",1,"po-md-4",3,"ngModelChange","p-change","ngModel"],["name","rooms","p-label","Rooms",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","children","p-label","Children",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","adults","p-label","Adults",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","hotel","p-debounce-time","500","p-disabled-init-filter","","p-filter-minlength","1","p-icon","an an-magnifying-glass","p-required","","p-field-label","name","p-field-value","value","p-label","Search a hotel","p-sort","","p-filter-service","https://po-sample-api.onrender.com/v1/hotels","p-listbox-control-position","top",1,"po-sm-12",3,"ngModelChange","ngModel","p-filter-params"],["p-label","Booking","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"]],template:function(p,n){if(p&1){let m=H();o(0,"div",2)(1,"div",3),e(2,"Booking a Hotel"),t()(),o(3,"form",null,0)(5,"div",4)(6,"po-datepicker",5,1),f("ngModelChange",function(i){return u(m),h(n.checkin,i)||(n.checkin=i),b(i)}),t(),o(8,"po-datepicker",6),f("ngModelChange",function(i){return u(m),h(n.checkout,i)||(n.checkout=i),b(i)}),t(),o(9,"po-switch",7),f("ngModelChange",function(i){return u(m),h(n.category,i)||(n.category=i),b(i)}),S("p-change",function(i){return u(m),b(n.onChangeParams(i))}),t()(),o(10,"div",4)(11,"po-select",8),f("ngModelChange",function(i){return u(m),h(n.rooms,i)||(n.rooms=i),b(i)}),t(),o(12,"po-select",9),f("ngModelChange",function(i){return u(m),h(n.children,i)||(n.children=i),b(i)}),t(),o(13,"po-select",10),f("ngModelChange",function(i){return u(m),h(n.adults,i)||(n.adults=i),b(i)}),t()(),o(14,"div",4)(15,"po-combo",11),f("ngModelChange",function(i){return u(m),h(n.hotel,i)||(n.hotel=i),b(i)}),t()(),o(16,"div",4)(17,"po-button",12),S("p-click",function(){return u(m),b(n.booking())}),t()()()}if(p&2){let m=z(4);r(6),g("ngModel",n.checkin),s("p-max-date",n.checkout),r(2),g("ngModel",n.checkout),s("p-min-date",n.checkin),r(),g("ngModel",n.category),r(2),g("ngModel",n.rooms),s("p-options",n.roomsOptions),r(),g("ngModel",n.children),s("p-options",n.childrenOptions),r(),g("ngModel",n.adults),s("p-options",n.adultsOptions),r(2),g("ngModel",n.hotel),s("p-filter-params",n.filterParams),r(2),s("p-disabled",m.invalid)}},dependencies:[Q,L,W,q,U,K,$,T,J,de],encapsulation:2})}return a})();var Bt=a=>({"docs-sample-code-tabs":a}),Ze=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-hotels-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(l(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Combo - Booking Hotel"),t(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-combo-hotels/sample-po-combo-hotels.component.html"),t(),o(13,"pre",7),e(14,`<div class="po-text-center">
  <div class="po-font-title">Booking a Hotel</div>
</div>

<form #bookingForm="ngForm">
  <div class="po-row">
    <po-datepicker
      #datepicker
      class="po-md-4"
      name="checkin"
      [(ngModel)]="checkin"
      p-label="Check In"
      p-placeholder="dd/mm/yyyy"
      p-required
      [p-max-date]="checkout"
    >
    </po-datepicker>

    <po-datepicker
      class="po-md-4"
      name="checkout"
      [(ngModel)]="checkout"
      p-label="Check Out"
      p-placeholder="dd/mm/yyyy"
      p-required
      [p-min-date]="checkin"
    >
    </po-datepicker>

    <po-switch
      class="po-md-4"
      name="switch"
      [(ngModel)]="category"
      p-label-off="No, thank you."
      p-label-on="Yes, please."
      p-label="Only Luxury Category"
      (p-change)="onChangeParams($event)"
    >
    </po-switch>
  </div>

  <div class="po-row">
    <po-select class="po-md-4" name="rooms" [(ngModel)]="rooms" p-label="Rooms" [p-options]="roomsOptions"> </po-select>

    <po-select class="po-md-4" name="children" [(ngModel)]="children" p-label="Children" [p-options]="childrenOptions">
    </po-select>

    <po-select class="po-md-4" name="adults" [(ngModel)]="adults" p-label="Adults" [p-options]="adultsOptions">
    </po-select>
  </div>

  <div class="po-row">
    <po-combo
      class="po-sm-12"
      name="hotel"
      [(ngModel)]="hotel"
      p-debounce-time="500"
      p-disabled-init-filter
      p-filter-minlength="1"
      p-icon="an an-magnifying-glass"
      p-required
      p-field-label="name"
      p-field-value="value"
      p-label="Search a hotel"
      p-sort
      p-filter-service="https://po-sample-api.onrender.com/v1/hotels"
      p-listbox-control-position="top"
      [p-filter-params]="filterParams"
    >
    </po-combo>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Booking"
      p-kind="primary"
      [p-disabled]="bookingForm.invalid"
      (p-click)="booking()"
    >
    </po-button>
  </div>
</form>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-combo-hotels/sample-po-combo-hotels.component.ts"),t(),o(19,"pre",9),e(20,`import { Component, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoDatepickerComponent, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-combo-hotels',
  templateUrl: './sample-po-combo-hotels.component.html',
  standalone: false
})
export class SamplePoComboHotelsComponent {
  private poNotification = inject(PoNotificationService);

  @ViewChild('bookingForm', { static: true }) form: NgForm;
  @ViewChild('datepicker', { static: true }) datepickerComponent: PoDatepickerComponent;

  adults: number = 1;
  category: boolean = false;
  checkin: Date;
  checkout: Date;
  children: number = 0;
  hotel: string;
  rooms: number = 1;
  filterParams = {};

  readonly adultsOptions: Array<PoSelectOption> = [
    { label: '1 Adult', value: 1 },
    { label: '2 Adults', value: 2 },
    { label: '3 Adults', value: 3 },
    { label: '4 Adults', value: 4 }
  ];

  readonly childrenOptions: Array<PoSelectOption> = [
    { label: 'No Child', value: 0 },
    { label: '1 Child', value: 1 },
    { label: '2 Children', value: 2 }
  ];

  readonly roomsOptions: Array<PoSelectOption> = [
    { label: '1 Room', value: 1 },
    { label: '2 Rooms', value: 2 },
    { label: '3 Rooms', value: 3 }
  ];

  booking() {
    this.poNotification.success('Hotel booked successfully');

    this.formReset();

    this.datepickerComponent.focus();
  }

  onChangeParams(isLuxury: boolean) {
    this.filterParams = isLuxury ? { category: 'Luxo' } : {};
    this.hotel = undefined;
  }

  private formReset() {
    this.form.reset({
      adults: 1,
      category: false,
      children: 0,
      rooms: 1
    });
  }
}
`),t()()()()(),o(21,"div",10),l(22,"sample-po-combo-hotels"),t(),l(23,"hr")),p&2&&(r(5),_("po-icon "+n.sampleCodeButtonIcon),r(),v(" ",n.sampleCodeButtonLabel,""),r(),s("ngClass",P(4,Bt,n.hideSampleCodeTabs)))},dependencies:[M,w,y,x,Xe],encapsulation:2})}return a})();var $e=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-doc"]],standalone:!1,decls:1758,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoComboFilterMode"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoComboOption"],["pan","",1,"docs-api-property-type","PoComboOptionGroup"],["pan","",1,"docs-api-property-type","any>"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type"],["pan","",1,"docs-api-property-type","Array<PoComboOption>"]],template:function(p,n){p&1&&(o(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),o(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),o(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),o(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),o(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),o(16,"h3",3),e(17,"Componente"),t(),o(18,"h4",4)(19,"code",5),e(20,"PoComboComponent"),t()(),o(21,"div",2)(22,"p"),e(23,"O "),o(24,"code"),e(25,"po-combo"),t(),e(26," exibe uma lista de op\xE7\xF5es com f\xE1cil sele\xE7\xE3o e filtragem."),t(),o(27,"p"),e(28,"Al\xE9m da exibi\xE7\xE3o padr\xE3o, nele \xE9 poss\xEDvel listar as op\xF5es em agrupamentos."),t(),o(29,"p"),e(30,"\xC9 poss\xEDvel selecionar e navegar entre as op\xE7\xF5es da lista tanto atrav\xE9s do "),o(31,"em"),e(32,"mouse"),t(),e(33,` quanto do teclado. No teclado navegue com
as setas e pressione `),o(34,"em"),e(35,"Enter"),t(),e(36," na op\xE7\xE3o que desejar."),t(),o(37,"p"),e(38,"Com ele tamb\xE9m \xE9 poss\xEDvel definir uma lista \xE0 partir da requisi\xE7\xE3o de um servi\xE7o definido em "),o(39,"code"),e(40,"p-filter-service"),t(),e(41,"."),t(),o(42,"p"),e(43,"Em "),o(44,"code"),e(45,"p-filter-mode"),t(),e(46,", o filtro poder\xE1 ser configurado para buscar op\xF5es que correspondam ao in\xEDcio, fim ou que contenha o valor digitado."),t(),o(47,"p"),e(48,"O "),o(49,"code"),e(50,"po-combo"),t(),e(51," guarda o \xFAltimo valor caso o usu\xE1rio desista de uma busca, deixando o campo ou pressionando "),o(52,"em"),e(53,"Esc"),t(),e(54,`. Caso seja digitado no
campo de busca a descri\xE7\xE3o completa de um item, ent\xE3o a sele\xE7\xE3o ser\xE1 automaticamente efetuada ao deixar o campo ou pressionando `),o(55,"em"),e(56,"Enter"),t(),e(57,"."),t(),o(58,"p"),e(59,`Utilizando po-combo com servi\xE7o, \xE9 possivel digitar um valor no campo de entrada e pressionar a tecla 'tab' para que o componente
fa\xE7a uma requisi\xE7\xE3o \xE0 URL informada passando o valor digitado no campo. Se encontrado o valor, ent\xE3o o mesmo ser\xE1 selecionado, caso
n\xE3o seja encontrado, ent\xE3o a lista de itens voltar\xE1 para o estado inicial.`),t(),o(60,"h4"),e(61,"Tokens customiz\xE1veis"),t(),o(62,"p"),e(63,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),o(64,"blockquote")(65,"p"),e(66,"Para maiores informa\xE7\xF5es, acesse o guia "),o(67,"a",6),e(68,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(69,"."),t()(),o(70,"table")(71,"thead")(72,"tr")(73,"th"),e(74,"Propriedade"),t(),o(75,"th"),e(76,"Descri\xE7\xE3o"),t(),o(77,"th"),e(78,"Valor Padr\xE3o"),t()()(),o(79,"tbody")(80,"tr")(81,"td")(82,"strong"),e(83,"Default Values"),t()(),l(84,"td")(85,"td"),t(),o(86,"tr")(87,"td")(88,"code"),e(89,"--font-family"),t()(),o(90,"td"),e(91,"Fam\xEDlia tipogr\xE1fica usada"),t(),o(92,"td")(93,"code"),e(94,"var(--font-family-theme)"),t()()(),o(95,"tr")(96,"td")(97,"code"),e(98,"--font-size"),t()(),o(99,"td"),e(100,"Tamanho da fonte"),t(),o(101,"td")(102,"code"),e(103,"var(--font-size-default)"),t()()(),o(104,"tr")(105,"td")(106,"code"),e(107,"--text-color"),t()(),o(108,"td"),e(109,"Cor do texto"),t(),o(110,"td")(111,"code"),e(112,"var(--color-neutral-dark-90)"),t()()(),o(113,"tr")(114,"td")(115,"code"),e(116,"--text-color-placeholder"),t()(),o(117,"td"),e(118,"Cor do texto no placeholder"),t(),o(119,"td")(120,"code"),e(121,"var(--color-neutral-light-30)"),t()()(),o(122,"tr")(123,"td")(124,"code"),e(125,"--color"),t()(),o(126,"td"),e(127,"Cor principal do Combo"),t(),o(128,"td")(129,"code"),e(130,"var(--color-neutral-dark-70)"),t()()(),o(131,"tr")(132,"td")(133,"code"),e(134,"--background"),t()(),o(135,"td"),e(136,"Cor de background"),t(),o(137,"td")(138,"code"),e(139,"var(--color-neutral-light-05)"),t()()(),o(140,"tr")(141,"td")(142,"code"),e(143,"--border-radius"),t()(),o(144,"td"),e(145,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),t(),o(146,"td")(147,"code"),e(148,"var(--border-width-lg)"),t()()(),o(149,"tr")(150,"td")(151,"code"),e(152,"--min-width"),t()(),o(153,"td"),e(154,"Largura m\xEDnima do combo"),t(),o(155,"td")(156,"code"),e(157,"150px"),t()()(),o(158,"tr")(159,"td")(160,"strong"),e(161,"Hover"),t()(),l(162,"td")(163,"td"),t(),o(164,"tr")(165,"td")(166,"code"),e(167,"--color-hover"),t()(),o(168,"td"),e(169,"Cor principal no estado hover"),t(),o(170,"td")(171,"code"),e(172,"var(--color-action-hover)"),t()()(),o(173,"tr")(174,"td")(175,"code"),e(176,"--background-hover"),t()(),o(177,"td"),e(178,"Cor de background no estado hover"),t(),o(179,"td")(180,"code"),e(181,"var(--color-brand-01-lightest)"),t()()(),o(182,"tr")(183,"td")(184,"strong"),e(185,"Focused"),t()(),l(186,"td")(187,"td"),t(),o(188,"tr")(189,"td")(190,"code"),e(191,"--color-focused"),t()(),o(192,"td"),e(193,"Cor principal no estado de focus"),t(),o(194,"td")(195,"code"),e(196,"var(--color-action-default)"),t()()(),o(197,"tr")(198,"td")(199,"code"),e(200,"--outline-color-focused"),t()(),o(201,"td"),e(202,"Cor do outline do estado de focus"),t(),o(203,"td")(204,"code"),e(205,"var(--color-action-focus)"),t()()(),o(206,"tr")(207,"td")(208,"strong"),e(209,"Error"),t()(),l(210,"td")(211,"td"),t(),o(212,"tr")(213,"td")(214,"code"),e(215,"--color-error"),t()(),o(216,"td"),e(217,"Cor principal no estado de erro"),t(),o(218,"td")(219,"code"),e(220,"var(--color-feedback-negative-base)"),t()()(),o(221,"tr")(222,"td")(223,"strong"),e(224,"Disabled"),t()(),l(225,"td")(226,"td"),t(),o(227,"tr")(228,"td")(229,"code"),e(230,"--color-disabled"),t()(),o(231,"td"),e(232,"Cor principal no estado disabled"),t(),o(233,"td")(234,"code"),e(235,"var(--color-neutral-light-30)"),t()()(),o(236,"tr")(237,"td")(238,"code"),e(239,"--background-disabled"),t()(),o(240,"td"),e(241,"Cor de background no estado disabled"),t(),o(242,"td")(243,"code"),e(244,"var(--color-neutral-light-20)"),t()()(),o(245,"tr")(246,"td")(247,"strong"),e(248,"Suggestion"),t()(),l(249,"td")(250,"td"),t(),o(251,"tr")(252,"td")(253,"code"),e(254,"--text-color-suggestion"),t()(),o(255,"td"),e(256,"Cor do texto no estado suggestion"),t(),o(257,"td")(258,"code"),e(259,"var(--color-neutral-mid-60)"),t()()(),o(260,"tr")(261,"td")(262,"code"),e(263,"--background-suggestion"),t()(),o(264,"td"),e(265,"Cor do background no estado suggestion"),t(),o(266,"td")(267,"code"),e(268,"var(--color-brand-01-lightest)"),t()()()()()(),o(269,"div",7)(270,"h4",8),e(271,"Seletor"),t(),o(272,"pre",9),e(273,`<po-combo
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-blur)="EventEmitter"
    p-cache="boolean"
    (p-change)="EventEmitter"
    p-change-on-enter="boolean"
    p-clean="boolean"
    p-debounce-time="number"
    p-disabled="boolean"
    p-disabled-init-filter="boolean"
    p-disabled-tab-filter="boolean"
    p-emit-object-value="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-field-label="string"
    p-field-value="string"
    p-filter-minlength="number"
    p-filter-mode="PoComboFilterMode"
    p-filter-params="any"
    p-filter-service="PoComboFilter | string"
    p-help="string"
    p-icon="string | TemplateRef<void>"
    p-infinite-scroll="boolean"
    p-infinite-scroll-distance="number"
    (p-input-change)="EventEmitter"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-listbox-control-position="'top' | 'bottom'"
    p-literals="PoComboLiterals"
    name="string"
    (ng-model-change)="EventEmitter"
    p-optional="boolean"
    p-options="Array<PoComboOption | PoComboOptionGroup | any>"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-remove-initial-filter="boolean"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string"
    p-sort="boolean" >
</po-combo>
`),t()(),o(274,"h4",10),e(275,"Propriedades"),t(),o(276,"table",11)(277,"tr",12)(278,"th",13),e(279,"Nome"),t(),o(280,"th",13),e(281,"Tipo"),t(),o(282,"th",13),e(283,"Padr\xE3o"),t(),o(284,"th",13),e(285,"Descri\xE7\xE3o"),t()(),o(286,"tr",14)(287,"td",15)(288,"div",16)(289,"span",17),e(290," (p-additional-help)"),l(291,"br"),t()(),o(292,"div",18),e(293,"Deprecated"),t()(),o(294,"td",19)(295,"code",20),e(296,"EventEmitter"),t()(),o(297,"td",21),e(298,"-"),t(),o(299,"td",22)(300,"em")(301,"strong"),e(302,"(opcional)"),t()(),o(303,"p"),e(304,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),t(),o(305,"blockquote")(306,"p"),e(307,"Essa propriedade est\xE1 "),o(308,"strong"),e(309,"depreciada"),t(),e(310," e ser\xE1 removida na vers\xE3o "),o(311,"code"),e(312,"23.x.x"),t(),e(313,". Recomendamos utilizar a propriedade "),o(314,"code"),e(315,"p-helper"),t(),e(316," que oferece mais recursos e flexibilidade."),t()()()(),o(317,"tr",14)(318,"td",15)(319,"div",23)(320,"span",24),e(321," p-additional-help-tooltip"),l(322,"br"),t()(),o(323,"div",18),e(324,"Deprecated"),t()(),o(325,"td",19)(326,"code",25),e(327,"string"),t()(),o(328,"td",21),e(329,"-"),t(),o(330,"td",22)(331,"em")(332,"strong"),e(333,"(opcional)"),t()(),o(334,"p"),e(335,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),o(336,"code"),e(337,"po-helper"),t(),e(338,`.
`),o(339,"strong"),e(340,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),o(341,"blockquote")(342,"p"),e(343,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),o(344,"blockquote")(345,"p"),e(346,"Essa propriedade est\xE1 "),o(347,"strong"),e(348,"depreciada"),t(),e(349," e ser\xE1 removida na vers\xE3o "),o(350,"code"),e(351,"23.x.x"),t(),e(352,". Recomendamos utilizar a propriedade "),o(353,"code"),e(354,"p-helper"),t(),e(355," que oferece mais recursos e flexibilidade."),t()()()(),o(356,"tr",14)(357,"td",15)(358,"div",23)(359,"span",24),e(360," p-append-in-body"),l(361,"br"),t()()(),o(362,"td",19)(363,"code",26),e(364,"boolean"),t()(),o(365,"td",21)(366,"p")(367,"code"),e(368,"false"),t()()(),o(369,"td",22)(370,"em")(371,"strong"),e(372,"(opcional)"),t()(),o(373,"p"),e(374,"Define que o "),o(375,"code"),e(376,"listbox"),t(),e(377," e/ou popover ("),o(378,"code"),e(379,"p-helper"),t(),e(380," e/ou "),o(381,"code"),e(382,"p-error-limit"),t(),e(383,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido,garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),t(),o(384,"blockquote")(385,"p"),e(386,"Quando utilizado com "),o(387,"code"),e(388,"p-helper"),t(),e(389,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),t()()()(),o(390,"tr",14)(391,"td",15)(392,"div",23)(393,"span",24),e(394," p-auto-focus"),l(395,"br"),t()()(),o(396,"td",19)(397,"code",26),e(398,"boolean"),t()(),o(399,"td",21)(400,"p")(401,"code"),e(402,"false"),t()()(),o(403,"td",22)(404,"em")(405,"strong"),e(406,"(opcional)"),t()(),o(407,"p"),e(408,"Aplica foco no elemento ao ser iniciado."),t(),o(409,"blockquote")(410,"p"),e(411,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),o(412,"tr",14)(413,"td",15)(414,"div",16)(415,"span",17),e(416," (p-blur)"),l(417,"br"),t()()(),o(418,"td",19)(419,"code",20),e(420,"EventEmitter"),t()(),o(421,"td",21),e(422,"-"),t(),o(423,"td",22)(424,"em")(425,"strong"),e(426,"(opcional)"),t()(),o(427,"p"),e(428,"Evento disparado ao sair do campo."),t()()(),o(429,"tr",14)(430,"td",15)(431,"div",23)(432,"span",24),e(433," p-cache"),l(434,"br"),t()()(),o(435,"td",19)(436,"code",26),e(437,"boolean"),t()(),o(438,"td",21)(439,"p")(440,"code"),e(441,"true"),t()()(),o(442,"td",22)(443,"em")(444,"strong"),e(445,"(opcional)"),t()(),o(446,"p"),e(447,"Define se o componente ir\xE1 guardar o valor do model para evitar requisi\xE7\xF5es repetidas."),t(),o(448,"blockquote")(449,"p"),e(450,"Caso o valor seja "),o(451,"code"),e(452,"false"),t(),e(453,", o componente far\xE1 uma nova requisi\xE7\xE3o mesmo que o valor procurado seja o mesmo do model."),t()()()(),o(454,"tr",14)(455,"td",15)(456,"div",16)(457,"span",17),e(458," (p-change)"),l(459,"br"),t()()(),o(460,"td",19)(461,"code",20),e(462,"EventEmitter"),t()(),o(463,"td",21),e(464,"-"),t(),o(465,"td",22)(466,"em")(467,"strong"),e(468,"(opcional)"),t()(),o(469,"p"),e(470,"Deve ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no ngModel. A fun\xE7\xE3o receber\xE1 como argumento o model modificado."),t(),o(471,"blockquote")(472,"p"),e(473,"Pode-se optar pelo recebimento do objeto selecionado ao inv\xE9s do model atrav\xE9s da propriedade "),o(474,"code"),e(475,"p-emit-object-value"),t(),e(476,"."),t()()()(),o(477,"tr",14)(478,"td",15)(479,"div",23)(480,"span",24),e(481," p-change-on-enter"),l(482,"br"),t()()(),o(483,"td",19)(484,"code",26),e(485,"boolean"),t()(),o(486,"td",21)(487,"p")(488,"code"),e(489,"false"),t()()(),o(490,"td",22)(491,"em")(492,"strong"),e(493,"(opcional)"),t()(),o(494,"p"),e(495,"Indica que o evento "),o(496,"code"),e(497,"p-change"),t(),e(498,' s\xF3 ser\xE1 disparado ao clicar ou pressionar a tecla "Enter" sobre uma op\xE7\xE3o selecionada.'),t()()(),o(499,"tr",14)(500,"td",15)(501,"div",23)(502,"span",24),e(503," p-clean"),l(504,"br"),t()()(),o(505,"td",19)(506,"code",26),e(507,"boolean"),t()(),o(508,"td",21),e(509,"-"),t(),o(510,"td",22)(511,"em")(512,"strong"),e(513,"(opcional)"),t()(),o(514,"p"),e(515,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t()()(),o(516,"tr",14)(517,"td",15)(518,"div",23)(519,"span",24),e(520," p-debounce-time"),l(521,"br"),t()()(),o(522,"td",19)(523,"code",27),e(524,"number"),t()(),o(525,"td",21)(526,"p")(527,"code"),e(528,"400"),t()()(),o(529,"td",22)(530,"em")(531,"strong"),e(532,"(opcional)"),t()(),o(533,"p"),e(534,`Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla.
Ser\xE1 utilizada apenas quando houver servi\xE7o (`),o(535,"code"),e(536,"p-filter-service"),t(),e(537,")."),t()()(),o(538,"tr",14)(539,"td",15)(540,"div",23)(541,"span",24),e(542," p-disabled"),l(543,"br"),t()()(),o(544,"td",19)(545,"code",26),e(546,"boolean"),t()(),o(547,"td",21)(548,"p")(549,"code"),e(550,"false"),t()()(),o(551,"td",22)(552,"em")(553,"strong"),e(554,"(opcional)"),t()(),o(555,"p"),e(556,"Indica que o campo ser\xE1 desabilitado."),t()()(),o(557,"tr",14)(558,"td",15)(559,"div",23)(560,"span",24),e(561," p-disabled-init-filter"),l(562,"br"),t()()(),o(563,"td",19)(564,"code",26),e(565,"boolean"),t()(),o(566,"td",21)(567,"p")(568,"code"),e(569,"false"),t()()(),o(570,"td",22)(571,"em")(572,"strong"),e(573,"(opcional)"),t()(),o(574,"p"),e(575,"Desabilita o filtro inicial no servi\xE7o, que \xE9 executado no primeiro clique no campo."),t()()(),o(576,"tr",14)(577,"td",15)(578,"div",23)(579,"span",24),e(580," p-disabled-tab-filter"),l(581,"br"),t()()(),o(582,"td",19)(583,"code",26),e(584,"boolean"),t()(),o(585,"td",21)(586,"p")(587,"code"),e(588,"false"),t()()(),o(589,"td",22)(590,"em")(591,"strong"),e(592,"(opcional)"),t()(),o(593,"p"),e(594,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB."),t()()(),o(595,"tr",14)(596,"td",15)(597,"div",23)(598,"span",24),e(599," p-emit-object-value"),l(600,"br"),t()()(),o(601,"td",19)(602,"code",26),e(603,"boolean"),t()(),o(604,"td",21)(605,"p")(606,"code"),e(607,"false"),t()()(),o(608,"td",22)(609,"em")(610,"strong"),e(611,"(opcional)"),t()(),o(612,"p"),e(613,"Se verdadeiro, o evento "),o(614,"code"),e(615,"p-change"),t(),e(616," receber\xE1 como argumento o "),o(617,"code"),e(618,"PoComboOption"),t(),e(619," referente \xE0 op\xE7\xE3o selecionada."),t()()(),o(620,"tr",14)(621,"td",15)(622,"div",23)(623,"span",24),e(624," p-error-limit"),l(625,"br"),t()()(),o(626,"td",19)(627,"code",26),e(628,"boolean"),t()(),o(629,"td",21)(630,"p")(631,"code"),e(632,"false"),t()()(),o(633,"td",22)(634,"em")(635,"strong"),e(636,"(opcional)"),t()(),o(637,"p"),e(638,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),o(639,"blockquote")(640,"p"),e(641,"Caso essa propriedade seja definida como "),o(642,"code"),e(643,"true"),t(),e(644,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),o(645,"tr",14)(646,"td",15)(647,"div",23)(648,"span",24),e(649," p-field-error-message"),l(650,"br"),t()()(),o(651,"td",19)(652,"code",25),e(653,"string"),t()(),o(654,"td",21),e(655,"-"),t(),o(656,"td",22)(657,"em")(658,"strong"),e(659,"(opcional)"),t()(),o(660,"p"),e(661,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),t(),o(662,"blockquote")(663,"p"),e(664,"Necess\xE1rio que a propriedade "),o(665,"code"),e(666,"p-required"),t(),e(667," esteja habilitada."),t()()()(),o(668,"tr",14)(669,"td",15)(670,"div",23)(671,"span",24),e(672," p-field-label"),l(673,"br"),t()()(),o(674,"td",19)(675,"code",25),e(676,"string"),t()(),o(677,"td",21)(678,"p")(679,"code"),e(680,"label"),t()()(),o(681,"td",22)(682,"em")(683,"strong"),e(684,"(opcional)"),t()(),o(685,"p"),e(686,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),o(687,"code"),e(688,"p-options"),t(),e(689,"), esta propriedade ser\xE1 respons\xE1vel pelo texto de apresenta\xE7\xE3o de cada item da lista."),t(),o(690,"p"),e(691,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
PoComboOption.`),t()()(),o(692,"tr",14)(693,"td",15)(694,"div",23)(695,"span",24),e(696," p-field-value"),l(697,"br"),t()()(),o(698,"td",19)(699,"code",25),e(700,"string"),t()(),o(701,"td",21)(702,"p")(703,"code"),e(704,"value"),t()()(),o(705,"td",22)(706,"em")(707,"strong"),e(708,"(opcional)"),t()(),o(709,"p"),e(710,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),o(711,"code"),e(712,"p-options"),t(),e(713,"), esta propriedade ser\xE1 respons\xE1vel pelo valor de cada item da lista."),t(),o(714,"p"),e(715,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
PoComboOption.`),t()()(),o(716,"tr",14)(717,"td",15)(718,"div",23)(719,"span",24),e(720," p-filter-minlength"),l(721,"br"),t()()(),o(722,"td",19)(723,"code",27),e(724,"number"),t()(),o(725,"td",21)(726,"p")(727,"code"),e(728,"0"),t()()(),o(729,"td",22)(730,"em")(731,"strong"),e(732,"(opcional)"),t()(),o(733,"p"),e(734,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o."),t()()(),o(735,"tr",14)(736,"td",15)(737,"div",23)(738,"span",24),e(739," p-filter-mode"),l(740,"br"),t()()(),o(741,"td",19)(742,"code",28),e(743,"PoComboFilterMode"),t()(),o(744,"td",21)(745,"p")(746,"code"),e(747,"startsWith"),t()()(),o(748,"td",22)(749,"em")(750,"strong"),e(751,"(opcional)"),t()(),o(752,"p"),e(753,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),o(754,"code"),e(755,"startsWith"),t(),e(756,", "),o(757,"code"),e(758,"contains"),t(),e(759," ou "),o(760,"code"),e(761,"endsWith"),t(),e(762,"."),t(),o(763,"blockquote")(764,"p"),e(765,"Quando utilizar a propriedade "),o(766,"code"),e(767,"p-filter-service"),t(),e(768," esta propriedade ser\xE1 ignorada."),t()()()(),o(769,"tr",14)(770,"td",15)(771,"div",23)(772,"span",24),e(773," p-filter-params"),l(774,"br"),t()()(),o(775,"td",19)(776,"code",29),e(777,"any"),t()(),o(778,"td",21),e(779,"-"),t(),o(780,"td",22)(781,"em")(782,"strong"),e(783,"(opcional)"),t()(),o(784,"p"),e(785,"Valor que ser\xE1 repassado como par\xE2metro para a URL ou aos m\xE9todos do servi\xE7o que implementam a interface "),o(786,"em"),e(787,"PoComboFilter"),t(),e(788,"."),t(),o(789,"blockquote")(790,"p"),e(791,"Caso a lista contenha agrupamentos, os mesmos s\xF3 ser\xE3o exibidos se houver no m\xEDnimo uma op\xE7\xE3o que corresponda \xE0 pesquisa."),t()()()(),o(792,"tr",14)(793,"td",15)(794,"div",23)(795,"span",24),e(796," p-filter-service"),l(797,"br"),t()()(),o(798,"td",19)(799,"code",30),e(800,"PoComboFilter "),t(),o(801,"code",25),e(802," string"),t()(),o(803,"td",21),e(804,"-"),t(),o(805,"td",22)(806,"em")(807,"strong"),e(808,"(opcional)"),t()(),o(809,"p"),e(810,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 realizado o filtro para carregamento da lista de
itens no componente.
Caso haja a necessidade de customiza\xE7\xE3o, ent\xE3o pode ser informado um servi\xE7o implementando a interface PoComboFilter.`),t(),o(811,"p"),e(812,`Caso utilizado uma URL, o servi\xE7o deve ser retornado no padr\xE3o API TOTVS e utiliza as propriedades
`),o(813,"code"),e(814,"p-field-label"),t(),e(815," e "),o(816,"code"),e(817,"p-field-value"),t(),e(818," para a constru\xE7\xE3o da lista de itens."),t(),o(819,"p"),e(820,"Quando utilizada uma URL de servi\xE7o, ent\xE3o ser\xE1 concatenada nesta URL o valor que deseja-se filtrar da seguinte forma:"),t(),o(821,"pre")(822,"code"),e(823,`url + ?filter=Peter
`),t()(),o(824,"p"),e(825,"Se for definida a propriedade "),o(826,"code"),e(827,"p-filter-params"),t(),e(828,`, a mesma tamb\xE9m ser\xE1 concatenada. Por exemplo, para o
par\xE2metro `),o(829,"code"),e(830,"{ age: 23 }"),t(),e(831," a URL ficaria:"),t(),o(832,"pre")(833,"code"),e(834,`url + ?page=1&pageSize=20&age=23&filter=Peter
`),t()()()(),o(835,"tr",14)(836,"td",15)(837,"div",23)(838,"span",24),e(839," p-help"),l(840,"br"),t()()(),o(841,"td",19)(842,"code",25),e(843,"string"),t()(),o(844,"td",21),e(845,"-"),t(),o(846,"td",22)(847,"em")(848,"strong"),e(849,"(opcional)"),t()(),o(850,"p"),e(851,"Texto de apoio para o campo."),t()()(),o(852,"tr",14)(853,"td",15)(854,"div",23)(855,"span",24),e(856," p-icon"),l(857,"br"),t()()(),o(858,"td",19)(859,"code",25),e(860,"string "),t(),o(861,"code",31),e(862," TemplateRef<void>"),t()(),o(863,"td",21),e(864,"-"),t(),o(865,"td",22)(866,"em")(867,"strong"),e(868,"(opcional)"),t()(),o(869,"p"),e(870,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),o(871,"p"),e(872,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),o(873,"a",32),e(874,"Biblioteca de \xEDcones"),t(),e(875,". conforme exemplo abaixo:"),t(),o(876,"pre")(877,"code"),e(878,`<po-combo p-icon="an an-user" p-label="PO combo"></po-combo>
`),t()(),o(879,"p"),e(880,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),o(881,"em"),e(882,"Font Awesome"),t(),e(883,", da seguinte forma:"),t(),o(884,"pre")(885,"code"),e(886,`<po-combo p-icon="fa fa-podcast" p-label="PO combo"></po-combo>
`),t()(),o(887,"p"),e(888,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),o(889,"code"),e(890,"TemplateRef"),t(),e(891,", conforme exemplo abaixo:"),t(),o(892,"pre")(893,"code"),e(894,`<po-combo [p-icon]="template" p-label="combo template ionic"></po-combo>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),t()(),o(895,"blockquote")(896,"p"),e(897,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),o(898,"code"),e(899,"font-size: inherit"),t(),e(900," caso o \xEDcone utilizado n\xE3o aplique-o."),t()()()(),o(901,"tr",14)(902,"td",15)(903,"div",23)(904,"span",24),e(905," p-infinite-scroll"),l(906,"br"),t()()(),o(907,"td",19)(908,"code",26),e(909,"boolean"),t()(),o(910,"td",21)(911,"p")(912,"code"),e(913,"false"),t()()(),o(914,"td",22)(915,"em")(916,"strong"),e(917,"(opcional)"),t()(),o(918,"p"),e(919,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo, Ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),t()()(),o(920,"tr",14)(921,"td",15)(922,"div",23)(923,"span",24),e(924," p-infinite-scroll-distance"),l(925,"br"),t()()(),o(926,"td",19)(927,"code",27),e(928,"number"),t()(),o(929,"td",21),e(930,"-"),t(),o(931,"td",22)(932,"em")(933,"strong"),e(934,"(opcional)"),t()(),o(935,"p"),e(936,"Define o percentual necess\xE1rio para disparar o evento "),o(937,"code"),e(938,"show-more"),t(),e(939,", que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%."),t(),o(940,"p")(941,"strong"),e(942,"Exemplos"),t()(),o(943,"ul")(944,"li"),e(945,"p-infinite-scroll-distance = 80: Quando atingir 80% do scroll do combo, o "),o(946,"code"),e(947,"show-more"),t(),e(948," ser\xE1 disparado."),t()()()(),o(949,"tr",14)(950,"td",15)(951,"div",16)(952,"span",17),e(953," (p-input-change)"),l(954,"br"),t()()(),o(955,"td",19)(956,"code",20),e(957,"EventEmitter"),t()(),o(958,"td",21),e(959,"-"),t(),o(960,"td",22)(961,"em")(962,"strong"),e(963,"(opcional)"),t()(),o(964,"p"),e(965,"Deve ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no Search input. A fun\xE7\xE3o receber\xE1 como argumento o input modificado."),t()()(),o(966,"tr",14)(967,"td",15)(968,"div",16)(969,"span",17),e(970," (p-keydown)"),l(971,"br"),t()()(),o(972,"td",19)(973,"code",20),e(974,"EventEmitter"),t()(),o(975,"td",21),e(976,"-"),t(),o(977,"td",22)(978,"em")(979,"strong"),e(980,"(opcional)"),t()(),o(981,"p"),e(982,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),o(983,"code"),e(984,"KeyboardEvent"),t(),e(985," com informa\xE7\xF5es sobre a tecla."),t()()(),o(986,"tr",14)(987,"td",15)(988,"div",23)(989,"span",24),e(990," p-label"),l(991,"br"),t()()(),o(992,"td",19)(993,"code",25),e(994,"string"),t()(),o(995,"td",21),e(996,"-"),t(),o(997,"td",22)(998,"em")(999,"strong"),e(1e3,"(opcional)"),t()(),o(1001,"p"),e(1002,"Label no componente."),t()()(),o(1003,"tr",14)(1004,"td",15)(1005,"div",23)(1006,"span",24),e(1007," p-label-text-wrap"),l(1008,"br"),t()()(),o(1009,"td",19)(1010,"code",26),e(1011,"boolean"),t()(),o(1012,"td",21)(1013,"p")(1014,"code"),e(1015,"false"),t()()(),o(1016,"td",22)(1017,"em")(1018,"strong"),e(1019,"(opcional)"),t()(),o(1020,"p"),e(1021,"Habilita a quebra autom\xE1tica do texto da propriedade "),o(1022,"code"),e(1023,"p-label"),t(),e(1024,". Quando "),o(1025,"code"),e(1026,"p-label-text-wrap"),t(),e(1027,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),o(1028,"tr",14)(1029,"td",15)(1030,"div",23)(1031,"span",24),e(1032," p-listbox-control-position"),l(1033,"br"),t()()(),o(1034,"td",19)(1035,"code",33),e(1036,"'top' "),t(),o(1037,"code",34),e(1038," 'bottom'"),t()(),o(1039,"td",21)(1040,"p")(1041,"code"),e(1042,"bottom"),t()()(),o(1043,"td",22)(1044,"em")(1045,"strong"),e(1046,"(opcional)"),t()(),o(1047,"p"),e(1048,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),o(1049,"code"),e(1050,"listbox"),t(),e(1051," em rela\xE7\xE3o ao campo ("),o(1052,"code"),e(1053,"top"),t(),e(1054," ou "),o(1055,"code"),e(1056,"bottom"),t(),e(1057,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),t()()(),o(1058,"tr",14)(1059,"td",15)(1060,"div",23)(1061,"span",24),e(1062," p-literals"),l(1063,"br"),t()()(),o(1064,"td",19)(1065,"code",35),e(1066,"PoComboLiterals"),t()(),o(1067,"td",21),e(1068,"-"),t(),o(1069,"td",22)(1070,"em")(1071,"strong"),e(1072,"(opcional)"),t()(),o(1073,"p"),e(1074,"Objeto com as literais usadas no "),o(1075,"code"),e(1076,"po-combo"),t(),e(1077,"."),t(),o(1078,"p"),e(1079,"Para utilizar basta passar a literal que deseja customizar:"),t(),o(1080,"pre")(1081,"code"),e(1082,`const customLiterals: PoComboLiterals = {
  noData: 'Nenhum valor'
};
`),t()(),o(1083,"p"),e(1084,"E para carregar a literal customizada, basta apenas passar o objeto para o componente."),t(),o(1085,"pre")(1086,"code"),e(1087,`<po-combo
  [p-literals]="customLiterals">
</po-combo>
`),t()(),o(1088,"blockquote")(1089,"p"),e(1090,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),o(1091,"a",36)(1092,"code"),e(1093,"PoI18nService"),t()(),e(1094," ou do browser."),t()()()(),o(1095,"tr",14)(1096,"td",15)(1097,"div",23)(1098,"span",24),e(1099," name"),l(1100,"br"),t()()(),o(1101,"td",19)(1102,"code",25),e(1103,"string"),t()(),o(1104,"td",21),e(1105,"-"),t(),o(1106,"td",22)(1107,"p"),e(1108,"Nome do componente."),t()()(),o(1109,"tr",14)(1110,"td",15)(1111,"div",16)(1112,"span",17),e(1113," (ngModelChange)"),l(1114,"br"),t()()(),o(1115,"td",19)(1116,"code",20),e(1117,"EventEmitter"),t()(),o(1118,"td",21),e(1119,"-"),t(),o(1120,"td",22)(1121,"em")(1122,"strong"),e(1123,"(opcional)"),t()(),o(1124,"p"),e(1125,"Fun\xE7\xE3o para atualizar o ngModel do componente, necess\xE1rio quando n\xE3o for utilizado dentro da tag form."),t(),o(1126,"p"),e(1127,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),o(1128,"code"),e(1129,"strictTemplates"),t(),e(1130,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),t(),o(1131,"pre")(1132,"code"),e(1133,`<po-combo ... [ngModel]="comboModel" (ngModelChange)="comboModel = $event"> </po-combo>
`),t()()()(),o(1134,"tr",14)(1135,"td",15)(1136,"div",23)(1137,"span",24),e(1138," p-optional"),l(1139,"br"),t()()(),o(1140,"td",19)(1141,"code",26),e(1142,"boolean"),t()(),o(1143,"td",21)(1144,"p")(1145,"code"),e(1146,"false"),t()()(),o(1147,"td",22)(1148,"em")(1149,"strong"),e(1150,"(opcional)"),t()(),o(1151,"p"),e(1152,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),o(1153,"blockquote")(1154,"p"),e(1155,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),o(1156,"ul")(1157,"li"),e(1158,"O campo conter "),o(1159,"code"),e(1160,"p-required"),t(),e(1161,";"),t(),o(1162,"li"),e(1163,"N\xE3o possuir "),o(1164,"code"),e(1165,"p-help"),t(),e(1166," e/ou "),o(1167,"code"),e(1168,"p-label"),t(),e(1169,"."),t()()()(),o(1170,"tr",14)(1171,"td",15)(1172,"div",23)(1173,"span",24),e(1174," p-options"),l(1175,"br"),t()()(),o(1176,"td",19)(1177,"code",37),e(1178,"Array<PoComboOption "),t(),o(1179,"code",38),e(1180," PoComboOptionGroup "),t(),o(1181,"code",39),e(1182," any>"),t()(),o(1183,"td",21),e(1184,"-"),t(),o(1185,"td",22)(1186,"p"),e(1187,"Nesta propriedade define a lista de op\xE7\xF5es do "),o(1188,"code"),e(1189,"po-combo"),t(),e(1190,"."),t(),o(1191,"blockquote")(1192,"p"),e(1193,"A lista pode ser definida utilizando um array com o valor representando o "),o(1194,"code"),e(1195,"value"),t(),e(1196," e o "),o(1197,"code"),e(1198,"label"),t(),e(1199," das seguintes formas:"),t()(),o(1200,"pre")(1201,"code"),e(1202,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{value: 1, label: 'One'}, {value: 2, label: 'two'}]"> </po-combo>
`),t()(),o(1203,"pre")(1204,"code"),e(1205,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{name: 'Roger', age: 28}, {name: 'Anne', age: 35}]" p-field-label="name" p-field-value="age"> </po-combo>
`),t()(),o(1206,"ul")(1207,"li"),e(1208,"Aconselha-se utilizar valores distintos no "),o(1209,"code"),e(1210,"label"),t(),e(1211," e "),o(1212,"code"),e(1213,"value"),t(),e(1214," dos itens."),t()()()(),o(1215,"tr",14)(1216,"td",15)(1217,"div",23)(1218,"span",24),e(1219," p-placeholder"),l(1220,"br"),t()()(),o(1221,"td",19)(1222,"code",25),e(1223,"string"),t()(),o(1224,"td",21),e(1225,"-"),t(),o(1226,"td",22)(1227,"p"),e(1228,"Mensagem apresentada enquanto o campo estiver vazio."),t()()(),o(1229,"tr",14)(1230,"td",15)(1231,"div",23)(1232,"span",24),e(1233," p-helper"),l(1234,"br"),t()()(),o(1235,"td",19)(1236,"code",40),e(1237,"PoHelperOptions "),t(),o(1238,"code",25),e(1239," string"),t()(),o(1240,"td",21),e(1241,"-"),t(),o(1242,"td",22)(1243,"em")(1244,"strong"),e(1245,"(opcional)"),t()(),o(1246,"p"),e(1247,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),o(1248,"code"),e(1249,"p-label"),t(),e(1250," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),o(1251,"code"),e(1252,"p-label"),t(),e(1253,"."),t(),o(1254,"blockquote")(1255,"p"),e(1256,"Para mais informa\xE7\xF5es acesse: "),o(1257,"a",41),e(1258,"https://po-ui.io/documentation/po-helper"),t(),e(1259,"."),t()(),o(1260,"blockquote")(1261,"p"),e(1262,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),o(1263,"code"),e(1264,"p-additional-help-tooltip"),t(),e(1265," e "),o(1266,"code"),e(1267,"p-additional-help"),t(),e(1268,") ser\xE1 ignorado."),t()()()(),o(1269,"tr",14)(1270,"td",15)(1271,"div",23)(1272,"span",24),e(1273," p-remove-initial-filter"),l(1274,"br"),t()()(),o(1275,"td",19)(1276,"code",26),e(1277,"boolean"),t()(),o(1278,"td",21)(1279,"p")(1280,"code"),e(1281,"false"),t()()(),o(1282,"td",22)(1283,"em")(1284,"strong"),e(1285,"(opcional)"),t()(),o(1286,"p"),e(1287,"Define que o filtro no primeiro clique ser\xE1 removido."),t(),o(1288,"blockquote")(1289,"p"),e(1290,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),t()()()(),o(1291,"tr",14)(1292,"td",15)(1293,"div",23)(1294,"span",24),e(1295," p-required"),l(1296,"br"),t()()(),o(1297,"td",19)(1298,"code",26),e(1299,"boolean"),t()(),o(1300,"td",21)(1301,"p")(1302,"code"),e(1303,"false"),t()()(),o(1304,"td",22)(1305,"em")(1306,"strong"),e(1307,"(opcional)"),t()(),o(1308,"p"),e(1309,"Define que o campo ser\xE1 obrigat\xF3rio."),t()()(),o(1310,"tr",14)(1311,"td",15)(1312,"div",23)(1313,"span",24),e(1314," p-show-required"),l(1315,"br"),t()()(),o(1316,"td",19)(1317,"code",26),e(1318,"boolean"),t()(),o(1319,"td",21),e(1320,"-"),t(),o(1321,"td",22)(1322,"p"),e(1323,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),o(1324,"blockquote")(1325,"p"),e(1326,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),o(1327,"ul")(1328,"li"),e(1329,"N\xE3o possuir "),o(1330,"code"),e(1331,"p-help"),t(),e(1332," e/ou "),o(1333,"code"),e(1334,"p-label"),t(),e(1335,"."),t()()()(),o(1336,"tr",14)(1337,"td",15)(1338,"div",23)(1339,"span",24),e(1340," p-size"),l(1341,"br"),t()()(),o(1342,"td",19)(1343,"code",25),e(1344,"string"),t()(),o(1345,"td",21)(1346,"p")(1347,"code"),e(1348,"medium"),t()()(),o(1349,"td",22)(1350,"em")(1351,"strong"),e(1352,"(opcional)"),t()(),o(1353,"p"),e(1354,"Define o tamanho do componente:"),t(),o(1355,"ul")(1356,"li")(1357,"code"),e(1358,"small"),t(),e(1359,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),o(1360,"li")(1361,"code"),e(1362,"medium"),t(),e(1363,": altura do input como 44px."),t()(),o(1364,"blockquote")(1365,"p"),e(1366,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),o(1367,"code"),e(1368,"medium"),t(),e(1369,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),o(1370,"a",42),e(1371,"po-theme"),t(),e(1372,"."),t()()()(),o(1373,"tr",14)(1374,"td",15)(1375,"div",23)(1376,"span",24),e(1377," p-sort"),l(1378,"br"),t()()(),o(1379,"td",19)(1380,"code",26),e(1381,"boolean"),t()(),o(1382,"td",21),e(1383,"-"),t(),o(1384,"td",22)(1385,"p"),e(1386,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),t()()()(),o(1387,"h3",10),e(1388,"M\xE9todos"),t(),o(1389,"table",43)(1390,"tr",14)(1391,"th",44)(1392,"div",23)(1393,"h4")(1394,"span",24),e(1395," focus "),t()()()()(),o(1396,"tr",22)(1397,"td",22)(1398,"p"),e(1399,"Fun\xE7\xE3o que atribui foco ao componente."),t(),o(1400,"p"),e(1401,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),o(1402,"pre")(1403,"code"),e(1404,`import { PoComboComponent } from '@po-ui/ng-components';

...

@ViewChild(PoComboComponent, { static: true }) combo: PoComboComponent;

focusCombo() {
  this.combo.focus();
}
`),t()()()()(),l(1405,"br"),o(1406,"table",43)(1407,"tr",14)(1408,"th",44)(1409,"div",23)(1410,"h4")(1411,"span",24),e(1412," showAdditionalHelp "),t()()()()(),o(1413,"tr",22)(1414,"td",22)(1415,"p"),e(1416,"M\xE9todo que exibe "),o(1417,"code"),e(1418,"p-helper"),t(),e(1419," ou executa a a\xE7\xE3o definida em "),o(1420,"code"),e(1421,"p-helper{eventOnClick}"),t(),e(1422," ou em "),o(1423,"code"),e(1424,"p-additionalHelp"),t(),e(1425,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),o(1426,"code"),e(1427,"p-keydown"),t(),e(1428,"."),t(),o(1429,"blockquote")(1430,"p"),e(1431,"Exibe ou oculta o conte\xFAdo do componente "),o(1432,"code"),e(1433,"po-helper"),t(),e(1434," quando o componente estiver com foco."),t()(),o(1435,"pre")(1436,"code"),e(1437,`// Exemplo com p-label e p-helper
<po-combo
 #combo
 ...
 p-label="Label do combo"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, combo)"
></po-combo>
`),t()(),o(1438,"pre")(1439,"code"),e(1440,`...
onKeyDown(event: KeyboardEvent, inp: PoComboComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),l(1441,"br"),o(1442,"h3"),e(1443,"Interfaces"),t(),o(1444,"h4",45)(1445,"code",5),e(1446,"PoComboFilter"),t()(),o(1447,"div",2)(1448,"p"),e(1449,"Interface para os servi\xE7os que ser\xE3o utilizados no po-combo."),t()(),o(1450,"h4",10),e(1451,"M\xE9todos"),t(),o(1452,"table",43)(1453,"tr",14)(1454,"th",44)(1455,"div",23)(1456,"h4")(1457,"span",24),e(1458," getFilteredData "),t()()()()(),o(1459,"tr",22)(1460,"td",22)(1461,"p"),e(1462,`M\xE9todo respons\xE1vel por retornar um Observable que cont\xE9m uma cole\xE7\xE3o de objetos que seguem a interface PoComboOption,
ser\xE1 informado por parametro o campo, de acordo com o fieldLabel, e o valor a ser pesquisado.`),t()()()(),o(1463,"h5")(1464,"b"),e(1465,"Par\xE2metros"),t()(),o(1466,"table",11)(1467,"tr",12)(1468,"th",13),e(1469,"Nome"),t(),o(1470,"th",13),e(1471,"Tipo"),t(),o(1472,"th",13),e(1473,"Descri\xE7\xE3o"),t()(),o(1474,"tr",14)(1475,"td",15),e(1476," params"),t(),o(1477,"td",19)(1478,"code",46),e(1479," any "),t()(),o(1480,"td",22)(1481,"p"),e(1482,"Objeto contendo a propriedade e o valor respons\xE1vel por realizar o filtro."),t()()(),o(1483,"tr",14)(1484,"td",15),e(1485," filterParams"),t(),o(1486,"td",19)(1487,"code",46),e(1488," any "),t()(),o(1489,"td",22)(1490,"p"),e(1491,"Valor informado atrav\xE9s da propriedade "),o(1492,"code"),e(1493,"p-filter-params"),t(),e(1494,"."),t()()()(),l(1495,"br"),o(1496,"table",43)(1497,"tr",14)(1498,"th",44)(1499,"div",23)(1500,"h4")(1501,"span",24),e(1502," getObjectByValue "),t()()()()(),o(1503,"tr",22)(1504,"td",22)(1505,"p"),e(1506,`M\xE9todo respons\xE1vel por retornar um Observable que cont\xE9m apenas o objeto filtrado que seguem a interface PoComboOption,
ser\xE1 informado por parametro valor a ser pesquisado.`),t()()()(),o(1507,"h5")(1508,"b"),e(1509,"Par\xE2metros"),t()(),o(1510,"table",11)(1511,"tr",12)(1512,"th",13),e(1513,"Nome"),t(),o(1514,"th",13),e(1515,"Tipo"),t(),o(1516,"th",13),e(1517,"Descri\xE7\xE3o"),t()(),o(1518,"tr",14)(1519,"td",15),e(1520," value"),t(),o(1521,"td",19)(1522,"code",25),e(1523," string "),t(),o(1524,"code",27),e(1525," number "),t()(),o(1526,"td",22)(1527,"p"),e(1528,"Valor respons\xE1vel por realizar a busca de um \xFAnico objeto."),t()()(),o(1529,"tr",14)(1530,"td",15),e(1531," filterParams"),t(),o(1532,"td",19)(1533,"code",46),e(1534," any "),t()(),o(1535,"td",22)(1536,"p"),e(1537,"Valor informado atrav\xE9s da propriedade "),o(1538,"code"),e(1539,"p-filter-params"),t(),e(1540,"."),t()()()(),l(1541,"br"),o(1542,"h4",45)(1543,"code",5),e(1544,"PoComboLiterals"),t()(),o(1545,"div",2)(1546,"p"),e(1547,"Interface para defini\xE7\xE3o das literais usadas no "),o(1548,"code"),e(1549,"po-combo"),t(),e(1550,"."),t()(),o(1551,"h4",10),e(1552,"Propriedades"),t(),o(1553,"table",11)(1554,"tr",12)(1555,"th",13),e(1556,"Nome"),t(),o(1557,"th",13),e(1558,"Tipo"),t(),o(1559,"th",13),e(1560,"Descri\xE7\xE3o"),t()(),o(1561,"tr",14)(1562,"td",15)(1563,"div",23)(1564,"span",24),e(1565," chooseOption"),l(1566,"br"),t()()(),o(1567,"td",19)(1568,"code",25),e(1569,"string"),t()(),o(1570,"td",22)(1571,"em")(1572,"strong"),e(1573,"(opcional)"),t()(),o(1574,"p"),e(1575,"Texto exibido quando o combo estiver vazio."),t()()(),o(1576,"tr",14)(1577,"td",15)(1578,"div",23)(1579,"span",24),e(1580," clean"),l(1581,"br"),t()()(),o(1582,"td",19)(1583,"code",25),e(1584,"string"),t()(),o(1585,"td",22)(1586,"em")(1587,"strong"),e(1588,"(opcional)"),t()(),o(1589,"p"),e(1590,"Texto do aria-label do bot\xE3o de limpar"),t()()(),o(1591,"tr",14)(1592,"td",15)(1593,"div",23)(1594,"span",24),e(1595," noData"),l(1596,"br"),t()()(),o(1597,"td",19)(1598,"code",25),e(1599,"string"),t()(),o(1600,"td",22)(1601,"em")(1602,"strong"),e(1603,"(opcional)"),t()(),o(1604,"p"),e(1605,"Texto exibido quando n\xE3o houver itens na lista ou se, a pesquisa do filtro n\xE3o retornar nenhum item."),t()()()(),o(1606,"h4",45)(1607,"code",5),e(1608,"PoComboOptionGroup"),t()(),o(1609,"div",2)(1610,"p"),e(1611,"Interface dos agrupamentos da cole\xE7\xE3o que ser\xE1 exibida no dropdown do "),o(1612,"code"),e(1613,"po-combo"),t(),e(1614,"."),t()(),o(1615,"h4",10),e(1616,"Propriedades"),t(),o(1617,"table",11)(1618,"tr",12)(1619,"th",13),e(1620,"Nome"),t(),o(1621,"th",13),e(1622,"Tipo"),t(),o(1623,"th",13),e(1624,"Descri\xE7\xE3o"),t()(),o(1625,"tr",14)(1626,"td",15)(1627,"div",23)(1628,"span",24),e(1629," label"),l(1630,"br"),t()()(),o(1631,"td",19)(1632,"code",25),e(1633,"string"),t()(),o(1634,"td",22)(1635,"p"),e(1636,"T\xEDtulo para cada grupo de op\xE7\xF5es."),t()()(),o(1637,"tr",14)(1638,"td",15)(1639,"div",23)(1640,"span",24),e(1641," options"),l(1642,"br"),t()()(),o(1643,"td",19)(1644,"code",47),e(1645,"Array<PoComboOption>"),t()(),o(1646,"td",22)(1647,"p"),e(1648,"Lista de itens a serem exibidos."),t()()()(),o(1649,"h4",45)(1650,"code",5),e(1651,"PoComboOption"),t()(),o(1652,"div",2)(1653,"p"),e(1654,"Interface que define as op\xE7\xF5es que ser\xE3o exibidas na lista do "),o(1655,"code"),e(1656,"po-combo"),t(),e(1657,"."),t()(),o(1658,"h4",10),e(1659,"Propriedades"),t(),o(1660,"table",11)(1661,"tr",12)(1662,"th",13),e(1663,"Nome"),t(),o(1664,"th",13),e(1665,"Tipo"),t(),o(1666,"th",13),e(1667,"Descri\xE7\xE3o"),t()(),o(1668,"tr",14)(1669,"td",15)(1670,"div",23)(1671,"span",24),e(1672," label"),l(1673,"br"),t()()(),o(1674,"td",19)(1675,"code",25),e(1676,"string"),t()(),o(1677,"td",22)(1678,"em")(1679,"strong"),e(1680,"(opcional)"),t()(),o(1681,"p"),e(1682,"Descri\xE7\xE3o exibida nas op\xE7\xF5es da lista."),t(),o(1683,"blockquote")(1684,"p"),e(1685,"Caso n\xE3o seja definida ser\xE1 assumido o valor definido na propriedade "),o(1686,"code"),e(1687,"value"),t(),e(1688,"."),t()()()(),o(1689,"tr",14)(1690,"td",15)(1691,"div",23)(1692,"span",24),e(1693," value"),l(1694,"br"),t()()(),o(1695,"td",19)(1696,"code",25),e(1697,"string "),t(),o(1698,"code",27),e(1699," number"),t()(),o(1700,"td",22)(1701,"p"),e(1702,"Valor do objeto que ser\xE1 atribu\xEDdo ao "),o(1703,"em"),e(1704,"model"),t(),e(1705,"."),t()()()(),o(1706,"h3"),e(1707,"Enums"),t(),o(1708,"h4",4)(1709,"code",5),e(1710,"PoComboFilterMode"),t()(),o(1711,"div",2)(1712,"p"),e(1713,"Define o tipo de busca usado no po-combo."),t()(),o(1714,"h4",10),e(1715,"Propriedades"),t(),o(1716,"table",11)(1717,"tr",12)(1718,"th",13),e(1719,"Nome"),t(),o(1720,"th",13),e(1721,"Descri\xE7\xE3o"),t()(),o(1722,"tr",14)(1723,"td",15)(1724,"div",23)(1725,"span",24),e(1726," startsWith"),l(1727,"br"),t()()(),o(1728,"td",22)(1729,"p"),e(1730,"Verifica se o texto "),o(1731,"em"),e(1732,"inicia"),t(),e(1733," com o valor pesquisado. Caso n\xE3o seja especificado um tipo, ser\xE1 esse o utilizado."),t()()(),o(1734,"tr",14)(1735,"td",15)(1736,"div",23)(1737,"span",24),e(1738," contains"),l(1739,"br"),t()()(),o(1740,"td",22)(1741,"p"),e(1742,"Verifica se o texto "),o(1743,"em"),e(1744,"cont\xE9m"),t(),e(1745," o valor pesquisado."),t()()(),o(1746,"tr",14)(1747,"td",15)(1748,"div",23)(1749,"span",24),e(1750," endsWith"),l(1751,"br"),t()()(),o(1752,"td",22)(1753,"p"),e(1754,"Verifica se o texto "),o(1755,"em"),e(1756,"finaliza"),t(),e(1757," com o valor pesquisado."),t()()()()())},dependencies:[w],encapsulation:2})}return a})();var et=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=8;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,p){this.route=d,this.router=p}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let p=d.view;this.activeTab=p||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(p){return new(p||a)(ue(Me),ue(Te))};static \u0275cmp=E({type:a,selectors:[["ng-component"]],standalone:!1,decls:13,vars:4,consts:[["p-title","Combo",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(p,n){p&1&&(o(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),S("p-click",function(){return n.changeTab("doc")}),l(3,"sample-po-combo-doc"),t(),o(4,"po-tab",3),S("p-click",function(){return n.changeTab("web")}),l(5,"sample-po-combo-basic-view")(6,"sample-po-combo-labs-view")(7,"sample-po-combo-scheduling-view")(8,"sample-po-combo-transfer-view")(9,"sample-po-combo-heroes-view")(10,"sample-po-combo-heroes-reactive-form-view")(11,"sample-po-combo-infinity-scroll-view")(12,"sample-po-combo-hotels-view"),t()()()),p&2&&(s("p-actions",n.actions),r(2),s("p-active",n.activeTab==="doc"),r(2),s("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[De,y,x,Be,Ie,Ge,je,Ue,Ke,Ye,Ze,$e],encapsulation:2})}return a})();var At=[{path:"",component:et}],tt=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=ae({type:a});static \u0275inj=ie({imports:[ge.forChild(At),ge]})}return a})();var on=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=ae({type:a});static \u0275inj=ie({imports:[We,tt]})}return a})();export{on as DocPoComboModule};
