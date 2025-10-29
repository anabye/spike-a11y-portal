import{o as C,p as le}from"./chunk-RMC2BKSN.js";import{Ab as x,Eb as j,Fa as ne,O as te,Q as ie,Xa as oe,a as ee,nb as ae,qa as O,ra as M,sa as I,v as V,za as H,zb as w}from"./chunk-S5N4D4VC.js";import{$c as K,Aa as d,Da as P,Fb as T,Gc as F,Hc as L,Ic as W,Jc as z,Kc as D,La as i,Ma as t,N as B,Na as a,Nc as Q,Oc as J,Q as A,Ra as N,Sa as u,Sc as X,U as h,V as b,Xc as Z,Zc as $,cb as e,db as R,eb as y,gb as f,hb as E,ib as g,ja as p,ka as U,ob as _,qa as c,ra as q}from"./chunk-CBLD3XJL.js";var re=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-switch-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","switch","p-label","PO Switch"]],template:function(l,n){l&1&&a(0,"po-switch",0)},dependencies:[M],encapsulation:2})}return o})();var ve=o=>({"docs-sample-code-tabs":o}),pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-switch-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(a(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Switch Basic"),t(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-switch-basic/sample-po-switch-basic.component.html"),t(),i(13,"pre",7),e(14,`<po-switch name="switch" p-label="PO Switch"> </po-switch>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-switch-basic/sample-po-switch-basic.component.ts"),t(),i(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-switch-basic',
  templateUrl: './sample-po-switch-basic.component.html',
  standalone: false
})
export class SamplePoSwitchBasicComponent {}
`),t()()()()(),i(21,"div",10),a(22,"sample-po-switch-basic"),t(),a(23,"hr")),l&2&&(p(5),P("po-icon "+n.sampleCodeButtonIcon),p(),y(" ",n.sampleCodeButtonLabel,""),p(),d("ngClass",_(4,ve,n.hideSampleCodeTabs)))},dependencies:[T,C,w,x,re],encapsulation:2})}return o})();var de=(()=>{class o{helperText;event;fieldErrorMessage;help;label;labelOff;labelOn;labelPosition;properties;size;switch;labelPositionOptions=[{label:"Left",value:O.Left},{label:"Right",value:O.Right}];propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"formatModel",label:"Format Model"},{value:"hideLabelStatus",label:"Hide label status"},{value:"errorLimit",label:"Limit Error Message"},{value:"invalidValue",label:"Invalid Value is On/True"},{value:"labelTextWrap",label:"Label Text Wrap"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(m){this.event=m}restore(){this.helperText="",this.event="",this.help=void 0,this.label=void 0,this.labelOn="",this.labelOff="",this.labelPosition=void 0,this.properties=[],this.size="medium",this.switch=void 0,this.fieldErrorMessage=""}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-switch-labs"]],standalone:!1,decls:19,vars:29,consts:[["f","ngForm"],["name","switch",3,"ngModelChange","p-change","p-keydown","ngModel","p-helper","p-disabled","p-error-limit","p-field-error-message","p-format-model","p-help","p-hide-label-status","p-invalid-value","p-label","p-label-off","p-label-on","p-label-position","p-label-text-wrap","p-size"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","labelOff","p-help","Text displayed when PO Switch is set to 'false'","p-label","Label Off",1,"po-md-6",3,"ngModelChange","ngModel"],["name","labelOn","p-help","Text displayed when PO Switch is set to 'true'","p-label","Label On",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","labelPosition","p-label","Label Position",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,n){if(l&1){let s=N();i(0,"po-switch",1),g("ngModelChange",function(r){return h(s),E(n.switch,r)||(n.switch=r),b(r)}),u("p-change",function(){return h(s),b(n.changeEvent("p-change"))})("p-keydown",function(){return h(s),b(n.changeEvent("p-keydown"))}),t(),a(1,"po-divider"),i(2,"div",2),a(3,"po-info",3)(4,"po-info",4),t(),a(5,"po-divider"),i(6,"form",null,0)(8,"po-input",5),g("ngModelChange",function(r){return h(s),E(n.label,r)||(n.label=r),b(r)}),t(),i(9,"po-input",6),g("ngModelChange",function(r){return h(s),E(n.help,r)||(n.help=r),b(r)}),t(),i(10,"po-input",7),g("ngModelChange",function(r){return h(s),E(n.helperText,r)||(n.helperText=r),b(r)}),t(),i(11,"po-input",8),g("ngModelChange",function(r){return h(s),E(n.labelOff,r)||(n.labelOff=r),b(r)}),t(),i(12,"po-input",9),g("ngModelChange",function(r){return h(s),E(n.labelOn,r)||(n.labelOn=r),b(r)}),t(),i(13,"po-input",10),g("ngModelChange",function(r){return h(s),E(n.fieldErrorMessage,r)||(n.fieldErrorMessage=r),b(r)}),t(),i(14,"po-radio-group",11),g("ngModelChange",function(r){return h(s),E(n.labelPosition,r)||(n.labelPosition=r),b(r)}),t(),i(15,"po-checkbox-group",12),g("ngModelChange",function(r){return h(s),E(n.properties,r)||(n.properties=r),b(r)}),t(),i(16,"po-radio-group",13),g("ngModelChange",function(r){return h(s),E(n.size,r)||(n.size=r),b(r)}),t(),i(17,"div",2)(18,"po-button",14),u("p-click",function(){return h(s),b(n.restore())}),t()()()}l&2&&(f("ngModel",n.switch),d("p-helper",n.helperText)("p-disabled",n.properties.includes("disabled"))("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit"))("p-field-error-message",n.fieldErrorMessage)("p-format-model",n.properties.includes("formatModel"))("p-help",n.help)("p-hide-label-status",n.properties.includes("hideLabelStatus"))("p-invalid-value",n.properties==null?null:n.properties.includes("invalidValue"))("p-label",n.label)("p-label-off",n.labelOff)("p-label-on",n.labelOn)("p-label-position",n.labelPosition)("p-label-text-wrap",n.properties.includes("labelTextWrap"))("p-size",n.size),p(3),d("p-value",n.switch),p(),d("p-value",n.event),p(4),f("ngModel",n.label),p(),f("ngModel",n.help),p(),f("ngModel",n.helperText),p(),f("ngModel",n.labelOff),p(),f("ngModel",n.labelOn),p(),f("ngModel",n.fieldErrorMessage),p(),f("ngModel",n.labelPosition),d("p-options",n.labelPositionOptions),p(),f("ngModel",n.properties),d("p-options",n.propertiesOptions),p(),f("ngModel",n.size),d("p-options",n.sizeOptions))},dependencies:[D,F,L,z,W,V,ee,te,ie,ne,M,oe],encapsulation:2})}return o})();var Ce=o=>({"docs-sample-code-tabs":o}),se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-switch-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(a(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Switch Labs"),t(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-switch-labs/sample-po-switch-labs.component.html"),t(),i(13,"pre",7),e(14,`<po-switch
  name="switch"
  [(ngModel)]="switch"
  [p-helper]="helperText"
  [p-disabled]="properties.includes('disabled')"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-field-error-message]="fieldErrorMessage"
  [p-format-model]="properties.includes('formatModel')"
  [p-help]="help"
  [p-hide-label-status]="properties.includes('hideLabelStatus')"
  [p-invalid-value]="properties?.includes('invalidValue')"
  [p-label]="label"
  [p-label-off]="labelOff"
  [p-label-on]="labelOn"
  [p-label-position]="labelPosition"
  [p-label-text-wrap]="properties.includes('labelTextWrap')"
  [p-size]="size"
  (p-change)="changeEvent('p-change')"
  (p-keydown)="changeEvent('p-keydown')"
>
</po-switch>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="switch"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input
    class="po-md-6"
    name="labelOff"
    [(ngModel)]="labelOff"
    p-help="Text displayed when PO Switch is set to 'false'"
    p-label="Label Off"
  >
  </po-input>

  <po-input
    class="po-md-6"
    name="labelOn"
    [(ngModel)]="labelOn"
    p-help="Text displayed when PO Switch is set to 'true'"
    p-label="Label On"
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

  <po-radio-group
    class="po-lg-6"
    name="labelPosition"
    [(ngModel)]="labelPosition"
    p-label="Label Position"
    [p-options]="labelPositionOptions"
  >
  </po-radio-group>

  <po-checkbox-group
    class="po-lg-12"
    name="properties"
    [(ngModel)]="properties"
    p-columns="4"
    p-label="Properties"
    [p-options]="propertiesOptions"
  >
  </po-checkbox-group>

  <po-radio-group
    class="po-lg-6"
    name="size"
    [(ngModel)]="size"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-switch-labs/sample-po-switch-labs.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoSwitchLabelPosition } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-switch-labs',
  templateUrl: './sample-po-switch-labs.component.html',
  standalone: false
})
export class SamplePoSwitchLabsComponent implements OnInit {
  helperText: string;
  event: string;
  fieldErrorMessage: string;
  help: string;
  label: string;
  labelOff: string;
  labelOn: string;
  labelPosition: PoSwitchLabelPosition;
  properties: Array<string>;
  size: string;
  switch: boolean;

  public readonly labelPositionOptions: Array<PoRadioGroupOption> = [
    { label: 'Left', value: PoSwitchLabelPosition.Left },
    { label: 'Right', value: PoSwitchLabelPosition.Right }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'formatModel', label: 'Format Model' },
    { value: 'hideLabelStatus', label: 'Hide label status' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'invalidValue', label: 'Invalid Value is On/True' },
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
    this.event = '';
    this.help = undefined;
    this.label = undefined;
    this.labelOn = '';
    this.labelOff = '';
    this.labelPosition = undefined;
    this.properties = [];
    this.size = 'medium';
    this.switch = undefined;
    this.fieldErrorMessage = '';
  }
}
`),t()()()()(),i(21,"div",10),a(22,"sample-po-switch-labs"),t(),a(23,"hr")),l&2&&(p(5),P("po-icon "+n.sampleCodeButtonIcon),p(),y(" ",n.sampleCodeButtonLabel,""),p(),d("ngClass",_(4,Ce,n.hideSampleCodeTabs)))},dependencies:[T,C,w,x,de],encapsulation:2})}return o})();var ce=(()=>{class o{poNotification=A(I);labelPosition=O.Left;serviceFee=!1;totalAmount=43;columns=[{property:"page",label:"Product"},{property:"value",label:"Value (R$)",type:"currency",format:"BRL"}];items=[{page:"Hamburger",value:"20"},{page:"Soft Drink",value:"6"},{page:"French Fries",value:"17"}];addServiceFee(){this.totalAmount=this.serviceFee?parseFloat((this.totalAmount*1.1).toFixed(2)):43}confirm(){this.poNotification.success("Purchase done Successful!")}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-switch-order"]],standalone:!1,decls:15,vars:6,consts:[["f","ngForm"],[1,"po-row"],["p-title","Order Summary",1,"po-md-6","po-lg-4"],[3,"p-columns","p-items","p-hide-table-search"],["name","serviceFee","p-label","Allow a 10% service fee?","p-label-off","No, thank you.","p-label-on","Yes, please.",3,"ngModelChange","p-change","ngModel","p-label-position"],[1,"po-pull-right"],[1,"po-font-text-large-bold"],[1,"po-font-text"],[1,"po-pull-right","po-font-title"],["p-icon","po-icon an an-check","p-label","Confirm","p-kind","primary",1,"po-md-12",3,"p-click"]],template:function(l,n){if(l&1){let s=N();i(0,"div",1)(1,"po-widget",2)(2,"form",null,0),a(4,"po-table",3),i(5,"po-switch",4),g("ngModelChange",function(r){return h(s),E(n.serviceFee,r)||(n.serviceFee=r),b(r)}),u("p-change",function(){return h(s),b(n.addServiceFee())}),t(),i(6,"div",5)(7,"div",6),e(8,"Total value"),t(),i(9,"span",7),e(10,"R$"),t(),i(11,"span",8),e(12),t()(),i(13,"div",1)(14,"po-button",9),u("p-click",function(){return h(s),b(n.confirm())}),t()()()()()}l&2&&(p(4),d("p-columns",n.columns)("p-items",n.items)("p-hide-table-search",!1),p(),f("ngModel",n.serviceFee),d("p-label-position",n.labelPosition),p(7),R(n.totalAmount))},dependencies:[D,F,L,z,W,V,M,H,j],encapsulation:2})}return o})();var _e=o=>({"docs-sample-code-tabs":o}),ue=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-switch-order-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(a(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Switch - Order Summary"),t(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-switch-order/sample-po-switch-order.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
  <po-widget class="po-md-6 po-lg-4" p-title="Order Summary">
    <form #f="ngForm">
      <po-table [p-columns]="columns" [p-items]="items" [p-hide-table-search]="false"> </po-table>

      <po-switch
        name="serviceFee"
        [(ngModel)]="serviceFee"
        p-label="Allow a 10% service fee?"
        p-label-off="No, thank you."
        p-label-on="Yes, please."
        [p-label-position]="labelPosition"
        (p-change)="addServiceFee()"
      >
      </po-switch>

      <div class="po-pull-right">
        <div class="po-font-text-large-bold">Total value</div>
        <span class="po-font-text">R$</span>
        <span class="po-pull-right po-font-title">{ { totalAmount }}</span>
      </div>

      <div class="po-row">
        <po-button
          class="po-md-12"
          p-icon="po-icon an an-check"
          p-label="Confirm"
          p-kind="primary"
          (p-click)="confirm()"
        >
        </po-button>
      </div>
    </form>
  </po-widget>
</div>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-switch-order/sample-po-switch-order.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, inject } from '@angular/core';

import { PoNotificationService, PoSwitchLabelPosition, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-switch-order',
  templateUrl: './sample-po-switch-order.component.html',
  standalone: false
})
export class SamplePoSwitchOrderComponent {
  private poNotification = inject(PoNotificationService);

  labelPosition: PoSwitchLabelPosition = PoSwitchLabelPosition.Left;
  serviceFee: boolean = false;
  totalAmount: number = 43;

  public readonly columns: Array<PoTableColumn> = [
    {
      property: 'page',
      label: 'Product'
    },
    {
      property: 'value',
      label: 'Value (R$)',
      type: 'currency',
      format: 'BRL'
    }
  ];

  public readonly items: Array<any> = [
    { page: 'Hamburger', value: '20' },
    { page: 'Soft Drink', value: '6' },
    { page: 'French Fries', value: '17' }
  ];

  addServiceFee() {
    const percentage: number = 1.1;
    this.totalAmount = this.serviceFee ? parseFloat((this.totalAmount * percentage).toFixed(2)) : 43;
  }

  confirm() {
    this.poNotification.success('Purchase done Successful!');
  }
}
`),t()()()()(),i(21,"div",10),a(22,"sample-po-switch-order"),t(),a(23,"hr")),l&2&&(p(5),P("po-icon "+n.sampleCodeButtonIcon),p(),y(" ",n.sampleCodeButtonLabel,""),p(),d("ngClass",_(4,_e,n.hideSampleCodeTabs)))},dependencies:[T,C,w,x,ce],encapsulation:2})}return o})();var he=(()=>{class o{poNotification=A(I);formBuilder=A(X);formOrderSummary;labelPosition=O.Left;totalAmount=43;columns=[{property:"page",label:"Product"},{property:"value",label:"Value (R$)",type:"currency",format:"BRL"}];items=[{page:"Hamburger",value:"20"},{page:"Soft Drink",value:"6"},{page:"French Fries",value:"17"}];ngOnInit(){this.formOrderSummary=this.formBuilder.group({serviceFee:[!1]})}addServiceFee(){let m=this.formOrderSummary.get("serviceFee").value,l=1.1;this.totalAmount=m?parseFloat((this.totalAmount*l).toFixed(2)):43}confirm(){this.poNotification.success("Purchase done Successful!")}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-switch-order-reactive-form"]],standalone:!1,decls:14,vars:6,consts:[[1,"po-row"],["p-title","Order Summary",1,"po-md-6","po-lg-4"],[3,"formGroup"],[3,"p-columns","p-items","p-hide-table-search"],["name","serviceFee","formControlName","serviceFee","p-label","Allow a 10% service fee?","p-label-off","No, thank you.","p-label-on","Yes, please.",3,"p-change","p-label-position"],[1,"po-pull-right"],[1,"po-font-text-large-bold"],[1,"po-font-text"],[1,"po-pull-right","po-font-title"],["p-icon","an an-check","p-label","Confirm","p-kind","primary",1,"po-md-12",3,"p-click"]],template:function(l,n){l&1&&(i(0,"div",0)(1,"po-widget",1)(2,"form",2),a(3,"po-table",3),i(4,"po-switch",4),u("p-change",function(){return n.addServiceFee()}),t(),i(5,"div",5)(6,"div",6),e(7,"Total value"),t(),i(8,"span",7),e(9,"R$"),t(),i(10,"span",8),e(11),t()(),i(12,"div",0)(13,"po-button",9),u("p-click",function(){return n.confirm()}),t()()()()()),l&2&&(p(2),d("formGroup",n.formOrderSummary),p(),d("p-columns",n.columns)("p-items",n.items)("p-hide-table-search",!1),p(),d("p-label-position",n.labelPosition),p(7),R(n.totalAmount))},dependencies:[D,F,L,Q,J,V,M,H,j],encapsulation:2})}return o})();var ke=o=>({"docs-sample-code-tabs":o}),be=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-switch-order-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(a(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Switch - Order Summary Reactive Form"),t(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-switch-order-reactive-form/sample-po-switch-order-reactive-form.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
  <po-widget class="po-md-6 po-lg-4" p-title="Order Summary">
    <form [formGroup]="formOrderSummary">
      <po-table [p-columns]="columns" [p-items]="items" [p-hide-table-search]="false"> </po-table>

      <po-switch
        name="serviceFee"
        formControlName="serviceFee"
        p-label="Allow a 10% service fee?"
        p-label-off="No, thank you."
        p-label-on="Yes, please."
        [p-label-position]="labelPosition"
        (p-change)="addServiceFee()"
      >
      </po-switch>

      <div class="po-pull-right">
        <div class="po-font-text-large-bold">Total value</div>
        <span class="po-font-text">R$</span>
        <span class="po-pull-right po-font-title">{ { totalAmount }}</span>
      </div>

      <div class="po-row">
        <po-button class="po-md-12" p-icon="an an-check" p-label="Confirm" p-kind="primary" (p-click)="confirm()">
        </po-button>
      </div>
    </form>
  </po-widget>
</div>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-switch-order-reactive-form/sample-po-switch-order-reactive-form.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { PoNotificationService, PoSwitchLabelPosition, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-switch-order-reactive-form',
  templateUrl: './sample-po-switch-order-reactive-form.component.html',
  standalone: false
})
export class SamplePoSwitchOrderReactiveFormComponent implements OnInit {
  private poNotification = inject(PoNotificationService);
  private formBuilder = inject(UntypedFormBuilder);

  formOrderSummary: UntypedFormGroup;
  labelPosition: PoSwitchLabelPosition = PoSwitchLabelPosition.Left;
  totalAmount: number = 43;

  public readonly columns: Array<PoTableColumn> = [
    {
      property: 'page',
      label: 'Product'
    },
    {
      property: 'value',
      label: 'Value (R$)',
      type: 'currency',
      format: 'BRL'
    }
  ];

  public readonly items: Array<any> = [
    { page: 'Hamburger', value: '20' },
    { page: 'Soft Drink', value: '6' },
    { page: 'French Fries', value: '17' }
  ];

  ngOnInit() {
    this.formOrderSummary = this.formBuilder.group({ serviceFee: [false] });
  }

  addServiceFee() {
    const serviceFee = this.formOrderSummary.get('serviceFee').value;
    const percentage: number = 1.1;
    this.totalAmount = serviceFee ? parseFloat((this.totalAmount * percentage).toFixed(2)) : 43;
  }

  confirm() {
    this.poNotification.success('Purchase done Successful!');
  }
}
`),t()()()()(),i(21,"div",10),a(22,"sample-po-switch-order-reactive-form"),t(),a(23,"hr")),l&2&&(p(5),P("po-icon "+n.sampleCodeButtonIcon),p(),y(" ",n.sampleCodeButtonLabel,""),p(),d("ngClass",_(4,ke,n.hideSampleCodeTabs)))},dependencies:[T,C,w,x,he],encapsulation:2})}return o})();var Se=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-switch-doc"]],standalone:!1,decls:840,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-checkbox-group"],["href","https://www.w3.org/WAI/ARIA/apg/patterns/switch/#keyboard-interaction-19"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"language-typescript"]],template:function(l,n){l&1&&(i(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),i(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),i(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),i(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),i(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),i(16,"h3",3),e(17,"Componente"),t(),i(18,"h4",4)(19,"code",5),e(20,"PoSwitchComponent"),t()(),i(21,"div",2)(22,"p"),e(23," O componente "),i(24,"code"),e(25,"po-switch"),t(),e(26," \xE9 um "),i(27,"a",6),e(28,"checkbox"),t(),e(29,` mais intuitivo, pois faz analogia a um interruptor.
Deve ser usado quando deseja-se transmitir a ideia de ligar / desligar uma funcionalidade espec\xEDfica.`),t(),i(30,"p"),e(31,"Pode-se ligar ou desligar o switch utilizando a tecla de espa\xE7o ou o clique do mouse."),t(),i(32,"p"),e(33,`O texto exibido pode ser alterado de acordo com o valor setado aumentando as possibilidades de uso do componente,
portanto, recomenda-se informar textos que contextualizem seu uso para que facilite a compreens\xE3o do usu\xE1rio.`),t(),i(34,"blockquote")(35,"p"),e(36,"O componente n\xE3o altera o valor incial informado no "),i(37,"em"),e(38,"model"),t(),e(39,", portanto indica-se inicializa-lo caso ter necessidade."),t()(),i(40,"h4"),e(41,"Boas pr\xE1ticas"),t(),i(42,"ul")(43,"li"),e(44,"Evite "),i(45,"code"),e(46,"labels"),t(),e(47," extensos que quebram o layout do "),i(48,"code"),e(49,"po-switch"),t(),e(50,", use "),i(51,"code"),e(52,"labels"),t(),e(53," diretos, curtos e intuitivos."),t()(),i(54,"h4"),e(55,"Acessibilidade tratada no componente"),t(),i(56,"p"),e(57,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),t(),i(58,"ul")(59,"li"),e(60,"Quando em foco, o switch \xE9 ativado usando a tecla de Espa\xE7o. "),i(61,"a",7),e(62,"W3C WAI-ARIA 3.5 Switch - Keyboard Interaction"),t()(),i(63,"li"),e(64,"A \xE1rea do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco n\xE3o pode ficar escondido por outros elementos da tela. "),i(65,"a",8),e(66,"WCAG 2.4.12: Focus Appearance"),t()()(),i(67,"h4"),e(68,"Tokens customiz\xE1veis"),t(),i(69,"p"),e(70,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),i(71,"blockquote")(72,"p"),e(73,"Para maiores informa\xE7\xF5es, acesse o guia "),i(74,"a",9),e(75,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(76,"."),t()(),i(77,"table")(78,"thead")(79,"tr")(80,"th"),e(81,"Propriedade"),t(),i(82,"th"),e(83,"Descri\xE7\xE3o"),t(),i(84,"th"),e(85,"Valor Padr\xE3o"),t()()(),i(86,"tbody")(87,"tr")(88,"td")(89,"strong"),e(90,"Unchecked"),t()(),a(91,"td")(92,"td"),t(),i(93,"tr")(94,"td")(95,"code"),e(96,"--color-unchecked"),t()(),i(97,"td"),e(98,"Cor principal no estado desmarcado"),t(),i(99,"td")(100,"code"),e(101,"var(--color-neutral-light-00)"),t()()(),i(102,"tr")(103,"td")(104,"code"),e(105,"--border-color"),t()(),i(106,"td"),e(107,"Cor da borda"),t(),i(108,"td")(109,"code"),e(110,"var(--color-neutral-dark-70)"),t()()(),i(111,"tr")(112,"td")(113,"code"),e(114,"--track-unchecked"),t()(),i(115,"td"),e(116,"Cor principal da faixa no estado desmarcado"),t(),i(117,"td")(118,"code"),e(119,"var(--color-neutral-light-20)"),t()()(),i(120,"tr")(121,"td")(122,"strong"),e(123,"Checked"),t()(),a(124,"td")(125,"td"),t(),i(126,"tr")(127,"td")(128,"code"),e(129,"--color-checked"),t()(),i(130,"td"),e(131,"Cor principal no estado selecionado"),t(),i(132,"td")(133,"code"),e(134,"var(--color-action-default)"),t()()(),i(135,"tr")(136,"td")(137,"code"),e(138,"--track-checked"),t()(),i(139,"td"),e(140,"Cor da faixa no estado selecionado"),t(),i(141,"td")(142,"code"),e(143,"var(--color-brand-01-light)"),t()()(),i(144,"tr")(145,"td")(146,"strong"),e(147,"Hover"),t()(),a(148,"td")(149,"td"),t(),i(150,"tr")(151,"td")(152,"code"),e(153,"--color-unchecked-hover"),t()(),i(154,"td"),e(155,"Cor principal no estado hover desmarcado"),t(),i(156,"td")(157,"code"),e(158,"var(--color-action-pressed)"),t()()(),i(159,"tr")(160,"td")(161,"code"),e(162,"--color-checked-hover"),t()(),i(163,"td"),e(164,"Cor principal no estado hover marcado"),t(),i(165,"td")(166,"code"),e(167,"var(--color-action-pressed)"),t()()(),i(168,"tr")(169,"td")(170,"strong"),e(171,"Focused"),t()(),a(172,"td")(173,"td"),t(),i(174,"tr")(175,"td")(176,"code"),e(177,"--outline-color-focused"),t()(),i(178,"td"),e(179,"Cor do outline do estado de focus"),t(),i(180,"td")(181,"code"),e(182,"var(--color-action-focus)"),t()()(),i(183,"tr")(184,"td")(185,"strong"),e(186,"Disabled"),t()(),a(187,"td")(188,"td"),t(),i(189,"tr")(190,"td")(191,"code"),e(192,"--color-unchecked-disabled"),t()(),i(193,"td"),e(194,"Cor principal do disabled no estado desmarcado"),t(),i(195,"td")(196,"code"),e(197,"var(--color-neutral-light-20)"),t()()(),i(198,"tr")(199,"td")(200,"code"),e(201,"--color-checked-disabled"),t()(),i(202,"td"),e(203,"Cor principal do disabled no estado marcado"),t(),i(204,"td")(205,"code"),e(206,"var(--color-action-disabled)"),t()()()()()(),i(207,"div",10)(208,"h4",11),e(209,"Seletor"),t(),i(210,"pre",12),e(211,`<po-switch
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    (p-change)="EventEmitter"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-format-model="boolean"
    p-help="string"
    p-hide-label-status="boolean"
    p-invalid-value="boolean"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-off="string"
    p-label-on="string"
    p-label-position="PoSwitchLabelPosition"
    p-label-text-wrap="boolean"
    name="string"
    p-helper="PoHelperOptions | string"
    p-size="string" >
</po-switch>
`),t()(),i(212,"h4",13),e(213,"Propriedades"),t(),i(214,"table",14)(215,"tr",15)(216,"th",16),e(217,"Nome"),t(),i(218,"th",16),e(219,"Tipo"),t(),i(220,"th",16),e(221,"Padr\xE3o"),t(),i(222,"th",16),e(223,"Descri\xE7\xE3o"),t()(),i(224,"tr",17)(225,"td",18)(226,"div",19)(227,"span",20),e(228," (p-additional-help)"),a(229,"br"),t()(),i(230,"div",21),e(231,"Deprecated"),t()(),i(232,"td",22)(233,"code",23),e(234,"EventEmitter"),t()(),i(235,"td",24),e(236,"-"),t(),i(237,"td",25)(238,"em")(239,"strong"),e(240,"(opcional)"),t()(),i(241,"p"),e(242,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),t(),i(243,"blockquote")(244,"p"),e(245,"Essa propriedade est\xE1 "),i(246,"strong"),e(247,"depreciada"),t(),e(248," e ser\xE1 removida na vers\xE3o "),i(249,"code"),e(250,"23.x.x"),t(),e(251,". Recomendamos utilizar a propriedade "),i(252,"code"),e(253,"p-helper"),t(),e(254," que oferece mais recursos e flexibilidade."),t()()()(),i(255,"tr",17)(256,"td",18)(257,"div",26)(258,"span",27),e(259," p-additional-help-tooltip"),a(260,"br"),t()(),i(261,"div",21),e(262,"Deprecated"),t()(),i(263,"td",22)(264,"code",28),e(265,"string"),t()(),i(266,"td",24),e(267,"-"),t(),i(268,"td",25)(269,"em")(270,"strong"),e(271,"(opcional)"),t()(),i(272,"p"),e(273,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),i(274,"code"),e(275,"po-helper"),t(),e(276,`.
`),i(277,"strong"),e(278,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),i(279,"blockquote")(280,"p"),e(281,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),i(282,"blockquote")(283,"p"),e(284,"Essa propriedade est\xE1 "),i(285,"strong"),e(286,"depreciada"),t(),e(287," e ser\xE1 removida na vers\xE3o "),i(288,"code"),e(289,"23.x.x"),t(),e(290,". Recomendamos utilizar a propriedade "),i(291,"code"),e(292,"p-helper"),t(),e(293," que oferece mais recursos e flexibilidade."),t()()()(),i(294,"tr",17)(295,"td",18)(296,"div",26)(297,"span",27),e(298," p-append-in-body"),a(299,"br"),t()()(),i(300,"td",22)(301,"code",29),e(302,"boolean"),t()(),i(303,"td",24)(304,"p")(305,"code"),e(306,"false"),t()()(),i(307,"td",25)(308,"em")(309,"strong"),e(310,"(opcional)"),t()(),i(311,"p"),e(312,"Define que o popover ("),i(313,"code"),e(314,"p-helper"),t(),e(315," e/ou "),i(316,"code"),e(317,"p-error-limit"),t(),e(318,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),i(319,"blockquote")(320,"p"),e(321,"Quando utilizado com "),i(322,"code"),e(323,"p-helper"),t(),e(324,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),t()()()(),i(325,"tr",17)(326,"td",18)(327,"div",19)(328,"span",20),e(329," (p-change)"),a(330,"br"),t()()(),i(331,"td",22)(332,"code",23),e(333,"EventEmitter"),t()(),i(334,"td",24),e(335,"-"),t(),i(336,"td",25)(337,"em")(338,"strong"),e(339,"(opcional)"),t()(),i(340,"p"),e(341,"Evento disparado ao alterar valor do campo."),t()()(),i(342,"tr",17)(343,"td",18)(344,"div",26)(345,"span",27),e(346," p-disabled"),a(347,"br"),t()()(),i(348,"td",22)(349,"code",29),e(350,"boolean"),t()(),i(351,"td",24)(352,"p")(353,"code"),e(354,"false"),t()()(),i(355,"td",25)(356,"em")(357,"strong"),e(358,"(opcional)"),t()(),i(359,"p"),e(360,"Indica se o campo ser\xE1 desabilitado."),t()()(),i(361,"tr",17)(362,"td",18)(363,"div",26)(364,"span",27),e(365," p-error-limit"),a(366,"br"),t()()(),i(367,"td",22)(368,"code",29),e(369,"boolean"),t()(),i(370,"td",24)(371,"p")(372,"code"),e(373,"false"),t()()(),i(374,"td",25)(375,"em")(376,"strong"),e(377,"(opcional)"),t()(),i(378,"p"),e(379,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),i(380,"blockquote")(381,"p"),e(382,"Caso essa propriedade seja definida como "),i(383,"code"),e(384,"true"),t(),e(385,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),i(386,"tr",17)(387,"td",18)(388,"div",26)(389,"span",27),e(390," p-field-error-message"),a(391,"br"),t()()(),i(392,"td",22)(393,"code",28),e(394,"string"),t()(),i(395,"td",24),e(396,"-"),t(),i(397,"td",25)(398,"em")(399,"strong"),e(400,"(opcional)"),t()(),i(401,"p"),e(402,"Exibe a mensagem de erro configurada quando o campo estiver desligado(off/false)."),t()()(),i(403,"tr",17)(404,"td",18)(405,"div",26)(406,"span",27),e(407," p-format-model"),a(408,"br"),t()()(),i(409,"td",22)(410,"code",29),e(411,"boolean"),t()(),i(412,"td",24)(413,"p")(414,"code"),e(415,"false"),t()()(),i(416,"td",25)(417,"em")(418,"strong"),e(419,"(opcional)"),t()(),i(420,"p"),e(421,"Indica se o "),i(422,"code"),e(423,"model"),t(),e(424," receber\xE1 o valor formatado pelas propriedades "),i(425,"code"),e(426,"p-label-on"),t(),e(427," e "),i(428,"code"),e(429,"p-label-off"),t(),e(430,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),t(),i(431,"blockquote")(432,"p"),e(433,"Por padr\xE3o ser\xE1 atribu\xEDdo "),i(434,"code"),e(435,"false"),t(),e(436,"."),t()()()(),i(437,"tr",17)(438,"td",18)(439,"div",26)(440,"span",27),e(441," p-help"),a(442,"br"),t()()(),i(443,"td",22)(444,"code",28),e(445,"string"),t()(),i(446,"td",24),e(447,"-"),t(),i(448,"td",25)(449,"p"),e(450,"Texto de apoio para o campo."),t()()(),i(451,"tr",17)(452,"td",18)(453,"div",26)(454,"span",27),e(455," p-hide-label-status"),a(456,"br"),t()()(),i(457,"td",22)(458,"code",29),e(459,"boolean"),t()(),i(460,"td",24)(461,"p")(462,"code"),e(463,"false"),t()()(),i(464,"td",25)(465,"em")(466,"strong"),e(467,"(opcional)"),t()(),i(468,"p"),e(469,"Indica se o status do "),i(470,"code"),e(471,"model"),t(),e(472," ser\xE1 escondido visualmente ao lado do switch."),t(),i(473,"blockquote")(474,"p"),e(475,"Por padr\xE3o ser\xE1 atribu\xEDdo "),i(476,"code"),e(477,"false"),t(),e(478,"."),t()()()(),i(479,"tr",17)(480,"td",18)(481,"div",26)(482,"span",27),e(483," p-invalid-value"),a(484,"br"),t()()(),i(485,"td",22)(486,"code",29),e(487,"boolean"),t()(),i(488,"td",24)(489,"p")(490,"code"),e(491,"false"),t()()(),i(492,"td",25)(493,"em")(494,"strong"),e(495,"(opcional)"),t()(),i(496,"p"),e(497,"Define qual valor ser\xE1 considerado como inv\xE1lido para exibir a mensagem da propriedade "),i(498,"code"),e(499,"p-field-error-message"),t(),e(500,"."),t(),i(501,"blockquote")(502,"p"),e(503,"Caso essa propriedade seja definida como "),i(504,"code"),e(505,"true"),t(),e(506,", a mensagem de erro ser\xE1 exibida quando o campo estiver ligado(on/true)."),t()()()(),i(507,"tr",17)(508,"td",18)(509,"div",19)(510,"span",20),e(511," (p-keydown)"),a(512,"br"),t()()(),i(513,"td",22)(514,"code",23),e(515,"EventEmitter"),t()(),i(516,"td",24),e(517,"-"),t(),i(518,"td",25)(519,"em")(520,"strong"),e(521,"(opcional)"),t()(),i(522,"p"),e(523,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),i(524,"code"),e(525,"KeyboardEvent"),t(),e(526," com informa\xE7\xF5es sobre a tecla."),t()()(),i(527,"tr",17)(528,"td",18)(529,"div",26)(530,"span",27),e(531," p-label"),a(532,"br"),t()()(),i(533,"td",22)(534,"code",28),e(535,"string"),t()(),i(536,"td",24),e(537,"-"),t(),i(538,"td",25)(539,"p"),e(540,"R\xF3tulo exibido pelo componente."),t()()(),i(541,"tr",17)(542,"td",18)(543,"div",26)(544,"span",27),e(545," p-label-off"),a(546,"br"),t()()(),i(547,"td",22)(548,"code",28),e(549,"string"),t()(),i(550,"td",24)(551,"p")(552,"code"),e(553,"false"),t()()(),i(554,"td",25)(555,"p"),e(556,"Texto exibido quando o valor do componente for "),i(557,"code"),e(558,"false"),t(),e(559,"."),t()()(),i(560,"tr",17)(561,"td",18)(562,"div",26)(563,"span",27),e(564," p-label-on"),a(565,"br"),t()()(),i(566,"td",22)(567,"code",28),e(568,"string"),t()(),i(569,"td",24)(570,"p")(571,"code"),e(572,"true"),t()()(),i(573,"td",25)(574,"p"),e(575,"Texto exibido quando o valor do componente for "),i(576,"code"),e(577,"true"),t(),e(578,"."),t()()(),i(579,"tr",17)(580,"td",18)(581,"div",26)(582,"span",27),e(583," p-label-position"),a(584,"br"),t()()(),i(585,"td",22)(586,"code",30),e(587,"PoSwitchLabelPosition"),t()(),i(588,"td",24),e(589,"-"),t(),i(590,"td",25)(591,"em")(592,"strong"),e(593,"(opcional)"),t()(),i(594,"p"),e(595,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo que fica ao lado do switch."),t(),i(596,"blockquote")(597,"p"),e(598,"Por padr\xE3o exibe \xE0 direita."),t()()()(),i(599,"tr",17)(600,"td",18)(601,"div",26)(602,"span",27),e(603," p-label-text-wrap"),a(604,"br"),t()()(),i(605,"td",22)(606,"code",29),e(607,"boolean"),t()(),i(608,"td",24)(609,"p")(610,"code"),e(611,"false"),t()()(),i(612,"td",25)(613,"em")(614,"strong"),e(615,"(opcional)"),t()(),i(616,"p"),e(617,"Habilita a quebra autom\xE1tica do texto da propriedade "),i(618,"code"),e(619,"p-label"),t(),e(620,". Quando "),i(621,"code"),e(622,"p-label-text-wrap"),t(),e(623,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),i(624,"tr",17)(625,"td",18)(626,"div",26)(627,"span",27),e(628," name"),a(629,"br"),t()()(),i(630,"td",22)(631,"code",28),e(632,"string"),t()(),i(633,"td",24),e(634,"-"),t(),i(635,"td",25)(636,"p"),e(637,"Nome do componente."),t()()(),i(638,"tr",17)(639,"td",18)(640,"div",26)(641,"span",27),e(642," p-helper"),a(643,"br"),t()()(),i(644,"td",22)(645,"code",31),e(646,"PoHelperOptions "),t(),i(647,"code",28),e(648," string"),t()(),i(649,"td",24),e(650,"-"),t(),i(651,"td",25)(652,"em")(653,"strong"),e(654,"(opcional)"),t()(),i(655,"p"),e(656,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),i(657,"code"),e(658,"p-label"),t(),e(659," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),i(660,"code"),e(661,"p-label"),t(),e(662,"."),t(),i(663,"blockquote")(664,"p"),e(665,"Para mais informa\xE7\xF5es acesse: "),i(666,"a",32),e(667,"https://po-ui.io/documentation/po-helper"),t(),e(668,"."),t()(),i(669,"blockquote")(670,"p"),e(671,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),i(672,"code"),e(673,"p-additional-help-tooltip"),t(),e(674," e "),i(675,"code"),e(676,"p-additional-help"),t(),e(677,") ser\xE1 ignorado."),t()()()(),i(678,"tr",17)(679,"td",18)(680,"div",26)(681,"span",27),e(682," p-size"),a(683,"br"),t()()(),i(684,"td",22)(685,"code",28),e(686,"string"),t()(),i(687,"td",24)(688,"p")(689,"code"),e(690,"medium"),t()()(),i(691,"td",25)(692,"em")(693,"strong"),e(694,"(opcional)"),t()(),i(695,"p"),e(696,"Define o tamanho do componente:"),t(),i(697,"ul")(698,"li")(699,"code"),e(700,"small"),t(),e(701,": altura de 16px (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(702,"li")(703,"code"),e(704,"medium"),t(),e(705,": altura de 24px."),t()(),i(706,"blockquote")(707,"p"),e(708,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(709,"code"),e(710,"medium"),t(),e(711,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(712,"a",33),e(713,"po-theme"),t(),e(714,"."),t()()()()(),i(715,"h3",13),e(716,"M\xE9todos"),t(),i(717,"table",34)(718,"tr",17)(719,"th",35)(720,"div",26)(721,"h4")(722,"span",27),e(723," showAdditionalHelp "),t()()()()(),i(724,"tr",25)(725,"td",25)(726,"p"),e(727,"M\xE9todo que exibe "),i(728,"code"),e(729,"p-helper"),t(),e(730," ou executa a a\xE7\xE3o definida em "),i(731,"code"),e(732,"p-helper{eventOnClick}"),t(),e(733," ou em "),i(734,"code"),e(735,"p-additionalHelp"),t(),e(736,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),i(737,"code"),e(738,"p-keydown"),t(),e(739,"."),t(),i(740,"blockquote")(741,"p"),e(742,"Exibe ou oculta o conte\xFAdo do componente "),i(743,"code"),e(744,"po-helper"),t(),e(745," quando o componente estiver com foco."),t()(),i(746,"pre")(747,"code"),e(748,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do component"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),t()(),i(749,"pre")(750,"code"),e(751,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),a(752,"br"),i(753,"table",34)(754,"tr",17)(755,"th",35)(756,"div",26)(757,"h4")(758,"span",27),e(759," focus "),t()()()()(),i(760,"tr",25)(761,"td",25)(762,"p"),e(763,"Fun\xE7\xE3o que atribui foco ao componente."),t(),i(764,"p"),e(765,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),i(766,"pre")(767,"code"),e(768,`import { PoSwitchComponent } from '@po-ui/ng-components';

...

@ViewChild(PoSwitchComponent, { static: true }) switch: PoSwitchComponent;

focusSwitch() {
  this.switch.focus();
}
`),t()()()()(),a(769,"br"),i(770,"table",34)(771,"tr",17)(772,"th",35)(773,"div",26)(774,"h4")(775,"span",27),e(776," showAdditionalHelp "),t()()()()(),i(777,"tr",25)(778,"td",25)(779,"p"),e(780,"M\xE9todo que exibe "),i(781,"code"),e(782,"p-helper"),t(),e(783," ou executa a a\xE7\xE3o definida em "),i(784,"code"),e(785,"p-helper{eventOnClick}"),t(),e(786," ou em "),i(787,"code"),e(788,"p-additionalHelp"),t(),e(789,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),i(790,"code"),e(791,"p-keydown"),t(),e(792,"."),t(),i(793,"blockquote")(794,"p"),e(795,"Exibe ou oculta o conte\xFAdo do componente "),i(796,"code"),e(797,"po-helper"),t(),e(798," quando o componente estiver com foco."),t()(),i(799,"pre")(800,"code"),e(801,`//Exemplo com p-label e p-helper
<po-switch
 #switch
 ...
 p-label="Label do switch"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, switch)"
></po-switch>
`),t()(),i(802,"pre")(803,"code",36),e(804,`onKeyDown(event: KeyboardEvent, inp: PoSwitchComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),a(805,"br"),i(806,"h3"),e(807,"Enums"),t(),i(808,"h4",4)(809,"code",5),e(810,"PoSwitchLabelPosition"),t()(),i(811,"div",2)(812,"p"),e(813,"Enum para posicionar o label do valor do po-switch."),t()(),i(814,"h4",13),e(815,"Propriedades"),t(),i(816,"table",14)(817,"tr",15)(818,"th",16),e(819,"Nome"),t(),i(820,"th",16),e(821,"Descri\xE7\xE3o"),t()(),i(822,"tr",17)(823,"td",18)(824,"div",26)(825,"span",27),e(826," Right"),a(827,"br"),t()()(),i(828,"td",25)(829,"p"),e(830,"Posiciona o label do lado esquerdo do switch."),t()()(),i(831,"tr",17)(832,"td",18)(833,"div",26)(834,"span",27),e(835," Left"),a(836,"br"),t()()(),i(837,"td",25)(838,"p"),e(839,"Posiciona o label do lado direito do switch."),t()()()()())},dependencies:[C],encapsulation:2})}return o})();var fe=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||o)(U(Z),U($))};static \u0275cmp=c({type:o,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Switch",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(i(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u("p-click",function(){return n.changeTab("doc")}),a(3,"sample-po-switch-doc"),t(),i(4,"po-tab",3),u("p-click",function(){return n.changeTab("web")}),a(5,"sample-po-switch-basic-view")(6,"sample-po-switch-labs-view")(7,"sample-po-switch-order-view")(8,"sample-po-switch-order-reactive-form-view"),t()()()),l&2&&(d("p-actions",n.actions),p(2),d("p-active",n.activeTab==="doc"),p(2),d("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[ae,w,x,pe,se,ue,be,Se],encapsulation:2})}return o})();var Le=[{path:"",component:fe}],Ee=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=q({type:o});static \u0275inj=B({imports:[K.forChild(Le),K]})}return o})();var ht=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=q({type:o});static \u0275inj=B({imports:[le,Ee]})}return o})();export{ht as DocPoSwitchModule};
