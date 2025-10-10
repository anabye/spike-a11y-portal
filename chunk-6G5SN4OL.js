import{o as P,p as te}from"./chunk-2IN5RQLL.js";import{Ab as v,Fa as J,Ma as X,Na as k,O as Y,Q as Z,Xa as $,_ as O,a as U,nb as ee,v as A,zb as f}from"./chunk-ADZAWTSX.js";import{Aa as u,Cb as M,Da as C,Dc as V,Ec as F,Fc as z,Gc as N,Hc as R,La as n,Ma as t,N as q,Na as o,Q as I,Ra as L,Sa as x,U as m,Uc as K,V as c,Wc as Q,Yc as B,bb as j,cb as e,eb as y,gb as b,hb as g,ib as h,ja as d,jb as G,ka as W,lb as _,qa as S,ra as D}from"./chunk-KZJHT32G.js";var ne=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-password-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","password","p-label","PO Password"]],template:function(l,i){l&1&&o(0,"po-password",0)},dependencies:[k],encapsulation:2})}return a})();var ue=a=>({"docs-sample-code-tabs":a}),oe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-password-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Password Basic"),t(),n(4,"a",2),x("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-password-basic/sample-po-password-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-password name="password" p-label="PO Password"> </po-password>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-password-basic/sample-po-password-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-password-basic',
  templateUrl: './sample-po-password-basic.component.html',
  standalone: false
})
export class SamplePoPasswordBasicComponent {}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-password-basic"),t(),o(23,"hr")),l&2&&(d(5),C("po-icon "+i.sampleCodeButtonIcon),d(),y(" ",i.sampleCodeButtonLabel,""),d(),u("ngClass",_(4,ue,i.hideSampleCodeTabs)))},dependencies:[M,P,f,v,ne],encapsulation:2})}return a})();var ae=(()=>{class a{additionalHelpTooltip;errorPattern;event;help;label;mask;maxlength;minlength;password;pattern;placeholder;properties;size;propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"hidepasswordpeek",label:"Hide Password Peek"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(s){this.event=s}restore(){this.additionalHelpTooltip="",this.errorPattern=void 0,this.event=void 0,this.help=void 0,this.label=void 0,this.maxlength=void 0,this.minlength=void 0,this.password=void 0,this.pattern="",this.placeholder="",this.properties=[],this.size="medium"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-password-labs"]],standalone:!1,decls:20,vars:35,consts:[["f","ngForm"],["name","password",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-additional-help-tooltip","p-clean","p-disabled","p-error-pattern","p-help","p-hide-password-peek","p-label","p-maxlength","p-minlength","p-no-autocomplete","p-optional","p-pattern","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-size","p-error-limit","p-label-text-wrap"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","pattern","p-clean","","p-help","Ex.: '[a-zA]{5}[Z0-9]{3}'","p-label","Pattern (Regex)",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,i){if(l&1){let p=L();n(0,"po-password",1),h("ngModelChange",function(r){return m(p),g(i.password,r)||(i.password=r),c(r)}),x("p-blur",function(){return m(p),c(i.changeEvent("p-blur"))})("p-change",function(){return m(p),c(i.changeEvent("p-change"))})("p-change-model",function(){return m(p),c(i.changeEvent("p-change-model"))})("p-enter",function(){return m(p),c(i.changeEvent("p-enter"))})("p-keydown",function(){return m(p),c(i.changeEvent("p-keydown"))}),t(),o(1,"po-divider"),n(2,"div",2),o(3,"po-info",3)(4,"po-info",4),t(),o(5,"po-divider"),n(6,"form",null,0)(8,"po-input",5),h("ngModelChange",function(r){return m(p),g(i.label,r)||(i.label=r),c(r)}),t(),n(9,"po-input",6),h("ngModelChange",function(r){return m(p),g(i.help,r)||(i.help=r),c(r)}),t(),n(10,"po-input",7),h("ngModelChange",function(r){return m(p),g(i.additionalHelpTooltip,r)||(i.additionalHelpTooltip=r),c(r)}),t(),n(11,"po-input",8),h("ngModelChange",function(r){return m(p),g(i.placeholder,r)||(i.placeholder=r),c(r)}),t(),n(12,"po-input",9),h("ngModelChange",function(r){return m(p),g(i.errorPattern,r)||(i.errorPattern=r),c(r)}),t(),n(13,"po-input",10),h("ngModelChange",function(r){return m(p),g(i.pattern,r)||(i.pattern=r),c(r)}),t(),n(14,"po-number",11),h("ngModelChange",function(r){return m(p),g(i.minlength,r)||(i.minlength=r),c(r)}),t(),n(15,"po-number",12),h("ngModelChange",function(r){return m(p),g(i.maxlength,r)||(i.maxlength=r),c(r)}),t(),n(16,"po-checkbox-group",13),h("ngModelChange",function(r){return m(p),g(i.properties,r)||(i.properties=r),c(r)}),t(),n(17,"po-radio-group",14),h("ngModelChange",function(r){return m(p),g(i.size,r)||(i.size=r),c(r)}),t(),n(18,"div",2)(19,"po-button",15),x("p-click",function(){return m(p),c(i.restore())}),t()()()}l&2&&(b("ngModel",i.password),u("p-additional-help-tooltip",i.additionalHelpTooltip)("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-error-pattern",i.errorPattern)("p-help",i.help)("p-hide-password-peek",i.properties.includes("hidepasswordpeek"))("p-label",i.label)("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-pattern",i.pattern)("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap")),d(3),u("p-value",i.password),d(),u("p-value",i.event),d(4),b("ngModel",i.label),d(),b("ngModel",i.help),d(),b("ngModel",i.additionalHelpTooltip),d(),b("ngModel",i.placeholder),d(),b("ngModel",i.errorPattern),d(),b("ngModel",i.pattern),d(),b("ngModel",i.minlength),d(),b("ngModel",i.maxlength),d(),b("ngModel",i.properties),u("p-options",i.propertiesOptions),d(),b("ngModel",i.size),u("p-options",i.sizeOptions))},dependencies:[R,V,F,N,z,A,U,Y,Z,J,X,k,$],encapsulation:2})}return a})();var ge=a=>({"docs-sample-code-tabs":a}),re=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-password-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Password Labs"),t(),n(4,"a",2),x("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-password-labs/sample-po-password-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-password
  name="password"
  [(ngModel)]="password"
  [p-additional-help-tooltip]="additionalHelpTooltip"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-error-pattern]="errorPattern"
  [p-help]="help"
  [p-hide-password-peek]="properties.includes('hidepasswordpeek')"
  [p-label]="label"
  [p-maxlength]="maxlength"
  [p-minlength]="minlength"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-pattern]="pattern"
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
</po-password>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="password"> </po-info>

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

  <po-input
    class="po-md-6"
    name="pattern"
    [(ngModel)]="pattern"
    p-clean
    p-help="Ex.: '[a-zA]{5}[Z0-9]{3}'"
    p-label="Pattern (Regex)"
  >
  </po-input>

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
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-password-labs/sample-po-password-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-password-labs',
  templateUrl: './sample-po-password-labs.component.html',
  standalone: false
})
export class SamplePoPasswordLabsComponent implements OnInit {
  additionalHelpTooltip: string;
  errorPattern: string;
  event: string;
  help: string;
  label: string;
  mask: string;
  maxlength: number;
  minlength: number;
  password: string;
  pattern: string;
  placeholder: string;
  properties: Array<string>;
  size: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'hidepasswordpeek', label: 'Hide Password Peek' },
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
    this.errorPattern = undefined;
    this.event = undefined;
    this.help = undefined;
    this.label = undefined;
    this.maxlength = undefined;
    this.minlength = undefined;
    this.password = undefined;
    this.pattern = '';
    this.placeholder = '';
    this.properties = [];
    this.size = 'medium';
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-password-labs"),t(),o(23,"hr")),l&2&&(d(5),C("po-icon "+i.sampleCodeButtonIcon),d(),y(" ",i.sampleCodeButtonLabel,""),d(),u("ngClass",_(4,ge,i.hideSampleCodeTabs)))},dependencies:[M,P,f,v,ae],encapsulation:2})}return a})();var le=(()=>{class a{poAlert=I(O);confirmNewPassword;currentPassword;errorPattern;help="Initial password = 123456";newPassword;password="123456";setPassword(){this.confirmNewPassword===this.newPassword?(this.password=this.newPassword,this.help=`Actual password = ${this.password}`,this.currentPassword=void 0,this.newPassword=void 0,this.confirmNewPassword=void 0,this.poAlert.alert({title:"Password Reset",message:"Password saved successfully",ok:()=>this.reset()})):this.poAlert.alert({title:"Password Error",message:"Your (new passsword) is different of (confirm new password)",ok:()=>this.reset()})}reset(){this.newPassword=void 0,this.confirmNewPassword=void 0}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-password-reset"]],standalone:!1,features:[G([O])],decls:7,vars:7,consts:[["passwordForm","ngForm"],["name","currentPassword","p-clean","","p-error-pattern","invalid password","p-label","Current Password","p-mask","999999","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-help"],["name","newPassword","p-clean","","p-error-pattern","invalid password","p-label","New password","p-mask","999999","p-minlength","6","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],["name","confirmNewPassword","p-clean","","p-error-pattern","invalid password","p-label","Confirm New Password","p-mask","999999","p-minlength","6","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],[1,"po-row"],["p-label","Save",1,"po-md-4",3,"p-click","p-disabled"]],template:function(l,i){if(l&1){let p=L();n(0,"form",null,0)(2,"po-password",1),h("ngModelChange",function(r){return m(p),g(i.currentPassword,r)||(i.currentPassword=r),c(r)}),t(),n(3,"po-password",2),h("ngModelChange",function(r){return m(p),g(i.newPassword,r)||(i.newPassword=r),c(r)}),t(),n(4,"po-password",3),h("ngModelChange",function(r){return m(p),g(i.confirmNewPassword,r)||(i.confirmNewPassword=r),c(r)}),t(),n(5,"div",4)(6,"po-button",5),x("p-click",function(){return m(p),c(i.setPassword())}),t()()()}if(l&2){let p=j(1);d(2),b("ngModel",i.currentPassword),u("p-help",i.help),d(),b("ngModel",i.newPassword),u("p-disabled",i.currentPassword!==i.password),d(),b("ngModel",i.confirmNewPassword),u("p-disabled",i.currentPassword!==i.password),d(2),u("p-disabled",p.invalid)}},dependencies:[R,V,F,N,z,A,k],encapsulation:2})}return a})();var we=a=>({"docs-sample-code-tabs":a}),de=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-password-reset-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Password - Reset"),t(),n(4,"a",2),x("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-password-reset/sample-po-password-reset.component.html"),t(),n(13,"pre",7),e(14,`<form #passwordForm="ngForm">
  <po-password
    class="po-sm-12"
    name="currentPassword"
    [(ngModel)]="currentPassword"
    p-clean
    p-error-pattern="invalid password"
    p-label="Current Password"
    p-mask="999999"
    p-required
    [p-help]="help"
  >
  </po-password>

  <po-password
    class="po-sm-12"
    name="newPassword"
    [(ngModel)]="newPassword"
    p-clean
    p-error-pattern="invalid password"
    p-label="New password"
    p-mask="999999"
    p-minlength="6"
    p-required
    [p-disabled]="currentPassword !== password"
  >
  </po-password>

  <po-password
    class="po-sm-12"
    name="confirmNewPassword"
    [(ngModel)]="confirmNewPassword"
    p-clean
    p-error-pattern="invalid password"
    p-label="Confirm New Password"
    p-mask="999999"
    p-minlength="6"
    p-required
    [p-disabled]="currentPassword !== password"
  >
  </po-password>

  <div class="po-row">
    <po-button class="po-md-4" p-label="Save" [p-disabled]="passwordForm.invalid" (p-click)="setPassword()">
    </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-password-reset/sample-po-password-reset.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, inject } from '@angular/core';

import { PoDialogService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-password-reset',
  templateUrl: './sample-po-password-reset.component.html',
  providers: [PoDialogService],
  standalone: false
})
export class SamplePoPasswordResetComponent {
  private poAlert = inject(PoDialogService);

  confirmNewPassword: string;
  currentPassword: string;
  errorPattern: string;
  help: string = 'Initial password = 123456';
  newPassword: string;
  password: string = '123456';

  setPassword() {
    if (this.confirmNewPassword === this.newPassword) {
      this.password = this.newPassword;
      this.help = \`Actual password = \${this.password}\`;
      this.currentPassword = undefined;
      this.newPassword = undefined;
      this.confirmNewPassword = undefined;

      this.poAlert.alert({
        title: 'Password Reset',
        message: 'Password saved successfully',
        ok: () => this.reset()
      });
    } else {
      this.poAlert.alert({
        title: 'Password Error',
        message: 'Your (new passsword) is different of (confirm new password)',
        ok: () => this.reset()
      });
    }
  }

  reset() {
    this.newPassword = undefined;
    this.confirmNewPassword = undefined;
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-password-reset"),t(),o(23,"hr")),l&2&&(d(5),C("po-icon "+i.sampleCodeButtonIcon),d(),y(" ",i.sampleCodeButtonLabel,""),d(),u("ngClass",_(4,we,i.hideSampleCodeTabs)))},dependencies:[M,P,f,v,le],encapsulation:2})}return a})();var pe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-password-doc"]],standalone:!1,decls:1259,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(l,i){l&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoPasswordComponent"),t()(),n(21,"div",2)(22,"p"),e(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),t(),n(24,"p"),e(25,"Importante:"),t(),n(26,"ul")(27,"li"),e(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),t()(),n(29,"h4"),e(30,"Tokens customiz\xE1veis"),t(),n(31,"p"),e(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),o(33,"br"),e(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),n(35,"code"),e(36,".po-input"),t()(),n(37,"blockquote")(38,"p"),e(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),n(40,"a",6),e(41,"Grid System"),t(),e(42,"."),t()(),n(43,"blockquote")(44,"p"),e(45,"Para maiores informa\xE7\xF5es, acesse o guia "),n(46,"a",7),e(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(48,"."),t()(),n(49,"table")(50,"thead")(51,"tr")(52,"th"),e(53,"Propriedade"),t(),n(54,"th"),e(55,"Descri\xE7\xE3o"),t(),n(56,"th"),e(57,"Valor Padr\xE3o"),t()()(),n(58,"tbody")(59,"tr")(60,"td")(61,"strong"),e(62,"Default Values"),t()(),o(63,"td")(64,"td"),t(),n(65,"tr")(66,"td")(67,"code"),e(68,"--font-family"),t()(),n(69,"td"),e(70,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(71,"td")(72,"code"),e(73,"var(--font-family-theme)"),t()()(),n(74,"tr")(75,"td")(76,"code"),e(77,"--font-size"),t()(),n(78,"td"),e(79,"Tamanho da fonte"),t(),n(80,"td")(81,"code"),e(82,"var(--font-size-default)"),t()()(),n(83,"tr")(84,"td")(85,"code"),e(86,"--text-color-placeholder"),t()(),n(87,"td"),e(88,"Cor do texto placeholder"),t(),n(89,"td")(90,"code"),e(91,"var(--color-neutral-light-30)"),t()()(),n(92,"tr")(93,"td")(94,"code"),e(95,"--color"),t()(),n(96,"td"),e(97,"Cor pincipal do input"),t(),n(98,"td")(99,"code"),e(100,"var(--color-neutral-dark-70)"),t()()(),n(101,"tr")(102,"td")(103,"code"),e(104,"--background"),t()(),n(105,"td"),e(106,"Cor de background"),t(),n(107,"td")(108,"code"),e(109,"var(--color-neutral-light-05)"),t()()(),n(110,"tr")(111,"td")(112,"code"),e(113,"--padding"),t()(),n(114,"td"),e(115,"Preenchimento"),t(),n(116,"td")(117,"code"),e(118,"0 0.5rem"),t()()(),n(119,"tr")(120,"td")(121,"code"),e(122,"--text-color"),t()(),n(123,"td"),e(124,"Cor do texto"),t(),n(125,"td")(126,"code"),e(127,"var(--color-neutral-dark-90)"),t()()(),n(128,"tr")(129,"td")(130,"strong"),e(131,"Hover"),t()(),o(132,"td")(133,"td"),t(),n(134,"tr")(135,"td")(136,"code"),e(137,"--color-hover"),t()(),n(138,"td"),e(139,"Cor principal no estado hover"),t(),n(140,"td")(141,"code"),e(142,"var(--color-brand-01-dark)"),t()()(),n(143,"tr")(144,"td")(145,"code"),e(146,"--background-hover"),t()(),n(147,"td"),e(148,"Cor de background no estado hover"),t(),n(149,"td")(150,"code"),e(151,"var(--color-brand-01-lightest)"),t()()(),n(152,"tr")(153,"td")(154,"strong"),e(155,"Focused"),t()(),o(156,"td")(157,"td"),t(),n(158,"tr")(159,"td")(160,"code"),e(161,"--color-focused"),t()(),n(162,"td"),e(163,"Cor principal no estado de focus"),t(),n(164,"td")(165,"code"),e(166,"var(--color-action-default)"),t()()(),n(167,"tr")(168,"td")(169,"code"),e(170,"--outline-color-focused"),t()(),n(171,"td"),e(172,"Cor do outline do estado de focus"),t(),n(173,"td")(174,"code"),e(175,"var(--color-action-focus)"),t()()(),n(176,"tr")(177,"td")(178,"strong"),e(179,"Disabled"),t()(),o(180,"td")(181,"td"),t(),n(182,"tr")(183,"td")(184,"code"),e(185,"--color-disabled"),t()(),n(186,"td"),e(187,"Cor principal no estado disabled"),t(),n(188,"td")(189,"code"),e(190,"var(--color-neutral-light-30)"),t()()(),n(191,"tr")(192,"td")(193,"code"),e(194,"--background-disabled"),t()(),n(195,"td"),e(196,"Cor de background no estado disabled"),t(),n(197,"td")(198,"code"),e(199,"var(--color-neutral-light-20)"),t()()(),n(200,"tr")(201,"td")(202,"code"),e(203,"--text-color-disabled"),t()(),n(204,"td"),e(205,"Cor do texto no estado disabled"),t(),n(206,"td")(207,"code"),e(208,"var(--color-neutral-dark-70)"),t()()()()(),n(209,"p"),o(210,"br"),e(211," O "),n(212,"code"),e(213,"po-password"),t(),e(214," \xE9 um input espec\xEDfico para senhas. J\xE1 possui tipo, estilo e \xEDcone predefinidos."),t()(),n(215,"div",8)(216,"h4",9),e(217,"Seletor"),t(),n(218,"pre",10),e(219,`<po-password
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
    p-hide-password-peek="boolean"
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
</po-password>
`),t()(),n(220,"h4",11),e(221,"Propriedades"),t(),n(222,"table",12)(223,"tr",13)(224,"th",14),e(225,"Nome"),t(),n(226,"th",14),e(227,"Tipo"),t(),n(228,"th",14),e(229,"Padr\xE3o"),t(),n(230,"th",14),e(231,"Descri\xE7\xE3o"),t()(),n(232,"tr",15)(233,"td",16)(234,"div",17)(235,"span",18),e(236," (p-additional-help)"),o(237,"br"),t()(),n(238,"div",19),e(239,"Deprecated"),t()(),n(240,"td",20)(241,"code",21),e(242,"EventEmitter"),t()(),n(243,"td",22),e(244,"-"),t(),n(245,"td",23)(246,"em")(247,"strong"),e(248,"(opcional)"),t()(),n(249,"p"),e(250,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),n(251,"code"),e(252,"p-help"),t(),e(253,"."),t(),n(254,"blockquote")(255,"p"),e(256,"Essa propriedade est\xE1 "),n(257,"strong"),e(258,"depreciada"),t(),e(259," e ser\xE1 removida na vers\xE3o "),n(260,"code"),e(261,"23.x.x"),t(),e(262,". Recomendamos utilizar a propriedade "),n(263,"code"),e(264,"p-helper"),t(),e(265," que oferece mais recursos e flexibilidade."),t()()()(),n(266,"tr",15)(267,"td",16)(268,"div",24)(269,"span",25),e(270," p-additional-help-tooltip"),o(271,"br"),t()(),n(272,"div",19),e(273,"Deprecated"),t()(),n(274,"td",20)(275,"code",26),e(276,"string"),t()(),n(277,"td",22),e(278,"-"),t(),n(279,"td",23)(280,"em")(281,"strong"),e(282,"(opcional)"),t()(),n(283,"p"),e(284,"Exibe um \xEDcone de ajuda adicional ao "),n(285,"code"),e(286,"p-help"),t(),e(287,`, com o texto desta propriedade no tooltip.
Se o evento `),n(288,"code"),e(289,"p-additional-help"),t(),e(290,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),n(291,"strong"),e(292,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(293,"blockquote")(294,"p"),e(295,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),n(296,"blockquote")(297,"p"),e(298,"Essa propriedade est\xE1 "),n(299,"strong"),e(300,"depreciada"),t(),e(301," e ser\xE1 removida na vers\xE3o "),n(302,"code"),e(303,"23.x.x"),t(),e(304,". Recomendamos utilizar a propriedade "),n(305,"code"),e(306,"p-helper"),t(),e(307," que oferece mais recursos e flexibilidade."),t()()()(),n(308,"tr",15)(309,"td",16)(310,"div",24)(311,"span",25),e(312," p-append-in-body"),o(313,"br"),t()()(),n(314,"td",20)(315,"code",27),e(316,"boolean"),t()(),n(317,"td",22)(318,"p")(319,"code"),e(320,"false"),t()()(),n(321,"td",23)(322,"em")(323,"strong"),e(324,"(opcional)"),t()(),n(325,"p"),e(326,"Define que o tooltip ("),n(327,"code"),e(328,"p-additional-help-tooltip"),t(),e(329," e/ou "),n(330,"code"),e(331,"p-error-limit"),t(),e(332,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),n(333,"blockquote")(334,"p"),e(335,"Quando utilizado com "),n(336,"code"),e(337,"p-additional-help-tooltip"),t(),e(338,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),n(339,"tr",15)(340,"td",16)(341,"div",24)(342,"span",25),e(343," p-auto-focus"),o(344,"br"),t()()(),n(345,"td",20)(346,"code",27),e(347,"boolean"),t()(),n(348,"td",22)(349,"p")(350,"code"),e(351,"false"),t()()(),n(352,"td",23)(353,"em")(354,"strong"),e(355,"(opcional)"),t()(),n(356,"p"),e(357,"Aplica foco no elemento ao ser iniciado."),t(),n(358,"blockquote")(359,"p"),e(360,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(361,"tr",15)(362,"td",16)(363,"div",17)(364,"span",18),e(365," (p-blur)"),o(366,"br"),t()()(),n(367,"td",20)(368,"code",21),e(369,"EventEmitter"),t()(),n(370,"td",22),e(371,"-"),t(),n(372,"td",23)(373,"em")(374,"strong"),e(375,"(opcional)"),t()(),n(376,"p"),e(377,"Evento disparado ao sair do campo."),t()()(),n(378,"tr",15)(379,"td",16)(380,"div",17)(381,"span",18),e(382," (p-change)"),o(383,"br"),t()()(),n(384,"td",20)(385,"code",21),e(386,"EventEmitter"),t()(),n(387,"td",22),e(388,"-"),t(),n(389,"td",23)(390,"em")(391,"strong"),e(392,"(opcional)"),t()(),n(393,"p"),e(394,"Evento disparado ao alterar valor e deixar o campo."),t()()(),n(395,"tr",15)(396,"td",16)(397,"div",17)(398,"span",18),e(399," (p-change-model)"),o(400,"br"),t()()(),n(401,"td",20)(402,"code",21),e(403,"EventEmitter"),t()(),n(404,"td",22),e(405,"-"),t(),n(406,"td",23)(407,"em")(408,"strong"),e(409,"(opcional)"),t()(),n(410,"p"),e(411,"Evento disparado ao alterar valor do model."),t()()(),n(412,"tr",15)(413,"td",16)(414,"div",24)(415,"span",25),e(416,"p-clean"),o(417,"br"),t()()(),n(418,"td",20)(419,"code",27),e(420,"boolean"),t()(),n(421,"td",22),e(422,"-"),t(),n(423,"td",23)(424,"em")(425,"strong"),e(426,"(opcional)"),t()(),n(427,"p"),e(428,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t()()(),n(429,"tr",15)(430,"td",16)(431,"div",24)(432,"span",25),e(433,"p-disabled"),o(434,"br"),t()()(),n(435,"td",20)(436,"code",27),e(437,"boolean"),t()(),n(438,"td",22)(439,"p")(440,"code"),e(441,"false"),t()()(),n(442,"td",23)(443,"em")(444,"strong"),e(445,"(opcional)"),t()(),n(446,"p"),e(447,"Se verdadeiro, desabilita o campo."),t()()(),n(448,"tr",15)(449,"td",16)(450,"div",24)(451,"span",25),e(452," p-emit-all-changes"),o(453,"br"),t()()(),n(454,"td",20)(455,"code",27),e(456,"boolean"),t()(),n(457,"td",22)(458,"p")(459,"code"),e(460,"false"),t()()(),n(461,"td",23)(462,"em")(463,"strong"),e(464,"(opcional)"),t()(),n(465,"p"),e(466,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),t()()(),n(467,"tr",15)(468,"td",16)(469,"div",17)(470,"span",18),e(471," (p-enter)"),o(472,"br"),t()()(),n(473,"td",20)(474,"code",21),e(475,"EventEmitter"),t()(),n(476,"td",22),e(477,"-"),t(),n(478,"td",23)(479,"em")(480,"strong"),e(481,"(opcional)"),t()(),n(482,"p"),e(483,"Evento disparado ao entrar do campo."),t()()(),n(484,"tr",15)(485,"td",16)(486,"div",24)(487,"span",25),e(488," p-error-async-properties"),o(489,"br"),t()()(),n(490,"td",20)(491,"code",28),e(492,"ErrorAsyncProperties"),t()(),n(493,"td",22),e(494,"-"),t(),n(495,"td",23)(496,"em")(497,"strong"),e(498,"(opcional)"),t()(),n(499,"p"),e(500,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),n(501,"code"),e(502,"Reactive Forms"),t(),e(503,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),n(504,"code"),e(505,"asyncValidators"),t(),e(506,"."),t()()(),n(507,"tr",15)(508,"td",16)(509,"div",24)(510,"span",25),e(511," p-error-limit"),o(512,"br"),t()()(),n(513,"td",20)(514,"code",27),e(515,"boolean"),t()(),n(516,"td",22)(517,"p")(518,"code"),e(519,"false"),t()()(),n(520,"td",23)(521,"em")(522,"strong"),e(523,"(opcional)"),t()(),n(524,"p"),e(525,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(526,"blockquote")(527,"p"),e(528,"Caso essa propriedade seja definida como "),n(529,"code"),e(530,"true"),t(),e(531,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),n(532,"tr",15)(533,"td",16)(534,"div",24)(535,"span",25),e(536," p-error-pattern"),o(537,"br"),t()()(),n(538,"td",20)(539,"code",26),e(540,"string"),t()(),n(541,"td",22),e(542,"-"),t(),n(543,"td",23)(544,"em")(545,"strong"),e(546,"(opcional)"),t()(),n(547,"p"),e(548,"Mensagem que ser\xE1 apresentada quando o "),n(549,"code"),e(550,"pattern"),t(),e(551," ou a m\xE1scara n\xE3o for satisfeita."),t(),n(552,"blockquote")(553,"p"),e(554,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),n(555,"code"),e(556,"p-required-field-error-message"),t(),e(557," em conjunto."),t()()()(),n(558,"tr",15)(559,"td",16)(560,"div",24)(561,"span",25),e(562," p-help"),o(563,"br"),t()()(),n(564,"td",20)(565,"code",26),e(566,"string"),t()(),n(567,"td",22),e(568,"-"),t(),n(569,"td",23)(570,"em")(571,"strong"),e(572,"(opcional)"),t()(),n(573,"p"),e(574,"Texto de apoio do campo."),t()()(),n(575,"tr",15)(576,"td",16)(577,"div",24)(578,"span",25),e(579," p-hide-password-peek"),o(580,"br"),t()()(),n(581,"td",20)(582,"code",27),e(583,"boolean"),t()(),n(584,"td",22)(585,"p")(586,"code"),e(587,"false"),t()()(),n(588,"td",23)(589,"em")(590,"strong"),e(591,"(opcional)"),t()(),n(592,"p"),e(593,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada."),t()()(),n(594,"tr",15)(595,"td",16)(596,"div",24)(597,"span",25),e(598," p-icon"),o(599,"br"),t()()(),n(600,"td",20)(601,"code",26),e(602,"string "),t(),n(603,"code",29),e(604," TemplateRef<void>"),t()(),n(605,"td",22),e(606,"-"),t(),n(607,"td",23)(608,"em")(609,"strong"),e(610,"(opcional)"),t()(),n(611,"p"),e(612,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),n(613,"p"),e(614,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(615,"a",30),e(616,"Biblioteca de \xEDcones"),t(),e(617,". conforme exemplo abaixo:"),t(),n(618,"pre")(619,"code"),e(620,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),t()(),n(621,"p"),e(622,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),n(623,"em"),e(624,"Font Awesome"),t(),e(625,", da seguinte forma:"),t(),n(626,"pre")(627,"code"),e(628,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),t()(),n(629,"p"),e(630,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(631,"code"),e(632,"TemplateRef"),t(),e(633,", conforme exemplo abaixo:"),t(),n(634,"pre")(635,"code"),e(636,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),t()(),n(637,"blockquote")(638,"p"),e(639,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),n(640,"code"),e(641,"font-size: inherit"),t(),e(642," caso o \xEDcone utilizado n\xE3o aplique-o."),t()()()(),n(643,"tr",15)(644,"td",16)(645,"div",17)(646,"span",18),e(647," (p-keydown)"),o(648,"br"),t()()(),n(649,"td",20)(650,"code",21),e(651,"EventEmitter"),t()(),n(652,"td",22),e(653,"-"),t(),n(654,"td",23)(655,"em")(656,"strong"),e(657,"(opcional)"),t()(),n(658,"p"),e(659,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(660,"code"),e(661,"KeyboardEvent"),t(),e(662," com informa\xE7\xF5es sobre a tecla."),t()()(),n(663,"tr",15)(664,"td",16)(665,"div",24)(666,"span",25),e(667," p-label"),o(668,"br"),t()()(),n(669,"td",20)(670,"code",26),e(671,"string"),t()(),n(672,"td",22),e(673,"-"),t(),n(674,"td",23)(675,"em")(676,"strong"),e(677,"(opcional)"),t()(),n(678,"p"),e(679,"R\xF3tulo do campo."),t()()(),n(680,"tr",15)(681,"td",16)(682,"div",24)(683,"span",25),e(684," p-label-text-wrap"),o(685,"br"),t()()(),n(686,"td",20)(687,"code",27),e(688,"boolean"),t()(),n(689,"td",22)(690,"p")(691,"code"),e(692,"false"),t()()(),n(693,"td",23)(694,"em")(695,"strong"),e(696,"(opcional)"),t()(),n(697,"p"),e(698,"Habilita a quebra autom\xE1tica do texto da propriedade "),n(699,"code"),e(700,"p-label"),t(),e(701,". Quando "),n(702,"code"),e(703,"p-label-text-wrap"),t(),e(704,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),n(705,"tr",15)(706,"td",16)(707,"div",24)(708,"span",25),e(709,"p-mask"),o(710,"br"),t()()(),n(711,"td",20)(712,"code",26),e(713,"string"),t()(),n(714,"td",22),e(715,"-"),t(),n(716,"td",23)(717,"em")(718,"strong"),e(719,"(opcional)"),t()(),n(720,"p"),e(721,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),t()()(),n(722,"tr",15)(723,"td",16)(724,"div",24)(725,"span",25),e(726,"p-mask-format-model"),o(727,"br"),t()()(),n(728,"td",20)(729,"code",27),e(730,"boolean"),t()(),n(731,"td",22)(732,"p")(733,"code"),e(734,"false"),t()()(),n(735,"td",23)(736,"em")(737,"strong"),e(738,"(opcional)"),t()(),n(739,"p"),e(740,"Indica se o "),n(741,"code"),e(742,"model"),t(),e(743," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),t()()(),n(744,"tr",15)(745,"td",16)(746,"div",24)(747,"span",25),e(748," p-mask-no-length-validation"),o(749,"br"),t()()(),n(750,"td",20)(751,"code",27),e(752,"boolean"),t()(),n(753,"td",22)(754,"p")(755,"code"),e(756,"false"),t()()(),n(757,"td",23)(758,"p"),e(759,"Define se os caracteres especiais da m\xE1scara devem ser ignorados ao validar os comprimentos m\xEDnimo ("),n(760,"code"),e(761,"minLength"),t(),e(762,") e m\xE1ximo ("),n(763,"code"),e(764,"maxLength"),t(),e(765,") do campo."),t(),n(766,"ul")(767,"li"),e(768,"Quando "),n(769,"code"),e(770,"true"),t(),e(771,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),t(),n(772,"li"),e(773,"Quando "),n(774,"code"),e(775,"false"),t(),e(776,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),t()(),n(777,"blockquote")(778,"p"),e(779,"Ser\xE1 ignorado essa propriedade , caso esteja utilizando junto com a propriedade "),n(780,"code"),e(781,"p-mask-format-model"),t(),e(782,"."),t()(),n(783,"p"),e(784,"Exemplo:"),t(),n(785,"pre")(786,"code"),e(787,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),t()(),n(788,"ul")(789,"li"),e(790,"Entrada: "),n(791,"code"),e(792,"123-456"),t(),e(793," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),n(794,"code"),e(795,"-"),t(),e(796,"."),t()()()(),n(797,"tr",15)(798,"td",16)(799,"div",24)(800,"span",25),e(801," p-maxlength"),o(802,"br"),t()()(),n(803,"td",20)(804,"code",31),e(805,"number"),t()(),n(806,"td",22),e(807,"-"),t(),n(808,"td",23)(809,"em")(810,"strong"),e(811,"(opcional)"),t()(),n(812,"p"),e(813,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),t()()(),n(814,"tr",15)(815,"td",16)(816,"div",24)(817,"span",25),e(818," p-minlength"),o(819,"br"),t()()(),n(820,"td",20)(821,"code",31),e(822,"number"),t()(),n(823,"td",22),e(824,"-"),t(),n(825,"td",23)(826,"em")(827,"strong"),e(828,"(opcional)"),t()(),n(829,"p"),e(830,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),t()()(),n(831,"tr",15)(832,"td",16)(833,"div",24)(834,"span",25),e(835," name"),o(836,"br"),t()()(),n(837,"td",20)(838,"code",26),e(839,"string"),t()(),n(840,"td",22),e(841,"-"),t(),n(842,"td",23)(843,"p"),e(844,"Nome e identificador do campo."),t()()(),n(845,"tr",15)(846,"td",16)(847,"div",24)(848,"span",25),e(849," p-no-autocomplete"),o(850,"br"),t()()(),n(851,"td",20)(852,"code",27),e(853,"boolean"),t()(),n(854,"td",22)(855,"p")(856,"code"),e(857,"false"),t()()(),n(858,"td",23)(859,"em")(860,"strong"),e(861,"(opcional)"),t()(),n(862,"p"),e(863,"Define a propriedade nativa "),n(864,"code"),e(865,"autocomplete"),t(),e(866," do campo como "),n(867,"code"),e(868,"off"),t(),e(869,"."),t(),n(870,"blockquote")(871,"p"),e(872,"No componente "),n(873,"code"),e(874,"po-password"),t(),e(875," ser\xE1 definido como "),n(876,"code"),e(877,"new-password"),t(),e(878,"."),t()(),n(879,"p"),e(880,"Nos componentes "),n(881,"code"),e(882,"po-password"),t(),e(883," e "),n(884,"code"),e(885,"po-login"),t(),e(886," o valor padr\xE3o ser\xE1 "),n(887,"code"),e(888,"true"),t(),e(889,"."),t()()(),n(890,"tr",15)(891,"td",16)(892,"div",24)(893,"span",25),e(894," p-optional"),o(895,"br"),t()()(),n(896,"td",20)(897,"code",27),e(898,"boolean"),t()(),n(899,"td",22)(900,"p")(901,"code"),e(902,"false"),t()()(),n(903,"td",23)(904,"em")(905,"strong"),e(906,"(opcional)"),t()(),n(907,"p"),e(908,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(909,"blockquote")(910,"p"),e(911,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(912,"ul")(913,"li"),e(914,"O campo conter "),n(915,"code"),e(916,"p-required"),t(),e(917,";"),t(),n(918,"li"),e(919,"N\xE3o possuir "),n(920,"code"),e(921,"p-help"),t(),e(922," e/ou "),n(923,"code"),e(924,"p-label"),t(),e(925,"."),t()()()(),n(926,"tr",15)(927,"td",16)(928,"div",24)(929,"span",25),e(930,"p-pattern"),o(931,"br"),t()()(),n(932,"td",20)(933,"code",26),e(934,"string"),t()(),n(935,"td",22),e(936,"-"),t(),n(937,"td",23)(938,"em")(939,"strong"),e(940,"(opcional)"),t()(),n(941,"p"),e(942,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),n(943,"code"),e(944,"(p-mask)"),t(),e(945,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),t()()(),n(946,"tr",15)(947,"td",16)(948,"div",24)(949,"span",25),e(950," p-placeholder"),o(951,"br"),t()()(),n(952,"td",20)(953,"code",26),e(954,"string"),t()(),n(955,"td",22)(956,"p"),e(957,"''"),t()(),n(958,"td",23)(959,"em")(960,"strong"),e(961,"(opcional)"),t()(),n(962,"p"),e(963,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(964,"tr",15)(965,"td",16)(966,"div",24)(967,"span",25),e(968," p-helper"),o(969,"br"),t()()(),n(970,"td",20)(971,"code",32),e(972,"PoHelperOptions "),t(),n(973,"code",26),e(974," string"),t()(),n(975,"td",22),e(976,"-"),t(),n(977,"td",23)(978,"em")(979,"strong"),e(980,"(opcional)"),t()(),n(981,"p"),e(982,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label."),t(),n(983,"blockquote")(984,"p"),e(985,"Caso o "),n(986,"code"),e(987,"p-label"),t(),e(988,` n\xE3o esteja definido, o componente po-helper n\xE3o ser\xE1 exibido.
Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional (`),n(989,"code"),e(990,"p-additional-help-tooltip"),t(),e(991," e "),n(992,"code"),e(993,"p-additional-help"),t(),e(994,") ser\xE1 ignorado."),t()()()(),n(995,"tr",15)(996,"td",16)(997,"div",24)(998,"span",25),e(999,"p-readonly"),o(1e3,"br"),t()()(),n(1001,"td",20)(1002,"code",27),e(1003,"boolean"),t()(),n(1004,"td",22),e(1005,"-"),t(),n(1006,"td",23)(1007,"em")(1008,"strong"),e(1009,"(opcional)"),t()(),n(1010,"p"),e(1011,"Indica que o campo ser\xE1 somente leitura."),t()()(),n(1012,"tr",15)(1013,"td",16)(1014,"div",24)(1015,"span",25),e(1016,"p-required"),o(1017,"br"),t()()(),n(1018,"td",20)(1019,"code",27),e(1020,"boolean"),t()(),n(1021,"td",22)(1022,"p")(1023,"code"),e(1024,"false"),t()()(),n(1025,"td",23)(1026,"em")(1027,"strong"),e(1028,"(opcional)"),t()(),n(1029,"p"),e(1030,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),n(1031,"blockquote")(1032,"p"),e(1033,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),n(1034,"code"),e(1035,"(p-disabled)"),t(),e(1036,"."),t()()()(),n(1037,"tr",15)(1038,"td",16)(1039,"div",24)(1040,"span",25),e(1041," p-required-field-error-message"),o(1042,"br"),t()()(),n(1043,"td",20)(1044,"code",27),e(1045,"boolean"),t()(),n(1046,"td",22)(1047,"p")(1048,"code"),e(1049,"false"),t()()(),n(1050,"td",23)(1051,"em")(1052,"strong"),e(1053,"(opcional)"),t()(),n(1054,"p"),e(1055,"Exibe a mensagem setada na propriedade "),n(1056,"code"),e(1057,"p-error-pattern"),t(),e(1058," se o campo estiver vazio e for requerido."),t(),n(1059,"blockquote")(1060,"p"),e(1061,"Necess\xE1rio que a propriedade "),n(1062,"code"),e(1063,"p-required"),t(),e(1064," esteja habilitada."),t()()()(),n(1065,"tr",15)(1066,"td",16)(1067,"div",24)(1068,"span",25),e(1069," p-show-required"),o(1070,"br"),t()()(),n(1071,"td",20)(1072,"code",27),e(1073,"boolean"),t()(),n(1074,"td",22),e(1075,"-"),t(),n(1076,"td",23)(1077,"p"),e(1078,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(1079,"blockquote")(1080,"p"),e(1081,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(1082,"ul")(1083,"li"),e(1084,"N\xE3o possuir "),n(1085,"code"),e(1086,"p-help"),t(),e(1087," e/ou "),n(1088,"code"),e(1089,"p-label"),t(),e(1090,"."),t()()()(),n(1091,"tr",15)(1092,"td",16)(1093,"div",24)(1094,"span",25),e(1095," p-size"),o(1096,"br"),t()()(),n(1097,"td",20)(1098,"code",26),e(1099,"string"),t()(),n(1100,"td",22)(1101,"p")(1102,"code"),e(1103,"medium"),t()()(),n(1104,"td",23)(1105,"em")(1106,"strong"),e(1107,"(opcional)"),t()(),n(1108,"p"),e(1109,"Define o tamanho do componente:"),t(),n(1110,"ul")(1111,"li")(1112,"code"),e(1113,"small"),t(),e(1114,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(1115,"li")(1116,"code"),e(1117,"medium"),t(),e(1118,": altura do input como 44px."),t()(),n(1119,"blockquote")(1120,"p"),e(1121,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(1122,"code"),e(1123,"medium"),t(),e(1124,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(1125,"a",33),e(1126,"po-theme"),t(),e(1127,"."),t()()()(),n(1128,"tr",15)(1129,"td",16)(1130,"div",24)(1131,"span",25),e(1132," p-upper-case"),o(1133,"br"),t()()(),n(1134,"td",20)(1135,"code",27),e(1136,"boolean"),t()(),n(1137,"td",22),e(1138,"-"),t(),n(1139,"td",23)(1140,"p"),e(1141,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),t()()()(),n(1142,"h3",11),e(1143,"M\xE9todos"),t(),n(1144,"table",34)(1145,"tr",15)(1146,"th",35)(1147,"div",24)(1148,"h4")(1149,"span",25),e(1150," showAdditionalHelp "),t()()()()(),n(1151,"tr",23)(1152,"td",23)(1153,"p"),e(1154,"M\xE9todo que exibe "),n(1155,"code"),e(1156,"p-additionalHelpTooltip"),t(),e(1157," ou executa a a\xE7\xE3o definida em "),n(1158,"code"),e(1159,"p-additionalHelp"),t(),e(1160,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),n(1161,"code"),e(1162,"p-keydown"),t(),e(1163,"."),t(),n(1164,"blockquote")(1165,"p"),e(1166,"Exibe ou oculta o conte\xFAdo do componente "),n(1167,"code"),e(1168,"po-helper"),t(),e(1169," quando o componente estiver com foco e com label vis\xEDvel."),t()(),n(1170,"pre")(1171,"code"),e(1172,`<po-nome-component
 #component
 ...
 p-additional-help-tooltip="Mensagem de ajuda complementar"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),t()(),n(1173,"pre")(1174,"code"),e(1175,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),t()(),n(1176,"pre")(1177,"code"),e(1178,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),o(1179,"br"),n(1180,"table",34)(1181,"tr",15)(1182,"th",35)(1183,"div",24)(1184,"h4")(1185,"span",25),e(1186," focus "),t()()()()(),n(1187,"tr",23)(1188,"td",23)(1189,"p"),e(1190,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(1191,"p"),e(1192,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(1193,"pre")(1194,"code"),e(1195,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),t()()()()(),o(1196,"br"),n(1197,"h3"),e(1198,"Interfaces"),t(),n(1199,"h4",36)(1200,"code",5),e(1201,"ErrorAsyncProperties"),t()(),n(1202,"div",2)(1203,"p"),e(1204,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),t()(),n(1205,"h4",11),e(1206,"Propriedades"),t(),n(1207,"table",12)(1208,"tr",13)(1209,"th",14),e(1210,"Nome"),t(),n(1211,"th",14),e(1212,"Tipo"),t(),n(1213,"th",14),e(1214,"Descri\xE7\xE3o"),t()(),n(1215,"tr",15)(1216,"td",16)(1217,"div",24)(1218,"span",25),e(1219," errorAsync"),o(1220,"br"),t()()(),n(1221,"td",20)(1222,"code",37),e(1223,"(value) => Observable<boolean>"),t()(),n(1224,"td",23)(1225,"p"),e(1226,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(1227,"code"),e(1228,"change"),t(),e(1229," ou "),n(1230,"code"),e(1231,"change-model"),t(),e(1232,", dependendo do valor da propriedade "),n(1233,"code"),e(1234,"triggerMode"),t(),e(1235,"."),t()()(),n(1236,"tr",15)(1237,"td",16)(1238,"div",24)(1239,"span",25),e(1240," triggerMode"),o(1241,"br"),t()()(),n(1242,"td",20)(1243,"code",38),e(1244,"'change' "),t(),n(1245,"code",39),e(1246," 'changeModel'"),t()(),n(1247,"td",23)(1248,"em")(1249,"strong"),e(1250,"(opcional)"),t()(),n(1251,"p"),e(1252,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),n(1253,"code"),e(1254,"change"),t(),e(1255," ou "),n(1256,"code"),e(1257,"change-model"),t(),e(1258,"."),t()()()()())},dependencies:[P],encapsulation:2})}return a})();var se=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(s,l){this.route=s,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let l=s.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(s){this.router.navigate([],{queryParams:{view:s},queryParamsHandling:"merge"}),this.activeTab=s}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||a)(W(K),W(Q))};static \u0275cmp=S({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Password",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),x("p-click",function(){return i.changeTab("doc")}),o(3,"sample-po-password-doc"),t(),n(4,"po-tab",3),x("p-click",function(){return i.changeTab("web")}),o(5,"sample-po-password-basic-view")(6,"sample-po-password-labs-view")(7,"sample-po-password-reset-view"),t()()()),l&2&&(u("p-actions",i.actions),d(2),u("p-active",i.activeTab==="doc"),d(2),u("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[ee,f,v,oe,re,de,pe],encapsulation:2})}return a})();var Pe=[{path:"",component:se}],me=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=D({type:a});static \u0275inj=q({imports:[B.forChild(Pe),B]})}return a})();var Ze=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=D({type:a});static \u0275inj=q({imports:[te,me]})}return a})();export{Ze as DocPoPasswordModule};
