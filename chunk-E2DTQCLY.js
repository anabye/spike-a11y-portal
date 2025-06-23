import{o as y,p as le}from"./chunk-NZDLCIN5.js";import{Aa as te,Ab as w,Db as oe,F as Z,Fa as ne,Ga as ie,I as W,Ra as ae,T as z,ha as $,ja as ee,nb as x,zb as C}from"./chunk-QREE5W46.js";import{$a as g,Ac as N,Ba as D,Ea as n,Fa as e,Ga as r,Ka as B,L as Q,La as E,M as A,Nc as X,Pc as Y,Rc as U,T as s,Ta as R,U as c,Ua as H,Va as G,Wa as I,Xa as t,Za as _,ab as f,bb as h,cb as K,eb as M,ha as m,ia as v,oa as S,pa as L,ub as T,wc as O,xc as V,ya as u,yc as F,zc as q}from"./chunk-MIQUIDUB.js";var re=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-page-default-basic"]],standalone:!1,decls:1,vars:0,consts:[["p-title","PO Page Default"]],template:function(l,i){l&1&&r(0,"po-page-default",0)},dependencies:[x],encapsulation:2})}return o})();var Se=o=>({"docs-sample-code-tabs":o}),pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-page-default-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(r(0,"br"),n(1,"blockquote",0)(2,"label",1),t(3,"PO Page Default Basic"),e(),n(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),t(6),e()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-page-default-basic/sample-po-page-default-basic.component.html"),e(),n(13,"pre",7),t(14,`<po-page-default p-title="PO Page Default"> </po-page-default>
`),e()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-page-default-basic/sample-po-page-default-basic.component.ts"),e(),n(19,"pre",9),t(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-page-default-basic',
  templateUrl: './sample-po-page-default-basic.component.html',
  standalone: false
})
export class SamplePoPageDefaultBasicComponent {}
`),e()()()()(),n(21,"div",10),r(22,"sample-po-page-default-basic"),e(),r(23,"hr")),l&2&&(m(5),D("po-icon "+i.sampleCodeButtonIcon),m(),_(" ",i.sampleCodeButtonLabel,""),m(),u("ngClass",M(4,Se,i.hideSampleCodeTabs)))},dependencies:[T,y,C,w,re],encapsulation:2})}return o})();var de=(()=>{class o{poNotification;action;actions;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;literals;title;subtitle;actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{value:"fa fa-podcast",label:"fa fa-podcast"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];constructor(p){this.poNotification=p}ngOnInit(){this.restore()}addAction(p){let l=Object.assign({},p);l.action=l.action?this.showAction.bind(this,l.action):void 0,this.actions=[...this.actions,l],this.restoreActionForm()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0}}addBreadcrumbParam(){let p={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,p):this.breadcrumb.params=p,this.breadcrumbParams={}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}restore(){this.actions=[],this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize="medium",this.literals="",this.title="PO Page Default",this.subtitle="",this.restoreActionForm()}restoreActionForm(){this.action={label:void 0,visible:null}}showAction(p){this.poNotification.success(`Action clicked: ${p}`)}static \u0275fac=function(l){return new(l||o)(v(z))};static \u0275cmp=S({type:o,selectors:[["sample-po-page-default-labs"]],standalone:!1,decls:43,vars:28,consts:[["formAction","ngForm"],["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],["formPage","ngForm"],[3,"p-actions","p-breadcrumb","p-components-size","p-literals","p-title","p-subtitle"],[1,"po-row"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-6",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","action","p-columns","4","p-indeterminate","","p-label","Action properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Add Action",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","title","p-label","Title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: {"otherActions": "Mais a\xE7\xF5es"}',"p-label","Literals",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,i){if(l&1){let d=B();r(0,"po-page-default",5)(1,"hr"),n(2,"form",null,0)(4,"div",6)(5,"po-input",7),h("ngModelChange",function(a){return s(d),f(i.action.action,a)||(i.action.action=a),c(a)}),e(),n(6,"po-input",8),h("ngModelChange",function(a){return s(d),f(i.action.label,a)||(i.action.label=a),c(a)}),e(),n(7,"po-input",9),h("ngModelChange",function(a){return s(d),f(i.action.url,a)||(i.action.url=a),c(a)}),e(),n(8,"po-select",10),h("ngModelChange",function(a){return s(d),f(i.action.type,a)||(i.action.type=a),c(a)}),e(),n(9,"po-select",11),h("ngModelChange",function(a){return s(d),f(i.action.icon,a)||(i.action.icon=a),c(a)}),e(),n(10,"po-checkbox-group",12),h("ngModelChange",function(a){return s(d),f(i.action,a)||(i.action=a),c(a)}),e()(),n(11,"div",6)(12,"po-button",13),E("p-click",function(){return s(d),c(i.addAction(i.action))}),e()()(),r(13,"hr"),n(14,"form",null,1)(16,"div",6)(17,"po-input",14),h("ngModelChange",function(a){return s(d),f(i.breadcrumb.favorite,a)||(i.breadcrumb.favorite=a),c(a)}),e()()(),n(18,"form",null,2)(20,"div",6)(21,"po-input",15),h("ngModelChange",function(a){return s(d),f(i.breadcrumbItem.label,a)||(i.breadcrumbItem.label=a),c(a)}),e(),n(22,"po-input",16),h("ngModelChange",function(a){return s(d),f(i.breadcrumbItem.link,a)||(i.breadcrumbItem.link=a),c(a)}),e()(),n(23,"div",6)(24,"po-button",17),E("p-click",function(){return s(d),c(i.addBreadcrumbItem())}),e()()(),r(25,"hr"),n(26,"form",null,3)(28,"div",6)(29,"po-input",18),h("ngModelChange",function(a){return s(d),f(i.breadcrumbParams.property,a)||(i.breadcrumbParams.property=a),c(a)}),e(),n(30,"po-input",19),h("ngModelChange",function(a){return s(d),f(i.breadcrumbParams.value,a)||(i.breadcrumbParams.value=a),c(a)}),e()(),n(31,"div",6)(32,"po-button",20),E("p-click",function(){return s(d),c(i.addBreadcrumbParam())}),e()()(),r(33,"hr"),n(34,"form",null,4)(36,"div",6)(37,"po-input",21),h("ngModelChange",function(a){return s(d),f(i.title,a)||(i.title=a),c(a)}),e(),n(38,"po-input",22),h("ngModelChange",function(a){return s(d),f(i.subtitle,a)||(i.subtitle=a),c(a)}),e(),n(39,"po-input",23),h("ngModelChange",function(a){return s(d),f(i.literals,a)||(i.literals=a),c(a)}),E("p-change",function(){return s(d),c(i.changeLiterals())}),e(),n(40,"po-radio-group",24),h("ngModelChange",function(a){return s(d),f(i.componentsSize,a)||(i.componentsSize=a),c(a)}),e()(),n(41,"div",6)(42,"po-button",25),E("p-click",function(){return s(d),c(i.restore())}),e()()()}if(l&2){let d=I(3),b=I(19),a=I(27);u("p-actions",i.actions)("p-breadcrumb",i.breadcrumb)("p-components-size",i.componentsSize)("p-literals",i.customLiterals)("p-title",i.title)("p-subtitle",i.subtitle),m(5),g("ngModel",i.action.action),m(),g("ngModel",i.action.label),m(),g("ngModel",i.action.url),m(),g("ngModel",i.action.type),u("p-options",i.typeOptions),m(),g("ngModel",i.action.icon),u("p-options",i.iconOptions),m(),g("ngModel",i.action),u("p-options",i.actionOptions),m(2),u("p-disabled",d.form.invalid),m(5),g("ngModel",i.breadcrumb.favorite),m(4),g("ngModel",i.breadcrumbItem.label),m(),g("ngModel",i.breadcrumbItem.link),m(2),u("p-disabled",b.invalid),m(5),g("ngModel",i.breadcrumbParams.property),m(),g("ngModel",i.breadcrumbParams.value),m(2),u("p-disabled",a.invalid),m(5),g("ngModel",i.title),m(),g("ngModel",i.subtitle),m(),g("ngModel",i.literals),m(),g("ngModel",i.componentsSize),u("p-options",i.componentsSizeOptions)}},dependencies:[N,O,V,q,F,Z,$,ee,ie,ae,x],encapsulation:2})}return o})();var xe=o=>({"docs-sample-code-tabs":o}),se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-page-default-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(r(0,"br"),n(1,"blockquote",0)(2,"label",1),t(3,"PO Page Default Labs"),e(),n(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),t(6),e()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-page-default-labs/sample-po-page-default-labs.component.html"),e(),n(13,"pre",7),t(14,`<po-page-default
  [p-actions]="actions"
  [p-breadcrumb]="breadcrumb"
  [p-components-size]="componentsSize"
  [p-literals]="customLiterals"
  [p-title]="title"
  [p-subtitle]="subtitle"
>
</po-page-default>

<hr />

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
      class="po-lg-2 po-md-4"
      p-label="Add Action"
      [p-disabled]="formAction.form.invalid"
      (p-click)="addAction(action)"
    >
    </po-button>
  </div>
</form>

<hr />

<form #formBreadcrumbFavorite="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
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

<hr />

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

<hr />

<form #formPage="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="title" [(ngModel)]="title" p-label="Title" p-required> </po-input>
    <po-input class="po-md-6" name="subtitle" [(ngModel)]="subtitle" p-label="Subtitle"> </po-input>

    <po-input
      class="po-md-6"
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
  </div>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),e()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-page-default-labs/sample-po-page-default-labs.component.ts"),e(),n(19,"pre",9),t(20,`import { Component, OnInit } from '@angular/core';

import {
  PoBreadcrumb,
  PoBreadcrumbItem,
  PoCheckboxGroupOption,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

import { PoNotificationService, PoPageAction, PoPageDefaultLiterals } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-default-labs',
  templateUrl: './sample-po-page-default-labs.component.html',
  standalone: false
})
export class SamplePoPageDefaultLabsComponent implements OnInit {
  action: PoPageAction;
  actions: Array<PoPageAction>;
  breadcrumb: PoBreadcrumb;
  breadcrumbItem: PoBreadcrumbItem;
  breadcrumbParams: any;
  componentsSize: string;
  customLiterals: PoPageDefaultLiterals;
  literals: string;
  title: string;
  subtitle: string;

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

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  restore() {
    this.actions = [];
    this.breadcrumb = { items: [] };
    this.breadcrumbItem = { label: undefined, link: undefined };
    this.breadcrumbParams = {};
    this.componentsSize = 'medium';
    this.literals = '';
    this.title = 'PO Page Default';
    this.subtitle = '';
    this.restoreActionForm();
  }

  restoreActionForm() {
    this.action = {
      label: undefined,
      visible: null
    };
  }

  showAction(label: string): void {
    this.poNotification.success(\`Action clicked: \${label}\`);
  }
}
`),e()()()()(),n(21,"div",10),r(22,"sample-po-page-default-labs"),e(),r(23,"hr")),l&2&&(m(5),D("po-icon "+i.sampleCodeButtonIcon),m(),_(" ",i.sampleCodeButtonLabel,""),m(),u("ngClass",M(4,xe,i.hideSampleCodeTabs)))},dependencies:[T,y,C,w,de],encapsulation:2})}return o})();var j=(()=>{class o{getColumns(){return[{property:"cities",label:"Cities that most downloaded PO"},{property:"package",label:"Package version"},{property:"downloads",label:"Downloads"}]}getItems(){return[{cities:"S\xE3o Paulo",package:"2.0.0-beta.2",downloads:"2000"},{cities:"Joinville",package:"1.9.1",downloads:"1000"},{cities:"Rio de Janeiro",package:"2.0.0-beta.2",downloads:"250"},{cities:"Santa Catarina",package:"1.9.1",downloads:"100"},{cities:"Curitiba",package:"2.0.0-beta.2",downloads:"1040"},{cities:"Goiania",package:"1.9.1",downloads:"250"},{cities:"Londrina",package:"1.9.1",downloads:"35"},{cities:"Belo Horizonte",package:"1.9.1",downloads:"1100"}]}static \u0275fac=function(l){return new(l||o)};static \u0275prov=Q({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var ye=["formShare"],ce=(()=>{class o{poNotification;sampleDashboardService;formShare;poModal;columns;email=void 0;isSubscribed=!1;items;actions=[{label:"Share",action:this.modalOpen.bind(this),icon:"an an-share"},{label:"GitHub",url:"https://github.com/po-ui/po-angular"},{label:"Components",url:"/documentation"},{label:"Disable notification",action:this.disableNotification.bind(this),disabled:()=>this.isSubscribed}];breadcrumb={items:[{label:"Home",link:"/"},{label:"Dashboard"}]};cancelAction={action:()=>{this.modalClose()},label:"Cancel"};shareAction={action:()=>{this.share()},label:"Share"};constructor(p,l){this.poNotification=p,this.sampleDashboardService=l}ngOnInit(){this.columns=this.sampleDashboardService.getColumns(),this.items=this.sampleDashboardService.getItems()}modalClose(){this.poModal.close(),this.formShare.reset()}modalOpen(){this.poModal.open()}share(){this.formShare.valid?this.poNotification.success(`Webpage shared successfully to: ${this.email}.`):this.poNotification.error("Email invalid."),this.modalClose()}disableNotification(){this.isSubscribed=!0}static \u0275fac=function(l){return new(l||o)(v(z),v(j))};static \u0275cmp=S({type:o,selectors:[["sample-po-page-default-dashboard"]],viewQuery:function(l,i){if(l&1&&(R(ye,7),R(W,7)),l&2){let d;H(d=G())&&(i.formShare=d.first),H(d=G())&&(i.poModal=d.first)}},standalone:!1,features:[K([j])],decls:38,vars:8,consts:[["formShare","ngForm"],["p-title","Dashboard",3,"p-actions","p-breadcrumb"],[1,"po-row"],["p-title","Daily visitors",1,"po-md-6","po-lg-4","po-mb-2"],[1,"po-font-subtitle","po-text-center"],[1,"po-text-center","sample-widget-text-subtitle"],["p-title","Most viewed page",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","Website status",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","NPM downloads",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","Devforum PO questions",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","Angular versions supported",1,"po-md-6","po-lg-4","po-mb-2"],[3,"p-columns","p-items","p-hide-table-search"],["p-title","Share webpage",3,"p-primary-action","p-secondary-action"],["name","email","p-clean","","p-label","Type an e-mail for sharing webpage: http://www.po.com.br","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"]],template:function(l,i){if(l&1){let d=B();n(0,"po-page-default",1)(1,"div",2)(2,"po-widget",3)(3,"div",4),t(4,"540"),e(),n(5,"div",5),t(6,"www.po.com.br"),e()(),n(7,"po-widget",6)(8,"div",4),t(9,"300 views"),e(),n(10,"div",5),t(11,"https://po-ui.io"),e()(),n(12,"po-widget",7)(13,"div",4),t(14,"Online"),e(),n(15,"div",5),t(16,"28 days"),e()(),n(17,"po-widget",8)(18,"div",4),t(19,"266"),e(),n(20,"div",5),t(21,"@po-ui/ng-components - 1.10.1"),e()(),n(22,"po-widget",9)(23,"div",4),t(24,"800 questions"),e(),n(25,"div",5),t(26,"https://devforum.po.com.br"),e()(),n(27,"po-widget",10)(28,"div",4),t(29,"AngularJS - Angular 6"),e(),n(30,"div",5),t(31,"Angular 6 most downloaded"),e()()(),r(32,"hr")(33,"po-table",11),e(),n(34,"po-modal",12)(35,"form",null,0)(37,"po-email",13),h("ngModelChange",function(a){return s(d),f(i.email,a)||(i.email=a),c(a)}),e()()()}l&2&&(u("p-actions",i.actions)("p-breadcrumb",i.breadcrumb),m(33),u("p-columns",i.columns)("p-items",i.items)("p-hide-table-search",!1),m(),u("p-primary-action",i.shareAction)("p-secondary-action",i.cancelAction),m(3),g("ngModel",i.email))},dependencies:[N,O,V,q,F,ne,W,x,te,oe],styles:[".sample-widget-text-subtitle[_ngcontent-%COMP%]{font-family:NunitoSans;font-size:14px;text-align:center;color:#9da7a9}"]})}return o})();var _e=o=>({"docs-sample-code-tabs":o}),ue=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-page-default-dashboard-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(r(0,"br"),n(1,"blockquote",0)(2,"label",1),t(3,"PO Page Default - Dashboard"),e(),n(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),t(6),e()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.html"),e(),n(13,"pre",7),t(14,`<po-page-default p-title="Dashboard" [p-actions]="actions" [p-breadcrumb]="breadcrumb">
  <div class="po-row">
    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Daily visitors">
      <div class="po-font-subtitle po-text-center">540</div>
      <div class="po-text-center sample-widget-text-subtitle">www.po.com.br</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Most viewed page">
      <div class="po-font-subtitle po-text-center">300 views</div>
      <div class="po-text-center sample-widget-text-subtitle">https://po-ui.io</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Website status">
      <div class="po-font-subtitle po-text-center">Online</div>
      <div class="po-text-center sample-widget-text-subtitle">28 days</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="NPM downloads">
      <div class="po-font-subtitle po-text-center">266</div>
      <div class="po-text-center sample-widget-text-subtitle">&#64;po-ui/ng-components - 1.10.1</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Devforum PO questions">
      <div class="po-font-subtitle po-text-center">800 questions</div>
      <div class="po-text-center sample-widget-text-subtitle">https://devforum.po.com.br</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Angular versions supported">
      <div class="po-font-subtitle po-text-center">AngularJS - Angular 6</div>
      <div class="po-text-center sample-widget-text-subtitle">Angular 6 most downloaded</div>
    </po-widget>
  </div>

  <hr />

  <po-table [p-columns]="columns" [p-items]="items" [p-hide-table-search]="false"> </po-table>
</po-page-default>

<po-modal p-title="Share webpage" [p-primary-action]="shareAction" [p-secondary-action]="cancelAction">
  <form #formShare="ngForm">
    <po-email
      class="po-lg-12"
      name="email"
      [(ngModel)]="email"
      p-clean
      p-label="Type an e-mail for sharing webpage: http://www.po.com.br"
      p-required
    >
    </po-email>
  </form>
</po-modal>
`),e()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.ts"),e(),n(19,"pre",9),t(20,`import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoBreadcrumb } from '@po-ui/ng-components';
import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { PoNotificationService } from '@po-ui/ng-components';
import { PoPageAction } from '@po-ui/ng-components';
import { PoTableColumn } from '@po-ui/ng-components';

import { SampleDashboardService } from './sample-po-page-default-dashboard.service';

@Component({
  selector: 'sample-po-page-default-dashboard',
  templateUrl: './sample-po-page-default-dashboard.component.html',
  styles: [
    \`
      .sample-widget-text-subtitle {
        font-family: NunitoSans;
        font-size: 14px;
        text-align: center;
        color: #9da7a9;
      }
    \`
  ],
  providers: [SampleDashboardService],
  standalone: false
})
export class SamplePoPageDefaultDashboardComponent implements OnInit {
  @ViewChild('formShare', { static: true }) formShare: NgForm;
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  columns: Array<PoTableColumn>;
  email: string = undefined;
  isSubscribed: boolean = false;
  items: Array<object>;

  public readonly actions: Array<PoPageAction> = [
    { label: 'Share', action: this.modalOpen.bind(this), icon: 'an an-share' },
    { label: 'GitHub', url: 'https://github.com/po-ui/po-angular' },
    { label: 'Components', url: '/documentation' },
    { label: 'Disable notification', action: this.disableNotification.bind(this), disabled: () => this.isSubscribed }
  ];

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Dashboard' }]
  };

  public readonly cancelAction: PoModalAction = {
    action: () => {
      this.modalClose();
    },
    label: 'Cancel'
  };

  public readonly shareAction: PoModalAction = {
    action: () => {
      this.share();
    },
    label: 'Share'
  };

  constructor(
    private poNotification: PoNotificationService,
    private sampleDashboardService: SampleDashboardService
  ) {}

  ngOnInit(): void {
    this.columns = this.sampleDashboardService.getColumns();
    this.items = this.sampleDashboardService.getItems();
  }

  modalClose() {
    this.poModal.close();
    this.formShare.reset();
  }

  modalOpen() {
    this.poModal.open();
  }

  share() {
    if (this.formShare.valid) {
      this.poNotification.success(\`Webpage shared successfully to: \${this.email}.\`);
    } else {
      this.poNotification.error(\`Email invalid.\`);
    }
    this.modalClose();
  }

  private disableNotification() {
    this.isSubscribed = true;
  }
}
`),e(),n(21,"label",6),t(22,"sample-po-page-default-dashboard/sample-po-page-default-dashboard.service.ts"),e(),n(23,"pre",9),t(24,`import { Injectable } from '@angular/core';

import { PoTableColumn } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SampleDashboardService {
  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'cities', label: 'Cities that most downloaded PO' },
      { property: 'package', label: 'Package version' },
      { property: 'downloads', label: 'Downloads' }
    ];
  }

  getItems() {
    return [
      { cities: 'S\xE3o Paulo', package: '2.0.0-beta.2', downloads: '2000' },
      { cities: 'Joinville', package: '1.9.1', downloads: '1000' },
      { cities: 'Rio de Janeiro', package: '2.0.0-beta.2', downloads: '250' },
      { cities: 'Santa Catarina', package: '1.9.1', downloads: '100' },
      { cities: 'Curitiba', package: '2.0.0-beta.2', downloads: '1040' },
      { cities: 'Goiania', package: '1.9.1', downloads: '250' },
      { cities: 'Londrina', package: '1.9.1', downloads: '35' },
      { cities: 'Belo Horizonte', package: '1.9.1', downloads: '1100' }
    ];
  }
}
`),e()()()()(),n(25,"div",10),r(26,"sample-po-page-default-dashboard"),e(),r(27,"hr")),l&2&&(m(5),D("po-icon "+i.sampleCodeButtonIcon),m(),_(" ",i.sampleCodeButtonLabel,""),m(),u("ngClass",M(4,_e,i.hideSampleCodeTabs)))},dependencies:[T,y,C,w,ce],encapsulation:2})}return o})();var be=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-page-default-doc"]],standalone:!1,decls:714,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoPageAction>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoPageDefaultLiterals"],["href","/documentation/po-i18n"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"]],template:function(l,i){l&1&&(n(0,"div",0)(1,"p",1)(2,"code"),t(3,"import { PoPageModule } from '@po-ui/ng-components';"),e()(),n(4,"div",2)(5,"p"),t(6,`M\xF3dulo dos componentes po-page-default, po-page-detail, po-page-edit,
po-page-list e po-page-slide.`),e()(),n(7,"h3",3),t(8,"Componente"),e(),n(9,"h4",4)(10,"code",5),t(11,"PoPageDefaultComponent"),e()(),n(12,"div",2)(13,"p"),t(14,"O componente "),n(15,"code"),t(16,"po-page-default"),e(),t(17," \xE9 utilizado como o container principal para as telas sem um template definido."),e(),n(18,"h4"),t(19,"Tokens customiz\xE1veis"),e(),n(20,"blockquote")(21,"p"),t(22,"Para maiores informa\xE7\xF5es, acesse o guia "),n(23,"a",6),t(24,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),t(25,"."),e()(),n(26,"table")(27,"thead")(28,"tr")(29,"th"),t(30,"Propriedade"),e(),n(31,"th"),t(32,"Descri\xE7\xE3o"),e(),n(33,"th"),t(34,"Valor Padr\xE3o"),e(),r(35,"th"),e()(),n(36,"tbody")(37,"tr")(38,"td")(39,"strong"),t(40,"Header"),e()(),r(41,"td")(42,"td")(43,"td"),e(),n(44,"tr")(45,"td")(46,"code"),t(47,"--padding"),e()(),n(48,"td"),t(49,"Espa\xE7amento (top "),n(50,"code"),t(51,"@deprecated 20.x.x"),e(),t(52,", right, bottom "),n(53,"code"),t(54,"@deprecated 20.x.x"),e(),t(55,", left)"),e(),n(56,"td")(57,"code"),t(58,"0.5rem (@deprecated 20.x.x) 1.5rem"),e()(),r(59,"td"),e(),n(60,"tr")(61,"td")(62,"code"),t(63,"--gap"),e()(),n(64,"td"),t(65,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),e(),n(66,"td")(67,"code"),t(68,"1.5rem"),e()(),n(69,"td")(70,"code"),t(71,"@deprecated 20.x.x"),e()()(),n(72,"tr")(73,"td")(74,"code"),t(75,"--gap-actions"),e()(),n(76,"td"),t(77,"Espa\xE7amento entre as a\xE7\xF5es"),e(),n(78,"td")(79,"code"),t(80,"0.5rem"),e()(),r(81,"td"),e(),n(82,"tr")(83,"td")(84,"code"),t(85,"--font-family"),e()(),n(86,"td"),t(87,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),e(),n(88,"td")(89,"code"),t(90,"--font-family-theme"),e()(),r(91,"td"),e(),n(92,"tr")(93,"td")(94,"strong"),t(95,"Content"),e()(),r(96,"td")(97,"td")(98,"td"),e(),n(99,"tr")(100,"td")(101,"code"),t(102,"--padding-content"),e()(),n(103,"td"),t(104,"Espa\xE7amento (top, right, bottom, left)"),e(),n(105,"td")(106,"code"),t(107,"0.5rem 1.5rem"),e()(),n(108,"td")(109,"code"),t(110,"@deprecated 20.x.x"),e()()()()()(),n(111,"div",7)(112,"h4",8),t(113,"Seletor"),e(),n(114,"pre",9),t(115,`<po-page-default
    p-actions="Array<PoPageAction>"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    p-literals="PoPageDefaultLiterals"
    p-subtitle="string"
    p-title="string" >
</po-page-default>
`),e()(),n(116,"h4",10),t(117,"Propriedades"),e(),n(118,"table",11)(119,"tr",12)(120,"th",13),t(121,"Nome"),e(),n(122,"th",13),t(123,"Tipo"),e(),n(124,"th",13),t(125,"Padr\xE3o"),e(),n(126,"th",13),t(127,"Descri\xE7\xE3o"),e()(),n(128,"tr",14)(129,"td",15)(130,"div",16)(131,"span",17),t(132," p-actions"),r(133,"br"),e()()(),n(134,"td",18)(135,"code",19),t(136,"Array<PoPageAction>"),e()(),n(137,"td",20),t(138,"-"),e(),n(139,"td",21)(140,"em")(141,"strong"),t(142,"(opcional)"),e()(),n(143,"p"),t(144,"Nesta propriedade deve ser definido um array de objetos que implementam a interface "),n(145,"code"),t(146,"PoPageAction"),e(),t(147,"."),e()()(),n(148,"tr",14)(149,"td",15)(150,"div",16)(151,"span",17),t(152," p-breadcrumb"),r(153,"br"),e()()(),n(154,"td",18)(155,"code",22),t(156,"PoBreadcrumb"),e()(),n(157,"td",20),t(158,"-"),e(),n(159,"td",21)(160,"em")(161,"strong"),t(162,"(opcional)"),e()(),n(163,"p"),t(164,"Objeto com propriedades do breadcrumb."),e()()(),n(165,"tr",14)(166,"td",15)(167,"div",16)(168,"span",17),t(169," p-components-size"),r(170,"br"),e()()(),n(171,"td",18)(172,"code",23),t(173,"string"),e()(),n(174,"td",20)(175,"p")(176,"code"),t(177,"medium"),e()()(),n(178,"td",21)(179,"em")(180,"strong"),t(181,"(opcional)"),e()(),n(182,"p"),t(183,"Define o tamanho dos componentes de formul\xE1rio no template:"),e(),n(184,"ul")(185,"li")(186,"code"),t(187,"small"),e(),t(188,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),e(),n(189,"li")(190,"code"),t(191,"medium"),e(),t(192,": aplica a medida medium de cada componente."),e()(),n(193,"blockquote")(194,"p"),t(195,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(196,"code"),t(197,"medium"),e(),t(198,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(199,"a",24),t(200,"po-theme"),e(),t(201,"."),e()()()(),n(202,"tr",14)(203,"td",15)(204,"div",16)(205,"span",17),t(206," p-literals"),r(207,"br"),e()()(),n(208,"td",18)(209,"code",25),t(210,"PoPageDefaultLiterals"),e()(),n(211,"td",20),t(212,"-"),e(),n(213,"td",21)(214,"em")(215,"strong"),t(216,"(opcional)"),e()(),n(217,"p"),t(218,"Objeto com as literais usadas no "),n(219,"code"),t(220,"po-page-default"),e(),t(221,"."),e(),n(222,"p"),t(223,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),e(),n(224,"pre")(225,"code"),t(226,`const customLiterals: PoPageDefaultLiterals = {
  otherActions: 'Mais a\xE7\xF5es'
};
`),e()(),n(227,"p"),t(228,"Ou passando apenas as literais que deseja customizar:"),e(),n(229,"pre")(230,"code"),t(231,`const customLiterals: PoPageDefaultLiterals = {
  otherActions: 'A\xE7\xF5es da p\xE1gina'
};
`),e()(),n(232,"p"),t(233,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),e(),n(234,"pre")(235,"code"),t(236,`<po-page-default
  [p-literals]="customLiterals">
</po-page-default>
`),e()(),n(237,"blockquote")(238,"p"),t(239,"O valor padr\xE3o ser\xE1 traduzido de acordo com o idioma configurado no "),n(240,"a",26)(241,"code"),t(242,"PoI18nService"),e()(),t(243," ou "),n(244,"em"),t(245,"browser"),e(),t(246,"."),e()()()(),n(247,"tr",14)(248,"td",15)(249,"div",16)(250,"span",17),t(251," p-subtitle"),r(252,"br"),e()()(),n(253,"td",18)(254,"code",23),t(255,"string"),e()(),n(256,"td",20),t(257,"-"),e(),n(258,"td",21)(259,"em")(260,"strong"),t(261,"(opcional)"),e()(),n(262,"p"),t(263,"Subtitulo do Header da p\xE1gina"),e()()(),n(264,"tr",14)(265,"td",15)(266,"div",16)(267,"span",17),t(268," p-title"),r(269,"br"),e()()(),n(270,"td",18)(271,"code",23),t(272,"string"),e()(),n(273,"td",20),t(274,"-"),e(),n(275,"td",21)(276,"p"),t(277,"T\xEDtulo da p\xE1gina."),e()()()(),n(278,"h3"),t(279,"Interfaces"),e(),n(280,"h4",27)(281,"code",5),t(282,"PoBreadcrumbItem"),e()(),n(283,"div",2)(284,"p"),t(285,"Interface que define cada item do componente "),n(286,"strong"),t(287,"po-breadcrumb"),e(),t(288,"."),e()(),n(289,"h4",10),t(290,"Propriedades"),e(),n(291,"table",11)(292,"tr",12)(293,"th",13),t(294,"Nome"),e(),n(295,"th",13),t(296,"Tipo"),e(),n(297,"th",13),t(298,"Descri\xE7\xE3o"),e()(),n(299,"tr",14)(300,"td",15)(301,"div",16)(302,"span",17),t(303," action"),r(304,"br"),e()()(),n(305,"td",18)(306,"code",28),t(307,"Function"),e()(),n(308,"td",21)(309,"em")(310,"strong"),t(311,"(opcional)"),e()(),n(312,"p"),t(313,"A\xE7\xE3o executada ao clicar no item."),e(),n(314,"blockquote")(315,"p"),t(316,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),n(317,"em"),t(318,"label"),e(),t(319," do item como par\xE2metro para execu\xE7\xE3o."),e()()()(),n(320,"tr",14)(321,"td",15)(322,"div",16)(323,"span",17),t(324," label"),r(325,"br"),e()()(),n(326,"td",18)(327,"code",23),t(328,"string"),e()(),n(329,"td",21)(330,"p"),t(331,"R\xF3tulo do item."),e()()(),n(332,"tr",14)(333,"td",15)(334,"div",16)(335,"span",17),t(336," link"),r(337,"br"),e()()(),n(338,"td",18)(339,"code",23),t(340,"string"),e()(),n(341,"td",21)(342,"em")(343,"strong"),t(344,"(opcional)"),e()(),n(345,"p"),t(346,"Url do item."),e(),n(347,"blockquote")(348,"p"),t(349,"Caso o item tamb\xE9m contenha uma "),n(350,"em"),t(351,"action"),e(),t(352," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),n(353,"em"),t(354,"link"),e(),t(355,"."),e()(),n(356,"blockquote")(357,"p"),t(358,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),n(359,"strong")(360,"a",29),t(361,"Veja um exemplo de como criar rotas aqui"),e()(),t(362,"."),e()(),n(363,"blockquote")(364,"p"),t(365,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),n(366,"code"),t(367,"p-favorite-service"),e(),t(368," consiga favoritar ou desfavoritar."),e()()()()(),n(369,"h4",27)(370,"code",5),t(371,"PoBreadcrumb"),e()(),n(372,"div",2)(373,"p"),t(374,"Interface que define o "),n(375,"code"),t(376,"po-breadcrumb"),e(),t(377,"."),e()(),n(378,"h4",10),t(379,"Propriedades"),e(),n(380,"table",11)(381,"tr",12)(382,"th",13),t(383,"Nome"),e(),n(384,"th",13),t(385,"Tipo"),e(),n(386,"th",13),t(387,"Descri\xE7\xE3o"),e()(),n(388,"tr",14)(389,"td",15)(390,"div",16)(391,"span",17),t(392," favorite"),r(393,"br"),e()()(),n(394,"td",18)(395,"code",23),t(396,"string"),e()(),n(397,"td",21)(398,"em")(399,"strong"),t(400,"(opcional)"),e()(),n(401,"p"),t(402,"Permite definir uma URL para favoritar ou desfavoritar."),e(),n(403,"blockquote")(404,"p"),t(405,"Para maiores informa\xE7\xF5es verificar a propriedade "),n(406,"code"),t(407,"p-favorite-service"),e(),t(408," do componente "),n(409,"code"),t(410,"po-breadcrumb"),e(),t(411,"."),e()()()(),n(412,"tr",14)(413,"td",15)(414,"div",16)(415,"span",17),t(416," items"),r(417,"br"),e()()(),n(418,"td",18)(419,"code",30),t(420,"Array<PoBreadcrumbItem>"),e()(),n(421,"td",21)(422,"p"),t(423,"Lista de itens do "),n(424,"em"),t(425,"breadcrumb"),e(),t(426,"."),e(),n(427,"p")(428,"strong"),t(429,"Exemplo:"),e()(),n(430,"pre")(431,"code"),t(432,`{ label: 'Po Portal', link: 'portal' }
`),e()()()(),n(433,"tr",14)(434,"td",15)(435,"div",16)(436,"span",17),t(437," params"),r(438,"br"),e()()(),n(439,"td",18)(440,"code",31),t(441,"object"),e()(),n(442,"td",21)(443,"em")(444,"strong"),t(445,"(opcional)"),e()(),n(446,"p"),t(447,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),e()()()(),n(448,"h4",27)(449,"code",5),t(450,"PoPageAction"),e()(),n(451,"div",2)(452,"p"),t(453,"Interface para as a\xE7\xF5es dos componentes po-page-default e po-page-list."),e(),n(454,"blockquote")(455,"p"),t(456,"As propriedades "),n(457,"code"),t(458,"selected"),e(),t(459,", "),n(460,"code"),t(461,"separator"),e(),t(462," e "),n(463,"code"),t(464,"type"),e(),t(465,` ser\xE3o vistas a partir da terceira a\xE7\xE3o e somente quando
definir quatro a\xE7\xF5es ou mais.`),e()()(),n(466,"h4",10),t(467,"Propriedades"),e(),n(468,"table",11)(469,"tr",12)(470,"th",13),t(471,"Nome"),e(),n(472,"th",13),t(473,"Tipo"),e(),n(474,"th",13),t(475,"Descri\xE7\xE3o"),e()(),n(476,"tr",14)(477,"td",15)(478,"div",16)(479,"span",17),t(480," action"),r(481,"br"),e()()(),n(482,"td",18)(483,"code",28),t(484,"Function"),e()(),n(485,"td",21)(486,"em")(487,"strong"),t(488,"(opcional)"),e()(),n(489,"p"),t(490,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),e(),n(491,"blockquote")(492,"p"),t(493,"Para que a fun\xE7\xE3o seja executada no contexto do elemento filho o mesmo deve ser passado utilizando "),n(494,"em"),t(495,"bind"),e(),t(496,"."),e()(),n(497,"p"),t(498,"Exemplo: "),n(499,"code"),t(500,"action: this.myFunction.bind(this)"),e()()()(),n(501,"tr",14)(502,"td",15)(503,"div",16)(504,"span",17),t(505," disabled"),r(506,"br"),e()()(),n(507,"td",18)(508,"code",32),t(509,"boolean "),e(),n(510,"code",28),t(511," Function"),e()(),n(512,"td",21)(513,"em")(514,"strong"),t(515,"(opcional)"),e()(),n(516,"p"),t(517,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),e(),n(518,"p"),t(519,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),e()()(),n(520,"tr",14)(521,"td",15)(522,"div",16)(523,"span",17),t(524," icon"),r(525,"br"),e()()(),n(526,"td",18)(527,"code",23),t(528,"string "),e(),n(529,"code",33),t(530," TemplateRef<void>"),e()(),n(531,"td",21)(532,"em")(533,"strong"),t(534,"(opcional)"),e()(),n(535,"p"),t(536,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),e(),n(537,"p"),t(538,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(539,"a",34),t(540,"Biblioteca de \xEDcones"),e(),t(541,". conforme exemplo abaixo:"),e(),n(542,"pre")(543,"code"),t(544,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),e()(),n(545,"p"),t(546,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),e(),n(547,"pre")(548,"code"),t(549,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),e()(),n(550,"p"),t(551,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(552,"code"),t(553,"TemplateRef"),e(),t(554,`, conforme exemplo abaixo:
component.html:`),e(),n(555,"pre")(556,"code"),t(557,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),e()(),n(558,"p"),t(559,"component.ts:"),e(),n(560,"pre")(561,"code"),t(562,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),e()()()(),n(563,"tr",14)(564,"td",15)(565,"div",16)(566,"span",17),t(567," label"),r(568,"br"),e()()(),n(569,"td",18)(570,"code",23),t(571,"string"),e()(),n(572,"td",21)(573,"p"),t(574,"R\xF3tulo da a\xE7\xE3o."),e()()(),n(575,"tr",14)(576,"td",15)(577,"div",16)(578,"span",17),t(579," selected"),r(580,"br"),e()()(),n(581,"td",18)(582,"code",32),t(583,"boolean"),e()(),n(584,"td",21)(585,"em")(586,"strong"),t(587,"(opcional)"),e()(),n(588,"p"),t(589,"Define se a a\xE7\xE3o est\xE1 selecionada."),e()()(),n(590,"tr",14)(591,"td",15)(592,"div",16)(593,"span",17),t(594," separator"),r(595,"br"),e()()(),n(596,"td",18)(597,"code",32),t(598,"boolean"),e()(),n(599,"td",21)(600,"em")(601,"strong"),t(602,"(opcional)"),e()(),n(603,"p"),t(604,"Atribui uma linha separadora acima do item."),e()()(),n(605,"tr",14)(606,"td",15)(607,"div",16)(608,"span",17),t(609," type"),r(610,"br"),e()()(),n(611,"td",18)(612,"code",23),t(613,"string"),e()(),n(614,"td",21)(615,"em")(616,"strong"),t(617,"(opcional)"),e()(),n(618,"p"),t(619,"Define a cor do item, sendo "),n(620,"code"),t(621,"default"),e(),t(622," o padr\xE3o."),e(),n(623,"p"),t(624,"Valores v\xE1lidos:"),e(),n(625,"ul")(626,"li")(627,"code"),t(628,"default"),e()(),n(629,"li")(630,"code"),t(631,"danger"),e(),t(632," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),e()()()(),n(633,"tr",14)(634,"td",15)(635,"div",16)(636,"span",17),t(637," url"),r(638,"br"),e()()(),n(639,"td",18)(640,"code",23),t(641,"string"),e()(),n(642,"td",21)(643,"em")(644,"strong"),t(645,"(opcional)"),e()(),n(646,"p"),t(647,"URL utilizada no redirecionamento das p\xE1ginas."),e()()(),n(648,"tr",14)(649,"td",15)(650,"div",16)(651,"span",17),t(652," visible"),r(653,"br"),e()()(),n(654,"td",18)(655,"code",32),t(656,"boolean "),e(),n(657,"code",28),t(658," Function"),e()(),n(659,"td",21)(660,"em")(661,"strong"),t(662,"(opcional)"),e()(),n(663,"p"),t(664,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),e(),n(665,"blockquote")(666,"p"),t(667,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),e()(),n(668,"p"),t(669,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),e(),n(670,"ul")(671,"li")(672,"p"),t(673,"Fun\xE7\xE3o que deve retornar um booleano."),e()(),n(674,"li")(675,"p"),t(676,"Informar diretamente um valor booleano."),e()()()()()(),n(677,"h4",27)(678,"code",5),t(679,"PoPageDefaultLiterals"),e()(),n(680,"div",2)(681,"p"),t(682,"Interface para defini\xE7\xE3o das literais usadas no "),n(683,"code"),t(684,"po-page-default"),e(),t(685,"."),e()(),n(686,"h4",10),t(687,"Propriedades"),e(),n(688,"table",11)(689,"tr",12)(690,"th",13),t(691,"Nome"),e(),n(692,"th",13),t(693,"Tipo"),e(),n(694,"th",13),t(695,"Descri\xE7\xE3o"),e()(),n(696,"tr",14)(697,"td",15)(698,"div",16)(699,"span",17),t(700," otherActions"),r(701,"br"),e()()(),n(702,"td",18)(703,"code",23),t(704,"string"),e()(),n(705,"td",21)(706,"em")(707,"strong"),t(708,"(opcional)"),e()(),n(709,"p"),t(710,"Legenda do "),n(711,"code"),t(712,"po-dropdown"),e(),t(713," de a\xE7\xF5es."),e()()()()())},dependencies:[y],encapsulation:2})}return o})();var ge=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||o)(v(X),v(Y))};static \u0275cmp=S({type:o,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Page Default",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),E("p-click",function(){return i.changeTab("doc")}),r(3,"sample-po-page-default-doc"),e(),n(4,"po-tab",3),E("p-click",function(){return i.changeTab("web")}),r(5,"sample-po-page-default-basic-view")(6,"sample-po-page-default-labs-view")(7,"sample-po-page-default-dashboard-view"),e()()()),l&2&&(u("p-actions",i.actions),m(2),u("p-active",i.activeTab==="doc"),m(2),u("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[x,C,w,pe,se,ue,be],encapsulation:2})}return o})();var ke=[{path:"",component:ge}],fe=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=L({type:o});static \u0275inj=A({imports:[U.forChild(ke),U]})}return o})();var nt=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=L({type:o});static \u0275inj=A({imports:[le,fe]})}return o})();export{nt as DocPoPageDefaultModule};
