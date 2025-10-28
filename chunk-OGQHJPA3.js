import{o as y,p as le}from"./chunk-HSZY3T7Z.js";import{Ab as C,Fa as O,Ma as ne,O as Z,Q as $,Qa as T,Xa as ie,a as B,nb as oe,sa as ee,v as A,za as te,zb as f}from"./chunk-MF7ELP6K.js";import{$a as Q,$c as W,Aa as u,Da as w,Fb as M,Gc as L,Hc as V,Ic as z,Jc as F,Kc as R,La as n,Ma as t,N as k,Na as o,Q as I,Ra as D,Sa as S,U as s,V as c,Xc as J,Zc as Y,_a as G,ab as K,ba as j,bb as X,cb as e,eb as P,gb as h,hb as x,ib as g,ja as d,ka as N,ob as _,qa as b,ra as q}from"./chunk-CBLD3XJL.js";var ae=(()=>{class l{static \u0275fac=function(a){return new(a||l)};static \u0275cmp=b({type:l,selectors:[["sample-po-url-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","url","p-label","PO Url"]],template:function(a,i){a&1&&o(0,"po-url",0)},dependencies:[T],encapsulation:2})}return l})();var he=l=>({"docs-sample-code-tabs":l}),de=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=b({type:l,selectors:[["sample-po-url-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Url Basic"),t(),n(4,"a",2),S("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-url-basic/sample-po-url-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-url name="url" p-label="PO Url"> </po-url>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-url-basic/sample-po-url-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-url-basic',
  templateUrl: './sample-po-url-basic.component.html',
  standalone: false
})
export class SamplePoUrlBasicComponent {}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-url-basic"),t(),o(23,"hr")),a&2&&(d(5),w("po-icon "+i.sampleCodeButtonIcon),d(),P(" ",i.sampleCodeButtonLabel,""),d(),u("ngClass",_(4,he,i.hideSampleCodeTabs)))},dependencies:[M,y,f,C,ae],encapsulation:2})}return l})();var pe=(()=>{class l{additionalHelpTooltip;errorPattern;event;help;label;maxlength;minlength;placeholder;properties;size;url;propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"showRequired",label:"Show Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"required",label:"Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(m){this.event=m}restore(){this.additionalHelpTooltip="",this.properties=[],this.label=void 0,this.help=void 0,this.errorPattern="",this.placeholder="",this.minlength=void 0,this.maxlength=void 0,this.size="medium",this.url="",this.event=""}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=b({type:l,selectors:[["sample-po-url-labs"]],standalone:!1,decls:19,vars:32,consts:[["f","ngForm"],["name","url",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-additional-help-tooltip","p-clean","p-disabled","p-error-pattern","p-help","p-label","p-maxlength","p-minlength","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-size","p-error-limit","p-label-text-wrap"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(a,i){if(a&1){let p=D();n(0,"po-url",1),g("ngModelChange",function(r){return s(p),x(i.url,r)||(i.url=r),c(r)}),S("p-blur",function(){return s(p),c(i.changeEvent("p-blur"))})("p-change",function(){return s(p),c(i.changeEvent("p-change"))})("p-change-model",function(){return s(p),c(i.changeEvent("p-change-model"))})("p-enter",function(){return s(p),c(i.changeEvent("p-enter"))})("p-keydown",function(){return s(p),c(i.changeEvent("p-keydown"))}),t(),o(1,"po-divider"),n(2,"div",2),o(3,"po-info",3)(4,"po-info",4),t(),o(5,"po-divider"),n(6,"form",null,0)(8,"po-input",5),g("ngModelChange",function(r){return s(p),x(i.label,r)||(i.label=r),c(r)}),t(),n(9,"po-input",6),g("ngModelChange",function(r){return s(p),x(i.help,r)||(i.help=r),c(r)}),t(),n(10,"po-input",7),g("ngModelChange",function(r){return s(p),x(i.additionalHelpTooltip,r)||(i.additionalHelpTooltip=r),c(r)}),t(),n(11,"po-input",8),g("ngModelChange",function(r){return s(p),x(i.placeholder,r)||(i.placeholder=r),c(r)}),t(),n(12,"po-input",9),g("ngModelChange",function(r){return s(p),x(i.errorPattern,r)||(i.errorPattern=r),c(r)}),t(),n(13,"po-number",10),g("ngModelChange",function(r){return s(p),x(i.minlength,r)||(i.minlength=r),c(r)}),t(),n(14,"po-number",11),g("ngModelChange",function(r){return s(p),x(i.maxlength,r)||(i.maxlength=r),c(r)}),t(),n(15,"po-checkbox-group",12),g("ngModelChange",function(r){return s(p),x(i.properties,r)||(i.properties=r),c(r)}),t(),n(16,"po-radio-group",13),g("ngModelChange",function(r){return s(p),x(i.size,r)||(i.size=r),c(r)}),t(),n(17,"div",2)(18,"po-button",14),S("p-click",function(){return s(p),c(i.restore())}),t()()()}a&2&&(h("ngModel",i.url),u("p-additional-help-tooltip",i.additionalHelpTooltip)("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-error-pattern",i.errorPattern)("p-help",i.help)("p-label",i.label)("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap")),d(3),u("p-value",i.url),d(),u("p-value",i.event),d(4),h("ngModel",i.label),d(),h("ngModel",i.help),d(),h("ngModel",i.additionalHelpTooltip),d(),h("ngModel",i.placeholder),d(),h("ngModel",i.errorPattern),d(),h("ngModel",i.minlength),d(),h("ngModel",i.maxlength),d(),h("ngModel",i.properties),u("p-options",i.propertiesOptions),d(),h("ngModel",i.size),u("p-options",i.sizeOptions))},dependencies:[R,L,V,F,z,A,B,Z,$,O,ne,T,ie],encapsulation:2})}return l})();var fe=l=>({"docs-sample-code-tabs":l}),me=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=b({type:l,selectors:[["sample-po-url-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Url Labs"),t(),n(4,"a",2),S("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-url-labs/sample-po-url-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-url
  name="url"
  [(ngModel)]="url"
  [p-additional-help-tooltip]="additionalHelpTooltip"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-error-pattern]="errorPattern"
  [p-help]="help"
  [p-label]="label"
  [p-maxlength]="maxlength"
  [p-minlength]="minlength"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-enter)="changeEvent('p-enter')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
>
</po-url>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="url"> </po-info>

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

  <po-number class="po-md-6 po-lg-3" name="minlength" [(ngModel)]="minlength" p-clean p-label="Min Length"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="maxlength" [(ngModel)]="maxlength" p-clean p-label="Max Length"> </po-number>

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
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-url-labs/sample-po-url-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-url-labs',
  templateUrl: './sample-po-url-labs.component.html',
  standalone: false
})
export class SamplePoUrlLabsComponent implements OnInit {
  additionalHelpTooltip: string;
  errorPattern: string;
  event: string;
  help: string;
  label: string;
  maxlength: number;
  minlength: number;
  placeholder: string;
  properties: Array<string>;
  size: string;
  url: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'requiredFieldErrorMessage', label: 'Required Field Error Message' },
    { value: 'required', label: 'Required' },
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
    this.properties = [];

    this.label = undefined;
    this.help = undefined;
    this.errorPattern = '';
    this.placeholder = '';

    this.minlength = undefined;
    this.maxlength = undefined;
    this.size = 'medium';
    this.url = '';
    this.event = '';
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-url-labs"),t(),o(23,"hr")),a&2&&(d(5),w("po-icon "+i.sampleCodeButtonIcon),d(),P(" ",i.sampleCodeButtonLabel,""),d(),u("ngClass",_(4,fe,i.hideSampleCodeTabs)))},dependencies:[M,y,f,C,pe],encapsulation:2})}return l})();var ye=["boxUrl"],se=(()=>{class l{poNotification=I(ee);boxUrlElement;baseUrls=[];shortenedUrl;url;urlColumns=[{property:"url",label:"Long URL"},{property:"short",label:"Shortened URL"}];copyToClipboard(){this.boxUrlElement.nativeElement.querySelector("input").select(),document.execCommand("copy"),this.poNotification.success("Text copied!")}shortenUrl(){let m=btoa(this.url.replace(/http|www|com|br|\/|\./gi,"").trim());this.shortenedUrl=`po.com/${m.substr(m.length-3)}`+this.baseUrls.length,this.baseUrls.push({url:this.url,short:this.shortenedUrl})}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=b({type:l,selectors:[["sample-po-url-shortener"]],viewQuery:function(a,i){if(a&1&&G(ye,7,j),a&2){let p;Q(p=K())&&(i.boxUrlElement=p.first)}},standalone:!1,decls:11,vars:7,consts:[["f","ngForm"],["boxUrl",""],[1,"po-row"],["name","url","p-label","Type your URL to be shortened","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","shortenedUrl","p-label","URL shortened","p-readonly","",1,"po-lg-6",3,"ngModelChange","ngModel"],["p-label","Shorten URL","p-kind","primary",1,"po-lg-2",3,"p-click","p-disabled"],["p-icon","an an-copy","p-label","Copy",1,"po-offset-lg-4","po-offset-xl-4","po-lg-2",3,"click","p-disabled"],["p-striped","true",3,"p-columns","p-items","p-hide-table-search"]],template:function(a,i){if(a&1){let p=D();n(0,"form",null,0)(2,"div",2)(3,"po-url",3),g("ngModelChange",function(r){return s(p),x(i.url,r)||(i.url=r),c(r)}),t(),n(4,"po-input",4,1),g("ngModelChange",function(r){return s(p),x(i.shortenedUrl,r)||(i.shortenedUrl=r),c(r)}),t()(),n(6,"div",2)(7,"po-button",5),S("p-click",function(){return s(p),c(i.shortenUrl())}),t(),n(8,"po-button",6),S("click",function(){return s(p),c(i.copyToClipboard())}),t()()(),o(9,"po-divider")(10,"po-table",7)}if(a&2){let p=X(1);d(3),h("ngModel",i.url),d(),h("ngModel",i.shortenedUrl),d(3),u("p-disabled",p.invalid),d(),u("p-disabled",!i.shortenedUrl),d(2),u("p-columns",i.urlColumns)("p-items",i.baseUrls)("p-hide-table-search",!1)}},dependencies:[R,L,V,F,z,A,B,O,T,te],encapsulation:2})}return l})();var Pe=l=>({"docs-sample-code-tabs":l}),ce=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=b({type:l,selectors:[["sample-po-url-shortener-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Url - Shortener"),t(),n(4,"a",2),S("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-url-shortener/sample-po-url-shortener.component.html"),t(),n(13,"pre",7),e(14,`<form #f="ngForm">
  <div class="po-row">
    <po-url class="po-lg-6" name="url" [(ngModel)]="url" p-label="Type your URL to be shortened" p-required> </po-url>

    <po-input #boxUrl class="po-lg-6" name="shortenedUrl" [(ngModel)]="shortenedUrl" p-label="URL shortened" p-readonly>
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-lg-2" p-label="Shorten URL" p-kind="primary" [p-disabled]="f.invalid" (p-click)="shortenUrl()">
    </po-button>

    <po-button
      class="po-offset-lg-4 po-offset-xl-4 po-lg-2"
      p-icon="an an-copy"
      p-label="Copy"
      [p-disabled]="!shortenedUrl"
      (click)="copyToClipboard()"
    >
    </po-button>
  </div>
</form>

<po-divider />

<po-table p-striped="true" [p-columns]="urlColumns" [p-items]="baseUrls" [p-hide-table-search]="false"> </po-table>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-url-shortener/sample-po-url-shortener.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, ElementRef, ViewChild, inject } from '@angular/core';

import { PoNotificationService, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-url-shortener',
  templateUrl: './sample-po-url-shortener.component.html',
  standalone: false
})
export class SamplePoUrlShortenerComponent {
  private poNotification = inject(PoNotificationService);

  @ViewChild('boxUrl', { read: ElementRef, static: true }) boxUrlElement;

  baseUrls: Array<any> = [];
  shortenedUrl: string;
  url: string;

  public readonly urlColumns: Array<PoTableColumn> = [
    { property: 'url', label: 'Long URL' },
    { property: 'short', label: 'Shortened URL' }
  ];

  copyToClipboard() {
    this.boxUrlElement.nativeElement.querySelector('input').select();
    document.execCommand('copy');
    this.poNotification.success('Text copied!');
  }

  shortenUrl() {
    const urlBase64 = btoa(this.url.replace(/http|www|com|br|\\/|\\./gi, '').trim());

    this.shortenedUrl = \`po.com/\${urlBase64.substr(urlBase64.length - 3)}\` + this.baseUrls.length;
    this.baseUrls.push({ url: this.url, short: this.shortenedUrl });
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-url-shortener"),t(),o(23,"hr")),a&2&&(d(5),w("po-icon "+i.sampleCodeButtonIcon),d(),P(" ",i.sampleCodeButtonLabel,""),d(),u("ngClass",_(4,Pe,i.hideSampleCodeTabs)))},dependencies:[M,y,f,C,se],encapsulation:2})}return l})();var ue=(()=>{class l{static \u0275fac=function(a){return new(a||l)};static \u0275cmp=b({type:l,selectors:[["sample-po-url-doc"]],standalone:!1,decls:1240,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(a,i){a&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoUrlComponent"),t()(),n(21,"div",2)(22,"p"),e(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),t(),n(24,"p"),e(25,"Importante:"),t(),n(26,"ul")(27,"li"),e(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),t()(),n(29,"h4"),e(30,"Tokens customiz\xE1veis"),t(),n(31,"p"),e(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),o(33,"br"),e(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),n(35,"code"),e(36,".po-input"),t()(),n(37,"blockquote")(38,"p"),e(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),n(40,"a",6),e(41,"Grid System"),t(),e(42,"."),t()(),n(43,"blockquote")(44,"p"),e(45,"Para maiores informa\xE7\xF5es, acesse o guia "),n(46,"a",7),e(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(48,"."),t()(),n(49,"table")(50,"thead")(51,"tr")(52,"th"),e(53,"Propriedade"),t(),n(54,"th"),e(55,"Descri\xE7\xE3o"),t(),n(56,"th"),e(57,"Valor Padr\xE3o"),t()()(),n(58,"tbody")(59,"tr")(60,"td")(61,"strong"),e(62,"Default Values"),t()(),o(63,"td")(64,"td"),t(),n(65,"tr")(66,"td")(67,"code"),e(68,"--font-family"),t()(),n(69,"td"),e(70,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(71,"td")(72,"code"),e(73,"var(--font-family-theme)"),t()()(),n(74,"tr")(75,"td")(76,"code"),e(77,"--font-size"),t()(),n(78,"td"),e(79,"Tamanho da fonte"),t(),n(80,"td")(81,"code"),e(82,"var(--font-size-default)"),t()()(),n(83,"tr")(84,"td")(85,"code"),e(86,"--text-color-placeholder"),t()(),n(87,"td"),e(88,"Cor do texto placeholder"),t(),n(89,"td")(90,"code"),e(91,"var(--color-neutral-light-30)"),t()()(),n(92,"tr")(93,"td")(94,"code"),e(95,"--color"),t()(),n(96,"td"),e(97,"Cor pincipal do input"),t(),n(98,"td")(99,"code"),e(100,"var(--color-neutral-dark-70)"),t()()(),n(101,"tr")(102,"td")(103,"code"),e(104,"--background"),t()(),n(105,"td"),e(106,"Cor de background"),t(),n(107,"td")(108,"code"),e(109,"var(--color-neutral-light-05)"),t()()(),n(110,"tr")(111,"td")(112,"code"),e(113,"--padding"),t()(),n(114,"td"),e(115,"Preenchimento"),t(),n(116,"td")(117,"code"),e(118,"0 0.5rem"),t()()(),n(119,"tr")(120,"td")(121,"code"),e(122,"--text-color"),t()(),n(123,"td"),e(124,"Cor do texto"),t(),n(125,"td")(126,"code"),e(127,"var(--color-neutral-dark-90)"),t()()(),n(128,"tr")(129,"td")(130,"strong"),e(131,"Hover"),t()(),o(132,"td")(133,"td"),t(),n(134,"tr")(135,"td")(136,"code"),e(137,"--color-hover"),t()(),n(138,"td"),e(139,"Cor principal no estado hover"),t(),n(140,"td")(141,"code"),e(142,"var(--color-brand-01-dark)"),t()()(),n(143,"tr")(144,"td")(145,"code"),e(146,"--background-hover"),t()(),n(147,"td"),e(148,"Cor de background no estado hover"),t(),n(149,"td")(150,"code"),e(151,"var(--color-brand-01-lightest)"),t()()(),n(152,"tr")(153,"td")(154,"strong"),e(155,"Focused"),t()(),o(156,"td")(157,"td"),t(),n(158,"tr")(159,"td")(160,"code"),e(161,"--color-focused"),t()(),n(162,"td"),e(163,"Cor principal no estado de focus"),t(),n(164,"td")(165,"code"),e(166,"var(--color-action-default)"),t()()(),n(167,"tr")(168,"td")(169,"code"),e(170,"--outline-color-focused"),t()(),n(171,"td"),e(172,"Cor do outline do estado de focus"),t(),n(173,"td")(174,"code"),e(175,"var(--color-action-focus)"),t()()(),n(176,"tr")(177,"td")(178,"strong"),e(179,"Disabled"),t()(),o(180,"td")(181,"td"),t(),n(182,"tr")(183,"td")(184,"code"),e(185,"--color-disabled"),t()(),n(186,"td"),e(187,"Cor principal no estado disabled"),t(),n(188,"td")(189,"code"),e(190,"var(--color-neutral-light-30)"),t()()(),n(191,"tr")(192,"td")(193,"code"),e(194,"--background-disabled"),t()(),n(195,"td"),e(196,"Cor de background no estado disabled"),t(),n(197,"td")(198,"code"),e(199,"var(--color-neutral-light-20)"),t()()(),n(200,"tr")(201,"td")(202,"code"),e(203,"--text-color-disabled"),t()(),n(204,"td"),e(205,"Cor do texto no estado disabled"),t(),n(206,"td")(207,"code"),e(208,"var(--color-neutral-dark-70)"),t()()()()(),n(209,"p"),o(210,"br"),e(211," O "),n(212,"code"),e(213,"po-url"),t(),e(214," \xE9 um input espec\xEDfico para receber URL, com o pattern j\xE1 configurado."),t()(),n(215,"div",8)(216,"h4",9),e(217,"Seletor"),t(),n(218,"pre",10),e(219,`<po-url
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
    p-maxlength="number"
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
    p-upper-case="boolean" >
</po-url>
`),t()(),n(220,"h4",11),e(221,"Propriedades"),t(),n(222,"table",12)(223,"tr",13)(224,"th",14),e(225,"Nome"),t(),n(226,"th",14),e(227,"Tipo"),t(),n(228,"th",14),e(229,"Padr\xE3o"),t(),n(230,"th",14),e(231,"Descri\xE7\xE3o"),t()(),n(232,"tr",15)(233,"td",16)(234,"div",17)(235,"span",18),e(236," (p-additional-help)"),o(237,"br"),t()(),n(238,"div",19),e(239,"Deprecated"),t()(),n(240,"td",20)(241,"code",21),e(242,"EventEmitter"),t()(),n(243,"td",22),e(244,"-"),t(),n(245,"td",23)(246,"em")(247,"strong"),e(248,"(opcional)"),t()(),n(249,"p"),e(250,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),n(251,"code"),e(252,"p-help"),t(),e(253,"."),t(),n(254,"blockquote")(255,"p"),e(256,"Essa propriedade est\xE1 "),n(257,"strong"),e(258,"depreciada"),t(),e(259," e ser\xE1 removida na vers\xE3o "),n(260,"code"),e(261,"23.x.x"),t(),e(262,". Recomendamos utilizar a propriedade "),n(263,"code"),e(264,"p-helper"),t(),e(265," que oferece mais recursos e flexibilidade."),t()()()(),n(266,"tr",15)(267,"td",16)(268,"div",24)(269,"span",25),e(270," p-additional-help-tooltip"),o(271,"br"),t()(),n(272,"div",19),e(273,"Deprecated"),t()(),n(274,"td",20)(275,"code",26),e(276,"string"),t()(),n(277,"td",22),e(278,"-"),t(),n(279,"td",23)(280,"em")(281,"strong"),e(282,"(opcional)"),t()(),n(283,"p"),e(284,"Exibe um \xEDcone de ajuda adicional ao "),n(285,"code"),e(286,"p-help"),t(),e(287,`, com o texto desta propriedade no tooltip.
Se o evento `),n(288,"code"),e(289,"p-additional-help"),t(),e(290,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),n(291,"strong"),e(292,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(293,"blockquote")(294,"p"),e(295,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),n(296,"blockquote")(297,"p"),e(298,"Essa propriedade est\xE1 "),n(299,"strong"),e(300,"depreciada"),t(),e(301," e ser\xE1 removida na vers\xE3o "),n(302,"code"),e(303,"23.x.x"),t(),e(304,". Recomendamos utilizar a propriedade "),n(305,"code"),e(306,"p-helper"),t(),e(307," que oferece mais recursos e flexibilidade."),t()()()(),n(308,"tr",15)(309,"td",16)(310,"div",24)(311,"span",25),e(312," p-append-in-body"),o(313,"br"),t()()(),n(314,"td",20)(315,"code",27),e(316,"boolean"),t()(),n(317,"td",22)(318,"p")(319,"code"),e(320,"false"),t()()(),n(321,"td",23)(322,"em")(323,"strong"),e(324,"(opcional)"),t()(),n(325,"p"),e(326,"Define que o tooltip ("),n(327,"code"),e(328,"p-additional-help-tooltip"),t(),e(329," e/ou "),n(330,"code"),e(331,"p-error-limit"),t(),e(332,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),n(333,"blockquote")(334,"p"),e(335,"Quando utilizado com "),n(336,"code"),e(337,"p-additional-help-tooltip"),t(),e(338,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),n(339,"tr",15)(340,"td",16)(341,"div",24)(342,"span",25),e(343," p-auto-focus"),o(344,"br"),t()()(),n(345,"td",20)(346,"code",27),e(347,"boolean"),t()(),n(348,"td",22)(349,"p")(350,"code"),e(351,"false"),t()()(),n(352,"td",23)(353,"em")(354,"strong"),e(355,"(opcional)"),t()(),n(356,"p"),e(357,"Aplica foco no elemento ao ser iniciado."),t(),n(358,"blockquote")(359,"p"),e(360,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(361,"tr",15)(362,"td",16)(363,"div",17)(364,"span",18),e(365," (p-blur)"),o(366,"br"),t()()(),n(367,"td",20)(368,"code",21),e(369,"EventEmitter"),t()(),n(370,"td",22),e(371,"-"),t(),n(372,"td",23)(373,"em")(374,"strong"),e(375,"(opcional)"),t()(),n(376,"p"),e(377,"Evento disparado ao sair do campo."),t()()(),n(378,"tr",15)(379,"td",16)(380,"div",17)(381,"span",18),e(382," (p-change)"),o(383,"br"),t()()(),n(384,"td",20)(385,"code",21),e(386,"EventEmitter"),t()(),n(387,"td",22),e(388,"-"),t(),n(389,"td",23)(390,"em")(391,"strong"),e(392,"(opcional)"),t()(),n(393,"p"),e(394,"Evento disparado ao alterar valor e deixar o campo."),t()()(),n(395,"tr",15)(396,"td",16)(397,"div",17)(398,"span",18),e(399," (p-change-model)"),o(400,"br"),t()()(),n(401,"td",20)(402,"code",21),e(403,"EventEmitter"),t()(),n(404,"td",22),e(405,"-"),t(),n(406,"td",23)(407,"em")(408,"strong"),e(409,"(opcional)"),t()(),n(410,"p"),e(411,"Evento disparado ao alterar valor do model."),t()()(),n(412,"tr",15)(413,"td",16)(414,"div",24)(415,"span",25),e(416,"p-clean"),o(417,"br"),t()()(),n(418,"td",20)(419,"code",27),e(420,"boolean"),t()(),n(421,"td",22),e(422,"-"),t(),n(423,"td",23)(424,"em")(425,"strong"),e(426,"(opcional)"),t()(),n(427,"p"),e(428,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t()()(),n(429,"tr",15)(430,"td",16)(431,"div",24)(432,"span",25),e(433,"p-disabled"),o(434,"br"),t()()(),n(435,"td",20)(436,"code",27),e(437,"boolean"),t()(),n(438,"td",22)(439,"p")(440,"code"),e(441,"false"),t()()(),n(442,"td",23)(443,"em")(444,"strong"),e(445,"(opcional)"),t()(),n(446,"p"),e(447,"Se verdadeiro, desabilita o campo."),t()()(),n(448,"tr",15)(449,"td",16)(450,"div",24)(451,"span",25),e(452," p-emit-all-changes"),o(453,"br"),t()()(),n(454,"td",20)(455,"code",27),e(456,"boolean"),t()(),n(457,"td",22)(458,"p")(459,"code"),e(460,"false"),t()()(),n(461,"td",23)(462,"em")(463,"strong"),e(464,"(opcional)"),t()(),n(465,"p"),e(466,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),t()()(),n(467,"tr",15)(468,"td",16)(469,"div",17)(470,"span",18),e(471," (p-enter)"),o(472,"br"),t()()(),n(473,"td",20)(474,"code",21),e(475,"EventEmitter"),t()(),n(476,"td",22),e(477,"-"),t(),n(478,"td",23)(479,"em")(480,"strong"),e(481,"(opcional)"),t()(),n(482,"p"),e(483,"Evento disparado ao entrar do campo."),t()()(),n(484,"tr",15)(485,"td",16)(486,"div",24)(487,"span",25),e(488," p-error-async-properties"),o(489,"br"),t()()(),n(490,"td",20)(491,"code",28),e(492,"ErrorAsyncProperties"),t()(),n(493,"td",22),e(494,"-"),t(),n(495,"td",23)(496,"em")(497,"strong"),e(498,"(opcional)"),t()(),n(499,"p"),e(500,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),n(501,"code"),e(502,"Reactive Forms"),t(),e(503,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),n(504,"code"),e(505,"asyncValidators"),t(),e(506,"."),t()()(),n(507,"tr",15)(508,"td",16)(509,"div",24)(510,"span",25),e(511," p-error-limit"),o(512,"br"),t()()(),n(513,"td",20)(514,"code",27),e(515,"boolean"),t()(),n(516,"td",22)(517,"p")(518,"code"),e(519,"false"),t()()(),n(520,"td",23)(521,"em")(522,"strong"),e(523,"(opcional)"),t()(),n(524,"p"),e(525,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(526,"blockquote")(527,"p"),e(528,"Caso essa propriedade seja definida como "),n(529,"code"),e(530,"true"),t(),e(531,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),n(532,"tr",15)(533,"td",16)(534,"div",24)(535,"span",25),e(536," p-error-pattern"),o(537,"br"),t()()(),n(538,"td",20)(539,"code",26),e(540,"string"),t()(),n(541,"td",22),e(542,"-"),t(),n(543,"td",23)(544,"em")(545,"strong"),e(546,"(opcional)"),t()(),n(547,"p"),e(548,"Mensagem que ser\xE1 apresentada quando o "),n(549,"code"),e(550,"pattern"),t(),e(551," ou a m\xE1scara n\xE3o for satisfeita."),t(),n(552,"blockquote")(553,"p"),e(554,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),n(555,"code"),e(556,"p-required-field-error-message"),t(),e(557," em conjunto."),t()()()(),n(558,"tr",15)(559,"td",16)(560,"div",24)(561,"span",25),e(562," p-help"),o(563,"br"),t()()(),n(564,"td",20)(565,"code",26),e(566,"string"),t()(),n(567,"td",22),e(568,"-"),t(),n(569,"td",23)(570,"em")(571,"strong"),e(572,"(opcional)"),t()(),n(573,"p"),e(574,"Texto de apoio do campo."),t()()(),n(575,"tr",15)(576,"td",16)(577,"div",24)(578,"span",25),e(579," p-icon"),o(580,"br"),t()()(),n(581,"td",20)(582,"code",26),e(583,"string "),t(),n(584,"code",29),e(585," TemplateRef<void>"),t()(),n(586,"td",22),e(587,"-"),t(),n(588,"td",23)(589,"em")(590,"strong"),e(591,"(opcional)"),t()(),n(592,"p"),e(593,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),n(594,"p"),e(595,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(596,"a",30),e(597,"Biblioteca de \xEDcones"),t(),e(598,". conforme exemplo abaixo:"),t(),n(599,"pre")(600,"code"),e(601,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),t()(),n(602,"p"),e(603,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),n(604,"em"),e(605,"Font Awesome"),t(),e(606,", da seguinte forma:"),t(),n(607,"pre")(608,"code"),e(609,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),t()(),n(610,"p"),e(611,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(612,"code"),e(613,"TemplateRef"),t(),e(614,", conforme exemplo abaixo:"),t(),n(615,"pre")(616,"code"),e(617,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),t()(),n(618,"blockquote")(619,"p"),e(620,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),n(621,"code"),e(622,"font-size: inherit"),t(),e(623," caso o \xEDcone utilizado n\xE3o aplique-o."),t()()()(),n(624,"tr",15)(625,"td",16)(626,"div",17)(627,"span",18),e(628," (p-keydown)"),o(629,"br"),t()()(),n(630,"td",20)(631,"code",21),e(632,"EventEmitter"),t()(),n(633,"td",22),e(634,"-"),t(),n(635,"td",23)(636,"em")(637,"strong"),e(638,"(opcional)"),t()(),n(639,"p"),e(640,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(641,"code"),e(642,"KeyboardEvent"),t(),e(643," com informa\xE7\xF5es sobre a tecla."),t()()(),n(644,"tr",15)(645,"td",16)(646,"div",24)(647,"span",25),e(648," p-label"),o(649,"br"),t()()(),n(650,"td",20)(651,"code",26),e(652,"string"),t()(),n(653,"td",22),e(654,"-"),t(),n(655,"td",23)(656,"em")(657,"strong"),e(658,"(opcional)"),t()(),n(659,"p"),e(660,"R\xF3tulo do campo."),t()()(),n(661,"tr",15)(662,"td",16)(663,"div",24)(664,"span",25),e(665," p-label-text-wrap"),o(666,"br"),t()()(),n(667,"td",20)(668,"code",27),e(669,"boolean"),t()(),n(670,"td",22)(671,"p")(672,"code"),e(673,"false"),t()()(),n(674,"td",23)(675,"em")(676,"strong"),e(677,"(opcional)"),t()(),n(678,"p"),e(679,"Habilita a quebra autom\xE1tica do texto da propriedade "),n(680,"code"),e(681,"p-label"),t(),e(682,". Quando "),n(683,"code"),e(684,"p-label-text-wrap"),t(),e(685,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),n(686,"tr",15)(687,"td",16)(688,"div",24)(689,"span",25),e(690,"p-mask"),o(691,"br"),t()()(),n(692,"td",20)(693,"code",26),e(694,"string"),t()(),n(695,"td",22),e(696,"-"),t(),n(697,"td",23)(698,"em")(699,"strong"),e(700,"(opcional)"),t()(),n(701,"p"),e(702,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),t()()(),n(703,"tr",15)(704,"td",16)(705,"div",24)(706,"span",25),e(707,"p-mask-format-model"),o(708,"br"),t()()(),n(709,"td",20)(710,"code",27),e(711,"boolean"),t()(),n(712,"td",22)(713,"p")(714,"code"),e(715,"false"),t()()(),n(716,"td",23)(717,"em")(718,"strong"),e(719,"(opcional)"),t()(),n(720,"p"),e(721,"Indica se o "),n(722,"code"),e(723,"model"),t(),e(724," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),t()()(),n(725,"tr",15)(726,"td",16)(727,"div",24)(728,"span",25),e(729," p-mask-no-length-validation"),o(730,"br"),t()()(),n(731,"td",20)(732,"code",27),e(733,"boolean"),t()(),n(734,"td",22)(735,"p")(736,"code"),e(737,"false"),t()()(),n(738,"td",23)(739,"p"),e(740,"Define se os caracteres especiais da m\xE1scara devem ser ignorados ao validar os comprimentos m\xEDnimo ("),n(741,"code"),e(742,"minLength"),t(),e(743,") e m\xE1ximo ("),n(744,"code"),e(745,"maxLength"),t(),e(746,") do campo."),t(),n(747,"ul")(748,"li"),e(749,"Quando "),n(750,"code"),e(751,"true"),t(),e(752,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),t(),n(753,"li"),e(754,"Quando "),n(755,"code"),e(756,"false"),t(),e(757,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),t()(),n(758,"blockquote")(759,"p"),e(760,"Ser\xE1 ignorado essa propriedade , caso esteja utilizando junto com a propriedade "),n(761,"code"),e(762,"p-mask-format-model"),t(),e(763,"."),t()(),n(764,"p"),e(765,"Exemplo:"),t(),n(766,"pre")(767,"code"),e(768,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),t()(),n(769,"ul")(770,"li"),e(771,"Entrada: "),n(772,"code"),e(773,"123-456"),t(),e(774," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),n(775,"code"),e(776,"-"),t(),e(777,"."),t()()()(),n(778,"tr",15)(779,"td",16)(780,"div",24)(781,"span",25),e(782," p-maxlength"),o(783,"br"),t()()(),n(784,"td",20)(785,"code",31),e(786,"number"),t()(),n(787,"td",22),e(788,"-"),t(),n(789,"td",23)(790,"em")(791,"strong"),e(792,"(opcional)"),t()(),n(793,"p"),e(794,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),t()()(),n(795,"tr",15)(796,"td",16)(797,"div",24)(798,"span",25),e(799," p-minlength"),o(800,"br"),t()()(),n(801,"td",20)(802,"code",31),e(803,"number"),t()(),n(804,"td",22),e(805,"-"),t(),n(806,"td",23)(807,"em")(808,"strong"),e(809,"(opcional)"),t()(),n(810,"p"),e(811,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),t()()(),n(812,"tr",15)(813,"td",16)(814,"div",24)(815,"span",25),e(816," name"),o(817,"br"),t()()(),n(818,"td",20)(819,"code",26),e(820,"string"),t()(),n(821,"td",22),e(822,"-"),t(),n(823,"td",23)(824,"p"),e(825,"Nome e identificador do campo."),t()()(),n(826,"tr",15)(827,"td",16)(828,"div",24)(829,"span",25),e(830," p-no-autocomplete"),o(831,"br"),t()()(),n(832,"td",20)(833,"code",27),e(834,"boolean"),t()(),n(835,"td",22)(836,"p")(837,"code"),e(838,"false"),t()()(),n(839,"td",23)(840,"em")(841,"strong"),e(842,"(opcional)"),t()(),n(843,"p"),e(844,"Define a propriedade nativa "),n(845,"code"),e(846,"autocomplete"),t(),e(847," do campo como "),n(848,"code"),e(849,"off"),t(),e(850,"."),t(),n(851,"blockquote")(852,"p"),e(853,"No componente "),n(854,"code"),e(855,"po-password"),t(),e(856," ser\xE1 definido como "),n(857,"code"),e(858,"new-password"),t(),e(859,"."),t()(),n(860,"p"),e(861,"Nos componentes "),n(862,"code"),e(863,"po-password"),t(),e(864," e "),n(865,"code"),e(866,"po-login"),t(),e(867," o valor padr\xE3o ser\xE1 "),n(868,"code"),e(869,"true"),t(),e(870,"."),t()()(),n(871,"tr",15)(872,"td",16)(873,"div",24)(874,"span",25),e(875," p-optional"),o(876,"br"),t()()(),n(877,"td",20)(878,"code",27),e(879,"boolean"),t()(),n(880,"td",22)(881,"p")(882,"code"),e(883,"false"),t()()(),n(884,"td",23)(885,"em")(886,"strong"),e(887,"(opcional)"),t()(),n(888,"p"),e(889,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(890,"blockquote")(891,"p"),e(892,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(893,"ul")(894,"li"),e(895,"O campo conter "),n(896,"code"),e(897,"p-required"),t(),e(898,";"),t(),n(899,"li"),e(900,"N\xE3o possuir "),n(901,"code"),e(902,"p-help"),t(),e(903," e/ou "),n(904,"code"),e(905,"p-label"),t(),e(906,"."),t()()()(),n(907,"tr",15)(908,"td",16)(909,"div",24)(910,"span",25),e(911,"p-pattern"),o(912,"br"),t()()(),n(913,"td",20)(914,"code",26),e(915,"string"),t()(),n(916,"td",22),e(917,"-"),t(),n(918,"td",23)(919,"em")(920,"strong"),e(921,"(opcional)"),t()(),n(922,"p"),e(923,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),n(924,"code"),e(925,"(p-mask)"),t(),e(926,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),t()()(),n(927,"tr",15)(928,"td",16)(929,"div",24)(930,"span",25),e(931," p-placeholder"),o(932,"br"),t()()(),n(933,"td",20)(934,"code",26),e(935,"string"),t()(),n(936,"td",22)(937,"p"),e(938,"''"),t()(),n(939,"td",23)(940,"em")(941,"strong"),e(942,"(opcional)"),t()(),n(943,"p"),e(944,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(945,"tr",15)(946,"td",16)(947,"div",24)(948,"span",25),e(949," p-helper"),o(950,"br"),t()()(),n(951,"td",20)(952,"code",32),e(953,"PoHelperOptions "),t(),n(954,"code",26),e(955," string"),t()(),n(956,"td",22),e(957,"-"),t(),n(958,"td",23)(959,"em")(960,"strong"),e(961,"(opcional)"),t()(),n(962,"p"),e(963,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label."),t(),n(964,"blockquote")(965,"p"),e(966,"Caso o "),n(967,"code"),e(968,"p-label"),t(),e(969,` n\xE3o esteja definido, o componente po-helper n\xE3o ser\xE1 exibido.
Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional (`),n(970,"code"),e(971,"p-additional-help-tooltip"),t(),e(972," e "),n(973,"code"),e(974,"p-additional-help"),t(),e(975,") ser\xE1 ignorado."),t()()()(),n(976,"tr",15)(977,"td",16)(978,"div",24)(979,"span",25),e(980,"p-readonly"),o(981,"br"),t()()(),n(982,"td",20)(983,"code",27),e(984,"boolean"),t()(),n(985,"td",22),e(986,"-"),t(),n(987,"td",23)(988,"em")(989,"strong"),e(990,"(opcional)"),t()(),n(991,"p"),e(992,"Indica que o campo ser\xE1 somente leitura."),t()()(),n(993,"tr",15)(994,"td",16)(995,"div",24)(996,"span",25),e(997,"p-required"),o(998,"br"),t()()(),n(999,"td",20)(1e3,"code",27),e(1001,"boolean"),t()(),n(1002,"td",22)(1003,"p")(1004,"code"),e(1005,"false"),t()()(),n(1006,"td",23)(1007,"em")(1008,"strong"),e(1009,"(opcional)"),t()(),n(1010,"p"),e(1011,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),n(1012,"blockquote")(1013,"p"),e(1014,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),n(1015,"code"),e(1016,"(p-disabled)"),t(),e(1017,"."),t()()()(),n(1018,"tr",15)(1019,"td",16)(1020,"div",24)(1021,"span",25),e(1022," p-required-field-error-message"),o(1023,"br"),t()()(),n(1024,"td",20)(1025,"code",27),e(1026,"boolean"),t()(),n(1027,"td",22)(1028,"p")(1029,"code"),e(1030,"false"),t()()(),n(1031,"td",23)(1032,"em")(1033,"strong"),e(1034,"(opcional)"),t()(),n(1035,"p"),e(1036,"Exibe a mensagem setada na propriedade "),n(1037,"code"),e(1038,"p-error-pattern"),t(),e(1039," se o campo estiver vazio e for requerido."),t(),n(1040,"blockquote")(1041,"p"),e(1042,"Necess\xE1rio que a propriedade "),n(1043,"code"),e(1044,"p-required"),t(),e(1045," esteja habilitada."),t()()()(),n(1046,"tr",15)(1047,"td",16)(1048,"div",24)(1049,"span",25),e(1050," p-show-required"),o(1051,"br"),t()()(),n(1052,"td",20)(1053,"code",27),e(1054,"boolean"),t()(),n(1055,"td",22),e(1056,"-"),t(),n(1057,"td",23)(1058,"p"),e(1059,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(1060,"blockquote")(1061,"p"),e(1062,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(1063,"ul")(1064,"li"),e(1065,"N\xE3o possuir "),n(1066,"code"),e(1067,"p-help"),t(),e(1068," e/ou "),n(1069,"code"),e(1070,"p-label"),t(),e(1071,"."),t()()()(),n(1072,"tr",15)(1073,"td",16)(1074,"div",24)(1075,"span",25),e(1076," p-size"),o(1077,"br"),t()()(),n(1078,"td",20)(1079,"code",26),e(1080,"string"),t()(),n(1081,"td",22)(1082,"p")(1083,"code"),e(1084,"medium"),t()()(),n(1085,"td",23)(1086,"em")(1087,"strong"),e(1088,"(opcional)"),t()(),n(1089,"p"),e(1090,"Define o tamanho do componente:"),t(),n(1091,"ul")(1092,"li")(1093,"code"),e(1094,"small"),t(),e(1095,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(1096,"li")(1097,"code"),e(1098,"medium"),t(),e(1099,": altura do input como 44px."),t()(),n(1100,"blockquote")(1101,"p"),e(1102,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(1103,"code"),e(1104,"medium"),t(),e(1105,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(1106,"a",33),e(1107,"po-theme"),t(),e(1108,"."),t()()()(),n(1109,"tr",15)(1110,"td",16)(1111,"div",24)(1112,"span",25),e(1113," p-upper-case"),o(1114,"br"),t()()(),n(1115,"td",20)(1116,"code",27),e(1117,"boolean"),t()(),n(1118,"td",22),e(1119,"-"),t(),n(1120,"td",23)(1121,"p"),e(1122,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),t()()()(),n(1123,"h3",11),e(1124,"M\xE9todos"),t(),n(1125,"table",34)(1126,"tr",15)(1127,"th",35)(1128,"div",24)(1129,"h4")(1130,"span",25),e(1131," showAdditionalHelp "),t()()()()(),n(1132,"tr",23)(1133,"td",23)(1134,"p"),e(1135,"M\xE9todo que exibe "),n(1136,"code"),e(1137,"p-additionalHelpTooltip"),t(),e(1138," ou executa a a\xE7\xE3o definida em "),n(1139,"code"),e(1140,"p-additionalHelp"),t(),e(1141,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),n(1142,"code"),e(1143,"p-keydown"),t(),e(1144,"."),t(),n(1145,"blockquote")(1146,"p"),e(1147,"Exibe ou oculta o conte\xFAdo do componente "),n(1148,"code"),e(1149,"po-helper"),t(),e(1150," quando o componente estiver com foco e com label vis\xEDvel."),t()(),n(1151,"pre")(1152,"code"),e(1153,`<po-nome-component
 #component
 ...
 p-additional-help-tooltip="Mensagem de ajuda complementar"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),t()(),n(1154,"pre")(1155,"code"),e(1156,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),t()(),n(1157,"pre")(1158,"code"),e(1159,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),o(1160,"br"),n(1161,"table",34)(1162,"tr",15)(1163,"th",35)(1164,"div",24)(1165,"h4")(1166,"span",25),e(1167," focus "),t()()()()(),n(1168,"tr",23)(1169,"td",23)(1170,"p"),e(1171,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(1172,"p"),e(1173,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(1174,"pre")(1175,"code"),e(1176,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),t()()()()(),o(1177,"br"),n(1178,"h3"),e(1179,"Interfaces"),t(),n(1180,"h4",36)(1181,"code",5),e(1182,"ErrorAsyncProperties"),t()(),n(1183,"div",2)(1184,"p"),e(1185,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),t()(),n(1186,"h4",11),e(1187,"Propriedades"),t(),n(1188,"table",12)(1189,"tr",13)(1190,"th",14),e(1191,"Nome"),t(),n(1192,"th",14),e(1193,"Tipo"),t(),n(1194,"th",14),e(1195,"Descri\xE7\xE3o"),t()(),n(1196,"tr",15)(1197,"td",16)(1198,"div",24)(1199,"span",25),e(1200," errorAsync"),o(1201,"br"),t()()(),n(1202,"td",20)(1203,"code",37),e(1204,"(value) => Observable<boolean>"),t()(),n(1205,"td",23)(1206,"p"),e(1207,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(1208,"code"),e(1209,"change"),t(),e(1210," ou "),n(1211,"code"),e(1212,"change-model"),t(),e(1213,", dependendo do valor da propriedade "),n(1214,"code"),e(1215,"triggerMode"),t(),e(1216,"."),t()()(),n(1217,"tr",15)(1218,"td",16)(1219,"div",24)(1220,"span",25),e(1221," triggerMode"),o(1222,"br"),t()()(),n(1223,"td",20)(1224,"code",38),e(1225,"'change' "),t(),n(1226,"code",39),e(1227," 'changeModel'"),t()(),n(1228,"td",23)(1229,"em")(1230,"strong"),e(1231,"(opcional)"),t()(),n(1232,"p"),e(1233,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),n(1234,"code"),e(1235,"change"),t(),e(1236," ou "),n(1237,"code"),e(1238,"change-model"),t(),e(1239,"."),t()()()()())},dependencies:[y],encapsulation:2})}return l})();var Ee=(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||l)(N(J),N(Y))};static \u0275cmp=b({type:l,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Url",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),S("p-click",function(){return i.changeTab("doc")}),o(3,"sample-po-url-doc"),t(),n(4,"po-tab",3),S("p-click",function(){return i.changeTab("web")}),o(5,"sample-po-url-basic-view")(6,"sample-po-url-labs-view")(7,"sample-po-url-shortener-view"),t()()()),a&2&&(u("p-actions",i.actions),d(2),u("p-active",i.activeTab==="doc"),d(2),u("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[oe,f,C,de,me,ce,ue],encapsulation:2})}return l})();var Te=[{path:"",component:Ee}],be=(()=>{class l{static \u0275fac=function(a){return new(a||l)};static \u0275mod=q({type:l});static \u0275inj=k({imports:[W.forChild(Te),W]})}return l})();var nt=(()=>{class l{static \u0275fac=function(a){return new(a||l)};static \u0275mod=q({type:l});static \u0275inj=k({imports:[le,be]})}return l})();export{nt as DocPoUrlModule};
