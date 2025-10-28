import{o as k,p as le}from"./chunk-KTXVLMHP.js";import{Ab as C,Fa as oe,Ma as ne,O as M,Q as ee,Xa as ie,a as B,nb as ae,ra as z,sa as te,v as W,zb as v}from"./chunk-4M2FSNLW.js";import{$c as R,Aa as s,Da as w,Fb as _,Gc as D,Hc as L,Ic as V,Jc as F,Kc as A,La as o,Ma as t,N as T,Na as i,Q as K,Ra as q,Sa as S,Tb as Y,U as c,V as u,Xc as Z,Zc as $,bb as Q,cb as e,eb as y,gb as x,hb as E,ib as g,ja as r,ka as N,nb as j,ob as P,pb as U,qa as h,ra as O,ub as J,vb as X}from"./chunk-CBLD3XJL.js";var Ee=()=>({value:"1",label:"Option 1"}),ge=()=>({value:"2",label:"Option 2"}),Se=(a,xe)=>[a,xe],pe=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-checkbox-group-basic"]],standalone:!1,decls:1,vars:6,consts:[["name","checkboxGroup","p-label","PO Checkbox Group",3,"p-options"]],template:function(p,n){p&1&&i(0,"po-checkbox-group",0),p&2&&s("p-options",U(3,Se,j(1,Ee),j(2,ge)))},dependencies:[M],encapsulation:2})}return a})();var ve=a=>({"docs-sample-code-tabs":a}),re=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-checkbox-group-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(i(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Checkbox Group Basic"),t(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-checkbox-group-basic/sample-po-checkbox-group-basic.component.html"),t(),o(13,"pre",7),e(14,`<po-checkbox-group
  name="checkboxGroup"
  p-label="PO Checkbox Group"
  [p-options]="[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' }
  ]"
>
</po-checkbox-group>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-checkbox-group-basic/sample-po-checkbox-group-basic.component.ts"),t(),o(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-checkbox-group-basic',
  templateUrl: './sample-po-checkbox-group-basic.component.html',
  standalone: false
})
export class SamplePoCheckboxGroupBasicComponent {}
`),t()()()()(),o(21,"div",10),i(22,"sample-po-checkbox-group-basic"),t(),i(23,"hr")),p&2&&(r(5),w("po-icon "+n.sampleCodeButtonIcon),r(),y(" ",n.sampleCodeButtonLabel,""),r(),s("ngClass",P(4,ve,n.hideSampleCodeTabs)))},dependencies:[_,k,v,C,pe],encapsulation:2})}return a})();var de=(()=>{class a{helperText;checkboxGroup;columns;disabled;event;help;indeterminate;label;option;options;properties;fieldErrorMessage;size;columnOptions=[{label:"1 column",value:1},{label:"2 columns",value:2},{label:"3 columns",value:3},{label:"4 columns",value:4}];propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"indeterminate",label:"Indeterminate"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}addOption(){this.options=[...this.options,this.option],this.clearOption()}changeEvent(m){this.event=m}restore(){this.helperText="",this.checkboxGroup=void 0,this.columns=void 0,this.disabled=!1,this.event=void 0,this.help="",this.indeterminate=void 0,this.label=void 0,this.options=[],this.properties=[],this.fieldErrorMessage="",this.size="medium",this.clearOption()}clearOption(){this.option={label:void 0,value:void 0}}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-checkbox-group-labs"]],standalone:!1,decls:26,vars:33,consts:[["fOption","ngForm"],["f","ngForm"],["name","checkboxGroup",3,"ngModelChange","p-change","p-keydown","ngModel","p-helper","p-columns","p-disabled","p-help","p-indeterminate","p-label","p-optional","p-options","p-required","p-field-error-message","p-error-limit","p-show-required","p-label-text-wrap","p-size"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","optionValue","p-clean","","p-label","Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","optionLabel","p-clean","","p-label","Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disabled","p-label","Option Disabled",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add option",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","columns","p-columns","4","p-label","Columns",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(p,n){if(p&1){let d=q();o(0,"po-checkbox-group",2),g("ngModelChange",function(l){return c(d),E(n.checkboxGroup,l)||(n.checkboxGroup=l),u(l)}),S("p-change",function(){return c(d),u(n.changeEvent("p-change"))})("p-keydown",function(){return c(d),u(n.changeEvent("p-keydown"))}),t(),i(1,"po-divider"),o(2,"div",3),i(3,"po-info",4),J(4,"json"),i(5,"po-info",5),t(),i(6,"po-divider"),o(7,"form",null,0)(9,"po-input",6),g("ngModelChange",function(l){return c(d),E(n.option.value,l)||(n.option.value=l),u(l)}),t(),o(10,"po-input",7),g("ngModelChange",function(l){return c(d),E(n.option.label,l)||(n.option.label=l),u(l)}),t(),o(11,"po-switch",8),g("ngModelChange",function(l){return c(d),E(n.option.disabled,l)||(n.option.disabled=l),u(l)}),t(),o(12,"div",3)(13,"po-button",9),S("p-click",function(){return c(d),u(n.addOption())}),t()()(),i(14,"po-divider"),o(15,"form",null,1)(17,"po-input",10),g("ngModelChange",function(l){return c(d),E(n.label,l)||(n.label=l),u(l)}),t(),o(18,"po-input",11),g("ngModelChange",function(l){return c(d),E(n.help,l)||(n.help=l),u(l)}),t(),o(19,"po-input",12),g("ngModelChange",function(l){return c(d),E(n.helperText,l)||(n.helperText=l),u(l)}),t(),o(20,"po-input",13),g("ngModelChange",function(l){return c(d),E(n.fieldErrorMessage,l)||(n.fieldErrorMessage=l),u(l)}),t(),o(21,"po-checkbox-group",14),g("ngModelChange",function(l){return c(d),E(n.properties,l)||(n.properties=l),u(l)}),t(),o(22,"po-radio-group",15),g("ngModelChange",function(l){return c(d),E(n.columns,l)||(n.columns=l),u(l)}),t(),o(23,"po-radio-group",16),g("ngModelChange",function(l){return c(d),E(n.size,l)||(n.size=l),u(l)}),t(),o(24,"div",3)(25,"po-button",17),S("p-click",function(){return c(d),u(n.restore())}),t()()()}if(p&2){let d=Q(8);x("ngModel",n.checkboxGroup),s("p-helper",n.helperText)("p-columns",n.columns)("p-disabled",n.properties.includes("disabled"))("p-help",n.help)("p-indeterminate",n.properties.includes("indeterminate"))("p-label",n.label)("p-optional",n.properties.includes("optional"))("p-options",n.options)("p-required",n.properties.includes("required"))("p-field-error-message",n.fieldErrorMessage)("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit"))("p-show-required",n.properties.includes("showRequired"))("p-label-text-wrap",n.properties.includes("labelTextWrap"))("p-size",n.size),r(3),s("p-value",X(4,31,n.checkboxGroup)),r(2),s("p-value",n.event),r(4),x("ngModel",n.option.value),r(),x("ngModel",n.option.label),r(),x("ngModel",n.option.disabled),r(2),s("p-disabled",d.invalid),r(4),x("ngModel",n.label),r(),x("ngModel",n.help),r(),x("ngModel",n.helperText),r(),x("ngModel",n.fieldErrorMessage),r(),x("ngModel",n.properties),s("p-options",n.propertiesOptions),r(),x("ngModel",n.columns),s("p-options",n.columnOptions),r(),x("ngModel",n.size),s("p-options",n.sizeOptions)}},dependencies:[A,D,L,F,V,W,B,M,ee,oe,z,ie,Y],encapsulation:2})}return a})();var ye=a=>({"docs-sample-code-tabs":a}),me=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-checkbox-group-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(i(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Checkbox Group Labs"),t(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-checkbox-group-labs/sample-po-checkbox-group-labs.component.html"),t(),o(13,"pre",7),e(14,`<po-checkbox-group
  name="checkboxGroup"
  [(ngModel)]="checkboxGroup"
  [p-helper]="helperText"
  [p-columns]="columns"
  [p-disabled]="properties.includes('disabled')"
  [p-help]="help"
  [p-indeterminate]="properties.includes('indeterminate')"
  [p-label]="label"
  [p-optional]="properties.includes('optional')"
  [p-options]="options"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-show-required]="properties.includes('showRequired')"
  [p-label-text-wrap]="properties.includes('labelTextWrap')"
  [p-size]="size"
  (p-change)="changeEvent('p-change')"
  (p-keydown)="changeEvent('p-keydown')"
>
</po-checkbox-group>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="checkboxGroup | json"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #fOption="ngForm">
  <po-input class="po-md-6" name="optionValue" [(ngModel)]="option.value" p-clean p-label="Option Value" p-required>
  </po-input>

  <po-input class="po-md-6" name="optionLabel" [(ngModel)]="option.label" p-clean p-label="Option Label" p-required>
  </po-input>

  <po-switch class="po-md-6" name="disabled" [(ngModel)]="option.disabled" p-label="Option Disabled"> </po-switch>

  <div class="po-row">
    <po-button class="po-lg-2 po-md-4" p-label="Add option" [p-disabled]="fOption.invalid" (p-click)="addOption()">
    </po-button>
  </div>
</form>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input
    class="po-md-6"
    name="fieldErrorMessage"
    [(ngModel)]="fieldErrorMessage"
    p-clean
    p-label="Field Error Message"
  >
  </po-input>

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
    name="columns"
    [(ngModel)]="columns"
    p-columns="4"
    p-label="Columns"
    [p-options]="columnOptions"
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
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-checkbox-group-labs/sample-po-checkbox-group-labs.component.ts"),t(),o(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-checkbox-group-labs',
  templateUrl: './sample-po-checkbox-group-labs.component.html',
  standalone: false
})
export class SamplePoCheckboxGroupLabsComponent implements OnInit {
  helperText: string;
  checkboxGroup: object;
  columns: number;
  disabled: boolean;
  event: string;
  help: string;
  indeterminate: boolean;
  label: string;
  option: PoCheckboxGroupOption;
  options: Array<PoCheckboxGroupOption>;
  properties: Array<string>;
  fieldErrorMessage: string;
  size: string;

  public readonly columnOptions: Array<PoRadioGroupOption> = [
    { label: '1 column', value: 1 },
    { label: '2 columns', value: 2 },
    { label: '3 columns', value: 3 },
    { label: '4 columns', value: 4 }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'indeterminate', label: 'Indeterminate' },
    { value: 'optional', label: 'Optional' },
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

  addOption() {
    this.options = [...this.options, this.option];
    this.clearOption();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.helperText = '';
    this.checkboxGroup = undefined;
    this.columns = undefined;
    this.disabled = false;
    this.event = undefined;
    this.help = '';
    this.indeterminate = undefined;
    this.label = undefined;
    this.options = [];
    this.properties = [];
    this.fieldErrorMessage = '';
    this.size = 'medium';

    this.clearOption();
  }

  private clearOption() {
    this.option = { label: undefined, value: undefined };
  }
}
`),t()()()()(),o(21,"div",10),i(22,"sample-po-checkbox-group-labs"),t(),i(23,"hr")),p&2&&(r(5),w("po-icon "+n.sampleCodeButtonIcon),r(),y(" ",n.sampleCodeButtonLabel,""),r(),s("ngClass",P(4,ye,n.hideSampleCodeTabs)))},dependencies:[_,k,v,C,de],encapsulation:2})}return a})();var se=(()=>{class a{poNotification=K(te);attempts;expiration;maxAttempts;periodExpiration;auditOptions=[{value:"1",label:"Functional menu"},{value:"2",label:"Online panel"},{value:"3",label:"Internet browser"},{value:"4",label:"Browser details"},{value:"5",label:"Transparent panel"},{value:"6",label:"Browser refresh"}];systemOptions=[{value:"1",label:"Audit updates in the data dictionary"},{value:"2",label:"Audit updates in the user registry"},{value:"3",label:"Audit authentication / access"},{value:"4",label:"Audit rejection of access to resources"}];confirm(){this.poNotification.success("Settings saved successfully!")}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-checkbox-group-password-policy"]],standalone:!1,decls:19,vars:7,consts:[["g","ngForm"],[1,"po-font-subtitle"],[1,"po-row"],["name","system","p-label","System features",1,"po-lg-12",3,"p-options"],["name","audit","p-label","Audit rules",1,"po-lg-12",3,"p-options"],["name","expiration","p-label","Password expiration","p-label-off","Desactive","p-label-on","Actived",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","periodExpiration","p-label","Period (in days)","p-maxlength","3",1,"po-lg-6",3,"p-disabled"],["name","attempts","p-label","Restrict access attempts","p-label-off","Desactive","p-label-on","Actived",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","maxAttempts","p-label","Maximum number of attempts","p-maxlength","3",1,"po-lg-6",3,"ngModelChange","ngModel","p-disabled"],["p-label","Apply password policy",1,"po-offset-lg-9","po-lg-3","po-offset-xl-9",3,"p-click"]],template:function(p,n){if(p&1){let d=q();o(0,"div",1),e(1,"Password Rules"),t(),i(2,"po-divider"),o(3,"form",null,0)(5,"div",2),i(6,"po-checkbox-group",3),t(),i(7,"po-divider"),o(8,"div",2),i(9,"po-checkbox-group",4),t(),i(10,"po-divider"),o(11,"div",2)(12,"po-switch",5),g("ngModelChange",function(l){return c(d),E(n.expiration,l)||(n.expiration=l),u(l)}),t(),i(13,"po-number",6),t(),o(14,"div",2)(15,"po-switch",7),g("ngModelChange",function(l){return c(d),E(n.attempts,l)||(n.attempts=l),u(l)}),t(),o(16,"po-number",8),g("ngModelChange",function(l){return c(d),E(n.maxAttempts,l)||(n.maxAttempts=l),u(l)}),t()(),o(17,"div",2)(18,"po-button",9),S("p-click",function(){return c(d),u(n.confirm())}),t()()()}p&2&&(r(6),s("p-options",n.systemOptions),r(3),s("p-options",n.auditOptions),r(3),x("ngModel",n.expiration),r(),s("p-disabled",!n.expiration),r(2),x("ngModel",n.attempts),r(),x("ngModel",n.maxAttempts),s("p-disabled",!n.attempts))},dependencies:[A,D,L,F,V,W,B,M,ne,z],encapsulation:2})}return a})();var Me=a=>({"docs-sample-code-tabs":a}),ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-checkbox-group-password-policy-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(i(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Checkbox Group \u2013 Security policy"),t(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-checkbox-group-password-policy/sample-po-checkbox-group-password-policy.component.html"),t(),o(13,"pre",7),e(14,`<div class="po-font-subtitle">Password Rules</div>

<po-divider />

<form #g="ngForm">
  <div class="po-row">
    <po-checkbox-group class="po-lg-12" name="system" p-label="System features" [p-options]="systemOptions">
    </po-checkbox-group>
  </div>

  <po-divider />

  <div class="po-row">
    <po-checkbox-group class="po-lg-12" name="audit" p-label="Audit rules" [p-options]="auditOptions">
    </po-checkbox-group>
  </div>

  <po-divider />

  <div class="po-row">
    <po-switch
      class="po-lg-6"
      name="expiration"
      [(ngModel)]="expiration"
      p-label="Password expiration"
      p-label-off="Desactive"
      p-label-on="Actived"
    >
    </po-switch>

    <po-number
      class="po-lg-6"
      name="periodExpiration"
      p-label="Period (in days)"
      p-maxlength="3"
      [p-disabled]="!expiration"
    >
    </po-number>
  </div>

  <div class="po-row">
    <po-switch
      class="po-lg-6"
      name="attempts"
      [(ngModel)]="attempts"
      p-label="Restrict access attempts"
      p-label-off="Desactive"
      p-label-on="Actived"
    >
    </po-switch>

    <po-number
      class="po-lg-6"
      name="maxAttempts"
      [(ngModel)]="maxAttempts"
      p-label="Maximum number of attempts"
      p-maxlength="3"
      [p-disabled]="!attempts"
    >
    </po-number>
  </div>

  <div class="po-row">
    <po-button class="po-offset-lg-9 po-lg-3 po-offset-xl-9" p-label="Apply password policy" (p-click)="confirm()">
    </po-button>
  </div>
</form>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-checkbox-group-password-policy/sample-po-checkbox-group-password-policy.component.ts"),t(),o(19,"pre",9),e(20,`import { Component, inject } from '@angular/core';

import { PoCheckboxGroupOption } from '@po-ui/ng-components';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-checkbox-group-password-policy',
  templateUrl: './sample-po-checkbox-group-password-policy.component.html',
  standalone: false
})
export class SamplePoCheckboxGroupPasswordPolicyComponent {
  private poNotification = inject(PoNotificationService);

  attempts: number;
  expiration: number;
  maxAttempts: boolean;
  periodExpiration: boolean;

  public readonly auditOptions: Array<PoCheckboxGroupOption> = [
    { value: '1', label: 'Functional menu' },
    { value: '2', label: 'Online panel' },
    { value: '3', label: 'Internet browser' },
    { value: '4', label: 'Browser details' },
    { value: '5', label: 'Transparent panel' },
    { value: '6', label: 'Browser refresh' }
  ];

  public readonly systemOptions: Array<PoCheckboxGroupOption> = [
    { value: '1', label: 'Audit updates in the data dictionary' },
    { value: '2', label: 'Audit updates in the user registry' },
    { value: '3', label: 'Audit authentication / access' },
    { value: '4', label: 'Audit rejection of access to resources' }
  ];

  confirm() {
    this.poNotification.success('Settings saved successfully!');
  }
}
`),t()()()()(),o(21,"div",10),i(22,"sample-po-checkbox-group-password-policy"),t(),i(23,"hr")),p&2&&(r(5),w("po-icon "+n.sampleCodeButtonIcon),r(),y(" ",n.sampleCodeButtonLabel,""),r(),s("ngClass",P(4,Me,n.hideSampleCodeTabs)))},dependencies:[_,k,v,C,se],encapsulation:2})}return a})();var ue=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-checkbox-group-doc"]],standalone:!1,decls:815,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-radio-group"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoCheckboxGroupOption[]"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"]],template:function(p,n){p&1&&(o(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),o(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),o(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),o(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),o(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),o(16,"h3",3),e(17,"Componente"),t(),o(18,"h4",4)(19,"code",5),e(20,"PoCheckboxGroupComponent"),t()(),o(21,"div",2)(22,"p"),e(23,"O componente "),o(24,"code"),e(25,"po-checkbox-group"),t(),e(26,` exibe uma lista de m\xFAltipla escolha onde o usu\xE1rio pode marcar e desmarcar,
utilizando a tecla de espa\xE7o ou o clique do mouse, v\xE1rias op\xE7\xF5es.`),t(),o(27,"blockquote")(28,"p"),e(29,"Para sele\xE7\xE3o \xFAnica, utilize o "),o(30,"a",6)(31,"strong"),e(32,"PO Radio Group"),t()(),e(33,"."),t()(),o(34,"p"),e(35,"Por padr\xE3o, o po-checkbox-group retorna um array com os valores dos itens selecionados para o model."),t(),o(36,"pre")(37,"code"),e(38,`favorites = ['PO', 'Angular'];
`),t()(),o(39,"p"),e(40,`Na maioria das situa\xE7\xF5es, o array com os objetos setados j\xE1 atende as necessidades mas, caso o desenvolvedor
tenha necessidade de usar um valor indeterminado (`),o(41,"code"),e(42,"null"),t(),e(43,"), ou seja, nem marcado ("),o(44,"code"),e(45,"true"),t(),e(46,") e nem desmarcado ("),o(47,"code"),e(48,"false"),t(),e(49,`),
deve setar a propriedade `),o(50,"code"),e(51,"p-indeterminate"),t(),e(52," como "),o(53,"code"),e(54,"true"),t(),e(55,"."),t(),o(56,"p"),e(57,"Nesse caso, o po-checkbox-group vai retornar um objeto com todas as op\xE7\xF5es dispon\xEDveis e seus valores."),t(),o(58,"pre")(59,"code"),e(60,`favorites = {
 PO: true,
 Angular: true,
 VueJS: false,
 React: null // indeterminado
};
`),t()()(),o(61,"div",7)(62,"h4",8),e(63,"Seletor"),t(),o(64,"pre",9),e(65,`<po-checkbox-group
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-change)="EventEmitter"
    p-columns="number"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-help="string"
    p-indeterminate="boolean"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    name="string"
    (ng-model-change)="EventEmitter"
    p-optional="boolean"
    p-options="PoCheckboxGroupOption[]"
    p-helper="PoHelperOptions | string"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string" >
</po-checkbox-group>
`),t()(),o(66,"h4",10),e(67,"Propriedades"),t(),o(68,"table",11)(69,"tr",12)(70,"th",13),e(71,"Nome"),t(),o(72,"th",13),e(73,"Tipo"),t(),o(74,"th",13),e(75,"Padr\xE3o"),t(),o(76,"th",13),e(77,"Descri\xE7\xE3o"),t()(),o(78,"tr",14)(79,"td",15)(80,"div",16)(81,"span",17),e(82," (p-additional-help)"),i(83,"br"),t()(),o(84,"div",18),e(85,"Deprecated"),t()(),o(86,"td",19)(87,"code",20),e(88,"EventEmitter"),t()(),o(89,"td",21),e(90,"-"),t(),o(91,"td",22)(92,"em")(93,"strong"),e(94,"(opcional)"),t()(),o(95,"p"),e(96,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),t(),o(97,"blockquote")(98,"p"),e(99,"Essa propriedade est\xE1 "),o(100,"strong"),e(101,"depreciada"),t(),e(102," e ser\xE1 removida na vers\xE3o "),o(103,"code"),e(104,"23.x.x"),t(),e(105,". Recomendamos utilizar a propriedade "),o(106,"code"),e(107,"p-helper"),t(),e(108," que oferece mais recursos e flexibilidade."),t()()()(),o(109,"tr",14)(110,"td",15)(111,"div",23)(112,"span",24),e(113," p-additional-help-tooltip"),i(114,"br"),t()(),o(115,"div",18),e(116,"Deprecated"),t()(),o(117,"td",19)(118,"code",25),e(119,"string"),t()(),o(120,"td",21),e(121,"-"),t(),o(122,"td",22)(123,"em")(124,"strong"),e(125,"(opcional)"),t()(),o(126,"p"),e(127,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),o(128,"code"),e(129,"po-helper"),t(),e(130,`.
`),o(131,"strong"),e(132,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),o(133,"blockquote")(134,"p"),e(135,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),o(136,"blockquote")(137,"p"),e(138,"Essa propriedade est\xE1 "),o(139,"strong"),e(140,"depreciada"),t(),e(141," e ser\xE1 removida na vers\xE3o "),o(142,"code"),e(143,"23.x.x"),t(),e(144,". Recomendamos utilizar a propriedade "),o(145,"code"),e(146,"p-helper"),t(),e(147," que oferece mais recursos e flexibilidade."),t()()()(),o(148,"tr",14)(149,"td",15)(150,"div",23)(151,"span",24),e(152," p-append-in-body"),i(153,"br"),t()()(),o(154,"td",19)(155,"code",26),e(156,"boolean"),t()(),o(157,"td",21)(158,"p")(159,"code"),e(160,"false"),t()()(),o(161,"td",22)(162,"em")(163,"strong"),e(164,"(opcional)"),t()(),o(165,"p"),e(166,"Define que o popover ("),o(167,"code"),e(168,"p-helper"),t(),e(169," e/ou "),o(170,"code"),e(171,"p-error-limit"),t(),e(172,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),o(173,"blockquote")(174,"p"),e(175,"Quando utilizado com "),o(176,"code"),e(177,"p-helper"),t(),e(178,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),t()()()(),o(179,"tr",14)(180,"td",15)(181,"div",23)(182,"span",24),e(183," p-auto-focus"),i(184,"br"),t()()(),o(185,"td",19)(186,"code",26),e(187,"boolean"),t()(),o(188,"td",21)(189,"p")(190,"code"),e(191,"false"),t()()(),o(192,"td",22)(193,"em")(194,"strong"),e(195,"(opcional)"),t()(),o(196,"p"),e(197,"Aplica foco no elemento ao ser iniciado."),t(),o(198,"blockquote")(199,"p"),e(200,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),o(201,"tr",14)(202,"td",15)(203,"div",16)(204,"span",17),e(205," (p-change)"),i(206,"br"),t()()(),o(207,"td",19)(208,"code",20),e(209,"EventEmitter"),t()(),o(210,"td",21),e(211,"-"),t(),o(212,"td",22)(213,"em")(214,"strong"),e(215,"(opcional)"),t()(),o(216,"p"),e(217,"Evento disparado ao alterar valor do campo"),t()()(),o(218,"tr",14)(219,"td",15)(220,"div",23)(221,"span",24),e(222," p-columns"),i(223,"br"),t()()(),o(224,"td",19)(225,"code",27),e(226,"number"),t()(),o(227,"td",21)(228,"p")(229,"code"),e(230,"2"),t()()(),o(231,"td",22)(232,"em")(233,"strong"),e(234,"(opcional)"),t()(),o(235,"p"),e(236,"Possibilita definir a quantidade de colunas para exibi\xE7\xE3o dos itens do "),o(237,"em"),e(238,"checkbox"),t(),e(239,"."),t(),o(240,"ul")(241,"li"),e(242,"\xC9 poss\xEDvel exibir as op\xE7\xF5es entre "),o(243,"code"),e(244,"1"),t(),e(245," e "),o(246,"code"),e(247,"4"),t(),e(248," colunas."),t(),o(249,"li"),e(250,"Para resolu\xE7\xE3o "),o(251,"code"),e(252,"sm"),t(),e(253," a colunagem invariavelmente passa para "),o(254,"code"),e(255,"1"),t(),e(256," coluna."),t(),o(257,"li"),e(258,"Quando se trata de resolu\xE7\xE3o "),o(259,"code"),e(260,"md"),t(),e(261," e o valor estabelecido para colunas for superior a "),o(262,"code"),e(263,"2"),t(),e(264,`,
o `),o(265,"em"),e(266,"grid system"),t(),e(267," ser\xE1 composto por "),o(268,"code"),e(269,"2"),t(),e(270," colunas."),t(),o(271,"li"),e(272,"Para evitar a quebra de linha, prefira a utiliza\xE7\xE3o de "),o(273,"code"),e(274,"1"),t(),e(275," coluna para op\xE7\xF5es com textos grandes."),t()()()(),o(276,"tr",14)(277,"td",15)(278,"div",23)(279,"span",24),e(280," p-disabled"),i(281,"br"),t()()(),o(282,"td",19)(283,"code",26),e(284,"boolean"),t()(),o(285,"td",21)(286,"p")(287,"code"),e(288,"false"),t()()(),o(289,"td",22)(290,"em")(291,"strong"),e(292,"(opcional)"),t()(),o(293,"p"),e(294,"Desabilita todos os itens do checkbox."),t()()(),o(295,"tr",14)(296,"td",15)(297,"div",23)(298,"span",24),e(299," p-error-limit"),i(300,"br"),t()()(),o(301,"td",19)(302,"code",26),e(303,"boolean"),t()(),o(304,"td",21)(305,"p")(306,"code"),e(307,"false"),t()()(),o(308,"td",22)(309,"em")(310,"strong"),e(311,"(opcional)"),t()(),o(312,"p"),e(313,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),o(314,"blockquote")(315,"p"),e(316,"Caso essa propriedade seja definida como "),o(317,"code"),e(318,"true"),t(),e(319,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),o(320,"tr",14)(321,"td",15)(322,"div",23)(323,"span",24),e(324," p-field-error-message"),i(325,"br"),t()()(),o(326,"td",19)(327,"code",25),e(328,"string"),t()(),o(329,"td",21),e(330,"-"),t(),o(331,"td",22)(332,"em")(333,"strong"),e(334,"(opcional)"),t()(),o(335,"p"),e(336,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),t(),o(337,"blockquote")(338,"p"),e(339,"Necess\xE1rio que a propriedade "),o(340,"code"),e(341,"p-required"),t(),e(342," esteja habilitada."),t()()()(),o(343,"tr",14)(344,"td",15)(345,"div",23)(346,"span",24),e(347," p-help"),i(348,"br"),t()()(),o(349,"td",19)(350,"code",25),e(351,"string"),t()(),o(352,"td",21),e(353,"-"),t(),o(354,"td",22)(355,"em")(356,"strong"),e(357,"(opcional)"),t()(),o(358,"p"),e(359,"Texto de apoio do campo"),t()()(),o(360,"tr",14)(361,"td",15)(362,"div",23)(363,"span",24),e(364," p-indeterminate"),i(365,"br"),t()()(),o(366,"td",19)(367,"code",26),e(368,"boolean"),t()(),o(369,"td",21)(370,"p")(371,"code"),e(372,"false"),t()()(),o(373,"td",22)(374,"em")(375,"strong"),e(376,"(opcional)"),t()(),o(377,"p"),e(378,"Caso exista a necessidade de usar o valor indeterminado ("),o(379,"code"),e(380,"null"),t(),e(381,`) dentro da lista de op\xE7\xF5es, \xE9 necess\xE1rio setar
a propriedade `),o(382,"code"),e(383,"p-indeterminate"),t(),e(384," como "),o(385,"code"),e(386,"true"),t(),e(387,", por padr\xE3o essa propriedade vem desabilitada ("),o(388,"code"),e(389,"false"),t(),e(390,")."),t(),o(391,"p"),e(392,"Quando essa propriedade \xE9 setada como "),o(393,"code"),e(394,"true"),t(),e(395,", o "),o(396,"em"),e(397,"po-checkbox-group"),t(),e(398,` passa a devolver um objeto completo para o
`),o(399,"code"),e(400,"ngModel"),t(),e(401,", diferente do array que cont\xE9m apenas os valores selecionados."),t()()(),o(402,"tr",14)(403,"td",15)(404,"div",16)(405,"span",17),e(406," (p-keydown)"),i(407,"br"),t()()(),o(408,"td",19)(409,"code",20),e(410,"EventEmitter"),t()(),o(411,"td",21),e(412,"-"),t(),o(413,"td",22)(414,"em")(415,"strong"),e(416,"(opcional)"),t()(),o(417,"p"),e(418,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),o(419,"code"),e(420,"KeyboardEvent"),t(),e(421," com informa\xE7\xF5es sobre a tecla."),t()()(),o(422,"tr",14)(423,"td",15)(424,"div",23)(425,"span",24),e(426," p-label"),i(427,"br"),t()()(),o(428,"td",19)(429,"code",25),e(430,"string"),t()(),o(431,"td",21),e(432,"-"),t(),o(433,"td",22)(434,"em")(435,"strong"),e(436,"(opcional)"),t()(),o(437,"p"),e(438,"Label do campo"),t()()(),o(439,"tr",14)(440,"td",15)(441,"div",23)(442,"span",24),e(443," p-label-text-wrap"),i(444,"br"),t()()(),o(445,"td",19)(446,"code",26),e(447,"boolean"),t()(),o(448,"td",21)(449,"p")(450,"code"),e(451,"false"),t()()(),o(452,"td",22)(453,"em")(454,"strong"),e(455,"(opcional)"),t()(),o(456,"p"),e(457,"Habilita a quebra autom\xE1tica do texto da propriedade "),o(458,"code"),e(459,"p-label"),t(),e(460,". Quando "),o(461,"code"),e(462,"p-label-text-wrap"),t(),e(463,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),o(464,"tr",14)(465,"td",15)(466,"div",23)(467,"span",24),e(468," name"),i(469,"br"),t()()(),o(470,"td",19)(471,"code",25),e(472,"string"),t()(),o(473,"td",21),e(474,"-"),t(),o(475,"td",22)(476,"p"),e(477,"Nome dos checkboxes"),t()()(),o(478,"tr",14)(479,"td",15)(480,"div",16)(481,"span",17),e(482," (ngModelChange)"),i(483,"br"),t()()(),o(484,"td",19)(485,"code",20),e(486,"EventEmitter"),t()(),o(487,"td",21),e(488,"-"),t(),o(489,"td",22)(490,"em")(491,"strong"),e(492,"(opcional)"),t()(),o(493,"p"),e(494,"Fun\xE7\xE3o para atualizar o "),o(495,"code"),e(496,"ngModel"),t(),e(497," do componente, necess\xE1rio quando n\xE3o for utilizado dentro da tag form."),t(),o(498,"p"),e(499,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),o(500,"code"),e(501,"strictTemplates"),t(),e(502,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),t(),o(503,"pre")(504,"code"),e(505,`<po-checkbox-group ... [ngModel]="checkboxgroupModel" (ngModelChange)="checkboxgroupModel = $event"> </po-checkbox-group>
`),t()()()(),o(506,"tr",14)(507,"td",15)(508,"div",23)(509,"span",24),e(510," p-optional"),i(511,"br"),t()()(),o(512,"td",19)(513,"code",26),e(514,"boolean"),t()(),o(515,"td",21)(516,"p")(517,"code"),e(518,"false"),t()()(),o(519,"td",22)(520,"em")(521,"strong"),e(522,"(opcional)"),t()(),o(523,"p"),e(524,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),o(525,"blockquote")(526,"p"),e(527,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),o(528,"ul")(529,"li"),e(530,"O campo conter "),o(531,"code"),e(532,"p-required"),t(),e(533,";"),t(),o(534,"li"),e(535,"N\xE3o possuir "),o(536,"code"),e(537,"p-help"),t(),e(538," e/ou "),o(539,"code"),e(540,"p-label"),t(),e(541,"."),t()()()(),o(542,"tr",14)(543,"td",15)(544,"div",23)(545,"span",24),e(546," p-options"),i(547,"br"),t()()(),o(548,"td",19)(549,"code",28),e(550,"PoCheckboxGroupOption[]"),t()(),o(551,"td",21),e(552,"-"),t(),o(553,"td",22)(554,"em")(555,"strong"),e(556,"(opcional)"),t()(),o(557,"p"),e(558,`Lista de op\xE7\xF5es que ser\xE3o exibidas
Nesta propriedade deve ser definido um array de objetos que implementam a interface PoCheckboxGroupOption`),t()()(),o(559,"tr",14)(560,"td",15)(561,"div",23)(562,"span",24),e(563," p-helper"),i(564,"br"),t()()(),o(565,"td",19)(566,"code",29),e(567,"PoHelperOptions "),t(),o(568,"code",25),e(569," string"),t()(),o(570,"td",21),e(571,"-"),t(),o(572,"td",22)(573,"em")(574,"strong"),e(575,"(opcional)"),t()(),o(576,"p"),e(577,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),o(578,"code"),e(579,"p-label"),t(),e(580," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),o(581,"code"),e(582,"p-label"),t(),e(583,"."),t(),o(584,"blockquote")(585,"p"),e(586,"Para mais informa\xE7\xF5es acesse: "),o(587,"a",30),e(588,"https://po-ui.io/documentation/po-helper"),t(),e(589,"."),t()(),o(590,"blockquote")(591,"p"),e(592,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),o(593,"code"),e(594,"p-additional-help-tooltip"),t(),e(595," e "),o(596,"code"),e(597,"p-additional-help"),t(),e(598,") ser\xE1 ignorado."),t()()()(),o(599,"tr",14)(600,"td",15)(601,"div",23)(602,"span",24),e(603," p-required"),i(604,"br"),t()()(),o(605,"td",19)(606,"code",26),e(607,"boolean"),t()(),o(608,"td",21)(609,"p")(610,"code"),e(611,"false"),t()()(),o(612,"td",22)(613,"em")(614,"strong"),e(615,"(opcional)"),t()(),o(616,"p"),e(617,"Define que o campo ser\xE1 obrigat\xF3rio."),t()()(),o(618,"tr",14)(619,"td",15)(620,"div",23)(621,"span",24),e(622," p-show-required"),i(623,"br"),t()()(),o(624,"td",19)(625,"code",26),e(626,"boolean"),t()(),o(627,"td",21),e(628,"-"),t(),o(629,"td",22)(630,"p"),e(631,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),o(632,"blockquote")(633,"p"),e(634,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),o(635,"ul")(636,"li"),e(637,"N\xE3o possuir "),o(638,"code"),e(639,"p-help"),t(),e(640," e/ou "),o(641,"code"),e(642,"p-label"),t(),e(643,"."),t()()()(),o(644,"tr",14)(645,"td",15)(646,"div",23)(647,"span",24),e(648," p-size"),i(649,"br"),t()()(),o(650,"td",19)(651,"code",25),e(652,"string"),t()(),o(653,"td",21)(654,"p")(655,"code"),e(656,"medium"),t()()(),o(657,"td",22)(658,"em")(659,"strong"),e(660,"(opcional)"),t()(),o(661,"p"),e(662,"Define o tamanho dos checkboxes do componente:"),t(),o(663,"ul")(664,"li")(665,"code"),e(666,"small"),t(),e(667,": 16x16 (dispon\xEDvel apenas para acessibilidade AA)."),t(),o(668,"li")(669,"code"),e(670,"medium"),t(),e(671,": 24x24."),t()(),o(672,"blockquote")(673,"p"),e(674,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),o(675,"code"),e(676,"medium"),t(),e(677,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),o(678,"a",31),e(679,"po-theme"),t(),e(680,"."),t()()()()(),o(681,"h3",10),e(682,"M\xE9todos"),t(),o(683,"table",32)(684,"tr",14)(685,"th",33)(686,"div",23)(687,"h4")(688,"span",24),e(689," focus "),t()()()()(),o(690,"tr",22)(691,"td",22)(692,"p"),e(693,"Fun\xE7\xE3o que atribui foco ao componente."),t(),o(694,"p"),e(695,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),o(696,"pre")(697,"code"),e(698,`import { PoCheckboxGroupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoCheckboxGroupComponent, { static: true }) checkbox: PoCheckboxGroupComponent;

focusCheckbox() {
  this.checkbox.focus();
}
`),t()()()()(),i(699,"br"),o(700,"table",32)(701,"tr",14)(702,"th",33)(703,"div",23)(704,"h4")(705,"span",24),e(706," showAdditionalHelp "),t()()()()(),o(707,"tr",22)(708,"td",22)(709,"p"),e(710,"M\xE9todo que exibe "),o(711,"code"),e(712,"p-helper"),t(),e(713," ou executa a a\xE7\xE3o definida em "),o(714,"code"),e(715,"p-helper{eventOnClick}"),t(),e(716," ou em "),o(717,"code"),e(718,"p-additionalHelp"),t(),e(719,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),o(720,"code"),e(721,"p-keydown"),t(),e(722,"."),t(),o(723,"blockquote")(724,"p"),e(725,"Exibe ou oculta o conte\xFAdo do componente "),o(726,"code"),e(727,"po-helper"),t(),e(728," quando o componente estiver com foco."),t()(),o(729,"pre")(730,"code"),e(731,`//Exemplo com p-label e p-helper
<po-checkbox-group
 #checkboxGroup
 ...
 p-label="Label do checkbox"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, checkboxGroup)"
></po-checkbox-group>
`),t()(),o(732,"pre")(733,"code"),e(734,`...
onKeyDown(event: KeyboardEvent, inp: PoCheckboxGroupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),i(735,"br"),o(736,"h3"),e(737,"Interfaces"),t(),o(738,"h4",34)(739,"code",5),e(740,"PoCheckboxGroupOption"),t()(),o(741,"div",2)(742,"p"),e(743,"Interface para as a\xE7\xF5es do componente po-checkbox-group."),t()(),o(744,"h4",10),e(745,"Propriedades"),t(),o(746,"table",11)(747,"tr",12)(748,"th",13),e(749,"Nome"),t(),o(750,"th",13),e(751,"Tipo"),t(),o(752,"th",13),e(753,"Descri\xE7\xE3o"),t()(),o(754,"tr",14)(755,"td",15)(756,"div",23)(757,"span",24),e(758," disabled"),i(759,"br"),t()()(),o(760,"td",19)(761,"code",26),e(762,"boolean"),t()(),o(763,"td",22)(764,"em")(765,"strong"),e(766,"(opcional)"),t()(),o(767,"p"),e(768,"Desabilita o checkbox, por padr\xE3o as op\xE7\xF5es sempre estar\xE3o habilitadas para o usu\xE1rio."),t(),o(769,"p"),e(770,`Mesmo desabilitado o desenvolvedor pode alterar o valor do item via c\xF3digo, mas n\xE3o ser\xE1 permitido ao
usu\xE1rio alterar a condi\xE7\xE3o do checkbox.`),t()()(),o(771,"tr",14)(772,"td",15)(773,"div",23)(774,"span",24),e(775," label"),i(776,"br"),t()()(),o(777,"td",19)(778,"code",25),e(779,"string"),t()(),o(780,"td",22)(781,"p"),e(782,"Texto exibido para o usu\xE1rio ao lado do checkbox."),t()()(),o(783,"tr",14)(784,"td",15)(785,"div",23)(786,"span",24),e(787," value"),i(788,"br"),t()()(),o(789,"td",19)(790,"code",25),e(791,"string"),t()(),o(792,"td",22)(793,"p"),e(794,"Valor retornado no model."),t(),o(795,"p"),e(796,"\xC9 poss\xEDvel usar os valores "),o(797,"code"),e(798,"true"),t(),e(799," e "),o(800,"code"),e(801,"false"),t(),e(802,", caso a propriedade "),o(803,"code"),e(804,"p-indeterminate"),t(),e(805," esteja setada como "),o(806,"code"),e(807,"true"),t(),e(808,`
passa a aceitar `),o(809,"code"),e(810,"null"),t(),e(811," tamb\xE9m, por padr\xE3o esse valor sempre ser\xE1 setado como "),o(812,"code"),e(813,"false"),t(),e(814,"."),t()()()()())},dependencies:[k],encapsulation:2})}return a})();var be=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,p){this.route=m,this.router=p}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let p=m.view;this.activeTab=p||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(p){return new(p||a)(N(Z),N($))};static \u0275cmp=h({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Checkbox Group",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(p,n){p&1&&(o(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),S("p-click",function(){return n.changeTab("doc")}),i(3,"sample-po-checkbox-group-doc"),t(),o(4,"po-tab",3),S("p-click",function(){return n.changeTab("web")}),i(5,"sample-po-checkbox-group-basic-view")(6,"sample-po-checkbox-group-labs-view")(7,"sample-po-checkbox-group-password-policy-view"),t()()()),p&2&&(s("p-actions",n.actions),r(2),s("p-active",n.activeTab==="doc"),r(2),s("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[ae,v,C,re,me,ce,ue],encapsulation:2})}return a})();var Oe=[{path:"",component:be}],he=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=O({type:a});static \u0275inj=T({imports:[R.forChild(Oe),R]})}return a})();var it=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=O({type:a});static \u0275inj=T({imports:[le,he]})}return a})();export{it as DocPoCheckboxGroupModule};
