import{o as w,p as se}from"./chunk-SZMGPBRK.js";import{Ab as C,Ea as X,Fa as W,Ma as de,O as pe,Q as me,Ta as q,U as _,Xa as B,a as A,nb as j,v as re,zb as v}from"./chunk-OTVKLKYF.js";import{$a as N,Aa as s,Ac as R,Cb as P,Da as T,Dc as D,Ec as V,Fc as J,Gc as F,Ha as U,Hc as L,Kc as ne,La as n,Lc as ie,Ma as t,N as H,Na as o,Pc as oe,Q as te,Ra as Q,Sa as f,Ta as K,U as c,Uc as ae,V as u,Wc as le,Yc as $,_a as O,ab as I,cb as e,eb as y,gb as b,hb as x,ib as h,ja as p,ka as Z,lb as M,qa as g,ra as z,wa as G}from"./chunk-KZJHT32G.js";var ce=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-textarea-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","textarea","p-label","PO Textarea"]],template:function(r,i){r&1&&o(0,"po-textarea",0)},dependencies:[q],encapsulation:2})}return a})();var Me=a=>({"docs-sample-code-tabs":a}),ue=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-textarea-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Textarea Basic"),t(),n(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-textarea-basic/sample-po-textarea-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-textarea name="textarea" p-label="PO Textarea"> </po-textarea>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-textarea-basic/sample-po-textarea-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-textarea-basic',
  templateUrl: './sample-po-textarea-basic.component.html',
  standalone: false
})
export class SamplePoTextareaBasicComponent {}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-textarea-basic"),t(),o(23,"hr")),r&2&&(p(5),T("po-icon "+i.sampleCodeButtonIcon),p(),y(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",M(4,Me,i.hideSampleCodeTabs)))},dependencies:[P,w,v,C,ce],encapsulation:2})}return a})();var ge=(()=>{class a{additionalHelpTooltip;event;help;label;maxlength;minlength;placeholder;properties;fieldErrorMessage;rows;size;textarea;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(m){this.event=m}restore(){this.additionalHelpTooltip="",this.textarea=void 0,this.label=void 0,this.help=void 0,this.minlength=void 0,this.maxlength=void 0,this.event=void 0,this.fieldErrorMessage="",this.rows=void 0,this.placeholder="",this.properties=[],this.size="medium"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-textarea-labs"]],standalone:!1,decls:20,vars:31,consts:[["f","ngForm"],["name","textarea",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-additional-help-tooltip","p-disabled","p-help","p-label","p-maxlength","p-minlength","p-optional","p-placeholder","p-readonly","p-required","p-field-error-message","p-show-required","p-rows","p-size","p-error-limit","p-label-text-wrap"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","rows","p-clean","","p-label","Rows","p-min","3",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let d=Q();n(0,"po-textarea",1),h("ngModelChange",function(l){return c(d),x(i.textarea,l)||(i.textarea=l),u(l)}),f("p-blur",function(){return c(d),u(i.changeEvent("p-blur"))})("p-change",function(){return c(d),u(i.changeEvent("p-change"))})("p-change-model",function(){return c(d),u(i.changeEvent("p-change-model"))})("p-enter",function(){return c(d),u(i.changeEvent("p-enter"))})("p-keydown",function(){return c(d),u(i.changeEvent("p-keydown"))}),t(),o(1,"po-divider"),n(2,"div",2),o(3,"po-info",3)(4,"po-info",4),t(),o(5,"po-divider"),n(6,"form",null,0)(8,"po-input",5),h("ngModelChange",function(l){return c(d),x(i.label,l)||(i.label=l),u(l)}),t(),n(9,"po-input",6),h("ngModelChange",function(l){return c(d),x(i.help,l)||(i.help=l),u(l)}),t(),n(10,"po-input",7),h("ngModelChange",function(l){return c(d),x(i.additionalHelpTooltip,l)||(i.additionalHelpTooltip=l),u(l)}),t(),n(11,"po-input",8),h("ngModelChange",function(l){return c(d),x(i.placeholder,l)||(i.placeholder=l),u(l)}),t(),n(12,"po-input",9),h("ngModelChange",function(l){return c(d),x(i.fieldErrorMessage,l)||(i.fieldErrorMessage=l),u(l)}),t(),n(13,"po-number",10),h("ngModelChange",function(l){return c(d),x(i.rows,l)||(i.rows=l),u(l)}),t(),n(14,"po-number",11),h("ngModelChange",function(l){return c(d),x(i.minlength,l)||(i.minlength=l),u(l)}),t(),n(15,"po-number",12),h("ngModelChange",function(l){return c(d),x(i.maxlength,l)||(i.maxlength=l),u(l)}),t(),n(16,"po-checkbox-group",13),h("ngModelChange",function(l){return c(d),x(i.properties,l)||(i.properties=l),u(l)}),t(),n(17,"po-radio-group",14),h("ngModelChange",function(l){return c(d),x(i.size,l)||(i.size=l),u(l)}),t(),n(18,"div",2)(19,"po-button",15),f("p-click",function(){return c(d),u(i.restore())}),t()()()}r&2&&(b("ngModel",i.textarea),s("p-additional-help-tooltip",i.additionalHelpTooltip)("p-disabled",i.properties.includes("disabled"))("p-help",i.help)("p-label",i.label)("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-field-error-message",i.fieldErrorMessage)("p-show-required",i.properties.includes("showRequired"))("p-rows",i.rows)("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap")),p(3),s("p-value",i.textarea),p(),s("p-value",i.event),p(4),b("ngModel",i.label),p(),b("ngModel",i.help),p(),b("ngModel",i.additionalHelpTooltip),p(),b("ngModel",i.placeholder),p(),b("ngModel",i.fieldErrorMessage),p(),b("ngModel",i.rows),p(),b("ngModel",i.minlength),p(),b("ngModel",i.maxlength),p(),b("ngModel",i.properties),s("p-options",i.propertiesOptions),p(),b("ngModel",i.size),s("p-options",i.sizeOptions))},dependencies:[L,D,V,F,J,re,A,pe,me,W,de,q,B],encapsulation:2})}return a})();var qe=a=>({"docs-sample-code-tabs":a}),be=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-textarea-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Textarea Labs"),t(),n(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-textarea-labs/sample-po-textarea-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-textarea
  name="textarea"
  [(ngModel)]="textarea"
  [p-additional-help-tooltip]="additionalHelpTooltip"
  [p-disabled]="properties.includes('disabled')"
  [p-help]="help"
  [p-label]="label"
  [p-maxlength]="maxlength"
  [p-minlength]="minlength"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-show-required]="properties.includes('showRequired')"
  [p-rows]="rows"
  [p-size]="size"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-enter)="changeEvent('p-enter')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
>
</po-textarea>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="textarea"> </po-info>

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
    name="fieldErrorMessage"
    [(ngModel)]="fieldErrorMessage"
    p-clean
    p-label="Field Error Message"
  >
  </po-input>

  <po-number class="po-md-6 po-lg-3" name="rows" [(ngModel)]="rows" p-clean p-label="Rows" p-min="3"> </po-number>

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
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-textarea-labs/sample-po-textarea-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-textarea-labs',
  templateUrl: './sample-po-textarea-labs.component.html',
  standalone: false
})
export class SamplePoTextareaLabsComponent implements OnInit {
  additionalHelpTooltip: string;
  event: string;
  help: string;
  label: string;
  maxlength: number;
  minlength: number;
  placeholder: string;
  properties: Array<string>;
  fieldErrorMessage: string;
  rows: string;
  size: string;
  textarea: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'required', label: 'Required' },
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
    this.textarea = undefined;
    this.label = undefined;
    this.help = undefined;
    this.minlength = undefined;
    this.maxlength = undefined;
    this.event = undefined;
    this.fieldErrorMessage = '';
    this.rows = undefined;
    this.placeholder = '';
    this.properties = [];
    this.size = 'medium';
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-textarea-labs"),t(),o(23,"hr")),r&2&&(p(5),T("po-icon "+i.sampleCodeButtonIcon),p(),y(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",M(4,qe,i.hideSampleCodeTabs)))},dependencies:[P,w,v,C,ge],encapsulation:2})}return a})();var De=["formEmail"];function Ve(a,Te){if(a&1&&(n(0,"div")(1,"div",8),o(2,"po-info",13),t(),o(3,"po-divider"),t()),a&2){let m=K();p(2),s("p-value",m.cc)}}var xe=(()=>{class a{formEmail;poModal;cc="";emailText="";from="";subject="";to="";pageActions;primaryAction={action:()=>{this.poModal.close(),this.reset()},label:"Ok"};getPageAction(){let m=this.formEmail?!this.formEmail.valid:!0;return[{label:"Send",action:this.send.bind(this),disabled:m},{label:"Clean",action:this.reset.bind(this)}]}reset(){this.formEmail.reset()}send(){this.poModal.open()}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-textarea-email"]],viewQuery:function(r,i){if(r&1&&(O(De,7),O(_,7)),r&2){let d;N(d=I())&&(i.formEmail=d.first),N(d=I())&&(i.poModal=d.first)}},standalone:!1,decls:19,vars:12,consts:[["formEmail","ngForm"],["p-title","Send email",3,"p-actions"],["name","from","p-clean","","p-label","From","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","to","p-clean","","p-label","To","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","cc","p-clean","","p-label","CC",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","subject","p-clean","","p-label","Subject","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","emailText","p-label","E-mail","p-required","","p-rows","8",1,"po-sm-12",3,"ngModelChange","ngModel"],["p-title","Email successfully sent",3,"p-primary-action"],[1,"po-row"],["p-label","From:",1,"po-md-6",3,"p-value"],["p-label","To:",1,"po-md-6",3,"p-value"],["p-label","Subject:",1,"po-md-12",3,"p-value"],["name","text","p-label","E-mail","p-readonly","","p-rows","6",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","CC:",1,"po-md-12",3,"p-value"]],template:function(r,i){if(r&1){let d=Q();n(0,"po-page-default",1)(1,"form",null,0)(3,"po-email",2),h("ngModelChange",function(l){return c(d),x(i.from,l)||(i.from=l),u(l)}),t(),n(4,"po-email",3),h("ngModelChange",function(l){return c(d),x(i.to,l)||(i.to=l),u(l)}),t(),n(5,"po-email",4),h("ngModelChange",function(l){return c(d),x(i.cc,l)||(i.cc=l),u(l)}),t(),n(6,"po-input",5),h("ngModelChange",function(l){return c(d),x(i.subject,l)||(i.subject=l),u(l)}),t(),n(7,"po-textarea",6),h("ngModelChange",function(l){return c(d),x(i.emailText,l)||(i.emailText=l),u(l)}),t()()(),n(8,"po-modal",7)(9,"div",8),o(10,"po-info",9)(11,"po-info",10),t(),o(12,"po-divider"),G(13,Ve,4,1,"div"),n(14,"div",8),o(15,"po-info",11),t(),o(16,"po-divider"),n(17,"div",8)(18,"po-textarea",12),h("ngModelChange",function(l){return c(d),x(i.emailText,l)||(i.emailText=l),u(l)}),t()()()}r&2&&(s("p-actions",i.getPageAction()),p(3),b("ngModel",i.from),p(),b("ngModel",i.to),p(),b("ngModel",i.cc),p(),b("ngModel",i.subject),p(),b("ngModel",i.emailText),p(),s("p-primary-action",i.primaryAction),p(2),s("p-value",i.from),p(),s("p-value",i.to),p(2),U(i.cc!==""?13:-1),p(2),s("p-value",i.subject),p(3),b("ngModel",i.emailText))},dependencies:[L,D,V,F,J,A,X,W,q,B,_,j],encapsulation:2})}return a})();var Le=a=>({"docs-sample-code-tabs":a}),he=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-textarea-email-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Textarea - Email"),t(),n(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-textarea-email/sample-po-textarea-email.component.html"),t(),n(13,"pre",7),e(14,`<po-page-default p-title="Send email" [p-actions]="getPageAction()">
  <form #formEmail="ngForm">
    <po-email class="po-sm-12" name="from" [(ngModel)]="from" p-clean p-label="From" p-required> </po-email>

    <po-email class="po-sm-12" name="to" [(ngModel)]="to" p-clean p-label="To" p-required> </po-email>

    <po-email class="po-sm-12" name="cc" [(ngModel)]="cc" p-clean p-label="CC"> </po-email>

    <po-input class="po-sm-12" name="subject" [(ngModel)]="subject" p-clean p-label="Subject" p-required> </po-input>

    <po-textarea class="po-sm-12" name="emailText" [(ngModel)]="emailText" p-label="E-mail" p-required p-rows="8">
    </po-textarea>
  </form>
</po-page-default>

<po-modal p-title="Email successfully sent" [p-primary-action]="primaryAction">
  <div class="po-row">
    <po-info class="po-md-6" p-label="From:" [p-value]="from"> </po-info>

    <po-info class="po-md-6" p-label="To:" [p-value]="to"> </po-info>
  </div>

  <po-divider />

  @if (cc !== '') {
    <div>
      <div class="po-row">
        <po-info class="po-md-12" p-label="CC:" [p-value]="cc"> </po-info>
      </div>
      <po-divider />
    </div>
  }

  <div class="po-row">
    <po-info class="po-md-12" p-label="Subject:" [p-value]="subject"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-textarea class="po-md-12" name="text" [(ngModel)]="emailText" p-label="E-mail" p-readonly p-rows="6">
    </po-textarea>
  </div>
</po-modal>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-textarea-email/sample-po-textarea-email.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, ViewChild } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { PoPageAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-textarea-email',
  templateUrl: './sample-po-textarea-email.component.html',
  standalone: false
})
export class SamplePoTextareaEmailComponent {
  @ViewChild('formEmail', { static: true }) formEmail: UntypedFormControl;
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  cc: string = '';
  emailText: string = '';
  from: string = '';
  subject: string = '';
  to: string = '';

  pageActions: Array<PoPageAction>;
  primaryAction: PoModalAction = {
    action: () => {
      this.poModal.close();
      this.reset();
    },
    label: 'Ok'
  };
  getPageAction() {
    const isDisabled = this.formEmail ? !this.formEmail['valid'] : true;
    return [
      { label: 'Send', action: this.send.bind(this), disabled: isDisabled },
      { label: 'Clean', action: this.reset.bind(this) }
    ];
  }

  reset() {
    this.formEmail.reset();
  }

  send() {
    this.poModal.open();
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-textarea-email"),t(),o(23,"hr")),r&2&&(p(5),T("po-icon "+i.sampleCodeButtonIcon),p(),y(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",M(4,Le,i.hideSampleCodeTabs)))},dependencies:[P,w,v,C,xe],encapsulation:2})}return a})();function We(a,Te){if(a&1&&(n(0,"div")(1,"div",8),o(2,"po-info",13),t(),o(3,"po-divider"),t()),a&2){let m=K();p(2),s("p-value",m.formEmail.get("cc").value)}}var fe=(()=>{class a{formBuilder=te(oe);poModal;formEmail;pageActions;primaryAction={action:()=>{this.poModal.close(),this.reset()},label:"Ok"};ngOnInit(){this.formEmail=this.formBuilder.group({cc:null,from:[null,R.required],to:[null,R.required],emailText:[null,R.required],subject:[null,R.required]})}getPageAction(){let m=this.formEmail?!this.formEmail.valid:!0;return[{label:"Send",action:this.send.bind(this),disabled:m},{label:"Clean",action:this.reset.bind(this)}]}reset(){this.formEmail.reset()}send(){this.poModal.open()}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-textarea-email-reactive-form"]],viewQuery:function(r,i){if(r&1&&O(_,7),r&2){let d;N(d=I())&&(i.poModal=d.first)}},standalone:!1,decls:18,vars:8,consts:[["p-title","Send email",3,"p-actions"],[3,"formGroup"],["name","from","formControlName","from","p-clean","","p-label","From","p-required","",1,"po-sm-12"],["name","to","formControlName","to","p-clean","","p-label","To","p-required","",1,"po-sm-12"],["name","cc","formControlName","cc","p-clean","","p-label","CC",1,"po-sm-12"],["name","subject","formControlName","subject","p-clean","","p-label","Subject","p-required","",1,"po-sm-12"],["name","emailText","formControlName","emailText","p-label","E-mail","p-rows","8","p-required","",1,"po-sm-12"],["p-title","Email successfully sent",3,"p-primary-action"],[1,"po-row"],["p-label","From:",1,"po-md-6",3,"p-value"],["p-label","To:",1,"po-md-6",3,"p-value"],["p-label","Subject:",1,"po-md-12",3,"p-value"],["name","text","p-label","E-mail","p-readonly","","p-required","","p-rows","6",1,"po-md-12",3,"ngModel"],["p-label","CC:",1,"po-md-12",3,"p-value"]],template:function(r,i){r&1&&(n(0,"po-page-default",0)(1,"form",1),o(2,"po-email",2)(3,"po-email",3)(4,"po-email",4)(5,"po-input",5)(6,"po-textarea",6),t()(),n(7,"po-modal",7)(8,"div",8),o(9,"po-info",9)(10,"po-info",10),t(),o(11,"po-divider"),G(12,We,4,1,"div"),n(13,"div",8),o(14,"po-info",11),t(),o(15,"po-divider"),n(16,"div",8),o(17,"po-textarea",12),t()()),r&2&&(s("p-actions",i.getPageAction()),p(),s("formGroup",i.formEmail),p(6),s("p-primary-action",i.primaryAction),p(2),s("p-value",i.formEmail.get("from").value),p(),s("p-value",i.formEmail.get("to").value),p(2),U(i.formEmail.get("cc").value?12:-1),p(2),s("p-value",i.formEmail.get("subject").value),p(3),s("ngModel",i.formEmail.get("emailText").value))},dependencies:[L,D,V,F,ne,ie,A,X,W,q,B,_,j],encapsulation:2})}return a})();var je=a=>({"docs-sample-code-tabs":a}),Se=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-textarea-email-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Textarea - Email Reactive Form"),t(),n(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-textarea-email-reactive-form/sample-po-textarea-email-reactive-form.component.html"),t(),n(13,"pre",7),e(14,`<po-page-default p-title="Send email" [p-actions]="getPageAction()">
  <form [formGroup]="formEmail">
    <po-email class="po-sm-12" name="from" formControlName="from" p-clean p-label="From" p-required> </po-email>

    <po-email class="po-sm-12" name="to" formControlName="to" p-clean p-label="To" p-required> </po-email>

    <po-email class="po-sm-12" name="cc" formControlName="cc" p-clean p-label="CC"> </po-email>

    <po-input class="po-sm-12" name="subject" formControlName="subject" p-clean p-label="Subject" p-required>
    </po-input>

    <po-textarea class="po-sm-12" name="emailText" formControlName="emailText" p-label="E-mail" p-rows="8" p-required>
    </po-textarea>
  </form>
</po-page-default>

<po-modal p-title="Email successfully sent" [p-primary-action]="primaryAction">
  <div class="po-row">
    <po-info class="po-md-6" p-label="From:" [p-value]="formEmail.get('from').value"> </po-info>

    <po-info class="po-md-6" p-label="To:" [p-value]="formEmail.get('to').value"> </po-info>
  </div>

  <po-divider />

  @if (formEmail.get('cc').value) {
    <div>
      <div class="po-row">
        <po-info class="po-md-12" p-label="CC:" [p-value]="formEmail.get('cc').value"> </po-info>
      </div>
      <po-divider />
    </div>
  }

  <div class="po-row">
    <po-info class="po-md-12" p-label="Subject:" [p-value]="formEmail.get('subject').value"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-textarea
      class="po-md-12"
      name="text"
      [ngModel]="formEmail.get('emailText').value"
      p-label="E-mail"
      p-readonly
      p-required
      p-rows="6"
    >
    </po-textarea>
  </div>
</po-modal>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-textarea-email-reactive-form/sample-po-textarea-email-reactive-form.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { PoPageAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-textarea-email-reactive-form',
  templateUrl: './sample-po-textarea-email-reactive-form.component.html',
  standalone: false
})
export class SamplePoTextareaEmailReactiveFormComponent implements OnInit {
  private formBuilder = inject(UntypedFormBuilder);

  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  formEmail: UntypedFormGroup;
  pageActions: Array<PoPageAction>;
  primaryAction: PoModalAction = {
    action: () => {
      this.poModal.close();
      this.reset();
    },
    label: 'Ok'
  };

  ngOnInit() {
    this.formEmail = this.formBuilder.group({
      cc: null,
      from: [null, Validators.required],
      to: [null, Validators.required],
      emailText: [null, Validators.required],
      subject: [null, Validators.required]
    });
  }

  getPageAction() {
    const isDisabled = this.formEmail ? !this.formEmail.valid : true;
    return [
      { label: 'Send', action: this.send.bind(this), disabled: isDisabled },
      { label: 'Clean', action: this.reset.bind(this) }
    ];
  }

  reset() {
    this.formEmail.reset();
  }

  send() {
    this.poModal.open();
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-textarea-email-reactive-form"),t(),o(23,"hr")),r&2&&(p(5),T("po-icon "+i.sampleCodeButtonIcon),p(),y(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",M(4,je,i.hideSampleCodeTabs)))},dependencies:[P,w,v,C,fe],encapsulation:2})}return a})();var ve=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-textarea-doc"]],standalone:!1,decls:804,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://www.w3.org/WAI/WCAG21/Understanding/use-of-color"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoTextareaComponent"),t()(),n(21,"div",2)(22,"p"),e(23,`Este \xE9 um componente de entrada de dados que possibilita o preechimento com m\xFAltiplas linhas.
\xC9 recomendado para observa\xE7\xF5es, detalhamentos e outras situa\xE7\xF5es onde o usu\xE1rio deva preencher com um texto.`),t(),n(24,"p"),e(25,"Importante:"),t(),n(26,"ul")(27,"li"),e(28,"A propriedade "),n(29,"code"),e(30,"name"),t(),e(31," \xE9 obrigat\xF3ria para que o formul\xE1rio e o "),n(32,"code"),e(33,"model"),t(),e(34,` funcionem corretamente. Do contr\xE1rio, ocorrer\xE1 um erro de
`),n(35,"em"),e(36,"Angular"),t(),e(37,", onde ser\xE1 necess\xE1rio informar o atributo "),n(38,"code"),e(39,"name"),t(),e(40," ou o atributo "),n(41,"code"),e(42,'[ngModelOptions]="{standalone: true}"'),t(),e(43,", por exemplo:"),t()(),n(44,"pre")(45,"code"),e(46,`<po-textarea
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}">
</po-textarea>
`),t()(),n(47,"h4"),e(48,"Acessibilidade tratada no componente"),t(),n(49,"p"),e(50,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas. S\xE3o elas:"),t(),n(51,"ul")(52,"li"),e(53,`O Text area foi desenvolvido com uso de controles padr\xF5es HTML, o que permite a identifica\xE7\xE3o do mesmo na interface por tecnologias
assistivas. `),n(54,"a",6),e(55,"WCAG 4.1.2: Name, Role, Value"),t()(),n(56,"li"),e(57,`O foco \xE9 vis\xEDvel e possui uma espessura superior a 2 pixels CSS, n\xE3o ficando escondido por outros
elementos da tela. `),n(58,"a",7),e(59,"WCAG 2.4.12: Focus Appearance)"),t()(),n(60,"li"),e(61,`A identifica\xE7\xE3o do erro acontece tamb\xE9m atrav\xE9s da mudan\xE7a de cor do campo, mas tamb\xE9m de um \xEDcone
junto da mensagem. `),n(62,"a",8),e(63,"WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification"),t()()(),n(64,"h4"),e(65,"Tokens customiz\xE1veis"),t(),n(66,"p"),e(67,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),n(68,"blockquote")(69,"p"),e(70,"Para maiores informa\xE7\xF5es, acesse o guia "),n(71,"a",9),e(72,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(73,"."),t()(),n(74,"table")(75,"thead")(76,"tr")(77,"th"),e(78,"Propriedade"),t(),n(79,"th"),e(80,"Descri\xE7\xE3o"),t(),n(81,"th"),e(82,"Valor Padr\xE3o"),t()()(),n(83,"tbody")(84,"tr")(85,"td")(86,"strong"),e(87,"Default Values"),t()(),o(88,"td")(89,"td"),t(),n(90,"tr")(91,"td")(92,"code"),e(93,"--font-family"),t()(),n(94,"td"),e(95,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(96,"td")(97,"code"),e(98,"var(--font-family-theme)"),t()()(),n(99,"tr")(100,"td")(101,"code"),e(102,"--font-size"),t()(),n(103,"td"),e(104,"Tamanho da fonte"),t(),n(105,"td")(106,"code"),e(107,"var(--font-size-default)"),t()()(),n(108,"tr")(109,"td")(110,"code"),e(111,"--text-color-placeholder"),t()(),n(112,"td"),e(113,"Cor do texto placeholder"),t(),n(114,"td")(115,"code"),e(116,"var(--color-neutral-light-30)"),t()()(),n(117,"tr")(118,"td")(119,"code"),e(120,"--color"),t()(),n(121,"td"),e(122,"Cor pincipal do campo"),t(),n(123,"td")(124,"code"),e(125,"var(--color-neutral-dark-70)"),t()()(),n(126,"tr")(127,"td")(128,"code"),e(129,"--background"),t()(),n(130,"td"),e(131,"Cor de background"),t(),n(132,"td")(133,"code"),e(134,"var(--color-neutral-light-05)"),t()()()()()(),n(135,"div",10)(136,"h4",11),e(137,"Seletor"),t(),n(138,"pre",12),e(139,`<po-textarea
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-disabled="boolean"
    (p-enter)="EventEmitter"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-help="string"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-maxlength="number"
    p-minlength="number"
    name="string"
    p-optional="boolean"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-readonly="boolean"
    p-required="boolean"
    p-rows="number"
    p-show-required="boolean"
    p-size="string" >
</po-textarea>
`),t()(),n(140,"h4",13),e(141,"Propriedades"),t(),n(142,"table",14)(143,"tr",15)(144,"th",16),e(145,"Nome"),t(),n(146,"th",16),e(147,"Tipo"),t(),n(148,"th",16),e(149,"Padr\xE3o"),t(),n(150,"th",16),e(151,"Descri\xE7\xE3o"),t()(),n(152,"tr",17)(153,"td",18)(154,"div",19)(155,"span",20),e(156," (p-additional-help)"),o(157,"br"),t()(),n(158,"div",21),e(159,"Deprecated"),t()(),n(160,"td",22)(161,"code",23),e(162,"EventEmitter"),t()(),n(163,"td",24),e(164,"-"),t(),n(165,"td",25)(166,"em")(167,"strong"),e(168,"(opcional)"),t()(),n(169,"p"),e(170,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),n(171,"code"),e(172,"p-help"),t(),e(173,"."),t(),n(174,"blockquote")(175,"p"),e(176,"Essa propriedade est\xE1 "),n(177,"strong"),e(178,"depreciada"),t(),e(179," e ser\xE1 removida na vers\xE3o "),n(180,"code"),e(181,"23.x.x"),t(),e(182,". Recomendamos utilizar a propriedade "),n(183,"code"),e(184,"p-helper"),t(),e(185," que oferece mais recursos e flexibilidade."),t()()()(),n(186,"tr",17)(187,"td",18)(188,"div",26)(189,"span",27),e(190," p-additional-help-tooltip"),o(191,"br"),t()(),n(192,"div",21),e(193,"Deprecated"),t()(),n(194,"td",22)(195,"code",28),e(196,"string"),t()(),n(197,"td",24),e(198,"-"),t(),n(199,"td",25)(200,"em")(201,"strong"),e(202,"(opcional)"),t()(),n(203,"p"),e(204,"Exibe um \xEDcone de ajuda adicional ao "),n(205,"code"),e(206,"p-help"),t(),e(207,`, com o texto desta propriedade no tooltip.
Se o evento `),n(208,"code"),e(209,"p-additional-help"),t(),e(210,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),n(211,"strong"),e(212,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(213,"blockquote")(214,"p"),e(215,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),n(216,"blockquote")(217,"p"),e(218,"Essa propriedade est\xE1 "),n(219,"strong"),e(220,"depreciada"),t(),e(221," e ser\xE1 removida na vers\xE3o "),n(222,"code"),e(223,"23.x.x"),t(),e(224,". Recomendamos utilizar a propriedade "),n(225,"code"),e(226,"p-helper"),t(),e(227," que oferece mais recursos e flexibilidade."),t()()()(),n(228,"tr",17)(229,"td",18)(230,"div",26)(231,"span",27),e(232," p-append-in-body"),o(233,"br"),t()()(),n(234,"td",22)(235,"code",29),e(236,"boolean"),t()(),n(237,"td",24)(238,"p")(239,"code"),e(240,"false"),t()()(),n(241,"td",25)(242,"em")(243,"strong"),e(244,"(opcional)"),t()(),n(245,"p"),e(246,"Define que o tooltip ("),n(247,"code"),e(248,"p-additional-help-tooltip"),t(),e(249," e/ou "),n(250,"code"),e(251,"p-error-limit"),t(),e(252,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),n(253,"blockquote")(254,"p"),e(255,"Quando utilizado com "),n(256,"code"),e(257,"p-additional-help-tooltip"),t(),e(258,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),n(259,"tr",17)(260,"td",18)(261,"div",26)(262,"span",27),e(263," p-auto-focus"),o(264,"br"),t()()(),n(265,"td",22)(266,"code",29),e(267,"boolean"),t()(),n(268,"td",24)(269,"p")(270,"code"),e(271,"false"),t()()(),n(272,"td",25)(273,"em")(274,"strong"),e(275,"(opcional)"),t()(),n(276,"p"),e(277,"Aplica foco no elemento ao ser iniciado."),t(),n(278,"blockquote")(279,"p"),e(280,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(281,"tr",17)(282,"td",18)(283,"div",19)(284,"span",20),e(285," (p-blur)"),o(286,"br"),t()()(),n(287,"td",22)(288,"code",23),e(289,"EventEmitter"),t()(),n(290,"td",24),e(291,"-"),t(),n(292,"td",25)(293,"em")(294,"strong"),e(295,"(opcional)"),t()(),n(296,"p"),e(297,"Evento disparado ao sair do campo."),t()()(),n(298,"tr",17)(299,"td",18)(300,"div",19)(301,"span",20),e(302," (p-change)"),o(303,"br"),t()()(),n(304,"td",22)(305,"code",23),e(306,"EventEmitter"),t()(),n(307,"td",24),e(308,"-"),t(),n(309,"td",25)(310,"em")(311,"strong"),e(312,"(opcional)"),t()(),n(313,"p"),e(314,"Evento disparado ao alterar valor e deixar o campo."),t()()(),n(315,"tr",17)(316,"td",18)(317,"div",19)(318,"span",20),e(319," (p-change-model)"),o(320,"br"),t()()(),n(321,"td",22)(322,"code",23),e(323,"EventEmitter"),t()(),n(324,"td",24),e(325,"-"),t(),n(326,"td",25)(327,"em")(328,"strong"),e(329,"(opcional)"),t()(),n(330,"p"),e(331,"Evento disparado ao alterar valor do model."),t()()(),n(332,"tr",17)(333,"td",18)(334,"div",26)(335,"span",27),e(336," p-disabled"),o(337,"br"),t()()(),n(338,"td",22)(339,"code",29),e(340,"boolean"),t()(),n(341,"td",24)(342,"p")(343,"code"),e(344,"false"),t()()(),n(345,"td",25)(346,"em")(347,"strong"),e(348,"(opcional)"),t()(),n(349,"p"),e(350,"Indica que o campo ser\xE1 desabilitado."),t()()(),n(351,"tr",17)(352,"td",18)(353,"div",19)(354,"span",20),e(355," (p-enter)"),o(356,"br"),t()()(),n(357,"td",22)(358,"code",23),e(359,"EventEmitter"),t()(),n(360,"td",24),e(361,"-"),t(),n(362,"td",25)(363,"em")(364,"strong"),e(365,"(opcional)"),t()(),n(366,"p"),e(367,"Evento disparado ao entrar do campo."),t()()(),n(368,"tr",17)(369,"td",18)(370,"div",26)(371,"span",27),e(372," p-error-limit"),o(373,"br"),t()()(),n(374,"td",22)(375,"code",29),e(376,"boolean"),t()(),n(377,"td",24)(378,"p")(379,"code"),e(380,"false"),t()()(),n(381,"td",25)(382,"em")(383,"strong"),e(384,"(opcional)"),t()(),n(385,"p"),e(386,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(387,"blockquote")(388,"p"),e(389,"Caso essa propriedade seja definida como "),n(390,"code"),e(391,"true"),t(),e(392,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),n(393,"tr",17)(394,"td",18)(395,"div",26)(396,"span",27),e(397," p-field-error-message"),o(398,"br"),t()()(),n(399,"td",22)(400,"code",28),e(401,"string"),t()(),n(402,"td",24),e(403,"-"),t(),n(404,"td",25)(405,"em")(406,"strong"),e(407,"(opcional)"),t()(),n(408,"p"),e(409,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),t(),n(410,"blockquote")(411,"p"),e(412,"Necess\xE1rio que a propriedade "),n(413,"code"),e(414,"p-required"),t(),e(415," esteja habilitada."),t()()()(),n(416,"tr",17)(417,"td",18)(418,"div",26)(419,"span",27),e(420," p-help"),o(421,"br"),t()()(),n(422,"td",22)(423,"code",28),e(424,"string"),t()(),n(425,"td",24),e(426,"-"),t(),n(427,"td",25)(428,"em")(429,"strong"),e(430,"(opcional)"),t()(),n(431,"p"),e(432,"Texto de apoio do campo."),t()()(),n(433,"tr",17)(434,"td",18)(435,"div",19)(436,"span",20),e(437," (p-keydown)"),o(438,"br"),t()()(),n(439,"td",22)(440,"code",23),e(441,"EventEmitter"),t()(),n(442,"td",24),e(443,"-"),t(),n(444,"td",25)(445,"em")(446,"strong"),e(447,"(opcional)"),t()(),n(448,"p"),e(449,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(450,"code"),e(451,"KeyboardEvent"),t(),e(452," com informa\xE7\xF5es sobre a tecla."),t()()(),n(453,"tr",17)(454,"td",18)(455,"div",26)(456,"span",27),e(457," p-label"),o(458,"br"),t()()(),n(459,"td",22)(460,"code",28),e(461,"string"),t()(),n(462,"td",24),e(463,"-"),t(),n(464,"td",25)(465,"em")(466,"strong"),e(467,"(opcional)"),t()(),n(468,"p"),e(469,"Label do campo."),t()()(),n(470,"tr",17)(471,"td",18)(472,"div",26)(473,"span",27),e(474," p-label-text-wrap"),o(475,"br"),t()()(),n(476,"td",22)(477,"code",29),e(478,"boolean"),t()(),n(479,"td",24)(480,"p")(481,"code"),e(482,"false"),t()()(),n(483,"td",25)(484,"em")(485,"strong"),e(486,"(opcional)"),t()(),n(487,"p"),e(488,"Habilita a quebra autom\xE1tica do texto da propriedade "),n(489,"code"),e(490,"p-label"),t(),e(491,". Quando "),n(492,"code"),e(493,"p-label-text-wrap"),t(),e(494,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),n(495,"tr",17)(496,"td",18)(497,"div",26)(498,"span",27),e(499," p-maxlength"),o(500,"br"),t()()(),n(501,"td",22)(502,"code",30),e(503,"number"),t()(),n(504,"td",24),e(505,"-"),t(),n(506,"td",25)(507,"em")(508,"strong"),e(509,"(opcional)"),t()(),n(510,"p"),e(511,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),t()()(),n(512,"tr",17)(513,"td",18)(514,"div",26)(515,"span",27),e(516," p-minlength"),o(517,"br"),t()()(),n(518,"td",22)(519,"code",30),e(520,"number"),t()(),n(521,"td",24),e(522,"-"),t(),n(523,"td",25)(524,"em")(525,"strong"),e(526,"(opcional)"),t()(),n(527,"p"),e(528,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),t()()(),n(529,"tr",17)(530,"td",18)(531,"div",26)(532,"span",27),e(533," name"),o(534,"br"),t()()(),n(535,"td",22)(536,"code",28),e(537,"string"),t()(),n(538,"td",24),e(539,"-"),t(),n(540,"td",25)(541,"p"),e(542,"Nome e Id do componente."),t()()(),n(543,"tr",17)(544,"td",18)(545,"div",26)(546,"span",27),e(547," p-optional"),o(548,"br"),t()()(),n(549,"td",22)(550,"code",29),e(551,"boolean"),t()(),n(552,"td",24)(553,"p")(554,"code"),e(555,"false"),t()()(),n(556,"td",25)(557,"em")(558,"strong"),e(559,"(opcional)"),t()(),n(560,"p"),e(561,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(562,"blockquote")(563,"p"),e(564,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(565,"ul")(566,"li"),e(567,"O campo conter "),n(568,"code"),e(569,"p-required"),t(),e(570,";"),t(),n(571,"li"),e(572,"N\xE3o possuir "),n(573,"code"),e(574,"p-help"),t(),e(575," e/ou "),n(576,"code"),e(577,"p-label"),t(),e(578,"."),t()()()(),n(579,"tr",17)(580,"td",18)(581,"div",26)(582,"span",27),e(583," p-placeholder"),o(584,"br"),t()()(),n(585,"td",22)(586,"code",28),e(587,"string"),t()(),n(588,"td",24),e(589,"-"),t(),n(590,"td",25)(591,"p"),e(592,"Placeholder, mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(593,"tr",17)(594,"td",18)(595,"div",26)(596,"span",27),e(597," p-helper"),o(598,"br"),t()()(),n(599,"td",22)(600,"code",31),e(601,"PoHelperOptions "),t(),n(602,"code",28),e(603," string"),t()(),n(604,"td",24),e(605,"-"),t(),n(606,"td",25)(607,"em")(608,"strong"),e(609,"(opcional)"),t()(),n(610,"p"),e(611,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label."),t(),n(612,"blockquote")(613,"p"),e(614,"Caso o "),n(615,"code"),e(616,"p-label"),t(),e(617,` n\xE3o esteja definido, o componente po-helper n\xE3o ser\xE1 exibido.
Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional (`),n(618,"code"),e(619,"p-additional-help-tooltip"),t(),e(620," e "),n(621,"code"),e(622,"p-additional-help"),t(),e(623,") ser\xE1 ignorado."),t()()()(),n(624,"tr",17)(625,"td",18)(626,"div",26)(627,"span",27),e(628," p-readonly"),o(629,"br"),t()()(),n(630,"td",22)(631,"code",29),e(632,"boolean"),t()(),n(633,"td",24)(634,"p")(635,"code"),e(636,"false"),t()()(),n(637,"td",25)(638,"em")(639,"strong"),e(640,"(opcional)"),t()(),n(641,"p"),e(642,"Indica que o campo ser\xE1 somente leitura."),t()()(),n(643,"tr",17)(644,"td",18)(645,"div",26)(646,"span",27),e(647," p-required"),o(648,"br"),t()()(),n(649,"td",22)(650,"code",29),e(651,"boolean"),t()(),n(652,"td",24)(653,"p")(654,"code"),e(655,"false"),t()()(),n(656,"td",25)(657,"em")(658,"strong"),e(659,"(opcional)"),t()(),n(660,"p"),e(661,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),n(662,"blockquote")(663,"p"),e(664,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),n(665,"code"),e(666,"(p-disabled)"),t(),e(667,"."),t()()()(),n(668,"tr",17)(669,"td",18)(670,"div",26)(671,"span",27),e(672," p-rows"),o(673,"br"),t()()(),n(674,"td",22)(675,"code",30),e(676,"number"),t()(),n(677,"td",24)(678,"p")(679,"code"),e(680,"3"),t()()(),n(681,"td",25)(682,"em")(683,"strong"),e(684,"(opcional)"),t()(),n(685,"p"),e(686,"Indica a quantidade de linhas que ser\xE3o exibidas."),t()()(),n(687,"tr",17)(688,"td",18)(689,"div",26)(690,"span",27),e(691," p-show-required"),o(692,"br"),t()()(),n(693,"td",22)(694,"code",29),e(695,"boolean"),t()(),n(696,"td",24),e(697,"-"),t(),n(698,"td",25)(699,"p"),e(700,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(701,"blockquote")(702,"p"),e(703,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(704,"ul")(705,"li"),e(706,"N\xE3o possuir "),n(707,"code"),e(708,"p-help"),t(),e(709," e/ou "),n(710,"code"),e(711,"p-label"),t(),e(712,"."),t()()()(),n(713,"tr",17)(714,"td",18)(715,"div",26)(716,"span",27),e(717," p-size"),o(718,"br"),t()()(),n(719,"td",22)(720,"code",28),e(721,"string"),t()(),n(722,"td",24)(723,"p")(724,"code"),e(725,"medium"),t()()(),n(726,"td",25)(727,"em")(728,"strong"),e(729,"(opcional)"),t()(),n(730,"p"),e(731,"Define o tamanho do componente:"),t(),n(732,"ul")(733,"li")(734,"code"),e(735,"small"),t(),e(736," (dispon\xEDvel apenas para acessibilidade AA)"),t(),n(737,"li")(738,"code"),e(739,"medium"),t()()(),n(740,"blockquote")(741,"p"),e(742,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(743,"code"),e(744,"medium"),t(),e(745,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(746,"a",32),e(747,"po-theme"),t(),e(748,"."),t()()()()(),n(749,"h3",13),e(750,"M\xE9todos"),t(),n(751,"table",33)(752,"tr",17)(753,"th",34)(754,"div",26)(755,"h4")(756,"span",27),e(757," focus "),t()()()()(),n(758,"tr",25)(759,"td",25)(760,"p"),e(761,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(762,"p"),e(763,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(764,"pre")(765,"code"),e(766,`import { PoTextareaComponent } from '@po-ui/ng-components';

...

@ViewChild(PoTextareaComponent, { static: true }) textarea: PoTextareaComponent;

focusTextarea() {
  this.textarea.focus();
}
`),t()()()()(),o(767,"br"),n(768,"table",33)(769,"tr",17)(770,"th",34)(771,"div",26)(772,"h4")(773,"span",27),e(774," showAdditionalHelp "),t()()()()(),n(775,"tr",25)(776,"td",25)(777,"p"),e(778,"M\xE9todo que exibe "),n(779,"code"),e(780,"p-additionalHelpTooltip"),t(),e(781," ou executa a a\xE7\xE3o definida em "),n(782,"code"),e(783,"p-additionalHelp"),t(),e(784,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),n(785,"code"),e(786,"p-keydown"),t(),e(787,"."),t(),n(788,"blockquote")(789,"p"),e(790,"Exibe ou oculta o conte\xFAdo do componente "),n(791,"code"),e(792,"po-helper"),t(),e(793," quando o componente estiver com foco e com label vis\xEDvel."),t()(),n(794,"pre")(795,"code"),e(796,`<po-textarea
 #textarea
 ...
 p-additional-help-tooltip="Mensagem de ajuda complementar"
 (p-keydown)="onKeyDown($event, textarea)"
></po-textarea>
`),t()(),n(797,"pre")(798,"code"),e(799,`//Exemplo com p-label e p-helper
<po-textarea
 #textarea
 ...
 p-label="Label do textarea"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, textarea)"
></po-textarea>
`),t()(),n(800,"pre")(801,"code"),e(802,`...
onKeyDown(event: KeyboardEvent, inp: PoTextareaComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),o(803,"br"),t())},dependencies:[w],encapsulation:2})}return a})();var Ce=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||a)(Z(ae),Z(le))};static \u0275cmp=g({type:a,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Textarea",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),f("p-click",function(){return i.changeTab("doc")}),o(3,"sample-po-textarea-doc"),t(),n(4,"po-tab",3),f("p-click",function(){return i.changeTab("web")}),o(5,"sample-po-textarea-basic-view")(6,"sample-po-textarea-labs-view")(7,"sample-po-textarea-email-view")(8,"sample-po-textarea-email-reactive-form-view"),t()()()),r&2&&(s("p-actions",i.actions),p(2),s("p-active",i.activeTab==="doc"),p(2),s("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[j,v,C,ue,be,he,Se,ve],encapsulation:2})}return a})();var Ie=[{path:"",component:Ce}],we=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=z({type:a});static \u0275inj=H({imports:[$.forChild(Ie),$]})}return a})();var vt=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=z({type:a});static \u0275inj=H({imports:[se,we]})}return a})();export{vt as DocPoTextareaModule};
