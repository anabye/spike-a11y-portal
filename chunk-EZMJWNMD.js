import{o as D,p as be}from"./chunk-VHIWABDT.js";import{Ab as k,Ca as P,Fa as ce,Ma as X,O as de,Q as me,S as se,Sa as ue,Ta as $,U as _,Xa as I,a as N,nb as ge,sa as Z,v as W,zb as x}from"./chunk-RH5KSUEM.js";import{$a as A,Aa as s,Ac as ie,Cb as w,Da as C,Dc as L,Ec as F,Fc as K,Gc as O,Hc as B,Kc as ae,La as t,Lc as oe,Ma as n,N as G,Na as a,Pb as J,Pc as le,Q as H,Ra as V,Sa as b,U as c,Uc as re,V as u,Wc as pe,Yc as ne,_a as z,ab as j,bb as Y,cb as e,eb as y,gb as S,hb as f,ib as h,ja as p,ka as te,lb as R,qa as E,ra as U,rb as T,ub as q}from"./chunk-KZJHT32G.js";var Ee=(()=>{class l{static \u0275fac=function(o){return new(o||l)};static \u0275cmp=E({type:l,selectors:[["sample-po-datepicker-range-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","datepickerRange","p-label","PO Datepicker Range"]],template:function(o,i){o&1&&a(0,"po-datepicker-range",0)},dependencies:[P],encapsulation:2})}return l})();var Pe=l=>({"docs-sample-code-tabs":l}),Se=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||l)};static \u0275cmp=E({type:l,selectors:[["sample-po-datepicker-range-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(a(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Datepicker Range Basic"),n(),t(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-datepicker-range-basic/sample-po-datepicker-range-basic.component.html"),n(),t(13,"pre",7),e(14,`<po-datepicker-range name="datepickerRange" p-label="PO Datepicker Range"> </po-datepicker-range>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-datepicker-range-basic/sample-po-datepicker-range-basic.component.ts"),n(),t(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-datepicker-range-basic',
  templateUrl: './sample-po-datepicker-range-basic.component.html',
  standalone: false
})
export class SamplePoDatepickerRangeBasicComponent {}
`),n()()()()(),t(21,"div",10),a(22,"sample-po-datepicker-range-basic"),n(),a(23,"hr")),o&2&&(p(5),C("po-icon "+i.sampleCodeButtonIcon),p(),y(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",R(4,Pe,i.hideSampleCodeTabs)))},dependencies:[w,D,x,k,Ee],encapsulation:2})}return l})();var he=(()=>{class l{additionalHelpTooltip;clean;customLiterals;datepickerRange;endDate;event;help;label;literals;properties;fieldErrorMessage;startDate;maxDate;minDate;locale;size;propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"}];localeOptions=[{label:"English",value:"en"},{label:"Espa\xF1ol",value:"es"},{label:"Portugu\xEAs",value:"pt"},{label:"P\u0443\u0441\u0441\u043A\u0438\u0439",value:"ru"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(m){this.event=m}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}getDatepickerRange(){return JSON.stringify(this.datepickerRange)}restore(){this.additionalHelpTooltip="",this.clean=void 0,this.customLiterals=void 0,this.endDate=void 0,this.event=void 0,this.help=void 0,this.label=void 0,this.literals=void 0,this.properties=[],this.fieldErrorMessage="",this.startDate=void 0,this.maxDate=void 0,this.minDate=void 0,this.locale=void 0,this.size="medium",setTimeout(()=>this.datepickerRange=void 0)}static \u0275fac=function(o){return new(o||l)};static \u0275cmp=E({type:l,selectors:[["sample-po-datepicker-range-labs"]],standalone:!1,decls:20,vars:38,consts:[["f","ngForm"],["name","datepickerRange",1,"po-sm-12",3,"ngModelChange","p-change","p-keydown","ngModel","p-additional-help-tooltip","p-clean","p-disabled","p-end-date","p-help","p-label","p-literals","p-max-date","p-min-date","p-no-autocomplete","p-optional","p-readonly","p-required","p-field-error-message","p-show-required","p-start-date","p-locale","p-size","p-label-text-wrap","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minDate","p-clean","","p-label","Min date",1,"po-md-6",3,"ngModelChange","ngModel","p-max-date"],["name","maxDate","p-clean","","p-label","Max date",1,"po-md-6",3,"ngModelChange","ngModel","p-min-date"],["name","literals","p-help",'Ex.: { "invalidFormat": "Date in inconsistent format", "startDateGreaterThanEndDate": "End date less than start date" }',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","locale","p-label","Locale",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","restore","p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(o,i){if(o&1){let d=V();t(0,"po-datepicker-range",1),h("ngModelChange",function(r){return c(d),f(i.datepickerRange,r)||(i.datepickerRange=r),u(r)}),b("p-change",function(){return c(d),u(i.changeEvent("p-change"))})("p-keydown",function(){return c(d),u(i.changeEvent("p-keydown"))}),n(),a(1,"po-divider"),t(2,"div",2),a(3,"po-info",3)(4,"po-info",4),n(),a(5,"po-divider"),t(6,"form",null,0)(8,"po-input",5),h("ngModelChange",function(r){return c(d),f(i.label,r)||(i.label=r),u(r)}),n(),t(9,"po-input",6),h("ngModelChange",function(r){return c(d),f(i.help,r)||(i.help=r),u(r)}),n(),t(10,"po-input",7),h("ngModelChange",function(r){return c(d),f(i.additionalHelpTooltip,r)||(i.additionalHelpTooltip=r),u(r)}),n(),t(11,"po-datepicker",8),h("ngModelChange",function(r){return c(d),f(i.minDate,r)||(i.minDate=r),u(r)}),n(),t(12,"po-datepicker",9),h("ngModelChange",function(r){return c(d),f(i.maxDate,r)||(i.maxDate=r),u(r)}),n(),t(13,"po-input",10),h("ngModelChange",function(r){return c(d),f(i.literals,r)||(i.literals=r),u(r)}),b("p-change",function(){return c(d),u(i.changeLiterals())}),n(),t(14,"po-input",11),h("ngModelChange",function(r){return c(d),f(i.fieldErrorMessage,r)||(i.fieldErrorMessage=r),u(r)}),n(),t(15,"po-select",12),h("ngModelChange",function(r){return c(d),f(i.locale,r)||(i.locale=r),u(r)}),n(),t(16,"po-checkbox-group",13),h("ngModelChange",function(r){return c(d),f(i.properties,r)||(i.properties=r),u(r)}),n(),t(17,"po-radio-group",14),h("ngModelChange",function(r){return c(d),f(i.size,r)||(i.size=r),u(r)}),n(),t(18,"div",2)(19,"po-button",15),b("p-click",function(){return c(d),u(i.restore())}),n()()()}o&2&&(S("ngModel",i.datepickerRange),s("p-additional-help-tooltip",i.additionalHelpTooltip)("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-end-date",i.endDate)("p-help",i.help)("p-label",i.label)("p-literals",i.customLiterals)("p-max-date",i.maxDate)("p-min-date",i.minDate)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-field-error-message",i.fieldErrorMessage)("p-show-required",i.properties.includes("showRequired"))("p-start-date",i.startDate)("p-locale",i.locale)("p-size",i.size)("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit")),p(3),s("p-value",i.getDatepickerRange()),p(),s("p-value",i.event),p(4),S("ngModel",i.label),p(),S("ngModel",i.help),p(),S("ngModel",i.additionalHelpTooltip),p(),S("ngModel",i.minDate),s("p-max-date",i.maxDate),p(),S("ngModel",i.maxDate),s("p-min-date",i.minDate),p(),S("ngModel",i.literals),p(),S("ngModel",i.fieldErrorMessage),p(),S("ngModel",i.locale),s("p-options",i.localeOptions),p(),S("ngModel",i.properties),s("p-options",i.propertiesOptions),p(),S("ngModel",i.size),s("p-options",i.sizeOptions))},dependencies:[B,L,F,O,K,W,N,de,me,se,P,ce,ue,I],encapsulation:2})}return l})();var Te=l=>({"docs-sample-code-tabs":l}),ve=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||l)};static \u0275cmp=E({type:l,selectors:[["sample-po-datepicker-range-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(a(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Datepicker Range Labs"),n(),t(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-datepicker-range-labs/sample-po-datepicker-range-labs.component.html"),n(),t(13,"pre",7),e(14,`<po-datepicker-range
  class="po-sm-12"
  name="datepickerRange"
  [(ngModel)]="datepickerRange"
  [p-additional-help-tooltip]="additionalHelpTooltip"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-end-date]="endDate"
  [p-help]="help"
  [p-label]="label"
  [p-literals]="customLiterals"
  [p-max-date]="maxDate"
  [p-min-date]="minDate"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-show-required]="properties.includes('showRequired')"
  [p-start-date]="startDate"
  [p-locale]="locale"
  [p-size]="size"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  (p-change)="changeEvent('p-change')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
>
</po-datepicker-range>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="getDatepickerRange()"> </po-info>

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

  <po-datepicker class="po-md-6" name="minDate" [(ngModel)]="minDate" p-clean p-label="Min date" [p-max-date]="maxDate">
  </po-datepicker>

  <po-datepicker class="po-md-6" name="maxDate" [(ngModel)]="maxDate" p-clean p-label="Max date" [p-min-date]="minDate">
  </po-datepicker>

  <po-input
    class="po-md-12 po-lg-6"
    name="literals"
    [(ngModel)]="literals"
    p-help='Ex.: { "invalidFormat": "Date in inconsistent format", "startDateGreaterThanEndDate": "End date less than start date" }'
    p-label="Literals"
    (p-change)="changeLiterals()"
  >
  </po-input>

  <po-input
    class="po-md-6"
    name="fieldErrorMessage"
    [(ngModel)]="fieldErrorMessage"
    p-clean
    p-label="Field Error Message"
  >
  </po-input>

  <po-select class="po-md-6" name="locale" p-label="Locale" [(ngModel)]="locale" [p-options]="localeOptions">
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
    <po-button class="po-lg-3 po-md-6" name="restore" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-datepicker-range-labs/sample-po-datepicker-range-labs.component.ts"),n(),t(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoDatepickerRange,
  PoDatepickerRangeLiterals,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-datepicker-range-labs',
  templateUrl: './sample-po-datepicker-range-labs.component.html',
  standalone: false
})
export class SamplePoDatepickerRangeLabsComponent implements OnInit {
  additionalHelpTooltip: string;
  clean: boolean;
  customLiterals: PoDatepickerRangeLiterals;
  datepickerRange: PoDatepickerRange;
  endDate: string | Date;
  event: string;
  help: string;
  label: string;
  literals: string;
  properties: Array<string>;
  fieldErrorMessage: string;
  startDate: string | Date;
  maxDate: string | Date;
  minDate: string | Date;
  locale: string;
  size: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' }
  ];

  public readonly localeOptions: Array<PoSelectOption> = [
    { label: 'English', value: 'en' },
    { label: 'Espa\xF1ol', value: 'es' },
    { label: 'Portugu\xEAs', value: 'pt' },
    { label: 'P\u0443\u0441\u0441\u043A\u0438\u0439', value: 'ru' }
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

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  getDatepickerRange() {
    return JSON.stringify(this.datepickerRange);
  }

  restore() {
    this.additionalHelpTooltip = '';
    this.clean = undefined;
    this.customLiterals = undefined;
    this.endDate = undefined;
    this.event = undefined;
    this.help = undefined;
    this.label = undefined;
    this.literals = undefined;
    this.properties = [];
    this.fieldErrorMessage = '';
    this.startDate = undefined;
    this.maxDate = undefined;
    this.minDate = undefined;
    this.locale = undefined;
    this.size = 'medium';
    setTimeout(() => (this.datepickerRange = undefined));
  }
}
`),n()()()()(),t(21,"div",10),a(22,"sample-po-datepicker-range-labs"),n(),a(23,"hr")),o&2&&(p(5),C("po-icon "+i.sampleCodeButtonIcon),p(),y(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",R(4,Te,i.hideSampleCodeTabs)))},dependencies:[w,D,x,k,he],encapsulation:2})}return l})();var Le=["formVacationSuggestion"],xe=(()=>{class l{poNotification=H(Z);formVacationSuggestion;poModal;datepickerRange;quantityOfDays=void 0;reason;cancel={action:()=>{this.poModal.close()},label:"Cancel"};submit={action:()=>{this.poModal.close(),this.formVacationSuggestion.reset(),this.poNotification.success("Vacation suggestion submitted!")},label:"Submit"};get validateForm(){return!(this.formVacationSuggestion.valid&&this.datepickerRange&&this.datepickerRange.start&&this.datepickerRange.end)}calculateQuantityOfVacationDays(){let m=new Date(this.datepickerRange.start),o=new Date(this.datepickerRange.end);this.quantityOfDays=Math.floor((Date.UTC(o.getFullYear(),o.getMonth(),o.getDate())-Date.UTC(m.getFullYear(),m.getMonth(),m.getDate()))/(1e3*60*60*24))}clean(){this.datepickerRange=void 0,this.quantityOfDays=void 0,this.reason=void 0}static \u0275fac=function(o){return new(o||l)};static \u0275cmp=E({type:l,selectors:[["sample-po-datepicker-range-vacations"]],viewQuery:function(o,i){if(o&1&&(z(Le,7),z(_,7)),o&2){let d;A(d=j())&&(i.formVacationSuggestion=d.first),A(d=j())&&(i.poModal=d.first)}},standalone:!1,decls:21,vars:18,consts:[["formVacationSuggestion","ngForm"],["modalVacationSuggestion",""],["p-label","Vacation suggestion",1,"po-md-9"],[1,"po-row"],["name","datepickerRange","p-clean","","p-label","Select the period","p-required","",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","number","p-disabled","","p-label","Quantity of days","p-required","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","textarea","p-label","Reason",1,"po-md-9",3,"ngModelChange","ngModel"],["p-label","Clean",1,"po-md-2","po-offset-md-5","po-offset-lg-5","po-offset-xl-5",3,"p-click"],["p-label","Submit",1,"po-md-2",3,"p-click","p-disabled"],["p-hide-close","","p-title","Confirm vacation suggestion",3,"p-primary-action","p-secondary-action"],["p-label","Initial period",1,"po-md-4",3,"p-value"],["p-label","Final period",1,"po-md-4",3,"p-value"],["p-label","Quantity of days",1,"po-md-4",3,"p-value"],["p-disabled","","p-label","Reason","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"]],template:function(o,i){if(o&1){let d=V();t(0,"form",null,0),a(2,"po-divider",2),t(3,"div",3)(4,"po-datepicker-range",4),h("ngModelChange",function(r){return c(d),f(i.datepickerRange,r)||(i.datepickerRange=r),u(r)}),b("p-change",function(){return c(d),u(i.calculateQuantityOfVacationDays())}),n(),t(5,"po-number",5),h("ngModelChange",function(r){return c(d),f(i.quantityOfDays,r)||(i.quantityOfDays=r),u(r)}),n()(),t(6,"div",3)(7,"po-textarea",6),h("ngModelChange",function(r){return c(d),f(i.reason,r)||(i.reason=r),u(r)}),n()(),t(8,"div",3)(9,"po-button",7),b("p-click",function(){return c(d),u(i.clean())}),n(),t(10,"po-button",8),b("p-click",function(){c(d);let r=Y(12);return u(r.open())}),n()()(),t(11,"po-modal",9,1)(13,"div",3),a(14,"po-info",10),T(15,"date"),a(16,"po-info",11),T(17,"date"),a(18,"po-info",12),n(),t(19,"div",3)(20,"po-textarea",13),h("ngModelChange",function(r){return c(d),f(i.reason,r)||(i.reason=r),u(r)}),n()()()}o&2&&(p(4),S("ngModel",i.datepickerRange),p(),S("ngModel",i.quantityOfDays),p(2),S("ngModel",i.reason),p(3),s("p-disabled",i.validateForm),p(),s("p-primary-action",i.submit)("p-secondary-action",i.cancel),p(3),s("p-value",q(15,10,i.datepickerRange==null?null:i.datepickerRange.start,"longDate","+0000")),p(2),s("p-value",q(17,14,i.datepickerRange==null?null:i.datepickerRange.end,"longDate","+0000")),p(2),s("p-value",i.quantityOfDays),p(2),S("ngModel",i.reason))},dependencies:[B,L,F,O,K,W,N,P,X,$,I,_,J],encapsulation:2})}return l})();var Oe=l=>({"docs-sample-code-tabs":l}),ke=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||l)};static \u0275cmp=E({type:l,selectors:[["sample-po-datepicker-range-vacations-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(a(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Datepicker Range - Vacations Suggestion"),n(),t(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-datepicker-range-vacations/sample-po-datepicker-range-vacations.component.html"),n(),t(13,"pre",7),e(14,`<form #formVacationSuggestion="ngForm">
  <po-divider class="po-md-9" p-label="Vacation suggestion"> </po-divider>

  <div class="po-row">
    <po-datepicker-range
      class="po-md-6"
      name="datepickerRange"
      [(ngModel)]="datepickerRange"
      p-clean
      p-label="Select the period"
      p-required
      (p-change)="calculateQuantityOfVacationDays()"
    >
    </po-datepicker-range>

    <po-number
      class="po-md-3"
      name="number"
      [(ngModel)]="quantityOfDays"
      p-disabled
      p-label="Quantity of days"
      p-required
    >
    </po-number>
  </div>

  <div class="po-row">
    <po-textarea class="po-md-9" name="textarea" [(ngModel)]="reason" p-label="Reason"> </po-textarea>
  </div>

  <div class="po-row">
    <po-button class="po-md-2 po-offset-md-5 po-offset-lg-5 po-offset-xl-5" p-label="Clean" (p-click)="clean()">
    </po-button>

    <po-button class="po-md-2" p-label="Submit" [p-disabled]="validateForm" (p-click)="modalVacationSuggestion.open()">
    </po-button>
  </div>
</form>

<po-modal
  #modalVacationSuggestion
  p-hide-close
  p-title="Confirm vacation suggestion"
  [p-primary-action]="submit"
  [p-secondary-action]="cancel"
>
  <div class="po-row">
    <po-info class="po-md-4" p-label="Initial period" [p-value]="datepickerRange?.start | date: 'longDate' : '+0000'">
    </po-info>

    <po-info class="po-md-4" p-label="Final period" [p-value]="datepickerRange?.end | date: 'longDate' : '+0000'">
    </po-info>

    <po-info class="po-md-4" p-label="Quantity of days" [p-value]="quantityOfDays"> </po-info>
  </div>

  <div class="po-row">
    <po-textarea class="po-md-12" [(ngModel)]="reason" p-disabled p-label="Reason" p-required> </po-textarea>
  </div>
</po-modal>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-datepicker-range-vacations/sample-po-datepicker-range-vacations.component.ts"),n(),t(19,"pre",9),e(20,`import { Component, ViewChild, inject } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { PoDatepickerRange, PoModalAction, PoModalComponent, PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-datepicker-range-vacations',
  templateUrl: './sample-po-datepicker-range-vacations.component.html',
  standalone: false
})
export class SamplePoDatepickerRangeVacationsComponent {
  private poNotification = inject(PoNotificationService);

  @ViewChild('formVacationSuggestion', { static: true }) formVacationSuggestion: UntypedFormControl;
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  datepickerRange: PoDatepickerRange;
  quantityOfDays: number = undefined;
  reason: string;

  cancel: PoModalAction = {
    action: () => {
      this.poModal.close();
    },
    label: 'Cancel'
  };

  submit: PoModalAction = {
    action: () => {
      this.poModal.close();
      this.formVacationSuggestion.reset();
      this.poNotification.success('Vacation suggestion submitted!');
    },
    label: 'Submit'
  };

  get validateForm() {
    return !(
      this.formVacationSuggestion.valid &&
      this.datepickerRange &&
      this.datepickerRange.start &&
      this.datepickerRange.end
    );
  }

  calculateQuantityOfVacationDays() {
    const start = new Date(this.datepickerRange.start);
    const end = new Date(this.datepickerRange.end);

    this.quantityOfDays = Math.floor(
      (Date.UTC(end.getFullYear(), end.getMonth(), end.getDate()) -
        Date.UTC(start.getFullYear(), start.getMonth(), start.getDate())) /
        (1000 * 60 * 60 * 24)
    );
  }

  clean() {
    this.datepickerRange = undefined;
    this.quantityOfDays = undefined;
    this.reason = undefined;
  }
}
`),n()()()()(),t(21,"div",10),a(22,"sample-po-datepicker-range-vacations"),n(),a(23,"hr")),o&2&&(p(5),C("po-icon "+i.sampleCodeButtonIcon),p(),y(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",R(4,Oe,i.hideSampleCodeTabs)))},dependencies:[w,D,x,k,xe],encapsulation:2})}return l})();var De=(()=>{class l{poNotification=H(Z);formBuilder=H(le);poModal;datepickerRange;formVacationSuggestion;quantityOfDays;reason;cancel={action:()=>{this.poModal.close()},label:"Cancel"};submit={action:()=>{this.poModal.close(),this.formVacationSuggestion.reset(),this.poNotification.success("Vacation suggestion submitted!")},label:"Submit"};get validateForm(){return!(this.formVacationSuggestion.valid&&this.formVacationSuggestion.get("datepickerRange").value.start&&this.formVacationSuggestion.get("datepickerRange").value.end)}ngOnInit(){this.formVacationSuggestion=this.formBuilder.group({datepickerRange:[void 0,ie.required],quantityOfDays:[void 0],reason:[void 0]})}calculateQuantityOfVacationDays(){let m=new Date(this.formVacationSuggestion.get("datepickerRange").value.start),o=new Date(this.formVacationSuggestion.get("datepickerRange").value.end),i=Math.floor((Date.UTC(o.getFullYear(),o.getMonth(),o.getDate())-Date.UTC(m.getFullYear(),m.getMonth(),m.getDate()))/(1e3*60*60*24));this.formVacationSuggestion.get("quantityOfDays").setValue(i)}clean(){this.formVacationSuggestion.reset()}submitForm(){this.datepickerRange=this.formVacationSuggestion.get("datepickerRange").value,this.reason=this.formVacationSuggestion.get("reason").value,this.quantityOfDays=this.formVacationSuggestion.get("quantityOfDays").value}static \u0275fac=function(o){return new(o||l)};static \u0275cmp=E({type:l,selectors:[["sample-po-datepicker-range-vacations-reactive-form"]],viewQuery:function(o,i){if(o&1&&z(_,7),o&2){let d;A(d=j())&&(i.poModal=d.first)}},standalone:!1,decls:20,vars:16,consts:[["modalVacationSuggestion",""],[3,"formGroup"],["p-label","Vacation suggestion",1,"po-md-9"],[1,"po-row"],["formControlName","datepickerRange","p-clean","","p-label","Select the period","p-required","",1,"po-md-6",3,"p-change"],["formControlName","quantityOfDays","p-disabled","","p-label","Quantity of days","p-required","",1,"po-md-3"],["formControlName","reason","p-label","Reason",1,"po-md-9"],["p-label","Clean",1,"po-md-2","po-offset-md-5","po-offset-lg-5","po-offset-xl-5",3,"p-click"],["p-label","Submit",1,"po-md-2",3,"p-click","p-disabled"],["p-hide-close","","p-title","Confirm vacation suggestion",3,"p-primary-action","p-secondary-action"],["p-label","Initial period",1,"po-md-4",3,"p-value"],["p-label","Final period",1,"po-md-4",3,"p-value"],["p-label","Quantity of days",1,"po-md-4",3,"p-value"],["p-disabled","","p-label","Reason","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"]],template:function(o,i){if(o&1){let d=V();t(0,"form",1),a(1,"po-divider",2),t(2,"div",3)(3,"po-datepicker-range",4),b("p-change",function(){return c(d),u(i.calculateQuantityOfVacationDays())}),n(),a(4,"po-number",5),n(),t(5,"div",3),a(6,"po-textarea",6),n(),t(7,"div",3)(8,"po-button",7),b("p-click",function(){return c(d),u(i.clean())}),n(),t(9,"po-button",8),b("p-click",function(){c(d);let r=Y(11);return i.submitForm(),u(r.open())}),n()()(),t(10,"po-modal",9,0)(12,"div",3),a(13,"po-info",10),T(14,"date"),a(15,"po-info",11),T(16,"date"),a(17,"po-info",12),n(),t(18,"div",3)(19,"po-textarea",13),h("ngModelChange",function(r){return c(d),f(i.reason,r)||(i.reason=r),u(r)}),n()()()}o&2&&(s("formGroup",i.formVacationSuggestion),p(9),s("p-disabled",i.validateForm),p(),s("p-primary-action",i.submit)("p-secondary-action",i.cancel),p(3),s("p-value",q(14,8,i.datepickerRange==null?null:i.datepickerRange.start,"longDate","+0000")),p(2),s("p-value",q(16,12,i.datepickerRange==null?null:i.datepickerRange.end,"longDate","+0000")),p(2),s("p-value",i.quantityOfDays),p(2),S("ngModel",i.reason))},dependencies:[B,L,F,O,ae,oe,W,N,P,X,$,I,_,J],encapsulation:2})}return l})();var We=l=>({"docs-sample-code-tabs":l}),Ce=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||l)};static \u0275cmp=E({type:l,selectors:[["sample-po-datepicker-range-vacations-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(a(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Datepicker Range - Vacations Reactive Form"),n(),t(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-datepicker-range-vacations-reactive-form/sample-po-datepicker-range-vacations-reactive-form.component.html"),n(),t(13,"pre",7),e(14,`<form [formGroup]="formVacationSuggestion">
  <po-divider class="po-md-9" p-label="Vacation suggestion"> </po-divider>

  <div class="po-row">
    <po-datepicker-range
      class="po-md-6"
      formControlName="datepickerRange"
      p-clean
      p-label="Select the period"
      p-required
      (p-change)="calculateQuantityOfVacationDays()"
    >
    </po-datepicker-range>

    <po-number class="po-md-3" formControlName="quantityOfDays" p-disabled p-label="Quantity of days" p-required>
    </po-number>
  </div>

  <div class="po-row">
    <po-textarea class="po-md-9" formControlName="reason" p-label="Reason"> </po-textarea>
  </div>

  <div class="po-row">
    <po-button class="po-md-2 po-offset-md-5 po-offset-lg-5 po-offset-xl-5" p-label="Clean" (p-click)="clean()">
    </po-button>

    <po-button
      class="po-md-2"
      p-label="Submit"
      [p-disabled]="validateForm"
      (p-click)="submitForm(); modalVacationSuggestion.open()"
    >
    </po-button>
  </div>
</form>

<po-modal
  #modalVacationSuggestion
  p-hide-close
  p-title="Confirm vacation suggestion"
  [p-primary-action]="submit"
  [p-secondary-action]="cancel"
>
  <div class="po-row">
    <po-info class="po-md-4" p-label="Initial period" [p-value]="datepickerRange?.start | date: 'longDate' : '+0000'">
    </po-info>

    <po-info class="po-md-4" p-label="Final period" [p-value]="datepickerRange?.end | date: 'longDate' : '+0000'">
    </po-info>

    <po-info class="po-md-4" p-label="Quantity of days" [p-value]="quantityOfDays"> </po-info>
  </div>

  <div class="po-row">
    <po-textarea class="po-md-12" [(ngModel)]="reason" p-disabled p-label="Reason" p-required> </po-textarea>
  </div>
</po-modal>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-datepicker-range-vacations-reactive-form/sample-po-datepicker-range-vacations-reactive-form.component.ts"),n(),t(19,"pre",9),e(20,`import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoDatepickerRange, PoModalAction, PoModalComponent, PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-datepicker-range-vacations-reactive-form',
  templateUrl: './sample-po-datepicker-range-vacations-reactive-form.component.html',
  standalone: false
})
export class SamplePoDatepickerRangeVacationsReactiveFormComponent implements OnInit {
  private poNotification = inject(PoNotificationService);
  private formBuilder = inject(UntypedFormBuilder);

  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  datepickerRange: PoDatepickerRange;
  formVacationSuggestion: UntypedFormGroup;
  quantityOfDays: number;
  reason: string;

  cancel: PoModalAction = {
    action: () => {
      this.poModal.close();
    },
    label: 'Cancel'
  };

  submit: PoModalAction = {
    action: () => {
      this.poModal.close();
      this.formVacationSuggestion.reset();
      this.poNotification.success('Vacation suggestion submitted!');
    },
    label: 'Submit'
  };

  get validateForm() {
    return !(
      this.formVacationSuggestion.valid &&
      this.formVacationSuggestion.get('datepickerRange').value.start &&
      this.formVacationSuggestion.get('datepickerRange').value.end
    );
  }

  ngOnInit() {
    this.formVacationSuggestion = this.formBuilder.group({
      datepickerRange: [undefined, Validators.required],
      quantityOfDays: [undefined],
      reason: [undefined]
    });
  }

  calculateQuantityOfVacationDays() {
    const start = new Date(this.formVacationSuggestion.get('datepickerRange').value.start);
    const end = new Date(this.formVacationSuggestion.get('datepickerRange').value.end);

    const result = Math.floor(
      (Date.UTC(end.getFullYear(), end.getMonth(), end.getDate()) -
        Date.UTC(start.getFullYear(), start.getMonth(), start.getDate())) /
        (1000 * 60 * 60 * 24)
    );

    this.formVacationSuggestion.get('quantityOfDays').setValue(result);
  }

  clean() {
    this.formVacationSuggestion.reset();
  }

  submitForm() {
    this.datepickerRange = this.formVacationSuggestion.get('datepickerRange').value;
    this.reason = this.formVacationSuggestion.get('reason').value;
    this.quantityOfDays = this.formVacationSuggestion.get('quantityOfDays').value;
  }
}
`),n()()()()(),t(21,"div",10),a(22,"sample-po-datepicker-range-vacations-reactive-form"),n(),a(23,"hr")),o&2&&(p(5),C("po-icon "+i.sampleCodeButtonIcon),p(),y(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",R(4,We,i.hideSampleCodeTabs)))},dependencies:[w,D,x,k,De],encapsulation:2})}return l})();var ye=(()=>{class l{static \u0275fac=function(o){return new(o||l)};static \u0275cmp=E({type:l,selectors:[["sample-po-datepicker-range-doc"]],standalone:!1,decls:968,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["id","accepted-formats"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Date"],["pan","",1,"docs-api-property-type","PoDatepickerRangeLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["href","/documentation/po-datepicker-range#accepted-formats"]],template:function(o,i){o&1&&(t(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),n()(),t(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),n(),t(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),t(10,"code"),e(11,"FormsModule"),n(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),t(13,"code"),e(14,"ReactiveFormsModule"),n(),e(15,", ambos nativos do Angular."),n()()(),t(16,"h3",3),e(17,"Componente"),n(),t(18,"h4",4)(19,"code",5),e(20,"PoDatepickerRangeComponent"),n()(),t(21,"div",2)(22,"p"),e(23,"O "),t(24,"code"),e(25,"po-datepicker-range"),n(),e(26,` \xE9 um componente para sele\xE7\xE3o de um per\xEDodo entre duas datas, onde \xE9 poss\xEDvel informar apenas
a data inicial ou a data final.`),n(),t(27,"p"),e(28,"O componente "),t(29,"code"),e(30,"[(ngModel)]"),n(),e(31," do "),t(32,"code"),e(33,"po-datepicker-range"),n(),e(34,` trabalha com um objeto que implementa a interface
`),t(35,"code"),e(36,"PoDatepickerRange"),n(),e(37,", contendo as seguintes propriedades:"),n(),t(38,"pre")(39,"code"),e(40,`{ "start": '2017-11-28', "end": '2017-11-30' }
`),n()(),t(41,"p"),a(42,"a",6),e(43,`
Este componente pode receber os seguintes formatos de data:`),n(),t(44,"ul")(45,"li")(46,"p")(47,"strong"),e(48,"Data e hora combinados (E8601DZw): yyyy-mm-ddThh:mm:ss+|-hh:mm"),n()(),t(49,"pre")(50,"code"),e(51,`'2017-11-28T00:00:00-02:00';
`),n()()(),t(52,"li")(53,"p")(54,"strong"),e(55,"Data (E8601DAw.): yyyy-mm-dd"),n()(),t(56,"pre")(57,"code"),e(58,`'2017-11-28';
`),n()()(),t(59,"li")(60,"p")(61,"strong"),e(62,"JavaScript Date Object:"),n()(),t(63,"pre")(64,"code"),e(65,`new Date(2017, 10, 28);
`),n()()()(),t(66,"blockquote")(67,"p"),e(68,"O componente respeitar\xE1 o formato passado para o "),t(69,"em"),e(70,"model"),n(),e(71,` via codifica\xE7\xE3o. Por\xE9m, caso seja feita altera\xE7\xE3o em algum
dos valores de data em tela, o componente atribuir\xE1 o formato `),t(72,"strong"),e(73,"Data (E8601DAw.): yyyy-mm-dd"),n(),e(74," ao model."),n()(),t(75,"p"),e(76,"Importante:"),n(),t(77,"ul")(78,"li"),e(79,"Quando preenchidas a data inicial e final, a data inicial deve ser sempre menor ou igual a data final;"),n(),t(80,"li"),e(81,"Ao passar uma data inv\xE1lida via codifica\xE7\xE3o, o valor ser\xE1 mantido no "),t(82,"em"),e(83,"model"),n(),e(84," e o "),t(85,"code"),e(86,"input"),n(),e(87," da tela aparecer\xE1 vazio;"),n(),t(88,"li"),e(89,"Permite trabalhar com as duas datas separadamente atrav\xE9s das propriedades "),t(90,"code"),e(91,"p-start-date"),n(),e(92," e "),t(93,"code"),e(94,"p-end-date"),n(),e(95,` no lugar do
`),t(96,"code"),e(97,"[(ngModel)]"),n(),e(98,", no entanto sem a valida\xE7\xE3o do formul\xE1rio;"),n(),t(99,"li"),e(100,"Para a valida\xE7\xE3o do formul\xE1rio, utilize o "),t(101,"code"),e(102,"[(ngModel)]"),n(),e(103,"."),n()()(),t(104,"div",7)(105,"h4",8),e(106,"Seletor"),n(),t(107,"pre",9),e(108,`<po-datepicker-range
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-clean="boolean"
    p-disabled="boolean"
    p-end-date="string | Date"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-help="string"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-literals="PoDatepickerRangeLiterals"
    p-locale="string"
    p-max-date="string | Date"
    p-min-date="string | Date"
    p-no-autocomplete="boolean"
    (p-change)="EventEmitter"
    p-optional="boolean"
    p-helper="PoHelperOptions | string"
    p-readonly="boolean"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string"
    p-start-date="string | Date" >
</po-datepicker-range>
`),n()(),t(109,"h4",10),e(110,"Propriedades"),n(),t(111,"table",11)(112,"tr",12)(113,"th",13),e(114,"Nome"),n(),t(115,"th",13),e(116,"Tipo"),n(),t(117,"th",13),e(118,"Padr\xE3o"),n(),t(119,"th",13),e(120,"Descri\xE7\xE3o"),n()(),t(121,"tr",14)(122,"td",15)(123,"div",16)(124,"span",17),e(125," (p-additional-help)"),a(126,"br"),n()(),t(127,"div",18),e(128,"Deprecated"),n()(),t(129,"td",19)(130,"code",20),e(131,"EventEmitter"),n()(),t(132,"td",21),e(133,"-"),n(),t(134,"td",22)(135,"em")(136,"strong"),e(137,"(opcional)"),n()(),t(138,"p"),e(139,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),t(140,"code"),e(141,"p-help"),n(),e(142,"."),n(),t(143,"blockquote")(144,"p"),e(145,"Essa propriedade est\xE1 "),t(146,"strong"),e(147,"depreciada"),n(),e(148," e ser\xE1 removida na vers\xE3o "),t(149,"code"),e(150,"23.x.x"),n(),e(151,". Recomendamos utilizar a propriedade "),t(152,"code"),e(153,"p-helper"),n(),e(154," que oferece mais recursos e flexibilidade."),n()()()(),t(155,"tr",14)(156,"td",15)(157,"div",23)(158,"span",24),e(159," p-additional-help-tooltip"),a(160,"br"),n()(),t(161,"div",18),e(162,"Deprecated"),n()(),t(163,"td",19)(164,"code",25),e(165,"string"),n()(),t(166,"td",21),e(167,"-"),n(),t(168,"td",22)(169,"em")(170,"strong"),e(171,"(opcional)"),n()(),t(172,"p"),e(173,"Exibe um \xEDcone de ajuda adicional ao "),t(174,"code"),e(175,"p-help"),n(),e(176,`, com o texto desta propriedade no tooltip.
Se o evento `),t(177,"code"),e(178,"p-additional-help"),n(),e(179,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),t(180,"strong"),e(181,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),n()(),t(182,"blockquote")(183,"p"),e(184,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),n()(),t(185,"blockquote")(186,"p"),e(187,"Essa propriedade est\xE1 "),t(188,"strong"),e(189,"depreciada"),n(),e(190," e ser\xE1 removida na vers\xE3o "),t(191,"code"),e(192,"23.x.x"),n(),e(193,". Recomendamos utilizar a propriedade "),t(194,"code"),e(195,"p-helper"),n(),e(196," que oferece mais recursos e flexibilidade."),n()()()(),t(197,"tr",14)(198,"td",15)(199,"div",23)(200,"span",24),e(201," p-append-in-body"),a(202,"br"),n()()(),t(203,"td",19)(204,"code",26),e(205,"boolean"),n()(),t(206,"td",21)(207,"p")(208,"code"),e(209,"false"),n()()(),t(210,"td",22)(211,"em")(212,"strong"),e(213,"(opcional)"),n()(),t(214,"p"),e(215,"Define que o "),t(216,"code"),e(217,"calendar"),n(),e(218," e/ou tooltip ("),t(219,"code"),e(220,"p-additional-help-tooltip"),n(),e(221," e/ou "),t(222,"code"),e(223,"p-error-limit"),n(),e(224,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),n(),t(225,"blockquote")(226,"p"),e(227,"Quando utilizado com "),t(228,"code"),e(229,"p-additional-help-tooltip"),n(),e(230,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),n()()()(),t(231,"tr",14)(232,"td",15)(233,"div",23)(234,"span",24),e(235," p-auto-focus"),a(236,"br"),n()()(),t(237,"td",19)(238,"code",26),e(239,"boolean"),n()(),t(240,"td",21)(241,"p")(242,"code"),e(243,"false"),n()()(),t(244,"td",22)(245,"em")(246,"strong"),e(247,"(opcional)"),n()(),t(248,"p"),e(249,"Aplica foco no elemento ao ser iniciado."),n(),t(250,"blockquote")(251,"p"),e(252,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),n()()()(),t(253,"tr",14)(254,"td",15)(255,"div",23)(256,"span",24),e(257," p-clean"),a(258,"br"),n()()(),t(259,"td",19)(260,"code",26),e(261,"boolean"),n()(),t(262,"td",21)(263,"p")(264,"code"),e(265,"false"),n()()(),t(266,"td",22)(267,"em")(268,"strong"),e(269,"(opcional)"),n()(),t(270,"p"),e(271,"Habilita a\xE7\xE3o para limpar o campo."),n()()(),t(272,"tr",14)(273,"td",15)(274,"div",23)(275,"span",24),e(276," p-disabled"),a(277,"br"),n()()(),t(278,"td",19)(279,"code",26),e(280,"boolean"),n()(),t(281,"td",21)(282,"p")(283,"code"),e(284,"false"),n()()(),t(285,"td",22)(286,"em")(287,"strong"),e(288,"(opcional)"),n()(),t(289,"p"),e(290,"Desabilita o campo."),n()()(),t(291,"tr",14)(292,"td",15)(293,"div",23)(294,"span",24),e(295," p-end-date"),a(296,"br"),n()()(),t(297,"td",19)(298,"code",25),e(299,"string "),n(),t(300,"code",27),e(301," Date"),n()(),t(302,"td",21),e(303,"-"),n(),t(304,"td",22)(305,"em")(306,"strong"),e(307,"(opcional)"),n()(),t(308,"p"),e(309,"Data final."),n()()(),t(310,"tr",14)(311,"td",15)(312,"div",23)(313,"span",24),e(314," p-error-limit"),a(315,"br"),n()()(),t(316,"td",19)(317,"code",26),e(318,"boolean"),n()(),t(319,"td",21)(320,"p")(321,"code"),e(322,"false"),n()()(),t(323,"td",22)(324,"em")(325,"strong"),e(326,"(opcional)"),n()(),t(327,"p"),e(328,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),n(),t(329,"blockquote")(330,"p"),e(331,"Caso essa propriedade seja definida como "),t(332,"code"),e(333,"true"),n(),e(334,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),n()()()(),t(335,"tr",14)(336,"td",15)(337,"div",23)(338,"span",24),e(339," p-field-error-message"),a(340,"br"),n()()(),t(341,"td",19)(342,"code",25),e(343,"string"),n()(),t(344,"td",21),e(345,"-"),n(),t(346,"td",22)(347,"em")(348,"strong"),e(349,"(opcional)"),n()(),t(350,"p"),e(351,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),n(),t(352,"blockquote")(353,"p"),e(354,"Necess\xE1rio que a propriedade "),t(355,"code"),e(356,"p-required"),n(),e(357," esteja habilitada."),n()()()(),t(358,"tr",14)(359,"td",15)(360,"div",23)(361,"span",24),e(362," p-help"),a(363,"br"),n()()(),t(364,"td",19)(365,"code",25),e(366,"string"),n()(),t(367,"td",21),e(368,"-"),n(),t(369,"td",22)(370,"em")(371,"strong"),e(372,"(opcional)"),n()(),t(373,"p"),e(374,"Texto de apoio do campo."),n()()(),t(375,"tr",14)(376,"td",15)(377,"div",16)(378,"span",17),e(379," (p-keydown)"),a(380,"br"),n()()(),t(381,"td",19)(382,"code",20),e(383,"EventEmitter"),n()(),t(384,"td",21),e(385,"-"),n(),t(386,"td",22)(387,"em")(388,"strong"),e(389,"(opcional)"),n()(),t(390,"p"),e(391,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),t(392,"code"),e(393,"KeyboardEvent"),n(),e(394," com informa\xE7\xF5es sobre a tecla."),n()()(),t(395,"tr",14)(396,"td",15)(397,"div",23)(398,"span",24),e(399," p-label"),a(400,"br"),n()()(),t(401,"td",19)(402,"code",25),e(403,"string"),n()(),t(404,"td",21),e(405,"-"),n(),t(406,"td",22)(407,"em")(408,"strong"),e(409,"(opcional)"),n()(),t(410,"p"),e(411,"R\xF3tulo do campo."),n()()(),t(412,"tr",14)(413,"td",15)(414,"div",23)(415,"span",24),e(416," p-label-text-wrap"),a(417,"br"),n()()(),t(418,"td",19)(419,"code",26),e(420,"boolean"),n()(),t(421,"td",21)(422,"p")(423,"code"),e(424,"false"),n()()(),t(425,"td",22)(426,"em")(427,"strong"),e(428,"(opcional)"),n()(),t(429,"p"),e(430,"Habilita a quebra autom\xE1tica do texto da propriedade "),t(431,"code"),e(432,"p-label"),n(),e(433,". Quando "),t(434,"code"),e(435,"p-label-text-wrap"),n(),e(436,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),n()()(),t(437,"tr",14)(438,"td",15)(439,"div",23)(440,"span",24),e(441," p-literals"),a(442,"br"),n()()(),t(443,"td",19)(444,"code",28),e(445,"PoDatepickerRangeLiterals"),n()(),t(446,"td",21),e(447,"-"),n(),t(448,"td",22)(449,"em")(450,"strong"),e(451,"(opcional)"),n()(),t(452,"p"),e(453,"Objeto com as literais usadas no "),t(454,"code"),e(455,"po-datepicker-range"),n(),e(456,"."),n(),t(457,"p"),e(458,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),n(),t(459,"pre")(460,"code"),e(461,`const customLiterals: PoDatepickerRangeLiterals = {
  invalidFormat: 'Date in inconsistent format',
  startDateGreaterThanEndDate: 'End date less than start date'
};
`),n()(),t(462,"p"),e(463,"Ou passando apenas as literais que deseja customizar:"),n(),t(464,"pre")(465,"code"),e(466,`const customLiterals: PoDatepickerRangeLiterals = {
  invalidFormat: 'Date in inconsistent format'
};
`),n()(),t(467,"p"),e(468,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),n(),t(469,"pre")(470,"code"),e(471,`<po-datepicker-range
  [p-literals]="customLiterals">
</po-datepicker-range>
`),n()(),t(472,"blockquote")(473,"p"),e(474,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),t(475,"a",29)(476,"code"),e(477,"PoI18nService"),n()(),e(478," ou do browser."),n()()()(),t(479,"tr",14)(480,"td",15)(481,"div",23)(482,"span",24),e(483," p-locale"),a(484,"br"),n()()(),t(485,"td",19)(486,"code",25),e(487,"string"),n()(),t(488,"td",21),e(489,"-"),n(),t(490,"td",22)(491,"em")(492,"strong"),e(493,"(opcional)"),n()(),t(494,"p"),e(495,"Idioma que o calend\xE1rio utilizar\xE1 para exibir as datas."),n(),t(496,"blockquote")(497,"p"),e(498,"O locale padr\xE3o ser\xE1 recuperado com base no "),t(499,"a",29)(500,"code"),e(501,"PoI18nService"),n()(),e(502," ou "),t(503,"em"),e(504,"browser"),n(),e(505,"."),n()()()(),t(506,"tr",14)(507,"td",15)(508,"div",23)(509,"span",24),e(510," p-max-date"),a(511,"br"),n()()(),t(512,"td",19)(513,"code",25),e(514,"string "),n(),t(515,"code",27),e(516," Date"),n()(),t(517,"td",21),e(518,"-"),n(),t(519,"td",22)(520,"em")(521,"strong"),e(522,"(opcional)"),n()(),t(523,"p"),e(524,"Define uma data m\xE1xima para o "),t(525,"code"),e(526,"po-datepicker-range"),n(),e(527,"."),n()()(),t(528,"tr",14)(529,"td",15)(530,"div",23)(531,"span",24),e(532," p-min-date"),a(533,"br"),n()()(),t(534,"td",19)(535,"code",25),e(536,"string "),n(),t(537,"code",27),e(538," Date"),n()(),t(539,"td",21),e(540,"-"),n(),t(541,"td",22)(542,"em")(543,"strong"),e(544,"(opcional)"),n()(),t(545,"p"),e(546,"Define uma data m\xEDnima para o "),t(547,"code"),e(548,"po-datepicker-range"),n(),e(549,"."),n()()(),t(550,"tr",14)(551,"td",15)(552,"div",23)(553,"span",24),e(554," p-no-autocomplete"),a(555,"br"),n()()(),t(556,"td",19)(557,"code",26),e(558,"boolean"),n()(),t(559,"td",21)(560,"p")(561,"code"),e(562,"false"),n()()(),t(563,"td",22)(564,"em")(565,"strong"),e(566,"(opcional)"),n()(),t(567,"p"),e(568,"Define a propriedade nativa "),t(569,"code"),e(570,"autocomplete"),n(),e(571," do campo como "),t(572,"code"),e(573,"off"),n(),e(574,"."),n()()(),t(575,"tr",14)(576,"td",15)(577,"div",16)(578,"span",17),e(579," (p-change)"),a(580,"br"),n()()(),t(581,"td",19)(582,"code",20),e(583,"EventEmitter"),n()(),t(584,"td",21),e(585,"-"),n(),t(586,"td",22)(587,"em")(588,"strong"),e(589,"(opcional)"),n()(),t(590,"p"),e(591,"Evento disparado ao alterar valor do campo."),n()()(),t(592,"tr",14)(593,"td",15)(594,"div",23)(595,"span",24),e(596," p-optional"),a(597,"br"),n()()(),t(598,"td",19)(599,"code",26),e(600,"boolean"),n()(),t(601,"td",21)(602,"p")(603,"code"),e(604,"false"),n()()(),t(605,"td",22)(606,"em")(607,"strong"),e(608,"(opcional)"),n()(),t(609,"p"),e(610,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),n(),t(611,"blockquote")(612,"p"),e(613,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),n()(),t(614,"ul")(615,"li"),e(616,"O campo conter "),t(617,"code"),e(618,"p-required"),n(),e(619,";"),n(),t(620,"li"),e(621,"N\xE3o possuir "),t(622,"code"),e(623,"p-help"),n(),e(624," e/ou "),t(625,"code"),e(626,"p-label"),n(),e(627,"."),n()()()(),t(628,"tr",14)(629,"td",15)(630,"div",23)(631,"span",24),e(632," p-helper"),a(633,"br"),n()()(),t(634,"td",19)(635,"code",30),e(636,"PoHelperOptions "),n(),t(637,"code",25),e(638," string"),n()(),t(639,"td",21),e(640,"-"),n(),t(641,"td",22)(642,"em")(643,"strong"),e(644,"(opcional)"),n()(),t(645,"p"),e(646,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label."),n(),t(647,"blockquote")(648,"p"),e(649,"Caso o "),t(650,"code"),e(651,"p-label"),n(),e(652,` n\xE3o esteja definido, o componente po-helper n\xE3o ser\xE1 exibido.
Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional (`),t(653,"code"),e(654,"p-additional-help-tooltip"),n(),e(655," e "),t(656,"code"),e(657,"p-additional-help"),n(),e(658,") ser\xE1 ignorado."),n()()()(),t(659,"tr",14)(660,"td",15)(661,"div",23)(662,"span",24),e(663," p-readonly"),a(664,"br"),n()()(),t(665,"td",19)(666,"code",26),e(667,"boolean"),n()(),t(668,"td",21)(669,"p")(670,"code"),e(671,"false"),n()()(),t(672,"td",22)(673,"em")(674,"strong"),e(675,"(opcional)"),n()(),t(676,"p"),e(677,"Indica que o campo ser\xE1 somente leitura."),n()()(),t(678,"tr",14)(679,"td",15)(680,"div",23)(681,"span",24),e(682," p-required"),a(683,"br"),n()()(),t(684,"td",19)(685,"code",26),e(686,"boolean"),n()(),t(687,"td",21)(688,"p")(689,"code"),e(690,"false"),n()()(),t(691,"td",22)(692,"em")(693,"strong"),e(694,"(opcional)"),n()(),t(695,"p"),e(696,"Define que o campo ser\xE1 obrigat\xF3rio."),n()()(),t(697,"tr",14)(698,"td",15)(699,"div",23)(700,"span",24),e(701," p-show-required"),a(702,"br"),n()()(),t(703,"td",19)(704,"code",26),e(705,"boolean"),n()(),t(706,"td",21),e(707,"-"),n(),t(708,"td",22)(709,"p"),e(710,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),n(),t(711,"blockquote")(712,"p"),e(713,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),n()(),t(714,"ul")(715,"li"),e(716,"N\xE3o possuir "),t(717,"code"),e(718,"p-help"),n(),e(719," e/ou "),t(720,"code"),e(721,"p-label"),n(),e(722,"."),n()()()(),t(723,"tr",14)(724,"td",15)(725,"div",23)(726,"span",24),e(727," p-size"),a(728,"br"),n()()(),t(729,"td",19)(730,"code",25),e(731,"string"),n()(),t(732,"td",21)(733,"p")(734,"code"),e(735,"medium"),n()()(),t(736,"td",22)(737,"em")(738,"strong"),e(739,"(opcional)"),n()(),t(740,"p"),e(741,"Define o tamanho do componente:"),n(),t(742,"ul")(743,"li")(744,"code"),e(745,"small"),n(),e(746,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),n(),t(747,"li")(748,"code"),e(749,"medium"),n(),e(750,": altura do input como 44px."),n()(),t(751,"blockquote")(752,"p"),e(753,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),t(754,"code"),e(755,"medium"),n(),e(756,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),t(757,"a",31),e(758,"po-theme"),n(),e(759,"."),n()()()(),t(760,"tr",14)(761,"td",15)(762,"div",23)(763,"span",24),e(764," p-start-date"),a(765,"br"),n()()(),t(766,"td",19)(767,"code",25),e(768,"string "),n(),t(769,"code",27),e(770," Date"),n()(),t(771,"td",21),e(772,"-"),n(),t(773,"td",22)(774,"em")(775,"strong"),e(776,"(opcional)"),n()(),t(777,"p"),e(778,"Data inicial."),n()()()(),t(779,"h3",10),e(780,"M\xE9todos"),n(),t(781,"table",32)(782,"tr",14)(783,"th",33)(784,"div",23)(785,"h4")(786,"span",24),e(787," focus "),n()()()()(),t(788,"tr",22)(789,"td",22)(790,"p"),e(791,"Fun\xE7\xE3o que atribui foco ao componente."),n(),t(792,"p"),e(793,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),n(),t(794,"pre")(795,"code"),e(796,`import { PoDatepickerRangeComponent } from '@po-ui/ng-components';

...

@ViewChild(PoDatepickerRangeComponent, { static: true }) datepickerRange: PoDatepickerRangeComponent;

focusDatepickerRange() {
  this.datepickerRange.focus();
}
`),n()()()()(),a(797,"br"),t(798,"table",32)(799,"tr",14)(800,"th",33)(801,"div",23)(802,"h4")(803,"span",24),e(804," showAdditionalHelp "),n()()()()(),t(805,"tr",22)(806,"td",22)(807,"p"),e(808,"M\xE9todo que exibe "),t(809,"code"),e(810,"p-additionalHelpTooltip"),n(),e(811," ou executa a a\xE7\xE3o definida em "),t(812,"code"),e(813,"p-additionalHelp"),n(),e(814,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),t(815,"code"),e(816,"p-keydown"),n(),e(817,"."),n(),t(818,"blockquote")(819,"p"),e(820,"Exibe ou oculta o conte\xFAdo do componente "),t(821,"code"),e(822,"po-helper"),n(),e(823," quando o componente estiver com foco e com label vis\xEDvel."),n()(),t(824,"pre")(825,"code"),e(826,`<po-datepicker-range
 #datepickerRange
 ...
 p-additional-help-tooltip="Mensagem de ajuda complementar"
 (p-keydown)="onKeyDown($event, datepickerRange)"
></po-datepicker-range>
`),n()(),t(827,"pre")(828,"code"),e(829,`// Exemplo com p-label e p-helper
<po-datepicker-range
 #datepickerRange
 ...
 p-label="Label do datepickerRange
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, datepickerRange)"
></po-datepicker-range>
`),n()(),t(830,"pre")(831,"code"),e(832,`...
onKeyDown(event: KeyboardEvent, inp: PoDatepickerRangeComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),n()()()()(),a(833,"br"),t(834,"h3"),e(835,"Interfaces"),n(),t(836,"h4",34)(837,"code",5),e(838,"PoDatepickerRangeLiterals"),n()(),t(839,"div",2)(840,"p"),e(841,"Interface para defini\xE7\xE3o das literais usadas no "),t(842,"code"),e(843,"po-datepicker-range"),n(),e(844,"."),n()(),t(845,"h4",10),e(846,"Propriedades"),n(),t(847,"table",11)(848,"tr",12)(849,"th",13),e(850,"Nome"),n(),t(851,"th",13),e(852,"Tipo"),n(),t(853,"th",13),e(854,"Descri\xE7\xE3o"),n()(),t(855,"tr",14)(856,"td",15)(857,"div",23)(858,"span",24),e(859," dateOutOfPeriod"),a(860,"br"),n()()(),t(861,"td",19)(862,"code",25),e(863,"string"),n()(),t(864,"td",22)(865,"em")(866,"strong"),e(867,"(opcional)"),n()(),t(868,"p"),e(869,"Data fora do per\xEDodo."),n()()(),t(870,"tr",14)(871,"td",15)(872,"div",23)(873,"span",24),e(874," invalidDate"),a(875,"br"),n()()(),t(876,"td",19)(877,"code",25),e(878,"string"),n()(),t(879,"td",22)(880,"em")(881,"strong"),e(882,"(opcional)"),n()(),t(883,"p"),e(884,"Data inv\xE1lida."),n()()(),t(885,"tr",14)(886,"td",15)(887,"div",23)(888,"span",24),e(889," invalidFormat"),a(890,"br"),n()()(),t(891,"td",19)(892,"code",25),e(893,"string"),n()(),t(894,"td",22)(895,"em")(896,"strong"),e(897,"(opcional)"),n()(),t(898,"p"),e(899,"Data em formato inv\xE1lido."),n()()(),t(900,"tr",14)(901,"td",15)(902,"div",23)(903,"span",24),e(904," startDateGreaterThanEndDate"),a(905,"br"),n()()(),t(906,"td",19)(907,"code",25),e(908,"string"),n()(),t(909,"td",22)(910,"em")(911,"strong"),e(912,"(opcional)"),n()(),t(913,"p"),e(914,"Data inicial maior que data final."),n()()()(),t(915,"h4",34)(916,"code",5),e(917,"PoDatepickerRange"),n()(),t(918,"div",2)(919,"p"),e(920,"Interface para defini\xE7\xE3o do objeto com a data inicial e final usadas no "),t(921,"code"),e(922,"po-datepicker-range"),n(),e(923,"."),n(),t(924,"blockquote")(925,"p"),e(926,`Os formatos de data permitidos seguem os padr\xF5es definidos na
`),t(927,"a",35),e(928,"descri\xE7\xE3o do componente"),n(),e(929,"."),n()()(),t(930,"h4",10),e(931,"Propriedades"),n(),t(932,"table",11)(933,"tr",12)(934,"th",13),e(935,"Nome"),n(),t(936,"th",13),e(937,"Tipo"),n(),t(938,"th",13),e(939,"Descri\xE7\xE3o"),n()(),t(940,"tr",14)(941,"td",15)(942,"div",23)(943,"span",24),e(944," end"),a(945,"br"),n()()(),t(946,"td",19)(947,"code",25),e(948,"string "),n(),t(949,"code",27),e(950," Date"),n()(),t(951,"td",22)(952,"p"),e(953,"Data final"),n()()(),t(954,"tr",14)(955,"td",15)(956,"div",23)(957,"span",24),e(958," start"),a(959,"br"),n()()(),t(960,"td",19)(961,"code",25),e(962,"string "),n(),t(963,"code",27),e(964," Date"),n()(),t(965,"td",22)(966,"p"),e(967,"Data inicial"),n()()()()())},dependencies:[D],encapsulation:2})}return l})();var Re=(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,o){this.route=m,this.router=o}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let o=m.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(o){return new(o||l)(te(re),te(pe))};static \u0275cmp=E({type:l,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Datepicker Range",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,i){o&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),b("p-click",function(){return i.changeTab("doc")}),a(3,"sample-po-datepicker-range-doc"),n(),t(4,"po-tab",3),b("p-click",function(){return i.changeTab("web")}),a(5,"sample-po-datepicker-range-basic-view")(6,"sample-po-datepicker-range-labs-view")(7,"sample-po-datepicker-range-vacations-view")(8,"sample-po-datepicker-range-vacations-reactive-form-view"),n()()()),o&2&&(s("p-actions",i.actions),p(2),s("p-active",i.activeTab==="doc"),p(2),s("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[ge,x,k,Se,ve,ke,Ce,ye],encapsulation:2})}return l})();var ze=[{path:"",component:Re}],we=(()=>{class l{static \u0275fac=function(o){return new(o||l)};static \u0275mod=U({type:l});static \u0275inj=G({imports:[ne.forChild(ze),ne]})}return l})();var yt=(()=>{class l{static \u0275fac=function(o){return new(o||l)};static \u0275mod=U({type:l});static \u0275inj=G({imports:[be,we]})}return l})();export{yt as DocPoDatepickerRangeModule};
