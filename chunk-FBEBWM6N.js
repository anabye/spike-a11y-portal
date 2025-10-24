import{o as C,p as le}from"./chunk-I35J7BQK.js";import{Ab as x,Eb as j,Fa as ne,O as te,Q as ie,Xa as oe,a as ee,nb as ae,qa as O,ra as M,sa as I,v as V,za as z,zb as w}from"./chunk-I3ESE4C7.js";import{Aa as m,Cb as T,Da as P,Dc as F,Ec as L,Fc as R,Gc as W,Hc as D,Kc as Q,La as i,Lc as J,Ma as t,N as A,Na as a,Pc as X,Q as B,Ra as N,Sa as u,U as h,Uc as Z,V as b,Wc as $,Yc as K,cb as e,db as H,eb as y,gb as f,hb as E,ib as g,ja as p,ka as U,lb as _,qa as c,ra as q}from"./chunk-KZJHT32G.js";var re=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-switch-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","switch","p-label","PO Switch"]],template:function(l,n){l&1&&a(0,"po-switch",0)},dependencies:[M],encapsulation:2})}return o})();var ve=o=>({"docs-sample-code-tabs":o}),pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-switch-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(a(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Switch Basic"),t(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-switch-basic/sample-po-switch-basic.component.html"),t(),i(13,"pre",7),e(14,`<po-switch name="switch" p-label="PO Switch"> </po-switch>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-switch-basic/sample-po-switch-basic.component.ts"),t(),i(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-switch-basic',
  templateUrl: './sample-po-switch-basic.component.html',
  standalone: false
})
export class SamplePoSwitchBasicComponent {}
`),t()()()()(),i(21,"div",10),a(22,"sample-po-switch-basic"),t(),a(23,"hr")),l&2&&(p(5),P("po-icon "+n.sampleCodeButtonIcon),p(),y(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,ve,n.hideSampleCodeTabs)))},dependencies:[T,C,w,x,re],encapsulation:2})}return o})();var me=(()=>{class o{additionalHelpTooltip;event;fieldErrorMessage;help;label;labelOff;labelOn;labelPosition;properties;size;switch;labelPositionOptions=[{label:"Left",value:O.Left},{label:"Right",value:O.Right}];propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"formatModel",label:"Format Model"},{value:"hideLabelStatus",label:"Hide label status"},{value:"errorLimit",label:"Limit Error Message"},{value:"invalidValue",label:"Invalid Value is On/True"},{value:"labelTextWrap",label:"Label Text Wrap"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(d){this.event=d}restore(){this.additionalHelpTooltip="",this.event="",this.help=void 0,this.label=void 0,this.labelOn="",this.labelOff="",this.labelPosition=void 0,this.properties=[],this.size="medium",this.switch=void 0,this.fieldErrorMessage=""}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-switch-labs"]],standalone:!1,decls:19,vars:29,consts:[["f","ngForm"],["name","switch",3,"ngModelChange","p-change","p-keydown","ngModel","p-additional-help-tooltip","p-disabled","p-error-limit","p-field-error-message","p-format-model","p-help","p-hide-label-status","p-invalid-value","p-label","p-label-off","p-label-on","p-label-position","p-label-text-wrap","p-size"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","labelOff","p-help","Text displayed when PO Switch is set to 'false'","p-label","Label Off",1,"po-md-6",3,"ngModelChange","ngModel"],["name","labelOn","p-help","Text displayed when PO Switch is set to 'true'","p-label","Label On",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","labelPosition","p-label","Label Position",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,n){if(l&1){let s=N();i(0,"po-switch",1),g("ngModelChange",function(r){return h(s),E(n.switch,r)||(n.switch=r),b(r)}),u("p-change",function(){return h(s),b(n.changeEvent("p-change"))})("p-keydown",function(){return h(s),b(n.changeEvent("p-keydown"))}),t(),a(1,"po-divider"),i(2,"div",2),a(3,"po-info",3)(4,"po-info",4),t(),a(5,"po-divider"),i(6,"form",null,0)(8,"po-input",5),g("ngModelChange",function(r){return h(s),E(n.label,r)||(n.label=r),b(r)}),t(),i(9,"po-input",6),g("ngModelChange",function(r){return h(s),E(n.help,r)||(n.help=r),b(r)}),t(),i(10,"po-input",7),g("ngModelChange",function(r){return h(s),E(n.additionalHelpTooltip,r)||(n.additionalHelpTooltip=r),b(r)}),t(),i(11,"po-input",8),g("ngModelChange",function(r){return h(s),E(n.labelOff,r)||(n.labelOff=r),b(r)}),t(),i(12,"po-input",9),g("ngModelChange",function(r){return h(s),E(n.labelOn,r)||(n.labelOn=r),b(r)}),t(),i(13,"po-input",10),g("ngModelChange",function(r){return h(s),E(n.fieldErrorMessage,r)||(n.fieldErrorMessage=r),b(r)}),t(),i(14,"po-radio-group",11),g("ngModelChange",function(r){return h(s),E(n.labelPosition,r)||(n.labelPosition=r),b(r)}),t(),i(15,"po-checkbox-group",12),g("ngModelChange",function(r){return h(s),E(n.properties,r)||(n.properties=r),b(r)}),t(),i(16,"po-radio-group",13),g("ngModelChange",function(r){return h(s),E(n.size,r)||(n.size=r),b(r)}),t(),i(17,"div",2)(18,"po-button",14),u("p-click",function(){return h(s),b(n.restore())}),t()()()}l&2&&(f("ngModel",n.switch),m("p-additional-help-tooltip",n.additionalHelpTooltip)("p-disabled",n.properties.includes("disabled"))("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit"))("p-field-error-message",n.fieldErrorMessage)("p-format-model",n.properties.includes("formatModel"))("p-help",n.help)("p-hide-label-status",n.properties.includes("hideLabelStatus"))("p-invalid-value",n.properties==null?null:n.properties.includes("invalidValue"))("p-label",n.label)("p-label-off",n.labelOff)("p-label-on",n.labelOn)("p-label-position",n.labelPosition)("p-label-text-wrap",n.properties.includes("labelTextWrap"))("p-size",n.size),p(3),m("p-value",n.switch),p(),m("p-value",n.event),p(4),f("ngModel",n.label),p(),f("ngModel",n.help),p(),f("ngModel",n.additionalHelpTooltip),p(),f("ngModel",n.labelOff),p(),f("ngModel",n.labelOn),p(),f("ngModel",n.fieldErrorMessage),p(),f("ngModel",n.labelPosition),m("p-options",n.labelPositionOptions),p(),f("ngModel",n.properties),m("p-options",n.propertiesOptions),p(),f("ngModel",n.size),m("p-options",n.sizeOptions))},dependencies:[D,F,L,W,R,V,ee,te,ie,ne,M,oe],encapsulation:2})}return o})();var Ce=o=>({"docs-sample-code-tabs":o}),se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-switch-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(a(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Switch Labs"),t(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-switch-labs/sample-po-switch-labs.component.html"),t(),i(13,"pre",7),e(14,`<po-switch
  name="switch"
  [(ngModel)]="switch"
  [p-additional-help-tooltip]="additionalHelpTooltip"
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
  additionalHelpTooltip: string;
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
    this.additionalHelpTooltip = '';
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
`),t()()()()(),i(21,"div",10),a(22,"sample-po-switch-labs"),t(),a(23,"hr")),l&2&&(p(5),P("po-icon "+n.sampleCodeButtonIcon),p(),y(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,Ce,n.hideSampleCodeTabs)))},dependencies:[T,C,w,x,me],encapsulation:2})}return o})();var ce=(()=>{class o{poNotification=B(I);labelPosition=O.Left;serviceFee=!1;totalAmount=43;columns=[{property:"page",label:"Product"},{property:"value",label:"Value (R$)",type:"currency",format:"BRL"}];items=[{page:"Hamburger",value:"20"},{page:"Soft Drink",value:"6"},{page:"French Fries",value:"17"}];addServiceFee(){this.totalAmount=this.serviceFee?parseFloat((this.totalAmount*1.1).toFixed(2)):43}confirm(){this.poNotification.success("Purchase done Successful!")}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-switch-order"]],standalone:!1,decls:15,vars:6,consts:[["f","ngForm"],[1,"po-row"],["p-title","Order Summary",1,"po-md-6","po-lg-4"],[3,"p-columns","p-items","p-hide-table-search"],["name","serviceFee","p-label","Allow a 10% service fee?","p-label-off","No, thank you.","p-label-on","Yes, please.",3,"ngModelChange","p-change","ngModel","p-label-position"],[1,"po-pull-right"],[1,"po-font-text-large-bold"],[1,"po-font-text"],[1,"po-pull-right","po-font-title"],["p-icon","po-icon an an-check","p-label","Confirm","p-kind","primary",1,"po-md-12",3,"p-click"]],template:function(l,n){if(l&1){let s=N();i(0,"div",1)(1,"po-widget",2)(2,"form",null,0),a(4,"po-table",3),i(5,"po-switch",4),g("ngModelChange",function(r){return h(s),E(n.serviceFee,r)||(n.serviceFee=r),b(r)}),u("p-change",function(){return h(s),b(n.addServiceFee())}),t(),i(6,"div",5)(7,"div",6),e(8,"Total value"),t(),i(9,"span",7),e(10,"R$"),t(),i(11,"span",8),e(12),t()(),i(13,"div",1)(14,"po-button",9),u("p-click",function(){return h(s),b(n.confirm())}),t()()()()()}l&2&&(p(4),m("p-columns",n.columns)("p-items",n.items)("p-hide-table-search",!1),p(),f("ngModel",n.serviceFee),m("p-label-position",n.labelPosition),p(7),H(n.totalAmount))},dependencies:[D,F,L,W,R,V,M,z,j],encapsulation:2})}return o})();var _e=o=>({"docs-sample-code-tabs":o}),ue=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-switch-order-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(a(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Switch - Order Summary"),t(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-switch-order/sample-po-switch-order.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
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
`),t()()()()(),i(21,"div",10),a(22,"sample-po-switch-order"),t(),a(23,"hr")),l&2&&(p(5),P("po-icon "+n.sampleCodeButtonIcon),p(),y(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,_e,n.hideSampleCodeTabs)))},dependencies:[T,C,w,x,ce],encapsulation:2})}return o})();var he=(()=>{class o{poNotification=B(I);formBuilder=B(X);formOrderSummary;labelPosition=O.Left;totalAmount=43;columns=[{property:"page",label:"Product"},{property:"value",label:"Value (R$)",type:"currency",format:"BRL"}];items=[{page:"Hamburger",value:"20"},{page:"Soft Drink",value:"6"},{page:"French Fries",value:"17"}];ngOnInit(){this.formOrderSummary=this.formBuilder.group({serviceFee:[!1]})}addServiceFee(){let d=this.formOrderSummary.get("serviceFee").value,l=1.1;this.totalAmount=d?parseFloat((this.totalAmount*l).toFixed(2)):43}confirm(){this.poNotification.success("Purchase done Successful!")}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-switch-order-reactive-form"]],standalone:!1,decls:14,vars:6,consts:[[1,"po-row"],["p-title","Order Summary",1,"po-md-6","po-lg-4"],[3,"formGroup"],[3,"p-columns","p-items","p-hide-table-search"],["name","serviceFee","formControlName","serviceFee","p-label","Allow a 10% service fee?","p-label-off","No, thank you.","p-label-on","Yes, please.",3,"p-change","p-label-position"],[1,"po-pull-right"],[1,"po-font-text-large-bold"],[1,"po-font-text"],[1,"po-pull-right","po-font-title"],["p-icon","an an-check","p-label","Confirm","p-kind","primary",1,"po-md-12",3,"p-click"]],template:function(l,n){l&1&&(i(0,"div",0)(1,"po-widget",1)(2,"form",2),a(3,"po-table",3),i(4,"po-switch",4),u("p-change",function(){return n.addServiceFee()}),t(),i(5,"div",5)(6,"div",6),e(7,"Total value"),t(),i(8,"span",7),e(9,"R$"),t(),i(10,"span",8),e(11),t()(),i(12,"div",0)(13,"po-button",9),u("p-click",function(){return n.confirm()}),t()()()()()),l&2&&(p(2),m("formGroup",n.formOrderSummary),p(),m("p-columns",n.columns)("p-items",n.items)("p-hide-table-search",!1),p(),m("p-label-position",n.labelPosition),p(7),H(n.totalAmount))},dependencies:[D,F,L,Q,J,V,M,z,j],encapsulation:2})}return o})();var ke=o=>({"docs-sample-code-tabs":o}),be=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-switch-order-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(a(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Switch - Order Summary Reactive Form"),t(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-switch-order-reactive-form/sample-po-switch-order-reactive-form.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
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
`),t()()()()(),i(21,"div",10),a(22,"sample-po-switch-order-reactive-form"),t(),a(23,"hr")),l&2&&(p(5),P("po-icon "+n.sampleCodeButtonIcon),p(),y(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,ke,n.hideSampleCodeTabs)))},dependencies:[T,C,w,x,he],encapsulation:2})}return o})();var Se=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-switch-doc"]],standalone:!1,decls:801,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-checkbox-group"],["href","https://www.w3.org/WAI/ARIA/apg/patterns/switch/#keyboard-interaction-19"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(l,n){l&1&&(i(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),i(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
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
`),t()(),i(212,"h4",13),e(213,"Propriedades"),t(),i(214,"table",14)(215,"tr",15)(216,"th",16),e(217,"Nome"),t(),i(218,"th",16),e(219,"Tipo"),t(),i(220,"th",16),e(221,"Padr\xE3o"),t(),i(222,"th",16),e(223,"Descri\xE7\xE3o"),t()(),i(224,"tr",17)(225,"td",18)(226,"div",19)(227,"span",20),e(228," (p-additional-help)"),a(229,"br"),t()(),i(230,"div",21),e(231,"Deprecated"),t()(),i(232,"td",22)(233,"code",23),e(234,"EventEmitter"),t()(),i(235,"td",24),e(236,"-"),t(),i(237,"td",25)(238,"em")(239,"strong"),e(240,"(opcional)"),t()(),i(241,"p"),e(242,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),i(243,"code"),e(244,"p-help"),t(),e(245,"."),t(),i(246,"blockquote")(247,"p"),e(248,"Essa propriedade est\xE1 "),i(249,"strong"),e(250,"depreciada"),t(),e(251," e ser\xE1 removida na vers\xE3o "),i(252,"code"),e(253,"23.x.x"),t(),e(254,". Recomendamos utilizar a propriedade "),i(255,"code"),e(256,"p-helper"),t(),e(257," que oferece mais recursos e flexibilidade."),t()()()(),i(258,"tr",17)(259,"td",18)(260,"div",26)(261,"span",27),e(262," p-additional-help-tooltip"),a(263,"br"),t()(),i(264,"div",21),e(265,"Deprecated"),t()(),i(266,"td",22)(267,"code",28),e(268,"string"),t()(),i(269,"td",24),e(270,"-"),t(),i(271,"td",25)(272,"em")(273,"strong"),e(274,"(opcional)"),t()(),i(275,"p"),e(276,"Exibe um \xEDcone de ajuda adicional ao "),i(277,"code"),e(278,"p-help"),t(),e(279,`, com o texto desta propriedade no tooltip.
Se o evento `),i(280,"code"),e(281,"p-additional-help"),t(),e(282,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),i(283,"strong"),e(284,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),i(285,"blockquote")(286,"p"),e(287,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),i(288,"blockquote")(289,"p"),e(290,"Essa propriedade est\xE1 "),i(291,"strong"),e(292,"depreciada"),t(),e(293," e ser\xE1 removida na vers\xE3o "),i(294,"code"),e(295,"23.x.x"),t(),e(296,". Recomendamos utilizar a propriedade "),i(297,"code"),e(298,"p-helper"),t(),e(299," que oferece mais recursos e flexibilidade."),t()()()(),i(300,"tr",17)(301,"td",18)(302,"div",26)(303,"span",27),e(304," p-append-in-body"),a(305,"br"),t()()(),i(306,"td",22)(307,"code",29),e(308,"boolean"),t()(),i(309,"td",24)(310,"p")(311,"code"),e(312,"false"),t()()(),i(313,"td",25)(314,"em")(315,"strong"),e(316,"(opcional)"),t()(),i(317,"p"),e(318,"Define que o tooltip ("),i(319,"code"),e(320,"p-additional-help-tooltip"),t(),e(321," e/ou "),i(322,"code"),e(323,"p-error-limit"),t(),e(324,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),i(325,"blockquote")(326,"p"),e(327,"Quando utilizado com "),i(328,"code"),e(329,"p-additional-help-tooltip"),t(),e(330,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),i(331,"tr",17)(332,"td",18)(333,"div",19)(334,"span",20),e(335," (p-change)"),a(336,"br"),t()()(),i(337,"td",22)(338,"code",23),e(339,"EventEmitter"),t()(),i(340,"td",24),e(341,"-"),t(),i(342,"td",25)(343,"em")(344,"strong"),e(345,"(opcional)"),t()(),i(346,"p"),e(347,"Evento disparado ao alterar valor do campo."),t()()(),i(348,"tr",17)(349,"td",18)(350,"div",26)(351,"span",27),e(352," p-disabled"),a(353,"br"),t()()(),i(354,"td",22)(355,"code",29),e(356,"boolean"),t()(),i(357,"td",24)(358,"p")(359,"code"),e(360,"false"),t()()(),i(361,"td",25)(362,"em")(363,"strong"),e(364,"(opcional)"),t()(),i(365,"p"),e(366,"Indica se o campo ser\xE1 desabilitado."),t()()(),i(367,"tr",17)(368,"td",18)(369,"div",26)(370,"span",27),e(371," p-error-limit"),a(372,"br"),t()()(),i(373,"td",22)(374,"code",29),e(375,"boolean"),t()(),i(376,"td",24)(377,"p")(378,"code"),e(379,"false"),t()()(),i(380,"td",25)(381,"em")(382,"strong"),e(383,"(opcional)"),t()(),i(384,"p"),e(385,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),i(386,"blockquote")(387,"p"),e(388,"Caso essa propriedade seja definida como "),i(389,"code"),e(390,"true"),t(),e(391,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),i(392,"tr",17)(393,"td",18)(394,"div",26)(395,"span",27),e(396," p-field-error-message"),a(397,"br"),t()()(),i(398,"td",22)(399,"code",28),e(400,"string"),t()(),i(401,"td",24),e(402,"-"),t(),i(403,"td",25)(404,"em")(405,"strong"),e(406,"(opcional)"),t()(),i(407,"p"),e(408,"Exibe a mensagem de erro configurada quando o campo estiver desligado(off/false)."),t()()(),i(409,"tr",17)(410,"td",18)(411,"div",26)(412,"span",27),e(413," p-format-model"),a(414,"br"),t()()(),i(415,"td",22)(416,"code",29),e(417,"boolean"),t()(),i(418,"td",24)(419,"p")(420,"code"),e(421,"false"),t()()(),i(422,"td",25)(423,"em")(424,"strong"),e(425,"(opcional)"),t()(),i(426,"p"),e(427,"Indica se o "),i(428,"code"),e(429,"model"),t(),e(430," receber\xE1 o valor formatado pelas propriedades "),i(431,"code"),e(432,"p-label-on"),t(),e(433," e "),i(434,"code"),e(435,"p-label-off"),t(),e(436,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),t(),i(437,"blockquote")(438,"p"),e(439,"Por padr\xE3o ser\xE1 atribu\xEDdo "),i(440,"code"),e(441,"false"),t(),e(442,"."),t()()()(),i(443,"tr",17)(444,"td",18)(445,"div",26)(446,"span",27),e(447," p-help"),a(448,"br"),t()()(),i(449,"td",22)(450,"code",28),e(451,"string"),t()(),i(452,"td",24),e(453,"-"),t(),i(454,"td",25)(455,"p"),e(456,"Texto de apoio para o campo."),t()()(),i(457,"tr",17)(458,"td",18)(459,"div",26)(460,"span",27),e(461," p-hide-label-status"),a(462,"br"),t()()(),i(463,"td",22)(464,"code",29),e(465,"boolean"),t()(),i(466,"td",24)(467,"p")(468,"code"),e(469,"false"),t()()(),i(470,"td",25)(471,"em")(472,"strong"),e(473,"(opcional)"),t()(),i(474,"p"),e(475,"Indica se o status do "),i(476,"code"),e(477,"model"),t(),e(478," ser\xE1 escondido visualmente ao lado do switch."),t(),i(479,"blockquote")(480,"p"),e(481,"Por padr\xE3o ser\xE1 atribu\xEDdo "),i(482,"code"),e(483,"false"),t(),e(484,"."),t()()()(),i(485,"tr",17)(486,"td",18)(487,"div",26)(488,"span",27),e(489," p-invalid-value"),a(490,"br"),t()()(),i(491,"td",22)(492,"code",29),e(493,"boolean"),t()(),i(494,"td",24)(495,"p")(496,"code"),e(497,"false"),t()()(),i(498,"td",25)(499,"em")(500,"strong"),e(501,"(opcional)"),t()(),i(502,"p"),e(503,"Define qual valor ser\xE1 considerado como inv\xE1lido para exibir a mensagem da propriedade "),i(504,"code"),e(505,"p-field-error-message"),t(),e(506,"."),t(),i(507,"blockquote")(508,"p"),e(509,"Caso essa propriedade seja definida como "),i(510,"code"),e(511,"true"),t(),e(512,", a mensagem de erro ser\xE1 exibida quando o campo estiver ligado(on/true)."),t()()()(),i(513,"tr",17)(514,"td",18)(515,"div",19)(516,"span",20),e(517," (p-keydown)"),a(518,"br"),t()()(),i(519,"td",22)(520,"code",23),e(521,"EventEmitter"),t()(),i(522,"td",24),e(523,"-"),t(),i(524,"td",25)(525,"em")(526,"strong"),e(527,"(opcional)"),t()(),i(528,"p"),e(529,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),i(530,"code"),e(531,"KeyboardEvent"),t(),e(532," com informa\xE7\xF5es sobre a tecla."),t()()(),i(533,"tr",17)(534,"td",18)(535,"div",26)(536,"span",27),e(537," p-label"),a(538,"br"),t()()(),i(539,"td",22)(540,"code",28),e(541,"string"),t()(),i(542,"td",24),e(543,"-"),t(),i(544,"td",25)(545,"p"),e(546,"R\xF3tulo exibido pelo componente."),t()()(),i(547,"tr",17)(548,"td",18)(549,"div",26)(550,"span",27),e(551," p-label-off"),a(552,"br"),t()()(),i(553,"td",22)(554,"code",28),e(555,"string"),t()(),i(556,"td",24)(557,"p")(558,"code"),e(559,"false"),t()()(),i(560,"td",25)(561,"p"),e(562,"Texto exibido quando o valor do componente for "),i(563,"code"),e(564,"false"),t(),e(565,"."),t()()(),i(566,"tr",17)(567,"td",18)(568,"div",26)(569,"span",27),e(570," p-label-on"),a(571,"br"),t()()(),i(572,"td",22)(573,"code",28),e(574,"string"),t()(),i(575,"td",24)(576,"p")(577,"code"),e(578,"true"),t()()(),i(579,"td",25)(580,"p"),e(581,"Texto exibido quando o valor do componente for "),i(582,"code"),e(583,"true"),t(),e(584,"."),t()()(),i(585,"tr",17)(586,"td",18)(587,"div",26)(588,"span",27),e(589," p-label-position"),a(590,"br"),t()()(),i(591,"td",22)(592,"code",30),e(593,"PoSwitchLabelPosition"),t()(),i(594,"td",24),e(595,"-"),t(),i(596,"td",25)(597,"em")(598,"strong"),e(599,"(opcional)"),t()(),i(600,"p"),e(601,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo que fica ao lado do switch."),t(),i(602,"blockquote")(603,"p"),e(604,"Por padr\xE3o exibe \xE0 direita."),t()()()(),i(605,"tr",17)(606,"td",18)(607,"div",26)(608,"span",27),e(609," p-label-text-wrap"),a(610,"br"),t()()(),i(611,"td",22)(612,"code",29),e(613,"boolean"),t()(),i(614,"td",24)(615,"p")(616,"code"),e(617,"false"),t()()(),i(618,"td",25)(619,"em")(620,"strong"),e(621,"(opcional)"),t()(),i(622,"p"),e(623,"Habilita a quebra autom\xE1tica do texto da propriedade "),i(624,"code"),e(625,"p-label"),t(),e(626,". Quando "),i(627,"code"),e(628,"p-label-text-wrap"),t(),e(629,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),i(630,"tr",17)(631,"td",18)(632,"div",26)(633,"span",27),e(634," name"),a(635,"br"),t()()(),i(636,"td",22)(637,"code",28),e(638,"string"),t()(),i(639,"td",24),e(640,"-"),t(),i(641,"td",25)(642,"p"),e(643,"Nome do componente."),t()()(),i(644,"tr",17)(645,"td",18)(646,"div",26)(647,"span",27),e(648," p-helper"),a(649,"br"),t()()(),i(650,"td",22)(651,"code",31),e(652,"PoHelperOptions "),t(),i(653,"code",28),e(654," string"),t()(),i(655,"td",24),e(656,"-"),t(),i(657,"td",25)(658,"em")(659,"strong"),e(660,"(opcional)"),t()(),i(661,"p"),e(662,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label."),t(),i(663,"blockquote")(664,"p"),e(665,"Caso o "),i(666,"code"),e(667,"p-label"),t(),e(668,` n\xE3o esteja definido, o componente po-helper n\xE3o ser\xE1 exibido.
Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional (`),i(669,"code"),e(670,"p-additional-help-tooltip"),t(),e(671," e "),i(672,"code"),e(673,"p-additional-help"),t(),e(674,") ser\xE1 ignorado."),t()()()(),i(675,"tr",17)(676,"td",18)(677,"div",26)(678,"span",27),e(679," p-size"),a(680,"br"),t()()(),i(681,"td",22)(682,"code",28),e(683,"string"),t()(),i(684,"td",24)(685,"p")(686,"code"),e(687,"medium"),t()()(),i(688,"td",25)(689,"em")(690,"strong"),e(691,"(opcional)"),t()(),i(692,"p"),e(693,"Define o tamanho do componente:"),t(),i(694,"ul")(695,"li")(696,"code"),e(697,"small"),t(),e(698,": altura de 16px (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(699,"li")(700,"code"),e(701,"medium"),t(),e(702,": altura de 24px."),t()(),i(703,"blockquote")(704,"p"),e(705,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(706,"code"),e(707,"medium"),t(),e(708,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(709,"a",32),e(710,"po-theme"),t(),e(711,"."),t()()()()(),i(712,"h3",13),e(713,"M\xE9todos"),t(),i(714,"table",33)(715,"tr",17)(716,"th",34)(717,"div",26)(718,"h4")(719,"span",27),e(720," showAdditionalHelp "),t()()()()(),i(721,"tr",25)(722,"td",25)(723,"p"),e(724,"M\xE9todo que exibe "),i(725,"code"),e(726,"p-additionalHelpTooltip"),t(),e(727," ou executa a a\xE7\xE3o definida em "),i(728,"code"),e(729,"p-additionalHelp"),t(),e(730,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),i(731,"code"),e(732,"p-keydown"),t(),e(733,"."),t(),i(734,"blockquote")(735,"p"),e(736,"Exibe ou oculta o conte\xFAdo do componente "),i(737,"code"),e(738,"po-helper"),t(),e(739," quando o componente estiver com foco e com label vis\xEDvel."),t()(),i(740,"pre")(741,"code"),e(742,`<po-nome-component
 #component
 ...
 p-additional-help-tooltip="Mensagem de ajuda complementar"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),t()(),i(743,"pre")(744,"code"),e(745,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do component"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),t()(),i(746,"pre")(747,"code"),e(748,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),a(749,"br"),i(750,"table",33)(751,"tr",17)(752,"th",34)(753,"div",26)(754,"h4")(755,"span",27),e(756," focus "),t()()()()(),i(757,"tr",25)(758,"td",25)(759,"p"),e(760,"Fun\xE7\xE3o que atribui foco ao componente."),t(),i(761,"p"),e(762,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),i(763,"pre")(764,"code"),e(765,`import { PoSwitchComponent } from '@po-ui/ng-components';

...

@ViewChild(PoSwitchComponent, { static: true }) switch: PoSwitchComponent;

focusSwitch() {
  this.switch.focus();
}
`),t()()()()(),a(766,"br"),i(767,"h3"),e(768,"Enums"),t(),i(769,"h4",4)(770,"code",5),e(771,"PoSwitchLabelPosition"),t()(),i(772,"div",2)(773,"p"),e(774,"Enum para posicionar o label do valor do po-switch."),t()(),i(775,"h4",13),e(776,"Propriedades"),t(),i(777,"table",14)(778,"tr",15)(779,"th",16),e(780,"Nome"),t(),i(781,"th",16),e(782,"Descri\xE7\xE3o"),t()(),i(783,"tr",17)(784,"td",18)(785,"div",26)(786,"span",27),e(787," Right"),a(788,"br"),t()()(),i(789,"td",25)(790,"p"),e(791,"Posiciona o label do lado esquerdo do switch."),t()()(),i(792,"tr",17)(793,"td",18)(794,"div",26)(795,"span",27),e(796," Left"),a(797,"br"),t()()(),i(798,"td",25)(799,"p"),e(800,"Posiciona o label do lado direito do switch."),t()()()()())},dependencies:[C],encapsulation:2})}return o})();var fe=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,l){this.route=d,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let l=d.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||o)(U(Z),U($))};static \u0275cmp=c({type:o,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Switch",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(i(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u("p-click",function(){return n.changeTab("doc")}),a(3,"sample-po-switch-doc"),t(),i(4,"po-tab",3),u("p-click",function(){return n.changeTab("web")}),a(5,"sample-po-switch-basic-view")(6,"sample-po-switch-labs-view")(7,"sample-po-switch-order-view")(8,"sample-po-switch-order-reactive-form-view"),t()()()),l&2&&(m("p-actions",n.actions),p(2),m("p-active",n.activeTab==="doc"),p(2),m("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[ae,w,x,pe,se,ue,be,Se],encapsulation:2})}return o})();var Le=[{path:"",component:fe}],Ee=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=q({type:o});static \u0275inj=A({imports:[K.forChild(Le),K]})}return o})();var ht=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=q({type:o});static \u0275inj=A({imports:[le,Ee]})}return o})();export{ht as DocPoSwitchModule};
