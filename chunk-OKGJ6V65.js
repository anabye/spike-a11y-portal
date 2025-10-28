import{o as C,p as ae}from"./chunk-HSZY3T7Z.js";import{Ab as y,Da as M,Fa as te,Ma as V,O as $,Q as ee,Sa as ne,Xa as ie,a as H,nb as oe,v as L,zb as v}from"./chunk-MF7ELP6K.js";import{$c as j,Aa as E,Da as w,Dc as F,Fb as _,Gc as W,Hc as q,Ic as N,Jc as R,Kc as T,La as n,Ma as t,N as B,Na as o,Nc as K,Oc as J,Q,Ra as z,Sa as g,Sc as X,U as s,V as c,Xc as Y,Zc as Z,bb as U,cb as e,eb as D,gb as h,hb as b,ib as S,ja as m,ka as I,ob as P,qa as x,ra as O}from"./chunk-CBLD3XJL.js";var le=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-decimal-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","decimal","p-label","PO Decimal"]],template:function(r,i){r&1&&o(0,"po-decimal",0)},dependencies:[M],encapsulation:2})}return l})();var xe=l=>({"docs-sample-code-tabs":l}),re=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-decimal-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Decimal Basic"),t(),n(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-decimal-basic/sample-po-decimal-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-decimal name="decimal" p-label="PO Decimal"> </po-decimal>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-decimal-basic/sample-po-decimal-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-decimal-basic',
  templateUrl: './sample-po-decimal-basic.component.html',
  standalone: false
})
export class SamplePoDecimalBasicComponent {}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-decimal-basic"),t(),o(23,"hr")),r&2&&(m(5),w("po-icon "+i.sampleCodeButtonIcon),m(),D(" ",i.sampleCodeButtonLabel,""),m(),E("ngClass",P(4,xe,i.hideSampleCodeTabs)))},dependencies:[_,C,v,y,le],encapsulation:2})}return l})();var de=(()=>{class l{additionalHelpTooltip;decimal;decimalsLength;event;help;icon;label;locale;placeholder;properties;thousandMaxlength;errorPattern;max;min;size;localeOptions=[{value:"pt",label:"Portuguese"},{value:"en",label:"English"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"}];iconOptions=[{value:"an an-shopping-cart-simple",label:"an an-shopping-cart-simple"},{value:"an an-currency-dollar-simple",label:"an an-currency-dollar-simple"},{value:"fa fa-calculator",label:"fa fa-calculator"}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];get maxDecimalsLength(){return 16-this.thousandMaxlength||15}get maxThousandMaxlength(){return 16-this.decimalsLength||13}ngOnInit(){this.restore()}changeEvent(p){this.event=p}restore(){this.additionalHelpTooltip="",this.decimal=void 0,this.decimalsLength=void 0,this.event="",this.help=void 0,this.icon=void 0,this.label=void 0,this.locale=void 0,this.placeholder="",this.thousandMaxlength=void 0,this.errorPattern=void 0,this.max=void 0,this.min=void 0,this.size="medium",this.properties=[]}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-decimal-labs"]],standalone:!1,decls:23,vars:44,consts:[["f","ngForm"],["name","decimal",1,"po-md-12",3,"ngModelChange","p-blur","p-change","p-change-model","p-keydown","ngModel","p-additional-help-tooltip","p-clean","p-decimals-length","p-disabled","p-help","p-icon","p-label","p-locale","p-error-pattern","p-max","p-min","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-size","p-thousand-maxlength","p-label-text-wrap","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","icon","p-clean","","p-label","Icon",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","min","p-clean","","p-label","Min",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","max","p-clean","","p-label","Max",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","locale","p-clean","","p-label","Locale",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","decimalsLength","p-clean","","p-help","M\xE1ximo 15","p-label","Decimals max length","p-min","0",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-max"],["name","thousandMaxlength","p-clean","","p-help","M\xE1ximo 13","p-label","Thousand max length","p-min","0",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-max"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let d=z();n(0,"po-decimal",1),S("ngModelChange",function(a){return s(d),b(i.decimal,a)||(i.decimal=a),c(a)}),g("p-blur",function(){return s(d),c(i.changeEvent("p-blur"))})("p-change",function(){return s(d),c(i.changeEvent("p-change"))})("p-change-model",function(){return s(d),c(i.changeEvent("p-change-model"))})("p-keydown",function(){return s(d),c(i.changeEvent("p-keydown"))}),t(),o(1,"po-divider"),n(2,"div",2),o(3,"po-info",3)(4,"po-info",4),t(),o(5,"po-divider"),n(6,"form",null,0)(8,"po-input",5),S("ngModelChange",function(a){return s(d),b(i.label,a)||(i.label=a),c(a)}),t(),n(9,"po-input",6),S("ngModelChange",function(a){return s(d),b(i.help,a)||(i.help=a),c(a)}),t(),n(10,"po-input",7),S("ngModelChange",function(a){return s(d),b(i.additionalHelpTooltip,a)||(i.additionalHelpTooltip=a),c(a)}),t(),n(11,"po-input",8),S("ngModelChange",function(a){return s(d),b(i.placeholder,a)||(i.placeholder=a),c(a)}),t(),n(12,"po-input",9),S("ngModelChange",function(a){return s(d),b(i.errorPattern,a)||(i.errorPattern=a),c(a)}),t(),n(13,"po-select",10),S("ngModelChange",function(a){return s(d),b(i.icon,a)||(i.icon=a),c(a)}),t(),n(14,"po-number",11),S("ngModelChange",function(a){return s(d),b(i.min,a)||(i.min=a),c(a)}),t(),n(15,"po-number",12),S("ngModelChange",function(a){return s(d),b(i.max,a)||(i.max=a),c(a)}),t(),n(16,"po-select",13),S("ngModelChange",function(a){return s(d),b(i.locale,a)||(i.locale=a),c(a)}),t(),n(17,"po-number",14),S("ngModelChange",function(a){return s(d),b(i.decimalsLength,a)||(i.decimalsLength=a),c(a)}),t(),n(18,"po-number",15),S("ngModelChange",function(a){return s(d),b(i.thousandMaxlength,a)||(i.thousandMaxlength=a),c(a)}),t(),n(19,"po-checkbox-group",16),S("ngModelChange",function(a){return s(d),b(i.properties,a)||(i.properties=a),c(a)}),t(),n(20,"po-radio-group",17),S("ngModelChange",function(a){return s(d),b(i.size,a)||(i.size=a),c(a)}),t(),n(21,"div",2)(22,"po-button",18),g("p-click",function(){return s(d),c(i.restore())}),t()()()}r&2&&(h("ngModel",i.decimal),E("p-additional-help-tooltip",i.additionalHelpTooltip)("p-clean",i.properties.includes("clean"))("p-decimals-length",i.decimalsLength)("p-disabled",i.properties.includes("disabled"))("p-help",i.help)("p-icon",i.icon)("p-label",i.label)("p-locale",i.locale)("p-error-pattern",i.errorPattern)("p-max",i.max)("p-min",i.min)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-thousand-maxlength",i.thousandMaxlength)("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit")),m(3),E("p-value",i.decimal),m(),E("p-value",i.event),m(4),h("ngModel",i.label),m(),h("ngModel",i.help),m(),h("ngModel",i.additionalHelpTooltip),m(),h("ngModel",i.placeholder),m(),h("ngModel",i.errorPattern),m(),h("ngModel",i.icon),E("p-options",i.iconOptions),m(),h("ngModel",i.min),m(),h("ngModel",i.max),m(),h("ngModel",i.locale),E("p-options",i.localeOptions),m(),h("ngModel",i.decimalsLength),E("p-max",i.maxDecimalsLength),m(),h("ngModel",i.thousandMaxlength),E("p-max",i.maxThousandMaxlength),m(),h("ngModel",i.properties),E("p-options",i.propertiesOptions),m(),h("ngModel",i.size),E("p-options",i.sizeOptions))},dependencies:[T,W,q,R,N,L,H,$,ee,M,te,V,ne,ie],encapsulation:2})}return l})();var ye=l=>({"docs-sample-code-tabs":l}),pe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-decimal-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Decimal Labs"),t(),n(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-decimal-labs/sample-po-decimal-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-decimal
  class="po-md-12"
  name="decimal"
  [(ngModel)]="decimal"
  [p-additional-help-tooltip]="additionalHelpTooltip"
  [p-clean]="properties.includes('clean')"
  [p-decimals-length]="decimalsLength"
  [p-disabled]="properties.includes('disabled')"
  [p-help]="help"
  [p-icon]="icon"
  [p-label]="label"
  [p-locale]="locale"
  [p-error-pattern]="errorPattern"
  [p-max]="max"
  [p-min]="min"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  [p-thousand-maxlength]="thousandMaxlength"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
>
</po-decimal>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="decimal"> </po-info>
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

  <po-input class="po-md-6" name="errorPattern" [(ngModel)]="errorPattern" p-clean p-label="Error Pattern"> </po-input>

  <po-select class="po-md-6 po-lg-3" name="icon" [(ngModel)]="icon" p-clean p-label="Icon" [p-options]="iconOptions">
  </po-select>

  <po-number class="po-md-6 po-lg-3" name="min" [(ngModel)]="min" p-clean p-label="Min"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="max" [(ngModel)]="max" p-clean p-label="Max"> </po-number>

  <po-select
    class="po-md-6 po-lg-3"
    name="locale"
    [(ngModel)]="locale"
    p-clean
    p-label="Locale"
    [p-options]="localeOptions"
  ></po-select>

  <po-number
    class="po-md-6 po-lg-3"
    name="decimalsLength"
    [(ngModel)]="decimalsLength"
    p-clean
    p-help="M\xE1ximo 15"
    p-label="Decimals max length"
    p-min="0"
    [p-max]="maxDecimalsLength"
  >
  </po-number>

  <po-number
    class="po-md-6 po-lg-3"
    name="thousandMaxlength"
    [(ngModel)]="thousandMaxlength"
    p-clean
    p-help="M\xE1ximo 13"
    p-label="Thousand max length"
    p-min="0"
    [p-max]="maxThousandMaxlength"
  >
  </po-number>

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
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-decimal-labs/sample-po-decimal-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-decimal-labs',
  templateUrl: './sample-po-decimal-labs.component.html',
  standalone: false
})
export class SamplePoDecimalLabsComponent implements OnInit {
  additionalHelpTooltip: string;
  decimal: number;
  decimalsLength: number;
  event: string;
  help: string;
  icon: string;
  label: string;
  locale: string;
  placeholder: string;
  properties: Array<string>;
  thousandMaxlength: number;
  errorPattern: string;
  max: number;
  min: number;
  size: string;

  public readonly localeOptions: Array<PoSelectOption> = [
    { value: 'pt', label: 'Portuguese' },
    { value: 'en', label: 'English' },
    { value: 'ru', label: 'Russian' },
    { value: 'es', label: 'Spanish' }
  ];

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-shopping-cart-simple', label: 'an an-shopping-cart-simple' },
    { value: 'an an-currency-dollar-simple', label: 'an an-currency-dollar-simple' },
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

  get maxDecimalsLength() {
    return 16 - this.thousandMaxlength || 15;
  }

  get maxThousandMaxlength() {
    return 16 - this.decimalsLength || 13;
  }

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.additionalHelpTooltip = '';
    this.decimal = undefined;
    this.decimalsLength = undefined;
    this.event = '';
    this.help = undefined;
    this.icon = undefined;
    this.label = undefined;
    this.locale = undefined;
    this.placeholder = '';
    this.thousandMaxlength = undefined;
    this.errorPattern = undefined;
    this.max = undefined;
    this.min = undefined;
    this.size = 'medium';

    this.properties = [];
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-decimal-labs"),t(),o(23,"hr")),r&2&&(m(5),w("po-icon "+i.sampleCodeButtonIcon),m(),D(" ",i.sampleCodeButtonLabel,""),m(),E("ngClass",P(4,ye,i.hideSampleCodeTabs)))},dependencies:[_,C,v,y,de],encapsulation:2})}return l})();var se=(()=>{class l{hourlyWage;quantityDaysPerMonth;salary;weekHours;workingDaysPerWeek;calculate(){let p=this.weekHours/this.workingDaysPerWeek*this.quantityDaysPerMonth,r=this.salary/p;this.hourlyWage=r}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-decimal-hourly-wage"]],standalone:!1,decls:16,vars:6,consts:[["f","ngForm"],[1,"po-font-title"],[1,"po-row"],["name","weekHours","p-label","Week Hours","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","workingDaysPerWeek","p-label","Working days per week","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","quantityDaysPerMonth","p-label","Quantity days per month","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","salary","p-decimals-length","2","p-icon","an an-currency-circle-dollar","p-label","Salary","p-required","","p-thousand-maxlength","13",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","hourlyWage","p-decimals-length","2","p-disabled","","p-icon","an an-currency-dollar-simple","p-label","Hourly Wage","p-required","","p-thousand-maxlength","13",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Clean",1,"po-md-3",3,"p-click"],["p-label","Recalculate","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let d=z();n(0,"form",null,0)(2,"div",1),e(3,"Calculate hourly wage"),t(),o(4,"po-divider"),n(5,"div",2)(6,"po-number",3),S("ngModelChange",function(a){return s(d),b(i.weekHours,a)||(i.weekHours=a),c(a)}),t(),n(7,"po-number",4),S("ngModelChange",function(a){return s(d),b(i.workingDaysPerWeek,a)||(i.workingDaysPerWeek=a),c(a)}),t()(),n(8,"div",2)(9,"po-number",5),S("ngModelChange",function(a){return s(d),b(i.quantityDaysPerMonth,a)||(i.quantityDaysPerMonth=a),c(a)}),t(),n(10,"po-decimal",6),S("ngModelChange",function(a){return s(d),b(i.salary,a)||(i.salary=a),c(a)}),g("p-change",function(){return s(d),c(i.calculate())}),t()(),n(11,"div",2)(12,"po-decimal",7),S("ngModelChange",function(a){return s(d),b(i.hourlyWage,a)||(i.hourlyWage=a),c(a)}),t()(),n(13,"div",2)(14,"po-button",8),g("p-click",function(){s(d);let a=U(1);return c(a.reset())}),t(),n(15,"po-button",9),g("p-click",function(){return s(d),c(i.calculate())}),t()()()}r&2&&(m(6),h("ngModel",i.weekHours),m(),h("ngModel",i.workingDaysPerWeek),m(2),h("ngModel",i.quantityDaysPerMonth),m(),h("ngModel",i.salary),m(2),h("ngModel",i.hourlyWage),m(3),E("p-disabled",!i.hourlyWage))},dependencies:[T,W,q,R,N,L,H,M,V],encapsulation:2})}return l})();var De=l=>({"docs-sample-code-tabs":l}),ce=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-decimal-hourly-wage-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Decimal - Hourly Wage"),t(),n(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-decimal-hourly-wage/sample-po-decimal-hourly-wage.component.html"),t(),n(13,"pre",7),e(14,`<form #f="ngForm">
  <div class="po-font-title">Calculate hourly wage</div>

  <po-divider />

  <div class="po-row">
    <po-number class="po-md-6" name="weekHours" [(ngModel)]="weekHours" p-label="Week Hours" p-required> </po-number>

    <po-number
      class="po-md-6"
      name="workingDaysPerWeek"
      [(ngModel)]="workingDaysPerWeek"
      p-label="Working days per week"
      p-required
    >
    </po-number>
  </div>

  <div class="po-row">
    <po-number
      class="po-md-6"
      name="quantityDaysPerMonth"
      [(ngModel)]="quantityDaysPerMonth"
      p-label="Quantity days per month"
      p-required
    >
    </po-number>

    <po-decimal
      class="po-md-6"
      name="salary"
      [(ngModel)]="salary"
      p-decimals-length="2"
      p-icon="an an-currency-circle-dollar"
      p-label="Salary"
      p-required
      p-thousand-maxlength="13"
      (p-change)="calculate()"
    >
    </po-decimal>
  </div>

  <div class="po-row">
    <po-decimal
      class="po-md-6"
      name="hourlyWage"
      [(ngModel)]="hourlyWage"
      p-decimals-length="2"
      p-disabled
      p-icon="an an-currency-dollar-simple"
      p-label="Hourly Wage"
      p-required
      p-thousand-maxlength="13"
    >
    </po-decimal>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Clean" (p-click)="f.reset()"> </po-button>

    <po-button
      class="po-md-3"
      p-label="Recalculate"
      p-kind="primary"
      [p-disabled]="!hourlyWage"
      (p-click)="calculate()"
    >
    </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-decimal-hourly-wage/sample-po-decimal-hourly-wage.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-decimal-hourly-wage',
  templateUrl: './sample-po-decimal-hourly-wage.component.html',
  standalone: false
})
export class SamplePoDecimalHourlyWageComponent {
  hourlyWage: number;
  quantityDaysPerMonth: number;
  salary: number;
  weekHours: number;
  workingDaysPerWeek: number;

  calculate() {
    const hours = (this.weekHours / this.workingDaysPerWeek) * this.quantityDaysPerMonth;
    const salary = this.salary / hours;
    this.hourlyWage = salary;
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-decimal-hourly-wage"),t(),o(23,"hr")),r&2&&(m(5),w("po-icon "+i.sampleCodeButtonIcon),m(),D(" ",i.sampleCodeButtonLabel,""),m(),E("ngClass",P(4,De,i.hideSampleCodeTabs)))},dependencies:[_,C,v,y,se],encapsulation:2})}return l})();var ue=(()=>{class l{formBuilder=Q(X);formCalculateHourlyWage;ngOnInit(){this.formCalculateHourlyWage=this.formBuilder.group({hourlyWage:[null],quantityDaysPerMonth:[null,F.required],salary:[null,F.required],weekHours:[null,F.required],workingDaysPerWeek:[null,F.required]})}calculate(){let{weekHours:p,workingDaysPerWeek:r,quantityDaysPerMonth:i,salary:d}=this.formCalculateHourlyWage.value,u=p/r*i,a=d/u;this.formCalculateHourlyWage.patchValue({hourlyWage:a})}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-decimal-hourly-wage-reactive-form"]],standalone:!1,decls:15,vars:2,consts:[[3,"formGroup"],[1,"po-font-title"],[1,"po-row"],["formControlName","weekHours","p-label","Week Hours",1,"po-md-6"],["formControlName","workingDaysPerWeek","p-label","Working days per week",1,"po-md-6"],["formControlName","quantityDaysPerMonth","p-label","Quantity days per month",1,"po-md-6"],["formControlName","salary","p-decimals-length","2","p-icon","an an-currency-circle-dollar","p-label","Salary","p-thousand-maxlength","13",1,"po-md-6",3,"p-change"],["formControlName","hourlyWage","p-decimals-length","2","p-disabled","","p-icon","an an-currency-dollar-simple","p-label","Hourly Wage","p-thousand-maxlength","13",1,"po-md-6"],["p-label","Clean",1,"po-md-3",3,"p-click"],["p-label","Recalculate","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"]],template:function(r,i){r&1&&(n(0,"form",0)(1,"div",1),e(2,"Calculate hourly wage"),t(),o(3,"po-divider"),n(4,"div",2),o(5,"po-number",3)(6,"po-number",4),t(),n(7,"div",2),o(8,"po-number",5),n(9,"po-decimal",6),g("p-change",function(){return i.calculate()}),t()(),n(10,"div",2),o(11,"po-decimal",7),t(),n(12,"div",2)(13,"po-button",8),g("p-click",function(){return i.formCalculateHourlyWage.reset()}),t(),n(14,"po-button",9),g("p-click",function(){return i.calculate()}),t()()()),r&2&&(E("formGroup",i.formCalculateHourlyWage),m(14),E("p-disabled",i.formCalculateHourlyWage.invalid))},dependencies:[T,W,q,K,J,L,H,M,V],encapsulation:2})}return l})();var Me=l=>({"docs-sample-code-tabs":l}),Ee=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-decimal-hourly-wage-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Decimal - Hourly Wage Reactive Form"),t(),n(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-decimal-hourly-wage-reactive-form/sample-po-decimal-hourly-wage-reactive-form.component.html"),t(),n(13,"pre",7),e(14,`<form [formGroup]="formCalculateHourlyWage">
  <div class="po-font-title">Calculate hourly wage</div>

  <po-divider />

  <div class="po-row">
    <po-number class="po-md-6" formControlName="weekHours" p-label="Week Hours"> </po-number>

    <po-number class="po-md-6" formControlName="workingDaysPerWeek" p-label="Working days per week"> </po-number>
  </div>

  <div class="po-row">
    <po-number class="po-md-6" formControlName="quantityDaysPerMonth" p-label="Quantity days per month"> </po-number>

    <po-decimal
      class="po-md-6"
      formControlName="salary"
      p-decimals-length="2"
      p-icon="an an-currency-circle-dollar"
      p-label="Salary"
      p-thousand-maxlength="13"
      (p-change)="calculate()"
    >
    </po-decimal>
  </div>

  <div class="po-row">
    <po-decimal
      class="po-md-6"
      formControlName="hourlyWage"
      p-decimals-length="2"
      p-disabled
      p-icon="an an-currency-dollar-simple"
      p-label="Hourly Wage"
      p-thousand-maxlength="13"
    >
    </po-decimal>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Clean" (p-click)="formCalculateHourlyWage.reset()"> </po-button>

    <po-button
      class="po-md-3"
      p-label="Recalculate"
      p-kind="primary"
      [p-disabled]="formCalculateHourlyWage.invalid"
      (p-click)="calculate()"
    >
    </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-decimal-hourly-wage-reactive-form/sample-po-decimal-hourly-wage-reactive-form.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sample-po-decimal-hourly-wage-reactive-form',
  templateUrl: './sample-po-decimal-hourly-wage-reactive-form.component.html',
  standalone: false
})
export class SamplePoDecimalHourlyWageReactiveFormComponent implements OnInit {
  private formBuilder = inject(UntypedFormBuilder);

  formCalculateHourlyWage: UntypedFormGroup;

  ngOnInit() {
    this.formCalculateHourlyWage = this.formBuilder.group({
      hourlyWage: [null],
      quantityDaysPerMonth: [null, Validators.required],
      salary: [null, Validators.required],
      weekHours: [null, Validators.required],
      workingDaysPerWeek: [null, Validators.required]
    });
  }

  calculate() {
    const { weekHours, workingDaysPerWeek, quantityDaysPerMonth, salary } = this.formCalculateHourlyWage.value;

    const hours = (weekHours / workingDaysPerWeek) * quantityDaysPerMonth;
    const hourlyWage = salary / hours;

    this.formCalculateHourlyWage.patchValue({ hourlyWage });
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-decimal-hourly-wage-reactive-form"),t(),o(23,"hr")),r&2&&(m(5),w("po-icon "+i.sampleCodeButtonIcon),m(),D(" ",i.sampleCodeButtonLabel,""),m(),E("ngClass",P(4,Me,i.hideSampleCodeTabs)))},dependencies:[_,C,v,y,ue],encapsulation:2})}return l})();var ge=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-decimal-doc"]],standalone:!1,decls:1415,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoDecimalComponent"),t()(),n(21,"div",2)(22,"p"),e(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),t(),n(24,"p"),e(25,"Importante:"),t(),n(26,"ul")(27,"li"),e(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),t()(),n(29,"h4"),e(30,"Tokens customiz\xE1veis"),t(),n(31,"p"),e(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),o(33,"br"),e(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),n(35,"code"),e(36,".po-input"),t()(),n(37,"blockquote")(38,"p"),e(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),n(40,"a",6),e(41,"Grid System"),t(),e(42,"."),t()(),n(43,"blockquote")(44,"p"),e(45,"Para maiores informa\xE7\xF5es, acesse o guia "),n(46,"a",7),e(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(48,"."),t()(),n(49,"table")(50,"thead")(51,"tr")(52,"th"),e(53,"Propriedade"),t(),n(54,"th"),e(55,"Descri\xE7\xE3o"),t(),n(56,"th"),e(57,"Valor Padr\xE3o"),t()()(),n(58,"tbody")(59,"tr")(60,"td")(61,"strong"),e(62,"Default Values"),t()(),o(63,"td")(64,"td"),t(),n(65,"tr")(66,"td")(67,"code"),e(68,"--font-family"),t()(),n(69,"td"),e(70,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(71,"td")(72,"code"),e(73,"var(--font-family-theme)"),t()()(),n(74,"tr")(75,"td")(76,"code"),e(77,"--font-size"),t()(),n(78,"td"),e(79,"Tamanho da fonte"),t(),n(80,"td")(81,"code"),e(82,"var(--font-size-default)"),t()()(),n(83,"tr")(84,"td")(85,"code"),e(86,"--text-color-placeholder"),t()(),n(87,"td"),e(88,"Cor do texto placeholder"),t(),n(89,"td")(90,"code"),e(91,"var(--color-neutral-light-30)"),t()()(),n(92,"tr")(93,"td")(94,"code"),e(95,"--color"),t()(),n(96,"td"),e(97,"Cor pincipal do input"),t(),n(98,"td")(99,"code"),e(100,"var(--color-neutral-dark-70)"),t()()(),n(101,"tr")(102,"td")(103,"code"),e(104,"--background"),t()(),n(105,"td"),e(106,"Cor de background"),t(),n(107,"td")(108,"code"),e(109,"var(--color-neutral-light-05)"),t()()(),n(110,"tr")(111,"td")(112,"code"),e(113,"--padding"),t()(),n(114,"td"),e(115,"Preenchimento"),t(),n(116,"td")(117,"code"),e(118,"0 0.5rem"),t()()(),n(119,"tr")(120,"td")(121,"code"),e(122,"--text-color"),t()(),n(123,"td"),e(124,"Cor do texto"),t(),n(125,"td")(126,"code"),e(127,"var(--color-neutral-dark-90)"),t()()(),n(128,"tr")(129,"td")(130,"strong"),e(131,"Hover"),t()(),o(132,"td")(133,"td"),t(),n(134,"tr")(135,"td")(136,"code"),e(137,"--color-hover"),t()(),n(138,"td"),e(139,"Cor principal no estado hover"),t(),n(140,"td")(141,"code"),e(142,"var(--color-brand-01-dark)"),t()()(),n(143,"tr")(144,"td")(145,"code"),e(146,"--background-hover"),t()(),n(147,"td"),e(148,"Cor de background no estado hover"),t(),n(149,"td")(150,"code"),e(151,"var(--color-brand-01-lightest)"),t()()(),n(152,"tr")(153,"td")(154,"strong"),e(155,"Focused"),t()(),o(156,"td")(157,"td"),t(),n(158,"tr")(159,"td")(160,"code"),e(161,"--color-focused"),t()(),n(162,"td"),e(163,"Cor principal no estado de focus"),t(),n(164,"td")(165,"code"),e(166,"var(--color-action-default)"),t()()(),n(167,"tr")(168,"td")(169,"code"),e(170,"--outline-color-focused"),t()(),n(171,"td"),e(172,"Cor do outline do estado de focus"),t(),n(173,"td")(174,"code"),e(175,"var(--color-action-focus)"),t()()(),n(176,"tr")(177,"td")(178,"strong"),e(179,"Disabled"),t()(),o(180,"td")(181,"td"),t(),n(182,"tr")(183,"td")(184,"code"),e(185,"--color-disabled"),t()(),n(186,"td"),e(187,"Cor principal no estado disabled"),t(),n(188,"td")(189,"code"),e(190,"var(--color-neutral-light-30)"),t()()(),n(191,"tr")(192,"td")(193,"code"),e(194,"--background-disabled"),t()(),n(195,"td"),e(196,"Cor de background no estado disabled"),t(),n(197,"td")(198,"code"),e(199,"var(--color-neutral-light-20)"),t()()(),n(200,"tr")(201,"td")(202,"code"),e(203,"--text-color-disabled"),t()(),n(204,"td"),e(205,"Cor do texto no estado disabled"),t(),n(206,"td")(207,"code"),e(208,"var(--color-neutral-dark-70)"),t()()()()(),n(209,"p"),o(210,"br"),e(211," - O "),n(212,"code"),e(213,"po-decimal"),t(),e(214," \xE9 um "),n(215,"em"),e(216,"input"),t(),e(217," espec\xEDfico para receber apenas n\xFAmeros decimais, por isso recebe as seguintes caracter\xEDsticas:"),t(),n(218,"ul")(219,"li"),e(220,"Aceita apenas n\xFAmeros;"),t(),n(221,"li"),e(222,"Utiliza ',' como separador de decimal;"),t(),n(223,"li"),e(224,"Utiliza '.' para separa\xE7\xE3o de milhar;"),t(),n(225,"li"),e(226,"\xC9 poss\xEDvel configurar a quantidade de casas decimais e a quantidade de digitos do campo."),t()(),n(227,"blockquote")(228,"p")(229,"strong"),e(230,"Importante:"),t(),e(231,`
Atualmente o JavaScript limita-se a um conjunto de dados de `),n(232,"code"),e(233,"32 bits"),t(),e(234,`, e para que os valores comportem-se devidamente,
o `),n(235,"code"),e(236,"po-decimal"),t(),e(237,` cont\xE9m um tratamento que limita em 16 o n\xFAmero total de casas antes e ap\xF3s a v\xEDrgula.
Veja abaixo as demais regras nas documenta\xE7\xF5es de `),n(238,"code"),e(239,"p-decimals-length"),t(),e(240," e "),n(241,"code"),e(242,"p-thousand-maxlength"),t(),e(243,"."),t()()(),n(244,"div",8)(245,"h4",9),e(246,"Seletor"),t(),n(247,"pre",10),e(248,`<po-decimal
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-clean="boolean"
    p-decimals-length="number"
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
    p-locale="string"
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
    p-thousand-maxlength="number"
    p-upper-case="boolean" >
</po-decimal>
`),t()(),n(249,"h4",11),e(250,"Propriedades"),t(),n(251,"table",12)(252,"tr",13)(253,"th",14),e(254,"Nome"),t(),n(255,"th",14),e(256,"Tipo"),t(),n(257,"th",14),e(258,"Padr\xE3o"),t(),n(259,"th",14),e(260,"Descri\xE7\xE3o"),t()(),n(261,"tr",15)(262,"td",16)(263,"div",17)(264,"span",18),e(265," (p-additional-help)"),o(266,"br"),t()(),n(267,"div",19),e(268,"Deprecated"),t()(),n(269,"td",20)(270,"code",21),e(271,"EventEmitter"),t()(),n(272,"td",22),e(273,"-"),t(),n(274,"td",23)(275,"em")(276,"strong"),e(277,"(opcional)"),t()(),n(278,"p"),e(279,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),n(280,"code"),e(281,"p-help"),t(),e(282,"."),t(),n(283,"blockquote")(284,"p"),e(285,"Essa propriedade est\xE1 "),n(286,"strong"),e(287,"depreciada"),t(),e(288," e ser\xE1 removida na vers\xE3o "),n(289,"code"),e(290,"23.x.x"),t(),e(291,". Recomendamos utilizar a propriedade "),n(292,"code"),e(293,"p-helper"),t(),e(294," que oferece mais recursos e flexibilidade."),t()()()(),n(295,"tr",15)(296,"td",16)(297,"div",24)(298,"span",25),e(299," p-additional-help-tooltip"),o(300,"br"),t()(),n(301,"div",19),e(302,"Deprecated"),t()(),n(303,"td",20)(304,"code",26),e(305,"string"),t()(),n(306,"td",22),e(307,"-"),t(),n(308,"td",23)(309,"em")(310,"strong"),e(311,"(opcional)"),t()(),n(312,"p"),e(313,"Exibe um \xEDcone de ajuda adicional ao "),n(314,"code"),e(315,"p-help"),t(),e(316,`, com o texto desta propriedade no tooltip.
Se o evento `),n(317,"code"),e(318,"p-additional-help"),t(),e(319,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),n(320,"strong"),e(321,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(322,"blockquote")(323,"p"),e(324,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),n(325,"blockquote")(326,"p"),e(327,"Essa propriedade est\xE1 "),n(328,"strong"),e(329,"depreciada"),t(),e(330," e ser\xE1 removida na vers\xE3o "),n(331,"code"),e(332,"23.x.x"),t(),e(333,". Recomendamos utilizar a propriedade "),n(334,"code"),e(335,"p-helper"),t(),e(336," que oferece mais recursos e flexibilidade."),t()()()(),n(337,"tr",15)(338,"td",16)(339,"div",24)(340,"span",25),e(341," p-append-in-body"),o(342,"br"),t()()(),n(343,"td",20)(344,"code",27),e(345,"boolean"),t()(),n(346,"td",22)(347,"p")(348,"code"),e(349,"false"),t()()(),n(350,"td",23)(351,"em")(352,"strong"),e(353,"(opcional)"),t()(),n(354,"p"),e(355,"Define que o tooltip ("),n(356,"code"),e(357,"p-additional-help-tooltip"),t(),e(358," e/ou "),n(359,"code"),e(360,"p-error-limit"),t(),e(361,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),n(362,"blockquote")(363,"p"),e(364,"Quando utilizado com "),n(365,"code"),e(366,"p-additional-help-tooltip"),t(),e(367,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),n(368,"tr",15)(369,"td",16)(370,"div",24)(371,"span",25),e(372," p-auto-focus"),o(373,"br"),t()()(),n(374,"td",20)(375,"code",27),e(376,"boolean"),t()(),n(377,"td",22)(378,"p")(379,"code"),e(380,"false"),t()()(),n(381,"td",23)(382,"em")(383,"strong"),e(384,"(opcional)"),t()(),n(385,"p"),e(386,"Aplica foco no elemento ao ser iniciado."),t(),n(387,"blockquote")(388,"p"),e(389,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(390,"tr",15)(391,"td",16)(392,"div",17)(393,"span",18),e(394," (p-blur)"),o(395,"br"),t()()(),n(396,"td",20)(397,"code",21),e(398,"EventEmitter"),t()(),n(399,"td",22),e(400,"-"),t(),n(401,"td",23)(402,"em")(403,"strong"),e(404,"(opcional)"),t()(),n(405,"p"),e(406,"Evento disparado ao sair do campo."),t()()(),n(407,"tr",15)(408,"td",16)(409,"div",17)(410,"span",18),e(411," (p-change)"),o(412,"br"),t()()(),n(413,"td",20)(414,"code",21),e(415,"EventEmitter"),t()(),n(416,"td",22),e(417,"-"),t(),n(418,"td",23)(419,"em")(420,"strong"),e(421,"(opcional)"),t()(),n(422,"p"),e(423,"Evento disparado ao alterar valor e deixar o campo."),t()()(),n(424,"tr",15)(425,"td",16)(426,"div",17)(427,"span",18),e(428," (p-change-model)"),o(429,"br"),t()()(),n(430,"td",20)(431,"code",21),e(432,"EventEmitter"),t()(),n(433,"td",22),e(434,"-"),t(),n(435,"td",23)(436,"em")(437,"strong"),e(438,"(opcional)"),t()(),n(439,"p"),e(440,"Evento disparado ao alterar valor do model."),t()()(),n(441,"tr",15)(442,"td",16)(443,"div",24)(444,"span",25),e(445,"p-clean"),o(446,"br"),t()()(),n(447,"td",20)(448,"code",27),e(449,"boolean"),t()(),n(450,"td",22),e(451,"-"),t(),n(452,"td",23)(453,"em")(454,"strong"),e(455,"(opcional)"),t()(),n(456,"p"),e(457,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t()()(),n(458,"tr",15)(459,"td",16)(460,"div",24)(461,"span",25),e(462," p-decimals-length"),o(463,"br"),t()()(),n(464,"td",20)(465,"code",28),e(466,"number"),t()(),n(467,"td",22)(468,"p")(469,"code"),e(470,"2"),t()()(),n(471,"td",23)(472,"em")(473,"strong"),e(474,"(opcional)"),t()(),n(475,"p"),e(476,"Quantidade m\xE1xima de casas decimais."),t(),n(477,"blockquote")(478,"p")(479,"strong"),e(480,"Importante:"),t()()(),n(481,"ul")(482,"li"),e(483,"O valor m\xE1ximo permitido \xE9 15;"),t(),n(484,"li"),e(485,"A soma total de "),n(486,"code"),e(487,"p-decimals-length"),t(),e(488," com "),n(489,"code"),e(490,"p-thousand-maxlength"),t(),e(491," limita-se \xE0 16;"),t(),n(492,"li"),e(493,"Esta propriedade sobrep\xF5e apenas o valor "),n(494,"strong"),e(495,"padr\xE3o"),t(),e(496," de "),n(497,"code"),e(498,"p-thousand-maxlength"),t(),e(499,";"),t(),n(500,"li"),e(501,"Caso "),n(502,"code"),e(503,"p-thousand-maxlength"),t(),e(504," tenha um valor definido, esta propriedade poder\xE1 receber apenas o valor restante do limite total (16)."),t()()()(),n(505,"tr",15)(506,"td",16)(507,"div",24)(508,"span",25),e(509,"p-disabled"),o(510,"br"),t()()(),n(511,"td",20)(512,"code",27),e(513,"boolean"),t()(),n(514,"td",22)(515,"p")(516,"code"),e(517,"false"),t()()(),n(518,"td",23)(519,"em")(520,"strong"),e(521,"(opcional)"),t()(),n(522,"p"),e(523,"Se verdadeiro, desabilita o campo."),t()()(),n(524,"tr",15)(525,"td",16)(526,"div",24)(527,"span",25),e(528," p-emit-all-changes"),o(529,"br"),t()()(),n(530,"td",20)(531,"code",27),e(532,"boolean"),t()(),n(533,"td",22)(534,"p")(535,"code"),e(536,"false"),t()()(),n(537,"td",23)(538,"em")(539,"strong"),e(540,"(opcional)"),t()(),n(541,"p"),e(542,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),t()()(),n(543,"tr",15)(544,"td",16)(545,"div",17)(546,"span",18),e(547," (p-enter)"),o(548,"br"),t()()(),n(549,"td",20)(550,"code",21),e(551,"EventEmitter"),t()(),n(552,"td",22),e(553,"-"),t(),n(554,"td",23)(555,"em")(556,"strong"),e(557,"(opcional)"),t()(),n(558,"p"),e(559,"Evento disparado ao entrar do campo."),t()()(),n(560,"tr",15)(561,"td",16)(562,"div",24)(563,"span",25),e(564," p-error-async-properties"),o(565,"br"),t()()(),n(566,"td",20)(567,"code",29),e(568,"ErrorAsyncProperties"),t()(),n(569,"td",22),e(570,"-"),t(),n(571,"td",23)(572,"em")(573,"strong"),e(574,"(opcional)"),t()(),n(575,"p"),e(576,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),n(577,"code"),e(578,"Reactive Forms"),t(),e(579,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),n(580,"code"),e(581,"asyncValidators"),t(),e(582,"."),t()()(),n(583,"tr",15)(584,"td",16)(585,"div",24)(586,"span",25),e(587," p-error-limit"),o(588,"br"),t()()(),n(589,"td",20)(590,"code",27),e(591,"boolean"),t()(),n(592,"td",22)(593,"p")(594,"code"),e(595,"false"),t()()(),n(596,"td",23)(597,"em")(598,"strong"),e(599,"(opcional)"),t()(),n(600,"p"),e(601,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(602,"blockquote")(603,"p"),e(604,"Caso essa propriedade seja definida como "),n(605,"code"),e(606,"true"),t(),e(607,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),n(608,"tr",15)(609,"td",16)(610,"div",24)(611,"span",25),e(612," p-error-pattern"),o(613,"br"),t()()(),n(614,"td",20)(615,"code",26),e(616,"string"),t()(),n(617,"td",22),e(618,"-"),t(),n(619,"td",23)(620,"em")(621,"strong"),e(622,"(opcional)"),t()(),n(623,"p"),e(624,"Mensagem que ser\xE1 apresentada quando o "),n(625,"code"),e(626,"pattern"),t(),e(627," ou a m\xE1scara n\xE3o for satisfeita."),t(),n(628,"blockquote")(629,"p"),e(630,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),n(631,"code"),e(632,"p-required-field-error-message"),t(),e(633," em conjunto."),t()()()(),n(634,"tr",15)(635,"td",16)(636,"div",24)(637,"span",25),e(638," p-help"),o(639,"br"),t()()(),n(640,"td",20)(641,"code",26),e(642,"string"),t()(),n(643,"td",22),e(644,"-"),t(),n(645,"td",23)(646,"em")(647,"strong"),e(648,"(opcional)"),t()(),n(649,"p"),e(650,"Texto de apoio do campo."),t()()(),n(651,"tr",15)(652,"td",16)(653,"div",24)(654,"span",25),e(655," p-icon"),o(656,"br"),t()()(),n(657,"td",20)(658,"code",26),e(659,"string "),t(),n(660,"code",30),e(661," TemplateRef<void>"),t()(),n(662,"td",22),e(663,"-"),t(),n(664,"td",23)(665,"em")(666,"strong"),e(667,"(opcional)"),t()(),n(668,"p"),e(669,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),n(670,"p"),e(671,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(672,"a",31),e(673,"Biblioteca de \xEDcones"),t(),e(674,". conforme exemplo abaixo:"),t(),n(675,"pre")(676,"code"),e(677,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),t()(),n(678,"p"),e(679,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),n(680,"em"),e(681,"Font Awesome"),t(),e(682,", da seguinte forma:"),t(),n(683,"pre")(684,"code"),e(685,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),t()(),n(686,"p"),e(687,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(688,"code"),e(689,"TemplateRef"),t(),e(690,", conforme exemplo abaixo:"),t(),n(691,"pre")(692,"code"),e(693,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),t()(),n(694,"blockquote")(695,"p"),e(696,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),n(697,"code"),e(698,"font-size: inherit"),t(),e(699," caso o \xEDcone utilizado n\xE3o aplique-o."),t()()()(),n(700,"tr",15)(701,"td",16)(702,"div",17)(703,"span",18),e(704," (p-keydown)"),o(705,"br"),t()()(),n(706,"td",20)(707,"code",21),e(708,"EventEmitter"),t()(),n(709,"td",22),e(710,"-"),t(),n(711,"td",23)(712,"em")(713,"strong"),e(714,"(opcional)"),t()(),n(715,"p"),e(716,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(717,"code"),e(718,"KeyboardEvent"),t(),e(719," com informa\xE7\xF5es sobre a tecla."),t()()(),n(720,"tr",15)(721,"td",16)(722,"div",24)(723,"span",25),e(724," p-label"),o(725,"br"),t()()(),n(726,"td",20)(727,"code",26),e(728,"string"),t()(),n(729,"td",22),e(730,"-"),t(),n(731,"td",23)(732,"em")(733,"strong"),e(734,"(opcional)"),t()(),n(735,"p"),e(736,"R\xF3tulo do campo."),t()()(),n(737,"tr",15)(738,"td",16)(739,"div",24)(740,"span",25),e(741," p-label-text-wrap"),o(742,"br"),t()()(),n(743,"td",20)(744,"code",27),e(745,"boolean"),t()(),n(746,"td",22)(747,"p")(748,"code"),e(749,"false"),t()()(),n(750,"td",23)(751,"em")(752,"strong"),e(753,"(opcional)"),t()(),n(754,"p"),e(755,"Habilita a quebra autom\xE1tica do texto da propriedade "),n(756,"code"),e(757,"p-label"),t(),e(758,". Quando "),n(759,"code"),e(760,"p-label-text-wrap"),t(),e(761,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),n(762,"tr",15)(763,"td",16)(764,"div",24)(765,"span",25),e(766," p-locale"),o(767,"br"),t()()(),n(768,"td",20)(769,"code",26),e(770,"string"),t()(),n(771,"td",22),e(772,"-"),t(),n(773,"td",23)(774,"em")(775,"strong"),e(776,"(opcional)"),t()(),n(777,"p"),e(778,`Informa o locale(pa\xEDs) para a formata\xE7\xE3o do valor.
Por padr\xE3o o valor ser\xE1 configurado segundo a o m\xF3dulo `),n(779,"a",32)(780,"code"),e(781,"I18n"),t()()(),n(782,"blockquote")(783,"p"),e(784,"Para ver quais linguagens suportadas acesse "),n(785,"a",32)(786,"code"),e(787,"I18n"),t()()()()()(),n(788,"tr",15)(789,"td",16)(790,"div",24)(791,"span",25),e(792,"p-mask"),o(793,"br"),t()()(),n(794,"td",20)(795,"code",26),e(796,"string"),t()(),n(797,"td",22),e(798,"-"),t(),n(799,"td",23)(800,"em")(801,"strong"),e(802,"(opcional)"),t()(),n(803,"p"),e(804,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),t()()(),n(805,"tr",15)(806,"td",16)(807,"div",24)(808,"span",25),e(809,"p-mask-format-model"),o(810,"br"),t()()(),n(811,"td",20)(812,"code",27),e(813,"boolean"),t()(),n(814,"td",22)(815,"p")(816,"code"),e(817,"false"),t()()(),n(818,"td",23)(819,"em")(820,"strong"),e(821,"(opcional)"),t()(),n(822,"p"),e(823,"Indica se o "),n(824,"code"),e(825,"model"),t(),e(826," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),t()()(),n(827,"tr",15)(828,"td",16)(829,"div",24)(830,"span",25),e(831," p-mask-no-length-validation"),o(832,"br"),t()()(),n(833,"td",20)(834,"code",27),e(835,"boolean"),t()(),n(836,"td",22)(837,"p")(838,"code"),e(839,"false"),t()()(),n(840,"td",23)(841,"p"),e(842,"Define se os caracteres especiais da m\xE1scara devem ser ignorados ao validar os comprimentos m\xEDnimo ("),n(843,"code"),e(844,"minLength"),t(),e(845,") e m\xE1ximo ("),n(846,"code"),e(847,"maxLength"),t(),e(848,") do campo."),t(),n(849,"ul")(850,"li"),e(851,"Quando "),n(852,"code"),e(853,"true"),t(),e(854,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),t(),n(855,"li"),e(856,"Quando "),n(857,"code"),e(858,"false"),t(),e(859,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),t()(),n(860,"blockquote")(861,"p"),e(862,"Ser\xE1 ignorado essa propriedade , caso esteja utilizando junto com a propriedade "),n(863,"code"),e(864,"p-mask-format-model"),t(),e(865,"."),t()(),n(866,"p"),e(867,"Exemplo:"),t(),n(868,"pre")(869,"code"),e(870,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),t()(),n(871,"ul")(872,"li"),e(873,"Entrada: "),n(874,"code"),e(875,"123-456"),t(),e(876," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),n(877,"code"),e(878,"-"),t(),e(879,"."),t()()()(),n(880,"tr",15)(881,"td",16)(882,"div",24)(883,"span",25),e(884," p-max"),o(885,"br"),t()()(),n(886,"td",20)(887,"code",28),e(888,"number"),t()(),n(889,"td",22),e(890,"-"),t(),n(891,"td",23)(892,"em")(893,"strong"),e(894,"(opcional)"),t()(),n(895,"p"),e(896,"Valor m\xE1ximo."),t()()(),n(897,"tr",15)(898,"td",16)(899,"div",24)(900,"span",25),e(901," p-maxlength"),o(902,"br"),t()()(),n(903,"td",20)(904,"code",28),e(905,"number"),t()(),n(906,"td",22),e(907,"-"),t(),n(908,"td",23)(909,"em")(910,"strong"),e(911,"(opcional)"),t()(),n(912,"p"),e(913,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),t()()(),n(914,"tr",15)(915,"td",16)(916,"div",24)(917,"span",25),e(918," p-min"),o(919,"br"),t()()(),n(920,"td",20)(921,"code",28),e(922,"number"),t()(),n(923,"td",22),e(924,"-"),t(),n(925,"td",23)(926,"em")(927,"strong"),e(928,"(opcional)"),t()(),n(929,"p"),e(930,"Valor m\xEDnimo."),t()()(),n(931,"tr",15)(932,"td",16)(933,"div",24)(934,"span",25),e(935," p-minlength"),o(936,"br"),t()()(),n(937,"td",20)(938,"code",28),e(939,"number"),t()(),n(940,"td",22),e(941,"-"),t(),n(942,"td",23)(943,"em")(944,"strong"),e(945,"(opcional)"),t()(),n(946,"p"),e(947,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),t()()(),n(948,"tr",15)(949,"td",16)(950,"div",24)(951,"span",25),e(952," name"),o(953,"br"),t()()(),n(954,"td",20)(955,"code",26),e(956,"string"),t()(),n(957,"td",22),e(958,"-"),t(),n(959,"td",23)(960,"p"),e(961,"Nome e identificador do campo."),t()()(),n(962,"tr",15)(963,"td",16)(964,"div",24)(965,"span",25),e(966," p-no-autocomplete"),o(967,"br"),t()()(),n(968,"td",20)(969,"code",27),e(970,"boolean"),t()(),n(971,"td",22)(972,"p")(973,"code"),e(974,"false"),t()()(),n(975,"td",23)(976,"em")(977,"strong"),e(978,"(opcional)"),t()(),n(979,"p"),e(980,"Define a propriedade nativa "),n(981,"code"),e(982,"autocomplete"),t(),e(983," do campo como "),n(984,"code"),e(985,"off"),t(),e(986,"."),t(),n(987,"blockquote")(988,"p"),e(989,"No componente "),n(990,"code"),e(991,"po-password"),t(),e(992," ser\xE1 definido como "),n(993,"code"),e(994,"new-password"),t(),e(995,"."),t()(),n(996,"p"),e(997,"Nos componentes "),n(998,"code"),e(999,"po-password"),t(),e(1e3," e "),n(1001,"code"),e(1002,"po-login"),t(),e(1003," o valor padr\xE3o ser\xE1 "),n(1004,"code"),e(1005,"true"),t(),e(1006,"."),t()()(),n(1007,"tr",15)(1008,"td",16)(1009,"div",24)(1010,"span",25),e(1011," p-optional"),o(1012,"br"),t()()(),n(1013,"td",20)(1014,"code",27),e(1015,"boolean"),t()(),n(1016,"td",22)(1017,"p")(1018,"code"),e(1019,"false"),t()()(),n(1020,"td",23)(1021,"em")(1022,"strong"),e(1023,"(opcional)"),t()(),n(1024,"p"),e(1025,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(1026,"blockquote")(1027,"p"),e(1028,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(1029,"ul")(1030,"li"),e(1031,"O campo conter "),n(1032,"code"),e(1033,"p-required"),t(),e(1034,";"),t(),n(1035,"li"),e(1036,"N\xE3o possuir "),n(1037,"code"),e(1038,"p-help"),t(),e(1039," e/ou "),n(1040,"code"),e(1041,"p-label"),t(),e(1042,"."),t()()()(),n(1043,"tr",15)(1044,"td",16)(1045,"div",24)(1046,"span",25),e(1047,"p-pattern"),o(1048,"br"),t()()(),n(1049,"td",20)(1050,"code",26),e(1051,"string"),t()(),n(1052,"td",22),e(1053,"-"),t(),n(1054,"td",23)(1055,"em")(1056,"strong"),e(1057,"(opcional)"),t()(),n(1058,"p"),e(1059,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),n(1060,"code"),e(1061,"(p-mask)"),t(),e(1062,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),t()()(),n(1063,"tr",15)(1064,"td",16)(1065,"div",24)(1066,"span",25),e(1067," p-placeholder"),o(1068,"br"),t()()(),n(1069,"td",20)(1070,"code",26),e(1071,"string"),t()(),n(1072,"td",22)(1073,"p"),e(1074,"''"),t()(),n(1075,"td",23)(1076,"em")(1077,"strong"),e(1078,"(opcional)"),t()(),n(1079,"p"),e(1080,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(1081,"tr",15)(1082,"td",16)(1083,"div",24)(1084,"span",25),e(1085," p-helper"),o(1086,"br"),t()()(),n(1087,"td",20)(1088,"code",33),e(1089,"PoHelperOptions "),t(),n(1090,"code",26),e(1091," string"),t()(),n(1092,"td",22),e(1093,"-"),t(),n(1094,"td",23)(1095,"em")(1096,"strong"),e(1097,"(opcional)"),t()(),n(1098,"p"),e(1099,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label."),t(),n(1100,"blockquote")(1101,"p"),e(1102,"Caso o "),n(1103,"code"),e(1104,"p-label"),t(),e(1105,` n\xE3o esteja definido, o componente po-helper n\xE3o ser\xE1 exibido.
Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional (`),n(1106,"code"),e(1107,"p-additional-help-tooltip"),t(),e(1108," e "),n(1109,"code"),e(1110,"p-additional-help"),t(),e(1111,") ser\xE1 ignorado."),t()()()(),n(1112,"tr",15)(1113,"td",16)(1114,"div",24)(1115,"span",25),e(1116,"p-readonly"),o(1117,"br"),t()()(),n(1118,"td",20)(1119,"code",27),e(1120,"boolean"),t()(),n(1121,"td",22),e(1122,"-"),t(),n(1123,"td",23)(1124,"em")(1125,"strong"),e(1126,"(opcional)"),t()(),n(1127,"p"),e(1128,"Indica que o campo ser\xE1 somente leitura."),t()()(),n(1129,"tr",15)(1130,"td",16)(1131,"div",24)(1132,"span",25),e(1133,"p-required"),o(1134,"br"),t()()(),n(1135,"td",20)(1136,"code",27),e(1137,"boolean"),t()(),n(1138,"td",22)(1139,"p")(1140,"code"),e(1141,"false"),t()()(),n(1142,"td",23)(1143,"em")(1144,"strong"),e(1145,"(opcional)"),t()(),n(1146,"p"),e(1147,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),n(1148,"blockquote")(1149,"p"),e(1150,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),n(1151,"code"),e(1152,"(p-disabled)"),t(),e(1153,"."),t()()()(),n(1154,"tr",15)(1155,"td",16)(1156,"div",24)(1157,"span",25),e(1158," p-required-field-error-message"),o(1159,"br"),t()()(),n(1160,"td",20)(1161,"code",27),e(1162,"boolean"),t()(),n(1163,"td",22)(1164,"p")(1165,"code"),e(1166,"false"),t()()(),n(1167,"td",23)(1168,"em")(1169,"strong"),e(1170,"(opcional)"),t()(),n(1171,"p"),e(1172,"Exibe a mensagem setada na propriedade "),n(1173,"code"),e(1174,"p-error-pattern"),t(),e(1175," se o campo estiver vazio e for requerido."),t(),n(1176,"blockquote")(1177,"p"),e(1178,"Necess\xE1rio que a propriedade "),n(1179,"code"),e(1180,"p-required"),t(),e(1181," esteja habilitada."),t()()()(),n(1182,"tr",15)(1183,"td",16)(1184,"div",24)(1185,"span",25),e(1186," p-show-required"),o(1187,"br"),t()()(),n(1188,"td",20)(1189,"code",27),e(1190,"boolean"),t()(),n(1191,"td",22),e(1192,"-"),t(),n(1193,"td",23)(1194,"p"),e(1195,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(1196,"blockquote")(1197,"p"),e(1198,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(1199,"ul")(1200,"li"),e(1201,"N\xE3o possuir "),n(1202,"code"),e(1203,"p-help"),t(),e(1204," e/ou "),n(1205,"code"),e(1206,"p-label"),t(),e(1207,"."),t()()()(),n(1208,"tr",15)(1209,"td",16)(1210,"div",24)(1211,"span",25),e(1212," p-size"),o(1213,"br"),t()()(),n(1214,"td",20)(1215,"code",26),e(1216,"string"),t()(),n(1217,"td",22)(1218,"p")(1219,"code"),e(1220,"medium"),t()()(),n(1221,"td",23)(1222,"em")(1223,"strong"),e(1224,"(opcional)"),t()(),n(1225,"p"),e(1226,"Define o tamanho do componente:"),t(),n(1227,"ul")(1228,"li")(1229,"code"),e(1230,"small"),t(),e(1231,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(1232,"li")(1233,"code"),e(1234,"medium"),t(),e(1235,": altura do input como 44px."),t()(),n(1236,"blockquote")(1237,"p"),e(1238,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(1239,"code"),e(1240,"medium"),t(),e(1241,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(1242,"a",34),e(1243,"po-theme"),t(),e(1244,"."),t()()()(),n(1245,"tr",15)(1246,"td",16)(1247,"div",24)(1248,"span",25),e(1249," p-thousand-maxlength"),o(1250,"br"),t()()(),n(1251,"td",20)(1252,"code",28),e(1253,"number"),t()(),n(1254,"td",22)(1255,"p")(1256,"code"),e(1257,"13"),t()()(),n(1258,"td",23)(1259,"em")(1260,"strong"),e(1261,"(opcional)"),t()(),n(1262,"p"),e(1263,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal."),t(),n(1264,"blockquote")(1265,"p")(1266,"strong"),e(1267,"Importante:"),t()()(),n(1268,"ul")(1269,"li"),e(1270,"O valor m\xE1ximo permitido \xE9 13;"),t(),n(1271,"li"),e(1272,"A soma total de "),n(1273,"code"),e(1274,"p-decimals-length"),t(),e(1275," com "),n(1276,"code"),e(1277,"p-thousand-maxlength"),t(),e(1278," limita-se \xE0 16;"),t(),n(1279,"li"),e(1280,"Esta propriedade sobrep\xF5e o valor definido em "),n(1281,"code"),e(1282,"p-decimals-length"),t(),e(1283,"."),t()()()(),n(1284,"tr",15)(1285,"td",16)(1286,"div",24)(1287,"span",25),e(1288," p-upper-case"),o(1289,"br"),t()()(),n(1290,"td",20)(1291,"code",27),e(1292,"boolean"),t()(),n(1293,"td",22),e(1294,"-"),t(),n(1295,"td",23)(1296,"p"),e(1297,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),t()()()(),n(1298,"h3",11),e(1299,"M\xE9todos"),t(),n(1300,"table",35)(1301,"tr",15)(1302,"th",36)(1303,"div",24)(1304,"h4")(1305,"span",25),e(1306," showAdditionalHelp "),t()()()()(),n(1307,"tr",23)(1308,"td",23)(1309,"p"),e(1310,"M\xE9todo que exibe "),n(1311,"code"),e(1312,"p-additionalHelpTooltip"),t(),e(1313," ou executa a a\xE7\xE3o definida em "),n(1314,"code"),e(1315,"p-additionalHelp"),t(),e(1316,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),n(1317,"code"),e(1318,"p-keydown"),t(),e(1319,"."),t(),n(1320,"blockquote")(1321,"p"),e(1322,"Exibe ou oculta o conte\xFAdo do componente "),n(1323,"code"),e(1324,"po-helper"),t(),e(1325," quando o componente estiver com foco e com label vis\xEDvel."),t()(),n(1326,"pre")(1327,"code"),e(1328,`<po-nome-component
 #component
 ...
 p-additional-help-tooltip="Mensagem de ajuda complementar"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),t()(),n(1329,"pre")(1330,"code"),e(1331,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),t()(),n(1332,"pre")(1333,"code"),e(1334,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),o(1335,"br"),n(1336,"table",35)(1337,"tr",15)(1338,"th",36)(1339,"div",24)(1340,"h4")(1341,"span",25),e(1342," focus "),t()()()()(),n(1343,"tr",23)(1344,"td",23)(1345,"p"),e(1346,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(1347,"p"),e(1348,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(1349,"pre")(1350,"code"),e(1351,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),t()()()()(),o(1352,"br"),n(1353,"h3"),e(1354,"Interfaces"),t(),n(1355,"h4",37)(1356,"code",5),e(1357,"ErrorAsyncProperties"),t()(),n(1358,"div",2)(1359,"p"),e(1360,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),t()(),n(1361,"h4",11),e(1362,"Propriedades"),t(),n(1363,"table",12)(1364,"tr",13)(1365,"th",14),e(1366,"Nome"),t(),n(1367,"th",14),e(1368,"Tipo"),t(),n(1369,"th",14),e(1370,"Descri\xE7\xE3o"),t()(),n(1371,"tr",15)(1372,"td",16)(1373,"div",24)(1374,"span",25),e(1375," errorAsync"),o(1376,"br"),t()()(),n(1377,"td",20)(1378,"code",38),e(1379,"(value) => Observable<boolean>"),t()(),n(1380,"td",23)(1381,"p"),e(1382,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(1383,"code"),e(1384,"change"),t(),e(1385," ou "),n(1386,"code"),e(1387,"change-model"),t(),e(1388,", dependendo do valor da propriedade "),n(1389,"code"),e(1390,"triggerMode"),t(),e(1391,"."),t()()(),n(1392,"tr",15)(1393,"td",16)(1394,"div",24)(1395,"span",25),e(1396," triggerMode"),o(1397,"br"),t()()(),n(1398,"td",20)(1399,"code",39),e(1400,"'change' "),t(),n(1401,"code",40),e(1402," 'changeModel'"),t()(),n(1403,"td",23)(1404,"em")(1405,"strong"),e(1406,"(opcional)"),t()(),n(1407,"p"),e(1408,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),n(1409,"code"),e(1410,"change"),t(),e(1411," ou "),n(1412,"code"),e(1413,"change-model"),t(),e(1414,"."),t()()()()())},dependencies:[C],encapsulation:2})}return l})();var he=(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,r){this.route=p,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||l)(I(Y),I(Z))};static \u0275cmp=x({type:l,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Decimal",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),g("p-click",function(){return i.changeTab("doc")}),o(3,"sample-po-decimal-doc"),t(),n(4,"po-tab",3),g("p-click",function(){return i.changeTab("web")}),o(5,"sample-po-decimal-basic-view")(6,"sample-po-decimal-labs-view")(7,"sample-po-decimal-hourly-wage-view")(8,"sample-po-decimal-hourly-wage-reactive-form-view"),t()()()),r&2&&(E("p-actions",i.actions),m(2),E("p-active",i.activeTab==="doc"),m(2),E("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[oe,v,y,re,pe,ce,Ee,ge],encapsulation:2})}return l})();var qe=[{path:"",component:he}],be=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=O({type:l});static \u0275inj=B({imports:[j.forChild(qe),j]})}return l})();var mt=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=O({type:l});static \u0275inj=B({imports:[ae,be]})}return l})();export{mt as DocPoDecimalModule};
