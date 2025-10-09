import{o as y,p as Fe}from"./chunk-ANUCWWDU.js";import{Ab as k,Fa as ye,J as X,Ja as q,O as Ce,Q as Y,Sa as N,Ta as Pe,Xa as B,a as O,nb as Le,sa as Z,v as H,va as ke,za as ee,zb as C}from"./chunk-WNVHYHMN.js";import{Aa as u,Ac as ae,Cb as w,Da as P,Dc as T,E as de,Ec as I,Fc as K,Gc as A,Ha as se,Hc as z,Kc as be,La as i,Lc as ve,M as j,Ma as t,N as Q,Na as n,Nb as Se,Pc as ge,Q as h,Ra as $,Sa as x,Ta as ue,U as c,Uc as he,V as E,Wc as fe,Xa as oe,Yc as le,_b as V,a as G,bb as ce,c as me,cb as e,eb as L,gb as b,hb as v,ib as g,ja as d,jb as _,ka as ne,kb as U,lb as F,p as ie,qa as S,ra as J,rb as Ee,sb as xe,wa as pe}from"./chunk-KZJHT32G.js";var we=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","lookup","p-field-label","label","p-field-value","value","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","PO Lookup"]],template:function(l,o){l&1&&n(0,"po-lookup",0)},dependencies:[q],encapsulation:2})}return a})();var Ue=a=>({"docs-sample-code-tabs":a}),qe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup Basic"),t(),i(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-basic/sample-po-lookup-basic.component.html"),t(),i(13,"pre",7),e(14,`<po-lookup
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
`),t()()()()(),i(21,"div",10),n(22,"sample-po-lookup-basic"),t(),n(23,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,Ue,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,we],encapsulation:2})}return a})();var D=(()=>{class a{httpClient=h(V);url="https://po-sample-api.onrender.com/v1/heroes";getFilteredItems(r){let m=r,{filterParams:l,advancedFilters:o}=m,p=me(m,["filterParams","advancedFilters"]),s=G(G(G({},p),l),o);return this.httpClient.get(this.url,{params:s})}getObjectByValue(r){return this.httpClient.get(`${this.url}/${r}`)}static \u0275fac=function(l){return new(l||a)};static \u0275prov=j({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var Me=(()=>{class a{sampleFilterService=h(D);additionalHelpTooltip;columns;columnsName;customLiterals;event;fieldFormat;formatField;fieldLabel;fieldValue;filterService;help;label;literals;lookup;placeholder;properties;fieldErrorMessage;advancedFilters;customAdvancedFilters;size;spacing=ke.Medium;columnsOptions=[{value:"id",label:"Id"},{value:"name",label:"Name"},{value:"email",label:"Email"}];fieldLabelOptions=[{value:"label",label:"Label"},...this.columnsOptions];fieldValueOptions=[{value:"value",label:"Value"},...this.columnsOptions];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"infiniteScroll",label:"Infinite Scroll"},{value:"multiple",label:"Multiple"},{value:"autoHeight",label:"Auto Height"},{value:"hideColumnsManager",label:"Hide Columns Manager"},{value:"textWrap",label:"Text Wrap"},{value:"virtualScroll",label:"Virtual Sroll"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"}];columnsDefinition={id:{property:"id",label:"Id"},name:{property:"name",label:"Name"},email:{property:"email",label:"Email"}};typeSpacing=[{label:"ExtraSmall",value:"extraSmall"},{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(r){this.event=r}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}onFieldFormatChange(r){try{this.fieldFormat=JSON.parse(r)}catch{this.fieldFormat=void 0}}changeAdvancedFilters(){try{this.customAdvancedFilters=JSON.parse(this.advancedFilters)}catch{this.customAdvancedFilters=void 0}}restore(){this.additionalHelpTooltip="",this.columnsName=["id","name"],this.customLiterals=void 0,this.updateColumns(),this.fieldLabel="name",this.fieldValue="id",this.fieldFormat=void 0,this.formatField=void 0,this.event=void 0,this.filterService=void 0,this.label=void 0,this.literals=void 0,this.help=void 0,this.lookup=void 0,this.placeholder="",this.properties=[],this.fieldErrorMessage="",this.customAdvancedFilters=[],this.size="medium"}updateColumns(){this.columns=[],this.columnsName.forEach(r=>this.columns.push(this.columnsDefinition[r]))}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-labs"]],standalone:!1,features:[_([D])],decls:26,vars:52,consts:[["f","ngForm"],["name","lookup",3,"ngModelChange","p-change","p-error","p-keydown","p-selected","ngModel","p-additional-help-tooltip","p-advanced-filters","p-auto-height","p-clean","p-columns","p-disabled","p-field-format","p-field-label","p-filter-service","p-field-value","p-help","p-hide-columns-manager","p-infinite-scroll","p-label","p-literals","p-multiple","p-no-autocomplete","p-optional","p-placeholder","p-required","p-field-error-message","p-show-required","p-size","p-spacing","p-text-wrap","p-label-text-wrap","p-virtual-scroll","p-error-limit"],["p-no-border","true","p-no-padding","true"],[1,"po-row"],["p-label","Model",1,"po-md-12",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","columnsName","p-columns","3","p-label","Columns",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","fieldLabel","p-label","Field Label","p-required","",1,"po-md-6","po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","fieldValue","p-label","Field Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","filterService","p-clean","","p-help","https://po-sample-api.onrender.com/v1/people","p-label","Filter Service",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: { "modalTitle": "Select a register", "modalPrimaryActionLabel": "Select", "modalPlaceholder": "Search Value" }',"p-label","Literals",1,"po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","formatField","p-label","Field Format","p-help",'Ex.: ["id", "name"]',1,"po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","spacing","p-columns","4","p-help","Para aplicar o tamanho extraSmall, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).","p-label","Spacing",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","advancedFilters","p-help",'Ex.: [{"property":"name","divider":"PERSONAL DATA","required":true,"gridColumns":6},{"property":"id","optional":true,"gridColumns":6}]',"p-label","Advanced Filters","p-rows","4",1,"po-md-12","po-lg-12",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,o){if(l&1){let p=$();i(0,"po-lookup",1),g("ngModelChange",function(m){return c(p),v(o.lookup,m)||(o.lookup=m),E(m)}),x("p-change",function(){return c(p),E(o.changeEvent("p-change"))})("p-error",function(){return c(p),E(o.changeEvent("p-error"))})("p-keydown",function(){return c(p),E(o.changeEvent("p-keydown"))})("p-selected",function(){return c(p),E(o.changeEvent("p-selected"))}),t(),n(1,"po-divider"),i(2,"po-container",2)(3,"div",3),n(4,"po-info",4)(5,"po-info",5),t()(),n(6,"po-divider"),i(7,"form",null,0)(9,"po-input",6),g("ngModelChange",function(m){return c(p),v(o.label,m)||(o.label=m),E(m)}),t(),i(10,"po-checkbox-group",7),g("ngModelChange",function(m){return c(p),v(o.columnsName,m)||(o.columnsName=m),E(m)}),x("p-change",function(){return c(p),E(o.updateColumns())}),t(),i(11,"po-select",8),g("ngModelChange",function(m){return c(p),v(o.fieldLabel,m)||(o.fieldLabel=m),E(m)}),t(),i(12,"po-select",9),g("ngModelChange",function(m){return c(p),v(o.fieldValue,m)||(o.fieldValue=m),E(m)}),t(),i(13,"po-input",10),g("ngModelChange",function(m){return c(p),v(o.filterService,m)||(o.filterService=m),E(m)}),t(),i(14,"po-input",11),g("ngModelChange",function(m){return c(p),v(o.fieldErrorMessage,m)||(o.fieldErrorMessage=m),E(m)}),t(),i(15,"po-input",12),g("ngModelChange",function(m){return c(p),v(o.help,m)||(o.help=m),E(m)}),t(),i(16,"po-input",13),g("ngModelChange",function(m){return c(p),v(o.additionalHelpTooltip,m)||(o.additionalHelpTooltip=m),E(m)}),t(),i(17,"po-input",14),g("ngModelChange",function(m){return c(p),v(o.placeholder,m)||(o.placeholder=m),E(m)}),t(),i(18,"po-input",15),g("ngModelChange",function(m){return c(p),v(o.literals,m)||(o.literals=m),E(m)}),x("p-change",function(){return c(p),E(o.changeLiterals())}),t(),i(19,"po-input",16),g("ngModelChange",function(m){return c(p),v(o.formatField,m)||(o.formatField=m),E(m)}),x("p-change",function(m){return c(p),E(o.onFieldFormatChange(m))}),t(),i(20,"po-checkbox-group",17),g("ngModelChange",function(m){return c(p),v(o.properties,m)||(o.properties=m),E(m)}),t(),i(21,"po-radio-group",18),g("ngModelChange",function(m){return c(p),v(o.spacing,m)||(o.spacing=m),E(m)}),t(),i(22,"po-radio-group",19),g("ngModelChange",function(m){return c(p),v(o.size,m)||(o.size=m),E(m)}),t(),i(23,"po-textarea",20),g("ngModelChange",function(m){return c(p),v(o.advancedFilters,m)||(o.advancedFilters=m),E(m)}),x("p-change",function(){return c(p),E(o.changeAdvancedFilters())}),t(),i(24,"div",3)(25,"po-button",21),x("p-click",function(){return c(p),E(o.restore())}),t()()()}l&2&&(b("ngModel",o.lookup),u("p-additional-help-tooltip",o.additionalHelpTooltip)("p-advanced-filters",o.customAdvancedFilters)("p-auto-height",o.properties.includes("autoHeight"))("p-clean",o.properties.includes("clean"))("p-columns",o.columns)("p-disabled",o.properties.includes("disabled"))("p-field-format",o.fieldFormat)("p-field-label",o.fieldLabel)("p-filter-service",o.filterService||o.sampleFilterService)("p-field-value",o.fieldValue)("p-help",o.help)("p-hide-columns-manager",o.properties.includes("hideColumnsManager"))("p-infinite-scroll",o.properties.includes("infiniteScroll"))("p-label",o.label)("p-literals",o.customLiterals)("p-multiple",o.properties.includes("multiple"))("p-no-autocomplete",o.properties.includes("noAutocomplete"))("p-optional",o.properties.includes("optional"))("p-placeholder",o.placeholder)("p-required",o.properties.includes("required"))("p-field-error-message",o.fieldErrorMessage)("p-show-required",o.properties.includes("showRequired"))("p-size",o.size)("p-spacing",o.spacing)("p-text-wrap",o.properties.includes("textWrap"))("p-label-text-wrap",o.properties==null?null:o.properties.includes("labelTextWrap"))("p-virtual-scroll",o.properties.includes("virtualScroll"))("p-error-limit",o.properties==null?null:o.properties.includes("errorLimit")),d(4),u("p-value",o.lookup),d(),u("p-value",o.event),d(4),b("ngModel",o.label),d(),b("ngModel",o.columnsName),u("p-options",o.columnsOptions),d(),b("ngModel",o.fieldLabel),u("p-options",o.fieldLabelOptions),d(),b("ngModel",o.fieldValue),u("p-options",o.fieldValueOptions),d(),b("ngModel",o.filterService),d(),b("ngModel",o.fieldErrorMessage),d(),b("ngModel",o.help),d(),b("ngModel",o.additionalHelpTooltip),d(),b("ngModel",o.placeholder),d(),b("ngModel",o.literals),d(),b("ngModel",o.formatField),d(),b("ngModel",o.properties),u("p-options",o.propertiesOptions),d(),b("ngModel",o.spacing),u("p-options",o.typeSpacing),d(),b("ngModel",o.size),u("p-options",o.sizeOptions),d(),b("ngModel",o.advancedFilters))},dependencies:[z,T,I,A,K,H,X,O,Ce,Y,ye,q,N,Pe,B],encapsulation:2})}return a})();var Je=a=>({"docs-sample-code-tabs":a}),Te=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-labs-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup Labs"),t(),i(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-labs/sample-po-lookup-labs.component.html"),t(),i(13,"pre",7),e(14,`<po-lookup
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
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-labs"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,Je,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,Me],encapsulation:2})}return a})();var Ke=()=>({modalTitle:"Heroes available for mission"}),De=(()=>{class a{service=h(D);notification=h(Z);hero;vehicle;columns=[{property:"nickname",label:"Hero"},{property:"name",label:"Name"}];vehicles=[{label:"Airplane",value:"airplane"},{label:"Boat",value:"boat"},{label:"Car",value:"car"},{label:"Helicopter",value:"helicopter"},{label:"Motorcycle",value:"motorcycle"},{label:"Rocket",value:"rocket"},{label:"Spaceship",value:"spaceship"},{label:"Submarine",value:"submarine"},{label:"Truck",value:"truck"}];advancedFilters=[{property:"nickname",divider:"Hero Informations",optional:!0,gridColumns:6,label:"Hero"},{property:"name",optional:!0,gridColumns:6}];fieldFormat(r){return`${r.nickname} - ${r.label}`}startMission(){this.hero.length%2===0?this.notification.success(`Mission started with hero ${this.hero} ${this.vehicle?"with vehicle: "+this.vehicle:""}.`):this.notification.error(`Choose another hero because ${this.hero} is in other mission.`),this.hero=void 0,this.vehicle=void 0}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-hero"]],standalone:!1,features:[_([D])],decls:10,vars:11,consts:[["f","ngForm"],[1,"po-row"],["p-label","New mission found","p-value","Objective: Stop an asteroid collision on Earth",1,"po-lg-6"],["name","hero","p-field-label","label","p-field-value","label","p-help","Select hero for mission","p-label","Hero","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-columns","p-field-format","p-filter-service","p-hide-columns-manager","p-advanced-filters","p-literals"],["name","vehicle","p-help","Select a vehicle for the hero","p-label","Vehicle","p-placeholder","None",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Start Mission",1,"po-md-6",3,"p-click","p-disabled"]],template:function(l,o){if(l&1){let p=$();i(0,"div",1),n(1,"po-info",2),t(),n(2,"po-divider"),i(3,"form",null,0)(5,"div",1)(6,"po-lookup",3),g("ngModelChange",function(m){return c(p),v(o.hero,m)||(o.hero=m),E(m)}),t(),i(7,"po-select",4),g("ngModelChange",function(m){return c(p),v(o.vehicle,m)||(o.vehicle=m),E(m)}),t()(),i(8,"div",1)(9,"po-button",5),x("p-click",function(){return c(p),E(o.startMission())}),t()()()}if(l&2){let p=ce(4);d(6),b("ngModel",o.hero),u("p-columns",o.columns)("p-field-format",o.fieldFormat)("p-filter-service",o.service)("p-hide-columns-manager",!0)("p-advanced-filters",o.advancedFilters)("p-literals",U(10,Ke)),d(),b("ngModel",o.vehicle),u("p-options",o.vehicles),d(2),u("p-disabled",p.form.invalid||p.form.pending)}},dependencies:[z,T,I,A,K,H,O,q,N,B],encapsulation:2})}return a})();var Ye=a=>({"docs-sample-code-tabs":a}),_e=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-hero-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Hero"),t(),i(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-hero/sample-po-lookup-hero.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
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
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-hero"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,Ye,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,De],encapsulation:2})}return a})();var et=()=>["nickname","label"],tt=()=>({modalTitle:"Heroes available for mission"}),Ae=(()=>{class a{service=h(D);notification=h(Z);formBuilder=h(ge);formMission;columns=[{property:"nickname",label:"Hero"},{property:"name",label:"Name"}];vehicles=[{label:"Airplane",value:"airplane"},{label:"Boat",value:"boat"},{label:"Car",value:"car"},{label:"Helicopter",value:"helicopter"},{label:"Motorcycle",value:"motorcycle"},{label:"Rocket",value:"rocket"},{label:"Spaceship",value:"spaceship"},{label:"Submarine",value:"submarine"},{label:"Truck",value:"truck"}];ngOnInit(){this.formMission=this.formBuilder.group({hero:[null,ae.required],vehicle:[null,ae.required]})}fieldFormat(r){return`${r.nickname} - ${r.label}`}startMission(){let r=this.formMission.get("hero").value,l=this.formMission.get("vehicle").value;r.length%2===0?this.notification.success(`Mission started with hero ${r} ${l?"with vehicle: "+l:""}.`):this.notification.error(`Choose another hero because ${r} is in other mission.`),this.formMission.reset()}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-hero-reactive-form"]],standalone:!1,features:[_([D])],decls:9,vars:9,consts:[[1,"po-row"],["p-label","New mission found","p-value","Objective: Stop an asteroid collision on Earth",1,"po-lg-6"],[3,"formGroup"],["name","hero","formControlName","hero","p-field-label","label","p-field-value","label","p-help","Select hero for mission","p-label","Hero","p-required","",1,"po-md-6",3,"p-columns","p-field-format","p-filter-service","p-literals"],["name","vehicle","formControlName","vehicle","p-help","Select a vehicle for the hero","p-label","Vehicle","p-placeholder","None",1,"po-md-6",3,"p-options"],["p-label","Start Mission",1,"po-md-6",3,"p-click","p-disabled"]],template:function(l,o){l&1&&(i(0,"div",0),n(1,"po-info",1),t(),n(2,"po-divider"),i(3,"form",2)(4,"div",0),n(5,"po-lookup",3)(6,"po-select",4),t(),i(7,"div",0)(8,"po-button",5),x("p-click",function(){return o.startMission()}),t()()()),l&2&&(d(3),u("formGroup",o.formMission),d(2),u("p-columns",o.columns)("p-field-format",U(7,et))("p-filter-service",o.service)("p-literals",U(8,tt)),d(),u("p-options",o.vehicles),d(2),u("p-disabled",o.formMission.invalid||o.formMission.pending))},dependencies:[z,T,I,be,ve,H,O,q,N,B],encapsulation:2})}return a})();var nt=a=>({"docs-sample-code-tabs":a}),Oe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-hero-reactive-form-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Hero Reactive Form"),t(),i(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
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
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-hero-reactive-form"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,nt,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,Ae],encapsulation:2})}return a})();var re=(()=>{class a{http=h(V);baseUrl="https://swapi.dev/api";filmsUrl="https://swapi.dev/api/films/";getFilms(){return this.http.get(this.filmsUrl)}getFilteredItems({filter:r,page:l,filterParams:o}){let p={page:l.toString()};return r&&(p.search=r),this.http.get(`${this.baseUrl}/${o}`,{params:p}).pipe(ie(s=>({items:s.results,hasNext:!!s.next})))}getObjectByValue(r,l){return this.http.get(`${this.baseUrl}/${l}/?search=${r}`).pipe(ie(o=>o.results[0]))}static \u0275fac=function(l){return new(l||a)};static \u0275prov=j({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function at(a,Et){if(a&1&&(i(0,"div",0),n(1,"po-table",3),t()),a&2){let r=ue();d(),u("p-columns",r.filmColumns)("p-items",r.filmItemsFiltered)("p-sort",!0)("p-hide-table-search",!1)}}var je=(()=>{class a{filterService=h(re);entity;filmItemsFiltered;filterParams="people";characterColumns=[{property:"name",label:"Name"},{property:"gender",label:"Gender"},{property:"height",label:"Height"},{property:"mass",label:"Mass"}];entities=[{label:"Character",value:"people"},{label:"Planet",value:"planets"},{label:"Starship",value:"starships"}];filmColumns=[{property:"episode_id",label:"Episode id"},{property:"title",label:"Title"},{property:"director",label:"Director"},{property:"producer",label:"Producer"},{property:"release_date",label:"Release date",type:"date"}];planetsColumns=[{property:"name",label:"Name"},{property:"diameter",label:"Diameter"},{property:"population",label:"Population"},{property:"climate",label:"Climate"}];starshipsColumns=[{property:"name",label:"Name"},{property:"passengers",label:"Passengers"},{property:"max_atmosphering_speed",label:"Max Speed"},{property:"consumables",label:"Consumables"}];filmItems;get entityColumns(){return this.getEntityColumns(this.filterParams)}get entityLabel(){return this.getLabelOfEntity(this.filterParams)}ngOnInit(){this.filterService.getFilms().subscribe(r=>{this.filmItems=r.results})}onSelected(r){this.filterService.getObjectByValue(r.name,this.filterParams).subscribe(l=>{this.filmItemsFiltered=this.filmItems.filter(o=>l?.films.includes(o.url))},l=>console.error(l))}getEntityColumns(r){switch(r){case"people":return this.characterColumns;case"planets":return this.planetsColumns;case"starships":return this.starshipsColumns}}getLabelOfEntity(r){switch(r){case"people":return"character";case"planets":return"planet";case"starships":return"starship"}}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-sw-films"]],standalone:!1,features:[_([re])],decls:7,vars:14,consts:[[1,"po-row"],["name","filterParams","p-label","Choose the entity of SW to search",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","entity","p-field-label","name","p-field-value","name",1,"po-md-12",3,"ngModelChange","p-selected","ngModel","p-help","p-label","p-columns","p-filter-params","p-filter-service","p-infinite-scroll"],[1,"po-sm-12",3,"p-columns","p-items","p-sort","p-hide-table-search"]],template:function(l,o){l&1&&(i(0,"div",0)(1,"po-radio-group",1),g("ngModelChange",function(s){return v(o.filterParams,s)||(o.filterParams=s),s}),t()(),n(2,"po-divider"),i(3,"div",0)(4,"po-lookup",2),Ee(5,"titlecase"),g("ngModelChange",function(s){return v(o.entity,s)||(o.entity=s),s}),x("p-selected",function(s){return o.onSelected(s)}),t()(),pe(6,at,2,4,"div",0)),l&2&&(d(),b("ngModel",o.filterParams),u("p-options",o.entities),d(3),oe("p-help","Select a ",o.entityLabel," to see the list of movies in which it participated"),oe("p-label","",xe(5,12,o.entityLabel)," of Star Wars"),b("ngModel",o.entity),u("p-columns",o.entityColumns)("p-filter-params",o.filterParams)("p-filter-service",o.filterService)("p-infinite-scroll",!0),d(2),se(o.filmItemsFiltered&&o.entity?6:-1))},dependencies:[T,A,O,Y,q,ee,Se],encapsulation:2})}return a})();var rt=a=>({"docs-sample-code-tabs":a}),Ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-sw-films-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Star Wars films"),t(),i(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
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
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-sw-films"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,rt,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,je],encapsulation:2})}return a})();var Ie=(()=>{class a{http=h(V);getHeroes(r){let l=r?.length?r.toString():r;return this.http.get(`https://po-sample-api.onrender.com/v1/heroes?value=${l}`).pipe(de("items"))}static \u0275fac=function(l){return new(l||a)};static \u0275prov=j({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var ze=(()=>{class a{service=h(Ie);loading=!1;heroes;multiLookup=[1495831666871,1405833068599];columns=[{property:"value",label:"id"},{property:"label",label:"Name"}];changeOptions(r){this.loading=!0,this.service.getHeroes(r).subscribe(l=>{this.heroes=l},l=>console.error(l),()=>this.loading=!1)}openLink(r){window.open(`http://google.com/search?q=${r}`,"_blank")}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-multiple"]],standalone:!1,decls:4,vars:8,consts:[[1,"po-row"],["name","lookup","p-field-label","label","p-field-value","value","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","Search a Hero",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-multiple"],[1,"po-md-6","po-mt-4"],[3,"p-columns","p-items","p-height","p-striped","p-hide-columns-manager","p-loading"]],template:function(l,o){l&1&&(i(0,"div",0)(1,"po-lookup",1),g("ngModelChange",function(s){return v(o.multiLookup,s)||(o.multiLookup=s),s}),x("p-change",function(s){return o.changeOptions(s)}),t(),i(2,"po-container",2),n(3,"po-table",3),t()()),l&2&&(d(),b("ngModel",o.multiLookup),u("p-multiple",!0),d(2),u("p-columns",o.columns)("p-items",o.heroes)("p-height",220)("p-striped",!0)("p-hide-columns-manager",!0)("p-loading",o.loading))},dependencies:[T,A,X,q,ee],encapsulation:2})}return a})();var pt=a=>({"docs-sample-code-tabs":a}),He=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-multiple-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Multiple"),t(),i(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-multiple/sample-po-lookup-multiple.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
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
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-multiple"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,pt,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,ze],encapsulation:2})}return a})();var Ne=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-doc"]],standalone:!1,decls:5351,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://angular.io/guide/form-validation#creating-asynchronous-validators"],["href","https://po-ui.io/guides/api"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","Array<PoLookupAdvancedFilter>"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Array<PoLookupColumn>"],["pan","",1,"docs-api-property-type","((value)","=>","string)"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoLookupFilter"],["href","https://tc39.es/ecma262/#sec-encodeuricomponent-uricomponent"],["pan","",1,"docs-api-property-type","PoLookupLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","number"],["href","/documentation/po-lookup"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","(file:","PoUploadFile)","=>","void"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","ForceBooleanComponentEnum"],["pan","",1,"docs-api-property-type","ForceOptionComponentEnum"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["pan","",1,"docs-api-property-type","PoDatepickerRangeLiterals"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption>"],["pan","",1,"docs-api-property-type","Array<PoCheckboxGroupOption>"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"],["href","documentation/po-dynamic-form#po-dynamic-form-field-validation"],["pan","",1,"docs-api-property-type"],["pan","",1,"docs-api-property-type","{","[key:","string]:","any;","}"],["pan","",1,"docs-api-property-type","Array<object>"]],template:function(l,o){l&1&&(i(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),i(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
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
Por padr\xE3o o valor ser\xE1 configurado segundo a o m\xF3dulo `),i(3341,"a",66)(3342,"code"),e(3343,"I18n"),t()()(),i(3344,"p"),e(3345,`Exemplo de utiliza\xE7\xE3o:
`),i(3346,"code"),e(3347,"[ { property: 'birthday', locale: 'en', type: 'date' }, { property: 'wage', locale: 'ru', type: 'currency' } ];"),t()(),i(3348,"blockquote")(3349,"p"),e(3350,"Para ver quais linguagens suportadas acesse "),i(3351,"a",66)(3352,"code"),e(3353,"I18n"),t()(),e(3354,`
A propriedade ser\xE1 repassada para os componentes que suportam a mesma.`),t()()()(),i(3355,"tr",16)(3356,"td",17)(3357,"div",25)(3358,"span",26),e(3359," mask"),n(3360,"br"),t()()(),i(3361,"td",21)(3362,"code",27),e(3363,"string"),t()(),i(3364,"td",24)(3365,"em")(3366,"strong"),e(3367,"(opcional)"),t()(),i(3368,"p"),e(3369,"M\xE1scara para o campo."),t(),i(3370,"p")(3371,"strong"),e(3372,"Componentes compat\xEDveis:"),t(),i(3373,"code"),e(3374,"po-input"),t(),e(3375,"."),t(),i(3376,"blockquote")(3377,"p"),e(3378,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),i(3379,"code"),e(3380,"type: time"),t(),e(3381,"."),t()()()(),i(3382,"tr",16)(3383,"td",17)(3384,"div",25)(3385,"span",26),e(3386," maskFormatModel"),n(3387,"br"),t()()(),i(3388,"td",21)(3389,"code",29),e(3390,"boolean"),t()(),i(3391,"td",24)(3392,"em")(3393,"strong"),e(3394,"(opcional)"),t()(),i(3395,"p"),e(3396,"Define que o valor do componente ser\xE1 conforme especificado na masc\xE1ra. O valor padr\xE3o \xE9 "),i(3397,"code"),e(3398,"false"),t(),e(3399,"."),t(),i(3400,"p")(3401,"strong"),e(3402,"Componentes compat\xEDveis:"),t(),i(3403,"code"),e(3404,"po-input"),t(),e(3405,"."),t(),i(3406,"blockquote")(3407,"p"),e(3408,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),i(3409,"code"),e(3410,"type: time"),t(),e(3411,"."),t()()()(),i(3412,"tr",16)(3413,"td",17)(3414,"div",25)(3415,"span",26),e(3416," maxLength"),n(3417,"br"),t()()(),i(3418,"td",21)(3419,"code",44),e(3420,"number"),t()(),i(3421,"td",24)(3422,"em")(3423,"strong"),e(3424,"(opcional)"),t()(),i(3425,"p"),e(3426,"Tamanho m\xE1ximo de caracteres."),t(),i(3427,"p")(3428,"strong"),e(3429,"Componentes compat\xEDveis:"),t(),i(3430,"code"),e(3431,"po-input"),t(),e(3432,", "),i(3433,"code"),e(3434,"po-number"),t(),e(3435,", "),i(3436,"code"),e(3437,"po-decimal"),t(),e(3438,", "),i(3439,"code"),e(3440,"po-textarea"),t(),e(3441,", "),i(3442,"code"),e(3443,"po-password"),t(),e(3444,"."),t()()(),i(3445,"tr",16)(3446,"td",17)(3447,"div",25)(3448,"span",26),e(3449," maxValue"),n(3450,"br"),t()()(),i(3451,"td",21)(3452,"code",27),e(3453,"string "),t(),i(3454,"code",44),e(3455," number"),t()(),i(3456,"td",24)(3457,"em")(3458,"strong"),e(3459,"(opcional)"),t()(),i(3460,"p"),e(3461,"Valor m\xE1ximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),i(3462,"em"),e(3463,"number"),t(),e(3464,", "),i(3465,"em"),e(3466,"date"),t(),e(3467," ou "),i(3468,"em"),e(3469,"dateTime"),t(),e(3470,"."),t(),i(3471,"p")(3472,"strong"),e(3473,"Componentes compat\xEDveis:"),t(),i(3474,"code"),e(3475,"po-datepicker"),t(),e(3476,", "),i(3477,"code"),e(3478,"po-datepicker-range"),t(),e(3479,", "),i(3480,"code"),e(3481,"po-number"),t(),e(3482,", "),i(3483,"code"),e(3484,"po-decimal"),t()()()(),i(3485,"tr",16)(3486,"td",17)(3487,"div",25)(3488,"span",26),e(3489," minLength"),n(3490,"br"),t()()(),i(3491,"td",21)(3492,"code",44),e(3493,"number"),t()(),i(3494,"td",24)(3495,"em")(3496,"strong"),e(3497,"(opcional)"),t()(),i(3498,"p"),e(3499,"Tamanho m\xEDnimo de caracteres."),t(),i(3500,"p")(3501,"strong"),e(3502,"Componentes compat\xEDveis:"),t(),i(3503,"code"),e(3504,"po-input"),t(),e(3505,", "),i(3506,"code"),e(3507,"po-number"),t(),e(3508,", "),i(3509,"code"),e(3510,"po-decimal"),t(),e(3511,", "),i(3512,"code"),e(3513,"po-textarea"),t(),e(3514,", "),i(3515,"code"),e(3516,"po-password"),t(),e(3517,"."),t()()(),i(3518,"tr",16)(3519,"td",17)(3520,"div",25)(3521,"span",26),e(3522," minValue"),n(3523,"br"),t()()(),i(3524,"td",21)(3525,"code",27),e(3526,"string "),t(),i(3527,"code",44),e(3528," number"),t()(),i(3529,"td",24)(3530,"em")(3531,"strong"),e(3532,"(opcional)"),t()(),i(3533,"p"),e(3534,"Valor m\xEDnimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),i(3535,"em"),e(3536,"number"),t(),e(3537,", "),i(3538,"em"),e(3539,"date"),t(),e(3540," ou "),i(3541,"em"),e(3542,"dateTime"),t(),e(3543,"."),t(),i(3544,"p")(3545,"strong"),e(3546,"Componentes compat\xEDveis:"),t(),i(3547,"code"),e(3548,"po-datepicker"),t(),e(3549,", "),i(3550,"code"),e(3551,"po-datepicker-range"),t(),e(3552,", "),i(3553,"code"),e(3554,"po-number"),t(),e(3555,", "),i(3556,"code"),e(3557,"po-decimal"),t()()()(),i(3558,"tr",16)(3559,"td",17)(3560,"div",25)(3561,"span",26),e(3562," multiple"),n(3563,"br"),t()()(),i(3564,"td",21)(3565,"code",29),e(3566,"boolean"),t()(),i(3567,"td",24)(3568,"em")(3569,"strong"),e(3570,"(opcional)"),t()(),i(3571,"p"),e(3572,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),i(3573,"p")(3574,"strong"),e(3575,"Componente compat\xEDvel:"),t(),i(3576,"code"),e(3577,"po-lookup"),t(),e(3578,", "),i(3579,"code"),e(3580,"po-upload"),t()()()(),i(3581,"tr",16)(3582,"td",17)(3583,"div",25)(3584,"span",26),e(3585," noAutocomplete"),n(3586,"br"),t()()(),i(3587,"td",21)(3588,"code",29),e(3589,"boolean"),t()(),i(3590,"td",24)(3591,"em")(3592,"strong"),e(3593,"(opcional)"),t()(),i(3594,"p"),e(3595,"Define a propriedade nativa "),i(3596,"code"),e(3597,"autocomplete"),t(),e(3598," do campo como off."),t(),i(3599,"p")(3600,"strong"),e(3601,"Componentes compat\xEDveis:"),t(),i(3602,"code"),e(3603,"po-datepicker"),t(),e(3604,", "),i(3605,"code"),e(3606,"po-datepicker-range"),t(),e(3607,", "),i(3608,"code"),e(3609,"po-input"),t(),e(3610,", "),i(3611,"code"),e(3612,"po-number"),t(),e(3613,", "),i(3614,"code"),e(3615,"po-decimal"),t(),e(3616,", "),i(3617,"code"),e(3618,"po-lookup"),t(),e(3619,", "),i(3620,"code"),e(3621,"po-password"),t()()()(),i(3622,"tr",16)(3623,"td",17)(3624,"div",25)(3625,"span",26),e(3626," offsetColumns"),n(3627,"br"),t()()(),i(3628,"td",21)(3629,"code",44),e(3630,"number"),t()(),i(3631,"td",24)(3632,"em")(3633,"strong"),e(3634,"(opcional)"),t()(),i(3635,"p"),e(3636,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),t(),i(3637,"p"),e(3638,"Deve ser usado o sistema de "),i(3639,"strong"),e(3640,"grid"),t(),e(3641," do PO (1 ... 12 colunas)."),t(),i(3642,"blockquote")(3643,"p"),e(3644,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),t()()()(),i(3645,"tr",16)(3646,"td",17)(3647,"div",25)(3648,"span",26),e(3649," offsetLgColumns"),n(3650,"br"),t()()(),i(3651,"td",21)(3652,"code",44),e(3653,"number"),t()(),i(3654,"td",24)(3655,"em")(3656,"strong"),e(3657,"(opcional)"),t()(),i(3658,"p"),e(3659,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),i(3660,"p"),e(3661,"Deve ser usado o sistema de "),i(3662,"strong"),e(3663,"grid"),t(),e(3664," do PO (1 ... 12 colunas)."),t(),i(3665,"blockquote")(3666,"p"),e(3667,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(3668,"code"),e(3669,"offsetColumns"),t(),e(3670,"."),t()()()(),i(3671,"tr",16)(3672,"td",17)(3673,"div",25)(3674,"span",26),e(3675," offsetMdColumns"),n(3676,"br"),t()()(),i(3677,"td",21)(3678,"code",44),e(3679,"number"),t()(),i(3680,"td",24)(3681,"em")(3682,"strong"),e(3683,"(opcional)"),t()(),i(3684,"p"),e(3685,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),i(3686,"p"),e(3687,"Deve ser usado o sistema de "),i(3688,"strong"),e(3689,"grid"),t(),e(3690," do PO (1 ... 12 colunas)."),t(),i(3691,"blockquote")(3692,"p"),e(3693,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(3694,"code"),e(3695,"offsetColumns"),t(),e(3696,"."),t()()()(),i(3697,"tr",16)(3698,"td",17)(3699,"div",25)(3700,"span",26),e(3701," offsetSmColumns"),n(3702,"br"),t()()(),i(3703,"td",21)(3704,"code",44),e(3705,"number"),t()(),i(3706,"td",24)(3707,"em")(3708,"strong"),e(3709,"(opcional)"),t()(),i(3710,"p"),e(3711,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),i(3712,"p"),e(3713,"Deve ser usado o sistema de "),i(3714,"strong"),e(3715,"grid"),t(),e(3716," do PO (1 ... 12 colunas)."),t(),i(3717,"blockquote")(3718,"p"),e(3719,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(3720,"code"),e(3721,"offsetColumns"),t(),e(3722,"."),t()()()(),i(3723,"tr",16)(3724,"td",17)(3725,"div",25)(3726,"span",26),e(3727," offsetXlColumns"),n(3728,"br"),t()()(),i(3729,"td",21)(3730,"code",44),e(3731,"number"),t()(),i(3732,"td",24)(3733,"em")(3734,"strong"),e(3735,"(opcional)"),t()(),i(3736,"p"),e(3737,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),i(3738,"p"),e(3739,"Deve ser usado o sistema de "),i(3740,"strong"),e(3741,"grid"),t(),e(3742," do PO (1 ... 12 colunas)."),t(),i(3743,"blockquote")(3744,"p"),e(3745,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(3746,"code"),e(3747,"offsetColumns"),t(),e(3748,"."),t()()()(),i(3749,"tr",16)(3750,"td",17)(3751,"div",25)(3752,"span",26),e(3753," onError"),n(3754,"br"),t()()(),i(3755,"td",21)(3756,"code",43),e(3757,"Function"),t()(),i(3758,"td",24)(3759,"em")(3760,"strong"),e(3761,"(opcional)"),t()(),i(3762,"p"),e(3763,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),t(),i(3764,"blockquote")(3765,"p"),e(3766,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),i(3767,"code"),e(3768,"HttpErrorResponse"),t(),e(3769,"."),t()(),i(3770,"p")(3771,"strong"),e(3772,"Componente compat\xEDvel"),t(),e(3773,": "),i(3774,"code"),e(3775,"po-upload"),t()()()(),i(3776,"tr",16)(3777,"td",17)(3778,"div",25)(3779,"span",26),e(3780," onSuccess"),n(3781,"br"),t()()(),i(3782,"td",21)(3783,"code",43),e(3784,"Function"),t()(),i(3785,"td",24)(3786,"em")(3787,"strong"),e(3788,"(opcional)"),t()(),i(3789,"p"),e(3790,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),t(),i(3791,"blockquote")(3792,"p"),e(3793,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),i(3794,"code"),e(3795,"HttpResponse"),t(),e(3796,"."),t()(),i(3797,"p")(3798,"strong"),e(3799,"Componente compat\xEDvel"),t(),e(3800,": "),i(3801,"code"),e(3802,"po-upload"),t()()()(),i(3803,"tr",16)(3804,"td",17)(3805,"div",25)(3806,"span",26),e(3807," onUpload"),n(3808,"br"),t()()(),i(3809,"td",21)(3810,"code",43),e(3811,"Function"),t()(),i(3812,"td",24)(3813,"em")(3814,"strong"),e(3815,"(opcional)"),t()(),i(3816,"p"),e(3817,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),t(),i(3818,"pre")(3819,"code"),e(3820,`event.data = {id: 'id do usu\xE1rio'};
`),t()(),i(3821,"p")(3822,"strong"),e(3823,"Componente compat\xEDvel"),t(),e(3824,": "),i(3825,"code"),e(3826,"po-upload"),t()()()(),i(3827,"tr",16)(3828,"td",17)(3829,"div",25)(3830,"span",26),e(3831," optional"),n(3832,"br"),t()()(),i(3833,"td",21)(3834,"code",29),e(3835,"boolean"),t()(),i(3836,"td",24)(3837,"em")(3838,"strong"),e(3839,"(opcional)"),t()(),i(3840,"p"),e(3841,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),i(3842,"blockquote")(3843,"p"),e(3844,"A indica\xE7\xE3o n\xE3o ser\xE1 exibida, se:"),t()(),i(3845,"ul")(3846,"li"),e(3847,"O campo for "),i(3848,"code"),e(3849,"required"),t(),e(3850,", ou;"),t(),i(3851,"li"),e(3852,"N\xE3o possuir "),i(3853,"code"),e(3854,"help"),t(),e(3855," e "),i(3856,"code"),e(3857,"label"),t(),e(3858,"."),t()()()(),i(3859,"tr",16)(3860,"td",17)(3861,"div",25)(3862,"span",26),e(3863," options"),n(3864,"br"),t()()(),i(3865,"td",21)(3866,"code",32),e(3867,"Array<string> "),t(),i(3868,"code",67),e(3869," Array<PoSelectOption> "),t(),i(3870,"code",68),e(3871," Array<PoMultiselectOption> "),t(),i(3872,"code",69),e(3873," Array<PoCheckboxGroupOption> "),t(),i(3874,"code",70),e(3875," Array<any>"),t()(),i(3876,"td",24)(3877,"em")(3878,"strong"),e(3879,"(opcional)"),t()(),i(3880,"p"),e(3881,"Lista de op\xE7\xF5es que ser\xE3o exibidos em um componente, podendo selecionar uma op\xE7\xE3o."),t(),i(3882,"p")(3883,"strong"),e(3884,"Componentes compat\xEDveis:"),t(),i(3885,"code"),e(3886,"po-select"),t(),e(3887,", "),i(3888,"code"),e(3889,"po-radio-group"),t(),e(3890,", "),i(3891,"code"),e(3892,"po-checkbox-group"),t(),e(3893,", "),i(3894,"code"),e(3895,"po-multiselect"),t(),e(3896,"."),t()()(),i(3897,"tr",16)(3898,"td",17)(3899,"div",25)(3900,"span",26),e(3901," optionsMulti"),n(3902,"br"),t()()(),i(3903,"td",21)(3904,"code",29),e(3905,"boolean"),t()(),i(3906,"td",24)(3907,"em")(3908,"strong"),e(3909,"(opcional)"),t()(),i(3910,"p"),e(3911,"Permite que o usu\xE1rio fa\xE7a m\xFAltipla sele\xE7\xE3o dentro da lista de op\xE7\xF5es."),t()()(),i(3912,"tr",16)(3913,"td",17)(3914,"div",25)(3915,"span",26),e(3916," optionsService"),n(3917,"br"),t()()(),i(3918,"td",21)(3919,"code",27),e(3920,"string "),t(),i(3921,"code",71),e(3922," PoComboFilter "),t(),i(3923,"code",72),e(3924," PoMultiselectFilter"),t()(),i(3925,"td",24)(3926,"em")(3927,"strong"),e(3928,"(opcional)"),t()(),i(3929,"p"),e(3930,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),i(3931,"strong"),e(3932,"Importante"),t()(),i(3933,"blockquote")(3934,"p"),e(3935,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),i(3936,"a",7),e(3937,"guia de API do PO UI"),t(),e(3938,"."),t()()()(),i(3939,"tr",16)(3940,"td",17)(3941,"div",25)(3942,"span",26),e(3943," order"),n(3944,"br"),t()()(),i(3945,"td",21)(3946,"code",44),e(3947,"number"),t()(),i(3948,"td",24)(3949,"em")(3950,"strong"),e(3951,"(opcional)"),t()(),i(3952,"p"),e(3953,"Informa a ordem de exibi\xE7\xE3o do campo."),t(),i(3954,"p"),e(3955,"Exemplo de utiliza\xE7\xE3o:"),t(),i(3956,"p")(3957,"code"),e(3958,"[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];"),t()(),i(3959,"p"),e(3960,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),i(3961,"code"),e(3962,"[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];"),t()(),i(3963,"p"),e(3964,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),t(),i(3965,"p"),e(3966,"Campos sem "),i(3967,"code"),e(3968,"order"),t(),e(3969,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),t()()(),i(3970,"tr",16)(3971,"td",17)(3972,"div",25)(3973,"span",26),e(3974," params"),n(3975,"br"),t()()(),i(3976,"td",21)(3977,"code",33),e(3978,"any"),t()(),i(3979,"td",24)(3980,"em")(3981,"strong"),e(3982,"(opcional)"),t()(),i(3983,"p"),e(3984,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca usados pelos componentes "),i(3985,"code"),e(3986,"po-lookup"),t(),e(3987,` e
`),i(3988,"code"),e(3989,"po-combo"),t(),e(3990,"."),t(),i(3991,"p"),e(3992,"Por exemplo, para o par\xE2metro "),i(3993,"code"),e(3994,"{ age: 23 }"),t(),e(3995," a URL da requisi\xE7\xE3o ficaria:"),t(),i(3996,"p")(3997,"code"),e(3998,"url + ?age=23&filter=Peter"),t()()()(),i(3999,"tr",16)(4e3,"td",17)(4001,"div",25)(4002,"span",26),e(4003," pattern"),n(4004,"br"),t()()(),i(4005,"td",21)(4006,"code",27),e(4007,"string"),t()(),i(4008,"td",24)(4009,"em")(4010,"strong"),e(4011,"(opcional)"),t()(),i(4012,"p"),e(4013,"Regex para valida\xE7\xE3o do campo."),t(),i(4014,"p")(4015,"strong"),e(4016,"Componentes compat\xEDveis:"),t(),i(4017,"code"),e(4018,"po-input"),t(),e(4019,", "),i(4020,"code"),e(4021,"po-password"),t(),e(4022,"."),t()()(),i(4023,"tr",16)(4024,"td",17)(4025,"div",25)(4026,"span",26),e(4027," placeholder"),n(4028,"br"),t()()(),i(4029,"td",21)(4030,"code",27),e(4031,"string"),t()(),i(4032,"td",24)(4033,"em")(4034,"strong"),e(4035,"(opcional)"),t()(),i(4036,"p"),e(4037,"Mensagem que ser\xE1 exibida enquanto o campo n\xE3o estiver preenchido."),t()()(),i(4038,"tr",16)(4039,"td",17)(4040,"div",25)(4041,"span",26),e(4042," placeholderSearch"),n(4043,"br"),t()()(),i(4044,"td",21)(4045,"code",27),e(4046,"string"),t()(),i(4047,"td",24)(4048,"em")(4049,"strong"),e(4050,"(opcional)"),t()(),i(4051,"p"),e(4052,"Placeholder do campo de pesquisa do "),i(4053,"code"),e(4054,"po-multiselect"),t(),e(4055,"."),t(),i(4056,"blockquote")(4057,"p"),e(4058,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),t()()()(),i(4059,"tr",16)(4060,"td",17)(4061,"div",25)(4062,"span",26),e(4063," property"),n(4064,"br"),t()()(),i(4065,"td",21)(4066,"code",27),e(4067,"string"),t()(),i(4068,"td",24)(4069,"p"),e(4070,"Nome de refer\xEAncia do campo."),t()()(),i(4071,"tr",16)(4072,"td",17)(4073,"div",25)(4074,"span",26),e(4075," range"),n(4076,"br"),t()()(),i(4077,"td",21)(4078,"code",29),e(4079,"boolean"),t()(),i(4080,"td",24)(4081,"em")(4082,"strong"),e(4083,"(opcional)"),t()(),i(4084,"p"),e(4085,"O controle passa a permitir a entrada de um intervalo ao inv\xE9s de um \xFAnico valor."),t(),i(4086,"blockquote")(4087,"p"),e(4088,"Atualmente essa propriedade est\xE1 dispon\xEDvel apenas para o tipo 'date' e 'dateTime'."),t()()()(),i(4089,"tr",16)(4090,"td",17)(4091,"div",25)(4092,"span",26),e(4093," readonly"),n(4094,"br"),t()()(),i(4095,"td",21)(4096,"code",29),e(4097,"boolean"),t()(),i(4098,"td",24)(4099,"em")(4100,"strong"),e(4101,"(opcional)"),t()(),i(4102,"p"),e(4103,"Indica que o campo ser\xE1 somente leitura."),t(),i(4104,"p")(4105,"strong"),e(4106,"Componentes compat\xEDveis:"),t(),i(4107,"code"),e(4108,"po-datepicker"),t(),e(4109,", "),i(4110,"code"),e(4111,"po-datepicker-range"),t(),e(4112,", "),i(4113,"code"),e(4114,"po-input"),t(),e(4115,", "),i(4116,"code"),e(4117,"po-number"),t(),e(4118,", "),i(4119,"code"),e(4120,"po-decimal"),t(),e(4121,", "),i(4122,"code"),e(4123,"po-select"),t(),e(4124,", "),i(4125,"code"),e(4126,"po-textarea"),t(),e(4127,", "),i(4128,"code"),e(4129,"po-password"),t()()()(),i(4130,"tr",16)(4131,"td",17)(4132,"div",25)(4133,"span",26),e(4134," removeInitialFilter"),n(4135,"br"),t()()(),i(4136,"td",21)(4137,"code",29),e(4138,"boolean"),t()(),i(4139,"td",24)(4140,"em")(4141,"strong"),e(4142,"(opcional)"),t()(),i(4143,"p"),e(4144,"Define que o filtro no primeiro clique ser\xE1 removido."),t(),i(4145,"blockquote")(4146,"p"),e(4147,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),t()(),i(4148,"p")(4149,"strong"),e(4150,"Componente compat\xEDvel"),t(),e(4151,": "),i(4152,"code"),e(4153,"po-combo"),t()()()(),i(4154,"tr",16)(4155,"td",17)(4156,"div",25)(4157,"span",26),e(4158," required"),n(4159,"br"),t()()(),i(4160,"td",21)(4161,"code",29),e(4162,"boolean"),t()(),i(4163,"td",24)(4164,"em")(4165,"strong"),e(4166,"(opcional)"),t()(),i(4167,"p"),e(4168,"Define a obrigatoriedade do campo."),t()()(),i(4169,"tr",16)(4170,"td",17)(4171,"div",25)(4172,"span",26),e(4173," requiredFieldErrorMessage"),n(4174,"br"),t()()(),i(4175,"td",21)(4176,"code",29),e(4177,"boolean"),t()(),i(4178,"td",24)(4179,"em")(4180,"strong"),e(4181,"(opcional)"),t()(),i(4182,"p"),e(4183,"Exibe a mensagem setada na propriedade "),i(4184,"code"),e(4185,"errorMessage"),t(),e(4186," se o campo estiver vazio e for requerido."),t(),i(4187,"blockquote")(4188,"p"),e(4189,"Necess\xE1rio que a propriedade "),i(4190,"code"),e(4191,"required"),t(),e(4192," esteja habilitada."),t()(),i(4193,"p")(4194,"strong"),e(4195,"Componentes compat\xEDveis:"),t(),i(4196,"code"),e(4197,"po-datepicker"),t(),e(4198,", "),i(4199,"code"),e(4200,"po-input"),t(),e(4201,", "),i(4202,"code"),e(4203,"po-number"),t(),e(4204,", "),i(4205,"code"),e(4206,"po-decimal"),t(),e(4207,", "),i(4208,"code"),e(4209,"po-password"),t(),e(4210,"."),t()()(),i(4211,"tr",16)(4212,"td",17)(4213,"div",25)(4214,"span",26),e(4215," restrictions"),n(4216,"br"),t()()(),i(4217,"td",21)(4218,"code",73),e(4219,"PoUploadFileRestrictions"),t()(),i(4220,"td",24)(4221,"em")(4222,"strong"),e(4223,"(opcional)"),t()(),i(4224,"p"),e(4225,"Objeto que segue a defini\xE7\xE3o da interface "),i(4226,"code"),e(4227,"PoUploadFileRestrictions"),t(),e(4228,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),t(),i(4229,"p")(4230,"strong"),e(4231,"Componente compat\xEDvel"),t(),e(4232,": "),i(4233,"code"),e(4234,"po-upload"),t()()()(),i(4235,"tr",16)(4236,"td",17)(4237,"div",25)(4238,"span",26),e(4239," rows"),n(4240,"br"),t()()(),i(4241,"td",21)(4242,"code",44),e(4243,"number"),t()(),i(4244,"td",24)(4245,"em")(4246,"strong"),e(4247,"(opcional)"),t()(),i(4248,"p"),e(4249,"Quantidade de linhas exibidas no "),i(4250,"code"),e(4251,"po-textarea"),t(),e(4252,"."),t()()(),i(4253,"tr",16)(4254,"td",17)(4255,"div",25)(4256,"span",26),e(4257," searchService"),n(4258,"br"),t()()(),i(4259,"td",21)(4260,"code",27),e(4261,"string "),t(),i(4262,"code",34),e(4263," PoLookupFilter"),t()(),i(4264,"td",24)(4265,"em")(4266,"strong"),e(4267,"(opcional)"),t()(),i(4268,"p"),e(4269,"Servi\xE7o que ser\xE1 utilizado para realizar a busca avan\xE7ada. Pode ser utilizado em conjunto com a propriedade "),i(4270,"code"),e(4271,"columns"),t(),e(4272,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),i(4273,"strong"),e(4274,"Importante:"),t()(),i(4275,"blockquote")(4276,"p"),e(4277,"Caso utilizar a propriedade "),i(4278,"code"),e(4279,"optionsService"),t(),e(4280,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),i(4281,"a",7),e(4282,"guia de API do PO UI"),t(),e(4283,"."),t()()()(),i(4284,"tr",16)(4285,"td",17)(4286,"div",25)(4287,"span",26),e(4288," secret"),n(4289,"br"),t()()(),i(4290,"td",21)(4291,"code",29),e(4292,"boolean"),t()(),i(4293,"td",24)(4294,"em")(4295,"strong"),e(4296,"(opcional)"),t()(),i(4297,"p"),e(4298,"Esconde a informa\xE7\xE3o estilo "),i(4299,"em"),e(4300,"password"),t(),e(4301,", pode ser utilizado quando o tipo de dado for "),i(4302,"em"),e(4303,"string"),t(),e(4304,"."),t()()(),i(4305,"tr",16)(4306,"td",17)(4307,"div",25)(4308,"span",26),e(4309," showRequired"),n(4310,"br"),t()()(),i(4311,"td",21)(4312,"code",29),e(4313,"boolean"),t()(),i(4314,"td",24)(4315,"em")(4316,"strong"),e(4317,"(opcional)"),t()(),i(4318,"p"),e(4319,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),i(4320,"blockquote")(4321,"p"),e(4322,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),i(4323,"ul")(4324,"li"),e(4325,"N\xE3o possuir "),i(4326,"code"),e(4327,"p-help"),t(),e(4328," e/ou "),i(4329,"code"),e(4330,"p-label"),t(),e(4331,"."),t()()()(),i(4332,"tr",16)(4333,"td",17)(4334,"div",25)(4335,"span",26),e(4336," size"),n(4337,"br"),t()()(),i(4338,"td",21)(4339,"code",27),e(4340,"string"),t()(),i(4341,"td",24)(4342,"em")(4343,"strong"),e(4344,"(opcional)"),t()(),i(4345,"p"),e(4346,"Define o tamanho dos componentes de formul\xE1rio no template conforme suas respectivas documenta\xE7\xF5es:"),t(),i(4347,"ul")(4348,"li")(4349,"code"),e(4350,"small"),t(),e(4351,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(4352,"li")(4353,"code"),e(4354,"medium"),t(),e(4355,": aplica a medida medium de cada componente."),t(),i(4356,"li")(4357,"code"),e(4358,"large"),t(),e(4359,": aplica a medida large de cada componente (dispon\xEDvel para "),i(4360,"code"),e(4361,"po-checkbox"),t(),e(4362," e "),i(4363,"code"),e(4364,"po-radio-group"),t(),e(4365,")."),i(4366,"blockquote")(4367,"p"),e(4368,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(4369,"code"),e(4370,"medium"),t(),e(4371,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(4372,"a",39),e(4373,"po-theme"),t(),e(4374,"."),t()()()()()(),i(4375,"tr",16)(4376,"td",17)(4377,"div",25)(4378,"span",26),e(4379," sort"),n(4380,"br"),t()()(),i(4381,"td",21)(4382,"code",29),e(4383,"boolean"),t()(),i(4384,"td",24)(4385,"em")(4386,"strong"),e(4387,"(opcional)"),t()(),i(4388,"p"),e(4389,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),t(),i(4390,"p")(4391,"strong"),e(4392,"Componentes compat\xEDveis:"),t(),i(4393,"code"),e(4394,"po-combo"),t(),e(4395,", po-multiselect"),t()()(),i(4396,"tr",16)(4397,"td",17)(4398,"div",25)(4399,"span",26),e(4400," step"),n(4401,"br"),t()()(),i(4402,"td",21)(4403,"code",44),e(4404,"number"),t()(),i(4405,"td",24)(4406,"em")(4407,"strong"),e(4408,"(opcional)"),t()(),i(4409,"p"),e(4410,"Intervalo utilizado no "),i(4411,"code"),e(4412,"po-number"),t(),e(4413,"."),t()()(),i(4414,"tr",16)(4415,"td",17)(4416,"div",25)(4417,"span",26),e(4418," thousandMaxlength"),n(4419,"br"),t()()(),i(4420,"td",21)(4421,"code",44),e(4422,"number"),t()(),i(4423,"td",24)(4424,"em")(4425,"strong"),e(4426,"(opcional)"),t()(),i(4427,"p"),e(4428,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal. O valor m\xE1ximo permitido \xE9 13"),t(),i(4429,"blockquote")(4430,"p"),e(4431,"Esta propriedade s\xF3 pode ser utilizada quando o "),i(4432,"code"),e(4433,"type"),t(),e(4434," for "),i(4435,"em"),e(4436,"currency"),t(),e(4437," ou "),i(4438,"em"),e(4439,"decimal"),t(),e(4440,"."),t()()()(),i(4441,"tr",16)(4442,"td",17)(4443,"div",25)(4444,"span",26),e(4445," type"),n(4446,"br"),t()()(),i(4447,"td",21)(4448,"code",27),e(4449,"string "),t(),i(4450,"code",74),e(4451," PoDynamicFieldType"),t()(),i(4452,"td",24)(4453,"em")(4454,"strong"),e(4455,"(opcional)"),t()(),i(4456,"p"),e(4457,"Tipo do valor campo."),t(),i(4458,"p"),e(4459,"Valores v\xE1lidos:"),t(),i(4460,"ul")(4461,"li")(4462,"code"),e(4463,"boolean"),t(),e(4464,": Valores "),i(4465,"em"),e(4466,"booleanos"),t(),e(4467,"."),t(),i(4468,"li")(4469,"code"),e(4470,"currency"),t(),e(4471,": Valores monet\xE1rios."),t(),i(4472,"li")(4473,"code"),e(4474,"decimal"),t(),e(4475,": Valores decimais."),t(),i(4476,"li")(4477,"code"),e(4478,"date"),t(),e(4479,": Valores de datas."),i(4480,"ul")(4481,"li"),e(4482,"Aceita os tipos "),i(4483,"strong"),e(4484,"string"),t(),e(4485," e "),i(4486,"strong"),e(4487,"Date"),t(),e(4488,` padr\xE3o do Javascript,
por exemplo: `),i(4489,"code"),e(4490,"'2017-11-28'"),t(),e(4491," ou "),i(4492,"code"),e(4493,"new Date(2017, 10, 28)"),t(),e(4494,"."),t()()(),i(4495,"li")(4496,"code"),e(4497,"dateTime"),t(),e(4498,": Valor de data com hor\xE1rio."),i(4499,"ul")(4500,"li"),e(4501,"Aceita o tipo "),i(4502,"em"),e(4503,"string"),t(),e(4504," no formato "),i(4505,"strong"),e(4506,"ISO-8601"),t(),e(4507," extendido "),i(4508,"strong"),e(4509,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),t(),e(4510,`
e o tipo `),i(4511,"strong"),e(4512,"Date"),t(),e(4513," padr\xE3o do Javascript, por exemplo: "),i(4514,"code"),e(4515,"'2017-11-28T00:00:00-02:00'"),t(),e(4516," ou "),i(4517,"code"),e(4518,"new Date(2017, 10, 28)"),t(),e(4519,"."),t()()(),i(4520,"li")(4521,"code"),e(4522,"number"),t(),e(4523,": Valores num\xE9ricos."),t(),i(4524,"li")(4525,"code"),e(4526,"string"),t(),e(4527,": Textos."),t(),i(4528,"li")(4529,"code"),e(4530,"time"),t(),e(4531,": Valor do hor\xE1rio."),i(4532,"ul")(4533,"li"),e(4534,"Aceita o tipo "),i(4535,"strong"),e(4536,"string"),t(),e(4537," nos formatos "),i(4538,"strong"),e(4539,"'HH:mm:ss'"),t(),e(4540," ou "),i(4541,"strong"),e(4542,"'HH:mm:ss.ffffff'"),t(),e(4543,", por exemplo: "),i(4544,"code"),e(4545,"'23:12:45'"),t(),e(4546,"."),t()()()()()(),i(4547,"tr",16)(4548,"td",17)(4549,"div",25)(4550,"span",26),e(4551," url"),n(4552,"br"),t()()(),i(4553,"td",21)(4554,"code",27),e(4555,"string"),t()(),i(4556,"td",24)(4557,"em")(4558,"strong"),e(4559,"(opcional)"),t()(),i(4560,"p"),e(4561,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),t(),i(4562,"p")(4563,"strong"),e(4564,"Componente compat\xEDvel"),t(),e(4565,": "),i(4566,"code"),e(4567,"po-upload"),t()()()(),i(4568,"tr",16)(4569,"td",17)(4570,"div",25)(4571,"span",26),e(4572," validate"),n(4573,"br"),t()()(),i(4574,"td",21)(4575,"code",27),e(4576,"string "),t(),i(4577,"code",43),e(4578," Function"),t()(),i(4579,"td",24)(4580,"em")(4581,"strong"),e(4582,"(opcional)"),t()(),i(4583,"p"),e(4584,"Fun\xE7\xE3o ou servi\xE7o para validar as "),i(4585,"strong"),e(4586,"mudan\xE7as do campo"),t(),e(4587,"."),t(),i(4588,"ul")(4589,"li"),e(4590,"A propriedade aceita os seguintes tipos:"),t()(),i(4591,"ul")(4592,"li")(4593,"strong"),e(4594,"String"),t(),e(4595,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),i(4596,"code"),e(4597,"POST"),t(),e(4598,"."),t(),i(4599,"li")(4600,"strong"),e(4601,"Function"),t(),e(4602,": M\xE9todo que ser\xE1 executado."),t()(),i(4603,"p"),e(4604,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),i(4605,"code"),e(4606,"PoDynamicFormFieldChanged"),t(),e(4607,":"),t(),i(4608,"p")(4609,"code"),e(4610,"{ property: 'property name', value: 'new value' }"),t()(),i(4611,"p"),e(4612,"O retorno desta fun\xE7\xE3o deve ser do tipo "),i(4613,"a",75),e(4614,"PoDynamicFormFieldValidation"),t(),e(4615,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),t(),i(4616,"pre")(4617,"code"),e(4618,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),t()(),i(4619,"p"),e(4620,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),i(4621,"code"),e(4622,"bind"),t(),e(4623,`, por exemplo:
`),i(4624,"code"),e(4625,"{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }"),t()()()(),i(4626,"tr",16)(4627,"td",17)(4628,"div",25)(4629,"span",26),e(4630," visible"),n(4631,"br"),t()()(),i(4632,"td",21)(4633,"code",29),e(4634,"boolean"),t()(),i(4635,"td",24)(4636,"em")(4637,"strong"),e(4638,"(opcional)"),t()(),i(4639,"p"),e(4640,"Indica se o campo ser\xE1 vis\xEDvel."),t()()()(),i(4641,"h4",42)(4642,"code",5),e(4643,"PoLookupColumn"),t()(),i(4644,"div",2)(4645,"p"),e(4646,"Interface para configura\xE7\xE3o das colunas do po-lookup."),t()(),i(4647,"h4",12),e(4648,"Propriedades"),t(),i(4649,"table",13)(4650,"tr",14)(4651,"th",15),e(4652,"Nome"),t(),i(4653,"th",15),e(4654,"Tipo"),t(),i(4655,"th",15),e(4656,"Descri\xE7\xE3o"),t()(),i(4657,"tr",16)(4658,"td",17)(4659,"div",25)(4660,"span",26),e(4661," fieldLabel"),n(4662,"br"),t()()(),i(4663,"td",21)(4664,"code",29),e(4665,"boolean"),t()(),i(4666,"td",24)(4667,"em")(4668,"strong"),e(4669,"(opcional)"),t()(),i(4670,"p"),e(4671,"Indica que a coluna ser\xE1 utilizada como valor do campo e como filtro dentro da modal."),t(),i(4672,"p"),e(4673,`Se houver mais de uma configura\xE7\xE3o habilitada, \xE9 exibido os valores no campo concatenados separados
por um tra\xE7o("-"). Por exemplo: "Joinville - SC".`),t(),i(4674,"p"),e(4675,`Importante
Esta configura\xE7\xE3o se torna obsoleta caso os atributos `),i(4676,"code"),e(4677,"p-field-format"),t(),e(4678," ou "),i(4679,"code"),e(4680,"p-field-label"),t(),e(4681," forem configurados no componente."),t()()(),i(4682,"tr",16)(4683,"td",17)(4684,"div",25)(4685,"span",26),e(4686," format"),n(4687,"br"),t()()(),i(4688,"td",21)(4689,"code",27),e(4690,"string"),t()(),i(4691,"td",24)(4692,"em")(4693,"strong"),e(4694,"(opcional)"),t()(),i(4695,"p"),e(4696,"Formato de exibi\xE7\xE3o do valor da coluna:"),t(),i(4697,"ul")(4698,"li"),e(4699,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),t(),i(4700,"li"),e(4701,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
valor padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),t()()()(),i(4702,"tr",16)(4703,"td",17)(4704,"div",25)(4705,"span",26),e(4706," label"),n(4707,"br"),t()()(),i(4708,"td",21)(4709,"code",27),e(4710,"string"),t()(),i(4711,"td",24)(4712,"em")(4713,"strong"),e(4714,"(opcional)"),t()(),i(4715,"p"),e(4716,"Texto para t\xEDtulo da coluna."),t(),i(4717,"p"),e(4718,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(4719,"em"),e(4720,"label"),t(),e(4721," o valor da propriedade "),i(4722,"em"),e(4723,"property"),t(),e(4724," com a primeira letra em mai\xFAsculo."),t()()(),i(4725,"tr",16)(4726,"td",17)(4727,"div",25)(4728,"span",26),e(4729," property"),n(4730,"br"),t()()(),i(4731,"td",21)(4732,"code",27),e(4733,"string"),t()(),i(4734,"td",24)(4735,"em")(4736,"strong"),e(4737,"(opcional)"),t()(),i(4738,"p"),e(4739,"Nome identificador da coluna."),t()()(),i(4740,"tr",16)(4741,"td",17)(4742,"div",25)(4743,"span",26),e(4744," type"),n(4745,"br"),t()()(),i(4746,"td",21)(4747,"code",27),e(4748,"string"),t()(),i(4749,"td",24)(4750,"em")(4751,"strong"),e(4752,"(opcional)"),t()(),i(4753,"p"),e(4754,"Tipo da coluna:"),t(),i(4755,"ul")(4756,"li"),e(4757,"string (padr\xE3o): textos"),t(),i(4758,"li"),e(4759,"number: valores num\xE9ricos"),t(),i(4760,"li"),e(4761,"date: data"),t(),i(4762,"li"),e(4763,"currency: valores monet\xE1rios"),t(),i(4764,"li"),e(4765,"dateTime: data e hora"),t()()()(),i(4766,"tr",16)(4767,"td",17)(4768,"div",25)(4769,"span",26),e(4770," width"),n(4771,"br"),t()()(),i(4772,"td",21)(4773,"code",27),e(4774,"string"),t()(),i(4775,"td",24)(4776,"em")(4777,"strong"),e(4778,"(opcional)"),t()(),i(4779,"p"),e(4780,"A largura da coluna pode ser informada em pixels ou porcentagem. Exemplo: '100px' ou '20%'"),t()()()(),i(4781,"h4",42)(4782,"code",5),e(4783,"PoLookupFilter"),t()(),i(4784,"div",2)(4785,"p"),e(4786,"Define o tipo de busca utilizado no po-lookup."),t()(),i(4787,"h4",12),e(4788,"M\xE9todos"),t(),i(4789,"table",40)(4790,"tr",16)(4791,"th",41)(4792,"div",25)(4793,"h4")(4794,"span",26),e(4795," getFilteredItems "),t()()()()(),i(4796,"tr",24)(4797,"td",24)(4798,"p"),e(4799,`M\xE9todo que ser\xE1 disparado ao filtrar a lista de itens ou carregar mais resultados no componente, deve-se retornar
um `),i(4800,"em"),e(4801,"Observable"),t(),e(4802," com a resposta da API no formato da interface "),i(4803,"code"),e(4804,"PoLookupResponseApi"),t(),e(4805,"."),t()()()(),i(4806,"h5")(4807,"b"),e(4808,"Par\xE2metros"),t()(),i(4809,"table",13)(4810,"tr",14)(4811,"th",15),e(4812,"Nome"),t(),i(4813,"th",15),e(4814,"Tipo"),t(),i(4815,"th",15),e(4816,"Descri\xE7\xE3o"),t()(),i(4817,"tr",16)(4818,"td",17),e(4819," params"),t(),i(4820,"td",21)(4821,"code",76),e(4822," PoLookupFilteredItemsParams "),t()(),i(4823,"td",24)(4824,"p"),e(4825,"Objeto enviado por par\xE2metro que implementa a interface "),i(4826,"code"),e(4827,"PoLookupFilteredItemsParams"),t(),e(4828,"."),t()()()(),n(4829,"br"),i(4830,"table",40)(4831,"tr",16)(4832,"th",41)(4833,"div",25)(4834,"h4")(4835,"span",26),e(4836," getObjectByValue "),t()()()()(),i(4837,"tr",24)(4838,"td",24)(4839,"p"),e(4840,"M\xE9todo respons\xE1vel por enviar um valor que ser\xE1 buscado no servi\xE7o."),t(),i(4841,"p"),e(4842,`Caso a funcionalidade de m\xFAltipla sele\xE7\xE3o estver habilitada, o parametro value ser\xE1 enviado como uma lista de valores
e o observable deve retornar uma lista de objetos.`),t()()()(),i(4843,"h5")(4844,"b"),e(4845,"Par\xE2metros"),t()(),i(4846,"table",13)(4847,"tr",14)(4848,"th",15),e(4849,"Nome"),t(),i(4850,"th",15),e(4851,"Tipo"),t(),i(4852,"th",15),e(4853,"Descri\xE7\xE3o"),t()(),i(4854,"tr",16)(4855,"td",17),e(4856," value"),t(),i(4857,"td",21)(4858,"code",27),e(4859," string "),t(),i(4860,"code",70),e(4861," Array<any> "),t()(),i(4862,"td",24)(4863,"p"),e(4864,"Valor \xFAnico a ser buscado na fonte de dados."),t()()(),i(4865,"tr",16)(4866,"td",17),e(4867," filterParams"),t(),i(4868,"td",21)(4869,"code",76),e(4870," any "),t()(),i(4871,"td",24)(4872,"p"),e(4873,"Valor informado atrav\xE9s da propriedade "),i(4874,"code"),e(4875,"p-filter-params"),t(),e(4876,"."),t()()()(),n(4877,"br"),i(4878,"h4",42)(4879,"code",5),e(4880,"PoLookupFilteredItemsParams"),t()(),i(4881,"div",2)(4882,"p"),e(4883,"Interface do objeto enviado como par\xE2metro na fun\xE7\xE3o "),i(4884,"code"),e(4885,"getFilteredItems"),t(),e(4886,"."),t()(),i(4887,"h4",12),e(4888,"Propriedades"),t(),i(4889,"table",13)(4890,"tr",14)(4891,"th",15),e(4892,"Nome"),t(),i(4893,"th",15),e(4894,"Tipo"),t(),i(4895,"th",15),e(4896,"Descri\xE7\xE3o"),t()(),i(4897,"tr",16)(4898,"td",17)(4899,"div",25)(4900,"span",26),e(4901," advancedFilters"),n(4902,"br"),t()()(),i(4903,"td",21)(4904,"code",77),e(4905,`{ [key: string]: any;
}`),t()(),i(4906,"td",24)(4907,"em")(4908,"strong"),e(4909,"(opcional)"),t()(),i(4910,"p"),e(4911,"Valores informados nos campos de busca avan\xE7ada, que ser\xE3o utilizados para filtrar a lista de itens."),t()()(),i(4912,"tr",16)(4913,"td",17)(4914,"div",25)(4915,"span",26),e(4916," filter"),n(4917,"br"),t()()(),i(4918,"td",21)(4919,"code",27),e(4920,"string"),t()(),i(4921,"td",24)(4922,"em")(4923,"strong"),e(4924,"(opcional)"),t()(),i(4925,"p"),e(4926,"Conte\xFAdo utilizado para filtrar a lista de itens."),t()()(),i(4927,"tr",16)(4928,"td",17)(4929,"div",25)(4930,"span",26),e(4931," filterParams"),n(4932,"br"),t()()(),i(4933,"td",21)(4934,"code",33),e(4935,"any"),t()(),i(4936,"td",24)(4937,"em")(4938,"strong"),e(4939,"(opcional)"),t()(),i(4940,"p"),e(4941,"Valor informado atrav\xE9s da propriedade "),i(4942,"code"),e(4943,"p-filter-params"),t(),e(4944,"."),t()()(),i(4945,"tr",16)(4946,"td",17)(4947,"div",25)(4948,"span",26),e(4949," order"),n(4950,"br"),t()()(),i(4951,"td",21)(4952,"code",27),e(4953,"string"),t()(),i(4954,"td",24)(4955,"em")(4956,"strong"),e(4957,"(opcional)"),t()(),i(4958,"p"),e(4959,"Coluna que est\xE1 sendo ordenada na tabela."),t(),i(4960,"ul")(4961,"li"),e(4962,"Coluna decrescente ser\xE1 informada da seguinte forma: "),i(4963,"code"),e(4964,"-<colunaOrdenada>"),t(),e(4965,", por exemplo "),i(4966,"code"),e(4967,"-name"),t(),e(4968,"."),t(),i(4969,"li"),e(4970,"Coluna ascendente ser\xE1 informada da seguinte forma: "),i(4971,"code"),e(4972,"<colunaOrdenada>"),t(),e(4973,", por exemplo "),i(4974,"code"),e(4975,"name"),t(),e(4976,"."),t()()()(),i(4977,"tr",16)(4978,"td",17)(4979,"div",25)(4980,"span",26),e(4981," page"),n(4982,"br"),t()()(),i(4983,"td",21)(4984,"code",44),e(4985,"number"),t()(),i(4986,"td",24)(4987,"em")(4988,"strong"),e(4989,"(opcional)"),t()(),i(4990,"p"),e(4991,"Controla a pagina\xE7\xE3o dos dados e recebe valor automaticamente a cada clique no bot\xE3o 'Carregar mais resultados'."),t()()(),i(4992,"tr",16)(4993,"td",17)(4994,"div",25)(4995,"span",26),e(4996," pageSize"),n(4997,"br"),t()()(),i(4998,"td",21)(4999,"code",44),e(5e3,"number"),t()(),i(5001,"td",24)(5002,"em")(5003,"strong"),e(5004,"(opcional)"),t()(),i(5005,"p"),e(5006,"Quantidade de itens retornados cada vez que o servi\xE7o \xE9 chamado, por padr\xE3o \xE9 10."),t()()()(),i(5007,"h4",42)(5008,"code",5),e(5009,"PoLookupLiterals"),t()(),i(5010,"div",2)(5011,"p"),e(5012,"Interface para defini\xE7\xE3o das literais usadas no "),i(5013,"code"),e(5014,"po-lookup"),t(),e(5015,"."),t()(),i(5016,"h4",12),e(5017,"Propriedades"),t(),i(5018,"table",13)(5019,"tr",14)(5020,"th",15),e(5021,"Nome"),t(),i(5022,"th",15),e(5023,"Tipo"),t(),i(5024,"th",15),e(5025,"Descri\xE7\xE3o"),t()(),i(5026,"tr",16)(5027,"td",17)(5028,"div",25)(5029,"span",26),e(5030," clean"),n(5031,"br"),t()()(),i(5032,"td",21)(5033,"code",27),e(5034,"string"),t()(),i(5035,"td",24)(5036,"em")(5037,"strong"),e(5038,"(opcional)"),t()(),i(5039,"p"),e(5040,"Texto usado no leitor de tela para acessibilidade. Aplica-se ao \xEDcone de limpar."),t()()(),i(5041,"tr",16)(5042,"td",17)(5043,"div",25)(5044,"span",26),e(5045," modalAdvancedSearch"),n(5046,"br"),t()()(),i(5047,"td",21)(5048,"code",27),e(5049,"string"),t()(),i(5050,"td",24)(5051,"em")(5052,"strong"),e(5053,"(opcional)"),t()(),i(5054,"p"),e(5055,"Texto do link de busca avan\xE7ada."),t(),i(5056,"p"),e(5057,`Importante
Caso seja passado uma literal muito comprida poder\xE1 quebrar o layout.`),t()()(),i(5058,"tr",16)(5059,"td",17)(5060,"div",25)(5061,"span",26),e(5062," modalAdvancedSearchPrimaryActionLabel"),n(5063,"br"),t()()(),i(5064,"td",21)(5065,"code",27),e(5066,"string"),t()(),i(5067,"td",24)(5068,"em")(5069,"strong"),e(5070,"(opcional)"),t()(),i(5071,"p"),e(5072,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal de busca avan\xE7ada."),t()()(),i(5073,"tr",16)(5074,"td",17)(5075,"div",25)(5076,"span",26),e(5077," modalAdvancedSearchSecondaryActionLabel"),n(5078,"br"),t()()(),i(5079,"td",21)(5080,"code",27),e(5081,"string"),t()(),i(5082,"td",24)(5083,"em")(5084,"strong"),e(5085,"(opcional)"),t()(),i(5086,"p"),e(5087,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal de busca avan\xE7ada."),t()()(),i(5088,"tr",16)(5089,"td",17)(5090,"div",25)(5091,"span",26),e(5092," modalAdvancedSearchTitle"),n(5093,"br"),t()()(),i(5094,"td",21)(5095,"code",27),e(5096,"string"),t()(),i(5097,"td",24)(5098,"em")(5099,"strong"),e(5100,"(opcional)"),t()(),i(5101,"p"),e(5102,"Texto exibido no t\xEDtulo da modal de busca avan\xE7ada."),t()()(),i(5103,"tr",16)(5104,"td",17)(5105,"div",25)(5106,"span",26),e(5107," modalDisclaimerGroupTitle"),n(5108,"br"),t()()(),i(5109,"td",21)(5110,"code",27),e(5111,"string"),t()(),i(5112,"td",24)(5113,"em")(5114,"strong"),e(5115,"(opcional)"),t()(),i(5116,"p"),e(5117,"Texto exibido no t\xEDtulo do disclaimer."),t()()(),i(5118,"tr",16)(5119,"td",17)(5120,"div",25)(5121,"span",26),e(5122," modalPlaceholder"),n(5123,"br"),t()()(),i(5124,"td",21)(5125,"code",27),e(5126,"string"),t()(),i(5127,"td",24)(5128,"em")(5129,"strong"),e(5130,"(opcional)"),t()(),i(5131,"p"),e(5132,"Texto exibido no placeholder do input da modal."),t()()(),i(5133,"tr",16)(5134,"td",17)(5135,"div",25)(5136,"span",26),e(5137," modalPrimaryActionLabel"),n(5138,"br"),t()()(),i(5139,"td",21)(5140,"code",27),e(5141,"string"),t()(),i(5142,"td",24)(5143,"em")(5144,"strong"),e(5145,"(opcional)"),t()(),i(5146,"p"),e(5147,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal."),t()()(),i(5148,"tr",16)(5149,"td",17)(5150,"div",25)(5151,"span",26),e(5152," modalSecondaryActionLabel"),n(5153,"br"),t()()(),i(5154,"td",21)(5155,"code",27),e(5156,"string"),t()(),i(5157,"td",24)(5158,"em")(5159,"strong"),e(5160,"(opcional)"),t()(),i(5161,"p"),e(5162,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal."),t()()(),i(5163,"tr",16)(5164,"td",17)(5165,"div",25)(5166,"span",26),e(5167," modalTableLoadMoreData"),n(5168,"br"),t()()(),i(5169,"td",21)(5170,"code",27),e(5171,"string"),t()(),i(5172,"td",24)(5173,"em")(5174,"strong"),e(5175,"(opcional)"),t()(),i(5176,"p"),e(5177,"Label do "),i(5178,"code"),e(5179,"button"),t(),e(5180," que deve carregar mais resultados na tabela, ou seja, exibir mais itens."),t()()(),i(5181,"tr",16)(5182,"td",17)(5183,"div",25)(5184,"span",26),e(5185," modalTableLoadingData"),n(5186,"br"),t()()(),i(5187,"td",21)(5188,"code",27),e(5189,"string"),t()(),i(5190,"td",24)(5191,"em")(5192,"strong"),e(5193,"(opcional)"),t()(),i(5194,"p"),e(5195,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na tabela."),t()()(),i(5196,"tr",16)(5197,"td",17)(5198,"div",25)(5199,"span",26),e(5200," modalTableNoColumns"),n(5201,"br"),t()()(),i(5202,"td",21)(5203,"code",27),e(5204,"string"),t()(),i(5205,"td",24)(5206,"em")(5207,"strong"),e(5208,"(opcional)"),t()(),i(5209,"p"),e(5210,"Texto exibido quando n\xE3o existem colunas definidas para a tabela."),t()()(),i(5211,"tr",16)(5212,"td",17)(5213,"div",25)(5214,"span",26),e(5215," modalTableNoData"),n(5216,"br"),t()()(),i(5217,"td",21)(5218,"code",27),e(5219,"string"),t()(),i(5220,"td",24)(5221,"em")(5222,"strong"),e(5223,"(opcional)"),t()(),i(5224,"p"),e(5225,"Texto exibido quando n\xE3o existem itens para serem exibidos na tabela."),t()()(),i(5226,"tr",16)(5227,"td",17)(5228,"div",25)(5229,"span",26),e(5230," modalTitle"),n(5231,"br"),t()()(),i(5232,"td",21)(5233,"code",27),e(5234,"string"),t()(),i(5235,"td",24)(5236,"em")(5237,"strong"),e(5238,"(opcional)"),t()(),i(5239,"p"),e(5240,"Texto exibido no t\xEDtulo da modal."),t()()(),i(5241,"tr",16)(5242,"td",17)(5243,"div",25)(5244,"span",26),e(5245," search"),n(5246,"br"),t()()(),i(5247,"td",21)(5248,"code",27),e(5249,"string"),t()(),i(5250,"td",24)(5251,"em")(5252,"strong"),e(5253,"(opcional)"),t()(),i(5254,"p"),e(5255,"Texto usado no leitor de tela para acessibilidade. Aplica-se ao \xEDcone de pesquisa."),t()()()(),i(5256,"h4",42)(5257,"code",5),e(5258,"PoLookupResponseApi"),t()(),i(5259,"div",2)(5260,"p"),e(5261,"Interface que representa a estrutura de resposta de uma cole\xE7\xE3o de itens. "),t()(),i(5262,"h4",12),e(5263,"Propriedades"),t(),i(5264,"table",13)(5265,"tr",14)(5266,"th",15),e(5267,"Nome"),t(),i(5268,"th",15),e(5269,"Tipo"),t(),i(5270,"th",15),e(5271,"Descri\xE7\xE3o"),t()(),i(5272,"tr",16)(5273,"td",17)(5274,"div",25)(5275,"span",26),e(5276," hasNext"),n(5277,"br"),t()()(),i(5278,"td",21)(5279,"code",29),e(5280,"boolean"),t()(),i(5281,"td",24)(5282,"p"),e(5283,"Indica se existe uma pr\xF3xima p\xE1gina com mais registros para aquela cole\xE7\xE3o de itens."),t()()(),i(5284,"tr",16)(5285,"td",17)(5286,"div",25)(5287,"span",26),e(5288," items"),n(5289,"br"),t()()(),i(5290,"td",21)(5291,"code",78),e(5292,"Array<object>"),t()(),i(5293,"td",24)(5294,"p"),e(5295,"Lista de itens retornados."),t()()()(),i(5296,"h3"),e(5297,"Enums"),t(),i(5298,"h4",4)(5299,"code",5),e(5300,"PoTableColumnSpacing"),t()(),i(5301,"div",2)(5302,"p"),e(5303,"Tipos de espa\xE7amento interno (padding) das c\xE9lulas ("),i(5304,"strong"),e(5305,"p-spacing"),t(),e(5306,") do po-table."),t()(),i(5307,"h4",12),e(5308,"Propriedades"),t(),i(5309,"table",13)(5310,"tr",14)(5311,"th",15),e(5312,"Nome"),t(),i(5313,"th",15),e(5314,"Descri\xE7\xE3o"),t()(),i(5315,"tr",16)(5316,"td",17)(5317,"div",25)(5318,"span",26),e(5319," ExtraSmall"),n(5320,"br"),t()()(),i(5321,"td",24)(5322,"p"),e(5323,"Espa\xE7amento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal)."),t()()(),i(5324,"tr",16)(5325,"td",17)(5326,"div",25)(5327,"span",26),e(5328," Small"),n(5329,"br"),t()()(),i(5330,"td",24)(5331,"p"),e(5332,"Espa\xE7amento pequeno: 0.5rem (vertical) x 1rem (horizontal)."),t()()(),i(5333,"tr",16)(5334,"td",17)(5335,"div",25)(5336,"span",26),e(5337," Medium"),n(5338,"br"),t()()(),i(5339,"td",24)(5340,"p"),e(5341,"Espa\xE7amento m\xE9dio: 0.75rem (vertical) x 1rem (horizontal)."),t()()(),i(5342,"tr",16)(5343,"td",17)(5344,"div",25)(5345,"span",26),e(5346," Large"),n(5347,"br"),t()()(),i(5348,"td",24)(5349,"p"),e(5350,"Espa\xE7amento grande: 1rem (vertical) x 1rem (horizontal)."),t()()()()())},dependencies:[y],encapsulation:2})}return a})();var Be=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=6;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||a)(ne(he),ne(fe))};static \u0275cmp=S({type:a,selectors:[["ng-component"]],standalone:!1,decls:11,vars:4,consts:[["p-title","Lookup",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,o){l&1&&(i(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),x("p-click",function(){return o.changeTab("doc")}),n(3,"sample-po-lookup-doc"),t(),i(4,"po-tab",3),x("p-click",function(){return o.changeTab("web")}),n(5,"sample-po-lookup-basic-view")(6,"sample-po-lookup-labs-view")(7,"sample-po-lookup-hero-view")(8,"sample-po-lookup-hero-reactive-form-view")(9,"sample-po-lookup-sw-films-view")(10,"sample-po-lookup-multiple-view"),t()()()),l&2&&(u("p-actions",o.actions),d(2),u("p-active",o.activeTab==="doc"),d(2),u("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"))},dependencies:[Le,C,k,qe,Te,_e,Oe,Ve,He,Ne],encapsulation:2})}return a})();var ct=[{path:"",component:Be}],Re=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=J({type:a});static \u0275inj=Q({imports:[le.forChild(ct),le]})}return a})();var Mi=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=J({type:a});static \u0275inj=Q({imports:[Fe,Re]})}return a})();export{Mi as DocPoLookupModule};
