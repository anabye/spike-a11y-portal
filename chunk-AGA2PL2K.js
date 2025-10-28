import{o as w,p as le}from"./chunk-4LS3IIFX.js";import{Ab as C,Fa as O,O as oe,Q as M,Sa as H,Xa as ie,a as ee,nb as ae,ra as ne,v as te,zb as x}from"./chunk-OGQO3MKC.js";import{Aa as s,Ac as B,Cb as P,Da as y,Dc as R,Ec as F,Fc as A,Gc as W,Hc as L,Kc as J,La as o,Lc as X,Ma as t,N as k,Na as a,Pc as Y,Q as K,Ra as V,Sa as g,U as u,Uc as Z,V as c,Wc as $,Yc as j,bb as D,cb as e,eb as _,gb as h,hb as S,ib as f,ja as p,ka as z,kb as I,lb as T,mb as Q,qa as E,ra as q}from"./chunk-KZJHT32G.js";var ve=()=>({label:"Option 1",value:"1"}),xe=()=>({label:"Option 2",value:"2"}),Ce=(i,fe)=>[i,fe],re=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275cmp=E({type:i,selectors:[["sample-po-radio-group-basic"]],standalone:!1,decls:1,vars:6,consts:[["name","radioGroupBasic","p-label","PO Radio Group",3,"p-options"]],template:function(r,n){r&1&&a(0,"po-radio-group",0),r&2&&s("p-options",Q(3,Ce,I(1,ve),I(2,xe)))},dependencies:[M],encapsulation:2})}return i})();var ye=i=>({"docs-sample-code-tabs":i}),pe=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=E({type:i,selectors:[["sample-po-radio-group-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Radio Group Basic"),t(),o(4,"a",2),g("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-radio-group-basic/sample-po-radio-group-basic.component.html"),t(),o(13,"pre",7),e(14,`<po-radio-group
  name="radioGroupBasic"
  p-label="PO Radio Group"
  [p-options]="[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' }
  ]"
>
</po-radio-group>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-radio-group-basic/sample-po-radio-group-basic.component.ts"),t(),o(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-radio-group-basic',
  templateUrl: './sample-po-radio-group-basic.component.html',
  standalone: false
})
export class SamplePoRadioGroupBasicComponent {}
`),t()()()()(),o(21,"div",10),a(22,"sample-po-radio-group-basic"),t(),a(23,"hr")),r&2&&(p(5),y("po-icon "+n.sampleCodeButtonIcon),p(),_(" ",n.sampleCodeButtonLabel,""),p(),s("ngClass",T(4,ye,n.hideSampleCodeTabs)))},dependencies:[P,w,x,C,re],encapsulation:2})}return i})();var me=(()=>{class i{additionalHelpTooltip;columns;event;help;label;option;options;properties;radioGroup;fieldErrorMessage;size;columnOptions=[{label:"1 column",value:1},{label:"2 columns",value:2},{label:"3 columns",value:3},{label:"4 columns",value:4}];propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"}];sizesOptions=[{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];ngOnInit(){this.restore()}addOption(){this.options.push(this.option),this.option=this.getNewOption()}changeEvent(d){this.event=d}restore(){this.additionalHelpTooltip="",this.event="",this.radioGroup=void 0,this.properties=[],this.fieldErrorMessage="",this.size="medium",this.option=this.getNewOption(),this.options=[]}getNewOption(){return{label:void 0,value:void 0}}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=E({type:i,selectors:[["sample-po-radio-group-labs"]],standalone:!1,decls:26,vars:30,consts:[["optionForm","ngForm"],["propertiesForm","ngForm"],["name","radioGroupLabs",3,"ngModelChange","p-change","p-keydown","ngModel","p-additional-help-tooltip","p-columns","p-disabled","p-help","p-label","p-optional","p-options","p-required","p-field-error-message","p-show-required","p-size","p-error-limit","p-label-text-wrap"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","optionLabel","p-label","Option Label","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","optionValue","p-label","Option Value","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","optionDisabled","p-label","Option Disabled",1,"po-lg-4",3,"ngModelChange","ngModel"],["p-label","Add Option",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","columns","p-columns","4","p-label","Columns",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"click"]],template:function(r,n){if(r&1){let m=V();o(0,"po-radio-group",2),f("ngModelChange",function(l){return u(m),S(n.radioGroup,l)||(n.radioGroup=l),c(l)}),g("p-change",function(){return u(m),c(n.changeEvent("p-change"))})("p-keydown",function(){return u(m),c(n.changeEvent("p-keydown"))}),t(),a(1,"po-divider"),o(2,"div",3),a(3,"po-info",4)(4,"po-info",5),t(),a(5,"po-divider"),o(6,"form",null,0)(8,"div",3)(9,"po-input",6),f("ngModelChange",function(l){return u(m),S(n.option.label,l)||(n.option.label=l),c(l)}),t(),o(10,"po-input",7),f("ngModelChange",function(l){return u(m),S(n.option.value,l)||(n.option.value=l),c(l)}),t(),o(11,"po-switch",8),f("ngModelChange",function(l){return u(m),S(n.option.disabled,l)||(n.option.disabled=l),c(l)}),t()(),o(12,"div",3)(13,"po-button",9),g("p-click",function(){u(m);let l=D(7);return n.addOption(),c(l.reset())}),t()()(),a(14,"po-divider"),o(15,"form",null,1)(17,"po-input",10),f("ngModelChange",function(l){return u(m),S(n.label,l)||(n.label=l),c(l)}),t(),o(18,"po-input",11),f("ngModelChange",function(l){return u(m),S(n.help,l)||(n.help=l),c(l)}),t(),o(19,"po-input",12),f("ngModelChange",function(l){return u(m),S(n.additionalHelpTooltip,l)||(n.additionalHelpTooltip=l),c(l)}),t(),o(20,"po-input",13),f("ngModelChange",function(l){return u(m),S(n.fieldErrorMessage,l)||(n.fieldErrorMessage=l),c(l)}),t(),o(21,"po-radio-group",14),f("ngModelChange",function(l){return u(m),S(n.columns,l)||(n.columns=l),c(l)}),t(),o(22,"po-checkbox-group",15),f("ngModelChange",function(l){return u(m),S(n.properties,l)||(n.properties=l),c(l)}),t(),o(23,"po-radio-group",16),f("ngModelChange",function(l){return u(m),S(n.size,l)||(n.size=l),c(l)}),t(),o(24,"div",3)(25,"po-button",17),g("click",function(){return u(m),D(16).reset(),c(n.restore())}),t()()()}if(r&2){let m=D(7);h("ngModel",n.radioGroup),s("p-additional-help-tooltip",n.additionalHelpTooltip)("p-columns",n.columns)("p-disabled",n.properties.includes("disabled"))("p-help",n.help)("p-label",n.label)("p-optional",n.properties.includes("optional"))("p-options",n.options)("p-required",n.properties.includes("required"))("p-field-error-message",n.fieldErrorMessage)("p-show-required",n.properties.includes("showRequired"))("p-size",n.size)("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit"))("p-label-text-wrap",n.properties==null?null:n.properties.includes("labelTextWrap")),p(3),s("p-value",n.radioGroup),p(),s("p-value",n.event),p(5),h("ngModel",n.option.label),p(),h("ngModel",n.option.value),p(),h("ngModel",n.option.disabled),p(2),s("p-disabled",m.invalid),p(4),h("ngModel",n.label),p(),h("ngModel",n.help),p(),h("ngModel",n.additionalHelpTooltip),p(),h("ngModel",n.fieldErrorMessage),p(),h("ngModel",n.columns),s("p-options",n.columnOptions),p(),h("ngModel",n.properties),s("p-options",n.propertiesOptions),p(),h("ngModel",n.size),s("p-options",n.sizesOptions)}},dependencies:[L,R,F,W,A,te,ee,oe,M,O,ne,ie],encapsulation:2})}return i})();var Pe=i=>({"docs-sample-code-tabs":i}),se=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=E({type:i,selectors:[["sample-po-radio-group-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Radio Group Labs"),t(),o(4,"a",2),g("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-radio-group-labs/sample-po-radio-group-labs.component.html"),t(),o(13,"pre",7),e(14,`<po-radio-group
  name="radioGroupLabs"
  [(ngModel)]="radioGroup"
  [p-additional-help-tooltip]="additionalHelpTooltip"
  [p-columns]="columns"
  [p-disabled]="properties.includes('disabled')"
  [p-help]="help"
  [p-label]="label"
  [p-optional]="properties.includes('optional')"
  [p-options]="options"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  (p-change)="changeEvent('p-change')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
>
</po-radio-group>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="radioGroup"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #optionForm="ngForm">
  <div class="po-row">
    <po-input class="po-md-6 po-lg-4" name="optionLabel" [(ngModel)]="option.label" p-label="Option Label" p-required>
    </po-input>

    <po-input class="po-md-6 po-lg-4" name="optionValue" [(ngModel)]="option.value" p-label="Option Value" p-required>
    </po-input>

    <po-switch class="po-lg-4" name="optionDisabled" [(ngModel)]="option.disabled" p-label="Option Disabled">
    </po-switch>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-6 po-lg-3"
      p-label="Add Option"
      [p-disabled]="optionForm.invalid"
      (p-click)="addOption(); optionForm.reset()"
    >
    </po-button>
  </div>
</form>

<po-divider />

<form #propertiesForm="ngForm">
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

  <po-radio-group
    class="po-md-12"
    name="columns"
    [(ngModel)]="columns"
    p-columns="4"
    p-label="Columns"
    [p-options]="columnOptions"
  >
  </po-radio-group>

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
    [p-options]="sizesOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (click)="propertiesForm.reset(); restore()">
    </po-button>
  </div>
</form>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-radio-group-labs/sample-po-radio-group-labs.component.ts"),t(),o(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-radio-group-labs',
  templateUrl: './sample-po-radio-group-labs.component.html',
  standalone: false
})
export class SamplePoRadioGroupLabsComponent implements OnInit {
  additionalHelpTooltip: string;
  columns: number;
  event: string;
  help: string;
  label: string;
  option: PoRadioGroupOption;
  options: Array<PoRadioGroupOption>;
  properties: Array<string>;
  radioGroup: string;
  fieldErrorMessage: string;
  size: string;

  readonly columnOptions: Array<PoRadioGroupOption> = [
    { label: '1 column', value: 1 },
    { label: '2 columns', value: 2 },
    { label: '3 columns', value: 3 },
    { label: '4 columns', value: 4 }
  ];

  readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' }
  ];

  readonly sizesOptions: Array<PoRadioGroupOption> = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' }
  ];

  ngOnInit() {
    this.restore();
  }

  addOption() {
    this.options.push(this.option);
    this.option = this.getNewOption();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.additionalHelpTooltip = '';
    this.event = '';
    this.radioGroup = undefined;
    this.properties = [];
    this.fieldErrorMessage = '';
    this.size = 'medium';
    this.option = this.getNewOption();
    this.options = [];
  }

  private getNewOption(): PoRadioGroupOption {
    return {
      label: undefined,
      value: undefined
    };
  }
}
`),t()()()()(),o(21,"div",10),a(22,"sample-po-radio-group-labs"),t(),a(23,"hr")),r&2&&(p(5),y("po-icon "+n.sampleCodeButtonIcon),p(),_(" ",n.sampleCodeButtonLabel,""),p(),s("ngClass",T(4,Pe,n.hideSampleCodeTabs)))},dependencies:[P,w,x,C,me],encapsulation:2})}return i})();var ue=(()=>{class i{language="es";original="";translated="";languageOptions=[{label:"Spanish",value:"es"},{label:"English",value:"en"}];optionsList=[{value:"1",label:"Ol\xE1"},{value:"2",label:"Tchau"},{value:"3",label:"Estrangeiro"},{value:"4",label:"Alinhamento"},{value:"5",label:"Vis\xE3o"},{value:"6",label:"Livro"}];wordsOptions=[{id:"1",en:"Hello",es:"Hola"},{id:"2",en:"Bye",es:"Hasta luego"},{id:"3",en:"Foreign",es:"Extranjero"},{id:"4",en:"Alignment",es:"Alineaci\xF3n"},{id:"5",en:"Vision",es:"Vista"},{id:"6",en:"Book",es:"Libro"}];changeLanguage(d){let r=this.wordsOptions.find(n=>n.id===this.original);r&&(this.translated=r[d||this.language])}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=E({type:i,selectors:[["sample-po-radio-group-translator"]],standalone:!1,decls:6,vars:5,consts:[["f","ngForm"],[1,"po-row"],["name","language","p-label","Select a Language","p-required","",1,"po-lg-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","original","p-label","Original Text (Portuguese)","p-required","",1,"po-lg-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","translated","p-label","Translated Text","p-readonly","","p-required","",1,"po-lg-4",3,"ngModelChange","ngModel"]],template:function(r,n){if(r&1){let m=V();o(0,"form",null,0)(2,"div",1)(3,"po-radio-group",2),f("ngModelChange",function(l){return u(m),S(n.language,l)||(n.language=l),c(l)}),g("p-change",function(l){return u(m),c(n.changeLanguage(l))}),t(),o(4,"po-select",3),f("ngModelChange",function(l){return u(m),S(n.original,l)||(n.original=l),c(l)}),g("p-change",function(l){return u(m),c(n.changeLanguage(l))}),t(),o(5,"po-input",4),f("ngModelChange",function(l){return u(m),S(n.translated,l)||(n.translated=l),c(l)}),t()()()}r&2&&(p(3),h("ngModel",n.language),s("p-options",n.languageOptions),p(),h("ngModel",n.original),s("p-options",n.optionsList),p(),h("ngModel",n.translated))},dependencies:[L,R,F,W,A,M,O,H],encapsulation:2})}return i})();var Re=i=>({"docs-sample-code-tabs":i}),ce=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=E({type:i,selectors:[["sample-po-radio-group-translator-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Radio Group - Translator"),t(),o(4,"a",2),g("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-radio-group-translator/sample-po-radio-group-translator.component.html"),t(),o(13,"pre",7),e(14,`<form #f="ngForm">
  <div class="po-row">
    <po-radio-group
      class="po-lg-4"
      name="language"
      [(ngModel)]="language"
      p-label="Select a Language"
      p-required
      [p-options]="languageOptions"
      (p-change)="changeLanguage($event)"
    >
    </po-radio-group>

    <po-select
      class="po-lg-4"
      name="original"
      [(ngModel)]="original"
      p-label="Original Text (Portuguese)"
      p-required
      [p-options]="optionsList"
      (p-change)="changeLanguage($event)"
    >
    </po-select>

    <po-input
      class="po-lg-4"
      name="translated"
      [(ngModel)]="translated"
      p-label="Translated Text"
      p-readonly
      p-required
    >
    </po-input>
  </div>
</form>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-radio-group-translator/sample-po-radio-group-translator.component.ts"),t(),o(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-radio-group-translator',
  templateUrl: './sample-po-radio-group-translator.component.html',
  standalone: false
})
export class SamplePoRadioGroupTranslatorComponent {
  language: string = 'es';
  original: string = '';
  translated: string = '';

  readonly languageOptions: Array<PoRadioGroupOption> = [
    { label: 'Spanish', value: 'es' },
    { label: 'English', value: 'en' }
  ];

  readonly optionsList: Array<PoSelectOption> = [
    { value: '1', label: 'Ol\xE1' },
    { value: '2', label: 'Tchau' },
    { value: '3', label: 'Estrangeiro' },
    { value: '4', label: 'Alinhamento' },
    { value: '5', label: 'Vis\xE3o' },
    { value: '6', label: 'Livro' }
  ];

  readonly wordsOptions: Array<any> = [
    { id: '1', en: 'Hello', es: 'Hola' },
    { id: '2', en: 'Bye', es: 'Hasta luego' },
    { id: '3', en: 'Foreign', es: 'Extranjero' },
    { id: '4', en: 'Alignment', es: 'Alineaci\xF3n' },
    { id: '5', en: 'Vision', es: 'Vista' },
    { id: '6', en: 'Book', es: 'Libro' }
  ];

  changeLanguage(value) {
    const word = this.wordsOptions.find(item => item.id === this.original);

    if (word) {
      this.translated = word[value || this.language];
    }
  }
}
`),t()()()()(),o(21,"div",10),a(22,"sample-po-radio-group-translator"),t(),a(23,"hr")),r&2&&(p(5),y("po-icon "+n.sampleCodeButtonIcon),p(),_(" ",n.sampleCodeButtonLabel,""),p(),s("ngClass",T(4,Re,n.hideSampleCodeTabs)))},dependencies:[P,w,x,C,ue],encapsulation:2})}return i})();var ge=(()=>{class i{formBuilder=K(Y);translatorForm;languageOptions=[{label:"Spanish",value:"es"},{label:"English",value:"en"}];optionsList=[{value:"1",label:"Ol\xE1"},{value:"2",label:"Tchau"},{value:"3",label:"Estrangeiro"},{value:"4",label:"Alinhamento"},{value:"5",label:"Vis\xE3o"},{value:"6",label:"Livro"}];wordsOptions=[{id:"1",en:"Hello",es:"Hola"},{id:"2",en:"Bye",es:"Hasta luego"},{id:"3",en:"Foreign",es:"Extranjero"},{id:"4",en:"Alignment",es:"Alineaci\xF3n"},{id:"5",en:"Vision",es:"Vista"},{id:"6",en:"Book",es:"Libro"}];ngOnInit(){this.translatorForm=this.formBuilder.group({language:["es",B.required],original:[void 0,B.required],translated:[void 0,B.required]})}changeLanguage(){let d=this.translatorForm.value.language,r=this.translatorForm.value.original,n=this.wordsOptions.find(m=>m.id===r);n&&this.translatorForm.patchValue({translated:n[d]})}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=E({type:i,selectors:[["sample-po-radio-group-translator-reactive-form"]],standalone:!1,decls:5,vars:3,consts:[[3,"formGroup"],[1,"po-row"],["name","language","formControlName","language","p-label","Select a Language","p-required","",1,"po-lg-4",3,"p-change","p-options"],["name","original","formControlName","original","p-label","Original Text (Portuguese)","p-required","",1,"po-lg-4",3,"p-change","p-options"],["name","translated","formControlName","translated","p-label","Translated Text","p-readonly","","p-required","",1,"po-lg-4"]],template:function(r,n){r&1&&(o(0,"form",0)(1,"div",1)(2,"po-radio-group",2),g("p-change",function(){return n.changeLanguage()}),t(),o(3,"po-select",3),g("p-change",function(){return n.changeLanguage()}),t(),a(4,"po-input",4),t()()),r&2&&(s("formGroup",n.translatorForm),p(2),s("p-options",n.languageOptions),p(),s("p-options",n.optionsList))},dependencies:[L,R,F,J,X,M,O,H],encapsulation:2})}return i})();var Oe=i=>({"docs-sample-code-tabs":i}),Ee=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=E({type:i,selectors:[["sample-po-radio-group-translator-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Radio Group - Translator Reactive Form"),t(),o(4,"a",2),g("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-radio-group-translator-reactive-form/sample-po-radio-group-translator-reactive-form.component.html"),t(),o(13,"pre",7),e(14,`<form [formGroup]="translatorForm">
  <div class="po-row">
    <po-radio-group
      class="po-lg-4"
      name="language"
      formControlName="language"
      p-label="Select a Language"
      p-required
      [p-options]="languageOptions"
      (p-change)="changeLanguage()"
    >
    </po-radio-group>

    <po-select
      class="po-lg-4"
      name="original"
      formControlName="original"
      p-label="Original Text (Portuguese)"
      p-required
      [p-options]="optionsList"
      (p-change)="changeLanguage()"
    >
    </po-select>

    <po-input
      class="po-lg-4"
      name="translated"
      formControlName="translated"
      p-label="Translated Text"
      p-readonly
      p-required
    >
    </po-input>
  </div>
</form>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-radio-group-translator-reactive-form/sample-po-radio-group-translator-reactive-form.component.ts"),t(),o(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-radio-group-translator-reactive-form',
  templateUrl: './sample-po-radio-group-translator-reactive-form.component.html',
  standalone: false
})
export class SamplePoRadioGroupTranslatorReactiveFormComponent implements OnInit {
  private formBuilder = inject(UntypedFormBuilder);

  translatorForm: UntypedFormGroup;

  readonly languageOptions: Array<PoRadioGroupOption> = [
    { label: 'Spanish', value: 'es' },
    { label: 'English', value: 'en' }
  ];

  readonly optionsList: Array<PoSelectOption> = [
    { value: '1', label: 'Ol\xE1' },
    { value: '2', label: 'Tchau' },
    { value: '3', label: 'Estrangeiro' },
    { value: '4', label: 'Alinhamento' },
    { value: '5', label: 'Vis\xE3o' },
    { value: '6', label: 'Livro' }
  ];

  readonly wordsOptions: Array<any> = [
    { id: '1', en: 'Hello', es: 'Hola' },
    { id: '2', en: 'Bye', es: 'Hasta luego' },
    { id: '3', en: 'Foreign', es: 'Extranjero' },
    { id: '4', en: 'Alignment', es: 'Alineaci\xF3n' },
    { id: '5', en: 'Vision', es: 'Vista' },
    { id: '6', en: 'Book', es: 'Libro' }
  ];

  ngOnInit() {
    this.translatorForm = this.formBuilder.group({
      language: ['es', Validators.required],
      original: [undefined, Validators.required],
      translated: [undefined, Validators.required]
    });
  }

  changeLanguage() {
    const language = this.translatorForm.value.language;
    const original = this.translatorForm.value.original;

    const word = this.wordsOptions.find(item => item.id === original);

    if (word) {
      this.translatorForm.patchValue({
        translated: word[language]
      });
    }
  }
}
`),t()()()()(),o(21,"div",10),a(22,"sample-po-radio-group-translator-reactive-form"),t(),a(23,"hr")),r&2&&(p(5),y("po-icon "+n.sampleCodeButtonIcon),p(),_(" ",n.sampleCodeButtonLabel,""),p(),s("ngClass",T(4,Oe,n.hideSampleCodeTabs)))},dependencies:[P,w,x,C,ge],encapsulation:2})}return i})();var be=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275cmp=E({type:i,selectors:[["sample-po-radio-group-doc"]],standalone:!1,decls:859,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-combo"],["href","/documentation/po-select"],["href","/documentation/po-checkbox-group"],["href","https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"],["href","https://www.w3.org/WAI/WCAG21/Understanding/use-of-color"],["href","https://www.w3.org/TR/wai-aria-practices-1.1/#keyboard-interaction-3"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://doc.animaliads.io/docs/components/radio"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoRadioGroupOption[]"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"]],template:function(r,n){r&1&&(o(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),o(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),o(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),o(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),o(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),o(16,"h3",3),e(17,"Componente"),t(),o(18,"h4",4)(19,"code",5),e(20,"PoRadioGroupComponent"),t()(),o(21,"div",2)(22,"p"),e(23,"O componente "),o(24,"code"),e(25,"po-radio-group"),t(),e(26,` deve ser utilizado para disponibilizar m\xFAltiplas op\xE7\xF5es ao usu\xE1rio, permitindo a ele que
selecione apenas uma delas. Seu uso \xE9 recomendado para um n\xFAmero pequeno de op\xE7\xF5es, caso contr\xE1rio, recomenda-se o uso
do `),o(27,"a",6)(28,"strong"),e(29,"po-combo"),t()(),e(30," ou "),o(31,"a",7)(32,"strong"),e(33,"po-select"),t()(),e(34,"."),t(),o(35,"p"),e(36,`Este n\xE3o \xE9 um componente de multisele\xE7\xE3o, se for este o caso, deve-se utilizar o
`),o(37,"a",8)(38,"strong"),e(39,"po-checkbox-group"),t()(),e(40,"."),t(),o(41,"blockquote")(42,"p"),e(43,"Ao passar um valor para o "),o(44,"em"),e(45,"model"),t(),e(46," que n\xE3o esteja na lista de op\xE7\xF5es, o mesmo ser\xE1 definido como "),o(47,"code"),e(48,"undefined"),t(),e(49,"."),t()(),o(50,"h4"),e(51,"Acessibilidade tratada no componente interno "),o(52,"code"),e(53,"po-radio"),t(),e(54,":"),t(),o(55,"p"),e(56,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),t(),o(57,"ul")(58,"li"),e(59,"O componente foi desenvolvido utilizando controles padr\xF5es HTML para permitir a identifica\xE7\xE3o do mesmo na interface por tecnologias assistivas. "),o(60,"a",9),e(61,"WCAG 4.1.2: Name, Role, Value"),t()(),o(62,"li"),e(63,"A cor n\xE3o deve ser o \xFAnico meio para diferenciar o radio button normal do selecionado, por isso deve-se manter uma diferen\xE7a visual entre os estados. "),o(64,"a",10),e(65,"WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification"),t()(),o(66,"li"),e(67,"Quando em foco, o componente \xE9 ativado usando as teclas de Espa\xE7o e Enter do teclado. "),o(68,"a",11),e(69,"W3C WAI-ARIA 3.5 Button - Keyboard Interaction"),t()(),o(70,"li"),e(71,"A \xE1rea do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco n\xE3o pode ficar escondido por outros elementos da tela. "),o(72,"a",12),e(73,"(WCAG 2.4.12: Focus Appearance"),t()()(),o(74,"p"),e(75,"Conforme documenta\xE7\xE3o em: "),o(76,"a",13),e(77,"https://doc.animaliads.io/docs/components/radio"),t()(),o(78,"h4"),e(79,"Tokens customiz\xE1veis"),t(),o(80,"p"),e(81,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),a(82,"br"),e(83,`
Obs: No componente Radio Group, a customiza\xE7\xE3o ocorre principalmente nos elementos `),o(84,"code"),e(85,"po-radio"),t(),e(86," que comp\xF5em o grupo de op\xE7\xF5es. "),a(87,"br"),e(88,`
Portanto, ao aplicar estilos customizados, \xE9 importante focar na customiza\xE7\xE3o dos elementos `),o(89,"code"),e(90,"po-radio"),t(),e(91," em vez do pr\xF3prio "),o(92,"code"),e(93,"po-radio-group"),t(),e(94,"."),t(),o(95,"blockquote")(96,"p"),e(97,"Para maiores informa\xE7\xF5es, acesse o guia "),o(98,"a",14),e(99,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(100,"."),t()(),o(101,"table")(102,"thead")(103,"tr")(104,"th"),e(105,"Propriedade"),t(),o(106,"th"),e(107,"Descri\xE7\xE3o"),t(),o(108,"th"),e(109,"Valor Padr\xE3o"),t()()(),o(110,"tbody")(111,"tr")(112,"td")(113,"strong"),e(114,"Default Values"),t()(),a(115,"td")(116,"td"),t(),o(117,"tr")(118,"td")(119,"code"),e(120,"--border-color"),t()(),o(121,"td"),e(122,"Cor da borda"),t(),o(123,"td")(124,"code"),e(125,"var(--color-neutral-dark-70)"),t()()(),o(126,"tr")(127,"td")(128,"strong"),e(129,"Hover"),t()(),a(130,"td")(131,"td"),t(),o(132,"tr")(133,"td")(134,"code"),e(135,"--shadow-color-hover"),t()(),o(136,"td"),e(137,"Cor da sombra no estado hover"),t(),o(138,"td")(139,"code"),e(140,"var(--color-brand-01-lighter)"),t()()(),o(141,"tr")(142,"td")(143,"code"),e(144,"--color-hover"),t()(),o(145,"td"),e(146,"Cor principal no estado hover"),t(),o(147,"td")(148,"code"),e(149,"var(--color-brand-01-dark)"),t()()(),o(150,"tr")(151,"td")(152,"strong"),e(153,"Focused"),t()(),a(154,"td")(155,"td"),t(),o(156,"tr")(157,"td")(158,"code"),e(159,"--outline-color-focused"),t()(),o(160,"td"),e(161,"Cor do outline do estado de focus"),t(),o(162,"td")(163,"code"),e(164,"var(--color-brand-01-darkest)"),t()()(),o(165,"tr")(166,"td")(167,"strong"),e(168,"checked"),t()(),a(169,"td")(170,"td"),t(),o(171,"tr")(172,"td")(173,"code"),e(174,"--color-unchecked"),t()(),o(175,"td"),e(176,"Cor quando n\xE3o selecionado"),t(),o(177,"td")(178,"code"),e(179,"var(--color-neutral-light-00)"),t()()(),o(180,"tr")(181,"td")(182,"code"),e(183,"--color-checked"),t()(),o(184,"td"),e(185,"Cor quando selecionado"),t(),o(186,"td")(187,"code"),e(188,"var(--color-action-default)"),t()()(),o(189,"tr")(190,"td")(191,"strong"),e(192,"Disabled"),t()(),a(193,"td")(194,"td"),t(),o(195,"tr")(196,"td")(197,"code"),e(198,"--color-unchecked-disabled"),t()(),o(199,"td"),e(200,"Cor pricipal quando n\xE3o selecionado no estado disabled"),t(),o(201,"td")(202,"code"),e(203,"var(--color-neutral-light-30)"),t()()(),o(204,"tr")(205,"td")(206,"code"),e(207,"--color-checked-disabled"),t()(),o(208,"td"),e(209,"Cor pricipal quando selecionado no estado disabled"),t(),o(210,"td")(211,"code"),e(212,"var(--color-neutral-dark-70)"),t()()()()()(),o(213,"div",15)(214,"h4",16),e(215,"Seletor"),t(),o(216,"pre",17),e(217,`<po-radio-group
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
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    name="string"
    p-optional="boolean"
    p-options="PoRadioGroupOption[]"
    p-helper="PoHelperOptions | string"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string" >
</po-radio-group>
`),t()(),o(218,"h4",18),e(219,"Propriedades"),t(),o(220,"table",19)(221,"tr",20)(222,"th",21),e(223,"Nome"),t(),o(224,"th",21),e(225,"Tipo"),t(),o(226,"th",21),e(227,"Padr\xE3o"),t(),o(228,"th",21),e(229,"Descri\xE7\xE3o"),t()(),o(230,"tr",22)(231,"td",23)(232,"div",24)(233,"span",25),e(234," (p-additional-help)"),a(235,"br"),t()(),o(236,"div",26),e(237,"Deprecated"),t()(),o(238,"td",27)(239,"code",28),e(240,"EventEmitter"),t()(),o(241,"td",29),e(242,"-"),t(),o(243,"td",30)(244,"em")(245,"strong"),e(246,"(opcional)"),t()(),o(247,"p"),e(248,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),o(249,"code"),e(250,"p-help"),t(),e(251,"."),t(),o(252,"blockquote")(253,"p"),e(254,"Essa propriedade est\xE1 "),o(255,"strong"),e(256,"depreciada"),t(),e(257," e ser\xE1 removida na vers\xE3o "),o(258,"code"),e(259,"23.x.x"),t(),e(260,". Recomendamos utilizar a propriedade "),o(261,"code"),e(262,"p-helper"),t(),e(263," que oferece mais recursos e flexibilidade."),t()()()(),o(264,"tr",22)(265,"td",23)(266,"div",31)(267,"span",32),e(268," p-additional-help-tooltip"),a(269,"br"),t()(),o(270,"div",26),e(271,"Deprecated"),t()(),o(272,"td",27)(273,"code",33),e(274,"string"),t()(),o(275,"td",29),e(276,"-"),t(),o(277,"td",30)(278,"em")(279,"strong"),e(280,"(opcional)"),t()(),o(281,"p"),e(282,"Exibe um \xEDcone de ajuda adicional ao "),o(283,"code"),e(284,"p-help"),t(),e(285,`, com o texto desta propriedade no tooltip.
Se o evento `),o(286,"code"),e(287,"p-additional-help"),t(),e(288,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),o(289,"strong"),e(290,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),o(291,"blockquote")(292,"p"),e(293,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),o(294,"blockquote")(295,"p"),e(296,"Essa propriedade est\xE1 "),o(297,"strong"),e(298,"depreciada"),t(),e(299," e ser\xE1 removida na vers\xE3o "),o(300,"code"),e(301,"23.x.x"),t(),e(302,". Recomendamos utilizar a propriedade "),o(303,"code"),e(304,"p-helper"),t(),e(305," que oferece mais recursos e flexibilidade."),t()()()(),o(306,"tr",22)(307,"td",23)(308,"div",31)(309,"span",32),e(310," p-append-in-body"),a(311,"br"),t()()(),o(312,"td",27)(313,"code",34),e(314,"boolean"),t()(),o(315,"td",29)(316,"p")(317,"code"),e(318,"false"),t()()(),o(319,"td",30)(320,"em")(321,"strong"),e(322,"(opcional)"),t()(),o(323,"p"),e(324,"Define que o tooltip ("),o(325,"code"),e(326,"p-additional-help-tooltip"),t(),e(327," e/ou "),o(328,"code"),e(329,"p-error-limit"),t(),e(330,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),o(331,"blockquote")(332,"p"),e(333,"Quando utilizado com "),o(334,"code"),e(335,"p-additional-help-tooltip"),t(),e(336,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),o(337,"tr",22)(338,"td",23)(339,"div",31)(340,"span",32),e(341," p-auto-focus"),a(342,"br"),t()()(),o(343,"td",27)(344,"code",34),e(345,"boolean"),t()(),o(346,"td",29)(347,"p")(348,"code"),e(349,"false"),t()()(),o(350,"td",30)(351,"em")(352,"strong"),e(353,"(opcional)"),t()(),o(354,"p"),e(355,"Aplica foco no elemento ao ser iniciado."),t(),o(356,"blockquote")(357,"p"),e(358,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),o(359,"tr",22)(360,"td",23)(361,"div",24)(362,"span",25),e(363," (p-change)"),a(364,"br"),t()()(),o(365,"td",27)(366,"code",28),e(367,"EventEmitter"),t()(),o(368,"td",29),e(369,"-"),t(),o(370,"td",30)(371,"em")(372,"strong"),e(373,"(opcional)"),t()(),o(374,"p"),e(375,"Evento ao alterar valor do campo."),t()()(),o(376,"tr",22)(377,"td",23)(378,"div",31)(379,"span",32),e(380," p-columns"),a(381,"br"),t()()(),o(382,"td",27)(383,"code",35),e(384,"number"),t()(),o(385,"td",29)(386,"p")(387,"code"),e(388,"2"),t()()(),o(389,"td",30)(390,"em")(391,"strong"),e(392,"(opcional)"),t()(),o(393,"p"),e(394,"Define a quantidade de colunas para exibi\xE7\xE3o das op\xE7\xF5es."),t(),o(395,"p")(396,"strong"),e(397,"Considera\xE7\xF5es:"),t()(),o(398,"ul")(399,"li"),e(400,"\xC9 poss\xEDvel exibir as op\xE7\xF5es entre "),o(401,"code"),e(402,"1"),t(),e(403," e "),o(404,"code"),e(405,"4"),t(),e(406," colunas."),t(),o(407,"li"),e(408,"O n\xFAmero m\xE1ximo de colunas \xE9 invari\xE1vel nas seguintes resolu\xE7\xF5es:"),o(409,"ul")(410,"li")(411,"code"),e(412,"sm"),t(),e(413,": "),o(414,"code"),e(415,"1"),t()(),o(416,"li")(417,"code"),e(418,"md"),t(),e(419,": "),o(420,"code"),e(421,"2"),t()()()()()()(),o(422,"tr",22)(423,"td",23)(424,"div",31)(425,"span",32),e(426," p-disabled"),a(427,"br"),t()()(),o(428,"td",27)(429,"code",34),e(430,"boolean"),t()(),o(431,"td",29)(432,"p")(433,"code"),e(434,"false"),t()()(),o(435,"td",30)(436,"em")(437,"strong"),e(438,"(opcional)"),t()(),o(439,"p"),e(440,"Indica que o campo ser\xE1 desabilitado."),t()()(),o(441,"tr",22)(442,"td",23)(443,"div",31)(444,"span",32),e(445," p-error-limit"),a(446,"br"),t()()(),o(447,"td",27)(448,"code",34),e(449,"boolean"),t()(),o(450,"td",29)(451,"p")(452,"code"),e(453,"false"),t()()(),o(454,"td",30)(455,"em")(456,"strong"),e(457,"(opcional)"),t()(),o(458,"p"),e(459,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),o(460,"blockquote")(461,"p"),e(462,"Caso essa propriedade seja definida como "),o(463,"code"),e(464,"true"),t(),e(465,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),o(466,"tr",22)(467,"td",23)(468,"div",31)(469,"span",32),e(470," p-field-error-message"),a(471,"br"),t()()(),o(472,"td",27)(473,"code",33),e(474,"string"),t()(),o(475,"td",29),e(476,"-"),t(),o(477,"td",30)(478,"em")(479,"strong"),e(480,"(opcional)"),t()(),o(481,"p"),e(482,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),t(),o(483,"blockquote")(484,"p"),e(485,"Necess\xE1rio que a propriedade "),o(486,"code"),e(487,"p-required"),t(),e(488," esteja habilitada."),t()()()(),o(489,"tr",22)(490,"td",23)(491,"div",31)(492,"span",32),e(493," p-help"),a(494,"br"),t()()(),o(495,"td",27)(496,"code",33),e(497,"string"),t()(),o(498,"td",29),e(499,"-"),t(),o(500,"td",30)(501,"em")(502,"strong"),e(503,"(opcional)"),t()(),o(504,"p"),e(505,"Texto de apoio do campo."),t()()(),o(506,"tr",22)(507,"td",23)(508,"div",24)(509,"span",25),e(510," (p-keydown)"),a(511,"br"),t()()(),o(512,"td",27)(513,"code",28),e(514,"EventEmitter"),t()(),o(515,"td",29),e(516,"-"),t(),o(517,"td",30)(518,"em")(519,"strong"),e(520,"(opcional)"),t()(),o(521,"p"),e(522,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),o(523,"code"),e(524,"KeyboardEvent"),t(),e(525," com informa\xE7\xF5es sobre a tecla."),t()()(),o(526,"tr",22)(527,"td",23)(528,"div",31)(529,"span",32),e(530," p-label"),a(531,"br"),t()()(),o(532,"td",27)(533,"code",33),e(534,"string"),t()(),o(535,"td",29),e(536,"-"),t(),o(537,"td",30)(538,"em")(539,"strong"),e(540,"(opcional)"),t()(),o(541,"p"),e(542,"Label do campo."),t()()(),o(543,"tr",22)(544,"td",23)(545,"div",31)(546,"span",32),e(547," p-label-text-wrap"),a(548,"br"),t()()(),o(549,"td",27)(550,"code",34),e(551,"boolean"),t()(),o(552,"td",29)(553,"p")(554,"code"),e(555,"false"),t()()(),o(556,"td",30)(557,"em")(558,"strong"),e(559,"(opcional)"),t()(),o(560,"p"),e(561,"Habilita a quebra autom\xE1tica do texto da propriedade "),o(562,"code"),e(563,"p-label"),t(),e(564,". Quando "),o(565,"code"),e(566,"p-label-text-wrap"),t(),e(567,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),o(568,"tr",22)(569,"td",23)(570,"div",31)(571,"span",32),e(572," name"),a(573,"br"),t()()(),o(574,"td",27)(575,"code",33),e(576,"string"),t()(),o(577,"td",29),e(578,"-"),t(),o(579,"td",30)(580,"p"),e(581,"Nome das op\xE7\xF5es."),t()()(),o(582,"tr",22)(583,"td",23)(584,"div",31)(585,"span",32),e(586," p-optional"),a(587,"br"),t()()(),o(588,"td",27)(589,"code",34),e(590,"boolean"),t()(),o(591,"td",29)(592,"p")(593,"code"),e(594,"false"),t()()(),o(595,"td",30)(596,"em")(597,"strong"),e(598,"(opcional)"),t()(),o(599,"p"),e(600,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),o(601,"blockquote")(602,"p"),e(603,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),o(604,"ul")(605,"li"),e(606,"O campo conter "),o(607,"code"),e(608,"p-required"),t(),e(609,";"),t(),o(610,"li"),e(611,"N\xE3o possuir "),o(612,"code"),e(613,"p-help"),t(),e(614," e/ou "),o(615,"code"),e(616,"p-label"),t(),e(617,"."),t()()()(),o(618,"tr",22)(619,"td",23)(620,"div",31)(621,"span",32),e(622," p-options"),a(623,"br"),t()()(),o(624,"td",27)(625,"code",36),e(626,"PoRadioGroupOption[]"),t()(),o(627,"td",29),e(628,"-"),t(),o(629,"td",30)(630,"p"),e(631,`Lista de op\xE7\xF5es que ser\xE3o exibidas.
Nesta propriedade deve ser definido um array de objetos que implementam a interface PoRadioGroupOption.`),t()()(),o(632,"tr",22)(633,"td",23)(634,"div",31)(635,"span",32),e(636," p-helper"),a(637,"br"),t()()(),o(638,"td",27)(639,"code",37),e(640,"PoHelperOptions "),t(),o(641,"code",33),e(642," string"),t()(),o(643,"td",29),e(644,"-"),t(),o(645,"td",30)(646,"em")(647,"strong"),e(648,"(opcional)"),t()(),o(649,"p"),e(650,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label."),t(),o(651,"blockquote")(652,"p"),e(653,"Caso o "),o(654,"code"),e(655,"p-label"),t(),e(656,` n\xE3o esteja definido, o componente po-helper n\xE3o ser\xE1 exibido.
Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional (`),o(657,"code"),e(658,"p-additional-help-tooltip"),t(),e(659," e "),o(660,"code"),e(661,"p-additional-help"),t(),e(662,") ser\xE1 ignorado."),t()()()(),o(663,"tr",22)(664,"td",23)(665,"div",31)(666,"span",32),e(667," p-required"),a(668,"br"),t()()(),o(669,"td",27)(670,"code",34),e(671,"boolean"),t()(),o(672,"td",29)(673,"p")(674,"code"),e(675,"false"),t()()(),o(676,"td",30)(677,"em")(678,"strong"),e(679,"(opcional)"),t()(),o(680,"p"),e(681,"Define que o campo ser\xE1 obrigat\xF3rio."),t()()(),o(682,"tr",22)(683,"td",23)(684,"div",31)(685,"span",32),e(686," p-show-required"),a(687,"br"),t()()(),o(688,"td",27)(689,"code",34),e(690,"boolean"),t()(),o(691,"td",29),e(692,"-"),t(),o(693,"td",30)(694,"p"),e(695,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),o(696,"blockquote")(697,"p"),e(698,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),o(699,"ul")(700,"li"),e(701,"N\xE3o possuir "),o(702,"code"),e(703,"p-help"),t(),e(704," e/ou "),o(705,"code"),e(706,"p-label"),t(),e(707,"."),t()()()(),o(708,"tr",22)(709,"td",23)(710,"div",31)(711,"span",32),e(712," p-size"),a(713,"br"),t()()(),o(714,"td",27)(715,"code",33),e(716,"string"),t()(),o(717,"td",29)(718,"p")(719,"code"),e(720,"medium"),t()()(),o(721,"td",30)(722,"em")(723,"strong"),e(724,"(opcional)"),t()(),o(725,"p"),e(726,"Define o tamanho dos radios do componente:"),t(),o(727,"ul")(728,"li")(729,"code"),e(730,"small"),t(),e(731,": 16x16 (dispon\xEDvel apenas para acessibilidade AA)."),t(),o(732,"li")(733,"code"),e(734,"medium"),t(),e(735,": 24x24."),t()(),o(736,"blockquote")(737,"p"),e(738,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),o(739,"code"),e(740,"medium"),t(),e(741,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),o(742,"a",38),e(743,"po-theme"),t(),e(744,"."),t()()()()(),o(745,"h3",18),e(746,"M\xE9todos"),t(),o(747,"table",39)(748,"tr",22)(749,"th",40)(750,"div",31)(751,"h4")(752,"span",32),e(753," focus "),t()()()()(),o(754,"tr",30)(755,"td",30)(756,"p"),e(757,"Fun\xE7\xE3o que atribui foco ao componente."),t(),o(758,"p"),e(759,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),o(760,"pre")(761,"code"),e(762,`import { PoRadioGroupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoRadioGroupComponent, { static: true }) radio: PoRadioGroupComponent;

focusRadio() {
  this.radio.focus();
}
`),t()()()()(),a(763,"br"),o(764,"table",39)(765,"tr",22)(766,"th",40)(767,"div",31)(768,"h4")(769,"span",32),e(770," showAdditionalHelp "),t()()()()(),o(771,"tr",30)(772,"td",30)(773,"p"),e(774,"M\xE9todo que exibe "),o(775,"code"),e(776,"p-additionalHelpTooltip"),t(),e(777," ou executa a a\xE7\xE3o definida em "),o(778,"code"),e(779,"p-additionalHelp"),t(),e(780,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),o(781,"code"),e(782,"p-keydown"),t(),e(783,"."),t(),o(784,"blockquote")(785,"p"),e(786,"Exibe ou oculta o conte\xFAdo do componente "),o(787,"code"),e(788,"po-helper"),t(),e(789," quando o componente estiver com foco e com label vis\xEDvel."),t()(),o(790,"pre")(791,"code"),e(792,`<po-radio-group
 #radioGroup
 ...
 p-additional-help-tooltip="Mensagem de ajuda complementar"
 (p-keydown)="onKeyDown($event, radioGroup)"
></po-radio-group>
`),t()(),o(793,"pre")(794,"code"),e(795,`// Exemplo com p-label e p-helper
<po-radio-group
 #radioGroup
 ...
 p-label="Label do radioGroup"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, radioGroup)"
></po-radio-group>
`),t()(),o(796,"pre")(797,"code"),e(798,`...
onKeyDown(event: KeyboardEvent, inp: PoRadioGroupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),a(799,"br"),o(800,"h3"),e(801,"Interfaces"),t(),o(802,"h4",41)(803,"code",5),e(804,"PoRadioGroupOption"),t()(),o(805,"div",2)(806,"p"),e(807,"Interface para as a\xE7\xF5es do componente po-radio-group."),t()(),o(808,"h4",18),e(809,"Propriedades"),t(),o(810,"table",19)(811,"tr",20)(812,"th",21),e(813,"Nome"),t(),o(814,"th",21),e(815,"Tipo"),t(),o(816,"th",21),e(817,"Descri\xE7\xE3o"),t()(),o(818,"tr",22)(819,"td",23)(820,"div",31)(821,"span",32),e(822," disabled"),a(823,"br"),t()()(),o(824,"td",27)(825,"code",34),e(826,"boolean"),t()(),o(827,"td",30)(828,"em")(829,"strong"),e(830,"(opcional)"),t()(),o(831,"p"),e(832,"Desabilita o radio."),t()()(),o(833,"tr",22)(834,"td",23)(835,"div",31)(836,"span",32),e(837," label"),a(838,"br"),t()()(),o(839,"td",27)(840,"code",33),e(841,"string"),t()(),o(842,"td",30)(843,"p"),e(844,"Texto do radio."),t()()(),o(845,"tr",22)(846,"td",23)(847,"div",31)(848,"span",32),e(849," value"),a(850,"br"),t()()(),o(851,"td",27)(852,"code",33),e(853,"string "),t(),o(854,"code",35),e(855," number"),t()(),o(856,"td",30)(857,"p"),e(858,"Valor do radio."),t()()()()())},dependencies:[w],encapsulation:2})}return i})();var he=(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||i)(z(Z),z($))};static \u0275cmp=E({type:i,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Radio Group",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,n){r&1&&(o(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),g("p-click",function(){return n.changeTab("doc")}),a(3,"sample-po-radio-group-doc"),t(),o(4,"po-tab",3),g("p-click",function(){return n.changeTab("web")}),a(5,"sample-po-radio-group-basic-view")(6,"sample-po-radio-group-labs-view")(7,"sample-po-radio-group-translator-view")(8,"sample-po-radio-group-translator-reactive-form-view"),t()()()),r&2&&(s("p-actions",n.actions),p(2),s("p-active",n.activeTab==="doc"),p(2),s("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[ae,x,C,pe,se,ce,Ee,be],encapsulation:2})}return i})();var Ve=[{path:"",component:he}],Se=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275mod=q({type:i});static \u0275inj=k({imports:[j.forChild(Ve),j]})}return i})();var ct=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275mod=q({type:i});static \u0275inj=k({imports:[le,Se]})}return i})();export{ct as DocPoRadioGroupModule};
