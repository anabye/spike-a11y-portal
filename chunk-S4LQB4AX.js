import{o as Ee,p as Se}from"./chunk-5JJFKL64.js";import{A as I,Ab as D,B as C,Db as ue,F as oe,Fa as le,Ga as de,I as re,La as pe,Pa as se,Wa as ce,g as v,ja as me,nb as he,t as te,u as ne,v as ie,w as N,x as _,y as ae,z as M,zb as P}from"./chunk-3FZYIE4R.js";import{$a as L,Ac as K,Ba as V,Dc as X,Ea as t,Ec as Y,Fa as n,Ga as i,Ic as Z,Ka as O,La as E,M as A,Nc as $,Pc as ee,Rc as F,T as x,Ta as R,U as g,Ua as q,Va as z,Xa as e,Za as j,a as c,ab as k,b as u,bb as w,cb as B,eb as W,ha as l,ia as b,oa as S,pa as y,qb as G,tc as p,ub as U,wc as H,xc as Q,ya as d,zc as J}from"./chunk-MIQUIDUB.js";var Ae=["reactiveFormData"],be=(()=>{class r{cdr;fb;poTheme;reactiveFormModal;a11yLevel;a11yLevelStorage="po-a11y-AAA";reactiveForm;theme=0;themeStorage="po-theme-default";a11yChangeListenerAAA;a11yChangeListenerAA;themeChangeListenerDark;themeChangeListenerDefault;a11yLevelOptions=[{label:"AA",value:"AA"},{label:"AAA",value:"AAA"}];themeOptions=[{label:"Light",value:0},{label:"Dark",value:1}];modalPrimaryAction={action:()=>this.reactiveFormModal.close(),label:"Close"};poThemeSample={name:"po-theme",type:{light:{color:{brand:{"01":{lightest:"#f2eaf6",lighter:"#d9c2e5",light:"#bd94d1",base:"#753399",dark:"#5b1c7d",darker:"#400e58",darkest:"#260538"},"02":{base:"#b92f72"},"03":{base:"#ffd464"}},action:u(c({},ne),{disabled:"var(--color-neutral-mid-40)"}),feedback:u(c({},N),{info:u(c({},N.info),{base:"#0079b8"})}),neutral:c({},ie)},onRoot:u(c({},_.onRoot),{"--color-page-background-color-page":"var(--color-neutral-light-05)"}),perComponent:c({},_.perComponent)},dark:{color:{brand:{"01":{darkest:"#f2eaf6",darker:"#d9c2e5",dark:"#bd94d1",base:"#753399",light:"#5b1c7d",lighter:"#400e58",lightest:"#260538"},"02":{base:"#b92f72"},"03":{base:"#ffd464"}},action:u(c({},ae),{disabled:"var(--color-neutral-mid-40)"}),feedback:u(c({},M),{info:u(c({},M.info),{base:"#0079b8"})}),neutral:{light:{"00":"#1c1c1c","05":"#202020",10:"#2b2b2b",20:"#3b3b3b",30:"#5a5a5a"},mid:{40:"#7c7c7c",60:"#a1a1a1"},dark:{70:"#c1c1c1",80:"#d9d9d9",90:"#eeeeee",95:"#fbfbfb"}}},onRoot:u(c({},I.onRoot),{"--color-page-background-color-page":"var(--color-neutral-light-05)"}),perComponent:c({},I.perComponent)}},active:te.light};constructor(m,o,a){this.cdr=m,this.fb=o,this.poTheme=a;let s=this.poTheme.applyTheme();this.a11yLevel=this.poTheme.getA11yLevel(),s?this.theme=s.active||0:(this.poTheme.setTheme(this.poThemeSample,this.theme,this.a11yLevel),this.theme=this.poThemeSample.active),this.createReactiveForm(),this.a11yLevel==="AA"&&this.poTheme.setA11yDefaultSizeSmall(!0)}ngOnInit(){localStorage.getItem("po-ui-theme")&&(this.themeStorage=localStorage.getItem("po-ui-theme")),this.theme=this.themeStorage==="po-theme-default"?0:1,this.changeTheme(this.theme,!1),localStorage.getItem("po-ui-a11y")&&(this.a11yLevelStorage=localStorage.getItem("po-ui-a11y")),this.a11yLevel=this.a11yLevelStorage==="po-a11y-AAA"?v.AAA:v.AA,this.changeA11yLevel(this.a11yLevel,!1),this.themeChangeListenerDefault=()=>{this.changeTheme(0,!1),this.theme=0},this.themeChangeListenerDark=()=>{this.changeTheme(1,!1),this.theme=1},this.a11yChangeListenerAAA=()=>{this.changeA11yLevel(v.AAA,!1),this.a11yLevel=v.AAA},this.a11yChangeListenerAA=()=>{this.changeA11yLevel(v.AA,!1),this.a11yLevel=v.AA},window.addEventListener("po-a11y-AA",this.a11yChangeListenerAA),window.addEventListener("po-a11y-AAA",this.a11yChangeListenerAAA),window.addEventListener("po-theme-default",this.themeChangeListenerDefault),window.addEventListener("po-theme-dark",this.themeChangeListenerDark)}ngOnDestroy(){window.removeEventListener("po-theme-default",this.themeChangeListenerDefault),window.removeEventListener("po-theme-dark",this.themeChangeListenerDark),window.removeEventListener("po-a11y-AA",this.a11yChangeListenerAA),window.removeEventListener("po-a11y-AAA",this.a11yChangeListenerAAA)}changeA11yLevel(m,o=!0){this.poTheme.setCurrentThemeA11y(m),m==="AA"?localStorage.setItem("po-ui-a11y","po-a11y-AA"):localStorage.setItem("po-ui-a11y","po-a11y-AAA"),m===v.AA&&this.poTheme.setA11yDefaultSizeSmall(!0),o&&window.dispatchEvent(new Event("po-sample-change-a11y"))}changeTheme(m,o=!0){this.poTheme.setTheme(this.poThemeSample,m,this.a11yLevel),m===1?localStorage.setItem("po-ui-theme","po-theme-dark"):localStorage.setItem("po-ui-theme","po-theme-default"),o&&window.dispatchEvent(new Event("po-sample-change-theme")),this.a11yLevel==="AA"&&this.poTheme.setA11yDefaultSizeSmall(!0)}createReactiveForm(){this.reactiveForm=this.fb.group({name:["",p.compose([p.required,p.minLength(5),p.maxLength(30)])],address:["",p.compose([p.required,p.minLength(5),p.maxLength(50)])],number:["",p.compose([p.required,p.min(1),p.max(99999)])],email:["",p.required],website:["",p.required]})}saveForm(){this.reactiveFormModal.open()}static \u0275fac=function(o){return new(o||r)(b(G),b(Z),b(C))};static \u0275cmp=S({type:r,selectors:[["sample-po-theme-labs"]],viewQuery:function(o,a){if(o&1&&R(Ae,7),o&2){let s;q(s=z())&&(a.reactiveFormModal=s.first)}},standalone:!1,features:[B([C])],decls:24,vars:12,consts:[["reactiveFormData",""],["p-title","Example"],[3,"formGroup"],["formControlName","name","p-clean","","p-icon","an an-user","p-label","Customer name",1,"po-lg-6"],["formControlName","email","p-label","Email","p-clean","",1,"po-lg-6"],["formControlName","address","p-clean","","p-icon","an an-map-pin","p-label","Address",1,"po-lg-4","po-md-8"],["formControlName","number","p-label","Number","p-clean","",1,"po-lg-2","po-md-4"],["formControlName","website","p-label","Website","p-clean","",1,"po-lg-6"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Save successful",3,"p-primary-action"],["p-label","Name",1,"po-md-12",3,"p-value"],["p-label","Address",1,"po-md-6",3,"p-value"],["p-label","Number",1,"po-md-6",3,"p-value"],["p-label","Email",1,"po-md-6",3,"p-value"],["p-label","Website",1,"po-md-6",3,"p-value"],[1,"po-row","po-mt-3"],["name","theme","p-label","Theme Type",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","a11ylevel","p-label","Acessibility Level",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"]],template:function(o,a){if(o&1){let s=O();t(0,"po-widget",1)(1,"form",2),i(2,"po-input",3)(3,"po-email",4)(4,"po-input",5)(5,"po-number",6)(6,"po-url",7),t(7,"div",8)(8,"po-button",9),E("p-click",function(){return x(s),g(a.saveForm())}),n()()(),t(9,"po-modal",10,0)(11,"div",8),i(12,"po-info",11),n(),i(13,"hr"),t(14,"div",8),i(15,"po-info",12)(16,"po-info",13),n(),i(17,"hr"),t(18,"div",8),i(19,"po-info",14)(20,"po-info",15),n()()(),t(21,"div",16)(22,"po-radio-group",17),w("ngModelChange",function(h){return x(s),k(a.theme,h)||(a.theme=h),g(h)}),E("p-change",function(h){return x(s),g(a.changeTheme(h))}),n(),t(23,"po-radio-group",18),w("ngModelChange",function(h){return x(s),k(a.a11yLevel,h)||(a.a11yLevel=h),g(h)}),E("p-change",function(h){return x(s),g(a.changeA11yLevel(h))}),n()()}o&2&&(l(),d("formGroup",a.reactiveForm),l(7),d("p-disabled",!a.reactiveForm.valid),l(),d("p-primary-action",a.modalPrimaryAction),l(3),d("p-value",a.reactiveForm.controls.name.value),l(3),d("p-value",a.reactiveForm.controls.address.value),l(),d("p-value",a.reactiveForm.controls.number.value),l(3),d("p-value",a.reactiveForm.controls.email.value),l(),d("p-value",a.reactiveForm.controls.website.value),l(2),L("ngModel",a.theme),d("p-options",a.themeOptions),l(),L("ngModel",a.a11yLevel),d("p-options",a.a11yLevelOptions))},dependencies:[K,H,Q,J,X,Y,oe,me,le,de,pe,se,ce,re,ue],encapsulation:2})}return r})();var Ce=r=>({"docs-sample-code-tabs":r}),xe=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-theme-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,a){o&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Theme Labs"),n(),t(4,"a",2),E("click",function(){return a.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-theme-labs/sample-po-theme-labs.component.html"),n(),t(13,"pre",7),e(14,`<po-widget p-title="Example">
  <form [formGroup]="reactiveForm">
    <po-input class="po-lg-6" formControlName="name" p-clean p-icon="an an-user" p-label="Customer name"> </po-input>

    <po-email class="po-lg-6" formControlName="email" p-label="Email" p-clean> </po-email>

    <po-input class="po-lg-4 po-md-8" formControlName="address" p-clean p-icon="an an-map-pin" p-label="Address">
    </po-input>

    <po-number class="po-lg-2 po-md-4" formControlName="number" p-label="Number" p-clean> </po-number>

    <po-url class="po-lg-6" formControlName="website" p-label="Website" p-clean> </po-url>

    <div class="po-row">
      <po-button class="po-md-3" p-label="Save" [p-disabled]="!reactiveForm.valid" (p-click)="saveForm()"> </po-button>
    </div>
  </form>

  <po-modal #reactiveFormData p-title="Save successful" [p-primary-action]="modalPrimaryAction">
    <div class="po-row">
      <po-info class="po-md-12" p-label="Name" [p-value]="reactiveForm.controls.name.value"> </po-info>
    </div>

    <hr />

    <div class="po-row">
      <po-info class="po-md-6" p-label="Address" [p-value]="reactiveForm.controls.address.value"> </po-info>

      <po-info class="po-md-6" p-label="Number" [p-value]="reactiveForm.controls.number.value"> </po-info>
    </div>

    <hr />

    <div class="po-row">
      <po-info class="po-md-6" p-label="Email" [p-value]="reactiveForm.controls.email.value"> </po-info>

      <po-info class="po-md-6" p-label="Website" [p-value]="reactiveForm.controls.website.value"> </po-info>
    </div>
  </po-modal>
</po-widget>

<div class="po-row po-mt-3">
  <po-radio-group
    class="po-md-6"
    name="theme"
    p-label="Theme Type"
    [(ngModel)]="theme"
    [p-options]="themeOptions"
    (p-change)="changeTheme($event)"
  >
  </po-radio-group>

  <po-radio-group
    class="po-md-6"
    name="a11ylevel"
    p-label="Acessibility Level"
    [(ngModel)]="a11yLevel"
    [p-options]="a11yLevelOptions"
    (p-change)="changeA11yLevel($event)"
  >
  </po-radio-group>
</div>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-theme-labs/sample-po-theme-labs.component.ts"),n(),t(19,"pre",9),e(20,`import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import {
  PoRadioGroupOption,
  PoThemeA11yEnum,
  PoThemeService,
  PoThemeTypeEnum,
  poThemeDefaultActions,
  poThemeDefaultActionsDark,
  poThemeDefaultDarkValues,
  poThemeDefaultFeedback,
  poThemeDefaultFeedbackDark,
  poThemeDefaultLightValues,
  poThemeDefaultNeutrals
} from '@po-ui/ng-components';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
@Component({
  selector: 'sample-po-theme-labs',
  templateUrl: './sample-po-theme-labs.component.html',
  providers: [PoThemeService],
  standalone: false
})
export class SamplePoThemeLabsComponent implements OnInit, OnDestroy {
  @ViewChild('reactiveFormData', { static: true }) reactiveFormModal: PoModalComponent;

  a11yLevel: PoThemeA11yEnum;
  a11yLevelStorage = 'po-a11y-AAA';
  reactiveForm: UntypedFormGroup;
  theme: PoThemeTypeEnum = 0;
  themeStorage = 'po-theme-default';

  private a11yChangeListenerAAA: any;
  private a11yChangeListenerAA: any;
  private themeChangeListenerDark: any;
  private themeChangeListenerDefault: any;

  readonly a11yLevelOptions: Array<PoRadioGroupOption> = [
    { label: 'AA', value: 'AA' },
    { label: 'AAA', value: 'AAA' }
  ];

  readonly themeOptions: Array<PoRadioGroupOption> = [
    { label: 'Light', value: 0 },
    { label: 'Dark', value: 1 }
  ];

  readonly modalPrimaryAction: PoModalAction = {
    action: () => this.reactiveFormModal.close(),
    label: 'Close'
  };

  poThemeSample = {
    name: 'po-theme',
    type: {
      light: {
        color: {
          brand: {
            '01': {
              lightest: '#f2eaf6',
              lighter: '#d9c2e5',
              light: '#bd94d1',
              base: '#753399',
              dark: '#5b1c7d',
              darker: '#400e58',
              darkest: '#260538'
            },
            '02': {
              base: '#b92f72'
            },
            '03': {
              base: '#ffd464'
            }
          },
          action: {
            ...poThemeDefaultActions,
            disabled: 'var(--color-neutral-mid-40)'
          },
          feedback: {
            ...poThemeDefaultFeedback,
            info: {
              ...poThemeDefaultFeedback.info,
              base: '#0079b8'
            }
          },
          neutral: {
            ...poThemeDefaultNeutrals
          }
        },
        onRoot: {
          ...poThemeDefaultLightValues.onRoot,
          '--color-page-background-color-page': 'var(--color-neutral-light-05)'
        },
        perComponent: {
          ...poThemeDefaultLightValues.perComponent
        }
      },
      dark: {
        color: {
          brand: {
            '01': {
              darkest: '#f2eaf6',
              darker: '#d9c2e5',
              dark: '#bd94d1',
              base: '#753399',
              light: '#5b1c7d',
              lighter: '#400e58',
              lightest: '#260538'
            },
            '02': {
              base: '#b92f72'
            },
            '03': {
              base: '#ffd464'
            }
          },
          action: {
            ...poThemeDefaultActionsDark,
            disabled: 'var(--color-neutral-mid-40)'
          },
          feedback: {
            ...poThemeDefaultFeedbackDark,
            info: {
              ...poThemeDefaultFeedbackDark.info,
              base: '#0079b8'
            }
          },
          neutral: {
            light: {
              '00': '#1c1c1c',
              '05': '#202020',
              '10': '#2b2b2b',
              '20': '#3b3b3b',
              '30': '#5a5a5a'
            },
            mid: {
              '40': '#7c7c7c',
              '60': '#a1a1a1'
            },
            dark: {
              '70': '#c1c1c1',
              '80': '#d9d9d9',
              '90': '#eeeeee',
              '95': '#fbfbfb'
            }
          }
        },
        onRoot: {
          ...poThemeDefaultDarkValues.onRoot,
          '--color-page-background-color-page': 'var(--color-neutral-light-05)'
        },
        perComponent: {
          ...poThemeDefaultDarkValues.perComponent
        }
      }
    },
    active: PoThemeTypeEnum.light
  };

  constructor(
    private cdr: ChangeDetectorRef,
    private fb: UntypedFormBuilder,
    private poTheme: PoThemeService
  ) {
    const _poTheme = this.poTheme.applyTheme();
    this.a11yLevel = this.poTheme.getA11yLevel();

    if (!_poTheme) {
      this.poTheme.setTheme(this.poThemeSample, this.theme, this.a11yLevel);
      this.theme = this.poThemeSample.active;
    } else {
      this.theme = _poTheme.active || 0;
    }
    this.createReactiveForm();

    if (this.a11yLevel === 'AA') {
      this.poTheme.setA11yDefaultSizeSmall(true);
    }
  }

  ngOnInit(): void {
    if (localStorage.getItem('po-ui-theme')) {
      this.themeStorage = localStorage.getItem('po-ui-theme');
    }

    this.theme = this.themeStorage === 'po-theme-default' ? 0 : 1;
    this.changeTheme(this.theme, false);

    if (localStorage.getItem('po-ui-a11y')) {
      this.a11yLevelStorage = localStorage.getItem('po-ui-a11y');
    }

    this.a11yLevel = this.a11yLevelStorage === 'po-a11y-AAA' ? PoThemeA11yEnum.AAA : PoThemeA11yEnum.AA;
    this.changeA11yLevel(this.a11yLevel, false);

    this.themeChangeListenerDefault = () => {
      this.changeTheme(0, false);
      this.theme = 0;
    };

    this.themeChangeListenerDark = () => {
      this.changeTheme(1, false);
      this.theme = 1;
    };

    this.a11yChangeListenerAAA = () => {
      this.changeA11yLevel(PoThemeA11yEnum.AAA, false);
      this.a11yLevel = PoThemeA11yEnum.AAA;
    };

    this.a11yChangeListenerAA = () => {
      this.changeA11yLevel(PoThemeA11yEnum.AA, false);
      this.a11yLevel = PoThemeA11yEnum.AA;
    };

    window.addEventListener('po-a11y-AA', this.a11yChangeListenerAA);
    window.addEventListener('po-a11y-AAA', this.a11yChangeListenerAAA);
    window.addEventListener('po-theme-default', this.themeChangeListenerDefault);
    window.addEventListener('po-theme-dark', this.themeChangeListenerDark);
  }

  ngOnDestroy(): void {
    window.removeEventListener('po-theme-default', this.themeChangeListenerDefault);
    window.removeEventListener('po-theme-dark', this.themeChangeListenerDark);

    window.removeEventListener('po-a11y-AA', this.a11yChangeListenerAA);
    window.removeEventListener('po-a11y-AAA', this.a11yChangeListenerAAA);
  }

  changeA11yLevel(value: PoThemeA11yEnum, dispatchEvent = true) {
    this.poTheme.setCurrentThemeA11y(value);
    value === 'AA'
      ? localStorage.setItem('po-ui-a11y', 'po-a11y-AA')
      : localStorage.setItem('po-ui-a11y', 'po-a11y-AAA');

    if (value === PoThemeA11yEnum.AA) {
      this.poTheme.setA11yDefaultSizeSmall(true);
    }

    if (dispatchEvent) {
      window.dispatchEvent(new Event('po-sample-change-a11y'));
    }
  }

  changeTheme(value: number, dispatchEvent = true) {
    this.poTheme.setTheme(this.poThemeSample, value, this.a11yLevel);
    value === 1
      ? localStorage.setItem('po-ui-theme', 'po-theme-dark')
      : localStorage.setItem('po-ui-theme', 'po-theme-default');
    if (dispatchEvent) {
      window.dispatchEvent(new Event('po-sample-change-theme'));
    }

    if (this.a11yLevel === 'AA') {
      this.poTheme.setA11yDefaultSizeSmall(true);
    }
  }

  createReactiveForm() {
    this.reactiveForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])],
      address: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      number: ['', Validators.compose([Validators.required, Validators.min(1), Validators.max(99999)])],
      email: ['', Validators.required],
      website: ['', Validators.required]
    });
  }

  saveForm() {
    this.reactiveFormModal.open();
  }
}
`),n()()()()(),t(21,"div",10),i(22,"sample-po-theme-labs"),n(),i(23,"hr")),o&2&&(l(5),V("po-icon "+a.sampleCodeButtonIcon),l(),j(" ",a.sampleCodeButtonLabel,""),l(),d("ngClass",W(4,Ce,a.hideSampleCodeTabs)))},dependencies:[U,Ee,P,D,be],encapsulation:2})}return r})();var ge=(()=>{class r{static \u0275fac=function(o){return new(o||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-theme-doc"]],standalone:!1,decls:1105,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","guides/theme-service"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-method-table"],[1,"docs-api-properties-row"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-property-description"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-name-cell"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type"],["pan","",1,"docs-api-property-type","'small'"],["pan","",1,"docs-api-property-type","'medium'"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoThemeColorAction"],[1,"language-javascript"],["pan","",1,"docs-api-property-type","poThemeColorBrand"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","PoThemeColorCategorical"],["pan","",1,"docs-api-property-type","PoThemeColorNeutral"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","{","'70'?:","string;","'80'?:","string;","'90'?:","string;","'95'?:","string;","}"],["pan","",1,"docs-api-property-type","{","'00'?:","string;","'05'?:","string;","'10'?:","string;","'20'?:","string;","'30'?:","string;","}"],["pan","",1,"docs-api-property-type","{","'40'?:","string;","'60'?:","string;","}"],["pan","",1,"docs-api-property-type","PoThemeColor"],["pan","",1,"docs-api-property-type","DynamicProperties"],["pan","",1,"docs-api-property-type","PoThemeTypeEnum"],["pan","",1,"docs-api-property-type","PoThemeActive"],["pan","",1,"docs-api-property-type","PoThemeType"],["pan","",1,"docs-api-property-type","Array<PoThemeType>"]],template:function(o,a){o&1&&(t(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoThemeModule } from '@po-ui/ng-components';"),n()(),t(4,"div",2)(5,"p"),e(6,"M\xF3dulo respons\xE1vel por fornecer servi\xE7os relacionados ao tema PO."),n()(),t(7,"h3",3),e(8,"Services"),n(),t(9,"h4",4)(10,"code",5),e(11,"PoThemeService"),n()(),t(12,"div",2)(13,"p"),e(14,"O "),t(15,"code"),e(16,"PoThemeService"),n(),e(17," possibilita a personaliza\xE7\xE3o das cores do tema padr\xE3o do "),t(18,"code"),e(19,"PO-UI"),n(),e(20,", permitindo a altera\xE7\xE3o dos valores das vari\xE1veis de estilo usadas no CSS padr\xE3o."),n(),t(21,"blockquote")(22,"p"),e(23,"Para saber mais sobre como customizar o tema padr\xE3o verifique o item "),t(24,"a",6),e(25,"Customiza\xE7\xE3o de Temas usando o servi\xE7o PO-UI"),n(),e(26," na aba "),t(27,"code"),e(28,"Guias"),n(),e(29,"."),n()(),t(30,"blockquote")(31,"p"),e(32,"Obs.: N\xE3o est\xE1 documentado aqui e n\xE3o indicamos a customiza\xE7\xE3o das cores de 'feedback' por motivos de acessibilidade e usabilidade."),n()()(),t(33,"h3",7),e(34,"M\xE9todos"),n(),t(35,"table",8)(36,"tr",9)(37,"th",10)(38,"div",11)(39,"h4")(40,"span",12),e(41," setTheme "),n()()()()(),t(42,"tr",13)(43,"td",13)(44,"p"),e(45,"Aplica um tema ao componente de acordo com o tipo de tema e o n\xEDvel de acessibilidade especificados."),n(),t(46,"p"),e(47,"Este m\xE9todo configura o tema do componente com base no objeto "),t(48,"code"),e(49,"themeConfig"),n(),e(50," fornecido, no "),t(51,"code"),e(52,"themeType"),n(),e(53," e no "),t(54,"code"),e(55,"a11yLevel"),n(),e(56,`.
Al\xE9m disso, ele pode opcionalmente salvar a prefer\xEAncia de tema no localStorage, se solicitado.`),n()()()(),t(57,"h5")(58,"b"),e(59,"Par\xE2metros"),n()(),t(60,"table",14)(61,"tr",15)(62,"th",16),e(63,"Nome"),n(),t(64,"th",16),e(65,"Tipo"),n(),t(66,"th",16),e(67,"Descri\xE7\xE3o"),n()(),t(68,"tr",9)(69,"td",17),e(70," themeConfig"),n(),t(71,"td",18)(72,"code",19),e(73," PoTheme "),n()(),t(74,"td",13)(75,"p"),e(76,"Configura\xE7\xE3o de tema a ser aplicada ao componente."),n()()(),t(77,"tr",9)(78,"td",17),e(79," themeType"),n(),t(80,"td",18)(81,"code",19),e(82," PoThemeTypeEnum "),n()(),t(83,"td",13)(84,"p"),e(85,"(Opcional) Tipo de tema, podendo ser 'light' (claro) ou 'dark' (escuro). O tema claro \xE9 o padr\xE3o."),n()()(),t(86,"tr",9)(87,"td",17),e(88," a11yLevel"),n(),t(89,"td",18)(90,"code",19),e(91," PoThemeA11yEnum "),n()(),t(92,"td",13)(93,"p"),e(94,"(Opcional) N\xEDvel de acessibilidade dos componentes, podendo ser AA ou AAA. Padr\xE3o \xE9 AAA."),n()()(),t(95,"tr",9)(96,"td",17),e(97," persistPreference"),n(),t(98,"td",18)(99,"code",19),e(100," boolean "),n()(),t(101,"td",13)(102,"p"),e(103,"(Opcional) Define se a prefer\xEAncia de tema deve ser salva no localStorage para persist\xEAncia. "),t(104,"code"),e(105,"true"),n(),e(106," para salvar, "),t(107,"code"),e(108,"false"),n(),e(109," para n\xE3o salvar."),n()()()(),i(110,"br"),t(111,"table",8)(112,"tr",9)(113,"th",10)(114,"div",11)(115,"h4")(116,"span",12),e(117," getA11yLevel "),n()()()()(),t(118,"tr",13)(119,"td",13)(120,"p"),e(121,`Retorna o n\xEDvel de acessibilidade configurado no tema.
Se n\xE3o estiver configurado, retorna `),t(122,"code"),e(123,"AAA"),n(),e(124," como padr\xE3o."),n()()()(),t(125,"h5")(126,"b"),e(127,"Retorno"),n()(),t(128,"table",14)(129,"tr",15)(130,"th",16),e(131,"Tipo"),n(),t(132,"th",16),e(133,"Descri\xE7\xE3o"),n()(),t(134,"tr",9)(135,"td",18)(136,"code",19),e(137,"PoThemeA11yEnum"),n()(),t(138,"td",13)(139,"p"),e(140,"O n\xEDvel de acessibilidade, que pode ser "),t(141,"code"),e(142,"AA"),n(),e(143," ou "),t(144,"code"),e(145,"AAA"),n(),e(146,"."),n()()()(),i(147,"br"),t(148,"table",8)(149,"tr",9)(150,"th",10)(151,"div",11)(152,"h4")(153,"span",12),e(154," setA11yDefaultSizeSmall "),n()()()()(),t(155,"tr",13)(156,"td",13)(157,"p"),e(158,"Define o tamanho "),t(159,"code"),e(160,"small"),n(),e(161,` como padr\xE3o para componentes de formul\xE1rio que n\xE3o possuem um tamanho definido,
e aplica adensamento compacto nos componentes agrupadores.
Essa configura\xE7\xE3o \xE9 aplicada globalmente apenas quando o n\xEDvel de acessibilidade for `),t(162,"code"),e(163,"AA"),n(),e(164,`.
Caso contr\xE1rio, o tamanho padr\xE3o ser\xE1 `),t(165,"code"),e(166,"medium"),n(),e(167," e o adensamento ser\xE1 desabilitado."),n()()()(),t(168,"h5")(169,"b"),e(170,"Par\xE2metros"),n()(),t(171,"table",14)(172,"tr",15)(173,"th",16),e(174,"Nome"),n(),t(175,"th",16),e(176,"Tipo"),n(),t(177,"th",16),e(178,"Descri\xE7\xE3o"),n()(),t(179,"tr",9)(180,"td",17),e(181," enable"),n(),t(182,"td",18)(183,"code",19),e(184," boolean "),n()(),t(185,"td",13)(186,"p"),e(187,"Habilita ou desabilita o tamanho "),t(188,"code"),e(189,"small"),n(),e(190," globalmente."),n()()()(),i(191,"br"),t(192,"table",8)(193,"tr",9)(194,"th",10)(195,"div",11)(196,"h4")(197,"span",12),e(198," setA11yDensityMode "),n()()()()(),t(199,"tr",13)(200,"td",13)(201,"p"),e(202,"Aplica o modo de adensamento compacto ("),t(203,"code"),e(204,"small"),n(),e(205,") ou espa\xE7oso ("),t(206,"code"),e(207,"medium"),n(),e(208,`) para os componentes agrupadores,
independentemente do n\xEDvel de acessibilidade.`),n()()()(),t(209,"h5")(210,"b"),e(211,"Par\xE2metros"),n()(),t(212,"table",14)(213,"tr",15)(214,"th",16),e(215,"Nome"),n(),t(216,"th",16),e(217,"Tipo"),n(),t(218,"th",16),e(219,"Descri\xE7\xE3o"),n()(),t(220,"tr",9)(221,"td",17),e(222," mode"),n(),t(223,"td",18)(224,"code",20),e(225," 'small' "),n(),t(226,"code",21),e(227," 'medium' "),n()(),t(228,"td",13)(229,"p"),e(230,"Define o modo de densidade: "),t(231,"code"),e(232,"small"),n(),e(233," para compacto, "),t(234,"code"),e(235,"medium"),n(),e(236," para espa\xE7oso."),n()()()(),i(237,"br"),t(238,"table",8)(239,"tr",9)(240,"th",10)(241,"div",11)(242,"h4")(243,"span",12),e(244," persistThemeActive "),n()()()()(),t(245,"tr",13)(246,"td",13)(247,"p"),e(248,"Persiste e define o tema do aplicativo com base nos dados armazenados."),n(),t(249,"p"),e(250,"Este m\xE9todo recupera os dados do tema armazenados e os aplica ao aplicativo."),n()()()(),t(251,"h5")(252,"b"),e(253,"Retorno"),n()(),t(254,"table",14)(255,"tr",15)(256,"th",16),e(257,"Tipo"),n(),t(258,"th",16),e(259,"Descri\xE7\xE3o"),n()(),t(260,"tr",9)(261,"td",18)(262,"code",19),e(263,"PoTheme"),n()(),t(264,"td",13)(265,"p"),e(266,"Recupera o tema armazenado."),n()()()(),i(267,"br"),t(268,"table",8)(269,"tr",9)(270,"th",10)(271,"div",11)(272,"h4")(273,"span",12),e(274," changeCurrentThemeType "),n()()()()(),t(275,"tr",13)(276,"td",13)(277,"p"),e(278,"Altera o tipo do tema armazenado e aplica os novos estilos ao documento."),n(),t(279,"p"),e(280,"Este m\xE9todo altera o tipo do tema armazenado ativo (light/dark)"),n()()()(),t(281,"h5")(282,"b"),e(283,"Par\xE2metros"),n()(),t(284,"table",14)(285,"tr",15)(286,"th",16),e(287,"Nome"),n(),t(288,"th",16),e(289,"Tipo"),n(),t(290,"th",16),e(291,"Descri\xE7\xE3o"),n()(),t(292,"tr",9)(293,"td",17),e(294," themeType"),n(),t(295,"td",18)(296,"code",19),e(297," PoThemeTypeEnum "),n()(),t(298,"td",13)(299,"p"),e(300,"O tipo de tema a ser aplicado, light ou dark."),n()()()(),i(301,"br"),t(302,"table",8)(303,"tr",9)(304,"th",10)(305,"div",11)(306,"h4")(307,"span",12),e(308," cleanThemeActive "),n()()()()(),t(309,"tr",13)(310,"td",13)(311,"p"),e(312,`M\xE9todo remove o tema armazenado e limpa todos os estilos de tema
aplicados ao documento.`),n()()()(),t(313,"h5")(314,"b"),e(315,"Par\xE2metros"),n()(),t(316,"table",14)(317,"tr",15)(318,"th",16),e(319,"Nome"),n(),t(320,"th",16),e(321,"Tipo"),n(),t(322,"th",16),e(323,"Descri\xE7\xE3o"),n()(),t(324,"tr",9)(325,"td",17),e(326," persistPreference"),n(),t(327,"td",18)(328,"code",19),e(329," boolean "),n()(),t(330,"td",13)(331,"p"),e(332,"(Opcional) Define se a prefer\xEAncia de tema n\xE3o deve ser mantida no localStorage para persist\xEAncia. "),t(333,"code"),e(334,"true"),n(),e(335," para remover, "),t(336,"code"),e(337,"false"),n(),e(338," para manter."),n()()()(),i(339,"br"),t(340,"table",8)(341,"tr",9)(342,"th",10)(343,"div",11)(344,"h4")(345,"span",12),e(346," getThemeActive "),n()()()()(),t(347,"tr",13)(348,"td",13)(349,"p"),e(350,"Retorna o tema ativo como um observable. Este m\xE9todo funcionar\xE1 apenas se o tema estiver armazenado no "),t(351,"code"),e(352,"localStorage"),n(),e(353,"."),n()()()(),t(354,"h5")(355,"b"),e(356,"Retorno"),n()(),t(357,"table",14)(358,"tr",15)(359,"th",16),e(360,"Tipo"),n(),t(361,"th",16),e(362,"Descri\xE7\xE3o"),n()(),t(363,"tr",9)(364,"td",18)(365,"code",19),e(366,"PoTheme"),n()(),t(367,"td",13)(368,"p"),e(369,"Tema ativo."),n()()()(),i(370,"br"),t(371,"table",8)(372,"tr",9)(373,"th",10)(374,"div",11)(375,"h4")(376,"span",12),e(377," setDefaultTheme "),n()()()()(),t(378,"tr",13)(379,"td",13)(380,"p"),e(381,'Define o tema atual como o tema "PoUI Padr\xE3o".'),n()()()(),t(382,"h5")(383,"b"),e(384,"Par\xE2metros"),n()(),t(385,"table",14)(386,"tr",15)(387,"th",16),e(388,"Nome"),n(),t(389,"th",16),e(390,"Tipo"),n(),t(391,"th",16),e(392,"Descri\xE7\xE3o"),n()(),t(393,"tr",9)(394,"td",17),e(395," type"),n(),t(396,"td",18)(397,"code",19),e(398," PoThemeTypeEnum "),n()(),t(399,"td",13)(400,"p"),e(401,"O tipo de Tema a ser aplicado, light / dark."),n()()()(),i(402,"br"),t(403,"table",8)(404,"tr",9)(405,"th",10)(406,"div",11)(407,"h4")(408,"span",12),e(409," setThemeType "),n()()()()(),t(410,"tr",13)(411,"td",13)(412,"p"),e(413,"Define o tipo (light/dark) quando um tema est\xE1 sendo aplicado."),n()()()(),t(414,"h5")(415,"b"),e(416,"Par\xE2metros"),n()(),t(417,"table",14)(418,"tr",15)(419,"th",16),e(420,"Nome"),n(),t(421,"th",16),e(422,"Tipo"),n(),t(423,"th",16),e(424,"Descri\xE7\xE3o"),n()(),t(425,"tr",9)(426,"td",17),e(427," theme"),n(),t(428,"td",18)(429,"code",19),e(430," PoTheme "),n()(),t(431,"td",13)(432,"p"),e(433,"Objeto contendo as defini\xE7\xF5es de tema a serem aplicadas no componente."),n()()(),t(434,"tr",9)(435,"td",17),e(436," themeType"),n(),t(437,"td",18)(438,"code",19),e(439," PoThemeTypeEnum "),n()(),t(440,"td",13)(441,"p"),e(442,"(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padr\xE3o, o tema claro \xE9 aplicado."),n()()()(),i(443,"br"),t(444,"table",8)(445,"tr",9)(446,"th",10)(447,"div",11)(448,"h4")(449,"span",12),e(450," setCurrentThemeType "),n()()()()(),t(451,"tr",13)(452,"td",13)(453,"p"),e(454,"Define o tipo (light/dark) para um tema j\xE1 ativo."),n()()()(),t(455,"h5")(456,"b"),e(457,"Par\xE2metros"),n()(),t(458,"table",14)(459,"tr",15)(460,"th",16),e(461,"Nome"),n(),t(462,"th",16),e(463,"Tipo"),n(),t(464,"th",16),e(465,"Descri\xE7\xE3o"),n()(),t(466,"tr",9)(467,"td",17),e(468," themeType"),n(),t(469,"td",18)(470,"code",19),e(471," PoThemeTypeEnum "),n()(),t(472,"td",13)(473,"p"),e(474,"(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padr\xE3o, o tema claro \xE9 aplicado."),n()()()(),i(475,"br"),t(476,"table",8)(477,"tr",9)(478,"th",10)(479,"div",11)(480,"h4")(481,"span",12),e(482," setThemeA11y "),n()()()()(),t(483,"tr",13)(484,"td",13)(485,"p"),e(486,"Define o n\xEDvel de acessibilidade quando um tema est\xE1 sendo aplicado."),n()()()(),t(487,"h5")(488,"b"),e(489,"Par\xE2metros"),n()(),t(490,"table",14)(491,"tr",15)(492,"th",16),e(493,"Nome"),n(),t(494,"th",16),e(495,"Tipo"),n(),t(496,"th",16),e(497,"Descri\xE7\xE3o"),n()(),t(498,"tr",9)(499,"td",17),e(500," theme"),n(),t(501,"td",18)(502,"code",19),e(503," PoTheme "),n()(),t(504,"td",13)(505,"p"),e(506,"Objeto contendo as defini\xE7\xF5es de tema a serem aplicadas no componente."),n()()(),t(507,"tr",9)(508,"td",17),e(509," a11y"),n(),t(510,"td",18)(511,"code",19),e(512," PoThemeA11yEnum "),n()(),t(513,"td",13)(514,"p"),e(515,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),n()()()(),i(516,"br"),t(517,"table",8)(518,"tr",9)(519,"th",10)(520,"div",11)(521,"h4")(522,"span",12),e(523," setCurrentThemeA11y "),n()()()()(),t(524,"tr",13)(525,"td",13)(526,"p"),e(527,"Define o n\xEDvel de acessibilidade para um tema j\xE1 ativo."),n()()()(),t(528,"h5")(529,"b"),e(530,"Par\xE2metros"),n()(),t(531,"table",14)(532,"tr",15)(533,"th",16),e(534,"Nome"),n(),t(535,"th",16),e(536,"Tipo"),n(),t(537,"th",16),e(538,"Descri\xE7\xE3o"),n()(),t(539,"tr",9)(540,"td",17),e(541," a11y"),n(),t(542,"td",18)(543,"code",19),e(544," PoThemeA11yEnum "),n()(),t(545,"td",13)(546,"p"),e(547,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),n()()()(),i(548,"br"),t(549,"h3"),e(550,"Interfaces"),n(),t(551,"h4",22)(552,"code",5),e(553,"PoThemeColor"),n()(),t(554,"div",2)(555,"p"),e(556,"Interface para representar as cores do tema."),n()(),t(557,"h4",7),e(558,"Propriedades"),n(),t(559,"table",14)(560,"tr",15)(561,"th",16),e(562,"Nome"),n(),t(563,"th",16),e(564,"Tipo"),n(),t(565,"th",16),e(566,"Descri\xE7\xE3o"),n()(),t(567,"tr",9)(568,"td",17)(569,"div",11)(570,"span",12),e(571," action"),i(572,"br"),n()()(),t(573,"td",18)(574,"code",23),e(575,"PoThemeColorAction"),n()(),t(576,"td",13)(577,"em")(578,"strong"),e(579,"(opcional)"),n()(),t(580,"p"),e(581,"Cores da Action a serem aplicadas."),n(),t(582,"p"),e(583,"Exemplo de uso:"),n(),t(584,"pre")(585,"code",24),e(586,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
 hover: 'var(--color-brand-01-dark)',
 pressed: 'var(--color-brand-01-darker)',
 disabled: 'var(--color-neutral-light-30)',
 focus: 'var(--color-brand-01-darkest)'
}
`),n()()()(),t(587,"tr",9)(588,"td",17)(589,"div",11)(590,"span",12),e(591," brand"),i(592,"br"),n()()(),t(593,"td",18)(594,"code",25),e(595,"poThemeColorBrand"),n()(),t(596,"td",13)(597,"em")(598,"strong"),e(599,"(opcional)"),n()(),t(600,"p"),e(601,"Cores da Brand a serem aplicadas."),n(),t(602,"p"),e(603,"Exemplo de uso:"),n(),t(604,"pre")(605,"code",26),e(606,`PoThemeColor.brand = {
 01: PoThemeColorTone,
 02: PoThemeColorTone,
 03: PoThemeColorTone
}
`),n()()()(),t(607,"tr",9)(608,"td",17)(609,"div",11)(610,"span",12),e(611," categorical"),i(612,"br"),n()()(),t(613,"td",18)(614,"code",27),e(615,"PoThemeColorCategorical"),n()(),t(616,"td",13)(617,"em")(618,"strong"),e(619,"(opcional)"),n()(),t(620,"p"),e(621,"Cores da Categorical a serem aplicadas."),n(),t(622,"p"),e(623,"Exemplo de uso:"),n(),t(624,"pre")(625,"code",26),e(626,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),n()()()(),t(627,"tr",9)(628,"td",17)(629,"div",11)(630,"span",12),e(631," categorical-overlay"),i(632,"br"),n()()(),t(633,"td",18)(634,"code",27),e(635,"PoThemeColorCategorical"),n()(),t(636,"td",13)(637,"em")(638,"strong"),e(639,"(opcional)"),n()(),t(640,"p"),e(641,"Cores da Categorical a serem aplicadas."),n(),t(642,"p"),e(643,"Exemplo de uso:"),n(),t(644,"pre")(645,"code",26),e(646,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),n()()()(),t(647,"tr",9)(648,"td",17)(649,"div",11)(650,"span",12),e(651," neutral"),i(652,"br"),n()()(),t(653,"td",18)(654,"code",28),e(655,"PoThemeColorNeutral"),n()(),t(656,"td",13)(657,"em")(658,"strong"),e(659,"(opcional)"),n()(),t(660,"p"),e(661,"Cores Neutrals a serem aplicadas."),n(),t(662,"p"),e(663,"Exemplo de uso:"),n(),t(664,"pre")(665,"code",26),e(666,`PoThemeColor.neutral = {
 light: { '00': string, '05': string, '10': string, '20': string, '30': string },
 mid: { '40': string, '60': string },
 dark: { '70': string, '80': string, '90': string, '95': string },
}
`),n()()()()(),t(667,"h4",22)(668,"code",5),e(669,"PoThemeColorAction"),n()(),t(670,"div",2)(671,"p"),e(672,"Interface para as cores de a\xE7\xE3o do tema."),n()(),t(673,"h4",7),e(674,"Propriedades"),n(),t(675,"table",14)(676,"tr",15)(677,"th",16),e(678,"Nome"),n(),t(679,"th",16),e(680,"Tipo"),n(),t(681,"th",16),e(682,"Descri\xE7\xE3o"),n()(),t(683,"tr",9)(684,"td",17)(685,"div",11)(686,"span",12),e(687," default"),i(688,"br"),n()()(),t(689,"td",18)(690,"code",29),e(691,"string"),n()(),t(692,"td",13)(693,"em")(694,"strong"),e(695,"(opcional)"),n()(),t(696,"p"),e(697,"Cores da Action 'Default'."),n(),t(698,"p"),e(699,"Exemplo de uso:"),n(),t(700,"pre")(701,"code",26),e(702,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
}
`),n()()()(),t(703,"tr",9)(704,"td",17)(705,"div",11)(706,"span",12),e(707," disabled"),i(708,"br"),n()()(),t(709,"td",18)(710,"code",29),e(711,"string"),n()(),t(712,"td",13)(713,"em")(714,"strong"),e(715,"(opcional)"),n()(),t(716,"p"),e(717,"Cores da Action de 'disabled'."),n(),t(718,"p"),e(719,"Exemplo de uso:"),n(),t(720,"pre")(721,"code",26),e(722,`PoThemeColor.action = {
 disabled: 'var(--color-neutral-light-30)',
}
`),n()()()(),t(723,"tr",9)(724,"td",17)(725,"div",11)(726,"span",12),e(727," focus"),i(728,"br"),n()()(),t(729,"td",18)(730,"code",29),e(731,"string"),n()(),t(732,"td",13)(733,"em")(734,"strong"),e(735,"(opcional)"),n()(),t(736,"p"),e(737,"Cores da Action para 'focus'."),n(),t(738,"p"),e(739,"Exemplo de uso:"),n(),t(740,"pre")(741,"code",26),e(742,`PoThemeColor.action = {
 focus: 'var(--color-brand-01-darkest)'
}
`),n()()()(),t(743,"tr",9)(744,"td",17)(745,"div",11)(746,"span",12),e(747," hover"),i(748,"br"),n()()(),t(749,"td",18)(750,"code",29),e(751,"string"),n()(),t(752,"td",13)(753,"em")(754,"strong"),e(755,"(opcional)"),n()(),t(756,"p"),e(757,"Cores da Action para 'hover'."),n(),t(758,"p"),e(759,"Exemplo de uso:"),n(),t(760,"pre")(761,"code",26),e(762,`PoThemeColor.action = {
 hover: 'var(--color-brand-01-dark)',
}
`),n()()()(),t(763,"tr",9)(764,"td",17)(765,"div",11)(766,"span",12),e(767," pressed"),i(768,"br"),n()()(),t(769,"td",18)(770,"code",29),e(771,"string"),n()(),t(772,"td",13)(773,"em")(774,"strong"),e(775,"(opcional)"),n()(),t(776,"p"),e(777,"Cores da Action para 'pressed'."),n(),t(778,"p"),e(779,"Exemplo de uso:"),n(),t(780,"pre")(781,"code",26),e(782,`PoThemeColor.action = {
 pressed: 'var(--color-brand-01-darker)',
}
`),n()()()()(),t(783,"h4",22)(784,"code",5),e(785,"PoThemeColorNeutral"),n()(),t(786,"div",2)(787,"p"),e(788,"Interface para as cores neutras do tema."),n()(),t(789,"h4",7),e(790,"Propriedades"),n(),t(791,"table",14)(792,"tr",15)(793,"th",16),e(794,"Nome"),n(),t(795,"th",16),e(796,"Tipo"),n(),t(797,"th",16),e(798,"Descri\xE7\xE3o"),n()(),t(799,"tr",9)(800,"td",17)(801,"div",11)(802,"span",12),e(803," dark"),i(804,"br"),n()()(),t(805,"td",18)(806,"code",30),e(807,`{ '70'?: string; '80'?: string; '90'?: string; '95'?: string;
}`),n()(),t(808,"td",13)(809,"em")(810,"strong"),e(811,"(opcional)"),n()(),t(812,"p"),e(813,"Cores Neutrals do tipo 'dark'."),n(),t(814,"p"),e(815,"Exemplo de uso:"),n(),t(816,"pre")(817,"code",26),e(818,`PoThemeColor.neutral.dark = {
 '70': '#4a5c60',
 '80': '#2c3739',
 '90': '#1d2426',
 '95': '#0b0e0e',
}
`),n()()()(),t(819,"tr",9)(820,"td",17)(821,"div",11)(822,"span",12),e(823," light"),i(824,"br"),n()()(),t(825,"td",18)(826,"code",31),e(827,`{ '00'?: string; '05'?: string; '10'?: string; '20'?: string; '30'?: string;
}`),n()(),t(828,"td",13)(829,"em")(830,"strong"),e(831,"(opcional)"),n()(),t(832,"p"),e(833,"Cores Neutrals do tipo 'light'."),n(),t(834,"p"),e(835,"Exemplo de uso:"),n(),t(836,"pre")(837,"code",26),e(838,`PoThemeColor.neutral.light = {
 '00': '#ffffff',
 '05': '#fbfbfb',
 '10': '#eceeee',
 '20': '#dadedf',
 '30': '#b6bdbf'
}
`),n()()()(),t(839,"tr",9)(840,"td",17)(841,"div",11)(842,"span",12),e(843," mid"),i(844,"br"),n()()(),t(845,"td",18)(846,"code",32),e(847,`{ '40'?: string; '60'?: string;
}`),n()(),t(848,"td",13)(849,"em")(850,"strong"),e(851,"(opcional)"),n()(),t(852,"p"),e(853,"Cores Neutrals do tipo 'mid'."),n(),t(854,"p"),e(855,"Exemplo de uso:"),n(),t(856,"pre")(857,"code",26),e(858,`PoThemeColor.neutral.mid = {
 '40': '#9da7a9',
 '60': '#6e7c7f',
}
`),n()()()()(),t(859,"h4",22)(860,"code",5),e(861,"PoThemeTokens"),n()(),t(862,"div",2)(863,"p"),e(864,"Interface para o tema da aplica\xE7\xE3o."),n()(),t(865,"h4",22)(866,"code",5),e(867,"PoThemeToken"),n()(),t(868,"div",2)(869,"p"),e(870,"Interface para os tokens do Tema."),n()(),t(871,"h4",7),e(872,"Propriedades"),n(),t(873,"table",14)(874,"tr",15)(875,"th",16),e(876,"Nome"),n(),t(877,"th",16),e(878,"Tipo"),n(),t(879,"th",16),e(880,"Descri\xE7\xE3o"),n()(),t(881,"tr",9)(882,"td",17)(883,"div",11)(884,"span",12),e(885," color"),i(886,"br"),n()()(),t(887,"td",18)(888,"code",33),e(889,"PoThemeColor"),n()(),t(890,"td",13)(891,"em")(892,"strong"),e(893,"(opcional)"),n()(),t(894,"p"),e(895,"Tokens do tipo 'color'"),n()()(),t(896,"tr",9)(897,"td",17)(898,"div",11)(899,"span",12),e(900," onRoot"),i(901,"br"),n()()(),t(902,"td",18)(903,"code",34),e(904,"DynamicProperties"),n()(),t(905,"td",13)(906,"em")(907,"strong"),e(908,"(opcional)"),n()(),t(909,"p"),e(910,`Tokens do tipo 'onRoot'
Esta propriedade adicionar\xE1 todos os tokens passados e adicionado direto no `),t(911,"code"),e(912,":root"),n()(),t(913,"p"),e(914,"Exemplo de uso:"),n(),t(915,"pre")(916,"code",26),e(917,`onRoot: {
  '--color-page-background-color-page': '#121212',
  '--color-toolbar-color-badge-text': 'var(--color-neutral-dark-95)',
},
`),n()()()(),t(918,"tr",9)(919,"td",17)(920,"div",11)(921,"span",12),e(922," perComponent"),i(923,"br"),n()()(),t(924,"td",18)(925,"code",34),e(926,"DynamicProperties"),n()(),t(927,"td",13)(928,"em")(929,"strong"),e(930,"(opcional)"),n()(),t(931,"p"),e(932,"Tokens do tipo 'perComponent'"),n(),t(933,"p"),e(934,"Exemplo de uso:"),n(),t(935,"pre")(936,"code",26),e(937,`perComponent: {
  'po-badge': {
    '--color': 'var(--color-neutral-dark-95)',
  },
  'po-container': {
    '--background': '#121212',
  },
},
`),n()()()()(),t(938,"h4",22)(939,"code",5),e(940,"PoTheme"),n()(),t(941,"div",2)(942,"p"),e(943,"Interface para o m\xE9todo "),t(944,"code"),e(945,"setTheme()"),n(),e(946,"."),n()(),t(947,"h4",7),e(948,"Propriedades"),n(),t(949,"table",14)(950,"tr",15)(951,"th",16),e(952,"Nome"),n(),t(953,"th",16),e(954,"Tipo"),n(),t(955,"th",16),e(956,"Descri\xE7\xE3o"),n()(),t(957,"tr",9)(958,"td",17)(959,"div",11)(960,"span",12),e(961," active"),i(962,"br"),n()()(),t(963,"td",18)(964,"code",35),e(965,"PoThemeTypeEnum "),n(),t(966,"code",36),e(967," PoThemeActive"),n()(),t(968,"td",13)(969,"em")(970,"strong"),e(971,"(opcional)"),n()(),t(972,"p"),e(973,"Tipo e n\xEDvel de acessibilidade de tema ativo"),n()()(),t(974,"tr",9)(975,"td",17)(976,"div",11)(977,"span",12),e(978," name"),i(979,"br"),n()()(),t(980,"td",18)(981,"code",29),e(982,"string"),n()(),t(983,"td",13)(984,"p"),e(985,`Nome para o tema:
Ex.: default, totvs, sunset...`),n()()(),t(986,"tr",9)(987,"td",17)(988,"div",11)(989,"span",12),e(990," type"),i(991,"br"),n()()(),t(992,"td",18)(993,"code",37),e(994,"PoThemeType "),n(),t(995,"code",38),e(996," Array<PoThemeType>"),n()(),t(997,"td",13)(998,"p"),e(999,"Tipo de tema:"),n(),t(1e3,"ul")(1001,"li"),e(1002,"light"),n(),t(1003,"li"),e(1004,"dark"),n()()()()(),t(1005,"h3"),e(1006,"Enums"),n(),t(1007,"h4",4)(1008,"code",5),e(1009,"PoThemeA11yEnum"),n()(),t(1010,"div",2)(1011,"p"),e(1012,"Enum para configurar o n\xEDvel de acessibilidade dos componentes atrav\xE9s do servi\xE7o de tema."),n(),t(1013,"pre")(1014,"code"),e(1015,`import { PoThemeA11yEnum } from '@po-ui/theme';

// Definindo o n\xEDvel de acessibilidade ao configurar as cores e o tipo do tema (light | dark)
themeService.setTheme(...theme, ...type, PoThemeA11yEnum.AA);

// Definindo o n\xEDvel de acessibilidade ao configurar apenas as cores do tema
themeService.setThemeA11y(...theme, PoThemeA11yEnum.AAA);

// Alterando o n\xEDvel de acessibilidade com as cores do tema j\xE1 definidas
themeService.setCurrentThemeA11y(PoThemeA11yEnum.AAA);
`),n()()(),t(1016,"h4",7),e(1017,"Propriedades"),n(),t(1018,"table",14)(1019,"tr",15)(1020,"th",16),e(1021,"Nome"),n(),t(1022,"th",16),e(1023,"Descri\xE7\xE3o"),n()(),t(1024,"tr",9)(1025,"td",17)(1026,"div",11)(1027,"span",12),e(1028," AA"),i(1029,"br"),n()()(),t(1030,"td",13)(1031,"p"),e(1032,"N\xEDvel de acessibilidade AA."),n(),t(1033,"ul")(1034,"li"),e(1035,"Define a espessura do "),t(1036,"code"),e(1037,"outline"),n(),e(1038," para "),t(1039,"strong"),e(1040,"2px"),n(),e(1041,"."),n(),t(1042,"li"),e(1043,"Disponibiliza o tamanho "),t(1044,"code"),e(1045,"small"),n(),e(1046,` para componentes de formul\xE1rio (buttons, inputs, checkboxes, radios e switches)
conforme suas documenta\xE7\xF5es.`),n()()()(),t(1047,"tr",9)(1048,"td",17)(1049,"div",11)(1050,"span",12),e(1051," AAA"),i(1052,"br"),n()()(),t(1053,"td",13)(1054,"p"),e(1055,"N\xEDvel de acessibilidade AAA."),n(),t(1056,"ul")(1057,"li"),e(1058,"Define a espessura do "),t(1059,"code"),e(1060,"outline"),n(),e(1061," para "),t(1062,"strong"),e(1063,"4px"),n(),e(1064,"."),n(),t(1065,"li"),e(1066,"N\xE3o disponibiliza o tamanho "),t(1067,"code"),e(1068,"small"),n(),e(1069," para componentes de formul\xE1rio."),n()()()()(),t(1070,"h4",4)(1071,"code",5),e(1072,"PoThemeTypeEnum"),n()(),t(1073,"div",2)(1074,"p"),e(1075,"Enum utilizado para configurar o tipo de tema suportado, \xE9 poss\xEDvel alternar entre os tipos definidos."),n(),t(1076,"pre")(1077,"code"),e(1078,`import { PoThemeTypeEnum } from '@po-ui/theme';

// Definindo o tipo de tema como claro
themeService.setTheme(...theme, PoThemeTypeEnum.light);

// Definindo o tipo de tema como escuro
themeService.setTheme(...theme, PoThemeTypeEnum.dark);

// Alterando o tipo do tema para um tema j\xE1 aplicado
themeService.setCurrentThemeType(PoThemeTypeEnum.dark);
`),n()()(),t(1079,"h4",7),e(1080,"Propriedades"),n(),t(1081,"table",14)(1082,"tr",15)(1083,"th",16),e(1084,"Nome"),n(),t(1085,"th",16),e(1086,"Descri\xE7\xE3o"),n()(),t(1087,"tr",9)(1088,"td",17)(1089,"div",11)(1090,"span",12),e(1091," light"),i(1092,"br"),n()()(),t(1093,"td",13)(1094,"p"),e(1095,"Define o tema como claro."),n()()(),t(1096,"tr",9)(1097,"td",17)(1098,"div",11)(1099,"span",12),e(1100," dark"),i(1101,"br"),n()()(),t(1102,"td",13)(1103,"p"),e(1104,"Define o tema como escuro."),n()()()()())},encapsulation:2})}return r})();var fe=(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=1;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,o){this.route=m,this.router=o}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let o=m.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(o){return new(o||r)(b($),b(ee))};static \u0275cmp=S({type:r,selectors:[["ng-component"]],standalone:!1,decls:6,vars:4,consts:[["p-title","Theme",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,a){o&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),E("p-click",function(){return a.changeTab("doc")}),i(3,"sample-po-theme-doc"),n(),t(4,"po-tab",3),E("p-click",function(){return a.changeTab("web")}),i(5,"sample-po-theme-labs-view"),n()()()),o&2&&(d("p-actions",a.actions),l(2),d("p-active",a.activeTab==="doc"),l(2),d("p-hide",a.hidePoWebSample)("p-active",a.activeTab==="web"))},dependencies:[he,P,D,xe,ge],encapsulation:2})}return r})();var Le=[{path:"",component:fe}],Te=(()=>{class r{static \u0275fac=function(o){return new(o||r)};static \u0275mod=y({type:r});static \u0275inj=A({imports:[F.forChild(Le),F]})}return r})();var Xe=(()=>{class r{static \u0275fac=function(o){return new(o||r)};static \u0275mod=y({type:r});static \u0275inj=A({imports:[Se,Te]})}return r})();export{Xe as DocPoThemeModule};
