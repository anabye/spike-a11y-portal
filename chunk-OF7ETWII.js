import{o as C,p as me}from"./chunk-TFKSP2Z2.js";import{Ab as y,Fa as O,O as re,Q as le,R as K,S as _,Sa as H,Xa as pe,_ as R,a as ae,nb as de,sa as j,v as B,zb as v}from"./chunk-3S4WNRBY.js";import{$a as Y,$c as Q,Aa as s,Da as k,Dc as T,Fb as P,Gc as q,Hc as A,Ic as z,Jc as I,Kc as V,La as n,Ma as t,N as L,Na as a,Nc as ee,Oc as te,Q as F,Ra as W,Sa as h,Sc as ne,U as c,V as u,Xc as ie,Zc as oe,_a as J,ab as X,bb as $,cb as e,eb as D,gb as f,hb as b,ib as g,ja as p,ka as U,ob as w,qa as S,ra as N}from"./chunk-CBLD3XJL.js";var se=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-datepicker-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","datepicker","p-label","PO Datepicker"]],template:function(l,i){l&1&&a(0,"po-datepicker",0)},dependencies:[_],encapsulation:2})}return r})();var we=r=>({"docs-sample-code-tabs":r}),ce=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-datepicker-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Datepicker Basic"),t(),n(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-datepicker-basic/sample-po-datepicker-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-datepicker name="datepicker" p-label="PO Datepicker"> </po-datepicker>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-datepicker-basic/sample-po-datepicker-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-datepicker-basic',
  templateUrl: './sample-po-datepicker-basic.component.html',
  standalone: false
})
export class SamplePoDatepickerBasicComponent {}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-datepicker-basic"),t(),a(23,"hr")),l&2&&(p(5),k("po-icon "+i.sampleCodeButtonIcon),p(),D(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",w(4,we,i.hideSampleCodeTabs)))},dependencies:[P,C,v,y,se],encapsulation:2})}return r})();var Ee=(()=>{class r{helperText;datepicker;maxDate;errorPattern;event;format;help;isoFormat;label;locale;placeholder;properties;minDate;size;isoFormatOptions=[{label:"Basic",value:K.Basic},{label:"Extended",value:K.Extended}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"}];formatOptions=[{label:"dd/mm/yyyy",value:"dd/mm/yyyy"},{label:"mm/dd/yyyy",value:"mm/dd/yyyy"},{label:"yyyy/mm/dd",value:"yyyy/mm/dd"}];localeOptions=[{label:"pt",value:"pt"},{label:"en",value:"en"},{label:"es",value:"es"},{label:"ru",value:"ru"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(d){this.event=d}restore(){this.helperText="",this.datepicker=void 0,this.maxDate=void 0,this.event=void 0,this.errorPattern=void 0,this.format=void 0,this.help=void 0,this.isoFormat=void 0,this.label=void 0,this.locale=void 0,this.placeholder=void 0,this.properties=[],this.minDate=void 0,this.size="medium"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-datepicker-labs"]],standalone:!1,decls:22,vars:45,consts:[["f","ngForm"],["name","datepicker",1,"po-sm-12",3,"ngModelChange","p-blur","p-change","p-keydown","ngModel","p-helper","p-clean","p-disabled","p-max-date","p-error-pattern","p-format","p-help","p-iso-format","p-label","p-locale","p-min-date","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-label-text-wrap","p-size","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minDate","p-clean","","p-label","Min date",1,"po-md-6",3,"ngModelChange","ngModel","p-max-date","p-format"],["name","maxDate","p-clean","","p-label","Max date",1,"po-md-6",3,"ngModelChange","ngModel","p-format","p-min-date"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","locale","p-columns","4","p-label","Locale",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","format","p-columns","4","p-label","Format",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","isoFormat","p-columns","4","p-label","Iso Format",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","restore","p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,i){if(l&1){let m=W();n(0,"po-datepicker",1),g("ngModelChange",function(o){return c(m),b(i.datepicker,o)||(i.datepicker=o),u(o)}),h("p-blur",function(){return c(m),u(i.changeEvent("p-blur"))})("p-change",function(){return c(m),u(i.changeEvent("p-change"))})("p-keydown",function(){return c(m),u(i.changeEvent("p-keydown"))}),t(),a(1,"po-divider"),n(2,"div",2),a(3,"po-info",3)(4,"po-info",4),t(),a(5,"po-divider"),n(6,"form",null,0)(8,"po-input",5),g("ngModelChange",function(o){return c(m),b(i.label,o)||(i.label=o),u(o)}),t(),n(9,"po-input",6),g("ngModelChange",function(o){return c(m),b(i.help,o)||(i.help=o),u(o)}),t(),n(10,"po-input",7),g("ngModelChange",function(o){return c(m),b(i.helperText,o)||(i.helperText=o),u(o)}),t(),n(11,"po-input",8),g("ngModelChange",function(o){return c(m),b(i.placeholder,o)||(i.placeholder=o),u(o)}),t(),n(12,"po-input",9),g("ngModelChange",function(o){return c(m),b(i.errorPattern,o)||(i.errorPattern=o),u(o)}),t(),n(13,"po-datepicker",10),g("ngModelChange",function(o){return c(m),b(i.minDate,o)||(i.minDate=o),u(o)}),t(),n(14,"po-datepicker",11),g("ngModelChange",function(o){return c(m),b(i.maxDate,o)||(i.maxDate=o),u(o)}),t(),n(15,"po-checkbox-group",12),g("ngModelChange",function(o){return c(m),b(i.properties,o)||(i.properties=o),u(o)}),t(),n(16,"po-radio-group",13),g("ngModelChange",function(o){return c(m),b(i.locale,o)||(i.locale=o),u(o)}),t(),n(17,"po-radio-group",14),g("ngModelChange",function(o){return c(m),b(i.format,o)||(i.format=o),u(o)}),t(),n(18,"po-radio-group",15),g("ngModelChange",function(o){return c(m),b(i.isoFormat,o)||(i.isoFormat=o),u(o)}),t(),n(19,"po-radio-group",16),g("ngModelChange",function(o){return c(m),b(i.size,o)||(i.size=o),u(o)}),t(),n(20,"div",2)(21,"po-button",17),h("p-click",function(){return c(m),u(i.restore())}),t()()()}l&2&&(f("ngModel",i.datepicker),s("p-helper",i.helperText)("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-max-date",i.maxDate)("p-error-pattern",i.errorPattern)("p-format",i.format)("p-help",i.help)("p-iso-format",i.isoFormat)("p-label",i.label)("p-locale",i.locale)("p-min-date",i.minDate)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit")),p(3),s("p-value",i.datepicker),p(),s("p-value",i.event),p(4),f("ngModel",i.label),p(),f("ngModel",i.help),p(),f("ngModel",i.helperText),p(),f("ngModel",i.placeholder),p(),f("ngModel",i.errorPattern),p(),f("ngModel",i.minDate),s("p-max-date",i.maxDate)("p-format",i.format),p(),f("ngModel",i.maxDate),s("p-format",i.format)("p-min-date",i.minDate),p(),f("ngModel",i.properties),s("p-options",i.propertiesOptions),p(),f("ngModel",i.locale),s("p-options",i.localeOptions),p(),f("ngModel",i.format),s("p-options",i.formatOptions),p(),f("ngModel",i.isoFormat),s("p-options",i.isoFormatOptions),p(),f("ngModel",i.size),s("p-options",i.sizeOptions))},dependencies:[V,q,A,I,z,B,ae,re,le,_,O,pe],encapsulation:2})}return r})();var Me=r=>({"docs-sample-code-tabs":r}),fe=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-datepicker-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Datepicker Labs"),t(),n(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-datepicker-labs/sample-po-datepicker-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-datepicker
  class="po-sm-12"
  name="datepicker"
  [(ngModel)]="datepicker"
  [p-helper]="helperText"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-max-date]="maxDate"
  [p-error-pattern]="errorPattern"
  [p-format]="format"
  [p-help]="help"
  [p-iso-format]="isoFormat"
  [p-label]="label"
  [p-locale]="locale"
  [p-min-date]="minDate"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-show-required]="properties.includes('showRequired')"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-size]="size"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
>
</po-datepicker>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="datepicker"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input class="po-md-6" name="errorPattern" [(ngModel)]="errorPattern" p-clean p-label="Error Pattern"> </po-input>

  <po-datepicker
    class="po-md-6"
    name="minDate"
    [(ngModel)]="minDate"
    p-clean
    p-label="Min date"
    [p-max-date]="maxDate"
    [p-format]="format"
  >
  </po-datepicker>

  <po-datepicker
    class="po-md-6"
    name="maxDate"
    [(ngModel)]="maxDate"
    p-clean
    p-label="Max date"
    [p-format]="format"
    [p-min-date]="minDate"
  >
  </po-datepicker>

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
    name="locale"
    [(ngModel)]="locale"
    p-columns="4"
    p-label="Locale"
    [p-options]="localeOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-md-12"
    name="format"
    [(ngModel)]="format"
    p-columns="4"
    p-label="Format"
    [p-options]="formatOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-md-12"
    name="isoFormat"
    [(ngModel)]="isoFormat"
    p-columns="4"
    p-label="Iso Format"
    [p-options]="isoFormatOptions"
  >
  </po-radio-group>

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
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-datepicker-labs/sample-po-datepicker-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoDatepickerIsoFormat, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-datepicker-labs',
  templateUrl: './sample-po-datepicker-labs.component.html',
  standalone: false
})
export class SamplePoDatepickerLabsComponent implements OnInit {
  helperText: string;
  datepicker: string | Date;
  maxDate: string | Date;
  errorPattern: string;
  event: string;
  format: string;
  help: string;
  isoFormat: PoDatepickerIsoFormat;
  label: string;
  locale: string;
  placeholder: string;
  properties: Array<string>;
  minDate: string | Date;
  size: string;

  public readonly isoFormatOptions: Array<PoRadioGroupOption> = [
    { label: 'Basic', value: PoDatepickerIsoFormat.Basic },
    { label: 'Extended', value: PoDatepickerIsoFormat.Extended }
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

  public readonly formatOptions: Array<PoRadioGroupOption> = [
    { label: 'dd/mm/yyyy', value: 'dd/mm/yyyy' },
    { label: 'mm/dd/yyyy', value: 'mm/dd/yyyy' },
    { label: 'yyyy/mm/dd', value: 'yyyy/mm/dd' }
  ];

  public readonly localeOptions: Array<PoRadioGroupOption> = [
    { label: 'pt', value: 'pt' },
    { label: 'en', value: 'en' },
    { label: 'es', value: 'es' },
    { label: 'ru', value: 'ru' }
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
    this.datepicker = undefined;
    this.maxDate = undefined;
    this.event = undefined;
    this.errorPattern = undefined;
    this.format = undefined;
    this.help = undefined;
    this.isoFormat = undefined;
    this.label = undefined;
    this.locale = undefined;
    this.placeholder = undefined;
    this.properties = [];
    this.minDate = undefined;
    this.size = 'medium';
  }
}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-datepicker-labs"),t(),a(23,"hr")),l&2&&(p(5),k("po-icon "+i.sampleCodeButtonIcon),p(),D(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",w(4,Me,i.hideSampleCodeTabs)))},dependencies:[P,C,v,y,Ee],encapsulation:2})}return r})();var Te=["formAirfare"],be=(()=>{class r{poDialog=F(R);poNotification=F(j);formAirfare;accompany=0;destination;endDate=new Date;origin;startDate=new Date;ticketClass="Economy";accompanyNumber=[{value:0,label:"0"},{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"}];ticketClassOptions=[{value:"Economy",label:"Economy"},{value:"Premium",label:"Premium"},{value:"Business",label:"Business"},{value:"First",label:"First"}];apply(){let d=`Would you like to confirm the ticket from ${this.origin} to ${this.destination} with departure date at
    ${this.getFormatedDate(this.startDate)} and return at ${this.getFormatedDate(this.endDate)} with ${this.accompany} companions in
    ${this.ticketClass} class?`;this.poDialog.confirm({title:"Confirm",message:d,confirm:()=>{this.poNotification.success("Booking Confirmed"),this.formAirfare.reset({accompany:0,endDate:new Date,startDate:new Date,ticketClass:"Economy"})},cancel:()=>{this.poNotification.warning("Booking Canceled")}})}getFormatedDate(d){return d&&d.slice(0,10)}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-datepicker-airfare"]],viewQuery:function(l,i){if(l&1&&J(Te,7),l&2){let m;Y(m=X())&&(i.formAirfare=m.first)}},standalone:!1,decls:13,vars:11,consts:[["formAirfare","ngForm"],[1,"po-row"],["name","startDate","p-clean","","p-format","dd/mm/yyyy","p-label","Date start","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-max-date"],["name","endDate","p-clean","","p-format","dd/mm/yyyy","p-label","Date end","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-min-date"],["name","origin","p-placeholder","Flight origin","p-label","Origin","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","destination","p-label","Destination","p-placeholder","Flight destination","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["clas","po-row"],["name","ticketClass","p-label","Class","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","accompany","p-label","Accompany","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","applyButton","p-label","Apply",1,"po-md-3","po-offset-md-9","po-offset-lg-9",3,"p-click","p-disabled"]],template:function(l,i){if(l&1){let m=W();n(0,"form",null,0)(2,"div",1)(3,"po-datepicker",2),g("ngModelChange",function(o){return c(m),b(i.startDate,o)||(i.startDate=o),u(o)}),t(),n(4,"po-datepicker",3),g("ngModelChange",function(o){return c(m),b(i.endDate,o)||(i.endDate=o),u(o)}),t()(),n(5,"div",1)(6,"po-input",4),g("ngModelChange",function(o){return c(m),b(i.origin,o)||(i.origin=o),u(o)}),t(),n(7,"po-input",5),g("ngModelChange",function(o){return c(m),b(i.destination,o)||(i.destination=o),u(o)}),t()(),n(8,"div",6)(9,"po-select",7),g("ngModelChange",function(o){return c(m),b(i.ticketClass,o)||(i.ticketClass=o),u(o)}),t(),n(10,"po-select",8),g("ngModelChange",function(o){return c(m),b(i.accompany,o)||(i.accompany=o),u(o)}),t()(),n(11,"div",1)(12,"po-button",9),h("p-click",function(){return c(m),u(i.apply())}),t()()()}if(l&2){let m=$(1);p(3),f("ngModel",i.startDate),s("p-max-date",i.endDate),p(),f("ngModel",i.endDate),s("p-min-date",i.startDate),p(2),f("ngModel",i.origin),p(),f("ngModel",i.destination),p(2),f("ngModel",i.ticketClass),s("p-options",i.ticketClassOptions),p(),f("ngModel",i.accompany),s("p-options",i.accompanyNumber),p(2),s("p-disabled",m.invalid)}},dependencies:[V,q,A,I,z,B,_,O,H],encapsulation:2})}return r})();var Ae=r=>({"docs-sample-code-tabs":r}),ge=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-datepicker-airfare-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Datepicker - Airfare"),t(),n(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-datepicker-airfare/sample-po-datepicker-airfare.component.html"),t(),n(13,"pre",7),e(14,`<form #formAirfare="ngForm">
  <div class="po-row">
    <po-datepicker
      class="po-md-6"
      name="startDate"
      [(ngModel)]="startDate"
      p-clean
      p-format="dd/mm/yyyy"
      p-label="Date start"
      p-required
      [p-max-date]="endDate"
    >
    </po-datepicker>

    <po-datepicker
      class="po-md-6"
      name="endDate"
      [(ngModel)]="endDate"
      p-clean
      p-format="dd/mm/yyyy"
      p-label="Date end"
      p-required
      [p-min-date]="startDate"
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-6"
      name="origin"
      [(ngModel)]="origin"
      p-placeholder="Flight origin"
      p-label="Origin"
      p-required
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="destination"
      [(ngModel)]="destination"
      p-label="Destination"
      p-placeholder="Flight destination"
      p-required
    >
    </po-input>
  </div>

  <div clas="po-row">
    <po-select
      class="po-md-6"
      name="ticketClass"
      [(ngModel)]="ticketClass"
      p-label="Class"
      p-required
      [p-options]="ticketClassOptions"
    >
    </po-select>

    <po-select
      class="po-md-6"
      name="accompany"
      [(ngModel)]="accompany"
      p-label="Accompany"
      p-required
      [p-options]="accompanyNumber"
    >
    </po-select>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3 po-offset-md-9 po-offset-lg-9"
      name="applyButton"
      p-label="Apply"
      [p-disabled]="formAirfare.invalid"
      (p-click)="apply()"
    >
    </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-datepicker-airfare/sample-po-datepicker-airfare.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, ViewChild, inject } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { PoDialogService, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-datepicker-airfare',
  templateUrl: './sample-po-datepicker-airfare.component.html',
  standalone: false
})
export class SamplePoDatepickerAirfareComponent {
  private poDialog = inject(PoDialogService);
  private poNotification = inject(PoNotificationService);

  @ViewChild('formAirfare', { static: true }) formAirfare: UntypedFormControl;

  accompany: number = 0;
  destination: string;
  endDate: string = <any>new Date();
  origin: string;
  startDate: string = <any>new Date();
  ticketClass: string = 'Economy';

  public readonly accompanyNumber: Array<PoSelectOption> = [
    { value: 0, label: '0' },
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8' }
  ];

  public readonly ticketClassOptions: Array<PoSelectOption> = [
    { value: 'Economy', label: 'Economy' },
    { value: 'Premium', label: 'Premium' },
    { value: 'Business', label: 'Business' },
    { value: 'First', label: 'First' }
  ];

  apply() {
    const message = \`Would you like to confirm the ticket from \${this.origin} to \${
      this.destination
    } with departure date at
    \${this.getFormatedDate(this.startDate)} and return at \${this.getFormatedDate(this.endDate)} with \${
      this.accompany
    } companions in
    \${this.ticketClass} class?\`;

    this.poDialog.confirm({
      title: 'Confirm',
      message,
      confirm: () => {
        this.poNotification.success('Booking Confirmed');

        this.formAirfare.reset({
          accompany: 0,
          endDate: new Date(),
          startDate: new Date(),
          ticketClass: 'Economy'
        });
      },
      cancel: () => {
        this.poNotification.warning('Booking Canceled');
      }
    });
  }

  private getFormatedDate(date: string) {
    return date && date.slice(0, 10);
  }
}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-datepicker-airfare"),t(),a(23,"hr")),l&2&&(p(5),k("po-icon "+i.sampleCodeButtonIcon),p(),D(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",w(4,Ae,i.hideSampleCodeTabs)))},dependencies:[P,C,v,y,be],encapsulation:2})}return r})();var Se=(()=>{class r{formBuilder=F(ne);poDialog=F(R);poNotification=F(j);formAirfare;accompanyNumber=[{value:0,label:"0"},{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"}];ticketClassOptions=[{value:"Economy",label:"Economy"},{value:"Premium",label:"Premium"},{value:"Business",label:"Business"},{value:"First",label:"First"}];ngOnInit(){this.formAirfare=this.formBuilder.group({accompany:[0,T.required],destination:["",T.required],endDate:[new Date,T.required],origin:["",T.required],startDate:[new Date,T.required],ticketClass:["Economy",T.required]})}apply(d){let{accompany:l,destination:i,endDate:m,origin:E,ticketClass:o,startDate:Ce}=d.value,ke=`Would you like to confirm the ticket from ${E} to ${i} with departure date at
    ${this.getFormatedDate(Ce)} and return at ${this.getFormatedDate(m)} with ${l} companions in
    ${o} class?`;this.poDialog.confirm({title:"Confirm",message:ke,confirm:()=>{this.poNotification.success("Booking Confirmed"),this.formAirfare.reset({accompany:0,endDate:new Date,startDate:new Date,ticketClass:"Economy"})},cancel:()=>{this.poNotification.warning("Booking Canceled")}})}getFormatedDate(d){return d&&d.slice(0,10)}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-datepicker-airfare-reactive-form"]],standalone:!1,decls:12,vars:6,consts:[[3,"formGroup"],[1,"po-row"],["formControlName","startDate","p-clean","","p-format","dd/mm/yyyy","p-label","Date start",1,"po-md-6",3,"p-max-date"],["formControlName","endDate","p-clean","","p-format","dd/mm/yyyy","p-label","Date end",1,"po-md-6",3,"p-min-date"],["formControlName","origin","p-placeholder","Flight origin","p-label","Origin",1,"po-md-6"],["formControlName","destination","p-label","Destination","p-placeholder","Flight destination",1,"po-md-6"],["clas","po-row"],["formControlName","ticketClass","p-label","Class",1,"po-md-6",3,"p-options"],["formControlName","accompany","p-label","Accompany",1,"po-md-6",3,"p-options"],["name","applyButton","p-label","Apply",1,"po-md-3","po-offset-md-9","po-offset-lg-9",3,"p-click","p-disabled"]],template:function(l,i){l&1&&(n(0,"form",0)(1,"div",1),a(2,"po-datepicker",2)(3,"po-datepicker",3),t(),n(4,"div",1),a(5,"po-input",4)(6,"po-input",5),t(),n(7,"div",6),a(8,"po-select",7)(9,"po-select",8),t(),n(10,"div",1)(11,"po-button",9),h("p-click",function(){return i.apply(i.formAirfare)}),t()()()),l&2&&(s("formGroup",i.formAirfare),p(2),s("p-max-date",i.formAirfare.get("endDate").value),p(),s("p-min-date",i.formAirfare.get("startDate").value),p(5),s("p-options",i.ticketClassOptions),p(),s("p-options",i.accompanyNumber),p(2),s("p-disabled",i.formAirfare.invalid))},dependencies:[V,q,A,ee,te,B,_,O,H],encapsulation:2})}return r})();var Oe=r=>({"docs-sample-code-tabs":r}),he=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-datepicker-airfare-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Datepicker - Airfare Reactive Form"),t(),n(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-datepicker-airfare-reactive-form/sample-po-datepicker-airfare-reactive-form.component.html"),t(),n(13,"pre",7),e(14,`<form [formGroup]="formAirfare">
  <div class="po-row">
    <po-datepicker
      class="po-md-6"
      formControlName="startDate"
      p-clean
      p-format="dd/mm/yyyy"
      p-label="Date start"
      [p-max-date]="formAirfare.get('endDate').value"
    >
    </po-datepicker>

    <po-datepicker
      class="po-md-6"
      formControlName="endDate"
      p-clean
      p-format="dd/mm/yyyy"
      p-label="Date end"
      [p-min-date]="formAirfare.get('startDate').value"
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-input class="po-md-6" formControlName="origin" p-placeholder="Flight origin" p-label="Origin"> </po-input>

    <po-input class="po-md-6" formControlName="destination" p-label="Destination" p-placeholder="Flight destination">
    </po-input>
  </div>

  <div clas="po-row">
    <po-select class="po-md-6" formControlName="ticketClass" p-label="Class" [p-options]="ticketClassOptions">
    </po-select>

    <po-select class="po-md-6" formControlName="accompany" p-label="Accompany" [p-options]="accompanyNumber">
    </po-select>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3 po-offset-md-9 po-offset-lg-9"
      name="applyButton"
      p-label="Apply"
      [p-disabled]="formAirfare.invalid"
      (p-click)="apply(formAirfare)"
    >
    </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-datepicker-airfare-reactive-form/sample-po-datepicker-airfare-reactive-form.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoDialogService, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-datepicker-airfare-reactive-form',
  templateUrl: './sample-po-datepicker-airfare-reactive-form.component.html',
  standalone: false
})
export class SamplePoDatepickerAirfareReactiveFormComponent implements OnInit {
  private formBuilder = inject(UntypedFormBuilder);
  private poDialog = inject(PoDialogService);
  private poNotification = inject(PoNotificationService);

  formAirfare: UntypedFormGroup;

  readonly accompanyNumber: Array<PoSelectOption> = [
    { value: 0, label: '0' },
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8' }
  ];

  readonly ticketClassOptions: Array<PoSelectOption> = [
    { value: 'Economy', label: 'Economy' },
    { value: 'Premium', label: 'Premium' },
    { value: 'Business', label: 'Business' },
    { value: 'First', label: 'First' }
  ];

  ngOnInit() {
    this.formAirfare = this.formBuilder.group({
      accompany: [0, Validators.required],
      destination: ['', Validators.required],
      endDate: [new Date(), Validators.required],
      origin: ['', Validators.required],
      startDate: [new Date(), Validators.required],
      ticketClass: ['Economy', Validators.required]
    });
  }

  apply(formAirfare: UntypedFormGroup) {
    const { accompany, destination, endDate, origin, ticketClass, startDate } = formAirfare.value;

    const message = \`Would you like to confirm the ticket from \${origin} to \${destination} with departure date at
    \${this.getFormatedDate(startDate)} and return at \${this.getFormatedDate(endDate)} with \${accompany} companions in
    \${ticketClass} class?\`;

    this.poDialog.confirm({
      title: 'Confirm',
      message,
      confirm: () => {
        this.poNotification.success('Booking Confirmed');

        this.formAirfare.reset({
          accompany: 0,
          endDate: new Date(),
          startDate: new Date(),
          ticketClass: 'Economy'
        });
      },
      cancel: () => {
        this.poNotification.warning('Booking Canceled');
      }
    });
  }

  private getFormatedDate(date: string) {
    return date && date.slice(0, 10);
  }
}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-datepicker-airfare-reactive-form"),t(),a(23,"hr")),l&2&&(p(5),k("po-icon "+i.sampleCodeButtonIcon),p(),D(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",w(4,Oe,i.hideSampleCodeTabs)))},dependencies:[P,C,v,y,Se],encapsulation:2})}return r})();var xe=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-datepicker-doc"]],standalone:!1,decls:1134,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3schools.com/js/js_dates.asp"],["href","https://www.w3schools.com/jsref/jsref_setfullyear.asp"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","/documentation/po-i18n"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","Date"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(l,i){l&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoDatepickerComponent"),t()(),n(21,"div",2)(22,"p"),e(23,"O "),n(24,"code"),e(25,"po-datepicker"),t(),e(26," \xE9 um componente espec\xEDfico para manipula\xE7\xE3o de datas permitindo a digita\xE7\xE3o e / ou sele\xE7\xE3o."),t(),n(27,"p"),e(28,`O formato de exibi\xE7\xE3o da data, ou seja, o formato que \xE9 apresentado ao usu\xE1rio \xE9 o dd/mm/yyyy,
mas podem ser definidos outros padr\xF5es (veja mais na propriedade `),n(29,"code"),e(30,"p-format"),t(),e(31,")."),t(),n(32,"p"),e(33,`O idioma padr\xE3o do calend\xE1rio ser\xE1 exibido de acordo com o navegador, caso tenha necessidade de alterar
use a propriedade `),n(34,"code"),e(35,"p-locale"),t(),e(36,"."),t(),n(37,"p"),e(38,`O datepicker aceita tr\xEAs formatos de data: o E8601DZw (yyyy-mm-ddThh:mm:ss+|-hh:mm), o E8601DAw (yyyy-mm-dd) e o
Date padr\xE3o do Javascript.`),t(),n(39,"blockquote")(40,"p"),e(41,"Por padr\xE3o, o formato de sa\xEDda do "),n(42,"em"),e(43,"model"),t(),e(44,` se ajustar\xE1 conforme o formato de entrada. Se por acaso precisar controlar o valor de sa\xEDda,
a propriedade `),n(45,"code"),e(46,"p-iso-format"),t(),e(47," prov\xEA esse controle independentemente do formato de entrada. Veja abaixo os formatos dispon\xEDveis:"),t()(),n(48,"ul")(49,"li")(50,"p"),e(51,"Formato de entrada e sa\xEDda (E8601DZw) - "),n(52,"code"),e(53,"'2017-11-28T00:00:00-02:00'"),t(),e(54,";"),t()(),n(55,"li")(56,"p"),e(57,"Formato de entrada e sa\xEDda (E8601DAw) - "),n(58,"code"),e(59,"'2017-11-28'"),t(),e(60,";"),t()(),n(61,"li")(62,"p"),e(63,"Formato de entrada (Date) - "),n(64,"code"),e(65,"new Date(2017, 10, 28)"),t(),e(66," e sa\xEDda (E8601DAw) - "),n(67,"code"),e(68,"'2017-11-28'"),t(),e(69,";"),t()()(),n(70,"p")(71,"strong"),e(72,"Importante:"),t()(),n(73,"ul")(74,"li"),e(75,"Para utilizar datas com ano inferior a 100, verificar o comportamento do "),n(76,"a",6)(77,"code"),e(78,"new Date"),t()(),e(79,`
e utilizar o m\xE9todo `),n(80,"a",7)(81,"code"),e(82,"setFullYear"),t()(),e(83,"."),t(),n(84,"li"),e(85,"Caso a data esteja inv\xE1lida, o "),n(86,"code"),e(87,"model"),t(),e(88," receber\xE1 "),n(89,"strong"),e(90,"'Data inv\xE1lida'"),t(),e(91,"."),t(),n(92,"li"),e(93,"Caso o "),n(94,"code"),e(95,"input"),t(),e(96," esteja passando um "),n(97,"code"),e(98,"[(ngModel)]"),t(),e(99,", mas n\xE3o tenha um "),n(100,"code"),e(101,"name"),t(),e(102,`, ent\xE3o ir\xE1 ocorrer um erro
do pr\xF3prio Angular (`),n(103,"code"),e(104,'[ngModelOptions]="{standalone: true}"'),t(),e(105,")."),t()(),n(106,"p"),e(107,"Exemplo:"),t(),n(108,"pre")(109,"code"),e(110,`<po-datepicker
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}"
</po-datepicker>
`),t()(),n(111,"blockquote")(112,"p"),e(113,"N\xE3o esque\xE7a de importar o "),n(114,"code"),e(115,"FormsModule"),t(),e(116," em seu m\xF3dulo, tal como para utilizar o "),n(117,"code"),e(118,"input default"),t(),e(119,"."),t()(),n(120,"h4"),e(121,"Tokens customiz\xE1veis"),t(),n(122,"p"),e(123,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),a(124,"br"),e(125,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),n(126,"code"),e(127,".po-input"),t()(),n(128,"blockquote")(129,"p"),e(130,"Para maiores informa\xE7\xF5es, acesse o guia "),n(131,"a",8),e(132,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(133,"."),t()(),n(134,"table")(135,"thead")(136,"tr")(137,"th"),e(138,"Propriedade"),t(),n(139,"th"),e(140,"Descri\xE7\xE3o"),t(),n(141,"th"),e(142,"Valor Padr\xE3o"),t()()(),n(143,"tbody")(144,"tr")(145,"td")(146,"strong"),e(147,"Default Values"),t()(),a(148,"td")(149,"td"),t(),n(150,"tr")(151,"td")(152,"code"),e(153,"--font-family"),t()(),n(154,"td"),e(155,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(156,"td")(157,"code"),e(158,"var(--font-family-theme)"),t()()(),n(159,"tr")(160,"td")(161,"code"),e(162,"--font-size"),t()(),n(163,"td"),e(164,"Tamanho da fonte"),t(),n(165,"td")(166,"code"),e(167,"var(--font-size-default)"),t()()(),n(168,"tr")(169,"td")(170,"code"),e(171,"--text-color-placeholder"),t(),e(172," \xA0"),t(),n(173,"td"),e(174,"Cor principal do texto do placeholder"),t(),n(175,"td")(176,"code"),e(177,"var(--color-neutral-light-30)"),t()()(),n(178,"tr")(179,"td")(180,"code"),e(181,"--color"),t()(),n(182,"td"),e(183,"Cor principal do datepicker"),t(),n(184,"td")(185,"code"),e(186,"var(--color-neutral-dark-70)"),t()()(),n(187,"tr")(188,"td")(189,"code"),e(190,"--background"),t()(),n(191,"td"),e(192,"Cor de background"),t(),n(193,"td")(194,"code"),e(195,"var(--color-neutral-light-05)"),t()()(),n(196,"tr")(197,"td")(198,"code"),e(199,"--padding"),t()(),n(200,"td"),e(201,"Preenchimento"),t(),n(202,"td")(203,"code"),e(204,"0 0.5rem"),t()()(),n(205,"tr")(206,"td")(207,"code"),e(208,"--text-color"),t()(),n(209,"td"),e(210,"Cor do texto"),t(),n(211,"td")(212,"code"),e(213,"var(--color-neutral-dark-90)"),t()()(),n(214,"tr")(215,"td")(216,"strong"),e(217,"Hover"),t()(),a(218,"td")(219,"td"),t(),n(220,"tr")(221,"td")(222,"code"),e(223,"--color-hover"),t()(),n(224,"td"),e(225,"Cor principal no estado hover"),t(),n(226,"td")(227,"code"),e(228,"var(--color-brand-01-dark)"),t()()(),n(229,"tr")(230,"td")(231,"code"),e(232,"--background-hover"),t()(),n(233,"td"),e(234,"Cor de background no estado hover"),t(),n(235,"td")(236,"code"),e(237,"var(--color-brand-01-lightest)"),t()()(),n(238,"tr")(239,"td")(240,"strong"),e(241,"Focused"),t()(),a(242,"td")(243,"td"),t(),n(244,"tr")(245,"td")(246,"code"),e(247,"--color-focused"),t()(),n(248,"td"),e(249,"Cor principal no estado de focus"),t(),n(250,"td")(251,"code"),e(252,"var(--color-action-default)"),t()()(),n(253,"tr")(254,"td")(255,"code"),e(256,"--outline-color-focused"),t()(),n(257,"td"),e(258,"Cor do outline do estado de focus"),t(),n(259,"td")(260,"code"),e(261,"var(--color-action-focus)"),t()()(),n(262,"tr")(263,"td")(264,"strong"),e(265,"Disabled"),t()(),a(266,"td")(267,"td"),t(),n(268,"tr")(269,"td")(270,"code"),e(271,"--color-disabled"),t()(),n(272,"td"),e(273,"Cor principal no estado disabled"),t(),n(274,"td")(275,"code"),e(276,"var(--color-neutral-light-30)"),t()()(),n(277,"tr")(278,"td")(279,"code"),e(280,"--background-disabled"),t()(),n(281,"td"),e(282,"Cor de background no estado disabled \xA0"),t(),n(283,"td")(284,"code"),e(285,"var(--color-neutral-light-20)"),t()()(),n(286,"tr")(287,"td")(288,"code"),e(289,"--text-color-disabled"),t()(),n(290,"td"),e(291,"Cor do texto no estado disabled"),t(),n(292,"td")(293,"code"),e(294,"var(--color-neutral-dark-70)"),t()()()()()(),n(295,"div",9)(296,"h4",10),e(297,"Seletor"),t(),n(298,"pre",11),e(299,`<po-datepicker
    p-locale="string"
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-clean="boolean"
    p-disabled="boolean"
    p-error-async="(value) => Observable<boolean>"
    p-error-limit="boolean"
    p-error-pattern="string"
    p-format="string"
    p-help="string"
    p-iso-format="PoDatepickerIsoFormat"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-max-date="string | Date"
    p-min-date="string | Date"
    p-no-autocomplete="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    p-optional="boolean"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-readonly="boolean"
    p-required="boolean"
    p-required-field-error-message="boolean"
    p-show-required="boolean"
    p-size="string" >
</po-datepicker>
`),t()(),n(300,"h4",12),e(301,"Propriedades"),t(),n(302,"table",13)(303,"tr",14)(304,"th",15),e(305,"Nome"),t(),n(306,"th",15),e(307,"Tipo"),t(),n(308,"th",15),e(309,"Padr\xE3o"),t(),n(310,"th",15),e(311,"Descri\xE7\xE3o"),t()(),n(312,"tr",16)(313,"td",17)(314,"div",18)(315,"span",19),e(316,"p-locale"),a(317,"br"),t()()(),n(318,"td",20)(319,"code",21),e(320,"string"),t()(),n(321,"td",22),e(322,"-"),t(),n(323,"td",23)(324,"em")(325,"strong"),e(326,"(opcional)"),t()(),n(327,"p"),e(328,"Idioma do Datepicker."),t(),n(329,"blockquote")(330,"p"),e(331,"O locale padr\xE3o sera recuperado com base no "),n(332,"a",24)(333,"code"),e(334,"PoI18nService"),t()(),e(335," ou "),n(336,"em"),e(337,"browser"),t(),e(338,"."),t()()()(),n(339,"tr",16)(340,"td",17)(341,"div",25)(342,"span",26),e(343," (p-additional-help)"),a(344,"br"),t()(),n(345,"div",27),e(346,"Deprecated"),t()(),n(347,"td",20)(348,"code",28),e(349,"EventEmitter"),t()(),n(350,"td",22),e(351,"-"),t(),n(352,"td",23)(353,"em")(354,"strong"),e(355,"(opcional)"),t()(),n(356,"p"),e(357,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),t(),n(358,"blockquote")(359,"p"),e(360,"Essa propriedade est\xE1 "),n(361,"strong"),e(362,"depreciada"),t(),e(363," e ser\xE1 removida na vers\xE3o "),n(364,"code"),e(365,"23.x.x"),t(),e(366,". Recomendamos utilizar a propriedade "),n(367,"code"),e(368,"p-helper"),t(),e(369," que oferece mais recursos e flexibilidade."),t()()()(),n(370,"tr",16)(371,"td",17)(372,"div",18)(373,"span",19),e(374," p-additional-help-tooltip"),a(375,"br"),t()(),n(376,"div",27),e(377,"Deprecated"),t()(),n(378,"td",20)(379,"code",21),e(380,"string"),t()(),n(381,"td",22),e(382,"-"),t(),n(383,"td",23)(384,"em")(385,"strong"),e(386,"(opcional)"),t()(),n(387,"p"),e(388,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),n(389,"code"),e(390,"po-helper"),t(),e(391,`.
`),n(392,"strong"),e(393,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(394,"blockquote")(395,"p"),e(396,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),n(397,"blockquote")(398,"p"),e(399,"Essa propriedade est\xE1 "),n(400,"strong"),e(401,"depreciada"),t(),e(402," e ser\xE1 removida na vers\xE3o "),n(403,"code"),e(404,"23.x.x"),t(),e(405,". Recomendamos utilizar a propriedade "),n(406,"code"),e(407,"p-helper"),t(),e(408," que oferece mais recursos e flexibilidade."),t()()()(),n(409,"tr",16)(410,"td",17)(411,"div",18)(412,"span",19),e(413," p-append-in-body"),a(414,"br"),t()()(),n(415,"td",20)(416,"code",29),e(417,"boolean"),t()(),n(418,"td",22)(419,"p")(420,"code"),e(421,"false"),t()()(),n(422,"td",23)(423,"em")(424,"strong"),e(425,"(opcional)"),t()(),n(426,"p"),e(427,"Define que o "),n(428,"code"),e(429,"calendar"),t(),e(430," e/ou tooltip ("),n(431,"code"),e(432,"p-additional-help-tooltip"),t(),e(433," e/ou "),n(434,"code"),e(435,"p-error-limit"),t(),e(436,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),t(),n(437,"blockquote")(438,"p"),e(439,"Quando utilizado com "),n(440,"code"),e(441,"p-helper"),t(),e(442,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),t()()()(),n(443,"tr",16)(444,"td",17)(445,"div",18)(446,"span",19),e(447," p-auto-focus"),a(448,"br"),t()()(),n(449,"td",20)(450,"code",29),e(451,"boolean"),t()(),n(452,"td",22)(453,"p")(454,"code"),e(455,"false"),t()()(),n(456,"td",23)(457,"em")(458,"strong"),e(459,"(opcional)"),t()(),n(460,"p"),e(461,"Aplica foco no elemento ao ser iniciado."),t(),n(462,"blockquote")(463,"p"),e(464,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(465,"tr",16)(466,"td",17)(467,"div",18)(468,"span",19),e(469,"p-clean"),a(470,"br"),t()()(),n(471,"td",20)(472,"code",29),e(473,"boolean"),t()(),n(474,"td",22),e(475,"-"),t(),n(476,"td",23)(477,"em")(478,"strong"),e(479,"(opcional)"),t()(),n(480,"p"),e(481,"Habilita a\xE7\xE3o para limpar o campo."),t()()(),n(482,"tr",16)(483,"td",17)(484,"div",18)(485,"span",19),e(486,"p-disabled"),a(487,"br"),t()()(),n(488,"td",20)(489,"code",29),e(490,"boolean"),t()(),n(491,"td",22),e(492,"-"),t(),n(493,"td",23)(494,"em")(495,"strong"),e(496,"(opcional)"),t()(),n(497,"p"),e(498,"Desabilita o campo."),t()()(),n(499,"tr",16)(500,"td",17)(501,"div",18)(502,"span",19),e(503," p-error-async"),a(504,"br"),t()()(),n(505,"td",20)(506,"code",30),e(507,"(value) => Observable<boolean>"),t()(),n(508,"td",22),e(509,"-"),t(),n(510,"td",23)(511,"em")(512,"strong"),e(513,"(opcional)"),t()(),n(514,"p"),e(515,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(516,"code"),e(517,"change"),t(),e(518,"."),t()()(),n(519,"tr",16)(520,"td",17)(521,"div",18)(522,"span",19),e(523," p-error-limit"),a(524,"br"),t()()(),n(525,"td",20)(526,"code",29),e(527,"boolean"),t()(),n(528,"td",22)(529,"p")(530,"code"),e(531,"false"),t()()(),n(532,"td",23)(533,"em")(534,"strong"),e(535,"(opcional)"),t()(),n(536,"p"),e(537,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(538,"blockquote")(539,"p"),e(540,"Caso essa propriedade seja definida como "),n(541,"code"),e(542,"true"),t(),e(543,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),n(544,"tr",16)(545,"td",17)(546,"div",18)(547,"span",19),e(548," p-error-pattern"),a(549,"br"),t()()(),n(550,"td",20)(551,"code",21),e(552,"string"),t()(),n(553,"td",22),e(554,"-"),t(),n(555,"td",23)(556,"em")(557,"strong"),e(558,"(opcional)"),t()(),n(559,"p"),e(560,"Mensagem apresentada quando a data for inv\xE1lida ou fora do per\xEDodo."),t(),n(561,"blockquote")(562,"p"),e(563,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),n(564,"code"),e(565,"p-required-field-error-message"),t(),e(566," em conjunto."),t()()()(),n(567,"tr",16)(568,"td",17)(569,"div",18)(570,"span",19),e(571," p-format"),a(572,"br"),t()()(),n(573,"td",20)(574,"code",21),e(575,"string"),t()(),n(576,"td",22)(577,"p")(578,"code"),e(579,"dd/mm/yyyy"),t()()(),n(580,"td",23)(581,"em")(582,"strong"),e(583,"(opcional)"),t()(),n(584,"p"),e(585,"Formato de exibi\xE7\xE3o da data."),t(),n(586,"p"),e(587,"Valores v\xE1lidos:"),t(),n(588,"ul")(589,"li")(590,"code"),e(591,"dd/mm/yyyy"),t()(),n(592,"li")(593,"code"),e(594,"mm/dd/yyyy"),t()(),n(595,"li")(596,"code"),e(597,"yyyy/mm/dd"),t()()()()(),n(598,"tr",16)(599,"td",17)(600,"div",18)(601,"span",19),e(602," p-help"),a(603,"br"),t()()(),n(604,"td",20)(605,"code",21),e(606,"string"),t()(),n(607,"td",22),e(608,"-"),t(),n(609,"td",23)(610,"em")(611,"strong"),e(612,"(opcional)"),t()(),n(613,"p"),e(614,"Texto de apoio do campo."),t()()(),n(615,"tr",16)(616,"td",17)(617,"div",18)(618,"span",19),e(619," p-iso-format"),a(620,"br"),t()()(),n(621,"td",20)(622,"code",31),e(623,"PoDatepickerIsoFormat"),t()(),n(624,"td",22),e(625,"-"),t(),n(626,"td",23)(627,"em")(628,"strong"),e(629,"(opcional)"),t()(),n(630,"p"),e(631,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do "),n(632,"em"),e(633,"model"),t(),e(634,", independentemente do formato de entrada."),t(),n(635,"blockquote")(636,"p"),e(637,"Veja os valores v\xE1lidos no "),n(638,"em"),e(639,"enum"),t(),n(640,"code"),e(641,"PoDatepickerIsoFormat"),t(),e(642,"."),t()()()(),n(643,"tr",16)(644,"td",17)(645,"div",25)(646,"span",26),e(647," (p-keydown)"),a(648,"br"),t()()(),n(649,"td",20)(650,"code",28),e(651,"EventEmitter"),t()(),n(652,"td",22),e(653,"-"),t(),n(654,"td",23)(655,"em")(656,"strong"),e(657,"(opcional)"),t()(),n(658,"p"),e(659,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(660,"code"),e(661,"KeyboardEvent"),t(),e(662," com informa\xE7\xF5es sobre a tecla."),t()()(),n(663,"tr",16)(664,"td",17)(665,"div",18)(666,"span",19),e(667," p-label"),a(668,"br"),t()()(),n(669,"td",20)(670,"code",21),e(671,"string"),t()(),n(672,"td",22),e(673,"-"),t(),n(674,"td",23)(675,"em")(676,"strong"),e(677,"(opcional)"),t()(),n(678,"p"),e(679,"R\xF3tulo do campo."),t()()(),n(680,"tr",16)(681,"td",17)(682,"div",18)(683,"span",19),e(684," p-label-text-wrap"),a(685,"br"),t()()(),n(686,"td",20)(687,"code",29),e(688,"boolean"),t()(),n(689,"td",22)(690,"p")(691,"code"),e(692,"false"),t()()(),n(693,"td",23)(694,"em")(695,"strong"),e(696,"(opcional)"),t()(),n(697,"p"),e(698,"Habilita a quebra autom\xE1tica do texto da propriedade "),n(699,"code"),e(700,"p-label"),t(),e(701,". Quando "),n(702,"code"),e(703,"p-label-text-wrap"),t(),e(704,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),n(705,"tr",16)(706,"td",17)(707,"div",18)(708,"span",19),e(709," p-max-date"),a(710,"br"),t()()(),n(711,"td",20)(712,"code",21),e(713,"string "),t(),n(714,"code",32),e(715," Date"),t()(),n(716,"td",22),e(717,"-"),t(),n(718,"td",23)(719,"em")(720,"strong"),e(721,"(opcional)"),t()(),n(722,"p"),e(723,"Define uma data m\xE1xima para o "),n(724,"code"),e(725,"po-datepicker"),t(),e(726,"."),t()()(),n(727,"tr",16)(728,"td",17)(729,"div",18)(730,"span",19),e(731," p-min-date"),a(732,"br"),t()()(),n(733,"td",20)(734,"code",21),e(735,"string "),t(),n(736,"code",32),e(737," Date"),t()(),n(738,"td",22),e(739,"-"),t(),n(740,"td",23)(741,"em")(742,"strong"),e(743,"(opcional)"),t()(),n(744,"p"),e(745,"Define uma data m\xEDnima para o "),n(746,"code"),e(747,"po-datepicker"),t(),e(748,"."),t()()(),n(749,"tr",16)(750,"td",17)(751,"div",18)(752,"span",19),e(753," p-no-autocomplete"),a(754,"br"),t()()(),n(755,"td",20)(756,"code",29),e(757,"boolean"),t()(),n(758,"td",22)(759,"p")(760,"code"),e(761,"false"),t()()(),n(762,"td",23)(763,"em")(764,"strong"),e(765,"(opcional)"),t()(),n(766,"p"),e(767,"Define a propriedade nativa "),n(768,"code"),e(769,"autocomplete"),t(),e(770," do campo como "),n(771,"code"),e(772,"off"),t(),e(773,"."),t()()(),n(774,"tr",16)(775,"td",17)(776,"div",25)(777,"span",26),e(778," (p-blur)"),a(779,"br"),t()()(),n(780,"td",20)(781,"code",28),e(782,"EventEmitter"),t()(),n(783,"td",22),e(784,"-"),t(),n(785,"td",23)(786,"em")(787,"strong"),e(788,"(opcional)"),t()(),n(789,"p"),e(790,"Evento disparado ao sair do campo."),t()()(),n(791,"tr",16)(792,"td",17)(793,"div",25)(794,"span",26),e(795," (p-change)"),a(796,"br"),t()()(),n(797,"td",20)(798,"code",28),e(799,"EventEmitter"),t()(),n(800,"td",22),e(801,"-"),t(),n(802,"td",23)(803,"em")(804,"strong"),e(805,"(opcional)"),t()(),n(806,"p"),e(807,"Evento disparado ao alterar valor do campo."),t()()(),n(808,"tr",16)(809,"td",17)(810,"div",18)(811,"span",19),e(812," p-optional"),a(813,"br"),t()()(),n(814,"td",20)(815,"code",29),e(816,"boolean"),t()(),n(817,"td",22)(818,"p")(819,"code"),e(820,"false"),t()()(),n(821,"td",23)(822,"em")(823,"strong"),e(824,"(opcional)"),t()(),n(825,"p"),e(826,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(827,"blockquote")(828,"p"),e(829,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(830,"ul")(831,"li"),e(832,"O campo conter "),n(833,"code"),e(834,"p-required"),t(),e(835,";"),t(),n(836,"li"),e(837,"N\xE3o possuir "),n(838,"code"),e(839,"p-help"),t(),e(840," e/ou "),n(841,"code"),e(842,"p-label"),t(),e(843,"."),t()()()(),n(844,"tr",16)(845,"td",17)(846,"div",18)(847,"span",19),e(848," p-placeholder"),a(849,"br"),t()()(),n(850,"td",20)(851,"code",21),e(852,"string"),t()(),n(853,"td",22),e(854,"-"),t(),n(855,"td",23)(856,"em")(857,"strong"),e(858,"(opcional)"),t()(),n(859,"p"),e(860,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(861,"tr",16)(862,"td",17)(863,"div",18)(864,"span",19),e(865," p-helper"),a(866,"br"),t()()(),n(867,"td",20)(868,"code",33),e(869,"PoHelperOptions "),t(),n(870,"code",21),e(871," string"),t()(),n(872,"td",22),e(873,"-"),t(),n(874,"td",23)(875,"em")(876,"strong"),e(877,"(opcional)"),t()(),n(878,"p"),e(879,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),n(880,"code"),e(881,"p-label"),t(),e(882," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),n(883,"code"),e(884,"p-label"),t(),e(885,"."),t(),n(886,"blockquote")(887,"p"),e(888,"Para mais informa\xE7\xF5es acesse: "),n(889,"a",34),e(890,"https://po-ui.io/documentation/po-helper"),t(),e(891,"."),t()(),n(892,"blockquote")(893,"p"),e(894,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),n(895,"code"),e(896,"p-additional-help-tooltip"),t(),e(897," e "),n(898,"code"),e(899,"p-additional-help"),t(),e(900,") ser\xE1 ignorado."),t()()()(),n(901,"tr",16)(902,"td",17)(903,"div",18)(904,"span",19),e(905,"p-readonly"),a(906,"br"),t()()(),n(907,"td",20)(908,"code",29),e(909,"boolean"),t()(),n(910,"td",22),e(911,"-"),t(),n(912,"td",23)(913,"em")(914,"strong"),e(915,"(opcional)"),t()(),n(916,"p"),e(917,"Torna o elemento somente leitura."),t()()(),n(918,"tr",16)(919,"td",17)(920,"div",18)(921,"span",19),e(922,"p-required"),a(923,"br"),t()()(),n(924,"td",20)(925,"code",29),e(926,"boolean"),t()(),n(927,"td",22)(928,"p")(929,"code"),e(930,"false"),t()()(),n(931,"td",23)(932,"em")(933,"strong"),e(934,"(opcional)"),t()(),n(935,"p"),e(936,"Define que o campo ser\xE1 obrigat\xF3rio."),t()()(),n(937,"tr",16)(938,"td",17)(939,"div",18)(940,"span",19),e(941," p-required-field-error-message"),a(942,"br"),t()()(),n(943,"td",20)(944,"code",29),e(945,"boolean"),t()(),n(946,"td",22)(947,"p")(948,"code"),e(949,"false"),t()()(),n(950,"td",23)(951,"em")(952,"strong"),e(953,"(opcional)"),t()(),n(954,"p"),e(955,"Exibe a mensagem setada na propriedade "),n(956,"code"),e(957,"p-error-pattern"),t(),e(958," se o campo estiver vazio e for requerido."),t(),n(959,"blockquote")(960,"p"),e(961,"Necess\xE1rio que a propriedade "),n(962,"code"),e(963,"p-required"),t(),e(964," esteja habilitada."),t()()()(),n(965,"tr",16)(966,"td",17)(967,"div",18)(968,"span",19),e(969," p-show-required"),a(970,"br"),t()()(),n(971,"td",20)(972,"code",29),e(973,"boolean"),t()(),n(974,"td",22),e(975,"-"),t(),n(976,"td",23)(977,"p"),e(978,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(979,"blockquote")(980,"p"),e(981,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(982,"ul")(983,"li"),e(984,"N\xE3o possuir "),n(985,"code"),e(986,"p-help"),t(),e(987," e/ou "),n(988,"code"),e(989,"p-label"),t(),e(990,"."),t()()()(),n(991,"tr",16)(992,"td",17)(993,"div",18)(994,"span",19),e(995," p-size"),a(996,"br"),t()()(),n(997,"td",20)(998,"code",21),e(999,"string"),t()(),n(1e3,"td",22)(1001,"p")(1002,"code"),e(1003,"medium"),t()()(),n(1004,"td",23)(1005,"em")(1006,"strong"),e(1007,"(opcional)"),t()(),n(1008,"p"),e(1009,"Define o tamanho do componente:"),t(),n(1010,"ul")(1011,"li")(1012,"code"),e(1013,"small"),t(),e(1014,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(1015,"li")(1016,"code"),e(1017,"medium"),t(),e(1018,": altura do input como 44px."),t()(),n(1019,"blockquote")(1020,"p"),e(1021,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(1022,"code"),e(1023,"medium"),t(),e(1024,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(1025,"a",35),e(1026,"po-theme"),t(),e(1027,"."),t()()()()(),n(1028,"h3",12),e(1029,"M\xE9todos"),t(),n(1030,"table",36)(1031,"tr",16)(1032,"th",37)(1033,"div",18)(1034,"h4")(1035,"span",19),e(1036," focus "),t()()()()(),n(1037,"tr",23)(1038,"td",23)(1039,"p"),e(1040,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(1041,"p"),e(1042,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(1043,"pre")(1044,"code"),e(1045,`import { PoDatepickerComponent } from '@po-ui/ng-components';

...

@ViewChild(PoDatepickerComponent, { static: true }) datepicker: PoDatepickerComponent;

focusDatepicker() {
  this.datepicker.focus();
}
`),t()()()()(),a(1046,"br"),n(1047,"table",36)(1048,"tr",16)(1049,"th",37)(1050,"div",18)(1051,"h4")(1052,"span",19),e(1053," showAdditionalHelp "),t()()()()(),n(1054,"tr",23)(1055,"td",23)(1056,"p"),e(1057,"M\xE9todo que exibe "),n(1058,"code"),e(1059,"p-helper"),t(),e(1060," ou executa a a\xE7\xE3o definida em "),n(1061,"code"),e(1062,"p-helper{eventOnClick}"),t(),e(1063," ou em "),n(1064,"code"),e(1065,"p-additionalHelp"),t(),e(1066,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),n(1067,"code"),e(1068,"p-keydown"),t(),e(1069,"."),t(),n(1070,"blockquote")(1071,"p"),e(1072,"Exibe ou oculta o conte\xFAdo do componente "),n(1073,"code"),e(1074,"po-helper"),t(),e(1075," quando o componente estiver com foco."),t()(),n(1076,"pre")(1077,"code"),e(1078,`// Exemplo com p-label e p-helper
<po-datepicker
 #datepicker
 ...
 p-label="Label do datepicker"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, datepicker)"
></po-datepicker>
`),t()(),n(1079,"pre")(1080,"code"),e(1081,`...
onKeyDown(event: KeyboardEvent, inp: PoDatepickerComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),a(1082,"br"),n(1083,"h3"),e(1084,"Enums"),t(),n(1085,"h4",4)(1086,"code",5),e(1087,"PoDatepickerIsoFormat"),t()(),n(1088,"div",2)(1089,"p")(1090,"em"),e(1091,"Enum"),t(),e(1092," que define o padr\xE3o de formata\xE7\xE3o das datas."),t(),n(1093,"blockquote")(1094,"p"),e(1095,"Caso um formato padr\xE3o seja definido, o mesmo n\xE3o ser\xE1 mais alterado de acordo com o formato de entrada."),t()()(),n(1096,"h4",12),e(1097,"Propriedades"),t(),n(1098,"table",13)(1099,"tr",14)(1100,"th",15),e(1101,"Nome"),t(),n(1102,"th",15),e(1103,"Descri\xE7\xE3o"),t()(),n(1104,"tr",16)(1105,"td",17)(1106,"div",18)(1107,"span",19),e(1108," Basic"),a(1109,"br"),t()()(),n(1110,"td",23)(1111,"p"),e(1112,"Padr\xE3o "),n(1113,"strong"),e(1114,"E8601DAw"),t(),e(1115," ("),n(1116,"em"),e(1117,"yyyy-mm-dd"),t(),e(1118,")."),t()()(),n(1119,"tr",16)(1120,"td",17)(1121,"div",18)(1122,"span",19),e(1123," Extended"),a(1124,"br"),t()()(),n(1125,"td",23)(1126,"p"),e(1127,"Padr\xE3o "),n(1128,"strong"),e(1129,"E8601DZw"),t(),e(1130," ("),n(1131,"em"),e(1132,"yyyy-mm-ddThh:mm:ss+|-hh:mm"),t(),e(1133,")."),t()()()()())},dependencies:[C],encapsulation:2})}return r})();var ve=(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,l){this.route=d,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let l=d.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||r)(U(ie),U(oe))};static \u0275cmp=S({type:r,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Datepicker",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),h("p-click",function(){return i.changeTab("doc")}),a(3,"sample-po-datepicker-doc"),t(),n(4,"po-tab",3),h("p-click",function(){return i.changeTab("web")}),a(5,"sample-po-datepicker-basic-view")(6,"sample-po-datepicker-labs-view")(7,"sample-po-datepicker-airfare-view")(8,"sample-po-datepicker-airfare-reactive-form-view"),t()()()),l&2&&(s("p-actions",i.actions),p(2),s("p-active",i.activeTab==="doc"),p(2),s("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[de,v,y,ce,fe,ge,he,xe],encapsulation:2})}return r})();var We=[{path:"",component:ve}],ye=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275mod=N({type:r});static \u0275inj=L({imports:[Q.forChild(We),Q]})}return r})();var yt=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275mod=N({type:r});static \u0275inj=L({imports:[me,ye]})}return r})();export{yt as DocPoDatepickerModule};
