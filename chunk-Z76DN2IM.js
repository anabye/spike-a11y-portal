import{o as w,p as me}from"./chunk-KTXVLMHP.js";import{Ab as C,Ea as ae,Eb as re,Fa as oe,O as te,Q as ne,Sa as le,U as z,a as W,nb as P,sa as j,v as ee,za as ie,zb as x}from"./chunk-4M2FSNLW.js";import{$a as G,$c as J,Aa as u,Da as y,Fb as M,Gc as O,Hc as V,Ic as F,Jc as q,Kc as N,La as n,M as X,Ma as e,N as k,Na as r,Q as A,Ra as B,Sa as E,U as s,V as c,Xc as Z,Zc as $,_a as H,ab as U,bb as I,cb as t,eb as D,gb as g,hb as f,ib as h,ja as m,ka as R,mb as Y,ob as _,qa as S,ra as L}from"./chunk-CBLD3XJL.js";var pe=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-page-default-basic"]],standalone:!1,decls:1,vars:0,consts:[["p-title","PO Page Default"]],template:function(l,i){l&1&&r(0,"po-page-default",0)},dependencies:[P],encapsulation:2})}return o})();var ve=o=>({"docs-sample-code-tabs":o}),se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-page-default-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(r(0,"br"),n(1,"blockquote",0)(2,"label",1),t(3,"PO Page Default Basic"),e(),n(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),t(6),e()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-page-default-basic/sample-po-page-default-basic.component.html"),e(),n(13,"pre",7),t(14,`<po-page-default p-title="PO Page Default"> </po-page-default>
`),e()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-page-default-basic/sample-po-page-default-basic.component.ts"),e(),n(19,"pre",9),t(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-page-default-basic',
  templateUrl: './sample-po-page-default-basic.component.html',
  standalone: false
})
export class SamplePoPageDefaultBasicComponent {}
`),e()()()()(),n(21,"div",10),r(22,"sample-po-page-default-basic"),e(),r(23,"hr")),l&2&&(m(5),y("po-icon "+i.sampleCodeButtonIcon),m(),D(" ",i.sampleCodeButtonLabel,""),m(),u("ngClass",_(4,ve,i.hideSampleCodeTabs)))},dependencies:[M,w,x,C,pe],encapsulation:2})}return o})();var ce=(()=>{class o{poNotification=A(j);action;actions;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;literals;title;subtitle;actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{value:"fa fa-podcast",label:"fa fa-podcast"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];ngOnInit(){this.restore()}addAction(d){let l=Object.assign({},d);l.action=l.action?this.showAction.bind(this,l.action):void 0,this.actions=[...this.actions,l],this.restoreActionForm()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0}}addBreadcrumbParam(){let d={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,d):this.breadcrumb.params=d,this.breadcrumbParams={}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}restore(){this.actions=[],this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize="medium",this.literals="",this.title="PO Page Default",this.subtitle="",this.restoreActionForm()}restoreActionForm(){this.action={label:void 0,visible:null}}showAction(d){this.poNotification.success(`Action clicked: ${d}`)}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-page-default-labs"]],standalone:!1,decls:43,vars:28,consts:[["formAction","ngForm"],["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],["formPage","ngForm"],[3,"p-actions","p-breadcrumb","p-components-size","p-literals","p-title","p-subtitle"],[1,"po-row"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-6",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","action","p-columns","4","p-indeterminate","","p-label","Action properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Add Action",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","title","p-label","Title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: {"otherActions": "Mais a\xE7\xF5es"}',"p-label","Literals",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,i){if(l&1){let p=B();r(0,"po-page-default",5)(1,"po-divider"),n(2,"form",null,0)(4,"div",6)(5,"po-input",7),h("ngModelChange",function(a){return s(p),f(i.action.action,a)||(i.action.action=a),c(a)}),e(),n(6,"po-input",8),h("ngModelChange",function(a){return s(p),f(i.action.label,a)||(i.action.label=a),c(a)}),e(),n(7,"po-input",9),h("ngModelChange",function(a){return s(p),f(i.action.url,a)||(i.action.url=a),c(a)}),e(),n(8,"po-select",10),h("ngModelChange",function(a){return s(p),f(i.action.type,a)||(i.action.type=a),c(a)}),e(),n(9,"po-select",11),h("ngModelChange",function(a){return s(p),f(i.action.icon,a)||(i.action.icon=a),c(a)}),e(),n(10,"po-checkbox-group",12),h("ngModelChange",function(a){return s(p),f(i.action,a)||(i.action=a),c(a)}),e()(),n(11,"div",6)(12,"po-button",13),E("p-click",function(){return s(p),c(i.addAction(i.action))}),e()()(),r(13,"po-divider"),n(14,"form",null,1)(16,"div",6)(17,"po-input",14),h("ngModelChange",function(a){return s(p),f(i.breadcrumb.favorite,a)||(i.breadcrumb.favorite=a),c(a)}),e()()(),n(18,"form",null,2)(20,"div",6)(21,"po-input",15),h("ngModelChange",function(a){return s(p),f(i.breadcrumbItem.label,a)||(i.breadcrumbItem.label=a),c(a)}),e(),n(22,"po-input",16),h("ngModelChange",function(a){return s(p),f(i.breadcrumbItem.link,a)||(i.breadcrumbItem.link=a),c(a)}),e()(),n(23,"div",6)(24,"po-button",17),E("p-click",function(){return s(p),c(i.addBreadcrumbItem())}),e()()(),r(25,"po-divider"),n(26,"form",null,3)(28,"div",6)(29,"po-input",18),h("ngModelChange",function(a){return s(p),f(i.breadcrumbParams.property,a)||(i.breadcrumbParams.property=a),c(a)}),e(),n(30,"po-input",19),h("ngModelChange",function(a){return s(p),f(i.breadcrumbParams.value,a)||(i.breadcrumbParams.value=a),c(a)}),e()(),n(31,"div",6)(32,"po-button",20),E("p-click",function(){return s(p),c(i.addBreadcrumbParam())}),e()()(),r(33,"po-divider"),n(34,"form",null,4)(36,"div",6)(37,"po-input",21),h("ngModelChange",function(a){return s(p),f(i.title,a)||(i.title=a),c(a)}),e(),n(38,"po-input",22),h("ngModelChange",function(a){return s(p),f(i.subtitle,a)||(i.subtitle=a),c(a)}),e(),n(39,"po-input",23),h("ngModelChange",function(a){return s(p),f(i.literals,a)||(i.literals=a),c(a)}),E("p-change",function(){return s(p),c(i.changeLiterals())}),e(),n(40,"po-radio-group",24),h("ngModelChange",function(a){return s(p),f(i.componentsSize,a)||(i.componentsSize=a),c(a)}),e()(),n(41,"div",6)(42,"po-button",25),E("p-click",function(){return s(p),c(i.restore())}),e()()()}if(l&2){let p=I(3),b=I(19),a=I(27);u("p-actions",i.actions)("p-breadcrumb",i.breadcrumb)("p-components-size",i.componentsSize)("p-literals",i.customLiterals)("p-title",i.title)("p-subtitle",i.subtitle),m(5),g("ngModel",i.action.action),m(),g("ngModel",i.action.label),m(),g("ngModel",i.action.url),m(),g("ngModel",i.action.type),u("p-options",i.typeOptions),m(),g("ngModel",i.action.icon),u("p-options",i.iconOptions),m(),g("ngModel",i.action),u("p-options",i.actionOptions),m(2),u("p-disabled",p.form.invalid),m(5),g("ngModel",i.breadcrumb.favorite),m(4),g("ngModel",i.breadcrumbItem.label),m(),g("ngModel",i.breadcrumbItem.link),m(2),u("p-disabled",b.invalid),m(5),g("ngModel",i.breadcrumbParams.property),m(),g("ngModel",i.breadcrumbParams.value),m(2),u("p-disabled",a.invalid),m(5),g("ngModel",i.title),m(),g("ngModel",i.subtitle),m(),g("ngModel",i.literals),m(),g("ngModel",i.componentsSize),u("p-options",i.componentsSizeOptions)}},dependencies:[N,O,V,q,F,ee,W,te,ne,oe,le,P],encapsulation:2})}return o})();var we=o=>({"docs-sample-code-tabs":o}),ue=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-page-default-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(r(0,"br"),n(1,"blockquote",0)(2,"label",1),t(3,"PO Page Default Labs"),e(),n(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),t(6),e()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-page-default-labs/sample-po-page-default-labs.component.html"),e(),n(13,"pre",7),t(14,`<po-page-default
  [p-actions]="actions"
  [p-breadcrumb]="breadcrumb"
  [p-components-size]="componentsSize"
  [p-literals]="customLiterals"
  [p-title]="title"
  [p-subtitle]="subtitle"
>
</po-page-default>

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
      class="po-lg-2 po-md-4"
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
`),e()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-page-default-labs/sample-po-page-default-labs.component.ts"),e(),n(19,"pre",9),t(20,`import { Component, OnInit, inject } from '@angular/core';

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
  private poNotification = inject(PoNotificationService);

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
`),e()()()()(),n(21,"div",10),r(22,"sample-po-page-default-labs"),e(),r(23,"hr")),l&2&&(m(5),y("po-icon "+i.sampleCodeButtonIcon),m(),D(" ",i.sampleCodeButtonLabel,""),m(),u("ngClass",_(4,we,i.hideSampleCodeTabs)))},dependencies:[M,w,x,C,ce],encapsulation:2})}return o})();var K=(()=>{class o{getColumns(){return[{property:"cities",label:"Cities that most downloaded PO"},{property:"package",label:"Package version"},{property:"downloads",label:"Downloads"}]}getItems(){return[{cities:"S\xE3o Paulo",package:"2.0.0-beta.2",downloads:"2000"},{cities:"Joinville",package:"1.9.1",downloads:"1000"},{cities:"Rio de Janeiro",package:"2.0.0-beta.2",downloads:"250"},{cities:"Santa Catarina",package:"1.9.1",downloads:"100"},{cities:"Curitiba",package:"2.0.0-beta.2",downloads:"1040"},{cities:"Goiania",package:"1.9.1",downloads:"250"},{cities:"Londrina",package:"1.9.1",downloads:"35"},{cities:"Belo Horizonte",package:"1.9.1",downloads:"1100"}]}static \u0275fac=function(l){return new(l||o)};static \u0275prov=X({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var De=["formShare"],be=(()=>{class o{poNotification=A(j);sampleDashboardService=A(K);formShare;poModal;columns;email=void 0;isSubscribed=!1;items;actions=[{label:"Share",action:this.modalOpen.bind(this),icon:"an an-share"},{label:"GitHub",url:"https://github.com/po-ui/po-angular"},{label:"Components",url:"/documentation"},{label:"Disable notification",action:this.disableNotification.bind(this),disabled:()=>this.isSubscribed}];breadcrumb={items:[{label:"Home",link:"/"},{label:"Dashboard"}]};cancelAction={action:()=>{this.modalClose()},label:"Cancel"};shareAction={action:()=>{this.share()},label:"Share"};ngOnInit(){this.columns=this.sampleDashboardService.getColumns(),this.items=this.sampleDashboardService.getItems()}modalClose(){this.poModal.close(),this.formShare.reset()}modalOpen(){this.poModal.open()}share(){this.formShare.valid?this.poNotification.success(`Webpage shared successfully to: ${this.email}.`):this.poNotification.error("Email invalid."),this.modalClose()}disableNotification(){this.isSubscribed=!0}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-page-default-dashboard"]],viewQuery:function(l,i){if(l&1&&(H(De,7),H(z,7)),l&2){let p;G(p=U())&&(i.formShare=p.first),G(p=U())&&(i.poModal=p.first)}},standalone:!1,features:[Y([K])],decls:38,vars:8,consts:[["formShare","ngForm"],["p-title","Dashboard",3,"p-actions","p-breadcrumb"],[1,"po-row"],["p-title","Daily visitors",1,"po-md-6","po-lg-4","po-mb-2"],[1,"po-font-subtitle","po-text-center"],[1,"po-text-center","sample-widget-text-subtitle"],["p-title","Most viewed page",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","Website status",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","NPM downloads",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","Devforum PO questions",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","Angular versions supported",1,"po-md-6","po-lg-4","po-mb-2"],[3,"p-columns","p-items","p-hide-table-search"],["p-title","Share webpage",3,"p-primary-action","p-secondary-action"],["name","email","p-clean","","p-label","Type an e-mail for sharing webpage: http://www.po.com.br","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"]],template:function(l,i){if(l&1){let p=B();n(0,"po-page-default",1)(1,"div",2)(2,"po-widget",3)(3,"div",4),t(4,"540"),e(),n(5,"div",5),t(6,"www.po.com.br"),e()(),n(7,"po-widget",6)(8,"div",4),t(9,"300 views"),e(),n(10,"div",5),t(11,"https://po-ui.io"),e()(),n(12,"po-widget",7)(13,"div",4),t(14,"Online"),e(),n(15,"div",5),t(16,"28 days"),e()(),n(17,"po-widget",8)(18,"div",4),t(19,"266"),e(),n(20,"div",5),t(21,"@po-ui/ng-components - 1.10.1"),e()(),n(22,"po-widget",9)(23,"div",4),t(24,"800 questions"),e(),n(25,"div",5),t(26,"https://devforum.po.com.br"),e()(),n(27,"po-widget",10)(28,"div",4),t(29,"AngularJS - Angular 6"),e(),n(30,"div",5),t(31,"Angular 6 most downloaded"),e()()(),r(32,"po-divider")(33,"po-table",11),e(),n(34,"po-modal",12)(35,"form",null,0)(37,"po-email",13),h("ngModelChange",function(a){return s(p),f(i.email,a)||(i.email=a),c(a)}),e()()()}l&2&&(u("p-actions",i.actions)("p-breadcrumb",i.breadcrumb),m(33),u("p-columns",i.columns)("p-items",i.items)("p-hide-table-search",!1),m(),u("p-primary-action",i.shareAction)("p-secondary-action",i.cancelAction),m(3),g("ngModel",i.email))},dependencies:[N,O,V,q,F,W,ae,z,P,ie,re],styles:[".sample-widget-text-subtitle[_ngcontent-%COMP%]{font-family:NunitoSans;font-size:14px;text-align:center;color:#9da7a9}"]})}return o})();var Me=o=>({"docs-sample-code-tabs":o}),ge=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-page-default-dashboard-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(r(0,"br"),n(1,"blockquote",0)(2,"label",1),t(3,"PO Page Default - Dashboard"),e(),n(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),t(6),e()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.html"),e(),n(13,"pre",7),t(14,`<po-page-default p-title="Dashboard" [p-actions]="actions" [p-breadcrumb]="breadcrumb">
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

  <po-divider />

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
`),e()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.ts"),e(),n(19,"pre",9),t(20,`import { Component, ViewChild, OnInit, inject } from '@angular/core';
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
  private poNotification = inject(PoNotificationService);
  private sampleDashboardService = inject(SampleDashboardService);

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
`),e()()()()(),n(25,"div",10),r(26,"sample-po-page-default-dashboard"),e(),r(27,"hr")),l&2&&(m(5),y("po-icon "+i.sampleCodeButtonIcon),m(),D(" ",i.sampleCodeButtonLabel,""),m(),u("ngClass",_(4,Me,i.hideSampleCodeTabs)))},dependencies:[M,w,x,C,be],encapsulation:2})}return o})();var fe=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-page-default-doc"]],standalone:!1,decls:696,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoPageAction>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoPageDefaultLiterals"],["href","/documentation/po-i18n"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"]],template:function(l,i){l&1&&(n(0,"div",0)(1,"p",1)(2,"code"),t(3,"import { PoPageModule } from '@po-ui/ng-components';"),e()(),n(4,"div",2)(5,"p"),t(6,`M\xF3dulo dos componentes po-page-default, po-page-detail, po-page-edit,
po-page-list e po-page-slide.`),e()(),n(7,"h3",3),t(8,"Componente"),e(),n(9,"h4",4)(10,"code",5),t(11,"PoPageDefaultComponent"),e()(),n(12,"div",2)(13,"p"),t(14,"O componente "),n(15,"code"),t(16,"po-page-default"),e(),t(17," \xE9 utilizado como o container principal para as telas sem um template definido."),e(),n(18,"h4"),t(19,"Tokens customiz\xE1veis"),e(),n(20,"blockquote")(21,"p"),t(22,"Para maiores informa\xE7\xF5es, acesse o guia "),n(23,"a",6),t(24,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),t(25,"."),e()(),n(26,"table")(27,"thead")(28,"tr")(29,"th"),t(30,"Propriedade"),e(),n(31,"th"),t(32,"Descri\xE7\xE3o"),e(),n(33,"th"),t(34,"Valor Padr\xE3o"),e()()(),n(35,"tbody")(36,"tr")(37,"td")(38,"strong"),t(39,"Header"),e()(),r(40,"td")(41,"td"),e(),n(42,"tr")(43,"td")(44,"code"),t(45,"--padding"),e()(),n(46,"td"),t(47,"Espa\xE7amento do header"),e(),n(48,"td")(49,"code"),t(50,"var(--spacing-xs) var(--spacing-md)"),e()()(),n(51,"tr")(52,"td")(53,"code"),t(54,"--gap"),e()(),n(55,"td"),t(56,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),e(),n(57,"td")(58,"code"),t(59,"var(--spacing-md)"),e()()(),n(60,"tr")(61,"td")(62,"code"),t(63,"--gap-actions"),e()(),n(64,"td"),t(65,"Espa\xE7amento entre as a\xE7\xF5es"),e(),n(66,"td")(67,"code"),t(68,"var(--spacing-xs)"),e()()(),n(69,"tr")(70,"td")(71,"code"),t(72,"--font-family"),e()(),n(73,"td"),t(74,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),e(),n(75,"td")(76,"code"),t(77,"var(--font-family-theme)"),e()()(),n(78,"tr")(79,"td")(80,"strong"),t(81,"Content"),e()(),r(82,"td")(83,"td"),e(),n(84,"tr")(85,"td")(86,"code"),t(87,"--padding-content"),e()(),n(88,"td"),t(89,"Espa\xE7amento do conte\xFAdo"),e(),n(90,"td")(91,"code"),t(92,"var(--spacing-xs) var(--spacing-sm)"),e()()()()()(),n(93,"div",7)(94,"h4",8),t(95,"Seletor"),e(),n(96,"pre",9),t(97,`<po-page-default
    p-actions="Array<PoPageAction>"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    p-literals="PoPageDefaultLiterals"
    p-subtitle="string"
    p-title="string" >
</po-page-default>
`),e()(),n(98,"h4",10),t(99,"Propriedades"),e(),n(100,"table",11)(101,"tr",12)(102,"th",13),t(103,"Nome"),e(),n(104,"th",13),t(105,"Tipo"),e(),n(106,"th",13),t(107,"Padr\xE3o"),e(),n(108,"th",13),t(109,"Descri\xE7\xE3o"),e()(),n(110,"tr",14)(111,"td",15)(112,"div",16)(113,"span",17),t(114," p-actions"),r(115,"br"),e()()(),n(116,"td",18)(117,"code",19),t(118,"Array<PoPageAction>"),e()(),n(119,"td",20),t(120,"-"),e(),n(121,"td",21)(122,"em")(123,"strong"),t(124,"(opcional)"),e()(),n(125,"p"),t(126,"Nesta propriedade deve ser definido um array de objetos que implementam a interface "),n(127,"code"),t(128,"PoPageAction"),e(),t(129,"."),e()()(),n(130,"tr",14)(131,"td",15)(132,"div",16)(133,"span",17),t(134," p-breadcrumb"),r(135,"br"),e()()(),n(136,"td",18)(137,"code",22),t(138,"PoBreadcrumb"),e()(),n(139,"td",20),t(140,"-"),e(),n(141,"td",21)(142,"em")(143,"strong"),t(144,"(opcional)"),e()(),n(145,"p"),t(146,"Objeto com propriedades do breadcrumb."),e()()(),n(147,"tr",14)(148,"td",15)(149,"div",16)(150,"span",17),t(151," p-components-size"),r(152,"br"),e()()(),n(153,"td",18)(154,"code",23),t(155,"string"),e()(),n(156,"td",20)(157,"p")(158,"code"),t(159,"medium"),e()()(),n(160,"td",21)(161,"em")(162,"strong"),t(163,"(opcional)"),e()(),n(164,"p"),t(165,"Define o tamanho dos componentes de formul\xE1rio no template:"),e(),n(166,"ul")(167,"li")(168,"code"),t(169,"small"),e(),t(170,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),e(),n(171,"li")(172,"code"),t(173,"medium"),e(),t(174,": aplica a medida medium de cada componente."),e()(),n(175,"blockquote")(176,"p"),t(177,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(178,"code"),t(179,"medium"),e(),t(180,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(181,"a",24),t(182,"po-theme"),e(),t(183,"."),e()()()(),n(184,"tr",14)(185,"td",15)(186,"div",16)(187,"span",17),t(188," p-literals"),r(189,"br"),e()()(),n(190,"td",18)(191,"code",25),t(192,"PoPageDefaultLiterals"),e()(),n(193,"td",20),t(194,"-"),e(),n(195,"td",21)(196,"em")(197,"strong"),t(198,"(opcional)"),e()(),n(199,"p"),t(200,"Objeto com as literais usadas no "),n(201,"code"),t(202,"po-page-default"),e(),t(203,"."),e(),n(204,"p"),t(205,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),e(),n(206,"pre")(207,"code"),t(208,`const customLiterals: PoPageDefaultLiterals = {
  otherActions: 'Mais a\xE7\xF5es'
};
`),e()(),n(209,"p"),t(210,"Ou passando apenas as literais que deseja customizar:"),e(),n(211,"pre")(212,"code"),t(213,`const customLiterals: PoPageDefaultLiterals = {
  otherActions: 'A\xE7\xF5es da p\xE1gina'
};
`),e()(),n(214,"p"),t(215,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),e(),n(216,"pre")(217,"code"),t(218,`<po-page-default
  [p-literals]="customLiterals">
</po-page-default>
`),e()(),n(219,"blockquote")(220,"p"),t(221,"O valor padr\xE3o ser\xE1 traduzido de acordo com o idioma configurado no "),n(222,"a",26)(223,"code"),t(224,"PoI18nService"),e()(),t(225," ou "),n(226,"em"),t(227,"browser"),e(),t(228,"."),e()()()(),n(229,"tr",14)(230,"td",15)(231,"div",16)(232,"span",17),t(233," p-subtitle"),r(234,"br"),e()()(),n(235,"td",18)(236,"code",23),t(237,"string"),e()(),n(238,"td",20),t(239,"-"),e(),n(240,"td",21)(241,"em")(242,"strong"),t(243,"(opcional)"),e()(),n(244,"p"),t(245,"Subtitulo do Header da p\xE1gina"),e()()(),n(246,"tr",14)(247,"td",15)(248,"div",16)(249,"span",17),t(250," p-title"),r(251,"br"),e()()(),n(252,"td",18)(253,"code",23),t(254,"string"),e()(),n(255,"td",20),t(256,"-"),e(),n(257,"td",21)(258,"p"),t(259,"T\xEDtulo da p\xE1gina."),e()()()(),n(260,"h3"),t(261,"Interfaces"),e(),n(262,"h4",27)(263,"code",5),t(264,"PoBreadcrumbItem"),e()(),n(265,"div",2)(266,"p"),t(267,"Interface que define cada item do componente "),n(268,"strong"),t(269,"po-breadcrumb"),e(),t(270,"."),e()(),n(271,"h4",10),t(272,"Propriedades"),e(),n(273,"table",11)(274,"tr",12)(275,"th",13),t(276,"Nome"),e(),n(277,"th",13),t(278,"Tipo"),e(),n(279,"th",13),t(280,"Descri\xE7\xE3o"),e()(),n(281,"tr",14)(282,"td",15)(283,"div",16)(284,"span",17),t(285," action"),r(286,"br"),e()()(),n(287,"td",18)(288,"code",28),t(289,"Function"),e()(),n(290,"td",21)(291,"em")(292,"strong"),t(293,"(opcional)"),e()(),n(294,"p"),t(295,"A\xE7\xE3o executada ao clicar no item."),e(),n(296,"blockquote")(297,"p"),t(298,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),n(299,"em"),t(300,"label"),e(),t(301," do item como par\xE2metro para execu\xE7\xE3o."),e()()()(),n(302,"tr",14)(303,"td",15)(304,"div",16)(305,"span",17),t(306," label"),r(307,"br"),e()()(),n(308,"td",18)(309,"code",23),t(310,"string"),e()(),n(311,"td",21)(312,"p"),t(313,"R\xF3tulo do item."),e()()(),n(314,"tr",14)(315,"td",15)(316,"div",16)(317,"span",17),t(318," link"),r(319,"br"),e()()(),n(320,"td",18)(321,"code",23),t(322,"string"),e()(),n(323,"td",21)(324,"em")(325,"strong"),t(326,"(opcional)"),e()(),n(327,"p"),t(328,"Url do item."),e(),n(329,"blockquote")(330,"p"),t(331,"Caso o item tamb\xE9m contenha uma "),n(332,"em"),t(333,"action"),e(),t(334," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),n(335,"em"),t(336,"link"),e(),t(337,"."),e()(),n(338,"blockquote")(339,"p"),t(340,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),n(341,"strong")(342,"a",29),t(343,"Veja um exemplo de como criar rotas aqui"),e()(),t(344,"."),e()(),n(345,"blockquote")(346,"p"),t(347,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),n(348,"code"),t(349,"p-favorite-service"),e(),t(350," consiga favoritar ou desfavoritar."),e()()()()(),n(351,"h4",27)(352,"code",5),t(353,"PoBreadcrumb"),e()(),n(354,"div",2)(355,"p"),t(356,"Interface que define o "),n(357,"code"),t(358,"po-breadcrumb"),e(),t(359,"."),e()(),n(360,"h4",10),t(361,"Propriedades"),e(),n(362,"table",11)(363,"tr",12)(364,"th",13),t(365,"Nome"),e(),n(366,"th",13),t(367,"Tipo"),e(),n(368,"th",13),t(369,"Descri\xE7\xE3o"),e()(),n(370,"tr",14)(371,"td",15)(372,"div",16)(373,"span",17),t(374," favorite"),r(375,"br"),e()()(),n(376,"td",18)(377,"code",23),t(378,"string"),e()(),n(379,"td",21)(380,"em")(381,"strong"),t(382,"(opcional)"),e()(),n(383,"p"),t(384,"Permite definir uma URL para favoritar ou desfavoritar."),e(),n(385,"blockquote")(386,"p"),t(387,"Para maiores informa\xE7\xF5es verificar a propriedade "),n(388,"code"),t(389,"p-favorite-service"),e(),t(390," do componente "),n(391,"code"),t(392,"po-breadcrumb"),e(),t(393,"."),e()()()(),n(394,"tr",14)(395,"td",15)(396,"div",16)(397,"span",17),t(398," items"),r(399,"br"),e()()(),n(400,"td",18)(401,"code",30),t(402,"Array<PoBreadcrumbItem>"),e()(),n(403,"td",21)(404,"p"),t(405,"Lista de itens do "),n(406,"em"),t(407,"breadcrumb"),e(),t(408,"."),e(),n(409,"p")(410,"strong"),t(411,"Exemplo:"),e()(),n(412,"pre")(413,"code"),t(414,`{ label: 'Po Portal', link: 'portal' }
`),e()()()(),n(415,"tr",14)(416,"td",15)(417,"div",16)(418,"span",17),t(419," params"),r(420,"br"),e()()(),n(421,"td",18)(422,"code",31),t(423,"object"),e()(),n(424,"td",21)(425,"em")(426,"strong"),t(427,"(opcional)"),e()(),n(428,"p"),t(429,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),e()()()(),n(430,"h4",27)(431,"code",5),t(432,"PoPageAction"),e()(),n(433,"div",2)(434,"p"),t(435,"Interface para as a\xE7\xF5es dos componentes po-page-default e po-page-list."),e(),n(436,"blockquote")(437,"p"),t(438,"As propriedades "),n(439,"code"),t(440,"selected"),e(),t(441,", "),n(442,"code"),t(443,"separator"),e(),t(444," e "),n(445,"code"),t(446,"type"),e(),t(447,` ser\xE3o vistas a partir da terceira a\xE7\xE3o e somente quando
definir quatro a\xE7\xF5es ou mais.`),e()()(),n(448,"h4",10),t(449,"Propriedades"),e(),n(450,"table",11)(451,"tr",12)(452,"th",13),t(453,"Nome"),e(),n(454,"th",13),t(455,"Tipo"),e(),n(456,"th",13),t(457,"Descri\xE7\xE3o"),e()(),n(458,"tr",14)(459,"td",15)(460,"div",16)(461,"span",17),t(462," action"),r(463,"br"),e()()(),n(464,"td",18)(465,"code",28),t(466,"Function"),e()(),n(467,"td",21)(468,"em")(469,"strong"),t(470,"(opcional)"),e()(),n(471,"p"),t(472,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),e(),n(473,"blockquote")(474,"p"),t(475,"Para que a fun\xE7\xE3o seja executada no contexto do elemento filho o mesmo deve ser passado utilizando "),n(476,"em"),t(477,"bind"),e(),t(478,"."),e()(),n(479,"p"),t(480,"Exemplo: "),n(481,"code"),t(482,"action: this.myFunction.bind(this)"),e()()()(),n(483,"tr",14)(484,"td",15)(485,"div",16)(486,"span",17),t(487," disabled"),r(488,"br"),e()()(),n(489,"td",18)(490,"code",32),t(491,"boolean "),e(),n(492,"code",28),t(493," Function"),e()(),n(494,"td",21)(495,"em")(496,"strong"),t(497,"(opcional)"),e()(),n(498,"p"),t(499,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),e(),n(500,"p"),t(501,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),e()()(),n(502,"tr",14)(503,"td",15)(504,"div",16)(505,"span",17),t(506," icon"),r(507,"br"),e()()(),n(508,"td",18)(509,"code",23),t(510,"string "),e(),n(511,"code",33),t(512," TemplateRef<void>"),e()(),n(513,"td",21)(514,"em")(515,"strong"),t(516,"(opcional)"),e()(),n(517,"p"),t(518,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),e(),n(519,"p"),t(520,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(521,"a",34),t(522,"Biblioteca de \xEDcones"),e(),t(523,". conforme exemplo abaixo:"),e(),n(524,"pre")(525,"code"),t(526,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),e()(),n(527,"p"),t(528,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),e(),n(529,"pre")(530,"code"),t(531,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),e()(),n(532,"p"),t(533,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(534,"code"),t(535,"TemplateRef"),e(),t(536,`, conforme exemplo abaixo:
component.html:`),e(),n(537,"pre")(538,"code"),t(539,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),e()(),n(540,"p"),t(541,"component.ts:"),e(),n(542,"pre")(543,"code"),t(544,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),e()()()(),n(545,"tr",14)(546,"td",15)(547,"div",16)(548,"span",17),t(549," label"),r(550,"br"),e()()(),n(551,"td",18)(552,"code",23),t(553,"string"),e()(),n(554,"td",21)(555,"p"),t(556,"R\xF3tulo da a\xE7\xE3o."),e()()(),n(557,"tr",14)(558,"td",15)(559,"div",16)(560,"span",17),t(561," selected"),r(562,"br"),e()()(),n(563,"td",18)(564,"code",32),t(565,"boolean"),e()(),n(566,"td",21)(567,"em")(568,"strong"),t(569,"(opcional)"),e()(),n(570,"p"),t(571,"Define se a a\xE7\xE3o est\xE1 selecionada."),e()()(),n(572,"tr",14)(573,"td",15)(574,"div",16)(575,"span",17),t(576," separator"),r(577,"br"),e()()(),n(578,"td",18)(579,"code",32),t(580,"boolean"),e()(),n(581,"td",21)(582,"em")(583,"strong"),t(584,"(opcional)"),e()(),n(585,"p"),t(586,"Atribui uma linha separadora acima do item."),e()()(),n(587,"tr",14)(588,"td",15)(589,"div",16)(590,"span",17),t(591," type"),r(592,"br"),e()()(),n(593,"td",18)(594,"code",23),t(595,"string"),e()(),n(596,"td",21)(597,"em")(598,"strong"),t(599,"(opcional)"),e()(),n(600,"p"),t(601,"Define a cor do item, sendo "),n(602,"code"),t(603,"default"),e(),t(604," o padr\xE3o."),e(),n(605,"p"),t(606,"Valores v\xE1lidos:"),e(),n(607,"ul")(608,"li")(609,"code"),t(610,"default"),e()(),n(611,"li")(612,"code"),t(613,"danger"),e(),t(614," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),e()()()(),n(615,"tr",14)(616,"td",15)(617,"div",16)(618,"span",17),t(619," url"),r(620,"br"),e()()(),n(621,"td",18)(622,"code",23),t(623,"string"),e()(),n(624,"td",21)(625,"em")(626,"strong"),t(627,"(opcional)"),e()(),n(628,"p"),t(629,"URL utilizada no redirecionamento das p\xE1ginas."),e()()(),n(630,"tr",14)(631,"td",15)(632,"div",16)(633,"span",17),t(634," visible"),r(635,"br"),e()()(),n(636,"td",18)(637,"code",32),t(638,"boolean "),e(),n(639,"code",28),t(640," Function"),e()(),n(641,"td",21)(642,"em")(643,"strong"),t(644,"(opcional)"),e()(),n(645,"p"),t(646,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),e(),n(647,"blockquote")(648,"p"),t(649,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),e()(),n(650,"p"),t(651,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),e(),n(652,"ul")(653,"li")(654,"p"),t(655,"Fun\xE7\xE3o que deve retornar um booleano."),e()(),n(656,"li")(657,"p"),t(658,"Informar diretamente um valor booleano."),e()()()()()(),n(659,"h4",27)(660,"code",5),t(661,"PoPageDefaultLiterals"),e()(),n(662,"div",2)(663,"p"),t(664,"Interface para defini\xE7\xE3o das literais usadas no "),n(665,"code"),t(666,"po-page-default"),e(),t(667,"."),e()(),n(668,"h4",10),t(669,"Propriedades"),e(),n(670,"table",11)(671,"tr",12)(672,"th",13),t(673,"Nome"),e(),n(674,"th",13),t(675,"Tipo"),e(),n(676,"th",13),t(677,"Descri\xE7\xE3o"),e()(),n(678,"tr",14)(679,"td",15)(680,"div",16)(681,"span",17),t(682," otherActions"),r(683,"br"),e()()(),n(684,"td",18)(685,"code",23),t(686,"string"),e()(),n(687,"td",21)(688,"em")(689,"strong"),t(690,"(opcional)"),e()(),n(691,"p"),t(692,"Legenda do "),n(693,"code"),t(694,"po-dropdown"),e(),t(695," de a\xE7\xF5es."),e()()()()())},dependencies:[w],encapsulation:2})}return o})();var he=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,l){this.route=d,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let l=d.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||o)(R(Z),R($))};static \u0275cmp=S({type:o,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Page Default",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),E("p-click",function(){return i.changeTab("doc")}),r(3,"sample-po-page-default-doc"),e(),n(4,"po-tab",3),E("p-click",function(){return i.changeTab("web")}),r(5,"sample-po-page-default-basic-view")(6,"sample-po-page-default-labs-view")(7,"sample-po-page-default-dashboard-view"),e()()()),l&2&&(u("p-actions",i.actions),m(2),u("p-active",i.activeTab==="doc"),m(2),u("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[P,x,C,se,ue,ge,fe],encapsulation:2})}return o})();var ke=[{path:"",component:he}],Se=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=L({type:o});static \u0275inj=k({imports:[J.forChild(ke),J]})}return o})();var st=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=L({type:o});static \u0275inj=k({imports:[me,Se]})}return o})();export{st as DocPoPageDefaultModule};
