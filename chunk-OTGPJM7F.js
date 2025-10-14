import{o as y,p as ce}from"./chunk-B2ZAFZPZ.js";import{Ab as x,Fa as le,La as se,O as W,Q as ie,Sa as me,U as ne,Xa as de,_ as ae,a as ee,nb as pe,qb as D,ra as oe,sa as q,v as te,za as re,zb as v}from"./chunk-QYU7N2WH.js";import{$a as z,Aa as g,Cb as M,Da as w,Dc as H,Ec as V,Fc as j,Gc as O,Hc as G,La as i,M as K,Ma as t,N as F,Na as o,Q as C,Ra as B,Sa as E,U as p,Uc as $,V as c,Wc as I,Yc as U,_a as N,ab as J,bb as T,cb as e,eb as L,gb as b,hb as h,ib as S,ja as m,jb as X,ka as R,lb as _,qa as f,ra as k,yc as Z}from"./chunk-KZJHT32G.js";var ue=(()=>{class s{static \u0275fac=function(r){return new(r||s)};static \u0275cmp=f({type:s,selectors:[["sample-po-page-list-basic"]],standalone:!1,decls:1,vars:0,consts:[["p-title","PO Page List"]],template:function(r,n){r&1&&o(0,"po-page-list",0)},dependencies:[D],encapsulation:2})}return s})();var we=s=>({"docs-sample-code-tabs":s}),be=(()=>{class s{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=f({type:s,selectors:[["sample-po-page-list-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(o(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Page List Basic"),t(),i(4,"a",2),E("click",function(){return n.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-list-basic/sample-po-page-list-basic.component.html"),t(),i(13,"pre",7),e(14,`<po-page-list p-title="PO Page List"> </po-page-list>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-list-basic/sample-po-page-list-basic.component.ts"),t(),i(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-page-list-basic',
  templateUrl: './sample-po-page-list-basic.component.html',
  standalone: false
})
export class SamplePoPageListBasicComponent {}
`),t()()()()(),i(21,"div",10),o(22,"sample-po-page-list-basic"),t(),o(23,"hr")),r&2&&(m(5),w("po-icon "+n.sampleCodeButtonIcon),m(),L(" ",n.sampleCodeButtonLabel,""),m(),g("ngClass",_(4,we,n.hideSampleCodeTabs)))},dependencies:[M,y,v,x,ue],encapsulation:2})}return s})();var he=(()=>{class s{poNotification=C(q);action;actions;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;disclaimerGroupHideRemoveAll;disclaimerGroupTitle;disclaimerHideClose;disclaimerLabel;disclaimerProperty;disclaimerValue;filterModel;literals;title;subtitle;disclaimerGroup;actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];filter={action:this.showAction.bind(this),advancedAction:this.showAdvanceAction.bind(this)};iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{value:"fa fa-podcast",label:"fa fa-podcast"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];ngOnInit(){this.restore()}addAction(l){let r=Object.assign({},l);r.action=r.action?this.showAction.bind(this,r.action):void 0,this.actions=[...this.actions,r],this.restoreActionForm()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0}}addBreadcrumbParam(){let l={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,l):this.breadcrumb.params=l,this.breadcrumbParams={}}addDisclaimer(){this.disclaimerGroup.disclaimers=[...this.disclaimerGroup.disclaimers,{label:this.disclaimerLabel,property:this.disclaimerProperty,hideClose:this.disclaimerHideClose,value:this.disclaimerValue}],this.disclaimerGroup=Object.assign({},this.disclaimerGroup),this.restoreDisclaimerModel()}addDisclaimerGroupParam(l,r){this.disclaimerGroup=Object.assign({},this.disclaimerGroup,{title:l,hideRemoveAll:r})}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}onChangeDisclaimerGroupHideRemoveAll(l){this.addDisclaimerGroupParam(this.disclaimerGroupTitle,l)}restore(){this.actions=[],this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize="medium",this.customLiterals=void 0,this.disclaimerGroup={title:this.disclaimerGroupTitle,disclaimers:[],hideRemoveAll:this.disclaimerGroupHideRemoveAll},this.disclaimerGroupHideRemoveAll=!1,this.disclaimerGroupTitle=void 0,this.filterModel=void 0,this.filter.placeholder=void 0,this.filter.width=void 0,this.literals="",this.title="PO Page List",this.subtitle="",this.restoreDisclaimerModel(),this.restoreActionForm()}restoreActionForm(){this.action={label:void 0,visible:null}}restoreDisclaimerModel(){this.disclaimerHideClose=void 0,this.disclaimerLabel=void 0,this.disclaimerProperty=void 0,this.disclaimerValue=void 0}showAction(l){this.poNotification.success(`Action clicked: ${l}`)}showAdvanceAction(l){this.poNotification.success(`Advance Action clicked: ${l}`)}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=f({type:s,selectors:[["sample-po-page-list-labs"]],standalone:!1,decls:60,vars:40,consts:[["formAction","ngForm"],["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],["formDisclaimers","ngForm"],["form","ngForm"],[3,"p-actions","p-breadcrumb","p-components-size","p-disclaimer-group","p-filter","p-literals","p-title","p-subtitle"],["p-label","Model",3,"p-value"],[1,"po-row"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-6",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","action","p-columns","4","p-indeterminate","","p-label","Action properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Add Action",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","disclaimerGroupTitle","p-clean","","p-label","Disclaimer group title",1,"po-md-6",3,"ngModelChange","p-change-model","ngModel"],["name","disclaimerGroupHideRemoveAll","p-label","Disclaimer group hide remove all","ngDefaultControl","",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","disclaimerLabel","p-clean","","p-label","Disclaimer label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerProperty","p-clean","","p-label","Disclaimer property",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerValue","p-clean","","p-label","Disclaimer value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerHideClose","p-label","Disclaimer hide close",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add disclaimer",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","title","p-label","Title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","filterPlaceholder","p-label","Filter placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","filterWidth","p-label","Filter width",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: {"otherActions": "Mais a\xE7\xF5es"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,n){if(r&1){let d=B();i(0,"po-page-list",6),o(1,"po-divider")(2,"po-info",7),t(),o(3,"po-divider"),i(4,"form",null,0)(6,"div",8)(7,"po-input",9),S("ngModelChange",function(a){return p(d),h(n.action.action,a)||(n.action.action=a),c(a)}),t(),i(8,"po-input",10),S("ngModelChange",function(a){return p(d),h(n.action.label,a)||(n.action.label=a),c(a)}),t(),i(9,"po-input",11),S("ngModelChange",function(a){return p(d),h(n.action.url,a)||(n.action.url=a),c(a)}),t(),i(10,"po-select",12),S("ngModelChange",function(a){return p(d),h(n.action.type,a)||(n.action.type=a),c(a)}),t(),i(11,"po-select",13),S("ngModelChange",function(a){return p(d),h(n.action.icon,a)||(n.action.icon=a),c(a)}),t(),i(12,"po-checkbox-group",14),S("ngModelChange",function(a){return p(d),h(n.action,a)||(n.action=a),c(a)}),t()(),i(13,"div",8)(14,"po-button",15),E("p-click",function(){return p(d),c(n.addAction(n.action))}),t()()(),o(15,"po-divider"),i(16,"form",null,1)(18,"div",8)(19,"po-input",16),S("ngModelChange",function(a){return p(d),h(n.breadcrumb.favorite,a)||(n.breadcrumb.favorite=a),c(a)}),t()()(),i(20,"form",null,2)(22,"div",8)(23,"po-input",17),S("ngModelChange",function(a){return p(d),h(n.breadcrumbItem.label,a)||(n.breadcrumbItem.label=a),c(a)}),t(),i(24,"po-input",18),S("ngModelChange",function(a){return p(d),h(n.breadcrumbItem.link,a)||(n.breadcrumbItem.link=a),c(a)}),t()(),i(25,"div",8)(26,"po-button",19),E("p-click",function(){return p(d),c(n.addBreadcrumbItem())}),t()()(),o(27,"po-divider"),i(28,"form",null,3)(30,"div",8)(31,"po-input",20),S("ngModelChange",function(a){return p(d),h(n.breadcrumbParams.property,a)||(n.breadcrumbParams.property=a),c(a)}),t(),i(32,"po-input",21),S("ngModelChange",function(a){return p(d),h(n.breadcrumbParams.value,a)||(n.breadcrumbParams.value=a),c(a)}),t()(),i(33,"div",8)(34,"po-button",22),E("p-click",function(){return p(d),c(n.addBreadcrumbParam())}),t()()(),o(35,"po-divider"),i(36,"div",8)(37,"po-input",23),S("ngModelChange",function(a){return p(d),h(n.disclaimerGroupTitle,a)||(n.disclaimerGroupTitle=a),c(a)}),E("p-change-model",function(){return p(d),c(n.addDisclaimerGroupParam(n.disclaimerGroupTitle,n.disclaimerGroupHideRemoveAll))}),t(),i(38,"po-switch",24),S("ngModelChange",function(a){return p(d),h(n.disclaimerGroupHideRemoveAll,a)||(n.disclaimerGroupHideRemoveAll=a),c(a)}),E("p-change",function(a){return p(d),c(n.onChangeDisclaimerGroupHideRemoveAll(a))}),t()(),i(39,"form",null,4)(41,"div",8)(42,"po-input",25),S("ngModelChange",function(a){return p(d),h(n.disclaimerLabel,a)||(n.disclaimerLabel=a),c(a)}),t(),i(43,"po-input",26),S("ngModelChange",function(a){return p(d),h(n.disclaimerProperty,a)||(n.disclaimerProperty=a),c(a)}),t()(),i(44,"div",8)(45,"po-input",27),S("ngModelChange",function(a){return p(d),h(n.disclaimerValue,a)||(n.disclaimerValue=a),c(a)}),t(),i(46,"po-switch",28),S("ngModelChange",function(a){return p(d),h(n.disclaimerHideClose,a)||(n.disclaimerHideClose=a),c(a)}),t()(),i(47,"div",8)(48,"po-button",29),E("p-click",function(){return p(d),c(n.addDisclaimer())}),t()()(),o(49,"po-divider"),i(50,"form",null,5)(52,"po-input",30),S("ngModelChange",function(a){return p(d),h(n.title,a)||(n.title=a),c(a)}),t(),i(53,"po-input",31),S("ngModelChange",function(a){return p(d),h(n.subtitle,a)||(n.subtitle=a),c(a)}),t(),i(54,"po-input",32),S("ngModelChange",function(a){return p(d),h(n.filter.placeholder,a)||(n.filter.placeholder=a),c(a)}),t(),i(55,"po-input",33),S("ngModelChange",function(a){return p(d),h(n.filter.width,a)||(n.filter.width=a),c(a)}),t(),i(56,"po-input",34),S("ngModelChange",function(a){return p(d),h(n.literals,a)||(n.literals=a),c(a)}),E("p-change",function(){return p(d),c(n.changeLiterals())}),t(),i(57,"po-radio-group",35),S("ngModelChange",function(a){return p(d),h(n.componentsSize,a)||(n.componentsSize=a),c(a)}),t(),i(58,"div",8)(59,"po-button",36),E("p-click",function(){return p(d),c(n.restore())}),t()()()}if(r&2){let d=T(5),u=T(21),a=T(29),ye=T(40);g("p-actions",n.actions)("p-breadcrumb",n.breadcrumb)("p-components-size",n.componentsSize)("p-disclaimer-group",n.disclaimerGroup)("p-filter",n.filter)("p-literals",n.customLiterals)("p-title",n.title)("p-subtitle",n.subtitle),m(2),g("p-value",n.filterModel),m(5),b("ngModel",n.action.action),m(),b("ngModel",n.action.label),m(),b("ngModel",n.action.url),m(),b("ngModel",n.action.type),g("p-options",n.typeOptions),m(),b("ngModel",n.action.icon),g("p-options",n.iconOptions),m(),b("ngModel",n.action),g("p-options",n.actionOptions),m(2),g("p-disabled",d.form.invalid),m(5),b("ngModel",n.breadcrumb.favorite),m(4),b("ngModel",n.breadcrumbItem.label),m(),b("ngModel",n.breadcrumbItem.link),m(2),g("p-disabled",u.invalid),m(5),b("ngModel",n.breadcrumbParams.property),m(),b("ngModel",n.breadcrumbParams.value),m(2),g("p-disabled",a.invalid),m(3),b("ngModel",n.disclaimerGroupTitle),m(),b("ngModel",n.disclaimerGroupHideRemoveAll),m(4),b("ngModel",n.disclaimerLabel),m(),b("ngModel",n.disclaimerProperty),m(2),b("ngModel",n.disclaimerValue),m(),b("ngModel",n.disclaimerHideClose),m(2),g("p-disabled",ye.invalid),m(4),b("ngModel",n.title),m(),b("ngModel",n.subtitle),m(),b("ngModel",n.filter.placeholder),m(),b("ngModel",n.filter.width),m(),b("ngModel",n.literals),m(),b("ngModel",n.componentsSize),g("p-options",n.componentsSizeOptions)}},dependencies:[G,Z,H,V,O,j,te,ee,W,ie,le,me,oe,de,D],encapsulation:2})}return s})();var De=s=>({"docs-sample-code-tabs":s}),Se=(()=>{class s{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=f({type:s,selectors:[["sample-po-page-list-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(o(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Page List Labs"),t(),i(4,"a",2),E("click",function(){return n.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-list-labs/sample-po-page-list-labs.component.html"),t(),i(13,"pre",7),e(14,`<po-page-list
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
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-list-labs/sample-po-page-list-labs.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';

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
  private poNotification = inject(PoNotificationService);

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
`),t()()()()(),i(21,"div",10),o(22,"sample-po-page-list-labs"),t(),o(23,"hr")),r&2&&(m(5),w("po-icon "+n.sampleCodeButtonIcon),m(),L(" ",n.sampleCodeButtonLabel,""),m(),g("ngClass",_(4,De,n.hideSampleCodeTabs)))},dependencies:[M,y,v,x,he],encapsulation:2})}return s})();var Y=(()=>{class s{getColumns(){return[{property:"hireStatus",label:"Status",type:"subtitle",subtitles:[{value:"hired",color:"success",label:"Hired",content:"1"},{value:"progress",color:"warning",label:"Progress",content:"2"},{value:"canceled",color:"danger",label:"Canceled",content:"3"}]},{property:"idCard",label:"Identity card",type:"string"},{property:"name",label:"Name"},{property:"age",label:"Age"},{property:"city",label:"City"},{property:"jobDescription",label:"Job description",type:"string"}]}getHireStatus(){return[{value:"hired",label:"Hired"},{value:"progress",label:"Progress"},{value:"canceled",label:"Canceled"}]}getItems(){return[{hireStatus:"hired",name:"James Johnson",city:"Ontario",age:24,idCard:"AB34lxi90",jobDescription:"Systems Analyst"},{hireStatus:"progress",name:"Brian Brown",city:"Buffalo",age:23,idCard:"HG56lds54",jobDescription:"Trainee"},{hireStatus:"canceled",name:"Mary Davis",city:"Albany",age:31,idCard:"DF23cfr65",jobDescription:"Programmer"},{hireStatus:"hired",name:"Margaret Garcia",city:"New York",age:29,idCard:"GF45fgh34",jobDescription:"Web developer"},{hireStatus:"hired",name:"Emma Hall",city:"Ontario",age:34,idCard:"RF76jut21",jobDescription:"Recruiter"},{hireStatus:"progress",name:"Lucas Clark",city:"Utica",age:32,idCard:"HY21kgu65",jobDescription:"Consultant"},{hireStatus:"hired",name:"Ella Scott",city:"Ontario",age:24,idCard:"UL78flg68",jobDescription:"DBA"},{hireStatus:"progress",name:"Chloe Walker",city:"Albany",age:29,idCard:"JH12oli98",jobDescription:"Programmer"}]}getJobs(){return[{value:"Systems Analyst",label:"Systems Analyst"},{value:"Trainee",label:"Trainee"},{value:"Programmer",label:"Programmer"},{value:"Web Developer",label:"Web developer"},{value:"Recruiter",label:"Recruiter"},{value:"Consultant",label:"Consultant"},{value:"DBA",label:"DBA"}]}static \u0275fac=function(r){return new(r||s)};static \u0275prov=K({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var Te=["advancedFilterModal"],Fe=["poPageList"],Ee=(()=>{class s{sampleHiringProcessesService=C(Y);poNotification=C(q);poDialog=C(ae);router=C(I);advancedFilterModal;poPageList;disclaimerGroup;hiringProcesses;hiringProcessesColumns;hiringProcessesFiltered;jobDescription=[];jobDescriptionOptions;labelFilter="";status=[];statusOptions;actions=[{label:"Hire",action:this.hireCandidate.bind(this),disabled:this.disableHireButton.bind(this)},{label:"Legislation",url:"https://www.usa.gov/labor-laws"}];breadcrumb={items:[{label:"Home",action:this.beforeRedirect.bind(this)},{label:"Hiring processes"}]};advancedFilterPrimaryAction={action:()=>{this.poPageList.clearInputSearch(),this.advancedFilterModal.close();let l=[...this.jobDescription,...this.status];this.filterAction(l)},label:"Apply filters"};filterSettings={action:this.filterAction.bind(this),advancedAction:this.advancedFilterActionModal.bind(this),placeholder:"Search"};disclaimers=[];ngOnInit(){this.disclaimerGroup={title:"Filters",disclaimers:[],change:this.onChangeDisclaimer.bind(this),remove:this.onClearDisclaimer.bind(this)},this.hiringProcesses=this.sampleHiringProcessesService.getItems(),this.hiringProcessesColumns=this.sampleHiringProcessesService.getColumns(),this.jobDescriptionOptions=this.sampleHiringProcessesService.getJobs(),this.statusOptions=this.sampleHiringProcessesService.getHireStatus(),this.hiringProcessesFiltered=[...this.hiringProcesses]}advancedFilterActionModal(){this.advancedFilterModal.open()}disableHireButton(){return!this.hiringProcesses.find(l=>l.$selected)}filter(){let l=this.disclaimers.map(r=>r.value);l.length?this.hiringProcessesFilter(l):this.resetFilterHiringProcess()}filterAction(l){let r=typeof l=="string"?[l]:[...l];this.populateDisclaimers(r),this.filter()}hireCandidate(){let l=this.hiringProcesses.find(r=>r.$selected);switch(l.hireStatus){case"progress":l.hireStatus="hired",this.poNotification.success("Hired candidate!");break;case"hired":this.poNotification.warning("This candidate has already been hired.");break;case"canceled":this.poNotification.error("This candidate has already been disqualified.");break}}hiringProcessesFilter(l){this.hiringProcessesFiltered=this.hiringProcesses.filter(r=>Object.keys(r).some(n=>!(r[n]instanceof Object)&&this.includeFilter(r[n],l)))}includeFilter(l,r){return r.some(n=>String(l).toLocaleLowerCase().includes(n.toLocaleLowerCase()))}onChangeDisclaimer(l){this.disclaimers=l,this.filter()}onClearDisclaimer(l){l.removedDisclaimer.property==="search"&&this.poPageList.clearInputSearch(),this.disclaimers=[],this.filter()}populateDisclaimers(l){let r=l.length>1?"advanced":"search";this.disclaimers=l.map(n=>({value:n,property:r})),this.disclaimers&&this.disclaimers.length>0?this.disclaimerGroup.disclaimers=[...this.disclaimers]:this.disclaimerGroup.disclaimers=[]}resetFilterHiringProcess(){this.hiringProcessesFiltered=[...this.hiringProcesses],this.status=[],this.jobDescription=[]}beforeRedirect(l){this.hiringProcesses.some(r=>r.$selected)?this.poDialog.confirm({title:`Confirm redirect to ${l}`,message:"There is data selected. Are you sure you want to quit?",confirm:()=>this.router.navigate(["/"])}):this.router.navigate(["/"])}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=f({type:s,selectors:[["sample-po-page-list-hiring-processes"]],viewQuery:function(r,n){if(r&1&&(N(Te,7),N(Fe,7)),r&2){let d;z(d=J())&&(n.advancedFilterModal=d.first),z(d=J())&&(n.poPageList=d.first)}},standalone:!1,features:[X([Y])],decls:9,vars:15,consts:[["poPageList",""],["advancedFilterModal",""],["f","ngForm"],["p-title","Hiring processes",3,"p-actions","p-breadcrumb","p-disclaimer-group","p-filter"],[3,"p-selectable","p-single-select","p-sort","p-striped","p-columns","p-items"],["p-title","Advanced filter",3,"p-primary-action"],["name","jobDescription","p-label","Job description",3,"ngModelChange","ngModel","p-options"],["name","status","p-label","Status",3,"ngModelChange","ngModel","p-options"]],template:function(r,n){if(r&1){let d=B();i(0,"po-page-list",3,0),o(2,"po-table",4),t(),i(3,"po-modal",5,1)(5,"form",null,2)(7,"po-multiselect",6),S("ngModelChange",function(a){return p(d),h(n.jobDescription,a)||(n.jobDescription=a),c(a)}),t(),i(8,"po-checkbox-group",7),S("ngModelChange",function(a){return p(d),h(n.status,a)||(n.status=a),c(a)}),t()()()}r&2&&(g("p-actions",n.actions)("p-breadcrumb",n.breadcrumb)("p-disclaimer-group",n.disclaimerGroup)("p-filter",n.filterSettings),m(2),g("p-selectable",!0)("p-single-select",!0)("p-sort",!0)("p-striped",!0)("p-columns",n.hiringProcessesColumns)("p-items",n.hiringProcessesFiltered),m(),g("p-primary-action",n.advancedFilterPrimaryAction),m(4),b("ngModel",n.jobDescription),g("p-options",n.jobDescriptionOptions),m(),b("ngModel",n.status),g("p-options",n.statusOptions))},dependencies:[G,H,V,O,j,W,se,ne,D,re],encapsulation:2})}return s})();var Be=s=>({"docs-sample-code-tabs":s}),fe=(()=>{class s{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=f({type:s,selectors:[["sample-po-page-list-hiring-processes-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(o(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Page List - Hiring Processes"),t(),i(4,"a",2),E("click",function(){return n.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.component.html"),t(),i(13,"pre",7),e(14,`<po-page-list
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
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit, ViewChild, inject } from '@angular/core';
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
  private sampleHiringProcessesService = inject(SamplePoPageListHiringProcessesService);
  private poNotification = inject(PoNotificationService);
  private poDialog = inject(PoDialogService);
  private router = inject(Router);

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
`),t()()()()(),i(25,"div",10),o(26,"sample-po-page-list-hiring-processes"),t(),o(27,"hr")),r&2&&(m(5),w("po-icon "+n.sampleCodeButtonIcon),m(),L(" ",n.sampleCodeButtonLabel,""),m(),g("ngClass",_(4,Be,n.hideSampleCodeTabs)))},dependencies:[M,y,v,x,Ee],encapsulation:2})}return s})();var Pe=(()=>{class s{static \u0275fac=function(r){return new(r||s)};static \u0275cmp=f({type:s,selectors:[["sample-po-page-list-doc"]],standalone:!1,decls:1175,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/icons"],["href","/documentation/po-disclaimer-group"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoPageAction>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoDisclaimerGroup"],["pan","",1,"docs-api-property-type","PoPageFilter"],["pan","",1,"docs-api-property-type","PoPageListLiterals"],["href","/documentation/po-i18n"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","Array<PoDisclaimer>"],["pan","",1,"docs-api-property-type","PoDisclaimer"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["pan","",1,"docs-api-property-type","number"]],template:function(r,n){r&1&&(i(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoPageModule } from '@po-ui/ng-components';"),t()(),i(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes po-page-default, po-page-detail, po-page-edit,
po-page-list e po-page-slide.`),t()(),i(7,"h3",3),e(8,"Componente"),t(),i(9,"h4",4)(10,"code",5),e(11,"PoPageListComponent"),t()(),i(12,"div",2)(13,"p"),e(14,"O componente "),i(15,"code"),e(16,"po-page-list"),t(),e(17,` \xE9 utilizado como o container principal para as telas de listagem de dados,
podendo ser apresentado como lista ou tabela.`),t(),i(18,"p"),e(19,`Este componente possibilita realizar filtro dos dados, no qual permite que seja atribuido uma fun\xE7\xE3o que ser\xE1 executada no momento
da filtragem. Este comportamento pode ser acionado tanto ao `),i(20,"em"),e(21,"click"),t(),e(22," do \xEDcone "),i(23,"a",6),e(24,"an-magnifying-glass"),t(),e(25,`
quanto ao pressionar da tecla `),i(26,"em"),e(27,"ENTER"),t(),e(28," quando o foco estiver no campo de pesquisa."),t(),i(29,"p"),e(30,`Para facilitar a manipula\xE7\xE3o e visualiza\xE7\xE3o dos filtros aplicados, \xE9 poss\xEDvel tamb\xE9m utilizar o componente
`),i(31,"a",7)(32,"code"),e(33,"po-disclaimer-group"),t()(),e(34,"."),t(),i(35,"h4"),e(36,"Tokens customiz\xE1veis"),t(),i(37,"blockquote")(38,"p"),e(39,"Para maiores informa\xE7\xF5es, acesse o guia "),i(40,"a",8),e(41,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(42,"."),t()(),i(43,"table")(44,"thead")(45,"tr")(46,"th"),e(47,"Propriedade"),t(),i(48,"th"),e(49,"Descri\xE7\xE3o"),t(),i(50,"th"),e(51,"Valor Padr\xE3o"),t()()(),i(52,"tbody")(53,"tr")(54,"td")(55,"strong"),e(56,"Header"),t()(),o(57,"td")(58,"td"),t(),i(59,"tr")(60,"td")(61,"code"),e(62,"--padding"),t()(),i(63,"td"),e(64,"Espa\xE7amento do header"),t(),i(65,"td")(66,"code"),e(67,"var(--spacing-xs) var(--spacing-md)"),t()()(),i(68,"tr")(69,"td")(70,"code"),e(71,"--gap"),t()(),i(72,"td"),e(73,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),t(),i(74,"td")(75,"code"),e(76,"var(--spacing-md)"),t()()(),i(77,"tr")(78,"td")(79,"code"),e(80,"--gap-actions"),t()(),i(81,"td"),e(82,"Espa\xE7amento entre as a\xE7\xF5es"),t(),i(83,"td")(84,"code"),e(85,"var(--spacing-xs)"),t()()(),i(86,"tr")(87,"td")(88,"code"),e(89,"--font-family"),t()(),i(90,"td"),e(91,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),t(),i(92,"td")(93,"code"),e(94,"var(--font-family-theme)"),t()()(),i(95,"tr")(96,"td")(97,"strong"),e(98,"Content"),t()(),o(99,"td")(100,"td"),t(),i(101,"tr")(102,"td")(103,"code"),e(104,"--padding-content"),t()(),i(105,"td"),e(106,"Espa\xE7amento do conte\xFAdo"),t(),i(107,"td")(108,"code"),e(109,"var(--spacing-xs) var(--spacing-sm)"),t()()()()()(),i(110,"div",9)(111,"h4",10),e(112,"Seletor"),t(),i(113,"pre",11),e(114,`<po-page-list
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
`),t()(),i(115,"h4",12),e(116,"Propriedades"),t(),i(117,"table",13)(118,"tr",14)(119,"th",15),e(120,"Nome"),t(),i(121,"th",15),e(122,"Tipo"),t(),i(123,"th",15),e(124,"Padr\xE3o"),t(),i(125,"th",15),e(126,"Descri\xE7\xE3o"),t()(),i(127,"tr",16)(128,"td",17)(129,"div",18)(130,"span",19),e(131," p-actions"),o(132,"br"),t()()(),i(133,"td",20)(134,"code",21),e(135,"Array<PoPageAction>"),t()(),i(136,"td",22),e(137,"-"),t(),i(138,"td",23)(139,"em")(140,"strong"),e(141,"(opcional)"),t()(),i(142,"p"),e(143,"Nesta propriedade deve ser definido um array de objetos que implementam a interface "),i(144,"code"),e(145,"PoPageAction"),t(),e(146,"."),t()()(),i(147,"tr",16)(148,"td",17)(149,"div",18)(150,"span",19),e(151," p-breadcrumb"),o(152,"br"),t()()(),i(153,"td",20)(154,"code",24),e(155,"PoBreadcrumb"),t()(),i(156,"td",22),e(157,"-"),t(),i(158,"td",23)(159,"em")(160,"strong"),e(161,"(opcional)"),t()(),i(162,"p"),e(163,"Objeto que implementa as propriedades da interface "),i(164,"code"),e(165,"PoBreadcrumb"),t(),e(166,"."),t()()(),i(167,"tr",16)(168,"td",17)(169,"div",18)(170,"span",19),e(171," p-components-size"),o(172,"br"),t()()(),i(173,"td",20)(174,"code",25),e(175,"string"),t()(),i(176,"td",22)(177,"p")(178,"code"),e(179,"medium"),t()()(),i(180,"td",23)(181,"em")(182,"strong"),e(183,"(opcional)"),t()(),i(184,"p"),e(185,"Define o tamanho dos componentes de formul\xE1rio no template:"),t(),i(186,"ul")(187,"li")(188,"code"),e(189,"small"),t(),e(190,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(191,"li")(192,"code"),e(193,"medium"),t(),e(194,": aplica a medida medium de cada componente."),t()(),i(195,"blockquote")(196,"p"),e(197,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(198,"code"),e(199,"medium"),t(),e(200,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(201,"a",26),e(202,"po-theme"),t(),e(203,"."),t()()()(),i(204,"tr",16)(205,"td",17)(206,"div",18)(207,"span",19),e(208," p-disclaimer-group"),o(209,"br"),t()()(),i(210,"td",20)(211,"code",27),e(212,"PoDisclaimerGroup"),t()(),i(213,"td",22),e(214,"-"),t(),i(215,"td",23)(216,"em")(217,"strong"),e(218,"(opcional)"),t()(),i(219,"p"),e(220,"Objeto que implementa as propriedades da interface "),i(221,"code"),e(222,"PoDisclaimerGroup"),t(),e(223,"."),t()()(),i(224,"tr",16)(225,"td",17)(226,"div",18)(227,"span",19),e(228," p-filter"),o(229,"br"),t()()(),i(230,"td",20)(231,"code",28),e(232,"PoPageFilter"),t()(),i(233,"td",22),e(234,"-"),t(),i(235,"td",23)(236,"p"),e(237,"Objeto que implementa as propriedades da interface "),i(238,"code"),e(239,"PoPageFilter"),t(),e(240,"."),t()()(),i(241,"tr",16)(242,"td",17)(243,"div",18)(244,"span",19),e(245," p-literals"),o(246,"br"),t()()(),i(247,"td",20)(248,"code",29),e(249,"PoPageListLiterals"),t()(),i(250,"td",22),e(251,"-"),t(),i(252,"td",23)(253,"em")(254,"strong"),e(255,"(opcional)"),t()(),i(256,"p"),e(257,"Objeto com as literais usadas no "),i(258,"code"),e(259,"po-page-list"),t(),e(260,"."),t(),i(261,"p"),e(262,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),t(),i(263,"pre")(264,"code"),e(265,`const customLiterals: PoPageListLiterals = {
  otherActions: 'Mais a\xE7\xF5es'
};
`),t()(),i(266,"p"),e(267,"Ou passando apenas as literais que deseja customizar:"),t(),i(268,"pre")(269,"code"),e(270,`const customLiterals: PoPageListLiterals = {
  otherActions: 'A\xE7\xF5es da p\xE1gina'
};
`),t()(),i(271,"p"),e(272,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),t(),i(273,"pre")(274,"code"),e(275,`<po-page-list
  [p-literals]="customLiterals">
</po-page-list>
`),t()(),i(276,"blockquote")(277,"p"),e(278,"O valor padr\xE3o ser\xE1 traduzido de acordo com o idioma configurado no "),i(279,"a",30)(280,"code"),e(281,"PoI18nService"),t()(),e(282," ou "),i(283,"em"),e(284,"browser"),t(),e(285,"."),t()()()(),i(286,"tr",16)(287,"td",17)(288,"div",18)(289,"span",19),e(290," p-quick-search-value"),o(291,"br"),t()()(),i(292,"td",20)(293,"code",25),e(294,"string"),t()(),i(295,"td",22),e(296,"-"),t(),i(297,"td",23)(298,"em")(299,"strong"),e(300,"(opcional)"),t()(),i(301,"p"),e(302,"Valor padr\xE3o na busca r\xE1pida ao inicializar o componente"),t()()(),i(303,"tr",16)(304,"td",17)(305,"div",18)(306,"span",19),e(307," p-subtitle"),o(308,"br"),t()()(),i(309,"td",20)(310,"code",25),e(311,"string"),t()(),i(312,"td",22),e(313,"-"),t(),i(314,"td",23)(315,"em")(316,"strong"),e(317,"(opcional)"),t()(),i(318,"p"),e(319,"Subtitulo do Header da p\xE1gina"),t()()(),i(320,"tr",16)(321,"td",17)(322,"div",18)(323,"span",19),e(324," p-title"),o(325,"br"),t()()(),i(326,"td",20)(327,"code",25),e(328,"string"),t()(),i(329,"td",22),e(330,"-"),t(),i(331,"td",23)(332,"p"),e(333,"T\xEDtulo da p\xE1gina."),t()()()(),i(334,"h3",12),e(335,"M\xE9todos"),t(),i(336,"table",31)(337,"tr",16)(338,"th",32)(339,"div",18)(340,"h4")(341,"span",19),e(342," clearInputSearch "),t()()()()(),i(343,"tr",23)(344,"td",23)(345,"p"),e(346,"Limpa o campo de pesquisa."),t()()()(),o(347,"br"),i(348,"h3"),e(349,"Interfaces"),t(),i(350,"h4",33)(351,"code",5),e(352,"PoBreadcrumbItem"),t()(),i(353,"div",2)(354,"p"),e(355,"Interface que define cada item do componente "),i(356,"strong"),e(357,"po-breadcrumb"),t(),e(358,"."),t()(),i(359,"h4",12),e(360,"Propriedades"),t(),i(361,"table",13)(362,"tr",14)(363,"th",15),e(364,"Nome"),t(),i(365,"th",15),e(366,"Tipo"),t(),i(367,"th",15),e(368,"Descri\xE7\xE3o"),t()(),i(369,"tr",16)(370,"td",17)(371,"div",18)(372,"span",19),e(373," action"),o(374,"br"),t()()(),i(375,"td",20)(376,"code",34),e(377,"Function"),t()(),i(378,"td",23)(379,"em")(380,"strong"),e(381,"(opcional)"),t()(),i(382,"p"),e(383,"A\xE7\xE3o executada ao clicar no item."),t(),i(384,"blockquote")(385,"p"),e(386,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),i(387,"em"),e(388,"label"),t(),e(389," do item como par\xE2metro para execu\xE7\xE3o."),t()()()(),i(390,"tr",16)(391,"td",17)(392,"div",18)(393,"span",19),e(394," label"),o(395,"br"),t()()(),i(396,"td",20)(397,"code",25),e(398,"string"),t()(),i(399,"td",23)(400,"p"),e(401,"R\xF3tulo do item."),t()()(),i(402,"tr",16)(403,"td",17)(404,"div",18)(405,"span",19),e(406," link"),o(407,"br"),t()()(),i(408,"td",20)(409,"code",25),e(410,"string"),t()(),i(411,"td",23)(412,"em")(413,"strong"),e(414,"(opcional)"),t()(),i(415,"p"),e(416,"Url do item."),t(),i(417,"blockquote")(418,"p"),e(419,"Caso o item tamb\xE9m contenha uma "),i(420,"em"),e(421,"action"),t(),e(422," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),i(423,"em"),e(424,"link"),t(),e(425,"."),t()(),i(426,"blockquote")(427,"p"),e(428,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),i(429,"strong")(430,"a",35),e(431,"Veja um exemplo de como criar rotas aqui"),t()(),e(432,"."),t()(),i(433,"blockquote")(434,"p"),e(435,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),i(436,"code"),e(437,"p-favorite-service"),t(),e(438," consiga favoritar ou desfavoritar."),t()()()()(),i(439,"h4",33)(440,"code",5),e(441,"PoBreadcrumb"),t()(),i(442,"div",2)(443,"p"),e(444,"Interface que define o "),i(445,"code"),e(446,"po-breadcrumb"),t(),e(447,"."),t()(),i(448,"h4",12),e(449,"Propriedades"),t(),i(450,"table",13)(451,"tr",14)(452,"th",15),e(453,"Nome"),t(),i(454,"th",15),e(455,"Tipo"),t(),i(456,"th",15),e(457,"Descri\xE7\xE3o"),t()(),i(458,"tr",16)(459,"td",17)(460,"div",18)(461,"span",19),e(462," favorite"),o(463,"br"),t()()(),i(464,"td",20)(465,"code",25),e(466,"string"),t()(),i(467,"td",23)(468,"em")(469,"strong"),e(470,"(opcional)"),t()(),i(471,"p"),e(472,"Permite definir uma URL para favoritar ou desfavoritar."),t(),i(473,"blockquote")(474,"p"),e(475,"Para maiores informa\xE7\xF5es verificar a propriedade "),i(476,"code"),e(477,"p-favorite-service"),t(),e(478," do componente "),i(479,"code"),e(480,"po-breadcrumb"),t(),e(481,"."),t()()()(),i(482,"tr",16)(483,"td",17)(484,"div",18)(485,"span",19),e(486," items"),o(487,"br"),t()()(),i(488,"td",20)(489,"code",36),e(490,"Array<PoBreadcrumbItem>"),t()(),i(491,"td",23)(492,"p"),e(493,"Lista de itens do "),i(494,"em"),e(495,"breadcrumb"),t(),e(496,"."),t(),i(497,"p")(498,"strong"),e(499,"Exemplo:"),t()(),i(500,"pre")(501,"code"),e(502,`{ label: 'Po Portal', link: 'portal' }
`),t()()()(),i(503,"tr",16)(504,"td",17)(505,"div",18)(506,"span",19),e(507," params"),o(508,"br"),t()()(),i(509,"td",20)(510,"code",37),e(511,"object"),t()(),i(512,"td",23)(513,"em")(514,"strong"),e(515,"(opcional)"),t()(),i(516,"p"),e(517,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),t()()()(),i(518,"h4",33)(519,"code",5),e(520,"PoDisclaimer"),t()(),i(521,"div",2)(522,"p"),e(523,"Interface que representa o objeto "),i(524,"code"),e(525,"po-disclaimer"),t(),e(526,"."),t()(),i(527,"h4",12),e(528,"Propriedades"),t(),i(529,"table",13)(530,"tr",14)(531,"th",15),e(532,"Nome"),t(),i(533,"th",15),e(534,"Tipo"),t(),i(535,"th",15),e(536,"Descri\xE7\xE3o"),t()(),i(537,"tr",16)(538,"td",17)(539,"div",18)(540,"span",19),e(541," hideClose"),o(542,"br"),t()()(),i(543,"td",20)(544,"code",38),e(545,"boolean"),t()(),i(546,"td",23)(547,"em")(548,"strong"),e(549,"(opcional)"),t()(),i(550,"p"),e(551,"Se verdadeiro, oculta o bot\xE3o para fechar o "),i(552,"em"),e(553,"disclaimer"),t(),e(554,"."),t()()(),i(555,"tr",16)(556,"td",17)(557,"div",18)(558,"span",19),e(559," label"),o(560,"br"),t()()(),i(561,"td",20)(562,"code",25),e(563,"string"),t()(),i(564,"td",23)(565,"em")(566,"strong"),e(567,"(opcional)"),t()(),i(568,"p"),e(569,"Texto de exibi\xE7\xE3o do objeto."),t()()(),i(570,"tr",16)(571,"td",17)(572,"div",18)(573,"span",19),e(574," property"),o(575,"br"),t()()(),i(576,"td",20)(577,"code",25),e(578,"string"),t()(),i(579,"td",23)(580,"em")(581,"strong"),e(582,"(opcional)"),t()(),i(583,"p"),e(584,"Nome da propriedade vinculada ao objeto "),i(585,"em"),e(586,"disclaimer"),t(),e(587,"."),t()()(),i(588,"tr",16)(589,"td",17)(590,"div",18)(591,"span",19),e(592," value"),o(593,"br"),t()()(),i(594,"td",20)(595,"code",39),e(596,"any"),t()(),i(597,"td",23)(598,"p"),e(599,"Valor do objeto."),t()()()(),i(600,"h4",33)(601,"code",5),e(602,"PoDisclaimerGroupRemoveAction"),t()(),i(603,"div",2)(604,"p"),e(605,"Estrutura do objeto representando o estado dos "),i(606,"em"),e(607,"disclaimers"),t(),e(608," ap\xF3s a remo\xE7\xE3o."),t()(),i(609,"h4",12),e(610,"Propriedades"),t(),i(611,"table",13)(612,"tr",14)(613,"th",15),e(614,"Nome"),t(),i(615,"th",15),e(616,"Tipo"),t(),i(617,"th",15),e(618,"Descri\xE7\xE3o"),t()(),i(619,"tr",16)(620,"td",17)(621,"div",18)(622,"span",19),e(623," currentDisclaimers"),o(624,"br"),t()()(),i(625,"td",20)(626,"code",40),e(627,"Array<PoDisclaimer>"),t()(),i(628,"td",23)(629,"p"),e(630,"Lista com os "),i(631,"em"),e(632,"disclaimers"),t(),e(633," atuais (restantes)."),t()()(),i(634,"tr",16)(635,"td",17)(636,"div",18)(637,"span",19),e(638," removedDisclaimer"),o(639,"br"),t()()(),i(640,"td",20)(641,"code",41),e(642,"PoDisclaimer"),t()(),i(643,"td",23)(644,"p")(645,"em"),e(646,"Disclaimer"),t(),e(647," que foi removido."),t()()()(),i(648,"h4",33)(649,"code",5),e(650,"PoDisclaimerGroup"),t()(),i(651,"div",2)(652,"p"),e(653,"Interface que representa o objeto "),i(654,"code"),e(655,"po-disclaimer-group"),t(),e(656,"."),t()(),i(657,"h4",12),e(658,"Propriedades"),t(),i(659,"table",13)(660,"tr",14)(661,"th",15),e(662,"Nome"),t(),i(663,"th",15),e(664,"Tipo"),t(),i(665,"th",15),e(666,"Descri\xE7\xE3o"),t()(),i(667,"tr",16)(668,"td",17)(669,"div",18)(670,"span",19),e(671," change"),o(672,"br"),t()()(),i(673,"td",20)(674,"code",34),e(675,"Function"),t()(),i(676,"td",23)(677,"em")(678,"strong"),e(679,"(opcional)"),t()(),i(680,"p"),e(681,"Fun\xE7\xE3o que ser\xE1 disparada quando a lista de "),i(682,"em"),e(683,"disclaimers"),t(),e(684,` for modificada.
Ser\xE1 passado por par\xE2metro a nova lista de `),i(685,"em"),e(686,"disclaimers"),t(),e(687,"."),t()()(),i(688,"tr",16)(689,"td",17)(690,"div",18)(691,"span",19),e(692," disclaimers"),o(693,"br"),t()()(),i(694,"td",20)(695,"code",40),e(696,"Array<PoDisclaimer>"),t()(),i(697,"td",23)(698,"p"),e(699,"Lista de "),i(700,"em"),e(701,"disclaimers"),t(),e(702,"."),t(),i(703,"p"),e(704,"Exemplo:"),t(),i(705,"pre")(706,"code"),e(707,`disclaimers: [
  { property: 'type', label: 'Hotel', value: 'hotel' },
  { property: 'cost', label: '$500,00', value: '500'  },
  { property: 'dates', label: '10/05/2018 - 15/05/2018', value: '10/05/2018|15/05/2018'  }
 ]
`),t()(),i(708,"p"),e(709,"Para que a lista de "),i(710,"em"),e(711,"disclaimers"),t(),e(712," seja atualizada dinamicamente deve-se passar uma nova refer\xEAncia do array de "),i(713,"code"),e(714,"PoDisclaimer"),t(),e(715,"."),t(),i(716,"p"),e(717,"Exemplo:"),t(),i(718,"pre")(719,"code"),e(720,`this.disclaimerGroup.disclaimers = [...this.disclaimers];
`),t()()()(),i(721,"tr",16)(722,"td",17)(723,"div",18)(724,"span",19),e(725," hideRemoveAll"),o(726,"br"),t()()(),i(727,"td",20)(728,"code",38),e(729,"boolean"),t()(),i(730,"td",23)(731,"em")(732,"strong"),e(733,"(opcional)"),t()(),i(734,"p"),e(735,"Oculta o bot\xE3o para remover todos os "),i(736,"em"),e(737,"disclaimers"),t(),e(738," do grupo."),t(),i(739,"blockquote")(740,"p"),e(741,"Por padr\xE3o, o mesmo \xE9 exibido \xE0 partir de dois ou mais "),i(742,"em"),e(743,"disclaimers"),t(),e(744," com a op\xE7\xE3o "),i(745,"code"),e(746,"hideClose"),t(),e(747," habilitada."),t()()()(),i(748,"tr",16)(749,"td",17)(750,"div",18)(751,"span",19),e(752," remove"),o(753,"br"),t()()(),i(754,"td",20)(755,"code",34),e(756,"Function"),t()(),i(757,"td",23)(758,"em")(759,"strong"),e(760,"(opcional)"),t()(),i(761,"p"),e(762,"Fun\xE7\xE3o que ser\xE1 disparada quando um "),i(763,"em"),e(764,"disclaimer"),t(),e(765,` for removido da lista de
`),i(766,"em"),e(767,"disclaimers"),t(),e(768," pelo usu\xE1rio."),t(),i(769,"p"),e(770,"Recebe como par\xE2metro um objeto conforme a interface "),i(771,"code"),e(772,"PoDisclaimerGroupRemoveAction"),t(),e(773,"."),t()()(),i(774,"tr",16)(775,"td",17)(776,"div",18)(777,"span",19),e(778," removeAll"),o(779,"br"),t()()(),i(780,"td",20)(781,"code",34),e(782,"Function"),t()(),i(783,"td",23)(784,"em")(785,"strong"),e(786,"(opcional)"),t()(),i(787,"p"),e(788,"Fun\xE7\xE3o que ser\xE1 disparada quando todos os "),i(789,"em"),e(790,"disclaimers"),t(),e(791," forem removidos da lista de "),i(792,"em"),e(793,"disclaimers"),t(),e(794,` pelo usu\xE1rio,
utilizando o bot\xE3o "remover todos".`),t(),i(795,"p"),e(796,"Recebe como par\xE2metro uma lista contendo todos os "),i(797,"code"),e(798,"disclaimers"),t(),e(799," removidos."),t()()(),i(800,"tr",16)(801,"td",17)(802,"div",18)(803,"span",19),e(804," title"),o(805,"br"),t()()(),i(806,"td",20)(807,"code",25),e(808,"string"),t()(),i(809,"td",23)(810,"em")(811,"strong"),e(812,"(opcional)"),t()(),i(813,"p"),e(814,"T\xEDtulo do grupo de "),i(815,"em"),e(816,"disclaimers"),t(),e(817,"."),t()()()(),i(818,"h4",33)(819,"code",5),e(820,"PoPageAction"),t()(),i(821,"div",2)(822,"p"),e(823,"Interface para as a\xE7\xF5es dos componentes po-page-default e po-page-list."),t(),i(824,"blockquote")(825,"p"),e(826,"As propriedades "),i(827,"code"),e(828,"selected"),t(),e(829,", "),i(830,"code"),e(831,"separator"),t(),e(832," e "),i(833,"code"),e(834,"type"),t(),e(835,` ser\xE3o vistas a partir da terceira a\xE7\xE3o e somente quando
definir quatro a\xE7\xF5es ou mais.`),t()()(),i(836,"h4",12),e(837,"Propriedades"),t(),i(838,"table",13)(839,"tr",14)(840,"th",15),e(841,"Nome"),t(),i(842,"th",15),e(843,"Tipo"),t(),i(844,"th",15),e(845,"Descri\xE7\xE3o"),t()(),i(846,"tr",16)(847,"td",17)(848,"div",18)(849,"span",19),e(850," action"),o(851,"br"),t()()(),i(852,"td",20)(853,"code",34),e(854,"Function"),t()(),i(855,"td",23)(856,"em")(857,"strong"),e(858,"(opcional)"),t()(),i(859,"p"),e(860,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),t(),i(861,"blockquote")(862,"p"),e(863,"Para que a fun\xE7\xE3o seja executada no contexto do elemento filho o mesmo deve ser passado utilizando "),i(864,"em"),e(865,"bind"),t(),e(866,"."),t()(),i(867,"p"),e(868,"Exemplo: "),i(869,"code"),e(870,"action: this.myFunction.bind(this)"),t()()()(),i(871,"tr",16)(872,"td",17)(873,"div",18)(874,"span",19),e(875," disabled"),o(876,"br"),t()()(),i(877,"td",20)(878,"code",38),e(879,"boolean "),t(),i(880,"code",34),e(881," Function"),t()(),i(882,"td",23)(883,"em")(884,"strong"),e(885,"(opcional)"),t()(),i(886,"p"),e(887,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),t(),i(888,"p"),e(889,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),t()()(),i(890,"tr",16)(891,"td",17)(892,"div",18)(893,"span",19),e(894," icon"),o(895,"br"),t()()(),i(896,"td",20)(897,"code",25),e(898,"string "),t(),i(899,"code",42),e(900," TemplateRef<void>"),t()(),i(901,"td",23)(902,"em")(903,"strong"),e(904,"(opcional)"),t()(),i(905,"p"),e(906,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),t(),i(907,"p"),e(908,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),i(909,"a",6),e(910,"Biblioteca de \xEDcones"),t(),e(911,". conforme exemplo abaixo:"),t(),i(912,"pre")(913,"code"),e(914,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),t()(),i(915,"p"),e(916,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),t(),i(917,"pre")(918,"code"),e(919,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),t()(),i(920,"p"),e(921,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),i(922,"code"),e(923,"TemplateRef"),t(),e(924,`, conforme exemplo abaixo:
component.html:`),t(),i(925,"pre")(926,"code"),e(927,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),t()(),i(928,"p"),e(929,"component.ts:"),t(),i(930,"pre")(931,"code"),e(932,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),t()()()(),i(933,"tr",16)(934,"td",17)(935,"div",18)(936,"span",19),e(937," label"),o(938,"br"),t()()(),i(939,"td",20)(940,"code",25),e(941,"string"),t()(),i(942,"td",23)(943,"p"),e(944,"R\xF3tulo da a\xE7\xE3o."),t()()(),i(945,"tr",16)(946,"td",17)(947,"div",18)(948,"span",19),e(949," selected"),o(950,"br"),t()()(),i(951,"td",20)(952,"code",38),e(953,"boolean"),t()(),i(954,"td",23)(955,"em")(956,"strong"),e(957,"(opcional)"),t()(),i(958,"p"),e(959,"Define se a a\xE7\xE3o est\xE1 selecionada."),t()()(),i(960,"tr",16)(961,"td",17)(962,"div",18)(963,"span",19),e(964," separator"),o(965,"br"),t()()(),i(966,"td",20)(967,"code",38),e(968,"boolean"),t()(),i(969,"td",23)(970,"em")(971,"strong"),e(972,"(opcional)"),t()(),i(973,"p"),e(974,"Atribui uma linha separadora acima do item."),t()()(),i(975,"tr",16)(976,"td",17)(977,"div",18)(978,"span",19),e(979," type"),o(980,"br"),t()()(),i(981,"td",20)(982,"code",25),e(983,"string"),t()(),i(984,"td",23)(985,"em")(986,"strong"),e(987,"(opcional)"),t()(),i(988,"p"),e(989,"Define a cor do item, sendo "),i(990,"code"),e(991,"default"),t(),e(992," o padr\xE3o."),t(),i(993,"p"),e(994,"Valores v\xE1lidos:"),t(),i(995,"ul")(996,"li")(997,"code"),e(998,"default"),t()(),i(999,"li")(1e3,"code"),e(1001,"danger"),t(),e(1002," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),t()()()(),i(1003,"tr",16)(1004,"td",17)(1005,"div",18)(1006,"span",19),e(1007," url"),o(1008,"br"),t()()(),i(1009,"td",20)(1010,"code",25),e(1011,"string"),t()(),i(1012,"td",23)(1013,"em")(1014,"strong"),e(1015,"(opcional)"),t()(),i(1016,"p"),e(1017,"URL utilizada no redirecionamento das p\xE1ginas."),t()()(),i(1018,"tr",16)(1019,"td",17)(1020,"div",18)(1021,"span",19),e(1022," visible"),o(1023,"br"),t()()(),i(1024,"td",20)(1025,"code",38),e(1026,"boolean "),t(),i(1027,"code",34),e(1028," Function"),t()(),i(1029,"td",23)(1030,"em")(1031,"strong"),e(1032,"(opcional)"),t()(),i(1033,"p"),e(1034,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),t(),i(1035,"blockquote")(1036,"p"),e(1037,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),t()(),i(1038,"p"),e(1039,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),t(),i(1040,"ul")(1041,"li")(1042,"p"),e(1043,"Fun\xE7\xE3o que deve retornar um booleano."),t()(),i(1044,"li")(1045,"p"),e(1046,"Informar diretamente um valor booleano."),t()()()()()(),i(1047,"h4",33)(1048,"code",5),e(1049,"PoPageFilter"),t()(),i(1050,"div",2)(1051,"p"),e(1052,"Interface para o atributo "),i(1053,"code"),e(1054,"filter"),t(),e(1055," do componente "),i(1056,"code"),e(1057,"po-page-list"),t(),e(1058,"."),t()(),i(1059,"h4",12),e(1060,"Propriedades"),t(),i(1061,"table",13)(1062,"tr",14)(1063,"th",15),e(1064,"Nome"),t(),i(1065,"th",15),e(1066,"Tipo"),t(),i(1067,"th",15),e(1068,"Descri\xE7\xE3o"),t()(),i(1069,"tr",16)(1070,"td",17)(1071,"div",18)(1072,"span",19),e(1073," action"),o(1074,"br"),t()()(),i(1075,"td",20)(1076,"code",34),e(1077,"Function"),t()(),i(1078,"td",23)(1079,"em")(1080,"strong"),e(1081,"(opcional)"),t()(),i(1082,"p"),e(1083,"A\xE7\xE3o a ser executada."),t()()(),i(1084,"tr",16)(1085,"td",17)(1086,"div",18)(1087,"span",19),e(1088," advancedAction"),o(1089,"br"),t()()(),i(1090,"td",20)(1091,"code",34),e(1092,"Function"),t()(),i(1093,"td",23)(1094,"em")(1095,"strong"),e(1096,"(opcional)"),t()(),i(1097,"p"),e(1098,`A\xE7\xE3o a ser executada quando for disparado o
evento de `),i(1099,"em"),e(1100,"click"),t(),e(1101," atrav\xE9s do r\xF3tulo "),i(1102,"strong"),e(1103,"Busca Avan\xE7ada"),t(),e(1104,"."),t()()(),i(1105,"tr",16)(1106,"td",17)(1107,"div",18)(1108,"span",19),e(1109," placeholder"),o(1110,"br"),t()()(),i(1111,"td",20)(1112,"code",25),e(1113,"string"),t()(),i(1114,"td",23)(1115,"em")(1116,"strong"),e(1117,"(opcional)"),t()(),i(1118,"p"),e(1119,"Texto de instru\xE7\xE3o exibido dentro do campo de filtro."),t()()(),i(1120,"tr",16)(1121,"td",17)(1122,"div",18)(1123,"span",19),e(1124," width"),o(1125,"br"),t()()(),i(1126,"td",20)(1127,"code",43),e(1128,"number"),t()(),i(1129,"td",23)(1130,"em")(1131,"strong"),e(1132,"(opcional)"),t()(),i(1133,"p"),e(1134,"Tamanho do filtro em tela, utilizando o "),i(1135,"em"),e(1136,"Grid System"),t(),e(1137,`,
e limitado ao m\xE1ximo de 6 colunas. O tamanho m\xEDnimo \xE9 controlado
conforme resolu\xE7\xE3o de tela para manter a consist\xEAncia do layout.`),t()()()(),i(1138,"h4",33)(1139,"code",5),e(1140,"PoPageListLiterals"),t()(),i(1141,"div",2)(1142,"p"),e(1143,"Interface para defini\xE7\xE3o das literais usadas no "),i(1144,"code"),e(1145,"po-page-list"),t(),e(1146,"."),t()(),i(1147,"h4",12),e(1148,"Propriedades"),t(),i(1149,"table",13)(1150,"tr",14)(1151,"th",15),e(1152,"Nome"),t(),i(1153,"th",15),e(1154,"Tipo"),t(),i(1155,"th",15),e(1156,"Descri\xE7\xE3o"),t()(),i(1157,"tr",16)(1158,"td",17)(1159,"div",18)(1160,"span",19),e(1161," otherActions"),o(1162,"br"),t()()(),i(1163,"td",20)(1164,"code",25),e(1165,"string"),t()(),i(1166,"td",23)(1167,"em")(1168,"strong"),e(1169,"(opcional)"),t()(),i(1170,"p"),e(1171,"Legenda do "),i(1172,"code"),e(1173,"po-dropdown"),t(),e(1174," de a\xE7\xF5es."),t()()()()())},dependencies:[y],encapsulation:2})}return s})();var ve=(()=>{class s{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||s)(R($),R(I))};static \u0275cmp=f({type:s,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Page List",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,n){r&1&&(i(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),E("p-click",function(){return n.changeTab("doc")}),o(3,"sample-po-page-list-doc"),t(),i(4,"po-tab",3),E("p-click",function(){return n.changeTab("web")}),o(5,"sample-po-page-list-basic-view")(6,"sample-po-page-list-labs-view")(7,"sample-po-page-list-hiring-processes-view"),t()()()),r&2&&(g("p-actions",n.actions),m(2),g("p-active",n.activeTab==="doc"),m(2),g("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[pe,v,x,be,Se,fe,Pe],encapsulation:2})}return s})();var je=[{path:"",component:ve}],xe=(()=>{class s{static \u0275fac=function(r){return new(r||s)};static \u0275mod=k({type:s});static \u0275inj=F({imports:[U.forChild(je),U]})}return s})();var Et=(()=>{class s{static \u0275fac=function(r){return new(r||s)};static \u0275mod=k({type:s});static \u0275inj=F({imports:[ce,xe]})}return s})();export{Et as DocPoPageListModule};
