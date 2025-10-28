import{o as w,p as se}from"./chunk-KTXVLMHP.js";import{Ab as C,Ea as X,Fa as W,Ma as de,O as pe,Q as me,Ta as q,U as _,Xa as B,a as A,nb as O,v as re,zb as v}from"./chunk-4M2FSNLW.js";import{$a as N,$c as $,Aa as s,Da as T,Dc as R,Fb as P,Gc as V,Ha as U,Hc as D,Ic as J,Jc as F,Kc as L,La as n,Ma as t,N as z,Na as o,Nc as ne,Oc as ie,Q as te,Ra as Q,Sa as f,Sc as oe,Ta as K,U as c,V as u,Xc as ae,Zc as le,_a as j,ab as I,cb as e,eb as y,gb as b,hb as x,ib as h,ja as p,ka as Z,ob as M,qa as g,ra as H,wa as G}from"./chunk-CBLD3XJL.js";var ce=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-textarea-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","textarea","p-label","PO Textarea"]],template:function(r,i){r&1&&o(0,"po-textarea",0)},dependencies:[q],encapsulation:2})}return a})();var Me=a=>({"docs-sample-code-tabs":a}),ue=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-textarea-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Textarea Basic"),t(),n(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-textarea-basic/sample-po-textarea-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-textarea name="textarea" p-label="PO Textarea"> </po-textarea>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-textarea-basic/sample-po-textarea-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-textarea-basic',
  templateUrl: './sample-po-textarea-basic.component.html',
  standalone: false
})
export class SamplePoTextareaBasicComponent {}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-textarea-basic"),t(),o(23,"hr")),r&2&&(p(5),T("po-icon "+i.sampleCodeButtonIcon),p(),y(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",M(4,Me,i.hideSampleCodeTabs)))},dependencies:[P,w,v,C,ce],encapsulation:2})}return a})();var ge=(()=>{class a{helperText;event;help;label;maxlength;minlength;placeholder;properties;fieldErrorMessage;rows;size;textarea;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(m){this.event=m}restore(){this.helperText="",this.textarea=void 0,this.label=void 0,this.help=void 0,this.minlength=void 0,this.maxlength=void 0,this.event=void 0,this.fieldErrorMessage="",this.rows=void 0,this.placeholder="",this.properties=[],this.size="medium"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-textarea-labs"]],standalone:!1,decls:20,vars:31,consts:[["f","ngForm"],["name","textarea",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-helper","p-disabled","p-help","p-label","p-maxlength","p-minlength","p-optional","p-placeholder","p-readonly","p-required","p-field-error-message","p-show-required","p-rows","p-size","p-error-limit","p-label-text-wrap"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","rows","p-clean","","p-label","Rows","p-min","3",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let d=Q();n(0,"po-textarea",1),h("ngModelChange",function(l){return c(d),x(i.textarea,l)||(i.textarea=l),u(l)}),f("p-blur",function(){return c(d),u(i.changeEvent("p-blur"))})("p-change",function(){return c(d),u(i.changeEvent("p-change"))})("p-change-model",function(){return c(d),u(i.changeEvent("p-change-model"))})("p-enter",function(){return c(d),u(i.changeEvent("p-enter"))})("p-keydown",function(){return c(d),u(i.changeEvent("p-keydown"))}),t(),o(1,"po-divider"),n(2,"div",2),o(3,"po-info",3)(4,"po-info",4),t(),o(5,"po-divider"),n(6,"form",null,0)(8,"po-input",5),h("ngModelChange",function(l){return c(d),x(i.label,l)||(i.label=l),u(l)}),t(),n(9,"po-input",6),h("ngModelChange",function(l){return c(d),x(i.help,l)||(i.help=l),u(l)}),t(),n(10,"po-input",7),h("ngModelChange",function(l){return c(d),x(i.helperText,l)||(i.helperText=l),u(l)}),t(),n(11,"po-input",8),h("ngModelChange",function(l){return c(d),x(i.placeholder,l)||(i.placeholder=l),u(l)}),t(),n(12,"po-input",9),h("ngModelChange",function(l){return c(d),x(i.fieldErrorMessage,l)||(i.fieldErrorMessage=l),u(l)}),t(),n(13,"po-number",10),h("ngModelChange",function(l){return c(d),x(i.rows,l)||(i.rows=l),u(l)}),t(),n(14,"po-number",11),h("ngModelChange",function(l){return c(d),x(i.minlength,l)||(i.minlength=l),u(l)}),t(),n(15,"po-number",12),h("ngModelChange",function(l){return c(d),x(i.maxlength,l)||(i.maxlength=l),u(l)}),t(),n(16,"po-checkbox-group",13),h("ngModelChange",function(l){return c(d),x(i.properties,l)||(i.properties=l),u(l)}),t(),n(17,"po-radio-group",14),h("ngModelChange",function(l){return c(d),x(i.size,l)||(i.size=l),u(l)}),t(),n(18,"div",2)(19,"po-button",15),f("p-click",function(){return c(d),u(i.restore())}),t()()()}r&2&&(b("ngModel",i.textarea),s("p-helper",i.helperText)("p-disabled",i.properties.includes("disabled"))("p-help",i.help)("p-label",i.label)("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-field-error-message",i.fieldErrorMessage)("p-show-required",i.properties.includes("showRequired"))("p-rows",i.rows)("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap")),p(3),s("p-value",i.textarea),p(),s("p-value",i.event),p(4),b("ngModel",i.label),p(),b("ngModel",i.help),p(),b("ngModel",i.helperText),p(),b("ngModel",i.placeholder),p(),b("ngModel",i.fieldErrorMessage),p(),b("ngModel",i.rows),p(),b("ngModel",i.minlength),p(),b("ngModel",i.maxlength),p(),b("ngModel",i.properties),s("p-options",i.propertiesOptions),p(),b("ngModel",i.size),s("p-options",i.sizeOptions))},dependencies:[L,V,D,F,J,re,A,pe,me,W,de,q,B],encapsulation:2})}return a})();var qe=a=>({"docs-sample-code-tabs":a}),be=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-textarea-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Textarea Labs"),t(),n(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-textarea-labs/sample-po-textarea-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-textarea
  name="textarea"
  [(ngModel)]="textarea"
  [p-helper]="helperText"
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
  helperText: string;
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
    this.helperText = '';
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
`),t()()()()(),n(21,"div",10),o(22,"sample-po-textarea-labs"),t(),o(23,"hr")),r&2&&(p(5),T("po-icon "+i.sampleCodeButtonIcon),p(),y(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",M(4,qe,i.hideSampleCodeTabs)))},dependencies:[P,w,v,C,ge],encapsulation:2})}return a})();var Ve=["formEmail"];function De(a,Te){if(a&1&&(n(0,"div")(1,"div",8),o(2,"po-info",13),t(),o(3,"po-divider"),t()),a&2){let m=K();p(2),s("p-value",m.cc)}}var xe=(()=>{class a{formEmail;poModal;cc="";emailText="";from="";subject="";to="";pageActions;primaryAction={action:()=>{this.poModal.close(),this.reset()},label:"Ok"};getPageAction(){let m=this.formEmail?!this.formEmail.valid:!0;return[{label:"Send",action:this.send.bind(this),disabled:m},{label:"Clean",action:this.reset.bind(this)}]}reset(){this.formEmail.reset()}send(){this.poModal.open()}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-textarea-email"]],viewQuery:function(r,i){if(r&1&&(j(Ve,7),j(_,7)),r&2){let d;N(d=I())&&(i.formEmail=d.first),N(d=I())&&(i.poModal=d.first)}},standalone:!1,decls:19,vars:12,consts:[["formEmail","ngForm"],["p-title","Send email",3,"p-actions"],["name","from","p-clean","","p-label","From","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","to","p-clean","","p-label","To","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","cc","p-clean","","p-label","CC",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","subject","p-clean","","p-label","Subject","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","emailText","p-label","E-mail","p-required","","p-rows","8",1,"po-sm-12",3,"ngModelChange","ngModel"],["p-title","Email successfully sent",3,"p-primary-action"],[1,"po-row"],["p-label","From:",1,"po-md-6",3,"p-value"],["p-label","To:",1,"po-md-6",3,"p-value"],["p-label","Subject:",1,"po-md-12",3,"p-value"],["name","text","p-label","E-mail","p-readonly","","p-rows","6",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","CC:",1,"po-md-12",3,"p-value"]],template:function(r,i){if(r&1){let d=Q();n(0,"po-page-default",1)(1,"form",null,0)(3,"po-email",2),h("ngModelChange",function(l){return c(d),x(i.from,l)||(i.from=l),u(l)}),t(),n(4,"po-email",3),h("ngModelChange",function(l){return c(d),x(i.to,l)||(i.to=l),u(l)}),t(),n(5,"po-email",4),h("ngModelChange",function(l){return c(d),x(i.cc,l)||(i.cc=l),u(l)}),t(),n(6,"po-input",5),h("ngModelChange",function(l){return c(d),x(i.subject,l)||(i.subject=l),u(l)}),t(),n(7,"po-textarea",6),h("ngModelChange",function(l){return c(d),x(i.emailText,l)||(i.emailText=l),u(l)}),t()()(),n(8,"po-modal",7)(9,"div",8),o(10,"po-info",9)(11,"po-info",10),t(),o(12,"po-divider"),G(13,De,4,1,"div"),n(14,"div",8),o(15,"po-info",11),t(),o(16,"po-divider"),n(17,"div",8)(18,"po-textarea",12),h("ngModelChange",function(l){return c(d),x(i.emailText,l)||(i.emailText=l),u(l)}),t()()()}r&2&&(s("p-actions",i.getPageAction()),p(3),b("ngModel",i.from),p(),b("ngModel",i.to),p(),b("ngModel",i.cc),p(),b("ngModel",i.subject),p(),b("ngModel",i.emailText),p(),s("p-primary-action",i.primaryAction),p(2),s("p-value",i.from),p(),s("p-value",i.to),p(2),U(i.cc!==""?13:-1),p(2),s("p-value",i.subject),p(3),b("ngModel",i.emailText))},dependencies:[L,V,D,F,J,A,X,W,q,B,_,O],encapsulation:2})}return a})();var Le=a=>({"docs-sample-code-tabs":a}),he=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-textarea-email-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Textarea - Email"),t(),n(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-textarea-email/sample-po-textarea-email.component.html"),t(),n(13,"pre",7),e(14,`<po-page-default p-title="Send email" [p-actions]="getPageAction()">
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
`),t()()()()(),n(21,"div",10),o(22,"sample-po-textarea-email"),t(),o(23,"hr")),r&2&&(p(5),T("po-icon "+i.sampleCodeButtonIcon),p(),y(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",M(4,Le,i.hideSampleCodeTabs)))},dependencies:[P,w,v,C,xe],encapsulation:2})}return a})();function We(a,Te){if(a&1&&(n(0,"div")(1,"div",8),o(2,"po-info",13),t(),o(3,"po-divider"),t()),a&2){let m=K();p(2),s("p-value",m.formEmail.get("cc").value)}}var fe=(()=>{class a{formBuilder=te(oe);poModal;formEmail;pageActions;primaryAction={action:()=>{this.poModal.close(),this.reset()},label:"Ok"};ngOnInit(){this.formEmail=this.formBuilder.group({cc:null,from:[null,R.required],to:[null,R.required],emailText:[null,R.required],subject:[null,R.required]})}getPageAction(){let m=this.formEmail?!this.formEmail.valid:!0;return[{label:"Send",action:this.send.bind(this),disabled:m},{label:"Clean",action:this.reset.bind(this)}]}reset(){this.formEmail.reset()}send(){this.poModal.open()}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-textarea-email-reactive-form"]],viewQuery:function(r,i){if(r&1&&j(_,7),r&2){let d;N(d=I())&&(i.poModal=d.first)}},standalone:!1,decls:18,vars:8,consts:[["p-title","Send email",3,"p-actions"],[3,"formGroup"],["name","from","formControlName","from","p-clean","","p-label","From","p-required","",1,"po-sm-12"],["name","to","formControlName","to","p-clean","","p-label","To","p-required","",1,"po-sm-12"],["name","cc","formControlName","cc","p-clean","","p-label","CC",1,"po-sm-12"],["name","subject","formControlName","subject","p-clean","","p-label","Subject","p-required","",1,"po-sm-12"],["name","emailText","formControlName","emailText","p-label","E-mail","p-rows","8","p-required","",1,"po-sm-12"],["p-title","Email successfully sent",3,"p-primary-action"],[1,"po-row"],["p-label","From:",1,"po-md-6",3,"p-value"],["p-label","To:",1,"po-md-6",3,"p-value"],["p-label","Subject:",1,"po-md-12",3,"p-value"],["name","text","p-label","E-mail","p-readonly","","p-required","","p-rows","6",1,"po-md-12",3,"ngModel"],["p-label","CC:",1,"po-md-12",3,"p-value"]],template:function(r,i){r&1&&(n(0,"po-page-default",0)(1,"form",1),o(2,"po-email",2)(3,"po-email",3)(4,"po-email",4)(5,"po-input",5)(6,"po-textarea",6),t()(),n(7,"po-modal",7)(8,"div",8),o(9,"po-info",9)(10,"po-info",10),t(),o(11,"po-divider"),G(12,We,4,1,"div"),n(13,"div",8),o(14,"po-info",11),t(),o(15,"po-divider"),n(16,"div",8),o(17,"po-textarea",12),t()()),r&2&&(s("p-actions",i.getPageAction()),p(),s("formGroup",i.formEmail),p(6),s("p-primary-action",i.primaryAction),p(2),s("p-value",i.formEmail.get("from").value),p(),s("p-value",i.formEmail.get("to").value),p(2),U(i.formEmail.get("cc").value?12:-1),p(2),s("p-value",i.formEmail.get("subject").value),p(3),s("ngModel",i.formEmail.get("emailText").value))},dependencies:[L,V,D,F,ne,ie,A,X,W,q,B,_,O],encapsulation:2})}return a})();var Oe=a=>({"docs-sample-code-tabs":a}),Se=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-textarea-email-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Textarea - Email Reactive Form"),t(),n(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-textarea-email-reactive-form/sample-po-textarea-email-reactive-form.component.html"),t(),n(13,"pre",7),e(14,`<po-page-default p-title="Send email" [p-actions]="getPageAction()">
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
`),t()()()()(),n(21,"div",10),o(22,"sample-po-textarea-email-reactive-form"),t(),o(23,"hr")),r&2&&(p(5),T("po-icon "+i.sampleCodeButtonIcon),p(),y(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",M(4,Oe,i.hideSampleCodeTabs)))},dependencies:[P,w,v,C,fe],encapsulation:2})}return a})();var ve=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-textarea-doc"]],standalone:!1,decls:807,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://www.w3.org/WAI/WCAG21/Understanding/use-of-color"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
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
`),t()(),n(140,"h4",13),e(141,"Propriedades"),t(),n(142,"table",14)(143,"tr",15)(144,"th",16),e(145,"Nome"),t(),n(146,"th",16),e(147,"Tipo"),t(),n(148,"th",16),e(149,"Padr\xE3o"),t(),n(150,"th",16),e(151,"Descri\xE7\xE3o"),t()(),n(152,"tr",17)(153,"td",18)(154,"div",19)(155,"span",20),e(156," (p-additional-help)"),o(157,"br"),t()(),n(158,"div",21),e(159,"Deprecated"),t()(),n(160,"td",22)(161,"code",23),e(162,"EventEmitter"),t()(),n(163,"td",24),e(164,"-"),t(),n(165,"td",25)(166,"em")(167,"strong"),e(168,"(opcional)"),t()(),n(169,"p"),e(170,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),t(),n(171,"blockquote")(172,"p"),e(173,"Essa propriedade est\xE1 "),n(174,"strong"),e(175,"depreciada"),t(),e(176," e ser\xE1 removida na vers\xE3o "),n(177,"code"),e(178,"23.x.x"),t(),e(179,". Recomendamos utilizar a propriedade "),n(180,"code"),e(181,"p-helper"),t(),e(182," que oferece mais recursos e flexibilidade."),t()()()(),n(183,"tr",17)(184,"td",18)(185,"div",26)(186,"span",27),e(187," p-additional-help-tooltip"),o(188,"br"),t()(),n(189,"div",21),e(190,"Deprecated"),t()(),n(191,"td",22)(192,"code",28),e(193,"string"),t()(),n(194,"td",24),e(195,"-"),t(),n(196,"td",25)(197,"em")(198,"strong"),e(199,"(opcional)"),t()(),n(200,"p"),e(201,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),n(202,"code"),e(203,"po-helper"),t(),e(204,`.
`),n(205,"strong"),e(206,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(207,"blockquote")(208,"p"),e(209,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),n(210,"blockquote")(211,"p"),e(212,"Essa propriedade est\xE1 "),n(213,"strong"),e(214,"depreciada"),t(),e(215," e ser\xE1 removida na vers\xE3o "),n(216,"code"),e(217,"23.x.x"),t(),e(218,". Recomendamos utilizar a propriedade "),n(219,"code"),e(220,"p-helper"),t(),e(221," que oferece mais recursos e flexibilidade."),t()()()(),n(222,"tr",17)(223,"td",18)(224,"div",26)(225,"span",27),e(226," p-append-in-body"),o(227,"br"),t()()(),n(228,"td",22)(229,"code",29),e(230,"boolean"),t()(),n(231,"td",24)(232,"p")(233,"code"),e(234,"false"),t()()(),n(235,"td",25)(236,"em")(237,"strong"),e(238,"(opcional)"),t()(),n(239,"p"),e(240,"Define que o popover ("),n(241,"code"),e(242,"p-helper"),t(),e(243," e/ou "),n(244,"code"),e(245,"p-error-limit"),t(),e(246,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),n(247,"blockquote")(248,"p"),e(249,"Quando utilizado com "),n(250,"code"),e(251,"p-helper"),t(),e(252,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),t()()()(),n(253,"tr",17)(254,"td",18)(255,"div",26)(256,"span",27),e(257," p-auto-focus"),o(258,"br"),t()()(),n(259,"td",22)(260,"code",29),e(261,"boolean"),t()(),n(262,"td",24)(263,"p")(264,"code"),e(265,"false"),t()()(),n(266,"td",25)(267,"em")(268,"strong"),e(269,"(opcional)"),t()(),n(270,"p"),e(271,"Aplica foco no elemento ao ser iniciado."),t(),n(272,"blockquote")(273,"p"),e(274,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(275,"tr",17)(276,"td",18)(277,"div",19)(278,"span",20),e(279," (p-blur)"),o(280,"br"),t()()(),n(281,"td",22)(282,"code",23),e(283,"EventEmitter"),t()(),n(284,"td",24),e(285,"-"),t(),n(286,"td",25)(287,"em")(288,"strong"),e(289,"(opcional)"),t()(),n(290,"p"),e(291,"Evento disparado ao sair do campo."),t()()(),n(292,"tr",17)(293,"td",18)(294,"div",19)(295,"span",20),e(296," (p-change)"),o(297,"br"),t()()(),n(298,"td",22)(299,"code",23),e(300,"EventEmitter"),t()(),n(301,"td",24),e(302,"-"),t(),n(303,"td",25)(304,"em")(305,"strong"),e(306,"(opcional)"),t()(),n(307,"p"),e(308,"Evento disparado ao alterar valor e deixar o campo."),t()()(),n(309,"tr",17)(310,"td",18)(311,"div",19)(312,"span",20),e(313," (p-change-model)"),o(314,"br"),t()()(),n(315,"td",22)(316,"code",23),e(317,"EventEmitter"),t()(),n(318,"td",24),e(319,"-"),t(),n(320,"td",25)(321,"em")(322,"strong"),e(323,"(opcional)"),t()(),n(324,"p"),e(325,"Evento disparado ao alterar valor do model."),t()()(),n(326,"tr",17)(327,"td",18)(328,"div",26)(329,"span",27),e(330," p-disabled"),o(331,"br"),t()()(),n(332,"td",22)(333,"code",29),e(334,"boolean"),t()(),n(335,"td",24)(336,"p")(337,"code"),e(338,"false"),t()()(),n(339,"td",25)(340,"em")(341,"strong"),e(342,"(opcional)"),t()(),n(343,"p"),e(344,"Indica que o campo ser\xE1 desabilitado."),t()()(),n(345,"tr",17)(346,"td",18)(347,"div",19)(348,"span",20),e(349," (p-enter)"),o(350,"br"),t()()(),n(351,"td",22)(352,"code",23),e(353,"EventEmitter"),t()(),n(354,"td",24),e(355,"-"),t(),n(356,"td",25)(357,"em")(358,"strong"),e(359,"(opcional)"),t()(),n(360,"p"),e(361,"Evento disparado ao entrar do campo."),t()()(),n(362,"tr",17)(363,"td",18)(364,"div",26)(365,"span",27),e(366," p-error-limit"),o(367,"br"),t()()(),n(368,"td",22)(369,"code",29),e(370,"boolean"),t()(),n(371,"td",24)(372,"p")(373,"code"),e(374,"false"),t()()(),n(375,"td",25)(376,"em")(377,"strong"),e(378,"(opcional)"),t()(),n(379,"p"),e(380,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(381,"blockquote")(382,"p"),e(383,"Caso essa propriedade seja definida como "),n(384,"code"),e(385,"true"),t(),e(386,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),n(387,"tr",17)(388,"td",18)(389,"div",26)(390,"span",27),e(391," p-field-error-message"),o(392,"br"),t()()(),n(393,"td",22)(394,"code",28),e(395,"string"),t()(),n(396,"td",24),e(397,"-"),t(),n(398,"td",25)(399,"em")(400,"strong"),e(401,"(opcional)"),t()(),n(402,"p"),e(403,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),t(),n(404,"blockquote")(405,"p"),e(406,"Necess\xE1rio que a propriedade "),n(407,"code"),e(408,"p-required"),t(),e(409," esteja habilitada."),t()()()(),n(410,"tr",17)(411,"td",18)(412,"div",26)(413,"span",27),e(414," p-help"),o(415,"br"),t()()(),n(416,"td",22)(417,"code",28),e(418,"string"),t()(),n(419,"td",24),e(420,"-"),t(),n(421,"td",25)(422,"em")(423,"strong"),e(424,"(opcional)"),t()(),n(425,"p"),e(426,"Texto de apoio do campo."),t()()(),n(427,"tr",17)(428,"td",18)(429,"div",19)(430,"span",20),e(431," (p-keydown)"),o(432,"br"),t()()(),n(433,"td",22)(434,"code",23),e(435,"EventEmitter"),t()(),n(436,"td",24),e(437,"-"),t(),n(438,"td",25)(439,"em")(440,"strong"),e(441,"(opcional)"),t()(),n(442,"p"),e(443,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(444,"code"),e(445,"KeyboardEvent"),t(),e(446," com informa\xE7\xF5es sobre a tecla."),t()()(),n(447,"tr",17)(448,"td",18)(449,"div",26)(450,"span",27),e(451," p-label"),o(452,"br"),t()()(),n(453,"td",22)(454,"code",28),e(455,"string"),t()(),n(456,"td",24),e(457,"-"),t(),n(458,"td",25)(459,"em")(460,"strong"),e(461,"(opcional)"),t()(),n(462,"p"),e(463,"Label do campo."),t()()(),n(464,"tr",17)(465,"td",18)(466,"div",26)(467,"span",27),e(468," p-label-text-wrap"),o(469,"br"),t()()(),n(470,"td",22)(471,"code",29),e(472,"boolean"),t()(),n(473,"td",24)(474,"p")(475,"code"),e(476,"false"),t()()(),n(477,"td",25)(478,"em")(479,"strong"),e(480,"(opcional)"),t()(),n(481,"p"),e(482,"Habilita a quebra autom\xE1tica do texto da propriedade "),n(483,"code"),e(484,"p-label"),t(),e(485,". Quando "),n(486,"code"),e(487,"p-label-text-wrap"),t(),e(488,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),n(489,"tr",17)(490,"td",18)(491,"div",26)(492,"span",27),e(493," p-maxlength"),o(494,"br"),t()()(),n(495,"td",22)(496,"code",30),e(497,"number"),t()(),n(498,"td",24),e(499,"-"),t(),n(500,"td",25)(501,"em")(502,"strong"),e(503,"(opcional)"),t()(),n(504,"p"),e(505,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),t()()(),n(506,"tr",17)(507,"td",18)(508,"div",26)(509,"span",27),e(510," p-minlength"),o(511,"br"),t()()(),n(512,"td",22)(513,"code",30),e(514,"number"),t()(),n(515,"td",24),e(516,"-"),t(),n(517,"td",25)(518,"em")(519,"strong"),e(520,"(opcional)"),t()(),n(521,"p"),e(522,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),t()()(),n(523,"tr",17)(524,"td",18)(525,"div",26)(526,"span",27),e(527," name"),o(528,"br"),t()()(),n(529,"td",22)(530,"code",28),e(531,"string"),t()(),n(532,"td",24),e(533,"-"),t(),n(534,"td",25)(535,"p"),e(536,"Nome e Id do componente."),t()()(),n(537,"tr",17)(538,"td",18)(539,"div",26)(540,"span",27),e(541," p-optional"),o(542,"br"),t()()(),n(543,"td",22)(544,"code",29),e(545,"boolean"),t()(),n(546,"td",24)(547,"p")(548,"code"),e(549,"false"),t()()(),n(550,"td",25)(551,"em")(552,"strong"),e(553,"(opcional)"),t()(),n(554,"p"),e(555,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(556,"blockquote")(557,"p"),e(558,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(559,"ul")(560,"li"),e(561,"O campo conter "),n(562,"code"),e(563,"p-required"),t(),e(564,";"),t(),n(565,"li"),e(566,"N\xE3o possuir "),n(567,"code"),e(568,"p-help"),t(),e(569," e/ou "),n(570,"code"),e(571,"p-label"),t(),e(572,"."),t()()()(),n(573,"tr",17)(574,"td",18)(575,"div",26)(576,"span",27),e(577," p-placeholder"),o(578,"br"),t()()(),n(579,"td",22)(580,"code",28),e(581,"string"),t()(),n(582,"td",24),e(583,"-"),t(),n(584,"td",25)(585,"p"),e(586,"Placeholder, mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(587,"tr",17)(588,"td",18)(589,"div",26)(590,"span",27),e(591," p-helper"),o(592,"br"),t()()(),n(593,"td",22)(594,"code",31),e(595,"PoHelperOptions "),t(),n(596,"code",28),e(597," string"),t()(),n(598,"td",24),e(599,"-"),t(),n(600,"td",25)(601,"em")(602,"strong"),e(603,"(opcional)"),t()(),n(604,"p"),e(605,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),n(606,"code"),e(607,"p-label"),t(),e(608," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),n(609,"code"),e(610,"p-label"),t(),e(611,"."),t(),n(612,"blockquote")(613,"p"),e(614,"Para mais informa\xE7\xF5es acesse: "),n(615,"a",32),e(616,"https://po-ui.io/documentation/po-helper"),t(),e(617,"."),t()(),n(618,"blockquote")(619,"p"),e(620,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),n(621,"code"),e(622,"p-additional-help-tooltip"),t(),e(623," e "),n(624,"code"),e(625,"p-additional-help"),t(),e(626,") ser\xE1 ignorado."),t()()()(),n(627,"tr",17)(628,"td",18)(629,"div",26)(630,"span",27),e(631," p-readonly"),o(632,"br"),t()()(),n(633,"td",22)(634,"code",29),e(635,"boolean"),t()(),n(636,"td",24)(637,"p")(638,"code"),e(639,"false"),t()()(),n(640,"td",25)(641,"em")(642,"strong"),e(643,"(opcional)"),t()(),n(644,"p"),e(645,"Indica que o campo ser\xE1 somente leitura."),t()()(),n(646,"tr",17)(647,"td",18)(648,"div",26)(649,"span",27),e(650," p-required"),o(651,"br"),t()()(),n(652,"td",22)(653,"code",29),e(654,"boolean"),t()(),n(655,"td",24)(656,"p")(657,"code"),e(658,"false"),t()()(),n(659,"td",25)(660,"em")(661,"strong"),e(662,"(opcional)"),t()(),n(663,"p"),e(664,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),n(665,"blockquote")(666,"p"),e(667,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),n(668,"code"),e(669,"(p-disabled)"),t(),e(670,"."),t()()()(),n(671,"tr",17)(672,"td",18)(673,"div",26)(674,"span",27),e(675," p-rows"),o(676,"br"),t()()(),n(677,"td",22)(678,"code",30),e(679,"number"),t()(),n(680,"td",24)(681,"p")(682,"code"),e(683,"3"),t()()(),n(684,"td",25)(685,"em")(686,"strong"),e(687,"(opcional)"),t()(),n(688,"p"),e(689,"Indica a quantidade de linhas que ser\xE3o exibidas."),t()()(),n(690,"tr",17)(691,"td",18)(692,"div",26)(693,"span",27),e(694," p-show-required"),o(695,"br"),t()()(),n(696,"td",22)(697,"code",29),e(698,"boolean"),t()(),n(699,"td",24),e(700,"-"),t(),n(701,"td",25)(702,"p"),e(703,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(704,"blockquote")(705,"p"),e(706,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(707,"ul")(708,"li"),e(709,"N\xE3o possuir "),n(710,"code"),e(711,"p-help"),t(),e(712," e/ou "),n(713,"code"),e(714,"p-label"),t(),e(715,"."),t()()()(),n(716,"tr",17)(717,"td",18)(718,"div",26)(719,"span",27),e(720," p-size"),o(721,"br"),t()()(),n(722,"td",22)(723,"code",28),e(724,"string"),t()(),n(725,"td",24)(726,"p")(727,"code"),e(728,"medium"),t()()(),n(729,"td",25)(730,"em")(731,"strong"),e(732,"(opcional)"),t()(),n(733,"p"),e(734,"Define o tamanho do componente:"),t(),n(735,"ul")(736,"li")(737,"code"),e(738,"small"),t(),e(739," (dispon\xEDvel apenas para acessibilidade AA)"),t(),n(740,"li")(741,"code"),e(742,"medium"),t()()(),n(743,"blockquote")(744,"p"),e(745,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(746,"code"),e(747,"medium"),t(),e(748,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(749,"a",33),e(750,"po-theme"),t(),e(751,"."),t()()()()(),n(752,"h3",13),e(753,"M\xE9todos"),t(),n(754,"table",34)(755,"tr",17)(756,"th",35)(757,"div",26)(758,"h4")(759,"span",27),e(760," focus "),t()()()()(),n(761,"tr",25)(762,"td",25)(763,"p"),e(764,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(765,"p"),e(766,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(767,"pre")(768,"code"),e(769,`import { PoTextareaComponent } from '@po-ui/ng-components';

...

@ViewChild(PoTextareaComponent, { static: true }) textarea: PoTextareaComponent;

focusTextarea() {
  this.textarea.focus();
}
`),t()()()()(),o(770,"br"),n(771,"table",34)(772,"tr",17)(773,"th",35)(774,"div",26)(775,"h4")(776,"span",27),e(777," showAdditionalHelp "),t()()()()(),n(778,"tr",25)(779,"td",25)(780,"p"),e(781,"M\xE9todo que exibe "),n(782,"code"),e(783,"p-helper"),t(),e(784," ou executa a a\xE7\xE3o definida em "),n(785,"code"),e(786,"p-helper{eventOnClick}"),t(),e(787," ou em "),n(788,"code"),e(789,"p-additionalHelp"),t(),e(790,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),n(791,"code"),e(792,"p-keydown"),t(),e(793,"."),t(),n(794,"blockquote")(795,"p"),e(796,"Exibe ou oculta o conte\xFAdo do componente "),n(797,"code"),e(798,"po-helper"),t(),e(799," quando o componente estiver com foco."),t()(),n(800,"pre")(801,"code"),e(802,`//Exemplo com p-label e p-helper
<po-textarea
 #textarea
 ...
 p-label="Label do textarea"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, textarea)"
></po-textarea>
`),t()(),n(803,"pre")(804,"code"),e(805,`...
onKeyDown(event: KeyboardEvent, inp: PoTextareaComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),o(806,"br"),t())},dependencies:[w],encapsulation:2})}return a})();var Ce=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||a)(Z(ae),Z(le))};static \u0275cmp=g({type:a,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Textarea",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),f("p-click",function(){return i.changeTab("doc")}),o(3,"sample-po-textarea-doc"),t(),n(4,"po-tab",3),f("p-click",function(){return i.changeTab("web")}),o(5,"sample-po-textarea-basic-view")(6,"sample-po-textarea-labs-view")(7,"sample-po-textarea-email-view")(8,"sample-po-textarea-email-reactive-form-view"),t()()()),r&2&&(s("p-actions",i.actions),p(2),s("p-active",i.activeTab==="doc"),p(2),s("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[O,v,C,ue,be,he,Se,ve],encapsulation:2})}return a})();var Ie=[{path:"",component:Ce}],we=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=H({type:a});static \u0275inj=z({imports:[$.forChild(Ie),$]})}return a})();var vt=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=H({type:a});static \u0275inj=z({imports:[se,we]})}return a})();export{vt as DocPoTextareaModule};
