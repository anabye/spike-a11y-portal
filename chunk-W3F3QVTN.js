import{o as w,p as le}from"./chunk-ZC2HZG7B.js";import{Ab as C,Fa as O,O as oe,Q as M,Sa as N,Xa as ie,a as ee,nb as ae,ra as ne,v as te,zb as v}from"./chunk-TPH26USO.js";import{$c as j,Aa as s,Da as y,Dc as B,Fb as T,Gc as G,Hc as F,Ic as A,Jc as W,Kc as L,La as o,Ma as t,N as k,Na as a,Nc as J,Oc as X,Q as K,Ra as V,Sa as g,Sc as Y,U as u,V as c,Xc as Z,Zc as $,bb as D,cb as e,eb as _,gb as h,hb as S,ib as f,ja as p,ka as H,nb as I,ob as P,pb as Q,qa as b,ra as q}from"./chunk-CBLD3XJL.js";var xe=()=>({label:"Option 1",value:"1"}),ve=()=>({label:"Option 2",value:"2"}),Ce=(i,fe)=>[i,fe],re=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275cmp=b({type:i,selectors:[["sample-po-radio-group-basic"]],standalone:!1,decls:1,vars:6,consts:[["name","radioGroupBasic","p-label","PO Radio Group",3,"p-options"]],template:function(r,n){r&1&&a(0,"po-radio-group",0),r&2&&s("p-options",Q(3,Ce,I(1,xe),I(2,ve)))},dependencies:[M],encapsulation:2})}return i})();var ye=i=>({"docs-sample-code-tabs":i}),pe=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=b({type:i,selectors:[["sample-po-radio-group-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Radio Group Basic"),t(),o(4,"a",2),g("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-radio-group-basic/sample-po-radio-group-basic.component.html"),t(),o(13,"pre",7),e(14,`<po-radio-group
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
`),t()()()()(),o(21,"div",10),a(22,"sample-po-radio-group-basic"),t(),a(23,"hr")),r&2&&(p(5),y("po-icon "+n.sampleCodeButtonIcon),p(),_(" ",n.sampleCodeButtonLabel,""),p(),s("ngClass",P(4,ye,n.hideSampleCodeTabs)))},dependencies:[T,w,v,C,re],encapsulation:2})}return i})();var me=(()=>{class i{helperText;columns;event;help;label;option;options;properties;radioGroup;fieldErrorMessage;size;columnOptions=[{label:"1 column",value:1},{label:"2 columns",value:2},{label:"3 columns",value:3},{label:"4 columns",value:4}];propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"}];sizesOptions=[{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];ngOnInit(){this.restore()}addOption(){this.options.push(this.option),this.option=this.getNewOption()}changeEvent(d){this.event=d}restore(){this.helperText="",this.event="",this.radioGroup=void 0,this.properties=[],this.fieldErrorMessage="",this.size="medium",this.option=this.getNewOption(),this.options=[]}getNewOption(){return{label:void 0,value:void 0}}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=b({type:i,selectors:[["sample-po-radio-group-labs"]],standalone:!1,decls:26,vars:30,consts:[["optionForm","ngForm"],["propertiesForm","ngForm"],["name","radioGroupLabs",3,"ngModelChange","p-change","p-keydown","ngModel","p-helper","p-columns","p-disabled","p-help","p-label","p-optional","p-options","p-required","p-field-error-message","p-show-required","p-size","p-error-limit","p-label-text-wrap"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","optionLabel","p-label","Option Label","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","optionValue","p-label","Option Value","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","optionDisabled","p-label","Option Disabled",1,"po-lg-4",3,"ngModelChange","ngModel"],["p-label","Add Option",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","columns","p-columns","4","p-label","Columns",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"click"]],template:function(r,n){if(r&1){let m=V();o(0,"po-radio-group",2),f("ngModelChange",function(l){return u(m),S(n.radioGroup,l)||(n.radioGroup=l),c(l)}),g("p-change",function(){return u(m),c(n.changeEvent("p-change"))})("p-keydown",function(){return u(m),c(n.changeEvent("p-keydown"))}),t(),a(1,"po-divider"),o(2,"div",3),a(3,"po-info",4)(4,"po-info",5),t(),a(5,"po-divider"),o(6,"form",null,0)(8,"div",3)(9,"po-input",6),f("ngModelChange",function(l){return u(m),S(n.option.label,l)||(n.option.label=l),c(l)}),t(),o(10,"po-input",7),f("ngModelChange",function(l){return u(m),S(n.option.value,l)||(n.option.value=l),c(l)}),t(),o(11,"po-switch",8),f("ngModelChange",function(l){return u(m),S(n.option.disabled,l)||(n.option.disabled=l),c(l)}),t()(),o(12,"div",3)(13,"po-button",9),g("p-click",function(){u(m);let l=D(7);return n.addOption(),c(l.reset())}),t()()(),a(14,"po-divider"),o(15,"form",null,1)(17,"po-input",10),f("ngModelChange",function(l){return u(m),S(n.label,l)||(n.label=l),c(l)}),t(),o(18,"po-input",11),f("ngModelChange",function(l){return u(m),S(n.help,l)||(n.help=l),c(l)}),t(),o(19,"po-input",12),f("ngModelChange",function(l){return u(m),S(n.helperText,l)||(n.helperText=l),c(l)}),t(),o(20,"po-input",13),f("ngModelChange",function(l){return u(m),S(n.fieldErrorMessage,l)||(n.fieldErrorMessage=l),c(l)}),t(),o(21,"po-radio-group",14),f("ngModelChange",function(l){return u(m),S(n.columns,l)||(n.columns=l),c(l)}),t(),o(22,"po-checkbox-group",15),f("ngModelChange",function(l){return u(m),S(n.properties,l)||(n.properties=l),c(l)}),t(),o(23,"po-radio-group",16),f("ngModelChange",function(l){return u(m),S(n.size,l)||(n.size=l),c(l)}),t(),o(24,"div",3)(25,"po-button",17),g("click",function(){return u(m),D(16).reset(),c(n.restore())}),t()()()}if(r&2){let m=D(7);h("ngModel",n.radioGroup),s("p-helper",n.helperText)("p-columns",n.columns)("p-disabled",n.properties.includes("disabled"))("p-help",n.help)("p-label",n.label)("p-optional",n.properties.includes("optional"))("p-options",n.options)("p-required",n.properties.includes("required"))("p-field-error-message",n.fieldErrorMessage)("p-show-required",n.properties.includes("showRequired"))("p-size",n.size)("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit"))("p-label-text-wrap",n.properties==null?null:n.properties.includes("labelTextWrap")),p(3),s("p-value",n.radioGroup),p(),s("p-value",n.event),p(5),h("ngModel",n.option.label),p(),h("ngModel",n.option.value),p(),h("ngModel",n.option.disabled),p(2),s("p-disabled",m.invalid),p(4),h("ngModel",n.label),p(),h("ngModel",n.help),p(),h("ngModel",n.helperText),p(),h("ngModel",n.fieldErrorMessage),p(),h("ngModel",n.columns),s("p-options",n.columnOptions),p(),h("ngModel",n.properties),s("p-options",n.propertiesOptions),p(),h("ngModel",n.size),s("p-options",n.sizesOptions)}},dependencies:[L,G,F,W,A,te,ee,oe,M,O,ne,ie],encapsulation:2})}return i})();var Te=i=>({"docs-sample-code-tabs":i}),se=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=b({type:i,selectors:[["sample-po-radio-group-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Radio Group Labs"),t(),o(4,"a",2),g("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-radio-group-labs/sample-po-radio-group-labs.component.html"),t(),o(13,"pre",7),e(14,`<po-radio-group
  name="radioGroupLabs"
  [(ngModel)]="radioGroup"
  [p-helper]="helperText"
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

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

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
  helperText: string;
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
    this.helperText = '';
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
`),t()()()()(),o(21,"div",10),a(22,"sample-po-radio-group-labs"),t(),a(23,"hr")),r&2&&(p(5),y("po-icon "+n.sampleCodeButtonIcon),p(),_(" ",n.sampleCodeButtonLabel,""),p(),s("ngClass",P(4,Te,n.hideSampleCodeTabs)))},dependencies:[T,w,v,C,me],encapsulation:2})}return i})();var ue=(()=>{class i{language="es";original="";translated="";languageOptions=[{label:"Spanish",value:"es"},{label:"English",value:"en"}];optionsList=[{value:"1",label:"Ol\xE1"},{value:"2",label:"Tchau"},{value:"3",label:"Estrangeiro"},{value:"4",label:"Alinhamento"},{value:"5",label:"Vis\xE3o"},{value:"6",label:"Livro"}];wordsOptions=[{id:"1",en:"Hello",es:"Hola"},{id:"2",en:"Bye",es:"Hasta luego"},{id:"3",en:"Foreign",es:"Extranjero"},{id:"4",en:"Alignment",es:"Alineaci\xF3n"},{id:"5",en:"Vision",es:"Vista"},{id:"6",en:"Book",es:"Libro"}];changeLanguage(d){let r=this.wordsOptions.find(n=>n.id===this.original);r&&(this.translated=r[d||this.language])}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=b({type:i,selectors:[["sample-po-radio-group-translator"]],standalone:!1,decls:6,vars:5,consts:[["f","ngForm"],[1,"po-row"],["name","language","p-label","Select a Language","p-required","",1,"po-lg-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","original","p-label","Original Text (Portuguese)","p-required","",1,"po-lg-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","translated","p-label","Translated Text","p-readonly","","p-required","",1,"po-lg-4",3,"ngModelChange","ngModel"]],template:function(r,n){if(r&1){let m=V();o(0,"form",null,0)(2,"div",1)(3,"po-radio-group",2),f("ngModelChange",function(l){return u(m),S(n.language,l)||(n.language=l),c(l)}),g("p-change",function(l){return u(m),c(n.changeLanguage(l))}),t(),o(4,"po-select",3),f("ngModelChange",function(l){return u(m),S(n.original,l)||(n.original=l),c(l)}),g("p-change",function(l){return u(m),c(n.changeLanguage(l))}),t(),o(5,"po-input",4),f("ngModelChange",function(l){return u(m),S(n.translated,l)||(n.translated=l),c(l)}),t()()()}r&2&&(p(3),h("ngModel",n.language),s("p-options",n.languageOptions),p(),h("ngModel",n.original),s("p-options",n.optionsList),p(),h("ngModel",n.translated))},dependencies:[L,G,F,W,A,M,O,N],encapsulation:2})}return i})();var Ge=i=>({"docs-sample-code-tabs":i}),ce=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=b({type:i,selectors:[["sample-po-radio-group-translator-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Radio Group - Translator"),t(),o(4,"a",2),g("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-radio-group-translator/sample-po-radio-group-translator.component.html"),t(),o(13,"pre",7),e(14,`<form #f="ngForm">
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
`),t()()()()(),o(21,"div",10),a(22,"sample-po-radio-group-translator"),t(),a(23,"hr")),r&2&&(p(5),y("po-icon "+n.sampleCodeButtonIcon),p(),_(" ",n.sampleCodeButtonLabel,""),p(),s("ngClass",P(4,Ge,n.hideSampleCodeTabs)))},dependencies:[T,w,v,C,ue],encapsulation:2})}return i})();var ge=(()=>{class i{formBuilder=K(Y);translatorForm;languageOptions=[{label:"Spanish",value:"es"},{label:"English",value:"en"}];optionsList=[{value:"1",label:"Ol\xE1"},{value:"2",label:"Tchau"},{value:"3",label:"Estrangeiro"},{value:"4",label:"Alinhamento"},{value:"5",label:"Vis\xE3o"},{value:"6",label:"Livro"}];wordsOptions=[{id:"1",en:"Hello",es:"Hola"},{id:"2",en:"Bye",es:"Hasta luego"},{id:"3",en:"Foreign",es:"Extranjero"},{id:"4",en:"Alignment",es:"Alineaci\xF3n"},{id:"5",en:"Vision",es:"Vista"},{id:"6",en:"Book",es:"Libro"}];ngOnInit(){this.translatorForm=this.formBuilder.group({language:["es",B.required],original:[void 0,B.required],translated:[void 0,B.required]})}changeLanguage(){let d=this.translatorForm.value.language,r=this.translatorForm.value.original,n=this.wordsOptions.find(m=>m.id===r);n&&this.translatorForm.patchValue({translated:n[d]})}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=b({type:i,selectors:[["sample-po-radio-group-translator-reactive-form"]],standalone:!1,decls:5,vars:3,consts:[[3,"formGroup"],[1,"po-row"],["name","language","formControlName","language","p-label","Select a Language","p-required","",1,"po-lg-4",3,"p-change","p-options"],["name","original","formControlName","original","p-label","Original Text (Portuguese)","p-required","",1,"po-lg-4",3,"p-change","p-options"],["name","translated","formControlName","translated","p-label","Translated Text","p-readonly","","p-required","",1,"po-lg-4"]],template:function(r,n){r&1&&(o(0,"form",0)(1,"div",1)(2,"po-radio-group",2),g("p-change",function(){return n.changeLanguage()}),t(),o(3,"po-select",3),g("p-change",function(){return n.changeLanguage()}),t(),a(4,"po-input",4),t()()),r&2&&(s("formGroup",n.translatorForm),p(2),s("p-options",n.languageOptions),p(),s("p-options",n.optionsList))},dependencies:[L,G,F,J,X,M,O,N],encapsulation:2})}return i})();var Oe=i=>({"docs-sample-code-tabs":i}),be=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=b({type:i,selectors:[["sample-po-radio-group-translator-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Radio Group - Translator Reactive Form"),t(),o(4,"a",2),g("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-radio-group-translator-reactive-form/sample-po-radio-group-translator-reactive-form.component.html"),t(),o(13,"pre",7),e(14,`<form [formGroup]="translatorForm">
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
`),t()()()()(),o(21,"div",10),a(22,"sample-po-radio-group-translator-reactive-form"),t(),a(23,"hr")),r&2&&(p(5),y("po-icon "+n.sampleCodeButtonIcon),p(),_(" ",n.sampleCodeButtonLabel,""),p(),s("ngClass",P(4,Oe,n.hideSampleCodeTabs)))},dependencies:[T,w,v,C,ge],encapsulation:2})}return i})();var Ee=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275cmp=b({type:i,selectors:[["sample-po-radio-group-doc"]],standalone:!1,decls:862,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-combo"],["href","/documentation/po-select"],["href","/documentation/po-checkbox-group"],["href","https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"],["href","https://www.w3.org/WAI/WCAG21/Understanding/use-of-color"],["href","https://www.w3.org/TR/wai-aria-practices-1.1/#keyboard-interaction-3"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://doc.animaliads.io/docs/components/radio"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoRadioGroupOption[]"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"]],template:function(r,n){r&1&&(o(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),o(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
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
`),t()(),o(218,"h4",18),e(219,"Propriedades"),t(),o(220,"table",19)(221,"tr",20)(222,"th",21),e(223,"Nome"),t(),o(224,"th",21),e(225,"Tipo"),t(),o(226,"th",21),e(227,"Padr\xE3o"),t(),o(228,"th",21),e(229,"Descri\xE7\xE3o"),t()(),o(230,"tr",22)(231,"td",23)(232,"div",24)(233,"span",25),e(234," (p-additional-help)"),a(235,"br"),t()(),o(236,"div",26),e(237,"Deprecated"),t()(),o(238,"td",27)(239,"code",28),e(240,"EventEmitter"),t()(),o(241,"td",29),e(242,"-"),t(),o(243,"td",30)(244,"em")(245,"strong"),e(246,"(opcional)"),t()(),o(247,"p"),e(248,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),t(),o(249,"blockquote")(250,"p"),e(251,"Essa propriedade est\xE1 "),o(252,"strong"),e(253,"depreciada"),t(),e(254," e ser\xE1 removida na vers\xE3o "),o(255,"code"),e(256,"23.x.x"),t(),e(257,". Recomendamos utilizar a propriedade "),o(258,"code"),e(259,"p-helper"),t(),e(260," que oferece mais recursos e flexibilidade."),t()()()(),o(261,"tr",22)(262,"td",23)(263,"div",31)(264,"span",32),e(265," p-additional-help-tooltip"),a(266,"br"),t()(),o(267,"div",26),e(268,"Deprecated"),t()(),o(269,"td",27)(270,"code",33),e(271,"string"),t()(),o(272,"td",29),e(273,"-"),t(),o(274,"td",30)(275,"em")(276,"strong"),e(277,"(opcional)"),t()(),o(278,"p"),e(279,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),o(280,"code"),e(281,"po-helper"),t(),e(282,`.
`),o(283,"strong"),e(284,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),o(285,"blockquote")(286,"p"),e(287,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),o(288,"blockquote")(289,"p"),e(290,"Essa propriedade est\xE1 "),o(291,"strong"),e(292,"depreciada"),t(),e(293," e ser\xE1 removida na vers\xE3o "),o(294,"code"),e(295,"23.x.x"),t(),e(296,". Recomendamos utilizar a propriedade "),o(297,"code"),e(298,"p-helper"),t(),e(299," que oferece mais recursos e flexibilidade."),t()()()(),o(300,"tr",22)(301,"td",23)(302,"div",31)(303,"span",32),e(304," p-append-in-body"),a(305,"br"),t()()(),o(306,"td",27)(307,"code",34),e(308,"boolean"),t()(),o(309,"td",29)(310,"p")(311,"code"),e(312,"false"),t()()(),o(313,"td",30)(314,"em")(315,"strong"),e(316,"(opcional)"),t()(),o(317,"p"),e(318,"Define que o popover ("),o(319,"code"),e(320,"p-helper"),t(),e(321," e/ou "),o(322,"code"),e(323,"p-error-limit"),t(),e(324,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),o(325,"blockquote")(326,"p"),e(327,"Quando utilizado com "),o(328,"code"),e(329,"p-helper"),t(),e(330,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),t()()()(),o(331,"tr",22)(332,"td",23)(333,"div",31)(334,"span",32),e(335," p-auto-focus"),a(336,"br"),t()()(),o(337,"td",27)(338,"code",34),e(339,"boolean"),t()(),o(340,"td",29)(341,"p")(342,"code"),e(343,"false"),t()()(),o(344,"td",30)(345,"em")(346,"strong"),e(347,"(opcional)"),t()(),o(348,"p"),e(349,"Aplica foco no elemento ao ser iniciado."),t(),o(350,"blockquote")(351,"p"),e(352,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),o(353,"tr",22)(354,"td",23)(355,"div",24)(356,"span",25),e(357," (p-change)"),a(358,"br"),t()()(),o(359,"td",27)(360,"code",28),e(361,"EventEmitter"),t()(),o(362,"td",29),e(363,"-"),t(),o(364,"td",30)(365,"em")(366,"strong"),e(367,"(opcional)"),t()(),o(368,"p"),e(369,"Evento ao alterar valor do campo."),t()()(),o(370,"tr",22)(371,"td",23)(372,"div",31)(373,"span",32),e(374," p-columns"),a(375,"br"),t()()(),o(376,"td",27)(377,"code",35),e(378,"number"),t()(),o(379,"td",29)(380,"p")(381,"code"),e(382,"2"),t()()(),o(383,"td",30)(384,"em")(385,"strong"),e(386,"(opcional)"),t()(),o(387,"p"),e(388,"Define a quantidade de colunas para exibi\xE7\xE3o das op\xE7\xF5es."),t(),o(389,"p")(390,"strong"),e(391,"Considera\xE7\xF5es:"),t()(),o(392,"ul")(393,"li"),e(394,"\xC9 poss\xEDvel exibir as op\xE7\xF5es entre "),o(395,"code"),e(396,"1"),t(),e(397," e "),o(398,"code"),e(399,"4"),t(),e(400," colunas."),t(),o(401,"li"),e(402,"O n\xFAmero m\xE1ximo de colunas \xE9 invari\xE1vel nas seguintes resolu\xE7\xF5es:"),o(403,"ul")(404,"li")(405,"code"),e(406,"sm"),t(),e(407,": "),o(408,"code"),e(409,"1"),t()(),o(410,"li")(411,"code"),e(412,"md"),t(),e(413,": "),o(414,"code"),e(415,"2"),t()()()()()()(),o(416,"tr",22)(417,"td",23)(418,"div",31)(419,"span",32),e(420," p-disabled"),a(421,"br"),t()()(),o(422,"td",27)(423,"code",34),e(424,"boolean"),t()(),o(425,"td",29)(426,"p")(427,"code"),e(428,"false"),t()()(),o(429,"td",30)(430,"em")(431,"strong"),e(432,"(opcional)"),t()(),o(433,"p"),e(434,"Indica que o campo ser\xE1 desabilitado."),t()()(),o(435,"tr",22)(436,"td",23)(437,"div",31)(438,"span",32),e(439," p-error-limit"),a(440,"br"),t()()(),o(441,"td",27)(442,"code",34),e(443,"boolean"),t()(),o(444,"td",29)(445,"p")(446,"code"),e(447,"false"),t()()(),o(448,"td",30)(449,"em")(450,"strong"),e(451,"(opcional)"),t()(),o(452,"p"),e(453,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),o(454,"blockquote")(455,"p"),e(456,"Caso essa propriedade seja definida como "),o(457,"code"),e(458,"true"),t(),e(459,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),o(460,"tr",22)(461,"td",23)(462,"div",31)(463,"span",32),e(464," p-field-error-message"),a(465,"br"),t()()(),o(466,"td",27)(467,"code",33),e(468,"string"),t()(),o(469,"td",29),e(470,"-"),t(),o(471,"td",30)(472,"em")(473,"strong"),e(474,"(opcional)"),t()(),o(475,"p"),e(476,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),t(),o(477,"blockquote")(478,"p"),e(479,"Necess\xE1rio que a propriedade "),o(480,"code"),e(481,"p-required"),t(),e(482," esteja habilitada."),t()()()(),o(483,"tr",22)(484,"td",23)(485,"div",31)(486,"span",32),e(487," p-help"),a(488,"br"),t()()(),o(489,"td",27)(490,"code",33),e(491,"string"),t()(),o(492,"td",29),e(493,"-"),t(),o(494,"td",30)(495,"em")(496,"strong"),e(497,"(opcional)"),t()(),o(498,"p"),e(499,"Texto de apoio do campo."),t()()(),o(500,"tr",22)(501,"td",23)(502,"div",24)(503,"span",25),e(504," (p-keydown)"),a(505,"br"),t()()(),o(506,"td",27)(507,"code",28),e(508,"EventEmitter"),t()(),o(509,"td",29),e(510,"-"),t(),o(511,"td",30)(512,"em")(513,"strong"),e(514,"(opcional)"),t()(),o(515,"p"),e(516,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),o(517,"code"),e(518,"KeyboardEvent"),t(),e(519," com informa\xE7\xF5es sobre a tecla."),t()()(),o(520,"tr",22)(521,"td",23)(522,"div",31)(523,"span",32),e(524," p-label"),a(525,"br"),t()()(),o(526,"td",27)(527,"code",33),e(528,"string"),t()(),o(529,"td",29),e(530,"-"),t(),o(531,"td",30)(532,"em")(533,"strong"),e(534,"(opcional)"),t()(),o(535,"p"),e(536,"Label do campo."),t()()(),o(537,"tr",22)(538,"td",23)(539,"div",31)(540,"span",32),e(541," p-label-text-wrap"),a(542,"br"),t()()(),o(543,"td",27)(544,"code",34),e(545,"boolean"),t()(),o(546,"td",29)(547,"p")(548,"code"),e(549,"false"),t()()(),o(550,"td",30)(551,"em")(552,"strong"),e(553,"(opcional)"),t()(),o(554,"p"),e(555,"Habilita a quebra autom\xE1tica do texto da propriedade "),o(556,"code"),e(557,"p-label"),t(),e(558,". Quando "),o(559,"code"),e(560,"p-label-text-wrap"),t(),e(561,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),o(562,"tr",22)(563,"td",23)(564,"div",31)(565,"span",32),e(566," name"),a(567,"br"),t()()(),o(568,"td",27)(569,"code",33),e(570,"string"),t()(),o(571,"td",29),e(572,"-"),t(),o(573,"td",30)(574,"p"),e(575,"Nome das op\xE7\xF5es."),t()()(),o(576,"tr",22)(577,"td",23)(578,"div",31)(579,"span",32),e(580," p-optional"),a(581,"br"),t()()(),o(582,"td",27)(583,"code",34),e(584,"boolean"),t()(),o(585,"td",29)(586,"p")(587,"code"),e(588,"false"),t()()(),o(589,"td",30)(590,"em")(591,"strong"),e(592,"(opcional)"),t()(),o(593,"p"),e(594,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),o(595,"blockquote")(596,"p"),e(597,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),o(598,"ul")(599,"li"),e(600,"O campo conter "),o(601,"code"),e(602,"p-required"),t(),e(603,";"),t(),o(604,"li"),e(605,"N\xE3o possuir "),o(606,"code"),e(607,"p-help"),t(),e(608," e/ou "),o(609,"code"),e(610,"p-label"),t(),e(611,"."),t()()()(),o(612,"tr",22)(613,"td",23)(614,"div",31)(615,"span",32),e(616," p-options"),a(617,"br"),t()()(),o(618,"td",27)(619,"code",36),e(620,"PoRadioGroupOption[]"),t()(),o(621,"td",29),e(622,"-"),t(),o(623,"td",30)(624,"p"),e(625,`Lista de op\xE7\xF5es que ser\xE3o exibidas.
Nesta propriedade deve ser definido um array de objetos que implementam a interface PoRadioGroupOption.`),t()()(),o(626,"tr",22)(627,"td",23)(628,"div",31)(629,"span",32),e(630," p-helper"),a(631,"br"),t()()(),o(632,"td",27)(633,"code",37),e(634,"PoHelperOptions "),t(),o(635,"code",33),e(636," string"),t()(),o(637,"td",29),e(638,"-"),t(),o(639,"td",30)(640,"em")(641,"strong"),e(642,"(opcional)"),t()(),o(643,"p"),e(644,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),o(645,"code"),e(646,"p-label"),t(),e(647," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),o(648,"code"),e(649,"p-label"),t(),e(650,"."),t(),o(651,"blockquote")(652,"p"),e(653,"Para mais informa\xE7\xF5es acesse: "),o(654,"a",38),e(655,"https://po-ui.io/documentation/po-helper"),t(),e(656,"."),t()(),o(657,"blockquote")(658,"p"),e(659,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),o(660,"code"),e(661,"p-additional-help-tooltip"),t(),e(662," e "),o(663,"code"),e(664,"p-additional-help"),t(),e(665,") ser\xE1 ignorado."),t()()()(),o(666,"tr",22)(667,"td",23)(668,"div",31)(669,"span",32),e(670," p-required"),a(671,"br"),t()()(),o(672,"td",27)(673,"code",34),e(674,"boolean"),t()(),o(675,"td",29)(676,"p")(677,"code"),e(678,"false"),t()()(),o(679,"td",30)(680,"em")(681,"strong"),e(682,"(opcional)"),t()(),o(683,"p"),e(684,"Define que o campo ser\xE1 obrigat\xF3rio."),t()()(),o(685,"tr",22)(686,"td",23)(687,"div",31)(688,"span",32),e(689," p-show-required"),a(690,"br"),t()()(),o(691,"td",27)(692,"code",34),e(693,"boolean"),t()(),o(694,"td",29),e(695,"-"),t(),o(696,"td",30)(697,"p"),e(698,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),o(699,"blockquote")(700,"p"),e(701,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),o(702,"ul")(703,"li"),e(704,"N\xE3o possuir "),o(705,"code"),e(706,"p-help"),t(),e(707," e/ou "),o(708,"code"),e(709,"p-label"),t(),e(710,"."),t()()()(),o(711,"tr",22)(712,"td",23)(713,"div",31)(714,"span",32),e(715," p-size"),a(716,"br"),t()()(),o(717,"td",27)(718,"code",33),e(719,"string"),t()(),o(720,"td",29)(721,"p")(722,"code"),e(723,"medium"),t()()(),o(724,"td",30)(725,"em")(726,"strong"),e(727,"(opcional)"),t()(),o(728,"p"),e(729,"Define o tamanho dos radios do componente:"),t(),o(730,"ul")(731,"li")(732,"code"),e(733,"small"),t(),e(734,": 16x16 (dispon\xEDvel apenas para acessibilidade AA)."),t(),o(735,"li")(736,"code"),e(737,"medium"),t(),e(738,": 24x24."),t()(),o(739,"blockquote")(740,"p"),e(741,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),o(742,"code"),e(743,"medium"),t(),e(744,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),o(745,"a",39),e(746,"po-theme"),t(),e(747,"."),t()()()()(),o(748,"h3",18),e(749,"M\xE9todos"),t(),o(750,"table",40)(751,"tr",22)(752,"th",41)(753,"div",31)(754,"h4")(755,"span",32),e(756," focus "),t()()()()(),o(757,"tr",30)(758,"td",30)(759,"p"),e(760,"Fun\xE7\xE3o que atribui foco ao componente."),t(),o(761,"p"),e(762,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),o(763,"pre")(764,"code"),e(765,`import { PoRadioGroupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoRadioGroupComponent, { static: true }) radio: PoRadioGroupComponent;

focusRadio() {
  this.radio.focus();
}
`),t()()()()(),a(766,"br"),o(767,"table",40)(768,"tr",22)(769,"th",41)(770,"div",31)(771,"h4")(772,"span",32),e(773," showAdditionalHelp "),t()()()()(),o(774,"tr",30)(775,"td",30)(776,"p"),e(777,"M\xE9todo que exibe "),o(778,"code"),e(779,"p-helper"),t(),e(780," ou executa a a\xE7\xE3o definida em "),o(781,"code"),e(782,"p-helper{eventOnClick}"),t(),e(783," ou em "),o(784,"code"),e(785,"p-additionalHelp"),t(),e(786,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),o(787,"code"),e(788,"p-keydown"),t(),e(789,"."),t(),o(790,"blockquote")(791,"p"),e(792,"Exibe ou oculta o conte\xFAdo do componente "),o(793,"code"),e(794,"po-helper"),t(),e(795," quando o componente estiver com foco."),t()(),o(796,"pre")(797,"code"),e(798,`// Exemplo com p-label e p-helper
<po-radio-group
 #radioGroup
 ...
 p-label="Label do radioGroup"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, radioGroup)"
></po-radio-group>
`),t()(),o(799,"pre")(800,"code"),e(801,`...
onKeyDown(event: KeyboardEvent, inp: PoRadioGroupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),a(802,"br"),o(803,"h3"),e(804,"Interfaces"),t(),o(805,"h4",42)(806,"code",5),e(807,"PoRadioGroupOption"),t()(),o(808,"div",2)(809,"p"),e(810,"Interface para as a\xE7\xF5es do componente po-radio-group."),t()(),o(811,"h4",18),e(812,"Propriedades"),t(),o(813,"table",19)(814,"tr",20)(815,"th",21),e(816,"Nome"),t(),o(817,"th",21),e(818,"Tipo"),t(),o(819,"th",21),e(820,"Descri\xE7\xE3o"),t()(),o(821,"tr",22)(822,"td",23)(823,"div",31)(824,"span",32),e(825," disabled"),a(826,"br"),t()()(),o(827,"td",27)(828,"code",34),e(829,"boolean"),t()(),o(830,"td",30)(831,"em")(832,"strong"),e(833,"(opcional)"),t()(),o(834,"p"),e(835,"Desabilita o radio."),t()()(),o(836,"tr",22)(837,"td",23)(838,"div",31)(839,"span",32),e(840," label"),a(841,"br"),t()()(),o(842,"td",27)(843,"code",33),e(844,"string"),t()(),o(845,"td",30)(846,"p"),e(847,"Texto do radio."),t()()(),o(848,"tr",22)(849,"td",23)(850,"div",31)(851,"span",32),e(852," value"),a(853,"br"),t()()(),o(854,"td",27)(855,"code",33),e(856,"string "),t(),o(857,"code",35),e(858," number"),t()(),o(859,"td",30)(860,"p"),e(861,"Valor do radio."),t()()()()())},dependencies:[w],encapsulation:2})}return i})();var he=(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||i)(H(Z),H($))};static \u0275cmp=b({type:i,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Radio Group",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,n){r&1&&(o(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),g("p-click",function(){return n.changeTab("doc")}),a(3,"sample-po-radio-group-doc"),t(),o(4,"po-tab",3),g("p-click",function(){return n.changeTab("web")}),a(5,"sample-po-radio-group-basic-view")(6,"sample-po-radio-group-labs-view")(7,"sample-po-radio-group-translator-view")(8,"sample-po-radio-group-translator-reactive-form-view"),t()()()),r&2&&(s("p-actions",n.actions),p(2),s("p-active",n.activeTab==="doc"),p(2),s("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[ae,v,C,pe,se,ce,be,Ee],encapsulation:2})}return i})();var Ve=[{path:"",component:he}],Se=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275mod=q({type:i});static \u0275inj=k({imports:[j.forChild(Ve),j]})}return i})();var ct=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275mod=q({type:i});static \u0275inj=k({imports:[le,Se]})}return i})();export{ct as DocPoRadioGroupModule};
