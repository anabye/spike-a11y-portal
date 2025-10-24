import{o as y,p as Z}from"./chunk-I35J7BQK.js";import{Ab as C,Fa as X,Ma as q,O as K,Q as U,Sa as A,Xa as J,a as O,nb as Y,v as B,zb as f}from"./chunk-I3ESE4C7.js";import{Aa as S,Cb as P,Da as w,Dc as V,Ec as L,Fc as W,Gc as F,Hc as z,La as n,Ma as t,N,Na as a,Ra as D,Sa as h,U as s,Uc as G,V as u,Wc as Q,Yc as R,bb as I,cb as e,eb as _,gb as E,hb as b,ib as g,ja as m,ka as H,lb as M,qa as x,ra as k}from"./chunk-KZJHT32G.js";var $=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-number-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","number","p-label","PO Number"]],template:function(r,i){r&1&&a(0,"po-number",0)},dependencies:[q],encapsulation:2})}return l})();var pe=l=>({"docs-sample-code-tabs":l}),te=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-number-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Number Basic"),t(),n(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-number-basic/sample-po-number-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-number name="number" p-label="PO Number"> </po-number>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-number-basic/sample-po-number-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-number-basic',
  templateUrl: './sample-po-number-basic.component.html',
  standalone: false
})
export class SamplePoNumberBasicComponent {}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-number-basic"),t(),a(23,"hr")),r&2&&(m(5),w("po-icon "+i.sampleCodeButtonIcon),m(),_(" ",i.sampleCodeButtonLabel,""),m(),S("ngClass",M(4,pe,i.hideSampleCodeTabs)))},dependencies:[P,y,f,C,$],encapsulation:2})}return l})();var ne=(()=>{class l{additionalHelpTooltip;event;messageErrorPattern;help;icon;label;max;maxlength;min;minlength;number;placeholder;properties;size;step;iconOptions=[{value:"an an-currency-circle-dollar",label:"an an-currency-circle-dollar"},{value:"an an-currency-btc",label:"an an-currency-btc"},{value:"fa fa-calculator",label:"fa fa-calculator"}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(p){this.event=p}restore(){this.additionalHelpTooltip="",this.number=void 0,this.max=void 0,this.maxlength=void 0,this.min=void 0,this.minlength=void 0,this.event="",this.messageErrorPattern="",this.label=void 0,this.placeholder="",this.help="",this.icon="",this.size="medium",this.step=void 0,this.properties=[]}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-number-labs"]],standalone:!1,decls:23,vars:41,consts:[["f","ngForm"],["name","PO number",1,"po-md-12",3,"ngModelChange","p-blur","p-change","p-change-model","p-keydown","ngModel","p-additional-help-tooltip","p-clean","p-disabled","p-error-pattern","p-help","p-icon","p-label","p-max","p-maxlength","p-min","p-minlength","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-size","p-step","p-error-limit","p-label-text-wrap"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","messageErrorPattern","p-clean","","p-label","Message error pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","min","p-clean","","p-label","Min",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Minlength",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","max","p-clean","","p-label","Max",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Maxlength",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","step","p-clean","","p-label","Step",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","icon","p-clean","","p-label","Icon",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let d=D();n(0,"po-number",1),g("ngModelChange",function(o){return s(d),b(i.number,o)||(i.number=o),u(o)}),h("p-blur",function(){return s(d),u(i.changeEvent("p-blur"))})("p-change",function(){return s(d),u(i.changeEvent("p-change"))})("p-change-model",function(){return s(d),u(i.changeEvent("p-change-model"))})("p-keydown",function(){return s(d),u(i.changeEvent("p-keydown"))}),t(),a(1,"po-divider"),n(2,"div",2),a(3,"po-info",3)(4,"po-info",4),t(),a(5,"po-divider"),n(6,"form",null,0)(8,"po-input",5),g("ngModelChange",function(o){return s(d),b(i.label,o)||(i.label=o),u(o)}),t(),n(9,"po-input",6),g("ngModelChange",function(o){return s(d),b(i.help,o)||(i.help=o),u(o)}),t(),n(10,"po-input",7),g("ngModelChange",function(o){return s(d),b(i.additionalHelpTooltip,o)||(i.additionalHelpTooltip=o),u(o)}),t(),n(11,"po-input",8),g("ngModelChange",function(o){return s(d),b(i.placeholder,o)||(i.placeholder=o),u(o)}),t(),n(12,"po-input",9),g("ngModelChange",function(o){return s(d),b(i.messageErrorPattern,o)||(i.messageErrorPattern=o),u(o)}),t(),n(13,"po-number",10),g("ngModelChange",function(o){return s(d),b(i.min,o)||(i.min=o),u(o)}),t(),n(14,"po-number",11),g("ngModelChange",function(o){return s(d),b(i.minlength,o)||(i.minlength=o),u(o)}),t(),n(15,"po-number",12),g("ngModelChange",function(o){return s(d),b(i.max,o)||(i.max=o),u(o)}),t(),n(16,"po-number",13),g("ngModelChange",function(o){return s(d),b(i.maxlength,o)||(i.maxlength=o),u(o)}),t(),n(17,"po-number",14),g("ngModelChange",function(o){return s(d),b(i.step,o)||(i.step=o),u(o)}),t(),n(18,"po-select",15),g("ngModelChange",function(o){return s(d),b(i.icon,o)||(i.icon=o),u(o)}),t(),n(19,"po-checkbox-group",16),g("ngModelChange",function(o){return s(d),b(i.properties,o)||(i.properties=o),u(o)}),t(),n(20,"po-radio-group",17),g("ngModelChange",function(o){return s(d),b(i.size,o)||(i.size=o),u(o)}),t(),n(21,"div",2)(22,"po-button",18),h("p-click",function(){return s(d),u(i.restore())}),t()()()}r&2&&(E("ngModel",i.number),S("p-additional-help-tooltip",i.additionalHelpTooltip)("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-error-pattern",i.messageErrorPattern)("p-help",i.help)("p-icon",i.icon)("p-label",i.label)("p-max",i.max)("p-maxlength",i.maxlength)("p-min",i.min)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-step",i.step)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap")),m(3),S("p-value",i.number),m(),S("p-value",i.event),m(4),E("ngModel",i.label),m(),E("ngModel",i.help),m(),E("ngModel",i.additionalHelpTooltip),m(),E("ngModel",i.placeholder),m(),E("ngModel",i.messageErrorPattern),m(),E("ngModel",i.min),m(),E("ngModel",i.minlength),m(),E("ngModel",i.max),m(),E("ngModel",i.maxlength),m(),E("ngModel",i.step),m(),E("ngModel",i.icon),S("p-options",i.iconOptions),m(),E("ngModel",i.properties),S("p-options",i.propertiesOptions),m(),E("ngModel",i.size),S("p-options",i.sizeOptions))},dependencies:[z,V,L,F,W,B,O,K,U,X,q,A,J],encapsulation:2})}return l})();var Ee=l=>({"docs-sample-code-tabs":l}),ie=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-number-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Number Labs"),t(),n(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-number-labs/sample-po-number-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-number
  class="po-md-12"
  name="PO number"
  [(ngModel)]="number"
  [p-additional-help-tooltip]="additionalHelpTooltip"
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

  <po-input
    class="po-md-6"
    name="additionalHelpTooltip"
    [(ngModel)]="additionalHelpTooltip"
    p-clean
    p-label="Additional Help"
  >
  </po-input>

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
  additionalHelpTooltip: string;
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
    this.additionalHelpTooltip = '';
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
`),t()()()()(),n(21,"div",10),a(22,"sample-po-number-labs"),t(),a(23,"hr")),r&2&&(m(5),w("po-icon "+i.sampleCodeButtonIcon),m(),_(" ",i.sampleCodeButtonLabel,""),m(),S("ngClass",M(4,Ee,i.hideSampleCodeTabs)))},dependencies:[P,y,f,C,ne],encapsulation:2})}return l})();var oe=(()=>{class l{icms;liquid;price;quantity;state;total;statesOptions=[{value:18,label:"S\xE3o Paulo"},{value:17,label:"Alagoas"},{value:15,label:"Cear\xE1"}];calculate(){let p=this.price*this.quantity;this.liquid=p,this.total=p+p*(this.state/100)}loadICMS(){this.icms=this.state}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-number-calculate"]],standalone:!1,decls:16,vars:9,consts:[["f","ngForm"],[1,"po-row"],["name","price","p-label","Price","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","quantity","p-label","Quantity","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","state","p-label","State","p-required","","p-sort","",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel","p-options"],["name","icms","p-label","ICMS %","p-disabled","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","liquid","p-label","Liquid","p-disabled","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","total","p-label","Total","p-disabled","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["p-label","Calculate",1,"po-md-3",3,"p-click","p-disabled"],["p-label","Clean",1,"po-md-3",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let d=D();n(0,"h3"),e(1,"Calculate Tax"),t(),a(2,"po-divider"),n(3,"form",null,0)(5,"div",1)(6,"po-number",2),g("ngModelChange",function(o){return s(d),b(i.price,o)||(i.price=o),u(o)}),t(),n(7,"po-number",3),g("ngModelChange",function(o){return s(d),b(i.quantity,o)||(i.quantity=o),u(o)}),t()(),n(8,"div")(9,"po-select",4),g("ngModelChange",function(o){return s(d),b(i.state,o)||(i.state=o),u(o)}),h("p-change",function(){return s(d),u(i.loadICMS())}),t(),n(10,"po-number",5),g("ngModelChange",function(o){return s(d),b(i.icms,o)||(i.icms=o),u(o)}),t(),n(11,"po-number",6),g("ngModelChange",function(o){return s(d),b(i.liquid,o)||(i.liquid=o),u(o)}),t(),n(12,"po-number",7),g("ngModelChange",function(o){return s(d),b(i.total,o)||(i.total=o),u(o)}),t()(),n(13,"div",1)(14,"po-button",8),h("p-click",function(){return s(d),u(i.calculate())}),t(),n(15,"po-button",9),h("p-click",function(){s(d);let o=I(4);return u(o.reset())}),t()()()}if(r&2){let d=I(4);m(6),E("ngModel",i.price),m(),E("ngModel",i.quantity),m(2),E("ngModel",i.state),S("p-options",i.statesOptions),m(),E("ngModel",i.icms),m(),E("ngModel",i.liquid),m(),E("ngModel",i.total),m(2),S("p-disabled",d.invalid),m(),S("p-disabled",d.invalid)}},dependencies:[z,V,L,F,W,B,O,q,A],encapsulation:2})}return l})();var Se=l=>({"docs-sample-code-tabs":l}),ae=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-number-calculate-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Number - Calculate"),t(),n(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-number-calculate/sample-po-number-calculate.component.html"),t(),n(13,"pre",7),e(14,`<h3>Calculate Tax</h3>

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
`),t()()()()(),n(21,"div",10),a(22,"sample-po-number-calculate"),t(),a(23,"hr")),r&2&&(m(5),w("po-icon "+i.sampleCodeButtonIcon),m(),_(" ",i.sampleCodeButtonLabel,""),m(),S("ngClass",M(4,Se,i.hideSampleCodeTabs)))},dependencies:[P,y,f,C,oe],encapsulation:2})}return l})();var le=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-number-doc"]],standalone:!1,decls:1304,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
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
`),t()(),n(220,"h4",11),e(221,"Propriedades"),t(),n(222,"table",12)(223,"tr",13)(224,"th",14),e(225,"Nome"),t(),n(226,"th",14),e(227,"Tipo"),t(),n(228,"th",14),e(229,"Padr\xE3o"),t(),n(230,"th",14),e(231,"Descri\xE7\xE3o"),t()(),n(232,"tr",15)(233,"td",16)(234,"div",17)(235,"span",18),e(236," (p-additional-help)"),a(237,"br"),t()(),n(238,"div",19),e(239,"Deprecated"),t()(),n(240,"td",20)(241,"code",21),e(242,"EventEmitter"),t()(),n(243,"td",22),e(244,"-"),t(),n(245,"td",23)(246,"em")(247,"strong"),e(248,"(opcional)"),t()(),n(249,"p"),e(250,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),n(251,"code"),e(252,"p-help"),t(),e(253,"."),t(),n(254,"blockquote")(255,"p"),e(256,"Essa propriedade est\xE1 "),n(257,"strong"),e(258,"depreciada"),t(),e(259," e ser\xE1 removida na vers\xE3o "),n(260,"code"),e(261,"23.x.x"),t(),e(262,". Recomendamos utilizar a propriedade "),n(263,"code"),e(264,"p-helper"),t(),e(265," que oferece mais recursos e flexibilidade."),t()()()(),n(266,"tr",15)(267,"td",16)(268,"div",24)(269,"span",25),e(270," p-additional-help-tooltip"),a(271,"br"),t()(),n(272,"div",19),e(273,"Deprecated"),t()(),n(274,"td",20)(275,"code",26),e(276,"string"),t()(),n(277,"td",22),e(278,"-"),t(),n(279,"td",23)(280,"em")(281,"strong"),e(282,"(opcional)"),t()(),n(283,"p"),e(284,"Exibe um \xEDcone de ajuda adicional ao "),n(285,"code"),e(286,"p-help"),t(),e(287,`, com o texto desta propriedade no tooltip.
Se o evento `),n(288,"code"),e(289,"p-additional-help"),t(),e(290,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),n(291,"strong"),e(292,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(293,"blockquote")(294,"p"),e(295,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),n(296,"blockquote")(297,"p"),e(298,"Essa propriedade est\xE1 "),n(299,"strong"),e(300,"depreciada"),t(),e(301," e ser\xE1 removida na vers\xE3o "),n(302,"code"),e(303,"23.x.x"),t(),e(304,". Recomendamos utilizar a propriedade "),n(305,"code"),e(306,"p-helper"),t(),e(307," que oferece mais recursos e flexibilidade."),t()()()(),n(308,"tr",15)(309,"td",16)(310,"div",24)(311,"span",25),e(312," p-append-in-body"),a(313,"br"),t()()(),n(314,"td",20)(315,"code",27),e(316,"boolean"),t()(),n(317,"td",22)(318,"p")(319,"code"),e(320,"false"),t()()(),n(321,"td",23)(322,"em")(323,"strong"),e(324,"(opcional)"),t()(),n(325,"p"),e(326,"Define que o tooltip ("),n(327,"code"),e(328,"p-additional-help-tooltip"),t(),e(329," e/ou "),n(330,"code"),e(331,"p-error-limit"),t(),e(332,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),n(333,"blockquote")(334,"p"),e(335,"Quando utilizado com "),n(336,"code"),e(337,"p-additional-help-tooltip"),t(),e(338,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),n(339,"tr",15)(340,"td",16)(341,"div",24)(342,"span",25),e(343," p-auto-focus"),a(344,"br"),t()()(),n(345,"td",20)(346,"code",27),e(347,"boolean"),t()(),n(348,"td",22)(349,"p")(350,"code"),e(351,"false"),t()()(),n(352,"td",23)(353,"em")(354,"strong"),e(355,"(opcional)"),t()(),n(356,"p"),e(357,"Aplica foco no elemento ao ser iniciado."),t(),n(358,"blockquote")(359,"p"),e(360,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(361,"tr",15)(362,"td",16)(363,"div",17)(364,"span",18),e(365," (p-blur)"),a(366,"br"),t()()(),n(367,"td",20)(368,"code",21),e(369,"EventEmitter"),t()(),n(370,"td",22),e(371,"-"),t(),n(372,"td",23)(373,"em")(374,"strong"),e(375,"(opcional)"),t()(),n(376,"p"),e(377,"Evento disparado ao sair do campo."),t()()(),n(378,"tr",15)(379,"td",16)(380,"div",17)(381,"span",18),e(382," (p-change)"),a(383,"br"),t()()(),n(384,"td",20)(385,"code",21),e(386,"EventEmitter"),t()(),n(387,"td",22),e(388,"-"),t(),n(389,"td",23)(390,"em")(391,"strong"),e(392,"(opcional)"),t()(),n(393,"p"),e(394,"Evento disparado ao alterar valor e deixar o campo."),t()()(),n(395,"tr",15)(396,"td",16)(397,"div",17)(398,"span",18),e(399," (p-change-model)"),a(400,"br"),t()()(),n(401,"td",20)(402,"code",21),e(403,"EventEmitter"),t()(),n(404,"td",22),e(405,"-"),t(),n(406,"td",23)(407,"em")(408,"strong"),e(409,"(opcional)"),t()(),n(410,"p"),e(411,"Evento disparado ao alterar valor do model."),t()()(),n(412,"tr",15)(413,"td",16)(414,"div",24)(415,"span",25),e(416,"p-clean"),a(417,"br"),t()()(),n(418,"td",20)(419,"code",27),e(420,"boolean"),t()(),n(421,"td",22),e(422,"-"),t(),n(423,"td",23)(424,"em")(425,"strong"),e(426,"(opcional)"),t()(),n(427,"p"),e(428,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t()()(),n(429,"tr",15)(430,"td",16)(431,"div",24)(432,"span",25),e(433,"p-disabled"),a(434,"br"),t()()(),n(435,"td",20)(436,"code",27),e(437,"boolean"),t()(),n(438,"td",22)(439,"p")(440,"code"),e(441,"false"),t()()(),n(442,"td",23)(443,"em")(444,"strong"),e(445,"(opcional)"),t()(),n(446,"p"),e(447,"Se verdadeiro, desabilita o campo."),t()()(),n(448,"tr",15)(449,"td",16)(450,"div",24)(451,"span",25),e(452," p-emit-all-changes"),a(453,"br"),t()()(),n(454,"td",20)(455,"code",27),e(456,"boolean"),t()(),n(457,"td",22)(458,"p")(459,"code"),e(460,"false"),t()()(),n(461,"td",23)(462,"em")(463,"strong"),e(464,"(opcional)"),t()(),n(465,"p"),e(466,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),t()()(),n(467,"tr",15)(468,"td",16)(469,"div",17)(470,"span",18),e(471," (p-enter)"),a(472,"br"),t()()(),n(473,"td",20)(474,"code",21),e(475,"EventEmitter"),t()(),n(476,"td",22),e(477,"-"),t(),n(478,"td",23)(479,"em")(480,"strong"),e(481,"(opcional)"),t()(),n(482,"p"),e(483,"Evento disparado ao entrar do campo."),t()()(),n(484,"tr",15)(485,"td",16)(486,"div",24)(487,"span",25),e(488," p-error-async-properties"),a(489,"br"),t()()(),n(490,"td",20)(491,"code",28),e(492,"ErrorAsyncProperties"),t()(),n(493,"td",22),e(494,"-"),t(),n(495,"td",23)(496,"em")(497,"strong"),e(498,"(opcional)"),t()(),n(499,"p"),e(500,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),n(501,"code"),e(502,"Reactive Forms"),t(),e(503,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),n(504,"code"),e(505,"asyncValidators"),t(),e(506,"."),t()()(),n(507,"tr",15)(508,"td",16)(509,"div",24)(510,"span",25),e(511," p-error-limit"),a(512,"br"),t()()(),n(513,"td",20)(514,"code",27),e(515,"boolean"),t()(),n(516,"td",22)(517,"p")(518,"code"),e(519,"false"),t()()(),n(520,"td",23)(521,"em")(522,"strong"),e(523,"(opcional)"),t()(),n(524,"p"),e(525,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(526,"blockquote")(527,"p"),e(528,"Caso essa propriedade seja definida como "),n(529,"code"),e(530,"true"),t(),e(531,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),n(532,"tr",15)(533,"td",16)(534,"div",24)(535,"span",25),e(536," p-error-pattern"),a(537,"br"),t()()(),n(538,"td",20)(539,"code",26),e(540,"string"),t()(),n(541,"td",22),e(542,"-"),t(),n(543,"td",23)(544,"em")(545,"strong"),e(546,"(opcional)"),t()(),n(547,"p"),e(548,"Mensagem que ser\xE1 apresentada quando o "),n(549,"code"),e(550,"pattern"),t(),e(551," ou a m\xE1scara n\xE3o for satisfeita."),t(),n(552,"blockquote")(553,"p"),e(554,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),n(555,"code"),e(556,"p-required-field-error-message"),t(),e(557," em conjunto."),t()()()(),n(558,"tr",15)(559,"td",16)(560,"div",24)(561,"span",25),e(562," p-help"),a(563,"br"),t()()(),n(564,"td",20)(565,"code",26),e(566,"string"),t()(),n(567,"td",22),e(568,"-"),t(),n(569,"td",23)(570,"em")(571,"strong"),e(572,"(opcional)"),t()(),n(573,"p"),e(574,"Texto de apoio do campo."),t()()(),n(575,"tr",15)(576,"td",16)(577,"div",24)(578,"span",25),e(579," p-icon"),a(580,"br"),t()()(),n(581,"td",20)(582,"code",26),e(583,"string "),t(),n(584,"code",29),e(585," TemplateRef<void>"),t()(),n(586,"td",22),e(587,"-"),t(),n(588,"td",23)(589,"em")(590,"strong"),e(591,"(opcional)"),t()(),n(592,"p"),e(593,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),n(594,"p"),e(595,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(596,"a",30),e(597,"Biblioteca de \xEDcones"),t(),e(598,". conforme exemplo abaixo:"),t(),n(599,"pre")(600,"code"),e(601,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),t()(),n(602,"p"),e(603,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),n(604,"em"),e(605,"Font Awesome"),t(),e(606,", da seguinte forma:"),t(),n(607,"pre")(608,"code"),e(609,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),t()(),n(610,"p"),e(611,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(612,"code"),e(613,"TemplateRef"),t(),e(614,", conforme exemplo abaixo:"),t(),n(615,"pre")(616,"code"),e(617,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),t()(),n(618,"blockquote")(619,"p"),e(620,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),n(621,"code"),e(622,"font-size: inherit"),t(),e(623," caso o \xEDcone utilizado n\xE3o aplique-o."),t()()()(),n(624,"tr",15)(625,"td",16)(626,"div",17)(627,"span",18),e(628," (p-keydown)"),a(629,"br"),t()()(),n(630,"td",20)(631,"code",21),e(632,"EventEmitter"),t()(),n(633,"td",22),e(634,"-"),t(),n(635,"td",23)(636,"em")(637,"strong"),e(638,"(opcional)"),t()(),n(639,"p"),e(640,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(641,"code"),e(642,"KeyboardEvent"),t(),e(643," com informa\xE7\xF5es sobre a tecla."),t()()(),n(644,"tr",15)(645,"td",16)(646,"div",24)(647,"span",25),e(648," p-label"),a(649,"br"),t()()(),n(650,"td",20)(651,"code",26),e(652,"string"),t()(),n(653,"td",22),e(654,"-"),t(),n(655,"td",23)(656,"em")(657,"strong"),e(658,"(opcional)"),t()(),n(659,"p"),e(660,"R\xF3tulo do campo."),t()()(),n(661,"tr",15)(662,"td",16)(663,"div",24)(664,"span",25),e(665," p-label-text-wrap"),a(666,"br"),t()()(),n(667,"td",20)(668,"code",27),e(669,"boolean"),t()(),n(670,"td",22)(671,"p")(672,"code"),e(673,"false"),t()()(),n(674,"td",23)(675,"em")(676,"strong"),e(677,"(opcional)"),t()(),n(678,"p"),e(679,"Habilita a quebra autom\xE1tica do texto da propriedade "),n(680,"code"),e(681,"p-label"),t(),e(682,". Quando "),n(683,"code"),e(684,"p-label-text-wrap"),t(),e(685,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),n(686,"tr",15)(687,"td",16)(688,"div",24)(689,"span",25),e(690,"p-mask"),a(691,"br"),t()()(),n(692,"td",20)(693,"code",26),e(694,"string"),t()(),n(695,"td",22),e(696,"-"),t(),n(697,"td",23)(698,"em")(699,"strong"),e(700,"(opcional)"),t()(),n(701,"p"),e(702,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),t()()(),n(703,"tr",15)(704,"td",16)(705,"div",24)(706,"span",25),e(707,"p-mask-format-model"),a(708,"br"),t()()(),n(709,"td",20)(710,"code",27),e(711,"boolean"),t()(),n(712,"td",22)(713,"p")(714,"code"),e(715,"false"),t()()(),n(716,"td",23)(717,"em")(718,"strong"),e(719,"(opcional)"),t()(),n(720,"p"),e(721,"Indica se o "),n(722,"code"),e(723,"model"),t(),e(724," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),t()()(),n(725,"tr",15)(726,"td",16)(727,"div",24)(728,"span",25),e(729," p-mask-no-length-validation"),a(730,"br"),t()()(),n(731,"td",20)(732,"code",27),e(733,"boolean"),t()(),n(734,"td",22)(735,"p")(736,"code"),e(737,"false"),t()()(),n(738,"td",23)(739,"p"),e(740,"Define se os caracteres especiais da m\xE1scara devem ser ignorados ao validar os comprimentos m\xEDnimo ("),n(741,"code"),e(742,"minLength"),t(),e(743,") e m\xE1ximo ("),n(744,"code"),e(745,"maxLength"),t(),e(746,") do campo."),t(),n(747,"ul")(748,"li"),e(749,"Quando "),n(750,"code"),e(751,"true"),t(),e(752,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),t(),n(753,"li"),e(754,"Quando "),n(755,"code"),e(756,"false"),t(),e(757,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),t()(),n(758,"blockquote")(759,"p"),e(760,"Ser\xE1 ignorado essa propriedade , caso esteja utilizando junto com a propriedade "),n(761,"code"),e(762,"p-mask-format-model"),t(),e(763,"."),t()(),n(764,"p"),e(765,"Exemplo:"),t(),n(766,"pre")(767,"code"),e(768,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),t()(),n(769,"ul")(770,"li"),e(771,"Entrada: "),n(772,"code"),e(773,"123-456"),t(),e(774," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),n(775,"code"),e(776,"-"),t(),e(777,"."),t()()()(),n(778,"tr",15)(779,"td",16)(780,"div",24)(781,"span",25),e(782,"p-max"),a(783,"br"),t()()(),n(784,"td",20)(785,"code",31),e(786,"number"),t()(),n(787,"td",22),e(788,"-"),t(),n(789,"td",23)(790,"em")(791,"strong"),e(792,"(opcional)"),t()(),n(793,"p"),e(794,"Valor m\xE1ximo."),t(),n(795,"blockquote")(796,"p"),e(797,"Quando o valor m\xE1ximo for um n\xFAmero com decimais aconselha-se utilizar junto da propriedade "),n(798,"code"),e(799,"p-step"),t(),e(800," tamb\xE9m passando a ela um valor decimal."),t()()()(),n(801,"tr",15)(802,"td",16)(803,"div",24)(804,"span",25),e(805," p-maxlength"),a(806,"br"),t()()(),n(807,"td",20)(808,"code",31),e(809,"number"),t()(),n(810,"td",22),e(811,"-"),t(),n(812,"td",23)(813,"em")(814,"strong"),e(815,"(opcional)"),t()(),n(816,"p"),e(817,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),t()()(),n(818,"tr",15)(819,"td",16)(820,"div",24)(821,"span",25),e(822,"p-min"),a(823,"br"),t()()(),n(824,"td",20)(825,"code",31),e(826,"number"),t()(),n(827,"td",22),e(828,"-"),t(),n(829,"td",23)(830,"em")(831,"strong"),e(832,"(opcional)"),t()(),n(833,"p"),e(834,"Valor m\xEDnimo."),t(),n(835,"blockquote")(836,"p"),e(837,"Quando o valor m\xEDnimo for um n\xFAmero com decimais aconselha-se utilizar junto da propriedade "),n(838,"code"),e(839,"p-step"),t(),e(840," tamb\xE9m passando a ela um valor decimal."),t()()()(),n(841,"tr",15)(842,"td",16)(843,"div",24)(844,"span",25),e(845," p-minlength"),a(846,"br"),t()()(),n(847,"td",20)(848,"code",31),e(849,"number"),t()(),n(850,"td",22),e(851,"-"),t(),n(852,"td",23)(853,"em")(854,"strong"),e(855,"(opcional)"),t()(),n(856,"p"),e(857,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),t()()(),n(858,"tr",15)(859,"td",16)(860,"div",24)(861,"span",25),e(862," name"),a(863,"br"),t()()(),n(864,"td",20)(865,"code",26),e(866,"string"),t()(),n(867,"td",22),e(868,"-"),t(),n(869,"td",23)(870,"p"),e(871,"Nome e identificador do campo."),t()()(),n(872,"tr",15)(873,"td",16)(874,"div",24)(875,"span",25),e(876," p-no-autocomplete"),a(877,"br"),t()()(),n(878,"td",20)(879,"code",27),e(880,"boolean"),t()(),n(881,"td",22)(882,"p")(883,"code"),e(884,"false"),t()()(),n(885,"td",23)(886,"em")(887,"strong"),e(888,"(opcional)"),t()(),n(889,"p"),e(890,"Define a propriedade nativa "),n(891,"code"),e(892,"autocomplete"),t(),e(893," do campo como "),n(894,"code"),e(895,"off"),t(),e(896,"."),t(),n(897,"blockquote")(898,"p"),e(899,"No componente "),n(900,"code"),e(901,"po-password"),t(),e(902," ser\xE1 definido como "),n(903,"code"),e(904,"new-password"),t(),e(905,"."),t()(),n(906,"p"),e(907,"Nos componentes "),n(908,"code"),e(909,"po-password"),t(),e(910," e "),n(911,"code"),e(912,"po-login"),t(),e(913," o valor padr\xE3o ser\xE1 "),n(914,"code"),e(915,"true"),t(),e(916,"."),t()()(),n(917,"tr",15)(918,"td",16)(919,"div",24)(920,"span",25),e(921," p-optional"),a(922,"br"),t()()(),n(923,"td",20)(924,"code",27),e(925,"boolean"),t()(),n(926,"td",22)(927,"p")(928,"code"),e(929,"false"),t()()(),n(930,"td",23)(931,"em")(932,"strong"),e(933,"(opcional)"),t()(),n(934,"p"),e(935,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(936,"blockquote")(937,"p"),e(938,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(939,"ul")(940,"li"),e(941,"O campo conter "),n(942,"code"),e(943,"p-required"),t(),e(944,";"),t(),n(945,"li"),e(946,"N\xE3o possuir "),n(947,"code"),e(948,"p-help"),t(),e(949," e/ou "),n(950,"code"),e(951,"p-label"),t(),e(952,"."),t()()()(),n(953,"tr",15)(954,"td",16)(955,"div",24)(956,"span",25),e(957,"p-pattern"),a(958,"br"),t()()(),n(959,"td",20)(960,"code",26),e(961,"string"),t()(),n(962,"td",22),e(963,"-"),t(),n(964,"td",23)(965,"em")(966,"strong"),e(967,"(opcional)"),t()(),n(968,"p"),e(969,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),n(970,"code"),e(971,"(p-mask)"),t(),e(972,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),t()()(),n(973,"tr",15)(974,"td",16)(975,"div",24)(976,"span",25),e(977," p-placeholder"),a(978,"br"),t()()(),n(979,"td",20)(980,"code",26),e(981,"string"),t()(),n(982,"td",22)(983,"p"),e(984,"''"),t()(),n(985,"td",23)(986,"em")(987,"strong"),e(988,"(opcional)"),t()(),n(989,"p"),e(990,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(991,"tr",15)(992,"td",16)(993,"div",24)(994,"span",25),e(995," p-helper"),a(996,"br"),t()()(),n(997,"td",20)(998,"code",32),e(999,"PoHelperOptions "),t(),n(1e3,"code",26),e(1001," string"),t()(),n(1002,"td",22),e(1003,"-"),t(),n(1004,"td",23)(1005,"em")(1006,"strong"),e(1007,"(opcional)"),t()(),n(1008,"p"),e(1009,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label."),t(),n(1010,"blockquote")(1011,"p"),e(1012,"Caso o "),n(1013,"code"),e(1014,"p-label"),t(),e(1015,` n\xE3o esteja definido, o componente po-helper n\xE3o ser\xE1 exibido.
Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional (`),n(1016,"code"),e(1017,"p-additional-help-tooltip"),t(),e(1018," e "),n(1019,"code"),e(1020,"p-additional-help"),t(),e(1021,") ser\xE1 ignorado."),t()()()(),n(1022,"tr",15)(1023,"td",16)(1024,"div",24)(1025,"span",25),e(1026,"p-readonly"),a(1027,"br"),t()()(),n(1028,"td",20)(1029,"code",27),e(1030,"boolean"),t()(),n(1031,"td",22),e(1032,"-"),t(),n(1033,"td",23)(1034,"em")(1035,"strong"),e(1036,"(opcional)"),t()(),n(1037,"p"),e(1038,"Indica que o campo ser\xE1 somente leitura."),t()()(),n(1039,"tr",15)(1040,"td",16)(1041,"div",24)(1042,"span",25),e(1043,"p-required"),a(1044,"br"),t()()(),n(1045,"td",20)(1046,"code",27),e(1047,"boolean"),t()(),n(1048,"td",22)(1049,"p")(1050,"code"),e(1051,"false"),t()()(),n(1052,"td",23)(1053,"em")(1054,"strong"),e(1055,"(opcional)"),t()(),n(1056,"p"),e(1057,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),n(1058,"blockquote")(1059,"p"),e(1060,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),n(1061,"code"),e(1062,"(p-disabled)"),t(),e(1063,"."),t()()()(),n(1064,"tr",15)(1065,"td",16)(1066,"div",24)(1067,"span",25),e(1068," p-required-field-error-message"),a(1069,"br"),t()()(),n(1070,"td",20)(1071,"code",27),e(1072,"boolean"),t()(),n(1073,"td",22)(1074,"p")(1075,"code"),e(1076,"false"),t()()(),n(1077,"td",23)(1078,"em")(1079,"strong"),e(1080,"(opcional)"),t()(),n(1081,"p"),e(1082,"Exibe a mensagem setada na propriedade "),n(1083,"code"),e(1084,"p-error-pattern"),t(),e(1085," se o campo estiver vazio e for requerido."),t(),n(1086,"blockquote")(1087,"p"),e(1088,"Necess\xE1rio que a propriedade "),n(1089,"code"),e(1090,"p-required"),t(),e(1091," esteja habilitada."),t()()()(),n(1092,"tr",15)(1093,"td",16)(1094,"div",24)(1095,"span",25),e(1096," p-show-required"),a(1097,"br"),t()()(),n(1098,"td",20)(1099,"code",27),e(1100,"boolean"),t()(),n(1101,"td",22),e(1102,"-"),t(),n(1103,"td",23)(1104,"p"),e(1105,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(1106,"blockquote")(1107,"p"),e(1108,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(1109,"ul")(1110,"li"),e(1111,"N\xE3o possuir "),n(1112,"code"),e(1113,"p-help"),t(),e(1114," e/ou "),n(1115,"code"),e(1116,"p-label"),t(),e(1117,"."),t()()()(),n(1118,"tr",15)(1119,"td",16)(1120,"div",24)(1121,"span",25),e(1122," p-size"),a(1123,"br"),t()()(),n(1124,"td",20)(1125,"code",26),e(1126,"string"),t()(),n(1127,"td",22)(1128,"p")(1129,"code"),e(1130,"medium"),t()()(),n(1131,"td",23)(1132,"em")(1133,"strong"),e(1134,"(opcional)"),t()(),n(1135,"p"),e(1136,"Define o tamanho do componente:"),t(),n(1137,"ul")(1138,"li")(1139,"code"),e(1140,"small"),t(),e(1141,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(1142,"li")(1143,"code"),e(1144,"medium"),t(),e(1145,": altura do input como 44px."),t()(),n(1146,"blockquote")(1147,"p"),e(1148,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(1149,"code"),e(1150,"medium"),t(),e(1151,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(1152,"a",33),e(1153,"po-theme"),t(),e(1154,"."),t()()()(),n(1155,"tr",15)(1156,"td",16)(1157,"div",24)(1158,"span",25),e(1159," p-step"),a(1160,"br"),t()()(),n(1161,"td",20)(1162,"code",26),e(1163,"string"),t()(),n(1164,"td",22)(1165,"p"),e(1166,"1"),t()(),n(1167,"td",23)(1168,"em")(1169,"strong"),e(1170,"(opcional)"),t()(),n(1171,"p"),e(1172,"Intervalo."),t()()(),n(1173,"tr",15)(1174,"td",16)(1175,"div",24)(1176,"span",25),e(1177," p-upper-case"),a(1178,"br"),t()()(),n(1179,"td",20)(1180,"code",27),e(1181,"boolean"),t()(),n(1182,"td",22),e(1183,"-"),t(),n(1184,"td",23)(1185,"p"),e(1186,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),t()()()(),n(1187,"h3",11),e(1188,"M\xE9todos"),t(),n(1189,"table",34)(1190,"tr",15)(1191,"th",35)(1192,"div",24)(1193,"h4")(1194,"span",25),e(1195," showAdditionalHelp "),t()()()()(),n(1196,"tr",23)(1197,"td",23)(1198,"p"),e(1199,"M\xE9todo que exibe "),n(1200,"code"),e(1201,"p-additionalHelpTooltip"),t(),e(1202," ou executa a a\xE7\xE3o definida em "),n(1203,"code"),e(1204,"p-additionalHelp"),t(),e(1205,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),n(1206,"code"),e(1207,"p-keydown"),t(),e(1208,"."),t(),n(1209,"blockquote")(1210,"p"),e(1211,"Exibe ou oculta o conte\xFAdo do componente "),n(1212,"code"),e(1213,"po-helper"),t(),e(1214," quando o componente estiver com foco e com label vis\xEDvel."),t()(),n(1215,"pre")(1216,"code"),e(1217,`<po-nome-component
 #component
 ...
 p-additional-help-tooltip="Mensagem de ajuda complementar"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),t()(),n(1218,"pre")(1219,"code"),e(1220,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),t()(),n(1221,"pre")(1222,"code"),e(1223,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),a(1224,"br"),n(1225,"table",34)(1226,"tr",15)(1227,"th",35)(1228,"div",24)(1229,"h4")(1230,"span",25),e(1231," focus "),t()()()()(),n(1232,"tr",23)(1233,"td",23)(1234,"p"),e(1235,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(1236,"p"),e(1237,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(1238,"pre")(1239,"code"),e(1240,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),t()()()()(),a(1241,"br"),n(1242,"h3"),e(1243,"Interfaces"),t(),n(1244,"h4",36)(1245,"code",5),e(1246,"ErrorAsyncProperties"),t()(),n(1247,"div",2)(1248,"p"),e(1249,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),t()(),n(1250,"h4",11),e(1251,"Propriedades"),t(),n(1252,"table",12)(1253,"tr",13)(1254,"th",14),e(1255,"Nome"),t(),n(1256,"th",14),e(1257,"Tipo"),t(),n(1258,"th",14),e(1259,"Descri\xE7\xE3o"),t()(),n(1260,"tr",15)(1261,"td",16)(1262,"div",24)(1263,"span",25),e(1264," errorAsync"),a(1265,"br"),t()()(),n(1266,"td",20)(1267,"code",37),e(1268,"(value) => Observable<boolean>"),t()(),n(1269,"td",23)(1270,"p"),e(1271,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(1272,"code"),e(1273,"change"),t(),e(1274," ou "),n(1275,"code"),e(1276,"change-model"),t(),e(1277,", dependendo do valor da propriedade "),n(1278,"code"),e(1279,"triggerMode"),t(),e(1280,"."),t()()(),n(1281,"tr",15)(1282,"td",16)(1283,"div",24)(1284,"span",25),e(1285," triggerMode"),a(1286,"br"),t()()(),n(1287,"td",20)(1288,"code",38),e(1289,"'change' "),t(),n(1290,"code",39),e(1291," 'changeModel'"),t()(),n(1292,"td",23)(1293,"em")(1294,"strong"),e(1295,"(opcional)"),t()(),n(1296,"p"),e(1297,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),n(1298,"code"),e(1299,"change"),t(),e(1300," ou "),n(1301,"code"),e(1302,"change-model"),t(),e(1303,"."),t()()()()())},dependencies:[y],encapsulation:2})}return l})();var re=(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,r){this.route=p,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||l)(H(G),H(Q))};static \u0275cmp=x({type:l,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Number",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),h("p-click",function(){return i.changeTab("doc")}),a(3,"sample-po-number-doc"),t(),n(4,"po-tab",3),h("p-click",function(){return i.changeTab("web")}),a(5,"sample-po-number-basic-view")(6,"sample-po-number-labs-view")(7,"sample-po-number-calculate-view"),t()()()),r&2&&(S("p-actions",i.actions),m(2),S("p-active",i.activeTab==="doc"),m(2),S("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[Y,f,C,te,ie,ae,le],encapsulation:2})}return l})();var ve=[{path:"",component:re}],me=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=k({type:l});static \u0275inj=N({imports:[R.forChild(ve),R]})}return l})();var je=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=k({type:l});static \u0275inj=N({imports:[Z,me]})}return l})();export{je as DocPoNumberModule};
