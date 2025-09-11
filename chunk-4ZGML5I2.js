import{o as x,p as ke}from"./chunk-MGHF6CRC.js";import{Da as _e,Db as ne,Ea as te,H as xe,La as we,M as ye,O as Ce,Pa as Me,S as H,Wa as V,a as j,eb as Ie,gb as Te,mb as Fe,o as ge,p as ve,sa as A,xa as _,y as ee,ya as Pe,yb as g,zb as v}from"./chunk-6ZXZFM3Y.js";import{$a as T,Aa as m,Bb as P,Cc as Y,Da as y,Dc as Z,Ec as ce,Fc as ue,Gc as $,Ha as pe,Ia as q,Ja as O,Jc as he,Ka as B,Kc as Se,La as n,M as Q,Ma as t,N as G,Na as r,Oc as fe,Q as N,R as se,Ra as R,Sa as c,Ta as J,Tc as be,U as S,V as f,Vc as Ee,Xa as me,Xc as oe,Zb as de,_a as I,ab as F,cb as e,eb as b,gb as k,hb as L,ib as D,ja as s,jb as X,ka as ie,lb as C,qa as h,ra as U,wa as ae,zc as z}from"./chunk-S7P3J2XO.js";var Le=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-search-basic"]],standalone:!1,decls:1,vars:0,template:function(o,i){o&1&&r(0,"po-search")},dependencies:[_],encapsulation:2})}return a})();var Xe=a=>({"docs-sample-code-tabs":a}),De=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-search-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(r(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Search Basic"),t(),n(4,"a",2),c("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-search-basic/sample-po-search-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-search></po-search>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-search-basic/sample-po-search-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-search-basic',
  templateUrl: './sample-po-search-basic.component.html',
  standalone: false
})
export class SamplePoSearchBasicComponent {}
`),t()()()()(),n(21,"div",10),r(22,"sample-po-search-basic"),t(),r(23,"hr")),o&2&&(s(5),y("po-icon "+i.sampleCodeButtonIcon),s(),b(" ",i.sampleCodeButtonLabel,""),s(),m("ngClass",C(4,Xe,i.hideSampleCodeTabs)))},dependencies:[P,x,g,v,Le],encapsulation:2})}return a})();var $e=["poSearch"];function et(a,M){if(a&1&&(n(0,"div")(1,"strong"),e(2),t(),e(3),t()),a&2){let l=M.$implicit,o=J().$implicit;s(2),b("",l,": "),s(),b(" ",o[l]," \xA0 ")}}function tt(a,M){if(a&1&&(n(0,"li"),O(1,et,4,2,"div",null,q),t()),a&2){let l=M.$implicit,o=J();s(),B(o.changeFilter(l))}}var Ae=(()=>{class a{http=N(de);poSearch;ariaLabel;customLiterals;literals;properties=[];search="";event="";service="https://po-sample-api.onrender.com/v1/heroes";items=[];filteredItems=[];fieldKeys=[];fieldSelect=[];tooltip;icon;filterMode=A.startsWith;searchMode="action";fieldKey;itemsModel;filterModel='["name"]';filterSelectModel;size="medium";customLocateSummary;locateSummary;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"showListbox",label:"Show Listbox"}];iconsOptions=[{label:"fa-search",value:"fa fa-search"},{label:"an-user",value:"an an-user"},{label:"an-magnifying-glass",value:"an an-magnifying-glass"}];filterModeOptions=[{label:"Starts With",value:A.startsWith},{label:"Contains",value:A.contains},{label:"Ends With",value:A.endsWith}];searchModeOptions=[{label:"Action",value:"action"},{label:"Trigger",value:"trigger"},{label:"Locate",value:"locate"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}ngOnChanges(l){l.items&&(this.filteredItems=this.items)}changeFilter(l){return Object.keys(l)}onChangeService(){this.http.get(this.service).subscribe(l=>{let o=l.items;Array.isArray(o)&&o.length>0&&(this.items=o,this.filteredItems=o,this.fieldKeys=["name"])})}updateFilterKeys(l){this.fieldKeys=this.convertToArray(l)}updateFilterSelect(l){this.fieldSelect=this.convertToArray(l)}filter(l){this.filteredItems=l,this.event=l.length===0?"p-change-model":"p-filtered-items-change"}changeItems(l){try{let o=JSON.parse(l);Array.isArray(o)&&(this.filteredItems=o,this.items=o)}catch{}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals??"")}catch{this.customLiterals=void 0}}changeEvent(l){setTimeout(()=>{this.event=l})}changeLocateSummary(){try{this.customLocateSummary=JSON.parse(this.locateSummary??"")}catch{this.customLocateSummary=void 0}}restore(){this.ariaLabel="",this.search="",this.event="",this.icon=void 0,this.customLiterals=void 0,this.customLocateSummary=void 0,this.properties=[],this.filteredItems=void 0,this.items=void 0,this.itemsModel=void 0,this.filterModel='["name"]',this.filterSelectModel="",this.fieldKeys=void 0,this.fieldSelect=void 0,this.filterMode=A.startsWith,this.searchMode="action",this.literals=void 0,this.locateSummary=void 0,this.size="medium",this.cleanInput(),this.onChangeService()}cleanInput(){try{this.poSearch.clearSearch()}catch{}}convertToArray(l){try{return JSON.parse(l)}catch{return}}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-search-labs"]],viewQuery:function(o,i){if(o&1&&I($e,7),o&2){let p;T(p=F())&&(i.poSearch=p.first)}},standalone:!1,features:[se],decls:32,vars:32,consts:[["poSearch",""],["f","ngForm"],[1,"po-row"],[1,"po-md-12",3,"p-blur","p-change-model","p-filtered-items-change","p-locate-next","p-locate-previous","p-aria-label","p-disabled","p-filter-keys","p-filter-type","p-filter-select","p-icon","p-items","p-literals","p-locate-summary","p-search-type","p-show-listbox","p-size"],[1,"po-md-12"],[3,"p-label"],[1,"sample-list-search","po-md-12","row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Events",1,"po-md-6",3,"p-value"],["name","ariaLabel","p-label","Aria label",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","items","p-label","Items","p-help",'Ex.: [{ "cidade": "S\xE3o Paulo", "pais": "Brasil" }, { "cidade": "Rio de Janeiro", "pais": "Brasil" }, { "cidade": "T\xF3quio", "pais": "Jap\xE3o" }]',1,"po-lg-6","po-md-12",3,"ngModelChange","p-change-model","ngModel"],["name","properties","p-label","Properties",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","searchMode","p-label","Search Mode",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","filterMode","p-label","Filter Mode",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","locateSummary","p-help",'{ "currentIndex": 1000, "total": 1000 }',"p-label","Locate Summary",1,"po-lg-6","po-md-12",3,"ngModelChange","p-change","ngModel"],["name","literals","p-help",'Ex.: {"search": "Search people"}',"p-label","Literals",1,"po-lg-6","po-md-12",3,"ngModelChange","p-change","ngModel"],["name","Filter Keys","p-label","Filter Keys","p-help",'Ex.: ["cidade", "pais"]',1,"po-lg-6","po-md-12",3,"ngModelChange","p-change-model","ngModel"],["name","Filter Select","p-label","Filter Select","p-help",'Ex.: [ { "label": "Name", "value": ["name", "nickname"] }, { "label": "Email", "value": "email" } ]',1,"po-lg-6","po-md-12",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(o,i){if(o&1){let p=R();n(0,"div",2)(1,"po-search",3,0),c("p-blur",function(){return S(p),f(i.changeEvent("p-blur"))})("p-change-model",function(){return S(p),f(i.changeEvent("p-change-model"))})("p-filtered-items-change",function(d){return S(p),f(i.filter(d))})("p-locate-next",function(){return S(p),f(i.changeEvent("p-locate-next"))})("p-locate-previous",function(){return S(p),f(i.changeEvent("p-locate-previous"))}),t()(),r(3,"po-divider"),n(4,"div",2)(5,"po-accordion",4)(6,"po-accordion-item",5)(7,"po-widget",4)(8,"ul",6),O(9,tt,3,0,"li",null,q),t()()()()(),r(11,"po-divider"),n(12,"div",2),r(13,"po-info",7)(14,"po-info",8),t(),r(15,"po-divider"),n(16,"form",null,1)(18,"po-input",9),D("ngModelChange",function(d){return S(p),L(i.ariaLabel,d)||(i.ariaLabel=d),f(d)}),t(),n(19,"po-input",10),D("ngModelChange",function(d){return S(p),L(i.itemsModel,d)||(i.itemsModel=d),f(d)}),c("p-change-model",function(d){return S(p),f(i.changeItems(d))}),t(),n(20,"po-checkbox-group",11),D("ngModelChange",function(d){return S(p),L(i.properties,d)||(i.properties=d),f(d)}),t(),n(21,"po-radio-group",12),D("ngModelChange",function(d){return S(p),L(i.icon,d)||(i.icon=d),f(d)}),t(),n(22,"po-radio-group",13),D("ngModelChange",function(d){return S(p),L(i.searchMode,d)||(i.searchMode=d),f(d)}),t(),n(23,"po-radio-group",14),D("ngModelChange",function(d){return S(p),L(i.filterMode,d)||(i.filterMode=d),f(d)}),t(),n(24,"po-radio-group",15),D("ngModelChange",function(d){return S(p),L(i.size,d)||(i.size=d),f(d)}),t(),n(25,"po-input",16),D("ngModelChange",function(d){return S(p),L(i.locateSummary,d)||(i.locateSummary=d),f(d)}),c("p-change",function(){return S(p),f(i.changeLocateSummary())}),t(),n(26,"po-input",17),D("ngModelChange",function(d){return S(p),L(i.literals,d)||(i.literals=d),f(d)}),c("p-change",function(){return S(p),f(i.changeLiterals())}),t(),n(27,"po-input",18),D("ngModelChange",function(d){return S(p),L(i.filterModel,d)||(i.filterModel=d),f(d)}),c("p-change-model",function(d){return S(p),f(i.updateFilterKeys(d))}),t(),n(28,"po-input",19),D("ngModelChange",function(d){return S(p),L(i.filterSelectModel,d)||(i.filterSelectModel=d),f(d)}),c("p-change",function(d){return S(p),f(i.updateFilterSelect(d))}),t(),r(29,"po-divider"),n(30,"div",2)(31,"po-button",20),c("p-click",function(){return S(p),f(i.restore())}),t()()()}o&2&&(s(),m("p-aria-label",i.ariaLabel)("p-disabled",i.properties.includes("disabled"))("p-filter-keys",i.fieldKeys)("p-filter-type",i.filterMode)("p-filter-select",i.fieldSelect)("p-icon",i.icon)("p-items",i.items)("p-literals",i.customLiterals)("p-locate-summary",i.customLocateSummary)("p-search-type",i.searchMode)("p-show-listbox",i.properties.includes("showListbox"))("p-size",i.size),s(5),me("p-label","Itens encontrados: ",i.filteredItems==null?null:i.filteredItems.length,""),s(3),B(i.filteredItems),s(4),m("p-value",i.search),s(),m("p-value",i.event),s(4),k("ngModel",i.ariaLabel),s(),k("ngModel",i.itemsModel),s(),k("ngModel",i.properties),m("p-options",i.propertiesOptions),s(),k("ngModel",i.icon),m("p-options",i.iconsOptions),s(),k("ngModel",i.searchMode),m("p-options",i.searchModeOptions),s(),k("ngModel",i.filterMode),m("p-options",i.filterModeOptions),s(),k("ngModel",i.size),m("p-options",i.sizeOptions),s(),k("ngModel",i.locateSummary),s(),k("ngModel",i.literals),s(),k("ngModel",i.filterModel),s(),k("ngModel",i.filterSelectModel))},dependencies:[$,Y,Z,ue,ce,ve,ge,ee,j,ye,Ce,te,V,ne,_],styles:[".sample-list-search[_ngcontent-%COMP%]{list-style:none;display:grid;grid-template-columns:repeat(2,1fr);grid-gap:1rem}.sample-list-search[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{text-transform:capitalize}"]})}return a})();var it=a=>({"docs-sample-code-tabs":a}),Ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-search-labs-view"]],standalone:!1,decls:27,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(r(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Search Labs"),t(),n(4,"a",2),c("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-search-labs/sample-po-search-labs.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
  <po-search
    #poSearch
    class="po-md-12"
    [p-aria-label]="ariaLabel"
    [p-disabled]="properties.includes('disabled')"
    [p-filter-keys]="fieldKeys"
    [p-filter-type]="filterMode"
    [p-filter-select]="fieldSelect"
    [p-icon]="icon"
    [p-items]="items"
    [p-literals]="customLiterals"
    [p-locate-summary]="customLocateSummary"
    [p-search-type]="searchMode"
    [p-show-listbox]="properties.includes('showListbox')"
    [p-size]="size"
    (p-blur)="changeEvent('p-blur')"
    (p-change-model)="changeEvent('p-change-model')"
    (p-filtered-items-change)="filter($event)"
    (p-locate-next)="changeEvent('p-locate-next')"
    (p-locate-previous)="changeEvent('p-locate-previous')"
  ></po-search>
</div>

<po-divider />
<div class="po-row">
  <po-accordion class="po-md-12">
    <po-accordion-item p-label="Itens encontrados: { { filteredItems?.length }}">
      <po-widget class="po-md-12">
        <ul class="sample-list-search po-md-12 row">
          @for (item of filteredItems; track item) {
            <li>
              @for (key of changeFilter(item); track key) {
                <div>
                  <strong>{ { key }}: </strong> { { item[key] }} &nbsp;
                </div>
              }
            </li>
          }
        </ul>
      </po-widget>
    </po-accordion-item>
  </po-accordion>
</div>
<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="search"> </po-info>

  <po-info class="po-md-6" p-label="Events" [p-value]="event"> </po-info>
</div>

<po-divider />

<!-- Properties -->
<form #f="ngForm">
  <po-input class="po-lg-6" name="ariaLabel" p-label="Aria label" [(ngModel)]="ariaLabel"></po-input>

  <po-input
    class="po-lg-6 po-md-12"
    name="items"
    [(ngModel)]="itemsModel"
    p-label="Items"
    p-help='Ex.: [{ "cidade": "S\xE3o Paulo", "pais": "Brasil" }, { "cidade": "Rio de Janeiro", "pais": "Brasil" }, { "cidade": "T\xF3quio", "pais": "Jap\xE3o" }]'
    (p-change-model)="changeItems($event)"
  >
  </po-input>

  <po-checkbox-group
    class="po-lg-6 po-md-12"
    name="properties"
    [(ngModel)]="properties"
    p-label="Properties"
    [p-options]="propertiesOptions"
  >
  </po-checkbox-group>

  <po-radio-group class="po-lg-6 po-md-12" name="icon" [(ngModel)]="icon" p-label="Icon" [p-options]="iconsOptions">
  </po-radio-group>

  <po-radio-group
    class="po-lg-6 po-md-12"
    name="searchMode"
    [(ngModel)]="searchMode"
    p-label="Search Mode"
    [p-options]="searchModeOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-lg-6 po-md-12"
    name="filterMode"
    [(ngModel)]="filterMode"
    p-label="Filter Mode"
    [p-options]="filterModeOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-lg-6 po-md-12"
    name="size"
    [(ngModel)]="size"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <po-input
    class="po-lg-6 po-md-12"
    name="locateSummary"
    [(ngModel)]="locateSummary"
    p-help='{ "currentIndex": 1000, "total": 1000 }'
    p-label="Locate Summary"
    (p-change)="changeLocateSummary()"
  >
  </po-input>

  <po-input
    class="po-lg-6 po-md-12"
    name="literals"
    [(ngModel)]="literals"
    p-help='Ex.: {"search": "Search people"}'
    p-label="Literals"
    (p-change)="changeLiterals()"
  >
  </po-input>

  <po-input
    class="po-lg-6 po-md-12"
    name="Filter Keys"
    [(ngModel)]="filterModel"
    p-label="Filter Keys"
    p-help='Ex.: ["cidade", "pais"]'
    (p-change-model)="updateFilterKeys($event)"
  >
  </po-input>

  <po-input
    class="po-lg-6 po-md-12"
    name="Filter Select"
    [(ngModel)]="filterSelectModel"
    p-label="Filter Select"
    p-help='Ex.: [ { "label": "Name", "value": ["name", "nickname"] }, { "label": "Email", "value": "email" } ]'
    (p-change)="updateFilterSelect($event)"
  >
  </po-input>

  <po-divider />

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-search-labs/sample-po-search-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges, ViewChild, inject } from '@angular/core';
import {
  PoCheckboxGroupOption,
  PoRadioGroupOption,
  PoSearchComponent,
  PoSearchFilterMode,
  PoSearchLiterals
} from '@po-ui/ng-components';
import { PoSearchLocateSummary } from '@po-ui/ng-components/lib/components/po-search/interfaces/po-search-locate-summary.interface';

@Component({
  selector: 'sample-po-search-labs',
  templateUrl: './sample-po-search-labs.component.html',
  styles: [
    \`
      .sample-list-search {
        list-style: none;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
      }

      .sample-list-search strong {
        text-transform: capitalize;
      }
    \`
  ],
  standalone: false
})
export class SamplePoSearchLabsComponent implements OnInit, OnChanges {
  protected http = inject(HttpClient);

  @ViewChild('poSearch', { static: true }) poSearch!: PoSearchComponent;

  ariaLabel?: any;
  customLiterals?: PoSearchLiterals;
  literals?: string;
  properties: Array<string> = [];
  search: string = '';
  event: string = '';
  service: string = 'https://po-sample-api.onrender.com/v1/heroes';
  items: Array<any> = [];
  filteredItems: Array<any> = [];
  fieldKeys?: Array<any> = [];
  fieldSelect?: Array<any> = [];
  tooltip?: string;
  icon?: string;
  filterMode: PoSearchFilterMode = PoSearchFilterMode.startsWith;
  searchMode: 'action' | 'trigger' | 'locate' = 'action';
  fieldKey?: any;
  itemsModel?: any;
  filterModel: any = '["name"]';
  filterSelectModel?: any;
  size: string = 'medium';
  customLocateSummary?: PoSearchLocateSummary;
  locateSummary?: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'showListbox', label: 'Show Listbox' }
  ];

  public readonly iconsOptions: Array<PoRadioGroupOption> = [
    { label: 'fa-search', value: 'fa fa-search' },
    { label: 'an-user', value: 'an an-user' },
    { label: 'an-magnifying-glass', value: 'an an-magnifying-glass' }
  ];

  public readonly filterModeOptions: Array<PoRadioGroupOption> = [
    { label: 'Starts With', value: PoSearchFilterMode.startsWith },
    { label: 'Contains', value: PoSearchFilterMode.contains },
    { label: 'Ends With', value: PoSearchFilterMode.endsWith }
  ];

  public readonly searchModeOptions: Array<PoRadioGroupOption> = [
    { label: 'Action', value: 'action' },
    { label: 'Trigger', value: 'trigger' },
    { label: 'Locate', value: 'locate' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['items']) {
      this.filteredItems = this.items;
    }
  }

  changeFilter(item: any) {
    return Object.keys(item);
  }

  onChangeService() {
    this.http.get(this.service).subscribe((response: any) => {
      const items = response.items;
      if (Array.isArray(items) && items.length > 0) {
        this.items = items;
        this.filteredItems = items;
        this.fieldKeys = ['name'];
      }
    });
  }

  updateFilterKeys(event: string): void {
    this.fieldKeys = this.convertToArray(event);
  }

  updateFilterSelect(event: string): void {
    this.fieldSelect = this.convertToArray(event);
  }

  filter(event: Array<any>) {
    this.filteredItems = event;

    this.event = event.length === 0 ? 'p-change-model' : 'p-filtered-items-change';
  }

  changeItems(items: string): void {
    try {
      const newItems = JSON.parse(items);
      if (Array.isArray(newItems)) {
        this.filteredItems = newItems;
        this.items = newItems;
      }
    } catch {}
  }

  changeLiterals(): void {
    try {
      this.customLiterals = JSON.parse(this.literals ?? '');
    } catch {
      this.customLiterals = undefined;
    }
  }

  changeEvent(event: string): void {
    setTimeout(() => {
      this.event = event;
    });
  }

  changeLocateSummary(): void {
    try {
      this.customLocateSummary = JSON.parse(this.locateSummary ?? '');
    } catch {
      this.customLocateSummary = undefined;
    }
  }

  restore(): void {
    this.ariaLabel = '';
    this.search = '';
    this.event = '';
    this.icon = undefined;
    this.customLiterals = undefined;
    this.customLocateSummary = undefined;
    this.properties = [];
    this.filteredItems = undefined;
    this.items = undefined;
    this.itemsModel = undefined;
    this.filterModel = '["name"]';
    this.filterSelectModel = '';
    this.fieldKeys = undefined;
    this.fieldSelect = undefined;
    this.filterMode = PoSearchFilterMode.startsWith;
    this.searchMode = 'action';
    this.literals = undefined;
    this.locateSummary = undefined;
    this.size = 'medium';
    this.cleanInput();
    this.onChangeService();
  }

  cleanInput(): void {
    try {
      this.poSearch.clearSearch();
    } catch {}
  }

  private convertToArray(value: string): Array<any> | undefined {
    try {
      return JSON.parse(value);
    } catch {
      return undefined;
    }
  }
}
`),t(),n(21,"label",6),e(22,"sample-po-search-labs/sample-po-search-labs.service.ts"),t(),r(23,"pre",9),t()()()(),n(24,"div",10),r(25,"sample-po-search-labs"),t(),r(26,"hr")),o&2&&(s(5),y("po-icon "+i.sampleCodeButtonIcon),s(),b(" ",i.sampleCodeButtonLabel,""),s(),m("ngClass",C(4,it,i.hideSampleCodeTabs)))},dependencies:[P,x,g,v,Ae],encapsulation:2})}return a})();var re=(()=>{class a{getItems(){return[{id:"0348093615904",name:"Leonardo Silveiras",birthdate:"1995-07-15T00:00:00-00:00",genre:"male",city:"4209102",status:"active",nickname:"leo.silveira",email:"leonardo.silveira@gmail.com",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"Joinville",state:"Santa Catarina",uf:"SC",dependents:[]},{id:"0648093812893",name:"Jo\xE3o Severino",birthdate:"1995-10-07T00:00:00-00:00",genre:"male",city:"4216206",status:"active",nickname:"jseverino",email:"jseverino@yahoo.com",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"S\xE3o Francisco do Sul",state:"Santa Catarina",uf:"SC",dependents:[{id:109481,name:"Maria",age:"10",related:"Daughter",birthdate:"2008-12-10"}]},{id:"0748093840433",name:"Jos\xE9 Marcos Cardoso",birthdate:"1986-08-01T00:00:00-00:00",genre:"male",city:"4201307",status:"inactive",nickname:"jose",email:"jose@outlook.com",nationality:"Brazilian",birthPlace:"3550308",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Inativo",cityName:"Araquari",state:"Santa Catarina",uf:"SC",dependents:[{id:109483,name:"Pedro",age:"13",related:"Son",birthdate:"2008-12-10"},{id:109484,name:"Paulo",age:"15",related:"Son",birthdate:"2008-12-10"},{id:109485,name:"Jos\xE9",age:"19",related:"Son",birthdate:"2008-12-10"}]},{id:"0848094890811",name:"Karlo Rodrigues",birthdate:"1989-12-28T00:00:00-00:00",genre:"male",city:"3550308",status:"active",nickname:"krodrigues",email:"krodrigues@uol.com.br",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"S\xE3o Paulo",state:"S\xE3o Paulo",uf:"SP",dependents:[]}]}static \u0275fac=function(o){return new(o||a)};static \u0275prov=Q({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function ot(a,M){if(a&1&&(n(0,"div",0),r(1,"po-info",4)(2,"po-info",5)(3,"po-info",6),t()),a&2){let l=M.$implicit;s(),m("p-value",l.name),s(),m("p-value",l.nickname),s(),m("p-value",l.email)}}function rt(a,M){a&1&&r(0,"div")}function lt(a,M){if(a&1&&(n(0,"li",7),e(1),ae(2,rt,1,0,"div"),t(),n(3,"li",7),e(4),t()),a&2){let l=M.$implicit,o=J();s(),b(" Nickname: ",l.nickname," "),s(),pe(o.compareObjects(l)?2:-1),s(2),b("Email: ",l.email,"")}}var qe=(()=>{class a{service=N(re);items;filterKeys=["name","nickname","email"];peopleFiltered=[];ngOnInit(){this.items=this.service.getItems()}filtered(l){this.peopleFiltered=l,l.length===4&&(this.peopleFiltered=[])}compareObjects(l){return!!this.peopleFiltered.includes(l)}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-search-find-people"]],standalone:!1,features:[X([re])],decls:8,vars:3,consts:[[1,"po-row"],["p-aria-label","Po Search",1,"po-md-12",3,"p-filtered-items-change","p-items","p-filter-keys"],["p-property-title","name",3,"p-items"],["p-list-view-content-template",""],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"],[1,"po-md-12","po-text-color-neutral-dark-40"]],template:function(o,i){o&1&&(n(0,"div",0)(1,"po-search",1),c("p-filtered-items-change",function(u){return i.filtered(u)}),t()(),r(2,"po-divider"),O(3,ot,4,3,"div",0,q),r(5,"po-divider"),n(6,"po-list-view",2),ae(7,lt,5,3,"ng-template",3),t()),o&2&&(s(),m("p-items",i.items)("p-filter-keys",i.filterKeys),s(2),B(i.peopleFiltered),s(3),m("p-items",i.items))},dependencies:[j,V,Te,Ie,_],styles:["li[_ngcontent-%COMP%]{list-style:none;display:flex;align-items:center}","li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:.75em;height:.75em;border-radius:50%;background-color:green;margin-left:10px}"]})}return a})();var pt=a=>({"docs-sample-code-tabs":a}),Oe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-search-find-people-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(r(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Search Find People"),t(),n(4,"a",2),c("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-search-find-people/sample-po-search-find-people.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
  <po-search
    class="po-md-12"
    p-aria-label="Po Search"
    [p-items]="items"
    [p-filter-keys]="filterKeys"
    (p-filtered-items-change)="filtered($event)"
  ></po-search>
</div>

<po-divider />

@for (people of peopleFiltered; track people) {
  <div class="po-row">
    <po-info class="po-md-4" p-label="Name" [p-value]="people.name"> </po-info>
    <po-info class="po-md-4" p-label="Nickname" [p-value]="people.nickname"> </po-info>
    <po-info class="po-md-4" p-label="Email" [p-value]="people.email"> </po-info>
  </div>
}

<po-divider />

<po-list-view p-property-title="name" [p-items]="items">
  <ng-template p-list-view-content-template let-item>
    <li class="po-md-12 po-text-color-neutral-dark-40">
      Nickname: { { item.nickname }}
      @if (compareObjects(item)) {
        <div></div>
      }
    </li>
    <li class="po-md-12 po-text-color-neutral-dark-40">Email: { { item.email }}</li>
  </ng-template>
</po-list-view>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-search-find-people/sample-po-search-find-people.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';
import { SamplePoSearchFindPeopleService } from './sample-po-search-find-people.service';

@Component({
  selector: 'sample-po-search-find-people',
  templateUrl: './sample-po-search-find-people.component.html',
  styles: [
    \`
      li {
        list-style: none;
        display: flex;
        align-items: center;
      }
    \`,
    \`
      li div {
        width: 0.75em;
        height: 0.75em;
        border-radius: 50%;
        background-color: green;
        margin-left: 10px;
      }
    \`
  ],
  providers: [SamplePoSearchFindPeopleService],
  standalone: false
})
export class SamplePoSearchFindPeopleComponent implements OnInit {
  private service = inject(SamplePoSearchFindPeopleService);

  items: any;
  filterKeys: Array<string> = ['name', 'nickname', 'email'];
  peopleFiltered: Array<any> = [];

  ngOnInit() {
    this.items = this.service.getItems();
  }

  filtered(event: Array<any>) {
    this.peopleFiltered = event;
    if (event.length === 4) {
      this.peopleFiltered = [];
    } else {
      try {
      } catch (error) {
        return undefined;
      }
    }
  }

  compareObjects(value: any) {
    return this.peopleFiltered.includes(value) ? true : false;
  }
}
`),t(),n(21,"label",6),e(22,"sample-po-search-find-people/sample-po-search-find-people.service.ts"),t(),n(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SamplePoSearchFindPeopleService {
  getItems(): Array<any> {
    return [
      {
        'id': '0348093615904',
        'name': 'Leonardo Silveiras',
        'birthdate': '1995-07-15T00:00:00-00:00',
        'genre': 'male',
        'city': '4209102',
        'status': 'active',
        'nickname': 'leo.silveira',
        'email': 'leonardo.silveira@gmail.com',
        'nationality': 'Brazilian',
        'birthPlace': 'S\xE3o Paulo',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Ativo',
        'cityName': 'Joinville',
        'state': 'Santa Catarina',
        'uf': 'SC',
        'dependents': []
      },
      {
        'id': '0648093812893',
        'name': 'Jo\xE3o Severino',
        'birthdate': '1995-10-07T00:00:00-00:00',
        'genre': 'male',
        'city': '4216206',
        'status': 'active',
        'nickname': 'jseverino',
        'email': 'jseverino@yahoo.com',
        'nationality': 'Brazilian',
        'birthPlace': 'S\xE3o Paulo',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Ativo',
        'cityName': 'S\xE3o Francisco do Sul',
        'state': 'Santa Catarina',
        'uf': 'SC',
        'dependents': [{ 'id': 109481, 'name': 'Maria', 'age': '10', 'related': 'Daughter', 'birthdate': '2008-12-10' }]
      },
      {
        'id': '0748093840433',
        'name': 'Jos\xE9 Marcos Cardoso',
        'birthdate': '1986-08-01T00:00:00-00:00',
        'genre': 'male',
        'city': '4201307',
        'status': 'inactive',
        'nickname': 'jose',
        'email': 'jose@outlook.com',
        'nationality': 'Brazilian',
        'birthPlace': '3550308',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Inativo',
        'cityName': 'Araquari',
        'state': 'Santa Catarina',
        'uf': 'SC',
        'dependents': [
          { 'id': 109483, 'name': 'Pedro', 'age': '13', 'related': 'Son', 'birthdate': '2008-12-10' },
          { 'id': 109484, 'name': 'Paulo', 'age': '15', 'related': 'Son', 'birthdate': '2008-12-10' },
          { 'id': 109485, 'name': 'Jos\xE9', 'age': '19', 'related': 'Son', 'birthdate': '2008-12-10' }
        ]
      },
      {
        'id': '0848094890811',
        'name': 'Karlo Rodrigues',
        'birthdate': '1989-12-28T00:00:00-00:00',
        'genre': 'male',
        'city': '3550308',
        'status': 'active',
        'nickname': 'krodrigues',
        'email': 'krodrigues@uol.com.br',
        'nationality': 'Brazilian',
        'birthPlace': 'S\xE3o Paulo',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Ativo',
        'cityName': 'S\xE3o Paulo',
        'state': 'S\xE3o Paulo',
        'uf': 'SP',
        'dependents': []
      }
    ];
  }
}
`),t()()()()(),n(25,"div",10),r(26,"sample-po-search-find-people"),t(),r(27,"hr")),o&2&&(s(5),y("po-icon "+i.sampleCodeButtonIcon),s(),b(" ",i.sampleCodeButtonLabel,""),s(),m("ngClass",C(4,pt,i.hideSampleCodeTabs)))},dependencies:[P,x,g,v,qe],encapsulation:2})}return a})();var le=(()=>{class a{getItems(){return[{id:"0348093615904",name:"Leonardo Silveiras",birthdate:"1995-07-15T00:00:00-00:00",genre:"male",city:"4209102",status:"active",nickname:"leo.silveira",email:"leonardo.silveira@gmail.com",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"Joinville",state:"Santa Catarina",uf:"SC",dependents:[]},{id:"0648093812893",name:"Jo\xE3o Severino",birthdate:"1995-10-07T00:00:00-00:00",genre:"male",city:"4216206",status:"active",nickname:"jseverino",email:"jseverino@yahoo.com",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"S\xE3o Francisco do Sul",state:"Santa Catarina",uf:"SC",dependents:[{id:109481,name:"Maria",age:"10",related:"Daughter",birthdate:"2008-12-10"}]},{id:"0748093840433",name:"Jos\xE9 Marcos Cardoso",birthdate:"1986-08-01T00:00:00-00:00",genre:"male",city:"4201307",status:"inactive",nickname:"jose",email:"jose@outlook.com",nationality:"Brazilian",birthPlace:"3550308",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Inativo",cityName:"Araquari",state:"Santa Catarina",uf:"SC",dependents:[{id:109483,name:"Pedro",age:"13",related:"Son",birthdate:"2008-12-10"},{id:109484,name:"Paulo",age:"15",related:"Son",birthdate:"2008-12-10"},{id:109485,name:"Jos\xE9",age:"19",related:"Son",birthdate:"2008-12-10"}]},{id:"0848094890811",name:"Karlo Rodrigues",birthdate:"1989-12-28T00:00:00-00:00",genre:"male",city:"3550308",status:"active",nickname:"krodrigues",email:"krodrigues@uol.com.br",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"S\xE3o Paulo",state:"S\xE3o Paulo",uf:"SP",dependents:[]}]}static \u0275fac=function(o){return new(o||a)};static \u0275prov=Q({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function dt(a,M){if(a&1&&(n(0,"div",0),r(1,"po-divider")(2,"po-info",2)(3,"po-info",3)(4,"po-info",4),t()),a&2){let l=M.$implicit;s(2),m("p-value",l.name),s(),m("p-value",l.nickname),s(),m("p-value",l.email)}}var Be=(()=>{class a{service=N(le);items;filterKeys=["name","nickname","email"];peopleFiltered=[];ngOnInit(){this.items=this.service.getItems()}filtered(l){this.peopleFiltered=l,l.length===4&&(this.peopleFiltered=[])}compareObjects(l){return!!this.peopleFiltered.includes(l)}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-search-listbox"]],standalone:!1,features:[X([le])],decls:4,vars:2,consts:[[1,"po-row"],["p-aria-label","Po Search","p-show-listbox","true","p-search-type","trigger",1,"po-md-12",3,"p-filtered-items-change","p-items","p-filter-keys"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"]],template:function(o,i){o&1&&(n(0,"div",0)(1,"po-search",1),c("p-filtered-items-change",function(u){return i.filtered(u)}),t()(),O(2,dt,5,3,"div",0,q)),o&2&&(s(),m("p-items",i.items)("p-filter-keys",i.filterKeys),s(),B(i.peopleFiltered))},dependencies:[j,V,_],encapsulation:2})}return a})();var ut=a=>({"docs-sample-code-tabs":a}),Ne=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-search-listbox-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(r(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Search With Listbox"),t(),n(4,"a",2),c("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-search-listbox/sample-po-search-listbox.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
  <po-search
    class="po-md-12"
    p-aria-label="Po Search"
    [p-items]="items"
    [p-filter-keys]="filterKeys"
    (p-filtered-items-change)="filtered($event)"
    p-show-listbox="true"
    p-search-type="trigger"
  ></po-search>
</div>

@for (people of peopleFiltered; track people) {
  <div class="po-row">
    <po-divider />
    <po-info class="po-md-4" p-label="Name" [p-value]="people.name"> </po-info>
    <po-info class="po-md-4" p-label="Nickname" [p-value]="people.nickname"> </po-info>
    <po-info class="po-md-4" p-label="Email" [p-value]="people.email"> </po-info>
  </div>
}
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-search-listbox/sample-po-search-listbox.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';
import { SamplePoSearchListboxService } from './sample-po-search-listbox.service';

@Component({
  selector: 'sample-po-search-listbox',
  templateUrl: './sample-po-search-listbox.component.html',
  providers: [SamplePoSearchListboxService],
  standalone: false
})
export class SamplePoSearchListboxComponent implements OnInit {
  private service = inject(SamplePoSearchListboxService);

  items: any;
  filterKeys: Array<string> = ['name', 'nickname', 'email'];
  peopleFiltered: Array<any> = [];

  ngOnInit() {
    this.items = this.service.getItems();
  }

  filtered(event: Array<any>) {
    this.peopleFiltered = event;
    if (event.length === 4) {
      this.peopleFiltered = [];
    } else {
      try {
      } catch (error) {
        return undefined;
      }
    }
  }

  compareObjects(value: any) {
    return this.peopleFiltered.includes(value) ? true : false;
  }
}
`),t(),n(21,"label",6),e(22,"sample-po-search-listbox/sample-po-search-listbox.service.ts"),t(),n(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SamplePoSearchListboxService {
  getItems(): Array<any> {
    return [
      {
        'id': '0348093615904',
        'name': 'Leonardo Silveiras',
        'birthdate': '1995-07-15T00:00:00-00:00',
        'genre': 'male',
        'city': '4209102',
        'status': 'active',
        'nickname': 'leo.silveira',
        'email': 'leonardo.silveira@gmail.com',
        'nationality': 'Brazilian',
        'birthPlace': 'S\xE3o Paulo',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Ativo',
        'cityName': 'Joinville',
        'state': 'Santa Catarina',
        'uf': 'SC',
        'dependents': []
      },
      {
        'id': '0648093812893',
        'name': 'Jo\xE3o Severino',
        'birthdate': '1995-10-07T00:00:00-00:00',
        'genre': 'male',
        'city': '4216206',
        'status': 'active',
        'nickname': 'jseverino',
        'email': 'jseverino@yahoo.com',
        'nationality': 'Brazilian',
        'birthPlace': 'S\xE3o Paulo',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Ativo',
        'cityName': 'S\xE3o Francisco do Sul',
        'state': 'Santa Catarina',
        'uf': 'SC',
        'dependents': [{ 'id': 109481, 'name': 'Maria', 'age': '10', 'related': 'Daughter', 'birthdate': '2008-12-10' }]
      },
      {
        'id': '0748093840433',
        'name': 'Jos\xE9 Marcos Cardoso',
        'birthdate': '1986-08-01T00:00:00-00:00',
        'genre': 'male',
        'city': '4201307',
        'status': 'inactive',
        'nickname': 'jose',
        'email': 'jose@outlook.com',
        'nationality': 'Brazilian',
        'birthPlace': '3550308',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Inativo',
        'cityName': 'Araquari',
        'state': 'Santa Catarina',
        'uf': 'SC',
        'dependents': [
          { 'id': 109483, 'name': 'Pedro', 'age': '13', 'related': 'Son', 'birthdate': '2008-12-10' },
          { 'id': 109484, 'name': 'Paulo', 'age': '15', 'related': 'Son', 'birthdate': '2008-12-10' },
          { 'id': 109485, 'name': 'Jos\xE9', 'age': '19', 'related': 'Son', 'birthdate': '2008-12-10' }
        ]
      },
      {
        'id': '0848094890811',
        'name': 'Karlo Rodrigues',
        'birthdate': '1989-12-28T00:00:00-00:00',
        'genre': 'male',
        'city': '3550308',
        'status': 'active',
        'nickname': 'krodrigues',
        'email': 'krodrigues@uol.com.br',
        'nationality': 'Brazilian',
        'birthPlace': 'S\xE3o Paulo',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Ativo',
        'cityName': 'S\xE3o Paulo',
        'state': 'S\xE3o Paulo',
        'uf': 'SP',
        'dependents': []
      }
    ];
  }
}
`),t()()()()(),n(25,"div",10),r(26,"sample-po-search-listbox"),t(),r(27,"hr")),o&2&&(s(5),y("po-icon "+i.sampleCodeButtonIcon),s(),b(" ",i.sampleCodeButtonLabel,""),s(),m("ngClass",C(4,ut,i.hideSampleCodeTabs)))},dependencies:[P,x,g,v,Be],encapsulation:2})}return a})();function St(a,M){if(a&1&&(n(0,"div",0)(1,"po-container",2),r(2,"po-info",3)(3,"po-info",4)(4,"po-info",5)(5,"po-info",6),t()()),a&2){let l=M.$implicit;s(2),m("p-value",l.name),s(),m("p-value",l.gender),s(),m("p-value",l.planet),s(),m("p-value",l.father)}}var ze=(()=>{class a{items;filteredItems=[];filterSelect=[{label:"Personal",value:["name","gender"]},{label:"Planet",value:["planet"]},{label:"Family",value:"father"}];ngOnInit(){this.items=[{name:"Anakin Skywalker",gender:"male",planet:"Tatooine",father:"Darth Sidious"},{name:"Luke Skywalker",gender:"male",planet:"Tatooine",father:"Anakin Skywalker"},{name:"Leia Organa",gender:"female",planet:"Alderaan",father:"Anakin Skywalker"},{name:"Han Solo",gender:"male",planet:"Corellia",father:"Ovan"}]}filtered(l){this.filteredItems=l}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-search-filter-select"]],standalone:!1,decls:4,vars:2,consts:[[1,"po-row"],["p-aria-label","Po Search","p-search-type","trigger","p-show-listbox","true","p-disabled","false",1,"po-md-12",3,"p-filtered-items-change","p-items","p-filter-select"],[1,"po-row","po-mt-2"],["p-label","Name",1,"po-md-3",3,"p-value"],["p-label","Gender",1,"po-md-3",3,"p-value"],["p-label","Planet",1,"po-md-3",3,"p-value"],["p-label","Father",1,"po-md-3",3,"p-value"]],template:function(o,i){o&1&&(n(0,"div",0)(1,"po-search",1),c("p-filtered-items-change",function(u){return i.filtered(u)}),t()(),O(2,St,6,4,"div",0,q)),o&2&&(s(),m("p-items",i.items)("p-filter-select",i.filterSelect),s(),B(i.filteredItems))},dependencies:[xe,V,_],encapsulation:2})}return a})();var bt=a=>({"docs-sample-code-tabs":a}),je=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-search-filter-select-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(r(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Search With Filter Select + Listbox"),t(),n(4,"a",2),c("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-search-filter-select/sample-po-search-filter-select.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
  <po-search
    class="po-md-12"
    p-aria-label="Po Search"
    [p-items]="items"
    (p-filtered-items-change)="filtered($event)"
    p-search-type="trigger"
    [p-filter-select]="filterSelect"
    p-show-listbox="true"
    p-disabled="false"
  ></po-search>
</div>

@for (people of filteredItems; track people) {
  <div class="po-row">
    <po-container class="po-row po-mt-2">
      <po-info class="po-md-3" p-label="Name" [p-value]="people.name"> </po-info>
      <po-info class="po-md-3" p-label="Gender" [p-value]="people.gender"> </po-info>
      <po-info class="po-md-3" p-label="Planet" [p-value]="people.planet"> </po-info>
      <po-info class="po-md-3" p-label="Father" [p-value]="people.father"> </po-info>
    </po-container>
  </div>
}
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-search-filter-select/sample-po-search-filter-select.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sample-po-search-filter-select',
  templateUrl: './sample-po-search-filter-select.component.html',
  standalone: false
})
export class SamplePoSearchFilterSelectComponent implements OnInit {
  items: any;
  filteredItems: Array<any> = [];
  filterSelect = [
    { label: 'Personal', value: ['name', 'gender'] },
    { label: 'Planet', value: ['planet'] },
    { label: 'Family', value: 'father' }
  ];

  ngOnInit() {
    this.items = [
      { name: 'Anakin Skywalker', gender: 'male', planet: 'Tatooine', father: 'Darth Sidious' },
      { name: 'Luke Skywalker', gender: 'male', planet: 'Tatooine', father: 'Anakin Skywalker' },
      { name: 'Leia Organa', gender: 'female', planet: 'Alderaan', father: 'Anakin Skywalker' },
      { name: 'Han Solo', gender: 'male', planet: 'Corellia', father: 'Ovan' }
    ];
  }

  filtered(event: Array<any>) {
    this.filteredItems = event;
  }
}
`),t()()()()(),n(21,"div",10),r(22,"sample-po-search-filter-select"),t(),r(23,"hr")),o&2&&(s(5),y("po-icon "+i.sampleCodeButtonIcon),s(),b(" ",i.sampleCodeButtonLabel,""),s(),m("ngClass",C(4,bt,i.hideSampleCodeTabs)))},dependencies:[P,x,g,v,ze],encapsulation:2})}return a})();var We=(()=>{class a{poModal;filterType=A.contains;filterKeysAction=["rotina","codigo","modulo","versao"];keysLabel=["rotina","codigo"];itemsAction=[{rotina:"Contas a Pagar",codigo:"MATA103",modulo:"Adm",versao:"1.2.3",action:()=>alert("Contas a Pagar")},{rotina:"Cota\xE7\xE3o de Fornecedores",codigo:"MATA140",modulo:"Adm",versao:"1.2.3",action:()=>alert("Cota\xE7\xE3o de Fornecedores")},{rotina:"Meus Funcionarios",codigo:"XPTO987",modulo:"RH",versao:"1.2.3",url:"documentation/po-widget"}];columns=[{property:"rotina",label:"Rotina"},{property:"codigo",label:"C\xF3digo"},{property:"modulo",label:"M\xF3dulo"},{property:"versao",label:"Vers\xE3o"}];footerAction(){this.poModal.open()}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-search-execute"]],viewQuery:function(o,i){if(o&1&&I(H,7),o&2){let p;T(p=F())&&(i.poModal=p.first)}},standalone:!1,decls:10,vars:9,consts:[["modal",""],[1,"po-row"],["p-title","Pesquisar e executar","p-help","https://github.com/po-ui/po-angular/stargazers",1,"po-lg-6","po-mt-2",3,"p-height"],["name","Po Search",1,"po-mt-2","full",3,"p-footer-action-listbox","p-search-type","p-items","p-filter-type","p-filter-keys","p-keys-label"],["p-title","Rotinas"],[3,"p-columns","p-items","p-hide-columns-manager"]],template:function(o,i){if(o&1){let p=R();n(0,"div",1)(1,"po-widget",2)(2,"div",1)(3,"span"),e(4,"Entre com o nome ou c\xF3digo da rotina"),t()(),n(5,"div",1)(6,"po-search",3),c("p-footer-action-listbox",function(){return S(p),f(i.footerAction())}),t()()()(),n(7,"po-modal",4,0),r(9,"po-table",5),t()}o&2&&(s(),m("p-height",180),s(5),m("p-search-type","execute")("p-items",i.itemsAction)("p-filter-type",i.filterType)("p-filter-keys",i.filterKeysAction)("p-keys-label",i.keysLabel),s(3),m("p-columns",i.columns)("p-items",i.itemsAction)("p-hide-columns-manager",!0))},dependencies:[H,Pe,ne,_],styles:[".full[_ngcontent-%COMP%]{width:100%}"]})}return a})();var vt=a=>({"docs-sample-code-tabs":a}),Re=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-search-execute-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(r(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Search Form Fields with Execute"),t(),n(4,"a",2),c("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-search-execute/sample-po-search-execute.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
  <po-widget
    class="po-lg-6 po-mt-2"
    p-title="Pesquisar e executar"
    p-help="https://github.com/po-ui/po-angular/stargazers"
    [p-height]="180"
  >
    <div class="po-row">
      <span>Entre com o nome ou c\xF3digo da rotina</span>
    </div>
    <div class="po-row">
      <po-search
        class="po-mt-2 full"
        name="Po Search"
        [p-search-type]="'execute'"
        [p-items]="itemsAction"
        [p-filter-type]="filterType"
        [p-filter-keys]="filterKeysAction"
        [p-keys-label]="keysLabel"
        (p-footer-action-listbox)="footerAction()"
      />
    </div>
  </po-widget>
</div>

<po-modal #modal p-title="Rotinas">
  <po-table [p-columns]="columns" [p-items]="itemsAction" [p-hide-columns-manager]="true"> </po-table>
</po-modal>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-search-execute/sample-po-search-execute.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, ViewChild } from '@angular/core';

import { PoModalComponent, PoSearchFilterMode } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-search-execute',
  templateUrl: './sample-po-search-execute.component.html',
  styles: [
    \`
      .full {
        width: 100%;
      }
    \`
  ],
  standalone: false
})
export class SamplePoSearchExecuteComponent {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  filterType = PoSearchFilterMode.contains;
  filterKeysAction: Array<string> = ['rotina', 'codigo', 'modulo', 'versao'];
  keysLabel: Array<string> = ['rotina', 'codigo'];

  itemsAction = [
    {
      rotina: 'Contas a Pagar',
      codigo: 'MATA103',
      modulo: 'Adm',
      versao: '1.2.3',
      action: () => alert(\`Contas a Pagar\`)
    },
    {
      rotina: 'Cota\xE7\xE3o de Fornecedores',
      codigo: 'MATA140',
      modulo: 'Adm',
      versao: '1.2.3',
      action: () => alert(\`Cota\xE7\xE3o de Fornecedores\`)
    },
    {
      rotina: 'Meus Funcionarios',
      codigo: 'XPTO987',
      modulo: 'RH',
      versao: '1.2.3',
      url: 'documentation/po-widget'
    }
  ];

  columns = [
    { property: 'rotina', label: 'Rotina' },
    { property: 'codigo', label: 'C\xF3digo' },
    { property: 'modulo', label: 'M\xF3dulo' },
    { property: 'versao', label: 'Vers\xE3o' }
  ];

  footerAction() {
    this.poModal.open();
  }
}
`),t()()()()(),n(21,"div",10),r(22,"sample-po-search-execute"),t(),r(23,"hr")),o&2&&(s(5),y("po-icon "+i.sampleCodeButtonIcon),s(),b(" ",i.sampleCodeButtonLabel,""),s(),m("ngClass",C(4,vt,i.hideSampleCodeTabs)))},dependencies:[P,x,g,v,We],encapsulation:2})}return a})();var yt=["nameInput"],Ct=["cpfInput"],Pt=["addressInput"],_t=["numberInput"],wt=["emailInput"],Mt=["websiteInput"],It=["reactiveFormData"],He=(()=>{class a{fb=N(fe);nameInput;cpfInput;addressInput;numberInput;emailInput;websiteInput;reactiveFormModal;reactiveForm;filterTargets=[];filteredIndexes=[];currentIndex=-1;firstSearch=!0;locateSummary={currentIndex:0,total:0};filterType=A.endsWith;searchLiterals={search:"Buscar campos"};modalPrimaryAction={label:"Close",action:()=>this.reactiveFormModal.close()};constructor(){this.createForm()}ngAfterViewInit(){this.filterTargets=[{label:"Customer name",index:0,focus:()=>this.nameInput.focus()},{label:"CPF",index:1,focus:()=>this.cpfInput.focus()},{label:"Address",index:2,focus:()=>this.addressInput.focus()},{label:"Number",index:3,focus:()=>this.numberInput.focus()},{label:"Email",index:4,focus:()=>this.emailInput.focus()},{label:"Website",index:5,focus:()=>this.websiteInput.focus()}]}createForm(){this.reactiveForm=this.fb.group({name:["",[z.required,z.minLength(5)]],cpf:["",z.required],address:["",z.required],number:["",z.required],email:["",z.required],website:["",z.required]})}updateSearchTerm(l){console.log("updateSearchTerm");let o=l.toLowerCase();this.filteredIndexes=this.filterTargets.map((p,u)=>({i:u,t:p})).filter(({t:p})=>o&&p.label.toLowerCase().startsWith(o)).map(({i:p})=>p),this.currentIndex=-1;let i=this.filteredIndexes.length;this.locateSummary={currentIndex:0,total:i}}onNextOccurrenceClick(){console.log("onNextOccurrenceClick"),this.goToNextOccurrence(),this.focusCurrent()}onPreviousOccurrenceClick(){console.log("onPreviousOccurrenceClick"),this.goToPreviousOccurrence(),this.focusCurrent()}goToNextOccurrence(){this.filteredIndexes.length&&(this.currentIndex=(this.currentIndex+1)%this.filteredIndexes.length,this.updateSummary())}goToPreviousOccurrence(){this.filteredIndexes.length&&(this.currentIndex=this.currentIndex<=0?this.filteredIndexes.length-1:this.currentIndex-1,this.updateSummary())}updateSummary(){let l=this.filteredIndexes.length,o=l===0||this.currentIndex===-1?0:this.currentIndex+1;this.locateSummary={currentIndex:o,total:l}}focusCurrent(){let l=this.filteredIndexes[this.currentIndex];l!==void 0&&(document.activeElement?.blur(),this.filterTargets[l].focus())}getInputElementByIndex(l){switch(l){case 0:return this.nameInput?.inputEl?.nativeElement??null;case 1:return this.cpfInput?.inputEl?.nativeElement??null;case 2:return this.addressInput?.inputEl?.nativeElement??null;case 3:return this.numberInput?.inputEl?.nativeElement??null;case 4:return this.emailInput?.inputEl?.nativeElement??null;case 5:return this.websiteInput?.inputEl?.nativeElement??null;default:return null}}saveForm(){this.reactiveFormModal.open()}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-search-fields-locate"]],viewQuery:function(o,i){if(o&1&&(I(yt,7),I(Ct,7),I(Pt,7),I(_t,7),I(wt,7),I(Mt,7),I(It,7)),o&2){let p;T(p=F())&&(i.nameInput=p.first),T(p=F())&&(i.cpfInput=p.first),T(p=F())&&(i.addressInput=p.first),T(p=F())&&(i.numberInput=p.first),T(p=F())&&(i.emailInput=p.first),T(p=F())&&(i.websiteInput=p.first),T(p=F())&&(i.reactiveFormModal=p.first)}},standalone:!1,decls:35,vars:11,consts:[["nameInput",""],["cpfInput",""],["addressInput",""],["numberInput",""],["emailInput",""],["websiteInput",""],["reactiveFormData",""],[1,"po-row"],[1,"po-ml-1","po-mr-1"],["p-search-type","locate",3,"p-change-model","p-locate-next","p-locate-previous","p-literals","p-locate-summary"],[3,"formGroup"],["formControlName","name","p-clean","","p-icon","an an-user","p-label","Customer name",1,"po-lg-9"],["formControlName","cpf","p-label","CPF","p-mask","999.999.999-99","p-clean","",1,"po-lg-3"],["formControlName","address","p-clean","","p-icon","an an-map-pin","p-label","Address",1,"po-lg-9"],["formControlName","number","p-label","Number","p-clean","",1,"po-lg-3"],["formControlName","email","p-label","Email","p-clean","",1,"po-lg-6"],["formControlName","website","p-label","Website","p-clean","",1,"po-lg-6"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Save successful",3,"p-primary-action"],["p-label","Name",1,"po-lg-6",3,"p-value"],["p-label","CPF",1,"po-lg-6",3,"p-value"],["p-label","Address",1,"po-lg-6",3,"p-value"],["p-label","Number",1,"po-lg-6",3,"p-value"],["p-label","Email",1,"po-lg-6",3,"p-value"],["p-label","Website",1,"po-lg-6",3,"p-value"]],template:function(o,i){if(o&1){let p=R();n(0,"div",7)(1,"div",8)(2,"po-search",9),c("p-change-model",function(d){return S(p),f(i.updateSearchTerm(d))})("p-locate-next",function(){return S(p),f(i.onNextOccurrenceClick())})("p-locate-previous",function(){return S(p),f(i.onPreviousOccurrenceClick())}),t()()(),r(3,"po-divider"),n(4,"form",10)(5,"div",7),r(6,"po-input",11,0)(8,"po-input",12,1),t(),n(10,"div",7),r(11,"po-input",13,2)(13,"po-number",14,3),t(),n(15,"div",7),r(16,"po-email",15,4)(18,"po-url",16,5),t(),n(20,"div",7)(21,"po-button",17),c("p-click",function(){return S(p),f(i.saveForm())}),t()()(),n(22,"po-modal",18,6)(24,"div",7),r(25,"po-info",19)(26,"po-info",20),t(),r(27,"po-divider"),n(28,"div",7),r(29,"po-info",21)(30,"po-info",22),t(),r(31,"po-divider"),n(32,"div",7),r(33,"po-info",23)(34,"po-info",24),t()()}o&2&&(s(2),m("p-literals",i.searchLiterals)("p-locate-summary",i.locateSummary),s(2),m("formGroup",i.reactiveForm),s(17),m("p-disabled",!i.reactiveForm.valid),s(),m("p-primary-action",i.modalPrimaryAction),s(3),m("p-value",i.reactiveForm.controls.name.value),s(),m("p-value",i.reactiveForm.controls.cpf.value),s(3),m("p-value",i.reactiveForm.controls.address.value),s(),m("p-value",i.reactiveForm.controls.number.value),s(3),m("p-value",i.reactiveForm.controls.email.value),s(),m("p-value",i.reactiveForm.controls.website.value))},dependencies:[$,Y,Z,he,Se,ee,j,_e,te,we,Me,V,H,_],encapsulation:2})}return a})();var Ft=a=>({"docs-sample-code-tabs":a}),Ke=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-search-fields-locate-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(r(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Search Form Fields with Locate"),t(),n(4,"a",2),c("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-search-fields-locate/sample-po-search-fields-locate.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
  <div class="po-ml-1 po-mr-1">
    <po-search
      p-search-type="locate"
      [p-literals]="searchLiterals"
      [p-locate-summary]="locateSummary"
      (p-change-model)="updateSearchTerm($event)"
      (p-locate-next)="onNextOccurrenceClick()"
      (p-locate-previous)="onPreviousOccurrenceClick()"
    />
  </div>
</div>
<po-divider></po-divider>

<form [formGroup]="reactiveForm">
  <div class="po-row">
    <po-input #nameInput class="po-lg-9" formControlName="name" p-clean p-icon="an an-user" p-label="Customer name">
    </po-input>

    <po-input #cpfInput class="po-lg-3" formControlName="cpf" p-label="CPF" p-mask="999.999.999-99" p-clean> </po-input>
  </div>

  <div class="po-row">
    <po-input #addressInput class="po-lg-9" formControlName="address" p-clean p-icon="an an-map-pin" p-label="Address">
    </po-input>

    <po-number #numberInput class="po-lg-3" formControlName="number" p-label="Number" p-clean> </po-number>
  </div>

  <div class="po-row">
    <po-email #emailInput class="po-lg-6" formControlName="email" p-label="Email" p-clean> </po-email>

    <po-url #websiteInput class="po-lg-6" formControlName="website" p-label="Website" p-clean> </po-url>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Save" [p-disabled]="!reactiveForm.valid" (p-click)="saveForm()"> </po-button>
  </div>
</form>

<po-modal #reactiveFormData p-title="Save successful" [p-primary-action]="modalPrimaryAction">
  <div class="po-row">
    <po-info class="po-lg-6" p-label="Name" [p-value]="reactiveForm.controls.name.value"> </po-info>

    <po-info class="po-lg-6" p-label="CPF" [p-value]="reactiveForm.controls.cpf.value"> </po-info>
  </div>

  <po-divider></po-divider>

  <div class="po-row">
    <po-info class="po-lg-6" p-label="Address" [p-value]="reactiveForm.controls.address.value"> </po-info>

    <po-info class="po-lg-6" p-label="Number" [p-value]="reactiveForm.controls.number.value"> </po-info>
  </div>

  <po-divider></po-divider>

  <div class="po-row">
    <po-info class="po-lg-6" p-label="Email" [p-value]="reactiveForm.controls.email.value"> </po-info>

    <po-info class="po-lg-6" p-label="Website" [p-value]="reactiveForm.controls.website.value"> </po-info>
  </div>
</po-modal>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-search-fields-locate/sample-po-search-fields-locate.component.ts"),t(),n(19,"pre",9),e(20,`import { AfterViewInit, Component, ViewChild, inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import {
  PoEmailComponent,
  PoInputComponent,
  PoModalAction,
  PoModalComponent,
  PoNumberComponent,
  PoSearchFilterMode,
  PoSearchLiterals,
  PoUrlComponent
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-search-fields-locate',
  templateUrl: './sample-po-search-fields-locate.component.html',
  standalone: false
})
export class SamplePoSearchFieldsLocateComponent implements AfterViewInit {
  protected fb = inject(UntypedFormBuilder);

  @ViewChild('nameInput', { static: true }) nameInput!: PoInputComponent;
  @ViewChild('cpfInput', { static: true }) cpfInput!: PoInputComponent;
  @ViewChild('addressInput', { static: true }) addressInput!: PoInputComponent;
  @ViewChild('numberInput', { static: true }) numberInput!: PoNumberComponent;
  @ViewChild('emailInput', { static: true }) emailInput!: PoEmailComponent;
  @ViewChild('websiteInput', { static: true }) websiteInput!: PoUrlComponent;
  @ViewChild('reactiveFormData', { static: true }) reactiveFormModal!: PoModalComponent;

  reactiveForm!: UntypedFormGroup;

  filterTargets: Array<{ label: string; index: number; focus: () => void }> = [];
  filteredIndexes: Array<number> = [];
  currentIndex: number = -1;
  firstSearch = true;

  locateSummary: { currentIndex: number; total: number } = { currentIndex: 0, total: 0 };
  filterType: PoSearchFilterMode = PoSearchFilterMode.endsWith;
  searchLiterals: PoSearchLiterals = { search: 'Buscar campos' };
  modalPrimaryAction: PoModalAction = {
    label: 'Close',
    action: () => this.reactiveFormModal.close()
  };

  constructor() {
    this.createForm();
  }

  ngAfterViewInit() {
    this.filterTargets = [
      { label: 'Customer name', index: 0, focus: () => this.nameInput.focus() },
      { label: 'CPF', index: 1, focus: () => this.cpfInput.focus() },
      { label: 'Address', index: 2, focus: () => this.addressInput.focus() },
      { label: 'Number', index: 3, focus: () => this.numberInput.focus() },
      { label: 'Email', index: 4, focus: () => this.emailInput.focus() },
      { label: 'Website', index: 5, focus: () => this.websiteInput.focus() }
    ];
  }

  createForm() {
    this.reactiveForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      cpf: ['', Validators.required],
      address: ['', Validators.required],
      number: ['', Validators.required],
      email: ['', Validators.required],
      website: ['', Validators.required]
    });
  }

  // Atualiza os campos filtrados conforme o termo digitado
  updateSearchTerm(term: string) {
    console.log('updateSearchTerm');
    const value = term.toLowerCase();

    this.filteredIndexes = this.filterTargets
      .map((t, i) => ({ i, t }))
      .filter(({ t }) => value && t.label.toLowerCase().startsWith(value))
      .map(({ i }) => i);

    this.currentIndex = -1;

    const total = this.filteredIndexes.length;

    this.locateSummary = {
      currentIndex: 0,
      total: total
    };
  }

  // Navega\xE7\xE3o pelos bot\xF5es
  onNextOccurrenceClick() {
    console.log('onNextOccurrenceClick');
    this.goToNextOccurrence();
    this.focusCurrent();
  }

  onPreviousOccurrenceClick() {
    console.log('onPreviousOccurrenceClick');
    this.goToPreviousOccurrence();
    this.focusCurrent();
  }

  goToNextOccurrence() {
    if (!this.filteredIndexes.length) return;

    this.currentIndex = (this.currentIndex + 1) % this.filteredIndexes.length;
    this.updateSummary();
  }

  goToPreviousOccurrence() {
    if (!this.filteredIndexes.length) return;

    this.currentIndex = this.currentIndex <= 0 ? this.filteredIndexes.length - 1 : this.currentIndex - 1;
    this.updateSummary();
  }

  updateSummary() {
    const total = this.filteredIndexes.length;
    const current = total === 0 || this.currentIndex === -1 ? 0 : this.currentIndex + 1;

    this.locateSummary = {
      currentIndex: current,
      total: total
    };
  }

  // Foca o campo selecionado
  focusCurrent() {
    const index = this.filteredIndexes[this.currentIndex];
    if (index !== undefined) {
      (document.activeElement as HTMLElement)?.blur();
      this.filterTargets[index].focus();
    }
  }

  // Obt\xEAm o elemento real do campo
  getInputElementByIndex(index: number): HTMLElement | null {
    switch (index) {
      case 0:
        return this.nameInput?.inputEl?.nativeElement ?? null;
      case 1:
        return this.cpfInput?.inputEl?.nativeElement ?? null;
      case 2:
        return this.addressInput?.inputEl?.nativeElement ?? null;
      case 3:
        return this.numberInput?.inputEl?.nativeElement ?? null;
      case 4:
        return this.emailInput?.inputEl?.nativeElement ?? null;
      case 5:
        return this.websiteInput?.inputEl?.nativeElement ?? null;
      default:
        return null;
    }
  }

  saveForm() {
    this.reactiveFormModal.open();
  }
}
`),t()()()()(),n(21,"div",10),r(22,"sample-po-search-fields-locate"),t(),r(23,"hr")),o&2&&(s(5),y("po-icon "+i.sampleCodeButtonIcon),s(),b(" ",i.sampleCodeButtonLabel,""),s(),m("ngClass",C(4,Ft,i.hideSampleCodeTabs)))},dependencies:[P,x,g,v,He],encapsulation:2})}return a})();var Je=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-search-doc"]],standalone:!1,decls:1319,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Array<any>"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","PoSearchFilterSelect[]"],["pan","",1,"docs-api-property-type","PoSearchFilterMode"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<string>"],[1,"language-ts"],["pan","",1,"docs-api-property-type","PoSearchLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoSearchLocateSummary"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","searchMode"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","number"]],template:function(o,i){o&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoSearchModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,"M\xF3dulo do componente po-search."),t()(),n(7,"h3",3),e(8,"Componente"),t(),n(9,"h4",4)(10,"code",5),e(11,"PoSearchComponent"),t()(),n(12,"div",2)(13,"p"),e(14,"O componente search, tamb\xE9m conhecido como barra de pesquisa, \xE9 utilizado para ajudar os usu\xE1rios a localizar um determinado conte\xFAdo."),t(),n(15,"p"),e(16,"Normalmente localizado no canto superior direito, junto com o \xEDcone de lupa, uma vez que este \xEDcone \xE9 amplamente reconhecido."),t(),n(17,"h4"),e(18,"Boas pr\xE1ticas"),t(),n(19,"p"),e(20,`Foram estruturados os padr\xF5es de usabilidade para auxiliar na utiliza\xE7\xE3o do componente e garantir uma boa experi\xEAncia
aos usu\xE1rios. Portanto, \xE9 de extrema import\xE2ncia que, ao utilizar este componente, as pessoas respons\xE1veis por seu
desenvolvimento considerem os seguintes crit\xE9rios:`),t(),n(21,"ul")(22,"li"),e(23,`Utilize labels para apresentar resultados que est\xE3o sendo exibidos e apresente os resultados mais relevantes
primeiro.`),t(),n(24,"li"),e(25,`Exiba uma mensagem clara quando n\xE3o forem encontrados resultados para busca e sempre que poss\xEDvel ofere\xE7a outras
sugest\xF5es de busca.`),t(),n(26,"li"),e(27,`Mantenha o texto original no campo de input, que facilita a a\xE7\xE3o do usu\xE1rio caso queira fazer uma nova busca com
alguma modifica\xE7\xE3o na pesquisa.`),t(),n(28,"li"),e(29,`Caso seja poss\xEDvel detectar um erro de digita\xE7\xE3o, mostre os resultados para a palavra "corrigida", isso evita a
frustra\xE7\xE3o de n\xE3o obter resultados e n\xE3o for\xE7a o usu\xE1rio a realizar uma nova busca.`),t(),n(30,"li"),e(31,"Quando apropriado, destaque os termos da busca nos resultados."),t(),n(32,"li"),e(33,"A entrada do campo de pesquisa deve caber em uma linha. N\xE3o use entradas de pesquisa de v\xE1rias linhas."),t(),n(34,"li"),e(35,`Recomenda-se ter apenas uma pesquisa por p\xE1gina. Se voc\xEA precisar de v\xE1rias pesquisas, rotule-as claramente para
indicar sua finalidade.`),t(),n(36,"li"),e(37,`Se poss\xEDvel, forne\xE7a sugest\xF5es de pesquisa, seja em um helptext ou sugest\xE3o de pesquisa que \xE9 um autocomplete. Isso
ajuda os usu\xE1rios a encontrar o que est\xE3o procurando, especialmente se os itens pesquis\xE1veis forem complexos.`),t()(),n(38,"h4"),e(39,"Acessibilidade tratada no componente"),t(),n(40,"p"),e(41,` Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo
propriet\xE1rio do conte\xFAdo. S\xE3o elas:`),t(),n(42,"ul")(43,"li"),e(44,"Permitir a intera\xE7\xE3o via teclado (2.1.1: Keyboard (A));"),t(),n(45,"li"),e(46,"Altera\xE7\xE3o entre os estados precisa ser indicada por mais de um elemento al\xE9m da cor (1.4.1: Use of Color);"),t()(),n(47,"h4"),e(48,"Tokens customiz\xE1veis"),t(),n(49,"p"),e(50,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),n(51,"blockquote")(52,"p"),e(53,"Para maiores informa\xE7\xF5es, acesse o guia "),n(54,"a",6),e(55,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(56,"."),t()(),n(57,"table")(58,"thead")(59,"tr")(60,"th"),e(61,"Propriedade"),t(),n(62,"th"),e(63,"Descri\xE7\xE3o"),t(),n(64,"th"),e(65,"Valor Padr\xE3o"),t()()(),n(66,"tbody")(67,"tr")(68,"td")(69,"strong"),e(70,"Default Values"),t()(),r(71,"td")(72,"td"),t(),n(73,"tr")(74,"td")(75,"code"),e(76,"--font-family"),t()(),n(77,"td"),e(78,"Fam\xEDlia tipogr\xE1fica do campo"),t(),n(79,"td")(80,"code"),e(81,"var(--font-family-theme)"),t()()(),n(82,"tr")(83,"td")(84,"code"),e(85,"--font-size"),t()(),n(86,"td"),e(87,"Tamanho da fonte do campo"),t(),n(88,"td")(89,"code"),e(90,"var(--font-size-default)"),t()()(),n(91,"tr")(92,"td")(93,"code"),e(94,"--text-color-placeholder"),t()(),n(95,"td"),e(96,"Cor do texto no placeholder"),t(),n(97,"td")(98,"code"),e(99,"var(--color-neutral-light-30)"),t()()(),n(100,"tr")(101,"td")(102,"code"),e(103,"--color"),t()(),n(104,"td"),e(105,"Cor das bordas"),t(),n(106,"td")(107,"code"),e(108,"var(--color-neutral-dark-70)"),t()()(),n(109,"tr")(110,"td")(111,"code"),e(112,"--border-radius"),t()(),n(113,"td"),e(114,"Raio das bordas"),t(),n(115,"td")(116,"code"),e(117,"var(--border-radius-md)"),t()()(),n(118,"tr")(119,"td")(120,"code"),e(121,"--background"),t()(),n(122,"td"),e(123,"Cor de background"),t(),n(124,"td")(125,"code"),e(126,"var(--color-neutral-light-05)"),t()()(),n(127,"tr")(128,"td")(129,"code"),e(130,"--text-color"),t()(),n(131,"td"),e(132,"Cor do texto edit\xE1vel"),t(),n(133,"td")(134,"code"),e(135,"var(--color-neutral-dark-90)"),t()()(),n(136,"tr")(137,"td")(138,"code"),e(139,"--color-clear"),t()(),n(140,"td"),e(141,"Cor do \xEDcone close"),t(),n(142,"td")(143,"code"),e(144,"var(--color-action-default)"),t()()(),n(145,"tr")(146,"td")(147,"code"),e(148,"--color-controls"),t()(),n(149,"td"),e(150,"Cor dos \xEDcones de controle do mode location"),t(),n(151,"td")(152,"code"),e(153,"var(--color-action-default)"),t()()(),n(154,"tr")(155,"td")(156,"code"),e(157,"--transition-property"),t()(),n(158,"td"),e(159,"Atributo da transi\xE7\xE3o"),t(),n(160,"td")(161,"code"),e(162,"all"),t()()(),n(163,"tr")(164,"td")(165,"code"),e(166,"--transition-duration"),t()(),n(167,"td"),e(168,"Dura\xE7\xE3o da transi\xE7\xE3o"),t(),n(169,"td")(170,"code"),e(171,"var(--duration-extra-fast)"),t()()(),n(172,"tr")(173,"td")(174,"code"),e(175,"--transition-timing"),t()(),n(176,"td"),e(177,"Dura\xE7\xE3o da transi\xE7\xE3o com o tipo de transi\xE7\xE3o"),t(),n(178,"td")(179,"code"),e(180,"var(--timing-standart)"),t()()(),n(181,"tr")(182,"td")(183,"strong"),e(184,"Icon"),t()(),r(185,"td")(186,"td"),t(),n(187,"tr")(188,"td")(189,"code"),e(190,"--color-icon-read"),t()(),n(191,"td"),e(192,"Cor do \xEDcone de busca no modo action"),t(),n(193,"td")(194,"code"),e(195,"var(--color-neutral-dark-70)"),t()()(),n(196,"tr")(197,"td")(198,"code"),e(199,"--color-icon"),t()(),n(200,"td"),e(201,"Cor do \xEDcone de busca no modo trigger"),t(),n(202,"td")(203,"code"),e(204,"var(--color-action-default)"),t()()(),n(205,"tr")(206,"td")(207,"strong"),e(208,"Hover"),t()(),r(209,"td")(210,"td"),t(),n(211,"tr")(212,"td")(213,"code"),e(214,"--color-hover"),t()(),n(215,"td"),e(216,"Cor das bordas no estado hover"),t(),n(217,"td")(218,"code"),e(219,"var(--color-action-hover)"),t()()(),n(220,"tr")(221,"td")(222,"code"),e(223,"--background-hover"),t()(),n(224,"td"),e(225,"Cor de background no estado hover"),t(),n(226,"td")(227,"code"),e(228,"var(--color-brand-01-lightest)"),t()()(),n(229,"tr")(230,"td")(231,"strong"),e(232,"Focused"),t()(),r(233,"td")(234,"td"),t(),n(235,"tr")(236,"td")(237,"code"),e(238,"--color-focused"),t()(),n(239,"td"),e(240,"Cor das bordas no estado de focus"),t(),n(241,"td")(242,"code"),e(243,"var(--color-action-default)"),t()()(),n(244,"tr")(245,"td")(246,"code"),e(247,"--outline-color-focused"),t()(),n(248,"td"),e(249,"Cor do outline no estado de focus"),t(),n(250,"td")(251,"code"),e(252,"var(--color-action-focus)"),t()()(),n(253,"tr")(254,"td")(255,"strong"),e(256,"Disabled"),t()(),r(257,"td")(258,"td"),t(),n(259,"tr")(260,"td")(261,"code"),e(262,"--color-disabled"),t()(),n(263,"td"),e(264,"Cor principal no estado disabled"),t(),n(265,"td")(266,"code"),e(267,"var(--color-action-disabled)"),t()()(),n(268,"tr")(269,"td")(270,"code"),e(271,"--background-disabled"),t()(),n(272,"td"),e(273,"Cor de background no estado disabled"),t(),n(274,"td")(275,"code"),e(276,"var(--color-neutral-light-20)"),t()()()()()(),n(277,"div",7)(278,"h4",8),e(279,"Seletor"),t(),n(280,"pre",9),e(281,`<po-search
    p-aria-label="string"
    (p-blur)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-disabled="boolean"
    (p-filter)="EventEmitter"
    p-filter-keys="Array<any>"
    p-filter-select="PoSearchFilterSelect[]"
    p-filter-type="PoSearchFilterMode"
    (p-filtered-items-change)="EventEmitter"
    (p-footer-action-listbox)="EventEmitter"
    p-icon="string | TemplateRef<void>"
    p-items="Array<any>"
    p-keys-label="Array<string>"
    (p-listbox-onclick)="EventEmitter"
    p-literals="PoSearchLiterals"
    (p-locate-next)="EventEmitter"
    (p-locate-previous)="EventEmitter"
    p-locate-summary="PoSearchLocateSummary"
    p-show-listbox="boolean"
    p-size="string"
    p-search-type="searchMode" >
</po-search>
`),t()(),n(282,"h4",10),e(283,"Propriedades"),t(),n(284,"table",11)(285,"tr",12)(286,"th",13),e(287,"Nome"),t(),n(288,"th",13),e(289,"Tipo"),t(),n(290,"th",13),e(291,"Padr\xE3o"),t(),n(292,"th",13),e(293,"Descri\xE7\xE3o"),t()(),n(294,"tr",14)(295,"td",15)(296,"div",16)(297,"span",17),e(298," p-aria-label"),r(299,"br"),t()()(),n(300,"td",18)(301,"code",19),e(302,"string"),t()(),n(303,"td",20),e(304,"-"),t(),n(305,"td",21)(306,"em")(307,"strong"),e(308,"(opcional)"),t()(),n(309,"p"),e(310,"Define um aria-label para o po-search."),t(),n(311,"blockquote")(312,"p"),e(313,"Devido o componente n\xE3o possuir uma label assim como outros campos de texto, o "),n(314,"code"),e(315,"aria-label"),t(),e(316,` \xE9 utilizado para
acessibilidade.`),t()()()(),n(317,"tr",14)(318,"td",15)(319,"div",22)(320,"span",23),e(321," (p-blur)"),r(322,"br"),t()()(),n(323,"td",18)(324,"code",24),e(325,"EventEmitter"),t()(),n(326,"td",20),e(327,"-"),t(),n(328,"td",21)(329,"em")(330,"strong"),e(331,"(opcional)"),t()(),n(332,"p"),e(333,"Evento disparado ao sair do campo."),t()()(),n(334,"tr",14)(335,"td",15)(336,"div",22)(337,"span",23),e(338," (p-change-model)"),r(339,"br"),t()()(),n(340,"td",18)(341,"code",24),e(342,"EventEmitter"),t()(),n(343,"td",20),e(344,"-"),t(),n(345,"td",21)(346,"em")(347,"strong"),e(348,"(opcional)"),t()(),n(349,"p"),e(350,"Evento disparado ao alterar valor do model."),t()()(),n(351,"tr",14)(352,"td",15)(353,"div",16)(354,"span",17),e(355," p-disabled"),r(356,"br"),t()()(),n(357,"td",18)(358,"code",25),e(359,"boolean"),t()(),n(360,"td",20)(361,"p")(362,"code"),e(363,"false"),t()()(),n(364,"td",21)(365,"em")(366,"strong"),e(367,"(opcional)"),t()(),n(368,"p"),e(369,"Desabilita o po-search e n\xE3o permite que o usu\xE1rio interaja com o mesmo."),t()()(),n(370,"tr",14)(371,"td",15)(372,"div",22)(373,"span",23),e(374," (p-filter)"),r(375,"br"),t()()(),n(376,"td",18)(377,"code",24),e(378,"EventEmitter"),t()(),n(379,"td",20),e(380,"-"),t(),n(381,"td",21)(382,"em")(383,"strong"),e(384,"(opcional)"),t()(),n(385,"p"),e(386,"Pode ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es nos filtros."),t(),n(387,"blockquote")(388,"p"),e(389,"Incompat\xEDvel com a propriedade "),n(390,"code"),e(391,"p-search-type"),t(),e(392," do tipo "),n(393,"code"),e(394,"locate"),t(),e(395,"."),t()()()(),n(396,"tr",14)(397,"td",15)(398,"div",16)(399,"span",17),e(400," p-filter-keys"),r(401,"br"),t()()(),n(402,"td",18)(403,"code",26),e(404,"Array<any>"),t()(),n(405,"td",20),e(406,"-"),t(),n(407,"td",21)(408,"p"),e(409,"Define os nomes das propriedades do objeto que ser\xE3o utilizados para busca em "),n(410,"code"),e(411,"p-items"),t(),e(412,`. Cada valor definido no
array ser\xE1 considerado durante a apresenta\xE7\xE3o e filtragem dos itens.
Exemplo de uso:`),t(),n(413,"pre")(414,"code",27),e(415,`const filterKeys: Array<string> = ['name', 'gender', 'planet', 'father'];
`),t()(),n(416,"blockquote")(417,"p"),e(418,"Esta propriedade \xE9 ignorada quando utilizado com "),n(419,"code"),e(420,"p-filter-select"),t(),e(421,` e incompat\xEDvel com a propriedade
`),n(422,"code"),e(423,"p-search-type"),t(),e(424," do tipo "),n(425,"code"),e(426,"locate"),t(),e(427,"."),t()()()(),n(428,"tr",14)(429,"td",15)(430,"div",16)(431,"span",17),e(432," p-filter-select"),r(433,"br"),t()()(),n(434,"td",18)(435,"code",28),e(436,"PoSearchFilterSelect[]"),t()(),n(437,"td",20),e(438,"-"),t(),n(439,"td",21)(440,"p"),e(441,`Habilita um seletor de filtros \xE0 esquerda do campo, permitindo a aplica\xE7\xE3o de filtros agrupados na busca ou sobre
os itens fornecidos em `),n(442,"code"),e(443,"p-items"),t(),e(444,". Automaticamente adiciona a op\xE7\xE3o "),n(445,"strong"),e(446,"Todos"),t(),e(447,", com um mapeamento de todas as op\xE7\xF5es passadas."),t(),n(448,"p"),e(449,"Exemplo de uso:"),t(),n(450,"pre")(451,"code",27),e(452,`const filterSelect = [
  { label: 'personal', value: ['name', 'email', 'nickname'] },
  { label: 'address', value: ['country', 'state', 'city', 'street'] },
  { label: 'family', value: ['father', 'mother', 'dependents'] }
];
`),t()(),n(453,"blockquote")(454,"p"),e(455,"Ao ser habilitada, a propriedade "),n(456,"code"),e(457,"p-filter-keys"),t(),e(458,` ser\xE1 ignorada. Esta propriedade \xE9 incompat\xEDvel com a propriedade
`),n(459,"code"),e(460,"p-search-type"),t(),e(461," do tipo "),n(462,"code"),e(463,"locate"),t(),e(464,"."),t()()()(),n(465,"tr",14)(466,"td",15)(467,"div",16)(468,"span",17),e(469," p-filter-type"),r(470,"br"),t()()(),n(471,"td",18)(472,"code",29),e(473,"PoSearchFilterMode"),t()(),n(474,"td",20)(475,"p")(476,"code"),e(477,"startsWith"),t()()(),n(478,"td",21)(479,"em")(480,"strong"),e(481,"(opcional)"),t()(),n(482,"p"),e(483,`Define o modo de pesquisa utilizado no campo de busca. Os valores permitidos s\xE3o definidos pelo enum
`),n(484,"strong"),e(485,"PoSearchFilterMode"),t(),e(486,"."),t(),n(487,"blockquote")(488,"p"),e(489,"Incompat\xEDvel com a propriedade "),n(490,"code"),e(491,"p-search-type"),t(),e(492," do tipo "),n(493,"code"),e(494,"locate"),t(),e(495,"."),t()()()(),n(496,"tr",14)(497,"td",15)(498,"div",22)(499,"span",23),e(500," (p-filtered-items-change)"),r(501,"br"),t()()(),n(502,"td",18)(503,"code",24),e(504,"EventEmitter"),t()(),n(505,"td",20),e(506,"-"),t(),n(507,"td",21)(508,"em")(509,"strong"),e(510,"(opcional)"),t()(),n(511,"p"),e(512,"Pode ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no input."),t(),n(513,"blockquote")(514,"p"),e(515,"Incompat\xEDvel com a propriedade "),n(516,"code"),e(517,"p-search-type"),t(),e(518," do tipo "),n(519,"code"),e(520,"locate"),t(),e(521,"."),t()()()(),n(522,"tr",14)(523,"td",15)(524,"div",22)(525,"span",23),e(526," (p-footer-action-listbox)"),r(527,"br"),t()()(),n(528,"td",18)(529,"code",24),e(530,"EventEmitter"),t()(),n(531,"td",20),e(532,"-"),t(),n(533,"td",21)(534,"em")(535,"strong"),e(536,"(opcional)"),t()(),n(537,"p"),e(538,"Evento disparado ao clicar no bot\xE3o de a\xE7\xE3o exibido no rodap\xE9 do "),n(539,"code"),e(540,"listbox"),t(),e(541,`.
O texto exibido pode ser configurado por meio do literal `),n(542,"code"),e(543,"footerActionListbox"),t(),e(544,"."),t()()(),n(545,"tr",14)(546,"td",15)(547,"div",16)(548,"span",17),e(549," p-icon"),r(550,"br"),t()()(),n(551,"td",18)(552,"code",19),e(553,"string "),t(),n(554,"code",30),e(555," TemplateRef<void>"),t()(),n(556,"td",20),e(557,"-"),t(),n(558,"td",21)(559,"em")(560,"strong"),e(561,"(opcional)"),t()(),n(562,"p"),e(563,"Permite customizar o \xEDcone de busca que acompanha o campo."),t(),n(564,"p"),e(565,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(566,"a",31),e(567,"Biblioteca de \xEDcones PO UI"),t(),e(568,", conforme exemplo:"),t(),n(569,"pre")(570,"code"),e(571,`<po-search p-icon="an an-user"></po-search>
`),t()(),n(572,"p"),e(573,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),n(574,"em"),e(575,"Font Awesome"),t(),e(576,`, desde que a biblioteca
esteja carregada no projeto:`),t(),n(577,"pre")(578,"code"),e(579,`<po-search p-icon="fa fa-podcast"></po-search>
`),t()(),n(580,"p"),e(581,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(582,"code"),e(583,"TemplateRef"),t(),e(584,", conforme exemplo abaixo:"),t(),n(585,"pre")(586,"code"),e(587,`<po-search [p-icon]="template"></po-search>

<ng-template #template>
  <i class="fa fa-podcast" style="font-size: inherit;"></i>
</ng-template>
`),t()()()(),n(588,"tr",14)(589,"td",15)(590,"div",16)(591,"span",17),e(592," p-items"),r(593,"br"),t()()(),n(594,"td",18)(595,"code",26),e(596,"Array<any>"),t()(),n(597,"td",20),e(598,"-"),t(),n(599,"td",21)(600,"em")(601,"strong"),e(602,"(opcional)"),t()(),n(603,"p"),e(604,"Lista de itens que ser\xE3o utilizados para pesquisa."),t(),n(605,"blockquote")(606,"p"),e(607,"Incompat\xEDvel com a propriedade "),n(608,"code"),e(609,"p-search-type"),t(),e(610," do tipo "),n(611,"code"),e(612,"locate"),t(),e(613,"."),t()()()(),n(614,"tr",14)(615,"td",15)(616,"div",16)(617,"span",17),e(618," p-keys-label"),r(619,"br"),t()()(),n(620,"td",18)(621,"code",32),e(622,"Array<string>"),t()(),n(623,"td",20),e(624,"-"),t(),n(625,"td",21)(626,"em")(627,"strong"),e(628,"(opcional)"),t()(),n(629,"p"),e(630,"Define os nomes das propriedades do objeto que ser\xE3o exibidos como r\xF3tulos (labels) no "),n(631,"code"),e(632,"listbox"),t(),e(633,` quando a propriedade
`),n(634,"code"),e(635,"p-show-listbox"),t(),e(636," estiver habilitada."),t(),n(637,"p"),e(638,"Deve ser informado um array de strings contendo at\xE9 "),n(639,"strong"),e(640,"3 propriedades"),t(),e(641,"."),t(),n(642,"p"),e(643,"Exemplo de uso:"),t(),n(644,"pre")(645,"code",33),e(646,`keysLabel: Array<string> = ['nome', 'email', 'country'];
`),t()()()(),n(647,"tr",14)(648,"td",15)(649,"div",22)(650,"span",23),e(651," (p-listbox-onclick)"),r(652,"br"),t()()(),n(653,"td",18)(654,"code",24),e(655,"EventEmitter"),t()(),n(656,"td",20),e(657,"-"),t(),n(658,"td",21)(659,"em")(660,"strong"),e(661,"(opcional)"),t()(),n(662,"p"),e(663,"Pode ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver click no listbox."),t(),n(664,"blockquote")(665,"p"),e(666,"Incompat\xEDvel com a propriedade "),n(667,"code"),e(668,"p-search-type"),t(),e(669," do tipo "),n(670,"code"),e(671,"locate"),t(),e(672,"."),t()()()(),n(673,"tr",14)(674,"td",15)(675,"div",16)(676,"span",17),e(677," p-literals"),r(678,"br"),t()()(),n(679,"td",18)(680,"code",34),e(681,"PoSearchLiterals"),t()(),n(682,"td",20),e(683,"-"),t(),n(684,"td",21)(685,"em")(686,"strong"),e(687,"(opcional)"),t()(),n(688,"p"),e(689,"Objeto com as literais usadas no "),n(690,"code"),e(691,"po-search"),t(),e(692,", permitindo personalizar os textos exibidos no componente."),t(),n(693,"p"),e(694,"Para utilizar basta passar a literal que deseja customizar:"),t(),n(695,"pre")(696,"code"),e(697,`const customLiterals: PoSearchLiterals = {
  search: 'Pesquisar',
  clean: 'Limpar',
};
`),t()(),n(698,"p"),e(699,"E para carregar a literal customizada, basta apenas passar o objeto para o componente."),t(),n(700,"pre")(701,"code"),e(702,`<po-search
  [p-literals]="customLiterals">
</po-search>
`),t()(),n(703,"blockquote")(704,"p"),e(705,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do "),n(706,"a",35)(707,"code"),e(708,"PoI18nService"),t()(),e(709,` ou
do browser.`),t()()()(),n(710,"tr",14)(711,"td",15)(712,"div",22)(713,"span",23),e(714," (p-locate-next)"),r(715,"br"),t()()(),n(716,"td",18)(717,"code",24),e(718,"EventEmitter"),t()(),n(719,"td",20),e(720,"-"),t(),n(721,"td",21)(722,"em")(723,"strong"),e(724,"(opcional)"),t()(),n(725,"p"),e(726,'Evento disparado ao clicar no controle "Pr\xF3ximo resultado".'),t(),n(727,"blockquote")(728,"p"),e(729,"Compat\xEDvel com a propriedade "),n(730,"code"),e(731,"p-search-type"),t(),e(732," do tipo "),n(733,"code"),e(734,"locate"),t(),e(735,"."),t()()()(),n(736,"tr",14)(737,"td",15)(738,"div",22)(739,"span",23),e(740," (p-locate-previous)"),r(741,"br"),t()()(),n(742,"td",18)(743,"code",24),e(744,"EventEmitter"),t()(),n(745,"td",20),e(746,"-"),t(),n(747,"td",21)(748,"em")(749,"strong"),e(750,"(opcional)"),t()(),n(751,"p"),e(752,'Evento disparado ao clicar no controle "Resultado anterior".'),t(),n(753,"blockquote")(754,"p"),e(755,"Compat\xEDvel com a propriedade "),n(756,"code"),e(757,"p-search-type"),t(),e(758," do tipo "),n(759,"code"),e(760,"locate"),t(),e(761,"."),t()()()(),n(762,"tr",14)(763,"td",15)(764,"div",16)(765,"span",17),e(766," p-locate-summary"),r(767,"br"),t()()(),n(768,"td",18)(769,"code",36),e(770,"PoSearchLocateSummary"),t()(),n(771,"td",20),e(772,"-"),t(),n(773,"td",21)(774,"em")(775,"strong"),e(776,"(opcional)"),t()(),n(777,"p"),e(778,"Define os valores do contador exibido ao usar a propriedade "),n(779,"code"),e(780,"p-search-type"),t(),e(781," do tipo "),n(782,"code"),e(783,"locate"),t(),e(784,`, indicando a posi\xE7\xE3o
atual e o total de ocorr\xEAncias encontradas.
Exemplo de uso:`),t(),n(785,"pre")(786,"code",33),e(787,`locateSummary: PoSearchLocateSummary = { currentIndex: 0, total: 5 };
`),t()(),n(788,"blockquote")(789,"p"),e(790,"Compat\xEDvel com a propriedade "),n(791,"code"),e(792,"p-search-type"),t(),e(793," do tipo "),n(794,"code"),e(795,"locate"),t(),e(796,"."),t()()()(),n(797,"tr",14)(798,"td",15)(799,"div",16)(800,"span",17),e(801," p-show-listbox"),r(802,"br"),t()()(),n(803,"td",18)(804,"code",25),e(805,"boolean"),t()(),n(806,"td",20)(807,"p")(808,"code"),e(809,"false"),t()()(),n(810,"td",21)(811,"em")(812,"strong"),e(813,"(opcional)"),t()(),n(814,"p"),e(815,"Exibe uma lista (auto-complete) com as op\xE7\xF5es definidas em "),n(816,"code"),e(817,"p-filter-keys"),t(),e(818," ou "),n(819,"code"),e(820,"p-filter-select"),t(),e(821,` enquanto realiza
uma busca, respeitando o `),n(822,"code"),e(823,"p-filter-type"),t(),e(824," como modo de pesquisa."),t(),n(825,"blockquote")(826,"p"),e(827,"Incompat\xEDvel com a propriedade "),n(828,"code"),e(829,"p-search-type"),t(),e(830," do tipo "),n(831,"code"),e(832,"locate"),t(),e(833,"."),t()()()(),n(834,"tr",14)(835,"td",15)(836,"div",16)(837,"span",17),e(838," p-size"),r(839,"br"),t()()(),n(840,"td",18)(841,"code",19),e(842,"string"),t()(),n(843,"td",20)(844,"p")(845,"code"),e(846,"medium"),t()()(),n(847,"td",21)(848,"em")(849,"strong"),e(850,"(opcional)"),t()(),n(851,"p"),e(852,"Define o tamanho do componente:"),t(),n(853,"ul")(854,"li")(855,"code"),e(856,"small"),t(),e(857,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(858,"li")(859,"code"),e(860,"medium"),t(),e(861,": altura do input como 44px."),t()(),n(862,"blockquote")(863,"p"),e(864,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(865,"code"),e(866,"medium"),t(),e(867,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(868,"a",37),e(869,"po-theme"),t(),e(870,"."),t()()()(),n(871,"tr",14)(872,"td",15)(873,"div",16)(874,"span",17),e(875," p-search-type"),r(876,"br"),t()()(),n(877,"td",18)(878,"code",38),e(879,"searchMode"),t()(),n(880,"td",20)(881,"p")(882,"code"),e(883,"action"),t()()(),n(884,"td",21)(885,"em")(886,"strong"),e(887,"(opcional)"),t()(),n(888,"p"),e(889,"Determina a forma de realizar a pesquisa no componente. Valores aceitos:"),t(),n(890,"ul")(891,"li")(892,"code"),e(893,"action"),t(),e(894,": Realiza a busca a cada caractere digitado."),t(),n(895,"li")(896,"code"),e(897,"trigger"),t(),e(898,": Realiza a busca ao pressionar "),n(899,"code"),e(900,"enter"),t(),e(901," ou clicar no \xEDcone de busca."),t(),n(902,"li")(903,"code"),e(904,"locate"),t(),e(905,": Modo manual. Exibe bot\xF5es e contador, mas n\xE3o executa buscas \u2014 controle \xE9 do desenvolvedor."),t(),n(906,"li")(907,"code"),e(908,"execute"),t(),e(909,": Executa uma a\xE7\xE3o ou realiza um redirecionamento ao selecionar um item no "),n(910,"code"),e(911,"listbox"),t(),e(912,". Para este tipo, \xE9 necess\xE1rio informar as propriedades "),n(913,"code"),e(914,"action"),t(),e(915," ou "),n(916,"code"),e(917,"url"),t(),e(918," nos itens definidos em "),n(919,"code"),e(920,"p-items"),t(),e(921,"."),t()()()()(),n(922,"h3"),e(923,"Interfaces"),t(),n(924,"h4",39)(925,"code",5),e(926,"PoSearchFilterSelect"),t()(),n(927,"div",2)(928,"p"),e(929,"Interface que define as op\xE7\xF5es que ser\xE3o exibidas no dropdown do "),n(930,"code"),e(931,"po-search"),t(),e(932,", ao usar a propriedade "),n(933,"code"),e(934,"p-filter-select"),t(),e(935,"."),t()(),n(936,"h4",10),e(937,"Propriedades"),t(),n(938,"table",11)(939,"tr",12)(940,"th",13),e(941,"Nome"),t(),n(942,"th",13),e(943,"Tipo"),t(),n(944,"th",13),e(945,"Descri\xE7\xE3o"),t()(),n(946,"tr",14)(947,"td",15)(948,"div",16)(949,"span",17),e(950," label"),r(951,"br"),t()()(),n(952,"td",18)(953,"code",19),e(954,"string"),t()(),n(955,"td",21)(956,"p"),e(957,"Descri\xE7\xE3o exibida nas op\xE7\xF5es da lista."),t()()(),n(958,"tr",14)(959,"td",15)(960,"div",16)(961,"span",17),e(962," value"),r(963,"br"),t()()(),n(964,"td",18)(965,"code",32),e(966,"Array<string> "),t(),n(967,"code",19),e(968," string"),t()(),n(969,"td",21)(970,"p"),e(971,"Valores que ser\xE3o atribu\xEDdos ao "),n(972,"code"),e(973,"p-filter-keys"),t()()()()(),n(974,"h4",39)(975,"code",5),e(976,"PoSearchLocateSummary"),t()(),n(977,"div",2)(978,"p"),e(979,"Interface que define o resumo de localiza\xE7\xE3o do filtro "),n(980,"code"),e(981,"p-filter-locate"),t(),e(982,"."),t()(),n(983,"h4",10),e(984,"Propriedades"),t(),n(985,"table",11)(986,"tr",12)(987,"th",13),e(988,"Nome"),t(),n(989,"th",13),e(990,"Tipo"),t(),n(991,"th",13),e(992,"Descri\xE7\xE3o"),t()(),n(993,"tr",14)(994,"td",15)(995,"div",16)(996,"span",17),e(997," currentIndex"),r(998,"br"),t()()(),n(999,"td",18)(1e3,"code",40),e(1001,"number"),t()(),n(1002,"td",21)(1003,"p"),e(1004,"\xCDndice atual da ocorr\xEAncia localizada."),t()()(),n(1005,"tr",14)(1006,"td",15)(1007,"div",16)(1008,"span",17),e(1009," total"),r(1010,"br"),t()()(),n(1011,"td",18)(1012,"code",40),e(1013,"number"),t()(),n(1014,"td",21)(1015,"p"),e(1016,"Total de ocorr\xEAncias encontradas."),t()()()(),n(1017,"h4",39)(1018,"code",5),e(1019,"PoSearchOption"),t()(),n(1020,"div",2)(1021,"p"),e(1022,"Interface que define as op\xE7\xF5es que ser\xE3o exibidas na lista ao procurar do "),n(1023,"code"),e(1024,"po-search"),t(),e(1025,"."),t()(),n(1026,"h4",10),e(1027,"Propriedades"),t(),n(1028,"table",11)(1029,"tr",12)(1030,"th",13),e(1031,"Nome"),t(),n(1032,"th",13),e(1033,"Tipo"),t(),n(1034,"th",13),e(1035,"Descri\xE7\xE3o"),t()(),n(1036,"tr",14)(1037,"td",15)(1038,"div",16)(1039,"span",17),e(1040," label"),r(1041,"br"),t()()(),n(1042,"td",18)(1043,"code",19),e(1044,"string"),t()(),n(1045,"td",21)(1046,"em")(1047,"strong"),e(1048,"(opcional)"),t()(),n(1049,"p"),e(1050,"Descri\xE7\xE3o exibida nas op\xE7\xF5es da lista."),t(),n(1051,"blockquote")(1052,"p"),e(1053,"Caso n\xE3o seja definida ser\xE1 assumido o valor definido na propriedade "),n(1054,"code"),e(1055,"value"),t(),e(1056,"."),t()()()(),n(1057,"tr",14)(1058,"td",15)(1059,"div",16)(1060,"span",17),e(1061," value"),r(1062,"br"),t()()(),n(1063,"td",18)(1064,"code",19),e(1065,"string "),t(),n(1066,"code",40),e(1067," number"),t()(),n(1068,"td",21)(1069,"p"),e(1070,"Valor do objeto que ser\xE1 atribu\xEDdo ao "),n(1071,"em"),e(1072,"model"),t(),e(1073,"."),t()()()(),n(1074,"h4",39)(1075,"code",5),e(1076,"PoSearchLiterals"),t()(),n(1077,"div",2)(1078,"p"),e(1079,"Interface para defini\xE7\xE3o das literais usadas no "),n(1080,"code"),e(1081,"po-search"),t(),e(1082,"."),t()(),n(1083,"h4",10),e(1084,"Propriedades"),t(),n(1085,"table",11)(1086,"tr",12)(1087,"th",13),e(1088,"Nome"),t(),n(1089,"th",13),e(1090,"Tipo"),t(),n(1091,"th",13),e(1092,"Descri\xE7\xE3o"),t()(),n(1093,"tr",14)(1094,"td",15)(1095,"div",16)(1096,"span",17),e(1097," all"),r(1098,"br"),t()()(),n(1099,"td",18)(1100,"code",19),e(1101,"string"),t()(),n(1102,"td",21)(1103,"em")(1104,"strong"),e(1105,"(opcional)"),t()(),n(1106,"p"),e(1107,"Texto exibido no dropdown de tipo de filtro, representando todos os tipos dispon\xEDveis."),t(),n(1108,"blockquote")(1109,"p"),e(1110,"Exibido apenas quando a propriedade "),n(1111,"code"),e(1112,"p-filter-select"),t(),e(1113," estiver habilitada."),t()()()(),n(1114,"tr",14)(1115,"td",15)(1116,"div",16)(1117,"span",17),e(1118," clean"),r(1119,"br"),t()()(),n(1120,"td",18)(1121,"code",19),e(1122,"string"),t()(),n(1123,"td",21)(1124,"em")(1125,"strong"),e(1126,"(opcional)"),t()(),n(1127,"p"),e(1128,"Texto alternativo (aria-label) para o bot\xE3o de limpar o campo de busca, usado por leitores de tela."),t()()(),n(1129,"tr",14)(1130,"td",15)(1131,"div",16)(1132,"span",17),e(1133," footerActionListbox"),r(1134,"br"),t()()(),n(1135,"td",18)(1136,"code",19),e(1137,"string"),t()(),n(1138,"td",21)(1139,"em")(1140,"strong"),e(1141,"(opcional)"),t()(),n(1142,"p"),e(1143,"Texto exibido na a\xE7\xE3o do rodap\xE9 da lista de resultados."),t()()(),n(1144,"tr",14)(1145,"td",15)(1146,"div",16)(1147,"span",17),e(1148," next"),r(1149,"br"),t()()(),n(1150,"td",18)(1151,"code",19),e(1152,"string"),t()(),n(1153,"td",21)(1154,"em")(1155,"strong"),e(1156,"(opcional)"),t()(),n(1157,"p"),e(1158,"Texto alternativo (aria-label) para navega\xE7\xE3o at\xE9 o pr\xF3ximo resultado da busca."),t(),n(1159,"blockquote")(1160,"p"),e(1161,"Exibido apenas quando a propriedade "),n(1162,"code"),e(1163,"p-filter-locate"),t(),e(1164," estiver habilitada."),t()()()(),n(1165,"tr",14)(1166,"td",15)(1167,"div",16)(1168,"span",17),e(1169," of"),r(1170,"br"),t()()(),n(1171,"td",18)(1172,"code",19),e(1173,"string"),t()(),n(1174,"td",21)(1175,"em")(1176,"strong"),e(1177,"(opcional)"),t()(),n(1178,"p"),e(1179,'Texto alternativo (aria-label) para a palavra "de" no contador de resultados (ex: "Resultado 1 de 4").'),t(),n(1180,"blockquote")(1181,"p"),e(1182,"Exibido apenas quando a propriedade "),n(1183,"code"),e(1184,"p-filter-locate"),t(),e(1185," estiver habilitada."),t()()()(),n(1186,"tr",14)(1187,"td",15)(1188,"div",16)(1189,"span",17),e(1190," placeholderListbox"),r(1191,"br"),t()()(),n(1192,"td",18)(1193,"code",19),e(1194,"string"),t()(),n(1195,"td",21)(1196,"em")(1197,"strong"),e(1198,"(opcional)"),t()(),n(1199,"p"),e(1200,"Texto exibido como "),n(1201,"em"),e(1202,"placeholder"),t(),e(1203," na lista de resultados."),t()()(),n(1204,"tr",14)(1205,"td",15)(1206,"div",16)(1207,"span",17),e(1208," previous"),r(1209,"br"),t()()(),n(1210,"td",18)(1211,"code",19),e(1212,"string"),t()(),n(1213,"td",21)(1214,"em")(1215,"strong"),e(1216,"(opcional)"),t()(),n(1217,"p"),e(1218,"Texto alternativo (aria-label) para navega\xE7\xE3o at\xE9 o resultado anterior da busca."),t(),n(1219,"blockquote")(1220,"p"),e(1221,"Exibido apenas quando a propriedade "),n(1222,"code"),e(1223,"p-filter-locate"),t(),e(1224," estiver habilitada."),t()()()(),n(1225,"tr",14)(1226,"td",15)(1227,"div",16)(1228,"span",17),e(1229," result"),r(1230,"br"),t()()(),n(1231,"td",18)(1232,"code",19),e(1233,"string"),t()(),n(1234,"td",21)(1235,"em")(1236,"strong"),e(1237,"(opcional)"),t()(),n(1238,"p"),e(1239,'Texto alternativo (aria-label) para a label "Resultado" que acompanha o contador.'),t(),n(1240,"blockquote")(1241,"p"),e(1242,"Exibido apenas quando a propriedade "),n(1243,"code"),e(1244,"p-filter-locate"),t(),e(1245," estiver habilitada."),t()()()(),n(1246,"tr",14)(1247,"td",15)(1248,"div",16)(1249,"span",17),e(1250," search"),r(1251,"br"),t()()(),n(1252,"td",18)(1253,"code",19),e(1254,"string"),t()(),n(1255,"td",21)(1256,"em")(1257,"strong"),e(1258,"(opcional)"),t()(),n(1259,"p"),e(1260,"Texto exibido como "),n(1261,"em"),e(1262,"placeholder"),t(),e(1263," no campo de busca."),t()()()(),n(1264,"h3"),e(1265,"Enums"),t(),n(1266,"h4",4)(1267,"code",5),e(1268,"PoSearchFilterMode"),t()(),n(1269,"div",2)(1270,"p"),e(1271,"Define o tipo de busca usado no "),n(1272,"code"),e(1273,"po-search"),t(),e(1274,"."),t()(),n(1275,"h4",10),e(1276,"Propriedades"),t(),n(1277,"table",11)(1278,"tr",12)(1279,"th",13),e(1280,"Nome"),t(),n(1281,"th",13),e(1282,"Descri\xE7\xE3o"),t()(),n(1283,"tr",14)(1284,"td",15)(1285,"div",16)(1286,"span",17),e(1287," startsWith"),r(1288,"br"),t()()(),n(1289,"td",21)(1290,"p"),e(1291,"Verifica se o texto "),n(1292,"em"),e(1293,"inicia"),t(),e(1294," com o valor pesquisado."),t()()(),n(1295,"tr",14)(1296,"td",15)(1297,"div",16)(1298,"span",17),e(1299," contains"),r(1300,"br"),t()()(),n(1301,"td",21)(1302,"p"),e(1303,"Verifica se o texto "),n(1304,"em"),e(1305,"cont\xE9m"),t(),e(1306," o valor pesquisado."),t()()(),n(1307,"tr",14)(1308,"td",15)(1309,"div",16)(1310,"span",17),e(1311," endsWith"),r(1312,"br"),t()()(),n(1313,"td",21)(1314,"p"),e(1315,"Verifica se o texto "),n(1316,"em"),e(1317,"finaliza"),t(),e(1318," com o valor pesquisado."),t()()()()())},dependencies:[x],encapsulation:2})}return a})();var Qe=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=7;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,o){this.route=l,this.router=o}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let o=l.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(o){return new(o||a)(ie(be),ie(Ee))};static \u0275cmp=h({type:a,selectors:[["ng-component"]],standalone:!1,decls:12,vars:4,consts:[["p-title","Search",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,i){o&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),c("p-click",function(){return i.changeTab("doc")}),r(3,"sample-po-search-doc"),t(),n(4,"po-tab",3),c("p-click",function(){return i.changeTab("web")}),r(5,"sample-po-search-basic-view")(6,"sample-po-search-labs-view")(7,"sample-po-search-find-people-view")(8,"sample-po-search-listbox-view")(9,"sample-po-search-filter-select-view")(10,"sample-po-search-execute-view")(11,"sample-po-search-fields-locate-view"),t()()()),o&2&&(m("p-actions",i.actions),s(2),m("p-active",i.activeTab==="doc"),s(2),m("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[Fe,g,v,De,Ve,Oe,Ne,je,Re,Ke,Je],encapsulation:2})}return a})();var Dt=[{path:"",component:Qe}],Ge=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=U({type:a});static \u0275inj=G({imports:[oe.forChild(Dt),oe]})}return a})();var Nn=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=U({type:a});static \u0275inj=G({imports:[ke,Ge]})}return a})();export{Nn as DocPoSearchModule};
