import{g as P,o as g,p as M}from"./chunk-KTXVLMHP.js";import{Ab as S,nb as N,zb as x}from"./chunk-4M2FSNLW.js";import{$a as A,$c as C,Aa as l,Da as b,Fb as h,La as i,Ma as t,N as v,Na as n,Sa as s,Xc as k,Zc as F,_a as w,ab as T,cb as e,eb as f,ja as p,ka as D,nb as q,ob as E,qa as m,ra as y}from"./chunk-CBLD3XJL.js";var V=()=>({property:"id",label:"User ID"}),G=a=>[a],B=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["sample-po-page-dynamic-edit-basic"]],standalone:!1,decls:1,vars:4,consts:[["p-title","Po Page Dynamic Edit","p-service-api","https://po-sample-api.onrender.com/v1/people",3,"p-fields"]],template:function(o,d){o&1&&n(0,"po-page-dynamic-edit",0),o&2&&l("p-fields",E(2,G,q(1,V)))},dependencies:[P],encapsulation:2})}return a})();var W=a=>({"docs-sample-code-tabs":a}),L=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["sample-po-page-dynamic-edit-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,d){o&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Page Dynamic Edit Basic"),t(),i(4,"a",2),s("click",function(){return d.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-dynamic-edit-basic/sample-po-page-dynamic-edit-basic.component.html"),t(),i(13,"pre",7),e(14,`<po-page-dynamic-edit
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
`),t()()()()(),i(21,"div",10),n(22,"sample-po-page-dynamic-edit-basic"),t(),n(23,"hr")),o&2&&(p(5),b("po-icon "+d.sampleCodeButtonIcon),p(),f(" ",d.sampleCodeButtonLabel,""),p(),l("ngClass",E(4,W,d.hideSampleCodeTabs)))},dependencies:[h,g,x,S,B],encapsulation:2})}return a})();var J=["dynamicEdit"],O=(()=>{class a{dynamicEdit;serviceApi="https://po-sample-api.onrender.com/v1/people";actions={save:"/documentation/po-page-dynamic-detail",saveNew:"/documentation/po-page-dynamic-edit"};literals={pageActionCancel:"Descartar",pageActionSave:"Gravar",pageActionSaveNew:"Gravar e novo"};breadcrumb={items:[{label:"Home",link:"/"},{label:"People",link:"/documentation/po-page-dynamic-table"},{label:"Edit"}]};fields=[{property:"status",divider:"Status",options:["active","inactive"]},{property:"id",label:"User ID",key:!0,required:!0},{property:"name",divider:"Personal data",required:!0},{property:"nickname"},{property:"email",label:"E-mail"},{property:"birthdate",label:"Birth date",type:"date",errorMessage:"Invalid date.",help:"Enter or select a valid date.",additionalHelpTooltip:"Please enter a valid date in the format MMDDYYYY.",keydown:this.onKeyDown.bind(this,"birthdate")},{property:"genre",options:["female","male","others"],gridLgColumns:6},{property:"nationality"},{property:"birthPlace",label:"Place of birth"},{property:"graduation"},{property:"father",label:"Father`s name",divider:"Relationship",gridMdColumns:4,gridLgColumns:4},{property:"mother",label:"Mother`s name",offsetMdColumns:4,offsetLgColumns:4,gridMdColumns:4,gridLgColumns:4},{property:"street",divider:"Address",gridColumns:4},{property:"city",optionsService:"https://po-sample-api.onrender.com/v1/cities?transform=true",offsetColumns:4,gridColumns:4}];onKeyDown(r,o){o.code==="F9"&&this.dynamicEdit.showAdditionalHelp(r)}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["sample-po-page-dynamic-edit-user"]],viewQuery:function(o,d){if(o&1&&w(J,7),o&2){let u;A(u=T())&&(d.dynamicEdit=u.first)}},standalone:!1,decls:2,vars:6,consts:[["dynamicEdit",""],["p-title","User edit",3,"p-auto-router","p-actions","p-breadcrumb","p-fields","p-literals","p-service-api"]],template:function(o,d){o&1&&n(0,"po-page-dynamic-edit",1,0),o&2&&l("p-auto-router",!0)("p-actions",d.actions)("p-breadcrumb",d.breadcrumb)("p-fields",d.fields)("p-literals",d.literals)("p-service-api",d.serviceApi)},dependencies:[P],encapsulation:2})}return a})();var Z=a=>({"docs-sample-code-tabs":a}),j=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["sample-po-page-dynamic-edit-user-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,d){o&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Page Dynamic Edit - User"),t(),i(4,"a",2),s("click",function(){return d.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-dynamic-edit-user/sample-po-page-dynamic-edit-user.component.html"),t(),i(13,"pre",7),e(14,`<po-page-dynamic-edit
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
`),t()()()()(),i(21,"div",10),n(22,"sample-po-page-dynamic-edit-user"),t(),n(23,"hr")),o&2&&(p(5),b("po-icon "+d.sampleCodeButtonIcon),p(),f(" ",d.sampleCodeButtonLabel,""),p(),l("ngClass",E(4,Z,d.hideSampleCodeTabs)))},dependencies:[h,g,x,S,O],encapsulation:2})}return a})();var _=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["sample-po-page-dynamic-edit-doc"]],standalone:!1,decls:1477,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-page-dynamic-edit#po-page-dynamic-edit-metadata"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoPageDynamicEditActions"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<PoPageDynamicEditField>"],["pan","",1,"docs-api-property-type","PoPageDynamicEditLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","(()","=>","PoPageDynamicEditOptions)"],["pan","",1,"docs-api-property-type","((model:","any)","=>","any)"],["pan","",1,"docs-api-property-type","((model:","any)","=>","Observable<any>)"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(()","=>","PoPageDynamicEditBeforeCancel)"],["href","https://po-ui.io/guides/api#successMessages"],["pan","",1,"docs-api-property-type","((resource:","any,","id:","string)","=>","PoPageDynamicEditBeforeSave)"],["pan","",1,"docs-api-property-type","((resource:","any,","id:","string)","=>","PoPageDynamicEditBeforeSaveNew)"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","((resource:","any,","id:","string)","=>","void)"],["pan","",1,"docs-api-property-type","((resource:","any,","id?:","string)","=>","void)"],["pan","",1,"docs-api-property-type","any"],["href","https://po-ui.io/documentation/po-dynamic-form"],["id","po-page-dynamic-edit-metadata"],["pan","",1,"docs-api-property-type","number"]],template:function(o,d){o&1&&(i(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoPageDynamicEditModule } from '@po-ui/ng-templates';"),t()(),i(4,"div",2)(5,"p"),e(6,"M\xF3dulo do template do po-page-dynamic-detail."),t()(),i(7,"h3",3),e(8,"Componente"),t(),i(9,"h4",4)(10,"code",5),e(11,"PoPageDynamicEditComponent"),t()(),i(12,"div",2)(13,"p"),e(14,"O "),i(15,"code"),e(16,"po-page-dynamic-edit"),t(),e(17,` \xE9 uma p\xE1gina que pode servir para editar ou criar novos registros,
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
`),t()()()(),i(515,"tr",14)(516,"td",15)(517,"div",16)(518,"span",17),e(519," p-title"),n(520,"br"),t()()(),i(521,"td",18)(522,"code",24),e(523,"string"),t()(),i(524,"td",20),e(525,"-"),t(),i(526,"td",21)(527,"p"),e(528,"T\xEDtulo da p\xE1gina."),t()()()(),i(529,"h3",10),e(530,"M\xE9todos"),t(),i(531,"table",32)(532,"tr",14)(533,"th",33)(534,"div",16)(535,"h4")(536,"span",17),e(537," showAdditionalHelp "),t()()()()(),i(538,"tr",21)(539,"td",21)(540,"p"),e(541,"M\xE9todo que exibe "),i(542,"code"),e(543,"p-helper"),t(),e(544," ou executa a a\xE7\xE3o definida em "),i(545,"code"),e(546,"p-helper{eventOnClick}"),t(),e(547," ou em "),i(548,"code"),e(549,"p-additionalHelp"),t(),e(550,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),i(551,"code"),e(552,"keydown"),t(),e(553,"."),t(),i(554,"pre")(555,"code"),e(556,`import { PoPageDynamicEditModule } from '@po-ui/ng-templates';
...
@ViewChild('dynamicEdit', { static: true }) dynamicEdit: PoPageDynamicEditComponent;

fields: Array<PoPageDynamicEditField> = [
 {
   property: 'name',
   ...
   help: 'Mensagem de ajuda.',
   helper: 'Mensagem de ajuda complementar com o componente po-helper implementado.',
   keydown: this.onKeyDown.bind(this, 'name')
 },
]

onKeyDown(property: string, event: KeyboardEvent): void {
 if (event.code === 'F9') {
   this.dynamicEdit.showAdditionalHelp(property);
 }
}
`),t()()()()(),i(557,"h5")(558,"b"),e(559,"Par\xE2metros"),t()(),i(560,"table",11)(561,"tr",12)(562,"th",13),e(563,"Nome"),t(),i(564,"th",13),e(565,"Tipo"),t(),i(566,"th",13),e(567,"Descri\xE7\xE3o"),t()(),i(568,"tr",14)(569,"td",15),e(570," property"),t(),i(571,"td",18)(572,"code",34),e(573," string "),t()(),i(574,"td",21)(575,"p"),e(576,"Identificador da coluna."),t()()()(),n(577,"br"),i(578,"h3"),e(579,"Interfaces"),t(),i(580,"h4",35)(581,"code",5),e(582,"PoPageDynamicEditActions"),t()(),i(583,"div",2)(584,"p"),e(585,"Interface para as a\xE7\xF5es do componente po-page-dynamic-edit."),t()(),i(586,"h4",10),e(587,"Propriedades"),t(),i(588,"table",11)(589,"tr",12)(590,"th",13),e(591,"Nome"),t(),i(592,"th",13),e(593,"Tipo"),t(),i(594,"th",13),e(595,"Descri\xE7\xE3o"),t()(),i(596,"tr",14)(597,"td",15)(598,"div",16)(599,"span",17),e(600," beforeCancel"),n(601,"br"),t()()(),i(602,"td",18)(603,"code",24),e(604,"string "),t(),i(605,"code",36),e(606," (() => PoPageDynamicEditBeforeCancel)"),t()(),i(607,"td",21)(608,"em")(609,"strong"),e(610,"(opcional)"),t()(),i(611,"p"),e(612,"Rota ou m\xE9todo que ser\xE1 chamado antes de executar a a\xE7\xE3o de cancelamento (cancel)."),t(),i(613,"p"),e(614,"Tanto o m\xE9todo como a API receber\xE3o o recurso e devem retornar um objeto com a defini\xE7\xE3o de "),i(615,"code"),e(616,"PoPageDynamicEditBeforeCancel"),t(),e(617,"."),t(),i(618,"blockquote")(619,"p"),e(620,"A url ser\xE1 chamada via POST"),t()(),i(621,"p"),e(622,"Caso o desenvolvedor queira que apare\xE7a alguma mensagem nessa a\xE7\xE3o ele pode cri\xE1-la na fun\xE7\xE3o chamada pela "),i(623,"strong"),e(624,"beforeCancel"),t(),e(625,`
ou definir a mensagem no atributo `),i(626,"code"),e(627,"_messages"),t(),e(628,` na resposta da API conforme definido
em `),i(629,"a",37),e(630,"Guia de implementa\xE7\xE3o de APIs"),t()()()(),i(631,"tr",14)(632,"td",15)(633,"div",16)(634,"span",17),e(635," beforeSave"),n(636,"br"),t()()(),i(637,"td",18)(638,"code",24),e(639,"string "),t(),i(640,"code",38),e(641," ((resource: any, id: string) => PoPageDynamicEditBeforeSave)"),t()(),i(642,"td",21)(643,"em")(644,"strong"),e(645,"(opcional)"),t()(),i(646,"p"),e(647,"Rota ou m\xE9todo que ser\xE1 chamado antes de salvar um recurso (save)."),t(),i(648,"p"),e(649,"Tanto o m\xE9todo como a API receber\xE3o o recurso e devem retornar um objeto com a defini\xE7\xE3o de "),i(650,"code"),e(651,"PoPageDynamicEditBeforeSave"),t(),e(652,"."),t(),i(653,"blockquote")(654,"p"),e(655,`A url ser\xE1 chamada via POST. Caso seja a edi\xE7\xE3o de um recurso, a url ser\xE1 concatenada
com a key especificada no metadata, por exemplo: `),i(656,"code"),e(657,"POST {beforeSave}/{key}"),t(),e(658,"."),t()(),i(659,"p"),e(660,"Caso o desenvolvedor queira que apare\xE7a alguma mensagem nessa a\xE7\xE3o ele pode cri\xE1-la na fun\xE7\xE3o chamada pela "),i(661,"strong"),e(662,"beforeSave"),t(),e(663,`
ou definir a mensagem no atributo `),i(664,"code"),e(665,"_messages"),t(),e(666,` na resposta da API conforme definido
em `),i(667,"a",37),e(668,"Guia de implementa\xE7\xE3o de APIs"),t()()()(),i(669,"tr",14)(670,"td",15)(671,"div",16)(672,"span",17),e(673," beforeSaveNew"),n(674,"br"),t()()(),i(675,"td",18)(676,"code",24),e(677,"string "),t(),i(678,"code",39),e(679," ((resource: any, id: string) => PoPageDynamicEditBeforeSaveNew)"),t()(),i(680,"td",21)(681,"em")(682,"strong"),e(683,"(opcional)"),t()(),i(684,"p"),e(685,"Rota ou m\xE9todo que ser\xE1 chamado antes de executar o evento salvar e abrir novo registro (saveNew)."),t(),i(686,"p"),e(687,"Tanto o m\xE9todo como a API receber\xE3o o recurso e devem retornar um objeto com a defini\xE7\xE3o de "),i(688,"code"),e(689,"PoPageDynamicEditBeforeSaveNew"),t(),e(690,"."),t(),i(691,"blockquote")(692,"p"),e(693,`A URL ser\xE1 chamada via POST. Caso seja a edi\xE7\xE3o de um recurso, a URL ser\xE1 concatenada
com a key especificada no metadata, por exemplo: `),i(694,"code"),e(695,"POST {beforeSave}/{key}"),t(),e(696,"."),t()(),i(697,"p"),e(698,"Caso o desenvolvedor queira que apare\xE7a alguma mensagem nessa a\xE7\xE3o ele pode cri\xE1-la na fun\xE7\xE3o chamada pela "),i(699,"strong"),e(700,"beforeSaveNew"),t(),e(701,`
ou definir a mensagem no atributo `),i(702,"code"),e(703,"_messages"),t(),e(704,` na resposta da API conforme definido
em `),i(705,"a",37),e(706,"Guia de implementa\xE7\xE3o de APIs"),t()()()(),i(707,"tr",14)(708,"td",15)(709,"div",16)(710,"span",17),e(711," cancel"),n(712,"br"),t()()(),i(713,"td",18)(714,"code",24),e(715,"string "),t(),i(716,"code",22),e(717," boolean "),t(),i(718,"code",40),e(719," Function"),t()(),i(720,"td",21)(721,"em")(722,"strong"),e(723,"(opcional)"),t()(),i(724,"p"),e(725,"Rota de redirecionamento para a\xE7\xE3o de cancelar, caso n\xE3o seja especificada ser\xE1 usado o comando "),i(726,"code"),e(727,"navigator.back()"),t(),e(728,"."),t(),i(729,"blockquote")(730,"p"),e(731,"Se passada uma fun\xE7\xE3o, \xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o ou outro comportamento desejado."),t()(),i(732,"blockquote")(733,"p"),e(734,"Caso queira esconder a a\xE7\xE3o deve ser passado o valor "),i(735,"code"),e(736,"false"),t(),e(737,";"),t()(),i(738,"pre")(739,"code"),e(740,`actions = {
  cancel: '/'
};
`),t()()()(),i(741,"tr",14)(742,"td",15)(743,"div",16)(744,"span",17),e(745," save"),n(746,"br"),t()()(),i(747,"td",18)(748,"code",24),e(749,"string "),t(),i(750,"code",41),e(751," ((resource: any, id: string) => void)"),t()(),i(752,"td",21)(753,"em")(754,"strong"),e(755,"(opcional)"),t()(),i(756,"p"),e(757,"Rota de redirecionamento ou m\xE9todo para executar o envio dos dados ao servidor."),t(),i(758,"p"),e(759,"A rota de redirecionamento ser\xE1 executada ap\xF3s a confirma\xE7\xE3o de grava\xE7\xE3o do registro."),t(),i(760,"blockquote")(761,"p"),e(762,"A rota pode conter um par\xE2metro chamando id."),t()(),i(763,"pre")(764,"code"),e(765,`actions = {
  save: 'detail/:id'
};
`),t()(),i(766,"p"),e(767,"Se for passado um m\xE9todo:"),t(),i(768,"ul")(769,"li"),e(770,"receber\xE1 como par\xE2metro na chamada do m\xE9todo o recurso, por exemplo: "),i(771,"code"),e(772,"{ email: 'example@email.com' }"),t(),e(773,"."),t(),i(774,"li"),e(775,`\xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o e/ou envio dos dados
para o servidor ou outro comportamento desejado.`),t()()()(),i(776,"tr",14)(777,"td",15)(778,"div",16)(779,"span",17),e(780," saveNew"),n(781,"br"),t()()(),i(782,"td",18)(783,"code",24),e(784,"string "),t(),i(785,"code",42),e(786," ((resource: any, id?: string) => void)"),t()(),i(787,"td",21)(788,"em")(789,"strong"),e(790,"(opcional)"),t()(),i(791,"p"),e(792,"Rota de redirecionamento ou m\xE9todo para executar o envio dos dados ao servidor."),t(),i(793,"p"),e(794,"A rota de redirecionamento ser\xE1 executada ap\xF3s a confirma\xE7\xE3o de grava\xE7\xE3o do registro."),t(),i(795,"blockquote")(796,"p"),e(797,`Caso tratar-se de um novo registro, ser\xE1 resetado o formul\xE1rio para um novo registro.
Se estiver editando um registro a rota de redirecionamento ser\xE1 utilizada.`),t()(),i(798,"pre")(799,"code"),e(800,`actions = {
  saveNew: 'new'
};
`),t()(),i(801,"p"),e(802,"A rota pode conter um par\xE2metro id."),t(),i(803,"pre")(804,"code"),e(805,`actions = {
  saveNew: 'edit/:id'
};
`),t()(),i(806,"p"),e(807,`Ao informar um m\xE9todo \xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o e/ou envio dos dados
para o servidor ou outro comportamento desejado.`),t()()()(),i(808,"h4",35)(809,"code",5),e(810,"PoPageDynamicEditBeforeCancel"),t()(),i(811,"div",2)(812,"p"),e(813,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),i(814,"code"),e(815,"beforeCancel"),t(),e(816,"."),t()(),i(817,"h4",10),e(818,"Propriedades"),t(),i(819,"table",11)(820,"tr",12)(821,"th",13),e(822,"Nome"),t(),i(823,"th",13),e(824,"Tipo"),t(),i(825,"th",13),e(826,"Descri\xE7\xE3o"),t()(),i(827,"tr",14)(828,"td",15)(829,"div",16)(830,"span",17),e(831," allowAction"),n(832,"br"),t()()(),i(833,"td",18)(834,"code",22),e(835,"boolean"),t()(),i(836,"td",21)(837,"em")(838,"strong"),e(839,"(opcional)"),t()(),i(840,"p"),e(841,"Define se deve ou n\xE3o executar a a\xE7\xE3o de cancelamento de edi\xE7\xE3o da p\xE1gina (cancel)"),t()()(),i(842,"tr",14)(843,"td",15)(844,"div",16)(845,"span",17),e(846," newUrl"),n(847,"br"),t()()(),i(848,"td",18)(849,"code",24),e(850,"string"),t()(),i(851,"td",21)(852,"em")(853,"strong"),e(854,"(opcional)"),t()(),i(855,"p"),e(856,"Nova rota para navega\xE7\xE3o que substituir\xE1 a definida anteriormente em "),i(857,"code"),e(858,"cancel"),t(),e(859,"."),t()()()(),i(860,"h4",35)(861,"code",5),e(862,"PoPageDynamicEditBeforeSaveNew"),t()(),i(863,"div",2)(864,"p"),e(865,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),i(866,"code"),e(867,"beforeSaveNew"),t(),e(868,"."),t()(),i(869,"h4",10),e(870,"Propriedades"),t(),i(871,"table",11)(872,"tr",12)(873,"th",13),e(874,"Nome"),t(),i(875,"th",13),e(876,"Tipo"),t(),i(877,"th",13),e(878,"Descri\xE7\xE3o"),t()(),i(879,"tr",14)(880,"td",15)(881,"div",16)(882,"span",17),e(883," allowAction"),n(884,"br"),t()()(),i(885,"td",18)(886,"code",22),e(887,"boolean"),t()(),i(888,"td",21)(889,"em")(890,"strong"),e(891,"(opcional)"),t()(),i(892,"p"),e(893,"Define se deve ou n\xE3o executar a a\xE7\xE3o salvar e novo (saveNew)."),t()()(),i(894,"tr",14)(895,"td",15)(896,"div",16)(897,"span",17),e(898," newUrl"),n(899,"br"),t()()(),i(900,"td",18)(901,"code",24),e(902,"string"),t()(),i(903,"td",21)(904,"em")(905,"strong"),e(906,"(opcional)"),t()(),i(907,"p"),e(908,"Nova rota de redirecionamento, que substituir\xE1 a rota definida anteriormente em "),i(909,"code"),e(910,"saveNew"),t(),e(911,"."),t()()(),i(912,"tr",14)(913,"td",15)(914,"div",16)(915,"span",17),e(916," resource"),n(917,"br"),t()()(),i(918,"td",18)(919,"code",43),e(920,"any"),t()(),i(921,"td",21)(922,"em")(923,"strong"),e(924,"(opcional)"),t()(),i(925,"p"),e(926,"Recurso atualizado."),t(),i(927,"p"),e(928,`Ser\xE1 feito uma mesclagem entre os valores existentes e esse novo objeto,
no entanto as propriedades que possu\xEDrem `),i(929,"code"),e(930,"key: true"),t(),e(931,` n\xE3o ser\xE3o alteradas.
Por exemplo:`),t(),i(932,"ul")(933,"li")(934,"p"),e(935,"recurso anterior com a propriedade id foi que definida como "),i(936,"em"),e(937,"key"),t(),e(938,":"),t(),i(939,"pre")(940,"code"),e(941,`{ id: 1, name: 'Ane' }
`),t()()(),i(942,"li")(943,"p"),e(944,"recurso retornado no "),i(945,"code"),e(946,"beforeSaveNew"),t(),e(947,":"),t(),i(948,"pre")(949,"code"),e(950,`{ id: 50, age: 23 }
`),t()()(),i(951,"li")(952,"p"),e(953,"Mesclagem do recurso:"),t(),i(954,"pre")(955,"code"),e(956,`{ id: 1, name: 'Ane', age: 23 }
`),t()()()(),i(957,"blockquote")(958,"p"),e(959,"Caso "),i(960,"code"),e(961,"allowAction"),t(),e(962," seja "),i(963,"code"),e(964,"false"),t(),e(965,`, o recurso ser\xE1 atualizado apenas localmente, sem concluir
a a\xE7\xE3o de salvar (saveNew).`),t()()()()(),i(966,"h4",35)(967,"code",5),e(968,"PoPageDynamicEditBeforeSave"),t()(),i(969,"div",2)(970,"p"),e(971,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),i(972,"code"),e(973,"beforeSave"),t(),e(974,"."),t()(),i(975,"h4",10),e(976,"Propriedades"),t(),i(977,"table",11)(978,"tr",12)(979,"th",13),e(980,"Nome"),t(),i(981,"th",13),e(982,"Tipo"),t(),i(983,"th",13),e(984,"Descri\xE7\xE3o"),t()(),i(985,"tr",14)(986,"td",15)(987,"div",16)(988,"span",17),e(989," allowAction"),n(990,"br"),t()()(),i(991,"td",18)(992,"code",22),e(993,"boolean"),t()(),i(994,"td",21)(995,"em")(996,"strong"),e(997,"(opcional)"),t()(),i(998,"p"),e(999,"Define se deve ou n\xE3o executar a a\xE7\xE3o salvar (save)."),t()()(),i(1e3,"tr",14)(1001,"td",15)(1002,"div",16)(1003,"span",17),e(1004," newUrl"),n(1005,"br"),t()()(),i(1006,"td",18)(1007,"code",24),e(1008,"string"),t()(),i(1009,"td",21)(1010,"em")(1011,"strong"),e(1012,"(opcional)"),t()(),i(1013,"p"),e(1014,"Nova rota para salvar o recurso, que substituir\xE1 a rota definida anteriormente em "),i(1015,"code"),e(1016,"save"),t(),e(1017,"."),t()()(),i(1018,"tr",14)(1019,"td",15)(1020,"div",16)(1021,"span",17),e(1022," resource"),n(1023,"br"),t()()(),i(1024,"td",18)(1025,"code",43),e(1026,"any"),t()(),i(1027,"td",21)(1028,"em")(1029,"strong"),e(1030,"(opcional)"),t()(),i(1031,"p"),e(1032,"Recurso atualizado."),t(),i(1033,"p"),e(1034,`Ser\xE1 feito uma mesclagem entre os valores existentes e esse novo objeto.
Por exemplo:`),t(),i(1035,"ul")(1036,"li")(1037,"p"),e(1038,"recurso anterior:"),t(),i(1039,"pre")(1040,"code"),e(1041,`{ name: 'Ane' }
`),t()()(),i(1042,"li")(1043,"p"),e(1044,"recurso retornado no "),i(1045,"code"),e(1046,"beforeSave"),t(),e(1047,":"),t(),i(1048,"pre")(1049,"code"),e(1050,`{ age: 23 }
`),t()()(),i(1051,"li")(1052,"p"),e(1053,"Mesclagem do recurso:"),t(),i(1054,"pre")(1055,"code"),e(1056,`{ name: 'Ane', age: 23 }
`),t()()()(),i(1057,"blockquote")(1058,"p"),e(1059,"Caso "),i(1060,"code"),e(1061,"allowAction"),t(),e(1062," seja "),i(1063,"code"),e(1064,"false"),t(),e(1065,`, o recurso ser\xE1 atualizado apenas localmente, sem concluir
a a\xE7\xE3o de salvar (save).`),t()()()()(),i(1066,"h4",35)(1067,"code",5),e(1068,"PoPageDynamicEditField"),t()(),i(1069,"div",2)(1070,"p"),e(1071,"Interface dos fields usados para compor o template "),i(1072,"code"),e(1073,"po-page-dynamic-edit"),t(),e(1074,`.
Herda as defini\xE7\xF5es da interface
`),i(1075,"a",44),e(1076,"PoDynamicFormField"),t(),e(1077,"."),t()(),i(1078,"h4",10),e(1079,"Propriedades"),t(),i(1080,"table",11)(1081,"tr",12)(1082,"th",13),e(1083,"Nome"),t(),i(1084,"th",13),e(1085,"Tipo"),t(),i(1086,"th",13),e(1087,"Descri\xE7\xE3o"),t()(),i(1088,"tr",14)(1089,"td",15)(1090,"div",16)(1091,"span",17),e(1092," duplicate"),n(1093,"br"),t()()(),i(1094,"td",18)(1095,"code",22),e(1096,"boolean"),t()(),i(1097,"td",21)(1098,"em")(1099,"strong"),e(1100,"(opcional)"),t()(),i(1101,"p"),e(1102,"Indica se o campo ser\xE1 duplicado caso seja executada a a\xE7\xE3o de duplica\xE7\xE3o."),t()()()(),i(1103,"h4",35)(1104,"code",5),e(1105,"PoPageDynamicEditLiterals"),t()(),i(1106,"div",2)(1107,"p"),e(1108,"Interface para defini\xE7\xE3o das literais usadas no "),i(1109,"code"),e(1110,"po-page-dynamic-edit"),t(),e(1111,"."),t()(),i(1112,"h4",10),e(1113,"Propriedades"),t(),i(1114,"table",11)(1115,"tr",12)(1116,"th",13),e(1117,"Nome"),t(),i(1118,"th",13),e(1119,"Tipo"),t(),i(1120,"th",13),e(1121,"Descri\xE7\xE3o"),t()(),i(1122,"tr",14)(1123,"td",15)(1124,"div",16)(1125,"span",17),e(1126," cancelConfirmMessage"),n(1127,"br"),t()()(),i(1128,"td",18)(1129,"code",24),e(1130,"string"),t()(),i(1131,"td",21)(1132,"em")(1133,"strong"),e(1134,"(opcional)"),t()(),i(1135,"p"),e(1136,"Texto exibido na mensagem de cancelamento da inclus\xE3o/edi\xE7\xE3o."),t()()(),i(1137,"tr",14)(1138,"td",15)(1139,"div",16)(1140,"span",17),e(1141," detailActionNew"),n(1142,"br"),t()()(),i(1143,"td",18)(1144,"code",24),e(1145,"string"),t()(),i(1146,"td",21)(1147,"em")(1148,"strong"),e(1149,"(opcional)"),t()(),i(1150,"p"),e(1151,"R\xF3tulo exibido no bot\xE3o "),i(1152,"code"),e(1153,"Novo"),t(),e(1154,"."),t()()(),i(1155,"tr",14)(1156,"td",15)(1157,"div",16)(1158,"span",17),e(1159," pageActionCancel"),n(1160,"br"),t()()(),i(1161,"td",18)(1162,"code",24),e(1163,"string"),t()(),i(1164,"td",21)(1165,"em")(1166,"strong"),e(1167,"(opcional)"),t()(),i(1168,"p"),e(1169,"R\xF3tulo exibido no bot\xE3o "),i(1170,"code"),e(1171,"Cancelar"),t(),e(1172,"."),t()()(),i(1173,"tr",14)(1174,"td",15)(1175,"div",16)(1176,"span",17),e(1177," pageActionSave"),n(1178,"br"),t()()(),i(1179,"td",18)(1180,"code",24),e(1181,"string"),t()(),i(1182,"td",21)(1183,"em")(1184,"strong"),e(1185,"(opcional)"),t()(),i(1186,"p"),e(1187,"R\xF3tulo exibido no bot\xE3o "),i(1188,"code"),e(1189,"Salvar"),t(),e(1190,"."),t()()(),i(1191,"tr",14)(1192,"td",15)(1193,"div",16)(1194,"span",17),e(1195," pageActionSaveNew"),n(1196,"br"),t()()(),i(1197,"td",18)(1198,"code",24),e(1199,"string"),t()(),i(1200,"td",21)(1201,"em")(1202,"strong"),e(1203,"(opcional)"),t()(),i(1204,"p"),e(1205,"R\xF3tulo exibido no bot\xE3o "),i(1206,"code"),e(1207,"Salvar e novo"),t(),e(1208,"."),t()()(),i(1209,"tr",14)(1210,"td",15)(1211,"div",16)(1212,"span",17),e(1213," registerNotFound"),n(1214,"br"),t()()(),i(1215,"td",18)(1216,"code",24),e(1217,"string"),t()(),i(1218,"td",21)(1219,"em")(1220,"strong"),e(1221,"(opcional)"),t()(),i(1222,"p"),e(1223,"Texto exibido para resgistro n\xE3o encontrado."),t()()(),i(1224,"tr",14)(1225,"td",15)(1226,"div",16)(1227,"span",17),e(1228," saveNotificationError"),n(1229,"br"),t()()(),i(1230,"td",18)(1231,"code",24),e(1232,"string"),t()(),i(1233,"td",21)(1234,"em")(1235,"strong"),e(1236,"(opcional)"),t()(),i(1237,"p"),e(1238,"Texto exibido para ocorr\xEAncia de alguma inconsist\xEAncia ao salvar."),t()()(),i(1239,"tr",14)(1240,"td",15)(1241,"div",16)(1242,"span",17),e(1243," saveNotificationSuccessSave"),n(1244,"br"),t()()(),i(1245,"td",18)(1246,"code",24),e(1247,"string"),t()(),i(1248,"td",21)(1249,"em")(1250,"strong"),e(1251,"(opcional)"),t()(),i(1252,"p"),e(1253,"Texto exibido para recurso salvo com sucesso."),t()()(),i(1254,"tr",14)(1255,"td",15)(1256,"div",16)(1257,"span",17),e(1258," saveNotificationSuccessUpdate"),n(1259,"br"),t()()(),i(1260,"td",18)(1261,"code",24),e(1262,"string"),t()(),i(1263,"td",21)(1264,"em")(1265,"strong"),e(1266,"(opcional)"),t()(),i(1267,"p"),e(1268,"Texto exibido para recurso atualizado com sucesso."),t()()(),i(1269,"tr",14)(1270,"td",15)(1271,"div",16)(1272,"span",17),e(1273," saveNotificationWarning"),n(1274,"br"),t()()(),i(1275,"td",18)(1276,"code",24),e(1277,"string"),t()(),i(1278,"td",21)(1279,"em")(1280,"strong"),e(1281,"(opcional)"),t()(),i(1282,"p"),e(1283,"Texto exibido para adivert\xEAncia de formul\xE1rio preenchido de forma incorreta."),t()()()(),i(1284,"h4",35)(1285,"code",5),e(1286,"PoPageDynamicEditMetadata"),t()(),i(1287,"div",2)(1288,"p"),e(1289,"Interface para as propriedades de uma p\xE1gina din\xE2mica. "),n(1290,"a",45),t()(),i(1291,"h4",10),e(1292,"Propriedades"),t(),i(1293,"table",11)(1294,"tr",12)(1295,"th",13),e(1296,"Nome"),t(),i(1297,"th",13),e(1298,"Tipo"),t(),i(1299,"th",13),e(1300,"Descri\xE7\xE3o"),t()(),i(1301,"tr",14)(1302,"td",15)(1303,"div",16)(1304,"span",17),e(1305," actions"),n(1306,"br"),t()()(),i(1307,"td",18)(1308,"code",19),e(1309,"PoPageDynamicEditActions"),t()(),i(1310,"td",21)(1311,"em")(1312,"strong"),e(1313,"(opcional)"),t()(),i(1314,"p"),e(1315,"A\xE7\xF5es que o usu\xE1rio poder\xE1 executar na p\xE1gina atrav\xE9s de bot\xF5es."),t()()(),i(1316,"tr",14)(1317,"td",15)(1318,"div",16)(1319,"span",17),e(1320," autoRouter"),n(1321,"br"),t()()(),i(1322,"td",18)(1323,"code",22),e(1324,"boolean"),t()(),i(1325,"td",21)(1326,"em")(1327,"strong"),e(1328,"(opcional)"),t()(),i(1329,"p"),e(1330,"Cria automaticamente as rotas de edi\xE7\xE3o (novo/duplicate) e detalhes caso sejam definidas a\xE7\xF5es na propriedade "),i(1331,"code"),e(1332,"p-actions"),t()(),i(1333,"p"),e(1334,"As rotas criadas ser\xE3o baseadas na propriedade "),i(1335,"code"),e(1336,"p-actions"),t(),e(1337,"."),t(),i(1338,"blockquote")(1339,"p"),e(1340,"Para o correto funcionamento n\xE3o pode haver nenhuma rota coringa ("),i(1341,"code"),e(1342,"**"),t(),e(1343,") especificada."),t()()()(),i(1344,"tr",14)(1345,"td",15)(1346,"div",16)(1347,"span",17),e(1348," breadcrumb"),n(1349,"br"),t()()(),i(1350,"td",18)(1351,"code",23),e(1352,"PoBreadcrumb"),t()(),i(1353,"td",21)(1354,"em")(1355,"strong"),e(1356,"(opcional)"),t()(),i(1357,"p"),e(1358,"Objeto com propriedades do breadcrumb."),t()()(),i(1359,"tr",14)(1360,"td",15)(1361,"div",16)(1362,"span",17),e(1363," fields"),n(1364,"br"),t()()(),i(1365,"td",18)(1366,"code",26),e(1367,"Array<PoPageDynamicEditField>"),t()(),i(1368,"td",21)(1369,"em")(1370,"strong"),e(1371,"(opcional)"),t()(),i(1372,"p"),e(1373,"Lista dos campos usados."),t()()(),i(1374,"tr",14)(1375,"td",15)(1376,"div",16)(1377,"span",17),e(1378," title"),n(1379,"br"),t()()(),i(1380,"td",18)(1381,"code",24),e(1382,"string"),t()(),i(1383,"td",21)(1384,"em")(1385,"strong"),e(1386,"(opcional)"),t()(),i(1387,"p"),e(1388,"T\xEDtulo da p\xE1gina."),t()()(),i(1389,"tr",14)(1390,"td",15)(1391,"div",16)(1392,"span",17),e(1393," version"),n(1394,"br"),t()()(),i(1395,"td",18)(1396,"code",46),e(1397,"number"),t()(),i(1398,"td",21)(1399,"p"),e(1400,"Vers\xE3o do metadado devolvido pelo backend."),t()()()(),i(1401,"h4",35)(1402,"code",5),e(1403,"PoPageDynamicEditOptions"),t()(),i(1404,"div",2)(1405,"p"),e(1406,"Interface para as propriedades de uma p\xE1gina din\xE2mica."),t()(),i(1407,"h4",10),e(1408,"Propriedades"),t(),i(1409,"table",11)(1410,"tr",12)(1411,"th",13),e(1412,"Nome"),t(),i(1413,"th",13),e(1414,"Tipo"),t(),i(1415,"th",13),e(1416,"Descri\xE7\xE3o"),t()(),i(1417,"tr",14)(1418,"td",15)(1419,"div",16)(1420,"span",17),e(1421," actions"),n(1422,"br"),t()()(),i(1423,"td",18)(1424,"code",19),e(1425,"PoPageDynamicEditActions"),t()(),i(1426,"td",21)(1427,"em")(1428,"strong"),e(1429,"(opcional)"),t()(),i(1430,"p"),e(1431,"A\xE7\xF5es que o usu\xE1rio poder\xE1 executar na p\xE1gina atrav\xE9s de bot\xF5es."),t()()(),i(1432,"tr",14)(1433,"td",15)(1434,"div",16)(1435,"span",17),e(1436," breadcrumb"),n(1437,"br"),t()()(),i(1438,"td",18)(1439,"code",23),e(1440,"PoBreadcrumb"),t()(),i(1441,"td",21)(1442,"em")(1443,"strong"),e(1444,"(opcional)"),t()(),i(1445,"p"),e(1446,"Objeto com propriedades do breadcrumb."),t()()(),i(1447,"tr",14)(1448,"td",15)(1449,"div",16)(1450,"span",17),e(1451," fields"),n(1452,"br"),t()()(),i(1453,"td",18)(1454,"code",26),e(1455,"Array<PoPageDynamicEditField>"),t()(),i(1456,"td",21)(1457,"em")(1458,"strong"),e(1459,"(opcional)"),t()(),i(1460,"p"),e(1461,"Lista dos campos usados."),t()()(),i(1462,"tr",14)(1463,"td",15)(1464,"div",16)(1465,"span",17),e(1466," title"),n(1467,"br"),t()()(),i(1468,"td",18)(1469,"code",24),e(1470,"string"),t()(),i(1471,"td",21)(1472,"em")(1473,"strong"),e(1474,"(opcional)"),t()(),i(1475,"p"),e(1476,"T\xEDtulo da p\xE1gina."),t()()()()())},dependencies:[g],encapsulation:2})}return a})();var R=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=2;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(o){return new(o||a)(D(k),D(F))};static \u0275cmp=m({type:a,selectors:[["ng-component"]],standalone:!1,decls:7,vars:4,consts:[["p-title","Page Dynamic Edit",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,d){o&1&&(i(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),s("p-click",function(){return d.changeTab("doc")}),n(3,"sample-po-page-dynamic-edit-doc"),t(),i(4,"po-tab",3),s("p-click",function(){return d.changeTab("web")}),n(5,"sample-po-page-dynamic-edit-basic-view")(6,"sample-po-page-dynamic-edit-user-view"),t()()()),o&2&&(l("p-actions",d.actions),p(2),l("p-active",d.activeTab==="doc"),p(2),l("p-hide",d.hidePoWebSample)("p-active",d.activeTab==="web"))},dependencies:[N,x,S,L,j,_],encapsulation:2})}return a})();var te=[{path:"",component:R}],U=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=y({type:a});static \u0275inj=v({imports:[C.forChild(te),C]})}return a})();var fe=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=y({type:a});static \u0275inj=v({imports:[M,U]})}return a})();export{fe as DocPoPageDynamicEditModule};
