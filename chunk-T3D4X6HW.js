import{o as P,p as Y}from"./chunk-SZMGPBRK.js";import{Ab as C,B as M,Fa as K,a as G,nb as X,sa as J,v as Q,zb as x}from"./chunk-OTVKLKYF.js";import{Aa as p,Cb as k,Da as y,Dc as N,Ec as W,Fc as O,Gc as z,Hc as R,La as i,Ma as t,N as B,Na as r,Q as q,Ra as A,Sa as u,U as b,Uc as H,V as S,Wc as U,Yc as V,bb as w,cb as e,eb as _,gb as v,hb as h,ib as g,ja as l,ka as L,kb as D,lb as T,mb as j,qa as c,ra as I}from"./chunk-KZJHT32G.js";var de=()=>({label:"Po Portal",link:"portal"}),le=()=>({label:"Po Breadcrumb",link:"breadcrumb"}),pe=(n,re)=>[n,re],Z=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-breadcrumb-basic"]],standalone:!1,decls:1,vars:6,consts:[[3,"p-items"]],template:function(a,o){a&1&&r(0,"po-breadcrumb",0),a&2&&p("p-items",j(3,pe,D(1,de),D(2,le)))},dependencies:[M],encapsulation:2})}return n})();var ue=n=>({"docs-sample-code-tabs":n}),ee=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-breadcrumb-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(r(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Breadcrumb Basic"),t(),i(4,"a",2),u("click",function(){return o.toggleSampleCodeTabs()}),r(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-breadcrumb-basic/sample-po-breadcrumb-basic.component.html"),t(),i(13,"pre",7),e(14,`<po-breadcrumb
  [p-items]="[
    { label: 'Po Portal', link: 'portal' },
    { label: 'Po Breadcrumb', link: 'breadcrumb' }
  ]"
>
</po-breadcrumb>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-breadcrumb-basic/sample-po-breadcrumb-basic.component.ts"),t(),i(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-breadcrumb-basic',
  templateUrl: './sample-po-breadcrumb-basic.component.html',
  standalone: false
})
export class SamplePoBreadcrumbBasicComponent {}
`),t()()()()(),i(21,"div",10),r(22,"sample-po-breadcrumb-basic"),t(),r(23,"hr")),a&2&&(l(5),y("po-icon "+o.sampleCodeButtonIcon),l(),_(" ",o.sampleCodeButtonLabel,""),l(),p("ngClass",T(4,ue,o.hideSampleCodeTabs)))},dependencies:[k,P,x,C,Z],encapsulation:2})}return n})();var te=(()=>{class n{poNotification=q(J);breadcrumbItem;breadcrumbItems;favoriteService;paramsService;ngOnInit(){this.restore()}addBreadcrumb(){let m=Object.assign({},this.breadcrumbItem);m.action=m.action?this.showAction.bind(this,m.action):void 0,this.breadcrumbItems=[...this.breadcrumbItems,m],this.restoreBreadcrumbItemForm()}restore(){this.favoriteService=void 0,this.paramsService=void 0,this.breadcrumbItems=[],this.restoreBreadcrumbItemForm()}restoreBreadcrumbItemForm(){this.breadcrumbItem={action:void 0,label:void 0,link:void 0}}showAction(m){this.poNotification.success(`Breadcrumb clicked: ${m}`)}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-breadcrumb-labs"]],standalone:!1,decls:19,vars:11,consts:[["breadcrumbForm","ngForm"],["propertiesForm","ngForm"],[3,"p-favorite-service","p-items","p-params-service"],[1,"po-row"],["name","breadcrumbAction","p-label","Breadcrumb action",1,"po-md-4",3,"ngModelChange","ngModel"],["name","breadcrumbLabel","p-label","Breadcrumb label","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","breadcrumbLink","p-label","Breadcrumb link",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb",1,"po-md-3",3,"p-click","p-disabled"],["name","favoriteService","p-clean","","p-help","Ex.: https://po-sample-api.onrender.com/v1/favorite","p-label","Favorite service",1,"po-md-6",3,"ngModelChange","ngModel","p-disabled"],["name","paramsService","p-clean","","p-help","Ex.: { id: 14, user: 'dev.po' }","p-label","Params service",1,"po-md-6",3,"ngModelChange","ngModel","p-disabled"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,o){if(a&1){let s=A();r(0,"po-breadcrumb",2)(1,"po-divider"),i(2,"form",null,0)(4,"div",3)(5,"po-input",4),g("ngModelChange",function(d){return b(s),h(o.breadcrumbItem.action,d)||(o.breadcrumbItem.action=d),S(d)}),t(),i(6,"po-input",5),g("ngModelChange",function(d){return b(s),h(o.breadcrumbItem.label,d)||(o.breadcrumbItem.label=d),S(d)}),t(),i(7,"po-input",6),g("ngModelChange",function(d){return b(s),h(o.breadcrumbItem.link,d)||(o.breadcrumbItem.link=d),S(d)}),t()(),i(8,"div",3)(9,"po-button",7),u("p-click",function(){return b(s),S(o.addBreadcrumb())}),t()()(),r(10,"po-divider"),i(11,"form",null,1)(13,"div",3)(14,"po-input",8),g("ngModelChange",function(d){return b(s),h(o.favoriteService,d)||(o.favoriteService=d),S(d)}),t(),i(15,"po-input",9),g("ngModelChange",function(d){return b(s),h(o.paramsService,d)||(o.paramsService=d),S(d)}),t()(),r(16,"po-divider"),i(17,"div",3)(18,"po-button",10),u("p-click",function(){b(s);let d=w(3),me=w(12);return d.reset(),me.reset(),S(o.restore())}),t()()()}if(a&2){let s=w(3);p("p-favorite-service",o.favoriteService)("p-items",o.breadcrumbItems)("p-params-service",o.paramsService),l(5),v("ngModel",o.breadcrumbItem.action),l(),v("ngModel",o.breadcrumbItem.label),l(),v("ngModel",o.breadcrumbItem.link),l(2),p("p-disabled",s.invalid),l(5),v("ngModel",o.favoriteService),p("p-disabled",!(o.breadcrumbItems!=null&&o.breadcrumbItems.length)),l(),v("ngModel",o.paramsService),p("p-disabled",!(o.breadcrumbItems!=null&&o.breadcrumbItems.length))}},dependencies:[R,N,W,z,O,M,Q,G,K],encapsulation:2})}return n})();var Ee=n=>({"docs-sample-code-tabs":n}),ie=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-breadcrumb-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(r(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Breadcrumb Labs"),t(),i(4,"a",2),u("click",function(){return o.toggleSampleCodeTabs()}),r(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-breadcrumb-labs/sample-po-breadcrumb-labs.component.html"),t(),i(13,"pre",7),e(14,`<po-breadcrumb [p-favorite-service]="favoriteService" [p-items]="breadcrumbItems" [p-params-service]="paramsService">
</po-breadcrumb>

<po-divider />

<form #breadcrumbForm="ngForm">
  <div class="po-row">
    <po-input class="po-md-4" name="breadcrumbAction" [(ngModel)]="breadcrumbItem.action" p-label="Breadcrumb action">
    </po-input>

    <po-input
      class="po-md-4"
      name="breadcrumbLabel"
      [(ngModel)]="breadcrumbItem.label"
      p-label="Breadcrumb label"
      p-required
    >
    </po-input>

    <po-input class="po-md-4" name="breadcrumbLink" [(ngModel)]="breadcrumbItem.link" p-label="Breadcrumb link">
    </po-input>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Add breadcrumb"
      [p-disabled]="breadcrumbForm.invalid"
      (p-click)="addBreadcrumb()"
    >
    </po-button>
  </div>
</form>

<po-divider />

<form #propertiesForm="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="favoriteService"
      [(ngModel)]="favoriteService"
      p-clean
      p-help="Ex.: https://po-sample-api.onrender.com/v1/favorite"
      p-label="Favorite service"
      [p-disabled]="!breadcrumbItems?.length"
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="paramsService"
      [(ngModel)]="paramsService"
      p-clean
      p-help="Ex.: { id: 14, user: 'dev.po' }"
      p-label="Params service"
      [p-disabled]="!breadcrumbItems?.length"
    >
    </po-input>
  </div>

  <po-divider />

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Sample Restore"
      (p-click)="breadcrumbForm.reset(); propertiesForm.reset(); restore()"
    >
    </po-button>
  </div>
</form>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-breadcrumb-labs/sample-po-breadcrumb-labs.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';

import { PoBreadcrumbItem, PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-breadcrumb-labs',
  templateUrl: './sample-po-breadcrumb-labs.component.html',
  standalone: false
})
export class SamplePoBreadcrumbLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  breadcrumbItem: PoBreadcrumbItem;
  breadcrumbItems: Array<PoBreadcrumbItem>;
  favoriteService: string;
  paramsService: object;

  ngOnInit() {
    this.restore();
  }

  addBreadcrumb() {
    const breadcrumbItem: PoBreadcrumbItem = Object.assign({}, this.breadcrumbItem);
    breadcrumbItem.action = breadcrumbItem.action ? this.showAction.bind(this, breadcrumbItem.action) : undefined;

    this.breadcrumbItems = [...this.breadcrumbItems, breadcrumbItem];

    this.restoreBreadcrumbItemForm();
  }

  restore() {
    this.favoriteService = undefined;
    this.paramsService = undefined;
    this.breadcrumbItems = [];
    this.restoreBreadcrumbItemForm();
  }

  restoreBreadcrumbItemForm() {
    this.breadcrumbItem = { action: undefined, label: undefined, link: undefined };
  }

  private showAction(action: string) {
    this.poNotification.success(\`Breadcrumb clicked: \${action}\`);
  }
}
`),t()()()()(),i(21,"div",10),r(22,"sample-po-breadcrumb-labs"),t(),r(23,"hr")),a&2&&(l(5),y("po-icon "+o.sampleCodeButtonIcon),l(),_(" ",o.sampleCodeButtonLabel,""),l(),p("ngClass",T(4,Ee,o.hideSampleCodeTabs)))},dependencies:[k,P,x,C,te],encapsulation:2})}return n})();var ne=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-breadcrumb-doc"]],standalone:!1,decls:379,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoBreadcrumbItem[]"],["pan","",1,"docs-api-property-type","object"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"]],template:function(a,o){a&1&&(i(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoBreadcrumbModule } from '@po-ui/ng-components';"),t()(),i(4,"div",2)(5,"p"),e(6,"M\xF3dulo do componente po-breadcrumb."),t()(),i(7,"h3",3),e(8,"Componente"),t(),i(9,"h4",4)(10,"code",5),e(11,"PoBreadcrumbComponent"),t()(),i(12,"div",2)(13,"p"),e(14,`Este componente gera uma estrutura de navega\xE7\xE3o que apresenta ao usu\xE1rio a localiza\xE7\xE3o
da URL atual, exibindo as antecessoras conforme \xE9 realizado a navega\xE7\xE3o na aplica\xE7\xE3o.`),t(),i(15,"p"),e(16,`Quando n\xE3o houver espa\xE7amento suficiente para exibi-l\xE1s, o componente se encarrega tamb\xE9m
de agrupar as URLs antecessoras, gerando assim um \xEDcone que permite a visualiza\xE7\xE3o em cascata.`),t(),i(17,"p"),e(18,"Caso um endere\xE7o seja especificado na propriedade "),i(19,"code"),e(20,"p-favorite-service"),t(),e(21,`, o componente permite ao usu\xE1rio
favoritar a URL.`),t(),i(22,"p"),e(23,`Havendo necessidade de incluir par\xE2metros na requisi\xE7\xE3o do servi\xE7o,
o componente disp\xF5e da propriedade `),i(24,"code"),e(25,"p-params-service"),t(),e(26," que recebe um objeto contendo as informa\xE7\xF5es."),t(),i(27,"h4"),e(28,"Tokens customiz\xE1veis"),t(),i(29,"p"),e(30,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),i(31,"blockquote")(32,"p"),e(33,"Para maiores informa\xE7\xF5es, acesse o guia "),i(34,"a",6),e(35,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(36,"."),t()(),i(37,"table")(38,"thead")(39,"tr")(40,"th"),e(41,"Propriedade"),t(),i(42,"th"),e(43,"Descri\xE7\xE3o"),t(),i(44,"th"),e(45,"Valor Padr\xE3o"),t()()(),i(46,"tbody")(47,"tr")(48,"td")(49,"strong"),e(50,"Default Values"),t()(),r(51,"td")(52,"td"),t(),i(53,"tr")(54,"td")(55,"code"),e(56,"--font-family"),t()(),i(57,"td"),e(58,"Fam\xEDlia tipogr\xE1fica usada \xA0"),t(),i(59,"td")(60,"code"),e(61,"var(--font-family-theme)"),t()()(),i(62,"tr")(63,"td")(64,"code"),e(65,"--color"),t()(),i(66,"td"),e(67,"Cor principal do icone de lista"),t(),i(68,"td")(69,"code"),e(70,"var(--color-action-default)"),t()()(),i(71,"tr")(72,"td")(73,"code"),e(74,"--color-icon"),t()(),i(75,"td"),e(76,'Cor do icone ">"'),t(),i(77,"td")(78,"code"),e(79,"var(--color-neutral-mid-60)"),t()()(),i(80,"tr")(81,"td")(82,"code"),e(83,"--color-current-page"),t(),e(84," \xA0"),t(),i(85,"td"),e(86,"Cor do pagina atual"),t(),i(87,"td")(88,"code"),e(89,"var(--color-neutral-mid-60)"),t()()()()()(),i(90,"div",7)(91,"h4",8),e(92,"Seletor"),t(),i(93,"pre",9),e(94,`<po-breadcrumb
    p-favorite-service="string"
    p-items="PoBreadcrumbItem[]"
    p-params-service="object"
    p-size="string" >
</po-breadcrumb>
`),t()(),i(95,"h4",10),e(96,"Propriedades"),t(),i(97,"table",11)(98,"tr",12)(99,"th",13),e(100,"Nome"),t(),i(101,"th",13),e(102,"Tipo"),t(),i(103,"th",13),e(104,"Padr\xE3o"),t(),i(105,"th",13),e(106,"Descri\xE7\xE3o"),t()(),i(107,"tr",14)(108,"td",15)(109,"div",16)(110,"span",17),e(111," p-favorite-service"),r(112,"br"),t()()(),i(113,"td",18)(114,"code",19),e(115,"string"),t()(),i(116,"td",20),e(117,"-"),t(),i(118,"td",21)(119,"em")(120,"strong"),e(121,"(opcional)"),t()(),i(122,"p"),e(123,"Permite definir uma URL no componente "),i(124,"code"),e(125,"po-breadcrumb"),t(),e(126," para favoritar ou desfavoritar."),t(),i(127,"blockquote")(128,"p"),e(129,"Para utilizar esta propriedade, o \xFAltimo "),i(130,"code"),e(131,"PoBreadcrumbItem"),t(),e(132," da lista de items da propriedade "),i(133,"code"),e(134,"p-items"),t(),e(135," deve ter um link informado."),t()(),i(136,"blockquote")(137,"p"),e(138,"A API deve estar preparada para retornar um objeto no formato "),i(139,"code"),e(140,"{ isFavorite: boolean }"),t(),e(141,"."),t()(),i(142,"p"),e(143,"Ao iniciar, o "),i(144,"code"),e(145,"po-breadcrumb"),t(),e(146," faz um GET na URL definida na propriedade "),i(147,"code"),e(148,"p-favorite-service"),t(),e(149,` e deve retornar a propriedade
`),i(150,"code"),e(151,"{ isFavorite: boolean }"),t(),e(152," do \xFAltimo "),i(153,"code"),e(154,"PoBreadcrumbItem"),t(),e(155," definido na lista de itens da propriedade "),i(156,"code"),e(157,"p-items"),t(),e(158,"."),t(),i(159,"p"),e(160,"Ao clicar em favoritar ou desfavoritar o "),i(161,"code"),e(162,"po-breadcrumb"),t(),e(163," faz um POST com o link e a propriedade "),i(164,"code"),e(165,"{ isFavorite: boolean }"),t(),e(166,`
definidos no \xFAltimo item da propriedade `),i(167,"code"),e(168,"p-items"),t(),e(169,"."),t(),i(170,"blockquote")(171,"p"),e(172,"Caso algum par\xE2metro seja definido na propriedade "),i(173,"code"),e(174,"p-params-service"),t(),e(175,`, o mesmo ser\xE1 enviado para a API e retornar\xE1
ap\xF3s fazer um GET ou POST.`),t()(),i(176,"p"),e(177,"Exemplo de URL contendo o servi\xE7o de favoritar ou desfavoritar:"),t(),i(178,"pre")(179,"code"),e(180,`https://po-ui.io/sample/api/favorite
`),t()(),i(181,"p"),e(182,"Ao fazer o GET o "),i(183,"code"),e(184,"po-breadcrumb"),t(),e(185," concatena o link com a URL de servi\xE7o. Exemplo:"),t(),i(186,"pre")(187,"code"),e(188,`GET http://<domain>/api/favorite?url=/example
`),t()(),i(189,"pre")(190,"code"),e(191,`GET http://po.com.br/sample/api/favorite?url=/example
`),t()(),i(192,"pre")(193,"code"),e(194,`POST
payload: { isFavorite: true, url: '/example' }
`),t()(),i(195,"p"),e(196,"Caso possua par\xE2metros definidos na propriedade "),i(197,"code"),e(198,"p-params-service"),t(),e(199,":"),t(),i(200,"pre")(201,"code"),e(202,`POST
payload: { isFavorite: true, url: "/example", params: "{ id: 14, user: 'dev.po' }" }
`),t()(),i(203,"p"),e(204,"Exemplos de retorno:"),t(),i(205,"pre")(206,"code"),e(207,`{ isFavorite: true, url: "/example" }
`),t()(),i(208,"pre")(209,"code"),e(210,`{ isFavorite: false, url: "/example" }
`),t()(),i(211,"pre")(212,"code"),e(213,`{ isFavorite: false, url: "/example", params: "{ id: 14, user: 'dev.po' }" }
`),t()()()(),i(214,"tr",14)(215,"td",15)(216,"div",16)(217,"span",17),e(218," p-items"),r(219,"br"),t()()(),i(220,"td",18)(221,"code",22),e(222,"PoBreadcrumbItem[]"),t()(),i(223,"td",20),e(224,"-"),t(),i(225,"td",21)(226,"p"),e(227,"Lista de itens do "),i(228,"em"),e(229,"breadcrumb"),t(),e(230,"."),t(),i(231,"p")(232,"strong"),e(233,"Exemplo:"),t()(),i(234,"pre")(235,"code"),e(236,`{ label: 'Po Portal', link: 'portal' }
`),t()()()(),i(237,"tr",14)(238,"td",15)(239,"div",16)(240,"span",17),e(241," p-params-service"),r(242,"br"),t()()(),i(243,"td",18)(244,"code",23),e(245,"object"),t()(),i(246,"td",20),e(247,"-"),t(),i(248,"td",21)(249,"em")(250,"strong"),e(251,"(opcional)"),t()(),i(252,"p"),e(253,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),t()()(),i(254,"tr",14)(255,"td",15)(256,"div",16)(257,"span",17),e(258," p-size"),r(259,"br"),t()()(),i(260,"td",18)(261,"code",19),e(262,"string"),t()(),i(263,"td",20)(264,"p")(265,"code"),e(266,"medium"),t()()(),i(267,"td",21)(268,"em")(269,"strong"),e(270,"(opcional)"),t()(),i(271,"p"),e(272,"Define o tamanho do componente entre "),i(273,"code"),e(274,"small"),t(),e(275," ou "),i(276,"code"),e(277,"medium"),t(),e(278,"."),t(),i(279,"blockquote")(280,"p"),e(281,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(282,"code"),e(283,"medium"),t(),e(284,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(285,"a",24),e(286,"po-theme"),t(),e(287,"."),t()()()()(),i(288,"h3"),e(289,"Interfaces"),t(),i(290,"h4",25)(291,"code",5),e(292,"PoBreadcrumbItem"),t()(),i(293,"div",2)(294,"p"),e(295,"Interface que define cada item do componente "),i(296,"strong"),e(297,"po-breadcrumb"),t(),e(298,"."),t()(),i(299,"h4",10),e(300,"Propriedades"),t(),i(301,"table",11)(302,"tr",12)(303,"th",13),e(304,"Nome"),t(),i(305,"th",13),e(306,"Tipo"),t(),i(307,"th",13),e(308,"Descri\xE7\xE3o"),t()(),i(309,"tr",14)(310,"td",15)(311,"div",16)(312,"span",17),e(313," action"),r(314,"br"),t()()(),i(315,"td",18)(316,"code",26),e(317,"Function"),t()(),i(318,"td",21)(319,"em")(320,"strong"),e(321,"(opcional)"),t()(),i(322,"p"),e(323,"A\xE7\xE3o executada ao clicar no item."),t(),i(324,"blockquote")(325,"p"),e(326,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),i(327,"em"),e(328,"label"),t(),e(329," do item como par\xE2metro para execu\xE7\xE3o."),t()()()(),i(330,"tr",14)(331,"td",15)(332,"div",16)(333,"span",17),e(334," label"),r(335,"br"),t()()(),i(336,"td",18)(337,"code",19),e(338,"string"),t()(),i(339,"td",21)(340,"p"),e(341,"R\xF3tulo do item."),t()()(),i(342,"tr",14)(343,"td",15)(344,"div",16)(345,"span",17),e(346," link"),r(347,"br"),t()()(),i(348,"td",18)(349,"code",19),e(350,"string"),t()(),i(351,"td",21)(352,"em")(353,"strong"),e(354,"(opcional)"),t()(),i(355,"p"),e(356,"Url do item."),t(),i(357,"blockquote")(358,"p"),e(359,"Caso o item tamb\xE9m contenha uma "),i(360,"em"),e(361,"action"),t(),e(362," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),i(363,"em"),e(364,"link"),t(),e(365,"."),t()(),i(366,"blockquote")(367,"p"),e(368,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),i(369,"strong")(370,"a",27),e(371,"Veja um exemplo de como criar rotas aqui"),t()(),e(372,"."),t()(),i(373,"blockquote")(374,"p"),e(375,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),i(376,"code"),e(377,"p-favorite-service"),t(),e(378," consiga favoritar ou desfavoritar."),t()()()()()())},dependencies:[P],encapsulation:2})}return n})();var oe=(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=2;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||n)(L(H),L(U))};static \u0275cmp=c({type:n,selectors:[["ng-component"]],standalone:!1,decls:7,vars:4,consts:[["p-title","Breadcrumb",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(i(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u("p-click",function(){return o.changeTab("doc")}),r(3,"sample-po-breadcrumb-doc"),t(),i(4,"po-tab",3),u("p-click",function(){return o.changeTab("web")}),r(5,"sample-po-breadcrumb-basic-view")(6,"sample-po-breadcrumb-labs-view"),t()()()),a&2&&(p("p-actions",o.actions),l(2),p("p-active",o.activeTab==="doc"),l(2),p("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"))},dependencies:[X,x,C,ee,ie,ne],encapsulation:2})}return n})();var he=[{path:"",component:oe}],ae=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=I({type:n});static \u0275inj=B({imports:[V.forChild(he),V]})}return n})();var Re=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=I({type:n});static \u0275inj=B({imports:[Y,ae]})}return n})();export{Re as DocPoBreadcrumbModule};
