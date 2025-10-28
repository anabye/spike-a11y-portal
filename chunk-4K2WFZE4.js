import{o as S,p as B}from"./chunk-KTXVLMHP.js";import{Ab as x,ab as f,nb as v,zb as E}from"./chunk-4M2FSNLW.js";import{$c as k,Aa as p,Da as y,Fb as g,La as t,M,Ma as i,N as D,Na as n,Q as w,Sa as c,Xc as H,Zb as L,Zc as I,bc as z,cb as e,eb as b,ja as m,ka as V,mb as q,nb as A,ob as u,p as F,qa as d,ra as P}from"./chunk-CBLD3XJL.js";var Y=()=>({property:"name"}),$=o=>[o],ee=()=>({name:"Jhon"}),_=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-dynamic-view-basic"]],standalone:!1,decls:1,vars:6,consts:[[3,"p-fields","p-value"]],template:function(a,l){a&1&&n(0,"po-dynamic-view",0),a&2&&p("p-fields",u(3,$,A(2,Y)))("p-value",A(5,ee))},dependencies:[f],encapsulation:2})}return o})();var ie=o=>({"docs-sample-code-tabs":o}),N=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-dynamic-view-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,l){a&1&&(n(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Dynamic View Basic"),i(),t(4,"a",2),c("click",function(){return l.toggleSampleCodeTabs()}),n(5,"span"),e(6),i()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-dynamic-view-basic/sample-po-dynamic-view-basic.component.html"),i(),t(13,"pre",7),e(14,`<po-dynamic-view [p-fields]="[{ property: 'name' }]" [p-value]="{ name: 'Jhon' }"> </po-dynamic-view>
`),i()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-dynamic-view-basic/sample-po-dynamic-view-basic.component.ts"),i(),t(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-dynamic-view-basic',
  templateUrl: './sample-po-dynamic-view-basic.component.html',
  standalone: false
})
export class SamplePoDynamicViewBasicComponent {}
`),i()()()()(),t(21,"div",10),n(22,"sample-po-dynamic-view-basic"),i(),n(23,"hr")),a&2&&(m(5),y("po-icon "+l.sampleCodeButtonIcon),m(),b(" ",l.sampleCodeButtonLabel,""),m(),p("ngClass",u(4,ie,l.hideSampleCodeTabs)))},dependencies:[g,S,E,x,_],encapsulation:2})}return o})();var R=(()=>{class o{fields=[{property:"name",divider:"Personal data",gridColumns:4,order:1},{property:"age",label:"Age",gridColumns:4},{property:"genre",gridColumns:4},{property:"cpf",label:"CPF",gridColumns:4,order:2},{property:"rg",label:"RG",gridColumns:4,order:3},{property:"graduation",label:"Graduation",gridColumns:4},{property:"company",label:"Company",divider:"Work Data"},{property:"job",tag:!0,icon:"an an-copy"},{property:"admissionDate",label:"Admission date",type:"date"},{property:"hoursPerDay",label:"Hours per day",type:"time"},{property:"wage",label:"Wage",type:"currency"},{property:"availability",tag:!0,color:"#C596E7",icon:"an an-check"},{property:"city",label:"City",divider:"Address"},{property:"addressStreet",label:"Street"},{property:"addressNumber",label:"Number"},{property:"zipCode",label:"Zip Code"},{property:"marriedStatus",options:[{label:"MARRIED",value:"1"}],label:"Marital status",divider:"ADDITIONAL DATA",tag:!0,color:"#C596E7"},{property:"children",options:[{label:"yes ",value:"1"},{label:"no",value:"2"}]},{property:"hobbies",label:"Hobbies",gridColumns:12,divider:"Additional Information"}];employee={name:"Jhon Doe",age:"20",rg:"9999999",email:"jhon.doe@po-ui.com",cpf:"999.999.999-99",birthday:"1998-03-14T00:00:01-00:00",graduation:"College Degree",genre:"male",company:"PO",job:"Software Engineer",addressStreet:"Avenida Braz Leme",addressNumber:"1000",zipCode:"02511-000",city:"S\xE3o Paulo",wage:8000.5,availability:"Available",admissionDate:"2014-10-14T13:45:00-00:00",hoursPerDay:"08:30:00",marriedStatus:"1",children:"1",hobbies:`Leitura de livros t\xE9cnicos e fic\xE7\xE3o cient\xEDfica.
Pr\xE1tica de corrida ao ar livre.
Jogos de tabuleiro e videogames.
Culin\xE1ria, especialmente cozinha italiana.`};static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-dynamic-view-employee"]],standalone:!1,decls:2,vars:3,consts:[["p-title","Employee"],[3,"p-fields","p-value","p-text-wrap"]],template:function(a,l){a&1&&(t(0,"po-page-default",0),n(1,"po-dynamic-view",1),i()),a&2&&(m(),p("p-fields",l.fields)("p-value",l.employee)("p-text-wrap",!0))},dependencies:[f,v],encapsulation:2})}return o})();var ae=o=>({"docs-sample-code-tabs":o}),G=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-dynamic-view-employee-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,l){a&1&&(n(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Dynamic View - Employee"),i(),t(4,"a",2),c("click",function(){return l.toggleSampleCodeTabs()}),n(5,"span"),e(6),i()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-dynamic-view-employee/sample-po-dynamic-view-employee.component.html"),i(),t(13,"pre",7),e(14,`<po-page-default p-title="Employee">
  <po-dynamic-view [p-fields]="fields" [p-value]="employee" [p-text-wrap]="true"> </po-dynamic-view>
</po-page-default>
`),i()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-dynamic-view-employee/sample-po-dynamic-view-employee.component.ts"),i(),t(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoDynamicViewField } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dynamic-view-employee',
  templateUrl: './sample-po-dynamic-view-employee.component.html',
  standalone: false
})
export class SamplePoDynamicViewEmployeeComponent {
  fields: Array<PoDynamicViewField> = [
    { property: 'name', divider: 'Personal data', gridColumns: 4, order: 1 },
    { property: 'age', label: 'Age', gridColumns: 4 },
    { property: 'genre', gridColumns: 4 },
    { property: 'cpf', label: 'CPF', gridColumns: 4, order: 2 },
    { property: 'rg', label: 'RG', gridColumns: 4, order: 3 },
    { property: 'graduation', label: 'Graduation', gridColumns: 4 },
    { property: 'company', label: 'Company', divider: 'Work Data' },
    { property: 'job', tag: true, icon: 'an an-copy' },
    { property: 'admissionDate', label: 'Admission date', type: 'date' },
    { property: 'hoursPerDay', label: 'Hours per day', type: 'time' },
    { property: 'wage', label: 'Wage', type: 'currency' },
    { property: 'availability', tag: true, color: '#C596E7', icon: 'an an-check' },
    { property: 'city', label: 'City', divider: 'Address' },
    { property: 'addressStreet', label: 'Street' },
    { property: 'addressNumber', label: 'Number' },
    { property: 'zipCode', label: 'Zip Code' },
    {
      property: 'marriedStatus',
      options: [{ label: 'MARRIED', value: '1' }],
      label: 'Marital status',
      divider: 'ADDITIONAL DATA',
      tag: true,
      color: '#C596E7'
    },
    {
      property: 'children',
      options: [
        { label: 'yes ', value: '1' },
        { label: 'no', value: '2' }
      ]
    },
    {
      property: 'hobbies',
      label: 'Hobbies',
      gridColumns: 12,
      divider: 'Additional Information'
    }
  ];

  employee = {
    name: 'Jhon Doe',
    age: '20',
    rg: '9999999',
    email: 'jhon.doe@po-ui.com',
    cpf: '999.999.999-99',
    birthday: '1998-03-14T00:00:01-00:00',
    graduation: 'College Degree',
    genre: 'male',
    company: 'PO',
    job: 'Software Engineer',
    addressStreet: 'Avenida Braz Leme',
    addressNumber: '1000',
    zipCode: '02511-000',
    city: 'S\xE3o Paulo',
    wage: 8000.5,
    availability: 'Available',
    admissionDate: '2014-10-14T13:45:00-00:00',
    hoursPerDay: '08:30:00',
    marriedStatus: '1',
    children: '1',
    hobbies:
      'Leitura de livros t\xE9cnicos e fic\xE7\xE3o cient\xEDfica.\\n' +
      'Pr\xE1tica de corrida ao ar livre.\\n' +
      'Jogos de tabuleiro e videogames.\\n' +
      'Culin\xE1ria, especialmente cozinha italiana.'
  };
}
`),i()()()()(),t(21,"div",10),n(22,"sample-po-dynamic-view-employee"),i(),n(23,"hr")),a&2&&(m(5),y("po-icon "+l.sampleCodeButtonIcon),m(),b(" ",l.sampleCodeButtonLabel,""),m(),p("ngClass",u(4,ae,l.hideSampleCodeTabs)))},dependencies:[g,S,E,x,R],encapsulation:2})}return o})();var O=(()=>{class o{httpClient=w(z);headers=new L({"X-PO-No-Message":"true"});url;filterParams;getObjectByValue(r,a){return this.httpClient.get(this.url,{headers:this.headers,params:this.filterParams}).pipe(F(l=>"items"in l?l.items:l))}setConfig(r,a){this.url=r,this.filterParams=a}static \u0275fac=function(a){return new(a||o)};static \u0275prov=M({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var J=(()=>{class o{employee={name:"Jhon Doe",age:"20",rg:"9999999",email:"jhon.doe@po-ui.com",cpf:"999.999.999-99",birthday:"1998-03-14T00:00:01-00:00",graduation:"College Degree",genre:"male",company:"PO",job:"Software Engineer",addressStreet:"Avenida Braz Leme",addressNumber:"1000",zipCode:"02511-000",city:"A",wage:8000.5,availability:"Available",cities:[{city:"S\xE3o Paulo",id:"SP"},{city:"Joinville",id:"SC"},{city:"Belo Horizonte",id:"MG"}],admissionDate:"2014-10-14T13:45:00-00:00",hoursPerDay:"08:30:00",profile:"admin",image:"https://raw.githubusercontent.com/po-ui/po-angular/master/docs/assets/po-logos/po_color_bg.svg"};fields=[{property:"name",divider:"Personal data",gridColumns:4,order:1},{property:"age",label:"Age",gridColumns:4},{property:"genre",gridColumns:4},{property:"cpf",label:"CPF",gridColumns:4,order:2},{property:"rg",label:"RG",gridColumns:4,order:3},{property:"graduation",label:"Graduation",gridColumns:4},{property:"company",label:"Company",divider:"Work Data"},{property:"job",tag:!0,icon:"an an-copy"},{property:"admissionDate",label:"Admission date",type:"date"},{property:"hoursPerDay",label:"Hours per day",type:"time"},{property:"wage",label:"Wage",type:"currency"},{property:"availability",tag:!0,color:"#C596E7",icon:"an an-check"},{property:"cities",isArrayOrObject:!0,fieldLabel:"city",fieldValue:"id",concatLabelValue:!0},{property:"city",label:"City",divider:"Address"},{property:"addressStreet",label:"Street"},{property:"addressNumber",label:"Number"},{property:"zipCode",label:"Zip Code"},{property:"image",divider:"Image",image:!0,alt:"image",height:"250"}];_newService=w(O);ngOnInit(){this._newService.setConfig("https://po-sample-api.onrender.com/v1/hotels",{id:1485976673002})}customEmployeeData(){return{value:{cpf:this.checkProfile(),rg:this.checkProfile(),wage:this.checkProfile()},fields:[{property:"name",divider:"Personal data by load customization",order:1},{property:"cpf",tag:!0,color:"color-07",order:2},{property:"rg",tag:!0,color:"color-07",order:3},{property:"wage",type:"string",tag:!0,color:"color-07"},{property:"genre",visible:!1},{property:"job",tag:!1},{searchService:this._newService,fieldLabel:"address_city",property:"city"}]}}checkProfile(){if(this.employee.profile==="admin")return"confidential"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-dynamic-view-employee-on-load"]],standalone:!1,features:[q([O])],decls:2,vars:3,consts:[["p-title","Employee on Load"],[3,"p-fields","p-load","p-value"]],template:function(a,l){a&1&&(t(0,"po-page-default",0),n(1,"po-dynamic-view",1),i()),a&2&&(m(),p("p-fields",l.fields)("p-load",l.customEmployeeData.bind(l))("p-value",l.employee))},dependencies:[f,v],encapsulation:2})}return o})();var me=o=>({"docs-sample-code-tabs":o}),W=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-dynamic-view-employee-on-load-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,l){a&1&&(n(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Dynamic View - Employee on load"),i(),t(4,"a",2),c("click",function(){return l.toggleSampleCodeTabs()}),n(5,"span"),e(6),i()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-dynamic-view-employee-on-load/sample-po-dynamic-view-employee-on-load.component.html"),i(),t(13,"pre",7),e(14,`<po-page-default p-title="Employee on Load">
  <po-dynamic-view [p-fields]="fields" [p-load]="customEmployeeData.bind(this)" [p-value]="employee"> </po-dynamic-view>
</po-page-default>
`),i()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-dynamic-view-employee-on-load/sample-po-dynamic-view-employee-on-load.component.ts"),i(),t(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';

import { PoDynamicViewField } from '@po-ui/ng-components';
import { SamplePoDynamicViewEmployeeOnLoadService } from './sample-po-dynamic-view-employee-on-load.service';

@Component({
  selector: 'sample-po-dynamic-view-employee-on-load',
  templateUrl: './sample-po-dynamic-view-employee-on-load.component.html',
  providers: [SamplePoDynamicViewEmployeeOnLoadService],
  standalone: false
})
export class SamplePoDynamicViewEmployeeOnLoadComponent implements OnInit {
  employee = {
    name: 'Jhon Doe',
    age: '20',
    rg: '9999999',
    email: 'jhon.doe@po-ui.com',
    cpf: '999.999.999-99',
    birthday: '1998-03-14T00:00:01-00:00',
    graduation: 'College Degree',
    genre: 'male',
    company: 'PO',
    job: 'Software Engineer',
    addressStreet: 'Avenida Braz Leme',
    addressNumber: '1000',
    zipCode: '02511-000',
    city: 'A',
    wage: 8000.5,
    availability: 'Available',
    cities: [
      {
        city: 'S\xE3o Paulo',
        id: 'SP'
      },
      {
        city: 'Joinville',
        id: 'SC'
      },
      {
        city: 'Belo Horizonte',
        id: 'MG'
      }
    ],
    admissionDate: '2014-10-14T13:45:00-00:00',
    hoursPerDay: '08:30:00',
    profile: 'admin',
    image: 'https://raw.githubusercontent.com/po-ui/po-angular/master/docs/assets/po-logos/po_color_bg.svg'
  };

  fields: Array<PoDynamicViewField> = [
    { property: 'name', divider: 'Personal data', gridColumns: 4, order: 1 },
    { property: 'age', label: 'Age', gridColumns: 4 },
    { property: 'genre', gridColumns: 4 },
    { property: 'cpf', label: 'CPF', gridColumns: 4, order: 2 },
    { property: 'rg', label: 'RG', gridColumns: 4, order: 3 },
    { property: 'graduation', label: 'Graduation', gridColumns: 4 },
    { property: 'company', label: 'Company', divider: 'Work Data' },
    { property: 'job', tag: true, icon: 'an an-copy' },
    { property: 'admissionDate', label: 'Admission date', type: 'date' },
    { property: 'hoursPerDay', label: 'Hours per day', type: 'time' },
    { property: 'wage', label: 'Wage', type: 'currency' },
    { property: 'availability', tag: true, color: '#C596E7', icon: 'an an-check' },
    { property: 'cities', isArrayOrObject: true, fieldLabel: 'city', fieldValue: 'id', concatLabelValue: true },
    { property: 'city', label: 'City', divider: 'Address' },
    { property: 'addressStreet', label: 'Street' },
    { property: 'addressNumber', label: 'Number' },
    { property: 'zipCode', label: 'Zip Code' },
    { property: 'image', divider: 'Image', image: true, alt: 'image', height: '250' }
  ];

  private _newService = inject(SamplePoDynamicViewEmployeeOnLoadService);

  ngOnInit(): void {
    this._newService.setConfig('https://po-sample-api.onrender.com/v1/hotels', { id: 1485976673002 });
  }

  customEmployeeData() {
    return {
      value: {
        cpf: this.checkProfile(),
        rg: this.checkProfile(),
        wage: this.checkProfile()
      },
      fields: [
        { property: 'name', divider: 'Personal data by load customization', order: 1 },
        { property: 'cpf', tag: true, color: 'color-07', order: 2 },
        { property: 'rg', tag: true, color: 'color-07', order: 3 },
        { property: 'wage', type: 'string', tag: true, color: 'color-07' },
        { property: 'genre', visible: false },
        { property: 'job', tag: false },
        {
          searchService: this._newService,
          fieldLabel: 'address_city',
          property: 'city'
        }
      ]
    };
  }

  private checkProfile(): string {
    if (this.employee.profile === 'admin') {
      return 'confidential';
    }
  }
}
`),i(),t(21,"label",6),e(22,"sample-po-dynamic-view-employee-on-load/sample-po-dynamic-view-employee-on-load.service.ts"),i(),t(23,"pre",9),e(24,`import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SamplePoDynamicViewEmployeeOnLoadService {
  private httpClient = inject(HttpClient);

  readonly headers: HttpHeaders = new HttpHeaders({
    'X-PO-No-Message': 'true'
  });

  url: string;
  filterParams;

  getObjectByValue(value: string | Array<any>, filterParams?: any): Observable<Array<any> | { [key: string]: any }> {
    return this.httpClient
      .get(this.url, {
        headers: this.headers,
        params: this.filterParams
      })
      .pipe(map((response: any) => ('items' in response ? response.items : response)));
  }

  setConfig(url: string, filterParams) {
    this.url = url;
    this.filterParams = filterParams;
  }
}
`),i()()()()(),t(25,"div",10),n(26,"sample-po-dynamic-view-employee-on-load"),i(),n(27,"hr")),a&2&&(m(5),y("po-icon "+l.sampleCodeButtonIcon),m(),b(" ",l.sampleCodeButtonLabel,""),m(),p("ngClass",u(4,me,l.hideSampleCodeTabs)))},dependencies:[g,S,E,x,J],encapsulation:2})}return o})();var U=(()=>{class o{fields=[{property:"name",container:"Personal data",gridColumns:4,order:1},{property:"age",label:"Age",gridColumns:4},{property:"genre",gridColumns:4},{property:"cpf",label:"CPF",gridColumns:4,order:2},{property:"rg",label:"RG",gridColumns:4,order:3},{property:"graduation",label:"Graduation",gridColumns:4},{property:"company",label:"Company",container:"Work Data"},{property:"job",tag:!0,icon:"an an-copy"},{property:"admissionDate",label:"Admission date",type:"date"},{property:"hoursPerDay",label:"Hours per day",type:"time"},{property:"wage",label:"Wage",type:"currency"},{property:"availability",tag:!0,color:"#C596E7",icon:"an an-check"},{property:"city",label:"City",container:"Address"},{property:"addressStreet",label:"Street"},{property:"addressNumber",label:"Number"},{property:"zipCode",label:"Zip Code"},{property:"marriedStatus",options:[{label:"MARRIED",value:"1"}],label:"Marital status",container:"ADDITIONAL DATA",tag:!0,color:"#C596E7"},{property:"children",options:[{label:"yes ",value:"1"},{label:"no",value:"2"}]}];employee={name:"Jhon Doe",age:"20",rg:"9999999",email:"jhon.doe@po-ui.com",cpf:"999.999.999-99",birthday:"1998-03-14T00:00:01-00:00",graduation:"College Degree",genre:"male",company:"PO",job:"Software Engineer",addressStreet:"Avenida Braz Leme",addressNumber:"1000",zipCode:"02511-000",city:"S\xE3o Paulo",wage:8000.5,availability:"Available",admissionDate:"2014-10-14T13:45:00-00:00",hoursPerDay:"08:30:00",marriedStatus:"1",children:"1"};static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-dynamic-view-container"]],standalone:!1,decls:2,vars:2,consts:[["p-title","Employee"],[3,"p-fields","p-value"]],template:function(a,l){a&1&&(t(0,"po-page-default",0),n(1,"po-dynamic-view",1),i()),a&2&&(m(),p("p-fields",l.fields)("p-value",l.employee))},dependencies:[f,v],encapsulation:2})}return o})();var se=o=>({"docs-sample-code-tabs":o}),Z=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-dynamic-view-container-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,l){a&1&&(n(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Dynamic View - Employee on load"),i(),t(4,"a",2),c("click",function(){return l.toggleSampleCodeTabs()}),n(5,"span"),e(6),i()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-dynamic-view-container/sample-po-dynamic-view-container.component.html"),i(),t(13,"pre",7),e(14,`<po-page-default p-title="Employee">
  <po-dynamic-view [p-fields]="fields" [p-value]="employee"> </po-dynamic-view>
</po-page-default>
`),i()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-dynamic-view-container/sample-po-dynamic-view-container.component.ts"),i(),t(19,"pre",9),e(20,`import { Component } from '@angular/core';
import { PoDynamicViewField } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dynamic-view-container',
  templateUrl: './sample-po-dynamic-view-container.component.html',
  standalone: false
})
export class SamplePoDynamicViewContainerComponent {
  fields: Array<PoDynamicViewField> = [
    { property: 'name', container: 'Personal data', gridColumns: 4, order: 1 },
    { property: 'age', label: 'Age', gridColumns: 4 },
    { property: 'genre', gridColumns: 4 },
    { property: 'cpf', label: 'CPF', gridColumns: 4, order: 2 },
    { property: 'rg', label: 'RG', gridColumns: 4, order: 3 },
    { property: 'graduation', label: 'Graduation', gridColumns: 4 },
    { property: 'company', label: 'Company', container: 'Work Data' },
    { property: 'job', tag: true, icon: 'an an-copy' },
    { property: 'admissionDate', label: 'Admission date', type: 'date' },
    { property: 'hoursPerDay', label: 'Hours per day', type: 'time' },
    { property: 'wage', label: 'Wage', type: 'currency' },
    { property: 'availability', tag: true, color: '#C596E7', icon: 'an an-check' },
    { property: 'city', label: 'City', container: 'Address' },
    { property: 'addressStreet', label: 'Street' },
    { property: 'addressNumber', label: 'Number' },
    { property: 'zipCode', label: 'Zip Code' },
    {
      property: 'marriedStatus',
      options: [{ label: 'MARRIED', value: '1' }],
      label: 'Marital status',
      container: 'ADDITIONAL DATA',
      tag: true,
      color: '#C596E7'
    },
    {
      property: 'children',
      options: [
        { label: 'yes ', value: '1' },
        { label: 'no', value: '2' }
      ]
    }
  ];

  employee = {
    name: 'Jhon Doe',
    age: '20',
    rg: '9999999',
    email: 'jhon.doe@po-ui.com',
    cpf: '999.999.999-99',
    birthday: '1998-03-14T00:00:01-00:00',
    graduation: 'College Degree',
    genre: 'male',
    company: 'PO',
    job: 'Software Engineer',
    addressStreet: 'Avenida Braz Leme',
    addressNumber: '1000',
    zipCode: '02511-000',
    city: 'S\xE3o Paulo',
    wage: 8000.5,
    availability: 'Available',
    admissionDate: '2014-10-14T13:45:00-00:00',
    hoursPerDay: '08:30:00',
    marriedStatus: '1',
    children: '1'
  };
}
`),i()()()()(),t(21,"div",10),n(22,"sample-po-dynamic-view-container"),i(),n(23,"hr")),a&2&&(m(5),y("po-icon "+l.sampleCodeButtonIcon),m(),b(" ",l.sampleCodeButtonLabel,""),m(),p("ngClass",u(4,se,l.hideSampleCodeTabs)))},dependencies:[g,S,E,x,U],encapsulation:2})}return o})();var X=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-dynamic-view-doc"]],standalone:!1,decls:1565,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoDynamicViewField[]"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","object"],[1,"docs-api-h4","docs-api-class-name"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],["pan","",1,"docs-api-property-type","Array<string>"],["href","https://angular.io/api/common/CurrencyPipe"],["href","https://angular.io/api/common/DatePipe"],["href","https://angular.io/api/common/DecimalPipe"],["pan","",1,"docs-api-property-type","number"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<{","label:","string;","value:","string"],["pan","",1,"docs-api-property-type","number;","}>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoDynamicViewRequest"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"]],template:function(a,l){a&1&&(t(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoDynamicModule } from '@po-ui/ng-components';"),i()(),n(4,"div",2),t(5,"h3",3),e(6,"Componente"),i(),t(7,"h4",4)(8,"code",5),e(9,"PoDynamicViewComponent"),i()(),t(10,"div",2)(11,"p"),e(12,"Componente para listar dados dinamicamente a partir de uma lista de objetos."),i(),t(13,"blockquote")(14,"p"),e(15,"Por padr\xE3o esse componente cria "),t(16,"code"),e(17,"po-info"),i(),e(18," para exibi\xE7\xE3o, \xE9 poss\xEDvel criar "),t(19,"code"),e(20,"po-tag"),i(),e(21," passando a propriedade { tag: true }. "),i()()(),t(22,"div",6)(23,"h4",7),e(24,"Seletor"),i(),t(25,"pre",8),e(26,`<po-dynamic-view
    p-components-size="string"
    p-fields="PoDynamicViewField[]"
    p-load="string | Function"
    p-show-all-value="boolean"
    p-text-wrap="boolean"
    p-value="object" >
</po-dynamic-view>
`),i()(),t(27,"h4",9),e(28,"Propriedades"),i(),t(29,"table",10)(30,"tr",11)(31,"th",12),e(32,"Nome"),i(),t(33,"th",12),e(34,"Tipo"),i(),t(35,"th",12),e(36,"Padr\xE3o"),i(),t(37,"th",12),e(38,"Descri\xE7\xE3o"),i()(),t(39,"tr",13)(40,"td",14)(41,"div",15)(42,"span",16),e(43," p-components-size"),n(44,"br"),i()()(),t(45,"td",17)(46,"code",18),e(47,"string"),i()(),t(48,"td",19)(49,"p")(50,"code"),e(51,"medium"),i()()(),t(52,"td",20)(53,"em")(54,"strong"),e(55,"(opcional)"),i()(),t(56,"p"),e(57,"Define o tamanho dos componentes no template entre "),t(58,"code"),e(59,"small"),i(),e(60," ou "),t(61,"code"),e(62,"medium"),i(),e(63,"."),i(),t(64,"blockquote")(65,"p"),e(66,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),t(67,"code"),e(68,"medium"),i(),e(69,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),t(70,"a",21),e(71,"po-theme"),i(),e(72,"."),i()()()(),t(73,"tr",13)(74,"td",14)(75,"div",15)(76,"span",16),e(77," p-fields"),n(78,"br"),i()()(),t(79,"td",17)(80,"code",22),e(81,"PoDynamicViewField[]"),i()(),t(82,"td",19)(83,"p")(84,"code"),e(85,"[]"),i()()(),t(86,"td",20)(87,"em")(88,"strong"),e(89,"(opcional)"),i()(),t(90,"p"),e(91,"Lista de objetos que implementam a interface "),t(92,"code"),e(93,"PoDynamicView"),i(),e(94,"."),i(),t(95,"blockquote")(96,"p"),e(97,"Ex: "),t(98,"code"),e(99,"[ { property: 'age' } ]"),i()()(),t(100,"p"),e(101,"Regras de tipagem e formata\xE7\xE3o dos valores exibidos:"),i(),t(102,"ul")(103,"li"),e(104,"Caso o "),t(105,"em"),e(106,"type"),i(),e(107," informado seja "),t(108,"em"),e(109,"currency"),i(),e(110," e n\xE3o seja informado o "),t(111,"em"),e(112,"format"),i(),e(113,` o mesmo recebe "'BRL', 'symbol', '1.2-2'"
como formato padr\xE3o.`),i(),t(114,"li"),e(115,"Caso o "),t(116,"em"),e(117,"type"),i(),e(118," informado seja "),t(119,"em"),e(120,"date"),i(),e(121," e n\xE3o seja informado o "),t(122,"em"),e(123,"format"),i(),e(124," o mesmo recebe 'dd/MM/yyyy' como formato padr\xE3o."),i(),t(125,"li"),e(126,"Caso o "),t(127,"em"),e(128,"type"),i(),e(129," informado seja "),t(130,"em"),e(131,"dateTime"),i(),e(132," e n\xE3o seja informado o "),t(133,"em"),e(134,"format"),i(),e(135," o mesmo recebe 'dd/MM/yyyy HH:mm:ss' como formato padr\xE3o."),i(),t(136,"li"),e(137,"Caso o "),t(138,"em"),e(139,"type"),i(),e(140," informado seja "),t(141,"em"),e(142,"number"),i(),e(143," e n\xE3o seja informado o "),t(144,"em"),e(145,"format"),i(),e(146," o mesmo n\xE3o ser\xE1 formatado."),i(),t(147,"li"),e(148,"Caso o "),t(149,"em"),e(150,"type"),i(),e(151," informado seja "),t(152,"em"),e(153,"time"),i(),e(154," e n\xE3o seja informado o "),t(155,"em"),e(156,"format"),i(),e(157," o mesmo recebe 'HH:mm:ss.ffffff' como formato padr\xE3o."),i()(),t(158,"blockquote")(159,"p"),e(160,"As propriedades informadas ser\xE3o exibidas mesmo n\xE3o contendo valor de refer\xEAncia no objeto da propriedade "),t(161,"code"),e(162,"p-value"),i(),e(163,"."),i()()()(),t(164,"tr",13)(165,"td",14)(166,"div",15)(167,"span",16),e(168," p-load"),n(169,"br"),i()()(),t(170,"td",17)(171,"code",18),e(172,"string "),i(),t(173,"code",23),e(174," Function"),i()(),t(175,"td",19),e(176,"-"),i(),t(177,"td",20)(178,"em")(179,"strong"),e(180,"(opcional)"),i()(),t(181,"p"),e(182,"Possibilita executar uma fun\xE7\xE3o quando o componente \xE9 inicializado."),i(),t(183,"p"),e(184,"A propriedade aceita os seguintes tipos:"),i(),t(185,"ul")(186,"li")(187,"strong"),e(188,"String"),i(),e(189,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),t(190,"code"),e(191,"POST"),i(),e(192,"."),i(),t(193,"li")(194,"strong"),e(195,"Function"),i(),e(196,": M\xE9todo que ser\xE1 executado na inicializa\xE7\xE3o do componente."),i()(),t(197,"p"),e(198,"Para os dois tipos de utiliza\xE7\xE3o da propriedade espera-se o seguinte retorno:"),i(),t(199,"pre")(200,"code"),e(201,`{
  value: {
    cnpj: '**************', // altera valor do campo
    updated: (new Date()).toString() // atribui valor ao campo novo
  },
  fields: [
    { property: 'updated', tag: true } // inclui campo novo
  ]
}
`),i()(),t(202,"blockquote")(203,"p")(204,"strong"),e(205,"value"),i(),e(206,": any = atribui novo valor do model."),i()(),t(207,"blockquote")(208,"p")(209,"strong"),e(210,"fields"),i(),e(211,": "),t(212,"code"),e(213,"Array<PoDynamicViewField>"),i(),e(214,` = Lista de campos que deseja alterar as propriedades,
caso enviar um campo a mais ser\xE1 criado um novo campo.`),i()(),t(215,"ul")(216,"li"),e(217,"Para esconder/remover campos precisa informar no field a propriedade "),t(218,"code"),e(219,"visible = false"),i(),e(220,"."),i()()()(),t(221,"tr",13)(222,"td",14)(223,"div",15)(224,"span",16),e(225," p-show-all-value"),n(226,"br"),i()()(),t(227,"td",17)(228,"code",24),e(229,"boolean"),i()(),t(230,"td",19)(231,"p")(232,"code"),e(233,"false"),i()()(),t(234,"td",20)(235,"em")(236,"strong"),e(237,"(opcional)"),i()(),t(238,"p"),e(239,"Indica se exibir\xE1 todas as informa\xE7\xF5es contidas dentro do objeto informado na propriedade "),t(240,"code"),e(241,"p-value"),i(),e(242,"."),i()()(),t(243,"tr",13)(244,"td",14)(245,"div",15)(246,"span",16),e(247," p-text-wrap"),n(248,"br"),i()()(),t(249,"td",17)(250,"code",24),e(251,"boolean"),i()(),t(252,"td",19)(253,"p")(254,"code"),e(255,"false"),i()()(),t(256,"td",20)(257,"em")(258,"strong"),e(259,"(opcional)"),i()(),t(260,"p"),e(261,"Permite a quebra de linha no texto do "),t(262,"code"),e(263,"p-value"),i(),e(264,", aplicando-a onde h\xE1 "),t(265,"code"),e(266,"\\n"),i(),e(267,"."),i(),t(268,"pre")(269,"code"),e(270,`<po-dynamic-view
  [p-value]="{ description: 'Primeira linha\\nSegunda linha' }"
  [p-text-wrap]="true"
></po-dynamic-view>
`),i()(),t(271,"p"),e(272,"Sa\xEDda:"),i(),t(273,"pre")(274,"code"),e(275,`Primeira linha
Segunda linha
`),i()()()(),t(276,"tr",13)(277,"td",14)(278,"div",15)(279,"span",16),e(280," p-value"),n(281,"br"),i()()(),t(282,"td",17)(283,"code",25),e(284,"object"),i()(),t(285,"td",19),e(286,"-"),i(),t(287,"td",20)(288,"p"),e(289,"Objeto que ser\xE1 utilizado para exibir as informa\xE7\xF5es din\xE2micas, o valor ser\xE1 recuperado atrav\xE9s do atributo "),t(290,"em"),e(291,"property"),i(),e(292,`
dos objetos contidos na propridade `),t(293,"code"),e(294,"p-fields"),i(),e(295,"."),i(),t(296,"blockquote")(297,"p"),e(298,"Ex: "),t(299,"code"),e(300,"{ age: '35' }"),i()()()()()(),t(301,"h3"),e(302,"Interfaces"),i(),t(303,"h4",26)(304,"code",5),e(305,"PoDynamicViewRequest"),i()(),t(306,"div",2)(307,"p"),e(308,"Define o tipo de busca customizada para um campo em espec\xEDfico."),i()(),t(309,"h4",9),e(310,"M\xE9todos"),i(),t(311,"table",27)(312,"tr",13)(313,"th",28)(314,"div",15)(315,"h4")(316,"span",16),e(317," getObjectByValue "),i()()()()(),t(318,"tr",20)(319,"td",20)(320,"p"),e(321,"M\xE9todo respons\xE1vel por enviar um valor que ser\xE1 buscado no servi\xE7o."),i()()()(),t(322,"h5")(323,"b"),e(324,"Par\xE2metros"),i()(),t(325,"table",10)(326,"tr",11)(327,"th",12),e(328,"Nome"),i(),t(329,"th",12),e(330,"Tipo"),i(),t(331,"th",12),e(332,"Descri\xE7\xE3o"),i()(),t(333,"tr",13)(334,"td",14),e(335," value"),i(),t(336,"td",17)(337,"code",18),e(338," string "),i(),t(339,"code",29),e(340," Array<any> "),i()(),t(341,"td",20)(342,"p"),e(343,"Valor \xFAnico a ser buscado na fonte de dados."),i()()(),t(344,"tr",13)(345,"td",14),e(346," filterParams"),i(),t(347,"td",17)(348,"code",30),e(349," any "),i()(),t(350,"td",20)(351,"p"),e(352,"Valor opcional para informar filtros customizados."),i()()()(),n(353,"br"),t(354,"h4",26)(355,"code",5),e(356,"PoDynamicViewField"),i()(),t(357,"div",2)(358,"p"),e(359," Interface para defini\xE7\xE3o das propriedades dos campos de visualiza\xE7\xE3o que ser\xE3o criados dinamicamente."),i()(),t(360,"h4",9),e(361,"Propriedades"),i(),t(362,"table",10)(363,"tr",11)(364,"th",12),e(365,"Nome"),i(),t(366,"th",12),e(367,"Tipo"),i(),t(368,"th",12),e(369,"Descri\xE7\xE3o"),i()(),t(370,"tr",13)(371,"td",14)(372,"div",15)(373,"span",16),e(374," alt"),n(375,"br"),i()()(),t(376,"td",17)(377,"code",18),e(378,"string"),i()(),t(379,"td",20)(380,"em")(381,"strong"),e(382,"(opcional)"),i()(),t(383,"p"),e(384,"Defini o texto alternativo descrevendo a imagem."),i(),t(385,"p"),e(386,"Exemplo de utiliza\xE7\xE3o:"),i(),t(387,"pre")(388,"code"),e(389,`[
  { property: 'imagem 1', image:'string', alt:'string', height:'300'},
];
`),i()(),t(390,"p")(391,"strong"),e(392,"Componentes compat\xEDveis:"),i(),t(393,"code"),e(394,"po-image"),i(),e(395,"."),i()()(),t(396,"tr",13)(397,"td",14)(398,"div",15)(399,"span",16),e(400," booleanFalse"),n(401,"br"),i()()(),t(402,"td",17)(403,"code",18),e(404,"string"),i()(),t(405,"td",20)(406,"em")(407,"strong"),e(408,"(opcional)"),i()(),t(409,"p"),e(410,"Texto exibido quando o valor do componente for "),t(411,"em"),e(412,"false"),i(),e(413,"."),i()()(),t(414,"tr",13)(415,"td",14)(416,"div",15)(417,"span",16),e(418," booleanTrue"),n(419,"br"),i()()(),t(420,"td",17)(421,"code",18),e(422,"string"),i()(),t(423,"td",20)(424,"em")(425,"strong"),e(426,"(opcional)"),i()(),t(427,"p"),e(428,"Texto exibido quando o valor do componente for "),t(429,"em"),e(430,"true"),i(),e(431,"."),i()()(),t(432,"tr",13)(433,"td",14)(434,"div",15)(435,"span",16),e(436," color"),n(437,"br"),i()()(),t(438,"td",17)(439,"code",18),e(440,"string"),i()(),t(441,"td",20)(442,"em")(443,"strong"),e(444,"(opcional)"),i()(),t(445,"p"),e(446,"Determina a cor da tag. As maneiras de customizar as cores s\xE3o:"),i(),t(447,"ul")(448,"li"),e(449,"Hexadeximal, por exemplo "),t(450,"code"),e(451,"#c64840"),i(),e(452,";"),i(),t(453,"li"),e(454,"RGB, como "),t(455,"code"),e(456,"rgb(0, 0, 165)"),i(),e(457,";"),i(),t(458,"li"),e(459,"O nome da cor, por exemplo "),t(460,"code"),e(461,"blue"),i(),e(462,";"),i(),t(463,"li"),e(464,"Usando uma das cores do tema do PO:"),i(),t(465,"li"),e(466,"Valores v\xE1lidos:"),t(467,"ul")(468,"li"),n(469,"span",31),t(470,"code"),e(471,"color-01"),i()(),t(472,"li"),n(473,"span",32),t(474,"code"),e(475,"color-02"),i()(),t(476,"li"),n(477,"span",33),t(478,"code"),e(479,"color-03"),i()(),t(480,"li"),n(481,"span",34),t(482,"code"),e(483,"color-04"),i()(),t(484,"li"),n(485,"span",35),t(486,"code"),e(487,"color-05"),i()(),t(488,"li"),n(489,"span",36),t(490,"code"),e(491,"color-06"),i()(),t(492,"li"),n(493,"span",37),t(494,"code"),e(495,"color-07"),i()(),t(496,"li"),n(497,"span",38),t(498,"code"),e(499,"color-08"),i()(),t(500,"li"),n(501,"span",39),t(502,"code"),e(503,"color-09"),i()(),t(504,"li"),n(505,"span",40),t(506,"code"),e(507,"color-10"),i()(),t(508,"li"),n(509,"span",41),t(510,"code"),e(511,"color-11"),i()(),t(512,"li"),n(513,"span",42),t(514,"code"),e(515,"color-12"),i()()()()()()(),t(516,"tr",13)(517,"td",14)(518,"div",15)(519,"span",16),e(520," concatLabelValue"),n(521,"br"),i()()(),t(522,"td",17)(523,"code",24),e(524,"boolean"),i()(),t(525,"td",20)(526,"em")(527,"strong"),e(528,"(opcional)"),i()(),t(529,"p"),e(530,"Permite que seja exibido em tela, de forma concatenada as propriedades "),t(531,"code"),e(532,"fieldLabel"),i(),e(533," + "),t(534,"code"),e(535,"fieldValue"),i(),e(536,`.
A ordem sempre ser\xE1 `),t(537,"code"),e(538,"fieldLabel"),i(),e(539," e depois "),t(540,"code"),e(541,"fieldValue"),i(),e(542,", n\xE3o sendo poss\xEDvel alterar."),i(),t(543,"blockquote")(544,"p"),e(545,"Propriedade funciona corretamente caso as propriedades "),t(546,"code"),e(547,"fieldLabel"),i(),e(548," e "),t(549,"code"),e(550,"fielValue"),i(),e(551," sejam v\xE1lidas."),i()()()(),t(552,"tr",13)(553,"td",14)(554,"div",15)(555,"span",16),e(556," container"),n(557,"br"),i()()(),t(558,"td",17)(559,"code",18),e(560,"string"),i()(),t(561,"td",20)(562,"em")(563,"strong"),e(564,"(opcional)"),i()(),t(565,"p"),e(566,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),i(),t(567,"p"),e(568,"Est\xE1 propriedade \xE9 do tipo string, o valor que ser\xE1 titulo do contianer"),i()()(),t(569,"tr",13)(570,"td",14)(571,"div",15)(572,"span",16),e(573," divider"),n(574,"br"),i()()(),t(575,"td",17)(576,"code",18),e(577,"string"),i()(),t(578,"td",20)(579,"em")(580,"strong"),e(581,"(opcional)"),i()(),t(582,"p"),e(583,"Exibir\xE1 um divisor acima, utilizando o seu conteudo como t\xEDtulo."),i()()(),t(584,"tr",13)(585,"td",14)(586,"div",15)(587,"span",16),e(588," fieldLabel"),n(589,"br"),i()()(),t(590,"td",17)(591,"code",18),e(592,"string"),i()(),t(593,"td",20)(594,"em")(595,"strong"),e(596,"(opcional)"),i()(),t(597,"p"),e(598,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como descri\xE7\xE3o do campo."),i(),t(599,"p"),e(600,"O valor padr\xE3o \xE9: "),t(601,"code"),e(602,"label"),i(),e(603,"."),i()()(),t(604,"tr",13)(605,"td",14)(606,"div",15)(607,"span",16),e(608," fieldValue"),n(609,"br"),i()()(),t(610,"td",17)(611,"code",18),e(612,"string"),i()(),t(613,"td",20)(614,"em")(615,"strong"),e(616,"(opcional)"),i()(),t(617,"p"),e(618,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como valor do campo."),i(),t(619,"p"),e(620,"O valor padr\xE3o \xE9: "),t(621,"code"),e(622,"value"),i(),e(623,"."),i()()(),t(624,"tr",13)(625,"td",14)(626,"div",15)(627,"span",16),e(628," format"),n(629,"br"),i()()(),t(630,"td",17)(631,"code",18),e(632,"string "),i(),t(633,"code",43),e(634," Array<string>"),i()(),t(635,"td",20)(636,"em")(637,"strong"),e(638,"(opcional)"),i()(),t(639,"p"),e(640,"Define o formato de exibi\xE7\xE3o para o valor de um campo."),i(),t(641,"ul")(642,"li")(643,"p"),e(644,"Quando "),t(645,"code"),e(646,"format"),i(),e(647," \xE9 uma "),t(648,"code"),e(649,"string"),i(),e(650,", o formato aplicado depende da propriedade "),t(651,"strong"),e(652,"type"),i(),e(653," segue como usar cada tipo:"),i(),t(654,"ul")(655,"li")(656,"code"),e(657,"currency"),i(),e(658,": Utiliza c\xF3digos de moeda definidos pelo "),t(659,"a",44),e(660,"CurrencyPipe"),i(),e(661,`.
Exemplos: Use 'BRL' para Real Brasileiro e 'USD' para D\xF3lar Americano.`),i(),t(662,"li")(663,"code"),e(664,"date"),i(),e(665,": Adota formatos de data especificados pelo "),t(666,"a",45),e(667,"DatePipe"),i(),e(668,`.
Suporta formatos personalizados, como dia (dd), m\xEAs (MM) e ano (yyyy ou yy).
Formato padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),i(),t(669,"li")(670,"code"),e(671,"time"),i(),e(672,`: Aceita formatos de tempo, incluindo hora (HH), minutos (mm), segundos (ss) e opcionalmente
milisegundos (f-ffffff). Formato padr\xE3o \xE9 'HH:mm:ss'. Exemplos: 'HH:mm', 'HH:mm:ss.ffffff', 'HH:mm:ss.ff'.`),i(),t(673,"li")(674,"code"),e(675,"number"),i(),e(676,": Usa especifica\xE7\xF5es do "),t(677,"a",46),e(678,"DecimalPipe"),i(),e(679,` para formata\xE7\xE3o num\xE9rica.
Na aus\xEAncia de um formato espec\xEDfico, o n\xFAmero \xE9 exibido como fornecido.
Exemplo: Entrada `),t(680,"code"),e(681,"50"),i(),e(682,", formato "),t(683,"code"),e(684,"'1.2-5'"),i(),e(685,", resulta em "),t(686,"code"),e(687,"50.00"),i(),e(688,"."),i()()(),t(689,"li")(690,"p"),e(691,"Quando "),t(692,"code"),e(693,"format"),i(),e(694," \xE9 um "),t(695,"code"),e(696,"Array<string>"),i(),e(697,":"),i(),t(698,"ul")(699,"li"),e(700,"Cada elemento do array representa uma propriedade do objeto."),i(),t(701,"li"),e(702,"Os valores dessas propriedades s\xE3o concatenados, separados pelo padr\xE3o ' - '."),i(),t(703,"li"),e(704,"Exemplo: Para "),t(705,"code"),e(706,'format: ["id", "name"]'),i(),e(707," e um objeto "),t(708,"code"),e(709,"{ id: 1, name: 'Carlos Diego' }"),i(),e(710,`,
o resultado ser\xE1 `),t(711,"code"),e(712,"'1 - Carlos Diego'"),i(),e(713,"."),i()()()()()(),t(714,"tr",13)(715,"td",14)(716,"div",15)(717,"span",16),e(718," gridColumns"),n(719,"br"),i()()(),t(720,"td",17)(721,"code",47),e(722,"number"),i()(),t(723,"td",20)(724,"em")(725,"strong"),e(726,"(opcional)"),i()(),t(727,"p"),e(728,"Tamanho de exibi\xE7\xE3o do campo em telas."),i(),t(729,"p"),e(730,"Deve ser usado o sistema de "),t(731,"strong"),e(732,"grid"),i(),e(733," do PO (1 ... 12 colunas)."),i(),t(734,"blockquote")(735,"p"),e(736,"Esta propriedade \xE9 generica, aplica o valor em todos os tamanhos de telas."),i()()()(),t(737,"tr",13)(738,"td",14)(739,"div",15)(740,"span",16),e(741," gridLgColumns"),n(742,"br"),i()()(),t(743,"td",17)(744,"code",47),e(745,"number"),i()(),t(746,"td",20)(747,"em")(748,"strong"),e(749,"(opcional)"),i()(),t(750,"p"),e(751,"Tamanho de exibi\xE7\xE3o do campo em telas grandes (lg)."),i(),t(752,"p"),e(753,"Deve ser usado o sistema de "),t(754,"strong"),e(755,"grid"),i(),e(756," do PO (1 ... 12 colunas)."),i(),t(757,"blockquote")(758,"p"),e(759,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),t(760,"code"),e(761,"gridColumns"),i(),e(762,"."),i()()()(),t(763,"tr",13)(764,"td",14)(765,"div",15)(766,"span",16),e(767," gridLgPull"),n(768,"br"),i()()(),t(769,"td",17)(770,"code",47),e(771,"number"),i()(),t(772,"td",20)(773,"em")(774,"strong"),e(775,"(opcional)"),i()(),t(776,"p"),e(777,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas grandes (lg)."),i(),t(778,"p"),e(779,"Deve ser usado o sistema de "),t(780,"strong"),e(781,"grid"),i(),e(782," do PO (1 ... 11 colunas)."),i(),t(783,"blockquote")(784,"p"),e(785,"Esta propriedade n\xE3o funciona com a propriedade "),t(786,"code"),e(787,"gridColumns"),i(),e(788,". Deve-se especificar o tamanho da tela."),i()()()(),t(789,"tr",13)(790,"td",14)(791,"div",15)(792,"span",16),e(793," gridMdColumns"),n(794,"br"),i()()(),t(795,"td",17)(796,"code",47),e(797,"number"),i()(),t(798,"td",20)(799,"em")(800,"strong"),e(801,"(opcional)"),i()(),t(802,"p"),e(803,"Tamanho de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),i(),t(804,"p"),e(805,"Deve ser usado o sistema de "),t(806,"strong"),e(807,"grid"),i(),e(808," do PO (1 ... 12 colunas)."),i(),t(809,"blockquote")(810,"p"),e(811,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),t(812,"code"),e(813,"gridColumns"),i(),e(814,"."),i()()()(),t(815,"tr",13)(816,"td",14)(817,"div",15)(818,"span",16),e(819," gridMdPull"),n(820,"br"),i()()(),t(821,"td",17)(822,"code",47),e(823,"number"),i()(),t(824,"td",20)(825,"em")(826,"strong"),e(827,"(opcional)"),i()(),t(828,"p"),e(829,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas m\xE9dias (md)."),i(),t(830,"p"),e(831,"Deve ser usado o sistema de "),t(832,"strong"),e(833,"grid"),i(),e(834," do PO (1 ... 11 colunas)."),i(),t(835,"blockquote")(836,"p"),e(837,"Esta propriedade n\xE3o funciona com a propriedade "),t(838,"code"),e(839,"gridColumns"),i(),e(840,". Deve-se especificar o tamanho da tela."),i()()()(),t(841,"tr",13)(842,"td",14)(843,"div",15)(844,"span",16),e(845," gridSmColumns"),n(846,"br"),i()()(),t(847,"td",17)(848,"code",47),e(849,"number"),i()(),t(850,"td",20)(851,"em")(852,"strong"),e(853,"(opcional)"),i()(),t(854,"p"),e(855,"Tamanho de exibi\xE7\xE3o do campo em telas menores (sm)."),i(),t(856,"p"),e(857,"Deve ser usado o sistema de "),t(858,"strong"),e(859,"grid"),i(),e(860," do PO (1 ... 12 colunas)."),i(),t(861,"blockquote")(862,"p"),e(863,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),t(864,"code"),e(865,"gridColumns"),i(),e(866,"."),i()()()(),t(867,"tr",13)(868,"td",14)(869,"div",15)(870,"span",16),e(871," gridSmPull"),n(872,"br"),i()()(),t(873,"td",17)(874,"code",47),e(875,"number"),i()(),t(876,"td",20)(877,"em")(878,"strong"),e(879,"(opcional)"),i()(),t(880,"p"),e(881,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas menores (sm)."),i(),t(882,"p"),e(883,"Deve ser usado o sistema de "),t(884,"strong"),e(885,"grid"),i(),e(886," do PO (1 ... 11 colunas)."),i(),t(887,"blockquote")(888,"p"),e(889,"Esta propriedade n\xE3o funciona com a propriedade "),t(890,"code"),e(891,"gridColumns"),i(),e(892,". Deve-se especificar o tamanho da tela."),i()()()(),t(893,"tr",13)(894,"td",14)(895,"div",15)(896,"span",16),e(897," gridXlColumns"),n(898,"br"),i()()(),t(899,"td",17)(900,"code",47),e(901,"number"),i()(),t(902,"td",20)(903,"em")(904,"strong"),e(905,"(opcional)"),i()(),t(906,"p"),e(907,"Tamanho de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),i(),t(908,"p"),e(909,"Deve ser usado o sistema de "),t(910,"strong"),e(911,"grid"),i(),e(912," do PO (1 ... 12 colunas)."),i(),t(913,"blockquote")(914,"p"),e(915,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),t(916,"code"),e(917,"gridColumns"),i(),e(918,"."),i()()()(),t(919,"tr",13)(920,"td",14)(921,"div",15)(922,"span",16),e(923," gridXlPull"),n(924,"br"),i()()(),t(925,"td",17)(926,"code",47),e(927,"number"),i()(),t(928,"td",20)(929,"em")(930,"strong"),e(931,"(opcional)"),i()(),t(932,"p"),e(933,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas extra grandes (xl)."),i(),t(934,"p"),e(935,"Deve ser usado o sistema de "),t(936,"strong"),e(937,"grid"),i(),e(938," do PO (1 ... 11 colunas)."),i(),t(939,"blockquote")(940,"p"),e(941,"Esta propriedade n\xE3o funciona com a propriedade "),t(942,"code"),e(943,"gridColumns"),i(),e(944,". Deve-se especificar o tamanho da tela."),i()()()(),t(945,"tr",13)(946,"td",14)(947,"div",15)(948,"span",16),e(949," height"),n(950,"br"),i()()(),t(951,"td",17)(952,"code",18),e(953,"string"),i()(),t(954,"td",20)(955,"em")(956,"strong"),e(957,"(opcional)"),i()(),t(958,"p"),e(959,"Defini o texto alternativo descrevendo a imagem."),i(),t(960,"p"),e(961,"Exemplo de utiliza\xE7\xE3o:"),i(),t(962,"pre")(963,"code"),e(964,`[
  { property: 'imagem 1', image:'string', alt:'string', height:'number'},
];
`),i()(),t(965,"p")(966,"strong"),e(967,"Componentes compat\xEDveis:"),i(),t(968,"code"),e(969,"po-image"),i(),e(970,"."),i()()(),t(971,"tr",13)(972,"td",14)(973,"div",15)(974,"span",16),e(975," icon"),n(976,"br"),i()()(),t(977,"td",17)(978,"code",18),e(979,"string"),i()(),t(980,"td",20)(981,"em")(982,"strong"),e(983,"(opcional)"),i()(),t(984,"p"),e(985,"Define um \xEDcone que ser\xE1 exibido ao lado do valor para o campo do tipo "),t(986,"em"),e(987,"tag"),i(),e(988,"."),i(),t(989,"blockquote")(990,"p"),e(991,"Veja os valores v\xE1lidos na "),t(992,"a",48),e(993,"biblioteca de \xEDcones"),i(),e(994,"."),i()()()(),t(995,"tr",13)(996,"td",14)(997,"div",15)(998,"span",16),e(999," image"),n(1e3,"br"),i()()(),t(1001,"td",17)(1002,"code",24),e(1003,"boolean"),i()(),t(1004,"td",20)(1005,"em")(1006,"strong"),e(1007,"(opcional)"),i()(),t(1008,"p"),e(1009,"Possibilita a utiliza\xE7\xE3o de imagem."),i(),t(1010,"p"),e(1011,"Exemplo de utiliza\xE7\xE3o:"),i(),t(1012,"pre")(1013,"code"),e(1014,`[
  { property: 'imagem 1', image:'string', alt:'string', height:'300'},
];
`),i()(),t(1015,"ul")(1016,"li"),e(1017,"@default "),t(1018,"code"),e(1019,"false"),i()()(),t(1020,"p")(1021,"strong"),e(1022,"Componentes compat\xEDveis:"),i(),t(1023,"code"),e(1024,"po-image"),i(),e(1025,"."),i()()(),t(1026,"tr",13)(1027,"td",14)(1028,"div",15)(1029,"span",16),e(1030," isArrayOrObject"),n(1031,"br"),i()()(),t(1032,"td",17)(1033,"code",24),e(1034,"boolean"),i()(),t(1035,"td",20)(1036,"em")(1037,"strong"),e(1038,"(opcional)"),i()(),t(1039,"p"),e(1040,"Define que a propriedade "),t(1041,"code"),e(1042,"property"),i(),e(1043," \xE9 uma lista ou um objeto."),i(),t(1044,"blockquote")(1045,"p"),e(1046,"Por padr\xE3o, espera-se que a lista ou o objeto esteja com as propriedades "),t(1047,"code"),e(1048,"label"),i(),e(1049," e "),t(1050,"code"),e(1051,"value"),i(),e(1052,`.
Caso estejam com nomes diferentes, deve-se usar as propriedades `),t(1053,"code"),e(1054,"fieldLabel"),i(),e(1055," e "),t(1056,"code"),e(1057,"fieldValue"),i(),e(1058,`.
\xC9 ignorada caso a propriedade `),t(1059,"code"),e(1060,"searchService"),i(),e(1061," esteja sendo utilizada."),i()()()(),t(1062,"tr",13)(1063,"td",14)(1064,"div",15)(1065,"span",16),e(1066," key"),n(1067,"br"),i()()(),t(1068,"td",17)(1069,"code",24),e(1070,"boolean"),i()(),t(1071,"td",20)(1072,"em")(1073,"strong"),e(1074,"(opcional)"),i()(),t(1075,"p"),e(1076,"Identificador"),i()()(),t(1077,"tr",13)(1078,"td",14)(1079,"div",15)(1080,"span",16),e(1081," label"),n(1082,"br"),i()()(),t(1083,"td",17)(1084,"code",18),e(1085,"string"),i()(),t(1086,"td",20)(1087,"em")(1088,"strong"),e(1089,"(opcional)"),i()(),t(1090,"p"),e(1091,"R\xF3tulo do campo exibido."),i(),t(1092,"p"),e(1093,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),t(1094,"code"),e(1095,"label"),i(),e(1096," o valor da propriedade "),t(1097,"code"),e(1098,"property"),i(),e(1099," com a primeira letra em mai\xFAsculo."),i()()(),t(1100,"tr",13)(1101,"td",14)(1102,"div",15)(1103,"span",16),e(1104," offsetColumns"),n(1105,"br"),i()()(),t(1106,"td",17)(1107,"code",47),e(1108,"number"),i()(),t(1109,"td",20)(1110,"em")(1111,"strong"),e(1112,"(opcional)"),i()(),t(1113,"p"),e(1114,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),i(),t(1115,"p"),e(1116,"Deve ser usado o sistema de "),t(1117,"strong"),e(1118,"grid"),i(),e(1119," do PO (1 ... 12 colunas)."),i(),t(1120,"blockquote")(1121,"p"),e(1122,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),i()()()(),t(1123,"tr",13)(1124,"td",14)(1125,"div",15)(1126,"span",16),e(1127," offsetLgColumns"),n(1128,"br"),i()()(),t(1129,"td",17)(1130,"code",47),e(1131,"number"),i()(),t(1132,"td",20)(1133,"em")(1134,"strong"),e(1135,"(opcional)"),i()(),t(1136,"p"),e(1137,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),i(),t(1138,"p"),e(1139,"Deve ser usado o sistema de "),t(1140,"strong"),e(1141,"grid"),i(),e(1142," do PO (1 ... 12 colunas)."),i(),t(1143,"blockquote")(1144,"p"),e(1145,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),t(1146,"code"),e(1147,"offsetColumns"),i(),e(1148,"."),i()()()(),t(1149,"tr",13)(1150,"td",14)(1151,"div",15)(1152,"span",16),e(1153," offsetMdColumns"),n(1154,"br"),i()()(),t(1155,"td",17)(1156,"code",47),e(1157,"number"),i()(),t(1158,"td",20)(1159,"em")(1160,"strong"),e(1161,"(opcional)"),i()(),t(1162,"p"),e(1163,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),i(),t(1164,"p"),e(1165,"Deve ser usado o sistema de "),t(1166,"strong"),e(1167,"grid"),i(),e(1168," do PO (1 ... 12 colunas)."),i(),t(1169,"blockquote")(1170,"p"),e(1171,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),t(1172,"code"),e(1173,"offsetColumns"),i(),e(1174,"."),i()()()(),t(1175,"tr",13)(1176,"td",14)(1177,"div",15)(1178,"span",16),e(1179," offsetSmColumns"),n(1180,"br"),i()()(),t(1181,"td",17)(1182,"code",47),e(1183,"number"),i()(),t(1184,"td",20)(1185,"em")(1186,"strong"),e(1187,"(opcional)"),i()(),t(1188,"p"),e(1189,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),i(),t(1190,"p"),e(1191,"Deve ser usado o sistema de "),t(1192,"strong"),e(1193,"grid"),i(),e(1194," do PO (1 ... 12 colunas)."),i(),t(1195,"blockquote")(1196,"p"),e(1197,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),t(1198,"code"),e(1199,"offsetColumns"),i(),e(1200,"."),i()()()(),t(1201,"tr",13)(1202,"td",14)(1203,"div",15)(1204,"span",16),e(1205," offsetXlColumns"),n(1206,"br"),i()()(),t(1207,"td",17)(1208,"code",47),e(1209,"number"),i()(),t(1210,"td",20)(1211,"em")(1212,"strong"),e(1213,"(opcional)"),i()(),t(1214,"p"),e(1215,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),i(),t(1216,"p"),e(1217,"Deve ser usado o sistema de "),t(1218,"strong"),e(1219,"grid"),i(),e(1220," do PO (1 ... 12 colunas)."),i(),t(1221,"blockquote")(1222,"p"),e(1223,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),t(1224,"code"),e(1225,"offsetColumns"),i(),e(1226,"."),i()()()(),t(1227,"tr",13)(1228,"td",14)(1229,"div",15)(1230,"span",16),e(1231," options"),n(1232,"br"),i()()(),t(1233,"td",17)(1234,"code",49),e(1235,"Array<{ label: string; value: string "),i(),t(1236,"code",50),e(1237,` number;
}>`),i()(),t(1238,"td",20)(1239,"em")(1240,"strong"),e(1241,"(opcional)"),i()(),t(1242,"p"),e(1243,`Lista de op\xE7\xF5es que podem ser vinculadas \xE0 propriedade p-value.
Quando uma op\xE7\xE3o de valor \xE9 passada, sua propriedade label ser\xE1 atribu\xEDda \xE0 propriedade p-value.`),i(),t(1244,"p"),e(1245,"Exemplo de utiliza\xE7\xE3o:"),i(),t(1246,"pre")(1247,"code"),e(1248,`fields = [
  {
    property: 'name', options: [
      {label: 'Anna', value: '1'},
      {label: 'Jhon', value: '2'},
      {label: 'Mark', value: '3'}
    ]
  }
];
`),i()(),t(1249,"pre")(1250,"code"),e(1251,`<!-- Passando o valor 2 referente ao Jhon -->
<po-dynamic-view [p-fields]="fields" [p-value]="{ name: '2' }"> </po-dynamic-view>
`),i()()()(),t(1252,"tr",13)(1253,"td",14)(1254,"div",15)(1255,"span",16),e(1256," optionsMulti"),n(1257,"br"),i()()(),t(1258,"td",17)(1259,"code",24),e(1260,"boolean"),i()(),t(1261,"td",20)(1262,"em")(1263,"strong"),e(1264,"(opcional)"),i()(),t(1265,"p"),e(1266,`Habilita a visualiza\xE7\xE3o de m\xFAltiplos itens.
\xDAtil para exibir dados em formatos semelhantes aos componentes que suportam sele\xE7\xE3o m\xFAltipla.`),i()()(),t(1267,"tr",13)(1268,"td",14)(1269,"div",15)(1270,"span",16),e(1271," optionsService"),n(1272,"br"),i()()(),t(1273,"td",17)(1274,"code",18),e(1275,"string "),i(),t(1276,"code",51),e(1277," PoComboFilter "),i(),t(1278,"code",52),e(1279," PoMultiselectFilter"),i()(),t(1280,"td",20)(1281,"em")(1282,"strong"),e(1283,"(opcional)"),i()(),t(1284,"p"),e(1285,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),t(1286,"strong"),e(1287,"Importante"),i()(),t(1288,"blockquote")(1289,"p"),e(1290,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),t(1291,"a",53),e(1292,"guia de API do PO UI"),i(),e(1293,"."),i()()()(),t(1294,"tr",13)(1295,"td",14)(1296,"div",15)(1297,"span",16),e(1298," order"),n(1299,"br"),i()()(),t(1300,"td",17)(1301,"code",47),e(1302,"number"),i()(),t(1303,"td",20)(1304,"em")(1305,"strong"),e(1306,"(opcional)"),i()(),t(1307,"p"),e(1308,"Informa a ordem de exibi\xE7\xE3o do campo."),i(),t(1309,"p"),e(1310,"Exemplo de utiliza\xE7\xE3o:"),i(),t(1311,"pre")(1312,"code"),e(1313,`[
  { property: 'test 1', order: 2 },
  { property: 'test 2', order: 1 },
  { property: 'test 3' },
  { property: 'test 4', order: 3 }
];
`),i()(),t(1314,"p"),e(1315,"Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:"),i(),t(1316,"pre")(1317,"code"),e(1318,`[
  { property: 'test 2', order: 1 },
  { property: 'test 1', order: 2 },
  { property: 'test 4', order: 3 },
  { property: 'test 3' }
];
`),i()(),t(1319,"p"),e(1320,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),i(),t(1321,"p"),e(1322,"Campos sem "),t(1323,"code"),e(1324,"order"),i(),e(1325,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),i()()(),t(1326,"tr",13)(1327,"td",14)(1328,"div",15)(1329,"span",16),e(1330," params"),n(1331,"br"),i()()(),t(1332,"td",17)(1333,"code",54),e(1334,"any"),i()(),t(1335,"td",20)(1336,"em")(1337,"strong"),e(1338,"(opcional)"),i()(),t(1339,"p"),e(1340,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca "),t(1341,"code"),e(1342,"searchService"),i(),e(1343," ou "),t(1344,"code"),e(1345,"optionsService"),i(),e(1346,`
utilizadas pelos campos que dependem de servi\xE7os para carregar seus dados.`),i(),t(1347,"p"),e(1348,"Por exemplo, para o par\xE2metro "),t(1349,"code"),e(1350,"{ age: 23 }"),i(),e(1351," a URL da requisi\xE7\xE3o ficaria:"),i(),t(1352,"p")(1353,"code"),e(1354,"url + /1?age=23"),i()()()(),t(1355,"tr",13)(1356,"td",14)(1357,"div",15)(1358,"span",16),e(1359," property"),n(1360,"br"),i()()(),t(1361,"td",17)(1362,"code",18),e(1363,"string"),i()(),t(1364,"td",20)(1365,"p"),e(1366,"Nome de refer\xEAncia do campo."),i()()(),t(1367,"tr",13)(1368,"td",14)(1369,"div",15)(1370,"span",16),e(1371," searchService"),n(1372,"br"),i()()(),t(1373,"td",17)(1374,"code",18),e(1375,"string "),i(),t(1376,"code",55),e(1377," PoDynamicViewRequest"),i()(),t(1378,"td",20)(1379,"em")(1380,"strong"),e(1381,"(opcional)"),i()(),t(1382,"p"),e(1383,`Servi\xE7o customizado para um campo em espec\xEDfico.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoDynamicViewRequest.
`),t(1384,"strong"),e(1385,"Importante:"),i()(),t(1386,"blockquote")(1387,"p"),e(1388,"A propriedade "),t(1389,"code"),e(1390,"property"),i(),e(1391,` deve receber um valor v\xE1lido independente de sua utiliza\xE7\xE3o para
execu\xE7\xE3o correta.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),t(1392,"a",53),e(1393,"guia de API do PO UI"),i(),e(1394,"."),i()()()(),t(1395,"tr",13)(1396,"td",14)(1397,"div",15)(1398,"span",16),e(1399," tag"),n(1400,"br"),i()()(),t(1401,"td",17)(1402,"code",24),e(1403,"boolean"),i()(),t(1404,"td",20)(1405,"em")(1406,"strong"),e(1407,"(opcional)"),i()(),t(1408,"p"),e(1409,"Indica se o campo ser\xE1 um "),t(1410,"code"),e(1411,"po-tag"),i(),e(1412,"."),i()()(),t(1413,"tr",13)(1414,"td",14)(1415,"div",15)(1416,"span",16),e(1417," textColor"),n(1418,"br"),i()()(),t(1419,"td",17)(1420,"code",18),e(1421,"string"),i()(),t(1422,"td",20)(1423,"em")(1424,"strong"),e(1425,"(opcional)"),i()(),t(1426,"p"),e(1427,"Determina a cor do texto da tag. As maneiras de customizar as cores s\xE3o:"),i(),t(1428,"ul")(1429,"li"),e(1430,"Hexadeximal, por exemplo "),t(1431,"code"),e(1432,"#c64840"),i(),e(1433,";"),i(),t(1434,"li"),e(1435,"RGB, como "),t(1436,"code"),e(1437,"rgb(0, 0, 165)"),i(),e(1438,";"),i(),t(1439,"li"),e(1440,"O nome da cor, por exemplo "),t(1441,"code"),e(1442,"blue"),i(),e(1443,";"),i()()()(),t(1444,"tr",13)(1445,"td",14)(1446,"div",15)(1447,"span",16),e(1448," type"),n(1449,"br"),i()()(),t(1450,"td",17)(1451,"code",18),e(1452,"string "),i(),t(1453,"code",56),e(1454," PoDynamicFieldType"),i()(),t(1455,"td",20)(1456,"em")(1457,"strong"),e(1458,"(opcional)"),i()(),t(1459,"p"),e(1460,"Tipo do valor campo."),i(),t(1461,"p"),e(1462,"Valores v\xE1lidos:"),i(),t(1463,"ul")(1464,"li")(1465,"code"),e(1466,"boolean"),i(),e(1467,": Valores "),t(1468,"em"),e(1469,"booleanos"),i(),e(1470,"."),i(),t(1471,"li")(1472,"code"),e(1473,"currency"),i(),e(1474,": Valores monet\xE1rios."),i(),t(1475,"li")(1476,"code"),e(1477,"decimal"),i(),e(1478,": Valores decimais."),i(),t(1479,"li")(1480,"code"),e(1481,"date"),i(),e(1482,": Valores de datas."),t(1483,"ul")(1484,"li"),e(1485,"Aceita os tipos "),t(1486,"strong"),e(1487,"string"),i(),e(1488," e "),t(1489,"strong"),e(1490,"Date"),i(),e(1491,` padr\xE3o do Javascript,
por exemplo: `),t(1492,"code"),e(1493,"'2017-11-28'"),i(),e(1494," ou "),t(1495,"code"),e(1496,"new Date(2017, 10, 28)"),i(),e(1497,"."),i()()(),t(1498,"li")(1499,"code"),e(1500,"dateTime"),i(),e(1501,": Valor de data com hor\xE1rio."),t(1502,"ul")(1503,"li"),e(1504,"Aceita o tipo "),t(1505,"em"),e(1506,"string"),i(),e(1507," no formato "),t(1508,"strong"),e(1509,"ISO-8601"),i(),e(1510," extendido "),t(1511,"strong"),e(1512,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),i(),e(1513,`
e o tipo `),t(1514,"strong"),e(1515,"Date"),i(),e(1516," padr\xE3o do Javascript, por exemplo: "),t(1517,"code"),e(1518,"'2017-11-28T00:00:00-02:00'"),i(),e(1519," ou "),t(1520,"code"),e(1521,"new Date(2017, 10, 28)"),i(),e(1522,"."),i()()(),t(1523,"li")(1524,"code"),e(1525,"number"),i(),e(1526,": Valores num\xE9ricos."),i(),t(1527,"li")(1528,"code"),e(1529,"string"),i(),e(1530,": Textos."),i(),t(1531,"li")(1532,"code"),e(1533,"time"),i(),e(1534,": Valor do hor\xE1rio."),t(1535,"ul")(1536,"li"),e(1537,"Aceita o tipo "),t(1538,"strong"),e(1539,"string"),i(),e(1540," nos formatos "),t(1541,"strong"),e(1542,"'HH:mm:ss'"),i(),e(1543," ou "),t(1544,"strong"),e(1545,"'HH:mm:ss.ffffff'"),i(),e(1546,", por exemplo: "),t(1547,"code"),e(1548,"'23:12:45'"),i(),e(1549,"."),i()()()()()(),t(1550,"tr",13)(1551,"td",14)(1552,"div",15)(1553,"span",16),e(1554," visible"),n(1555,"br"),i()()(),t(1556,"td",17)(1557,"code",24),e(1558,"boolean"),i()(),t(1559,"td",20)(1560,"em")(1561,"strong"),e(1562,"(opcional)"),i()(),t(1563,"p"),e(1564,"Indica se o campo ser\xE1 vis\xEDvel."),i()()()()())},dependencies:[S],encapsulation:2})}return o})();var Q=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||o)(V(H),V(I))};static \u0275cmp=d({type:o,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Dynamic View",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,l){a&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),c("p-click",function(){return l.changeTab("doc")}),n(3,"sample-po-dynamic-view-doc"),i(),t(4,"po-tab",3),c("p-click",function(){return l.changeTab("web")}),n(5,"sample-po-dynamic-view-basic-view")(6,"sample-po-dynamic-view-employee-view")(7,"sample-po-dynamic-view-employee-on-load-view")(8,"sample-po-dynamic-view-container-view"),i()()()),a&2&&(p("p-actions",l.actions),m(2),p("p-active",l.activeTab==="doc"),m(2),p("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"))},dependencies:[v,E,x,N,G,W,Z,X],encapsulation:2})}return o})();var Ee=[{path:"",component:Q}],K=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=P({type:o});static \u0275inj=D({imports:[k.forChild(Ee),k]})}return o})();var Qe=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=P({type:o});static \u0275inj=D({imports:[B,K]})}return o})();export{Qe as DocPoDynamicViewModule};
