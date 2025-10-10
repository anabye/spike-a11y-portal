import{o as w,p as me}from"./chunk-2IN5RQLL.js";import{Ab as y,Ea as ae,Fa as F,Ma as A,O as ne,Q as ie,Qa as le,Sa as re,U as oe,Xa as W,a as N,nb as pe,v as R,zb as C}from"./chunk-ADZAWTSX.js";import{$a as U,Aa as s,Ac as S,Cb as k,Da as P,Dc as V,Ec as L,Fc as Z,Gc as X,Hc as z,Kc as J,La as n,Lc as Y,Ma as t,N as T,Na as o,Pc as $,Q as j,Ra as I,Sa as g,U as c,Uc as ee,V as u,Wc as te,Yc as B,_a as G,ab as Q,bb as K,cb as e,eb as _,gb as x,hb as v,ib as h,ja as p,ka as O,lb as M,qa as b,ra as D}from"./chunk-KZJHT32G.js";var de=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-input-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","input","p-label","PO Input"]],template:function(r,i){r&1&&o(0,"po-input",0)},dependencies:[F],encapsulation:2})}return a})();var fe=a=>({"docs-sample-code-tabs":a}),ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-input-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Input Basic"),t(),n(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-input-basic/sample-po-input-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-input name="input" p-label="PO Input"> </po-input>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-input-basic/sample-po-input-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-input-basic',
  templateUrl: './sample-po-input-basic.component.html',
  standalone: false
})
export class SamplePoInputBasicComponent {}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-input-basic"),t(),o(23,"hr")),r&2&&(p(5),P("po-icon "+i.sampleCodeButtonIcon),p(),_(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",M(4,fe,i.hideSampleCodeTabs)))},dependencies:[k,w,C,y,de],encapsulation:2})}return a})();var ue=(()=>{class a{additionalHelpTooltip;input;errorPattern;event;help;icon;label;mask;maxlength;minlength;pattern;placeholder;properties;size;iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"fa fa-calculator",label:"fa fa-calculator"}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"maskFormatModel",label:"Formatted Model"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"uppercase",label:"Upper Case"},{value:"showRequired",label:"Show Required"},{value:"maskNoLengthValidation",label:"Mask No Length Validation"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(d){this.event=d}restore(){this.additionalHelpTooltip="",this.input=void 0,this.size="medium"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-input-labs"]],standalone:!1,decls:22,vars:42,consts:[["f","ngForm"],["name","input",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-additional-help-tooltip","p-clean","p-disabled","p-error-pattern","p-help","p-icon","p-label","p-mask","p-mask-format-model","p-maxlength","p-minlength","p-no-autocomplete","p-optional","p-pattern","p-placeholder","p-required","p-required-field-error-message","p-readonly","p-upper-case","p-show-required","p-mask-no-length-validation","p-size","p-error-limit","p-label-text-wrap"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","mask","p-clean","","p-help","Ex.: Zip code: '99999-999'; License plate: '@@@-9999'","p-label","Mask",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","pattern","p-clean","","p-help","Ex.: '^(2[0-3]|[01][0-9]):?([0-5][0-9])$'","p-label","Pattern (Regex)",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","icon","p-clean","","p-label","Icon",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let m=I();n(0,"po-input",1),h("ngModelChange",function(l){return c(m),v(i.input,l)||(i.input=l),u(l)}),g("p-blur",function(){return c(m),u(i.changeEvent("p-blur"))})("p-change",function(){return c(m),u(i.changeEvent("p-change"))})("p-change-model",function(){return c(m),u(i.changeEvent("p-change-model"))})("p-enter",function(){return c(m),u(i.changeEvent("p-enter"))})("p-keydown",function(){return c(m),u(i.changeEvent("p-keydown"))}),t(),o(1,"po-divider"),n(2,"div",2),o(3,"po-info",3)(4,"po-info",4),t(),o(5,"po-divider"),n(6,"form",null,0)(8,"po-input",5),h("ngModelChange",function(l){return c(m),v(i.label,l)||(i.label=l),u(l)}),t(),n(9,"po-input",6),h("ngModelChange",function(l){return c(m),v(i.help,l)||(i.help=l),u(l)}),t(),n(10,"po-input",7),h("ngModelChange",function(l){return c(m),v(i.additionalHelpTooltip,l)||(i.additionalHelpTooltip=l),u(l)}),t(),n(11,"po-input",8),h("ngModelChange",function(l){return c(m),v(i.placeholder,l)||(i.placeholder=l),u(l)}),t(),n(12,"po-input",9),h("ngModelChange",function(l){return c(m),v(i.errorPattern,l)||(i.errorPattern=l),u(l)}),t(),n(13,"po-input",10),h("ngModelChange",function(l){return c(m),v(i.mask,l)||(i.mask=l),u(l)}),t(),n(14,"po-input",11),h("ngModelChange",function(l){return c(m),v(i.pattern,l)||(i.pattern=l),u(l)}),t(),n(15,"po-number",12),h("ngModelChange",function(l){return c(m),v(i.minlength,l)||(i.minlength=l),u(l)}),t(),n(16,"po-number",13),h("ngModelChange",function(l){return c(m),v(i.maxlength,l)||(i.maxlength=l),u(l)}),t(),n(17,"po-select",14),h("ngModelChange",function(l){return c(m),v(i.icon,l)||(i.icon=l),u(l)}),t(),n(18,"po-checkbox-group",15),h("ngModelChange",function(l){return c(m),v(i.properties,l)||(i.properties=l),u(l)}),t(),n(19,"po-radio-group",16),h("ngModelChange",function(l){return c(m),v(i.size,l)||(i.size=l),u(l)}),t(),n(20,"div",2)(21,"po-button",17),g("p-click",function(){return c(m),K(7).reset(),u(i.restore())}),t()()()}r&2&&(x("ngModel",i.input),s("p-additional-help-tooltip",i.additionalHelpTooltip)("p-clean",i.properties==null?null:i.properties.includes("clean"))("p-disabled",i.properties==null?null:i.properties.includes("disabled"))("p-error-pattern",i.errorPattern)("p-help",i.help)("p-icon",i.icon)("p-label",i.label)("p-mask",i.mask)("p-mask-format-model",i.properties==null?null:i.properties.includes("maskFormatModel"))("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties==null?null:i.properties.includes("optional"))("p-pattern",i.pattern)("p-placeholder",i.placeholder)("p-required",i.properties==null?null:i.properties.includes("required"))("p-required-field-error-message",i.properties==null?null:i.properties.includes("requiredFieldErrorMessage"))("p-readonly",i.properties==null?null:i.properties.includes("readonly"))("p-upper-case",i.properties==null?null:i.properties.includes("uppercase"))("p-show-required",i.properties==null?null:i.properties.includes("showRequired"))("p-mask-no-length-validation",i.properties==null?null:i.properties.includes("maskNoLengthValidation"))("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap")),p(3),s("p-value",i.input),p(),s("p-value",i.event),p(4),x("ngModel",i.label),p(),x("ngModel",i.help),p(),x("ngModel",i.additionalHelpTooltip),p(),x("ngModel",i.placeholder),p(),x("ngModel",i.errorPattern),p(),x("ngModel",i.mask),p(),x("ngModel",i.pattern),p(),x("ngModel",i.minlength),p(),x("ngModel",i.maxlength),p(),x("ngModel",i.icon),s("p-options",i.iconOptions),p(),x("ngModel",i.properties),s("p-options",i.propertiesOptions),p(),x("ngModel",i.size),s("p-options",i.sizeOptions))},dependencies:[z,V,L,X,Z,R,N,ne,ie,F,A,re,W],encapsulation:2})}return a})();var Pe=a=>({"docs-sample-code-tabs":a}),Ee=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-input-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Input Labs"),t(),n(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-input-labs/sample-po-input-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-input
  name="input"
  [(ngModel)]="input"
  [p-additional-help-tooltip]="additionalHelpTooltip"
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

  <po-input
    class="po-md-6"
    name="additionalHelpTooltip"
    [(ngModel)]="additionalHelpTooltip"
    p-clean
    p-label="Additional Help"
  >
  </po-input>

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
  additionalHelpTooltip: string;
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
    this.additionalHelpTooltip = '';
    this.input = undefined;
    this.size = 'medium';
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-input-labs"),t(),o(23,"hr")),r&2&&(p(5),P("po-icon "+i.sampleCodeButtonIcon),p(),_(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",M(4,Pe,i.hideSampleCodeTabs)))},dependencies:[k,w,C,y,ue],encapsulation:2})}return a})();var Me=["reactiveFormData"],be=(()=>{class a{fb=j($);reactiveFormModal;reactiveForm;modalPrimaryAction={action:()=>this.reactiveFormModal.close(),label:"Close"};constructor(){this.createReactiveForm()}createReactiveForm(){this.reactiveForm=this.fb.group({name:["",S.compose([S.required,S.minLength(5),S.maxLength(30)])],address:["",S.compose([S.required,S.minLength(5),S.maxLength(50)])],number:["",S.compose([S.required,S.min(1),S.max(99999)])],email:["",S.required],website:["",S.required]})}saveForm(){this.reactiveFormModal.open()}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-input-reactive-form"]],viewQuery:function(r,i){if(r&1&&G(Me,7),r&2){let m;U(m=Q())&&(i.reactiveFormModal=m.first)}},standalone:!1,decls:23,vars:8,consts:[["reactiveFormData",""],[3,"formGroup"],[1,"po-row"],["formControlName","name","p-clean","","p-icon","an an-user","p-label","Customer name",1,"po-md-12"],["formControlName","address","p-clean","","p-icon","an an-map-pin","p-label","Address",1,"po-lg-9"],["formControlName","number","p-label","Number","p-clean","",1,"po-lg-3"],["formControlName","email","p-label","Email","p-clean","",1,"po-lg-6"],["formControlName","website","p-label","Website","p-clean","",1,"po-lg-6"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Save successful",3,"p-primary-action"],["p-label","Name",1,"po-md-12",3,"p-value"],["p-label","Address",1,"po-md-6",3,"p-value"],["p-label","Number",1,"po-md-6",3,"p-value"],["p-label","Email",1,"po-md-6",3,"p-value"],["p-label","Website",1,"po-md-6",3,"p-value"]],template:function(r,i){if(r&1){let m=I();n(0,"form",1)(1,"div",2),o(2,"po-input",3),t(),n(3,"div",2),o(4,"po-input",4)(5,"po-number",5),t(),n(6,"div",2),o(7,"po-email",6)(8,"po-url",7),t(),n(9,"div",2)(10,"po-button",8),g("p-click",function(){return c(m),u(i.saveForm())}),t()()(),n(11,"po-modal",9,0)(13,"div",2),o(14,"po-info",10),t(),o(15,"po-divider"),n(16,"div",2),o(17,"po-info",11)(18,"po-info",12),t(),o(19,"po-divider"),n(20,"div",2),o(21,"po-info",13)(22,"po-info",14),t()()}r&2&&(s("formGroup",i.reactiveForm),p(10),s("p-disabled",!i.reactiveForm.valid),p(),s("p-primary-action",i.modalPrimaryAction),p(3),s("p-value",i.reactiveForm.controls.name.value),p(3),s("p-value",i.reactiveForm.controls.address.value),p(),s("p-value",i.reactiveForm.controls.number.value),p(3),s("p-value",i.reactiveForm.controls.email.value),p(),s("p-value",i.reactiveForm.controls.website.value))},dependencies:[z,V,L,J,Y,R,N,ae,F,A,le,W,oe],encapsulation:2})}return a})();var Fe=a=>({"docs-sample-code-tabs":a}),Se=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-input-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Input - Reactive Form"),t(),n(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-input-reactive-form/sample-po-input-reactive-form.component.html"),t(),n(13,"pre",7),e(14,`<form [formGroup]="reactiveForm">
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
`),t()()()()(),n(21,"div",10),o(22,"sample-po-input-reactive-form"),t(),o(23,"hr")),r&2&&(p(5),P("po-icon "+i.sampleCodeButtonIcon),p(),_(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",M(4,Fe,i.hideSampleCodeTabs)))},dependencies:[k,w,C,y,be],encapsulation:2})}return a})();var ge=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-input-doc"]],standalone:!1,decls:1235,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
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
`),t()(),n(215,"h4",11),e(216,"Propriedades"),t(),n(217,"table",12)(218,"tr",13)(219,"th",14),e(220,"Nome"),t(),n(221,"th",14),e(222,"Tipo"),t(),n(223,"th",14),e(224,"Padr\xE3o"),t(),n(225,"th",14),e(226,"Descri\xE7\xE3o"),t()(),n(227,"tr",15)(228,"td",16)(229,"div",17)(230,"span",18),e(231," (p-additional-help)"),o(232,"br"),t()(),n(233,"div",19),e(234,"Deprecated"),t()(),n(235,"td",20)(236,"code",21),e(237,"EventEmitter"),t()(),n(238,"td",22),e(239,"-"),t(),n(240,"td",23)(241,"em")(242,"strong"),e(243,"(opcional)"),t()(),n(244,"p"),e(245,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),n(246,"code"),e(247,"p-help"),t(),e(248,"."),t(),n(249,"blockquote")(250,"p"),e(251,"Essa propriedade est\xE1 "),n(252,"strong"),e(253,"depreciada"),t(),e(254," e ser\xE1 removida na vers\xE3o "),n(255,"code"),e(256,"23.x.x"),t(),e(257,". Recomendamos utilizar a propriedade "),n(258,"code"),e(259,"p-helper"),t(),e(260," que oferece mais recursos e flexibilidade."),t()()()(),n(261,"tr",15)(262,"td",16)(263,"div",24)(264,"span",25),e(265," p-additional-help-tooltip"),o(266,"br"),t()(),n(267,"div",19),e(268,"Deprecated"),t()(),n(269,"td",20)(270,"code",26),e(271,"string"),t()(),n(272,"td",22),e(273,"-"),t(),n(274,"td",23)(275,"em")(276,"strong"),e(277,"(opcional)"),t()(),n(278,"p"),e(279,"Exibe um \xEDcone de ajuda adicional ao "),n(280,"code"),e(281,"p-help"),t(),e(282,`, com o texto desta propriedade no tooltip.
Se o evento `),n(283,"code"),e(284,"p-additional-help"),t(),e(285,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),n(286,"strong"),e(287,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(288,"blockquote")(289,"p"),e(290,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),n(291,"blockquote")(292,"p"),e(293,"Essa propriedade est\xE1 "),n(294,"strong"),e(295,"depreciada"),t(),e(296," e ser\xE1 removida na vers\xE3o "),n(297,"code"),e(298,"23.x.x"),t(),e(299,". Recomendamos utilizar a propriedade "),n(300,"code"),e(301,"p-helper"),t(),e(302," que oferece mais recursos e flexibilidade."),t()()()(),n(303,"tr",15)(304,"td",16)(305,"div",24)(306,"span",25),e(307," p-append-in-body"),o(308,"br"),t()()(),n(309,"td",20)(310,"code",27),e(311,"boolean"),t()(),n(312,"td",22)(313,"p")(314,"code"),e(315,"false"),t()()(),n(316,"td",23)(317,"em")(318,"strong"),e(319,"(opcional)"),t()(),n(320,"p"),e(321,"Define que o tooltip ("),n(322,"code"),e(323,"p-additional-help-tooltip"),t(),e(324," e/ou "),n(325,"code"),e(326,"p-error-limit"),t(),e(327,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),n(328,"blockquote")(329,"p"),e(330,"Quando utilizado com "),n(331,"code"),e(332,"p-additional-help-tooltip"),t(),e(333,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),n(334,"tr",15)(335,"td",16)(336,"div",24)(337,"span",25),e(338," p-auto-focus"),o(339,"br"),t()()(),n(340,"td",20)(341,"code",27),e(342,"boolean"),t()(),n(343,"td",22)(344,"p")(345,"code"),e(346,"false"),t()()(),n(347,"td",23)(348,"em")(349,"strong"),e(350,"(opcional)"),t()(),n(351,"p"),e(352,"Aplica foco no elemento ao ser iniciado."),t(),n(353,"blockquote")(354,"p"),e(355,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(356,"tr",15)(357,"td",16)(358,"div",17)(359,"span",18),e(360," (p-blur)"),o(361,"br"),t()()(),n(362,"td",20)(363,"code",21),e(364,"EventEmitter"),t()(),n(365,"td",22),e(366,"-"),t(),n(367,"td",23)(368,"em")(369,"strong"),e(370,"(opcional)"),t()(),n(371,"p"),e(372,"Evento disparado ao sair do campo."),t()()(),n(373,"tr",15)(374,"td",16)(375,"div",17)(376,"span",18),e(377," (p-change)"),o(378,"br"),t()()(),n(379,"td",20)(380,"code",21),e(381,"EventEmitter"),t()(),n(382,"td",22),e(383,"-"),t(),n(384,"td",23)(385,"em")(386,"strong"),e(387,"(opcional)"),t()(),n(388,"p"),e(389,"Evento disparado ao alterar valor e deixar o campo."),t()()(),n(390,"tr",15)(391,"td",16)(392,"div",17)(393,"span",18),e(394," (p-change-model)"),o(395,"br"),t()()(),n(396,"td",20)(397,"code",21),e(398,"EventEmitter"),t()(),n(399,"td",22),e(400,"-"),t(),n(401,"td",23)(402,"em")(403,"strong"),e(404,"(opcional)"),t()(),n(405,"p"),e(406,"Evento disparado ao alterar valor do model."),t()()(),n(407,"tr",15)(408,"td",16)(409,"div",24)(410,"span",25),e(411,"p-clean"),o(412,"br"),t()()(),n(413,"td",20)(414,"code",27),e(415,"boolean"),t()(),n(416,"td",22),e(417,"-"),t(),n(418,"td",23)(419,"em")(420,"strong"),e(421,"(opcional)"),t()(),n(422,"p"),e(423,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t()()(),n(424,"tr",15)(425,"td",16)(426,"div",24)(427,"span",25),e(428,"p-disabled"),o(429,"br"),t()()(),n(430,"td",20)(431,"code",27),e(432,"boolean"),t()(),n(433,"td",22)(434,"p")(435,"code"),e(436,"false"),t()()(),n(437,"td",23)(438,"em")(439,"strong"),e(440,"(opcional)"),t()(),n(441,"p"),e(442,"Se verdadeiro, desabilita o campo."),t()()(),n(443,"tr",15)(444,"td",16)(445,"div",24)(446,"span",25),e(447," p-emit-all-changes"),o(448,"br"),t()()(),n(449,"td",20)(450,"code",27),e(451,"boolean"),t()(),n(452,"td",22)(453,"p")(454,"code"),e(455,"false"),t()()(),n(456,"td",23)(457,"em")(458,"strong"),e(459,"(opcional)"),t()(),n(460,"p"),e(461,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),t()()(),n(462,"tr",15)(463,"td",16)(464,"div",17)(465,"span",18),e(466," (p-enter)"),o(467,"br"),t()()(),n(468,"td",20)(469,"code",21),e(470,"EventEmitter"),t()(),n(471,"td",22),e(472,"-"),t(),n(473,"td",23)(474,"em")(475,"strong"),e(476,"(opcional)"),t()(),n(477,"p"),e(478,"Evento disparado ao entrar do campo."),t()()(),n(479,"tr",15)(480,"td",16)(481,"div",24)(482,"span",25),e(483," p-error-async-properties"),o(484,"br"),t()()(),n(485,"td",20)(486,"code",28),e(487,"ErrorAsyncProperties"),t()(),n(488,"td",22),e(489,"-"),t(),n(490,"td",23)(491,"em")(492,"strong"),e(493,"(opcional)"),t()(),n(494,"p"),e(495,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),n(496,"code"),e(497,"Reactive Forms"),t(),e(498,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),n(499,"code"),e(500,"asyncValidators"),t(),e(501,"."),t()()(),n(502,"tr",15)(503,"td",16)(504,"div",24)(505,"span",25),e(506," p-error-limit"),o(507,"br"),t()()(),n(508,"td",20)(509,"code",27),e(510,"boolean"),t()(),n(511,"td",22)(512,"p")(513,"code"),e(514,"false"),t()()(),n(515,"td",23)(516,"em")(517,"strong"),e(518,"(opcional)"),t()(),n(519,"p"),e(520,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(521,"blockquote")(522,"p"),e(523,"Caso essa propriedade seja definida como "),n(524,"code"),e(525,"true"),t(),e(526,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),n(527,"tr",15)(528,"td",16)(529,"div",24)(530,"span",25),e(531," p-error-pattern"),o(532,"br"),t()()(),n(533,"td",20)(534,"code",26),e(535,"string"),t()(),n(536,"td",22),e(537,"-"),t(),n(538,"td",23)(539,"em")(540,"strong"),e(541,"(opcional)"),t()(),n(542,"p"),e(543,"Mensagem que ser\xE1 apresentada quando o "),n(544,"code"),e(545,"pattern"),t(),e(546," ou a m\xE1scara n\xE3o for satisfeita."),t(),n(547,"blockquote")(548,"p"),e(549,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),n(550,"code"),e(551,"p-required-field-error-message"),t(),e(552," em conjunto."),t()()()(),n(553,"tr",15)(554,"td",16)(555,"div",24)(556,"span",25),e(557," p-help"),o(558,"br"),t()()(),n(559,"td",20)(560,"code",26),e(561,"string"),t()(),n(562,"td",22),e(563,"-"),t(),n(564,"td",23)(565,"em")(566,"strong"),e(567,"(opcional)"),t()(),n(568,"p"),e(569,"Texto de apoio do campo."),t()()(),n(570,"tr",15)(571,"td",16)(572,"div",24)(573,"span",25),e(574," p-icon"),o(575,"br"),t()()(),n(576,"td",20)(577,"code",26),e(578,"string "),t(),n(579,"code",29),e(580," TemplateRef<void>"),t()(),n(581,"td",22),e(582,"-"),t(),n(583,"td",23)(584,"em")(585,"strong"),e(586,"(opcional)"),t()(),n(587,"p"),e(588,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),n(589,"p"),e(590,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(591,"a",30),e(592,"Biblioteca de \xEDcones"),t(),e(593,". conforme exemplo abaixo:"),t(),n(594,"pre")(595,"code"),e(596,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),t()(),n(597,"p"),e(598,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),n(599,"em"),e(600,"Font Awesome"),t(),e(601,", da seguinte forma:"),t(),n(602,"pre")(603,"code"),e(604,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),t()(),n(605,"p"),e(606,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(607,"code"),e(608,"TemplateRef"),t(),e(609,", conforme exemplo abaixo:"),t(),n(610,"pre")(611,"code"),e(612,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),t()(),n(613,"blockquote")(614,"p"),e(615,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),n(616,"code"),e(617,"font-size: inherit"),t(),e(618," caso o \xEDcone utilizado n\xE3o aplique-o."),t()()()(),n(619,"tr",15)(620,"td",16)(621,"div",17)(622,"span",18),e(623," (p-keydown)"),o(624,"br"),t()()(),n(625,"td",20)(626,"code",21),e(627,"EventEmitter"),t()(),n(628,"td",22),e(629,"-"),t(),n(630,"td",23)(631,"em")(632,"strong"),e(633,"(opcional)"),t()(),n(634,"p"),e(635,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(636,"code"),e(637,"KeyboardEvent"),t(),e(638," com informa\xE7\xF5es sobre a tecla."),t()()(),n(639,"tr",15)(640,"td",16)(641,"div",24)(642,"span",25),e(643," p-label"),o(644,"br"),t()()(),n(645,"td",20)(646,"code",26),e(647,"string"),t()(),n(648,"td",22),e(649,"-"),t(),n(650,"td",23)(651,"em")(652,"strong"),e(653,"(opcional)"),t()(),n(654,"p"),e(655,"R\xF3tulo do campo."),t()()(),n(656,"tr",15)(657,"td",16)(658,"div",24)(659,"span",25),e(660," p-label-text-wrap"),o(661,"br"),t()()(),n(662,"td",20)(663,"code",27),e(664,"boolean"),t()(),n(665,"td",22)(666,"p")(667,"code"),e(668,"false"),t()()(),n(669,"td",23)(670,"em")(671,"strong"),e(672,"(opcional)"),t()(),n(673,"p"),e(674,"Habilita a quebra autom\xE1tica do texto da propriedade "),n(675,"code"),e(676,"p-label"),t(),e(677,". Quando "),n(678,"code"),e(679,"p-label-text-wrap"),t(),e(680,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),n(681,"tr",15)(682,"td",16)(683,"div",24)(684,"span",25),e(685,"p-mask"),o(686,"br"),t()()(),n(687,"td",20)(688,"code",26),e(689,"string"),t()(),n(690,"td",22),e(691,"-"),t(),n(692,"td",23)(693,"em")(694,"strong"),e(695,"(opcional)"),t()(),n(696,"p"),e(697,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),t()()(),n(698,"tr",15)(699,"td",16)(700,"div",24)(701,"span",25),e(702,"p-mask-format-model"),o(703,"br"),t()()(),n(704,"td",20)(705,"code",27),e(706,"boolean"),t()(),n(707,"td",22)(708,"p")(709,"code"),e(710,"false"),t()()(),n(711,"td",23)(712,"em")(713,"strong"),e(714,"(opcional)"),t()(),n(715,"p"),e(716,"Indica se o "),n(717,"code"),e(718,"model"),t(),e(719," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),t()()(),n(720,"tr",15)(721,"td",16)(722,"div",24)(723,"span",25),e(724," p-mask-no-length-validation"),o(725,"br"),t()()(),n(726,"td",20)(727,"code",27),e(728,"boolean"),t()(),n(729,"td",22)(730,"p")(731,"code"),e(732,"false"),t()()(),n(733,"td",23)(734,"p"),e(735,"Define se os caracteres especiais da m\xE1scara devem ser ignorados ao validar os comprimentos m\xEDnimo ("),n(736,"code"),e(737,"minLength"),t(),e(738,") e m\xE1ximo ("),n(739,"code"),e(740,"maxLength"),t(),e(741,") do campo."),t(),n(742,"ul")(743,"li"),e(744,"Quando "),n(745,"code"),e(746,"true"),t(),e(747,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),t(),n(748,"li"),e(749,"Quando "),n(750,"code"),e(751,"false"),t(),e(752,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),t()(),n(753,"blockquote")(754,"p"),e(755,"Ser\xE1 ignorado essa propriedade , caso esteja utilizando junto com a propriedade "),n(756,"code"),e(757,"p-mask-format-model"),t(),e(758,"."),t()(),n(759,"p"),e(760,"Exemplo:"),t(),n(761,"pre")(762,"code"),e(763,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),t()(),n(764,"ul")(765,"li"),e(766,"Entrada: "),n(767,"code"),e(768,"123-456"),t(),e(769," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),n(770,"code"),e(771,"-"),t(),e(772,"."),t()()()(),n(773,"tr",15)(774,"td",16)(775,"div",24)(776,"span",25),e(777," p-maxlength"),o(778,"br"),t()()(),n(779,"td",20)(780,"code",31),e(781,"number"),t()(),n(782,"td",22),e(783,"-"),t(),n(784,"td",23)(785,"em")(786,"strong"),e(787,"(opcional)"),t()(),n(788,"p"),e(789,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),t()()(),n(790,"tr",15)(791,"td",16)(792,"div",24)(793,"span",25),e(794," p-minlength"),o(795,"br"),t()()(),n(796,"td",20)(797,"code",31),e(798,"number"),t()(),n(799,"td",22),e(800,"-"),t(),n(801,"td",23)(802,"em")(803,"strong"),e(804,"(opcional)"),t()(),n(805,"p"),e(806,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),t()()(),n(807,"tr",15)(808,"td",16)(809,"div",24)(810,"span",25),e(811," name"),o(812,"br"),t()()(),n(813,"td",20)(814,"code",26),e(815,"string"),t()(),n(816,"td",22),e(817,"-"),t(),n(818,"td",23)(819,"p"),e(820,"Nome e identificador do campo."),t()()(),n(821,"tr",15)(822,"td",16)(823,"div",24)(824,"span",25),e(825," p-no-autocomplete"),o(826,"br"),t()()(),n(827,"td",20)(828,"code",27),e(829,"boolean"),t()(),n(830,"td",22)(831,"p")(832,"code"),e(833,"false"),t()()(),n(834,"td",23)(835,"em")(836,"strong"),e(837,"(opcional)"),t()(),n(838,"p"),e(839,"Define a propriedade nativa "),n(840,"code"),e(841,"autocomplete"),t(),e(842," do campo como "),n(843,"code"),e(844,"off"),t(),e(845,"."),t(),n(846,"blockquote")(847,"p"),e(848,"No componente "),n(849,"code"),e(850,"po-password"),t(),e(851," ser\xE1 definido como "),n(852,"code"),e(853,"new-password"),t(),e(854,"."),t()(),n(855,"p"),e(856,"Nos componentes "),n(857,"code"),e(858,"po-password"),t(),e(859," e "),n(860,"code"),e(861,"po-login"),t(),e(862," o valor padr\xE3o ser\xE1 "),n(863,"code"),e(864,"true"),t(),e(865,"."),t()()(),n(866,"tr",15)(867,"td",16)(868,"div",24)(869,"span",25),e(870," p-optional"),o(871,"br"),t()()(),n(872,"td",20)(873,"code",27),e(874,"boolean"),t()(),n(875,"td",22)(876,"p")(877,"code"),e(878,"false"),t()()(),n(879,"td",23)(880,"em")(881,"strong"),e(882,"(opcional)"),t()(),n(883,"p"),e(884,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(885,"blockquote")(886,"p"),e(887,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(888,"ul")(889,"li"),e(890,"O campo conter "),n(891,"code"),e(892,"p-required"),t(),e(893,";"),t(),n(894,"li"),e(895,"N\xE3o possuir "),n(896,"code"),e(897,"p-help"),t(),e(898," e/ou "),n(899,"code"),e(900,"p-label"),t(),e(901,"."),t()()()(),n(902,"tr",15)(903,"td",16)(904,"div",24)(905,"span",25),e(906,"p-pattern"),o(907,"br"),t()()(),n(908,"td",20)(909,"code",26),e(910,"string"),t()(),n(911,"td",22),e(912,"-"),t(),n(913,"td",23)(914,"em")(915,"strong"),e(916,"(opcional)"),t()(),n(917,"p"),e(918,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),n(919,"code"),e(920,"(p-mask)"),t(),e(921,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),t()()(),n(922,"tr",15)(923,"td",16)(924,"div",24)(925,"span",25),e(926," p-placeholder"),o(927,"br"),t()()(),n(928,"td",20)(929,"code",26),e(930,"string"),t()(),n(931,"td",22)(932,"p"),e(933,"''"),t()(),n(934,"td",23)(935,"em")(936,"strong"),e(937,"(opcional)"),t()(),n(938,"p"),e(939,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(940,"tr",15)(941,"td",16)(942,"div",24)(943,"span",25),e(944," p-helper"),o(945,"br"),t()()(),n(946,"td",20)(947,"code",32),e(948,"PoHelperOptions "),t(),n(949,"code",26),e(950," string"),t()(),n(951,"td",22),e(952,"-"),t(),n(953,"td",23)(954,"em")(955,"strong"),e(956,"(opcional)"),t()(),n(957,"p"),e(958,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label."),t(),n(959,"blockquote")(960,"p"),e(961,"Caso o "),n(962,"code"),e(963,"p-label"),t(),e(964,` n\xE3o esteja definido, o componente po-helper n\xE3o ser\xE1 exibido.
Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional (`),n(965,"code"),e(966,"p-additional-help-tooltip"),t(),e(967," e "),n(968,"code"),e(969,"p-additional-help"),t(),e(970,") ser\xE1 ignorado."),t()()()(),n(971,"tr",15)(972,"td",16)(973,"div",24)(974,"span",25),e(975,"p-readonly"),o(976,"br"),t()()(),n(977,"td",20)(978,"code",27),e(979,"boolean"),t()(),n(980,"td",22),e(981,"-"),t(),n(982,"td",23)(983,"em")(984,"strong"),e(985,"(opcional)"),t()(),n(986,"p"),e(987,"Indica que o campo ser\xE1 somente leitura."),t()()(),n(988,"tr",15)(989,"td",16)(990,"div",24)(991,"span",25),e(992,"p-required"),o(993,"br"),t()()(),n(994,"td",20)(995,"code",27),e(996,"boolean"),t()(),n(997,"td",22)(998,"p")(999,"code"),e(1e3,"false"),t()()(),n(1001,"td",23)(1002,"em")(1003,"strong"),e(1004,"(opcional)"),t()(),n(1005,"p"),e(1006,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),n(1007,"blockquote")(1008,"p"),e(1009,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),n(1010,"code"),e(1011,"(p-disabled)"),t(),e(1012,"."),t()()()(),n(1013,"tr",15)(1014,"td",16)(1015,"div",24)(1016,"span",25),e(1017," p-required-field-error-message"),o(1018,"br"),t()()(),n(1019,"td",20)(1020,"code",27),e(1021,"boolean"),t()(),n(1022,"td",22)(1023,"p")(1024,"code"),e(1025,"false"),t()()(),n(1026,"td",23)(1027,"em")(1028,"strong"),e(1029,"(opcional)"),t()(),n(1030,"p"),e(1031,"Exibe a mensagem setada na propriedade "),n(1032,"code"),e(1033,"p-error-pattern"),t(),e(1034," se o campo estiver vazio e for requerido."),t(),n(1035,"blockquote")(1036,"p"),e(1037,"Necess\xE1rio que a propriedade "),n(1038,"code"),e(1039,"p-required"),t(),e(1040," esteja habilitada."),t()()()(),n(1041,"tr",15)(1042,"td",16)(1043,"div",24)(1044,"span",25),e(1045," p-show-required"),o(1046,"br"),t()()(),n(1047,"td",20)(1048,"code",27),e(1049,"boolean"),t()(),n(1050,"td",22),e(1051,"-"),t(),n(1052,"td",23)(1053,"p"),e(1054,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(1055,"blockquote")(1056,"p"),e(1057,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(1058,"ul")(1059,"li"),e(1060,"N\xE3o possuir "),n(1061,"code"),e(1062,"p-help"),t(),e(1063," e/ou "),n(1064,"code"),e(1065,"p-label"),t(),e(1066,"."),t()()()(),n(1067,"tr",15)(1068,"td",16)(1069,"div",24)(1070,"span",25),e(1071," p-size"),o(1072,"br"),t()()(),n(1073,"td",20)(1074,"code",26),e(1075,"string"),t()(),n(1076,"td",22)(1077,"p")(1078,"code"),e(1079,"medium"),t()()(),n(1080,"td",23)(1081,"em")(1082,"strong"),e(1083,"(opcional)"),t()(),n(1084,"p"),e(1085,"Define o tamanho do componente:"),t(),n(1086,"ul")(1087,"li")(1088,"code"),e(1089,"small"),t(),e(1090,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(1091,"li")(1092,"code"),e(1093,"medium"),t(),e(1094,": altura do input como 44px."),t()(),n(1095,"blockquote")(1096,"p"),e(1097,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(1098,"code"),e(1099,"medium"),t(),e(1100,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(1101,"a",33),e(1102,"po-theme"),t(),e(1103,"."),t()()()(),n(1104,"tr",15)(1105,"td",16)(1106,"div",24)(1107,"span",25),e(1108," p-upper-case"),o(1109,"br"),t()()(),n(1110,"td",20)(1111,"code",27),e(1112,"boolean"),t()(),n(1113,"td",22),e(1114,"-"),t(),n(1115,"td",23)(1116,"p"),e(1117,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),t()()()(),n(1118,"h3",11),e(1119,"M\xE9todos"),t(),n(1120,"table",34)(1121,"tr",15)(1122,"th",35)(1123,"div",24)(1124,"h4")(1125,"span",25),e(1126," showAdditionalHelp "),t()()()()(),n(1127,"tr",23)(1128,"td",23)(1129,"p"),e(1130,"M\xE9todo que exibe "),n(1131,"code"),e(1132,"p-additionalHelpTooltip"),t(),e(1133," ou executa a a\xE7\xE3o definida em "),n(1134,"code"),e(1135,"p-additionalHelp"),t(),e(1136,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),n(1137,"code"),e(1138,"p-keydown"),t(),e(1139,"."),t(),n(1140,"blockquote")(1141,"p"),e(1142,"Exibe ou oculta o conte\xFAdo do componente "),n(1143,"code"),e(1144,"po-helper"),t(),e(1145," quando o componente estiver com foco e com label vis\xEDvel."),t()(),n(1146,"pre")(1147,"code"),e(1148,`<po-nome-component
 #component
 ...
 p-additional-help-tooltip="Mensagem de ajuda complementar"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),t()(),n(1149,"pre")(1150,"code"),e(1151,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),t()(),n(1152,"pre")(1153,"code"),e(1154,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),o(1155,"br"),n(1156,"table",34)(1157,"tr",15)(1158,"th",35)(1159,"div",24)(1160,"h4")(1161,"span",25),e(1162," focus "),t()()()()(),n(1163,"tr",23)(1164,"td",23)(1165,"p"),e(1166,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(1167,"p"),e(1168,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(1169,"pre")(1170,"code"),e(1171,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),t()()()()(),o(1172,"br"),n(1173,"h3"),e(1174,"Interfaces"),t(),n(1175,"h4",36)(1176,"code",5),e(1177,"ErrorAsyncProperties"),t()(),n(1178,"div",2)(1179,"p"),e(1180,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),t()(),n(1181,"h4",11),e(1182,"Propriedades"),t(),n(1183,"table",12)(1184,"tr",13)(1185,"th",14),e(1186,"Nome"),t(),n(1187,"th",14),e(1188,"Tipo"),t(),n(1189,"th",14),e(1190,"Descri\xE7\xE3o"),t()(),n(1191,"tr",15)(1192,"td",16)(1193,"div",24)(1194,"span",25),e(1195," errorAsync"),o(1196,"br"),t()()(),n(1197,"td",20)(1198,"code",37),e(1199,"(value) => Observable<boolean>"),t()(),n(1200,"td",23)(1201,"p"),e(1202,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(1203,"code"),e(1204,"change"),t(),e(1205," ou "),n(1206,"code"),e(1207,"change-model"),t(),e(1208,", dependendo do valor da propriedade "),n(1209,"code"),e(1210,"triggerMode"),t(),e(1211,"."),t()()(),n(1212,"tr",15)(1213,"td",16)(1214,"div",24)(1215,"span",25),e(1216," triggerMode"),o(1217,"br"),t()()(),n(1218,"td",20)(1219,"code",38),e(1220,"'change' "),t(),n(1221,"code",39),e(1222," 'changeModel'"),t()(),n(1223,"td",23)(1224,"em")(1225,"strong"),e(1226,"(opcional)"),t()(),n(1227,"p"),e(1228,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),n(1229,"code"),e(1230,"change"),t(),e(1231," ou "),n(1232,"code"),e(1233,"change-model"),t(),e(1234,"."),t()()()()())},dependencies:[w],encapsulation:2})}return a})();var xe=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||a)(O(ee),O(te))};static \u0275cmp=b({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Input",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),g("p-click",function(){return i.changeTab("doc")}),o(3,"sample-po-input-doc"),t(),n(4,"po-tab",3),g("p-click",function(){return i.changeTab("web")}),o(5,"sample-po-input-basic-view")(6,"sample-po-input-labs-view")(7,"sample-po-input-reactive-form-view"),t()()()),r&2&&(s("p-actions",i.actions),p(2),s("p-active",i.activeTab==="doc"),p(2),s("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[pe,C,y,ce,Ee,Se,ge],encapsulation:2})}return a})();var De=[{path:"",component:xe}],ve=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=D({type:a});static \u0275inj=T({imports:[B.forChild(De),B]})}return a})();var lt=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=D({type:a});static \u0275inj=T({imports:[me,ve]})}return a})();export{lt as DocPoInputModule};
