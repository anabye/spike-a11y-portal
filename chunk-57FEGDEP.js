import{o as _,p as re}from"./chunk-I35J7BQK.js";import{Ab as C,Ea as ie,Fa as z,Ma as ne,O as Y,Q as Z,S as $,Xa as ae,_ as ee,a as K,nb as oe,pb as B,sa as te,v as X,zb as v}from"./chunk-I3ESE4C7.js";import{$a as G,Aa as h,Cb as M,Da as w,Dc as I,Ec as W,Fc as O,Gc as U,Hc as q,La as t,Ma as e,N as k,Na as l,Q as D,Ra as N,Sa as S,U as d,Uc as Q,V as s,Wc as F,Yc as A,_a as H,ab as J,bb as L,cb as i,eb as y,gb as b,hb as g,ib as E,ja as p,ka as j,lb as x,qa as f,ra as V}from"./chunk-KZJHT32G.js";var le=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-page-edit-basic"]],standalone:!1,decls:1,vars:0,consts:[["p-title","PO Page Edit"]],template:function(r,n){r&1&&l(0,"po-page-edit",0)},dependencies:[B],encapsulation:2})}return o})();var Se=o=>({"docs-sample-code-tabs":o}),pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-page-edit-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO Page Edit Basic"),e(),t(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-page-edit-basic/sample-po-page-edit-basic.component.html"),e(),t(13,"pre",7),i(14,`<po-page-edit p-title="PO Page Edit"> </po-page-edit>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-page-edit-basic/sample-po-page-edit-basic.component.ts"),e(),t(19,"pre",9),i(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-page-edit-basic',
  templateUrl: './sample-po-page-edit-basic.component.html',
  standalone: false
})
export class SamplePoPageEditBasicComponent {}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-page-edit-basic"),e(),l(23,"hr")),r&2&&(p(5),w("po-icon "+n.sampleCodeButtonIcon),p(),y(" ",n.sampleCodeButtonLabel,""),p(),h("ngClass",x(4,Se,n.hideSampleCodeTabs)))},dependencies:[M,_,v,C,le],encapsulation:2})}return o})();var de=(()=>{class o{action;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;literals;params;properties;title;subtitle;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];propertiesOptions=[{value:"disableSubmit",label:"Disable Submit"}];ngOnInit(){this.restore()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0}}addBreadcrumbParam(){let u={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,u):this.breadcrumb.params=u,this.breadcrumbParams={}}cancel(){this.action="Cancel"}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}restore(){this.action="",this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize="medium",this.customLiterals=void 0,this.literals="",this.properties=[],this.title="PO Page Edit",this.subtitle=""}save(){this.action="Save"}saveNew(){this.action="Save and new"}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-page-edit-labs"]],standalone:!1,decls:34,vars:21,consts:[["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],[3,"p-cancel","p-save","p-save-new","p-breadcrumb","p-components-size","p-disable-submit","p-literals","p-title","p-subtitle"],[1,"po-row"],["p-label","Action",1,"po-md-12",3,"p-value"],["name","title","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","literals","p-help",'Ex.: {"cancel": "Voltar", "save": "Confirmar", "saveNew": "Confirmar e criar um novo"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,n){if(r&1){let m=N();t(0,"po-page-edit",3),S("p-cancel",function(){return d(m),s(n.cancel())})("p-save",function(){return d(m),s(n.save())})("p-save-new",function(){return d(m),s(n.saveNew())}),t(1,"div",4),l(2,"po-info",5),e(),l(3,"po-divider"),t(4,"form")(5,"div",4)(6,"po-input",6),E("ngModelChange",function(a){return d(m),g(n.title,a)||(n.title=a),s(a)}),e(),t(7,"po-input",7),E("ngModelChange",function(a){return d(m),g(n.subtitle,a)||(n.subtitle=a),s(a)}),e(),t(8,"po-checkbox-group",8),E("ngModelChange",function(a){return d(m),g(n.properties,a)||(n.properties=a),s(a)}),e(),t(9,"po-radio-group",9),E("ngModelChange",function(a){return d(m),g(n.componentsSize,a)||(n.componentsSize=a),s(a)}),e()(),l(10,"po-divider"),t(11,"form",null,0)(13,"div",4)(14,"po-input",10),E("ngModelChange",function(a){return d(m),g(n.breadcrumb.favorite,a)||(n.breadcrumb.favorite=a),s(a)}),e()()(),t(15,"form",null,1)(17,"div",4)(18,"po-input",11),E("ngModelChange",function(a){return d(m),g(n.breadcrumbItem.label,a)||(n.breadcrumbItem.label=a),s(a)}),e(),t(19,"po-input",12),E("ngModelChange",function(a){return d(m),g(n.breadcrumbItem.link,a)||(n.breadcrumbItem.link=a),s(a)}),e()(),t(20,"div",4)(21,"po-button",13),S("p-click",function(){return d(m),s(n.addBreadcrumbItem())}),e()()(),l(22,"po-divider"),t(23,"form",null,2)(25,"div",4)(26,"po-input",14),E("ngModelChange",function(a){return d(m),g(n.breadcrumbParams.property,a)||(n.breadcrumbParams.property=a),s(a)}),e(),t(27,"po-input",15),E("ngModelChange",function(a){return d(m),g(n.breadcrumbParams.value,a)||(n.breadcrumbParams.value=a),s(a)}),e()(),t(28,"div",4)(29,"po-button",16),S("p-click",function(){return d(m),s(n.addBreadcrumbParam())}),e()()(),t(30,"div",4)(31,"po-input",17),E("ngModelChange",function(a){return d(m),g(n.literals,a)||(n.literals=a),s(a)}),S("p-change",function(){return d(m),s(n.changeLiterals())}),e()(),t(32,"div",4)(33,"po-button",18),S("p-click",function(){return d(m),s(n.restore())}),e()()()()}if(r&2){let m=L(16),c=L(24);h("p-breadcrumb",n.breadcrumb)("p-components-size",n.componentsSize)("p-disable-submit",n.properties.includes("disableSubmit"))("p-literals",n.customLiterals)("p-title",n.title)("p-subtitle",n.subtitle),p(2),h("p-value",n.action),p(4),b("ngModel",n.title),p(),b("ngModel",n.subtitle),p(),b("ngModel",n.properties),h("p-options",n.propertiesOptions),p(),b("ngModel",n.componentsSize),h("p-options",n.componentsSizeOptions),p(5),b("ngModel",n.breadcrumb.favorite),p(4),b("ngModel",n.breadcrumbItem.label),p(),b("ngModel",n.breadcrumbItem.link),p(2),h("p-disabled",m.invalid),p(5),b("ngModel",n.breadcrumbParams.property),p(),b("ngModel",n.breadcrumbParams.value),p(2),h("p-disabled",c.invalid),p(2),b("ngModel",n.literals)}},dependencies:[q,I,W,U,O,X,K,Y,Z,z,ae,B],encapsulation:2})}return o})();var Ce=o=>({"docs-sample-code-tabs":o}),se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-page-edit-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO Page Edit Labs"),e(),t(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-page-edit-labs/sample-po-page-edit-labs.component.html"),e(),t(13,"pre",7),i(14,`<po-page-edit
  [p-breadcrumb]="breadcrumb"
  [p-components-size]="componentsSize"
  [p-disable-submit]="properties.includes('disableSubmit')"
  [p-literals]="customLiterals"
  [p-title]="title"
  (p-cancel)="cancel()"
  (p-save)="save()"
  (p-save-new)="saveNew()"
  [p-subtitle]="subtitle"
>
  <div class="po-row">
    <po-info class="po-md-12" p-label="Action" [p-value]="action"> </po-info>
  </div>

  <po-divider />

  <form>
    <div class="po-row">
      <po-input class="po-md-6" name="title" [(ngModel)]="title" p-label="Title"> </po-input>
      <po-input class="po-md-6" name="subtitle" [(ngModel)]="subtitle" p-label="Subtitle"> </po-input>

      <po-checkbox-group
        class="po-md-12"
        name="properties"
        [(ngModel)]="properties"
        p-columns="4"
        p-label="Properties"
        [p-options]="propertiesOptions"
      >
      </po-checkbox-group>

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
        p-help='Ex.: {"cancel": "Voltar", "save": "Confirmar", "saveNew": "Confirmar e criar um novo"}'
        p-label="Literals"
        (p-change)="changeLiterals()"
      >
      </po-input>
    </div>

    <div class="po-row">
      <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
    </div>
  </form>
</po-page-edit>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-page-edit-labs/sample-po-page-edit-labs.component.ts"),e(),t(19,"pre",9),i(20,`import { Component, OnInit } from '@angular/core';

import { PoBreadcrumb, PoBreadcrumbItem, PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

import { PoPageEditLiterals } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-edit-labs',
  templateUrl: './sample-po-page-edit-labs.component.html',
  standalone: false
})
export class SamplePoPageEditLabsComponent implements OnInit {
  action: string;
  breadcrumb: PoBreadcrumb;
  breadcrumbItem: PoBreadcrumbItem;
  breadcrumbParams: any;
  componentsSize: string;
  customLiterals: PoPageEditLiterals;
  literals: string;
  params: any;
  properties: Array<string>;
  title: string;
  subtitle: string;

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disableSubmit', label: 'Disable Submit' }
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

  cancel() {
    this.action = 'Cancel';
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  restore() {
    this.action = '';
    this.breadcrumb = { items: [] };
    this.breadcrumbItem = { label: undefined, link: undefined };
    this.breadcrumbParams = {};
    this.componentsSize = 'medium';
    this.customLiterals = undefined;
    this.literals = '';
    this.properties = [];
    this.title = 'PO Page Edit';
    this.subtitle = '';
  }

  save() {
    this.action = 'Save';
  }

  saveNew() {
    this.action = 'Save and new';
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-page-edit-labs"),e(),l(23,"hr")),r&2&&(p(5),w("po-icon "+n.sampleCodeButtonIcon),p(),y(" ",n.sampleCodeButtonLabel,""),p(),h("ngClass",x(4,Ce,n.hideSampleCodeTabs)))},dependencies:[M,_,v,C,de],encapsulation:2})}return o})();var we=["formEditUser"],ce=(()=>{class o{route=D(F);poDialog=D(ee);poNotification=D(te);formEditUser;birthDate;email;fathersName;genre;graduation;mothersName;name;nationality;nickname;placeOfBirth;userId;breadcrumb={items:[{label:"Home",action:this.beforeRedirect.bind(this)},{label:"User Edit"}]};ngOnInit(){this.initialize()}cancel(){this.initialize()}initialize(){this.birthDate=new Date(1978,11,26),this.email="john.doe@po-ui.com.br",this.fathersName="Mike Doe",this.genre="male",this.graduation="College Degree",this.mothersName="Jane Doe",this.name="John Doe",this.nationality="USA",this.nickname="John",this.placeOfBirth="Colorado",this.userId=122635}save(){this.poNotification.success("Save successfully")}beforeRedirect(u){this.formEditUser.valid?this.route.navigate(["/"]):this.poDialog.confirm({title:`Confirm redirect to ${u}`,message:"There is data that has not been saved yet. Are you sure you want to quit?",confirm:()=>this.route.navigate(["/"])})}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-page-edit-user"]],viewQuery:function(r,n){if(r&1&&H(we,7),r&2){let m;G(m=J())&&(n.formEditUser=m.first)}},standalone:!1,decls:18,vars:13,consts:[["formEditUser","ngForm"],["p-title","User Edit",3,"p-cancel","p-save","p-breadcrumb","p-disable-submit"],[1,"po-row"],["name","userId","p-clean","","p-label","User ID","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","email","p-clean","","p-label","Email","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","nickname","p-clean","","p-label","Nickname",1,"po-md-4",3,"ngModelChange","ngModel"],["name","birthDate","p-clean","","p-label","Birth Date",1,"po-md-4",3,"ngModelChange","ngModel"],["name","genre","p-clean","","p-label","Genre",1,"po-md-4",3,"ngModelChange","ngModel"],["name","nationality","p-clean","","p-label","Nationality",1,"po-md-4",3,"ngModelChange","ngModel"],["name","placeOfBirth","p-clean","","p-label","Place Of Birth",1,"po-md-4",3,"ngModelChange","ngModel"],["name","graduation","p-clean","","p-label","Graduation",1,"po-md-4",3,"ngModelChange","ngModel"],["name","fathersName","p-clean","","p-label","Father's Name",1,"po-md-4",3,"ngModelChange","ngModel"],["name","mothersName","p-clean","","p-label","Mother's Name",1,"po-md-4",3,"ngModelChange","ngModel"]],template:function(r,n){if(r&1){let m=N();t(0,"po-page-edit",1),S("p-cancel",function(){return d(m),s(n.cancel())})("p-save",function(){return d(m),s(n.save())}),t(1,"form",null,0)(3,"div",2)(4,"po-number",3),E("ngModelChange",function(a){return d(m),g(n.userId,a)||(n.userId=a),s(a)}),e(),t(5,"po-email",4),E("ngModelChange",function(a){return d(m),g(n.email,a)||(n.email=a),s(a)}),e(),t(6,"po-input",5),E("ngModelChange",function(a){return d(m),g(n.name,a)||(n.name=a),s(a)}),e()(),t(7,"div",2)(8,"po-input",6),E("ngModelChange",function(a){return d(m),g(n.nickname,a)||(n.nickname=a),s(a)}),e(),t(9,"po-datepicker",7),E("ngModelChange",function(a){return d(m),g(n.birthDate,a)||(n.birthDate=a),s(a)}),e(),t(10,"po-input",8),E("ngModelChange",function(a){return d(m),g(n.genre,a)||(n.genre=a),s(a)}),e()(),t(11,"div",2)(12,"po-input",9),E("ngModelChange",function(a){return d(m),g(n.nationality,a)||(n.nationality=a),s(a)}),e(),t(13,"po-input",10),E("ngModelChange",function(a){return d(m),g(n.placeOfBirth,a)||(n.placeOfBirth=a),s(a)}),e(),t(14,"po-input",11),E("ngModelChange",function(a){return d(m),g(n.graduation,a)||(n.graduation=a),s(a)}),e()(),t(15,"div",2)(16,"po-input",12),E("ngModelChange",function(a){return d(m),g(n.fathersName,a)||(n.fathersName=a),s(a)}),e(),t(17,"po-input",13),E("ngModelChange",function(a){return d(m),g(n.mothersName,a)||(n.mothersName=a),s(a)}),e()()()()}if(r&2){let m=L(2);h("p-breadcrumb",n.breadcrumb)("p-disable-submit",m.invalid),p(4),b("ngModel",n.userId),p(),b("ngModel",n.email),p(),b("ngModel",n.name),p(2),b("ngModel",n.nickname),p(),b("ngModel",n.birthDate),p(),b("ngModel",n.genre),p(2),b("ngModel",n.nationality),p(),b("ngModel",n.placeOfBirth),p(),b("ngModel",n.graduation),p(2),b("ngModel",n.fathersName),p(),b("ngModel",n.mothersName)}},dependencies:[q,I,W,U,O,$,ie,z,ne,B],encapsulation:2})}return o})();var xe=o=>({"docs-sample-code-tabs":o}),ue=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-page-edit-user-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO Page Edit - User"),e(),t(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-page-edit-user/sample-po-page-edit-user.component.html"),e(),t(13,"pre",7),i(14,`<po-page-edit
  p-title="User Edit"
  [p-breadcrumb]="breadcrumb"
  [p-disable-submit]="formEditUser.invalid"
  (p-cancel)="cancel()"
  (p-save)="save()"
>
  <form #formEditUser="ngForm">
    <div class="po-row">
      <po-number class="po-md-4" name="userId" [(ngModel)]="userId" p-clean p-label="User ID" p-required> </po-number>

      <po-email class="po-md-4" name="email" [(ngModel)]="email" p-clean p-label="Email" p-required> </po-email>

      <po-input class="po-md-4" name="name" [(ngModel)]="name" p-clean p-label="Name" p-required> </po-input>
    </div>

    <div class="po-row">
      <po-input class="po-md-4" name="nickname" [(ngModel)]="nickname" p-clean p-label="Nickname"> </po-input>

      <po-datepicker class="po-md-4" name="birthDate" [(ngModel)]="birthDate" p-clean p-label="Birth Date">
      </po-datepicker>

      <po-input class="po-md-4" name="genre" [(ngModel)]="genre" p-clean p-label="Genre"> </po-input>
    </div>

    <div class="po-row">
      <po-input class="po-md-4" name="nationality" [(ngModel)]="nationality" p-clean p-label="Nationality"> </po-input>

      <po-input class="po-md-4" name="placeOfBirth" [(ngModel)]="placeOfBirth" p-clean p-label="Place Of Birth">
      </po-input>

      <po-input class="po-md-4" name="graduation" [(ngModel)]="graduation" p-clean p-label="Graduation"> </po-input>
    </div>

    <div class="po-row">
      <po-input class="po-md-4" name="fathersName" [(ngModel)]="fathersName" p-clean p-label="Father's Name">
      </po-input>

      <po-input class="po-md-4" name="mothersName" [(ngModel)]="mothersName" p-clean p-label="Mother's Name">
      </po-input>
    </div>
  </form>
</po-page-edit>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-page-edit-user/sample-po-page-edit-user.component.ts"),e(),t(19,"pre",9),i(20,`import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { PoBreadcrumb } from '@po-ui/ng-components';
import { PoDialogService } from '@po-ui/ng-components';
import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-edit-user',
  templateUrl: './sample-po-page-edit-user.component.html',
  standalone: false
})
export class SamplePoPageEditUserComponent implements OnInit {
  private route = inject(Router);
  private poDialog = inject(PoDialogService);
  private poNotification = inject(PoNotificationService);

  @ViewChild('formEditUser', { static: true }) formEditUser: NgForm;

  birthDate: Date;
  email: string;
  fathersName: string;
  genre: string;
  graduation: string;
  mothersName: string;
  name: string;
  nationality: string;
  nickname: string;
  placeOfBirth: string;
  userId: number;

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', action: this.beforeRedirect.bind(this) }, { label: 'User Edit' }]
  };

  ngOnInit() {
    this.initialize();
  }

  cancel() {
    this.initialize();
  }

  initialize() {
    this.birthDate = new Date(1978, 11, 26);
    this.email = 'john.doe@po-ui.com.br';
    this.fathersName = 'Mike Doe';
    this.genre = 'male';
    this.graduation = 'College Degree';
    this.mothersName = 'Jane Doe';
    this.name = 'John Doe';
    this.nationality = 'USA';
    this.nickname = 'John';
    this.placeOfBirth = 'Colorado';
    this.userId = 122635;
  }

  save() {
    this.poNotification.success(\`Save successfully\`);
  }

  private beforeRedirect(itemBreadcrumbLabel) {
    if (this.formEditUser.valid) {
      this.route.navigate(['/']);
    } else {
      this.poDialog.confirm({
        title: \`Confirm redirect to \${itemBreadcrumbLabel}\`,
        message: \`There is data that has not been saved yet. Are you sure you want to quit?\`,
        confirm: () => this.route.navigate(['/'])
      });
    }
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-page-edit-user"),e(),l(23,"hr")),r&2&&(p(5),w("po-icon "+n.sampleCodeButtonIcon),p(),y(" ",n.sampleCodeButtonLabel,""),p(),h("ngClass",x(4,xe,n.hideSampleCodeTabs)))},dependencies:[M,_,v,C,ce],encapsulation:2})}return o})();var be=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-page-edit-doc"]],standalone:!1,decls:562,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoPageEditLiterals"],["href","/documentation/po-i18n"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"]],template:function(r,n){r&1&&(t(0,"div",0)(1,"p",1)(2,"code"),i(3,"import { PoPageModule } from '@po-ui/ng-components';"),e()(),t(4,"div",2)(5,"p"),i(6,`M\xF3dulo dos componentes po-page-default, po-page-detail, po-page-edit,
po-page-list e po-page-slide.`),e()(),t(7,"h3",3),i(8,"Componente"),e(),t(9,"h4",4)(10,"code",5),i(11,"PoPageEditComponent"),e()(),t(12,"div",2)(13,"p"),i(14,"O componente "),t(15,"strong"),i(16,"po-page-edit"),e(),i(17,` \xE9 utilizado como container principal para tela de edi\xE7\xE3o ou adi\xE7\xE3o de um
registro, tendo a possibilidade de usar as a\xE7\xF5es de "Salvar", "Salvar e Novo" e "Cancelar".`),e(),t(18,"p"),i(19,'Os bot\xF5es "Salvar" e "Salvar e Novo" podem ser habilitados/desabilitados utilizando a propriedade '),t(20,"code"),i(21,"p-disable-submit"),e(),i(22,`.
Esta propriedade pode ser utilizada para desabilitar os bot\xF5es caso exista um formul\xE1rio inv\xE1lido na p\xE1gina ou alguma
regra de neg\xF3cio n\xE3o tenha sido atendida.`),e(),t(23,"h4"),i(24,"Tokens customiz\xE1veis"),e(),t(25,"blockquote")(26,"p"),i(27,"Para maiores informa\xE7\xF5es, acesse o guia "),t(28,"a",6),i(29,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),i(30,"."),e()(),t(31,"table")(32,"thead")(33,"tr")(34,"th"),i(35,"Propriedade"),e(),t(36,"th"),i(37,"Descri\xE7\xE3o"),e(),t(38,"th"),i(39,"Valor Padr\xE3o"),e()()(),t(40,"tbody")(41,"tr")(42,"td")(43,"strong"),i(44,"Header"),e()(),l(45,"td")(46,"td"),e(),t(47,"tr")(48,"td")(49,"code"),i(50,"--padding"),e()(),t(51,"td"),i(52,"Espa\xE7amento do header"),e(),t(53,"td")(54,"code"),i(55,"var(--spacing-xs) var(--spacing-md)"),e()()(),t(56,"tr")(57,"td")(58,"code"),i(59,"--gap"),e()(),t(60,"td"),i(61,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),e(),t(62,"td")(63,"code"),i(64,"var(--spacing-md)"),e()()(),t(65,"tr")(66,"td")(67,"code"),i(68,"--gap-actions"),e()(),t(69,"td"),i(70,"Espa\xE7amento entre as a\xE7\xF5es"),e(),t(71,"td")(72,"code"),i(73,"var(--spacing-xs)"),e()()(),t(74,"tr")(75,"td")(76,"code"),i(77,"--font-family"),e()(),t(78,"td"),i(79,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),e(),t(80,"td")(81,"code"),i(82,"var(--font-family-theme)"),e()()(),t(83,"tr")(84,"td")(85,"strong"),i(86,"Content"),e()(),l(87,"td")(88,"td"),e(),t(89,"tr")(90,"td")(91,"code"),i(92,"--padding-content"),e()(),t(93,"td"),i(94,"Espa\xE7amento do conte\xFAdo"),e(),t(95,"td")(96,"code"),i(97,"var(--spacing-xs) var(--spacing-sm)"),e()()()()()(),t(98,"div",7)(99,"h4",8),i(100,"Seletor"),e(),t(101,"pre",9),i(102,`<po-page-edit
    p-breadcrumb="PoBreadcrumb"
    (p-cancel)="EventEmitter"
    p-components-size="string"
    p-disable-submit="boolean"
    p-literals="PoPageEditLiterals"
    (p-save)="EventEmitter"
    (p-save-new)="EventEmitter"
    p-subtitle="string"
    p-title="string" >
</po-page-edit>
`),e()(),t(103,"h4",10),i(104,"Propriedades"),e(),t(105,"table",11)(106,"tr",12)(107,"th",13),i(108,"Nome"),e(),t(109,"th",13),i(110,"Tipo"),e(),t(111,"th",13),i(112,"Padr\xE3o"),e(),t(113,"th",13),i(114,"Descri\xE7\xE3o"),e()(),t(115,"tr",14)(116,"td",15)(117,"div",16)(118,"span",17),i(119," p-breadcrumb"),l(120,"br"),e()()(),t(121,"td",18)(122,"code",19),i(123,"PoBreadcrumb"),e()(),t(124,"td",20),i(125,"-"),e(),t(126,"td",21)(127,"em")(128,"strong"),i(129,"(opcional)"),e()(),t(130,"p"),i(131,"Objeto com propriedades do breadcrumb."),e()()(),t(132,"tr",14)(133,"td",15)(134,"div",22)(135,"span",23),i(136," (p-cancel)"),l(137,"br"),e()()(),t(138,"td",18)(139,"code",24),i(140,"EventEmitter"),e()(),t(141,"td",20),i(142,"-"),e(),t(143,"td",21)(144,"p"),i(145,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Cancelar".'),e(),t(146,"pre")(147,"code"),i(148,`<po-page-edit (p-cancel)="myCancelFunction()">
</po-page-edit>
`),e()(),t(149,"blockquote")(150,"p"),i(151,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Cancelar" n\xE3o ser\xE1 exibido.'),e()()()(),t(152,"tr",14)(153,"td",15)(154,"div",16)(155,"span",17),i(156," p-components-size"),l(157,"br"),e()()(),t(158,"td",18)(159,"code",25),i(160,"string"),e()(),t(161,"td",20)(162,"p")(163,"code"),i(164,"medium"),e()()(),t(165,"td",21)(166,"em")(167,"strong"),i(168,"(opcional)"),e()(),t(169,"p"),i(170,"Define o tamanho dos componentes de formul\xE1rio no template:"),e(),t(171,"ul")(172,"li")(173,"code"),i(174,"small"),e(),i(175,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),e(),t(176,"li")(177,"code"),i(178,"medium"),e(),i(179,": aplica a medida medium de cada componente."),e()(),t(180,"blockquote")(181,"p"),i(182,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),t(183,"code"),i(184,"medium"),e(),i(185,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),t(186,"a",26),i(187,"po-theme"),e(),i(188,"."),e()()()(),t(189,"tr",14)(190,"td",15)(191,"div",16)(192,"span",17),i(193," p-disable-submit"),l(194,"br"),e()()(),t(195,"td",18)(196,"code",27),i(197,"boolean"),e()(),t(198,"td",20),i(199,"-"),e(),t(200,"td",21)(201,"em")(202,"strong"),i(203,"(opcional)"),e()(),t(204,"p"),i(205,"Desabilita bot\xF5es de submiss\xE3o (save e saveNew)"),e()()(),t(206,"tr",14)(207,"td",15)(208,"div",16)(209,"span",17),i(210," p-literals"),l(211,"br"),e()()(),t(212,"td",18)(213,"code",28),i(214,"PoPageEditLiterals"),e()(),t(215,"td",20),i(216,"-"),e(),t(217,"td",21)(218,"em")(219,"strong"),i(220,"(opcional)"),e()(),t(221,"p"),i(222,"Objeto com as literais usadas no "),t(223,"code"),i(224,"po-page-edit"),e(),i(225,"."),e(),t(226,"p"),i(227,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),e(),t(228,"pre")(229,"code"),i(230,`const customLiterals: PoPageEditLiterals = {
  cancel: 'Voltar',
  save: 'Confirmar',
  saveNew: 'Confirmar e criar um novo'
};
`),e()(),t(231,"p"),i(232,"Ou passando apenas as literais que deseja customizar:"),e(),t(233,"pre")(234,"code"),i(235,`const customLiterals: PoPageEditLiterals = {
  cancel: 'Cancelar processo'
};
`),e()(),t(236,"p"),i(237,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),e(),t(238,"pre")(239,"code"),i(240,`<po-page-edit
  [p-literals]="customLiterals">
</po-page-edit>
`),e()(),t(241,"blockquote")(242,"p"),i(243,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),t(244,"a",29)(245,"code"),i(246,"PoI18nService"),e()(),i(247," ou do browser."),e()()()(),t(248,"tr",14)(249,"td",15)(250,"div",22)(251,"span",23),i(252," (p-save)"),l(253,"br"),e()()(),t(254,"td",18)(255,"code",24),i(256,"EventEmitter"),e()(),t(257,"td",20),i(258,"-"),e(),t(259,"td",21)(260,"p"),i(261,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Salvar".'),e(),t(262,"pre")(263,"code"),i(264,`<po-page-edit (p-save)="mySaveFunction()">
</po-page-edit>
`),e()(),t(265,"blockquote")(266,"p"),i(267,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Salvar" n\xE3o ser\xE1 exibido.'),e()()()(),t(268,"tr",14)(269,"td",15)(270,"div",22)(271,"span",23),i(272," (p-save-new)"),l(273,"br"),e()()(),t(274,"td",18)(275,"code",24),i(276,"EventEmitter"),e()(),t(277,"td",20),i(278,"-"),e(),t(279,"td",21)(280,"p"),i(281,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Salvar e Novo".'),e(),t(282,"pre")(283,"code"),i(284,`<po-page-edit (p-save-new)="mySaveNewFunction()">
</po-page-edit>
`),e()(),t(285,"blockquote")(286,"p"),i(287,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Salvar e Novo" n\xE3o ser\xE1 exibido.'),e()()()(),t(288,"tr",14)(289,"td",15)(290,"div",16)(291,"span",17),i(292," p-subtitle"),l(293,"br"),e()()(),t(294,"td",18)(295,"code",25),i(296,"string"),e()(),t(297,"td",20),i(298,"-"),e(),t(299,"td",21)(300,"em")(301,"strong"),i(302,"(opcional)"),e()(),t(303,"p"),i(304,"Subtitulo do Header da p\xE1gina"),e()()(),t(305,"tr",14)(306,"td",15)(307,"div",16)(308,"span",17),i(309," p-title"),l(310,"br"),e()()(),t(311,"td",18)(312,"code",25),i(313,"string"),e()(),t(314,"td",20),i(315,"-"),e(),t(316,"td",21)(317,"p"),i(318,"T\xEDtulo da p\xE1gina."),e()()()(),t(319,"h3"),i(320,"Interfaces"),e(),t(321,"h4",30)(322,"code",5),i(323,"PoBreadcrumbItem"),e()(),t(324,"div",2)(325,"p"),i(326,"Interface que define cada item do componente "),t(327,"strong"),i(328,"po-breadcrumb"),e(),i(329,"."),e()(),t(330,"h4",10),i(331,"Propriedades"),e(),t(332,"table",11)(333,"tr",12)(334,"th",13),i(335,"Nome"),e(),t(336,"th",13),i(337,"Tipo"),e(),t(338,"th",13),i(339,"Descri\xE7\xE3o"),e()(),t(340,"tr",14)(341,"td",15)(342,"div",16)(343,"span",17),i(344," action"),l(345,"br"),e()()(),t(346,"td",18)(347,"code",31),i(348,"Function"),e()(),t(349,"td",21)(350,"em")(351,"strong"),i(352,"(opcional)"),e()(),t(353,"p"),i(354,"A\xE7\xE3o executada ao clicar no item."),e(),t(355,"blockquote")(356,"p"),i(357,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),t(358,"em"),i(359,"label"),e(),i(360," do item como par\xE2metro para execu\xE7\xE3o."),e()()()(),t(361,"tr",14)(362,"td",15)(363,"div",16)(364,"span",17),i(365," label"),l(366,"br"),e()()(),t(367,"td",18)(368,"code",25),i(369,"string"),e()(),t(370,"td",21)(371,"p"),i(372,"R\xF3tulo do item."),e()()(),t(373,"tr",14)(374,"td",15)(375,"div",16)(376,"span",17),i(377," link"),l(378,"br"),e()()(),t(379,"td",18)(380,"code",25),i(381,"string"),e()(),t(382,"td",21)(383,"em")(384,"strong"),i(385,"(opcional)"),e()(),t(386,"p"),i(387,"Url do item."),e(),t(388,"blockquote")(389,"p"),i(390,"Caso o item tamb\xE9m contenha uma "),t(391,"em"),i(392,"action"),e(),i(393," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),t(394,"em"),i(395,"link"),e(),i(396,"."),e()(),t(397,"blockquote")(398,"p"),i(399,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),t(400,"strong")(401,"a",32),i(402,"Veja um exemplo de como criar rotas aqui"),e()(),i(403,"."),e()(),t(404,"blockquote")(405,"p"),i(406,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),t(407,"code"),i(408,"p-favorite-service"),e(),i(409," consiga favoritar ou desfavoritar."),e()()()()(),t(410,"h4",30)(411,"code",5),i(412,"PoBreadcrumb"),e()(),t(413,"div",2)(414,"p"),i(415,"Interface que define o "),t(416,"code"),i(417,"po-breadcrumb"),e(),i(418,"."),e()(),t(419,"h4",10),i(420,"Propriedades"),e(),t(421,"table",11)(422,"tr",12)(423,"th",13),i(424,"Nome"),e(),t(425,"th",13),i(426,"Tipo"),e(),t(427,"th",13),i(428,"Descri\xE7\xE3o"),e()(),t(429,"tr",14)(430,"td",15)(431,"div",16)(432,"span",17),i(433," favorite"),l(434,"br"),e()()(),t(435,"td",18)(436,"code",25),i(437,"string"),e()(),t(438,"td",21)(439,"em")(440,"strong"),i(441,"(opcional)"),e()(),t(442,"p"),i(443,"Permite definir uma URL para favoritar ou desfavoritar."),e(),t(444,"blockquote")(445,"p"),i(446,"Para maiores informa\xE7\xF5es verificar a propriedade "),t(447,"code"),i(448,"p-favorite-service"),e(),i(449," do componente "),t(450,"code"),i(451,"po-breadcrumb"),e(),i(452,"."),e()()()(),t(453,"tr",14)(454,"td",15)(455,"div",16)(456,"span",17),i(457," items"),l(458,"br"),e()()(),t(459,"td",18)(460,"code",33),i(461,"Array<PoBreadcrumbItem>"),e()(),t(462,"td",21)(463,"p"),i(464,"Lista de itens do "),t(465,"em"),i(466,"breadcrumb"),e(),i(467,"."),e(),t(468,"p")(469,"strong"),i(470,"Exemplo:"),e()(),t(471,"pre")(472,"code"),i(473,`{ label: 'Po Portal', link: 'portal' }
`),e()()()(),t(474,"tr",14)(475,"td",15)(476,"div",16)(477,"span",17),i(478," params"),l(479,"br"),e()()(),t(480,"td",18)(481,"code",34),i(482,"object"),e()(),t(483,"td",21)(484,"em")(485,"strong"),i(486,"(opcional)"),e()(),t(487,"p"),i(488,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),e()()()(),t(489,"h4",30)(490,"code",5),i(491,"PoPageEditLiterals"),e()(),t(492,"div",2)(493,"p"),i(494,"Interface para defini\xE7\xE3o das literais usadas no "),t(495,"code"),i(496,"po-page-edit"),e(),i(497,"."),e()(),t(498,"h4",10),i(499,"Propriedades"),e(),t(500,"table",11)(501,"tr",12)(502,"th",13),i(503,"Nome"),e(),t(504,"th",13),i(505,"Tipo"),e(),t(506,"th",13),i(507,"Descri\xE7\xE3o"),e()(),t(508,"tr",14)(509,"td",15)(510,"div",16)(511,"span",17),i(512," cancel"),l(513,"br"),e()()(),t(514,"td",18)(515,"code",25),i(516,"string"),e()(),t(517,"td",21)(518,"em")(519,"strong"),i(520,"(opcional)"),e()(),t(521,"p"),i(522,"Label da a\xE7\xE3o "),t(523,"code"),i(524,"cancel"),e(),i(525,"."),e()()(),t(526,"tr",14)(527,"td",15)(528,"div",16)(529,"span",17),i(530," save"),l(531,"br"),e()()(),t(532,"td",18)(533,"code",25),i(534,"string"),e()(),t(535,"td",21)(536,"em")(537,"strong"),i(538,"(opcional)"),e()(),t(539,"p"),i(540,"Label da a\xE7\xE3o "),t(541,"code"),i(542,"save"),e(),i(543,"."),e()()(),t(544,"tr",14)(545,"td",15)(546,"div",16)(547,"span",17),i(548," saveNew"),l(549,"br"),e()()(),t(550,"td",18)(551,"code",25),i(552,"string"),e()(),t(553,"td",21)(554,"em")(555,"strong"),i(556,"(opcional)"),e()(),t(557,"p"),i(558,"Label da a\xE7\xE3o "),t(559,"code"),i(560,"saveNew"),e(),i(561,"."),e()()()()())},dependencies:[_],encapsulation:2})}return o})();var ge=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(u,r){this.route=u,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(u=>{let r=u.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(u){this.router.navigate([],{queryParams:{view:u},queryParamsHandling:"merge"}),this.activeTab=u}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||o)(j(Q),j(F))};static \u0275cmp=f({type:o,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Page Edit",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,n){r&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),S("p-click",function(){return n.changeTab("doc")}),l(3,"sample-po-page-edit-doc"),e(),t(4,"po-tab",3),S("p-click",function(){return n.changeTab("web")}),l(5,"sample-po-page-edit-basic-view")(6,"sample-po-page-edit-labs-view")(7,"sample-po-page-edit-user-view"),e()()()),r&2&&(h("p-actions",n.actions),p(2),h("p-active",n.activeTab==="doc"),p(2),h("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[oe,v,C,pe,se,ue,be],encapsulation:2})}return o})();var Te=[{path:"",component:ge}],Ee=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275mod=V({type:o});static \u0275inj=k({imports:[A.forChild(Te),A]})}return o})();var ot=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275mod=V({type:o});static \u0275inj=k({imports:[re,Ee]})}return o})();export{ot as DocPoPageEditModule};
