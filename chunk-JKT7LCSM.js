import{o as C,p as ae}from"./chunk-KTXVLMHP.js";import{Ab as y,Da as M,Fa as te,Ma as V,O as $,Q as ee,Sa as ne,Xa as ie,a as H,nb as oe,v as L,zb as v}from"./chunk-4M2FSNLW.js";import{$c as j,Aa as E,Da as w,Dc as F,Fb as _,Gc as W,Hc as q,Ic as N,Jc as R,Kc as T,La as n,Ma as t,N as B,Na as o,Nc as K,Oc as J,Q,Ra as z,Sa as g,Sc as X,U as s,V as c,Xc as Y,Zc as Z,bb as U,cb as e,eb as D,gb as h,hb as b,ib as S,ja as m,ka as I,ob as P,qa as x,ra as O}from"./chunk-CBLD3XJL.js";var le=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-decimal-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","decimal","p-label","PO Decimal"]],template:function(r,i){r&1&&o(0,"po-decimal",0)},dependencies:[M],encapsulation:2})}return l})();var xe=l=>({"docs-sample-code-tabs":l}),re=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-decimal-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Decimal Basic"),t(),n(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-decimal-basic/sample-po-decimal-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-decimal name="decimal" p-label="PO Decimal"> </po-decimal>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-decimal-basic/sample-po-decimal-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-decimal-basic',
  templateUrl: './sample-po-decimal-basic.component.html',
  standalone: false
})
export class SamplePoDecimalBasicComponent {}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-decimal-basic"),t(),o(23,"hr")),r&2&&(m(5),w("po-icon "+i.sampleCodeButtonIcon),m(),D(" ",i.sampleCodeButtonLabel,""),m(),E("ngClass",P(4,xe,i.hideSampleCodeTabs)))},dependencies:[_,C,v,y,le],encapsulation:2})}return l})();var de=(()=>{class l{helperText;decimal;decimalsLength;event;help;icon;label;locale;placeholder;properties;thousandMaxlength;errorPattern;max;min;size;localeOptions=[{value:"pt",label:"Portuguese"},{value:"en",label:"English"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"}];iconOptions=[{value:"an an-shopping-cart-simple",label:"an an-shopping-cart-simple"},{value:"an an-currency-dollar-simple",label:"an an-currency-dollar-simple"},{value:"fa fa-calculator",label:"fa fa-calculator"}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];get maxDecimalsLength(){return 16-this.thousandMaxlength||15}get maxThousandMaxlength(){return 16-this.decimalsLength||13}ngOnInit(){this.restore()}changeEvent(p){this.event=p}restore(){this.helperText="",this.decimal=void 0,this.decimalsLength=void 0,this.event="",this.help=void 0,this.icon=void 0,this.label=void 0,this.locale=void 0,this.placeholder="",this.thousandMaxlength=void 0,this.errorPattern=void 0,this.max=void 0,this.min=void 0,this.size="medium",this.properties=[]}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-decimal-labs"]],standalone:!1,decls:23,vars:44,consts:[["f","ngForm"],["name","decimal",1,"po-md-12",3,"ngModelChange","p-blur","p-change","p-change-model","p-keydown","ngModel","p-helper","p-clean","p-decimals-length","p-disabled","p-help","p-icon","p-label","p-locale","p-error-pattern","p-max","p-min","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-size","p-thousand-maxlength","p-label-text-wrap","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","icon","p-clean","","p-label","Icon",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","min","p-clean","","p-label","Min",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","max","p-clean","","p-label","Max",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","locale","p-clean","","p-label","Locale",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","decimalsLength","p-clean","","p-help","M\xE1ximo 15","p-label","Decimals max length","p-min","0",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-max"],["name","thousandMaxlength","p-clean","","p-help","M\xE1ximo 13","p-label","Thousand max length","p-min","0",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-max"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let d=z();n(0,"po-decimal",1),S("ngModelChange",function(a){return s(d),b(i.decimal,a)||(i.decimal=a),c(a)}),g("p-blur",function(){return s(d),c(i.changeEvent("p-blur"))})("p-change",function(){return s(d),c(i.changeEvent("p-change"))})("p-change-model",function(){return s(d),c(i.changeEvent("p-change-model"))})("p-keydown",function(){return s(d),c(i.changeEvent("p-keydown"))}),t(),o(1,"po-divider"),n(2,"div",2),o(3,"po-info",3)(4,"po-info",4),t(),o(5,"po-divider"),n(6,"form",null,0)(8,"po-input",5),S("ngModelChange",function(a){return s(d),b(i.label,a)||(i.label=a),c(a)}),t(),n(9,"po-input",6),S("ngModelChange",function(a){return s(d),b(i.help,a)||(i.help=a),c(a)}),t(),n(10,"po-input",7),S("ngModelChange",function(a){return s(d),b(i.helperText,a)||(i.helperText=a),c(a)}),t(),n(11,"po-input",8),S("ngModelChange",function(a){return s(d),b(i.placeholder,a)||(i.placeholder=a),c(a)}),t(),n(12,"po-input",9),S("ngModelChange",function(a){return s(d),b(i.errorPattern,a)||(i.errorPattern=a),c(a)}),t(),n(13,"po-select",10),S("ngModelChange",function(a){return s(d),b(i.icon,a)||(i.icon=a),c(a)}),t(),n(14,"po-number",11),S("ngModelChange",function(a){return s(d),b(i.min,a)||(i.min=a),c(a)}),t(),n(15,"po-number",12),S("ngModelChange",function(a){return s(d),b(i.max,a)||(i.max=a),c(a)}),t(),n(16,"po-select",13),S("ngModelChange",function(a){return s(d),b(i.locale,a)||(i.locale=a),c(a)}),t(),n(17,"po-number",14),S("ngModelChange",function(a){return s(d),b(i.decimalsLength,a)||(i.decimalsLength=a),c(a)}),t(),n(18,"po-number",15),S("ngModelChange",function(a){return s(d),b(i.thousandMaxlength,a)||(i.thousandMaxlength=a),c(a)}),t(),n(19,"po-checkbox-group",16),S("ngModelChange",function(a){return s(d),b(i.properties,a)||(i.properties=a),c(a)}),t(),n(20,"po-radio-group",17),S("ngModelChange",function(a){return s(d),b(i.size,a)||(i.size=a),c(a)}),t(),n(21,"div",2)(22,"po-button",18),g("p-click",function(){return s(d),c(i.restore())}),t()()()}r&2&&(h("ngModel",i.decimal),E("p-helper",i.helperText)("p-clean",i.properties.includes("clean"))("p-decimals-length",i.decimalsLength)("p-disabled",i.properties.includes("disabled"))("p-help",i.help)("p-icon",i.icon)("p-label",i.label)("p-locale",i.locale)("p-error-pattern",i.errorPattern)("p-max",i.max)("p-min",i.min)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-thousand-maxlength",i.thousandMaxlength)("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit")),m(3),E("p-value",i.decimal),m(),E("p-value",i.event),m(4),h("ngModel",i.label),m(),h("ngModel",i.help),m(),h("ngModel",i.helperText),m(),h("ngModel",i.placeholder),m(),h("ngModel",i.errorPattern),m(),h("ngModel",i.icon),E("p-options",i.iconOptions),m(),h("ngModel",i.min),m(),h("ngModel",i.max),m(),h("ngModel",i.locale),E("p-options",i.localeOptions),m(),h("ngModel",i.decimalsLength),E("p-max",i.maxDecimalsLength),m(),h("ngModel",i.thousandMaxlength),E("p-max",i.maxThousandMaxlength),m(),h("ngModel",i.properties),E("p-options",i.propertiesOptions),m(),h("ngModel",i.size),E("p-options",i.sizeOptions))},dependencies:[T,W,q,R,N,L,H,$,ee,M,te,V,ne,ie],encapsulation:2})}return l})();var ye=l=>({"docs-sample-code-tabs":l}),pe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-decimal-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Decimal Labs"),t(),n(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-decimal-labs/sample-po-decimal-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-decimal
  class="po-md-12"
  name="decimal"
  [(ngModel)]="decimal"
  [p-helper]="helperText"
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

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

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
  helperText: string;
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
    this.helperText = '';
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
`),t()()()()(),n(21,"div",10),o(22,"sample-po-decimal-hourly-wage-reactive-form"),t(),o(23,"hr")),r&2&&(m(5),w("po-icon "+i.sampleCodeButtonIcon),m(),D(" ",i.sampleCodeButtonLabel,""),m(),E("ngClass",P(4,Me,i.hideSampleCodeTabs)))},dependencies:[_,C,v,y,ue],encapsulation:2})}return l})();var ge=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-decimal-doc"]],standalone:!1,decls:1418,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
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
`),t()(),n(249,"h4",11),e(250,"Propriedades"),t(),n(251,"table",12)(252,"tr",13)(253,"th",14),e(254,"Nome"),t(),n(255,"th",14),e(256,"Tipo"),t(),n(257,"th",14),e(258,"Padr\xE3o"),t(),n(259,"th",14),e(260,"Descri\xE7\xE3o"),t()(),n(261,"tr",15)(262,"td",16)(263,"div",17)(264,"span",18),e(265," (p-additional-help)"),o(266,"br"),t()(),n(267,"div",19),e(268,"Deprecated"),t()(),n(269,"td",20)(270,"code",21),e(271,"EventEmitter"),t()(),n(272,"td",22),e(273,"-"),t(),n(274,"td",23)(275,"em")(276,"strong"),e(277,"(opcional)"),t()(),n(278,"p"),e(279,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),t(),n(280,"blockquote")(281,"p"),e(282,"Essa propriedade est\xE1 "),n(283,"strong"),e(284,"depreciada"),t(),e(285," e ser\xE1 removida na vers\xE3o "),n(286,"code"),e(287,"23.x.x"),t(),e(288,". Recomendamos utilizar a propriedade "),n(289,"code"),e(290,"p-helper"),t(),e(291," que oferece mais recursos e flexibilidade."),t()()()(),n(292,"tr",15)(293,"td",16)(294,"div",24)(295,"span",25),e(296," p-additional-help-tooltip"),o(297,"br"),t()(),n(298,"div",19),e(299,"Deprecated"),t()(),n(300,"td",20)(301,"code",26),e(302,"string"),t()(),n(303,"td",22),e(304,"-"),t(),n(305,"td",23)(306,"em")(307,"strong"),e(308,"(opcional)"),t()(),n(309,"p"),e(310,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),n(311,"code"),e(312,"po-helper"),t(),e(313,`.
`),n(314,"strong"),e(315,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(316,"blockquote")(317,"p"),e(318,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),n(319,"blockquote")(320,"p"),e(321,"Essa propriedade est\xE1 "),n(322,"strong"),e(323,"depreciada"),t(),e(324," e ser\xE1 removida na vers\xE3o "),n(325,"code"),e(326,"23.x.x"),t(),e(327,". Recomendamos utilizar a propriedade "),n(328,"code"),e(329,"p-helper"),t(),e(330," que oferece mais recursos e flexibilidade."),t()()()(),n(331,"tr",15)(332,"td",16)(333,"div",24)(334,"span",25),e(335," p-append-in-body"),o(336,"br"),t()()(),n(337,"td",20)(338,"code",27),e(339,"boolean"),t()(),n(340,"td",22)(341,"p")(342,"code"),e(343,"false"),t()()(),n(344,"td",23)(345,"em")(346,"strong"),e(347,"(opcional)"),t()(),n(348,"p"),e(349,"Define que o popover ("),n(350,"code"),e(351,"p-helper"),t(),e(352," e/ou "),n(353,"code"),e(354,"p-error-limit"),t(),e(355,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),n(356,"blockquote")(357,"p"),e(358,"Quando utilizado com "),n(359,"code"),e(360,"p-helper"),t(),e(361,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),t()()()(),n(362,"tr",15)(363,"td",16)(364,"div",24)(365,"span",25),e(366," p-auto-focus"),o(367,"br"),t()()(),n(368,"td",20)(369,"code",27),e(370,"boolean"),t()(),n(371,"td",22)(372,"p")(373,"code"),e(374,"false"),t()()(),n(375,"td",23)(376,"em")(377,"strong"),e(378,"(opcional)"),t()(),n(379,"p"),e(380,"Aplica foco no elemento ao ser iniciado."),t(),n(381,"blockquote")(382,"p"),e(383,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(384,"tr",15)(385,"td",16)(386,"div",17)(387,"span",18),e(388," (p-blur)"),o(389,"br"),t()()(),n(390,"td",20)(391,"code",21),e(392,"EventEmitter"),t()(),n(393,"td",22),e(394,"-"),t(),n(395,"td",23)(396,"em")(397,"strong"),e(398,"(opcional)"),t()(),n(399,"p"),e(400,"Evento disparado ao sair do campo."),t()()(),n(401,"tr",15)(402,"td",16)(403,"div",17)(404,"span",18),e(405," (p-change)"),o(406,"br"),t()()(),n(407,"td",20)(408,"code",21),e(409,"EventEmitter"),t()(),n(410,"td",22),e(411,"-"),t(),n(412,"td",23)(413,"em")(414,"strong"),e(415,"(opcional)"),t()(),n(416,"p"),e(417,"Evento disparado ao alterar valor e deixar o campo."),t()()(),n(418,"tr",15)(419,"td",16)(420,"div",17)(421,"span",18),e(422," (p-change-model)"),o(423,"br"),t()()(),n(424,"td",20)(425,"code",21),e(426,"EventEmitter"),t()(),n(427,"td",22),e(428,"-"),t(),n(429,"td",23)(430,"em")(431,"strong"),e(432,"(opcional)"),t()(),n(433,"p"),e(434,"Evento disparado ao alterar valor do model."),t()()(),n(435,"tr",15)(436,"td",16)(437,"div",24)(438,"span",25),e(439,"p-clean"),o(440,"br"),t()()(),n(441,"td",20)(442,"code",27),e(443,"boolean"),t()(),n(444,"td",22),e(445,"-"),t(),n(446,"td",23)(447,"em")(448,"strong"),e(449,"(opcional)"),t()(),n(450,"p"),e(451,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t()()(),n(452,"tr",15)(453,"td",16)(454,"div",24)(455,"span",25),e(456," p-decimals-length"),o(457,"br"),t()()(),n(458,"td",20)(459,"code",28),e(460,"number"),t()(),n(461,"td",22)(462,"p")(463,"code"),e(464,"2"),t()()(),n(465,"td",23)(466,"em")(467,"strong"),e(468,"(opcional)"),t()(),n(469,"p"),e(470,"Quantidade m\xE1xima de casas decimais."),t(),n(471,"blockquote")(472,"p")(473,"strong"),e(474,"Importante:"),t()()(),n(475,"ul")(476,"li"),e(477,"O valor m\xE1ximo permitido \xE9 15;"),t(),n(478,"li"),e(479,"A soma total de "),n(480,"code"),e(481,"p-decimals-length"),t(),e(482," com "),n(483,"code"),e(484,"p-thousand-maxlength"),t(),e(485," limita-se \xE0 16;"),t(),n(486,"li"),e(487,"Esta propriedade sobrep\xF5e apenas o valor "),n(488,"strong"),e(489,"padr\xE3o"),t(),e(490," de "),n(491,"code"),e(492,"p-thousand-maxlength"),t(),e(493,";"),t(),n(494,"li"),e(495,"Caso "),n(496,"code"),e(497,"p-thousand-maxlength"),t(),e(498," tenha um valor definido, esta propriedade poder\xE1 receber apenas o valor restante do limite total (16)."),t()()()(),n(499,"tr",15)(500,"td",16)(501,"div",24)(502,"span",25),e(503,"p-disabled"),o(504,"br"),t()()(),n(505,"td",20)(506,"code",27),e(507,"boolean"),t()(),n(508,"td",22)(509,"p")(510,"code"),e(511,"false"),t()()(),n(512,"td",23)(513,"em")(514,"strong"),e(515,"(opcional)"),t()(),n(516,"p"),e(517,"Se verdadeiro, desabilita o campo."),t()()(),n(518,"tr",15)(519,"td",16)(520,"div",24)(521,"span",25),e(522," p-emit-all-changes"),o(523,"br"),t()()(),n(524,"td",20)(525,"code",27),e(526,"boolean"),t()(),n(527,"td",22)(528,"p")(529,"code"),e(530,"false"),t()()(),n(531,"td",23)(532,"em")(533,"strong"),e(534,"(opcional)"),t()(),n(535,"p"),e(536,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),t()()(),n(537,"tr",15)(538,"td",16)(539,"div",17)(540,"span",18),e(541," (p-enter)"),o(542,"br"),t()()(),n(543,"td",20)(544,"code",21),e(545,"EventEmitter"),t()(),n(546,"td",22),e(547,"-"),t(),n(548,"td",23)(549,"em")(550,"strong"),e(551,"(opcional)"),t()(),n(552,"p"),e(553,"Evento disparado ao entrar do campo."),t()()(),n(554,"tr",15)(555,"td",16)(556,"div",24)(557,"span",25),e(558," p-error-async-properties"),o(559,"br"),t()()(),n(560,"td",20)(561,"code",29),e(562,"ErrorAsyncProperties"),t()(),n(563,"td",22),e(564,"-"),t(),n(565,"td",23)(566,"em")(567,"strong"),e(568,"(opcional)"),t()(),n(569,"p"),e(570,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),n(571,"code"),e(572,"Reactive Forms"),t(),e(573,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),n(574,"code"),e(575,"asyncValidators"),t(),e(576,"."),t()()(),n(577,"tr",15)(578,"td",16)(579,"div",24)(580,"span",25),e(581," p-error-limit"),o(582,"br"),t()()(),n(583,"td",20)(584,"code",27),e(585,"boolean"),t()(),n(586,"td",22)(587,"p")(588,"code"),e(589,"false"),t()()(),n(590,"td",23)(591,"em")(592,"strong"),e(593,"(opcional)"),t()(),n(594,"p"),e(595,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(596,"blockquote")(597,"p"),e(598,"Caso essa propriedade seja definida como "),n(599,"code"),e(600,"true"),t(),e(601,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),n(602,"tr",15)(603,"td",16)(604,"div",24)(605,"span",25),e(606," p-error-pattern"),o(607,"br"),t()()(),n(608,"td",20)(609,"code",26),e(610,"string"),t()(),n(611,"td",22),e(612,"-"),t(),n(613,"td",23)(614,"em")(615,"strong"),e(616,"(opcional)"),t()(),n(617,"p"),e(618,"Mensagem que ser\xE1 apresentada quando o "),n(619,"code"),e(620,"pattern"),t(),e(621," ou a m\xE1scara n\xE3o for satisfeita."),t(),n(622,"blockquote")(623,"p"),e(624,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),n(625,"code"),e(626,"p-required-field-error-message"),t(),e(627," em conjunto."),t()()()(),n(628,"tr",15)(629,"td",16)(630,"div",24)(631,"span",25),e(632," p-help"),o(633,"br"),t()()(),n(634,"td",20)(635,"code",26),e(636,"string"),t()(),n(637,"td",22),e(638,"-"),t(),n(639,"td",23)(640,"em")(641,"strong"),e(642,"(opcional)"),t()(),n(643,"p"),e(644,"Texto de apoio do campo."),t()()(),n(645,"tr",15)(646,"td",16)(647,"div",24)(648,"span",25),e(649," p-icon"),o(650,"br"),t()()(),n(651,"td",20)(652,"code",26),e(653,"string "),t(),n(654,"code",30),e(655," TemplateRef<void>"),t()(),n(656,"td",22),e(657,"-"),t(),n(658,"td",23)(659,"em")(660,"strong"),e(661,"(opcional)"),t()(),n(662,"p"),e(663,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),n(664,"p"),e(665,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(666,"a",31),e(667,"Biblioteca de \xEDcones"),t(),e(668,". conforme exemplo abaixo:"),t(),n(669,"pre")(670,"code"),e(671,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),t()(),n(672,"p"),e(673,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),n(674,"em"),e(675,"Font Awesome"),t(),e(676,", da seguinte forma:"),t(),n(677,"pre")(678,"code"),e(679,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),t()(),n(680,"p"),e(681,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(682,"code"),e(683,"TemplateRef"),t(),e(684,", conforme exemplo abaixo:"),t(),n(685,"pre")(686,"code"),e(687,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),t()(),n(688,"blockquote")(689,"p"),e(690,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),n(691,"code"),e(692,"font-size: inherit"),t(),e(693," caso o \xEDcone utilizado n\xE3o aplique-o."),t()()()(),n(694,"tr",15)(695,"td",16)(696,"div",17)(697,"span",18),e(698," (p-keydown)"),o(699,"br"),t()()(),n(700,"td",20)(701,"code",21),e(702,"EventEmitter"),t()(),n(703,"td",22),e(704,"-"),t(),n(705,"td",23)(706,"em")(707,"strong"),e(708,"(opcional)"),t()(),n(709,"p"),e(710,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(711,"code"),e(712,"KeyboardEvent"),t(),e(713," com informa\xE7\xF5es sobre a tecla."),t()()(),n(714,"tr",15)(715,"td",16)(716,"div",24)(717,"span",25),e(718," p-label"),o(719,"br"),t()()(),n(720,"td",20)(721,"code",26),e(722,"string"),t()(),n(723,"td",22),e(724,"-"),t(),n(725,"td",23)(726,"em")(727,"strong"),e(728,"(opcional)"),t()(),n(729,"p"),e(730,"R\xF3tulo do campo."),t()()(),n(731,"tr",15)(732,"td",16)(733,"div",24)(734,"span",25),e(735," p-label-text-wrap"),o(736,"br"),t()()(),n(737,"td",20)(738,"code",27),e(739,"boolean"),t()(),n(740,"td",22)(741,"p")(742,"code"),e(743,"false"),t()()(),n(744,"td",23)(745,"em")(746,"strong"),e(747,"(opcional)"),t()(),n(748,"p"),e(749,"Habilita a quebra autom\xE1tica do texto da propriedade "),n(750,"code"),e(751,"p-label"),t(),e(752,". Quando "),n(753,"code"),e(754,"p-label-text-wrap"),t(),e(755,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),n(756,"tr",15)(757,"td",16)(758,"div",24)(759,"span",25),e(760," p-locale"),o(761,"br"),t()()(),n(762,"td",20)(763,"code",26),e(764,"string"),t()(),n(765,"td",22),e(766,"-"),t(),n(767,"td",23)(768,"em")(769,"strong"),e(770,"(opcional)"),t()(),n(771,"p"),e(772,`Informa o locale(pa\xEDs) para a formata\xE7\xE3o do valor.
Por padr\xE3o o valor ser\xE1 configurado segundo a o m\xF3dulo `),n(773,"a",32)(774,"code"),e(775,"I18n"),t()()(),n(776,"blockquote")(777,"p"),e(778,"Para ver quais linguagens suportadas acesse "),n(779,"a",32)(780,"code"),e(781,"I18n"),t()()()()()(),n(782,"tr",15)(783,"td",16)(784,"div",24)(785,"span",25),e(786,"p-mask"),o(787,"br"),t()()(),n(788,"td",20)(789,"code",26),e(790,"string"),t()(),n(791,"td",22),e(792,"-"),t(),n(793,"td",23)(794,"em")(795,"strong"),e(796,"(opcional)"),t()(),n(797,"p"),e(798,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),t()()(),n(799,"tr",15)(800,"td",16)(801,"div",24)(802,"span",25),e(803,"p-mask-format-model"),o(804,"br"),t()()(),n(805,"td",20)(806,"code",27),e(807,"boolean"),t()(),n(808,"td",22)(809,"p")(810,"code"),e(811,"false"),t()()(),n(812,"td",23)(813,"em")(814,"strong"),e(815,"(opcional)"),t()(),n(816,"p"),e(817,"Indica se o "),n(818,"code"),e(819,"model"),t(),e(820," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),t()()(),n(821,"tr",15)(822,"td",16)(823,"div",24)(824,"span",25),e(825," p-mask-no-length-validation"),o(826,"br"),t()()(),n(827,"td",20)(828,"code",27),e(829,"boolean"),t()(),n(830,"td",22)(831,"p")(832,"code"),e(833,"false"),t()()(),n(834,"td",23)(835,"p"),e(836,"Define se os caracteres especiais da m\xE1scara devem ser ignorados ao validar os comprimentos m\xEDnimo ("),n(837,"code"),e(838,"minLength"),t(),e(839,") e m\xE1ximo ("),n(840,"code"),e(841,"maxLength"),t(),e(842,") do campo."),t(),n(843,"ul")(844,"li"),e(845,"Quando "),n(846,"code"),e(847,"true"),t(),e(848,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),t(),n(849,"li"),e(850,"Quando "),n(851,"code"),e(852,"false"),t(),e(853,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),t()(),n(854,"blockquote")(855,"p"),e(856,"Ser\xE1 ignorado essa propriedade , caso esteja utilizando junto com a propriedade "),n(857,"code"),e(858,"p-mask-format-model"),t(),e(859,"."),t()(),n(860,"p"),e(861,"Exemplo:"),t(),n(862,"pre")(863,"code"),e(864,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),t()(),n(865,"ul")(866,"li"),e(867,"Entrada: "),n(868,"code"),e(869,"123-456"),t(),e(870," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),n(871,"code"),e(872,"-"),t(),e(873,"."),t()()()(),n(874,"tr",15)(875,"td",16)(876,"div",24)(877,"span",25),e(878," p-max"),o(879,"br"),t()()(),n(880,"td",20)(881,"code",28),e(882,"number"),t()(),n(883,"td",22),e(884,"-"),t(),n(885,"td",23)(886,"em")(887,"strong"),e(888,"(opcional)"),t()(),n(889,"p"),e(890,"Valor m\xE1ximo."),t()()(),n(891,"tr",15)(892,"td",16)(893,"div",24)(894,"span",25),e(895," p-maxlength"),o(896,"br"),t()()(),n(897,"td",20)(898,"code",28),e(899,"number"),t()(),n(900,"td",22),e(901,"-"),t(),n(902,"td",23)(903,"em")(904,"strong"),e(905,"(opcional)"),t()(),n(906,"p"),e(907,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),t()()(),n(908,"tr",15)(909,"td",16)(910,"div",24)(911,"span",25),e(912," p-min"),o(913,"br"),t()()(),n(914,"td",20)(915,"code",28),e(916,"number"),t()(),n(917,"td",22),e(918,"-"),t(),n(919,"td",23)(920,"em")(921,"strong"),e(922,"(opcional)"),t()(),n(923,"p"),e(924,"Valor m\xEDnimo."),t()()(),n(925,"tr",15)(926,"td",16)(927,"div",24)(928,"span",25),e(929," p-minlength"),o(930,"br"),t()()(),n(931,"td",20)(932,"code",28),e(933,"number"),t()(),n(934,"td",22),e(935,"-"),t(),n(936,"td",23)(937,"em")(938,"strong"),e(939,"(opcional)"),t()(),n(940,"p"),e(941,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),t()()(),n(942,"tr",15)(943,"td",16)(944,"div",24)(945,"span",25),e(946," name"),o(947,"br"),t()()(),n(948,"td",20)(949,"code",26),e(950,"string"),t()(),n(951,"td",22),e(952,"-"),t(),n(953,"td",23)(954,"p"),e(955,"Nome e identificador do campo."),t()()(),n(956,"tr",15)(957,"td",16)(958,"div",24)(959,"span",25),e(960," p-no-autocomplete"),o(961,"br"),t()()(),n(962,"td",20)(963,"code",27),e(964,"boolean"),t()(),n(965,"td",22)(966,"p")(967,"code"),e(968,"false"),t()()(),n(969,"td",23)(970,"em")(971,"strong"),e(972,"(opcional)"),t()(),n(973,"p"),e(974,"Define a propriedade nativa "),n(975,"code"),e(976,"autocomplete"),t(),e(977," do campo como "),n(978,"code"),e(979,"off"),t(),e(980,"."),t(),n(981,"blockquote")(982,"p"),e(983,"No componente "),n(984,"code"),e(985,"po-password"),t(),e(986," ser\xE1 definido como "),n(987,"code"),e(988,"new-password"),t(),e(989,"."),t()(),n(990,"p"),e(991,"Nos componentes "),n(992,"code"),e(993,"po-password"),t(),e(994," e "),n(995,"code"),e(996,"po-login"),t(),e(997," o valor padr\xE3o ser\xE1 "),n(998,"code"),e(999,"true"),t(),e(1e3,"."),t()()(),n(1001,"tr",15)(1002,"td",16)(1003,"div",24)(1004,"span",25),e(1005," p-optional"),o(1006,"br"),t()()(),n(1007,"td",20)(1008,"code",27),e(1009,"boolean"),t()(),n(1010,"td",22)(1011,"p")(1012,"code"),e(1013,"false"),t()()(),n(1014,"td",23)(1015,"em")(1016,"strong"),e(1017,"(opcional)"),t()(),n(1018,"p"),e(1019,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(1020,"blockquote")(1021,"p"),e(1022,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(1023,"ul")(1024,"li"),e(1025,"O campo conter "),n(1026,"code"),e(1027,"p-required"),t(),e(1028,";"),t(),n(1029,"li"),e(1030,"N\xE3o possuir "),n(1031,"code"),e(1032,"p-help"),t(),e(1033," e/ou "),n(1034,"code"),e(1035,"p-label"),t(),e(1036,"."),t()()()(),n(1037,"tr",15)(1038,"td",16)(1039,"div",24)(1040,"span",25),e(1041,"p-pattern"),o(1042,"br"),t()()(),n(1043,"td",20)(1044,"code",26),e(1045,"string"),t()(),n(1046,"td",22),e(1047,"-"),t(),n(1048,"td",23)(1049,"em")(1050,"strong"),e(1051,"(opcional)"),t()(),n(1052,"p"),e(1053,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),n(1054,"code"),e(1055,"(p-mask)"),t(),e(1056,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),t()()(),n(1057,"tr",15)(1058,"td",16)(1059,"div",24)(1060,"span",25),e(1061," p-placeholder"),o(1062,"br"),t()()(),n(1063,"td",20)(1064,"code",26),e(1065,"string"),t()(),n(1066,"td",22)(1067,"p"),e(1068,"''"),t()(),n(1069,"td",23)(1070,"em")(1071,"strong"),e(1072,"(opcional)"),t()(),n(1073,"p"),e(1074,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(1075,"tr",15)(1076,"td",16)(1077,"div",24)(1078,"span",25),e(1079," p-helper"),o(1080,"br"),t()()(),n(1081,"td",20)(1082,"code",33),e(1083,"PoHelperOptions "),t(),n(1084,"code",26),e(1085," string"),t()(),n(1086,"td",22),e(1087,"-"),t(),n(1088,"td",23)(1089,"em")(1090,"strong"),e(1091,"(opcional)"),t()(),n(1092,"p"),e(1093,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),n(1094,"code"),e(1095,"p-label"),t(),e(1096," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),n(1097,"code"),e(1098,"p-label"),t(),e(1099,"."),t(),n(1100,"blockquote")(1101,"p"),e(1102,"Para mais informa\xE7\xF5es acesse: "),n(1103,"a",34),e(1104,"https://po-ui.io/documentation/po-helper"),t(),e(1105,"."),t()(),n(1106,"blockquote")(1107,"p"),e(1108,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),n(1109,"code"),e(1110,"p-additional-help-tooltip"),t(),e(1111," e "),n(1112,"code"),e(1113,"p-additional-help"),t(),e(1114,") ser\xE1 ignorado."),t()()()(),n(1115,"tr",15)(1116,"td",16)(1117,"div",24)(1118,"span",25),e(1119,"p-readonly"),o(1120,"br"),t()()(),n(1121,"td",20)(1122,"code",27),e(1123,"boolean"),t()(),n(1124,"td",22),e(1125,"-"),t(),n(1126,"td",23)(1127,"em")(1128,"strong"),e(1129,"(opcional)"),t()(),n(1130,"p"),e(1131,"Indica que o campo ser\xE1 somente leitura."),t()()(),n(1132,"tr",15)(1133,"td",16)(1134,"div",24)(1135,"span",25),e(1136,"p-required"),o(1137,"br"),t()()(),n(1138,"td",20)(1139,"code",27),e(1140,"boolean"),t()(),n(1141,"td",22)(1142,"p")(1143,"code"),e(1144,"false"),t()()(),n(1145,"td",23)(1146,"em")(1147,"strong"),e(1148,"(opcional)"),t()(),n(1149,"p"),e(1150,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),n(1151,"blockquote")(1152,"p"),e(1153,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),n(1154,"code"),e(1155,"(p-disabled)"),t(),e(1156,"."),t()()()(),n(1157,"tr",15)(1158,"td",16)(1159,"div",24)(1160,"span",25),e(1161," p-required-field-error-message"),o(1162,"br"),t()()(),n(1163,"td",20)(1164,"code",27),e(1165,"boolean"),t()(),n(1166,"td",22)(1167,"p")(1168,"code"),e(1169,"false"),t()()(),n(1170,"td",23)(1171,"em")(1172,"strong"),e(1173,"(opcional)"),t()(),n(1174,"p"),e(1175,"Exibe a mensagem setada na propriedade "),n(1176,"code"),e(1177,"p-error-pattern"),t(),e(1178," se o campo estiver vazio e for requerido."),t(),n(1179,"blockquote")(1180,"p"),e(1181,"Necess\xE1rio que a propriedade "),n(1182,"code"),e(1183,"p-required"),t(),e(1184," esteja habilitada."),t()()()(),n(1185,"tr",15)(1186,"td",16)(1187,"div",24)(1188,"span",25),e(1189," p-show-required"),o(1190,"br"),t()()(),n(1191,"td",20)(1192,"code",27),e(1193,"boolean"),t()(),n(1194,"td",22),e(1195,"-"),t(),n(1196,"td",23)(1197,"p"),e(1198,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(1199,"blockquote")(1200,"p"),e(1201,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(1202,"ul")(1203,"li"),e(1204,"N\xE3o possuir "),n(1205,"code"),e(1206,"p-help"),t(),e(1207," e/ou "),n(1208,"code"),e(1209,"p-label"),t(),e(1210,"."),t()()()(),n(1211,"tr",15)(1212,"td",16)(1213,"div",24)(1214,"span",25),e(1215," p-size"),o(1216,"br"),t()()(),n(1217,"td",20)(1218,"code",26),e(1219,"string"),t()(),n(1220,"td",22)(1221,"p")(1222,"code"),e(1223,"medium"),t()()(),n(1224,"td",23)(1225,"em")(1226,"strong"),e(1227,"(opcional)"),t()(),n(1228,"p"),e(1229,"Define o tamanho do componente:"),t(),n(1230,"ul")(1231,"li")(1232,"code"),e(1233,"small"),t(),e(1234,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(1235,"li")(1236,"code"),e(1237,"medium"),t(),e(1238,": altura do input como 44px."),t()(),n(1239,"blockquote")(1240,"p"),e(1241,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(1242,"code"),e(1243,"medium"),t(),e(1244,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(1245,"a",35),e(1246,"po-theme"),t(),e(1247,"."),t()()()(),n(1248,"tr",15)(1249,"td",16)(1250,"div",24)(1251,"span",25),e(1252," p-thousand-maxlength"),o(1253,"br"),t()()(),n(1254,"td",20)(1255,"code",28),e(1256,"number"),t()(),n(1257,"td",22)(1258,"p")(1259,"code"),e(1260,"13"),t()()(),n(1261,"td",23)(1262,"em")(1263,"strong"),e(1264,"(opcional)"),t()(),n(1265,"p"),e(1266,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal."),t(),n(1267,"blockquote")(1268,"p")(1269,"strong"),e(1270,"Importante:"),t()()(),n(1271,"ul")(1272,"li"),e(1273,"O valor m\xE1ximo permitido \xE9 13;"),t(),n(1274,"li"),e(1275,"A soma total de "),n(1276,"code"),e(1277,"p-decimals-length"),t(),e(1278," com "),n(1279,"code"),e(1280,"p-thousand-maxlength"),t(),e(1281," limita-se \xE0 16;"),t(),n(1282,"li"),e(1283,"Esta propriedade sobrep\xF5e o valor definido em "),n(1284,"code"),e(1285,"p-decimals-length"),t(),e(1286,"."),t()()()(),n(1287,"tr",15)(1288,"td",16)(1289,"div",24)(1290,"span",25),e(1291," p-upper-case"),o(1292,"br"),t()()(),n(1293,"td",20)(1294,"code",27),e(1295,"boolean"),t()(),n(1296,"td",22),e(1297,"-"),t(),n(1298,"td",23)(1299,"p"),e(1300,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),t()()()(),n(1301,"h3",11),e(1302,"M\xE9todos"),t(),n(1303,"table",36)(1304,"tr",15)(1305,"th",37)(1306,"div",24)(1307,"h4")(1308,"span",25),e(1309," showAdditionalHelp "),t()()()()(),n(1310,"tr",23)(1311,"td",23)(1312,"p"),e(1313,"M\xE9todo que exibe "),n(1314,"code"),e(1315,"p-helper"),t(),e(1316," ou executa a a\xE7\xE3o definida em "),n(1317,"code"),e(1318,"p-helper{eventOnClick}"),t(),e(1319," ou em "),n(1320,"code"),e(1321,"p-additionalHelp"),t(),e(1322,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),n(1323,"code"),e(1324,"p-keydown"),t(),e(1325,"."),t(),n(1326,"blockquote")(1327,"p"),e(1328,"Exibe ou oculta o conte\xFAdo do componente "),n(1329,"code"),e(1330,"po-helper"),t(),e(1331," quando o componente estiver com foco."),t()(),n(1332,"pre")(1333,"code"),e(1334,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),t()(),n(1335,"pre")(1336,"code"),e(1337,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),o(1338,"br"),n(1339,"table",36)(1340,"tr",15)(1341,"th",37)(1342,"div",24)(1343,"h4")(1344,"span",25),e(1345," focus "),t()()()()(),n(1346,"tr",23)(1347,"td",23)(1348,"p"),e(1349,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(1350,"p"),e(1351,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(1352,"pre")(1353,"code"),e(1354,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),t()()()()(),o(1355,"br"),n(1356,"h3"),e(1357,"Interfaces"),t(),n(1358,"h4",38)(1359,"code",5),e(1360,"ErrorAsyncProperties"),t()(),n(1361,"div",2)(1362,"p"),e(1363,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),t()(),n(1364,"h4",11),e(1365,"Propriedades"),t(),n(1366,"table",12)(1367,"tr",13)(1368,"th",14),e(1369,"Nome"),t(),n(1370,"th",14),e(1371,"Tipo"),t(),n(1372,"th",14),e(1373,"Descri\xE7\xE3o"),t()(),n(1374,"tr",15)(1375,"td",16)(1376,"div",24)(1377,"span",25),e(1378," errorAsync"),o(1379,"br"),t()()(),n(1380,"td",20)(1381,"code",39),e(1382,"(value) => Observable<boolean>"),t()(),n(1383,"td",23)(1384,"p"),e(1385,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(1386,"code"),e(1387,"change"),t(),e(1388," ou "),n(1389,"code"),e(1390,"change-model"),t(),e(1391,", dependendo do valor da propriedade "),n(1392,"code"),e(1393,"triggerMode"),t(),e(1394,"."),t()()(),n(1395,"tr",15)(1396,"td",16)(1397,"div",24)(1398,"span",25),e(1399," triggerMode"),o(1400,"br"),t()()(),n(1401,"td",20)(1402,"code",40),e(1403,"'change' "),t(),n(1404,"code",41),e(1405," 'changeModel'"),t()(),n(1406,"td",23)(1407,"em")(1408,"strong"),e(1409,"(opcional)"),t()(),n(1410,"p"),e(1411,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),n(1412,"code"),e(1413,"change"),t(),e(1414," ou "),n(1415,"code"),e(1416,"change-model"),t(),e(1417,"."),t()()()()())},dependencies:[C],encapsulation:2})}return l})();var he=(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,r){this.route=p,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||l)(I(Y),I(Z))};static \u0275cmp=x({type:l,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Decimal",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),g("p-click",function(){return i.changeTab("doc")}),o(3,"sample-po-decimal-doc"),t(),n(4,"po-tab",3),g("p-click",function(){return i.changeTab("web")}),o(5,"sample-po-decimal-basic-view")(6,"sample-po-decimal-labs-view")(7,"sample-po-decimal-hourly-wage-view")(8,"sample-po-decimal-hourly-wage-reactive-form-view"),t()()()),r&2&&(E("p-actions",i.actions),m(2),E("p-active",i.activeTab==="doc"),m(2),E("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[oe,v,y,re,pe,ce,Ee,ge],encapsulation:2})}return l})();var qe=[{path:"",component:he}],be=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=O({type:l});static \u0275inj=B({imports:[j.forChild(qe),j]})}return l})();var mt=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=O({type:l});static \u0275inj=B({imports:[ae,be]})}return l})();export{mt as DocPoDecimalModule};
