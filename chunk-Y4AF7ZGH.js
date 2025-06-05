import{$ as K,$a as w,$c as j,$d as C,A as ae,Bd as ee,F as b,Fa as D,Fd as F,G as h,Ga as i,Ha as pe,Ia as P,Ka as g,Kb as R,La as E,Lb as A,Ma as f,Mb as z,Na as re,Nb as X,Ob as O,Pa as _,Pb as H,Rd as Ce,Sb as de,T as p,Tb as ce,Tc as ge,U as q,Ua as N,Vb as ue,Vc as Ee,Wb as be,Xa as W,Yb as he,Zb as oe,Zc as fe,_ as S,_d as y,a as G,bb as se,bd as $,ea as ne,ec as Se,h as ie,ha as m,jb as Y,ka as x,na as t,oa as e,pa as l,pb as me,pd as ve,ta as I,td as ye,te as M,ua as u,ud as T,ue as Me,vc as k,x as le,xc as Z,y as Q}from"./chunk-H2G5RJ3R.js";var xe=(()=>{class o{options=[{value:"poMultiselect1",label:"PO Multiselect 1"},{value:"poMultiselect2",label:"PO Multiselect 2"}];static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-basic"]],standalone:!1,decls:1,vars:1,consts:[["name","multiselect","p-label","PO Multiselect",3,"p-options"]],template:function(a,n){a&1&&l(0,"po-multiselect",0),a&2&&m("p-options",n.options)},dependencies:[T],encapsulation:2})}return o})();var He=o=>({"docs-sample-code-tabs":o}),Pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO Multiselect Basic"),e(),t(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-multiselect-basic/sample-po-multiselect-basic.component.html"),e(),t(13,"pre",7),i(14,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="options"> </po-multiselect>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-multiselect-basic/sample-po-multiselect-basic.component.ts"),e(),t(19,"pre",9),i(20,`import { Component } from '@angular/core';

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
`),e()()()()(),t(21,"div",10),l(22,"sample-po-multiselect-basic"),e(),l(23,"hr")),a&2&&(p(5),x("po-icon "+n.sampleCodeButtonIcon),p(),P(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,He,n.hideSampleCodeTabs)))},dependencies:[w,M,y,C,xe],encapsulation:2})}return o})();var _e=(()=>{class o{additionalHelpTooltip;customLiterals;event;filterMode;help;label;literals;multiselect;option;options;placeholder;placeholderSearch;properties;fieldErrorMessage;filterService;fieldLabel;fieldValue;size;listboxPosition="bottom";filterModeOptions=[{label:"Starts With",value:"startsWith"},{label:"Contains",value:"contains"},{label:"Ends With",value:"endsWith"}];listboxPositionOptions=[{label:"top",value:"top"},{label:"bottom",value:"bottom"}];propertiesOptions=[{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"hideSearch",label:"Hide Search"},{value:"autoHeight",label:"Auto Height"},{value:"sort",label:"Sort"},{value:"hideSelectAll",label:"Hide Select All"},{value:"errorLimit",label:"Limit Error Message"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}addOption(){this.options=[...this.options,G({},this.option)],this.option={label:void 0,value:void 0}}changeEvent(s){this.event=s}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}restore(){this.additionalHelpTooltip="",this.customLiterals=void 0,this.help="",this.filterMode=void 0,this.label=void 0,this.literals="",this.placeholder="",this.placeholderSearch=void 0,this.properties=[],this.fieldErrorMessage="",this.filterService="",this.fieldLabel="",this.fieldValue="",this.option={label:void 0,value:void 0},this.options=[],this.event="",this.multiselect=[],this.size="medium"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-labs"]],standalone:!1,decls:33,vars:48,consts:[["fOption","ngForm"],["f","ngForm"],[1,"po-row"],["name","PO Multiselect",1,"po-md-12",3,"ngModelChange","p-change","p-keydown","ngModel","p-additional-help-tooltip","p-auto-height","p-disabled","p-field-label","p-field-value","p-filter-service","p-filter-mode","p-help","p-hide-search","p-hide-select-all","p-label","p-literals","p-optional","p-options","p-placeholder","p-placeholder-search","p-required","p-field-error-message","p-show-required","p-size","p-sort","p-listbox-control-position","p-error-limit"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Events",1,"po-md-6",3,"p-value"],["name","optionLabel","p-label","Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","optionValue","p-label","Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Option",1,"po-md-4","po-lg-2",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help Tooltip",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholderSearch","p-clean","","p-label","Placeholder Search",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: {"noData": "Sem dados a serem exibidos", "placeholderSearch": "Buscar"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","filterService","p-clean","","p-help","https://po-sample-api.onrender.com/v1/heroes","p-label","Filter Service",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","fieldValue","p-clean","","p-label","Field Value",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldLabel","p-clean","","p-label","Field Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","filterMode","p-columns","4","p-label","Filter mode",1,"po-md-12",3,"ngModelChange","ngModel","p-disabled","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","listboxPosition","p-label","Listbox Position",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(a,n){if(a&1){let c=I();t(0,"div",2)(1,"po-multiselect",3),f("ngModelChange",function(r){return b(c),E(n.multiselect,r)||(n.multiselect=r),h(r)}),u("p-change",function(){return b(c),h(n.changeEvent("p-change"))})("p-keydown",function(){return b(c),h(n.changeEvent("p-keydown"))}),e()(),l(2,"hr"),t(3,"div",2),l(4,"po-info",4)(5,"po-info",5),e(),l(6,"hr"),t(7,"form",null,0)(9,"div",2)(10,"po-input",6),f("ngModelChange",function(r){return b(c),E(n.option.label,r)||(n.option.label=r),h(r)}),e(),t(11,"po-input",7),f("ngModelChange",function(r){return b(c),E(n.option.value,r)||(n.option.value=r),h(r)}),e()(),t(12,"div",2)(13,"po-button",8),u("p-click",function(){return b(c),h(n.addOption())}),e()()(),l(14,"hr"),t(15,"form",null,1)(17,"po-input",9),f("ngModelChange",function(r){return b(c),E(n.label,r)||(n.label=r),h(r)}),e(),t(18,"po-input",10),f("ngModelChange",function(r){return b(c),E(n.help,r)||(n.help=r),h(r)}),e(),t(19,"po-input",11),f("ngModelChange",function(r){return b(c),E(n.additionalHelpTooltip,r)||(n.additionalHelpTooltip=r),h(r)}),e(),t(20,"po-input",12),f("ngModelChange",function(r){return b(c),E(n.placeholder,r)||(n.placeholder=r),h(r)}),e(),t(21,"po-input",13),f("ngModelChange",function(r){return b(c),E(n.placeholderSearch,r)||(n.placeholderSearch=r),h(r)}),e(),t(22,"po-input",14),f("ngModelChange",function(r){return b(c),E(n.fieldErrorMessage,r)||(n.fieldErrorMessage=r),h(r)}),e(),t(23,"po-input",15),f("ngModelChange",function(r){return b(c),E(n.literals,r)||(n.literals=r),h(r)}),u("p-change",function(){return b(c),h(n.changeLiterals())}),e(),t(24,"po-input",16),f("ngModelChange",function(r){return b(c),E(n.filterService,r)||(n.filterService=r),h(r)}),e(),t(25,"po-input",17),f("ngModelChange",function(r){return b(c),E(n.fieldValue,r)||(n.fieldValue=r),h(r)}),e(),t(26,"po-input",18),f("ngModelChange",function(r){return b(c),E(n.fieldLabel,r)||(n.fieldLabel=r),h(r)}),e(),t(27,"po-checkbox-group",19),f("ngModelChange",function(r){return b(c),E(n.properties,r)||(n.properties=r),h(r)}),e(),t(28,"po-radio-group",20),f("ngModelChange",function(r){return b(c),E(n.filterMode,r)||(n.filterMode=r),h(r)}),e(),t(29,"po-radio-group",21),f("ngModelChange",function(r){return b(c),E(n.size,r)||(n.size=r),h(r)}),e(),t(30,"po-radio-group",22),f("ngModelChange",function(r){return b(c),E(n.listboxPosition,r)||(n.listboxPosition=r),h(r)}),e(),t(31,"div",2)(32,"po-button",23),u("p-click",function(){return b(c),h(n.restore())}),e()()()}if(a&2){let c=D(8);p(),g("ngModel",n.multiselect),m("p-additional-help-tooltip",n.additionalHelpTooltip)("p-auto-height",n.properties.includes("autoHeight"))("p-disabled",n.properties.includes("disabled"))("p-field-label",n.fieldLabel)("p-field-value",n.fieldValue)("p-filter-service",n.filterService)("p-filter-mode",n.filterMode)("p-help",n.help)("p-hide-search",n.properties.includes("hideSearch"))("p-hide-select-all",n.properties.includes("hideSelectAll"))("p-label",n.label)("p-literals",n.customLiterals)("p-optional",n.properties.includes("optional"))("p-options",n.options)("p-placeholder",n.placeholder)("p-placeholder-search",n.placeholderSearch)("p-required",n.properties.includes("required"))("p-field-error-message",n.fieldErrorMessage)("p-show-required",n.properties.includes("showRequired"))("p-size",n.size)("p-sort",n.properties.includes("sort"))("p-listbox-control-position",n.listboxPosition)("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit")),p(3),m("p-value",n.multiselect),p(),m("p-value",n.event),p(5),g("ngModel",n.option.label),p(),g("ngModel",n.option.value),p(2),m("p-disabled",c.form.invalid),p(4),g("ngModel",n.label),p(),g("ngModel",n.help),p(),g("ngModel",n.additionalHelpTooltip),p(),g("ngModel",n.placeholder),p(),g("ngModel",n.placeholderSearch),p(),g("ngModel",n.fieldErrorMessage),p(),g("ngModel",n.literals),p(),g("ngModel",n.filterService),p(),g("ngModel",n.fieldValue),p(),g("ngModel",n.fieldLabel),p(),g("ngModel",n.properties),m("p-options",n.propertiesOptions),p(),g("ngModel",n.filterMode),m("p-disabled",n.properties.includes("hideSearch"))("p-options",n.filterModeOptions),p(),g("ngModel",n.size),m("p-options",n.sizeOptions),p(),g("ngModel",n.listboxPosition),m("p-options",n.listboxPositionOptions)}},dependencies:[H,A,z,O,X,k,fe,j,ve,T,F],encapsulation:2})}return o})();var Je=o=>({"docs-sample-code-tabs":o}),we=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO Multiselect Labs"),e(),t(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-multiselect-labs/sample-po-multiselect-labs.component.html"),e(),t(13,"pre",7),i(14,`<div class="po-row">
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
  >
  </po-multiselect>
</div>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="multiselect"> </po-info>

  <po-info class="po-md-6" p-label="Events" [p-value]="event"> </po-info>
</div>

<hr />

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

<hr />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input
    class="po-md-6"
    name="additionalHelpTooltip"
    [(ngModel)]="additionalHelpTooltip"
    p-clean
    p-label="Additional Help Tooltip"
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
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-multiselect-labs/sample-po-multiselect-labs.component.ts"),e(),t(19,"pre",9),i(20,`import { Component, OnInit } from '@angular/core';

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
    { value: 'errorLimit', label: 'Limit Error Message' }
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
`),e()()()()(),t(21,"div",10),l(22,"sample-po-multiselect-labs"),e(),l(23,"hr")),a&2&&(p(5),x("po-icon "+n.sampleCodeButtonIcon),p(),P(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,Je,n.hideSampleCodeTabs)))},dependencies:[w,M,y,C,_e],encapsulation:2})}return o})();var Te=(()=>{class o{days;employeesVacations=[];finalPeriod;initialPeriod;nameEmployeesVacations;employees=[{value:"412341",label:"Alfred"},{value:"518734",label:"Alice"},{value:"986237",label:"Bradley"},{value:"941278",label:"Jackie"},{value:"897643",label:"Phillip"},{value:"423767",label:"Reynold"},{value:"423837",label:"Robert"}];daysOptions=[{value:10,label:"10"},{value:20,label:"20"},{value:30,label:"30"}];ngOnInit(){this.clean()}clean(){this.days=20,this.initialPeriod=void 0,this.finalPeriod=void 0,this.employeesVacations=[]}updateNameEmployeesVacations(){this.nameEmployeesVacations=this.employees.filter(s=>this.employeesVacations.includes(s.value)).map(s=>s.label).join(", ")}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-vacation"]],standalone:!1,decls:26,vars:20,consts:[["f","ngForm"],["modalEmployeesVacation",""],[1,"po-row"],["name","initialPeriod","p-label","Initial period","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","finalPeriod","p-label","Final period","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-min-date"],["name","days","p-help","Maximum of days that employs can choose","p-label","How many days of vacation the employees will be able to have?","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","employeesVacations","p-label","Select your employees for collective vacations","p-required","",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","Approve Vacations","p-label","Approve Vacations",1,"po-md-4","po-offset-md-5","po-offset-lg-5","po-offset-xl-5",3,"p-click","p-disabled"],["p-label","Clean",1,"po-md-3",3,"p-click"],["p-title","Collective Vacation"],["p-label","Initial period",1,"po-md-5",3,"p-value"],["p-label","Final period",1,"po-md-5",3,"p-value"],["p-label","Days",1,"po-md-2",3,"p-value"],["p-label","Employees",1,"po-lg-12",3,"p-value"]],template:function(a,n){if(a&1){let c=I();t(0,"form",null,0)(2,"h3"),i(3,"Collective vacations"),e(),l(4,"hr"),t(5,"div",2)(6,"po-datepicker",3),f("ngModelChange",function(r){return b(c),E(n.initialPeriod,r)||(n.initialPeriod=r),h(r)}),e(),t(7,"po-datepicker",4),f("ngModelChange",function(r){return b(c),E(n.finalPeriod,r)||(n.finalPeriod=r),h(r)}),e()(),t(8,"div",2)(9,"po-radio-group",5),f("ngModelChange",function(r){return b(c),E(n.days,r)||(n.days=r),h(r)}),e()(),t(10,"div",2)(11,"po-multiselect",6),f("ngModelChange",function(r){return b(c),E(n.employeesVacations,r)||(n.employeesVacations=r),h(r)}),e()(),t(12,"div",2)(13,"po-button",7),u("p-click",function(){b(c);let r=D(16);return n.updateNameEmployeesVacations(),h(r.open())}),e(),t(14,"po-button",8),u("p-click",function(){return b(c),h(n.clean())}),e()()(),t(15,"po-modal",9,1)(17,"div",2),l(18,"po-info",10),N(19,"date"),l(20,"po-info",11),N(21,"date"),l(22,"po-info",12),e(),l(23,"hr"),t(24,"div",2),l(25,"po-info",13),e()()}if(a&2){let c=D(1);p(6),g("ngModel",n.initialPeriod),p(),g("ngModel",n.finalPeriod),m("p-min-date",n.initialPeriod),p(2),g("ngModel",n.days),m("p-options",n.daysOptions),p(2),g("ngModel",n.employeesVacations),m("p-options",n.employees),p(2),m("p-disabled",c.form.invalid),p(5),m("p-value",W(19,12,n.initialPeriod,"longDate","+0000")),p(2),m("p-value",W(21,16,n.finalPeriod,"longDate","+0000")),p(2),m("p-value",n.days),p(3),m("p-value",n.nameEmployeesVacations)}},dependencies:[H,A,z,O,X,k,j,$,T,F,Z,Y],encapsulation:2})}return o})();var Qe=o=>({"docs-sample-code-tabs":o}),Ve=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-vacation-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO Multiselect - Vacation"),e(),t(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-multiselect-vacation/sample-po-multiselect-vacation.component.html"),e(),t(13,"pre",7),i(14,`<form #f="ngForm">
  <h3>Collective vacations</h3>

  <hr />

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

  <hr />

  <div class="po-row">
    <po-info class="po-lg-12" p-label="Employees" [p-value]="nameEmployeesVacations"> </po-info>
  </div>
</po-modal>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-multiselect-vacation/sample-po-multiselect-vacation.component.ts"),e(),t(19,"pre",9),i(20,`import { Component, OnInit } from '@angular/core';

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
`),e()()()()(),t(21,"div",10),l(22,"sample-po-multiselect-vacation"),e(),l(23,"hr")),a&2&&(p(5),x("po-icon "+n.sampleCodeButtonIcon),p(),P(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,Qe,n.hideSampleCodeTabs)))},dependencies:[w,M,y,C,Te],encapsulation:2})}return o})();var Ae=(()=>{class o{formBuilder;days;employeesVacations=[];finalPeriod;formCollectiveVacations;initialPeriod;nameEmployeesVacations;employees=[{value:"412341",label:"Alfred"},{value:"518734",label:"Alice"},{value:"986237",label:"Bradley"},{value:"941278",label:"Jackie"},{value:"112333",label:"Jane"},{value:"989898",label:"John"},{value:"897643",label:"Phillip"},{value:"423767",label:"Reynold"},{value:"423837",label:"Robert"}];daysOptions=[{value:10,label:"10"},{value:20,label:"20"},{value:30,label:"30"}];constructor(s){this.formBuilder=s}ngOnInit(){this.formCollectiveVacations=this.formBuilder.group({initialPeriod:[null,R.required],finalPeriod:[null,R.required],days:[null,R.required],employeesVacations:[null,R.required]}),this.clean()}clean(){this.formCollectiveVacations.patchValue({days:20,initialPeriod:void 0,finalPeriod:void 0,employeesVacations:void 0})}getRangeFinalPeriod(){return this.formCollectiveVacations.get("initialPeriod").value}updateEmployeesVacations(){this.nameEmployeesVacations=this.employees.filter(s=>this.formCollectiveVacations.get("employeesVacations").value.includes(s.value)).map(s=>s.label).join(", "),this.initialPeriod=this.formCollectiveVacations.get("initialPeriod").value,this.finalPeriod=this.formCollectiveVacations.get("finalPeriod").value,this.days=this.formCollectiveVacations.get("days").value}static \u0275fac=function(a){return new(a||o)(q(ue))};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-vacation-reactive-form"]],standalone:!1,decls:24,vars:20,consts:[["modalEmployeesVacation",""],[3,"formGroup"],[1,"po-row"],["name","initialPeriod","formControlName","initialPeriod","p-label","Initial period","p-required","",1,"po-md-6"],["name","finalPeriod","formControlName","finalPeriod","p-label","Final period","p-required","",1,"po-md-6",3,"p-min-date"],["name","employeesVacations","formControlName","employeesVacations","p-label","Select your employees for collective vacations",1,"po-md-4",3,"p-auto-height","p-options","p-required"],["name","days","formControlName","days","p-label","How many days of vacation the employees will be able to have?","p-required","",1,"po-lg-8",3,"p-options","p-columns"],["name","Approve Vacations","p-label","Approve Vacations",1,"po-md-4","po-offset-md-5","po-offset-lg-5","po-offset-xl-5",3,"p-click","p-disabled"],["p-label","Clean",1,"po-md-3",3,"p-click"],["p-title","Collective Vacation"],["p-label","Initial period",1,"po-md-5",3,"p-value"],["p-label","Final period",1,"po-md-5",3,"p-value"],["p-label","Days",1,"po-md-2",3,"p-value"],["p-label","Employees",1,"po-lg-12",3,"p-value"]],template:function(a,n){if(a&1){let c=I();t(0,"form",1)(1,"h3"),i(2,"Collective vacations"),e(),l(3,"hr"),t(4,"div",2),l(5,"po-datepicker",3)(6,"po-datepicker",4),e(),t(7,"div",2),l(8,"po-multiselect",5)(9,"po-radio-group",6),e(),t(10,"div",2)(11,"po-button",7),u("p-click",function(){b(c);let r=D(14);return n.updateEmployeesVacations(),h(r.open())}),e(),t(12,"po-button",8),u("p-click",function(){return b(c),h(n.clean())}),e()()(),t(13,"po-modal",9,0)(15,"div",2),l(16,"po-info",10),N(17,"date"),l(18,"po-info",11),N(19,"date"),l(20,"po-info",12),e(),l(21,"hr"),t(22,"div",2),l(23,"po-info",13),e()()}a&2&&(m("formGroup",n.formCollectiveVacations),p(6),m("p-min-date",n.getRangeFinalPeriod()),p(2),m("p-auto-height",!0)("p-options",n.employees)("p-required",!0),p(),m("p-options",n.daysOptions)("p-columns",3),p(2),m("p-disabled",n.formCollectiveVacations.invalid),p(5),m("p-value",W(17,12,n.initialPeriod,"longDate","+0000")),p(2),m("p-value",W(19,16,n.finalPeriod,"longDate","+0000")),p(2),m("p-value",n.days),p(3),m("p-value",n.nameEmployeesVacations))},dependencies:[H,A,z,de,ce,k,j,$,T,F,Z,Y],encapsulation:2})}return o})();var Xe=o=>({"docs-sample-code-tabs":o}),Oe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-vacation-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO Multiselect - Vacation Reactive Form"),e(),t(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-multiselect-vacation-reactive-form/sample-po-multiselect-vacation-reactive-form.component.html"),e(),t(13,"pre",7),i(14,`<form [formGroup]="formCollectiveVacations">
  <h3>Collective vacations</h3>

  <hr />

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

  <hr />

  <div class="po-row">
    <po-info class="po-lg-12" p-label="Employees" [p-value]="nameEmployeesVacations"> </po-info>
  </div>
</po-modal>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-multiselect-vacation-reactive-form/sample-po-multiselect-vacation-reactive-form.component.ts"),e(),t(19,"pre",9),i(20,`import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoMultiselectOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-vacation-reactive-form',
  templateUrl: './sample-po-multiselect-vacation-reactive-form.component.html',
  standalone: false
})
export class SamplePoMultiselectVacationReactiveFormComponent implements OnInit {
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

  constructor(private formBuilder: UntypedFormBuilder) {}

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
`),e()()()()(),t(21,"div",10),l(22,"sample-po-multiselect-vacation-reactive-form"),e(),l(23,"hr")),a&2&&(p(5),x("po-icon "+n.sampleCodeButtonIcon),p(),P(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,Xe,n.hideSampleCodeTabs)))},dependencies:[w,M,y,C,Ae],encapsulation:2})}return o})();function $e(o,U){o&1&&l(0,"po-tag",14),o&2&&m("p-icon",!0)}function et(o,U){o&1&&l(0,"po-tag",15),o&2&&m("p-icon",!0)}function tt(o,U){o&1&&l(0,"po-tag",16),o&2&&m("p-icon",!0)}function it(o,U){if(o&1&&(t(0,"div",0)(1,"div",7)(2,"div",8),i(3),e()(),t(4,"div",9)(5,"div",10),ne(6,$e,1,1,"po-tag",11)(7,et,1,1,"po-tag",12)(8,tt,1,1,"po-tag",13),e()()()),o&2){let s=U.$implicit;p(3),pe(s.label),p(3),m("ngIf",s.admin),p(),m("ngIf",s.access),p(),m("ngIf",!s.admin&&!s.access)}}var Le=(()=>{class o{employee;typeAccess;typeAccessMap={admin:{admin:!0,access:!0},access:{admin:!1,access:!0},noAccess:{admin:!1,access:!1}};options=[{value:"Anna M.",label:"Anna M.",admin:!1,access:!0},{value:"Jhon T.",label:"Jhon T.",admin:!0,access:!0},{value:"Marie J.",label:"Marie J.",admin:!1,access:!1}];employees=[{label:"Anna M.",value:"Anna M."},{label:"Jhon T.",value:"Jhon T."},{label:"Marie J.",value:"Marie J."}];typeAccessValue=[{label:"Admin e acesso padr\xE3o",value:"admin"},{label:"Acesso padr\xE3o",value:"access"},{label:"Sem acesso",value:"noAccess"}];changeAccess(){let s=[...this.options].map(a=>a.value===this.employee?G({value:a.value,label:a.label},this.typeAccessMap[this.typeAccess]):a);this.options=s,this.employee=void 0,this.typeAccess=void 0}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-template"]],standalone:!1,decls:7,vars:7,consts:[[1,"po-row"],["name","employee","p-label","Employee",1,"po-md-5",3,"ngModelChange","p-options","ngModel"],["name","typeOfAccess","p-label","Type of access",1,"po-md-6",3,"ngModelChange","p-options","ngModel"],[1,"po-md-1","containerButton"],["p-label","Alterar acesso",3,"p-click","p-disabled"],["name","multiselect","p-label","PO Multiselect",1,"po-md-12",3,"p-options","p-hide-select-all"],["p-multiselect-option-template",""],[1,"po-md-2","containerFlex"],[1,"po-font-text-large-bold"],[1,"po-md-10"],[1,"containerFlexTag"],["p-value","Admin","p-type","success",3,"p-icon",4,"ngIf"],["p-value","Normal","p-type","info",3,"p-icon",4,"ngIf"],["p-value","Sem acesso","p-type","danger",3,"p-icon",4,"ngIf"],["p-value","Admin","p-type","success",3,"p-icon"],["p-value","Normal","p-type","info",3,"p-icon"],["p-value","Sem acesso","p-type","danger",3,"p-icon"]],template:function(a,n){a&1&&(t(0,"div",0)(1,"po-select",1),f("ngModelChange",function(d){return E(n.employee,d)||(n.employee=d),d}),e(),t(2,"po-select",2),f("ngModelChange",function(d){return E(n.typeAccess,d)||(n.typeAccess=d),d}),e(),t(3,"div",3)(4,"po-button",4),u("p-click",function(){return n.changeAccess()}),e()(),t(5,"po-multiselect",5),ne(6,it,9,4,"ng-template",6),e()()),a&2&&(p(),m("p-options",n.employees),g("ngModel",n.employee),p(),m("p-options",n.typeAccessValue),g("ngModel",n.typeAccess),p(2),m("p-disabled",!n.employee||!n.typeAccess),p(),m("p-options",n.options)("p-hide-select-all",!0))},dependencies:[se,A,O,k,ye,T,ee,Se],styles:[".containerFlex[_ngcontent-%COMP%]{display:flex;align-items:center}.containerFlexTag[_ngcontent-%COMP%]{display:flex;gap:2px;flex-direction:column}.containerButton[_ngcontent-%COMP%]{display:flex;align-items:flex-end;padding:8px}"]})}return o})();var ot=o=>({"docs-sample-code-tabs":o}),ke=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-template-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO Multiselect - Template"),e(),t(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-multiselect-template/sample-po-multiselect-template.component.html"),e(),t(13,"pre",7),i(14,`<div class="po-row">
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
            <po-tag *ngIf="option.admin" p-value="Admin" p-type="success" [p-icon]="true"> </po-tag>
            <po-tag *ngIf="option.access" p-value="Normal" p-type="info" [p-icon]="true"> </po-tag>
            <po-tag *ngIf="!option.admin && !option.access" p-value="Sem acesso" p-type="danger" [p-icon]="true">
            </po-tag>
          </div>
        </div>
      </div>
    </ng-template>
  </po-multiselect>
</div>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-multiselect-template/sample-po-multiselect-template.component.ts"),e(),t(19,"pre",9),i(20,`import { Component } from '@angular/core';
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
`),e()()()()(),t(21,"div",10),l(22,"sample-po-multiselect-template"),e(),l(23,"hr")),a&2&&(p(5),x("po-icon "+n.sampleCodeButtonIcon),p(),P(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,ot,n.hideSampleCodeTabs)))},dependencies:[w,M,y,C,Le],encapsulation:2})}return o})();var te=(()=>{class o{http;constructor(s){this.http=s}getFilteredData({value:s}){let a={filter:s};return this.http.get("https://po-sample-api.onrender.com/v1/heroes?page=1&pageSize=10",{params:a}).pipe(ie(n=>n.items))}getObjectsByValues(s){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/?value=${s.toString()}`).pipe(ie(a=>a.items))}static \u0275fac=function(a){return new(a||o)(ae(me))};static \u0275prov=le({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Fe=(()=>{class o{samplePoMultiselectHeroesService;debounce=500;filterService;heroes;multiselect=["1495831666871","1405833068599"];columns=[{property:"value",label:"id"},{property:"label",label:"Name",type:"link",action:s=>{this.openLink(s)}}];constructor(s){this.samplePoMultiselectHeroesService=s,this.filterService=s}changeOptions(s){this.heroes=[...s]}openLink(s){window.open(`http://google.com/search?q=${s}`,"_blank")}static \u0275fac=function(a){return new(a||o)(q(te))};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-heroes"]],standalone:!1,features:[re([te])],decls:4,vars:9,consts:[[1,"po-row"],["name","multiselect","p-label","Search a Hero",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-filter-service","p-debounce-time"],[1,"po-md-6","po-mt-4"],[3,"p-columns","p-items","p-height","p-striped","p-hide-columns-manager","p-hide-table-search"]],template:function(a,n){a&1&&(t(0,"div",0)(1,"po-multiselect",1),f("ngModelChange",function(d){return E(n.multiselect,d)||(n.multiselect=d),d}),u("p-change",function(d){return n.changeOptions(d)}),e(),t(2,"po-container",2),l(3,"po-table",3),e()()),a&2&&(p(),g("ngModel",n.multiselect),m("p-filter-service",n.filterService)("p-debounce-time",n.debounce),p(2),m("p-columns",n.columns)("p-items",n.heroes)("p-height",220)("p-striped",!0)("p-hide-columns-manager",!0)("p-hide-table-search",!1))},dependencies:[A,O,Ee,T,ge],encapsulation:2})}return o})();var rt=o=>({"docs-sample-code-tabs":o}),qe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-heroes-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO Multiselect - Heroes - using API"),e(),t(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-multiselect-heroes/sample-po-multiselect-heroes.component.html"),e(),t(13,"pre",7),i(14,`<div class="po-row">
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

  <po-container class="po-md-6 po-mt-4">
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
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-multiselect-heroes/sample-po-multiselect-heroes.component.ts"),e(),t(19,"pre",9),i(20,`import { Component } from '@angular/core';
import { PoTableColumn, PoMultiselectFilter } from '@po-ui/ng-components';

import { SamplePoMultiselectHeroesService } from './sample-po-multiselect-heroes.service';

@Component({
  selector: 'sample-po-multiselect-heroes',
  templateUrl: './sample-po-multiselect-heroes.component.html',
  providers: [SamplePoMultiselectHeroesService],
  standalone: false
})
export class SamplePoMultiselectHeroesComponent {
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

  constructor(public samplePoMultiselectHeroesService: SamplePoMultiselectHeroesService) {
    this.filterService = samplePoMultiselectHeroesService;
  }

  changeOptions(event): void {
    this.heroes = [...event];
  }

  openLink(value) {
    window.open(\`http://google.com/search?q=\${value}\`, '_blank');
  }
}
`),e(),t(21,"label",6),i(22,"sample-po-multiselect-heroes/sample-po-multiselect-heroes.service.ts"),e(),t(23,"pre",9),i(24,`import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PoMultiselectFilter, PoMultiselectOption } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoMultiselectHeroesService implements PoMultiselectFilter {
  constructor(private http: HttpClient) {}

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
`),e()()()()(),t(25,"div",10),l(26,"sample-po-multiselect-heroes"),e(),l(27,"hr")),a&2&&(p(5),x("po-icon "+n.sampleCodeButtonIcon),p(),P(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,rt,n.hideSampleCodeTabs)))},dependencies:[w,M,y,C,Fe],encapsulation:2})}return o})();var De=(()=>{class o{company;fieldLabel="razaoSocial";fieldValue="cnpj";options=[{codigo:"1",nomeFantasia:"TOTVS SA",razaoSocial:"TOTVS LTDA",label:"TOTVS COMPANY",cnpj:"01.234.567/0000-01",value:"100",id:"10",email:"totvscompany@sample.com",data:"10/03/2015",origem:"S\xE3o Paulo"},{codigo:"2",nomeFantasia:"INSTITUTO TOTVS DE ENSINO SA",razaoSocial:"INST TOTVS DE ENSINO LTDA",label:"INST TOTVS",cnpj:"02.345.678/0000-02",value:"200",id:"20",email:"insttotvs@sample.com",data:"10/10/2020",origem:"Joinville"},{codigo:"3",nomeFantasia:"TOTVS ENTERPRISE SA",razaoSocial:"TOTVS ENTERPRISE LTDA ",label:"ENT TOTVS",cnpj:"03.456.789/0000-03",value:"300",id:"30",email:"enttotvs@sample.com",data:"10/01/2022",origem:"Curitiba"}];optionsSelect=[{label:"codigo",value:"codigo"},{label:"nomeFantasia",value:"nomeFantasia"},{label:"razaoSocial",value:"razaoSocial"},{label:"label",value:"label"},{label:"cnpj",value:"cnpj"},{label:"value",value:"value"},{label:"id",value:"id"},{label:"email",value:"email"},{label:"data",value:"data"},{label:"origem",value:"origem"}];onChange(s){this.company=void 0}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-any-array"]],standalone:!1,decls:9,vars:9,consts:[[1,"po-row"],[1,"po-md-6"],["name","label","p-label","Select Field Label",3,"ngModelChange","p-change","p-options","ngModel"],["name","label","p-label","Select Field Value",3,"ngModelChange","p-change","p-options","ngModel"],["name","multiselect","p-label","Select your Company","p-listbox-control-position","top",1,"po-md-12",3,"ngModelChange","p-options","p-field-value","p-field-label","ngModel"],["p-label","Model",1,"po-md-12",3,"p-value"]],template:function(a,n){a&1&&(t(0,"div",0)(1,"div",1)(2,"po-select",2),f("ngModelChange",function(d){return E(n.fieldLabel,d)||(n.fieldLabel=d),d}),u("p-change",function(d){return n.onChange(d)}),e(),t(3,"po-select",3),f("ngModelChange",function(d){return E(n.fieldValue,d)||(n.fieldValue=d),d}),u("p-change",function(d){return n.onChange(d)}),e()(),t(4,"div",1)(5,"div",0)(6,"po-multiselect",4),f("ngModelChange",function(d){return E(n.company,d)||(n.company=d),d}),e()(),t(7,"div",0),l(8,"po-info",5),e()()()),a&2&&(p(2),m("p-options",n.optionsSelect),g("ngModel",n.fieldLabel),p(),m("p-options",n.optionsSelect),g("ngModel",n.fieldValue),p(3),m("p-options",n.options)("p-field-value",n.fieldValue)("p-field-label",n.fieldLabel),g("ngModel",n.company),p(2),m("p-value",n.company))},dependencies:[A,O,T,ee,F],encapsulation:2})}return o})();var dt=o=>({"docs-sample-code-tabs":o}),Be=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-any-array-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO Multiselect - Array Any"),e(),t(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-multiselect-any-array/sample-po-multiselect-any-array.component.html"),e(),t(13,"pre",7),i(14,`<div class="po-row">
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
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-multiselect-any-array/sample-po-multiselect-any-array.component.ts"),e(),t(19,"pre",9),i(20,`import { Component, OnInit } from '@angular/core';

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
`),e()()()()(),t(21,"div",10),l(22,"sample-po-multiselect-any-array"),e(),l(23,"hr")),a&2&&(p(5),x("po-icon "+n.sampleCodeButtonIcon),p(),P(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,dt,n.hideSampleCodeTabs)))},dependencies:[w,M,y,C,De],encapsulation:2})}return o})();var Ie=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-doc"]],standalone:!1,decls:1307,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption"],["pan","",1,"docs-api-property-type","any>"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","{","property:","string,","value:","string","}"],["pan","",1,"docs-api-property-type","Array<string"],["pan","",1,"docs-api-property-type","number>"]],template:function(a,n){a&1&&(t(0,"div",0)(1,"p",1)(2,"code"),i(3,"import { PoFieldModule } from '@po-ui/ng-components';"),e()(),t(4,"div",2)(5,"p"),i(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),e(),t(7,"blockquote")(8,"p"),i(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),t(10,"code"),i(11,"FormsModule"),e(),i(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),t(13,"code"),i(14,"ReactiveFormsModule"),e(),i(15,", ambos nativos do Angular."),e()()(),t(16,"h3",3),i(17,"Componente"),e(),t(18,"h4",4)(19,"code",5),i(20,"PoMultiselectComponent"),e()(),t(21,"div",2)(22,"p"),i(23,`O po-multiselect \xE9 um componente de m\xFAltipla sele\xE7\xE3o.
Este componente \xE9 recomendado para dar ao usu\xE1rio a op\xE7\xE3o de selecionar v\xE1rios itens em uma lista.`),e(),t(24,"p"),i(25,`Quando a lista possuir poucos itens, deve-se dar prefer\xEAncia para o uso do po-checkbox-group, por ser mais simples
e mais r\xE1pido para a sele\xE7\xE3o do usu\xE1rio.`),e(),t(26,"p"),i(27,`Este componente tamb\xE9m n\xE3o deve ser utilizado em casos onde a sele\xE7\xE3o seja \xFAnica. Nesses casos, deve-se utilizar o
po-select, po-combo ou po-radio-group.`),e(),t(28,"p"),i(29,"Com ele tamb\xE9m \xE9 poss\xEDvel definir uma lista \xE0 partir da requisi\xE7\xE3o de um servi\xE7o definido em "),t(30,"code"),i(31,"p-filter-service"),e(),i(32,"."),e(),t(33,"h4"),i(34,"Boas pr\xE1ticas"),e(),t(35,"ul")(36,"li"),i(37,"Caso a lista apresente menos de 5 itens, considere utilizar outro componente;"),e(),t(38,"li"),i(39,"N\xE3o utilize o multiselect caso o usu\xE1rio possa selecionar apenas uma op\xE7\xE3o. Para esse caso, opte por utilizar po-radio ou po-select;"),e(),t(40,"li"),i(41,`Sempre que poss\xEDvel, agrupe as op\xE7\xF5es e use labels curtas para descrever o conte\xFAdo. Exemplo: em uma combina\xE7\xE3o de alimentos,
as op\xE7\xF5es podem ser agrupadas por Vegetais, Frutas, etc;`),e()(),t(42,"h4"),i(43,"Acessibilidade tratada no componente"),e(),t(44,"p"),i(45,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),e(),t(46,"ul")(47,"li"),i(48,"Quando em foco, o multiselect abre o listbox usando as teclas de Espa\xE7o ou Enter do teclado."),e(),t(49,"li"),i(50,"Utilize as teclas Arrow Up [seta para cima] ou Arrow Down [seta para baixo] do teclado para navegar entre os itens do listbox."),e(),t(51,"li"),i(52,"Utilize a tecla Esc do teclado para fechar o listbox."),e(),t(53,"li"),i(54,"Quando um item estiver em foco, utilize as teclas Arrow Right [seta para direita] ou Arrow Left [seta para esquerda] do teclado para navegar entre eles."),e(),t(55,"li"),i(56,"Quando em foco e havendo um item ou mais j\xE1 selecionado, utilize a tecla Arrow Down [seta para baixo] do teclado para abrir o listbox."),e()(),t(57,"h4"),i(58,"Tokens customiz\xE1veis"),e(),t(59,"p"),i(60,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),e(),t(61,"blockquote")(62,"p"),i(63,"Para maiores informa\xE7\xF5es, acesse o guia "),t(64,"a",6),i(65,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),i(66,"."),e()(),t(67,"table")(68,"thead")(69,"tr")(70,"th"),i(71,"Propriedade"),e(),t(72,"th"),i(73,"Descri\xE7\xE3o"),e(),t(74,"th"),i(75,"Valor Padr\xE3o"),e()()(),t(76,"tbody")(77,"tr")(78,"td")(79,"strong"),i(80,"Default Values"),e()(),l(81,"td")(82,"td"),e(),t(83,"tr")(84,"td")(85,"code"),i(86,"--font-family"),e()(),t(87,"td"),i(88,"Fam\xEDlia tipogr\xE1fica usada"),e(),t(89,"td")(90,"code"),i(91,"var(--font-family-theme)"),e()()(),t(92,"tr")(93,"td")(94,"code"),i(95,"--font-size"),e()(),t(96,"td"),i(97,"Tamanho da fonte"),e(),t(98,"td")(99,"code"),i(100,"var(--font-size-default)"),e()()(),t(101,"tr")(102,"td")(103,"code"),i(104,"--text-color-placeholder"),e(),i(105," \xA0"),e(),t(106,"td"),i(107,"Cor do texto do placeholder"),e(),t(108,"td")(109,"code"),i(110,"var(--color-action-disabled)"),e()()(),t(111,"tr")(112,"td")(113,"code"),i(114,"--color"),e()(),t(115,"td"),i(116,"Cor principal do multiselect"),e(),t(117,"td")(118,"code"),i(119,"var(--color-neutral-dark-70)"),e()()(),t(120,"tr")(121,"td")(122,"code"),i(123,"--background"),e()(),t(124,"td"),i(125,"Cor de background"),e(),t(126,"td")(127,"code"),i(128,"var(--color-neutral-light-05)"),e()()(),t(129,"tr")(130,"td")(131,"strong"),i(132,"Hover"),e()(),l(133,"td")(134,"td"),e(),t(135,"tr")(136,"td")(137,"code"),i(138,"--color-hover"),e()(),t(139,"td"),i(140,"Cor principal no estado hover"),e(),t(141,"td")(142,"code"),i(143,"var(--color-action-hover)"),e()()(),t(144,"tr")(145,"td")(146,"code"),i(147,"--background-hover"),e()(),t(148,"td"),i(149,"Cor de background no estado hover"),e(),t(150,"td")(151,"code"),i(152,"var(--color-brand-01-lighter)"),e()()(),t(153,"tr")(154,"td")(155,"strong"),i(156,"Focused"),e()(),l(157,"td")(158,"td"),e(),t(159,"tr")(160,"td")(161,"code"),i(162,"--color-focused"),e()(),t(163,"td"),i(164,"Cor principal no estado de focus"),e(),t(165,"td")(166,"code"),i(167,"var(--color-action-default)"),e()()(),t(168,"tr")(169,"td")(170,"code"),i(171,"--outline-color-focused"),e(),i(172," \xA0"),e(),t(173,"td"),i(174,"Cor do outline do estado de focus"),e(),t(175,"td")(176,"code"),i(177,"var(--color-action-focus)"),e()()(),t(178,"tr")(179,"td")(180,"strong"),i(181,"Disabled"),e()(),l(182,"td")(183,"td"),e(),t(184,"tr")(185,"td")(186,"code"),i(187,"--color-disabled"),e()(),t(188,"td"),i(189,"Cor principal no estado disabled"),e(),t(190,"td")(191,"code"),i(192,"var(--color-action-disabled)"),e()()(),t(193,"tr")(194,"td")(195,"code"),i(196,"--background-disabled"),e(),i(197," \xA0"),e(),t(198,"td"),i(199,"Cor de background no estado disabled \xA0"),e(),t(200,"td")(201,"code"),i(202,"var(--color-neutral-light-20)"),e()()(),t(203,"tr")(204,"td")(205,"strong"),i(206,"Error"),e()(),l(207,"td")(208,"td"),e(),t(209,"tr")(210,"td")(211,"code"),i(212,"--color-error"),e()(),t(213,"td"),i(214,"Cor principal no estado error"),e(),t(215,"td")(216,"code"),i(217,"var(--color-feedback-negative-base)"),e()()()()()(),t(218,"div",7)(219,"h4",8),i(220,"Seletor"),e(),t(221,"pre",9),i(222,`<po-multiselect
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-auto-height="boolean"
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
    p-listbox-control-position="'top' | 'bottom'"
    p-literals="PoMultiselectLiterals"
    name="string"
    p-optional="boolean"
    p-options="Array<PoMultiselectOption | any>"
    p-placeholder="string"
    p-placeholder-search="string"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string"
    p-sort="boolean" >
</po-multiselect>
`),e()(),t(223,"h4",10),i(224,"Propriedades"),e(),t(225,"table",11)(226,"tr",12)(227,"th",13),i(228,"Nome"),e(),t(229,"th",13),i(230,"Tipo"),e(),t(231,"th",13),i(232,"Padr\xE3o"),e(),t(233,"th",13),i(234,"Descri\xE7\xE3o"),e()(),t(235,"tr",14)(236,"td",15)(237,"div",16)(238,"span",17),i(239," (p-additional-help)"),l(240,"br"),e()()(),t(241,"td",18)(242,"code",19),i(243,"EventEmitter"),e()(),t(244,"td",20),i(245,"-"),e(),t(246,"td",21)(247,"em")(248,"strong"),i(249,"(opcional)"),e()(),t(250,"p"),i(251,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),t(252,"code"),i(253,"p-help"),e(),i(254,"."),e()()(),t(255,"tr",14)(256,"td",15)(257,"div",22)(258,"span",23),i(259," p-additional-help-tooltip"),l(260,"br"),e()()(),t(261,"td",18)(262,"code",24),i(263,"string"),e()(),t(264,"td",20),i(265,"-"),e(),t(266,"td",21)(267,"em")(268,"strong"),i(269,"(opcional)"),e()(),t(270,"p"),i(271,"Exibe um \xEDcone de ajuda adicional ao "),t(272,"code"),i(273,"p-help"),e(),i(274,`, com o texto desta propriedade no tooltip.
Se o evento `),t(275,"code"),i(276,"p-additional-help"),e(),i(277,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),t(278,"strong"),i(279,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),e()(),t(280,"blockquote")(281,"p"),i(282,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),e()()()(),t(283,"tr",14)(284,"td",15)(285,"div",22)(286,"span",23),i(287," p-append-in-body"),l(288,"br"),e()()(),t(289,"td",18)(290,"code",25),i(291,"boolean"),e()(),t(292,"td",20)(293,"p")(294,"code"),i(295,"false"),e()()(),t(296,"td",21)(297,"em")(298,"strong"),i(299,"(opcional)"),e()(),t(300,"p"),i(301,"Define que o "),t(302,"code"),i(303,"listbox"),e(),i(304," e/ou tooltip ("),t(305,"code"),i(306,"p-additional-help-tooltip"),e(),i(307," e/ou "),t(308,"code"),i(309,"p-error-limit"),e(),i(310,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),e(),t(311,"blockquote")(312,"p"),i(313,`O uso dessa propriedade pode interferir na sequ\xEAncia de tabula\xE7\xE3o da p\xE1gina. Quando utilizado com
`),t(314,"code"),i(315,"p-additional-help-tooltip"),e(),i(316,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),e()()()(),t(317,"tr",14)(318,"td",15)(319,"div",22)(320,"span",23),i(321," p-auto-focus"),l(322,"br"),e()()(),t(323,"td",18)(324,"code",25),i(325,"boolean"),e()(),t(326,"td",20)(327,"p")(328,"code"),i(329,"false"),e()()(),t(330,"td",21)(331,"em")(332,"strong"),i(333,"(opcional)"),e()(),t(334,"p"),i(335,"Aplica foco no elemento ao ser iniciado."),e(),t(336,"blockquote")(337,"p"),i(338,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),e()()()(),t(339,"tr",14)(340,"td",15)(341,"div",22)(342,"span",23),i(343," p-auto-height"),l(344,"br"),e()()(),t(345,"td",18)(346,"code",25),i(347,"boolean"),e()(),t(348,"td",20)(349,"p")(350,"code"),i(351,"false"),e()()(),t(352,"td",21)(353,"em")(354,"strong"),i(355,"(opcional)"),e()(),t(356,"p"),i(357,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo
com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis.`),e(),t(358,"blockquote")(359,"p"),i(360,"O valor padr\xE3o ser\xE1 "),t(361,"code"),i(362,"true"),e(),i(363," quando houver servi\xE7o ("),t(364,"code"),i(365,"p-filter-service"),e(),i(366,")."),e()()()(),t(367,"tr",14)(368,"td",15)(369,"div",16)(370,"span",17),i(371," (p-change)"),l(372,"br"),e()()(),t(373,"td",18)(374,"code",19),i(375,"EventEmitter"),e()(),t(376,"td",20),i(377,"-"),e(),t(378,"td",21)(379,"em")(380,"strong"),i(381,"(opcional)"),e()(),t(382,"p"),i(383,"Pode ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no ngModel."),e()()(),t(384,"tr",14)(385,"td",15)(386,"div",22)(387,"span",23),i(388," p-debounce-time"),l(389,"br"),e()()(),t(390,"td",18)(391,"code",26),i(392,"number"),e()(),t(393,"td",20)(394,"p")(395,"code"),i(396,"400"),e()()(),t(397,"td",21)(398,"em")(399,"strong"),i(400,"(opcional)"),e()(),t(401,"p"),i(402,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla."),e(),t(403,"blockquote")(404,"p"),i(405,"Ser\xE1 utilizada apenas quando houver servi\xE7o ("),t(406,"code"),i(407,"p-filter-service"),e(),i(408,") e somente ser\xE1 aceito valor maior do que "),t(409,"em"),i(410,"zero"),e(),i(411,"."),e()()()(),t(412,"tr",14)(413,"td",15)(414,"div",22)(415,"span",23),i(416," p-disabled"),l(417,"br"),e()()(),t(418,"td",18)(419,"code",25),i(420,"boolean"),e()(),t(421,"td",20)(422,"p")(423,"code"),i(424,"false"),e()()(),t(425,"td",21)(426,"em")(427,"strong"),i(428,"(opcional)"),e()(),t(429,"p"),i(430,"Indica que o campo ser\xE1 desabilitado."),e()()(),t(431,"tr",14)(432,"td",15)(433,"div",22)(434,"span",23),i(435," p-error-limit"),l(436,"br"),e()()(),t(437,"td",18)(438,"code",25),i(439,"boolean"),e()(),t(440,"td",20)(441,"p")(442,"code"),i(443,"false"),e()()(),t(444,"td",21)(445,"em")(446,"strong"),i(447,"(opcional)"),e()(),t(448,"p"),i(449,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),e(),t(450,"blockquote")(451,"p"),i(452,"Caso essa propriedade seja definida como "),t(453,"code"),i(454,"true"),e(),i(455,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),e()()()(),t(456,"tr",14)(457,"td",15)(458,"div",22)(459,"span",23),i(460," p-field-error-message"),l(461,"br"),e()()(),t(462,"td",18)(463,"code",24),i(464,"string"),e()(),t(465,"td",20),i(466,"-"),e(),t(467,"td",21)(468,"em")(469,"strong"),i(470,"(opcional)"),e()(),t(471,"p"),i(472,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),e(),t(473,"blockquote")(474,"p"),i(475,"Necess\xE1rio que a propriedade "),t(476,"code"),i(477,"p-required"),e(),i(478," esteja habilitada."),e()()()(),t(479,"tr",14)(480,"td",15)(481,"div",22)(482,"span",23),i(483," p-field-label"),l(484,"br"),e()()(),t(485,"td",18)(486,"code",24),i(487,"string"),e()(),t(488,"td",20)(489,"p")(490,"code"),i(491,"label"),e()()(),t(492,"td",21)(493,"em")(494,"strong"),i(495,"(opcional)"),e()(),t(496,"p"),i(497,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),t(498,"code"),i(499,"p-options"),e(),i(500,"), esta propriedade ser\xE1 respons\xE1vel pelo texto de apresenta\xE7\xE3o de cada item da lista."),e(),t(501,"p"),i(502,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
`),t(503,"code"),i(504,"PoMultiSelectOption"),e(),i(505,"."),e()()(),t(506,"tr",14)(507,"td",15)(508,"div",22)(509,"span",23),i(510," p-field-value"),l(511,"br"),e()()(),t(512,"td",18)(513,"code",24),i(514,"string"),e()(),t(515,"td",20)(516,"p")(517,"code"),i(518,"value"),e()()(),t(519,"td",21)(520,"em")(521,"strong"),i(522,"(opcional)"),e()(),t(523,"p"),i(524,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),t(525,"code"),i(526,"p-options"),e(),i(527,"), esta propriedade ser\xE1 respons\xE1vel pelo valor de cada item da lista."),e(),t(528,"p"),i(529,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
`),t(530,"code"),i(531,"PoMultiSelectOption"),e(),i(532,"."),e()()(),t(533,"tr",14)(534,"td",15)(535,"div",22)(536,"span",23),i(537," p-filter-mode"),l(538,"br"),e()()(),t(539,"td",18)(540,"code",27),i(541,"PoMultiselectFilterMode"),e()(),t(542,"td",20)(543,"p")(544,"code"),i(545,"startsWith"),e()()(),t(546,"td",21)(547,"em")(548,"strong"),i(549,"(opcional)"),e()(),t(550,"p"),i(551,`Define o modo de pesquisa utilizado no campo de busca, quando habilitado.
Valores definidos no enum: PoMultiselectFilterMode`),e()()(),t(552,"tr",14)(553,"td",15)(554,"div",22)(555,"span",23),i(556," p-filter-service"),l(557,"br"),e()()(),t(558,"td",18)(559,"code",24),i(560,"string "),e(),t(561,"code",28),i(562," PoMultiselectFilter"),e()(),t(563,"td",20),i(564,"-"),e(),t(565,"td",21)(566,"em")(567,"strong"),i(568,"(opcional)"),e()(),t(569,"p"),i(570,"Nesta propriedade pode ser informada a URL do servi\xE7o em que ser\xE1 realizado o filtro para carregamento da lista de itens no componente."),e(),t(571,"p"),i(572,"Tamb\xE9m existe a possibilidade de informar um servi\xE7o implementando a interface "),t(573,"code"),i(574,"PoMultiselectFilter"),e(),i(575,"."),e(),t(576,"p"),i(577,"Caso utilizado uma URL, o servi\xE7o deve ser retornado no padr\xE3o "),t(578,"a",29),i(579,"API PO UI"),e(),i(580," e utilizar as propriedades "),t(581,"code"),i(582,"p-field-label"),e(),i(583," e "),t(584,"code"),i(585,"p-field-value"),e(),i(586," para a constru\xE7\xE3o da lista de itens."),e(),t(587,"p"),i(588,"Quando utilizada uma URL de servi\xE7o, ent\xE3o ser\xE1 concatenada nesta URL o valor que deseja-se filtrar da seguinte forma:"),e(),t(589,"pre")(590,"code"),i(591,`// caso filtrar por "Peter"
https://localhost:8080/api/heroes?filter=Peter
`),e()(),t(592,"p"),i(593,"E caso iniciar o campo com valor, os itens ser\xE3o buscados da seguinte forma:"),e(),t(594,"pre")(595,"code"),i(596,`// caso o valor do campo for [1234, 5678];
 https://localhost:8080/api/heroes?value=1234,5678

//O *value* \xE9 referente ao \`fieldValue\`.
`),e()()()(),t(597,"tr",14)(598,"td",15)(599,"div",22)(600,"span",23),i(601," p-help"),l(602,"br"),e()()(),t(603,"td",18)(604,"code",24),i(605,"string"),e()(),t(606,"td",20),i(607,"-"),e(),t(608,"td",21)(609,"em")(610,"strong"),i(611,"(opcional)"),e()(),t(612,"p"),i(613,"Texto de apoio para o campo."),e()()(),t(614,"tr",14)(615,"td",15)(616,"div",22)(617,"span",23),i(618," p-hide-search"),l(619,"br"),e()()(),t(620,"td",18)(621,"code",25),i(622,"boolean"),e()(),t(623,"td",20)(624,"p")(625,"code"),i(626,"false"),e()()(),t(627,"td",21)(628,"em")(629,"strong"),i(630,"(opcional)"),e()(),t(631,"p"),i(632,"Esconde o campo de pesquisa existente dentro do dropdown do po-multiselect."),e()()(),t(633,"tr",14)(634,"td",15)(635,"div",22)(636,"span",23),i(637," p-hide-select-all"),l(638,"br"),e()()(),t(639,"td",18)(640,"code",25),i(641,"boolean"),e()(),t(642,"td",20)(643,"p")(644,"code"),i(645,"false"),e()()(),t(646,"td",21)(647,"em")(648,"strong"),i(649,"(opcional)"),e()(),t(650,"p"),i(651,'Indica se o campo "Selecionar todos" ser\xE1 escondido.'),e()()(),t(652,"tr",14)(653,"td",15)(654,"div",16)(655,"span",17),i(656," (p-keydown)"),l(657,"br"),e()()(),t(658,"td",18)(659,"code",19),i(660,"EventEmitter"),e()(),t(661,"td",20),i(662,"-"),e(),t(663,"td",21)(664,"em")(665,"strong"),i(666,"(opcional)"),e()(),t(667,"p"),i(668,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),t(669,"code"),i(670,"KeyboardEvent"),e(),i(671," com informa\xE7\xF5es sobre a tecla."),e()()(),t(672,"tr",14)(673,"td",15)(674,"div",22)(675,"span",23),i(676," p-label"),l(677,"br"),e()()(),t(678,"td",18)(679,"code",24),i(680,"string"),e()(),t(681,"td",20),i(682,"-"),e(),t(683,"td",21)(684,"em")(685,"strong"),i(686,"(opcional)"),e()(),t(687,"p"),i(688,"Label no componente."),e()()(),t(689,"tr",14)(690,"td",15)(691,"div",22)(692,"span",23),i(693," p-listbox-control-position"),l(694,"br"),e()()(),t(695,"td",18)(696,"code",30),i(697,"'top' "),e(),t(698,"code",31),i(699," 'bottom'"),e()(),t(700,"td",20)(701,"p")(702,"code"),i(703,"bottom"),e()()(),t(704,"td",21)(705,"em")(706,"strong"),i(707,"(opcional)"),e()(),t(708,"p"),i(709,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),t(710,"code"),i(711,"listbox"),e(),i(712," em rela\xE7\xE3o ao campo ("),t(713,"code"),i(714,"top"),e(),i(715," ou "),t(716,"code"),i(717,"bottom"),e(),i(718,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),e()()(),t(719,"tr",14)(720,"td",15)(721,"div",22)(722,"span",23),i(723," p-literals"),l(724,"br"),e()()(),t(725,"td",18)(726,"code",32),i(727,"PoMultiselectLiterals"),e()(),t(728,"td",20),i(729,"-"),e(),t(730,"td",21)(731,"em")(732,"strong"),i(733,"(opcional)"),e()(),t(734,"p"),i(735,"Objeto com as literais usadas no "),t(736,"code"),i(737,"po-multiselect"),e(),i(738,"."),e(),t(739,"p"),i(740,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),e(),t(741,"pre")(742,"code"),i(743,`const customLiterals: PoMultiselectLiterals = {
  noData: 'Nenhum dado encontrado',
  placeholderSearch: 'Buscar',
  selectAll: 'Select all',
  selectItem: 'Select items'
};
`),e()(),t(744,"p"),i(745,"Ou passando apenas as literais que deseja customizar:"),e(),t(746,"pre")(747,"code"),i(748,`const customLiterals: PoMultiselectLiterals = {
  noData: 'Sem dados'
};
`),e()(),t(749,"p"),i(750,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente:"),e(),t(751,"pre")(752,"code"),i(753,`<po-multiselect
  [p-literals]="customLiterals">
</po-po-multiselect>
`),e()(),t(754,"blockquote")(755,"p"),i(756,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),t(757,"a",33)(758,"code"),i(759,"PoI18nService"),e()(),i(760," ou do browser."),e()()()(),t(761,"tr",14)(762,"td",15)(763,"div",22)(764,"span",23),i(765," name"),l(766,"br"),e()()(),t(767,"td",18)(768,"code",24),i(769,"string"),e()(),t(770,"td",20),i(771,"-"),e(),t(772,"td",21)(773,"p"),i(774,"Nome do componente."),e()()(),t(775,"tr",14)(776,"td",15)(777,"div",22)(778,"span",23),i(779," p-optional"),l(780,"br"),e()()(),t(781,"td",18)(782,"code",25),i(783,"boolean"),e()(),t(784,"td",20)(785,"p")(786,"code"),i(787,"false"),e()()(),t(788,"td",21)(789,"em")(790,"strong"),i(791,"(opcional)"),e()(),t(792,"p"),i(793,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),e(),t(794,"blockquote")(795,"p"),i(796,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),e()(),t(797,"ul")(798,"li"),i(799,"O campo conter "),t(800,"code"),i(801,"p-required"),e(),i(802,";"),e(),t(803,"li"),i(804,"N\xE3o possuir "),t(805,"code"),i(806,"p-help"),e(),i(807," e/ou "),t(808,"code"),i(809,"p-label"),e(),i(810,"."),e()()()(),t(811,"tr",14)(812,"td",15)(813,"div",22)(814,"span",23),i(815," p-options"),l(816,"br"),e()()(),t(817,"td",18)(818,"code",34),i(819,"Array<PoMultiselectOption "),e(),t(820,"code",35),i(821," any>"),e()(),t(822,"td",20),i(823,"-"),e(),t(824,"td",21)(825,"p"),i(826,`Nesta propriedade deve ser definida uma lista de objetos que ser\xE1 exibida no multiselect.
Esta lista deve conter os valores e os labels que ser\xE3o apresentados na tela.`),e(),t(827,"blockquote")(828,"p"),i(829,`Essa propriedade \xE9 imut\xE1vel, ou seja, sempre que quiser atualizar a lista de op\xE7\xF5es dispon\xEDveis
atualize a refer\xEAncia do objeto:`),e()(),t(830,"pre")(831,"code"),i(832,`// atualiza a refer\xEAncia do objeto garantindo a atualiza\xE7\xE3o do template
this.options = [...this.options, { value: 'x', label: 'Nova op\xE7\xE3o' }];

// evite, pois n\xE3o atualiza a refer\xEAncia do objeto podendo gerar atrasos na atualiza\xE7\xE3o do template
this.options.push({ value: 'x', label: 'Nova op\xE7\xE3o' });
`),e()(),t(833,"blockquote")(834,"p"),i(835,"A lista pode ser definida utilizando um array com o valor representando "),t(836,"code"),i(837,"value"),e(),i(838," e "),t(839,"code"),i(840,"label"),e(),i(841," das seguintes formas:"),e()(),t(842,"pre")(843,"code"),i(844,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="[{value: 1, label: 'One'}, {value: 2, label: 'two'}]"> </po-multiselect>
`),e()(),t(845,"pre")(846,"code"),i(847,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="[{name: 'Roger', age: 28}, {name: 'Anne', age: 35}]" p-field-label="name" p-field-value="age"> </po-multiselect>
`),e()(),t(848,"ul")(849,"li"),i(850,"Aconselha-se utilizar valores distintos no "),t(851,"code"),i(852,"label"),e(),i(853," e "),t(854,"code"),i(855,"value"),e(),i(856," dos itens."),e()()()(),t(857,"tr",14)(858,"td",15)(859,"div",22)(860,"span",23),i(861," p-placeholder"),l(862,"br"),e()()(),t(863,"td",18)(864,"code",24),i(865,"string"),e()(),t(866,"td",20),i(867,"-"),e(),t(868,"td",21)(869,"em")(870,"strong"),i(871,"(opcional)"),e()(),t(872,"p"),i(873,"Mensagem apresentada enquanto o campo estiver vazio."),e()()(),t(874,"tr",14)(875,"td",15)(876,"div",22)(877,"span",23),i(878," p-placeholder-search"),l(879,"br"),e()()(),t(880,"td",18)(881,"code",24),i(882,"string"),e()(),t(883,"td",20)(884,"p")(885,"code"),i(886,"Buscar"),e()()(),t(887,"td",21)(888,"em")(889,"strong"),i(890,"(opcional)"),e()(),t(891,"p"),i(892,"Placeholder do campo de pesquisa."),e(),t(893,"blockquote")(894,"p"),i(895,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),e()()()(),t(896,"tr",14)(897,"td",15)(898,"div",22)(899,"span",23),i(900," p-required"),l(901,"br"),e()()(),t(902,"td",18)(903,"code",25),i(904,"boolean"),e()(),t(905,"td",20)(906,"p")(907,"code"),i(908,"false"),e()()(),t(909,"td",21)(910,"em")(911,"strong"),i(912,"(opcional)"),e()(),t(913,"p"),i(914,"Define que o campo ser\xE1 obrigat\xF3rio."),e(),t(915,"blockquote")(916,"p"),i(917,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),t(918,"code"),i(919,"(p-disabled)"),e(),i(920,"."),e()()()(),t(921,"tr",14)(922,"td",15)(923,"div",22)(924,"span",23),i(925," p-show-required"),l(926,"br"),e()()(),t(927,"td",18)(928,"code",25),i(929,"boolean"),e()(),t(930,"td",20),i(931,"-"),e(),t(932,"td",21)(933,"p"),i(934,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),e(),t(935,"blockquote")(936,"p"),i(937,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),e()(),t(938,"ul")(939,"li"),i(940,"N\xE3o possuir "),t(941,"code"),i(942,"p-help"),e(),i(943," e/ou "),t(944,"code"),i(945,"p-label"),e(),i(946,"."),e()()()(),t(947,"tr",14)(948,"td",15)(949,"div",22)(950,"span",23),i(951," p-size"),l(952,"br"),e()()(),t(953,"td",18)(954,"code",24),i(955,"string"),e()(),t(956,"td",20)(957,"p")(958,"code"),i(959,"medium"),e()()(),t(960,"td",21)(961,"em")(962,"strong"),i(963,"(opcional)"),e()(),t(964,"p"),i(965,"Define o tamanho do componente:"),e(),t(966,"ul")(967,"li")(968,"code"),i(969,"small"),e(),i(970,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),e(),t(971,"li")(972,"code"),i(973,"medium"),e(),i(974,": altura do input como 44px."),e()(),t(975,"blockquote")(976,"p"),i(977,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),t(978,"code"),i(979,"medium"),e(),i(980,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),t(981,"a",36),i(982,"po-theme"),e(),i(983,"."),e()()()(),t(984,"tr",14)(985,"td",15)(986,"div",22)(987,"span",23),i(988," p-sort"),l(989,"br"),e()()(),t(990,"td",18)(991,"code",25),i(992,"boolean"),e()(),t(993,"td",20)(994,"p")(995,"code"),i(996,"false"),e()()(),t(997,"td",21)(998,"em")(999,"strong"),i(1e3,"(opcional)"),e()(),t(1001,"p"),i(1002,`Indica que a lista definida na propriedade p-options ser\xE1 ordenada pelo label antes de ser apresentada no
dropdown.`),e()()()(),t(1003,"h3",10),i(1004,"M\xE9todos"),e(),t(1005,"table",37)(1006,"tr",14)(1007,"th",38)(1008,"div",22)(1009,"h4")(1010,"span",23),i(1011," focus "),e()()()()(),t(1012,"tr",21)(1013,"td",21)(1014,"p"),i(1015,"Fun\xE7\xE3o que atribui foco ao componente."),e(),t(1016,"p"),i(1017,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),e(),t(1018,"pre")(1019,"code"),i(1020,`import { PoMultiselectComponent } from '@po-ui/ng-components';

...

@ViewChild(PoMultiselectComponent, { static: true }) multiselect: PoMultiselectComponent;

focusMultiselect() {
  this.multiselect.focus();
}
`),e()()()()(),l(1021,"br"),t(1022,"table",37)(1023,"tr",14)(1024,"th",38)(1025,"div",22)(1026,"h4")(1027,"span",23),i(1028," showAdditionalHelp "),e()()()()(),t(1029,"tr",21)(1030,"td",21)(1031,"p"),i(1032,"M\xE9todo que exibe "),t(1033,"code"),i(1034,"p-additionalHelpTooltip"),e(),i(1035," ou executa a a\xE7\xE3o definida em "),t(1036,"code"),i(1037,"p-additionalHelp"),e(),i(1038,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),t(1039,"code"),i(1040,"p-keydown"),e(),i(1041,"."),e(),t(1042,"pre")(1043,"code"),i(1044,`<po-multiselect
 #multiselect
 ...
 p-additional-help-tooltip="Mensagem de ajuda complementar"
 (p-keydown)="onKeyDown($event, multiselect)"
></po-multiselect>
`),e()(),t(1045,"pre")(1046,"code"),i(1047,`...
onKeyDown(event: KeyboardEvent, inp: PoMultiselectComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),e()()()()(),l(1048,"br"),t(1049,"h3"),i(1050,"Interfaces"),e(),t(1051,"h4",39)(1052,"code",5),i(1053,"PoMultiselectFilter"),e()(),t(1054,"div",2)(1055,"p"),i(1056,"Interface para os servi\xE7os que ser\xE3o utilizados no po-multiselect."),e()(),t(1057,"h4",10),i(1058,"M\xE9todos"),e(),t(1059,"table",37)(1060,"tr",14)(1061,"th",38)(1062,"div",22)(1063,"h4")(1064,"span",23),i(1065," getFilteredData "),e()()()()(),t(1066,"tr",21)(1067,"td",21)(1068,"p"),i(1069,`M\xE9todo que ser\xE1 chamado ao realizar uma busca no componente, deve retornar um Observable que cont\xE9m uma cole\xE7\xE3o de objetos que seguem
a interface `),t(1070,"code"),i(1071,"PoMultiselectOption"),e(),i(1072,", ser\xE1 informado por parametro o campo e o valor a ser pesquisado."),e()()()(),t(1073,"h5")(1074,"b"),i(1075,"Par\xE2metros"),e()(),t(1076,"table",11)(1077,"tr",12)(1078,"th",13),i(1079,"Nome"),e(),t(1080,"th",13),i(1081,"Tipo"),e(),t(1082,"th",13),i(1083,"Descri\xE7\xE3o"),e()(),t(1084,"tr",14)(1085,"td",15),i(1086," params"),e(),t(1087,"td",18)(1088,"code",40),i(1089," { property: string, value: string } "),e()(),t(1090,"td",21)(1091,"p"),i(1092,"Objeto contendo a propriedade e o valor respons\xE1vel por realizar o filtro."),e()()()(),l(1093,"br"),t(1094,"table",37)(1095,"tr",14)(1096,"th",38)(1097,"div",22)(1098,"h4")(1099,"span",23),i(1100," getObjectsByValues "),e()()()()(),t(1101,"tr",21)(1102,"td",21)(1103,"p"),i(1104,`M\xE9todo que ser\xE1 chamado ao iniciar o componente com valor, deve retornar um Observable que cont\xE9m apenas os objetos filtrados que
seguem a interface `),t(1105,"code"),i(1106,"PoMultiselectOption"),e(),i(1107,", ser\xE1 informado por par\xE2metro valor a ser pesquisado."),e()()()(),t(1108,"h5")(1109,"b"),i(1110,"Par\xE2metros"),e()(),t(1111,"table",11)(1112,"tr",12)(1113,"th",13),i(1114,"Nome"),e(),t(1115,"th",13),i(1116,"Tipo"),e(),t(1117,"th",13),i(1118,"Descri\xE7\xE3o"),e()(),t(1119,"tr",14)(1120,"td",15),i(1121," values"),e(),t(1122,"td",18)(1123,"code",41),i(1124," Array<string "),e(),t(1125,"code",42),i(1126," number> "),e()(),t(1127,"td",21)(1128,"p"),i(1129,"Array com os valores a serem buscados."),e()()()(),l(1130,"br"),t(1131,"h4",39)(1132,"code",5),i(1133,"PoMultiselectLiterals"),e()(),t(1134,"div",2)(1135,"p"),i(1136,"Interface para defini\xE7\xE3o das literais usadas no "),t(1137,"code"),i(1138,"po-multiselect"),e(),i(1139,"."),e()(),t(1140,"h4",10),i(1141,"Propriedades"),e(),t(1142,"table",11)(1143,"tr",12)(1144,"th",13),i(1145,"Nome"),e(),t(1146,"th",13),i(1147,"Tipo"),e(),t(1148,"th",13),i(1149,"Descri\xE7\xE3o"),e()(),t(1150,"tr",14)(1151,"td",15)(1152,"div",22)(1153,"span",23),i(1154," noData"),l(1155,"br"),e()()(),t(1156,"td",18)(1157,"code",24),i(1158,"string"),e()(),t(1159,"td",21)(1160,"em")(1161,"strong"),i(1162,"(opcional)"),e()(),t(1163,"p"),i(1164,"Texto exibido quando n\xE3o houver dados encontrados na busca."),e()()(),t(1165,"tr",14)(1166,"td",15)(1167,"div",22)(1168,"span",23),i(1169," placeholderSearch"),l(1170,"br"),e()()(),t(1171,"td",18)(1172,"code",24),i(1173,"string"),e()(),t(1174,"td",21)(1175,"em")(1176,"strong"),i(1177,"(opcional)"),e()(),t(1178,"p"),i(1179,"Texto do "),t(1180,"em"),i(1181,"placeholder"),e(),i(1182," do campo de busca."),e()()(),t(1183,"tr",14)(1184,"td",15)(1185,"div",22)(1186,"span",23),i(1187," selectAll"),l(1188,"br"),e()()(),t(1189,"td",18)(1190,"code",24),i(1191,"string"),e()(),t(1192,"td",21)(1193,"em")(1194,"strong"),i(1195,"(opcional)"),e()(),t(1196,"p"),i(1197,"Texto exibido no bot\xE3o de selecionar todos."),e()()(),t(1198,"tr",14)(1199,"td",15)(1200,"div",22)(1201,"span",23),i(1202," selectItem"),l(1203,"br"),e()()(),t(1204,"td",18)(1205,"code",24),i(1206,"string"),e()(),t(1207,"td",21)(1208,"em")(1209,"strong"),i(1210,"(opcional)"),e()(),t(1211,"p"),i(1212,"Texto exibido na propriedade placeholder."),e()()()(),t(1213,"h4",39)(1214,"code",5),i(1215,"PoMultiselectOption"),e()(),t(1216,"div",2)(1217,"p"),i(1218,"Interface dos itens da cole\xE7\xE3o que ser\xE1 exibida no dropdown do po-multiselect."),e()(),t(1219,"h4",10),i(1220,"Propriedades"),e(),t(1221,"table",11)(1222,"tr",12)(1223,"th",13),i(1224,"Nome"),e(),t(1225,"th",13),i(1226,"Tipo"),e(),t(1227,"th",13),i(1228,"Descri\xE7\xE3o"),e()(),t(1229,"tr",14)(1230,"td",15)(1231,"div",22)(1232,"span",23),i(1233," label"),l(1234,"br"),e()()(),t(1235,"td",18)(1236,"code",24),i(1237,"string"),e()(),t(1238,"td",21)(1239,"p"),i(1240,"Label exibido nos itens da lista."),e()()(),t(1241,"tr",14)(1242,"td",15)(1243,"div",22)(1244,"span",23),i(1245," value"),l(1246,"br"),e()()(),t(1247,"td",18)(1248,"code",24),i(1249,"string "),e(),t(1250,"code",26),i(1251," number"),e()(),t(1252,"td",21)(1253,"p"),i(1254,"Valor do objeto que ser\xE1 atribu\xEDdo ao model."),e()()()(),t(1255,"h3"),i(1256,"Enums"),e(),t(1257,"h4",4)(1258,"code",5),i(1259,"PoMultiselectFilterMode"),e()(),t(1260,"div",2)(1261,"p"),i(1262,"Define o tipo de busca usado no po-multiselect."),e()(),t(1263,"h4",10),i(1264,"Propriedades"),e(),t(1265,"table",11)(1266,"tr",12)(1267,"th",13),i(1268,"Nome"),e(),t(1269,"th",13),i(1270,"Descri\xE7\xE3o"),e()(),t(1271,"tr",14)(1272,"td",15)(1273,"div",22)(1274,"span",23),i(1275," startsWith"),l(1276,"br"),e()()(),t(1277,"td",21)(1278,"p"),i(1279,"Verifica se o texto "),t(1280,"em"),i(1281,"inicia"),e(),i(1282," com o valor pesquisado."),e()()(),t(1283,"tr",14)(1284,"td",15)(1285,"div",22)(1286,"span",23),i(1287," contains"),l(1288,"br"),e()()(),t(1289,"td",21)(1290,"p"),i(1291,"Verifica se o texto "),t(1292,"em"),i(1293,"cont\xE9m"),e(),i(1294," o valor pesquisado."),e()()(),t(1295,"tr",14)(1296,"td",15)(1297,"div",22)(1298,"span",23),i(1299," endsWith"),l(1300,"br"),e()()(),t(1301,"td",21)(1302,"p"),i(1303,"Verifica se o texto "),t(1304,"em"),i(1305,"finaliza"),e(),i(1306," com o valor pesquisado."),e()()()()())},dependencies:[M],encapsulation:2})}return o})();var Ne=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=7;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(s,a){this.route=s,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let a=s.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(s){this.router.navigate([],{queryParams:{view:s},queryParamsHandling:"merge"}),this.activeTab=s}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||o)(q(be),q(he))};static \u0275cmp=S({type:o,selectors:[["ng-component"]],standalone:!1,decls:12,vars:4,consts:[["p-title","Multiselect",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,n){a&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u("p-click",function(){return n.changeTab("doc")}),l(3,"sample-po-multiselect-doc"),e(),t(4,"po-tab",3),u("p-click",function(){return n.changeTab("web")}),l(5,"sample-po-multiselect-basic-view")(6,"sample-po-multiselect-labs-view")(7,"sample-po-multiselect-vacation-view")(8,"sample-po-multiselect-vacation-reactive-form-view")(9,"sample-po-multiselect-template-view")(10,"sample-po-multiselect-heroes-view")(11,"sample-po-multiselect-any-array-view"),e()()()),a&2&&(m("p-actions",n.actions),p(2),m("p-active",n.activeTab==="doc"),p(2),m("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[Ce,y,C,Pe,we,Ve,Oe,ke,qe,Be,Ie],encapsulation:2})}return o})();var bt=[{path:"",component:Ne}],We=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=K({type:o});static \u0275inj=Q({imports:[oe.forChild(bt),oe]})}return o})();var ai=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=K({type:o});static \u0275inj=Q({imports:[Me,We]})}return o})();export{ai as DocPoMultiselectModule};
