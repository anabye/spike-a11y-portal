import{o as k,p as le}from"./chunk-B2ZAFZPZ.js";import{Ab as C,Fa as oe,Ma as ne,O as M,Q as ee,Xa as ie,a as B,nb as ae,ra as z,sa as te,v as W,zb as v}from"./chunk-QYU7N2WH.js";import{Aa as s,Cb as _,Da as w,Dc as q,Ec as L,Fc as V,Gc as F,Hc as A,La as o,Ma as t,N as T,Na as i,Q as K,Qb as Y,Ra as D,Sa as S,U as c,Uc as Z,V as u,Wc as $,Yc as j,bb as Q,cb as e,eb as y,gb as x,hb as E,ib as g,ja as r,ka as N,kb as H,lb as P,mb as U,qa as h,ra as O,rb as J,sb as X}from"./chunk-KZJHT32G.js";var Ee=()=>({value:"1",label:"Option 1"}),ge=()=>({value:"2",label:"Option 2"}),Se=(a,xe)=>[a,xe],pe=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-checkbox-group-basic"]],standalone:!1,decls:1,vars:6,consts:[["name","checkboxGroup","p-label","PO Checkbox Group",3,"p-options"]],template:function(p,n){p&1&&i(0,"po-checkbox-group",0),p&2&&s("p-options",U(3,Se,H(1,Ee),H(2,ge)))},dependencies:[M],encapsulation:2})}return a})();var ve=a=>({"docs-sample-code-tabs":a}),re=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-checkbox-group-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(i(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Checkbox Group Basic"),t(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-checkbox-group-basic/sample-po-checkbox-group-basic.component.html"),t(),o(13,"pre",7),e(14,`<po-checkbox-group
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
`),t()()()()(),o(21,"div",10),i(22,"sample-po-checkbox-group-basic"),t(),i(23,"hr")),p&2&&(r(5),w("po-icon "+n.sampleCodeButtonIcon),r(),y(" ",n.sampleCodeButtonLabel,""),r(),s("ngClass",P(4,ve,n.hideSampleCodeTabs)))},dependencies:[_,k,v,C,pe],encapsulation:2})}return a})();var de=(()=>{class a{additionalHelpTooltip;checkboxGroup;columns;disabled;event;help;indeterminate;label;option;options;properties;fieldErrorMessage;size;columnOptions=[{label:"1 column",value:1},{label:"2 columns",value:2},{label:"3 columns",value:3},{label:"4 columns",value:4}];propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"indeterminate",label:"Indeterminate"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}addOption(){this.options=[...this.options,this.option],this.clearOption()}changeEvent(m){this.event=m}restore(){this.additionalHelpTooltip="",this.checkboxGroup=void 0,this.columns=void 0,this.disabled=!1,this.event=void 0,this.help="",this.indeterminate=void 0,this.label=void 0,this.options=[],this.properties=[],this.fieldErrorMessage="",this.size="medium",this.clearOption()}clearOption(){this.option={label:void 0,value:void 0}}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-checkbox-group-labs"]],standalone:!1,decls:26,vars:33,consts:[["fOption","ngForm"],["f","ngForm"],["name","checkboxGroup",3,"ngModelChange","p-change","p-keydown","ngModel","p-additional-help-tooltip","p-columns","p-disabled","p-help","p-indeterminate","p-label","p-optional","p-options","p-required","p-field-error-message","p-error-limit","p-show-required","p-label-text-wrap","p-size"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","optionValue","p-clean","","p-label","Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","optionLabel","p-clean","","p-label","Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disabled","p-label","Option Disabled",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add option",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","columns","p-columns","4","p-label","Columns",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(p,n){if(p&1){let d=D();o(0,"po-checkbox-group",2),g("ngModelChange",function(l){return c(d),E(n.checkboxGroup,l)||(n.checkboxGroup=l),u(l)}),S("p-change",function(){return c(d),u(n.changeEvent("p-change"))})("p-keydown",function(){return c(d),u(n.changeEvent("p-keydown"))}),t(),i(1,"po-divider"),o(2,"div",3),i(3,"po-info",4),J(4,"json"),i(5,"po-info",5),t(),i(6,"po-divider"),o(7,"form",null,0)(9,"po-input",6),g("ngModelChange",function(l){return c(d),E(n.option.value,l)||(n.option.value=l),u(l)}),t(),o(10,"po-input",7),g("ngModelChange",function(l){return c(d),E(n.option.label,l)||(n.option.label=l),u(l)}),t(),o(11,"po-switch",8),g("ngModelChange",function(l){return c(d),E(n.option.disabled,l)||(n.option.disabled=l),u(l)}),t(),o(12,"div",3)(13,"po-button",9),S("p-click",function(){return c(d),u(n.addOption())}),t()()(),i(14,"po-divider"),o(15,"form",null,1)(17,"po-input",10),g("ngModelChange",function(l){return c(d),E(n.label,l)||(n.label=l),u(l)}),t(),o(18,"po-input",11),g("ngModelChange",function(l){return c(d),E(n.help,l)||(n.help=l),u(l)}),t(),o(19,"po-input",12),g("ngModelChange",function(l){return c(d),E(n.additionalHelpTooltip,l)||(n.additionalHelpTooltip=l),u(l)}),t(),o(20,"po-input",13),g("ngModelChange",function(l){return c(d),E(n.fieldErrorMessage,l)||(n.fieldErrorMessage=l),u(l)}),t(),o(21,"po-checkbox-group",14),g("ngModelChange",function(l){return c(d),E(n.properties,l)||(n.properties=l),u(l)}),t(),o(22,"po-radio-group",15),g("ngModelChange",function(l){return c(d),E(n.columns,l)||(n.columns=l),u(l)}),t(),o(23,"po-radio-group",16),g("ngModelChange",function(l){return c(d),E(n.size,l)||(n.size=l),u(l)}),t(),o(24,"div",3)(25,"po-button",17),S("p-click",function(){return c(d),u(n.restore())}),t()()()}if(p&2){let d=Q(8);x("ngModel",n.checkboxGroup),s("p-additional-help-tooltip",n.additionalHelpTooltip)("p-columns",n.columns)("p-disabled",n.properties.includes("disabled"))("p-help",n.help)("p-indeterminate",n.properties.includes("indeterminate"))("p-label",n.label)("p-optional",n.properties.includes("optional"))("p-options",n.options)("p-required",n.properties.includes("required"))("p-field-error-message",n.fieldErrorMessage)("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit"))("p-show-required",n.properties.includes("showRequired"))("p-label-text-wrap",n.properties.includes("labelTextWrap"))("p-size",n.size),r(3),s("p-value",X(4,31,n.checkboxGroup)),r(2),s("p-value",n.event),r(4),x("ngModel",n.option.value),r(),x("ngModel",n.option.label),r(),x("ngModel",n.option.disabled),r(2),s("p-disabled",d.invalid),r(4),x("ngModel",n.label),r(),x("ngModel",n.help),r(),x("ngModel",n.additionalHelpTooltip),r(),x("ngModel",n.fieldErrorMessage),r(),x("ngModel",n.properties),s("p-options",n.propertiesOptions),r(),x("ngModel",n.columns),s("p-options",n.columnOptions),r(),x("ngModel",n.size),s("p-options",n.sizeOptions)}},dependencies:[A,q,L,F,V,W,B,M,ee,oe,z,ie,Y],encapsulation:2})}return a})();var ye=a=>({"docs-sample-code-tabs":a}),me=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-checkbox-group-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(i(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Checkbox Group Labs"),t(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-checkbox-group-labs/sample-po-checkbox-group-labs.component.html"),t(),o(13,"pre",7),e(14,`<po-checkbox-group
  name="checkboxGroup"
  [(ngModel)]="checkboxGroup"
  [p-additional-help-tooltip]="additionalHelpTooltip"
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

  <po-input
    class="po-md-6"
    name="additionalHelpTooltip"
    [(ngModel)]="additionalHelpTooltip"
    p-clean
    p-label="Additional Help"
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
  additionalHelpTooltip: string;
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
    this.additionalHelpTooltip = '';
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
`),t()()()()(),o(21,"div",10),i(22,"sample-po-checkbox-group-labs"),t(),i(23,"hr")),p&2&&(r(5),w("po-icon "+n.sampleCodeButtonIcon),r(),y(" ",n.sampleCodeButtonLabel,""),r(),s("ngClass",P(4,ye,n.hideSampleCodeTabs)))},dependencies:[_,k,v,C,de],encapsulation:2})}return a})();var se=(()=>{class a{poNotification=K(te);attempts;expiration;maxAttempts;periodExpiration;auditOptions=[{value:"1",label:"Functional menu"},{value:"2",label:"Online panel"},{value:"3",label:"Internet browser"},{value:"4",label:"Browser details"},{value:"5",label:"Transparent panel"},{value:"6",label:"Browser refresh"}];systemOptions=[{value:"1",label:"Audit updates in the data dictionary"},{value:"2",label:"Audit updates in the user registry"},{value:"3",label:"Audit authentication / access"},{value:"4",label:"Audit rejection of access to resources"}];confirm(){this.poNotification.success("Settings saved successfully!")}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-checkbox-group-password-policy"]],standalone:!1,decls:19,vars:7,consts:[["g","ngForm"],[1,"po-font-subtitle"],[1,"po-row"],["name","system","p-label","System features",1,"po-lg-12",3,"p-options"],["name","audit","p-label","Audit rules",1,"po-lg-12",3,"p-options"],["name","expiration","p-label","Password expiration","p-label-off","Desactive","p-label-on","Actived",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","periodExpiration","p-label","Period (in days)","p-maxlength","3",1,"po-lg-6",3,"p-disabled"],["name","attempts","p-label","Restrict access attempts","p-label-off","Desactive","p-label-on","Actived",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","maxAttempts","p-label","Maximum number of attempts","p-maxlength","3",1,"po-lg-6",3,"ngModelChange","ngModel","p-disabled"],["p-label","Apply password policy",1,"po-offset-lg-9","po-lg-3","po-offset-xl-9",3,"p-click"]],template:function(p,n){if(p&1){let d=D();o(0,"div",1),e(1,"Password Rules"),t(),i(2,"po-divider"),o(3,"form",null,0)(5,"div",2),i(6,"po-checkbox-group",3),t(),i(7,"po-divider"),o(8,"div",2),i(9,"po-checkbox-group",4),t(),i(10,"po-divider"),o(11,"div",2)(12,"po-switch",5),g("ngModelChange",function(l){return c(d),E(n.expiration,l)||(n.expiration=l),u(l)}),t(),i(13,"po-number",6),t(),o(14,"div",2)(15,"po-switch",7),g("ngModelChange",function(l){return c(d),E(n.attempts,l)||(n.attempts=l),u(l)}),t(),o(16,"po-number",8),g("ngModelChange",function(l){return c(d),E(n.maxAttempts,l)||(n.maxAttempts=l),u(l)}),t()(),o(17,"div",2)(18,"po-button",9),S("p-click",function(){return c(d),u(n.confirm())}),t()()()}p&2&&(r(6),s("p-options",n.systemOptions),r(3),s("p-options",n.auditOptions),r(3),x("ngModel",n.expiration),r(),s("p-disabled",!n.expiration),r(2),x("ngModel",n.attempts),r(),x("ngModel",n.maxAttempts),s("p-disabled",!n.attempts))},dependencies:[A,q,L,F,V,W,B,M,ne,z],encapsulation:2})}return a})();var Me=a=>({"docs-sample-code-tabs":a}),ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-checkbox-group-password-policy-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(i(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Checkbox Group \u2013 Security policy"),t(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-checkbox-group-password-policy/sample-po-checkbox-group-password-policy.component.html"),t(),o(13,"pre",7),e(14,`<div class="po-font-subtitle">Password Rules</div>

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
`),t()()()()(),o(21,"div",10),i(22,"sample-po-checkbox-group-password-policy"),t(),i(23,"hr")),p&2&&(r(5),w("po-icon "+n.sampleCodeButtonIcon),r(),y(" ",n.sampleCodeButtonLabel,""),r(),s("ngClass",P(4,Me,n.hideSampleCodeTabs)))},dependencies:[_,k,v,C,se],encapsulation:2})}return a})();var ue=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-checkbox-group-doc"]],standalone:!1,decls:812,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-radio-group"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoCheckboxGroupOption[]"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"]],template:function(p,n){p&1&&(o(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),o(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
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
`),t()(),o(66,"h4",10),e(67,"Propriedades"),t(),o(68,"table",11)(69,"tr",12)(70,"th",13),e(71,"Nome"),t(),o(72,"th",13),e(73,"Tipo"),t(),o(74,"th",13),e(75,"Padr\xE3o"),t(),o(76,"th",13),e(77,"Descri\xE7\xE3o"),t()(),o(78,"tr",14)(79,"td",15)(80,"div",16)(81,"span",17),e(82," (p-additional-help)"),i(83,"br"),t()(),o(84,"div",18),e(85,"Deprecated"),t()(),o(86,"td",19)(87,"code",20),e(88,"EventEmitter"),t()(),o(89,"td",21),e(90,"-"),t(),o(91,"td",22)(92,"em")(93,"strong"),e(94,"(opcional)"),t()(),o(95,"p"),e(96,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),o(97,"code"),e(98,"p-help"),t(),e(99,"."),t(),o(100,"blockquote")(101,"p"),e(102,"Essa propriedade est\xE1 "),o(103,"strong"),e(104,"depreciada"),t(),e(105," e ser\xE1 removida na vers\xE3o "),o(106,"code"),e(107,"23.x.x"),t(),e(108,". Recomendamos utilizar a propriedade "),o(109,"code"),e(110,"p-helper"),t(),e(111," que oferece mais recursos e flexibilidade."),t()()()(),o(112,"tr",14)(113,"td",15)(114,"div",23)(115,"span",24),e(116," p-additional-help-tooltip"),i(117,"br"),t()(),o(118,"div",18),e(119,"Deprecated"),t()(),o(120,"td",19)(121,"code",25),e(122,"string"),t()(),o(123,"td",21),e(124,"-"),t(),o(125,"td",22)(126,"em")(127,"strong"),e(128,"(opcional)"),t()(),o(129,"p"),e(130,"Exibe um \xEDcone de ajuda adicional ao "),o(131,"code"),e(132,"p-help"),t(),e(133,`, com o texto desta propriedade no tooltip.
Se o evento `),o(134,"code"),e(135,"p-additional-help"),t(),e(136,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),o(137,"strong"),e(138,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),o(139,"blockquote")(140,"p"),e(141,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),o(142,"blockquote")(143,"p"),e(144,"Essa propriedade est\xE1 "),o(145,"strong"),e(146,"depreciada"),t(),e(147," e ser\xE1 removida na vers\xE3o "),o(148,"code"),e(149,"23.x.x"),t(),e(150,". Recomendamos utilizar a propriedade "),o(151,"code"),e(152,"p-helper"),t(),e(153," que oferece mais recursos e flexibilidade."),t()()()(),o(154,"tr",14)(155,"td",15)(156,"div",23)(157,"span",24),e(158," p-append-in-body"),i(159,"br"),t()()(),o(160,"td",19)(161,"code",26),e(162,"boolean"),t()(),o(163,"td",21)(164,"p")(165,"code"),e(166,"false"),t()()(),o(167,"td",22)(168,"em")(169,"strong"),e(170,"(opcional)"),t()(),o(171,"p"),e(172,"Define que o tooltip ("),o(173,"code"),e(174,"p-additional-help-tooltip"),t(),e(175," e/ou "),o(176,"code"),e(177,"p-error-limit"),t(),e(178,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),o(179,"blockquote")(180,"p"),e(181,"Quando utilizado com "),o(182,"code"),e(183,"p-additional-help-tooltip"),t(),e(184,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),o(185,"tr",14)(186,"td",15)(187,"div",23)(188,"span",24),e(189," p-auto-focus"),i(190,"br"),t()()(),o(191,"td",19)(192,"code",26),e(193,"boolean"),t()(),o(194,"td",21)(195,"p")(196,"code"),e(197,"false"),t()()(),o(198,"td",22)(199,"em")(200,"strong"),e(201,"(opcional)"),t()(),o(202,"p"),e(203,"Aplica foco no elemento ao ser iniciado."),t(),o(204,"blockquote")(205,"p"),e(206,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),o(207,"tr",14)(208,"td",15)(209,"div",16)(210,"span",17),e(211," (p-change)"),i(212,"br"),t()()(),o(213,"td",19)(214,"code",20),e(215,"EventEmitter"),t()(),o(216,"td",21),e(217,"-"),t(),o(218,"td",22)(219,"em")(220,"strong"),e(221,"(opcional)"),t()(),o(222,"p"),e(223,"Evento disparado ao alterar valor do campo"),t()()(),o(224,"tr",14)(225,"td",15)(226,"div",23)(227,"span",24),e(228," p-columns"),i(229,"br"),t()()(),o(230,"td",19)(231,"code",27),e(232,"number"),t()(),o(233,"td",21)(234,"p")(235,"code"),e(236,"2"),t()()(),o(237,"td",22)(238,"em")(239,"strong"),e(240,"(opcional)"),t()(),o(241,"p"),e(242,"Possibilita definir a quantidade de colunas para exibi\xE7\xE3o dos itens do "),o(243,"em"),e(244,"checkbox"),t(),e(245,"."),t(),o(246,"ul")(247,"li"),e(248,"\xC9 poss\xEDvel exibir as op\xE7\xF5es entre "),o(249,"code"),e(250,"1"),t(),e(251," e "),o(252,"code"),e(253,"4"),t(),e(254," colunas."),t(),o(255,"li"),e(256,"Para resolu\xE7\xE3o "),o(257,"code"),e(258,"sm"),t(),e(259," a colunagem invariavelmente passa para "),o(260,"code"),e(261,"1"),t(),e(262," coluna."),t(),o(263,"li"),e(264,"Quando se trata de resolu\xE7\xE3o "),o(265,"code"),e(266,"md"),t(),e(267," e o valor estabelecido para colunas for superior a "),o(268,"code"),e(269,"2"),t(),e(270,`,
o `),o(271,"em"),e(272,"grid system"),t(),e(273," ser\xE1 composto por "),o(274,"code"),e(275,"2"),t(),e(276," colunas."),t(),o(277,"li"),e(278,"Para evitar a quebra de linha, prefira a utiliza\xE7\xE3o de "),o(279,"code"),e(280,"1"),t(),e(281," coluna para op\xE7\xF5es com textos grandes."),t()()()(),o(282,"tr",14)(283,"td",15)(284,"div",23)(285,"span",24),e(286," p-disabled"),i(287,"br"),t()()(),o(288,"td",19)(289,"code",26),e(290,"boolean"),t()(),o(291,"td",21)(292,"p")(293,"code"),e(294,"false"),t()()(),o(295,"td",22)(296,"em")(297,"strong"),e(298,"(opcional)"),t()(),o(299,"p"),e(300,"Desabilita todos os itens do checkbox."),t()()(),o(301,"tr",14)(302,"td",15)(303,"div",23)(304,"span",24),e(305," p-error-limit"),i(306,"br"),t()()(),o(307,"td",19)(308,"code",26),e(309,"boolean"),t()(),o(310,"td",21)(311,"p")(312,"code"),e(313,"false"),t()()(),o(314,"td",22)(315,"em")(316,"strong"),e(317,"(opcional)"),t()(),o(318,"p"),e(319,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),o(320,"blockquote")(321,"p"),e(322,"Caso essa propriedade seja definida como "),o(323,"code"),e(324,"true"),t(),e(325,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),o(326,"tr",14)(327,"td",15)(328,"div",23)(329,"span",24),e(330," p-field-error-message"),i(331,"br"),t()()(),o(332,"td",19)(333,"code",25),e(334,"string"),t()(),o(335,"td",21),e(336,"-"),t(),o(337,"td",22)(338,"em")(339,"strong"),e(340,"(opcional)"),t()(),o(341,"p"),e(342,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),t(),o(343,"blockquote")(344,"p"),e(345,"Necess\xE1rio que a propriedade "),o(346,"code"),e(347,"p-required"),t(),e(348," esteja habilitada."),t()()()(),o(349,"tr",14)(350,"td",15)(351,"div",23)(352,"span",24),e(353," p-help"),i(354,"br"),t()()(),o(355,"td",19)(356,"code",25),e(357,"string"),t()(),o(358,"td",21),e(359,"-"),t(),o(360,"td",22)(361,"em")(362,"strong"),e(363,"(opcional)"),t()(),o(364,"p"),e(365,"Texto de apoio do campo"),t()()(),o(366,"tr",14)(367,"td",15)(368,"div",23)(369,"span",24),e(370," p-indeterminate"),i(371,"br"),t()()(),o(372,"td",19)(373,"code",26),e(374,"boolean"),t()(),o(375,"td",21)(376,"p")(377,"code"),e(378,"false"),t()()(),o(379,"td",22)(380,"em")(381,"strong"),e(382,"(opcional)"),t()(),o(383,"p"),e(384,"Caso exista a necessidade de usar o valor indeterminado ("),o(385,"code"),e(386,"null"),t(),e(387,`) dentro da lista de op\xE7\xF5es, \xE9 necess\xE1rio setar
a propriedade `),o(388,"code"),e(389,"p-indeterminate"),t(),e(390," como "),o(391,"code"),e(392,"true"),t(),e(393,", por padr\xE3o essa propriedade vem desabilitada ("),o(394,"code"),e(395,"false"),t(),e(396,")."),t(),o(397,"p"),e(398,"Quando essa propriedade \xE9 setada como "),o(399,"code"),e(400,"true"),t(),e(401,", o "),o(402,"em"),e(403,"po-checkbox-group"),t(),e(404,` passa a devolver um objeto completo para o
`),o(405,"code"),e(406,"ngModel"),t(),e(407,", diferente do array que cont\xE9m apenas os valores selecionados."),t()()(),o(408,"tr",14)(409,"td",15)(410,"div",16)(411,"span",17),e(412," (p-keydown)"),i(413,"br"),t()()(),o(414,"td",19)(415,"code",20),e(416,"EventEmitter"),t()(),o(417,"td",21),e(418,"-"),t(),o(419,"td",22)(420,"em")(421,"strong"),e(422,"(opcional)"),t()(),o(423,"p"),e(424,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),o(425,"code"),e(426,"KeyboardEvent"),t(),e(427," com informa\xE7\xF5es sobre a tecla."),t()()(),o(428,"tr",14)(429,"td",15)(430,"div",23)(431,"span",24),e(432," p-label"),i(433,"br"),t()()(),o(434,"td",19)(435,"code",25),e(436,"string"),t()(),o(437,"td",21),e(438,"-"),t(),o(439,"td",22)(440,"em")(441,"strong"),e(442,"(opcional)"),t()(),o(443,"p"),e(444,"Label do campo"),t()()(),o(445,"tr",14)(446,"td",15)(447,"div",23)(448,"span",24),e(449," p-label-text-wrap"),i(450,"br"),t()()(),o(451,"td",19)(452,"code",26),e(453,"boolean"),t()(),o(454,"td",21)(455,"p")(456,"code"),e(457,"false"),t()()(),o(458,"td",22)(459,"em")(460,"strong"),e(461,"(opcional)"),t()(),o(462,"p"),e(463,"Habilita a quebra autom\xE1tica do texto da propriedade "),o(464,"code"),e(465,"p-label"),t(),e(466,". Quando "),o(467,"code"),e(468,"p-label-text-wrap"),t(),e(469,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),o(470,"tr",14)(471,"td",15)(472,"div",23)(473,"span",24),e(474," name"),i(475,"br"),t()()(),o(476,"td",19)(477,"code",25),e(478,"string"),t()(),o(479,"td",21),e(480,"-"),t(),o(481,"td",22)(482,"p"),e(483,"Nome dos checkboxes"),t()()(),o(484,"tr",14)(485,"td",15)(486,"div",16)(487,"span",17),e(488," (ngModelChange)"),i(489,"br"),t()()(),o(490,"td",19)(491,"code",20),e(492,"EventEmitter"),t()(),o(493,"td",21),e(494,"-"),t(),o(495,"td",22)(496,"em")(497,"strong"),e(498,"(opcional)"),t()(),o(499,"p"),e(500,"Fun\xE7\xE3o para atualizar o "),o(501,"code"),e(502,"ngModel"),t(),e(503," do componente, necess\xE1rio quando n\xE3o for utilizado dentro da tag form."),t(),o(504,"p"),e(505,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),o(506,"code"),e(507,"strictTemplates"),t(),e(508,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),t(),o(509,"pre")(510,"code"),e(511,`<po-checkbox-group ... [ngModel]="checkboxgroupModel" (ngModelChange)="checkboxgroupModel = $event"> </po-checkbox-group>
`),t()()()(),o(512,"tr",14)(513,"td",15)(514,"div",23)(515,"span",24),e(516," p-optional"),i(517,"br"),t()()(),o(518,"td",19)(519,"code",26),e(520,"boolean"),t()(),o(521,"td",21)(522,"p")(523,"code"),e(524,"false"),t()()(),o(525,"td",22)(526,"em")(527,"strong"),e(528,"(opcional)"),t()(),o(529,"p"),e(530,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),o(531,"blockquote")(532,"p"),e(533,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),o(534,"ul")(535,"li"),e(536,"O campo conter "),o(537,"code"),e(538,"p-required"),t(),e(539,";"),t(),o(540,"li"),e(541,"N\xE3o possuir "),o(542,"code"),e(543,"p-help"),t(),e(544," e/ou "),o(545,"code"),e(546,"p-label"),t(),e(547,"."),t()()()(),o(548,"tr",14)(549,"td",15)(550,"div",23)(551,"span",24),e(552," p-options"),i(553,"br"),t()()(),o(554,"td",19)(555,"code",28),e(556,"PoCheckboxGroupOption[]"),t()(),o(557,"td",21),e(558,"-"),t(),o(559,"td",22)(560,"em")(561,"strong"),e(562,"(opcional)"),t()(),o(563,"p"),e(564,`Lista de op\xE7\xF5es que ser\xE3o exibidas
Nesta propriedade deve ser definido um array de objetos que implementam a interface PoCheckboxGroupOption`),t()()(),o(565,"tr",14)(566,"td",15)(567,"div",23)(568,"span",24),e(569," p-helper"),i(570,"br"),t()()(),o(571,"td",19)(572,"code",29),e(573,"PoHelperOptions "),t(),o(574,"code",25),e(575," string"),t()(),o(576,"td",21),e(577,"-"),t(),o(578,"td",22)(579,"em")(580,"strong"),e(581,"(opcional)"),t()(),o(582,"p"),e(583,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label."),t(),o(584,"blockquote")(585,"p"),e(586,"Caso o "),o(587,"code"),e(588,"p-label"),t(),e(589,` n\xE3o esteja definido, o componente po-helper n\xE3o ser\xE1 exibido.
Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional (`),o(590,"code"),e(591,"p-additional-help-tooltip"),t(),e(592," e "),o(593,"code"),e(594,"p-additional-help"),t(),e(595,") ser\xE1 ignorado."),t()()()(),o(596,"tr",14)(597,"td",15)(598,"div",23)(599,"span",24),e(600," p-required"),i(601,"br"),t()()(),o(602,"td",19)(603,"code",26),e(604,"boolean"),t()(),o(605,"td",21)(606,"p")(607,"code"),e(608,"false"),t()()(),o(609,"td",22)(610,"em")(611,"strong"),e(612,"(opcional)"),t()(),o(613,"p"),e(614,"Define que o campo ser\xE1 obrigat\xF3rio."),t()()(),o(615,"tr",14)(616,"td",15)(617,"div",23)(618,"span",24),e(619," p-show-required"),i(620,"br"),t()()(),o(621,"td",19)(622,"code",26),e(623,"boolean"),t()(),o(624,"td",21),e(625,"-"),t(),o(626,"td",22)(627,"p"),e(628,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),o(629,"blockquote")(630,"p"),e(631,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),o(632,"ul")(633,"li"),e(634,"N\xE3o possuir "),o(635,"code"),e(636,"p-help"),t(),e(637," e/ou "),o(638,"code"),e(639,"p-label"),t(),e(640,"."),t()()()(),o(641,"tr",14)(642,"td",15)(643,"div",23)(644,"span",24),e(645," p-size"),i(646,"br"),t()()(),o(647,"td",19)(648,"code",25),e(649,"string"),t()(),o(650,"td",21)(651,"p")(652,"code"),e(653,"medium"),t()()(),o(654,"td",22)(655,"em")(656,"strong"),e(657,"(opcional)"),t()(),o(658,"p"),e(659,"Define o tamanho dos checkboxes do componente:"),t(),o(660,"ul")(661,"li")(662,"code"),e(663,"small"),t(),e(664,": 16x16 (dispon\xEDvel apenas para acessibilidade AA)."),t(),o(665,"li")(666,"code"),e(667,"medium"),t(),e(668,": 24x24."),t()(),o(669,"blockquote")(670,"p"),e(671,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),o(672,"code"),e(673,"medium"),t(),e(674,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),o(675,"a",30),e(676,"po-theme"),t(),e(677,"."),t()()()()(),o(678,"h3",10),e(679,"M\xE9todos"),t(),o(680,"table",31)(681,"tr",14)(682,"th",32)(683,"div",23)(684,"h4")(685,"span",24),e(686," focus "),t()()()()(),o(687,"tr",22)(688,"td",22)(689,"p"),e(690,"Fun\xE7\xE3o que atribui foco ao componente."),t(),o(691,"p"),e(692,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),o(693,"pre")(694,"code"),e(695,`import { PoCheckboxGroupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoCheckboxGroupComponent, { static: true }) checkbox: PoCheckboxGroupComponent;

focusCheckbox() {
  this.checkbox.focus();
}
`),t()()()()(),i(696,"br"),o(697,"table",31)(698,"tr",14)(699,"th",32)(700,"div",23)(701,"h4")(702,"span",24),e(703," showAdditionalHelp "),t()()()()(),o(704,"tr",22)(705,"td",22)(706,"p"),e(707,"M\xE9todo que exibe "),o(708,"code"),e(709,"p-additionalHelpTooltip"),t(),e(710," ou executa a a\xE7\xE3o definida em "),o(711,"code"),e(712,"p-additionalHelp"),t(),e(713,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),o(714,"code"),e(715,"p-keydown"),t(),e(716,"."),t(),o(717,"blockquote")(718,"p"),e(719,"Exibe ou oculta o conte\xFAdo do componente "),o(720,"code"),e(721,"po-helper"),t(),e(722," quando o componente estiver com foco e com label vis\xEDvel."),t()(),o(723,"pre")(724,"code"),e(725,`<po-checkbox-group
 #checkboxGroup
 ...
 p-additional-help-tooltip="Mensagem de ajuda complementar"
 (p-keydown)="onKeyDown($event, checkboxGroup)"
></po-checkbox-group>
`),t()(),o(726,"pre")(727,"code"),e(728,`//Exemplo com p-label e p-helper
<po-checkbox-group
 #checkboxGroup
 ...
 p-label="Label do checkbox"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, checkboxGroup)"
></po-checkbox-group>
`),t()(),o(729,"pre")(730,"code"),e(731,`...
onKeyDown(event: KeyboardEvent, inp: PoCheckboxGroupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),i(732,"br"),o(733,"h3"),e(734,"Interfaces"),t(),o(735,"h4",33)(736,"code",5),e(737,"PoCheckboxGroupOption"),t()(),o(738,"div",2)(739,"p"),e(740,"Interface para as a\xE7\xF5es do componente po-checkbox-group."),t()(),o(741,"h4",10),e(742,"Propriedades"),t(),o(743,"table",11)(744,"tr",12)(745,"th",13),e(746,"Nome"),t(),o(747,"th",13),e(748,"Tipo"),t(),o(749,"th",13),e(750,"Descri\xE7\xE3o"),t()(),o(751,"tr",14)(752,"td",15)(753,"div",23)(754,"span",24),e(755," disabled"),i(756,"br"),t()()(),o(757,"td",19)(758,"code",26),e(759,"boolean"),t()(),o(760,"td",22)(761,"em")(762,"strong"),e(763,"(opcional)"),t()(),o(764,"p"),e(765,"Desabilita o checkbox, por padr\xE3o as op\xE7\xF5es sempre estar\xE3o habilitadas para o usu\xE1rio."),t(),o(766,"p"),e(767,`Mesmo desabilitado o desenvolvedor pode alterar o valor do item via c\xF3digo, mas n\xE3o ser\xE1 permitido ao
usu\xE1rio alterar a condi\xE7\xE3o do checkbox.`),t()()(),o(768,"tr",14)(769,"td",15)(770,"div",23)(771,"span",24),e(772," label"),i(773,"br"),t()()(),o(774,"td",19)(775,"code",25),e(776,"string"),t()(),o(777,"td",22)(778,"p"),e(779,"Texto exibido para o usu\xE1rio ao lado do checkbox."),t()()(),o(780,"tr",14)(781,"td",15)(782,"div",23)(783,"span",24),e(784," value"),i(785,"br"),t()()(),o(786,"td",19)(787,"code",25),e(788,"string"),t()(),o(789,"td",22)(790,"p"),e(791,"Valor retornado no model."),t(),o(792,"p"),e(793,"\xC9 poss\xEDvel usar os valores "),o(794,"code"),e(795,"true"),t(),e(796," e "),o(797,"code"),e(798,"false"),t(),e(799,", caso a propriedade "),o(800,"code"),e(801,"p-indeterminate"),t(),e(802," esteja setada como "),o(803,"code"),e(804,"true"),t(),e(805,`
passa a aceitar `),o(806,"code"),e(807,"null"),t(),e(808," tamb\xE9m, por padr\xE3o esse valor sempre ser\xE1 setado como "),o(809,"code"),e(810,"false"),t(),e(811,"."),t()()()()())},dependencies:[k],encapsulation:2})}return a})();var be=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,p){this.route=m,this.router=p}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let p=m.view;this.activeTab=p||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(p){return new(p||a)(N(Z),N($))};static \u0275cmp=h({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Checkbox Group",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(p,n){p&1&&(o(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),S("p-click",function(){return n.changeTab("doc")}),i(3,"sample-po-checkbox-group-doc"),t(),o(4,"po-tab",3),S("p-click",function(){return n.changeTab("web")}),i(5,"sample-po-checkbox-group-basic-view")(6,"sample-po-checkbox-group-labs-view")(7,"sample-po-checkbox-group-password-policy-view"),t()()()),p&2&&(s("p-actions",n.actions),r(2),s("p-active",n.activeTab==="doc"),r(2),s("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[ae,v,C,re,me,ce,ue],encapsulation:2})}return a})();var Oe=[{path:"",component:be}],he=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=O({type:a});static \u0275inj=T({imports:[j.forChild(Oe),j]})}return a})();var it=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=O({type:a});static \u0275inj=T({imports:[le,he]})}return a})();export{it as DocPoCheckboxGroupModule};
