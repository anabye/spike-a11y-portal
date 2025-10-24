import{o as f,p as $}from"./chunk-EMF4WKMP.js";import{Ab as S,Fa as Y,H as Q,I as J,J as K,Q as X,a as G,nb as Z,v as U,y as T,zb as E}from"./chunk-U6Z3TSBQ.js";import{Aa as m,Cb as y,Da as b,Dc as j,Gc as W,Ha as I,La as o,Ma as t,N as w,Na as a,Ra as V,Sa as u,Ta as M,U as F,Uc as R,V as O,Wc as N,Yc as L,cb as e,eb as g,gb as v,hb as x,ib as C,ja as r,ka as k,kb as _,lb as P,mb as A,qa as s,ra as D,wa as q}from"./chunk-KZJHT32G.js";var ee=(()=>{class n{poHelper={title:"PO Helper Basic",content:"Este \xE9 um helper de exemplo. Voc\xEA pode colocar qualquer informa\xE7\xE3o que desejar aqui, como dicas de uso, explica\xE7\xF5es sobre funcionalidades, ou qualquer outro conte\xFAdo relevante para ajudar o usu\xE1rio."};static \u0275fac=function(l){return new(l||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-helper-basic"]],standalone:!1,decls:1,vars:1,consts:[[3,"p-helper"]],template:function(l,i){l&1&&a(0,"po-helper",0),l&2&&m("p-helper",i.poHelper)},dependencies:[T],encapsulation:2})}return n})();var ce=n=>({"docs-sample-code-tabs":n}),oe=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-helper-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Helper Basic"),t(),o(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-helper-basic/sample-po-helper-basic.component.html"),t(),o(13,"pre",7),e(14,`<po-helper [p-helper]="poHelper"></po-helper>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-helper-basic/sample-po-helper-basic.component.ts"),t(),o(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoHelperOptions } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-helper-basic',
  templateUrl: './sample-po-helper-basic.component.html',
  standalone: false
})
export class SamplePoHelperBasicComponent {
  poHelper: PoHelperOptions = {
    title: 'PO Helper Basic',
    content:
      'Este \xE9 um helper de exemplo. Voc\xEA pode colocar qualquer informa\xE7\xE3o que desejar aqui, como dicas de uso, explica\xE7\xF5es sobre funcionalidades, ou qualquer outro conte\xFAdo relevante para ajudar o usu\xE1rio.'
  };
}
`),t()()()()(),o(21,"div",10),a(22,"sample-po-helper-basic"),t(),a(23,"hr")),l&2&&(r(5),b("po-icon "+i.sampleCodeButtonIcon),r(),g(" ",i.sampleCodeButtonLabel,""),r(),m("ngClass",P(4,ce,i.hideSampleCodeTabs)))},dependencies:[y,f,E,S,ee],encapsulation:2})}return n})();var he=()=>({label:"Help",value:"help"}),Ee=()=>({label:"Info",value:"info"}),ne=(n,z)=>[n,z],Se=()=>({label:"Medium",value:"medium"}),fe=()=>({label:"Small",value:"small"});function be(n,z){if(n&1){let p=V();o(0,"po-input",8),C("ngModelChange",function(i){F(p);let c=M();return x(c.footerTitle,i)||(c.footerTitle=i),O(i)}),u("ngModelChange",function(i){F(p);let c=M();return O(c.setFooterTitle(i))}),t()}if(n&2){let p=M();v("ngModel",p.footerTitle)}}var ie=(()=>{class n{helperSize;helperOptions={title:"",content:"",type:"help"};footerTitle="";footerAction(){alert("Footer action clicked")}setFooterTitle(p){p.length===0?(this.footerTitle="",delete this.helperOptions.footerAction):this.helperOptions.footerAction={label:this.footerTitle,action:this.footerAction.bind(this)}}reset(){this.helperOptions={title:"",content:"",type:"help"},this.helperSize="medium",this.footerTitle=""}static \u0275fac=function(l){return new(l||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-helper-labs"]],standalone:!1,decls:14,vars:19,consts:[[3,"p-helper","p-size"],[1,"po-row"],["name","title","p-clean","","p-label","T\xEDtulo do Helper",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","type","p-clean","","p-label","Conte\xFAdo do Helper",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","footerTitle","p-clean","","p-label","T\xEDtulo do Footer",1,"po-lg-6","po-md-6",3,"ngModel"],["name","type","p-columns","4","p-label","Type",1,"po-md-12","po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Reset",1,"po-md-12","po-md-12",3,"p-click"],["name","footerTitle","p-clean","","p-label","T\xEDtulo do Footer",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"]],template:function(l,i){l&1&&(a(0,"po-helper",0),o(1,"div",1)(2,"po-input",2),C("ngModelChange",function(d){return x(i.helperOptions.title,d)||(i.helperOptions.title=d),d}),t(),o(3,"po-input",3),C("ngModelChange",function(d){return x(i.helperOptions.content,d)||(i.helperOptions.content=d),d}),t()(),o(4,"div",1),q(5,be,1,1,"po-input",4),t(),a(6,"po-divider"),o(7,"div",1)(8,"po-radio-group",5),C("ngModelChange",function(d){return x(i.helperOptions.type,d)||(i.helperOptions.type=d),d}),t()(),o(9,"div",1)(10,"po-radio-group",6),C("ngModelChange",function(d){return x(i.helperSize,d)||(i.helperSize=d),d}),t()(),a(11,"po-divider"),o(12,"div",1)(13,"po-button",7),u("p-click",function(){return i.reset()}),t()()),l&2&&(m("p-helper",i.helperOptions)("p-size",i.helperSize),r(2),v("ngModel",i.helperOptions.title),r(),v("ngModel",i.helperOptions.content),r(2),I(i.helperOptions.type==="help"?5:-1),r(3),v("ngModel",i.helperOptions.type),m("p-options",A(11,ne,_(9,he),_(10,Ee))),r(2),v("ngModel",i.helperSize),m("p-options",A(16,ne,_(14,Se),_(15,fe))))},dependencies:[j,W,U,G,X,Y,T],encapsulation:2})}return n})();var ve=n=>({"docs-sample-code-tabs":n}),le=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-helper-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Helper Labs"),t(),o(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-helper-labs/sample-po-helper-labs.component.html"),t(),o(13,"pre",7),e(14,`<po-helper [p-helper]="helperOptions" [p-size]="helperSize"></po-helper>

<div class="po-row">
  <po-input class="po-lg-6 po-md-6" name="title" [(ngModel)]="helperOptions.title" p-clean p-label="T\xEDtulo do Helper">
  </po-input>
  <po-input
    class="po-lg-6 po-md-6"
    name="type"
    [(ngModel)]="helperOptions.content"
    p-clean
    p-label="Conte\xFAdo do Helper"
  >
  </po-input>
</div>

<div class="po-row">
  @if (helperOptions.type === 'help') {
    <po-input
      class="po-lg-6 po-md-6"
      name="footerTitle"
      [(ngModel)]="footerTitle"
      (ngModelChange)="setFooterTitle($event)"
      p-clean
      p-label="T\xEDtulo do Footer"
    >
    </po-input>
  }
</div>
<po-divider></po-divider>
<div class="po-row">
  <po-radio-group
    name="type"
    class="po-md-12 po-lg-12"
    p-columns="4"
    p-label="Type"
    [(ngModel)]="helperOptions.type"
    [p-options]="[
      { label: 'Help', value: 'help' },
      { label: 'Info', value: 'info' }
    ]"
  >
  </po-radio-group>
</div>

<div class="po-row">
  <po-radio-group
    class="po-md-12 po-lg-12"
    name="size"
    [(ngModel)]="helperSize"
    p-columns="4"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="[
      { label: 'Medium', value: 'medium' },
      { label: 'Small', value: 'small' }
    ]"
  >
  </po-radio-group>
</div>
<po-divider></po-divider>
<div class="po-row">
  <po-button class="po-md-12 po-md-12" p-label="Reset" (p-click)="reset()"></po-button>
</div>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-helper-labs/sample-po-helper-labs.component.ts"),t(),o(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoHelperOptions } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-helper-labs',
  templateUrl: './sample-po-helper-labs.component.html',
  standalone: false
})
export class SamplePoHelperLabsComponent {
  helperSize: 'medium';

  helperOptions: PoHelperOptions = {
    title: '',
    content: '',
    type: 'help'
  };

  footerTitle: string = '';

  footerAction() {
    alert(\`Footer action clicked\`);
  }

  setFooterTitle(title: string) {
    if (title.length === 0) {
      this.footerTitle = '';
      delete this.helperOptions.footerAction;
    } else {
      this.helperOptions.footerAction = {
        label: this.footerTitle,
        action: this.footerAction.bind(this)
      };
    }
  }

  reset() {
    this.helperOptions = {
      title: '',
      content: '',
      type: 'help'
    };
    this.helperSize = 'medium';
    this.footerTitle = '';
  }
}
`),t()()()()(),o(21,"div",10),a(22,"sample-po-helper-labs"),t(),a(23,"hr")),l&2&&(r(5),b("po-icon "+i.sampleCodeButtonIcon),r(),g(" ",i.sampleCodeButtonLabel,""),r(),m("ngClass",P(4,ve,i.hideSampleCodeTabs)))},dependencies:[y,f,E,S,ie],encapsulation:2})}return n})();var ae=(()=>{class n{helperOptions={title:"Sales Performance Overview",content:"This section provides insights into employee turnover rate and sales performance. Hover over the chart for more details.",type:"info"};type=Q.Gauge;optionsSingle={descriptionChart:"25% of turnover"};optionsRange={descriptionChart:"The sales increased in 82% in the first bimester of 2020",showFromToLegend:!0};turnover=[{data:25,label:"Low rate"}];salesRanges=[{from:0,to:50,label:"Sales reduction"},{from:50,to:75,label:"Average sales"},{from:75,to:100,label:"Sales soared"}];static \u0275fac=function(l){return new(l||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-helper-sales-performance"]],standalone:!1,decls:8,vars:4,consts:[[1,"po-row"],[1,"po-font-title","po-mb-3"],[3,"p-helper"],[1,"po-lg-12"],["p-title","Employee turnover rate","p-value","25",3,"p-type","p-options","p-series"]],template:function(l,i){l&1&&(o(0,"po-container")(1,"div",0)(2,"div",1),e(3,"Sales Performance"),t(),a(4,"po-helper",2),t(),o(5,"div",0)(6,"div",3),a(7,"po-chart",4),t()()()),l&2&&(r(4),m("p-helper",i.helperOptions),r(3),m("p-type",i.type)("p-options",i.optionsSingle)("p-series",i.turnover))},dependencies:[J,K,T],encapsulation:2})}return n})();var Pe=n=>({"docs-sample-code-tabs":n}),pe=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-helper-sales-performance-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Helper Sales Performance"),t(),o(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-helper-sales-performance/sample-po-helper-sales-performance.component.html"),t(),o(13,"pre",7),e(14,`<po-container>
  <div class="po-row">
    <div class="po-font-title po-mb-3">Sales Performance</div>
    <po-helper [p-helper]="helperOptions"></po-helper>
  </div>
  <div class="po-row">
    <div class="po-lg-12">
      <po-chart
        p-title="Employee turnover rate"
        p-value="25"
        [p-type]="type"
        [p-options]="optionsSingle"
        [p-series]="turnover"
      ></po-chart>
    </div>
  </div>
</po-container>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-helper-sales-performance/sample-po-helper-sales-performance.component.ts"),t(),o(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoHelperOptions, PoChartType, PoChartOptions, PoChartSerie } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-helper-sales-performance',
  templateUrl: './sample-po-helper-sales-performance.component.html',
  standalone: false
})
export class SamplePoHelperSalesPerformanceComponent {
  helperOptions: PoHelperOptions = {
    title: 'Sales Performance Overview',
    content:
      'This section provides insights into employee turnover rate and sales performance. Hover over the chart for more details.',
    type: 'info'
  };

  type = PoChartType.Gauge;
  optionsSingle: PoChartOptions = {
    descriptionChart: '25% of turnover'
  };

  optionsRange: PoChartOptions = {
    descriptionChart: 'The sales increased in 82% in the first bimester of 2020',
    showFromToLegend: true
  };

  turnover: Array<PoChartSerie> = [{ data: 25, label: 'Low rate' }];

  salesRanges: Array<PoChartSerie> = [
    { from: 0, to: 50, label: 'Sales reduction' },
    { from: 50, to: 75, label: 'Average sales' },
    { from: 75, to: 100, label: 'Sales soared' }
  ];
}
`),t()()()()(),o(21,"div",10),a(22,"sample-po-helper-sales-performance"),t(),a(23,"hr")),l&2&&(r(5),b("po-icon "+i.sampleCodeButtonIcon),r(),g(" ",i.sampleCodeButtonLabel,""),r(),m("ngClass",P(4,Pe,i.hideSampleCodeTabs)))},dependencies:[y,f,E,S,ae],encapsulation:2})}return n})();var re=(()=>{class n{static \u0275fac=function(l){return new(l||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-helper-doc"]],standalone:!1,decls:421,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"language-html"],[1,"language-typescript"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","{","label:","string;","action:","Function;","}"],["pan","",1,"docs-api-property-type","'info'"],["pan","",1,"docs-api-property-type","'help'"]],template:function(l,i){l&1&&(o(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoHelperModule } from '@po-ui/ng-components';"),t()(),o(4,"div",2)(5,"p"),e(6,"M\xF3dulo do componente po-helper"),t()(),o(7,"h3",3),e(8,"Componente"),t(),o(9,"h4",4)(10,"code",5),e(11,"PoHelperComponent"),t()(),o(12,"div",2)(13,"p"),e(14,"O componente "),o(15,"code"),e(16,"po-helper"),t(),e(17," exibe um \xEDcone de ajuda ou informa\xE7\xE3o ao lado de campos, bot\xF5es ou outros elementos, permitindo ao usu\xE1rio acessar conte\xFAdos explicativos em um popover."),t(),o(18,"p"),e(19,"Principais funcionalidades:"),t(),o(20,"ul")(21,"li"),e(22,"Exibe \xEDcone de ajuda ("),o(23,"code"),e(24,"help"),t(),e(25,") ou informa\xE7\xE3o ("),o(26,"code"),e(27,"info"),t(),e(28,") conforme configura\xE7\xE3o."),t(),o(29,"li"),e(30,"Permite definir t\xEDtulo, conte\xFAdo e a\xE7\xF5es no popover via propriedade "),o(31,"code"),e(32,"p-helper"),t(),e(33,"."),t(),o(34,"li"),e(35,"Suporte a acessibilidade: navega\xE7\xE3o por teclado, atributos ARIA e leitura do conte\xFAdo por leitores de tela."),t(),o(36,"li"),e(37,"Controle do tamanho do componente via propriedade "),o(38,"code"),e(39,"p-size"),t(),e(40," ("),o(41,"code"),e(42,"small"),t(),e(43," ou "),o(44,"code"),e(45,"medium"),t(),e(46,")."),t(),o(47,"li"),e(48,"Permite customizar a\xE7\xF5es no rodap\xE9 do popover."),t()(),o(49,"p"),e(50,"Exemplo de uso:"),t(),o(51,"pre")(52,"code",6),e(53,`<po-helper
  [p-helper]="{ title: 'Ajuda', content: 'Texto explicativo', type: 'help' }"
  [p-size]="'medium'"
></po-helper>
`),t()(),o(54,"p"),e(55,"Tamb\xE9m \xE9 poss\xEDvel passar apenas uma string para o conte\xFAdo:"),t(),o(56,"pre")(57,"code",6),e(58,`<po-helper p-helper="Texto explicativo"></po-helper>
`),t()(),o(59,"p"),e(60,"A propriedade "),o(61,"code"),e(62,"p-helper"),t(),e(63," aceita um objeto do tipo "),o(64,"code"),e(65,"PoHelperOptions"),t(),e(66,":"),t(),o(67,"pre")(68,"code",7),e(69,`interface PoHelperOptions {
  title?: string;
  content: string;
  type?: 'help' | 'info';
  eventOnClick?: Function;
  footerAction?: { label: string; action: Function };
}
`),t()(),o(70,"blockquote")(71,"p")(72,"strong"),e(73,"Importante:"),t(),e(74," A propriedade "),o(75,"code"),e(76,"footerAction"),t(),e(77," n\xE3o pode ser utilizada quando o tipo do helper for "),o(78,"code"),e(79,"info"),t(),e(80,", pois o \xEDcone de informa\xE7\xE3o \xE9 destinado apenas para exibir informa\xE7\xF5es est\xE1ticas sem a\xE7\xF5es adicionais."),t()(),o(81,"h4"),e(82,"Tokens customiz\xE1veis"),t(),o(83,"p"),e(84,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),o(85,"blockquote")(86,"p"),e(87,"Para maiores informa\xE7\xF5es, acesse o guia "),o(88,"a",8),e(89,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(90,"."),t()(),o(91,"table")(92,"thead")(93,"tr")(94,"th"),e(95,"Propriedade"),t(),o(96,"th"),e(97,"Descri\xE7\xE3o"),t(),o(98,"th"),e(99,"Valor Padr\xE3o"),t()()(),o(100,"tbody")(101,"tr")(102,"td")(103,"code"),e(104,"--color"),t()(),o(105,"td"),e(106,"Cor principal do \xEDcone"),t(),o(107,"td")(108,"code"),e(109,"var(--color-action-default)"),t()()(),o(110,"tr")(111,"td")(112,"code"),e(113,"--border-color-hover"),t()(),o(114,"td"),e(115,"Cor da borda no estado hover"),t(),o(116,"td")(117,"code"),e(118,"var(--color-brand-01-darkest)"),t()()(),o(119,"tr")(120,"td")(121,"code"),e(122,"--background-pressed"),t()(),o(123,"td"),e(124,"Cor de background no estado de pressionado\xA0"),t(),o(125,"td")(126,"code"),e(127,"var(--color-brand-01-light)"),t()()(),o(128,"tr")(129,"td")(130,"code"),e(131,"--color-disabled"),t()(),o(132,"td"),e(133,"Cor principal no estado disabled"),t(),o(134,"td")(135,"code"),e(136,"var(--color-action-disabled)"),t()()()()()(),o(137,"div",9)(138,"h4",10),e(139,"Seletor"),t(),o(140,"pre",11),e(141,`<po-helper
    p-disabled="boolean"
    p-helper="PoHelperOptions | string"
    p-size="string" >
</po-helper>
`),t()(),o(142,"h4",12),e(143,"Propriedades"),t(),o(144,"table",13)(145,"tr",14)(146,"th",15),e(147,"Nome"),t(),o(148,"th",15),e(149,"Tipo"),t(),o(150,"th",15),e(151,"Padr\xE3o"),t(),o(152,"th",15),e(153,"Descri\xE7\xE3o"),t()(),o(154,"tr",16)(155,"td",17)(156,"div",18)(157,"span",19),e(158," p-disabled"),a(159,"br"),t()()(),o(160,"td",20)(161,"code",21),e(162,"boolean"),t()(),o(163,"td",22)(164,"p")(165,"code"),e(166,"false"),t()()(),o(167,"td",23)(168,"em")(169,"strong"),e(170,"(opcional)"),t()(),o(171,"p"),e(172,"Indica se o helper deve ser exibido no estado desativado, desabilitando intera\xE7\xF5es do usu\xE1rio."),t()()(),o(173,"tr",16)(174,"td",17)(175,"div",18)(176,"span",19),e(177," p-helper"),a(178,"br"),t()()(),o(179,"td",20)(180,"code",24),e(181,"PoHelperOptions "),t(),o(182,"code",25),e(183," string"),t()(),o(184,"td",22),e(185,"-"),t(),o(186,"td",23)(187,"em")(188,"strong"),e(189,"(opcional)"),t()(),o(190,"p"),e(191,"Define o conte\xFAdo e as op\xE7\xF5es do popover de ajuda/informa\xE7\xE3o."),t(),o(192,"p"),e(193,"Aceita uma string simples (exibida como conte\xFAdo) ou um objeto do tipo "),o(194,"code"),e(195,"PoHelperOptions"),t(),e(196," para configura\xE7\xE3o avan\xE7ada:"),t(),o(197,"ul")(198,"li")(199,"code"),e(200,"title"),t(),e(201,": T\xEDtulo do popover."),t(),o(202,"li")(203,"code"),e(204,"content"),t(),e(205,": Conte\xFAdo explicativo exibido no popover."),t(),o(206,"li")(207,"code"),e(208,"type"),t(),e(209,": Tipo do \xEDcone ("),o(210,"code"),e(211,"help"),t(),e(212," ou "),o(213,"code"),e(214,"info"),t(),e(215,")."),t(),o(216,"li")(217,"code"),e(218,"eventOnClick"),t(),e(219,": Fun\xE7\xE3o chamada ao clicar no \xEDcone."),t(),o(220,"li")(221,"code"),e(222,"footerAction"),t(),e(223,": Objeto com "),o(224,"code"),e(225,"label"),t(),e(226," e "),o(227,"code"),e(228,"action"),t(),e(229," para a\xE7\xE3o customizada no rodap\xE9 do popover."),t()(),o(230,"p"),e(231,"Exemplo de uso:"),t(),o(232,"pre")(233,"code",6),e(234,`<po-helper p-helper="Texto explicativo"></po-helper>
<po-helper [p-helper]="{ title: 'Ajuda', content: 'Texto', type: 'help' }"></po-helper>
`),t()()()(),o(235,"tr",16)(236,"td",17)(237,"div",18)(238,"span",19),e(239," p-size"),a(240,"br"),t()()(),o(241,"td",20)(242,"code",25),e(243,"string"),t()(),o(244,"td",22)(245,"p")(246,"code"),e(247,"medium"),t()()(),o(248,"td",23)(249,"em")(250,"strong"),e(251,"(opcional)"),t()(),o(252,"p"),e(253,"Define o tamanho do componente:"),t(),o(254,"ul")(255,"li")(256,"code"),e(257,"small"),t(),e(258,": altura do \xEDcone com seu valor de 16px (dispon\xEDvel apenas para acessibilidade AA)."),t(),o(259,"li")(260,"code"),e(261,"medium"),t(),e(262,": altura do \xEDcone com seu valor de 24px."),t()(),o(263,"blockquote")(264,"p"),e(265,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),o(266,"code"),e(267,"medium"),t(),e(268,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),o(269,"a",26),e(270,"po-theme"),t(),e(271,"."),t()()()()(),o(272,"h3"),e(273,"Interfaces"),t(),o(274,"h4",27)(275,"code",5),e(276,"PoHelperOptions"),t()(),o(277,"div",2)(278,"p")(279,"em"),e(280,"Interface"),t(),e(281," que define as op\xE7\xF5es de configura\xE7\xE3o do componente po-helper."),t(),o(282,"p"),e(283,"Permite customizar o conte\xFAdo, t\xEDtulo, tipo do \xEDcone, modo de abertura do popover, a\xE7\xF5es customizadas e eventos."),t()(),o(284,"h4",12),e(285,"Propriedades"),t(),o(286,"table",13)(287,"tr",14)(288,"th",15),e(289,"Nome"),t(),o(290,"th",15),e(291,"Tipo"),t(),o(292,"th",15),e(293,"Descri\xE7\xE3o"),t()(),o(294,"tr",16)(295,"td",17)(296,"div",18)(297,"span",19),e(298," content"),a(299,"br"),t()()(),o(300,"td",20)(301,"code",25),e(302,"string"),t()(),o(303,"td",23)(304,"em")(305,"strong"),e(306,"(opcional)"),t()(),o(307,"p"),e(308,"Texto explicativo exibido no popover."),t()()(),o(309,"tr",16)(310,"td",17)(311,"div",18)(312,"span",19),e(313," eventOnClick"),a(314,"br"),t()()(),o(315,"td",20)(316,"code",28),e(317,"Function"),t()(),o(318,"td",23)(319,"em")(320,"strong"),e(321,"(opcional)"),t()(),o(322,"p"),e(323,"Evento disparado ao clicar no \xEDcone do helper."),t(),o(324,"p"),e(325,"O conte\xFAdo do popover n\xE3o \xE9 exibido quando esta propriedade \xE9 definida, para controle total do evento pelo desenvolvedor."),t(),o(326,"p"),e(327,"Pode ser uma fun\xE7\xE3o ou um "),o(328,"code"),e(329,"EventEmitter"),t(),e(330,"."),t(),o(331,"p"),e(332,"Exemplo:"),t(),o(333,"pre")(334,"code"),e(335,`eventOnClick: (event) => {
 alert('Clicou no helper');
 console.log(event);
}
`),t()()()(),o(336,"tr",16)(337,"td",17)(338,"div",18)(339,"span",19),e(340," footerAction"),a(341,"br"),t()()(),o(342,"td",20)(343,"code",29),e(344,`{ label: string; action: Function;
}`),t()(),o(345,"td",23)(346,"em")(347,"strong"),e(348,"(opcional)"),t()(),o(349,"p"),e(350,`A\xE7\xE3o customizada exibida no rodap\xE9 do popover.
Compat\xEDvel apenas com a propriedade type com o valor `),o(351,"code"),e(352,"help"),t(),e(353," e desconsiderada quando o type for "),o(354,"code"),e(355,"info"),t(),e(356,"."),t(),o(357,"p"),e(358,"Deve ser um objeto com as propriedades:"),t(),o(359,"ul")(360,"li")(361,"code"),e(362,"label"),t(),e(363,": Texto do bot\xE3o."),t(),o(364,"li")(365,"code"),e(366,"action"),t(),e(367,": Fun\xE7\xE3o executada ao clicar no bot\xE3o."),t()(),o(368,"p"),e(369,"Exemplo:"),t(),o(370,"pre")(371,"code",7),e(372,`{ label: 'Saiba mais', action: this.footerAction.bind(this)) }
`),t()()()(),o(373,"tr",16)(374,"td",17)(375,"div",18)(376,"span",19),e(377," title"),a(378,"br"),t()()(),o(379,"td",20)(380,"code",25),e(381,"string"),t()(),o(382,"td",23)(383,"em")(384,"strong"),e(385,"(opcional)"),t()(),o(386,"p"),e(387,"T\xEDtulo do helper exibido no popover."),t()()(),o(388,"tr",16)(389,"td",17)(390,"div",18)(391,"span",19),e(392," type"),a(393,"br"),t()()(),o(394,"td",20)(395,"code",30),e(396,"'info' "),t(),o(397,"code",31),e(398," 'help'"),t()(),o(399,"td",23)(400,"em")(401,"strong"),e(402,"(opcional)"),t()(),o(403,"p"),e(404,"Tipo do \xEDcone exibido: "),o(405,"code"),e(406,"info"),t(),e(407," ou "),o(408,"code"),e(409,"help"),t(),e(410,"."),t(),o(411,"p"),e(412,"Quando o valor \xE9 "),o(413,"code"),e(414,"info"),t(),e(415,", o popover exibe apenas informa\xE7\xF5es e n\xE3o permite a\xE7\xF5es customizadas."),t(),o(416,"p"),e(417,"Quando o valor \xE9 "),o(418,"code"),e(419,"help"),t(),e(420,", o popover pode exibir a\xE7\xF5es customizadas no rodap\xE9."),t()()()()())},dependencies:[f],encapsulation:2})}return n})();var me=(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||n)(k(R),k(N))};static \u0275cmp=s({type:n,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Helper",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(o(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u("p-click",function(){return i.changeTab("doc")}),a(3,"sample-po-helper-doc"),t(),o(4,"po-tab",3),u("p-click",function(){return i.changeTab("web")}),a(5,"sample-po-helper-basic-view")(6,"sample-po-helper-labs-view")(7,"sample-po-helper-sales-performance-view"),t()()()),l&2&&(m("p-actions",i.actions),r(2),m("p-active",i.activeTab==="doc"),r(2),m("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[Z,E,S,oe,le,pe,re],encapsulation:2})}return n})();var He=[{path:"",component:me}],se=(()=>{class n{static \u0275fac=function(l){return new(l||n)};static \u0275mod=D({type:n});static \u0275inj=w({imports:[L.forChild(He),L]})}return n})();var Ze=(()=>{class n{static \u0275fac=function(l){return new(l||n)};static \u0275mod=D({type:n});static \u0275inj=w({imports:[$,se]})}return n})();export{Ze as DocPoHelperModule};
