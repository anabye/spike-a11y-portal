import{o as k,p as ae}from"./chunk-TFKSP2Z2.js";import{Ab as v,Fa as oe,Q as ee,U as W,Xa as ne,a as L,nb as ie,ra as te,v as N,z as A,zb as f}from"./chunk-3S4WNRBY.js";import{$a as z,$c as F,Aa as c,Da as T,Fb as y,Gc as D,Hc as Q,Ic as X,Jc as R,Kc as J,La as o,Ma as t,N as M,Na as a,Ra as O,Sa as b,Tb as K,U as u,V as h,Xc as Z,Zc as $,_a as q,ab as U,bb as G,cb as e,eb as w,gb as x,hb as S,ib as C,ja as m,ka as H,ob as P,qa as s,ra as I,ub as j,vb as Y}from"./chunk-CBLD3XJL.js";var le=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275cmp=s({type:i,selectors:[["sample-po-checkbox-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","checkbox","p-label","PO Checkbox"]],template:function(l,n){l&1&&a(0,"po-checkbox",0)},dependencies:[A],encapsulation:2})}return i})();var Ee=i=>({"docs-sample-code-tabs":i}),pe=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=s({type:i,selectors:[["sample-po-checkbox-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Checkbox Basic"),t(),o(4,"a",2),b("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-checkbox-basic/sample-po-checkbox-basic.component.html"),t(),o(13,"pre",7),e(14,`<po-checkbox name="checkbox" p-label="PO Checkbox"> </po-checkbox>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-checkbox-basic/sample-po-checkbox-basic.component.ts"),t(),o(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-checkbox-basic',
  templateUrl: './sample-po-checkbox-basic.component.html',
  standalone: false
})
export class SamplePoCheckboxBasicComponent {}
`),t()()()()(),o(21,"div",10),a(22,"sample-po-checkbox-basic"),t(),a(23,"hr")),l&2&&(m(5),T("po-icon "+n.sampleCodeButtonIcon),m(),w(" ",n.sampleCodeButtonLabel,""),m(),c("ngClass",P(4,Ee,n.hideSampleCodeTabs)))},dependencies:[y,k,f,v,le],encapsulation:2})}return i})();var re=(()=>{class i{helperText;checkbox;disabled;help;size;event;label;labelTextWrap;sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"large",value:"large"}];ngOnInit(){this.restore()}changeEvent(r){this.event=r}restore(){this.helperText="",this.checkbox=void 0,this.disabled=!1,this.event=void 0,this.help="",this.label=void 0,this.size="medium"}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=s({type:i,selectors:[["sample-po-checkbox-labs"]],standalone:!1,decls:18,vars:18,consts:[["f","ngForm"],["name","checkbox",3,"ngModelChange","p-change","p-keydown","ngModel","p-helper","p-disabled","p-help","p-label","p-size","p-label-text-wrap"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disabled","p-label","Disabled",1,"po-sm-3",3,"ngModelChange","ngModel"],["name","labelTextWrap","p-label","Label Text Wrap",1,"po-sm-3",3,"ngModelChange","ngModel"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,n){if(l&1){let d=O();o(0,"po-checkbox",1),C("ngModelChange",function(p){return u(d),S(n.checkbox,p)||(n.checkbox=p),h(p)}),b("p-change",function(){return u(d),h(n.changeEvent("p-change"))})("p-keydown",function(){return u(d),h(n.changeEvent("p-keydown"))}),t(),a(1,"po-divider"),o(2,"div",2),a(3,"po-info",3),j(4,"json"),a(5,"po-info",4),t(),a(6,"po-divider"),o(7,"form",null,0)(9,"div",2)(10,"po-input",5),C("ngModelChange",function(p){return u(d),S(n.label,p)||(n.label=p),h(p)}),t(),o(11,"po-input",6),C("ngModelChange",function(p){return u(d),S(n.help,p)||(n.help=p),h(p)}),t(),o(12,"po-input",7),C("ngModelChange",function(p){return u(d),S(n.helperText,p)||(n.helperText=p),h(p)}),t(),o(13,"po-switch",8),C("ngModelChange",function(p){return u(d),S(n.disabled,p)||(n.disabled=p),h(p)}),t(),o(14,"po-switch",9),C("ngModelChange",function(p){return u(d),S(n.labelTextWrap,p)||(n.labelTextWrap=p),h(p)}),t(),o(15,"po-radio-group",10),C("ngModelChange",function(p){return u(d),S(n.size,p)||(n.size=p),h(p)}),t()(),o(16,"div",2)(17,"po-button",11),b("p-click",function(){return u(d),h(n.restore())}),t()()()}l&2&&(x("ngModel",n.checkbox),c("p-helper",n.helperText)("p-disabled",n.disabled)("p-help",n.help)("p-label",n.label)("p-size",n.size)("p-label-text-wrap",n.labelTextWrap),m(3),c("p-value",Y(4,16,n.checkbox)),m(2),c("p-value",n.event),m(5),x("ngModel",n.label),m(),x("ngModel",n.help),m(),x("ngModel",n.helperText),m(),x("ngModel",n.disabled),m(),x("ngModel",n.labelTextWrap),m(),x("ngModel",n.size),c("p-options",n.sizeOptions))},dependencies:[J,D,Q,R,X,N,L,ee,oe,A,te,ne,K],encapsulation:2})}return i})();var ge=i=>({"docs-sample-code-tabs":i}),me=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=s({type:i,selectors:[["sample-po-checkbox-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Checkbox Labs"),t(),o(4,"a",2),b("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-checkbox-labs/sample-po-checkbox-labs.component.html"),t(),o(13,"pre",7),e(14,`<po-checkbox
  name="checkbox"
  [(ngModel)]="checkbox"
  [p-helper]="helperText"
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

    <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

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
  helperText: string;
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
    this.helperText = '';
    this.checkbox = undefined;
    this.disabled = false;
    this.event = undefined;
    this.help = '';
    this.label = undefined;
    this.size = 'medium';
  }
}
`),t()()()()(),o(21,"div",10),a(22,"sample-po-checkbox-labs"),t(),a(23,"hr")),l&2&&(m(5),T("po-icon "+n.sampleCodeButtonIcon),m(),w(" ",n.sampleCodeButtonLabel,""),m(),c("ngClass",P(4,ge,n.hideSampleCodeTabs)))},dependencies:[y,k,f,v,re],encapsulation:2})}return i})();var de=(()=>{class i{modalTerm;acceptance=!1;primaryAction={action:()=>{this.modalTerm.close()},disabled:!0,label:"Confirm"};static \u0275fac=function(l){return new(l||i)};static \u0275cmp=s({type:i,selectors:[["sample-po-checkbox-acceptance-term"]],viewQuery:function(l,n){if(l&1&&q(W,7),l&2){let d;z(d=U())&&(n.modalTerm=d.first)}},standalone:!1,decls:23,vars:2,consts:[["modalTerm",""],["p-label","View term",3,"p-click"],["p-title","Acceptance Term",3,"p-primary-action"],[1,"po-row"],[1,"po-sm-12"],[1,"po-font-text-large-bold"],[1,"po-row","po-p-1"],["name","acceptance","p-label","I have read and agree to the terms of service and privacy",3,"ngModelChange","p-change","ngModel"]],template:function(l,n){if(l&1){let d=O();o(0,"po-button",1),b("p-click",function(){u(d);let p=G(2);return h(p.open())}),t(),o(1,"po-modal",2,0)(3,"div",3)(4,"div",4)(5,"h3",5),e(6,"MIT License"),t()(),o(7,"div",4)(8,"h4"),e(9,"Copyright (c) 2019 PO UI"),t()(),a(10,"po-divider",4),o(11,"div",4)(12,"p"),e(13,' Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: '),t(),a(14,"br"),o(15,"p"),e(16," The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. "),t(),a(17,"br"),o(18,"p"),e(19,' THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. '),t()()(),a(20,"po-divider"),o(21,"div",6)(22,"po-checkbox",7),C("ngModelChange",function(p){return u(d),S(n.acceptance,p)||(n.acceptance=p),h(p)}),b("p-change",function(){return u(d),h(n.primaryAction.disabled=!n.acceptance)}),t()()()}l&2&&(m(),c("p-primary-action",n.primaryAction),m(21),x("ngModel",n.acceptance))},dependencies:[D,R,N,L,A,W],encapsulation:2})}return i})();var ke=i=>({"docs-sample-code-tabs":i}),ce=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=s({type:i,selectors:[["sample-po-checkbox-acceptance-term-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Checkbox - Acceptance Term"),t(),o(4,"a",2),b("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-checkbox-acceptance-term/sample-po-checkbox-acceptance-term.component.html"),t(),o(13,"pre",7),e(14,`<po-button p-label="View term" (p-click)="modalTerm.open()"> </po-button>

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
`),t()()()()(),o(21,"div",10),a(22,"sample-po-checkbox-acceptance-term"),t(),a(23,"hr")),l&2&&(m(5),T("po-icon "+n.sampleCodeButtonIcon),m(),w(" ",n.sampleCodeButtonLabel,""),m(),c("ngClass",P(4,ke,n.hideSampleCodeTabs)))},dependencies:[y,k,f,v,de],encapsulation:2})}return i})();var se=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275cmp=s({type:i,selectors:[["sample-po-checkbox-doc"]],standalone:!1,decls:626,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://www.w3.org/WAI/WCAG21/Understanding/use-of-color"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(l,n){l&1&&(o(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),o(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
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
`),t()(),o(194,"h4",13),e(195,"Propriedades"),t(),o(196,"table",14)(197,"tr",15)(198,"th",16),e(199,"Nome"),t(),o(200,"th",16),e(201,"Tipo"),t(),o(202,"th",16),e(203,"Padr\xE3o"),t(),o(204,"th",16),e(205,"Descri\xE7\xE3o"),t()(),o(206,"tr",17)(207,"td",18)(208,"div",19)(209,"span",20),e(210," (p-additional-help)"),a(211,"br"),t()(),o(212,"div",21),e(213,"Deprecated"),t()(),o(214,"td",22)(215,"code",23),e(216,"EventEmitter"),t()(),o(217,"td",24),e(218,"-"),t(),o(219,"td",25)(220,"em")(221,"strong"),e(222,"(opcional)"),t()(),o(223,"p"),e(224,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),t(),o(225,"blockquote")(226,"p"),e(227,"Essa propriedade est\xE1 "),o(228,"strong"),e(229,"depreciada"),t(),e(230," e ser\xE1 removida na vers\xE3o "),o(231,"code"),e(232,"23.x.x"),t(),e(233,". Recomendamos utilizar a propriedade "),o(234,"code"),e(235,"p-helper"),t(),e(236," que oferece mais recursos e flexibilidade."),t()()()(),o(237,"tr",17)(238,"td",18)(239,"div",26)(240,"span",27),e(241," p-additional-help-tooltip"),a(242,"br"),t()(),o(243,"div",21),e(244,"Deprecated"),t()(),o(245,"td",22)(246,"code",28),e(247,"string"),t()(),o(248,"td",24),e(249,"-"),t(),o(250,"td",25)(251,"em")(252,"strong"),e(253,"(opcional)"),t()(),o(254,"p"),e(255,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),o(256,"code"),e(257,"po-helper"),t(),e(258,`.
`),o(259,"strong"),e(260,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),o(261,"blockquote")(262,"p"),e(263,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),o(264,"blockquote")(265,"p"),e(266,"Essa propriedade est\xE1 "),o(267,"strong"),e(268,"depreciada"),t(),e(269," e ser\xE1 removida na vers\xE3o "),o(270,"code"),e(271,"23.x.x"),t(),e(272,". Recomendamos utilizar a propriedade "),o(273,"code"),e(274,"p-helper"),t(),e(275," que oferece mais recursos e flexibilidade."),t()()()(),o(276,"tr",17)(277,"td",18)(278,"div",26)(279,"span",27),e(280," p-append-in-body"),a(281,"br"),t()()(),o(282,"td",22)(283,"code",29),e(284,"boolean"),t()(),o(285,"td",24)(286,"p")(287,"code"),e(288,"false"),t()()(),o(289,"td",25)(290,"em")(291,"strong"),e(292,"(opcional)"),t()(),o(293,"p"),e(294,"Define que o popover ("),o(295,"code"),e(296,"p-helper"),t(),e(297,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o dentro do componente. Essa
op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o
posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),o(298,"blockquote")(299,"p"),e(300,"Quando utilizado com "),o(301,"code"),e(302,"p-helper"),t(),e(303,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),t()()()(),o(304,"tr",17)(305,"td",18)(306,"div",26)(307,"span",27),e(308," p-auto-focus"),a(309,"br"),t()()(),o(310,"td",22)(311,"code",29),e(312,"boolean"),t()(),o(313,"td",24)(314,"p")(315,"code"),e(316,"false"),t()()(),o(317,"td",25)(318,"em")(319,"strong"),e(320,"(opcional)"),t()(),o(321,"p"),e(322,"Aplica foco no elemento ao ser iniciado."),t(),o(323,"blockquote")(324,"p"),e(325,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),o(326,"tr",17)(327,"td",18)(328,"div",19)(329,"span",20),e(330," (p-blur)"),a(331,"br"),t()()(),o(332,"td",22)(333,"code",23),e(334,"EventEmitter"),t()(),o(335,"td",24),e(336,"-"),t(),o(337,"td",25)(338,"em")(339,"strong"),e(340,"(opcional)"),t()(),o(341,"p"),e(342,"Evento disparado ao sair do campo."),t()()(),o(343,"tr",17)(344,"td",18)(345,"div",19)(346,"span",20),e(347," (p-change)"),a(348,"br"),t()()(),o(349,"td",22)(350,"code",23),e(351,"EventEmitter"),t()(),o(352,"td",24),e(353,"-"),t(),o(354,"td",25)(355,"em")(356,"strong"),e(357,"(opcional)"),t()(),o(358,"p"),e(359,"Evento disparado quando o valor do "),o(360,"em"),e(361,"checkbox"),t(),e(362," for alterado."),t()()(),o(363,"tr",17)(364,"td",18)(365,"div",26)(366,"span",27),e(367," p-disabled"),a(368,"br"),t()()(),o(369,"td",22)(370,"code",29),e(371,"boolean"),t()(),o(372,"td",24)(373,"p")(374,"code"),e(375,"false"),t()()(),o(376,"td",25)(377,"em")(378,"strong"),e(379,"(opcional)"),t()(),o(380,"p"),e(381,"Define o estado do "),o(382,"em"),e(383,"checkbox"),t(),e(384," como desabilitado."),t()()(),o(385,"tr",17)(386,"td",18)(387,"div",26)(388,"span",27),e(389," p-help"),a(390,"br"),t()()(),o(391,"td",22)(392,"code",28),e(393,"string"),t()(),o(394,"td",24),e(395,"-"),t(),o(396,"td",25)(397,"em")(398,"strong"),e(399,"(opcional)"),t()(),o(400,"p"),e(401,"Texto de apoio do campo"),t()()(),o(402,"tr",17)(403,"td",18)(404,"div",19)(405,"span",20),e(406," (p-keydown)"),a(407,"br"),t()()(),o(408,"td",22)(409,"code",23),e(410,"EventEmitter"),t()(),o(411,"td",24),e(412,"-"),t(),o(413,"td",25)(414,"em")(415,"strong"),e(416,"(opcional)"),t()(),o(417,"p"),e(418,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),o(419,"code"),e(420,"KeyboardEvent"),t(),e(421," com informa\xE7\xF5es sobre a tecla."),t()()(),o(422,"tr",17)(423,"td",18)(424,"div",26)(425,"span",27),e(426," p-label"),a(427,"br"),t()()(),o(428,"td",22)(429,"code",28),e(430,"string"),t()(),o(431,"td",24),e(432,"-"),t(),o(433,"td",25)(434,"em")(435,"strong"),e(436,"(opcional)"),t()(),o(437,"p"),e(438,"Texto de exibi\xE7\xE3o do "),o(439,"em"),e(440,"checkbox"),t(),e(441,"."),t()()(),o(442,"tr",17)(443,"td",18)(444,"div",26)(445,"span",27),e(446," p-label-text-wrap"),a(447,"br"),t()()(),o(448,"td",22)(449,"code",29),e(450,"boolean"),t()(),o(451,"td",24)(452,"p")(453,"code"),e(454,"false"),t()()(),o(455,"td",25)(456,"em")(457,"strong"),e(458,"(opcional)"),t()(),o(459,"p"),e(460,"Habilita a quebra autom\xE1tica do texto da propriedade "),o(461,"code"),e(462,"p-label"),t(),e(463,". Quando "),o(464,"code"),e(465,"p-label-text-wrap"),t(),e(466,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),o(467,"tr",17)(468,"td",18)(469,"div",26)(470,"span",27),e(471," name"),a(472,"br"),t()()(),o(473,"td",22)(474,"code",28),e(475,"string"),t()(),o(476,"td",24),e(477,"-"),t(),o(478,"td",25)(479,"p"),e(480,"Define o nome do "),o(481,"em"),e(482,"checkbox"),t(),e(483,"."),t()()(),o(484,"tr",17)(485,"td",18)(486,"div",26)(487,"span",27),e(488," p-helper"),a(489,"br"),t()()(),o(490,"td",22)(491,"code",30),e(492,"PoHelperOptions "),t(),o(493,"code",28),e(494," string"),t()(),o(495,"td",24),e(496,"-"),t(),o(497,"td",25)(498,"em")(499,"strong"),e(500,"(opcional)"),t()(),o(501,"p"),e(502,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),o(503,"code"),e(504,"p-label"),t(),e(505," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),o(506,"code"),e(507,"p-label"),t(),e(508,"."),t(),o(509,"blockquote")(510,"p"),e(511,"Para mais informa\xE7\xF5es acesse: "),o(512,"a",31),e(513,"https://po-ui.io/documentation/po-helper"),t(),e(514,"."),t()(),o(515,"blockquote")(516,"p"),e(517,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),o(518,"code"),e(519,"p-additional-help-tooltip"),t(),e(520," e "),o(521,"code"),e(522,"p-additional-help"),t(),e(523,") ser\xE1 ignorado."),t()()()(),o(524,"tr",17)(525,"td",18)(526,"div",26)(527,"span",27),e(528," p-size"),a(529,"br"),t()()(),o(530,"td",22)(531,"code",28),e(532,"string"),t()(),o(533,"td",24)(534,"p")(535,"code"),e(536,"medium"),t()()(),o(537,"td",25)(538,"em")(539,"strong"),e(540,"(opcional)"),t()(),o(541,"p"),e(542,"Define o tamanho da caixa de sele\xE7\xE3o do componente:"),t(),o(543,"ul")(544,"li")(545,"code"),e(546,"small"),t(),e(547,": 16x16 (dispon\xEDvel apenas para acessibilidade AA)."),t(),o(548,"li")(549,"code"),e(550,"medium"),t(),e(551,": 24x24."),t(),o(552,"li")(553,"code"),e(554,"large"),t(),e(555,": 32x32."),t()(),o(556,"blockquote")(557,"p"),e(558,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),o(559,"code"),e(560,"medium"),t(),e(561,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),o(562,"a",32),e(563,"po-theme"),t(),e(564,"."),t()()()()(),o(565,"h3",13),e(566,"M\xE9todos"),t(),o(567,"table",33)(568,"tr",17)(569,"th",34)(570,"div",26)(571,"h4")(572,"span",27),e(573," focus "),t()()()()(),o(574,"tr",25)(575,"td",25)(576,"p"),e(577,"Fun\xE7\xE3o que atribui foco ao "),o(578,"em"),e(579,"checkbox"),t(),e(580,"."),t(),o(581,"p"),e(582,"Para utiliz\xE1-la \xE9 necess\xE1rio capturar a refer\xEAncia do componente no DOM atrav\xE9s do "),o(583,"code"),e(584,"ViewChild"),t(),e(585,", como por exemplo:"),t(),o(586,"pre")(587,"code"),e(588,`...
import { ViewChild } from '@angular/core';
import { PoCheckboxComponent } from '@po-ui/ng-components';

...

@ViewChild(PoCheckboxComponent, { static: true }) checkbox: PoCheckboxComponent;

focusCheckbox() {
  this.checkbox.focus();
}
`),t()()()()(),a(589,"br"),o(590,"table",33)(591,"tr",17)(592,"th",34)(593,"div",26)(594,"h4")(595,"span",27),e(596," showAdditionalHelp "),t()()()()(),o(597,"tr",25)(598,"td",25)(599,"p"),e(600,"M\xE9todo que exibe "),o(601,"code"),e(602,"p-helper"),t(),e(603," ou executa a a\xE7\xE3o definida em "),o(604,"code"),e(605,"p-helper{eventOnClick}"),t(),e(606," ou em "),o(607,"code"),e(608,"p-additionalHelp"),t(),e(609,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),o(610,"code"),e(611,"p-keydown"),t(),e(612,"."),t(),o(613,"blockquote")(614,"p"),e(615,"Exibe ou oculta o conte\xFAdo do componente "),o(616,"code"),e(617,"po-helper"),t(),e(618," quando o componente estiver com foco."),t()(),o(619,"pre")(620,"code"),e(621,`//Exemplo com label e p-helper
<po-checkbox
 #checkbox
 ...
 p-label="Label do checkbox"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, checkbox)"
></po-checkbox>
`),t()(),o(622,"pre")(623,"code"),e(624,`...
onKeyDown(event: KeyboardEvent, inp: PoCheckboxComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),a(625,"br"),t())},dependencies:[k],encapsulation:2})}return i})();var ue=(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||i)(H(Z),H($))};static \u0275cmp=s({type:i,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Checkbox",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(o(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),b("p-click",function(){return n.changeTab("doc")}),a(3,"sample-po-checkbox-doc"),t(),o(4,"po-tab",3),b("p-click",function(){return n.changeTab("web")}),a(5,"sample-po-checkbox-basic-view")(6,"sample-po-checkbox-labs-view")(7,"sample-po-checkbox-acceptance-term-view"),t()()()),l&2&&(c("p-actions",n.actions),m(2),c("p-active",n.activeTab==="doc"),m(2),c("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[ie,f,v,pe,me,ce,se],encapsulation:2})}return i})();var Pe=[{path:"",component:ue}],he=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275mod=I({type:i});static \u0275inj=M({imports:[F.forChild(Pe),F]})}return i})();var Je=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275mod=I({type:i});static \u0275inj=M({imports:[ae,he]})}return i})();export{Je as DocPoCheckboxModule};
