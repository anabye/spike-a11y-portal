import{o as y,p as Fe}from"./chunk-TFKSP2Z2.js";import{Ab as k,Fa as ye,J as X,Ja as q,O as Ce,Q as Y,Sa as H,Ta as Pe,Xa as B,a as O,nb as Le,sa as Z,v as N,va as ke,za as ee,zb as C}from"./chunk-3S4WNRBY.js";import{$c as le,Aa as u,Da as P,Dc as ae,E as de,Fb as w,Gc as T,Ha as se,Hc as I,Ic as K,Jc as A,Kc as z,La as i,M as j,Ma as t,N as Q,Na as n,Nc as be,Oc as ge,Q as h,Qb as Se,Ra as $,Sa as x,Sc as ve,Ta as ue,U as c,V as E,Xa as oe,Xc as he,Zc as fe,a as G,bb as ce,bc as V,c as me,cb as e,eb as L,gb as b,hb as g,ib as v,ja as d,ka as ne,mb as _,nb as U,ob as F,p as ie,qa as S,ra as J,ub as Ee,vb as xe,wa as pe}from"./chunk-CBLD3XJL.js";var we=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","lookup","p-field-label","label","p-field-value","value","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","PO Lookup"]],template:function(l,o){l&1&&n(0,"po-lookup",0)},dependencies:[q],encapsulation:2})}return a})();var Ue=a=>({"docs-sample-code-tabs":a}),qe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup Basic"),t(),i(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-basic/sample-po-lookup-basic.component.html"),t(),i(13,"pre",7),e(14,`<po-lookup
  name="lookup"
  p-field-label="label"
  p-field-value="value"
  p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
  p-label="PO Lookup"
>
</po-lookup>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-basic/sample-po-lookup-basic.component.ts"),t(),i(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-lookup-basic',
  templateUrl: './sample-po-lookup-basic.component.html',
  standalone: false
})
export class SamplePoLookupBasicComponent {}
`),t()()()()(),i(21,"div",10),n(22,"sample-po-lookup-basic"),t(),n(23,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,Ue,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,we],encapsulation:2})}return a})();var D=(()=>{class a{httpClient=h(V);url="https://po-sample-api.onrender.com/v1/heroes";getFilteredItems(r){let m=r,{filterParams:l,advancedFilters:o}=m,p=me(m,["filterParams","advancedFilters"]),s=G(G(G({},p),l),o);return this.httpClient.get(this.url,{params:s})}getObjectByValue(r){return this.httpClient.get(`${this.url}/${r}`)}static \u0275fac=function(l){return new(l||a)};static \u0275prov=j({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var Me=(()=>{class a{sampleFilterService=h(D);helperText;columns;columnsName;customLiterals;event;fieldFormat;formatField;fieldLabel;fieldValue;filterService;help;label;literals;lookup;placeholder;properties;fieldErrorMessage;advancedFilters;customAdvancedFilters;size;spacing=ke.Medium;columnsOptions=[{value:"id",label:"Id"},{value:"name",label:"Name"},{value:"email",label:"Email"}];fieldLabelOptions=[{value:"label",label:"Label"},...this.columnsOptions];fieldValueOptions=[{value:"value",label:"Value"},...this.columnsOptions];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"infiniteScroll",label:"Infinite Scroll"},{value:"multiple",label:"Multiple"},{value:"autoHeight",label:"Auto Height"},{value:"hideColumnsManager",label:"Hide Columns Manager"},{value:"textWrap",label:"Text Wrap"},{value:"virtualScroll",label:"Virtual Sroll"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"}];columnsDefinition={id:{property:"id",label:"Id"},name:{property:"name",label:"Name"},email:{property:"email",label:"Email"}};typeSpacing=[{label:"ExtraSmall",value:"extraSmall"},{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(r){this.event=r}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}onFieldFormatChange(r){try{this.fieldFormat=JSON.parse(r)}catch{this.fieldFormat=void 0}}changeAdvancedFilters(){try{this.customAdvancedFilters=JSON.parse(this.advancedFilters)}catch{this.customAdvancedFilters=void 0}}restore(){this.helperText="",this.columnsName=["id","name"],this.customLiterals=void 0,this.updateColumns(),this.fieldLabel="name",this.fieldValue="id",this.fieldFormat=void 0,this.formatField=void 0,this.event=void 0,this.filterService=void 0,this.label=void 0,this.literals=void 0,this.help=void 0,this.lookup=void 0,this.placeholder="",this.properties=[],this.fieldErrorMessage="",this.customAdvancedFilters=[],this.size="medium"}updateColumns(){this.columns=[],this.columnsName.forEach(r=>this.columns.push(this.columnsDefinition[r]))}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-labs"]],standalone:!1,features:[_([D])],decls:26,vars:52,consts:[["f","ngForm"],["name","lookup",3,"ngModelChange","p-change","p-error","p-keydown","p-selected","ngModel","p-helper","p-advanced-filters","p-auto-height","p-clean","p-columns","p-disabled","p-field-format","p-field-label","p-filter-service","p-field-value","p-help","p-hide-columns-manager","p-infinite-scroll","p-label","p-literals","p-multiple","p-no-autocomplete","p-optional","p-placeholder","p-required","p-field-error-message","p-show-required","p-size","p-spacing","p-text-wrap","p-label-text-wrap","p-virtual-scroll","p-error-limit"],["p-no-border","true","p-no-padding","true"],[1,"po-row"],["p-label","Model",1,"po-md-12",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","columnsName","p-columns","3","p-label","Columns",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","fieldLabel","p-label","Field Label","p-required","",1,"po-md-6","po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","fieldValue","p-label","Field Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","filterService","p-clean","","p-help","https://po-sample-api.onrender.com/v1/people","p-label","Filter Service",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: { "modalTitle": "Select a register", "modalPrimaryActionLabel": "Select", "modalPlaceholder": "Search Value" }',"p-label","Literals",1,"po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","formatField","p-label","Field Format","p-help",'Ex.: ["id", "name"]',1,"po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","spacing","p-columns","4","p-help","Para aplicar o tamanho extraSmall, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).","p-label","Spacing",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","advancedFilters","p-help",'Ex.: [{"property":"name","divider":"PERSONAL DATA","required":true,"gridColumns":6},{"property":"id","optional":true,"gridColumns":6}]',"p-label","Advanced Filters","p-rows","4",1,"po-md-12","po-lg-12",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,o){if(l&1){let p=$();i(0,"po-lookup",1),v("ngModelChange",function(m){return c(p),g(o.lookup,m)||(o.lookup=m),E(m)}),x("p-change",function(){return c(p),E(o.changeEvent("p-change"))})("p-error",function(){return c(p),E(o.changeEvent("p-error"))})("p-keydown",function(){return c(p),E(o.changeEvent("p-keydown"))})("p-selected",function(){return c(p),E(o.changeEvent("p-selected"))}),t(),n(1,"po-divider"),i(2,"po-container",2)(3,"div",3),n(4,"po-info",4)(5,"po-info",5),t()(),n(6,"po-divider"),i(7,"form",null,0)(9,"po-input",6),v("ngModelChange",function(m){return c(p),g(o.label,m)||(o.label=m),E(m)}),t(),i(10,"po-checkbox-group",7),v("ngModelChange",function(m){return c(p),g(o.columnsName,m)||(o.columnsName=m),E(m)}),x("p-change",function(){return c(p),E(o.updateColumns())}),t(),i(11,"po-select",8),v("ngModelChange",function(m){return c(p),g(o.fieldLabel,m)||(o.fieldLabel=m),E(m)}),t(),i(12,"po-select",9),v("ngModelChange",function(m){return c(p),g(o.fieldValue,m)||(o.fieldValue=m),E(m)}),t(),i(13,"po-input",10),v("ngModelChange",function(m){return c(p),g(o.filterService,m)||(o.filterService=m),E(m)}),t(),i(14,"po-input",11),v("ngModelChange",function(m){return c(p),g(o.fieldErrorMessage,m)||(o.fieldErrorMessage=m),E(m)}),t(),i(15,"po-input",12),v("ngModelChange",function(m){return c(p),g(o.help,m)||(o.help=m),E(m)}),t(),i(16,"po-input",13),v("ngModelChange",function(m){return c(p),g(o.helperText,m)||(o.helperText=m),E(m)}),t(),i(17,"po-input",14),v("ngModelChange",function(m){return c(p),g(o.placeholder,m)||(o.placeholder=m),E(m)}),t(),i(18,"po-input",15),v("ngModelChange",function(m){return c(p),g(o.literals,m)||(o.literals=m),E(m)}),x("p-change",function(){return c(p),E(o.changeLiterals())}),t(),i(19,"po-input",16),v("ngModelChange",function(m){return c(p),g(o.formatField,m)||(o.formatField=m),E(m)}),x("p-change",function(m){return c(p),E(o.onFieldFormatChange(m))}),t(),i(20,"po-checkbox-group",17),v("ngModelChange",function(m){return c(p),g(o.properties,m)||(o.properties=m),E(m)}),t(),i(21,"po-radio-group",18),v("ngModelChange",function(m){return c(p),g(o.spacing,m)||(o.spacing=m),E(m)}),t(),i(22,"po-radio-group",19),v("ngModelChange",function(m){return c(p),g(o.size,m)||(o.size=m),E(m)}),t(),i(23,"po-textarea",20),v("ngModelChange",function(m){return c(p),g(o.advancedFilters,m)||(o.advancedFilters=m),E(m)}),x("p-change",function(){return c(p),E(o.changeAdvancedFilters())}),t(),i(24,"div",3)(25,"po-button",21),x("p-click",function(){return c(p),E(o.restore())}),t()()()}l&2&&(b("ngModel",o.lookup),u("p-helper",o.helperText)("p-advanced-filters",o.customAdvancedFilters)("p-auto-height",o.properties.includes("autoHeight"))("p-clean",o.properties.includes("clean"))("p-columns",o.columns)("p-disabled",o.properties.includes("disabled"))("p-field-format",o.fieldFormat)("p-field-label",o.fieldLabel)("p-filter-service",o.filterService||o.sampleFilterService)("p-field-value",o.fieldValue)("p-help",o.help)("p-hide-columns-manager",o.properties.includes("hideColumnsManager"))("p-infinite-scroll",o.properties.includes("infiniteScroll"))("p-label",o.label)("p-literals",o.customLiterals)("p-multiple",o.properties.includes("multiple"))("p-no-autocomplete",o.properties.includes("noAutocomplete"))("p-optional",o.properties.includes("optional"))("p-placeholder",o.placeholder)("p-required",o.properties.includes("required"))("p-field-error-message",o.fieldErrorMessage)("p-show-required",o.properties.includes("showRequired"))("p-size",o.size)("p-spacing",o.spacing)("p-text-wrap",o.properties.includes("textWrap"))("p-label-text-wrap",o.properties==null?null:o.properties.includes("labelTextWrap"))("p-virtual-scroll",o.properties.includes("virtualScroll"))("p-error-limit",o.properties==null?null:o.properties.includes("errorLimit")),d(4),u("p-value",o.lookup),d(),u("p-value",o.event),d(4),b("ngModel",o.label),d(),b("ngModel",o.columnsName),u("p-options",o.columnsOptions),d(),b("ngModel",o.fieldLabel),u("p-options",o.fieldLabelOptions),d(),b("ngModel",o.fieldValue),u("p-options",o.fieldValueOptions),d(),b("ngModel",o.filterService),d(),b("ngModel",o.fieldErrorMessage),d(),b("ngModel",o.help),d(),b("ngModel",o.helperText),d(),b("ngModel",o.placeholder),d(),b("ngModel",o.literals),d(),b("ngModel",o.formatField),d(),b("ngModel",o.properties),u("p-options",o.propertiesOptions),d(),b("ngModel",o.spacing),u("p-options",o.typeSpacing),d(),b("ngModel",o.size),u("p-options",o.sizeOptions),d(),b("ngModel",o.advancedFilters))},dependencies:[z,T,I,A,K,N,X,O,Ce,Y,ye,q,H,Pe,B],encapsulation:2})}return a})();var Je=a=>({"docs-sample-code-tabs":a}),Te=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-labs-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup Labs"),t(),i(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-labs/sample-po-lookup-labs.component.html"),t(),i(13,"pre",7),e(14,`<po-lookup
  name="lookup"
  [(ngModel)]="lookup"
  [p-helper]="helperText"
  [p-advanced-filters]="customAdvancedFilters"
  [p-auto-height]="properties.includes('autoHeight')"
  [p-clean]="properties.includes('clean')"
  [p-columns]="columns"
  [p-disabled]="properties.includes('disabled')"
  [p-field-format]="fieldFormat"
  [p-field-label]="fieldLabel"
  [p-filter-service]="filterService || sampleFilterService"
  [p-field-value]="fieldValue"
  [p-help]="help"
  [p-hide-columns-manager]="properties.includes('hideColumnsManager')"
  [p-infinite-scroll]="properties.includes('infiniteScroll')"
  [p-label]="label"
  [p-literals]="customLiterals"
  [p-multiple]="properties.includes('multiple')"
  [p-no-autocomplete]="properties.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  [p-spacing]="spacing"
  [p-text-wrap]="properties.includes('textWrap')"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-virtual-scroll]="properties.includes('virtualScroll')"
  (p-change)="changeEvent('p-change')"
  (p-error)="changeEvent('p-error')"
  (p-keydown)="changeEvent('p-keydown')"
  (p-selected)="changeEvent('p-selected')"
  [p-error-limit]="properties?.includes('errorLimit')"
>
</po-lookup>

<po-divider />

<po-container p-no-border="true" p-no-padding="true">
  <div class="po-row">
    <po-info class="po-md-12" p-label="Model" [p-value]="lookup"> </po-info>

    <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
  </div>
</po-container>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-checkbox-group
    class="po-md-12 po-lg-6"
    name="columnsName"
    [(ngModel)]="columnsName"
    p-columns="3"
    p-label="Columns"
    [p-options]="columnsOptions"
    (p-change)="updateColumns()"
  >
  </po-checkbox-group>

  <po-select
    class="po-md-6 po-lg-12"
    name="fieldLabel"
    [(ngModel)]="fieldLabel"
    p-label="Field Label"
    p-required
    [p-options]="fieldLabelOptions"
  >
  </po-select>

  <po-select
    class="po-md-6"
    name="fieldValue"
    [(ngModel)]="fieldValue"
    p-label="Field Value"
    p-required
    [p-options]="fieldValueOptions"
  >
  </po-select>

  <po-input
    class="po-md-12 po-lg-6"
    name="filterService"
    [(ngModel)]="filterService"
    p-clean
    p-help="https://po-sample-api.onrender.com/v1/people"
    p-label="Filter Service"
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

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input
    class="po-lg-6"
    name="literals"
    [(ngModel)]="literals"
    p-help='Ex.: { "modalTitle": "Select a register", "modalPrimaryActionLabel": "Select", "modalPlaceholder": "Search Value" }'
    p-label="Literals"
    (p-change)="changeLiterals()"
  >
  </po-input>

  <po-input
    name="formatField"
    [(ngModel)]="formatField"
    class="po-lg-6"
    p-label="Field Format"
    p-help='Ex.: ["id", "name"]'
    (p-change)="onFieldFormatChange($event)"
  >
  </po-input>

  <po-checkbox-group
    class="po-lg-12"
    name="properties"
    [(ngModel)]="properties"
    p-columns="4"
    p-label="Properties"
    [p-options]="propertiesOptions"
  >
  </po-checkbox-group>

  <po-radio-group
    class="po-lg-12"
    name="spacing"
    [(ngModel)]="spacing"
    p-columns="4"
    p-help="Para aplicar o tamanho extraSmall, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    p-label="Spacing"
    [p-options]="typeSpacing"
  >
  </po-radio-group>

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

  <po-textarea
    class="po-md-12 po-lg-12"
    name="advancedFilters"
    [(ngModel)]="advancedFilters"
    (p-change)="changeAdvancedFilters()"
    p-help='Ex.: [{"property":"name","divider":"PERSONAL DATA","required":true,"gridColumns":6},{"property":"id","optional":true,"gridColumns":6}]'
    p-label="Advanced Filters"
    p-rows="4"
  >
  </po-textarea>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-labs/sample-po-lookup-labs.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoLookupColumn,
  PoLookupFilter,
  PoLookupLiterals,
  PoDynamicFormField,
  PoSelectOption,
  PoTableColumnSpacing,
  PoRadioGroupOption
} from '@po-ui/ng-components';

import { SamplePoLookupService } from '../sample-po-lookup.service';

@Component({
  selector: 'sample-po-lookup-labs',
  templateUrl: './sample-po-lookup-labs.component.html',
  providers: [SamplePoLookupService],
  standalone: false
})
export class SamplePoLookupLabsComponent implements OnInit {
  sampleFilterService = inject(SamplePoLookupService);

  helperText: string;
  columns: Array<PoLookupColumn>;
  columnsName: Array<string>;
  customLiterals: PoLookupLiterals;
  event: string;
  fieldFormat: Array<string>;
  formatField: string;
  fieldLabel: string;
  fieldValue: string;
  filterService: PoLookupFilter | string;
  help: string;
  label: string;
  literals: string;
  lookup: any;
  placeholder: string;
  properties: Array<string>;
  fieldErrorMessage: string;
  advancedFilters: string;
  customAdvancedFilters: Array<PoDynamicFormField>;
  size: string;
  spacing: PoTableColumnSpacing = PoTableColumnSpacing.Medium;

  public readonly columnsOptions: Array<PoCheckboxGroupOption> = [
    { value: 'id', label: 'Id' },
    { value: 'name', label: 'Name' },
    { value: 'email', label: 'Email' }
  ];

  public readonly fieldLabelOptions: Array<PoSelectOption> = [
    { value: 'label', label: 'Label' },
    ...this.columnsOptions
  ];

  public readonly fieldValueOptions: Array<PoSelectOption> = [
    { value: 'value', label: 'Value' },
    ...this.columnsOptions
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'infiniteScroll', label: 'Infinite Scroll' },
    { value: 'multiple', label: 'Multiple' },
    { value: 'autoHeight', label: 'Auto Height' },
    { value: 'hideColumnsManager', label: 'Hide Columns Manager' },
    { value: 'textWrap', label: 'Text Wrap' },
    { value: 'virtualScroll', label: 'Virtual Sroll' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' }
  ];

  private readonly columnsDefinition = {
    id: <PoLookupColumn>{ property: 'id', label: 'Id' },
    name: <PoLookupColumn>{ property: 'name', label: 'Name' },
    email: <PoLookupColumn>{ property: 'email', label: 'Email' }
  };

  public readonly typeSpacing: Array<PoRadioGroupOption> = [
    { label: 'ExtraSmall', value: 'extraSmall' },
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit(): void {
    this.restore();
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

  onFieldFormatChange(event) {
    try {
      this.fieldFormat = JSON.parse(event);
    } catch {
      this.fieldFormat = undefined;
    }
  }

  changeAdvancedFilters() {
    try {
      this.customAdvancedFilters = JSON.parse(this.advancedFilters);
    } catch {
      this.customAdvancedFilters = undefined;
    }
  }

  restore() {
    this.helperText = '';
    this.columnsName = ['id', 'name'];
    this.customLiterals = undefined;
    this.updateColumns();

    this.fieldLabel = 'name';
    this.fieldValue = 'id';
    this.fieldFormat = undefined;
    this.formatField = undefined;
    this.event = undefined;
    this.filterService = undefined;
    this.label = undefined;
    this.literals = undefined;
    this.help = undefined;
    this.lookup = undefined;
    this.placeholder = '';
    this.properties = [];
    this.fieldErrorMessage = '';
    this.customAdvancedFilters = [];
    this.size = 'medium';
  }

  updateColumns() {
    this.columns = [];

    this.columnsName.forEach(column => this.columns.push(this.columnsDefinition[column]));
  }
}
`),t(),i(21,"label",6),e(22,"sample-po-lookup.service.ts"),t(),i(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupFilteredItemsParams } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupService implements PoLookupFilter {
  private httpClient = inject(HttpClient);

  private url = 'https://po-sample-api.onrender.com/v1/heroes';

  getFilteredItems(filteredParams: PoLookupFilteredItemsParams): Observable<any> {
    const { filterParams, advancedFilters, ...restFilteredItemsParams } = filteredParams;
    const params = { ...restFilteredItemsParams, ...filterParams, ...advancedFilters };

    return this.httpClient.get(this.url, { params });
  }

  getObjectByValue(value: string): Observable<any> {
    return this.httpClient.get(\`\${this.url}/\${value}\`);
  }
}
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-labs"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,Je,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,Me],encapsulation:2})}return a})();var Ke=()=>({modalTitle:"Heroes available for mission"}),De=(()=>{class a{service=h(D);notification=h(Z);hero;vehicle;columns=[{property:"nickname",label:"Hero"},{property:"name",label:"Name"}];vehicles=[{label:"Airplane",value:"airplane"},{label:"Boat",value:"boat"},{label:"Car",value:"car"},{label:"Helicopter",value:"helicopter"},{label:"Motorcycle",value:"motorcycle"},{label:"Rocket",value:"rocket"},{label:"Spaceship",value:"spaceship"},{label:"Submarine",value:"submarine"},{label:"Truck",value:"truck"}];advancedFilters=[{property:"nickname",divider:"Hero Informations",optional:!0,gridColumns:6,label:"Hero"},{property:"name",optional:!0,gridColumns:6}];fieldFormat(r){return`${r.nickname} - ${r.label}`}startMission(){this.hero.length%2===0?this.notification.success(`Mission started with hero ${this.hero} ${this.vehicle?"with vehicle: "+this.vehicle:""}.`):this.notification.error(`Choose another hero because ${this.hero} is in other mission.`),this.hero=void 0,this.vehicle=void 0}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-hero"]],standalone:!1,features:[_([D])],decls:10,vars:11,consts:[["f","ngForm"],[1,"po-row"],["p-label","New mission found","p-value","Objective: Stop an asteroid collision on Earth",1,"po-lg-6"],["name","hero","p-field-label","label","p-field-value","label","p-help","Select hero for mission","p-label","Hero","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-columns","p-field-format","p-filter-service","p-hide-columns-manager","p-advanced-filters","p-literals"],["name","vehicle","p-help","Select a vehicle for the hero","p-label","Vehicle","p-placeholder","None",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Start Mission",1,"po-md-6",3,"p-click","p-disabled"]],template:function(l,o){if(l&1){let p=$();i(0,"div",1),n(1,"po-info",2),t(),n(2,"po-divider"),i(3,"form",null,0)(5,"div",1)(6,"po-lookup",3),v("ngModelChange",function(m){return c(p),g(o.hero,m)||(o.hero=m),E(m)}),t(),i(7,"po-select",4),v("ngModelChange",function(m){return c(p),g(o.vehicle,m)||(o.vehicle=m),E(m)}),t()(),i(8,"div",1)(9,"po-button",5),x("p-click",function(){return c(p),E(o.startMission())}),t()()()}if(l&2){let p=ce(4);d(6),b("ngModel",o.hero),u("p-columns",o.columns)("p-field-format",o.fieldFormat)("p-filter-service",o.service)("p-hide-columns-manager",!0)("p-advanced-filters",o.advancedFilters)("p-literals",U(10,Ke)),d(),b("ngModel",o.vehicle),u("p-options",o.vehicles),d(2),u("p-disabled",p.form.invalid||p.form.pending)}},dependencies:[z,T,I,A,K,N,O,q,H,B],encapsulation:2})}return a})();var Ye=a=>({"docs-sample-code-tabs":a}),_e=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-hero-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Hero"),t(),i(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-hero/sample-po-lookup-hero.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
  <po-info class="po-lg-6" p-label="New mission found" p-value="Objective: Stop an asteroid collision on Earth">
  </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-lookup
      class="po-md-6"
      name="hero"
      [(ngModel)]="hero"
      p-field-label="label"
      p-field-value="label"
      p-help="Select hero for mission"
      p-label="Hero"
      p-required
      [p-columns]="columns"
      [p-field-format]="fieldFormat"
      [p-filter-service]="service"
      [p-hide-columns-manager]="true"
      [p-advanced-filters]="advancedFilters"
      [p-literals]="{ 'modalTitle': 'Heroes available for mission' }"
    >
    </po-lookup>

    <po-select
      class="po-md-6"
      name="vehicle"
      [(ngModel)]="vehicle"
      p-help="Select a vehicle for the hero"
      p-label="Vehicle"
      p-placeholder="None"
      [p-options]="vehicles"
    >
    </po-select>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-6"
      p-label="Start Mission"
      [p-disabled]="f.form.invalid || f.form.pending"
      (p-click)="startMission()"
    >
    </po-button>
  </div>
</form>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-hero/sample-po-lookup-hero.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, inject } from '@angular/core';

import { PoLookupColumn, PoSelectOption } from '@po-ui/ng-components';

import { PoNotificationService, PoDynamicFormField } from '@po-ui/ng-components';

import { SamplePoLookupService } from '../sample-po-lookup.service';

@Component({
  selector: 'sample-po-lookup-hero',
  templateUrl: './sample-po-lookup-hero.component.html',
  providers: [SamplePoLookupService],
  standalone: false
})
export class SamplePoLookupHeroComponent {
  service = inject(SamplePoLookupService);
  notification = inject(PoNotificationService);

  hero: string;
  vehicle: string;

  public readonly columns: Array<PoLookupColumn> = [
    { property: 'nickname', label: 'Hero' },
    { property: 'name', label: 'Name' }
  ];

  public readonly vehicles: Array<PoSelectOption> = [
    { label: 'Airplane', value: 'airplane' },
    { label: 'Boat', value: 'boat' },
    { label: 'Car', value: 'car' },
    { label: 'Helicopter', value: 'helicopter' },
    { label: 'Motorcycle', value: 'motorcycle' },
    { label: 'Rocket', value: 'rocket' },
    { label: 'Spaceship', value: 'spaceship' },
    { label: 'Submarine', value: 'submarine' },
    { label: 'Truck', value: 'truck' }
  ];

  advancedFilters: Array<PoDynamicFormField> = [
    { property: 'nickname', divider: 'Hero Informations', optional: true, gridColumns: 6, label: 'Hero' },
    { property: 'name', optional: true, gridColumns: 6 }
  ];

  fieldFormat(value) {
    return \`\${value.nickname} - \${value.label}\`;
  }

  startMission() {
    if (this.hero.length % 2 === 0) {
      this.notification.success(
        \`Mission started with hero \${this.hero} \${this.vehicle ? 'with vehicle: ' + this.vehicle : ''}.\`
      );
    } else {
      this.notification.error(\`Choose another hero because \${this.hero} is in other mission.\`);
    }

    this.hero = undefined;
    this.vehicle = undefined;
  }
}
`),t(),i(21,"label",6),e(22,"sample-po-lookup.service.ts"),t(),i(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupFilteredItemsParams } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupService implements PoLookupFilter {
  private httpClient = inject(HttpClient);

  private url = 'https://po-sample-api.onrender.com/v1/heroes';

  getFilteredItems(filteredParams: PoLookupFilteredItemsParams): Observable<any> {
    const { filterParams, advancedFilters, ...restFilteredItemsParams } = filteredParams;
    const params = { ...restFilteredItemsParams, ...filterParams, ...advancedFilters };

    return this.httpClient.get(this.url, { params });
  }

  getObjectByValue(value: string): Observable<any> {
    return this.httpClient.get(\`\${this.url}/\${value}\`);
  }
}
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-hero"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,Ye,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,De],encapsulation:2})}return a})();var et=()=>["nickname","label"],tt=()=>({modalTitle:"Heroes available for mission"}),Ae=(()=>{class a{service=h(D);notification=h(Z);formBuilder=h(ve);formMission;columns=[{property:"nickname",label:"Hero"},{property:"name",label:"Name"}];vehicles=[{label:"Airplane",value:"airplane"},{label:"Boat",value:"boat"},{label:"Car",value:"car"},{label:"Helicopter",value:"helicopter"},{label:"Motorcycle",value:"motorcycle"},{label:"Rocket",value:"rocket"},{label:"Spaceship",value:"spaceship"},{label:"Submarine",value:"submarine"},{label:"Truck",value:"truck"}];ngOnInit(){this.formMission=this.formBuilder.group({hero:[null,ae.required],vehicle:[null,ae.required]})}fieldFormat(r){return`${r.nickname} - ${r.label}`}startMission(){let r=this.formMission.get("hero").value,l=this.formMission.get("vehicle").value;r.length%2===0?this.notification.success(`Mission started with hero ${r} ${l?"with vehicle: "+l:""}.`):this.notification.error(`Choose another hero because ${r} is in other mission.`),this.formMission.reset()}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-hero-reactive-form"]],standalone:!1,features:[_([D])],decls:9,vars:9,consts:[[1,"po-row"],["p-label","New mission found","p-value","Objective: Stop an asteroid collision on Earth",1,"po-lg-6"],[3,"formGroup"],["name","hero","formControlName","hero","p-field-label","label","p-field-value","label","p-help","Select hero for mission","p-label","Hero","p-required","",1,"po-md-6",3,"p-columns","p-field-format","p-filter-service","p-literals"],["name","vehicle","formControlName","vehicle","p-help","Select a vehicle for the hero","p-label","Vehicle","p-placeholder","None",1,"po-md-6",3,"p-options"],["p-label","Start Mission",1,"po-md-6",3,"p-click","p-disabled"]],template:function(l,o){l&1&&(i(0,"div",0),n(1,"po-info",1),t(),n(2,"po-divider"),i(3,"form",2)(4,"div",0),n(5,"po-lookup",3)(6,"po-select",4),t(),i(7,"div",0)(8,"po-button",5),x("p-click",function(){return o.startMission()}),t()()()),l&2&&(d(3),u("formGroup",o.formMission),d(2),u("p-columns",o.columns)("p-field-format",U(7,et))("p-filter-service",o.service)("p-literals",U(8,tt)),d(),u("p-options",o.vehicles),d(2),u("p-disabled",o.formMission.invalid||o.formMission.pending))},dependencies:[z,T,I,be,ge,N,O,q,H,B],encapsulation:2})}return a})();var nt=a=>({"docs-sample-code-tabs":a}),Oe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-hero-reactive-form-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Hero Reactive Form"),t(),i(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
  <po-info class="po-lg-6" p-label="New mission found" p-value="Objective: Stop an asteroid collision on Earth">
  </po-info>
</div>

<po-divider />

<form [formGroup]="formMission">
  <div class="po-row">
    <po-lookup
      class="po-md-6"
      name="hero"
      formControlName="hero"
      p-field-label="label"
      p-field-value="label"
      p-help="Select hero for mission"
      p-label="Hero"
      p-required
      [p-columns]="columns"
      [p-field-format]="['nickname', 'label']"
      [p-filter-service]="service"
      [p-literals]="{ 'modalTitle': 'Heroes available for mission' }"
    >
    </po-lookup>

    <po-select
      class="po-md-6"
      name="vehicle"
      formControlName="vehicle"
      p-help="Select a vehicle for the hero"
      p-label="Vehicle"
      p-placeholder="None"
      [p-options]="vehicles"
    >
    </po-select>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-6"
      p-label="Start Mission"
      [p-disabled]="formMission.invalid || formMission.pending"
      (p-click)="startMission()"
    >
    </po-button>
  </div>
</form>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoLookupColumn, PoSelectOption } from '@po-ui/ng-components';

import { PoNotificationService } from '@po-ui/ng-components';

import { SamplePoLookupService } from '../sample-po-lookup.service';

@Component({
  selector: 'sample-po-lookup-hero-reactive-form',
  templateUrl: './sample-po-lookup-hero-reactive-form.component.html',
  providers: [SamplePoLookupService],
  standalone: false
})
export class SamplePoLookupHeroReactiveFormComponent implements OnInit {
  service = inject(SamplePoLookupService);
  notification = inject(PoNotificationService);
  private formBuilder = inject(UntypedFormBuilder);

  formMission: UntypedFormGroup;

  public readonly columns: Array<PoLookupColumn> = [
    { property: 'nickname', label: 'Hero' },
    { property: 'name', label: 'Name' }
  ];

  public readonly vehicles: Array<PoSelectOption> = [
    { label: 'Airplane', value: 'airplane' },
    { label: 'Boat', value: 'boat' },
    { label: 'Car', value: 'car' },
    { label: 'Helicopter', value: 'helicopter' },
    { label: 'Motorcycle', value: 'motorcycle' },
    { label: 'Rocket', value: 'rocket' },
    { label: 'Spaceship', value: 'spaceship' },
    { label: 'Submarine', value: 'submarine' },
    { label: 'Truck', value: 'truck' }
  ];

  ngOnInit(): void {
    this.formMission = this.formBuilder.group({
      hero: [null, Validators.required],
      vehicle: [null, Validators.required]
    });
  }

  fieldFormat(value) {
    return \`\${value.nickname} - \${value.label}\`;
  }

  startMission() {
    const heroName = this.formMission.get('hero').value;
    const heroVehicle = this.formMission.get('vehicle').value;

    if (heroName.length % 2 === 0) {
      this.notification.success(
        \`Mission started with hero \${heroName} \${heroVehicle ? 'with vehicle: ' + heroVehicle : ''}.\`
      );
    } else {
      this.notification.error(\`Choose another hero because \${heroName} is in other mission.\`);
    }

    this.formMission.reset();
  }
}
`),t(),i(21,"label",6),e(22,"sample-po-lookup.service.ts"),t(),i(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupFilteredItemsParams } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupService implements PoLookupFilter {
  private httpClient = inject(HttpClient);

  private url = 'https://po-sample-api.onrender.com/v1/heroes';

  getFilteredItems(filteredParams: PoLookupFilteredItemsParams): Observable<any> {
    const { filterParams, advancedFilters, ...restFilteredItemsParams } = filteredParams;
    const params = { ...restFilteredItemsParams, ...filterParams, ...advancedFilters };

    return this.httpClient.get(this.url, { params });
  }

  getObjectByValue(value: string): Observable<any> {
    return this.httpClient.get(\`\${this.url}/\${value}\`);
  }
}
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-hero-reactive-form"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,nt,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,Ae],encapsulation:2})}return a})();var re=(()=>{class a{http=h(V);baseUrl="https://swapi.dev/api";filmsUrl="https://swapi.dev/api/films/";getFilms(){return this.http.get(this.filmsUrl)}getFilteredItems({filter:r,page:l,filterParams:o}){let p={page:l.toString()};return r&&(p.search=r),this.http.get(`${this.baseUrl}/${o}`,{params:p}).pipe(ie(s=>({items:s.results,hasNext:!!s.next})))}getObjectByValue(r,l){return this.http.get(`${this.baseUrl}/${l}/?search=${r}`).pipe(ie(o=>o.results[0]))}static \u0275fac=function(l){return new(l||a)};static \u0275prov=j({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function at(a,Et){if(a&1&&(i(0,"div",0),n(1,"po-table",3),t()),a&2){let r=ue();d(),u("p-columns",r.filmColumns)("p-items",r.filmItemsFiltered)("p-sort",!0)("p-hide-table-search",!1)}}var je=(()=>{class a{filterService=h(re);entity;filmItemsFiltered;filterParams="people";characterColumns=[{property:"name",label:"Name"},{property:"gender",label:"Gender"},{property:"height",label:"Height"},{property:"mass",label:"Mass"}];entities=[{label:"Character",value:"people"},{label:"Planet",value:"planets"},{label:"Starship",value:"starships"}];filmColumns=[{property:"episode_id",label:"Episode id"},{property:"title",label:"Title"},{property:"director",label:"Director"},{property:"producer",label:"Producer"},{property:"release_date",label:"Release date",type:"date"}];planetsColumns=[{property:"name",label:"Name"},{property:"diameter",label:"Diameter"},{property:"population",label:"Population"},{property:"climate",label:"Climate"}];starshipsColumns=[{property:"name",label:"Name"},{property:"passengers",label:"Passengers"},{property:"max_atmosphering_speed",label:"Max Speed"},{property:"consumables",label:"Consumables"}];filmItems;get entityColumns(){return this.getEntityColumns(this.filterParams)}get entityLabel(){return this.getLabelOfEntity(this.filterParams)}ngOnInit(){this.filterService.getFilms().subscribe(r=>{this.filmItems=r.results})}onSelected(r){this.filterService.getObjectByValue(r.name,this.filterParams).subscribe(l=>{this.filmItemsFiltered=this.filmItems.filter(o=>l?.films.includes(o.url))},l=>console.error(l))}getEntityColumns(r){switch(r){case"people":return this.characterColumns;case"planets":return this.planetsColumns;case"starships":return this.starshipsColumns}}getLabelOfEntity(r){switch(r){case"people":return"character";case"planets":return"planet";case"starships":return"starship"}}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-sw-films"]],standalone:!1,features:[_([re])],decls:7,vars:14,consts:[[1,"po-row"],["name","filterParams","p-label","Choose the entity of SW to search",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","entity","p-field-label","name","p-field-value","name",1,"po-md-12",3,"ngModelChange","p-selected","ngModel","p-help","p-label","p-columns","p-filter-params","p-filter-service","p-infinite-scroll"],[1,"po-sm-12",3,"p-columns","p-items","p-sort","p-hide-table-search"]],template:function(l,o){l&1&&(i(0,"div",0)(1,"po-radio-group",1),v("ngModelChange",function(s){return g(o.filterParams,s)||(o.filterParams=s),s}),t()(),n(2,"po-divider"),i(3,"div",0)(4,"po-lookup",2),Ee(5,"titlecase"),v("ngModelChange",function(s){return g(o.entity,s)||(o.entity=s),s}),x("p-selected",function(s){return o.onSelected(s)}),t()(),pe(6,at,2,4,"div",0)),l&2&&(d(),b("ngModel",o.filterParams),u("p-options",o.entities),d(3),oe("p-help","Select a ",o.entityLabel," to see the list of movies in which it participated"),oe("p-label","",xe(5,12,o.entityLabel)," of Star Wars"),b("ngModel",o.entity),u("p-columns",o.entityColumns)("p-filter-params",o.filterParams)("p-filter-service",o.filterService)("p-infinite-scroll",!0),d(2),se(o.filmItemsFiltered&&o.entity?6:-1))},dependencies:[T,A,O,Y,q,ee,Se],encapsulation:2})}return a})();var rt=a=>({"docs-sample-code-tabs":a}),Ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-sw-films-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Star Wars films"),t(),i(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
  <po-radio-group
    class="po-md-12"
    name="filterParams"
    [(ngModel)]="filterParams"
    p-label="Choose the entity of SW to search"
    [p-options]="entities"
  >
  </po-radio-group>
</div>

<po-divider />

<div class="po-row">
  <po-lookup
    class="po-md-12"
    name="entity"
    [(ngModel)]="entity"
    p-field-label="name"
    p-field-value="name"
    p-help="Select a { { entityLabel }} to see the list of movies in which it participated"
    p-label="{ { entityLabel | titlecase }} of Star Wars"
    [p-columns]="entityColumns"
    [p-filter-params]="filterParams"
    [p-filter-service]="filterService"
    [p-infinite-scroll]="true"
    (p-selected)="onSelected($event)"
  >
  </po-lookup>
</div>

@if (filmItemsFiltered && entity) {
  <div class="po-row">
    <po-table
      class="po-sm-12"
      [p-columns]="filmColumns"
      [p-items]="filmItemsFiltered"
      [p-sort]="true"
      [p-hide-table-search]="false"
    >
    </po-table>
  </div>
}
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';
import { PoRadioGroupOption } from '@po-ui/ng-components';
import { SamplePoLookupSwFilmsService } from './sample-po-lookup-sw-films.service';

@Component({
  selector: 'sample-po-lookup-sw-films',
  templateUrl: './sample-po-lookup-sw-films.component.html',
  providers: [SamplePoLookupSwFilmsService],
  standalone: false
})
export class SamplePoLookupSwFilmsComponent implements OnInit {
  filterService = inject(SamplePoLookupSwFilmsService);

  entity;
  filmItemsFiltered;
  filterParams = 'people';

  readonly characterColumns = [
    { property: 'name', label: 'Name' },
    { property: 'gender', label: 'Gender' },
    { property: 'height', label: 'Height' },
    { property: 'mass', label: 'Mass' }
  ];

  readonly entities: Array<PoRadioGroupOption> = [
    { label: 'Character', value: 'people' },
    { label: 'Planet', value: 'planets' },
    { label: 'Starship', value: 'starships' }
  ];

  readonly filmColumns = [
    { property: 'episode_id', label: 'Episode id' },
    { property: 'title', label: 'Title' },
    { property: 'director', label: 'Director' },
    { property: 'producer', label: 'Producer' },
    { property: 'release_date', label: 'Release date', type: 'date' }
  ];

  readonly planetsColumns = [
    { property: 'name', label: 'Name' },
    { property: 'diameter', label: 'Diameter' },
    { property: 'population', label: 'Population' },
    { property: 'climate', label: 'Climate' }
  ];

  readonly starshipsColumns = [
    { property: 'name', label: 'Name' },
    { property: 'passengers', label: 'Passengers' },
    { property: 'max_atmosphering_speed', label: 'Max Speed' },
    { property: 'consumables', label: 'Consumables' }
  ];

  private filmItems;

  get entityColumns() {
    return this.getEntityColumns(this.filterParams);
  }

  get entityLabel() {
    return this.getLabelOfEntity(this.filterParams);
  }

  ngOnInit() {
    this.filterService.getFilms().subscribe((films: { results: Array<any> }) => {
      this.filmItems = films.results;
    });
  }

  onSelected(entity) {
    this.filterService.getObjectByValue(entity.name, this.filterParams).subscribe(
      result => {
        this.filmItemsFiltered = this.filmItems.filter(film => result?.films.includes(film.url));
      },
      err => console.error(err)
    );
  }

  private getEntityColumns(entity) {
    switch (entity) {
      case 'people':
        return this.characterColumns;
      case 'planets':
        return this.planetsColumns;
      case 'starships':
        return this.starshipsColumns;
    }
  }

  private getLabelOfEntity(entity): string {
    switch (entity) {
      case 'people':
        return 'character';
      case 'planets':
        return 'planet';
      case 'starships':
        return 'starship';
    }
  }
}
`),t(),i(21,"label",6),e(22,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.service.ts"),t(),i(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupResponseApi, PoLookupFilteredItemsParams } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupSwFilmsService implements PoLookupFilter {
  private http = inject(HttpClient);

  private baseUrl = 'https://swapi.dev/api';
  private filmsUrl = 'https://swapi.dev/api/films/';

  getFilms() {
    return this.http.get(this.filmsUrl);
  }

  getFilteredItems({ filter, page, filterParams }: PoLookupFilteredItemsParams): Observable<PoLookupResponseApi> {
    const params = { page: page.toString() };

    if (filter) {
      params['search'] = filter;
    }

    return this.http.get(\`\${this.baseUrl}/\${filterParams}\`, { params }).pipe(
      map((response: { results: Array<any>; next: string }) => ({
        items: response.results,
        hasNext: !!response.next
      }))
    );
  }

  getObjectByValue(value: string, filterParams: any): Observable<any> {
    return this.http
      .get(\`\${this.baseUrl}/\${filterParams}/?search=\${value}\`)
      .pipe(map((response: { results: Array<any> }) => response.results[0]));
  }
}
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-sw-films"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,rt,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,je],encapsulation:2})}return a})();var Ie=(()=>{class a{http=h(V);getHeroes(r){let l=r?.length?r.toString():r;return this.http.get(`https://po-sample-api.onrender.com/v1/heroes?value=${l}`).pipe(de("items"))}static \u0275fac=function(l){return new(l||a)};static \u0275prov=j({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var ze=(()=>{class a{service=h(Ie);loading=!1;heroes;multiLookup=[1495831666871,1405833068599];columns=[{property:"value",label:"id"},{property:"label",label:"Name"}];changeOptions(r){this.loading=!0,this.service.getHeroes(r).subscribe(l=>{this.heroes=l},l=>console.error(l),()=>this.loading=!1)}openLink(r){window.open(`http://google.com/search?q=${r}`,"_blank")}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-multiple"]],standalone:!1,decls:4,vars:8,consts:[[1,"po-row"],["name","lookup","p-field-label","label","p-field-value","value","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","Search a Hero",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-multiple"],[1,"po-md-6","po-mt-4"],[3,"p-columns","p-items","p-height","p-striped","p-hide-columns-manager","p-loading"]],template:function(l,o){l&1&&(i(0,"div",0)(1,"po-lookup",1),v("ngModelChange",function(s){return g(o.multiLookup,s)||(o.multiLookup=s),s}),x("p-change",function(s){return o.changeOptions(s)}),t(),i(2,"po-container",2),n(3,"po-table",3),t()()),l&2&&(d(),b("ngModel",o.multiLookup),u("p-multiple",!0),d(2),u("p-columns",o.columns)("p-items",o.heroes)("p-height",220)("p-striped",!0)("p-hide-columns-manager",!0)("p-loading",o.loading))},dependencies:[T,A,X,q,ee],encapsulation:2})}return a})();var pt=a=>({"docs-sample-code-tabs":a}),Ne=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-multiple-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Multiple"),t(),i(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-multiple/sample-po-lookup-multiple.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
  <po-lookup
    class="po-md-6"
    name="lookup"
    [(ngModel)]="multiLookup"
    p-field-label="label"
    p-field-value="value"
    p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
    p-label="Search a Hero"
    [p-multiple]="true"
    (p-change)="changeOptions($event)"
  ></po-lookup>
  <po-container class="po-md-6 po-mt-4">
    <po-table
      [p-columns]="columns"
      [p-items]="heroes"
      [p-height]="220"
      [p-striped]="true"
      [p-hide-columns-manager]="true"
      [p-loading]="loading"
    ></po-table>
  </po-container>
</div>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-multiple/sample-po-lookup-multiple.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, inject } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';

import { SamplePoLookupMultipleService } from './sample-po-lookup-multiple.service';

@Component({
  selector: 'sample-po-lookup-multiple',
  templateUrl: './sample-po-lookup-multiple.component.html',
  styles: [],
  standalone: false
})
export class SamplePoLookupMultipleComponent {
  service = inject(SamplePoLookupMultipleService);

  loading: boolean = false;
  heroes: Array<any>;
  multiLookup: Array<any> = [1495831666871, 1405833068599];
  columns: Array<PoTableColumn> = [
    { property: 'value', label: 'id' },
    {
      property: 'label',
      label: 'Name'
    }
  ];

  changeOptions(event): void {
    this.loading = true;
    this.service.getHeroes(event).subscribe(
      result => {
        this.heroes = result;
      },
      err => console.error(err),
      () => (this.loading = false)
    );
  }

  openLink(value) {
    window.open(\`http://google.com/search?q=\${value}\`, '_blank');
  }
}
`),t(),i(21,"label",6),e(22,"sample-po-lookup-multiple/sample-po-lookup-multiple.service.ts"),t(),i(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupMultipleService {
  http = inject(HttpClient);

  getHeroes(data): Observable<any> {
    const values = data?.length ? data.toString() : data;
    return this.http.get(\`https://po-sample-api.onrender.com/v1/heroes?value=\${values}\`).pipe(pluck('items'));
  }
}
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-multiple"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,pt,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,ze],encapsulation:2})}return a})();var He=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-doc"]],standalone:!1,decls:5408,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://angular.io/guide/form-validation#creating-asynchronous-validators"],["href","https://po-ui.io/guides/api"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","Array<PoLookupAdvancedFilter>"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Array<PoLookupColumn>"],["pan","",1,"docs-api-property-type","((value)","=>","string)"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoLookupFilter"],["href","https://tc39.es/ecma262/#sec-encodeuricomponent-uricomponent"],["pan","",1,"docs-api-property-type","PoLookupLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","number"],["href","/documentation/po-lookup"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","(file:","PoUploadFile)","=>","void"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","ForceBooleanComponentEnum"],["pan","",1,"docs-api-property-type","ForceOptionComponentEnum"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["pan","",1,"docs-api-property-type","PoDatepickerRangeLiterals"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption>"],["pan","",1,"docs-api-property-type","Array<PoCheckboxGroupOption>"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"],["href","documentation/po-dynamic-form#po-dynamic-form-field-validation"],["pan","",1,"docs-api-property-type"],["pan","",1,"docs-api-property-type","{","[key:","string]:","any;","}"],["pan","",1,"docs-api-property-type","Array<object>"]],template:function(l,o){l&1&&(i(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),i(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),i(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),i(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),i(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),i(16,"h3",3),e(17,"Componente"),t(),i(18,"h4",4)(19,"code",5),e(20,"PoLookupComponent"),t()(),i(21,"div",2)(22,"p"),e(23,`Componente utilizado para abrir uma janela de busca com uma tabela que lista dados de um servi\xE7o. Nesta janela \xE9 poss\xEDvel buscar e
selecionar um ou mais registros que ser\xE3o enviados para o campo. O `),i(24,"code"),e(25,"po-lookup"),t(),e(26," permite que o usu\xE1rio digite um valor e pressione a tecla "),i(27,"em"),e(28,"TAB"),t(),e(29,` para
buscar um registro.`),t(),i(30,"blockquote")(31,"p"),e(32,`Caso o campo seja iniciado ou preenchido com um valor inexistente na busca, o mesmo ser\xE1 limpado.
No segundo caso ocorrer\xE1 ap\xF3s este perder o foco; ambos os casos o campo ficar\xE1 inv\xE1lido quando requerido.`),t()(),i(33,"blockquote")(34,"p"),e(35,`Enquanto o componente realiza a requisi\xE7\xE3o ao servidor, o componente ficar\xE1 desabilitado e com o status interno do
`),i(36,"a",6),e(37,"modelo"),t(),e(38," como "),i(39,"code"),e(40,"pending"),t(),e(41,"."),t()(),i(42,"p"),e(43,`Este componente n\xE3o \xE9 recomendado quando a busca dos dados possuir poucas informa\xE7\xF5es, para isso utilize outros componentes como o
`),i(44,"code"),e(45,"po-select"),t(),e(46," ou o "),i(47,"code"),e(48,"po-combo"),t(),e(49,`. Quando existe muitos dados o po-lookup por padr\xE3o traz apenas 10 itens na tabela e os demais s\xE3o carregados por demanda atrav\xE9s do
bot\xE3o 'Carregar mais resultados'. Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),i(50,"a",7),e(51,"Guia de implementa\xE7\xE3o das APIs TOTVS"),t(),e(52,"."),t(),i(53,"p"),e(54,"Importante:"),t(),i(55,"ul")(56,"li"),e(57,`Caso o po-lookup contenha o [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o ser\xE1 necess\xE1rio informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".`),i(58,"pre")(59,"code"),e(60,`<po-lookup
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}">
</po-lookup>
`),t()()()(),i(61,"h4"),e(62,"Tokens customiz\xE1veis"),t(),i(63,"p"),e(64,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),i(65,"blockquote")(66,"p"),e(67,"Para maiores informa\xE7\xF5es, acesse o guia "),i(68,"a",8),e(69,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(70,"."),t()(),i(71,"table")(72,"thead")(73,"tr")(74,"th"),e(75,"Propriedade"),t(),i(76,"th"),e(77,"Descri\xE7\xE3o"),t(),i(78,"th"),e(79,"Valor Padr\xE3o"),t()()(),i(80,"tbody")(81,"tr")(82,"td")(83,"strong"),e(84,"Default Values"),t()(),n(85,"td")(86,"td"),t(),i(87,"tr")(88,"td")(89,"code"),e(90,"--font-family"),t()(),i(91,"td"),e(92,"Fam\xEDlia tipogr\xE1fica usada"),t(),i(93,"td")(94,"code"),e(95,"var(--font-family-theme)"),t()()(),i(96,"tr")(97,"td")(98,"code"),e(99,"--font-size"),t()(),i(100,"td"),e(101,"Tamanho da fonte"),t(),i(102,"td")(103,"code"),e(104,"var(--font-size-default)"),t()()(),i(105,"tr")(106,"td")(107,"code"),e(108,"--text-color-placeholder"),t()(),i(109,"td"),e(110,"Cor do texto no placeholder"),t(),i(111,"td")(112,"code"),e(113,"var(--color-neutral-light-30)"),t()()(),i(114,"tr")(115,"td")(116,"code"),e(117,"--color"),t()(),i(118,"td"),e(119,"Cor principal do lookup"),t(),i(120,"td")(121,"code"),e(122,"var(--color-neutral-dark-70)"),t()()(),i(123,"tr")(124,"td")(125,"code"),e(126,"--border-radius"),t()(),i(127,"td"),e(128,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),t(),i(129,"td")(130,"code"),e(131,"var(--border-radius-md)"),t()()(),i(132,"tr")(133,"td")(134,"code"),e(135,"--background"),t()(),i(136,"td"),e(137,"Cor de background"),t(),i(138,"td")(139,"code"),e(140,"var(--color-neutral-light-05)"),t()()(),i(141,"tr")(142,"td")(143,"code"),e(144,"--text-color"),t()(),i(145,"td"),e(146,"Cor do texto"),t(),i(147,"td")(148,"code"),e(149,"var(--color-neutral-dark-90)"),t()()(),i(150,"tr")(151,"td")(152,"code"),e(153,"--color-clear"),t()(),i(154,"td"),e(155,"Cor principal do icone clear"),t(),i(156,"td")(157,"code"),e(158,"var(--color-action-default)"),t()()(),i(159,"tr")(160,"td")(161,"strong"),e(162,"Icon"),t()(),n(163,"td")(164,"td"),t(),i(165,"tr")(166,"td")(167,"code"),e(168,"--color-icon"),t()(),i(169,"td"),e(170,"Cor principal do icone pesquisar"),t(),i(171,"td")(172,"code"),e(173,"var(--color-action-default)"),t()()(),i(174,"tr")(175,"td")(176,"strong"),e(177,"Hover"),t()(),n(178,"td")(179,"td"),t(),i(180,"tr")(181,"td")(182,"code"),e(183,"--color-hover"),t()(),i(184,"td"),e(185,"Cor principal no estado hover"),t(),i(186,"td")(187,"code"),e(188,"var(--color-action-hover)"),t()()(),i(189,"tr")(190,"td")(191,"code"),e(192,"--background-hover"),t()(),i(193,"td"),e(194,"Cor de background no estado hover"),t(),i(195,"td")(196,"code"),e(197,"var(--color-brand-01-lightest)"),t()()(),i(198,"tr")(199,"td")(200,"strong"),e(201,"Focused"),t()(),n(202,"td")(203,"td"),t(),i(204,"tr")(205,"td")(206,"code"),e(207,"--color-focused"),t()(),i(208,"td"),e(209,"Cor principal no estado de focus"),t(),i(210,"td")(211,"code"),e(212,"var(--color-action-default)"),t()()(),i(213,"tr")(214,"td")(215,"code"),e(216,"--outline-color-focused"),t()(),i(217,"td"),e(218,"Cor do outline do estado de focus"),t(),i(219,"td")(220,"code"),e(221,"var(--color-action-focus)"),t()()(),i(222,"tr")(223,"td")(224,"strong"),e(225,"Disabled"),t()(),n(226,"td")(227,"td"),t(),i(228,"tr")(229,"td")(230,"code"),e(231,"--color-disabled"),t()(),i(232,"td"),e(233,"Cor principal no estado disabled"),t(),i(234,"td")(235,"code"),e(236,"var(--color-action-disabled)"),t()()(),i(237,"tr")(238,"td")(239,"code"),e(240,"--background-disabled"),t()(),i(241,"td"),e(242,"Cor de background no estado disabled"),t(),i(243,"td")(244,"code"),e(245,"var(--color-neutral-light-20)"),t()()(),i(246,"tr")(247,"td")(248,"code"),e(249,"--text-color-disabled"),t()(),i(250,"td"),e(251,"Cor do texto quando campo est\xE1 desabilitado"),t(),i(252,"td")(253,"code"),e(254,"var(--color-action-disabled)"),t()()(),i(255,"tr")(256,"td")(257,"strong"),e(258,"Error"),t()(),n(259,"td")(260,"td"),t(),i(261,"tr")(262,"td")(263,"code"),e(264,"--color-error"),t()(),i(265,"td"),e(266,"Cor de background no estado de requerido"),t(),i(267,"td")(268,"code"),e(269,"var(--color-feedback-negative-base)"),t()()()()()(),i(270,"div",9)(271,"h4",10),e(272,"Seletor"),t(),i(273,"pre",11),e(274,`<po-lookup
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-advanced-filters="Array<PoLookupAdvancedFilter>"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-auto-height="boolean"
    (p-change)="EventEmitter"
    (p-change-visible-columns)="EventEmitter"
    p-clean="boolean"
    (p-restore-column-manager)="EventEmitter"
    p-columns="Array<PoLookupColumn>"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-field-format="((value) => string) | Array<string>"
    p-field-label="string"
    p-field-value="string"
    p-filter-params="any"
    p-filter-service="string | PoLookupFilter"
    p-help="string"
    p-hide-columns-manager="boolean"
    p-infinite-scroll="boolean"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-literals="PoLookupLiterals"
    p-multiple="boolean"
    name="string"
    p-no-autocomplete="boolean"
    (p-error)="EventEmitter"
    p-optional="boolean"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-required="boolean"
    (p-selected)="EventEmitter"
    p-show-required="boolean"
    p-size="string"
    p-spacing="string"
    p-text-wrap="boolean"
    p-virtual-scroll="boolean" >
</po-lookup>
`),t()(),i(275,"h4",12),e(276,"Propriedades"),t(),i(277,"table",13)(278,"tr",14)(279,"th",15),e(280,"Nome"),t(),i(281,"th",15),e(282,"Tipo"),t(),i(283,"th",15),e(284,"Padr\xE3o"),t(),i(285,"th",15),e(286,"Descri\xE7\xE3o"),t()(),i(287,"tr",16)(288,"td",17)(289,"div",18)(290,"span",19),e(291," (p-additional-help)"),n(292,"br"),t()(),i(293,"div",20),e(294,"Deprecated"),t()(),i(295,"td",21)(296,"code",22),e(297,"EventEmitter"),t()(),i(298,"td",23),e(299,"-"),t(),i(300,"td",24)(301,"em")(302,"strong"),e(303,"(opcional)"),t()(),i(304,"p"),e(305,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),t(),i(306,"blockquote")(307,"p"),e(308,"Essa propriedade est\xE1 "),i(309,"strong"),e(310,"depreciada"),t(),e(311," e ser\xE1 removida na vers\xE3o "),i(312,"code"),e(313,"23.x.x"),t(),e(314,". Recomendamos utilizar a propriedade "),i(315,"code"),e(316,"p-helper"),t(),e(317," que oferece mais recursos e flexibilidade."),t()()()(),i(318,"tr",16)(319,"td",17)(320,"div",25)(321,"span",26),e(322," p-additional-help-tooltip"),n(323,"br"),t()(),i(324,"div",20),e(325,"Deprecated"),t()(),i(326,"td",21)(327,"code",27),e(328,"string"),t()(),i(329,"td",23),e(330,"-"),t(),i(331,"td",24)(332,"em")(333,"strong"),e(334,"(opcional)"),t()(),i(335,"p"),e(336,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),i(337,"code"),e(338,"po-helper"),t(),e(339,`.
`),i(340,"strong"),e(341,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),i(342,"blockquote")(343,"p"),e(344,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),i(345,"blockquote")(346,"p"),e(347,"Essa propriedade est\xE1 "),i(348,"strong"),e(349,"depreciada"),t(),e(350," e ser\xE1 removida na vers\xE3o "),i(351,"code"),e(352,"23.x.x"),t(),e(353,". Recomendamos utilizar a propriedade "),i(354,"code"),e(355,"p-helper"),t(),e(356," que oferece mais recursos e flexibilidade."),t()()()(),i(357,"tr",16)(358,"td",17)(359,"div",25)(360,"span",26),e(361," p-advanced-filters"),n(362,"br"),t()()(),i(363,"td",21)(364,"code",28),e(365,"Array<PoLookupAdvancedFilter>"),t()(),i(366,"td",23),e(367,"-"),t(),i(368,"td",24)(369,"em")(370,"strong"),e(371,"(opcional)"),t()(),i(372,"p"),e(373,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),t(),i(374,"blockquote")(375,"p"),e(376,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),t()(),i(377,"p"),e(378,"Exemplo de URL com busca avan\xE7ada:"),t(),i(379,"pre")(380,"code"),e(381,`url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro
`),t()(),i(382,"p"),e(383,`Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula.
Exemplo:`),t(),i(384,"pre")(385,"code"),e(386,`url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan
`),t()()()(),i(387,"tr",16)(388,"td",17)(389,"div",25)(390,"span",26),e(391," p-append-in-body"),n(392,"br"),t()()(),i(393,"td",21)(394,"code",29),e(395,"boolean"),t()(),i(396,"td",23)(397,"p")(398,"code"),e(399,"false"),t()()(),i(400,"td",24)(401,"em")(402,"strong"),e(403,"(opcional)"),t()(),i(404,"p"),e(405,"Define que o popover ("),i(406,"code"),e(407,"p-helper"),t(),e(408," e/ou "),i(409,"code"),e(410,"p-error-limit"),t(),e(411,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),i(412,"blockquote")(413,"p"),e(414,"Quando utilizado com "),i(415,"code"),e(416,"p-helper"),t(),e(417,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),t()()()(),i(418,"tr",16)(419,"td",17)(420,"div",25)(421,"span",26),e(422," p-auto-focus"),n(423,"br"),t()()(),i(424,"td",21)(425,"code",29),e(426,"boolean"),t()(),i(427,"td",23)(428,"p")(429,"code"),e(430,"false"),t()()(),i(431,"td",24)(432,"em")(433,"strong"),e(434,"(opcional)"),t()(),i(435,"p"),e(436,"Aplica foco no elemento ao ser iniciado."),t(),i(437,"blockquote")(438,"p"),e(439,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),i(440,"tr",16)(441,"td",17)(442,"div",25)(443,"span",26),e(444," p-auto-height"),n(445,"br"),t()()(),i(446,"td",21)(447,"code",29),e(448,"boolean"),t()(),i(449,"td",23)(450,"p")(451,"code"),e(452,"false"),t()()(),i(453,"td",24)(454,"em")(455,"strong"),e(456,"(opcional)"),t()(),i(457,"p"),e(458,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo
com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis.`),t()()(),i(459,"tr",16)(460,"td",17)(461,"div",18)(462,"span",19),e(463," (p-change)"),n(464,"br"),t()()(),i(465,"td",21)(466,"code",22),e(467,"EventEmitter"),t()(),i(468,"td",23),e(469,"-"),t(),i(470,"td",24)(471,"em")(472,"strong"),e(473,"(opcional)"),t()(),i(474,"p"),e(475,"Evento que ser\xE1 disparado ao alterar o model. Por par\xE2metro ser\xE1 passado o novo valor."),t()()(),i(476,"tr",16)(477,"td",17)(478,"div",18)(479,"span",19),e(480," (p-change-visible-columns)"),n(481,"br"),t()()(),i(482,"td",21)(483,"code",22),e(484,"EventEmitter"),t()(),i(485,"td",23),e(486,"-"),t(),i(487,"td",24)(488,"em")(489,"strong"),e(490,"(opcional)"),t()(),i(491,"p"),e(492,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),t(),i(493,"p"),e(494,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t()()(),i(495,"tr",16)(496,"td",17)(497,"div",25)(498,"span",26),e(499," p-clean"),n(500,"br"),t()()(),i(501,"td",21)(502,"code",29),e(503,"boolean"),t()(),i(504,"td",23),e(505,"-"),t(),i(506,"td",24)(507,"p"),e(508,"Exibe um \xEDcone que permite limpar o campo."),t()()(),i(509,"tr",16)(510,"td",17)(511,"div",18)(512,"span",19),e(513," (p-restore-column-manager)"),n(514,"br"),t()()(),i(515,"td",21)(516,"code",22),e(517,"EventEmitter"),t()(),i(518,"td",23),e(519,"-"),t(),i(520,"td",24)(521,"em")(522,"strong"),e(523,"(opcional)"),t()(),i(524,"p"),e(525,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),t(),i(526,"p"),e(527,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t()()(),i(528,"tr",16)(529,"td",17)(530,"div",25)(531,"span",26),e(532," p-columns"),n(533,"br"),t()()(),i(534,"td",21)(535,"code",30),e(536,"Array<PoLookupColumn>"),t()(),i(537,"td",23),e(538,"-"),t(),i(539,"td",24)(540,"em")(541,"strong"),e(542,"(opcional)"),t()(),i(543,"p"),e(544,`Lista das colunas da tabela.
Essa propriedade deve receber um array de objetos que implementam a interface PoLookupColumn.`),t()()(),i(545,"tr",16)(546,"td",17)(547,"div",25)(548,"span",26),e(549," p-disabled"),n(550,"br"),t()()(),i(551,"td",21)(552,"code",29),e(553,"boolean"),t()(),i(554,"td",23)(555,"p"),e(556,"false"),t()(),i(557,"td",24)(558,"em")(559,"strong"),e(560,"(opcional)"),t()(),i(561,"p"),e(562,"Indica que o campo ser\xE1 desabilitado."),t()()(),i(563,"tr",16)(564,"td",17)(565,"div",25)(566,"span",26),e(567," p-error-limit"),n(568,"br"),t()()(),i(569,"td",21)(570,"code",29),e(571,"boolean"),t()(),i(572,"td",23)(573,"p")(574,"code"),e(575,"false"),t()()(),i(576,"td",24)(577,"em")(578,"strong"),e(579,"(opcional)"),t()(),i(580,"p"),e(581,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),i(582,"blockquote")(583,"p"),e(584,"Caso essa propriedade seja definida como "),i(585,"code"),e(586,"true"),t(),e(587,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),i(588,"tr",16)(589,"td",17)(590,"div",25)(591,"span",26),e(592," p-field-error-message"),n(593,"br"),t()()(),i(594,"td",21)(595,"code",27),e(596,"string"),t()(),i(597,"td",23),e(598,"-"),t(),i(599,"td",24)(600,"em")(601,"strong"),e(602,"(opcional)"),t()(),i(603,"p"),e(604,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),t(),i(605,"blockquote")(606,"p"),e(607,"Necess\xE1rio que a propriedade "),i(608,"code"),e(609,"p-required"),t(),e(610," esteja habilitada."),t()()()(),i(611,"tr",16)(612,"td",17)(613,"div",25)(614,"span",26),e(615," p-field-format"),n(616,"br"),t()()(),i(617,"td",21)(618,"code",31),e(619,"((value) => string) "),t(),i(620,"code",32),e(621," Array<string>"),t()(),i(622,"td",23),e(623,"-"),t(),i(624,"td",24)(625,"em")(626,"strong"),e(627,"(opcional)"),t()(),i(628,"p"),e(629,"Formato de exibi\xE7\xE3o do campo."),t(),i(630,"p"),e(631,"Recebe uma fun\xE7\xE3o que deve retornar uma "),i(632,"em"),e(633,"string"),t(),e(634," com o/os valores do objeto formatados para exibi\xE7\xE3o, por exemplo:"),t(),i(635,"pre")(636,"code"),e(637,"fieldFormat(obj) {\n  return `${obj.id} - ${obj.name}`;\n}\n"),t()(),i(638,"blockquote")(639,"p"),e(640,"Esta propriedade sobrep\xF5e o valor da propriedade "),i(641,"code"),e(642,"p-field-label"),t(),e(643," na descri\xE7\xE3o do campo."),t()(),i(644,"p"),e(645,"Pode-se informar uma lista de propriedades que deseja exibir como descri\xE7\xE3o do campo, Por exemplo:"),t(),i(646,"pre")(647,"code"),e(648,`<po-lookup
 ...
 [p-field-format]="['id','nickname']"
 ...
>

Objeto retornado:
  {
     id:123,
     name: 'Kakaroto',
     nickname: 'Goku',
  }
Apresenta\xE7\xE3o no campo: 123 - Goku
`),t()(),i(649,"blockquote")(650,"p"),e(651,"Ser\xE1 utilizado "),i(652,"code"),e(653,"-"),t(),e(654," como separador."),t()()()(),i(655,"tr",16)(656,"td",17)(657,"div",25)(658,"span",26),e(659," p-field-label"),n(660,"br"),t()()(),i(661,"td",21)(662,"code",27),e(663,"string"),t()(),i(664,"td",23),e(665,"-"),t(),i(666,"td",24)(667,"p"),e(668,"Indica a coluna que ser\xE1 utilizada como descri\xE7\xE3o do campo e como filtro dentro da janela."),t()()(),i(669,"tr",16)(670,"td",17)(671,"div",25)(672,"span",26),e(673," p-field-value"),n(674,"br"),t()()(),i(675,"td",21)(676,"code",27),e(677,"string"),t()(),i(678,"td",23),e(679,"-"),t(),i(680,"td",24)(681,"p"),e(682,"Indica a coluna que ser\xE1 utilizada como valor do campo."),t(),i(683,"blockquote")(684,"p"),e(685,"Aten\xE7\xE3o: Caso n\xE3o seja passada ou tenha o conte\xFAdo incorreto, n\xE3o ir\xE1 atualizar o model do formul\xE1rio."),t()()()(),i(686,"tr",16)(687,"td",17)(688,"div",25)(689,"span",26),e(690," p-filter-params"),n(691,"br"),t()()(),i(692,"td",21)(693,"code",33),e(694,"any"),t()(),i(695,"td",23),e(696,"-"),t(),i(697,"td",24)(698,"em")(699,"strong"),e(700,"(opcional)"),t()(),i(701,"p"),e(702,"Valor que ser\xE1 repassado como par\xE2metro para a URL ou aos m\xE9todos do servi\xE7o que implementam a interface "),i(703,"code"),e(704,"PoLookupFilter"),t(),e(705,"."),t()()(),i(706,"tr",16)(707,"td",17)(708,"div",25)(709,"span",26),e(710," p-filter-service"),n(711,"br"),t()()(),i(712,"td",21)(713,"code",27),e(714,"string "),t(),i(715,"code",34),e(716," PoLookupFilter"),t()(),i(717,"td",23),e(718,"-"),t(),i(719,"td",24)(720,"p"),e(721,`Servi\xE7o respons\xE1vel por buscar os dados da tabela na janela. Pode ser informado um servi\xE7o que implemente a interface
`),i(722,"code"),e(723,"PoLookupFilter"),t(),e(724," ou uma URL."),t(),i(725,"p"),e(726,"Quando utilizada uma URL de um servi\xE7o, ser\xE1 concatenada nesta URL o valor que deseja-se filtrar, por exemplo:"),t(),i(727,"pre")(728,"code"),e(729,`url + ?page=1&pageSize=20&filter=Peter
`),t()(),i(730,"p"),e(731,"Caso utilizar ordena\xE7\xE3o, a coluna ordenada ser\xE1 enviada atrav\xE9s do par\xE2metro "),i(732,"code"),e(733,"order"),t(),e(734,", por exemplo:"),t(),i(735,"ul")(736,"li")(737,"p"),e(738,"Coluna decrescente:"),t(),i(739,"pre")(740,"code"),e(741,`url + ?page=1&pageSize=20&filter=Peter&order=-name
`),t()()(),i(742,"li")(743,"p"),e(744,"Coluna ascendente:"),t(),i(745,"pre")(746,"code"),e(747,`url + ?page=1&pageSize=20&filter=Peter&order=name
`),t()()()(),i(748,"p"),e(749,"Se for definido a propriedade "),i(750,"code"),e(751,"p-filter-params"),t(),e(752,`, o mesmo tamb\xE9m ser\xE1 concatenado. Por exemplo, para o
par\xE2metro `),i(753,"code"),e(754,"{ age: 23 }"),t(),e(755," a URL ficaria:"),t(),i(756,"pre")(757,"code"),e(758,`url + ?page=1&pageSize=20&age=23&filter=Peter
`),t()(),i(759,"p"),e(760,"Ao iniciar o campo com valor, os registros ser\xE3o buscados da seguinte forma:"),t(),i(761,"pre")(762,"code"),e(763,`model = 1234;

GET url/1234
`),t()(),i(764,"p"),e(765,"Caso estiver com m\xFAltipla sele\xE7\xE3o habilitada:"),t(),i(766,"pre")(767,"code"),e(768,`model = [1234, 5678]

GET url?\${fieldValue}=1234,5678
`),t()(),i(769,"blockquote")(770,"p"),e(771,"Esta URL deve retornar e receber os dados no padr\xE3o de "),i(772,"a",7),e(773,"API do PO UI"),t(),e(774,` e utiliza os valores
definidos nas propriedades `),i(775,"code"),e(776,"p-field-label"),t(),e(777," e "),i(778,"code"),e(779,"p-field-value"),t(),e(780," para a constru\xE7\xE3o do "),i(781,"code"),e(782,"po-lookup"),t(),e(783,"."),t()(),i(784,"p"),e(785,"Caso o usu\xE1rio digite um valor e pressione a tecla "),i(786,"em"),e(787,"TAB"),t(),e(788,` para realizar a busca de um registro espec\xEDfico, o valor que se
deseja filtrar ser\xE1 codificado utilizando a fun\xE7\xE3o `),i(789,"a",35),e(790,"encodeURIComponent"),t(),e(791,`
e concatenado na URL da seguinte forma:`),t(),i(792,"pre")(793,"code"),e(794,`url/valor%20que%20se%20deseja%20filtrar
`),t()(),i(795,"blockquote")(796,"p"),e(797,"Quando informado um servi\xE7o que implemente a interface "),i(798,"code"),e(799,"PoLookupFilter"),t(),e(800," o tratamento de encoding do valor a ser filtrado ficar\xE1 a cargo do desenvolvedor."),t()()()(),i(801,"tr",16)(802,"td",17)(803,"div",25)(804,"span",26),e(805," p-help"),n(806,"br"),t()()(),i(807,"td",21)(808,"code",27),e(809,"string"),t()(),i(810,"td",23),e(811,"-"),t(),i(812,"td",24)(813,"em")(814,"strong"),e(815,"(opcional)"),t()(),i(816,"p"),e(817,"Texto de apoio do campo."),t()()(),i(818,"tr",16)(819,"td",17)(820,"div",25)(821,"span",26),e(822," p-hide-columns-manager"),n(823,"br"),t()()(),i(824,"td",21)(825,"code",29),e(826,"boolean"),t()(),i(827,"td",23)(828,"p")(829,"code"),e(830,"false"),t()()(),i(831,"td",24)(832,"em")(833,"strong"),e(834,"(opcional)"),t()(),i(835,"p"),e(836,"Permite que o gerenciador de colunas, respons\xE1vel pela defini\xE7\xE3o de quais colunas ser\xE3o exibidas, seja escondido."),t()()(),i(837,"tr",16)(838,"td",17)(839,"div",25)(840,"span",26),e(841," p-infinite-scroll"),n(842,"br"),t()()(),i(843,"td",21)(844,"code",29),e(845,"boolean"),t()(),i(846,"td",23)(847,"p")(848,"code"),e(849,"false"),t()()(),i(850,"td",24)(851,"em")(852,"strong"),e(853,"(opcional)"),t()(),i(854,"p"),e(855,"Ativa a funcionalidade de scroll infinito para a tabela exibida no retorno da consulta."),t()()(),i(856,"tr",16)(857,"td",17)(858,"div",18)(859,"span",19),e(860," (p-keydown)"),n(861,"br"),t()()(),i(862,"td",21)(863,"code",22),e(864,"EventEmitter"),t()(),i(865,"td",23),e(866,"-"),t(),i(867,"td",24)(868,"em")(869,"strong"),e(870,"(opcional)"),t()(),i(871,"p"),e(872,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),i(873,"code"),e(874,"KeyboardEvent"),t(),e(875," com informa\xE7\xF5es sobre a tecla."),t()()(),i(876,"tr",16)(877,"td",17)(878,"div",25)(879,"span",26),e(880," p-label"),n(881,"br"),t()()(),i(882,"td",21)(883,"code",27),e(884,"string"),t()(),i(885,"td",23),e(886,"-"),t(),i(887,"td",24)(888,"em")(889,"strong"),e(890,"(opcional)"),t()(),i(891,"p"),e(892,"Label do campo."),t(),i(893,"blockquote")(894,"p"),e(895,`Quando utilizar esta propriedade o seu valor ser\xE1 utilizado como t\xEDtulo da modal do componente caso n\xE3o tenha
sido definido um `),i(896,"code"),e(897,"modalTitle"),t(),e(898," na propriedade "),i(899,"code"),e(900,"p-literals"),t(),e(901,"."),t()()()(),i(902,"tr",16)(903,"td",17)(904,"div",25)(905,"span",26),e(906," p-label-text-wrap"),n(907,"br"),t()()(),i(908,"td",21)(909,"code",29),e(910,"boolean"),t()(),i(911,"td",23)(912,"p")(913,"code"),e(914,"false"),t()()(),i(915,"td",24)(916,"em")(917,"strong"),e(918,"(opcional)"),t()(),i(919,"p"),e(920,"Habilita a quebra autom\xE1tica do texto da propriedade "),i(921,"code"),e(922,"p-label"),t(),e(923,". Quando "),i(924,"code"),e(925,"p-label-text-wrap"),t(),e(926,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),i(927,"tr",16)(928,"td",17)(929,"div",25)(930,"span",26),e(931," p-literals"),n(932,"br"),t()()(),i(933,"td",21)(934,"code",36),e(935,"PoLookupLiterals"),t()(),i(936,"td",23),e(937,"-"),t(),i(938,"td",24)(939,"p"),e(940,"Objeto com as literais usadas no "),i(941,"code"),e(942,"po-lookup"),t(),e(943,"."),t(),i(944,"p"),e(945,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),t(),i(946,"pre")(947,"code"),e(948,`const customLiterals: PoLookupLiterals = {
  modalPrimaryActionLabel: 'Select',
  modalSecondaryActionLabel: 'Cancel',
  modalPlaceholder: 'Search Value',
  modalTableNoColumns: 'No columns',
  modalTableNoData: 'No data',
  modalTableLoadingData: 'Loading data',
  modalTableLoadMoreData: 'Load more',
  modalTitle: 'Select a user',
  modalAdvancedSearch: 'Advanced search',
  modalAdvancedSearchTitle: 'Advanced search',
  modalAdvancedSearchPrimaryActionLabel: 'Filter',
  modalAdvancedSearchSecondaryActionLabel: 'Return',
  modalDisclaimerGroupTitle: 'Presenting results filtered by:'
};
`),t()(),i(949,"p"),e(950,"Ou passando apenas as literais que deseja customizar:"),t(),i(951,"pre")(952,"code"),e(953,`const customLiterals: PoLookupLiterals = {
  modalPrimaryActionLabel: 'Select'
};
`),t()(),i(954,"p"),e(955,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),t(),i(956,"pre")(957,"code"),e(958,`<po-lookup
  [p-literals]="customLiterals">
</po-lookup>
`),t()(),i(959,"blockquote")(960,"p"),e(961,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),i(962,"a",37)(963,"code"),e(964,"PoI18nService"),t()(),e(965," ou do browser."),t()()()(),i(966,"tr",16)(967,"td",17)(968,"div",25)(969,"span",26),e(970," p-multiple"),n(971,"br"),t()()(),i(972,"td",21)(973,"code",29),e(974,"boolean"),t()(),i(975,"td",23)(976,"p")(977,"code"),e(978,"false"),t()()(),i(979,"td",24)(980,"em")(981,"strong"),e(982,"(opcional)"),t()(),i(983,"p"),e(984,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),i(985,"blockquote")(986,"p"),e(987,"Quando habilitado o valor do campo passar\xE1 a ser uma lista de valores, por exemplo: "),i(988,"code"),e(989,"[ 12345, 67890 ]"),t()()()()(),i(990,"tr",16)(991,"td",17)(992,"div",25)(993,"span",26),e(994," name"),n(995,"br"),t()()(),i(996,"td",21)(997,"code",27),e(998,"string"),t()(),i(999,"td",23),e(1e3,"-"),t(),i(1001,"td",24)(1002,"p"),e(1003,"Nome e Id do componente."),t()()(),i(1004,"tr",16)(1005,"td",17)(1006,"div",25)(1007,"span",26),e(1008," p-no-autocomplete"),n(1009,"br"),t()()(),i(1010,"td",21)(1011,"code",29),e(1012,"boolean"),t()(),i(1013,"td",23)(1014,"p")(1015,"code"),e(1016,"false"),t()()(),i(1017,"td",24)(1018,"em")(1019,"strong"),e(1020,"(opcional)"),t()(),i(1021,"p"),e(1022,"Define a propriedade nativa "),i(1023,"code"),e(1024,"autocomplete"),t(),e(1025," do campo como "),i(1026,"code"),e(1027,"off"),t(),e(1028,"."),t()()(),i(1029,"tr",16)(1030,"td",17)(1031,"div",18)(1032,"span",19),e(1033," (p-error)"),n(1034,"br"),t()()(),i(1035,"td",21)(1036,"code",22),e(1037,"EventEmitter"),t()(),i(1038,"td",23),e(1039,"-"),t(),i(1040,"td",24)(1041,"p"),e(1042,`Evento ser\xE1 disparado quando ocorrer algum erro na requisi\xE7\xE3o de busca do item.
Ser\xE1 passado por par\xE2metro o objeto de erro retornado.`),t()()(),i(1043,"tr",16)(1044,"td",17)(1045,"div",25)(1046,"span",26),e(1047," p-optional"),n(1048,"br"),t()()(),i(1049,"td",21)(1050,"code",29),e(1051,"boolean"),t()(),i(1052,"td",23)(1053,"p")(1054,"code"),e(1055,"false"),t()()(),i(1056,"td",24)(1057,"em")(1058,"strong"),e(1059,"(opcional)"),t()(),i(1060,"p"),e(1061,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),i(1062,"blockquote")(1063,"p"),e(1064,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),i(1065,"ul")(1066,"li"),e(1067,"O campo conter "),i(1068,"code"),e(1069,"p-required"),t(),e(1070,";"),t(),i(1071,"li"),e(1072,"N\xE3o possuir "),i(1073,"code"),e(1074,"p-help"),t(),e(1075," e/ou "),i(1076,"code"),e(1077,"p-label"),t(),e(1078,"."),t()()()(),i(1079,"tr",16)(1080,"td",17)(1081,"div",25)(1082,"span",26),e(1083," p-placeholder"),n(1084,"br"),t()()(),i(1085,"td",21)(1086,"code",27),e(1087,"string"),t()(),i(1088,"td",23),e(1089,"-"),t(),i(1090,"td",24)(1091,"p"),e(1092,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),i(1093,"tr",16)(1094,"td",17)(1095,"div",25)(1096,"span",26),e(1097," p-helper"),n(1098,"br"),t()()(),i(1099,"td",21)(1100,"code",38),e(1101,"PoHelperOptions "),t(),i(1102,"code",27),e(1103," string"),t()(),i(1104,"td",23),e(1105,"-"),t(),i(1106,"td",24)(1107,"em")(1108,"strong"),e(1109,"(opcional)"),t()(),i(1110,"p"),e(1111,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),i(1112,"code"),e(1113,"p-label"),t(),e(1114," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),i(1115,"code"),e(1116,"p-label"),t(),e(1117,"."),t(),i(1118,"blockquote")(1119,"p"),e(1120,"Para mais informa\xE7\xF5es acesse: "),i(1121,"a",39),e(1122,"https://po-ui.io/documentation/po-helper"),t(),e(1123,"."),t()(),i(1124,"blockquote")(1125,"p"),e(1126,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),i(1127,"code"),e(1128,"p-additional-help-tooltip"),t(),e(1129," e "),i(1130,"code"),e(1131,"p-additional-help"),t(),e(1132,") ser\xE1 ignorado."),t()()()(),i(1133,"tr",16)(1134,"td",17)(1135,"div",25)(1136,"span",26),e(1137," p-required"),n(1138,"br"),t()()(),i(1139,"td",21)(1140,"code",29),e(1141,"boolean"),t()(),i(1142,"td",23)(1143,"p")(1144,"code"),e(1145,"false"),t()()(),i(1146,"td",24)(1147,"em")(1148,"strong"),e(1149,"(opcional)"),t()(),i(1150,"p"),e(1151,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),i(1152,"blockquote")(1153,"p"),e(1154,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),i(1155,"code"),e(1156,"(p-disabled)"),t(),e(1157,"."),t()()()(),i(1158,"tr",16)(1159,"td",17)(1160,"div",18)(1161,"span",19),e(1162," (p-selected)"),n(1163,"br"),t()()(),i(1164,"td",21)(1165,"code",22),e(1166,"EventEmitter"),t()(),i(1167,"td",23),e(1168,"-"),t(),i(1169,"td",24)(1170,"em")(1171,"strong"),e(1172,"(opcional)"),t()(),i(1173,"p"),e(1174,`Evento ser\xE1 disparado quando ocorrer alguma sele\xE7\xE3o.
Ser\xE1 passado por par\xE2metro o objeto com o valor selecionado.`),t()()(),i(1175,"tr",16)(1176,"td",17)(1177,"div",25)(1178,"span",26),e(1179," p-show-required"),n(1180,"br"),t()()(),i(1181,"td",21)(1182,"code",29),e(1183,"boolean"),t()(),i(1184,"td",23),e(1185,"-"),t(),i(1186,"td",24)(1187,"p"),e(1188,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE9 exibida."),t(),i(1189,"blockquote")(1190,"p"),e(1191,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),i(1192,"ul")(1193,"li"),e(1194,"N\xE3o possuir "),i(1195,"code"),e(1196,"p-help"),t(),e(1197," e/ou "),i(1198,"code"),e(1199,"p-label"),t(),e(1200,"."),t()()()(),i(1201,"tr",16)(1202,"td",17)(1203,"div",25)(1204,"span",26),e(1205," p-size"),n(1206,"br"),t()()(),i(1207,"td",21)(1208,"code",27),e(1209,"string"),t()(),i(1210,"td",23)(1211,"p")(1212,"code"),e(1213,"medium"),t()()(),i(1214,"td",24)(1215,"em")(1216,"strong"),e(1217,"(opcional)"),t()(),i(1218,"p"),e(1219,"Define o tamanho do componente:"),t(),i(1220,"ul")(1221,"li")(1222,"code"),e(1223,"small"),t(),e(1224,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(1225,"li")(1226,"code"),e(1227,"medium"),t(),e(1228,": altura do input como 44px."),t()(),i(1229,"blockquote")(1230,"p"),e(1231,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(1232,"code"),e(1233,"medium"),t(),e(1234,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(1235,"a",40),e(1236,"po-theme"),t(),e(1237,"."),t()()()(),i(1238,"tr",16)(1239,"td",17)(1240,"div",25)(1241,"span",26),e(1242," p-spacing"),n(1243,"br"),t()()(),i(1244,"td",21)(1245,"code",27),e(1246,"string"),t()(),i(1247,"td",23)(1248,"p")(1249,"code"),e(1250,"medium"),t()()(),i(1251,"td",24)(1252,"em")(1253,"strong"),e(1254,"(opcional)"),t()(),i(1255,"p"),e(1256,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do table dentro do modal. Os
valores permitidos s\xE3o definidos pelo enum `),i(1257,"strong"),e(1258,"PoTableColumnSpacing"),t(),e(1259,"."),t(),i(1260,"blockquote")(1261,"p"),e(1262,"Em n\xEDvel de acessibilidade "),i(1263,"strong"),e(1264,"AA"),t(),e(1265,", caso o valor de "),i(1266,"code"),e(1267,"p-spacing"),t(),e(1268," n\xE3o seja definido, o valor padr\xE3o ser\xE1 "),i(1269,"code"),e(1270,"extraSmall"),t(),e(1271,`
nos seguintes cen\xE1rios:`),t(),i(1272,"ul")(1273,"li"),e(1274,"Quando o valor de "),i(1275,"code"),e(1276,"p-size"),t(),e(1277," for "),i(1278,"code"),e(1279,"small"),t(),e(1280,";"),t(),i(1281,"li"),e(1282,"Quando o valor padr\xE3o dos componentes for configurado como "),i(1283,"code"),e(1284,"small"),t(),e(1285,` no
`),i(1286,"a",40),e(1287,"servi\xE7o de tema"),t(),e(1288,"."),t()()()()(),i(1289,"tr",16)(1290,"td",17)(1291,"div",25)(1292,"span",26),e(1293," p-text-wrap"),n(1294,"br"),t()()(),i(1295,"td",21)(1296,"code",29),e(1297,"boolean"),t()(),i(1298,"td",23)(1299,"p")(1300,"code"),e(1301,"false"),t()()(),i(1302,"td",24)(1303,"em")(1304,"strong"),e(1305,"(opcional)"),t()(),i(1306,"p"),e(1307,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t(),i(1308,"p"),e(1309,"Esta propriedade aplica-se ao texto contido nas c\xE9lulas da tabela."),t(),i(1310,"blockquote")(1311,"p"),e(1312,"Incompat\xEDvel com "),i(1313,"code"),e(1314,"virtual-scroll"),t(),e(1315,", que requer altura fixa nas linhas."),t()()()(),i(1316,"tr",16)(1317,"td",17)(1318,"div",25)(1319,"span",26),e(1320," p-virtual-scroll"),n(1321,"br"),t()()(),i(1322,"td",21)(1323,"code",29),e(1324,"boolean"),t()(),i(1325,"td",23)(1326,"p")(1327,"code"),e(1328,"true"),t()()(),i(1329,"td",24)(1330,"em")(1331,"strong"),e(1332,"(opcional)"),t()(),i(1333,"p"),e(1334,"Habilita o "),i(1335,"code"),e(1336,"virtual-scroll"),t(),e(1337,` na tabela para melhorar a performance com grandes volumes de dados.
A altura da tabela j\xE1 \xE9 pr\xE9-definida, portanto o `),i(1338,"code"),e(1339,"virtual-scroll"),t(),e(1340," ser\xE1 ativado automaticamente."),t(),i(1341,"blockquote")(1342,"p"),e(1343,"Incompat\xEDvel com "),i(1344,"code"),e(1345,"p-text-wrap"),t(),e(1346," e "),i(1347,"code"),e(1348,"master-detail"),t(),e(1349,", pois o "),i(1350,"code"),e(1351,"virtual-scroll"),t(),e(1352," exige altura fixa nas linhas."),t()()()()(),i(1353,"h3",12),e(1354,"M\xE9todos"),t(),i(1355,"table",41)(1356,"tr",16)(1357,"th",42)(1358,"div",25)(1359,"h4")(1360,"span",26),e(1361," focus "),t()()()()(),i(1362,"tr",24)(1363,"td",24)(1364,"p"),e(1365,"Fun\xE7\xE3o que atribui foco ao componente."),t(),i(1366,"p"),e(1367,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),i(1368,"pre")(1369,"code"),e(1370,`import { PoLookupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoLookupComponent, { static: true }) lookup: PoLookupComponent;

focusLookup() {
  this.lookup.focus();
}
`),t()()()()(),n(1371,"br"),i(1372,"table",41)(1373,"tr",16)(1374,"th",42)(1375,"div",25)(1376,"h4")(1377,"span",26),e(1378," showAdditionalHelp "),t()()()()(),i(1379,"tr",24)(1380,"td",24)(1381,"p"),e(1382,"M\xE9todo que exibe "),i(1383,"code"),e(1384,"p-helper"),t(),e(1385," ou executa a a\xE7\xE3o definida em "),i(1386,"code"),e(1387,"p-helper{eventOnClick}"),t(),e(1388," ou em "),i(1389,"code"),e(1390,"p-additionalHelp"),t(),e(1391,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),i(1392,"code"),e(1393,"p-keydown"),t(),e(1394,"."),t(),i(1395,"blockquote")(1396,"p"),e(1397,"Exibe ou oculta o conte\xFAdo do componente "),i(1398,"code"),e(1399,"po-helper"),t(),e(1400," quando o componente estiver com foco."),t()(),i(1401,"pre")(1402,"code"),e(1403,`// Exemplo com p-label e p-helper
<po-lookup
 #lookup
 ...
 p-label="Label do lookup"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, lookup)"
></po-lookup>
`),t()(),i(1404,"pre")(1405,"code"),e(1406,`...
onKeyDown(event: KeyboardEvent, inp: PoLookupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),n(1407,"br"),i(1408,"h3"),e(1409,"Interfaces"),t(),i(1410,"h4",43)(1411,"code",5),e(1412,"PoLookupAdvancedFilter"),t()(),i(1413,"div",2)(1414,"p"),e(1415," Interface para defini\xE7\xE3o das propriedades dos campos de entrada que ser\xE3o criados dinamicamente. "),t()(),i(1416,"h4",12),e(1417,"Propriedades"),t(),i(1418,"table",13)(1419,"tr",14)(1420,"th",15),e(1421,"Nome"),t(),i(1422,"th",15),e(1423,"Tipo"),t(),i(1424,"th",15),e(1425,"Descri\xE7\xE3o"),t()(),i(1426,"tr",16)(1427,"td",17)(1428,"div",25)(1429,"span",26),e(1430," additionalHelp"),n(1431,"br"),t()()(),i(1432,"td",21)(1433,"code",44),e(1434,"Function"),t()(),i(1435,"td",24)(1436,"em")(1437,"strong"),e(1438,"(opcional)"),t()(),i(1439,"p"),e(1440,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),t(),i(1441,"blockquote")(1442,"p"),e(1443,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),t()()()(),i(1444,"tr",16)(1445,"td",17)(1446,"div",25)(1447,"span",26),e(1448," additionalHelpTooltip"),n(1449,"br"),t()()(),i(1450,"td",21)(1451,"code",27),e(1452,"string"),t()(),i(1453,"td",24)(1454,"em")(1455,"strong"),e(1456,"(opcional)"),t()(),i(1457,"p"),e(1458,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),i(1459,"code"),e(1460,"po-helper"),t(),e(1461,`.
`),i(1462,"strong"),e(1463,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),i(1464,"blockquote")(1465,"p"),e(1466,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),t()()()(),i(1467,"tr",16)(1468,"td",17)(1469,"div",25)(1470,"span",26),e(1471," advancedFilters"),n(1472,"br"),t()()(),i(1473,"td",21)(1474,"code",28),e(1475,"Array<PoLookupAdvancedFilter>"),t()(),i(1476,"td",24)(1477,"em")(1478,"strong"),e(1479,"(opcional)"),t()(),i(1480,"p"),e(1481,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),t(),i(1482,"blockquote")(1483,"p"),e(1484,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),t()(),i(1485,"p"),e(1486,"Exemplo de URL com busca avan\xE7ada:"),t(),i(1487,"p")(1488,"code"),e(1489,"url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro"),t()(),i(1490,"p"),e(1491,"Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula. Exemplo:"),t(),i(1492,"p")(1493,"code"),e(1494,"url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan"),t()()()(),i(1495,"tr",16)(1496,"td",17)(1497,"div",25)(1498,"span",26),e(1499," appendBox"),n(1500,"br"),t()()(),i(1501,"td",21)(1502,"code",29),e(1503,"boolean"),t()(),i(1504,"td",24)(1505,"em")(1506,"strong"),e(1507,"(opcional)"),t()(),i(1508,"p"),e(1509,"Define que o "),i(1510,"code"),e(1511,"listbox"),t(),e(1512," e/ou popover ("),i(1513,"code"),e(1514,"p-helper"),t(),e(1515," e/ou "),i(1516,"code"),e(1517,"p-error-limit"),t(),e(1518,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),t(),i(1519,"blockquote")(1520,"p"),e(1521,"Quando utilizado com "),i(1522,"code"),e(1523,"p-helper"),t(),e(1524,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),t()()()(),i(1525,"tr",16)(1526,"td",17)(1527,"div",25)(1528,"span",26),e(1529," autoHeight"),n(1530,"br"),t()()(),i(1531,"td",21)(1532,"code",29),e(1533,"boolean"),t()(),i(1534,"td",24)(1535,"em")(1536,"strong"),e(1537,"(opcional)"),t()(),i(1538,"p"),e(1539,"Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis."),t(),i(1540,"p")(1541,"strong"),e(1542,"Componentes compat\xEDveis:"),t(),i(1543,"code"),e(1544,"po-multiselect"),t(),e(1545,", "),i(1546,"code"),e(1547,"po-lookup"),t(),e(1548,"."),t()()(),i(1549,"tr",16)(1550,"td",17)(1551,"div",25)(1552,"span",26),e(1553," autoUpload"),n(1554,"br"),t()()(),i(1555,"td",21)(1556,"code",29),e(1557,"boolean"),t()(),i(1558,"td",24)(1559,"em")(1560,"strong"),e(1561,"(opcional)"),t()(),i(1562,"p"),e(1563,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),t(),i(1564,"p")(1565,"strong"),e(1566,"Componente compat\xEDvel"),t(),e(1567,": "),i(1568,"code"),e(1569,"po-upload"),t()()()(),i(1570,"tr",16)(1571,"td",17)(1572,"div",25)(1573,"span",26),e(1574," booleanFalse"),n(1575,"br"),t()()(),i(1576,"td",21)(1577,"code",27),e(1578,"string"),t()(),i(1579,"td",24)(1580,"em")(1581,"strong"),e(1582,"(opcional)"),t()(),i(1583,"p"),e(1584,"Texto exibido quando o valor do componente for "),i(1585,"em"),e(1586,"false"),t(),e(1587,"."),t()()(),i(1588,"tr",16)(1589,"td",17)(1590,"div",25)(1591,"span",26),e(1592," booleanTrue"),n(1593,"br"),t()()(),i(1594,"td",21)(1595,"code",27),e(1596,"string"),t()(),i(1597,"td",24)(1598,"em")(1599,"strong"),e(1600,"(opcional)"),t()(),i(1601,"p"),e(1602,"Texto exibido quando o valor do componente for "),i(1603,"em"),e(1604,"true"),t(),e(1605,"."),t()()(),i(1606,"tr",16)(1607,"td",17)(1608,"div",25)(1609,"span",26),e(1610," changeOnEnter"),n(1611,"br"),t()()(),i(1612,"td",21)(1613,"code",29),e(1614,"boolean"),t()(),i(1615,"td",24)(1616,"em")(1617,"strong"),e(1618,"(opcional)"),t()(),i(1619,"p"),e(1620,"Indica que o evento "),i(1621,"code"),e(1622,"p-change"),t(),e(1623,' s\xF3 ser\xE1 disparado ao clicar ou pressionar a tecla "Enter" sobre uma op\xE7\xE3o selecionada no '),i(1624,"code"),e(1625,"po-combo"),t(),e(1626,"."),t()()(),i(1627,"tr",16)(1628,"td",17)(1629,"div",25)(1630,"span",26),e(1631," changeVisibleColumns"),n(1632,"br"),t()()(),i(1633,"td",21)(1634,"code",44),e(1635,"Function"),t()(),i(1636,"td",24)(1637,"em")(1638,"strong"),e(1639,"(opcional)"),t()(),i(1640,"p"),e(1641,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),t(),i(1642,"p"),e(1643,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t(),i(1644,"p")(1645,"strong"),e(1646,"Componentes compat\xEDveis"),t(),e(1647,": "),i(1648,"code"),e(1649,"po-lookup"),t()()()(),i(1650,"tr",16)(1651,"td",17)(1652,"div",25)(1653,"span",26),e(1654," clean"),n(1655,"br"),t()()(),i(1656,"td",21)(1657,"code",29),e(1658,"boolean"),t()(),i(1659,"td",24)(1660,"em")(1661,"strong"),e(1662,"(opcional)"),t()(),i(1663,"p"),e(1664,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t(),i(1665,"p")(1666,"strong"),e(1667,"Componentes compat\xEDveis:"),t(),i(1668,"code"),e(1669,"po-datepicker"),t(),e(1670,", "),i(1671,"code"),e(1672,"po-datepicker-range"),t(),e(1673,", "),i(1674,"code"),e(1675,"po-input"),t(),e(1676,", "),i(1677,"code"),e(1678,"po-number"),t(),e(1679,", "),i(1680,"code"),e(1681,"po-decimal"),t(),e(1682,", "),i(1683,"code"),e(1684,"po-combo"),t(),e(1685,", "),i(1686,"code"),e(1687,"po-lookup"),t(),e(1688,", "),i(1689,"code"),e(1690,"po-password"),t()()()(),i(1691,"tr",16)(1692,"td",17)(1693,"div",25)(1694,"span",26),e(1695," columnRestoreManager"),n(1696,"br"),t()()(),i(1697,"td",21)(1698,"code",44),e(1699,"Function"),t()(),i(1700,"td",24)(1701,"em")(1702,"strong"),e(1703,"(opcional)"),t()(),i(1704,"p"),e(1705,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),t(),i(1706,"p"),e(1707,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t(),i(1708,"p")(1709,"strong"),e(1710,"Componentes compat\xEDveis"),t(),e(1711,": "),i(1712,"code"),e(1713,"po-lookup"),t()()()(),i(1714,"tr",16)(1715,"td",17)(1716,"div",25)(1717,"span",26),e(1718," columns"),n(1719,"br"),t()()(),i(1720,"td",21)(1721,"code",30),e(1722,"Array<PoLookupColumn> "),t(),i(1723,"code",45),e(1724," number"),t()(),i(1725,"td",24)(1726,"em")(1727,"strong"),e(1728,"(opcional)"),t()(),i(1729,"p"),e(1730,"Define as colunas para utiliza\xE7\xE3o da busca avan\xE7ada. Usada somente em conjunto com a propriedade "),i(1731,"code"),e(1732,"searchService"),t(),e(1733,`,
essa propriedade deve receber um array de objetos que implementam a interface `),i(1734,"a",46)(1735,"code"),e(1736,"PoLookupColumn"),t()(),e(1737,"."),t(),i(1738,"blockquote")(1739,"p"),e(1740,"Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como "),i(1741,"em"),e(1742,"label"),t(),e(1743," e "),i(1744,"em"),e(1745,"value"),t(),e(1746,` para valores
de tela e do model respectivamente.`),t()(),i(1747,"p")(1748,"strong"),e(1749,"Componentes compat\xEDveis:"),t(),i(1750,"code"),e(1751,"po-radio-group"),t(),e(1752,", "),i(1753,"code"),e(1754,"po-lookup"),t(),e(1755,", "),i(1756,"code"),e(1757,"po-checkbox-group"),t(),e(1758,"."),t()()(),i(1759,"tr",16)(1760,"td",17)(1761,"div",25)(1762,"span",26),e(1763," container"),n(1764,"br"),t()()(),i(1765,"td",21)(1766,"code",27),e(1767,"string"),t()(),i(1768,"td",24)(1769,"em")(1770,"strong"),e(1771,"(opcional)"),t()(),i(1772,"p"),e(1773,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),t(),i(1774,"p"),e(1775,"Est\xE1 propriedade \xE9 do tipo string, o valor que ser\xE1 titulo do contianer"),t()()(),i(1776,"tr",16)(1777,"td",17)(1778,"div",25)(1779,"span",26),e(1780," customAction"),n(1781,"br"),t()()(),i(1782,"td",21)(1783,"code",47),e(1784,"PoProgressAction"),t()(),i(1785,"td",24)(1786,"em")(1787,"strong"),e(1788,"(opcional)"),t()(),i(1789,"p"),e(1790,"Define uma a\xE7\xE3o personalizada no componente "),i(1791,"code"),e(1792,"po-upload"),t(),e(1793,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),t(),i(1794,"p")(1795,"strong"),e(1796,"Componente compat\xEDvel"),t(),e(1797,": "),i(1798,"code"),e(1799,"po-upload"),t(),e(1800,","),t(),i(1801,"p")(1802,"strong"),e(1803,"Exemplo de configura\xE7\xE3o"),t(),e(1804,":"),t(),i(1805,"pre")(1806,"code",48),e(1807,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),t()()()(),i(1808,"tr",16)(1809,"td",17)(1810,"div",25)(1811,"span",26),e(1812," customActionClick"),n(1813,"br"),t()()(),i(1814,"td",21)(1815,"code",49),e(1816,"(file: PoUploadFile) => void"),t()(),i(1817,"td",24)(1818,"em")(1819,"strong"),e(1820,"(opcional)"),t()(),i(1821,"p"),e(1822,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),i(1823,"code"),e(1824,"p-custom-action"),t(),e(1825,"."),t(),i(1826,"p")(1827,"strong"),e(1828,"Componente compat\xEDvel"),t(),e(1829,": "),i(1830,"code"),e(1831,"po-upload"),t(),e(1832,","),t(),i(1833,"p"),e(1834,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),t(),i(1835,"p")(1836,"strong"),e(1837,"Par\xE2metro do evento"),t(),e(1838,":"),t(),i(1839,"ul")(1840,"li")(1841,"code"),e(1842,"file"),t(),e(1843,": O arquivo associado ao bot\xE3o de a\xE7\xE3o. Este objeto \xE9 da classe "),i(1844,"code"),e(1845,"PoUploadFile"),t(),e(1846," e cont\xE9m informa\xE7\xF5es sobre o arquivo, como nome, status e progresso."),t()(),i(1847,"p")(1848,"strong"),e(1849,"Exemplo de uso"),t(),e(1850,":"),t(),i(1851,"pre")(1852,"code",48),e(1853,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),t()()()(),i(1854,"tr",16)(1855,"td",17)(1856,"div",25)(1857,"span",26),e(1858," debounceTime"),n(1859,"br"),t()()(),i(1860,"td",21)(1861,"code",45),e(1862,"number"),t()(),i(1863,"td",24)(1864,"em")(1865,"strong"),e(1866,"(opcional)"),t()(),i(1867,"p"),e(1868,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla. Ser\xE1 utilizada apenas quando houver servi\xE7o ("),i(1869,"code"),e(1870,"p-filter-service"),t(),e(1871,")."),t(),i(1872,"p")(1873,"strong"),e(1874,"Componentes compat\xEDveis:"),t(),i(1875,"code"),e(1876,"po-combo"),t(),e(1877,", "),i(1878,"code"),e(1879,"po-multiselect"),t(),e(1880,"."),t()()(),i(1881,"tr",16)(1882,"td",17)(1883,"div",25)(1884,"span",26),e(1885," decimalsLength"),n(1886,"br"),t()()(),i(1887,"td",21)(1888,"code",45),e(1889,"number"),t()(),i(1890,"td",24)(1891,"em")(1892,"strong"),e(1893,"(opcional)"),t()(),i(1894,"p"),e(1895,"Quantidade m\xE1xima de casas decimais."),t(),i(1896,"blockquote")(1897,"p"),e(1898,"Esta propriedade s\xF3 pode ser utilizada quando o "),i(1899,"code"),e(1900,"type"),t(),e(1901," for "),i(1902,"em"),e(1903,"currency"),t(),e(1904," ou "),i(1905,"em"),e(1906,"decimal"),t(),e(1907,"."),t()()()(),i(1908,"tr",16)(1909,"td",17)(1910,"div",25)(1911,"span",26),e(1912," directory"),n(1913,"br"),t()()(),i(1914,"td",21)(1915,"code",29),e(1916,"boolean"),t()(),i(1917,"td",24)(1918,"em")(1919,"strong"),e(1920,"(opcional)"),t()(),i(1921,"p"),e(1922,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),t(),i(1923,"blockquote")(1924,"p"),e(1925,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),t()(),i(1926,"blockquote")(1927,"p"),e(1928,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),i(1929,"strong"),e(1930,"Internet Explorer"),t(),e(1931,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),t()(),i(1932,"p")(1933,"strong"),e(1934,"Componente compat\xEDvel"),t(),e(1935,": "),i(1936,"code"),e(1937,"po-upload"),t()()()(),i(1938,"tr",16)(1939,"td",17)(1940,"div",25)(1941,"span",26),e(1942," disabled"),n(1943,"br"),t()()(),i(1944,"td",21)(1945,"code",29),e(1946,"boolean"),t()(),i(1947,"td",24)(1948,"em")(1949,"strong"),e(1950,"(opcional)"),t()(),i(1951,"p"),e(1952,"Desabilita o campo caso informar o valor "),i(1953,"em"),e(1954,"true"),t(),e(1955,"."),t()()(),i(1956,"tr",16)(1957,"td",17)(1958,"div",25)(1959,"span",26),e(1960," disabledInitFilter"),n(1961,"br"),t()()(),i(1962,"td",21)(1963,"code",29),e(1964,"boolean"),t()(),i(1965,"td",24)(1966,"em")(1967,"strong"),e(1968,"(opcional)"),t()(),i(1969,"p"),e(1970,"Desabilita o filtro inicial no servi\xE7o do "),i(1971,"code"),e(1972,"po-combo"),t(),e(1973,", que \xE9 executado no primeiro clique no campo."),t()()(),i(1974,"tr",16)(1975,"td",17)(1976,"div",25)(1977,"span",26),e(1978," disabledTabFilter"),n(1979,"br"),t()()(),i(1980,"td",21)(1981,"code",29),e(1982,"boolean"),t()(),i(1983,"td",24)(1984,"em")(1985,"strong"),e(1986,"(opcional)"),t()(),i(1987,"p"),e(1988,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB no "),i(1989,"code"),e(1990,"po-combo"),t(),e(1991,"."),t()()(),i(1992,"tr",16)(1993,"td",17)(1994,"div",25)(1995,"span",26),e(1996," divider"),n(1997,"br"),t()()(),i(1998,"td",21)(1999,"code",27),e(2e3,"string"),t()(),i(2001,"td",24)(2002,"em")(2003,"strong"),e(2004,"(opcional)"),t()(),i(2005,"p"),e(2006,"Exibir\xE1 um divisor acima, utilizando o seu conteudo como t\xEDtulo."),t()()(),i(2007,"tr",16)(2008,"td",17)(2009,"div",25)(2010,"span",26),e(2011," dragDrop"),n(2012,"br"),t()()(),i(2013,"td",21)(2014,"code",29),e(2015,"boolean"),t()(),i(2016,"td",24)(2017,"em")(2018,"strong"),e(2019,"(opcional)"),t()(),i(2020,"p"),e(2021,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),t(),i(2022,"blockquote")(2023,"p"),e(2024,"Recomendamos utilizar apenas um "),i(2025,"code"),e(2026,"po-upload"),t(),e(2027," com esta funcionalidade por tela."),t()(),i(2028,"p")(2029,"strong"),e(2030,"Componente compat\xEDvel"),t(),e(2031,": "),i(2032,"code"),e(2033,"po-upload"),t()()()(),i(2034,"tr",16)(2035,"td",17)(2036,"div",25)(2037,"span",26),e(2038," dragDropHeight"),n(2039,"br"),t()()(),i(2040,"td",21)(2041,"code",45),e(2042,"number"),t()(),i(2043,"td",24)(2044,"em")(2045,"strong"),e(2046,"(opcional)"),t()(),i(2047,"p"),e(2048,"Define em "),i(2049,"em"),e(2050,"pixels"),t(),e(2051," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),i(2052,"code"),e(2053,"160px"),t(),e(2054,"."),t(),i(2055,"blockquote")(2056,"p"),e(2057,"Esta propriedade funciona somente se a propriedade "),i(2058,"code"),e(2059,"p-drag-drop"),t(),e(2060," estiver habilitada."),t()(),i(2061,"p")(2062,"strong"),e(2063,"Componente compat\xEDvel"),t(),e(2064,": "),i(2065,"code"),e(2066,"po-upload"),t()()()(),i(2067,"tr",16)(2068,"td",17)(2069,"div",25)(2070,"span",26),e(2071," errorAsyncFunction"),n(2072,"br"),t()()(),i(2073,"td",21)(2074,"code",50),e(2075,"(value) => Observable<boolean>"),t()(),i(2076,"td",24)(2077,"em")(2078,"strong"),e(2079,"(opcional)"),t()(),i(2080,"p"),e(2081,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),i(2082,"code"),e(2083,"change"),t(),e(2084," ou "),i(2085,"code"),e(2086,"change-model"),t(),e(2087,", dependendo do valor da propriedade "),i(2088,"code"),e(2089,"triggerMode"),t(),e(2090,"."),t(),i(2091,"blockquote")(2092,"p"),e(2093,"Retorna "),i(2094,"code"),e(2095,"Observable com o valor true"),t(),e(2096," para sinalizar o erro "),i(2097,"code"),e(2098,"false"),t(),e(2099," para indicar que n\xE3o h\xE1 erro."),t()(),i(2100,"p")(2101,"strong"),e(2102,"Componente compat\xEDvel"),t(),e(2103,": "),i(2104,"code"),e(2105,"po-datepicker"),t()()()(),i(2106,"tr",16)(2107,"td",17)(2108,"div",25)(2109,"span",26),e(2110," errorAsyncProperties"),n(2111,"br"),t()()(),i(2112,"td",21)(2113,"code",51),e(2114,"ErrorAsyncProperties"),t()(),i(2115,"td",24)(2116,"em")(2117,"strong"),e(2118,"(opcional)"),t()(),i(2119,"p"),e(2120,"Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente."),t(),i(2121,"p")(2122,"strong"),e(2123,"Componentes compat\xEDveis:"),t(),i(2124,"code"),e(2125,"po-input"),t(),e(2126,", "),i(2127,"code"),e(2128,"po-number"),t(),e(2129,", "),i(2130,"code"),e(2131,"po-decimal"),t(),e(2132,", "),i(2133,"code"),e(2134,"po-password"),t(),e(2135,"."),t()()(),i(2136,"tr",16)(2137,"td",17)(2138,"div",25)(2139,"span",26),e(2140," errorLimit"),n(2141,"br"),t()()(),i(2142,"td",21)(2143,"code",29),e(2144,"boolean"),t()(),i(2145,"td",24)(2146,"em")(2147,"strong"),e(2148,"(opcional)"),t()(),i(2149,"p"),e(2150,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),i(2151,"blockquote")(2152,"p"),e(2153,"Caso essa propriedade seja definida como "),i(2154,"code"),e(2155,"true"),t(),e(2156,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()(),i(2157,"p")(2158,"strong"),e(2159,"Componentes compat\xEDveis:"),t(),i(2160,"code"),e(2161,"po-checkbox-group"),t(),e(2162,", "),i(2163,"code"),e(2164,"po-combo"),t(),e(2165,", "),i(2166,"code"),e(2167,"po-datepicker"),t(),e(2168,", "),i(2169,"code"),e(2170,"po-datepicker-range"),t(),e(2171,", "),i(2172,"code"),e(2173,"po-decimal"),t(),e(2174,", "),i(2175,"code"),e(2176,"po-input"),t(),e(2177,", "),i(2178,"code"),e(2179,"po-lookup"),t(),e(2180,", "),i(2181,"code"),e(2182,"po-multiselect"),t(),e(2183,", "),i(2184,"code"),e(2185,"po-number"),t(),e(2186,", "),i(2187,"code"),e(2188,"po-password"),t(),e(2189,", "),i(2190,"code"),e(2191,"po-radio-group"),t(),e(2192,", "),i(2193,"code"),e(2194,"po-select"),t(),e(2195,", "),i(2196,"code"),e(2197,"po-switch"),t(),e(2198,", "),i(2199,"code"),e(2200,"po-textarea"),t(),e(2201,"."),t()()(),i(2202,"tr",16)(2203,"td",17)(2204,"div",25)(2205,"span",26),e(2206," errorMessage"),n(2207,"br"),t()()(),i(2208,"td",21)(2209,"code",27),e(2210,"string"),t()(),i(2211,"td",24)(2212,"em")(2213,"strong"),e(2214,"(opcional)"),t()(),i(2215,"p"),e(2216,"Mensagem que ser\xE1 apresentada quando o campo ficar inv\xE1lido."),t(),i(2217,"p"),e(2218,"O campo fica inv\xE1lido quando as seguintes propriedades n\xE3o forem respeitadas:"),t(),i(2219,"ul")(2220,"li"),e(2221,"pattern;"),t(),i(2222,"li"),e(2223,"minValue;"),t(),i(2224,"li"),e(2225,"maxValue;"),t(),i(2226,"li"),e(2227,"required;"),t()(),i(2228,"blockquote")(2229,"p"),e(2230,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),i(2231,"code"),e(2232,"po-datepicker"),t(),e(2233,", "),i(2234,"code"),e(2235,"po-input"),t(),e(2236,", "),i(2237,"code"),e(2238,"po-number"),t(),e(2239,", "),i(2240,"code"),e(2241,"po-decimal"),t(),e(2242,", "),i(2243,"code"),e(2244,"po-password"),t(),e(2245,`, \xE9 necess\xE1rio que a propriedade
`),i(2246,"code"),e(2247,"requiredFieldErrorMessage"),t(),e(2248," esteja como "),i(2249,"code"),e(2250,"true"),t(),e(2251,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),i(2252,"code"),e(2253,"po-datepicker-range"),t(),e(2254,", "),i(2255,"code"),e(2256,"po-select"),t(),e(2257,", "),i(2258,"code"),e(2259,"po-checkbox-group"),t(),e(2260,", "),i(2261,"code"),e(2262,"po-radio-group"),t(),e(2263,", "),i(2264,"code"),e(2265,"po-multiselect"),t(),e(2266,", "),i(2267,"code"),e(2268,"po-combo"),t(),e(2269,`,
`),i(2270,"code"),e(2271,"po-lookup"),t(),e(2272," e "),i(2273,"code"),e(2274,"po-textarea"),t(),e(2275," n\xE3o \xE9 necess\xE1rio passar a propriedade "),i(2276,"code"),e(2277,"requiredFieldErrorMessage"),t(),e(2278,"."),t()(),i(2279,"p")(2280,"strong"),e(2281,"Componentes compat\xEDveis:"),t(),i(2282,"code"),e(2283,"po-checkbox-group"),t(),e(2284,", "),i(2285,"code"),e(2286,"po-combo"),t(),e(2287,", "),i(2288,"code"),e(2289,"po-datepicker"),t(),e(2290,", "),i(2291,"code"),e(2292,"po-datepicker-range"),t(),e(2293,", "),i(2294,"code"),e(2295,"po-decimal"),t(),e(2296,", "),i(2297,"code"),e(2298,"po-input"),t(),e(2299,", "),i(2300,"code"),e(2301,"po-lookup"),t(),e(2302,", "),i(2303,"code"),e(2304,"po-multiselect"),t(),e(2305,", "),i(2306,"code"),e(2307,"po-number"),t(),e(2308,", "),i(2309,"code"),e(2310,"po-password"),t(),e(2311,", "),i(2312,"code"),e(2313,"po-radio-group"),t(),e(2314,", "),i(2315,"code"),e(2316,"po-select"),t(),e(2317,", "),i(2318,"code"),e(2319,"po-switch"),t(),e(2320,", "),i(2321,"code"),e(2322,"po-textarea"),t(),e(2323,"."),t()()(),i(2324,"tr",16)(2325,"td",17)(2326,"div",25)(2327,"span",26),e(2328," fieldLabel"),n(2329,"br"),t()()(),i(2330,"td",21)(2331,"code",27),e(2332,"string"),t()(),i(2333,"td",24)(2334,"em")(2335,"strong"),e(2336,"(opcional)"),t()(),i(2337,"p"),e(2338,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como descri\xE7\xE3o do campo."),t(),i(2339,"p"),e(2340,"O valor padr\xE3o \xE9: "),i(2341,"code"),e(2342,"label"),t(),e(2343,"."),t(),i(2344,"blockquote")(2345,"p"),e(2346,"Esta propriedade pode ser utilizada em conjunto com: "),i(2347,"code"),e(2348,"options"),t(),e(2349,", "),i(2350,"code"),e(2351,"optionsService"),t(),e(2352," e "),i(2353,"code"),e(2354,"searchService"),t(),e(2355,"."),t()()()(),i(2356,"tr",16)(2357,"td",17)(2358,"div",25)(2359,"span",26),e(2360," fieldValue"),n(2361,"br"),t()()(),i(2362,"td",21)(2363,"code",27),e(2364,"string"),t()(),i(2365,"td",24)(2366,"em")(2367,"strong"),e(2368,"(opcional)"),t()(),i(2369,"p"),e(2370,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como valor do campo."),t(),i(2371,"p"),e(2372,"O valor padr\xE3o \xE9: "),i(2373,"code"),e(2374,"value"),t(),e(2375,"."),t(),i(2376,"blockquote")(2377,"p"),e(2378,"Esta propriedade pode ser utilizada em conjunto com: "),i(2379,"code"),e(2380,"options"),t(),e(2381,", "),i(2382,"code"),e(2383,"optionsService"),t(),e(2384," e "),i(2385,"code"),e(2386,"searchService"),t(),e(2387,"."),t()()()(),i(2388,"tr",16)(2389,"td",17)(2390,"div",25)(2391,"span",26),e(2392," filterMinlength"),n(2393,"br"),t()()(),i(2394,"td",21)(2395,"code",45),e(2396,"number"),t()(),i(2397,"td",24)(2398,"em")(2399,"strong"),e(2400,"(opcional)"),t()(),i(2401,"p"),e(2402,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o do "),i(2403,"code"),e(2404,"po-combo"),t(),e(2405,"."),t()()(),i(2406,"tr",16)(2407,"td",17)(2408,"div",25)(2409,"span",26),e(2410," filterMode"),n(2411,"br"),t()()(),i(2412,"td",21)(2413,"code",52),e(2414,"PoMultiselectFilterMode"),t()(),i(2415,"td",24)(2416,"em")(2417,"strong"),e(2418,"(opcional)"),t()(),i(2419,"p"),e(2420,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),i(2421,"code"),e(2422,"startsWith"),t(),e(2423,", "),i(2424,"code"),e(2425,"contains"),t(),e(2426," ou "),i(2427,"code"),e(2428,"endsWith"),t(),e(2429,"."),t(),i(2430,"blockquote")(2431,"p"),e(2432,"Quando utilizar a propriedade p-filter-service esta propriedade ser\xE1 ignorada."),t()(),i(2433,"p")(2434,"strong"),e(2435,"Componentes compat\xEDveis:"),t(),i(2436,"code"),e(2437,"po-multiselect"),t(),e(2438,"."),t()()(),i(2439,"tr",16)(2440,"td",17)(2441,"div",25)(2442,"span",26),e(2443," forceBooleanComponentType"),n(2444,"br"),t()()(),i(2445,"td",21)(2446,"code",53),e(2447,"ForceBooleanComponentEnum"),t()(),i(2448,"td",24)(2449,"em")(2450,"strong"),e(2451,"(opcional)"),t()(),i(2452,"p"),e(2453,"Valores aceitos:"),t(),i(2454,"ul")(2455,"li"),e(2456,"ForceBooleanComponentEnum.switch"),t(),i(2457,"li"),e(2458,"ForceBooleanComponentEnum.checkbox"),t()()()(),i(2459,"tr",16)(2460,"td",17)(2461,"div",25)(2462,"span",26),e(2463," forceOptionsComponentType"),n(2464,"br"),t()()(),i(2465,"td",21)(2466,"code",54),e(2467,"ForceOptionComponentEnum"),t()(),i(2468,"td",24)(2469,"em")(2470,"strong"),e(2471,"(opcional)"),t()(),i(2472,"p"),e(2473,"pode ser utilizada em conjunto com a propriedade "),i(2474,"code"),e(2475,"options"),t(),e(2476," for\xE7ando o componente a renderizar um "),i(2477,"code"),e(2478,"po-select"),t(),e(2479," ou "),i(2480,"code"),e(2481,"po-radio-group"),t(),e(2482,"."),t(),i(2483,"p"),e(2484,"Valores aceitos:"),t(),i(2485,"ul")(2486,"li"),e(2487,"ForceOptionComponentEnum.radioGroup"),t(),i(2488,"li"),e(2489,"ForceOptionComponentEnum.select"),t()(),i(2490,"blockquote")(2491,"p"),e(2492,"Essa propriedade ser\xE1 ignorada caso seja utilizada em conjunto com a propriedade "),i(2493,"code"),e(2494,"optionsMulti"),t(),e(2495," e "),i(2496,"code"),e(2497,"optionsService"),t(),e(2498,"."),t()()()(),i(2499,"tr",16)(2500,"td",17)(2501,"div",25)(2502,"span",26),e(2503," formField"),n(2504,"br"),t()()(),i(2505,"td",21)(2506,"code",27),e(2507,"string"),t()(),i(2508,"td",24)(2509,"em")(2510,"strong"),e(2511,"(opcional)"),t()(),i(2512,"p"),e(2513,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),i(2514,"code"),e(2515,"url"),t(),e(2516,"."),t(),i(2517,"blockquote")(2518,"p"),e(2519,"O valor default \xE9 "),i(2520,"code"),e(2521,"files"),t()()(),i(2522,"p")(2523,"strong"),e(2524,"Componente compat\xEDvel"),t(),e(2525,": "),i(2526,"code"),e(2527,"po-upload"),t()()()(),i(2528,"tr",16)(2529,"td",17)(2530,"div",25)(2531,"span",26),e(2532," format"),n(2533,"br"),t()()(),i(2534,"td",21)(2535,"code",27),e(2536,"string "),t(),i(2537,"code",32),e(2538," Array<string>"),t()(),i(2539,"td",24)(2540,"em")(2541,"strong"),e(2542,"(opcional)"),t()(),i(2543,"p"),e(2544,"Formato de exibi\xE7\xE3o no campo."),t(),i(2545,"p"),e(2546,"Ao utilizar esta propriedade com o "),i(2547,"code"),e(2548,"type"),t(),i(2549,"em"),e(2550,"PoDynamicFieldType.Date"),t(),e(2551," ou "),i(2552,"em"),e(2553,"PoDynamicFieldType.DateTime"),t(),e(2554,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),t(),i(2555,"p"),e(2556,"Valores v\xE1lidos:"),t(),i(2557,"ul")(2558,"li"),e(2559,"dd/mm/yyyy"),t(),i(2560,"li"),e(2561,"mm/dd/yyyy"),t(),i(2562,"li"),e(2563,"yyyy/mm/dd"),t()(),i(2564,"p"),e(2565,"Tamb\xE9m pode-se utilizar em conjunto com "),i(2566,"code"),e(2567,"searchService"),t(),e(2568,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),t()()(),i(2569,"tr",16)(2570,"td",17)(2571,"div",25)(2572,"span",26),e(2573," formatModel"),n(2574,"br"),t()()(),i(2575,"td",21)(2576,"code",29),e(2577,"boolean"),t()(),i(2578,"td",24)(2579,"em")(2580,"strong"),e(2581,"(opcional)"),t()(),i(2582,"p"),e(2583,"Indica se o "),i(2584,"code"),e(2585,"model"),t(),e(2586," receber\xE1 o valor formatado pelas propriedades "),i(2587,"code"),e(2588,"p-label-on"),t(),e(2589," e "),i(2590,"code"),e(2591,"p-label-off"),t(),e(2592,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),t(),i(2593,"p"),e(2594,"O valor padr\xE3o \xE9: "),i(2595,"code"),e(2596,"false"),t(),e(2597,"."),t(),i(2598,"blockquote")(2599,"p"),e(2600,"Esta propriedade est\xE1 disponivel apenas para o "),i(2601,"code"),e(2602,"swicth"),t(),e(2603,"."),t()()()(),i(2604,"tr",16)(2605,"td",17)(2606,"div",25)(2607,"span",26),e(2608," gridColumns"),n(2609,"br"),t()()(),i(2610,"td",21)(2611,"code",45),e(2612,"number"),t()(),i(2613,"td",24)(2614,"em")(2615,"strong"),e(2616,"(opcional)"),t()(),i(2617,"p"),e(2618,"Tamanho de exibi\xE7\xE3o do campo em telas."),t(),i(2619,"p"),e(2620,"Deve ser usado o sistema de "),i(2621,"strong"),e(2622,"grid"),t(),e(2623," do PO (1 ... 12 colunas)."),t(),i(2624,"blockquote")(2625,"p"),e(2626,"Esta propriedade \xE9 generica, aplica o valor em todos os tamanhos de telas."),t()()()(),i(2627,"tr",16)(2628,"td",17)(2629,"div",25)(2630,"span",26),e(2631," gridLgColumns"),n(2632,"br"),t()()(),i(2633,"td",21)(2634,"code",45),e(2635,"number"),t()(),i(2636,"td",24)(2637,"em")(2638,"strong"),e(2639,"(opcional)"),t()(),i(2640,"p"),e(2641,"Tamanho de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),i(2642,"p"),e(2643,"Deve ser usado o sistema de "),i(2644,"strong"),e(2645,"grid"),t(),e(2646," do PO (1 ... 12 colunas)."),t(),i(2647,"blockquote")(2648,"p"),e(2649,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(2650,"code"),e(2651,"gridColumns"),t(),e(2652,"."),t()()()(),i(2653,"tr",16)(2654,"td",17)(2655,"div",25)(2656,"span",26),e(2657," gridLgPull"),n(2658,"br"),t()()(),i(2659,"td",21)(2660,"code",45),e(2661,"number"),t()(),i(2662,"td",24)(2663,"em")(2664,"strong"),e(2665,"(opcional)"),t()(),i(2666,"p"),e(2667,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas grandes (lg)."),t(),i(2668,"p"),e(2669,"Deve ser usado o sistema de "),i(2670,"strong"),e(2671,"grid"),t(),e(2672," do PO (1 ... 11 colunas)."),t(),i(2673,"blockquote")(2674,"p"),e(2675,"Esta propriedade n\xE3o funciona com a propriedade "),i(2676,"code"),e(2677,"gridColumns"),t(),e(2678,". Deve-se especificar o tamanho da tela."),t()()()(),i(2679,"tr",16)(2680,"td",17)(2681,"div",25)(2682,"span",26),e(2683," gridMdColumns"),n(2684,"br"),t()()(),i(2685,"td",21)(2686,"code",45),e(2687,"number"),t()(),i(2688,"td",24)(2689,"em")(2690,"strong"),e(2691,"(opcional)"),t()(),i(2692,"p"),e(2693,"Tamanho de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),i(2694,"p"),e(2695,"Deve ser usado o sistema de "),i(2696,"strong"),e(2697,"grid"),t(),e(2698," do PO (1 ... 12 colunas)."),t(),i(2699,"blockquote")(2700,"p"),e(2701,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(2702,"code"),e(2703,"gridColumns"),t(),e(2704,"."),t()()()(),i(2705,"tr",16)(2706,"td",17)(2707,"div",25)(2708,"span",26),e(2709," gridMdPull"),n(2710,"br"),t()()(),i(2711,"td",21)(2712,"code",45),e(2713,"number"),t()(),i(2714,"td",24)(2715,"em")(2716,"strong"),e(2717,"(opcional)"),t()(),i(2718,"p"),e(2719,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas m\xE9dias (md)."),t(),i(2720,"p"),e(2721,"Deve ser usado o sistema de "),i(2722,"strong"),e(2723,"grid"),t(),e(2724," do PO (1 ... 11 colunas)."),t(),i(2725,"blockquote")(2726,"p"),e(2727,"Esta propriedade n\xE3o funciona com a propriedade "),i(2728,"code"),e(2729,"gridColumns"),t(),e(2730,". Deve-se especificar o tamanho da tela."),t()()()(),i(2731,"tr",16)(2732,"td",17)(2733,"div",25)(2734,"span",26),e(2735," gridSmColumns"),n(2736,"br"),t()()(),i(2737,"td",21)(2738,"code",45),e(2739,"number"),t()(),i(2740,"td",24)(2741,"em")(2742,"strong"),e(2743,"(opcional)"),t()(),i(2744,"p"),e(2745,"Tamanho de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),i(2746,"p"),e(2747,"Deve ser usado o sistema de "),i(2748,"strong"),e(2749,"grid"),t(),e(2750," do PO (1 ... 12 colunas)."),t(),i(2751,"blockquote")(2752,"p"),e(2753,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(2754,"code"),e(2755,"gridColumns"),t(),e(2756,"."),t()()()(),i(2757,"tr",16)(2758,"td",17)(2759,"div",25)(2760,"span",26),e(2761," gridSmPull"),n(2762,"br"),t()()(),i(2763,"td",21)(2764,"code",45),e(2765,"number"),t()(),i(2766,"td",24)(2767,"em")(2768,"strong"),e(2769,"(opcional)"),t()(),i(2770,"p"),e(2771,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas menores (sm)."),t(),i(2772,"p"),e(2773,"Deve ser usado o sistema de "),i(2774,"strong"),e(2775,"grid"),t(),e(2776," do PO (1 ... 11 colunas)."),t(),i(2777,"blockquote")(2778,"p"),e(2779,"Esta propriedade n\xE3o funciona com a propriedade "),i(2780,"code"),e(2781,"gridColumns"),t(),e(2782,". Deve-se especificar o tamanho da tela."),t()()()(),i(2783,"tr",16)(2784,"td",17)(2785,"div",25)(2786,"span",26),e(2787," gridXlColumns"),n(2788,"br"),t()()(),i(2789,"td",21)(2790,"code",45),e(2791,"number"),t()(),i(2792,"td",24)(2793,"em")(2794,"strong"),e(2795,"(opcional)"),t()(),i(2796,"p"),e(2797,"Tamanho de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),i(2798,"p"),e(2799,"Deve ser usado o sistema de "),i(2800,"strong"),e(2801,"grid"),t(),e(2802," do PO (1 ... 12 colunas)."),t(),i(2803,"blockquote")(2804,"p"),e(2805,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(2806,"code"),e(2807,"gridColumns"),t(),e(2808,"."),t()()()(),i(2809,"tr",16)(2810,"td",17)(2811,"div",25)(2812,"span",26),e(2813," gridXlPull"),n(2814,"br"),t()()(),i(2815,"td",21)(2816,"code",45),e(2817,"number"),t()(),i(2818,"td",24)(2819,"em")(2820,"strong"),e(2821,"(opcional)"),t()(),i(2822,"p"),e(2823,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas extra grandes (xl)."),t(),i(2824,"p"),e(2825,"Deve ser usado o sistema de "),i(2826,"strong"),e(2827,"grid"),t(),e(2828," do PO (1 ... 11 colunas)."),t(),i(2829,"blockquote")(2830,"p"),e(2831,"Esta propriedade n\xE3o funciona com a propriedade "),i(2832,"code"),e(2833,"gridColumns"),t(),e(2834,". Deve-se especificar o tamanho da tela."),t()()()(),i(2835,"tr",16)(2836,"td",17)(2837,"div",25)(2838,"span",26),e(2839," headers"),n(2840,"br"),t()()(),i(2841,"td",21)(2842,"code",55),e(2843,"{ [name: string]: string "),t(),i(2844,"code",56),e(2845,` Array<string>;
}`),t()(),i(2846,"td",24)(2847,"em")(2848,"strong"),e(2849,"(opcional)"),t()(),i(2850,"p"),e(2851,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),t(),i(2852,"p")(2853,"strong"),e(2854,"Componente compat\xEDvel"),t(),e(2855,": "),i(2856,"code"),e(2857,"po-upload"),t()()()(),i(2858,"tr",16)(2859,"td",17)(2860,"div",25)(2861,"span",26),e(2862," help"),n(2863,"br"),t()()(),i(2864,"td",21)(2865,"code",27),e(2866,"string"),t()(),i(2867,"td",24)(2868,"em")(2869,"strong"),e(2870,"(opcional)"),t()(),i(2871,"p"),e(2872,"Texto de ajuda."),t()()(),i(2873,"tr",16)(2874,"td",17)(2875,"div",25)(2876,"span",26),e(2877," helper"),n(2878,"br"),t()()(),i(2879,"td",21)(2880,"code",27),e(2881,"string "),t(),i(2882,"code",38),e(2883," PoHelperOptions"),t()(),i(2884,"td",24)(2885,"em")(2886,"strong"),e(2887,"(opcional)"),t()(),i(2888,"p"),e(2889,"Texto simples que ser\xE1 apresentado como aux\xEDlio ao campo ou objeto com as defini\xE7\xF5es do po-helper."),t()()(),i(2890,"tr",16)(2891,"td",17)(2892,"div",25)(2893,"span",26),e(2894," hideLabelStatus"),n(2895,"br"),t()()(),i(2896,"td",21)(2897,"code",29),e(2898,"boolean"),t()(),i(2899,"td",24)(2900,"em")(2901,"strong"),e(2902,"(opcional)"),t()(),i(2903,"p"),e(2904,"Indica se o status do "),i(2905,"code"),e(2906,"model"),t(),e(2907," ser\xE1 escondido visualmente ao lado do switch"),t()()(),i(2908,"tr",16)(2909,"td",17)(2910,"div",25)(2911,"span",26),e(2912," hidePasswordPeek"),n(2913,"br"),t()()(),i(2914,"td",21)(2915,"code",29),e(2916,"boolean"),t()(),i(2917,"td",24)(2918,"em")(2919,"strong"),e(2920,"(opcional)"),t()(),i(2921,"p"),e(2922,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada no "),i(2923,"code"),e(2924,"po-password"),t(),e(2925,"."),t()()(),i(2926,"tr",16)(2927,"td",17)(2928,"div",25)(2929,"span",26),e(2930," hideRestrictionsInfo"),n(2931,"br"),t()()(),i(2932,"td",21)(2933,"code",29),e(2934,"boolean"),t()(),i(2935,"td",24)(2936,"em")(2937,"strong"),e(2938,"(opcional)"),t()(),i(2939,"p"),e(2940,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),t(),i(2941,"p")(2942,"strong"),e(2943,"Componente compat\xEDvel"),t(),e(2944,": "),i(2945,"code"),e(2946,"po-upload"),t()()()(),i(2947,"tr",16)(2948,"td",17)(2949,"div",25)(2950,"span",26),e(2951," hideSearch"),n(2952,"br"),t()()(),i(2953,"td",21)(2954,"code",29),e(2955,"boolean"),t()(),i(2956,"td",24)(2957,"em")(2958,"strong"),e(2959,"(opcional)"),t()(),i(2960,"p"),e(2961,"Esconde o campo de pesquisa existente dentro do dropdown do "),i(2962,"code"),e(2963,"po-multiselect"),t(),e(2964,"."),t()()(),i(2965,"tr",16)(2966,"td",17)(2967,"div",25)(2968,"span",26),e(2969," hideSelectAll"),n(2970,"br"),t()()(),i(2971,"td",21)(2972,"code",29),e(2973,"boolean"),t()(),i(2974,"td",24)(2975,"em")(2976,"strong"),e(2977,"(opcional)"),t()(),i(2978,"p"),e(2979,'Indica se o campo "Selecionar todos" do '),i(2980,"code"),e(2981,"po-multiselect"),t(),e(2982," ser\xE1 escondido."),t()()(),i(2983,"tr",16)(2984,"td",17)(2985,"div",25)(2986,"span",26),e(2987," hideSelectButton"),n(2988,"br"),t()()(),i(2989,"td",21)(2990,"code",29),e(2991,"boolean"),t()(),i(2992,"td",24)(2993,"em")(2994,"strong"),e(2995,"(opcional)"),t()(),i(2996,"p"),e(2997,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),t(),i(2998,"blockquote")(2999,"p"),e(3e3,"Caso o valor definido seja "),i(3001,"code"),e(3002,"true"),t(),e(3003,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),i(3004,"code"),e(3005,"selectFiles()"),t(),e(3006," para sele\xE7\xE3o de arquivos."),t()(),i(3007,"p")(3008,"strong"),e(3009,"Componente compat\xEDvel"),t(),e(3010,": "),i(3011,"code"),e(3012,"po-upload"),t()()()(),i(3013,"tr",16)(3014,"td",17)(3015,"div",25)(3016,"span",26),e(3017," hideSendButton"),n(3018,"br"),t()()(),i(3019,"td",21)(3020,"code",29),e(3021,"boolean"),t()(),i(3022,"td",24)(3023,"em")(3024,"strong"),e(3025,"(opcional)"),t()(),i(3026,"p"),e(3027,"Omite o bot\xE3o de envio de arquivos."),t(),i(3028,"blockquote")(3029,"p"),e(3030,"Caso o valor definido seja "),i(3031,"code"),e(3032,"true"),t(),e(3033,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),i(3034,"code"),e(3035,"sendFiles()"),t(),e(3036," para envio do(s) arquivo(s) selecionado(s)."),t()(),i(3037,"p")(3038,"strong"),e(3039,"Componente compat\xEDvel"),t(),e(3040,": "),i(3041,"code"),e(3042,"po-upload"),t()()()(),i(3043,"tr",16)(3044,"td",17)(3045,"div",25)(3046,"span",26),e(3047," icon"),n(3048,"br"),t()()(),i(3049,"td",21)(3050,"code",27),e(3051,"string "),t(),i(3052,"code",57),e(3053," TemplateRef<void>"),t()(),i(3054,"td",24)(3055,"em")(3056,"strong"),e(3057,"(opcional)"),t()(),i(3058,"p"),e(3059,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),i(3060,"blockquote")(3061,"p"),e(3062,"Esta propriedade s\xF3 pode ser utilizado nos campos:"),t()(),i(3063,"ul")(3064,"li"),e(3065,"Input;"),t(),i(3066,"li"),e(3067,"Number;"),t(),i(3068,"li"),e(3069,"Decimal;"),t(),i(3070,"li"),e(3071,"Combo;"),t(),i(3072,"li"),e(3073,"Password;"),t()(),i(3074,"blockquote")(3075,"p"),e(3076,"Veja a disponibilidade de \xEDcones em "),i(3077,"a",58),e(3078,"biblioteca de \xEDcones"),t(),e(3079,"."),t()()()(),i(3080,"tr",16)(3081,"td",17)(3082,"div",25)(3083,"span",26),e(3084," infiniteScroll"),n(3085,"br"),t()()(),i(3086,"td",21)(3087,"code",29),e(3088,"boolean"),t()(),i(3089,"td",24)(3090,"em")(3091,"strong"),e(3092,"(opcional)"),t()(),i(3093,"p"),e(3094,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),t(),i(3095,"p")(3096,"strong"),e(3097,"Componentes compat\xEDveis:"),t(),i(3098,"code"),e(3099,"po-combo"),t(),e(3100,", "),i(3101,"code"),e(3102,"po-lookup"),t(),e(3103,"."),t()()(),i(3104,"tr",16)(3105,"td",17)(3106,"div",25)(3107,"span",26),e(3108," infiniteScrollDistance"),n(3109,"br"),t()()(),i(3110,"td",21)(3111,"code",45),e(3112,"number"),t()(),i(3113,"td",24)(3114,"em")(3115,"strong"),e(3116,"(opcional)"),t()(),i(3117,"p"),e(3118,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),i(3119,"strong"),e(3120,"Exemplos"),t(),i(3121,"code"),e(3122,"{ infiniteScrollDistance: 80 }"),t(),e(3123,": Quando atingir 80% do scroll do combo, o show-more ser\xE1 disparado."),t(),i(3124,"p")(3125,"strong"),e(3126,"Componente compat\xEDvel:"),t(),i(3127,"code"),e(3128,"po-combo"),t(),e(3129,"."),t()()(),i(3130,"tr",16)(3131,"td",17)(3132,"div",25)(3133,"span",26),e(3134," invalidValue"),n(3135,"br"),t()()(),i(3136,"td",21)(3137,"code",29),e(3138,"boolean"),t()(),i(3139,"td",24)(3140,"em")(3141,"strong"),e(3142,"(opcional)"),t()(),i(3143,"p"),e(3144,"Define qual valor ser\xE1 considerado como inv\xE1lido para exibir a mensagem da propriedade "),i(3145,"code"),e(3146,"p-field-error-message"),t(),e(3147,"."),t(),i(3148,"blockquote")(3149,"p"),e(3150,"Caso essa propriedade seja definida como "),i(3151,"code"),e(3152,"true"),t(),e(3153,", a mensagem de erro ser\xE1 exibida quando o campo estiver ligado(on/true)."),t()(),i(3154,"p")(3155,"strong"),e(3156,"Componente compat\xEDvel"),t(),e(3157,": "),i(3158,"code"),e(3159,"po-switch"),t()()()(),i(3160,"tr",16)(3161,"td",17)(3162,"div",25)(3163,"span",26),e(3164," isoFormat"),n(3165,"br"),t()()(),i(3166,"td",21)(3167,"code",59),e(3168,"PoDatepickerIsoFormat"),t()(),i(3169,"td",24)(3170,"em")(3171,"strong"),e(3172,"(opcional)"),t()(),i(3173,"p"),e(3174,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do model, independentemente do formato de entrada."),t(),i(3175,"blockquote")(3176,"p"),e(3177,"Veja os valores v\xE1lidos no "),i(3178,"code"),e(3179,"enumPoDatepickerIsoFormat"),t(),e(3180,"."),t()(),i(3181,"p")(3182,"strong"),e(3183,"Componente compat\xEDvel:"),t(),e(3184," po-datepicker"),t()()(),i(3185,"tr",16)(3186,"td",17)(3187,"div",25)(3188,"span",26),e(3189," key"),n(3190,"br"),t()()(),i(3191,"td",21)(3192,"code",29),e(3193,"boolean"),t()(),i(3194,"td",24)(3195,"em")(3196,"strong"),e(3197,"(opcional)"),t()(),i(3198,"p"),e(3199,"Identificador"),t()()(),i(3200,"tr",16)(3201,"td",17)(3202,"div",25)(3203,"span",26),e(3204," keydown"),n(3205,"br"),t()()(),i(3206,"td",21)(3207,"code",44),e(3208,"Function"),t()(),i(3209,"td",24)(3210,"em")(3211,"strong"),e(3212,"(opcional)"),t()(),i(3213,"p"),e(3214,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),i(3215,"code"),e(3216,"KeyboardEvent"),t(),e(3217," com informa\xE7\xF5es sobre a tecla."),t()()(),i(3218,"tr",16)(3219,"td",17)(3220,"div",25)(3221,"span",26),e(3222," label"),n(3223,"br"),t()()(),i(3224,"td",21)(3225,"code",27),e(3226,"string"),t()(),i(3227,"td",24)(3228,"em")(3229,"strong"),e(3230,"(opcional)"),t()(),i(3231,"p"),e(3232,"R\xF3tulo do campo exibido."),t(),i(3233,"p"),e(3234,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(3235,"code"),e(3236,"label"),t(),e(3237," o valor da propriedade "),i(3238,"code"),e(3239,"property"),t(),e(3240," com a primeira letra em mai\xFAsculo."),t()()(),i(3241,"tr",16)(3242,"td",17)(3243,"div",25)(3244,"span",26),e(3245," labelPosition"),n(3246,"br"),t()()(),i(3247,"td",21)(3248,"code",60),e(3249,"PoSwitchLabelPosition"),t()(),i(3250,"td",24)(3251,"em")(3252,"strong"),e(3253,"(opcional)"),t()(),i(3254,"p"),e(3255,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo do PoSwitch."),t(),i(3256,"blockquote")(3257,"p"),e(3258,"Por padr\xE3o exibe \xE0 direita."),t()()()(),i(3259,"tr",16)(3260,"td",17)(3261,"div",25)(3262,"span",26),e(3263," listboxControlPosition"),n(3264,"br"),t()()(),i(3265,"td",21)(3266,"code",61),e(3267,"'top' "),t(),i(3268,"code",62),e(3269," 'bottom'"),t()(),i(3270,"td",24)(3271,"em")(3272,"strong"),e(3273,"(opcional)"),t()(),i(3274,"p"),e(3275,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),i(3276,"code"),e(3277,"listbox"),t(),e(3278," em rela\xE7\xE3o ao campo ("),i(3279,"code"),e(3280,"top"),t(),e(3281," ou "),i(3282,"code"),e(3283,"bottom"),t(),e(3284,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),t(),i(3285,"p")(3286,"strong"),e(3287,"Componentes compat\xEDveis:"),t(),i(3288,"code"),e(3289,"po-multiselect"),t(),e(3290,", "),i(3291,"code"),e(3292,"po-combo"),t(),e(3293,"."),t()()(),i(3294,"tr",16)(3295,"td",17)(3296,"div",25)(3297,"span",26),e(3298," literals"),n(3299,"br"),t()()(),i(3300,"td",21)(3301,"code",36),e(3302,"PoLookupLiterals "),t(),i(3303,"code",63),e(3304," PoMultiselectLiterals "),t(),i(3305,"code",64),e(3306," PoComboLiterals "),t(),i(3307,"code",65),e(3308," PoDatepickerRangeLiterals "),t(),i(3309,"code",66),e(3310," PoUploadLiterals"),t()(),i(3311,"td",24)(3312,"em")(3313,"strong"),e(3314,"(opcional)"),t()(),i(3315,"p"),e(3316,"Objeto com as literais usadas para os seguintes componentes: "),i(3317,"code"),e(3318,"po-lookup"),t(),e(3319,", "),i(3320,"code"),e(3321,"po-multiselect"),t(),e(3322,", "),i(3323,"code"),e(3324,"po-combo"),t(),e(3325," e "),i(3326,"code"),e(3327,"po-datepicker-range"),t(),e(3328,"."),t(),i(3329,"blockquote")(3330,"p"),e(3331,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do PoI18nService ou do browser."),t()(),i(3332,"p")(3333,"strong"),e(3334,"Componentes compat\xEDveis:"),t(),i(3335,"code"),e(3336,"po-lookup"),t(),e(3337,", "),i(3338,"code"),e(3339,"po-multiselect"),t(),e(3340,", "),i(3341,"code"),e(3342,"po-combo"),t(),e(3343,", "),i(3344,"code"),e(3345,"po-datepicker-range"),t()()()(),i(3346,"tr",16)(3347,"td",17)(3348,"div",25)(3349,"span",26),e(3350," locale"),n(3351,"br"),t()()(),i(3352,"td",21)(3353,"code",27),e(3354,"string"),t()(),i(3355,"td",24)(3356,"em")(3357,"strong"),e(3358,"(opcional)"),t()(),i(3359,"p"),e(3360,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),i(3361,"a",67)(3362,"code"),e(3363,"I18n"),t()()(),i(3364,"p"),e(3365,"Exemplo de utiliza\xE7\xE3o:"),t(),i(3366,"pre")(3367,"code"),e(3368,`[
  { property: 'birthday', locale: 'en', type: 'date' },
  { property: 'wage', locale: 'ru', type: 'currency' }
];
`),t()(),i(3369,"blockquote")(3370,"p"),e(3371,"Para ver quais linguagens suportadas acesse "),i(3372,"a",67)(3373,"code"),e(3374,"I18n"),t()(),e(3375,`
A propriedade ser\xE1 repassada para os componentes que suportam a mesma.`),t()()()(),i(3376,"tr",16)(3377,"td",17)(3378,"div",25)(3379,"span",26),e(3380," mask"),n(3381,"br"),t()()(),i(3382,"td",21)(3383,"code",27),e(3384,"string"),t()(),i(3385,"td",24)(3386,"em")(3387,"strong"),e(3388,"(opcional)"),t()(),i(3389,"p"),e(3390,"M\xE1scara para o campo."),t(),i(3391,"p")(3392,"strong"),e(3393,"Componentes compat\xEDveis:"),t(),i(3394,"code"),e(3395,"po-input"),t(),e(3396,"."),t(),i(3397,"blockquote")(3398,"p"),e(3399,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),i(3400,"code"),e(3401,"type: time"),t(),e(3402,"."),t()()()(),i(3403,"tr",16)(3404,"td",17)(3405,"div",25)(3406,"span",26),e(3407," maskFormatModel"),n(3408,"br"),t()()(),i(3409,"td",21)(3410,"code",29),e(3411,"boolean"),t()(),i(3412,"td",24)(3413,"em")(3414,"strong"),e(3415,"(opcional)"),t()(),i(3416,"p"),e(3417,"Define que o valor do componente ser\xE1 conforme especificado na masc\xE1ra. O valor padr\xE3o \xE9 "),i(3418,"code"),e(3419,"false"),t(),e(3420,"."),t(),i(3421,"p")(3422,"strong"),e(3423,"Componentes compat\xEDveis:"),t(),i(3424,"code"),e(3425,"po-input"),t(),e(3426,"."),t(),i(3427,"blockquote")(3428,"p"),e(3429,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),i(3430,"code"),e(3431,"type: time"),t(),e(3432,"."),t()()()(),i(3433,"tr",16)(3434,"td",17)(3435,"div",25)(3436,"span",26),e(3437," maxLength"),n(3438,"br"),t()()(),i(3439,"td",21)(3440,"code",45),e(3441,"number"),t()(),i(3442,"td",24)(3443,"em")(3444,"strong"),e(3445,"(opcional)"),t()(),i(3446,"p"),e(3447,"Tamanho m\xE1ximo de caracteres."),t(),i(3448,"p")(3449,"strong"),e(3450,"Componentes compat\xEDveis:"),t(),i(3451,"code"),e(3452,"po-input"),t(),e(3453,", "),i(3454,"code"),e(3455,"po-number"),t(),e(3456,", "),i(3457,"code"),e(3458,"po-decimal"),t(),e(3459,", "),i(3460,"code"),e(3461,"po-textarea"),t(),e(3462,", "),i(3463,"code"),e(3464,"po-password"),t(),e(3465,"."),t()()(),i(3466,"tr",16)(3467,"td",17)(3468,"div",25)(3469,"span",26),e(3470," maxValue"),n(3471,"br"),t()()(),i(3472,"td",21)(3473,"code",27),e(3474,"string "),t(),i(3475,"code",45),e(3476," number"),t()(),i(3477,"td",24)(3478,"em")(3479,"strong"),e(3480,"(opcional)"),t()(),i(3481,"p"),e(3482,"Valor m\xE1ximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),i(3483,"em"),e(3484,"number"),t(),e(3485,", "),i(3486,"em"),e(3487,"date"),t(),e(3488," ou "),i(3489,"em"),e(3490,"dateTime"),t(),e(3491,"."),t(),i(3492,"p")(3493,"strong"),e(3494,"Componentes compat\xEDveis:"),t(),i(3495,"code"),e(3496,"po-datepicker"),t(),e(3497,", "),i(3498,"code"),e(3499,"po-datepicker-range"),t(),e(3500,", "),i(3501,"code"),e(3502,"po-number"),t(),e(3503,", "),i(3504,"code"),e(3505,"po-decimal"),t()()()(),i(3506,"tr",16)(3507,"td",17)(3508,"div",25)(3509,"span",26),e(3510," minLength"),n(3511,"br"),t()()(),i(3512,"td",21)(3513,"code",45),e(3514,"number"),t()(),i(3515,"td",24)(3516,"em")(3517,"strong"),e(3518,"(opcional)"),t()(),i(3519,"p"),e(3520,"Tamanho m\xEDnimo de caracteres."),t(),i(3521,"p")(3522,"strong"),e(3523,"Componentes compat\xEDveis:"),t(),i(3524,"code"),e(3525,"po-input"),t(),e(3526,", "),i(3527,"code"),e(3528,"po-number"),t(),e(3529,", "),i(3530,"code"),e(3531,"po-decimal"),t(),e(3532,", "),i(3533,"code"),e(3534,"po-textarea"),t(),e(3535,", "),i(3536,"code"),e(3537,"po-password"),t(),e(3538,"."),t()()(),i(3539,"tr",16)(3540,"td",17)(3541,"div",25)(3542,"span",26),e(3543," minValue"),n(3544,"br"),t()()(),i(3545,"td",21)(3546,"code",27),e(3547,"string "),t(),i(3548,"code",45),e(3549," number"),t()(),i(3550,"td",24)(3551,"em")(3552,"strong"),e(3553,"(opcional)"),t()(),i(3554,"p"),e(3555,"Valor m\xEDnimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),i(3556,"em"),e(3557,"number"),t(),e(3558,", "),i(3559,"em"),e(3560,"date"),t(),e(3561," ou "),i(3562,"em"),e(3563,"dateTime"),t(),e(3564,"."),t(),i(3565,"p")(3566,"strong"),e(3567,"Componentes compat\xEDveis:"),t(),i(3568,"code"),e(3569,"po-datepicker"),t(),e(3570,", "),i(3571,"code"),e(3572,"po-datepicker-range"),t(),e(3573,", "),i(3574,"code"),e(3575,"po-number"),t(),e(3576,", "),i(3577,"code"),e(3578,"po-decimal"),t()()()(),i(3579,"tr",16)(3580,"td",17)(3581,"div",25)(3582,"span",26),e(3583," multiple"),n(3584,"br"),t()()(),i(3585,"td",21)(3586,"code",29),e(3587,"boolean"),t()(),i(3588,"td",24)(3589,"em")(3590,"strong"),e(3591,"(opcional)"),t()(),i(3592,"p"),e(3593,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),i(3594,"p")(3595,"strong"),e(3596,"Componente compat\xEDvel:"),t(),i(3597,"code"),e(3598,"po-lookup"),t(),e(3599,", "),i(3600,"code"),e(3601,"po-upload"),t()()()(),i(3602,"tr",16)(3603,"td",17)(3604,"div",25)(3605,"span",26),e(3606," noAutocomplete"),n(3607,"br"),t()()(),i(3608,"td",21)(3609,"code",29),e(3610,"boolean"),t()(),i(3611,"td",24)(3612,"em")(3613,"strong"),e(3614,"(opcional)"),t()(),i(3615,"p"),e(3616,"Define a propriedade nativa "),i(3617,"code"),e(3618,"autocomplete"),t(),e(3619," do campo como off."),t(),i(3620,"p")(3621,"strong"),e(3622,"Componentes compat\xEDveis:"),t(),i(3623,"code"),e(3624,"po-datepicker"),t(),e(3625,", "),i(3626,"code"),e(3627,"po-datepicker-range"),t(),e(3628,", "),i(3629,"code"),e(3630,"po-input"),t(),e(3631,", "),i(3632,"code"),e(3633,"po-number"),t(),e(3634,", "),i(3635,"code"),e(3636,"po-decimal"),t(),e(3637,", "),i(3638,"code"),e(3639,"po-lookup"),t(),e(3640,", "),i(3641,"code"),e(3642,"po-password"),t()()()(),i(3643,"tr",16)(3644,"td",17)(3645,"div",25)(3646,"span",26),e(3647," offsetColumns"),n(3648,"br"),t()()(),i(3649,"td",21)(3650,"code",45),e(3651,"number"),t()(),i(3652,"td",24)(3653,"em")(3654,"strong"),e(3655,"(opcional)"),t()(),i(3656,"p"),e(3657,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),t(),i(3658,"p"),e(3659,"Deve ser usado o sistema de "),i(3660,"strong"),e(3661,"grid"),t(),e(3662," do PO (1 ... 12 colunas)."),t(),i(3663,"blockquote")(3664,"p"),e(3665,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),t()()()(),i(3666,"tr",16)(3667,"td",17)(3668,"div",25)(3669,"span",26),e(3670," offsetLgColumns"),n(3671,"br"),t()()(),i(3672,"td",21)(3673,"code",45),e(3674,"number"),t()(),i(3675,"td",24)(3676,"em")(3677,"strong"),e(3678,"(opcional)"),t()(),i(3679,"p"),e(3680,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),i(3681,"p"),e(3682,"Deve ser usado o sistema de "),i(3683,"strong"),e(3684,"grid"),t(),e(3685," do PO (1 ... 12 colunas)."),t(),i(3686,"blockquote")(3687,"p"),e(3688,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(3689,"code"),e(3690,"offsetColumns"),t(),e(3691,"."),t()()()(),i(3692,"tr",16)(3693,"td",17)(3694,"div",25)(3695,"span",26),e(3696," offsetMdColumns"),n(3697,"br"),t()()(),i(3698,"td",21)(3699,"code",45),e(3700,"number"),t()(),i(3701,"td",24)(3702,"em")(3703,"strong"),e(3704,"(opcional)"),t()(),i(3705,"p"),e(3706,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),i(3707,"p"),e(3708,"Deve ser usado o sistema de "),i(3709,"strong"),e(3710,"grid"),t(),e(3711," do PO (1 ... 12 colunas)."),t(),i(3712,"blockquote")(3713,"p"),e(3714,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(3715,"code"),e(3716,"offsetColumns"),t(),e(3717,"."),t()()()(),i(3718,"tr",16)(3719,"td",17)(3720,"div",25)(3721,"span",26),e(3722," offsetSmColumns"),n(3723,"br"),t()()(),i(3724,"td",21)(3725,"code",45),e(3726,"number"),t()(),i(3727,"td",24)(3728,"em")(3729,"strong"),e(3730,"(opcional)"),t()(),i(3731,"p"),e(3732,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),i(3733,"p"),e(3734,"Deve ser usado o sistema de "),i(3735,"strong"),e(3736,"grid"),t(),e(3737," do PO (1 ... 12 colunas)."),t(),i(3738,"blockquote")(3739,"p"),e(3740,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(3741,"code"),e(3742,"offsetColumns"),t(),e(3743,"."),t()()()(),i(3744,"tr",16)(3745,"td",17)(3746,"div",25)(3747,"span",26),e(3748," offsetXlColumns"),n(3749,"br"),t()()(),i(3750,"td",21)(3751,"code",45),e(3752,"number"),t()(),i(3753,"td",24)(3754,"em")(3755,"strong"),e(3756,"(opcional)"),t()(),i(3757,"p"),e(3758,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),i(3759,"p"),e(3760,"Deve ser usado o sistema de "),i(3761,"strong"),e(3762,"grid"),t(),e(3763," do PO (1 ... 12 colunas)."),t(),i(3764,"blockquote")(3765,"p"),e(3766,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(3767,"code"),e(3768,"offsetColumns"),t(),e(3769,"."),t()()()(),i(3770,"tr",16)(3771,"td",17)(3772,"div",25)(3773,"span",26),e(3774," onError"),n(3775,"br"),t()()(),i(3776,"td",21)(3777,"code",44),e(3778,"Function"),t()(),i(3779,"td",24)(3780,"em")(3781,"strong"),e(3782,"(opcional)"),t()(),i(3783,"p"),e(3784,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),t(),i(3785,"blockquote")(3786,"p"),e(3787,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),i(3788,"code"),e(3789,"HttpErrorResponse"),t(),e(3790,"."),t()(),i(3791,"p")(3792,"strong"),e(3793,"Componente compat\xEDvel"),t(),e(3794,": "),i(3795,"code"),e(3796,"po-upload"),t()()()(),i(3797,"tr",16)(3798,"td",17)(3799,"div",25)(3800,"span",26),e(3801," onSuccess"),n(3802,"br"),t()()(),i(3803,"td",21)(3804,"code",44),e(3805,"Function"),t()(),i(3806,"td",24)(3807,"em")(3808,"strong"),e(3809,"(opcional)"),t()(),i(3810,"p"),e(3811,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),t(),i(3812,"blockquote")(3813,"p"),e(3814,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),i(3815,"code"),e(3816,"HttpResponse"),t(),e(3817,"."),t()(),i(3818,"p")(3819,"strong"),e(3820,"Componente compat\xEDvel"),t(),e(3821,": "),i(3822,"code"),e(3823,"po-upload"),t()()()(),i(3824,"tr",16)(3825,"td",17)(3826,"div",25)(3827,"span",26),e(3828," onUpload"),n(3829,"br"),t()()(),i(3830,"td",21)(3831,"code",44),e(3832,"Function"),t()(),i(3833,"td",24)(3834,"em")(3835,"strong"),e(3836,"(opcional)"),t()(),i(3837,"p"),e(3838,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),t(),i(3839,"pre")(3840,"code"),e(3841,`event.data = {id: 'id do usu\xE1rio'};
`),t()(),i(3842,"p")(3843,"strong"),e(3844,"Componente compat\xEDvel"),t(),e(3845,": "),i(3846,"code"),e(3847,"po-upload"),t()()()(),i(3848,"tr",16)(3849,"td",17)(3850,"div",25)(3851,"span",26),e(3852," optional"),n(3853,"br"),t()()(),i(3854,"td",21)(3855,"code",29),e(3856,"boolean"),t()(),i(3857,"td",24)(3858,"em")(3859,"strong"),e(3860,"(opcional)"),t()(),i(3861,"p"),e(3862,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),i(3863,"blockquote")(3864,"p"),e(3865,"A indica\xE7\xE3o n\xE3o ser\xE1 exibida, se:"),t()(),i(3866,"ul")(3867,"li"),e(3868,"O campo for "),i(3869,"code"),e(3870,"required"),t(),e(3871,", ou;"),t(),i(3872,"li"),e(3873,"N\xE3o possuir "),i(3874,"code"),e(3875,"help"),t(),e(3876," e "),i(3877,"code"),e(3878,"label"),t(),e(3879,"."),t()()()(),i(3880,"tr",16)(3881,"td",17)(3882,"div",25)(3883,"span",26),e(3884," options"),n(3885,"br"),t()()(),i(3886,"td",21)(3887,"code",32),e(3888,"Array<string> "),t(),i(3889,"code",68),e(3890," Array<PoSelectOption> "),t(),i(3891,"code",69),e(3892," Array<PoMultiselectOption> "),t(),i(3893,"code",70),e(3894," Array<PoCheckboxGroupOption> "),t(),i(3895,"code",71),e(3896," Array<any>"),t()(),i(3897,"td",24)(3898,"em")(3899,"strong"),e(3900,"(opcional)"),t()(),i(3901,"p"),e(3902,"Lista de op\xE7\xF5es que ser\xE3o exibidos em um componente, podendo selecionar uma op\xE7\xE3o."),t(),i(3903,"p")(3904,"strong"),e(3905,"Componentes compat\xEDveis:"),t(),i(3906,"code"),e(3907,"po-select"),t(),e(3908,", "),i(3909,"code"),e(3910,"po-radio-group"),t(),e(3911,", "),i(3912,"code"),e(3913,"po-checkbox-group"),t(),e(3914,", "),i(3915,"code"),e(3916,"po-multiselect"),t(),e(3917,"."),t()()(),i(3918,"tr",16)(3919,"td",17)(3920,"div",25)(3921,"span",26),e(3922," optionsMulti"),n(3923,"br"),t()()(),i(3924,"td",21)(3925,"code",29),e(3926,"boolean"),t()(),i(3927,"td",24)(3928,"em")(3929,"strong"),e(3930,"(opcional)"),t()(),i(3931,"p"),e(3932,"Permite que o usu\xE1rio fa\xE7a m\xFAltipla sele\xE7\xE3o dentro da lista de op\xE7\xF5es."),t()()(),i(3933,"tr",16)(3934,"td",17)(3935,"div",25)(3936,"span",26),e(3937," optionsService"),n(3938,"br"),t()()(),i(3939,"td",21)(3940,"code",27),e(3941,"string "),t(),i(3942,"code",72),e(3943," PoComboFilter "),t(),i(3944,"code",73),e(3945," PoMultiselectFilter"),t()(),i(3946,"td",24)(3947,"em")(3948,"strong"),e(3949,"(opcional)"),t()(),i(3950,"p"),e(3951,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),i(3952,"strong"),e(3953,"Importante"),t()(),i(3954,"blockquote")(3955,"p"),e(3956,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),i(3957,"a",7),e(3958,"guia de API do PO UI"),t(),e(3959,"."),t()()()(),i(3960,"tr",16)(3961,"td",17)(3962,"div",25)(3963,"span",26),e(3964," order"),n(3965,"br"),t()()(),i(3966,"td",21)(3967,"code",45),e(3968,"number"),t()(),i(3969,"td",24)(3970,"em")(3971,"strong"),e(3972,"(opcional)"),t()(),i(3973,"p"),e(3974,"Informa a ordem de exibi\xE7\xE3o do campo."),t(),i(3975,"p"),e(3976,"Exemplo de utiliza\xE7\xE3o:"),t(),i(3977,"p")(3978,"code"),e(3979,"[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];"),t()(),i(3980,"p"),e(3981,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),i(3982,"code"),e(3983,"[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];"),t()(),i(3984,"p"),e(3985,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),t(),i(3986,"p"),e(3987,"Campos sem "),i(3988,"code"),e(3989,"order"),t(),e(3990,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),t()()(),i(3991,"tr",16)(3992,"td",17)(3993,"div",25)(3994,"span",26),e(3995," params"),n(3996,"br"),t()()(),i(3997,"td",21)(3998,"code",33),e(3999,"any"),t()(),i(4e3,"td",24)(4001,"em")(4002,"strong"),e(4003,"(opcional)"),t()(),i(4004,"p"),e(4005,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca usados pelos componentes "),i(4006,"code"),e(4007,"po-lookup"),t(),e(4008,` e
`),i(4009,"code"),e(4010,"po-combo"),t(),e(4011,"."),t(),i(4012,"p"),e(4013,"Por exemplo, para o par\xE2metro "),i(4014,"code"),e(4015,"{ age: 23 }"),t(),e(4016," a URL da requisi\xE7\xE3o ficaria:"),t(),i(4017,"p")(4018,"code"),e(4019,"url + ?age=23&filter=Peter"),t()()()(),i(4020,"tr",16)(4021,"td",17)(4022,"div",25)(4023,"span",26),e(4024," pattern"),n(4025,"br"),t()()(),i(4026,"td",21)(4027,"code",27),e(4028,"string"),t()(),i(4029,"td",24)(4030,"em")(4031,"strong"),e(4032,"(opcional)"),t()(),i(4033,"p"),e(4034,"Regex para valida\xE7\xE3o do campo."),t(),i(4035,"p")(4036,"strong"),e(4037,"Componentes compat\xEDveis:"),t(),i(4038,"code"),e(4039,"po-input"),t(),e(4040,", "),i(4041,"code"),e(4042,"po-password"),t(),e(4043,"."),t()()(),i(4044,"tr",16)(4045,"td",17)(4046,"div",25)(4047,"span",26),e(4048," placeholder"),n(4049,"br"),t()()(),i(4050,"td",21)(4051,"code",27),e(4052,"string"),t()(),i(4053,"td",24)(4054,"em")(4055,"strong"),e(4056,"(opcional)"),t()(),i(4057,"p"),e(4058,"Mensagem que ser\xE1 exibida enquanto o campo n\xE3o estiver preenchido."),t()()(),i(4059,"tr",16)(4060,"td",17)(4061,"div",25)(4062,"span",26),e(4063," placeholderSearch"),n(4064,"br"),t()()(),i(4065,"td",21)(4066,"code",27),e(4067,"string"),t()(),i(4068,"td",24)(4069,"em")(4070,"strong"),e(4071,"(opcional)"),t()(),i(4072,"p"),e(4073,"Placeholder do campo de pesquisa do "),i(4074,"code"),e(4075,"po-multiselect"),t(),e(4076,"."),t(),i(4077,"blockquote")(4078,"p"),e(4079,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),t()()()(),i(4080,"tr",16)(4081,"td",17)(4082,"div",25)(4083,"span",26),e(4084," property"),n(4085,"br"),t()()(),i(4086,"td",21)(4087,"code",27),e(4088,"string"),t()(),i(4089,"td",24)(4090,"p"),e(4091,"Nome de refer\xEAncia do campo."),t()()(),i(4092,"tr",16)(4093,"td",17)(4094,"div",25)(4095,"span",26),e(4096," range"),n(4097,"br"),t()()(),i(4098,"td",21)(4099,"code",29),e(4100,"boolean"),t()(),i(4101,"td",24)(4102,"em")(4103,"strong"),e(4104,"(opcional)"),t()(),i(4105,"p"),e(4106,"O controle passa a permitir a entrada de um intervalo ao inv\xE9s de um \xFAnico valor."),t(),i(4107,"blockquote")(4108,"p"),e(4109,"Atualmente essa propriedade est\xE1 dispon\xEDvel apenas para o tipo 'date' e 'dateTime'."),t()()()(),i(4110,"tr",16)(4111,"td",17)(4112,"div",25)(4113,"span",26),e(4114," readonly"),n(4115,"br"),t()()(),i(4116,"td",21)(4117,"code",29),e(4118,"boolean"),t()(),i(4119,"td",24)(4120,"em")(4121,"strong"),e(4122,"(opcional)"),t()(),i(4123,"p"),e(4124,"Indica que o campo ser\xE1 somente leitura."),t(),i(4125,"p")(4126,"strong"),e(4127,"Componentes compat\xEDveis:"),t(),i(4128,"code"),e(4129,"po-datepicker"),t(),e(4130,", "),i(4131,"code"),e(4132,"po-datepicker-range"),t(),e(4133,", "),i(4134,"code"),e(4135,"po-input"),t(),e(4136,", "),i(4137,"code"),e(4138,"po-number"),t(),e(4139,", "),i(4140,"code"),e(4141,"po-decimal"),t(),e(4142,", "),i(4143,"code"),e(4144,"po-select"),t(),e(4145,", "),i(4146,"code"),e(4147,"po-textarea"),t(),e(4148,", "),i(4149,"code"),e(4150,"po-password"),t()()()(),i(4151,"tr",16)(4152,"td",17)(4153,"div",25)(4154,"span",26),e(4155," removeInitialFilter"),n(4156,"br"),t()()(),i(4157,"td",21)(4158,"code",29),e(4159,"boolean"),t()(),i(4160,"td",24)(4161,"em")(4162,"strong"),e(4163,"(opcional)"),t()(),i(4164,"p"),e(4165,"Define que o filtro no primeiro clique ser\xE1 removido."),t(),i(4166,"blockquote")(4167,"p"),e(4168,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),t()(),i(4169,"p")(4170,"strong"),e(4171,"Componente compat\xEDvel"),t(),e(4172,": "),i(4173,"code"),e(4174,"po-combo"),t()()()(),i(4175,"tr",16)(4176,"td",17)(4177,"div",25)(4178,"span",26),e(4179," required"),n(4180,"br"),t()()(),i(4181,"td",21)(4182,"code",29),e(4183,"boolean"),t()(),i(4184,"td",24)(4185,"em")(4186,"strong"),e(4187,"(opcional)"),t()(),i(4188,"p"),e(4189,"Define a obrigatoriedade do campo."),t()()(),i(4190,"tr",16)(4191,"td",17)(4192,"div",25)(4193,"span",26),e(4194," requiredFieldErrorMessage"),n(4195,"br"),t()()(),i(4196,"td",21)(4197,"code",29),e(4198,"boolean"),t()(),i(4199,"td",24)(4200,"em")(4201,"strong"),e(4202,"(opcional)"),t()(),i(4203,"p"),e(4204,"Exibe a mensagem setada na propriedade "),i(4205,"code"),e(4206,"errorMessage"),t(),e(4207," se o campo estiver vazio e for requerido."),t(),i(4208,"blockquote")(4209,"p"),e(4210,"Necess\xE1rio que a propriedade "),i(4211,"code"),e(4212,"required"),t(),e(4213," esteja habilitada."),t()(),i(4214,"p")(4215,"strong"),e(4216,"Componentes compat\xEDveis:"),t(),i(4217,"code"),e(4218,"po-datepicker"),t(),e(4219,", "),i(4220,"code"),e(4221,"po-input"),t(),e(4222,", "),i(4223,"code"),e(4224,"po-number"),t(),e(4225,", "),i(4226,"code"),e(4227,"po-decimal"),t(),e(4228,", "),i(4229,"code"),e(4230,"po-password"),t(),e(4231,"."),t()()(),i(4232,"tr",16)(4233,"td",17)(4234,"div",25)(4235,"span",26),e(4236," restrictions"),n(4237,"br"),t()()(),i(4238,"td",21)(4239,"code",74),e(4240,"PoUploadFileRestrictions"),t()(),i(4241,"td",24)(4242,"em")(4243,"strong"),e(4244,"(opcional)"),t()(),i(4245,"p"),e(4246,"Objeto que segue a defini\xE7\xE3o da interface "),i(4247,"code"),e(4248,"PoUploadFileRestrictions"),t(),e(4249,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),t(),i(4250,"p")(4251,"strong"),e(4252,"Componente compat\xEDvel"),t(),e(4253,": "),i(4254,"code"),e(4255,"po-upload"),t()()()(),i(4256,"tr",16)(4257,"td",17)(4258,"div",25)(4259,"span",26),e(4260," rows"),n(4261,"br"),t()()(),i(4262,"td",21)(4263,"code",45),e(4264,"number"),t()(),i(4265,"td",24)(4266,"em")(4267,"strong"),e(4268,"(opcional)"),t()(),i(4269,"p"),e(4270,"Quantidade de linhas exibidas no "),i(4271,"code"),e(4272,"po-textarea"),t(),e(4273,"."),t()()(),i(4274,"tr",16)(4275,"td",17)(4276,"div",25)(4277,"span",26),e(4278," searchService"),n(4279,"br"),t()()(),i(4280,"td",21)(4281,"code",27),e(4282,"string "),t(),i(4283,"code",34),e(4284," PoLookupFilter"),t()(),i(4285,"td",24)(4286,"em")(4287,"strong"),e(4288,"(opcional)"),t()(),i(4289,"p"),e(4290,"Servi\xE7o que ser\xE1 utilizado para realizar a busca avan\xE7ada. Pode ser utilizado em conjunto com a propriedade "),i(4291,"code"),e(4292,"columns"),t(),e(4293,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),i(4294,"strong"),e(4295,"Importante:"),t()(),i(4296,"blockquote")(4297,"p"),e(4298,"Caso utilizar a propriedade "),i(4299,"code"),e(4300,"optionsService"),t(),e(4301,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),i(4302,"a",7),e(4303,"guia de API do PO UI"),t(),e(4304,"."),t()()()(),i(4305,"tr",16)(4306,"td",17)(4307,"div",25)(4308,"span",26),e(4309," secret"),n(4310,"br"),t()()(),i(4311,"td",21)(4312,"code",29),e(4313,"boolean"),t()(),i(4314,"td",24)(4315,"em")(4316,"strong"),e(4317,"(opcional)"),t()(),i(4318,"p"),e(4319,"Esconde a informa\xE7\xE3o estilo "),i(4320,"em"),e(4321,"password"),t(),e(4322,", pode ser utilizado quando o tipo de dado for "),i(4323,"em"),e(4324,"string"),t(),e(4325,"."),t()()(),i(4326,"tr",16)(4327,"td",17)(4328,"div",25)(4329,"span",26),e(4330," showRequired"),n(4331,"br"),t()()(),i(4332,"td",21)(4333,"code",29),e(4334,"boolean"),t()(),i(4335,"td",24)(4336,"em")(4337,"strong"),e(4338,"(opcional)"),t()(),i(4339,"p"),e(4340,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),i(4341,"blockquote")(4342,"p"),e(4343,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),i(4344,"ul")(4345,"li"),e(4346,"N\xE3o possuir "),i(4347,"code"),e(4348,"p-help"),t(),e(4349," e/ou "),i(4350,"code"),e(4351,"p-label"),t(),e(4352,"."),t()()()(),i(4353,"tr",16)(4354,"td",17)(4355,"div",25)(4356,"span",26),e(4357," showThumbnail"),n(4358,"br"),t()()(),i(4359,"td",21)(4360,"code",29),e(4361,"boolean"),t()(),i(4362,"td",24)(4363,"em")(4364,"strong"),e(4365,"(opcional)"),t()(),i(4366,"p"),e(4367,"Exibe a pr\xE9-visualiza\xE7\xE3o de imagens ao anex\xE1-las."),t(),i(4368,"blockquote")(4369,"p"),e(4370,"Propriedade funciona apenas em arquivos de formato de imagem ("),i(4371,"code"),e(4372,".png"),t(),e(4373,", "),i(4374,"code"),e(4375,".jpg"),t(),e(4376,", "),i(4377,"code"),e(4378,".jpeg"),t(),e(4379," e "),i(4380,"code"),e(4381,".gif"),t(),e(4382,")."),t()(),i(4383,"p")(4384,"strong"),e(4385,"Componente compat\xEDvel"),t(),e(4386,": "),i(4387,"code"),e(4388,"po-upload"),t()()()(),i(4389,"tr",16)(4390,"td",17)(4391,"div",25)(4392,"span",26),e(4393," size"),n(4394,"br"),t()()(),i(4395,"td",21)(4396,"code",27),e(4397,"string"),t()(),i(4398,"td",24)(4399,"em")(4400,"strong"),e(4401,"(opcional)"),t()(),i(4402,"p"),e(4403,"Define o tamanho dos componentes de formul\xE1rio no template conforme suas respectivas documenta\xE7\xF5es:"),t(),i(4404,"ul")(4405,"li")(4406,"code"),e(4407,"small"),t(),e(4408,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(4409,"li")(4410,"code"),e(4411,"medium"),t(),e(4412,": aplica a medida medium de cada componente."),t(),i(4413,"li")(4414,"code"),e(4415,"large"),t(),e(4416,": aplica a medida large de cada componente (dispon\xEDvel para "),i(4417,"code"),e(4418,"po-checkbox"),t(),e(4419," e "),i(4420,"code"),e(4421,"po-radio-group"),t(),e(4422,")."),i(4423,"blockquote")(4424,"p"),e(4425,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(4426,"code"),e(4427,"medium"),t(),e(4428,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(4429,"a",40),e(4430,"po-theme"),t(),e(4431,"."),t()()()()()(),i(4432,"tr",16)(4433,"td",17)(4434,"div",25)(4435,"span",26),e(4436," sort"),n(4437,"br"),t()()(),i(4438,"td",21)(4439,"code",29),e(4440,"boolean"),t()(),i(4441,"td",24)(4442,"em")(4443,"strong"),e(4444,"(opcional)"),t()(),i(4445,"p"),e(4446,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),t(),i(4447,"p")(4448,"strong"),e(4449,"Componentes compat\xEDveis:"),t(),i(4450,"code"),e(4451,"po-combo"),t(),e(4452,", po-multiselect"),t()()(),i(4453,"tr",16)(4454,"td",17)(4455,"div",25)(4456,"span",26),e(4457," step"),n(4458,"br"),t()()(),i(4459,"td",21)(4460,"code",45),e(4461,"number"),t()(),i(4462,"td",24)(4463,"em")(4464,"strong"),e(4465,"(opcional)"),t()(),i(4466,"p"),e(4467,"Intervalo utilizado no "),i(4468,"code"),e(4469,"po-number"),t(),e(4470,"."),t()()(),i(4471,"tr",16)(4472,"td",17)(4473,"div",25)(4474,"span",26),e(4475," thousandMaxlength"),n(4476,"br"),t()()(),i(4477,"td",21)(4478,"code",45),e(4479,"number"),t()(),i(4480,"td",24)(4481,"em")(4482,"strong"),e(4483,"(opcional)"),t()(),i(4484,"p"),e(4485,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal. O valor m\xE1ximo permitido \xE9 13"),t(),i(4486,"blockquote")(4487,"p"),e(4488,"Esta propriedade s\xF3 pode ser utilizada quando o "),i(4489,"code"),e(4490,"type"),t(),e(4491," for "),i(4492,"em"),e(4493,"currency"),t(),e(4494," ou "),i(4495,"em"),e(4496,"decimal"),t(),e(4497,"."),t()()()(),i(4498,"tr",16)(4499,"td",17)(4500,"div",25)(4501,"span",26),e(4502," type"),n(4503,"br"),t()()(),i(4504,"td",21)(4505,"code",27),e(4506,"string "),t(),i(4507,"code",75),e(4508," PoDynamicFieldType"),t()(),i(4509,"td",24)(4510,"em")(4511,"strong"),e(4512,"(opcional)"),t()(),i(4513,"p"),e(4514,"Tipo do valor campo."),t(),i(4515,"p"),e(4516,"Valores v\xE1lidos:"),t(),i(4517,"ul")(4518,"li")(4519,"code"),e(4520,"boolean"),t(),e(4521,": Valores "),i(4522,"em"),e(4523,"booleanos"),t(),e(4524,"."),t(),i(4525,"li")(4526,"code"),e(4527,"currency"),t(),e(4528,": Valores monet\xE1rios."),t(),i(4529,"li")(4530,"code"),e(4531,"decimal"),t(),e(4532,": Valores decimais."),t(),i(4533,"li")(4534,"code"),e(4535,"date"),t(),e(4536,": Valores de datas."),i(4537,"ul")(4538,"li"),e(4539,"Aceita os tipos "),i(4540,"strong"),e(4541,"string"),t(),e(4542," e "),i(4543,"strong"),e(4544,"Date"),t(),e(4545,` padr\xE3o do Javascript,
por exemplo: `),i(4546,"code"),e(4547,"'2017-11-28'"),t(),e(4548," ou "),i(4549,"code"),e(4550,"new Date(2017, 10, 28)"),t(),e(4551,"."),t()()(),i(4552,"li")(4553,"code"),e(4554,"dateTime"),t(),e(4555,": Valor de data com hor\xE1rio."),i(4556,"ul")(4557,"li"),e(4558,"Aceita o tipo "),i(4559,"em"),e(4560,"string"),t(),e(4561," no formato "),i(4562,"strong"),e(4563,"ISO-8601"),t(),e(4564," extendido "),i(4565,"strong"),e(4566,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),t(),e(4567,`
e o tipo `),i(4568,"strong"),e(4569,"Date"),t(),e(4570," padr\xE3o do Javascript, por exemplo: "),i(4571,"code"),e(4572,"'2017-11-28T00:00:00-02:00'"),t(),e(4573," ou "),i(4574,"code"),e(4575,"new Date(2017, 10, 28)"),t(),e(4576,"."),t()()(),i(4577,"li")(4578,"code"),e(4579,"number"),t(),e(4580,": Valores num\xE9ricos."),t(),i(4581,"li")(4582,"code"),e(4583,"string"),t(),e(4584,": Textos."),t(),i(4585,"li")(4586,"code"),e(4587,"time"),t(),e(4588,": Valor do hor\xE1rio."),i(4589,"ul")(4590,"li"),e(4591,"Aceita o tipo "),i(4592,"strong"),e(4593,"string"),t(),e(4594," nos formatos "),i(4595,"strong"),e(4596,"'HH:mm:ss'"),t(),e(4597," ou "),i(4598,"strong"),e(4599,"'HH:mm:ss.ffffff'"),t(),e(4600,", por exemplo: "),i(4601,"code"),e(4602,"'23:12:45'"),t(),e(4603,"."),t()()()()()(),i(4604,"tr",16)(4605,"td",17)(4606,"div",25)(4607,"span",26),e(4608," url"),n(4609,"br"),t()()(),i(4610,"td",21)(4611,"code",27),e(4612,"string"),t()(),i(4613,"td",24)(4614,"em")(4615,"strong"),e(4616,"(opcional)"),t()(),i(4617,"p"),e(4618,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),t(),i(4619,"p")(4620,"strong"),e(4621,"Componente compat\xEDvel"),t(),e(4622,": "),i(4623,"code"),e(4624,"po-upload"),t()()()(),i(4625,"tr",16)(4626,"td",17)(4627,"div",25)(4628,"span",26),e(4629," validate"),n(4630,"br"),t()()(),i(4631,"td",21)(4632,"code",27),e(4633,"string "),t(),i(4634,"code",44),e(4635," Function"),t()(),i(4636,"td",24)(4637,"em")(4638,"strong"),e(4639,"(opcional)"),t()(),i(4640,"p"),e(4641,"Fun\xE7\xE3o ou servi\xE7o para validar as "),i(4642,"strong"),e(4643,"mudan\xE7as do campo"),t(),e(4644,"."),t(),i(4645,"ul")(4646,"li"),e(4647,"A propriedade aceita os seguintes tipos:"),t()(),i(4648,"ul")(4649,"li")(4650,"strong"),e(4651,"String"),t(),e(4652,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),i(4653,"code"),e(4654,"POST"),t(),e(4655,"."),t(),i(4656,"li")(4657,"strong"),e(4658,"Function"),t(),e(4659,": M\xE9todo que ser\xE1 executado."),t()(),i(4660,"p"),e(4661,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),i(4662,"code"),e(4663,"PoDynamicFormFieldChanged"),t(),e(4664,":"),t(),i(4665,"p")(4666,"code"),e(4667,"{ property: 'property name', value: 'new value' }"),t()(),i(4668,"p"),e(4669,"O retorno desta fun\xE7\xE3o deve ser do tipo "),i(4670,"a",76),e(4671,"PoDynamicFormFieldValidation"),t(),e(4672,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),t(),i(4673,"pre")(4674,"code"),e(4675,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),t()(),i(4676,"p"),e(4677,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),i(4678,"code"),e(4679,"bind"),t(),e(4680,`, por exemplo:
`),i(4681,"code"),e(4682,"{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }"),t()()()(),i(4683,"tr",16)(4684,"td",17)(4685,"div",25)(4686,"span",26),e(4687," visible"),n(4688,"br"),t()()(),i(4689,"td",21)(4690,"code",29),e(4691,"boolean"),t()(),i(4692,"td",24)(4693,"em")(4694,"strong"),e(4695,"(opcional)"),t()(),i(4696,"p"),e(4697,"Indica se o campo ser\xE1 vis\xEDvel."),t()()()(),i(4698,"h4",43)(4699,"code",5),e(4700,"PoLookupColumn"),t()(),i(4701,"div",2)(4702,"p"),e(4703,"Interface para configura\xE7\xE3o das colunas do po-lookup."),t()(),i(4704,"h4",12),e(4705,"Propriedades"),t(),i(4706,"table",13)(4707,"tr",14)(4708,"th",15),e(4709,"Nome"),t(),i(4710,"th",15),e(4711,"Tipo"),t(),i(4712,"th",15),e(4713,"Descri\xE7\xE3o"),t()(),i(4714,"tr",16)(4715,"td",17)(4716,"div",25)(4717,"span",26),e(4718," fieldLabel"),n(4719,"br"),t()()(),i(4720,"td",21)(4721,"code",29),e(4722,"boolean"),t()(),i(4723,"td",24)(4724,"em")(4725,"strong"),e(4726,"(opcional)"),t()(),i(4727,"p"),e(4728,"Indica que a coluna ser\xE1 utilizada como valor do campo e como filtro dentro da modal."),t(),i(4729,"p"),e(4730,`Se houver mais de uma configura\xE7\xE3o habilitada, \xE9 exibido os valores no campo concatenados separados
por um tra\xE7o("-"). Por exemplo: "Joinville - SC".`),t(),i(4731,"p"),e(4732,`Importante
Esta configura\xE7\xE3o se torna obsoleta caso os atributos `),i(4733,"code"),e(4734,"p-field-format"),t(),e(4735," ou "),i(4736,"code"),e(4737,"p-field-label"),t(),e(4738," forem configurados no componente."),t()()(),i(4739,"tr",16)(4740,"td",17)(4741,"div",25)(4742,"span",26),e(4743," format"),n(4744,"br"),t()()(),i(4745,"td",21)(4746,"code",27),e(4747,"string"),t()(),i(4748,"td",24)(4749,"em")(4750,"strong"),e(4751,"(opcional)"),t()(),i(4752,"p"),e(4753,"Formato de exibi\xE7\xE3o do valor da coluna:"),t(),i(4754,"ul")(4755,"li"),e(4756,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),t(),i(4757,"li"),e(4758,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
valor padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),t()()()(),i(4759,"tr",16)(4760,"td",17)(4761,"div",25)(4762,"span",26),e(4763," label"),n(4764,"br"),t()()(),i(4765,"td",21)(4766,"code",27),e(4767,"string"),t()(),i(4768,"td",24)(4769,"em")(4770,"strong"),e(4771,"(opcional)"),t()(),i(4772,"p"),e(4773,"Texto para t\xEDtulo da coluna."),t(),i(4774,"p"),e(4775,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(4776,"em"),e(4777,"label"),t(),e(4778," o valor da propriedade "),i(4779,"em"),e(4780,"property"),t(),e(4781," com a primeira letra em mai\xFAsculo."),t()()(),i(4782,"tr",16)(4783,"td",17)(4784,"div",25)(4785,"span",26),e(4786," property"),n(4787,"br"),t()()(),i(4788,"td",21)(4789,"code",27),e(4790,"string"),t()(),i(4791,"td",24)(4792,"em")(4793,"strong"),e(4794,"(opcional)"),t()(),i(4795,"p"),e(4796,"Nome identificador da coluna."),t()()(),i(4797,"tr",16)(4798,"td",17)(4799,"div",25)(4800,"span",26),e(4801," type"),n(4802,"br"),t()()(),i(4803,"td",21)(4804,"code",27),e(4805,"string"),t()(),i(4806,"td",24)(4807,"em")(4808,"strong"),e(4809,"(opcional)"),t()(),i(4810,"p"),e(4811,"Tipo da coluna:"),t(),i(4812,"ul")(4813,"li"),e(4814,"string (padr\xE3o): textos"),t(),i(4815,"li"),e(4816,"number: valores num\xE9ricos"),t(),i(4817,"li"),e(4818,"date: data"),t(),i(4819,"li"),e(4820,"currency: valores monet\xE1rios"),t(),i(4821,"li"),e(4822,"dateTime: data e hora"),t()()()(),i(4823,"tr",16)(4824,"td",17)(4825,"div",25)(4826,"span",26),e(4827," width"),n(4828,"br"),t()()(),i(4829,"td",21)(4830,"code",27),e(4831,"string"),t()(),i(4832,"td",24)(4833,"em")(4834,"strong"),e(4835,"(opcional)"),t()(),i(4836,"p"),e(4837,"A largura da coluna pode ser informada em pixels ou porcentagem. Exemplo: '100px' ou '20%'"),t()()()(),i(4838,"h4",43)(4839,"code",5),e(4840,"PoLookupFilter"),t()(),i(4841,"div",2)(4842,"p"),e(4843,"Define o tipo de busca utilizado no po-lookup."),t()(),i(4844,"h4",12),e(4845,"M\xE9todos"),t(),i(4846,"table",41)(4847,"tr",16)(4848,"th",42)(4849,"div",25)(4850,"h4")(4851,"span",26),e(4852," getFilteredItems "),t()()()()(),i(4853,"tr",24)(4854,"td",24)(4855,"p"),e(4856,`M\xE9todo que ser\xE1 disparado ao filtrar a lista de itens ou carregar mais resultados no componente, deve-se retornar
um `),i(4857,"em"),e(4858,"Observable"),t(),e(4859," com a resposta da API no formato da interface "),i(4860,"code"),e(4861,"PoLookupResponseApi"),t(),e(4862,"."),t()()()(),i(4863,"h5")(4864,"b"),e(4865,"Par\xE2metros"),t()(),i(4866,"table",13)(4867,"tr",14)(4868,"th",15),e(4869,"Nome"),t(),i(4870,"th",15),e(4871,"Tipo"),t(),i(4872,"th",15),e(4873,"Descri\xE7\xE3o"),t()(),i(4874,"tr",16)(4875,"td",17),e(4876," params"),t(),i(4877,"td",21)(4878,"code",77),e(4879," PoLookupFilteredItemsParams "),t()(),i(4880,"td",24)(4881,"p"),e(4882,"Objeto enviado por par\xE2metro que implementa a interface "),i(4883,"code"),e(4884,"PoLookupFilteredItemsParams"),t(),e(4885,"."),t()()()(),n(4886,"br"),i(4887,"table",41)(4888,"tr",16)(4889,"th",42)(4890,"div",25)(4891,"h4")(4892,"span",26),e(4893," getObjectByValue "),t()()()()(),i(4894,"tr",24)(4895,"td",24)(4896,"p"),e(4897,"M\xE9todo respons\xE1vel por enviar um valor que ser\xE1 buscado no servi\xE7o."),t(),i(4898,"p"),e(4899,`Caso a funcionalidade de m\xFAltipla sele\xE7\xE3o estver habilitada, o parametro value ser\xE1 enviado como uma lista de valores
e o observable deve retornar uma lista de objetos.`),t()()()(),i(4900,"h5")(4901,"b"),e(4902,"Par\xE2metros"),t()(),i(4903,"table",13)(4904,"tr",14)(4905,"th",15),e(4906,"Nome"),t(),i(4907,"th",15),e(4908,"Tipo"),t(),i(4909,"th",15),e(4910,"Descri\xE7\xE3o"),t()(),i(4911,"tr",16)(4912,"td",17),e(4913," value"),t(),i(4914,"td",21)(4915,"code",27),e(4916," string "),t(),i(4917,"code",71),e(4918," Array<any> "),t()(),i(4919,"td",24)(4920,"p"),e(4921,"Valor \xFAnico a ser buscado na fonte de dados."),t()()(),i(4922,"tr",16)(4923,"td",17),e(4924," filterParams"),t(),i(4925,"td",21)(4926,"code",77),e(4927," any "),t()(),i(4928,"td",24)(4929,"p"),e(4930,"Valor informado atrav\xE9s da propriedade "),i(4931,"code"),e(4932,"p-filter-params"),t(),e(4933,"."),t()()()(),n(4934,"br"),i(4935,"h4",43)(4936,"code",5),e(4937,"PoLookupFilteredItemsParams"),t()(),i(4938,"div",2)(4939,"p"),e(4940,"Interface do objeto enviado como par\xE2metro na fun\xE7\xE3o "),i(4941,"code"),e(4942,"getFilteredItems"),t(),e(4943,"."),t()(),i(4944,"h4",12),e(4945,"Propriedades"),t(),i(4946,"table",13)(4947,"tr",14)(4948,"th",15),e(4949,"Nome"),t(),i(4950,"th",15),e(4951,"Tipo"),t(),i(4952,"th",15),e(4953,"Descri\xE7\xE3o"),t()(),i(4954,"tr",16)(4955,"td",17)(4956,"div",25)(4957,"span",26),e(4958," advancedFilters"),n(4959,"br"),t()()(),i(4960,"td",21)(4961,"code",78),e(4962,`{ [key: string]: any;
}`),t()(),i(4963,"td",24)(4964,"em")(4965,"strong"),e(4966,"(opcional)"),t()(),i(4967,"p"),e(4968,"Valores informados nos campos de busca avan\xE7ada, que ser\xE3o utilizados para filtrar a lista de itens."),t()()(),i(4969,"tr",16)(4970,"td",17)(4971,"div",25)(4972,"span",26),e(4973," filter"),n(4974,"br"),t()()(),i(4975,"td",21)(4976,"code",27),e(4977,"string"),t()(),i(4978,"td",24)(4979,"em")(4980,"strong"),e(4981,"(opcional)"),t()(),i(4982,"p"),e(4983,"Conte\xFAdo utilizado para filtrar a lista de itens."),t()()(),i(4984,"tr",16)(4985,"td",17)(4986,"div",25)(4987,"span",26),e(4988," filterParams"),n(4989,"br"),t()()(),i(4990,"td",21)(4991,"code",33),e(4992,"any"),t()(),i(4993,"td",24)(4994,"em")(4995,"strong"),e(4996,"(opcional)"),t()(),i(4997,"p"),e(4998,"Valor informado atrav\xE9s da propriedade "),i(4999,"code"),e(5e3,"p-filter-params"),t(),e(5001,"."),t()()(),i(5002,"tr",16)(5003,"td",17)(5004,"div",25)(5005,"span",26),e(5006," order"),n(5007,"br"),t()()(),i(5008,"td",21)(5009,"code",27),e(5010,"string"),t()(),i(5011,"td",24)(5012,"em")(5013,"strong"),e(5014,"(opcional)"),t()(),i(5015,"p"),e(5016,"Coluna que est\xE1 sendo ordenada na tabela."),t(),i(5017,"ul")(5018,"li"),e(5019,"Coluna decrescente ser\xE1 informada da seguinte forma: "),i(5020,"code"),e(5021,"-<colunaOrdenada>"),t(),e(5022,", por exemplo "),i(5023,"code"),e(5024,"-name"),t(),e(5025,"."),t(),i(5026,"li"),e(5027,"Coluna ascendente ser\xE1 informada da seguinte forma: "),i(5028,"code"),e(5029,"<colunaOrdenada>"),t(),e(5030,", por exemplo "),i(5031,"code"),e(5032,"name"),t(),e(5033,"."),t()()()(),i(5034,"tr",16)(5035,"td",17)(5036,"div",25)(5037,"span",26),e(5038," page"),n(5039,"br"),t()()(),i(5040,"td",21)(5041,"code",45),e(5042,"number"),t()(),i(5043,"td",24)(5044,"em")(5045,"strong"),e(5046,"(opcional)"),t()(),i(5047,"p"),e(5048,"Controla a pagina\xE7\xE3o dos dados e recebe valor automaticamente a cada clique no bot\xE3o 'Carregar mais resultados'."),t()()(),i(5049,"tr",16)(5050,"td",17)(5051,"div",25)(5052,"span",26),e(5053," pageSize"),n(5054,"br"),t()()(),i(5055,"td",21)(5056,"code",45),e(5057,"number"),t()(),i(5058,"td",24)(5059,"em")(5060,"strong"),e(5061,"(opcional)"),t()(),i(5062,"p"),e(5063,"Quantidade de itens retornados cada vez que o servi\xE7o \xE9 chamado, por padr\xE3o \xE9 10."),t()()()(),i(5064,"h4",43)(5065,"code",5),e(5066,"PoLookupLiterals"),t()(),i(5067,"div",2)(5068,"p"),e(5069,"Interface para defini\xE7\xE3o das literais usadas no "),i(5070,"code"),e(5071,"po-lookup"),t(),e(5072,"."),t()(),i(5073,"h4",12),e(5074,"Propriedades"),t(),i(5075,"table",13)(5076,"tr",14)(5077,"th",15),e(5078,"Nome"),t(),i(5079,"th",15),e(5080,"Tipo"),t(),i(5081,"th",15),e(5082,"Descri\xE7\xE3o"),t()(),i(5083,"tr",16)(5084,"td",17)(5085,"div",25)(5086,"span",26),e(5087," clean"),n(5088,"br"),t()()(),i(5089,"td",21)(5090,"code",27),e(5091,"string"),t()(),i(5092,"td",24)(5093,"em")(5094,"strong"),e(5095,"(opcional)"),t()(),i(5096,"p"),e(5097,"Texto usado no leitor de tela para acessibilidade. Aplica-se ao \xEDcone de limpar."),t()()(),i(5098,"tr",16)(5099,"td",17)(5100,"div",25)(5101,"span",26),e(5102," modalAdvancedSearch"),n(5103,"br"),t()()(),i(5104,"td",21)(5105,"code",27),e(5106,"string"),t()(),i(5107,"td",24)(5108,"em")(5109,"strong"),e(5110,"(opcional)"),t()(),i(5111,"p"),e(5112,"Texto do link de busca avan\xE7ada."),t(),i(5113,"p"),e(5114,`Importante
Caso seja passado uma literal muito comprida poder\xE1 quebrar o layout.`),t()()(),i(5115,"tr",16)(5116,"td",17)(5117,"div",25)(5118,"span",26),e(5119," modalAdvancedSearchPrimaryActionLabel"),n(5120,"br"),t()()(),i(5121,"td",21)(5122,"code",27),e(5123,"string"),t()(),i(5124,"td",24)(5125,"em")(5126,"strong"),e(5127,"(opcional)"),t()(),i(5128,"p"),e(5129,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal de busca avan\xE7ada."),t()()(),i(5130,"tr",16)(5131,"td",17)(5132,"div",25)(5133,"span",26),e(5134," modalAdvancedSearchSecondaryActionLabel"),n(5135,"br"),t()()(),i(5136,"td",21)(5137,"code",27),e(5138,"string"),t()(),i(5139,"td",24)(5140,"em")(5141,"strong"),e(5142,"(opcional)"),t()(),i(5143,"p"),e(5144,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal de busca avan\xE7ada."),t()()(),i(5145,"tr",16)(5146,"td",17)(5147,"div",25)(5148,"span",26),e(5149," modalAdvancedSearchTitle"),n(5150,"br"),t()()(),i(5151,"td",21)(5152,"code",27),e(5153,"string"),t()(),i(5154,"td",24)(5155,"em")(5156,"strong"),e(5157,"(opcional)"),t()(),i(5158,"p"),e(5159,"Texto exibido no t\xEDtulo da modal de busca avan\xE7ada."),t()()(),i(5160,"tr",16)(5161,"td",17)(5162,"div",25)(5163,"span",26),e(5164," modalDisclaimerGroupTitle"),n(5165,"br"),t()()(),i(5166,"td",21)(5167,"code",27),e(5168,"string"),t()(),i(5169,"td",24)(5170,"em")(5171,"strong"),e(5172,"(opcional)"),t()(),i(5173,"p"),e(5174,"Texto exibido no t\xEDtulo do disclaimer."),t()()(),i(5175,"tr",16)(5176,"td",17)(5177,"div",25)(5178,"span",26),e(5179," modalPlaceholder"),n(5180,"br"),t()()(),i(5181,"td",21)(5182,"code",27),e(5183,"string"),t()(),i(5184,"td",24)(5185,"em")(5186,"strong"),e(5187,"(opcional)"),t()(),i(5188,"p"),e(5189,"Texto exibido no placeholder do input da modal."),t()()(),i(5190,"tr",16)(5191,"td",17)(5192,"div",25)(5193,"span",26),e(5194," modalPrimaryActionLabel"),n(5195,"br"),t()()(),i(5196,"td",21)(5197,"code",27),e(5198,"string"),t()(),i(5199,"td",24)(5200,"em")(5201,"strong"),e(5202,"(opcional)"),t()(),i(5203,"p"),e(5204,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal."),t()()(),i(5205,"tr",16)(5206,"td",17)(5207,"div",25)(5208,"span",26),e(5209," modalSecondaryActionLabel"),n(5210,"br"),t()()(),i(5211,"td",21)(5212,"code",27),e(5213,"string"),t()(),i(5214,"td",24)(5215,"em")(5216,"strong"),e(5217,"(opcional)"),t()(),i(5218,"p"),e(5219,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal."),t()()(),i(5220,"tr",16)(5221,"td",17)(5222,"div",25)(5223,"span",26),e(5224," modalTableLoadMoreData"),n(5225,"br"),t()()(),i(5226,"td",21)(5227,"code",27),e(5228,"string"),t()(),i(5229,"td",24)(5230,"em")(5231,"strong"),e(5232,"(opcional)"),t()(),i(5233,"p"),e(5234,"Label do "),i(5235,"code"),e(5236,"button"),t(),e(5237," que deve carregar mais resultados na tabela, ou seja, exibir mais itens."),t()()(),i(5238,"tr",16)(5239,"td",17)(5240,"div",25)(5241,"span",26),e(5242," modalTableLoadingData"),n(5243,"br"),t()()(),i(5244,"td",21)(5245,"code",27),e(5246,"string"),t()(),i(5247,"td",24)(5248,"em")(5249,"strong"),e(5250,"(opcional)"),t()(),i(5251,"p"),e(5252,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na tabela."),t()()(),i(5253,"tr",16)(5254,"td",17)(5255,"div",25)(5256,"span",26),e(5257," modalTableNoColumns"),n(5258,"br"),t()()(),i(5259,"td",21)(5260,"code",27),e(5261,"string"),t()(),i(5262,"td",24)(5263,"em")(5264,"strong"),e(5265,"(opcional)"),t()(),i(5266,"p"),e(5267,"Texto exibido quando n\xE3o existem colunas definidas para a tabela."),t()()(),i(5268,"tr",16)(5269,"td",17)(5270,"div",25)(5271,"span",26),e(5272," modalTableNoData"),n(5273,"br"),t()()(),i(5274,"td",21)(5275,"code",27),e(5276,"string"),t()(),i(5277,"td",24)(5278,"em")(5279,"strong"),e(5280,"(opcional)"),t()(),i(5281,"p"),e(5282,"Texto exibido quando n\xE3o existem itens para serem exibidos na tabela."),t()()(),i(5283,"tr",16)(5284,"td",17)(5285,"div",25)(5286,"span",26),e(5287," modalTitle"),n(5288,"br"),t()()(),i(5289,"td",21)(5290,"code",27),e(5291,"string"),t()(),i(5292,"td",24)(5293,"em")(5294,"strong"),e(5295,"(opcional)"),t()(),i(5296,"p"),e(5297,"Texto exibido no t\xEDtulo da modal."),t()()(),i(5298,"tr",16)(5299,"td",17)(5300,"div",25)(5301,"span",26),e(5302," search"),n(5303,"br"),t()()(),i(5304,"td",21)(5305,"code",27),e(5306,"string"),t()(),i(5307,"td",24)(5308,"em")(5309,"strong"),e(5310,"(opcional)"),t()(),i(5311,"p"),e(5312,"Texto usado no leitor de tela para acessibilidade. Aplica-se ao \xEDcone de pesquisa."),t()()()(),i(5313,"h4",43)(5314,"code",5),e(5315,"PoLookupResponseApi"),t()(),i(5316,"div",2)(5317,"p"),e(5318,"Interface que representa a estrutura de resposta de uma cole\xE7\xE3o de itens. "),t()(),i(5319,"h4",12),e(5320,"Propriedades"),t(),i(5321,"table",13)(5322,"tr",14)(5323,"th",15),e(5324,"Nome"),t(),i(5325,"th",15),e(5326,"Tipo"),t(),i(5327,"th",15),e(5328,"Descri\xE7\xE3o"),t()(),i(5329,"tr",16)(5330,"td",17)(5331,"div",25)(5332,"span",26),e(5333," hasNext"),n(5334,"br"),t()()(),i(5335,"td",21)(5336,"code",29),e(5337,"boolean"),t()(),i(5338,"td",24)(5339,"p"),e(5340,"Indica se existe uma pr\xF3xima p\xE1gina com mais registros para aquela cole\xE7\xE3o de itens."),t()()(),i(5341,"tr",16)(5342,"td",17)(5343,"div",25)(5344,"span",26),e(5345," items"),n(5346,"br"),t()()(),i(5347,"td",21)(5348,"code",79),e(5349,"Array<object>"),t()(),i(5350,"td",24)(5351,"p"),e(5352,"Lista de itens retornados."),t()()()(),i(5353,"h3"),e(5354,"Enums"),t(),i(5355,"h4",4)(5356,"code",5),e(5357,"PoTableColumnSpacing"),t()(),i(5358,"div",2)(5359,"p"),e(5360,"Tipos de espa\xE7amento interno (padding) das c\xE9lulas ("),i(5361,"strong"),e(5362,"p-spacing"),t(),e(5363,") do po-table."),t()(),i(5364,"h4",12),e(5365,"Propriedades"),t(),i(5366,"table",13)(5367,"tr",14)(5368,"th",15),e(5369,"Nome"),t(),i(5370,"th",15),e(5371,"Descri\xE7\xE3o"),t()(),i(5372,"tr",16)(5373,"td",17)(5374,"div",25)(5375,"span",26),e(5376," ExtraSmall"),n(5377,"br"),t()()(),i(5378,"td",24)(5379,"p"),e(5380,"Espa\xE7amento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal)."),t()()(),i(5381,"tr",16)(5382,"td",17)(5383,"div",25)(5384,"span",26),e(5385," Small"),n(5386,"br"),t()()(),i(5387,"td",24)(5388,"p"),e(5389,"Espa\xE7amento pequeno: 0.5rem (vertical) x 1rem (horizontal)."),t()()(),i(5390,"tr",16)(5391,"td",17)(5392,"div",25)(5393,"span",26),e(5394," Medium"),n(5395,"br"),t()()(),i(5396,"td",24)(5397,"p"),e(5398,"Espa\xE7amento m\xE9dio: 0.75rem (vertical) x 1rem (horizontal)."),t()()(),i(5399,"tr",16)(5400,"td",17)(5401,"div",25)(5402,"span",26),e(5403," Large"),n(5404,"br"),t()()(),i(5405,"td",24)(5406,"p"),e(5407,"Espa\xE7amento grande: 1rem (vertical) x 1rem (horizontal)."),t()()()()())},dependencies:[y],encapsulation:2})}return a})();var Be=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=6;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||a)(ne(he),ne(fe))};static \u0275cmp=S({type:a,selectors:[["ng-component"]],standalone:!1,decls:11,vars:4,consts:[["p-title","Lookup",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,o){l&1&&(i(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),x("p-click",function(){return o.changeTab("doc")}),n(3,"sample-po-lookup-doc"),t(),i(4,"po-tab",3),x("p-click",function(){return o.changeTab("web")}),n(5,"sample-po-lookup-basic-view")(6,"sample-po-lookup-labs-view")(7,"sample-po-lookup-hero-view")(8,"sample-po-lookup-hero-reactive-form-view")(9,"sample-po-lookup-sw-films-view")(10,"sample-po-lookup-multiple-view"),t()()()),l&2&&(u("p-actions",o.actions),d(2),u("p-active",o.activeTab==="doc"),d(2),u("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"))},dependencies:[Le,C,k,qe,Te,_e,Oe,Ve,Ne,He],encapsulation:2})}return a})();var ct=[{path:"",component:Be}],Re=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=J({type:a});static \u0275inj=Q({imports:[le.forChild(ct),le]})}return a})();var Mi=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=J({type:a});static \u0275inj=Q({imports:[Fe,Re]})}return a})();export{Mi as DocPoLookupModule};
