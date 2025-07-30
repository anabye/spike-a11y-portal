import{o as Ee,p as Se}from"./chunk-DTVQ7I47.js";import{A as I,Ab as D,B as C,Db as ue,F as oe,Fa as le,Ga as de,I as re,La as pe,Pa as se,Wa as ce,g as v,ja as me,nb as he,t as te,u as ne,v as ie,w as N,x as _,y as ae,z as M,zb as P}from"./chunk-2ZA6XFGZ.js";import{Ac as J,Ba as V,Bc as K,Ec as X,Fa as t,Fc as Y,Ga as n,Ha as i,Jc as Z,La as O,M as A,Ma as E,Oc as $,Qc as ee,Sc as F,T as b,U as g,Ua as R,Va as q,Wa as z,Ya as e,_a as j,a as c,ab as L,b as u,bb as k,cb as w,db as B,fb as W,ha as l,ia as x,oa as S,pa as y,rb as G,uc as p,vb as U,xc as H,ya as d,yc as Q}from"./chunk-WFKG4FNY.js";var Ae=["reactiveFormData"],xe=(()=>{class r{cdr;fb;poTheme;reactiveFormModal;a11yLevel;a11yLevelStorage="po-a11y-AAA";reactiveForm;theme=0;themeStorage="po-theme-default";a11yChangeListenerAAA;a11yChangeListenerAA;themeChangeListenerDark;themeChangeListenerDefault;a11yLevelOptions=[{label:"AA",value:"AA"},{label:"AAA",value:"AAA"}];themeOptions=[{label:"Light",value:0},{label:"Dark",value:1}];modalPrimaryAction={action:()=>this.reactiveFormModal.close(),label:"Close"};poThemeSample={name:"po-theme",type:{light:{color:{brand:{"01":{lightest:"#f2eaf6",lighter:"#d9c2e5",light:"#bd94d1",base:"#753399",dark:"#5b1c7d",darker:"#400e58",darkest:"#260538"},"02":{base:"#b92f72"},"03":{base:"#ffd464"}},action:u(c({},ne),{disabled:"var(--color-neutral-mid-40)"}),feedback:u(c({},N),{info:u(c({},N.info),{base:"#0079b8"})}),neutral:c({},ie)},onRoot:u(c({},_.onRoot),{"--color-page-background-color-page":"var(--color-neutral-light-05)"}),perComponent:c({},_.perComponent)},dark:{color:{brand:{"01":{darkest:"#f2eaf6",darker:"#d9c2e5",dark:"#bd94d1",base:"#753399",light:"#5b1c7d",lighter:"#400e58",lightest:"#260538"},"02":{base:"#b92f72"},"03":{base:"#ffd464"}},action:u(c({},ae),{disabled:"var(--color-neutral-mid-40)"}),feedback:u(c({},M),{info:u(c({},M.info),{base:"#0079b8"})}),neutral:{light:{"00":"#1c1c1c","05":"#202020",10:"#2b2b2b",20:"#3b3b3b",30:"#5a5a5a"},mid:{40:"#7c7c7c",60:"#a1a1a1"},dark:{70:"#c1c1c1",80:"#d9d9d9",90:"#eeeeee",95:"#fbfbfb"}}},onRoot:u(c({},I.onRoot),{"--color-page-background-color-page":"var(--color-neutral-light-05)"}),perComponent:c({},I.perComponent)}},active:te.light};constructor(m,o,a){this.cdr=m,this.fb=o,this.poTheme=a;let s=this.poTheme.applyTheme();this.a11yLevel=this.poTheme.getA11yLevel(),s?this.theme=s.active||0:(this.poTheme.setTheme(this.poThemeSample,this.theme,this.a11yLevel),this.theme=this.poThemeSample.active),this.createReactiveForm(),this.a11yLevel==="AA"&&this.poTheme.setA11yDefaultSizeSmall(!0)}ngOnInit(){localStorage.getItem("po-ui-theme")&&(this.themeStorage=localStorage.getItem("po-ui-theme")),this.theme=this.themeStorage==="po-theme-default"?0:1,this.changeTheme(this.theme,!1),localStorage.getItem("po-ui-a11y")&&(this.a11yLevelStorage=localStorage.getItem("po-ui-a11y")),this.a11yLevel=this.a11yLevelStorage==="po-a11y-AAA"?v.AAA:v.AA,this.changeA11yLevel(this.a11yLevel,!1),this.themeChangeListenerDefault=()=>{this.changeTheme(0,!1),this.theme=0},this.themeChangeListenerDark=()=>{this.changeTheme(1,!1),this.theme=1},this.a11yChangeListenerAAA=()=>{this.changeA11yLevel(v.AAA,!1),this.a11yLevel=v.AAA},this.a11yChangeListenerAA=()=>{this.changeA11yLevel(v.AA,!1),this.a11yLevel=v.AA},window.addEventListener("po-a11y-AA",this.a11yChangeListenerAA),window.addEventListener("po-a11y-AAA",this.a11yChangeListenerAAA),window.addEventListener("po-theme-default",this.themeChangeListenerDefault),window.addEventListener("po-theme-dark",this.themeChangeListenerDark)}ngOnDestroy(){window.removeEventListener("po-theme-default",this.themeChangeListenerDefault),window.removeEventListener("po-theme-dark",this.themeChangeListenerDark),window.removeEventListener("po-a11y-AA",this.a11yChangeListenerAA),window.removeEventListener("po-a11y-AAA",this.a11yChangeListenerAAA)}changeA11yLevel(m,o=!0){this.poTheme.setCurrentThemeA11y(m),m==="AA"?localStorage.setItem("po-ui-a11y","po-a11y-AA"):localStorage.setItem("po-ui-a11y","po-a11y-AAA"),m===v.AA&&this.poTheme.setA11yDefaultSizeSmall(!0),o&&window.dispatchEvent(new Event("po-sample-change-a11y"))}changeTheme(m,o=!0){this.poTheme.setTheme(this.poThemeSample,m,this.a11yLevel),m===1?localStorage.setItem("po-ui-theme","po-theme-dark"):localStorage.setItem("po-ui-theme","po-theme-default"),o&&window.dispatchEvent(new Event("po-sample-change-theme")),this.a11yLevel==="AA"&&this.poTheme.setA11yDefaultSizeSmall(!0)}createReactiveForm(){this.reactiveForm=this.fb.group({name:["",p.compose([p.required,p.minLength(5),p.maxLength(30)])],address:["",p.compose([p.required,p.minLength(5),p.maxLength(50)])],number:["",p.compose([p.required,p.min(1),p.max(99999)])],email:["",p.required],website:["",p.required]})}saveForm(){this.reactiveFormModal.open()}static \u0275fac=function(o){return new(o||r)(x(G),x(Z),x(C))};static \u0275cmp=S({type:r,selectors:[["sample-po-theme-labs"]],viewQuery:function(o,a){if(o&1&&R(Ae,7),o&2){let s;q(s=z())&&(a.reactiveFormModal=s.first)}},standalone:!1,features:[B([C])],decls:22,vars:12,consts:[["reactiveFormData",""],["p-title","Example"],[3,"formGroup"],["formControlName","name","p-clean","","p-icon","an an-user","p-label","Customer name",1,"po-lg-6"],["formControlName","email","p-label","Email","p-clean","",1,"po-lg-6"],["formControlName","address","p-clean","","p-icon","an an-map-pin","p-label","Address",1,"po-lg-4","po-md-8"],["formControlName","number","p-label","Number","p-clean","",1,"po-lg-2","po-md-4"],["formControlName","website","p-label","Website","p-clean","",1,"po-lg-6"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Save successful",3,"p-primary-action"],["p-label","Name",1,"po-md-12",3,"p-value"],["p-label","Address",1,"po-md-6",3,"p-value"],["p-label","Number",1,"po-md-6",3,"p-value"],["p-label","Email",1,"po-md-6",3,"p-value"],["p-label","Website",1,"po-md-6",3,"p-value"],[1,"po-row","po-mt-3"],["name","theme","p-label","Theme Type",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","a11ylevel","p-label","Acessibility Level",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"]],template:function(o,a){if(o&1){let s=O();t(0,"po-widget",1)(1,"form",2),i(2,"po-input",3)(3,"po-email",4)(4,"po-input",5)(5,"po-number",6)(6,"po-url",7),t(7,"div",8)(8,"po-button",9),E("p-click",function(){return b(s),g(a.saveForm())}),n()()(),t(9,"po-modal",10,0)(11,"div",8),i(12,"po-info",11),n(),t(13,"div",8),i(14,"po-info",12)(15,"po-info",13),n(),t(16,"div",8),i(17,"po-info",14)(18,"po-info",15),n()()(),t(19,"div",16)(20,"po-radio-group",17),w("ngModelChange",function(h){return b(s),k(a.theme,h)||(a.theme=h),g(h)}),E("p-change",function(h){return b(s),g(a.changeTheme(h))}),n(),t(21,"po-radio-group",18),w("ngModelChange",function(h){return b(s),k(a.a11yLevel,h)||(a.a11yLevel=h),g(h)}),E("p-change",function(h){return b(s),g(a.changeA11yLevel(h))}),n()()}o&2&&(l(),d("formGroup",a.reactiveForm),l(7),d("p-disabled",!a.reactiveForm.valid),l(),d("p-primary-action",a.modalPrimaryAction),l(3),d("p-value",a.reactiveForm.controls.name.value),l(2),d("p-value",a.reactiveForm.controls.address.value),l(),d("p-value",a.reactiveForm.controls.number.value),l(2),d("p-value",a.reactiveForm.controls.email.value),l(),d("p-value",a.reactiveForm.controls.website.value),l(2),L("ngModel",a.theme),d("p-options",a.themeOptions),l(),L("ngModel",a.a11yLevel),d("p-options",a.a11yLevelOptions))},dependencies:[K,H,Q,J,X,Y,oe,me,le,de,pe,se,ce,re,ue],encapsulation:2})}return r})();var Ce=r=>({"docs-sample-code-tabs":r}),be=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-theme-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,a){o&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Theme Labs"),n(),t(4,"a",2),E("click",function(){return a.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-theme-labs/sample-po-theme-labs.component.html"),n(),t(13,"pre",7),e(14,`<po-widget p-title="Example">
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

    <div class="po-row">
      <po-info class="po-md-6" p-label="Address" [p-value]="reactiveForm.controls.address.value"> </po-info>

      <po-info class="po-md-6" p-label="Number" [p-value]="reactiveForm.controls.number.value"> </po-info>
    </div>

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
`),n()()()()(),t(21,"div",10),i(22,"sample-po-theme-labs"),n(),i(23,"hr")),o&2&&(l(5),V("po-icon "+a.sampleCodeButtonIcon),l(),j(" ",a.sampleCodeButtonLabel,""),l(),d("ngClass",W(4,Ce,a.hideSampleCodeTabs)))},dependencies:[U,Ee,P,D,xe],encapsulation:2})}return r})();var ge=(()=>{class r{static \u0275fac=function(o){return new(o||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-theme-doc"]],standalone:!1,decls:1132,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","guides/theme-service"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-method-table"],[1,"docs-api-properties-row"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-property-description"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-name-cell"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type"],["pan","",1,"docs-api-property-type","'small'"],["pan","",1,"docs-api-property-type","'medium'"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoThemeColorAction"],[1,"language-javascript"],["pan","",1,"docs-api-property-type","poThemeColorBrand"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","PoThemeColorCategorical"],["pan","",1,"docs-api-property-type","PoThemeColorNeutral"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","{","'70'?:","string;","'80'?:","string;","'90'?:","string;","'95'?:","string;","}"],["pan","",1,"docs-api-property-type","{","'00'?:","string;","'05'?:","string;","'10'?:","string;","'20'?:","string;","'30'?:","string;","}"],["pan","",1,"docs-api-property-type","{","'40'?:","string;","'60'?:","string;","}"],["pan","",1,"docs-api-property-type","PoThemeColor"],["pan","",1,"docs-api-property-type","DynamicProperties"],["pan","",1,"docs-api-property-type","PoThemeTypeEnum"],["pan","",1,"docs-api-property-type","PoThemeActive"],["pan","",1,"docs-api-property-type","PoThemeType"],["pan","",1,"docs-api-property-type","Array<PoThemeType>"]],template:function(o,a){o&1&&(t(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoThemeModule } from '@po-ui/ng-components';"),n()(),t(4,"div",2)(5,"p"),e(6,"M\xF3dulo respons\xE1vel por fornecer servi\xE7os relacionados ao tema PO."),n()(),t(7,"h3",3),e(8,"Services"),n(),t(9,"h4",4)(10,"code",5),e(11,"PoThemeService"),n()(),t(12,"div",2)(13,"p"),e(14,"O "),t(15,"code"),e(16,"PoThemeService"),n(),e(17," possibilita a personaliza\xE7\xE3o das cores do tema padr\xE3o do "),t(18,"code"),e(19,"PO-UI"),n(),e(20,", permitindo a altera\xE7\xE3o dos valores das vari\xE1veis de estilo usadas no CSS padr\xE3o."),n(),t(21,"blockquote")(22,"p"),e(23,"Para saber mais sobre como customizar o tema padr\xE3o verifique o item "),t(24,"a",6),e(25,"Customiza\xE7\xE3o de Temas usando o servi\xE7o PO-UI"),n(),e(26," na aba "),t(27,"code"),e(28,"Guias"),n(),e(29,"."),n()(),t(30,"blockquote")(31,"p"),e(32,"Obs.: N\xE3o est\xE1 documentado aqui e n\xE3o indicamos a customiza\xE7\xE3o das cores de 'feedback' por motivos de acessibilidade e usabilidade."),n()()(),t(33,"h3",7),e(34,"M\xE9todos"),n(),t(35,"table",8)(36,"tr",9)(37,"th",10)(38,"div",11)(39,"h4")(40,"span",12),e(41," setTheme "),n()()()()(),t(42,"tr",13)(43,"td",13)(44,"p"),e(45,"Aplica um tema ao componente de acordo com o tipo de tema e o n\xEDvel de acessibilidade especificados."),n(),t(46,"p"),e(47,"Este m\xE9todo configura o tema do componente com base no objeto "),t(48,"code"),e(49,"themeConfig"),n(),e(50," fornecido, no "),t(51,"code"),e(52,"themeType"),n(),e(53," e no "),t(54,"code"),e(55,"a11yLevel"),n(),e(56,`.
Al\xE9m disso, ele pode opcionalmente salvar a prefer\xEAncia de tema no localStorage, se solicitado.`),n()()()(),t(57,"h5")(58,"b"),e(59,"Par\xE2metros"),n()(),t(60,"table",14)(61,"tr",15)(62,"th",16),e(63,"Nome"),n(),t(64,"th",16),e(65,"Tipo"),n(),t(66,"th",16),e(67,"Descri\xE7\xE3o"),n()(),t(68,"tr",9)(69,"td",17),e(70," themeConfig"),n(),t(71,"td",18)(72,"code",19),e(73," PoTheme "),n()(),t(74,"td",13)(75,"p"),e(76,"Configura\xE7\xE3o de tema a ser aplicada ao componente."),n()()(),t(77,"tr",9)(78,"td",17),e(79," themeType"),n(),t(80,"td",18)(81,"code",19),e(82," PoThemeTypeEnum "),n()(),t(83,"td",13)(84,"p"),e(85,"(Opcional) Tipo de tema, podendo ser 'light' (claro) ou 'dark' (escuro). O tema claro \xE9 o padr\xE3o."),n()()(),t(86,"tr",9)(87,"td",17),e(88," a11yLevel"),n(),t(89,"td",18)(90,"code",19),e(91," PoThemeA11yEnum "),n()(),t(92,"td",13)(93,"p"),e(94,"(Opcional) N\xEDvel de acessibilidade dos componentes, podendo ser AA ou AAA. Padr\xE3o \xE9 AAA."),n()()(),t(95,"tr",9)(96,"td",17),e(97," persistPreference"),n(),t(98,"td",18)(99,"code",19),e(100," boolean "),n()(),t(101,"td",13)(102,"p"),e(103,"(Opcional) Define se a prefer\xEAncia de tema deve ser salva no localStorage para persist\xEAncia. "),t(104,"code"),e(105,"true"),n(),e(106," para salvar, "),t(107,"code"),e(108,"false"),n(),e(109," para n\xE3o salvar."),n()()()(),i(110,"br"),t(111,"table",8)(112,"tr",9)(113,"th",10)(114,"div",11)(115,"h4")(116,"span",12),e(117," getA11yLevel "),n()()()()(),t(118,"tr",13)(119,"td",13)(120,"p"),e(121,`Retorna o n\xEDvel de acessibilidade configurado no tema.
Se n\xE3o estiver configurado, retorna `),t(122,"code"),e(123,"AAA"),n(),e(124," como padr\xE3o."),n()()()(),t(125,"h5")(126,"b"),e(127,"Retorno"),n()(),t(128,"table",14)(129,"tr",15)(130,"th",16),e(131,"Tipo"),n(),t(132,"th",16),e(133,"Descri\xE7\xE3o"),n()(),t(134,"tr",9)(135,"td",18)(136,"code",19),e(137,"PoThemeA11yEnum"),n()(),t(138,"td",13)(139,"p"),e(140,"O n\xEDvel de acessibilidade, que pode ser "),t(141,"code"),e(142,"AA"),n(),e(143," ou "),t(144,"code"),e(145,"AAA"),n(),e(146,"."),n()()()(),i(147,"br"),t(148,"table",8)(149,"tr",9)(150,"th",10)(151,"div",11)(152,"h4")(153,"span",12),e(154," setA11yDefaultSizeSmall "),n()()()()(),t(155,"tr",13)(156,"td",13)(157,"p"),e(158,"Define o tamanho "),t(159,"code"),e(160,"small"),n(),e(161,` como padr\xE3o para componentes de formul\xE1rio que n\xE3o possuem um tamanho definido.
Essa configura\xE7\xE3o \xE9 aplicada globalmente apenas quando o n\xEDvel de acessibilidade for `),t(162,"code"),e(163,"AA"),n(),e(164,"."),n(),t(165,"blockquote")(166,"p"),e(167,"Para garantir que o tamanho "),t(168,"code"),e(169,"small"),n(),e(170,` seja aplicado corretamente a todos os componentes, recomendamos
definir esta configura\xE7\xE3o `),t(171,"strong"),e(172,"junto com o n\xEDvel de acessibilidade "),t(173,"code"),e(174,"AA"),n(),e(175," na inicializa\xE7\xE3o da aplica\xE7\xE3o"),n(),e(176,`.
Se for aplicada em tempo de execu\xE7\xE3o, ser\xE1 necess\xE1rio recarregar a aplica\xE7\xE3o (`),t(177,"code"),e(178,"reload"),n(),e(179,`)
para que os estilos sejam aplicados corretamente.
Para ajustar a densidade visual dos componentes agrupadores (como pages, container, etc.), utilize tamb\xE9m
o m\xE9todo `),t(180,"code"),e(181,"setA11yDensityMode"),n(),e(182," conforme necess\xE1rio.\u201D"),n()()()()(),t(183,"h5")(184,"b"),e(185,"Par\xE2metros"),n()(),t(186,"table",14)(187,"tr",15)(188,"th",16),e(189,"Nome"),n(),t(190,"th",16),e(191,"Tipo"),n(),t(192,"th",16),e(193,"Descri\xE7\xE3o"),n()(),t(194,"tr",9)(195,"td",17),e(196," enable"),n(),t(197,"td",18)(198,"code",19),e(199," boolean "),n()(),t(200,"td",13)(201,"p"),e(202,"Habilita ou desabilita o tamanho "),t(203,"code"),e(204,"small"),n(),e(205," globalmente."),n()()()(),i(206,"br"),t(207,"table",8)(208,"tr",9)(209,"th",10)(210,"div",11)(211,"h4")(212,"span",12),e(213," setA11yDensityMode "),n()()()()(),t(214,"tr",13)(215,"td",13)(216,"p"),e(217,"Aplica o modo de adensamento compacto ("),t(218,"code"),e(219,"small"),n(),e(220,") ou espa\xE7oso ("),t(221,"code"),e(222,"medium"),n(),e(223,`) para os componentes agrupadores,
independentemente do n\xEDvel de acessibilidade.`),n(),t(224,"blockquote")(225,"p"),e(226,`Para garantir que o adensamento seja aplicado corretamente, recomendamos definir esta configura\xE7\xE3o
`),t(227,"strong"),e(228,"durante a inicializa\xE7\xE3o da aplica\xE7\xE3o"),n(),e(229,`. Se for aplicada em tempo de execu\xE7\xE3o, ser\xE1 necess\xE1rio recarregar a
aplica\xE7\xE3o (`),t(230,"code"),e(231,"reload"),n(),e(232,") para que os estilos sejam aplicados corretamente."),n()()()()(),t(233,"h5")(234,"b"),e(235,"Par\xE2metros"),n()(),t(236,"table",14)(237,"tr",15)(238,"th",16),e(239,"Nome"),n(),t(240,"th",16),e(241,"Tipo"),n(),t(242,"th",16),e(243,"Descri\xE7\xE3o"),n()(),t(244,"tr",9)(245,"td",17),e(246," mode"),n(),t(247,"td",18)(248,"code",20),e(249," 'small' "),n(),t(250,"code",21),e(251," 'medium' "),n()(),t(252,"td",13)(253,"p"),e(254,"Define o modo de densidade: "),t(255,"code"),e(256,"small"),n(),e(257," para compacto, "),t(258,"code"),e(259,"medium"),n(),e(260,` para espa\xE7oso.
O valor padr\xE3o \xE9 `),t(261,"code"),e(262,"medium"),n(),e(263,"."),n()()()(),i(264,"br"),t(265,"table",8)(266,"tr",9)(267,"th",10)(268,"div",11)(269,"h4")(270,"span",12),e(271," persistThemeActive "),n()()()()(),t(272,"tr",13)(273,"td",13)(274,"p"),e(275,"Persiste e define o tema do aplicativo com base nos dados armazenados."),n(),t(276,"p"),e(277,"Este m\xE9todo recupera os dados do tema armazenados e os aplica ao aplicativo."),n()()()(),t(278,"h5")(279,"b"),e(280,"Retorno"),n()(),t(281,"table",14)(282,"tr",15)(283,"th",16),e(284,"Tipo"),n(),t(285,"th",16),e(286,"Descri\xE7\xE3o"),n()(),t(287,"tr",9)(288,"td",18)(289,"code",19),e(290,"PoTheme"),n()(),t(291,"td",13)(292,"p"),e(293,"Recupera o tema armazenado."),n()()()(),i(294,"br"),t(295,"table",8)(296,"tr",9)(297,"th",10)(298,"div",11)(299,"h4")(300,"span",12),e(301," changeCurrentThemeType "),n()()()()(),t(302,"tr",13)(303,"td",13)(304,"p"),e(305,"Altera o tipo do tema armazenado e aplica os novos estilos ao documento."),n(),t(306,"p"),e(307,"Este m\xE9todo altera o tipo do tema armazenado ativo (light/dark)"),n()()()(),t(308,"h5")(309,"b"),e(310,"Par\xE2metros"),n()(),t(311,"table",14)(312,"tr",15)(313,"th",16),e(314,"Nome"),n(),t(315,"th",16),e(316,"Tipo"),n(),t(317,"th",16),e(318,"Descri\xE7\xE3o"),n()(),t(319,"tr",9)(320,"td",17),e(321," themeType"),n(),t(322,"td",18)(323,"code",19),e(324," PoThemeTypeEnum "),n()(),t(325,"td",13)(326,"p"),e(327,"O tipo de tema a ser aplicado, light ou dark."),n()()()(),i(328,"br"),t(329,"table",8)(330,"tr",9)(331,"th",10)(332,"div",11)(333,"h4")(334,"span",12),e(335," cleanThemeActive "),n()()()()(),t(336,"tr",13)(337,"td",13)(338,"p"),e(339,`M\xE9todo remove o tema armazenado e limpa todos os estilos de tema
aplicados ao documento.`),n()()()(),t(340,"h5")(341,"b"),e(342,"Par\xE2metros"),n()(),t(343,"table",14)(344,"tr",15)(345,"th",16),e(346,"Nome"),n(),t(347,"th",16),e(348,"Tipo"),n(),t(349,"th",16),e(350,"Descri\xE7\xE3o"),n()(),t(351,"tr",9)(352,"td",17),e(353," persistPreference"),n(),t(354,"td",18)(355,"code",19),e(356," boolean "),n()(),t(357,"td",13)(358,"p"),e(359,"(Opcional) Define se a prefer\xEAncia de tema n\xE3o deve ser mantida no localStorage para persist\xEAncia. "),t(360,"code"),e(361,"true"),n(),e(362," para remover, "),t(363,"code"),e(364,"false"),n(),e(365," para manter."),n()()()(),i(366,"br"),t(367,"table",8)(368,"tr",9)(369,"th",10)(370,"div",11)(371,"h4")(372,"span",12),e(373," getThemeActive "),n()()()()(),t(374,"tr",13)(375,"td",13)(376,"p"),e(377,"Retorna o tema ativo como um observable. Este m\xE9todo funcionar\xE1 apenas se o tema estiver armazenado no "),t(378,"code"),e(379,"localStorage"),n(),e(380,"."),n()()()(),t(381,"h5")(382,"b"),e(383,"Retorno"),n()(),t(384,"table",14)(385,"tr",15)(386,"th",16),e(387,"Tipo"),n(),t(388,"th",16),e(389,"Descri\xE7\xE3o"),n()(),t(390,"tr",9)(391,"td",18)(392,"code",19),e(393,"PoTheme"),n()(),t(394,"td",13)(395,"p"),e(396,"Tema ativo."),n()()()(),i(397,"br"),t(398,"table",8)(399,"tr",9)(400,"th",10)(401,"div",11)(402,"h4")(403,"span",12),e(404," setDefaultTheme "),n()()()()(),t(405,"tr",13)(406,"td",13)(407,"p"),e(408,'Define o tema atual como o tema "PoUI Padr\xE3o".'),n()()()(),t(409,"h5")(410,"b"),e(411,"Par\xE2metros"),n()(),t(412,"table",14)(413,"tr",15)(414,"th",16),e(415,"Nome"),n(),t(416,"th",16),e(417,"Tipo"),n(),t(418,"th",16),e(419,"Descri\xE7\xE3o"),n()(),t(420,"tr",9)(421,"td",17),e(422," type"),n(),t(423,"td",18)(424,"code",19),e(425," PoThemeTypeEnum "),n()(),t(426,"td",13)(427,"p"),e(428,"O tipo de Tema a ser aplicado, light / dark."),n()()()(),i(429,"br"),t(430,"table",8)(431,"tr",9)(432,"th",10)(433,"div",11)(434,"h4")(435,"span",12),e(436," setThemeType "),n()()()()(),t(437,"tr",13)(438,"td",13)(439,"p"),e(440,"Define o tipo (light/dark) quando um tema est\xE1 sendo aplicado."),n()()()(),t(441,"h5")(442,"b"),e(443,"Par\xE2metros"),n()(),t(444,"table",14)(445,"tr",15)(446,"th",16),e(447,"Nome"),n(),t(448,"th",16),e(449,"Tipo"),n(),t(450,"th",16),e(451,"Descri\xE7\xE3o"),n()(),t(452,"tr",9)(453,"td",17),e(454," theme"),n(),t(455,"td",18)(456,"code",19),e(457," PoTheme "),n()(),t(458,"td",13)(459,"p"),e(460,"Objeto contendo as defini\xE7\xF5es de tema a serem aplicadas no componente."),n()()(),t(461,"tr",9)(462,"td",17),e(463," themeType"),n(),t(464,"td",18)(465,"code",19),e(466," PoThemeTypeEnum "),n()(),t(467,"td",13)(468,"p"),e(469,"(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padr\xE3o, o tema claro \xE9 aplicado."),n()()()(),i(470,"br"),t(471,"table",8)(472,"tr",9)(473,"th",10)(474,"div",11)(475,"h4")(476,"span",12),e(477," setCurrentThemeType "),n()()()()(),t(478,"tr",13)(479,"td",13)(480,"p"),e(481,"Define o tipo (light/dark) para um tema j\xE1 ativo."),n()()()(),t(482,"h5")(483,"b"),e(484,"Par\xE2metros"),n()(),t(485,"table",14)(486,"tr",15)(487,"th",16),e(488,"Nome"),n(),t(489,"th",16),e(490,"Tipo"),n(),t(491,"th",16),e(492,"Descri\xE7\xE3o"),n()(),t(493,"tr",9)(494,"td",17),e(495," themeType"),n(),t(496,"td",18)(497,"code",19),e(498," PoThemeTypeEnum "),n()(),t(499,"td",13)(500,"p"),e(501,"(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padr\xE3o, o tema claro \xE9 aplicado."),n()()()(),i(502,"br"),t(503,"table",8)(504,"tr",9)(505,"th",10)(506,"div",11)(507,"h4")(508,"span",12),e(509," setThemeA11y "),n()()()()(),t(510,"tr",13)(511,"td",13)(512,"p"),e(513,"Define o n\xEDvel de acessibilidade quando um tema est\xE1 sendo aplicado."),n()()()(),t(514,"h5")(515,"b"),e(516,"Par\xE2metros"),n()(),t(517,"table",14)(518,"tr",15)(519,"th",16),e(520,"Nome"),n(),t(521,"th",16),e(522,"Tipo"),n(),t(523,"th",16),e(524,"Descri\xE7\xE3o"),n()(),t(525,"tr",9)(526,"td",17),e(527," theme"),n(),t(528,"td",18)(529,"code",19),e(530," PoTheme "),n()(),t(531,"td",13)(532,"p"),e(533,"Objeto contendo as defini\xE7\xF5es de tema a serem aplicadas no componente."),n()()(),t(534,"tr",9)(535,"td",17),e(536," a11y"),n(),t(537,"td",18)(538,"code",19),e(539," PoThemeA11yEnum "),n()(),t(540,"td",13)(541,"p"),e(542,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),n()()()(),i(543,"br"),t(544,"table",8)(545,"tr",9)(546,"th",10)(547,"div",11)(548,"h4")(549,"span",12),e(550," setCurrentThemeA11y "),n()()()()(),t(551,"tr",13)(552,"td",13)(553,"p"),e(554,"Define o n\xEDvel de acessibilidade para um tema j\xE1 ativo."),n()()()(),t(555,"h5")(556,"b"),e(557,"Par\xE2metros"),n()(),t(558,"table",14)(559,"tr",15)(560,"th",16),e(561,"Nome"),n(),t(562,"th",16),e(563,"Tipo"),n(),t(564,"th",16),e(565,"Descri\xE7\xE3o"),n()(),t(566,"tr",9)(567,"td",17),e(568," a11y"),n(),t(569,"td",18)(570,"code",19),e(571," PoThemeA11yEnum "),n()(),t(572,"td",13)(573,"p"),e(574,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),n()()()(),i(575,"br"),t(576,"h3"),e(577,"Interfaces"),n(),t(578,"h4",22)(579,"code",5),e(580,"PoThemeColor"),n()(),t(581,"div",2)(582,"p"),e(583,"Interface para representar as cores do tema."),n()(),t(584,"h4",7),e(585,"Propriedades"),n(),t(586,"table",14)(587,"tr",15)(588,"th",16),e(589,"Nome"),n(),t(590,"th",16),e(591,"Tipo"),n(),t(592,"th",16),e(593,"Descri\xE7\xE3o"),n()(),t(594,"tr",9)(595,"td",17)(596,"div",11)(597,"span",12),e(598," action"),i(599,"br"),n()()(),t(600,"td",18)(601,"code",23),e(602,"PoThemeColorAction"),n()(),t(603,"td",13)(604,"em")(605,"strong"),e(606,"(opcional)"),n()(),t(607,"p"),e(608,"Cores da Action a serem aplicadas."),n(),t(609,"p"),e(610,"Exemplo de uso:"),n(),t(611,"pre")(612,"code",24),e(613,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
 hover: 'var(--color-brand-01-dark)',
 pressed: 'var(--color-brand-01-darker)',
 disabled: 'var(--color-neutral-light-30)',
 focus: 'var(--color-brand-01-darkest)'
}
`),n()()()(),t(614,"tr",9)(615,"td",17)(616,"div",11)(617,"span",12),e(618," brand"),i(619,"br"),n()()(),t(620,"td",18)(621,"code",25),e(622,"poThemeColorBrand"),n()(),t(623,"td",13)(624,"em")(625,"strong"),e(626,"(opcional)"),n()(),t(627,"p"),e(628,"Cores da Brand a serem aplicadas."),n(),t(629,"p"),e(630,"Exemplo de uso:"),n(),t(631,"pre")(632,"code",26),e(633,`PoThemeColor.brand = {
 01: PoThemeColorTone,
 02: PoThemeColorTone,
 03: PoThemeColorTone
}
`),n()()()(),t(634,"tr",9)(635,"td",17)(636,"div",11)(637,"span",12),e(638," categorical"),i(639,"br"),n()()(),t(640,"td",18)(641,"code",27),e(642,"PoThemeColorCategorical"),n()(),t(643,"td",13)(644,"em")(645,"strong"),e(646,"(opcional)"),n()(),t(647,"p"),e(648,"Cores da Categorical a serem aplicadas."),n(),t(649,"p"),e(650,"Exemplo de uso:"),n(),t(651,"pre")(652,"code",26),e(653,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),n()()()(),t(654,"tr",9)(655,"td",17)(656,"div",11)(657,"span",12),e(658," categorical-overlay"),i(659,"br"),n()()(),t(660,"td",18)(661,"code",27),e(662,"PoThemeColorCategorical"),n()(),t(663,"td",13)(664,"em")(665,"strong"),e(666,"(opcional)"),n()(),t(667,"p"),e(668,"Cores da Categorical a serem aplicadas."),n(),t(669,"p"),e(670,"Exemplo de uso:"),n(),t(671,"pre")(672,"code",26),e(673,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),n()()()(),t(674,"tr",9)(675,"td",17)(676,"div",11)(677,"span",12),e(678," neutral"),i(679,"br"),n()()(),t(680,"td",18)(681,"code",28),e(682,"PoThemeColorNeutral"),n()(),t(683,"td",13)(684,"em")(685,"strong"),e(686,"(opcional)"),n()(),t(687,"p"),e(688,"Cores Neutrals a serem aplicadas."),n(),t(689,"p"),e(690,"Exemplo de uso:"),n(),t(691,"pre")(692,"code",26),e(693,`PoThemeColor.neutral = {
 light: { '00': string, '05': string, '10': string, '20': string, '30': string },
 mid: { '40': string, '60': string },
 dark: { '70': string, '80': string, '90': string, '95': string },
}
`),n()()()()(),t(694,"h4",22)(695,"code",5),e(696,"PoThemeColorAction"),n()(),t(697,"div",2)(698,"p"),e(699,"Interface para as cores de a\xE7\xE3o do tema."),n()(),t(700,"h4",7),e(701,"Propriedades"),n(),t(702,"table",14)(703,"tr",15)(704,"th",16),e(705,"Nome"),n(),t(706,"th",16),e(707,"Tipo"),n(),t(708,"th",16),e(709,"Descri\xE7\xE3o"),n()(),t(710,"tr",9)(711,"td",17)(712,"div",11)(713,"span",12),e(714," default"),i(715,"br"),n()()(),t(716,"td",18)(717,"code",29),e(718,"string"),n()(),t(719,"td",13)(720,"em")(721,"strong"),e(722,"(opcional)"),n()(),t(723,"p"),e(724,"Cores da Action 'Default'."),n(),t(725,"p"),e(726,"Exemplo de uso:"),n(),t(727,"pre")(728,"code",26),e(729,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
}
`),n()()()(),t(730,"tr",9)(731,"td",17)(732,"div",11)(733,"span",12),e(734," disabled"),i(735,"br"),n()()(),t(736,"td",18)(737,"code",29),e(738,"string"),n()(),t(739,"td",13)(740,"em")(741,"strong"),e(742,"(opcional)"),n()(),t(743,"p"),e(744,"Cores da Action de 'disabled'."),n(),t(745,"p"),e(746,"Exemplo de uso:"),n(),t(747,"pre")(748,"code",26),e(749,`PoThemeColor.action = {
 disabled: 'var(--color-neutral-light-30)',
}
`),n()()()(),t(750,"tr",9)(751,"td",17)(752,"div",11)(753,"span",12),e(754," focus"),i(755,"br"),n()()(),t(756,"td",18)(757,"code",29),e(758,"string"),n()(),t(759,"td",13)(760,"em")(761,"strong"),e(762,"(opcional)"),n()(),t(763,"p"),e(764,"Cores da Action para 'focus'."),n(),t(765,"p"),e(766,"Exemplo de uso:"),n(),t(767,"pre")(768,"code",26),e(769,`PoThemeColor.action = {
 focus: 'var(--color-brand-01-darkest)'
}
`),n()()()(),t(770,"tr",9)(771,"td",17)(772,"div",11)(773,"span",12),e(774," hover"),i(775,"br"),n()()(),t(776,"td",18)(777,"code",29),e(778,"string"),n()(),t(779,"td",13)(780,"em")(781,"strong"),e(782,"(opcional)"),n()(),t(783,"p"),e(784,"Cores da Action para 'hover'."),n(),t(785,"p"),e(786,"Exemplo de uso:"),n(),t(787,"pre")(788,"code",26),e(789,`PoThemeColor.action = {
 hover: 'var(--color-brand-01-dark)',
}
`),n()()()(),t(790,"tr",9)(791,"td",17)(792,"div",11)(793,"span",12),e(794," pressed"),i(795,"br"),n()()(),t(796,"td",18)(797,"code",29),e(798,"string"),n()(),t(799,"td",13)(800,"em")(801,"strong"),e(802,"(opcional)"),n()(),t(803,"p"),e(804,"Cores da Action para 'pressed'."),n(),t(805,"p"),e(806,"Exemplo de uso:"),n(),t(807,"pre")(808,"code",26),e(809,`PoThemeColor.action = {
 pressed: 'var(--color-brand-01-darker)',
}
`),n()()()()(),t(810,"h4",22)(811,"code",5),e(812,"PoThemeColorNeutral"),n()(),t(813,"div",2)(814,"p"),e(815,"Interface para as cores neutras do tema."),n()(),t(816,"h4",7),e(817,"Propriedades"),n(),t(818,"table",14)(819,"tr",15)(820,"th",16),e(821,"Nome"),n(),t(822,"th",16),e(823,"Tipo"),n(),t(824,"th",16),e(825,"Descri\xE7\xE3o"),n()(),t(826,"tr",9)(827,"td",17)(828,"div",11)(829,"span",12),e(830," dark"),i(831,"br"),n()()(),t(832,"td",18)(833,"code",30),e(834,`{ '70'?: string; '80'?: string; '90'?: string; '95'?: string;
}`),n()(),t(835,"td",13)(836,"em")(837,"strong"),e(838,"(opcional)"),n()(),t(839,"p"),e(840,"Cores Neutrals do tipo 'dark'."),n(),t(841,"p"),e(842,"Exemplo de uso:"),n(),t(843,"pre")(844,"code",26),e(845,`PoThemeColor.neutral.dark = {
 '70': '#4a5c60',
 '80': '#2c3739',
 '90': '#1d2426',
 '95': '#0b0e0e',
}
`),n()()()(),t(846,"tr",9)(847,"td",17)(848,"div",11)(849,"span",12),e(850," light"),i(851,"br"),n()()(),t(852,"td",18)(853,"code",31),e(854,`{ '00'?: string; '05'?: string; '10'?: string; '20'?: string; '30'?: string;
}`),n()(),t(855,"td",13)(856,"em")(857,"strong"),e(858,"(opcional)"),n()(),t(859,"p"),e(860,"Cores Neutrals do tipo 'light'."),n(),t(861,"p"),e(862,"Exemplo de uso:"),n(),t(863,"pre")(864,"code",26),e(865,`PoThemeColor.neutral.light = {
 '00': '#ffffff',
 '05': '#fbfbfb',
 '10': '#eceeee',
 '20': '#dadedf',
 '30': '#b6bdbf'
}
`),n()()()(),t(866,"tr",9)(867,"td",17)(868,"div",11)(869,"span",12),e(870," mid"),i(871,"br"),n()()(),t(872,"td",18)(873,"code",32),e(874,`{ '40'?: string; '60'?: string;
}`),n()(),t(875,"td",13)(876,"em")(877,"strong"),e(878,"(opcional)"),n()(),t(879,"p"),e(880,"Cores Neutrals do tipo 'mid'."),n(),t(881,"p"),e(882,"Exemplo de uso:"),n(),t(883,"pre")(884,"code",26),e(885,`PoThemeColor.neutral.mid = {
 '40': '#9da7a9',
 '60': '#6e7c7f',
}
`),n()()()()(),t(886,"h4",22)(887,"code",5),e(888,"PoThemeTokens"),n()(),t(889,"div",2)(890,"p"),e(891,"Interface para o tema da aplica\xE7\xE3o."),n()(),t(892,"h4",22)(893,"code",5),e(894,"PoThemeToken"),n()(),t(895,"div",2)(896,"p"),e(897,"Interface para os tokens do Tema."),n()(),t(898,"h4",7),e(899,"Propriedades"),n(),t(900,"table",14)(901,"tr",15)(902,"th",16),e(903,"Nome"),n(),t(904,"th",16),e(905,"Tipo"),n(),t(906,"th",16),e(907,"Descri\xE7\xE3o"),n()(),t(908,"tr",9)(909,"td",17)(910,"div",11)(911,"span",12),e(912," color"),i(913,"br"),n()()(),t(914,"td",18)(915,"code",33),e(916,"PoThemeColor"),n()(),t(917,"td",13)(918,"em")(919,"strong"),e(920,"(opcional)"),n()(),t(921,"p"),e(922,"Tokens do tipo 'color'"),n()()(),t(923,"tr",9)(924,"td",17)(925,"div",11)(926,"span",12),e(927," onRoot"),i(928,"br"),n()()(),t(929,"td",18)(930,"code",34),e(931,"DynamicProperties"),n()(),t(932,"td",13)(933,"em")(934,"strong"),e(935,"(opcional)"),n()(),t(936,"p"),e(937,`Tokens do tipo 'onRoot'
Esta propriedade adicionar\xE1 todos os tokens passados e adicionado direto no `),t(938,"code"),e(939,":root"),n()(),t(940,"p"),e(941,"Exemplo de uso:"),n(),t(942,"pre")(943,"code",26),e(944,`onRoot: {
  '--color-page-background-color-page': '#121212',
  '--color-toolbar-color-badge-text': 'var(--color-neutral-dark-95)',
},
`),n()()()(),t(945,"tr",9)(946,"td",17)(947,"div",11)(948,"span",12),e(949," perComponent"),i(950,"br"),n()()(),t(951,"td",18)(952,"code",34),e(953,"DynamicProperties"),n()(),t(954,"td",13)(955,"em")(956,"strong"),e(957,"(opcional)"),n()(),t(958,"p"),e(959,"Tokens do tipo 'perComponent'"),n(),t(960,"p"),e(961,"Exemplo de uso:"),n(),t(962,"pre")(963,"code",26),e(964,`perComponent: {
  'po-badge': {
    '--color': 'var(--color-neutral-dark-95)',
  },
  'po-container': {
    '--background': '#121212',
  },
},
`),n()()()()(),t(965,"h4",22)(966,"code",5),e(967,"PoTheme"),n()(),t(968,"div",2)(969,"p"),e(970,"Interface para o m\xE9todo "),t(971,"code"),e(972,"setTheme()"),n(),e(973,"."),n()(),t(974,"h4",7),e(975,"Propriedades"),n(),t(976,"table",14)(977,"tr",15)(978,"th",16),e(979,"Nome"),n(),t(980,"th",16),e(981,"Tipo"),n(),t(982,"th",16),e(983,"Descri\xE7\xE3o"),n()(),t(984,"tr",9)(985,"td",17)(986,"div",11)(987,"span",12),e(988," active"),i(989,"br"),n()()(),t(990,"td",18)(991,"code",35),e(992,"PoThemeTypeEnum "),n(),t(993,"code",36),e(994," PoThemeActive"),n()(),t(995,"td",13)(996,"em")(997,"strong"),e(998,"(opcional)"),n()(),t(999,"p"),e(1e3,"Tipo e n\xEDvel de acessibilidade de tema ativo"),n()()(),t(1001,"tr",9)(1002,"td",17)(1003,"div",11)(1004,"span",12),e(1005," name"),i(1006,"br"),n()()(),t(1007,"td",18)(1008,"code",29),e(1009,"string"),n()(),t(1010,"td",13)(1011,"p"),e(1012,`Nome para o tema:
Ex.: default, totvs, sunset...`),n()()(),t(1013,"tr",9)(1014,"td",17)(1015,"div",11)(1016,"span",12),e(1017," type"),i(1018,"br"),n()()(),t(1019,"td",18)(1020,"code",37),e(1021,"PoThemeType "),n(),t(1022,"code",38),e(1023," Array<PoThemeType>"),n()(),t(1024,"td",13)(1025,"p"),e(1026,"Tipo de tema:"),n(),t(1027,"ul")(1028,"li"),e(1029,"light"),n(),t(1030,"li"),e(1031,"dark"),n()()()()(),t(1032,"h3"),e(1033,"Enums"),n(),t(1034,"h4",4)(1035,"code",5),e(1036,"PoThemeA11yEnum"),n()(),t(1037,"div",2)(1038,"p"),e(1039,"Enum para configurar o n\xEDvel de acessibilidade dos componentes atrav\xE9s do servi\xE7o de tema."),n(),t(1040,"pre")(1041,"code"),e(1042,`import { PoThemeA11yEnum } from '@po-ui/theme';

// Definindo o n\xEDvel de acessibilidade ao configurar as cores e o tipo do tema (light | dark)
themeService.setTheme(...theme, ...type, PoThemeA11yEnum.AA);

// Definindo o n\xEDvel de acessibilidade ao configurar apenas as cores do tema
themeService.setThemeA11y(...theme, PoThemeA11yEnum.AAA);

// Alterando o n\xEDvel de acessibilidade com as cores do tema j\xE1 definidas
themeService.setCurrentThemeA11y(PoThemeA11yEnum.AAA);
`),n()()(),t(1043,"h4",7),e(1044,"Propriedades"),n(),t(1045,"table",14)(1046,"tr",15)(1047,"th",16),e(1048,"Nome"),n(),t(1049,"th",16),e(1050,"Descri\xE7\xE3o"),n()(),t(1051,"tr",9)(1052,"td",17)(1053,"div",11)(1054,"span",12),e(1055," AA"),i(1056,"br"),n()()(),t(1057,"td",13)(1058,"p"),e(1059,"N\xEDvel de acessibilidade AA."),n(),t(1060,"ul")(1061,"li"),e(1062,"Define a espessura do "),t(1063,"code"),e(1064,"outline"),n(),e(1065," para "),t(1066,"strong"),e(1067,"2px"),n(),e(1068,"."),n(),t(1069,"li"),e(1070,"Disponibiliza o tamanho "),t(1071,"code"),e(1072,"small"),n(),e(1073,` para componentes de formul\xE1rio (buttons, inputs, checkboxes, radios e switches)
conforme suas documenta\xE7\xF5es.`),n()()()(),t(1074,"tr",9)(1075,"td",17)(1076,"div",11)(1077,"span",12),e(1078," AAA"),i(1079,"br"),n()()(),t(1080,"td",13)(1081,"p"),e(1082,"N\xEDvel de acessibilidade AAA."),n(),t(1083,"ul")(1084,"li"),e(1085,"Define a espessura do "),t(1086,"code"),e(1087,"outline"),n(),e(1088," para "),t(1089,"strong"),e(1090,"4px"),n(),e(1091,"."),n(),t(1092,"li"),e(1093,"N\xE3o disponibiliza o tamanho "),t(1094,"code"),e(1095,"small"),n(),e(1096," para componentes de formul\xE1rio."),n()()()()(),t(1097,"h4",4)(1098,"code",5),e(1099,"PoThemeTypeEnum"),n()(),t(1100,"div",2)(1101,"p"),e(1102,"Enum utilizado para configurar o tipo de tema suportado, \xE9 poss\xEDvel alternar entre os tipos definidos."),n(),t(1103,"pre")(1104,"code"),e(1105,`import { PoThemeTypeEnum } from '@po-ui/theme';

// Definindo o tipo de tema como claro
themeService.setTheme(...theme, PoThemeTypeEnum.light);

// Definindo o tipo de tema como escuro
themeService.setTheme(...theme, PoThemeTypeEnum.dark);

// Alterando o tipo do tema para um tema j\xE1 aplicado
themeService.setCurrentThemeType(PoThemeTypeEnum.dark);
`),n()()(),t(1106,"h4",7),e(1107,"Propriedades"),n(),t(1108,"table",14)(1109,"tr",15)(1110,"th",16),e(1111,"Nome"),n(),t(1112,"th",16),e(1113,"Descri\xE7\xE3o"),n()(),t(1114,"tr",9)(1115,"td",17)(1116,"div",11)(1117,"span",12),e(1118," light"),i(1119,"br"),n()()(),t(1120,"td",13)(1121,"p"),e(1122,"Define o tema como claro."),n()()(),t(1123,"tr",9)(1124,"td",17)(1125,"div",11)(1126,"span",12),e(1127," dark"),i(1128,"br"),n()()(),t(1129,"td",13)(1130,"p"),e(1131,"Define o tema como escuro."),n()()()()())},encapsulation:2})}return r})();var fe=(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=1;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,o){this.route=m,this.router=o}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let o=m.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(o){return new(o||r)(x($),x(ee))};static \u0275cmp=S({type:r,selectors:[["ng-component"]],standalone:!1,decls:6,vars:4,consts:[["p-title","Theme",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,a){o&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),E("p-click",function(){return a.changeTab("doc")}),i(3,"sample-po-theme-doc"),n(),t(4,"po-tab",3),E("p-click",function(){return a.changeTab("web")}),i(5,"sample-po-theme-labs-view"),n()()()),o&2&&(d("p-actions",a.actions),l(2),d("p-active",a.activeTab==="doc"),l(2),d("p-hide",a.hidePoWebSample)("p-active",a.activeTab==="web"))},dependencies:[he,P,D,be,ge],encapsulation:2})}return r})();var Le=[{path:"",component:fe}],Te=(()=>{class r{static \u0275fac=function(o){return new(o||r)};static \u0275mod=y({type:r});static \u0275inj=A({imports:[F.forChild(Le),F]})}return r})();var Xe=(()=>{class r{static \u0275fac=function(o){return new(o||r)};static \u0275mod=y({type:r});static \u0275inj=A({imports:[Se,Te]})}return r})();export{Xe as DocPoThemeModule};
