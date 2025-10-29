import{o as D,p as fe}from"./chunk-TFKSP2Z2.js";import{Ab as k,Ca as _,Fa as ce,Ma as X,O as de,Q as me,S as se,Sa as ue,Ta as $,U as P,Xa as I,a as N,nb as ge,sa as Z,v as W,zb as x}from"./chunk-3S4WNRBY.js";import{$a as j,$c as ne,Aa as s,Da as C,Dc as ie,Fb as w,Gc as F,Hc as L,Ic as K,Jc as O,Kc as B,La as t,Ma as n,N as G,Na as a,Nc as ae,Oc as oe,Q as z,Ra as V,Sa as f,Sb as J,Sc as le,U as c,V as u,Xc as re,Zc as pe,_a as A,ab as H,bb as Y,cb as e,eb as y,gb as b,hb as E,ib as h,ja as p,ka as te,ob as R,qa as S,ra as U,ub as T,xb as q}from"./chunk-CBLD3XJL.js";var Se=(()=>{class l{static \u0275fac=function(o){return new(o||l)};static \u0275cmp=S({type:l,selectors:[["sample-po-datepicker-range-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","datepickerRange","p-label","PO Datepicker Range"]],template:function(o,i){o&1&&a(0,"po-datepicker-range",0)},dependencies:[_],encapsulation:2})}return l})();var _e=l=>({"docs-sample-code-tabs":l}),be=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||l)};static \u0275cmp=S({type:l,selectors:[["sample-po-datepicker-range-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(a(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Datepicker Range Basic"),n(),t(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-datepicker-range-basic/sample-po-datepicker-range-basic.component.html"),n(),t(13,"pre",7),e(14,`<po-datepicker-range name="datepickerRange" p-label="PO Datepicker Range"> </po-datepicker-range>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-datepicker-range-basic/sample-po-datepicker-range-basic.component.ts"),n(),t(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-datepicker-range-basic',
  templateUrl: './sample-po-datepicker-range-basic.component.html',
  standalone: false
})
export class SamplePoDatepickerRangeBasicComponent {}
`),n()()()()(),t(21,"div",10),a(22,"sample-po-datepicker-range-basic"),n(),a(23,"hr")),o&2&&(p(5),C("po-icon "+i.sampleCodeButtonIcon),p(),y(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",R(4,_e,i.hideSampleCodeTabs)))},dependencies:[w,D,x,k,Se],encapsulation:2})}return l})();var he=(()=>{class l{helperText;clean;customLiterals;datepickerRange;endDate;event;help;label;literals;properties;fieldErrorMessage;startDate;maxDate;minDate;locale;size;propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"}];localeOptions=[{label:"English",value:"en"},{label:"Espa\xF1ol",value:"es"},{label:"Portugu\xEAs",value:"pt"},{label:"P\u0443\u0441\u0441\u043A\u0438\u0439",value:"ru"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(m){this.event=m}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}getDatepickerRange(){return JSON.stringify(this.datepickerRange)}restore(){this.helperText="",this.clean=void 0,this.customLiterals=void 0,this.endDate=void 0,this.event=void 0,this.help=void 0,this.label=void 0,this.literals=void 0,this.properties=[],this.fieldErrorMessage="",this.startDate=void 0,this.maxDate=void 0,this.minDate=void 0,this.locale=void 0,this.size="medium",setTimeout(()=>this.datepickerRange=void 0)}static \u0275fac=function(o){return new(o||l)};static \u0275cmp=S({type:l,selectors:[["sample-po-datepicker-range-labs"]],standalone:!1,decls:20,vars:38,consts:[["f","ngForm"],["name","datepickerRange",1,"po-sm-12",3,"ngModelChange","p-change","p-keydown","ngModel","p-helper","p-clean","p-disabled","p-end-date","p-help","p-label","p-literals","p-max-date","p-min-date","p-no-autocomplete","p-optional","p-readonly","p-required","p-field-error-message","p-show-required","p-start-date","p-locale","p-size","p-label-text-wrap","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minDate","p-clean","","p-label","Min date",1,"po-md-6",3,"ngModelChange","ngModel","p-max-date"],["name","maxDate","p-clean","","p-label","Max date",1,"po-md-6",3,"ngModelChange","ngModel","p-min-date"],["name","literals","p-help",'Ex.: { "invalidFormat": "Date in inconsistent format", "startDateGreaterThanEndDate": "End date less than start date" }',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","locale","p-label","Locale",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","restore","p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(o,i){if(o&1){let d=V();t(0,"po-datepicker-range",1),h("ngModelChange",function(r){return c(d),E(i.datepickerRange,r)||(i.datepickerRange=r),u(r)}),f("p-change",function(){return c(d),u(i.changeEvent("p-change"))})("p-keydown",function(){return c(d),u(i.changeEvent("p-keydown"))}),n(),a(1,"po-divider"),t(2,"div",2),a(3,"po-info",3)(4,"po-info",4),n(),a(5,"po-divider"),t(6,"form",null,0)(8,"po-input",5),h("ngModelChange",function(r){return c(d),E(i.label,r)||(i.label=r),u(r)}),n(),t(9,"po-input",6),h("ngModelChange",function(r){return c(d),E(i.help,r)||(i.help=r),u(r)}),n(),t(10,"po-input",7),h("ngModelChange",function(r){return c(d),E(i.helperText,r)||(i.helperText=r),u(r)}),n(),t(11,"po-datepicker",8),h("ngModelChange",function(r){return c(d),E(i.minDate,r)||(i.minDate=r),u(r)}),n(),t(12,"po-datepicker",9),h("ngModelChange",function(r){return c(d),E(i.maxDate,r)||(i.maxDate=r),u(r)}),n(),t(13,"po-input",10),h("ngModelChange",function(r){return c(d),E(i.literals,r)||(i.literals=r),u(r)}),f("p-change",function(){return c(d),u(i.changeLiterals())}),n(),t(14,"po-input",11),h("ngModelChange",function(r){return c(d),E(i.fieldErrorMessage,r)||(i.fieldErrorMessage=r),u(r)}),n(),t(15,"po-select",12),h("ngModelChange",function(r){return c(d),E(i.locale,r)||(i.locale=r),u(r)}),n(),t(16,"po-checkbox-group",13),h("ngModelChange",function(r){return c(d),E(i.properties,r)||(i.properties=r),u(r)}),n(),t(17,"po-radio-group",14),h("ngModelChange",function(r){return c(d),E(i.size,r)||(i.size=r),u(r)}),n(),t(18,"div",2)(19,"po-button",15),f("p-click",function(){return c(d),u(i.restore())}),n()()()}o&2&&(b("ngModel",i.datepickerRange),s("p-helper",i.helperText)("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-end-date",i.endDate)("p-help",i.help)("p-label",i.label)("p-literals",i.customLiterals)("p-max-date",i.maxDate)("p-min-date",i.minDate)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-field-error-message",i.fieldErrorMessage)("p-show-required",i.properties.includes("showRequired"))("p-start-date",i.startDate)("p-locale",i.locale)("p-size",i.size)("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit")),p(3),s("p-value",i.getDatepickerRange()),p(),s("p-value",i.event),p(4),b("ngModel",i.label),p(),b("ngModel",i.help),p(),b("ngModel",i.helperText),p(),b("ngModel",i.minDate),s("p-max-date",i.maxDate),p(),b("ngModel",i.maxDate),s("p-min-date",i.minDate),p(),b("ngModel",i.literals),p(),b("ngModel",i.fieldErrorMessage),p(),b("ngModel",i.locale),s("p-options",i.localeOptions),p(),b("ngModel",i.properties),s("p-options",i.propertiesOptions),p(),b("ngModel",i.size),s("p-options",i.sizeOptions))},dependencies:[B,F,L,O,K,W,N,de,me,se,_,ce,ue,I],encapsulation:2})}return l})();var Te=l=>({"docs-sample-code-tabs":l}),ve=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||l)};static \u0275cmp=S({type:l,selectors:[["sample-po-datepicker-range-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(a(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Datepicker Range Labs"),n(),t(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-datepicker-range-labs/sample-po-datepicker-range-labs.component.html"),n(),t(13,"pre",7),e(14,`<po-datepicker-range
  class="po-sm-12"
  name="datepickerRange"
  [(ngModel)]="datepickerRange"
  [p-helper]="helperText"
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

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

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
  helperText: string;
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
    this.helperText = '';
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
`),n()()()()(),t(21,"div",10),a(22,"sample-po-datepicker-range-labs"),n(),a(23,"hr")),o&2&&(p(5),C("po-icon "+i.sampleCodeButtonIcon),p(),y(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",R(4,Te,i.hideSampleCodeTabs)))},dependencies:[w,D,x,k,he],encapsulation:2})}return l})();var Fe=["formVacationSuggestion"],xe=(()=>{class l{poNotification=z(Z);formVacationSuggestion;poModal;datepickerRange;quantityOfDays=void 0;reason;cancel={action:()=>{this.poModal.close()},label:"Cancel"};submit={action:()=>{this.poModal.close(),this.formVacationSuggestion.reset(),this.poNotification.success("Vacation suggestion submitted!")},label:"Submit"};get validateForm(){return!(this.formVacationSuggestion.valid&&this.datepickerRange&&this.datepickerRange.start&&this.datepickerRange.end)}calculateQuantityOfVacationDays(){let m=new Date(this.datepickerRange.start),o=new Date(this.datepickerRange.end);this.quantityOfDays=Math.floor((Date.UTC(o.getFullYear(),o.getMonth(),o.getDate())-Date.UTC(m.getFullYear(),m.getMonth(),m.getDate()))/(1e3*60*60*24))}clean(){this.datepickerRange=void 0,this.quantityOfDays=void 0,this.reason=void 0}static \u0275fac=function(o){return new(o||l)};static \u0275cmp=S({type:l,selectors:[["sample-po-datepicker-range-vacations"]],viewQuery:function(o,i){if(o&1&&(A(Fe,7),A(P,7)),o&2){let d;j(d=H())&&(i.formVacationSuggestion=d.first),j(d=H())&&(i.poModal=d.first)}},standalone:!1,decls:21,vars:18,consts:[["formVacationSuggestion","ngForm"],["modalVacationSuggestion",""],["p-label","Vacation suggestion",1,"po-md-9"],[1,"po-row"],["name","datepickerRange","p-clean","","p-label","Select the period","p-required","",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","number","p-disabled","","p-label","Quantity of days","p-required","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","textarea","p-label","Reason",1,"po-md-9",3,"ngModelChange","ngModel"],["p-label","Clean",1,"po-md-2","po-offset-md-5","po-offset-lg-5","po-offset-xl-5",3,"p-click"],["p-label","Submit",1,"po-md-2",3,"p-click","p-disabled"],["p-hide-close","","p-title","Confirm vacation suggestion",3,"p-primary-action","p-secondary-action"],["p-label","Initial period",1,"po-md-4",3,"p-value"],["p-label","Final period",1,"po-md-4",3,"p-value"],["p-label","Quantity of days",1,"po-md-4",3,"p-value"],["p-disabled","","p-label","Reason","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"]],template:function(o,i){if(o&1){let d=V();t(0,"form",null,0),a(2,"po-divider",2),t(3,"div",3)(4,"po-datepicker-range",4),h("ngModelChange",function(r){return c(d),E(i.datepickerRange,r)||(i.datepickerRange=r),u(r)}),f("p-change",function(){return c(d),u(i.calculateQuantityOfVacationDays())}),n(),t(5,"po-number",5),h("ngModelChange",function(r){return c(d),E(i.quantityOfDays,r)||(i.quantityOfDays=r),u(r)}),n()(),t(6,"div",3)(7,"po-textarea",6),h("ngModelChange",function(r){return c(d),E(i.reason,r)||(i.reason=r),u(r)}),n()(),t(8,"div",3)(9,"po-button",7),f("p-click",function(){return c(d),u(i.clean())}),n(),t(10,"po-button",8),f("p-click",function(){c(d);let r=Y(12);return u(r.open())}),n()()(),t(11,"po-modal",9,1)(13,"div",3),a(14,"po-info",10),T(15,"date"),a(16,"po-info",11),T(17,"date"),a(18,"po-info",12),n(),t(19,"div",3)(20,"po-textarea",13),h("ngModelChange",function(r){return c(d),E(i.reason,r)||(i.reason=r),u(r)}),n()()()}o&2&&(p(4),b("ngModel",i.datepickerRange),p(),b("ngModel",i.quantityOfDays),p(2),b("ngModel",i.reason),p(3),s("p-disabled",i.validateForm),p(),s("p-primary-action",i.submit)("p-secondary-action",i.cancel),p(3),s("p-value",q(15,10,i.datepickerRange==null?null:i.datepickerRange.start,"longDate","+0000")),p(2),s("p-value",q(17,14,i.datepickerRange==null?null:i.datepickerRange.end,"longDate","+0000")),p(2),s("p-value",i.quantityOfDays),p(2),b("ngModel",i.reason))},dependencies:[B,F,L,O,K,W,N,_,X,$,I,P,J],encapsulation:2})}return l})();var Oe=l=>({"docs-sample-code-tabs":l}),ke=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||l)};static \u0275cmp=S({type:l,selectors:[["sample-po-datepicker-range-vacations-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(a(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Datepicker Range - Vacations Suggestion"),n(),t(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-datepicker-range-vacations/sample-po-datepicker-range-vacations.component.html"),n(),t(13,"pre",7),e(14,`<form #formVacationSuggestion="ngForm">
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
`),n()()()()(),t(21,"div",10),a(22,"sample-po-datepicker-range-vacations"),n(),a(23,"hr")),o&2&&(p(5),C("po-icon "+i.sampleCodeButtonIcon),p(),y(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",R(4,Oe,i.hideSampleCodeTabs)))},dependencies:[w,D,x,k,xe],encapsulation:2})}return l})();var De=(()=>{class l{poNotification=z(Z);formBuilder=z(le);poModal;datepickerRange;formVacationSuggestion;quantityOfDays;reason;cancel={action:()=>{this.poModal.close()},label:"Cancel"};submit={action:()=>{this.poModal.close(),this.formVacationSuggestion.reset(),this.poNotification.success("Vacation suggestion submitted!")},label:"Submit"};get validateForm(){return!(this.formVacationSuggestion.valid&&this.formVacationSuggestion.get("datepickerRange").value.start&&this.formVacationSuggestion.get("datepickerRange").value.end)}ngOnInit(){this.formVacationSuggestion=this.formBuilder.group({datepickerRange:[void 0,ie.required],quantityOfDays:[void 0],reason:[void 0]})}calculateQuantityOfVacationDays(){let m=new Date(this.formVacationSuggestion.get("datepickerRange").value.start),o=new Date(this.formVacationSuggestion.get("datepickerRange").value.end),i=Math.floor((Date.UTC(o.getFullYear(),o.getMonth(),o.getDate())-Date.UTC(m.getFullYear(),m.getMonth(),m.getDate()))/(1e3*60*60*24));this.formVacationSuggestion.get("quantityOfDays").setValue(i)}clean(){this.formVacationSuggestion.reset()}submitForm(){this.datepickerRange=this.formVacationSuggestion.get("datepickerRange").value,this.reason=this.formVacationSuggestion.get("reason").value,this.quantityOfDays=this.formVacationSuggestion.get("quantityOfDays").value}static \u0275fac=function(o){return new(o||l)};static \u0275cmp=S({type:l,selectors:[["sample-po-datepicker-range-vacations-reactive-form"]],viewQuery:function(o,i){if(o&1&&A(P,7),o&2){let d;j(d=H())&&(i.poModal=d.first)}},standalone:!1,decls:20,vars:16,consts:[["modalVacationSuggestion",""],[3,"formGroup"],["p-label","Vacation suggestion",1,"po-md-9"],[1,"po-row"],["formControlName","datepickerRange","p-clean","","p-label","Select the period","p-required","",1,"po-md-6",3,"p-change"],["formControlName","quantityOfDays","p-disabled","","p-label","Quantity of days","p-required","",1,"po-md-3"],["formControlName","reason","p-label","Reason",1,"po-md-9"],["p-label","Clean",1,"po-md-2","po-offset-md-5","po-offset-lg-5","po-offset-xl-5",3,"p-click"],["p-label","Submit",1,"po-md-2",3,"p-click","p-disabled"],["p-hide-close","","p-title","Confirm vacation suggestion",3,"p-primary-action","p-secondary-action"],["p-label","Initial period",1,"po-md-4",3,"p-value"],["p-label","Final period",1,"po-md-4",3,"p-value"],["p-label","Quantity of days",1,"po-md-4",3,"p-value"],["p-disabled","","p-label","Reason","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"]],template:function(o,i){if(o&1){let d=V();t(0,"form",1),a(1,"po-divider",2),t(2,"div",3)(3,"po-datepicker-range",4),f("p-change",function(){return c(d),u(i.calculateQuantityOfVacationDays())}),n(),a(4,"po-number",5),n(),t(5,"div",3),a(6,"po-textarea",6),n(),t(7,"div",3)(8,"po-button",7),f("p-click",function(){return c(d),u(i.clean())}),n(),t(9,"po-button",8),f("p-click",function(){c(d);let r=Y(11);return i.submitForm(),u(r.open())}),n()()(),t(10,"po-modal",9,0)(12,"div",3),a(13,"po-info",10),T(14,"date"),a(15,"po-info",11),T(16,"date"),a(17,"po-info",12),n(),t(18,"div",3)(19,"po-textarea",13),h("ngModelChange",function(r){return c(d),E(i.reason,r)||(i.reason=r),u(r)}),n()()()}o&2&&(s("formGroup",i.formVacationSuggestion),p(9),s("p-disabled",i.validateForm),p(),s("p-primary-action",i.submit)("p-secondary-action",i.cancel),p(3),s("p-value",q(14,8,i.datepickerRange==null?null:i.datepickerRange.start,"longDate","+0000")),p(2),s("p-value",q(16,12,i.datepickerRange==null?null:i.datepickerRange.end,"longDate","+0000")),p(2),s("p-value",i.quantityOfDays),p(2),b("ngModel",i.reason))},dependencies:[B,F,L,O,ae,oe,W,N,_,X,$,I,P,J],encapsulation:2})}return l})();var We=l=>({"docs-sample-code-tabs":l}),Ce=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||l)};static \u0275cmp=S({type:l,selectors:[["sample-po-datepicker-range-vacations-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(a(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Datepicker Range - Vacations Reactive Form"),n(),t(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-datepicker-range-vacations-reactive-form/sample-po-datepicker-range-vacations-reactive-form.component.html"),n(),t(13,"pre",7),e(14,`<form [formGroup]="formVacationSuggestion">
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
`),n()()()()(),t(21,"div",10),a(22,"sample-po-datepicker-range-vacations-reactive-form"),n(),a(23,"hr")),o&2&&(p(5),C("po-icon "+i.sampleCodeButtonIcon),p(),y(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",R(4,We,i.hideSampleCodeTabs)))},dependencies:[w,D,x,k,De],encapsulation:2})}return l})();var ye=(()=>{class l{static \u0275fac=function(o){return new(o||l)};static \u0275cmp=S({type:l,selectors:[["sample-po-datepicker-range-doc"]],standalone:!1,decls:971,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["id","accepted-formats"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Date"],["pan","",1,"docs-api-property-type","PoDatepickerRangeLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["href","/documentation/po-datepicker-range#accepted-formats"]],template:function(o,i){o&1&&(t(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),n()(),t(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
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
`),n()(),t(109,"h4",10),e(110,"Propriedades"),n(),t(111,"table",11)(112,"tr",12)(113,"th",13),e(114,"Nome"),n(),t(115,"th",13),e(116,"Tipo"),n(),t(117,"th",13),e(118,"Padr\xE3o"),n(),t(119,"th",13),e(120,"Descri\xE7\xE3o"),n()(),t(121,"tr",14)(122,"td",15)(123,"div",16)(124,"span",17),e(125," (p-additional-help)"),a(126,"br"),n()(),t(127,"div",18),e(128,"Deprecated"),n()(),t(129,"td",19)(130,"code",20),e(131,"EventEmitter"),n()(),t(132,"td",21),e(133,"-"),n(),t(134,"td",22)(135,"em")(136,"strong"),e(137,"(opcional)"),n()(),t(138,"p"),e(139,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),n(),t(140,"blockquote")(141,"p"),e(142,"Essa propriedade est\xE1 "),t(143,"strong"),e(144,"depreciada"),n(),e(145," e ser\xE1 removida na vers\xE3o "),t(146,"code"),e(147,"23.x.x"),n(),e(148,". Recomendamos utilizar a propriedade "),t(149,"code"),e(150,"p-helper"),n(),e(151," que oferece mais recursos e flexibilidade."),n()()()(),t(152,"tr",14)(153,"td",15)(154,"div",23)(155,"span",24),e(156," p-additional-help-tooltip"),a(157,"br"),n()(),t(158,"div",18),e(159,"Deprecated"),n()(),t(160,"td",19)(161,"code",25),e(162,"string"),n()(),t(163,"td",21),e(164,"-"),n(),t(165,"td",22)(166,"em")(167,"strong"),e(168,"(opcional)"),n()(),t(169,"p"),e(170,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),t(171,"code"),e(172,"po-helper"),n(),e(173,`.
`),t(174,"strong"),e(175,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),n()(),t(176,"blockquote")(177,"p"),e(178,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),n()(),t(179,"blockquote")(180,"p"),e(181,"Essa propriedade est\xE1 "),t(182,"strong"),e(183,"depreciada"),n(),e(184," e ser\xE1 removida na vers\xE3o "),t(185,"code"),e(186,"23.x.x"),n(),e(187,". Recomendamos utilizar a propriedade "),t(188,"code"),e(189,"p-helper"),n(),e(190," que oferece mais recursos e flexibilidade."),n()()()(),t(191,"tr",14)(192,"td",15)(193,"div",23)(194,"span",24),e(195," p-append-in-body"),a(196,"br"),n()()(),t(197,"td",19)(198,"code",26),e(199,"boolean"),n()(),t(200,"td",21)(201,"p")(202,"code"),e(203,"false"),n()()(),t(204,"td",22)(205,"em")(206,"strong"),e(207,"(opcional)"),n()(),t(208,"p"),e(209,"Define que o "),t(210,"code"),e(211,"calendar"),n(),e(212," e/ou tooltip ("),t(213,"code"),e(214,"p-additional-help-tooltip"),n(),e(215," e/ou "),t(216,"code"),e(217,"p-error-limit"),n(),e(218,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),n(),t(219,"blockquote")(220,"p"),e(221,"Quando utilizado com "),t(222,"code"),e(223,"p-helper"),n(),e(224,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),n()()()(),t(225,"tr",14)(226,"td",15)(227,"div",23)(228,"span",24),e(229," p-auto-focus"),a(230,"br"),n()()(),t(231,"td",19)(232,"code",26),e(233,"boolean"),n()(),t(234,"td",21)(235,"p")(236,"code"),e(237,"false"),n()()(),t(238,"td",22)(239,"em")(240,"strong"),e(241,"(opcional)"),n()(),t(242,"p"),e(243,"Aplica foco no elemento ao ser iniciado."),n(),t(244,"blockquote")(245,"p"),e(246,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),n()()()(),t(247,"tr",14)(248,"td",15)(249,"div",23)(250,"span",24),e(251," p-clean"),a(252,"br"),n()()(),t(253,"td",19)(254,"code",26),e(255,"boolean"),n()(),t(256,"td",21)(257,"p")(258,"code"),e(259,"false"),n()()(),t(260,"td",22)(261,"em")(262,"strong"),e(263,"(opcional)"),n()(),t(264,"p"),e(265,"Habilita a\xE7\xE3o para limpar o campo."),n()()(),t(266,"tr",14)(267,"td",15)(268,"div",23)(269,"span",24),e(270," p-disabled"),a(271,"br"),n()()(),t(272,"td",19)(273,"code",26),e(274,"boolean"),n()(),t(275,"td",21)(276,"p")(277,"code"),e(278,"false"),n()()(),t(279,"td",22)(280,"em")(281,"strong"),e(282,"(opcional)"),n()(),t(283,"p"),e(284,"Desabilita o campo."),n()()(),t(285,"tr",14)(286,"td",15)(287,"div",23)(288,"span",24),e(289," p-end-date"),a(290,"br"),n()()(),t(291,"td",19)(292,"code",25),e(293,"string "),n(),t(294,"code",27),e(295," Date"),n()(),t(296,"td",21),e(297,"-"),n(),t(298,"td",22)(299,"em")(300,"strong"),e(301,"(opcional)"),n()(),t(302,"p"),e(303,"Data final."),n()()(),t(304,"tr",14)(305,"td",15)(306,"div",23)(307,"span",24),e(308," p-error-limit"),a(309,"br"),n()()(),t(310,"td",19)(311,"code",26),e(312,"boolean"),n()(),t(313,"td",21)(314,"p")(315,"code"),e(316,"false"),n()()(),t(317,"td",22)(318,"em")(319,"strong"),e(320,"(opcional)"),n()(),t(321,"p"),e(322,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),n(),t(323,"blockquote")(324,"p"),e(325,"Caso essa propriedade seja definida como "),t(326,"code"),e(327,"true"),n(),e(328,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),n()()()(),t(329,"tr",14)(330,"td",15)(331,"div",23)(332,"span",24),e(333," p-field-error-message"),a(334,"br"),n()()(),t(335,"td",19)(336,"code",25),e(337,"string"),n()(),t(338,"td",21),e(339,"-"),n(),t(340,"td",22)(341,"em")(342,"strong"),e(343,"(opcional)"),n()(),t(344,"p"),e(345,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),n(),t(346,"blockquote")(347,"p"),e(348,"Necess\xE1rio que a propriedade "),t(349,"code"),e(350,"p-required"),n(),e(351," esteja habilitada."),n()()()(),t(352,"tr",14)(353,"td",15)(354,"div",23)(355,"span",24),e(356," p-help"),a(357,"br"),n()()(),t(358,"td",19)(359,"code",25),e(360,"string"),n()(),t(361,"td",21),e(362,"-"),n(),t(363,"td",22)(364,"em")(365,"strong"),e(366,"(opcional)"),n()(),t(367,"p"),e(368,"Texto de apoio do campo."),n()()(),t(369,"tr",14)(370,"td",15)(371,"div",16)(372,"span",17),e(373," (p-keydown)"),a(374,"br"),n()()(),t(375,"td",19)(376,"code",20),e(377,"EventEmitter"),n()(),t(378,"td",21),e(379,"-"),n(),t(380,"td",22)(381,"em")(382,"strong"),e(383,"(opcional)"),n()(),t(384,"p"),e(385,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),t(386,"code"),e(387,"KeyboardEvent"),n(),e(388," com informa\xE7\xF5es sobre a tecla."),n()()(),t(389,"tr",14)(390,"td",15)(391,"div",23)(392,"span",24),e(393," p-label"),a(394,"br"),n()()(),t(395,"td",19)(396,"code",25),e(397,"string"),n()(),t(398,"td",21),e(399,"-"),n(),t(400,"td",22)(401,"em")(402,"strong"),e(403,"(opcional)"),n()(),t(404,"p"),e(405,"R\xF3tulo do campo."),n()()(),t(406,"tr",14)(407,"td",15)(408,"div",23)(409,"span",24),e(410," p-label-text-wrap"),a(411,"br"),n()()(),t(412,"td",19)(413,"code",26),e(414,"boolean"),n()(),t(415,"td",21)(416,"p")(417,"code"),e(418,"false"),n()()(),t(419,"td",22)(420,"em")(421,"strong"),e(422,"(opcional)"),n()(),t(423,"p"),e(424,"Habilita a quebra autom\xE1tica do texto da propriedade "),t(425,"code"),e(426,"p-label"),n(),e(427,". Quando "),t(428,"code"),e(429,"p-label-text-wrap"),n(),e(430,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),n()()(),t(431,"tr",14)(432,"td",15)(433,"div",23)(434,"span",24),e(435," p-literals"),a(436,"br"),n()()(),t(437,"td",19)(438,"code",28),e(439,"PoDatepickerRangeLiterals"),n()(),t(440,"td",21),e(441,"-"),n(),t(442,"td",22)(443,"em")(444,"strong"),e(445,"(opcional)"),n()(),t(446,"p"),e(447,"Objeto com as literais usadas no "),t(448,"code"),e(449,"po-datepicker-range"),n(),e(450,"."),n(),t(451,"p"),e(452,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),n(),t(453,"pre")(454,"code"),e(455,`const customLiterals: PoDatepickerRangeLiterals = {
  invalidFormat: 'Date in inconsistent format',
  startDateGreaterThanEndDate: 'End date less than start date'
};
`),n()(),t(456,"p"),e(457,"Ou passando apenas as literais que deseja customizar:"),n(),t(458,"pre")(459,"code"),e(460,`const customLiterals: PoDatepickerRangeLiterals = {
  invalidFormat: 'Date in inconsistent format'
};
`),n()(),t(461,"p"),e(462,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),n(),t(463,"pre")(464,"code"),e(465,`<po-datepicker-range
  [p-literals]="customLiterals">
</po-datepicker-range>
`),n()(),t(466,"blockquote")(467,"p"),e(468,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),t(469,"a",29)(470,"code"),e(471,"PoI18nService"),n()(),e(472," ou do browser."),n()()()(),t(473,"tr",14)(474,"td",15)(475,"div",23)(476,"span",24),e(477," p-locale"),a(478,"br"),n()()(),t(479,"td",19)(480,"code",25),e(481,"string"),n()(),t(482,"td",21),e(483,"-"),n(),t(484,"td",22)(485,"em")(486,"strong"),e(487,"(opcional)"),n()(),t(488,"p"),e(489,"Idioma que o calend\xE1rio utilizar\xE1 para exibir as datas."),n(),t(490,"blockquote")(491,"p"),e(492,"O locale padr\xE3o ser\xE1 recuperado com base no "),t(493,"a",29)(494,"code"),e(495,"PoI18nService"),n()(),e(496," ou "),t(497,"em"),e(498,"browser"),n(),e(499,"."),n()()()(),t(500,"tr",14)(501,"td",15)(502,"div",23)(503,"span",24),e(504," p-max-date"),a(505,"br"),n()()(),t(506,"td",19)(507,"code",25),e(508,"string "),n(),t(509,"code",27),e(510," Date"),n()(),t(511,"td",21),e(512,"-"),n(),t(513,"td",22)(514,"em")(515,"strong"),e(516,"(opcional)"),n()(),t(517,"p"),e(518,"Define uma data m\xE1xima para o "),t(519,"code"),e(520,"po-datepicker-range"),n(),e(521,"."),n()()(),t(522,"tr",14)(523,"td",15)(524,"div",23)(525,"span",24),e(526," p-min-date"),a(527,"br"),n()()(),t(528,"td",19)(529,"code",25),e(530,"string "),n(),t(531,"code",27),e(532," Date"),n()(),t(533,"td",21),e(534,"-"),n(),t(535,"td",22)(536,"em")(537,"strong"),e(538,"(opcional)"),n()(),t(539,"p"),e(540,"Define uma data m\xEDnima para o "),t(541,"code"),e(542,"po-datepicker-range"),n(),e(543,"."),n()()(),t(544,"tr",14)(545,"td",15)(546,"div",23)(547,"span",24),e(548," p-no-autocomplete"),a(549,"br"),n()()(),t(550,"td",19)(551,"code",26),e(552,"boolean"),n()(),t(553,"td",21)(554,"p")(555,"code"),e(556,"false"),n()()(),t(557,"td",22)(558,"em")(559,"strong"),e(560,"(opcional)"),n()(),t(561,"p"),e(562,"Define a propriedade nativa "),t(563,"code"),e(564,"autocomplete"),n(),e(565," do campo como "),t(566,"code"),e(567,"off"),n(),e(568,"."),n()()(),t(569,"tr",14)(570,"td",15)(571,"div",16)(572,"span",17),e(573," (p-change)"),a(574,"br"),n()()(),t(575,"td",19)(576,"code",20),e(577,"EventEmitter"),n()(),t(578,"td",21),e(579,"-"),n(),t(580,"td",22)(581,"em")(582,"strong"),e(583,"(opcional)"),n()(),t(584,"p"),e(585,"Evento disparado ao alterar valor do campo."),n()()(),t(586,"tr",14)(587,"td",15)(588,"div",23)(589,"span",24),e(590," p-optional"),a(591,"br"),n()()(),t(592,"td",19)(593,"code",26),e(594,"boolean"),n()(),t(595,"td",21)(596,"p")(597,"code"),e(598,"false"),n()()(),t(599,"td",22)(600,"em")(601,"strong"),e(602,"(opcional)"),n()(),t(603,"p"),e(604,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),n(),t(605,"blockquote")(606,"p"),e(607,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),n()(),t(608,"ul")(609,"li"),e(610,"O campo conter "),t(611,"code"),e(612,"p-required"),n(),e(613,";"),n(),t(614,"li"),e(615,"N\xE3o possuir "),t(616,"code"),e(617,"p-help"),n(),e(618," e/ou "),t(619,"code"),e(620,"p-label"),n(),e(621,"."),n()()()(),t(622,"tr",14)(623,"td",15)(624,"div",23)(625,"span",24),e(626," p-helper"),a(627,"br"),n()()(),t(628,"td",19)(629,"code",30),e(630,"PoHelperOptions "),n(),t(631,"code",25),e(632," string"),n()(),t(633,"td",21),e(634,"-"),n(),t(635,"td",22)(636,"em")(637,"strong"),e(638,"(opcional)"),n()(),t(639,"p"),e(640,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),t(641,"code"),e(642,"p-label"),n(),e(643," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),t(644,"code"),e(645,"p-label"),n(),e(646,"."),n(),t(647,"blockquote")(648,"p"),e(649,"Para mais informa\xE7\xF5es acesse: "),t(650,"a",31),e(651,"https://po-ui.io/documentation/po-helper"),n(),e(652,"."),n()(),t(653,"blockquote")(654,"p"),e(655,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),t(656,"code"),e(657,"p-additional-help-tooltip"),n(),e(658," e "),t(659,"code"),e(660,"p-additional-help"),n(),e(661,") ser\xE1 ignorado."),n()()()(),t(662,"tr",14)(663,"td",15)(664,"div",23)(665,"span",24),e(666," p-readonly"),a(667,"br"),n()()(),t(668,"td",19)(669,"code",26),e(670,"boolean"),n()(),t(671,"td",21)(672,"p")(673,"code"),e(674,"false"),n()()(),t(675,"td",22)(676,"em")(677,"strong"),e(678,"(opcional)"),n()(),t(679,"p"),e(680,"Indica que o campo ser\xE1 somente leitura."),n()()(),t(681,"tr",14)(682,"td",15)(683,"div",23)(684,"span",24),e(685," p-required"),a(686,"br"),n()()(),t(687,"td",19)(688,"code",26),e(689,"boolean"),n()(),t(690,"td",21)(691,"p")(692,"code"),e(693,"false"),n()()(),t(694,"td",22)(695,"em")(696,"strong"),e(697,"(opcional)"),n()(),t(698,"p"),e(699,"Define que o campo ser\xE1 obrigat\xF3rio."),n()()(),t(700,"tr",14)(701,"td",15)(702,"div",23)(703,"span",24),e(704," p-show-required"),a(705,"br"),n()()(),t(706,"td",19)(707,"code",26),e(708,"boolean"),n()(),t(709,"td",21),e(710,"-"),n(),t(711,"td",22)(712,"p"),e(713,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),n(),t(714,"blockquote")(715,"p"),e(716,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),n()(),t(717,"ul")(718,"li"),e(719,"N\xE3o possuir "),t(720,"code"),e(721,"p-help"),n(),e(722," e/ou "),t(723,"code"),e(724,"p-label"),n(),e(725,"."),n()()()(),t(726,"tr",14)(727,"td",15)(728,"div",23)(729,"span",24),e(730," p-size"),a(731,"br"),n()()(),t(732,"td",19)(733,"code",25),e(734,"string"),n()(),t(735,"td",21)(736,"p")(737,"code"),e(738,"medium"),n()()(),t(739,"td",22)(740,"em")(741,"strong"),e(742,"(opcional)"),n()(),t(743,"p"),e(744,"Define o tamanho do componente:"),n(),t(745,"ul")(746,"li")(747,"code"),e(748,"small"),n(),e(749,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),n(),t(750,"li")(751,"code"),e(752,"medium"),n(),e(753,": altura do input como 44px."),n()(),t(754,"blockquote")(755,"p"),e(756,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),t(757,"code"),e(758,"medium"),n(),e(759,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),t(760,"a",32),e(761,"po-theme"),n(),e(762,"."),n()()()(),t(763,"tr",14)(764,"td",15)(765,"div",23)(766,"span",24),e(767," p-start-date"),a(768,"br"),n()()(),t(769,"td",19)(770,"code",25),e(771,"string "),n(),t(772,"code",27),e(773," Date"),n()(),t(774,"td",21),e(775,"-"),n(),t(776,"td",22)(777,"em")(778,"strong"),e(779,"(opcional)"),n()(),t(780,"p"),e(781,"Data inicial."),n()()()(),t(782,"h3",10),e(783,"M\xE9todos"),n(),t(784,"table",33)(785,"tr",14)(786,"th",34)(787,"div",23)(788,"h4")(789,"span",24),e(790," focus "),n()()()()(),t(791,"tr",22)(792,"td",22)(793,"p"),e(794,"Fun\xE7\xE3o que atribui foco ao componente."),n(),t(795,"p"),e(796,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),n(),t(797,"pre")(798,"code"),e(799,`import { PoDatepickerRangeComponent } from '@po-ui/ng-components';

...

@ViewChild(PoDatepickerRangeComponent, { static: true }) datepickerRange: PoDatepickerRangeComponent;

focusDatepickerRange() {
  this.datepickerRange.focus();
}
`),n()()()()(),a(800,"br"),t(801,"table",33)(802,"tr",14)(803,"th",34)(804,"div",23)(805,"h4")(806,"span",24),e(807," showAdditionalHelp "),n()()()()(),t(808,"tr",22)(809,"td",22)(810,"p"),e(811,"M\xE9todo que exibe "),t(812,"code"),e(813,"p-helper"),n(),e(814," ou executa a a\xE7\xE3o definida em "),t(815,"code"),e(816,"p-helper{eventOnClick}"),n(),e(817," ou em "),t(818,"code"),e(819,"p-additionalHelp"),n(),e(820,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),t(821,"code"),e(822,"p-keydown"),n(),e(823,"."),n(),t(824,"blockquote")(825,"p"),e(826,"Exibe ou oculta o conte\xFAdo do componente "),t(827,"code"),e(828,"po-helper"),n(),e(829," quando o componente estiver com foco."),n()(),t(830,"pre")(831,"code"),e(832,`// Exemplo com p-label e p-helper
<po-datepicker-range
 #datepickerRange
 ...
 p-label="Label do datepickerRange
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, datepickerRange)"
></po-datepicker-range>
`),n()(),t(833,"pre")(834,"code"),e(835,`...
onKeyDown(event: KeyboardEvent, inp: PoDatepickerRangeComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),n()()()()(),a(836,"br"),t(837,"h3"),e(838,"Interfaces"),n(),t(839,"h4",35)(840,"code",5),e(841,"PoDatepickerRangeLiterals"),n()(),t(842,"div",2)(843,"p"),e(844,"Interface para defini\xE7\xE3o das literais usadas no "),t(845,"code"),e(846,"po-datepicker-range"),n(),e(847,"."),n()(),t(848,"h4",10),e(849,"Propriedades"),n(),t(850,"table",11)(851,"tr",12)(852,"th",13),e(853,"Nome"),n(),t(854,"th",13),e(855,"Tipo"),n(),t(856,"th",13),e(857,"Descri\xE7\xE3o"),n()(),t(858,"tr",14)(859,"td",15)(860,"div",23)(861,"span",24),e(862," dateOutOfPeriod"),a(863,"br"),n()()(),t(864,"td",19)(865,"code",25),e(866,"string"),n()(),t(867,"td",22)(868,"em")(869,"strong"),e(870,"(opcional)"),n()(),t(871,"p"),e(872,"Data fora do per\xEDodo."),n()()(),t(873,"tr",14)(874,"td",15)(875,"div",23)(876,"span",24),e(877," invalidDate"),a(878,"br"),n()()(),t(879,"td",19)(880,"code",25),e(881,"string"),n()(),t(882,"td",22)(883,"em")(884,"strong"),e(885,"(opcional)"),n()(),t(886,"p"),e(887,"Data inv\xE1lida."),n()()(),t(888,"tr",14)(889,"td",15)(890,"div",23)(891,"span",24),e(892," invalidFormat"),a(893,"br"),n()()(),t(894,"td",19)(895,"code",25),e(896,"string"),n()(),t(897,"td",22)(898,"em")(899,"strong"),e(900,"(opcional)"),n()(),t(901,"p"),e(902,"Data em formato inv\xE1lido."),n()()(),t(903,"tr",14)(904,"td",15)(905,"div",23)(906,"span",24),e(907," startDateGreaterThanEndDate"),a(908,"br"),n()()(),t(909,"td",19)(910,"code",25),e(911,"string"),n()(),t(912,"td",22)(913,"em")(914,"strong"),e(915,"(opcional)"),n()(),t(916,"p"),e(917,"Data inicial maior que data final."),n()()()(),t(918,"h4",35)(919,"code",5),e(920,"PoDatepickerRange"),n()(),t(921,"div",2)(922,"p"),e(923,"Interface para defini\xE7\xE3o do objeto com a data inicial e final usadas no "),t(924,"code"),e(925,"po-datepicker-range"),n(),e(926,"."),n(),t(927,"blockquote")(928,"p"),e(929,`Os formatos de data permitidos seguem os padr\xF5es definidos na
`),t(930,"a",36),e(931,"descri\xE7\xE3o do componente"),n(),e(932,"."),n()()(),t(933,"h4",10),e(934,"Propriedades"),n(),t(935,"table",11)(936,"tr",12)(937,"th",13),e(938,"Nome"),n(),t(939,"th",13),e(940,"Tipo"),n(),t(941,"th",13),e(942,"Descri\xE7\xE3o"),n()(),t(943,"tr",14)(944,"td",15)(945,"div",23)(946,"span",24),e(947," end"),a(948,"br"),n()()(),t(949,"td",19)(950,"code",25),e(951,"string "),n(),t(952,"code",27),e(953," Date"),n()(),t(954,"td",22)(955,"p"),e(956,"Data final"),n()()(),t(957,"tr",14)(958,"td",15)(959,"div",23)(960,"span",24),e(961," start"),a(962,"br"),n()()(),t(963,"td",19)(964,"code",25),e(965,"string "),n(),t(966,"code",27),e(967," Date"),n()(),t(968,"td",22)(969,"p"),e(970,"Data inicial"),n()()()()())},dependencies:[D],encapsulation:2})}return l})();var Re=(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,o){this.route=m,this.router=o}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let o=m.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(o){return new(o||l)(te(re),te(pe))};static \u0275cmp=S({type:l,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Datepicker Range",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,i){o&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),f("p-click",function(){return i.changeTab("doc")}),a(3,"sample-po-datepicker-range-doc"),n(),t(4,"po-tab",3),f("p-click",function(){return i.changeTab("web")}),a(5,"sample-po-datepicker-range-basic-view")(6,"sample-po-datepicker-range-labs-view")(7,"sample-po-datepicker-range-vacations-view")(8,"sample-po-datepicker-range-vacations-reactive-form-view"),n()()()),o&2&&(s("p-actions",i.actions),p(2),s("p-active",i.activeTab==="doc"),p(2),s("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[ge,x,k,be,ve,ke,Ce,ye],encapsulation:2})}return l})();var Ae=[{path:"",component:Re}],we=(()=>{class l{static \u0275fac=function(o){return new(o||l)};static \u0275mod=U({type:l});static \u0275inj=G({imports:[ne.forChild(Ae),ne]})}return l})();var yt=(()=>{class l{static \u0275fac=function(o){return new(o||l)};static \u0275mod=U({type:l});static \u0275inj=G({imports:[fe,we]})}return l})();export{yt as DocPoDatepickerRangeModule};
