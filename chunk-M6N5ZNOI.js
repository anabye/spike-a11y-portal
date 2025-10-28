import{o as y,p as Fe}from"./chunk-4LS3IIFX.js";import{Ab as k,Fa as ye,J as X,Ja as q,O as Ce,Q as Y,Sa as N,Ta as Pe,Xa as B,a as O,nb as Le,sa as Z,v as H,va as ke,za as ee,zb as C}from"./chunk-OGQO3MKC.js";import{Aa as u,Ac as ae,Cb as w,Da as P,Dc as T,E as de,Ec as I,Fc as K,Gc as A,Ha as se,Hc as z,Kc as be,La as i,Lc as ge,M as j,Ma as t,N as Q,Na as n,Nb as Se,Pc as ve,Q as h,Ra as $,Sa as x,Ta as ue,U as c,Uc as he,V as E,Wc as fe,Xa as oe,Yc as le,_b as V,a as G,bb as ce,c as me,cb as e,eb as L,gb as b,hb as g,ib as v,ja as d,jb as _,ka as ne,kb as U,lb as F,p as ie,qa as S,ra as J,rb as Ee,sb as xe,wa as pe}from"./chunk-KZJHT32G.js";var we=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","lookup","p-field-label","label","p-field-value","value","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","PO Lookup"]],template:function(l,o){l&1&&n(0,"po-lookup",0)},dependencies:[q],encapsulation:2})}return a})();var Ue=a=>({"docs-sample-code-tabs":a}),qe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup Basic"),t(),i(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-basic/sample-po-lookup-basic.component.html"),t(),i(13,"pre",7),e(14,`<po-lookup
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
`),t()()()()(),i(21,"div",10),n(22,"sample-po-lookup-basic"),t(),n(23,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,Ue,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,we],encapsulation:2})}return a})();var D=(()=>{class a{httpClient=h(V);url="https://po-sample-api.onrender.com/v1/heroes";getFilteredItems(r){let m=r,{filterParams:l,advancedFilters:o}=m,p=me(m,["filterParams","advancedFilters"]),s=G(G(G({},p),l),o);return this.httpClient.get(this.url,{params:s})}getObjectByValue(r){return this.httpClient.get(`${this.url}/${r}`)}static \u0275fac=function(l){return new(l||a)};static \u0275prov=j({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var Me=(()=>{class a{sampleFilterService=h(D);additionalHelpTooltip;columns;columnsName;customLiterals;event;fieldFormat;formatField;fieldLabel;fieldValue;filterService;help;label;literals;lookup;placeholder;properties;fieldErrorMessage;advancedFilters;customAdvancedFilters;size;spacing=ke.Medium;columnsOptions=[{value:"id",label:"Id"},{value:"name",label:"Name"},{value:"email",label:"Email"}];fieldLabelOptions=[{value:"label",label:"Label"},...this.columnsOptions];fieldValueOptions=[{value:"value",label:"Value"},...this.columnsOptions];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"infiniteScroll",label:"Infinite Scroll"},{value:"multiple",label:"Multiple"},{value:"autoHeight",label:"Auto Height"},{value:"hideColumnsManager",label:"Hide Columns Manager"},{value:"textWrap",label:"Text Wrap"},{value:"virtualScroll",label:"Virtual Sroll"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"}];columnsDefinition={id:{property:"id",label:"Id"},name:{property:"name",label:"Name"},email:{property:"email",label:"Email"}};typeSpacing=[{label:"ExtraSmall",value:"extraSmall"},{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(r){this.event=r}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}onFieldFormatChange(r){try{this.fieldFormat=JSON.parse(r)}catch{this.fieldFormat=void 0}}changeAdvancedFilters(){try{this.customAdvancedFilters=JSON.parse(this.advancedFilters)}catch{this.customAdvancedFilters=void 0}}restore(){this.additionalHelpTooltip="",this.columnsName=["id","name"],this.customLiterals=void 0,this.updateColumns(),this.fieldLabel="name",this.fieldValue="id",this.fieldFormat=void 0,this.formatField=void 0,this.event=void 0,this.filterService=void 0,this.label=void 0,this.literals=void 0,this.help=void 0,this.lookup=void 0,this.placeholder="",this.properties=[],this.fieldErrorMessage="",this.customAdvancedFilters=[],this.size="medium"}updateColumns(){this.columns=[],this.columnsName.forEach(r=>this.columns.push(this.columnsDefinition[r]))}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-labs"]],standalone:!1,features:[_([D])],decls:26,vars:52,consts:[["f","ngForm"],["name","lookup",3,"ngModelChange","p-change","p-error","p-keydown","p-selected","ngModel","p-additional-help-tooltip","p-advanced-filters","p-auto-height","p-clean","p-columns","p-disabled","p-field-format","p-field-label","p-filter-service","p-field-value","p-help","p-hide-columns-manager","p-infinite-scroll","p-label","p-literals","p-multiple","p-no-autocomplete","p-optional","p-placeholder","p-required","p-field-error-message","p-show-required","p-size","p-spacing","p-text-wrap","p-label-text-wrap","p-virtual-scroll","p-error-limit"],["p-no-border","true","p-no-padding","true"],[1,"po-row"],["p-label","Model",1,"po-md-12",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","columnsName","p-columns","3","p-label","Columns",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","fieldLabel","p-label","Field Label","p-required","",1,"po-md-6","po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","fieldValue","p-label","Field Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","filterService","p-clean","","p-help","https://po-sample-api.onrender.com/v1/people","p-label","Filter Service",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: { "modalTitle": "Select a register", "modalPrimaryActionLabel": "Select", "modalPlaceholder": "Search Value" }',"p-label","Literals",1,"po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","formatField","p-label","Field Format","p-help",'Ex.: ["id", "name"]',1,"po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","spacing","p-columns","4","p-help","Para aplicar o tamanho extraSmall, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).","p-label","Spacing",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","advancedFilters","p-help",'Ex.: [{"property":"name","divider":"PERSONAL DATA","required":true,"gridColumns":6},{"property":"id","optional":true,"gridColumns":6}]',"p-label","Advanced Filters","p-rows","4",1,"po-md-12","po-lg-12",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,o){if(l&1){let p=$();i(0,"po-lookup",1),v("ngModelChange",function(m){return c(p),g(o.lookup,m)||(o.lookup=m),E(m)}),x("p-change",function(){return c(p),E(o.changeEvent("p-change"))})("p-error",function(){return c(p),E(o.changeEvent("p-error"))})("p-keydown",function(){return c(p),E(o.changeEvent("p-keydown"))})("p-selected",function(){return c(p),E(o.changeEvent("p-selected"))}),t(),n(1,"po-divider"),i(2,"po-container",2)(3,"div",3),n(4,"po-info",4)(5,"po-info",5),t()(),n(6,"po-divider"),i(7,"form",null,0)(9,"po-input",6),v("ngModelChange",function(m){return c(p),g(o.label,m)||(o.label=m),E(m)}),t(),i(10,"po-checkbox-group",7),v("ngModelChange",function(m){return c(p),g(o.columnsName,m)||(o.columnsName=m),E(m)}),x("p-change",function(){return c(p),E(o.updateColumns())}),t(),i(11,"po-select",8),v("ngModelChange",function(m){return c(p),g(o.fieldLabel,m)||(o.fieldLabel=m),E(m)}),t(),i(12,"po-select",9),v("ngModelChange",function(m){return c(p),g(o.fieldValue,m)||(o.fieldValue=m),E(m)}),t(),i(13,"po-input",10),v("ngModelChange",function(m){return c(p),g(o.filterService,m)||(o.filterService=m),E(m)}),t(),i(14,"po-input",11),v("ngModelChange",function(m){return c(p),g(o.fieldErrorMessage,m)||(o.fieldErrorMessage=m),E(m)}),t(),i(15,"po-input",12),v("ngModelChange",function(m){return c(p),g(o.help,m)||(o.help=m),E(m)}),t(),i(16,"po-input",13),v("ngModelChange",function(m){return c(p),g(o.additionalHelpTooltip,m)||(o.additionalHelpTooltip=m),E(m)}),t(),i(17,"po-input",14),v("ngModelChange",function(m){return c(p),g(o.placeholder,m)||(o.placeholder=m),E(m)}),t(),i(18,"po-input",15),v("ngModelChange",function(m){return c(p),g(o.literals,m)||(o.literals=m),E(m)}),x("p-change",function(){return c(p),E(o.changeLiterals())}),t(),i(19,"po-input",16),v("ngModelChange",function(m){return c(p),g(o.formatField,m)||(o.formatField=m),E(m)}),x("p-change",function(m){return c(p),E(o.onFieldFormatChange(m))}),t(),i(20,"po-checkbox-group",17),v("ngModelChange",function(m){return c(p),g(o.properties,m)||(o.properties=m),E(m)}),t(),i(21,"po-radio-group",18),v("ngModelChange",function(m){return c(p),g(o.spacing,m)||(o.spacing=m),E(m)}),t(),i(22,"po-radio-group",19),v("ngModelChange",function(m){return c(p),g(o.size,m)||(o.size=m),E(m)}),t(),i(23,"po-textarea",20),v("ngModelChange",function(m){return c(p),g(o.advancedFilters,m)||(o.advancedFilters=m),E(m)}),x("p-change",function(){return c(p),E(o.changeAdvancedFilters())}),t(),i(24,"div",3)(25,"po-button",21),x("p-click",function(){return c(p),E(o.restore())}),t()()()}l&2&&(b("ngModel",o.lookup),u("p-additional-help-tooltip",o.additionalHelpTooltip)("p-advanced-filters",o.customAdvancedFilters)("p-auto-height",o.properties.includes("autoHeight"))("p-clean",o.properties.includes("clean"))("p-columns",o.columns)("p-disabled",o.properties.includes("disabled"))("p-field-format",o.fieldFormat)("p-field-label",o.fieldLabel)("p-filter-service",o.filterService||o.sampleFilterService)("p-field-value",o.fieldValue)("p-help",o.help)("p-hide-columns-manager",o.properties.includes("hideColumnsManager"))("p-infinite-scroll",o.properties.includes("infiniteScroll"))("p-label",o.label)("p-literals",o.customLiterals)("p-multiple",o.properties.includes("multiple"))("p-no-autocomplete",o.properties.includes("noAutocomplete"))("p-optional",o.properties.includes("optional"))("p-placeholder",o.placeholder)("p-required",o.properties.includes("required"))("p-field-error-message",o.fieldErrorMessage)("p-show-required",o.properties.includes("showRequired"))("p-size",o.size)("p-spacing",o.spacing)("p-text-wrap",o.properties.includes("textWrap"))("p-label-text-wrap",o.properties==null?null:o.properties.includes("labelTextWrap"))("p-virtual-scroll",o.properties.includes("virtualScroll"))("p-error-limit",o.properties==null?null:o.properties.includes("errorLimit")),d(4),u("p-value",o.lookup),d(),u("p-value",o.event),d(4),b("ngModel",o.label),d(),b("ngModel",o.columnsName),u("p-options",o.columnsOptions),d(),b("ngModel",o.fieldLabel),u("p-options",o.fieldLabelOptions),d(),b("ngModel",o.fieldValue),u("p-options",o.fieldValueOptions),d(),b("ngModel",o.filterService),d(),b("ngModel",o.fieldErrorMessage),d(),b("ngModel",o.help),d(),b("ngModel",o.additionalHelpTooltip),d(),b("ngModel",o.placeholder),d(),b("ngModel",o.literals),d(),b("ngModel",o.formatField),d(),b("ngModel",o.properties),u("p-options",o.propertiesOptions),d(),b("ngModel",o.spacing),u("p-options",o.typeSpacing),d(),b("ngModel",o.size),u("p-options",o.sizeOptions),d(),b("ngModel",o.advancedFilters))},dependencies:[z,T,I,A,K,H,X,O,Ce,Y,ye,q,N,Pe,B],encapsulation:2})}return a})();var Je=a=>({"docs-sample-code-tabs":a}),Te=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-labs-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup Labs"),t(),i(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-labs/sample-po-lookup-labs.component.html"),t(),i(13,"pre",7),e(14,`<po-lookup
  name="lookup"
  [(ngModel)]="lookup"
  [p-additional-help-tooltip]="additionalHelpTooltip"
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

  additionalHelpTooltip: string;
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
    this.additionalHelpTooltip = '';
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
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-labs"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,Je,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,Me],encapsulation:2})}return a})();var Ke=()=>({modalTitle:"Heroes available for mission"}),De=(()=>{class a{service=h(D);notification=h(Z);hero;vehicle;columns=[{property:"nickname",label:"Hero"},{property:"name",label:"Name"}];vehicles=[{label:"Airplane",value:"airplane"},{label:"Boat",value:"boat"},{label:"Car",value:"car"},{label:"Helicopter",value:"helicopter"},{label:"Motorcycle",value:"motorcycle"},{label:"Rocket",value:"rocket"},{label:"Spaceship",value:"spaceship"},{label:"Submarine",value:"submarine"},{label:"Truck",value:"truck"}];advancedFilters=[{property:"nickname",divider:"Hero Informations",optional:!0,gridColumns:6,label:"Hero"},{property:"name",optional:!0,gridColumns:6}];fieldFormat(r){return`${r.nickname} - ${r.label}`}startMission(){this.hero.length%2===0?this.notification.success(`Mission started with hero ${this.hero} ${this.vehicle?"with vehicle: "+this.vehicle:""}.`):this.notification.error(`Choose another hero because ${this.hero} is in other mission.`),this.hero=void 0,this.vehicle=void 0}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-hero"]],standalone:!1,features:[_([D])],decls:10,vars:11,consts:[["f","ngForm"],[1,"po-row"],["p-label","New mission found","p-value","Objective: Stop an asteroid collision on Earth",1,"po-lg-6"],["name","hero","p-field-label","label","p-field-value","label","p-help","Select hero for mission","p-label","Hero","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-columns","p-field-format","p-filter-service","p-hide-columns-manager","p-advanced-filters","p-literals"],["name","vehicle","p-help","Select a vehicle for the hero","p-label","Vehicle","p-placeholder","None",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Start Mission",1,"po-md-6",3,"p-click","p-disabled"]],template:function(l,o){if(l&1){let p=$();i(0,"div",1),n(1,"po-info",2),t(),n(2,"po-divider"),i(3,"form",null,0)(5,"div",1)(6,"po-lookup",3),v("ngModelChange",function(m){return c(p),g(o.hero,m)||(o.hero=m),E(m)}),t(),i(7,"po-select",4),v("ngModelChange",function(m){return c(p),g(o.vehicle,m)||(o.vehicle=m),E(m)}),t()(),i(8,"div",1)(9,"po-button",5),x("p-click",function(){return c(p),E(o.startMission())}),t()()()}if(l&2){let p=ce(4);d(6),b("ngModel",o.hero),u("p-columns",o.columns)("p-field-format",o.fieldFormat)("p-filter-service",o.service)("p-hide-columns-manager",!0)("p-advanced-filters",o.advancedFilters)("p-literals",U(10,Ke)),d(),b("ngModel",o.vehicle),u("p-options",o.vehicles),d(2),u("p-disabled",p.form.invalid||p.form.pending)}},dependencies:[z,T,I,A,K,H,O,q,N,B],encapsulation:2})}return a})();var Ye=a=>({"docs-sample-code-tabs":a}),_e=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-hero-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Hero"),t(),i(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-hero/sample-po-lookup-hero.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
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
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-hero"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,Ye,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,De],encapsulation:2})}return a})();var et=()=>["nickname","label"],tt=()=>({modalTitle:"Heroes available for mission"}),Ae=(()=>{class a{service=h(D);notification=h(Z);formBuilder=h(ve);formMission;columns=[{property:"nickname",label:"Hero"},{property:"name",label:"Name"}];vehicles=[{label:"Airplane",value:"airplane"},{label:"Boat",value:"boat"},{label:"Car",value:"car"},{label:"Helicopter",value:"helicopter"},{label:"Motorcycle",value:"motorcycle"},{label:"Rocket",value:"rocket"},{label:"Spaceship",value:"spaceship"},{label:"Submarine",value:"submarine"},{label:"Truck",value:"truck"}];ngOnInit(){this.formMission=this.formBuilder.group({hero:[null,ae.required],vehicle:[null,ae.required]})}fieldFormat(r){return`${r.nickname} - ${r.label}`}startMission(){let r=this.formMission.get("hero").value,l=this.formMission.get("vehicle").value;r.length%2===0?this.notification.success(`Mission started with hero ${r} ${l?"with vehicle: "+l:""}.`):this.notification.error(`Choose another hero because ${r} is in other mission.`),this.formMission.reset()}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-hero-reactive-form"]],standalone:!1,features:[_([D])],decls:9,vars:9,consts:[[1,"po-row"],["p-label","New mission found","p-value","Objective: Stop an asteroid collision on Earth",1,"po-lg-6"],[3,"formGroup"],["name","hero","formControlName","hero","p-field-label","label","p-field-value","label","p-help","Select hero for mission","p-label","Hero","p-required","",1,"po-md-6",3,"p-columns","p-field-format","p-filter-service","p-literals"],["name","vehicle","formControlName","vehicle","p-help","Select a vehicle for the hero","p-label","Vehicle","p-placeholder","None",1,"po-md-6",3,"p-options"],["p-label","Start Mission",1,"po-md-6",3,"p-click","p-disabled"]],template:function(l,o){l&1&&(i(0,"div",0),n(1,"po-info",1),t(),n(2,"po-divider"),i(3,"form",2)(4,"div",0),n(5,"po-lookup",3)(6,"po-select",4),t(),i(7,"div",0)(8,"po-button",5),x("p-click",function(){return o.startMission()}),t()()()),l&2&&(d(3),u("formGroup",o.formMission),d(2),u("p-columns",o.columns)("p-field-format",U(7,et))("p-filter-service",o.service)("p-literals",U(8,tt)),d(),u("p-options",o.vehicles),d(2),u("p-disabled",o.formMission.invalid||o.formMission.pending))},dependencies:[z,T,I,be,ge,H,O,q,N,B],encapsulation:2})}return a})();var nt=a=>({"docs-sample-code-tabs":a}),Oe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-hero-reactive-form-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Hero Reactive Form"),t(),i(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
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
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-sw-films"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,rt,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,je],encapsulation:2})}return a})();var Ie=(()=>{class a{http=h(V);getHeroes(r){let l=r?.length?r.toString():r;return this.http.get(`https://po-sample-api.onrender.com/v1/heroes?value=${l}`).pipe(de("items"))}static \u0275fac=function(l){return new(l||a)};static \u0275prov=j({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var ze=(()=>{class a{service=h(Ie);loading=!1;heroes;multiLookup=[1495831666871,1405833068599];columns=[{property:"value",label:"id"},{property:"label",label:"Name"}];changeOptions(r){this.loading=!0,this.service.getHeroes(r).subscribe(l=>{this.heroes=l},l=>console.error(l),()=>this.loading=!1)}openLink(r){window.open(`http://google.com/search?q=${r}`,"_blank")}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-multiple"]],standalone:!1,decls:4,vars:8,consts:[[1,"po-row"],["name","lookup","p-field-label","label","p-field-value","value","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","Search a Hero",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-multiple"],[1,"po-md-6","po-mt-4"],[3,"p-columns","p-items","p-height","p-striped","p-hide-columns-manager","p-loading"]],template:function(l,o){l&1&&(i(0,"div",0)(1,"po-lookup",1),v("ngModelChange",function(s){return g(o.multiLookup,s)||(o.multiLookup=s),s}),x("p-change",function(s){return o.changeOptions(s)}),t(),i(2,"po-container",2),n(3,"po-table",3),t()()),l&2&&(d(),b("ngModel",o.multiLookup),u("p-multiple",!0),d(2),u("p-columns",o.columns)("p-items",o.heroes)("p-height",220)("p-striped",!0)("p-hide-columns-manager",!0)("p-loading",o.loading))},dependencies:[T,A,X,q,ee],encapsulation:2})}return a})();var pt=a=>({"docs-sample-code-tabs":a}),He=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-multiple-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Multiple"),t(),i(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-multiple/sample-po-lookup-multiple.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
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
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-multiple"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,pt,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,ze],encapsulation:2})}return a})();var Ne=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-doc"]],standalone:!1,decls:5388,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://angular.io/guide/form-validation#creating-asynchronous-validators"],["href","https://po-ui.io/guides/api"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","Array<PoLookupAdvancedFilter>"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Array<PoLookupColumn>"],["pan","",1,"docs-api-property-type","((value)","=>","string)"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoLookupFilter"],["href","https://tc39.es/ecma262/#sec-encodeuricomponent-uricomponent"],["pan","",1,"docs-api-property-type","PoLookupLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","number"],["href","/documentation/po-lookup"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","(file:","PoUploadFile)","=>","void"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","ForceBooleanComponentEnum"],["pan","",1,"docs-api-property-type","ForceOptionComponentEnum"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["pan","",1,"docs-api-property-type","PoDatepickerRangeLiterals"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption>"],["pan","",1,"docs-api-property-type","Array<PoCheckboxGroupOption>"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"],["href","documentation/po-dynamic-form#po-dynamic-form-field-validation"],["pan","",1,"docs-api-property-type"],["pan","",1,"docs-api-property-type","{","[key:","string]:","any;","}"],["pan","",1,"docs-api-property-type","Array<object>"]],template:function(l,o){l&1&&(i(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),i(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
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
`),t()(),i(275,"h4",12),e(276,"Propriedades"),t(),i(277,"table",13)(278,"tr",14)(279,"th",15),e(280,"Nome"),t(),i(281,"th",15),e(282,"Tipo"),t(),i(283,"th",15),e(284,"Padr\xE3o"),t(),i(285,"th",15),e(286,"Descri\xE7\xE3o"),t()(),i(287,"tr",16)(288,"td",17)(289,"div",18)(290,"span",19),e(291," (p-additional-help)"),n(292,"br"),t()(),i(293,"div",20),e(294,"Deprecated"),t()(),i(295,"td",21)(296,"code",22),e(297,"EventEmitter"),t()(),i(298,"td",23),e(299,"-"),t(),i(300,"td",24)(301,"em")(302,"strong"),e(303,"(opcional)"),t()(),i(304,"p"),e(305,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),i(306,"code"),e(307,"p-help"),t(),e(308,"."),t(),i(309,"blockquote")(310,"p"),e(311,"Essa propriedade est\xE1 "),i(312,"strong"),e(313,"depreciada"),t(),e(314," e ser\xE1 removida na vers\xE3o "),i(315,"code"),e(316,"23.x.x"),t(),e(317,". Recomendamos utilizar a propriedade "),i(318,"code"),e(319,"p-helper"),t(),e(320," que oferece mais recursos e flexibilidade."),t()()()(),i(321,"tr",16)(322,"td",17)(323,"div",25)(324,"span",26),e(325," p-additional-help-tooltip"),n(326,"br"),t()(),i(327,"div",20),e(328,"Deprecated"),t()(),i(329,"td",21)(330,"code",27),e(331,"string"),t()(),i(332,"td",23),e(333,"-"),t(),i(334,"td",24)(335,"em")(336,"strong"),e(337,"(opcional)"),t()(),i(338,"p"),e(339,"Exibe um \xEDcone de ajuda adicional ao "),i(340,"code"),e(341,"p-help"),t(),e(342,`, com o texto desta propriedade no tooltip.
Se o evento `),i(343,"code"),e(344,"p-additional-help"),t(),e(345,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),i(346,"strong"),e(347,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),i(348,"blockquote")(349,"p"),e(350,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),i(351,"blockquote")(352,"p"),e(353,"Essa propriedade est\xE1 "),i(354,"strong"),e(355,"depreciada"),t(),e(356," e ser\xE1 removida na vers\xE3o "),i(357,"code"),e(358,"23.x.x"),t(),e(359,". Recomendamos utilizar a propriedade "),i(360,"code"),e(361,"p-helper"),t(),e(362," que oferece mais recursos e flexibilidade."),t()()()(),i(363,"tr",16)(364,"td",17)(365,"div",25)(366,"span",26),e(367," p-advanced-filters"),n(368,"br"),t()()(),i(369,"td",21)(370,"code",28),e(371,"Array<PoLookupAdvancedFilter>"),t()(),i(372,"td",23),e(373,"-"),t(),i(374,"td",24)(375,"em")(376,"strong"),e(377,"(opcional)"),t()(),i(378,"p"),e(379,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),t(),i(380,"blockquote")(381,"p"),e(382,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),t()(),i(383,"p"),e(384,"Exemplo de URL com busca avan\xE7ada:"),t(),i(385,"pre")(386,"code"),e(387,`url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro
`),t()(),i(388,"p"),e(389,`Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula.
Exemplo:`),t(),i(390,"pre")(391,"code"),e(392,`url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan
`),t()()()(),i(393,"tr",16)(394,"td",17)(395,"div",25)(396,"span",26),e(397," p-append-in-body"),n(398,"br"),t()()(),i(399,"td",21)(400,"code",29),e(401,"boolean"),t()(),i(402,"td",23)(403,"p")(404,"code"),e(405,"false"),t()()(),i(406,"td",24)(407,"em")(408,"strong"),e(409,"(opcional)"),t()(),i(410,"p"),e(411,"Define que o tooltip ("),i(412,"code"),e(413,"p-additional-help-tooltip"),t(),e(414," e/ou "),i(415,"code"),e(416,"p-error-limit"),t(),e(417,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),i(418,"blockquote")(419,"p"),e(420,"Quando utilizado com "),i(421,"code"),e(422,"p-additional-help-tooltip"),t(),e(423,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),i(424,"tr",16)(425,"td",17)(426,"div",25)(427,"span",26),e(428," p-auto-focus"),n(429,"br"),t()()(),i(430,"td",21)(431,"code",29),e(432,"boolean"),t()(),i(433,"td",23)(434,"p")(435,"code"),e(436,"false"),t()()(),i(437,"td",24)(438,"em")(439,"strong"),e(440,"(opcional)"),t()(),i(441,"p"),e(442,"Aplica foco no elemento ao ser iniciado."),t(),i(443,"blockquote")(444,"p"),e(445,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),i(446,"tr",16)(447,"td",17)(448,"div",25)(449,"span",26),e(450," p-auto-height"),n(451,"br"),t()()(),i(452,"td",21)(453,"code",29),e(454,"boolean"),t()(),i(455,"td",23)(456,"p")(457,"code"),e(458,"false"),t()()(),i(459,"td",24)(460,"em")(461,"strong"),e(462,"(opcional)"),t()(),i(463,"p"),e(464,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo
com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis.`),t()()(),i(465,"tr",16)(466,"td",17)(467,"div",18)(468,"span",19),e(469," (p-change)"),n(470,"br"),t()()(),i(471,"td",21)(472,"code",22),e(473,"EventEmitter"),t()(),i(474,"td",23),e(475,"-"),t(),i(476,"td",24)(477,"em")(478,"strong"),e(479,"(opcional)"),t()(),i(480,"p"),e(481,"Evento que ser\xE1 disparado ao alterar o model. Por par\xE2metro ser\xE1 passado o novo valor."),t()()(),i(482,"tr",16)(483,"td",17)(484,"div",18)(485,"span",19),e(486," (p-change-visible-columns)"),n(487,"br"),t()()(),i(488,"td",21)(489,"code",22),e(490,"EventEmitter"),t()(),i(491,"td",23),e(492,"-"),t(),i(493,"td",24)(494,"em")(495,"strong"),e(496,"(opcional)"),t()(),i(497,"p"),e(498,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),t(),i(499,"p"),e(500,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t()()(),i(501,"tr",16)(502,"td",17)(503,"div",25)(504,"span",26),e(505," p-clean"),n(506,"br"),t()()(),i(507,"td",21)(508,"code",29),e(509,"boolean"),t()(),i(510,"td",23),e(511,"-"),t(),i(512,"td",24)(513,"p"),e(514,"Exibe um \xEDcone que permite limpar o campo."),t()()(),i(515,"tr",16)(516,"td",17)(517,"div",18)(518,"span",19),e(519," (p-restore-column-manager)"),n(520,"br"),t()()(),i(521,"td",21)(522,"code",22),e(523,"EventEmitter"),t()(),i(524,"td",23),e(525,"-"),t(),i(526,"td",24)(527,"em")(528,"strong"),e(529,"(opcional)"),t()(),i(530,"p"),e(531,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),t(),i(532,"p"),e(533,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t()()(),i(534,"tr",16)(535,"td",17)(536,"div",25)(537,"span",26),e(538," p-columns"),n(539,"br"),t()()(),i(540,"td",21)(541,"code",30),e(542,"Array<PoLookupColumn>"),t()(),i(543,"td",23),e(544,"-"),t(),i(545,"td",24)(546,"em")(547,"strong"),e(548,"(opcional)"),t()(),i(549,"p"),e(550,`Lista das colunas da tabela.
Essa propriedade deve receber um array de objetos que implementam a interface PoLookupColumn.`),t()()(),i(551,"tr",16)(552,"td",17)(553,"div",25)(554,"span",26),e(555," p-disabled"),n(556,"br"),t()()(),i(557,"td",21)(558,"code",29),e(559,"boolean"),t()(),i(560,"td",23)(561,"p"),e(562,"false"),t()(),i(563,"td",24)(564,"em")(565,"strong"),e(566,"(opcional)"),t()(),i(567,"p"),e(568,"Indica que o campo ser\xE1 desabilitado."),t()()(),i(569,"tr",16)(570,"td",17)(571,"div",25)(572,"span",26),e(573," p-error-limit"),n(574,"br"),t()()(),i(575,"td",21)(576,"code",29),e(577,"boolean"),t()(),i(578,"td",23)(579,"p")(580,"code"),e(581,"false"),t()()(),i(582,"td",24)(583,"em")(584,"strong"),e(585,"(opcional)"),t()(),i(586,"p"),e(587,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),i(588,"blockquote")(589,"p"),e(590,"Caso essa propriedade seja definida como "),i(591,"code"),e(592,"true"),t(),e(593,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),i(594,"tr",16)(595,"td",17)(596,"div",25)(597,"span",26),e(598," p-field-error-message"),n(599,"br"),t()()(),i(600,"td",21)(601,"code",27),e(602,"string"),t()(),i(603,"td",23),e(604,"-"),t(),i(605,"td",24)(606,"em")(607,"strong"),e(608,"(opcional)"),t()(),i(609,"p"),e(610,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),t(),i(611,"blockquote")(612,"p"),e(613,"Necess\xE1rio que a propriedade "),i(614,"code"),e(615,"p-required"),t(),e(616," esteja habilitada."),t()()()(),i(617,"tr",16)(618,"td",17)(619,"div",25)(620,"span",26),e(621," p-field-format"),n(622,"br"),t()()(),i(623,"td",21)(624,"code",31),e(625,"((value) => string) "),t(),i(626,"code",32),e(627," Array<string>"),t()(),i(628,"td",23),e(629,"-"),t(),i(630,"td",24)(631,"em")(632,"strong"),e(633,"(opcional)"),t()(),i(634,"p"),e(635,"Formato de exibi\xE7\xE3o do campo."),t(),i(636,"p"),e(637,"Recebe uma fun\xE7\xE3o que deve retornar uma "),i(638,"em"),e(639,"string"),t(),e(640," com o/os valores do objeto formatados para exibi\xE7\xE3o, por exemplo:"),t(),i(641,"pre")(642,"code"),e(643,"fieldFormat(obj) {\n  return `${obj.id} - ${obj.name}`;\n}\n"),t()(),i(644,"blockquote")(645,"p"),e(646,"Esta propriedade sobrep\xF5e o valor da propriedade "),i(647,"code"),e(648,"p-field-label"),t(),e(649," na descri\xE7\xE3o do campo."),t()(),i(650,"p"),e(651,"Pode-se informar uma lista de propriedades que deseja exibir como descri\xE7\xE3o do campo, Por exemplo:"),t(),i(652,"pre")(653,"code"),e(654,`<po-lookup
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
`),t()(),i(655,"blockquote")(656,"p"),e(657,"Ser\xE1 utilizado "),i(658,"code"),e(659,"-"),t(),e(660," como separador."),t()()()(),i(661,"tr",16)(662,"td",17)(663,"div",25)(664,"span",26),e(665," p-field-label"),n(666,"br"),t()()(),i(667,"td",21)(668,"code",27),e(669,"string"),t()(),i(670,"td",23),e(671,"-"),t(),i(672,"td",24)(673,"p"),e(674,"Indica a coluna que ser\xE1 utilizada como descri\xE7\xE3o do campo e como filtro dentro da janela."),t()()(),i(675,"tr",16)(676,"td",17)(677,"div",25)(678,"span",26),e(679," p-field-value"),n(680,"br"),t()()(),i(681,"td",21)(682,"code",27),e(683,"string"),t()(),i(684,"td",23),e(685,"-"),t(),i(686,"td",24)(687,"p"),e(688,"Indica a coluna que ser\xE1 utilizada como valor do campo."),t(),i(689,"blockquote")(690,"p"),e(691,"Aten\xE7\xE3o: Caso n\xE3o seja passada ou tenha o conte\xFAdo incorreto, n\xE3o ir\xE1 atualizar o model do formul\xE1rio."),t()()()(),i(692,"tr",16)(693,"td",17)(694,"div",25)(695,"span",26),e(696," p-filter-params"),n(697,"br"),t()()(),i(698,"td",21)(699,"code",33),e(700,"any"),t()(),i(701,"td",23),e(702,"-"),t(),i(703,"td",24)(704,"em")(705,"strong"),e(706,"(opcional)"),t()(),i(707,"p"),e(708,"Valor que ser\xE1 repassado como par\xE2metro para a URL ou aos m\xE9todos do servi\xE7o que implementam a interface "),i(709,"code"),e(710,"PoLookupFilter"),t(),e(711,"."),t()()(),i(712,"tr",16)(713,"td",17)(714,"div",25)(715,"span",26),e(716," p-filter-service"),n(717,"br"),t()()(),i(718,"td",21)(719,"code",27),e(720,"string "),t(),i(721,"code",34),e(722," PoLookupFilter"),t()(),i(723,"td",23),e(724,"-"),t(),i(725,"td",24)(726,"p"),e(727,`Servi\xE7o respons\xE1vel por buscar os dados da tabela na janela. Pode ser informado um servi\xE7o que implemente a interface
`),i(728,"code"),e(729,"PoLookupFilter"),t(),e(730," ou uma URL."),t(),i(731,"p"),e(732,"Quando utilizada uma URL de um servi\xE7o, ser\xE1 concatenada nesta URL o valor que deseja-se filtrar, por exemplo:"),t(),i(733,"pre")(734,"code"),e(735,`url + ?page=1&pageSize=20&filter=Peter
`),t()(),i(736,"p"),e(737,"Caso utilizar ordena\xE7\xE3o, a coluna ordenada ser\xE1 enviada atrav\xE9s do par\xE2metro "),i(738,"code"),e(739,"order"),t(),e(740,", por exemplo:"),t(),i(741,"ul")(742,"li")(743,"p"),e(744,"Coluna decrescente:"),t(),i(745,"pre")(746,"code"),e(747,`url + ?page=1&pageSize=20&filter=Peter&order=-name
`),t()()(),i(748,"li")(749,"p"),e(750,"Coluna ascendente:"),t(),i(751,"pre")(752,"code"),e(753,`url + ?page=1&pageSize=20&filter=Peter&order=name
`),t()()()(),i(754,"p"),e(755,"Se for definido a propriedade "),i(756,"code"),e(757,"p-filter-params"),t(),e(758,`, o mesmo tamb\xE9m ser\xE1 concatenado. Por exemplo, para o
par\xE2metro `),i(759,"code"),e(760,"{ age: 23 }"),t(),e(761," a URL ficaria:"),t(),i(762,"pre")(763,"code"),e(764,`url + ?page=1&pageSize=20&age=23&filter=Peter
`),t()(),i(765,"p"),e(766,"Ao iniciar o campo com valor, os registros ser\xE3o buscados da seguinte forma:"),t(),i(767,"pre")(768,"code"),e(769,`model = 1234;

GET url/1234
`),t()(),i(770,"p"),e(771,"Caso estiver com m\xFAltipla sele\xE7\xE3o habilitada:"),t(),i(772,"pre")(773,"code"),e(774,`model = [1234, 5678]

GET url?\${fieldValue}=1234,5678
`),t()(),i(775,"blockquote")(776,"p"),e(777,"Esta URL deve retornar e receber os dados no padr\xE3o de "),i(778,"a",7),e(779,"API do PO UI"),t(),e(780,` e utiliza os valores
definidos nas propriedades `),i(781,"code"),e(782,"p-field-label"),t(),e(783," e "),i(784,"code"),e(785,"p-field-value"),t(),e(786," para a constru\xE7\xE3o do "),i(787,"code"),e(788,"po-lookup"),t(),e(789,"."),t()(),i(790,"p"),e(791,"Caso o usu\xE1rio digite um valor e pressione a tecla "),i(792,"em"),e(793,"TAB"),t(),e(794,` para realizar a busca de um registro espec\xEDfico, o valor que se
deseja filtrar ser\xE1 codificado utilizando a fun\xE7\xE3o `),i(795,"a",35),e(796,"encodeURIComponent"),t(),e(797,`
e concatenado na URL da seguinte forma:`),t(),i(798,"pre")(799,"code"),e(800,`url/valor%20que%20se%20deseja%20filtrar
`),t()(),i(801,"blockquote")(802,"p"),e(803,"Quando informado um servi\xE7o que implemente a interface "),i(804,"code"),e(805,"PoLookupFilter"),t(),e(806," o tratamento de encoding do valor a ser filtrado ficar\xE1 a cargo do desenvolvedor."),t()()()(),i(807,"tr",16)(808,"td",17)(809,"div",25)(810,"span",26),e(811," p-help"),n(812,"br"),t()()(),i(813,"td",21)(814,"code",27),e(815,"string"),t()(),i(816,"td",23),e(817,"-"),t(),i(818,"td",24)(819,"em")(820,"strong"),e(821,"(opcional)"),t()(),i(822,"p"),e(823,"Texto de apoio do campo."),t()()(),i(824,"tr",16)(825,"td",17)(826,"div",25)(827,"span",26),e(828," p-hide-columns-manager"),n(829,"br"),t()()(),i(830,"td",21)(831,"code",29),e(832,"boolean"),t()(),i(833,"td",23)(834,"p")(835,"code"),e(836,"false"),t()()(),i(837,"td",24)(838,"em")(839,"strong"),e(840,"(opcional)"),t()(),i(841,"p"),e(842,"Permite que o gerenciador de colunas, respons\xE1vel pela defini\xE7\xE3o de quais colunas ser\xE3o exibidas, seja escondido."),t()()(),i(843,"tr",16)(844,"td",17)(845,"div",25)(846,"span",26),e(847," p-infinite-scroll"),n(848,"br"),t()()(),i(849,"td",21)(850,"code",29),e(851,"boolean"),t()(),i(852,"td",23)(853,"p")(854,"code"),e(855,"false"),t()()(),i(856,"td",24)(857,"em")(858,"strong"),e(859,"(opcional)"),t()(),i(860,"p"),e(861,"Ativa a funcionalidade de scroll infinito para a tabela exibida no retorno da consulta."),t()()(),i(862,"tr",16)(863,"td",17)(864,"div",18)(865,"span",19),e(866," (p-keydown)"),n(867,"br"),t()()(),i(868,"td",21)(869,"code",22),e(870,"EventEmitter"),t()(),i(871,"td",23),e(872,"-"),t(),i(873,"td",24)(874,"em")(875,"strong"),e(876,"(opcional)"),t()(),i(877,"p"),e(878,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),i(879,"code"),e(880,"KeyboardEvent"),t(),e(881," com informa\xE7\xF5es sobre a tecla."),t()()(),i(882,"tr",16)(883,"td",17)(884,"div",25)(885,"span",26),e(886," p-label"),n(887,"br"),t()()(),i(888,"td",21)(889,"code",27),e(890,"string"),t()(),i(891,"td",23),e(892,"-"),t(),i(893,"td",24)(894,"em")(895,"strong"),e(896,"(opcional)"),t()(),i(897,"p"),e(898,"Label do campo."),t(),i(899,"blockquote")(900,"p"),e(901,`Quando utilizar esta propriedade o seu valor ser\xE1 utilizado como t\xEDtulo da modal do componente caso n\xE3o tenha
sido definido um `),i(902,"code"),e(903,"modalTitle"),t(),e(904," na propriedade "),i(905,"code"),e(906,"p-literals"),t(),e(907,"."),t()()()(),i(908,"tr",16)(909,"td",17)(910,"div",25)(911,"span",26),e(912," p-label-text-wrap"),n(913,"br"),t()()(),i(914,"td",21)(915,"code",29),e(916,"boolean"),t()(),i(917,"td",23)(918,"p")(919,"code"),e(920,"false"),t()()(),i(921,"td",24)(922,"em")(923,"strong"),e(924,"(opcional)"),t()(),i(925,"p"),e(926,"Habilita a quebra autom\xE1tica do texto da propriedade "),i(927,"code"),e(928,"p-label"),t(),e(929,". Quando "),i(930,"code"),e(931,"p-label-text-wrap"),t(),e(932,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),i(933,"tr",16)(934,"td",17)(935,"div",25)(936,"span",26),e(937," p-literals"),n(938,"br"),t()()(),i(939,"td",21)(940,"code",36),e(941,"PoLookupLiterals"),t()(),i(942,"td",23),e(943,"-"),t(),i(944,"td",24)(945,"p"),e(946,"Objeto com as literais usadas no "),i(947,"code"),e(948,"po-lookup"),t(),e(949,"."),t(),i(950,"p"),e(951,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),t(),i(952,"pre")(953,"code"),e(954,`const customLiterals: PoLookupLiterals = {
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
`),t()(),i(955,"p"),e(956,"Ou passando apenas as literais que deseja customizar:"),t(),i(957,"pre")(958,"code"),e(959,`const customLiterals: PoLookupLiterals = {
  modalPrimaryActionLabel: 'Select'
};
`),t()(),i(960,"p"),e(961,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),t(),i(962,"pre")(963,"code"),e(964,`<po-lookup
  [p-literals]="customLiterals">
</po-lookup>
`),t()(),i(965,"blockquote")(966,"p"),e(967,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),i(968,"a",37)(969,"code"),e(970,"PoI18nService"),t()(),e(971," ou do browser."),t()()()(),i(972,"tr",16)(973,"td",17)(974,"div",25)(975,"span",26),e(976," p-multiple"),n(977,"br"),t()()(),i(978,"td",21)(979,"code",29),e(980,"boolean"),t()(),i(981,"td",23)(982,"p")(983,"code"),e(984,"false"),t()()(),i(985,"td",24)(986,"em")(987,"strong"),e(988,"(opcional)"),t()(),i(989,"p"),e(990,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),i(991,"blockquote")(992,"p"),e(993,"Quando habilitado o valor do campo passar\xE1 a ser uma lista de valores, por exemplo: "),i(994,"code"),e(995,"[ 12345, 67890 ]"),t()()()()(),i(996,"tr",16)(997,"td",17)(998,"div",25)(999,"span",26),e(1e3," name"),n(1001,"br"),t()()(),i(1002,"td",21)(1003,"code",27),e(1004,"string"),t()(),i(1005,"td",23),e(1006,"-"),t(),i(1007,"td",24)(1008,"p"),e(1009,"Nome e Id do componente."),t()()(),i(1010,"tr",16)(1011,"td",17)(1012,"div",25)(1013,"span",26),e(1014," p-no-autocomplete"),n(1015,"br"),t()()(),i(1016,"td",21)(1017,"code",29),e(1018,"boolean"),t()(),i(1019,"td",23)(1020,"p")(1021,"code"),e(1022,"false"),t()()(),i(1023,"td",24)(1024,"em")(1025,"strong"),e(1026,"(opcional)"),t()(),i(1027,"p"),e(1028,"Define a propriedade nativa "),i(1029,"code"),e(1030,"autocomplete"),t(),e(1031," do campo como "),i(1032,"code"),e(1033,"off"),t(),e(1034,"."),t()()(),i(1035,"tr",16)(1036,"td",17)(1037,"div",18)(1038,"span",19),e(1039," (p-error)"),n(1040,"br"),t()()(),i(1041,"td",21)(1042,"code",22),e(1043,"EventEmitter"),t()(),i(1044,"td",23),e(1045,"-"),t(),i(1046,"td",24)(1047,"p"),e(1048,`Evento ser\xE1 disparado quando ocorrer algum erro na requisi\xE7\xE3o de busca do item.
Ser\xE1 passado por par\xE2metro o objeto de erro retornado.`),t()()(),i(1049,"tr",16)(1050,"td",17)(1051,"div",25)(1052,"span",26),e(1053," p-optional"),n(1054,"br"),t()()(),i(1055,"td",21)(1056,"code",29),e(1057,"boolean"),t()(),i(1058,"td",23)(1059,"p")(1060,"code"),e(1061,"false"),t()()(),i(1062,"td",24)(1063,"em")(1064,"strong"),e(1065,"(opcional)"),t()(),i(1066,"p"),e(1067,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),i(1068,"blockquote")(1069,"p"),e(1070,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),i(1071,"ul")(1072,"li"),e(1073,"O campo conter "),i(1074,"code"),e(1075,"p-required"),t(),e(1076,";"),t(),i(1077,"li"),e(1078,"N\xE3o possuir "),i(1079,"code"),e(1080,"p-help"),t(),e(1081," e/ou "),i(1082,"code"),e(1083,"p-label"),t(),e(1084,"."),t()()()(),i(1085,"tr",16)(1086,"td",17)(1087,"div",25)(1088,"span",26),e(1089," p-placeholder"),n(1090,"br"),t()()(),i(1091,"td",21)(1092,"code",27),e(1093,"string"),t()(),i(1094,"td",23),e(1095,"-"),t(),i(1096,"td",24)(1097,"p"),e(1098,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),i(1099,"tr",16)(1100,"td",17)(1101,"div",25)(1102,"span",26),e(1103," p-helper"),n(1104,"br"),t()()(),i(1105,"td",21)(1106,"code",38),e(1107,"PoHelperOptions "),t(),i(1108,"code",27),e(1109," string"),t()(),i(1110,"td",23),e(1111,"-"),t(),i(1112,"td",24)(1113,"em")(1114,"strong"),e(1115,"(opcional)"),t()(),i(1116,"p"),e(1117,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label."),t(),i(1118,"blockquote")(1119,"p"),e(1120,"Caso o "),i(1121,"code"),e(1122,"p-label"),t(),e(1123,` n\xE3o esteja definido, o componente po-helper n\xE3o ser\xE1 exibido.
Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional (`),i(1124,"code"),e(1125,"p-additional-help-tooltip"),t(),e(1126," e "),i(1127,"code"),e(1128,"p-additional-help"),t(),e(1129,") ser\xE1 ignorado."),t()()()(),i(1130,"tr",16)(1131,"td",17)(1132,"div",25)(1133,"span",26),e(1134," p-required"),n(1135,"br"),t()()(),i(1136,"td",21)(1137,"code",29),e(1138,"boolean"),t()(),i(1139,"td",23)(1140,"p")(1141,"code"),e(1142,"false"),t()()(),i(1143,"td",24)(1144,"em")(1145,"strong"),e(1146,"(opcional)"),t()(),i(1147,"p"),e(1148,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),i(1149,"blockquote")(1150,"p"),e(1151,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),i(1152,"code"),e(1153,"(p-disabled)"),t(),e(1154,"."),t()()()(),i(1155,"tr",16)(1156,"td",17)(1157,"div",18)(1158,"span",19),e(1159," (p-selected)"),n(1160,"br"),t()()(),i(1161,"td",21)(1162,"code",22),e(1163,"EventEmitter"),t()(),i(1164,"td",23),e(1165,"-"),t(),i(1166,"td",24)(1167,"em")(1168,"strong"),e(1169,"(opcional)"),t()(),i(1170,"p"),e(1171,`Evento ser\xE1 disparado quando ocorrer alguma sele\xE7\xE3o.
Ser\xE1 passado por par\xE2metro o objeto com o valor selecionado.`),t()()(),i(1172,"tr",16)(1173,"td",17)(1174,"div",25)(1175,"span",26),e(1176," p-show-required"),n(1177,"br"),t()()(),i(1178,"td",21)(1179,"code",29),e(1180,"boolean"),t()(),i(1181,"td",23),e(1182,"-"),t(),i(1183,"td",24)(1184,"p"),e(1185,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE9 exibida."),t(),i(1186,"blockquote")(1187,"p"),e(1188,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),i(1189,"ul")(1190,"li"),e(1191,"N\xE3o possuir "),i(1192,"code"),e(1193,"p-help"),t(),e(1194," e/ou "),i(1195,"code"),e(1196,"p-label"),t(),e(1197,"."),t()()()(),i(1198,"tr",16)(1199,"td",17)(1200,"div",25)(1201,"span",26),e(1202," p-size"),n(1203,"br"),t()()(),i(1204,"td",21)(1205,"code",27),e(1206,"string"),t()(),i(1207,"td",23)(1208,"p")(1209,"code"),e(1210,"medium"),t()()(),i(1211,"td",24)(1212,"em")(1213,"strong"),e(1214,"(opcional)"),t()(),i(1215,"p"),e(1216,"Define o tamanho do componente:"),t(),i(1217,"ul")(1218,"li")(1219,"code"),e(1220,"small"),t(),e(1221,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(1222,"li")(1223,"code"),e(1224,"medium"),t(),e(1225,": altura do input como 44px."),t()(),i(1226,"blockquote")(1227,"p"),e(1228,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(1229,"code"),e(1230,"medium"),t(),e(1231,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(1232,"a",39),e(1233,"po-theme"),t(),e(1234,"."),t()()()(),i(1235,"tr",16)(1236,"td",17)(1237,"div",25)(1238,"span",26),e(1239," p-spacing"),n(1240,"br"),t()()(),i(1241,"td",21)(1242,"code",27),e(1243,"string"),t()(),i(1244,"td",23)(1245,"p")(1246,"code"),e(1247,"medium"),t()()(),i(1248,"td",24)(1249,"em")(1250,"strong"),e(1251,"(opcional)"),t()(),i(1252,"p"),e(1253,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do table dentro do modal. Os
valores permitidos s\xE3o definidos pelo enum `),i(1254,"strong"),e(1255,"PoTableColumnSpacing"),t(),e(1256,"."),t(),i(1257,"blockquote")(1258,"p"),e(1259,"Em n\xEDvel de acessibilidade "),i(1260,"strong"),e(1261,"AA"),t(),e(1262,", caso o valor de "),i(1263,"code"),e(1264,"p-spacing"),t(),e(1265," n\xE3o seja definido, o valor padr\xE3o ser\xE1 "),i(1266,"code"),e(1267,"extraSmall"),t(),e(1268,`
nos seguintes cen\xE1rios:`),t(),i(1269,"ul")(1270,"li"),e(1271,"Quando o valor de "),i(1272,"code"),e(1273,"p-size"),t(),e(1274," for "),i(1275,"code"),e(1276,"small"),t(),e(1277,";"),t(),i(1278,"li"),e(1279,"Quando o valor padr\xE3o dos componentes for configurado como "),i(1280,"code"),e(1281,"small"),t(),e(1282,` no
`),i(1283,"a",39),e(1284,"servi\xE7o de tema"),t(),e(1285,"."),t()()()()(),i(1286,"tr",16)(1287,"td",17)(1288,"div",25)(1289,"span",26),e(1290," p-text-wrap"),n(1291,"br"),t()()(),i(1292,"td",21)(1293,"code",29),e(1294,"boolean"),t()(),i(1295,"td",23)(1296,"p")(1297,"code"),e(1298,"false"),t()()(),i(1299,"td",24)(1300,"em")(1301,"strong"),e(1302,"(opcional)"),t()(),i(1303,"p"),e(1304,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t(),i(1305,"p"),e(1306,"Esta propriedade aplica-se ao texto contido nas c\xE9lulas da tabela."),t(),i(1307,"blockquote")(1308,"p"),e(1309,"Incompat\xEDvel com "),i(1310,"code"),e(1311,"virtual-scroll"),t(),e(1312,", que requer altura fixa nas linhas."),t()()()(),i(1313,"tr",16)(1314,"td",17)(1315,"div",25)(1316,"span",26),e(1317," p-virtual-scroll"),n(1318,"br"),t()()(),i(1319,"td",21)(1320,"code",29),e(1321,"boolean"),t()(),i(1322,"td",23)(1323,"p")(1324,"code"),e(1325,"true"),t()()(),i(1326,"td",24)(1327,"em")(1328,"strong"),e(1329,"(opcional)"),t()(),i(1330,"p"),e(1331,"Habilita o "),i(1332,"code"),e(1333,"virtual-scroll"),t(),e(1334,` na tabela para melhorar a performance com grandes volumes de dados.
A altura da tabela j\xE1 \xE9 pr\xE9-definida, portanto o `),i(1335,"code"),e(1336,"virtual-scroll"),t(),e(1337," ser\xE1 ativado automaticamente."),t(),i(1338,"blockquote")(1339,"p"),e(1340,"Incompat\xEDvel com "),i(1341,"code"),e(1342,"p-text-wrap"),t(),e(1343," e "),i(1344,"code"),e(1345,"master-detail"),t(),e(1346,", pois o "),i(1347,"code"),e(1348,"virtual-scroll"),t(),e(1349," exige altura fixa nas linhas."),t()()()()(),i(1350,"h3",12),e(1351,"M\xE9todos"),t(),i(1352,"table",40)(1353,"tr",16)(1354,"th",41)(1355,"div",25)(1356,"h4")(1357,"span",26),e(1358," focus "),t()()()()(),i(1359,"tr",24)(1360,"td",24)(1361,"p"),e(1362,"Fun\xE7\xE3o que atribui foco ao componente."),t(),i(1363,"p"),e(1364,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),i(1365,"pre")(1366,"code"),e(1367,`import { PoLookupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoLookupComponent, { static: true }) lookup: PoLookupComponent;

focusLookup() {
  this.lookup.focus();
}
`),t()()()()(),n(1368,"br"),i(1369,"table",40)(1370,"tr",16)(1371,"th",41)(1372,"div",25)(1373,"h4")(1374,"span",26),e(1375," showAdditionalHelp "),t()()()()(),i(1376,"tr",24)(1377,"td",24)(1378,"p"),e(1379,"M\xE9todo que exibe "),i(1380,"code"),e(1381,"p-additionalHelpTooltip"),t(),e(1382," ou executa a a\xE7\xE3o definida em "),i(1383,"code"),e(1384,"p-additionalHelp"),t(),e(1385,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),i(1386,"code"),e(1387,"p-keydown"),t(),e(1388,"."),t(),i(1389,"blockquote")(1390,"p"),e(1391,"Exibe ou oculta o conte\xFAdo do componente "),i(1392,"code"),e(1393,"po-helper"),t(),e(1394," quando o componente estiver com foco e com label vis\xEDvel."),t()(),i(1395,"pre")(1396,"code"),e(1397,`<po-lookup
 #lookup
 ...
 p-additional-help-tooltip="Mensagem de ajuda complementar"
 (p-keydown)="onKeyDown($event, lookup)"
></po-lookup>
`),t()(),i(1398,"pre")(1399,"code"),e(1400,`// Exemplo com p-label e p-helper
<po-lookup
 #lookup
 ...
 p-label="Label do lookup"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, lookup)"
></po-lookup>
`),t()(),i(1401,"pre")(1402,"code"),e(1403,`...
onKeyDown(event: KeyboardEvent, inp: PoLookupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),n(1404,"br"),i(1405,"h3"),e(1406,"Interfaces"),t(),i(1407,"h4",42)(1408,"code",5),e(1409,"PoLookupAdvancedFilter"),t()(),i(1410,"div",2)(1411,"p"),e(1412," Interface para defini\xE7\xE3o das propriedades dos campos de entrada que ser\xE3o criados dinamicamente. "),t()(),i(1413,"h4",12),e(1414,"Propriedades"),t(),i(1415,"table",13)(1416,"tr",14)(1417,"th",15),e(1418,"Nome"),t(),i(1419,"th",15),e(1420,"Tipo"),t(),i(1421,"th",15),e(1422,"Descri\xE7\xE3o"),t()(),i(1423,"tr",16)(1424,"td",17)(1425,"div",25)(1426,"span",26),e(1427," additionalHelp"),n(1428,"br"),t()()(),i(1429,"td",21)(1430,"code",43),e(1431,"Function"),t()(),i(1432,"td",24)(1433,"em")(1434,"strong"),e(1435,"(opcional)"),t()(),i(1436,"p"),e(1437,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),i(1438,"code"),e(1439,"p-help"),t(),e(1440,"."),t()()(),i(1441,"tr",16)(1442,"td",17)(1443,"div",25)(1444,"span",26),e(1445," additionalHelpTooltip"),n(1446,"br"),t()()(),i(1447,"td",21)(1448,"code",27),e(1449,"string"),t()(),i(1450,"td",24)(1451,"em")(1452,"strong"),e(1453,"(opcional)"),t()(),i(1454,"p"),e(1455,"Exibe um \xEDcone de ajuda adicional ao "),i(1456,"code"),e(1457,"p-help"),t(),e(1458,`, com o texto desta propriedade no tooltip.
Se o evento `),i(1459,"code"),e(1460,"p-additional-help"),t(),e(1461,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),i(1462,"strong"),e(1463,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()()()(),i(1464,"tr",16)(1465,"td",17)(1466,"div",25)(1467,"span",26),e(1468," advancedFilters"),n(1469,"br"),t()()(),i(1470,"td",21)(1471,"code",28),e(1472,"Array<PoLookupAdvancedFilter>"),t()(),i(1473,"td",24)(1474,"em")(1475,"strong"),e(1476,"(opcional)"),t()(),i(1477,"p"),e(1478,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),t(),i(1479,"blockquote")(1480,"p"),e(1481,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),t()(),i(1482,"p"),e(1483,"Exemplo de URL com busca avan\xE7ada:"),t(),i(1484,"p")(1485,"code"),e(1486,"url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro"),t()(),i(1487,"p"),e(1488,"Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula. Exemplo:"),t(),i(1489,"p")(1490,"code"),e(1491,"url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan"),t()()()(),i(1492,"tr",16)(1493,"td",17)(1494,"div",25)(1495,"span",26),e(1496," appendBox"),n(1497,"br"),t()()(),i(1498,"td",21)(1499,"code",29),e(1500,"boolean"),t()(),i(1501,"td",24)(1502,"em")(1503,"strong"),e(1504,"(opcional)"),t()(),i(1505,"p"),e(1506,"Define que o "),i(1507,"code"),e(1508,"listbox"),t(),e(1509," e/ou tooltip ("),i(1510,"code"),e(1511,"p-additional-help-tooltip"),t(),e(1512," e/ou "),i(1513,"code"),e(1514,"p-error-limit"),t(),e(1515,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),t(),i(1516,"blockquote")(1517,"p"),e(1518,"Quando utilizado com "),i(1519,"code"),e(1520,"p-additional-help-tooltip"),t(),e(1521,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),i(1522,"tr",16)(1523,"td",17)(1524,"div",25)(1525,"span",26),e(1526," autoHeight"),n(1527,"br"),t()()(),i(1528,"td",21)(1529,"code",29),e(1530,"boolean"),t()(),i(1531,"td",24)(1532,"em")(1533,"strong"),e(1534,"(opcional)"),t()(),i(1535,"p"),e(1536,"Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis."),t(),i(1537,"p")(1538,"strong"),e(1539,"Componentes compat\xEDveis:"),t(),i(1540,"code"),e(1541,"po-multiselect"),t(),e(1542,", "),i(1543,"code"),e(1544,"po-lookup"),t(),e(1545,"."),t()()(),i(1546,"tr",16)(1547,"td",17)(1548,"div",25)(1549,"span",26),e(1550," autoUpload"),n(1551,"br"),t()()(),i(1552,"td",21)(1553,"code",29),e(1554,"boolean"),t()(),i(1555,"td",24)(1556,"em")(1557,"strong"),e(1558,"(opcional)"),t()(),i(1559,"p"),e(1560,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),t(),i(1561,"p")(1562,"strong"),e(1563,"Componente compat\xEDvel"),t(),e(1564,": "),i(1565,"code"),e(1566,"po-upload"),t()()()(),i(1567,"tr",16)(1568,"td",17)(1569,"div",25)(1570,"span",26),e(1571," booleanFalse"),n(1572,"br"),t()()(),i(1573,"td",21)(1574,"code",27),e(1575,"string"),t()(),i(1576,"td",24)(1577,"em")(1578,"strong"),e(1579,"(opcional)"),t()(),i(1580,"p"),e(1581,"Texto exibido quando o valor do componente for "),i(1582,"em"),e(1583,"false"),t(),e(1584,"."),t()()(),i(1585,"tr",16)(1586,"td",17)(1587,"div",25)(1588,"span",26),e(1589," booleanTrue"),n(1590,"br"),t()()(),i(1591,"td",21)(1592,"code",27),e(1593,"string"),t()(),i(1594,"td",24)(1595,"em")(1596,"strong"),e(1597,"(opcional)"),t()(),i(1598,"p"),e(1599,"Texto exibido quando o valor do componente for "),i(1600,"em"),e(1601,"true"),t(),e(1602,"."),t()()(),i(1603,"tr",16)(1604,"td",17)(1605,"div",25)(1606,"span",26),e(1607," changeOnEnter"),n(1608,"br"),t()()(),i(1609,"td",21)(1610,"code",29),e(1611,"boolean"),t()(),i(1612,"td",24)(1613,"em")(1614,"strong"),e(1615,"(opcional)"),t()(),i(1616,"p"),e(1617,"Indica que o evento "),i(1618,"code"),e(1619,"p-change"),t(),e(1620,' s\xF3 ser\xE1 disparado ao clicar ou pressionar a tecla "Enter" sobre uma op\xE7\xE3o selecionada no '),i(1621,"code"),e(1622,"po-combo"),t(),e(1623,"."),t()()(),i(1624,"tr",16)(1625,"td",17)(1626,"div",25)(1627,"span",26),e(1628," changeVisibleColumns"),n(1629,"br"),t()()(),i(1630,"td",21)(1631,"code",43),e(1632,"Function"),t()(),i(1633,"td",24)(1634,"em")(1635,"strong"),e(1636,"(opcional)"),t()(),i(1637,"p"),e(1638,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),t(),i(1639,"p"),e(1640,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t(),i(1641,"p")(1642,"strong"),e(1643,"Componentes compat\xEDveis"),t(),e(1644,": "),i(1645,"code"),e(1646,"po-lookup"),t()()()(),i(1647,"tr",16)(1648,"td",17)(1649,"div",25)(1650,"span",26),e(1651," clean"),n(1652,"br"),t()()(),i(1653,"td",21)(1654,"code",29),e(1655,"boolean"),t()(),i(1656,"td",24)(1657,"em")(1658,"strong"),e(1659,"(opcional)"),t()(),i(1660,"p"),e(1661,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t(),i(1662,"p")(1663,"strong"),e(1664,"Componentes compat\xEDveis:"),t(),i(1665,"code"),e(1666,"po-datepicker"),t(),e(1667,", "),i(1668,"code"),e(1669,"po-datepicker-range"),t(),e(1670,", "),i(1671,"code"),e(1672,"po-input"),t(),e(1673,", "),i(1674,"code"),e(1675,"po-number"),t(),e(1676,", "),i(1677,"code"),e(1678,"po-decimal"),t(),e(1679,", "),i(1680,"code"),e(1681,"po-combo"),t(),e(1682,", "),i(1683,"code"),e(1684,"po-lookup"),t(),e(1685,", "),i(1686,"code"),e(1687,"po-password"),t()()()(),i(1688,"tr",16)(1689,"td",17)(1690,"div",25)(1691,"span",26),e(1692," columnRestoreManager"),n(1693,"br"),t()()(),i(1694,"td",21)(1695,"code",43),e(1696,"Function"),t()(),i(1697,"td",24)(1698,"em")(1699,"strong"),e(1700,"(opcional)"),t()(),i(1701,"p"),e(1702,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),t(),i(1703,"p"),e(1704,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t(),i(1705,"p")(1706,"strong"),e(1707,"Componentes compat\xEDveis"),t(),e(1708,": "),i(1709,"code"),e(1710,"po-lookup"),t()()()(),i(1711,"tr",16)(1712,"td",17)(1713,"div",25)(1714,"span",26),e(1715," columns"),n(1716,"br"),t()()(),i(1717,"td",21)(1718,"code",30),e(1719,"Array<PoLookupColumn> "),t(),i(1720,"code",44),e(1721," number"),t()(),i(1722,"td",24)(1723,"em")(1724,"strong"),e(1725,"(opcional)"),t()(),i(1726,"p"),e(1727,"Define as colunas para utiliza\xE7\xE3o da busca avan\xE7ada. Usada somente em conjunto com a propriedade "),i(1728,"code"),e(1729,"searchService"),t(),e(1730,`,
essa propriedade deve receber um array de objetos que implementam a interface `),i(1731,"a",45)(1732,"code"),e(1733,"PoLookupColumn"),t()(),e(1734,"."),t(),i(1735,"blockquote")(1736,"p"),e(1737,"Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como "),i(1738,"em"),e(1739,"label"),t(),e(1740," e "),i(1741,"em"),e(1742,"value"),t(),e(1743,` para valores
de tela e do model respectivamente.`),t()(),i(1744,"p")(1745,"strong"),e(1746,"Componentes compat\xEDveis:"),t(),i(1747,"code"),e(1748,"po-radio-group"),t(),e(1749,", "),i(1750,"code"),e(1751,"po-lookup"),t(),e(1752,", "),i(1753,"code"),e(1754,"po-checkbox-group"),t(),e(1755,"."),t()()(),i(1756,"tr",16)(1757,"td",17)(1758,"div",25)(1759,"span",26),e(1760," container"),n(1761,"br"),t()()(),i(1762,"td",21)(1763,"code",27),e(1764,"string"),t()(),i(1765,"td",24)(1766,"em")(1767,"strong"),e(1768,"(opcional)"),t()(),i(1769,"p"),e(1770,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),t(),i(1771,"p"),e(1772,"Est\xE1 propriedade \xE9 do tipo string, o valor que ser\xE1 titulo do contianer"),t()()(),i(1773,"tr",16)(1774,"td",17)(1775,"div",25)(1776,"span",26),e(1777," customAction"),n(1778,"br"),t()()(),i(1779,"td",21)(1780,"code",46),e(1781,"PoProgressAction"),t()(),i(1782,"td",24)(1783,"em")(1784,"strong"),e(1785,"(opcional)"),t()(),i(1786,"p"),e(1787,"Define uma a\xE7\xE3o personalizada no componente "),i(1788,"code"),e(1789,"po-upload"),t(),e(1790,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),t(),i(1791,"p")(1792,"strong"),e(1793,"Componente compat\xEDvel"),t(),e(1794,": "),i(1795,"code"),e(1796,"po-upload"),t(),e(1797,","),t(),i(1798,"p")(1799,"strong"),e(1800,"Exemplo de configura\xE7\xE3o"),t(),e(1801,":"),t(),i(1802,"pre")(1803,"code",47),e(1804,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),t()()()(),i(1805,"tr",16)(1806,"td",17)(1807,"div",25)(1808,"span",26),e(1809," customActionClick"),n(1810,"br"),t()()(),i(1811,"td",21)(1812,"code",48),e(1813,"(file: PoUploadFile) => void"),t()(),i(1814,"td",24)(1815,"em")(1816,"strong"),e(1817,"(opcional)"),t()(),i(1818,"p"),e(1819,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),i(1820,"code"),e(1821,"p-custom-action"),t(),e(1822,"."),t(),i(1823,"p")(1824,"strong"),e(1825,"Componente compat\xEDvel"),t(),e(1826,": "),i(1827,"code"),e(1828,"po-upload"),t(),e(1829,","),t(),i(1830,"p"),e(1831,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),t(),i(1832,"p")(1833,"strong"),e(1834,"Par\xE2metro do evento"),t(),e(1835,":"),t(),i(1836,"ul")(1837,"li")(1838,"code"),e(1839,"file"),t(),e(1840,": O arquivo associado ao bot\xE3o de a\xE7\xE3o. Este objeto \xE9 da classe "),i(1841,"code"),e(1842,"PoUploadFile"),t(),e(1843," e cont\xE9m informa\xE7\xF5es sobre o arquivo, como nome, status e progresso."),t()(),i(1844,"p")(1845,"strong"),e(1846,"Exemplo de uso"),t(),e(1847,":"),t(),i(1848,"pre")(1849,"code",47),e(1850,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),t()()()(),i(1851,"tr",16)(1852,"td",17)(1853,"div",25)(1854,"span",26),e(1855," debounceTime"),n(1856,"br"),t()()(),i(1857,"td",21)(1858,"code",44),e(1859,"number"),t()(),i(1860,"td",24)(1861,"em")(1862,"strong"),e(1863,"(opcional)"),t()(),i(1864,"p"),e(1865,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla. Ser\xE1 utilizada apenas quando houver servi\xE7o ("),i(1866,"code"),e(1867,"p-filter-service"),t(),e(1868,")."),t(),i(1869,"p")(1870,"strong"),e(1871,"Componentes compat\xEDveis:"),t(),i(1872,"code"),e(1873,"po-combo"),t(),e(1874,", "),i(1875,"code"),e(1876,"po-multiselect"),t(),e(1877,"."),t()()(),i(1878,"tr",16)(1879,"td",17)(1880,"div",25)(1881,"span",26),e(1882," decimalsLength"),n(1883,"br"),t()()(),i(1884,"td",21)(1885,"code",44),e(1886,"number"),t()(),i(1887,"td",24)(1888,"em")(1889,"strong"),e(1890,"(opcional)"),t()(),i(1891,"p"),e(1892,"Quantidade m\xE1xima de casas decimais."),t(),i(1893,"blockquote")(1894,"p"),e(1895,"Esta propriedade s\xF3 pode ser utilizada quando o "),i(1896,"code"),e(1897,"type"),t(),e(1898," for "),i(1899,"em"),e(1900,"currency"),t(),e(1901," ou "),i(1902,"em"),e(1903,"decimal"),t(),e(1904,"."),t()()()(),i(1905,"tr",16)(1906,"td",17)(1907,"div",25)(1908,"span",26),e(1909," directory"),n(1910,"br"),t()()(),i(1911,"td",21)(1912,"code",29),e(1913,"boolean"),t()(),i(1914,"td",24)(1915,"em")(1916,"strong"),e(1917,"(opcional)"),t()(),i(1918,"p"),e(1919,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),t(),i(1920,"blockquote")(1921,"p"),e(1922,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),t()(),i(1923,"blockquote")(1924,"p"),e(1925,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),i(1926,"strong"),e(1927,"Internet Explorer"),t(),e(1928,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),t()(),i(1929,"p")(1930,"strong"),e(1931,"Componente compat\xEDvel"),t(),e(1932,": "),i(1933,"code"),e(1934,"po-upload"),t()()()(),i(1935,"tr",16)(1936,"td",17)(1937,"div",25)(1938,"span",26),e(1939," disabled"),n(1940,"br"),t()()(),i(1941,"td",21)(1942,"code",29),e(1943,"boolean"),t()(),i(1944,"td",24)(1945,"em")(1946,"strong"),e(1947,"(opcional)"),t()(),i(1948,"p"),e(1949,"Desabilita o campo caso informar o valor "),i(1950,"em"),e(1951,"true"),t(),e(1952,"."),t()()(),i(1953,"tr",16)(1954,"td",17)(1955,"div",25)(1956,"span",26),e(1957," disabledInitFilter"),n(1958,"br"),t()()(),i(1959,"td",21)(1960,"code",29),e(1961,"boolean"),t()(),i(1962,"td",24)(1963,"em")(1964,"strong"),e(1965,"(opcional)"),t()(),i(1966,"p"),e(1967,"Desabilita o filtro inicial no servi\xE7o do "),i(1968,"code"),e(1969,"po-combo"),t(),e(1970,", que \xE9 executado no primeiro clique no campo."),t()()(),i(1971,"tr",16)(1972,"td",17)(1973,"div",25)(1974,"span",26),e(1975," disabledTabFilter"),n(1976,"br"),t()()(),i(1977,"td",21)(1978,"code",29),e(1979,"boolean"),t()(),i(1980,"td",24)(1981,"em")(1982,"strong"),e(1983,"(opcional)"),t()(),i(1984,"p"),e(1985,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB no "),i(1986,"code"),e(1987,"po-combo"),t(),e(1988,"."),t()()(),i(1989,"tr",16)(1990,"td",17)(1991,"div",25)(1992,"span",26),e(1993," divider"),n(1994,"br"),t()()(),i(1995,"td",21)(1996,"code",27),e(1997,"string"),t()(),i(1998,"td",24)(1999,"em")(2e3,"strong"),e(2001,"(opcional)"),t()(),i(2002,"p"),e(2003,"Exibir\xE1 um divisor acima, utilizando o seu conteudo como t\xEDtulo."),t()()(),i(2004,"tr",16)(2005,"td",17)(2006,"div",25)(2007,"span",26),e(2008," dragDrop"),n(2009,"br"),t()()(),i(2010,"td",21)(2011,"code",29),e(2012,"boolean"),t()(),i(2013,"td",24)(2014,"em")(2015,"strong"),e(2016,"(opcional)"),t()(),i(2017,"p"),e(2018,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),t(),i(2019,"blockquote")(2020,"p"),e(2021,"Recomendamos utilizar apenas um "),i(2022,"code"),e(2023,"po-upload"),t(),e(2024," com esta funcionalidade por tela."),t()(),i(2025,"p")(2026,"strong"),e(2027,"Componente compat\xEDvel"),t(),e(2028,": "),i(2029,"code"),e(2030,"po-upload"),t()()()(),i(2031,"tr",16)(2032,"td",17)(2033,"div",25)(2034,"span",26),e(2035," dragDropHeight"),n(2036,"br"),t()()(),i(2037,"td",21)(2038,"code",44),e(2039,"number"),t()(),i(2040,"td",24)(2041,"em")(2042,"strong"),e(2043,"(opcional)"),t()(),i(2044,"p"),e(2045,"Define em "),i(2046,"em"),e(2047,"pixels"),t(),e(2048," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),i(2049,"code"),e(2050,"160px"),t(),e(2051,"."),t(),i(2052,"blockquote")(2053,"p"),e(2054,"Esta propriedade funciona somente se a propriedade "),i(2055,"code"),e(2056,"p-drag-drop"),t(),e(2057," estiver habilitada."),t()(),i(2058,"p")(2059,"strong"),e(2060,"Componente compat\xEDvel"),t(),e(2061,": "),i(2062,"code"),e(2063,"po-upload"),t()()()(),i(2064,"tr",16)(2065,"td",17)(2066,"div",25)(2067,"span",26),e(2068," errorAsyncFunction"),n(2069,"br"),t()()(),i(2070,"td",21)(2071,"code",49),e(2072,"(value) => Observable<boolean>"),t()(),i(2073,"td",24)(2074,"em")(2075,"strong"),e(2076,"(opcional)"),t()(),i(2077,"p"),e(2078,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),i(2079,"code"),e(2080,"change"),t(),e(2081," ou "),i(2082,"code"),e(2083,"change-model"),t(),e(2084,", dependendo do valor da propriedade "),i(2085,"code"),e(2086,"triggerMode"),t(),e(2087,"."),t(),i(2088,"blockquote")(2089,"p"),e(2090,"Retorna "),i(2091,"code"),e(2092,"Observable com o valor true"),t(),e(2093," para sinalizar o erro "),i(2094,"code"),e(2095,"false"),t(),e(2096," para indicar que n\xE3o h\xE1 erro."),t()(),i(2097,"p")(2098,"strong"),e(2099,"Componente compat\xEDvel"),t(),e(2100,": "),i(2101,"code"),e(2102,"po-datepicker"),t()()()(),i(2103,"tr",16)(2104,"td",17)(2105,"div",25)(2106,"span",26),e(2107," errorAsyncProperties"),n(2108,"br"),t()()(),i(2109,"td",21)(2110,"code",50),e(2111,"ErrorAsyncProperties"),t()(),i(2112,"td",24)(2113,"em")(2114,"strong"),e(2115,"(opcional)"),t()(),i(2116,"p"),e(2117,"Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente."),t(),i(2118,"p")(2119,"strong"),e(2120,"Componentes compat\xEDveis:"),t(),i(2121,"code"),e(2122,"po-input"),t(),e(2123,", "),i(2124,"code"),e(2125,"po-number"),t(),e(2126,", "),i(2127,"code"),e(2128,"po-decimal"),t(),e(2129,", "),i(2130,"code"),e(2131,"po-password"),t(),e(2132,"."),t()()(),i(2133,"tr",16)(2134,"td",17)(2135,"div",25)(2136,"span",26),e(2137," errorLimit"),n(2138,"br"),t()()(),i(2139,"td",21)(2140,"code",29),e(2141,"boolean"),t()(),i(2142,"td",24)(2143,"em")(2144,"strong"),e(2145,"(opcional)"),t()(),i(2146,"p"),e(2147,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),i(2148,"blockquote")(2149,"p"),e(2150,"Caso essa propriedade seja definida como "),i(2151,"code"),e(2152,"true"),t(),e(2153,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()(),i(2154,"p")(2155,"strong"),e(2156,"Componentes compat\xEDveis:"),t(),i(2157,"code"),e(2158,"po-checkbox-group"),t(),e(2159,", "),i(2160,"code"),e(2161,"po-combo"),t(),e(2162,", "),i(2163,"code"),e(2164,"po-datepicker"),t(),e(2165,", "),i(2166,"code"),e(2167,"po-datepicker-range"),t(),e(2168,", "),i(2169,"code"),e(2170,"po-decimal"),t(),e(2171,", "),i(2172,"code"),e(2173,"po-input"),t(),e(2174,", "),i(2175,"code"),e(2176,"po-lookup"),t(),e(2177,", "),i(2178,"code"),e(2179,"po-multiselect"),t(),e(2180,", "),i(2181,"code"),e(2182,"po-number"),t(),e(2183,", "),i(2184,"code"),e(2185,"po-password"),t(),e(2186,", "),i(2187,"code"),e(2188,"po-radio-group"),t(),e(2189,", "),i(2190,"code"),e(2191,"po-select"),t(),e(2192,", "),i(2193,"code"),e(2194,"po-switch"),t(),e(2195,", "),i(2196,"code"),e(2197,"po-textarea"),t(),e(2198,"."),t()()(),i(2199,"tr",16)(2200,"td",17)(2201,"div",25)(2202,"span",26),e(2203," errorMessage"),n(2204,"br"),t()()(),i(2205,"td",21)(2206,"code",27),e(2207,"string"),t()(),i(2208,"td",24)(2209,"em")(2210,"strong"),e(2211,"(opcional)"),t()(),i(2212,"p"),e(2213,"Mensagem que ser\xE1 apresentada quando o campo ficar inv\xE1lido."),t(),i(2214,"p"),e(2215,"O campo fica inv\xE1lido quando as seguintes propriedades n\xE3o forem respeitadas:"),t(),i(2216,"ul")(2217,"li"),e(2218,"pattern;"),t(),i(2219,"li"),e(2220,"minValue;"),t(),i(2221,"li"),e(2222,"maxValue;"),t(),i(2223,"li"),e(2224,"required;"),t()(),i(2225,"blockquote")(2226,"p"),e(2227,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),i(2228,"code"),e(2229,"po-datepicker"),t(),e(2230,", "),i(2231,"code"),e(2232,"po-input"),t(),e(2233,", "),i(2234,"code"),e(2235,"po-number"),t(),e(2236,", "),i(2237,"code"),e(2238,"po-decimal"),t(),e(2239,", "),i(2240,"code"),e(2241,"po-password"),t(),e(2242,`, \xE9 necess\xE1rio que a propriedade
`),i(2243,"code"),e(2244,"requiredFieldErrorMessage"),t(),e(2245," esteja como "),i(2246,"code"),e(2247,"true"),t(),e(2248,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),i(2249,"code"),e(2250,"po-datepicker-range"),t(),e(2251,", "),i(2252,"code"),e(2253,"po-select"),t(),e(2254,", "),i(2255,"code"),e(2256,"po-checkbox-group"),t(),e(2257,", "),i(2258,"code"),e(2259,"po-radio-group"),t(),e(2260,", "),i(2261,"code"),e(2262,"po-multiselect"),t(),e(2263,", "),i(2264,"code"),e(2265,"po-combo"),t(),e(2266,`,
`),i(2267,"code"),e(2268,"po-lookup"),t(),e(2269," e "),i(2270,"code"),e(2271,"po-textarea"),t(),e(2272," n\xE3o \xE9 necess\xE1rio passar a propriedade "),i(2273,"code"),e(2274,"requiredFieldErrorMessage"),t(),e(2275,"."),t()(),i(2276,"p")(2277,"strong"),e(2278,"Componentes compat\xEDveis:"),t(),i(2279,"code"),e(2280,"po-checkbox-group"),t(),e(2281,", "),i(2282,"code"),e(2283,"po-combo"),t(),e(2284,", "),i(2285,"code"),e(2286,"po-datepicker"),t(),e(2287,", "),i(2288,"code"),e(2289,"po-datepicker-range"),t(),e(2290,", "),i(2291,"code"),e(2292,"po-decimal"),t(),e(2293,", "),i(2294,"code"),e(2295,"po-input"),t(),e(2296,", "),i(2297,"code"),e(2298,"po-lookup"),t(),e(2299,", "),i(2300,"code"),e(2301,"po-multiselect"),t(),e(2302,", "),i(2303,"code"),e(2304,"po-number"),t(),e(2305,", "),i(2306,"code"),e(2307,"po-password"),t(),e(2308,", "),i(2309,"code"),e(2310,"po-radio-group"),t(),e(2311,", "),i(2312,"code"),e(2313,"po-select"),t(),e(2314,", "),i(2315,"code"),e(2316,"po-switch"),t(),e(2317,", "),i(2318,"code"),e(2319,"po-textarea"),t(),e(2320,"."),t()()(),i(2321,"tr",16)(2322,"td",17)(2323,"div",25)(2324,"span",26),e(2325," fieldLabel"),n(2326,"br"),t()()(),i(2327,"td",21)(2328,"code",27),e(2329,"string"),t()(),i(2330,"td",24)(2331,"em")(2332,"strong"),e(2333,"(opcional)"),t()(),i(2334,"p"),e(2335,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como descri\xE7\xE3o do campo."),t(),i(2336,"p"),e(2337,"O valor padr\xE3o \xE9: "),i(2338,"code"),e(2339,"label"),t(),e(2340,"."),t(),i(2341,"blockquote")(2342,"p"),e(2343,"Esta propriedade pode ser utilizada em conjunto com: "),i(2344,"code"),e(2345,"options"),t(),e(2346,", "),i(2347,"code"),e(2348,"optionsService"),t(),e(2349," e "),i(2350,"code"),e(2351,"searchService"),t(),e(2352,"."),t()()()(),i(2353,"tr",16)(2354,"td",17)(2355,"div",25)(2356,"span",26),e(2357," fieldValue"),n(2358,"br"),t()()(),i(2359,"td",21)(2360,"code",27),e(2361,"string"),t()(),i(2362,"td",24)(2363,"em")(2364,"strong"),e(2365,"(opcional)"),t()(),i(2366,"p"),e(2367,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como valor do campo."),t(),i(2368,"p"),e(2369,"O valor padr\xE3o \xE9: "),i(2370,"code"),e(2371,"value"),t(),e(2372,"."),t(),i(2373,"blockquote")(2374,"p"),e(2375,"Esta propriedade pode ser utilizada em conjunto com: "),i(2376,"code"),e(2377,"options"),t(),e(2378,", "),i(2379,"code"),e(2380,"optionsService"),t(),e(2381," e "),i(2382,"code"),e(2383,"searchService"),t(),e(2384,"."),t()()()(),i(2385,"tr",16)(2386,"td",17)(2387,"div",25)(2388,"span",26),e(2389," filterMinlength"),n(2390,"br"),t()()(),i(2391,"td",21)(2392,"code",44),e(2393,"number"),t()(),i(2394,"td",24)(2395,"em")(2396,"strong"),e(2397,"(opcional)"),t()(),i(2398,"p"),e(2399,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o do "),i(2400,"code"),e(2401,"po-combo"),t(),e(2402,"."),t()()(),i(2403,"tr",16)(2404,"td",17)(2405,"div",25)(2406,"span",26),e(2407," filterMode"),n(2408,"br"),t()()(),i(2409,"td",21)(2410,"code",51),e(2411,"PoMultiselectFilterMode"),t()(),i(2412,"td",24)(2413,"em")(2414,"strong"),e(2415,"(opcional)"),t()(),i(2416,"p"),e(2417,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),i(2418,"code"),e(2419,"startsWith"),t(),e(2420,", "),i(2421,"code"),e(2422,"contains"),t(),e(2423," ou "),i(2424,"code"),e(2425,"endsWith"),t(),e(2426,"."),t(),i(2427,"blockquote")(2428,"p"),e(2429,"Quando utilizar a propriedade p-filter-service esta propriedade ser\xE1 ignorada."),t()(),i(2430,"p")(2431,"strong"),e(2432,"Componentes compat\xEDveis:"),t(),i(2433,"code"),e(2434,"po-multiselect"),t(),e(2435,"."),t()()(),i(2436,"tr",16)(2437,"td",17)(2438,"div",25)(2439,"span",26),e(2440," forceBooleanComponentType"),n(2441,"br"),t()()(),i(2442,"td",21)(2443,"code",52),e(2444,"ForceBooleanComponentEnum"),t()(),i(2445,"td",24)(2446,"em")(2447,"strong"),e(2448,"(opcional)"),t()(),i(2449,"p"),e(2450,"Valores aceitos:"),t(),i(2451,"ul")(2452,"li"),e(2453,"ForceBooleanComponentEnum.switch"),t(),i(2454,"li"),e(2455,"ForceBooleanComponentEnum.checkbox"),t()()()(),i(2456,"tr",16)(2457,"td",17)(2458,"div",25)(2459,"span",26),e(2460," forceOptionsComponentType"),n(2461,"br"),t()()(),i(2462,"td",21)(2463,"code",53),e(2464,"ForceOptionComponentEnum"),t()(),i(2465,"td",24)(2466,"em")(2467,"strong"),e(2468,"(opcional)"),t()(),i(2469,"p"),e(2470,"pode ser utilizada em conjunto com a propriedade "),i(2471,"code"),e(2472,"options"),t(),e(2473," for\xE7ando o componente a renderizar um "),i(2474,"code"),e(2475,"po-select"),t(),e(2476," ou "),i(2477,"code"),e(2478,"po-radio-group"),t(),e(2479,"."),t(),i(2480,"p"),e(2481,"Valores aceitos:"),t(),i(2482,"ul")(2483,"li"),e(2484,"ForceOptionComponentEnum.radioGroup"),t(),i(2485,"li"),e(2486,"ForceOptionComponentEnum.select"),t()(),i(2487,"blockquote")(2488,"p"),e(2489,"Essa propriedade ser\xE1 ignorada caso seja utilizada em conjunto com a propriedade "),i(2490,"code"),e(2491,"optionsMulti"),t(),e(2492," e "),i(2493,"code"),e(2494,"optionsService"),t(),e(2495,"."),t()()()(),i(2496,"tr",16)(2497,"td",17)(2498,"div",25)(2499,"span",26),e(2500," formField"),n(2501,"br"),t()()(),i(2502,"td",21)(2503,"code",27),e(2504,"string"),t()(),i(2505,"td",24)(2506,"em")(2507,"strong"),e(2508,"(opcional)"),t()(),i(2509,"p"),e(2510,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),i(2511,"code"),e(2512,"url"),t(),e(2513,"."),t(),i(2514,"blockquote")(2515,"p"),e(2516,"O valor default \xE9 "),i(2517,"code"),e(2518,"files"),t()()(),i(2519,"p")(2520,"strong"),e(2521,"Componente compat\xEDvel"),t(),e(2522,": "),i(2523,"code"),e(2524,"po-upload"),t()()()(),i(2525,"tr",16)(2526,"td",17)(2527,"div",25)(2528,"span",26),e(2529," format"),n(2530,"br"),t()()(),i(2531,"td",21)(2532,"code",27),e(2533,"string "),t(),i(2534,"code",32),e(2535," Array<string>"),t()(),i(2536,"td",24)(2537,"em")(2538,"strong"),e(2539,"(opcional)"),t()(),i(2540,"p"),e(2541,"Formato de exibi\xE7\xE3o no campo."),t(),i(2542,"p"),e(2543,"Ao utilizar esta propriedade com o "),i(2544,"code"),e(2545,"type"),t(),i(2546,"em"),e(2547,"PoDynamicFieldType.Date"),t(),e(2548," ou "),i(2549,"em"),e(2550,"PoDynamicFieldType.DateTime"),t(),e(2551,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),t(),i(2552,"p"),e(2553,"Valores v\xE1lidos:"),t(),i(2554,"ul")(2555,"li"),e(2556,"dd/mm/yyyy"),t(),i(2557,"li"),e(2558,"mm/dd/yyyy"),t(),i(2559,"li"),e(2560,"yyyy/mm/dd"),t()(),i(2561,"p"),e(2562,"Tamb\xE9m pode-se utilizar em conjunto com "),i(2563,"code"),e(2564,"searchService"),t(),e(2565,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),t()()(),i(2566,"tr",16)(2567,"td",17)(2568,"div",25)(2569,"span",26),e(2570," formatModel"),n(2571,"br"),t()()(),i(2572,"td",21)(2573,"code",29),e(2574,"boolean"),t()(),i(2575,"td",24)(2576,"em")(2577,"strong"),e(2578,"(opcional)"),t()(),i(2579,"p"),e(2580,"Indica se o "),i(2581,"code"),e(2582,"model"),t(),e(2583," receber\xE1 o valor formatado pelas propriedades "),i(2584,"code"),e(2585,"p-label-on"),t(),e(2586," e "),i(2587,"code"),e(2588,"p-label-off"),t(),e(2589,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),t(),i(2590,"p"),e(2591,"O valor padr\xE3o \xE9: "),i(2592,"code"),e(2593,"false"),t(),e(2594,"."),t(),i(2595,"blockquote")(2596,"p"),e(2597,"Esta propriedade est\xE1 disponivel apenas para o "),i(2598,"code"),e(2599,"swicth"),t(),e(2600,"."),t()()()(),i(2601,"tr",16)(2602,"td",17)(2603,"div",25)(2604,"span",26),e(2605," gridColumns"),n(2606,"br"),t()()(),i(2607,"td",21)(2608,"code",44),e(2609,"number"),t()(),i(2610,"td",24)(2611,"em")(2612,"strong"),e(2613,"(opcional)"),t()(),i(2614,"p"),e(2615,"Tamanho de exibi\xE7\xE3o do campo em telas."),t(),i(2616,"p"),e(2617,"Deve ser usado o sistema de "),i(2618,"strong"),e(2619,"grid"),t(),e(2620," do PO (1 ... 12 colunas)."),t(),i(2621,"blockquote")(2622,"p"),e(2623,"Esta propriedade \xE9 generica, aplica o valor em todos os tamanhos de telas."),t()()()(),i(2624,"tr",16)(2625,"td",17)(2626,"div",25)(2627,"span",26),e(2628," gridLgColumns"),n(2629,"br"),t()()(),i(2630,"td",21)(2631,"code",44),e(2632,"number"),t()(),i(2633,"td",24)(2634,"em")(2635,"strong"),e(2636,"(opcional)"),t()(),i(2637,"p"),e(2638,"Tamanho de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),i(2639,"p"),e(2640,"Deve ser usado o sistema de "),i(2641,"strong"),e(2642,"grid"),t(),e(2643," do PO (1 ... 12 colunas)."),t(),i(2644,"blockquote")(2645,"p"),e(2646,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(2647,"code"),e(2648,"gridColumns"),t(),e(2649,"."),t()()()(),i(2650,"tr",16)(2651,"td",17)(2652,"div",25)(2653,"span",26),e(2654," gridLgPull"),n(2655,"br"),t()()(),i(2656,"td",21)(2657,"code",44),e(2658,"number"),t()(),i(2659,"td",24)(2660,"em")(2661,"strong"),e(2662,"(opcional)"),t()(),i(2663,"p"),e(2664,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas grandes (lg)."),t(),i(2665,"p"),e(2666,"Deve ser usado o sistema de "),i(2667,"strong"),e(2668,"grid"),t(),e(2669," do PO (1 ... 11 colunas)."),t(),i(2670,"blockquote")(2671,"p"),e(2672,"Esta propriedade n\xE3o funciona com a propriedade "),i(2673,"code"),e(2674,"gridColumns"),t(),e(2675,". Deve-se especificar o tamanho da tela."),t()()()(),i(2676,"tr",16)(2677,"td",17)(2678,"div",25)(2679,"span",26),e(2680," gridMdColumns"),n(2681,"br"),t()()(),i(2682,"td",21)(2683,"code",44),e(2684,"number"),t()(),i(2685,"td",24)(2686,"em")(2687,"strong"),e(2688,"(opcional)"),t()(),i(2689,"p"),e(2690,"Tamanho de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),i(2691,"p"),e(2692,"Deve ser usado o sistema de "),i(2693,"strong"),e(2694,"grid"),t(),e(2695," do PO (1 ... 12 colunas)."),t(),i(2696,"blockquote")(2697,"p"),e(2698,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(2699,"code"),e(2700,"gridColumns"),t(),e(2701,"."),t()()()(),i(2702,"tr",16)(2703,"td",17)(2704,"div",25)(2705,"span",26),e(2706," gridMdPull"),n(2707,"br"),t()()(),i(2708,"td",21)(2709,"code",44),e(2710,"number"),t()(),i(2711,"td",24)(2712,"em")(2713,"strong"),e(2714,"(opcional)"),t()(),i(2715,"p"),e(2716,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas m\xE9dias (md)."),t(),i(2717,"p"),e(2718,"Deve ser usado o sistema de "),i(2719,"strong"),e(2720,"grid"),t(),e(2721," do PO (1 ... 11 colunas)."),t(),i(2722,"blockquote")(2723,"p"),e(2724,"Esta propriedade n\xE3o funciona com a propriedade "),i(2725,"code"),e(2726,"gridColumns"),t(),e(2727,". Deve-se especificar o tamanho da tela."),t()()()(),i(2728,"tr",16)(2729,"td",17)(2730,"div",25)(2731,"span",26),e(2732," gridSmColumns"),n(2733,"br"),t()()(),i(2734,"td",21)(2735,"code",44),e(2736,"number"),t()(),i(2737,"td",24)(2738,"em")(2739,"strong"),e(2740,"(opcional)"),t()(),i(2741,"p"),e(2742,"Tamanho de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),i(2743,"p"),e(2744,"Deve ser usado o sistema de "),i(2745,"strong"),e(2746,"grid"),t(),e(2747," do PO (1 ... 12 colunas)."),t(),i(2748,"blockquote")(2749,"p"),e(2750,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(2751,"code"),e(2752,"gridColumns"),t(),e(2753,"."),t()()()(),i(2754,"tr",16)(2755,"td",17)(2756,"div",25)(2757,"span",26),e(2758," gridSmPull"),n(2759,"br"),t()()(),i(2760,"td",21)(2761,"code",44),e(2762,"number"),t()(),i(2763,"td",24)(2764,"em")(2765,"strong"),e(2766,"(opcional)"),t()(),i(2767,"p"),e(2768,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas menores (sm)."),t(),i(2769,"p"),e(2770,"Deve ser usado o sistema de "),i(2771,"strong"),e(2772,"grid"),t(),e(2773," do PO (1 ... 11 colunas)."),t(),i(2774,"blockquote")(2775,"p"),e(2776,"Esta propriedade n\xE3o funciona com a propriedade "),i(2777,"code"),e(2778,"gridColumns"),t(),e(2779,". Deve-se especificar o tamanho da tela."),t()()()(),i(2780,"tr",16)(2781,"td",17)(2782,"div",25)(2783,"span",26),e(2784," gridXlColumns"),n(2785,"br"),t()()(),i(2786,"td",21)(2787,"code",44),e(2788,"number"),t()(),i(2789,"td",24)(2790,"em")(2791,"strong"),e(2792,"(opcional)"),t()(),i(2793,"p"),e(2794,"Tamanho de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),i(2795,"p"),e(2796,"Deve ser usado o sistema de "),i(2797,"strong"),e(2798,"grid"),t(),e(2799," do PO (1 ... 12 colunas)."),t(),i(2800,"blockquote")(2801,"p"),e(2802,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(2803,"code"),e(2804,"gridColumns"),t(),e(2805,"."),t()()()(),i(2806,"tr",16)(2807,"td",17)(2808,"div",25)(2809,"span",26),e(2810," gridXlPull"),n(2811,"br"),t()()(),i(2812,"td",21)(2813,"code",44),e(2814,"number"),t()(),i(2815,"td",24)(2816,"em")(2817,"strong"),e(2818,"(opcional)"),t()(),i(2819,"p"),e(2820,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas extra grandes (xl)."),t(),i(2821,"p"),e(2822,"Deve ser usado o sistema de "),i(2823,"strong"),e(2824,"grid"),t(),e(2825," do PO (1 ... 11 colunas)."),t(),i(2826,"blockquote")(2827,"p"),e(2828,"Esta propriedade n\xE3o funciona com a propriedade "),i(2829,"code"),e(2830,"gridColumns"),t(),e(2831,". Deve-se especificar o tamanho da tela."),t()()()(),i(2832,"tr",16)(2833,"td",17)(2834,"div",25)(2835,"span",26),e(2836," headers"),n(2837,"br"),t()()(),i(2838,"td",21)(2839,"code",54),e(2840,"{ [name: string]: string "),t(),i(2841,"code",55),e(2842,` Array<string>;
}`),t()(),i(2843,"td",24)(2844,"em")(2845,"strong"),e(2846,"(opcional)"),t()(),i(2847,"p"),e(2848,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),t(),i(2849,"p")(2850,"strong"),e(2851,"Componente compat\xEDvel"),t(),e(2852,": "),i(2853,"code"),e(2854,"po-upload"),t()()()(),i(2855,"tr",16)(2856,"td",17)(2857,"div",25)(2858,"span",26),e(2859," help"),n(2860,"br"),t()()(),i(2861,"td",21)(2862,"code",27),e(2863,"string"),t()(),i(2864,"td",24)(2865,"em")(2866,"strong"),e(2867,"(opcional)"),t()(),i(2868,"p"),e(2869,"Texto de ajuda."),t()()(),i(2870,"tr",16)(2871,"td",17)(2872,"div",25)(2873,"span",26),e(2874," hideLabelStatus"),n(2875,"br"),t()()(),i(2876,"td",21)(2877,"code",29),e(2878,"boolean"),t()(),i(2879,"td",24)(2880,"em")(2881,"strong"),e(2882,"(opcional)"),t()(),i(2883,"p"),e(2884,"Indica se o status do "),i(2885,"code"),e(2886,"model"),t(),e(2887," ser\xE1 escondido visualmente ao lado do switch"),t()()(),i(2888,"tr",16)(2889,"td",17)(2890,"div",25)(2891,"span",26),e(2892," hidePasswordPeek"),n(2893,"br"),t()()(),i(2894,"td",21)(2895,"code",29),e(2896,"boolean"),t()(),i(2897,"td",24)(2898,"em")(2899,"strong"),e(2900,"(opcional)"),t()(),i(2901,"p"),e(2902,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada no "),i(2903,"code"),e(2904,"po-password"),t(),e(2905,"."),t()()(),i(2906,"tr",16)(2907,"td",17)(2908,"div",25)(2909,"span",26),e(2910," hideRestrictionsInfo"),n(2911,"br"),t()()(),i(2912,"td",21)(2913,"code",29),e(2914,"boolean"),t()(),i(2915,"td",24)(2916,"em")(2917,"strong"),e(2918,"(opcional)"),t()(),i(2919,"p"),e(2920,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),t(),i(2921,"p")(2922,"strong"),e(2923,"Componente compat\xEDvel"),t(),e(2924,": "),i(2925,"code"),e(2926,"po-upload"),t()()()(),i(2927,"tr",16)(2928,"td",17)(2929,"div",25)(2930,"span",26),e(2931," hideSearch"),n(2932,"br"),t()()(),i(2933,"td",21)(2934,"code",29),e(2935,"boolean"),t()(),i(2936,"td",24)(2937,"em")(2938,"strong"),e(2939,"(opcional)"),t()(),i(2940,"p"),e(2941,"Esconde o campo de pesquisa existente dentro do dropdown do "),i(2942,"code"),e(2943,"po-multiselect"),t(),e(2944,"."),t()()(),i(2945,"tr",16)(2946,"td",17)(2947,"div",25)(2948,"span",26),e(2949," hideSelectAll"),n(2950,"br"),t()()(),i(2951,"td",21)(2952,"code",29),e(2953,"boolean"),t()(),i(2954,"td",24)(2955,"em")(2956,"strong"),e(2957,"(opcional)"),t()(),i(2958,"p"),e(2959,'Indica se o campo "Selecionar todos" do '),i(2960,"code"),e(2961,"po-multiselect"),t(),e(2962," ser\xE1 escondido."),t()()(),i(2963,"tr",16)(2964,"td",17)(2965,"div",25)(2966,"span",26),e(2967," hideSelectButton"),n(2968,"br"),t()()(),i(2969,"td",21)(2970,"code",29),e(2971,"boolean"),t()(),i(2972,"td",24)(2973,"em")(2974,"strong"),e(2975,"(opcional)"),t()(),i(2976,"p"),e(2977,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),t(),i(2978,"blockquote")(2979,"p"),e(2980,"Caso o valor definido seja "),i(2981,"code"),e(2982,"true"),t(),e(2983,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),i(2984,"code"),e(2985,"selectFiles()"),t(),e(2986," para sele\xE7\xE3o de arquivos."),t()(),i(2987,"p")(2988,"strong"),e(2989,"Componente compat\xEDvel"),t(),e(2990,": "),i(2991,"code"),e(2992,"po-upload"),t()()()(),i(2993,"tr",16)(2994,"td",17)(2995,"div",25)(2996,"span",26),e(2997," hideSendButton"),n(2998,"br"),t()()(),i(2999,"td",21)(3e3,"code",29),e(3001,"boolean"),t()(),i(3002,"td",24)(3003,"em")(3004,"strong"),e(3005,"(opcional)"),t()(),i(3006,"p"),e(3007,"Omite o bot\xE3o de envio de arquivos."),t(),i(3008,"blockquote")(3009,"p"),e(3010,"Caso o valor definido seja "),i(3011,"code"),e(3012,"true"),t(),e(3013,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),i(3014,"code"),e(3015,"sendFiles()"),t(),e(3016," para envio do(s) arquivo(s) selecionado(s)."),t()(),i(3017,"p")(3018,"strong"),e(3019,"Componente compat\xEDvel"),t(),e(3020,": "),i(3021,"code"),e(3022,"po-upload"),t()()()(),i(3023,"tr",16)(3024,"td",17)(3025,"div",25)(3026,"span",26),e(3027," icon"),n(3028,"br"),t()()(),i(3029,"td",21)(3030,"code",27),e(3031,"string "),t(),i(3032,"code",56),e(3033," TemplateRef<void>"),t()(),i(3034,"td",24)(3035,"em")(3036,"strong"),e(3037,"(opcional)"),t()(),i(3038,"p"),e(3039,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),i(3040,"blockquote")(3041,"p"),e(3042,"Esta propriedade s\xF3 pode ser utilizado nos campos:"),t()(),i(3043,"ul")(3044,"li"),e(3045,"Input;"),t(),i(3046,"li"),e(3047,"Number;"),t(),i(3048,"li"),e(3049,"Decimal;"),t(),i(3050,"li"),e(3051,"Combo;"),t(),i(3052,"li"),e(3053,"Password;"),t()(),i(3054,"blockquote")(3055,"p"),e(3056,"Veja a disponibilidade de \xEDcones em "),i(3057,"a",57),e(3058,"biblioteca de \xEDcones"),t(),e(3059,"."),t()()()(),i(3060,"tr",16)(3061,"td",17)(3062,"div",25)(3063,"span",26),e(3064," infiniteScroll"),n(3065,"br"),t()()(),i(3066,"td",21)(3067,"code",29),e(3068,"boolean"),t()(),i(3069,"td",24)(3070,"em")(3071,"strong"),e(3072,"(opcional)"),t()(),i(3073,"p"),e(3074,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),t(),i(3075,"p")(3076,"strong"),e(3077,"Componentes compat\xEDveis:"),t(),i(3078,"code"),e(3079,"po-combo"),t(),e(3080,", "),i(3081,"code"),e(3082,"po-lookup"),t(),e(3083,"."),t()()(),i(3084,"tr",16)(3085,"td",17)(3086,"div",25)(3087,"span",26),e(3088," infiniteScrollDistance"),n(3089,"br"),t()()(),i(3090,"td",21)(3091,"code",44),e(3092,"number"),t()(),i(3093,"td",24)(3094,"em")(3095,"strong"),e(3096,"(opcional)"),t()(),i(3097,"p"),e(3098,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),i(3099,"strong"),e(3100,"Exemplos"),t(),i(3101,"code"),e(3102,"{ infiniteScrollDistance: 80 }"),t(),e(3103,": Quando atingir 80% do scroll do combo, o show-more ser\xE1 disparado."),t(),i(3104,"p")(3105,"strong"),e(3106,"Componente compat\xEDvel:"),t(),i(3107,"code"),e(3108,"po-combo"),t(),e(3109,"."),t()()(),i(3110,"tr",16)(3111,"td",17)(3112,"div",25)(3113,"span",26),e(3114," invalidValue"),n(3115,"br"),t()()(),i(3116,"td",21)(3117,"code",29),e(3118,"boolean"),t()(),i(3119,"td",24)(3120,"em")(3121,"strong"),e(3122,"(opcional)"),t()(),i(3123,"p"),e(3124,"Define qual valor ser\xE1 considerado como inv\xE1lido para exibir a mensagem da propriedade "),i(3125,"code"),e(3126,"p-field-error-message"),t(),e(3127,"."),t(),i(3128,"blockquote")(3129,"p"),e(3130,"Caso essa propriedade seja definida como "),i(3131,"code"),e(3132,"true"),t(),e(3133,", a mensagem de erro ser\xE1 exibida quando o campo estiver ligado(on/true)."),t()(),i(3134,"p")(3135,"strong"),e(3136,"Componente compat\xEDvel"),t(),e(3137,": "),i(3138,"code"),e(3139,"po-switch"),t()()()(),i(3140,"tr",16)(3141,"td",17)(3142,"div",25)(3143,"span",26),e(3144," isoFormat"),n(3145,"br"),t()()(),i(3146,"td",21)(3147,"code",58),e(3148,"PoDatepickerIsoFormat"),t()(),i(3149,"td",24)(3150,"em")(3151,"strong"),e(3152,"(opcional)"),t()(),i(3153,"p"),e(3154,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do model, independentemente do formato de entrada."),t(),i(3155,"blockquote")(3156,"p"),e(3157,"Veja os valores v\xE1lidos no "),i(3158,"code"),e(3159,"enumPoDatepickerIsoFormat"),t(),e(3160,"."),t()(),i(3161,"p")(3162,"strong"),e(3163,"Componente compat\xEDvel:"),t(),e(3164," po-datepicker"),t()()(),i(3165,"tr",16)(3166,"td",17)(3167,"div",25)(3168,"span",26),e(3169," key"),n(3170,"br"),t()()(),i(3171,"td",21)(3172,"code",29),e(3173,"boolean"),t()(),i(3174,"td",24)(3175,"em")(3176,"strong"),e(3177,"(opcional)"),t()(),i(3178,"p"),e(3179,"Identificador"),t()()(),i(3180,"tr",16)(3181,"td",17)(3182,"div",25)(3183,"span",26),e(3184," keydown"),n(3185,"br"),t()()(),i(3186,"td",21)(3187,"code",43),e(3188,"Function"),t()(),i(3189,"td",24)(3190,"em")(3191,"strong"),e(3192,"(opcional)"),t()(),i(3193,"p"),e(3194,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),i(3195,"code"),e(3196,"KeyboardEvent"),t(),e(3197," com informa\xE7\xF5es sobre a tecla."),t()()(),i(3198,"tr",16)(3199,"td",17)(3200,"div",25)(3201,"span",26),e(3202," label"),n(3203,"br"),t()()(),i(3204,"td",21)(3205,"code",27),e(3206,"string"),t()(),i(3207,"td",24)(3208,"em")(3209,"strong"),e(3210,"(opcional)"),t()(),i(3211,"p"),e(3212,"R\xF3tulo do campo exibido."),t(),i(3213,"p"),e(3214,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(3215,"code"),e(3216,"label"),t(),e(3217," o valor da propriedade "),i(3218,"code"),e(3219,"property"),t(),e(3220," com a primeira letra em mai\xFAsculo."),t()()(),i(3221,"tr",16)(3222,"td",17)(3223,"div",25)(3224,"span",26),e(3225," labelPosition"),n(3226,"br"),t()()(),i(3227,"td",21)(3228,"code",59),e(3229,"PoSwitchLabelPosition"),t()(),i(3230,"td",24)(3231,"em")(3232,"strong"),e(3233,"(opcional)"),t()(),i(3234,"p"),e(3235,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo do PoSwitch."),t(),i(3236,"blockquote")(3237,"p"),e(3238,"Por padr\xE3o exibe \xE0 direita."),t()()()(),i(3239,"tr",16)(3240,"td",17)(3241,"div",25)(3242,"span",26),e(3243," listboxControlPosition"),n(3244,"br"),t()()(),i(3245,"td",21)(3246,"code",60),e(3247,"'top' "),t(),i(3248,"code",61),e(3249," 'bottom'"),t()(),i(3250,"td",24)(3251,"em")(3252,"strong"),e(3253,"(opcional)"),t()(),i(3254,"p"),e(3255,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),i(3256,"code"),e(3257,"listbox"),t(),e(3258," em rela\xE7\xE3o ao campo ("),i(3259,"code"),e(3260,"top"),t(),e(3261," ou "),i(3262,"code"),e(3263,"bottom"),t(),e(3264,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),t(),i(3265,"p")(3266,"strong"),e(3267,"Componentes compat\xEDveis:"),t(),i(3268,"code"),e(3269,"po-multiselect"),t(),e(3270,", "),i(3271,"code"),e(3272,"po-combo"),t(),e(3273,"."),t()()(),i(3274,"tr",16)(3275,"td",17)(3276,"div",25)(3277,"span",26),e(3278," literals"),n(3279,"br"),t()()(),i(3280,"td",21)(3281,"code",36),e(3282,"PoLookupLiterals "),t(),i(3283,"code",62),e(3284," PoMultiselectLiterals "),t(),i(3285,"code",63),e(3286," PoComboLiterals "),t(),i(3287,"code",64),e(3288," PoDatepickerRangeLiterals "),t(),i(3289,"code",65),e(3290," PoUploadLiterals"),t()(),i(3291,"td",24)(3292,"em")(3293,"strong"),e(3294,"(opcional)"),t()(),i(3295,"p"),e(3296,"Objeto com as literais usadas para os seguintes componentes: "),i(3297,"code"),e(3298,"po-lookup"),t(),e(3299,", "),i(3300,"code"),e(3301,"po-multiselect"),t(),e(3302,", "),i(3303,"code"),e(3304,"po-combo"),t(),e(3305," e "),i(3306,"code"),e(3307,"po-datepicker-range"),t(),e(3308,"."),t(),i(3309,"blockquote")(3310,"p"),e(3311,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do PoI18nService ou do browser."),t()(),i(3312,"p")(3313,"strong"),e(3314,"Componentes compat\xEDveis:"),t(),i(3315,"code"),e(3316,"po-lookup"),t(),e(3317,", "),i(3318,"code"),e(3319,"po-multiselect"),t(),e(3320,", "),i(3321,"code"),e(3322,"po-combo"),t(),e(3323,", "),i(3324,"code"),e(3325,"po-datepicker-range"),t()()()(),i(3326,"tr",16)(3327,"td",17)(3328,"div",25)(3329,"span",26),e(3330," locale"),n(3331,"br"),t()()(),i(3332,"td",21)(3333,"code",27),e(3334,"string"),t()(),i(3335,"td",24)(3336,"em")(3337,"strong"),e(3338,"(opcional)"),t()(),i(3339,"p"),e(3340,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),i(3341,"a",66)(3342,"code"),e(3343,"I18n"),t()()(),i(3344,"p"),e(3345,"Exemplo de utiliza\xE7\xE3o:"),t(),i(3346,"pre")(3347,"code"),e(3348,`[
  { property: 'birthday', locale: 'en', type: 'date' },
  { property: 'wage', locale: 'ru', type: 'currency' }
];
`),t()(),i(3349,"blockquote")(3350,"p"),e(3351,"Para ver quais linguagens suportadas acesse "),i(3352,"a",66)(3353,"code"),e(3354,"I18n"),t()(),e(3355,`
A propriedade ser\xE1 repassada para os componentes que suportam a mesma.`),t()()()(),i(3356,"tr",16)(3357,"td",17)(3358,"div",25)(3359,"span",26),e(3360," mask"),n(3361,"br"),t()()(),i(3362,"td",21)(3363,"code",27),e(3364,"string"),t()(),i(3365,"td",24)(3366,"em")(3367,"strong"),e(3368,"(opcional)"),t()(),i(3369,"p"),e(3370,"M\xE1scara para o campo."),t(),i(3371,"p")(3372,"strong"),e(3373,"Componentes compat\xEDveis:"),t(),i(3374,"code"),e(3375,"po-input"),t(),e(3376,"."),t(),i(3377,"blockquote")(3378,"p"),e(3379,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),i(3380,"code"),e(3381,"type: time"),t(),e(3382,"."),t()()()(),i(3383,"tr",16)(3384,"td",17)(3385,"div",25)(3386,"span",26),e(3387," maskFormatModel"),n(3388,"br"),t()()(),i(3389,"td",21)(3390,"code",29),e(3391,"boolean"),t()(),i(3392,"td",24)(3393,"em")(3394,"strong"),e(3395,"(opcional)"),t()(),i(3396,"p"),e(3397,"Define que o valor do componente ser\xE1 conforme especificado na masc\xE1ra. O valor padr\xE3o \xE9 "),i(3398,"code"),e(3399,"false"),t(),e(3400,"."),t(),i(3401,"p")(3402,"strong"),e(3403,"Componentes compat\xEDveis:"),t(),i(3404,"code"),e(3405,"po-input"),t(),e(3406,"."),t(),i(3407,"blockquote")(3408,"p"),e(3409,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),i(3410,"code"),e(3411,"type: time"),t(),e(3412,"."),t()()()(),i(3413,"tr",16)(3414,"td",17)(3415,"div",25)(3416,"span",26),e(3417," maxLength"),n(3418,"br"),t()()(),i(3419,"td",21)(3420,"code",44),e(3421,"number"),t()(),i(3422,"td",24)(3423,"em")(3424,"strong"),e(3425,"(opcional)"),t()(),i(3426,"p"),e(3427,"Tamanho m\xE1ximo de caracteres."),t(),i(3428,"p")(3429,"strong"),e(3430,"Componentes compat\xEDveis:"),t(),i(3431,"code"),e(3432,"po-input"),t(),e(3433,", "),i(3434,"code"),e(3435,"po-number"),t(),e(3436,", "),i(3437,"code"),e(3438,"po-decimal"),t(),e(3439,", "),i(3440,"code"),e(3441,"po-textarea"),t(),e(3442,", "),i(3443,"code"),e(3444,"po-password"),t(),e(3445,"."),t()()(),i(3446,"tr",16)(3447,"td",17)(3448,"div",25)(3449,"span",26),e(3450," maxValue"),n(3451,"br"),t()()(),i(3452,"td",21)(3453,"code",27),e(3454,"string "),t(),i(3455,"code",44),e(3456," number"),t()(),i(3457,"td",24)(3458,"em")(3459,"strong"),e(3460,"(opcional)"),t()(),i(3461,"p"),e(3462,"Valor m\xE1ximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),i(3463,"em"),e(3464,"number"),t(),e(3465,", "),i(3466,"em"),e(3467,"date"),t(),e(3468," ou "),i(3469,"em"),e(3470,"dateTime"),t(),e(3471,"."),t(),i(3472,"p")(3473,"strong"),e(3474,"Componentes compat\xEDveis:"),t(),i(3475,"code"),e(3476,"po-datepicker"),t(),e(3477,", "),i(3478,"code"),e(3479,"po-datepicker-range"),t(),e(3480,", "),i(3481,"code"),e(3482,"po-number"),t(),e(3483,", "),i(3484,"code"),e(3485,"po-decimal"),t()()()(),i(3486,"tr",16)(3487,"td",17)(3488,"div",25)(3489,"span",26),e(3490," minLength"),n(3491,"br"),t()()(),i(3492,"td",21)(3493,"code",44),e(3494,"number"),t()(),i(3495,"td",24)(3496,"em")(3497,"strong"),e(3498,"(opcional)"),t()(),i(3499,"p"),e(3500,"Tamanho m\xEDnimo de caracteres."),t(),i(3501,"p")(3502,"strong"),e(3503,"Componentes compat\xEDveis:"),t(),i(3504,"code"),e(3505,"po-input"),t(),e(3506,", "),i(3507,"code"),e(3508,"po-number"),t(),e(3509,", "),i(3510,"code"),e(3511,"po-decimal"),t(),e(3512,", "),i(3513,"code"),e(3514,"po-textarea"),t(),e(3515,", "),i(3516,"code"),e(3517,"po-password"),t(),e(3518,"."),t()()(),i(3519,"tr",16)(3520,"td",17)(3521,"div",25)(3522,"span",26),e(3523," minValue"),n(3524,"br"),t()()(),i(3525,"td",21)(3526,"code",27),e(3527,"string "),t(),i(3528,"code",44),e(3529," number"),t()(),i(3530,"td",24)(3531,"em")(3532,"strong"),e(3533,"(opcional)"),t()(),i(3534,"p"),e(3535,"Valor m\xEDnimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),i(3536,"em"),e(3537,"number"),t(),e(3538,", "),i(3539,"em"),e(3540,"date"),t(),e(3541," ou "),i(3542,"em"),e(3543,"dateTime"),t(),e(3544,"."),t(),i(3545,"p")(3546,"strong"),e(3547,"Componentes compat\xEDveis:"),t(),i(3548,"code"),e(3549,"po-datepicker"),t(),e(3550,", "),i(3551,"code"),e(3552,"po-datepicker-range"),t(),e(3553,", "),i(3554,"code"),e(3555,"po-number"),t(),e(3556,", "),i(3557,"code"),e(3558,"po-decimal"),t()()()(),i(3559,"tr",16)(3560,"td",17)(3561,"div",25)(3562,"span",26),e(3563," multiple"),n(3564,"br"),t()()(),i(3565,"td",21)(3566,"code",29),e(3567,"boolean"),t()(),i(3568,"td",24)(3569,"em")(3570,"strong"),e(3571,"(opcional)"),t()(),i(3572,"p"),e(3573,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),i(3574,"p")(3575,"strong"),e(3576,"Componente compat\xEDvel:"),t(),i(3577,"code"),e(3578,"po-lookup"),t(),e(3579,", "),i(3580,"code"),e(3581,"po-upload"),t()()()(),i(3582,"tr",16)(3583,"td",17)(3584,"div",25)(3585,"span",26),e(3586," noAutocomplete"),n(3587,"br"),t()()(),i(3588,"td",21)(3589,"code",29),e(3590,"boolean"),t()(),i(3591,"td",24)(3592,"em")(3593,"strong"),e(3594,"(opcional)"),t()(),i(3595,"p"),e(3596,"Define a propriedade nativa "),i(3597,"code"),e(3598,"autocomplete"),t(),e(3599," do campo como off."),t(),i(3600,"p")(3601,"strong"),e(3602,"Componentes compat\xEDveis:"),t(),i(3603,"code"),e(3604,"po-datepicker"),t(),e(3605,", "),i(3606,"code"),e(3607,"po-datepicker-range"),t(),e(3608,", "),i(3609,"code"),e(3610,"po-input"),t(),e(3611,", "),i(3612,"code"),e(3613,"po-number"),t(),e(3614,", "),i(3615,"code"),e(3616,"po-decimal"),t(),e(3617,", "),i(3618,"code"),e(3619,"po-lookup"),t(),e(3620,", "),i(3621,"code"),e(3622,"po-password"),t()()()(),i(3623,"tr",16)(3624,"td",17)(3625,"div",25)(3626,"span",26),e(3627," offsetColumns"),n(3628,"br"),t()()(),i(3629,"td",21)(3630,"code",44),e(3631,"number"),t()(),i(3632,"td",24)(3633,"em")(3634,"strong"),e(3635,"(opcional)"),t()(),i(3636,"p"),e(3637,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),t(),i(3638,"p"),e(3639,"Deve ser usado o sistema de "),i(3640,"strong"),e(3641,"grid"),t(),e(3642," do PO (1 ... 12 colunas)."),t(),i(3643,"blockquote")(3644,"p"),e(3645,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),t()()()(),i(3646,"tr",16)(3647,"td",17)(3648,"div",25)(3649,"span",26),e(3650," offsetLgColumns"),n(3651,"br"),t()()(),i(3652,"td",21)(3653,"code",44),e(3654,"number"),t()(),i(3655,"td",24)(3656,"em")(3657,"strong"),e(3658,"(opcional)"),t()(),i(3659,"p"),e(3660,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),i(3661,"p"),e(3662,"Deve ser usado o sistema de "),i(3663,"strong"),e(3664,"grid"),t(),e(3665," do PO (1 ... 12 colunas)."),t(),i(3666,"blockquote")(3667,"p"),e(3668,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(3669,"code"),e(3670,"offsetColumns"),t(),e(3671,"."),t()()()(),i(3672,"tr",16)(3673,"td",17)(3674,"div",25)(3675,"span",26),e(3676," offsetMdColumns"),n(3677,"br"),t()()(),i(3678,"td",21)(3679,"code",44),e(3680,"number"),t()(),i(3681,"td",24)(3682,"em")(3683,"strong"),e(3684,"(opcional)"),t()(),i(3685,"p"),e(3686,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),i(3687,"p"),e(3688,"Deve ser usado o sistema de "),i(3689,"strong"),e(3690,"grid"),t(),e(3691," do PO (1 ... 12 colunas)."),t(),i(3692,"blockquote")(3693,"p"),e(3694,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(3695,"code"),e(3696,"offsetColumns"),t(),e(3697,"."),t()()()(),i(3698,"tr",16)(3699,"td",17)(3700,"div",25)(3701,"span",26),e(3702," offsetSmColumns"),n(3703,"br"),t()()(),i(3704,"td",21)(3705,"code",44),e(3706,"number"),t()(),i(3707,"td",24)(3708,"em")(3709,"strong"),e(3710,"(opcional)"),t()(),i(3711,"p"),e(3712,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),i(3713,"p"),e(3714,"Deve ser usado o sistema de "),i(3715,"strong"),e(3716,"grid"),t(),e(3717," do PO (1 ... 12 colunas)."),t(),i(3718,"blockquote")(3719,"p"),e(3720,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(3721,"code"),e(3722,"offsetColumns"),t(),e(3723,"."),t()()()(),i(3724,"tr",16)(3725,"td",17)(3726,"div",25)(3727,"span",26),e(3728," offsetXlColumns"),n(3729,"br"),t()()(),i(3730,"td",21)(3731,"code",44),e(3732,"number"),t()(),i(3733,"td",24)(3734,"em")(3735,"strong"),e(3736,"(opcional)"),t()(),i(3737,"p"),e(3738,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),i(3739,"p"),e(3740,"Deve ser usado o sistema de "),i(3741,"strong"),e(3742,"grid"),t(),e(3743," do PO (1 ... 12 colunas)."),t(),i(3744,"blockquote")(3745,"p"),e(3746,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(3747,"code"),e(3748,"offsetColumns"),t(),e(3749,"."),t()()()(),i(3750,"tr",16)(3751,"td",17)(3752,"div",25)(3753,"span",26),e(3754," onError"),n(3755,"br"),t()()(),i(3756,"td",21)(3757,"code",43),e(3758,"Function"),t()(),i(3759,"td",24)(3760,"em")(3761,"strong"),e(3762,"(opcional)"),t()(),i(3763,"p"),e(3764,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),t(),i(3765,"blockquote")(3766,"p"),e(3767,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),i(3768,"code"),e(3769,"HttpErrorResponse"),t(),e(3770,"."),t()(),i(3771,"p")(3772,"strong"),e(3773,"Componente compat\xEDvel"),t(),e(3774,": "),i(3775,"code"),e(3776,"po-upload"),t()()()(),i(3777,"tr",16)(3778,"td",17)(3779,"div",25)(3780,"span",26),e(3781," onSuccess"),n(3782,"br"),t()()(),i(3783,"td",21)(3784,"code",43),e(3785,"Function"),t()(),i(3786,"td",24)(3787,"em")(3788,"strong"),e(3789,"(opcional)"),t()(),i(3790,"p"),e(3791,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),t(),i(3792,"blockquote")(3793,"p"),e(3794,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),i(3795,"code"),e(3796,"HttpResponse"),t(),e(3797,"."),t()(),i(3798,"p")(3799,"strong"),e(3800,"Componente compat\xEDvel"),t(),e(3801,": "),i(3802,"code"),e(3803,"po-upload"),t()()()(),i(3804,"tr",16)(3805,"td",17)(3806,"div",25)(3807,"span",26),e(3808," onUpload"),n(3809,"br"),t()()(),i(3810,"td",21)(3811,"code",43),e(3812,"Function"),t()(),i(3813,"td",24)(3814,"em")(3815,"strong"),e(3816,"(opcional)"),t()(),i(3817,"p"),e(3818,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),t(),i(3819,"pre")(3820,"code"),e(3821,`event.data = {id: 'id do usu\xE1rio'};
`),t()(),i(3822,"p")(3823,"strong"),e(3824,"Componente compat\xEDvel"),t(),e(3825,": "),i(3826,"code"),e(3827,"po-upload"),t()()()(),i(3828,"tr",16)(3829,"td",17)(3830,"div",25)(3831,"span",26),e(3832," optional"),n(3833,"br"),t()()(),i(3834,"td",21)(3835,"code",29),e(3836,"boolean"),t()(),i(3837,"td",24)(3838,"em")(3839,"strong"),e(3840,"(opcional)"),t()(),i(3841,"p"),e(3842,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),i(3843,"blockquote")(3844,"p"),e(3845,"A indica\xE7\xE3o n\xE3o ser\xE1 exibida, se:"),t()(),i(3846,"ul")(3847,"li"),e(3848,"O campo for "),i(3849,"code"),e(3850,"required"),t(),e(3851,", ou;"),t(),i(3852,"li"),e(3853,"N\xE3o possuir "),i(3854,"code"),e(3855,"help"),t(),e(3856," e "),i(3857,"code"),e(3858,"label"),t(),e(3859,"."),t()()()(),i(3860,"tr",16)(3861,"td",17)(3862,"div",25)(3863,"span",26),e(3864," options"),n(3865,"br"),t()()(),i(3866,"td",21)(3867,"code",32),e(3868,"Array<string> "),t(),i(3869,"code",67),e(3870," Array<PoSelectOption> "),t(),i(3871,"code",68),e(3872," Array<PoMultiselectOption> "),t(),i(3873,"code",69),e(3874," Array<PoCheckboxGroupOption> "),t(),i(3875,"code",70),e(3876," Array<any>"),t()(),i(3877,"td",24)(3878,"em")(3879,"strong"),e(3880,"(opcional)"),t()(),i(3881,"p"),e(3882,"Lista de op\xE7\xF5es que ser\xE3o exibidos em um componente, podendo selecionar uma op\xE7\xE3o."),t(),i(3883,"p")(3884,"strong"),e(3885,"Componentes compat\xEDveis:"),t(),i(3886,"code"),e(3887,"po-select"),t(),e(3888,", "),i(3889,"code"),e(3890,"po-radio-group"),t(),e(3891,", "),i(3892,"code"),e(3893,"po-checkbox-group"),t(),e(3894,", "),i(3895,"code"),e(3896,"po-multiselect"),t(),e(3897,"."),t()()(),i(3898,"tr",16)(3899,"td",17)(3900,"div",25)(3901,"span",26),e(3902," optionsMulti"),n(3903,"br"),t()()(),i(3904,"td",21)(3905,"code",29),e(3906,"boolean"),t()(),i(3907,"td",24)(3908,"em")(3909,"strong"),e(3910,"(opcional)"),t()(),i(3911,"p"),e(3912,"Permite que o usu\xE1rio fa\xE7a m\xFAltipla sele\xE7\xE3o dentro da lista de op\xE7\xF5es."),t()()(),i(3913,"tr",16)(3914,"td",17)(3915,"div",25)(3916,"span",26),e(3917," optionsService"),n(3918,"br"),t()()(),i(3919,"td",21)(3920,"code",27),e(3921,"string "),t(),i(3922,"code",71),e(3923," PoComboFilter "),t(),i(3924,"code",72),e(3925," PoMultiselectFilter"),t()(),i(3926,"td",24)(3927,"em")(3928,"strong"),e(3929,"(opcional)"),t()(),i(3930,"p"),e(3931,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),i(3932,"strong"),e(3933,"Importante"),t()(),i(3934,"blockquote")(3935,"p"),e(3936,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),i(3937,"a",7),e(3938,"guia de API do PO UI"),t(),e(3939,"."),t()()()(),i(3940,"tr",16)(3941,"td",17)(3942,"div",25)(3943,"span",26),e(3944," order"),n(3945,"br"),t()()(),i(3946,"td",21)(3947,"code",44),e(3948,"number"),t()(),i(3949,"td",24)(3950,"em")(3951,"strong"),e(3952,"(opcional)"),t()(),i(3953,"p"),e(3954,"Informa a ordem de exibi\xE7\xE3o do campo."),t(),i(3955,"p"),e(3956,"Exemplo de utiliza\xE7\xE3o:"),t(),i(3957,"p")(3958,"code"),e(3959,"[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];"),t()(),i(3960,"p"),e(3961,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),i(3962,"code"),e(3963,"[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];"),t()(),i(3964,"p"),e(3965,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),t(),i(3966,"p"),e(3967,"Campos sem "),i(3968,"code"),e(3969,"order"),t(),e(3970,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),t()()(),i(3971,"tr",16)(3972,"td",17)(3973,"div",25)(3974,"span",26),e(3975," params"),n(3976,"br"),t()()(),i(3977,"td",21)(3978,"code",33),e(3979,"any"),t()(),i(3980,"td",24)(3981,"em")(3982,"strong"),e(3983,"(opcional)"),t()(),i(3984,"p"),e(3985,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca usados pelos componentes "),i(3986,"code"),e(3987,"po-lookup"),t(),e(3988,` e
`),i(3989,"code"),e(3990,"po-combo"),t(),e(3991,"."),t(),i(3992,"p"),e(3993,"Por exemplo, para o par\xE2metro "),i(3994,"code"),e(3995,"{ age: 23 }"),t(),e(3996," a URL da requisi\xE7\xE3o ficaria:"),t(),i(3997,"p")(3998,"code"),e(3999,"url + ?age=23&filter=Peter"),t()()()(),i(4e3,"tr",16)(4001,"td",17)(4002,"div",25)(4003,"span",26),e(4004," pattern"),n(4005,"br"),t()()(),i(4006,"td",21)(4007,"code",27),e(4008,"string"),t()(),i(4009,"td",24)(4010,"em")(4011,"strong"),e(4012,"(opcional)"),t()(),i(4013,"p"),e(4014,"Regex para valida\xE7\xE3o do campo."),t(),i(4015,"p")(4016,"strong"),e(4017,"Componentes compat\xEDveis:"),t(),i(4018,"code"),e(4019,"po-input"),t(),e(4020,", "),i(4021,"code"),e(4022,"po-password"),t(),e(4023,"."),t()()(),i(4024,"tr",16)(4025,"td",17)(4026,"div",25)(4027,"span",26),e(4028," placeholder"),n(4029,"br"),t()()(),i(4030,"td",21)(4031,"code",27),e(4032,"string"),t()(),i(4033,"td",24)(4034,"em")(4035,"strong"),e(4036,"(opcional)"),t()(),i(4037,"p"),e(4038,"Mensagem que ser\xE1 exibida enquanto o campo n\xE3o estiver preenchido."),t()()(),i(4039,"tr",16)(4040,"td",17)(4041,"div",25)(4042,"span",26),e(4043," placeholderSearch"),n(4044,"br"),t()()(),i(4045,"td",21)(4046,"code",27),e(4047,"string"),t()(),i(4048,"td",24)(4049,"em")(4050,"strong"),e(4051,"(opcional)"),t()(),i(4052,"p"),e(4053,"Placeholder do campo de pesquisa do "),i(4054,"code"),e(4055,"po-multiselect"),t(),e(4056,"."),t(),i(4057,"blockquote")(4058,"p"),e(4059,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),t()()()(),i(4060,"tr",16)(4061,"td",17)(4062,"div",25)(4063,"span",26),e(4064," property"),n(4065,"br"),t()()(),i(4066,"td",21)(4067,"code",27),e(4068,"string"),t()(),i(4069,"td",24)(4070,"p"),e(4071,"Nome de refer\xEAncia do campo."),t()()(),i(4072,"tr",16)(4073,"td",17)(4074,"div",25)(4075,"span",26),e(4076," range"),n(4077,"br"),t()()(),i(4078,"td",21)(4079,"code",29),e(4080,"boolean"),t()(),i(4081,"td",24)(4082,"em")(4083,"strong"),e(4084,"(opcional)"),t()(),i(4085,"p"),e(4086,"O controle passa a permitir a entrada de um intervalo ao inv\xE9s de um \xFAnico valor."),t(),i(4087,"blockquote")(4088,"p"),e(4089,"Atualmente essa propriedade est\xE1 dispon\xEDvel apenas para o tipo 'date' e 'dateTime'."),t()()()(),i(4090,"tr",16)(4091,"td",17)(4092,"div",25)(4093,"span",26),e(4094," readonly"),n(4095,"br"),t()()(),i(4096,"td",21)(4097,"code",29),e(4098,"boolean"),t()(),i(4099,"td",24)(4100,"em")(4101,"strong"),e(4102,"(opcional)"),t()(),i(4103,"p"),e(4104,"Indica que o campo ser\xE1 somente leitura."),t(),i(4105,"p")(4106,"strong"),e(4107,"Componentes compat\xEDveis:"),t(),i(4108,"code"),e(4109,"po-datepicker"),t(),e(4110,", "),i(4111,"code"),e(4112,"po-datepicker-range"),t(),e(4113,", "),i(4114,"code"),e(4115,"po-input"),t(),e(4116,", "),i(4117,"code"),e(4118,"po-number"),t(),e(4119,", "),i(4120,"code"),e(4121,"po-decimal"),t(),e(4122,", "),i(4123,"code"),e(4124,"po-select"),t(),e(4125,", "),i(4126,"code"),e(4127,"po-textarea"),t(),e(4128,", "),i(4129,"code"),e(4130,"po-password"),t()()()(),i(4131,"tr",16)(4132,"td",17)(4133,"div",25)(4134,"span",26),e(4135," removeInitialFilter"),n(4136,"br"),t()()(),i(4137,"td",21)(4138,"code",29),e(4139,"boolean"),t()(),i(4140,"td",24)(4141,"em")(4142,"strong"),e(4143,"(opcional)"),t()(),i(4144,"p"),e(4145,"Define que o filtro no primeiro clique ser\xE1 removido."),t(),i(4146,"blockquote")(4147,"p"),e(4148,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),t()(),i(4149,"p")(4150,"strong"),e(4151,"Componente compat\xEDvel"),t(),e(4152,": "),i(4153,"code"),e(4154,"po-combo"),t()()()(),i(4155,"tr",16)(4156,"td",17)(4157,"div",25)(4158,"span",26),e(4159," required"),n(4160,"br"),t()()(),i(4161,"td",21)(4162,"code",29),e(4163,"boolean"),t()(),i(4164,"td",24)(4165,"em")(4166,"strong"),e(4167,"(opcional)"),t()(),i(4168,"p"),e(4169,"Define a obrigatoriedade do campo."),t()()(),i(4170,"tr",16)(4171,"td",17)(4172,"div",25)(4173,"span",26),e(4174," requiredFieldErrorMessage"),n(4175,"br"),t()()(),i(4176,"td",21)(4177,"code",29),e(4178,"boolean"),t()(),i(4179,"td",24)(4180,"em")(4181,"strong"),e(4182,"(opcional)"),t()(),i(4183,"p"),e(4184,"Exibe a mensagem setada na propriedade "),i(4185,"code"),e(4186,"errorMessage"),t(),e(4187," se o campo estiver vazio e for requerido."),t(),i(4188,"blockquote")(4189,"p"),e(4190,"Necess\xE1rio que a propriedade "),i(4191,"code"),e(4192,"required"),t(),e(4193," esteja habilitada."),t()(),i(4194,"p")(4195,"strong"),e(4196,"Componentes compat\xEDveis:"),t(),i(4197,"code"),e(4198,"po-datepicker"),t(),e(4199,", "),i(4200,"code"),e(4201,"po-input"),t(),e(4202,", "),i(4203,"code"),e(4204,"po-number"),t(),e(4205,", "),i(4206,"code"),e(4207,"po-decimal"),t(),e(4208,", "),i(4209,"code"),e(4210,"po-password"),t(),e(4211,"."),t()()(),i(4212,"tr",16)(4213,"td",17)(4214,"div",25)(4215,"span",26),e(4216," restrictions"),n(4217,"br"),t()()(),i(4218,"td",21)(4219,"code",73),e(4220,"PoUploadFileRestrictions"),t()(),i(4221,"td",24)(4222,"em")(4223,"strong"),e(4224,"(opcional)"),t()(),i(4225,"p"),e(4226,"Objeto que segue a defini\xE7\xE3o da interface "),i(4227,"code"),e(4228,"PoUploadFileRestrictions"),t(),e(4229,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),t(),i(4230,"p")(4231,"strong"),e(4232,"Componente compat\xEDvel"),t(),e(4233,": "),i(4234,"code"),e(4235,"po-upload"),t()()()(),i(4236,"tr",16)(4237,"td",17)(4238,"div",25)(4239,"span",26),e(4240," rows"),n(4241,"br"),t()()(),i(4242,"td",21)(4243,"code",44),e(4244,"number"),t()(),i(4245,"td",24)(4246,"em")(4247,"strong"),e(4248,"(opcional)"),t()(),i(4249,"p"),e(4250,"Quantidade de linhas exibidas no "),i(4251,"code"),e(4252,"po-textarea"),t(),e(4253,"."),t()()(),i(4254,"tr",16)(4255,"td",17)(4256,"div",25)(4257,"span",26),e(4258," searchService"),n(4259,"br"),t()()(),i(4260,"td",21)(4261,"code",27),e(4262,"string "),t(),i(4263,"code",34),e(4264," PoLookupFilter"),t()(),i(4265,"td",24)(4266,"em")(4267,"strong"),e(4268,"(opcional)"),t()(),i(4269,"p"),e(4270,"Servi\xE7o que ser\xE1 utilizado para realizar a busca avan\xE7ada. Pode ser utilizado em conjunto com a propriedade "),i(4271,"code"),e(4272,"columns"),t(),e(4273,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),i(4274,"strong"),e(4275,"Importante:"),t()(),i(4276,"blockquote")(4277,"p"),e(4278,"Caso utilizar a propriedade "),i(4279,"code"),e(4280,"optionsService"),t(),e(4281,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),i(4282,"a",7),e(4283,"guia de API do PO UI"),t(),e(4284,"."),t()()()(),i(4285,"tr",16)(4286,"td",17)(4287,"div",25)(4288,"span",26),e(4289," secret"),n(4290,"br"),t()()(),i(4291,"td",21)(4292,"code",29),e(4293,"boolean"),t()(),i(4294,"td",24)(4295,"em")(4296,"strong"),e(4297,"(opcional)"),t()(),i(4298,"p"),e(4299,"Esconde a informa\xE7\xE3o estilo "),i(4300,"em"),e(4301,"password"),t(),e(4302,", pode ser utilizado quando o tipo de dado for "),i(4303,"em"),e(4304,"string"),t(),e(4305,"."),t()()(),i(4306,"tr",16)(4307,"td",17)(4308,"div",25)(4309,"span",26),e(4310," showRequired"),n(4311,"br"),t()()(),i(4312,"td",21)(4313,"code",29),e(4314,"boolean"),t()(),i(4315,"td",24)(4316,"em")(4317,"strong"),e(4318,"(opcional)"),t()(),i(4319,"p"),e(4320,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),i(4321,"blockquote")(4322,"p"),e(4323,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),i(4324,"ul")(4325,"li"),e(4326,"N\xE3o possuir "),i(4327,"code"),e(4328,"p-help"),t(),e(4329," e/ou "),i(4330,"code"),e(4331,"p-label"),t(),e(4332,"."),t()()()(),i(4333,"tr",16)(4334,"td",17)(4335,"div",25)(4336,"span",26),e(4337," showThumbnail"),n(4338,"br"),t()()(),i(4339,"td",21)(4340,"code",29),e(4341,"boolean"),t()(),i(4342,"td",24)(4343,"em")(4344,"strong"),e(4345,"(opcional)"),t()(),i(4346,"p"),e(4347,"Exibe a pr\xE9-visualiza\xE7\xE3o de imagens ao anex\xE1-las."),t(),i(4348,"blockquote")(4349,"p"),e(4350,"Propriedade funciona apenas em arquivos de formato de imagem ("),i(4351,"code"),e(4352,".png"),t(),e(4353,", "),i(4354,"code"),e(4355,".jpg"),t(),e(4356,", "),i(4357,"code"),e(4358,".jpeg"),t(),e(4359," e "),i(4360,"code"),e(4361,".gif"),t(),e(4362,")."),t()(),i(4363,"p")(4364,"strong"),e(4365,"Componente compat\xEDvel"),t(),e(4366,": "),i(4367,"code"),e(4368,"po-upload"),t()()()(),i(4369,"tr",16)(4370,"td",17)(4371,"div",25)(4372,"span",26),e(4373," size"),n(4374,"br"),t()()(),i(4375,"td",21)(4376,"code",27),e(4377,"string"),t()(),i(4378,"td",24)(4379,"em")(4380,"strong"),e(4381,"(opcional)"),t()(),i(4382,"p"),e(4383,"Define o tamanho dos componentes de formul\xE1rio no template conforme suas respectivas documenta\xE7\xF5es:"),t(),i(4384,"ul")(4385,"li")(4386,"code"),e(4387,"small"),t(),e(4388,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(4389,"li")(4390,"code"),e(4391,"medium"),t(),e(4392,": aplica a medida medium de cada componente."),t(),i(4393,"li")(4394,"code"),e(4395,"large"),t(),e(4396,": aplica a medida large de cada componente (dispon\xEDvel para "),i(4397,"code"),e(4398,"po-checkbox"),t(),e(4399," e "),i(4400,"code"),e(4401,"po-radio-group"),t(),e(4402,")."),i(4403,"blockquote")(4404,"p"),e(4405,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(4406,"code"),e(4407,"medium"),t(),e(4408,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(4409,"a",39),e(4410,"po-theme"),t(),e(4411,"."),t()()()()()(),i(4412,"tr",16)(4413,"td",17)(4414,"div",25)(4415,"span",26),e(4416," sort"),n(4417,"br"),t()()(),i(4418,"td",21)(4419,"code",29),e(4420,"boolean"),t()(),i(4421,"td",24)(4422,"em")(4423,"strong"),e(4424,"(opcional)"),t()(),i(4425,"p"),e(4426,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),t(),i(4427,"p")(4428,"strong"),e(4429,"Componentes compat\xEDveis:"),t(),i(4430,"code"),e(4431,"po-combo"),t(),e(4432,", po-multiselect"),t()()(),i(4433,"tr",16)(4434,"td",17)(4435,"div",25)(4436,"span",26),e(4437," step"),n(4438,"br"),t()()(),i(4439,"td",21)(4440,"code",44),e(4441,"number"),t()(),i(4442,"td",24)(4443,"em")(4444,"strong"),e(4445,"(opcional)"),t()(),i(4446,"p"),e(4447,"Intervalo utilizado no "),i(4448,"code"),e(4449,"po-number"),t(),e(4450,"."),t()()(),i(4451,"tr",16)(4452,"td",17)(4453,"div",25)(4454,"span",26),e(4455," thousandMaxlength"),n(4456,"br"),t()()(),i(4457,"td",21)(4458,"code",44),e(4459,"number"),t()(),i(4460,"td",24)(4461,"em")(4462,"strong"),e(4463,"(opcional)"),t()(),i(4464,"p"),e(4465,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal. O valor m\xE1ximo permitido \xE9 13"),t(),i(4466,"blockquote")(4467,"p"),e(4468,"Esta propriedade s\xF3 pode ser utilizada quando o "),i(4469,"code"),e(4470,"type"),t(),e(4471," for "),i(4472,"em"),e(4473,"currency"),t(),e(4474," ou "),i(4475,"em"),e(4476,"decimal"),t(),e(4477,"."),t()()()(),i(4478,"tr",16)(4479,"td",17)(4480,"div",25)(4481,"span",26),e(4482," type"),n(4483,"br"),t()()(),i(4484,"td",21)(4485,"code",27),e(4486,"string "),t(),i(4487,"code",74),e(4488," PoDynamicFieldType"),t()(),i(4489,"td",24)(4490,"em")(4491,"strong"),e(4492,"(opcional)"),t()(),i(4493,"p"),e(4494,"Tipo do valor campo."),t(),i(4495,"p"),e(4496,"Valores v\xE1lidos:"),t(),i(4497,"ul")(4498,"li")(4499,"code"),e(4500,"boolean"),t(),e(4501,": Valores "),i(4502,"em"),e(4503,"booleanos"),t(),e(4504,"."),t(),i(4505,"li")(4506,"code"),e(4507,"currency"),t(),e(4508,": Valores monet\xE1rios."),t(),i(4509,"li")(4510,"code"),e(4511,"decimal"),t(),e(4512,": Valores decimais."),t(),i(4513,"li")(4514,"code"),e(4515,"date"),t(),e(4516,": Valores de datas."),i(4517,"ul")(4518,"li"),e(4519,"Aceita os tipos "),i(4520,"strong"),e(4521,"string"),t(),e(4522," e "),i(4523,"strong"),e(4524,"Date"),t(),e(4525,` padr\xE3o do Javascript,
por exemplo: `),i(4526,"code"),e(4527,"'2017-11-28'"),t(),e(4528," ou "),i(4529,"code"),e(4530,"new Date(2017, 10, 28)"),t(),e(4531,"."),t()()(),i(4532,"li")(4533,"code"),e(4534,"dateTime"),t(),e(4535,": Valor de data com hor\xE1rio."),i(4536,"ul")(4537,"li"),e(4538,"Aceita o tipo "),i(4539,"em"),e(4540,"string"),t(),e(4541," no formato "),i(4542,"strong"),e(4543,"ISO-8601"),t(),e(4544," extendido "),i(4545,"strong"),e(4546,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),t(),e(4547,`
e o tipo `),i(4548,"strong"),e(4549,"Date"),t(),e(4550," padr\xE3o do Javascript, por exemplo: "),i(4551,"code"),e(4552,"'2017-11-28T00:00:00-02:00'"),t(),e(4553," ou "),i(4554,"code"),e(4555,"new Date(2017, 10, 28)"),t(),e(4556,"."),t()()(),i(4557,"li")(4558,"code"),e(4559,"number"),t(),e(4560,": Valores num\xE9ricos."),t(),i(4561,"li")(4562,"code"),e(4563,"string"),t(),e(4564,": Textos."),t(),i(4565,"li")(4566,"code"),e(4567,"time"),t(),e(4568,": Valor do hor\xE1rio."),i(4569,"ul")(4570,"li"),e(4571,"Aceita o tipo "),i(4572,"strong"),e(4573,"string"),t(),e(4574," nos formatos "),i(4575,"strong"),e(4576,"'HH:mm:ss'"),t(),e(4577," ou "),i(4578,"strong"),e(4579,"'HH:mm:ss.ffffff'"),t(),e(4580,", por exemplo: "),i(4581,"code"),e(4582,"'23:12:45'"),t(),e(4583,"."),t()()()()()(),i(4584,"tr",16)(4585,"td",17)(4586,"div",25)(4587,"span",26),e(4588," url"),n(4589,"br"),t()()(),i(4590,"td",21)(4591,"code",27),e(4592,"string"),t()(),i(4593,"td",24)(4594,"em")(4595,"strong"),e(4596,"(opcional)"),t()(),i(4597,"p"),e(4598,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),t(),i(4599,"p")(4600,"strong"),e(4601,"Componente compat\xEDvel"),t(),e(4602,": "),i(4603,"code"),e(4604,"po-upload"),t()()()(),i(4605,"tr",16)(4606,"td",17)(4607,"div",25)(4608,"span",26),e(4609," validate"),n(4610,"br"),t()()(),i(4611,"td",21)(4612,"code",27),e(4613,"string "),t(),i(4614,"code",43),e(4615," Function"),t()(),i(4616,"td",24)(4617,"em")(4618,"strong"),e(4619,"(opcional)"),t()(),i(4620,"p"),e(4621,"Fun\xE7\xE3o ou servi\xE7o para validar as "),i(4622,"strong"),e(4623,"mudan\xE7as do campo"),t(),e(4624,"."),t(),i(4625,"ul")(4626,"li"),e(4627,"A propriedade aceita os seguintes tipos:"),t()(),i(4628,"ul")(4629,"li")(4630,"strong"),e(4631,"String"),t(),e(4632,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),i(4633,"code"),e(4634,"POST"),t(),e(4635,"."),t(),i(4636,"li")(4637,"strong"),e(4638,"Function"),t(),e(4639,": M\xE9todo que ser\xE1 executado."),t()(),i(4640,"p"),e(4641,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),i(4642,"code"),e(4643,"PoDynamicFormFieldChanged"),t(),e(4644,":"),t(),i(4645,"p")(4646,"code"),e(4647,"{ property: 'property name', value: 'new value' }"),t()(),i(4648,"p"),e(4649,"O retorno desta fun\xE7\xE3o deve ser do tipo "),i(4650,"a",75),e(4651,"PoDynamicFormFieldValidation"),t(),e(4652,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),t(),i(4653,"pre")(4654,"code"),e(4655,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),t()(),i(4656,"p"),e(4657,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),i(4658,"code"),e(4659,"bind"),t(),e(4660,`, por exemplo:
`),i(4661,"code"),e(4662,"{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }"),t()()()(),i(4663,"tr",16)(4664,"td",17)(4665,"div",25)(4666,"span",26),e(4667," visible"),n(4668,"br"),t()()(),i(4669,"td",21)(4670,"code",29),e(4671,"boolean"),t()(),i(4672,"td",24)(4673,"em")(4674,"strong"),e(4675,"(opcional)"),t()(),i(4676,"p"),e(4677,"Indica se o campo ser\xE1 vis\xEDvel."),t()()()(),i(4678,"h4",42)(4679,"code",5),e(4680,"PoLookupColumn"),t()(),i(4681,"div",2)(4682,"p"),e(4683,"Interface para configura\xE7\xE3o das colunas do po-lookup."),t()(),i(4684,"h4",12),e(4685,"Propriedades"),t(),i(4686,"table",13)(4687,"tr",14)(4688,"th",15),e(4689,"Nome"),t(),i(4690,"th",15),e(4691,"Tipo"),t(),i(4692,"th",15),e(4693,"Descri\xE7\xE3o"),t()(),i(4694,"tr",16)(4695,"td",17)(4696,"div",25)(4697,"span",26),e(4698," fieldLabel"),n(4699,"br"),t()()(),i(4700,"td",21)(4701,"code",29),e(4702,"boolean"),t()(),i(4703,"td",24)(4704,"em")(4705,"strong"),e(4706,"(opcional)"),t()(),i(4707,"p"),e(4708,"Indica que a coluna ser\xE1 utilizada como valor do campo e como filtro dentro da modal."),t(),i(4709,"p"),e(4710,`Se houver mais de uma configura\xE7\xE3o habilitada, \xE9 exibido os valores no campo concatenados separados
por um tra\xE7o("-"). Por exemplo: "Joinville - SC".`),t(),i(4711,"p"),e(4712,`Importante
Esta configura\xE7\xE3o se torna obsoleta caso os atributos `),i(4713,"code"),e(4714,"p-field-format"),t(),e(4715," ou "),i(4716,"code"),e(4717,"p-field-label"),t(),e(4718," forem configurados no componente."),t()()(),i(4719,"tr",16)(4720,"td",17)(4721,"div",25)(4722,"span",26),e(4723," format"),n(4724,"br"),t()()(),i(4725,"td",21)(4726,"code",27),e(4727,"string"),t()(),i(4728,"td",24)(4729,"em")(4730,"strong"),e(4731,"(opcional)"),t()(),i(4732,"p"),e(4733,"Formato de exibi\xE7\xE3o do valor da coluna:"),t(),i(4734,"ul")(4735,"li"),e(4736,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),t(),i(4737,"li"),e(4738,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
valor padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),t()()()(),i(4739,"tr",16)(4740,"td",17)(4741,"div",25)(4742,"span",26),e(4743," label"),n(4744,"br"),t()()(),i(4745,"td",21)(4746,"code",27),e(4747,"string"),t()(),i(4748,"td",24)(4749,"em")(4750,"strong"),e(4751,"(opcional)"),t()(),i(4752,"p"),e(4753,"Texto para t\xEDtulo da coluna."),t(),i(4754,"p"),e(4755,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(4756,"em"),e(4757,"label"),t(),e(4758," o valor da propriedade "),i(4759,"em"),e(4760,"property"),t(),e(4761," com a primeira letra em mai\xFAsculo."),t()()(),i(4762,"tr",16)(4763,"td",17)(4764,"div",25)(4765,"span",26),e(4766," property"),n(4767,"br"),t()()(),i(4768,"td",21)(4769,"code",27),e(4770,"string"),t()(),i(4771,"td",24)(4772,"em")(4773,"strong"),e(4774,"(opcional)"),t()(),i(4775,"p"),e(4776,"Nome identificador da coluna."),t()()(),i(4777,"tr",16)(4778,"td",17)(4779,"div",25)(4780,"span",26),e(4781," type"),n(4782,"br"),t()()(),i(4783,"td",21)(4784,"code",27),e(4785,"string"),t()(),i(4786,"td",24)(4787,"em")(4788,"strong"),e(4789,"(opcional)"),t()(),i(4790,"p"),e(4791,"Tipo da coluna:"),t(),i(4792,"ul")(4793,"li"),e(4794,"string (padr\xE3o): textos"),t(),i(4795,"li"),e(4796,"number: valores num\xE9ricos"),t(),i(4797,"li"),e(4798,"date: data"),t(),i(4799,"li"),e(4800,"currency: valores monet\xE1rios"),t(),i(4801,"li"),e(4802,"dateTime: data e hora"),t()()()(),i(4803,"tr",16)(4804,"td",17)(4805,"div",25)(4806,"span",26),e(4807," width"),n(4808,"br"),t()()(),i(4809,"td",21)(4810,"code",27),e(4811,"string"),t()(),i(4812,"td",24)(4813,"em")(4814,"strong"),e(4815,"(opcional)"),t()(),i(4816,"p"),e(4817,"A largura da coluna pode ser informada em pixels ou porcentagem. Exemplo: '100px' ou '20%'"),t()()()(),i(4818,"h4",42)(4819,"code",5),e(4820,"PoLookupFilter"),t()(),i(4821,"div",2)(4822,"p"),e(4823,"Define o tipo de busca utilizado no po-lookup."),t()(),i(4824,"h4",12),e(4825,"M\xE9todos"),t(),i(4826,"table",40)(4827,"tr",16)(4828,"th",41)(4829,"div",25)(4830,"h4")(4831,"span",26),e(4832," getFilteredItems "),t()()()()(),i(4833,"tr",24)(4834,"td",24)(4835,"p"),e(4836,`M\xE9todo que ser\xE1 disparado ao filtrar a lista de itens ou carregar mais resultados no componente, deve-se retornar
um `),i(4837,"em"),e(4838,"Observable"),t(),e(4839," com a resposta da API no formato da interface "),i(4840,"code"),e(4841,"PoLookupResponseApi"),t(),e(4842,"."),t()()()(),i(4843,"h5")(4844,"b"),e(4845,"Par\xE2metros"),t()(),i(4846,"table",13)(4847,"tr",14)(4848,"th",15),e(4849,"Nome"),t(),i(4850,"th",15),e(4851,"Tipo"),t(),i(4852,"th",15),e(4853,"Descri\xE7\xE3o"),t()(),i(4854,"tr",16)(4855,"td",17),e(4856," params"),t(),i(4857,"td",21)(4858,"code",76),e(4859," PoLookupFilteredItemsParams "),t()(),i(4860,"td",24)(4861,"p"),e(4862,"Objeto enviado por par\xE2metro que implementa a interface "),i(4863,"code"),e(4864,"PoLookupFilteredItemsParams"),t(),e(4865,"."),t()()()(),n(4866,"br"),i(4867,"table",40)(4868,"tr",16)(4869,"th",41)(4870,"div",25)(4871,"h4")(4872,"span",26),e(4873," getObjectByValue "),t()()()()(),i(4874,"tr",24)(4875,"td",24)(4876,"p"),e(4877,"M\xE9todo respons\xE1vel por enviar um valor que ser\xE1 buscado no servi\xE7o."),t(),i(4878,"p"),e(4879,`Caso a funcionalidade de m\xFAltipla sele\xE7\xE3o estver habilitada, o parametro value ser\xE1 enviado como uma lista de valores
e o observable deve retornar uma lista de objetos.`),t()()()(),i(4880,"h5")(4881,"b"),e(4882,"Par\xE2metros"),t()(),i(4883,"table",13)(4884,"tr",14)(4885,"th",15),e(4886,"Nome"),t(),i(4887,"th",15),e(4888,"Tipo"),t(),i(4889,"th",15),e(4890,"Descri\xE7\xE3o"),t()(),i(4891,"tr",16)(4892,"td",17),e(4893," value"),t(),i(4894,"td",21)(4895,"code",27),e(4896," string "),t(),i(4897,"code",70),e(4898," Array<any> "),t()(),i(4899,"td",24)(4900,"p"),e(4901,"Valor \xFAnico a ser buscado na fonte de dados."),t()()(),i(4902,"tr",16)(4903,"td",17),e(4904," filterParams"),t(),i(4905,"td",21)(4906,"code",76),e(4907," any "),t()(),i(4908,"td",24)(4909,"p"),e(4910,"Valor informado atrav\xE9s da propriedade "),i(4911,"code"),e(4912,"p-filter-params"),t(),e(4913,"."),t()()()(),n(4914,"br"),i(4915,"h4",42)(4916,"code",5),e(4917,"PoLookupFilteredItemsParams"),t()(),i(4918,"div",2)(4919,"p"),e(4920,"Interface do objeto enviado como par\xE2metro na fun\xE7\xE3o "),i(4921,"code"),e(4922,"getFilteredItems"),t(),e(4923,"."),t()(),i(4924,"h4",12),e(4925,"Propriedades"),t(),i(4926,"table",13)(4927,"tr",14)(4928,"th",15),e(4929,"Nome"),t(),i(4930,"th",15),e(4931,"Tipo"),t(),i(4932,"th",15),e(4933,"Descri\xE7\xE3o"),t()(),i(4934,"tr",16)(4935,"td",17)(4936,"div",25)(4937,"span",26),e(4938," advancedFilters"),n(4939,"br"),t()()(),i(4940,"td",21)(4941,"code",77),e(4942,`{ [key: string]: any;
}`),t()(),i(4943,"td",24)(4944,"em")(4945,"strong"),e(4946,"(opcional)"),t()(),i(4947,"p"),e(4948,"Valores informados nos campos de busca avan\xE7ada, que ser\xE3o utilizados para filtrar a lista de itens."),t()()(),i(4949,"tr",16)(4950,"td",17)(4951,"div",25)(4952,"span",26),e(4953," filter"),n(4954,"br"),t()()(),i(4955,"td",21)(4956,"code",27),e(4957,"string"),t()(),i(4958,"td",24)(4959,"em")(4960,"strong"),e(4961,"(opcional)"),t()(),i(4962,"p"),e(4963,"Conte\xFAdo utilizado para filtrar a lista de itens."),t()()(),i(4964,"tr",16)(4965,"td",17)(4966,"div",25)(4967,"span",26),e(4968," filterParams"),n(4969,"br"),t()()(),i(4970,"td",21)(4971,"code",33),e(4972,"any"),t()(),i(4973,"td",24)(4974,"em")(4975,"strong"),e(4976,"(opcional)"),t()(),i(4977,"p"),e(4978,"Valor informado atrav\xE9s da propriedade "),i(4979,"code"),e(4980,"p-filter-params"),t(),e(4981,"."),t()()(),i(4982,"tr",16)(4983,"td",17)(4984,"div",25)(4985,"span",26),e(4986," order"),n(4987,"br"),t()()(),i(4988,"td",21)(4989,"code",27),e(4990,"string"),t()(),i(4991,"td",24)(4992,"em")(4993,"strong"),e(4994,"(opcional)"),t()(),i(4995,"p"),e(4996,"Coluna que est\xE1 sendo ordenada na tabela."),t(),i(4997,"ul")(4998,"li"),e(4999,"Coluna decrescente ser\xE1 informada da seguinte forma: "),i(5e3,"code"),e(5001,"-<colunaOrdenada>"),t(),e(5002,", por exemplo "),i(5003,"code"),e(5004,"-name"),t(),e(5005,"."),t(),i(5006,"li"),e(5007,"Coluna ascendente ser\xE1 informada da seguinte forma: "),i(5008,"code"),e(5009,"<colunaOrdenada>"),t(),e(5010,", por exemplo "),i(5011,"code"),e(5012,"name"),t(),e(5013,"."),t()()()(),i(5014,"tr",16)(5015,"td",17)(5016,"div",25)(5017,"span",26),e(5018," page"),n(5019,"br"),t()()(),i(5020,"td",21)(5021,"code",44),e(5022,"number"),t()(),i(5023,"td",24)(5024,"em")(5025,"strong"),e(5026,"(opcional)"),t()(),i(5027,"p"),e(5028,"Controla a pagina\xE7\xE3o dos dados e recebe valor automaticamente a cada clique no bot\xE3o 'Carregar mais resultados'."),t()()(),i(5029,"tr",16)(5030,"td",17)(5031,"div",25)(5032,"span",26),e(5033," pageSize"),n(5034,"br"),t()()(),i(5035,"td",21)(5036,"code",44),e(5037,"number"),t()(),i(5038,"td",24)(5039,"em")(5040,"strong"),e(5041,"(opcional)"),t()(),i(5042,"p"),e(5043,"Quantidade de itens retornados cada vez que o servi\xE7o \xE9 chamado, por padr\xE3o \xE9 10."),t()()()(),i(5044,"h4",42)(5045,"code",5),e(5046,"PoLookupLiterals"),t()(),i(5047,"div",2)(5048,"p"),e(5049,"Interface para defini\xE7\xE3o das literais usadas no "),i(5050,"code"),e(5051,"po-lookup"),t(),e(5052,"."),t()(),i(5053,"h4",12),e(5054,"Propriedades"),t(),i(5055,"table",13)(5056,"tr",14)(5057,"th",15),e(5058,"Nome"),t(),i(5059,"th",15),e(5060,"Tipo"),t(),i(5061,"th",15),e(5062,"Descri\xE7\xE3o"),t()(),i(5063,"tr",16)(5064,"td",17)(5065,"div",25)(5066,"span",26),e(5067," clean"),n(5068,"br"),t()()(),i(5069,"td",21)(5070,"code",27),e(5071,"string"),t()(),i(5072,"td",24)(5073,"em")(5074,"strong"),e(5075,"(opcional)"),t()(),i(5076,"p"),e(5077,"Texto usado no leitor de tela para acessibilidade. Aplica-se ao \xEDcone de limpar."),t()()(),i(5078,"tr",16)(5079,"td",17)(5080,"div",25)(5081,"span",26),e(5082," modalAdvancedSearch"),n(5083,"br"),t()()(),i(5084,"td",21)(5085,"code",27),e(5086,"string"),t()(),i(5087,"td",24)(5088,"em")(5089,"strong"),e(5090,"(opcional)"),t()(),i(5091,"p"),e(5092,"Texto do link de busca avan\xE7ada."),t(),i(5093,"p"),e(5094,`Importante
Caso seja passado uma literal muito comprida poder\xE1 quebrar o layout.`),t()()(),i(5095,"tr",16)(5096,"td",17)(5097,"div",25)(5098,"span",26),e(5099," modalAdvancedSearchPrimaryActionLabel"),n(5100,"br"),t()()(),i(5101,"td",21)(5102,"code",27),e(5103,"string"),t()(),i(5104,"td",24)(5105,"em")(5106,"strong"),e(5107,"(opcional)"),t()(),i(5108,"p"),e(5109,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal de busca avan\xE7ada."),t()()(),i(5110,"tr",16)(5111,"td",17)(5112,"div",25)(5113,"span",26),e(5114," modalAdvancedSearchSecondaryActionLabel"),n(5115,"br"),t()()(),i(5116,"td",21)(5117,"code",27),e(5118,"string"),t()(),i(5119,"td",24)(5120,"em")(5121,"strong"),e(5122,"(opcional)"),t()(),i(5123,"p"),e(5124,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal de busca avan\xE7ada."),t()()(),i(5125,"tr",16)(5126,"td",17)(5127,"div",25)(5128,"span",26),e(5129," modalAdvancedSearchTitle"),n(5130,"br"),t()()(),i(5131,"td",21)(5132,"code",27),e(5133,"string"),t()(),i(5134,"td",24)(5135,"em")(5136,"strong"),e(5137,"(opcional)"),t()(),i(5138,"p"),e(5139,"Texto exibido no t\xEDtulo da modal de busca avan\xE7ada."),t()()(),i(5140,"tr",16)(5141,"td",17)(5142,"div",25)(5143,"span",26),e(5144," modalDisclaimerGroupTitle"),n(5145,"br"),t()()(),i(5146,"td",21)(5147,"code",27),e(5148,"string"),t()(),i(5149,"td",24)(5150,"em")(5151,"strong"),e(5152,"(opcional)"),t()(),i(5153,"p"),e(5154,"Texto exibido no t\xEDtulo do disclaimer."),t()()(),i(5155,"tr",16)(5156,"td",17)(5157,"div",25)(5158,"span",26),e(5159," modalPlaceholder"),n(5160,"br"),t()()(),i(5161,"td",21)(5162,"code",27),e(5163,"string"),t()(),i(5164,"td",24)(5165,"em")(5166,"strong"),e(5167,"(opcional)"),t()(),i(5168,"p"),e(5169,"Texto exibido no placeholder do input da modal."),t()()(),i(5170,"tr",16)(5171,"td",17)(5172,"div",25)(5173,"span",26),e(5174," modalPrimaryActionLabel"),n(5175,"br"),t()()(),i(5176,"td",21)(5177,"code",27),e(5178,"string"),t()(),i(5179,"td",24)(5180,"em")(5181,"strong"),e(5182,"(opcional)"),t()(),i(5183,"p"),e(5184,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal."),t()()(),i(5185,"tr",16)(5186,"td",17)(5187,"div",25)(5188,"span",26),e(5189," modalSecondaryActionLabel"),n(5190,"br"),t()()(),i(5191,"td",21)(5192,"code",27),e(5193,"string"),t()(),i(5194,"td",24)(5195,"em")(5196,"strong"),e(5197,"(opcional)"),t()(),i(5198,"p"),e(5199,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal."),t()()(),i(5200,"tr",16)(5201,"td",17)(5202,"div",25)(5203,"span",26),e(5204," modalTableLoadMoreData"),n(5205,"br"),t()()(),i(5206,"td",21)(5207,"code",27),e(5208,"string"),t()(),i(5209,"td",24)(5210,"em")(5211,"strong"),e(5212,"(opcional)"),t()(),i(5213,"p"),e(5214,"Label do "),i(5215,"code"),e(5216,"button"),t(),e(5217," que deve carregar mais resultados na tabela, ou seja, exibir mais itens."),t()()(),i(5218,"tr",16)(5219,"td",17)(5220,"div",25)(5221,"span",26),e(5222," modalTableLoadingData"),n(5223,"br"),t()()(),i(5224,"td",21)(5225,"code",27),e(5226,"string"),t()(),i(5227,"td",24)(5228,"em")(5229,"strong"),e(5230,"(opcional)"),t()(),i(5231,"p"),e(5232,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na tabela."),t()()(),i(5233,"tr",16)(5234,"td",17)(5235,"div",25)(5236,"span",26),e(5237," modalTableNoColumns"),n(5238,"br"),t()()(),i(5239,"td",21)(5240,"code",27),e(5241,"string"),t()(),i(5242,"td",24)(5243,"em")(5244,"strong"),e(5245,"(opcional)"),t()(),i(5246,"p"),e(5247,"Texto exibido quando n\xE3o existem colunas definidas para a tabela."),t()()(),i(5248,"tr",16)(5249,"td",17)(5250,"div",25)(5251,"span",26),e(5252," modalTableNoData"),n(5253,"br"),t()()(),i(5254,"td",21)(5255,"code",27),e(5256,"string"),t()(),i(5257,"td",24)(5258,"em")(5259,"strong"),e(5260,"(opcional)"),t()(),i(5261,"p"),e(5262,"Texto exibido quando n\xE3o existem itens para serem exibidos na tabela."),t()()(),i(5263,"tr",16)(5264,"td",17)(5265,"div",25)(5266,"span",26),e(5267," modalTitle"),n(5268,"br"),t()()(),i(5269,"td",21)(5270,"code",27),e(5271,"string"),t()(),i(5272,"td",24)(5273,"em")(5274,"strong"),e(5275,"(opcional)"),t()(),i(5276,"p"),e(5277,"Texto exibido no t\xEDtulo da modal."),t()()(),i(5278,"tr",16)(5279,"td",17)(5280,"div",25)(5281,"span",26),e(5282," search"),n(5283,"br"),t()()(),i(5284,"td",21)(5285,"code",27),e(5286,"string"),t()(),i(5287,"td",24)(5288,"em")(5289,"strong"),e(5290,"(opcional)"),t()(),i(5291,"p"),e(5292,"Texto usado no leitor de tela para acessibilidade. Aplica-se ao \xEDcone de pesquisa."),t()()()(),i(5293,"h4",42)(5294,"code",5),e(5295,"PoLookupResponseApi"),t()(),i(5296,"div",2)(5297,"p"),e(5298,"Interface que representa a estrutura de resposta de uma cole\xE7\xE3o de itens. "),t()(),i(5299,"h4",12),e(5300,"Propriedades"),t(),i(5301,"table",13)(5302,"tr",14)(5303,"th",15),e(5304,"Nome"),t(),i(5305,"th",15),e(5306,"Tipo"),t(),i(5307,"th",15),e(5308,"Descri\xE7\xE3o"),t()(),i(5309,"tr",16)(5310,"td",17)(5311,"div",25)(5312,"span",26),e(5313," hasNext"),n(5314,"br"),t()()(),i(5315,"td",21)(5316,"code",29),e(5317,"boolean"),t()(),i(5318,"td",24)(5319,"p"),e(5320,"Indica se existe uma pr\xF3xima p\xE1gina com mais registros para aquela cole\xE7\xE3o de itens."),t()()(),i(5321,"tr",16)(5322,"td",17)(5323,"div",25)(5324,"span",26),e(5325," items"),n(5326,"br"),t()()(),i(5327,"td",21)(5328,"code",78),e(5329,"Array<object>"),t()(),i(5330,"td",24)(5331,"p"),e(5332,"Lista de itens retornados."),t()()()(),i(5333,"h3"),e(5334,"Enums"),t(),i(5335,"h4",4)(5336,"code",5),e(5337,"PoTableColumnSpacing"),t()(),i(5338,"div",2)(5339,"p"),e(5340,"Tipos de espa\xE7amento interno (padding) das c\xE9lulas ("),i(5341,"strong"),e(5342,"p-spacing"),t(),e(5343,") do po-table."),t()(),i(5344,"h4",12),e(5345,"Propriedades"),t(),i(5346,"table",13)(5347,"tr",14)(5348,"th",15),e(5349,"Nome"),t(),i(5350,"th",15),e(5351,"Descri\xE7\xE3o"),t()(),i(5352,"tr",16)(5353,"td",17)(5354,"div",25)(5355,"span",26),e(5356," ExtraSmall"),n(5357,"br"),t()()(),i(5358,"td",24)(5359,"p"),e(5360,"Espa\xE7amento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal)."),t()()(),i(5361,"tr",16)(5362,"td",17)(5363,"div",25)(5364,"span",26),e(5365," Small"),n(5366,"br"),t()()(),i(5367,"td",24)(5368,"p"),e(5369,"Espa\xE7amento pequeno: 0.5rem (vertical) x 1rem (horizontal)."),t()()(),i(5370,"tr",16)(5371,"td",17)(5372,"div",25)(5373,"span",26),e(5374," Medium"),n(5375,"br"),t()()(),i(5376,"td",24)(5377,"p"),e(5378,"Espa\xE7amento m\xE9dio: 0.75rem (vertical) x 1rem (horizontal)."),t()()(),i(5379,"tr",16)(5380,"td",17)(5381,"div",25)(5382,"span",26),e(5383," Large"),n(5384,"br"),t()()(),i(5385,"td",24)(5386,"p"),e(5387,"Espa\xE7amento grande: 1rem (vertical) x 1rem (horizontal)."),t()()()()())},dependencies:[y],encapsulation:2})}return a})();var Be=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=6;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||a)(ne(he),ne(fe))};static \u0275cmp=S({type:a,selectors:[["ng-component"]],standalone:!1,decls:11,vars:4,consts:[["p-title","Lookup",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,o){l&1&&(i(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),x("p-click",function(){return o.changeTab("doc")}),n(3,"sample-po-lookup-doc"),t(),i(4,"po-tab",3),x("p-click",function(){return o.changeTab("web")}),n(5,"sample-po-lookup-basic-view")(6,"sample-po-lookup-labs-view")(7,"sample-po-lookup-hero-view")(8,"sample-po-lookup-hero-reactive-form-view")(9,"sample-po-lookup-sw-films-view")(10,"sample-po-lookup-multiple-view"),t()()()),l&2&&(u("p-actions",o.actions),d(2),u("p-active",o.activeTab==="doc"),d(2),u("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"))},dependencies:[Le,C,k,qe,Te,_e,Oe,Ve,He,Ne],encapsulation:2})}return a})();var ct=[{path:"",component:Be}],Re=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=J({type:a});static \u0275inj=Q({imports:[le.forChild(ct),le]})}return a})();var Mi=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=J({type:a});static \u0275inj=Q({imports:[Fe,Re]})}return a})();export{Mi as DocPoLookupModule};
