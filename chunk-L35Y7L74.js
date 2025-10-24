import{n as z,o as X,p as U}from"./chunk-I35J7BQK.js";import{Ab as w,Q as B,a as V,nb as W,v as j,zb as M}from"./chunk-I3ESE4C7.js";import{Aa as d,Cb as D,Da as y,Dc as N,Ec as O,Fc as k,Gc as F,Hc as A,La as o,Ma as t,N as S,Na as s,Ra as I,Sa as c,U as g,Uc as L,V as h,Wc as R,Yc as _,_b as q,cb as e,eb as H,gb as v,hb as P,ib as C,ja as l,ka as E,lb as T,qa as u,ra as x}from"./chunk-KZJHT32G.js";var J=(()=>{class n{http;headerParam;requestMessage;status;errorMessage=`{
    "code": "401",
    "message": "Not Authorized",
    "detailTitle": "Invalid credentials",
    "detailedMessage": "The request has not been applied because it lacks valid authentication credentials for the target resource.",
    "type": "error",
    "helpUrl": "",
    "details": [{
        "code": "406",
        "message": "Not Acceptable",
        "detailedMessage": "The target resource does not have a current representation that would be acceptable to the user agent",
        "type": "error"
    }]
}`;successMessage=`{
    "_messages": [
        {
            "code": "200",
            "message": "Ok",
            "detailedMessage": "The request has succeeded.",
            "type": "success",
            "helpUrl": "",
            "details": [{
              "code": "202",
              "message": "Accepted",
              "detailTitle": "Request was received",
              "detailedMessage": "The request has been accepted for processing, but the processing has not been completed.",
              "type": "warning"
            }]
        }
    ]
}`;statusOptions=[{label:"200 - Success",value:"200"},{label:"401 - Error",value:"401"}];headerParamOptions=[{label:"X-PO-No-Message",value:"No-Message"},{label:"X-PO-No-Error",value:"No-Error"}];apiSubscription;constructor(a){this.http=a}ngOnDestroy(){this.apiSubscription&&this.apiSubscription.unsubscribe()}ngOnInit(){this.restore()}changeOption(){this.requestMessage=this.status==="200"?this.successMessage:this.errorMessage}getParam(){return this.headerParam==="No-Message"?{"X-PO-No-Message":"true"}:this.headerParam==="No-Error"?{"X-PO-No-Error":"true"}:{}}processRequest(){let a=this.getParam(),r=JSON.parse(this.requestMessage),i={status:this.status||""};this.apiSubscription=this.http.post("https://po-sample-api.onrender.com/v1/messages",r,{headers:a,params:i}).subscribe()}restore(){this.headerParam=void 0,this.requestMessage=this.successMessage,this.status="200"}static \u0275fac=function(r){return new(r||n)(E(q))};static \u0275cmp=u({type:n,selectors:[["sample-po-http-interceptor-labs"]],standalone:!1,decls:15,vars:5,consts:[["requestForm","ngForm"],[1,"po-text-color-neutral-dark-40"],["p-height","330","p-theme","vs-dark",3,"ngModelChange","ngModel"],[1,"po-row"],["name","status","p-label","Http Status",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","headerParam","p-label","Disables Notifications",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],[1,"po-row","po-mt-1"],["p-label","Process Request",1,"po-md-3",3,"p-click"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(r,i){if(r&1){let m=I();o(0,"h2"),e(1,"Process request with Http Interceptor"),t(),o(2,"p",1),e(3,"Edit response object by server with pattern expected by Http Interceptor:"),t(),o(4,"po-code-editor",2),C("ngModelChange",function(p){return g(m),P(i.requestMessage,p)||(i.requestMessage=p),h(p)}),t(),s(5,"po-divider"),o(6,"form",null,0)(8,"div",3)(9,"po-radio-group",4),C("ngModelChange",function(p){return g(m),P(i.status,p)||(i.status=p),h(p)}),c("p-change",function(){return g(m),h(i.changeOption())}),t(),o(10,"po-radio-group",5),C("ngModelChange",function(p){return g(m),P(i.headerParam,p)||(i.headerParam=p),h(p)}),t()(),o(11,"div",6)(12,"po-button",7),c("p-click",function(){return g(m),h(i.processRequest())}),t()(),o(13,"div",6)(14,"po-button",8),c("p-click",function(){return g(m),h(i.restore())}),t()()()}r&2&&(l(4),v("ngModel",i.requestMessage),l(5),v("ngModel",i.status),d("p-options",i.statusOptions),l(),v("ngModel",i.headerParam),d("p-options",i.headerParamOptions))},dependencies:[A,N,O,F,k,j,V,B,z],encapsulation:2})}return n})();var ee=n=>({"docs-sample-code-tabs":n}),K=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||n)};static \u0275cmp=u({type:n,selectors:[["sample-po-http-interceptor-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(s(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Http Interceptor Labs"),t(),o(4,"a",2),c("click",function(){return i.toggleSampleCodeTabs()}),s(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-http-interceptor-labs.component.html"),t(),o(13,"pre",7),e(14,`<h2>Process request with Http Interceptor</h2>
<p class="po-text-color-neutral-dark-40">Edit response object by server with pattern expected by Http Interceptor:</p>

<po-code-editor [(ngModel)]="requestMessage" p-height="330" p-theme="vs-dark"> </po-code-editor>

<po-divider />

<form #requestForm="ngForm">
  <div class="po-row">
    <po-radio-group
      class="po-md-6"
      name="status"
      [(ngModel)]="status"
      p-label="Http Status"
      [p-options]="statusOptions"
      (p-change)="changeOption()"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-6"
      name="headerParam"
      [(ngModel)]="headerParam"
      p-label="Disables Notifications"
      [p-options]="headerParamOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row po-mt-1">
    <po-button class="po-md-3" p-label="Process Request" (p-click)="processRequest()"> </po-button>
  </div>

  <div class="po-row po-mt-1">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-http-interceptor-labs.component.ts"),t(),o(19,"pre",9),e(20,`// import { PoRadioGroupOption } from './../../../../../../../dist/ng-components/lib/components/po-field/po-radio-group/po-radio-group-option.interface.d';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { PoRadioGroupOption } from '@po-ui/ng-components';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sample-po-http-interceptor-labs',
  templateUrl: './sample-po-http-interceptor-labs.component.html',
  standalone: false
})
export class SamplePoHttpInterceptorLabsComponent implements OnDestroy, OnInit {
  headerParam: string;
  requestMessage: string;
  status: string;

  errorMessage = \`{
    "code": "401",
    "message": "Not Authorized",
    "detailTitle": "Invalid credentials",
    "detailedMessage": "The request has not been applied because it lacks valid authentication credentials for the target resource.",
    "type": "error",
    "helpUrl": "",
    "details": [{
        "code": "406",
        "message": "Not Acceptable",
        "detailedMessage": "The target resource does not have a current representation that would be acceptable to the user agent",
        "type": "error"
    }]
}\`;

  successMessage = \`{
    "_messages": [
        {
            "code": "200",
            "message": "Ok",
            "detailedMessage": "The request has succeeded.",
            "type": "success",
            "helpUrl": "",
            "details": [{
              "code": "202",
              "message": "Accepted",
              "detailTitle": "Request was received",
              "detailedMessage": "The request has been accepted for processing, but the processing has not been completed.",
              "type": "warning"
            }]
        }
    ]
}\`;

  readonly statusOptions: Array<PoRadioGroupOption> = [
    { label: '200 - Success', value: '200' },
    { label: '401 - Error', value: '401' }
  ];

  readonly headerParamOptions: Array<PoRadioGroupOption> = [
    { label: 'X-PO-No-Message', value: 'No-Message' },
    { label: 'X-PO-No-Error', value: 'No-Error' }
  ];

  private apiSubscription: Subscription;

  constructor(private http: HttpClient) {}

  ngOnDestroy() {
    if (this.apiSubscription) {
      this.apiSubscription.unsubscribe();
    }
  }

  ngOnInit() {
    this.restore();
  }

  changeOption() {
    this.requestMessage = this.status === '200' ? this.successMessage : this.errorMessage;
  }

  getParam() {
    return this.headerParam === 'No-Message'
      ? { 'X-PO-No-Message': 'true' }
      : this.headerParam === 'No-Error'
        ? { 'X-PO-No-Error': 'true' }
        : {};
  }

  processRequest() {
    const headers = this.getParam();
    const body = JSON.parse(this.requestMessage);
    const params = { status: this.status || '' };

    this.apiSubscription = this.http
      .post(\`https://po-sample-api.onrender.com/v1/messages\`, body, { headers, params })
      .subscribe();
  }

  restore() {
    this.headerParam = undefined;
    this.requestMessage = this.successMessage;
    this.status = '200';
  }
}
`),t()()()()(),o(21,"div",10),s(22,"sample-po-http-interceptor-labs"),t(),s(23,"hr")),r&2&&(l(5),y("po-icon "+i.sampleCodeButtonIcon),l(),H(" ",i.sampleCodeButtonLabel,""),l(),d("ngClass",T(4,ee,i.hideSampleCodeTabs)))},dependencies:[D,X,M,w,J],encapsulation:2})}return n})();var Q=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275cmp=u({type:n,selectors:[["sample-po-http-interceptor-doc"]],standalone:!1,decls:190,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","guides/api"]],template:function(r,i){r&1&&(o(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoHttpInterceptorModule } from '@po-ui/ng-components';"),t()(),s(4,"div",2),o(5,"h3",3),e(6,"Services"),t(),o(7,"h4",4)(8,"code",5),e(9,"PoHttpInterceptorService"),t()(),o(10,"div",2)(11,"p"),e(12,"O "),o(13,"em"),e(14,"interceptor"),t(),e(15," tem a finalidade de exibir notifica\xE7\xF5es com mensagens na tela, baseado nas respostas das requisi\xE7\xF5es HTTP."),t(),o(16,"p"),e(17,`Pode ser utilizado para dar feedback das a\xE7\xF5es do usu\xE1rio como, por exemplo: erro de autoriza\xE7\xE3o, mensagens de regras de neg\xF3cio,
atualiza\xE7\xF5es de registros, erro quando o servidor estiver indispon\xEDvel e entre outros.`),t(),o(18,"h2"),e(19,"Configura\xE7\xE3o"),t(),o(20,"p"),e(21,"Para o correto funcionamento do interceptor "),o(22,"code"),e(23,"po-http-interceptor"),t(),e(24,", deve ser importado o "),o(25,"code"),e(26,"BrowserAnimationsModule"),t(),e(27,` na
aplica\xE7\xE3o. Al\xE9m disso, \xE9 necess\xE1rio configurar o `),o(28,"code"),e(29,"HttpClient"),t(),e(30,` para utilizar os interceptors registrados via Dependency
Injection (DI) por meio da fun\xE7\xE3o `),o(31,"code"),e(32,"provideHttpClient(withInterceptorsFromDi())"),t(),e(33,"."),t(),o(34,"h3"),e(35,"1) NgModule"),t(),o(36,"p"),e(37,"No m\xF3dulo principal da aplica\xE7\xE3o (geralmente "),o(38,"code"),e(39,"AppModule"),t(),e(40,"), importe o "),o(41,"code"),e(42,"BrowserAnimationsModule"),t(),e(43," e configure o "),o(44,"code"),e(45,"HttpClient"),t(),e(46,`,
como no exemplo abaixo:`),t(),o(47,"pre")(48,"code"),e(49,`import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { PoModule } from '@po-ui/ng-components';
...

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ...
    PoModule
  ],
  declarations: [
    AppComponent,
    ...
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    ...
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
`),t()(),o(50,"p"),e(51,"Ao importar o m\xF3dulo "),o(52,"code"),e(53,"PoModule"),t(),e(54," na aplica\xE7\xE3o, o "),o(55,"code"),e(56,"po-http-interceptor"),t(),e(57,` \xE9 automaticamente configurado sem a necessidade
de qualquer configura\xE7\xE3o extra.`),t(),o(58,"h3"),e(59,"2) Standalone"),t(),o(60,"p"),e(61,"No arquivo contendo a configura\xE7\xE3o da aplica\xE7\xE3o (geralmente "),o(62,"code"),e(63,"src/app/app.config.ts"),t(),e(64,"), adicione os providers e configure o "),o(65,"code"),e(66,"HttpClient"),t(),e(67,`,
como no exemplo abaixo:`),t(),o(68,"pre")(69,"code"),e(70,`import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { PoHttpInterceptorModule } from '@po-ui/ng-components';

export const appConfig: ApplicationConfig = {
  providers: [
    ...
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom([
      PoHttpInterceptorModule
    ]),
    ...
  ]
};
`),t()(),o(71,"h2"),e(72,"Como usar"),t(),o(73,"p"),e(74,"Ao realizar requisi\xE7\xF5es utilize o "),o(75,"code"),e(76,"HttpClient"),t(),e(77,", conforme exemplo abaixo:"),t(),o(78,"pre")(79,"code"),e(80,`import { HttpClient } from '@angular/common/http';

...

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('/api/users');
  }

  ...

}
`),t()(),o(81,"p"),e(82,`Para exibir as notica\xE7\xF5es \xE9 necess\xE1rio informar a mensagem no retorno da requisi\xE7\xE3o. A estrutura da mensagem
\xE9 feita com base no status da resposta, conforme ser\xE1 apresentado nos pr\xF3ximos t\xF3picos.`),t(),o(83,"h3"),e(84,"Estrutura das mensagens"),t(),o(85,"h4"),e(86,"Mensagens de sucesso "),o(87,"code"),e(88,"2xx"),t()(),o(89,"p"),e(90,"Para exibir mensagens ao retornar uma lista ou um item, deve-se incluir a propriedade "),o(91,"code"),e(92,"_messages"),t(),e(93,` no objeto de retorno.
Por exemplo:`),t(),o(94,"pre")(95,"code"),e(96,`{
  "_messages": [
    {
      "type": "success" || "warning" || "error" || "information" (ser\xE1 exibido a \`tag\` apenas se esta propriedade possuir valor),
      "code": "t\xEDtulo ou c\xF3digo da mensagem",
      "message": "texto da mensagem",
      "detailedMessage": "detalhamento da mensagem"
    }
  ]
}
`),t()(),o(97,"h4"),e(98,"Mensagens de erro "),o(99,"code"),e(100,"4xx"),t(),e(101," ou "),o(102,"code"),e(103,"5xx"),t()(),o(104,"p"),e(105,"Ao retornar erro, o objeto n\xE3o necessita ter "),o(106,"code"),e(107,"_messages"),t(),e(108,", deve-se retornar o objeto diretamente:"),t(),o(109,"pre")(110,"code"),e(111,`{
   "code": "t\xEDtulo ou c\xF3digo da mensagem",
   "message": "texto da mensagem",
   "detailedMessage": "detalhamento da mensagem"
}
`),t()(),o(112,"p"),e(113,"Tamb\xE9m \xE9 poss\xEDvel informar as seguintes propriedades:"),t(),o(114,"ul")(115,"li")(116,"code"),e(117,"helpUrl"),t(),e(118,": link para a documenta\xE7\xE3o do erro;"),o(119,"ul")(120,"li"),e(121,'Caso for informado, ser\xE1 exibido uma a\xE7\xE3o de "Ajuda" na notifica\xE7\xE3o, para isso n\xE3o dever\xE1 ter a propriedade '),o(122,"code"),e(123,"detailedMessage"),t(),e(124,"."),t()()(),o(125,"li")(126,"code"),e(127,"type"),t(),e(128,": \xC9 poss\xEDvel informar "),o(129,"code"),e(130,"error"),t(),e(131,", "),o(132,"code"),e(133,"warning"),t(),e(134," e "),o(135,"code"),e(136,"information"),t(),e(137,", sendo "),o(138,"code"),e(139,"error"),t(),e(140," o valor padr\xE3o."),t(),o(141,"li")(142,"code"),e(143,"details"),t(),e(144,": Uma lista de objetos de mensagem (recursiva) com mais detalhes sobre a mensagem principal."),t(),o(145,"li")(146,"code"),e(147,"detailTitle"),t(),e(148,": caso for informado, ser\xE1 apresentado como t\xEDtulo dos detalhes substituindo o padr\xE3o "),o(149,"code"),e(150,"code - message"),t()()(),o(151,"blockquote")(152,"p"),e(153,"Veja o "),o(154,"a",6),e(155,"Guia de implementa\xE7\xE3o de APIs"),t(),e(156," para mais detalhes sobre a estrutura das mensagens."),t()(),o(157,"h3"),e(158,"Cabe\xE7alho"),t(),o(159,"p"),e(160,`\xC9 poss\xEDvel dispensar a notifica\xE7\xE3o para o usu\xE1rio utilizando no cabe\xE7alho da requisi\xE7\xE3o os par\xE2metros listados abaixo com o valor
igual a `),o(161,"code"),e(162,"true"),t(),e(163,":"),t(),o(164,"ul")(165,"li")(166,"p")(167,"code"),e(168,"X-PO-No-Message"),t(),e(169,": N\xE3o exibe notifica\xE7\xF5es de erro e/ou sucesso."),t()(),o(170,"li")(171,"p")(172,"code"),e(173,"X-PO-No-Error"),t(),e(174,": N\xE3o mostra notifica\xE7\xF5es de erro com c\xF3digos "),o(175,"code"),e(176,"4xx"),t(),e(177," e "),o(178,"code"),e(179,"5xx"),t(),e(180,"."),t()()(),o(181,"pre")(182,"code"),e(183,`...
 const headers = { 'X-PO-No-Message': 'true' };

 this.http.get(\`/customers/1\`, { headers: headers });
...
`),t()(),o(184,"blockquote")(185,"p"),e(186,"Ap\xF3s a valida\xE7\xE3o no "),o(187,"em"),e(188,"interceptor"),t(),e(189,", os par\xE2metros ser\xE3o removidos do cabe\xE7alho da requisi\xE7\xE3o. "),t()()()())},encapsulation:2})}return n})();var Y=(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=1;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,r){this.route=a,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let r=a.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||n)(E(L),E(R))};static \u0275cmp=u({type:n,selectors:[["ng-component"]],standalone:!1,decls:6,vars:4,consts:[["p-title","Http Interceptor",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(o(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),c("p-click",function(){return i.changeTab("doc")}),s(3,"sample-po-http-interceptor-doc"),t(),o(4,"po-tab",3),c("p-click",function(){return i.changeTab("web")}),s(5,"sample-po-http-interceptor-labs-view"),t()()()),r&2&&(d("p-actions",i.actions),l(2),d("p-active",i.activeTab==="doc"),l(2),d("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[W,M,w,K,Q],encapsulation:2})}return n})();var ne=[{path:"",component:Y}],Z=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275mod=x({type:n});static \u0275inj=S({imports:[_.forChild(ne),_]})}return n})();var Me=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275mod=x({type:n});static \u0275inj=S({imports:[U,Z]})}return n})();export{Me as DocPoHttpInterceptorModule};
