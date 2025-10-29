import{o as P,p as te}from"./chunk-TFKSP2Z2.js";import{Ab as v,Fa as J,Ma as X,Na as k,O as Y,Q as Z,Xa as $,_ as O,a as U,nb as ee,v as R,zb as f}from"./chunk-3S4WNRBY.js";import{$c as B,Aa as u,Da as C,Fb as M,Gc as V,Hc as F,Ic as z,Jc as N,Kc as A,La as n,Ma as t,N as T,Na as o,Q as H,Ra as L,Sa as x,U as m,V as c,Xc as Q,Zc as K,bb as j,cb as e,eb as y,gb as g,hb as b,ib as h,ja as d,ka as W,mb as G,ob as _,qa as S,ra as D}from"./chunk-CBLD3XJL.js";var ne=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-password-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","password","p-label","PO Password"]],template:function(l,i){l&1&&o(0,"po-password",0)},dependencies:[k],encapsulation:2})}return a})();var ue=a=>({"docs-sample-code-tabs":a}),oe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-password-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Password Basic"),t(),n(4,"a",2),x("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-password-basic/sample-po-password-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-password name="password" p-label="PO Password"> </po-password>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-password-basic/sample-po-password-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-password-basic',
  templateUrl: './sample-po-password-basic.component.html',
  standalone: false
})
export class SamplePoPasswordBasicComponent {}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-password-basic"),t(),o(23,"hr")),l&2&&(d(5),C("po-icon "+i.sampleCodeButtonIcon),d(),y(" ",i.sampleCodeButtonLabel,""),d(),u("ngClass",_(4,ue,i.hideSampleCodeTabs)))},dependencies:[M,P,f,v,ne],encapsulation:2})}return a})();var ae=(()=>{class a{helperText;errorPattern;event;help;label;mask;maxlength;minlength;password;pattern;placeholder;properties;size;propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"hidepasswordpeek",label:"Hide Password Peek"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(s){this.event=s}restore(){this.helperText="",this.errorPattern=void 0,this.event=void 0,this.help=void 0,this.label=void 0,this.maxlength=void 0,this.minlength=void 0,this.password=void 0,this.pattern="",this.placeholder="",this.properties=[],this.size="medium"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-password-labs"]],standalone:!1,decls:20,vars:35,consts:[["f","ngForm"],["name","password",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-helper","p-clean","p-disabled","p-error-pattern","p-help","p-hide-password-peek","p-label","p-maxlength","p-minlength","p-no-autocomplete","p-optional","p-pattern","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-size","p-error-limit","p-label-text-wrap"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","pattern","p-clean","","p-help","Ex.: '[a-zA]{5}[Z0-9]{3}'","p-label","Pattern (Regex)",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,i){if(l&1){let p=L();n(0,"po-password",1),h("ngModelChange",function(r){return m(p),b(i.password,r)||(i.password=r),c(r)}),x("p-blur",function(){return m(p),c(i.changeEvent("p-blur"))})("p-change",function(){return m(p),c(i.changeEvent("p-change"))})("p-change-model",function(){return m(p),c(i.changeEvent("p-change-model"))})("p-enter",function(){return m(p),c(i.changeEvent("p-enter"))})("p-keydown",function(){return m(p),c(i.changeEvent("p-keydown"))}),t(),o(1,"po-divider"),n(2,"div",2),o(3,"po-info",3)(4,"po-info",4),t(),o(5,"po-divider"),n(6,"form",null,0)(8,"po-input",5),h("ngModelChange",function(r){return m(p),b(i.label,r)||(i.label=r),c(r)}),t(),n(9,"po-input",6),h("ngModelChange",function(r){return m(p),b(i.help,r)||(i.help=r),c(r)}),t(),n(10,"po-input",7),h("ngModelChange",function(r){return m(p),b(i.helperText,r)||(i.helperText=r),c(r)}),t(),n(11,"po-input",8),h("ngModelChange",function(r){return m(p),b(i.placeholder,r)||(i.placeholder=r),c(r)}),t(),n(12,"po-input",9),h("ngModelChange",function(r){return m(p),b(i.errorPattern,r)||(i.errorPattern=r),c(r)}),t(),n(13,"po-input",10),h("ngModelChange",function(r){return m(p),b(i.pattern,r)||(i.pattern=r),c(r)}),t(),n(14,"po-number",11),h("ngModelChange",function(r){return m(p),b(i.minlength,r)||(i.minlength=r),c(r)}),t(),n(15,"po-number",12),h("ngModelChange",function(r){return m(p),b(i.maxlength,r)||(i.maxlength=r),c(r)}),t(),n(16,"po-checkbox-group",13),h("ngModelChange",function(r){return m(p),b(i.properties,r)||(i.properties=r),c(r)}),t(),n(17,"po-radio-group",14),h("ngModelChange",function(r){return m(p),b(i.size,r)||(i.size=r),c(r)}),t(),n(18,"div",2)(19,"po-button",15),x("p-click",function(){return m(p),c(i.restore())}),t()()()}l&2&&(g("ngModel",i.password),u("p-helper",i.helperText)("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-error-pattern",i.errorPattern)("p-help",i.help)("p-hide-password-peek",i.properties.includes("hidepasswordpeek"))("p-label",i.label)("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-pattern",i.pattern)("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap")),d(3),u("p-value",i.password),d(),u("p-value",i.event),d(4),g("ngModel",i.label),d(),g("ngModel",i.help),d(),g("ngModel",i.helperText),d(),g("ngModel",i.placeholder),d(),g("ngModel",i.errorPattern),d(),g("ngModel",i.pattern),d(),g("ngModel",i.minlength),d(),g("ngModel",i.maxlength),d(),g("ngModel",i.properties),u("p-options",i.propertiesOptions),d(),g("ngModel",i.size),u("p-options",i.sizeOptions))},dependencies:[A,V,F,N,z,R,U,Y,Z,J,X,k,$],encapsulation:2})}return a})();var be=a=>({"docs-sample-code-tabs":a}),re=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-password-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Password Labs"),t(),n(4,"a",2),x("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-password-labs/sample-po-password-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-password
  name="password"
  [(ngModel)]="password"
  [p-helper]="helperText"
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

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

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
  helperText: string;
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
    this.helperText = '';
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
`),t()()()()(),n(21,"div",10),o(22,"sample-po-password-labs"),t(),o(23,"hr")),l&2&&(d(5),C("po-icon "+i.sampleCodeButtonIcon),d(),y(" ",i.sampleCodeButtonLabel,""),d(),u("ngClass",_(4,be,i.hideSampleCodeTabs)))},dependencies:[M,P,f,v,ae],encapsulation:2})}return a})();var le=(()=>{class a{poAlert=H(O);confirmNewPassword;currentPassword;errorPattern;help="Initial password = 123456";newPassword;password="123456";setPassword(){this.confirmNewPassword===this.newPassword?(this.password=this.newPassword,this.help=`Actual password = ${this.password}`,this.currentPassword=void 0,this.newPassword=void 0,this.confirmNewPassword=void 0,this.poAlert.alert({title:"Password Reset",message:"Password saved successfully",ok:()=>this.reset()})):this.poAlert.alert({title:"Password Error",message:"Your (new passsword) is different of (confirm new password)",ok:()=>this.reset()})}reset(){this.newPassword=void 0,this.confirmNewPassword=void 0}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-password-reset"]],standalone:!1,features:[G([O])],decls:7,vars:7,consts:[["passwordForm","ngForm"],["name","currentPassword","p-clean","","p-error-pattern","invalid password","p-label","Current Password","p-mask","999999","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-help"],["name","newPassword","p-clean","","p-error-pattern","invalid password","p-label","New password","p-mask","999999","p-minlength","6","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],["name","confirmNewPassword","p-clean","","p-error-pattern","invalid password","p-label","Confirm New Password","p-mask","999999","p-minlength","6","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],[1,"po-row"],["p-label","Save",1,"po-md-4",3,"p-click","p-disabled"]],template:function(l,i){if(l&1){let p=L();n(0,"form",null,0)(2,"po-password",1),h("ngModelChange",function(r){return m(p),b(i.currentPassword,r)||(i.currentPassword=r),c(r)}),t(),n(3,"po-password",2),h("ngModelChange",function(r){return m(p),b(i.newPassword,r)||(i.newPassword=r),c(r)}),t(),n(4,"po-password",3),h("ngModelChange",function(r){return m(p),b(i.confirmNewPassword,r)||(i.confirmNewPassword=r),c(r)}),t(),n(5,"div",4)(6,"po-button",5),x("p-click",function(){return m(p),c(i.setPassword())}),t()()()}if(l&2){let p=j(1);d(2),g("ngModel",i.currentPassword),u("p-help",i.help),d(),g("ngModel",i.newPassword),u("p-disabled",i.currentPassword!==i.password),d(),g("ngModel",i.confirmNewPassword),u("p-disabled",i.currentPassword!==i.password),d(2),u("p-disabled",p.invalid)}},dependencies:[A,V,F,N,z,R,k],encapsulation:2})}return a})();var we=a=>({"docs-sample-code-tabs":a}),de=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-password-reset-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Password - Reset"),t(),n(4,"a",2),x("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-password-reset/sample-po-password-reset.component.html"),t(),n(13,"pre",7),e(14,`<form #passwordForm="ngForm">
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
`),t()()()()(),n(21,"div",10),o(22,"sample-po-password-reset"),t(),o(23,"hr")),l&2&&(d(5),C("po-icon "+i.sampleCodeButtonIcon),d(),y(" ",i.sampleCodeButtonLabel,""),d(),u("ngClass",_(4,we,i.hideSampleCodeTabs)))},dependencies:[M,P,f,v,le],encapsulation:2})}return a})();var pe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-password-doc"]],standalone:!1,decls:1262,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(l,i){l&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
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
`),t()(),n(220,"h4",11),e(221,"Propriedades"),t(),n(222,"table",12)(223,"tr",13)(224,"th",14),e(225,"Nome"),t(),n(226,"th",14),e(227,"Tipo"),t(),n(228,"th",14),e(229,"Padr\xE3o"),t(),n(230,"th",14),e(231,"Descri\xE7\xE3o"),t()(),n(232,"tr",15)(233,"td",16)(234,"div",17)(235,"span",18),e(236," (p-additional-help)"),o(237,"br"),t()(),n(238,"div",19),e(239,"Deprecated"),t()(),n(240,"td",20)(241,"code",21),e(242,"EventEmitter"),t()(),n(243,"td",22),e(244,"-"),t(),n(245,"td",23)(246,"em")(247,"strong"),e(248,"(opcional)"),t()(),n(249,"p"),e(250,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),t(),n(251,"blockquote")(252,"p"),e(253,"Essa propriedade est\xE1 "),n(254,"strong"),e(255,"depreciada"),t(),e(256," e ser\xE1 removida na vers\xE3o "),n(257,"code"),e(258,"23.x.x"),t(),e(259,". Recomendamos utilizar a propriedade "),n(260,"code"),e(261,"p-helper"),t(),e(262," que oferece mais recursos e flexibilidade."),t()()()(),n(263,"tr",15)(264,"td",16)(265,"div",24)(266,"span",25),e(267," p-additional-help-tooltip"),o(268,"br"),t()(),n(269,"div",19),e(270,"Deprecated"),t()(),n(271,"td",20)(272,"code",26),e(273,"string"),t()(),n(274,"td",22),e(275,"-"),t(),n(276,"td",23)(277,"em")(278,"strong"),e(279,"(opcional)"),t()(),n(280,"p"),e(281,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),n(282,"code"),e(283,"po-helper"),t(),e(284,`.
`),n(285,"strong"),e(286,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(287,"blockquote")(288,"p"),e(289,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),n(290,"blockquote")(291,"p"),e(292,"Essa propriedade est\xE1 "),n(293,"strong"),e(294,"depreciada"),t(),e(295," e ser\xE1 removida na vers\xE3o "),n(296,"code"),e(297,"23.x.x"),t(),e(298,". Recomendamos utilizar a propriedade "),n(299,"code"),e(300,"p-helper"),t(),e(301," que oferece mais recursos e flexibilidade."),t()()()(),n(302,"tr",15)(303,"td",16)(304,"div",24)(305,"span",25),e(306," p-append-in-body"),o(307,"br"),t()()(),n(308,"td",20)(309,"code",27),e(310,"boolean"),t()(),n(311,"td",22)(312,"p")(313,"code"),e(314,"false"),t()()(),n(315,"td",23)(316,"em")(317,"strong"),e(318,"(opcional)"),t()(),n(319,"p"),e(320,"Define que o popover ("),n(321,"code"),e(322,"p-helper"),t(),e(323," e/ou "),n(324,"code"),e(325,"p-error-limit"),t(),e(326,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),n(327,"blockquote")(328,"p"),e(329,"Quando utilizado com "),n(330,"code"),e(331,"p-helper"),t(),e(332,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),t()()()(),n(333,"tr",15)(334,"td",16)(335,"div",24)(336,"span",25),e(337," p-auto-focus"),o(338,"br"),t()()(),n(339,"td",20)(340,"code",27),e(341,"boolean"),t()(),n(342,"td",22)(343,"p")(344,"code"),e(345,"false"),t()()(),n(346,"td",23)(347,"em")(348,"strong"),e(349,"(opcional)"),t()(),n(350,"p"),e(351,"Aplica foco no elemento ao ser iniciado."),t(),n(352,"blockquote")(353,"p"),e(354,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(355,"tr",15)(356,"td",16)(357,"div",17)(358,"span",18),e(359," (p-blur)"),o(360,"br"),t()()(),n(361,"td",20)(362,"code",21),e(363,"EventEmitter"),t()(),n(364,"td",22),e(365,"-"),t(),n(366,"td",23)(367,"em")(368,"strong"),e(369,"(opcional)"),t()(),n(370,"p"),e(371,"Evento disparado ao sair do campo."),t()()(),n(372,"tr",15)(373,"td",16)(374,"div",17)(375,"span",18),e(376," (p-change)"),o(377,"br"),t()()(),n(378,"td",20)(379,"code",21),e(380,"EventEmitter"),t()(),n(381,"td",22),e(382,"-"),t(),n(383,"td",23)(384,"em")(385,"strong"),e(386,"(opcional)"),t()(),n(387,"p"),e(388,"Evento disparado ao alterar valor e deixar o campo."),t()()(),n(389,"tr",15)(390,"td",16)(391,"div",17)(392,"span",18),e(393," (p-change-model)"),o(394,"br"),t()()(),n(395,"td",20)(396,"code",21),e(397,"EventEmitter"),t()(),n(398,"td",22),e(399,"-"),t(),n(400,"td",23)(401,"em")(402,"strong"),e(403,"(opcional)"),t()(),n(404,"p"),e(405,"Evento disparado ao alterar valor do model."),t()()(),n(406,"tr",15)(407,"td",16)(408,"div",24)(409,"span",25),e(410,"p-clean"),o(411,"br"),t()()(),n(412,"td",20)(413,"code",27),e(414,"boolean"),t()(),n(415,"td",22),e(416,"-"),t(),n(417,"td",23)(418,"em")(419,"strong"),e(420,"(opcional)"),t()(),n(421,"p"),e(422,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t()()(),n(423,"tr",15)(424,"td",16)(425,"div",24)(426,"span",25),e(427,"p-disabled"),o(428,"br"),t()()(),n(429,"td",20)(430,"code",27),e(431,"boolean"),t()(),n(432,"td",22)(433,"p")(434,"code"),e(435,"false"),t()()(),n(436,"td",23)(437,"em")(438,"strong"),e(439,"(opcional)"),t()(),n(440,"p"),e(441,"Se verdadeiro, desabilita o campo."),t()()(),n(442,"tr",15)(443,"td",16)(444,"div",24)(445,"span",25),e(446," p-emit-all-changes"),o(447,"br"),t()()(),n(448,"td",20)(449,"code",27),e(450,"boolean"),t()(),n(451,"td",22)(452,"p")(453,"code"),e(454,"false"),t()()(),n(455,"td",23)(456,"em")(457,"strong"),e(458,"(opcional)"),t()(),n(459,"p"),e(460,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),t()()(),n(461,"tr",15)(462,"td",16)(463,"div",17)(464,"span",18),e(465," (p-enter)"),o(466,"br"),t()()(),n(467,"td",20)(468,"code",21),e(469,"EventEmitter"),t()(),n(470,"td",22),e(471,"-"),t(),n(472,"td",23)(473,"em")(474,"strong"),e(475,"(opcional)"),t()(),n(476,"p"),e(477,"Evento disparado ao entrar do campo."),t()()(),n(478,"tr",15)(479,"td",16)(480,"div",24)(481,"span",25),e(482," p-error-async-properties"),o(483,"br"),t()()(),n(484,"td",20)(485,"code",28),e(486,"ErrorAsyncProperties"),t()(),n(487,"td",22),e(488,"-"),t(),n(489,"td",23)(490,"em")(491,"strong"),e(492,"(opcional)"),t()(),n(493,"p"),e(494,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),n(495,"code"),e(496,"Reactive Forms"),t(),e(497,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),n(498,"code"),e(499,"asyncValidators"),t(),e(500,"."),t()()(),n(501,"tr",15)(502,"td",16)(503,"div",24)(504,"span",25),e(505," p-error-limit"),o(506,"br"),t()()(),n(507,"td",20)(508,"code",27),e(509,"boolean"),t()(),n(510,"td",22)(511,"p")(512,"code"),e(513,"false"),t()()(),n(514,"td",23)(515,"em")(516,"strong"),e(517,"(opcional)"),t()(),n(518,"p"),e(519,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(520,"blockquote")(521,"p"),e(522,"Caso essa propriedade seja definida como "),n(523,"code"),e(524,"true"),t(),e(525,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),n(526,"tr",15)(527,"td",16)(528,"div",24)(529,"span",25),e(530," p-error-pattern"),o(531,"br"),t()()(),n(532,"td",20)(533,"code",26),e(534,"string"),t()(),n(535,"td",22),e(536,"-"),t(),n(537,"td",23)(538,"em")(539,"strong"),e(540,"(opcional)"),t()(),n(541,"p"),e(542,"Mensagem que ser\xE1 apresentada quando o "),n(543,"code"),e(544,"pattern"),t(),e(545," ou a m\xE1scara n\xE3o for satisfeita."),t(),n(546,"blockquote")(547,"p"),e(548,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),n(549,"code"),e(550,"p-required-field-error-message"),t(),e(551," em conjunto."),t()()()(),n(552,"tr",15)(553,"td",16)(554,"div",24)(555,"span",25),e(556," p-help"),o(557,"br"),t()()(),n(558,"td",20)(559,"code",26),e(560,"string"),t()(),n(561,"td",22),e(562,"-"),t(),n(563,"td",23)(564,"em")(565,"strong"),e(566,"(opcional)"),t()(),n(567,"p"),e(568,"Texto de apoio do campo."),t()()(),n(569,"tr",15)(570,"td",16)(571,"div",24)(572,"span",25),e(573," p-hide-password-peek"),o(574,"br"),t()()(),n(575,"td",20)(576,"code",27),e(577,"boolean"),t()(),n(578,"td",22)(579,"p")(580,"code"),e(581,"false"),t()()(),n(582,"td",23)(583,"em")(584,"strong"),e(585,"(opcional)"),t()(),n(586,"p"),e(587,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada."),t()()(),n(588,"tr",15)(589,"td",16)(590,"div",24)(591,"span",25),e(592," p-icon"),o(593,"br"),t()()(),n(594,"td",20)(595,"code",26),e(596,"string "),t(),n(597,"code",29),e(598," TemplateRef<void>"),t()(),n(599,"td",22),e(600,"-"),t(),n(601,"td",23)(602,"em")(603,"strong"),e(604,"(opcional)"),t()(),n(605,"p"),e(606,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),n(607,"p"),e(608,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(609,"a",30),e(610,"Biblioteca de \xEDcones"),t(),e(611,". conforme exemplo abaixo:"),t(),n(612,"pre")(613,"code"),e(614,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),t()(),n(615,"p"),e(616,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),n(617,"em"),e(618,"Font Awesome"),t(),e(619,", da seguinte forma:"),t(),n(620,"pre")(621,"code"),e(622,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),t()(),n(623,"p"),e(624,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(625,"code"),e(626,"TemplateRef"),t(),e(627,", conforme exemplo abaixo:"),t(),n(628,"pre")(629,"code"),e(630,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),t()(),n(631,"blockquote")(632,"p"),e(633,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),n(634,"code"),e(635,"font-size: inherit"),t(),e(636," caso o \xEDcone utilizado n\xE3o aplique-o."),t()()()(),n(637,"tr",15)(638,"td",16)(639,"div",17)(640,"span",18),e(641," (p-keydown)"),o(642,"br"),t()()(),n(643,"td",20)(644,"code",21),e(645,"EventEmitter"),t()(),n(646,"td",22),e(647,"-"),t(),n(648,"td",23)(649,"em")(650,"strong"),e(651,"(opcional)"),t()(),n(652,"p"),e(653,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(654,"code"),e(655,"KeyboardEvent"),t(),e(656," com informa\xE7\xF5es sobre a tecla."),t()()(),n(657,"tr",15)(658,"td",16)(659,"div",24)(660,"span",25),e(661," p-label"),o(662,"br"),t()()(),n(663,"td",20)(664,"code",26),e(665,"string"),t()(),n(666,"td",22),e(667,"-"),t(),n(668,"td",23)(669,"em")(670,"strong"),e(671,"(opcional)"),t()(),n(672,"p"),e(673,"R\xF3tulo do campo."),t()()(),n(674,"tr",15)(675,"td",16)(676,"div",24)(677,"span",25),e(678," p-label-text-wrap"),o(679,"br"),t()()(),n(680,"td",20)(681,"code",27),e(682,"boolean"),t()(),n(683,"td",22)(684,"p")(685,"code"),e(686,"false"),t()()(),n(687,"td",23)(688,"em")(689,"strong"),e(690,"(opcional)"),t()(),n(691,"p"),e(692,"Habilita a quebra autom\xE1tica do texto da propriedade "),n(693,"code"),e(694,"p-label"),t(),e(695,". Quando "),n(696,"code"),e(697,"p-label-text-wrap"),t(),e(698,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),n(699,"tr",15)(700,"td",16)(701,"div",24)(702,"span",25),e(703,"p-mask"),o(704,"br"),t()()(),n(705,"td",20)(706,"code",26),e(707,"string"),t()(),n(708,"td",22),e(709,"-"),t(),n(710,"td",23)(711,"em")(712,"strong"),e(713,"(opcional)"),t()(),n(714,"p"),e(715,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),t()()(),n(716,"tr",15)(717,"td",16)(718,"div",24)(719,"span",25),e(720,"p-mask-format-model"),o(721,"br"),t()()(),n(722,"td",20)(723,"code",27),e(724,"boolean"),t()(),n(725,"td",22)(726,"p")(727,"code"),e(728,"false"),t()()(),n(729,"td",23)(730,"em")(731,"strong"),e(732,"(opcional)"),t()(),n(733,"p"),e(734,"Indica se o "),n(735,"code"),e(736,"model"),t(),e(737," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),t()()(),n(738,"tr",15)(739,"td",16)(740,"div",24)(741,"span",25),e(742," p-mask-no-length-validation"),o(743,"br"),t()()(),n(744,"td",20)(745,"code",27),e(746,"boolean"),t()(),n(747,"td",22)(748,"p")(749,"code"),e(750,"false"),t()()(),n(751,"td",23)(752,"p"),e(753,"Define se os caracteres especiais da m\xE1scara devem ser ignorados ao validar os comprimentos m\xEDnimo ("),n(754,"code"),e(755,"minLength"),t(),e(756,") e m\xE1ximo ("),n(757,"code"),e(758,"maxLength"),t(),e(759,") do campo."),t(),n(760,"ul")(761,"li"),e(762,"Quando "),n(763,"code"),e(764,"true"),t(),e(765,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),t(),n(766,"li"),e(767,"Quando "),n(768,"code"),e(769,"false"),t(),e(770,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),t()(),n(771,"blockquote")(772,"p"),e(773,"Ser\xE1 ignorado essa propriedade , caso esteja utilizando junto com a propriedade "),n(774,"code"),e(775,"p-mask-format-model"),t(),e(776,"."),t()(),n(777,"p"),e(778,"Exemplo:"),t(),n(779,"pre")(780,"code"),e(781,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),t()(),n(782,"ul")(783,"li"),e(784,"Entrada: "),n(785,"code"),e(786,"123-456"),t(),e(787," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),n(788,"code"),e(789,"-"),t(),e(790,"."),t()()()(),n(791,"tr",15)(792,"td",16)(793,"div",24)(794,"span",25),e(795," p-maxlength"),o(796,"br"),t()()(),n(797,"td",20)(798,"code",31),e(799,"number"),t()(),n(800,"td",22),e(801,"-"),t(),n(802,"td",23)(803,"em")(804,"strong"),e(805,"(opcional)"),t()(),n(806,"p"),e(807,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),t()()(),n(808,"tr",15)(809,"td",16)(810,"div",24)(811,"span",25),e(812," p-minlength"),o(813,"br"),t()()(),n(814,"td",20)(815,"code",31),e(816,"number"),t()(),n(817,"td",22),e(818,"-"),t(),n(819,"td",23)(820,"em")(821,"strong"),e(822,"(opcional)"),t()(),n(823,"p"),e(824,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),t()()(),n(825,"tr",15)(826,"td",16)(827,"div",24)(828,"span",25),e(829," name"),o(830,"br"),t()()(),n(831,"td",20)(832,"code",26),e(833,"string"),t()(),n(834,"td",22),e(835,"-"),t(),n(836,"td",23)(837,"p"),e(838,"Nome e identificador do campo."),t()()(),n(839,"tr",15)(840,"td",16)(841,"div",24)(842,"span",25),e(843," p-no-autocomplete"),o(844,"br"),t()()(),n(845,"td",20)(846,"code",27),e(847,"boolean"),t()(),n(848,"td",22)(849,"p")(850,"code"),e(851,"false"),t()()(),n(852,"td",23)(853,"em")(854,"strong"),e(855,"(opcional)"),t()(),n(856,"p"),e(857,"Define a propriedade nativa "),n(858,"code"),e(859,"autocomplete"),t(),e(860," do campo como "),n(861,"code"),e(862,"off"),t(),e(863,"."),t(),n(864,"blockquote")(865,"p"),e(866,"No componente "),n(867,"code"),e(868,"po-password"),t(),e(869," ser\xE1 definido como "),n(870,"code"),e(871,"new-password"),t(),e(872,"."),t()(),n(873,"p"),e(874,"Nos componentes "),n(875,"code"),e(876,"po-password"),t(),e(877," e "),n(878,"code"),e(879,"po-login"),t(),e(880," o valor padr\xE3o ser\xE1 "),n(881,"code"),e(882,"true"),t(),e(883,"."),t()()(),n(884,"tr",15)(885,"td",16)(886,"div",24)(887,"span",25),e(888," p-optional"),o(889,"br"),t()()(),n(890,"td",20)(891,"code",27),e(892,"boolean"),t()(),n(893,"td",22)(894,"p")(895,"code"),e(896,"false"),t()()(),n(897,"td",23)(898,"em")(899,"strong"),e(900,"(opcional)"),t()(),n(901,"p"),e(902,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(903,"blockquote")(904,"p"),e(905,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(906,"ul")(907,"li"),e(908,"O campo conter "),n(909,"code"),e(910,"p-required"),t(),e(911,";"),t(),n(912,"li"),e(913,"N\xE3o possuir "),n(914,"code"),e(915,"p-help"),t(),e(916," e/ou "),n(917,"code"),e(918,"p-label"),t(),e(919,"."),t()()()(),n(920,"tr",15)(921,"td",16)(922,"div",24)(923,"span",25),e(924,"p-pattern"),o(925,"br"),t()()(),n(926,"td",20)(927,"code",26),e(928,"string"),t()(),n(929,"td",22),e(930,"-"),t(),n(931,"td",23)(932,"em")(933,"strong"),e(934,"(opcional)"),t()(),n(935,"p"),e(936,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),n(937,"code"),e(938,"(p-mask)"),t(),e(939,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),t()()(),n(940,"tr",15)(941,"td",16)(942,"div",24)(943,"span",25),e(944," p-placeholder"),o(945,"br"),t()()(),n(946,"td",20)(947,"code",26),e(948,"string"),t()(),n(949,"td",22)(950,"p"),e(951,"''"),t()(),n(952,"td",23)(953,"em")(954,"strong"),e(955,"(opcional)"),t()(),n(956,"p"),e(957,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(958,"tr",15)(959,"td",16)(960,"div",24)(961,"span",25),e(962," p-helper"),o(963,"br"),t()()(),n(964,"td",20)(965,"code",32),e(966,"PoHelperOptions "),t(),n(967,"code",26),e(968," string"),t()(),n(969,"td",22),e(970,"-"),t(),n(971,"td",23)(972,"em")(973,"strong"),e(974,"(opcional)"),t()(),n(975,"p"),e(976,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),n(977,"code"),e(978,"p-label"),t(),e(979," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),n(980,"code"),e(981,"p-label"),t(),e(982,"."),t(),n(983,"blockquote")(984,"p"),e(985,"Para mais informa\xE7\xF5es acesse: "),n(986,"a",33),e(987,"https://po-ui.io/documentation/po-helper"),t(),e(988,"."),t()(),n(989,"blockquote")(990,"p"),e(991,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),n(992,"code"),e(993,"p-additional-help-tooltip"),t(),e(994," e "),n(995,"code"),e(996,"p-additional-help"),t(),e(997,") ser\xE1 ignorado."),t()()()(),n(998,"tr",15)(999,"td",16)(1e3,"div",24)(1001,"span",25),e(1002,"p-readonly"),o(1003,"br"),t()()(),n(1004,"td",20)(1005,"code",27),e(1006,"boolean"),t()(),n(1007,"td",22),e(1008,"-"),t(),n(1009,"td",23)(1010,"em")(1011,"strong"),e(1012,"(opcional)"),t()(),n(1013,"p"),e(1014,"Indica que o campo ser\xE1 somente leitura."),t()()(),n(1015,"tr",15)(1016,"td",16)(1017,"div",24)(1018,"span",25),e(1019,"p-required"),o(1020,"br"),t()()(),n(1021,"td",20)(1022,"code",27),e(1023,"boolean"),t()(),n(1024,"td",22)(1025,"p")(1026,"code"),e(1027,"false"),t()()(),n(1028,"td",23)(1029,"em")(1030,"strong"),e(1031,"(opcional)"),t()(),n(1032,"p"),e(1033,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),n(1034,"blockquote")(1035,"p"),e(1036,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),n(1037,"code"),e(1038,"(p-disabled)"),t(),e(1039,"."),t()()()(),n(1040,"tr",15)(1041,"td",16)(1042,"div",24)(1043,"span",25),e(1044," p-required-field-error-message"),o(1045,"br"),t()()(),n(1046,"td",20)(1047,"code",27),e(1048,"boolean"),t()(),n(1049,"td",22)(1050,"p")(1051,"code"),e(1052,"false"),t()()(),n(1053,"td",23)(1054,"em")(1055,"strong"),e(1056,"(opcional)"),t()(),n(1057,"p"),e(1058,"Exibe a mensagem setada na propriedade "),n(1059,"code"),e(1060,"p-error-pattern"),t(),e(1061," se o campo estiver vazio e for requerido."),t(),n(1062,"blockquote")(1063,"p"),e(1064,"Necess\xE1rio que a propriedade "),n(1065,"code"),e(1066,"p-required"),t(),e(1067," esteja habilitada."),t()()()(),n(1068,"tr",15)(1069,"td",16)(1070,"div",24)(1071,"span",25),e(1072," p-show-required"),o(1073,"br"),t()()(),n(1074,"td",20)(1075,"code",27),e(1076,"boolean"),t()(),n(1077,"td",22),e(1078,"-"),t(),n(1079,"td",23)(1080,"p"),e(1081,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(1082,"blockquote")(1083,"p"),e(1084,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(1085,"ul")(1086,"li"),e(1087,"N\xE3o possuir "),n(1088,"code"),e(1089,"p-help"),t(),e(1090," e/ou "),n(1091,"code"),e(1092,"p-label"),t(),e(1093,"."),t()()()(),n(1094,"tr",15)(1095,"td",16)(1096,"div",24)(1097,"span",25),e(1098," p-size"),o(1099,"br"),t()()(),n(1100,"td",20)(1101,"code",26),e(1102,"string"),t()(),n(1103,"td",22)(1104,"p")(1105,"code"),e(1106,"medium"),t()()(),n(1107,"td",23)(1108,"em")(1109,"strong"),e(1110,"(opcional)"),t()(),n(1111,"p"),e(1112,"Define o tamanho do componente:"),t(),n(1113,"ul")(1114,"li")(1115,"code"),e(1116,"small"),t(),e(1117,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(1118,"li")(1119,"code"),e(1120,"medium"),t(),e(1121,": altura do input como 44px."),t()(),n(1122,"blockquote")(1123,"p"),e(1124,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(1125,"code"),e(1126,"medium"),t(),e(1127,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(1128,"a",34),e(1129,"po-theme"),t(),e(1130,"."),t()()()(),n(1131,"tr",15)(1132,"td",16)(1133,"div",24)(1134,"span",25),e(1135," p-upper-case"),o(1136,"br"),t()()(),n(1137,"td",20)(1138,"code",27),e(1139,"boolean"),t()(),n(1140,"td",22),e(1141,"-"),t(),n(1142,"td",23)(1143,"p"),e(1144,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),t()()()(),n(1145,"h3",11),e(1146,"M\xE9todos"),t(),n(1147,"table",35)(1148,"tr",15)(1149,"th",36)(1150,"div",24)(1151,"h4")(1152,"span",25),e(1153," showAdditionalHelp "),t()()()()(),n(1154,"tr",23)(1155,"td",23)(1156,"p"),e(1157,"M\xE9todo que exibe "),n(1158,"code"),e(1159,"p-helper"),t(),e(1160," ou executa a a\xE7\xE3o definida em "),n(1161,"code"),e(1162,"p-helper{eventOnClick}"),t(),e(1163," ou em "),n(1164,"code"),e(1165,"p-additionalHelp"),t(),e(1166,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),n(1167,"code"),e(1168,"p-keydown"),t(),e(1169,"."),t(),n(1170,"blockquote")(1171,"p"),e(1172,"Exibe ou oculta o conte\xFAdo do componente "),n(1173,"code"),e(1174,"po-helper"),t(),e(1175," quando o componente estiver com foco."),t()(),n(1176,"pre")(1177,"code"),e(1178,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),t()(),n(1179,"pre")(1180,"code"),e(1181,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),o(1182,"br"),n(1183,"table",35)(1184,"tr",15)(1185,"th",36)(1186,"div",24)(1187,"h4")(1188,"span",25),e(1189," focus "),t()()()()(),n(1190,"tr",23)(1191,"td",23)(1192,"p"),e(1193,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(1194,"p"),e(1195,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(1196,"pre")(1197,"code"),e(1198,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),t()()()()(),o(1199,"br"),n(1200,"h3"),e(1201,"Interfaces"),t(),n(1202,"h4",37)(1203,"code",5),e(1204,"ErrorAsyncProperties"),t()(),n(1205,"div",2)(1206,"p"),e(1207,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),t()(),n(1208,"h4",11),e(1209,"Propriedades"),t(),n(1210,"table",12)(1211,"tr",13)(1212,"th",14),e(1213,"Nome"),t(),n(1214,"th",14),e(1215,"Tipo"),t(),n(1216,"th",14),e(1217,"Descri\xE7\xE3o"),t()(),n(1218,"tr",15)(1219,"td",16)(1220,"div",24)(1221,"span",25),e(1222," errorAsync"),o(1223,"br"),t()()(),n(1224,"td",20)(1225,"code",38),e(1226,"(value) => Observable<boolean>"),t()(),n(1227,"td",23)(1228,"p"),e(1229,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(1230,"code"),e(1231,"change"),t(),e(1232," ou "),n(1233,"code"),e(1234,"change-model"),t(),e(1235,", dependendo do valor da propriedade "),n(1236,"code"),e(1237,"triggerMode"),t(),e(1238,"."),t()()(),n(1239,"tr",15)(1240,"td",16)(1241,"div",24)(1242,"span",25),e(1243," triggerMode"),o(1244,"br"),t()()(),n(1245,"td",20)(1246,"code",39),e(1247,"'change' "),t(),n(1248,"code",40),e(1249," 'changeModel'"),t()(),n(1250,"td",23)(1251,"em")(1252,"strong"),e(1253,"(opcional)"),t()(),n(1254,"p"),e(1255,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),n(1256,"code"),e(1257,"change"),t(),e(1258," ou "),n(1259,"code"),e(1260,"change-model"),t(),e(1261,"."),t()()()()())},dependencies:[P],encapsulation:2})}return a})();var se=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(s,l){this.route=s,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let l=s.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(s){this.router.navigate([],{queryParams:{view:s},queryParamsHandling:"merge"}),this.activeTab=s}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||a)(W(Q),W(K))};static \u0275cmp=S({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Password",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),x("p-click",function(){return i.changeTab("doc")}),o(3,"sample-po-password-doc"),t(),n(4,"po-tab",3),x("p-click",function(){return i.changeTab("web")}),o(5,"sample-po-password-basic-view")(6,"sample-po-password-labs-view")(7,"sample-po-password-reset-view"),t()()()),l&2&&(u("p-actions",i.actions),d(2),u("p-active",i.activeTab==="doc"),d(2),u("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[ee,f,v,oe,re,de,pe],encapsulation:2})}return a})();var Pe=[{path:"",component:se}],me=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=D({type:a});static \u0275inj=T({imports:[B.forChild(Pe),B]})}return a})();var Ze=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=D({type:a});static \u0275inj=T({imports:[te,me]})}return a})();export{Ze as DocPoPasswordModule};
