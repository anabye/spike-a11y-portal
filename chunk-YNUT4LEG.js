import{o as C,p as Me}from"./chunk-KTXVLMHP.js";import{Ab as x,Fa as ye,J as ve,Ka as xe,La as T,O as ge,Q as R,S as ee,Sa as ie,U as te,Xa as L,a as j,m as Se,nb as Ce,v as k,za as fe,zb as y}from"./chunk-4M2FSNLW.js";import{$c as ae,Aa as m,Da as M,Dc as J,Fb as w,Gc as A,Ha as X,Hc as I,Ic as $,Jc as O,Kc as H,La as i,M as re,Ma as t,N as K,Na as l,Nc as ce,Oc as ue,Q as B,Ra as W,Sa as u,Sb as Z,Sc as be,U as b,V as h,Xc as he,Zc as Ee,a as Q,bb as D,bc as de,cb as e,db as se,eb as P,gb as S,hb as v,ib as g,ja as p,ka as oe,mb as me,ob as _,p as ne,qa as E,ra as Y,ub as N,wa as le,xb as z}from"./chunk-CBLD3XJL.js";var Pe=(()=>{class o{options=[{value:"poMultiselect1",label:"PO Multiselect 1"},{value:"poMultiselect2",label:"PO Multiselect 2"}];static \u0275fac=function(a){return new(a||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-multiselect-basic"]],standalone:!1,decls:1,vars:1,consts:[["name","multiselect","p-label","PO Multiselect",3,"p-options"]],template:function(a,n){a&1&&l(0,"po-multiselect",0),a&2&&m("p-options",n.options)},dependencies:[T],encapsulation:2})}return o})();var je=o=>({"docs-sample-code-tabs":o}),_e=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-multiselect-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(l(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Multiselect Basic"),t(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-multiselect-basic/sample-po-multiselect-basic.component.html"),t(),i(13,"pre",7),e(14,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="options"> </po-multiselect>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-multiselect-basic/sample-po-multiselect-basic.component.ts"),t(),i(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoMultiselectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-basic',
  templateUrl: './sample-po-multiselect-basic.component.html',
  standalone: false
})
export class SamplePoMultiselectBasicComponent {
  options: Array<PoMultiselectOption> = [
    { value: 'poMultiselect1', label: 'PO Multiselect 1' },
    { value: 'poMultiselect2', label: 'PO Multiselect 2' }
  ];
}
`),t()()()()(),i(21,"div",10),l(22,"sample-po-multiselect-basic"),t(),l(23,"hr")),a&2&&(p(5),M("po-icon "+n.sampleCodeButtonIcon),p(),P(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,je,n.hideSampleCodeTabs)))},dependencies:[w,C,y,x,Pe],encapsulation:2})}return o})();var we=(()=>{class o{helperText;customLiterals;event;filterMode;help;label;literals;multiselect;option;options;placeholder;placeholderSearch;properties;fieldErrorMessage;filterService;fieldLabel;fieldValue;size;listboxPosition="bottom";filterModeOptions=[{label:"Starts With",value:"startsWith"},{label:"Contains",value:"contains"},{label:"Ends With",value:"endsWith"}];listboxPositionOptions=[{label:"top",value:"top"},{label:"bottom",value:"bottom"}];propertiesOptions=[{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"hideSearch",label:"Hide Search"},{value:"autoHeight",label:"Auto Height"},{value:"sort",label:"Sort"},{value:"hideSelectAll",label:"Hide Select All"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}addOption(){this.options=[...this.options,Q({},this.option)],this.option={label:void 0,value:void 0}}changeEvent(s){this.event=s}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}restore(){this.helperText="",this.customLiterals=void 0,this.help="",this.filterMode=void 0,this.label=void 0,this.literals="",this.placeholder="",this.placeholderSearch=void 0,this.properties=[],this.fieldErrorMessage="",this.filterService="",this.fieldLabel="",this.fieldValue="",this.option={label:void 0,value:void 0},this.options=[],this.event="",this.multiselect=[],this.size="medium"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-multiselect-labs"]],standalone:!1,decls:33,vars:49,consts:[["fOption","ngForm"],["f","ngForm"],[1,"po-row"],["name","PO Multiselect",1,"po-md-12",3,"ngModelChange","p-change","p-keydown","ngModel","p-helper","p-auto-height","p-disabled","p-field-label","p-field-value","p-filter-service","p-filter-mode","p-help","p-hide-search","p-hide-select-all","p-label","p-literals","p-optional","p-options","p-placeholder","p-placeholder-search","p-required","p-field-error-message","p-show-required","p-size","p-sort","p-listbox-control-position","p-error-limit","p-label-text-wrap"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Events",1,"po-md-6",3,"p-value"],["name","optionLabel","p-label","Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","optionValue","p-label","Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Option",1,"po-md-4","po-lg-2",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholderSearch","p-clean","","p-label","Placeholder Search",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: {"noData": "Sem dados a serem exibidos", "placeholderSearch": "Buscar"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","filterService","p-clean","","p-help","https://po-sample-api.onrender.com/v1/heroes","p-label","Filter Service",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","fieldValue","p-clean","","p-label","Field Value",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldLabel","p-clean","","p-label","Field Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","filterMode","p-columns","4","p-label","Filter mode",1,"po-md-12",3,"ngModelChange","ngModel","p-disabled","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","listboxPosition","p-label","Listbox Position",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(a,n){if(a&1){let c=W();i(0,"div",2)(1,"po-multiselect",3),g("ngModelChange",function(r){return b(c),v(n.multiselect,r)||(n.multiselect=r),h(r)}),u("p-change",function(){return b(c),h(n.changeEvent("p-change"))})("p-keydown",function(){return b(c),h(n.changeEvent("p-keydown"))}),t()(),l(2,"po-divider"),i(3,"div",2),l(4,"po-info",4)(5,"po-info",5),t(),l(6,"po-divider"),i(7,"form",null,0)(9,"div",2)(10,"po-input",6),g("ngModelChange",function(r){return b(c),v(n.option.label,r)||(n.option.label=r),h(r)}),t(),i(11,"po-input",7),g("ngModelChange",function(r){return b(c),v(n.option.value,r)||(n.option.value=r),h(r)}),t()(),i(12,"div",2)(13,"po-button",8),u("p-click",function(){return b(c),h(n.addOption())}),t()()(),l(14,"po-divider"),i(15,"form",null,1)(17,"po-input",9),g("ngModelChange",function(r){return b(c),v(n.label,r)||(n.label=r),h(r)}),t(),i(18,"po-input",10),g("ngModelChange",function(r){return b(c),v(n.help,r)||(n.help=r),h(r)}),t(),i(19,"po-input",11),g("ngModelChange",function(r){return b(c),v(n.helperText,r)||(n.helperText=r),h(r)}),t(),i(20,"po-input",12),g("ngModelChange",function(r){return b(c),v(n.placeholder,r)||(n.placeholder=r),h(r)}),t(),i(21,"po-input",13),g("ngModelChange",function(r){return b(c),v(n.placeholderSearch,r)||(n.placeholderSearch=r),h(r)}),t(),i(22,"po-input",14),g("ngModelChange",function(r){return b(c),v(n.fieldErrorMessage,r)||(n.fieldErrorMessage=r),h(r)}),t(),i(23,"po-input",15),g("ngModelChange",function(r){return b(c),v(n.literals,r)||(n.literals=r),h(r)}),u("p-change",function(){return b(c),h(n.changeLiterals())}),t(),i(24,"po-input",16),g("ngModelChange",function(r){return b(c),v(n.filterService,r)||(n.filterService=r),h(r)}),t(),i(25,"po-input",17),g("ngModelChange",function(r){return b(c),v(n.fieldValue,r)||(n.fieldValue=r),h(r)}),t(),i(26,"po-input",18),g("ngModelChange",function(r){return b(c),v(n.fieldLabel,r)||(n.fieldLabel=r),h(r)}),t(),i(27,"po-checkbox-group",19),g("ngModelChange",function(r){return b(c),v(n.properties,r)||(n.properties=r),h(r)}),t(),i(28,"po-radio-group",20),g("ngModelChange",function(r){return b(c),v(n.filterMode,r)||(n.filterMode=r),h(r)}),t(),i(29,"po-radio-group",21),g("ngModelChange",function(r){return b(c),v(n.size,r)||(n.size=r),h(r)}),t(),i(30,"po-radio-group",22),g("ngModelChange",function(r){return b(c),v(n.listboxPosition,r)||(n.listboxPosition=r),h(r)}),t(),i(31,"div",2)(32,"po-button",23),u("p-click",function(){return b(c),h(n.restore())}),t()()()}if(a&2){let c=D(8);p(),S("ngModel",n.multiselect),m("p-helper",n.helperText)("p-auto-height",n.properties.includes("autoHeight"))("p-disabled",n.properties.includes("disabled"))("p-field-label",n.fieldLabel)("p-field-value",n.fieldValue)("p-filter-service",n.filterService)("p-filter-mode",n.filterMode)("p-help",n.help)("p-hide-search",n.properties.includes("hideSearch"))("p-hide-select-all",n.properties.includes("hideSelectAll"))("p-label",n.label)("p-literals",n.customLiterals)("p-optional",n.properties.includes("optional"))("p-options",n.options)("p-placeholder",n.placeholder)("p-placeholder-search",n.placeholderSearch)("p-required",n.properties.includes("required"))("p-field-error-message",n.fieldErrorMessage)("p-show-required",n.properties.includes("showRequired"))("p-size",n.size)("p-sort",n.properties.includes("sort"))("p-listbox-control-position",n.listboxPosition)("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit"))("p-label-text-wrap",n.properties==null?null:n.properties.includes("labelTextWrap")),p(3),m("p-value",n.multiselect),p(),m("p-value",n.event),p(5),S("ngModel",n.option.label),p(),S("ngModel",n.option.value),p(2),m("p-disabled",c.form.invalid),p(4),S("ngModel",n.label),p(),S("ngModel",n.help),p(),S("ngModel",n.helperText),p(),S("ngModel",n.placeholder),p(),S("ngModel",n.placeholderSearch),p(),S("ngModel",n.fieldErrorMessage),p(),S("ngModel",n.literals),p(),S("ngModel",n.filterService),p(),S("ngModel",n.fieldValue),p(),S("ngModel",n.fieldLabel),p(),S("ngModel",n.properties),m("p-options",n.propertiesOptions),p(),S("ngModel",n.filterMode),m("p-disabled",n.properties.includes("hideSearch"))("p-options",n.filterModeOptions),p(),S("ngModel",n.size),m("p-options",n.sizeOptions),p(),S("ngModel",n.listboxPosition),m("p-options",n.listboxPositionOptions)}},dependencies:[H,A,I,O,$,k,j,ge,R,ye,T,L],encapsulation:2})}return o})();var Ue=o=>({"docs-sample-code-tabs":o}),Te=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-multiselect-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(l(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Multiselect Labs"),t(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-multiselect-labs/sample-po-multiselect-labs.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
  <po-multiselect
    class="po-md-12"
    name="PO Multiselect"
    [(ngModel)]="multiselect"
    [p-helper]="helperText"
    [p-auto-height]="properties.includes('autoHeight')"
    [p-disabled]="properties.includes('disabled')"
    [p-field-label]="fieldLabel"
    [p-field-value]="fieldValue"
    [p-filter-service]="filterService"
    [p-filter-mode]="filterMode"
    [p-help]="help"
    [p-hide-search]="properties.includes('hideSearch')"
    [p-hide-select-all]="properties.includes('hideSelectAll')"
    [p-label]="label"
    [p-literals]="customLiterals"
    [p-optional]="properties.includes('optional')"
    [p-options]="options"
    [p-placeholder]="placeholder"
    [p-placeholder-search]="placeholderSearch"
    [p-required]="properties.includes('required')"
    [p-field-error-message]="fieldErrorMessage"
    [p-show-required]="properties.includes('showRequired')"
    [p-size]="size"
    [p-sort]="properties.includes('sort')"
    [p-listbox-control-position]="listboxPosition"
    (p-change)="changeEvent('p-change')"
    (p-keydown)="changeEvent('p-keydown')"
    [p-error-limit]="properties?.includes('errorLimit')"
    [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  >
  </po-multiselect>
</div>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="multiselect"> </po-info>

  <po-info class="po-md-6" p-label="Events" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #fOption="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="optionLabel" [(ngModel)]="option.label" p-label="Option Label" p-required>
    </po-input>

    <po-input class="po-md-6" name="optionValue" [(ngModel)]="option.value" p-label="Option Value" p-required>
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-md-4 po-lg-2" p-label="Add Option" [p-disabled]="fOption.form.invalid" (p-click)="addOption()">
    </po-button>
  </div>
</form>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input
    class="po-md-6"
    name="placeholderSearch"
    [(ngModel)]="placeholderSearch"
    p-clean
    p-label="Placeholder Search"
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

  <po-input
    class="po-md-12 po-lg-6"
    name="literals"
    [(ngModel)]="literals"
    p-help='Ex.: {"noData": "Sem dados a serem exibidos", "placeholderSearch": "Buscar"}'
    p-label="Literals"
    (p-change)="changeLiterals()"
  >
  </po-input>

  <po-input
    class="po-md-12 po-lg-6"
    name="filterService"
    [(ngModel)]="filterService"
    p-clean
    p-help="https://po-sample-api.onrender.com/v1/heroes"
    p-label="Filter Service"
  >
  </po-input>

  <po-input class="po-md-6" name="fieldValue" [(ngModel)]="fieldValue" p-clean p-label="Field Value"> </po-input>

  <po-input class="po-md-6" name="fieldLabel" [(ngModel)]="fieldLabel" p-clean p-label="Field Label"> </po-input>

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
    name="filterMode"
    [(ngModel)]="filterMode"
    p-columns="4"
    p-label="Filter mode"
    [p-disabled]="properties.includes('hideSearch')"
    [p-options]="filterModeOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-lg-6"
    name="size"
    [(ngModel)]="size"
    p-columns="4"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-lg-6"
    name="listboxPosition"
    [(ngModel)]="listboxPosition"
    p-label="Listbox Position"
    [p-options]="listboxPositionOptions"
  ></po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-multiselect-labs/sample-po-multiselect-labs.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoMultiselectLiterals,
  PoMultiselectOption,
  PoRadioGroupOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-labs',
  templateUrl: './sample-po-multiselect-labs.component.html',
  standalone: false
})
export class SamplePoMultiselectLabsComponent implements OnInit {
  helperText: string;
  customLiterals: PoMultiselectLiterals;
  event: string;
  filterMode: string;
  help: string;
  label: string;
  literals: string;
  multiselect: Array<string>;
  option: PoMultiselectOption;
  options: Array<PoMultiselectOption>;
  placeholder: string;
  placeholderSearch: string;
  properties: Array<string>;
  fieldErrorMessage: string;
  filterService: string;
  fieldLabel: string;
  fieldValue: string;
  size: string;
  listboxPosition: string = 'bottom';

  public readonly filterModeOptions: Array<PoRadioGroupOption> = [
    { label: 'Starts With', value: 'startsWith' },
    { label: 'Contains', value: 'contains' },
    { label: 'Ends With', value: 'endsWith' }
  ];

  public readonly listboxPositionOptions: Array<any> = [
    { label: 'top', value: 'top' },
    { label: 'bottom', value: 'bottom' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'optional', label: 'Optional' },
    { value: 'hideSearch', label: 'Hide Search' },
    { value: 'autoHeight', label: 'Auto Height' },
    { value: 'sort', label: 'Sort' },
    { value: 'hideSelectAll', label: 'Hide Select All' },
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
    this.options = [...this.options, { ...this.option }];
    this.option = { label: undefined, value: undefined };
  }

  changeEvent(event: string) {
    this.event = event;
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  restore() {
    this.helperText = '';
    this.customLiterals = undefined;
    this.help = '';
    this.filterMode = undefined;
    this.label = undefined;
    this.literals = '';
    this.placeholder = '';
    this.placeholderSearch = undefined;
    this.properties = [];
    this.fieldErrorMessage = '';
    this.filterService = '';
    this.fieldLabel = '';
    this.fieldValue = '';

    this.option = { label: undefined, value: undefined };
    this.options = [];

    this.event = '';
    this.multiselect = [];
    this.size = 'medium';
  }
}
`),t()()()()(),i(21,"div",10),l(22,"sample-po-multiselect-labs"),t(),l(23,"hr")),a&2&&(p(5),M("po-icon "+n.sampleCodeButtonIcon),p(),P(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,Ue,n.hideSampleCodeTabs)))},dependencies:[w,C,y,x,we],encapsulation:2})}return o})();var Ve=(()=>{class o{days;employeesVacations=[];finalPeriod;initialPeriod;nameEmployeesVacations;employees=[{value:"412341",label:"Alfred"},{value:"518734",label:"Alice"},{value:"986237",label:"Bradley"},{value:"941278",label:"Jackie"},{value:"897643",label:"Phillip"},{value:"423767",label:"Reynold"},{value:"423837",label:"Robert"}];daysOptions=[{value:10,label:"10"},{value:20,label:"20"},{value:30,label:"30"}];ngOnInit(){this.clean()}clean(){this.days=20,this.initialPeriod=void 0,this.finalPeriod=void 0,this.employeesVacations=[]}updateNameEmployeesVacations(){this.nameEmployeesVacations=this.employees.filter(s=>this.employeesVacations.includes(s.value)).map(s=>s.label).join(", ")}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-multiselect-vacation"]],standalone:!1,decls:26,vars:20,consts:[["f","ngForm"],["modalEmployeesVacation",""],[1,"po-row"],["name","initialPeriod","p-label","Initial period","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","finalPeriod","p-label","Final period","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-min-date"],["name","days","p-help","Maximum of days that employs can choose","p-label","How many days of vacation the employees will be able to have?","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","employeesVacations","p-label","Select your employees for collective vacations","p-required","",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","Approve Vacations","p-label","Approve Vacations",1,"po-md-4","po-offset-md-5","po-offset-lg-5","po-offset-xl-5",3,"p-click","p-disabled"],["p-label","Clean",1,"po-md-3",3,"p-click"],["p-title","Collective Vacation"],["p-label","Initial period",1,"po-md-5",3,"p-value"],["p-label","Final period",1,"po-md-5",3,"p-value"],["p-label","Days",1,"po-md-2",3,"p-value"],["p-label","Employees",1,"po-lg-12",3,"p-value"]],template:function(a,n){if(a&1){let c=W();i(0,"form",null,0)(2,"h3"),e(3,"Collective vacations"),t(),l(4,"po-divider"),i(5,"div",2)(6,"po-datepicker",3),g("ngModelChange",function(r){return b(c),v(n.initialPeriod,r)||(n.initialPeriod=r),h(r)}),t(),i(7,"po-datepicker",4),g("ngModelChange",function(r){return b(c),v(n.finalPeriod,r)||(n.finalPeriod=r),h(r)}),t()(),i(8,"div",2)(9,"po-radio-group",5),g("ngModelChange",function(r){return b(c),v(n.days,r)||(n.days=r),h(r)}),t()(),i(10,"div",2)(11,"po-multiselect",6),g("ngModelChange",function(r){return b(c),v(n.employeesVacations,r)||(n.employeesVacations=r),h(r)}),t()(),i(12,"div",2)(13,"po-button",7),u("p-click",function(){b(c);let r=D(16);return n.updateNameEmployeesVacations(),h(r.open())}),t(),i(14,"po-button",8),u("p-click",function(){return b(c),h(n.clean())}),t()()(),i(15,"po-modal",9,1)(17,"div",2),l(18,"po-info",10),N(19,"date"),l(20,"po-info",11),N(21,"date"),l(22,"po-info",12),t(),l(23,"po-divider"),i(24,"div",2),l(25,"po-info",13),t()()}if(a&2){let c=D(1);p(6),S("ngModel",n.initialPeriod),p(),S("ngModel",n.finalPeriod),m("p-min-date",n.initialPeriod),p(2),S("ngModel",n.days),m("p-options",n.daysOptions),p(2),S("ngModel",n.employeesVacations),m("p-options",n.employees),p(2),m("p-disabled",c.form.invalid),p(5),m("p-value",z(19,12,n.initialPeriod,"longDate","+0000")),p(2),m("p-value",z(21,16,n.finalPeriod,"longDate","+0000")),p(2),m("p-value",n.days),p(3),m("p-value",n.nameEmployeesVacations)}},dependencies:[H,A,I,O,$,k,j,R,ee,T,L,te,Z],encapsulation:2})}return o})();var Ke=o=>({"docs-sample-code-tabs":o}),Ae=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-multiselect-vacation-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(l(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Multiselect - Vacation"),t(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-multiselect-vacation/sample-po-multiselect-vacation.component.html"),t(),i(13,"pre",7),e(14,`<form #f="ngForm">
  <h3>Collective vacations</h3>

  <po-divider />

  <div class="po-row">
    <po-datepicker class="po-md-6" name="initialPeriod" [(ngModel)]="initialPeriod" p-label="Initial period" p-required>
    </po-datepicker>

    <po-datepicker
      class="po-md-6"
      name="finalPeriod"
      [(ngModel)]="finalPeriod"
      p-label="Final period"
      p-required
      [p-min-date]="initialPeriod"
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-lg-12"
      name="days"
      [(ngModel)]="days"
      p-help="Maximum of days that employs can choose"
      p-label="How many days of vacation the employees will be able to have?"
      p-required
      [p-options]="daysOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-multiselect
      class="po-md-12"
      name="employeesVacations"
      [(ngModel)]="employeesVacations"
      p-label="Select your employees for collective vacations"
      [p-options]="employees"
      p-required
    >
    </po-multiselect>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-4 po-offset-md-5 po-offset-lg-5 po-offset-xl-5"
      name="Approve Vacations"
      p-label="Approve Vacations"
      [p-disabled]="f.form.invalid"
      (p-click)="updateNameEmployeesVacations(); modalEmployeesVacation.open()"
    >
    </po-button>

    <po-button class="po-md-3" p-label="Clean" (p-click)="clean()"> </po-button>
  </div>
</form>

<po-modal #modalEmployeesVacation p-title="Collective Vacation">
  <div class="po-row">
    <po-info class="po-md-5" p-label="Initial period" [p-value]="initialPeriod | date: 'longDate' : '+0000'"> </po-info>

    <po-info class="po-md-5" p-label="Final period" [p-value]="finalPeriod | date: 'longDate' : '+0000'"> </po-info>

    <po-info class="po-md-2" p-label="Days" [p-value]="days"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-lg-12" p-label="Employees" [p-value]="nameEmployeesVacations"> </po-info>
  </div>
</po-modal>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-multiselect-vacation/sample-po-multiselect-vacation.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoMultiselectOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-vacation',
  templateUrl: './sample-po-multiselect-vacation.component.html',
  standalone: false
})
export class SamplePoMultiselectVacationComponent implements OnInit {
  days: number;
  employeesVacations: Array<string> = [];
  finalPeriod: Date;
  initialPeriod: Date;
  nameEmployeesVacations: string;

  public readonly employees: Array<PoMultiselectOption> = [
    { value: '412341', label: 'Alfred' },
    { value: '518734', label: 'Alice' },
    { value: '986237', label: 'Bradley' },
    { value: '941278', label: 'Jackie' },
    { value: '897643', label: 'Phillip' },
    { value: '423767', label: 'Reynold' },
    { value: '423837', label: 'Robert' }
  ];

  public daysOptions: Array<PoRadioGroupOption> = [
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 30, label: '30' }
  ];

  ngOnInit() {
    this.clean();
  }

  clean() {
    this.days = 20;
    this.initialPeriod = undefined;
    this.finalPeriod = undefined;
    this.employeesVacations = [];
  }

  updateNameEmployeesVacations() {
    this.nameEmployeesVacations = this.employees
      .filter((employee: PoMultiselectOption) => this.employeesVacations.includes(<string>employee.value))
      .map((employee: PoMultiselectOption) => employee.label)
      .join(', ');
  }
}
`),t()()()()(),i(21,"div",10),l(22,"sample-po-multiselect-vacation"),t(),l(23,"hr")),a&2&&(p(5),M("po-icon "+n.sampleCodeButtonIcon),p(),P(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,Ke,n.hideSampleCodeTabs)))},dependencies:[w,C,y,x,Ve],encapsulation:2})}return o})();var Oe=(()=>{class o{formBuilder=B(be);days;employeesVacations=[];finalPeriod;formCollectiveVacations;initialPeriod;nameEmployeesVacations;employees=[{value:"412341",label:"Alfred"},{value:"518734",label:"Alice"},{value:"986237",label:"Bradley"},{value:"941278",label:"Jackie"},{value:"112333",label:"Jane"},{value:"989898",label:"John"},{value:"897643",label:"Phillip"},{value:"423767",label:"Reynold"},{value:"423837",label:"Robert"}];daysOptions=[{value:10,label:"10"},{value:20,label:"20"},{value:30,label:"30"}];ngOnInit(){this.formCollectiveVacations=this.formBuilder.group({initialPeriod:[null,J.required],finalPeriod:[null,J.required],days:[null,J.required],employeesVacations:[null,J.required]}),this.clean()}clean(){this.formCollectiveVacations.patchValue({days:20,initialPeriod:void 0,finalPeriod:void 0,employeesVacations:void 0})}getRangeFinalPeriod(){return this.formCollectiveVacations.get("initialPeriod").value}updateEmployeesVacations(){this.nameEmployeesVacations=this.employees.filter(s=>this.formCollectiveVacations.get("employeesVacations").value.includes(s.value)).map(s=>s.label).join(", "),this.initialPeriod=this.formCollectiveVacations.get("initialPeriod").value,this.finalPeriod=this.formCollectiveVacations.get("finalPeriod").value,this.days=this.formCollectiveVacations.get("days").value}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-multiselect-vacation-reactive-form"]],standalone:!1,decls:24,vars:20,consts:[["modalEmployeesVacation",""],[3,"formGroup"],[1,"po-row"],["name","initialPeriod","formControlName","initialPeriod","p-label","Initial period","p-required","",1,"po-md-6"],["name","finalPeriod","formControlName","finalPeriod","p-label","Final period","p-required","",1,"po-md-6",3,"p-min-date"],["name","employeesVacations","formControlName","employeesVacations","p-label","Select your employees for collective vacations",1,"po-md-4",3,"p-auto-height","p-options","p-required"],["name","days","formControlName","days","p-label","How many days of vacation the employees will be able to have?","p-required","",1,"po-lg-8",3,"p-options","p-columns"],["name","Approve Vacations","p-label","Approve Vacations",1,"po-md-4","po-offset-md-5","po-offset-lg-5","po-offset-xl-5",3,"p-click","p-disabled"],["p-label","Clean",1,"po-md-3",3,"p-click"],["p-title","Collective Vacation"],["p-label","Initial period",1,"po-md-5",3,"p-value"],["p-label","Final period",1,"po-md-5",3,"p-value"],["p-label","Days",1,"po-md-2",3,"p-value"],["p-label","Employees",1,"po-lg-12",3,"p-value"]],template:function(a,n){if(a&1){let c=W();i(0,"form",1)(1,"h3"),e(2,"Collective vacations"),t(),l(3,"po-divider"),i(4,"div",2),l(5,"po-datepicker",3)(6,"po-datepicker",4),t(),i(7,"div",2),l(8,"po-multiselect",5)(9,"po-radio-group",6),t(),i(10,"div",2)(11,"po-button",7),u("p-click",function(){b(c);let r=D(14);return n.updateEmployeesVacations(),h(r.open())}),t(),i(12,"po-button",8),u("p-click",function(){return b(c),h(n.clean())}),t()()(),i(13,"po-modal",9,0)(15,"div",2),l(16,"po-info",10),N(17,"date"),l(18,"po-info",11),N(19,"date"),l(20,"po-info",12),t(),l(21,"po-divider"),i(22,"div",2),l(23,"po-info",13),t()()}a&2&&(m("formGroup",n.formCollectiveVacations),p(6),m("p-min-date",n.getRangeFinalPeriod()),p(2),m("p-auto-height",!0)("p-options",n.employees)("p-required",!0),p(),m("p-options",n.daysOptions)("p-columns",3),p(2),m("p-disabled",n.formCollectiveVacations.invalid),p(5),m("p-value",z(17,12,n.initialPeriod,"longDate","+0000")),p(2),m("p-value",z(19,16,n.finalPeriod,"longDate","+0000")),p(2),m("p-value",n.days),p(3),m("p-value",n.nameEmployeesVacations))},dependencies:[H,A,I,ce,ue,k,j,R,ee,T,L,te,Z],encapsulation:2})}return o})();var Ze=o=>({"docs-sample-code-tabs":o}),ke=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-multiselect-vacation-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(l(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Multiselect - Vacation Reactive Form"),t(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-multiselect-vacation-reactive-form/sample-po-multiselect-vacation-reactive-form.component.html"),t(),i(13,"pre",7),e(14,`<form [formGroup]="formCollectiveVacations">
  <h3>Collective vacations</h3>

  <po-divider />

  <div class="po-row">
    <po-datepicker
      class="po-md-6"
      name="initialPeriod"
      formControlName="initialPeriod"
      p-label="Initial period"
      p-required
    >
    </po-datepicker>

    <po-datepicker
      class="po-md-6"
      name="finalPeriod"
      formControlName="finalPeriod"
      p-label="Final period"
      p-required
      [p-min-date]="getRangeFinalPeriod()"
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-multiselect
      class="po-md-4"
      name="employeesVacations"
      formControlName="employeesVacations"
      p-label="Select your employees for collective vacations"
      [p-auto-height]="true"
      [p-options]="employees"
      [p-required]="true"
    >
    </po-multiselect>

    <po-radio-group
      class="po-lg-8"
      name="days"
      formControlName="days"
      p-label="How many days of vacation the employees will be able to have?"
      p-required
      [p-options]="daysOptions"
      [p-columns]="3"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-4 po-offset-md-5 po-offset-lg-5 po-offset-xl-5"
      name="Approve Vacations"
      p-label="Approve Vacations"
      [p-disabled]="formCollectiveVacations.invalid"
      (p-click)="updateEmployeesVacations(); modalEmployeesVacation.open()"
    >
    </po-button>

    <po-button class="po-md-3" p-label="Clean" (p-click)="clean()"> </po-button>
  </div>
</form>

<po-modal #modalEmployeesVacation p-title="Collective Vacation">
  <div class="po-row">
    <po-info class="po-md-5" p-label="Initial period" [p-value]="initialPeriod | date: 'longDate' : '+0000'"> </po-info>

    <po-info class="po-md-5" p-label="Final period" [p-value]="finalPeriod | date: 'longDate' : '+0000'"> </po-info>

    <po-info class="po-md-2" p-label="Days" [p-value]="days"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-lg-12" p-label="Employees" [p-value]="nameEmployeesVacations"> </po-info>
  </div>
</po-modal>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-multiselect-vacation-reactive-form/sample-po-multiselect-vacation-reactive-form.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoMultiselectOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-vacation-reactive-form',
  templateUrl: './sample-po-multiselect-vacation-reactive-form.component.html',
  standalone: false
})
export class SamplePoMultiselectVacationReactiveFormComponent implements OnInit {
  private formBuilder = inject(UntypedFormBuilder);

  days: number;
  employeesVacations: Array<string> = [];
  finalPeriod: Date;
  formCollectiveVacations: UntypedFormGroup;
  initialPeriod: Date;
  nameEmployeesVacations: string;

  public readonly employees: Array<PoMultiselectOption> = [
    { value: '412341', label: 'Alfred' },
    { value: '518734', label: 'Alice' },
    { value: '986237', label: 'Bradley' },
    { value: '941278', label: 'Jackie' },
    { value: '112333', label: 'Jane' },
    { value: '989898', label: 'John' },
    { value: '897643', label: 'Phillip' },
    { value: '423767', label: 'Reynold' },
    { value: '423837', label: 'Robert' }
  ];

  public daysOptions: Array<PoRadioGroupOption> = [
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 30, label: '30' }
  ];

  ngOnInit() {
    this.formCollectiveVacations = this.formBuilder.group({
      initialPeriod: [null, Validators.required],
      finalPeriod: [null, Validators.required],
      days: [null, Validators.required],
      employeesVacations: [null, Validators.required]
    });

    this.clean();
  }

  clean() {
    this.formCollectiveVacations.patchValue({
      days: 20,
      initialPeriod: undefined,
      finalPeriod: undefined,
      employeesVacations: undefined
    });
  }

  getRangeFinalPeriod() {
    return this.formCollectiveVacations.get('initialPeriod').value;
  }

  updateEmployeesVacations() {
    this.nameEmployeesVacations = this.employees
      .filter((employee: PoMultiselectOption) =>
        this.formCollectiveVacations.get('employeesVacations').value.includes(<string>employee.value)
      )
      .map((employee: PoMultiselectOption) => employee.label)
      .join(', ');
    this.initialPeriod = this.formCollectiveVacations.get('initialPeriod').value;
    this.finalPeriod = this.formCollectiveVacations.get('finalPeriod').value;
    this.days = this.formCollectiveVacations.get('days').value;
  }
}
`),t()()()()(),i(21,"div",10),l(22,"sample-po-multiselect-vacation-reactive-form"),t(),l(23,"hr")),a&2&&(p(5),M("po-icon "+n.sampleCodeButtonIcon),p(),P(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,Ze,n.hideSampleCodeTabs)))},dependencies:[w,C,y,x,Oe],encapsulation:2})}return o})();function et(o,G){o&1&&l(0,"po-tag",11),o&2&&m("p-icon",!0)}function tt(o,G){o&1&&l(0,"po-tag",12),o&2&&m("p-icon",!0)}function it(o,G){o&1&&l(0,"po-tag",13),o&2&&m("p-icon",!0)}function nt(o,G){if(o&1&&(i(0,"div",0)(1,"div",7)(2,"div",8),e(3),t()(),i(4,"div",9)(5,"div",10),le(6,et,1,1,"po-tag",11)(7,tt,1,1,"po-tag",12)(8,it,1,1,"po-tag",13),t()()()),o&2){let s=G.$implicit;p(3),se(s.label),p(3),X(s.admin?6:-1),p(),X(s.access?7:-1),p(),X(!s.admin&&!s.access?8:-1)}}var Le=(()=>{class o{employee;typeAccess;typeAccessMap={admin:{admin:!0,access:!0},access:{admin:!1,access:!0},noAccess:{admin:!1,access:!1}};options=[{value:"Anna M.",label:"Anna M.",admin:!1,access:!0},{value:"Jhon T.",label:"Jhon T.",admin:!0,access:!0},{value:"Marie J.",label:"Marie J.",admin:!1,access:!1}];employees=[{label:"Anna M.",value:"Anna M."},{label:"Jhon T.",value:"Jhon T."},{label:"Marie J.",value:"Marie J."}];typeAccessValue=[{label:"Admin e acesso padr\xE3o",value:"admin"},{label:"Acesso padr\xE3o",value:"access"},{label:"Sem acesso",value:"noAccess"}];changeAccess(){let s=[...this.options].map(a=>a.value===this.employee?Q({value:a.value,label:a.label},this.typeAccessMap[this.typeAccess]):a);this.options=s,this.employee=void 0,this.typeAccess=void 0}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-multiselect-template"]],standalone:!1,decls:7,vars:7,consts:[[1,"po-row"],["name","employee","p-label","Employee",1,"po-md-5",3,"ngModelChange","p-options","ngModel"],["name","typeOfAccess","p-label","Type of access",1,"po-md-6",3,"ngModelChange","p-options","ngModel"],[1,"po-md-1","containerButton"],["p-label","Alterar acesso",3,"p-click","p-disabled"],["name","multiselect","p-label","PO Multiselect",1,"po-md-12",3,"p-options","p-hide-select-all"],["p-multiselect-option-template",""],[1,"po-md-2","containerFlex"],[1,"po-font-text-large-bold"],[1,"po-md-10"],[1,"containerFlexTag"],["p-value","Admin","p-type","success",3,"p-icon"],["p-value","Normal","p-type","info",3,"p-icon"],["p-value","Sem acesso","p-type","danger",3,"p-icon"]],template:function(a,n){a&1&&(i(0,"div",0)(1,"po-select",1),g("ngModelChange",function(d){return v(n.employee,d)||(n.employee=d),d}),t(),i(2,"po-select",2),g("ngModelChange",function(d){return v(n.typeAccess,d)||(n.typeAccess=d),d}),t(),i(3,"div",3)(4,"po-button",4),u("p-click",function(){return n.changeAccess()}),t()(),i(5,"po-multiselect",5),le(6,nt,9,4,"ng-template",6),t()()),a&2&&(p(),m("p-options",n.employees),S("ngModel",n.employee),p(),m("p-options",n.typeAccessValue),S("ngModel",n.typeAccess),p(2),m("p-disabled",!n.employee||!n.typeAccess),p(),m("p-options",n.options)("p-hide-select-all",!0))},dependencies:[A,O,k,xe,T,ie,Se],styles:[".containerFlex[_ngcontent-%COMP%]{display:flex;align-items:center}.containerFlexTag[_ngcontent-%COMP%]{display:flex;gap:2px;flex-direction:column}.containerButton[_ngcontent-%COMP%]{display:flex;align-items:flex-end;padding:8px}"]})}return o})();var lt=o=>({"docs-sample-code-tabs":o}),qe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-multiselect-template-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(l(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Multiselect - Template"),t(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-multiselect-template/sample-po-multiselect-template.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
  <po-select class="po-md-5" name="employee" p-label="Employee" [p-options]="employees" [(ngModel)]="employee">
  </po-select>

  <po-select
    class="po-md-6"
    name="typeOfAccess"
    p-label="Type of access"
    [p-options]="typeAccessValue"
    [(ngModel)]="typeAccess"
  >
  </po-select>

  <div class="po-md-1 containerButton">
    <po-button p-label="Alterar acesso" [p-disabled]="!employee || !typeAccess" (p-click)="changeAccess()"> </po-button>
  </div>

  <po-multiselect
    class="po-md-12"
    name="multiselect"
    p-label="PO Multiselect"
    [p-options]="options"
    [p-hide-select-all]="true"
  >
    <ng-template p-multiselect-option-template let-option>
      <div class="po-row">
        <div class="po-md-2 containerFlex">
          <div class="po-font-text-large-bold">{ { option.label }}</div>
        </div>

        <div class="po-md-10">
          <div class="containerFlexTag">
            @if (option.admin) {
              <po-tag p-value="Admin" p-type="success" [p-icon]="true"> </po-tag>
            }
            @if (option.access) {
              <po-tag p-value="Normal" p-type="info" [p-icon]="true"> </po-tag>
            }
            @if (!option.admin && !option.access) {
              <po-tag p-value="Sem acesso" p-type="danger" [p-icon]="true"> </po-tag>
            }
          </div>
        </div>
      </div>
    </ng-template>
  </po-multiselect>
</div>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-multiselect-template/sample-po-multiselect-template.component.ts"),t(),i(19,"pre",9),e(20,`import { Component } from '@angular/core';
import { PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-template',
  templateUrl: './sample-po-multiselect-template.component.html',
  styles: [
    \`
      .containerFlex {
        display: flex;
        align-items: center;
      }

      .containerFlexTag {
        display: flex;
        gap: 2px;
        flex-direction: column;
      }

      .containerButton {
        display: flex;
        align-items: flex-end;
        padding: 8px;
      }
    \`
  ],
  standalone: false
})
export class SamplePoMultiselectTemplateComponent {
  employee;
  typeAccess;
  typeAccessMap = {
    admin: { admin: true, access: true },
    access: { admin: false, access: true },
    noAccess: { admin: false, access: false }
  };

  options = [
    { value: 'Anna M.', label: 'Anna M.', admin: false, access: true },
    { value: 'Jhon T.', label: 'Jhon T.', admin: true, access: true },
    { value: 'Marie J.', label: 'Marie J.', admin: false, access: false }
  ];

  readonly employees: Array<PoSelectOption> = [
    { label: 'Anna M.', value: 'Anna M.' },
    { label: 'Jhon T.', value: 'Jhon T.' },
    { label: 'Marie J.', value: 'Marie J.' }
  ];

  readonly typeAccessValue: Array<PoSelectOption> = [
    { label: 'Admin e acesso padr\xE3o', value: 'admin' },
    { label: 'Acesso padr\xE3o', value: 'access' },
    { label: 'Sem acesso', value: 'noAccess' }
  ];

  changeAccess() {
    const newOptions = [...this.options].map(opt => {
      if (opt.value === this.employee) {
        return {
          value: opt.value,
          label: opt.label,
          ...this.typeAccessMap[this.typeAccess]
        };
      }
      return opt;
    });

    this.options = newOptions;
    this.employee = undefined;
    this.typeAccess = undefined;
  }
}
`),t()()()()(),i(21,"div",10),l(22,"sample-po-multiselect-template"),t(),l(23,"hr")),a&2&&(p(5),M("po-icon "+n.sampleCodeButtonIcon),p(),P(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,lt,n.hideSampleCodeTabs)))},dependencies:[w,C,y,x,Le],encapsulation:2})}return o})();var pe=(()=>{class o{http=B(de);getFilteredData({value:s}){let a={filter:s};return this.http.get("https://po-sample-api.onrender.com/v1/heroes?page=1&pageSize=10",{params:a}).pipe(ne(n=>n.items))}getObjectsByValues(s){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/?value=${s.toString()}`).pipe(ne(a=>a.items))}static \u0275fac=function(a){return new(a||o)};static \u0275prov=re({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var De=(()=>{class o{samplePoMultiselectHeroesService=B(pe);debounce=500;filterService;heroes;multiselect=["1495831666871","1405833068599"];columns=[{property:"value",label:"id"},{property:"label",label:"Name",type:"link",action:s=>{this.openLink(s)}}];constructor(){let s=this.samplePoMultiselectHeroesService;this.filterService=s}changeOptions(s){this.heroes=[...s]}openLink(s){window.open(`http://google.com/search?q=${s}`,"_blank")}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-multiselect-heroes"]],standalone:!1,features:[me([pe])],decls:4,vars:9,consts:[[1,"po-row"],["name","multiselect","p-label","Search a Hero",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-filter-service","p-debounce-time"],[1,"po-md-6"],[3,"p-columns","p-items","p-height","p-striped","p-hide-columns-manager","p-hide-table-search"]],template:function(a,n){a&1&&(i(0,"div",0)(1,"po-multiselect",1),g("ngModelChange",function(d){return v(n.multiselect,d)||(n.multiselect=d),d}),u("p-change",function(d){return n.changeOptions(d)}),t(),i(2,"po-container",2),l(3,"po-table",3),t()()),a&2&&(p(),S("ngModel",n.multiselect),m("p-filter-service",n.filterService)("p-debounce-time",n.debounce),p(2),m("p-columns",n.columns)("p-items",n.heroes)("p-height",220)("p-striped",!0)("p-hide-columns-manager",!0)("p-hide-table-search",!1))},dependencies:[A,O,ve,T,fe],encapsulation:2})}return o})();var rt=o=>({"docs-sample-code-tabs":o}),Fe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-multiselect-heroes-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(l(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Multiselect - Heroes - using API"),t(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-multiselect-heroes/sample-po-multiselect-heroes.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
  <po-multiselect
    class="po-md-6"
    name="multiselect"
    [(ngModel)]="multiselect"
    p-label="Search a Hero"
    [p-filter-service]="filterService"
    [p-debounce-time]="debounce"
    (p-change)="changeOptions($event)"
  >
  </po-multiselect>

  <po-container class="po-md-6">
    <po-table
      [p-columns]="columns"
      [p-items]="heroes"
      [p-height]="220"
      [p-striped]="true"
      [p-hide-columns-manager]="true"
      [p-hide-table-search]="false"
    >
    </po-table>
  </po-container>
</div>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-multiselect-heroes/sample-po-multiselect-heroes.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, inject } from '@angular/core';
import { PoTableColumn, PoMultiselectFilter } from '@po-ui/ng-components';

import { SamplePoMultiselectHeroesService } from './sample-po-multiselect-heroes.service';

@Component({
  selector: 'sample-po-multiselect-heroes',
  templateUrl: './sample-po-multiselect-heroes.component.html',
  providers: [SamplePoMultiselectHeroesService],
  standalone: false
})
export class SamplePoMultiselectHeroesComponent {
  samplePoMultiselectHeroesService = inject(SamplePoMultiselectHeroesService);

  debounce = 500;
  filterService: PoMultiselectFilter;
  heroes: Array<any>;
  multiselect: Array<string> = ['1495831666871', '1405833068599'];
  columns: Array<PoTableColumn> = [
    { property: 'value', label: 'id' },
    {
      property: 'label',
      label: 'Name',
      type: 'link',
      action: value => {
        this.openLink(value);
      }
    }
  ];

  constructor() {
    const samplePoMultiselectHeroesService = this.samplePoMultiselectHeroesService;

    this.filterService = samplePoMultiselectHeroesService;
  }

  changeOptions(event): void {
    this.heroes = [...event];
  }

  openLink(value) {
    window.open(\`http://google.com/search?q=\${value}\`, '_blank');
  }
}
`),t(),i(21,"label",6),e(22,"sample-po-multiselect-heroes/sample-po-multiselect-heroes.service.ts"),t(),i(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PoMultiselectFilter, PoMultiselectOption } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoMultiselectHeroesService implements PoMultiselectFilter {
  private http = inject(HttpClient);

  getFilteredData({ value }): Observable<Array<PoMultiselectOption>> {
    const params = { filter: value };

    return this.http
      .get(\`https://po-sample-api.onrender.com/v1/heroes?page=1&pageSize=10\`, { params })
      .pipe(map((response: { items: Array<PoMultiselectOption> }) => response.items));
  }

  getObjectsByValues(value: Array<string | number>): Observable<Array<PoMultiselectOption>> {
    return this.http
      .get(\`https://po-sample-api.onrender.com/v1/heroes/?value=\${value.toString()}\`)
      .pipe(map((response: { items: Array<PoMultiselectOption> }) => response.items));
  }
}
`),t()()()()(),i(25,"div",10),l(26,"sample-po-multiselect-heroes"),t(),l(27,"hr")),a&2&&(p(5),M("po-icon "+n.sampleCodeButtonIcon),p(),P(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,rt,n.hideSampleCodeTabs)))},dependencies:[w,C,y,x,De],encapsulation:2})}return o})();var Be=(()=>{class o{company;fieldLabel="razaoSocial";fieldValue="cnpj";options=[{codigo:"1",nomeFantasia:"TOTVS SA",razaoSocial:"TOTVS LTDA",label:"TOTVS COMPANY",cnpj:"01.234.567/0000-01",value:"100",id:"10",email:"totvscompany@sample.com",data:"10/03/2015",origem:"S\xE3o Paulo"},{codigo:"2",nomeFantasia:"INSTITUTO TOTVS DE ENSINO SA",razaoSocial:"INST TOTVS DE ENSINO LTDA",label:"INST TOTVS",cnpj:"02.345.678/0000-02",value:"200",id:"20",email:"insttotvs@sample.com",data:"10/10/2020",origem:"Joinville"},{codigo:"3",nomeFantasia:"TOTVS ENTERPRISE SA",razaoSocial:"TOTVS ENTERPRISE LTDA ",label:"ENT TOTVS",cnpj:"03.456.789/0000-03",value:"300",id:"30",email:"enttotvs@sample.com",data:"10/01/2022",origem:"Curitiba"}];optionsSelect=[{label:"codigo",value:"codigo"},{label:"nomeFantasia",value:"nomeFantasia"},{label:"razaoSocial",value:"razaoSocial"},{label:"label",value:"label"},{label:"cnpj",value:"cnpj"},{label:"value",value:"value"},{label:"id",value:"id"},{label:"email",value:"email"},{label:"data",value:"data"},{label:"origem",value:"origem"}];onChange(s){this.company=void 0}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-multiselect-any-array"]],standalone:!1,decls:9,vars:9,consts:[[1,"po-row"],[1,"po-md-6"],["name","label","p-label","Select Field Label",3,"ngModelChange","p-change","p-options","ngModel"],["name","label","p-label","Select Field Value",3,"ngModelChange","p-change","p-options","ngModel"],["name","multiselect","p-label","Select your Company","p-listbox-control-position","top",1,"po-md-12",3,"ngModelChange","p-options","p-field-value","p-field-label","ngModel"],["p-label","Model",1,"po-md-12",3,"p-value"]],template:function(a,n){a&1&&(i(0,"div",0)(1,"div",1)(2,"po-select",2),g("ngModelChange",function(d){return v(n.fieldLabel,d)||(n.fieldLabel=d),d}),u("p-change",function(d){return n.onChange(d)}),t(),i(3,"po-select",3),g("ngModelChange",function(d){return v(n.fieldValue,d)||(n.fieldValue=d),d}),u("p-change",function(d){return n.onChange(d)}),t()(),i(4,"div",1)(5,"div",0)(6,"po-multiselect",4),g("ngModelChange",function(d){return v(n.company,d)||(n.company=d),d}),t()(),i(7,"div",0),l(8,"po-info",5),t()()()),a&2&&(p(2),m("p-options",n.optionsSelect),S("ngModel",n.fieldLabel),p(),m("p-options",n.optionsSelect),S("ngModel",n.fieldValue),p(3),m("p-options",n.options)("p-field-value",n.fieldValue)("p-field-label",n.fieldLabel),S("ngModel",n.company),p(2),m("p-value",n.company))},dependencies:[A,O,T,ie,L],encapsulation:2})}return o})();var dt=o=>({"docs-sample-code-tabs":o}),We=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-multiselect-any-array-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(l(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Multiselect - Array Any"),t(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-multiselect-any-array/sample-po-multiselect-any-array.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
  <div class="po-md-6">
    <po-select
      name="label"
      p-label="Select Field Label"
      [p-options]="optionsSelect"
      [(ngModel)]="fieldLabel"
      (p-change)="onChange($event)"
    >
    </po-select>
    <po-select
      name="label"
      p-label="Select Field Value"
      [p-options]="optionsSelect"
      [(ngModel)]="fieldValue"
      (p-change)="onChange($event)"
    >
    </po-select>
  </div>
  <div class="po-md-6">
    <div class="po-row">
      <po-multiselect
        class="po-md-12"
        name="multiselect"
        p-label="Select your Company"
        p-listbox-control-position="top"
        [p-options]="options"
        [p-field-value]="fieldValue"
        [p-field-label]="fieldLabel"
        [(ngModel)]="company"
      >
      </po-multiselect>
    </div>
    <div class="po-row">
      <po-info class="po-md-12" p-label="Model" [p-value]="company"> </po-info>
    </div>
  </div>
</div>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-multiselect-any-array/sample-po-multiselect-any-array.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-any-array',
  templateUrl: './sample-po-multiselect-any-array.component.html',
  standalone: false
})
export class SamplePoMultiselectAnyArrayComponent {
  company;
  fieldLabel = 'razaoSocial';
  fieldValue = 'cnpj';

  public readonly options: Array<any> = [
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

  public readonly optionsSelect: Array<PoSelectOption> = [
    { label: 'codigo', value: 'codigo' },
    { label: 'nomeFantasia', value: 'nomeFantasia' },
    { label: 'razaoSocial', value: 'razaoSocial' },
    { label: 'label', value: 'label' },
    { label: 'cnpj', value: 'cnpj' },
    { label: 'value', value: 'value' },
    { label: 'id', value: 'id' },
    { label: 'email', value: 'email' },
    { label: 'data', value: 'data' },
    { label: 'origem', value: 'origem' }
  ];

  onChange(event) {
    this.company = undefined;
  }
}
`),t()()()()(),i(21,"div",10),l(22,"sample-po-multiselect-any-array"),t(),l(23,"hr")),a&2&&(p(5),M("po-icon "+n.sampleCodeButtonIcon),p(),P(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,dt,n.hideSampleCodeTabs)))},dependencies:[w,C,y,x,Be],encapsulation:2})}return o})();var Ne=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-multiselect-doc"]],standalone:!1,decls:1418,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption"],["pan","",1,"docs-api-property-type","any>"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","{","property:","string,","value:","string","}"],["pan","",1,"docs-api-property-type","Array<string"],["pan","",1,"docs-api-property-type","number>"]],template:function(a,n){a&1&&(i(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),i(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),i(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),i(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),i(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),i(16,"h3",3),e(17,"Componente"),t(),i(18,"h4",4)(19,"code",5),e(20,"PoMultiselectComponent"),t()(),i(21,"div",2)(22,"p"),e(23,`O po-multiselect \xE9 um componente de m\xFAltipla sele\xE7\xE3o.
Este componente \xE9 recomendado para dar ao usu\xE1rio a op\xE7\xE3o de selecionar v\xE1rios itens em uma lista.`),t(),i(24,"p"),e(25,`Quando a lista possuir poucos itens, deve-se dar prefer\xEAncia para o uso do po-checkbox-group, por ser mais simples
e mais r\xE1pido para a sele\xE7\xE3o do usu\xE1rio.`),t(),i(26,"p"),e(27,`Este componente tamb\xE9m n\xE3o deve ser utilizado em casos onde a sele\xE7\xE3o seja \xFAnica. Nesses casos, deve-se utilizar o
po-select, po-combo ou po-radio-group.`),t(),i(28,"p"),e(29,"Com ele tamb\xE9m \xE9 poss\xEDvel definir uma lista \xE0 partir da requisi\xE7\xE3o de um servi\xE7o definido em "),i(30,"code"),e(31,"p-filter-service"),t(),e(32,"."),t(),i(33,"h4"),e(34,"Boas pr\xE1ticas"),t(),i(35,"ul")(36,"li"),e(37,"Caso a lista apresente menos de 5 itens, considere utilizar outro componente;"),t(),i(38,"li"),e(39,"N\xE3o utilize o multiselect caso o usu\xE1rio possa selecionar apenas uma op\xE7\xE3o. Para esse caso, opte por utilizar po-radio ou po-select;"),t()(),i(40,"h4"),e(41,"Acessibilidade tratada no componente"),t(),i(42,"p"),e(43,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),t(),i(44,"ul")(45,"li"),e(46,"Quando em foco, o multiselect abre o listbox usando as teclas de Espa\xE7o ou Enter do teclado."),t(),i(47,"li"),e(48,"Utilize as teclas Arrow Up [seta para cima] ou Arrow Down [seta para baixo] do teclado para navegar entre os itens do listbox."),t(),i(49,"li"),e(50,"Utilize a tecla Esc do teclado para fechar o listbox."),t(),i(51,"li"),e(52,"Quando um item estiver em foco, utilize as teclas Arrow Right [seta para direita] ou Arrow Left [seta para esquerda] do teclado para navegar entre eles."),t(),i(53,"li"),e(54,"Quando em foco e havendo um item ou mais j\xE1 selecionado, utilize a tecla Arrow Down [seta para baixo] do teclado para abrir o listbox."),t()(),i(55,"h4"),e(56,"Tokens customiz\xE1veis"),t(),i(57,"p"),e(58,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),i(59,"blockquote")(60,"p"),e(61,"Para maiores informa\xE7\xF5es, acesse o guia "),i(62,"a",6),e(63,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(64,"."),t()(),i(65,"table")(66,"thead")(67,"tr")(68,"th"),e(69,"Propriedade"),t(),i(70,"th"),e(71,"Descri\xE7\xE3o"),t(),i(72,"th"),e(73,"Valor Padr\xE3o"),t()()(),i(74,"tbody")(75,"tr")(76,"td")(77,"strong"),e(78,"Default Values"),t()(),l(79,"td")(80,"td"),t(),i(81,"tr")(82,"td")(83,"code"),e(84,"--font-family"),t()(),i(85,"td"),e(86,"Fam\xEDlia tipogr\xE1fica usada"),t(),i(87,"td")(88,"code"),e(89,"var(--font-family-theme)"),t()()(),i(90,"tr")(91,"td")(92,"code"),e(93,"--font-size"),t()(),i(94,"td"),e(95,"Tamanho da fonte"),t(),i(96,"td")(97,"code"),e(98,"var(--font-size-default)"),t()()(),i(99,"tr")(100,"td")(101,"code"),e(102,"--text-color-placeholder"),t(),e(103," \xA0"),t(),i(104,"td"),e(105,"Cor do texto do placeholder"),t(),i(106,"td")(107,"code"),e(108,"var(--color-action-disabled)"),t()()(),i(109,"tr")(110,"td")(111,"code"),e(112,"--color"),t()(),i(113,"td"),e(114,"Cor principal do multiselect"),t(),i(115,"td")(116,"code"),e(117,"var(--color-neutral-dark-70)"),t()()(),i(118,"tr")(119,"td")(120,"code"),e(121,"--background"),t()(),i(122,"td"),e(123,"Cor de background"),t(),i(124,"td")(125,"code"),e(126,"var(--color-neutral-light-05)"),t()()(),i(127,"tr")(128,"td")(129,"strong"),e(130,"Hover"),t()(),l(131,"td")(132,"td"),t(),i(133,"tr")(134,"td")(135,"code"),e(136,"--color-hover"),t()(),i(137,"td"),e(138,"Cor principal no estado hover"),t(),i(139,"td")(140,"code"),e(141,"var(--color-action-hover)"),t()()(),i(142,"tr")(143,"td")(144,"code"),e(145,"--background-hover"),t()(),i(146,"td"),e(147,"Cor de background no estado hover"),t(),i(148,"td")(149,"code"),e(150,"var(--color-brand-01-lighter)"),t()()(),i(151,"tr")(152,"td")(153,"strong"),e(154,"Focused"),t()(),l(155,"td")(156,"td"),t(),i(157,"tr")(158,"td")(159,"code"),e(160,"--color-focused"),t()(),i(161,"td"),e(162,"Cor principal no estado de focus"),t(),i(163,"td")(164,"code"),e(165,"var(--color-action-default)"),t()()(),i(166,"tr")(167,"td")(168,"code"),e(169,"--outline-color-focused"),t(),e(170," \xA0"),t(),i(171,"td"),e(172,"Cor do outline do estado de focus"),t(),i(173,"td")(174,"code"),e(175,"var(--color-action-focus)"),t()()(),i(176,"tr")(177,"td")(178,"strong"),e(179,"Disabled"),t()(),l(180,"td")(181,"td"),t(),i(182,"tr")(183,"td")(184,"code"),e(185,"--color-disabled"),t()(),i(186,"td"),e(187,"Cor principal no estado disabled"),t(),i(188,"td")(189,"code"),e(190,"var(--color-action-disabled)"),t()()(),i(191,"tr")(192,"td")(193,"code"),e(194,"--background-disabled"),t(),e(195," \xA0"),t(),i(196,"td"),e(197,"Cor de background no estado disabled \xA0"),t(),i(198,"td")(199,"code"),e(200,"var(--color-neutral-light-20)"),t()()(),i(201,"tr")(202,"td")(203,"strong"),e(204,"Error"),t()(),l(205,"td")(206,"td"),t(),i(207,"tr")(208,"td")(209,"code"),e(210,"--color-error"),t()(),i(211,"td"),e(212,"Cor principal no estado error"),t(),i(213,"td")(214,"code"),e(215,"var(--color-feedback-negative-base)"),t()()()()()(),i(216,"div",7)(217,"h4",8),e(218,"Seletor"),t(),i(219,"pre",9),e(220,`<po-multiselect
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-auto-height="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    p-debounce-time="number"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-field-label="string"
    p-field-value="string"
    p-filter-mode="PoMultiselectFilterMode"
    p-filter-service="string | PoMultiselectFilter"
    p-help="string"
    p-hide-search="boolean"
    p-hide-select-all="boolean"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-listbox-control-position="'top' | 'bottom'"
    p-literals="PoMultiselectLiterals"
    name="string"
    p-optional="boolean"
    p-options="Array<PoMultiselectOption | any>"
    p-placeholder="string"
    p-placeholder-search="string"
    p-helper="PoHelperOptions | string"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string"
    p-sort="boolean" >
</po-multiselect>
`),t()(),i(221,"h4",10),e(222,"Propriedades"),t(),i(223,"table",11)(224,"tr",12)(225,"th",13),e(226,"Nome"),t(),i(227,"th",13),e(228,"Tipo"),t(),i(229,"th",13),e(230,"Padr\xE3o"),t(),i(231,"th",13),e(232,"Descri\xE7\xE3o"),t()(),i(233,"tr",14)(234,"td",15)(235,"div",16)(236,"span",17),e(237," (p-additional-help)"),l(238,"br"),t()(),i(239,"div",18),e(240,"Deprecated"),t()(),i(241,"td",19)(242,"code",20),e(243,"EventEmitter"),t()(),i(244,"td",21),e(245,"-"),t(),i(246,"td",22)(247,"em")(248,"strong"),e(249,"(opcional)"),t()(),i(250,"p"),e(251,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),t(),i(252,"blockquote")(253,"p"),e(254,"Essa propriedade est\xE1 "),i(255,"strong"),e(256,"depreciada"),t(),e(257," e ser\xE1 removida na vers\xE3o "),i(258,"code"),e(259,"23.x.x"),t(),e(260,". Recomendamos utilizar a propriedade "),i(261,"code"),e(262,"p-helper"),t(),e(263," que oferece mais recursos e flexibilidade."),t()()()(),i(264,"tr",14)(265,"td",15)(266,"div",23)(267,"span",24),e(268," p-additional-help-tooltip"),l(269,"br"),t()(),i(270,"div",18),e(271,"Deprecated"),t()(),i(272,"td",19)(273,"code",25),e(274,"string"),t()(),i(275,"td",21),e(276,"-"),t(),i(277,"td",22)(278,"em")(279,"strong"),e(280,"(opcional)"),t()(),i(281,"p"),e(282,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),i(283,"code"),e(284,"po-helper"),t(),e(285,`.
`),i(286,"strong"),e(287,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),i(288,"blockquote")(289,"p"),e(290,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),i(291,"blockquote")(292,"p"),e(293,"Essa propriedade est\xE1 "),i(294,"strong"),e(295,"depreciada"),t(),e(296," e ser\xE1 removida na vers\xE3o "),i(297,"code"),e(298,"23.x.x"),t(),e(299,". Recomendamos utilizar a propriedade "),i(300,"code"),e(301,"p-helper"),t(),e(302," que oferece mais recursos e flexibilidade."),t()()()(),i(303,"tr",14)(304,"td",15)(305,"div",23)(306,"span",24),e(307," p-append-in-body"),l(308,"br"),t()()(),i(309,"td",19)(310,"code",26),e(311,"boolean"),t()(),i(312,"td",21)(313,"p")(314,"code"),e(315,"false"),t()()(),i(316,"td",22)(317,"em")(318,"strong"),e(319,"(opcional)"),t()(),i(320,"p"),e(321,"Define que o "),i(322,"code"),e(323,"listbox"),t(),e(324," e/ou popover ("),i(325,"code"),e(326,"p-helper"),t(),e(327," e/ou "),i(328,"code"),e(329,"p-error-limit"),t(),e(330,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),t(),i(331,"blockquote")(332,"p"),e(333,"Quando utilizado com "),i(334,"code"),e(335,"p-helper"),t(),e(336,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),t()()()(),i(337,"tr",14)(338,"td",15)(339,"div",23)(340,"span",24),e(341," p-auto-focus"),l(342,"br"),t()()(),i(343,"td",19)(344,"code",26),e(345,"boolean"),t()(),i(346,"td",21)(347,"p")(348,"code"),e(349,"false"),t()()(),i(350,"td",22)(351,"em")(352,"strong"),e(353,"(opcional)"),t()(),i(354,"p"),e(355,"Aplica foco no elemento ao ser iniciado."),t(),i(356,"blockquote")(357,"p"),e(358,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),i(359,"tr",14)(360,"td",15)(361,"div",23)(362,"span",24),e(363," p-auto-height"),l(364,"br"),t()()(),i(365,"td",19)(366,"code",26),e(367,"boolean"),t()(),i(368,"td",21)(369,"p")(370,"code"),e(371,"false"),t()()(),i(372,"td",22)(373,"em")(374,"strong"),e(375,"(opcional)"),t()(),i(376,"p"),e(377,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo
com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis.`),t(),i(378,"blockquote")(379,"p"),e(380,"O valor padr\xE3o ser\xE1 "),i(381,"code"),e(382,"true"),t(),e(383," quando houver servi\xE7o ("),i(384,"code"),e(385,"p-filter-service"),t(),e(386,")."),t()()()(),i(387,"tr",14)(388,"td",15)(389,"div",16)(390,"span",17),e(391," (p-blur)"),l(392,"br"),t()()(),i(393,"td",19)(394,"code",20),e(395,"EventEmitter"),t()(),i(396,"td",21),e(397,"-"),t(),i(398,"td",22)(399,"em")(400,"strong"),e(401,"(opcional)"),t()(),i(402,"p"),e(403,"Evento disparado ao sair do campo."),t()()(),i(404,"tr",14)(405,"td",15)(406,"div",16)(407,"span",17),e(408," (p-change)"),l(409,"br"),t()()(),i(410,"td",19)(411,"code",20),e(412,"EventEmitter"),t()(),i(413,"td",21),e(414,"-"),t(),i(415,"td",22)(416,"em")(417,"strong"),e(418,"(opcional)"),t()(),i(419,"p"),e(420,"Pode ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no ngModel."),t()()(),i(421,"tr",14)(422,"td",15)(423,"div",23)(424,"span",24),e(425," p-debounce-time"),l(426,"br"),t()()(),i(427,"td",19)(428,"code",27),e(429,"number"),t()(),i(430,"td",21)(431,"p")(432,"code"),e(433,"400"),t()()(),i(434,"td",22)(435,"em")(436,"strong"),e(437,"(opcional)"),t()(),i(438,"p"),e(439,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla."),t(),i(440,"blockquote")(441,"p"),e(442,"Ser\xE1 utilizada apenas quando houver servi\xE7o ("),i(443,"code"),e(444,"p-filter-service"),t(),e(445,") e somente ser\xE1 aceito valor maior do que "),i(446,"em"),e(447,"zero"),t(),e(448,"."),t()()()(),i(449,"tr",14)(450,"td",15)(451,"div",23)(452,"span",24),e(453," p-disabled"),l(454,"br"),t()()(),i(455,"td",19)(456,"code",26),e(457,"boolean"),t()(),i(458,"td",21)(459,"p")(460,"code"),e(461,"false"),t()()(),i(462,"td",22)(463,"em")(464,"strong"),e(465,"(opcional)"),t()(),i(466,"p"),e(467,"Indica que o campo ser\xE1 desabilitado."),t()()(),i(468,"tr",14)(469,"td",15)(470,"div",23)(471,"span",24),e(472," p-error-limit"),l(473,"br"),t()()(),i(474,"td",19)(475,"code",26),e(476,"boolean"),t()(),i(477,"td",21)(478,"p")(479,"code"),e(480,"false"),t()()(),i(481,"td",22)(482,"em")(483,"strong"),e(484,"(opcional)"),t()(),i(485,"p"),e(486,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),i(487,"blockquote")(488,"p"),e(489,"Caso essa propriedade seja definida como "),i(490,"code"),e(491,"true"),t(),e(492,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),i(493,"tr",14)(494,"td",15)(495,"div",23)(496,"span",24),e(497," p-field-error-message"),l(498,"br"),t()()(),i(499,"td",19)(500,"code",25),e(501,"string"),t()(),i(502,"td",21),e(503,"-"),t(),i(504,"td",22)(505,"em")(506,"strong"),e(507,"(opcional)"),t()(),i(508,"p"),e(509,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),t(),i(510,"blockquote")(511,"p"),e(512,"Necess\xE1rio que a propriedade "),i(513,"code"),e(514,"p-required"),t(),e(515," esteja habilitada."),t()()()(),i(516,"tr",14)(517,"td",15)(518,"div",23)(519,"span",24),e(520," p-field-label"),l(521,"br"),t()()(),i(522,"td",19)(523,"code",25),e(524,"string"),t()(),i(525,"td",21)(526,"p")(527,"code"),e(528,"label"),t()()(),i(529,"td",22)(530,"em")(531,"strong"),e(532,"(opcional)"),t()(),i(533,"p"),e(534,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),i(535,"code"),e(536,"p-options"),t(),e(537,"), esta propriedade ser\xE1 respons\xE1vel pelo texto de apresenta\xE7\xE3o de cada item da lista."),t(),i(538,"p"),e(539,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
`),i(540,"code"),e(541,"PoMultiSelectOption"),t(),e(542,"."),t()()(),i(543,"tr",14)(544,"td",15)(545,"div",23)(546,"span",24),e(547," p-field-value"),l(548,"br"),t()()(),i(549,"td",19)(550,"code",25),e(551,"string"),t()(),i(552,"td",21)(553,"p")(554,"code"),e(555,"value"),t()()(),i(556,"td",22)(557,"em")(558,"strong"),e(559,"(opcional)"),t()(),i(560,"p"),e(561,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),i(562,"code"),e(563,"p-options"),t(),e(564,"), esta propriedade ser\xE1 respons\xE1vel pelo valor de cada item da lista."),t(),i(565,"p"),e(566,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
`),i(567,"code"),e(568,"PoMultiSelectOption"),t(),e(569,"."),t()()(),i(570,"tr",14)(571,"td",15)(572,"div",23)(573,"span",24),e(574," p-filter-mode"),l(575,"br"),t()()(),i(576,"td",19)(577,"code",28),e(578,"PoMultiselectFilterMode"),t()(),i(579,"td",21)(580,"p")(581,"code"),e(582,"startsWith"),t()()(),i(583,"td",22)(584,"em")(585,"strong"),e(586,"(opcional)"),t()(),i(587,"p"),e(588,`Define o modo de pesquisa utilizado no campo de busca, quando habilitado.
Valores definidos no enum: PoMultiselectFilterMode`),t()()(),i(589,"tr",14)(590,"td",15)(591,"div",23)(592,"span",24),e(593," p-filter-service"),l(594,"br"),t()()(),i(595,"td",19)(596,"code",25),e(597,"string "),t(),i(598,"code",29),e(599," PoMultiselectFilter"),t()(),i(600,"td",21),e(601,"-"),t(),i(602,"td",22)(603,"em")(604,"strong"),e(605,"(opcional)"),t()(),i(606,"p"),e(607,"Nesta propriedade pode ser informada a URL do servi\xE7o em que ser\xE1 realizado o filtro para carregamento da lista de itens no componente."),t(),i(608,"p"),e(609,"Tamb\xE9m existe a possibilidade de informar um servi\xE7o implementando a interface "),i(610,"code"),e(611,"PoMultiselectFilter"),t(),e(612,"."),t(),i(613,"p"),e(614,"Caso utilizado uma URL, o servi\xE7o deve ser retornado no padr\xE3o "),i(615,"a",30),e(616,"API PO UI"),t(),e(617," e utilizar as propriedades "),i(618,"code"),e(619,"p-field-label"),t(),e(620," e "),i(621,"code"),e(622,"p-field-value"),t(),e(623," para a constru\xE7\xE3o da lista de itens."),t(),i(624,"p"),e(625,"Quando utilizada uma URL de servi\xE7o, ent\xE3o ser\xE1 concatenada nesta URL o valor que deseja-se filtrar da seguinte forma:"),t(),i(626,"pre")(627,"code"),e(628,`// caso filtrar por "Peter"
https://localhost:8080/api/heroes?filter=Peter
`),t()(),i(629,"p"),e(630,"E caso iniciar o campo com valor, os itens ser\xE3o buscados da seguinte forma:"),t(),i(631,"pre")(632,"code"),e(633,`// caso o valor do campo for [1234, 5678];
 https://localhost:8080/api/heroes?value=1234,5678

//O *value* \xE9 referente ao \`fieldValue\`.
`),t()()()(),i(634,"tr",14)(635,"td",15)(636,"div",23)(637,"span",24),e(638," p-help"),l(639,"br"),t()()(),i(640,"td",19)(641,"code",25),e(642,"string"),t()(),i(643,"td",21),e(644,"-"),t(),i(645,"td",22)(646,"em")(647,"strong"),e(648,"(opcional)"),t()(),i(649,"p"),e(650,"Texto de apoio para o campo."),t()()(),i(651,"tr",14)(652,"td",15)(653,"div",23)(654,"span",24),e(655," p-hide-search"),l(656,"br"),t()()(),i(657,"td",19)(658,"code",26),e(659,"boolean"),t()(),i(660,"td",21)(661,"p")(662,"code"),e(663,"false"),t()()(),i(664,"td",22)(665,"em")(666,"strong"),e(667,"(opcional)"),t()(),i(668,"p"),e(669,"Esconde o campo de pesquisa existente dentro do dropdown do po-multiselect."),t()()(),i(670,"tr",14)(671,"td",15)(672,"div",23)(673,"span",24),e(674," p-hide-select-all"),l(675,"br"),t()()(),i(676,"td",19)(677,"code",26),e(678,"boolean"),t()(),i(679,"td",21)(680,"p")(681,"code"),e(682,"false"),t()()(),i(683,"td",22)(684,"em")(685,"strong"),e(686,"(opcional)"),t()(),i(687,"p"),e(688,'Indica se o campo "Selecionar todos" ser\xE1 escondido.'),t()()(),i(689,"tr",14)(690,"td",15)(691,"div",16)(692,"span",17),e(693," (p-keydown)"),l(694,"br"),t()()(),i(695,"td",19)(696,"code",20),e(697,"EventEmitter"),t()(),i(698,"td",21),e(699,"-"),t(),i(700,"td",22)(701,"em")(702,"strong"),e(703,"(opcional)"),t()(),i(704,"p"),e(705,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),i(706,"code"),e(707,"KeyboardEvent"),t(),e(708," com informa\xE7\xF5es sobre a tecla."),t()()(),i(709,"tr",14)(710,"td",15)(711,"div",23)(712,"span",24),e(713," p-label"),l(714,"br"),t()()(),i(715,"td",19)(716,"code",25),e(717,"string"),t()(),i(718,"td",21),e(719,"-"),t(),i(720,"td",22)(721,"em")(722,"strong"),e(723,"(opcional)"),t()(),i(724,"p"),e(725,"Label no componente."),t()()(),i(726,"tr",14)(727,"td",15)(728,"div",23)(729,"span",24),e(730," p-label-text-wrap"),l(731,"br"),t()()(),i(732,"td",19)(733,"code",26),e(734,"boolean"),t()(),i(735,"td",21)(736,"p")(737,"code"),e(738,"false"),t()()(),i(739,"td",22)(740,"em")(741,"strong"),e(742,"(opcional)"),t()(),i(743,"p"),e(744,"Habilita a quebra autom\xE1tica do texto da propriedade "),i(745,"code"),e(746,"p-label"),t(),e(747,". Quando "),i(748,"code"),e(749,"p-label-text-wrap"),t(),e(750,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),i(751,"tr",14)(752,"td",15)(753,"div",23)(754,"span",24),e(755," p-listbox-control-position"),l(756,"br"),t()()(),i(757,"td",19)(758,"code",31),e(759,"'top' "),t(),i(760,"code",32),e(761," 'bottom'"),t()(),i(762,"td",21)(763,"p")(764,"code"),e(765,"bottom"),t()()(),i(766,"td",22)(767,"em")(768,"strong"),e(769,"(opcional)"),t()(),i(770,"p"),e(771,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),i(772,"code"),e(773,"listbox"),t(),e(774," em rela\xE7\xE3o ao campo ("),i(775,"code"),e(776,"top"),t(),e(777," ou "),i(778,"code"),e(779,"bottom"),t(),e(780,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),t()()(),i(781,"tr",14)(782,"td",15)(783,"div",23)(784,"span",24),e(785," p-literals"),l(786,"br"),t()()(),i(787,"td",19)(788,"code",33),e(789,"PoMultiselectLiterals"),t()(),i(790,"td",21),e(791,"-"),t(),i(792,"td",22)(793,"em")(794,"strong"),e(795,"(opcional)"),t()(),i(796,"p"),e(797,"Objeto com as literais usadas no "),i(798,"code"),e(799,"po-multiselect"),t(),e(800,"."),t(),i(801,"p"),e(802,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),t(),i(803,"pre")(804,"code"),e(805,`const customLiterals: PoMultiselectLiterals = {
  noData: 'Nenhum dado encontrado',
  placeholderSearch: 'Buscar',
  selectAll: 'Select all',
  selectItem: 'Select items'
};
`),t()(),i(806,"p"),e(807,"Ou passando apenas as literais que deseja customizar:"),t(),i(808,"pre")(809,"code"),e(810,`const customLiterals: PoMultiselectLiterals = {
  noData: 'Sem dados'
};
`),t()(),i(811,"p"),e(812,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente:"),t(),i(813,"pre")(814,"code"),e(815,`<po-multiselect
  [p-literals]="customLiterals">
</po-po-multiselect>
`),t()(),i(816,"blockquote")(817,"p"),e(818,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),i(819,"a",34)(820,"code"),e(821,"PoI18nService"),t()(),e(822," ou do browser."),t()()()(),i(823,"tr",14)(824,"td",15)(825,"div",23)(826,"span",24),e(827," name"),l(828,"br"),t()()(),i(829,"td",19)(830,"code",25),e(831,"string"),t()(),i(832,"td",21),e(833,"-"),t(),i(834,"td",22)(835,"p"),e(836,"Nome do componente."),t()()(),i(837,"tr",14)(838,"td",15)(839,"div",23)(840,"span",24),e(841," p-optional"),l(842,"br"),t()()(),i(843,"td",19)(844,"code",26),e(845,"boolean"),t()(),i(846,"td",21)(847,"p")(848,"code"),e(849,"false"),t()()(),i(850,"td",22)(851,"em")(852,"strong"),e(853,"(opcional)"),t()(),i(854,"p"),e(855,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),i(856,"blockquote")(857,"p"),e(858,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),i(859,"ul")(860,"li"),e(861,"O campo conter "),i(862,"code"),e(863,"p-required"),t(),e(864,";"),t(),i(865,"li"),e(866,"N\xE3o possuir "),i(867,"code"),e(868,"p-help"),t(),e(869," e/ou "),i(870,"code"),e(871,"p-label"),t(),e(872,"."),t()()()(),i(873,"tr",14)(874,"td",15)(875,"div",23)(876,"span",24),e(877," p-options"),l(878,"br"),t()()(),i(879,"td",19)(880,"code",35),e(881,"Array<PoMultiselectOption "),t(),i(882,"code",36),e(883," any>"),t()(),i(884,"td",21),e(885,"-"),t(),i(886,"td",22)(887,"p"),e(888,`Nesta propriedade deve ser definida uma lista de objetos que ser\xE1 exibida no multiselect.
Esta lista deve conter os valores e os labels que ser\xE3o apresentados na tela.`),t(),i(889,"blockquote")(890,"p"),e(891,`Essa propriedade \xE9 imut\xE1vel, ou seja, sempre que quiser atualizar a lista de op\xE7\xF5es dispon\xEDveis
atualize a refer\xEAncia do objeto:`),t()(),i(892,"pre")(893,"code"),e(894,`// atualiza a refer\xEAncia do objeto garantindo a atualiza\xE7\xE3o do template
this.options = [...this.options, { value: 'x', label: 'Nova op\xE7\xE3o' }];

// evite, pois n\xE3o atualiza a refer\xEAncia do objeto podendo gerar atrasos na atualiza\xE7\xE3o do template
this.options.push({ value: 'x', label: 'Nova op\xE7\xE3o' });
`),t()(),i(895,"blockquote")(896,"p"),e(897,"A lista pode ser definida utilizando um array com o valor representando "),i(898,"code"),e(899,"value"),t(),e(900," e "),i(901,"code"),e(902,"label"),t(),e(903," das seguintes formas:"),t()(),i(904,"pre")(905,"code"),e(906,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="[{value: 1, label: 'One'}, {value: 2, label: 'two'}]"> </po-multiselect>
`),t()(),i(907,"pre")(908,"code"),e(909,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="[{name: 'Roger', age: 28}, {name: 'Anne', age: 35}]" p-field-label="name" p-field-value="age"> </po-multiselect>
`),t()(),i(910,"ul")(911,"li"),e(912,"Aconselha-se utilizar valores distintos no "),i(913,"code"),e(914,"label"),t(),e(915," e "),i(916,"code"),e(917,"value"),t(),e(918," dos itens."),t()()()(),i(919,"tr",14)(920,"td",15)(921,"div",23)(922,"span",24),e(923," p-placeholder"),l(924,"br"),t()()(),i(925,"td",19)(926,"code",25),e(927,"string"),t()(),i(928,"td",21),e(929,"-"),t(),i(930,"td",22)(931,"em")(932,"strong"),e(933,"(opcional)"),t()(),i(934,"p"),e(935,"Mensagem apresentada enquanto o campo estiver vazio."),t()()(),i(936,"tr",14)(937,"td",15)(938,"div",23)(939,"span",24),e(940," p-placeholder-search"),l(941,"br"),t()()(),i(942,"td",19)(943,"code",25),e(944,"string"),t()(),i(945,"td",21)(946,"p")(947,"code"),e(948,"Buscar"),t()()(),i(949,"td",22)(950,"em")(951,"strong"),e(952,"(opcional)"),t()(),i(953,"p"),e(954,"Placeholder do campo de pesquisa."),t(),i(955,"blockquote")(956,"p"),e(957,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),t()()()(),i(958,"tr",14)(959,"td",15)(960,"div",23)(961,"span",24),e(962," p-helper"),l(963,"br"),t()()(),i(964,"td",19)(965,"code",37),e(966,"PoHelperOptions "),t(),i(967,"code",25),e(968," string"),t()(),i(969,"td",21),e(970,"-"),t(),i(971,"td",22)(972,"em")(973,"strong"),e(974,"(opcional)"),t()(),i(975,"p"),e(976,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),i(977,"code"),e(978,"p-label"),t(),e(979," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),i(980,"code"),e(981,"p-label"),t(),e(982,"."),t(),i(983,"blockquote")(984,"p"),e(985,"Para mais informa\xE7\xF5es acesse: "),i(986,"a",38),e(987,"https://po-ui.io/documentation/po-helper"),t(),e(988,"."),t()(),i(989,"blockquote")(990,"p"),e(991,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),i(992,"code"),e(993,"p-additional-help-tooltip"),t(),e(994," e "),i(995,"code"),e(996,"p-additional-help"),t(),e(997,") ser\xE1 ignorado."),t()()()(),i(998,"tr",14)(999,"td",15)(1e3,"div",23)(1001,"span",24),e(1002," p-required"),l(1003,"br"),t()()(),i(1004,"td",19)(1005,"code",26),e(1006,"boolean"),t()(),i(1007,"td",21)(1008,"p")(1009,"code"),e(1010,"false"),t()()(),i(1011,"td",22)(1012,"em")(1013,"strong"),e(1014,"(opcional)"),t()(),i(1015,"p"),e(1016,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),i(1017,"blockquote")(1018,"p"),e(1019,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),i(1020,"code"),e(1021,"(p-disabled)"),t(),e(1022,"."),t()()()(),i(1023,"tr",14)(1024,"td",15)(1025,"div",23)(1026,"span",24),e(1027," p-show-required"),l(1028,"br"),t()()(),i(1029,"td",19)(1030,"code",26),e(1031,"boolean"),t()(),i(1032,"td",21),e(1033,"-"),t(),i(1034,"td",22)(1035,"p"),e(1036,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),i(1037,"blockquote")(1038,"p"),e(1039,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),i(1040,"ul")(1041,"li"),e(1042,"N\xE3o possuir "),i(1043,"code"),e(1044,"p-help"),t(),e(1045," e/ou "),i(1046,"code"),e(1047,"p-label"),t(),e(1048,"."),t()()()(),i(1049,"tr",14)(1050,"td",15)(1051,"div",23)(1052,"span",24),e(1053," p-size"),l(1054,"br"),t()()(),i(1055,"td",19)(1056,"code",25),e(1057,"string"),t()(),i(1058,"td",21)(1059,"p")(1060,"code"),e(1061,"medium"),t()()(),i(1062,"td",22)(1063,"em")(1064,"strong"),e(1065,"(opcional)"),t()(),i(1066,"p"),e(1067,"Define o tamanho do componente:"),t(),i(1068,"ul")(1069,"li")(1070,"code"),e(1071,"small"),t(),e(1072,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(1073,"li")(1074,"code"),e(1075,"medium"),t(),e(1076,": altura do input como 44px."),t()(),i(1077,"blockquote")(1078,"p"),e(1079,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(1080,"code"),e(1081,"medium"),t(),e(1082,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(1083,"a",39),e(1084,"po-theme"),t(),e(1085,"."),t()()()(),i(1086,"tr",14)(1087,"td",15)(1088,"div",23)(1089,"span",24),e(1090," p-sort"),l(1091,"br"),t()()(),i(1092,"td",19)(1093,"code",26),e(1094,"boolean"),t()(),i(1095,"td",21)(1096,"p")(1097,"code"),e(1098,"false"),t()()(),i(1099,"td",22)(1100,"em")(1101,"strong"),e(1102,"(opcional)"),t()(),i(1103,"p"),e(1104,`Indica que a lista definida na propriedade p-options ser\xE1 ordenada pelo label antes de ser apresentada no
dropdown.`),t()()()(),i(1105,"h3",10),e(1106,"M\xE9todos"),t(),i(1107,"table",40)(1108,"tr",14)(1109,"th",41)(1110,"div",23)(1111,"h4")(1112,"span",24),e(1113," focus "),t()()()()(),i(1114,"tr",22)(1115,"td",22)(1116,"p"),e(1117,"Fun\xE7\xE3o que atribui foco ao componente."),t(),i(1118,"p"),e(1119,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),i(1120,"pre")(1121,"code"),e(1122,`import { PoMultiselectComponent } from '@po-ui/ng-components';

...

@ViewChild(PoMultiselectComponent, { static: true }) multiselect: PoMultiselectComponent;

focusMultiselect() {
  this.multiselect.focus();
}
`),t()()()()(),l(1123,"br"),i(1124,"table",40)(1125,"tr",14)(1126,"th",41)(1127,"div",23)(1128,"h4")(1129,"span",24),e(1130," showAdditionalHelp "),t()()()()(),i(1131,"tr",22)(1132,"td",22)(1133,"p"),e(1134,"M\xE9todo que exibe "),i(1135,"code"),e(1136,"p-helper"),t(),e(1137," ou executa a a\xE7\xE3o definida em "),i(1138,"code"),e(1139,"p-helper{eventOnClick}"),t(),e(1140," ou em "),i(1141,"code"),e(1142,"p-additionalHelp"),t(),e(1143,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),i(1144,"code"),e(1145,"p-keydown"),t(),e(1146,"."),t(),i(1147,"blockquote")(1148,"p"),e(1149,"Exibe ou oculta o conte\xFAdo do componente "),i(1150,"code"),e(1151,"po-helper"),t(),e(1152," quando o componente estiver com foco."),t()(),i(1153,"pre")(1154,"code"),e(1155,`// Exemplo com p-label e p-helper
<po-multiselect
 #multiselect
 ...
 p-label="Label do multiselect"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, multiselect)"
></po-multiselect>
`),t()(),i(1156,"pre")(1157,"code"),e(1158,`...
onKeyDown(event: KeyboardEvent, inp: PoMultiselectComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),l(1159,"br"),i(1160,"h3"),e(1161,"Interfaces"),t(),i(1162,"h4",42)(1163,"code",5),e(1164,"PoMultiselectFilter"),t()(),i(1165,"div",2)(1166,"p"),e(1167,"Interface para os servi\xE7os que ser\xE3o utilizados no po-multiselect."),t()(),i(1168,"h4",10),e(1169,"M\xE9todos"),t(),i(1170,"table",40)(1171,"tr",14)(1172,"th",41)(1173,"div",23)(1174,"h4")(1175,"span",24),e(1176," getFilteredData "),t()()()()(),i(1177,"tr",22)(1178,"td",22)(1179,"p"),e(1180,`M\xE9todo que ser\xE1 chamado ao realizar uma busca no componente, deve retornar um Observable que cont\xE9m uma cole\xE7\xE3o de objetos que seguem
a interface `),i(1181,"code"),e(1182,"PoMultiselectOption"),t(),e(1183,", ser\xE1 informado por parametro o campo e o valor a ser pesquisado."),t()()()(),i(1184,"h5")(1185,"b"),e(1186,"Par\xE2metros"),t()(),i(1187,"table",11)(1188,"tr",12)(1189,"th",13),e(1190,"Nome"),t(),i(1191,"th",13),e(1192,"Tipo"),t(),i(1193,"th",13),e(1194,"Descri\xE7\xE3o"),t()(),i(1195,"tr",14)(1196,"td",15),e(1197," params"),t(),i(1198,"td",19)(1199,"code",43),e(1200," { property: string, value: string } "),t()(),i(1201,"td",22)(1202,"p"),e(1203,"Objeto contendo a propriedade e o valor respons\xE1vel por realizar o filtro."),t()()()(),l(1204,"br"),i(1205,"table",40)(1206,"tr",14)(1207,"th",41)(1208,"div",23)(1209,"h4")(1210,"span",24),e(1211," getObjectsByValues "),t()()()()(),i(1212,"tr",22)(1213,"td",22)(1214,"p"),e(1215,`M\xE9todo que ser\xE1 chamado ao iniciar o componente com valor, deve retornar um Observable que cont\xE9m apenas os objetos filtrados que
seguem a interface `),i(1216,"code"),e(1217,"PoMultiselectOption"),t(),e(1218,", ser\xE1 informado por par\xE2metro valor a ser pesquisado."),t()()()(),i(1219,"h5")(1220,"b"),e(1221,"Par\xE2metros"),t()(),i(1222,"table",11)(1223,"tr",12)(1224,"th",13),e(1225,"Nome"),t(),i(1226,"th",13),e(1227,"Tipo"),t(),i(1228,"th",13),e(1229,"Descri\xE7\xE3o"),t()(),i(1230,"tr",14)(1231,"td",15),e(1232," values"),t(),i(1233,"td",19)(1234,"code",44),e(1235," Array<string "),t(),i(1236,"code",45),e(1237," number> "),t()(),i(1238,"td",22)(1239,"p"),e(1240,"Array com os valores a serem buscados."),t()()()(),l(1241,"br"),i(1242,"h4",42)(1243,"code",5),e(1244,"PoMultiselectLiterals"),t()(),i(1245,"div",2)(1246,"p"),e(1247,"Interface para defini\xE7\xE3o das literais usadas no "),i(1248,"code"),e(1249,"po-multiselect"),t(),e(1250,"."),t()(),i(1251,"h4",10),e(1252,"Propriedades"),t(),i(1253,"table",11)(1254,"tr",12)(1255,"th",13),e(1256,"Nome"),t(),i(1257,"th",13),e(1258,"Tipo"),t(),i(1259,"th",13),e(1260,"Descri\xE7\xE3o"),t()(),i(1261,"tr",14)(1262,"td",15)(1263,"div",23)(1264,"span",24),e(1265," noData"),l(1266,"br"),t()()(),i(1267,"td",19)(1268,"code",25),e(1269,"string"),t()(),i(1270,"td",22)(1271,"em")(1272,"strong"),e(1273,"(opcional)"),t()(),i(1274,"p"),e(1275,"Texto exibido quando n\xE3o houver dados encontrados na busca."),t()()(),i(1276,"tr",14)(1277,"td",15)(1278,"div",23)(1279,"span",24),e(1280," placeholderSearch"),l(1281,"br"),t()()(),i(1282,"td",19)(1283,"code",25),e(1284,"string"),t()(),i(1285,"td",22)(1286,"em")(1287,"strong"),e(1288,"(opcional)"),t()(),i(1289,"p"),e(1290,"Texto do "),i(1291,"em"),e(1292,"placeholder"),t(),e(1293," do campo de busca."),t()()(),i(1294,"tr",14)(1295,"td",15)(1296,"div",23)(1297,"span",24),e(1298," selectAll"),l(1299,"br"),t()()(),i(1300,"td",19)(1301,"code",25),e(1302,"string"),t()(),i(1303,"td",22)(1304,"em")(1305,"strong"),e(1306,"(opcional)"),t()(),i(1307,"p"),e(1308,"Texto exibido no bot\xE3o de selecionar todos."),t()()(),i(1309,"tr",14)(1310,"td",15)(1311,"div",23)(1312,"span",24),e(1313," selectItem"),l(1314,"br"),t()()(),i(1315,"td",19)(1316,"code",25),e(1317,"string"),t()(),i(1318,"td",22)(1319,"em")(1320,"strong"),e(1321,"(opcional)"),t()(),i(1322,"p"),e(1323,"Texto exibido na propriedade placeholder."),t()()()(),i(1324,"h4",42)(1325,"code",5),e(1326,"PoMultiselectOption"),t()(),i(1327,"div",2)(1328,"p"),e(1329,"Interface dos itens da cole\xE7\xE3o que ser\xE1 exibida no dropdown do po-multiselect."),t()(),i(1330,"h4",10),e(1331,"Propriedades"),t(),i(1332,"table",11)(1333,"tr",12)(1334,"th",13),e(1335,"Nome"),t(),i(1336,"th",13),e(1337,"Tipo"),t(),i(1338,"th",13),e(1339,"Descri\xE7\xE3o"),t()(),i(1340,"tr",14)(1341,"td",15)(1342,"div",23)(1343,"span",24),e(1344," label"),l(1345,"br"),t()()(),i(1346,"td",19)(1347,"code",25),e(1348,"string"),t()(),i(1349,"td",22)(1350,"p"),e(1351,"Label exibido nos itens da lista."),t()()(),i(1352,"tr",14)(1353,"td",15)(1354,"div",23)(1355,"span",24),e(1356," value"),l(1357,"br"),t()()(),i(1358,"td",19)(1359,"code",25),e(1360,"string "),t(),i(1361,"code",27),e(1362," number"),t()(),i(1363,"td",22)(1364,"p"),e(1365,"Valor do objeto que ser\xE1 atribu\xEDdo ao model."),t()()()(),i(1366,"h3"),e(1367,"Enums"),t(),i(1368,"h4",4)(1369,"code",5),e(1370,"PoMultiselectFilterMode"),t()(),i(1371,"div",2)(1372,"p"),e(1373,"Define o tipo de busca usado no po-multiselect."),t()(),i(1374,"h4",10),e(1375,"Propriedades"),t(),i(1376,"table",11)(1377,"tr",12)(1378,"th",13),e(1379,"Nome"),t(),i(1380,"th",13),e(1381,"Descri\xE7\xE3o"),t()(),i(1382,"tr",14)(1383,"td",15)(1384,"div",23)(1385,"span",24),e(1386," startsWith"),l(1387,"br"),t()()(),i(1388,"td",22)(1389,"p"),e(1390,"Verifica se o texto "),i(1391,"em"),e(1392,"inicia"),t(),e(1393," com o valor pesquisado."),t()()(),i(1394,"tr",14)(1395,"td",15)(1396,"div",23)(1397,"span",24),e(1398," contains"),l(1399,"br"),t()()(),i(1400,"td",22)(1401,"p"),e(1402,"Verifica se o texto "),i(1403,"em"),e(1404,"cont\xE9m"),t(),e(1405," o valor pesquisado."),t()()(),i(1406,"tr",14)(1407,"td",15)(1408,"div",23)(1409,"span",24),e(1410," endsWith"),l(1411,"br"),t()()(),i(1412,"td",22)(1413,"p"),e(1414,"Verifica se o texto "),i(1415,"em"),e(1416,"finaliza"),t(),e(1417," com o valor pesquisado."),t()()()()())},dependencies:[C],encapsulation:2})}return o})();var ze=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=7;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(s,a){this.route=s,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let a=s.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(s){this.router.navigate([],{queryParams:{view:s},queryParamsHandling:"merge"}),this.activeTab=s}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||o)(oe(he),oe(Ee))};static \u0275cmp=E({type:o,selectors:[["ng-component"]],standalone:!1,decls:12,vars:4,consts:[["p-title","Multiselect",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,n){a&1&&(i(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u("p-click",function(){return n.changeTab("doc")}),l(3,"sample-po-multiselect-doc"),t(),i(4,"po-tab",3),u("p-click",function(){return n.changeTab("web")}),l(5,"sample-po-multiselect-basic-view")(6,"sample-po-multiselect-labs-view")(7,"sample-po-multiselect-vacation-view")(8,"sample-po-multiselect-vacation-reactive-form-view")(9,"sample-po-multiselect-template-view")(10,"sample-po-multiselect-heroes-view")(11,"sample-po-multiselect-any-array-view"),t()()()),a&2&&(m("p-actions",n.actions),p(2),m("p-active",n.activeTab==="doc"),p(2),m("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[Ce,y,x,_e,Te,Ae,ke,qe,Fe,We,Ne],encapsulation:2})}return o})();var bt=[{path:"",component:ze}],Ie=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=Y({type:o});static \u0275inj=K({imports:[ae.forChild(bt),ae]})}return o})();var ui=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=Y({type:o});static \u0275inj=K({imports:[Me,Ie]})}return o})();export{ui as DocPoMultiselectModule};
