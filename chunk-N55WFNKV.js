import{o as x,p as X}from"./chunk-PWV7L54J.js";import{Ab as C,F as G,Ga as K,Wa as V,a as H,ja as J,nb as Q,ob as k,zb as P}from"./chunk-TD36YFBB.js";import{$a as h,Ac as A,Ba as D,Ea as t,Fa as e,Ga as a,Ka as O,La as g,M as B,Nc as R,Pc as I,Rc as F,T as u,U as b,Wa as q,Xa as i,Za as _,ab as S,bb as f,eb as y,ha as r,ia as T,oa as E,pa as L,ub as w,wc as N,xc as W,ya as d,yc as j,zc as U}from"./chunk-MIQUIDUB.js";var Y=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-page-detail-basic"]],standalone:!1,decls:1,vars:0,consts:[["p-title","PO Page Detail"]],template:function(l,n){l&1&&a(0,"po-page-detail",0)},dependencies:[k],encapsulation:2})}return o})();var me=o=>({"docs-sample-code-tabs":o}),$=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-page-detail-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(a(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO Page Detail Basic"),e(),t(4,"a",2),g("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-page-detail-basic/sample-po-page-detail-basic.component.html"),e(),t(13,"pre",7),i(14,`<po-page-detail p-title="PO Page Detail"> </po-page-detail>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-page-detail-basic/sample-po-page-detail-basic.component.ts"),e(),t(19,"pre",9),i(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-page-detail-basic',
  templateUrl: './sample-po-page-detail-basic.component.html',
  standalone: false
})
export class SamplePoPageDetailBasicComponent {}
`),e()()()()(),t(21,"div",10),a(22,"sample-po-page-detail-basic"),e(),a(23,"hr")),l&2&&(r(5),D("po-icon "+n.sampleCodeButtonIcon),r(),_(" ",n.sampleCodeButtonLabel,""),r(),d("ngClass",y(4,me,n.hideSampleCodeTabs)))},dependencies:[w,x,P,C,Y],encapsulation:2})}return o})();var ee=(()=>{class o{action;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;literals;params;title;subtitle;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0}}addBreadcrumbParam(){let p={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,p):this.breadcrumb.params=p,this.breadcrumbParams={}}back(){this.action="back"}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}edit(){this.action="edit"}remove(){this.action="remove"}restore(){this.action="",this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize="medium",this.customLiterals=void 0,this.literals="",this.title="PO Page Detail",this.subtitle=""}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-page-detail-labs"]],standalone:!1,decls:33,vars:18,consts:[["f","ngForm"],["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],[3,"p-back","p-edit","p-remove","p-breadcrumb","p-components-size","p-literals","p-title","p-subtitle"],[1,"po-row"],["p-label","Action",1,"po-md-12",3,"p-value"],["name","title","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","literals","p-help",'Ex.: {"back": "Retornar", "edit": "Edi\xE7\xE3o", "remove": "Excluir registro"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,n){if(l&1){let s=O();t(0,"po-page-detail",4),g("p-back",function(){return u(s),b(n.back())})("p-edit",function(){return u(s),b(n.edit())})("p-remove",function(){return u(s),b(n.remove())}),t(1,"div",5),a(2,"po-info",6),e(),a(3,"hr"),t(4,"form",null,0)(6,"po-input",7),f("ngModelChange",function(m){return u(s),S(n.title,m)||(n.title=m),b(m)}),e(),t(7,"po-input",8),f("ngModelChange",function(m){return u(s),S(n.subtitle,m)||(n.subtitle=m),b(m)}),e(),t(8,"po-radio-group",9),f("ngModelChange",function(m){return u(s),S(n.componentsSize,m)||(n.componentsSize=m),b(m)}),e(),a(9,"hr"),t(10,"form",null,1)(12,"div",5)(13,"po-input",10),f("ngModelChange",function(m){return u(s),S(n.breadcrumb.favorite,m)||(n.breadcrumb.favorite=m),b(m)}),e()()(),t(14,"form",null,2)(16,"div",5)(17,"po-input",11),f("ngModelChange",function(m){return u(s),S(n.breadcrumbItem.label,m)||(n.breadcrumbItem.label=m),b(m)}),e(),t(18,"po-input",12),f("ngModelChange",function(m){return u(s),S(n.breadcrumbItem.link,m)||(n.breadcrumbItem.link=m),b(m)}),e()(),t(19,"div",5)(20,"po-button",13),g("p-click",function(){return u(s),b(n.addBreadcrumbItem())}),e()()(),a(21,"hr"),t(22,"form",null,3)(24,"div",5)(25,"po-input",14),f("ngModelChange",function(m){return u(s),S(n.breadcrumbParams.property,m)||(n.breadcrumbParams.property=m),b(m)}),e(),t(26,"po-input",15),f("ngModelChange",function(m){return u(s),S(n.breadcrumbParams.value,m)||(n.breadcrumbParams.value=m),b(m)}),e()(),t(27,"div",5)(28,"po-button",16),g("p-click",function(){return u(s),b(n.addBreadcrumbParam())}),e()()(),t(29,"div",5)(30,"po-input",17),f("ngModelChange",function(m){return u(s),S(n.literals,m)||(n.literals=m),b(m)}),g("p-change",function(){return u(s),b(n.changeLiterals())}),e()(),t(31,"div",5)(32,"po-button",18),g("p-click",function(){return u(s),b(n.restore())}),e()()()()}if(l&2){let s=q(15),c=q(23);d("p-breadcrumb",n.breadcrumb)("p-components-size",n.componentsSize)("p-literals",n.customLiterals)("p-title",n.title)("p-subtitle",n.subtitle),r(2),d("p-value",n.action),r(4),h("ngModel",n.title),r(),h("ngModel",n.subtitle),r(),h("ngModel",n.componentsSize),d("p-options",n.componentsSizeOptions),r(5),h("ngModel",n.breadcrumb.favorite),r(4),h("ngModel",n.breadcrumbItem.label),r(),h("ngModel",n.breadcrumbItem.link),r(2),d("p-disabled",s.invalid),r(5),h("ngModel",n.breadcrumbParams.property),r(),h("ngModel",n.breadcrumbParams.value),r(2),d("p-disabled",c.invalid),r(2),h("ngModel",n.literals)}},dependencies:[A,N,W,U,j,G,J,K,V,k],encapsulation:2})}return o})();var se=o=>({"docs-sample-code-tabs":o}),te=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-page-detail-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(a(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO Page Detail Labs"),e(),t(4,"a",2),g("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-page-detail-labs/sample-po-page-detail-labs.component.html"),e(),t(13,"pre",7),i(14,`<po-page-detail
  [p-breadcrumb]="breadcrumb"
  [p-components-size]="componentsSize"
  [p-literals]="customLiterals"
  [p-title]="title"
  (p-back)="back()"
  (p-edit)="edit()"
  (p-remove)="remove()"
  [p-subtitle]="subtitle"
>
  <div class="po-row">
    <po-info class="po-md-12" p-label="Action" [p-value]="action"> </po-info>
  </div>

  <hr />

  <form #f="ngForm">
    <po-input class="po-md-6" name="title" [(ngModel)]="title" p-label="Title"> </po-input>

    <po-input class="po-md-6" name="subtitle" [(ngModel)]="subtitle" p-label="Subtitle"> </po-input>

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
          class="po-md-6 po-lg-3"
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
          class="po-md-6 po-lg-3"
          p-label="Add breadcrumb params"
          [p-disabled]="formBreadcrumbParams.invalid"
          (p-click)="addBreadcrumbParam()"
        >
        </po-button>
      </div>
    </form>

    <div class="po-row">
      <po-input
        class="po-md-12 po-lg-6"
        name="literals"
        [(ngModel)]="literals"
        p-help='Ex.: {"back": "Retornar", "edit": "Edi\xE7\xE3o", "remove": "Excluir registro"}'
        p-label="Literals"
        (p-change)="changeLiterals()"
      >
      </po-input>
    </div>

    <div class="po-row">
      <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
    </div>
  </form>
</po-page-detail>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-page-detail-labs/sample-po-page-detail-labs.component.ts"),e(),t(19,"pre",9),i(20,`import { Component, OnInit } from '@angular/core';

import { PoBreadcrumb, PoBreadcrumbItem, PoPageDetailLiterals, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-detail-labs',
  templateUrl: './sample-po-page-detail-labs.component.html',
  standalone: false
})
export class SamplePoPageDetailLabsComponent implements OnInit {
  action: string;
  breadcrumb: PoBreadcrumb;
  breadcrumbItem: PoBreadcrumbItem;
  breadcrumbParams: any;
  componentsSize: string;
  customLiterals: PoPageDetailLiterals;
  literals: string;
  params: any;
  title: string;
  subtitle: string;

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
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

  back() {
    this.action = 'back';
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  edit() {
    this.action = 'edit';
  }

  remove() {
    this.action = 'remove';
  }

  restore() {
    this.action = '';
    this.breadcrumb = { items: [] };
    this.breadcrumbItem = { label: undefined, link: undefined };
    this.breadcrumbParams = {};
    this.componentsSize = 'medium';
    this.customLiterals = undefined;
    this.literals = '';
    this.title = 'PO Page Detail';
    this.subtitle = '';
  }
}
`),e()()()()(),t(21,"div",10),a(22,"sample-po-page-detail-labs"),e(),a(23,"hr")),l&2&&(r(5),D("po-icon "+n.sampleCodeButtonIcon),r(),_(" ",n.sampleCodeButtonLabel,""),r(),d("ngClass",y(4,se,n.hideSampleCodeTabs)))},dependencies:[w,x,P,C,ee],encapsulation:2})}return o})();var ie=(()=>{class o{router;birthDate="26/12/1978";email="john.doe@po-ui.com.br";fathersName="Mike Doe";genre="male";graduation="College Degree";mothersName="Jane Doe";name="John Doe";nationality="USA";nickname="John";placeOfBirth="Colorado";userId=122635;breadcrumb={items:[{label:"Home",link:"/"},{label:"User Detail"}]};constructor(p){this.router=p}edit(){this.router.navigate(["/documentation/po-page-edit"],{queryParams:{view:"web"}})}static \u0275fac=function(l){return new(l||o)(T(I))};static \u0275cmp=E({type:o,selectors:[["sample-po-page-detail-user"]],standalone:!1,decls:19,vars:12,consts:[["p-title","User Detail",3,"p-edit","p-breadcrumb"],[1,"po-row"],["p-label","User ID",1,"po-md-4",3,"p-value"],["p-label","E-mail",1,"po-md-4",3,"p-value"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Birth Date",1,"po-md-4",3,"p-value"],["p-label","Genre",1,"po-md-4",3,"p-value"],["p-label","Nationality",1,"po-md-4",3,"p-value"],["p-label","Place Of Birth",1,"po-md-4",3,"p-value"],["p-label","Graduation",1,"po-md-4",3,"p-value"],["p-label","Fathers Name",1,"po-md-4",3,"p-value"],["p-label","Mothers Name",1,"po-md-4",3,"p-value"]],template:function(l,n){l&1&&(t(0,"po-page-detail",0),g("p-edit",function(){return n.edit()}),t(1,"div",1),a(2,"po-info",2)(3,"po-info",3)(4,"po-info",4),e(),a(5,"po-divider"),t(6,"div",1),a(7,"po-info",5)(8,"po-info",6)(9,"po-info",7),e(),a(10,"po-divider"),t(11,"div",1),a(12,"po-info",8)(13,"po-info",9)(14,"po-info",10),e(),a(15,"po-divider"),t(16,"div",1),a(17,"po-info",11)(18,"po-info",12),e()()),l&2&&(d("p-breadcrumb",n.breadcrumb),r(2),d("p-value",n.userId),r(),d("p-value",n.email),r(),d("p-value",n.name),r(3),d("p-value",n.nickname),r(),d("p-value",n.birthDate),r(),d("p-value",n.genre),r(3),d("p-value",n.nationality),r(),d("p-value",n.placeOfBirth),r(),d("p-value",n.graduation),r(3),d("p-value",n.fathersName),r(),d("p-value",n.mothersName))},dependencies:[H,V,k],encapsulation:2})}return o})();var ge=o=>({"docs-sample-code-tabs":o}),ne=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-page-detail-user-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(a(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO Page Detail - User"),e(),t(4,"a",2),g("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-page-detail-user/sample-po-page-detail-user.component.html"),e(),t(13,"pre",7),i(14,`<po-page-detail p-title="User Detail" [p-breadcrumb]="breadcrumb" (p-edit)="edit()">
  <div class="po-row">
    <po-info class="po-md-4" p-label="User ID" [p-value]="userId"> </po-info>

    <po-info class="po-md-4" p-label="E-mail" [p-value]="email"> </po-info>

    <po-info class="po-md-4" p-label="Name" [p-value]="name"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-md-4" p-label="Nickname" [p-value]="nickname"> </po-info>

    <po-info class="po-md-4" p-label="Birth Date" [p-value]="birthDate"> </po-info>

    <po-info class="po-md-4" p-label="Genre" [p-value]="genre"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-md-4" p-label="Nationality" [p-value]="nationality"> </po-info>

    <po-info class="po-md-4" p-label="Place Of Birth" [p-value]="placeOfBirth"> </po-info>

    <po-info class="po-md-4" p-label="Graduation" [p-value]="graduation"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-md-4" p-label="Fathers Name" [p-value]="fathersName"> </po-info>

    <po-info class="po-md-4" p-label="Mothers Name" [p-value]="mothersName"> </po-info>
  </div>
</po-page-detail>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-page-detail-user/sample-po-page-detail-user.component.ts"),e(),t(19,"pre",9),i(20,`import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-detail-user',
  templateUrl: './sample-po-page-detail-user.component.html',
  standalone: false
})
export class SamplePoPageDetailUserComponent {
  birthDate: string = '26/12/1978';
  email: string = 'john.doe@po-ui.com.br';
  fathersName: string = 'Mike Doe';
  genre: string = 'male';
  graduation: string = 'College Degree';
  mothersName: string = 'Jane Doe';
  name: string = 'John Doe';
  nationality: string = 'USA';
  nickname: string = 'John';
  placeOfBirth: string = 'Colorado';
  userId: number = 122635;

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'User Detail' }]
  };

  constructor(private router: Router) {}

  edit() {
    this.router.navigate(['/documentation/po-page-edit'], { queryParams: { view: 'web' } });
  }
}
`),e()()()()(),t(21,"div",10),a(22,"sample-po-page-detail-user"),e(),a(23,"hr")),l&2&&(r(5),D("po-icon "+n.sampleCodeButtonIcon),r(),_(" ",n.sampleCodeButtonLabel,""),r(),d("ngClass",y(4,ge,n.hideSampleCodeTabs)))},dependencies:[w,x,P,C,ie],encapsulation:2})}return o})();var ae=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-page-detail-doc"]],standalone:!1,decls:555,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoPageDetailLiterals"],["href","/documentation/po-i18n"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"]],template:function(l,n){l&1&&(t(0,"div",0)(1,"p",1)(2,"code"),i(3,"import { PoPageModule } from '@po-ui/ng-components';"),e()(),t(4,"div",2)(5,"p"),i(6,`M\xF3dulo dos componentes po-page-default, po-page-detail, po-page-edit,
po-page-list e po-page-slide.`),e()(),t(7,"h3",3),i(8,"Componente"),e(),t(9,"h4",4)(10,"code",5),i(11,"PoPageDetailComponent"),e()(),t(12,"div",2)(13,"p"),i(14,"O componente "),t(15,"strong"),i(16,"po-page-detail"),e(),i(17,` \xE9 utilizado como container principal para a tela de
detalhamento de um registro, tendo a possibilidade de usar as a\xE7\xF5es de "Voltar", "Editar" e "Remover".`),e(),t(18,"h4"),i(19,"Tokens customiz\xE1veis"),e(),t(20,"blockquote")(21,"p"),i(22,"Para maiores informa\xE7\xF5es, acesse o guia "),t(23,"a",6),i(24,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),i(25,"."),e()(),t(26,"table")(27,"thead")(28,"tr")(29,"th"),i(30,"Propriedade"),e(),t(31,"th"),i(32,"Descri\xE7\xE3o"),e(),t(33,"th"),i(34,"Valor Padr\xE3o"),e(),a(35,"th"),e()(),t(36,"tbody")(37,"tr")(38,"td")(39,"strong"),i(40,"Header"),e()(),a(41,"td")(42,"td")(43,"td"),e(),t(44,"tr")(45,"td")(46,"code"),i(47,"--padding"),e()(),t(48,"td"),i(49,"Espa\xE7amento (top "),t(50,"code"),i(51,"@deprecated 20.x.x"),e(),i(52,", right, bottom "),t(53,"code"),i(54,"@deprecated 20.x.x"),e(),i(55,", left)"),e(),t(56,"td")(57,"code"),i(58,"0.5rem (@deprecated 20.x.x) 1.5rem"),e()(),a(59,"td"),e(),t(60,"tr")(61,"td")(62,"code"),i(63,"--gap"),e()(),t(64,"td"),i(65,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),e(),t(66,"td")(67,"code"),i(68,"1.5rem"),e()(),t(69,"td")(70,"code"),i(71,"@deprecated 20.x.x"),e()()(),t(72,"tr")(73,"td")(74,"code"),i(75,"--gap-actions"),e()(),t(76,"td"),i(77,"Espa\xE7amento entre as a\xE7\xF5es"),e(),t(78,"td")(79,"code"),i(80,"0.5rem"),e()(),a(81,"td"),e(),t(82,"tr")(83,"td")(84,"code"),i(85,"--font-family"),e()(),t(86,"td"),i(87,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),e(),t(88,"td")(89,"code"),i(90,"--font-family-theme"),e()(),a(91,"td"),e(),t(92,"tr")(93,"td")(94,"strong"),i(95,"Content"),e()(),a(96,"td")(97,"td")(98,"td"),e(),t(99,"tr")(100,"td")(101,"code"),i(102,"--padding-content"),e()(),t(103,"td"),i(104,"Espa\xE7amento (top, right, bottom, left)"),e(),t(105,"td")(106,"code"),i(107,"0.5rem 1.5rem"),e()(),t(108,"td")(109,"code"),i(110,"@deprecated 20.x.x"),e()()()()()(),t(111,"div",7)(112,"h4",8),i(113,"Seletor"),e(),t(114,"pre",9),i(115,`<po-page-detail
    (p-back)="EventEmitter"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    (p-edit)="EventEmitter"
    p-literals="PoPageDetailLiterals"
    (p-remove)="EventEmitter"
    p-subtitle="string"
    p-title="string" >
</po-page-detail>
`),e()(),t(116,"h4",10),i(117,"Propriedades"),e(),t(118,"table",11)(119,"tr",12)(120,"th",13),i(121,"Nome"),e(),t(122,"th",13),i(123,"Tipo"),e(),t(124,"th",13),i(125,"Padr\xE3o"),e(),t(126,"th",13),i(127,"Descri\xE7\xE3o"),e()(),t(128,"tr",14)(129,"td",15)(130,"div",16)(131,"span",17),i(132," (p-back)"),a(133,"br"),e()()(),t(134,"td",18)(135,"code",19),i(136,"EventEmitter"),e()(),t(137,"td",20),i(138,"-"),e(),t(139,"td",21)(140,"p"),i(141,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Voltar".'),e(),t(142,"pre")(143,"code"),i(144,`<po-page-detail (p-back)="myBackFunction()">
</po-page-detail>
`),e()(),t(145,"blockquote")(146,"p"),i(147,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Voltar" n\xE3o ser\xE1 exibido.'),e()()()(),t(148,"tr",14)(149,"td",15)(150,"div",22)(151,"span",23),i(152," p-breadcrumb"),a(153,"br"),e()()(),t(154,"td",18)(155,"code",24),i(156,"PoBreadcrumb"),e()(),t(157,"td",20),i(158,"-"),e(),t(159,"td",21)(160,"p"),i(161,"Objeto com propriedades do breadcrumb."),e()()(),t(162,"tr",14)(163,"td",15)(164,"div",22)(165,"span",23),i(166," p-components-size"),a(167,"br"),e()()(),t(168,"td",18)(169,"code",25),i(170,"string"),e()(),t(171,"td",20)(172,"p")(173,"code"),i(174,"medium"),e()()(),t(175,"td",21)(176,"em")(177,"strong"),i(178,"(opcional)"),e()(),t(179,"p"),i(180,"Define o tamanho dos componentes de formul\xE1rio no template:"),e(),t(181,"ul")(182,"li")(183,"code"),i(184,"small"),e(),i(185,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),e(),t(186,"li")(187,"code"),i(188,"medium"),e(),i(189,": aplica a medida medium de cada componente."),e()(),t(190,"blockquote")(191,"p"),i(192,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),t(193,"code"),i(194,"medium"),e(),i(195,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),t(196,"a",26),i(197,"po-theme"),e(),i(198,"."),e()()()(),t(199,"tr",14)(200,"td",15)(201,"div",16)(202,"span",17),i(203," (p-edit)"),a(204,"br"),e()()(),t(205,"td",18)(206,"code",19),i(207,"EventEmitter"),e()(),t(208,"td",20),i(209,"-"),e(),t(210,"td",21)(211,"p"),i(212,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Editar".'),e(),t(213,"pre")(214,"code"),i(215,`<po-page-detail (p-edit)="myEditFunction()">
</po-page-detail>
`),e()(),t(216,"blockquote")(217,"p"),i(218,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Editar" n\xE3o ser\xE1 exibido.'),e()()()(),t(219,"tr",14)(220,"td",15)(221,"div",22)(222,"span",23),i(223," p-literals"),a(224,"br"),e()()(),t(225,"td",18)(226,"code",27),i(227,"PoPageDetailLiterals"),e()(),t(228,"td",20),i(229,"-"),e(),t(230,"td",21)(231,"em")(232,"strong"),i(233,"(opcional)"),e()(),t(234,"p"),i(235,"Objeto com as literais usadas no "),t(236,"code"),i(237,"po-page-detail"),e(),i(238,"."),e(),t(239,"p"),i(240,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),e(),t(241,"pre")(242,"code"),i(243,`const customLiterals: PoPageDetailLiterals = {
  edit: 'Edi\xE7\xE3o',
  remove: 'Exclus\xE3o',
  back: 'Menu'
};
`),e()(),t(244,"p"),i(245,"Ou passando apenas as literais que deseja customizar:"),e(),t(246,"pre")(247,"code"),i(248,`const customLiterals: PoPageDetailLiterals = {
  remove: 'Excluir registro permanentemente'
};
`),e()(),t(249,"p"),i(250,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),e(),t(251,"pre")(252,"code"),i(253,`<po-page-detail
  [p-literals]="customLiterals">
</po-page-detail>
`),e()(),t(254,"blockquote")(255,"p"),i(256,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),t(257,"a",28)(258,"code"),i(259,"PoI18nService"),e()(),i(260," ou do browser."),e()()()(),t(261,"tr",14)(262,"td",15)(263,"div",16)(264,"span",17),i(265," (p-remove)"),a(266,"br"),e()()(),t(267,"td",18)(268,"code",19),i(269,"EventEmitter"),e()(),t(270,"td",20),i(271,"-"),e(),t(272,"td",21)(273,"p"),i(274,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Remover".'),e(),t(275,"pre")(276,"code"),i(277,`<po-page-detail (p-remove)="myRemoveFunction()">
</po-page-detail>
`),e()(),t(278,"blockquote")(279,"p"),i(280,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Remover" n\xE3o ser\xE1 exibido.'),e()()()(),t(281,"tr",14)(282,"td",15)(283,"div",22)(284,"span",23),i(285," p-subtitle"),a(286,"br"),e()()(),t(287,"td",18)(288,"code",25),i(289,"string"),e()(),t(290,"td",20),i(291,"-"),e(),t(292,"td",21)(293,"em")(294,"strong"),i(295,"(opcional)"),e()(),t(296,"p"),i(297,"Subtitulo do Header da p\xE1gina"),e()()(),t(298,"tr",14)(299,"td",15)(300,"div",22)(301,"span",23),i(302," p-title"),a(303,"br"),e()()(),t(304,"td",18)(305,"code",25),i(306,"string"),e()(),t(307,"td",20),i(308,"-"),e(),t(309,"td",21)(310,"p"),i(311,"T\xEDtulo da p\xE1gina."),e()()()(),t(312,"h3"),i(313,"Interfaces"),e(),t(314,"h4",29)(315,"code",5),i(316,"PoBreadcrumbItem"),e()(),t(317,"div",2)(318,"p"),i(319,"Interface que define cada item do componente "),t(320,"strong"),i(321,"po-breadcrumb"),e(),i(322,"."),e()(),t(323,"h4",10),i(324,"Propriedades"),e(),t(325,"table",11)(326,"tr",12)(327,"th",13),i(328,"Nome"),e(),t(329,"th",13),i(330,"Tipo"),e(),t(331,"th",13),i(332,"Descri\xE7\xE3o"),e()(),t(333,"tr",14)(334,"td",15)(335,"div",22)(336,"span",23),i(337," action"),a(338,"br"),e()()(),t(339,"td",18)(340,"code",30),i(341,"Function"),e()(),t(342,"td",21)(343,"em")(344,"strong"),i(345,"(opcional)"),e()(),t(346,"p"),i(347,"A\xE7\xE3o executada ao clicar no item."),e(),t(348,"blockquote")(349,"p"),i(350,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),t(351,"em"),i(352,"label"),e(),i(353," do item como par\xE2metro para execu\xE7\xE3o."),e()()()(),t(354,"tr",14)(355,"td",15)(356,"div",22)(357,"span",23),i(358," label"),a(359,"br"),e()()(),t(360,"td",18)(361,"code",25),i(362,"string"),e()(),t(363,"td",21)(364,"p"),i(365,"R\xF3tulo do item."),e()()(),t(366,"tr",14)(367,"td",15)(368,"div",22)(369,"span",23),i(370," link"),a(371,"br"),e()()(),t(372,"td",18)(373,"code",25),i(374,"string"),e()(),t(375,"td",21)(376,"em")(377,"strong"),i(378,"(opcional)"),e()(),t(379,"p"),i(380,"Url do item."),e(),t(381,"blockquote")(382,"p"),i(383,"Caso o item tamb\xE9m contenha uma "),t(384,"em"),i(385,"action"),e(),i(386," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),t(387,"em"),i(388,"link"),e(),i(389,"."),e()(),t(390,"blockquote")(391,"p"),i(392,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),t(393,"strong")(394,"a",31),i(395,"Veja um exemplo de como criar rotas aqui"),e()(),i(396,"."),e()(),t(397,"blockquote")(398,"p"),i(399,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),t(400,"code"),i(401,"p-favorite-service"),e(),i(402," consiga favoritar ou desfavoritar."),e()()()()(),t(403,"h4",29)(404,"code",5),i(405,"PoBreadcrumb"),e()(),t(406,"div",2)(407,"p"),i(408,"Interface que define o "),t(409,"code"),i(410,"po-breadcrumb"),e(),i(411,"."),e()(),t(412,"h4",10),i(413,"Propriedades"),e(),t(414,"table",11)(415,"tr",12)(416,"th",13),i(417,"Nome"),e(),t(418,"th",13),i(419,"Tipo"),e(),t(420,"th",13),i(421,"Descri\xE7\xE3o"),e()(),t(422,"tr",14)(423,"td",15)(424,"div",22)(425,"span",23),i(426," favorite"),a(427,"br"),e()()(),t(428,"td",18)(429,"code",25),i(430,"string"),e()(),t(431,"td",21)(432,"em")(433,"strong"),i(434,"(opcional)"),e()(),t(435,"p"),i(436,"Permite definir uma URL para favoritar ou desfavoritar."),e(),t(437,"blockquote")(438,"p"),i(439,"Para maiores informa\xE7\xF5es verificar a propriedade "),t(440,"code"),i(441,"p-favorite-service"),e(),i(442," do componente "),t(443,"code"),i(444,"po-breadcrumb"),e(),i(445,"."),e()()()(),t(446,"tr",14)(447,"td",15)(448,"div",22)(449,"span",23),i(450," items"),a(451,"br"),e()()(),t(452,"td",18)(453,"code",32),i(454,"Array<PoBreadcrumbItem>"),e()(),t(455,"td",21)(456,"p"),i(457,"Lista de itens do "),t(458,"em"),i(459,"breadcrumb"),e(),i(460,"."),e(),t(461,"p")(462,"strong"),i(463,"Exemplo:"),e()(),t(464,"pre")(465,"code"),i(466,`{ label: 'Po Portal', link: 'portal' }
`),e()()()(),t(467,"tr",14)(468,"td",15)(469,"div",22)(470,"span",23),i(471," params"),a(472,"br"),e()()(),t(473,"td",18)(474,"code",33),i(475,"object"),e()(),t(476,"td",21)(477,"em")(478,"strong"),i(479,"(opcional)"),e()(),t(480,"p"),i(481,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),e()()()(),t(482,"h4",29)(483,"code",5),i(484,"PoPageDetailLiterals"),e()(),t(485,"div",2)(486,"p"),i(487,"Interface para defini\xE7\xE3o das literais usadas no "),t(488,"code"),i(489,"po-page-detail"),e(),i(490,"."),e()(),t(491,"h4",10),i(492,"Propriedades"),e(),t(493,"table",11)(494,"tr",12)(495,"th",13),i(496,"Nome"),e(),t(497,"th",13),i(498,"Tipo"),e(),t(499,"th",13),i(500,"Descri\xE7\xE3o"),e()(),t(501,"tr",14)(502,"td",15)(503,"div",22)(504,"span",23),i(505," back"),a(506,"br"),e()()(),t(507,"td",18)(508,"code",25),i(509,"string"),e()(),t(510,"td",21)(511,"em")(512,"strong"),i(513,"(opcional)"),e()(),t(514,"p"),i(515,"Label da a\xE7\xE3o "),t(516,"code"),i(517,"back"),e(),i(518,"."),e()()(),t(519,"tr",14)(520,"td",15)(521,"div",22)(522,"span",23),i(523," edit"),a(524,"br"),e()()(),t(525,"td",18)(526,"code",25),i(527,"string"),e()(),t(528,"td",21)(529,"em")(530,"strong"),i(531,"(opcional)"),e()(),t(532,"p"),i(533,"Label da a\xE7\xE3o "),t(534,"code"),i(535,"edit"),e(),i(536,"."),e()()(),t(537,"tr",14)(538,"td",15)(539,"div",22)(540,"span",23),i(541," remove"),a(542,"br"),e()()(),t(543,"td",18)(544,"code",25),i(545,"string"),e()(),t(546,"td",21)(547,"em")(548,"strong"),i(549,"(opcional)"),e()(),t(550,"p"),i(551,"Label da a\xE7\xE3o "),t(552,"code"),i(553,"remove"),e(),i(554,"."),e()()()()())},dependencies:[x],encapsulation:2})}return o})();var oe=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||o)(T(R),T(I))};static \u0275cmp=E({type:o,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Page Detail",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),g("p-click",function(){return n.changeTab("doc")}),a(3,"sample-po-page-detail-doc"),e(),t(4,"po-tab",3),g("p-click",function(){return n.changeTab("web")}),a(5,"sample-po-page-detail-basic-view")(6,"sample-po-page-detail-labs-view")(7,"sample-po-page-detail-user-view"),e()()()),l&2&&(d("p-actions",n.actions),r(2),d("p-active",n.activeTab==="doc"),r(2),d("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[Q,P,C,$,te,ne,ae],encapsulation:2})}return o})();var Se=[{path:"",component:oe}],le=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=L({type:o});static \u0275inj=B({imports:[F.forChild(Se),F]})}return o})();var Ue=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=L({type:o});static \u0275inj=B({imports:[X,le]})}return o})();export{Ue as DocPoPageDetailModule};
