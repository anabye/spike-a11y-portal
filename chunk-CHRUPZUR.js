import{o as k,p as ae}from"./chunk-VHIWABDT.js";import{Ab as v,Fa as oe,Q as ee,U as H,Xa as ne,a as L,nb as ie,ra as te,v as N,z as A,zb as f}from"./chunk-RH5KSUEM.js";import{$a as z,Aa as c,Cb as y,Da as T,Dc as D,Ec as Q,Fc as X,Gc as R,Hc as J,La as o,Ma as t,N as M,Na as a,Qb as K,Ra as O,Sa as h,U as u,Uc as Z,V as b,Wc as $,Yc as F,_a as q,ab as U,bb as j,cb as e,eb as w,gb as x,hb as S,ib as C,ja as r,ka as W,lb as P,qa as s,ra as I,rb as G,sb as Y}from"./chunk-KZJHT32G.js";var le=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275cmp=s({type:i,selectors:[["sample-po-checkbox-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","checkbox","p-label","PO Checkbox"]],template:function(l,n){l&1&&a(0,"po-checkbox",0)},dependencies:[A],encapsulation:2})}return i})();var Ee=i=>({"docs-sample-code-tabs":i}),pe=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=s({type:i,selectors:[["sample-po-checkbox-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Checkbox Basic"),t(),o(4,"a",2),h("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-checkbox-basic/sample-po-checkbox-basic.component.html"),t(),o(13,"pre",7),e(14,`<po-checkbox name="checkbox" p-label="PO Checkbox"> </po-checkbox>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-checkbox-basic/sample-po-checkbox-basic.component.ts"),t(),o(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-checkbox-basic',
  templateUrl: './sample-po-checkbox-basic.component.html',
  standalone: false
})
export class SamplePoCheckboxBasicComponent {}
`),t()()()()(),o(21,"div",10),a(22,"sample-po-checkbox-basic"),t(),a(23,"hr")),l&2&&(r(5),T("po-icon "+n.sampleCodeButtonIcon),r(),w(" ",n.sampleCodeButtonLabel,""),r(),c("ngClass",P(4,Ee,n.hideSampleCodeTabs)))},dependencies:[y,k,f,v,le],encapsulation:2})}return i})();var de=(()=>{class i{additionalHelpTooltip;checkbox;disabled;help;size;event;label;labelTextWrap;sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"large",value:"large"}];ngOnInit(){this.restore()}changeEvent(d){this.event=d}restore(){this.additionalHelpTooltip="",this.checkbox=void 0,this.disabled=!1,this.event=void 0,this.help="",this.label=void 0,this.size="medium"}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=s({type:i,selectors:[["sample-po-checkbox-labs"]],standalone:!1,decls:18,vars:18,consts:[["f","ngForm"],["name","checkbox",3,"ngModelChange","p-change","p-keydown","ngModel","p-additional-help-tooltip","p-disabled","p-help","p-label","p-size","p-label-text-wrap"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disabled","p-label","Disabled",1,"po-sm-3",3,"ngModelChange","ngModel"],["name","labelTextWrap","p-label","Label Text Wrap",1,"po-sm-3",3,"ngModelChange","ngModel"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,n){if(l&1){let m=O();o(0,"po-checkbox",1),C("ngModelChange",function(p){return u(m),S(n.checkbox,p)||(n.checkbox=p),b(p)}),h("p-change",function(){return u(m),b(n.changeEvent("p-change"))})("p-keydown",function(){return u(m),b(n.changeEvent("p-keydown"))}),t(),a(1,"po-divider"),o(2,"div",2),a(3,"po-info",3),G(4,"json"),a(5,"po-info",4),t(),a(6,"po-divider"),o(7,"form",null,0)(9,"div",2)(10,"po-input",5),C("ngModelChange",function(p){return u(m),S(n.label,p)||(n.label=p),b(p)}),t(),o(11,"po-input",6),C("ngModelChange",function(p){return u(m),S(n.help,p)||(n.help=p),b(p)}),t(),o(12,"po-input",7),C("ngModelChange",function(p){return u(m),S(n.additionalHelpTooltip,p)||(n.additionalHelpTooltip=p),b(p)}),t(),o(13,"po-switch",8),C("ngModelChange",function(p){return u(m),S(n.disabled,p)||(n.disabled=p),b(p)}),t(),o(14,"po-switch",9),C("ngModelChange",function(p){return u(m),S(n.labelTextWrap,p)||(n.labelTextWrap=p),b(p)}),t(),o(15,"po-radio-group",10),C("ngModelChange",function(p){return u(m),S(n.size,p)||(n.size=p),b(p)}),t()(),o(16,"div",2)(17,"po-button",11),h("p-click",function(){return u(m),b(n.restore())}),t()()()}l&2&&(x("ngModel",n.checkbox),c("p-additional-help-tooltip",n.additionalHelpTooltip)("p-disabled",n.disabled)("p-help",n.help)("p-label",n.label)("p-size",n.size)("p-label-text-wrap",n.labelTextWrap),r(3),c("p-value",Y(4,16,n.checkbox)),r(2),c("p-value",n.event),r(5),x("ngModel",n.label),r(),x("ngModel",n.help),r(),x("ngModel",n.additionalHelpTooltip),r(),x("ngModel",n.disabled),r(),x("ngModel",n.labelTextWrap),r(),x("ngModel",n.size),c("p-options",n.sizeOptions))},dependencies:[J,D,Q,R,X,N,L,ee,oe,A,te,ne,K],encapsulation:2})}return i})();var ge=i=>({"docs-sample-code-tabs":i}),re=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=s({type:i,selectors:[["sample-po-checkbox-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Checkbox Labs"),t(),o(4,"a",2),h("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-checkbox-labs/sample-po-checkbox-labs.component.html"),t(),o(13,"pre",7),e(14,`<po-checkbox
  name="checkbox"
  [(ngModel)]="checkbox"
  [p-additional-help-tooltip]="additionalHelpTooltip"
  [p-disabled]="disabled"
  [p-help]="help"
  [p-label]="label"
  [p-size]="size"
  (p-change)="changeEvent('p-change')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-label-text-wrap]="labelTextWrap"
>
</po-checkbox>

<po-divider></po-divider>

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="checkbox | json"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider></po-divider>

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="label" [(ngModel)]="label" p-label="Label"> </po-input>

    <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

    <po-input
      class="po-md-6"
      name="additionalHelpTooltip"
      [(ngModel)]="additionalHelpTooltip"
      p-clean
      p-label="Additional Help"
    >
    </po-input>

    <po-switch class="po-sm-3" name="disabled" [(ngModel)]="disabled" p-label="Disabled"> </po-switch>
    <po-switch class="po-sm-3" name="labelTextWrap" [(ngModel)]="labelTextWrap" p-label="Label Text Wrap"> </po-switch>

    <po-radio-group
      class="po-md-12"
      name="size"
      [(ngModel)]="size"
      p-columns="4"
      p-label="Size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="sizeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-checkbox-labs/sample-po-checkbox-labs.component.ts"),t(),o(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';
import { PoRadioGroupOption } from '@po-ui/ng-components';
@Component({
  selector: 'sample-po-checkbox-labs',
  templateUrl: './sample-po-checkbox-labs.component.html',
  standalone: false
})
export class SamplePoCheckboxLabsComponent implements OnInit {
  additionalHelpTooltip: string;
  checkbox: boolean | null;
  disabled: boolean;
  help: string;
  size: string;
  event: string;
  label: string;
  labelTextWrap: boolean;

  sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' },
    { label: 'large', value: 'large' }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.additionalHelpTooltip = '';
    this.checkbox = undefined;
    this.disabled = false;
    this.event = undefined;
    this.help = '';
    this.label = undefined;
    this.size = 'medium';
  }
}
`),t()()()()(),o(21,"div",10),a(22,"sample-po-checkbox-labs"),t(),a(23,"hr")),l&2&&(r(5),T("po-icon "+n.sampleCodeButtonIcon),r(),w(" ",n.sampleCodeButtonLabel,""),r(),c("ngClass",P(4,ge,n.hideSampleCodeTabs)))},dependencies:[y,k,f,v,de],encapsulation:2})}return i})();var me=(()=>{class i{modalTerm;acceptance=!1;primaryAction={action:()=>{this.modalTerm.close()},disabled:!0,label:"Confirm"};static \u0275fac=function(l){return new(l||i)};static \u0275cmp=s({type:i,selectors:[["sample-po-checkbox-acceptance-term"]],viewQuery:function(l,n){if(l&1&&q(H,7),l&2){let m;z(m=U())&&(n.modalTerm=m.first)}},standalone:!1,decls:23,vars:2,consts:[["modalTerm",""],["p-label","View term",3,"p-click"],["p-title","Acceptance Term",3,"p-primary-action"],[1,"po-row"],[1,"po-sm-12"],[1,"po-font-text-large-bold"],[1,"po-row","po-p-1"],["name","acceptance","p-label","I have read and agree to the terms of service and privacy",3,"ngModelChange","p-change","ngModel"]],template:function(l,n){if(l&1){let m=O();o(0,"po-button",1),h("p-click",function(){u(m);let p=j(2);return b(p.open())}),t(),o(1,"po-modal",2,0)(3,"div",3)(4,"div",4)(5,"h3",5),e(6,"MIT License"),t()(),o(7,"div",4)(8,"h4"),e(9,"Copyright (c) 2019 PO UI"),t()(),a(10,"po-divider",4),o(11,"div",4)(12,"p"),e(13,' Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: '),t(),a(14,"br"),o(15,"p"),e(16," The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. "),t(),a(17,"br"),o(18,"p"),e(19,' THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. '),t()()(),a(20,"po-divider"),o(21,"div",6)(22,"po-checkbox",7),C("ngModelChange",function(p){return u(m),S(n.acceptance,p)||(n.acceptance=p),b(p)}),h("p-change",function(){return u(m),b(n.primaryAction.disabled=!n.acceptance)}),t()()()}l&2&&(r(),c("p-primary-action",n.primaryAction),r(21),x("ngModel",n.acceptance))},dependencies:[D,R,N,L,A,H],encapsulation:2})}return i})();var ke=i=>({"docs-sample-code-tabs":i}),ce=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=s({type:i,selectors:[["sample-po-checkbox-acceptance-term-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Checkbox - Acceptance Term"),t(),o(4,"a",2),h("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-checkbox-acceptance-term/sample-po-checkbox-acceptance-term.component.html"),t(),o(13,"pre",7),e(14,`<po-button p-label="View term" (p-click)="modalTerm.open()"> </po-button>

<po-modal #modalTerm p-title="Acceptance Term" [p-primary-action]="primaryAction">
  <div class="po-row">
    <div class="po-sm-12">
      <h3 class="po-font-text-large-bold">MIT License</h3>
    </div>

    <div class="po-sm-12">
      <h4>Copyright (c) 2019 PO UI</h4>
    </div>

    <po-divider class="po-sm-12"></po-divider>

    <div class="po-sm-12">
      <p>
        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
        documentation files (the "Software"), to deal in the Software without restriction, including without limitation
        the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
        to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      </p>
      <br />
      <p>
        The above copyright notice and this permission notice shall be included in all copies or substantial portions of
        the Software.
      </p>
      <br />
      <p>
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
        THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
        CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
        DEALINGS IN THE SOFTWARE.
      </p>
    </div>
  </div>

  <po-divider></po-divider>

  <div class="po-row po-p-1">
    <po-checkbox
      name="acceptance"
      [(ngModel)]="acceptance"
      p-label="I have read and agree to the terms of service and privacy"
      (p-change)="primaryAction.disabled = !acceptance"
    >
    </po-checkbox>
  </div>
</po-modal>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-checkbox-acceptance-term/sample-po-checkbox-acceptance-term.component.ts"),t(),o(19,"pre",9),e(20,`import { Component, ViewChild } from '@angular/core';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-checkbox-acceptance-term',
  templateUrl: './sample-po-checkbox-acceptance-term.component.html',
  standalone: false
})
export class SamplePoCheckboxAcceptanceTermComponent {
  @ViewChild(PoModalComponent, { static: true }) modalTerm: PoModalComponent;

  acceptance: boolean = false;

  primaryAction: PoModalAction = {
    action: () => {
      this.modalTerm.close();
    },
    disabled: true,
    label: 'Confirm'
  };
}
`),t()()()()(),o(21,"div",10),a(22,"sample-po-checkbox-acceptance-term"),t(),a(23,"hr")),l&2&&(r(5),T("po-icon "+n.sampleCodeButtonIcon),r(),w(" ",n.sampleCodeButtonLabel,""),r(),c("ngClass",P(4,ke,n.hideSampleCodeTabs)))},dependencies:[y,k,f,v,me],encapsulation:2})}return i})();var se=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275cmp=s({type:i,selectors:[["sample-po-checkbox-doc"]],standalone:!1,decls:623,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://www.w3.org/WAI/WCAG21/Understanding/use-of-color"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(l,n){l&1&&(o(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),o(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),o(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),o(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),o(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),o(16,"h3",3),e(17,"Componente"),t(),o(18,"h4",4)(19,"code",5),e(20,"PoCheckboxComponent"),t()(),o(21,"div",2)(22,"p"),e(23,"O componente "),o(24,"code"),e(25,"po-checkbox"),t(),e(26,` exibe uma caixa de op\xE7\xE3o com um texto ao lado, na qual \xE9 poss\xEDvel marcar e desmarcar atrav\xE9s tanto
no `),o(27,"em"),e(28,"click"),t(),e(29," do "),o(30,"em"),e(31,"mouse"),t(),e(32," quanto por meio da tecla "),o(33,"em"),e(34,"space"),t(),e(35," quando estiver com foco."),t(),o(36,"p"),e(37,`Cada op\xE7\xE3o poder\xE1 receber um estado de marcado, desmarcado, indeterminado/mixed e desabilitado, como tamb\xE9m uma a\xE7\xE3o que ser\xE1 disparada quando
ocorrer mudan\xE7as do valor.`),t(),o(38,"blockquote")(39,"p"),e(40,"O "),o(41,"em"),e(42,"model"),t(),e(43," deste componente aceitar\xE1 valores igual \xE0 "),o(44,"code"),e(45,"true"),t(),e(46,", "),o(47,"code"),e(48,"false"),t(),e(49," ou "),o(50,"code"),e(51,"null"),t(),e(52," para quando for indeterminado/mixed."),t()(),o(53,"p")(54,"strong"),e(55,"Acessibilidade tratada no componente:"),t()(),o(56,"p"),e(57,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),t(),o(58,"ul")(59,"li"),e(60,"O componente foi desenvolvido utilizando controles padr\xF5es HTML para permitir a identifica\xE7\xE3o do mesmo na interface por tecnologias assistivas. "),o(61,"a",6),e(62,"WCAG 4.1.2: Name, Role, Value"),t()(),o(63,"li"),e(64,"A \xE1rea do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco n\xE3o pode ficar escondido por outros elementos da tela. "),o(65,"a",7),e(66,"WCAG 2.4.12: Focus Appearance"),t()(),o(67,"li"),e(68,"A cor n\xE3o deve ser o \xFAnico meio para diferenciar o componente do seu estado marcado e desmarcado. "),o(69,"a",8),e(70,"WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification"),t()()(),o(71,"h4"),e(72,"Tokens customiz\xE1veis"),t(),o(73,"p"),e(74,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),o(75,"blockquote")(76,"p"),e(77,"Para maiores informa\xE7\xF5es, acesse o guia "),o(78,"a",9),e(79,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(80,"."),t()(),o(81,"table")(82,"thead")(83,"tr")(84,"th"),e(85,"Propriedade"),t(),o(86,"th"),e(87,"Descri\xE7\xE3o"),t(),o(88,"th"),e(89,"Valor Padr\xE3o"),t()()(),o(90,"tbody")(91,"tr")(92,"td")(93,"strong"),e(94,"Default Values"),t()(),a(95,"td")(96,"td"),t(),o(97,"tr")(98,"td")(99,"code"),e(100,"--border-color"),t()(),o(101,"td"),e(102,"Cor da borda"),t(),o(103,"td")(104,"code"),e(105,"var(--color-neutral-dark-70)"),t()()(),o(106,"tr")(107,"td")(108,"code"),e(109,"--color-unchecked"),t()(),o(110,"td"),e(111,"Cor quando n\xE3o selecionado"),t(),o(112,"td")(113,"code"),e(114,"var(--color-neutral-light-00)"),t()()(),o(115,"tr")(116,"td")(117,"code"),e(118,"--color-checked"),t()(),o(119,"td"),e(120,"Cor quando selecionado"),t(),o(121,"td")(122,"code"),e(123,"var(--color-action-default)"),t()()(),o(124,"tr")(125,"td")(126,"strong"),e(127,"Hover"),t()(),a(128,"td")(129,"td"),t(),o(130,"tr")(131,"td")(132,"code"),e(133,"--color-hover"),t()(),o(134,"td"),e(135,"Cor principal no estado hover"),t(),o(136,"td")(137,"code"),e(138,"var(--color-action-hover)"),t()()(),o(139,"tr")(140,"td")(141,"code"),e(142,"--shadow-color-hover"),t()(),o(143,"td"),e(144,"Cor da sombra no estado hover"),t(),o(145,"td")(146,"code"),e(147,"var(--color-brand-01-lighter)"),t()()(),o(148,"tr")(149,"td")(150,"strong"),e(151,"Focused"),t()(),a(152,"td")(153,"td"),t(),o(154,"tr")(155,"td")(156,"code"),e(157,"--outline-color-focused"),t()(),o(158,"td"),e(159,"Cor do outline do estado de focus"),t(),o(160,"td")(161,"code"),e(162,"var(--color-action-focus)"),t()()(),o(163,"tr")(164,"td")(165,"strong"),e(166,"Disabled"),t()(),a(167,"td")(168,"td"),t(),o(169,"tr")(170,"td")(171,"code"),e(172,"--color-unchecked-disabled"),t(),e(173," \xA0"),t(),o(174,"td"),e(175,"Cor pricipal quando n\xE3o selecionado no estado disabled\xA0"),t(),o(176,"td")(177,"code"),e(178,"var(--color-action-disabled)"),t()()(),o(179,"tr")(180,"td")(181,"code"),e(182,"--color-checked-disabled"),t(),e(183," \xA0"),t(),o(184,"td"),e(185,"Cor pricipal quando selecionado no estado disabled"),t(),o(186,"td")(187,"code"),e(188,"var(--color-neutral-dark-70)"),t()()()()()(),o(189,"div",10)(190,"h4",11),e(191,"Seletor"),t(),o(192,"pre",12),e(193,`<po-checkbox
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    p-disabled="boolean"
    p-help="string"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    name="string"
    p-helper="PoHelperOptions | string"
    p-size="string" >
</po-checkbox>
`),t()(),o(194,"h4",13),e(195,"Propriedades"),t(),o(196,"table",14)(197,"tr",15)(198,"th",16),e(199,"Nome"),t(),o(200,"th",16),e(201,"Tipo"),t(),o(202,"th",16),e(203,"Padr\xE3o"),t(),o(204,"th",16),e(205,"Descri\xE7\xE3o"),t()(),o(206,"tr",17)(207,"td",18)(208,"div",19)(209,"span",20),e(210," (p-additional-help)"),a(211,"br"),t()(),o(212,"div",21),e(213,"Deprecated"),t()(),o(214,"td",22)(215,"code",23),e(216,"EventEmitter"),t()(),o(217,"td",24),e(218,"-"),t(),o(219,"td",25)(220,"em")(221,"strong"),e(222,"(opcional)"),t()(),o(223,"p"),e(224,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),o(225,"code"),e(226,"p-help"),t(),e(227,"."),t(),o(228,"blockquote")(229,"p"),e(230,"Essa propriedade est\xE1 "),o(231,"strong"),e(232,"depreciada"),t(),e(233," e ser\xE1 removida na vers\xE3o "),o(234,"code"),e(235,"23.x.x"),t(),e(236,". Recomendamos utilizar a propriedade "),o(237,"code"),e(238,"p-helper"),t(),e(239," que oferece mais recursos e flexibilidade."),t()()()(),o(240,"tr",17)(241,"td",18)(242,"div",26)(243,"span",27),e(244," p-additional-help-tooltip"),a(245,"br"),t()(),o(246,"div",21),e(247,"Deprecated"),t()(),o(248,"td",22)(249,"code",28),e(250,"string"),t()(),o(251,"td",24),e(252,"-"),t(),o(253,"td",25)(254,"em")(255,"strong"),e(256,"(opcional)"),t()(),o(257,"p"),e(258,"Exibe um \xEDcone de ajuda adicional ao "),o(259,"code"),e(260,"p-help"),t(),e(261,`, com o texto desta propriedade no tooltip.
Se o evento `),o(262,"code"),e(263,"p-additional-help"),t(),e(264,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),o(265,"strong"),e(266,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),o(267,"blockquote")(268,"p"),e(269,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),o(270,"blockquote")(271,"p"),e(272,"Essa propriedade est\xE1 "),o(273,"strong"),e(274,"depreciada"),t(),e(275," e ser\xE1 removida na vers\xE3o "),o(276,"code"),e(277,"23.x.x"),t(),e(278,". Recomendamos utilizar a propriedade "),o(279,"code"),e(280,"p-helper"),t(),e(281," que oferece mais recursos e flexibilidade."),t()()()(),o(282,"tr",17)(283,"td",18)(284,"div",26)(285,"span",27),e(286," p-append-in-body"),a(287,"br"),t()()(),o(288,"td",22)(289,"code",29),e(290,"boolean"),t()(),o(291,"td",24)(292,"p")(293,"code"),e(294,"false"),t()()(),o(295,"td",25)(296,"em")(297,"strong"),e(298,"(opcional)"),t()(),o(299,"p"),e(300,"Define que o tooltip ("),o(301,"code"),e(302,"p-additional-help-tooltip"),t(),e(303,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o dentro do componente. Essa
op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o
posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),o(304,"blockquote")(305,"p"),e(306,"Quando utilizado com "),o(307,"code"),e(308,"p-additional-help-tooltip"),t(),e(309,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),o(310,"tr",17)(311,"td",18)(312,"div",26)(313,"span",27),e(314," p-auto-focus"),a(315,"br"),t()()(),o(316,"td",22)(317,"code",29),e(318,"boolean"),t()(),o(319,"td",24)(320,"p")(321,"code"),e(322,"false"),t()()(),o(323,"td",25)(324,"em")(325,"strong"),e(326,"(opcional)"),t()(),o(327,"p"),e(328,"Aplica foco no elemento ao ser iniciado."),t(),o(329,"blockquote")(330,"p"),e(331,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),o(332,"tr",17)(333,"td",18)(334,"div",19)(335,"span",20),e(336," (p-blur)"),a(337,"br"),t()()(),o(338,"td",22)(339,"code",23),e(340,"EventEmitter"),t()(),o(341,"td",24),e(342,"-"),t(),o(343,"td",25)(344,"em")(345,"strong"),e(346,"(opcional)"),t()(),o(347,"p"),e(348,"Evento disparado ao sair do campo."),t()()(),o(349,"tr",17)(350,"td",18)(351,"div",19)(352,"span",20),e(353," (p-change)"),a(354,"br"),t()()(),o(355,"td",22)(356,"code",23),e(357,"EventEmitter"),t()(),o(358,"td",24),e(359,"-"),t(),o(360,"td",25)(361,"em")(362,"strong"),e(363,"(opcional)"),t()(),o(364,"p"),e(365,"Evento disparado quando o valor do "),o(366,"em"),e(367,"checkbox"),t(),e(368," for alterado."),t()()(),o(369,"tr",17)(370,"td",18)(371,"div",26)(372,"span",27),e(373," p-disabled"),a(374,"br"),t()()(),o(375,"td",22)(376,"code",29),e(377,"boolean"),t()(),o(378,"td",24)(379,"p")(380,"code"),e(381,"false"),t()()(),o(382,"td",25)(383,"em")(384,"strong"),e(385,"(opcional)"),t()(),o(386,"p"),e(387,"Define o estado do "),o(388,"em"),e(389,"checkbox"),t(),e(390," como desabilitado."),t()()(),o(391,"tr",17)(392,"td",18)(393,"div",26)(394,"span",27),e(395," p-help"),a(396,"br"),t()()(),o(397,"td",22)(398,"code",28),e(399,"string"),t()(),o(400,"td",24),e(401,"-"),t(),o(402,"td",25)(403,"em")(404,"strong"),e(405,"(opcional)"),t()(),o(406,"p"),e(407,"Texto de apoio do campo"),t()()(),o(408,"tr",17)(409,"td",18)(410,"div",19)(411,"span",20),e(412," (p-keydown)"),a(413,"br"),t()()(),o(414,"td",22)(415,"code",23),e(416,"EventEmitter"),t()(),o(417,"td",24),e(418,"-"),t(),o(419,"td",25)(420,"em")(421,"strong"),e(422,"(opcional)"),t()(),o(423,"p"),e(424,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),o(425,"code"),e(426,"KeyboardEvent"),t(),e(427," com informa\xE7\xF5es sobre a tecla."),t()()(),o(428,"tr",17)(429,"td",18)(430,"div",26)(431,"span",27),e(432," p-label"),a(433,"br"),t()()(),o(434,"td",22)(435,"code",28),e(436,"string"),t()(),o(437,"td",24),e(438,"-"),t(),o(439,"td",25)(440,"em")(441,"strong"),e(442,"(opcional)"),t()(),o(443,"p"),e(444,"Texto de exibi\xE7\xE3o do "),o(445,"em"),e(446,"checkbox"),t(),e(447,"."),t()()(),o(448,"tr",17)(449,"td",18)(450,"div",26)(451,"span",27),e(452," p-label-text-wrap"),a(453,"br"),t()()(),o(454,"td",22)(455,"code",29),e(456,"boolean"),t()(),o(457,"td",24)(458,"p")(459,"code"),e(460,"false"),t()()(),o(461,"td",25)(462,"em")(463,"strong"),e(464,"(opcional)"),t()(),o(465,"p"),e(466,"Habilita a quebra autom\xE1tica do texto da propriedade "),o(467,"code"),e(468,"p-label"),t(),e(469,". Quando "),o(470,"code"),e(471,"p-label-text-wrap"),t(),e(472,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),o(473,"tr",17)(474,"td",18)(475,"div",26)(476,"span",27),e(477," name"),a(478,"br"),t()()(),o(479,"td",22)(480,"code",28),e(481,"string"),t()(),o(482,"td",24),e(483,"-"),t(),o(484,"td",25)(485,"p"),e(486,"Define o nome do "),o(487,"em"),e(488,"checkbox"),t(),e(489,"."),t()()(),o(490,"tr",17)(491,"td",18)(492,"div",26)(493,"span",27),e(494," p-helper"),a(495,"br"),t()()(),o(496,"td",22)(497,"code",30),e(498,"PoHelperOptions "),t(),o(499,"code",28),e(500," string"),t()(),o(501,"td",24),e(502,"-"),t(),o(503,"td",25)(504,"em")(505,"strong"),e(506,"(opcional)"),t()(),o(507,"p"),e(508,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label."),t(),o(509,"blockquote")(510,"p"),e(511,"Caso o "),o(512,"code"),e(513,"p-label"),t(),e(514,` n\xE3o esteja definido, o componente po-helper n\xE3o ser\xE1 exibido.
Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional (`),o(515,"code"),e(516,"p-additional-help-tooltip"),t(),e(517," e "),o(518,"code"),e(519,"p-additional-help"),t(),e(520,") ser\xE1 ignorado."),t()()()(),o(521,"tr",17)(522,"td",18)(523,"div",26)(524,"span",27),e(525," p-size"),a(526,"br"),t()()(),o(527,"td",22)(528,"code",28),e(529,"string"),t()(),o(530,"td",24)(531,"p")(532,"code"),e(533,"medium"),t()()(),o(534,"td",25)(535,"em")(536,"strong"),e(537,"(opcional)"),t()(),o(538,"p"),e(539,"Define o tamanho da caixa de sele\xE7\xE3o do componente:"),t(),o(540,"ul")(541,"li")(542,"code"),e(543,"small"),t(),e(544,": 16x16 (dispon\xEDvel apenas para acessibilidade AA)."),t(),o(545,"li")(546,"code"),e(547,"medium"),t(),e(548,": 24x24."),t(),o(549,"li")(550,"code"),e(551,"large"),t(),e(552,": 32x32."),t()(),o(553,"blockquote")(554,"p"),e(555,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),o(556,"code"),e(557,"medium"),t(),e(558,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),o(559,"a",31),e(560,"po-theme"),t(),e(561,"."),t()()()()(),o(562,"h3",13),e(563,"M\xE9todos"),t(),o(564,"table",32)(565,"tr",17)(566,"th",33)(567,"div",26)(568,"h4")(569,"span",27),e(570," focus "),t()()()()(),o(571,"tr",25)(572,"td",25)(573,"p"),e(574,"Fun\xE7\xE3o que atribui foco ao "),o(575,"em"),e(576,"checkbox"),t(),e(577,"."),t(),o(578,"p"),e(579,"Para utiliz\xE1-la \xE9 necess\xE1rio capturar a refer\xEAncia do componente no DOM atrav\xE9s do "),o(580,"code"),e(581,"ViewChild"),t(),e(582,", como por exemplo:"),t(),o(583,"pre")(584,"code"),e(585,`...
import { ViewChild } from '@angular/core';
import { PoCheckboxComponent } from '@po-ui/ng-components';

...

@ViewChild(PoCheckboxComponent, { static: true }) checkbox: PoCheckboxComponent;

focusCheckbox() {
  this.checkbox.focus();
}
`),t()()()()(),a(586,"br"),o(587,"table",32)(588,"tr",17)(589,"th",33)(590,"div",26)(591,"h4")(592,"span",27),e(593," showAdditionalHelp "),t()()()()(),o(594,"tr",25)(595,"td",25)(596,"p"),e(597,"M\xE9todo que exibe "),o(598,"code"),e(599,"p-additionalHelpTooltip"),t(),e(600," ou executa a a\xE7\xE3o definida em "),o(601,"code"),e(602,"p-additionalHelp"),t(),e(603,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),o(604,"code"),e(605,"p-keydown"),t(),e(606,"."),t(),o(607,"blockquote")(608,"p"),e(609,"Exibe ou oculta o conte\xFAdo do componente "),o(610,"code"),e(611,"po-helper"),t(),e(612," quando o componente estiver com foco e com label vis\xEDvel."),t()(),o(613,"pre")(614,"code"),e(615,`<po-checkbox
 #checkbox
 ...
 p-additional-help-tooltip="Mensagem de ajuda complementar"
 (p-keydown)="onKeyDown($event, checkbox)"
></po-checkbox>
`),t()(),o(616,"pre")(617,"code"),e(618,`//Exemplo com label e p-helper
<po-checkbox
 #checkbox
 ...
 p-label="Label do checkbox"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, checkbox)"
></po-checkbox>
`),t()(),o(619,"pre")(620,"code"),e(621,`...
onKeyDown(event: KeyboardEvent, inp: PoCheckboxComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),a(622,"br"),t())},dependencies:[k],encapsulation:2})}return i})();var ue=(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,l){this.route=d,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let l=d.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||i)(W(Z),W($))};static \u0275cmp=s({type:i,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Checkbox",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(o(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),h("p-click",function(){return n.changeTab("doc")}),a(3,"sample-po-checkbox-doc"),t(),o(4,"po-tab",3),h("p-click",function(){return n.changeTab("web")}),a(5,"sample-po-checkbox-basic-view")(6,"sample-po-checkbox-labs-view")(7,"sample-po-checkbox-acceptance-term-view"),t()()()),l&2&&(c("p-actions",n.actions),r(2),c("p-active",n.activeTab==="doc"),r(2),c("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[ie,f,v,pe,re,ce,se],encapsulation:2})}return i})();var Pe=[{path:"",component:ue}],be=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275mod=I({type:i});static \u0275inj=M({imports:[F.forChild(Pe),F]})}return i})();var Je=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275mod=I({type:i});static \u0275inj=M({imports:[ae,be]})}return i})();export{Je as DocPoCheckboxModule};
