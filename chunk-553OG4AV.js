import{o as _,p as ae}from"./chunk-NQRF3FP3.js";import{Ab as C,F as Q,Fa as ee,Ga as z,K,La as te,T as X,Wa as ie,ha as Y,ja as Z,la as $,nb as ne,pb as T,zb as v}from"./chunk-6VEAIL6W.js";import{$a as b,Ac as q,Ba as y,Ea as t,Fa as e,Ga as l,Ka as I,La as S,M as D,Nc as J,Pc as F,Rc as j,T as s,Ta as R,U as c,Ua as H,Va as G,Wa as k,Xa as i,Za as x,ab as g,bb as E,eb as M,ha as p,ia as w,oa as f,pa as V,ub as B,wc as N,xc as W,ya as h,yc as O,zc as U}from"./chunk-MIQUIDUB.js";var oe=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-page-edit-basic"]],standalone:!1,decls:1,vars:0,consts:[["p-title","PO Page Edit"]],template:function(r,n){r&1&&l(0,"po-page-edit",0)},dependencies:[T],encapsulation:2})}return o})();var Ee=o=>({"docs-sample-code-tabs":o}),le=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-page-edit-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO Page Edit Basic"),e(),t(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-page-edit-basic/sample-po-page-edit-basic.component.html"),e(),t(13,"pre",7),i(14,`<po-page-edit p-title="PO Page Edit"> </po-page-edit>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-page-edit-basic/sample-po-page-edit-basic.component.ts"),e(),t(19,"pre",9),i(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-page-edit-basic',
  templateUrl: './sample-po-page-edit-basic.component.html',
  standalone: false
})
export class SamplePoPageEditBasicComponent {}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-page-edit-basic"),e(),l(23,"hr")),r&2&&(p(5),y("po-icon "+n.sampleCodeButtonIcon),p(),x(" ",n.sampleCodeButtonLabel,""),p(),h("ngClass",M(4,Ee,n.hideSampleCodeTabs)))},dependencies:[B,_,v,C,oe],encapsulation:2})}return o})();var me=(()=>{class o{action;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;literals;params;properties;title;subtitle;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];propertiesOptions=[{value:"disableSubmit",label:"Disable Submit"}];ngOnInit(){this.restore()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0}}addBreadcrumbParam(){let d={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,d):this.breadcrumb.params=d,this.breadcrumbParams={}}cancel(){this.action="Cancel"}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}restore(){this.action="",this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize="medium",this.customLiterals=void 0,this.literals="",this.properties=[],this.title="PO Page Edit",this.subtitle=""}save(){this.action="Save"}saveNew(){this.action="Save and new"}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-page-edit-labs"]],standalone:!1,decls:34,vars:21,consts:[["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],[3,"p-cancel","p-save","p-save-new","p-breadcrumb","p-components-size","p-disable-submit","p-literals","p-title","p-subtitle"],[1,"po-row"],["p-label","Action",1,"po-md-12",3,"p-value"],["name","title","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","literals","p-help",'Ex.: {"cancel": "Voltar", "save": "Confirmar", "saveNew": "Confirmar e criar um novo"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,n){if(r&1){let m=I();t(0,"po-page-edit",3),S("p-cancel",function(){return s(m),c(n.cancel())})("p-save",function(){return s(m),c(n.save())})("p-save-new",function(){return s(m),c(n.saveNew())}),t(1,"div",4),l(2,"po-info",5),e(),l(3,"hr"),t(4,"form")(5,"div",4)(6,"po-input",6),E("ngModelChange",function(a){return s(m),g(n.title,a)||(n.title=a),c(a)}),e(),t(7,"po-input",7),E("ngModelChange",function(a){return s(m),g(n.subtitle,a)||(n.subtitle=a),c(a)}),e(),t(8,"po-checkbox-group",8),E("ngModelChange",function(a){return s(m),g(n.properties,a)||(n.properties=a),c(a)}),e(),t(9,"po-radio-group",9),E("ngModelChange",function(a){return s(m),g(n.componentsSize,a)||(n.componentsSize=a),c(a)}),e()(),l(10,"hr"),t(11,"form",null,0)(13,"div",4)(14,"po-input",10),E("ngModelChange",function(a){return s(m),g(n.breadcrumb.favorite,a)||(n.breadcrumb.favorite=a),c(a)}),e()()(),t(15,"form",null,1)(17,"div",4)(18,"po-input",11),E("ngModelChange",function(a){return s(m),g(n.breadcrumbItem.label,a)||(n.breadcrumbItem.label=a),c(a)}),e(),t(19,"po-input",12),E("ngModelChange",function(a){return s(m),g(n.breadcrumbItem.link,a)||(n.breadcrumbItem.link=a),c(a)}),e()(),t(20,"div",4)(21,"po-button",13),S("p-click",function(){return s(m),c(n.addBreadcrumbItem())}),e()()(),l(22,"hr"),t(23,"form",null,2)(25,"div",4)(26,"po-input",14),E("ngModelChange",function(a){return s(m),g(n.breadcrumbParams.property,a)||(n.breadcrumbParams.property=a),c(a)}),e(),t(27,"po-input",15),E("ngModelChange",function(a){return s(m),g(n.breadcrumbParams.value,a)||(n.breadcrumbParams.value=a),c(a)}),e()(),t(28,"div",4)(29,"po-button",16),S("p-click",function(){return s(m),c(n.addBreadcrumbParam())}),e()()(),t(30,"div",4)(31,"po-input",17),E("ngModelChange",function(a){return s(m),g(n.literals,a)||(n.literals=a),c(a)}),S("p-change",function(){return s(m),c(n.changeLiterals())}),e()(),t(32,"div",4)(33,"po-button",18),S("p-click",function(){return s(m),c(n.restore())}),e()()()()}if(r&2){let m=k(16),u=k(24);h("p-breadcrumb",n.breadcrumb)("p-components-size",n.componentsSize)("p-disable-submit",n.properties.includes("disableSubmit"))("p-literals",n.customLiterals)("p-title",n.title)("p-subtitle",n.subtitle),p(2),h("p-value",n.action),p(4),b("ngModel",n.title),p(),b("ngModel",n.subtitle),p(),b("ngModel",n.properties),h("p-options",n.propertiesOptions),p(),b("ngModel",n.componentsSize),h("p-options",n.componentsSizeOptions),p(5),b("ngModel",n.breadcrumb.favorite),p(4),b("ngModel",n.breadcrumbItem.label),p(),b("ngModel",n.breadcrumbItem.link),p(2),h("p-disabled",m.invalid),p(5),b("ngModel",n.breadcrumbParams.property),p(),b("ngModel",n.breadcrumbParams.value),p(2),h("p-disabled",u.invalid),p(2),b("ngModel",n.literals)}},dependencies:[q,N,W,U,O,Q,Y,Z,z,ie,T],encapsulation:2})}return o})();var Pe=o=>({"docs-sample-code-tabs":o}),pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-page-edit-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO Page Edit Labs"),e(),t(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-page-edit-labs/sample-po-page-edit-labs.component.html"),e(),t(13,"pre",7),i(14,`<po-page-edit
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

  <hr />

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
`),e()()()()(),t(21,"div",10),l(22,"sample-po-page-edit-labs"),e(),l(23,"hr")),r&2&&(p(5),y("po-icon "+n.sampleCodeButtonIcon),p(),x(" ",n.sampleCodeButtonLabel,""),p(),h("ngClass",M(4,Pe,n.hideSampleCodeTabs)))},dependencies:[B,_,v,C,me],encapsulation:2})}return o})();var _e=["formEditUser"],de=(()=>{class o{route;poDialog;poNotification;formEditUser;birthDate;email;fathersName;genre;graduation;mothersName;name;nationality;nickname;placeOfBirth;userId;breadcrumb={items:[{label:"Home",action:this.beforeRedirect.bind(this)},{label:"User Edit"}]};constructor(d,r,n){this.route=d,this.poDialog=r,this.poNotification=n}ngOnInit(){this.initialize()}cancel(){this.initialize()}initialize(){this.birthDate=new Date(1978,11,26),this.email="john.doe@po-ui.com.br",this.fathersName="Mike Doe",this.genre="male",this.graduation="College Degree",this.mothersName="Jane Doe",this.name="John Doe",this.nationality="USA",this.nickname="John",this.placeOfBirth="Colorado",this.userId=122635}save(){this.poNotification.success("Save successfully")}beforeRedirect(d){this.formEditUser.valid?this.route.navigate(["/"]):this.poDialog.confirm({title:`Confirm redirect to ${d}`,message:"There is data that has not been saved yet. Are you sure you want to quit?",confirm:()=>this.route.navigate(["/"])})}static \u0275fac=function(r){return new(r||o)(w(F),w(K),w(X))};static \u0275cmp=f({type:o,selectors:[["sample-po-page-edit-user"]],viewQuery:function(r,n){if(r&1&&R(_e,7),r&2){let m;H(m=G())&&(n.formEditUser=m.first)}},standalone:!1,decls:18,vars:13,consts:[["formEditUser","ngForm"],["p-title","User Edit",3,"p-cancel","p-save","p-breadcrumb","p-disable-submit"],[1,"po-row"],["name","userId","p-clean","","p-label","User ID","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","email","p-clean","","p-label","Email","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","nickname","p-clean","","p-label","Nickname",1,"po-md-4",3,"ngModelChange","ngModel"],["name","birthDate","p-clean","","p-label","Birth Date",1,"po-md-4",3,"ngModelChange","ngModel"],["name","genre","p-clean","","p-label","Genre",1,"po-md-4",3,"ngModelChange","ngModel"],["name","nationality","p-clean","","p-label","Nationality",1,"po-md-4",3,"ngModelChange","ngModel"],["name","placeOfBirth","p-clean","","p-label","Place Of Birth",1,"po-md-4",3,"ngModelChange","ngModel"],["name","graduation","p-clean","","p-label","Graduation",1,"po-md-4",3,"ngModelChange","ngModel"],["name","fathersName","p-clean","","p-label","Father's Name",1,"po-md-4",3,"ngModelChange","ngModel"],["name","mothersName","p-clean","","p-label","Mother's Name",1,"po-md-4",3,"ngModelChange","ngModel"]],template:function(r,n){if(r&1){let m=I();t(0,"po-page-edit",1),S("p-cancel",function(){return s(m),c(n.cancel())})("p-save",function(){return s(m),c(n.save())}),t(1,"form",null,0)(3,"div",2)(4,"po-number",3),E("ngModelChange",function(a){return s(m),g(n.userId,a)||(n.userId=a),c(a)}),e(),t(5,"po-email",4),E("ngModelChange",function(a){return s(m),g(n.email,a)||(n.email=a),c(a)}),e(),t(6,"po-input",5),E("ngModelChange",function(a){return s(m),g(n.name,a)||(n.name=a),c(a)}),e()(),t(7,"div",2)(8,"po-input",6),E("ngModelChange",function(a){return s(m),g(n.nickname,a)||(n.nickname=a),c(a)}),e(),t(9,"po-datepicker",7),E("ngModelChange",function(a){return s(m),g(n.birthDate,a)||(n.birthDate=a),c(a)}),e(),t(10,"po-input",8),E("ngModelChange",function(a){return s(m),g(n.genre,a)||(n.genre=a),c(a)}),e()(),t(11,"div",2)(12,"po-input",9),E("ngModelChange",function(a){return s(m),g(n.nationality,a)||(n.nationality=a),c(a)}),e(),t(13,"po-input",10),E("ngModelChange",function(a){return s(m),g(n.placeOfBirth,a)||(n.placeOfBirth=a),c(a)}),e(),t(14,"po-input",11),E("ngModelChange",function(a){return s(m),g(n.graduation,a)||(n.graduation=a),c(a)}),e()(),t(15,"div",2)(16,"po-input",12),E("ngModelChange",function(a){return s(m),g(n.fathersName,a)||(n.fathersName=a),c(a)}),e(),t(17,"po-input",13),E("ngModelChange",function(a){return s(m),g(n.mothersName,a)||(n.mothersName=a),c(a)}),e()()()()}if(r&2){let m=k(2);h("p-breadcrumb",n.breadcrumb)("p-disable-submit",m.invalid),p(4),b("ngModel",n.userId),p(),b("ngModel",n.email),p(),b("ngModel",n.name),p(2),b("ngModel",n.nickname),p(),b("ngModel",n.birthDate),p(),b("ngModel",n.genre),p(2),b("ngModel",n.nationality),p(),b("ngModel",n.placeOfBirth),p(),b("ngModel",n.graduation),p(2),b("ngModel",n.fathersName),p(),b("ngModel",n.mothersName)}},dependencies:[q,N,W,U,O,$,ee,z,te,T],encapsulation:2})}return o})();var ye=o=>({"docs-sample-code-tabs":o}),se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-page-edit-user-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO Page Edit - User"),e(),t(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-page-edit-user/sample-po-page-edit-user.component.html"),e(),t(13,"pre",7),i(14,`<po-page-edit
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
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-page-edit-user/sample-po-page-edit-user.component.ts"),e(),t(19,"pre",9),i(20,`import { Component, OnInit, ViewChild } from '@angular/core';
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

  constructor(
    private route: Router,
    private poDialog: PoDialogService,
    private poNotification: PoNotificationService
  ) {}

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
`),e()()()()(),t(21,"div",10),l(22,"sample-po-page-edit-user"),e(),l(23,"hr")),r&2&&(p(5),y("po-icon "+n.sampleCodeButtonIcon),p(),x(" ",n.sampleCodeButtonLabel,""),p(),h("ngClass",M(4,ye,n.hideSampleCodeTabs)))},dependencies:[B,_,v,C,de],encapsulation:2})}return o})();var ce=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-page-edit-doc"]],standalone:!1,decls:580,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoPageEditLiterals"],["href","/documentation/po-i18n"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"]],template:function(r,n){r&1&&(t(0,"div",0)(1,"p",1)(2,"code"),i(3,"import { PoPageModule } from '@po-ui/ng-components';"),e()(),t(4,"div",2)(5,"p"),i(6,`M\xF3dulo dos componentes po-page-default, po-page-detail, po-page-edit,
po-page-list e po-page-slide.`),e()(),t(7,"h3",3),i(8,"Componente"),e(),t(9,"h4",4)(10,"code",5),i(11,"PoPageEditComponent"),e()(),t(12,"div",2)(13,"p"),i(14,"O componente "),t(15,"strong"),i(16,"po-page-edit"),e(),i(17,` \xE9 utilizado como container principal para tela de edi\xE7\xE3o ou adi\xE7\xE3o de um
registro, tendo a possibilidade de usar as a\xE7\xF5es de "Salvar", "Salvar e Novo" e "Cancelar".`),e(),t(18,"p"),i(19,'Os bot\xF5es "Salvar" e "Salvar e Novo" podem ser habilitados/desabilitados utilizando a propriedade '),t(20,"code"),i(21,"p-disable-submit"),e(),i(22,`.
Esta propriedade pode ser utilizada para desabilitar os bot\xF5es caso exista um formul\xE1rio inv\xE1lido na p\xE1gina ou alguma
regra de neg\xF3cio n\xE3o tenha sido atendida.`),e(),t(23,"h4"),i(24,"Tokens customiz\xE1veis"),e(),t(25,"blockquote")(26,"p"),i(27,"Para maiores informa\xE7\xF5es, acesse o guia "),t(28,"a",6),i(29,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),i(30,"."),e()(),t(31,"table")(32,"thead")(33,"tr")(34,"th"),i(35,"Propriedade"),e(),t(36,"th"),i(37,"Descri\xE7\xE3o"),e(),t(38,"th"),i(39,"Valor Padr\xE3o"),e(),l(40,"th"),e()(),t(41,"tbody")(42,"tr")(43,"td")(44,"strong"),i(45,"Header"),e()(),l(46,"td")(47,"td")(48,"td"),e(),t(49,"tr")(50,"td")(51,"code"),i(52,"--padding"),e()(),t(53,"td"),i(54,"Espa\xE7amento (top "),t(55,"code"),i(56,"@deprecated 20.x.x"),e(),i(57,", right, bottom "),t(58,"code"),i(59,"@deprecated 20.x.x"),e(),i(60,", left)"),e(),t(61,"td")(62,"code"),i(63,"0.5rem (@deprecated 20.x.x) 1.5rem"),e()(),l(64,"td"),e(),t(65,"tr")(66,"td")(67,"code"),i(68,"--gap"),e()(),t(69,"td"),i(70,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),e(),t(71,"td")(72,"code"),i(73,"1.5rem"),e()(),t(74,"td")(75,"code"),i(76,"@deprecated 20.x.x"),e()()(),t(77,"tr")(78,"td")(79,"code"),i(80,"--gap-actions"),e()(),t(81,"td"),i(82,"Espa\xE7amento entre as a\xE7\xF5es"),e(),t(83,"td")(84,"code"),i(85,"0.5rem"),e()(),l(86,"td"),e(),t(87,"tr")(88,"td")(89,"code"),i(90,"--font-family"),e()(),t(91,"td"),i(92,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),e(),t(93,"td")(94,"code"),i(95,"--font-family-theme"),e()(),l(96,"td"),e(),t(97,"tr")(98,"td")(99,"strong"),i(100,"Content"),e()(),l(101,"td")(102,"td")(103,"td"),e(),t(104,"tr")(105,"td")(106,"code"),i(107,"--padding-content"),e()(),t(108,"td"),i(109,"Espa\xE7amento (top, right, bottom, left)"),e(),t(110,"td")(111,"code"),i(112,"0.5rem 1.5rem"),e()(),t(113,"td")(114,"code"),i(115,"@deprecated 20.x.x"),e()()()()()(),t(116,"div",7)(117,"h4",8),i(118,"Seletor"),e(),t(119,"pre",9),i(120,`<po-page-edit
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
`),e()(),t(121,"h4",10),i(122,"Propriedades"),e(),t(123,"table",11)(124,"tr",12)(125,"th",13),i(126,"Nome"),e(),t(127,"th",13),i(128,"Tipo"),e(),t(129,"th",13),i(130,"Padr\xE3o"),e(),t(131,"th",13),i(132,"Descri\xE7\xE3o"),e()(),t(133,"tr",14)(134,"td",15)(135,"div",16)(136,"span",17),i(137," p-breadcrumb"),l(138,"br"),e()()(),t(139,"td",18)(140,"code",19),i(141,"PoBreadcrumb"),e()(),t(142,"td",20),i(143,"-"),e(),t(144,"td",21)(145,"em")(146,"strong"),i(147,"(opcional)"),e()(),t(148,"p"),i(149,"Objeto com propriedades do breadcrumb."),e()()(),t(150,"tr",14)(151,"td",15)(152,"div",22)(153,"span",23),i(154," (p-cancel)"),l(155,"br"),e()()(),t(156,"td",18)(157,"code",24),i(158,"EventEmitter"),e()(),t(159,"td",20),i(160,"-"),e(),t(161,"td",21)(162,"p"),i(163,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Cancelar".'),e(),t(164,"pre")(165,"code"),i(166,`<po-page-edit (p-cancel)="myCancelFunction()">
</po-page-edit>
`),e()(),t(167,"blockquote")(168,"p"),i(169,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Cancelar" n\xE3o ser\xE1 exibido.'),e()()()(),t(170,"tr",14)(171,"td",15)(172,"div",16)(173,"span",17),i(174," p-components-size"),l(175,"br"),e()()(),t(176,"td",18)(177,"code",25),i(178,"string"),e()(),t(179,"td",20)(180,"p")(181,"code"),i(182,"medium"),e()()(),t(183,"td",21)(184,"em")(185,"strong"),i(186,"(opcional)"),e()(),t(187,"p"),i(188,"Define o tamanho dos componentes de formul\xE1rio no template:"),e(),t(189,"ul")(190,"li")(191,"code"),i(192,"small"),e(),i(193,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),e(),t(194,"li")(195,"code"),i(196,"medium"),e(),i(197,": aplica a medida medium de cada componente."),e()(),t(198,"blockquote")(199,"p"),i(200,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),t(201,"code"),i(202,"medium"),e(),i(203,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),t(204,"a",26),i(205,"po-theme"),e(),i(206,"."),e()()()(),t(207,"tr",14)(208,"td",15)(209,"div",16)(210,"span",17),i(211," p-disable-submit"),l(212,"br"),e()()(),t(213,"td",18)(214,"code",27),i(215,"boolean"),e()(),t(216,"td",20),i(217,"-"),e(),t(218,"td",21)(219,"em")(220,"strong"),i(221,"(opcional)"),e()(),t(222,"p"),i(223,"Desabilita bot\xF5es de submiss\xE3o (save e saveNew)"),e()()(),t(224,"tr",14)(225,"td",15)(226,"div",16)(227,"span",17),i(228," p-literals"),l(229,"br"),e()()(),t(230,"td",18)(231,"code",28),i(232,"PoPageEditLiterals"),e()(),t(233,"td",20),i(234,"-"),e(),t(235,"td",21)(236,"em")(237,"strong"),i(238,"(opcional)"),e()(),t(239,"p"),i(240,"Objeto com as literais usadas no "),t(241,"code"),i(242,"po-page-edit"),e(),i(243,"."),e(),t(244,"p"),i(245,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),e(),t(246,"pre")(247,"code"),i(248,`const customLiterals: PoPageEditLiterals = {
  cancel: 'Voltar',
  save: 'Confirmar',
  saveNew: 'Confirmar e criar um novo'
};
`),e()(),t(249,"p"),i(250,"Ou passando apenas as literais que deseja customizar:"),e(),t(251,"pre")(252,"code"),i(253,`const customLiterals: PoPageEditLiterals = {
  cancel: 'Cancelar processo'
};
`),e()(),t(254,"p"),i(255,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),e(),t(256,"pre")(257,"code"),i(258,`<po-page-edit
  [p-literals]="customLiterals">
</po-page-edit>
`),e()(),t(259,"blockquote")(260,"p"),i(261,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),t(262,"a",29)(263,"code"),i(264,"PoI18nService"),e()(),i(265," ou do browser."),e()()()(),t(266,"tr",14)(267,"td",15)(268,"div",22)(269,"span",23),i(270," (p-save)"),l(271,"br"),e()()(),t(272,"td",18)(273,"code",24),i(274,"EventEmitter"),e()(),t(275,"td",20),i(276,"-"),e(),t(277,"td",21)(278,"p"),i(279,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Salvar".'),e(),t(280,"pre")(281,"code"),i(282,`<po-page-edit (p-save)="mySaveFunction()">
</po-page-edit>
`),e()(),t(283,"blockquote")(284,"p"),i(285,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Salvar" n\xE3o ser\xE1 exibido.'),e()()()(),t(286,"tr",14)(287,"td",15)(288,"div",22)(289,"span",23),i(290," (p-save-new)"),l(291,"br"),e()()(),t(292,"td",18)(293,"code",24),i(294,"EventEmitter"),e()(),t(295,"td",20),i(296,"-"),e(),t(297,"td",21)(298,"p"),i(299,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Salvar e Novo".'),e(),t(300,"pre")(301,"code"),i(302,`<po-page-edit (p-save-new)="mySaveNewFunction()">
</po-page-edit>
`),e()(),t(303,"blockquote")(304,"p"),i(305,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Salvar e Novo" n\xE3o ser\xE1 exibido.'),e()()()(),t(306,"tr",14)(307,"td",15)(308,"div",16)(309,"span",17),i(310," p-subtitle"),l(311,"br"),e()()(),t(312,"td",18)(313,"code",25),i(314,"string"),e()(),t(315,"td",20),i(316,"-"),e(),t(317,"td",21)(318,"em")(319,"strong"),i(320,"(opcional)"),e()(),t(321,"p"),i(322,"Subtitulo do Header da p\xE1gina"),e()()(),t(323,"tr",14)(324,"td",15)(325,"div",16)(326,"span",17),i(327," p-title"),l(328,"br"),e()()(),t(329,"td",18)(330,"code",25),i(331,"string"),e()(),t(332,"td",20),i(333,"-"),e(),t(334,"td",21)(335,"p"),i(336,"T\xEDtulo da p\xE1gina."),e()()()(),t(337,"h3"),i(338,"Interfaces"),e(),t(339,"h4",30)(340,"code",5),i(341,"PoBreadcrumbItem"),e()(),t(342,"div",2)(343,"p"),i(344,"Interface que define cada item do componente "),t(345,"strong"),i(346,"po-breadcrumb"),e(),i(347,"."),e()(),t(348,"h4",10),i(349,"Propriedades"),e(),t(350,"table",11)(351,"tr",12)(352,"th",13),i(353,"Nome"),e(),t(354,"th",13),i(355,"Tipo"),e(),t(356,"th",13),i(357,"Descri\xE7\xE3o"),e()(),t(358,"tr",14)(359,"td",15)(360,"div",16)(361,"span",17),i(362," action"),l(363,"br"),e()()(),t(364,"td",18)(365,"code",31),i(366,"Function"),e()(),t(367,"td",21)(368,"em")(369,"strong"),i(370,"(opcional)"),e()(),t(371,"p"),i(372,"A\xE7\xE3o executada ao clicar no item."),e(),t(373,"blockquote")(374,"p"),i(375,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),t(376,"em"),i(377,"label"),e(),i(378," do item como par\xE2metro para execu\xE7\xE3o."),e()()()(),t(379,"tr",14)(380,"td",15)(381,"div",16)(382,"span",17),i(383," label"),l(384,"br"),e()()(),t(385,"td",18)(386,"code",25),i(387,"string"),e()(),t(388,"td",21)(389,"p"),i(390,"R\xF3tulo do item."),e()()(),t(391,"tr",14)(392,"td",15)(393,"div",16)(394,"span",17),i(395," link"),l(396,"br"),e()()(),t(397,"td",18)(398,"code",25),i(399,"string"),e()(),t(400,"td",21)(401,"em")(402,"strong"),i(403,"(opcional)"),e()(),t(404,"p"),i(405,"Url do item."),e(),t(406,"blockquote")(407,"p"),i(408,"Caso o item tamb\xE9m contenha uma "),t(409,"em"),i(410,"action"),e(),i(411," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),t(412,"em"),i(413,"link"),e(),i(414,"."),e()(),t(415,"blockquote")(416,"p"),i(417,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),t(418,"strong")(419,"a",32),i(420,"Veja um exemplo de como criar rotas aqui"),e()(),i(421,"."),e()(),t(422,"blockquote")(423,"p"),i(424,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),t(425,"code"),i(426,"p-favorite-service"),e(),i(427," consiga favoritar ou desfavoritar."),e()()()()(),t(428,"h4",30)(429,"code",5),i(430,"PoBreadcrumb"),e()(),t(431,"div",2)(432,"p"),i(433,"Interface que define o "),t(434,"code"),i(435,"po-breadcrumb"),e(),i(436,"."),e()(),t(437,"h4",10),i(438,"Propriedades"),e(),t(439,"table",11)(440,"tr",12)(441,"th",13),i(442,"Nome"),e(),t(443,"th",13),i(444,"Tipo"),e(),t(445,"th",13),i(446,"Descri\xE7\xE3o"),e()(),t(447,"tr",14)(448,"td",15)(449,"div",16)(450,"span",17),i(451," favorite"),l(452,"br"),e()()(),t(453,"td",18)(454,"code",25),i(455,"string"),e()(),t(456,"td",21)(457,"em")(458,"strong"),i(459,"(opcional)"),e()(),t(460,"p"),i(461,"Permite definir uma URL para favoritar ou desfavoritar."),e(),t(462,"blockquote")(463,"p"),i(464,"Para maiores informa\xE7\xF5es verificar a propriedade "),t(465,"code"),i(466,"p-favorite-service"),e(),i(467," do componente "),t(468,"code"),i(469,"po-breadcrumb"),e(),i(470,"."),e()()()(),t(471,"tr",14)(472,"td",15)(473,"div",16)(474,"span",17),i(475," items"),l(476,"br"),e()()(),t(477,"td",18)(478,"code",33),i(479,"Array<PoBreadcrumbItem>"),e()(),t(480,"td",21)(481,"p"),i(482,"Lista de itens do "),t(483,"em"),i(484,"breadcrumb"),e(),i(485,"."),e(),t(486,"p")(487,"strong"),i(488,"Exemplo:"),e()(),t(489,"pre")(490,"code"),i(491,`{ label: 'Po Portal', link: 'portal' }
`),e()()()(),t(492,"tr",14)(493,"td",15)(494,"div",16)(495,"span",17),i(496," params"),l(497,"br"),e()()(),t(498,"td",18)(499,"code",34),i(500,"object"),e()(),t(501,"td",21)(502,"em")(503,"strong"),i(504,"(opcional)"),e()(),t(505,"p"),i(506,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),e()()()(),t(507,"h4",30)(508,"code",5),i(509,"PoPageEditLiterals"),e()(),t(510,"div",2)(511,"p"),i(512,"Interface para defini\xE7\xE3o das literais usadas no "),t(513,"code"),i(514,"po-page-edit"),e(),i(515,"."),e()(),t(516,"h4",10),i(517,"Propriedades"),e(),t(518,"table",11)(519,"tr",12)(520,"th",13),i(521,"Nome"),e(),t(522,"th",13),i(523,"Tipo"),e(),t(524,"th",13),i(525,"Descri\xE7\xE3o"),e()(),t(526,"tr",14)(527,"td",15)(528,"div",16)(529,"span",17),i(530," cancel"),l(531,"br"),e()()(),t(532,"td",18)(533,"code",25),i(534,"string"),e()(),t(535,"td",21)(536,"em")(537,"strong"),i(538,"(opcional)"),e()(),t(539,"p"),i(540,"Label da a\xE7\xE3o "),t(541,"code"),i(542,"cancel"),e(),i(543,"."),e()()(),t(544,"tr",14)(545,"td",15)(546,"div",16)(547,"span",17),i(548," save"),l(549,"br"),e()()(),t(550,"td",18)(551,"code",25),i(552,"string"),e()(),t(553,"td",21)(554,"em")(555,"strong"),i(556,"(opcional)"),e()(),t(557,"p"),i(558,"Label da a\xE7\xE3o "),t(559,"code"),i(560,"save"),e(),i(561,"."),e()()(),t(562,"tr",14)(563,"td",15)(564,"div",16)(565,"span",17),i(566," saveNew"),l(567,"br"),e()()(),t(568,"td",18)(569,"code",25),i(570,"string"),e()(),t(571,"td",21)(572,"em")(573,"strong"),i(574,"(opcional)"),e()(),t(575,"p"),i(576,"Label da a\xE7\xE3o "),t(577,"code"),i(578,"saveNew"),e(),i(579,"."),e()()()()())},dependencies:[_],encapsulation:2})}return o})();var ue=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||o)(w(J),w(F))};static \u0275cmp=f({type:o,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Page Edit",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,n){r&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),S("p-click",function(){return n.changeTab("doc")}),l(3,"sample-po-page-edit-doc"),e(),t(4,"po-tab",3),S("p-click",function(){return n.changeTab("web")}),l(5,"sample-po-page-edit-basic-view")(6,"sample-po-page-edit-labs-view")(7,"sample-po-page-edit-user-view"),e()()()),r&2&&(h("p-actions",n.actions),p(2),h("p-active",n.activeTab==="doc"),p(2),h("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[ne,v,C,le,pe,se,ce],encapsulation:2})}return o})();var Be=[{path:"",component:ue}],be=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275mod=V({type:o});static \u0275inj=D({imports:[j.forChild(Be),j]})}return o})();var Ye=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275mod=V({type:o});static \u0275inj=D({imports:[ae,be]})}return o})();export{Ye as DocPoPageEditModule};
