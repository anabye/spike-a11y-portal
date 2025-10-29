import{o as y,p as oe}from"./chunk-ZC2HZG7B.js";import{Ab as C,Fa as $,Ga as L,Ma as ee,Na as te,O as J,Q as X,U as V,Xa as ne,a as Z,nb as ie,sa as Y,v as F,zb as v}from"./chunk-TPH26USO.js";import{$a as I,$c as W,Aa as E,Da as w,Fb as M,Gc as D,Hc as j,Ic as G,Jc as z,Kc as Q,La as n,Ma as t,N as T,Na as o,Q as O,Ra as N,Sa as h,U as c,V as u,Xc as U,Zc as K,_a as R,ab as H,cb as e,eb as P,gb as S,hb as x,ib as b,ja as p,ka as A,ob as _,qa as g,ra as k}from"./chunk-CBLD3XJL.js";var ae=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-login-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","login","p-label","PO Login"]],template:function(l,i){l&1&&o(0,"po-login",0)},dependencies:[L],encapsulation:2})}return a})();var Se=a=>({"docs-sample-code-tabs":a}),re=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-login-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Login Basic"),t(),n(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-login-basic/sample-po-login-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-login name="login" p-label="PO Login"> </po-login>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-login-basic/sample-po-login-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-login-basic',
  templateUrl: './sample-po-login-basic.component.html',
  standalone: false
})
export class SamplePoLoginBasicComponent {}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-login-basic"),t(),o(23,"hr")),l&2&&(p(5),w("po-icon "+i.sampleCodeButtonIcon),p(),P(" ",i.sampleCodeButtonLabel,""),p(),E("ngClass",_(4,Se,i.hideSampleCodeTabs)))},dependencies:[M,y,v,C,ae],encapsulation:2})}return a})();var pe=(()=>{class a{helperText;errorPattern;event;help;label;login;maxlength;minlength;pattern;placeholder;properties;size;propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(d){this.event=d}restore(){this.helperText="",this.errorPattern="",this.event="",this.label=void 0,this.login="",this.help=void 0,this.maxlength=void 0,this.minlength=void 0,this.pattern="",this.placeholder="",this.properties=[],this.size="medium"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-login-labs"]],standalone:!1,decls:20,vars:34,consts:[["f","ngForm"],["name","login",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-helper","p-clean","p-disabled","p-error-pattern","p-help","p-label","p-maxlength","p-minlength","p-no-autocomplete","p-optional","p-pattern","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-size","p-label-text-wrap","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","pattern","p-clean","","p-help","Ex.: '[a-zA]{5}[Z0-9]{3}'","p-label","Pattern (Regex)",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-help","Ex.: Required field","p-label","Error pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,i){if(l&1){let m=N();n(0,"po-login",1),b("ngModelChange",function(r){return c(m),x(i.login,r)||(i.login=r),u(r)}),h("p-blur",function(){return c(m),u(i.changeEvent("p-blur"))})("p-change",function(){return c(m),u(i.changeEvent("p-change"))})("p-change-model",function(){return c(m),u(i.changeEvent("p-change-model"))})("p-enter",function(){return c(m),u(i.changeEvent("p-enter"))})("p-keydown",function(){return c(m),u(i.changeEvent("p-keydown"))}),t(),o(1,"po-divider"),n(2,"div",2),o(3,"po-info",3)(4,"po-info",4),t(),o(5,"po-divider"),n(6,"form",null,0)(8,"po-input",5),b("ngModelChange",function(r){return c(m),x(i.label,r)||(i.label=r),u(r)}),t(),n(9,"po-input",6),b("ngModelChange",function(r){return c(m),x(i.help,r)||(i.help=r),u(r)}),t(),n(10,"po-input",7),b("ngModelChange",function(r){return c(m),x(i.placeholder,r)||(i.placeholder=r),u(r)}),t(),n(11,"po-input",8),b("ngModelChange",function(r){return c(m),x(i.helperText,r)||(i.helperText=r),u(r)}),t(),n(12,"po-input",9),b("ngModelChange",function(r){return c(m),x(i.pattern,r)||(i.pattern=r),u(r)}),t(),n(13,"po-input",10),b("ngModelChange",function(r){return c(m),x(i.errorPattern,r)||(i.errorPattern=r),u(r)}),t(),n(14,"po-number",11),b("ngModelChange",function(r){return c(m),x(i.minlength,r)||(i.minlength=r),u(r)}),t(),n(15,"po-number",12),b("ngModelChange",function(r){return c(m),x(i.maxlength,r)||(i.maxlength=r),u(r)}),t(),n(16,"po-checkbox-group",13),b("ngModelChange",function(r){return c(m),x(i.properties,r)||(i.properties=r),u(r)}),t(),n(17,"po-radio-group",14),b("ngModelChange",function(r){return c(m),x(i.size,r)||(i.size=r),u(r)}),t(),n(18,"div",2)(19,"po-button",15),h("p-click",function(){return c(m),u(i.restore())}),t()()()}l&2&&(S("ngModel",i.login),E("p-helper",i.helperText)("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-error-pattern",i.errorPattern)("p-help",i.help)("p-label",i.label)("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-pattern",i.pattern)("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit")),p(3),E("p-value",i.login),p(),E("p-value",i.event),p(4),S("ngModel",i.label),p(),S("ngModel",i.help),p(),S("ngModel",i.placeholder),p(),S("ngModel",i.helperText),p(),S("ngModel",i.pattern),p(),S("ngModel",i.errorPattern),p(),S("ngModel",i.minlength),p(),S("ngModel",i.maxlength),p(),S("ngModel",i.properties),E("p-options",i.propertiesOptions),p(),S("ngModel",i.size),E("p-options",i.sizeOptions))},dependencies:[Q,D,j,z,G,F,Z,J,X,$,L,ee,ne],encapsulation:2})}return a})();var fe=a=>({"docs-sample-code-tabs":a}),me=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-login-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Login Labs"),t(),n(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-login-labs/sample-po-login-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-login
  name="login"
  [(ngModel)]="login"
  [p-helper]="helperText"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-error-pattern]="errorPattern"
  [p-help]="help"
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
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-enter)="changeEvent('p-enter')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
>
</po-login>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="login"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6 po-lg-4" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6 po-lg-4" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6 po-lg-4" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder">
  </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input
    class="po-md-6"
    name="pattern"
    [(ngModel)]="pattern"
    p-clean
    p-help="Ex.: '[a-zA]{5}[Z0-9]{3}'"
    p-label="Pattern (Regex)"
  >
  </po-input>

  <po-input
    class="po-md-6"
    name="errorPattern"
    [(ngModel)]="errorPattern"
    p-clean
    p-help="Ex.: Required field"
    p-label="Error pattern"
  >
  </po-input>

  <po-number class="po-md-6 po-lg-3" name="minlength" [(ngModel)]="minlength" p-clean p-label="Min length"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="maxlength" [(ngModel)]="maxlength" p-clean p-label="Max length"> </po-number>

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
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-login-labs/sample-po-login-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-login-labs',
  templateUrl: './sample-po-login-labs.component.html',
  standalone: false
})
export class SamplePoLoginLabsComponent implements OnInit {
  helperText: string;
  errorPattern: string;
  event: string;
  help: string;
  label: string;
  login: string;
  maxlength: number;
  minlength: number;
  pattern: string;
  placeholder: string;
  properties: Array<string>;
  size: string;

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

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.helperText = '';
    this.errorPattern = '';
    this.event = '';

    this.label = undefined;
    this.login = '';

    this.help = undefined;

    this.maxlength = undefined;
    this.minlength = undefined;

    this.pattern = '';
    this.placeholder = '';
    this.properties = [];
    this.size = 'medium';
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-login-labs"),t(),o(23,"hr")),l&2&&(p(5),w("po-icon "+i.sampleCodeButtonIcon),p(),P(" ",i.sampleCodeButtonLabel,""),p(),E("ngClass",_(4,fe,i.hideSampleCodeTabs)))},dependencies:[M,y,v,C,pe],encapsulation:2})}return a})();var de=(()=>{class a{poNotification=O(Y);poModal;userLogin;userPassword;primaryAction={label:"Confirm",action:()=>{this.confirmAction()}};openModal(){this.poModal.open()}cleanForm(){this.userLogin="",this.userPassword=""}confirmAction(){this.userLogin&&this.userPassword&&(this.poNotification.success(`Discount successfully applied to user ${this.userLogin}!`),this.poModal.close(),this.cleanForm())}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-login-confirm"]],viewQuery:function(l,i){if(l&1&&R(V,7),l&2){let m;I(m=H())&&(i.poModal=m.first)}},standalone:!1,decls:7,vars:3,consts:[[1,"po-text-center"],[1,"po-font-subtitle"],["p-label","Confirm Identity",3,"p-click"],["p-hide-close","true","p-size","auto","p-title","Confirm your identity",3,"p-primary-action"],["name","userLogin","p-clean","","p-label","User","p-maxlength","40","p-placeholder","domain\\user","p-required","",3,"ngModelChange","ngModel"],["name","userPassword","p-clean","","p-label","Password","p-placeholder","Enter your password","p-required","",3,"ngModelChange","ngModel"]],template:function(l,i){l&1&&(n(0,"div",0)(1,"div",1),e(2," To gain a 25% discount on your purchases, confirm your identity with your username and password! "),t(),n(3,"po-button",2),h("p-click",function(){return i.openModal()}),t()(),n(4,"po-modal",3)(5,"po-login",4),b("ngModelChange",function(s){return x(i.userLogin,s)||(i.userLogin=s),s}),t(),n(6,"po-password",5),b("ngModelChange",function(s){return x(i.userPassword,s)||(i.userPassword=s),s}),t()()),l&2&&(p(4),E("p-primary-action",i.primaryAction),p(),S("ngModel",i.userLogin),p(),S("ngModel",i.userPassword))},dependencies:[D,z,F,L,te,V],encapsulation:2})}return a})();var ye=a=>({"docs-sample-code-tabs":a}),se=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-login-confirm-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Login - Confirm Identity"),t(),n(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-login-confirm/sample-po-login-confirm.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-text-center">
  <div class="po-font-subtitle">
    To gain a 25% discount on your purchases, confirm your identity with your username and password!
  </div>

  <po-button p-label="Confirm Identity" (p-click)="openModal()"> </po-button>
</div>

<po-modal p-hide-close="true" p-size="auto" p-title="Confirm your identity" [p-primary-action]="primaryAction">
  <po-login
    name="userLogin"
    [(ngModel)]="userLogin"
    p-clean
    p-label="User"
    p-maxlength="40"
    p-placeholder="domain\\user"
    p-required
  >
  </po-login>

  <po-password
    name="userPassword"
    [(ngModel)]="userPassword"
    p-clean
    p-label="Password"
    p-placeholder="Enter your password"
    p-required
  >
  </po-password>
</po-modal>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-login-confirm/sample-po-login-confirm.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, ViewChild, inject } from '@angular/core';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-login-confirm',
  templateUrl: './sample-po-login-confirm.component.html',
  standalone: false
})
export class SamplePoLoginConfirmComponent {
  private poNotification = inject(PoNotificationService);

  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  userLogin: string;
  userPassword: string;

  primaryAction: PoModalAction = {
    label: 'Confirm',
    action: () => {
      this.confirmAction();
    }
  };

  openModal() {
    this.poModal.open();
  }

  private cleanForm() {
    this.userLogin = '';
    this.userPassword = '';
  }

  private confirmAction() {
    if (this.userLogin && this.userPassword) {
      this.poNotification.success(\`Discount successfully applied to user \${this.userLogin}!\`);

      this.poModal.close();
      this.cleanForm();
    }
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-login-confirm"),t(),o(23,"hr")),l&2&&(p(5),w("po-icon "+i.sampleCodeButtonIcon),p(),P(" ",i.sampleCodeButtonLabel,""),p(),E("ngClass",_(4,ye,i.hideSampleCodeTabs)))},dependencies:[M,y,v,C,de],encapsulation:2})}return a})();var ce=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-login-doc"]],standalone:!1,decls:1243,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(l,i){l&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoLoginComponent"),t()(),n(21,"div",2)(22,"p"),e(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),t(),n(24,"p"),e(25,"Importante:"),t(),n(26,"ul")(27,"li"),e(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),t()(),n(29,"h4"),e(30,"Tokens customiz\xE1veis"),t(),n(31,"p"),e(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),o(33,"br"),e(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),n(35,"code"),e(36,".po-input"),t()(),n(37,"blockquote")(38,"p"),e(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),n(40,"a",6),e(41,"Grid System"),t(),e(42,"."),t()(),n(43,"blockquote")(44,"p"),e(45,"Para maiores informa\xE7\xF5es, acesse o guia "),n(46,"a",7),e(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(48,"."),t()(),n(49,"table")(50,"thead")(51,"tr")(52,"th"),e(53,"Propriedade"),t(),n(54,"th"),e(55,"Descri\xE7\xE3o"),t(),n(56,"th"),e(57,"Valor Padr\xE3o"),t()()(),n(58,"tbody")(59,"tr")(60,"td")(61,"strong"),e(62,"Default Values"),t()(),o(63,"td")(64,"td"),t(),n(65,"tr")(66,"td")(67,"code"),e(68,"--font-family"),t()(),n(69,"td"),e(70,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(71,"td")(72,"code"),e(73,"var(--font-family-theme)"),t()()(),n(74,"tr")(75,"td")(76,"code"),e(77,"--font-size"),t()(),n(78,"td"),e(79,"Tamanho da fonte"),t(),n(80,"td")(81,"code"),e(82,"var(--font-size-default)"),t()()(),n(83,"tr")(84,"td")(85,"code"),e(86,"--text-color-placeholder"),t()(),n(87,"td"),e(88,"Cor do texto placeholder"),t(),n(89,"td")(90,"code"),e(91,"var(--color-neutral-light-30)"),t()()(),n(92,"tr")(93,"td")(94,"code"),e(95,"--color"),t()(),n(96,"td"),e(97,"Cor pincipal do input"),t(),n(98,"td")(99,"code"),e(100,"var(--color-neutral-dark-70)"),t()()(),n(101,"tr")(102,"td")(103,"code"),e(104,"--background"),t()(),n(105,"td"),e(106,"Cor de background"),t(),n(107,"td")(108,"code"),e(109,"var(--color-neutral-light-05)"),t()()(),n(110,"tr")(111,"td")(112,"code"),e(113,"--padding"),t()(),n(114,"td"),e(115,"Preenchimento"),t(),n(116,"td")(117,"code"),e(118,"0 0.5rem"),t()()(),n(119,"tr")(120,"td")(121,"code"),e(122,"--text-color"),t()(),n(123,"td"),e(124,"Cor do texto"),t(),n(125,"td")(126,"code"),e(127,"var(--color-neutral-dark-90)"),t()()(),n(128,"tr")(129,"td")(130,"strong"),e(131,"Hover"),t()(),o(132,"td")(133,"td"),t(),n(134,"tr")(135,"td")(136,"code"),e(137,"--color-hover"),t()(),n(138,"td"),e(139,"Cor principal no estado hover"),t(),n(140,"td")(141,"code"),e(142,"var(--color-brand-01-dark)"),t()()(),n(143,"tr")(144,"td")(145,"code"),e(146,"--background-hover"),t()(),n(147,"td"),e(148,"Cor de background no estado hover"),t(),n(149,"td")(150,"code"),e(151,"var(--color-brand-01-lightest)"),t()()(),n(152,"tr")(153,"td")(154,"strong"),e(155,"Focused"),t()(),o(156,"td")(157,"td"),t(),n(158,"tr")(159,"td")(160,"code"),e(161,"--color-focused"),t()(),n(162,"td"),e(163,"Cor principal no estado de focus"),t(),n(164,"td")(165,"code"),e(166,"var(--color-action-default)"),t()()(),n(167,"tr")(168,"td")(169,"code"),e(170,"--outline-color-focused"),t()(),n(171,"td"),e(172,"Cor do outline do estado de focus"),t(),n(173,"td")(174,"code"),e(175,"var(--color-action-focus)"),t()()(),n(176,"tr")(177,"td")(178,"strong"),e(179,"Disabled"),t()(),o(180,"td")(181,"td"),t(),n(182,"tr")(183,"td")(184,"code"),e(185,"--color-disabled"),t()(),n(186,"td"),e(187,"Cor principal no estado disabled"),t(),n(188,"td")(189,"code"),e(190,"var(--color-neutral-light-30)"),t()()(),n(191,"tr")(192,"td")(193,"code"),e(194,"--background-disabled"),t()(),n(195,"td"),e(196,"Cor de background no estado disabled"),t(),n(197,"td")(198,"code"),e(199,"var(--color-neutral-light-20)"),t()()(),n(200,"tr")(201,"td")(202,"code"),e(203,"--text-color-disabled"),t()(),n(204,"td"),e(205,"Cor do texto no estado disabled"),t(),n(206,"td")(207,"code"),e(208,"var(--color-neutral-dark-70)"),t()()()()(),n(209,"p"),o(210,"br"),e(211," O "),n(212,"code"),e(213,"po-login"),t(),e(214," \xE9 um input espec\xEDfico para login. J\xE1 possui tipo, estilo e \xEDcone predefinidos."),t()(),n(215,"div",8)(216,"h4",9),e(217,"Seletor"),t(),n(218,"pre",10),e(219,`<po-login
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
</po-login>
`),t()(),n(220,"h4",11),e(221,"Propriedades"),t(),n(222,"table",12)(223,"tr",13)(224,"th",14),e(225,"Nome"),t(),n(226,"th",14),e(227,"Tipo"),t(),n(228,"th",14),e(229,"Padr\xE3o"),t(),n(230,"th",14),e(231,"Descri\xE7\xE3o"),t()(),n(232,"tr",15)(233,"td",16)(234,"div",17)(235,"span",18),e(236," (p-additional-help)"),o(237,"br"),t()(),n(238,"div",19),e(239,"Deprecated"),t()(),n(240,"td",20)(241,"code",21),e(242,"EventEmitter"),t()(),n(243,"td",22),e(244,"-"),t(),n(245,"td",23)(246,"em")(247,"strong"),e(248,"(opcional)"),t()(),n(249,"p"),e(250,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),t(),n(251,"blockquote")(252,"p"),e(253,"Essa propriedade est\xE1 "),n(254,"strong"),e(255,"depreciada"),t(),e(256," e ser\xE1 removida na vers\xE3o "),n(257,"code"),e(258,"23.x.x"),t(),e(259,". Recomendamos utilizar a propriedade "),n(260,"code"),e(261,"p-helper"),t(),e(262," que oferece mais recursos e flexibilidade."),t()()()(),n(263,"tr",15)(264,"td",16)(265,"div",24)(266,"span",25),e(267," p-additional-help-tooltip"),o(268,"br"),t()(),n(269,"div",19),e(270,"Deprecated"),t()(),n(271,"td",20)(272,"code",26),e(273,"string"),t()(),n(274,"td",22),e(275,"-"),t(),n(276,"td",23)(277,"em")(278,"strong"),e(279,"(opcional)"),t()(),n(280,"p"),e(281,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),n(282,"code"),e(283,"po-helper"),t(),e(284,`.
`),n(285,"strong"),e(286,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(287,"blockquote")(288,"p"),e(289,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),n(290,"blockquote")(291,"p"),e(292,"Essa propriedade est\xE1 "),n(293,"strong"),e(294,"depreciada"),t(),e(295," e ser\xE1 removida na vers\xE3o "),n(296,"code"),e(297,"23.x.x"),t(),e(298,". Recomendamos utilizar a propriedade "),n(299,"code"),e(300,"p-helper"),t(),e(301," que oferece mais recursos e flexibilidade."),t()()()(),n(302,"tr",15)(303,"td",16)(304,"div",24)(305,"span",25),e(306," p-append-in-body"),o(307,"br"),t()()(),n(308,"td",20)(309,"code",27),e(310,"boolean"),t()(),n(311,"td",22)(312,"p")(313,"code"),e(314,"false"),t()()(),n(315,"td",23)(316,"em")(317,"strong"),e(318,"(opcional)"),t()(),n(319,"p"),e(320,"Define que o popover ("),n(321,"code"),e(322,"p-helper"),t(),e(323," e/ou "),n(324,"code"),e(325,"p-error-limit"),t(),e(326,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),n(327,"blockquote")(328,"p"),e(329,"Quando utilizado com "),n(330,"code"),e(331,"p-helper"),t(),e(332,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),t()()()(),n(333,"tr",15)(334,"td",16)(335,"div",24)(336,"span",25),e(337," p-auto-focus"),o(338,"br"),t()()(),n(339,"td",20)(340,"code",27),e(341,"boolean"),t()(),n(342,"td",22)(343,"p")(344,"code"),e(345,"false"),t()()(),n(346,"td",23)(347,"em")(348,"strong"),e(349,"(opcional)"),t()(),n(350,"p"),e(351,"Aplica foco no elemento ao ser iniciado."),t(),n(352,"blockquote")(353,"p"),e(354,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(355,"tr",15)(356,"td",16)(357,"div",17)(358,"span",18),e(359," (p-blur)"),o(360,"br"),t()()(),n(361,"td",20)(362,"code",21),e(363,"EventEmitter"),t()(),n(364,"td",22),e(365,"-"),t(),n(366,"td",23)(367,"em")(368,"strong"),e(369,"(opcional)"),t()(),n(370,"p"),e(371,"Evento disparado ao sair do campo."),t()()(),n(372,"tr",15)(373,"td",16)(374,"div",17)(375,"span",18),e(376," (p-change)"),o(377,"br"),t()()(),n(378,"td",20)(379,"code",21),e(380,"EventEmitter"),t()(),n(381,"td",22),e(382,"-"),t(),n(383,"td",23)(384,"em")(385,"strong"),e(386,"(opcional)"),t()(),n(387,"p"),e(388,"Evento disparado ao alterar valor e deixar o campo."),t()()(),n(389,"tr",15)(390,"td",16)(391,"div",17)(392,"span",18),e(393," (p-change-model)"),o(394,"br"),t()()(),n(395,"td",20)(396,"code",21),e(397,"EventEmitter"),t()(),n(398,"td",22),e(399,"-"),t(),n(400,"td",23)(401,"em")(402,"strong"),e(403,"(opcional)"),t()(),n(404,"p"),e(405,"Evento disparado ao alterar valor do model."),t()()(),n(406,"tr",15)(407,"td",16)(408,"div",24)(409,"span",25),e(410,"p-clean"),o(411,"br"),t()()(),n(412,"td",20)(413,"code",27),e(414,"boolean"),t()(),n(415,"td",22),e(416,"-"),t(),n(417,"td",23)(418,"em")(419,"strong"),e(420,"(opcional)"),t()(),n(421,"p"),e(422,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t()()(),n(423,"tr",15)(424,"td",16)(425,"div",24)(426,"span",25),e(427,"p-disabled"),o(428,"br"),t()()(),n(429,"td",20)(430,"code",27),e(431,"boolean"),t()(),n(432,"td",22)(433,"p")(434,"code"),e(435,"false"),t()()(),n(436,"td",23)(437,"em")(438,"strong"),e(439,"(opcional)"),t()(),n(440,"p"),e(441,"Se verdadeiro, desabilita o campo."),t()()(),n(442,"tr",15)(443,"td",16)(444,"div",24)(445,"span",25),e(446," p-emit-all-changes"),o(447,"br"),t()()(),n(448,"td",20)(449,"code",27),e(450,"boolean"),t()(),n(451,"td",22)(452,"p")(453,"code"),e(454,"false"),t()()(),n(455,"td",23)(456,"em")(457,"strong"),e(458,"(opcional)"),t()(),n(459,"p"),e(460,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),t()()(),n(461,"tr",15)(462,"td",16)(463,"div",17)(464,"span",18),e(465," (p-enter)"),o(466,"br"),t()()(),n(467,"td",20)(468,"code",21),e(469,"EventEmitter"),t()(),n(470,"td",22),e(471,"-"),t(),n(472,"td",23)(473,"em")(474,"strong"),e(475,"(opcional)"),t()(),n(476,"p"),e(477,"Evento disparado ao entrar do campo."),t()()(),n(478,"tr",15)(479,"td",16)(480,"div",24)(481,"span",25),e(482," p-error-async-properties"),o(483,"br"),t()()(),n(484,"td",20)(485,"code",28),e(486,"ErrorAsyncProperties"),t()(),n(487,"td",22),e(488,"-"),t(),n(489,"td",23)(490,"em")(491,"strong"),e(492,"(opcional)"),t()(),n(493,"p"),e(494,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),n(495,"code"),e(496,"Reactive Forms"),t(),e(497,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),n(498,"code"),e(499,"asyncValidators"),t(),e(500,"."),t()()(),n(501,"tr",15)(502,"td",16)(503,"div",24)(504,"span",25),e(505," p-error-limit"),o(506,"br"),t()()(),n(507,"td",20)(508,"code",27),e(509,"boolean"),t()(),n(510,"td",22)(511,"p")(512,"code"),e(513,"false"),t()()(),n(514,"td",23)(515,"em")(516,"strong"),e(517,"(opcional)"),t()(),n(518,"p"),e(519,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(520,"blockquote")(521,"p"),e(522,"Caso essa propriedade seja definida como "),n(523,"code"),e(524,"true"),t(),e(525,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),n(526,"tr",15)(527,"td",16)(528,"div",24)(529,"span",25),e(530," p-error-pattern"),o(531,"br"),t()()(),n(532,"td",20)(533,"code",26),e(534,"string"),t()(),n(535,"td",22),e(536,"-"),t(),n(537,"td",23)(538,"em")(539,"strong"),e(540,"(opcional)"),t()(),n(541,"p"),e(542,"Mensagem que ser\xE1 apresentada quando o "),n(543,"code"),e(544,"pattern"),t(),e(545," ou a m\xE1scara n\xE3o for satisfeita."),t(),n(546,"blockquote")(547,"p"),e(548,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),n(549,"code"),e(550,"p-required-field-error-message"),t(),e(551," em conjunto."),t()()()(),n(552,"tr",15)(553,"td",16)(554,"div",24)(555,"span",25),e(556," p-help"),o(557,"br"),t()()(),n(558,"td",20)(559,"code",26),e(560,"string"),t()(),n(561,"td",22),e(562,"-"),t(),n(563,"td",23)(564,"em")(565,"strong"),e(566,"(opcional)"),t()(),n(567,"p"),e(568,"Texto de apoio do campo."),t()()(),n(569,"tr",15)(570,"td",16)(571,"div",24)(572,"span",25),e(573," p-icon"),o(574,"br"),t()()(),n(575,"td",20)(576,"code",26),e(577,"string "),t(),n(578,"code",29),e(579," TemplateRef<void>"),t()(),n(580,"td",22),e(581,"-"),t(),n(582,"td",23)(583,"em")(584,"strong"),e(585,"(opcional)"),t()(),n(586,"p"),e(587,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),n(588,"p"),e(589,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(590,"a",30),e(591,"Biblioteca de \xEDcones"),t(),e(592,". conforme exemplo abaixo:"),t(),n(593,"pre")(594,"code"),e(595,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),t()(),n(596,"p"),e(597,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),n(598,"em"),e(599,"Font Awesome"),t(),e(600,", da seguinte forma:"),t(),n(601,"pre")(602,"code"),e(603,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),t()(),n(604,"p"),e(605,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(606,"code"),e(607,"TemplateRef"),t(),e(608,", conforme exemplo abaixo:"),t(),n(609,"pre")(610,"code"),e(611,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),t()(),n(612,"blockquote")(613,"p"),e(614,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),n(615,"code"),e(616,"font-size: inherit"),t(),e(617," caso o \xEDcone utilizado n\xE3o aplique-o."),t()()()(),n(618,"tr",15)(619,"td",16)(620,"div",17)(621,"span",18),e(622," (p-keydown)"),o(623,"br"),t()()(),n(624,"td",20)(625,"code",21),e(626,"EventEmitter"),t()(),n(627,"td",22),e(628,"-"),t(),n(629,"td",23)(630,"em")(631,"strong"),e(632,"(opcional)"),t()(),n(633,"p"),e(634,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(635,"code"),e(636,"KeyboardEvent"),t(),e(637," com informa\xE7\xF5es sobre a tecla."),t()()(),n(638,"tr",15)(639,"td",16)(640,"div",24)(641,"span",25),e(642," p-label"),o(643,"br"),t()()(),n(644,"td",20)(645,"code",26),e(646,"string"),t()(),n(647,"td",22),e(648,"-"),t(),n(649,"td",23)(650,"em")(651,"strong"),e(652,"(opcional)"),t()(),n(653,"p"),e(654,"R\xF3tulo do campo."),t()()(),n(655,"tr",15)(656,"td",16)(657,"div",24)(658,"span",25),e(659," p-label-text-wrap"),o(660,"br"),t()()(),n(661,"td",20)(662,"code",27),e(663,"boolean"),t()(),n(664,"td",22)(665,"p")(666,"code"),e(667,"false"),t()()(),n(668,"td",23)(669,"em")(670,"strong"),e(671,"(opcional)"),t()(),n(672,"p"),e(673,"Habilita a quebra autom\xE1tica do texto da propriedade "),n(674,"code"),e(675,"p-label"),t(),e(676,". Quando "),n(677,"code"),e(678,"p-label-text-wrap"),t(),e(679,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),n(680,"tr",15)(681,"td",16)(682,"div",24)(683,"span",25),e(684,"p-mask"),o(685,"br"),t()()(),n(686,"td",20)(687,"code",26),e(688,"string"),t()(),n(689,"td",22),e(690,"-"),t(),n(691,"td",23)(692,"em")(693,"strong"),e(694,"(opcional)"),t()(),n(695,"p"),e(696,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),t()()(),n(697,"tr",15)(698,"td",16)(699,"div",24)(700,"span",25),e(701,"p-mask-format-model"),o(702,"br"),t()()(),n(703,"td",20)(704,"code",27),e(705,"boolean"),t()(),n(706,"td",22)(707,"p")(708,"code"),e(709,"false"),t()()(),n(710,"td",23)(711,"em")(712,"strong"),e(713,"(opcional)"),t()(),n(714,"p"),e(715,"Indica se o "),n(716,"code"),e(717,"model"),t(),e(718," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),t()()(),n(719,"tr",15)(720,"td",16)(721,"div",24)(722,"span",25),e(723," p-mask-no-length-validation"),o(724,"br"),t()()(),n(725,"td",20)(726,"code",27),e(727,"boolean"),t()(),n(728,"td",22)(729,"p")(730,"code"),e(731,"false"),t()()(),n(732,"td",23)(733,"p"),e(734,"Define se os caracteres especiais da m\xE1scara devem ser ignorados ao validar os comprimentos m\xEDnimo ("),n(735,"code"),e(736,"minLength"),t(),e(737,") e m\xE1ximo ("),n(738,"code"),e(739,"maxLength"),t(),e(740,") do campo."),t(),n(741,"ul")(742,"li"),e(743,"Quando "),n(744,"code"),e(745,"true"),t(),e(746,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),t(),n(747,"li"),e(748,"Quando "),n(749,"code"),e(750,"false"),t(),e(751,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),t()(),n(752,"blockquote")(753,"p"),e(754,"Ser\xE1 ignorado essa propriedade , caso esteja utilizando junto com a propriedade "),n(755,"code"),e(756,"p-mask-format-model"),t(),e(757,"."),t()(),n(758,"p"),e(759,"Exemplo:"),t(),n(760,"pre")(761,"code"),e(762,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),t()(),n(763,"ul")(764,"li"),e(765,"Entrada: "),n(766,"code"),e(767,"123-456"),t(),e(768," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),n(769,"code"),e(770,"-"),t(),e(771,"."),t()()()(),n(772,"tr",15)(773,"td",16)(774,"div",24)(775,"span",25),e(776," p-maxlength"),o(777,"br"),t()()(),n(778,"td",20)(779,"code",31),e(780,"number"),t()(),n(781,"td",22),e(782,"-"),t(),n(783,"td",23)(784,"em")(785,"strong"),e(786,"(opcional)"),t()(),n(787,"p"),e(788,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),t()()(),n(789,"tr",15)(790,"td",16)(791,"div",24)(792,"span",25),e(793," p-minlength"),o(794,"br"),t()()(),n(795,"td",20)(796,"code",31),e(797,"number"),t()(),n(798,"td",22),e(799,"-"),t(),n(800,"td",23)(801,"em")(802,"strong"),e(803,"(opcional)"),t()(),n(804,"p"),e(805,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),t()()(),n(806,"tr",15)(807,"td",16)(808,"div",24)(809,"span",25),e(810," name"),o(811,"br"),t()()(),n(812,"td",20)(813,"code",26),e(814,"string"),t()(),n(815,"td",22),e(816,"-"),t(),n(817,"td",23)(818,"p"),e(819,"Nome e identificador do campo."),t()()(),n(820,"tr",15)(821,"td",16)(822,"div",24)(823,"span",25),e(824," p-no-autocomplete"),o(825,"br"),t()()(),n(826,"td",20)(827,"code",27),e(828,"boolean"),t()(),n(829,"td",22)(830,"p")(831,"code"),e(832,"false"),t()()(),n(833,"td",23)(834,"em")(835,"strong"),e(836,"(opcional)"),t()(),n(837,"p"),e(838,"Define a propriedade nativa "),n(839,"code"),e(840,"autocomplete"),t(),e(841," do campo como "),n(842,"code"),e(843,"off"),t(),e(844,"."),t(),n(845,"blockquote")(846,"p"),e(847,"No componente "),n(848,"code"),e(849,"po-password"),t(),e(850," ser\xE1 definido como "),n(851,"code"),e(852,"new-password"),t(),e(853,"."),t()(),n(854,"p"),e(855,"Nos componentes "),n(856,"code"),e(857,"po-password"),t(),e(858," e "),n(859,"code"),e(860,"po-login"),t(),e(861," o valor padr\xE3o ser\xE1 "),n(862,"code"),e(863,"true"),t(),e(864,"."),t()()(),n(865,"tr",15)(866,"td",16)(867,"div",24)(868,"span",25),e(869," p-optional"),o(870,"br"),t()()(),n(871,"td",20)(872,"code",27),e(873,"boolean"),t()(),n(874,"td",22)(875,"p")(876,"code"),e(877,"false"),t()()(),n(878,"td",23)(879,"em")(880,"strong"),e(881,"(opcional)"),t()(),n(882,"p"),e(883,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(884,"blockquote")(885,"p"),e(886,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(887,"ul")(888,"li"),e(889,"O campo conter "),n(890,"code"),e(891,"p-required"),t(),e(892,";"),t(),n(893,"li"),e(894,"N\xE3o possuir "),n(895,"code"),e(896,"p-help"),t(),e(897," e/ou "),n(898,"code"),e(899,"p-label"),t(),e(900,"."),t()()()(),n(901,"tr",15)(902,"td",16)(903,"div",24)(904,"span",25),e(905,"p-pattern"),o(906,"br"),t()()(),n(907,"td",20)(908,"code",26),e(909,"string"),t()(),n(910,"td",22),e(911,"-"),t(),n(912,"td",23)(913,"em")(914,"strong"),e(915,"(opcional)"),t()(),n(916,"p"),e(917,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),n(918,"code"),e(919,"(p-mask)"),t(),e(920,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),t()()(),n(921,"tr",15)(922,"td",16)(923,"div",24)(924,"span",25),e(925," p-placeholder"),o(926,"br"),t()()(),n(927,"td",20)(928,"code",26),e(929,"string"),t()(),n(930,"td",22)(931,"p"),e(932,"''"),t()(),n(933,"td",23)(934,"em")(935,"strong"),e(936,"(opcional)"),t()(),n(937,"p"),e(938,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(939,"tr",15)(940,"td",16)(941,"div",24)(942,"span",25),e(943," p-helper"),o(944,"br"),t()()(),n(945,"td",20)(946,"code",32),e(947,"PoHelperOptions "),t(),n(948,"code",26),e(949," string"),t()(),n(950,"td",22),e(951,"-"),t(),n(952,"td",23)(953,"em")(954,"strong"),e(955,"(opcional)"),t()(),n(956,"p"),e(957,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),n(958,"code"),e(959,"p-label"),t(),e(960," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),n(961,"code"),e(962,"p-label"),t(),e(963,"."),t(),n(964,"blockquote")(965,"p"),e(966,"Para mais informa\xE7\xF5es acesse: "),n(967,"a",33),e(968,"https://po-ui.io/documentation/po-helper"),t(),e(969,"."),t()(),n(970,"blockquote")(971,"p"),e(972,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),n(973,"code"),e(974,"p-additional-help-tooltip"),t(),e(975," e "),n(976,"code"),e(977,"p-additional-help"),t(),e(978,") ser\xE1 ignorado."),t()()()(),n(979,"tr",15)(980,"td",16)(981,"div",24)(982,"span",25),e(983,"p-readonly"),o(984,"br"),t()()(),n(985,"td",20)(986,"code",27),e(987,"boolean"),t()(),n(988,"td",22),e(989,"-"),t(),n(990,"td",23)(991,"em")(992,"strong"),e(993,"(opcional)"),t()(),n(994,"p"),e(995,"Indica que o campo ser\xE1 somente leitura."),t()()(),n(996,"tr",15)(997,"td",16)(998,"div",24)(999,"span",25),e(1e3,"p-required"),o(1001,"br"),t()()(),n(1002,"td",20)(1003,"code",27),e(1004,"boolean"),t()(),n(1005,"td",22)(1006,"p")(1007,"code"),e(1008,"false"),t()()(),n(1009,"td",23)(1010,"em")(1011,"strong"),e(1012,"(opcional)"),t()(),n(1013,"p"),e(1014,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),n(1015,"blockquote")(1016,"p"),e(1017,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),n(1018,"code"),e(1019,"(p-disabled)"),t(),e(1020,"."),t()()()(),n(1021,"tr",15)(1022,"td",16)(1023,"div",24)(1024,"span",25),e(1025," p-required-field-error-message"),o(1026,"br"),t()()(),n(1027,"td",20)(1028,"code",27),e(1029,"boolean"),t()(),n(1030,"td",22)(1031,"p")(1032,"code"),e(1033,"false"),t()()(),n(1034,"td",23)(1035,"em")(1036,"strong"),e(1037,"(opcional)"),t()(),n(1038,"p"),e(1039,"Exibe a mensagem setada na propriedade "),n(1040,"code"),e(1041,"p-error-pattern"),t(),e(1042," se o campo estiver vazio e for requerido."),t(),n(1043,"blockquote")(1044,"p"),e(1045,"Necess\xE1rio que a propriedade "),n(1046,"code"),e(1047,"p-required"),t(),e(1048," esteja habilitada."),t()()()(),n(1049,"tr",15)(1050,"td",16)(1051,"div",24)(1052,"span",25),e(1053," p-show-required"),o(1054,"br"),t()()(),n(1055,"td",20)(1056,"code",27),e(1057,"boolean"),t()(),n(1058,"td",22),e(1059,"-"),t(),n(1060,"td",23)(1061,"p"),e(1062,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(1063,"blockquote")(1064,"p"),e(1065,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(1066,"ul")(1067,"li"),e(1068,"N\xE3o possuir "),n(1069,"code"),e(1070,"p-help"),t(),e(1071," e/ou "),n(1072,"code"),e(1073,"p-label"),t(),e(1074,"."),t()()()(),n(1075,"tr",15)(1076,"td",16)(1077,"div",24)(1078,"span",25),e(1079," p-size"),o(1080,"br"),t()()(),n(1081,"td",20)(1082,"code",26),e(1083,"string"),t()(),n(1084,"td",22)(1085,"p")(1086,"code"),e(1087,"medium"),t()()(),n(1088,"td",23)(1089,"em")(1090,"strong"),e(1091,"(opcional)"),t()(),n(1092,"p"),e(1093,"Define o tamanho do componente:"),t(),n(1094,"ul")(1095,"li")(1096,"code"),e(1097,"small"),t(),e(1098,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(1099,"li")(1100,"code"),e(1101,"medium"),t(),e(1102,": altura do input como 44px."),t()(),n(1103,"blockquote")(1104,"p"),e(1105,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(1106,"code"),e(1107,"medium"),t(),e(1108,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(1109,"a",34),e(1110,"po-theme"),t(),e(1111,"."),t()()()(),n(1112,"tr",15)(1113,"td",16)(1114,"div",24)(1115,"span",25),e(1116," p-upper-case"),o(1117,"br"),t()()(),n(1118,"td",20)(1119,"code",27),e(1120,"boolean"),t()(),n(1121,"td",22),e(1122,"-"),t(),n(1123,"td",23)(1124,"p"),e(1125,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),t()()()(),n(1126,"h3",11),e(1127,"M\xE9todos"),t(),n(1128,"table",35)(1129,"tr",15)(1130,"th",36)(1131,"div",24)(1132,"h4")(1133,"span",25),e(1134," showAdditionalHelp "),t()()()()(),n(1135,"tr",23)(1136,"td",23)(1137,"p"),e(1138,"M\xE9todo que exibe "),n(1139,"code"),e(1140,"p-helper"),t(),e(1141," ou executa a a\xE7\xE3o definida em "),n(1142,"code"),e(1143,"p-helper{eventOnClick}"),t(),e(1144," ou em "),n(1145,"code"),e(1146,"p-additionalHelp"),t(),e(1147,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),n(1148,"code"),e(1149,"p-keydown"),t(),e(1150,"."),t(),n(1151,"blockquote")(1152,"p"),e(1153,"Exibe ou oculta o conte\xFAdo do componente "),n(1154,"code"),e(1155,"po-helper"),t(),e(1156," quando o componente estiver com foco."),t()(),n(1157,"pre")(1158,"code"),e(1159,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),t()(),n(1160,"pre")(1161,"code"),e(1162,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),o(1163,"br"),n(1164,"table",35)(1165,"tr",15)(1166,"th",36)(1167,"div",24)(1168,"h4")(1169,"span",25),e(1170," focus "),t()()()()(),n(1171,"tr",23)(1172,"td",23)(1173,"p"),e(1174,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(1175,"p"),e(1176,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(1177,"pre")(1178,"code"),e(1179,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),t()()()()(),o(1180,"br"),n(1181,"h3"),e(1182,"Interfaces"),t(),n(1183,"h4",37)(1184,"code",5),e(1185,"ErrorAsyncProperties"),t()(),n(1186,"div",2)(1187,"p"),e(1188,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),t()(),n(1189,"h4",11),e(1190,"Propriedades"),t(),n(1191,"table",12)(1192,"tr",13)(1193,"th",14),e(1194,"Nome"),t(),n(1195,"th",14),e(1196,"Tipo"),t(),n(1197,"th",14),e(1198,"Descri\xE7\xE3o"),t()(),n(1199,"tr",15)(1200,"td",16)(1201,"div",24)(1202,"span",25),e(1203," errorAsync"),o(1204,"br"),t()()(),n(1205,"td",20)(1206,"code",38),e(1207,"(value) => Observable<boolean>"),t()(),n(1208,"td",23)(1209,"p"),e(1210,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(1211,"code"),e(1212,"change"),t(),e(1213," ou "),n(1214,"code"),e(1215,"change-model"),t(),e(1216,", dependendo do valor da propriedade "),n(1217,"code"),e(1218,"triggerMode"),t(),e(1219,"."),t()()(),n(1220,"tr",15)(1221,"td",16)(1222,"div",24)(1223,"span",25),e(1224," triggerMode"),o(1225,"br"),t()()(),n(1226,"td",20)(1227,"code",39),e(1228,"'change' "),t(),n(1229,"code",40),e(1230," 'changeModel'"),t()(),n(1231,"td",23)(1232,"em")(1233,"strong"),e(1234,"(opcional)"),t()(),n(1235,"p"),e(1236,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),n(1237,"code"),e(1238,"change"),t(),e(1239," ou "),n(1240,"code"),e(1241,"change-model"),t(),e(1242,"."),t()()()()())},dependencies:[y],encapsulation:2})}return a})();var ue=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,l){this.route=d,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let l=d.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||a)(A(U),A(K))};static \u0275cmp=g({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Login",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),h("p-click",function(){return i.changeTab("doc")}),o(3,"sample-po-login-doc"),t(),n(4,"po-tab",3),h("p-click",function(){return i.changeTab("web")}),o(5,"sample-po-login-basic-view")(6,"sample-po-login-labs-view")(7,"sample-po-login-confirm-view"),t()()()),l&2&&(E("p-actions",i.actions),p(2),E("p-active",i.activeTab==="doc"),p(2),E("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[ie,v,C,re,me,se,ce],encapsulation:2})}return a})();var _e=[{path:"",component:ue}],Ee=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=k({type:a});static \u0275inj=T({imports:[W.forChild(_e),W]})}return a})();var tt=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=k({type:a});static \u0275inj=T({imports:[oe,Ee]})}return a})();export{tt as DocPoLoginModule};
