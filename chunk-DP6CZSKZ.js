import{o as y,p as Z}from"./chunk-ZC2HZG7B.js";import{Ab as C,Fa as X,Ma as q,O as K,Q as U,Sa as A,Xa as J,a as O,nb as Y,v as B,zb as f}from"./chunk-TPH26USO.js";import{$c as H,Aa as S,Da as w,Fb as P,Gc as V,Hc as L,Ic as W,Jc as F,Kc as z,La as n,Ma as t,N,Na as a,Ra as D,Sa as h,U as s,V as u,Xc as G,Zc as Q,bb as R,cb as e,eb as _,gb as E,hb as b,ib as g,ja as m,ka as I,ob as M,qa as x,ra as k}from"./chunk-CBLD3XJL.js";var $=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-number-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","number","p-label","PO Number"]],template:function(r,i){r&1&&a(0,"po-number",0)},dependencies:[q],encapsulation:2})}return l})();var de=l=>({"docs-sample-code-tabs":l}),te=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-number-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Number Basic"),t(),n(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-number-basic/sample-po-number-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-number name="number" p-label="PO Number"> </po-number>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-number-basic/sample-po-number-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-number-basic',
  templateUrl: './sample-po-number-basic.component.html',
  standalone: false
})
export class SamplePoNumberBasicComponent {}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-number-basic"),t(),a(23,"hr")),r&2&&(m(5),w("po-icon "+i.sampleCodeButtonIcon),m(),_(" ",i.sampleCodeButtonLabel,""),m(),S("ngClass",M(4,de,i.hideSampleCodeTabs)))},dependencies:[P,y,f,C,$],encapsulation:2})}return l})();var ne=(()=>{class l{helperText;event;messageErrorPattern;help;icon;label;max;maxlength;min;minlength;number;placeholder;properties;size;step;iconOptions=[{value:"an an-currency-circle-dollar",label:"an an-currency-circle-dollar"},{value:"an an-currency-btc",label:"an an-currency-btc"},{value:"fa fa-calculator",label:"fa fa-calculator"}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(d){this.event=d}restore(){this.helperText="",this.number=void 0,this.max=void 0,this.maxlength=void 0,this.min=void 0,this.minlength=void 0,this.event="",this.messageErrorPattern="",this.label=void 0,this.placeholder="",this.help="",this.icon="",this.size="medium",this.step=void 0,this.properties=[]}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-number-labs"]],standalone:!1,decls:23,vars:41,consts:[["f","ngForm"],["name","PO number",1,"po-md-12",3,"ngModelChange","p-blur","p-change","p-change-model","p-keydown","ngModel","p-helper","p-clean","p-disabled","p-error-pattern","p-help","p-icon","p-label","p-max","p-maxlength","p-min","p-minlength","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-size","p-step","p-error-limit","p-label-text-wrap"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","messageErrorPattern","p-clean","","p-label","Message error pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","min","p-clean","","p-label","Min",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Minlength",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","max","p-clean","","p-label","Max",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Maxlength",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","step","p-clean","","p-label","Step",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","icon","p-clean","","p-label","Icon",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let p=D();n(0,"po-number",1),g("ngModelChange",function(o){return s(p),b(i.number,o)||(i.number=o),u(o)}),h("p-blur",function(){return s(p),u(i.changeEvent("p-blur"))})("p-change",function(){return s(p),u(i.changeEvent("p-change"))})("p-change-model",function(){return s(p),u(i.changeEvent("p-change-model"))})("p-keydown",function(){return s(p),u(i.changeEvent("p-keydown"))}),t(),a(1,"po-divider"),n(2,"div",2),a(3,"po-info",3)(4,"po-info",4),t(),a(5,"po-divider"),n(6,"form",null,0)(8,"po-input",5),g("ngModelChange",function(o){return s(p),b(i.label,o)||(i.label=o),u(o)}),t(),n(9,"po-input",6),g("ngModelChange",function(o){return s(p),b(i.help,o)||(i.help=o),u(o)}),t(),n(10,"po-input",7),g("ngModelChange",function(o){return s(p),b(i.helperText,o)||(i.helperText=o),u(o)}),t(),n(11,"po-input",8),g("ngModelChange",function(o){return s(p),b(i.placeholder,o)||(i.placeholder=o),u(o)}),t(),n(12,"po-input",9),g("ngModelChange",function(o){return s(p),b(i.messageErrorPattern,o)||(i.messageErrorPattern=o),u(o)}),t(),n(13,"po-number",10),g("ngModelChange",function(o){return s(p),b(i.min,o)||(i.min=o),u(o)}),t(),n(14,"po-number",11),g("ngModelChange",function(o){return s(p),b(i.minlength,o)||(i.minlength=o),u(o)}),t(),n(15,"po-number",12),g("ngModelChange",function(o){return s(p),b(i.max,o)||(i.max=o),u(o)}),t(),n(16,"po-number",13),g("ngModelChange",function(o){return s(p),b(i.maxlength,o)||(i.maxlength=o),u(o)}),t(),n(17,"po-number",14),g("ngModelChange",function(o){return s(p),b(i.step,o)||(i.step=o),u(o)}),t(),n(18,"po-select",15),g("ngModelChange",function(o){return s(p),b(i.icon,o)||(i.icon=o),u(o)}),t(),n(19,"po-checkbox-group",16),g("ngModelChange",function(o){return s(p),b(i.properties,o)||(i.properties=o),u(o)}),t(),n(20,"po-radio-group",17),g("ngModelChange",function(o){return s(p),b(i.size,o)||(i.size=o),u(o)}),t(),n(21,"div",2)(22,"po-button",18),h("p-click",function(){return s(p),u(i.restore())}),t()()()}r&2&&(E("ngModel",i.number),S("p-helper",i.helperText)("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-error-pattern",i.messageErrorPattern)("p-help",i.help)("p-icon",i.icon)("p-label",i.label)("p-max",i.max)("p-maxlength",i.maxlength)("p-min",i.min)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-step",i.step)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap")),m(3),S("p-value",i.number),m(),S("p-value",i.event),m(4),E("ngModel",i.label),m(),E("ngModel",i.help),m(),E("ngModel",i.helperText),m(),E("ngModel",i.placeholder),m(),E("ngModel",i.messageErrorPattern),m(),E("ngModel",i.min),m(),E("ngModel",i.minlength),m(),E("ngModel",i.max),m(),E("ngModel",i.maxlength),m(),E("ngModel",i.step),m(),E("ngModel",i.icon),S("p-options",i.iconOptions),m(),E("ngModel",i.properties),S("p-options",i.propertiesOptions),m(),E("ngModel",i.size),S("p-options",i.sizeOptions))},dependencies:[z,V,L,F,W,B,O,K,U,X,q,A,J],encapsulation:2})}return l})();var Ee=l=>({"docs-sample-code-tabs":l}),ie=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-number-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Number Labs"),t(),n(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-number-labs/sample-po-number-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-number
  class="po-md-12"
  name="PO number"
  [(ngModel)]="number"
  [p-helper]="helperText"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-error-pattern]="messageErrorPattern"
  [p-help]="help"
  [p-icon]="icon"
  [p-label]="label"
  [p-max]="max"
  [p-maxlength]="maxlength"
  [p-min]="min"
  [p-minlength]="minlength"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  [p-step]="step"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
>
</po-number>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="number"> </po-info>
  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input
    class="po-md-6"
    name="messageErrorPattern"
    [(ngModel)]="messageErrorPattern"
    p-clean
    p-label="Message error pattern"
  >
  </po-input>

  <po-number class="po-md-6 po-lg-3" name="min" [(ngModel)]="min" p-clean p-label="Min"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="minlength" [(ngModel)]="minlength" p-clean p-label="Minlength"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="max" [(ngModel)]="max" p-clean p-label="Max"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="maxlength" [(ngModel)]="maxlength" p-clean p-label="Maxlength"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="step" [(ngModel)]="step" p-clean p-label="Step"> </po-number>

  <po-select class="po-md-6 po-lg-3" name="icon" [(ngModel)]="icon" p-clean p-label="Icon" [p-options]="iconOptions">
  </po-select>

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
    name="size"
    [(ngModel)]="size"
    p-columns="4"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-number-labs/sample-po-number-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-number-labs',
  templateUrl: './sample-po-number-labs.component.html',
  standalone: false
})
export class SamplePoNumberLabsComponent implements OnInit {
  helperText: string;
  event: string;
  messageErrorPattern: string;
  help: string;
  icon: string;
  label: string;
  max: number;
  maxlength: number;
  min: number;
  minlength: number;
  number: number;
  placeholder: string;
  properties: Array<string>;
  size: string;
  step: string;

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-currency-circle-dollar', label: 'an an-currency-circle-dollar' },
    { value: 'an an-currency-btc', label: 'an an-currency-btc' },
    { value: 'fa fa-calculator', label: 'fa fa-calculator' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'required', label: 'Required' },
    { value: 'requiredFieldErrorMessage', label: 'Required Field Error Message' },
    { value: 'showRequired', label: 'Show Required' },
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

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.helperText = '';
    this.number = undefined;
    this.max = undefined;
    this.maxlength = undefined;
    this.min = undefined;
    this.minlength = undefined;
    this.event = '';
    this.messageErrorPattern = '';
    this.label = undefined;
    this.placeholder = '';
    this.help = '';
    this.icon = '';
    this.size = 'medium';
    this.step = undefined;
    this.properties = [];
  }
}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-number-labs"),t(),a(23,"hr")),r&2&&(m(5),w("po-icon "+i.sampleCodeButtonIcon),m(),_(" ",i.sampleCodeButtonLabel,""),m(),S("ngClass",M(4,Ee,i.hideSampleCodeTabs)))},dependencies:[P,y,f,C,ne],encapsulation:2})}return l})();var oe=(()=>{class l{icms;liquid;price;quantity;state;total;statesOptions=[{value:18,label:"S\xE3o Paulo"},{value:17,label:"Alagoas"},{value:15,label:"Cear\xE1"}];calculate(){let d=this.price*this.quantity;this.liquid=d,this.total=d+d*(this.state/100)}loadICMS(){this.icms=this.state}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-number-calculate"]],standalone:!1,decls:16,vars:9,consts:[["f","ngForm"],[1,"po-row"],["name","price","p-label","Price","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","quantity","p-label","Quantity","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","state","p-label","State","p-required","","p-sort","",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel","p-options"],["name","icms","p-label","ICMS %","p-disabled","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","liquid","p-label","Liquid","p-disabled","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","total","p-label","Total","p-disabled","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["p-label","Calculate",1,"po-md-3",3,"p-click","p-disabled"],["p-label","Clean",1,"po-md-3",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let p=D();n(0,"h3"),e(1,"Calculate Tax"),t(),a(2,"po-divider"),n(3,"form",null,0)(5,"div",1)(6,"po-number",2),g("ngModelChange",function(o){return s(p),b(i.price,o)||(i.price=o),u(o)}),t(),n(7,"po-number",3),g("ngModelChange",function(o){return s(p),b(i.quantity,o)||(i.quantity=o),u(o)}),t()(),n(8,"div")(9,"po-select",4),g("ngModelChange",function(o){return s(p),b(i.state,o)||(i.state=o),u(o)}),h("p-change",function(){return s(p),u(i.loadICMS())}),t(),n(10,"po-number",5),g("ngModelChange",function(o){return s(p),b(i.icms,o)||(i.icms=o),u(o)}),t(),n(11,"po-number",6),g("ngModelChange",function(o){return s(p),b(i.liquid,o)||(i.liquid=o),u(o)}),t(),n(12,"po-number",7),g("ngModelChange",function(o){return s(p),b(i.total,o)||(i.total=o),u(o)}),t()(),n(13,"div",1)(14,"po-button",8),h("p-click",function(){return s(p),u(i.calculate())}),t(),n(15,"po-button",9),h("p-click",function(){s(p);let o=R(4);return u(o.reset())}),t()()()}if(r&2){let p=R(4);m(6),E("ngModel",i.price),m(),E("ngModel",i.quantity),m(2),E("ngModel",i.state),S("p-options",i.statesOptions),m(),E("ngModel",i.icms),m(),E("ngModel",i.liquid),m(),E("ngModel",i.total),m(2),S("p-disabled",p.invalid),m(),S("p-disabled",p.invalid)}},dependencies:[z,V,L,F,W,B,O,q,A],encapsulation:2})}return l})();var Se=l=>({"docs-sample-code-tabs":l}),ae=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-number-calculate-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Number - Calculate"),t(),n(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-number-calculate/sample-po-number-calculate.component.html"),t(),n(13,"pre",7),e(14,`<h3>Calculate Tax</h3>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-number class="po-md-6" name="price" [(ngModel)]="price" p-label="Price" p-required> </po-number>

    <po-number class="po-md-6" name="quantity" [(ngModel)]="quantity" p-label="Quantity" p-required> </po-number>
  </div>

  <div>
    <po-select
      class="po-md-6 po-lg-3"
      name="state"
      [(ngModel)]="state"
      p-label="State"
      p-required
      p-sort
      [p-options]="statesOptions"
      (p-change)="loadICMS()"
    >
    </po-select>

    <po-number class="po-md-6 po-lg-3" name="icms" [(ngModel)]="icms" p-label="ICMS %" p-disabled> </po-number>

    <po-number class="po-md-6 po-lg-3" name="liquid" [(ngModel)]="liquid" p-label="Liquid" p-disabled> </po-number>

    <po-number class="po-md-6 po-lg-3" name="total" [(ngModel)]="total" p-label="Total" p-disabled> </po-number>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Calculate" [p-disabled]="f.invalid" (p-click)="calculate()"> </po-button>

    <po-button class="po-md-3" p-label="Clean" [p-disabled]="f.invalid" (p-click)="f.reset()"> </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-number-calculate/sample-po-number-calculate.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-number-calculate',
  templateUrl: './sample-po-number-calculate.component.html',
  standalone: false
})
export class SamplePoNumberCalculateComponent {
  icms: number;
  liquid: number;
  price: number;
  quantity: number;
  state: number;
  total: number;

  public readonly statesOptions: Array<PoSelectOption> = [
    { value: 18, label: 'S\xE3o Paulo' },
    { value: 17, label: 'Alagoas' },
    { value: 15, label: 'Cear\xE1' }
  ];

  calculate() {
    const realPrice = this.price * this.quantity;
    this.liquid = realPrice;
    this.total = realPrice + realPrice * (this.state / 100);
  }

  loadICMS() {
    this.icms = this.state;
  }
}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-number-calculate"),t(),a(23,"hr")),r&2&&(m(5),w("po-icon "+i.sampleCodeButtonIcon),m(),_(" ",i.sampleCodeButtonLabel,""),m(),S("ngClass",M(4,Se,i.hideSampleCodeTabs)))},dependencies:[P,y,f,C,oe],encapsulation:2})}return l})();var le=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-number-doc"]],standalone:!1,decls:1307,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoNumberComponent"),t()(),n(21,"div",2)(22,"p"),e(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),t(),n(24,"p"),e(25,"Importante:"),t(),n(26,"ul")(27,"li"),e(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),t()(),n(29,"h4"),e(30,"Tokens customiz\xE1veis"),t(),n(31,"p"),e(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),a(33,"br"),e(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),n(35,"code"),e(36,".po-input"),t()(),n(37,"blockquote")(38,"p"),e(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),n(40,"a",6),e(41,"Grid System"),t(),e(42,"."),t()(),n(43,"blockquote")(44,"p"),e(45,"Para maiores informa\xE7\xF5es, acesse o guia "),n(46,"a",7),e(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(48,"."),t()(),n(49,"table")(50,"thead")(51,"tr")(52,"th"),e(53,"Propriedade"),t(),n(54,"th"),e(55,"Descri\xE7\xE3o"),t(),n(56,"th"),e(57,"Valor Padr\xE3o"),t()()(),n(58,"tbody")(59,"tr")(60,"td")(61,"strong"),e(62,"Default Values"),t()(),a(63,"td")(64,"td"),t(),n(65,"tr")(66,"td")(67,"code"),e(68,"--font-family"),t()(),n(69,"td"),e(70,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(71,"td")(72,"code"),e(73,"var(--font-family-theme)"),t()()(),n(74,"tr")(75,"td")(76,"code"),e(77,"--font-size"),t()(),n(78,"td"),e(79,"Tamanho da fonte"),t(),n(80,"td")(81,"code"),e(82,"var(--font-size-default)"),t()()(),n(83,"tr")(84,"td")(85,"code"),e(86,"--text-color-placeholder"),t()(),n(87,"td"),e(88,"Cor do texto placeholder"),t(),n(89,"td")(90,"code"),e(91,"var(--color-neutral-light-30)"),t()()(),n(92,"tr")(93,"td")(94,"code"),e(95,"--color"),t()(),n(96,"td"),e(97,"Cor pincipal do input"),t(),n(98,"td")(99,"code"),e(100,"var(--color-neutral-dark-70)"),t()()(),n(101,"tr")(102,"td")(103,"code"),e(104,"--background"),t()(),n(105,"td"),e(106,"Cor de background"),t(),n(107,"td")(108,"code"),e(109,"var(--color-neutral-light-05)"),t()()(),n(110,"tr")(111,"td")(112,"code"),e(113,"--padding"),t()(),n(114,"td"),e(115,"Preenchimento"),t(),n(116,"td")(117,"code"),e(118,"0 0.5rem"),t()()(),n(119,"tr")(120,"td")(121,"code"),e(122,"--text-color"),t()(),n(123,"td"),e(124,"Cor do texto"),t(),n(125,"td")(126,"code"),e(127,"var(--color-neutral-dark-90)"),t()()(),n(128,"tr")(129,"td")(130,"strong"),e(131,"Hover"),t()(),a(132,"td")(133,"td"),t(),n(134,"tr")(135,"td")(136,"code"),e(137,"--color-hover"),t()(),n(138,"td"),e(139,"Cor principal no estado hover"),t(),n(140,"td")(141,"code"),e(142,"var(--color-brand-01-dark)"),t()()(),n(143,"tr")(144,"td")(145,"code"),e(146,"--background-hover"),t()(),n(147,"td"),e(148,"Cor de background no estado hover"),t(),n(149,"td")(150,"code"),e(151,"var(--color-brand-01-lightest)"),t()()(),n(152,"tr")(153,"td")(154,"strong"),e(155,"Focused"),t()(),a(156,"td")(157,"td"),t(),n(158,"tr")(159,"td")(160,"code"),e(161,"--color-focused"),t()(),n(162,"td"),e(163,"Cor principal no estado de focus"),t(),n(164,"td")(165,"code"),e(166,"var(--color-action-default)"),t()()(),n(167,"tr")(168,"td")(169,"code"),e(170,"--outline-color-focused"),t()(),n(171,"td"),e(172,"Cor do outline do estado de focus"),t(),n(173,"td")(174,"code"),e(175,"var(--color-action-focus)"),t()()(),n(176,"tr")(177,"td")(178,"strong"),e(179,"Disabled"),t()(),a(180,"td")(181,"td"),t(),n(182,"tr")(183,"td")(184,"code"),e(185,"--color-disabled"),t()(),n(186,"td"),e(187,"Cor principal no estado disabled"),t(),n(188,"td")(189,"code"),e(190,"var(--color-neutral-light-30)"),t()()(),n(191,"tr")(192,"td")(193,"code"),e(194,"--background-disabled"),t()(),n(195,"td"),e(196,"Cor de background no estado disabled"),t(),n(197,"td")(198,"code"),e(199,"var(--color-neutral-light-20)"),t()()(),n(200,"tr")(201,"td")(202,"code"),e(203,"--text-color-disabled"),t()(),n(204,"td"),e(205,"Cor do texto no estado disabled"),t(),n(206,"td")(207,"code"),e(208,"var(--color-neutral-dark-70)"),t()()()()(),n(209,"p"),a(210,"br"),e(211," O "),n(212,"code"),e(213,"po-number"),t(),e(214,` \xE9 um input espec\xEDfico para receber apenas n\xFAmeros.
\xC9 poss\xEDvel configurar um valor m\xEDnimo, m\xE1ximo e um step com p-min, p-max e p-step,
respectivamente.`),t()(),n(215,"div",8)(216,"h4",9),e(217,"Seletor"),t(),n(218,"pre",10),e(219,`<po-number
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-clean="boolean"
    p-disabled="boolean"
    p-emit-all-changes="boolean"
    (p-enter)="EventEmitter"
    p-error-async-properties="ErrorAsyncProperties"
    p-error-limit="boolean"
    p-error-pattern="string"
    p-help="string"
    p-icon="string | TemplateRef<void>"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-mask="string"
    p-mask-format-model="boolean"
    p-mask-no-length-validation="boolean"
    p-max="number"
    p-maxlength="number"
    p-min="number"
    p-minlength="number"
    name="string"
    p-no-autocomplete="boolean"
    p-optional="boolean"
    p-pattern="string"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-readonly="boolean"
    p-required="boolean"
    p-required-field-error-message="boolean"
    p-show-required="boolean"
    p-size="string"
    p-step="string"
    p-upper-case="boolean" >
</po-number>
`),t()(),n(220,"h4",11),e(221,"Propriedades"),t(),n(222,"table",12)(223,"tr",13)(224,"th",14),e(225,"Nome"),t(),n(226,"th",14),e(227,"Tipo"),t(),n(228,"th",14),e(229,"Padr\xE3o"),t(),n(230,"th",14),e(231,"Descri\xE7\xE3o"),t()(),n(232,"tr",15)(233,"td",16)(234,"div",17)(235,"span",18),e(236," (p-additional-help)"),a(237,"br"),t()(),n(238,"div",19),e(239,"Deprecated"),t()(),n(240,"td",20)(241,"code",21),e(242,"EventEmitter"),t()(),n(243,"td",22),e(244,"-"),t(),n(245,"td",23)(246,"em")(247,"strong"),e(248,"(opcional)"),t()(),n(249,"p"),e(250,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),t(),n(251,"blockquote")(252,"p"),e(253,"Essa propriedade est\xE1 "),n(254,"strong"),e(255,"depreciada"),t(),e(256," e ser\xE1 removida na vers\xE3o "),n(257,"code"),e(258,"23.x.x"),t(),e(259,". Recomendamos utilizar a propriedade "),n(260,"code"),e(261,"p-helper"),t(),e(262," que oferece mais recursos e flexibilidade."),t()()()(),n(263,"tr",15)(264,"td",16)(265,"div",24)(266,"span",25),e(267," p-additional-help-tooltip"),a(268,"br"),t()(),n(269,"div",19),e(270,"Deprecated"),t()(),n(271,"td",20)(272,"code",26),e(273,"string"),t()(),n(274,"td",22),e(275,"-"),t(),n(276,"td",23)(277,"em")(278,"strong"),e(279,"(opcional)"),t()(),n(280,"p"),e(281,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),n(282,"code"),e(283,"po-helper"),t(),e(284,`.
`),n(285,"strong"),e(286,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(287,"blockquote")(288,"p"),e(289,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),n(290,"blockquote")(291,"p"),e(292,"Essa propriedade est\xE1 "),n(293,"strong"),e(294,"depreciada"),t(),e(295," e ser\xE1 removida na vers\xE3o "),n(296,"code"),e(297,"23.x.x"),t(),e(298,". Recomendamos utilizar a propriedade "),n(299,"code"),e(300,"p-helper"),t(),e(301," que oferece mais recursos e flexibilidade."),t()()()(),n(302,"tr",15)(303,"td",16)(304,"div",24)(305,"span",25),e(306," p-append-in-body"),a(307,"br"),t()()(),n(308,"td",20)(309,"code",27),e(310,"boolean"),t()(),n(311,"td",22)(312,"p")(313,"code"),e(314,"false"),t()()(),n(315,"td",23)(316,"em")(317,"strong"),e(318,"(opcional)"),t()(),n(319,"p"),e(320,"Define que o popover ("),n(321,"code"),e(322,"p-helper"),t(),e(323," e/ou "),n(324,"code"),e(325,"p-error-limit"),t(),e(326,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),n(327,"blockquote")(328,"p"),e(329,"Quando utilizado com "),n(330,"code"),e(331,"p-helper"),t(),e(332,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),t()()()(),n(333,"tr",15)(334,"td",16)(335,"div",24)(336,"span",25),e(337," p-auto-focus"),a(338,"br"),t()()(),n(339,"td",20)(340,"code",27),e(341,"boolean"),t()(),n(342,"td",22)(343,"p")(344,"code"),e(345,"false"),t()()(),n(346,"td",23)(347,"em")(348,"strong"),e(349,"(opcional)"),t()(),n(350,"p"),e(351,"Aplica foco no elemento ao ser iniciado."),t(),n(352,"blockquote")(353,"p"),e(354,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(355,"tr",15)(356,"td",16)(357,"div",17)(358,"span",18),e(359," (p-blur)"),a(360,"br"),t()()(),n(361,"td",20)(362,"code",21),e(363,"EventEmitter"),t()(),n(364,"td",22),e(365,"-"),t(),n(366,"td",23)(367,"em")(368,"strong"),e(369,"(opcional)"),t()(),n(370,"p"),e(371,"Evento disparado ao sair do campo."),t()()(),n(372,"tr",15)(373,"td",16)(374,"div",17)(375,"span",18),e(376," (p-change)"),a(377,"br"),t()()(),n(378,"td",20)(379,"code",21),e(380,"EventEmitter"),t()(),n(381,"td",22),e(382,"-"),t(),n(383,"td",23)(384,"em")(385,"strong"),e(386,"(opcional)"),t()(),n(387,"p"),e(388,"Evento disparado ao alterar valor e deixar o campo."),t()()(),n(389,"tr",15)(390,"td",16)(391,"div",17)(392,"span",18),e(393," (p-change-model)"),a(394,"br"),t()()(),n(395,"td",20)(396,"code",21),e(397,"EventEmitter"),t()(),n(398,"td",22),e(399,"-"),t(),n(400,"td",23)(401,"em")(402,"strong"),e(403,"(opcional)"),t()(),n(404,"p"),e(405,"Evento disparado ao alterar valor do model."),t()()(),n(406,"tr",15)(407,"td",16)(408,"div",24)(409,"span",25),e(410,"p-clean"),a(411,"br"),t()()(),n(412,"td",20)(413,"code",27),e(414,"boolean"),t()(),n(415,"td",22),e(416,"-"),t(),n(417,"td",23)(418,"em")(419,"strong"),e(420,"(opcional)"),t()(),n(421,"p"),e(422,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t()()(),n(423,"tr",15)(424,"td",16)(425,"div",24)(426,"span",25),e(427,"p-disabled"),a(428,"br"),t()()(),n(429,"td",20)(430,"code",27),e(431,"boolean"),t()(),n(432,"td",22)(433,"p")(434,"code"),e(435,"false"),t()()(),n(436,"td",23)(437,"em")(438,"strong"),e(439,"(opcional)"),t()(),n(440,"p"),e(441,"Se verdadeiro, desabilita o campo."),t()()(),n(442,"tr",15)(443,"td",16)(444,"div",24)(445,"span",25),e(446," p-emit-all-changes"),a(447,"br"),t()()(),n(448,"td",20)(449,"code",27),e(450,"boolean"),t()(),n(451,"td",22)(452,"p")(453,"code"),e(454,"false"),t()()(),n(455,"td",23)(456,"em")(457,"strong"),e(458,"(opcional)"),t()(),n(459,"p"),e(460,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),t()()(),n(461,"tr",15)(462,"td",16)(463,"div",17)(464,"span",18),e(465," (p-enter)"),a(466,"br"),t()()(),n(467,"td",20)(468,"code",21),e(469,"EventEmitter"),t()(),n(470,"td",22),e(471,"-"),t(),n(472,"td",23)(473,"em")(474,"strong"),e(475,"(opcional)"),t()(),n(476,"p"),e(477,"Evento disparado ao entrar do campo."),t()()(),n(478,"tr",15)(479,"td",16)(480,"div",24)(481,"span",25),e(482," p-error-async-properties"),a(483,"br"),t()()(),n(484,"td",20)(485,"code",28),e(486,"ErrorAsyncProperties"),t()(),n(487,"td",22),e(488,"-"),t(),n(489,"td",23)(490,"em")(491,"strong"),e(492,"(opcional)"),t()(),n(493,"p"),e(494,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),n(495,"code"),e(496,"Reactive Forms"),t(),e(497,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),n(498,"code"),e(499,"asyncValidators"),t(),e(500,"."),t()()(),n(501,"tr",15)(502,"td",16)(503,"div",24)(504,"span",25),e(505," p-error-limit"),a(506,"br"),t()()(),n(507,"td",20)(508,"code",27),e(509,"boolean"),t()(),n(510,"td",22)(511,"p")(512,"code"),e(513,"false"),t()()(),n(514,"td",23)(515,"em")(516,"strong"),e(517,"(opcional)"),t()(),n(518,"p"),e(519,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(520,"blockquote")(521,"p"),e(522,"Caso essa propriedade seja definida como "),n(523,"code"),e(524,"true"),t(),e(525,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),n(526,"tr",15)(527,"td",16)(528,"div",24)(529,"span",25),e(530," p-error-pattern"),a(531,"br"),t()()(),n(532,"td",20)(533,"code",26),e(534,"string"),t()(),n(535,"td",22),e(536,"-"),t(),n(537,"td",23)(538,"em")(539,"strong"),e(540,"(opcional)"),t()(),n(541,"p"),e(542,"Mensagem que ser\xE1 apresentada quando o "),n(543,"code"),e(544,"pattern"),t(),e(545," ou a m\xE1scara n\xE3o for satisfeita."),t(),n(546,"blockquote")(547,"p"),e(548,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),n(549,"code"),e(550,"p-required-field-error-message"),t(),e(551," em conjunto."),t()()()(),n(552,"tr",15)(553,"td",16)(554,"div",24)(555,"span",25),e(556," p-help"),a(557,"br"),t()()(),n(558,"td",20)(559,"code",26),e(560,"string"),t()(),n(561,"td",22),e(562,"-"),t(),n(563,"td",23)(564,"em")(565,"strong"),e(566,"(opcional)"),t()(),n(567,"p"),e(568,"Texto de apoio do campo."),t()()(),n(569,"tr",15)(570,"td",16)(571,"div",24)(572,"span",25),e(573," p-icon"),a(574,"br"),t()()(),n(575,"td",20)(576,"code",26),e(577,"string "),t(),n(578,"code",29),e(579," TemplateRef<void>"),t()(),n(580,"td",22),e(581,"-"),t(),n(582,"td",23)(583,"em")(584,"strong"),e(585,"(opcional)"),t()(),n(586,"p"),e(587,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),n(588,"p"),e(589,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(590,"a",30),e(591,"Biblioteca de \xEDcones"),t(),e(592,". conforme exemplo abaixo:"),t(),n(593,"pre")(594,"code"),e(595,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),t()(),n(596,"p"),e(597,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),n(598,"em"),e(599,"Font Awesome"),t(),e(600,", da seguinte forma:"),t(),n(601,"pre")(602,"code"),e(603,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),t()(),n(604,"p"),e(605,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(606,"code"),e(607,"TemplateRef"),t(),e(608,", conforme exemplo abaixo:"),t(),n(609,"pre")(610,"code"),e(611,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),t()(),n(612,"blockquote")(613,"p"),e(614,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),n(615,"code"),e(616,"font-size: inherit"),t(),e(617," caso o \xEDcone utilizado n\xE3o aplique-o."),t()()()(),n(618,"tr",15)(619,"td",16)(620,"div",17)(621,"span",18),e(622," (p-keydown)"),a(623,"br"),t()()(),n(624,"td",20)(625,"code",21),e(626,"EventEmitter"),t()(),n(627,"td",22),e(628,"-"),t(),n(629,"td",23)(630,"em")(631,"strong"),e(632,"(opcional)"),t()(),n(633,"p"),e(634,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(635,"code"),e(636,"KeyboardEvent"),t(),e(637," com informa\xE7\xF5es sobre a tecla."),t()()(),n(638,"tr",15)(639,"td",16)(640,"div",24)(641,"span",25),e(642," p-label"),a(643,"br"),t()()(),n(644,"td",20)(645,"code",26),e(646,"string"),t()(),n(647,"td",22),e(648,"-"),t(),n(649,"td",23)(650,"em")(651,"strong"),e(652,"(opcional)"),t()(),n(653,"p"),e(654,"R\xF3tulo do campo."),t()()(),n(655,"tr",15)(656,"td",16)(657,"div",24)(658,"span",25),e(659," p-label-text-wrap"),a(660,"br"),t()()(),n(661,"td",20)(662,"code",27),e(663,"boolean"),t()(),n(664,"td",22)(665,"p")(666,"code"),e(667,"false"),t()()(),n(668,"td",23)(669,"em")(670,"strong"),e(671,"(opcional)"),t()(),n(672,"p"),e(673,"Habilita a quebra autom\xE1tica do texto da propriedade "),n(674,"code"),e(675,"p-label"),t(),e(676,". Quando "),n(677,"code"),e(678,"p-label-text-wrap"),t(),e(679,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),n(680,"tr",15)(681,"td",16)(682,"div",24)(683,"span",25),e(684,"p-mask"),a(685,"br"),t()()(),n(686,"td",20)(687,"code",26),e(688,"string"),t()(),n(689,"td",22),e(690,"-"),t(),n(691,"td",23)(692,"em")(693,"strong"),e(694,"(opcional)"),t()(),n(695,"p"),e(696,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),t()()(),n(697,"tr",15)(698,"td",16)(699,"div",24)(700,"span",25),e(701,"p-mask-format-model"),a(702,"br"),t()()(),n(703,"td",20)(704,"code",27),e(705,"boolean"),t()(),n(706,"td",22)(707,"p")(708,"code"),e(709,"false"),t()()(),n(710,"td",23)(711,"em")(712,"strong"),e(713,"(opcional)"),t()(),n(714,"p"),e(715,"Indica se o "),n(716,"code"),e(717,"model"),t(),e(718," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),t()()(),n(719,"tr",15)(720,"td",16)(721,"div",24)(722,"span",25),e(723," p-mask-no-length-validation"),a(724,"br"),t()()(),n(725,"td",20)(726,"code",27),e(727,"boolean"),t()(),n(728,"td",22)(729,"p")(730,"code"),e(731,"false"),t()()(),n(732,"td",23)(733,"p"),e(734,"Define se os caracteres especiais da m\xE1scara devem ser ignorados ao validar os comprimentos m\xEDnimo ("),n(735,"code"),e(736,"minLength"),t(),e(737,") e m\xE1ximo ("),n(738,"code"),e(739,"maxLength"),t(),e(740,") do campo."),t(),n(741,"ul")(742,"li"),e(743,"Quando "),n(744,"code"),e(745,"true"),t(),e(746,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),t(),n(747,"li"),e(748,"Quando "),n(749,"code"),e(750,"false"),t(),e(751,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),t()(),n(752,"blockquote")(753,"p"),e(754,"Ser\xE1 ignorado essa propriedade , caso esteja utilizando junto com a propriedade "),n(755,"code"),e(756,"p-mask-format-model"),t(),e(757,"."),t()(),n(758,"p"),e(759,"Exemplo:"),t(),n(760,"pre")(761,"code"),e(762,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),t()(),n(763,"ul")(764,"li"),e(765,"Entrada: "),n(766,"code"),e(767,"123-456"),t(),e(768," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),n(769,"code"),e(770,"-"),t(),e(771,"."),t()()()(),n(772,"tr",15)(773,"td",16)(774,"div",24)(775,"span",25),e(776,"p-max"),a(777,"br"),t()()(),n(778,"td",20)(779,"code",31),e(780,"number"),t()(),n(781,"td",22),e(782,"-"),t(),n(783,"td",23)(784,"em")(785,"strong"),e(786,"(opcional)"),t()(),n(787,"p"),e(788,"Valor m\xE1ximo."),t(),n(789,"blockquote")(790,"p"),e(791,"Quando o valor m\xE1ximo for um n\xFAmero com decimais aconselha-se utilizar junto da propriedade "),n(792,"code"),e(793,"p-step"),t(),e(794," tamb\xE9m passando a ela um valor decimal."),t()()()(),n(795,"tr",15)(796,"td",16)(797,"div",24)(798,"span",25),e(799," p-maxlength"),a(800,"br"),t()()(),n(801,"td",20)(802,"code",31),e(803,"number"),t()(),n(804,"td",22),e(805,"-"),t(),n(806,"td",23)(807,"em")(808,"strong"),e(809,"(opcional)"),t()(),n(810,"p"),e(811,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),t()()(),n(812,"tr",15)(813,"td",16)(814,"div",24)(815,"span",25),e(816,"p-min"),a(817,"br"),t()()(),n(818,"td",20)(819,"code",31),e(820,"number"),t()(),n(821,"td",22),e(822,"-"),t(),n(823,"td",23)(824,"em")(825,"strong"),e(826,"(opcional)"),t()(),n(827,"p"),e(828,"Valor m\xEDnimo."),t(),n(829,"blockquote")(830,"p"),e(831,"Quando o valor m\xEDnimo for um n\xFAmero com decimais aconselha-se utilizar junto da propriedade "),n(832,"code"),e(833,"p-step"),t(),e(834," tamb\xE9m passando a ela um valor decimal."),t()()()(),n(835,"tr",15)(836,"td",16)(837,"div",24)(838,"span",25),e(839," p-minlength"),a(840,"br"),t()()(),n(841,"td",20)(842,"code",31),e(843,"number"),t()(),n(844,"td",22),e(845,"-"),t(),n(846,"td",23)(847,"em")(848,"strong"),e(849,"(opcional)"),t()(),n(850,"p"),e(851,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),t()()(),n(852,"tr",15)(853,"td",16)(854,"div",24)(855,"span",25),e(856," name"),a(857,"br"),t()()(),n(858,"td",20)(859,"code",26),e(860,"string"),t()(),n(861,"td",22),e(862,"-"),t(),n(863,"td",23)(864,"p"),e(865,"Nome e identificador do campo."),t()()(),n(866,"tr",15)(867,"td",16)(868,"div",24)(869,"span",25),e(870," p-no-autocomplete"),a(871,"br"),t()()(),n(872,"td",20)(873,"code",27),e(874,"boolean"),t()(),n(875,"td",22)(876,"p")(877,"code"),e(878,"false"),t()()(),n(879,"td",23)(880,"em")(881,"strong"),e(882,"(opcional)"),t()(),n(883,"p"),e(884,"Define a propriedade nativa "),n(885,"code"),e(886,"autocomplete"),t(),e(887," do campo como "),n(888,"code"),e(889,"off"),t(),e(890,"."),t(),n(891,"blockquote")(892,"p"),e(893,"No componente "),n(894,"code"),e(895,"po-password"),t(),e(896," ser\xE1 definido como "),n(897,"code"),e(898,"new-password"),t(),e(899,"."),t()(),n(900,"p"),e(901,"Nos componentes "),n(902,"code"),e(903,"po-password"),t(),e(904," e "),n(905,"code"),e(906,"po-login"),t(),e(907," o valor padr\xE3o ser\xE1 "),n(908,"code"),e(909,"true"),t(),e(910,"."),t()()(),n(911,"tr",15)(912,"td",16)(913,"div",24)(914,"span",25),e(915," p-optional"),a(916,"br"),t()()(),n(917,"td",20)(918,"code",27),e(919,"boolean"),t()(),n(920,"td",22)(921,"p")(922,"code"),e(923,"false"),t()()(),n(924,"td",23)(925,"em")(926,"strong"),e(927,"(opcional)"),t()(),n(928,"p"),e(929,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(930,"blockquote")(931,"p"),e(932,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(933,"ul")(934,"li"),e(935,"O campo conter "),n(936,"code"),e(937,"p-required"),t(),e(938,";"),t(),n(939,"li"),e(940,"N\xE3o possuir "),n(941,"code"),e(942,"p-help"),t(),e(943," e/ou "),n(944,"code"),e(945,"p-label"),t(),e(946,"."),t()()()(),n(947,"tr",15)(948,"td",16)(949,"div",24)(950,"span",25),e(951,"p-pattern"),a(952,"br"),t()()(),n(953,"td",20)(954,"code",26),e(955,"string"),t()(),n(956,"td",22),e(957,"-"),t(),n(958,"td",23)(959,"em")(960,"strong"),e(961,"(opcional)"),t()(),n(962,"p"),e(963,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),n(964,"code"),e(965,"(p-mask)"),t(),e(966,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),t()()(),n(967,"tr",15)(968,"td",16)(969,"div",24)(970,"span",25),e(971," p-placeholder"),a(972,"br"),t()()(),n(973,"td",20)(974,"code",26),e(975,"string"),t()(),n(976,"td",22)(977,"p"),e(978,"''"),t()(),n(979,"td",23)(980,"em")(981,"strong"),e(982,"(opcional)"),t()(),n(983,"p"),e(984,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(985,"tr",15)(986,"td",16)(987,"div",24)(988,"span",25),e(989," p-helper"),a(990,"br"),t()()(),n(991,"td",20)(992,"code",32),e(993,"PoHelperOptions "),t(),n(994,"code",26),e(995," string"),t()(),n(996,"td",22),e(997,"-"),t(),n(998,"td",23)(999,"em")(1e3,"strong"),e(1001,"(opcional)"),t()(),n(1002,"p"),e(1003,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),n(1004,"code"),e(1005,"p-label"),t(),e(1006," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),n(1007,"code"),e(1008,"p-label"),t(),e(1009,"."),t(),n(1010,"blockquote")(1011,"p"),e(1012,"Para mais informa\xE7\xF5es acesse: "),n(1013,"a",33),e(1014,"https://po-ui.io/documentation/po-helper"),t(),e(1015,"."),t()(),n(1016,"blockquote")(1017,"p"),e(1018,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),n(1019,"code"),e(1020,"p-additional-help-tooltip"),t(),e(1021," e "),n(1022,"code"),e(1023,"p-additional-help"),t(),e(1024,") ser\xE1 ignorado."),t()()()(),n(1025,"tr",15)(1026,"td",16)(1027,"div",24)(1028,"span",25),e(1029,"p-readonly"),a(1030,"br"),t()()(),n(1031,"td",20)(1032,"code",27),e(1033,"boolean"),t()(),n(1034,"td",22),e(1035,"-"),t(),n(1036,"td",23)(1037,"em")(1038,"strong"),e(1039,"(opcional)"),t()(),n(1040,"p"),e(1041,"Indica que o campo ser\xE1 somente leitura."),t()()(),n(1042,"tr",15)(1043,"td",16)(1044,"div",24)(1045,"span",25),e(1046,"p-required"),a(1047,"br"),t()()(),n(1048,"td",20)(1049,"code",27),e(1050,"boolean"),t()(),n(1051,"td",22)(1052,"p")(1053,"code"),e(1054,"false"),t()()(),n(1055,"td",23)(1056,"em")(1057,"strong"),e(1058,"(opcional)"),t()(),n(1059,"p"),e(1060,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),n(1061,"blockquote")(1062,"p"),e(1063,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),n(1064,"code"),e(1065,"(p-disabled)"),t(),e(1066,"."),t()()()(),n(1067,"tr",15)(1068,"td",16)(1069,"div",24)(1070,"span",25),e(1071," p-required-field-error-message"),a(1072,"br"),t()()(),n(1073,"td",20)(1074,"code",27),e(1075,"boolean"),t()(),n(1076,"td",22)(1077,"p")(1078,"code"),e(1079,"false"),t()()(),n(1080,"td",23)(1081,"em")(1082,"strong"),e(1083,"(opcional)"),t()(),n(1084,"p"),e(1085,"Exibe a mensagem setada na propriedade "),n(1086,"code"),e(1087,"p-error-pattern"),t(),e(1088," se o campo estiver vazio e for requerido."),t(),n(1089,"blockquote")(1090,"p"),e(1091,"Necess\xE1rio que a propriedade "),n(1092,"code"),e(1093,"p-required"),t(),e(1094," esteja habilitada."),t()()()(),n(1095,"tr",15)(1096,"td",16)(1097,"div",24)(1098,"span",25),e(1099," p-show-required"),a(1100,"br"),t()()(),n(1101,"td",20)(1102,"code",27),e(1103,"boolean"),t()(),n(1104,"td",22),e(1105,"-"),t(),n(1106,"td",23)(1107,"p"),e(1108,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(1109,"blockquote")(1110,"p"),e(1111,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(1112,"ul")(1113,"li"),e(1114,"N\xE3o possuir "),n(1115,"code"),e(1116,"p-help"),t(),e(1117," e/ou "),n(1118,"code"),e(1119,"p-label"),t(),e(1120,"."),t()()()(),n(1121,"tr",15)(1122,"td",16)(1123,"div",24)(1124,"span",25),e(1125," p-size"),a(1126,"br"),t()()(),n(1127,"td",20)(1128,"code",26),e(1129,"string"),t()(),n(1130,"td",22)(1131,"p")(1132,"code"),e(1133,"medium"),t()()(),n(1134,"td",23)(1135,"em")(1136,"strong"),e(1137,"(opcional)"),t()(),n(1138,"p"),e(1139,"Define o tamanho do componente:"),t(),n(1140,"ul")(1141,"li")(1142,"code"),e(1143,"small"),t(),e(1144,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(1145,"li")(1146,"code"),e(1147,"medium"),t(),e(1148,": altura do input como 44px."),t()(),n(1149,"blockquote")(1150,"p"),e(1151,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(1152,"code"),e(1153,"medium"),t(),e(1154,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(1155,"a",34),e(1156,"po-theme"),t(),e(1157,"."),t()()()(),n(1158,"tr",15)(1159,"td",16)(1160,"div",24)(1161,"span",25),e(1162," p-step"),a(1163,"br"),t()()(),n(1164,"td",20)(1165,"code",26),e(1166,"string"),t()(),n(1167,"td",22)(1168,"p"),e(1169,"1"),t()(),n(1170,"td",23)(1171,"em")(1172,"strong"),e(1173,"(opcional)"),t()(),n(1174,"p"),e(1175,"Intervalo."),t()()(),n(1176,"tr",15)(1177,"td",16)(1178,"div",24)(1179,"span",25),e(1180," p-upper-case"),a(1181,"br"),t()()(),n(1182,"td",20)(1183,"code",27),e(1184,"boolean"),t()(),n(1185,"td",22),e(1186,"-"),t(),n(1187,"td",23)(1188,"p"),e(1189,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),t()()()(),n(1190,"h3",11),e(1191,"M\xE9todos"),t(),n(1192,"table",35)(1193,"tr",15)(1194,"th",36)(1195,"div",24)(1196,"h4")(1197,"span",25),e(1198," showAdditionalHelp "),t()()()()(),n(1199,"tr",23)(1200,"td",23)(1201,"p"),e(1202,"M\xE9todo que exibe "),n(1203,"code"),e(1204,"p-helper"),t(),e(1205," ou executa a a\xE7\xE3o definida em "),n(1206,"code"),e(1207,"p-helper{eventOnClick}"),t(),e(1208," ou em "),n(1209,"code"),e(1210,"p-additionalHelp"),t(),e(1211,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),n(1212,"code"),e(1213,"p-keydown"),t(),e(1214,"."),t(),n(1215,"blockquote")(1216,"p"),e(1217,"Exibe ou oculta o conte\xFAdo do componente "),n(1218,"code"),e(1219,"po-helper"),t(),e(1220," quando o componente estiver com foco."),t()(),n(1221,"pre")(1222,"code"),e(1223,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),t()(),n(1224,"pre")(1225,"code"),e(1226,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),a(1227,"br"),n(1228,"table",35)(1229,"tr",15)(1230,"th",36)(1231,"div",24)(1232,"h4")(1233,"span",25),e(1234," focus "),t()()()()(),n(1235,"tr",23)(1236,"td",23)(1237,"p"),e(1238,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(1239,"p"),e(1240,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(1241,"pre")(1242,"code"),e(1243,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),t()()()()(),a(1244,"br"),n(1245,"h3"),e(1246,"Interfaces"),t(),n(1247,"h4",37)(1248,"code",5),e(1249,"ErrorAsyncProperties"),t()(),n(1250,"div",2)(1251,"p"),e(1252,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),t()(),n(1253,"h4",11),e(1254,"Propriedades"),t(),n(1255,"table",12)(1256,"tr",13)(1257,"th",14),e(1258,"Nome"),t(),n(1259,"th",14),e(1260,"Tipo"),t(),n(1261,"th",14),e(1262,"Descri\xE7\xE3o"),t()(),n(1263,"tr",15)(1264,"td",16)(1265,"div",24)(1266,"span",25),e(1267," errorAsync"),a(1268,"br"),t()()(),n(1269,"td",20)(1270,"code",38),e(1271,"(value) => Observable<boolean>"),t()(),n(1272,"td",23)(1273,"p"),e(1274,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(1275,"code"),e(1276,"change"),t(),e(1277," ou "),n(1278,"code"),e(1279,"change-model"),t(),e(1280,", dependendo do valor da propriedade "),n(1281,"code"),e(1282,"triggerMode"),t(),e(1283,"."),t()()(),n(1284,"tr",15)(1285,"td",16)(1286,"div",24)(1287,"span",25),e(1288," triggerMode"),a(1289,"br"),t()()(),n(1290,"td",20)(1291,"code",39),e(1292,"'change' "),t(),n(1293,"code",40),e(1294," 'changeModel'"),t()(),n(1295,"td",23)(1296,"em")(1297,"strong"),e(1298,"(opcional)"),t()(),n(1299,"p"),e(1300,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),n(1301,"code"),e(1302,"change"),t(),e(1303," ou "),n(1304,"code"),e(1305,"change-model"),t(),e(1306,"."),t()()()()())},dependencies:[y],encapsulation:2})}return l})();var re=(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||l)(I(G),I(Q))};static \u0275cmp=x({type:l,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Number",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),h("p-click",function(){return i.changeTab("doc")}),a(3,"sample-po-number-doc"),t(),n(4,"po-tab",3),h("p-click",function(){return i.changeTab("web")}),a(5,"sample-po-number-basic-view")(6,"sample-po-number-labs-view")(7,"sample-po-number-calculate-view"),t()()()),r&2&&(S("p-actions",i.actions),m(2),S("p-active",i.activeTab==="doc"),m(2),S("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[Y,f,C,te,ie,ae,le],encapsulation:2})}return l})();var ve=[{path:"",component:re}],me=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=k({type:l});static \u0275inj=N({imports:[H.forChild(ve),H]})}return l})();var je=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=k({type:l});static \u0275inj=N({imports:[Z,me]})}return l})();export{je as DocPoNumberModule};
