import{j as M,k as L,l as C,o as x,p as H}from"./chunk-RMC2BKSN.js";import{Ab as b,Eb as O,_a as z,ab as A,nb as B,za as I,zb as S}from"./chunk-S5N4D4VC.js";import{$c as F,Aa as l,Da as v,Fb as y,La as n,Ma as t,N as h,Na as a,Ra as k,Sa as p,Ta as E,U as D,V as T,Xc as q,Zc as V,cb as e,eb as f,ja as d,ka as J,ob as P,qa as s,ra as g,wa as w}from"./chunk-CBLD3XJL.js";var R=(()=>{class i{breadcrumb={items:[{label:"Home",link:"/"},{label:"Pipelines",link:"/"},{label:"Background Process Scheduler"}]};static \u0275fac=function(o){return new(o||i)};static \u0275cmp=s({type:i,selectors:[["sample-po-page-job-scheduler-background-process"]],standalone:!1,decls:1,vars:1,consts:[["p-service-api","https://po-sample-api.onrender.com/v1/scheduler","p-title","Background Process Scheduler",3,"p-breadcrumb"]],template:function(o,m){o&1&&a(0,"po-page-job-scheduler",0),o&2&&l("p-breadcrumb",m.breadcrumb)},dependencies:[C],encapsulation:2})}return i})();var ee=i=>({"docs-sample-code-tabs":i}),N=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=s({type:i,selectors:[["sample-po-page-job-scheduler-background-process-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,m){o&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Page Job Scheduler - Background Process"),t(),n(4,"a",2),p("click",function(){return m.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-job-scheduler-background-process/sample-po-page-job-scheduler-background-process.component.html"),t(),n(13,"pre",7),e(14,`<po-page-job-scheduler
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
`),t()()()()(),n(21,"div",10),a(22,"sample-po-page-job-scheduler-background-process"),t(),a(23,"hr")),o&2&&(d(5),v("po-icon "+m.sampleCodeButtonIcon),d(),f(" ",m.sampleCodeButtonLabel,""),d(),l("ngClass",P(4,ee,m.hideSampleCodeTabs)))},dependencies:[y,x,S,b,R],encapsulation:2})}return i})();function ne(i,_){if(i&1){let r=k();n(0,"h1"),e(1,"Etapa 1"),t(),n(2,"po-dynamic-form",4),p("p-form",function(m){D(r);let c=E();return T(c.getFormExample(m))}),t()}if(i&2){let r=E();d(2),l("p-fields",r.parametersForm)}}function ie(i,_){if(i&1){let r=k();n(0,"po-table",5),p("p-selected",function(m){D(r);let c=E();return T(c.selectedItem(m))}),t()}if(i&2){let r=E();l("p-items",r.items)("p-selectable",!0)}}function oe(i,_){if(i&1&&(n(0,"po-widget",6),a(1,"po-dynamic-view",7),t()),i&2){let r=E();d(),l("p-fields",r.fieldsSummary)("p-value",r.valueSummary)}}var W=(()=>{class i{dynamicForm;selectedValue={select:[]};valueSummary;parametersForm=[{property:"version",label:"Vers\xE3o",required:!0,gridLgColumns:12,gridXlColumns:12}];fieldsSummary=[{property:"version",label:"Vers\xE3o",gridColumns:6,gridSmColumns:12},{property:"selectedValue",label:"Valor selecionado na tabela",isArrayOrObject:!0,fieldLabel:"customer",gridColumns:6,gridSmColumns:12}];items=[{code:1200,customer:"Angeloni",driver:"Jos\xE9 Oliveira"},{code:1355,customer:"Giassi",driver:"Francisco Pereira"},{code:1496,customer:"Walmart",driver:"Pedro da Costa"},{code:1712,customer:"Carrefour",driver:"Jo\xE3o da Silva"}];getFormExample(r){this.dynamicForm=r}selectedItem(r){this.selectedValue.select.push(r),this.valueSummary={selectedValue:this.selectedValue.select,version:this.dynamicForm.form.value.version}}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=s({type:i,selectors:[["sample-po-page-job-scheduler-directives"]],standalone:!1,decls:4,vars:5,consts:[["p-service-api","https://po-sample-api.onrender.com/v1/scheduler","p-orientation","horizontal",3,"p-step-execution-last"],["p-job-scheduler-parameters-template","","p-title","1",3,"p-disable-advance","p-execution-parameter"],["p-job-scheduler-parameters-template","",3,"p-disable-advance","p-execution-parameter"],["p-job-scheduler-summary-template",""],[3,"p-form","p-fields"],[3,"p-selected","p-items","p-selectable"],["p-title","Par\xE2metros"],[3,"p-fields","p-value"]],template:function(o,m){o&1&&(n(0,"po-page-job-scheduler",0),w(1,ne,3,1,"ng-template",1)(2,ie,1,2,"ng-template",2)(3,oe,2,2,"ng-template",3),t()),o&2&&(l("p-step-execution-last",!0),d(),l("p-disable-advance",m.dynamicForm==null?null:m.dynamicForm.form.invalid)("p-execution-parameter",m.dynamicForm==null?null:m.dynamicForm.form.value),d(),l("p-disable-advance",!m.selectedValue.select.length)("p-execution-parameter",m.selectedValue))},dependencies:[z,A,I,O,C,M,L],encapsulation:2})}return i})();var re=i=>({"docs-sample-code-tabs":i}),U=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=s({type:i,selectors:[["sample-po-page-job-scheduler-directives-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,m){o&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Page Job Scheduler - Directives"),t(),n(4,"a",2),p("click",function(){return m.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-job-scheduler-directives/sample-po-page-job-scheduler-directives.component.html"),t(),n(13,"pre",7),e(14,`<po-page-job-scheduler
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
`),t()()()()(),n(21,"div",10),a(22,"sample-po-page-job-scheduler-directives"),t(),a(23,"hr")),o&2&&(d(5),v("po-icon "+m.sampleCodeButtonIcon),d(),f(" ",m.sampleCodeButtonLabel,""),d(),l("ngClass",P(4,re,m.hideSampleCodeTabs)))},dependencies:[y,x,S,b,W],encapsulation:2})}return i})();var X=(()=>{class i{static \u0275fac=function(o){return new(o||i)};static \u0275cmp=s({type:i,selectors:[["sample-po-page-job-scheduler-doc"]],standalone:!1,decls:623,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","guides/api"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","(model:","PoJobSchedulerInternal)","=>","PoJobSchedulerInternal"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","Array<PoDynamicFormField>"],["href","/documentation/po-dynamic-form"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoStepperOrientation"],["href","documentation/po-stepper#stepperOrientation"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","{","hour:","number;","minute:","number;","}"],["pan","",1,"docs-api-property-type","object"],["pan","",1,"docs-api-property-type","{","day:","number;","hour:","number;","minute:","number;","}"],["pan","",1,"docs-api-property-type","{","daysOfWeek:","Array<string>;","hour:","number;","minute:","number;","}"]],template:function(o,m){o&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoPageJobSchedulerModule } from '@po-ui/ng-templates';"),t()(),a(4,"div",2),n(5,"h3",3),e(6,"Componente"),t(),n(7,"h4",4)(8,"code",5),e(9,"PoPageJobSchedulerComponent"),t()(),n(10,"div",2)(11,"p"),e(12,"O "),n(13,"code"),e(14,"po-page-job-scheduler"),t(),e(15,` \xE9 uma p\xE1gina para cria\xE7\xE3o e atualiza\xE7\xE3o de agendamentos da execu\xE7\xE3o de processos (Job Scheduler),
como por exemplo: a gera\xE7\xE3o da folha de pagamento dos funcion\xE1rios.`),t(),n(16,"p"),e(17,`Para utilizar esta p\xE1gina, basta informar o servi\xE7o (endpoint) para consumo,
sem a necessidade de criar componentes e tratamentos dos dados.`),t(),n(18,"p"),e(19,"Veja mais sobre os padr\xF5es utilizados nas requisi\xE7\xF5es no "),n(20,"a",6),e(21,"Guia de implementa\xE7\xE3o de APIs"),t(),e(22,"."),t(),n(23,"h4"),e(24,"Tokens customiz\xE1veis"),t(),n(25,"blockquote")(26,"p"),e(27,"Para maiores informa\xE7\xF5es, acesse o guia "),n(28,"a",7),e(29,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(30,"."),t()(),n(31,"table")(32,"thead")(33,"tr")(34,"th"),e(35,"Propriedade"),t(),n(36,"th"),e(37,"Descri\xE7\xE3o"),t(),n(38,"th"),e(39,"Valor Padr\xE3o"),t()()(),n(40,"tbody")(41,"tr")(42,"td")(43,"strong"),e(44,"Header"),t()(),a(45,"td")(46,"td"),t(),n(47,"tr")(48,"td")(49,"code"),e(50,"--padding"),t()(),n(51,"td"),e(52,"Espa\xE7amento do header"),t(),n(53,"td")(54,"code"),e(55,"var(--spacing-xs) var(--spacing-md)"),t()()(),n(56,"tr")(57,"td")(58,"code"),e(59,"--gap"),t()(),n(60,"td"),e(61,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),t(),n(62,"td")(63,"code"),e(64,"var(--spacing-md)"),t()()(),n(65,"tr")(66,"td")(67,"code"),e(68,"--gap-actions"),t()(),n(69,"td"),e(70,"Espa\xE7amento entre as a\xE7\xF5es"),t(),n(71,"td")(72,"code"),e(73,"var(--spacing-xs)"),t()()(),n(74,"tr")(75,"td")(76,"code"),e(77,"--font-family"),t()(),n(78,"td"),e(79,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),t(),n(80,"td")(81,"code"),e(82,"var(--font-family-theme)"),t()()(),n(83,"tr")(84,"td")(85,"strong"),e(86,"Content"),t()(),a(87,"td")(88,"td"),t(),n(89,"tr")(90,"td")(91,"code"),e(92,"--padding-content"),t()(),n(93,"td"),e(94,"Espa\xE7amento do conte\xFAdo"),t(),n(95,"td")(96,"code"),e(97,"var(--spacing-xs) var(--spacing-sm)"),t()()()()()(),n(98,"div",8)(99,"h4",9),e(100,"Seletor"),t(),n(101,"pre",10),e(102,`<po-page-job-scheduler
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
`),t()(),n(103,"h4",11),e(104,"Propriedades"),t(),n(105,"table",12)(106,"tr",13)(107,"th",14),e(108,"Nome"),t(),n(109,"th",14),e(110,"Tipo"),t(),n(111,"th",14),e(112,"Padr\xE3o"),t(),n(113,"th",14),e(114,"Descri\xE7\xE3o"),t()(),n(115,"tr",15)(116,"td",16)(117,"div",17)(118,"span",18),e(119," p-before-send"),a(120,"br"),t()()(),n(121,"td",19)(122,"code",20),e(123,"(model: PoJobSchedulerInternal) => PoJobSchedulerInternal"),t()(),n(124,"td",21),e(125,"-"),t(),n(126,"td",22)(127,"em")(128,"strong"),e(129,"(opcional)"),t()(),n(130,"p"),e(131,`Fun\xE7\xE3o chamada ap\xF3s realizar a confirma\xE7\xE3o da execu\xE7\xE3o no PoPageJobScheduler.
Permite alterar os valores do model do PoPageJobScheduler antes de realizar o envio para a Api.`),t(),n(132,"blockquote")(133,"p"),e(134,"Deve retornar um objeto do tipo "),n(135,"code"),e(136,"PoPageJobScheduler"),t(),e(137," para ser adicionado ao model do PoPageJobScheduler."),t()(),n(138,"blockquote")(139,"p"),e(140,"Ao ser disparada, a mesma receber\xE1 por par\xE2metro o model do PoPageJobScheduler de interface "),n(141,"code"),e(142,"PoJobSchedulerInternal"),t(),e(143,"."),t()(),n(144,"p"),e(145,"O contexto da fun\xE7\xE3o que ser\xE1 chamada, ser\xE1 o mesmo que o do "),n(146,"code"),e(147,"PoPageJobScheduler"),t(),e(148,`, ent\xE3o para poder alterar
para o contexto do componente que o est\xE1 utilizando, pode ser utilizado a propriedade `),n(149,"code"),e(150,"bind"),t(),e(151,` do Javascript.
Por exemplo, para a fun\xE7\xE3o `),n(152,"code"),e(153,"beforeSend"),t(),e(154,":"),t(),n(155,"pre")(156,"code"),e(157,`<po-page-job-scheduler [p-service-api]="serviceApi" [p-parameters]="params" [p-before-send]="beforeSend.bind(this)">
...
</po-page-job-scheduler>
`),t()()()(),n(158,"tr",15)(159,"td",16)(160,"div",17)(161,"span",18),e(162," p-breadcrumb"),a(163,"br"),t()()(),n(164,"td",19)(165,"code",23),e(166,"PoBreadcrumb"),t()(),n(167,"td",21),e(168,"-"),t(),n(169,"td",22)(170,"em")(171,"strong"),e(172,"(opcional)"),t()(),n(173,"p"),e(174,"Objeto com as propriedades do breadcrumb."),t()()(),n(175,"tr",15)(176,"td",16)(177,"div",17)(178,"span",18),e(179," p-components-size"),a(180,"br"),t()()(),n(181,"td",19)(182,"code",24),e(183,"string"),t()(),n(184,"td",21)(185,"p")(186,"code"),e(187,"medium"),t()()(),n(188,"td",22)(189,"em")(190,"strong"),e(191,"(opcional)"),t()(),n(192,"p"),e(193,"Define o tamanho dos componentes de formul\xE1rio no template:"),t(),n(194,"ul")(195,"li")(196,"code"),e(197,"small"),t(),e(198,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(199,"li")(200,"code"),e(201,"medium"),t(),e(202,": aplica a medida medium de cada componente."),t()(),n(203,"blockquote")(204,"p"),e(205,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(206,"code"),e(207,"medium"),t(),e(208,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(209,"a",25),e(210,"po-theme"),t(),e(211,"."),t()()()(),n(212,"tr",15)(213,"td",16)(214,"div",26)(215,"span",27),e(216," (p-error)"),a(217,"br"),t()()(),n(218,"td",19)(219,"code",28),e(220,"EventEmitter"),t()(),n(221,"td",21),e(222,"-"),t(),n(223,"td",22)(224,"em")(225,"strong"),e(226,"(opcional)"),t()(),n(227,"p"),e(228,`Evento disparado ao ocorrer um erro impossibilitando a conclus\xE3o do agendamento.
Para este evento ser\xE1 passado como par\xE2metro os detalhes do erro.`),t()()(),n(229,"tr",15)(230,"td",16)(231,"div",17)(232,"span",18),e(233," p-parameters"),a(234,"br"),t()()(),n(235,"td",19)(236,"code",29),e(237,"Array<PoDynamicFormField>"),t()(),n(238,"td",21),e(239,"-"),t(),n(240,"td",22)(241,"p"),e(242,"Par\xE2metros que ser\xE3o utilizados para cria\xE7\xE3o e edi\xE7\xE3o dos agendamentos."),t(),n(243,"p"),e(244,"Ao utilizar esta propriedade, o componente n\xE3o buscar\xE1 automaticamente os par\xE2metros da API e o campo para preenchimento do processo n\xE3o ser\xE1 exibido."),t()()(),n(245,"tr",15)(246,"td",16)(247,"div",17)(248,"span",18),e(249," p-service-api"),a(250,"br"),t()()(),n(251,"td",19)(252,"code",24),e(253,"string"),t()(),n(254,"td",21),e(255,"-"),t(),n(256,"td",22)(257,"p"),e(258,"Endpoint usado pelo componente para busca dos processos e par\xE2metros que ser\xE3o utilizados para cria\xE7\xE3o e edi\xE7\xE3o dos agendamentos."),t(),n(259,"h4"),e(260,"Processos"),t(),n(261,"p"),e(262,`Os processos s\xE3o as tarefas que estar\xE3o dispon\xEDveis para o usu\xE1rio poder fazer os agendamentos.
Ao inicializar o componente, ser\xE1 feito uma requisi\xE7\xE3o `),n(263,"code"),e(264,"GET"),t(),e(265," para o endpoint "),n(266,"code"),e(267,"{service-api}/processes"),t(),e(268,`, para buscar
essa lista de processos.`),t(),n(269,"p"),e(270,"Este endpoint "),n(271,"code"),e(272,"{service-api}/processes"),t(),e(273," deve retornar uma lista de objetos que seguem a defini\xE7\xE3o de dados abaixo:"),t(),n(274,"pre")(275,"code"),e(276,`GET {service-api}/processes
`),t()(),n(277,"pre")(278,"code"),e(279,`{
  items: [
    { "processID": "ac4f", "description": "Gerar folha de pagamento" },
    { "processID": "df6l", "description": "Relat\xF3rio de imposto a recolher" },
    { "processID": "dk3p", "description": "T\xEDtulos em aberto" },
  ]
}
`),t()(),n(280,"p"),e(281,"Desta forma ser\xE1 renderizado um componente para selecionar o processo e/ou filtr\xE1-los."),t(),n(282,"p"),e(283,`Para realizar o filtro de busca do processo, ser\xE1 feita uma requisi\xE7\xE3o enviando o conte\xFAdo digitado na busca atrav\xE9s do
par\xE2metro `),n(284,"code"),e(285,"search"),t(),e(286,". Da seguinte forma:"),t(),n(287,"pre")(288,"code"),e(289,`GET {service-api}/processes?search=relatorio
`),t()(),n(290,"blockquote")(291,"p"),e(292,"Veja mais sobre pagina\xE7\xE3o e filtros no "),n(293,"a",6),e(294,"Guia de implementa\xE7\xE3o de APIs"),t(),e(295,`.
Caso seja informada a propriedade `),n(296,"code"),e(297,"p-parameters"),t(),e(298," n\xE3o ser\xE3o realizadas as requisi\xE7\xF5es de processos e nem de parametros automaticamente."),t()(),n(299,"p"),e(300,`Tamb\xE9m \xE9 poss\xEDvel fazer um agendamento de um processo espec\xEDfico, sem que seja necess\xE1rio um endpoint para busca desses
processos. Ent\xE3o, caso o endpoint `),n(301,"code"),e(302,"{service-api}/processes"),t(),e(303,` n\xE3o seja v\xE1lido, ser\xE1 apresentado um campo de entrada de
texto para o usu\xE1rio informar diretamente
o `),n(304,"strong"),e(305,"identificador do processo - "),n(306,"code"),e(307,"processID"),t()(),e(308," e ao salvar ser\xE1 enviado um "),n(309,"code"),e(310,"POST"),t(),e(311," para o endpoint difinido "),n(312,"code"),e(313,"serviceApi"),t(),e(314," conforme abaixo:"),t(),n(315,"pre")(316,"code"),e(317,`POST {service-api}
`),t()(),n(318,"p")(319,"em"),e(320,"Request payload"),t(),e(321," - estrutura de dados enviada no corpo da requisi\xE7\xE3o conforme interface "),n(322,"code"),e(323,"PoJobScheduler"),t(),e(324,":"),t(),n(325,"pre")(326,"code"),e(327,`{
  "daily": { "hour": 10, "minute": 12 },
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "processID": "ac0405"
  ...
}
`),t()(),n(328,"p"),e(329,"Caso seja necess\xE1rio informar par\xE2metros e adicionar configura\xE7\xF5es no processo selecionado, ser\xE1 realizado um "),n(330,"code"),e(331,"GET"),t(),e(332,`
como exemplificado abaixo. Os par\xE2metros devem retornar uma lista de objetos que seguem a interface
`),n(333,"a",30),e(334,"PoDynamicFormField"),t(),e(335,". Por\xE9m, caso utilizar a propriedade "),n(336,"code"),e(337,"p-parameters"),t(),e(338,` o componente n\xE3o
realizar\xE1 a busca autom\xE1tica e o campo de processos n\xE3o ser\xE1 exibido.`),t(),n(339,"pre")(340,"code"),e(341,`GET {service-api}/processes/:id/parameters
...
{
  items: [
    { "property": "vencimento", type: "date" },
    { "property": "imposto-retido", "label": "Imposto Retido", type: "boolean" }
  ]
}
`),t()(),n(342,"h4"),e(343,"Salvar e Atualizar"),t(),n(344,"p"),e(345,"Para salvar o agendamento, ser\xE1 feita uma requisi\xE7\xE3o de cria\xE7\xE3o, passando os valores preenchidos pelo usu\xE1rio via "),n(346,"em"),e(347,"payload"),t(),e(348,`.
Abaixo uma requisi\xE7\xE3o `),n(349,"code"),e(350,"POST"),t(),e(351," disparada, onde as propriedades do "),n(352,"em"),e(353,"Job Scheduler"),t(),e(354," foram preenchidas:"),t(),n(355,"pre")(356,"code"),e(357,`POST {service-api}
`),t()(),n(358,"p")(359,"em"),e(360,"Request payload"),t(),e(361," - estrutura de dados enviada no corpo da requisi\xE7\xE3o conforme interface "),n(362,"code"),e(363,"PoJobScheduler"),t(),e(364,":"),t(),n(365,"pre")(366,"code"),e(367,`{
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "monthly": { "day": 1, "hour": 10, "minute": 0 },
  "processID": "ac0405",
  "rangeExecutions: { "frequency": { "type": "hour", "value": 2 }, "rangeLimit": { "hour": 18, "minute": 0, "day": 20 } }
}
`),t()(),n(368,"p"),e(369,"Caso queira que o componente carregue um agendamento j\xE1 existente, deve ser inclu\xEDdo um par\xE2metro na rota chamado "),n(370,"code"),e(371,"id"),t(),e(372,"."),t(),n(373,"p"),e(374,"Exemplo de configura\xE7\xE3o de rota:"),t(),n(375,"pre")(376,"code"),e(377,`RouterModule.forRoot([
  ...
  { path: 'edit/:id', component: ExampleJobSchedulerComponent },
  ...
],
`),t()(),n(378,"p"),e(379,"Baseado nisso, na inicializa\xE7\xE3o do template ser\xE1 disparado uma requisi\xE7\xE3o para buscar o recurso que ser\xE1 editado."),t(),n(380,"pre")(381,"code"),e(382,`GET {service-api}/{id}
`),t()(),n(383,"p"),e(384,"Ao atualizar o agendamento, ser\xE1 disparado um "),n(385,"code"),e(386,"PUT"),t(),e(387,` com os dados preenchidos.
Veja abaixo uma requisi\xE7\xE3o `),n(388,"code"),e(389,"PUT"),t(),e(390," disparada, onde a propriedade "),n(391,"em"),e(392,"recurrent"),t(),e(393," e "),n(394,"em"),e(395,"daily"),t(),e(396," foram atualizadas:"),t(),n(397,"pre")(398,"code"),e(399,`PUT {service-api}/{id}
`),t()(),n(400,"p")(401,"em"),e(402,"Request payload"),t(),e(403," - estrutura de dados enviada no corpo da requisi\xE7\xE3o conforme interface "),n(404,"code"),e(405,"PoJobScheduler"),t(),e(406,":"),t(),n(407,"pre")(408,"code"),e(409,`{
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "processID": "ac0405",
  "monthly": { "day": 1, "hour": 10, "minute": 0 },
  "processID": "ac0405",
  "rangeExecutions: { "frequency": { "type": "hour", "value": 2 }, "rangeLimit": { "hour": 18, "minute": 0, "day": 20 } }
}
`),t()()()(),n(410,"tr",15)(411,"td",16)(412,"div",17)(413,"span",18),e(414," p-step-execution-last"),a(415,"br"),t()()(),n(416,"td",19)(417,"code",31),e(418,"boolean"),t()(),n(419,"td",21),e(420,"-"),t(),n(421,"td",22)(422,"em")(423,"strong"),e(424,"(opcional)"),t()(),n(425,"p"),e(426,"Define se o step "),n(427,"code"),e(428,"Agendamento"),t(),e(429," deve ser exibido como o \xFAltimo na sequ\xEAncia de steps"),t(),n(430,"blockquote")(431,"p"),e(432,"Aplic\xE1vel apenas quando utilizado "),n(433,"code"),e(434,"PoJobSchedulerParametersTemplateDirective"),t()()()()(),n(435,"tr",15)(436,"td",16)(437,"div",17)(438,"span",18),e(439," p-orientation"),a(440,"br"),t()()(),n(441,"td",19)(442,"code",32),e(443,"PoStepperOrientation"),t()(),n(444,"td",21),e(445,"-"),t(),n(446,"td",22)(447,"em")(448,"strong"),e(449,"(opcional)"),t()(),n(450,"p"),e(451,"Define a orienta\xE7\xE3o de exibi\xE7\xE3o do "),n(452,"code"),e(453,"po-stepper"),t(),e(454,"."),t(),n(455,"blockquote")(456,"p"),e(457,"Quando n\xE3o utilizada, segue o comportamento com base nas dimens\xF5es da tela."),t()(),n(458,"blockquote")(459,"p"),e(460,"Veja os valores v\xE1lidos no "),n(461,"em"),e(462,"enum"),t(),n(463,"a",33),e(464,"PoStepperOrientation"),t(),e(465,"."),t()()()(),n(466,"tr",15)(467,"td",16)(468,"div",26)(469,"span",27),e(470," (p-success)"),a(471,"br"),t()()(),n(472,"td",19)(473,"code",28),e(474,"EventEmitter"),t()(),n(475,"td",21),e(476,"-"),t(),n(477,"td",22)(478,"em")(479,"strong"),e(480,"(opcional)"),t()(),n(481,"p"),e(482,"Evento disparado ao concluir o processo de agendamento com sucesso."),t()()(),n(483,"tr",15)(484,"td",16)(485,"div",17)(486,"span",18),e(487," p-title"),a(488,"br"),t()()(),n(489,"td",19)(490,"code",24),e(491,"string"),t()(),n(492,"td",21),e(493,"-"),t(),n(494,"td",22)(495,"p"),e(496,"T\xEDtulo da p\xE1gina."),t()()()(),n(497,"h3"),e(498,"Interfaces"),t(),n(499,"h4",34)(500,"code",5),e(501,"PoJobScheduler"),t()(),n(502,"div",2)(503,"p"),e(504,"Estrutura do "),n(505,"em"),e(506,"payload"),t(),e(507," enviado nas requisi\xE7\xF5es para salvar e/ou atualizar as tarefas do "),n(508,"em"),e(509,"Job Scheduler"),t(),e(510,"."),t()(),n(511,"h4",11),e(512,"Propriedades"),t(),n(513,"table",12)(514,"tr",13)(515,"th",14),e(516,"Nome"),t(),n(517,"th",14),e(518,"Tipo"),t(),n(519,"th",14),e(520,"Descri\xE7\xE3o"),t()(),n(521,"tr",15)(522,"td",16)(523,"div",17)(524,"span",18),e(525," daily"),a(526,"br"),t()()(),n(527,"td",19)(528,"code",35),e(529,`{ hour: number; minute: number;
}`),t()(),n(530,"td",22)(531,"em")(532,"strong"),e(533,"(opcional)"),t()(),n(534,"p"),e(535,"Define uma repeti\xE7\xE3o di\xE1ria."),t()()(),n(536,"tr",15)(537,"td",16)(538,"div",17)(539,"span",18),e(540," executionParameter"),a(541,"br"),t()()(),n(542,"td",19)(543,"code",36),e(544,"object"),t()(),n(545,"td",22)(546,"em")(547,"strong"),e(548,"(opcional)"),t()(),n(549,"p"),e(550,"Objeto contendo os nomes das propriedades dos par\xE2metros e os valores preenchidos pelo usu\xE1rio."),t()()(),n(551,"tr",15)(552,"td",16)(553,"div",17)(554,"span",18),e(555," firstExecution"),a(556,"br"),t()()(),n(557,"td",19)(558,"code",24),e(559,"string"),t()(),n(560,"td",22)(561,"em")(562,"strong"),e(563,"(opcional)"),t()(),n(564,"p"),e(565,"Data da primeira execu\xE7\xE3o."),t()()(),n(566,"tr",15)(567,"td",16)(568,"div",17)(569,"span",18),e(570," monthly"),a(571,"br"),t()()(),n(572,"td",19)(573,"code",37),e(574,`{ day: number; hour: number; minute: number;
}`),t()(),n(575,"td",22)(576,"em")(577,"strong"),e(578,"(opcional)"),t()(),n(579,"p"),e(580,"Define uma repeti\xE7\xE3o mensal."),t()()(),n(581,"tr",15)(582,"td",16)(583,"div",17)(584,"span",18),e(585," processID"),a(586,"br"),t()()(),n(587,"td",19)(588,"code",24),e(589,"string"),t()(),n(590,"td",22)(591,"p"),e(592,"Identificador do processo."),t()()(),n(593,"tr",15)(594,"td",16)(595,"div",17)(596,"span",18),e(597," recurrent"),a(598,"br"),t()()(),n(599,"td",19)(600,"code",31),e(601,"boolean"),t()(),n(602,"td",22)(603,"em")(604,"strong"),e(605,"(opcional)"),t()(),n(606,"p"),e(607,"Permite uma execu\xE7\xE3o recorrente."),t()()(),n(608,"tr",15)(609,"td",16)(610,"div",17)(611,"span",18),e(612," weekly"),a(613,"br"),t()()(),n(614,"td",19)(615,"code",38),e(616,`{ daysOfWeek: Array<string>; hour: number; minute: number;
}`),t()(),n(617,"td",22)(618,"em")(619,"strong"),e(620,"(opcional)"),t()(),n(621,"p"),e(622,"Define uma repeti\xE7\xE3o semanal."),t()()()()())},dependencies:[x],encapsulation:2})}return i})();var $=(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=2;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(o){return new(o||i)(J(q),J(V))};static \u0275cmp=s({type:i,selectors:[["ng-component"]],standalone:!1,decls:7,vars:4,consts:[["p-title","Page Job Scheduler",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,m){o&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),p("p-click",function(){return m.changeTab("doc")}),a(3,"sample-po-page-job-scheduler-doc"),t(),n(4,"po-tab",3),p("p-click",function(){return m.changeTab("web")}),a(5,"sample-po-page-job-scheduler-background-process-view")(6,"sample-po-page-job-scheduler-directives-view"),t()()()),o&2&&(l("p-actions",m.actions),d(2),l("p-active",m.activeTab==="doc"),d(2),l("p-hide",m.hidePoWebSample)("p-active",m.activeTab==="web"))},dependencies:[B,S,b,N,U,X],encapsulation:2})}return i})();var de=[{path:"",component:$}],Q=(()=>{class i{static \u0275fac=function(o){return new(o||i)};static \u0275mod=g({type:i});static \u0275inj=h({imports:[F.forChild(de),F]})}return i})();var Fe=(()=>{class i{static \u0275fac=function(o){return new(o||i)};static \u0275mod=g({type:i});static \u0275inj=h({imports:[H,Q]})}return i})();export{Fe as DocPoPageJobSchedulerModule};
