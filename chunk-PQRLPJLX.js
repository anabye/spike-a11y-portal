import{o as w,p as me}from"./chunk-TFKSP2Z2.js";import{Ab as y,Ea as ae,Fa as F,Ma as R,O as ne,Q as ie,Qa as le,Sa as re,U as oe,Xa as O,a as N,nb as pe,v as A,zb as C}from"./chunk-3S4WNRBY.js";import{$a as U,$c as B,Aa as s,Da as P,Dc as S,Fb as k,Gc as V,Hc as L,Ic as Z,Jc as X,Kc as z,La as n,Ma as t,N as T,Na as o,Nc as J,Oc as Y,Q as j,Ra as D,Sa as g,Sc as $,U as c,V as u,Xc as ee,Zc as te,_a as G,ab as Q,bb as K,cb as e,eb as _,gb as x,hb as h,ib as v,ja as p,ka as W,ob as M,qa as b,ra as I}from"./chunk-CBLD3XJL.js";var de=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-input-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","input","p-label","PO Input"]],template:function(r,i){r&1&&o(0,"po-input",0)},dependencies:[F],encapsulation:2})}return a})();var fe=a=>({"docs-sample-code-tabs":a}),ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-input-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Input Basic"),t(),n(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-input-basic/sample-po-input-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-input name="input" p-label="PO Input"> </po-input>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-input-basic/sample-po-input-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-input-basic',
  templateUrl: './sample-po-input-basic.component.html',
  standalone: false
})
export class SamplePoInputBasicComponent {}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-input-basic"),t(),o(23,"hr")),r&2&&(p(5),P("po-icon "+i.sampleCodeButtonIcon),p(),_(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",M(4,fe,i.hideSampleCodeTabs)))},dependencies:[k,w,C,y,de],encapsulation:2})}return a})();var ue=(()=>{class a{helperText;input;errorPattern;event;help;icon;label;mask;maxlength;minlength;pattern;placeholder;properties;size;iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"fa fa-calculator",label:"fa fa-calculator"}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"maskFormatModel",label:"Formatted Model"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"uppercase",label:"Upper Case"},{value:"showRequired",label:"Show Required"},{value:"maskNoLengthValidation",label:"Mask No Length Validation"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(d){this.event=d}restore(){this.helperText="",this.input=void 0,this.size="medium"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-input-labs"]],standalone:!1,decls:22,vars:42,consts:[["f","ngForm"],["name","input",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-helper","p-clean","p-disabled","p-error-pattern","p-help","p-icon","p-label","p-mask","p-mask-format-model","p-maxlength","p-minlength","p-no-autocomplete","p-optional","p-pattern","p-placeholder","p-required","p-required-field-error-message","p-readonly","p-upper-case","p-show-required","p-mask-no-length-validation","p-size","p-error-limit","p-label-text-wrap"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","mask","p-clean","","p-help","Ex.: Zip code: '99999-999'; License plate: '@@@-9999'","p-label","Mask",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","pattern","p-clean","","p-help","Ex.: '^(2[0-3]|[01][0-9]):?([0-5][0-9])$'","p-label","Pattern (Regex)",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","icon","p-clean","","p-label","Icon",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let m=D();n(0,"po-input",1),v("ngModelChange",function(l){return c(m),h(i.input,l)||(i.input=l),u(l)}),g("p-blur",function(){return c(m),u(i.changeEvent("p-blur"))})("p-change",function(){return c(m),u(i.changeEvent("p-change"))})("p-change-model",function(){return c(m),u(i.changeEvent("p-change-model"))})("p-enter",function(){return c(m),u(i.changeEvent("p-enter"))})("p-keydown",function(){return c(m),u(i.changeEvent("p-keydown"))}),t(),o(1,"po-divider"),n(2,"div",2),o(3,"po-info",3)(4,"po-info",4),t(),o(5,"po-divider"),n(6,"form",null,0)(8,"po-input",5),v("ngModelChange",function(l){return c(m),h(i.label,l)||(i.label=l),u(l)}),t(),n(9,"po-input",6),v("ngModelChange",function(l){return c(m),h(i.help,l)||(i.help=l),u(l)}),t(),n(10,"po-input",7),v("ngModelChange",function(l){return c(m),h(i.helperText,l)||(i.helperText=l),u(l)}),t(),n(11,"po-input",8),v("ngModelChange",function(l){return c(m),h(i.placeholder,l)||(i.placeholder=l),u(l)}),t(),n(12,"po-input",9),v("ngModelChange",function(l){return c(m),h(i.errorPattern,l)||(i.errorPattern=l),u(l)}),t(),n(13,"po-input",10),v("ngModelChange",function(l){return c(m),h(i.mask,l)||(i.mask=l),u(l)}),t(),n(14,"po-input",11),v("ngModelChange",function(l){return c(m),h(i.pattern,l)||(i.pattern=l),u(l)}),t(),n(15,"po-number",12),v("ngModelChange",function(l){return c(m),h(i.minlength,l)||(i.minlength=l),u(l)}),t(),n(16,"po-number",13),v("ngModelChange",function(l){return c(m),h(i.maxlength,l)||(i.maxlength=l),u(l)}),t(),n(17,"po-select",14),v("ngModelChange",function(l){return c(m),h(i.icon,l)||(i.icon=l),u(l)}),t(),n(18,"po-checkbox-group",15),v("ngModelChange",function(l){return c(m),h(i.properties,l)||(i.properties=l),u(l)}),t(),n(19,"po-radio-group",16),v("ngModelChange",function(l){return c(m),h(i.size,l)||(i.size=l),u(l)}),t(),n(20,"div",2)(21,"po-button",17),g("p-click",function(){return c(m),K(7).reset(),u(i.restore())}),t()()()}r&2&&(x("ngModel",i.input),s("p-helper",i.helperText)("p-clean",i.properties==null?null:i.properties.includes("clean"))("p-disabled",i.properties==null?null:i.properties.includes("disabled"))("p-error-pattern",i.errorPattern)("p-help",i.help)("p-icon",i.icon)("p-label",i.label)("p-mask",i.mask)("p-mask-format-model",i.properties==null?null:i.properties.includes("maskFormatModel"))("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties==null?null:i.properties.includes("optional"))("p-pattern",i.pattern)("p-placeholder",i.placeholder)("p-required",i.properties==null?null:i.properties.includes("required"))("p-required-field-error-message",i.properties==null?null:i.properties.includes("requiredFieldErrorMessage"))("p-readonly",i.properties==null?null:i.properties.includes("readonly"))("p-upper-case",i.properties==null?null:i.properties.includes("uppercase"))("p-show-required",i.properties==null?null:i.properties.includes("showRequired"))("p-mask-no-length-validation",i.properties==null?null:i.properties.includes("maskNoLengthValidation"))("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap")),p(3),s("p-value",i.input),p(),s("p-value",i.event),p(4),x("ngModel",i.label),p(),x("ngModel",i.help),p(),x("ngModel",i.helperText),p(),x("ngModel",i.placeholder),p(),x("ngModel",i.errorPattern),p(),x("ngModel",i.mask),p(),x("ngModel",i.pattern),p(),x("ngModel",i.minlength),p(),x("ngModel",i.maxlength),p(),x("ngModel",i.icon),s("p-options",i.iconOptions),p(),x("ngModel",i.properties),s("p-options",i.propertiesOptions),p(),x("ngModel",i.size),s("p-options",i.sizeOptions))},dependencies:[z,V,L,X,Z,A,N,ne,ie,F,R,re,O],encapsulation:2})}return a})();var Pe=a=>({"docs-sample-code-tabs":a}),Ee=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-input-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Input Labs"),t(),n(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-input-labs/sample-po-input-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-input
  name="input"
  [(ngModel)]="input"
  [p-helper]="helperText"
  [p-clean]="properties?.includes('clean')"
  [p-disabled]="properties?.includes('disabled')"
  [p-error-pattern]="errorPattern"
  [p-help]="help"
  [p-icon]="icon"
  [p-label]="label"
  [p-mask]="mask"
  [p-mask-format-model]="properties?.includes('maskFormatModel')"
  [p-maxlength]="maxlength"
  [p-minlength]="minlength"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties?.includes('optional')"
  [p-pattern]="pattern"
  [p-placeholder]="placeholder"
  [p-required]="properties?.includes('required')"
  [p-required-field-error-message]="properties?.includes('requiredFieldErrorMessage')"
  [p-readonly]="properties?.includes('readonly')"
  [p-upper-case]="properties?.includes('uppercase')"
  [p-show-required]="properties?.includes('showRequired')"
  [p-mask-no-length-validation]="properties?.includes('maskNoLengthValidation')"
  [p-size]="size"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-enter)="changeEvent('p-enter')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
>
</po-input>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="input"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input class="po-md-6" name="errorPattern" [(ngModel)]="errorPattern" p-clean p-label="Error Pattern"> </po-input>

  <po-input
    class="po-md-12 po-lg-6"
    name="mask"
    [(ngModel)]="mask"
    p-clean
    p-help="Ex.: Zip code: '99999-999'; License plate: '@@@-9999'"
    p-label="Mask"
  >
  </po-input>

  <po-input
    class="po-md-12 po-lg-6"
    name="pattern"
    [(ngModel)]="pattern"
    p-clean
    p-help="Ex.: '^(2[0-3]|[01][0-9]):?([0-5][0-9])$'"
    p-label="Pattern (Regex)"
  >
  </po-input>

  <po-number class="po-md-6 po-lg-3" name="minlength" [(ngModel)]="minlength" p-clean p-label="Min Length"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="maxlength" [(ngModel)]="maxlength" p-clean p-label="Max Length"> </po-number>

  <po-select class="po-md-6" name="icon" [(ngModel)]="icon" p-clean p-label="Icon" [p-options]="iconOptions">
  </po-select>

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
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="f.reset(); this.restore()"> </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-input-labs/sample-po-input-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-input-labs',
  templateUrl: './sample-po-input-labs.component.html',
  standalone: false
})
export class SamplePoInputLabsComponent implements OnInit {
  helperText: string;
  input: string;
  errorPattern: string;
  event: string;
  help: string;
  icon: string;
  label: string;
  mask: string;
  maxlength: number;
  minlength: number;
  pattern: string;
  placeholder: string;
  properties: Array<string>;
  size: string;

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-newspaper', label: 'an an-newspaper' },
    { value: 'an an-magnifying-glass', label: 'an an-magnifying-glass' },
    { value: 'fa fa-calculator', label: 'fa fa-calculator' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'maskFormatModel', label: 'Formatted Model' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'required', label: 'Required' },
    { value: 'requiredFieldErrorMessage', label: 'Required Field Error Message' },
    { value: 'uppercase', label: 'Upper Case' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'maskNoLengthValidation', label: 'Mask No Length Validation' },
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
    this.input = undefined;
    this.size = 'medium';
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-input-labs"),t(),o(23,"hr")),r&2&&(p(5),P("po-icon "+i.sampleCodeButtonIcon),p(),_(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",M(4,Pe,i.hideSampleCodeTabs)))},dependencies:[k,w,C,y,ue],encapsulation:2})}return a})();var Me=["reactiveFormData"],be=(()=>{class a{fb=j($);reactiveFormModal;reactiveForm;modalPrimaryAction={action:()=>this.reactiveFormModal.close(),label:"Close"};constructor(){this.createReactiveForm()}createReactiveForm(){this.reactiveForm=this.fb.group({name:["",S.compose([S.required,S.minLength(5),S.maxLength(30)])],address:["",S.compose([S.required,S.minLength(5),S.maxLength(50)])],number:["",S.compose([S.required,S.min(1),S.max(99999)])],email:["",S.required],website:["",S.required]})}saveForm(){this.reactiveFormModal.open()}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-input-reactive-form"]],viewQuery:function(r,i){if(r&1&&G(Me,7),r&2){let m;U(m=Q())&&(i.reactiveFormModal=m.first)}},standalone:!1,decls:23,vars:8,consts:[["reactiveFormData",""],[3,"formGroup"],[1,"po-row"],["formControlName","name","p-clean","","p-icon","an an-user","p-label","Customer name",1,"po-md-12"],["formControlName","address","p-clean","","p-icon","an an-map-pin","p-label","Address",1,"po-lg-9"],["formControlName","number","p-label","Number","p-clean","",1,"po-lg-3"],["formControlName","email","p-label","Email","p-clean","",1,"po-lg-6"],["formControlName","website","p-label","Website","p-clean","",1,"po-lg-6"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Save successful",3,"p-primary-action"],["p-label","Name",1,"po-md-12",3,"p-value"],["p-label","Address",1,"po-md-6",3,"p-value"],["p-label","Number",1,"po-md-6",3,"p-value"],["p-label","Email",1,"po-md-6",3,"p-value"],["p-label","Website",1,"po-md-6",3,"p-value"]],template:function(r,i){if(r&1){let m=D();n(0,"form",1)(1,"div",2),o(2,"po-input",3),t(),n(3,"div",2),o(4,"po-input",4)(5,"po-number",5),t(),n(6,"div",2),o(7,"po-email",6)(8,"po-url",7),t(),n(9,"div",2)(10,"po-button",8),g("p-click",function(){return c(m),u(i.saveForm())}),t()()(),n(11,"po-modal",9,0)(13,"div",2),o(14,"po-info",10),t(),o(15,"po-divider"),n(16,"div",2),o(17,"po-info",11)(18,"po-info",12),t(),o(19,"po-divider"),n(20,"div",2),o(21,"po-info",13)(22,"po-info",14),t()()}r&2&&(s("formGroup",i.reactiveForm),p(10),s("p-disabled",!i.reactiveForm.valid),p(),s("p-primary-action",i.modalPrimaryAction),p(3),s("p-value",i.reactiveForm.controls.name.value),p(3),s("p-value",i.reactiveForm.controls.address.value),p(),s("p-value",i.reactiveForm.controls.number.value),p(3),s("p-value",i.reactiveForm.controls.email.value),p(),s("p-value",i.reactiveForm.controls.website.value))},dependencies:[z,V,L,J,Y,A,N,ae,F,R,le,O,oe],encapsulation:2})}return a})();var Fe=a=>({"docs-sample-code-tabs":a}),Se=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-input-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Input - Reactive Form"),t(),n(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-input-reactive-form/sample-po-input-reactive-form.component.html"),t(),n(13,"pre",7),e(14,`<form [formGroup]="reactiveForm">
  <div class="po-row">
    <po-input class="po-md-12" formControlName="name" p-clean p-icon="an an-user" p-label="Customer name"> </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-lg-9" formControlName="address" p-clean p-icon="an an-map-pin" p-label="Address"> </po-input>

    <po-number class="po-lg-3" formControlName="number" p-label="Number" p-clean> </po-number>
  </div>

  <div class="po-row">
    <po-email class="po-lg-6" formControlName="email" p-label="Email" p-clean> </po-email>

    <po-url class="po-lg-6" formControlName="website" p-label="Website" p-clean> </po-url>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Save" [p-disabled]="!reactiveForm.valid" (p-click)="saveForm()"> </po-button>
  </div>
</form>

<po-modal #reactiveFormData p-title="Save successful" [p-primary-action]="modalPrimaryAction">
  <div class="po-row">
    <po-info class="po-md-12" p-label="Name" [p-value]="reactiveForm.controls.name.value"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-md-6" p-label="Address" [p-value]="reactiveForm.controls.address.value"> </po-info>

    <po-info class="po-md-6" p-label="Number" [p-value]="reactiveForm.controls.number.value"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-md-6" p-label="Email" [p-value]="reactiveForm.controls.email.value"> </po-info>

    <po-info class="po-md-6" p-label="Website" [p-value]="reactiveForm.controls.website.value"> </po-info>
  </div>
</po-modal>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-input-reactive-form/sample-po-input-reactive-form.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, ViewChild, inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-input-reactive-form',
  templateUrl: './sample-po-input-reactive-form.component.html',
  standalone: false
})
export class SamplePoInputReactiveFormComponent {
  private fb = inject(UntypedFormBuilder);

  @ViewChild('reactiveFormData', { static: true }) reactiveFormModal: PoModalComponent;

  reactiveForm: UntypedFormGroup;

  public readonly modalPrimaryAction: PoModalAction = {
    action: () => this.reactiveFormModal.close(),
    label: 'Close'
  };

  constructor() {
    this.createReactiveForm();
  }

  createReactiveForm() {
    this.reactiveForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])],
      address: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      number: ['', Validators.compose([Validators.required, Validators.min(1), Validators.max(99999)])],
      email: ['', Validators.required],
      website: ['', Validators.required]
    });
  }

  saveForm() {
    this.reactiveFormModal.open();
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-input-reactive-form"),t(),o(23,"hr")),r&2&&(p(5),P("po-icon "+i.sampleCodeButtonIcon),p(),_(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",M(4,Fe,i.hideSampleCodeTabs)))},dependencies:[k,w,C,y,be],encapsulation:2})}return a})();var ge=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-input-doc"]],standalone:!1,decls:1238,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoInputComponent"),t()(),n(21,"div",2)(22,"p"),e(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),t(),n(24,"p"),e(25,"Importante:"),t(),n(26,"ul")(27,"li"),e(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),t()(),n(29,"h4"),e(30,"Tokens customiz\xE1veis"),t(),n(31,"p"),e(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),o(33,"br"),e(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),n(35,"code"),e(36,".po-input"),t()(),n(37,"blockquote")(38,"p"),e(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),n(40,"a",6),e(41,"Grid System"),t(),e(42,"."),t()(),n(43,"blockquote")(44,"p"),e(45,"Para maiores informa\xE7\xF5es, acesse o guia "),n(46,"a",7),e(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(48,"."),t()(),n(49,"table")(50,"thead")(51,"tr")(52,"th"),e(53,"Propriedade"),t(),n(54,"th"),e(55,"Descri\xE7\xE3o"),t(),n(56,"th"),e(57,"Valor Padr\xE3o"),t()()(),n(58,"tbody")(59,"tr")(60,"td")(61,"strong"),e(62,"Default Values"),t()(),o(63,"td")(64,"td"),t(),n(65,"tr")(66,"td")(67,"code"),e(68,"--font-family"),t()(),n(69,"td"),e(70,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(71,"td")(72,"code"),e(73,"var(--font-family-theme)"),t()()(),n(74,"tr")(75,"td")(76,"code"),e(77,"--font-size"),t()(),n(78,"td"),e(79,"Tamanho da fonte"),t(),n(80,"td")(81,"code"),e(82,"var(--font-size-default)"),t()()(),n(83,"tr")(84,"td")(85,"code"),e(86,"--text-color-placeholder"),t()(),n(87,"td"),e(88,"Cor do texto placeholder"),t(),n(89,"td")(90,"code"),e(91,"var(--color-neutral-light-30)"),t()()(),n(92,"tr")(93,"td")(94,"code"),e(95,"--color"),t()(),n(96,"td"),e(97,"Cor pincipal do input"),t(),n(98,"td")(99,"code"),e(100,"var(--color-neutral-dark-70)"),t()()(),n(101,"tr")(102,"td")(103,"code"),e(104,"--background"),t()(),n(105,"td"),e(106,"Cor de background"),t(),n(107,"td")(108,"code"),e(109,"var(--color-neutral-light-05)"),t()()(),n(110,"tr")(111,"td")(112,"code"),e(113,"--padding"),t()(),n(114,"td"),e(115,"Preenchimento"),t(),n(116,"td")(117,"code"),e(118,"0 0.5rem"),t()()(),n(119,"tr")(120,"td")(121,"code"),e(122,"--text-color"),t()(),n(123,"td"),e(124,"Cor do texto"),t(),n(125,"td")(126,"code"),e(127,"var(--color-neutral-dark-90)"),t()()(),n(128,"tr")(129,"td")(130,"strong"),e(131,"Hover"),t()(),o(132,"td")(133,"td"),t(),n(134,"tr")(135,"td")(136,"code"),e(137,"--color-hover"),t()(),n(138,"td"),e(139,"Cor principal no estado hover"),t(),n(140,"td")(141,"code"),e(142,"var(--color-brand-01-dark)"),t()()(),n(143,"tr")(144,"td")(145,"code"),e(146,"--background-hover"),t()(),n(147,"td"),e(148,"Cor de background no estado hover"),t(),n(149,"td")(150,"code"),e(151,"var(--color-brand-01-lightest)"),t()()(),n(152,"tr")(153,"td")(154,"strong"),e(155,"Focused"),t()(),o(156,"td")(157,"td"),t(),n(158,"tr")(159,"td")(160,"code"),e(161,"--color-focused"),t()(),n(162,"td"),e(163,"Cor principal no estado de focus"),t(),n(164,"td")(165,"code"),e(166,"var(--color-action-default)"),t()()(),n(167,"tr")(168,"td")(169,"code"),e(170,"--outline-color-focused"),t()(),n(171,"td"),e(172,"Cor do outline do estado de focus"),t(),n(173,"td")(174,"code"),e(175,"var(--color-action-focus)"),t()()(),n(176,"tr")(177,"td")(178,"strong"),e(179,"Disabled"),t()(),o(180,"td")(181,"td"),t(),n(182,"tr")(183,"td")(184,"code"),e(185,"--color-disabled"),t()(),n(186,"td"),e(187,"Cor principal no estado disabled"),t(),n(188,"td")(189,"code"),e(190,"var(--color-neutral-light-30)"),t()()(),n(191,"tr")(192,"td")(193,"code"),e(194,"--background-disabled"),t()(),n(195,"td"),e(196,"Cor de background no estado disabled"),t(),n(197,"td")(198,"code"),e(199,"var(--color-neutral-light-20)"),t()()(),n(200,"tr")(201,"td")(202,"code"),e(203,"--text-color-disabled"),t()(),n(204,"td"),e(205,"Cor do texto no estado disabled"),t(),n(206,"td")(207,"code"),e(208,"var(--color-neutral-dark-70)"),t()()()()(),o(209,"br"),t(),n(210,"div",8)(211,"h4",9),e(212,"Seletor"),t(),n(213,"pre",10),e(214,`<po-input
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
</po-input>
`),t()(),n(215,"h4",11),e(216,"Propriedades"),t(),n(217,"table",12)(218,"tr",13)(219,"th",14),e(220,"Nome"),t(),n(221,"th",14),e(222,"Tipo"),t(),n(223,"th",14),e(224,"Padr\xE3o"),t(),n(225,"th",14),e(226,"Descri\xE7\xE3o"),t()(),n(227,"tr",15)(228,"td",16)(229,"div",17)(230,"span",18),e(231," (p-additional-help)"),o(232,"br"),t()(),n(233,"div",19),e(234,"Deprecated"),t()(),n(235,"td",20)(236,"code",21),e(237,"EventEmitter"),t()(),n(238,"td",22),e(239,"-"),t(),n(240,"td",23)(241,"em")(242,"strong"),e(243,"(opcional)"),t()(),n(244,"p"),e(245,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),t(),n(246,"blockquote")(247,"p"),e(248,"Essa propriedade est\xE1 "),n(249,"strong"),e(250,"depreciada"),t(),e(251," e ser\xE1 removida na vers\xE3o "),n(252,"code"),e(253,"23.x.x"),t(),e(254,". Recomendamos utilizar a propriedade "),n(255,"code"),e(256,"p-helper"),t(),e(257," que oferece mais recursos e flexibilidade."),t()()()(),n(258,"tr",15)(259,"td",16)(260,"div",24)(261,"span",25),e(262," p-additional-help-tooltip"),o(263,"br"),t()(),n(264,"div",19),e(265,"Deprecated"),t()(),n(266,"td",20)(267,"code",26),e(268,"string"),t()(),n(269,"td",22),e(270,"-"),t(),n(271,"td",23)(272,"em")(273,"strong"),e(274,"(opcional)"),t()(),n(275,"p"),e(276,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),n(277,"code"),e(278,"po-helper"),t(),e(279,`.
`),n(280,"strong"),e(281,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(282,"blockquote")(283,"p"),e(284,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),n(285,"blockquote")(286,"p"),e(287,"Essa propriedade est\xE1 "),n(288,"strong"),e(289,"depreciada"),t(),e(290," e ser\xE1 removida na vers\xE3o "),n(291,"code"),e(292,"23.x.x"),t(),e(293,". Recomendamos utilizar a propriedade "),n(294,"code"),e(295,"p-helper"),t(),e(296," que oferece mais recursos e flexibilidade."),t()()()(),n(297,"tr",15)(298,"td",16)(299,"div",24)(300,"span",25),e(301," p-append-in-body"),o(302,"br"),t()()(),n(303,"td",20)(304,"code",27),e(305,"boolean"),t()(),n(306,"td",22)(307,"p")(308,"code"),e(309,"false"),t()()(),n(310,"td",23)(311,"em")(312,"strong"),e(313,"(opcional)"),t()(),n(314,"p"),e(315,"Define que o popover ("),n(316,"code"),e(317,"p-helper"),t(),e(318," e/ou "),n(319,"code"),e(320,"p-error-limit"),t(),e(321,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),n(322,"blockquote")(323,"p"),e(324,"Quando utilizado com "),n(325,"code"),e(326,"p-helper"),t(),e(327,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),t()()()(),n(328,"tr",15)(329,"td",16)(330,"div",24)(331,"span",25),e(332," p-auto-focus"),o(333,"br"),t()()(),n(334,"td",20)(335,"code",27),e(336,"boolean"),t()(),n(337,"td",22)(338,"p")(339,"code"),e(340,"false"),t()()(),n(341,"td",23)(342,"em")(343,"strong"),e(344,"(opcional)"),t()(),n(345,"p"),e(346,"Aplica foco no elemento ao ser iniciado."),t(),n(347,"blockquote")(348,"p"),e(349,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(350,"tr",15)(351,"td",16)(352,"div",17)(353,"span",18),e(354," (p-blur)"),o(355,"br"),t()()(),n(356,"td",20)(357,"code",21),e(358,"EventEmitter"),t()(),n(359,"td",22),e(360,"-"),t(),n(361,"td",23)(362,"em")(363,"strong"),e(364,"(opcional)"),t()(),n(365,"p"),e(366,"Evento disparado ao sair do campo."),t()()(),n(367,"tr",15)(368,"td",16)(369,"div",17)(370,"span",18),e(371," (p-change)"),o(372,"br"),t()()(),n(373,"td",20)(374,"code",21),e(375,"EventEmitter"),t()(),n(376,"td",22),e(377,"-"),t(),n(378,"td",23)(379,"em")(380,"strong"),e(381,"(opcional)"),t()(),n(382,"p"),e(383,"Evento disparado ao alterar valor e deixar o campo."),t()()(),n(384,"tr",15)(385,"td",16)(386,"div",17)(387,"span",18),e(388," (p-change-model)"),o(389,"br"),t()()(),n(390,"td",20)(391,"code",21),e(392,"EventEmitter"),t()(),n(393,"td",22),e(394,"-"),t(),n(395,"td",23)(396,"em")(397,"strong"),e(398,"(opcional)"),t()(),n(399,"p"),e(400,"Evento disparado ao alterar valor do model."),t()()(),n(401,"tr",15)(402,"td",16)(403,"div",24)(404,"span",25),e(405,"p-clean"),o(406,"br"),t()()(),n(407,"td",20)(408,"code",27),e(409,"boolean"),t()(),n(410,"td",22),e(411,"-"),t(),n(412,"td",23)(413,"em")(414,"strong"),e(415,"(opcional)"),t()(),n(416,"p"),e(417,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t()()(),n(418,"tr",15)(419,"td",16)(420,"div",24)(421,"span",25),e(422,"p-disabled"),o(423,"br"),t()()(),n(424,"td",20)(425,"code",27),e(426,"boolean"),t()(),n(427,"td",22)(428,"p")(429,"code"),e(430,"false"),t()()(),n(431,"td",23)(432,"em")(433,"strong"),e(434,"(opcional)"),t()(),n(435,"p"),e(436,"Se verdadeiro, desabilita o campo."),t()()(),n(437,"tr",15)(438,"td",16)(439,"div",24)(440,"span",25),e(441," p-emit-all-changes"),o(442,"br"),t()()(),n(443,"td",20)(444,"code",27),e(445,"boolean"),t()(),n(446,"td",22)(447,"p")(448,"code"),e(449,"false"),t()()(),n(450,"td",23)(451,"em")(452,"strong"),e(453,"(opcional)"),t()(),n(454,"p"),e(455,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),t()()(),n(456,"tr",15)(457,"td",16)(458,"div",17)(459,"span",18),e(460," (p-enter)"),o(461,"br"),t()()(),n(462,"td",20)(463,"code",21),e(464,"EventEmitter"),t()(),n(465,"td",22),e(466,"-"),t(),n(467,"td",23)(468,"em")(469,"strong"),e(470,"(opcional)"),t()(),n(471,"p"),e(472,"Evento disparado ao entrar do campo."),t()()(),n(473,"tr",15)(474,"td",16)(475,"div",24)(476,"span",25),e(477," p-error-async-properties"),o(478,"br"),t()()(),n(479,"td",20)(480,"code",28),e(481,"ErrorAsyncProperties"),t()(),n(482,"td",22),e(483,"-"),t(),n(484,"td",23)(485,"em")(486,"strong"),e(487,"(opcional)"),t()(),n(488,"p"),e(489,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),n(490,"code"),e(491,"Reactive Forms"),t(),e(492,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),n(493,"code"),e(494,"asyncValidators"),t(),e(495,"."),t()()(),n(496,"tr",15)(497,"td",16)(498,"div",24)(499,"span",25),e(500," p-error-limit"),o(501,"br"),t()()(),n(502,"td",20)(503,"code",27),e(504,"boolean"),t()(),n(505,"td",22)(506,"p")(507,"code"),e(508,"false"),t()()(),n(509,"td",23)(510,"em")(511,"strong"),e(512,"(opcional)"),t()(),n(513,"p"),e(514,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(515,"blockquote")(516,"p"),e(517,"Caso essa propriedade seja definida como "),n(518,"code"),e(519,"true"),t(),e(520,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),n(521,"tr",15)(522,"td",16)(523,"div",24)(524,"span",25),e(525," p-error-pattern"),o(526,"br"),t()()(),n(527,"td",20)(528,"code",26),e(529,"string"),t()(),n(530,"td",22),e(531,"-"),t(),n(532,"td",23)(533,"em")(534,"strong"),e(535,"(opcional)"),t()(),n(536,"p"),e(537,"Mensagem que ser\xE1 apresentada quando o "),n(538,"code"),e(539,"pattern"),t(),e(540," ou a m\xE1scara n\xE3o for satisfeita."),t(),n(541,"blockquote")(542,"p"),e(543,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),n(544,"code"),e(545,"p-required-field-error-message"),t(),e(546," em conjunto."),t()()()(),n(547,"tr",15)(548,"td",16)(549,"div",24)(550,"span",25),e(551," p-help"),o(552,"br"),t()()(),n(553,"td",20)(554,"code",26),e(555,"string"),t()(),n(556,"td",22),e(557,"-"),t(),n(558,"td",23)(559,"em")(560,"strong"),e(561,"(opcional)"),t()(),n(562,"p"),e(563,"Texto de apoio do campo."),t()()(),n(564,"tr",15)(565,"td",16)(566,"div",24)(567,"span",25),e(568," p-icon"),o(569,"br"),t()()(),n(570,"td",20)(571,"code",26),e(572,"string "),t(),n(573,"code",29),e(574," TemplateRef<void>"),t()(),n(575,"td",22),e(576,"-"),t(),n(577,"td",23)(578,"em")(579,"strong"),e(580,"(opcional)"),t()(),n(581,"p"),e(582,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),n(583,"p"),e(584,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(585,"a",30),e(586,"Biblioteca de \xEDcones"),t(),e(587,". conforme exemplo abaixo:"),t(),n(588,"pre")(589,"code"),e(590,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),t()(),n(591,"p"),e(592,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),n(593,"em"),e(594,"Font Awesome"),t(),e(595,", da seguinte forma:"),t(),n(596,"pre")(597,"code"),e(598,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),t()(),n(599,"p"),e(600,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(601,"code"),e(602,"TemplateRef"),t(),e(603,", conforme exemplo abaixo:"),t(),n(604,"pre")(605,"code"),e(606,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),t()(),n(607,"blockquote")(608,"p"),e(609,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),n(610,"code"),e(611,"font-size: inherit"),t(),e(612," caso o \xEDcone utilizado n\xE3o aplique-o."),t()()()(),n(613,"tr",15)(614,"td",16)(615,"div",17)(616,"span",18),e(617," (p-keydown)"),o(618,"br"),t()()(),n(619,"td",20)(620,"code",21),e(621,"EventEmitter"),t()(),n(622,"td",22),e(623,"-"),t(),n(624,"td",23)(625,"em")(626,"strong"),e(627,"(opcional)"),t()(),n(628,"p"),e(629,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(630,"code"),e(631,"KeyboardEvent"),t(),e(632," com informa\xE7\xF5es sobre a tecla."),t()()(),n(633,"tr",15)(634,"td",16)(635,"div",24)(636,"span",25),e(637," p-label"),o(638,"br"),t()()(),n(639,"td",20)(640,"code",26),e(641,"string"),t()(),n(642,"td",22),e(643,"-"),t(),n(644,"td",23)(645,"em")(646,"strong"),e(647,"(opcional)"),t()(),n(648,"p"),e(649,"R\xF3tulo do campo."),t()()(),n(650,"tr",15)(651,"td",16)(652,"div",24)(653,"span",25),e(654," p-label-text-wrap"),o(655,"br"),t()()(),n(656,"td",20)(657,"code",27),e(658,"boolean"),t()(),n(659,"td",22)(660,"p")(661,"code"),e(662,"false"),t()()(),n(663,"td",23)(664,"em")(665,"strong"),e(666,"(opcional)"),t()(),n(667,"p"),e(668,"Habilita a quebra autom\xE1tica do texto da propriedade "),n(669,"code"),e(670,"p-label"),t(),e(671,". Quando "),n(672,"code"),e(673,"p-label-text-wrap"),t(),e(674,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),n(675,"tr",15)(676,"td",16)(677,"div",24)(678,"span",25),e(679,"p-mask"),o(680,"br"),t()()(),n(681,"td",20)(682,"code",26),e(683,"string"),t()(),n(684,"td",22),e(685,"-"),t(),n(686,"td",23)(687,"em")(688,"strong"),e(689,"(opcional)"),t()(),n(690,"p"),e(691,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),t()()(),n(692,"tr",15)(693,"td",16)(694,"div",24)(695,"span",25),e(696,"p-mask-format-model"),o(697,"br"),t()()(),n(698,"td",20)(699,"code",27),e(700,"boolean"),t()(),n(701,"td",22)(702,"p")(703,"code"),e(704,"false"),t()()(),n(705,"td",23)(706,"em")(707,"strong"),e(708,"(opcional)"),t()(),n(709,"p"),e(710,"Indica se o "),n(711,"code"),e(712,"model"),t(),e(713," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),t()()(),n(714,"tr",15)(715,"td",16)(716,"div",24)(717,"span",25),e(718," p-mask-no-length-validation"),o(719,"br"),t()()(),n(720,"td",20)(721,"code",27),e(722,"boolean"),t()(),n(723,"td",22)(724,"p")(725,"code"),e(726,"false"),t()()(),n(727,"td",23)(728,"p"),e(729,"Define se os caracteres especiais da m\xE1scara devem ser ignorados ao validar os comprimentos m\xEDnimo ("),n(730,"code"),e(731,"minLength"),t(),e(732,") e m\xE1ximo ("),n(733,"code"),e(734,"maxLength"),t(),e(735,") do campo."),t(),n(736,"ul")(737,"li"),e(738,"Quando "),n(739,"code"),e(740,"true"),t(),e(741,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),t(),n(742,"li"),e(743,"Quando "),n(744,"code"),e(745,"false"),t(),e(746,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),t()(),n(747,"blockquote")(748,"p"),e(749,"Ser\xE1 ignorado essa propriedade , caso esteja utilizando junto com a propriedade "),n(750,"code"),e(751,"p-mask-format-model"),t(),e(752,"."),t()(),n(753,"p"),e(754,"Exemplo:"),t(),n(755,"pre")(756,"code"),e(757,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),t()(),n(758,"ul")(759,"li"),e(760,"Entrada: "),n(761,"code"),e(762,"123-456"),t(),e(763," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),n(764,"code"),e(765,"-"),t(),e(766,"."),t()()()(),n(767,"tr",15)(768,"td",16)(769,"div",24)(770,"span",25),e(771," p-maxlength"),o(772,"br"),t()()(),n(773,"td",20)(774,"code",31),e(775,"number"),t()(),n(776,"td",22),e(777,"-"),t(),n(778,"td",23)(779,"em")(780,"strong"),e(781,"(opcional)"),t()(),n(782,"p"),e(783,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),t()()(),n(784,"tr",15)(785,"td",16)(786,"div",24)(787,"span",25),e(788," p-minlength"),o(789,"br"),t()()(),n(790,"td",20)(791,"code",31),e(792,"number"),t()(),n(793,"td",22),e(794,"-"),t(),n(795,"td",23)(796,"em")(797,"strong"),e(798,"(opcional)"),t()(),n(799,"p"),e(800,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),t()()(),n(801,"tr",15)(802,"td",16)(803,"div",24)(804,"span",25),e(805," name"),o(806,"br"),t()()(),n(807,"td",20)(808,"code",26),e(809,"string"),t()(),n(810,"td",22),e(811,"-"),t(),n(812,"td",23)(813,"p"),e(814,"Nome e identificador do campo."),t()()(),n(815,"tr",15)(816,"td",16)(817,"div",24)(818,"span",25),e(819," p-no-autocomplete"),o(820,"br"),t()()(),n(821,"td",20)(822,"code",27),e(823,"boolean"),t()(),n(824,"td",22)(825,"p")(826,"code"),e(827,"false"),t()()(),n(828,"td",23)(829,"em")(830,"strong"),e(831,"(opcional)"),t()(),n(832,"p"),e(833,"Define a propriedade nativa "),n(834,"code"),e(835,"autocomplete"),t(),e(836," do campo como "),n(837,"code"),e(838,"off"),t(),e(839,"."),t(),n(840,"blockquote")(841,"p"),e(842,"No componente "),n(843,"code"),e(844,"po-password"),t(),e(845," ser\xE1 definido como "),n(846,"code"),e(847,"new-password"),t(),e(848,"."),t()(),n(849,"p"),e(850,"Nos componentes "),n(851,"code"),e(852,"po-password"),t(),e(853," e "),n(854,"code"),e(855,"po-login"),t(),e(856," o valor padr\xE3o ser\xE1 "),n(857,"code"),e(858,"true"),t(),e(859,"."),t()()(),n(860,"tr",15)(861,"td",16)(862,"div",24)(863,"span",25),e(864," p-optional"),o(865,"br"),t()()(),n(866,"td",20)(867,"code",27),e(868,"boolean"),t()(),n(869,"td",22)(870,"p")(871,"code"),e(872,"false"),t()()(),n(873,"td",23)(874,"em")(875,"strong"),e(876,"(opcional)"),t()(),n(877,"p"),e(878,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(879,"blockquote")(880,"p"),e(881,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(882,"ul")(883,"li"),e(884,"O campo conter "),n(885,"code"),e(886,"p-required"),t(),e(887,";"),t(),n(888,"li"),e(889,"N\xE3o possuir "),n(890,"code"),e(891,"p-help"),t(),e(892," e/ou "),n(893,"code"),e(894,"p-label"),t(),e(895,"."),t()()()(),n(896,"tr",15)(897,"td",16)(898,"div",24)(899,"span",25),e(900,"p-pattern"),o(901,"br"),t()()(),n(902,"td",20)(903,"code",26),e(904,"string"),t()(),n(905,"td",22),e(906,"-"),t(),n(907,"td",23)(908,"em")(909,"strong"),e(910,"(opcional)"),t()(),n(911,"p"),e(912,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),n(913,"code"),e(914,"(p-mask)"),t(),e(915,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),t()()(),n(916,"tr",15)(917,"td",16)(918,"div",24)(919,"span",25),e(920," p-placeholder"),o(921,"br"),t()()(),n(922,"td",20)(923,"code",26),e(924,"string"),t()(),n(925,"td",22)(926,"p"),e(927,"''"),t()(),n(928,"td",23)(929,"em")(930,"strong"),e(931,"(opcional)"),t()(),n(932,"p"),e(933,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(934,"tr",15)(935,"td",16)(936,"div",24)(937,"span",25),e(938," p-helper"),o(939,"br"),t()()(),n(940,"td",20)(941,"code",32),e(942,"PoHelperOptions "),t(),n(943,"code",26),e(944," string"),t()(),n(945,"td",22),e(946,"-"),t(),n(947,"td",23)(948,"em")(949,"strong"),e(950,"(opcional)"),t()(),n(951,"p"),e(952,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),n(953,"code"),e(954,"p-label"),t(),e(955," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),n(956,"code"),e(957,"p-label"),t(),e(958,"."),t(),n(959,"blockquote")(960,"p"),e(961,"Para mais informa\xE7\xF5es acesse: "),n(962,"a",33),e(963,"https://po-ui.io/documentation/po-helper"),t(),e(964,"."),t()(),n(965,"blockquote")(966,"p"),e(967,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),n(968,"code"),e(969,"p-additional-help-tooltip"),t(),e(970," e "),n(971,"code"),e(972,"p-additional-help"),t(),e(973,") ser\xE1 ignorado."),t()()()(),n(974,"tr",15)(975,"td",16)(976,"div",24)(977,"span",25),e(978,"p-readonly"),o(979,"br"),t()()(),n(980,"td",20)(981,"code",27),e(982,"boolean"),t()(),n(983,"td",22),e(984,"-"),t(),n(985,"td",23)(986,"em")(987,"strong"),e(988,"(opcional)"),t()(),n(989,"p"),e(990,"Indica que o campo ser\xE1 somente leitura."),t()()(),n(991,"tr",15)(992,"td",16)(993,"div",24)(994,"span",25),e(995,"p-required"),o(996,"br"),t()()(),n(997,"td",20)(998,"code",27),e(999,"boolean"),t()(),n(1e3,"td",22)(1001,"p")(1002,"code"),e(1003,"false"),t()()(),n(1004,"td",23)(1005,"em")(1006,"strong"),e(1007,"(opcional)"),t()(),n(1008,"p"),e(1009,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),n(1010,"blockquote")(1011,"p"),e(1012,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),n(1013,"code"),e(1014,"(p-disabled)"),t(),e(1015,"."),t()()()(),n(1016,"tr",15)(1017,"td",16)(1018,"div",24)(1019,"span",25),e(1020," p-required-field-error-message"),o(1021,"br"),t()()(),n(1022,"td",20)(1023,"code",27),e(1024,"boolean"),t()(),n(1025,"td",22)(1026,"p")(1027,"code"),e(1028,"false"),t()()(),n(1029,"td",23)(1030,"em")(1031,"strong"),e(1032,"(opcional)"),t()(),n(1033,"p"),e(1034,"Exibe a mensagem setada na propriedade "),n(1035,"code"),e(1036,"p-error-pattern"),t(),e(1037," se o campo estiver vazio e for requerido."),t(),n(1038,"blockquote")(1039,"p"),e(1040,"Necess\xE1rio que a propriedade "),n(1041,"code"),e(1042,"p-required"),t(),e(1043," esteja habilitada."),t()()()(),n(1044,"tr",15)(1045,"td",16)(1046,"div",24)(1047,"span",25),e(1048," p-show-required"),o(1049,"br"),t()()(),n(1050,"td",20)(1051,"code",27),e(1052,"boolean"),t()(),n(1053,"td",22),e(1054,"-"),t(),n(1055,"td",23)(1056,"p"),e(1057,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(1058,"blockquote")(1059,"p"),e(1060,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(1061,"ul")(1062,"li"),e(1063,"N\xE3o possuir "),n(1064,"code"),e(1065,"p-help"),t(),e(1066," e/ou "),n(1067,"code"),e(1068,"p-label"),t(),e(1069,"."),t()()()(),n(1070,"tr",15)(1071,"td",16)(1072,"div",24)(1073,"span",25),e(1074," p-size"),o(1075,"br"),t()()(),n(1076,"td",20)(1077,"code",26),e(1078,"string"),t()(),n(1079,"td",22)(1080,"p")(1081,"code"),e(1082,"medium"),t()()(),n(1083,"td",23)(1084,"em")(1085,"strong"),e(1086,"(opcional)"),t()(),n(1087,"p"),e(1088,"Define o tamanho do componente:"),t(),n(1089,"ul")(1090,"li")(1091,"code"),e(1092,"small"),t(),e(1093,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(1094,"li")(1095,"code"),e(1096,"medium"),t(),e(1097,": altura do input como 44px."),t()(),n(1098,"blockquote")(1099,"p"),e(1100,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(1101,"code"),e(1102,"medium"),t(),e(1103,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(1104,"a",34),e(1105,"po-theme"),t(),e(1106,"."),t()()()(),n(1107,"tr",15)(1108,"td",16)(1109,"div",24)(1110,"span",25),e(1111," p-upper-case"),o(1112,"br"),t()()(),n(1113,"td",20)(1114,"code",27),e(1115,"boolean"),t()(),n(1116,"td",22),e(1117,"-"),t(),n(1118,"td",23)(1119,"p"),e(1120,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),t()()()(),n(1121,"h3",11),e(1122,"M\xE9todos"),t(),n(1123,"table",35)(1124,"tr",15)(1125,"th",36)(1126,"div",24)(1127,"h4")(1128,"span",25),e(1129," showAdditionalHelp "),t()()()()(),n(1130,"tr",23)(1131,"td",23)(1132,"p"),e(1133,"M\xE9todo que exibe "),n(1134,"code"),e(1135,"p-helper"),t(),e(1136," ou executa a a\xE7\xE3o definida em "),n(1137,"code"),e(1138,"p-helper{eventOnClick}"),t(),e(1139," ou em "),n(1140,"code"),e(1141,"p-additionalHelp"),t(),e(1142,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),n(1143,"code"),e(1144,"p-keydown"),t(),e(1145,"."),t(),n(1146,"blockquote")(1147,"p"),e(1148,"Exibe ou oculta o conte\xFAdo do componente "),n(1149,"code"),e(1150,"po-helper"),t(),e(1151," quando o componente estiver com foco."),t()(),n(1152,"pre")(1153,"code"),e(1154,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),t()(),n(1155,"pre")(1156,"code"),e(1157,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),o(1158,"br"),n(1159,"table",35)(1160,"tr",15)(1161,"th",36)(1162,"div",24)(1163,"h4")(1164,"span",25),e(1165," focus "),t()()()()(),n(1166,"tr",23)(1167,"td",23)(1168,"p"),e(1169,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(1170,"p"),e(1171,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(1172,"pre")(1173,"code"),e(1174,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),t()()()()(),o(1175,"br"),n(1176,"h3"),e(1177,"Interfaces"),t(),n(1178,"h4",37)(1179,"code",5),e(1180,"ErrorAsyncProperties"),t()(),n(1181,"div",2)(1182,"p"),e(1183,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),t()(),n(1184,"h4",11),e(1185,"Propriedades"),t(),n(1186,"table",12)(1187,"tr",13)(1188,"th",14),e(1189,"Nome"),t(),n(1190,"th",14),e(1191,"Tipo"),t(),n(1192,"th",14),e(1193,"Descri\xE7\xE3o"),t()(),n(1194,"tr",15)(1195,"td",16)(1196,"div",24)(1197,"span",25),e(1198," errorAsync"),o(1199,"br"),t()()(),n(1200,"td",20)(1201,"code",38),e(1202,"(value) => Observable<boolean>"),t()(),n(1203,"td",23)(1204,"p"),e(1205,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(1206,"code"),e(1207,"change"),t(),e(1208," ou "),n(1209,"code"),e(1210,"change-model"),t(),e(1211,", dependendo do valor da propriedade "),n(1212,"code"),e(1213,"triggerMode"),t(),e(1214,"."),t()()(),n(1215,"tr",15)(1216,"td",16)(1217,"div",24)(1218,"span",25),e(1219," triggerMode"),o(1220,"br"),t()()(),n(1221,"td",20)(1222,"code",39),e(1223,"'change' "),t(),n(1224,"code",40),e(1225," 'changeModel'"),t()(),n(1226,"td",23)(1227,"em")(1228,"strong"),e(1229,"(opcional)"),t()(),n(1230,"p"),e(1231,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),n(1232,"code"),e(1233,"change"),t(),e(1234," ou "),n(1235,"code"),e(1236,"change-model"),t(),e(1237,"."),t()()()()())},dependencies:[w],encapsulation:2})}return a})();var xe=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||a)(W(ee),W(te))};static \u0275cmp=b({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Input",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),g("p-click",function(){return i.changeTab("doc")}),o(3,"sample-po-input-doc"),t(),n(4,"po-tab",3),g("p-click",function(){return i.changeTab("web")}),o(5,"sample-po-input-basic-view")(6,"sample-po-input-labs-view")(7,"sample-po-input-reactive-form-view"),t()()()),r&2&&(s("p-actions",i.actions),p(2),s("p-active",i.activeTab==="doc"),p(2),s("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[pe,C,y,ce,Ee,Se,ge],encapsulation:2})}return a})();var Ie=[{path:"",component:xe}],he=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=I({type:a});static \u0275inj=T({imports:[B.forChild(Ie),B]})}return a})();var lt=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=I({type:a});static \u0275inj=T({imports:[me,he]})}return a})();export{lt as DocPoInputModule};
