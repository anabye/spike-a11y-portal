import{g as P,o as g,p as M}from"./chunk-DTVQ7I47.js";import{Ab as S,nb as N,zb as x}from"./chunk-2ZA6XFGZ.js";import{Ba as b,Fa as i,Ga as t,Ha as n,M as v,Ma as s,Oc as k,Qc as F,Sc as C,Ua as w,Va as T,Wa as A,Ya as e,_a as f,eb as q,fb as E,ha as p,ia as D,oa as m,pa as y,vb as h,ya as l}from"./chunk-WFKG4FNY.js";var V=()=>({property:"id",label:"User ID"}),G=a=>[a],B=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["sample-po-page-dynamic-edit-basic"]],standalone:!1,decls:1,vars:4,consts:[["p-title","Po Page Dynamic Edit","p-service-api","https://po-sample-api.onrender.com/v1/people",3,"p-fields"]],template:function(o,d){o&1&&n(0,"po-page-dynamic-edit",0),o&2&&l("p-fields",E(2,G,q(1,V)))},dependencies:[P],encapsulation:2})}return a})();var W=a=>({"docs-sample-code-tabs":a}),L=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["sample-po-page-dynamic-edit-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,d){o&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Page Dynamic Edit Basic"),t(),i(4,"a",2),s("click",function(){return d.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-dynamic-edit-basic/sample-po-page-dynamic-edit-basic.component.html"),t(),i(13,"pre",7),e(14,`<po-page-dynamic-edit
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
`),t()()()()(),i(21,"div",10),n(22,"sample-po-page-dynamic-edit-user"),t(),n(23,"hr")),o&2&&(p(5),b("po-icon "+d.sampleCodeButtonIcon),p(),f(" ",d.sampleCodeButtonLabel,""),p(),l("ngClass",E(4,Z,d.hideSampleCodeTabs)))},dependencies:[h,g,x,S,j],encapsulation:2})}return a})();var _=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["sample-po-page-dynamic-edit-doc"]],standalone:!1,decls:1492,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-page-dynamic-edit#po-page-dynamic-edit-metadata"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoPageDynamicEditActions"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<PoPageDynamicEditField>"],["pan","",1,"docs-api-property-type","PoPageDynamicEditLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","(()","=>","PoPageDynamicEditOptions)"],["pan","",1,"docs-api-property-type","((model:","any)","=>","any)"],["pan","",1,"docs-api-property-type","((model:","any)","=>","Observable<any>)"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(()","=>","PoPageDynamicEditBeforeCancel)"],["href","https://po-ui.io/guides/api#successMessages"],["pan","",1,"docs-api-property-type","((resource:","any,","id:","string)","=>","PoPageDynamicEditBeforeSave)"],["pan","",1,"docs-api-property-type","((resource:","any,","id:","string)","=>","PoPageDynamicEditBeforeSaveNew)"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","((resource:","any,","id:","string)","=>","void)"],["pan","",1,"docs-api-property-type","((resource:","any,","id?:","string)","=>","void)"],["pan","",1,"docs-api-property-type","any"],["href","https://po-ui.io/documentation/po-dynamic-form"],["id","po-page-dynamic-edit-metadata"],["pan","",1,"docs-api-property-type","number"]],template:function(o,d){o&1&&(i(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoPageDynamicEditModule } from '@po-ui/ng-templates';"),t()(),i(4,"div",2)(5,"p"),e(6,"M\xF3dulo do template do po-page-dynamic-detail."),t()(),i(7,"h3",3),e(8,"Componente"),t(),i(9,"h4",4)(10,"code",5),e(11,"PoPageDynamicEditComponent"),t()(),i(12,"div",2)(13,"p"),e(14,"O "),i(15,"code"),e(16,"po-page-dynamic-edit"),t(),e(17,` \xE9 uma p\xE1gina que pode servir para editar ou criar novos registros,
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
`),t()(),i(68,"h4"),e(69,"Tokens customiz\xE1veis"),t(),i(70,"table")(71,"thead")(72,"tr")(73,"th"),e(74,"Propriedade"),t(),i(75,"th"),e(76,"Descri\xE7\xE3o"),t(),i(77,"th"),e(78,"Valor Padr\xE3o"),t(),n(79,"th"),t()(),i(80,"tbody")(81,"tr")(82,"td")(83,"strong"),e(84,"Header"),t()(),n(85,"td")(86,"td")(87,"td"),t(),i(88,"tr")(89,"td")(90,"code"),e(91,"--padding"),t()(),i(92,"td"),e(93,"Espa\xE7amento (top "),i(94,"code"),e(95,"@deprecated 20.x.x"),t(),e(96,", right, bottom "),i(97,"code"),e(98,"@deprecated 20.x.x"),t(),e(99,", left)"),t(),i(100,"td")(101,"code"),e(102,"0.5rem (@deprecated 20.x.x) 1.5rem"),t()(),n(103,"td"),t(),i(104,"tr")(105,"td")(106,"code"),e(107,"--gap"),t()(),i(108,"td"),e(109,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),t(),i(110,"td")(111,"code"),e(112,"1.5rem"),t()(),i(113,"td")(114,"code"),e(115,"@deprecated 20.x.x"),t()()(),i(116,"tr")(117,"td")(118,"code"),e(119,"--gap-actions"),t()(),i(120,"td"),e(121,"Espa\xE7amento entre as a\xE7\xF5es"),t(),i(122,"td")(123,"code"),e(124,"0.5rem"),t()(),n(125,"td"),t(),i(126,"tr")(127,"td")(128,"code"),e(129,"--font-family"),t()(),i(130,"td"),e(131,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),t(),i(132,"td")(133,"code"),e(134,"--font-family-theme"),t()(),n(135,"td"),t(),i(136,"tr")(137,"td")(138,"strong"),e(139,"Content"),t()(),n(140,"td")(141,"td")(142,"td"),t(),i(143,"tr")(144,"td")(145,"code"),e(146,"--padding-content"),t()(),i(147,"td"),e(148,"Espa\xE7amento (top, right, bottom, left)"),t(),i(149,"td")(150,"code"),e(151,"0.5rem 1.5rem"),t()(),i(152,"td")(153,"code"),e(154,"@deprecated 20.x.x"),t()()()()()(),i(155,"div",7)(156,"h4",8),e(157,"Seletor"),t(),i(158,"pre",9),e(159,`<po-page-dynamic-edit
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
`),t()(),i(160,"h4",10),e(161,"Propriedades"),t(),i(162,"table",11)(163,"tr",12)(164,"th",13),e(165,"Nome"),t(),i(166,"th",13),e(167,"Tipo"),t(),i(168,"th",13),e(169,"Padr\xE3o"),t(),i(170,"th",13),e(171,"Descri\xE7\xE3o"),t()(),i(172,"tr",14)(173,"td",15)(174,"div",16)(175,"span",17),e(176," p-actions"),n(177,"br"),t()()(),i(178,"td",18)(179,"code",19),e(180,"PoPageDynamicEditActions"),t()(),i(181,"td",20),e(182,"-"),t(),i(183,"td",21)(184,"em")(185,"strong"),e(186,"(opcional)"),t()(),i(187,"p"),e(188,"A\xE7\xF5es da p\xE1gina."),t()()(),i(189,"tr",14)(190,"td",15)(191,"div",16)(192,"span",17),e(193," p-auto-router"),n(194,"br"),t()()(),i(195,"td",18)(196,"code",22),e(197,"boolean"),t()(),i(198,"td",20)(199,"p"),e(200,"false"),t()(),i(201,"td",21)(202,"em")(203,"strong"),e(204,"(opcional)"),t()(),i(205,"p"),e(206,`Cria automaticamente as rotas de edi\xE7\xE3o (novo/duplicate) e detalhes caso as a\xE7\xF5es
estejam definidas nas a\xE7\xF5es.`),t(),i(207,"blockquote")(208,"p"),e(209,"Para o correto funcionamento n\xE3o pode haver nenhum rota coringa ("),i(210,"code"),e(211,"**"),t(),e(212,") especificada."),t()()()(),i(213,"tr",14)(214,"td",15)(215,"div",16)(216,"span",17),e(217," p-breadcrumb"),n(218,"br"),t()()(),i(219,"td",18)(220,"code",23),e(221,"PoBreadcrumb"),t()(),i(222,"td",20),e(223,"-"),t(),i(224,"td",21)(225,"em")(226,"strong"),e(227,"(opcional)"),t()(),i(228,"p"),e(229,"Objeto com propriedades do breadcrumb."),t()()(),i(230,"tr",14)(231,"td",15)(232,"div",16)(233,"span",17),e(234," p-components-size"),n(235,"br"),t()()(),i(236,"td",18)(237,"code",24),e(238,"string"),t()(),i(239,"td",20)(240,"p")(241,"code"),e(242,"medium"),t()()(),i(243,"td",21)(244,"em")(245,"strong"),e(246,"(opcional)"),t()(),i(247,"p"),e(248,"Define o tamanho dos componentes de formul\xE1rio no template:"),t(),i(249,"ul")(250,"li")(251,"code"),e(252,"small"),t(),e(253,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(254,"li")(255,"code"),e(256,"medium"),t(),e(257,": aplica a medida medium de cada componente."),t()(),i(258,"blockquote")(259,"p"),e(260,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(261,"code"),e(262,"medium"),t(),e(263,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(264,"a",25),e(265,"po-theme"),t(),e(266,"."),t()()()(),i(267,"tr",14)(268,"td",15)(269,"div",16)(270,"span",17),e(271," p-fields"),n(272,"br"),t()()(),i(273,"td",18)(274,"code",26),e(275,"Array<PoPageDynamicEditField>"),t()(),i(276,"td",20),e(277,"-"),t(),i(278,"td",21)(279,"p"),e(280,"Lista dos campos usados na tabela e busca avan\xE7ada."),t()()(),i(281,"tr",14)(282,"td",15)(283,"div",16)(284,"span",17),e(285," p-literals"),n(286,"br"),t()()(),i(287,"td",18)(288,"code",27),e(289,"PoPageDynamicEditLiterals"),t()(),i(290,"td",20),e(291,"-"),t(),i(292,"td",21)(293,"em")(294,"strong"),e(295,"(opcional)"),t()(),i(296,"p"),e(297,"Objeto com as literais usadas no "),i(298,"code"),e(299,"po-page-dynamic-edit"),t(),e(300,"."),t(),i(301,"p"),e(302,`\xC9 possivel customizar passando um objeto com todas as literais dispon\xEDveis
ou passando apenas as literais que deseja customizar`),t(),i(303,"pre")(304,"code"),e(305,`const customLiterals: PoPageDynamicEditLiterals = {
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
`),t()(),i(306,"p"),e(307,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),t(),i(308,"pre")(309,"code"),e(310,`<po-page-dynamic-edit
  [p-literals]="customLiterals">
</po-page-dynamic-edit>
`),t()(),i(311,"blockquote")(312,"p"),e(313,"O valor padr\xE3o ser\xE1 traduzido de acordo com o idioma configurado no "),i(314,"a",28)(315,"code"),e(316,"PoI18nService"),t()(),e(317," ou "),i(318,"em"),e(319,"browser"),t(),e(320,"."),t()()()(),i(321,"tr",14)(322,"td",15)(323,"div",16)(324,"span",17),e(325," p-notification-type"),n(326,"br"),t()()(),i(327,"td",18)(328,"code",24),e(329,"string"),t()(),i(330,"td",20)(331,"p"),e(332,"warning"),t()(),i(333,"td",21)(334,"em")(335,"strong"),e(336,"(opcional)"),t()(),i(337,"p"),e(338,"Tipo da notifica\xE7\xE3o."),t(),i(339,"p"),e(340,"\xC9 possivel definir o tipo de notifica\xE7\xE3o que ser\xE1 exibido quando houver algum campo inv\xE1lido no formul\xE1rio."),t(),i(341,"pre")(342,"code"),e(343,`<po-page-dynamic-edit
  p-notification-type="warning">
</po-page-dynamic-edit>
`),t()(),i(344,"blockquote")(345,"p"),e(346,"Os valores aceitos s\xE3o 'warning' e 'error'."),t()()()(),i(347,"tr",14)(348,"td",15)(349,"div",16)(350,"span",17),e(351," p-load"),n(352,"br"),t()()(),i(353,"td",18)(354,"code",24),e(355,"string "),t(),i(356,"code",29),e(357," (() => PoPageDynamicEditOptions)"),t()(),i(358,"td",20),e(359,"-"),t(),i(360,"td",21)(361,"p"),e(362,"Fun\xE7\xE3o ou servi\xE7o que ser\xE1 executado na inicializa\xE7\xE3o do componente."),t(),i(363,"p"),e(364,"A propriedade aceita os seguintes tipos:"),t(),i(365,"ul")(366,"li")(367,"code"),e(368,"string"),t(),e(369,": "),i(370,"em"),e(371,"Endpoint"),t(),e(372," usado pelo componente para requisi\xE7\xE3o via "),i(373,"code"),e(374,"POST"),t(),e(375,"."),t(),i(376,"li")(377,"code"),e(378,"function"),t(),e(379,": M\xE9todo que ser\xE1 executado."),t()(),i(380,"p"),e(381,"O retorno desta fun\xE7\xE3o deve ser do tipo "),i(382,"code"),e(383,"PoPageDynamicEditOptions"),t(),e(384,`,
onde o usu\xE1rio poder\xE1 customizar novos campos, breadcrumb, title e actions`),t(),i(385,"p"),e(386,"Por exemplo:"),t(),i(387,"pre")(388,"code"),e(389,`getPageOptions(): PoPageDynamicEditOptions {
return {
  actions:
    { cancel: false, save: 'save/:id', saveNew: 'saveNew' },
  fields: [
    { property: 'idCard', gridColumns: 6 }
  ]
};
}
`),t()(),i(390,"p"),e(391,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),i(392,"code"),e(393,"bind"),t(),e(394,", por exemplo:"),t(),i(395,"pre")(396,"code"),e(397,`[p-load]="onLoadOptions.bind(this)"
`),t()()()(),i(398,"tr",14)(399,"td",15)(400,"div",16)(401,"span",17),e(402," p-load-data"),n(403,"br"),t()()(),i(404,"td",18)(405,"code",30),e(406,"((model: any) => any) "),t(),i(407,"code",31),e(408," ((model: any) => Observable<any>)"),t()(),i(409,"td",20),e(410,"-"),t(),i(411,"td",21)(412,"em")(413,"strong"),e(414,"(opcional)"),t()(),i(415,"p"),e(416,"Fun\xE7\xE3o que ser\xE1 executada ap\xF3s ser realizada a busca dos dados."),t(),i(417,"p"),e(418,"A propriedade aceita os seguintes tipos:"),t(),i(419,"ul")(420,"li")(421,"code"),e(422,"function"),t(),e(423,": M\xE9todo que ser\xE1 executado."),t()(),i(424,"p"),e(425,`Esta fun\xE7\xE3o passa por par\xE2metro o model e deve receb\xEA-lo de volta com as altera\xE7\xF5es.
Tamb\xE9m aceita o retorno de um Observable com o novo model.`),t(),i(426,"p"),e(427,"Por exemplo:"),t(),i(428,"pre")(429,"code"),e(430,`onLoadCustom(model) {
 return { ...model, customField: 'newValue' };
}
`),t()(),i(431,"p"),e(432,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),i(433,"code"),e(434,"bind"),t(),e(435,", por exemplo:"),t(),i(436,"pre")(437,"code"),e(438,`[p-load-data]="onLoadCustom.bind(this)"
`),t()()()(),i(439,"tr",14)(440,"td",15)(441,"div",16)(442,"span",17),e(443," p-service-api"),n(444,"br"),t()()(),i(445,"td",18)(446,"code",24),e(447,"string"),t()(),i(448,"td",20),e(449,"-"),t(),i(450,"td",21)(451,"p"),e(452,"Endpoint usado pelo template para requisi\xE7\xE3o do recurso que ser\xE1 exibido para edi\xE7\xE3o."),t(),i(453,"p"),e(454,"Para as a\xE7\xF5es de "),i(455,"code"),e(456,"save"),t(),e(457," e "),i(458,"code"),e(459,"saveNew"),t(),e(460,`, ser\xE1 feito uma requisi\xE7\xE3o de cria\xE7\xE3o nesse mesmo endpoint passando os valores
preenchidos pelo usu\xE1rio via payload.`),t(),i(461,"blockquote")(462,"p")(463,"code"),e(464,"POST {end-point}"),t()()(),i(465,"pre")(466,"code"),e(467,`<po-page-dynamic-edit
  [p-actions]="{ save: '/', saveNew: 'new' }"
  [p-fields]="[ { property: 'name' }, { property: 'city' } ]"
  p-service="/api/po-samples/v1/people"
  ...>
</po-page-dynamic-edit>
`),t()(),i(468,"p"),e(469,"Resquisi\xE7\xE3o disparada, onde a propriedade "),i(470,"code"),e(471,"name"),t(),e(472," e "),i(473,"code"),e(474,"city"),t(),e(475," foram preenchidas:"),t(),i(476,"pre")(477,"code"),e(478,`POST /api/po-samples/v1/people HTTP/1.1
Host: localhost:4000
Connection: keep-alive
Accept: application/json, text/plain
...
`),t()(),i(479,"p"),e(480,"Request payload:"),t(),i(481,"pre")(482,"code"),e(483,`{ "name": "Fulano", "city": "Smallville" }
`),t()(),i(484,"p"),e(485,"Caso queira que o template carregue um recurso j\xE1 existente, deve-se ser inclu\xEDdo um parametro na rota chamado "),i(486,"code"),e(487,"id"),t(),e(488,"."),t(),i(489,"p"),e(490,"Exemplo de configura\xE7\xE3o de rota:"),t(),i(491,"pre")(492,"code"),e(493,`RouterModule.forRoot([
  ...
  { path: 'edit/:id', component: PersonEditComponent },
  ...
],
`),t()(),i(494,"p"),e(495,"Baseado nisso, na inicializa\xE7\xE3o do template, ser\xE1 disparado uma requisi\xE7\xE3o para buscar o recurso que ser\xE1 editado."),t(),i(496,"blockquote")(497,"p")(498,"code"),e(499,"GET {end-point}/{id}"),t()()(),i(500,"p"),e(501,"Nos m\xE9todos de "),i(502,"code"),e(503,"save"),t(),e(504," e "),i(505,"code"),e(506,"saveNew"),t(),e(507,", ao inv\xE9s de um "),i(508,"code"),e(509,"POST"),t(),e(510,", ser\xE1 disparado um "),i(511,"code"),e(512,"PUT"),t(),e(513,"."),t(),i(514,"p"),e(515,"Resquisi\xE7\xE3o disparada, onde a propriedade "),i(516,"code"),e(517,"name"),t(),e(518," e "),i(519,"code"),e(520,"city"),t(),e(521," foram preenchidas / atualizadas, e o "),i(522,"code"),e(523,"id"),t(),e(524," da url \xE9 2:"),t(),i(525,"pre")(526,"code"),e(527,`PUT /api/po-samples/v1/people/2 HTTP/1.1
Host: localhost:4000
Connection: keep-alive
Accept: application/json, text/plain
...
`),t()(),i(528,"p"),e(529,"Request payload:"),t(),i(530,"pre")(531,"code"),e(532,`{ "name": "Fulano", "city": "Metropolis" }
`),t()()()(),i(533,"tr",14)(534,"td",15)(535,"div",16)(536,"span",17),e(537," p-title"),n(538,"br"),t()()(),i(539,"td",18)(540,"code",24),e(541,"string"),t()(),i(542,"td",20),e(543,"-"),t(),i(544,"td",21)(545,"p"),e(546,"T\xEDtulo da p\xE1gina."),t()()()(),i(547,"h3",10),e(548,"M\xE9todos"),t(),i(549,"table",32)(550,"tr",14)(551,"th",33)(552,"div",16)(553,"h4")(554,"span",17),e(555," showAdditionalHelp "),t()()()()(),i(556,"tr",21)(557,"td",21)(558,"p"),e(559,"M\xE9todo que exibe "),i(560,"code"),e(561,"additionalHelpTooltip"),t(),e(562," ou executa a a\xE7\xE3o definida em "),i(563,"code"),e(564,"additionalHelp"),t(),e(565,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),i(566,"code"),e(567,"keydown"),t(),e(568,"."),t(),i(569,"pre")(570,"code"),e(571,`import { PoPageDynamicEditModule } from '@po-ui/ng-templates';
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
`),t()()()()(),i(572,"h5")(573,"b"),e(574,"Par\xE2metros"),t()(),i(575,"table",11)(576,"tr",12)(577,"th",13),e(578,"Nome"),t(),i(579,"th",13),e(580,"Tipo"),t(),i(581,"th",13),e(582,"Descri\xE7\xE3o"),t()(),i(583,"tr",14)(584,"td",15),e(585," property"),t(),i(586,"td",18)(587,"code",34),e(588," string "),t()(),i(589,"td",21)(590,"p"),e(591,"Identificador da coluna."),t()()()(),n(592,"br"),i(593,"h3"),e(594,"Interfaces"),t(),i(595,"h4",35)(596,"code",5),e(597,"PoPageDynamicEditActions"),t()(),i(598,"div",2)(599,"p"),e(600,"Interface para as a\xE7\xF5es do componente po-page-dynamic-edit."),t()(),i(601,"h4",10),e(602,"Propriedades"),t(),i(603,"table",11)(604,"tr",12)(605,"th",13),e(606,"Nome"),t(),i(607,"th",13),e(608,"Tipo"),t(),i(609,"th",13),e(610,"Descri\xE7\xE3o"),t()(),i(611,"tr",14)(612,"td",15)(613,"div",16)(614,"span",17),e(615," beforeCancel"),n(616,"br"),t()()(),i(617,"td",18)(618,"code",24),e(619,"string "),t(),i(620,"code",36),e(621," (() => PoPageDynamicEditBeforeCancel)"),t()(),i(622,"td",21)(623,"em")(624,"strong"),e(625,"(opcional)"),t()(),i(626,"p"),e(627,"Rota ou m\xE9todo que ser\xE1 chamado antes de executar a a\xE7\xE3o de cancelamento (cancel)."),t(),i(628,"p"),e(629,"Tanto o m\xE9todo como a API receber\xE3o o recurso e devem retornar um objeto com a defini\xE7\xE3o de "),i(630,"code"),e(631,"PoPageDynamicEditBeforeCancel"),t(),e(632,"."),t(),i(633,"blockquote")(634,"p"),e(635,"A url ser\xE1 chamada via POST"),t()(),i(636,"p"),e(637,"Caso o desenvolvedor queira que apare\xE7a alguma mensagem nessa a\xE7\xE3o ele pode cri\xE1-la na fun\xE7\xE3o chamada pela "),i(638,"strong"),e(639,"beforeCancel"),t(),e(640,`
ou definir a mensagem no atributo `),i(641,"code"),e(642,"_messages"),t(),e(643,` na resposta da API conforme definido
em `),i(644,"a",37),e(645,"Guia de implementa\xE7\xE3o de APIs"),t()()()(),i(646,"tr",14)(647,"td",15)(648,"div",16)(649,"span",17),e(650," beforeSave"),n(651,"br"),t()()(),i(652,"td",18)(653,"code",24),e(654,"string "),t(),i(655,"code",38),e(656," ((resource: any, id: string) => PoPageDynamicEditBeforeSave)"),t()(),i(657,"td",21)(658,"em")(659,"strong"),e(660,"(opcional)"),t()(),i(661,"p"),e(662,"Rota ou m\xE9todo que ser\xE1 chamado antes de salvar um recurso (save)."),t(),i(663,"p"),e(664,"Tanto o m\xE9todo como a API receber\xE3o o recurso e devem retornar um objeto com a defini\xE7\xE3o de "),i(665,"code"),e(666,"PoPageDynamicEditBeforeSave"),t(),e(667,"."),t(),i(668,"blockquote")(669,"p"),e(670,`A url ser\xE1 chamada via POST. Caso seja a edi\xE7\xE3o de um recurso, a url ser\xE1 concatenada
com a key especificada no metadata, por exemplo: `),i(671,"code"),e(672,"POST {beforeSave}/{key}"),t(),e(673,"."),t()(),i(674,"p"),e(675,"Caso o desenvolvedor queira que apare\xE7a alguma mensagem nessa a\xE7\xE3o ele pode cri\xE1-la na fun\xE7\xE3o chamada pela "),i(676,"strong"),e(677,"beforeSave"),t(),e(678,`
ou definir a mensagem no atributo `),i(679,"code"),e(680,"_messages"),t(),e(681,` na resposta da API conforme definido
em `),i(682,"a",37),e(683,"Guia de implementa\xE7\xE3o de APIs"),t()()()(),i(684,"tr",14)(685,"td",15)(686,"div",16)(687,"span",17),e(688," beforeSaveNew"),n(689,"br"),t()()(),i(690,"td",18)(691,"code",24),e(692,"string "),t(),i(693,"code",39),e(694," ((resource: any, id: string) => PoPageDynamicEditBeforeSaveNew)"),t()(),i(695,"td",21)(696,"em")(697,"strong"),e(698,"(opcional)"),t()(),i(699,"p"),e(700,"Rota ou m\xE9todo que ser\xE1 chamado antes de executar o evento salvar e abrir novo registro (saveNew)."),t(),i(701,"p"),e(702,"Tanto o m\xE9todo como a API receber\xE3o o recurso e devem retornar um objeto com a defini\xE7\xE3o de "),i(703,"code"),e(704,"PoPageDynamicEditBeforeSaveNew"),t(),e(705,"."),t(),i(706,"blockquote")(707,"p"),e(708,`A URL ser\xE1 chamada via POST. Caso seja a edi\xE7\xE3o de um recurso, a URL ser\xE1 concatenada
com a key especificada no metadata, por exemplo: `),i(709,"code"),e(710,"POST {beforeSave}/{key}"),t(),e(711,"."),t()(),i(712,"p"),e(713,"Caso o desenvolvedor queira que apare\xE7a alguma mensagem nessa a\xE7\xE3o ele pode cri\xE1-la na fun\xE7\xE3o chamada pela "),i(714,"strong"),e(715,"beforeSaveNew"),t(),e(716,`
ou definir a mensagem no atributo `),i(717,"code"),e(718,"_messages"),t(),e(719,` na resposta da API conforme definido
em `),i(720,"a",37),e(721,"Guia de implementa\xE7\xE3o de APIs"),t()()()(),i(722,"tr",14)(723,"td",15)(724,"div",16)(725,"span",17),e(726," cancel"),n(727,"br"),t()()(),i(728,"td",18)(729,"code",24),e(730,"string "),t(),i(731,"code",22),e(732," boolean "),t(),i(733,"code",40),e(734," Function"),t()(),i(735,"td",21)(736,"em")(737,"strong"),e(738,"(opcional)"),t()(),i(739,"p"),e(740,"Rota de redirecionamento para a\xE7\xE3o de cancelar, caso n\xE3o seja especificada ser\xE1 usado o comando "),i(741,"code"),e(742,"navigator.back()"),t(),e(743,"."),t(),i(744,"blockquote")(745,"p"),e(746,"Se passada uma fun\xE7\xE3o, \xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o ou outro comportamento desejado."),t()(),i(747,"blockquote")(748,"p"),e(749,"Caso queira esconder a a\xE7\xE3o deve ser passado o valor "),i(750,"code"),e(751,"false"),t(),e(752,";"),t()(),i(753,"pre")(754,"code"),e(755,`actions = {
  cancel: '/'
};
`),t()()()(),i(756,"tr",14)(757,"td",15)(758,"div",16)(759,"span",17),e(760," save"),n(761,"br"),t()()(),i(762,"td",18)(763,"code",24),e(764,"string "),t(),i(765,"code",41),e(766," ((resource: any, id: string) => void)"),t()(),i(767,"td",21)(768,"em")(769,"strong"),e(770,"(opcional)"),t()(),i(771,"p"),e(772,"Rota de redirecionamento ou m\xE9todo para executar o envio dos dados ao servidor."),t(),i(773,"p"),e(774,"A rota de redirecionamento ser\xE1 executada ap\xF3s a confirma\xE7\xE3o de grava\xE7\xE3o do registro."),t(),i(775,"blockquote")(776,"p"),e(777,"A rota pode conter um par\xE2metro chamando id."),t()(),i(778,"pre")(779,"code"),e(780,`actions = {
  save: 'detail/:id'
};
`),t()(),i(781,"p"),e(782,"Se for passado um m\xE9todo:"),t(),i(783,"ul")(784,"li"),e(785,"receber\xE1 como par\xE2metro na chamada do m\xE9todo o recurso, por exemplo: "),i(786,"code"),e(787,"{ email: 'example@email.com' }"),t(),e(788,"."),t(),i(789,"li"),e(790,`\xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o e/ou envio dos dados
para o servidor ou outro comportamento desejado.`),t()()()(),i(791,"tr",14)(792,"td",15)(793,"div",16)(794,"span",17),e(795," saveNew"),n(796,"br"),t()()(),i(797,"td",18)(798,"code",24),e(799,"string "),t(),i(800,"code",42),e(801," ((resource: any, id?: string) => void)"),t()(),i(802,"td",21)(803,"em")(804,"strong"),e(805,"(opcional)"),t()(),i(806,"p"),e(807,"Rota de redirecionamento ou m\xE9todo para executar o envio dos dados ao servidor."),t(),i(808,"p"),e(809,"A rota de redirecionamento ser\xE1 executada ap\xF3s a confirma\xE7\xE3o de grava\xE7\xE3o do registro."),t(),i(810,"blockquote")(811,"p"),e(812,`Caso tratar-se de um novo registro, ser\xE1 resetado o formul\xE1rio para um novo registro.
Se estiver editando um registro a rota de redirecionamento ser\xE1 utilizada.`),t()(),i(813,"pre")(814,"code"),e(815,`actions = {
  saveNew: 'new'
};
`),t()(),i(816,"p"),e(817,"A rota pode conter um par\xE2metro id."),t(),i(818,"pre")(819,"code"),e(820,`actions = {
  saveNew: 'edit/:id'
};
`),t()(),i(821,"p"),e(822,`Ao informar um m\xE9todo \xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o e/ou envio dos dados
para o servidor ou outro comportamento desejado.`),t()()()(),i(823,"h4",35)(824,"code",5),e(825,"PoPageDynamicEditBeforeCancel"),t()(),i(826,"div",2)(827,"p"),e(828,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),i(829,"code"),e(830,"beforeCancel"),t(),e(831,"."),t()(),i(832,"h4",10),e(833,"Propriedades"),t(),i(834,"table",11)(835,"tr",12)(836,"th",13),e(837,"Nome"),t(),i(838,"th",13),e(839,"Tipo"),t(),i(840,"th",13),e(841,"Descri\xE7\xE3o"),t()(),i(842,"tr",14)(843,"td",15)(844,"div",16)(845,"span",17),e(846," allowAction"),n(847,"br"),t()()(),i(848,"td",18)(849,"code",22),e(850,"boolean"),t()(),i(851,"td",21)(852,"em")(853,"strong"),e(854,"(opcional)"),t()(),i(855,"p"),e(856,"Define se deve ou n\xE3o executar a a\xE7\xE3o de cancelamento de edi\xE7\xE3o da p\xE1gina (cancel)"),t()()(),i(857,"tr",14)(858,"td",15)(859,"div",16)(860,"span",17),e(861," newUrl"),n(862,"br"),t()()(),i(863,"td",18)(864,"code",24),e(865,"string"),t()(),i(866,"td",21)(867,"em")(868,"strong"),e(869,"(opcional)"),t()(),i(870,"p"),e(871,"Nova rota para navega\xE7\xE3o que substituir\xE1 a definida anteriormente em "),i(872,"code"),e(873,"cancel"),t(),e(874,"."),t()()()(),i(875,"h4",35)(876,"code",5),e(877,"PoPageDynamicEditBeforeSaveNew"),t()(),i(878,"div",2)(879,"p"),e(880,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),i(881,"code"),e(882,"beforeSaveNew"),t(),e(883,"."),t()(),i(884,"h4",10),e(885,"Propriedades"),t(),i(886,"table",11)(887,"tr",12)(888,"th",13),e(889,"Nome"),t(),i(890,"th",13),e(891,"Tipo"),t(),i(892,"th",13),e(893,"Descri\xE7\xE3o"),t()(),i(894,"tr",14)(895,"td",15)(896,"div",16)(897,"span",17),e(898," allowAction"),n(899,"br"),t()()(),i(900,"td",18)(901,"code",22),e(902,"boolean"),t()(),i(903,"td",21)(904,"em")(905,"strong"),e(906,"(opcional)"),t()(),i(907,"p"),e(908,"Define se deve ou n\xE3o executar a a\xE7\xE3o salvar e novo (saveNew)."),t()()(),i(909,"tr",14)(910,"td",15)(911,"div",16)(912,"span",17),e(913," newUrl"),n(914,"br"),t()()(),i(915,"td",18)(916,"code",24),e(917,"string"),t()(),i(918,"td",21)(919,"em")(920,"strong"),e(921,"(opcional)"),t()(),i(922,"p"),e(923,"Nova rota de redirecionamento, que substituir\xE1 a rota definida anteriormente em "),i(924,"code"),e(925,"saveNew"),t(),e(926,"."),t()()(),i(927,"tr",14)(928,"td",15)(929,"div",16)(930,"span",17),e(931," resource"),n(932,"br"),t()()(),i(933,"td",18)(934,"code",43),e(935,"any"),t()(),i(936,"td",21)(937,"em")(938,"strong"),e(939,"(opcional)"),t()(),i(940,"p"),e(941,"Recurso atualizado."),t(),i(942,"p"),e(943,`Ser\xE1 feito uma mesclagem entre os valores existentes e esse novo objeto,
no entanto as propriedades que possu\xEDrem `),i(944,"code"),e(945,"key: true"),t(),e(946,` n\xE3o ser\xE3o alteradas.
Por exemplo:`),t(),i(947,"ul")(948,"li")(949,"p"),e(950,"recurso anterior com a propriedade id foi que definida como "),i(951,"em"),e(952,"key"),t(),e(953,":"),t(),i(954,"pre")(955,"code"),e(956,`{ id: 1, name: 'Ane' }
`),t()()(),i(957,"li")(958,"p"),e(959,"recurso retornado no "),i(960,"code"),e(961,"beforeSaveNew"),t(),e(962,":"),t(),i(963,"pre")(964,"code"),e(965,`{ id: 50, age: 23 }
`),t()()(),i(966,"li")(967,"p"),e(968,"Mesclagem do recurso:"),t(),i(969,"pre")(970,"code"),e(971,`{ id: 1, name: 'Ane', age: 23 }
`),t()()()(),i(972,"blockquote")(973,"p"),e(974,"Caso "),i(975,"code"),e(976,"allowAction"),t(),e(977," seja "),i(978,"code"),e(979,"false"),t(),e(980,`, o recurso ser\xE1 atualizado apenas localmente, sem concluir
a a\xE7\xE3o de salvar (saveNew).`),t()()()()(),i(981,"h4",35)(982,"code",5),e(983,"PoPageDynamicEditBeforeSave"),t()(),i(984,"div",2)(985,"p"),e(986,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),i(987,"code"),e(988,"beforeSave"),t(),e(989,"."),t()(),i(990,"h4",10),e(991,"Propriedades"),t(),i(992,"table",11)(993,"tr",12)(994,"th",13),e(995,"Nome"),t(),i(996,"th",13),e(997,"Tipo"),t(),i(998,"th",13),e(999,"Descri\xE7\xE3o"),t()(),i(1e3,"tr",14)(1001,"td",15)(1002,"div",16)(1003,"span",17),e(1004," allowAction"),n(1005,"br"),t()()(),i(1006,"td",18)(1007,"code",22),e(1008,"boolean"),t()(),i(1009,"td",21)(1010,"em")(1011,"strong"),e(1012,"(opcional)"),t()(),i(1013,"p"),e(1014,"Define se deve ou n\xE3o executar a a\xE7\xE3o salvar (save)."),t()()(),i(1015,"tr",14)(1016,"td",15)(1017,"div",16)(1018,"span",17),e(1019," newUrl"),n(1020,"br"),t()()(),i(1021,"td",18)(1022,"code",24),e(1023,"string"),t()(),i(1024,"td",21)(1025,"em")(1026,"strong"),e(1027,"(opcional)"),t()(),i(1028,"p"),e(1029,"Nova rota para salvar o recurso, que substituir\xE1 a rota definida anteriormente em "),i(1030,"code"),e(1031,"save"),t(),e(1032,"."),t()()(),i(1033,"tr",14)(1034,"td",15)(1035,"div",16)(1036,"span",17),e(1037," resource"),n(1038,"br"),t()()(),i(1039,"td",18)(1040,"code",43),e(1041,"any"),t()(),i(1042,"td",21)(1043,"em")(1044,"strong"),e(1045,"(opcional)"),t()(),i(1046,"p"),e(1047,"Recurso atualizado."),t(),i(1048,"p"),e(1049,`Ser\xE1 feito uma mesclagem entre os valores existentes e esse novo objeto.
Por exemplo:`),t(),i(1050,"ul")(1051,"li")(1052,"p"),e(1053,"recurso anterior:"),t(),i(1054,"pre")(1055,"code"),e(1056,`{ name: 'Ane' }
`),t()()(),i(1057,"li")(1058,"p"),e(1059,"recurso retornado no "),i(1060,"code"),e(1061,"beforeSave"),t(),e(1062,":"),t(),i(1063,"pre")(1064,"code"),e(1065,`{ age: 23 }
`),t()()(),i(1066,"li")(1067,"p"),e(1068,"Mesclagem do recurso:"),t(),i(1069,"pre")(1070,"code"),e(1071,`{ name: 'Ane', age: 23 }
`),t()()()(),i(1072,"blockquote")(1073,"p"),e(1074,"Caso "),i(1075,"code"),e(1076,"allowAction"),t(),e(1077," seja "),i(1078,"code"),e(1079,"false"),t(),e(1080,`, o recurso ser\xE1 atualizado apenas localmente, sem concluir
a a\xE7\xE3o de salvar (save).`),t()()()()(),i(1081,"h4",35)(1082,"code",5),e(1083,"PoPageDynamicEditField"),t()(),i(1084,"div",2)(1085,"p"),e(1086,"Interface dos fields usados para compor o template "),i(1087,"code"),e(1088,"po-page-dynamic-edit"),t(),e(1089,`.
Herda as defini\xE7\xF5es da interface
`),i(1090,"a",44),e(1091,"PoDynamicFormField"),t(),e(1092,"."),t()(),i(1093,"h4",10),e(1094,"Propriedades"),t(),i(1095,"table",11)(1096,"tr",12)(1097,"th",13),e(1098,"Nome"),t(),i(1099,"th",13),e(1100,"Tipo"),t(),i(1101,"th",13),e(1102,"Descri\xE7\xE3o"),t()(),i(1103,"tr",14)(1104,"td",15)(1105,"div",16)(1106,"span",17),e(1107," duplicate"),n(1108,"br"),t()()(),i(1109,"td",18)(1110,"code",22),e(1111,"boolean"),t()(),i(1112,"td",21)(1113,"em")(1114,"strong"),e(1115,"(opcional)"),t()(),i(1116,"p"),e(1117,"Indica se o campo ser\xE1 duplicado caso seja executada a a\xE7\xE3o de duplica\xE7\xE3o."),t()()()(),i(1118,"h4",35)(1119,"code",5),e(1120,"PoPageDynamicEditLiterals"),t()(),i(1121,"div",2)(1122,"p"),e(1123,"Interface para defini\xE7\xE3o das literais usadas no "),i(1124,"code"),e(1125,"po-page-dynamic-edit"),t(),e(1126,"."),t()(),i(1127,"h4",10),e(1128,"Propriedades"),t(),i(1129,"table",11)(1130,"tr",12)(1131,"th",13),e(1132,"Nome"),t(),i(1133,"th",13),e(1134,"Tipo"),t(),i(1135,"th",13),e(1136,"Descri\xE7\xE3o"),t()(),i(1137,"tr",14)(1138,"td",15)(1139,"div",16)(1140,"span",17),e(1141," cancelConfirmMessage"),n(1142,"br"),t()()(),i(1143,"td",18)(1144,"code",24),e(1145,"string"),t()(),i(1146,"td",21)(1147,"em")(1148,"strong"),e(1149,"(opcional)"),t()(),i(1150,"p"),e(1151,"Texto exibido na mensagem de cancelamento da inclus\xE3o/edi\xE7\xE3o."),t()()(),i(1152,"tr",14)(1153,"td",15)(1154,"div",16)(1155,"span",17),e(1156," detailActionNew"),n(1157,"br"),t()()(),i(1158,"td",18)(1159,"code",24),e(1160,"string"),t()(),i(1161,"td",21)(1162,"em")(1163,"strong"),e(1164,"(opcional)"),t()(),i(1165,"p"),e(1166,"R\xF3tulo exibido no bot\xE3o "),i(1167,"code"),e(1168,"Novo"),t(),e(1169,"."),t()()(),i(1170,"tr",14)(1171,"td",15)(1172,"div",16)(1173,"span",17),e(1174," pageActionCancel"),n(1175,"br"),t()()(),i(1176,"td",18)(1177,"code",24),e(1178,"string"),t()(),i(1179,"td",21)(1180,"em")(1181,"strong"),e(1182,"(opcional)"),t()(),i(1183,"p"),e(1184,"R\xF3tulo exibido no bot\xE3o "),i(1185,"code"),e(1186,"Cancelar"),t(),e(1187,"."),t()()(),i(1188,"tr",14)(1189,"td",15)(1190,"div",16)(1191,"span",17),e(1192," pageActionSave"),n(1193,"br"),t()()(),i(1194,"td",18)(1195,"code",24),e(1196,"string"),t()(),i(1197,"td",21)(1198,"em")(1199,"strong"),e(1200,"(opcional)"),t()(),i(1201,"p"),e(1202,"R\xF3tulo exibido no bot\xE3o "),i(1203,"code"),e(1204,"Salvar"),t(),e(1205,"."),t()()(),i(1206,"tr",14)(1207,"td",15)(1208,"div",16)(1209,"span",17),e(1210," pageActionSaveNew"),n(1211,"br"),t()()(),i(1212,"td",18)(1213,"code",24),e(1214,"string"),t()(),i(1215,"td",21)(1216,"em")(1217,"strong"),e(1218,"(opcional)"),t()(),i(1219,"p"),e(1220,"R\xF3tulo exibido no bot\xE3o "),i(1221,"code"),e(1222,"Salvar e novo"),t(),e(1223,"."),t()()(),i(1224,"tr",14)(1225,"td",15)(1226,"div",16)(1227,"span",17),e(1228," registerNotFound"),n(1229,"br"),t()()(),i(1230,"td",18)(1231,"code",24),e(1232,"string"),t()(),i(1233,"td",21)(1234,"em")(1235,"strong"),e(1236,"(opcional)"),t()(),i(1237,"p"),e(1238,"Texto exibido para resgistro n\xE3o encontrado."),t()()(),i(1239,"tr",14)(1240,"td",15)(1241,"div",16)(1242,"span",17),e(1243," saveNotificationError"),n(1244,"br"),t()()(),i(1245,"td",18)(1246,"code",24),e(1247,"string"),t()(),i(1248,"td",21)(1249,"em")(1250,"strong"),e(1251,"(opcional)"),t()(),i(1252,"p"),e(1253,"Texto exibido para ocorr\xEAncia de alguma inconsist\xEAncia ao salvar."),t()()(),i(1254,"tr",14)(1255,"td",15)(1256,"div",16)(1257,"span",17),e(1258," saveNotificationSuccessSave"),n(1259,"br"),t()()(),i(1260,"td",18)(1261,"code",24),e(1262,"string"),t()(),i(1263,"td",21)(1264,"em")(1265,"strong"),e(1266,"(opcional)"),t()(),i(1267,"p"),e(1268,"Texto exibido para recurso salvo com sucesso."),t()()(),i(1269,"tr",14)(1270,"td",15)(1271,"div",16)(1272,"span",17),e(1273," saveNotificationSuccessUpdate"),n(1274,"br"),t()()(),i(1275,"td",18)(1276,"code",24),e(1277,"string"),t()(),i(1278,"td",21)(1279,"em")(1280,"strong"),e(1281,"(opcional)"),t()(),i(1282,"p"),e(1283,"Texto exibido para recurso atualizado com sucesso."),t()()(),i(1284,"tr",14)(1285,"td",15)(1286,"div",16)(1287,"span",17),e(1288," saveNotificationWarning"),n(1289,"br"),t()()(),i(1290,"td",18)(1291,"code",24),e(1292,"string"),t()(),i(1293,"td",21)(1294,"em")(1295,"strong"),e(1296,"(opcional)"),t()(),i(1297,"p"),e(1298,"Texto exibido para adivert\xEAncia de formul\xE1rio preenchido de forma incorreta."),t()()()(),i(1299,"h4",35)(1300,"code",5),e(1301,"PoPageDynamicEditMetadata"),t()(),i(1302,"div",2)(1303,"p"),e(1304,"Interface para as propriedades de uma p\xE1gina din\xE2mica. "),n(1305,"a",45),t()(),i(1306,"h4",10),e(1307,"Propriedades"),t(),i(1308,"table",11)(1309,"tr",12)(1310,"th",13),e(1311,"Nome"),t(),i(1312,"th",13),e(1313,"Tipo"),t(),i(1314,"th",13),e(1315,"Descri\xE7\xE3o"),t()(),i(1316,"tr",14)(1317,"td",15)(1318,"div",16)(1319,"span",17),e(1320," actions"),n(1321,"br"),t()()(),i(1322,"td",18)(1323,"code",19),e(1324,"PoPageDynamicEditActions"),t()(),i(1325,"td",21)(1326,"em")(1327,"strong"),e(1328,"(opcional)"),t()(),i(1329,"p"),e(1330,"A\xE7\xF5es que o usu\xE1rio poder\xE1 executar na p\xE1gina atrav\xE9s de bot\xF5es."),t()()(),i(1331,"tr",14)(1332,"td",15)(1333,"div",16)(1334,"span",17),e(1335," autoRouter"),n(1336,"br"),t()()(),i(1337,"td",18)(1338,"code",22),e(1339,"boolean"),t()(),i(1340,"td",21)(1341,"em")(1342,"strong"),e(1343,"(opcional)"),t()(),i(1344,"p"),e(1345,"Cria automaticamente as rotas de edi\xE7\xE3o (novo/duplicate) e detalhes caso sejam definidas a\xE7\xF5es na propriedade "),i(1346,"code"),e(1347,"p-actions"),t()(),i(1348,"p"),e(1349,"As rotas criadas ser\xE3o baseadas na propriedade "),i(1350,"code"),e(1351,"p-actions"),t(),e(1352,"."),t(),i(1353,"blockquote")(1354,"p"),e(1355,"Para o correto funcionamento n\xE3o pode haver nenhuma rota coringa ("),i(1356,"code"),e(1357,"**"),t(),e(1358,") especificada."),t()()()(),i(1359,"tr",14)(1360,"td",15)(1361,"div",16)(1362,"span",17),e(1363," breadcrumb"),n(1364,"br"),t()()(),i(1365,"td",18)(1366,"code",23),e(1367,"PoBreadcrumb"),t()(),i(1368,"td",21)(1369,"em")(1370,"strong"),e(1371,"(opcional)"),t()(),i(1372,"p"),e(1373,"Objeto com propriedades do breadcrumb."),t()()(),i(1374,"tr",14)(1375,"td",15)(1376,"div",16)(1377,"span",17),e(1378," fields"),n(1379,"br"),t()()(),i(1380,"td",18)(1381,"code",26),e(1382,"Array<PoPageDynamicEditField>"),t()(),i(1383,"td",21)(1384,"em")(1385,"strong"),e(1386,"(opcional)"),t()(),i(1387,"p"),e(1388,"Lista dos campos usados."),t()()(),i(1389,"tr",14)(1390,"td",15)(1391,"div",16)(1392,"span",17),e(1393," title"),n(1394,"br"),t()()(),i(1395,"td",18)(1396,"code",24),e(1397,"string"),t()(),i(1398,"td",21)(1399,"em")(1400,"strong"),e(1401,"(opcional)"),t()(),i(1402,"p"),e(1403,"T\xEDtulo da p\xE1gina."),t()()(),i(1404,"tr",14)(1405,"td",15)(1406,"div",16)(1407,"span",17),e(1408," version"),n(1409,"br"),t()()(),i(1410,"td",18)(1411,"code",46),e(1412,"number"),t()(),i(1413,"td",21)(1414,"p"),e(1415,"Vers\xE3o do metadado devolvido pelo backend."),t()()()(),i(1416,"h4",35)(1417,"code",5),e(1418,"PoPageDynamicEditOptions"),t()(),i(1419,"div",2)(1420,"p"),e(1421,"Interface para as propriedades de uma p\xE1gina din\xE2mica."),t()(),i(1422,"h4",10),e(1423,"Propriedades"),t(),i(1424,"table",11)(1425,"tr",12)(1426,"th",13),e(1427,"Nome"),t(),i(1428,"th",13),e(1429,"Tipo"),t(),i(1430,"th",13),e(1431,"Descri\xE7\xE3o"),t()(),i(1432,"tr",14)(1433,"td",15)(1434,"div",16)(1435,"span",17),e(1436," actions"),n(1437,"br"),t()()(),i(1438,"td",18)(1439,"code",19),e(1440,"PoPageDynamicEditActions"),t()(),i(1441,"td",21)(1442,"em")(1443,"strong"),e(1444,"(opcional)"),t()(),i(1445,"p"),e(1446,"A\xE7\xF5es que o usu\xE1rio poder\xE1 executar na p\xE1gina atrav\xE9s de bot\xF5es."),t()()(),i(1447,"tr",14)(1448,"td",15)(1449,"div",16)(1450,"span",17),e(1451," breadcrumb"),n(1452,"br"),t()()(),i(1453,"td",18)(1454,"code",23),e(1455,"PoBreadcrumb"),t()(),i(1456,"td",21)(1457,"em")(1458,"strong"),e(1459,"(opcional)"),t()(),i(1460,"p"),e(1461,"Objeto com propriedades do breadcrumb."),t()()(),i(1462,"tr",14)(1463,"td",15)(1464,"div",16)(1465,"span",17),e(1466," fields"),n(1467,"br"),t()()(),i(1468,"td",18)(1469,"code",26),e(1470,"Array<PoPageDynamicEditField>"),t()(),i(1471,"td",21)(1472,"em")(1473,"strong"),e(1474,"(opcional)"),t()(),i(1475,"p"),e(1476,"Lista dos campos usados."),t()()(),i(1477,"tr",14)(1478,"td",15)(1479,"div",16)(1480,"span",17),e(1481," title"),n(1482,"br"),t()()(),i(1483,"td",18)(1484,"code",24),e(1485,"string"),t()(),i(1486,"td",21)(1487,"em")(1488,"strong"),e(1489,"(opcional)"),t()(),i(1490,"p"),e(1491,"T\xEDtulo da p\xE1gina."),t()()()()())},dependencies:[g],encapsulation:2})}return a})();var H=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=2;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(o){return new(o||a)(D(k),D(F))};static \u0275cmp=m({type:a,selectors:[["ng-component"]],standalone:!1,decls:7,vars:4,consts:[["p-title","Page Dynamic Edit",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,d){o&1&&(i(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),s("p-click",function(){return d.changeTab("doc")}),n(3,"sample-po-page-dynamic-edit-doc"),t(),i(4,"po-tab",3),s("p-click",function(){return d.changeTab("web")}),n(5,"sample-po-page-dynamic-edit-basic-view")(6,"sample-po-page-dynamic-edit-user-view"),t()()()),o&2&&(l("p-actions",d.actions),p(2),l("p-active",d.activeTab==="doc"),p(2),l("p-hide",d.hidePoWebSample)("p-active",d.activeTab==="web"))},dependencies:[N,x,S,L,O,_],encapsulation:2})}return a})();var te=[{path:"",component:H}],R=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=y({type:a});static \u0275inj=v({imports:[C.forChild(te),C]})}return a})();var fe=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=y({type:a});static \u0275inj=v({imports:[M,R]})}return a})();export{fe as DocPoPageDynamicEditModule};
