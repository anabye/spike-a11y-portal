import{o as Ee,p as Se}from"./chunk-B2ZAFZPZ.js";import{Ab as D,Ea as le,Eb as ue,Fa as de,Ma as pe,Q as ne,Qa as se,U as ie,Xa as ce,fa as ae,ga as oe,ha as re,ia as N,j as v,ja as _,ka as me,la as M,ma as O,na as C,nb as he,v as te,zb as P}from"./chunk-QYU7N2WH.js";import{$a as q,Aa as d,Ac as p,Cb as U,Da as I,Dc as H,Ec as Q,Gc as J,Hc as K,Kc as X,La as t,Lc as Y,Ma as n,N as A,Na as i,Pc as Z,Ra as V,Sa as E,U as b,Uc as $,V as g,Wc as ee,Yc as F,_a as R,a as c,ab as j,b as u,cb as e,eb as z,gb as L,hb as k,ib as w,ja as l,jb as B,ka as x,lb as W,qa as S,ra as y,xb as G}from"./chunk-KZJHT32G.js";var Ae=["reactiveFormData"],xe=(()=>{class r{cdr;fb;poTheme;reactiveFormModal;a11yLevel;a11yLevelStorage="po-a11y-AAA";reactiveForm;theme=0;themeStorage="po-theme-default";a11yChangeListenerAAA;a11yChangeListenerAA;themeChangeListenerDark;themeChangeListenerDefault;a11yLevelOptions=[{label:"AA",value:"AA"},{label:"AAA",value:"AAA"}];themeOptions=[{label:"Light",value:0},{label:"Dark",value:1}];modalPrimaryAction={action:()=>this.reactiveFormModal.close(),label:"Close"};poThemeSample={name:"po-theme",type:{light:{color:{brand:{"01":{lightest:"#f2eaf6",lighter:"#d9c2e5",light:"#bd94d1",base:"#753399",dark:"#5b1c7d",darker:"#400e58",darkest:"#260538"},"02":{base:"#b92f72"},"03":{base:"#ffd464"}},action:u(c({},oe),{disabled:"var(--color-neutral-mid-40)"}),feedback:u(c({},N),{info:u(c({},N.info),{base:"#0079b8"})}),neutral:c({},re)},onRoot:u(c({},_.onRoot),{"--color-page-background-color-page":"var(--color-neutral-light-05)"}),perComponent:c({},_.perComponent)},dark:{color:{brand:{"01":{darkest:"#f2eaf6",darker:"#d9c2e5",dark:"#bd94d1",base:"#753399",light:"#5b1c7d",lighter:"#400e58",lightest:"#260538"},"02":{base:"#b92f72"},"03":{base:"#ffd464"}},action:u(c({},me),{disabled:"var(--color-neutral-mid-40)"}),feedback:u(c({},M),{info:u(c({},M.info),{base:"#0079b8"})}),neutral:{light:{"00":"#1c1c1c","05":"#202020",10:"#2b2b2b",20:"#3b3b3b",30:"#5a5a5a"},mid:{40:"#7c7c7c",60:"#a1a1a1"},dark:{70:"#c1c1c1",80:"#d9d9d9",90:"#eeeeee",95:"#fbfbfb"}}},onRoot:u(c({},O.onRoot),{"--color-page-background-color-page":"var(--color-neutral-light-05)"}),perComponent:c({},O.perComponent)}},active:ae.light};constructor(m,o,a){this.cdr=m,this.fb=o,this.poTheme=a;let s=this.poTheme.applyTheme();this.a11yLevel=this.poTheme.getA11yLevel(),s?this.theme=s.active||0:(this.poTheme.setTheme(this.poThemeSample,this.theme,this.a11yLevel),this.theme=this.poThemeSample.active),this.createReactiveForm(),this.a11yLevel==="AA"&&this.poTheme.setA11yDefaultSizeSmall(!0)}ngOnInit(){localStorage.getItem("po-ui-theme")&&(this.themeStorage=localStorage.getItem("po-ui-theme")),this.theme=this.themeStorage==="po-theme-default"?0:1,this.changeTheme(this.theme,!1),localStorage.getItem("po-ui-a11y")&&(this.a11yLevelStorage=localStorage.getItem("po-ui-a11y")),this.a11yLevel=this.a11yLevelStorage==="po-a11y-AAA"?v.AAA:v.AA,this.changeA11yLevel(this.a11yLevel,!1),this.themeChangeListenerDefault=()=>{this.changeTheme(0,!1),this.theme=0},this.themeChangeListenerDark=()=>{this.changeTheme(1,!1),this.theme=1},this.a11yChangeListenerAAA=()=>{this.changeA11yLevel(v.AAA,!1),this.a11yLevel=v.AAA},this.a11yChangeListenerAA=()=>{this.changeA11yLevel(v.AA,!1),this.a11yLevel=v.AA},window.addEventListener("po-a11y-AA",this.a11yChangeListenerAA),window.addEventListener("po-a11y-AAA",this.a11yChangeListenerAAA),window.addEventListener("po-theme-default",this.themeChangeListenerDefault),window.addEventListener("po-theme-dark",this.themeChangeListenerDark)}ngOnDestroy(){window.removeEventListener("po-theme-default",this.themeChangeListenerDefault),window.removeEventListener("po-theme-dark",this.themeChangeListenerDark),window.removeEventListener("po-a11y-AA",this.a11yChangeListenerAA),window.removeEventListener("po-a11y-AAA",this.a11yChangeListenerAAA)}changeA11yLevel(m,o=!0){this.poTheme.setCurrentThemeA11y(m),m==="AA"?localStorage.setItem("po-ui-a11y","po-a11y-AA"):localStorage.setItem("po-ui-a11y","po-a11y-AAA"),m===v.AA&&this.poTheme.setA11yDefaultSizeSmall(!0),o&&window.dispatchEvent(new Event("po-sample-change-a11y"))}changeTheme(m,o=!0){this.poTheme.setTheme(this.poThemeSample,m,this.a11yLevel),m===1?localStorage.setItem("po-ui-theme","po-theme-dark"):localStorage.setItem("po-ui-theme","po-theme-default"),o&&window.dispatchEvent(new Event("po-sample-change-theme")),this.a11yLevel==="AA"&&this.poTheme.setA11yDefaultSizeSmall(!0)}createReactiveForm(){this.reactiveForm=this.fb.group({name:["",p.compose([p.required,p.minLength(5),p.maxLength(30)])],address:["",p.compose([p.required,p.minLength(5),p.maxLength(50)])],number:["",p.compose([p.required,p.min(1),p.max(99999)])],email:["",p.required],website:["",p.required]})}saveForm(){this.reactiveFormModal.open()}static \u0275fac=function(o){return new(o||r)(x(G),x(Z),x(C))};static \u0275cmp=S({type:r,selectors:[["sample-po-theme-labs"]],viewQuery:function(o,a){if(o&1&&R(Ae,7),o&2){let s;q(s=j())&&(a.reactiveFormModal=s.first)}},standalone:!1,features:[B([C])],decls:22,vars:12,consts:[["reactiveFormData",""],["p-title","Example"],[3,"formGroup"],["formControlName","name","p-clean","","p-icon","an an-user","p-label","Customer name",1,"po-lg-6"],["formControlName","email","p-label","Email","p-clean","",1,"po-lg-6"],["formControlName","address","p-clean","","p-icon","an an-map-pin","p-label","Address",1,"po-lg-4","po-md-8"],["formControlName","number","p-label","Number","p-clean","",1,"po-lg-2","po-md-4"],["formControlName","website","p-label","Website","p-clean","",1,"po-lg-6"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Save successful",3,"p-primary-action"],["p-label","Name",1,"po-md-12",3,"p-value"],["p-label","Address",1,"po-md-6",3,"p-value"],["p-label","Number",1,"po-md-6",3,"p-value"],["p-label","Email",1,"po-md-6",3,"p-value"],["p-label","Website",1,"po-md-6",3,"p-value"],[1,"po-row","po-mt-3"],["name","theme","p-label","Theme Type",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","a11ylevel","p-label","Acessibility Level",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"]],template:function(o,a){if(o&1){let s=V();t(0,"po-widget",1)(1,"form",2),i(2,"po-input",3)(3,"po-email",4)(4,"po-input",5)(5,"po-number",6)(6,"po-url",7),t(7,"div",8)(8,"po-button",9),E("p-click",function(){return b(s),g(a.saveForm())}),n()()(),t(9,"po-modal",10,0)(11,"div",8),i(12,"po-info",11),n(),t(13,"div",8),i(14,"po-info",12)(15,"po-info",13),n(),t(16,"div",8),i(17,"po-info",14)(18,"po-info",15),n()()(),t(19,"div",16)(20,"po-radio-group",17),w("ngModelChange",function(h){return b(s),k(a.theme,h)||(a.theme=h),g(h)}),E("p-change",function(h){return b(s),g(a.changeTheme(h))}),n(),t(21,"po-radio-group",18),w("ngModelChange",function(h){return b(s),k(a.a11yLevel,h)||(a.a11yLevel=h),g(h)}),E("p-change",function(h){return b(s),g(a.changeA11yLevel(h))}),n()()}o&2&&(l(),d("formGroup",a.reactiveForm),l(7),d("p-disabled",!a.reactiveForm.valid),l(),d("p-primary-action",a.modalPrimaryAction),l(3),d("p-value",a.reactiveForm.controls.name.value),l(2),d("p-value",a.reactiveForm.controls.address.value),l(),d("p-value",a.reactiveForm.controls.number.value),l(2),d("p-value",a.reactiveForm.controls.email.value),l(),d("p-value",a.reactiveForm.controls.website.value),l(2),L("ngModel",a.theme),d("p-options",a.themeOptions),l(),L("ngModel",a.a11yLevel),d("p-options",a.a11yLevelOptions))},dependencies:[K,H,Q,J,X,Y,te,ne,le,de,pe,se,ce,ie,ue],encapsulation:2})}return r})();var Ce=r=>({"docs-sample-code-tabs":r}),be=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-theme-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,a){o&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Theme Labs"),n(),t(4,"a",2),E("click",function(){return a.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-theme-labs/sample-po-theme-labs.component.html"),n(),t(13,"pre",7),e(14,`<po-widget p-title="Example">
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
`),n()()()()(),t(21,"div",10),i(22,"sample-po-theme-labs"),n(),i(23,"hr")),o&2&&(l(5),I("po-icon "+a.sampleCodeButtonIcon),l(),z(" ",a.sampleCodeButtonLabel,""),l(),d("ngClass",W(4,Ce,a.hideSampleCodeTabs)))},dependencies:[U,Ee,P,D,xe],encapsulation:2})}return r})();var ge=(()=>{class r{static \u0275fac=function(o){return new(o||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-theme-doc"]],standalone:!1,decls:1170,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","guides/theme-service"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-method-table"],[1,"docs-api-properties-row"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-property-description"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-name-cell"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type"],["pan","",1,"docs-api-property-type","'small'"],["pan","",1,"docs-api-property-type","'medium'"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoThemeColorAction"],[1,"language-javascript"],["pan","",1,"docs-api-property-type","poThemeColorBrand"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","PoThemeColorCategorical"],["pan","",1,"docs-api-property-type","PoThemeColorNeutral"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","{","'70'?:","string;","'80'?:","string;","'90'?:","string;","'95'?:","string;","}"],["pan","",1,"docs-api-property-type","{","'00'?:","string;","'05'?:","string;","'10'?:","string;","'20'?:","string;","'30'?:","string;","}"],["pan","",1,"docs-api-property-type","{","'40'?:","string;","'60'?:","string;","}"],["pan","",1,"docs-api-property-type","PoThemeColor"],["pan","",1,"docs-api-property-type","DynamicProperties"],["pan","",1,"docs-api-property-type","PoThemeTypeEnum"],["pan","",1,"docs-api-property-type","PoThemeActive"],["pan","",1,"docs-api-property-type","PoThemeType"],["pan","",1,"docs-api-property-type","Array<PoThemeType>"]],template:function(o,a){o&1&&(t(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoThemeModule } from '@po-ui/ng-components';"),n()(),t(4,"div",2)(5,"p"),e(6,"M\xF3dulo respons\xE1vel por fornecer servi\xE7os relacionados ao tema PO."),n()(),t(7,"h3",3),e(8,"Services"),n(),t(9,"h4",4)(10,"code",5),e(11,"PoThemeService"),n()(),t(12,"div",2)(13,"p"),e(14,"O "),t(15,"code"),e(16,"PoThemeService"),n(),e(17," possibilita a personaliza\xE7\xE3o das cores do tema padr\xE3o do "),t(18,"code"),e(19,"PO-UI"),n(),e(20,", permitindo a altera\xE7\xE3o dos valores das vari\xE1veis de estilo usadas no CSS padr\xE3o."),n(),t(21,"blockquote")(22,"p"),e(23,"Para saber mais sobre como customizar o tema padr\xE3o verifique o item "),t(24,"a",6),e(25,"Customiza\xE7\xE3o de Temas usando o servi\xE7o PO-UI"),n(),e(26," na aba "),t(27,"code"),e(28,"Guias"),n(),e(29,"."),n()(),t(30,"blockquote")(31,"p"),e(32,"Obs.: N\xE3o est\xE1 documentado aqui e n\xE3o indicamos a customiza\xE7\xE3o das cores de 'feedback' por motivos de acessibilidade e usabilidade."),n()()(),t(33,"h3",7),e(34,"M\xE9todos"),n(),t(35,"table",8)(36,"tr",9)(37,"th",10)(38,"div",11)(39,"h4")(40,"span",12),e(41," setTheme "),n()()()()(),t(42,"tr",13)(43,"td",13)(44,"p"),e(45,"Aplica um tema ao componente de acordo com o tipo de tema e o n\xEDvel de acessibilidade especificados."),n(),t(46,"p"),e(47,"Este m\xE9todo configura o tema do componente com base no objeto "),t(48,"code"),e(49,"themeConfig"),n(),e(50," fornecido, no "),t(51,"code"),e(52,"themeType"),n(),e(53," e no "),t(54,"code"),e(55,"a11yLevel"),n(),e(56,`.
Al\xE9m disso, ele pode opcionalmente salvar a prefer\xEAncia de tema no localStorage, se solicitado.`),n()()()(),t(57,"h5")(58,"b"),e(59,"Par\xE2metros"),n()(),t(60,"table",14)(61,"tr",15)(62,"th",16),e(63,"Nome"),n(),t(64,"th",16),e(65,"Tipo"),n(),t(66,"th",16),e(67,"Descri\xE7\xE3o"),n()(),t(68,"tr",9)(69,"td",17),e(70," themeConfig"),n(),t(71,"td",18)(72,"code",19),e(73," PoTheme "),n()(),t(74,"td",13)(75,"p"),e(76,"Configura\xE7\xE3o de tema a ser aplicada ao componente."),n()()(),t(77,"tr",9)(78,"td",17),e(79," themeType"),n(),t(80,"td",18)(81,"code",19),e(82," PoThemeTypeEnum "),n()(),t(83,"td",13)(84,"p"),e(85,"(Opcional) Tipo de tema, podendo ser 'light' (claro) ou 'dark' (escuro). O tema claro \xE9 o padr\xE3o."),n()()(),t(86,"tr",9)(87,"td",17),e(88," a11yLevel"),n(),t(89,"td",18)(90,"code",19),e(91," PoThemeA11yEnum "),n()(),t(92,"td",13)(93,"p"),e(94,"(Opcional) N\xEDvel de acessibilidade dos componentes, podendo ser AA ou AAA. Padr\xE3o \xE9 AAA."),n()()(),t(95,"tr",9)(96,"td",17),e(97," persistPreference"),n(),t(98,"td",18)(99,"code",19),e(100," boolean "),n()(),t(101,"td",13)(102,"p"),e(103,`(Opcional) Define se a prefer\xEAncia de tema deve ser salva no
localStorage para persist\xEAncia. Por padr\xE3o \xE9 `),t(104,"code"),e(105,"true"),n(),e(106,", ou seja, a prefer\xEAncia ser\xE1 salva automaticamente."),n()()()(),i(107,"br"),t(108,"table",8)(109,"tr",9)(110,"th",10)(111,"div",11)(112,"h4")(113,"span",12),e(114," getA11yLevel "),n()()()()(),t(115,"tr",13)(116,"td",13)(117,"p"),e(118,`Retorna o n\xEDvel de acessibilidade configurado no tema.
Se n\xE3o estiver configurado, retorna `),t(119,"code"),e(120,"AAA"),n(),e(121," como padr\xE3o."),n()()()(),t(122,"h5")(123,"b"),e(124,"Retorno"),n()(),t(125,"table",14)(126,"tr",15)(127,"th",16),e(128,"Tipo"),n(),t(129,"th",16),e(130,"Descri\xE7\xE3o"),n()(),t(131,"tr",9)(132,"td",18)(133,"code",19),e(134,"PoThemeA11yEnum"),n()(),t(135,"td",13)(136,"p"),e(137,"O n\xEDvel de acessibilidade, que pode ser "),t(138,"code"),e(139,"AA"),n(),e(140," ou "),t(141,"code"),e(142,"AAA"),n(),e(143,"."),n()()()(),i(144,"br"),t(145,"table",8)(146,"tr",9)(147,"th",10)(148,"div",11)(149,"h4")(150,"span",12),e(151," setA11yDefaultSizeSmall "),n()()()()(),t(152,"tr",13)(153,"td",13)(154,"p"),e(155,"Define o tamanho "),t(156,"code"),e(157,"small"),n(),e(158,` como padr\xE3o para componentes de formul\xE1rio que n\xE3o possuem um tamanho definido. Essa
configura\xE7\xE3o \xE9 aplicada globalmente apenas quando o n\xEDvel de acessibilidade for `),t(159,"code"),e(160,"AA"),n(),e(161,`. O valor definido \xE9 salvo no
`),t(162,"code"),e(163,"localStorage"),n(),e(164," sob a chave "),t(165,"code"),e(166,"po-default-size"),n(),e(167,"."),n(),t(168,"blockquote")(169,"p"),e(170,"Para garantir que o tamanho "),t(171,"code"),e(172,"small"),n(),e(173,` seja aplicado corretamente a todos os componentes, recomendamos
definir esta configura\xE7\xE3o `),t(174,"strong"),e(175,"junto com o n\xEDvel de acessibilidade "),t(176,"code"),e(177,"AA"),n(),e(178," na inicializa\xE7\xE3o da aplica\xE7\xE3o"),n(),e(179,`.
Se for aplicada em tempo de execu\xE7\xE3o, ser\xE1 necess\xE1rio recarregar a aplica\xE7\xE3o (`),t(180,"code"),e(181,"reload"),n(),e(182,`)
para que os estilos sejam aplicados corretamente.
Para ajustar a densidade visual dos componentes agrupadores (como pages, container, etc.), utilize tamb\xE9m
o m\xE9todo `),t(183,"code"),e(184,"setDensityMode"),n(),e(185," conforme necess\xE1rio.\u201D"),n()()()()(),t(186,"h5")(187,"b"),e(188,"Par\xE2metros"),n()(),t(189,"table",14)(190,"tr",15)(191,"th",16),e(192,"Nome"),n(),t(193,"th",16),e(194,"Tipo"),n(),t(195,"th",16),e(196,"Descri\xE7\xE3o"),n()(),t(197,"tr",9)(198,"td",17),e(199," enable"),n(),t(200,"td",18)(201,"code",19),e(202," boolean "),n()(),t(203,"td",13)(204,"p"),e(205,"Habilita ou desabilita o tamanho "),t(206,"code"),e(207,"small"),n(),e(208," globalmente."),n()()()(),i(209,"br"),t(210,"table",8)(211,"tr",9)(212,"th",10)(213,"div",11)(214,"h4")(215,"span",12),e(216," getDensityMode "),n()()()()(),t(217,"tr",13)(218,"td",13)(219,"p"),e(220,`Retorna o modo de adensamento dos componentes agrupadores.
Se n\xE3o estiver configurado, retorna `),t(221,"code"),e(222,"medium"),n(),e(223," como padr\xE3o."),n()()()(),t(224,"h5")(225,"b"),e(226,"Retorno"),n()(),t(227,"table",14)(228,"tr",15)(229,"th",16),e(230,"Tipo"),n(),t(231,"th",16),e(232,"Descri\xE7\xE3o"),n()(),t(233,"tr",9)(234,"td",18)(235,"code",19),e(236,"PoDensityMode"),n()(),t(237,"td",13)(238,"p"),e(239,"O modo de adensamento, que pode ser "),t(240,"code"),e(241,"small"),n(),e(242," ou "),t(243,"code"),e(244,"medium"),n(),e(245,"."),n()()()(),i(246,"br"),t(247,"table",8)(248,"tr",9)(249,"th",10)(250,"div",11)(251,"h4")(252,"span",12),e(253," setDensityMode "),n()()()()(),t(254,"tr",13)(255,"td",13)(256,"p"),e(257,"Aplica o modo de adensamento compacto ("),t(258,"code"),e(259,"small"),n(),e(260,") ou espa\xE7oso ("),t(261,"code"),e(262,"medium"),n(),e(263,`) para os componentes agrupadores,
independentemente do n\xEDvel de acessibilidade. O valor definido \xE9 salvo no `),t(264,"code"),e(265,"localStorage"),n(),e(266,` sob a chave
`),t(267,"code"),e(268,"po-density-mode"),n(),e(269,"."),n()()()(),t(270,"h5")(271,"b"),e(272,"Par\xE2metros"),n()(),t(273,"table",14)(274,"tr",15)(275,"th",16),e(276,"Nome"),n(),t(277,"th",16),e(278,"Tipo"),n(),t(279,"th",16),e(280,"Descri\xE7\xE3o"),n()(),t(281,"tr",9)(282,"td",17),e(283," mode"),n(),t(284,"td",18)(285,"code",20),e(286," 'small' "),n(),t(287,"code",21),e(288," 'medium' "),n()(),t(289,"td",13)(290,"p"),e(291,"Define o modo de densidade: "),t(292,"code"),e(293,"small"),n(),e(294," para compacto, "),t(295,"code"),e(296,"medium"),n(),e(297,` para espa\xE7oso.
O valor padr\xE3o \xE9 `),t(298,"code"),e(299,"medium"),n(),e(300,"."),n()()()(),i(301,"br"),t(302,"table",8)(303,"tr",9)(304,"th",10)(305,"div",11)(306,"h4")(307,"span",12),e(308," persistThemeActive "),n()()()()(),t(309,"tr",13)(310,"td",13)(311,"p"),e(312,`Restaura e aplica as prefer\xEAncias visuais do usu\xE1rio para o tema da aplica\xE7\xE3o, garantindo que essas prefer\xEAncias
sejam persistidas no `),t(313,"code"),e(314,"localStorage"),n(),e(315," para uso em recarregamentos futuros."),n()()()(),t(316,"h5")(317,"b"),e(318,"Retorno"),n()(),t(319,"table",14)(320,"tr",15)(321,"th",16),e(322,"Tipo"),n(),t(323,"th",16),e(324,"Descri\xE7\xE3o"),n()(),t(325,"tr",9)(326,"td",18)(327,"code",19),e(328,"PoTheme"),n()(),t(329,"td",13)(330,"p"),e(331,"O tema atualmente aplicado."),n()()()(),i(332,"br"),t(333,"table",8)(334,"tr",9)(335,"th",10)(336,"div",11)(337,"h4")(338,"span",12),e(339," changeCurrentThemeType "),n()()()()(),t(340,"tr",13)(341,"td",13)(342,"p"),e(343,"Altera o tipo do tema armazenado e aplica os novos estilos ao documento."),n(),t(344,"p"),e(345,"Este m\xE9todo altera o tipo do tema armazenado ativo (light/dark)"),n()()()(),t(346,"h5")(347,"b"),e(348,"Par\xE2metros"),n()(),t(349,"table",14)(350,"tr",15)(351,"th",16),e(352,"Nome"),n(),t(353,"th",16),e(354,"Tipo"),n(),t(355,"th",16),e(356,"Descri\xE7\xE3o"),n()(),t(357,"tr",9)(358,"td",17),e(359," themeType"),n(),t(360,"td",18)(361,"code",19),e(362," PoThemeTypeEnum "),n()(),t(363,"td",13)(364,"p"),e(365,"O tipo de tema a ser aplicado, light ou dark."),n()()()(),i(366,"br"),t(367,"table",8)(368,"tr",9)(369,"th",10)(370,"div",11)(371,"h4")(372,"span",12),e(373," cleanThemeActive "),n()()()()(),t(374,"tr",13)(375,"td",13)(376,"p"),e(377,`M\xE9todo remove o tema armazenado e limpa todos os estilos de tema
aplicados ao documento.`),n()()()(),t(378,"h5")(379,"b"),e(380,"Par\xE2metros"),n()(),t(381,"table",14)(382,"tr",15)(383,"th",16),e(384,"Nome"),n(),t(385,"th",16),e(386,"Tipo"),n(),t(387,"th",16),e(388,"Descri\xE7\xE3o"),n()(),t(389,"tr",9)(390,"td",17),e(391," persistPreference"),n(),t(392,"td",18)(393,"code",19),e(394," boolean "),n()(),t(395,"td",13)(396,"p"),e(397,"(Opcional) Define se a prefer\xEAncia de tema n\xE3o deve ser mantida no localStorage para persist\xEAncia. "),t(398,"code"),e(399,"true"),n(),e(400," para remover, "),t(401,"code"),e(402,"false"),n(),e(403," para manter."),n()()()(),i(404,"br"),t(405,"table",8)(406,"tr",9)(407,"th",10)(408,"div",11)(409,"h4")(410,"span",12),e(411," getThemeActive "),n()()()()(),t(412,"tr",13)(413,"td",13)(414,"p"),e(415,"Retorna o tema ativo como um observable. Este m\xE9todo funcionar\xE1 apenas se o tema estiver armazenado no "),t(416,"code"),e(417,"localStorage"),n(),e(418,"."),n()()()(),t(419,"h5")(420,"b"),e(421,"Retorno"),n()(),t(422,"table",14)(423,"tr",15)(424,"th",16),e(425,"Tipo"),n(),t(426,"th",16),e(427,"Descri\xE7\xE3o"),n()(),t(428,"tr",9)(429,"td",18)(430,"code",19),e(431,"PoTheme"),n()(),t(432,"td",13)(433,"p"),e(434,"Tema ativo."),n()()()(),i(435,"br"),t(436,"table",8)(437,"tr",9)(438,"th",10)(439,"div",11)(440,"h4")(441,"span",12),e(442," setDefaultTheme "),n()()()()(),t(443,"tr",13)(444,"td",13)(445,"p"),e(446,'Define o tema atual como o tema "PoUI Padr\xE3o".'),n()()()(),t(447,"h5")(448,"b"),e(449,"Par\xE2metros"),n()(),t(450,"table",14)(451,"tr",15)(452,"th",16),e(453,"Nome"),n(),t(454,"th",16),e(455,"Tipo"),n(),t(456,"th",16),e(457,"Descri\xE7\xE3o"),n()(),t(458,"tr",9)(459,"td",17),e(460," type"),n(),t(461,"td",18)(462,"code",19),e(463," PoThemeTypeEnum "),n()(),t(464,"td",13)(465,"p"),e(466,"O tipo de Tema a ser aplicado, light / dark."),n()()()(),i(467,"br"),t(468,"table",8)(469,"tr",9)(470,"th",10)(471,"div",11)(472,"h4")(473,"span",12),e(474," setThemeType "),n()()()()(),t(475,"tr",13)(476,"td",13)(477,"p"),e(478,"Define o tipo (light/dark) quando um tema est\xE1 sendo aplicado."),n()()()(),t(479,"h5")(480,"b"),e(481,"Par\xE2metros"),n()(),t(482,"table",14)(483,"tr",15)(484,"th",16),e(485,"Nome"),n(),t(486,"th",16),e(487,"Tipo"),n(),t(488,"th",16),e(489,"Descri\xE7\xE3o"),n()(),t(490,"tr",9)(491,"td",17),e(492," theme"),n(),t(493,"td",18)(494,"code",19),e(495," PoTheme "),n()(),t(496,"td",13)(497,"p"),e(498,"Objeto contendo as defini\xE7\xF5es de tema a serem aplicadas no componente."),n()()(),t(499,"tr",9)(500,"td",17),e(501," themeType"),n(),t(502,"td",18)(503,"code",19),e(504," PoThemeTypeEnum "),n()(),t(505,"td",13)(506,"p"),e(507,"(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padr\xE3o, o tema claro \xE9 aplicado."),n()()()(),i(508,"br"),t(509,"table",8)(510,"tr",9)(511,"th",10)(512,"div",11)(513,"h4")(514,"span",12),e(515," setCurrentThemeType "),n()()()()(),t(516,"tr",13)(517,"td",13)(518,"p"),e(519,"Define o tipo (light/dark) para um tema j\xE1 ativo."),n()()()(),t(520,"h5")(521,"b"),e(522,"Par\xE2metros"),n()(),t(523,"table",14)(524,"tr",15)(525,"th",16),e(526,"Nome"),n(),t(527,"th",16),e(528,"Tipo"),n(),t(529,"th",16),e(530,"Descri\xE7\xE3o"),n()(),t(531,"tr",9)(532,"td",17),e(533," themeType"),n(),t(534,"td",18)(535,"code",19),e(536," PoThemeTypeEnum "),n()(),t(537,"td",13)(538,"p"),e(539,"(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padr\xE3o, o tema claro \xE9 aplicado."),n()()()(),i(540,"br"),t(541,"table",8)(542,"tr",9)(543,"th",10)(544,"div",11)(545,"h4")(546,"span",12),e(547," setThemeA11y "),n()()()()(),t(548,"tr",13)(549,"td",13)(550,"p"),e(551,"Define o n\xEDvel de acessibilidade quando um tema est\xE1 sendo aplicado."),n()()()(),t(552,"h5")(553,"b"),e(554,"Par\xE2metros"),n()(),t(555,"table",14)(556,"tr",15)(557,"th",16),e(558,"Nome"),n(),t(559,"th",16),e(560,"Tipo"),n(),t(561,"th",16),e(562,"Descri\xE7\xE3o"),n()(),t(563,"tr",9)(564,"td",17),e(565," theme"),n(),t(566,"td",18)(567,"code",19),e(568," PoTheme "),n()(),t(569,"td",13)(570,"p"),e(571,"Objeto contendo as defini\xE7\xF5es de tema a serem aplicadas no componente."),n()()(),t(572,"tr",9)(573,"td",17),e(574," a11y"),n(),t(575,"td",18)(576,"code",19),e(577," PoThemeA11yEnum "),n()(),t(578,"td",13)(579,"p"),e(580,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),n()()()(),i(581,"br"),t(582,"table",8)(583,"tr",9)(584,"th",10)(585,"div",11)(586,"h4")(587,"span",12),e(588," setCurrentThemeA11y "),n()()()()(),t(589,"tr",13)(590,"td",13)(591,"p"),e(592,"Define o n\xEDvel de acessibilidade para um tema j\xE1 ativo."),n()()()(),t(593,"h5")(594,"b"),e(595,"Par\xE2metros"),n()(),t(596,"table",14)(597,"tr",15)(598,"th",16),e(599,"Nome"),n(),t(600,"th",16),e(601,"Tipo"),n(),t(602,"th",16),e(603,"Descri\xE7\xE3o"),n()(),t(604,"tr",9)(605,"td",17),e(606," a11y"),n(),t(607,"td",18)(608,"code",19),e(609," PoThemeA11yEnum "),n()(),t(610,"td",13)(611,"p"),e(612,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),n()()()(),i(613,"br"),t(614,"h3"),e(615,"Interfaces"),n(),t(616,"h4",22)(617,"code",5),e(618,"PoThemeColor"),n()(),t(619,"div",2)(620,"p"),e(621,"Interface para representar as cores do tema."),n()(),t(622,"h4",7),e(623,"Propriedades"),n(),t(624,"table",14)(625,"tr",15)(626,"th",16),e(627,"Nome"),n(),t(628,"th",16),e(629,"Tipo"),n(),t(630,"th",16),e(631,"Descri\xE7\xE3o"),n()(),t(632,"tr",9)(633,"td",17)(634,"div",11)(635,"span",12),e(636," action"),i(637,"br"),n()()(),t(638,"td",18)(639,"code",23),e(640,"PoThemeColorAction"),n()(),t(641,"td",13)(642,"em")(643,"strong"),e(644,"(opcional)"),n()(),t(645,"p"),e(646,"Cores da Action a serem aplicadas."),n(),t(647,"p"),e(648,"Exemplo de uso:"),n(),t(649,"pre")(650,"code",24),e(651,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
 hover: 'var(--color-brand-01-dark)',
 pressed: 'var(--color-brand-01-darker)',
 disabled: 'var(--color-neutral-light-30)',
 focus: 'var(--color-brand-01-darkest)'
}
`),n()()()(),t(652,"tr",9)(653,"td",17)(654,"div",11)(655,"span",12),e(656," brand"),i(657,"br"),n()()(),t(658,"td",18)(659,"code",25),e(660,"poThemeColorBrand"),n()(),t(661,"td",13)(662,"em")(663,"strong"),e(664,"(opcional)"),n()(),t(665,"p"),e(666,"Cores da Brand a serem aplicadas."),n(),t(667,"p"),e(668,"Exemplo de uso:"),n(),t(669,"pre")(670,"code",26),e(671,`PoThemeColor.brand = {
 01: PoThemeColorTone,
 02: PoThemeColorTone,
 03: PoThemeColorTone
}
`),n()()()(),t(672,"tr",9)(673,"td",17)(674,"div",11)(675,"span",12),e(676," categorical"),i(677,"br"),n()()(),t(678,"td",18)(679,"code",27),e(680,"PoThemeColorCategorical"),n()(),t(681,"td",13)(682,"em")(683,"strong"),e(684,"(opcional)"),n()(),t(685,"p"),e(686,"Cores da Categorical a serem aplicadas."),n(),t(687,"p"),e(688,"Exemplo de uso:"),n(),t(689,"pre")(690,"code",26),e(691,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),n()()()(),t(692,"tr",9)(693,"td",17)(694,"div",11)(695,"span",12),e(696," categorical-overlay"),i(697,"br"),n()()(),t(698,"td",18)(699,"code",27),e(700,"PoThemeColorCategorical"),n()(),t(701,"td",13)(702,"em")(703,"strong"),e(704,"(opcional)"),n()(),t(705,"p"),e(706,"Cores da Categorical a serem aplicadas."),n(),t(707,"p"),e(708,"Exemplo de uso:"),n(),t(709,"pre")(710,"code",26),e(711,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),n()()()(),t(712,"tr",9)(713,"td",17)(714,"div",11)(715,"span",12),e(716," neutral"),i(717,"br"),n()()(),t(718,"td",18)(719,"code",28),e(720,"PoThemeColorNeutral"),n()(),t(721,"td",13)(722,"em")(723,"strong"),e(724,"(opcional)"),n()(),t(725,"p"),e(726,"Cores Neutrals a serem aplicadas."),n(),t(727,"p"),e(728,"Exemplo de uso:"),n(),t(729,"pre")(730,"code",26),e(731,`PoThemeColor.neutral = {
 light: { '00': string, '05': string, '10': string, '20': string, '30': string },
 mid: { '40': string, '60': string },
 dark: { '70': string, '80': string, '90': string, '95': string },
}
`),n()()()()(),t(732,"h4",22)(733,"code",5),e(734,"PoThemeColorAction"),n()(),t(735,"div",2)(736,"p"),e(737,"Interface para as cores de a\xE7\xE3o do tema."),n()(),t(738,"h4",7),e(739,"Propriedades"),n(),t(740,"table",14)(741,"tr",15)(742,"th",16),e(743,"Nome"),n(),t(744,"th",16),e(745,"Tipo"),n(),t(746,"th",16),e(747,"Descri\xE7\xE3o"),n()(),t(748,"tr",9)(749,"td",17)(750,"div",11)(751,"span",12),e(752," default"),i(753,"br"),n()()(),t(754,"td",18)(755,"code",29),e(756,"string"),n()(),t(757,"td",13)(758,"em")(759,"strong"),e(760,"(opcional)"),n()(),t(761,"p"),e(762,"Cores da Action 'Default'."),n(),t(763,"p"),e(764,"Exemplo de uso:"),n(),t(765,"pre")(766,"code",26),e(767,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
}
`),n()()()(),t(768,"tr",9)(769,"td",17)(770,"div",11)(771,"span",12),e(772," disabled"),i(773,"br"),n()()(),t(774,"td",18)(775,"code",29),e(776,"string"),n()(),t(777,"td",13)(778,"em")(779,"strong"),e(780,"(opcional)"),n()(),t(781,"p"),e(782,"Cores da Action de 'disabled'."),n(),t(783,"p"),e(784,"Exemplo de uso:"),n(),t(785,"pre")(786,"code",26),e(787,`PoThemeColor.action = {
 disabled: 'var(--color-neutral-light-30)',
}
`),n()()()(),t(788,"tr",9)(789,"td",17)(790,"div",11)(791,"span",12),e(792," focus"),i(793,"br"),n()()(),t(794,"td",18)(795,"code",29),e(796,"string"),n()(),t(797,"td",13)(798,"em")(799,"strong"),e(800,"(opcional)"),n()(),t(801,"p"),e(802,"Cores da Action para 'focus'."),n(),t(803,"p"),e(804,"Exemplo de uso:"),n(),t(805,"pre")(806,"code",26),e(807,`PoThemeColor.action = {
 focus: 'var(--color-brand-01-darkest)'
}
`),n()()()(),t(808,"tr",9)(809,"td",17)(810,"div",11)(811,"span",12),e(812," hover"),i(813,"br"),n()()(),t(814,"td",18)(815,"code",29),e(816,"string"),n()(),t(817,"td",13)(818,"em")(819,"strong"),e(820,"(opcional)"),n()(),t(821,"p"),e(822,"Cores da Action para 'hover'."),n(),t(823,"p"),e(824,"Exemplo de uso:"),n(),t(825,"pre")(826,"code",26),e(827,`PoThemeColor.action = {
 hover: 'var(--color-brand-01-dark)',
}
`),n()()()(),t(828,"tr",9)(829,"td",17)(830,"div",11)(831,"span",12),e(832," pressed"),i(833,"br"),n()()(),t(834,"td",18)(835,"code",29),e(836,"string"),n()(),t(837,"td",13)(838,"em")(839,"strong"),e(840,"(opcional)"),n()(),t(841,"p"),e(842,"Cores da Action para 'pressed'."),n(),t(843,"p"),e(844,"Exemplo de uso:"),n(),t(845,"pre")(846,"code",26),e(847,`PoThemeColor.action = {
 pressed: 'var(--color-brand-01-darker)',
}
`),n()()()()(),t(848,"h4",22)(849,"code",5),e(850,"PoThemeColorNeutral"),n()(),t(851,"div",2)(852,"p"),e(853,"Interface para as cores neutras do tema."),n()(),t(854,"h4",7),e(855,"Propriedades"),n(),t(856,"table",14)(857,"tr",15)(858,"th",16),e(859,"Nome"),n(),t(860,"th",16),e(861,"Tipo"),n(),t(862,"th",16),e(863,"Descri\xE7\xE3o"),n()(),t(864,"tr",9)(865,"td",17)(866,"div",11)(867,"span",12),e(868," dark"),i(869,"br"),n()()(),t(870,"td",18)(871,"code",30),e(872,`{ '70'?: string; '80'?: string; '90'?: string; '95'?: string;
}`),n()(),t(873,"td",13)(874,"em")(875,"strong"),e(876,"(opcional)"),n()(),t(877,"p"),e(878,"Cores Neutrals do tipo 'dark'."),n(),t(879,"p"),e(880,"Exemplo de uso:"),n(),t(881,"pre")(882,"code",26),e(883,`PoThemeColor.neutral.dark = {
 '70': '#4a5c60',
 '80': '#2c3739',
 '90': '#1d2426',
 '95': '#0b0e0e',
}
`),n()()()(),t(884,"tr",9)(885,"td",17)(886,"div",11)(887,"span",12),e(888," light"),i(889,"br"),n()()(),t(890,"td",18)(891,"code",31),e(892,`{ '00'?: string; '05'?: string; '10'?: string; '20'?: string; '30'?: string;
}`),n()(),t(893,"td",13)(894,"em")(895,"strong"),e(896,"(opcional)"),n()(),t(897,"p"),e(898,"Cores Neutrals do tipo 'light'."),n(),t(899,"p"),e(900,"Exemplo de uso:"),n(),t(901,"pre")(902,"code",26),e(903,`PoThemeColor.neutral.light = {
 '00': '#ffffff',
 '05': '#fbfbfb',
 '10': '#eceeee',
 '20': '#dadedf',
 '30': '#b6bdbf'
}
`),n()()()(),t(904,"tr",9)(905,"td",17)(906,"div",11)(907,"span",12),e(908," mid"),i(909,"br"),n()()(),t(910,"td",18)(911,"code",32),e(912,`{ '40'?: string; '60'?: string;
}`),n()(),t(913,"td",13)(914,"em")(915,"strong"),e(916,"(opcional)"),n()(),t(917,"p"),e(918,"Cores Neutrals do tipo 'mid'."),n(),t(919,"p"),e(920,"Exemplo de uso:"),n(),t(921,"pre")(922,"code",26),e(923,`PoThemeColor.neutral.mid = {
 '40': '#9da7a9',
 '60': '#6e7c7f',
}
`),n()()()()(),t(924,"h4",22)(925,"code",5),e(926,"PoThemeTokens"),n()(),t(927,"div",2)(928,"p"),e(929,"Interface para o tema da aplica\xE7\xE3o."),n()(),t(930,"h4",22)(931,"code",5),e(932,"PoThemeToken"),n()(),t(933,"div",2)(934,"p"),e(935,"Interface para os tokens do Tema."),n()(),t(936,"h4",7),e(937,"Propriedades"),n(),t(938,"table",14)(939,"tr",15)(940,"th",16),e(941,"Nome"),n(),t(942,"th",16),e(943,"Tipo"),n(),t(944,"th",16),e(945,"Descri\xE7\xE3o"),n()(),t(946,"tr",9)(947,"td",17)(948,"div",11)(949,"span",12),e(950," color"),i(951,"br"),n()()(),t(952,"td",18)(953,"code",33),e(954,"PoThemeColor"),n()(),t(955,"td",13)(956,"em")(957,"strong"),e(958,"(opcional)"),n()(),t(959,"p"),e(960,"Tokens do tipo 'color'"),n()()(),t(961,"tr",9)(962,"td",17)(963,"div",11)(964,"span",12),e(965," onRoot"),i(966,"br"),n()()(),t(967,"td",18)(968,"code",34),e(969,"DynamicProperties"),n()(),t(970,"td",13)(971,"em")(972,"strong"),e(973,"(opcional)"),n()(),t(974,"p"),e(975,`Tokens do tipo 'onRoot'
Esta propriedade adicionar\xE1 todos os tokens passados e adicionado direto no `),t(976,"code"),e(977,":root"),n()(),t(978,"p"),e(979,"Exemplo de uso:"),n(),t(980,"pre")(981,"code",26),e(982,`onRoot: {
  '--color-page-background-color-page': '#121212',
  '--color-toolbar-color-badge-text': 'var(--color-neutral-dark-95)',
},
`),n()()()(),t(983,"tr",9)(984,"td",17)(985,"div",11)(986,"span",12),e(987," perComponent"),i(988,"br"),n()()(),t(989,"td",18)(990,"code",34),e(991,"DynamicProperties"),n()(),t(992,"td",13)(993,"em")(994,"strong"),e(995,"(opcional)"),n()(),t(996,"p"),e(997,"Tokens do tipo 'perComponent'"),n(),t(998,"p"),e(999,"Exemplo de uso:"),n(),t(1e3,"pre")(1001,"code",26),e(1002,`perComponent: {
  'po-badge': {
    '--color': 'var(--color-neutral-dark-95)',
  },
  'po-container': {
    '--background': '#121212',
  },
},
`),n()()()()(),t(1003,"h4",22)(1004,"code",5),e(1005,"PoTheme"),n()(),t(1006,"div",2)(1007,"p"),e(1008,"Interface para o m\xE9todo "),t(1009,"code"),e(1010,"setTheme()"),n(),e(1011,"."),n()(),t(1012,"h4",7),e(1013,"Propriedades"),n(),t(1014,"table",14)(1015,"tr",15)(1016,"th",16),e(1017,"Nome"),n(),t(1018,"th",16),e(1019,"Tipo"),n(),t(1020,"th",16),e(1021,"Descri\xE7\xE3o"),n()(),t(1022,"tr",9)(1023,"td",17)(1024,"div",11)(1025,"span",12),e(1026," active"),i(1027,"br"),n()()(),t(1028,"td",18)(1029,"code",35),e(1030,"PoThemeTypeEnum "),n(),t(1031,"code",36),e(1032," PoThemeActive"),n()(),t(1033,"td",13)(1034,"em")(1035,"strong"),e(1036,"(opcional)"),n()(),t(1037,"p"),e(1038,"Tipo e n\xEDvel de acessibilidade de tema ativo"),n()()(),t(1039,"tr",9)(1040,"td",17)(1041,"div",11)(1042,"span",12),e(1043," name"),i(1044,"br"),n()()(),t(1045,"td",18)(1046,"code",29),e(1047,"string"),n()(),t(1048,"td",13)(1049,"p"),e(1050,`Nome para o tema:
Ex.: default, totvs, sunset...`),n()()(),t(1051,"tr",9)(1052,"td",17)(1053,"div",11)(1054,"span",12),e(1055," type"),i(1056,"br"),n()()(),t(1057,"td",18)(1058,"code",37),e(1059,"PoThemeType "),n(),t(1060,"code",38),e(1061," Array<PoThemeType>"),n()(),t(1062,"td",13)(1063,"p"),e(1064,"Tipo de tema:"),n(),t(1065,"ul")(1066,"li"),e(1067,"light"),n(),t(1068,"li"),e(1069,"dark"),n()()()()(),t(1070,"h3"),e(1071,"Enums"),n(),t(1072,"h4",4)(1073,"code",5),e(1074,"PoThemeA11yEnum"),n()(),t(1075,"div",2)(1076,"p"),e(1077,"Enum para configurar o n\xEDvel de acessibilidade dos componentes atrav\xE9s do servi\xE7o de tema."),n(),t(1078,"pre")(1079,"code"),e(1080,`import { PoThemeA11yEnum } from '@po-ui/theme';

// Definindo o n\xEDvel de acessibilidade ao configurar as cores e o tipo do tema (light | dark)
themeService.setTheme(...theme, ...type, PoThemeA11yEnum.AA);

// Definindo o n\xEDvel de acessibilidade ao configurar apenas as cores do tema
themeService.setThemeA11y(...theme, PoThemeA11yEnum.AAA);

// Alterando o n\xEDvel de acessibilidade com as cores do tema j\xE1 definidas
themeService.setCurrentThemeA11y(PoThemeA11yEnum.AAA);
`),n()()(),t(1081,"h4",7),e(1082,"Propriedades"),n(),t(1083,"table",14)(1084,"tr",15)(1085,"th",16),e(1086,"Nome"),n(),t(1087,"th",16),e(1088,"Descri\xE7\xE3o"),n()(),t(1089,"tr",9)(1090,"td",17)(1091,"div",11)(1092,"span",12),e(1093," AA"),i(1094,"br"),n()()(),t(1095,"td",13)(1096,"p"),e(1097,"N\xEDvel de acessibilidade AA."),n(),t(1098,"ul")(1099,"li"),e(1100,"Define a espessura do "),t(1101,"code"),e(1102,"outline"),n(),e(1103," para "),t(1104,"strong"),e(1105,"2px"),n(),e(1106,"."),n(),t(1107,"li"),e(1108,"Disponibiliza o tamanho "),t(1109,"code"),e(1110,"small"),n(),e(1111,` para componentes de formul\xE1rio (buttons, inputs, checkboxes, radios e switches)
conforme suas documenta\xE7\xF5es.`),n()()()(),t(1112,"tr",9)(1113,"td",17)(1114,"div",11)(1115,"span",12),e(1116," AAA"),i(1117,"br"),n()()(),t(1118,"td",13)(1119,"p"),e(1120,"N\xEDvel de acessibilidade AAA."),n(),t(1121,"ul")(1122,"li"),e(1123,"Define a espessura do "),t(1124,"code"),e(1125,"outline"),n(),e(1126," para "),t(1127,"strong"),e(1128,"4px"),n(),e(1129,"."),n(),t(1130,"li"),e(1131,"N\xE3o disponibiliza o tamanho "),t(1132,"code"),e(1133,"small"),n(),e(1134," para componentes de formul\xE1rio."),n()()()()(),t(1135,"h4",4)(1136,"code",5),e(1137,"PoThemeTypeEnum"),n()(),t(1138,"div",2)(1139,"p"),e(1140,"Enum utilizado para configurar o tipo de tema suportado, \xE9 poss\xEDvel alternar entre os tipos definidos."),n(),t(1141,"pre")(1142,"code"),e(1143,`import { PoThemeTypeEnum } from '@po-ui/theme';

// Definindo o tipo de tema como claro
themeService.setTheme(...theme, PoThemeTypeEnum.light);

// Definindo o tipo de tema como escuro
themeService.setTheme(...theme, PoThemeTypeEnum.dark);

// Alterando o tipo do tema para um tema j\xE1 aplicado
themeService.setCurrentThemeType(PoThemeTypeEnum.dark);
`),n()()(),t(1144,"h4",7),e(1145,"Propriedades"),n(),t(1146,"table",14)(1147,"tr",15)(1148,"th",16),e(1149,"Nome"),n(),t(1150,"th",16),e(1151,"Descri\xE7\xE3o"),n()(),t(1152,"tr",9)(1153,"td",17)(1154,"div",11)(1155,"span",12),e(1156," light"),i(1157,"br"),n()()(),t(1158,"td",13)(1159,"p"),e(1160,"Define o tema como claro."),n()()(),t(1161,"tr",9)(1162,"td",17)(1163,"div",11)(1164,"span",12),e(1165," dark"),i(1166,"br"),n()()(),t(1167,"td",13)(1168,"p"),e(1169,"Define o tema como escuro."),n()()()()())},encapsulation:2})}return r})();var fe=(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=1;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,o){this.route=m,this.router=o}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let o=m.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(o){return new(o||r)(x($),x(ee))};static \u0275cmp=S({type:r,selectors:[["ng-component"]],standalone:!1,decls:6,vars:4,consts:[["p-title","Theme",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,a){o&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),E("p-click",function(){return a.changeTab("doc")}),i(3,"sample-po-theme-doc"),n(),t(4,"po-tab",3),E("p-click",function(){return a.changeTab("web")}),i(5,"sample-po-theme-labs-view"),n()()()),o&2&&(d("p-actions",a.actions),l(2),d("p-active",a.activeTab==="doc"),l(2),d("p-hide",a.hidePoWebSample)("p-active",a.activeTab==="web"))},dependencies:[he,P,D,be,ge],encapsulation:2})}return r})();var Le=[{path:"",component:fe}],Te=(()=>{class r{static \u0275fac=function(o){return new(o||r)};static \u0275mod=y({type:r});static \u0275inj=A({imports:[F.forChild(Le),F]})}return r})();var Xe=(()=>{class r{static \u0275fac=function(o){return new(o||r)};static \u0275mod=y({type:r});static \u0275inj=A({imports:[Se,Te]})}return r})();export{Xe as DocPoThemeModule};
