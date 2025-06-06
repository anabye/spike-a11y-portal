import{$ as q,$a as T,$c as R,$d as y,A as $,Bd as M,F as u,Fa as G,Fd as D,G as S,Ga as n,Ha as U,Ia as w,Ka as g,La as h,Lb as V,Ma as b,Mb as B,Na as ne,Nb as z,Oa as K,Ob as k,Pa as P,Pb as N,Qa as ie,Rd as ue,T as s,U as L,Wb as le,Yb as pe,Za as oe,Zb as Y,Zc as me,_ as v,_b as re,_d as C,ea as ee,ha as c,hc as se,jd as ce,ka as x,na as t,oa as e,pa as l,pb as ae,pd as A,ta as F,te as _,ua as E,ue as Se,vc as W,x as Z,xc as de,y as I,za as te}from"./chunk-PHQDEBPF.js";var Te=()=>({label:"Option 1",value:"1"}),Me=()=>({label:"Option 2",value:"2"}),Oe=(a,J)=>[a,J],ge=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=v({type:a,selectors:[["sample-po-select-basic"]],standalone:!1,decls:1,vars:6,consts:[["name","select","p-label","PO Select",3,"p-options"]],template:function(p,i){p&1&&l(0,"po-select",0),p&2&&c("p-options",ie(3,Oe,K(1,Te),K(2,Me)))},dependencies:[M],encapsulation:2})}return a})();var Ve=a=>({"docs-sample-code-tabs":a}),he=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=v({type:a,selectors:[["sample-po-select-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,i){p&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Select Basic"),e(),t(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-select-basic/sample-po-select-basic.component.html"),e(),t(13,"pre",7),n(14,`<po-select
  name="select"
  p-label="PO Select"
  [p-options]="[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' }
  ]"
>
</po-select>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-select-basic/sample-po-select-basic.component.ts"),e(),t(19,"pre",9),n(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-select-basic',
  templateUrl: './sample-po-select-basic.component.html',
  standalone: false
})
export class SamplePoSelectBasicComponent {}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-select-basic"),e(),l(23,"hr")),p&2&&(s(5),x("po-icon "+i.sampleCodeButtonIcon),s(),w(" ",i.sampleCodeButtonLabel,""),s(),c("ngClass",P(4,Ve,i.hideSampleCodeTabs)))},dependencies:[T,_,C,y,ge],encapsulation:2})}return a})();var Ee=(()=>{class a{cdr;additionalHelpTooltip;event;help;label;option;options;optionsGroup;optionsGroupList=[];placeholder;properties;fieldErrorMessage;select;selectedOptionsGroup;selectOptionGroupSwitch;size;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"readonly",label:"Read Only"},{value:"errorLimit",label:"Limit Error Message"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];constructor(r){this.cdr=r}ngOnInit(){this.restore()}addOption(){this.options=this.verifyOptionObject(this.options.concat(),this.option,this.optionsGroup),this.option={label:void 0,value:void 0},this.cdr.detectChanges()}changeEvent(r){this.event=r}optionsGroupSelection(){this.optionsGroup=this.selectedOptionsGroup}restore(){this.additionalHelpTooltip="",this.event="",this.help=void 0,this.label=void 0,this.option={label:void 0,value:void 0},this.options=[],this.optionsGroup=void 0,this.optionsGroupList=[],this.placeholder="",this.properties=[],this.fieldErrorMessage="",this.select="",this.selectOptionGroupSwitch=!1,this.selectedOptionsGroup=void 0,this.size="medium"}restoreSwitch(r){r||(this.selectedOptionsGroup=void 0,this.optionsGroup=void 0)}insertGroupIntoSelectInput(r){this.selectedOptionsGroup=r,this.optionsGroupList=[...this.optionsGroupList,{label:r,value:r}]}verifyOptionObject(r,p,i){let{label:m,value:d}=p;if(i){let o=r.findIndex(X=>X.label===i&&"options"in X);return o===-1?(this.insertGroupIntoSelectInput(i),[...r,{label:i,options:[{label:m,value:d}]}]):(r[o].options.push({label:m,value:d}),r)}return[...r,{label:m,value:d}]}static \u0275fac=function(p){return new(p||a)(L(oe))};static \u0275cmp=v({type:a,selectors:[["sample-po-select-labs"]],standalone:!1,decls:33,vars:34,consts:[["fOption","ngForm"],["f","ngForm"],["name","select",1,"po-md-12",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-additional-help-tooltip","p-disabled","p-help","p-label","p-options","p-optional","p-placeholder","p-readonly","p-required","p-field-error-message","p-show-required","p-size","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["p-label","Po select options group"],["name","selectOptionGroupSwitch","p-label","Select options group",1,"po-lg-2","po-md-12",3,"p-change","ngModelChange","ngModel"],["name","selectedsOptionsGroup","p-label","Options group list",1,"po-lg-4","po-md-6",3,"ngModelChange","p-change","ngModel","p-disabled","p-options"],["name","optionsGroup","p-label","New Options Group","p-required","",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel","p-disabled"],["p-label","Po select options"],["name","optionLabel","p-label","Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","optionValue","p-label","Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Option",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","label","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help Tooltip",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],[1,"po-lg-3","po-md-6"],["p-label","Sample Restore",3,"p-click"]],template:function(p,i){if(p&1){let m=F();t(0,"po-select",2),b("ngModelChange",function(o){return u(m),h(i.select,o)||(i.select=o),S(o)}),E("p-blur",function(){return u(m),S(i.changeEvent("p-blur"))})("p-change",function(){return u(m),S(i.changeEvent("p-change"))})("p-change-model",function(){return u(m),S(i.changeEvent("p-change-model"))})("p-enter",function(){return u(m),S(i.changeEvent("p-enter"))})("p-keydown",function(){return u(m),S(i.changeEvent("p-keydown"))}),e(),l(1,"hr"),t(2,"div",3),l(3,"po-info",4)(4,"po-info",5),e(),l(5,"hr"),t(6,"form",null,0),l(8,"po-divider",6),t(9,"div",3)(10,"po-switch",7),E("p-change",function(o){return u(m),S(i.restoreSwitch(o))}),b("ngModelChange",function(o){return u(m),h(i.selectOptionGroupSwitch,o)||(i.selectOptionGroupSwitch=o),S(o)}),e(),t(11,"po-select",8),b("ngModelChange",function(o){return u(m),h(i.selectedOptionsGroup,o)||(i.selectedOptionsGroup=o),S(o)}),E("p-change",function(){return u(m),S(i.optionsGroupSelection())}),e(),t(12,"po-input",9),b("ngModelChange",function(o){return u(m),h(i.optionsGroup,o)||(i.optionsGroup=o),S(o)}),e()(),l(13,"po-divider",10),t(14,"div",3)(15,"po-input",11),b("ngModelChange",function(o){return u(m),h(i.option.label,o)||(i.option.label=o),S(o)}),e(),t(16,"po-input",12),b("ngModelChange",function(o){return u(m),h(i.option.value,o)||(i.option.value=o),S(o)}),e()(),t(17,"div",3)(18,"po-button",13),E("p-click",function(){return u(m),S(i.addOption())}),e()()(),l(19,"hr"),t(20,"form",null,1)(22,"po-input",14),b("ngModelChange",function(o){return u(m),h(i.label,o)||(i.label=o),S(o)}),e(),t(23,"po-input",15),b("ngModelChange",function(o){return u(m),h(i.help,o)||(i.help=o),S(o)}),e(),t(24,"po-input",16),b("ngModelChange",function(o){return u(m),h(i.additionalHelpTooltip,o)||(i.additionalHelpTooltip=o),S(o)}),e(),t(25,"po-input",17),b("ngModelChange",function(o){return u(m),h(i.placeholder,o)||(i.placeholder=o),S(o)}),e(),t(26,"po-input",18),b("ngModelChange",function(o){return u(m),h(i.fieldErrorMessage,o)||(i.fieldErrorMessage=o),S(o)}),e(),t(27,"po-checkbox-group",19),b("ngModelChange",function(o){return u(m),h(i.properties,o)||(i.properties=o),S(o)}),e(),t(28,"po-radio-group",20),b("ngModelChange",function(o){return u(m),h(i.size,o)||(i.size=o),S(o)}),e(),t(29,"div",3)(30,"div",21)(31,"po-button",22),E("p-click",function(){return u(m),S(i.restore())}),e()()(),l(32,"form"),e()}if(p&2){let m=G(7);g("ngModel",i.select),c("p-additional-help-tooltip",i.additionalHelpTooltip)("p-disabled",i.properties.includes("disabled"))("p-help",i.help)("p-label",i.label)("p-options",i.options)("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-field-error-message",i.fieldErrorMessage)("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit")),s(3),c("p-value",i.select),s(),c("p-value",i.event),s(6),g("ngModel",i.selectOptionGroupSwitch),s(),g("ngModel",i.selectedOptionsGroup),c("p-disabled",!i.selectOptionGroupSwitch)("p-options",i.optionsGroupList),s(),g("ngModel",i.optionsGroup),c("p-disabled",!i.selectOptionGroupSwitch),s(3),g("ngModel",i.option.label),s(),g("ngModel",i.option.value),s(2),c("p-disabled",m.invalid),s(4),g("ngModel",i.label),s(),g("ngModel",i.help),s(),g("ngModel",i.additionalHelpTooltip),s(),g("ngModel",i.placeholder),s(),g("ngModel",i.fieldErrorMessage),s(),g("ngModel",i.properties),c("p-options",i.propertiesOptions),s(),g("ngModel",i.size),c("p-options",i.sizeOptions)}},dependencies:[N,V,B,k,z,W,re,me,R,A,M,ce,D],encapsulation:2})}return a})();var Ge=a=>({"docs-sample-code-tabs":a}),ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=v({type:a,selectors:[["sample-po-select-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,i){p&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Select Labs"),e(),t(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-select-labs/sample-po-select-labs.component.html"),e(),t(13,"pre",7),n(14,`<po-select
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
>
</po-select>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="select"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<hr />

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

<hr />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-label="Help"> </po-input>

  <po-input
    class="po-md-6"
    name="additionalHelpTooltip"
    [(ngModel)]="additionalHelpTooltip"
    p-clean
    p-label="Additional Help Tooltip"
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
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-select-labs/sample-po-select-labs.component.ts"),e(),t(19,"pre",9),n(20,`import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoSelectOption, PoSelectOptionGroup } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-select-labs',
  templateUrl: './sample-po-select-labs.component.html',
  standalone: false
})
export class SamplePoSelectLabsComponent implements OnInit {
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
    { value: 'errorLimit', label: 'Limit Error Message' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  constructor(private readonly cdr: ChangeDetectorRef) {}

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
`),e()()()()(),t(21,"div",10),l(22,"sample-po-select-labs"),e(),l(23,"hr")),p&2&&(s(5),x("po-icon "+i.sampleCodeButtonIcon),s(),w(" ",i.sampleCodeButtonLabel,""),s(),c("ngClass",P(4,Ge,i.hideSampleCodeTabs)))},dependencies:[T,_,C,y,Ee],encapsulation:2})}return a})();var H=(()=>{class a{http;url="https://po-sample-api.onrender.com/v1/sampleSelect";constructor(r){this.http=r}getCitiesByState(r){return this.http.get(`${this.url}/getCities/${r}`)}getStates(){return this.http.get(`${this.url}/getStates`)}static \u0275fac=function(p){return new(p||a)($(ae))};static \u0275prov=Z({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function Fe(a,J){if(a&1&&(t(0,"div",17),l(1,"po-avatar",18),t(2,"div",19)(3,"div",20),n(4),e(),t(5,"div",21),n(6),e()()()),a&2){let r=J.$implicit;s(),te("p-src","https://po-sample-api.onrender.com/v1/sampleSelect/",r.value,".png"),s(3),U(r.label),s(2),U(r.value)}}var fe=(()=>{class a{sampleService;address;city;cityOptions;document;documentLabel;documentType;mask;minLength;name;nameLabel;state;stateOptions;options=[{label:"CPF",value:"CPF"},{label:"CNPJ",value:"CNPJ"}];citiesSubscription;statesSubscription;constructor(r){this.sampleService=r}ngOnDestroy(){this.citiesSubscription?.unsubscribe(),this.statesSubscription?.unsubscribe()}ngOnInit(){this.initialize(),this.getStates(),this.changeType(this.documentType)}changeType(r){r==="CPF"?(this.documentLabel="CPF Number",this.mask="999.999.999-99",this.minLength=14,this.nameLabel="Client Name"):(this.documentLabel="CNPJ Number",this.mask="99.999.999/9999-99",this.minLength=18,this.nameLabel="Company Name"),this.address="",this.document="",this.name=""}initialize(){this.cityOptions=[],this.stateOptions=[],this.documentType="CPF"}onChangeState(){this.getCitiesByState(this.state)}getCityByValue(r){let p=this.cityOptions.find(i=>i.value===r);return p?p.label:""}getStateByValue(r){let p=this.stateOptions.find(i=>i.value===r);return p?p.label:""}getCitiesByState(r){this.citiesSubscription=this.sampleService.getCitiesByState(r).subscribe(p=>{this.cityOptions=p.items,this.city=this.cityOptions[0].value})}getStates(){this.statesSubscription=this.sampleService.getStates().subscribe(r=>{this.stateOptions=r.items,this.state="sp",this.getCitiesByState(this.state)})}static \u0275fac=function(p){return new(p||a)(L(H))};static \u0275cmp=v({type:a,selectors:[["sample-po-select-customer-registration"]],standalone:!1,features:[ne([H])],decls:27,vars:22,consts:[["f","ngForm"],["modal",""],[1,"po-row"],["name","documentType","p-label","Document type",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","document","p-mask-format-model","","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-label","p-mask","p-minlength"],["name","name","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-label"],["name","address","p-label","Address",1,"po-md-6",3,"ngModelChange","ngModel"],["name","state","p-label","State",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["p-select-option-template",""],["name","city","p-label","City",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Send Informations",1,"po-md-4",3,"p-click","p-disabled"],["p-title","Informations"],["p-label","Document type",1,"po-md-6",3,"p-value"],[1,"po-md-6",3,"p-label","p-value"],["p-label","Address",1,"po-md-6",3,"p-value"],["p-label","State",1,"po-md-6",3,"p-value"],["p-label","City",1,"po-md-6",3,"p-value"],[1,"sample-select-option-template-container"],["p-size","xs",3,"p-src"],[1,"sample-select-option-template-margin"],[1,"sample-select-option-template-label"],[1,"sample-select-option-template-value"]],template:function(p,i){if(p&1){let m=F();t(0,"form",null,0)(2,"div",2)(3,"po-radio-group",3),b("ngModelChange",function(o){return u(m),h(i.documentType,o)||(i.documentType=o),S(o)}),E("p-change",function(o){return u(m),S(i.changeType(o))}),e(),t(4,"po-input",4),b("ngModelChange",function(o){return u(m),h(i.document,o)||(i.document=o),S(o)}),e()(),t(5,"div",2)(6,"po-input",5),b("ngModelChange",function(o){return u(m),h(i.name,o)||(i.name=o),S(o)}),e(),t(7,"po-input",6),b("ngModelChange",function(o){return u(m),h(i.address,o)||(i.address=o),S(o)}),e()(),t(8,"div",2)(9,"po-select",7),b("ngModelChange",function(o){return u(m),h(i.state,o)||(i.state=o),S(o)}),E("p-change",function(){return u(m),S(i.onChangeState())}),ee(10,Fe,7,4,"ng-template",8),e(),t(11,"po-select",9),b("ngModelChange",function(o){return u(m),h(i.city,o)||(i.city=o),S(o)}),e()(),t(12,"div",2)(13,"po-button",10),E("p-click",function(){u(m);let o=G(15);return S(o.open())}),e()()(),t(14,"po-modal",11,1)(16,"div",2),l(17,"po-info",12)(18,"po-info",13),e(),l(19,"hr"),t(20,"div",2),l(21,"po-info",13)(22,"po-info",14),e(),l(23,"hr"),t(24,"div",2),l(25,"po-info",15)(26,"po-info",16),e()()}if(p&2){let m=G(1);s(3),g("ngModel",i.documentType),c("p-options",i.options),s(),g("ngModel",i.document),c("p-label",i.documentLabel)("p-mask",i.mask)("p-minlength",i.minLength),s(2),g("ngModel",i.name),c("p-label",i.nameLabel),s(),g("ngModel",i.address),s(2),g("ngModel",i.state),c("p-options",i.stateOptions),s(2),g("ngModel",i.city),c("p-options",i.cityOptions),s(2),c("p-disabled",m.invalid),s(4),c("p-value",i.documentType),s(),c("p-label",i.documentLabel)("p-value",i.document),s(3),c("p-label",i.nameLabel)("p-value",i.name),s(),c("p-value",i.address),s(3),c("p-value",i.getStateByValue(i.state)),s(),c("p-value",i.getCityByValue(i.city))}},dependencies:[N,V,B,k,z,se,W,R,A,M,D,de],styles:[".sample-select-option-template-container[_ngcontent-%COMP%]{display:inline-flex;align-items:flex-start;width:100%}.sample-select-option-template-margin[_ngcontent-%COMP%]{margin:5px}.sample-select-option-template-label[_ngcontent-%COMP%]{font-size:16px}.sample-select-option-template-value[_ngcontent-%COMP%]{font-size:12px;text-transform:uppercase}"]})}return a})();var ze=a=>({"docs-sample-code-tabs":a}),Ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=v({type:a,selectors:[["sample-po-select-customer-registration-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,i){p&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Select - Customer registration"),e(),t(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-select-customer-registration/sample-po-select-customer-registration.component.html"),e(),t(13,"pre",7),n(14,`<form #f="ngForm">
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

  <hr />

  <div class="po-row">
    <po-info class="po-md-6" [p-label]="nameLabel" [p-value]="name"> </po-info>

    <po-info class="po-md-6" p-label="Address" [p-value]="address"> </po-info>
  </div>

  <hr />

  <div class="po-row">
    <po-info class="po-md-6" p-label="State" [p-value]="getStateByValue(state)"> </po-info>

    <po-info class="po-md-6" p-label="City" [p-value]="getCityByValue(city)"> </po-info>
  </div>
</po-modal>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-select-customer-registration/sample-po-select-customer-registration.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, OnDestroy, OnInit } from '@angular/core';

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

  constructor(private sampleService: SamplePoSelectCustomerRegistrationService) {}

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
`),e(),t(21,"label",6),n(22,"sample-po-select-customer-registration/sample-po-select-customer-registration.service.ts"),e(),t(23,"pre",9),n(24,`import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SamplePoSelectCustomerRegistrationService {
  private url: string = 'https://po-sample-api.onrender.com/v1/sampleSelect';

  constructor(private http: HttpClient) {}

  getCitiesByState(uf: string) {
    return this.http.get(\`\${this.url}/getCities/\${uf}\`);
  }

  getStates() {
    return this.http.get(\`\${this.url}/getStates\`);
  }
}
`),e()()()()(),t(25,"div",10),l(26,"sample-po-select-customer-registration"),e(),l(27,"hr")),p&2&&(s(5),x("po-icon "+i.sampleCodeButtonIcon),s(),w(" ",i.sampleCodeButtonLabel,""),s(),c("ngClass",P(4,ze,i.hideSampleCodeTabs)))},dependencies:[T,_,C,y,fe],encapsulation:2})}return a})();var ye=(()=>{class a{select;fieldLabel="nomeFantasia";fieldValue="cnpj";empresas=[{codigo:"1",nomeFantasia:"TOTVS SA",razaoSocial:"TOTVS LTDA",label:"TOTVS COMPANY",cnpj:"01.234.567/0000-01",value:"100",id:"10",email:"totvscompany@sample.com",data:"10/03/2015",origem:"S\xE3o Paulo"},{codigo:"2",nomeFantasia:"INSTITUTO TOTVS DE ENSINO SA",razaoSocial:"INST TOTVS DE ENSINO LTDA",label:"INST TOTVS",cnpj:"02.345.678/0000-02",value:"200",id:"20",email:"insttotvs@sample.com",data:"10/10/2020",origem:"Joinville"},{codigo:"3",nomeFantasia:"TOTVS ENTERPRISE SA",razaoSocial:"TOTVS ENTERPRISE LTDA ",label:"ENT TOTVS",cnpj:"03.456.789/0000-03",value:"300",id:"30",email:"enttotvs@sample.com",data:"10/01/2022",origem:"Curitiba"}];labels=[{label:"Dados",options:[{label:"nomeFantasia",value:"nomeFantasia"},{label:"razaoSocial",value:"razaoSocial"},{label:"email",value:"email"}]},{label:"Cidade",options:[{label:"origem",value:"origem"}]}];values=[{label:"codigo",value:"codigo"},{label:"cnpj",value:"cnpj"},{label:"id",value:"id"},{label:"data",value:"data"}];onChange(r){this.select=void 0}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=v({type:a,selectors:[["sample-po-select-companies"]],standalone:!1,decls:5,vars:9,consts:[["name","select","p-label","PO Select",3,"ngModelChange","ngModel","p-field-value","p-field-label","p-options"],["p-label","Model","name","selectInfo",3,"p-valueChange","p-value"],[1,"po-row"],["name","fieldLabel","p-label","p-field-label",1,"po-md-6",3,"p-change","ngModelChange","p-options","ngModel"],["name","selectValue","p-label","p-field-value",1,"po-md-6",3,"p-change","ngModelChange","p-options","ngModel"]],template:function(p,i){p&1&&(t(0,"po-select",0),b("ngModelChange",function(d){return h(i.select,d)||(i.select=d),d}),e(),t(1,"po-info",1),b("p-valueChange",function(d){return h(i.select,d)||(i.select=d),d}),e(),t(2,"div",2)(3,"po-select",3),E("p-change",function(d){return i.onChange(d)}),b("ngModelChange",function(d){return h(i.fieldLabel,d)||(i.fieldLabel=d),d}),e(),t(4,"po-select",4),E("p-change",function(d){return i.onChange(d)}),b("ngModelChange",function(d){return h(i.fieldValue,d)||(i.fieldValue=d),d}),e()()),p&2&&(g("ngModel",i.select),c("p-field-value",i.fieldValue)("p-field-label",i.fieldLabel)("p-options",i.empresas),s(),g("p-value",i.select),s(2),c("p-options",i.labels),g("ngModel",i.fieldLabel),s(),c("p-options",i.values),g("ngModel",i.fieldValue))},dependencies:[V,k,M,D],encapsulation:2})}return a})();var Re=a=>({"docs-sample-code-tabs":a}),_e=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=v({type:a,selectors:[["sample-po-select-companies-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,i){p&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Select Companies"),e(),t(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-select-companies/sample-po-select-companies.component.html"),e(),t(13,"pre",7),n(14,`<po-select
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
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-select-companies/sample-po-select-companies.component.ts"),e(),t(19,"pre",9),n(20,`import { Component } from '@angular/core';

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
`),e()()()()(),t(21,"div",10),l(22,"sample-po-select-companies"),e(),l(23,"hr")),p&2&&(s(5),x("po-icon "+i.sampleCodeButtonIcon),s(),w(" ",i.sampleCodeButtonLabel,""),s(),c("ngClass",P(4,Re,i.hideSampleCodeTabs)))},dependencies:[T,_,C,y,ye],encapsulation:2})}return a})();var xe=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=v({type:a,selectors:[["sample-po-select-doc"]],standalone:!1,decls:860,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-combo-option-template"],["href","/documentation/po-select-option-template"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","any[]"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"language-html"],[1,"language-typescript"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","number"]],template:function(p,i){p&1&&(t(0,"div",0)(1,"p",1)(2,"code"),n(3,"import { PoFieldModule } from '@po-ui/ng-components';"),e()(),t(4,"div",2)(5,"p"),n(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),e(),t(7,"blockquote")(8,"p"),n(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),t(10,"code"),n(11,"FormsModule"),e(),n(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),t(13,"code"),n(14,"ReactiveFormsModule"),e(),n(15,", ambos nativos do Angular."),e()()(),t(16,"h3",3),n(17,"Componente"),e(),t(18,"h4",4)(19,"code",5),n(20,"PoSelectComponent"),e()(),t(21,"div",2)(22,"p"),n(23,` O componente po-select exibe uma lista de valores e permite que o usu\xE1rio selecione um desses valores.
Os valores listados podem ser fixos ou din\xE2micos de acordo com a necessidade do desenvolvedor, dando mais flexibilidade ao componente.
O po-select n\xE3o permite que o usu\xE1rio informe um valor diferente dos valores listados, isso garante a consist\xEAncia da informa\xE7\xE3o.
O po-select n\xE3o permite que sejam passados valores duplicados, undefined e null para as op\xE7\xF5es, excluindo-os da lista.`),e(),t(24,"blockquote")(25,"p"),n(26,"Ao passar um valor para o "),t(27,"em"),n(28,"model"),e(),n(29," que n\xE3o est\xE1 na lista de op\xE7\xF5es, o mesmo ser\xE1 definido como "),t(30,"code"),n(31,"undefined"),e(),n(32,"."),e()(),t(33,"p"),n(34,"Tamb\xE9m existe a possibilidade de utilizar um "),t(35,"em"),n(36,"template"),e(),n(37,` para a exibi\xE7\xE3o dos itens da lista,
veja mais em `),t(38,"strong")(39,"a",6),n(40,"p-combo-option-template"),e()(),n(41,"."),e(),t(42,"blockquote")(43,"p"),n(44,"Obs: o template "),t(45,"strong")(46,"a",7),n(47,"p-select-option-template"),e()(),n(48," ser\xE1 depreciado na vers\xE3o 14.x.x."),e()(),t(49,"h4"),n(50,"Tokens customiz\xE1veis"),e(),t(51,"p"),n(52,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),e(),t(53,"blockquote")(54,"p"),n(55,"Para maiores informa\xE7\xF5es, acesse o guia "),t(56,"a",8),n(57,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),n(58,"."),e()(),t(59,"table")(60,"thead")(61,"tr")(62,"th"),n(63,"Propriedade"),e(),t(64,"th"),n(65,"Descri\xE7\xE3o"),e(),t(66,"th"),n(67,"Valor Padr\xE3o"),e()()(),t(68,"tbody")(69,"tr")(70,"td")(71,"strong"),n(72,"Default Values"),e()(),l(73,"td")(74,"td"),e(),t(75,"tr")(76,"td")(77,"code"),n(78,"--font-family"),e()(),t(79,"td"),n(80,"Fam\xEDlia tipogr\xE1fica usada"),e(),t(81,"td")(82,"code"),n(83,"var(--font-family-theme)"),e()()(),t(84,"tr")(85,"td")(86,"code"),n(87,"--font-size"),e()(),t(88,"td"),n(89,"Tamanho da fonte"),e(),t(90,"td")(91,"code"),n(92,"var(--font-size-default)"),e()()(),t(93,"tr")(94,"td")(95,"code"),n(96,"--text-color-empty"),e()(),t(97,"td"),n(98,"Cor do placeholder"),e(),t(99,"td")(100,"code"),n(101,"var(--color-neutral-light-30)"),e()()(),t(102,"tr")(103,"td")(104,"code"),n(105,"--color"),e()(),t(106,"td"),n(107,"Cor da borda"),e(),t(108,"td")(109,"code"),n(110,"var(--color-neutral-dark-70)"),e()()(),t(111,"tr")(112,"td")(113,"code"),n(114,"--background"),e()(),t(115,"td"),n(116,"Cor de background"),e(),t(117,"td")(118,"code"),n(119,"var(--color-neutral-light-05)"),e()()(),t(120,"tr")(121,"td")(122,"code"),n(123,"--text-color"),e()(),t(124,"td"),n(125,"Cor do texto"),e(),t(126,"td")(127,"code"),n(128,"var(--color-neutral-dark-90)"),e()()(),t(129,"tr")(130,"td")(131,"code"),n(132,"--padding-horizontal"),e()(),t(133,"td"),n(134,"Preenchimento horizontal"),e(),t(135,"td")(136,"code"),n(137,"0.5em"),e()()(),t(138,"tr")(139,"td")(140,"code"),n(141,"--padding-vertical"),e()(),t(142,"td"),n(143,"Preenchimento vertical"),e(),t(144,"td")(145,"code"),n(146,"0.7em"),e()()(),t(147,"tr")(148,"td")(149,"strong"),n(150,"Hover"),e()(),l(151,"td")(152,"td"),e(),t(153,"tr")(154,"td")(155,"code"),n(156,"--color-hover"),e()(),t(157,"td"),n(158,"Cor principal no estado hover"),e(),t(159,"td")(160,"code"),n(161,"var(--color-brand-01-dark)"),e()()(),t(162,"tr")(163,"td")(164,"code"),n(165,"--background-hover"),e()(),t(166,"td"),n(167,"Cor de background no estado hover"),e(),t(168,"td")(169,"code"),n(170,"var(--color-brand-01-lighter)"),e()()(),t(171,"tr")(172,"td")(173,"strong"),n(174,"Focused"),e()(),l(175,"td")(176,"td"),e(),t(177,"tr")(178,"td")(179,"code"),n(180,"--outline-color-focused"),e()(),t(181,"td"),n(182,"Cor do outline do estado de focus"),e(),t(183,"td")(184,"code"),n(185,"var(--color-action-focus)"),e()()(),t(186,"tr")(187,"td")(188,"code"),n(189,"--color-focused"),e()(),t(190,"td"),n(191,"Cor da borda no estado de focus"),e(),t(192,"td")(193,"code"),n(194,"var(--color-action-default)"),e()()(),t(195,"tr")(196,"td")(197,"strong"),n(198,"Disabled"),e()(),l(199,"td")(200,"td"),e(),t(201,"tr")(202,"td")(203,"code"),n(204,"--color-disabled"),e()(),t(205,"td"),n(206,"Cor principal no estado disabled"),e(),t(207,"td")(208,"code"),n(209,"var(--color-neutral-light-30)"),e()()(),t(210,"tr")(211,"td")(212,"code"),n(213,"--background-color-disabled"),e(),n(214,"\xA0"),e(),t(215,"td"),n(216,"Cor de background no estado disabled"),e(),t(217,"td")(218,"code"),n(219,"var(--color-neutral-light-20)"),e()()()()()(),t(220,"div",9)(221,"h4",10),n(222,"Seletor"),e(),t(223,"pre",11),n(224,`<po-select
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    (p-change)="EventEmitter"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-field-label="string"
    p-field-value="string"
    p-help="string"
    (p-keydown)="EventEmitter"
    p-label="string"
    name="string"
    (ng-model-change)="EventEmitter"
    p-optional="boolean"
    p-options="any[]"
    p-placeholder="string"
    p-readonly="boolean"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string" >
</po-select>
`),e()(),t(225,"h4",12),n(226,"Propriedades"),e(),t(227,"table",13)(228,"tr",14)(229,"th",15),n(230,"Nome"),e(),t(231,"th",15),n(232,"Tipo"),e(),t(233,"th",15),n(234,"Padr\xE3o"),e(),t(235,"th",15),n(236,"Descri\xE7\xE3o"),e()(),t(237,"tr",16)(238,"td",17)(239,"div",18)(240,"span",19),n(241," (p-additional-help)"),l(242,"br"),e()()(),t(243,"td",20)(244,"code",21),n(245,"EventEmitter"),e()(),t(246,"td",22),n(247,"-"),e(),t(248,"td",23)(249,"em")(250,"strong"),n(251,"(opcional)"),e()(),t(252,"p"),n(253,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),t(254,"code"),n(255,"p-help"),e(),n(256,"."),e()()(),t(257,"tr",16)(258,"td",17)(259,"div",24)(260,"span",25),n(261," p-additional-help-tooltip"),l(262,"br"),e()()(),t(263,"td",20)(264,"code",26),n(265,"string"),e()(),t(266,"td",22),n(267,"-"),e(),t(268,"td",23)(269,"em")(270,"strong"),n(271,"(opcional)"),e()(),t(272,"p"),n(273,"Exibe um \xEDcone de ajuda adicional ao "),t(274,"code"),n(275,"p-help"),e(),n(276,`, com o texto desta propriedade no tooltip.
Se o evento `),t(277,"code"),n(278,"p-additional-help"),e(),n(279,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),t(280,"strong"),n(281,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),e()(),t(282,"blockquote")(283,"p"),n(284,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),e()()()(),t(285,"tr",16)(286,"td",17)(287,"div",24)(288,"span",25),n(289," p-append-in-body"),l(290,"br"),e()()(),t(291,"td",20)(292,"code",27),n(293,"boolean"),e()(),t(294,"td",22)(295,"p")(296,"code"),n(297,"false"),e()()(),t(298,"td",23)(299,"em")(300,"strong"),n(301,"(opcional)"),e()(),t(302,"p"),n(303,"Define que o tooltip ("),t(304,"code"),n(305,"p-additional-help-tooltip"),e(),n(306," e/ou "),t(307,"code"),n(308,"p-error-limit"),e(),n(309,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),e(),t(310,"blockquote")(311,"p"),n(312,"Quando utilizado com "),t(313,"code"),n(314,"p-additional-help-tooltip"),e(),n(315,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),e()()()(),t(316,"tr",16)(317,"td",17)(318,"div",18)(319,"span",19),n(320," (p-change)"),l(321,"br"),e()()(),t(322,"td",20)(323,"code",21),n(324,"EventEmitter"),e()(),t(325,"td",22),n(326,"-"),e(),t(327,"td",23)(328,"em")(329,"strong"),n(330,"(opcional)"),e()(),t(331,"p"),n(332,"Evento disparado ao alterar valor do campo."),e()()(),t(333,"tr",16)(334,"td",17)(335,"div",24)(336,"span",25),n(337," p-disabled"),l(338,"br"),e()()(),t(339,"td",20)(340,"code",27),n(341,"boolean"),e()(),t(342,"td",22)(343,"p")(344,"code"),n(345,"false"),e()()(),t(346,"td",23)(347,"em")(348,"strong"),n(349,"(opcional)"),e()(),t(350,"p"),n(351,"Indica se o campo ser\xE1 desabilitado."),e()()(),t(352,"tr",16)(353,"td",17)(354,"div",24)(355,"span",25),n(356," p-error-limit"),l(357,"br"),e()()(),t(358,"td",20)(359,"code",27),n(360,"boolean"),e()(),t(361,"td",22)(362,"p")(363,"code"),n(364,"false"),e()()(),t(365,"td",23)(366,"em")(367,"strong"),n(368,"(opcional)"),e()(),t(369,"p"),n(370,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),e(),t(371,"blockquote")(372,"p"),n(373,"Caso essa propriedade seja definida como "),t(374,"code"),n(375,"true"),e(),n(376,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),e()()()(),t(377,"tr",16)(378,"td",17)(379,"div",24)(380,"span",25),n(381," p-field-error-message"),l(382,"br"),e()()(),t(383,"td",20)(384,"code",26),n(385,"string"),e()(),t(386,"td",22),n(387,"-"),e(),t(388,"td",23)(389,"em")(390,"strong"),n(391,"(opcional)"),e()(),t(392,"p"),n(393,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),e(),t(394,"blockquote")(395,"p"),n(396,"Necess\xE1rio que a propriedade "),t(397,"code"),n(398,"p-required"),e(),n(399," esteja habilitada."),e()()()(),t(400,"tr",16)(401,"td",17)(402,"div",24)(403,"span",25),n(404," p-field-label"),l(405,"br"),e()()(),t(406,"td",20)(407,"code",26),n(408,"string"),e()(),t(409,"td",22)(410,"p")(411,"code"),n(412,"label"),e()()(),t(413,"td",23)(414,"em")(415,"strong"),n(416,"(opcional)"),e()(),t(417,"p"),n(418,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),t(419,"code"),n(420,"p-options"),e(),n(421,"), esta propriedade ser\xE1 respons\xE1vel pelo texto de apresenta\xE7\xE3o de cada item da lista."),e()()(),t(422,"tr",16)(423,"td",17)(424,"div",24)(425,"span",25),n(426," p-field-value"),l(427,"br"),e()()(),t(428,"td",20)(429,"code",26),n(430,"string"),e()(),t(431,"td",22)(432,"p")(433,"code"),n(434,"value"),e()()(),t(435,"td",23)(436,"em")(437,"strong"),n(438,"(opcional)"),e()(),t(439,"p"),n(440,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),t(441,"code"),n(442,"p-options"),e(),n(443,"), esta propriedade ser\xE1 respons\xE1vel pelo valor de cada item da lista."),e()()(),t(444,"tr",16)(445,"td",17)(446,"div",24)(447,"span",25),n(448," p-help"),l(449,"br"),e()()(),t(450,"td",20)(451,"code",26),n(452,"string"),e()(),t(453,"td",22),n(454,"-"),e(),t(455,"td",23)(456,"p"),n(457,"Texto de apoio para o campo."),e()()(),t(458,"tr",16)(459,"td",17)(460,"div",18)(461,"span",19),n(462," (p-keydown)"),l(463,"br"),e()()(),t(464,"td",20)(465,"code",21),n(466,"EventEmitter"),e()(),t(467,"td",22),n(468,"-"),e(),t(469,"td",23)(470,"em")(471,"strong"),n(472,"(opcional)"),e()(),t(473,"p"),n(474,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),t(475,"code"),n(476,"KeyboardEvent"),e(),n(477," com informa\xE7\xF5es sobre a tecla."),e()()(),t(478,"tr",16)(479,"td",17)(480,"div",24)(481,"span",25),n(482," p-label"),l(483,"br"),e()()(),t(484,"td",20)(485,"code",26),n(486,"string"),e()(),t(487,"td",22),n(488,"-"),e(),t(489,"td",23)(490,"p"),n(491,"R\xF3tulo exibido pelo componente."),e()()(),t(492,"tr",16)(493,"td",17)(494,"div",24)(495,"span",25),n(496," name"),l(497,"br"),e()()(),t(498,"td",20)(499,"code",26),n(500,"string"),e()(),t(501,"td",22),n(502,"-"),e(),t(503,"td",23)(504,"p"),n(505,"Nome do componente."),e()()(),t(506,"tr",16)(507,"td",17)(508,"div",18)(509,"span",19),n(510," (ngModelChange)"),l(511,"br"),e()()(),t(512,"td",20)(513,"code",21),n(514,"EventEmitter"),e()(),t(515,"td",22),n(516,"-"),e(),t(517,"td",23)(518,"em")(519,"strong"),n(520,"(opcional)"),e()(),t(521,"p"),n(522,"Fun\xE7\xE3o para atualizar o ngModel do componente, necess\xE1rio quando n\xE3o for utilizado dentro da tag form."),e(),t(523,"p"),n(524,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),t(525,"code"),n(526,"strictTemplates"),e(),n(527,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),e(),t(528,"pre")(529,"code"),n(530,`<po-select ... [ngModel]="selectModel" (ngModelChange)="selectModel = $event"> </po-select>
`),e()()()(),t(531,"tr",16)(532,"td",17)(533,"div",24)(534,"span",25),n(535," p-optional"),l(536,"br"),e()()(),t(537,"td",20)(538,"code",27),n(539,"boolean"),e()(),t(540,"td",22)(541,"p")(542,"code"),n(543,"false"),e()()(),t(544,"td",23)(545,"em")(546,"strong"),n(547,"(opcional)"),e()(),t(548,"p"),n(549,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),e(),t(550,"blockquote")(551,"p"),n(552,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),e()(),t(553,"ul")(554,"li"),n(555,"O campo conter "),t(556,"code"),n(557,"p-required"),e(),n(558,";"),e(),t(559,"li"),n(560,"N\xE3o possuir "),t(561,"code"),n(562,"p-help"),e(),n(563," e/ou "),t(564,"code"),n(565,"p-label"),e(),n(566,"."),e()()()(),t(567,"tr",16)(568,"td",17)(569,"div",24)(570,"span",25),n(571," p-options"),l(572,"br"),e()()(),t(573,"td",20)(574,"code",28),n(575,"any[]"),e()(),t(576,"td",22),n(577,"-"),e(),t(578,"td",23)(579,"p"),n(580,"Nesta propriedade deve ser definido uma cole\xE7\xE3o de objetos que implementam a interface "),t(581,"code"),n(582,"PoSelectOption"),e(),n(583,`,
ou uma cole\xE7\xE3o de objetos dentro de grupos diferentes, que seriam da interface `),t(584,"code"),n(585,"PoSelectOptionGroup"),e(),n(586,"."),e(),t(587,"p"),n(588,"Caso esta lista estiver vazia, o model ser\xE1 "),t(589,"code"),n(590,"undefined"),e(),n(591,"."),e(),t(592,"blockquote")(593,"p"),n(594,`Essa propriedade \xE9 imut\xE1vel, ou seja, sempre que quiser atualizar a lista de op\xE7\xF5es dispon\xEDveis
atualize a refer\xEAncia do objeto:`),e()(),t(595,"pre")(596,"code"),n(597,`// atualiza a refer\xEAncia do objeto garantindo a atualiza\xE7\xE3o do template
this.options = [...this.options, { value: 'x', label: 'Nova op\xE7\xE3o' }];

// evite, pois n\xE3o atualiza a refer\xEAncia do objeto podendo gerar atrasos na atualiza\xE7\xE3o do template
this.options.push({ value: 'x', label: 'Nova op\xE7\xE3o' });
`),e()(),t(598,"blockquote")(599,"p"),n(600,"Para cole\xE7\xE3o de objetos dentro de grupos distintos ser\xE1 exibido a label e op\xE7\xF5es somente se a propriedade "),t(601,"code"),n(602,"options"),e(),n(603," possua valores. Sendo assim, a estrutura seguiria dessa forma:"),e()(),t(604,"pre")(605,"code"),n(606,`this.options = [{
 label: 'Op\xE7\xF5es',
 options: [
   { value: 1, label: 'op\xE7\xE3o 1' },
   { value: 2, label: 'op\xE7\xE3o 2' }
 ],
}];
`),e()(),t(607,"p"),n(608,`\xC9 poss\xEDvel a utiliza\xE7\xE3o de op\xE7\xF5es agrupadas e desagrupadas em conjunto, por\xE9m ser\xE1 feita a ordena\xE7\xE3o de exibir as op\xE7\xF5es
desagrupadas acima.`),e()()(),t(609,"tr",16)(610,"td",17)(611,"div",24)(612,"span",25),n(613," p-placeholder"),l(614,"br"),e()()(),t(615,"td",20)(616,"code",26),n(617,"string"),e()(),t(618,"td",22),n(619,"-"),e(),t(620,"td",23)(621,"em")(622,"strong"),n(623,"(opcional)"),e()(),t(624,"p"),n(625,"Mensagem que aparecer\xE1 enquanto nenhuma op\xE7\xE3o estiver selecionada."),e()()(),t(626,"tr",16)(627,"td",17)(628,"div",24)(629,"span",25),n(630," p-readonly"),l(631,"br"),e()()(),t(632,"td",20)(633,"code",27),n(634,"boolean"),e()(),t(635,"td",22)(636,"p")(637,"code"),n(638,"false"),e()()(),t(639,"td",23)(640,"em")(641,"strong"),n(642,"(opcional)"),e()(),t(643,"p"),n(644,"Indica que o campo ser\xE1 somente para leitura."),e()()(),t(645,"tr",16)(646,"td",17)(647,"div",24)(648,"span",25),n(649," p-required"),l(650,"br"),e()()(),t(651,"td",20)(652,"code",27),n(653,"boolean"),e()(),t(654,"td",22)(655,"p")(656,"code"),n(657,"false"),e()()(),t(658,"td",23)(659,"em")(660,"strong"),n(661,"(opcional)"),e()(),t(662,"p"),n(663,"Define que o campo ser\xE1 obrigat\xF3rio."),e()()(),t(664,"tr",16)(665,"td",17)(666,"div",24)(667,"span",25),n(668," p-show-required"),l(669,"br"),e()()(),t(670,"td",20)(671,"code",27),n(672,"boolean"),e()(),t(673,"td",22),n(674,"-"),e(),t(675,"td",23)(676,"p"),n(677,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),e(),t(678,"blockquote")(679,"p"),n(680,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),e()(),t(681,"ul")(682,"li"),n(683,"N\xE3o possuir "),t(684,"code"),n(685,"p-help"),e(),n(686," e/ou "),t(687,"code"),n(688,"p-label"),e(),n(689,"."),e()()()(),t(690,"tr",16)(691,"td",17)(692,"div",24)(693,"span",25),n(694," p-size"),l(695,"br"),e()()(),t(696,"td",20)(697,"code",26),n(698,"string"),e()(),t(699,"td",22)(700,"p")(701,"code"),n(702,"medium"),e()()(),t(703,"td",23)(704,"em")(705,"strong"),n(706,"(opcional)"),e()(),t(707,"p"),n(708,"Define o tamanho do componente:"),e(),t(709,"ul")(710,"li")(711,"code"),n(712,"small"),e(),n(713,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),e(),t(714,"li")(715,"code"),n(716,"medium"),e(),n(717,": altura do input como 44px."),e()(),t(718,"blockquote")(719,"p"),n(720,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),t(721,"code"),n(722,"medium"),e(),n(723,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),t(724,"a",29),n(725,"po-theme"),e(),n(726,"."),e()()()()(),t(727,"h3",12),n(728,"M\xE9todos"),e(),t(729,"table",30)(730,"tr",16)(731,"th",31)(732,"div",24)(733,"h4")(734,"span",25),n(735," focus "),e()()()()(),t(736,"tr",23)(737,"td",23)(738,"p"),n(739,"Fun\xE7\xE3o que atribui foco ao componente."),e(),t(740,"p"),n(741,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),e(),t(742,"pre")(743,"code"),n(744,`import { PoSelectComponent } from '@po-ui/ng-components';

...

@ViewChild(PoSelectComponent, { static: true }) select: PoSelectComponent;

focusSelect() {
  this.select.focus();
}
`),e()()()()(),l(745,"br"),t(746,"table",30)(747,"tr",16)(748,"th",31)(749,"div",24)(750,"h4")(751,"span",25),n(752," showAdditionalHelp "),e()()()()(),t(753,"tr",23)(754,"td",23)(755,"p"),n(756,"M\xE9todo que exibe "),t(757,"code"),n(758,"p-additionalHelpTooltip"),e(),n(759," ou executa a a\xE7\xE3o definida em "),t(760,"code"),n(761,"p-additionalHelp"),e(),n(762,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),t(763,"code"),n(764,"p-keydown"),e(),n(765,"."),e(),t(766,"pre")(767,"code",32),n(768,`<po-select
 #select
 ...
 p-additional-help-tooltip="Mensagem de ajuda complementar"
 (p-keydown)="onKeyDown($event, select)"
></po-select>
`),e()(),t(769,"pre")(770,"code",33),n(771,`onKeyDown(event: KeyboardEvent, inp: PoSelectComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),e()()()()(),l(772,"br"),t(773,"h3"),n(774,"Interfaces"),e(),t(775,"h4",34)(776,"code",5),n(777,"PoSelectOptionGroup"),e()(),t(778,"div",2)(779,"p"),n(780,"Interface da cole\xE7\xF5es de itens em grupo, utilizando uma label para o grupo e as op\xE7\xF5es do tipo "),t(781,"code"),n(782,"PoSelectOption"),e(),n(783,"."),e()(),t(784,"h4",12),n(785,"Propriedades"),e(),t(786,"table",13)(787,"tr",14)(788,"th",15),n(789,"Nome"),e(),t(790,"th",15),n(791,"Tipo"),e(),t(792,"th",15),n(793,"Descri\xE7\xE3o"),e()(),t(794,"tr",16)(795,"td",17)(796,"div",24)(797,"span",25),n(798," label"),l(799,"br"),e()()(),t(800,"td",20)(801,"code",26),n(802,"string"),e()(),t(803,"td",23)(804,"p"),n(805,"Label para denominar o nome do grupo."),e()()(),t(806,"tr",16)(807,"td",17)(808,"div",24)(809,"span",25),n(810," options"),l(811,"br"),e()()(),t(812,"td",20)(813,"code",35),n(814,"Array<PoSelectOption>"),e()(),t(815,"td",23)(816,"p"),n(817,"Lista com as op\xE7\xF5es dispon\xEDveis em cada grupo."),e()()()(),t(818,"h4",34)(819,"code",5),n(820,"PoSelectOption"),e()(),t(821,"div",2)(822,"p"),n(823,"Interface da cole\xE7\xF5es de itens que deve ser informado no componente po-select"),e()(),t(824,"h4",12),n(825,"Propriedades"),e(),t(826,"table",13)(827,"tr",14)(828,"th",15),n(829,"Nome"),e(),t(830,"th",15),n(831,"Tipo"),e(),t(832,"th",15),n(833,"Descri\xE7\xE3o"),e()(),t(834,"tr",16)(835,"td",17)(836,"div",24)(837,"span",25),n(838," label"),l(839,"br"),e()()(),t(840,"td",20)(841,"code",26),n(842,"string"),e()(),t(843,"td",23)(844,"p"),n(845,"Label a ser utilizada nos itens da lista."),e()()(),t(846,"tr",16)(847,"td",17)(848,"div",24)(849,"span",25),n(850," value"),l(851,"br"),e()()(),t(852,"td",20)(853,"code",26),n(854,"string "),e(),t(855,"code",36),n(856," number"),e()(),t(857,"td",23)(858,"p"),n(859,"Valor do objeto que ser\xE1 atribu\xEDdo ao model."),e()()()()())},dependencies:[_],encapsulation:2})}return a})();var we=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,p){this.route=r,this.router=p}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let p=r.view;this.activeTab=p||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(p){return new(p||a)(L(le),L(pe))};static \u0275cmp=v({type:a,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Select",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(p,i){p&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),E("p-click",function(){return i.changeTab("doc")}),l(3,"sample-po-select-doc"),e(),t(4,"po-tab",3),E("p-click",function(){return i.changeTab("web")}),l(5,"sample-po-select-basic-view")(6,"sample-po-select-labs-view")(7,"sample-po-select-customer-registration-view")(8,"sample-po-select-companies-view"),e()()()),p&2&&(c("p-actions",i.actions),s(2),c("p-active",i.activeTab==="doc"),s(2),c("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[ue,C,y,he,ve,Ce,_e,xe],encapsulation:2})}return a})();var He=[{path:"",component:we}],Pe=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=q({type:a});static \u0275inj=I({imports:[Y.forChild(He),Y]})}return a})();var Ct=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=q({type:a});static \u0275inj=I({imports:[Se,Pe]})}return a})();export{Ct as DocPoSelectModule};
