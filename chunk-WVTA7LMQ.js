import{o as x,p as Y}from"./chunk-ZC2HZG7B.js";import{Ab as C,Fa as Q,Q as K,Xa as V,a as I,nb as X,ob as k,v as J,zb as P}from"./chunk-TPH26USO.js";import{$c as z,Aa as p,Da as D,Fb as w,Gc as j,Hc as U,Ic as A,Jc as R,Kc as H,La as t,Ma as e,N as T,Na as o,Q as N,Ra as W,Sa as g,U as u,V as b,Xc as G,Zc as L,bb as F,cb as i,eb as _,gb as S,hb as h,ib as v,ja as r,ka as q,ob as y,qa as E,ra as B}from"./chunk-CBLD3XJL.js";var Z=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-page-detail-basic"]],standalone:!1,decls:1,vars:0,consts:[["p-title","PO Page Detail"]],template:function(l,n){l&1&&o(0,"po-page-detail",0)},dependencies:[k],encapsulation:2})}return a})();var pe=a=>({"docs-sample-code-tabs":a}),ee=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-page-detail-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(o(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO Page Detail Basic"),e(),t(4,"a",2),g("click",function(){return n.toggleSampleCodeTabs()}),o(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-page-detail-basic/sample-po-page-detail-basic.component.html"),e(),t(13,"pre",7),i(14,`<po-page-detail p-title="PO Page Detail"> </po-page-detail>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-page-detail-basic/sample-po-page-detail-basic.component.ts"),e(),t(19,"pre",9),i(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-page-detail-basic',
  templateUrl: './sample-po-page-detail-basic.component.html',
  standalone: false
})
export class SamplePoPageDetailBasicComponent {}
`),e()()()()(),t(21,"div",10),o(22,"sample-po-page-detail-basic"),e(),o(23,"hr")),l&2&&(r(5),D("po-icon "+n.sampleCodeButtonIcon),r(),_(" ",n.sampleCodeButtonLabel,""),r(),p("ngClass",y(4,pe,n.hideSampleCodeTabs)))},dependencies:[w,x,P,C,Z],encapsulation:2})}return a})();var te=(()=>{class a{action;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;literals;params;title;subtitle;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0}}addBreadcrumbParam(){let d={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,d):this.breadcrumb.params=d,this.breadcrumbParams={}}back(){this.action="back"}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}edit(){this.action="edit"}remove(){this.action="remove"}restore(){this.action="",this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize="medium",this.customLiterals=void 0,this.literals="",this.title="PO Page Detail",this.subtitle=""}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-page-detail-labs"]],standalone:!1,decls:33,vars:18,consts:[["f","ngForm"],["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],[3,"p-back","p-edit","p-remove","p-breadcrumb","p-components-size","p-literals","p-title","p-subtitle"],[1,"po-row"],["p-label","Action",1,"po-md-12",3,"p-value"],["name","title","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","literals","p-help",'Ex.: {"back": "Retornar", "edit": "Edi\xE7\xE3o", "remove": "Excluir registro"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,n){if(l&1){let s=W();t(0,"po-page-detail",4),g("p-back",function(){return u(s),b(n.back())})("p-edit",function(){return u(s),b(n.edit())})("p-remove",function(){return u(s),b(n.remove())}),t(1,"div",5),o(2,"po-info",6),e(),o(3,"po-divider"),t(4,"form",null,0)(6,"po-input",7),v("ngModelChange",function(m){return u(s),h(n.title,m)||(n.title=m),b(m)}),e(),t(7,"po-input",8),v("ngModelChange",function(m){return u(s),h(n.subtitle,m)||(n.subtitle=m),b(m)}),e(),t(8,"po-radio-group",9),v("ngModelChange",function(m){return u(s),h(n.componentsSize,m)||(n.componentsSize=m),b(m)}),e(),o(9,"po-divider"),t(10,"form",null,1)(12,"div",5)(13,"po-input",10),v("ngModelChange",function(m){return u(s),h(n.breadcrumb.favorite,m)||(n.breadcrumb.favorite=m),b(m)}),e()()(),t(14,"form",null,2)(16,"div",5)(17,"po-input",11),v("ngModelChange",function(m){return u(s),h(n.breadcrumbItem.label,m)||(n.breadcrumbItem.label=m),b(m)}),e(),t(18,"po-input",12),v("ngModelChange",function(m){return u(s),h(n.breadcrumbItem.link,m)||(n.breadcrumbItem.link=m),b(m)}),e()(),t(19,"div",5)(20,"po-button",13),g("p-click",function(){return u(s),b(n.addBreadcrumbItem())}),e()()(),o(21,"po-divider"),t(22,"form",null,3)(24,"div",5)(25,"po-input",14),v("ngModelChange",function(m){return u(s),h(n.breadcrumbParams.property,m)||(n.breadcrumbParams.property=m),b(m)}),e(),t(26,"po-input",15),v("ngModelChange",function(m){return u(s),h(n.breadcrumbParams.value,m)||(n.breadcrumbParams.value=m),b(m)}),e()(),t(27,"div",5)(28,"po-button",16),g("p-click",function(){return u(s),b(n.addBreadcrumbParam())}),e()()(),t(29,"div",5)(30,"po-input",17),v("ngModelChange",function(m){return u(s),h(n.literals,m)||(n.literals=m),b(m)}),g("p-change",function(){return u(s),b(n.changeLiterals())}),e()(),t(31,"div",5)(32,"po-button",18),g("p-click",function(){return u(s),b(n.restore())}),e()()()()}if(l&2){let s=F(15),c=F(23);p("p-breadcrumb",n.breadcrumb)("p-components-size",n.componentsSize)("p-literals",n.customLiterals)("p-title",n.title)("p-subtitle",n.subtitle),r(2),p("p-value",n.action),r(4),S("ngModel",n.title),r(),S("ngModel",n.subtitle),r(),S("ngModel",n.componentsSize),p("p-options",n.componentsSizeOptions),r(5),S("ngModel",n.breadcrumb.favorite),r(4),S("ngModel",n.breadcrumbItem.label),r(),S("ngModel",n.breadcrumbItem.link),r(2),p("p-disabled",s.invalid),r(5),S("ngModel",n.breadcrumbParams.property),r(),S("ngModel",n.breadcrumbParams.value),r(2),p("p-disabled",c.invalid),r(2),S("ngModel",n.literals)}},dependencies:[H,j,U,R,A,J,I,K,Q,V,k],encapsulation:2})}return a})();var ce=a=>({"docs-sample-code-tabs":a}),ie=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-page-detail-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(o(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO Page Detail Labs"),e(),t(4,"a",2),g("click",function(){return n.toggleSampleCodeTabs()}),o(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-page-detail-labs/sample-po-page-detail-labs.component.html"),e(),t(13,"pre",7),i(14,`<po-page-detail
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

  <po-divider />

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
          class="po-md-6 po-lg-3"
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
`),e()()()()(),t(21,"div",10),o(22,"sample-po-page-detail-labs"),e(),o(23,"hr")),l&2&&(r(5),D("po-icon "+n.sampleCodeButtonIcon),r(),_(" ",n.sampleCodeButtonLabel,""),r(),p("ngClass",y(4,ce,n.hideSampleCodeTabs)))},dependencies:[w,x,P,C,te],encapsulation:2})}return a})();var ne=(()=>{class a{router=N(L);birthDate="26/12/1978";email="john.doe@po-ui.com.br";fathersName="Mike Doe";genre="male";graduation="College Degree";mothersName="Jane Doe";name="John Doe";nationality="USA";nickname="John";placeOfBirth="Colorado";userId=122635;breadcrumb={items:[{label:"Home",link:"/"},{label:"User Detail"}]};edit(){this.router.navigate(["/documentation/po-page-edit"],{queryParams:{view:"web"}})}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-page-detail-user"]],standalone:!1,decls:19,vars:12,consts:[["p-title","User Detail",3,"p-edit","p-breadcrumb"],[1,"po-row"],["p-label","User ID",1,"po-md-4",3,"p-value"],["p-label","E-mail",1,"po-md-4",3,"p-value"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Birth Date",1,"po-md-4",3,"p-value"],["p-label","Genre",1,"po-md-4",3,"p-value"],["p-label","Nationality",1,"po-md-4",3,"p-value"],["p-label","Place Of Birth",1,"po-md-4",3,"p-value"],["p-label","Graduation",1,"po-md-4",3,"p-value"],["p-label","Fathers Name",1,"po-md-4",3,"p-value"],["p-label","Mothers Name",1,"po-md-4",3,"p-value"]],template:function(l,n){l&1&&(t(0,"po-page-detail",0),g("p-edit",function(){return n.edit()}),t(1,"div",1),o(2,"po-info",2)(3,"po-info",3)(4,"po-info",4),e(),o(5,"po-divider"),t(6,"div",1),o(7,"po-info",5)(8,"po-info",6)(9,"po-info",7),e(),o(10,"po-divider"),t(11,"div",1),o(12,"po-info",8)(13,"po-info",9)(14,"po-info",10),e(),o(15,"po-divider"),t(16,"div",1),o(17,"po-info",11)(18,"po-info",12),e()()),l&2&&(p("p-breadcrumb",n.breadcrumb),r(2),p("p-value",n.userId),r(),p("p-value",n.email),r(),p("p-value",n.name),r(3),p("p-value",n.nickname),r(),p("p-value",n.birthDate),r(),p("p-value",n.genre),r(3),p("p-value",n.nationality),r(),p("p-value",n.placeOfBirth),r(),p("p-value",n.graduation),r(3),p("p-value",n.fathersName),r(),p("p-value",n.mothersName))},dependencies:[I,V,k],encapsulation:2})}return a})();var ge=a=>({"docs-sample-code-tabs":a}),ae=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-page-detail-user-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(o(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO Page Detail - User"),e(),t(4,"a",2),g("click",function(){return n.toggleSampleCodeTabs()}),o(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-page-detail-user/sample-po-page-detail-user.component.html"),e(),t(13,"pre",7),i(14,`<po-page-detail p-title="User Detail" [p-breadcrumb]="breadcrumb" (p-edit)="edit()">
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
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-page-detail-user/sample-po-page-detail-user.component.ts"),e(),t(19,"pre",9),i(20,`import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-detail-user',
  templateUrl: './sample-po-page-detail-user.component.html',
  standalone: false
})
export class SamplePoPageDetailUserComponent {
  private router = inject(Router);

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

  edit() {
    this.router.navigate(['/documentation/po-page-edit'], { queryParams: { view: 'web' } });
  }
}
`),e()()()()(),t(21,"div",10),o(22,"sample-po-page-detail-user"),e(),o(23,"hr")),l&2&&(r(5),D("po-icon "+n.sampleCodeButtonIcon),r(),_(" ",n.sampleCodeButtonLabel,""),r(),p("ngClass",y(4,ge,n.hideSampleCodeTabs)))},dependencies:[w,x,P,C,ne],encapsulation:2})}return a})();var oe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-page-detail-doc"]],standalone:!1,decls:537,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoPageDetailLiterals"],["href","/documentation/po-i18n"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"]],template:function(l,n){l&1&&(t(0,"div",0)(1,"p",1)(2,"code"),i(3,"import { PoPageModule } from '@po-ui/ng-components';"),e()(),t(4,"div",2)(5,"p"),i(6,`M\xF3dulo dos componentes po-page-default, po-page-detail, po-page-edit,
po-page-list e po-page-slide.`),e()(),t(7,"h3",3),i(8,"Componente"),e(),t(9,"h4",4)(10,"code",5),i(11,"PoPageDetailComponent"),e()(),t(12,"div",2)(13,"p"),i(14,"O componente "),t(15,"strong"),i(16,"po-page-detail"),e(),i(17,` \xE9 utilizado como container principal para a tela de
detalhamento de um registro, tendo a possibilidade de usar as a\xE7\xF5es de "Voltar", "Editar" e "Remover".`),e(),t(18,"h4"),i(19,"Tokens customiz\xE1veis"),e(),t(20,"blockquote")(21,"p"),i(22,"Para maiores informa\xE7\xF5es, acesse o guia "),t(23,"a",6),i(24,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),i(25,"."),e()(),t(26,"table")(27,"thead")(28,"tr")(29,"th"),i(30,"Propriedade"),e(),t(31,"th"),i(32,"Descri\xE7\xE3o"),e(),t(33,"th"),i(34,"Valor Padr\xE3o"),e()()(),t(35,"tbody")(36,"tr")(37,"td")(38,"strong"),i(39,"Header"),e()(),o(40,"td")(41,"td"),e(),t(42,"tr")(43,"td")(44,"code"),i(45,"--padding"),e()(),t(46,"td"),i(47,"Espa\xE7amento do header"),e(),t(48,"td")(49,"code"),i(50,"var(--spacing-xs) var(--spacing-md)"),e()()(),t(51,"tr")(52,"td")(53,"code"),i(54,"--gap"),e()(),t(55,"td"),i(56,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),e(),t(57,"td")(58,"code"),i(59,"var(--spacing-md)"),e()()(),t(60,"tr")(61,"td")(62,"code"),i(63,"--gap-actions"),e()(),t(64,"td"),i(65,"Espa\xE7amento entre as a\xE7\xF5es"),e(),t(66,"td")(67,"code"),i(68,"var(--spacing-xs)"),e()()(),t(69,"tr")(70,"td")(71,"code"),i(72,"--font-family"),e()(),t(73,"td"),i(74,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),e(),t(75,"td")(76,"code"),i(77,"var(--font-family-theme)"),e()()(),t(78,"tr")(79,"td")(80,"strong"),i(81,"Content"),e()(),o(82,"td")(83,"td"),e(),t(84,"tr")(85,"td")(86,"code"),i(87,"--padding-content"),e()(),t(88,"td"),i(89,"Espa\xE7amento do conte\xFAdo"),e(),t(90,"td")(91,"code"),i(92,"var(--spacing-xs) var(--spacing-sm)"),e()()()()()(),t(93,"div",7)(94,"h4",8),i(95,"Seletor"),e(),t(96,"pre",9),i(97,`<po-page-detail
    (p-back)="EventEmitter"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    (p-edit)="EventEmitter"
    p-literals="PoPageDetailLiterals"
    (p-remove)="EventEmitter"
    p-subtitle="string"
    p-title="string" >
</po-page-detail>
`),e()(),t(98,"h4",10),i(99,"Propriedades"),e(),t(100,"table",11)(101,"tr",12)(102,"th",13),i(103,"Nome"),e(),t(104,"th",13),i(105,"Tipo"),e(),t(106,"th",13),i(107,"Padr\xE3o"),e(),t(108,"th",13),i(109,"Descri\xE7\xE3o"),e()(),t(110,"tr",14)(111,"td",15)(112,"div",16)(113,"span",17),i(114," (p-back)"),o(115,"br"),e()()(),t(116,"td",18)(117,"code",19),i(118,"EventEmitter"),e()(),t(119,"td",20),i(120,"-"),e(),t(121,"td",21)(122,"p"),i(123,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Voltar".'),e(),t(124,"pre")(125,"code"),i(126,`<po-page-detail (p-back)="myBackFunction()">
</po-page-detail>
`),e()(),t(127,"blockquote")(128,"p"),i(129,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Voltar" n\xE3o ser\xE1 exibido.'),e()()()(),t(130,"tr",14)(131,"td",15)(132,"div",22)(133,"span",23),i(134," p-breadcrumb"),o(135,"br"),e()()(),t(136,"td",18)(137,"code",24),i(138,"PoBreadcrumb"),e()(),t(139,"td",20),i(140,"-"),e(),t(141,"td",21)(142,"p"),i(143,"Objeto com propriedades do breadcrumb."),e()()(),t(144,"tr",14)(145,"td",15)(146,"div",22)(147,"span",23),i(148," p-components-size"),o(149,"br"),e()()(),t(150,"td",18)(151,"code",25),i(152,"string"),e()(),t(153,"td",20)(154,"p")(155,"code"),i(156,"medium"),e()()(),t(157,"td",21)(158,"em")(159,"strong"),i(160,"(opcional)"),e()(),t(161,"p"),i(162,"Define o tamanho dos componentes de formul\xE1rio no template:"),e(),t(163,"ul")(164,"li")(165,"code"),i(166,"small"),e(),i(167,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),e(),t(168,"li")(169,"code"),i(170,"medium"),e(),i(171,": aplica a medida medium de cada componente."),e()(),t(172,"blockquote")(173,"p"),i(174,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),t(175,"code"),i(176,"medium"),e(),i(177,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),t(178,"a",26),i(179,"po-theme"),e(),i(180,"."),e()()()(),t(181,"tr",14)(182,"td",15)(183,"div",16)(184,"span",17),i(185," (p-edit)"),o(186,"br"),e()()(),t(187,"td",18)(188,"code",19),i(189,"EventEmitter"),e()(),t(190,"td",20),i(191,"-"),e(),t(192,"td",21)(193,"p"),i(194,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Editar".'),e(),t(195,"pre")(196,"code"),i(197,`<po-page-detail (p-edit)="myEditFunction()">
</po-page-detail>
`),e()(),t(198,"blockquote")(199,"p"),i(200,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Editar" n\xE3o ser\xE1 exibido.'),e()()()(),t(201,"tr",14)(202,"td",15)(203,"div",22)(204,"span",23),i(205," p-literals"),o(206,"br"),e()()(),t(207,"td",18)(208,"code",27),i(209,"PoPageDetailLiterals"),e()(),t(210,"td",20),i(211,"-"),e(),t(212,"td",21)(213,"em")(214,"strong"),i(215,"(opcional)"),e()(),t(216,"p"),i(217,"Objeto com as literais usadas no "),t(218,"code"),i(219,"po-page-detail"),e(),i(220,"."),e(),t(221,"p"),i(222,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),e(),t(223,"pre")(224,"code"),i(225,`const customLiterals: PoPageDetailLiterals = {
  edit: 'Edi\xE7\xE3o',
  remove: 'Exclus\xE3o',
  back: 'Menu'
};
`),e()(),t(226,"p"),i(227,"Ou passando apenas as literais que deseja customizar:"),e(),t(228,"pre")(229,"code"),i(230,`const customLiterals: PoPageDetailLiterals = {
  remove: 'Excluir registro permanentemente'
};
`),e()(),t(231,"p"),i(232,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),e(),t(233,"pre")(234,"code"),i(235,`<po-page-detail
  [p-literals]="customLiterals">
</po-page-detail>
`),e()(),t(236,"blockquote")(237,"p"),i(238,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),t(239,"a",28)(240,"code"),i(241,"PoI18nService"),e()(),i(242," ou do browser."),e()()()(),t(243,"tr",14)(244,"td",15)(245,"div",16)(246,"span",17),i(247," (p-remove)"),o(248,"br"),e()()(),t(249,"td",18)(250,"code",19),i(251,"EventEmitter"),e()(),t(252,"td",20),i(253,"-"),e(),t(254,"td",21)(255,"p"),i(256,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Remover".'),e(),t(257,"pre")(258,"code"),i(259,`<po-page-detail (p-remove)="myRemoveFunction()">
</po-page-detail>
`),e()(),t(260,"blockquote")(261,"p"),i(262,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Remover" n\xE3o ser\xE1 exibido.'),e()()()(),t(263,"tr",14)(264,"td",15)(265,"div",22)(266,"span",23),i(267," p-subtitle"),o(268,"br"),e()()(),t(269,"td",18)(270,"code",25),i(271,"string"),e()(),t(272,"td",20),i(273,"-"),e(),t(274,"td",21)(275,"em")(276,"strong"),i(277,"(opcional)"),e()(),t(278,"p"),i(279,"Subtitulo do Header da p\xE1gina"),e()()(),t(280,"tr",14)(281,"td",15)(282,"div",22)(283,"span",23),i(284," p-title"),o(285,"br"),e()()(),t(286,"td",18)(287,"code",25),i(288,"string"),e()(),t(289,"td",20),i(290,"-"),e(),t(291,"td",21)(292,"p"),i(293,"T\xEDtulo da p\xE1gina."),e()()()(),t(294,"h3"),i(295,"Interfaces"),e(),t(296,"h4",29)(297,"code",5),i(298,"PoBreadcrumbItem"),e()(),t(299,"div",2)(300,"p"),i(301,"Interface que define cada item do componente "),t(302,"strong"),i(303,"po-breadcrumb"),e(),i(304,"."),e()(),t(305,"h4",10),i(306,"Propriedades"),e(),t(307,"table",11)(308,"tr",12)(309,"th",13),i(310,"Nome"),e(),t(311,"th",13),i(312,"Tipo"),e(),t(313,"th",13),i(314,"Descri\xE7\xE3o"),e()(),t(315,"tr",14)(316,"td",15)(317,"div",22)(318,"span",23),i(319," action"),o(320,"br"),e()()(),t(321,"td",18)(322,"code",30),i(323,"Function"),e()(),t(324,"td",21)(325,"em")(326,"strong"),i(327,"(opcional)"),e()(),t(328,"p"),i(329,"A\xE7\xE3o executada ao clicar no item."),e(),t(330,"blockquote")(331,"p"),i(332,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),t(333,"em"),i(334,"label"),e(),i(335," do item como par\xE2metro para execu\xE7\xE3o."),e()()()(),t(336,"tr",14)(337,"td",15)(338,"div",22)(339,"span",23),i(340," label"),o(341,"br"),e()()(),t(342,"td",18)(343,"code",25),i(344,"string"),e()(),t(345,"td",21)(346,"p"),i(347,"R\xF3tulo do item."),e()()(),t(348,"tr",14)(349,"td",15)(350,"div",22)(351,"span",23),i(352," link"),o(353,"br"),e()()(),t(354,"td",18)(355,"code",25),i(356,"string"),e()(),t(357,"td",21)(358,"em")(359,"strong"),i(360,"(opcional)"),e()(),t(361,"p"),i(362,"Url do item."),e(),t(363,"blockquote")(364,"p"),i(365,"Caso o item tamb\xE9m contenha uma "),t(366,"em"),i(367,"action"),e(),i(368," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),t(369,"em"),i(370,"link"),e(),i(371,"."),e()(),t(372,"blockquote")(373,"p"),i(374,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),t(375,"strong")(376,"a",31),i(377,"Veja um exemplo de como criar rotas aqui"),e()(),i(378,"."),e()(),t(379,"blockquote")(380,"p"),i(381,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),t(382,"code"),i(383,"p-favorite-service"),e(),i(384," consiga favoritar ou desfavoritar."),e()()()()(),t(385,"h4",29)(386,"code",5),i(387,"PoBreadcrumb"),e()(),t(388,"div",2)(389,"p"),i(390,"Interface que define o "),t(391,"code"),i(392,"po-breadcrumb"),e(),i(393,"."),e()(),t(394,"h4",10),i(395,"Propriedades"),e(),t(396,"table",11)(397,"tr",12)(398,"th",13),i(399,"Nome"),e(),t(400,"th",13),i(401,"Tipo"),e(),t(402,"th",13),i(403,"Descri\xE7\xE3o"),e()(),t(404,"tr",14)(405,"td",15)(406,"div",22)(407,"span",23),i(408," favorite"),o(409,"br"),e()()(),t(410,"td",18)(411,"code",25),i(412,"string"),e()(),t(413,"td",21)(414,"em")(415,"strong"),i(416,"(opcional)"),e()(),t(417,"p"),i(418,"Permite definir uma URL para favoritar ou desfavoritar."),e(),t(419,"blockquote")(420,"p"),i(421,"Para maiores informa\xE7\xF5es verificar a propriedade "),t(422,"code"),i(423,"p-favorite-service"),e(),i(424," do componente "),t(425,"code"),i(426,"po-breadcrumb"),e(),i(427,"."),e()()()(),t(428,"tr",14)(429,"td",15)(430,"div",22)(431,"span",23),i(432," items"),o(433,"br"),e()()(),t(434,"td",18)(435,"code",32),i(436,"Array<PoBreadcrumbItem>"),e()(),t(437,"td",21)(438,"p"),i(439,"Lista de itens do "),t(440,"em"),i(441,"breadcrumb"),e(),i(442,"."),e(),t(443,"p")(444,"strong"),i(445,"Exemplo:"),e()(),t(446,"pre")(447,"code"),i(448,`{ label: 'Po Portal', link: 'portal' }
`),e()()()(),t(449,"tr",14)(450,"td",15)(451,"div",22)(452,"span",23),i(453," params"),o(454,"br"),e()()(),t(455,"td",18)(456,"code",33),i(457,"object"),e()(),t(458,"td",21)(459,"em")(460,"strong"),i(461,"(opcional)"),e()(),t(462,"p"),i(463,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),e()()()(),t(464,"h4",29)(465,"code",5),i(466,"PoPageDetailLiterals"),e()(),t(467,"div",2)(468,"p"),i(469,"Interface para defini\xE7\xE3o das literais usadas no "),t(470,"code"),i(471,"po-page-detail"),e(),i(472,"."),e()(),t(473,"h4",10),i(474,"Propriedades"),e(),t(475,"table",11)(476,"tr",12)(477,"th",13),i(478,"Nome"),e(),t(479,"th",13),i(480,"Tipo"),e(),t(481,"th",13),i(482,"Descri\xE7\xE3o"),e()(),t(483,"tr",14)(484,"td",15)(485,"div",22)(486,"span",23),i(487," back"),o(488,"br"),e()()(),t(489,"td",18)(490,"code",25),i(491,"string"),e()(),t(492,"td",21)(493,"em")(494,"strong"),i(495,"(opcional)"),e()(),t(496,"p"),i(497,"Label da a\xE7\xE3o "),t(498,"code"),i(499,"back"),e(),i(500,"."),e()()(),t(501,"tr",14)(502,"td",15)(503,"div",22)(504,"span",23),i(505," edit"),o(506,"br"),e()()(),t(507,"td",18)(508,"code",25),i(509,"string"),e()(),t(510,"td",21)(511,"em")(512,"strong"),i(513,"(opcional)"),e()(),t(514,"p"),i(515,"Label da a\xE7\xE3o "),t(516,"code"),i(517,"edit"),e(),i(518,"."),e()()(),t(519,"tr",14)(520,"td",15)(521,"div",22)(522,"span",23),i(523," remove"),o(524,"br"),e()()(),t(525,"td",18)(526,"code",25),i(527,"string"),e()(),t(528,"td",21)(529,"em")(530,"strong"),i(531,"(opcional)"),e()(),t(532,"p"),i(533,"Label da a\xE7\xE3o "),t(534,"code"),i(535,"remove"),e(),i(536,"."),e()()()()())},dependencies:[x],encapsulation:2})}return a})();var le=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,l){this.route=d,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let l=d.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||a)(q(G),q(L))};static \u0275cmp=E({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Page Detail",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),g("p-click",function(){return n.changeTab("doc")}),o(3,"sample-po-page-detail-doc"),e(),t(4,"po-tab",3),g("p-click",function(){return n.changeTab("web")}),o(5,"sample-po-page-detail-basic-view")(6,"sample-po-page-detail-labs-view")(7,"sample-po-page-detail-user-view"),e()()()),l&2&&(p("p-actions",n.actions),r(2),p("p-active",n.activeTab==="doc"),r(2),p("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[X,P,C,ee,ie,ae,oe],encapsulation:2})}return a})();var he=[{path:"",component:le}],re=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=B({type:a});static \u0275inj=T({imports:[z.forChild(he),z]})}return a})();var Ge=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=B({type:a});static \u0275inj=T({imports:[Y,re]})}return a})();export{Ge as DocPoPageDetailModule};
