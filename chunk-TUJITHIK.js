import{g as P,o as g,p as M}from"./chunk-SZMGPBRK.js";import{Ab as S,nb as N,zb as x}from"./chunk-OTVKLKYF.js";import{$a as T,Aa as l,Cb as h,Da as b,La as i,Ma as t,N as v,Na as n,Sa as s,Uc as k,Wc as F,Yc as C,_a as w,ab as A,cb as e,eb as f,ja as p,ka as D,kb as q,lb as E,qa as m,ra as y}from"./chunk-KZJHT32G.js";var V=()=>({property:"id",label:"User ID"}),G=a=>[a],B=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["sample-po-page-dynamic-edit-basic"]],standalone:!1,decls:1,vars:4,consts:[["p-title","Po Page Dynamic Edit","p-service-api","https://po-sample-api.onrender.com/v1/people",3,"p-fields"]],template:function(o,d){o&1&&n(0,"po-page-dynamic-edit",0),o&2&&l("p-fields",E(2,G,q(1,V)))},dependencies:[P],encapsulation:2})}return a})();var W=a=>({"docs-sample-code-tabs":a}),L=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["sample-po-page-dynamic-edit-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,d){o&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Page Dynamic Edit Basic"),t(),i(4,"a",2),s("click",function(){return d.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-dynamic-edit-basic/sample-po-page-dynamic-edit-basic.component.html"),t(),i(13,"pre",7),e(14,`<po-page-dynamic-edit
  p-title="Po Page Dynamic Edit"
  [p-fields]="[{ property: 'id', label: 'User ID' }]"
  p-service-api="https://po-sample-api.onrender.com/v1/people"
>
</po-page-dynamic-edit>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-dynamic-edit-basic/sample-po-page-dynamic-edit-basic.component.ts"),t(),i(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-page-dynamic-edit-basic',
  templateUrl: './sample-po-page-dynamic-edit-basic.component.html',
  standalone: false
})
export class SamplePoPageDynamicEditBasicComponent {}
`),t()()()()(),i(21,"div",10),n(22,"sample-po-page-dynamic-edit-basic"),t(),n(23,"hr")),o&2&&(p(5),b("po-icon "+d.sampleCodeButtonIcon),p(),f(" ",d.sampleCodeButtonLabel,""),p(),l("ngClass",E(4,W,d.hideSampleCodeTabs)))},dependencies:[h,g,x,S,B],encapsulation:2})}return a})();var J=["dynamicEdit"],j=(()=>{class a{dynamicEdit;serviceApi="https://po-sample-api.onrender.com/v1/people";actions={save:"/documentation/po-page-dynamic-detail",saveNew:"/documentation/po-page-dynamic-edit"};literals={pageActionCancel:"Descartar",pageActionSave:"Gravar",pageActionSaveNew:"Gravar e novo"};breadcrumb={items:[{label:"Home",link:"/"},{label:"People",link:"/documentation/po-page-dynamic-table"},{label:"Edit"}]};fields=[{property:"status",divider:"Status",options:["active","inactive"]},{property:"id",label:"User ID",key:!0,required:!0},{property:"name",divider:"Personal data",required:!0},{property:"nickname"},{property:"email",label:"E-mail"},{property:"birthdate",label:"Birth date",type:"date",errorMessage:"Invalid date.",help:"Enter or select a valid date.",additionalHelpTooltip:"Please enter a valid date in the format MMDDYYYY.",keydown:this.onKeyDown.bind(this,"birthdate")},{property:"genre",options:["female","male","others"],gridLgColumns:6},{property:"nationality"},{property:"birthPlace",label:"Place of birth"},{property:"graduation"},{property:"father",label:"Father`s name",divider:"Relationship",gridMdColumns:4,gridLgColumns:4},{property:"mother",label:"Mother`s name",offsetMdColumns:4,offsetLgColumns:4,gridMdColumns:4,gridLgColumns:4},{property:"street",divider:"Address",gridColumns:4},{property:"city",optionsService:"https://po-sample-api.onrender.com/v1/cities?transform=true",offsetColumns:4,gridColumns:4}];onKeyDown(r,o){o.code==="F9"&&this.dynamicEdit.showAdditionalHelp(r)}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["sample-po-page-dynamic-edit-user"]],viewQuery:function(o,d){if(o&1&&w(J,7),o&2){let u;T(u=A())&&(d.dynamicEdit=u.first)}},standalone:!1,decls:2,vars:6,consts:[["dynamicEdit",""],["p-title","User edit",3,"p-auto-router","p-actions","p-breadcrumb","p-fields","p-literals","p-service-api"]],template:function(o,d){o&1&&n(0,"po-page-dynamic-edit",1,0),o&2&&l("p-auto-router",!0)("p-actions",d.actions)("p-breadcrumb",d.breadcrumb)("p-fields",d.fields)("p-literals",d.literals)("p-service-api",d.serviceApi)},dependencies:[P],encapsulation:2})}return a})();var Z=a=>({"docs-sample-code-tabs":a}),O=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["sample-po-page-dynamic-edit-user-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,d){o&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Page Dynamic Edit - User"),t(),i(4,"a",2),s("click",function(){return d.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-dynamic-edit-user/sample-po-page-dynamic-edit-user.component.html"),t(),i(13,"pre",7),e(14,`<po-page-dynamic-edit
  #dynamicEdit
  [p-auto-router]="true"
  p-title="User edit"
  [p-actions]="actions"
  [p-breadcrumb]="breadcrumb"
  [p-fields]="fields"
  [p-literals]="literals"
  [p-service-api]="serviceApi"
>
</po-page-dynamic-edit>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-dynamic-edit-user/sample-po-page-dynamic-edit-user.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, ViewChild } from '@angular/core';

import { PoBreadcrumb, PoDynamicFormField } from '@po-ui/ng-components';

import { PoPageDynamicEditActions, PoPageDynamicEditComponent, PoPageDynamicEditLiterals } from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-page-dynamic-edit-user',
  templateUrl: './sample-po-page-dynamic-edit-user.component.html',
  standalone: false
})
export class SamplePoPageDynamicEditUserComponent {
  @ViewChild('dynamicEdit', { static: true }) dynamicEdit: PoPageDynamicEditComponent;

  public readonly serviceApi = 'https://po-sample-api.onrender.com/v1/people';

  public readonly actions: PoPageDynamicEditActions = {
    save: '/documentation/po-page-dynamic-detail',
    saveNew: '/documentation/po-page-dynamic-edit'
  };

  public readonly literals: PoPageDynamicEditLiterals = {
    pageActionCancel: 'Descartar',
    pageActionSave: 'Gravar',
    pageActionSaveNew: 'Gravar e novo'
  };

  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', link: '/' },
      { label: 'People', link: '/documentation/po-page-dynamic-table' },
      { label: 'Edit' }
    ]
  };

  public readonly fields: Array<PoDynamicFormField> = [
    { property: 'status', divider: 'Status', options: ['active', 'inactive'] },
    { property: 'id', label: 'User ID', key: true, required: true },
    { property: 'name', divider: 'Personal data', required: true },
    { property: 'nickname' },
    { property: 'email', label: 'E-mail' },
    {
      property: 'birthdate',
      label: 'Birth date',
      type: 'date',
      errorMessage: 'Invalid date.',
      help: 'Enter or select a valid date.',
      additionalHelpTooltip: 'Please enter a valid date in the format MMDDYYYY.',
      keydown: this.onKeyDown.bind(this, 'birthdate')
    },
    { property: 'genre', options: ['female', 'male', 'others'], gridLgColumns: 6 },
    { property: 'nationality' },
    { property: 'birthPlace', label: 'Place of birth' },
    { property: 'graduation' },
    {
      property: 'father',
      label: 'Father\`s name',
      divider: 'Relationship',
      gridMdColumns: 4,
      gridLgColumns: 4
    },
    {
      property: 'mother',
      label: 'Mother\`s name',
      offsetMdColumns: 4,
      offsetLgColumns: 4,
      gridMdColumns: 4,
      gridLgColumns: 4
    },
    {
      property: 'street',
      divider: 'Address',
      gridColumns: 4
    },
    {
      property: 'city',
      optionsService: 'https://po-sample-api.onrender.com/v1/cities?transform=true',
      offsetColumns: 4,
      gridColumns: 4
    }
  ];

  onKeyDown(property: string, event: KeyboardEvent): void {
    if (event.code === 'F9') {
      this.dynamicEdit.showAdditionalHelp(property);
    }
  }
}
`),t()()()()(),i(21,"div",10),n(22,"sample-po-page-dynamic-edit-user"),t(),n(23,"hr")),o&2&&(p(5),b("po-icon "+d.sampleCodeButtonIcon),p(),f(" ",d.sampleCodeButtonLabel,""),p(),l("ngClass",E(4,Z,d.hideSampleCodeTabs)))},dependencies:[h,g,x,S,j],encapsulation:2})}return a})();var _=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["sample-po-page-dynamic-edit-doc"]],standalone:!1,decls:1474,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-page-dynamic-edit#po-page-dynamic-edit-metadata"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoPageDynamicEditActions"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<PoPageDynamicEditField>"],["pan","",1,"docs-api-property-type","PoPageDynamicEditLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","(()","=>","PoPageDynamicEditOptions)"],["pan","",1,"docs-api-property-type","((model:","any)","=>","any)"],["pan","",1,"docs-api-property-type","((model:","any)","=>","Observable<any>)"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(()","=>","PoPageDynamicEditBeforeCancel)"],["href","https://po-ui.io/guides/api#successMessages"],["pan","",1,"docs-api-property-type","((resource:","any,","id:","string)","=>","PoPageDynamicEditBeforeSave)"],["pan","",1,"docs-api-property-type","((resource:","any,","id:","string)","=>","PoPageDynamicEditBeforeSaveNew)"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","((resource:","any,","id:","string)","=>","void)"],["pan","",1,"docs-api-property-type","((resource:","any,","id?:","string)","=>","void)"],["pan","",1,"docs-api-property-type","any"],["href","https://po-ui.io/documentation/po-dynamic-form"],["id","po-page-dynamic-edit-metadata"],["pan","",1,"docs-api-property-type","number"]],template:function(o,d){o&1&&(i(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoPageDynamicEditModule } from '@po-ui/ng-templates';"),t()(),i(4,"div",2)(5,"p"),e(6,"M\xF3dulo do template do po-page-dynamic-detail."),t()(),i(7,"h3",3),e(8,"Componente"),t(),i(9,"h4",4)(10,"code",5),e(11,"PoPageDynamicEditComponent"),t()(),i(12,"div",2)(13,"p"),e(14,"O "),i(15,"code"),e(16,"po-page-dynamic-edit"),t(),e(17,` \xE9 uma p\xE1gina que pode servir para editar ou criar novos registros,
o mesmo tamb\xE9m suporta metadados conforme especificado na documenta\xE7\xE3o.`),t(),i(18,"h3"),e(19,"Utiliza\xE7\xE3o via rota"),t(),i(20,"p"),e(21,"Ao utilizar as rotas para inicializar o template, o "),i(22,"code"),e(23,"page-dynamic-edit"),t(),e(24,` disponibiliza propriedades que devem ser fornecidas no arquivo de configura\xE7\xE3o de rotas da aplica\xE7\xE3o, para
poder especificar o endpoint dos dados e dos metadados que ser\xE3o carregados na inicializa\xE7\xE3o.`),t(),i(25,"p"),e(26,"Exemplo de utiliza\xE7\xE3o:"),t(),i(27,"p"),e(28,"Arquivo de configura\xE7\xE3o de rotas da aplica\xE7\xE3o: "),i(29,"code"),e(30,"app-routing.module.ts"),t()(),i(31,"pre")(32,"code"),e(33,`const routes: Routes = [
{
  path: 'people',
  component: PoPageDynamicEditComponent,
  data: {
    serviceApi: 'http://localhost:3000/v1/people', // endpoint dos dados
    serviceMetadataApi: 'http://localhost:3000/v1/metadata', // endpoint dos metadados utilizando o m\xE9todo HTTP Get
    serviceLoadApi: 'http://localhost:3000/load-metadata' // endpoint de customiza\xE7\xF5es dos metadados utilizando o m\xE9todo HTTP Post
  }
 },
 {
  path: 'home',
  component: HomeExampleComponent
 }
];
`),t()(),i(34,"p"),e(35,`O componente primeiro ir\xE1 carregar o metadado da rota definida na propriedade serviceMetadataApi
e depois ir\xE1 buscar da rota definida na propriedade serviceLoadApi.`),t(),i(36,"p"),e(37,`A requisi\xE7\xE3o dos metadados \xE9 feita na inicializa\xE7\xE3o do template para buscar os metadados da p\xE1gina passando o
tipo do metadado esperado e a vers\xE3o cacheada pelo browser.`),t(),i(38,"blockquote")(39,"p"),e(40,`Caso o servidor retornar um erro ao recuperar os metadados, ser\xE3o repassados os metadados salvos em cache,
se o cache n\xE3o existir ser\xE1 disparada uma notifica\xE7\xE3o.`),t()(),i(41,"p"),e(42,"Para carregar com um recurso j\xE1 existente, deve-se ser inclu\xEDdo um par\xE2metro na rota chamado "),i(43,"code"),e(44,"id"),t(),e(45,":"),t(),i(46,"pre")(47,"code"),e(48,`{
  path: 'people/:id',
  component: PoPageDynamicEditComponent,
  data: {
    serviceApi: 'http://localhost:3000/v1/people', // endpoint dos dados
    serviceMetadataApi: 'http://localhost:3000/v1/metadata', // endpoint dos metadados
    serviceLoadApi: 'http://localhost:3000/load-metadata' // endpoint de customiza\xE7\xF5es dos metadados
  }
}
`),t()(),i(49,"p"),e(50,`A requisi\xE7\xE3o dos metadados \xE9 feita na inicializa\xE7\xE3o do template para buscar os metadados da p\xE1gina passando o
tipo do metadado esperado e a vers\xE3o cacheada pelo browser.`),t(),i(51,"p"),e(52,`O formato esperado na resposta da requisi\xE7\xE3o est\xE1 especificado na interface
`),i(53,"a",6),e(54,"PoPageDynamicEditMetadata"),t(),e(55,". Por exemplo:"),t(),i(56,"pre")(57,"code"),e(58,` {
  version: 1,
  title: 'Person edit',
  fields: [
    { property: 'id', key: true, disabled: true },
    { property: 'status' },
    { property: 'name' },
    { property: 'nickname' },
    { property: 'birthdate', label: 'Birth date' },
    { property: 'genre' },
    { property: 'city' },
    { property: 'country' }
  ]
}
`),t()(),i(59,"blockquote")(60,"p"),e(61,"Caso o endpoint dos metadados n\xE3o seja especificado, ser\xE1 feito uma requisi\xE7\xE3o utilizando o "),i(62,"code"),e(63,"serviceApi"),t(),e(64," da seguinte forma:"),t()(),i(65,"pre")(66,"code"),e(67,`GET {end-point}/metadata?type=edit&version={version}
`),t()(),i(68,"h4"),e(69,"Tokens customiz\xE1veis"),t(),i(70,"table")(71,"thead")(72,"tr")(73,"th"),e(74,"Propriedade"),t(),i(75,"th"),e(76,"Descri\xE7\xE3o"),t(),i(77,"th"),e(78,"Valor Padr\xE3o"),t()()(),i(79,"tbody")(80,"tr")(81,"td")(82,"strong"),e(83,"Header"),t()(),n(84,"td")(85,"td"),t(),i(86,"tr")(87,"td")(88,"code"),e(89,"--padding"),t()(),i(90,"td"),e(91,"Espa\xE7amento do header"),t(),i(92,"td")(93,"code"),e(94,"var(--spacing-xs) var(--spacing-md)"),t()()(),i(95,"tr")(96,"td")(97,"code"),e(98,"--gap"),t()(),i(99,"td"),e(100,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),t(),i(101,"td")(102,"code"),e(103,"var(--spacing-md)"),t()()(),i(104,"tr")(105,"td")(106,"code"),e(107,"--gap-actions"),t()(),i(108,"td"),e(109,"Espa\xE7amento entre as a\xE7\xF5es"),t(),i(110,"td")(111,"code"),e(112,"var(--spacing-xs)"),t()()(),i(113,"tr")(114,"td")(115,"code"),e(116,"--font-family"),t()(),i(117,"td"),e(118,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),t(),i(119,"td")(120,"code"),e(121,"var(--font-family-theme)"),t()()(),i(122,"tr")(123,"td")(124,"strong"),e(125,"Content"),t()(),n(126,"td")(127,"td"),t(),i(128,"tr")(129,"td")(130,"code"),e(131,"--padding-content"),t()(),i(132,"td"),e(133,"Espa\xE7amento do conte\xFAdo"),t(),i(134,"td")(135,"code"),e(136,"var(--spacing-xs) var(--spacing-sm)"),t()()()()()(),i(137,"div",7)(138,"h4",8),e(139,"Seletor"),t(),i(140,"pre",9),e(141,`<po-page-dynamic-edit
    p-actions="PoPageDynamicEditActions"
    p-auto-router="boolean"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    p-fields="Array<PoPageDynamicEditField>"
    p-literals="PoPageDynamicEditLiterals"
    p-notification-type="string"
    p-load="string | (() => PoPageDynamicEditOptions)"
    p-load-data="((model: any) => any) | ((model: any) => Observable<any>)"
    p-service-api="string"
    p-title="string" >
</po-page-dynamic-edit>
`),t()(),i(142,"h4",10),e(143,"Propriedades"),t(),i(144,"table",11)(145,"tr",12)(146,"th",13),e(147,"Nome"),t(),i(148,"th",13),e(149,"Tipo"),t(),i(150,"th",13),e(151,"Padr\xE3o"),t(),i(152,"th",13),e(153,"Descri\xE7\xE3o"),t()(),i(154,"tr",14)(155,"td",15)(156,"div",16)(157,"span",17),e(158," p-actions"),n(159,"br"),t()()(),i(160,"td",18)(161,"code",19),e(162,"PoPageDynamicEditActions"),t()(),i(163,"td",20),e(164,"-"),t(),i(165,"td",21)(166,"em")(167,"strong"),e(168,"(opcional)"),t()(),i(169,"p"),e(170,"A\xE7\xF5es da p\xE1gina."),t()()(),i(171,"tr",14)(172,"td",15)(173,"div",16)(174,"span",17),e(175," p-auto-router"),n(176,"br"),t()()(),i(177,"td",18)(178,"code",22),e(179,"boolean"),t()(),i(180,"td",20)(181,"p"),e(182,"false"),t()(),i(183,"td",21)(184,"em")(185,"strong"),e(186,"(opcional)"),t()(),i(187,"p"),e(188,`Cria automaticamente as rotas de edi\xE7\xE3o (novo/duplicate) e detalhes caso as a\xE7\xF5es
estejam definidas nas a\xE7\xF5es.`),t(),i(189,"blockquote")(190,"p"),e(191,"Para o correto funcionamento n\xE3o pode haver nenhum rota coringa ("),i(192,"code"),e(193,"**"),t(),e(194,") especificada."),t()()()(),i(195,"tr",14)(196,"td",15)(197,"div",16)(198,"span",17),e(199," p-breadcrumb"),n(200,"br"),t()()(),i(201,"td",18)(202,"code",23),e(203,"PoBreadcrumb"),t()(),i(204,"td",20),e(205,"-"),t(),i(206,"td",21)(207,"em")(208,"strong"),e(209,"(opcional)"),t()(),i(210,"p"),e(211,"Objeto com propriedades do breadcrumb."),t()()(),i(212,"tr",14)(213,"td",15)(214,"div",16)(215,"span",17),e(216," p-components-size"),n(217,"br"),t()()(),i(218,"td",18)(219,"code",24),e(220,"string"),t()(),i(221,"td",20)(222,"p")(223,"code"),e(224,"medium"),t()()(),i(225,"td",21)(226,"em")(227,"strong"),e(228,"(opcional)"),t()(),i(229,"p"),e(230,"Define o tamanho dos componentes de formul\xE1rio no template:"),t(),i(231,"ul")(232,"li")(233,"code"),e(234,"small"),t(),e(235,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(236,"li")(237,"code"),e(238,"medium"),t(),e(239,": aplica a medida medium de cada componente."),t()(),i(240,"blockquote")(241,"p"),e(242,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(243,"code"),e(244,"medium"),t(),e(245,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(246,"a",25),e(247,"po-theme"),t(),e(248,"."),t()()()(),i(249,"tr",14)(250,"td",15)(251,"div",16)(252,"span",17),e(253," p-fields"),n(254,"br"),t()()(),i(255,"td",18)(256,"code",26),e(257,"Array<PoPageDynamicEditField>"),t()(),i(258,"td",20),e(259,"-"),t(),i(260,"td",21)(261,"p"),e(262,"Lista dos campos usados na tabela e busca avan\xE7ada."),t()()(),i(263,"tr",14)(264,"td",15)(265,"div",16)(266,"span",17),e(267," p-literals"),n(268,"br"),t()()(),i(269,"td",18)(270,"code",27),e(271,"PoPageDynamicEditLiterals"),t()(),i(272,"td",20),e(273,"-"),t(),i(274,"td",21)(275,"em")(276,"strong"),e(277,"(opcional)"),t()(),i(278,"p"),e(279,"Objeto com as literais usadas no "),i(280,"code"),e(281,"po-page-dynamic-edit"),t(),e(282,"."),t(),i(283,"p"),e(284,`\xC9 possivel customizar passando um objeto com todas as literais dispon\xEDveis
ou passando apenas as literais que deseja customizar`),t(),i(285,"pre")(286,"code"),e(287,`const customLiterals: PoPageDynamicEditLiterals = {
  detailActionNew: 'Incluir',
  pageActionCancel: 'Descartar',
  pageActionSave: 'Gravar',
  pageActionSaveNew: 'Gravar e incluir',
  registerNotFound: 'Nenhum registro encontrado.',
  saveNotificationError: 'Campo(s) obrigat\xF3rio(s) sem preenchimento.',
  saveNotificationSuccessSave: 'Item salvo com sucesso.',
  saveNotificationSuccessUpdate: 'Item atualizado com sucesso.',
  saveNotificationWarning: 'Necess\xE1rio preencher o formul\xE1rio corretamente.'
};
`),t()(),i(288,"p"),e(289,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),t(),i(290,"pre")(291,"code"),e(292,`<po-page-dynamic-edit
  [p-literals]="customLiterals">
</po-page-dynamic-edit>
`),t()(),i(293,"blockquote")(294,"p"),e(295,"O valor padr\xE3o ser\xE1 traduzido de acordo com o idioma configurado no "),i(296,"a",28)(297,"code"),e(298,"PoI18nService"),t()(),e(299," ou "),i(300,"em"),e(301,"browser"),t(),e(302,"."),t()()()(),i(303,"tr",14)(304,"td",15)(305,"div",16)(306,"span",17),e(307," p-notification-type"),n(308,"br"),t()()(),i(309,"td",18)(310,"code",24),e(311,"string"),t()(),i(312,"td",20)(313,"p"),e(314,"warning"),t()(),i(315,"td",21)(316,"em")(317,"strong"),e(318,"(opcional)"),t()(),i(319,"p"),e(320,"Tipo da notifica\xE7\xE3o."),t(),i(321,"p"),e(322,"\xC9 possivel definir o tipo de notifica\xE7\xE3o que ser\xE1 exibido quando houver algum campo inv\xE1lido no formul\xE1rio."),t(),i(323,"pre")(324,"code"),e(325,`<po-page-dynamic-edit
  p-notification-type="warning">
</po-page-dynamic-edit>
`),t()(),i(326,"blockquote")(327,"p"),e(328,"Os valores aceitos s\xE3o 'warning' e 'error'."),t()()()(),i(329,"tr",14)(330,"td",15)(331,"div",16)(332,"span",17),e(333," p-load"),n(334,"br"),t()()(),i(335,"td",18)(336,"code",24),e(337,"string "),t(),i(338,"code",29),e(339," (() => PoPageDynamicEditOptions)"),t()(),i(340,"td",20),e(341,"-"),t(),i(342,"td",21)(343,"p"),e(344,"Fun\xE7\xE3o ou servi\xE7o que ser\xE1 executado na inicializa\xE7\xE3o do componente."),t(),i(345,"p"),e(346,"A propriedade aceita os seguintes tipos:"),t(),i(347,"ul")(348,"li")(349,"code"),e(350,"string"),t(),e(351,": "),i(352,"em"),e(353,"Endpoint"),t(),e(354," usado pelo componente para requisi\xE7\xE3o via "),i(355,"code"),e(356,"POST"),t(),e(357,"."),t(),i(358,"li")(359,"code"),e(360,"function"),t(),e(361,": M\xE9todo que ser\xE1 executado."),t()(),i(362,"p"),e(363,"O retorno desta fun\xE7\xE3o deve ser do tipo "),i(364,"code"),e(365,"PoPageDynamicEditOptions"),t(),e(366,`,
onde o usu\xE1rio poder\xE1 customizar novos campos, breadcrumb, title e actions`),t(),i(367,"p"),e(368,"Por exemplo:"),t(),i(369,"pre")(370,"code"),e(371,`getPageOptions(): PoPageDynamicEditOptions {
return {
  actions:
    { cancel: false, save: 'save/:id', saveNew: 'saveNew' },
  fields: [
    { property: 'idCard', gridColumns: 6 }
  ]
};
}
`),t()(),i(372,"p"),e(373,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),i(374,"code"),e(375,"bind"),t(),e(376,", por exemplo:"),t(),i(377,"pre")(378,"code"),e(379,`[p-load]="onLoadOptions.bind(this)"
`),t()()()(),i(380,"tr",14)(381,"td",15)(382,"div",16)(383,"span",17),e(384," p-load-data"),n(385,"br"),t()()(),i(386,"td",18)(387,"code",30),e(388,"((model: any) => any) "),t(),i(389,"code",31),e(390," ((model: any) => Observable<any>)"),t()(),i(391,"td",20),e(392,"-"),t(),i(393,"td",21)(394,"em")(395,"strong"),e(396,"(opcional)"),t()(),i(397,"p"),e(398,"Fun\xE7\xE3o que ser\xE1 executada ap\xF3s ser realizada a busca dos dados."),t(),i(399,"p"),e(400,"A propriedade aceita os seguintes tipos:"),t(),i(401,"ul")(402,"li")(403,"code"),e(404,"function"),t(),e(405,": M\xE9todo que ser\xE1 executado."),t()(),i(406,"p"),e(407,`Esta fun\xE7\xE3o passa por par\xE2metro o model e deve receb\xEA-lo de volta com as altera\xE7\xF5es.
Tamb\xE9m aceita o retorno de um Observable com o novo model.`),t(),i(408,"p"),e(409,"Por exemplo:"),t(),i(410,"pre")(411,"code"),e(412,`onLoadCustom(model) {
 return { ...model, customField: 'newValue' };
}
`),t()(),i(413,"p"),e(414,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),i(415,"code"),e(416,"bind"),t(),e(417,", por exemplo:"),t(),i(418,"pre")(419,"code"),e(420,`[p-load-data]="onLoadCustom.bind(this)"
`),t()()()(),i(421,"tr",14)(422,"td",15)(423,"div",16)(424,"span",17),e(425," p-service-api"),n(426,"br"),t()()(),i(427,"td",18)(428,"code",24),e(429,"string"),t()(),i(430,"td",20),e(431,"-"),t(),i(432,"td",21)(433,"p"),e(434,"Endpoint usado pelo template para requisi\xE7\xE3o do recurso que ser\xE1 exibido para edi\xE7\xE3o."),t(),i(435,"p"),e(436,"Para as a\xE7\xF5es de "),i(437,"code"),e(438,"save"),t(),e(439," e "),i(440,"code"),e(441,"saveNew"),t(),e(442,`, ser\xE1 feito uma requisi\xE7\xE3o de cria\xE7\xE3o nesse mesmo endpoint passando os valores
preenchidos pelo usu\xE1rio via payload.`),t(),i(443,"blockquote")(444,"p")(445,"code"),e(446,"POST {end-point}"),t()()(),i(447,"pre")(448,"code"),e(449,`<po-page-dynamic-edit
  [p-actions]="{ save: '/', saveNew: 'new' }"
  [p-fields]="[ { property: 'name' }, { property: 'city' } ]"
  p-service="/api/po-samples/v1/people"
  ...>
</po-page-dynamic-edit>
`),t()(),i(450,"p"),e(451,"Resquisi\xE7\xE3o disparada, onde a propriedade "),i(452,"code"),e(453,"name"),t(),e(454," e "),i(455,"code"),e(456,"city"),t(),e(457," foram preenchidas:"),t(),i(458,"pre")(459,"code"),e(460,`POST /api/po-samples/v1/people HTTP/1.1
Host: localhost:4000
Connection: keep-alive
Accept: application/json, text/plain
...
`),t()(),i(461,"p"),e(462,"Request payload:"),t(),i(463,"pre")(464,"code"),e(465,`{ "name": "Fulano", "city": "Smallville" }
`),t()(),i(466,"p"),e(467,"Caso queira que o template carregue um recurso j\xE1 existente, deve-se ser inclu\xEDdo um parametro na rota chamado "),i(468,"code"),e(469,"id"),t(),e(470,"."),t(),i(471,"p"),e(472,"Exemplo de configura\xE7\xE3o de rota:"),t(),i(473,"pre")(474,"code"),e(475,`RouterModule.forRoot([
  ...
  { path: 'edit/:id', component: PersonEditComponent },
  ...
],
`),t()(),i(476,"p"),e(477,"Baseado nisso, na inicializa\xE7\xE3o do template, ser\xE1 disparado uma requisi\xE7\xE3o para buscar o recurso que ser\xE1 editado."),t(),i(478,"blockquote")(479,"p")(480,"code"),e(481,"GET {end-point}/{id}"),t()()(),i(482,"p"),e(483,"Nos m\xE9todos de "),i(484,"code"),e(485,"save"),t(),e(486," e "),i(487,"code"),e(488,"saveNew"),t(),e(489,", ao inv\xE9s de um "),i(490,"code"),e(491,"POST"),t(),e(492,", ser\xE1 disparado um "),i(493,"code"),e(494,"PUT"),t(),e(495,"."),t(),i(496,"p"),e(497,"Resquisi\xE7\xE3o disparada, onde a propriedade "),i(498,"code"),e(499,"name"),t(),e(500," e "),i(501,"code"),e(502,"city"),t(),e(503," foram preenchidas / atualizadas, e o "),i(504,"code"),e(505,"id"),t(),e(506," da url \xE9 2:"),t(),i(507,"pre")(508,"code"),e(509,`PUT /api/po-samples/v1/people/2 HTTP/1.1
Host: localhost:4000
Connection: keep-alive
Accept: application/json, text/plain
...
`),t()(),i(510,"p"),e(511,"Request payload:"),t(),i(512,"pre")(513,"code"),e(514,`{ "name": "Fulano", "city": "Metropolis" }
`),t()()()(),i(515,"tr",14)(516,"td",15)(517,"div",16)(518,"span",17),e(519," p-title"),n(520,"br"),t()()(),i(521,"td",18)(522,"code",24),e(523,"string"),t()(),i(524,"td",20),e(525,"-"),t(),i(526,"td",21)(527,"p"),e(528,"T\xEDtulo da p\xE1gina."),t()()()(),i(529,"h3",10),e(530,"M\xE9todos"),t(),i(531,"table",32)(532,"tr",14)(533,"th",33)(534,"div",16)(535,"h4")(536,"span",17),e(537," showAdditionalHelp "),t()()()()(),i(538,"tr",21)(539,"td",21)(540,"p"),e(541,"M\xE9todo que exibe "),i(542,"code"),e(543,"additionalHelpTooltip"),t(),e(544," ou executa a a\xE7\xE3o definida em "),i(545,"code"),e(546,"additionalHelp"),t(),e(547,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),i(548,"code"),e(549,"keydown"),t(),e(550,"."),t(),i(551,"pre")(552,"code"),e(553,`import { PoPageDynamicEditModule } from '@po-ui/ng-templates';
...
@ViewChild('dynamicEdit', { static: true }) dynamicEdit: PoPageDynamicEditComponent;

fields: Array<PoPageDynamicEditField> = [
 {
   property: 'name',
   ...
   help: 'Mensagem de ajuda.',
   additionalHelpTooltip: 'Mensagem de ajuda complementar.',
   keydown: this.onKeyDown.bind(this, 'name')
 },
]

onKeyDown(property: string, event: KeyboardEvent): void {
 if (event.code === 'F9') {
   this.dynamicEdit.showAdditionalHelp(property);
 }
}
`),t()()()()(),i(554,"h5")(555,"b"),e(556,"Par\xE2metros"),t()(),i(557,"table",11)(558,"tr",12)(559,"th",13),e(560,"Nome"),t(),i(561,"th",13),e(562,"Tipo"),t(),i(563,"th",13),e(564,"Descri\xE7\xE3o"),t()(),i(565,"tr",14)(566,"td",15),e(567," property"),t(),i(568,"td",18)(569,"code",34),e(570," string "),t()(),i(571,"td",21)(572,"p"),e(573,"Identificador da coluna."),t()()()(),n(574,"br"),i(575,"h3"),e(576,"Interfaces"),t(),i(577,"h4",35)(578,"code",5),e(579,"PoPageDynamicEditActions"),t()(),i(580,"div",2)(581,"p"),e(582,"Interface para as a\xE7\xF5es do componente po-page-dynamic-edit."),t()(),i(583,"h4",10),e(584,"Propriedades"),t(),i(585,"table",11)(586,"tr",12)(587,"th",13),e(588,"Nome"),t(),i(589,"th",13),e(590,"Tipo"),t(),i(591,"th",13),e(592,"Descri\xE7\xE3o"),t()(),i(593,"tr",14)(594,"td",15)(595,"div",16)(596,"span",17),e(597," beforeCancel"),n(598,"br"),t()()(),i(599,"td",18)(600,"code",24),e(601,"string "),t(),i(602,"code",36),e(603," (() => PoPageDynamicEditBeforeCancel)"),t()(),i(604,"td",21)(605,"em")(606,"strong"),e(607,"(opcional)"),t()(),i(608,"p"),e(609,"Rota ou m\xE9todo que ser\xE1 chamado antes de executar a a\xE7\xE3o de cancelamento (cancel)."),t(),i(610,"p"),e(611,"Tanto o m\xE9todo como a API receber\xE3o o recurso e devem retornar um objeto com a defini\xE7\xE3o de "),i(612,"code"),e(613,"PoPageDynamicEditBeforeCancel"),t(),e(614,"."),t(),i(615,"blockquote")(616,"p"),e(617,"A url ser\xE1 chamada via POST"),t()(),i(618,"p"),e(619,"Caso o desenvolvedor queira que apare\xE7a alguma mensagem nessa a\xE7\xE3o ele pode cri\xE1-la na fun\xE7\xE3o chamada pela "),i(620,"strong"),e(621,"beforeCancel"),t(),e(622,`
ou definir a mensagem no atributo `),i(623,"code"),e(624,"_messages"),t(),e(625,` na resposta da API conforme definido
em `),i(626,"a",37),e(627,"Guia de implementa\xE7\xE3o de APIs"),t()()()(),i(628,"tr",14)(629,"td",15)(630,"div",16)(631,"span",17),e(632," beforeSave"),n(633,"br"),t()()(),i(634,"td",18)(635,"code",24),e(636,"string "),t(),i(637,"code",38),e(638," ((resource: any, id: string) => PoPageDynamicEditBeforeSave)"),t()(),i(639,"td",21)(640,"em")(641,"strong"),e(642,"(opcional)"),t()(),i(643,"p"),e(644,"Rota ou m\xE9todo que ser\xE1 chamado antes de salvar um recurso (save)."),t(),i(645,"p"),e(646,"Tanto o m\xE9todo como a API receber\xE3o o recurso e devem retornar um objeto com a defini\xE7\xE3o de "),i(647,"code"),e(648,"PoPageDynamicEditBeforeSave"),t(),e(649,"."),t(),i(650,"blockquote")(651,"p"),e(652,`A url ser\xE1 chamada via POST. Caso seja a edi\xE7\xE3o de um recurso, a url ser\xE1 concatenada
com a key especificada no metadata, por exemplo: `),i(653,"code"),e(654,"POST {beforeSave}/{key}"),t(),e(655,"."),t()(),i(656,"p"),e(657,"Caso o desenvolvedor queira que apare\xE7a alguma mensagem nessa a\xE7\xE3o ele pode cri\xE1-la na fun\xE7\xE3o chamada pela "),i(658,"strong"),e(659,"beforeSave"),t(),e(660,`
ou definir a mensagem no atributo `),i(661,"code"),e(662,"_messages"),t(),e(663,` na resposta da API conforme definido
em `),i(664,"a",37),e(665,"Guia de implementa\xE7\xE3o de APIs"),t()()()(),i(666,"tr",14)(667,"td",15)(668,"div",16)(669,"span",17),e(670," beforeSaveNew"),n(671,"br"),t()()(),i(672,"td",18)(673,"code",24),e(674,"string "),t(),i(675,"code",39),e(676," ((resource: any, id: string) => PoPageDynamicEditBeforeSaveNew)"),t()(),i(677,"td",21)(678,"em")(679,"strong"),e(680,"(opcional)"),t()(),i(681,"p"),e(682,"Rota ou m\xE9todo que ser\xE1 chamado antes de executar o evento salvar e abrir novo registro (saveNew)."),t(),i(683,"p"),e(684,"Tanto o m\xE9todo como a API receber\xE3o o recurso e devem retornar um objeto com a defini\xE7\xE3o de "),i(685,"code"),e(686,"PoPageDynamicEditBeforeSaveNew"),t(),e(687,"."),t(),i(688,"blockquote")(689,"p"),e(690,`A URL ser\xE1 chamada via POST. Caso seja a edi\xE7\xE3o de um recurso, a URL ser\xE1 concatenada
com a key especificada no metadata, por exemplo: `),i(691,"code"),e(692,"POST {beforeSave}/{key}"),t(),e(693,"."),t()(),i(694,"p"),e(695,"Caso o desenvolvedor queira que apare\xE7a alguma mensagem nessa a\xE7\xE3o ele pode cri\xE1-la na fun\xE7\xE3o chamada pela "),i(696,"strong"),e(697,"beforeSaveNew"),t(),e(698,`
ou definir a mensagem no atributo `),i(699,"code"),e(700,"_messages"),t(),e(701,` na resposta da API conforme definido
em `),i(702,"a",37),e(703,"Guia de implementa\xE7\xE3o de APIs"),t()()()(),i(704,"tr",14)(705,"td",15)(706,"div",16)(707,"span",17),e(708," cancel"),n(709,"br"),t()()(),i(710,"td",18)(711,"code",24),e(712,"string "),t(),i(713,"code",22),e(714," boolean "),t(),i(715,"code",40),e(716," Function"),t()(),i(717,"td",21)(718,"em")(719,"strong"),e(720,"(opcional)"),t()(),i(721,"p"),e(722,"Rota de redirecionamento para a\xE7\xE3o de cancelar, caso n\xE3o seja especificada ser\xE1 usado o comando "),i(723,"code"),e(724,"navigator.back()"),t(),e(725,"."),t(),i(726,"blockquote")(727,"p"),e(728,"Se passada uma fun\xE7\xE3o, \xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o ou outro comportamento desejado."),t()(),i(729,"blockquote")(730,"p"),e(731,"Caso queira esconder a a\xE7\xE3o deve ser passado o valor "),i(732,"code"),e(733,"false"),t(),e(734,";"),t()(),i(735,"pre")(736,"code"),e(737,`actions = {
  cancel: '/'
};
`),t()()()(),i(738,"tr",14)(739,"td",15)(740,"div",16)(741,"span",17),e(742," save"),n(743,"br"),t()()(),i(744,"td",18)(745,"code",24),e(746,"string "),t(),i(747,"code",41),e(748," ((resource: any, id: string) => void)"),t()(),i(749,"td",21)(750,"em")(751,"strong"),e(752,"(opcional)"),t()(),i(753,"p"),e(754,"Rota de redirecionamento ou m\xE9todo para executar o envio dos dados ao servidor."),t(),i(755,"p"),e(756,"A rota de redirecionamento ser\xE1 executada ap\xF3s a confirma\xE7\xE3o de grava\xE7\xE3o do registro."),t(),i(757,"blockquote")(758,"p"),e(759,"A rota pode conter um par\xE2metro chamando id."),t()(),i(760,"pre")(761,"code"),e(762,`actions = {
  save: 'detail/:id'
};
`),t()(),i(763,"p"),e(764,"Se for passado um m\xE9todo:"),t(),i(765,"ul")(766,"li"),e(767,"receber\xE1 como par\xE2metro na chamada do m\xE9todo o recurso, por exemplo: "),i(768,"code"),e(769,"{ email: 'example@email.com' }"),t(),e(770,"."),t(),i(771,"li"),e(772,`\xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o e/ou envio dos dados
para o servidor ou outro comportamento desejado.`),t()()()(),i(773,"tr",14)(774,"td",15)(775,"div",16)(776,"span",17),e(777," saveNew"),n(778,"br"),t()()(),i(779,"td",18)(780,"code",24),e(781,"string "),t(),i(782,"code",42),e(783," ((resource: any, id?: string) => void)"),t()(),i(784,"td",21)(785,"em")(786,"strong"),e(787,"(opcional)"),t()(),i(788,"p"),e(789,"Rota de redirecionamento ou m\xE9todo para executar o envio dos dados ao servidor."),t(),i(790,"p"),e(791,"A rota de redirecionamento ser\xE1 executada ap\xF3s a confirma\xE7\xE3o de grava\xE7\xE3o do registro."),t(),i(792,"blockquote")(793,"p"),e(794,`Caso tratar-se de um novo registro, ser\xE1 resetado o formul\xE1rio para um novo registro.
Se estiver editando um registro a rota de redirecionamento ser\xE1 utilizada.`),t()(),i(795,"pre")(796,"code"),e(797,`actions = {
  saveNew: 'new'
};
`),t()(),i(798,"p"),e(799,"A rota pode conter um par\xE2metro id."),t(),i(800,"pre")(801,"code"),e(802,`actions = {
  saveNew: 'edit/:id'
};
`),t()(),i(803,"p"),e(804,`Ao informar um m\xE9todo \xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o e/ou envio dos dados
para o servidor ou outro comportamento desejado.`),t()()()(),i(805,"h4",35)(806,"code",5),e(807,"PoPageDynamicEditBeforeCancel"),t()(),i(808,"div",2)(809,"p"),e(810,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),i(811,"code"),e(812,"beforeCancel"),t(),e(813,"."),t()(),i(814,"h4",10),e(815,"Propriedades"),t(),i(816,"table",11)(817,"tr",12)(818,"th",13),e(819,"Nome"),t(),i(820,"th",13),e(821,"Tipo"),t(),i(822,"th",13),e(823,"Descri\xE7\xE3o"),t()(),i(824,"tr",14)(825,"td",15)(826,"div",16)(827,"span",17),e(828," allowAction"),n(829,"br"),t()()(),i(830,"td",18)(831,"code",22),e(832,"boolean"),t()(),i(833,"td",21)(834,"em")(835,"strong"),e(836,"(opcional)"),t()(),i(837,"p"),e(838,"Define se deve ou n\xE3o executar a a\xE7\xE3o de cancelamento de edi\xE7\xE3o da p\xE1gina (cancel)"),t()()(),i(839,"tr",14)(840,"td",15)(841,"div",16)(842,"span",17),e(843," newUrl"),n(844,"br"),t()()(),i(845,"td",18)(846,"code",24),e(847,"string"),t()(),i(848,"td",21)(849,"em")(850,"strong"),e(851,"(opcional)"),t()(),i(852,"p"),e(853,"Nova rota para navega\xE7\xE3o que substituir\xE1 a definida anteriormente em "),i(854,"code"),e(855,"cancel"),t(),e(856,"."),t()()()(),i(857,"h4",35)(858,"code",5),e(859,"PoPageDynamicEditBeforeSaveNew"),t()(),i(860,"div",2)(861,"p"),e(862,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),i(863,"code"),e(864,"beforeSaveNew"),t(),e(865,"."),t()(),i(866,"h4",10),e(867,"Propriedades"),t(),i(868,"table",11)(869,"tr",12)(870,"th",13),e(871,"Nome"),t(),i(872,"th",13),e(873,"Tipo"),t(),i(874,"th",13),e(875,"Descri\xE7\xE3o"),t()(),i(876,"tr",14)(877,"td",15)(878,"div",16)(879,"span",17),e(880," allowAction"),n(881,"br"),t()()(),i(882,"td",18)(883,"code",22),e(884,"boolean"),t()(),i(885,"td",21)(886,"em")(887,"strong"),e(888,"(opcional)"),t()(),i(889,"p"),e(890,"Define se deve ou n\xE3o executar a a\xE7\xE3o salvar e novo (saveNew)."),t()()(),i(891,"tr",14)(892,"td",15)(893,"div",16)(894,"span",17),e(895," newUrl"),n(896,"br"),t()()(),i(897,"td",18)(898,"code",24),e(899,"string"),t()(),i(900,"td",21)(901,"em")(902,"strong"),e(903,"(opcional)"),t()(),i(904,"p"),e(905,"Nova rota de redirecionamento, que substituir\xE1 a rota definida anteriormente em "),i(906,"code"),e(907,"saveNew"),t(),e(908,"."),t()()(),i(909,"tr",14)(910,"td",15)(911,"div",16)(912,"span",17),e(913," resource"),n(914,"br"),t()()(),i(915,"td",18)(916,"code",43),e(917,"any"),t()(),i(918,"td",21)(919,"em")(920,"strong"),e(921,"(opcional)"),t()(),i(922,"p"),e(923,"Recurso atualizado."),t(),i(924,"p"),e(925,`Ser\xE1 feito uma mesclagem entre os valores existentes e esse novo objeto,
no entanto as propriedades que possu\xEDrem `),i(926,"code"),e(927,"key: true"),t(),e(928,` n\xE3o ser\xE3o alteradas.
Por exemplo:`),t(),i(929,"ul")(930,"li")(931,"p"),e(932,"recurso anterior com a propriedade id foi que definida como "),i(933,"em"),e(934,"key"),t(),e(935,":"),t(),i(936,"pre")(937,"code"),e(938,`{ id: 1, name: 'Ane' }
`),t()()(),i(939,"li")(940,"p"),e(941,"recurso retornado no "),i(942,"code"),e(943,"beforeSaveNew"),t(),e(944,":"),t(),i(945,"pre")(946,"code"),e(947,`{ id: 50, age: 23 }
`),t()()(),i(948,"li")(949,"p"),e(950,"Mesclagem do recurso:"),t(),i(951,"pre")(952,"code"),e(953,`{ id: 1, name: 'Ane', age: 23 }
`),t()()()(),i(954,"blockquote")(955,"p"),e(956,"Caso "),i(957,"code"),e(958,"allowAction"),t(),e(959," seja "),i(960,"code"),e(961,"false"),t(),e(962,`, o recurso ser\xE1 atualizado apenas localmente, sem concluir
a a\xE7\xE3o de salvar (saveNew).`),t()()()()(),i(963,"h4",35)(964,"code",5),e(965,"PoPageDynamicEditBeforeSave"),t()(),i(966,"div",2)(967,"p"),e(968,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),i(969,"code"),e(970,"beforeSave"),t(),e(971,"."),t()(),i(972,"h4",10),e(973,"Propriedades"),t(),i(974,"table",11)(975,"tr",12)(976,"th",13),e(977,"Nome"),t(),i(978,"th",13),e(979,"Tipo"),t(),i(980,"th",13),e(981,"Descri\xE7\xE3o"),t()(),i(982,"tr",14)(983,"td",15)(984,"div",16)(985,"span",17),e(986," allowAction"),n(987,"br"),t()()(),i(988,"td",18)(989,"code",22),e(990,"boolean"),t()(),i(991,"td",21)(992,"em")(993,"strong"),e(994,"(opcional)"),t()(),i(995,"p"),e(996,"Define se deve ou n\xE3o executar a a\xE7\xE3o salvar (save)."),t()()(),i(997,"tr",14)(998,"td",15)(999,"div",16)(1e3,"span",17),e(1001," newUrl"),n(1002,"br"),t()()(),i(1003,"td",18)(1004,"code",24),e(1005,"string"),t()(),i(1006,"td",21)(1007,"em")(1008,"strong"),e(1009,"(opcional)"),t()(),i(1010,"p"),e(1011,"Nova rota para salvar o recurso, que substituir\xE1 a rota definida anteriormente em "),i(1012,"code"),e(1013,"save"),t(),e(1014,"."),t()()(),i(1015,"tr",14)(1016,"td",15)(1017,"div",16)(1018,"span",17),e(1019," resource"),n(1020,"br"),t()()(),i(1021,"td",18)(1022,"code",43),e(1023,"any"),t()(),i(1024,"td",21)(1025,"em")(1026,"strong"),e(1027,"(opcional)"),t()(),i(1028,"p"),e(1029,"Recurso atualizado."),t(),i(1030,"p"),e(1031,`Ser\xE1 feito uma mesclagem entre os valores existentes e esse novo objeto.
Por exemplo:`),t(),i(1032,"ul")(1033,"li")(1034,"p"),e(1035,"recurso anterior:"),t(),i(1036,"pre")(1037,"code"),e(1038,`{ name: 'Ane' }
`),t()()(),i(1039,"li")(1040,"p"),e(1041,"recurso retornado no "),i(1042,"code"),e(1043,"beforeSave"),t(),e(1044,":"),t(),i(1045,"pre")(1046,"code"),e(1047,`{ age: 23 }
`),t()()(),i(1048,"li")(1049,"p"),e(1050,"Mesclagem do recurso:"),t(),i(1051,"pre")(1052,"code"),e(1053,`{ name: 'Ane', age: 23 }
`),t()()()(),i(1054,"blockquote")(1055,"p"),e(1056,"Caso "),i(1057,"code"),e(1058,"allowAction"),t(),e(1059," seja "),i(1060,"code"),e(1061,"false"),t(),e(1062,`, o recurso ser\xE1 atualizado apenas localmente, sem concluir
a a\xE7\xE3o de salvar (save).`),t()()()()(),i(1063,"h4",35)(1064,"code",5),e(1065,"PoPageDynamicEditField"),t()(),i(1066,"div",2)(1067,"p"),e(1068,"Interface dos fields usados para compor o template "),i(1069,"code"),e(1070,"po-page-dynamic-edit"),t(),e(1071,`.
Herda as defini\xE7\xF5es da interface
`),i(1072,"a",44),e(1073,"PoDynamicFormField"),t(),e(1074,"."),t()(),i(1075,"h4",10),e(1076,"Propriedades"),t(),i(1077,"table",11)(1078,"tr",12)(1079,"th",13),e(1080,"Nome"),t(),i(1081,"th",13),e(1082,"Tipo"),t(),i(1083,"th",13),e(1084,"Descri\xE7\xE3o"),t()(),i(1085,"tr",14)(1086,"td",15)(1087,"div",16)(1088,"span",17),e(1089," duplicate"),n(1090,"br"),t()()(),i(1091,"td",18)(1092,"code",22),e(1093,"boolean"),t()(),i(1094,"td",21)(1095,"em")(1096,"strong"),e(1097,"(opcional)"),t()(),i(1098,"p"),e(1099,"Indica se o campo ser\xE1 duplicado caso seja executada a a\xE7\xE3o de duplica\xE7\xE3o."),t()()()(),i(1100,"h4",35)(1101,"code",5),e(1102,"PoPageDynamicEditLiterals"),t()(),i(1103,"div",2)(1104,"p"),e(1105,"Interface para defini\xE7\xE3o das literais usadas no "),i(1106,"code"),e(1107,"po-page-dynamic-edit"),t(),e(1108,"."),t()(),i(1109,"h4",10),e(1110,"Propriedades"),t(),i(1111,"table",11)(1112,"tr",12)(1113,"th",13),e(1114,"Nome"),t(),i(1115,"th",13),e(1116,"Tipo"),t(),i(1117,"th",13),e(1118,"Descri\xE7\xE3o"),t()(),i(1119,"tr",14)(1120,"td",15)(1121,"div",16)(1122,"span",17),e(1123," cancelConfirmMessage"),n(1124,"br"),t()()(),i(1125,"td",18)(1126,"code",24),e(1127,"string"),t()(),i(1128,"td",21)(1129,"em")(1130,"strong"),e(1131,"(opcional)"),t()(),i(1132,"p"),e(1133,"Texto exibido na mensagem de cancelamento da inclus\xE3o/edi\xE7\xE3o."),t()()(),i(1134,"tr",14)(1135,"td",15)(1136,"div",16)(1137,"span",17),e(1138," detailActionNew"),n(1139,"br"),t()()(),i(1140,"td",18)(1141,"code",24),e(1142,"string"),t()(),i(1143,"td",21)(1144,"em")(1145,"strong"),e(1146,"(opcional)"),t()(),i(1147,"p"),e(1148,"R\xF3tulo exibido no bot\xE3o "),i(1149,"code"),e(1150,"Novo"),t(),e(1151,"."),t()()(),i(1152,"tr",14)(1153,"td",15)(1154,"div",16)(1155,"span",17),e(1156," pageActionCancel"),n(1157,"br"),t()()(),i(1158,"td",18)(1159,"code",24),e(1160,"string"),t()(),i(1161,"td",21)(1162,"em")(1163,"strong"),e(1164,"(opcional)"),t()(),i(1165,"p"),e(1166,"R\xF3tulo exibido no bot\xE3o "),i(1167,"code"),e(1168,"Cancelar"),t(),e(1169,"."),t()()(),i(1170,"tr",14)(1171,"td",15)(1172,"div",16)(1173,"span",17),e(1174," pageActionSave"),n(1175,"br"),t()()(),i(1176,"td",18)(1177,"code",24),e(1178,"string"),t()(),i(1179,"td",21)(1180,"em")(1181,"strong"),e(1182,"(opcional)"),t()(),i(1183,"p"),e(1184,"R\xF3tulo exibido no bot\xE3o "),i(1185,"code"),e(1186,"Salvar"),t(),e(1187,"."),t()()(),i(1188,"tr",14)(1189,"td",15)(1190,"div",16)(1191,"span",17),e(1192," pageActionSaveNew"),n(1193,"br"),t()()(),i(1194,"td",18)(1195,"code",24),e(1196,"string"),t()(),i(1197,"td",21)(1198,"em")(1199,"strong"),e(1200,"(opcional)"),t()(),i(1201,"p"),e(1202,"R\xF3tulo exibido no bot\xE3o "),i(1203,"code"),e(1204,"Salvar e novo"),t(),e(1205,"."),t()()(),i(1206,"tr",14)(1207,"td",15)(1208,"div",16)(1209,"span",17),e(1210," registerNotFound"),n(1211,"br"),t()()(),i(1212,"td",18)(1213,"code",24),e(1214,"string"),t()(),i(1215,"td",21)(1216,"em")(1217,"strong"),e(1218,"(opcional)"),t()(),i(1219,"p"),e(1220,"Texto exibido para resgistro n\xE3o encontrado."),t()()(),i(1221,"tr",14)(1222,"td",15)(1223,"div",16)(1224,"span",17),e(1225," saveNotificationError"),n(1226,"br"),t()()(),i(1227,"td",18)(1228,"code",24),e(1229,"string"),t()(),i(1230,"td",21)(1231,"em")(1232,"strong"),e(1233,"(opcional)"),t()(),i(1234,"p"),e(1235,"Texto exibido para ocorr\xEAncia de alguma inconsist\xEAncia ao salvar."),t()()(),i(1236,"tr",14)(1237,"td",15)(1238,"div",16)(1239,"span",17),e(1240," saveNotificationSuccessSave"),n(1241,"br"),t()()(),i(1242,"td",18)(1243,"code",24),e(1244,"string"),t()(),i(1245,"td",21)(1246,"em")(1247,"strong"),e(1248,"(opcional)"),t()(),i(1249,"p"),e(1250,"Texto exibido para recurso salvo com sucesso."),t()()(),i(1251,"tr",14)(1252,"td",15)(1253,"div",16)(1254,"span",17),e(1255," saveNotificationSuccessUpdate"),n(1256,"br"),t()()(),i(1257,"td",18)(1258,"code",24),e(1259,"string"),t()(),i(1260,"td",21)(1261,"em")(1262,"strong"),e(1263,"(opcional)"),t()(),i(1264,"p"),e(1265,"Texto exibido para recurso atualizado com sucesso."),t()()(),i(1266,"tr",14)(1267,"td",15)(1268,"div",16)(1269,"span",17),e(1270," saveNotificationWarning"),n(1271,"br"),t()()(),i(1272,"td",18)(1273,"code",24),e(1274,"string"),t()(),i(1275,"td",21)(1276,"em")(1277,"strong"),e(1278,"(opcional)"),t()(),i(1279,"p"),e(1280,"Texto exibido para adivert\xEAncia de formul\xE1rio preenchido de forma incorreta."),t()()()(),i(1281,"h4",35)(1282,"code",5),e(1283,"PoPageDynamicEditMetadata"),t()(),i(1284,"div",2)(1285,"p"),e(1286,"Interface para as propriedades de uma p\xE1gina din\xE2mica. "),n(1287,"a",45),t()(),i(1288,"h4",10),e(1289,"Propriedades"),t(),i(1290,"table",11)(1291,"tr",12)(1292,"th",13),e(1293,"Nome"),t(),i(1294,"th",13),e(1295,"Tipo"),t(),i(1296,"th",13),e(1297,"Descri\xE7\xE3o"),t()(),i(1298,"tr",14)(1299,"td",15)(1300,"div",16)(1301,"span",17),e(1302," actions"),n(1303,"br"),t()()(),i(1304,"td",18)(1305,"code",19),e(1306,"PoPageDynamicEditActions"),t()(),i(1307,"td",21)(1308,"em")(1309,"strong"),e(1310,"(opcional)"),t()(),i(1311,"p"),e(1312,"A\xE7\xF5es que o usu\xE1rio poder\xE1 executar na p\xE1gina atrav\xE9s de bot\xF5es."),t()()(),i(1313,"tr",14)(1314,"td",15)(1315,"div",16)(1316,"span",17),e(1317," autoRouter"),n(1318,"br"),t()()(),i(1319,"td",18)(1320,"code",22),e(1321,"boolean"),t()(),i(1322,"td",21)(1323,"em")(1324,"strong"),e(1325,"(opcional)"),t()(),i(1326,"p"),e(1327,"Cria automaticamente as rotas de edi\xE7\xE3o (novo/duplicate) e detalhes caso sejam definidas a\xE7\xF5es na propriedade "),i(1328,"code"),e(1329,"p-actions"),t()(),i(1330,"p"),e(1331,"As rotas criadas ser\xE3o baseadas na propriedade "),i(1332,"code"),e(1333,"p-actions"),t(),e(1334,"."),t(),i(1335,"blockquote")(1336,"p"),e(1337,"Para o correto funcionamento n\xE3o pode haver nenhuma rota coringa ("),i(1338,"code"),e(1339,"**"),t(),e(1340,") especificada."),t()()()(),i(1341,"tr",14)(1342,"td",15)(1343,"div",16)(1344,"span",17),e(1345," breadcrumb"),n(1346,"br"),t()()(),i(1347,"td",18)(1348,"code",23),e(1349,"PoBreadcrumb"),t()(),i(1350,"td",21)(1351,"em")(1352,"strong"),e(1353,"(opcional)"),t()(),i(1354,"p"),e(1355,"Objeto com propriedades do breadcrumb."),t()()(),i(1356,"tr",14)(1357,"td",15)(1358,"div",16)(1359,"span",17),e(1360," fields"),n(1361,"br"),t()()(),i(1362,"td",18)(1363,"code",26),e(1364,"Array<PoPageDynamicEditField>"),t()(),i(1365,"td",21)(1366,"em")(1367,"strong"),e(1368,"(opcional)"),t()(),i(1369,"p"),e(1370,"Lista dos campos usados."),t()()(),i(1371,"tr",14)(1372,"td",15)(1373,"div",16)(1374,"span",17),e(1375," title"),n(1376,"br"),t()()(),i(1377,"td",18)(1378,"code",24),e(1379,"string"),t()(),i(1380,"td",21)(1381,"em")(1382,"strong"),e(1383,"(opcional)"),t()(),i(1384,"p"),e(1385,"T\xEDtulo da p\xE1gina."),t()()(),i(1386,"tr",14)(1387,"td",15)(1388,"div",16)(1389,"span",17),e(1390," version"),n(1391,"br"),t()()(),i(1392,"td",18)(1393,"code",46),e(1394,"number"),t()(),i(1395,"td",21)(1396,"p"),e(1397,"Vers\xE3o do metadado devolvido pelo backend."),t()()()(),i(1398,"h4",35)(1399,"code",5),e(1400,"PoPageDynamicEditOptions"),t()(),i(1401,"div",2)(1402,"p"),e(1403,"Interface para as propriedades de uma p\xE1gina din\xE2mica."),t()(),i(1404,"h4",10),e(1405,"Propriedades"),t(),i(1406,"table",11)(1407,"tr",12)(1408,"th",13),e(1409,"Nome"),t(),i(1410,"th",13),e(1411,"Tipo"),t(),i(1412,"th",13),e(1413,"Descri\xE7\xE3o"),t()(),i(1414,"tr",14)(1415,"td",15)(1416,"div",16)(1417,"span",17),e(1418," actions"),n(1419,"br"),t()()(),i(1420,"td",18)(1421,"code",19),e(1422,"PoPageDynamicEditActions"),t()(),i(1423,"td",21)(1424,"em")(1425,"strong"),e(1426,"(opcional)"),t()(),i(1427,"p"),e(1428,"A\xE7\xF5es que o usu\xE1rio poder\xE1 executar na p\xE1gina atrav\xE9s de bot\xF5es."),t()()(),i(1429,"tr",14)(1430,"td",15)(1431,"div",16)(1432,"span",17),e(1433," breadcrumb"),n(1434,"br"),t()()(),i(1435,"td",18)(1436,"code",23),e(1437,"PoBreadcrumb"),t()(),i(1438,"td",21)(1439,"em")(1440,"strong"),e(1441,"(opcional)"),t()(),i(1442,"p"),e(1443,"Objeto com propriedades do breadcrumb."),t()()(),i(1444,"tr",14)(1445,"td",15)(1446,"div",16)(1447,"span",17),e(1448," fields"),n(1449,"br"),t()()(),i(1450,"td",18)(1451,"code",26),e(1452,"Array<PoPageDynamicEditField>"),t()(),i(1453,"td",21)(1454,"em")(1455,"strong"),e(1456,"(opcional)"),t()(),i(1457,"p"),e(1458,"Lista dos campos usados."),t()()(),i(1459,"tr",14)(1460,"td",15)(1461,"div",16)(1462,"span",17),e(1463," title"),n(1464,"br"),t()()(),i(1465,"td",18)(1466,"code",24),e(1467,"string"),t()(),i(1468,"td",21)(1469,"em")(1470,"strong"),e(1471,"(opcional)"),t()(),i(1472,"p"),e(1473,"T\xEDtulo da p\xE1gina."),t()()()()())},dependencies:[g],encapsulation:2})}return a})();var H=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=2;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(o){return new(o||a)(D(k),D(F))};static \u0275cmp=m({type:a,selectors:[["ng-component"]],standalone:!1,decls:7,vars:4,consts:[["p-title","Page Dynamic Edit",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,d){o&1&&(i(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),s("p-click",function(){return d.changeTab("doc")}),n(3,"sample-po-page-dynamic-edit-doc"),t(),i(4,"po-tab",3),s("p-click",function(){return d.changeTab("web")}),n(5,"sample-po-page-dynamic-edit-basic-view")(6,"sample-po-page-dynamic-edit-user-view"),t()()()),o&2&&(l("p-actions",d.actions),p(2),l("p-active",d.activeTab==="doc"),p(2),l("p-hide",d.hidePoWebSample)("p-active",d.activeTab==="web"))},dependencies:[N,x,S,L,O,_],encapsulation:2})}return a})();var te=[{path:"",component:H}],R=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=y({type:a});static \u0275inj=v({imports:[C.forChild(te),C]})}return a})();var fe=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=y({type:a});static \u0275inj=v({imports:[M,R]})}return a})();export{fe as DocPoPageDynamicEditModule};
