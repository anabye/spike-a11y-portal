import{o as y,p as Se}from"./chunk-ZC2HZG7B.js";import{Ab as x,Fa as j,O as de,Q as R,Sa as M,U as me,Xa as D,a as N,nb as ue,q as se,ra as ce,v as A,zb as C}from"./chunk-TPH26USO.js";import{$c as Y,Aa as c,Ab as ae,Da as _,Fb as T,Gc as V,Hc as z,Ic as B,Jc as k,Kc as W,La as n,M as ee,Ma as t,N as F,Na as l,Q as L,Ra as I,Sa as E,U as u,V as S,Xa as ne,Xc as pe,Zc as re,bb as q,bc as le,cb as e,db as K,eb as w,gb as g,hb as b,ib as h,ja as s,ka as U,mb as ie,nb as Q,ob as P,pb as oe,qa as v,ra as G,wa as te}from"./chunk-CBLD3XJL.js";var Te=()=>({label:"Option 1",value:"1"}),Me=()=>({label:"Option 2",value:"2"}),Oe=(a,J)=>[a,J],ge=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=v({type:a,selectors:[["sample-po-select-basic"]],standalone:!1,decls:1,vars:6,consts:[["name","select","p-label","PO Select",3,"p-options"]],template:function(p,i){p&1&&l(0,"po-select",0),p&2&&c("p-options",oe(3,Oe,Q(1,Te),Q(2,Me)))},dependencies:[M],encapsulation:2})}return a})();var Ve=a=>({"docs-sample-code-tabs":a}),be=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=v({type:a,selectors:[["sample-po-select-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,i){p&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Select Basic"),t(),n(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-select-basic/sample-po-select-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-select
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
`),t()()()()(),n(21,"div",10),l(22,"sample-po-select-basic"),t(),l(23,"hr")),p&2&&(s(5),_("po-icon "+i.sampleCodeButtonIcon),s(),w(" ",i.sampleCodeButtonLabel,""),s(),c("ngClass",P(4,Ve,i.hideSampleCodeTabs)))},dependencies:[T,y,C,x,ge],encapsulation:2})}return a})();var Ee=(()=>{class a{cdr=L(ae);helperText;event;help;label;option;options;optionsGroup;optionsGroupList=[];placeholder;properties;fieldErrorMessage;select;selectedOptionsGroup;selectOptionGroupSwitch;size;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"readonly",label:"Read Only"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}addOption(){this.options=this.verifyOptionObject(this.options.concat(),this.option,this.optionsGroup),this.option={label:void 0,value:void 0},this.cdr.detectChanges()}changeEvent(r){this.event=r}optionsGroupSelection(){this.optionsGroup=this.selectedOptionsGroup}restore(){this.helperText="",this.event="",this.help=void 0,this.label=void 0,this.option={label:void 0,value:void 0},this.options=[],this.optionsGroup=void 0,this.optionsGroupList=[],this.placeholder="",this.properties=[],this.fieldErrorMessage="",this.select="",this.selectOptionGroupSwitch=!1,this.selectedOptionsGroup=void 0,this.size="medium"}restoreSwitch(r){r||(this.selectedOptionsGroup=void 0,this.optionsGroup=void 0)}insertGroupIntoSelectInput(r){this.selectedOptionsGroup=r,this.optionsGroupList=[...this.optionsGroupList,{label:r,value:r}]}verifyOptionObject(r,p,i){let{label:m,value:d}=p;if(i){let o=r.findIndex($=>$.label===i&&"options"in $);return o===-1?(this.insertGroupIntoSelectInput(i),[...r,{label:i,options:[{label:m,value:d}]}]):(r[o].options.push({label:m,value:d}),r)}return[...r,{label:m,value:d}]}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=v({type:a,selectors:[["sample-po-select-labs"]],standalone:!1,decls:33,vars:35,consts:[["fOption","ngForm"],["f","ngForm"],["name","select",1,"po-md-12",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-helper","p-disabled","p-help","p-label","p-options","p-optional","p-placeholder","p-readonly","p-required","p-field-error-message","p-show-required","p-size","p-error-limit","p-label-text-wrap"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["p-label","Po select options group"],["name","selectOptionGroupSwitch","p-label","Select options group",1,"po-lg-2","po-md-12",3,"p-change","ngModelChange","ngModel"],["name","selectedsOptionsGroup","p-label","Options group list",1,"po-lg-4","po-md-6",3,"ngModelChange","p-change","ngModel","p-disabled","p-options"],["name","optionsGroup","p-label","New Options Group","p-required","",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel","p-disabled"],["p-label","Po select options"],["name","optionLabel","p-label","Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","optionValue","p-label","Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Option",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","label","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],[1,"po-lg-3","po-md-6"],["p-label","Sample Restore",3,"p-click"]],template:function(p,i){if(p&1){let m=I();n(0,"po-select",2),h("ngModelChange",function(o){return u(m),b(i.select,o)||(i.select=o),S(o)}),E("p-blur",function(){return u(m),S(i.changeEvent("p-blur"))})("p-change",function(){return u(m),S(i.changeEvent("p-change"))})("p-change-model",function(){return u(m),S(i.changeEvent("p-change-model"))})("p-enter",function(){return u(m),S(i.changeEvent("p-enter"))})("p-keydown",function(){return u(m),S(i.changeEvent("p-keydown"))}),t(),l(1,"po-divider"),n(2,"div",3),l(3,"po-info",4)(4,"po-info",5),t(),l(5,"po-divider"),n(6,"form",null,0),l(8,"po-divider",6),n(9,"div",3)(10,"po-switch",7),E("p-change",function(o){return u(m),S(i.restoreSwitch(o))}),h("ngModelChange",function(o){return u(m),b(i.selectOptionGroupSwitch,o)||(i.selectOptionGroupSwitch=o),S(o)}),t(),n(11,"po-select",8),h("ngModelChange",function(o){return u(m),b(i.selectedOptionsGroup,o)||(i.selectedOptionsGroup=o),S(o)}),E("p-change",function(){return u(m),S(i.optionsGroupSelection())}),t(),n(12,"po-input",9),h("ngModelChange",function(o){return u(m),b(i.optionsGroup,o)||(i.optionsGroup=o),S(o)}),t()(),l(13,"po-divider",10),n(14,"div",3)(15,"po-input",11),h("ngModelChange",function(o){return u(m),b(i.option.label,o)||(i.option.label=o),S(o)}),t(),n(16,"po-input",12),h("ngModelChange",function(o){return u(m),b(i.option.value,o)||(i.option.value=o),S(o)}),t()(),n(17,"div",3)(18,"po-button",13),E("p-click",function(){return u(m),S(i.addOption())}),t()()(),l(19,"po-divider"),n(20,"form",null,1)(22,"po-input",14),h("ngModelChange",function(o){return u(m),b(i.label,o)||(i.label=o),S(o)}),t(),n(23,"po-input",15),h("ngModelChange",function(o){return u(m),b(i.help,o)||(i.help=o),S(o)}),t(),n(24,"po-input",16),h("ngModelChange",function(o){return u(m),b(i.helperText,o)||(i.helperText=o),S(o)}),t(),n(25,"po-input",17),h("ngModelChange",function(o){return u(m),b(i.placeholder,o)||(i.placeholder=o),S(o)}),t(),n(26,"po-input",18),h("ngModelChange",function(o){return u(m),b(i.fieldErrorMessage,o)||(i.fieldErrorMessage=o),S(o)}),t(),n(27,"po-checkbox-group",19),h("ngModelChange",function(o){return u(m),b(i.properties,o)||(i.properties=o),S(o)}),t(),n(28,"po-radio-group",20),h("ngModelChange",function(o){return u(m),b(i.size,o)||(i.size=o),S(o)}),t(),n(29,"div",3)(30,"div",21)(31,"po-button",22),E("p-click",function(){return u(m),S(i.restore())}),t()()(),l(32,"form"),t()}if(p&2){let m=q(7);g("ngModel",i.select),c("p-helper",i.helperText)("p-disabled",i.properties.includes("disabled"))("p-help",i.help)("p-label",i.label)("p-options",i.options)("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-field-error-message",i.fieldErrorMessage)("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap")),s(3),c("p-value",i.select),s(),c("p-value",i.event),s(6),g("ngModel",i.selectOptionGroupSwitch),s(),g("ngModel",i.selectedOptionsGroup),c("p-disabled",!i.selectOptionGroupSwitch)("p-options",i.optionsGroupList),s(),g("ngModel",i.optionsGroup),c("p-disabled",!i.selectOptionGroupSwitch),s(3),g("ngModel",i.option.label),s(),g("ngModel",i.option.value),s(2),c("p-disabled",m.invalid),s(4),g("ngModel",i.label),s(),g("ngModel",i.help),s(),g("ngModel",i.helperText),s(),g("ngModel",i.placeholder),s(),g("ngModel",i.fieldErrorMessage),s(),g("ngModel",i.properties),c("p-options",i.propertiesOptions),s(),g("ngModel",i.size),c("p-options",i.sizeOptions)}},dependencies:[W,V,z,k,B,A,N,de,R,j,M,ce,D],encapsulation:2})}return a})();var qe=a=>({"docs-sample-code-tabs":a}),ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=v({type:a,selectors:[["sample-po-select-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,i){p&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Select Labs"),t(),n(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-select-labs/sample-po-select-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-select
  class="po-md-12"
  name="select"
  [(ngModel)]="select"
  [p-helper]="helperText"
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

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

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

  helperText: string;
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
    this.helperText = '';
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
`),t()()()()(),n(21,"div",10),l(22,"sample-po-select-labs"),t(),l(23,"hr")),p&2&&(s(5),_("po-icon "+i.sampleCodeButtonIcon),s(),w(" ",i.sampleCodeButtonLabel,""),s(),c("ngClass",P(4,qe,i.hideSampleCodeTabs)))},dependencies:[T,y,C,x,Ee],encapsulation:2})}return a})();var Z=(()=>{class a{http=L(le);url="https://po-sample-api.onrender.com/v1/sampleSelect";getCitiesByState(r){return this.http.get(`${this.url}/getCities/${r}`)}getStates(){return this.http.get(`${this.url}/getStates`)}static \u0275fac=function(p){return new(p||a)};static \u0275prov=ee({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function Ge(a,J){if(a&1&&(n(0,"div",17),l(1,"po-avatar",18),n(2,"div",19)(3,"div",20),e(4),t(),n(5,"div",21),e(6),t()()()),a&2){let r=J.$implicit;s(),ne("p-src","https://po-sample-api.onrender.com/v1/sampleSelect/",r.value,".png"),s(3),K(r.label),s(2),K(r.value)}}var fe=(()=>{class a{sampleService=L(Z);address;city;cityOptions;document;documentLabel;documentType;mask;minLength;name;nameLabel;state;stateOptions;options=[{label:"CPF",value:"CPF"},{label:"CNPJ",value:"CNPJ"}];citiesSubscription;statesSubscription;ngOnDestroy(){this.citiesSubscription?.unsubscribe(),this.statesSubscription?.unsubscribe()}ngOnInit(){this.initialize(),this.getStates(),this.changeType(this.documentType)}changeType(r){r==="CPF"?(this.documentLabel="CPF Number",this.mask="999.999.999-99",this.minLength=14,this.nameLabel="Client Name"):(this.documentLabel="CNPJ Number",this.mask="99.999.999/9999-99",this.minLength=18,this.nameLabel="Company Name"),this.address="",this.document="",this.name=""}initialize(){this.cityOptions=[],this.stateOptions=[],this.documentType="CPF"}onChangeState(){this.getCitiesByState(this.state)}getCityByValue(r){let p=this.cityOptions.find(i=>i.value===r);return p?p.label:""}getStateByValue(r){let p=this.stateOptions.find(i=>i.value===r);return p?p.label:""}getCitiesByState(r){this.citiesSubscription=this.sampleService.getCitiesByState(r).subscribe(p=>{this.cityOptions=p.items,this.city=this.cityOptions[0].value})}getStates(){this.statesSubscription=this.sampleService.getStates().subscribe(r=>{this.stateOptions=r.items,this.state="sp",this.getCitiesByState(this.state)})}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=v({type:a,selectors:[["sample-po-select-customer-registration"]],standalone:!1,features:[ie([Z])],decls:27,vars:22,consts:[["f","ngForm"],["modal",""],[1,"po-row"],["name","documentType","p-label","Document type",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","document","p-mask-format-model","","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-label","p-mask","p-minlength"],["name","name","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-label"],["name","address","p-label","Address",1,"po-md-6",3,"ngModelChange","ngModel"],["name","state","p-label","State",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["p-select-option-template",""],["name","city","p-label","City",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Send Informations",1,"po-md-4",3,"p-click","p-disabled"],["p-title","Informations"],["p-label","Document type",1,"po-md-6",3,"p-value"],[1,"po-md-6",3,"p-label","p-value"],["p-label","Address",1,"po-md-6",3,"p-value"],["p-label","State",1,"po-md-6",3,"p-value"],["p-label","City",1,"po-md-6",3,"p-value"],[1,"sample-select-option-template-container"],["p-size","xs",3,"p-src"],[1,"sample-select-option-template-margin"],[1,"sample-select-option-template-label"],[1,"sample-select-option-template-value"]],template:function(p,i){if(p&1){let m=I();n(0,"form",null,0)(2,"div",2)(3,"po-radio-group",3),h("ngModelChange",function(o){return u(m),b(i.documentType,o)||(i.documentType=o),S(o)}),E("p-change",function(o){return u(m),S(i.changeType(o))}),t(),n(4,"po-input",4),h("ngModelChange",function(o){return u(m),b(i.document,o)||(i.document=o),S(o)}),t()(),n(5,"div",2)(6,"po-input",5),h("ngModelChange",function(o){return u(m),b(i.name,o)||(i.name=o),S(o)}),t(),n(7,"po-input",6),h("ngModelChange",function(o){return u(m),b(i.address,o)||(i.address=o),S(o)}),t()(),n(8,"div",2)(9,"po-select",7),h("ngModelChange",function(o){return u(m),b(i.state,o)||(i.state=o),S(o)}),E("p-change",function(){return u(m),S(i.onChangeState())}),te(10,Ge,7,4,"ng-template",8),t(),n(11,"po-select",9),h("ngModelChange",function(o){return u(m),b(i.city,o)||(i.city=o),S(o)}),t()(),n(12,"div",2)(13,"po-button",10),E("p-click",function(){u(m);let o=q(15);return S(o.open())}),t()()(),n(14,"po-modal",11,1)(16,"div",2),l(17,"po-info",12)(18,"po-info",13),t(),l(19,"po-divider"),n(20,"div",2),l(21,"po-info",13)(22,"po-info",14),t(),l(23,"po-divider"),n(24,"div",2),l(25,"po-info",15)(26,"po-info",16),t()()}if(p&2){let m=q(1);s(3),g("ngModel",i.documentType),c("p-options",i.options),s(),g("ngModel",i.document),c("p-label",i.documentLabel)("p-mask",i.mask)("p-minlength",i.minLength),s(2),g("ngModel",i.name),c("p-label",i.nameLabel),s(),g("ngModel",i.address),s(2),g("ngModel",i.state),c("p-options",i.stateOptions),s(2),g("ngModel",i.city),c("p-options",i.cityOptions),s(2),c("p-disabled",m.invalid),s(4),c("p-value",i.documentType),s(),c("p-label",i.documentLabel)("p-value",i.document),s(3),c("p-label",i.nameLabel)("p-value",i.name),s(),c("p-value",i.address),s(3),c("p-value",i.getStateByValue(i.state)),s(),c("p-value",i.getCityByValue(i.city))}},dependencies:[W,V,z,k,B,se,A,N,R,j,M,D,me],styles:[".sample-select-option-template-container[_ngcontent-%COMP%]{display:inline-flex;align-items:flex-start;width:100%}.sample-select-option-template-margin[_ngcontent-%COMP%]{margin:5px}.sample-select-option-template-label[_ngcontent-%COMP%]{font-size:16px}.sample-select-option-template-value[_ngcontent-%COMP%]{font-size:12px;text-transform:uppercase}"]})}return a})();var ze=a=>({"docs-sample-code-tabs":a}),Ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=v({type:a,selectors:[["sample-po-select-customer-registration-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,i){p&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Select - Customer registration"),t(),n(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-select-customer-registration/sample-po-select-customer-registration.component.html"),t(),n(13,"pre",7),e(14,`<form #f="ngForm">
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
`),t()()()()(),n(21,"div",10),l(22,"sample-po-select-companies"),t(),l(23,"hr")),p&2&&(s(5),_("po-icon "+i.sampleCodeButtonIcon),s(),w(" ",i.sampleCodeButtonLabel,""),s(),c("ngClass",P(4,Ne,i.hideSampleCodeTabs)))},dependencies:[T,y,C,x,xe],encapsulation:2})}return a})();var _e=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=v({type:a,selectors:[["sample-po-select-doc"]],standalone:!1,decls:973,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-combo-option-template"],["href","/documentation/po-select-option-template"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","any[]"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"language-typescript"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","number"]],template:function(p,i){p&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
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
`),t()(),n(225,"h4",12),e(226,"Propriedades"),t(),n(227,"table",13)(228,"tr",14)(229,"th",15),e(230,"Nome"),t(),n(231,"th",15),e(232,"Tipo"),t(),n(233,"th",15),e(234,"Padr\xE3o"),t(),n(235,"th",15),e(236,"Descri\xE7\xE3o"),t()(),n(237,"tr",16)(238,"td",17)(239,"div",18)(240,"span",19),e(241," (p-additional-help)"),l(242,"br"),t()(),n(243,"div",20),e(244,"Deprecated"),t()(),n(245,"td",21)(246,"code",22),e(247,"EventEmitter"),t()(),n(248,"td",23),e(249,"-"),t(),n(250,"td",24)(251,"em")(252,"strong"),e(253,"(opcional)"),t()(),n(254,"p"),e(255,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),t(),n(256,"blockquote")(257,"p"),e(258,"Essa propriedade est\xE1 "),n(259,"strong"),e(260,"depreciada"),t(),e(261," e ser\xE1 removida na vers\xE3o "),n(262,"code"),e(263,"23.x.x"),t(),e(264,". Recomendamos utilizar a propriedade "),n(265,"code"),e(266,"p-helper"),t(),e(267," que oferece mais recursos e flexibilidade."),t()()()(),n(268,"tr",16)(269,"td",17)(270,"div",25)(271,"span",26),e(272," p-additional-help-tooltip"),l(273,"br"),t()(),n(274,"div",20),e(275,"Deprecated"),t()(),n(276,"td",21)(277,"code",27),e(278,"string"),t()(),n(279,"td",23),e(280,"-"),t(),n(281,"td",24)(282,"em")(283,"strong"),e(284,"(opcional)"),t()(),n(285,"p"),e(286,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),n(287,"code"),e(288,"po-helper"),t(),e(289,`.
`),n(290,"strong"),e(291,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(292,"blockquote")(293,"p"),e(294,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),n(295,"blockquote")(296,"p"),e(297,"Essa propriedade est\xE1 "),n(298,"strong"),e(299,"depreciada"),t(),e(300," e ser\xE1 removida na vers\xE3o "),n(301,"code"),e(302,"23.x.x"),t(),e(303,". Recomendamos utilizar a propriedade "),n(304,"code"),e(305,"p-helper"),t(),e(306," que oferece mais recursos e flexibilidade."),t()()()(),n(307,"tr",16)(308,"td",17)(309,"div",25)(310,"span",26),e(311," p-append-in-body"),l(312,"br"),t()()(),n(313,"td",21)(314,"code",28),e(315,"boolean"),t()(),n(316,"td",23)(317,"p")(318,"code"),e(319,"false"),t()()(),n(320,"td",24)(321,"em")(322,"strong"),e(323,"(opcional)"),t()(),n(324,"p"),e(325,"Define que o popover ("),n(326,"code"),e(327,"p-helper"),t(),e(328," e/ou "),n(329,"code"),e(330,"p-error-limit"),t(),e(331,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),n(332,"blockquote")(333,"p"),e(334,"Quando utilizado com "),n(335,"code"),e(336,"p-helper"),t(),e(337,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),t()()()(),n(338,"tr",16)(339,"td",17)(340,"div",18)(341,"span",19),e(342," (p-blur)"),l(343,"br"),t()()(),n(344,"td",21)(345,"code",22),e(346,"EventEmitter"),t()(),n(347,"td",23),e(348,"-"),t(),n(349,"td",24)(350,"em")(351,"strong"),e(352,"(opcional)"),t()(),n(353,"p"),e(354,"Evento disparado ao sair do campo."),t()()(),n(355,"tr",16)(356,"td",17)(357,"div",18)(358,"span",19),e(359," (p-change)"),l(360,"br"),t()()(),n(361,"td",21)(362,"code",22),e(363,"EventEmitter"),t()(),n(364,"td",23),e(365,"-"),t(),n(366,"td",24)(367,"em")(368,"strong"),e(369,"(opcional)"),t()(),n(370,"p"),e(371,"Evento disparado ao alterar valor do campo."),t()()(),n(372,"tr",16)(373,"td",17)(374,"div",25)(375,"span",26),e(376," p-disabled"),l(377,"br"),t()()(),n(378,"td",21)(379,"code",28),e(380,"boolean"),t()(),n(381,"td",23)(382,"p")(383,"code"),e(384,"false"),t()()(),n(385,"td",24)(386,"em")(387,"strong"),e(388,"(opcional)"),t()(),n(389,"p"),e(390,"Indica se o campo ser\xE1 desabilitado."),t()()(),n(391,"tr",16)(392,"td",17)(393,"div",25)(394,"span",26),e(395," p-error-limit"),l(396,"br"),t()()(),n(397,"td",21)(398,"code",28),e(399,"boolean"),t()(),n(400,"td",23)(401,"p")(402,"code"),e(403,"false"),t()()(),n(404,"td",24)(405,"em")(406,"strong"),e(407,"(opcional)"),t()(),n(408,"p"),e(409,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(410,"blockquote")(411,"p"),e(412,"Caso essa propriedade seja definida como "),n(413,"code"),e(414,"true"),t(),e(415,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),n(416,"tr",16)(417,"td",17)(418,"div",25)(419,"span",26),e(420," p-field-error-message"),l(421,"br"),t()()(),n(422,"td",21)(423,"code",27),e(424,"string"),t()(),n(425,"td",23),e(426,"-"),t(),n(427,"td",24)(428,"em")(429,"strong"),e(430,"(opcional)"),t()(),n(431,"p"),e(432,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),t(),n(433,"blockquote")(434,"p"),e(435,"Necess\xE1rio que a propriedade "),n(436,"code"),e(437,"p-required"),t(),e(438," esteja habilitada."),t()()()(),n(439,"tr",16)(440,"td",17)(441,"div",25)(442,"span",26),e(443," p-field-label"),l(444,"br"),t()()(),n(445,"td",21)(446,"code",27),e(447,"string"),t()(),n(448,"td",23)(449,"p")(450,"code"),e(451,"label"),t()()(),n(452,"td",24)(453,"em")(454,"strong"),e(455,"(opcional)"),t()(),n(456,"p"),e(457,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),n(458,"code"),e(459,"p-options"),t(),e(460,"), esta propriedade ser\xE1 respons\xE1vel pelo texto de apresenta\xE7\xE3o de cada item da lista."),t()()(),n(461,"tr",16)(462,"td",17)(463,"div",25)(464,"span",26),e(465," p-field-value"),l(466,"br"),t()()(),n(467,"td",21)(468,"code",27),e(469,"string"),t()(),n(470,"td",23)(471,"p")(472,"code"),e(473,"value"),t()()(),n(474,"td",24)(475,"em")(476,"strong"),e(477,"(opcional)"),t()(),n(478,"p"),e(479,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),n(480,"code"),e(481,"p-options"),t(),e(482,"), esta propriedade ser\xE1 respons\xE1vel pelo valor de cada item da lista."),t()()(),n(483,"tr",16)(484,"td",17)(485,"div",25)(486,"span",26),e(487," p-help"),l(488,"br"),t()()(),n(489,"td",21)(490,"code",27),e(491,"string"),t()(),n(492,"td",23),e(493,"-"),t(),n(494,"td",24)(495,"p"),e(496,"Texto de apoio para o campo."),t()()(),n(497,"tr",16)(498,"td",17)(499,"div",18)(500,"span",19),e(501," (p-keydown)"),l(502,"br"),t()()(),n(503,"td",21)(504,"code",22),e(505,"EventEmitter"),t()(),n(506,"td",23),e(507,"-"),t(),n(508,"td",24)(509,"em")(510,"strong"),e(511,"(opcional)"),t()(),n(512,"p"),e(513,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(514,"code"),e(515,"KeyboardEvent"),t(),e(516," com informa\xE7\xF5es sobre a tecla."),t()()(),n(517,"tr",16)(518,"td",17)(519,"div",25)(520,"span",26),e(521," p-label"),l(522,"br"),t()()(),n(523,"td",21)(524,"code",27),e(525,"string"),t()(),n(526,"td",23),e(527,"-"),t(),n(528,"td",24)(529,"p"),e(530,"R\xF3tulo exibido pelo componente."),t()()(),n(531,"tr",16)(532,"td",17)(533,"div",25)(534,"span",26),e(535," p-label-text-wrap"),l(536,"br"),t()()(),n(537,"td",21)(538,"code",28),e(539,"boolean"),t()(),n(540,"td",23)(541,"p")(542,"code"),e(543,"false"),t()()(),n(544,"td",24)(545,"em")(546,"strong"),e(547,"(opcional)"),t()(),n(548,"p"),e(549,"Habilita a quebra autom\xE1tica do texto da propriedade "),n(550,"code"),e(551,"p-label"),t(),e(552,". Quando "),n(553,"code"),e(554,"p-label-text-wrap"),t(),e(555,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),n(556,"tr",16)(557,"td",17)(558,"div",25)(559,"span",26),e(560," name"),l(561,"br"),t()()(),n(562,"td",21)(563,"code",27),e(564,"string"),t()(),n(565,"td",23),e(566,"-"),t(),n(567,"td",24)(568,"p"),e(569,"Nome do componente."),t()()(),n(570,"tr",16)(571,"td",17)(572,"div",18)(573,"span",19),e(574," (ngModelChange)"),l(575,"br"),t()()(),n(576,"td",21)(577,"code",22),e(578,"EventEmitter"),t()(),n(579,"td",23),e(580,"-"),t(),n(581,"td",24)(582,"em")(583,"strong"),e(584,"(opcional)"),t()(),n(585,"p"),e(586,"Fun\xE7\xE3o para atualizar o ngModel do componente, necess\xE1rio quando n\xE3o for utilizado dentro da tag form."),t(),n(587,"p"),e(588,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),n(589,"code"),e(590,"strictTemplates"),t(),e(591,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),t(),n(592,"pre")(593,"code"),e(594,`<po-select ... [ngModel]="selectModel" (ngModelChange)="selectModel = $event"> </po-select>
`),t()()()(),n(595,"tr",16)(596,"td",17)(597,"div",25)(598,"span",26),e(599," p-optional"),l(600,"br"),t()()(),n(601,"td",21)(602,"code",28),e(603,"boolean"),t()(),n(604,"td",23)(605,"p")(606,"code"),e(607,"false"),t()()(),n(608,"td",24)(609,"em")(610,"strong"),e(611,"(opcional)"),t()(),n(612,"p"),e(613,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(614,"blockquote")(615,"p"),e(616,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(617,"ul")(618,"li"),e(619,"O campo conter "),n(620,"code"),e(621,"p-required"),t(),e(622,";"),t(),n(623,"li"),e(624,"N\xE3o possuir "),n(625,"code"),e(626,"p-help"),t(),e(627," e/ou "),n(628,"code"),e(629,"p-label"),t(),e(630,"."),t()()()(),n(631,"tr",16)(632,"td",17)(633,"div",25)(634,"span",26),e(635," p-options"),l(636,"br"),t()()(),n(637,"td",21)(638,"code",29),e(639,"any[]"),t()(),n(640,"td",23),e(641,"-"),t(),n(642,"td",24)(643,"p"),e(644,"Nesta propriedade deve ser definido uma cole\xE7\xE3o de objetos que implementam a interface "),n(645,"code"),e(646,"PoSelectOption"),t(),e(647,`,
ou uma cole\xE7\xE3o de objetos dentro de grupos diferentes, que seriam da interface `),n(648,"code"),e(649,"PoSelectOptionGroup"),t(),e(650,"."),t(),n(651,"p"),e(652,"Caso esta lista estiver vazia, o model ser\xE1 "),n(653,"code"),e(654,"undefined"),t(),e(655,"."),t(),n(656,"blockquote")(657,"p"),e(658,`Essa propriedade \xE9 imut\xE1vel, ou seja, sempre que quiser atualizar a lista de op\xE7\xF5es dispon\xEDveis
atualize a refer\xEAncia do objeto:`),t()(),n(659,"pre")(660,"code"),e(661,`// atualiza a refer\xEAncia do objeto garantindo a atualiza\xE7\xE3o do template
this.options = [...this.options, { value: 'x', label: 'Nova op\xE7\xE3o' }];

// evite, pois n\xE3o atualiza a refer\xEAncia do objeto podendo gerar atrasos na atualiza\xE7\xE3o do template
this.options.push({ value: 'x', label: 'Nova op\xE7\xE3o' });
`),t()(),n(662,"blockquote")(663,"p"),e(664,"Para cole\xE7\xE3o de objetos dentro de grupos distintos ser\xE1 exibido a label e op\xE7\xF5es somente se a propriedade "),n(665,"code"),e(666,"options"),t(),e(667," possua valores. Sendo assim, a estrutura seguiria dessa forma:"),t()(),n(668,"pre")(669,"code"),e(670,`this.options = [{
 label: 'Op\xE7\xF5es',
 options: [
   { value: 1, label: 'op\xE7\xE3o 1' },
   { value: 2, label: 'op\xE7\xE3o 2' }
 ],
}];
`),t()(),n(671,"p"),e(672,`\xC9 poss\xEDvel a utiliza\xE7\xE3o de op\xE7\xF5es agrupadas e desagrupadas em conjunto, por\xE9m ser\xE1 feita a ordena\xE7\xE3o de exibir as op\xE7\xF5es
desagrupadas acima.`),t()()(),n(673,"tr",16)(674,"td",17)(675,"div",25)(676,"span",26),e(677," p-placeholder"),l(678,"br"),t()()(),n(679,"td",21)(680,"code",27),e(681,"string"),t()(),n(682,"td",23),e(683,"-"),t(),n(684,"td",24)(685,"em")(686,"strong"),e(687,"(opcional)"),t()(),n(688,"p"),e(689,"Mensagem que aparecer\xE1 enquanto nenhuma op\xE7\xE3o estiver selecionada."),t()()(),n(690,"tr",16)(691,"td",17)(692,"div",25)(693,"span",26),e(694," p-helper"),l(695,"br"),t()()(),n(696,"td",21)(697,"code",30),e(698,"PoHelperOptions "),t(),n(699,"code",27),e(700," string"),t()(),n(701,"td",23),e(702,"-"),t(),n(703,"td",24)(704,"em")(705,"strong"),e(706,"(opcional)"),t()(),n(707,"p"),e(708,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),n(709,"code"),e(710,"p-label"),t(),e(711," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),n(712,"code"),e(713,"p-label"),t(),e(714,"."),t(),n(715,"blockquote")(716,"p"),e(717,"Para mais informa\xE7\xF5es acesse: "),n(718,"a",31),e(719,"https://po-ui.io/documentation/po-helper"),t(),e(720,"."),t()(),n(721,"blockquote")(722,"p"),e(723,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),n(724,"code"),e(725,"p-additional-help-tooltip"),t(),e(726," e "),n(727,"code"),e(728,"p-additional-help"),t(),e(729,") ser\xE1 ignorado."),t()()()(),n(730,"tr",16)(731,"td",17)(732,"div",25)(733,"span",26),e(734," p-readonly"),l(735,"br"),t()()(),n(736,"td",21)(737,"code",28),e(738,"boolean"),t()(),n(739,"td",23)(740,"p")(741,"code"),e(742,"false"),t()()(),n(743,"td",24)(744,"em")(745,"strong"),e(746,"(opcional)"),t()(),n(747,"p"),e(748,"Indica que o campo ser\xE1 somente para leitura."),t()()(),n(749,"tr",16)(750,"td",17)(751,"div",25)(752,"span",26),e(753," p-required"),l(754,"br"),t()()(),n(755,"td",21)(756,"code",28),e(757,"boolean"),t()(),n(758,"td",23)(759,"p")(760,"code"),e(761,"false"),t()()(),n(762,"td",24)(763,"em")(764,"strong"),e(765,"(opcional)"),t()(),n(766,"p"),e(767,"Define que o campo ser\xE1 obrigat\xF3rio."),t()()(),n(768,"tr",16)(769,"td",17)(770,"div",25)(771,"span",26),e(772," p-show-required"),l(773,"br"),t()()(),n(774,"td",21)(775,"code",28),e(776,"boolean"),t()(),n(777,"td",23),e(778,"-"),t(),n(779,"td",24)(780,"p"),e(781,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(782,"blockquote")(783,"p"),e(784,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(785,"ul")(786,"li"),e(787,"N\xE3o possuir "),n(788,"code"),e(789,"p-help"),t(),e(790," e/ou "),n(791,"code"),e(792,"p-label"),t(),e(793,"."),t()()()(),n(794,"tr",16)(795,"td",17)(796,"div",25)(797,"span",26),e(798," p-size"),l(799,"br"),t()()(),n(800,"td",21)(801,"code",27),e(802,"string"),t()(),n(803,"td",23)(804,"p")(805,"code"),e(806,"medium"),t()()(),n(807,"td",24)(808,"em")(809,"strong"),e(810,"(opcional)"),t()(),n(811,"p"),e(812,"Define o tamanho do componente:"),t(),n(813,"ul")(814,"li")(815,"code"),e(816,"small"),t(),e(817,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(818,"li")(819,"code"),e(820,"medium"),t(),e(821,": altura do input como 44px."),t()(),n(822,"blockquote")(823,"p"),e(824,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(825,"code"),e(826,"medium"),t(),e(827,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(828,"a",32),e(829,"po-theme"),t(),e(830,"."),t()()()()(),n(831,"h3",12),e(832,"M\xE9todos"),t(),n(833,"table",33)(834,"tr",16)(835,"th",34)(836,"div",25)(837,"h4")(838,"span",26),e(839," focus "),t()()()()(),n(840,"tr",24)(841,"td",24)(842,"p"),e(843,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(844,"p"),e(845,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(846,"pre")(847,"code"),e(848,`import { PoSelectComponent } from '@po-ui/ng-components';

...

@ViewChild(PoSelectComponent, { static: true }) select: PoSelectComponent;

focusSelect() {
  this.select.focus();
}
`),t()()()()(),l(849,"br"),n(850,"table",33)(851,"tr",16)(852,"th",34)(853,"div",25)(854,"h4")(855,"span",26),e(856," showAdditionalHelp "),t()()()()(),n(857,"tr",24)(858,"td",24)(859,"p"),e(860,"M\xE9todo que exibe "),n(861,"code"),e(862,"p-helper"),t(),e(863," ou executa a a\xE7\xE3o definida em "),n(864,"code"),e(865,"p-helper{eventOnClick}"),t(),e(866," ou em "),n(867,"code"),e(868,"p-additionalHelp"),t(),e(869,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),n(870,"code"),e(871,"p-keydown"),t(),e(872,"."),t(),n(873,"blockquote")(874,"p"),e(875,"Exibe ou oculta o conte\xFAdo do componente "),n(876,"code"),e(877,"po-helper"),t(),e(878," quando o componente estiver com foco."),t()(),n(879,"pre")(880,"code"),e(881,`//Exemplo com p-label e p-helper
<po-select
 #select
 ...
 p-label="Label do select"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, select)"
></po-select>
`),t()(),n(882,"pre")(883,"code",35),e(884,`onKeyDown(event: KeyboardEvent, inp: PoSelectComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),l(885,"br"),n(886,"h3"),e(887,"Interfaces"),t(),n(888,"h4",36)(889,"code",5),e(890,"PoSelectOptionGroup"),t()(),n(891,"div",2)(892,"p"),e(893,"Interface da cole\xE7\xF5es de itens em grupo, utilizando uma label para o grupo e as op\xE7\xF5es do tipo "),n(894,"code"),e(895,"PoSelectOption"),t(),e(896,"."),t()(),n(897,"h4",12),e(898,"Propriedades"),t(),n(899,"table",13)(900,"tr",14)(901,"th",15),e(902,"Nome"),t(),n(903,"th",15),e(904,"Tipo"),t(),n(905,"th",15),e(906,"Descri\xE7\xE3o"),t()(),n(907,"tr",16)(908,"td",17)(909,"div",25)(910,"span",26),e(911," label"),l(912,"br"),t()()(),n(913,"td",21)(914,"code",27),e(915,"string"),t()(),n(916,"td",24)(917,"p"),e(918,"Label para denominar o nome do grupo."),t()()(),n(919,"tr",16)(920,"td",17)(921,"div",25)(922,"span",26),e(923," options"),l(924,"br"),t()()(),n(925,"td",21)(926,"code",37),e(927,"Array<PoSelectOption>"),t()(),n(928,"td",24)(929,"p"),e(930,"Lista com as op\xE7\xF5es dispon\xEDveis em cada grupo."),t()()()(),n(931,"h4",36)(932,"code",5),e(933,"PoSelectOption"),t()(),n(934,"div",2)(935,"p"),e(936,"Interface da cole\xE7\xF5es de itens que deve ser informado no componente po-select"),t()(),n(937,"h4",12),e(938,"Propriedades"),t(),n(939,"table",13)(940,"tr",14)(941,"th",15),e(942,"Nome"),t(),n(943,"th",15),e(944,"Tipo"),t(),n(945,"th",15),e(946,"Descri\xE7\xE3o"),t()(),n(947,"tr",16)(948,"td",17)(949,"div",25)(950,"span",26),e(951," label"),l(952,"br"),t()()(),n(953,"td",21)(954,"code",27),e(955,"string"),t()(),n(956,"td",24)(957,"p"),e(958,"Label a ser utilizada nos itens da lista."),t()()(),n(959,"tr",16)(960,"td",17)(961,"div",25)(962,"span",26),e(963," value"),l(964,"br"),t()()(),n(965,"td",21)(966,"code",27),e(967,"string "),t(),n(968,"code",38),e(969," number"),t()(),n(970,"td",24)(971,"p"),e(972,"Valor do objeto que ser\xE1 atribu\xEDdo ao model."),t()()()()())},dependencies:[y],encapsulation:2})}return a})();var we=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,p){this.route=r,this.router=p}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let p=r.view;this.activeTab=p||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(p){return new(p||a)(U(pe),U(re))};static \u0275cmp=v({type:a,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Select",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(p,i){p&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),E("p-click",function(){return i.changeTab("doc")}),l(3,"sample-po-select-doc"),t(),n(4,"po-tab",3),E("p-click",function(){return i.changeTab("web")}),l(5,"sample-po-select-basic-view")(6,"sample-po-select-labs-view")(7,"sample-po-select-customer-registration-view")(8,"sample-po-select-companies-view"),t()()()),p&2&&(c("p-actions",i.actions),s(2),c("p-active",i.activeTab==="doc"),s(2),c("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[ue,C,x,be,ve,Ce,ye,_e],encapsulation:2})}return a})();var je=[{path:"",component:we}],Pe=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=G({type:a});static \u0275inj=F({imports:[Y.forChild(je),Y]})}return a})();var Tt=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=G({type:a});static \u0275inj=F({imports:[Se,Pe]})}return a})();export{Tt as DocPoSelectModule};
