import{o as y,p as Se}from"./chunk-I35J7BQK.js";import{Ab as x,Fa as j,O as de,Q as A,Sa as M,U as me,Xa as D,a as N,nb as ue,q as se,ra as ce,v as R,zb as C}from"./chunk-I3ESE4C7.js";import{Aa as c,Cb as T,Da as _,Dc as V,Ec as z,Fc as B,Gc as k,Hc as W,La as n,M as ee,Ma as t,N as G,Na as l,Q as L,Ra as I,Sa as E,U as u,Uc as pe,V as S,Wc as re,Xa as ne,Yc as Y,_b as le,bb as q,cb as e,db as K,eb as w,gb as g,hb as b,ib as h,ja as s,jb as ie,ka as U,kb as Q,lb as P,mb as oe,qa as v,ra as F,wa as te,xb as ae}from"./chunk-KZJHT32G.js";var Te=()=>({label:"Option 1",value:"1"}),Me=()=>({label:"Option 2",value:"2"}),Oe=(a,J)=>[a,J],ge=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=v({type:a,selectors:[["sample-po-select-basic"]],standalone:!1,decls:1,vars:6,consts:[["name","select","p-label","PO Select",3,"p-options"]],template:function(p,i){p&1&&l(0,"po-select",0),p&2&&c("p-options",oe(3,Oe,Q(1,Te),Q(2,Me)))},dependencies:[M],encapsulation:2})}return a})();var Ve=a=>({"docs-sample-code-tabs":a}),be=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=v({type:a,selectors:[["sample-po-select-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,i){p&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Select Basic"),t(),n(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-select-basic/sample-po-select-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-select
  name="select"
  p-label="PO Select"
  [p-options]="[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' }
  ]"
>
</po-select>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-select-basic/sample-po-select-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-select-basic',
  templateUrl: './sample-po-select-basic.component.html',
  standalone: false
})
export class SamplePoSelectBasicComponent {}
`),t()()()()(),n(21,"div",10),l(22,"sample-po-select-basic"),t(),l(23,"hr")),p&2&&(s(5),_("po-icon "+i.sampleCodeButtonIcon),s(),w(" ",i.sampleCodeButtonLabel,""),s(),c("ngClass",P(4,Ve,i.hideSampleCodeTabs)))},dependencies:[T,y,C,x,ge],encapsulation:2})}return a})();var Ee=(()=>{class a{cdr=L(ae);additionalHelpTooltip;event;help;label;option;options;optionsGroup;optionsGroupList=[];placeholder;properties;fieldErrorMessage;select;selectedOptionsGroup;selectOptionGroupSwitch;size;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"readonly",label:"Read Only"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}addOption(){this.options=this.verifyOptionObject(this.options.concat(),this.option,this.optionsGroup),this.option={label:void 0,value:void 0},this.cdr.detectChanges()}changeEvent(r){this.event=r}optionsGroupSelection(){this.optionsGroup=this.selectedOptionsGroup}restore(){this.additionalHelpTooltip="",this.event="",this.help=void 0,this.label=void 0,this.option={label:void 0,value:void 0},this.options=[],this.optionsGroup=void 0,this.optionsGroupList=[],this.placeholder="",this.properties=[],this.fieldErrorMessage="",this.select="",this.selectOptionGroupSwitch=!1,this.selectedOptionsGroup=void 0,this.size="medium"}restoreSwitch(r){r||(this.selectedOptionsGroup=void 0,this.optionsGroup=void 0)}insertGroupIntoSelectInput(r){this.selectedOptionsGroup=r,this.optionsGroupList=[...this.optionsGroupList,{label:r,value:r}]}verifyOptionObject(r,p,i){let{label:m,value:d}=p;if(i){let o=r.findIndex($=>$.label===i&&"options"in $);return o===-1?(this.insertGroupIntoSelectInput(i),[...r,{label:i,options:[{label:m,value:d}]}]):(r[o].options.push({label:m,value:d}),r)}return[...r,{label:m,value:d}]}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=v({type:a,selectors:[["sample-po-select-labs"]],standalone:!1,decls:33,vars:35,consts:[["fOption","ngForm"],["f","ngForm"],["name","select",1,"po-md-12",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-additional-help-tooltip","p-disabled","p-help","p-label","p-options","p-optional","p-placeholder","p-readonly","p-required","p-field-error-message","p-show-required","p-size","p-error-limit","p-label-text-wrap"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["p-label","Po select options group"],["name","selectOptionGroupSwitch","p-label","Select options group",1,"po-lg-2","po-md-12",3,"p-change","ngModelChange","ngModel"],["name","selectedsOptionsGroup","p-label","Options group list",1,"po-lg-4","po-md-6",3,"ngModelChange","p-change","ngModel","p-disabled","p-options"],["name","optionsGroup","p-label","New Options Group","p-required","",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel","p-disabled"],["p-label","Po select options"],["name","optionLabel","p-label","Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","optionValue","p-label","Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Option",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","label","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],[1,"po-lg-3","po-md-6"],["p-label","Sample Restore",3,"p-click"]],template:function(p,i){if(p&1){let m=I();n(0,"po-select",2),h("ngModelChange",function(o){return u(m),b(i.select,o)||(i.select=o),S(o)}),E("p-blur",function(){return u(m),S(i.changeEvent("p-blur"))})("p-change",function(){return u(m),S(i.changeEvent("p-change"))})("p-change-model",function(){return u(m),S(i.changeEvent("p-change-model"))})("p-enter",function(){return u(m),S(i.changeEvent("p-enter"))})("p-keydown",function(){return u(m),S(i.changeEvent("p-keydown"))}),t(),l(1,"po-divider"),n(2,"div",3),l(3,"po-info",4)(4,"po-info",5),t(),l(5,"po-divider"),n(6,"form",null,0),l(8,"po-divider",6),n(9,"div",3)(10,"po-switch",7),E("p-change",function(o){return u(m),S(i.restoreSwitch(o))}),h("ngModelChange",function(o){return u(m),b(i.selectOptionGroupSwitch,o)||(i.selectOptionGroupSwitch=o),S(o)}),t(),n(11,"po-select",8),h("ngModelChange",function(o){return u(m),b(i.selectedOptionsGroup,o)||(i.selectedOptionsGroup=o),S(o)}),E("p-change",function(){return u(m),S(i.optionsGroupSelection())}),t(),n(12,"po-input",9),h("ngModelChange",function(o){return u(m),b(i.optionsGroup,o)||(i.optionsGroup=o),S(o)}),t()(),l(13,"po-divider",10),n(14,"div",3)(15,"po-input",11),h("ngModelChange",function(o){return u(m),b(i.option.label,o)||(i.option.label=o),S(o)}),t(),n(16,"po-input",12),h("ngModelChange",function(o){return u(m),b(i.option.value,o)||(i.option.value=o),S(o)}),t()(),n(17,"div",3)(18,"po-button",13),E("p-click",function(){return u(m),S(i.addOption())}),t()()(),l(19,"po-divider"),n(20,"form",null,1)(22,"po-input",14),h("ngModelChange",function(o){return u(m),b(i.label,o)||(i.label=o),S(o)}),t(),n(23,"po-input",15),h("ngModelChange",function(o){return u(m),b(i.help,o)||(i.help=o),S(o)}),t(),n(24,"po-input",16),h("ngModelChange",function(o){return u(m),b(i.additionalHelpTooltip,o)||(i.additionalHelpTooltip=o),S(o)}),t(),n(25,"po-input",17),h("ngModelChange",function(o){return u(m),b(i.placeholder,o)||(i.placeholder=o),S(o)}),t(),n(26,"po-input",18),h("ngModelChange",function(o){return u(m),b(i.fieldErrorMessage,o)||(i.fieldErrorMessage=o),S(o)}),t(),n(27,"po-checkbox-group",19),h("ngModelChange",function(o){return u(m),b(i.properties,o)||(i.properties=o),S(o)}),t(),n(28,"po-radio-group",20),h("ngModelChange",function(o){return u(m),b(i.size,o)||(i.size=o),S(o)}),t(),n(29,"div",3)(30,"div",21)(31,"po-button",22),E("p-click",function(){return u(m),S(i.restore())}),t()()(),l(32,"form"),t()}if(p&2){let m=q(7);g("ngModel",i.select),c("p-additional-help-tooltip",i.additionalHelpTooltip)("p-disabled",i.properties.includes("disabled"))("p-help",i.help)("p-label",i.label)("p-options",i.options)("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-field-error-message",i.fieldErrorMessage)("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap")),s(3),c("p-value",i.select),s(),c("p-value",i.event),s(6),g("ngModel",i.selectOptionGroupSwitch),s(),g("ngModel",i.selectedOptionsGroup),c("p-disabled",!i.selectOptionGroupSwitch)("p-options",i.optionsGroupList),s(),g("ngModel",i.optionsGroup),c("p-disabled",!i.selectOptionGroupSwitch),s(3),g("ngModel",i.option.label),s(),g("ngModel",i.option.value),s(2),c("p-disabled",m.invalid),s(4),g("ngModel",i.label),s(),g("ngModel",i.help),s(),g("ngModel",i.additionalHelpTooltip),s(),g("ngModel",i.placeholder),s(),g("ngModel",i.fieldErrorMessage),s(),g("ngModel",i.properties),c("p-options",i.propertiesOptions),s(),g("ngModel",i.size),c("p-options",i.sizeOptions)}},dependencies:[W,V,z,k,B,R,N,de,A,j,M,ce,D],encapsulation:2})}return a})();var qe=a=>({"docs-sample-code-tabs":a}),ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=v({type:a,selectors:[["sample-po-select-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,i){p&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Select Labs"),t(),n(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-select-labs/sample-po-select-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-select
  class="po-md-12"
  name="select"
  [(ngModel)]="select"
  [p-additional-help-tooltip]="additionalHelpTooltip"
  [p-disabled]="properties.includes('disabled')"
  [p-help]="help"
  [p-label]="label"
  [p-options]="options"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
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
</po-select>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="select"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #fOption="ngForm">
  <po-divider p-label="Po select options group"></po-divider>

  <div class="po-row">
    <po-switch
      class="po-lg-2 po-md-12"
      name="selectOptionGroupSwitch"
      (p-change)="restoreSwitch($event)"
      [(ngModel)]="selectOptionGroupSwitch"
      p-label="Select options group"
    >
    </po-switch>

    <po-select
      class="po-lg-4 po-md-6"
      name="selectedsOptionsGroup"
      [(ngModel)]="selectedOptionsGroup"
      p-label="Options group list"
      [p-disabled]="!selectOptionGroupSwitch"
      [p-options]="optionsGroupList"
      (p-change)="optionsGroupSelection()"
    >
    </po-select>

    <po-input
      class="po-lg-4 po-md-6"
      name="optionsGroup"
      [(ngModel)]="optionsGroup"
      p-label="New Options Group"
      [p-disabled]="!selectOptionGroupSwitch"
      p-required
    >
    </po-input>
  </div>

  <po-divider p-label="Po select options"></po-divider>
  <div class="po-row">
    <po-input class="po-md-6" name="optionLabel" [(ngModel)]="option.label" p-label="Option Label" p-required>
    </po-input>

    <po-input class="po-md-6" name="optionValue" [(ngModel)]="option.value" p-label="Option Value" p-required>
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-4" p-label="Add Option" [p-disabled]="fOption.invalid" (p-click)="addOption()">
    </po-button>
  </div>
</form>

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

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-label="Placeholder"> </po-input>

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
    name="size"
    [(ngModel)]="size"
    p-columns="4"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <div class="po-lg-3 po-md-6">
      <po-button p-label="Sample Restore" (p-click)="restore()"> </po-button>
    </div>
  </div>
  <form></form>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-select-labs/sample-po-select-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoSelectOption, PoSelectOptionGroup } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-select-labs',
  templateUrl: './sample-po-select-labs.component.html',
  standalone: false
})
export class SamplePoSelectLabsComponent implements OnInit {
  private readonly cdr = inject(ChangeDetectorRef);

  additionalHelpTooltip: string;
  event: string;
  help: string;
  label: string;
  option: PoSelectOption;
  options: Array<PoSelectOption | PoSelectOptionGroup>;
  optionsGroup: string;
  optionsGroupList: Array<PoSelectOption> = [];
  placeholder: string;
  properties: Array<string>;
  fieldErrorMessage: string;
  select: string;
  selectedOptionsGroup: string;
  selectOptionGroupSwitch: boolean;
  size: string;

  readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'readonly', label: 'Read Only' },
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
    this.options = this.verifyOptionObject(this.options.concat(), this.option, this.optionsGroup);
    this.option = { label: undefined, value: undefined };
    this.cdr.detectChanges();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  optionsGroupSelection() {
    this.optionsGroup = this.selectedOptionsGroup;
  }

  restore() {
    this.additionalHelpTooltip = '';
    this.event = '';
    this.help = undefined;
    this.label = undefined;
    this.option = { label: undefined, value: undefined };
    this.options = [];
    this.optionsGroup = undefined;
    this.optionsGroupList = [];
    this.placeholder = '';
    this.properties = [];
    this.fieldErrorMessage = '';
    this.select = '';
    this.selectOptionGroupSwitch = false;
    this.selectedOptionsGroup = undefined;
    this.size = 'medium';
  }

  restoreSwitch(event: boolean) {
    if (!event) {
      this.selectedOptionsGroup = undefined;
      this.optionsGroup = undefined;
    }
  }

  private insertGroupIntoSelectInput(value: string) {
    this.selectedOptionsGroup = value;
    this.optionsGroupList = [...this.optionsGroupList, { label: value, value }];
  }

  private verifyOptionObject(
    options: Array<PoSelectOption | PoSelectOptionGroup>,
    option: PoSelectOption,
    optionsGroup?: string
  ) {
    const { label, value } = option;

    if (optionsGroup) {
      const indexItem = options.findIndex(
        (optionItem: PoSelectOptionGroup) => optionItem.label === optionsGroup && 'options' in optionItem
      );

      if (indexItem === -1) {
        this.insertGroupIntoSelectInput(optionsGroup);
        return [...options, { label: optionsGroup, options: [{ label, value }] }];
      }

      (options as Array<PoSelectOptionGroup>)[indexItem].options.push({ label, value });
      return options;
    }

    return [...options, { label, value }];
  }
}
`),t()()()()(),n(21,"div",10),l(22,"sample-po-select-labs"),t(),l(23,"hr")),p&2&&(s(5),_("po-icon "+i.sampleCodeButtonIcon),s(),w(" ",i.sampleCodeButtonLabel,""),s(),c("ngClass",P(4,qe,i.hideSampleCodeTabs)))},dependencies:[T,y,C,x,Ee],encapsulation:2})}return a})();var Z=(()=>{class a{http=L(le);url="https://po-sample-api.onrender.com/v1/sampleSelect";getCitiesByState(r){return this.http.get(`${this.url}/getCities/${r}`)}getStates(){return this.http.get(`${this.url}/getStates`)}static \u0275fac=function(p){return new(p||a)};static \u0275prov=ee({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function Fe(a,J){if(a&1&&(n(0,"div",17),l(1,"po-avatar",18),n(2,"div",19)(3,"div",20),e(4),t(),n(5,"div",21),e(6),t()()()),a&2){let r=J.$implicit;s(),ne("p-src","https://po-sample-api.onrender.com/v1/sampleSelect/",r.value,".png"),s(3),K(r.label),s(2),K(r.value)}}var fe=(()=>{class a{sampleService=L(Z);address;city;cityOptions;document;documentLabel;documentType;mask;minLength;name;nameLabel;state;stateOptions;options=[{label:"CPF",value:"CPF"},{label:"CNPJ",value:"CNPJ"}];citiesSubscription;statesSubscription;ngOnDestroy(){this.citiesSubscription?.unsubscribe(),this.statesSubscription?.unsubscribe()}ngOnInit(){this.initialize(),this.getStates(),this.changeType(this.documentType)}changeType(r){r==="CPF"?(this.documentLabel="CPF Number",this.mask="999.999.999-99",this.minLength=14,this.nameLabel="Client Name"):(this.documentLabel="CNPJ Number",this.mask="99.999.999/9999-99",this.minLength=18,this.nameLabel="Company Name"),this.address="",this.document="",this.name=""}initialize(){this.cityOptions=[],this.stateOptions=[],this.documentType="CPF"}onChangeState(){this.getCitiesByState(this.state)}getCityByValue(r){let p=this.cityOptions.find(i=>i.value===r);return p?p.label:""}getStateByValue(r){let p=this.stateOptions.find(i=>i.value===r);return p?p.label:""}getCitiesByState(r){this.citiesSubscription=this.sampleService.getCitiesByState(r).subscribe(p=>{this.cityOptions=p.items,this.city=this.cityOptions[0].value})}getStates(){this.statesSubscription=this.sampleService.getStates().subscribe(r=>{this.stateOptions=r.items,this.state="sp",this.getCitiesByState(this.state)})}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=v({type:a,selectors:[["sample-po-select-customer-registration"]],standalone:!1,features:[ie([Z])],decls:27,vars:22,consts:[["f","ngForm"],["modal",""],[1,"po-row"],["name","documentType","p-label","Document type",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","document","p-mask-format-model","","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-label","p-mask","p-minlength"],["name","name","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-label"],["name","address","p-label","Address",1,"po-md-6",3,"ngModelChange","ngModel"],["name","state","p-label","State",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["p-select-option-template",""],["name","city","p-label","City",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Send Informations",1,"po-md-4",3,"p-click","p-disabled"],["p-title","Informations"],["p-label","Document type",1,"po-md-6",3,"p-value"],[1,"po-md-6",3,"p-label","p-value"],["p-label","Address",1,"po-md-6",3,"p-value"],["p-label","State",1,"po-md-6",3,"p-value"],["p-label","City",1,"po-md-6",3,"p-value"],[1,"sample-select-option-template-container"],["p-size","xs",3,"p-src"],[1,"sample-select-option-template-margin"],[1,"sample-select-option-template-label"],[1,"sample-select-option-template-value"]],template:function(p,i){if(p&1){let m=I();n(0,"form",null,0)(2,"div",2)(3,"po-radio-group",3),h("ngModelChange",function(o){return u(m),b(i.documentType,o)||(i.documentType=o),S(o)}),E("p-change",function(o){return u(m),S(i.changeType(o))}),t(),n(4,"po-input",4),h("ngModelChange",function(o){return u(m),b(i.document,o)||(i.document=o),S(o)}),t()(),n(5,"div",2)(6,"po-input",5),h("ngModelChange",function(o){return u(m),b(i.name,o)||(i.name=o),S(o)}),t(),n(7,"po-input",6),h("ngModelChange",function(o){return u(m),b(i.address,o)||(i.address=o),S(o)}),t()(),n(8,"div",2)(9,"po-select",7),h("ngModelChange",function(o){return u(m),b(i.state,o)||(i.state=o),S(o)}),E("p-change",function(){return u(m),S(i.onChangeState())}),te(10,Fe,7,4,"ng-template",8),t(),n(11,"po-select",9),h("ngModelChange",function(o){return u(m),b(i.city,o)||(i.city=o),S(o)}),t()(),n(12,"div",2)(13,"po-button",10),E("p-click",function(){u(m);let o=q(15);return S(o.open())}),t()()(),n(14,"po-modal",11,1)(16,"div",2),l(17,"po-info",12)(18,"po-info",13),t(),l(19,"po-divider"),n(20,"div",2),l(21,"po-info",13)(22,"po-info",14),t(),l(23,"po-divider"),n(24,"div",2),l(25,"po-info",15)(26,"po-info",16),t()()}if(p&2){let m=q(1);s(3),g("ngModel",i.documentType),c("p-options",i.options),s(),g("ngModel",i.document),c("p-label",i.documentLabel)("p-mask",i.mask)("p-minlength",i.minLength),s(2),g("ngModel",i.name),c("p-label",i.nameLabel),s(),g("ngModel",i.address),s(2),g("ngModel",i.state),c("p-options",i.stateOptions),s(2),g("ngModel",i.city),c("p-options",i.cityOptions),s(2),c("p-disabled",m.invalid),s(4),c("p-value",i.documentType),s(),c("p-label",i.documentLabel)("p-value",i.document),s(3),c("p-label",i.nameLabel)("p-value",i.name),s(),c("p-value",i.address),s(3),c("p-value",i.getStateByValue(i.state)),s(),c("p-value",i.getCityByValue(i.city))}},dependencies:[W,V,z,k,B,se,R,N,A,j,M,D,me],styles:[".sample-select-option-template-container[_ngcontent-%COMP%]{display:inline-flex;align-items:flex-start;width:100%}.sample-select-option-template-margin[_ngcontent-%COMP%]{margin:5px}.sample-select-option-template-label[_ngcontent-%COMP%]{font-size:16px}.sample-select-option-template-value[_ngcontent-%COMP%]{font-size:12px;text-transform:uppercase}"]})}return a})();var ze=a=>({"docs-sample-code-tabs":a}),Ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=v({type:a,selectors:[["sample-po-select-customer-registration-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,i){p&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Select - Customer registration"),t(),n(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-select-customer-registration/sample-po-select-customer-registration.component.html"),t(),n(13,"pre",7),e(14,`<form #f="ngForm">
  <div class="po-row">
    <po-radio-group
      class="po-md-6"
      name="documentType"
      [(ngModel)]="documentType"
      p-label="Document type"
      [p-options]="options"
      (p-change)="changeType($event)"
    >
    </po-radio-group>

    <po-input
      class="po-md-6"
      name="document"
      [(ngModel)]="document"
      p-mask-format-model
      p-required
      [p-label]="documentLabel"
      [p-mask]="mask"
      [p-minlength]="minLength"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-md-6" name="name" [(ngModel)]="name" p-required [p-label]="nameLabel"> </po-input>

    <po-input class="po-md-6" name="address" [(ngModel)]="address" p-label="Address"> </po-input>
  </div>

  <div class="po-row">
    <po-select
      class="po-md-6"
      name="state"
      [(ngModel)]="state"
      p-label="State"
      [p-options]="stateOptions"
      (p-change)="onChangeState()"
    >
      <ng-template p-select-option-template let-option>
        <div class="sample-select-option-template-container">
          <po-avatar p-size="xs" p-src="https://po-sample-api.onrender.com/v1/sampleSelect/{ { option.value }}.png">
          </po-avatar>

          <div class="sample-select-option-template-margin">
            <div class="sample-select-option-template-label">{ { option.label }}</div>
            <div class="sample-select-option-template-value">{ { option.value }}</div>
          </div>
        </div>
      </ng-template>
    </po-select>

    <po-select class="po-md-6" name="city" [(ngModel)]="city" p-label="City" [p-options]="cityOptions"> </po-select>
  </div>

  <div class="po-row">
    <po-button class="po-md-4" p-label="Send Informations" [p-disabled]="f.invalid" (p-click)="modal.open()">
    </po-button>
  </div>
</form>

<po-modal #modal p-title="Informations">
  <div class="po-row">
    <po-info class="po-md-6" p-label="Document type" [p-value]="documentType"> </po-info>

    <po-info class="po-md-6" [p-label]="documentLabel" [p-value]="document"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-md-6" [p-label]="nameLabel" [p-value]="name"> </po-info>

    <po-info class="po-md-6" p-label="Address" [p-value]="address"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-md-6" p-label="State" [p-value]="getStateByValue(state)"> </po-info>

    <po-info class="po-md-6" p-label="City" [p-value]="getCityByValue(city)"> </po-info>
  </div>
</po-modal>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-select-customer-registration/sample-po-select-customer-registration.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnDestroy, OnInit, inject } from '@angular/core';

import { Subscription } from 'rxjs';

import { PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

import { SamplePoSelectCustomerRegistrationService } from './sample-po-select-customer-registration.service';

@Component({
  selector: 'sample-po-select-customer-registration',
  templateUrl: './sample-po-select-customer-registration.component.html',
  providers: [SamplePoSelectCustomerRegistrationService],
  styles: [
    \`
      .sample-select-option-template-container {
        display: inline-flex;
        align-items: flex-start;
        width: 100%;
      }

      .sample-select-option-template-margin {
        margin: 5px;
      }

      .sample-select-option-template-label {
        font-size: 16px;
      }

      .sample-select-option-template-value {
        font-size: 12px;
        text-transform: uppercase;
      }
    \`
  ],
  standalone: false
})
export class SamplePoSelectCustomerRegistrationComponent implements OnDestroy, OnInit {
  private sampleService = inject(SamplePoSelectCustomerRegistrationService);

  address: string;
  city: number;
  cityOptions: Array<PoSelectOption>;
  document: string;
  documentLabel;
  documentType: string;
  mask: string;
  minLength: number;
  name: string;
  nameLabel: string;
  state: string;
  stateOptions: Array<PoSelectOption>;

  readonly options: Array<PoRadioGroupOption> = [
    { label: 'CPF', value: 'CPF' },
    { label: 'CNPJ', value: 'CNPJ' }
  ];

  private citiesSubscription: Subscription;
  private statesSubscription: Subscription;

  ngOnDestroy() {
    this.citiesSubscription?.unsubscribe();
    this.statesSubscription?.unsubscribe();
  }

  ngOnInit() {
    this.initialize();
    this.getStates();
    this.changeType(this.documentType);
  }

  changeType(documentType) {
    if (documentType === 'CPF') {
      this.documentLabel = 'CPF Number';
      this.mask = '999.999.999-99';
      this.minLength = 14;
      this.nameLabel = 'Client Name';
    } else {
      this.documentLabel = 'CNPJ Number';
      this.mask = '99.999.999/9999-99';
      this.minLength = 18;
      this.nameLabel = 'Company Name';
    }

    this.address = '';
    this.document = '';
    this.name = '';
  }

  initialize() {
    this.cityOptions = [];
    this.stateOptions = [];
    this.documentType = 'CPF';
  }

  onChangeState() {
    this.getCitiesByState(this.state);
  }

  getCityByValue(cityValue: number) {
    const cityLabel = this.cityOptions.find(city => city.value === cityValue);
    return cityLabel ? cityLabel.label : '';
  }

  getStateByValue(stateValue: string) {
    const stateLabel = this.stateOptions.find(state => state.value === stateValue);
    return stateLabel ? stateLabel.label : '';
  }

  private getCitiesByState(state: string) {
    this.citiesSubscription = this.sampleService
      .getCitiesByState(state)
      .subscribe((cities: { items: Array<PoSelectOption> }) => {
        this.cityOptions = cities.items;
        this.city = this.cityOptions[0].value as number;
      });
  }

  private getStates() {
    this.statesSubscription = this.sampleService.getStates().subscribe((states: { items: Array<PoSelectOption> }) => {
      this.stateOptions = states.items;
      this.state = 'sp';

      this.getCitiesByState(this.state);
    });
  }
}
`),t(),n(21,"label",6),e(22,"sample-po-select-customer-registration/sample-po-select-customer-registration.service.ts"),t(),n(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SamplePoSelectCustomerRegistrationService {
  private http = inject(HttpClient);

  private url: string = 'https://po-sample-api.onrender.com/v1/sampleSelect';

  getCitiesByState(uf: string) {
    return this.http.get(\`\${this.url}/getCities/\${uf}\`);
  }

  getStates() {
    return this.http.get(\`\${this.url}/getStates\`);
  }
}
`),t()()()()(),n(25,"div",10),l(26,"sample-po-select-customer-registration"),t(),l(27,"hr")),p&2&&(s(5),_("po-icon "+i.sampleCodeButtonIcon),s(),w(" ",i.sampleCodeButtonLabel,""),s(),c("ngClass",P(4,ze,i.hideSampleCodeTabs)))},dependencies:[T,y,C,x,fe],encapsulation:2})}return a})();var xe=(()=>{class a{select;fieldLabel="nomeFantasia";fieldValue="cnpj";empresas=[{codigo:"1",nomeFantasia:"TOTVS SA",razaoSocial:"TOTVS LTDA",label:"TOTVS COMPANY",cnpj:"01.234.567/0000-01",value:"100",id:"10",email:"totvscompany@sample.com",data:"10/03/2015",origem:"S\xE3o Paulo"},{codigo:"2",nomeFantasia:"INSTITUTO TOTVS DE ENSINO SA",razaoSocial:"INST TOTVS DE ENSINO LTDA",label:"INST TOTVS",cnpj:"02.345.678/0000-02",value:"200",id:"20",email:"insttotvs@sample.com",data:"10/10/2020",origem:"Joinville"},{codigo:"3",nomeFantasia:"TOTVS ENTERPRISE SA",razaoSocial:"TOTVS ENTERPRISE LTDA ",label:"ENT TOTVS",cnpj:"03.456.789/0000-03",value:"300",id:"30",email:"enttotvs@sample.com",data:"10/01/2022",origem:"Curitiba"}];labels=[{label:"Dados",options:[{label:"nomeFantasia",value:"nomeFantasia"},{label:"razaoSocial",value:"razaoSocial"},{label:"email",value:"email"}]},{label:"Cidade",options:[{label:"origem",value:"origem"}]}];values=[{label:"codigo",value:"codigo"},{label:"cnpj",value:"cnpj"},{label:"id",value:"id"},{label:"data",value:"data"}];onChange(r){this.select=void 0}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=v({type:a,selectors:[["sample-po-select-companies"]],standalone:!1,decls:5,vars:9,consts:[["name","select","p-label","PO Select",3,"ngModelChange","ngModel","p-field-value","p-field-label","p-options"],["p-label","Model","name","selectInfo",3,"p-valueChange","p-value"],[1,"po-row"],["name","fieldLabel","p-label","p-field-label",1,"po-md-6",3,"p-change","ngModelChange","p-options","ngModel"],["name","selectValue","p-label","p-field-value",1,"po-md-6",3,"p-change","ngModelChange","p-options","ngModel"]],template:function(p,i){p&1&&(n(0,"po-select",0),h("ngModelChange",function(d){return b(i.select,d)||(i.select=d),d}),t(),n(1,"po-info",1),h("p-valueChange",function(d){return b(i.select,d)||(i.select=d),d}),t(),n(2,"div",2)(3,"po-select",3),E("p-change",function(d){return i.onChange(d)}),h("ngModelChange",function(d){return b(i.fieldLabel,d)||(i.fieldLabel=d),d}),t(),n(4,"po-select",4),E("p-change",function(d){return i.onChange(d)}),h("ngModelChange",function(d){return b(i.fieldValue,d)||(i.fieldValue=d),d}),t()()),p&2&&(g("ngModel",i.select),c("p-field-value",i.fieldValue)("p-field-label",i.fieldLabel)("p-options",i.empresas),s(),g("p-value",i.select),s(2),c("p-options",i.labels),g("ngModel",i.fieldLabel),s(),c("p-options",i.values),g("ngModel",i.fieldValue))},dependencies:[V,k,M,D],encapsulation:2})}return a})();var Ne=a=>({"docs-sample-code-tabs":a}),ye=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=v({type:a,selectors:[["sample-po-select-companies-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,i){p&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Select Companies"),t(),n(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-select-companies/sample-po-select-companies.component.html"),t(),n(13,"pre",7),e(14,`<po-select
  name="select"
  p-label="PO Select"
  [(ngModel)]="select"
  [p-field-value]="fieldValue"
  [p-field-label]="fieldLabel"
  [p-options]="empresas"
>
</po-select>

<po-info p-label="Model" name="selectInfo" [(p-value)]="select"> </po-info>

<div class="po-row">
  <po-select
    class="po-md-6"
    name="fieldLabel"
    p-label="p-field-label"
    [p-options]="labels"
    (p-change)="onChange($event)"
    [(ngModel)]="fieldLabel"
  >
  </po-select>

  <po-select
    class="po-md-6"
    name="selectValue"
    p-label="p-field-value"
    [p-options]="values"
    (p-change)="onChange($event)"
    [(ngModel)]="fieldValue"
  >
  </po-select>
</div>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-select-companies/sample-po-select-companies.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoSelectOption, PoSelectOptionGroup } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-select-companies',
  templateUrl: './sample-po-select-companies.component.html',
  standalone: false
})
export class SamplePoSelectCompaniesComponent {
  select: Array<string>;
  fieldLabel = 'nomeFantasia';
  fieldValue = 'cnpj';

  empresas: Array<any> = [
    {
      codigo: '1',
      nomeFantasia: 'TOTVS SA',
      razaoSocial: 'TOTVS LTDA',
      label: 'TOTVS COMPANY',
      cnpj: '01.234.567/0000-01',
      value: '100',
      id: '10',
      email: 'totvscompany@sample.com',
      data: '10/03/2015',
      origem: 'S\xE3o Paulo'
    },
    {
      codigo: '2',
      nomeFantasia: 'INSTITUTO TOTVS DE ENSINO SA',
      razaoSocial: 'INST TOTVS DE ENSINO LTDA',
      label: 'INST TOTVS',
      cnpj: '02.345.678/0000-02',
      value: '200',
      id: '20',
      email: 'insttotvs@sample.com',
      data: '10/10/2020',
      origem: 'Joinville'
    },
    {
      codigo: '3',
      nomeFantasia: 'TOTVS ENTERPRISE SA',
      razaoSocial: 'TOTVS ENTERPRISE LTDA ',
      label: 'ENT TOTVS',
      cnpj: '03.456.789/0000-03',
      value: '300',
      id: '30',
      email: 'enttotvs@sample.com',
      data: '10/01/2022',
      origem: 'Curitiba'
    }
  ];

  readonly labels: Array<PoSelectOptionGroup> = [
    {
      label: 'Dados',
      options: [
        { label: 'nomeFantasia', value: 'nomeFantasia' },
        { label: 'razaoSocial', value: 'razaoSocial' },
        { label: 'email', value: 'email' }
      ]
    },
    {
      label: 'Cidade',
      options: [{ label: 'origem', value: 'origem' }]
    }
  ];

  readonly values: Array<PoSelectOption> = [
    { label: 'codigo', value: 'codigo' },
    { label: 'cnpj', value: 'cnpj' },
    { label: 'id', value: 'id' },
    { label: 'data', value: 'data' }
  ];

  onChange(event) {
    this.select = undefined;
  }
}
`),t()()()()(),n(21,"div",10),l(22,"sample-po-select-companies"),t(),l(23,"hr")),p&2&&(s(5),_("po-icon "+i.sampleCodeButtonIcon),s(),w(" ",i.sampleCodeButtonLabel,""),s(),c("ngClass",P(4,Ne,i.hideSampleCodeTabs)))},dependencies:[T,y,C,x,xe],encapsulation:2})}return a})();var _e=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=v({type:a,selectors:[["sample-po-select-doc"]],standalone:!1,decls:970,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-combo-option-template"],["href","/documentation/po-select-option-template"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","any[]"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"language-html"],[1,"language-typescript"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","number"]],template:function(p,i){p&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoSelectComponent"),t()(),n(21,"div",2)(22,"p"),e(23,` O componente po-select exibe uma lista de valores e permite que o usu\xE1rio selecione um desses valores.
Os valores listados podem ser fixos ou din\xE2micos de acordo com a necessidade do desenvolvedor, dando mais flexibilidade ao componente.
O po-select n\xE3o permite que o usu\xE1rio informe um valor diferente dos valores listados, isso garante a consist\xEAncia da informa\xE7\xE3o.
O po-select n\xE3o permite que sejam passados valores duplicados, undefined e null para as op\xE7\xF5es, excluindo-os da lista.`),t(),n(24,"blockquote")(25,"p"),e(26,"Ao passar um valor para o "),n(27,"em"),e(28,"model"),t(),e(29," que n\xE3o est\xE1 na lista de op\xE7\xF5es, o mesmo ser\xE1 definido como "),n(30,"code"),e(31,"undefined"),t(),e(32,"."),t()(),n(33,"p"),e(34,"Tamb\xE9m existe a possibilidade de utilizar um "),n(35,"em"),e(36,"template"),t(),e(37,` para a exibi\xE7\xE3o dos itens da lista,
veja mais em `),n(38,"strong")(39,"a",6),e(40,"p-combo-option-template"),t()(),e(41,"."),t(),n(42,"blockquote")(43,"p"),e(44,"Obs: o template "),n(45,"strong")(46,"a",7),e(47,"p-select-option-template"),t()(),e(48," ser\xE1 depreciado na vers\xE3o 14.x.x."),t()(),n(49,"h4"),e(50,"Tokens customiz\xE1veis"),t(),n(51,"p"),e(52,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),n(53,"blockquote")(54,"p"),e(55,"Para maiores informa\xE7\xF5es, acesse o guia "),n(56,"a",8),e(57,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(58,"."),t()(),n(59,"table")(60,"thead")(61,"tr")(62,"th"),e(63,"Propriedade"),t(),n(64,"th"),e(65,"Descri\xE7\xE3o"),t(),n(66,"th"),e(67,"Valor Padr\xE3o"),t()()(),n(68,"tbody")(69,"tr")(70,"td")(71,"strong"),e(72,"Default Values"),t()(),l(73,"td")(74,"td"),t(),n(75,"tr")(76,"td")(77,"code"),e(78,"--font-family"),t()(),n(79,"td"),e(80,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(81,"td")(82,"code"),e(83,"var(--font-family-theme)"),t()()(),n(84,"tr")(85,"td")(86,"code"),e(87,"--font-size"),t()(),n(88,"td"),e(89,"Tamanho da fonte"),t(),n(90,"td")(91,"code"),e(92,"var(--font-size-default)"),t()()(),n(93,"tr")(94,"td")(95,"code"),e(96,"--text-color-empty"),t()(),n(97,"td"),e(98,"Cor do placeholder"),t(),n(99,"td")(100,"code"),e(101,"var(--color-neutral-light-30)"),t()()(),n(102,"tr")(103,"td")(104,"code"),e(105,"--color"),t()(),n(106,"td"),e(107,"Cor da borda"),t(),n(108,"td")(109,"code"),e(110,"var(--color-neutral-dark-70)"),t()()(),n(111,"tr")(112,"td")(113,"code"),e(114,"--background"),t()(),n(115,"td"),e(116,"Cor de background"),t(),n(117,"td")(118,"code"),e(119,"var(--color-neutral-light-05)"),t()()(),n(120,"tr")(121,"td")(122,"code"),e(123,"--text-color"),t()(),n(124,"td"),e(125,"Cor do texto"),t(),n(126,"td")(127,"code"),e(128,"var(--color-neutral-dark-90)"),t()()(),n(129,"tr")(130,"td")(131,"code"),e(132,"--padding-horizontal"),t()(),n(133,"td"),e(134,"Preenchimento horizontal"),t(),n(135,"td")(136,"code"),e(137,"0.5em"),t()()(),n(138,"tr")(139,"td")(140,"code"),e(141,"--padding-vertical"),t()(),n(142,"td"),e(143,"Preenchimento vertical"),t(),n(144,"td")(145,"code"),e(146,"0.7em"),t()()(),n(147,"tr")(148,"td")(149,"strong"),e(150,"Hover"),t()(),l(151,"td")(152,"td"),t(),n(153,"tr")(154,"td")(155,"code"),e(156,"--color-hover"),t()(),n(157,"td"),e(158,"Cor principal no estado hover"),t(),n(159,"td")(160,"code"),e(161,"var(--color-brand-01-dark)"),t()()(),n(162,"tr")(163,"td")(164,"code"),e(165,"--background-hover"),t()(),n(166,"td"),e(167,"Cor de background no estado hover"),t(),n(168,"td")(169,"code"),e(170,"var(--color-brand-01-lighter)"),t()()(),n(171,"tr")(172,"td")(173,"strong"),e(174,"Focused"),t()(),l(175,"td")(176,"td"),t(),n(177,"tr")(178,"td")(179,"code"),e(180,"--outline-color-focused"),t()(),n(181,"td"),e(182,"Cor do outline do estado de focus"),t(),n(183,"td")(184,"code"),e(185,"var(--color-action-focus)"),t()()(),n(186,"tr")(187,"td")(188,"code"),e(189,"--color-focused"),t()(),n(190,"td"),e(191,"Cor da borda no estado de focus"),t(),n(192,"td")(193,"code"),e(194,"var(--color-action-default)"),t()()(),n(195,"tr")(196,"td")(197,"strong"),e(198,"Disabled"),t()(),l(199,"td")(200,"td"),t(),n(201,"tr")(202,"td")(203,"code"),e(204,"--color-disabled"),t()(),n(205,"td"),e(206,"Cor principal no estado disabled"),t(),n(207,"td")(208,"code"),e(209,"var(--color-neutral-light-30)"),t()()(),n(210,"tr")(211,"td")(212,"code"),e(213,"--background-color-disabled"),t(),e(214,"\xA0"),t(),n(215,"td"),e(216,"Cor de background no estado disabled"),t(),n(217,"td")(218,"code"),e(219,"var(--color-neutral-light-20)"),t()()()()()(),n(220,"div",9)(221,"h4",10),e(222,"Seletor"),t(),n(223,"pre",11),e(224,`<po-select
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-field-label="string"
    p-field-value="string"
    p-help="string"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    name="string"
    (ng-model-change)="EventEmitter"
    p-optional="boolean"
    p-options="any[]"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-readonly="boolean"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string" >
</po-select>
`),t()(),n(225,"h4",12),e(226,"Propriedades"),t(),n(227,"table",13)(228,"tr",14)(229,"th",15),e(230,"Nome"),t(),n(231,"th",15),e(232,"Tipo"),t(),n(233,"th",15),e(234,"Padr\xE3o"),t(),n(235,"th",15),e(236,"Descri\xE7\xE3o"),t()(),n(237,"tr",16)(238,"td",17)(239,"div",18)(240,"span",19),e(241," (p-additional-help)"),l(242,"br"),t()(),n(243,"div",20),e(244,"Deprecated"),t()(),n(245,"td",21)(246,"code",22),e(247,"EventEmitter"),t()(),n(248,"td",23),e(249,"-"),t(),n(250,"td",24)(251,"em")(252,"strong"),e(253,"(opcional)"),t()(),n(254,"p"),e(255,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),n(256,"code"),e(257,"p-help"),t(),e(258,"."),t(),n(259,"blockquote")(260,"p"),e(261,"Essa propriedade est\xE1 "),n(262,"strong"),e(263,"depreciada"),t(),e(264," e ser\xE1 removida na vers\xE3o "),n(265,"code"),e(266,"23.x.x"),t(),e(267,". Recomendamos utilizar a propriedade "),n(268,"code"),e(269,"p-helper"),t(),e(270," que oferece mais recursos e flexibilidade."),t()()()(),n(271,"tr",16)(272,"td",17)(273,"div",25)(274,"span",26),e(275," p-additional-help-tooltip"),l(276,"br"),t()(),n(277,"div",20),e(278,"Deprecated"),t()(),n(279,"td",21)(280,"code",27),e(281,"string"),t()(),n(282,"td",23),e(283,"-"),t(),n(284,"td",24)(285,"em")(286,"strong"),e(287,"(opcional)"),t()(),n(288,"p"),e(289,"Exibe um \xEDcone de ajuda adicional ao "),n(290,"code"),e(291,"p-help"),t(),e(292,`, com o texto desta propriedade no tooltip.
Se o evento `),n(293,"code"),e(294,"p-additional-help"),t(),e(295,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),n(296,"strong"),e(297,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(298,"blockquote")(299,"p"),e(300,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),n(301,"blockquote")(302,"p"),e(303,"Essa propriedade est\xE1 "),n(304,"strong"),e(305,"depreciada"),t(),e(306," e ser\xE1 removida na vers\xE3o "),n(307,"code"),e(308,"23.x.x"),t(),e(309,". Recomendamos utilizar a propriedade "),n(310,"code"),e(311,"p-helper"),t(),e(312," que oferece mais recursos e flexibilidade."),t()()()(),n(313,"tr",16)(314,"td",17)(315,"div",25)(316,"span",26),e(317," p-append-in-body"),l(318,"br"),t()()(),n(319,"td",21)(320,"code",28),e(321,"boolean"),t()(),n(322,"td",23)(323,"p")(324,"code"),e(325,"false"),t()()(),n(326,"td",24)(327,"em")(328,"strong"),e(329,"(opcional)"),t()(),n(330,"p"),e(331,"Define que o tooltip ("),n(332,"code"),e(333,"p-additional-help-tooltip"),t(),e(334," e/ou "),n(335,"code"),e(336,"p-error-limit"),t(),e(337,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),n(338,"blockquote")(339,"p"),e(340,"Quando utilizado com "),n(341,"code"),e(342,"p-additional-help-tooltip"),t(),e(343,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),n(344,"tr",16)(345,"td",17)(346,"div",18)(347,"span",19),e(348," (p-blur)"),l(349,"br"),t()()(),n(350,"td",21)(351,"code",22),e(352,"EventEmitter"),t()(),n(353,"td",23),e(354,"-"),t(),n(355,"td",24)(356,"em")(357,"strong"),e(358,"(opcional)"),t()(),n(359,"p"),e(360,"Evento disparado ao sair do campo."),t()()(),n(361,"tr",16)(362,"td",17)(363,"div",18)(364,"span",19),e(365," (p-change)"),l(366,"br"),t()()(),n(367,"td",21)(368,"code",22),e(369,"EventEmitter"),t()(),n(370,"td",23),e(371,"-"),t(),n(372,"td",24)(373,"em")(374,"strong"),e(375,"(opcional)"),t()(),n(376,"p"),e(377,"Evento disparado ao alterar valor do campo."),t()()(),n(378,"tr",16)(379,"td",17)(380,"div",25)(381,"span",26),e(382," p-disabled"),l(383,"br"),t()()(),n(384,"td",21)(385,"code",28),e(386,"boolean"),t()(),n(387,"td",23)(388,"p")(389,"code"),e(390,"false"),t()()(),n(391,"td",24)(392,"em")(393,"strong"),e(394,"(opcional)"),t()(),n(395,"p"),e(396,"Indica se o campo ser\xE1 desabilitado."),t()()(),n(397,"tr",16)(398,"td",17)(399,"div",25)(400,"span",26),e(401," p-error-limit"),l(402,"br"),t()()(),n(403,"td",21)(404,"code",28),e(405,"boolean"),t()(),n(406,"td",23)(407,"p")(408,"code"),e(409,"false"),t()()(),n(410,"td",24)(411,"em")(412,"strong"),e(413,"(opcional)"),t()(),n(414,"p"),e(415,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(416,"blockquote")(417,"p"),e(418,"Caso essa propriedade seja definida como "),n(419,"code"),e(420,"true"),t(),e(421,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),n(422,"tr",16)(423,"td",17)(424,"div",25)(425,"span",26),e(426," p-field-error-message"),l(427,"br"),t()()(),n(428,"td",21)(429,"code",27),e(430,"string"),t()(),n(431,"td",23),e(432,"-"),t(),n(433,"td",24)(434,"em")(435,"strong"),e(436,"(opcional)"),t()(),n(437,"p"),e(438,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),t(),n(439,"blockquote")(440,"p"),e(441,"Necess\xE1rio que a propriedade "),n(442,"code"),e(443,"p-required"),t(),e(444," esteja habilitada."),t()()()(),n(445,"tr",16)(446,"td",17)(447,"div",25)(448,"span",26),e(449," p-field-label"),l(450,"br"),t()()(),n(451,"td",21)(452,"code",27),e(453,"string"),t()(),n(454,"td",23)(455,"p")(456,"code"),e(457,"label"),t()()(),n(458,"td",24)(459,"em")(460,"strong"),e(461,"(opcional)"),t()(),n(462,"p"),e(463,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),n(464,"code"),e(465,"p-options"),t(),e(466,"), esta propriedade ser\xE1 respons\xE1vel pelo texto de apresenta\xE7\xE3o de cada item da lista."),t()()(),n(467,"tr",16)(468,"td",17)(469,"div",25)(470,"span",26),e(471," p-field-value"),l(472,"br"),t()()(),n(473,"td",21)(474,"code",27),e(475,"string"),t()(),n(476,"td",23)(477,"p")(478,"code"),e(479,"value"),t()()(),n(480,"td",24)(481,"em")(482,"strong"),e(483,"(opcional)"),t()(),n(484,"p"),e(485,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),n(486,"code"),e(487,"p-options"),t(),e(488,"), esta propriedade ser\xE1 respons\xE1vel pelo valor de cada item da lista."),t()()(),n(489,"tr",16)(490,"td",17)(491,"div",25)(492,"span",26),e(493," p-help"),l(494,"br"),t()()(),n(495,"td",21)(496,"code",27),e(497,"string"),t()(),n(498,"td",23),e(499,"-"),t(),n(500,"td",24)(501,"p"),e(502,"Texto de apoio para o campo."),t()()(),n(503,"tr",16)(504,"td",17)(505,"div",18)(506,"span",19),e(507," (p-keydown)"),l(508,"br"),t()()(),n(509,"td",21)(510,"code",22),e(511,"EventEmitter"),t()(),n(512,"td",23),e(513,"-"),t(),n(514,"td",24)(515,"em")(516,"strong"),e(517,"(opcional)"),t()(),n(518,"p"),e(519,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(520,"code"),e(521,"KeyboardEvent"),t(),e(522," com informa\xE7\xF5es sobre a tecla."),t()()(),n(523,"tr",16)(524,"td",17)(525,"div",25)(526,"span",26),e(527," p-label"),l(528,"br"),t()()(),n(529,"td",21)(530,"code",27),e(531,"string"),t()(),n(532,"td",23),e(533,"-"),t(),n(534,"td",24)(535,"p"),e(536,"R\xF3tulo exibido pelo componente."),t()()(),n(537,"tr",16)(538,"td",17)(539,"div",25)(540,"span",26),e(541," p-label-text-wrap"),l(542,"br"),t()()(),n(543,"td",21)(544,"code",28),e(545,"boolean"),t()(),n(546,"td",23)(547,"p")(548,"code"),e(549,"false"),t()()(),n(550,"td",24)(551,"em")(552,"strong"),e(553,"(opcional)"),t()(),n(554,"p"),e(555,"Habilita a quebra autom\xE1tica do texto da propriedade "),n(556,"code"),e(557,"p-label"),t(),e(558,". Quando "),n(559,"code"),e(560,"p-label-text-wrap"),t(),e(561,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),n(562,"tr",16)(563,"td",17)(564,"div",25)(565,"span",26),e(566," name"),l(567,"br"),t()()(),n(568,"td",21)(569,"code",27),e(570,"string"),t()(),n(571,"td",23),e(572,"-"),t(),n(573,"td",24)(574,"p"),e(575,"Nome do componente."),t()()(),n(576,"tr",16)(577,"td",17)(578,"div",18)(579,"span",19),e(580," (ngModelChange)"),l(581,"br"),t()()(),n(582,"td",21)(583,"code",22),e(584,"EventEmitter"),t()(),n(585,"td",23),e(586,"-"),t(),n(587,"td",24)(588,"em")(589,"strong"),e(590,"(opcional)"),t()(),n(591,"p"),e(592,"Fun\xE7\xE3o para atualizar o ngModel do componente, necess\xE1rio quando n\xE3o for utilizado dentro da tag form."),t(),n(593,"p"),e(594,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),n(595,"code"),e(596,"strictTemplates"),t(),e(597,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),t(),n(598,"pre")(599,"code"),e(600,`<po-select ... [ngModel]="selectModel" (ngModelChange)="selectModel = $event"> </po-select>
`),t()()()(),n(601,"tr",16)(602,"td",17)(603,"div",25)(604,"span",26),e(605," p-optional"),l(606,"br"),t()()(),n(607,"td",21)(608,"code",28),e(609,"boolean"),t()(),n(610,"td",23)(611,"p")(612,"code"),e(613,"false"),t()()(),n(614,"td",24)(615,"em")(616,"strong"),e(617,"(opcional)"),t()(),n(618,"p"),e(619,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(620,"blockquote")(621,"p"),e(622,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(623,"ul")(624,"li"),e(625,"O campo conter "),n(626,"code"),e(627,"p-required"),t(),e(628,";"),t(),n(629,"li"),e(630,"N\xE3o possuir "),n(631,"code"),e(632,"p-help"),t(),e(633," e/ou "),n(634,"code"),e(635,"p-label"),t(),e(636,"."),t()()()(),n(637,"tr",16)(638,"td",17)(639,"div",25)(640,"span",26),e(641," p-options"),l(642,"br"),t()()(),n(643,"td",21)(644,"code",29),e(645,"any[]"),t()(),n(646,"td",23),e(647,"-"),t(),n(648,"td",24)(649,"p"),e(650,"Nesta propriedade deve ser definido uma cole\xE7\xE3o de objetos que implementam a interface "),n(651,"code"),e(652,"PoSelectOption"),t(),e(653,`,
ou uma cole\xE7\xE3o de objetos dentro de grupos diferentes, que seriam da interface `),n(654,"code"),e(655,"PoSelectOptionGroup"),t(),e(656,"."),t(),n(657,"p"),e(658,"Caso esta lista estiver vazia, o model ser\xE1 "),n(659,"code"),e(660,"undefined"),t(),e(661,"."),t(),n(662,"blockquote")(663,"p"),e(664,`Essa propriedade \xE9 imut\xE1vel, ou seja, sempre que quiser atualizar a lista de op\xE7\xF5es dispon\xEDveis
atualize a refer\xEAncia do objeto:`),t()(),n(665,"pre")(666,"code"),e(667,`// atualiza a refer\xEAncia do objeto garantindo a atualiza\xE7\xE3o do template
this.options = [...this.options, { value: 'x', label: 'Nova op\xE7\xE3o' }];

// evite, pois n\xE3o atualiza a refer\xEAncia do objeto podendo gerar atrasos na atualiza\xE7\xE3o do template
this.options.push({ value: 'x', label: 'Nova op\xE7\xE3o' });
`),t()(),n(668,"blockquote")(669,"p"),e(670,"Para cole\xE7\xE3o de objetos dentro de grupos distintos ser\xE1 exibido a label e op\xE7\xF5es somente se a propriedade "),n(671,"code"),e(672,"options"),t(),e(673," possua valores. Sendo assim, a estrutura seguiria dessa forma:"),t()(),n(674,"pre")(675,"code"),e(676,`this.options = [{
 label: 'Op\xE7\xF5es',
 options: [
   { value: 1, label: 'op\xE7\xE3o 1' },
   { value: 2, label: 'op\xE7\xE3o 2' }
 ],
}];
`),t()(),n(677,"p"),e(678,`\xC9 poss\xEDvel a utiliza\xE7\xE3o de op\xE7\xF5es agrupadas e desagrupadas em conjunto, por\xE9m ser\xE1 feita a ordena\xE7\xE3o de exibir as op\xE7\xF5es
desagrupadas acima.`),t()()(),n(679,"tr",16)(680,"td",17)(681,"div",25)(682,"span",26),e(683," p-placeholder"),l(684,"br"),t()()(),n(685,"td",21)(686,"code",27),e(687,"string"),t()(),n(688,"td",23),e(689,"-"),t(),n(690,"td",24)(691,"em")(692,"strong"),e(693,"(opcional)"),t()(),n(694,"p"),e(695,"Mensagem que aparecer\xE1 enquanto nenhuma op\xE7\xE3o estiver selecionada."),t()()(),n(696,"tr",16)(697,"td",17)(698,"div",25)(699,"span",26),e(700," p-helper"),l(701,"br"),t()()(),n(702,"td",21)(703,"code",30),e(704,"PoHelperOptions "),t(),n(705,"code",27),e(706," string"),t()(),n(707,"td",23),e(708,"-"),t(),n(709,"td",24)(710,"em")(711,"strong"),e(712,"(opcional)"),t()(),n(713,"p"),e(714,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label."),t(),n(715,"blockquote")(716,"p"),e(717,"Caso o "),n(718,"code"),e(719,"p-label"),t(),e(720,` n\xE3o esteja definido, o componente po-helper n\xE3o ser\xE1 exibido.
Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional (`),n(721,"code"),e(722,"p-additional-help-tooltip"),t(),e(723," e "),n(724,"code"),e(725,"p-additional-help"),t(),e(726,") ser\xE1 ignorado."),t()()()(),n(727,"tr",16)(728,"td",17)(729,"div",25)(730,"span",26),e(731," p-readonly"),l(732,"br"),t()()(),n(733,"td",21)(734,"code",28),e(735,"boolean"),t()(),n(736,"td",23)(737,"p")(738,"code"),e(739,"false"),t()()(),n(740,"td",24)(741,"em")(742,"strong"),e(743,"(opcional)"),t()(),n(744,"p"),e(745,"Indica que o campo ser\xE1 somente para leitura."),t()()(),n(746,"tr",16)(747,"td",17)(748,"div",25)(749,"span",26),e(750," p-required"),l(751,"br"),t()()(),n(752,"td",21)(753,"code",28),e(754,"boolean"),t()(),n(755,"td",23)(756,"p")(757,"code"),e(758,"false"),t()()(),n(759,"td",24)(760,"em")(761,"strong"),e(762,"(opcional)"),t()(),n(763,"p"),e(764,"Define que o campo ser\xE1 obrigat\xF3rio."),t()()(),n(765,"tr",16)(766,"td",17)(767,"div",25)(768,"span",26),e(769," p-show-required"),l(770,"br"),t()()(),n(771,"td",21)(772,"code",28),e(773,"boolean"),t()(),n(774,"td",23),e(775,"-"),t(),n(776,"td",24)(777,"p"),e(778,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(779,"blockquote")(780,"p"),e(781,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(782,"ul")(783,"li"),e(784,"N\xE3o possuir "),n(785,"code"),e(786,"p-help"),t(),e(787," e/ou "),n(788,"code"),e(789,"p-label"),t(),e(790,"."),t()()()(),n(791,"tr",16)(792,"td",17)(793,"div",25)(794,"span",26),e(795," p-size"),l(796,"br"),t()()(),n(797,"td",21)(798,"code",27),e(799,"string"),t()(),n(800,"td",23)(801,"p")(802,"code"),e(803,"medium"),t()()(),n(804,"td",24)(805,"em")(806,"strong"),e(807,"(opcional)"),t()(),n(808,"p"),e(809,"Define o tamanho do componente:"),t(),n(810,"ul")(811,"li")(812,"code"),e(813,"small"),t(),e(814,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(815,"li")(816,"code"),e(817,"medium"),t(),e(818,": altura do input como 44px."),t()(),n(819,"blockquote")(820,"p"),e(821,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(822,"code"),e(823,"medium"),t(),e(824,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(825,"a",31),e(826,"po-theme"),t(),e(827,"."),t()()()()(),n(828,"h3",12),e(829,"M\xE9todos"),t(),n(830,"table",32)(831,"tr",16)(832,"th",33)(833,"div",25)(834,"h4")(835,"span",26),e(836," focus "),t()()()()(),n(837,"tr",24)(838,"td",24)(839,"p"),e(840,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(841,"p"),e(842,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(843,"pre")(844,"code"),e(845,`import { PoSelectComponent } from '@po-ui/ng-components';

...

@ViewChild(PoSelectComponent, { static: true }) select: PoSelectComponent;

focusSelect() {
  this.select.focus();
}
`),t()()()()(),l(846,"br"),n(847,"table",32)(848,"tr",16)(849,"th",33)(850,"div",25)(851,"h4")(852,"span",26),e(853," showAdditionalHelp "),t()()()()(),n(854,"tr",24)(855,"td",24)(856,"p"),e(857,"M\xE9todo que exibe "),n(858,"code"),e(859,"p-additionalHelpTooltip"),t(),e(860," ou executa a a\xE7\xE3o definida em "),n(861,"code"),e(862,"p-additionalHelp"),t(),e(863,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),n(864,"code"),e(865,"p-keydown"),t(),e(866,"."),t(),n(867,"blockquote")(868,"p"),e(869,"Exibe ou oculta o conte\xFAdo do componente "),n(870,"code"),e(871,"po-helper"),t(),e(872," quando o componente estiver com foco e com label vis\xEDvel."),t()(),n(873,"pre")(874,"code",34),e(875,`<po-select
 #select
 ...
 p-additional-help-tooltip="Mensagem de ajuda complementar"
 (p-keydown)="onKeyDown($event, select)"
></po-select>
`),t()(),n(876,"pre")(877,"code"),e(878,`//Exemplo com p-label e p-helper
<po-select
 #select
 ...
 p-label="Label do select"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, select)"
></po-select>
`),t()(),n(879,"pre")(880,"code",35),e(881,`onKeyDown(event: KeyboardEvent, inp: PoSelectComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),l(882,"br"),n(883,"h3"),e(884,"Interfaces"),t(),n(885,"h4",36)(886,"code",5),e(887,"PoSelectOptionGroup"),t()(),n(888,"div",2)(889,"p"),e(890,"Interface da cole\xE7\xF5es de itens em grupo, utilizando uma label para o grupo e as op\xE7\xF5es do tipo "),n(891,"code"),e(892,"PoSelectOption"),t(),e(893,"."),t()(),n(894,"h4",12),e(895,"Propriedades"),t(),n(896,"table",13)(897,"tr",14)(898,"th",15),e(899,"Nome"),t(),n(900,"th",15),e(901,"Tipo"),t(),n(902,"th",15),e(903,"Descri\xE7\xE3o"),t()(),n(904,"tr",16)(905,"td",17)(906,"div",25)(907,"span",26),e(908," label"),l(909,"br"),t()()(),n(910,"td",21)(911,"code",27),e(912,"string"),t()(),n(913,"td",24)(914,"p"),e(915,"Label para denominar o nome do grupo."),t()()(),n(916,"tr",16)(917,"td",17)(918,"div",25)(919,"span",26),e(920," options"),l(921,"br"),t()()(),n(922,"td",21)(923,"code",37),e(924,"Array<PoSelectOption>"),t()(),n(925,"td",24)(926,"p"),e(927,"Lista com as op\xE7\xF5es dispon\xEDveis em cada grupo."),t()()()(),n(928,"h4",36)(929,"code",5),e(930,"PoSelectOption"),t()(),n(931,"div",2)(932,"p"),e(933,"Interface da cole\xE7\xF5es de itens que deve ser informado no componente po-select"),t()(),n(934,"h4",12),e(935,"Propriedades"),t(),n(936,"table",13)(937,"tr",14)(938,"th",15),e(939,"Nome"),t(),n(940,"th",15),e(941,"Tipo"),t(),n(942,"th",15),e(943,"Descri\xE7\xE3o"),t()(),n(944,"tr",16)(945,"td",17)(946,"div",25)(947,"span",26),e(948," label"),l(949,"br"),t()()(),n(950,"td",21)(951,"code",27),e(952,"string"),t()(),n(953,"td",24)(954,"p"),e(955,"Label a ser utilizada nos itens da lista."),t()()(),n(956,"tr",16)(957,"td",17)(958,"div",25)(959,"span",26),e(960," value"),l(961,"br"),t()()(),n(962,"td",21)(963,"code",27),e(964,"string "),t(),n(965,"code",38),e(966," number"),t()(),n(967,"td",24)(968,"p"),e(969,"Valor do objeto que ser\xE1 atribu\xEDdo ao model."),t()()()()())},dependencies:[y],encapsulation:2})}return a})();var we=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,p){this.route=r,this.router=p}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let p=r.view;this.activeTab=p||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(p){return new(p||a)(U(pe),U(re))};static \u0275cmp=v({type:a,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Select",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(p,i){p&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),E("p-click",function(){return i.changeTab("doc")}),l(3,"sample-po-select-doc"),t(),n(4,"po-tab",3),E("p-click",function(){return i.changeTab("web")}),l(5,"sample-po-select-basic-view")(6,"sample-po-select-labs-view")(7,"sample-po-select-customer-registration-view")(8,"sample-po-select-companies-view"),t()()()),p&2&&(c("p-actions",i.actions),s(2),c("p-active",i.activeTab==="doc"),s(2),c("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[ue,C,x,be,ve,Ce,ye,_e],encapsulation:2})}return a})();var je=[{path:"",component:we}],Pe=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=F({type:a});static \u0275inj=G({imports:[Y.forChild(je),Y]})}return a})();var Tt=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=F({type:a});static \u0275inj=G({imports:[Se,Pe]})}return a})();export{Tt as DocPoSelectModule};
