import{o as C,p as pe}from"./chunk-PJPIAKNY.js";import{Aa as oe,Ab as y,F as ee,Ga as re,I as te,K as ie,Ka as le,Ra as se,T as W,Wa as me,a as $,ha as q,ja as ne,nb as de,qb as D,ta as ae,zb as x}from"./chunk-UF77UBXA.js";import{Ac as O,Ba as w,Bc as j,Fa as i,Ga as t,Ha as o,L as Y,La as B,M as F,Ma as E,Oc as Z,Qc as G,Sc as U,T as p,U as c,Ua as N,Va as z,Wa as J,Xa as T,Ya as e,_a as L,ab as b,bb as h,cb as S,db as K,fb as _,ha as m,ia as P,oa as f,pa as k,sc as X,vb as M,xc as H,ya as g,yc as V,zc as I}from"./chunk-WFKG4FNY.js";var ce=(()=>{class s{static \u0275fac=function(r){return new(r||s)};static \u0275cmp=f({type:s,selectors:[["sample-po-page-list-basic"]],standalone:!1,decls:1,vars:0,consts:[["p-title","PO Page List"]],template:function(r,n){r&1&&o(0,"po-page-list",0)},dependencies:[D],encapsulation:2})}return s})();var Ce=s=>({"docs-sample-code-tabs":s}),ge=(()=>{class s{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=f({type:s,selectors:[["sample-po-page-list-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(o(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Page List Basic"),t(),i(4,"a",2),E("click",function(){return n.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-list-basic/sample-po-page-list-basic.component.html"),t(),i(13,"pre",7),e(14,`<po-page-list p-title="PO Page List"> </po-page-list>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-list-basic/sample-po-page-list-basic.component.ts"),t(),i(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-page-list-basic',
  templateUrl: './sample-po-page-list-basic.component.html',
  standalone: false
})
export class SamplePoPageListBasicComponent {}
`),t()()()()(),i(21,"div",10),o(22,"sample-po-page-list-basic"),t(),o(23,"hr")),r&2&&(m(5),w("po-icon "+n.sampleCodeButtonIcon),m(),L(" ",n.sampleCodeButtonLabel,""),m(),g("ngClass",_(4,Ce,n.hideSampleCodeTabs)))},dependencies:[M,C,x,y,ce],encapsulation:2})}return s})();var be=(()=>{class s{poNotification;action;actions;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;disclaimerGroupHideRemoveAll;disclaimerGroupTitle;disclaimerHideClose;disclaimerLabel;disclaimerProperty;disclaimerValue;filterModel;literals;title;subtitle;disclaimerGroup;actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];filter={action:this.showAction.bind(this),advancedAction:this.showAdvanceAction.bind(this)};iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{value:"fa fa-podcast",label:"fa fa-podcast"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];constructor(l){this.poNotification=l}ngOnInit(){this.restore()}addAction(l){let r=Object.assign({},l);r.action=r.action?this.showAction.bind(this,r.action):void 0,this.actions=[...this.actions,r],this.restoreActionForm()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0}}addBreadcrumbParam(){let l={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,l):this.breadcrumb.params=l,this.breadcrumbParams={}}addDisclaimer(){this.disclaimerGroup.disclaimers=[...this.disclaimerGroup.disclaimers,{label:this.disclaimerLabel,property:this.disclaimerProperty,hideClose:this.disclaimerHideClose,value:this.disclaimerValue}],this.disclaimerGroup=Object.assign({},this.disclaimerGroup),this.restoreDisclaimerModel()}addDisclaimerGroupParam(l,r){this.disclaimerGroup=Object.assign({},this.disclaimerGroup,{title:l,hideRemoveAll:r})}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}onChangeDisclaimerGroupHideRemoveAll(l){this.addDisclaimerGroupParam(this.disclaimerGroupTitle,l)}restore(){this.actions=[],this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize="medium",this.customLiterals=void 0,this.disclaimerGroup={title:this.disclaimerGroupTitle,disclaimers:[],hideRemoveAll:this.disclaimerGroupHideRemoveAll},this.disclaimerGroupHideRemoveAll=!1,this.disclaimerGroupTitle=void 0,this.filterModel=void 0,this.filter.placeholder=void 0,this.filter.width=void 0,this.literals="",this.title="PO Page List",this.subtitle="",this.restoreDisclaimerModel(),this.restoreActionForm()}restoreActionForm(){this.action={label:void 0,visible:null}}restoreDisclaimerModel(){this.disclaimerHideClose=void 0,this.disclaimerLabel=void 0,this.disclaimerProperty=void 0,this.disclaimerValue=void 0}showAction(l){this.poNotification.success(`Action clicked: ${l}`)}showAdvanceAction(l){this.poNotification.success(`Advance Action clicked: ${l}`)}static \u0275fac=function(r){return new(r||s)(P(W))};static \u0275cmp=f({type:s,selectors:[["sample-po-page-list-labs"]],standalone:!1,decls:60,vars:40,consts:[["formAction","ngForm"],["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],["formDisclaimers","ngForm"],["form","ngForm"],[3,"p-actions","p-breadcrumb","p-components-size","p-disclaimer-group","p-filter","p-literals","p-title","p-subtitle"],["p-label","Model",3,"p-value"],[1,"po-row"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-6",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","action","p-columns","4","p-indeterminate","","p-label","Action properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Add Action",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","disclaimerGroupTitle","p-clean","","p-label","Disclaimer group title",1,"po-md-6",3,"ngModelChange","p-change-model","ngModel"],["name","disclaimerGroupHideRemoveAll","p-label","Disclaimer group hide remove all","ngDefaultControl","",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","disclaimerLabel","p-clean","","p-label","Disclaimer label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerProperty","p-clean","","p-label","Disclaimer property",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerValue","p-clean","","p-label","Disclaimer value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerHideClose","p-label","Disclaimer hide close",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add disclaimer",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","title","p-label","Title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","filterPlaceholder","p-label","Filter placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","filterWidth","p-label","Filter width",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: {"otherActions": "Mais a\xE7\xF5es"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,n){if(r&1){let d=B();i(0,"po-page-list",6),o(1,"po-divider")(2,"po-info",7),t(),o(3,"po-divider"),i(4,"form",null,0)(6,"div",8)(7,"po-input",9),S("ngModelChange",function(a){return p(d),h(n.action.action,a)||(n.action.action=a),c(a)}),t(),i(8,"po-input",10),S("ngModelChange",function(a){return p(d),h(n.action.label,a)||(n.action.label=a),c(a)}),t(),i(9,"po-input",11),S("ngModelChange",function(a){return p(d),h(n.action.url,a)||(n.action.url=a),c(a)}),t(),i(10,"po-select",12),S("ngModelChange",function(a){return p(d),h(n.action.type,a)||(n.action.type=a),c(a)}),t(),i(11,"po-select",13),S("ngModelChange",function(a){return p(d),h(n.action.icon,a)||(n.action.icon=a),c(a)}),t(),i(12,"po-checkbox-group",14),S("ngModelChange",function(a){return p(d),h(n.action,a)||(n.action=a),c(a)}),t()(),i(13,"div",8)(14,"po-button",15),E("p-click",function(){return p(d),c(n.addAction(n.action))}),t()()(),o(15,"po-divider"),i(16,"form",null,1)(18,"div",8)(19,"po-input",16),S("ngModelChange",function(a){return p(d),h(n.breadcrumb.favorite,a)||(n.breadcrumb.favorite=a),c(a)}),t()()(),i(20,"form",null,2)(22,"div",8)(23,"po-input",17),S("ngModelChange",function(a){return p(d),h(n.breadcrumbItem.label,a)||(n.breadcrumbItem.label=a),c(a)}),t(),i(24,"po-input",18),S("ngModelChange",function(a){return p(d),h(n.breadcrumbItem.link,a)||(n.breadcrumbItem.link=a),c(a)}),t()(),i(25,"div",8)(26,"po-button",19),E("p-click",function(){return p(d),c(n.addBreadcrumbItem())}),t()()(),o(27,"po-divider"),i(28,"form",null,3)(30,"div",8)(31,"po-input",20),S("ngModelChange",function(a){return p(d),h(n.breadcrumbParams.property,a)||(n.breadcrumbParams.property=a),c(a)}),t(),i(32,"po-input",21),S("ngModelChange",function(a){return p(d),h(n.breadcrumbParams.value,a)||(n.breadcrumbParams.value=a),c(a)}),t()(),i(33,"div",8)(34,"po-button",22),E("p-click",function(){return p(d),c(n.addBreadcrumbParam())}),t()()(),o(35,"po-divider"),i(36,"div",8)(37,"po-input",23),S("ngModelChange",function(a){return p(d),h(n.disclaimerGroupTitle,a)||(n.disclaimerGroupTitle=a),c(a)}),E("p-change-model",function(){return p(d),c(n.addDisclaimerGroupParam(n.disclaimerGroupTitle,n.disclaimerGroupHideRemoveAll))}),t(),i(38,"po-switch",24),S("ngModelChange",function(a){return p(d),h(n.disclaimerGroupHideRemoveAll,a)||(n.disclaimerGroupHideRemoveAll=a),c(a)}),E("p-change",function(a){return p(d),c(n.onChangeDisclaimerGroupHideRemoveAll(a))}),t()(),i(39,"form",null,4)(41,"div",8)(42,"po-input",25),S("ngModelChange",function(a){return p(d),h(n.disclaimerLabel,a)||(n.disclaimerLabel=a),c(a)}),t(),i(43,"po-input",26),S("ngModelChange",function(a){return p(d),h(n.disclaimerProperty,a)||(n.disclaimerProperty=a),c(a)}),t()(),i(44,"div",8)(45,"po-input",27),S("ngModelChange",function(a){return p(d),h(n.disclaimerValue,a)||(n.disclaimerValue=a),c(a)}),t(),i(46,"po-switch",28),S("ngModelChange",function(a){return p(d),h(n.disclaimerHideClose,a)||(n.disclaimerHideClose=a),c(a)}),t()(),i(47,"div",8)(48,"po-button",29),E("p-click",function(){return p(d),c(n.addDisclaimer())}),t()()(),o(49,"po-divider"),i(50,"form",null,5)(52,"po-input",30),S("ngModelChange",function(a){return p(d),h(n.title,a)||(n.title=a),c(a)}),t(),i(53,"po-input",31),S("ngModelChange",function(a){return p(d),h(n.subtitle,a)||(n.subtitle=a),c(a)}),t(),i(54,"po-input",32),S("ngModelChange",function(a){return p(d),h(n.filter.placeholder,a)||(n.filter.placeholder=a),c(a)}),t(),i(55,"po-input",33),S("ngModelChange",function(a){return p(d),h(n.filter.width,a)||(n.filter.width=a),c(a)}),t(),i(56,"po-input",34),S("ngModelChange",function(a){return p(d),h(n.literals,a)||(n.literals=a),c(a)}),E("p-change",function(){return p(d),c(n.changeLiterals())}),t(),i(57,"po-radio-group",35),S("ngModelChange",function(a){return p(d),h(n.componentsSize,a)||(n.componentsSize=a),c(a)}),t(),i(58,"div",8)(59,"po-button",36),E("p-click",function(){return p(d),c(n.restore())}),t()()()}if(r&2){let d=T(5),u=T(21),a=T(29),xe=T(40);g("p-actions",n.actions)("p-breadcrumb",n.breadcrumb)("p-components-size",n.componentsSize)("p-disclaimer-group",n.disclaimerGroup)("p-filter",n.filter)("p-literals",n.customLiterals)("p-title",n.title)("p-subtitle",n.subtitle),m(2),g("p-value",n.filterModel),m(5),b("ngModel",n.action.action),m(),b("ngModel",n.action.label),m(),b("ngModel",n.action.url),m(),b("ngModel",n.action.type),g("p-options",n.typeOptions),m(),b("ngModel",n.action.icon),g("p-options",n.iconOptions),m(),b("ngModel",n.action),g("p-options",n.actionOptions),m(2),g("p-disabled",d.form.invalid),m(5),b("ngModel",n.breadcrumb.favorite),m(4),b("ngModel",n.breadcrumbItem.label),m(),b("ngModel",n.breadcrumbItem.link),m(2),g("p-disabled",u.invalid),m(5),b("ngModel",n.breadcrumbParams.property),m(),b("ngModel",n.breadcrumbParams.value),m(2),g("p-disabled",a.invalid),m(3),b("ngModel",n.disclaimerGroupTitle),m(),b("ngModel",n.disclaimerGroupHideRemoveAll),m(4),b("ngModel",n.disclaimerLabel),m(),b("ngModel",n.disclaimerProperty),m(2),b("ngModel",n.disclaimerValue),m(),b("ngModel",n.disclaimerHideClose),m(2),g("p-disabled",xe.invalid),m(4),b("ngModel",n.title),m(),b("ngModel",n.subtitle),m(),b("ngModel",n.filter.placeholder),m(),b("ngModel",n.filter.width),m(),b("ngModel",n.literals),m(),b("ngModel",n.componentsSize),g("p-options",n.componentsSizeOptions)}},dependencies:[j,X,H,V,O,I,ee,$,q,ne,re,se,ae,me,D],encapsulation:2})}return s})();var Me=s=>({"docs-sample-code-tabs":s}),he=(()=>{class s{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=f({type:s,selectors:[["sample-po-page-list-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(o(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Page List Labs"),t(),i(4,"a",2),E("click",function(){return n.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-list-labs/sample-po-page-list-labs.component.html"),t(),i(13,"pre",7),e(14,`<po-page-list
  [p-actions]="actions"
  [p-breadcrumb]="breadcrumb"
  [p-components-size]="componentsSize"
  [p-disclaimer-group]="disclaimerGroup"
  [p-filter]="filter"
  [p-literals]="customLiterals"
  [p-title]="title"
  [p-subtitle]="subtitle"
>
  <po-divider />

  <po-info p-label="Model" [p-value]="filterModel"> </po-info>
</po-page-list>

<po-divider />

<form #formAction="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="actionAction" [(ngModel)]="action.action" p-clean p-label="Action"> </po-input>

    <po-input class="po-md-6" name="actionLabel" [(ngModel)]="action.label" p-label="Label" p-required> </po-input>

    <po-input class="po-md-6" name="actionURL" [(ngModel)]="action.url" p-label="URL"> </po-input>

    <po-select class="po-lg-3 po-md-6" name="type" [(ngModel)]="action.type" p-label="Type" [p-options]="typeOptions">
    </po-select>

    <po-select class="po-lg-3 po-md-6" name="icon" [(ngModel)]="action.icon" p-label="Icon" [p-options]="iconOptions">
    </po-select>

    <po-checkbox-group
      class="po-md-12"
      name="action"
      [(ngModel)]="action"
      p-columns="4"
      p-indeterminate
      p-label="Action properties"
      [p-options]="actionOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-button
      class="po-lg-3 po-md-4"
      p-label="Add Action"
      [p-disabled]="formAction.form.invalid"
      (p-click)="addAction(action)"
    >
    </po-button>
  </div>
</form>

<po-divider />

<form #formBreadcrumbFavorite="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-12 po-lg-6"
      name="breadcrumbFavorite"
      [(ngModel)]="breadcrumb.favorite"
      p-clean
      p-help="https://po-sample-api.onrender.com/v1/favorite"
      p-label="Breadcrumb favorite"
    >
    </po-input>
  </div>
</form>

<form #formBreadcrumbItems="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="breadcrumbItemLabel"
      [(ngModel)]="breadcrumbItem.label"
      p-clean
      p-label="Breadcrumb item label"
      p-required
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="breadcrumbItemLink"
      [(ngModel)]="breadcrumbItem.link"
      p-clean
      p-label="Breadcrumb item link"
      p-required
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-button
      class="po-lg-3 po-md-4"
      p-label="Add breadcrumb item"
      [p-disabled]="formBreadcrumbItems.invalid"
      (p-click)="addBreadcrumbItem()"
    >
    </po-button>
  </div>
</form>

<po-divider />

<form #formBreadcrumbParams="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="breadcrumbParamsProperty"
      [(ngModel)]="breadcrumbParams.property"
      p-clean
      p-label="Breadcrumb params property"
      p-required
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="breadcrumbParamsValue"
      [(ngModel)]="breadcrumbParams.value"
      p-clean
      p-label="Breadcrumb params value"
      p-required
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-button
      class="po-lg-3 po-md-4"
      p-label="Add breadcrumb params"
      [p-disabled]="formBreadcrumbParams.invalid"
      (p-click)="addBreadcrumbParam()"
    >
    </po-button>
  </div>
</form>

<po-divider />

<div class="po-row">
  <po-input
    class="po-md-6"
    name="disclaimerGroupTitle"
    [(ngModel)]="disclaimerGroupTitle"
    p-clean
    p-label="Disclaimer group title"
    (p-change-model)="addDisclaimerGroupParam(disclaimerGroupTitle, disclaimerGroupHideRemoveAll)"
  >
  </po-input>

  <po-switch
    class="po-md-6"
    name="disclaimerGroupHideRemoveAll"
    [(ngModel)]="disclaimerGroupHideRemoveAll"
    p-label="Disclaimer group hide remove all"
    (p-change)="onChangeDisclaimerGroupHideRemoveAll($event)"
    ngDefaultControl
  >
  </po-switch>
</div>

<form #formDisclaimers="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="disclaimerLabel" [(ngModel)]="disclaimerLabel" p-clean p-label="Disclaimer label">
    </po-input>

    <po-input
      class="po-md-6"
      name="disclaimerProperty"
      [(ngModel)]="disclaimerProperty"
      p-clean
      p-label="Disclaimer property"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-6"
      name="disclaimerValue"
      [(ngModel)]="disclaimerValue"
      p-clean
      p-label="Disclaimer value"
      p-required
    >
    </po-input>

    <po-switch
      class="po-md-6"
      name="disclaimerHideClose"
      [(ngModel)]="disclaimerHideClose"
      p-label="Disclaimer hide close"
    >
    </po-switch>
  </div>

  <div class="po-row">
    <po-button
      class="po-lg-3 po-md-4"
      p-label="Add disclaimer"
      [p-disabled]="formDisclaimers.invalid"
      (p-click)="addDisclaimer()"
    >
    </po-button>
  </div>
</form>

<po-divider />

<form #form="ngForm">
  <po-input class="po-md-6" name="title" [(ngModel)]="title" p-label="Title" p-required> </po-input>
  <po-input class="po-md-6" name="subtitle" [(ngModel)]="subtitle" p-label="Subtitle"> </po-input>

  <po-input class="po-md-6" name="filterPlaceholder" [(ngModel)]="filter.placeholder" p-label="Filter placeholder">
  </po-input>

  <po-input class="po-md-6" name="filterWidth" [(ngModel)]="filter.width" p-label="Filter width"> </po-input>

  <po-input
    class="po-md-12 po-lg-6"
    name="literals"
    [(ngModel)]="literals"
    p-help='Ex.: {"otherActions": "Mais a\xE7\xF5es"}'
    p-label="Literals"
    (p-change)="changeLiterals()"
  >
  </po-input>

  <po-radio-group
    class="po-md-12"
    name="size"
    [(ngModel)]="componentsSize"
    p-columns="4"
    p-label="Components size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="componentsSizeOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-list-labs/sample-po-page-list-labs.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import {
  PoBreadcrumb,
  PoBreadcrumbItem,
  PoCheckboxGroupOption,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

import { PoNotificationService, PoPageAction, PoPageFilter, PoPageListLiterals } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-list-labs',
  templateUrl: './sample-po-page-list-labs.component.html',
  standalone: false
})
export class SamplePoPageListLabsComponent implements OnInit {
  action: PoPageAction;
  actions: Array<PoPageAction>;
  breadcrumb: PoBreadcrumb;
  breadcrumbItem: PoBreadcrumbItem;
  breadcrumbParams: any;
  componentsSize: string;
  customLiterals: PoPageListLiterals;
  disclaimerGroupHideRemoveAll: boolean;
  disclaimerGroupTitle: string;
  disclaimerHideClose: boolean;
  disclaimerLabel: string;
  disclaimerProperty: string;
  disclaimerValue: string;
  filterModel: string;
  literals: string;
  title: string;
  subtitle: string;

  public disclaimerGroup;

  public readonly actionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Disabled', value: 'disabled' },
    { label: 'Separator', value: 'separator' },
    { label: 'Selected', value: 'selected' },
    { label: 'Visible', value: 'visible' }
  ];

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly filter: PoPageFilter = {
    action: this.showAction.bind(this),
    advancedAction: this.showAdvanceAction.bind(this)
  };

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-newspaper', label: 'an an-newspaper' },
    { value: 'an an-magnifying-glass', label: 'an an-magnifying-glass' },
    { value: 'an an-globe', label: 'an an-globe' },
    { value: 'fa fa-podcast', label: 'fa fa-podcast' }
  ];

  public readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Danger', value: 'danger' },
    { label: 'Default', value: 'default' }
  ];

  constructor(private poNotification: PoNotificationService) {}

  ngOnInit() {
    this.restore();
  }

  addAction(action: PoPageAction) {
    const newAction = Object.assign({}, action);
    newAction.action = newAction.action ? this.showAction.bind(this, newAction.action) : undefined;
    this.actions = [...this.actions, newAction];

    this.restoreActionForm();
  }

  addBreadcrumbItem() {
    this.breadcrumb.items = this.breadcrumb.items.concat([this.breadcrumbItem]);
    this.breadcrumbItem = { label: undefined, link: undefined };
  }

  addBreadcrumbParam() {
    const newParam = { [this.breadcrumbParams.property]: this.breadcrumbParams.value };

    if (this.breadcrumb.params) {
      this.breadcrumb.params = Object.assign(this.breadcrumb.params, newParam);
    } else {
      this.breadcrumb.params = newParam;
    }

    this.breadcrumbParams = {};
  }

  addDisclaimer() {
    this.disclaimerGroup.disclaimers = [
      ...this.disclaimerGroup.disclaimers,
      {
        label: this.disclaimerLabel,
        property: this.disclaimerProperty,
        hideClose: this.disclaimerHideClose,
        value: this.disclaimerValue
      }
    ];

    this.disclaimerGroup = Object.assign({}, this.disclaimerGroup);

    this.restoreDisclaimerModel();
  }

  addDisclaimerGroupParam(title, hideRemoveAll) {
    this.disclaimerGroup = Object.assign({}, this.disclaimerGroup, {
      title,
      hideRemoveAll
    });
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  onChangeDisclaimerGroupHideRemoveAll(hideRemoveAll: boolean) {
    this.addDisclaimerGroupParam(this.disclaimerGroupTitle, hideRemoveAll);
  }

  restore() {
    this.actions = [];
    this.breadcrumb = { items: [] };
    this.breadcrumbItem = { label: undefined, link: undefined };
    this.breadcrumbParams = {};
    this.componentsSize = 'medium';
    this.customLiterals = undefined;
    this.disclaimerGroup = {
      title: this.disclaimerGroupTitle,
      disclaimers: [],
      hideRemoveAll: this.disclaimerGroupHideRemoveAll
    };
    this.disclaimerGroupHideRemoveAll = false;
    this.disclaimerGroupTitle = undefined;
    this.filterModel = undefined;
    this.filter.placeholder = undefined;
    this.filter.width = undefined;
    this.literals = '';
    this.title = 'PO Page List';
    this.subtitle = '';

    this.restoreDisclaimerModel();
    this.restoreActionForm();
  }

  restoreActionForm() {
    this.action = {
      label: undefined,
      visible: null
    };
  }

  restoreDisclaimerModel() {
    this.disclaimerHideClose = undefined;
    this.disclaimerLabel = undefined;
    this.disclaimerProperty = undefined;
    this.disclaimerValue = undefined;
  }

  showAction(filter) {
    this.poNotification.success(\`Action clicked: \${filter}\`);
  }

  showAdvanceAction(filter) {
    this.poNotification.success(\`Advance Action clicked: \${filter}\`);
  }
}
`),t()()()()(),i(21,"div",10),o(22,"sample-po-page-list-labs"),t(),o(23,"hr")),r&2&&(m(5),w("po-icon "+n.sampleCodeButtonIcon),m(),L(" ",n.sampleCodeButtonLabel,""),m(),g("ngClass",_(4,Me,n.hideSampleCodeTabs)))},dependencies:[M,C,x,y,be],encapsulation:2})}return s})();var R=(()=>{class s{getColumns(){return[{property:"hireStatus",label:"Status",type:"subtitle",subtitles:[{value:"hired",color:"success",label:"Hired",content:"1"},{value:"progress",color:"warning",label:"Progress",content:"2"},{value:"canceled",color:"danger",label:"Canceled",content:"3"}]},{property:"idCard",label:"Identity card",type:"string"},{property:"name",label:"Name"},{property:"age",label:"Age"},{property:"city",label:"City"},{property:"jobDescription",label:"Job description",type:"string"}]}getHireStatus(){return[{value:"hired",label:"Hired"},{value:"progress",label:"Progress"},{value:"canceled",label:"Canceled"}]}getItems(){return[{hireStatus:"hired",name:"James Johnson",city:"Ontario",age:24,idCard:"AB34lxi90",jobDescription:"Systems Analyst"},{hireStatus:"progress",name:"Brian Brown",city:"Buffalo",age:23,idCard:"HG56lds54",jobDescription:"Trainee"},{hireStatus:"canceled",name:"Mary Davis",city:"Albany",age:31,idCard:"DF23cfr65",jobDescription:"Programmer"},{hireStatus:"hired",name:"Margaret Garcia",city:"New York",age:29,idCard:"GF45fgh34",jobDescription:"Web developer"},{hireStatus:"hired",name:"Emma Hall",city:"Ontario",age:34,idCard:"RF76jut21",jobDescription:"Recruiter"},{hireStatus:"progress",name:"Lucas Clark",city:"Utica",age:32,idCard:"HY21kgu65",jobDescription:"Consultant"},{hireStatus:"hired",name:"Ella Scott",city:"Ontario",age:24,idCard:"UL78flg68",jobDescription:"DBA"},{hireStatus:"progress",name:"Chloe Walker",city:"Albany",age:29,idCard:"JH12oli98",jobDescription:"Programmer"}]}getJobs(){return[{value:"Systems Analyst",label:"Systems Analyst"},{value:"Trainee",label:"Trainee"},{value:"Programmer",label:"Programmer"},{value:"Web Developer",label:"Web developer"},{value:"Recruiter",label:"Recruiter"},{value:"Consultant",label:"Consultant"},{value:"DBA",label:"DBA"}]}static \u0275fac=function(r){return new(r||s)};static \u0275prov=Y({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var Fe=["advancedFilterModal"],ke=["poPageList"],Se=(()=>{class s{sampleHiringProcessesService;poNotification;poDialog;router;advancedFilterModal;poPageList;disclaimerGroup;hiringProcesses;hiringProcessesColumns;hiringProcessesFiltered;jobDescription=[];jobDescriptionOptions;labelFilter="";status=[];statusOptions;actions=[{label:"Hire",action:this.hireCandidate.bind(this),disabled:this.disableHireButton.bind(this)},{label:"Legislation",url:"https://www.usa.gov/labor-laws"}];breadcrumb={items:[{label:"Home",action:this.beforeRedirect.bind(this)},{label:"Hiring processes"}]};advancedFilterPrimaryAction={action:()=>{this.poPageList.clearInputSearch(),this.advancedFilterModal.close();let l=[...this.jobDescription,...this.status];this.filterAction(l)},label:"Apply filters"};filterSettings={action:this.filterAction.bind(this),advancedAction:this.advancedFilterActionModal.bind(this),placeholder:"Search"};disclaimers=[];constructor(l,r,n,d){this.sampleHiringProcessesService=l,this.poNotification=r,this.poDialog=n,this.router=d}ngOnInit(){this.disclaimerGroup={title:"Filters",disclaimers:[],change:this.onChangeDisclaimer.bind(this),remove:this.onClearDisclaimer.bind(this)},this.hiringProcesses=this.sampleHiringProcessesService.getItems(),this.hiringProcessesColumns=this.sampleHiringProcessesService.getColumns(),this.jobDescriptionOptions=this.sampleHiringProcessesService.getJobs(),this.statusOptions=this.sampleHiringProcessesService.getHireStatus(),this.hiringProcessesFiltered=[...this.hiringProcesses]}advancedFilterActionModal(){this.advancedFilterModal.open()}disableHireButton(){return!this.hiringProcesses.find(l=>l.$selected)}filter(){let l=this.disclaimers.map(r=>r.value);l.length?this.hiringProcessesFilter(l):this.resetFilterHiringProcess()}filterAction(l){let r=typeof l=="string"?[l]:[...l];this.populateDisclaimers(r),this.filter()}hireCandidate(){let l=this.hiringProcesses.find(r=>r.$selected);switch(l.hireStatus){case"progress":l.hireStatus="hired",this.poNotification.success("Hired candidate!");break;case"hired":this.poNotification.warning("This candidate has already been hired.");break;case"canceled":this.poNotification.error("This candidate has already been disqualified.");break}}hiringProcessesFilter(l){this.hiringProcessesFiltered=this.hiringProcesses.filter(r=>Object.keys(r).some(n=>!(r[n]instanceof Object)&&this.includeFilter(r[n],l)))}includeFilter(l,r){return r.some(n=>String(l).toLocaleLowerCase().includes(n.toLocaleLowerCase()))}onChangeDisclaimer(l){this.disclaimers=l,this.filter()}onClearDisclaimer(l){l.removedDisclaimer.property==="search"&&this.poPageList.clearInputSearch(),this.disclaimers=[],this.filter()}populateDisclaimers(l){let r=l.length>1?"advanced":"search";this.disclaimers=l.map(n=>({value:n,property:r})),this.disclaimers&&this.disclaimers.length>0?this.disclaimerGroup.disclaimers=[...this.disclaimers]:this.disclaimerGroup.disclaimers=[]}resetFilterHiringProcess(){this.hiringProcessesFiltered=[...this.hiringProcesses],this.status=[],this.jobDescription=[]}beforeRedirect(l){this.hiringProcesses.some(r=>r.$selected)?this.poDialog.confirm({title:`Confirm redirect to ${l}`,message:"There is data selected. Are you sure you want to quit?",confirm:()=>this.router.navigate(["/"])}):this.router.navigate(["/"])}static \u0275fac=function(r){return new(r||s)(P(R),P(W),P(ie),P(G))};static \u0275cmp=f({type:s,selectors:[["sample-po-page-list-hiring-processes"]],viewQuery:function(r,n){if(r&1&&(N(Fe,7),N(ke,7)),r&2){let d;z(d=J())&&(n.advancedFilterModal=d.first),z(d=J())&&(n.poPageList=d.first)}},standalone:!1,features:[K([R])],decls:9,vars:15,consts:[["poPageList",""],["advancedFilterModal",""],["f","ngForm"],["p-title","Hiring processes",3,"p-actions","p-breadcrumb","p-disclaimer-group","p-filter"],[3,"p-selectable","p-single-select","p-sort","p-striped","p-columns","p-items"],["p-title","Advanced filter",3,"p-primary-action"],["name","jobDescription","p-label","Job description",3,"ngModelChange","ngModel","p-options"],["name","status","p-label","Status",3,"ngModelChange","ngModel","p-options"]],template:function(r,n){if(r&1){let d=B();i(0,"po-page-list",3,0),o(2,"po-table",4),t(),i(3,"po-modal",5,1)(5,"form",null,2)(7,"po-multiselect",6),S("ngModelChange",function(a){return p(d),h(n.jobDescription,a)||(n.jobDescription=a),c(a)}),t(),i(8,"po-checkbox-group",7),S("ngModelChange",function(a){return p(d),h(n.status,a)||(n.status=a),c(a)}),t()()()}r&2&&(g("p-actions",n.actions)("p-breadcrumb",n.breadcrumb)("p-disclaimer-group",n.disclaimerGroup)("p-filter",n.filterSettings),m(2),g("p-selectable",!0)("p-single-select",!0)("p-sort",!0)("p-striped",!0)("p-columns",n.hiringProcessesColumns)("p-items",n.hiringProcessesFiltered),m(),g("p-primary-action",n.advancedFilterPrimaryAction),m(4),b("ngModel",n.jobDescription),g("p-options",n.jobDescriptionOptions),m(),b("ngModel",n.status),g("p-options",n.statusOptions))},dependencies:[j,H,V,O,I,q,le,te,D,oe],encapsulation:2})}return s})();var He=s=>({"docs-sample-code-tabs":s}),Ee=(()=>{class s{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=f({type:s,selectors:[["sample-po-page-list-hiring-processes-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(o(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Page List - Hiring Processes"),t(),i(4,"a",2),E("click",function(){return n.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.component.html"),t(),i(13,"pre",7),e(14,`<po-page-list
  #poPageList
  p-title="Hiring processes"
  [p-actions]="actions"
  [p-breadcrumb]="breadcrumb"
  [p-disclaimer-group]="disclaimerGroup"
  [p-filter]="filterSettings"
>
  <po-table
    [p-selectable]="true"
    [p-single-select]="true"
    [p-sort]="true"
    [p-striped]="true"
    [p-columns]="hiringProcessesColumns"
    [p-items]="hiringProcessesFiltered"
  >
  </po-table>
</po-page-list>

<po-modal #advancedFilterModal p-title="Advanced filter" [p-primary-action]="advancedFilterPrimaryAction">
  <form #f="ngForm">
    <po-multiselect
      name="jobDescription"
      [(ngModel)]="jobDescription"
      p-label="Job description"
      [p-options]="jobDescriptionOptions"
    >
    </po-multiselect>

    <po-checkbox-group name="status" [(ngModel)]="status" p-label="Status" [p-options]="statusOptions">
    </po-checkbox-group>
  </form>
</po-modal>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { PoBreadcrumb } from '@po-ui/ng-components';
import { PoCheckboxGroupOption, PoMultiselectOption } from '@po-ui/ng-components';

import { PoDialogService } from '@po-ui/ng-components';
import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { PoNotificationService } from '@po-ui/ng-components';
import { PoPageAction, PoPageFilter } from '@po-ui/ng-components';
import { PoTableColumn } from '@po-ui/ng-components';
import { PoPageListComponent } from '@po-ui/ng-components';

import { SamplePoPageListHiringProcessesService } from './sample-po-page-list-hiring-processes.service';

@Component({
  selector: 'sample-po-page-list-hiring-processes',
  templateUrl: './sample-po-page-list-hiring-processes.component.html',
  providers: [SamplePoPageListHiringProcessesService],
  standalone: false
})
export class SamplePoPageListHiringProcessesComponent implements OnInit {
  @ViewChild('advancedFilterModal', { static: true }) advancedFilterModal: PoModalComponent;
  @ViewChild('poPageList', { static: true }) poPageList: PoPageListComponent;

  disclaimerGroup;
  hiringProcesses: Array<object>;
  hiringProcessesColumns: Array<PoTableColumn>;
  hiringProcessesFiltered: Array<object>;
  jobDescription: Array<string> = [];
  jobDescriptionOptions: Array<PoMultiselectOption>;
  labelFilter: string = '';
  status: Array<string> = [];
  statusOptions: Array<PoCheckboxGroupOption>;

  public readonly actions: Array<PoPageAction> = [
    { label: 'Hire', action: this.hireCandidate.bind(this), disabled: this.disableHireButton.bind(this) },
    { label: 'Legislation', url: 'https://www.usa.gov/labor-laws' }
  ];

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', action: this.beforeRedirect.bind(this) }, { label: 'Hiring processes' }]
  };

  public readonly advancedFilterPrimaryAction: PoModalAction = {
    action: () => {
      this.poPageList.clearInputSearch();
      this.advancedFilterModal.close();
      const filters = [...this.jobDescription, ...this.status];
      this.filterAction(filters);
    },
    label: 'Apply filters'
  };

  public readonly filterSettings: PoPageFilter = {
    action: this.filterAction.bind(this),
    advancedAction: this.advancedFilterActionModal.bind(this),
    placeholder: 'Search'
  };

  private disclaimers = [];

  constructor(
    private sampleHiringProcessesService: SamplePoPageListHiringProcessesService,
    private poNotification: PoNotificationService,
    private poDialog: PoDialogService,
    private router: Router
  ) {}

  ngOnInit() {
    this.disclaimerGroup = {
      title: 'Filters',
      disclaimers: [],
      change: this.onChangeDisclaimer.bind(this),
      remove: this.onClearDisclaimer.bind(this)
    };

    this.hiringProcesses = this.sampleHiringProcessesService.getItems();
    this.hiringProcessesColumns = this.sampleHiringProcessesService.getColumns();
    this.jobDescriptionOptions = this.sampleHiringProcessesService.getJobs();
    this.statusOptions = this.sampleHiringProcessesService.getHireStatus();

    this.hiringProcessesFiltered = [...this.hiringProcesses];
  }

  advancedFilterActionModal() {
    this.advancedFilterModal.open();
  }

  disableHireButton() {
    return !this.hiringProcesses.find(candidate => candidate['$selected']);
  }

  filter() {
    const filters = this.disclaimers.map(disclaimer => disclaimer.value);
    filters.length ? this.hiringProcessesFilter(filters) : this.resetFilterHiringProcess();
  }

  filterAction(labelFilter: string | Array<string>) {
    const filter = typeof labelFilter === 'string' ? [labelFilter] : [...labelFilter];
    this.populateDisclaimers(filter);
    this.filter();
  }

  hireCandidate() {
    const selectedCandidate = this.hiringProcesses.find(candidate => candidate['$selected']);
    switch (selectedCandidate['hireStatus']) {
      case 'progress':
        selectedCandidate['hireStatus'] = 'hired';
        this.poNotification.success('Hired candidate!');
        break;

      case 'hired':
        this.poNotification.warning('This candidate has already been hired.');
        break;

      case 'canceled':
        this.poNotification.error('This candidate has already been disqualified.');
        break;
    }
  }

  hiringProcessesFilter(filters) {
    this.hiringProcessesFiltered = this.hiringProcesses.filter(item =>
      Object.keys(item).some(key => !(item[key] instanceof Object) && this.includeFilter(item[key], filters))
    );
  }

  includeFilter(item, filters) {
    return filters.some(filter => String(item).toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
  }

  onChangeDisclaimer(disclaimers) {
    this.disclaimers = disclaimers;
    this.filter();
  }

  onClearDisclaimer(disclaimers) {
    if (disclaimers.removedDisclaimer.property === 'search') {
      this.poPageList.clearInputSearch();
    }
    this.disclaimers = [];
    this.filter();
  }

  populateDisclaimers(filters: Array<any>) {
    const property = filters.length > 1 ? 'advanced' : 'search';
    this.disclaimers = filters.map(value => ({ value, property }));

    if (this.disclaimers && this.disclaimers.length > 0) {
      this.disclaimerGroup.disclaimers = [...this.disclaimers];
    } else {
      this.disclaimerGroup.disclaimers = [];
    }
  }

  resetFilterHiringProcess() {
    this.hiringProcessesFiltered = [...this.hiringProcesses];
    this.status = [];
    this.jobDescription = [];
  }

  private beforeRedirect(itemBreadcrumbLabel) {
    if (this.hiringProcesses.some(candidate => candidate['$selected'])) {
      this.poDialog.confirm({
        title: \`Confirm redirect to \${itemBreadcrumbLabel}\`,
        message: \`There is data selected. Are you sure you want to quit?\`,
        confirm: () => this.router.navigate(['/'])
      });
    } else {
      this.router.navigate(['/']);
    }
  }
}
`),t(),i(21,"label",6),e(22,"sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.service.ts"),t(),i(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

import { PoTableColumn } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoPageListHiringProcessesService {
  getColumns(): Array<PoTableColumn> {
    return [
      {
        property: 'hireStatus',
        label: 'Status',
        type: 'subtitle',
        subtitles: [
          { value: 'hired', color: 'success', label: 'Hired', content: '1' },
          { value: 'progress', color: 'warning', label: 'Progress', content: '2' },
          { value: 'canceled', color: 'danger', label: 'Canceled', content: '3' }
        ]
      },
      { property: 'idCard', label: 'Identity card', type: 'string' },
      { property: 'name', label: 'Name' },
      { property: 'age', label: 'Age' },
      { property: 'city', label: 'City' },
      { property: 'jobDescription', label: 'Job description', type: 'string' }
    ];
  }

  getHireStatus() {
    return [
      { value: 'hired', label: 'Hired' },
      { value: 'progress', label: 'Progress' },
      { value: 'canceled', label: 'Canceled' }
    ];
  }

  getItems() {
    return [
      {
        hireStatus: 'hired',
        name: 'James Johnson',
        city: 'Ontario',
        age: 24,
        idCard: 'AB34lxi90',
        jobDescription: 'Systems Analyst'
      },
      {
        hireStatus: 'progress',
        name: 'Brian Brown',
        city: 'Buffalo',
        age: 23,
        idCard: 'HG56lds54',
        jobDescription: 'Trainee'
      },
      {
        hireStatus: 'canceled',
        name: 'Mary Davis',
        city: 'Albany',
        age: 31,
        idCard: 'DF23cfr65',
        jobDescription: 'Programmer'
      },
      {
        hireStatus: 'hired',
        name: 'Margaret Garcia',
        city: 'New York',
        age: 29,
        idCard: 'GF45fgh34',
        jobDescription: 'Web developer'
      },
      {
        hireStatus: 'hired',
        name: 'Emma Hall',
        city: 'Ontario',
        age: 34,
        idCard: 'RF76jut21',
        jobDescription: 'Recruiter'
      },
      {
        hireStatus: 'progress',
        name: 'Lucas Clark',
        city: 'Utica',
        age: 32,
        idCard: 'HY21kgu65',
        jobDescription: 'Consultant'
      },
      { hireStatus: 'hired', name: 'Ella Scott', city: 'Ontario', age: 24, idCard: 'UL78flg68', jobDescription: 'DBA' },
      {
        hireStatus: 'progress',
        name: 'Chloe Walker',
        city: 'Albany',
        age: 29,
        idCard: 'JH12oli98',
        jobDescription: 'Programmer'
      }
    ];
  }

  getJobs() {
    return [
      { value: 'Systems Analyst', label: 'Systems Analyst' },
      { value: 'Trainee', label: 'Trainee' },
      { value: 'Programmer', label: 'Programmer' },
      { value: 'Web Developer', label: 'Web developer' },
      { value: 'Recruiter', label: 'Recruiter' },
      { value: 'Consultant', label: 'Consultant' },
      { value: 'DBA', label: 'DBA' }
    ];
  }
}
`),t()()()()(),i(25,"div",10),o(26,"sample-po-page-list-hiring-processes"),t(),o(27,"hr")),r&2&&(m(5),w("po-icon "+n.sampleCodeButtonIcon),m(),L(" ",n.sampleCodeButtonLabel,""),m(),g("ngClass",_(4,He,n.hideSampleCodeTabs)))},dependencies:[M,C,x,y,Se],encapsulation:2})}return s})();var fe=(()=>{class s{static \u0275fac=function(r){return new(r||s)};static \u0275cmp=f({type:s,selectors:[["sample-po-page-list-doc"]],standalone:!1,decls:1193,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/icons"],["href","/documentation/po-disclaimer-group"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoPageAction>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoDisclaimerGroup"],["pan","",1,"docs-api-property-type","PoPageFilter"],["pan","",1,"docs-api-property-type","PoPageListLiterals"],["href","/documentation/po-i18n"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","Array<PoDisclaimer>"],["pan","",1,"docs-api-property-type","PoDisclaimer"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["pan","",1,"docs-api-property-type","number"]],template:function(r,n){r&1&&(i(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoPageModule } from '@po-ui/ng-components';"),t()(),i(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes po-page-default, po-page-detail, po-page-edit,
po-page-list e po-page-slide.`),t()(),i(7,"h3",3),e(8,"Componente"),t(),i(9,"h4",4)(10,"code",5),e(11,"PoPageListComponent"),t()(),i(12,"div",2)(13,"p"),e(14,"O componente "),i(15,"code"),e(16,"po-page-list"),t(),e(17,` \xE9 utilizado como o container principal para as telas de listagem de dados,
podendo ser apresentado como lista ou tabela.`),t(),i(18,"p"),e(19,`Este componente possibilita realizar filtro dos dados, no qual permite que seja atribuido uma fun\xE7\xE3o que ser\xE1 executada no momento
da filtragem. Este comportamento pode ser acionado tanto ao `),i(20,"em"),e(21,"click"),t(),e(22," do \xEDcone "),i(23,"a",6),e(24,"an-magnifying-glass"),t(),e(25,`
quanto ao pressionar da tecla `),i(26,"em"),e(27,"ENTER"),t(),e(28," quando o foco estiver no campo de pesquisa."),t(),i(29,"p"),e(30,`Para facilitar a manipula\xE7\xE3o e visualiza\xE7\xE3o dos filtros aplicados, \xE9 poss\xEDvel tamb\xE9m utilizar o componente
`),i(31,"a",7)(32,"code"),e(33,"po-disclaimer-group"),t()(),e(34,"."),t(),i(35,"h4"),e(36,"Tokens customiz\xE1veis"),t(),i(37,"blockquote")(38,"p"),e(39,"Para maiores informa\xE7\xF5es, acesse o guia "),i(40,"a",8),e(41,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(42,"."),t()(),i(43,"table")(44,"thead")(45,"tr")(46,"th"),e(47,"Propriedade"),t(),i(48,"th"),e(49,"Descri\xE7\xE3o"),t(),i(50,"th"),e(51,"Valor Padr\xE3o"),t(),o(52,"th"),t()(),i(53,"tbody")(54,"tr")(55,"td")(56,"strong"),e(57,"Header"),t()(),o(58,"td")(59,"td")(60,"td"),t(),i(61,"tr")(62,"td")(63,"code"),e(64,"--padding"),t()(),i(65,"td"),e(66,"Espa\xE7amento (top "),i(67,"code"),e(68,"@deprecated 20.x.x"),t(),e(69,", right, bottom "),i(70,"code"),e(71,"@deprecated 20.x.x"),t(),e(72,", left)"),t(),i(73,"td")(74,"code"),e(75,"0.5rem (@deprecated 20.x.x) 1.5rem"),t()(),o(76,"td"),t(),i(77,"tr")(78,"td")(79,"code"),e(80,"--gap"),t()(),i(81,"td"),e(82,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),t(),i(83,"td")(84,"code"),e(85,"1.5rem"),t()(),i(86,"td")(87,"code"),e(88,"@deprecated 20.x.x"),t()()(),i(89,"tr")(90,"td")(91,"code"),e(92,"--gap-actions"),t()(),i(93,"td"),e(94,"Espa\xE7amento entre as a\xE7\xF5es"),t(),i(95,"td")(96,"code"),e(97,"0.5rem"),t()(),o(98,"td"),t(),i(99,"tr")(100,"td")(101,"code"),e(102,"--font-family"),t()(),i(103,"td"),e(104,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),t(),i(105,"td")(106,"code"),e(107,"--font-family-theme"),t()(),o(108,"td"),t(),i(109,"tr")(110,"td")(111,"strong"),e(112,"Content"),t()(),o(113,"td")(114,"td")(115,"td"),t(),i(116,"tr")(117,"td")(118,"code"),e(119,"--padding-content"),t()(),i(120,"td"),e(121,"Espa\xE7amento (top, right, bottom, left)"),t(),i(122,"td")(123,"code"),e(124,"0.5rem 1.5rem"),t()(),i(125,"td")(126,"code"),e(127,"@deprecated 20.x.x"),t()()()()()(),i(128,"div",9)(129,"h4",10),e(130,"Seletor"),t(),i(131,"pre",11),e(132,`<po-page-list
    p-actions="Array<PoPageAction>"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    p-disclaimer-group="PoDisclaimerGroup"
    p-filter="PoPageFilter"
    p-literals="PoPageListLiterals"
    p-quick-search-value="string"
    p-subtitle="string"
    p-title="string" >
</po-page-list>
`),t()(),i(133,"h4",12),e(134,"Propriedades"),t(),i(135,"table",13)(136,"tr",14)(137,"th",15),e(138,"Nome"),t(),i(139,"th",15),e(140,"Tipo"),t(),i(141,"th",15),e(142,"Padr\xE3o"),t(),i(143,"th",15),e(144,"Descri\xE7\xE3o"),t()(),i(145,"tr",16)(146,"td",17)(147,"div",18)(148,"span",19),e(149," p-actions"),o(150,"br"),t()()(),i(151,"td",20)(152,"code",21),e(153,"Array<PoPageAction>"),t()(),i(154,"td",22),e(155,"-"),t(),i(156,"td",23)(157,"em")(158,"strong"),e(159,"(opcional)"),t()(),i(160,"p"),e(161,"Nesta propriedade deve ser definido um array de objetos que implementam a interface "),i(162,"code"),e(163,"PoPageAction"),t(),e(164,"."),t()()(),i(165,"tr",16)(166,"td",17)(167,"div",18)(168,"span",19),e(169," p-breadcrumb"),o(170,"br"),t()()(),i(171,"td",20)(172,"code",24),e(173,"PoBreadcrumb"),t()(),i(174,"td",22),e(175,"-"),t(),i(176,"td",23)(177,"em")(178,"strong"),e(179,"(opcional)"),t()(),i(180,"p"),e(181,"Objeto que implementa as propriedades da interface "),i(182,"code"),e(183,"PoBreadcrumb"),t(),e(184,"."),t()()(),i(185,"tr",16)(186,"td",17)(187,"div",18)(188,"span",19),e(189," p-components-size"),o(190,"br"),t()()(),i(191,"td",20)(192,"code",25),e(193,"string"),t()(),i(194,"td",22)(195,"p")(196,"code"),e(197,"medium"),t()()(),i(198,"td",23)(199,"em")(200,"strong"),e(201,"(opcional)"),t()(),i(202,"p"),e(203,"Define o tamanho dos componentes de formul\xE1rio no template:"),t(),i(204,"ul")(205,"li")(206,"code"),e(207,"small"),t(),e(208,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(209,"li")(210,"code"),e(211,"medium"),t(),e(212,": aplica a medida medium de cada componente."),t()(),i(213,"blockquote")(214,"p"),e(215,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(216,"code"),e(217,"medium"),t(),e(218,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(219,"a",26),e(220,"po-theme"),t(),e(221,"."),t()()()(),i(222,"tr",16)(223,"td",17)(224,"div",18)(225,"span",19),e(226," p-disclaimer-group"),o(227,"br"),t()()(),i(228,"td",20)(229,"code",27),e(230,"PoDisclaimerGroup"),t()(),i(231,"td",22),e(232,"-"),t(),i(233,"td",23)(234,"em")(235,"strong"),e(236,"(opcional)"),t()(),i(237,"p"),e(238,"Objeto que implementa as propriedades da interface "),i(239,"code"),e(240,"PoDisclaimerGroup"),t(),e(241,"."),t()()(),i(242,"tr",16)(243,"td",17)(244,"div",18)(245,"span",19),e(246," p-filter"),o(247,"br"),t()()(),i(248,"td",20)(249,"code",28),e(250,"PoPageFilter"),t()(),i(251,"td",22),e(252,"-"),t(),i(253,"td",23)(254,"p"),e(255,"Objeto que implementa as propriedades da interface "),i(256,"code"),e(257,"PoPageFilter"),t(),e(258,"."),t()()(),i(259,"tr",16)(260,"td",17)(261,"div",18)(262,"span",19),e(263," p-literals"),o(264,"br"),t()()(),i(265,"td",20)(266,"code",29),e(267,"PoPageListLiterals"),t()(),i(268,"td",22),e(269,"-"),t(),i(270,"td",23)(271,"em")(272,"strong"),e(273,"(opcional)"),t()(),i(274,"p"),e(275,"Objeto com as literais usadas no "),i(276,"code"),e(277,"po-page-list"),t(),e(278,"."),t(),i(279,"p"),e(280,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),t(),i(281,"pre")(282,"code"),e(283,`const customLiterals: PoPageListLiterals = {
  otherActions: 'Mais a\xE7\xF5es'
};
`),t()(),i(284,"p"),e(285,"Ou passando apenas as literais que deseja customizar:"),t(),i(286,"pre")(287,"code"),e(288,`const customLiterals: PoPageListLiterals = {
  otherActions: 'A\xE7\xF5es da p\xE1gina'
};
`),t()(),i(289,"p"),e(290,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),t(),i(291,"pre")(292,"code"),e(293,`<po-page-list
  [p-literals]="customLiterals">
</po-page-list>
`),t()(),i(294,"blockquote")(295,"p"),e(296,"O valor padr\xE3o ser\xE1 traduzido de acordo com o idioma configurado no "),i(297,"a",30)(298,"code"),e(299,"PoI18nService"),t()(),e(300," ou "),i(301,"em"),e(302,"browser"),t(),e(303,"."),t()()()(),i(304,"tr",16)(305,"td",17)(306,"div",18)(307,"span",19),e(308," p-quick-search-value"),o(309,"br"),t()()(),i(310,"td",20)(311,"code",25),e(312,"string"),t()(),i(313,"td",22),e(314,"-"),t(),i(315,"td",23)(316,"em")(317,"strong"),e(318,"(opcional)"),t()(),i(319,"p"),e(320,"Valor padr\xE3o na busca r\xE1pida ao inicializar o componente"),t()()(),i(321,"tr",16)(322,"td",17)(323,"div",18)(324,"span",19),e(325," p-subtitle"),o(326,"br"),t()()(),i(327,"td",20)(328,"code",25),e(329,"string"),t()(),i(330,"td",22),e(331,"-"),t(),i(332,"td",23)(333,"em")(334,"strong"),e(335,"(opcional)"),t()(),i(336,"p"),e(337,"Subtitulo do Header da p\xE1gina"),t()()(),i(338,"tr",16)(339,"td",17)(340,"div",18)(341,"span",19),e(342," p-title"),o(343,"br"),t()()(),i(344,"td",20)(345,"code",25),e(346,"string"),t()(),i(347,"td",22),e(348,"-"),t(),i(349,"td",23)(350,"p"),e(351,"T\xEDtulo da p\xE1gina."),t()()()(),i(352,"h3",12),e(353,"M\xE9todos"),t(),i(354,"table",31)(355,"tr",16)(356,"th",32)(357,"div",18)(358,"h4")(359,"span",19),e(360," clearInputSearch "),t()()()()(),i(361,"tr",23)(362,"td",23)(363,"p"),e(364,"Limpa o campo de pesquisa."),t()()()(),o(365,"br"),i(366,"h3"),e(367,"Interfaces"),t(),i(368,"h4",33)(369,"code",5),e(370,"PoBreadcrumbItem"),t()(),i(371,"div",2)(372,"p"),e(373,"Interface que define cada item do componente "),i(374,"strong"),e(375,"po-breadcrumb"),t(),e(376,"."),t()(),i(377,"h4",12),e(378,"Propriedades"),t(),i(379,"table",13)(380,"tr",14)(381,"th",15),e(382,"Nome"),t(),i(383,"th",15),e(384,"Tipo"),t(),i(385,"th",15),e(386,"Descri\xE7\xE3o"),t()(),i(387,"tr",16)(388,"td",17)(389,"div",18)(390,"span",19),e(391," action"),o(392,"br"),t()()(),i(393,"td",20)(394,"code",34),e(395,"Function"),t()(),i(396,"td",23)(397,"em")(398,"strong"),e(399,"(opcional)"),t()(),i(400,"p"),e(401,"A\xE7\xE3o executada ao clicar no item."),t(),i(402,"blockquote")(403,"p"),e(404,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),i(405,"em"),e(406,"label"),t(),e(407," do item como par\xE2metro para execu\xE7\xE3o."),t()()()(),i(408,"tr",16)(409,"td",17)(410,"div",18)(411,"span",19),e(412," label"),o(413,"br"),t()()(),i(414,"td",20)(415,"code",25),e(416,"string"),t()(),i(417,"td",23)(418,"p"),e(419,"R\xF3tulo do item."),t()()(),i(420,"tr",16)(421,"td",17)(422,"div",18)(423,"span",19),e(424," link"),o(425,"br"),t()()(),i(426,"td",20)(427,"code",25),e(428,"string"),t()(),i(429,"td",23)(430,"em")(431,"strong"),e(432,"(opcional)"),t()(),i(433,"p"),e(434,"Url do item."),t(),i(435,"blockquote")(436,"p"),e(437,"Caso o item tamb\xE9m contenha uma "),i(438,"em"),e(439,"action"),t(),e(440," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),i(441,"em"),e(442,"link"),t(),e(443,"."),t()(),i(444,"blockquote")(445,"p"),e(446,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),i(447,"strong")(448,"a",35),e(449,"Veja um exemplo de como criar rotas aqui"),t()(),e(450,"."),t()(),i(451,"blockquote")(452,"p"),e(453,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),i(454,"code"),e(455,"p-favorite-service"),t(),e(456," consiga favoritar ou desfavoritar."),t()()()()(),i(457,"h4",33)(458,"code",5),e(459,"PoBreadcrumb"),t()(),i(460,"div",2)(461,"p"),e(462,"Interface que define o "),i(463,"code"),e(464,"po-breadcrumb"),t(),e(465,"."),t()(),i(466,"h4",12),e(467,"Propriedades"),t(),i(468,"table",13)(469,"tr",14)(470,"th",15),e(471,"Nome"),t(),i(472,"th",15),e(473,"Tipo"),t(),i(474,"th",15),e(475,"Descri\xE7\xE3o"),t()(),i(476,"tr",16)(477,"td",17)(478,"div",18)(479,"span",19),e(480," favorite"),o(481,"br"),t()()(),i(482,"td",20)(483,"code",25),e(484,"string"),t()(),i(485,"td",23)(486,"em")(487,"strong"),e(488,"(opcional)"),t()(),i(489,"p"),e(490,"Permite definir uma URL para favoritar ou desfavoritar."),t(),i(491,"blockquote")(492,"p"),e(493,"Para maiores informa\xE7\xF5es verificar a propriedade "),i(494,"code"),e(495,"p-favorite-service"),t(),e(496," do componente "),i(497,"code"),e(498,"po-breadcrumb"),t(),e(499,"."),t()()()(),i(500,"tr",16)(501,"td",17)(502,"div",18)(503,"span",19),e(504," items"),o(505,"br"),t()()(),i(506,"td",20)(507,"code",36),e(508,"Array<PoBreadcrumbItem>"),t()(),i(509,"td",23)(510,"p"),e(511,"Lista de itens do "),i(512,"em"),e(513,"breadcrumb"),t(),e(514,"."),t(),i(515,"p")(516,"strong"),e(517,"Exemplo:"),t()(),i(518,"pre")(519,"code"),e(520,`{ label: 'Po Portal', link: 'portal' }
`),t()()()(),i(521,"tr",16)(522,"td",17)(523,"div",18)(524,"span",19),e(525," params"),o(526,"br"),t()()(),i(527,"td",20)(528,"code",37),e(529,"object"),t()(),i(530,"td",23)(531,"em")(532,"strong"),e(533,"(opcional)"),t()(),i(534,"p"),e(535,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),t()()()(),i(536,"h4",33)(537,"code",5),e(538,"PoDisclaimer"),t()(),i(539,"div",2)(540,"p"),e(541,"Interface que representa o objeto "),i(542,"code"),e(543,"po-disclaimer"),t(),e(544,"."),t()(),i(545,"h4",12),e(546,"Propriedades"),t(),i(547,"table",13)(548,"tr",14)(549,"th",15),e(550,"Nome"),t(),i(551,"th",15),e(552,"Tipo"),t(),i(553,"th",15),e(554,"Descri\xE7\xE3o"),t()(),i(555,"tr",16)(556,"td",17)(557,"div",18)(558,"span",19),e(559," hideClose"),o(560,"br"),t()()(),i(561,"td",20)(562,"code",38),e(563,"boolean"),t()(),i(564,"td",23)(565,"em")(566,"strong"),e(567,"(opcional)"),t()(),i(568,"p"),e(569,"Se verdadeiro, oculta o bot\xE3o para fechar o "),i(570,"em"),e(571,"disclaimer"),t(),e(572,"."),t()()(),i(573,"tr",16)(574,"td",17)(575,"div",18)(576,"span",19),e(577," label"),o(578,"br"),t()()(),i(579,"td",20)(580,"code",25),e(581,"string"),t()(),i(582,"td",23)(583,"em")(584,"strong"),e(585,"(opcional)"),t()(),i(586,"p"),e(587,"Texto de exibi\xE7\xE3o do objeto."),t()()(),i(588,"tr",16)(589,"td",17)(590,"div",18)(591,"span",19),e(592," property"),o(593,"br"),t()()(),i(594,"td",20)(595,"code",25),e(596,"string"),t()(),i(597,"td",23)(598,"em")(599,"strong"),e(600,"(opcional)"),t()(),i(601,"p"),e(602,"Nome da propriedade vinculada ao objeto "),i(603,"em"),e(604,"disclaimer"),t(),e(605,"."),t()()(),i(606,"tr",16)(607,"td",17)(608,"div",18)(609,"span",19),e(610," value"),o(611,"br"),t()()(),i(612,"td",20)(613,"code",39),e(614,"any"),t()(),i(615,"td",23)(616,"p"),e(617,"Valor do objeto."),t()()()(),i(618,"h4",33)(619,"code",5),e(620,"PoDisclaimerGroupRemoveAction"),t()(),i(621,"div",2)(622,"p"),e(623,"Estrutura do objeto representando o estado dos "),i(624,"em"),e(625,"disclaimers"),t(),e(626," ap\xF3s a remo\xE7\xE3o."),t()(),i(627,"h4",12),e(628,"Propriedades"),t(),i(629,"table",13)(630,"tr",14)(631,"th",15),e(632,"Nome"),t(),i(633,"th",15),e(634,"Tipo"),t(),i(635,"th",15),e(636,"Descri\xE7\xE3o"),t()(),i(637,"tr",16)(638,"td",17)(639,"div",18)(640,"span",19),e(641," currentDisclaimers"),o(642,"br"),t()()(),i(643,"td",20)(644,"code",40),e(645,"Array<PoDisclaimer>"),t()(),i(646,"td",23)(647,"p"),e(648,"Lista com os "),i(649,"em"),e(650,"disclaimers"),t(),e(651," atuais (restantes)."),t()()(),i(652,"tr",16)(653,"td",17)(654,"div",18)(655,"span",19),e(656," removedDisclaimer"),o(657,"br"),t()()(),i(658,"td",20)(659,"code",41),e(660,"PoDisclaimer"),t()(),i(661,"td",23)(662,"p")(663,"em"),e(664,"Disclaimer"),t(),e(665," que foi removido."),t()()()(),i(666,"h4",33)(667,"code",5),e(668,"PoDisclaimerGroup"),t()(),i(669,"div",2)(670,"p"),e(671,"Interface que representa o objeto "),i(672,"code"),e(673,"po-disclaimer-group"),t(),e(674,"."),t()(),i(675,"h4",12),e(676,"Propriedades"),t(),i(677,"table",13)(678,"tr",14)(679,"th",15),e(680,"Nome"),t(),i(681,"th",15),e(682,"Tipo"),t(),i(683,"th",15),e(684,"Descri\xE7\xE3o"),t()(),i(685,"tr",16)(686,"td",17)(687,"div",18)(688,"span",19),e(689," change"),o(690,"br"),t()()(),i(691,"td",20)(692,"code",34),e(693,"Function"),t()(),i(694,"td",23)(695,"em")(696,"strong"),e(697,"(opcional)"),t()(),i(698,"p"),e(699,"Fun\xE7\xE3o que ser\xE1 disparada quando a lista de "),i(700,"em"),e(701,"disclaimers"),t(),e(702,` for modificada.
Ser\xE1 passado por par\xE2metro a nova lista de `),i(703,"em"),e(704,"disclaimers"),t(),e(705,"."),t()()(),i(706,"tr",16)(707,"td",17)(708,"div",18)(709,"span",19),e(710," disclaimers"),o(711,"br"),t()()(),i(712,"td",20)(713,"code",40),e(714,"Array<PoDisclaimer>"),t()(),i(715,"td",23)(716,"p"),e(717,"Lista de "),i(718,"em"),e(719,"disclaimers"),t(),e(720,"."),t(),i(721,"p"),e(722,"Exemplo:"),t(),i(723,"pre")(724,"code"),e(725,`disclaimers: [
  { property: 'type', label: 'Hotel', value: 'hotel' },
  { property: 'cost', label: '$500,00', value: '500'  },
  { property: 'dates', label: '10/05/2018 - 15/05/2018', value: '10/05/2018|15/05/2018'  }
 ]
`),t()(),i(726,"p"),e(727,"Para que a lista de "),i(728,"em"),e(729,"disclaimers"),t(),e(730," seja atualizada dinamicamente deve-se passar uma nova refer\xEAncia do array de "),i(731,"code"),e(732,"PoDisclaimer"),t(),e(733,"."),t(),i(734,"p"),e(735,"Exemplo:"),t(),i(736,"pre")(737,"code"),e(738,`this.disclaimerGroup.disclaimers = [...this.disclaimers];
`),t()()()(),i(739,"tr",16)(740,"td",17)(741,"div",18)(742,"span",19),e(743," hideRemoveAll"),o(744,"br"),t()()(),i(745,"td",20)(746,"code",38),e(747,"boolean"),t()(),i(748,"td",23)(749,"em")(750,"strong"),e(751,"(opcional)"),t()(),i(752,"p"),e(753,"Oculta o bot\xE3o para remover todos os "),i(754,"em"),e(755,"disclaimers"),t(),e(756," do grupo."),t(),i(757,"blockquote")(758,"p"),e(759,"Por padr\xE3o, o mesmo \xE9 exibido \xE0 partir de dois ou mais "),i(760,"em"),e(761,"disclaimers"),t(),e(762," com a op\xE7\xE3o "),i(763,"code"),e(764,"hideClose"),t(),e(765," habilitada."),t()()()(),i(766,"tr",16)(767,"td",17)(768,"div",18)(769,"span",19),e(770," remove"),o(771,"br"),t()()(),i(772,"td",20)(773,"code",34),e(774,"Function"),t()(),i(775,"td",23)(776,"em")(777,"strong"),e(778,"(opcional)"),t()(),i(779,"p"),e(780,"Fun\xE7\xE3o que ser\xE1 disparada quando um "),i(781,"em"),e(782,"disclaimer"),t(),e(783,` for removido da lista de
`),i(784,"em"),e(785,"disclaimers"),t(),e(786," pelo usu\xE1rio."),t(),i(787,"p"),e(788,"Recebe como par\xE2metro um objeto conforme a interface "),i(789,"code"),e(790,"PoDisclaimerGroupRemoveAction"),t(),e(791,"."),t()()(),i(792,"tr",16)(793,"td",17)(794,"div",18)(795,"span",19),e(796," removeAll"),o(797,"br"),t()()(),i(798,"td",20)(799,"code",34),e(800,"Function"),t()(),i(801,"td",23)(802,"em")(803,"strong"),e(804,"(opcional)"),t()(),i(805,"p"),e(806,"Fun\xE7\xE3o que ser\xE1 disparada quando todos os "),i(807,"em"),e(808,"disclaimers"),t(),e(809," forem removidos da lista de "),i(810,"em"),e(811,"disclaimers"),t(),e(812,` pelo usu\xE1rio,
utilizando o bot\xE3o "remover todos".`),t(),i(813,"p"),e(814,"Recebe como par\xE2metro uma lista contendo todos os "),i(815,"code"),e(816,"disclaimers"),t(),e(817," removidos."),t()()(),i(818,"tr",16)(819,"td",17)(820,"div",18)(821,"span",19),e(822," title"),o(823,"br"),t()()(),i(824,"td",20)(825,"code",25),e(826,"string"),t()(),i(827,"td",23)(828,"em")(829,"strong"),e(830,"(opcional)"),t()(),i(831,"p"),e(832,"T\xEDtulo do grupo de "),i(833,"em"),e(834,"disclaimers"),t(),e(835,"."),t()()()(),i(836,"h4",33)(837,"code",5),e(838,"PoPageAction"),t()(),i(839,"div",2)(840,"p"),e(841,"Interface para as a\xE7\xF5es dos componentes po-page-default e po-page-list."),t(),i(842,"blockquote")(843,"p"),e(844,"As propriedades "),i(845,"code"),e(846,"selected"),t(),e(847,", "),i(848,"code"),e(849,"separator"),t(),e(850," e "),i(851,"code"),e(852,"type"),t(),e(853,` ser\xE3o vistas a partir da terceira a\xE7\xE3o e somente quando
definir quatro a\xE7\xF5es ou mais.`),t()()(),i(854,"h4",12),e(855,"Propriedades"),t(),i(856,"table",13)(857,"tr",14)(858,"th",15),e(859,"Nome"),t(),i(860,"th",15),e(861,"Tipo"),t(),i(862,"th",15),e(863,"Descri\xE7\xE3o"),t()(),i(864,"tr",16)(865,"td",17)(866,"div",18)(867,"span",19),e(868," action"),o(869,"br"),t()()(),i(870,"td",20)(871,"code",34),e(872,"Function"),t()(),i(873,"td",23)(874,"em")(875,"strong"),e(876,"(opcional)"),t()(),i(877,"p"),e(878,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),t(),i(879,"blockquote")(880,"p"),e(881,"Para que a fun\xE7\xE3o seja executada no contexto do elemento filho o mesmo deve ser passado utilizando "),i(882,"em"),e(883,"bind"),t(),e(884,"."),t()(),i(885,"p"),e(886,"Exemplo: "),i(887,"code"),e(888,"action: this.myFunction.bind(this)"),t()()()(),i(889,"tr",16)(890,"td",17)(891,"div",18)(892,"span",19),e(893," disabled"),o(894,"br"),t()()(),i(895,"td",20)(896,"code",38),e(897,"boolean "),t(),i(898,"code",34),e(899," Function"),t()(),i(900,"td",23)(901,"em")(902,"strong"),e(903,"(opcional)"),t()(),i(904,"p"),e(905,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),t(),i(906,"p"),e(907,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),t()()(),i(908,"tr",16)(909,"td",17)(910,"div",18)(911,"span",19),e(912," icon"),o(913,"br"),t()()(),i(914,"td",20)(915,"code",25),e(916,"string "),t(),i(917,"code",42),e(918," TemplateRef<void>"),t()(),i(919,"td",23)(920,"em")(921,"strong"),e(922,"(opcional)"),t()(),i(923,"p"),e(924,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),t(),i(925,"p"),e(926,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),i(927,"a",6),e(928,"Biblioteca de \xEDcones"),t(),e(929,". conforme exemplo abaixo:"),t(),i(930,"pre")(931,"code"),e(932,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),t()(),i(933,"p"),e(934,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),t(),i(935,"pre")(936,"code"),e(937,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),t()(),i(938,"p"),e(939,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),i(940,"code"),e(941,"TemplateRef"),t(),e(942,`, conforme exemplo abaixo:
component.html:`),t(),i(943,"pre")(944,"code"),e(945,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),t()(),i(946,"p"),e(947,"component.ts:"),t(),i(948,"pre")(949,"code"),e(950,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),t()()()(),i(951,"tr",16)(952,"td",17)(953,"div",18)(954,"span",19),e(955," label"),o(956,"br"),t()()(),i(957,"td",20)(958,"code",25),e(959,"string"),t()(),i(960,"td",23)(961,"p"),e(962,"R\xF3tulo da a\xE7\xE3o."),t()()(),i(963,"tr",16)(964,"td",17)(965,"div",18)(966,"span",19),e(967," selected"),o(968,"br"),t()()(),i(969,"td",20)(970,"code",38),e(971,"boolean"),t()(),i(972,"td",23)(973,"em")(974,"strong"),e(975,"(opcional)"),t()(),i(976,"p"),e(977,"Define se a a\xE7\xE3o est\xE1 selecionada."),t()()(),i(978,"tr",16)(979,"td",17)(980,"div",18)(981,"span",19),e(982," separator"),o(983,"br"),t()()(),i(984,"td",20)(985,"code",38),e(986,"boolean"),t()(),i(987,"td",23)(988,"em")(989,"strong"),e(990,"(opcional)"),t()(),i(991,"p"),e(992,"Atribui uma linha separadora acima do item."),t()()(),i(993,"tr",16)(994,"td",17)(995,"div",18)(996,"span",19),e(997," type"),o(998,"br"),t()()(),i(999,"td",20)(1e3,"code",25),e(1001,"string"),t()(),i(1002,"td",23)(1003,"em")(1004,"strong"),e(1005,"(opcional)"),t()(),i(1006,"p"),e(1007,"Define a cor do item, sendo "),i(1008,"code"),e(1009,"default"),t(),e(1010," o padr\xE3o."),t(),i(1011,"p"),e(1012,"Valores v\xE1lidos:"),t(),i(1013,"ul")(1014,"li")(1015,"code"),e(1016,"default"),t()(),i(1017,"li")(1018,"code"),e(1019,"danger"),t(),e(1020," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),t()()()(),i(1021,"tr",16)(1022,"td",17)(1023,"div",18)(1024,"span",19),e(1025," url"),o(1026,"br"),t()()(),i(1027,"td",20)(1028,"code",25),e(1029,"string"),t()(),i(1030,"td",23)(1031,"em")(1032,"strong"),e(1033,"(opcional)"),t()(),i(1034,"p"),e(1035,"URL utilizada no redirecionamento das p\xE1ginas."),t()()(),i(1036,"tr",16)(1037,"td",17)(1038,"div",18)(1039,"span",19),e(1040," visible"),o(1041,"br"),t()()(),i(1042,"td",20)(1043,"code",38),e(1044,"boolean "),t(),i(1045,"code",34),e(1046," Function"),t()(),i(1047,"td",23)(1048,"em")(1049,"strong"),e(1050,"(opcional)"),t()(),i(1051,"p"),e(1052,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),t(),i(1053,"blockquote")(1054,"p"),e(1055,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),t()(),i(1056,"p"),e(1057,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),t(),i(1058,"ul")(1059,"li")(1060,"p"),e(1061,"Fun\xE7\xE3o que deve retornar um booleano."),t()(),i(1062,"li")(1063,"p"),e(1064,"Informar diretamente um valor booleano."),t()()()()()(),i(1065,"h4",33)(1066,"code",5),e(1067,"PoPageFilter"),t()(),i(1068,"div",2)(1069,"p"),e(1070,"Interface para o atributo "),i(1071,"code"),e(1072,"filter"),t(),e(1073," do componente "),i(1074,"code"),e(1075,"po-page-list"),t(),e(1076,"."),t()(),i(1077,"h4",12),e(1078,"Propriedades"),t(),i(1079,"table",13)(1080,"tr",14)(1081,"th",15),e(1082,"Nome"),t(),i(1083,"th",15),e(1084,"Tipo"),t(),i(1085,"th",15),e(1086,"Descri\xE7\xE3o"),t()(),i(1087,"tr",16)(1088,"td",17)(1089,"div",18)(1090,"span",19),e(1091," action"),o(1092,"br"),t()()(),i(1093,"td",20)(1094,"code",34),e(1095,"Function"),t()(),i(1096,"td",23)(1097,"em")(1098,"strong"),e(1099,"(opcional)"),t()(),i(1100,"p"),e(1101,"A\xE7\xE3o a ser executada."),t()()(),i(1102,"tr",16)(1103,"td",17)(1104,"div",18)(1105,"span",19),e(1106," advancedAction"),o(1107,"br"),t()()(),i(1108,"td",20)(1109,"code",34),e(1110,"Function"),t()(),i(1111,"td",23)(1112,"em")(1113,"strong"),e(1114,"(opcional)"),t()(),i(1115,"p"),e(1116,`A\xE7\xE3o a ser executada quando for disparado o
evento de `),i(1117,"em"),e(1118,"click"),t(),e(1119," atrav\xE9s do r\xF3tulo "),i(1120,"strong"),e(1121,"Busca Avan\xE7ada"),t(),e(1122,"."),t()()(),i(1123,"tr",16)(1124,"td",17)(1125,"div",18)(1126,"span",19),e(1127," placeholder"),o(1128,"br"),t()()(),i(1129,"td",20)(1130,"code",25),e(1131,"string"),t()(),i(1132,"td",23)(1133,"em")(1134,"strong"),e(1135,"(opcional)"),t()(),i(1136,"p"),e(1137,"Texto de instru\xE7\xE3o exibido dentro do campo de filtro."),t()()(),i(1138,"tr",16)(1139,"td",17)(1140,"div",18)(1141,"span",19),e(1142," width"),o(1143,"br"),t()()(),i(1144,"td",20)(1145,"code",43),e(1146,"number"),t()(),i(1147,"td",23)(1148,"em")(1149,"strong"),e(1150,"(opcional)"),t()(),i(1151,"p"),e(1152,"Tamanho do filtro em tela, utilizando o "),i(1153,"em"),e(1154,"Grid System"),t(),e(1155,`,
e limitado ao m\xE1ximo de 6 colunas. O tamanho m\xEDnimo \xE9 controlado
conforme resolu\xE7\xE3o de tela para manter a consist\xEAncia do layout.`),t()()()(),i(1156,"h4",33)(1157,"code",5),e(1158,"PoPageListLiterals"),t()(),i(1159,"div",2)(1160,"p"),e(1161,"Interface para defini\xE7\xE3o das literais usadas no "),i(1162,"code"),e(1163,"po-page-list"),t(),e(1164,"."),t()(),i(1165,"h4",12),e(1166,"Propriedades"),t(),i(1167,"table",13)(1168,"tr",14)(1169,"th",15),e(1170,"Nome"),t(),i(1171,"th",15),e(1172,"Tipo"),t(),i(1173,"th",15),e(1174,"Descri\xE7\xE3o"),t()(),i(1175,"tr",16)(1176,"td",17)(1177,"div",18)(1178,"span",19),e(1179," otherActions"),o(1180,"br"),t()()(),i(1181,"td",20)(1182,"code",25),e(1183,"string"),t()(),i(1184,"td",23)(1185,"em")(1186,"strong"),e(1187,"(opcional)"),t()(),i(1188,"p"),e(1189,"Legenda do "),i(1190,"code"),e(1191,"po-dropdown"),t(),e(1192," de a\xE7\xF5es."),t()()()()())},dependencies:[C],encapsulation:2})}return s})();var Pe=(()=>{class s{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||s)(P(Z),P(G))};static \u0275cmp=f({type:s,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Page List",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,n){r&1&&(i(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),E("p-click",function(){return n.changeTab("doc")}),o(3,"sample-po-page-list-doc"),t(),i(4,"po-tab",3),E("p-click",function(){return n.changeTab("web")}),o(5,"sample-po-page-list-basic-view")(6,"sample-po-page-list-labs-view")(7,"sample-po-page-list-hiring-processes-view"),t()()()),r&2&&(g("p-actions",n.actions),m(2),g("p-active",n.activeTab==="doc"),m(2),g("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[de,x,y,ge,he,Ee,fe],encapsulation:2})}return s})();var Oe=[{path:"",component:Pe}],ve=(()=>{class s{static \u0275fac=function(r){return new(r||s)};static \u0275mod=k({type:s});static \u0275inj=F({imports:[U.forChild(Oe),U]})}return s})();var st=(()=>{class s{static \u0275fac=function(r){return new(r||s)};static \u0275mod=k({type:s});static \u0275inj=F({imports:[pe,ve]})}return s})();export{st as DocPoPageListModule};
