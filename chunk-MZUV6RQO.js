import{o as C,p as Me}from"./chunk-ANUCWWDU.js";import{Ab as x,Fa as ye,J as ve,Ka as xe,La as T,O as ge,Q as R,S as ee,Sa as ie,U as te,Xa as L,a as j,m as Se,nb as Ce,v as k,za as fe,zb as y}from"./chunk-WNVHYHMN.js";import{Aa as m,Ac as J,Cb as w,Da as M,Dc as A,Ec as z,Fc as $,Gc as O,Ha as X,Hc as I,Kc as ce,La as i,Lc as ue,M as re,Ma as t,N as K,Na as l,Pb as Z,Pc as be,Q as B,Ra as W,Sa as u,U as b,Uc as he,V as h,Wc as Ee,Yc as ae,_b as de,a as Q,bb as q,cb as e,db as se,eb as P,gb as S,hb as v,ib as g,ja as p,jb as me,ka as oe,lb as _,p as ne,qa as E,ra as Y,rb as H,ub as N,wa as le}from"./chunk-KZJHT32G.js";var Pe=(()=>{class o{options=[{value:"poMultiselect1",label:"PO Multiselect 1"},{value:"poMultiselect2",label:"PO Multiselect 2"}];static \u0275fac=function(a){return new(a||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-multiselect-basic"]],standalone:!1,decls:1,vars:1,consts:[["name","multiselect","p-label","PO Multiselect",3,"p-options"]],template:function(a,n){a&1&&l(0,"po-multiselect",0),a&2&&m("p-options",n.options)},dependencies:[T],encapsulation:2})}return o})();var je=o=>({"docs-sample-code-tabs":o}),_e=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-multiselect-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(l(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Multiselect Basic"),t(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-multiselect-basic/sample-po-multiselect-basic.component.html"),t(),i(13,"pre",7),e(14,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="options"> </po-multiselect>
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
`),t()()()()(),i(21,"div",10),l(22,"sample-po-multiselect-basic"),t(),l(23,"hr")),a&2&&(p(5),M("po-icon "+n.sampleCodeButtonIcon),p(),P(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,je,n.hideSampleCodeTabs)))},dependencies:[w,C,y,x,Pe],encapsulation:2})}return o})();var we=(()=>{class o{additionalHelpTooltip;customLiterals;event;filterMode;help;label;literals;multiselect;option;options;placeholder;placeholderSearch;properties;fieldErrorMessage;filterService;fieldLabel;fieldValue;size;listboxPosition="bottom";filterModeOptions=[{label:"Starts With",value:"startsWith"},{label:"Contains",value:"contains"},{label:"Ends With",value:"endsWith"}];listboxPositionOptions=[{label:"top",value:"top"},{label:"bottom",value:"bottom"}];propertiesOptions=[{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"hideSearch",label:"Hide Search"},{value:"autoHeight",label:"Auto Height"},{value:"sort",label:"Sort"},{value:"hideSelectAll",label:"Hide Select All"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}addOption(){this.options=[...this.options,Q({},this.option)],this.option={label:void 0,value:void 0}}changeEvent(s){this.event=s}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}restore(){this.additionalHelpTooltip="",this.customLiterals=void 0,this.help="",this.filterMode=void 0,this.label=void 0,this.literals="",this.placeholder="",this.placeholderSearch=void 0,this.properties=[],this.fieldErrorMessage="",this.filterService="",this.fieldLabel="",this.fieldValue="",this.option={label:void 0,value:void 0},this.options=[],this.event="",this.multiselect=[],this.size="medium"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-multiselect-labs"]],standalone:!1,decls:33,vars:49,consts:[["fOption","ngForm"],["f","ngForm"],[1,"po-row"],["name","PO Multiselect",1,"po-md-12",3,"ngModelChange","p-change","p-keydown","ngModel","p-additional-help-tooltip","p-auto-height","p-disabled","p-field-label","p-field-value","p-filter-service","p-filter-mode","p-help","p-hide-search","p-hide-select-all","p-label","p-literals","p-optional","p-options","p-placeholder","p-placeholder-search","p-required","p-field-error-message","p-show-required","p-size","p-sort","p-listbox-control-position","p-error-limit","p-label-text-wrap"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Events",1,"po-md-6",3,"p-value"],["name","optionLabel","p-label","Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","optionValue","p-label","Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Option",1,"po-md-4","po-lg-2",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholderSearch","p-clean","","p-label","Placeholder Search",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: {"noData": "Sem dados a serem exibidos", "placeholderSearch": "Buscar"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","filterService","p-clean","","p-help","https://po-sample-api.onrender.com/v1/heroes","p-label","Filter Service",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","fieldValue","p-clean","","p-label","Field Value",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldLabel","p-clean","","p-label","Field Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","filterMode","p-columns","4","p-label","Filter mode",1,"po-md-12",3,"ngModelChange","ngModel","p-disabled","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","listboxPosition","p-label","Listbox Position",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(a,n){if(a&1){let c=W();i(0,"div",2)(1,"po-multiselect",3),g("ngModelChange",function(r){return b(c),v(n.multiselect,r)||(n.multiselect=r),h(r)}),u("p-change",function(){return b(c),h(n.changeEvent("p-change"))})("p-keydown",function(){return b(c),h(n.changeEvent("p-keydown"))}),t()(),l(2,"po-divider"),i(3,"div",2),l(4,"po-info",4)(5,"po-info",5),t(),l(6,"po-divider"),i(7,"form",null,0)(9,"div",2)(10,"po-input",6),g("ngModelChange",function(r){return b(c),v(n.option.label,r)||(n.option.label=r),h(r)}),t(),i(11,"po-input",7),g("ngModelChange",function(r){return b(c),v(n.option.value,r)||(n.option.value=r),h(r)}),t()(),i(12,"div",2)(13,"po-button",8),u("p-click",function(){return b(c),h(n.addOption())}),t()()(),l(14,"po-divider"),i(15,"form",null,1)(17,"po-input",9),g("ngModelChange",function(r){return b(c),v(n.label,r)||(n.label=r),h(r)}),t(),i(18,"po-input",10),g("ngModelChange",function(r){return b(c),v(n.help,r)||(n.help=r),h(r)}),t(),i(19,"po-input",11),g("ngModelChange",function(r){return b(c),v(n.additionalHelpTooltip,r)||(n.additionalHelpTooltip=r),h(r)}),t(),i(20,"po-input",12),g("ngModelChange",function(r){return b(c),v(n.placeholder,r)||(n.placeholder=r),h(r)}),t(),i(21,"po-input",13),g("ngModelChange",function(r){return b(c),v(n.placeholderSearch,r)||(n.placeholderSearch=r),h(r)}),t(),i(22,"po-input",14),g("ngModelChange",function(r){return b(c),v(n.fieldErrorMessage,r)||(n.fieldErrorMessage=r),h(r)}),t(),i(23,"po-input",15),g("ngModelChange",function(r){return b(c),v(n.literals,r)||(n.literals=r),h(r)}),u("p-change",function(){return b(c),h(n.changeLiterals())}),t(),i(24,"po-input",16),g("ngModelChange",function(r){return b(c),v(n.filterService,r)||(n.filterService=r),h(r)}),t(),i(25,"po-input",17),g("ngModelChange",function(r){return b(c),v(n.fieldValue,r)||(n.fieldValue=r),h(r)}),t(),i(26,"po-input",18),g("ngModelChange",function(r){return b(c),v(n.fieldLabel,r)||(n.fieldLabel=r),h(r)}),t(),i(27,"po-checkbox-group",19),g("ngModelChange",function(r){return b(c),v(n.properties,r)||(n.properties=r),h(r)}),t(),i(28,"po-radio-group",20),g("ngModelChange",function(r){return b(c),v(n.filterMode,r)||(n.filterMode=r),h(r)}),t(),i(29,"po-radio-group",21),g("ngModelChange",function(r){return b(c),v(n.size,r)||(n.size=r),h(r)}),t(),i(30,"po-radio-group",22),g("ngModelChange",function(r){return b(c),v(n.listboxPosition,r)||(n.listboxPosition=r),h(r)}),t(),i(31,"div",2)(32,"po-button",23),u("p-click",function(){return b(c),h(n.restore())}),t()()()}if(a&2){let c=q(8);p(),S("ngModel",n.multiselect),m("p-additional-help-tooltip",n.additionalHelpTooltip)("p-auto-height",n.properties.includes("autoHeight"))("p-disabled",n.properties.includes("disabled"))("p-field-label",n.fieldLabel)("p-field-value",n.fieldValue)("p-filter-service",n.filterService)("p-filter-mode",n.filterMode)("p-help",n.help)("p-hide-search",n.properties.includes("hideSearch"))("p-hide-select-all",n.properties.includes("hideSelectAll"))("p-label",n.label)("p-literals",n.customLiterals)("p-optional",n.properties.includes("optional"))("p-options",n.options)("p-placeholder",n.placeholder)("p-placeholder-search",n.placeholderSearch)("p-required",n.properties.includes("required"))("p-field-error-message",n.fieldErrorMessage)("p-show-required",n.properties.includes("showRequired"))("p-size",n.size)("p-sort",n.properties.includes("sort"))("p-listbox-control-position",n.listboxPosition)("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit"))("p-label-text-wrap",n.properties==null?null:n.properties.includes("labelTextWrap")),p(3),m("p-value",n.multiselect),p(),m("p-value",n.event),p(5),S("ngModel",n.option.label),p(),S("ngModel",n.option.value),p(2),m("p-disabled",c.form.invalid),p(4),S("ngModel",n.label),p(),S("ngModel",n.help),p(),S("ngModel",n.additionalHelpTooltip),p(),S("ngModel",n.placeholder),p(),S("ngModel",n.placeholderSearch),p(),S("ngModel",n.fieldErrorMessage),p(),S("ngModel",n.literals),p(),S("ngModel",n.filterService),p(),S("ngModel",n.fieldValue),p(),S("ngModel",n.fieldLabel),p(),S("ngModel",n.properties),m("p-options",n.propertiesOptions),p(),S("ngModel",n.filterMode),m("p-disabled",n.properties.includes("hideSearch"))("p-options",n.filterModeOptions),p(),S("ngModel",n.size),m("p-options",n.sizeOptions),p(),S("ngModel",n.listboxPosition),m("p-options",n.listboxPositionOptions)}},dependencies:[I,A,z,O,$,k,j,ge,R,ye,T,L],encapsulation:2})}return o})();var Ue=o=>({"docs-sample-code-tabs":o}),Te=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-multiselect-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(l(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Multiselect Labs"),t(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-multiselect-labs/sample-po-multiselect-labs.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
  <po-multiselect
    class="po-md-12"
    name="PO Multiselect"
    [(ngModel)]="multiselect"
    [p-additional-help-tooltip]="additionalHelpTooltip"
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

  <po-input
    class="po-md-6"
    name="additionalHelpTooltip"
    [(ngModel)]="additionalHelpTooltip"
    p-clean
    p-label="Additional Help"
  >
  </po-input>

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
  additionalHelpTooltip: string;
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
    this.additionalHelpTooltip = '';
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
`),t()()()()(),i(21,"div",10),l(22,"sample-po-multiselect-labs"),t(),l(23,"hr")),a&2&&(p(5),M("po-icon "+n.sampleCodeButtonIcon),p(),P(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,Ue,n.hideSampleCodeTabs)))},dependencies:[w,C,y,x,we],encapsulation:2})}return o})();var Ve=(()=>{class o{days;employeesVacations=[];finalPeriod;initialPeriod;nameEmployeesVacations;employees=[{value:"412341",label:"Alfred"},{value:"518734",label:"Alice"},{value:"986237",label:"Bradley"},{value:"941278",label:"Jackie"},{value:"897643",label:"Phillip"},{value:"423767",label:"Reynold"},{value:"423837",label:"Robert"}];daysOptions=[{value:10,label:"10"},{value:20,label:"20"},{value:30,label:"30"}];ngOnInit(){this.clean()}clean(){this.days=20,this.initialPeriod=void 0,this.finalPeriod=void 0,this.employeesVacations=[]}updateNameEmployeesVacations(){this.nameEmployeesVacations=this.employees.filter(s=>this.employeesVacations.includes(s.value)).map(s=>s.label).join(", ")}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-multiselect-vacation"]],standalone:!1,decls:26,vars:20,consts:[["f","ngForm"],["modalEmployeesVacation",""],[1,"po-row"],["name","initialPeriod","p-label","Initial period","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","finalPeriod","p-label","Final period","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-min-date"],["name","days","p-help","Maximum of days that employs can choose","p-label","How many days of vacation the employees will be able to have?","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","employeesVacations","p-label","Select your employees for collective vacations","p-required","",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","Approve Vacations","p-label","Approve Vacations",1,"po-md-4","po-offset-md-5","po-offset-lg-5","po-offset-xl-5",3,"p-click","p-disabled"],["p-label","Clean",1,"po-md-3",3,"p-click"],["p-title","Collective Vacation"],["p-label","Initial period",1,"po-md-5",3,"p-value"],["p-label","Final period",1,"po-md-5",3,"p-value"],["p-label","Days",1,"po-md-2",3,"p-value"],["p-label","Employees",1,"po-lg-12",3,"p-value"]],template:function(a,n){if(a&1){let c=W();i(0,"form",null,0)(2,"h3"),e(3,"Collective vacations"),t(),l(4,"po-divider"),i(5,"div",2)(6,"po-datepicker",3),g("ngModelChange",function(r){return b(c),v(n.initialPeriod,r)||(n.initialPeriod=r),h(r)}),t(),i(7,"po-datepicker",4),g("ngModelChange",function(r){return b(c),v(n.finalPeriod,r)||(n.finalPeriod=r),h(r)}),t()(),i(8,"div",2)(9,"po-radio-group",5),g("ngModelChange",function(r){return b(c),v(n.days,r)||(n.days=r),h(r)}),t()(),i(10,"div",2)(11,"po-multiselect",6),g("ngModelChange",function(r){return b(c),v(n.employeesVacations,r)||(n.employeesVacations=r),h(r)}),t()(),i(12,"div",2)(13,"po-button",7),u("p-click",function(){b(c);let r=q(16);return n.updateNameEmployeesVacations(),h(r.open())}),t(),i(14,"po-button",8),u("p-click",function(){return b(c),h(n.clean())}),t()()(),i(15,"po-modal",9,1)(17,"div",2),l(18,"po-info",10),H(19,"date"),l(20,"po-info",11),H(21,"date"),l(22,"po-info",12),t(),l(23,"po-divider"),i(24,"div",2),l(25,"po-info",13),t()()}if(a&2){let c=q(1);p(6),S("ngModel",n.initialPeriod),p(),S("ngModel",n.finalPeriod),m("p-min-date",n.initialPeriod),p(2),S("ngModel",n.days),m("p-options",n.daysOptions),p(2),S("ngModel",n.employeesVacations),m("p-options",n.employees),p(2),m("p-disabled",c.form.invalid),p(5),m("p-value",N(19,12,n.initialPeriod,"longDate","+0000")),p(2),m("p-value",N(21,16,n.finalPeriod,"longDate","+0000")),p(2),m("p-value",n.days),p(3),m("p-value",n.nameEmployeesVacations)}},dependencies:[I,A,z,O,$,k,j,R,ee,T,L,te,Z],encapsulation:2})}return o})();var Ke=o=>({"docs-sample-code-tabs":o}),Ae=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-multiselect-vacation-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(l(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Multiselect - Vacation"),t(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-multiselect-vacation/sample-po-multiselect-vacation.component.html"),t(),i(13,"pre",7),e(14,`<form #f="ngForm">
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
`),t()()()()(),i(21,"div",10),l(22,"sample-po-multiselect-vacation"),t(),l(23,"hr")),a&2&&(p(5),M("po-icon "+n.sampleCodeButtonIcon),p(),P(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,Ke,n.hideSampleCodeTabs)))},dependencies:[w,C,y,x,Ve],encapsulation:2})}return o})();var Oe=(()=>{class o{formBuilder=B(be);days;employeesVacations=[];finalPeriod;formCollectiveVacations;initialPeriod;nameEmployeesVacations;employees=[{value:"412341",label:"Alfred"},{value:"518734",label:"Alice"},{value:"986237",label:"Bradley"},{value:"941278",label:"Jackie"},{value:"112333",label:"Jane"},{value:"989898",label:"John"},{value:"897643",label:"Phillip"},{value:"423767",label:"Reynold"},{value:"423837",label:"Robert"}];daysOptions=[{value:10,label:"10"},{value:20,label:"20"},{value:30,label:"30"}];ngOnInit(){this.formCollectiveVacations=this.formBuilder.group({initialPeriod:[null,J.required],finalPeriod:[null,J.required],days:[null,J.required],employeesVacations:[null,J.required]}),this.clean()}clean(){this.formCollectiveVacations.patchValue({days:20,initialPeriod:void 0,finalPeriod:void 0,employeesVacations:void 0})}getRangeFinalPeriod(){return this.formCollectiveVacations.get("initialPeriod").value}updateEmployeesVacations(){this.nameEmployeesVacations=this.employees.filter(s=>this.formCollectiveVacations.get("employeesVacations").value.includes(s.value)).map(s=>s.label).join(", "),this.initialPeriod=this.formCollectiveVacations.get("initialPeriod").value,this.finalPeriod=this.formCollectiveVacations.get("finalPeriod").value,this.days=this.formCollectiveVacations.get("days").value}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-multiselect-vacation-reactive-form"]],standalone:!1,decls:24,vars:20,consts:[["modalEmployeesVacation",""],[3,"formGroup"],[1,"po-row"],["name","initialPeriod","formControlName","initialPeriod","p-label","Initial period","p-required","",1,"po-md-6"],["name","finalPeriod","formControlName","finalPeriod","p-label","Final period","p-required","",1,"po-md-6",3,"p-min-date"],["name","employeesVacations","formControlName","employeesVacations","p-label","Select your employees for collective vacations",1,"po-md-4",3,"p-auto-height","p-options","p-required"],["name","days","formControlName","days","p-label","How many days of vacation the employees will be able to have?","p-required","",1,"po-lg-8",3,"p-options","p-columns"],["name","Approve Vacations","p-label","Approve Vacations",1,"po-md-4","po-offset-md-5","po-offset-lg-5","po-offset-xl-5",3,"p-click","p-disabled"],["p-label","Clean",1,"po-md-3",3,"p-click"],["p-title","Collective Vacation"],["p-label","Initial period",1,"po-md-5",3,"p-value"],["p-label","Final period",1,"po-md-5",3,"p-value"],["p-label","Days",1,"po-md-2",3,"p-value"],["p-label","Employees",1,"po-lg-12",3,"p-value"]],template:function(a,n){if(a&1){let c=W();i(0,"form",1)(1,"h3"),e(2,"Collective vacations"),t(),l(3,"po-divider"),i(4,"div",2),l(5,"po-datepicker",3)(6,"po-datepicker",4),t(),i(7,"div",2),l(8,"po-multiselect",5)(9,"po-radio-group",6),t(),i(10,"div",2)(11,"po-button",7),u("p-click",function(){b(c);let r=q(14);return n.updateEmployeesVacations(),h(r.open())}),t(),i(12,"po-button",8),u("p-click",function(){return b(c),h(n.clean())}),t()()(),i(13,"po-modal",9,0)(15,"div",2),l(16,"po-info",10),H(17,"date"),l(18,"po-info",11),H(19,"date"),l(20,"po-info",12),t(),l(21,"po-divider"),i(22,"div",2),l(23,"po-info",13),t()()}a&2&&(m("formGroup",n.formCollectiveVacations),p(6),m("p-min-date",n.getRangeFinalPeriod()),p(2),m("p-auto-height",!0)("p-options",n.employees)("p-required",!0),p(),m("p-options",n.daysOptions)("p-columns",3),p(2),m("p-disabled",n.formCollectiveVacations.invalid),p(5),m("p-value",N(17,12,n.initialPeriod,"longDate","+0000")),p(2),m("p-value",N(19,16,n.finalPeriod,"longDate","+0000")),p(2),m("p-value",n.days),p(3),m("p-value",n.nameEmployeesVacations))},dependencies:[I,A,z,ce,ue,k,j,R,ee,T,L,te,Z],encapsulation:2})}return o})();var Ze=o=>({"docs-sample-code-tabs":o}),ke=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-multiselect-vacation-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(l(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Multiselect - Vacation Reactive Form"),t(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-multiselect-vacation-reactive-form/sample-po-multiselect-vacation-reactive-form.component.html"),t(),i(13,"pre",7),e(14,`<form [formGroup]="formCollectiveVacations">
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
`),t()()()()(),i(21,"div",10),l(22,"sample-po-multiselect-vacation-reactive-form"),t(),l(23,"hr")),a&2&&(p(5),M("po-icon "+n.sampleCodeButtonIcon),p(),P(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,Ze,n.hideSampleCodeTabs)))},dependencies:[w,C,y,x,Oe],encapsulation:2})}return o})();function et(o,G){o&1&&l(0,"po-tag",11),o&2&&m("p-icon",!0)}function tt(o,G){o&1&&l(0,"po-tag",12),o&2&&m("p-icon",!0)}function it(o,G){o&1&&l(0,"po-tag",13),o&2&&m("p-icon",!0)}function nt(o,G){if(o&1&&(i(0,"div",0)(1,"div",7)(2,"div",8),e(3),t()(),i(4,"div",9)(5,"div",10),le(6,et,1,1,"po-tag",11)(7,tt,1,1,"po-tag",12)(8,it,1,1,"po-tag",13),t()()()),o&2){let s=G.$implicit;p(3),se(s.label),p(3),X(s.admin?6:-1),p(),X(s.access?7:-1),p(),X(!s.admin&&!s.access?8:-1)}}var Le=(()=>{class o{employee;typeAccess;typeAccessMap={admin:{admin:!0,access:!0},access:{admin:!1,access:!0},noAccess:{admin:!1,access:!1}};options=[{value:"Anna M.",label:"Anna M.",admin:!1,access:!0},{value:"Jhon T.",label:"Jhon T.",admin:!0,access:!0},{value:"Marie J.",label:"Marie J.",admin:!1,access:!1}];employees=[{label:"Anna M.",value:"Anna M."},{label:"Jhon T.",value:"Jhon T."},{label:"Marie J.",value:"Marie J."}];typeAccessValue=[{label:"Admin e acesso padr\xE3o",value:"admin"},{label:"Acesso padr\xE3o",value:"access"},{label:"Sem acesso",value:"noAccess"}];changeAccess(){let s=[...this.options].map(a=>a.value===this.employee?Q({value:a.value,label:a.label},this.typeAccessMap[this.typeAccess]):a);this.options=s,this.employee=void 0,this.typeAccess=void 0}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-multiselect-template"]],standalone:!1,decls:7,vars:7,consts:[[1,"po-row"],["name","employee","p-label","Employee",1,"po-md-5",3,"ngModelChange","p-options","ngModel"],["name","typeOfAccess","p-label","Type of access",1,"po-md-6",3,"ngModelChange","p-options","ngModel"],[1,"po-md-1","containerButton"],["p-label","Alterar acesso",3,"p-click","p-disabled"],["name","multiselect","p-label","PO Multiselect",1,"po-md-12",3,"p-options","p-hide-select-all"],["p-multiselect-option-template",""],[1,"po-md-2","containerFlex"],[1,"po-font-text-large-bold"],[1,"po-md-10"],[1,"containerFlexTag"],["p-value","Admin","p-type","success",3,"p-icon"],["p-value","Normal","p-type","info",3,"p-icon"],["p-value","Sem acesso","p-type","danger",3,"p-icon"]],template:function(a,n){a&1&&(i(0,"div",0)(1,"po-select",1),g("ngModelChange",function(d){return v(n.employee,d)||(n.employee=d),d}),t(),i(2,"po-select",2),g("ngModelChange",function(d){return v(n.typeAccess,d)||(n.typeAccess=d),d}),t(),i(3,"div",3)(4,"po-button",4),u("p-click",function(){return n.changeAccess()}),t()(),i(5,"po-multiselect",5),le(6,nt,9,4,"ng-template",6),t()()),a&2&&(p(),m("p-options",n.employees),S("ngModel",n.employee),p(),m("p-options",n.typeAccessValue),S("ngModel",n.typeAccess),p(2),m("p-disabled",!n.employee||!n.typeAccess),p(),m("p-options",n.options)("p-hide-select-all",!0))},dependencies:[A,O,k,xe,T,ie,Se],styles:[".containerFlex[_ngcontent-%COMP%]{display:flex;align-items:center}.containerFlexTag[_ngcontent-%COMP%]{display:flex;gap:2px;flex-direction:column}.containerButton[_ngcontent-%COMP%]{display:flex;align-items:flex-end;padding:8px}"]})}return o})();var lt=o=>({"docs-sample-code-tabs":o}),De=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-multiselect-template-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(l(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Multiselect - Template"),t(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-multiselect-template/sample-po-multiselect-template.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
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
`),t()()()()(),i(21,"div",10),l(22,"sample-po-multiselect-template"),t(),l(23,"hr")),a&2&&(p(5),M("po-icon "+n.sampleCodeButtonIcon),p(),P(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,lt,n.hideSampleCodeTabs)))},dependencies:[w,C,y,x,Le],encapsulation:2})}return o})();var pe=(()=>{class o{http=B(de);getFilteredData({value:s}){let a={filter:s};return this.http.get("https://po-sample-api.onrender.com/v1/heroes?page=1&pageSize=10",{params:a}).pipe(ne(n=>n.items))}getObjectsByValues(s){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/?value=${s.toString()}`).pipe(ne(a=>a.items))}static \u0275fac=function(a){return new(a||o)};static \u0275prov=re({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var qe=(()=>{class o{samplePoMultiselectHeroesService=B(pe);debounce=500;filterService;heroes;multiselect=["1495831666871","1405833068599"];columns=[{property:"value",label:"id"},{property:"label",label:"Name",type:"link",action:s=>{this.openLink(s)}}];constructor(){let s=this.samplePoMultiselectHeroesService;this.filterService=s}changeOptions(s){this.heroes=[...s]}openLink(s){window.open(`http://google.com/search?q=${s}`,"_blank")}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-multiselect-heroes"]],standalone:!1,features:[me([pe])],decls:4,vars:9,consts:[[1,"po-row"],["name","multiselect","p-label","Search a Hero",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-filter-service","p-debounce-time"],[1,"po-md-6"],[3,"p-columns","p-items","p-height","p-striped","p-hide-columns-manager","p-hide-table-search"]],template:function(a,n){a&1&&(i(0,"div",0)(1,"po-multiselect",1),g("ngModelChange",function(d){return v(n.multiselect,d)||(n.multiselect=d),d}),u("p-change",function(d){return n.changeOptions(d)}),t(),i(2,"po-container",2),l(3,"po-table",3),t()()),a&2&&(p(),S("ngModel",n.multiselect),m("p-filter-service",n.filterService)("p-debounce-time",n.debounce),p(2),m("p-columns",n.columns)("p-items",n.heroes)("p-height",220)("p-striped",!0)("p-hide-columns-manager",!0)("p-hide-table-search",!1))},dependencies:[A,O,ve,T,fe],encapsulation:2})}return o})();var rt=o=>({"docs-sample-code-tabs":o}),Fe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-multiselect-heroes-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(l(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Multiselect - Heroes - using API"),t(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-multiselect-heroes/sample-po-multiselect-heroes.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
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
`),t()()()()(),i(25,"div",10),l(26,"sample-po-multiselect-heroes"),t(),l(27,"hr")),a&2&&(p(5),M("po-icon "+n.sampleCodeButtonIcon),p(),P(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,rt,n.hideSampleCodeTabs)))},dependencies:[w,C,y,x,qe],encapsulation:2})}return o})();var Be=(()=>{class o{company;fieldLabel="razaoSocial";fieldValue="cnpj";options=[{codigo:"1",nomeFantasia:"TOTVS SA",razaoSocial:"TOTVS LTDA",label:"TOTVS COMPANY",cnpj:"01.234.567/0000-01",value:"100",id:"10",email:"totvscompany@sample.com",data:"10/03/2015",origem:"S\xE3o Paulo"},{codigo:"2",nomeFantasia:"INSTITUTO TOTVS DE ENSINO SA",razaoSocial:"INST TOTVS DE ENSINO LTDA",label:"INST TOTVS",cnpj:"02.345.678/0000-02",value:"200",id:"20",email:"insttotvs@sample.com",data:"10/10/2020",origem:"Joinville"},{codigo:"3",nomeFantasia:"TOTVS ENTERPRISE SA",razaoSocial:"TOTVS ENTERPRISE LTDA ",label:"ENT TOTVS",cnpj:"03.456.789/0000-03",value:"300",id:"30",email:"enttotvs@sample.com",data:"10/01/2022",origem:"Curitiba"}];optionsSelect=[{label:"codigo",value:"codigo"},{label:"nomeFantasia",value:"nomeFantasia"},{label:"razaoSocial",value:"razaoSocial"},{label:"label",value:"label"},{label:"cnpj",value:"cnpj"},{label:"value",value:"value"},{label:"id",value:"id"},{label:"email",value:"email"},{label:"data",value:"data"},{label:"origem",value:"origem"}];onChange(s){this.company=void 0}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-multiselect-any-array"]],standalone:!1,decls:9,vars:9,consts:[[1,"po-row"],[1,"po-md-6"],["name","label","p-label","Select Field Label",3,"ngModelChange","p-change","p-options","ngModel"],["name","label","p-label","Select Field Value",3,"ngModelChange","p-change","p-options","ngModel"],["name","multiselect","p-label","Select your Company","p-listbox-control-position","top",1,"po-md-12",3,"ngModelChange","p-options","p-field-value","p-field-label","ngModel"],["p-label","Model",1,"po-md-12",3,"p-value"]],template:function(a,n){a&1&&(i(0,"div",0)(1,"div",1)(2,"po-select",2),g("ngModelChange",function(d){return v(n.fieldLabel,d)||(n.fieldLabel=d),d}),u("p-change",function(d){return n.onChange(d)}),t(),i(3,"po-select",3),g("ngModelChange",function(d){return v(n.fieldValue,d)||(n.fieldValue=d),d}),u("p-change",function(d){return n.onChange(d)}),t()(),i(4,"div",1)(5,"div",0)(6,"po-multiselect",4),g("ngModelChange",function(d){return v(n.company,d)||(n.company=d),d}),t()(),i(7,"div",0),l(8,"po-info",5),t()()()),a&2&&(p(2),m("p-options",n.optionsSelect),S("ngModel",n.fieldLabel),p(),m("p-options",n.optionsSelect),S("ngModel",n.fieldValue),p(3),m("p-options",n.options)("p-field-value",n.fieldValue)("p-field-label",n.fieldLabel),S("ngModel",n.company),p(2),m("p-value",n.company))},dependencies:[A,O,T,ie,L],encapsulation:2})}return o})();var dt=o=>({"docs-sample-code-tabs":o}),We=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-multiselect-any-array-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(l(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Multiselect - Array Any"),t(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-multiselect-any-array/sample-po-multiselect-any-array.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
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
`),t()()()()(),i(21,"div",10),l(22,"sample-po-multiselect-any-array"),t(),l(23,"hr")),a&2&&(p(5),M("po-icon "+n.sampleCodeButtonIcon),p(),P(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,dt,n.hideSampleCodeTabs)))},dependencies:[w,C,y,x,Be],encapsulation:2})}return o})();var He=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-multiselect-doc"]],standalone:!1,decls:1415,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption"],["pan","",1,"docs-api-property-type","any>"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","{","property:","string,","value:","string","}"],["pan","",1,"docs-api-property-type","Array<string"],["pan","",1,"docs-api-property-type","number>"]],template:function(a,n){a&1&&(i(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),i(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
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
`),t()(),i(221,"h4",10),e(222,"Propriedades"),t(),i(223,"table",11)(224,"tr",12)(225,"th",13),e(226,"Nome"),t(),i(227,"th",13),e(228,"Tipo"),t(),i(229,"th",13),e(230,"Padr\xE3o"),t(),i(231,"th",13),e(232,"Descri\xE7\xE3o"),t()(),i(233,"tr",14)(234,"td",15)(235,"div",16)(236,"span",17),e(237," (p-additional-help)"),l(238,"br"),t()(),i(239,"div",18),e(240,"Deprecated"),t()(),i(241,"td",19)(242,"code",20),e(243,"EventEmitter"),t()(),i(244,"td",21),e(245,"-"),t(),i(246,"td",22)(247,"em")(248,"strong"),e(249,"(opcional)"),t()(),i(250,"p"),e(251,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),i(252,"code"),e(253,"p-help"),t(),e(254,"."),t(),i(255,"blockquote")(256,"p"),e(257,"Essa propriedade est\xE1 "),i(258,"strong"),e(259,"depreciada"),t(),e(260," e ser\xE1 removida na vers\xE3o "),i(261,"code"),e(262,"23.x.x"),t(),e(263,". Recomendamos utilizar a propriedade "),i(264,"code"),e(265,"p-helper"),t(),e(266," que oferece mais recursos e flexibilidade."),t()()()(),i(267,"tr",14)(268,"td",15)(269,"div",23)(270,"span",24),e(271," p-additional-help-tooltip"),l(272,"br"),t()(),i(273,"div",18),e(274,"Deprecated"),t()(),i(275,"td",19)(276,"code",25),e(277,"string"),t()(),i(278,"td",21),e(279,"-"),t(),i(280,"td",22)(281,"em")(282,"strong"),e(283,"(opcional)"),t()(),i(284,"p"),e(285,"Exibe um \xEDcone de ajuda adicional ao "),i(286,"code"),e(287,"p-help"),t(),e(288,`, com o texto desta propriedade no tooltip.
Se o evento `),i(289,"code"),e(290,"p-additional-help"),t(),e(291,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),i(292,"strong"),e(293,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),i(294,"blockquote")(295,"p"),e(296,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),i(297,"blockquote")(298,"p"),e(299,"Essa propriedade est\xE1 "),i(300,"strong"),e(301,"depreciada"),t(),e(302," e ser\xE1 removida na vers\xE3o "),i(303,"code"),e(304,"23.x.x"),t(),e(305,". Recomendamos utilizar a propriedade "),i(306,"code"),e(307,"p-helper"),t(),e(308," que oferece mais recursos e flexibilidade."),t()()()(),i(309,"tr",14)(310,"td",15)(311,"div",23)(312,"span",24),e(313," p-append-in-body"),l(314,"br"),t()()(),i(315,"td",19)(316,"code",26),e(317,"boolean"),t()(),i(318,"td",21)(319,"p")(320,"code"),e(321,"false"),t()()(),i(322,"td",22)(323,"em")(324,"strong"),e(325,"(opcional)"),t()(),i(326,"p"),e(327,"Define que o "),i(328,"code"),e(329,"listbox"),t(),e(330," e/ou tooltip ("),i(331,"code"),e(332,"p-additional-help-tooltip"),t(),e(333," e/ou "),i(334,"code"),e(335,"p-error-limit"),t(),e(336,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),t(),i(337,"blockquote")(338,"p"),e(339,"Quando utilizado com "),i(340,"code"),e(341,"p-additional-help-tooltip"),t(),e(342,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),i(343,"tr",14)(344,"td",15)(345,"div",23)(346,"span",24),e(347," p-auto-focus"),l(348,"br"),t()()(),i(349,"td",19)(350,"code",26),e(351,"boolean"),t()(),i(352,"td",21)(353,"p")(354,"code"),e(355,"false"),t()()(),i(356,"td",22)(357,"em")(358,"strong"),e(359,"(opcional)"),t()(),i(360,"p"),e(361,"Aplica foco no elemento ao ser iniciado."),t(),i(362,"blockquote")(363,"p"),e(364,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),i(365,"tr",14)(366,"td",15)(367,"div",23)(368,"span",24),e(369," p-auto-height"),l(370,"br"),t()()(),i(371,"td",19)(372,"code",26),e(373,"boolean"),t()(),i(374,"td",21)(375,"p")(376,"code"),e(377,"false"),t()()(),i(378,"td",22)(379,"em")(380,"strong"),e(381,"(opcional)"),t()(),i(382,"p"),e(383,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo
com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis.`),t(),i(384,"blockquote")(385,"p"),e(386,"O valor padr\xE3o ser\xE1 "),i(387,"code"),e(388,"true"),t(),e(389," quando houver servi\xE7o ("),i(390,"code"),e(391,"p-filter-service"),t(),e(392,")."),t()()()(),i(393,"tr",14)(394,"td",15)(395,"div",16)(396,"span",17),e(397," (p-blur)"),l(398,"br"),t()()(),i(399,"td",19)(400,"code",20),e(401,"EventEmitter"),t()(),i(402,"td",21),e(403,"-"),t(),i(404,"td",22)(405,"em")(406,"strong"),e(407,"(opcional)"),t()(),i(408,"p"),e(409,"Evento disparado ao sair do campo."),t()()(),i(410,"tr",14)(411,"td",15)(412,"div",16)(413,"span",17),e(414," (p-change)"),l(415,"br"),t()()(),i(416,"td",19)(417,"code",20),e(418,"EventEmitter"),t()(),i(419,"td",21),e(420,"-"),t(),i(421,"td",22)(422,"em")(423,"strong"),e(424,"(opcional)"),t()(),i(425,"p"),e(426,"Pode ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no ngModel."),t()()(),i(427,"tr",14)(428,"td",15)(429,"div",23)(430,"span",24),e(431," p-debounce-time"),l(432,"br"),t()()(),i(433,"td",19)(434,"code",27),e(435,"number"),t()(),i(436,"td",21)(437,"p")(438,"code"),e(439,"400"),t()()(),i(440,"td",22)(441,"em")(442,"strong"),e(443,"(opcional)"),t()(),i(444,"p"),e(445,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla."),t(),i(446,"blockquote")(447,"p"),e(448,"Ser\xE1 utilizada apenas quando houver servi\xE7o ("),i(449,"code"),e(450,"p-filter-service"),t(),e(451,") e somente ser\xE1 aceito valor maior do que "),i(452,"em"),e(453,"zero"),t(),e(454,"."),t()()()(),i(455,"tr",14)(456,"td",15)(457,"div",23)(458,"span",24),e(459," p-disabled"),l(460,"br"),t()()(),i(461,"td",19)(462,"code",26),e(463,"boolean"),t()(),i(464,"td",21)(465,"p")(466,"code"),e(467,"false"),t()()(),i(468,"td",22)(469,"em")(470,"strong"),e(471,"(opcional)"),t()(),i(472,"p"),e(473,"Indica que o campo ser\xE1 desabilitado."),t()()(),i(474,"tr",14)(475,"td",15)(476,"div",23)(477,"span",24),e(478," p-error-limit"),l(479,"br"),t()()(),i(480,"td",19)(481,"code",26),e(482,"boolean"),t()(),i(483,"td",21)(484,"p")(485,"code"),e(486,"false"),t()()(),i(487,"td",22)(488,"em")(489,"strong"),e(490,"(opcional)"),t()(),i(491,"p"),e(492,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),i(493,"blockquote")(494,"p"),e(495,"Caso essa propriedade seja definida como "),i(496,"code"),e(497,"true"),t(),e(498,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),i(499,"tr",14)(500,"td",15)(501,"div",23)(502,"span",24),e(503," p-field-error-message"),l(504,"br"),t()()(),i(505,"td",19)(506,"code",25),e(507,"string"),t()(),i(508,"td",21),e(509,"-"),t(),i(510,"td",22)(511,"em")(512,"strong"),e(513,"(opcional)"),t()(),i(514,"p"),e(515,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),t(),i(516,"blockquote")(517,"p"),e(518,"Necess\xE1rio que a propriedade "),i(519,"code"),e(520,"p-required"),t(),e(521," esteja habilitada."),t()()()(),i(522,"tr",14)(523,"td",15)(524,"div",23)(525,"span",24),e(526," p-field-label"),l(527,"br"),t()()(),i(528,"td",19)(529,"code",25),e(530,"string"),t()(),i(531,"td",21)(532,"p")(533,"code"),e(534,"label"),t()()(),i(535,"td",22)(536,"em")(537,"strong"),e(538,"(opcional)"),t()(),i(539,"p"),e(540,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),i(541,"code"),e(542,"p-options"),t(),e(543,"), esta propriedade ser\xE1 respons\xE1vel pelo texto de apresenta\xE7\xE3o de cada item da lista."),t(),i(544,"p"),e(545,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
`),i(546,"code"),e(547,"PoMultiSelectOption"),t(),e(548,"."),t()()(),i(549,"tr",14)(550,"td",15)(551,"div",23)(552,"span",24),e(553," p-field-value"),l(554,"br"),t()()(),i(555,"td",19)(556,"code",25),e(557,"string"),t()(),i(558,"td",21)(559,"p")(560,"code"),e(561,"value"),t()()(),i(562,"td",22)(563,"em")(564,"strong"),e(565,"(opcional)"),t()(),i(566,"p"),e(567,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),i(568,"code"),e(569,"p-options"),t(),e(570,"), esta propriedade ser\xE1 respons\xE1vel pelo valor de cada item da lista."),t(),i(571,"p"),e(572,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
`),i(573,"code"),e(574,"PoMultiSelectOption"),t(),e(575,"."),t()()(),i(576,"tr",14)(577,"td",15)(578,"div",23)(579,"span",24),e(580," p-filter-mode"),l(581,"br"),t()()(),i(582,"td",19)(583,"code",28),e(584,"PoMultiselectFilterMode"),t()(),i(585,"td",21)(586,"p")(587,"code"),e(588,"startsWith"),t()()(),i(589,"td",22)(590,"em")(591,"strong"),e(592,"(opcional)"),t()(),i(593,"p"),e(594,`Define o modo de pesquisa utilizado no campo de busca, quando habilitado.
Valores definidos no enum: PoMultiselectFilterMode`),t()()(),i(595,"tr",14)(596,"td",15)(597,"div",23)(598,"span",24),e(599," p-filter-service"),l(600,"br"),t()()(),i(601,"td",19)(602,"code",25),e(603,"string "),t(),i(604,"code",29),e(605," PoMultiselectFilter"),t()(),i(606,"td",21),e(607,"-"),t(),i(608,"td",22)(609,"em")(610,"strong"),e(611,"(opcional)"),t()(),i(612,"p"),e(613,"Nesta propriedade pode ser informada a URL do servi\xE7o em que ser\xE1 realizado o filtro para carregamento da lista de itens no componente."),t(),i(614,"p"),e(615,"Tamb\xE9m existe a possibilidade de informar um servi\xE7o implementando a interface "),i(616,"code"),e(617,"PoMultiselectFilter"),t(),e(618,"."),t(),i(619,"p"),e(620,"Caso utilizado uma URL, o servi\xE7o deve ser retornado no padr\xE3o "),i(621,"a",30),e(622,"API PO UI"),t(),e(623," e utilizar as propriedades "),i(624,"code"),e(625,"p-field-label"),t(),e(626," e "),i(627,"code"),e(628,"p-field-value"),t(),e(629," para a constru\xE7\xE3o da lista de itens."),t(),i(630,"p"),e(631,"Quando utilizada uma URL de servi\xE7o, ent\xE3o ser\xE1 concatenada nesta URL o valor que deseja-se filtrar da seguinte forma:"),t(),i(632,"pre")(633,"code"),e(634,`// caso filtrar por "Peter"
https://localhost:8080/api/heroes?filter=Peter
`),t()(),i(635,"p"),e(636,"E caso iniciar o campo com valor, os itens ser\xE3o buscados da seguinte forma:"),t(),i(637,"pre")(638,"code"),e(639,`// caso o valor do campo for [1234, 5678];
 https://localhost:8080/api/heroes?value=1234,5678

//O *value* \xE9 referente ao \`fieldValue\`.
`),t()()()(),i(640,"tr",14)(641,"td",15)(642,"div",23)(643,"span",24),e(644," p-help"),l(645,"br"),t()()(),i(646,"td",19)(647,"code",25),e(648,"string"),t()(),i(649,"td",21),e(650,"-"),t(),i(651,"td",22)(652,"em")(653,"strong"),e(654,"(opcional)"),t()(),i(655,"p"),e(656,"Texto de apoio para o campo."),t()()(),i(657,"tr",14)(658,"td",15)(659,"div",23)(660,"span",24),e(661," p-hide-search"),l(662,"br"),t()()(),i(663,"td",19)(664,"code",26),e(665,"boolean"),t()(),i(666,"td",21)(667,"p")(668,"code"),e(669,"false"),t()()(),i(670,"td",22)(671,"em")(672,"strong"),e(673,"(opcional)"),t()(),i(674,"p"),e(675,"Esconde o campo de pesquisa existente dentro do dropdown do po-multiselect."),t()()(),i(676,"tr",14)(677,"td",15)(678,"div",23)(679,"span",24),e(680," p-hide-select-all"),l(681,"br"),t()()(),i(682,"td",19)(683,"code",26),e(684,"boolean"),t()(),i(685,"td",21)(686,"p")(687,"code"),e(688,"false"),t()()(),i(689,"td",22)(690,"em")(691,"strong"),e(692,"(opcional)"),t()(),i(693,"p"),e(694,'Indica se o campo "Selecionar todos" ser\xE1 escondido.'),t()()(),i(695,"tr",14)(696,"td",15)(697,"div",16)(698,"span",17),e(699," (p-keydown)"),l(700,"br"),t()()(),i(701,"td",19)(702,"code",20),e(703,"EventEmitter"),t()(),i(704,"td",21),e(705,"-"),t(),i(706,"td",22)(707,"em")(708,"strong"),e(709,"(opcional)"),t()(),i(710,"p"),e(711,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),i(712,"code"),e(713,"KeyboardEvent"),t(),e(714," com informa\xE7\xF5es sobre a tecla."),t()()(),i(715,"tr",14)(716,"td",15)(717,"div",23)(718,"span",24),e(719," p-label"),l(720,"br"),t()()(),i(721,"td",19)(722,"code",25),e(723,"string"),t()(),i(724,"td",21),e(725,"-"),t(),i(726,"td",22)(727,"em")(728,"strong"),e(729,"(opcional)"),t()(),i(730,"p"),e(731,"Label no componente."),t()()(),i(732,"tr",14)(733,"td",15)(734,"div",23)(735,"span",24),e(736," p-label-text-wrap"),l(737,"br"),t()()(),i(738,"td",19)(739,"code",26),e(740,"boolean"),t()(),i(741,"td",21)(742,"p")(743,"code"),e(744,"false"),t()()(),i(745,"td",22)(746,"em")(747,"strong"),e(748,"(opcional)"),t()(),i(749,"p"),e(750,"Habilita a quebra autom\xE1tica do texto da propriedade "),i(751,"code"),e(752,"p-label"),t(),e(753,". Quando "),i(754,"code"),e(755,"p-label-text-wrap"),t(),e(756,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),i(757,"tr",14)(758,"td",15)(759,"div",23)(760,"span",24),e(761," p-listbox-control-position"),l(762,"br"),t()()(),i(763,"td",19)(764,"code",31),e(765,"'top' "),t(),i(766,"code",32),e(767," 'bottom'"),t()(),i(768,"td",21)(769,"p")(770,"code"),e(771,"bottom"),t()()(),i(772,"td",22)(773,"em")(774,"strong"),e(775,"(opcional)"),t()(),i(776,"p"),e(777,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),i(778,"code"),e(779,"listbox"),t(),e(780," em rela\xE7\xE3o ao campo ("),i(781,"code"),e(782,"top"),t(),e(783," ou "),i(784,"code"),e(785,"bottom"),t(),e(786,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),t()()(),i(787,"tr",14)(788,"td",15)(789,"div",23)(790,"span",24),e(791," p-literals"),l(792,"br"),t()()(),i(793,"td",19)(794,"code",33),e(795,"PoMultiselectLiterals"),t()(),i(796,"td",21),e(797,"-"),t(),i(798,"td",22)(799,"em")(800,"strong"),e(801,"(opcional)"),t()(),i(802,"p"),e(803,"Objeto com as literais usadas no "),i(804,"code"),e(805,"po-multiselect"),t(),e(806,"."),t(),i(807,"p"),e(808,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),t(),i(809,"pre")(810,"code"),e(811,`const customLiterals: PoMultiselectLiterals = {
  noData: 'Nenhum dado encontrado',
  placeholderSearch: 'Buscar',
  selectAll: 'Select all',
  selectItem: 'Select items'
};
`),t()(),i(812,"p"),e(813,"Ou passando apenas as literais que deseja customizar:"),t(),i(814,"pre")(815,"code"),e(816,`const customLiterals: PoMultiselectLiterals = {
  noData: 'Sem dados'
};
`),t()(),i(817,"p"),e(818,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente:"),t(),i(819,"pre")(820,"code"),e(821,`<po-multiselect
  [p-literals]="customLiterals">
</po-po-multiselect>
`),t()(),i(822,"blockquote")(823,"p"),e(824,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),i(825,"a",34)(826,"code"),e(827,"PoI18nService"),t()(),e(828," ou do browser."),t()()()(),i(829,"tr",14)(830,"td",15)(831,"div",23)(832,"span",24),e(833," name"),l(834,"br"),t()()(),i(835,"td",19)(836,"code",25),e(837,"string"),t()(),i(838,"td",21),e(839,"-"),t(),i(840,"td",22)(841,"p"),e(842,"Nome do componente."),t()()(),i(843,"tr",14)(844,"td",15)(845,"div",23)(846,"span",24),e(847," p-optional"),l(848,"br"),t()()(),i(849,"td",19)(850,"code",26),e(851,"boolean"),t()(),i(852,"td",21)(853,"p")(854,"code"),e(855,"false"),t()()(),i(856,"td",22)(857,"em")(858,"strong"),e(859,"(opcional)"),t()(),i(860,"p"),e(861,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),i(862,"blockquote")(863,"p"),e(864,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),i(865,"ul")(866,"li"),e(867,"O campo conter "),i(868,"code"),e(869,"p-required"),t(),e(870,";"),t(),i(871,"li"),e(872,"N\xE3o possuir "),i(873,"code"),e(874,"p-help"),t(),e(875," e/ou "),i(876,"code"),e(877,"p-label"),t(),e(878,"."),t()()()(),i(879,"tr",14)(880,"td",15)(881,"div",23)(882,"span",24),e(883," p-options"),l(884,"br"),t()()(),i(885,"td",19)(886,"code",35),e(887,"Array<PoMultiselectOption "),t(),i(888,"code",36),e(889," any>"),t()(),i(890,"td",21),e(891,"-"),t(),i(892,"td",22)(893,"p"),e(894,`Nesta propriedade deve ser definida uma lista de objetos que ser\xE1 exibida no multiselect.
Esta lista deve conter os valores e os labels que ser\xE3o apresentados na tela.`),t(),i(895,"blockquote")(896,"p"),e(897,`Essa propriedade \xE9 imut\xE1vel, ou seja, sempre que quiser atualizar a lista de op\xE7\xF5es dispon\xEDveis
atualize a refer\xEAncia do objeto:`),t()(),i(898,"pre")(899,"code"),e(900,`// atualiza a refer\xEAncia do objeto garantindo a atualiza\xE7\xE3o do template
this.options = [...this.options, { value: 'x', label: 'Nova op\xE7\xE3o' }];

// evite, pois n\xE3o atualiza a refer\xEAncia do objeto podendo gerar atrasos na atualiza\xE7\xE3o do template
this.options.push({ value: 'x', label: 'Nova op\xE7\xE3o' });
`),t()(),i(901,"blockquote")(902,"p"),e(903,"A lista pode ser definida utilizando um array com o valor representando "),i(904,"code"),e(905,"value"),t(),e(906," e "),i(907,"code"),e(908,"label"),t(),e(909," das seguintes formas:"),t()(),i(910,"pre")(911,"code"),e(912,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="[{value: 1, label: 'One'}, {value: 2, label: 'two'}]"> </po-multiselect>
`),t()(),i(913,"pre")(914,"code"),e(915,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="[{name: 'Roger', age: 28}, {name: 'Anne', age: 35}]" p-field-label="name" p-field-value="age"> </po-multiselect>
`),t()(),i(916,"ul")(917,"li"),e(918,"Aconselha-se utilizar valores distintos no "),i(919,"code"),e(920,"label"),t(),e(921," e "),i(922,"code"),e(923,"value"),t(),e(924," dos itens."),t()()()(),i(925,"tr",14)(926,"td",15)(927,"div",23)(928,"span",24),e(929," p-placeholder"),l(930,"br"),t()()(),i(931,"td",19)(932,"code",25),e(933,"string"),t()(),i(934,"td",21),e(935,"-"),t(),i(936,"td",22)(937,"em")(938,"strong"),e(939,"(opcional)"),t()(),i(940,"p"),e(941,"Mensagem apresentada enquanto o campo estiver vazio."),t()()(),i(942,"tr",14)(943,"td",15)(944,"div",23)(945,"span",24),e(946," p-placeholder-search"),l(947,"br"),t()()(),i(948,"td",19)(949,"code",25),e(950,"string"),t()(),i(951,"td",21)(952,"p")(953,"code"),e(954,"Buscar"),t()()(),i(955,"td",22)(956,"em")(957,"strong"),e(958,"(opcional)"),t()(),i(959,"p"),e(960,"Placeholder do campo de pesquisa."),t(),i(961,"blockquote")(962,"p"),e(963,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),t()()()(),i(964,"tr",14)(965,"td",15)(966,"div",23)(967,"span",24),e(968," p-helper"),l(969,"br"),t()()(),i(970,"td",19)(971,"code",37),e(972,"PoHelperOptions "),t(),i(973,"code",25),e(974," string"),t()(),i(975,"td",21),e(976,"-"),t(),i(977,"td",22)(978,"em")(979,"strong"),e(980,"(opcional)"),t()(),i(981,"p"),e(982,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label."),t(),i(983,"blockquote")(984,"p"),e(985,"Caso o "),i(986,"code"),e(987,"p-label"),t(),e(988,` n\xE3o esteja definido, o componente po-helper n\xE3o ser\xE1 exibido.
Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional (`),i(989,"code"),e(990,"p-additional-help-tooltip"),t(),e(991," e "),i(992,"code"),e(993,"p-additional-help"),t(),e(994,") ser\xE1 ignorado."),t()()()(),i(995,"tr",14)(996,"td",15)(997,"div",23)(998,"span",24),e(999," p-required"),l(1e3,"br"),t()()(),i(1001,"td",19)(1002,"code",26),e(1003,"boolean"),t()(),i(1004,"td",21)(1005,"p")(1006,"code"),e(1007,"false"),t()()(),i(1008,"td",22)(1009,"em")(1010,"strong"),e(1011,"(opcional)"),t()(),i(1012,"p"),e(1013,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),i(1014,"blockquote")(1015,"p"),e(1016,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),i(1017,"code"),e(1018,"(p-disabled)"),t(),e(1019,"."),t()()()(),i(1020,"tr",14)(1021,"td",15)(1022,"div",23)(1023,"span",24),e(1024," p-show-required"),l(1025,"br"),t()()(),i(1026,"td",19)(1027,"code",26),e(1028,"boolean"),t()(),i(1029,"td",21),e(1030,"-"),t(),i(1031,"td",22)(1032,"p"),e(1033,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),i(1034,"blockquote")(1035,"p"),e(1036,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),i(1037,"ul")(1038,"li"),e(1039,"N\xE3o possuir "),i(1040,"code"),e(1041,"p-help"),t(),e(1042," e/ou "),i(1043,"code"),e(1044,"p-label"),t(),e(1045,"."),t()()()(),i(1046,"tr",14)(1047,"td",15)(1048,"div",23)(1049,"span",24),e(1050," p-size"),l(1051,"br"),t()()(),i(1052,"td",19)(1053,"code",25),e(1054,"string"),t()(),i(1055,"td",21)(1056,"p")(1057,"code"),e(1058,"medium"),t()()(),i(1059,"td",22)(1060,"em")(1061,"strong"),e(1062,"(opcional)"),t()(),i(1063,"p"),e(1064,"Define o tamanho do componente:"),t(),i(1065,"ul")(1066,"li")(1067,"code"),e(1068,"small"),t(),e(1069,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(1070,"li")(1071,"code"),e(1072,"medium"),t(),e(1073,": altura do input como 44px."),t()(),i(1074,"blockquote")(1075,"p"),e(1076,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(1077,"code"),e(1078,"medium"),t(),e(1079,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(1080,"a",38),e(1081,"po-theme"),t(),e(1082,"."),t()()()(),i(1083,"tr",14)(1084,"td",15)(1085,"div",23)(1086,"span",24),e(1087," p-sort"),l(1088,"br"),t()()(),i(1089,"td",19)(1090,"code",26),e(1091,"boolean"),t()(),i(1092,"td",21)(1093,"p")(1094,"code"),e(1095,"false"),t()()(),i(1096,"td",22)(1097,"em")(1098,"strong"),e(1099,"(opcional)"),t()(),i(1100,"p"),e(1101,`Indica que a lista definida na propriedade p-options ser\xE1 ordenada pelo label antes de ser apresentada no
dropdown.`),t()()()(),i(1102,"h3",10),e(1103,"M\xE9todos"),t(),i(1104,"table",39)(1105,"tr",14)(1106,"th",40)(1107,"div",23)(1108,"h4")(1109,"span",24),e(1110," focus "),t()()()()(),i(1111,"tr",22)(1112,"td",22)(1113,"p"),e(1114,"Fun\xE7\xE3o que atribui foco ao componente."),t(),i(1115,"p"),e(1116,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),i(1117,"pre")(1118,"code"),e(1119,`import { PoMultiselectComponent } from '@po-ui/ng-components';

...

@ViewChild(PoMultiselectComponent, { static: true }) multiselect: PoMultiselectComponent;

focusMultiselect() {
  this.multiselect.focus();
}
`),t()()()()(),l(1120,"br"),i(1121,"table",39)(1122,"tr",14)(1123,"th",40)(1124,"div",23)(1125,"h4")(1126,"span",24),e(1127," showAdditionalHelp "),t()()()()(),i(1128,"tr",22)(1129,"td",22)(1130,"p"),e(1131,"M\xE9todo que exibe "),i(1132,"code"),e(1133,"p-additionalHelpTooltip"),t(),e(1134," ou executa a a\xE7\xE3o definida em "),i(1135,"code"),e(1136,"p-additionalHelp"),t(),e(1137,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),i(1138,"code"),e(1139,"p-keydown"),t(),e(1140,"."),t(),i(1141,"blockquote")(1142,"p"),e(1143,"Exibe ou oculta o conte\xFAdo do componente "),i(1144,"code"),e(1145,"po-helper"),t(),e(1146," quando o componente estiver com foco e com label vis\xEDvel."),t()(),i(1147,"pre")(1148,"code"),e(1149,`<po-multiselect
 #multiselect
 ...
 p-additional-help-tooltip="Mensagem de ajuda complementar"
 (p-keydown)="onKeyDown($event, multiselect)"
></po-multiselect>
`),t()(),i(1150,"pre")(1151,"code"),e(1152,`// Exemplo com p-label e p-helper
<po-multiselect
 #multiselect
 ...
 p-label="Label do multiselect"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, multiselect)"
></po-multiselect>
`),t()(),i(1153,"pre")(1154,"code"),e(1155,`...
onKeyDown(event: KeyboardEvent, inp: PoMultiselectComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),l(1156,"br"),i(1157,"h3"),e(1158,"Interfaces"),t(),i(1159,"h4",41)(1160,"code",5),e(1161,"PoMultiselectFilter"),t()(),i(1162,"div",2)(1163,"p"),e(1164,"Interface para os servi\xE7os que ser\xE3o utilizados no po-multiselect."),t()(),i(1165,"h4",10),e(1166,"M\xE9todos"),t(),i(1167,"table",39)(1168,"tr",14)(1169,"th",40)(1170,"div",23)(1171,"h4")(1172,"span",24),e(1173," getFilteredData "),t()()()()(),i(1174,"tr",22)(1175,"td",22)(1176,"p"),e(1177,`M\xE9todo que ser\xE1 chamado ao realizar uma busca no componente, deve retornar um Observable que cont\xE9m uma cole\xE7\xE3o de objetos que seguem
a interface `),i(1178,"code"),e(1179,"PoMultiselectOption"),t(),e(1180,", ser\xE1 informado por parametro o campo e o valor a ser pesquisado."),t()()()(),i(1181,"h5")(1182,"b"),e(1183,"Par\xE2metros"),t()(),i(1184,"table",11)(1185,"tr",12)(1186,"th",13),e(1187,"Nome"),t(),i(1188,"th",13),e(1189,"Tipo"),t(),i(1190,"th",13),e(1191,"Descri\xE7\xE3o"),t()(),i(1192,"tr",14)(1193,"td",15),e(1194," params"),t(),i(1195,"td",19)(1196,"code",42),e(1197," { property: string, value: string } "),t()(),i(1198,"td",22)(1199,"p"),e(1200,"Objeto contendo a propriedade e o valor respons\xE1vel por realizar o filtro."),t()()()(),l(1201,"br"),i(1202,"table",39)(1203,"tr",14)(1204,"th",40)(1205,"div",23)(1206,"h4")(1207,"span",24),e(1208," getObjectsByValues "),t()()()()(),i(1209,"tr",22)(1210,"td",22)(1211,"p"),e(1212,`M\xE9todo que ser\xE1 chamado ao iniciar o componente com valor, deve retornar um Observable que cont\xE9m apenas os objetos filtrados que
seguem a interface `),i(1213,"code"),e(1214,"PoMultiselectOption"),t(),e(1215,", ser\xE1 informado por par\xE2metro valor a ser pesquisado."),t()()()(),i(1216,"h5")(1217,"b"),e(1218,"Par\xE2metros"),t()(),i(1219,"table",11)(1220,"tr",12)(1221,"th",13),e(1222,"Nome"),t(),i(1223,"th",13),e(1224,"Tipo"),t(),i(1225,"th",13),e(1226,"Descri\xE7\xE3o"),t()(),i(1227,"tr",14)(1228,"td",15),e(1229," values"),t(),i(1230,"td",19)(1231,"code",43),e(1232," Array<string "),t(),i(1233,"code",44),e(1234," number> "),t()(),i(1235,"td",22)(1236,"p"),e(1237,"Array com os valores a serem buscados."),t()()()(),l(1238,"br"),i(1239,"h4",41)(1240,"code",5),e(1241,"PoMultiselectLiterals"),t()(),i(1242,"div",2)(1243,"p"),e(1244,"Interface para defini\xE7\xE3o das literais usadas no "),i(1245,"code"),e(1246,"po-multiselect"),t(),e(1247,"."),t()(),i(1248,"h4",10),e(1249,"Propriedades"),t(),i(1250,"table",11)(1251,"tr",12)(1252,"th",13),e(1253,"Nome"),t(),i(1254,"th",13),e(1255,"Tipo"),t(),i(1256,"th",13),e(1257,"Descri\xE7\xE3o"),t()(),i(1258,"tr",14)(1259,"td",15)(1260,"div",23)(1261,"span",24),e(1262," noData"),l(1263,"br"),t()()(),i(1264,"td",19)(1265,"code",25),e(1266,"string"),t()(),i(1267,"td",22)(1268,"em")(1269,"strong"),e(1270,"(opcional)"),t()(),i(1271,"p"),e(1272,"Texto exibido quando n\xE3o houver dados encontrados na busca."),t()()(),i(1273,"tr",14)(1274,"td",15)(1275,"div",23)(1276,"span",24),e(1277," placeholderSearch"),l(1278,"br"),t()()(),i(1279,"td",19)(1280,"code",25),e(1281,"string"),t()(),i(1282,"td",22)(1283,"em")(1284,"strong"),e(1285,"(opcional)"),t()(),i(1286,"p"),e(1287,"Texto do "),i(1288,"em"),e(1289,"placeholder"),t(),e(1290," do campo de busca."),t()()(),i(1291,"tr",14)(1292,"td",15)(1293,"div",23)(1294,"span",24),e(1295," selectAll"),l(1296,"br"),t()()(),i(1297,"td",19)(1298,"code",25),e(1299,"string"),t()(),i(1300,"td",22)(1301,"em")(1302,"strong"),e(1303,"(opcional)"),t()(),i(1304,"p"),e(1305,"Texto exibido no bot\xE3o de selecionar todos."),t()()(),i(1306,"tr",14)(1307,"td",15)(1308,"div",23)(1309,"span",24),e(1310," selectItem"),l(1311,"br"),t()()(),i(1312,"td",19)(1313,"code",25),e(1314,"string"),t()(),i(1315,"td",22)(1316,"em")(1317,"strong"),e(1318,"(opcional)"),t()(),i(1319,"p"),e(1320,"Texto exibido na propriedade placeholder."),t()()()(),i(1321,"h4",41)(1322,"code",5),e(1323,"PoMultiselectOption"),t()(),i(1324,"div",2)(1325,"p"),e(1326,"Interface dos itens da cole\xE7\xE3o que ser\xE1 exibida no dropdown do po-multiselect."),t()(),i(1327,"h4",10),e(1328,"Propriedades"),t(),i(1329,"table",11)(1330,"tr",12)(1331,"th",13),e(1332,"Nome"),t(),i(1333,"th",13),e(1334,"Tipo"),t(),i(1335,"th",13),e(1336,"Descri\xE7\xE3o"),t()(),i(1337,"tr",14)(1338,"td",15)(1339,"div",23)(1340,"span",24),e(1341," label"),l(1342,"br"),t()()(),i(1343,"td",19)(1344,"code",25),e(1345,"string"),t()(),i(1346,"td",22)(1347,"p"),e(1348,"Label exibido nos itens da lista."),t()()(),i(1349,"tr",14)(1350,"td",15)(1351,"div",23)(1352,"span",24),e(1353," value"),l(1354,"br"),t()()(),i(1355,"td",19)(1356,"code",25),e(1357,"string "),t(),i(1358,"code",27),e(1359," number"),t()(),i(1360,"td",22)(1361,"p"),e(1362,"Valor do objeto que ser\xE1 atribu\xEDdo ao model."),t()()()(),i(1363,"h3"),e(1364,"Enums"),t(),i(1365,"h4",4)(1366,"code",5),e(1367,"PoMultiselectFilterMode"),t()(),i(1368,"div",2)(1369,"p"),e(1370,"Define o tipo de busca usado no po-multiselect."),t()(),i(1371,"h4",10),e(1372,"Propriedades"),t(),i(1373,"table",11)(1374,"tr",12)(1375,"th",13),e(1376,"Nome"),t(),i(1377,"th",13),e(1378,"Descri\xE7\xE3o"),t()(),i(1379,"tr",14)(1380,"td",15)(1381,"div",23)(1382,"span",24),e(1383," startsWith"),l(1384,"br"),t()()(),i(1385,"td",22)(1386,"p"),e(1387,"Verifica se o texto "),i(1388,"em"),e(1389,"inicia"),t(),e(1390," com o valor pesquisado."),t()()(),i(1391,"tr",14)(1392,"td",15)(1393,"div",23)(1394,"span",24),e(1395," contains"),l(1396,"br"),t()()(),i(1397,"td",22)(1398,"p"),e(1399,"Verifica se o texto "),i(1400,"em"),e(1401,"cont\xE9m"),t(),e(1402," o valor pesquisado."),t()()(),i(1403,"tr",14)(1404,"td",15)(1405,"div",23)(1406,"span",24),e(1407," endsWith"),l(1408,"br"),t()()(),i(1409,"td",22)(1410,"p"),e(1411,"Verifica se o texto "),i(1412,"em"),e(1413,"finaliza"),t(),e(1414," com o valor pesquisado."),t()()()()())},dependencies:[C],encapsulation:2})}return o})();var Ne=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=7;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(s,a){this.route=s,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let a=s.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(s){this.router.navigate([],{queryParams:{view:s},queryParamsHandling:"merge"}),this.activeTab=s}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||o)(oe(he),oe(Ee))};static \u0275cmp=E({type:o,selectors:[["ng-component"]],standalone:!1,decls:12,vars:4,consts:[["p-title","Multiselect",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,n){a&1&&(i(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u("p-click",function(){return n.changeTab("doc")}),l(3,"sample-po-multiselect-doc"),t(),i(4,"po-tab",3),u("p-click",function(){return n.changeTab("web")}),l(5,"sample-po-multiselect-basic-view")(6,"sample-po-multiselect-labs-view")(7,"sample-po-multiselect-vacation-view")(8,"sample-po-multiselect-vacation-reactive-form-view")(9,"sample-po-multiselect-template-view")(10,"sample-po-multiselect-heroes-view")(11,"sample-po-multiselect-any-array-view"),t()()()),a&2&&(m("p-actions",n.actions),p(2),m("p-active",n.activeTab==="doc"),p(2),m("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[Ce,y,x,_e,Te,Ae,ke,De,Fe,We,He],encapsulation:2})}return o})();var bt=[{path:"",component:Ne}],ze=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=Y({type:o});static \u0275inj=K({imports:[ae.forChild(bt),ae]})}return o})();var ui=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=Y({type:o});static \u0275inj=K({imports:[Me,ze]})}return o})();export{ui as DocPoMultiselectModule};
