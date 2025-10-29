import{o as k,p as te}from"./chunk-ZC2HZG7B.js";import{Ab as M,Fa as A,O as X,Q as Z,U as $,a as K,nb as ee,v as _,x as D,zb as T}from"./chunk-TPH26USO.js";import{$a as h,$c as G,Aa as s,Da as V,Fb as R,Gc as O,Hc as F,Ic as I,Jc as W,Kc as Q,La as o,Ma as t,N as q,Na as a,Ra as H,Sa as u,U as g,V as C,Xc as Y,Zc as J,_a as f,ab as E,ba as b,bb as z,cb as e,eb as v,gb as S,hb as P,ib as x,ja as r,ka as j,ob as B,qa as c,ra as N}from"./chunk-CBLD3XJL.js";var oe=(()=>{class i{poButton;static \u0275fac=function(p){return new(p||i)};static \u0275cmp=c({type:i,selectors:[["sample-po-popover-basic"]],viewQuery:function(p,n){if(p&1&&f(_,7,b),p&2){let l;h(l=E())&&(n.poButton=l.first)}},standalone:!1,decls:3,vars:1,consts:[[3,"p-target"],["p-label","Open Popover"]],template:function(p,n){p&1&&(o(0,"po-popover",0),e(1," PO Popover "),t(),a(2,"po-button",1)),p&2&&s("p-target",n.poButton)},dependencies:[_,D],encapsulation:2})}return i})();var ue=i=>({"docs-sample-code-tabs":i}),ie=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||i)};static \u0275cmp=c({type:i,selectors:[["sample-po-popover-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Popover Basic"),t(),o(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-popover-basic/sample-po-popover-basic.component.html"),t(),o(13,"pre",7),e(14,`<po-popover [p-target]="poButton"> PO Popover </po-popover>

<po-button p-label="Open Popover"> </po-button>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-popover-basic/sample-po-popover-basic.component.ts"),t(),o(19,"pre",9),e(20,`import { Component, ElementRef, ViewChild } from '@angular/core';

import { PoButtonComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-popover-basic',
  templateUrl: './sample-po-popover-basic.component.html',
  standalone: false
})
export class SamplePoPopoverBasicComponent {
  @ViewChild(PoButtonComponent, { read: ElementRef, static: true }) poButton: PoButtonComponent;
}
`),t()()()()(),o(21,"div",10),a(22,"sample-po-popover-basic"),t(),a(23,"hr")),p&2&&(r(5),V("po-icon "+n.sampleCodeButtonIcon),r(),v(" ",n.sampleCodeButtonLabel,""),r(),s("ngClass",B(4,ue,n.hideSampleCodeTabs)))},dependencies:[R,k,T,M,oe],encapsulation:2})}return i})();var Ce=["buttonClick"],be=["buttonHover"],pe=(()=>{class i{buttonClickRef;buttonHoverRef;content="";position="";properties=[];title="";positionOptions=[{label:"Right",value:"right"},{label:"Right-top",value:"right-top"},{label:"Right-bottom",value:"right-bottom"},{label:"Bottom",value:"bottom"},{label:"Bottom-left",value:"bottom-left"},{label:"Bottom-right",value:"bottom-right"},{label:"Left",value:"left"},{label:"Left-top",value:"left-top"},{label:"Left-bottom",value:"left-bottom"},{label:"Top",value:"top"},{label:"Top-left",value:"top-left"},{label:"Top-right",value:"top-right"}];propertiesOptions=[{value:"hideArrow",label:"Hide arrow"}];restore(){this.content="",this.position=void 0,this.properties=[],this.title=""}static \u0275fac=function(p){return new(p||i)};static \u0275cmp=c({type:i,selectors:[["sample-po-popover-labs"]],viewQuery:function(p,n){if(p&1&&(f(Ce,7,b),f(be,7,b)),p&2){let l;h(l=E())&&(n.buttonClickRef=l.first),h(l=E())&&(n.buttonHoverRef=l.first)}},standalone:!1,decls:22,vars:16,consts:[["buttonClick",""],["buttonHover",""],["f","ngForm"],["p-trigger","click",3,"p-hide-arrow","p-position","p-target","p-title"],["p-trigger","hover",3,"p-hide-arrow","p-position","p-target","p-title"],[1,"po-row"],[1,"po-offset-xl-1","po-offset-lg-1","po-md-6","po-lg-3"],["p-label","Popover with click"],["p-label","Popover with hover"],["name","title","p-clean","","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","content","p-clean","","p-label","Content",1,"po-md-6",3,"ngModelChange","ngModel"],["name","position","p-label","Position",1,"po-md-8",3,"ngModelChange","ngModel","p-options"],["name","properties","p-label","Properties",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(p,n){if(p&1){let l=H();o(0,"po-popover",3),e(1),t(),o(2,"po-popover",4),e(3),t(),o(4,"div",5)(5,"div",6),a(6,"po-button",7,0),t(),o(8,"div",6),a(9,"po-button",8,1),t()(),a(11,"po-divider"),o(12,"form",null,2)(14,"div",5)(15,"po-input",9),x("ngModelChange",function(m){return g(l),P(n.title,m)||(n.title=m),C(m)}),t(),o(16,"po-input",10),x("ngModelChange",function(m){return g(l),P(n.content,m)||(n.content=m),C(m)}),t()(),o(17,"div",5)(18,"po-radio-group",11),x("ngModelChange",function(m){return g(l),P(n.position,m)||(n.position=m),C(m)}),t(),o(19,"po-checkbox-group",12),x("ngModelChange",function(m){return g(l),P(n.properties,m)||(n.properties=m),C(m)}),t()(),o(20,"div",5)(21,"po-button",13),u("p-click",function(){return g(l),C(n.restore())}),t()()()}p&2&&(s("p-hide-arrow",n.properties.includes("hideArrow"))("p-position",n.position)("p-target",n.buttonClickRef)("p-title",n.title),r(),v(" ",n.content,`
`),r(),s("p-hide-arrow",n.properties.includes("hideArrow"))("p-position",n.position)("p-target",n.buttonHoverRef)("p-title",n.title),r(),v(" ",n.content,`
`),r(12),S("ngModel",n.title),r(),S("ngModel",n.content),r(2),S("ngModel",n.position),s("p-options",n.positionOptions),r(),S("ngModel",n.properties),s("p-options",n.propertiesOptions))},dependencies:[Q,O,F,W,I,_,K,X,Z,A,D],encapsulation:2})}return i})();var he=i=>({"docs-sample-code-tabs":i}),ae=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||i)};static \u0275cmp=c({type:i,selectors:[["sample-po-popover-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Popover Labs"),t(),o(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-popover-labs/sample-po-popover-labs.component.html"),t(),o(13,"pre",7),e(14,`<po-popover
  p-trigger="click"
  [p-hide-arrow]="properties.includes('hideArrow')"
  [p-position]="position"
  [p-target]="buttonClickRef"
  [p-title]="title"
>
  { { content }}
</po-popover>

<po-popover
  p-trigger="hover"
  [p-hide-arrow]="properties.includes('hideArrow')"
  [p-position]="position"
  [p-target]="buttonHoverRef"
  [p-title]="title"
>
  { { content }}
</po-popover>

<div class="po-row">
  <div class="po-offset-xl-1 po-offset-lg-1 po-md-6 po-lg-3">
    <po-button #buttonClick p-label="Popover with click"> </po-button>
  </div>

  <div class="po-offset-xl-1 po-offset-lg-1 po-md-6 po-lg-3">
    <po-button #buttonHover p-label="Popover with hover"> </po-button>
  </div>
</div>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="title" [(ngModel)]="title" p-clean p-label="Title"> </po-input>

    <po-input class="po-md-6" name="content" [(ngModel)]="content" p-clean p-label="Content"> </po-input>
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-md-8"
      name="position"
      [(ngModel)]="position"
      p-label="Position"
      [p-options]="positionOptions"
    >
    </po-radio-group>

    <po-checkbox-group
      class="po-md-4"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-popover-labs/sample-po-popover-labs.component.ts"),t(),o(19,"pre",9),e(20,`import { Component, ElementRef, ViewChild } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-popover-labs',
  templateUrl: './sample-po-popover-labs.component.html',
  standalone: false
})
export class SamplePoPopoverLabsComponent {
  @ViewChild('buttonClick', { read: ElementRef, static: true }) buttonClickRef: ElementRef;
  @ViewChild('buttonHover', { read: ElementRef, static: true }) buttonHoverRef: ElementRef;

  content: string = '';
  position: string = '';
  properties: Array<string> = [];
  title: string = '';

  public readonly positionOptions: Array<PoRadioGroupOption> = [
    { label: 'Right', value: 'right' },
    { label: 'Right-top', value: 'right-top' },
    { label: 'Right-bottom', value: 'right-bottom' },
    { label: 'Bottom', value: 'bottom' },
    { label: 'Bottom-left', value: 'bottom-left' },
    { label: 'Bottom-right', value: 'bottom-right' },
    { label: 'Left', value: 'left' },
    { label: 'Left-top', value: 'left-top' },
    { label: 'Left-bottom', value: 'left-bottom' },
    { label: 'Top', value: 'top' },
    { label: 'Top-left', value: 'top-left' },
    { label: 'Top-right', value: 'top-right' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [{ value: 'hideArrow', label: 'Hide arrow' }];

  restore() {
    this.content = '';
    this.position = undefined;
    this.properties = [];
    this.title = '';
  }
}
`),t()()()()(),o(21,"div",10),a(22,"sample-po-popover-labs"),t(),a(23,"hr")),p&2&&(r(5),V("po-icon "+n.sampleCodeButtonIcon),r(),v(" ",n.sampleCodeButtonLabel,""),r(),s("ngClass",B(4,he,n.hideSampleCodeTabs)))},dependencies:[R,k,T,M,pe],encapsulation:2})}return i})();var Se=["cardname"],Pe=["cardcode"],xe=["carddate"],re=(()=>{class i{cardnameref;cardcoderef;carddateref;inputCardName;inputCardCode;inputCardValid;static \u0275fac=function(p){return new(p||i)};static \u0275cmp=c({type:i,selectors:[["sample-po-popover-credit-card"]],viewQuery:function(p,n){if(p&1&&(f(Se,7,b),f(Pe,7,b),f(xe,7,b)),p&2){let l;h(l=E())&&(n.cardnameref=l.first),h(l=E())&&(n.cardcoderef=l.first),h(l=E())&&(n.carddateref=l.first)}},standalone:!1,decls:28,vars:10,consts:[["f","ngForm"],["cardname",""],["cardcode",""],["carddate",""],["modalCreditCard",""],["p-trigger","hover",3,"p-target"],["src","assets/graphics/card-code.jpg"],["src","assets/graphics/card-date.jpg"],["src","assets/graphics/card-owner.jpg"],[1,"po-row"],["name","inputCardName","p-clean","","p-label","Name","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","inputCardCode","p-clean","","p-label","Code","p-mask","9999 9999 9999 9999","p-mask-format-model","","p-pattern","\\d{4} \\d{4} \\d{4} \\d{4}","p-required","",1,"po-lg-4","po-md-9",3,"ngModelChange","ngModel"],["name","inputCardValid","p-clean","","p-label","Expiration Date","p-mask","12/99","p-mask-format-model","","p-pattern","\\d{2}\\/\\d{2}","p-required","",1,"po-lg-2","po-md-3",3,"ngModelChange","ngModel"],["p-label","Confirm",1,"po-md-2",3,"click","p-disabled"],["p-title","Your Credit Card"]],template:function(p,n){if(p&1){let l=H();o(0,"po-popover",5),a(1,"img",6),t(),o(2,"po-popover",5),a(3,"img",7),t(),o(4,"po-popover",5),a(5,"img",8),t(),o(6,"form",null,0)(8,"div",9)(9,"po-input",10,1),x("ngModelChange",function(m){return g(l),P(n.inputCardName,m)||(n.inputCardName=m),C(m)}),t(),o(11,"po-input",11,2),x("ngModelChange",function(m){return g(l),P(n.inputCardCode,m)||(n.inputCardCode=m),C(m)}),t(),o(13,"po-input",12,3),x("ngModelChange",function(m){return g(l),P(n.inputCardValid,m)||(n.inputCardValid=m),C(m)}),t()(),o(15,"div",9)(16,"po-button",13),u("click",function(){g(l);let m=z(18);return C(m.open())}),t()()(),o(17,"po-modal",14,4)(19,"div",9)(20,"div"),e(21),t()(),o(22,"div",9)(23,"div"),e(24),t()(),o(25,"div",9)(26,"div"),e(27),t()()()}if(p&2){let l=z(7);s("p-target",n.cardcoderef),r(2),s("p-target",n.carddateref),r(2),s("p-target",n.cardnameref),r(5),S("ngModel",n.inputCardName),r(2),S("ngModel",n.inputCardCode),r(2),S("ngModel",n.inputCardValid),r(3),s("p-disabled",l.form.invalid),r(5),v("Card Code: ",n.inputCardCode,""),r(3),v("Card Expiration: ",n.inputCardValid,""),r(3),v("Card Owner: ",n.inputCardName,"")}},dependencies:[Q,O,F,W,I,_,A,$,D],encapsulation:2})}return i})();var ye=i=>({"docs-sample-code-tabs":i}),le=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||i)};static \u0275cmp=c({type:i,selectors:[["sample-po-popover-credit-card-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Popover - Credit Card"),t(),o(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-popover-credit-card/sample-po-popover-credit-card.component.html"),t(),o(13,"pre",7),e(14,`<po-popover p-trigger="hover" [p-target]="cardcoderef">
  <img src="assets/graphics/card-code.jpg" />
</po-popover>

<po-popover p-trigger="hover" [p-target]="carddateref">
  <img src="assets/graphics/card-date.jpg" />
</po-popover>

<po-popover p-trigger="hover" [p-target]="cardnameref">
  <img src="assets/graphics/card-owner.jpg" />
</po-popover>

<form #f="ngForm">
  <div class="po-row">
    <po-input
      #cardname
      class="po-lg-6"
      name="inputCardName"
      [(ngModel)]="inputCardName"
      p-clean
      p-label="Name"
      p-required
    >
    </po-input>

    <po-input
      #cardcode
      class="po-lg-4 po-md-9"
      name="inputCardCode"
      [(ngModel)]="inputCardCode"
      p-clean
      p-label="Code"
      p-mask="9999 9999 9999 9999"
      p-mask-format-model
      p-pattern="\\d{4} \\d{4} \\d{4} \\d{4}"
      p-required
    >
    </po-input>

    <po-input
      #carddate
      class="po-lg-2 po-md-3"
      name="inputCardValid"
      [(ngModel)]="inputCardValid"
      p-clean
      p-label="Expiration Date"
      p-mask="12/99"
      p-mask-format-model
      p-pattern="\\d{2}\\/\\d{2}"
      p-required
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-md-2" p-label="Confirm" [p-disabled]="f.form.invalid" (click)="modalCreditCard.open()">
    </po-button>
  </div>
</form>

<po-modal #modalCreditCard p-title="Your Credit Card">
  <div class="po-row">
    <div>Card Code: { { inputCardCode }}</div>
  </div>
  <div class="po-row">
    <div>Card Expiration: { { inputCardValid }}</div>
  </div>
  <div class="po-row">
    <div>Card Owner: { { inputCardName }}</div>
  </div>
</po-modal>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-popover-credit-card/sample-po-popover-credit-card.component.ts"),t(),o(19,"pre",9),e(20,`import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'sample-po-popover-credit-card',
  templateUrl: './sample-po-popover-credit-card.component.html',
  standalone: false
})
export class SamplePoPopoverCreditCardComponent {
  @ViewChild('cardname', { read: ElementRef, static: true }) cardnameref: ElementRef;
  @ViewChild('cardcode', { read: ElementRef, static: true }) cardcoderef: ElementRef;
  @ViewChild('carddate', { read: ElementRef, static: true }) carddateref: ElementRef;

  public inputCardName: string;
  public inputCardCode: string;
  public inputCardValid: string;
}
`),t()()()()(),o(21,"div",10),a(22,"sample-po-popover-credit-card"),t(),a(23,"hr")),p&2&&(r(5),V("po-icon "+n.sampleCodeButtonIcon),r(),v(" ",n.sampleCodeButtonLabel,""),r(),s("ngClass",B(4,ye,n.hideSampleCodeTabs)))},dependencies:[R,k,T,M,re],encapsulation:2})}return i})();var me=(()=>{class i{static \u0275fac=function(p){return new(p||i)};static \u0275cmp=c({type:i,selectors:[["sample-po-popover-doc"]],standalone:!1,decls:320,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/documentation/po-tooltip?view=doc"],["href","https://po-ui.io/documentation/po-modal?view=doc"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","ElementRef"],["pan","",1,"docs-api-property-type","HTMLElement"]],template:function(p,n){p&1&&(o(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoPopoverModule } from '@po-ui/ng-components';"),t()(),o(4,"div",2)(5,"p"),e(6,"M\xF3dulo do componente po-popover."),t()(),o(7,"h3",3),e(8,"Componente"),t(),o(9,"h4",4)(10,"code",5),e(11,"PoPopoverComponent"),t()(),o(12,"div",2)(13,"p"),e(14,"O componente "),o(15,"code"),e(16,"po-popover"),t(),e(17,` \xE9 um container pequeno recomendado para incluir v\xE1rios tipos de conte\xFAdo como:
gr\xE1ficos, textos, imagens e inputs. Ele abre sobreposto aos outros componentes.`),t(),o(18,"p"),e(19,`Para mostrar apenas pequenos textos recomenda-se o uso da diretiva
`),o(20,"a",6)(21,"strong"),e(22,"po-tooltip"),t()(),e(23,"."),t(),o(24,"p"),e(25,"Para conte\xFAdos maiores recomenda-se o uso do "),o(26,"a",7)(27,"strong"),e(28,"po-modal"),t()(),e(29,"."),t(),o(30,"p"),e(31,`Ele cont\xE9m um t\xEDtulo e tamb\xE9m \xE9 poss\xEDvel escolher as posi\xE7\xF5es do popover em rela\xE7\xE3o ao componente pai,
as posi\xE7\xF5es permitidas s\xE3o: `),o(32,"code"),e(33,"right"),t(),e(34,", "),o(35,"code"),e(36,"right-top"),t(),e(37,", "),o(38,"code"),e(39,"right-bottom"),t(),e(40,", "),o(41,"code"),e(42,"top"),t(),e(43,", "),o(44,"code"),e(45,"top-left"),t(),e(46,", "),o(47,"code"),e(48,"top-right"),t(),e(49,`,
`),o(50,"code"),e(51,"left"),t(),e(52,", "),o(53,"code"),e(54,"left-top"),t(),e(55,", "),o(56,"code"),e(57,"left-bottom"),t(),e(58,", "),o(59,"code"),e(60,"bottom"),t(),e(61,", "),o(62,"code"),e(63,"bottom-left"),t(),e(64," e "),o(65,"code"),e(66,"bottom-right"),t(),e(67,"."),t(),o(68,"p"),e(69,"Tamb\xE9m \xE9 poss\xEDvel escolher entre os dois eventos que podem abrir o "),o(70,"em"),e(71,"popover"),t(),e(72,`.
Os eventos permitidos s\xE3o: `),o(73,"code"),e(74,"click"),t(),e(75," e "),o(76,"code"),e(77,"hover"),t(),e(78,". "),t()(),o(79,"div",8)(80,"h4",9),e(81,"Seletor"),t(),o(82,"pre",10),e(83,`<po-popover
    p-append-in-body="boolean"
    (p-close)="EventEmitter"
    p-custom-classes="string"
    p-hide-arrow="boolean"
    p-position="string"
    p-target="ElementRef | HTMLElement"
    p-title="string"
    p-trigger="string" >
</po-popover>
`),t()(),o(84,"h4",11),e(85,"Propriedades"),t(),o(86,"table",12)(87,"tr",13)(88,"th",14),e(89,"Nome"),t(),o(90,"th",14),e(91,"Tipo"),t(),o(92,"th",14),e(93,"Padr\xE3o"),t(),o(94,"th",14),e(95,"Descri\xE7\xE3o"),t()(),o(96,"tr",15)(97,"td",16)(98,"div",17)(99,"span",18),e(100," p-append-in-body"),a(101,"br"),t()()(),o(102,"td",19)(103,"code",20),e(104,"boolean"),t()(),o(105,"td",21)(106,"p")(107,"code"),e(108,"false"),t()()(),o(109,"td",22)(110,"em")(111,"strong"),e(112,"(opcional)"),t()(),o(113,"p"),e(114,"Define que o popover ser\xE1 inserido no body da p\xE1gina em vez do elemento definido em "),o(115,"code"),e(116,"p-target"),t(),e(117,`. Essa op\xE7\xE3o pode
ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o posicionamento
correto do conte\xFAdo pr\xF3ximo ao elemento.`),t()()(),o(118,"tr",15)(119,"td",16)(120,"div",23)(121,"span",24),e(122," (p-close)"),a(123,"br"),t()()(),o(124,"td",19)(125,"code",25),e(126,"EventEmitter"),t()(),o(127,"td",21),e(128,"-"),t(),o(129,"td",22)(130,"p"),e(131,"Evento disparado ao fechar o popover."),t()()(),o(132,"tr",15)(133,"td",16)(134,"div",17)(135,"span",18),e(136," p-custom-classes"),a(137,"br"),t()()(),o(138,"td",19)(139,"code",26),e(140,"string"),t()(),o(141,"td",21),e(142,"-"),t(),o(143,"td",22)(144,"em")(145,"strong"),e(146,"(opcional)"),t()(),o(147,"p"),e(148,"Permite a inclus\xE3o de classes CSS customizadas ao componente."),t(),o(149,"p"),e(150,"Exemplo: "),o(151,"code"),e(152,'p-custom-classes="minha-classe-1 minha-classe-2"'),t(),e(153,"."),t()()(),o(154,"tr",15)(155,"td",16)(156,"div",17)(157,"span",18),e(158," p-hide-arrow"),a(159,"br"),t()()(),o(160,"td",19)(161,"code",20),e(162,"boolean"),t()(),o(163,"td",21)(164,"p")(165,"code"),e(166,"false"),t()()(),o(167,"td",22)(168,"em")(169,"strong"),e(170,"(opcional)"),t()(),o(171,"p"),e(172,"Desabilita a seta do componente "),o(173,"em"),e(174,"popover"),t(),e(175,"."),t()()(),o(176,"tr",15)(177,"td",16)(178,"div",17)(179,"span",18),e(180," p-position"),a(181,"br"),t()()(),o(182,"td",19)(183,"code",26),e(184,"string"),t()(),o(185,"td",21)(186,"p"),e(187,"right"),t()(),o(188,"td",22)(189,"em")(190,"strong"),e(191,"(opcional)"),t()(),o(192,"p"),e(193,`Define a posi\xE7\xE3o que o po-popover abrir\xE1 em rela\xE7\xE3o ao componente alvo. Sugere-se que seja
usada a orienta\xE7\xE3o "right" (direita), por\xE9m o mesmo \xE9 flex\xEDvel e ser\xE1 rotacionado
automaticamente para se adequar a tela, caso necess\xE1rio.`),t(),o(194,"p"),e(195,"Posi\xE7\xF5es v\xE1lidas:"),t(),o(196,"ul")(197,"li")(198,"code"),e(199,"right"),t(),e(200,": Posiciona o po-popover no lado direito do componente alvo."),t(),o(201,"li")(202,"code"),e(203,"right-bottom"),t(),e(204,": Posiciona o po-popover no lado direito inferior do componente alvo."),t(),o(205,"li")(206,"code"),e(207,"right-top"),t(),e(208,": Posiciona o po-popover no lado direito superior do componente alvo."),t(),o(209,"li")(210,"code"),e(211,"bottom"),t(),e(212,": Posiciona o po-popover abaixo do componente alvo."),t(),o(213,"li")(214,"code"),e(215,"bottom-left"),t(),e(216,": Posiciona o po-popover abaixo e \xE0 esquerda do componente alvo."),t(),o(217,"li")(218,"code"),e(219,"bottom-right"),t(),e(220,": Posiciona o po-popover abaixo e \xE0 direita do componente alvo."),t(),o(221,"li")(222,"code"),e(223,"left"),t(),e(224,": Posiciona o po-popover no lado esquerdo do componente alvo."),t(),o(225,"li")(226,"code"),e(227,"left-top"),t(),e(228,": Posiciona o po-popover no lado esquerdo superior do componente alvo."),t(),o(229,"li")(230,"code"),e(231,"left-bottom"),t(),e(232,": Posiciona o po-popover no lado esquerdo inferior do componente alvo."),t(),o(233,"li")(234,"code"),e(235,"top"),t(),e(236,": Posiciona o po-popover acima do componente alvo."),t(),o(237,"li")(238,"code"),e(239,"top-right"),t(),e(240,": Posiciona o po-popover acima e \xE0 direita do componente alvo."),t(),o(241,"li")(242,"code"),e(243,"top-left"),t(),e(244,": Posiciona o po-popover acima e \xE0 esquerda do componente alvo."),t()()()(),o(245,"tr",15)(246,"td",16)(247,"div",17)(248,"span",18),e(249," p-target"),a(250,"br"),t()()(),o(251,"td",19)(252,"code",27),e(253,"ElementRef "),t(),o(254,"code",28),e(255," HTMLElement"),t()(),o(256,"td",21),e(257,"-"),t(),o(258,"td",22)(259,"p"),e(260,`ElementRef do componente de origem respons\xE1vel por abrir o popover.
Para utilizar o po-popover deve-se colocar uma vari\xE1vel no componente que vai disparar o evento
de abertura, exemplo:`),t(),o(261,"pre")(262,"code"),e(263,`<po-button
  p-label="Open Popover">
</po-button>

<po-popover
  [p-target]="poButton"
  [p-title]="PO Popover">
</po-popover>
`),t()(),o(264,"p"),e(265,`Tamb\xE9m deve-se criar um ViewChild para cada popover, passando como refer\xEAncia o elemento do
HTML que ir\xE1 disparar o evento. Exemplo:`),t(),o(266,"pre")(267,"code"),e(268,`@ViewChild(PoButtonComponent, {read: ElementRef}) poButton: PoButtonComponent;
`),t()(),o(269,"p"),e(270,`Pode-se tambem informar diretamente o HTMLElement, para n\xE3o ter que utilizar o ViewChild.
Para utilizar o po-popover deve-se colocar uma vari\xE1vel no componente que vai disparar o evento
de abertura, exemplo:`),t(),o(271,"pre")(272,"code"),e(273,`<button #target>
  Abrir popover
</button>

<po-popover
    [p-target]="target"
    p-trigger="click" >
</po-popover>
`),t()()()(),o(274,"tr",15)(275,"td",16)(276,"div",17)(277,"span",18),e(278," p-title"),a(279,"br"),t()()(),o(280,"td",19)(281,"code",26),e(282,"string"),t()(),o(283,"td",21),e(284,"-"),t(),o(285,"td",22)(286,"em")(287,"strong"),e(288,"(opcional)"),t()(),o(289,"p"),e(290,"T\xEDtulo do popover."),t()()(),o(291,"tr",15)(292,"td",16)(293,"div",17)(294,"span",18),e(295," p-trigger"),a(296,"br"),t()()(),o(297,"td",19)(298,"code",26),e(299,"string"),t()(),o(300,"td",21)(301,"p"),e(302,"click"),t()(),o(303,"td",22)(304,"em")(305,"strong"),e(306,"(opcional)"),t()(),o(307,"p"),e(308,"Define o evento que abrir\xE1 o po-popover."),t(),o(309,"p"),e(310,"Valores v\xE1lidos:"),t(),o(311,"ul")(312,"li")(313,"code"),e(314,"click"),t(),e(315,": Abre ao clicar no componente alvo."),t(),o(316,"li")(317,"code"),e(318,"hover"),t(),e(319,": Abre ao passar o mouse sobre o componente alvo."),t()()()()()())},dependencies:[k],encapsulation:2})}return i})();var de=(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,p){this.route=d,this.router=p}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let p=d.view;this.activeTab=p||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(p){return new(p||i)(j(Y),j(J))};static \u0275cmp=c({type:i,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Popover",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(p,n){p&1&&(o(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u("p-click",function(){return n.changeTab("doc")}),a(3,"sample-po-popover-doc"),t(),o(4,"po-tab",3),u("p-click",function(){return n.changeTab("web")}),a(5,"sample-po-popover-basic-view")(6,"sample-po-popover-labs-view")(7,"sample-po-popover-credit-card-view"),t()()()),p&2&&(s("p-actions",n.actions),r(2),s("p-active",n.activeTab==="doc"),r(2),s("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[ee,T,M,ie,ae,le,me],encapsulation:2})}return i})();var Me=[{path:"",component:de}],se=(()=>{class i{static \u0275fac=function(p){return new(p||i)};static \u0275mod=N({type:i});static \u0275inj=q({imports:[G.forChild(Me),G]})}return i})();var lt=(()=>{class i{static \u0275fac=function(p){return new(p||i)};static \u0275mod=N({type:i});static \u0275inj=q({imports:[te,se]})}return i})();export{lt as DocPoPopoverModule};
