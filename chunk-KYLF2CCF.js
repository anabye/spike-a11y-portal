import{o as B,p as W}from"./chunk-ANUCWWDU.js";import{Ab as C,Fa as O,Hb as X,Xa as F,nb as N,ra as T,v as k,zb as v}from"./chunk-WNVHYHMN.js";import{Aa as m,Cb as x,Da as R,Dc as M,Gc as y,La as t,Ma as n,N as g,Na as s,Sa as u,Uc as L,Wc as _,Yc as E,_b as w,cb as e,eb as H,gb as P,hb as q,ib as S,ja as p,ka as h,lb as I,qa as c,ra as f,yc as D}from"./chunk-KZJHT32G.js";var A=(()=>{class o{http;httpRequestInterceptor;countPendingRequestHeaderParam=!1;screenLockHeaderParam=!1;pendingRequests=0;url="";subscription;apiSubscription;constructor(a,i){this.http=a,this.httpRequestInterceptor=i}ngOnDestroy(){this.subscription.unsubscribe(),this.apiSubscription&&this.apiSubscription.unsubscribe()}ngOnInit(){this.subscription=this.httpRequestInterceptor.getCountPendingRequests().subscribe(a=>{this.pendingRequests=a})}getRequest(){let a={"X-PO-No-Count-Pending-Requests":this.countPendingRequestHeaderParam.toString(),"X-PO-Screen-Lock":this.screenLockHeaderParam.toString()};this.apiSubscription=this.http.get(this.url,{headers:a}).subscribe(()=>{})}static \u0275fac=function(i){return new(i||o)(h(w),h(X))};static \u0275cmp=c({type:o,selectors:[["sample-po-http-request-interceptor-labs"]],standalone:!1,decls:9,vars:5,consts:[[1,"po-row"],["p-label","Pending Requests",1,"po-lg-12",3,"p-value"],["name","url","p-help","https://po-sample-api.onrender.com/v1/people","p-label","URL","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","countPendingRequestHeaderParam","p-help","Enable/disable the sent param in header of request","p-label","X-PO-No-Count-Pending-Requests","p-label-off","Disable","p-label-on","Enable","ngDefaultControl","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","screenLockHeaderParam","p-help","Enable/disable the sent param in header of request","p-label","X-PO-Screen-Lock","p-label-off","Disable","p-label-on","Enable","ngDefaultControl","",1,"po-lg-6",3,"ngModelChange","ngModel"],["p-label","Get request",1,"po-md-4",3,"p-click","p-disabled"]],template:function(i,r){i&1&&(t(0,"div",0),s(1,"po-info",1),n(),t(2,"div",0)(3,"po-input",2),S("ngModelChange",function(l){return q(r.url,l)||(r.url=l),l}),n()(),t(4,"div",0)(5,"po-switch",3),S("ngModelChange",function(l){return q(r.countPendingRequestHeaderParam,l)||(r.countPendingRequestHeaderParam=l),l}),n(),t(6,"po-switch",4),S("ngModelChange",function(l){return q(r.screenLockHeaderParam,l)||(r.screenLockHeaderParam=l),l}),n()(),t(7,"div",0)(8,"po-button",5),u("p-click",function(){return r.getRequest()}),n()()),i&2&&(p(),m("p-value",r.pendingRequests),p(2),P("ngModel",r.url),p(2),P("ngModel",r.countPendingRequestHeaderParam),p(),P("ngModel",r.screenLockHeaderParam),p(2),m("p-disabled",!r.url))},dependencies:[D,M,y,k,O,T,F],encapsulation:2})}return o})();var K=o=>({"docs-sample-code-tabs":o}),z=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(i){return new(i||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-http-request-interceptor-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,r){i&1&&(s(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Http Request Interceptor Labs"),n(),t(4,"a",2),u("click",function(){return r.toggleSampleCodeTabs()}),s(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-http-request-interceptor-labs.component.html"),n(),t(13,"pre",7),e(14,`<div class="po-row">
  <po-info class="po-lg-12" p-label="Pending Requests" [p-value]="pendingRequests"> </po-info>
</div>

<div class="po-row">
  <po-input
    class="po-lg-6"
    name="url"
    [(ngModel)]="url"
    p-help="https://po-sample-api.onrender.com/v1/people"
    p-label="URL"
    p-required
  >
  </po-input>
</div>

<div class="po-row">
  <po-switch
    class="po-lg-6"
    name="countPendingRequestHeaderParam"
    [(ngModel)]="countPendingRequestHeaderParam"
    p-help="Enable/disable the sent param in header of request"
    p-label="X-PO-No-Count-Pending-Requests"
    p-label-off="Disable"
    p-label-on="Enable"
    ngDefaultControl
  >
  </po-switch>

  <po-switch
    class="po-lg-6"
    name="screenLockHeaderParam"
    [(ngModel)]="screenLockHeaderParam"
    p-help="Enable/disable the sent param in header of request"
    p-label="X-PO-Screen-Lock"
    p-label-off="Disable"
    p-label-on="Enable"
    ngDefaultControl
  >
  </po-switch>
</div>

<div class="po-row">
  <po-button class="po-md-4" p-label="Get request" [p-disabled]="!url" (p-click)="getRequest()"> </po-button>
</div>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-http-request-interceptor-labs.component.ts"),n(),t(19,"pre",9),e(20,`import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subscription } from 'rxjs';

import { PoHttpRequestInterceptorService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-http-request-interceptor-labs',
  templateUrl: './sample-po-http-request-interceptor-labs.component.html',
  standalone: false
})
export class SamplePoHttpRequestInterceptorLabsComponent implements OnInit, OnDestroy {
  countPendingRequestHeaderParam = false;
  screenLockHeaderParam = false;

  pendingRequests: number = 0;
  url: string = '';

  private subscription: Subscription;
  private apiSubscription: Subscription;

  constructor(
    private http: HttpClient,
    private httpRequestInterceptor: PoHttpRequestInterceptorService
  ) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();

    if (this.apiSubscription) {
      this.apiSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.subscription = this.httpRequestInterceptor.getCountPendingRequests().subscribe(data => {
      this.pendingRequests = data;
    });
  }

  getRequest() {
    const headers = {
      'X-PO-No-Count-Pending-Requests': this.countPendingRequestHeaderParam.toString(),
      'X-PO-Screen-Lock': this.screenLockHeaderParam.toString()
    };

    this.apiSubscription = this.http.get(this.url, { headers: headers }).subscribe(() => {});
  }
}
`),n()()()()(),t(21,"div",10),s(22,"sample-po-http-request-interceptor-labs"),n(),s(23,"hr")),i&2&&(p(5),R("po-icon "+r.sampleCodeButtonIcon),p(),H(" ",r.sampleCodeButtonLabel,""),p(),m("ngClass",I(4,K,r.hideSampleCodeTabs)))},dependencies:[x,B,v,C,A],encapsulation:2})}return o})();var V=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-http-request-interceptor-doc"]],standalone:!1,decls:97,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"]],template:function(i,r){i&1&&(t(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoHttpRequestModule } from '@po-ui/ng-components';"),n()(),s(4,"div",2),t(5,"h3",3),e(6,"Services"),n(),t(7,"h4",4)(8,"code",5),e(9,"PoHttpRequestInterceptorService"),n()(),t(10,"div",2)(11,"p"),e(12,"O servi\xE7o PO Http Request Interceptor realiza a contabiliza\xE7\xE3o de requisi\xE7\xF5es pendentes na aplica\xE7\xE3o."),n(),t(13,"p"),e(14,`Existe a possibilidade de n\xE3o efetuar a contabiliza\xE7\xE3o das requisi\xE7\xF5es pendentes, utilizando o par\xE2metro
`),t(15,"code"),e(16,"X-PO-No-Count-Pending-Requests"),n(),e(17,". Para isso deve ser informado no cabe\xE7alho da requisi\xE7\xE3o com o valor "),t(18,"code"),e(19,"'true'"),n(),e(20,`,
por exemplo:`),n(),t(21,"pre")(22,"code"),e(23,`...
 const headers = { 'X-PO-No-Count-Pending-Requests': 'true' };

 this.http.get(\`/customers/1\`, { headers: headers });
...
`),n()(),t(24,"p"),e(25,"Para obter a quantidade de requisi\xE7\xF5es pendentes, deve inscrever-se no m\xE9todo "),t(26,"code"),e(27,"getCountPendingRequests"),n(),e(28,` do
servi\xE7o `),t(29,"code"),e(30,"PoHttpRequestInterceptorService"),n(),e(31,", com isso, ao realizar requisi\xE7\xF5es utilizando "),t(32,"code"),e(33,"HttpClient"),n(),e(34,`,
ser\xE1 retornado a quantidade de requisi\xE7\xF5es pendentes.`),n(),t(35,"p"),e(36,"Tamb\xE9m existe a possibildade de travar a tela e mostrar uma imagem de "),t(37,"em"),e(38,"loading"),n(),e(39,` durante o processamento de uma requisi\xE7\xE3o
deve-se passar o par\xE2metro `),t(40,"code"),e(41,"X-PO-Screen-Lock"),n(),e(42," no cabe\xE7alho da requisi\xE7\xE3o com valor "),t(43,"code"),e(44,"'true'"),n(),e(45,"."),n(),t(46,"p"),e(47,"por exemplo:"),n(),t(48,"pre")(49,"code"),e(50,`...
 const headers = { 'X-PO-Screen-Lock': 'true' };

 this.http.get(\`/customers/1\`, { headers: headers });
...
`),n()(),t(51,"blockquote")(52,"p"),e(53,"Ap\xF3s a valida\xE7\xE3o no interceptor, o par\xE2metro ser\xE1 removido do cabe\xE7alho da requisi\xE7\xE3o."),n()(),t(54,"h2"),e(55,"Configura\xE7\xE3o"),n(),t(56,"p"),e(57,"\xC9 necess\xE1rio configurar o "),t(58,"code"),e(59,"HttpClient"),n(),e(60,` para utilizar os interceptors registrados via Dependency Injection (DI)
por meio da fun\xE7\xE3o `),t(61,"code"),e(62,"provideHttpClient(withInterceptorsFromDi())"),n(),e(63,"."),n(),t(64,"h3"),e(65,"1) NgModule"),n(),t(66,"pre")(67,"code"),e(68,`import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { PoModule } from '@po-ui/ng-components';
...

@NgModule({
  imports: [
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
`),n()(),t(69,"p"),e(70,"Ao importar o m\xF3dulo "),t(71,"code"),e(72,"PoModule"),n(),e(73," na aplica\xE7\xE3o, o "),t(74,"code"),e(75,"po-http-request-interceptor"),n(),e(76,` \xE9 automaticamente configurado sem a necessidade
de qualquer configura\xE7\xE3o extra.`),n(),t(77,"h3"),e(78,"2) Standalone"),n(),t(79,"p"),e(80,"No arquivo contendo a configura\xE7\xE3o da aplica\xE7\xE3o (geralmente "),t(81,"code"),e(82,"src/app/app.config.ts"),n(),e(83,"), adicione os providers e configure o "),t(84,"code"),e(85,"HttpClient"),n(),e(86,`,
como no exemplo abaixo:`),n(),t(87,"pre")(88,"code"),e(89,`import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { PoHttpRequestModule } from '@po-ui/ng-components';

export const appConfig: ApplicationConfig = {
  providers: [
    ...
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom([
      PoHttpRequestModule
    ]),
    ...
  ]
};
`),n()(),t(90,"h2"),e(91,"Como usar"),n(),t(92,"p"),e(93,"Segue abaixo um exemplo de uso:"),n(),t(94,"pre")(95,"code"),e(96,`import { HttpClient } from '@angular/common/http';

...

@Injectable({
 providedIn: 'root'
})
export class CustomersService {

 headers = { 'X-PO-No-Count-Pending-Requests': true, 'X-PO-Screen-Lock': 'true' }
 pendingRequests: number = 0;
 subscription: Subscription;

 constructor(
   private http: HttpClient,
   private httpRequestInterceptor: PoHttpRequestInterceptorService) { }

 ngOnDestroy(): void {
   this.subscription.unsubscribe();
 }

 ngOnInit(): void {
   this.subscription = this.httpRequestInterceptor.getCountPendingRequests().subscribe(data => {
     this.pendingRequests = data;
   });
 }

 getCustomers() {
   return this.http.get(\`/customers/1\`, { headers: headers });
 }

 ...

}
`),n()()()())},encapsulation:2})}return o})();var U=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=1;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,i){this.route=a,this.router=i}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let i=a.view;this.activeTab=i||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(i){return new(i||o)(h(L),h(_))};static \u0275cmp=c({type:o,selectors:[["ng-component"]],standalone:!1,decls:6,vars:4,consts:[["p-title","Http Request Interceptor",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(i,r){i&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u("p-click",function(){return r.changeTab("doc")}),s(3,"sample-po-http-request-interceptor-doc"),n(),t(4,"po-tab",3),u("p-click",function(){return r.changeTab("web")}),s(5,"sample-po-http-request-interceptor-labs-view"),n()()()),i&2&&(m("p-actions",r.actions),p(2),m("p-active",r.activeTab==="doc"),p(2),m("p-hide",r.hidePoWebSample)("p-active",r.activeTab==="web"))},dependencies:[N,v,C,z,V],encapsulation:2})}return o})();var Z=[{path:"",component:U}],G=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275mod=f({type:o});static \u0275inj=g({imports:[E.forChild(Z),E]})}return o})();var Pe=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275mod=f({type:o});static \u0275inj=g({imports:[W,G]})}return o})();export{Pe as DocPoHttpRequestInterceptorModule};
