import{o as b,p as W}from"./chunk-HSZY3T7Z.js";import{Ab as S,Jb as z,_a as C,nb as J,sa as j,v as M,zb as x}from"./chunk-MF7ELP6K.js";import{$a as H,$c as O,Aa as p,Da as y,Fb as h,La as n,M as D,Ma as t,N as P,Na as i,Q as g,Ra as w,Sa as c,U as q,V as k,Xc as K,Zc as X,_a as R,ab as U,bb as v,cb as e,eb as f,ja as d,ka as L,mb as A,nb as _,ob as E,qa as s,ra as T}from"./chunk-CBLD3XJL.js";var re=()=>({property:"name",required:!0,showRequired:!0}),le=o=>[o],G=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-basic"]],standalone:!1,decls:1,vars:4,consts:[[3,"p-fields"]],template:function(a,l){a&1&&i(0,"po-dynamic-form",0),a&2&&p("p-fields",E(2,le,_(1,re)))},dependencies:[C],encapsulation:2})}return o})();var de=o=>({"docs-sample-code-tabs":o}),Q=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,l){a&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Dynamic Form Basic"),t(),n(4,"a",2),c("click",function(){return l.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-dynamic-form-basic/sample-po-dynamic-form-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-dynamic-form [p-fields]="[{ property: 'name', required: true, showRequired: true }]"> </po-dynamic-form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-dynamic-form-basic/sample-po-dynamic-form-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-dynamic-form-basic',
  templateUrl: './sample-po-dynamic-form-basic.component.html',
  standalone: false
})
export class SamplePoDynamicFormBasicComponent {}
`),t()()()()(),n(21,"div",10),i(22,"sample-po-dynamic-form-basic"),t(),i(23,"hr")),a&2&&(d(5),y("po-icon "+l.sampleCodeButtonIcon),d(),f(" ",l.sampleCodeButtonLabel,""),d(),p("ngClass",E(4,de,l.hideSampleCodeTabs)))},dependencies:[h,b,x,S,G],encapsulation:2})}return o})();var I=(()=>{class o{getCity(r){switch(r){case 1:return[{city:"Palho\xE7a",code:5},{city:"Lages",code:6},{city:"Balne\xE1rio Cambori\xFA",code:7},{city:"Brusque",code:8}];case 2:return[{city:"S\xE3o Paulo",code:9},{city:"Guarulhos",code:10},{city:"Campinas",code:11},{city:"S\xE3o Bernardo do Campo",code:12}];case 3:return[{city:"Rio de Janeiro",code:13},{city:"S\xE3o Gon\xE7alo",code:14},{city:"Duque de Caxias",code:15},{city:"Nova Igua\xE7u",code:16}];case 4:return[{city:"Belo Horizonte",code:17},{city:"Uberl\xE2ndia",code:18},{city:"Contagem",code:19},{city:"Juiz de Fora",code:20}]}return[]}getUserDocument(r){let a={property:"cpf",visible:!0},l={property:"cnpj",visible:!0};return{fields:[r.isJuridicPerson?l:a]}}static \u0275fac=function(a){return new(a||o)};static \u0275prov=D({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Z=(()=>{class o{poNotification=g(j);registerService=g(I);person={};validateFields=["state"];fields=[{property:"name",divider:"PERSONAL DATA",required:!0,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:"Type your name"},{property:"birthday",label:"Date of birth",type:"date",format:"mm/dd/yyyy",gridColumns:6,gridSmColumns:12,maxValue:"2010-01-01",errorMessage:"The date must be before the year 2010.",order:-1},{property:"cpf",label:"CPF",mask:"999.999.999-99",gridColumns:6,gridSmColumns:12,visible:!1},{property:"cnpj",label:"CNPJ",mask:"99.999.999/9999-99",gridColumns:6,gridSmColumns:12,visible:!1},{property:"genre",gridColumns:6,gridSmColumns:12,options:["Male","Female","Other"],order:2},{property:"shortDescription",label:"Short Description",gridColumns:12,gridSmColumns:12,rows:5,placeholder:"Type short description"},{property:"secretKey",label:"Secret Key",gridColumns:6,secret:!0,pattern:"[a-zA]{5}[Z0-9]{3}",errorMessage:"At least 5 alphabetic and 3 numeric characters are required.",placeholder:"Type your password"},{property:"rememberSecretKey",label:"Remember Secret Key",gridColumns:3,type:"boolean",booleanTrue:"yes",booleanFalse:"no",formatModel:!0},{property:"status",label:"Status",gridColumns:3,type:"boolean",booleanTrue:"Active",booleanFalse:"Inactive",formatModel:!0},{property:"email",divider:"CONTACTS",gridColumns:6,icon:"an an-envelope"},{property:"phone",mask:"(99) 99999-9999",gridColumns:6},{property:"address",gridColumns:6},{property:"addressNumber",label:"Address number",type:"number",gridColumns:6,maxValue:1e4,errorMessage:"Invalid number."},{property:"state",gridColumns:6,options:[{state:"Santa Catarina",code:1},{state:"S\xE3o Paulo",code:2},{state:"Rio de Janeiro",code:3},{state:"Minas Gerais",code:4}],fieldLabel:"state",fieldValue:"code"},{property:"city",disabled:!0,gridColumns:6,fieldValue:"code",fieldLabel:"city"},{property:"vacation",type:"date",divider:"Work data",range:!0,gridColumns:5,gridSmColumns:12},{property:"entryTime",label:"Entry time",type:"time",gridColumns:2,gridSmColumns:6},{property:"exitTime",label:"Exit time",type:"time",gridColumns:2,gridSmColumns:6},{property:"wage",type:"currency",gridColumns:3,gridSmColumns:12,decimalsLength:2,thousandMaxlength:7,icon:"an an-currency-circle-dollar"},{property:"hobbies",divider:"MORE INFO",gridColumns:6,gridSmColumns:12,optional:!0,options:["Soccer","Basketball","Bike","Yoga","Travel","Run"],optionsMulti:!0},{property:"favoriteHero",gridColumns:6,gridSmColumns:12,label:"Favorite hero",optional:!0,searchService:"https://po-sample-api.onrender.com/v1/heroes",columns:[{property:"nickname",label:"Hero"},{property:"label",label:"Name"}],format:["id","nickname"],fieldLabel:"nickname",fieldValue:"email"},{property:"partner",gridColumns:6,gridSmColumns:12,optionsService:"https://po-sample-api.onrender.com/v1/people",fieldLabel:"name",fieldValue:"id",optional:!0},{property:"videogame",gridColumns:6,gridSmColumns:12,label:"Video game console",optional:!0,fieldValue:"code",fieldLabel:"console",options:[{console:"Nintendo Wii U",code:"NWU"},{console:"Playstation 4",code:"PS4"},{console:"Xbox One",code:"XONE"},{console:"Nintendo Switch",code:"NSW"},{console:"Playstation 5",code:"PS5"},{console:"Xbox Series S|X",code:"XSSX"}],optionsMulti:!0},{property:"agree",gridColumns:12,label:"Do you agree?",type:"boolean",forceBooleanComponentType:z.checkbox},{property:"image",type:"upload",gridColumns:12,gridSmColumns:12,label:"Upload your background",optional:!0,url:"https://po-sample-api.onrender.com/v1/uploads/addFile"}];ngOnInit(){this.person={name:"Tony Stark",birthday:"1970-05-29",isJuridicPerson:!1,videogame:["PS4","NSW","XSSX"],rememberSecretKey:"no",status:"active"}}onChangeFields(r){return{value:{city:void 0},fields:[{property:"city",gridColumns:6,options:this.registerService.getCity(r.value.state),disabled:!1}]}}onLoadFields(r){return this.registerService.getUserDocument(r)}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-register"]],standalone:!1,features:[A([I])],decls:5,vars:6,consts:[["dynamicForm",""],["p-auto-focus","name",3,"p-fields","p-load","p-validate","p-validate-fields","p-value"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"]],template:function(a,l){if(a&1){let m=w();i(0,"po-dynamic-form",1,0)(2,"br"),n(3,"div",2)(4,"po-button",3),c("p-click",function(){q(m);let N=v(1);return l.poNotification.success("Data saved successfully!"),k(N.form.reset())}),t()()}if(a&2){let m=v(1);p("p-fields",l.fields)("p-load",l.onLoadFields.bind(l))("p-validate",l.onChangeFields.bind(l))("p-validate-fields",l.validateFields)("p-value",l.person),d(4),p("p-disabled",m==null?null:m.form.invalid)}},dependencies:[M,C],encapsulation:2})}return o})();var ce=o=>({"docs-sample-code-tabs":o}),$=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-register-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,l){a&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Dynamic Form - Register"),t(),n(4,"a",2),c("click",function(){return l.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-dynamic-form-register/sample-po-dynamic-form-register.component.html"),t(),n(13,"pre",7),e(14,`<po-dynamic-form
  #dynamicForm
  p-auto-focus="name"
  [p-fields]="fields"
  [p-load]="onLoadFields.bind(this)"
  [p-validate]="this.onChangeFields.bind(this)"
  [p-validate-fields]="validateFields"
  [p-value]="person"
>
</po-dynamic-form>

<br />

<div class="po-row">
  <po-button
    class="po-md-3"
    p-label="Save"
    [p-disabled]="dynamicForm?.form.invalid"
    (p-click)="poNotification.success('Data saved successfully!'); dynamicForm.form.reset()"
  >
  </po-button>
</div>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-dynamic-form-register/sample-po-dynamic-form-register.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';

import {
  PoDynamicFormField,
  PoDynamicFormFieldChanged,
  PoDynamicFormValidation,
  PoNotificationService,
  ForceBooleanComponentEnum
} from '@po-ui/ng-components';
import { PoDynamicFormRegisterService } from './sample-po-dynamic-form-register.service';

@Component({
  selector: 'sample-po-dynamic-form-register',
  templateUrl: './sample-po-dynamic-form-register.component.html',
  providers: [PoDynamicFormRegisterService],
  standalone: false
})
export class SamplePoDynamicFormRegisterComponent implements OnInit {
  poNotification = inject(PoNotificationService);
  private registerService = inject(PoDynamicFormRegisterService);

  person = {};
  validateFields: Array<string> = ['state'];

  fields: Array<PoDynamicFormField> = [
    {
      property: 'name',
      divider: 'PERSONAL DATA',
      required: true,
      minLength: 4,
      maxLength: 50,
      gridColumns: 6,
      gridSmColumns: 12,
      order: 1,
      placeholder: 'Type your name'
    },
    {
      property: 'birthday',
      label: 'Date of birth',
      type: 'date',
      format: 'mm/dd/yyyy',
      gridColumns: 6,
      gridSmColumns: 12,
      maxValue: '2010-01-01',
      errorMessage: 'The date must be before the year 2010.',
      order: -1
    },
    { property: 'cpf', label: 'CPF', mask: '999.999.999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'genre', gridColumns: 6, gridSmColumns: 12, options: ['Male', 'Female', 'Other'], order: 2 },
    {
      property: 'shortDescription',
      label: 'Short Description',
      gridColumns: 12,
      gridSmColumns: 12,
      rows: 5,
      placeholder: 'Type short description'
    },
    {
      property: 'secretKey',
      label: 'Secret Key',
      gridColumns: 6,
      secret: true,
      pattern: '[a-zA]{5}[Z0-9]{3}',
      errorMessage: 'At least 5 alphabetic and 3 numeric characters are required.',
      placeholder: 'Type your password'
    },
    {
      property: 'rememberSecretKey',
      label: 'Remember Secret Key',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'yes',
      booleanFalse: 'no',
      formatModel: true
    },
    {
      property: 'status',
      label: 'Status',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'Active',
      booleanFalse: 'Inactive',
      formatModel: true
    },
    { property: 'email', divider: 'CONTACTS', gridColumns: 6, icon: 'an an-envelope' },
    { property: 'phone', mask: '(99) 99999-9999', gridColumns: 6 },
    { property: 'address', gridColumns: 6 },
    {
      property: 'addressNumber',
      label: 'Address number',
      type: 'number',
      gridColumns: 6,
      maxValue: 10000,
      errorMessage: 'Invalid number.'
    },
    {
      property: 'state',
      gridColumns: 6,
      options: [
        { state: 'Santa Catarina', code: 1 },
        { state: 'S\xE3o Paulo', code: 2 },
        { state: 'Rio de Janeiro', code: 3 },
        { state: 'Minas Gerais', code: 4 }
      ],
      fieldLabel: 'state',
      fieldValue: 'code'
    },
    { property: 'city', disabled: true, gridColumns: 6, fieldValue: 'code', fieldLabel: 'city' },
    {
      property: 'vacation',
      type: 'date',
      divider: 'Work data',
      range: true,
      gridColumns: 5,
      gridSmColumns: 12
    },
    {
      property: 'entryTime',
      label: 'Entry time',
      type: 'time',
      gridColumns: 2,
      gridSmColumns: 6
    },
    { property: 'exitTime', label: 'Exit time', type: 'time', gridColumns: 2, gridSmColumns: 6 },
    {
      property: 'wage',
      type: 'currency',
      gridColumns: 3,
      gridSmColumns: 12,
      decimalsLength: 2,
      thousandMaxlength: 7,
      icon: 'an an-currency-circle-dollar'
    },
    {
      property: 'hobbies',
      divider: 'MORE INFO',
      gridColumns: 6,
      gridSmColumns: 12,
      optional: true,
      options: ['Soccer', 'Basketball', 'Bike', 'Yoga', 'Travel', 'Run'],
      optionsMulti: true
    },
    {
      property: 'favoriteHero',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Favorite hero',
      optional: true,
      searchService: 'https://po-sample-api.onrender.com/v1/heroes',
      columns: [
        { property: 'nickname', label: 'Hero' },
        { property: 'label', label: 'Name' }
      ],
      format: ['id', 'nickname'],
      fieldLabel: 'nickname',
      fieldValue: 'email'
    },
    {
      property: 'partner',
      gridColumns: 6,
      gridSmColumns: 12,
      optionsService: 'https://po-sample-api.onrender.com/v1/people',
      fieldLabel: 'name',
      fieldValue: 'id',
      optional: true
    },
    {
      property: 'videogame',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Video game console',
      optional: true,
      fieldValue: 'code',
      fieldLabel: 'console',
      options: [
        { console: 'Nintendo Wii U', code: 'NWU' },
        { console: 'Playstation 4', code: 'PS4' },
        { console: 'Xbox One', code: 'XONE' },
        { console: 'Nintendo Switch', code: 'NSW' },
        { console: 'Playstation 5', code: 'PS5' },
        { console: 'Xbox Series S|X', code: 'XSSX' }
      ],
      optionsMulti: true
    },
    {
      property: 'agree',
      gridColumns: 12,
      label: 'Do you agree?',
      type: 'boolean',
      forceBooleanComponentType: ForceBooleanComponentEnum.checkbox
    },
    {
      property: 'image',
      type: 'upload',
      gridColumns: 12,
      gridSmColumns: 12,
      label: 'Upload your background',
      optional: true,
      url: 'https://po-sample-api.onrender.com/v1/uploads/addFile'
    }
  ];

  ngOnInit() {
    this.person = {
      name: 'Tony Stark',
      birthday: '1970-05-29',
      isJuridicPerson: false,
      videogame: ['PS4', 'NSW', 'XSSX'],
      rememberSecretKey: 'no',
      status: 'active'
    };
  }

  onChangeFields(changedValue: PoDynamicFormFieldChanged): PoDynamicFormValidation {
    return {
      value: { city: undefined },
      fields: [
        {
          property: 'city',
          gridColumns: 6,
          options: this.registerService.getCity(changedValue.value.state),
          disabled: false
        }
      ]
    };
  }

  onLoadFields(value: any) {
    return this.registerService.getUserDocument(value);
  }
}
`),t(),n(21,"label",6),e(22,"sample-po-dynamic-form-register/sample-po-dynamic-form-register.service.ts"),t(),n(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoDynamicFormRegisterService {
  getCity(state: number) {
    switch (state) {
      case 1: {
        return [
          { city: 'Palho\xE7a', code: 5 },
          { city: 'Lages', code: 6 },
          { city: 'Balne\xE1rio Cambori\xFA', code: 7 },
          { city: 'Brusque', code: 8 }
        ];
      }
      case 2: {
        return [
          { city: 'S\xE3o Paulo', code: 9 },
          { city: 'Guarulhos', code: 10 },
          { city: 'Campinas', code: 11 },
          { city: 'S\xE3o Bernardo do Campo', code: 12 }
        ];
      }
      case 3: {
        return [
          { city: 'Rio de Janeiro', code: 13 },
          { city: 'S\xE3o Gon\xE7alo', code: 14 },
          { city: 'Duque de Caxias', code: 15 },
          { city: 'Nova Igua\xE7u', code: 16 }
        ];
      }
      case 4: {
        return [
          { city: 'Belo Horizonte', code: 17 },
          { city: 'Uberl\xE2ndia', code: 18 },
          { city: 'Contagem', code: 19 },
          { city: 'Juiz de Fora', code: 20 }
        ];
      }
    }
    return [];
  }

  getUserDocument(value) {
    const cpfField = { property: 'cpf', visible: true };
    const cnpjField = { property: 'cnpj', visible: true };
    const document = value.isJuridicPerson ? cnpjField : cpfField;

    return {
      fields: [document]
    };
  }
}
`),t()()()()(),n(25,"div",10),i(26,"sample-po-dynamic-form-register"),t(),i(27,"hr")),a&2&&(d(5),y("po-icon "+l.sampleCodeButtonIcon),d(),f(" ",l.sampleCodeButtonLabel,""),d(),p("ngClass",E(4,ce,l.hideSampleCodeTabs)))},dependencies:[h,b,x,S,Z],encapsulation:2})}return o})();var B=(()=>{class o{getCity(r){switch(r){case 1:return[{city:"Palho\xE7a",code:5},{city:"Lages",code:6},{city:"Balne\xE1rio Cambori\xFA",code:7},{city:"Brusque",code:8}];case 2:return[{city:"S\xE3o Paulo",code:9},{city:"Guarulhos",code:10},{city:"Campinas",code:11},{city:"S\xE3o Bernardo do Campo",code:12}];case 3:return[{city:"Rio de Janeiro",code:13},{city:"S\xE3o Gon\xE7alo",code:14},{city:"Duque de Caxias",code:15},{city:"Nova Igua\xE7u",code:16}];case 4:return[{city:"Belo Horizonte",code:17},{city:"Uberl\xE2ndia",code:18},{city:"Contagem",code:19},{city:"Juiz de Fora",code:20}]}return[]}getUserDocument(r){let a={property:"cpf",visible:!0},l={property:"cnpj",visible:!0};return{fields:[r.isJuridicPerson?l:a]}}static \u0275fac=function(a){return new(a||o)};static \u0275prov=D({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Ee=["dynamicForm"],ee=(()=>{class o{poNotification=g(j);registerService=g(B);dynamicForm;person={};validateFields=["state"];fields=[{property:"name",container:"PERSONAL DATA",required:!0,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:"Type your name"},{property:"birthday",label:"Date of birth",type:"date",format:"mm/dd/yyyy",gridColumns:6,gridSmColumns:12,maxValue:"2010-01-01",errorMessage:"The date must be before the year 2010.",order:-1,help:"Enter or select a valid date.",additionalHelpTooltip:"Please enter a valid date in the format MMDDYYYY.",keydown:this.onKeyDown.bind(this,"birthday")},{property:"cpf",label:"CPF",mask:"999.999.999-99",gridColumns:6,gridSmColumns:12,visible:!1},{property:"cnpj",label:"CNPJ",mask:"99.999.999/9999-99",gridColumns:6,gridSmColumns:12,visible:!1},{property:"genre",gridColumns:6,gridSmColumns:12,options:["Male","Female","Other"],order:2},{property:"shortDescription",label:"Short Description",gridColumns:12,gridSmColumns:12,rows:5,placeholder:"Type short description"},{property:"secretKey",label:"Secret Key",gridColumns:6,secret:!0,pattern:"[a-zA]{5}[Z0-9]{3}",errorMessage:"At least 5 alphabetic and 3 numeric characters are required.",placeholder:"Type your password",help:"Password must include a combination of letters and numbers.",additionalHelpTooltip:"At least 5 alphabetic and 3 numeric characters are required.",keydown:this.onKeyDown.bind(this,"secretKey")},{property:"rememberSecretKey",label:"Remember Secret Key",gridColumns:3,type:"boolean",booleanTrue:"yes",booleanFalse:"no",formatModel:!0},{property:"status",label:"Status",gridColumns:3,type:"boolean",booleanTrue:"Active",booleanFalse:"Inactive",formatModel:!0},{property:"email",container:"CONTACTS",gridColumns:6,icon:"an an-envelope"},{property:"phone",mask:"(99) 99999-9999",gridColumns:6},{property:"address",gridColumns:6},{property:"addressNumber",label:"Address number",type:"number",gridColumns:6,maxValue:1e4,errorMessage:"Invalid number."},{property:"state",gridColumns:6,options:[{state:"Santa Catarina",code:1},{state:"S\xE3o Paulo",code:2},{state:"Rio de Janeiro",code:3},{state:"Minas Gerais",code:4}],fieldLabel:"state",fieldValue:"code"},{property:"city",disabled:!0,gridColumns:6,fieldValue:"code",fieldLabel:"city"},{property:"vacation",type:"date",container:"Work data",range:!0,gridColumns:5,gridSmColumns:12,help:"Enter or select a valid date range.",additionalHelpTooltip:"Ensure the start date is earlier than or equal to the end date.",keydown:this.onKeyDown.bind(this,"vacation")},{property:"entryTime",label:"Entry time",type:"time",gridColumns:2,gridSmColumns:6},{property:"exitTime",label:"Exit time",type:"time",gridColumns:2,gridSmColumns:6},{property:"wage",type:"currency",gridColumns:3,gridSmColumns:12,decimalsLength:2,thousandMaxlength:7,icon:"an an-currency-circle-dollar"},{property:"hobbies",container:"MORE INFO",gridColumns:6,gridSmColumns:12,optional:!0,options:["Soccer","Basketball","Bike","Yoga","Travel","Run"],optionsMulti:!0,listboxControlPosition:"top"},{property:"favoriteHero",gridColumns:6,gridSmColumns:12,label:"Favorite hero",optional:!0,searchService:"https://po-sample-api.onrender.com/v1/heroes",columns:[{property:"nickname",label:"Hero"},{property:"label",label:"Name"}],format:["id","nickname"],fieldLabel:"nickname",fieldValue:"email"},{property:"partner",gridColumns:6,gridSmColumns:12,optionsService:"https://po-sample-api.onrender.com/v1/people",fieldLabel:"name",fieldValue:"id",optional:!0,listboxControlPosition:"top"},{property:"videogame",gridColumns:6,gridSmColumns:12,label:"Video game console",optional:!0,fieldValue:"code",fieldLabel:"console",options:[{console:"Nintendo Wii U",code:"NWU"},{console:"Playstation 4",code:"PS4"},{console:"Xbox One",code:"XONE"},{console:"Nintendo Switch",code:"NSW"},{console:"Playstation 5",code:"PS5"},{console:"Xbox Series S|X",code:"XSSX"}],optionsMulti:!0,listboxControlPosition:"top"},{property:"agree",gridColumns:12,label:"Do you agree?",type:"boolean",forceBooleanComponentType:z.checkbox},{property:"image",type:"upload",gridColumns:12,gridSmColumns:12,label:"Upload your background",optional:!0,url:"https://po-sample-api.onrender.com/v1/uploads/addFile",customAction:{icon:"an an-download",visible:!0},customActionClick:r=>{console.log("Iniciar download para o arquivo:",r.name)}}];ngOnInit(){this.person={name:"Tony Stark",birthday:"1970-05-29",isJuridicPerson:!1,videogame:["PS4","NSW","XSSX"],rememberSecretKey:"no",status:"active"}}onChangeFields(r){return{value:{city:void 0},fields:[{property:"city",gridColumns:6,options:this.registerService.getCity(r.value.state),disabled:!1}]}}onKeyDown(r,a){a.code==="F9"&&this.dynamicForm.showAdditionalHelp(r)}onLoadFields(r){return this.registerService.getUserDocument(r)}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-container"]],viewQuery:function(a,l){if(a&1&&R(Ee,7),a&2){let m;H(m=U())&&(l.dynamicForm=m.first)}},standalone:!1,features:[A([B])],decls:5,vars:6,consts:[["dynamicForm",""],["p-auto-focus","name",3,"p-fields","p-load","p-validate","p-validate-fields","p-value"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"]],template:function(a,l){if(a&1){let m=w();i(0,"po-dynamic-form",1,0)(2,"br"),n(3,"div",2)(4,"po-button",3),c("p-click",function(){q(m);let N=v(1);return l.poNotification.success("Data saved successfully!"),k(N.form.reset())}),t()()}if(a&2){let m=v(1);p("p-fields",l.fields)("p-load",l.onLoadFields.bind(l))("p-validate",l.onChangeFields.bind(l))("p-validate-fields",l.validateFields)("p-value",l.person),d(4),p("p-disabled",m==null?null:m.form.invalid)}},dependencies:[M,C],encapsulation:2})}return o})();var Se=o=>({"docs-sample-code-tabs":o}),te=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-container-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,l){a&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Dynamic Form - Container"),t(),n(4,"a",2),c("click",function(){return l.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-dynamic-form-container/sample-po-dynamic-form-container.component.html"),t(),n(13,"pre",7),e(14,`<po-dynamic-form
  #dynamicForm
  p-auto-focus="name"
  [p-fields]="fields"
  [p-load]="onLoadFields.bind(this)"
  [p-validate]="this.onChangeFields.bind(this)"
  [p-validate-fields]="validateFields"
  [p-value]="person"
>
</po-dynamic-form>

<br />

<div class="po-row">
  <po-button
    class="po-md-3"
    p-label="Save"
    [p-disabled]="dynamicForm?.form.invalid"
    (p-click)="poNotification.success('Data saved successfully!'); dynamicForm.form.reset()"
  >
  </po-button>
</div>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-dynamic-form-container/sample-po-dynamic-form-container.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, ViewChild, inject } from '@angular/core';

import {
  ForceBooleanComponentEnum,
  PoDynamicFormComponent,
  PoDynamicFormField,
  PoDynamicFormFieldChanged,
  PoDynamicFormValidation,
  PoNotificationService,
  PoUploadFile
} from '@po-ui/ng-components';
import { PoDynamicFormContainerService } from './sample-po-dynamic-form-container.service';

@Component({
  selector: 'sample-po-dynamic-form-container',
  templateUrl: './sample-po-dynamic-form-container.component.html',
  providers: [PoDynamicFormContainerService],
  standalone: false
})
export class SamplePoDynamicFormContainerComponent implements OnInit {
  poNotification = inject(PoNotificationService);
  private registerService = inject(PoDynamicFormContainerService);

  @ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;
  person = {};
  validateFields: Array<string> = ['state'];

  fields: Array<PoDynamicFormField> = [
    {
      property: 'name',
      container: 'PERSONAL DATA',
      required: true,
      minLength: 4,
      maxLength: 50,
      gridColumns: 6,
      gridSmColumns: 12,
      order: 1,
      placeholder: 'Type your name'
    },
    {
      property: 'birthday',
      label: 'Date of birth',
      type: 'date',
      format: 'mm/dd/yyyy',
      gridColumns: 6,
      gridSmColumns: 12,
      maxValue: '2010-01-01',
      errorMessage: 'The date must be before the year 2010.',
      order: -1,
      help: 'Enter or select a valid date.',
      additionalHelpTooltip: 'Please enter a valid date in the format MMDDYYYY.',
      keydown: this.onKeyDown.bind(this, 'birthday')
    },
    { property: 'cpf', label: 'CPF', mask: '999.999.999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'genre', gridColumns: 6, gridSmColumns: 12, options: ['Male', 'Female', 'Other'], order: 2 },
    {
      property: 'shortDescription',
      label: 'Short Description',
      gridColumns: 12,
      gridSmColumns: 12,
      rows: 5,
      placeholder: 'Type short description'
    },
    {
      property: 'secretKey',
      label: 'Secret Key',
      gridColumns: 6,
      secret: true,
      pattern: '[a-zA]{5}[Z0-9]{3}',
      errorMessage: 'At least 5 alphabetic and 3 numeric characters are required.',
      placeholder: 'Type your password',
      help: 'Password must include a combination of letters and numbers.',
      additionalHelpTooltip: 'At least 5 alphabetic and 3 numeric characters are required.',
      keydown: this.onKeyDown.bind(this, 'secretKey')
    },
    {
      property: 'rememberSecretKey',
      label: 'Remember Secret Key',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'yes',
      booleanFalse: 'no',
      formatModel: true
    },
    {
      property: 'status',
      label: 'Status',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'Active',
      booleanFalse: 'Inactive',
      formatModel: true
    },
    { property: 'email', container: 'CONTACTS', gridColumns: 6, icon: 'an an-envelope' },
    { property: 'phone', mask: '(99) 99999-9999', gridColumns: 6 },
    { property: 'address', gridColumns: 6 },
    {
      property: 'addressNumber',
      label: 'Address number',
      type: 'number',
      gridColumns: 6,
      maxValue: 10000,
      errorMessage: 'Invalid number.'
    },
    {
      property: 'state',
      gridColumns: 6,
      options: [
        { state: 'Santa Catarina', code: 1 },
        { state: 'S\xE3o Paulo', code: 2 },
        { state: 'Rio de Janeiro', code: 3 },
        { state: 'Minas Gerais', code: 4 }
      ],
      fieldLabel: 'state',
      fieldValue: 'code'
    },
    { property: 'city', disabled: true, gridColumns: 6, fieldValue: 'code', fieldLabel: 'city' },
    {
      property: 'vacation',
      type: 'date',
      container: 'Work data',
      range: true,
      gridColumns: 5,
      gridSmColumns: 12,
      help: 'Enter or select a valid date range.',
      additionalHelpTooltip: 'Ensure the start date is earlier than or equal to the end date.',
      keydown: this.onKeyDown.bind(this, 'vacation')
    },
    {
      property: 'entryTime',
      label: 'Entry time',
      type: 'time',
      gridColumns: 2,
      gridSmColumns: 6
    },
    { property: 'exitTime', label: 'Exit time', type: 'time', gridColumns: 2, gridSmColumns: 6 },
    {
      property: 'wage',
      type: 'currency',
      gridColumns: 3,
      gridSmColumns: 12,
      decimalsLength: 2,
      thousandMaxlength: 7,
      icon: 'an an-currency-circle-dollar'
    },
    {
      property: 'hobbies',
      container: 'MORE INFO',
      gridColumns: 6,
      gridSmColumns: 12,
      optional: true,
      options: ['Soccer', 'Basketball', 'Bike', 'Yoga', 'Travel', 'Run'],
      optionsMulti: true,
      listboxControlPosition: 'top'
    },
    {
      property: 'favoriteHero',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Favorite hero',
      optional: true,
      searchService: 'https://po-sample-api.onrender.com/v1/heroes',
      columns: [
        { property: 'nickname', label: 'Hero' },
        { property: 'label', label: 'Name' }
      ],
      format: ['id', 'nickname'],
      fieldLabel: 'nickname',
      fieldValue: 'email'
    },
    {
      property: 'partner',
      gridColumns: 6,
      gridSmColumns: 12,
      optionsService: 'https://po-sample-api.onrender.com/v1/people',
      fieldLabel: 'name',
      fieldValue: 'id',
      optional: true,
      listboxControlPosition: 'top'
    },
    {
      property: 'videogame',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Video game console',
      optional: true,
      fieldValue: 'code',
      fieldLabel: 'console',
      options: [
        { console: 'Nintendo Wii U', code: 'NWU' },
        { console: 'Playstation 4', code: 'PS4' },
        { console: 'Xbox One', code: 'XONE' },
        { console: 'Nintendo Switch', code: 'NSW' },
        { console: 'Playstation 5', code: 'PS5' },
        { console: 'Xbox Series S|X', code: 'XSSX' }
      ],
      optionsMulti: true,
      listboxControlPosition: 'top'
    },
    {
      property: 'agree',
      gridColumns: 12,
      label: 'Do you agree?',
      type: 'boolean',
      forceBooleanComponentType: ForceBooleanComponentEnum.checkbox
    },
    {
      property: 'image',
      type: 'upload',
      gridColumns: 12,
      gridSmColumns: 12,
      label: 'Upload your background',
      optional: true,
      url: 'https://po-sample-api.onrender.com/v1/uploads/addFile',
      customAction: { icon: 'an an-download', visible: true },
      customActionClick: (file: PoUploadFile) => {
        console.log('Iniciar download para o arquivo:', file.name);
      }
    }
  ];

  ngOnInit() {
    this.person = {
      name: 'Tony Stark',
      birthday: '1970-05-29',
      isJuridicPerson: false,
      videogame: ['PS4', 'NSW', 'XSSX'],
      rememberSecretKey: 'no',
      status: 'active'
    };
  }

  onChangeFields(changedValue: PoDynamicFormFieldChanged): PoDynamicFormValidation {
    return {
      value: { city: undefined },
      fields: [
        {
          property: 'city',
          gridColumns: 6,
          options: this.registerService.getCity(changedValue.value.state),
          disabled: false
        }
      ]
    };
  }

  onKeyDown(property: string, event: KeyboardEvent): void {
    if (event.code === 'F9') {
      this.dynamicForm.showAdditionalHelp(property);
    }
  }

  onLoadFields(value: any) {
    return this.registerService.getUserDocument(value);
  }
}
`),t(),n(21,"label",6),e(22,"sample-po-dynamic-form-container/sample-po-dynamic-form-container.service.ts"),t(),n(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoDynamicFormContainerService {
  getCity(state: number) {
    switch (state) {
      case 1: {
        return [
          { city: 'Palho\xE7a', code: 5 },
          { city: 'Lages', code: 6 },
          { city: 'Balne\xE1rio Cambori\xFA', code: 7 },
          { city: 'Brusque', code: 8 }
        ];
      }
      case 2: {
        return [
          { city: 'S\xE3o Paulo', code: 9 },
          { city: 'Guarulhos', code: 10 },
          { city: 'Campinas', code: 11 },
          { city: 'S\xE3o Bernardo do Campo', code: 12 }
        ];
      }
      case 3: {
        return [
          { city: 'Rio de Janeiro', code: 13 },
          { city: 'S\xE3o Gon\xE7alo', code: 14 },
          { city: 'Duque de Caxias', code: 15 },
          { city: 'Nova Igua\xE7u', code: 16 }
        ];
      }
      case 4: {
        return [
          { city: 'Belo Horizonte', code: 17 },
          { city: 'Uberl\xE2ndia', code: 18 },
          { city: 'Contagem', code: 19 },
          { city: 'Juiz de Fora', code: 20 }
        ];
      }
    }
    return [];
  }

  getUserDocument(value) {
    const cpfField = { property: 'cpf', visible: true };
    const cnpjField = { property: 'cnpj', visible: true };
    const document = value.isJuridicPerson ? cnpjField : cpfField;

    return {
      fields: [document]
    };
  }
}
`),t()()()()(),n(25,"div",10),i(26,"sample-po-dynamic-form-container"),t(),i(27,"hr")),a&2&&(d(5),y("po-icon "+l.sampleCodeButtonIcon),d(),f(" ",l.sampleCodeButtonLabel,""),d(),p("ngClass",E(4,Se,l.hideSampleCodeTabs)))},dependencies:[h,b,x,S,ee],encapsulation:2})}return o})();var ne=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-doc"]],standalone:!1,decls:4412,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<PoDynamicFormField>"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"language-html"],[1,"language-ts"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Function"],["href","documentation/po-dynamic-form#po-dynamic-form-load"],["href","documentation/po-dynamic-form#po-dynamic-form-validation"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","any"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"language-javascript"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<PoLookupAdvancedFilter>"],["pan","",1,"docs-api-property-type","Array<PoLookupColumn>"],["pan","",1,"docs-api-property-type","number"],["href","/documentation/po-lookup"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","(file:","PoUploadFile)","=>","void"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","ForceBooleanComponentEnum"],["pan","",1,"docs-api-property-type","ForceOptionComponentEnum"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoLookupLiterals"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["pan","",1,"docs-api-property-type","PoDatepickerRangeLiterals"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption>"],["pan","",1,"docs-api-property-type","Array<PoCheckboxGroupOption>"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","PoLookupFilter"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"],["href","documentation/po-dynamic-form#po-dynamic-form-field-validation"],["id","po-dynamic-form-load"],["id","po-dynamic-form-field-validation"],["pan","",1,"docs-api-property-type","PoDynamicFormField"],["id","po-dynamic-form-validation"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(a,l){a&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoDynamicModule } from '@po-ui/ng-components';"),t()(),i(4,"div",2),n(5,"h3",3),e(6,"Componente"),t(),n(7,"h4",4)(8,"code",5),e(9,"PoDynamicFormComponent"),t()(),n(10,"div",2)(11,"p"),e(12,"Componente para cria\xE7\xE3o de formul\xE1rios din\xE2micos a partir de uma lista de objetos."),t(),n(13,"p"),e(14,"Tamb\xE9m \xE9 poss\xEDvel verificar se o formul\xE1rio est\xE1 v\xE1lido e informar valores para a exibi\xE7\xE3o de informa\xE7\xF5es. "),t()(),n(15,"div",6)(16,"h4",7),e(17,"Seletor"),t(),n(18,"pre",8),e(19,`<po-dynamic-form
    p-auto-focus="string"
    p-components-size="string"
    p-fields="Array<PoDynamicFormField>"
    (p-form)="EventEmitter"
    p-group-form="boolean"
    p-load="string | Function"
    p-validate="string | Function"
    p-validate-fields="Array<string>"
    p-validate-on-input="boolean"
    p-value="any" >
</po-dynamic-form>
`),t()(),n(20,"h4",9),e(21,"Propriedades"),t(),n(22,"table",10)(23,"tr",11)(24,"th",12),e(25,"Nome"),t(),n(26,"th",12),e(27,"Tipo"),t(),n(28,"th",12),e(29,"Padr\xE3o"),t(),n(30,"th",12),e(31,"Descri\xE7\xE3o"),t()(),n(32,"tr",13)(33,"td",14)(34,"div",15)(35,"span",16),e(36," p-auto-focus"),i(37,"br"),t()()(),n(38,"td",17)(39,"code",18),e(40,"string"),t()(),n(41,"td",19),e(42,"-"),t(),n(43,"td",20)(44,"em")(45,"strong"),e(46,"(opcional)"),t()(),n(47,"p"),e(48,"Nome da propriedade, atribu\xEDda ao "),n(49,"code"),e(50,"PoDynamicFormField.property"),t(),e(51,", que iniciar\xE1 o campo com foco."),t()()(),n(52,"tr",13)(53,"td",14)(54,"div",15)(55,"span",16),e(56," p-components-size"),i(57,"br"),t()()(),n(58,"td",17)(59,"code",18),e(60,"string"),t()(),n(61,"td",19)(62,"p")(63,"code"),e(64,"medium"),t()()(),n(65,"td",20)(66,"em")(67,"strong"),e(68,"(opcional)"),t()(),n(69,"p"),e(70,"Define o tamanho dos componentes de formul\xE1rio no template:"),t(),n(71,"ul")(72,"li")(73,"code"),e(74,"small"),t(),e(75,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(76,"li")(77,"code"),e(78,"medium"),t(),e(79,": aplica a medida medium de cada componente."),t()(),n(80,"blockquote")(81,"p"),e(82,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(83,"code"),e(84,"medium"),t(),e(85,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(86,"a",21),e(87,"po-theme"),t(),e(88,"."),t()()()(),n(89,"tr",13)(90,"td",14)(91,"div",15)(92,"span",16),e(93," p-fields"),i(94,"br"),t()()(),n(95,"td",17)(96,"code",22),e(97,"Array<PoDynamicFormField>"),t()(),n(98,"td",19)(99,"p")(100,"code"),e(101,"[]"),t()()(),n(102,"td",20)(103,"p"),e(104,"Cole\xE7\xE3o de objetos que implementam a interface "),n(105,"code"),e(106,"PoDynamicFormField"),t(),e(107,`, para defini\xE7\xE3o dos campos que ser\xE3o criados
dinamicamente.`),t(),n(108,"blockquote")(109,"p"),e(110,"Ex: "),n(111,"code"),e(112,"[ { property: 'name' } ]"),t()()(),n(113,"p"),e(114,"Regras de tipagem e cria\xE7\xE3o dos componentes:"),t(),n(115,"ul")(116,"li"),e(117,"Caso o "),n(118,"em"),e(119,"type"),t(),e(120," informado seja "),n(121,"em"),e(122,"boolean"),t(),e(123," o componente criado ser\xE1 o "),n(124,"code"),e(125,"po-switch"),t(),e(126,"."),t(),n(127,"li"),e(128,"Caso o "),n(129,"em"),e(130,"type"),t(),e(131," informado seja "),n(132,"em"),e(133,"currency"),t(),e(134," e n\xE3o seja informado um "),n(135,"em"),e(136,"mask"),t(),e(137," ou "),n(138,"em"),e(139,"pattern"),t(),e(140," o componente criado ser\xE1 o "),n(141,"code"),e(142,"po-decimal"),t(),e(143,`,
caso seja informado um `),n(144,"em"),e(145,"mask"),t(),e(146," ou "),n(147,"em"),e(148,"pattern"),t(),e(149," o componente criado ser\xE1 o "),n(150,"code"),e(151,"po-input"),t(),e(152,"."),t(),n(153,"li"),e(154,"Caso o "),n(155,"em"),e(156,"type"),t(),e(157," informado seja "),n(158,"em"),e(159,"number"),t(),e(160," e n\xE3o seja informado um "),n(161,"em"),e(162,"mask"),t(),e(163," ou "),n(164,"em"),e(165,"pattern"),t(),e(166," o componente criado ser\xE1 o "),n(167,"code"),e(168,"po-number"),t(),e(169,`, caso seja
informado um `),n(170,"em"),e(171,"mask"),t(),e(172," ou "),n(173,"em"),e(174,"pattern"),t(),e(175," o componente criado ser\xE1 o "),n(176,"code"),e(177,"po-input"),t(),e(178,"."),t(),n(179,"li"),e(180,"Caso a lista possua a propriedade "),n(181,"code"),e(182,"options"),t(),e(183," e a mesma possua at\xE9 3 itens o componente criado ser\xE1 o "),n(184,"code"),e(185,"po-radio-group"),t(),e(186,`
ou `),n(187,"code"),e(188,"po-checkbox-group"),t(),e(189," se informar a propriedade "),n(190,"code"),e(191,"optionsMulti"),t(),e(192,"."),t(),n(193,"li"),e(194,"Caso a mesma possua 3 ou mais itens, ser\xE1 criado o componente "),n(195,"code"),e(196,"po-select"),t(),e(197," ou, "),n(198,"code"),e(199,"po-multiselect"),t(),e(200," se a propriedade "),n(201,"code"),e(202,"optionsMulti"),t(),e(203,`
for verdadeira.`),t(),n(204,"li"),e(205,"Caso o "),n(206,"em"),e(207,"type"),t(),e(208," informado seja "),n(209,"em"),e(210,"date"),t(),e(211," ou "),n(212,"em"),e(213,"datetime"),t(),e(214," o componente criado ser\xE1 o "),n(215,"code"),e(216,"po-datepicker"),t(),e(217,"."),t(),n(218,"li"),e(219,"Caso seja informado a propriedade "),n(220,"code"),e(221,"optionsService"),t(),e(222," o componente criado ser\xE1 o "),n(223,"code"),e(224,"po-combo"),t(),e(225,"."),t(),n(226,"li"),e(227,"Caso o "),n(228,"em"),e(229,"type"),t(),e(230," informado seja "),n(231,"em"),e(232,"time"),t(),e(233," o componente criado ser\xE1 um "),n(234,"code"),e(235,"po-input"),t(),e(236," podendo receber um "),n(237,"em"),e(238,"mask"),t(),e(239,` para formatar
o valor exibido, caso n\xE3o seja informado um `),n(240,"em"),e(241,"mask"),t(),e(242," o componente ser\xE1 criado com a m\xE1scara '99:99' por padr\xE3o."),t(),n(243,"li"),e(244,"Caso a lista possua a propriedade "),n(245,"code"),e(246,"rows"),t(),e(247,` e esta seja definida com valor maior ou igual a 3 o componente criado ser\xE1
o `),n(248,"code"),e(249,"po-textarea"),t(),e(250,", caso o valor da propriedade "),n(251,"code"),e(252,"rows"),t(),e(253," seja menor que 3 o componente criado ser\xE1 o "),n(254,"code"),e(255,"po-input"),t(),e(256,"."),t(),n(257,"li"),e(258,"Caso seja informada a propriedade "),n(259,"code"),e(260,"secret"),t(),e(261," o componente criado ser\xE1 o "),n(262,"code"),e(263,"po-password"),t(),e(264,"."),t(),n(265,"li"),e(266,"Caso o "),n(267,"em"),e(268,"type"),t(),e(269," informado seja "),n(270,"em"),e(271,"string"),t(),e(272," o componente criado ser\xE1 o "),n(273,"code"),e(274,"po-input"),t(),e(275,"."),n(276,"blockquote")(277,"p"),e(278,"Ao alterar o valor das "),n(279,"code"),e(280,"properties"),t(),e(281,", visibilidade e/ou agrupamentos via container, os "),n(282,"code"),e(283,"fields"),t(),e(284," que utilizam servi\xE7o podem refazer as chamadas para as API's."),t()()()()()(),n(285,"tr",13)(286,"td",14)(287,"div",23)(288,"span",24),e(289," (p-form)"),i(290,"br"),t()()(),n(291,"td",17)(292,"code",25),e(293,"EventEmitter"),t()(),n(294,"td",19),e(295,"-"),t(),n(296,"td",20)(297,"em")(298,"strong"),e(299,"(opcional)"),t()(),n(300,"p"),e(301,`Na inicializa\xE7\xE3o do componente ser\xE1 repassado o objeto de formul\xE1rio utilizado no componente,
podendo ser utilizado para valida\xE7\xF5es e/ou detec\xE7\xE3o de mudan\xE7a dos valores.`),t(),n(302,"p"),e(303,`Portanto existem duas maneiras de recuperar o formul\xE1rio,
atrav\xE9s de `),n(304,"em"),e(305,"template reference"),t(),e(306," e atrav\xE9s do "),n(307,"em"),e(308,"output"),t(),e(309,", veja os exemplos abaixo:"),t(),n(310,"blockquote")(311,"p")(312,"em"),e(313,"template reference"),t()()(),n(314,"pre")(315,"code",26),e(316,`<po-dynamic-form #dynamicForm>
</po-dynamic-form>

<po-button p-label="Adicionar" [p-disabled]="dynamicForm?.form.invalid">
</po-button>
`),t()(),n(317,"blockquote")(318,"p")(319,"em"),e(320,"Output"),t()()(),n(321,"pre")(322,"code",26),e(323,`...
<po-dynamic-form (p-form)="getForm($event)">
</po-dynamic-form>

<po-button p-label="Adicionar" [p-disabled]="dynamicForm?.invalid">
</po-button>
...
`),t()(),n(324,"pre")(325,"code",27),e(326,`...

export class AppComponent {

  dynamicForm: NgForm;

  getForm(form: NgForm) {
    this.dynamicForm = form;
  }

}
`),t()(),n(327,"blockquote")(328,"p"),e(329,"Caso a propriedade "),n(330,"code"),e(331,"p-group-form"),t(),e(332,` for verdadeira n\xE3o ser\xE1 repassado o formul\xE1rio, pois o mesmo utilizar\xE1
o formul\xE1rio pai.`),t()()()(),n(333,"tr",13)(334,"td",14)(335,"div",15)(336,"span",16),e(337," p-group-form"),i(338,"br"),t()()(),n(339,"td",17)(340,"code",28),e(341,"boolean"),t()(),n(342,"td",19),e(343,"-"),t(),n(344,"td",20)(345,"em")(346,"strong"),e(347,"(opcional)"),t()(),n(348,"p"),e(349,"Ao informar esta propriedade, o componente passar\xE1 a utilizar o formul\xE1rio pai para criar os "),n(350,"code"),e(351,"FormControl"),t(),e(352,`
e com isso \xE9 poss\xEDvel recuperar o valor do formul\xE1rio e suas valida\xE7\xF5es a partir do formul\xE1rio pai.`),t(),n(353,"pre")(354,"code",26),e(355,`<form #parentForm="ngForm">

  <po-dynamic-form p-group-form [p-fields]="fields"></po-dynamic-form>

 <po-button p-label="Adicionar" [p-disabled]="parentForm.invalid"></po-button>
</form>
`),t()()()(),n(356,"tr",13)(357,"td",14)(358,"div",15)(359,"span",16),e(360," p-load"),i(361,"br"),t()()(),n(362,"td",17)(363,"code",18),e(364,"string "),t(),n(365,"code",29),e(366," Function"),t()(),n(367,"td",19),e(368,"-"),t(),n(369,"td",20)(370,"em")(371,"strong"),e(372,"(opcional)"),t()(),n(373,"p"),e(374,"Fun\xE7\xE3o ou servi\xE7o que ser\xE1 executado na inicializa\xE7\xE3o do componente."),t(),n(375,"p"),e(376,"A propriedade aceita os seguintes tipos:"),t(),n(377,"ul")(378,"li")(379,"code"),e(380,"string"),t(),e(381,": "),n(382,"em"),e(383,"Endpoint"),t(),e(384," usado pelo componente para requisi\xE7\xE3o via "),n(385,"code"),e(386,"POST"),t(),e(387,"."),t(),n(388,"li")(389,"code"),e(390,"function"),t(),e(391,": M\xE9todo que ser\xE1 executado."),t()(),n(392,"p"),e(393,"Ao ser executado, ir\xE1 receber como par\xE2metro o objeto informado no "),n(394,"code"),e(395,"p-value"),t(),e(396,"."),t(),n(397,"p"),e(398,"O retorno desta fun\xE7\xE3o deve ser do tipo "),n(399,"a",30),e(400,"PoDynamicFormLoad"),t(),e(401,`,
onde o usu\xE1rio poder\xE1 determinar as novas atualiza\xE7\xF5es dos campos, valores e determinar o campo a ser focado.`),t(),n(402,"p"),e(403,"Por exemplo:"),t(),n(404,"pre")(405,"code"),e(406,`onLoadFields(): PoDynamicFormLoad {

  return {
    value: { cpf: undefined },
    fields: [
      { property: 'cpf' }
    ],
    focus: 'cpf'
  };
}
`),t()(),n(407,"p"),e(408,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),n(409,"code"),e(410,"bind"),t(),e(411,", por exemplo:"),t(),n(412,"pre")(413,"code"),e(414,`[p-load]="onLoadFields.bind(this)"
`),t()()()(),n(415,"tr",13)(416,"td",14)(417,"div",15)(418,"span",16),e(419," p-validate"),i(420,"br"),t()()(),n(421,"td",17)(422,"code",18),e(423,"string "),t(),n(424,"code",29),e(425," Function"),t()(),n(426,"td",19),e(427,"-"),t(),n(428,"td",20)(429,"em")(430,"strong"),e(431,"(opcional)"),t()(),n(432,"p"),e(433,"Fun\xE7\xE3o ou servi\xE7o para validar as "),n(434,"strong"),e(435,"mudan\xE7as do formul\xE1rio"),t(),e(436,"."),t(),n(437,"p"),e(438,"A propriedade aceita os seguintes tipos:"),t(),n(439,"ul")(440,"li")(441,"code"),e(442,"string"),t(),e(443,": "),n(444,"em"),e(445,"Endpoint"),t(),e(446," usado pelo componente para requisi\xE7\xE3o via "),n(447,"code"),e(448,"POST"),t(),e(449,"."),t(),n(450,"li")(451,"code"),e(452,"function"),t(),e(453,": M\xE9todo que ser\xE1 executado."),t()(),n(454,"p"),e(455,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e os valores atualizados do formulario, conforme a interface `),n(456,"code"),e(457,"PoDynamicFormFieldChanged"),t()(),n(458,"p"),e(459,"O retorno desta fun\xE7\xE3o deve ser do tipo "),n(460,"a",31),e(461,"PoDynamicFormValidation"),t(),e(462,`,
onde o usu\xE1rio poder\xE1 determinar as novas atualiza\xE7\xF5es dos campos.
Por exemplo:`),t(),n(463,"pre")(464,"code"),e(465,`onChangeFields(changeValue): PoDynamicFormValidation {

if (changeValue.property === 'state') {

  return {
    value: { city: undefined },
    fields: [
      { property: 'city', options: this.getCity(changeValue.value.state) }
    ],
    focus: 'city'
  };
}
`),t()(),n(466,"p"),e(467,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),n(468,"code"),e(469,"bind"),t(),e(470,", por exemplo:"),t(),n(471,"pre")(472,"code"),e(473,`[p-validate]="this.myFunction.bind(this)"
`),t()(),n(474,"blockquote")(475,"p"),e(476,"Se houver uma lista de campos para valida\xE7\xE3o definida em "),n(477,"code"),e(478,"p-validate-fields"),t(),e(479,", a propriedade "),n(480,"code"),e(481,"validate"),t(),e(482," s\xF3 receber\xE1 o disparo para os campos equivalentes."),t()()()(),n(483,"tr",13)(484,"td",14)(485,"div",15)(486,"span",16),e(487," p-validate-fields"),i(488,"br"),t()()(),n(489,"td",17)(490,"code",32),e(491,"Array<string>"),t()(),n(492,"td",19),e(493,"-"),t(),n(494,"td",20)(495,"em")(496,"strong"),e(497,"(opcional)"),t()(),n(498,"p"),e(499,"Lista que define os campos que ir\xE3o disparar o validate do form."),t()()(),n(500,"tr",13)(501,"td",14)(502,"div",15)(503,"span",16),e(504," p-validate-on-input"),i(505,"br"),t()()(),n(506,"td",17)(507,"code",28),e(508,"boolean"),t()(),n(509,"td",19),e(510,"-"),t(),n(511,"td",20)(512,"em")(513,"strong"),e(514,"(opcional)"),t()(),n(515,"p"),e(516,"Ao informar esta propriedade, o componente passar\xE1 a emitir o valor a cada caractere digitado."),t(),n(517,"p"),e(518,"Pode ser aplicado nos seguintes componentes:"),t(),n(519,"ul")(520,"li"),e(521,"po-input"),t(),n(522,"li"),e(523,"po-number"),t(),n(524,"li"),e(525,"po-decimal"),t(),n(526,"li"),e(527,"po-textarea"),t(),n(528,"li"),e(529,"po-password"),t()(),n(530,"p"),e(531,"Deve informar os campos que deseja receber as emiss\xF5es na propriedade "),n(532,"code"),e(533,"p-validate-fields"),t(),e(534,"."),t()()(),n(535,"tr",13)(536,"td",14)(537,"div",15)(538,"span",16),e(539," p-value"),i(540,"br"),t()()(),n(541,"td",17)(542,"code",33),e(543,"any"),t()(),n(544,"td",19),e(545,"-"),t(),n(546,"td",20)(547,"p"),e(548,"Objeto que ser\xE1 utilizado como valor para exibir as informa\xE7\xF5es, ser\xE1 recuperado e preenchido atrav\xE9s do atributo "),n(549,"em"),e(550,"property"),t(),e(551,`
dos objetos contidos na propridade `),n(552,"code"),e(553,"p-fields"),t(),e(554,"."),t(),n(555,"p"),e(556,"Pode iniciar com valor ou apenas com um objeto vazio que ser\xE1 preenchido conforme descrito acima."),t(),n(557,"blockquote")(558,"p"),e(559,"Ex: "),n(560,"code"),e(561,"{ name: 'po' }"),t()()()()()(),n(562,"h3",9),e(563,"M\xE9todos"),t(),n(564,"table",34)(565,"tr",13)(566,"th",35)(567,"div",15)(568,"h4")(569,"span",16),e(570," focus "),t()()()()(),n(571,"tr",20)(572,"td",20)(573,"p"),e(574,"Fun\xE7\xE3o que atribui foco ao campo desejado."),t(),n(575,"p"),e(576,"Para utiliz\xE1-la \xE9 necess\xE1rio capturar a inst\xE2ncia do "),n(577,"code"),e(578,"dynamic form"),t(),e(579,", como por exemplo:"),t(),n(580,"pre")(581,"code",26),e(582,`<po-dynamic-form #dynamicForm [p-fields]="fields"></po-dynamic-form>
`),t()(),n(583,"pre")(584,"code",36),e(585,`import { PoDynamicFormComponent, PoDynamicFormField } from '@po-ui/ng-components';

...

@ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;

fields: Array<PoDynamicFormField> = [
  { property: 'fieldOne' },
  { property: 'fieldTwo' }
];

fieldFocus() {
  this.dynamicForm.focus('fieldTwo');
}
`),t()()()()(),n(586,"h5")(587,"b"),e(588,"Par\xE2metros"),t()(),n(589,"table",10)(590,"tr",11)(591,"th",12),e(592,"Nome"),t(),n(593,"th",12),e(594,"Tipo"),t(),n(595,"th",12),e(596,"Descri\xE7\xE3o"),t()(),n(597,"tr",13)(598,"td",14),e(599," property"),t(),n(600,"td",17)(601,"code",37),e(602," string "),t()(),n(603,"td",20)(604,"p"),e(605,"Nome da propriedade atribu\xEDda ao "),n(606,"code"),e(607,"PoDynamicFormField.property"),t(),e(608,"."),t()()()(),i(609,"br"),n(610,"table",34)(611,"tr",13)(612,"th",35)(613,"div",15)(614,"h4")(615,"span",16),e(616," showAdditionalHelp "),t()()()()(),n(617,"tr",20)(618,"td",20)(619,"p"),e(620,"M\xE9todo que exibe "),n(621,"code"),e(622,"additionalHelpTooltip"),t(),e(623," ou executa a a\xE7\xE3o definida em "),n(624,"code"),e(625,"additionalHelp"),t(),e(626,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),n(627,"code"),e(628,"keydown"),t(),e(629,"."),t(),n(630,"pre")(631,"code"),e(632,`import { PoDynamicModule } from '@po-ui/ng-components';
...
@ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;

fields: Array<PoDynamicFormField> = [
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
   this.dynamicForm.showAdditionalHelp(property);
 }
}
`),t()()()()(),n(633,"h5")(634,"b"),e(635,"Par\xE2metros"),t()(),n(636,"table",10)(637,"tr",11)(638,"th",12),e(639,"Nome"),t(),n(640,"th",12),e(641,"Tipo"),t(),n(642,"th",12),e(643,"Descri\xE7\xE3o"),t()(),n(644,"tr",13)(645,"td",14),e(646," property"),t(),n(647,"td",17)(648,"code",37),e(649," string "),t()(),n(650,"td",20)(651,"p"),e(652,"Identificador da coluna."),t()()()(),i(653,"br"),n(654,"h3"),e(655,"Interfaces"),t(),n(656,"h4",38)(657,"code",5),e(658,"PoDynamicFormField"),t()(),n(659,"div",2)(660,"p"),e(661," Interface para defini\xE7\xE3o das propriedades dos campos de entrada que ser\xE3o criados dinamicamente."),t()(),n(662,"h4",9),e(663,"Propriedades"),t(),n(664,"table",10)(665,"tr",11)(666,"th",12),e(667,"Nome"),t(),n(668,"th",12),e(669,"Tipo"),t(),n(670,"th",12),e(671,"Descri\xE7\xE3o"),t()(),n(672,"tr",13)(673,"td",14)(674,"div",15)(675,"span",16),e(676," additionalHelp"),i(677,"br"),t()()(),n(678,"td",17)(679,"code",29),e(680,"Function"),t()(),n(681,"td",20)(682,"em")(683,"strong"),e(684,"(opcional)"),t()(),n(685,"p"),e(686,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),n(687,"code"),e(688,"p-help"),t(),e(689,"."),t()()(),n(690,"tr",13)(691,"td",14)(692,"div",15)(693,"span",16),e(694," additionalHelpTooltip"),i(695,"br"),t()()(),n(696,"td",17)(697,"code",18),e(698,"string"),t()(),n(699,"td",20)(700,"em")(701,"strong"),e(702,"(opcional)"),t()(),n(703,"p"),e(704,"Exibe um \xEDcone de ajuda adicional ao "),n(705,"code"),e(706,"p-help"),t(),e(707,`, com o texto desta propriedade no tooltip.
Se o evento `),n(708,"code"),e(709,"p-additional-help"),t(),e(710,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),n(711,"strong"),e(712,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()()()(),n(713,"tr",13)(714,"td",14)(715,"div",15)(716,"span",16),e(717," advancedFilters"),i(718,"br"),t()()(),n(719,"td",17)(720,"code",39),e(721,"Array<PoLookupAdvancedFilter>"),t()(),n(722,"td",20)(723,"em")(724,"strong"),e(725,"(opcional)"),t()(),n(726,"p"),e(727,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),t(),n(728,"blockquote")(729,"p"),e(730,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),t()(),n(731,"p"),e(732,"Exemplo de URL com busca avan\xE7ada:"),t(),n(733,"p")(734,"code"),e(735,"url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro"),t()(),n(736,"p"),e(737,"Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula. Exemplo:"),t(),n(738,"p")(739,"code"),e(740,"url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan"),t()()()(),n(741,"tr",13)(742,"td",14)(743,"div",15)(744,"span",16),e(745," appendBox"),i(746,"br"),t()()(),n(747,"td",17)(748,"code",28),e(749,"boolean"),t()(),n(750,"td",20)(751,"em")(752,"strong"),e(753,"(opcional)"),t()(),n(754,"p"),e(755,"Define que o "),n(756,"code"),e(757,"listbox"),t(),e(758," e/ou tooltip ("),n(759,"code"),e(760,"p-additional-help-tooltip"),t(),e(761," e/ou "),n(762,"code"),e(763,"p-error-limit"),t(),e(764,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),t(),n(765,"blockquote")(766,"p"),e(767,"Quando utilizado com "),n(768,"code"),e(769,"p-additional-help-tooltip"),t(),e(770,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),n(771,"tr",13)(772,"td",14)(773,"div",15)(774,"span",16),e(775," autoHeight"),i(776,"br"),t()()(),n(777,"td",17)(778,"code",28),e(779,"boolean"),t()(),n(780,"td",20)(781,"em")(782,"strong"),e(783,"(opcional)"),t()(),n(784,"p"),e(785,"Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis."),t(),n(786,"p")(787,"strong"),e(788,"Componentes compat\xEDveis:"),t(),n(789,"code"),e(790,"po-multiselect"),t(),e(791,", "),n(792,"code"),e(793,"po-lookup"),t(),e(794,"."),t()()(),n(795,"tr",13)(796,"td",14)(797,"div",15)(798,"span",16),e(799," autoUpload"),i(800,"br"),t()()(),n(801,"td",17)(802,"code",28),e(803,"boolean"),t()(),n(804,"td",20)(805,"em")(806,"strong"),e(807,"(opcional)"),t()(),n(808,"p"),e(809,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),t(),n(810,"p")(811,"strong"),e(812,"Componente compat\xEDvel"),t(),e(813,": "),n(814,"code"),e(815,"po-upload"),t()()()(),n(816,"tr",13)(817,"td",14)(818,"div",15)(819,"span",16),e(820," booleanFalse"),i(821,"br"),t()()(),n(822,"td",17)(823,"code",18),e(824,"string"),t()(),n(825,"td",20)(826,"em")(827,"strong"),e(828,"(opcional)"),t()(),n(829,"p"),e(830,"Texto exibido quando o valor do componente for "),n(831,"em"),e(832,"false"),t(),e(833,"."),t()()(),n(834,"tr",13)(835,"td",14)(836,"div",15)(837,"span",16),e(838," booleanTrue"),i(839,"br"),t()()(),n(840,"td",17)(841,"code",18),e(842,"string"),t()(),n(843,"td",20)(844,"em")(845,"strong"),e(846,"(opcional)"),t()(),n(847,"p"),e(848,"Texto exibido quando o valor do componente for "),n(849,"em"),e(850,"true"),t(),e(851,"."),t()()(),n(852,"tr",13)(853,"td",14)(854,"div",15)(855,"span",16),e(856," changeOnEnter"),i(857,"br"),t()()(),n(858,"td",17)(859,"code",28),e(860,"boolean"),t()(),n(861,"td",20)(862,"em")(863,"strong"),e(864,"(opcional)"),t()(),n(865,"p"),e(866,"Indica que o evento "),n(867,"code"),e(868,"p-change"),t(),e(869,' s\xF3 ser\xE1 disparado ao clicar ou pressionar a tecla "Enter" sobre uma op\xE7\xE3o selecionada no '),n(870,"code"),e(871,"po-combo"),t(),e(872,"."),t()()(),n(873,"tr",13)(874,"td",14)(875,"div",15)(876,"span",16),e(877," changeVisibleColumns"),i(878,"br"),t()()(),n(879,"td",17)(880,"code",29),e(881,"Function"),t()(),n(882,"td",20)(883,"em")(884,"strong"),e(885,"(opcional)"),t()(),n(886,"p"),e(887,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),t(),n(888,"p"),e(889,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t(),n(890,"p")(891,"strong"),e(892,"Componentes compat\xEDveis"),t(),e(893,": "),n(894,"code"),e(895,"po-lookup"),t()()()(),n(896,"tr",13)(897,"td",14)(898,"div",15)(899,"span",16),e(900," clean"),i(901,"br"),t()()(),n(902,"td",17)(903,"code",28),e(904,"boolean"),t()(),n(905,"td",20)(906,"em")(907,"strong"),e(908,"(opcional)"),t()(),n(909,"p"),e(910,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t(),n(911,"p")(912,"strong"),e(913,"Componentes compat\xEDveis:"),t(),n(914,"code"),e(915,"po-datepicker"),t(),e(916,", "),n(917,"code"),e(918,"po-datepicker-range"),t(),e(919,", "),n(920,"code"),e(921,"po-input"),t(),e(922,", "),n(923,"code"),e(924,"po-number"),t(),e(925,", "),n(926,"code"),e(927,"po-decimal"),t(),e(928,", "),n(929,"code"),e(930,"po-combo"),t(),e(931,", "),n(932,"code"),e(933,"po-lookup"),t(),e(934,", "),n(935,"code"),e(936,"po-password"),t()()()(),n(937,"tr",13)(938,"td",14)(939,"div",15)(940,"span",16),e(941," columnRestoreManager"),i(942,"br"),t()()(),n(943,"td",17)(944,"code",29),e(945,"Function"),t()(),n(946,"td",20)(947,"em")(948,"strong"),e(949,"(opcional)"),t()(),n(950,"p"),e(951,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),t(),n(952,"p"),e(953,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t(),n(954,"p")(955,"strong"),e(956,"Componentes compat\xEDveis"),t(),e(957,": "),n(958,"code"),e(959,"po-lookup"),t()()()(),n(960,"tr",13)(961,"td",14)(962,"div",15)(963,"span",16),e(964," columns"),i(965,"br"),t()()(),n(966,"td",17)(967,"code",40),e(968,"Array<PoLookupColumn> "),t(),n(969,"code",41),e(970," number"),t()(),n(971,"td",20)(972,"em")(973,"strong"),e(974,"(opcional)"),t()(),n(975,"p"),e(976,"Define as colunas para utiliza\xE7\xE3o da busca avan\xE7ada. Usada somente em conjunto com a propriedade "),n(977,"code"),e(978,"searchService"),t(),e(979,`,
essa propriedade deve receber um array de objetos que implementam a interface `),n(980,"a",42)(981,"code"),e(982,"PoLookupColumn"),t()(),e(983,"."),t(),n(984,"blockquote")(985,"p"),e(986,"Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como "),n(987,"em"),e(988,"label"),t(),e(989," e "),n(990,"em"),e(991,"value"),t(),e(992,` para valores
de tela e do model respectivamente.`),t()(),n(993,"p")(994,"strong"),e(995,"Componentes compat\xEDveis:"),t(),n(996,"code"),e(997,"po-radio-group"),t(),e(998,", "),n(999,"code"),e(1e3,"po-lookup"),t(),e(1001,", "),n(1002,"code"),e(1003,"po-checkbox-group"),t(),e(1004,"."),t()()(),n(1005,"tr",13)(1006,"td",14)(1007,"div",15)(1008,"span",16),e(1009," container"),i(1010,"br"),t()()(),n(1011,"td",17)(1012,"code",18),e(1013,"string"),t()(),n(1014,"td",20)(1015,"em")(1016,"strong"),e(1017,"(opcional)"),t()(),n(1018,"p"),e(1019,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),t(),n(1020,"p"),e(1021,"Est\xE1 propriedade \xE9 do tipo string, o valor que ser\xE1 titulo do contianer"),t()()(),n(1022,"tr",13)(1023,"td",14)(1024,"div",15)(1025,"span",16),e(1026," customAction"),i(1027,"br"),t()()(),n(1028,"td",17)(1029,"code",43),e(1030,"PoProgressAction"),t()(),n(1031,"td",20)(1032,"em")(1033,"strong"),e(1034,"(opcional)"),t()(),n(1035,"p"),e(1036,"Define uma a\xE7\xE3o personalizada no componente "),n(1037,"code"),e(1038,"po-upload"),t(),e(1039,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),t(),n(1040,"p")(1041,"strong"),e(1042,"Componente compat\xEDvel"),t(),e(1043,": "),n(1044,"code"),e(1045,"po-upload"),t(),e(1046,","),t(),n(1047,"p")(1048,"strong"),e(1049,"Exemplo de configura\xE7\xE3o"),t(),e(1050,":"),t(),n(1051,"pre")(1052,"code",44),e(1053,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),t()()()(),n(1054,"tr",13)(1055,"td",14)(1056,"div",15)(1057,"span",16),e(1058," customActionClick"),i(1059,"br"),t()()(),n(1060,"td",17)(1061,"code",45),e(1062,"(file: PoUploadFile) => void"),t()(),n(1063,"td",20)(1064,"em")(1065,"strong"),e(1066,"(opcional)"),t()(),n(1067,"p"),e(1068,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),n(1069,"code"),e(1070,"p-custom-action"),t(),e(1071,"."),t(),n(1072,"p")(1073,"strong"),e(1074,"Componente compat\xEDvel"),t(),e(1075,": "),n(1076,"code"),e(1077,"po-upload"),t(),e(1078,","),t(),n(1079,"p"),e(1080,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),t(),n(1081,"p")(1082,"strong"),e(1083,"Par\xE2metro do evento"),t(),e(1084,":"),t(),n(1085,"ul")(1086,"li")(1087,"code"),e(1088,"file"),t(),e(1089,": O arquivo associado ao bot\xE3o de a\xE7\xE3o. Este objeto \xE9 da classe "),n(1090,"code"),e(1091,"PoUploadFile"),t(),e(1092," e cont\xE9m informa\xE7\xF5es sobre o arquivo, como nome, status e progresso."),t()(),n(1093,"p")(1094,"strong"),e(1095,"Exemplo de uso"),t(),e(1096,":"),t(),n(1097,"pre")(1098,"code",44),e(1099,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),t()()()(),n(1100,"tr",13)(1101,"td",14)(1102,"div",15)(1103,"span",16),e(1104," debounceTime"),i(1105,"br"),t()()(),n(1106,"td",17)(1107,"code",41),e(1108,"number"),t()(),n(1109,"td",20)(1110,"em")(1111,"strong"),e(1112,"(opcional)"),t()(),n(1113,"p"),e(1114,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla. Ser\xE1 utilizada apenas quando houver servi\xE7o ("),n(1115,"code"),e(1116,"p-filter-service"),t(),e(1117,")."),t(),n(1118,"p")(1119,"strong"),e(1120,"Componentes compat\xEDveis:"),t(),n(1121,"code"),e(1122,"po-combo"),t(),e(1123,", "),n(1124,"code"),e(1125,"po-multiselect"),t(),e(1126,"."),t()()(),n(1127,"tr",13)(1128,"td",14)(1129,"div",15)(1130,"span",16),e(1131," decimalsLength"),i(1132,"br"),t()()(),n(1133,"td",17)(1134,"code",41),e(1135,"number"),t()(),n(1136,"td",20)(1137,"em")(1138,"strong"),e(1139,"(opcional)"),t()(),n(1140,"p"),e(1141,"Quantidade m\xE1xima de casas decimais."),t(),n(1142,"blockquote")(1143,"p"),e(1144,"Esta propriedade s\xF3 pode ser utilizada quando o "),n(1145,"code"),e(1146,"type"),t(),e(1147," for "),n(1148,"em"),e(1149,"currency"),t(),e(1150," ou "),n(1151,"em"),e(1152,"decimal"),t(),e(1153,"."),t()()()(),n(1154,"tr",13)(1155,"td",14)(1156,"div",15)(1157,"span",16),e(1158," directory"),i(1159,"br"),t()()(),n(1160,"td",17)(1161,"code",28),e(1162,"boolean"),t()(),n(1163,"td",20)(1164,"em")(1165,"strong"),e(1166,"(opcional)"),t()(),n(1167,"p"),e(1168,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),t(),n(1169,"blockquote")(1170,"p"),e(1171,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),t()(),n(1172,"blockquote")(1173,"p"),e(1174,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),n(1175,"strong"),e(1176,"Internet Explorer"),t(),e(1177,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),t()(),n(1178,"p")(1179,"strong"),e(1180,"Componente compat\xEDvel"),t(),e(1181,": "),n(1182,"code"),e(1183,"po-upload"),t()()()(),n(1184,"tr",13)(1185,"td",14)(1186,"div",15)(1187,"span",16),e(1188," disabled"),i(1189,"br"),t()()(),n(1190,"td",17)(1191,"code",28),e(1192,"boolean"),t()(),n(1193,"td",20)(1194,"em")(1195,"strong"),e(1196,"(opcional)"),t()(),n(1197,"p"),e(1198,"Desabilita o campo caso informar o valor "),n(1199,"em"),e(1200,"true"),t(),e(1201,"."),t()()(),n(1202,"tr",13)(1203,"td",14)(1204,"div",15)(1205,"span",16),e(1206," disabledInitFilter"),i(1207,"br"),t()()(),n(1208,"td",17)(1209,"code",28),e(1210,"boolean"),t()(),n(1211,"td",20)(1212,"em")(1213,"strong"),e(1214,"(opcional)"),t()(),n(1215,"p"),e(1216,"Desabilita o filtro inicial no servi\xE7o do "),n(1217,"code"),e(1218,"po-combo"),t(),e(1219,", que \xE9 executado no primeiro clique no campo."),t()()(),n(1220,"tr",13)(1221,"td",14)(1222,"div",15)(1223,"span",16),e(1224," disabledTabFilter"),i(1225,"br"),t()()(),n(1226,"td",17)(1227,"code",28),e(1228,"boolean"),t()(),n(1229,"td",20)(1230,"em")(1231,"strong"),e(1232,"(opcional)"),t()(),n(1233,"p"),e(1234,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB no "),n(1235,"code"),e(1236,"po-combo"),t(),e(1237,"."),t()()(),n(1238,"tr",13)(1239,"td",14)(1240,"div",15)(1241,"span",16),e(1242," divider"),i(1243,"br"),t()()(),n(1244,"td",17)(1245,"code",18),e(1246,"string"),t()(),n(1247,"td",20)(1248,"em")(1249,"strong"),e(1250,"(opcional)"),t()(),n(1251,"p"),e(1252,"Exibir\xE1 um divisor acima, utilizando o seu conteudo como t\xEDtulo."),t()()(),n(1253,"tr",13)(1254,"td",14)(1255,"div",15)(1256,"span",16),e(1257," dragDrop"),i(1258,"br"),t()()(),n(1259,"td",17)(1260,"code",28),e(1261,"boolean"),t()(),n(1262,"td",20)(1263,"em")(1264,"strong"),e(1265,"(opcional)"),t()(),n(1266,"p"),e(1267,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),t(),n(1268,"blockquote")(1269,"p"),e(1270,"Recomendamos utilizar apenas um "),n(1271,"code"),e(1272,"po-upload"),t(),e(1273," com esta funcionalidade por tela."),t()(),n(1274,"p")(1275,"strong"),e(1276,"Componente compat\xEDvel"),t(),e(1277,": "),n(1278,"code"),e(1279,"po-upload"),t()()()(),n(1280,"tr",13)(1281,"td",14)(1282,"div",15)(1283,"span",16),e(1284," dragDropHeight"),i(1285,"br"),t()()(),n(1286,"td",17)(1287,"code",41),e(1288,"number"),t()(),n(1289,"td",20)(1290,"em")(1291,"strong"),e(1292,"(opcional)"),t()(),n(1293,"p"),e(1294,"Define em "),n(1295,"em"),e(1296,"pixels"),t(),e(1297," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),n(1298,"code"),e(1299,"160px"),t(),e(1300,"."),t(),n(1301,"blockquote")(1302,"p"),e(1303,"Esta propriedade funciona somente se a propriedade "),n(1304,"code"),e(1305,"p-drag-drop"),t(),e(1306," estiver habilitada."),t()(),n(1307,"p")(1308,"strong"),e(1309,"Componente compat\xEDvel"),t(),e(1310,": "),n(1311,"code"),e(1312,"po-upload"),t()()()(),n(1313,"tr",13)(1314,"td",14)(1315,"div",15)(1316,"span",16),e(1317," errorAsyncFunction"),i(1318,"br"),t()()(),n(1319,"td",17)(1320,"code",46),e(1321,"(value) => Observable<boolean>"),t()(),n(1322,"td",20)(1323,"em")(1324,"strong"),e(1325,"(opcional)"),t()(),n(1326,"p"),e(1327,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(1328,"code"),e(1329,"change"),t(),e(1330," ou "),n(1331,"code"),e(1332,"change-model"),t(),e(1333,", dependendo do valor da propriedade "),n(1334,"code"),e(1335,"triggerMode"),t(),e(1336,"."),t(),n(1337,"blockquote")(1338,"p"),e(1339,"Retorna "),n(1340,"code"),e(1341,"Observable com o valor true"),t(),e(1342," para sinalizar o erro "),n(1343,"code"),e(1344,"false"),t(),e(1345," para indicar que n\xE3o h\xE1 erro."),t()(),n(1346,"p")(1347,"strong"),e(1348,"Componente compat\xEDvel"),t(),e(1349,": "),n(1350,"code"),e(1351,"po-datepicker"),t()()()(),n(1352,"tr",13)(1353,"td",14)(1354,"div",15)(1355,"span",16),e(1356," errorAsyncProperties"),i(1357,"br"),t()()(),n(1358,"td",17)(1359,"code",47),e(1360,"ErrorAsyncProperties"),t()(),n(1361,"td",20)(1362,"em")(1363,"strong"),e(1364,"(opcional)"),t()(),n(1365,"p"),e(1366,"Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente."),t(),n(1367,"p")(1368,"strong"),e(1369,"Componentes compat\xEDveis:"),t(),n(1370,"code"),e(1371,"po-input"),t(),e(1372,", "),n(1373,"code"),e(1374,"po-number"),t(),e(1375,", "),n(1376,"code"),e(1377,"po-decimal"),t(),e(1378,", "),n(1379,"code"),e(1380,"po-password"),t(),e(1381,"."),t()()(),n(1382,"tr",13)(1383,"td",14)(1384,"div",15)(1385,"span",16),e(1386," errorLimit"),i(1387,"br"),t()()(),n(1388,"td",17)(1389,"code",28),e(1390,"boolean"),t()(),n(1391,"td",20)(1392,"em")(1393,"strong"),e(1394,"(opcional)"),t()(),n(1395,"p"),e(1396,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(1397,"blockquote")(1398,"p"),e(1399,"Caso essa propriedade seja definida como "),n(1400,"code"),e(1401,"true"),t(),e(1402,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()(),n(1403,"p")(1404,"strong"),e(1405,"Componentes compat\xEDveis:"),t(),n(1406,"code"),e(1407,"po-checkbox-group"),t(),e(1408,", "),n(1409,"code"),e(1410,"po-combo"),t(),e(1411,", "),n(1412,"code"),e(1413,"po-datepicker"),t(),e(1414,", "),n(1415,"code"),e(1416,"po-datepicker-range"),t(),e(1417,", "),n(1418,"code"),e(1419,"po-decimal"),t(),e(1420,", "),n(1421,"code"),e(1422,"po-input"),t(),e(1423,", "),n(1424,"code"),e(1425,"po-lookup"),t(),e(1426,", "),n(1427,"code"),e(1428,"po-multiselect"),t(),e(1429,", "),n(1430,"code"),e(1431,"po-number"),t(),e(1432,", "),n(1433,"code"),e(1434,"po-password"),t(),e(1435,", "),n(1436,"code"),e(1437,"po-radio-group"),t(),e(1438,", "),n(1439,"code"),e(1440,"po-select"),t(),e(1441,", "),n(1442,"code"),e(1443,"po-switch"),t(),e(1444,", "),n(1445,"code"),e(1446,"po-textarea"),t(),e(1447,"."),t()()(),n(1448,"tr",13)(1449,"td",14)(1450,"div",15)(1451,"span",16),e(1452," errorMessage"),i(1453,"br"),t()()(),n(1454,"td",17)(1455,"code",18),e(1456,"string"),t()(),n(1457,"td",20)(1458,"em")(1459,"strong"),e(1460,"(opcional)"),t()(),n(1461,"p"),e(1462,"Mensagem que ser\xE1 apresentada quando o campo ficar inv\xE1lido."),t(),n(1463,"p"),e(1464,"O campo fica inv\xE1lido quando as seguintes propriedades n\xE3o forem respeitadas:"),t(),n(1465,"ul")(1466,"li"),e(1467,"pattern;"),t(),n(1468,"li"),e(1469,"minValue;"),t(),n(1470,"li"),e(1471,"maxValue;"),t(),n(1472,"li"),e(1473,"required;"),t()(),n(1474,"blockquote")(1475,"p"),e(1476,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),n(1477,"code"),e(1478,"po-datepicker"),t(),e(1479,", "),n(1480,"code"),e(1481,"po-input"),t(),e(1482,", "),n(1483,"code"),e(1484,"po-number"),t(),e(1485,", "),n(1486,"code"),e(1487,"po-decimal"),t(),e(1488,", "),n(1489,"code"),e(1490,"po-password"),t(),e(1491,`, \xE9 necess\xE1rio que a propriedade
`),n(1492,"code"),e(1493,"requiredFieldErrorMessage"),t(),e(1494," esteja como "),n(1495,"code"),e(1496,"true"),t(),e(1497,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),n(1498,"code"),e(1499,"po-datepicker-range"),t(),e(1500,", "),n(1501,"code"),e(1502,"po-select"),t(),e(1503,", "),n(1504,"code"),e(1505,"po-checkbox-group"),t(),e(1506,", "),n(1507,"code"),e(1508,"po-radio-group"),t(),e(1509,", "),n(1510,"code"),e(1511,"po-multiselect"),t(),e(1512,", "),n(1513,"code"),e(1514,"po-combo"),t(),e(1515,`,
`),n(1516,"code"),e(1517,"po-lookup"),t(),e(1518," e "),n(1519,"code"),e(1520,"po-textarea"),t(),e(1521," n\xE3o \xE9 necess\xE1rio passar a propriedade "),n(1522,"code"),e(1523,"requiredFieldErrorMessage"),t(),e(1524,"."),t()(),n(1525,"p")(1526,"strong"),e(1527,"Componentes compat\xEDveis:"),t(),n(1528,"code"),e(1529,"po-checkbox-group"),t(),e(1530,", "),n(1531,"code"),e(1532,"po-combo"),t(),e(1533,", "),n(1534,"code"),e(1535,"po-datepicker"),t(),e(1536,", "),n(1537,"code"),e(1538,"po-datepicker-range"),t(),e(1539,", "),n(1540,"code"),e(1541,"po-decimal"),t(),e(1542,", "),n(1543,"code"),e(1544,"po-input"),t(),e(1545,", "),n(1546,"code"),e(1547,"po-lookup"),t(),e(1548,", "),n(1549,"code"),e(1550,"po-multiselect"),t(),e(1551,", "),n(1552,"code"),e(1553,"po-number"),t(),e(1554,", "),n(1555,"code"),e(1556,"po-password"),t(),e(1557,", "),n(1558,"code"),e(1559,"po-radio-group"),t(),e(1560,", "),n(1561,"code"),e(1562,"po-select"),t(),e(1563,", "),n(1564,"code"),e(1565,"po-switch"),t(),e(1566,", "),n(1567,"code"),e(1568,"po-textarea"),t(),e(1569,"."),t()()(),n(1570,"tr",13)(1571,"td",14)(1572,"div",15)(1573,"span",16),e(1574," fieldLabel"),i(1575,"br"),t()()(),n(1576,"td",17)(1577,"code",18),e(1578,"string"),t()(),n(1579,"td",20)(1580,"em")(1581,"strong"),e(1582,"(opcional)"),t()(),n(1583,"p"),e(1584,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como descri\xE7\xE3o do campo."),t(),n(1585,"p"),e(1586,"O valor padr\xE3o \xE9: "),n(1587,"code"),e(1588,"label"),t(),e(1589,"."),t(),n(1590,"blockquote")(1591,"p"),e(1592,"Esta propriedade pode ser utilizada em conjunto com: "),n(1593,"code"),e(1594,"options"),t(),e(1595,", "),n(1596,"code"),e(1597,"optionsService"),t(),e(1598," e "),n(1599,"code"),e(1600,"searchService"),t(),e(1601,"."),t()()()(),n(1602,"tr",13)(1603,"td",14)(1604,"div",15)(1605,"span",16),e(1606," fieldValue"),i(1607,"br"),t()()(),n(1608,"td",17)(1609,"code",18),e(1610,"string"),t()(),n(1611,"td",20)(1612,"em")(1613,"strong"),e(1614,"(opcional)"),t()(),n(1615,"p"),e(1616,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como valor do campo."),t(),n(1617,"p"),e(1618,"O valor padr\xE3o \xE9: "),n(1619,"code"),e(1620,"value"),t(),e(1621,"."),t(),n(1622,"blockquote")(1623,"p"),e(1624,"Esta propriedade pode ser utilizada em conjunto com: "),n(1625,"code"),e(1626,"options"),t(),e(1627,", "),n(1628,"code"),e(1629,"optionsService"),t(),e(1630," e "),n(1631,"code"),e(1632,"searchService"),t(),e(1633,"."),t()()()(),n(1634,"tr",13)(1635,"td",14)(1636,"div",15)(1637,"span",16),e(1638," filterMinlength"),i(1639,"br"),t()()(),n(1640,"td",17)(1641,"code",41),e(1642,"number"),t()(),n(1643,"td",20)(1644,"em")(1645,"strong"),e(1646,"(opcional)"),t()(),n(1647,"p"),e(1648,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o do "),n(1649,"code"),e(1650,"po-combo"),t(),e(1651,"."),t()()(),n(1652,"tr",13)(1653,"td",14)(1654,"div",15)(1655,"span",16),e(1656," filterMode"),i(1657,"br"),t()()(),n(1658,"td",17)(1659,"code",48),e(1660,"PoMultiselectFilterMode"),t()(),n(1661,"td",20)(1662,"em")(1663,"strong"),e(1664,"(opcional)"),t()(),n(1665,"p"),e(1666,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),n(1667,"code"),e(1668,"startsWith"),t(),e(1669,", "),n(1670,"code"),e(1671,"contains"),t(),e(1672," ou "),n(1673,"code"),e(1674,"endsWith"),t(),e(1675,"."),t(),n(1676,"blockquote")(1677,"p"),e(1678,"Quando utilizar a propriedade p-filter-service esta propriedade ser\xE1 ignorada."),t()(),n(1679,"p")(1680,"strong"),e(1681,"Componentes compat\xEDveis:"),t(),n(1682,"code"),e(1683,"po-multiselect"),t(),e(1684,"."),t()()(),n(1685,"tr",13)(1686,"td",14)(1687,"div",15)(1688,"span",16),e(1689," forceBooleanComponentType"),i(1690,"br"),t()()(),n(1691,"td",17)(1692,"code",49),e(1693,"ForceBooleanComponentEnum"),t()(),n(1694,"td",20)(1695,"em")(1696,"strong"),e(1697,"(opcional)"),t()(),n(1698,"p"),e(1699,"Valores aceitos:"),t(),n(1700,"ul")(1701,"li"),e(1702,"ForceBooleanComponentEnum.switch"),t(),n(1703,"li"),e(1704,"ForceBooleanComponentEnum.checkbox"),t()()()(),n(1705,"tr",13)(1706,"td",14)(1707,"div",15)(1708,"span",16),e(1709," forceOptionsComponentType"),i(1710,"br"),t()()(),n(1711,"td",17)(1712,"code",50),e(1713,"ForceOptionComponentEnum"),t()(),n(1714,"td",20)(1715,"em")(1716,"strong"),e(1717,"(opcional)"),t()(),n(1718,"p"),e(1719,"pode ser utilizada em conjunto com a propriedade "),n(1720,"code"),e(1721,"options"),t(),e(1722," for\xE7ando o componente a renderizar um "),n(1723,"code"),e(1724,"po-select"),t(),e(1725," ou "),n(1726,"code"),e(1727,"po-radio-group"),t(),e(1728,"."),t(),n(1729,"p"),e(1730,"Valores aceitos:"),t(),n(1731,"ul")(1732,"li"),e(1733,"ForceOptionComponentEnum.radioGroup"),t(),n(1734,"li"),e(1735,"ForceOptionComponentEnum.select"),t()(),n(1736,"blockquote")(1737,"p"),e(1738,"Essa propriedade ser\xE1 ignorada caso seja utilizada em conjunto com a propriedade "),n(1739,"code"),e(1740,"optionsMulti"),t(),e(1741," e "),n(1742,"code"),e(1743,"optionsService"),t(),e(1744,"."),t()()()(),n(1745,"tr",13)(1746,"td",14)(1747,"div",15)(1748,"span",16),e(1749," formField"),i(1750,"br"),t()()(),n(1751,"td",17)(1752,"code",18),e(1753,"string"),t()(),n(1754,"td",20)(1755,"em")(1756,"strong"),e(1757,"(opcional)"),t()(),n(1758,"p"),e(1759,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),n(1760,"code"),e(1761,"url"),t(),e(1762,"."),t(),n(1763,"blockquote")(1764,"p"),e(1765,"O valor default \xE9 "),n(1766,"code"),e(1767,"files"),t()()(),n(1768,"p")(1769,"strong"),e(1770,"Componente compat\xEDvel"),t(),e(1771,": "),n(1772,"code"),e(1773,"po-upload"),t()()()(),n(1774,"tr",13)(1775,"td",14)(1776,"div",15)(1777,"span",16),e(1778," format"),i(1779,"br"),t()()(),n(1780,"td",17)(1781,"code",18),e(1782,"string "),t(),n(1783,"code",32),e(1784," Array<string>"),t()(),n(1785,"td",20)(1786,"em")(1787,"strong"),e(1788,"(opcional)"),t()(),n(1789,"p"),e(1790,"Formato de exibi\xE7\xE3o no campo."),t(),n(1791,"p"),e(1792,"Ao utilizar esta propriedade com o "),n(1793,"code"),e(1794,"type"),t(),n(1795,"em"),e(1796,"PoDynamicFieldType.Date"),t(),e(1797," ou "),n(1798,"em"),e(1799,"PoDynamicFieldType.DateTime"),t(),e(1800,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),t(),n(1801,"p"),e(1802,"Valores v\xE1lidos:"),t(),n(1803,"ul")(1804,"li"),e(1805,"dd/mm/yyyy"),t(),n(1806,"li"),e(1807,"mm/dd/yyyy"),t(),n(1808,"li"),e(1809,"yyyy/mm/dd"),t()(),n(1810,"p"),e(1811,"Tamb\xE9m pode-se utilizar em conjunto com "),n(1812,"code"),e(1813,"searchService"),t(),e(1814,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),t()()(),n(1815,"tr",13)(1816,"td",14)(1817,"div",15)(1818,"span",16),e(1819," formatModel"),i(1820,"br"),t()()(),n(1821,"td",17)(1822,"code",28),e(1823,"boolean"),t()(),n(1824,"td",20)(1825,"em")(1826,"strong"),e(1827,"(opcional)"),t()(),n(1828,"p"),e(1829,"Indica se o "),n(1830,"code"),e(1831,"model"),t(),e(1832," receber\xE1 o valor formatado pelas propriedades "),n(1833,"code"),e(1834,"p-label-on"),t(),e(1835," e "),n(1836,"code"),e(1837,"p-label-off"),t(),e(1838,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),t(),n(1839,"p"),e(1840,"O valor padr\xE3o \xE9: "),n(1841,"code"),e(1842,"false"),t(),e(1843,"."),t(),n(1844,"blockquote")(1845,"p"),e(1846,"Esta propriedade est\xE1 disponivel apenas para o "),n(1847,"code"),e(1848,"swicth"),t(),e(1849,"."),t()()()(),n(1850,"tr",13)(1851,"td",14)(1852,"div",15)(1853,"span",16),e(1854," gridColumns"),i(1855,"br"),t()()(),n(1856,"td",17)(1857,"code",41),e(1858,"number"),t()(),n(1859,"td",20)(1860,"em")(1861,"strong"),e(1862,"(opcional)"),t()(),n(1863,"p"),e(1864,"Tamanho de exibi\xE7\xE3o do campo em telas."),t(),n(1865,"p"),e(1866,"Deve ser usado o sistema de "),n(1867,"strong"),e(1868,"grid"),t(),e(1869," do PO (1 ... 12 colunas)."),t(),n(1870,"blockquote")(1871,"p"),e(1872,"Esta propriedade \xE9 generica, aplica o valor em todos os tamanhos de telas."),t()()()(),n(1873,"tr",13)(1874,"td",14)(1875,"div",15)(1876,"span",16),e(1877," gridLgColumns"),i(1878,"br"),t()()(),n(1879,"td",17)(1880,"code",41),e(1881,"number"),t()(),n(1882,"td",20)(1883,"em")(1884,"strong"),e(1885,"(opcional)"),t()(),n(1886,"p"),e(1887,"Tamanho de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),n(1888,"p"),e(1889,"Deve ser usado o sistema de "),n(1890,"strong"),e(1891,"grid"),t(),e(1892," do PO (1 ... 12 colunas)."),t(),n(1893,"blockquote")(1894,"p"),e(1895,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(1896,"code"),e(1897,"gridColumns"),t(),e(1898,"."),t()()()(),n(1899,"tr",13)(1900,"td",14)(1901,"div",15)(1902,"span",16),e(1903," gridLgPull"),i(1904,"br"),t()()(),n(1905,"td",17)(1906,"code",41),e(1907,"number"),t()(),n(1908,"td",20)(1909,"em")(1910,"strong"),e(1911,"(opcional)"),t()(),n(1912,"p"),e(1913,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas grandes (lg)."),t(),n(1914,"p"),e(1915,"Deve ser usado o sistema de "),n(1916,"strong"),e(1917,"grid"),t(),e(1918," do PO (1 ... 11 colunas)."),t(),n(1919,"blockquote")(1920,"p"),e(1921,"Esta propriedade n\xE3o funciona com a propriedade "),n(1922,"code"),e(1923,"gridColumns"),t(),e(1924,". Deve-se especificar o tamanho da tela."),t()()()(),n(1925,"tr",13)(1926,"td",14)(1927,"div",15)(1928,"span",16),e(1929," gridMdColumns"),i(1930,"br"),t()()(),n(1931,"td",17)(1932,"code",41),e(1933,"number"),t()(),n(1934,"td",20)(1935,"em")(1936,"strong"),e(1937,"(opcional)"),t()(),n(1938,"p"),e(1939,"Tamanho de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),n(1940,"p"),e(1941,"Deve ser usado o sistema de "),n(1942,"strong"),e(1943,"grid"),t(),e(1944," do PO (1 ... 12 colunas)."),t(),n(1945,"blockquote")(1946,"p"),e(1947,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(1948,"code"),e(1949,"gridColumns"),t(),e(1950,"."),t()()()(),n(1951,"tr",13)(1952,"td",14)(1953,"div",15)(1954,"span",16),e(1955," gridMdPull"),i(1956,"br"),t()()(),n(1957,"td",17)(1958,"code",41),e(1959,"number"),t()(),n(1960,"td",20)(1961,"em")(1962,"strong"),e(1963,"(opcional)"),t()(),n(1964,"p"),e(1965,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas m\xE9dias (md)."),t(),n(1966,"p"),e(1967,"Deve ser usado o sistema de "),n(1968,"strong"),e(1969,"grid"),t(),e(1970," do PO (1 ... 11 colunas)."),t(),n(1971,"blockquote")(1972,"p"),e(1973,"Esta propriedade n\xE3o funciona com a propriedade "),n(1974,"code"),e(1975,"gridColumns"),t(),e(1976,". Deve-se especificar o tamanho da tela."),t()()()(),n(1977,"tr",13)(1978,"td",14)(1979,"div",15)(1980,"span",16),e(1981," gridSmColumns"),i(1982,"br"),t()()(),n(1983,"td",17)(1984,"code",41),e(1985,"number"),t()(),n(1986,"td",20)(1987,"em")(1988,"strong"),e(1989,"(opcional)"),t()(),n(1990,"p"),e(1991,"Tamanho de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),n(1992,"p"),e(1993,"Deve ser usado o sistema de "),n(1994,"strong"),e(1995,"grid"),t(),e(1996," do PO (1 ... 12 colunas)."),t(),n(1997,"blockquote")(1998,"p"),e(1999,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2e3,"code"),e(2001,"gridColumns"),t(),e(2002,"."),t()()()(),n(2003,"tr",13)(2004,"td",14)(2005,"div",15)(2006,"span",16),e(2007," gridSmPull"),i(2008,"br"),t()()(),n(2009,"td",17)(2010,"code",41),e(2011,"number"),t()(),n(2012,"td",20)(2013,"em")(2014,"strong"),e(2015,"(opcional)"),t()(),n(2016,"p"),e(2017,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas menores (sm)."),t(),n(2018,"p"),e(2019,"Deve ser usado o sistema de "),n(2020,"strong"),e(2021,"grid"),t(),e(2022," do PO (1 ... 11 colunas)."),t(),n(2023,"blockquote")(2024,"p"),e(2025,"Esta propriedade n\xE3o funciona com a propriedade "),n(2026,"code"),e(2027,"gridColumns"),t(),e(2028,". Deve-se especificar o tamanho da tela."),t()()()(),n(2029,"tr",13)(2030,"td",14)(2031,"div",15)(2032,"span",16),e(2033," gridXlColumns"),i(2034,"br"),t()()(),n(2035,"td",17)(2036,"code",41),e(2037,"number"),t()(),n(2038,"td",20)(2039,"em")(2040,"strong"),e(2041,"(opcional)"),t()(),n(2042,"p"),e(2043,"Tamanho de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),n(2044,"p"),e(2045,"Deve ser usado o sistema de "),n(2046,"strong"),e(2047,"grid"),t(),e(2048," do PO (1 ... 12 colunas)."),t(),n(2049,"blockquote")(2050,"p"),e(2051,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2052,"code"),e(2053,"gridColumns"),t(),e(2054,"."),t()()()(),n(2055,"tr",13)(2056,"td",14)(2057,"div",15)(2058,"span",16),e(2059," gridXlPull"),i(2060,"br"),t()()(),n(2061,"td",17)(2062,"code",41),e(2063,"number"),t()(),n(2064,"td",20)(2065,"em")(2066,"strong"),e(2067,"(opcional)"),t()(),n(2068,"p"),e(2069,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas extra grandes (xl)."),t(),n(2070,"p"),e(2071,"Deve ser usado o sistema de "),n(2072,"strong"),e(2073,"grid"),t(),e(2074," do PO (1 ... 11 colunas)."),t(),n(2075,"blockquote")(2076,"p"),e(2077,"Esta propriedade n\xE3o funciona com a propriedade "),n(2078,"code"),e(2079,"gridColumns"),t(),e(2080,". Deve-se especificar o tamanho da tela."),t()()()(),n(2081,"tr",13)(2082,"td",14)(2083,"div",15)(2084,"span",16),e(2085," headers"),i(2086,"br"),t()()(),n(2087,"td",17)(2088,"code",51),e(2089,"{ [name: string]: string "),t(),n(2090,"code",52),e(2091,` Array<string>;
}`),t()(),n(2092,"td",20)(2093,"em")(2094,"strong"),e(2095,"(opcional)"),t()(),n(2096,"p"),e(2097,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),t(),n(2098,"p")(2099,"strong"),e(2100,"Componente compat\xEDvel"),t(),e(2101,": "),n(2102,"code"),e(2103,"po-upload"),t()()()(),n(2104,"tr",13)(2105,"td",14)(2106,"div",15)(2107,"span",16),e(2108," help"),i(2109,"br"),t()()(),n(2110,"td",17)(2111,"code",18),e(2112,"string"),t()(),n(2113,"td",20)(2114,"em")(2115,"strong"),e(2116,"(opcional)"),t()(),n(2117,"p"),e(2118,"Texto de ajuda."),t()()(),n(2119,"tr",13)(2120,"td",14)(2121,"div",15)(2122,"span",16),e(2123," hideLabelStatus"),i(2124,"br"),t()()(),n(2125,"td",17)(2126,"code",28),e(2127,"boolean"),t()(),n(2128,"td",20)(2129,"em")(2130,"strong"),e(2131,"(opcional)"),t()(),n(2132,"p"),e(2133,"Indica se o status do "),n(2134,"code"),e(2135,"model"),t(),e(2136," ser\xE1 escondido visualmente ao lado do switch"),t()()(),n(2137,"tr",13)(2138,"td",14)(2139,"div",15)(2140,"span",16),e(2141," hidePasswordPeek"),i(2142,"br"),t()()(),n(2143,"td",17)(2144,"code",28),e(2145,"boolean"),t()(),n(2146,"td",20)(2147,"em")(2148,"strong"),e(2149,"(opcional)"),t()(),n(2150,"p"),e(2151,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada no "),n(2152,"code"),e(2153,"po-password"),t(),e(2154,"."),t()()(),n(2155,"tr",13)(2156,"td",14)(2157,"div",15)(2158,"span",16),e(2159," hideRestrictionsInfo"),i(2160,"br"),t()()(),n(2161,"td",17)(2162,"code",28),e(2163,"boolean"),t()(),n(2164,"td",20)(2165,"em")(2166,"strong"),e(2167,"(opcional)"),t()(),n(2168,"p"),e(2169,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),t(),n(2170,"p")(2171,"strong"),e(2172,"Componente compat\xEDvel"),t(),e(2173,": "),n(2174,"code"),e(2175,"po-upload"),t()()()(),n(2176,"tr",13)(2177,"td",14)(2178,"div",15)(2179,"span",16),e(2180," hideSearch"),i(2181,"br"),t()()(),n(2182,"td",17)(2183,"code",28),e(2184,"boolean"),t()(),n(2185,"td",20)(2186,"em")(2187,"strong"),e(2188,"(opcional)"),t()(),n(2189,"p"),e(2190,"Esconde o campo de pesquisa existente dentro do dropdown do "),n(2191,"code"),e(2192,"po-multiselect"),t(),e(2193,"."),t()()(),n(2194,"tr",13)(2195,"td",14)(2196,"div",15)(2197,"span",16),e(2198," hideSelectAll"),i(2199,"br"),t()()(),n(2200,"td",17)(2201,"code",28),e(2202,"boolean"),t()(),n(2203,"td",20)(2204,"em")(2205,"strong"),e(2206,"(opcional)"),t()(),n(2207,"p"),e(2208,'Indica se o campo "Selecionar todos" do '),n(2209,"code"),e(2210,"po-multiselect"),t(),e(2211," ser\xE1 escondido."),t()()(),n(2212,"tr",13)(2213,"td",14)(2214,"div",15)(2215,"span",16),e(2216," hideSelectButton"),i(2217,"br"),t()()(),n(2218,"td",17)(2219,"code",28),e(2220,"boolean"),t()(),n(2221,"td",20)(2222,"em")(2223,"strong"),e(2224,"(opcional)"),t()(),n(2225,"p"),e(2226,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),t(),n(2227,"blockquote")(2228,"p"),e(2229,"Caso o valor definido seja "),n(2230,"code"),e(2231,"true"),t(),e(2232,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),n(2233,"code"),e(2234,"selectFiles()"),t(),e(2235," para sele\xE7\xE3o de arquivos."),t()(),n(2236,"p")(2237,"strong"),e(2238,"Componente compat\xEDvel"),t(),e(2239,": "),n(2240,"code"),e(2241,"po-upload"),t()()()(),n(2242,"tr",13)(2243,"td",14)(2244,"div",15)(2245,"span",16),e(2246," hideSendButton"),i(2247,"br"),t()()(),n(2248,"td",17)(2249,"code",28),e(2250,"boolean"),t()(),n(2251,"td",20)(2252,"em")(2253,"strong"),e(2254,"(opcional)"),t()(),n(2255,"p"),e(2256,"Omite o bot\xE3o de envio de arquivos."),t(),n(2257,"blockquote")(2258,"p"),e(2259,"Caso o valor definido seja "),n(2260,"code"),e(2261,"true"),t(),e(2262,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),n(2263,"code"),e(2264,"sendFiles()"),t(),e(2265," para envio do(s) arquivo(s) selecionado(s)."),t()(),n(2266,"p")(2267,"strong"),e(2268,"Componente compat\xEDvel"),t(),e(2269,": "),n(2270,"code"),e(2271,"po-upload"),t()()()(),n(2272,"tr",13)(2273,"td",14)(2274,"div",15)(2275,"span",16),e(2276," icon"),i(2277,"br"),t()()(),n(2278,"td",17)(2279,"code",18),e(2280,"string "),t(),n(2281,"code",53),e(2282," TemplateRef<void>"),t()(),n(2283,"td",20)(2284,"em")(2285,"strong"),e(2286,"(opcional)"),t()(),n(2287,"p"),e(2288,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),n(2289,"blockquote")(2290,"p"),e(2291,"Esta propriedade s\xF3 pode ser utilizado nos campos:"),t()(),n(2292,"ul")(2293,"li"),e(2294,"Input;"),t(),n(2295,"li"),e(2296,"Number;"),t(),n(2297,"li"),e(2298,"Decimal;"),t(),n(2299,"li"),e(2300,"Combo;"),t(),n(2301,"li"),e(2302,"Password;"),t()(),n(2303,"blockquote")(2304,"p"),e(2305,"Veja a disponibilidade de \xEDcones em "),n(2306,"a",54),e(2307,"biblioteca de \xEDcones"),t(),e(2308,"."),t()()()(),n(2309,"tr",13)(2310,"td",14)(2311,"div",15)(2312,"span",16),e(2313," infiniteScroll"),i(2314,"br"),t()()(),n(2315,"td",17)(2316,"code",28),e(2317,"boolean"),t()(),n(2318,"td",20)(2319,"em")(2320,"strong"),e(2321,"(opcional)"),t()(),n(2322,"p"),e(2323,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),t(),n(2324,"p")(2325,"strong"),e(2326,"Componentes compat\xEDveis:"),t(),n(2327,"code"),e(2328,"po-combo"),t(),e(2329,", "),n(2330,"code"),e(2331,"po-lookup"),t(),e(2332,"."),t()()(),n(2333,"tr",13)(2334,"td",14)(2335,"div",15)(2336,"span",16),e(2337," infiniteScrollDistance"),i(2338,"br"),t()()(),n(2339,"td",17)(2340,"code",41),e(2341,"number"),t()(),n(2342,"td",20)(2343,"em")(2344,"strong"),e(2345,"(opcional)"),t()(),n(2346,"p"),e(2347,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),n(2348,"strong"),e(2349,"Exemplos"),t(),n(2350,"code"),e(2351,"{ infiniteScrollDistance: 80 }"),t(),e(2352,": Quando atingir 80% do scroll do combo, o show-more ser\xE1 disparado."),t(),n(2353,"p")(2354,"strong"),e(2355,"Componente compat\xEDvel:"),t(),n(2356,"code"),e(2357,"po-combo"),t(),e(2358,"."),t()()(),n(2359,"tr",13)(2360,"td",14)(2361,"div",15)(2362,"span",16),e(2363," invalidValue"),i(2364,"br"),t()()(),n(2365,"td",17)(2366,"code",28),e(2367,"boolean"),t()(),n(2368,"td",20)(2369,"em")(2370,"strong"),e(2371,"(opcional)"),t()(),n(2372,"p"),e(2373,"Define qual valor ser\xE1 considerado como inv\xE1lido para exibir a mensagem da propriedade "),n(2374,"code"),e(2375,"p-field-error-message"),t(),e(2376,"."),t(),n(2377,"blockquote")(2378,"p"),e(2379,"Caso essa propriedade seja definida como "),n(2380,"code"),e(2381,"true"),t(),e(2382,", a mensagem de erro ser\xE1 exibida quando o campo estiver ligado(on/true)."),t()(),n(2383,"p")(2384,"strong"),e(2385,"Componente compat\xEDvel"),t(),e(2386,": "),n(2387,"code"),e(2388,"po-switch"),t()()()(),n(2389,"tr",13)(2390,"td",14)(2391,"div",15)(2392,"span",16),e(2393," isoFormat"),i(2394,"br"),t()()(),n(2395,"td",17)(2396,"code",55),e(2397,"PoDatepickerIsoFormat"),t()(),n(2398,"td",20)(2399,"em")(2400,"strong"),e(2401,"(opcional)"),t()(),n(2402,"p"),e(2403,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do model, independentemente do formato de entrada."),t(),n(2404,"blockquote")(2405,"p"),e(2406,"Veja os valores v\xE1lidos no "),n(2407,"code"),e(2408,"enumPoDatepickerIsoFormat"),t(),e(2409,"."),t()(),n(2410,"p")(2411,"strong"),e(2412,"Componente compat\xEDvel:"),t(),e(2413," po-datepicker"),t()()(),n(2414,"tr",13)(2415,"td",14)(2416,"div",15)(2417,"span",16),e(2418," key"),i(2419,"br"),t()()(),n(2420,"td",17)(2421,"code",28),e(2422,"boolean"),t()(),n(2423,"td",20)(2424,"em")(2425,"strong"),e(2426,"(opcional)"),t()(),n(2427,"p"),e(2428,"Identificador"),t()()(),n(2429,"tr",13)(2430,"td",14)(2431,"div",15)(2432,"span",16),e(2433," keydown"),i(2434,"br"),t()()(),n(2435,"td",17)(2436,"code",29),e(2437,"Function"),t()(),n(2438,"td",20)(2439,"em")(2440,"strong"),e(2441,"(opcional)"),t()(),n(2442,"p"),e(2443,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(2444,"code"),e(2445,"KeyboardEvent"),t(),e(2446," com informa\xE7\xF5es sobre a tecla."),t()()(),n(2447,"tr",13)(2448,"td",14)(2449,"div",15)(2450,"span",16),e(2451," label"),i(2452,"br"),t()()(),n(2453,"td",17)(2454,"code",18),e(2455,"string"),t()(),n(2456,"td",20)(2457,"em")(2458,"strong"),e(2459,"(opcional)"),t()(),n(2460,"p"),e(2461,"R\xF3tulo do campo exibido."),t(),n(2462,"p"),e(2463,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),n(2464,"code"),e(2465,"label"),t(),e(2466," o valor da propriedade "),n(2467,"code"),e(2468,"property"),t(),e(2469," com a primeira letra em mai\xFAsculo."),t()()(),n(2470,"tr",13)(2471,"td",14)(2472,"div",15)(2473,"span",16),e(2474," labelPosition"),i(2475,"br"),t()()(),n(2476,"td",17)(2477,"code",56),e(2478,"PoSwitchLabelPosition"),t()(),n(2479,"td",20)(2480,"em")(2481,"strong"),e(2482,"(opcional)"),t()(),n(2483,"p"),e(2484,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo do PoSwitch."),t(),n(2485,"blockquote")(2486,"p"),e(2487,"Por padr\xE3o exibe \xE0 direita."),t()()()(),n(2488,"tr",13)(2489,"td",14)(2490,"div",15)(2491,"span",16),e(2492," listboxControlPosition"),i(2493,"br"),t()()(),n(2494,"td",17)(2495,"code",57),e(2496,"'top' "),t(),n(2497,"code",58),e(2498," 'bottom'"),t()(),n(2499,"td",20)(2500,"em")(2501,"strong"),e(2502,"(opcional)"),t()(),n(2503,"p"),e(2504,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),n(2505,"code"),e(2506,"listbox"),t(),e(2507," em rela\xE7\xE3o ao campo ("),n(2508,"code"),e(2509,"top"),t(),e(2510," ou "),n(2511,"code"),e(2512,"bottom"),t(),e(2513,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),t(),n(2514,"p")(2515,"strong"),e(2516,"Componentes compat\xEDveis:"),t(),n(2517,"code"),e(2518,"po-multiselect"),t(),e(2519,", "),n(2520,"code"),e(2521,"po-combo"),t(),e(2522,"."),t()()(),n(2523,"tr",13)(2524,"td",14)(2525,"div",15)(2526,"span",16),e(2527," literals"),i(2528,"br"),t()()(),n(2529,"td",17)(2530,"code",59),e(2531,"PoLookupLiterals "),t(),n(2532,"code",60),e(2533," PoMultiselectLiterals "),t(),n(2534,"code",61),e(2535," PoComboLiterals "),t(),n(2536,"code",62),e(2537," PoDatepickerRangeLiterals "),t(),n(2538,"code",63),e(2539," PoUploadLiterals"),t()(),n(2540,"td",20)(2541,"em")(2542,"strong"),e(2543,"(opcional)"),t()(),n(2544,"p"),e(2545,"Objeto com as literais usadas para os seguintes componentes: "),n(2546,"code"),e(2547,"po-lookup"),t(),e(2548,", "),n(2549,"code"),e(2550,"po-multiselect"),t(),e(2551,", "),n(2552,"code"),e(2553,"po-combo"),t(),e(2554," e "),n(2555,"code"),e(2556,"po-datepicker-range"),t(),e(2557,"."),t(),n(2558,"blockquote")(2559,"p"),e(2560,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do PoI18nService ou do browser."),t()(),n(2561,"p")(2562,"strong"),e(2563,"Componentes compat\xEDveis:"),t(),n(2564,"code"),e(2565,"po-lookup"),t(),e(2566,", "),n(2567,"code"),e(2568,"po-multiselect"),t(),e(2569,", "),n(2570,"code"),e(2571,"po-combo"),t(),e(2572,", "),n(2573,"code"),e(2574,"po-datepicker-range"),t()()()(),n(2575,"tr",13)(2576,"td",14)(2577,"div",15)(2578,"span",16),e(2579," locale"),i(2580,"br"),t()()(),n(2581,"td",17)(2582,"code",18),e(2583,"string"),t()(),n(2584,"td",20)(2585,"em")(2586,"strong"),e(2587,"(opcional)"),t()(),n(2588,"p"),e(2589,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),n(2590,"a",64)(2591,"code"),e(2592,"I18n"),t()()(),n(2593,"p"),e(2594,"Exemplo de utiliza\xE7\xE3o:"),t(),n(2595,"pre")(2596,"code"),e(2597,`[
  { property: 'birthday', locale: 'en', type: 'date' },
  { property: 'wage', locale: 'ru', type: 'currency' }
];
`),t()(),n(2598,"blockquote")(2599,"p"),e(2600,"Para ver quais linguagens suportadas acesse "),n(2601,"a",64)(2602,"code"),e(2603,"I18n"),t()(),e(2604,`
A propriedade ser\xE1 repassada para os componentes que suportam a mesma.`),t()()()(),n(2605,"tr",13)(2606,"td",14)(2607,"div",15)(2608,"span",16),e(2609," mask"),i(2610,"br"),t()()(),n(2611,"td",17)(2612,"code",18),e(2613,"string"),t()(),n(2614,"td",20)(2615,"em")(2616,"strong"),e(2617,"(opcional)"),t()(),n(2618,"p"),e(2619,"M\xE1scara para o campo."),t(),n(2620,"p")(2621,"strong"),e(2622,"Componentes compat\xEDveis:"),t(),n(2623,"code"),e(2624,"po-input"),t(),e(2625,"."),t(),n(2626,"blockquote")(2627,"p"),e(2628,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),n(2629,"code"),e(2630,"type: time"),t(),e(2631,"."),t()()()(),n(2632,"tr",13)(2633,"td",14)(2634,"div",15)(2635,"span",16),e(2636," maskFormatModel"),i(2637,"br"),t()()(),n(2638,"td",17)(2639,"code",28),e(2640,"boolean"),t()(),n(2641,"td",20)(2642,"em")(2643,"strong"),e(2644,"(opcional)"),t()(),n(2645,"p"),e(2646,"Define que o valor do componente ser\xE1 conforme especificado na masc\xE1ra. O valor padr\xE3o \xE9 "),n(2647,"code"),e(2648,"false"),t(),e(2649,"."),t(),n(2650,"p")(2651,"strong"),e(2652,"Componentes compat\xEDveis:"),t(),n(2653,"code"),e(2654,"po-input"),t(),e(2655,"."),t(),n(2656,"blockquote")(2657,"p"),e(2658,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),n(2659,"code"),e(2660,"type: time"),t(),e(2661,"."),t()()()(),n(2662,"tr",13)(2663,"td",14)(2664,"div",15)(2665,"span",16),e(2666," maxLength"),i(2667,"br"),t()()(),n(2668,"td",17)(2669,"code",41),e(2670,"number"),t()(),n(2671,"td",20)(2672,"em")(2673,"strong"),e(2674,"(opcional)"),t()(),n(2675,"p"),e(2676,"Tamanho m\xE1ximo de caracteres."),t(),n(2677,"p")(2678,"strong"),e(2679,"Componentes compat\xEDveis:"),t(),n(2680,"code"),e(2681,"po-input"),t(),e(2682,", "),n(2683,"code"),e(2684,"po-number"),t(),e(2685,", "),n(2686,"code"),e(2687,"po-decimal"),t(),e(2688,", "),n(2689,"code"),e(2690,"po-textarea"),t(),e(2691,", "),n(2692,"code"),e(2693,"po-password"),t(),e(2694,"."),t()()(),n(2695,"tr",13)(2696,"td",14)(2697,"div",15)(2698,"span",16),e(2699," maxValue"),i(2700,"br"),t()()(),n(2701,"td",17)(2702,"code",18),e(2703,"string "),t(),n(2704,"code",41),e(2705," number"),t()(),n(2706,"td",20)(2707,"em")(2708,"strong"),e(2709,"(opcional)"),t()(),n(2710,"p"),e(2711,"Valor m\xE1ximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),n(2712,"em"),e(2713,"number"),t(),e(2714,", "),n(2715,"em"),e(2716,"date"),t(),e(2717," ou "),n(2718,"em"),e(2719,"dateTime"),t(),e(2720,"."),t(),n(2721,"p")(2722,"strong"),e(2723,"Componentes compat\xEDveis:"),t(),n(2724,"code"),e(2725,"po-datepicker"),t(),e(2726,", "),n(2727,"code"),e(2728,"po-datepicker-range"),t(),e(2729,", "),n(2730,"code"),e(2731,"po-number"),t(),e(2732,", "),n(2733,"code"),e(2734,"po-decimal"),t()()()(),n(2735,"tr",13)(2736,"td",14)(2737,"div",15)(2738,"span",16),e(2739," minLength"),i(2740,"br"),t()()(),n(2741,"td",17)(2742,"code",41),e(2743,"number"),t()(),n(2744,"td",20)(2745,"em")(2746,"strong"),e(2747,"(opcional)"),t()(),n(2748,"p"),e(2749,"Tamanho m\xEDnimo de caracteres."),t(),n(2750,"p")(2751,"strong"),e(2752,"Componentes compat\xEDveis:"),t(),n(2753,"code"),e(2754,"po-input"),t(),e(2755,", "),n(2756,"code"),e(2757,"po-number"),t(),e(2758,", "),n(2759,"code"),e(2760,"po-decimal"),t(),e(2761,", "),n(2762,"code"),e(2763,"po-textarea"),t(),e(2764,", "),n(2765,"code"),e(2766,"po-password"),t(),e(2767,"."),t()()(),n(2768,"tr",13)(2769,"td",14)(2770,"div",15)(2771,"span",16),e(2772," minValue"),i(2773,"br"),t()()(),n(2774,"td",17)(2775,"code",18),e(2776,"string "),t(),n(2777,"code",41),e(2778," number"),t()(),n(2779,"td",20)(2780,"em")(2781,"strong"),e(2782,"(opcional)"),t()(),n(2783,"p"),e(2784,"Valor m\xEDnimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),n(2785,"em"),e(2786,"number"),t(),e(2787,", "),n(2788,"em"),e(2789,"date"),t(),e(2790," ou "),n(2791,"em"),e(2792,"dateTime"),t(),e(2793,"."),t(),n(2794,"p")(2795,"strong"),e(2796,"Componentes compat\xEDveis:"),t(),n(2797,"code"),e(2798,"po-datepicker"),t(),e(2799,", "),n(2800,"code"),e(2801,"po-datepicker-range"),t(),e(2802,", "),n(2803,"code"),e(2804,"po-number"),t(),e(2805,", "),n(2806,"code"),e(2807,"po-decimal"),t()()()(),n(2808,"tr",13)(2809,"td",14)(2810,"div",15)(2811,"span",16),e(2812," multiple"),i(2813,"br"),t()()(),n(2814,"td",17)(2815,"code",28),e(2816,"boolean"),t()(),n(2817,"td",20)(2818,"em")(2819,"strong"),e(2820,"(opcional)"),t()(),n(2821,"p"),e(2822,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),n(2823,"p")(2824,"strong"),e(2825,"Componente compat\xEDvel:"),t(),n(2826,"code"),e(2827,"po-lookup"),t(),e(2828,", "),n(2829,"code"),e(2830,"po-upload"),t()()()(),n(2831,"tr",13)(2832,"td",14)(2833,"div",15)(2834,"span",16),e(2835," noAutocomplete"),i(2836,"br"),t()()(),n(2837,"td",17)(2838,"code",28),e(2839,"boolean"),t()(),n(2840,"td",20)(2841,"em")(2842,"strong"),e(2843,"(opcional)"),t()(),n(2844,"p"),e(2845,"Define a propriedade nativa "),n(2846,"code"),e(2847,"autocomplete"),t(),e(2848," do campo como off."),t(),n(2849,"p")(2850,"strong"),e(2851,"Componentes compat\xEDveis:"),t(),n(2852,"code"),e(2853,"po-datepicker"),t(),e(2854,", "),n(2855,"code"),e(2856,"po-datepicker-range"),t(),e(2857,", "),n(2858,"code"),e(2859,"po-input"),t(),e(2860,", "),n(2861,"code"),e(2862,"po-number"),t(),e(2863,", "),n(2864,"code"),e(2865,"po-decimal"),t(),e(2866,", "),n(2867,"code"),e(2868,"po-lookup"),t(),e(2869,", "),n(2870,"code"),e(2871,"po-password"),t()()()(),n(2872,"tr",13)(2873,"td",14)(2874,"div",15)(2875,"span",16),e(2876," offsetColumns"),i(2877,"br"),t()()(),n(2878,"td",17)(2879,"code",41),e(2880,"number"),t()(),n(2881,"td",20)(2882,"em")(2883,"strong"),e(2884,"(opcional)"),t()(),n(2885,"p"),e(2886,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),t(),n(2887,"p"),e(2888,"Deve ser usado o sistema de "),n(2889,"strong"),e(2890,"grid"),t(),e(2891," do PO (1 ... 12 colunas)."),t(),n(2892,"blockquote")(2893,"p"),e(2894,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),t()()()(),n(2895,"tr",13)(2896,"td",14)(2897,"div",15)(2898,"span",16),e(2899," offsetLgColumns"),i(2900,"br"),t()()(),n(2901,"td",17)(2902,"code",41),e(2903,"number"),t()(),n(2904,"td",20)(2905,"em")(2906,"strong"),e(2907,"(opcional)"),t()(),n(2908,"p"),e(2909,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),n(2910,"p"),e(2911,"Deve ser usado o sistema de "),n(2912,"strong"),e(2913,"grid"),t(),e(2914," do PO (1 ... 12 colunas)."),t(),n(2915,"blockquote")(2916,"p"),e(2917,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2918,"code"),e(2919,"offsetColumns"),t(),e(2920,"."),t()()()(),n(2921,"tr",13)(2922,"td",14)(2923,"div",15)(2924,"span",16),e(2925," offsetMdColumns"),i(2926,"br"),t()()(),n(2927,"td",17)(2928,"code",41),e(2929,"number"),t()(),n(2930,"td",20)(2931,"em")(2932,"strong"),e(2933,"(opcional)"),t()(),n(2934,"p"),e(2935,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),n(2936,"p"),e(2937,"Deve ser usado o sistema de "),n(2938,"strong"),e(2939,"grid"),t(),e(2940," do PO (1 ... 12 colunas)."),t(),n(2941,"blockquote")(2942,"p"),e(2943,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2944,"code"),e(2945,"offsetColumns"),t(),e(2946,"."),t()()()(),n(2947,"tr",13)(2948,"td",14)(2949,"div",15)(2950,"span",16),e(2951," offsetSmColumns"),i(2952,"br"),t()()(),n(2953,"td",17)(2954,"code",41),e(2955,"number"),t()(),n(2956,"td",20)(2957,"em")(2958,"strong"),e(2959,"(opcional)"),t()(),n(2960,"p"),e(2961,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),n(2962,"p"),e(2963,"Deve ser usado o sistema de "),n(2964,"strong"),e(2965,"grid"),t(),e(2966," do PO (1 ... 12 colunas)."),t(),n(2967,"blockquote")(2968,"p"),e(2969,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2970,"code"),e(2971,"offsetColumns"),t(),e(2972,"."),t()()()(),n(2973,"tr",13)(2974,"td",14)(2975,"div",15)(2976,"span",16),e(2977," offsetXlColumns"),i(2978,"br"),t()()(),n(2979,"td",17)(2980,"code",41),e(2981,"number"),t()(),n(2982,"td",20)(2983,"em")(2984,"strong"),e(2985,"(opcional)"),t()(),n(2986,"p"),e(2987,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),n(2988,"p"),e(2989,"Deve ser usado o sistema de "),n(2990,"strong"),e(2991,"grid"),t(),e(2992," do PO (1 ... 12 colunas)."),t(),n(2993,"blockquote")(2994,"p"),e(2995,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2996,"code"),e(2997,"offsetColumns"),t(),e(2998,"."),t()()()(),n(2999,"tr",13)(3e3,"td",14)(3001,"div",15)(3002,"span",16),e(3003," onError"),i(3004,"br"),t()()(),n(3005,"td",17)(3006,"code",29),e(3007,"Function"),t()(),n(3008,"td",20)(3009,"em")(3010,"strong"),e(3011,"(opcional)"),t()(),n(3012,"p"),e(3013,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),t(),n(3014,"blockquote")(3015,"p"),e(3016,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),n(3017,"code"),e(3018,"HttpErrorResponse"),t(),e(3019,"."),t()(),n(3020,"p")(3021,"strong"),e(3022,"Componente compat\xEDvel"),t(),e(3023,": "),n(3024,"code"),e(3025,"po-upload"),t()()()(),n(3026,"tr",13)(3027,"td",14)(3028,"div",15)(3029,"span",16),e(3030," onSuccess"),i(3031,"br"),t()()(),n(3032,"td",17)(3033,"code",29),e(3034,"Function"),t()(),n(3035,"td",20)(3036,"em")(3037,"strong"),e(3038,"(opcional)"),t()(),n(3039,"p"),e(3040,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),t(),n(3041,"blockquote")(3042,"p"),e(3043,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),n(3044,"code"),e(3045,"HttpResponse"),t(),e(3046,"."),t()(),n(3047,"p")(3048,"strong"),e(3049,"Componente compat\xEDvel"),t(),e(3050,": "),n(3051,"code"),e(3052,"po-upload"),t()()()(),n(3053,"tr",13)(3054,"td",14)(3055,"div",15)(3056,"span",16),e(3057," onUpload"),i(3058,"br"),t()()(),n(3059,"td",17)(3060,"code",29),e(3061,"Function"),t()(),n(3062,"td",20)(3063,"em")(3064,"strong"),e(3065,"(opcional)"),t()(),n(3066,"p"),e(3067,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),t(),n(3068,"pre")(3069,"code"),e(3070,`event.data = {id: 'id do usu\xE1rio'};
`),t()(),n(3071,"p")(3072,"strong"),e(3073,"Componente compat\xEDvel"),t(),e(3074,": "),n(3075,"code"),e(3076,"po-upload"),t()()()(),n(3077,"tr",13)(3078,"td",14)(3079,"div",15)(3080,"span",16),e(3081," optional"),i(3082,"br"),t()()(),n(3083,"td",17)(3084,"code",28),e(3085,"boolean"),t()(),n(3086,"td",20)(3087,"em")(3088,"strong"),e(3089,"(opcional)"),t()(),n(3090,"p"),e(3091,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(3092,"blockquote")(3093,"p"),e(3094,"A indica\xE7\xE3o n\xE3o ser\xE1 exibida, se:"),t()(),n(3095,"ul")(3096,"li"),e(3097,"O campo for "),n(3098,"code"),e(3099,"required"),t(),e(3100,", ou;"),t(),n(3101,"li"),e(3102,"N\xE3o possuir "),n(3103,"code"),e(3104,"help"),t(),e(3105," e "),n(3106,"code"),e(3107,"label"),t(),e(3108,"."),t()()()(),n(3109,"tr",13)(3110,"td",14)(3111,"div",15)(3112,"span",16),e(3113," options"),i(3114,"br"),t()()(),n(3115,"td",17)(3116,"code",32),e(3117,"Array<string> "),t(),n(3118,"code",65),e(3119," Array<PoSelectOption> "),t(),n(3120,"code",66),e(3121," Array<PoMultiselectOption> "),t(),n(3122,"code",67),e(3123," Array<PoCheckboxGroupOption> "),t(),n(3124,"code",68),e(3125," Array<any>"),t()(),n(3126,"td",20)(3127,"em")(3128,"strong"),e(3129,"(opcional)"),t()(),n(3130,"p"),e(3131,"Lista de op\xE7\xF5es que ser\xE3o exibidos em um componente, podendo selecionar uma op\xE7\xE3o."),t(),n(3132,"p")(3133,"strong"),e(3134,"Componentes compat\xEDveis:"),t(),n(3135,"code"),e(3136,"po-select"),t(),e(3137,", "),n(3138,"code"),e(3139,"po-radio-group"),t(),e(3140,", "),n(3141,"code"),e(3142,"po-checkbox-group"),t(),e(3143,", "),n(3144,"code"),e(3145,"po-multiselect"),t(),e(3146,"."),t()()(),n(3147,"tr",13)(3148,"td",14)(3149,"div",15)(3150,"span",16),e(3151," optionsMulti"),i(3152,"br"),t()()(),n(3153,"td",17)(3154,"code",28),e(3155,"boolean"),t()(),n(3156,"td",20)(3157,"em")(3158,"strong"),e(3159,"(opcional)"),t()(),n(3160,"p"),e(3161,"Permite que o usu\xE1rio fa\xE7a m\xFAltipla sele\xE7\xE3o dentro da lista de op\xE7\xF5es."),t()()(),n(3162,"tr",13)(3163,"td",14)(3164,"div",15)(3165,"span",16),e(3166," optionsService"),i(3167,"br"),t()()(),n(3168,"td",17)(3169,"code",18),e(3170,"string "),t(),n(3171,"code",69),e(3172," PoComboFilter "),t(),n(3173,"code",70),e(3174," PoMultiselectFilter"),t()(),n(3175,"td",20)(3176,"em")(3177,"strong"),e(3178,"(opcional)"),t()(),n(3179,"p"),e(3180,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),n(3181,"strong"),e(3182,"Importante"),t()(),n(3183,"blockquote")(3184,"p"),e(3185,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),n(3186,"a",71),e(3187,"guia de API do PO UI"),t(),e(3188,"."),t()()()(),n(3189,"tr",13)(3190,"td",14)(3191,"div",15)(3192,"span",16),e(3193," order"),i(3194,"br"),t()()(),n(3195,"td",17)(3196,"code",41),e(3197,"number"),t()(),n(3198,"td",20)(3199,"em")(3200,"strong"),e(3201,"(opcional)"),t()(),n(3202,"p"),e(3203,"Informa a ordem de exibi\xE7\xE3o do campo."),t(),n(3204,"p"),e(3205,"Exemplo de utiliza\xE7\xE3o:"),t(),n(3206,"p")(3207,"code"),e(3208,"[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];"),t()(),n(3209,"p"),e(3210,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),n(3211,"code"),e(3212,"[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];"),t()(),n(3213,"p"),e(3214,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),t(),n(3215,"p"),e(3216,"Campos sem "),n(3217,"code"),e(3218,"order"),t(),e(3219,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),t()()(),n(3220,"tr",13)(3221,"td",14)(3222,"div",15)(3223,"span",16),e(3224," params"),i(3225,"br"),t()()(),n(3226,"td",17)(3227,"code",33),e(3228,"any"),t()(),n(3229,"td",20)(3230,"em")(3231,"strong"),e(3232,"(opcional)"),t()(),n(3233,"p"),e(3234,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca usados pelos componentes "),n(3235,"code"),e(3236,"po-lookup"),t(),e(3237,` e
`),n(3238,"code"),e(3239,"po-combo"),t(),e(3240,"."),t(),n(3241,"p"),e(3242,"Por exemplo, para o par\xE2metro "),n(3243,"code"),e(3244,"{ age: 23 }"),t(),e(3245," a URL da requisi\xE7\xE3o ficaria:"),t(),n(3246,"p")(3247,"code"),e(3248,"url + ?age=23&filter=Peter"),t()()()(),n(3249,"tr",13)(3250,"td",14)(3251,"div",15)(3252,"span",16),e(3253," pattern"),i(3254,"br"),t()()(),n(3255,"td",17)(3256,"code",18),e(3257,"string"),t()(),n(3258,"td",20)(3259,"em")(3260,"strong"),e(3261,"(opcional)"),t()(),n(3262,"p"),e(3263,"Regex para valida\xE7\xE3o do campo."),t(),n(3264,"p")(3265,"strong"),e(3266,"Componentes compat\xEDveis:"),t(),n(3267,"code"),e(3268,"po-input"),t(),e(3269,", "),n(3270,"code"),e(3271,"po-password"),t(),e(3272,"."),t()()(),n(3273,"tr",13)(3274,"td",14)(3275,"div",15)(3276,"span",16),e(3277," placeholder"),i(3278,"br"),t()()(),n(3279,"td",17)(3280,"code",18),e(3281,"string"),t()(),n(3282,"td",20)(3283,"em")(3284,"strong"),e(3285,"(opcional)"),t()(),n(3286,"p"),e(3287,"Mensagem que ser\xE1 exibida enquanto o campo n\xE3o estiver preenchido."),t()()(),n(3288,"tr",13)(3289,"td",14)(3290,"div",15)(3291,"span",16),e(3292," placeholderSearch"),i(3293,"br"),t()()(),n(3294,"td",17)(3295,"code",18),e(3296,"string"),t()(),n(3297,"td",20)(3298,"em")(3299,"strong"),e(3300,"(opcional)"),t()(),n(3301,"p"),e(3302,"Placeholder do campo de pesquisa do "),n(3303,"code"),e(3304,"po-multiselect"),t(),e(3305,"."),t(),n(3306,"blockquote")(3307,"p"),e(3308,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),t()()()(),n(3309,"tr",13)(3310,"td",14)(3311,"div",15)(3312,"span",16),e(3313," property"),i(3314,"br"),t()()(),n(3315,"td",17)(3316,"code",18),e(3317,"string"),t()(),n(3318,"td",20)(3319,"p"),e(3320,"Nome de refer\xEAncia do campo."),t()()(),n(3321,"tr",13)(3322,"td",14)(3323,"div",15)(3324,"span",16),e(3325," range"),i(3326,"br"),t()()(),n(3327,"td",17)(3328,"code",28),e(3329,"boolean"),t()(),n(3330,"td",20)(3331,"em")(3332,"strong"),e(3333,"(opcional)"),t()(),n(3334,"p"),e(3335,"O controle passa a permitir a entrada de um intervalo ao inv\xE9s de um \xFAnico valor."),t(),n(3336,"blockquote")(3337,"p"),e(3338,"Atualmente essa propriedade est\xE1 dispon\xEDvel apenas para o tipo 'date' e 'dateTime'."),t()()()(),n(3339,"tr",13)(3340,"td",14)(3341,"div",15)(3342,"span",16),e(3343," readonly"),i(3344,"br"),t()()(),n(3345,"td",17)(3346,"code",28),e(3347,"boolean"),t()(),n(3348,"td",20)(3349,"em")(3350,"strong"),e(3351,"(opcional)"),t()(),n(3352,"p"),e(3353,"Indica que o campo ser\xE1 somente leitura."),t(),n(3354,"p")(3355,"strong"),e(3356,"Componentes compat\xEDveis:"),t(),n(3357,"code"),e(3358,"po-datepicker"),t(),e(3359,", "),n(3360,"code"),e(3361,"po-datepicker-range"),t(),e(3362,", "),n(3363,"code"),e(3364,"po-input"),t(),e(3365,", "),n(3366,"code"),e(3367,"po-number"),t(),e(3368,", "),n(3369,"code"),e(3370,"po-decimal"),t(),e(3371,", "),n(3372,"code"),e(3373,"po-select"),t(),e(3374,", "),n(3375,"code"),e(3376,"po-textarea"),t(),e(3377,", "),n(3378,"code"),e(3379,"po-password"),t()()()(),n(3380,"tr",13)(3381,"td",14)(3382,"div",15)(3383,"span",16),e(3384," removeInitialFilter"),i(3385,"br"),t()()(),n(3386,"td",17)(3387,"code",28),e(3388,"boolean"),t()(),n(3389,"td",20)(3390,"em")(3391,"strong"),e(3392,"(opcional)"),t()(),n(3393,"p"),e(3394,"Define que o filtro no primeiro clique ser\xE1 removido."),t(),n(3395,"blockquote")(3396,"p"),e(3397,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),t()(),n(3398,"p")(3399,"strong"),e(3400,"Componente compat\xEDvel"),t(),e(3401,": "),n(3402,"code"),e(3403,"po-combo"),t()()()(),n(3404,"tr",13)(3405,"td",14)(3406,"div",15)(3407,"span",16),e(3408," required"),i(3409,"br"),t()()(),n(3410,"td",17)(3411,"code",28),e(3412,"boolean"),t()(),n(3413,"td",20)(3414,"em")(3415,"strong"),e(3416,"(opcional)"),t()(),n(3417,"p"),e(3418,"Define a obrigatoriedade do campo."),t()()(),n(3419,"tr",13)(3420,"td",14)(3421,"div",15)(3422,"span",16),e(3423," requiredFieldErrorMessage"),i(3424,"br"),t()()(),n(3425,"td",17)(3426,"code",28),e(3427,"boolean"),t()(),n(3428,"td",20)(3429,"em")(3430,"strong"),e(3431,"(opcional)"),t()(),n(3432,"p"),e(3433,"Exibe a mensagem setada na propriedade "),n(3434,"code"),e(3435,"errorMessage"),t(),e(3436," se o campo estiver vazio e for requerido."),t(),n(3437,"blockquote")(3438,"p"),e(3439,"Necess\xE1rio que a propriedade "),n(3440,"code"),e(3441,"required"),t(),e(3442," esteja habilitada."),t()(),n(3443,"p")(3444,"strong"),e(3445,"Componentes compat\xEDveis:"),t(),n(3446,"code"),e(3447,"po-datepicker"),t(),e(3448,", "),n(3449,"code"),e(3450,"po-input"),t(),e(3451,", "),n(3452,"code"),e(3453,"po-number"),t(),e(3454,", "),n(3455,"code"),e(3456,"po-decimal"),t(),e(3457,", "),n(3458,"code"),e(3459,"po-password"),t(),e(3460,"."),t()()(),n(3461,"tr",13)(3462,"td",14)(3463,"div",15)(3464,"span",16),e(3465," restrictions"),i(3466,"br"),t()()(),n(3467,"td",17)(3468,"code",72),e(3469,"PoUploadFileRestrictions"),t()(),n(3470,"td",20)(3471,"em")(3472,"strong"),e(3473,"(opcional)"),t()(),n(3474,"p"),e(3475,"Objeto que segue a defini\xE7\xE3o da interface "),n(3476,"code"),e(3477,"PoUploadFileRestrictions"),t(),e(3478,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),t(),n(3479,"p")(3480,"strong"),e(3481,"Componente compat\xEDvel"),t(),e(3482,": "),n(3483,"code"),e(3484,"po-upload"),t()()()(),n(3485,"tr",13)(3486,"td",14)(3487,"div",15)(3488,"span",16),e(3489," rows"),i(3490,"br"),t()()(),n(3491,"td",17)(3492,"code",41),e(3493,"number"),t()(),n(3494,"td",20)(3495,"em")(3496,"strong"),e(3497,"(opcional)"),t()(),n(3498,"p"),e(3499,"Quantidade de linhas exibidas no "),n(3500,"code"),e(3501,"po-textarea"),t(),e(3502,"."),t()()(),n(3503,"tr",13)(3504,"td",14)(3505,"div",15)(3506,"span",16),e(3507," searchService"),i(3508,"br"),t()()(),n(3509,"td",17)(3510,"code",18),e(3511,"string "),t(),n(3512,"code",73),e(3513," PoLookupFilter"),t()(),n(3514,"td",20)(3515,"em")(3516,"strong"),e(3517,"(opcional)"),t()(),n(3518,"p"),e(3519,"Servi\xE7o que ser\xE1 utilizado para realizar a busca avan\xE7ada. Pode ser utilizado em conjunto com a propriedade "),n(3520,"code"),e(3521,"columns"),t(),e(3522,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),n(3523,"strong"),e(3524,"Importante:"),t()(),n(3525,"blockquote")(3526,"p"),e(3527,"Caso utilizar a propriedade "),n(3528,"code"),e(3529,"optionsService"),t(),e(3530,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),n(3531,"a",71),e(3532,"guia de API do PO UI"),t(),e(3533,"."),t()()()(),n(3534,"tr",13)(3535,"td",14)(3536,"div",15)(3537,"span",16),e(3538," secret"),i(3539,"br"),t()()(),n(3540,"td",17)(3541,"code",28),e(3542,"boolean"),t()(),n(3543,"td",20)(3544,"em")(3545,"strong"),e(3546,"(opcional)"),t()(),n(3547,"p"),e(3548,"Esconde a informa\xE7\xE3o estilo "),n(3549,"em"),e(3550,"password"),t(),e(3551,", pode ser utilizado quando o tipo de dado for "),n(3552,"em"),e(3553,"string"),t(),e(3554,"."),t()()(),n(3555,"tr",13)(3556,"td",14)(3557,"div",15)(3558,"span",16),e(3559," showRequired"),i(3560,"br"),t()()(),n(3561,"td",17)(3562,"code",28),e(3563,"boolean"),t()(),n(3564,"td",20)(3565,"em")(3566,"strong"),e(3567,"(opcional)"),t()(),n(3568,"p"),e(3569,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(3570,"blockquote")(3571,"p"),e(3572,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(3573,"ul")(3574,"li"),e(3575,"N\xE3o possuir "),n(3576,"code"),e(3577,"p-help"),t(),e(3578," e/ou "),n(3579,"code"),e(3580,"p-label"),t(),e(3581,"."),t()()()(),n(3582,"tr",13)(3583,"td",14)(3584,"div",15)(3585,"span",16),e(3586," showThumbnail"),i(3587,"br"),t()()(),n(3588,"td",17)(3589,"code",28),e(3590,"boolean"),t()(),n(3591,"td",20)(3592,"em")(3593,"strong"),e(3594,"(opcional)"),t()(),n(3595,"p"),e(3596,"Exibe a pr\xE9-visualiza\xE7\xE3o de imagens ao anex\xE1-las."),t(),n(3597,"blockquote")(3598,"p"),e(3599,"Propriedade funciona apenas em arquivos de formato de imagem ("),n(3600,"code"),e(3601,".png"),t(),e(3602,", "),n(3603,"code"),e(3604,".jpg"),t(),e(3605,", "),n(3606,"code"),e(3607,".jpeg"),t(),e(3608," e "),n(3609,"code"),e(3610,".gif"),t(),e(3611,")."),t()(),n(3612,"p")(3613,"strong"),e(3614,"Componente compat\xEDvel"),t(),e(3615,": "),n(3616,"code"),e(3617,"po-upload"),t()()()(),n(3618,"tr",13)(3619,"td",14)(3620,"div",15)(3621,"span",16),e(3622," size"),i(3623,"br"),t()()(),n(3624,"td",17)(3625,"code",18),e(3626,"string"),t()(),n(3627,"td",20)(3628,"em")(3629,"strong"),e(3630,"(opcional)"),t()(),n(3631,"p"),e(3632,"Define o tamanho dos componentes de formul\xE1rio no template conforme suas respectivas documenta\xE7\xF5es:"),t(),n(3633,"ul")(3634,"li")(3635,"code"),e(3636,"small"),t(),e(3637,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(3638,"li")(3639,"code"),e(3640,"medium"),t(),e(3641,": aplica a medida medium de cada componente."),t(),n(3642,"li")(3643,"code"),e(3644,"large"),t(),e(3645,": aplica a medida large de cada componente (dispon\xEDvel para "),n(3646,"code"),e(3647,"po-checkbox"),t(),e(3648," e "),n(3649,"code"),e(3650,"po-radio-group"),t(),e(3651,")."),n(3652,"blockquote")(3653,"p"),e(3654,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(3655,"code"),e(3656,"medium"),t(),e(3657,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(3658,"a",21),e(3659,"po-theme"),t(),e(3660,"."),t()()()()()(),n(3661,"tr",13)(3662,"td",14)(3663,"div",15)(3664,"span",16),e(3665," sort"),i(3666,"br"),t()()(),n(3667,"td",17)(3668,"code",28),e(3669,"boolean"),t()(),n(3670,"td",20)(3671,"em")(3672,"strong"),e(3673,"(opcional)"),t()(),n(3674,"p"),e(3675,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),t(),n(3676,"p")(3677,"strong"),e(3678,"Componentes compat\xEDveis:"),t(),n(3679,"code"),e(3680,"po-combo"),t(),e(3681,", po-multiselect"),t()()(),n(3682,"tr",13)(3683,"td",14)(3684,"div",15)(3685,"span",16),e(3686," step"),i(3687,"br"),t()()(),n(3688,"td",17)(3689,"code",41),e(3690,"number"),t()(),n(3691,"td",20)(3692,"em")(3693,"strong"),e(3694,"(opcional)"),t()(),n(3695,"p"),e(3696,"Intervalo utilizado no "),n(3697,"code"),e(3698,"po-number"),t(),e(3699,"."),t()()(),n(3700,"tr",13)(3701,"td",14)(3702,"div",15)(3703,"span",16),e(3704," thousandMaxlength"),i(3705,"br"),t()()(),n(3706,"td",17)(3707,"code",41),e(3708,"number"),t()(),n(3709,"td",20)(3710,"em")(3711,"strong"),e(3712,"(opcional)"),t()(),n(3713,"p"),e(3714,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal. O valor m\xE1ximo permitido \xE9 13"),t(),n(3715,"blockquote")(3716,"p"),e(3717,"Esta propriedade s\xF3 pode ser utilizada quando o "),n(3718,"code"),e(3719,"type"),t(),e(3720," for "),n(3721,"em"),e(3722,"currency"),t(),e(3723," ou "),n(3724,"em"),e(3725,"decimal"),t(),e(3726,"."),t()()()(),n(3727,"tr",13)(3728,"td",14)(3729,"div",15)(3730,"span",16),e(3731," type"),i(3732,"br"),t()()(),n(3733,"td",17)(3734,"code",18),e(3735,"string "),t(),n(3736,"code",74),e(3737," PoDynamicFieldType"),t()(),n(3738,"td",20)(3739,"em")(3740,"strong"),e(3741,"(opcional)"),t()(),n(3742,"p"),e(3743,"Tipo do valor campo."),t(),n(3744,"p"),e(3745,"Valores v\xE1lidos:"),t(),n(3746,"ul")(3747,"li")(3748,"code"),e(3749,"boolean"),t(),e(3750,": Valores "),n(3751,"em"),e(3752,"booleanos"),t(),e(3753,"."),t(),n(3754,"li")(3755,"code"),e(3756,"currency"),t(),e(3757,": Valores monet\xE1rios."),t(),n(3758,"li")(3759,"code"),e(3760,"decimal"),t(),e(3761,": Valores decimais."),t(),n(3762,"li")(3763,"code"),e(3764,"date"),t(),e(3765,": Valores de datas."),n(3766,"ul")(3767,"li"),e(3768,"Aceita os tipos "),n(3769,"strong"),e(3770,"string"),t(),e(3771," e "),n(3772,"strong"),e(3773,"Date"),t(),e(3774,` padr\xE3o do Javascript,
por exemplo: `),n(3775,"code"),e(3776,"'2017-11-28'"),t(),e(3777," ou "),n(3778,"code"),e(3779,"new Date(2017, 10, 28)"),t(),e(3780,"."),t()()(),n(3781,"li")(3782,"code"),e(3783,"dateTime"),t(),e(3784,": Valor de data com hor\xE1rio."),n(3785,"ul")(3786,"li"),e(3787,"Aceita o tipo "),n(3788,"em"),e(3789,"string"),t(),e(3790," no formato "),n(3791,"strong"),e(3792,"ISO-8601"),t(),e(3793," extendido "),n(3794,"strong"),e(3795,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),t(),e(3796,`
e o tipo `),n(3797,"strong"),e(3798,"Date"),t(),e(3799," padr\xE3o do Javascript, por exemplo: "),n(3800,"code"),e(3801,"'2017-11-28T00:00:00-02:00'"),t(),e(3802," ou "),n(3803,"code"),e(3804,"new Date(2017, 10, 28)"),t(),e(3805,"."),t()()(),n(3806,"li")(3807,"code"),e(3808,"number"),t(),e(3809,": Valores num\xE9ricos."),t(),n(3810,"li")(3811,"code"),e(3812,"string"),t(),e(3813,": Textos."),t(),n(3814,"li")(3815,"code"),e(3816,"time"),t(),e(3817,": Valor do hor\xE1rio."),n(3818,"ul")(3819,"li"),e(3820,"Aceita o tipo "),n(3821,"strong"),e(3822,"string"),t(),e(3823," nos formatos "),n(3824,"strong"),e(3825,"'HH:mm:ss'"),t(),e(3826," ou "),n(3827,"strong"),e(3828,"'HH:mm:ss.ffffff'"),t(),e(3829,", por exemplo: "),n(3830,"code"),e(3831,"'23:12:45'"),t(),e(3832,"."),t()()()()()(),n(3833,"tr",13)(3834,"td",14)(3835,"div",15)(3836,"span",16),e(3837," url"),i(3838,"br"),t()()(),n(3839,"td",17)(3840,"code",18),e(3841,"string"),t()(),n(3842,"td",20)(3843,"em")(3844,"strong"),e(3845,"(opcional)"),t()(),n(3846,"p"),e(3847,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),t(),n(3848,"p")(3849,"strong"),e(3850,"Componente compat\xEDvel"),t(),e(3851,": "),n(3852,"code"),e(3853,"po-upload"),t()()()(),n(3854,"tr",13)(3855,"td",14)(3856,"div",15)(3857,"span",16),e(3858," validate"),i(3859,"br"),t()()(),n(3860,"td",17)(3861,"code",18),e(3862,"string "),t(),n(3863,"code",29),e(3864," Function"),t()(),n(3865,"td",20)(3866,"em")(3867,"strong"),e(3868,"(opcional)"),t()(),n(3869,"p"),e(3870,"Fun\xE7\xE3o ou servi\xE7o para validar as "),n(3871,"strong"),e(3872,"mudan\xE7as do campo"),t(),e(3873,"."),t(),n(3874,"ul")(3875,"li"),e(3876,"A propriedade aceita os seguintes tipos:"),t()(),n(3877,"ul")(3878,"li")(3879,"strong"),e(3880,"String"),t(),e(3881,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),n(3882,"code"),e(3883,"POST"),t(),e(3884,"."),t(),n(3885,"li")(3886,"strong"),e(3887,"Function"),t(),e(3888,": M\xE9todo que ser\xE1 executado."),t()(),n(3889,"p"),e(3890,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),n(3891,"code"),e(3892,"PoDynamicFormFieldChanged"),t(),e(3893,":"),t(),n(3894,"p")(3895,"code"),e(3896,"{ property: 'property name', value: 'new value' }"),t()(),n(3897,"p"),e(3898,"O retorno desta fun\xE7\xE3o deve ser do tipo "),n(3899,"a",75),e(3900,"PoDynamicFormFieldValidation"),t(),e(3901,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),t(),n(3902,"pre")(3903,"code"),e(3904,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),t()(),n(3905,"p"),e(3906,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),n(3907,"code"),e(3908,"bind"),t(),e(3909,`, por exemplo:
`),n(3910,"code"),e(3911,"{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }"),t()()()(),n(3912,"tr",13)(3913,"td",14)(3914,"div",15)(3915,"span",16),e(3916," visible"),i(3917,"br"),t()()(),n(3918,"td",17)(3919,"code",28),e(3920,"boolean"),t()(),n(3921,"td",20)(3922,"em")(3923,"strong"),e(3924,"(opcional)"),t()(),n(3925,"p"),e(3926,"Indica se o campo ser\xE1 vis\xEDvel."),t()()()(),n(3927,"h4",38)(3928,"code",5),e(3929,"PoDynamicFormLoad"),t()(),n(3930,"div",2)(3931,"p"),i(3932,"a",76),t(),n(3933,"p"),e(3934,"Estrutura de retorno no carregamento do formul\xE1rio."),t()(),n(3935,"h4",9),e(3936,"Propriedades"),t(),n(3937,"table",10)(3938,"tr",11)(3939,"th",12),e(3940,"Nome"),t(),n(3941,"th",12),e(3942,"Tipo"),t(),n(3943,"th",12),e(3944,"Descri\xE7\xE3o"),t()(),n(3945,"tr",13)(3946,"td",14)(3947,"div",15)(3948,"span",16),e(3949," fields"),i(3950,"br"),t()()(),n(3951,"td",17)(3952,"code",22),e(3953,"Array<PoDynamicFormField>"),t()(),n(3954,"td",20)(3955,"em")(3956,"strong"),e(3957,"(opcional)"),t()(),n(3958,"p"),e(3959,"Lista com as novas defini\xE7\xF5es dos campos."),t(),n(3960,"blockquote")(3961,"p"),e(3962,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades e campos, apenas as que precisam ser alteradas ou adicionadas."),t()()()(),n(3963,"tr",13)(3964,"td",14)(3965,"div",15)(3966,"span",16),e(3967," focus"),i(3968,"br"),t()()(),n(3969,"td",17)(3970,"code",18),e(3971,"string"),t()(),n(3972,"td",20)(3973,"em")(3974,"strong"),e(3975,"(opcional)"),t()(),n(3976,"p"),e(3977,"Nome do campo que receber\xE1 o foco."),t(),n(3978,"p"),e(3979,"Exemplo:"),t(),n(3980,"pre")(3981,"code"),e(3982,`focus: 'name'
`),t()()()(),n(3983,"tr",13)(3984,"td",14)(3985,"div",15)(3986,"span",16),e(3987," value"),i(3988,"br"),t()()(),n(3989,"td",17)(3990,"code",33),e(3991,"any"),t()(),n(3992,"td",20)(3993,"em")(3994,"strong"),e(3995,"(opcional)"),t()(),n(3996,"p"),e(3997,"Objeto contendo os novos valores."),t(),n(3998,"p"),e(3999,"Exemplo:"),t(),n(4e3,"pre")(4001,"code"),e(4002,`{
  name: 'new name',
  age: 10
}
`),t()(),n(4003,"blockquote")(4004,"p"),e(4005,"N\xE3o \xE9 necess\xE1rio colocar os valores de todos os campos, apenas os que foram alterados."),t()()()()(),n(4006,"h4",38)(4007,"code",5),e(4008,"PoDynamicFormFieldChanged"),t()(),n(4009,"div",2)(4010,"p"),e(4011,"Estrutura dos valores que ser\xE3o disparados quando houver uma mudan\xE7a em um campo ou no formul\xE1rio."),t()(),n(4012,"h4",9),e(4013,"Propriedades"),t(),n(4014,"table",10)(4015,"tr",11)(4016,"th",12),e(4017,"Nome"),t(),n(4018,"th",12),e(4019,"Tipo"),t(),n(4020,"th",12),e(4021,"Descri\xE7\xE3o"),t()(),n(4022,"tr",13)(4023,"td",14)(4024,"div",15)(4025,"span",16),e(4026," property"),i(4027,"br"),t()()(),n(4028,"td",17)(4029,"code",18),e(4030,"string"),t()(),n(4031,"td",20)(4032,"p"),e(4033,"Valor da propriedade do campo."),t()()(),n(4034,"tr",13)(4035,"td",14)(4036,"div",15)(4037,"span",16),e(4038," value"),i(4039,"br"),t()()(),n(4040,"td",17)(4041,"code",33),e(4042,"any"),t()(),n(4043,"td",20)(4044,"p"),e(4045,"Novo valor do campo."),t()()()(),n(4046,"h4",38)(4047,"code",5),e(4048,"PoDynamicFormFieldValidation"),t()(),n(4049,"div",2)(4050,"p"),i(4051,"a",77),t(),n(4052,"p"),e(4053,"Estrutura de retorno da valida\xE7\xE3o de um campo."),t()(),n(4054,"h4",9),e(4055,"Propriedades"),t(),n(4056,"table",10)(4057,"tr",11)(4058,"th",12),e(4059,"Nome"),t(),n(4060,"th",12),e(4061,"Tipo"),t(),n(4062,"th",12),e(4063,"Descri\xE7\xE3o"),t()(),n(4064,"tr",13)(4065,"td",14)(4066,"div",15)(4067,"span",16),e(4068," field"),i(4069,"br"),t()()(),n(4070,"td",17)(4071,"code",78),e(4072,"PoDynamicFormField"),t()(),n(4073,"td",20)(4074,"em")(4075,"strong"),e(4076,"(opcional)"),t()(),n(4077,"p"),e(4078,"Novas defini\xE7\xF5es das propriedades do campo."),t(),n(4079,"blockquote")(4080,"p"),e(4081,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades, apenas as que foram alteradas."),t()()()(),n(4082,"tr",13)(4083,"td",14)(4084,"div",15)(4085,"span",16),e(4086," focus"),i(4087,"br"),t()()(),n(4088,"td",17)(4089,"code",28),e(4090,"boolean"),t()(),n(4091,"td",20)(4092,"em")(4093,"strong"),e(4094,"(opcional)"),t()(),n(4095,"p"),e(4096,"Coloca o foco no campo ap\xF3s a valida\xE7\xE3o."),t()()(),n(4097,"tr",13)(4098,"td",14)(4099,"div",15)(4100,"span",16),e(4101," value"),i(4102,"br"),t()()(),n(4103,"td",17)(4104,"code",33),e(4105,"any"),t()(),n(4106,"td",20)(4107,"em")(4108,"strong"),e(4109,"(opcional)"),t()(),n(4110,"p"),e(4111,"Novo valor do campo"),t()()()(),n(4112,"h4",38)(4113,"code",5),e(4114,"PoDynamicFormValidation"),t()(),n(4115,"div",2)(4116,"p"),i(4117,"a",79),t(),n(4118,"p"),e(4119,"Estrutura de retorno da valida\xE7\xE3o do formul\xE1rio."),t()(),n(4120,"h4",9),e(4121,"Propriedades"),t(),n(4122,"table",10)(4123,"tr",11)(4124,"th",12),e(4125,"Nome"),t(),n(4126,"th",12),e(4127,"Tipo"),t(),n(4128,"th",12),e(4129,"Descri\xE7\xE3o"),t()(),n(4130,"tr",13)(4131,"td",14)(4132,"div",15)(4133,"span",16),e(4134," fields"),i(4135,"br"),t()()(),n(4136,"td",17)(4137,"code",22),e(4138,"Array<PoDynamicFormField>"),t()(),n(4139,"td",20)(4140,"em")(4141,"strong"),e(4142,"(opcional)"),t()(),n(4143,"p"),e(4144,"Lista com as novas defini\xE7\xF5es dos campos."),t(),n(4145,"blockquote")(4146,"p"),e(4147,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades e campos, apenas as que foram alteradas."),t()()()(),n(4148,"tr",13)(4149,"td",14)(4150,"div",15)(4151,"span",16),e(4152," focus"),i(4153,"br"),t()()(),n(4154,"td",17)(4155,"code",18),e(4156,"string"),t()(),n(4157,"td",20)(4158,"em")(4159,"strong"),e(4160,"(opcional)"),t()(),n(4161,"p"),e(4162,"Nome do campo que receber\xE1 o foco."),t(),n(4163,"p"),e(4164,"Exemplo:"),t(),n(4165,"pre")(4166,"code"),e(4167,`focus: 'name'
`),t()()()(),n(4168,"tr",13)(4169,"td",14)(4170,"div",15)(4171,"span",16),e(4172," value"),i(4173,"br"),t()()(),n(4174,"td",17)(4175,"code",33),e(4176,"any"),t()(),n(4177,"td",20)(4178,"em")(4179,"strong"),e(4180,"(opcional)"),t()(),n(4181,"p"),e(4182,"Objeto contendo os novos valores."),t(),n(4183,"p"),e(4184,"Exemplo:"),t(),n(4185,"pre")(4186,"code"),e(4187,`{
  name: 'new name',
  age: 10
}
`),t()(),n(4188,"blockquote")(4189,"p"),e(4190,"N\xE3o \xE9 necess\xE1rio colocar os valores de todos os campos, apenas os que foram alterados."),t()()()()(),n(4191,"h4",38)(4192,"code",5),e(4193,"ErrorAsyncProperties"),t()(),n(4194,"div",2)(4195,"p"),e(4196,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),t()(),n(4197,"h4",9),e(4198,"Propriedades"),t(),n(4199,"table",10)(4200,"tr",11)(4201,"th",12),e(4202,"Nome"),t(),n(4203,"th",12),e(4204,"Tipo"),t(),n(4205,"th",12),e(4206,"Descri\xE7\xE3o"),t()(),n(4207,"tr",13)(4208,"td",14)(4209,"div",15)(4210,"span",16),e(4211," errorAsync"),i(4212,"br"),t()()(),n(4213,"td",17)(4214,"code",46),e(4215,"(value) => Observable<boolean>"),t()(),n(4216,"td",20)(4217,"p"),e(4218,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(4219,"code"),e(4220,"change"),t(),e(4221," ou "),n(4222,"code"),e(4223,"change-model"),t(),e(4224,", dependendo do valor da propriedade "),n(4225,"code"),e(4226,"triggerMode"),t(),e(4227,"."),t()()(),n(4228,"tr",13)(4229,"td",14)(4230,"div",15)(4231,"span",16),e(4232," triggerMode"),i(4233,"br"),t()()(),n(4234,"td",17)(4235,"code",80),e(4236,"'change' "),t(),n(4237,"code",81),e(4238," 'changeModel'"),t()(),n(4239,"td",20)(4240,"em")(4241,"strong"),e(4242,"(opcional)"),t()(),n(4243,"p"),e(4244,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),n(4245,"code"),e(4246,"change"),t(),e(4247," ou "),n(4248,"code"),e(4249,"change-model"),t(),e(4250,"."),t()()()(),n(4251,"h3"),e(4252,"Enums"),t(),n(4253,"h4",4)(4254,"code",5),e(4255,"ForceBooleanComponentEnum"),t()(),n(4256,"div",2)(4257,"p"),e(4258,"Enum para defini\xE7\xE3o do tipo de componente a ser renderizado."),t()(),n(4259,"h4",9),e(4260,"Propriedades"),t(),n(4261,"table",10)(4262,"tr",11)(4263,"th",12),e(4264,"Nome"),t(),n(4265,"th",12),e(4266,"Descri\xE7\xE3o"),t()(),n(4267,"tr",13)(4268,"td",14)(4269,"div",15)(4270,"span",16),e(4271," switch"),i(4272,"br"),t()()(),n(4273,"td",20)(4274,"p"),e(4275,"For\xE7a a renderiza\xE7\xE3o de um po-switch"),t()()(),n(4276,"tr",13)(4277,"td",14)(4278,"div",15)(4279,"span",16),e(4280," checkbox"),i(4281,"br"),t()()(),n(4282,"td",20)(4283,"p"),e(4284,"For\xE7a a renderiza\xE7\xE3o de um po-checkbox"),t()()()(),n(4285,"h4",4)(4286,"code",5),e(4287,"ForceOptionComponentEnum"),t()(),n(4288,"div",2)(4289,"p"),e(4290,"Enum para defini\xE7\xE3o do tipo de componente a ser renderizado."),t()(),n(4291,"h4",9),e(4292,"Propriedades"),t(),n(4293,"table",10)(4294,"tr",11)(4295,"th",12),e(4296,"Nome"),t(),n(4297,"th",12),e(4298,"Descri\xE7\xE3o"),t()(),n(4299,"tr",13)(4300,"td",14)(4301,"div",15)(4302,"span",16),e(4303," radioGroup"),i(4304,"br"),t()()(),n(4305,"td",20)(4306,"p"),e(4307,"For\xE7a a renderiza\xE7\xE3o de um po-radio-group independente da quantidade do op\xE7\xF5es"),t()()(),n(4308,"tr",13)(4309,"td",14)(4310,"div",15)(4311,"span",16),e(4312," select"),i(4313,"br"),t()()(),n(4314,"td",20)(4315,"p"),e(4316,"For\xE7a a renderiza\xE7\xE3o de um po-select independente da quantidade do op\xE7\xF5es"),t()()()(),n(4317,"h4",4)(4318,"code",5),e(4319,"PoDynamicFieldType"),t()(),n(4320,"div",2)(4321,"p"),e(4322,"Enum para defini\xE7\xE3o do tipo de campo que ser\xE1 criado dinamicamente."),t()(),n(4323,"h4",9),e(4324,"Propriedades"),t(),n(4325,"table",10)(4326,"tr",11)(4327,"th",12),e(4328,"Nome"),t(),n(4329,"th",12),e(4330,"Descri\xE7\xE3o"),t()(),n(4331,"tr",13)(4332,"td",14)(4333,"div",15)(4334,"span",16),e(4335," Boolean"),i(4336,"br"),t()()(),n(4337,"td",20)(4338,"p"),e(4339,"Valor booleano."),t()()(),n(4340,"tr",13)(4341,"td",14)(4342,"div",15)(4343,"span",16),e(4344," Currency"),i(4345,"br"),t()()(),n(4346,"td",20)(4347,"p"),e(4348,"Valor num\xE9rico que cont\xE9m casas decimais e milhar."),t()()(),n(4349,"tr",13)(4350,"td",14)(4351,"div",15)(4352,"span",16),e(4353," Decimal"),i(4354,"br"),t()()(),n(4355,"td",20)(4356,"p"),e(4357,"Valor num\xE9rico que cont\xE9m casas decimais e milhar."),t()()(),n(4358,"tr",13)(4359,"td",14)(4360,"div",15)(4361,"span",16),e(4362," Date"),i(4363,"br"),t()()(),n(4364,"td",20)(4365,"p"),e(4366,"Valor para data."),t()()(),n(4367,"tr",13)(4368,"td",14)(4369,"div",15)(4370,"span",16),e(4371," DateTime"),i(4372,"br"),t()()(),n(4373,"td",20)(4374,"p"),e(4375,"Valor para data e hora."),t()()(),n(4376,"tr",13)(4377,"td",14)(4378,"div",15)(4379,"span",16),e(4380," Time"),i(4381,"br"),t()()(),n(4382,"td",20)(4383,"p"),e(4384,"Utilizado para informar/exibir hora."),t()()(),n(4385,"tr",13)(4386,"td",14)(4387,"div",15)(4388,"span",16),e(4389," Number"),i(4390,"br"),t()()(),n(4391,"td",20)(4392,"p"),e(4393,"Valor num\xE9rico."),t()()(),n(4394,"tr",13)(4395,"td",14)(4396,"div",15)(4397,"span",16),e(4398," String"),i(4399,"br"),t()()(),n(4400,"td",20)(4401,"p"),e(4402,"Texto."),t()()(),n(4403,"tr",13)(4404,"td",14)(4405,"div",15)(4406,"span",16),e(4407," Upload"),i(4408,"br"),t()()(),n(4409,"td",20)(4410,"p"),e(4411,"Utilizado para fazer uploads de arquivos."),t()()()()())},dependencies:[b],encapsulation:2})}return o})();var ie=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||o)(L(K),L(X))};static \u0275cmp=s({type:o,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Dynamic Form",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,l){a&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),c("p-click",function(){return l.changeTab("doc")}),i(3,"sample-po-dynamic-form-doc"),t(),n(4,"po-tab",3),c("p-click",function(){return l.changeTab("web")}),i(5,"sample-po-dynamic-form-basic-view")(6,"sample-po-dynamic-form-register-view")(7,"sample-po-dynamic-form-container-view"),t()()()),a&2&&(p("p-actions",l.actions),d(2),p("p-active",l.activeTab==="doc"),d(2),p("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"))},dependencies:[J,x,S,Q,$,te,ne],encapsulation:2})}return o})();var ye=[{path:"",component:ie}],oe=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=T({type:o});static \u0275inj=P({imports:[O.forChild(ye),O]})}return o})();var et=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=T({type:o});static \u0275inj=P({imports:[W,oe]})}return o})();export{et as DocPoDynamicFormModule};
