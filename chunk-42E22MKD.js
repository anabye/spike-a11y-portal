import{j as M,k as L,l as C,o as x,p as H}from"./chunk-PJPIAKNY.js";import{$a as B,Aa as I,Ab as b,Db as O,Za as z,nb as A,zb as S}from"./chunk-UF77UBXA.js";import{Ba as v,Fa as n,Ga as t,Ha as o,La as k,M as h,Ma as p,Na as E,Oc as q,Qc as V,Sc as j,T as D,U as T,Ya as e,_a as f,fb as P,ha as d,ia as J,oa as s,pa as g,ua as w,vb as y,ya as l}from"./chunk-WFKG4FNY.js";var R=(()=>{class i{breadcrumb={items:[{label:"Home",link:"/"},{label:"Pipelines",link:"/"},{label:"Background Process Scheduler"}]};static \u0275fac=function(a){return new(a||i)};static \u0275cmp=s({type:i,selectors:[["sample-po-page-job-scheduler-background-process"]],standalone:!1,decls:1,vars:1,consts:[["p-service-api","https://po-sample-api.onrender.com/v1/scheduler","p-title","Background Process Scheduler",3,"p-breadcrumb"]],template:function(a,m){a&1&&o(0,"po-page-job-scheduler",0),a&2&&l("p-breadcrumb",m.breadcrumb)},dependencies:[C],encapsulation:2})}return i})();var ee=i=>({"docs-sample-code-tabs":i}),N=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=s({type:i,selectors:[["sample-po-page-job-scheduler-background-process-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,m){a&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Page Job Scheduler - Background Process"),t(),n(4,"a",2),p("click",function(){return m.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-job-scheduler-background-process/sample-po-page-job-scheduler-background-process.component.html"),t(),n(13,"pre",7),e(14,`<po-page-job-scheduler
  p-service-api="https://po-sample-api.onrender.com/v1/scheduler"
  p-title="Background Process Scheduler"
  [p-breadcrumb]="breadcrumb"
>
</po-page-job-scheduler>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-job-scheduler-background-process/sample-po-page-job-scheduler-background-process.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-job-scheduler-background-process',
  templateUrl: './sample-po-page-job-scheduler-background-process.component.html',
  standalone: false
})
export class SamplePoPageJobSchedulerBackgroundProcessComponent {
  breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Pipelines', link: '/' }, { label: 'Background Process Scheduler' }]
  };
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-page-job-scheduler-background-process"),t(),o(23,"hr")),a&2&&(d(5),v("po-icon "+m.sampleCodeButtonIcon),d(),f(" ",m.sampleCodeButtonLabel,""),d(),l("ngClass",P(4,ee,m.hideSampleCodeTabs)))},dependencies:[y,x,S,b,R],encapsulation:2})}return i})();function ne(i,_){if(i&1){let r=k();n(0,"h1"),e(1,"Etapa 1"),t(),n(2,"po-dynamic-form",4),p("p-form",function(m){D(r);let c=E();return T(c.getFormExample(m))}),t()}if(i&2){let r=E();d(2),l("p-fields",r.parametersForm)}}function ie(i,_){if(i&1){let r=k();n(0,"po-table",5),p("p-selected",function(m){D(r);let c=E();return T(c.selectedItem(m))}),t()}if(i&2){let r=E();l("p-items",r.items)("p-selectable",!0)}}function oe(i,_){if(i&1&&(n(0,"po-widget",6),o(1,"po-dynamic-view",7),t()),i&2){let r=E();d(),l("p-fields",r.fieldsSummary)("p-value",r.valueSummary)}}var W=(()=>{class i{dynamicForm;selectedValue={select:[]};valueSummary;parametersForm=[{property:"version",label:"Vers\xE3o",required:!0,gridLgColumns:12,gridXlColumns:12}];fieldsSummary=[{property:"version",label:"Vers\xE3o",gridColumns:6,gridSmColumns:12},{property:"selectedValue",label:"Valor selecionado na tabela",isArrayOrObject:!0,fieldLabel:"customer",gridColumns:6,gridSmColumns:12}];items=[{code:1200,customer:"Angeloni",driver:"Jos\xE9 Oliveira"},{code:1355,customer:"Giassi",driver:"Francisco Pereira"},{code:1496,customer:"Walmart",driver:"Pedro da Costa"},{code:1712,customer:"Carrefour",driver:"Jo\xE3o da Silva"}];getFormExample(r){this.dynamicForm=r}selectedItem(r){this.selectedValue.select.push(r),this.valueSummary={selectedValue:this.selectedValue.select,version:this.dynamicForm.form.value.version}}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=s({type:i,selectors:[["sample-po-page-job-scheduler-directives"]],standalone:!1,decls:4,vars:5,consts:[["p-service-api","https://po-sample-api.onrender.com/v1/scheduler","p-orientation","horizontal",3,"p-step-execution-last"],["p-job-scheduler-parameters-template","","p-title","1",3,"p-disable-advance","p-execution-parameter"],["p-job-scheduler-parameters-template","",3,"p-disable-advance","p-execution-parameter"],["p-job-scheduler-summary-template",""],[3,"p-form","p-fields"],[3,"p-selected","p-items","p-selectable"],["p-title","Par\xE2metros"],[3,"p-fields","p-value"]],template:function(a,m){a&1&&(n(0,"po-page-job-scheduler",0),w(1,ne,3,1,"ng-template",1)(2,ie,1,2,"ng-template",2)(3,oe,2,2,"ng-template",3),t()),a&2&&(l("p-step-execution-last",!0),d(),l("p-disable-advance",m.dynamicForm==null?null:m.dynamicForm.form.invalid)("p-execution-parameter",m.dynamicForm==null?null:m.dynamicForm.form.value),d(),l("p-disable-advance",!m.selectedValue.select.length)("p-execution-parameter",m.selectedValue))},dependencies:[z,B,I,O,C,M,L],encapsulation:2})}return i})();var re=i=>({"docs-sample-code-tabs":i}),U=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=s({type:i,selectors:[["sample-po-page-job-scheduler-directives-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,m){a&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Page Job Scheduler - Directives"),t(),n(4,"a",2),p("click",function(){return m.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-job-scheduler-directives/sample-po-page-job-scheduler-directives.component.html"),t(),n(13,"pre",7),e(14,`<po-page-job-scheduler
  p-service-api="https://po-sample-api.onrender.com/v1/scheduler"
  p-orientation="horizontal"
  [p-step-execution-last]="true"
>
  <ng-template
    p-job-scheduler-parameters-template
    [p-disable-advance]="dynamicForm?.form.invalid"
    [p-execution-parameter]="dynamicForm?.form.value"
    p-title="1"
  >
    <h1>Etapa 1</h1>
    <po-dynamic-form [p-fields]="parametersForm" (p-form)="getFormExample($event)"> </po-dynamic-form>
  </ng-template>

  <ng-template
    p-job-scheduler-parameters-template
    [p-disable-advance]="!selectedValue.select.length"
    [p-execution-parameter]="selectedValue"
  >
    <po-table [p-items]="items" [p-selectable]="true" (p-selected)="selectedItem($event)"></po-table>
  </ng-template>
  <ng-template p-job-scheduler-summary-template>
    <po-widget p-title="Par\xE2metros">
      <po-dynamic-view [p-fields]="fieldsSummary" [p-value]="valueSummary"> </po-dynamic-view>
    </po-widget>
  </ng-template>
</po-page-job-scheduler>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-job-scheduler-directives/sample-po-page-job-scheduler-directives.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PoDynamicFormField, PoDynamicViewField } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-job-scheduler-directives',
  templateUrl: './sample-po-page-job-scheduler-directives.component.html',
  standalone: false
})
export class SamplePoPageJobSchedulerDirectivesComponent {
  dynamicForm!: NgForm;
  selectedValue = { select: [] };
  valueSummary;

  parametersForm: Array<PoDynamicFormField> = [
    {
      property: 'version',
      label: 'Vers\xE3o',
      required: true,
      gridLgColumns: 12,
      gridXlColumns: 12
    }
  ];

  fieldsSummary: Array<PoDynamicViewField> = [
    {
      property: 'version',
      label: 'Vers\xE3o',
      gridColumns: 6,
      gridSmColumns: 12
    },
    {
      property: 'selectedValue',
      label: 'Valor selecionado na tabela',
      isArrayOrObject: true,
      fieldLabel: 'customer',
      gridColumns: 6,
      gridSmColumns: 12
    }
  ];

  items: Array<any> = [
    {
      code: 1200,
      customer: 'Angeloni',
      driver: 'Jos\xE9 Oliveira'
    },
    {
      code: 1355,
      customer: 'Giassi',
      driver: 'Francisco Pereira'
    },
    {
      code: 1496,
      customer: 'Walmart',
      driver: 'Pedro da Costa'
    },
    {
      code: 1712,
      customer: 'Carrefour',
      driver: 'Jo\xE3o da Silva'
    }
  ];

  getFormExample(form: NgForm) {
    this.dynamicForm = form;
  }

  selectedItem(value: any) {
    this.selectedValue.select.push(value);

    this.valueSummary = {
      selectedValue: this.selectedValue.select,
      version: this.dynamicForm.form.value.version
    };
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-page-job-scheduler-directives"),t(),o(23,"hr")),a&2&&(d(5),v("po-icon "+m.sampleCodeButtonIcon),d(),f(" ",m.sampleCodeButtonLabel,""),d(),l("ngClass",P(4,re,m.hideSampleCodeTabs)))},dependencies:[y,x,S,b,W],encapsulation:2})}return i})();var X=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=s({type:i,selectors:[["sample-po-page-job-scheduler-doc"]],standalone:!1,decls:641,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","guides/api"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","(model:","PoJobSchedulerInternal)","=>","PoJobSchedulerInternal"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","Array<PoDynamicFormField>"],["href","/documentation/po-dynamic-form"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoStepperOrientation"],["href","documentation/po-stepper#stepperOrientation"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","{","hour:","number;","minute:","number;","}"],["pan","",1,"docs-api-property-type","object"],["pan","",1,"docs-api-property-type","{","day:","number;","hour:","number;","minute:","number;","}"],["pan","",1,"docs-api-property-type","{","daysOfWeek:","Array<string>;","hour:","number;","minute:","number;","}"]],template:function(a,m){a&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoPageJobSchedulerModule } from '@po-ui/ng-templates';"),t()(),o(4,"div",2),n(5,"h3",3),e(6,"Componente"),t(),n(7,"h4",4)(8,"code",5),e(9,"PoPageJobSchedulerComponent"),t()(),n(10,"div",2)(11,"p"),e(12,"O "),n(13,"code"),e(14,"po-page-job-scheduler"),t(),e(15,` \xE9 uma p\xE1gina para cria\xE7\xE3o e atualiza\xE7\xE3o de agendamentos da execu\xE7\xE3o de processos (Job Scheduler),
como por exemplo: a gera\xE7\xE3o da folha de pagamento dos funcion\xE1rios.`),t(),n(16,"p"),e(17,`Para utilizar esta p\xE1gina, basta informar o servi\xE7o (endpoint) para consumo,
sem a necessidade de criar componentes e tratamentos dos dados.`),t(),n(18,"p"),e(19,"Veja mais sobre os padr\xF5es utilizados nas requisi\xE7\xF5es no "),n(20,"a",6),e(21,"Guia de implementa\xE7\xE3o de APIs"),t(),e(22,"."),t(),n(23,"h4"),e(24,"Tokens customiz\xE1veis"),t(),n(25,"blockquote")(26,"p"),e(27,"Para maiores informa\xE7\xF5es, acesse o guia "),n(28,"a",7),e(29,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(30,"."),t()(),n(31,"table")(32,"thead")(33,"tr")(34,"th"),e(35,"Propriedade"),t(),n(36,"th"),e(37,"Descri\xE7\xE3o"),t(),n(38,"th"),e(39,"Valor Padr\xE3o"),t(),o(40,"th"),t()(),n(41,"tbody")(42,"tr")(43,"td")(44,"strong"),e(45,"Header"),t()(),o(46,"td")(47,"td")(48,"td"),t(),n(49,"tr")(50,"td")(51,"code"),e(52,"--padding"),t()(),n(53,"td"),e(54,"Espa\xE7amento (top "),n(55,"code"),e(56,"@deprecated 20.x.x"),t(),e(57,", right, bottom "),n(58,"code"),e(59,"@deprecated 20.x.x"),t(),e(60,", left)"),t(),n(61,"td")(62,"code"),e(63,"0.5rem (@deprecated 20.x.x) 1.5rem"),t()(),o(64,"td"),t(),n(65,"tr")(66,"td")(67,"code"),e(68,"--gap"),t()(),n(69,"td"),e(70,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),t(),n(71,"td")(72,"code"),e(73,"1.5rem"),t()(),n(74,"td")(75,"code"),e(76,"@deprecated 20.x.x"),t()()(),n(77,"tr")(78,"td")(79,"code"),e(80,"--gap-actions"),t()(),n(81,"td"),e(82,"Espa\xE7amento entre as a\xE7\xF5es"),t(),n(83,"td")(84,"code"),e(85,"0.5rem"),t()(),o(86,"td"),t(),n(87,"tr")(88,"td")(89,"code"),e(90,"--font-family"),t()(),n(91,"td"),e(92,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),t(),n(93,"td")(94,"code"),e(95,"--font-family-theme"),t()(),o(96,"td"),t(),n(97,"tr")(98,"td")(99,"strong"),e(100,"Content"),t()(),o(101,"td")(102,"td")(103,"td"),t(),n(104,"tr")(105,"td")(106,"code"),e(107,"--padding-content"),t()(),n(108,"td"),e(109,"Espa\xE7amento (top, right, bottom, left)"),t(),n(110,"td")(111,"code"),e(112,"0.5rem 1.5rem"),t()(),n(113,"td")(114,"code"),e(115,"@deprecated 20.x.x"),t()()()()()(),n(116,"div",8)(117,"h4",9),e(118,"Seletor"),t(),n(119,"pre",10),e(120,`<po-page-job-scheduler
    p-before-send="(model: PoJobSchedulerInternal) => PoJobSchedulerInternal"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    (p-error)="EventEmitter"
    p-parameters="Array<PoDynamicFormField>"
    p-service-api="string"
    p-step-execution-last="boolean"
    p-orientation="PoStepperOrientation"
    (p-success)="EventEmitter"
    p-title="string" >
</po-page-job-scheduler>
`),t()(),n(121,"h4",11),e(122,"Propriedades"),t(),n(123,"table",12)(124,"tr",13)(125,"th",14),e(126,"Nome"),t(),n(127,"th",14),e(128,"Tipo"),t(),n(129,"th",14),e(130,"Padr\xE3o"),t(),n(131,"th",14),e(132,"Descri\xE7\xE3o"),t()(),n(133,"tr",15)(134,"td",16)(135,"div",17)(136,"span",18),e(137," p-before-send"),o(138,"br"),t()()(),n(139,"td",19)(140,"code",20),e(141,"(model: PoJobSchedulerInternal) => PoJobSchedulerInternal"),t()(),n(142,"td",21),e(143,"-"),t(),n(144,"td",22)(145,"em")(146,"strong"),e(147,"(opcional)"),t()(),n(148,"p"),e(149,`Fun\xE7\xE3o chamada ap\xF3s realizar a confirma\xE7\xE3o da execu\xE7\xE3o no PoPageJobScheduler.
Permite alterar os valores do model do PoPageJobScheduler antes de realizar o envio para a Api.`),t(),n(150,"blockquote")(151,"p"),e(152,"Deve retornar um objeto do tipo "),n(153,"code"),e(154,"PoPageJobScheduler"),t(),e(155," para ser adicionado ao model do PoPageJobScheduler."),t()(),n(156,"blockquote")(157,"p"),e(158,"Ao ser disparada, a mesma receber\xE1 por par\xE2metro o model do PoPageJobScheduler de interface "),n(159,"code"),e(160,"PoJobSchedulerInternal"),t(),e(161,"."),t()(),n(162,"p"),e(163,"O contexto da fun\xE7\xE3o que ser\xE1 chamada, ser\xE1 o mesmo que o do "),n(164,"code"),e(165,"PoPageJobScheduler"),t(),e(166,`, ent\xE3o para poder alterar
para o contexto do componente que o est\xE1 utilizando, pode ser utilizado a propriedade `),n(167,"code"),e(168,"bind"),t(),e(169,` do Javascript.
Por exemplo, para a fun\xE7\xE3o `),n(170,"code"),e(171,"beforeSend"),t(),e(172,":"),t(),n(173,"pre")(174,"code"),e(175,`<po-page-job-scheduler [p-service-api]="serviceApi" [p-parameters]="params" [p-before-send]="beforeSend.bind(this)">
...
</po-page-job-scheduler>
`),t()()()(),n(176,"tr",15)(177,"td",16)(178,"div",17)(179,"span",18),e(180," p-breadcrumb"),o(181,"br"),t()()(),n(182,"td",19)(183,"code",23),e(184,"PoBreadcrumb"),t()(),n(185,"td",21),e(186,"-"),t(),n(187,"td",22)(188,"em")(189,"strong"),e(190,"(opcional)"),t()(),n(191,"p"),e(192,"Objeto com as propriedades do breadcrumb."),t()()(),n(193,"tr",15)(194,"td",16)(195,"div",17)(196,"span",18),e(197," p-components-size"),o(198,"br"),t()()(),n(199,"td",19)(200,"code",24),e(201,"string"),t()(),n(202,"td",21)(203,"p")(204,"code"),e(205,"medium"),t()()(),n(206,"td",22)(207,"em")(208,"strong"),e(209,"(opcional)"),t()(),n(210,"p"),e(211,"Define o tamanho dos componentes de formul\xE1rio no template:"),t(),n(212,"ul")(213,"li")(214,"code"),e(215,"small"),t(),e(216,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(217,"li")(218,"code"),e(219,"medium"),t(),e(220,": aplica a medida medium de cada componente."),t()(),n(221,"blockquote")(222,"p"),e(223,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(224,"code"),e(225,"medium"),t(),e(226,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(227,"a",25),e(228,"po-theme"),t(),e(229,"."),t()()()(),n(230,"tr",15)(231,"td",16)(232,"div",26)(233,"span",27),e(234," (p-error)"),o(235,"br"),t()()(),n(236,"td",19)(237,"code",28),e(238,"EventEmitter"),t()(),n(239,"td",21),e(240,"-"),t(),n(241,"td",22)(242,"em")(243,"strong"),e(244,"(opcional)"),t()(),n(245,"p"),e(246,`Evento disparado ao ocorrer um erro impossibilitando a conclus\xE3o do agendamento.
Para este evento ser\xE1 passado como par\xE2metro os detalhes do erro.`),t()()(),n(247,"tr",15)(248,"td",16)(249,"div",17)(250,"span",18),e(251," p-parameters"),o(252,"br"),t()()(),n(253,"td",19)(254,"code",29),e(255,"Array<PoDynamicFormField>"),t()(),n(256,"td",21),e(257,"-"),t(),n(258,"td",22)(259,"p"),e(260,"Par\xE2metros que ser\xE3o utilizados para cria\xE7\xE3o e edi\xE7\xE3o dos agendamentos."),t(),n(261,"p"),e(262,"Ao utilizar esta propriedade, o componente n\xE3o buscar\xE1 automaticamente os par\xE2metros da API e o campo para preenchimento do processo n\xE3o ser\xE1 exibido."),t()()(),n(263,"tr",15)(264,"td",16)(265,"div",17)(266,"span",18),e(267," p-service-api"),o(268,"br"),t()()(),n(269,"td",19)(270,"code",24),e(271,"string"),t()(),n(272,"td",21),e(273,"-"),t(),n(274,"td",22)(275,"p"),e(276,"Endpoint usado pelo componente para busca dos processos e par\xE2metros que ser\xE3o utilizados para cria\xE7\xE3o e edi\xE7\xE3o dos agendamentos."),t(),n(277,"h4"),e(278,"Processos"),t(),n(279,"p"),e(280,`Os processos s\xE3o as tarefas que estar\xE3o dispon\xEDveis para o usu\xE1rio poder fazer os agendamentos.
Ao inicializar o componente, ser\xE1 feito uma requisi\xE7\xE3o `),n(281,"code"),e(282,"GET"),t(),e(283," para o endpoint "),n(284,"code"),e(285,"{service-api}/processes"),t(),e(286,`, para buscar
essa lista de processos.`),t(),n(287,"p"),e(288,"Este endpoint "),n(289,"code"),e(290,"{service-api}/processes"),t(),e(291," deve retornar uma lista de objetos que seguem a defini\xE7\xE3o de dados abaixo:"),t(),n(292,"pre")(293,"code"),e(294,`GET {service-api}/processes
`),t()(),n(295,"pre")(296,"code"),e(297,`{
  items: [
    { "processID": "ac4f", "description": "Gerar folha de pagamento" },
    { "processID": "df6l", "description": "Relat\xF3rio de imposto a recolher" },
    { "processID": "dk3p", "description": "T\xEDtulos em aberto" },
  ]
}
`),t()(),n(298,"p"),e(299,"Desta forma ser\xE1 renderizado um componente para selecionar o processo e/ou filtr\xE1-los."),t(),n(300,"p"),e(301,`Para realizar o filtro de busca do processo, ser\xE1 feita uma requisi\xE7\xE3o enviando o conte\xFAdo digitado na busca atrav\xE9s do
par\xE2metro `),n(302,"code"),e(303,"search"),t(),e(304,". Da seguinte forma:"),t(),n(305,"pre")(306,"code"),e(307,`GET {service-api}/processes?search=relatorio
`),t()(),n(308,"blockquote")(309,"p"),e(310,"Veja mais sobre pagina\xE7\xE3o e filtros no "),n(311,"a",6),e(312,"Guia de implementa\xE7\xE3o de APIs"),t(),e(313,`.
Caso seja informada a propriedade `),n(314,"code"),e(315,"p-parameters"),t(),e(316," n\xE3o ser\xE3o realizadas as requisi\xE7\xF5es de processos e nem de parametros automaticamente."),t()(),n(317,"p"),e(318,`Tamb\xE9m \xE9 poss\xEDvel fazer um agendamento de um processo espec\xEDfico, sem que seja necess\xE1rio um endpoint para busca desses
processos. Ent\xE3o, caso o endpoint `),n(319,"code"),e(320,"{service-api}/processes"),t(),e(321,` n\xE3o seja v\xE1lido, ser\xE1 apresentado um campo de entrada de
texto para o usu\xE1rio informar diretamente
o `),n(322,"strong"),e(323,"identificador do processo - "),n(324,"code"),e(325,"processID"),t()(),e(326," e ao salvar ser\xE1 enviado um "),n(327,"code"),e(328,"POST"),t(),e(329," para o endpoint difinido "),n(330,"code"),e(331,"serviceApi"),t(),e(332," conforme abaixo:"),t(),n(333,"pre")(334,"code"),e(335,`POST {service-api}
`),t()(),n(336,"p")(337,"em"),e(338,"Request payload"),t(),e(339," - estrutura de dados enviada no corpo da requisi\xE7\xE3o conforme interface "),n(340,"code"),e(341,"PoJobScheduler"),t(),e(342,":"),t(),n(343,"pre")(344,"code"),e(345,`{
  "daily": { "hour": 10, "minute": 12 },
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "processID": "ac0405"
  ...
}
`),t()(),n(346,"p"),e(347,"Caso seja necess\xE1rio informar par\xE2metros e adicionar configura\xE7\xF5es no processo selecionado, ser\xE1 realizado um "),n(348,"code"),e(349,"GET"),t(),e(350,`
como exemplificado abaixo. Os par\xE2metros devem retornar uma lista de objetos que seguem a interface
`),n(351,"a",30),e(352,"PoDynamicFormField"),t(),e(353,". Por\xE9m, caso utilizar a propriedade "),n(354,"code"),e(355,"p-parameters"),t(),e(356,` o componente n\xE3o
realizar\xE1 a busca autom\xE1tica e o campo de processos n\xE3o ser\xE1 exibido.`),t(),n(357,"pre")(358,"code"),e(359,`GET {service-api}/processes/:id/parameters
...
{
  items: [
    { "property": "vencimento", type: "date" },
    { "property": "imposto-retido", "label": "Imposto Retido", type: "boolean" }
  ]
}
`),t()(),n(360,"h4"),e(361,"Salvar e Atualizar"),t(),n(362,"p"),e(363,"Para salvar o agendamento, ser\xE1 feita uma requisi\xE7\xE3o de cria\xE7\xE3o, passando os valores preenchidos pelo usu\xE1rio via "),n(364,"em"),e(365,"payload"),t(),e(366,`.
Abaixo uma requisi\xE7\xE3o `),n(367,"code"),e(368,"POST"),t(),e(369," disparada, onde as propriedades do "),n(370,"em"),e(371,"Job Scheduler"),t(),e(372," foram preenchidas:"),t(),n(373,"pre")(374,"code"),e(375,`POST {service-api}
`),t()(),n(376,"p")(377,"em"),e(378,"Request payload"),t(),e(379," - estrutura de dados enviada no corpo da requisi\xE7\xE3o conforme interface "),n(380,"code"),e(381,"PoJobScheduler"),t(),e(382,":"),t(),n(383,"pre")(384,"code"),e(385,`{
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "monthly": { "day": 1, "hour": 10, "minute": 0 },
  "processID": "ac0405",
  "rangeExecutions: { "frequency": { "type": "hour", "value": 2 }, "rangeLimit": { "hour": 18, "minute": 0, "day": 20 } }
}
`),t()(),n(386,"p"),e(387,"Caso queira que o componente carregue um agendamento j\xE1 existente, deve ser inclu\xEDdo um par\xE2metro na rota chamado "),n(388,"code"),e(389,"id"),t(),e(390,"."),t(),n(391,"p"),e(392,"Exemplo de configura\xE7\xE3o de rota:"),t(),n(393,"pre")(394,"code"),e(395,`RouterModule.forRoot([
  ...
  { path: 'edit/:id', component: ExampleJobSchedulerComponent },
  ...
],
`),t()(),n(396,"p"),e(397,"Baseado nisso, na inicializa\xE7\xE3o do template ser\xE1 disparado uma requisi\xE7\xE3o para buscar o recurso que ser\xE1 editado."),t(),n(398,"pre")(399,"code"),e(400,`GET {service-api}/{id}
`),t()(),n(401,"p"),e(402,"Ao atualizar o agendamento, ser\xE1 disparado um "),n(403,"code"),e(404,"PUT"),t(),e(405,` com os dados preenchidos.
Veja abaixo uma requisi\xE7\xE3o `),n(406,"code"),e(407,"PUT"),t(),e(408," disparada, onde a propriedade "),n(409,"em"),e(410,"recurrent"),t(),e(411," e "),n(412,"em"),e(413,"daily"),t(),e(414," foram atualizadas:"),t(),n(415,"pre")(416,"code"),e(417,`PUT {service-api}/{id}
`),t()(),n(418,"p")(419,"em"),e(420,"Request payload"),t(),e(421," - estrutura de dados enviada no corpo da requisi\xE7\xE3o conforme interface "),n(422,"code"),e(423,"PoJobScheduler"),t(),e(424,":"),t(),n(425,"pre")(426,"code"),e(427,`{
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "processID": "ac0405",
  "monthly": { "day": 1, "hour": 10, "minute": 0 },
  "processID": "ac0405",
  "rangeExecutions: { "frequency": { "type": "hour", "value": 2 }, "rangeLimit": { "hour": 18, "minute": 0, "day": 20 } }
}
`),t()()()(),n(428,"tr",15)(429,"td",16)(430,"div",17)(431,"span",18),e(432," p-step-execution-last"),o(433,"br"),t()()(),n(434,"td",19)(435,"code",31),e(436,"boolean"),t()(),n(437,"td",21),e(438,"-"),t(),n(439,"td",22)(440,"em")(441,"strong"),e(442,"(opcional)"),t()(),n(443,"p"),e(444,"Define se o step "),n(445,"code"),e(446,"Agendamento"),t(),e(447," deve ser exibido como o \xFAltimo na sequ\xEAncia de steps"),t(),n(448,"blockquote")(449,"p"),e(450,"Aplic\xE1vel apenas quando utilizado "),n(451,"code"),e(452,"PoJobSchedulerParametersTemplateDirective"),t()()()()(),n(453,"tr",15)(454,"td",16)(455,"div",17)(456,"span",18),e(457," p-orientation"),o(458,"br"),t()()(),n(459,"td",19)(460,"code",32),e(461,"PoStepperOrientation"),t()(),n(462,"td",21),e(463,"-"),t(),n(464,"td",22)(465,"em")(466,"strong"),e(467,"(opcional)"),t()(),n(468,"p"),e(469,"Define a orienta\xE7\xE3o de exibi\xE7\xE3o do "),n(470,"code"),e(471,"po-stepper"),t(),e(472,"."),t(),n(473,"blockquote")(474,"p"),e(475,"Quando n\xE3o utilizada, segue o comportamento com base nas dimens\xF5es da tela."),t()(),n(476,"blockquote")(477,"p"),e(478,"Veja os valores v\xE1lidos no "),n(479,"em"),e(480,"enum"),t(),n(481,"a",33),e(482,"PoStepperOrientation"),t(),e(483,"."),t()()()(),n(484,"tr",15)(485,"td",16)(486,"div",26)(487,"span",27),e(488," (p-success)"),o(489,"br"),t()()(),n(490,"td",19)(491,"code",28),e(492,"EventEmitter"),t()(),n(493,"td",21),e(494,"-"),t(),n(495,"td",22)(496,"em")(497,"strong"),e(498,"(opcional)"),t()(),n(499,"p"),e(500,"Evento disparado ao concluir o processo de agendamento com sucesso."),t()()(),n(501,"tr",15)(502,"td",16)(503,"div",17)(504,"span",18),e(505," p-title"),o(506,"br"),t()()(),n(507,"td",19)(508,"code",24),e(509,"string"),t()(),n(510,"td",21),e(511,"-"),t(),n(512,"td",22)(513,"p"),e(514,"T\xEDtulo da p\xE1gina."),t()()()(),n(515,"h3"),e(516,"Interfaces"),t(),n(517,"h4",34)(518,"code",5),e(519,"PoJobScheduler"),t()(),n(520,"div",2)(521,"p"),e(522,"Estrutura do "),n(523,"em"),e(524,"payload"),t(),e(525," enviado nas requisi\xE7\xF5es para salvar e/ou atualizar as tarefas do "),n(526,"em"),e(527,"Job Scheduler"),t(),e(528,"."),t()(),n(529,"h4",11),e(530,"Propriedades"),t(),n(531,"table",12)(532,"tr",13)(533,"th",14),e(534,"Nome"),t(),n(535,"th",14),e(536,"Tipo"),t(),n(537,"th",14),e(538,"Descri\xE7\xE3o"),t()(),n(539,"tr",15)(540,"td",16)(541,"div",17)(542,"span",18),e(543," daily"),o(544,"br"),t()()(),n(545,"td",19)(546,"code",35),e(547,`{ hour: number; minute: number;
}`),t()(),n(548,"td",22)(549,"em")(550,"strong"),e(551,"(opcional)"),t()(),n(552,"p"),e(553,"Define uma repeti\xE7\xE3o di\xE1ria."),t()()(),n(554,"tr",15)(555,"td",16)(556,"div",17)(557,"span",18),e(558," executionParameter"),o(559,"br"),t()()(),n(560,"td",19)(561,"code",36),e(562,"object"),t()(),n(563,"td",22)(564,"em")(565,"strong"),e(566,"(opcional)"),t()(),n(567,"p"),e(568,"Objeto contendo os nomes das propriedades dos par\xE2metros e os valores preenchidos pelo usu\xE1rio."),t()()(),n(569,"tr",15)(570,"td",16)(571,"div",17)(572,"span",18),e(573," firstExecution"),o(574,"br"),t()()(),n(575,"td",19)(576,"code",24),e(577,"string"),t()(),n(578,"td",22)(579,"em")(580,"strong"),e(581,"(opcional)"),t()(),n(582,"p"),e(583,"Data da primeira execu\xE7\xE3o."),t()()(),n(584,"tr",15)(585,"td",16)(586,"div",17)(587,"span",18),e(588," monthly"),o(589,"br"),t()()(),n(590,"td",19)(591,"code",37),e(592,`{ day: number; hour: number; minute: number;
}`),t()(),n(593,"td",22)(594,"em")(595,"strong"),e(596,"(opcional)"),t()(),n(597,"p"),e(598,"Define uma repeti\xE7\xE3o mensal."),t()()(),n(599,"tr",15)(600,"td",16)(601,"div",17)(602,"span",18),e(603," processID"),o(604,"br"),t()()(),n(605,"td",19)(606,"code",24),e(607,"string"),t()(),n(608,"td",22)(609,"p"),e(610,"Identificador do processo."),t()()(),n(611,"tr",15)(612,"td",16)(613,"div",17)(614,"span",18),e(615," recurrent"),o(616,"br"),t()()(),n(617,"td",19)(618,"code",31),e(619,"boolean"),t()(),n(620,"td",22)(621,"em")(622,"strong"),e(623,"(opcional)"),t()(),n(624,"p"),e(625,"Permite uma execu\xE7\xE3o recorrente."),t()()(),n(626,"tr",15)(627,"td",16)(628,"div",17)(629,"span",18),e(630," weekly"),o(631,"br"),t()()(),n(632,"td",19)(633,"code",38),e(634,`{ daysOfWeek: Array<string>; hour: number; minute: number;
}`),t()(),n(635,"td",22)(636,"em")(637,"strong"),e(638,"(opcional)"),t()(),n(639,"p"),e(640,"Define uma repeti\xE7\xE3o semanal."),t()()()()())},dependencies:[x],encapsulation:2})}return i})();var $=(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=2;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||i)(J(q),J(V))};static \u0275cmp=s({type:i,selectors:[["ng-component"]],standalone:!1,decls:7,vars:4,consts:[["p-title","Page Job Scheduler",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,m){a&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),p("p-click",function(){return m.changeTab("doc")}),o(3,"sample-po-page-job-scheduler-doc"),t(),n(4,"po-tab",3),p("p-click",function(){return m.changeTab("web")}),o(5,"sample-po-page-job-scheduler-background-process-view")(6,"sample-po-page-job-scheduler-directives-view"),t()()()),a&2&&(l("p-actions",m.actions),d(2),l("p-active",m.activeTab==="doc"),d(2),l("p-hide",m.hidePoWebSample)("p-active",m.activeTab==="web"))},dependencies:[A,S,b,N,U,X],encapsulation:2})}return i})();var de=[{path:"",component:$}],Q=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=g({type:i});static \u0275inj=h({imports:[j.forChild(de),j]})}return i})();var je=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=g({type:i});static \u0275inj=h({imports:[H,Q]})}return i})();export{je as DocPoPageJobSchedulerModule};
