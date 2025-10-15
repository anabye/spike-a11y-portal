import{o as Ee,p as Se}from"./chunk-SZMGPBRK.js";import{Ab as D,Ea as le,Eb as ue,Fa as de,Ma as pe,Q as ne,Qa as se,U as ie,Xa as ce,fa as ae,ga as oe,ha as re,ia as _,j as x,ja as N,ka as me,la as M,ma as O,na as C,nb as he,v as te,zb as P}from"./chunk-OTVKLKYF.js";import{$a as q,Aa as d,Ac as p,Cb as U,Da as I,Dc as H,Ec as Q,Gc as J,Hc as K,Kc as X,La as t,Lc as Y,Ma as n,N as A,Na as i,Pc as Z,Ra as V,Sa as E,U as b,Uc as $,V as g,Wc as ee,Yc as F,_a as R,a as c,ab as j,b as u,cb as e,eb as z,gb as L,hb as k,ib as w,ja as l,jb as B,ka as v,lb as W,qa as S,ra as y,xb as G}from"./chunk-KZJHT32G.js";var Ae=["reactiveFormData"],ve=(()=>{class r{cdr;fb;poTheme;reactiveFormModal;a11yLevel;a11yLevelStorage="po-a11y-AAA";reactiveForm;theme=0;themeStorage="po-theme-default";a11yChangeListenerAAA;a11yChangeListenerAA;themeChangeListenerDark;themeChangeListenerDefault;a11yLevelOptions=[{label:"AA",value:"AA"},{label:"AAA",value:"AAA"}];themeOptions=[{label:"Light",value:0},{label:"Dark",value:1}];modalPrimaryAction={action:()=>this.reactiveFormModal.close(),label:"Close"};poThemeSample={name:"po-theme",type:{light:{color:{brand:{"01":{lightest:"#f2eaf6",lighter:"#d9c2e5",light:"#bd94d1",base:"#753399",dark:"#5b1c7d",darker:"#400e58",darkest:"#260538"},"02":{base:"#b92f72"},"03":{base:"#ffd464"}},action:u(c({},oe),{disabled:"var(--color-neutral-mid-40)"}),feedback:u(c({},_),{info:u(c({},_.info),{base:"#0079b8"})}),neutral:c({},re)},onRoot:u(c({},N.onRoot),{"--color-page-background-color-page":"var(--color-neutral-light-05)"}),perComponent:c({},N.perComponent)},dark:{color:{brand:{"01":{darkest:"#f2eaf6",darker:"#d9c2e5",dark:"#bd94d1",base:"#753399",light:"#5b1c7d",lighter:"#400e58",lightest:"#260538"},"02":{base:"#b92f72"},"03":{base:"#ffd464"}},action:u(c({},me),{disabled:"var(--color-neutral-mid-40)"}),feedback:u(c({},M),{info:u(c({},M.info),{base:"#0079b8"})}),neutral:{light:{"00":"#1c1c1c","05":"#202020",10:"#2b2b2b",20:"#3b3b3b",30:"#5a5a5a"},mid:{40:"#7c7c7c",60:"#a1a1a1"},dark:{70:"#c1c1c1",80:"#d9d9d9",90:"#eeeeee",95:"#fbfbfb"}}},onRoot:u(c({},O.onRoot),{"--color-page-background-color-page":"var(--color-neutral-light-05)"}),perComponent:c({},O.perComponent)}},active:ae.light};constructor(m,o,a){this.cdr=m,this.fb=o,this.poTheme=a;let s=this.poTheme.applyTheme();this.a11yLevel=this.poTheme.getA11yLevel(),s?this.theme=s.active||0:(this.poTheme.setTheme(this.poThemeSample,this.theme,this.a11yLevel),this.theme=this.poThemeSample.active),this.createReactiveForm(),this.a11yLevel==="AA"&&this.poTheme.setA11yDefaultSizeSmall(!0)}ngOnInit(){localStorage.getItem("po-ui-theme")&&(this.themeStorage=localStorage.getItem("po-ui-theme")),this.theme=this.themeStorage==="po-theme-default"?0:1,this.changeTheme(this.theme,!1),localStorage.getItem("po-ui-a11y")&&(this.a11yLevelStorage=localStorage.getItem("po-ui-a11y")),this.a11yLevel=this.a11yLevelStorage==="po-a11y-AAA"?x.AAA:x.AA,this.changeA11yLevel(this.a11yLevel,!1),this.themeChangeListenerDefault=()=>{this.changeTheme(0,!1),this.theme=0},this.themeChangeListenerDark=()=>{this.changeTheme(1,!1),this.theme=1},this.a11yChangeListenerAAA=()=>{this.changeA11yLevel(x.AAA,!1),this.a11yLevel=x.AAA},this.a11yChangeListenerAA=()=>{this.changeA11yLevel(x.AA,!1),this.a11yLevel=x.AA},window.addEventListener("po-a11y-AA",this.a11yChangeListenerAA),window.addEventListener("po-a11y-AAA",this.a11yChangeListenerAAA),window.addEventListener("po-theme-default",this.themeChangeListenerDefault),window.addEventListener("po-theme-dark",this.themeChangeListenerDark)}ngOnDestroy(){window.removeEventListener("po-theme-default",this.themeChangeListenerDefault),window.removeEventListener("po-theme-dark",this.themeChangeListenerDark),window.removeEventListener("po-a11y-AA",this.a11yChangeListenerAA),window.removeEventListener("po-a11y-AAA",this.a11yChangeListenerAAA)}changeA11yLevel(m,o=!0){this.poTheme.setCurrentThemeA11y(m),m==="AA"?localStorage.setItem("po-ui-a11y","po-a11y-AA"):localStorage.setItem("po-ui-a11y","po-a11y-AAA"),m===x.AA&&this.poTheme.setA11yDefaultSizeSmall(!0),o&&window.dispatchEvent(new Event("po-sample-change-a11y"))}changeTheme(m,o=!0){this.poTheme.setTheme(this.poThemeSample,m,this.a11yLevel),m===1?localStorage.setItem("po-ui-theme","po-theme-dark"):localStorage.setItem("po-ui-theme","po-theme-default"),o&&window.dispatchEvent(new Event("po-sample-change-theme")),this.a11yLevel==="AA"&&this.poTheme.setA11yDefaultSizeSmall(!0)}createReactiveForm(){this.reactiveForm=this.fb.group({name:["",p.compose([p.required,p.minLength(5),p.maxLength(30)])],address:["",p.compose([p.required,p.minLength(5),p.maxLength(50)])],number:["",p.compose([p.required,p.min(1),p.max(99999)])],email:["",p.required],website:["",p.required]})}saveForm(){this.reactiveFormModal.open()}static \u0275fac=function(o){return new(o||r)(v(G),v(Z),v(C))};static \u0275cmp=S({type:r,selectors:[["sample-po-theme-labs"]],viewQuery:function(o,a){if(o&1&&R(Ae,7),o&2){let s;q(s=j())&&(a.reactiveFormModal=s.first)}},standalone:!1,features:[B([C])],decls:22,vars:12,consts:[["reactiveFormData",""],["p-title","Example"],[3,"formGroup"],["formControlName","name","p-clean","","p-icon","an an-user","p-label","Customer name",1,"po-lg-6"],["formControlName","email","p-label","Email","p-clean","",1,"po-lg-6"],["formControlName","address","p-clean","","p-icon","an an-map-pin","p-label","Address",1,"po-lg-4","po-md-8"],["formControlName","number","p-label","Number","p-clean","",1,"po-lg-2","po-md-4"],["formControlName","website","p-label","Website","p-clean","",1,"po-lg-6"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Save successful",3,"p-primary-action"],["p-label","Name",1,"po-md-12",3,"p-value"],["p-label","Address",1,"po-md-6",3,"p-value"],["p-label","Number",1,"po-md-6",3,"p-value"],["p-label","Email",1,"po-md-6",3,"p-value"],["p-label","Website",1,"po-md-6",3,"p-value"],[1,"po-row","po-mt-3"],["name","theme","p-label","Theme Type",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","a11ylevel","p-label","Acessibility Level",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"]],template:function(o,a){if(o&1){let s=V();t(0,"po-widget",1)(1,"form",2),i(2,"po-input",3)(3,"po-email",4)(4,"po-input",5)(5,"po-number",6)(6,"po-url",7),t(7,"div",8)(8,"po-button",9),E("p-click",function(){return b(s),g(a.saveForm())}),n()()(),t(9,"po-modal",10,0)(11,"div",8),i(12,"po-info",11),n(),t(13,"div",8),i(14,"po-info",12)(15,"po-info",13),n(),t(16,"div",8),i(17,"po-info",14)(18,"po-info",15),n()()(),t(19,"div",16)(20,"po-radio-group",17),w("ngModelChange",function(h){return b(s),k(a.theme,h)||(a.theme=h),g(h)}),E("p-change",function(h){return b(s),g(a.changeTheme(h))}),n(),t(21,"po-radio-group",18),w("ngModelChange",function(h){return b(s),k(a.a11yLevel,h)||(a.a11yLevel=h),g(h)}),E("p-change",function(h){return b(s),g(a.changeA11yLevel(h))}),n()()}o&2&&(l(),d("formGroup",a.reactiveForm),l(7),d("p-disabled",!a.reactiveForm.valid),l(),d("p-primary-action",a.modalPrimaryAction),l(3),d("p-value",a.reactiveForm.controls.name.value),l(2),d("p-value",a.reactiveForm.controls.address.value),l(),d("p-value",a.reactiveForm.controls.number.value),l(2),d("p-value",a.reactiveForm.controls.email.value),l(),d("p-value",a.reactiveForm.controls.website.value),l(2),L("ngModel",a.theme),d("p-options",a.themeOptions),l(),L("ngModel",a.a11yLevel),d("p-options",a.a11yLevelOptions))},dependencies:[K,H,Q,J,X,Y,te,ne,le,de,pe,se,ce,ie,ue],encapsulation:2})}return r})();var Ce=r=>({"docs-sample-code-tabs":r}),be=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-theme-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,a){o&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Theme Labs"),n(),t(4,"a",2),E("click",function(){return a.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-theme-labs/sample-po-theme-labs.component.html"),n(),t(13,"pre",7),e(14,`<po-widget p-title="Example">
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
`),n()()()()(),t(21,"div",10),i(22,"sample-po-theme-labs"),n(),i(23,"hr")),o&2&&(l(5),I("po-icon "+a.sampleCodeButtonIcon),l(),z(" ",a.sampleCodeButtonLabel,""),l(),d("ngClass",W(4,Ce,a.hideSampleCodeTabs)))},dependencies:[U,Ee,P,D,ve],encapsulation:2})}return r})();var ge=(()=>{class r{static \u0275fac=function(o){return new(o||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-theme-doc"]],standalone:!1,decls:1185,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","guides/theme-service"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-method-table"],[1,"docs-api-properties-row"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-property-description"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-name-cell"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type"],["pan","",1,"docs-api-property-type","'small'"],["pan","",1,"docs-api-property-type","'medium'"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoThemeColorAction"],[1,"language-javascript"],["pan","",1,"docs-api-property-type","poThemeColorBrand"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","PoThemeColorCategorical"],["pan","",1,"docs-api-property-type","PoThemeColorNeutral"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","{","'70'?:","string;","'80'?:","string;","'90'?:","string;","'95'?:","string;","}"],["pan","",1,"docs-api-property-type","{","'00'?:","string;","'05'?:","string;","'10'?:","string;","'20'?:","string;","'30'?:","string;","}"],["pan","",1,"docs-api-property-type","{","'40'?:","string;","'60'?:","string;","}"],["pan","",1,"docs-api-property-type","PoThemeColor"],["pan","",1,"docs-api-property-type","DynamicProperties"],["pan","",1,"docs-api-property-type","PoThemeTypeEnum"],["pan","",1,"docs-api-property-type","PoThemeActive"],["pan","",1,"docs-api-property-type","PoThemeType"],["pan","",1,"docs-api-property-type","Array<PoThemeType>"]],template:function(o,a){o&1&&(t(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoThemeModule } from '@po-ui/ng-components';"),n()(),t(4,"div",2)(5,"p"),e(6,"M\xF3dulo do servi\xE7o PoThemeService."),n()(),t(7,"h3",3),e(8,"Services"),n(),t(9,"h4",4)(10,"code",5),e(11,"PoThemeService"),n()(),t(12,"div",2)(13,"p"),e(14,"O servi\xE7o "),t(15,"code"),e(16,"PoThemeService"),n(),e(17," permite customizar as cores do tema padr\xE3o do "),t(18,"code"),e(19,"PO-UI"),n(),e(20," e definir o n\xEDvel de acessibilidade mais adequado ao projeto."),n(),t(21,"p"),e(22,"O n\xEDvel "),t(23,"strong"),e(24,"AAA"),n(),e(25," (padr\xE3o) garante maior contraste, \xE1reas clic\xE1veis amplas e espa\xE7amentos maiores entre os elementos, enquanto o n\xEDvel "),t(26,"strong"),e(27,"AA"),n(),e(28," mant\xE9m a conformidade com as diretrizes de acessibilidade, mas com propor\xE7\xF5es mais equilibradas e contornos mais sutis."),n(),t(29,"p"),e(30,"O servi\xE7o tamb\xE9m possibilita configurar a "),t(31,"strong"),e(32,"densidade de espa\xE7amentos"),n(),e(33,", permitindo ajustar o espa\xE7o entre e dentro dos componentes. Essa configura\xE7\xE3o pode ser utilizada com qualquer n\xEDvel de acessibilidade."),n(),t(34,"blockquote")(35,"p"),e(36,"Observa\xE7\xE3o: a customiza\xE7\xE3o das cores de "),t(37,"code"),e(38,"feedback"),n(),e(39," n\xE3o \xE9 recomendada por motivos de acessibilidade e usabilidade."),n(),t(40,"p"),e(41,"Para saber mais sobre como customizar o tema padr\xE3o, consulte o item "),t(42,"a",6),e(43,"Customiza\xE7\xE3o de Temas usando o servi\xE7o PO-UI"),n(),e(44," na aba "),t(45,"code"),e(46,"Guias"),n(),e(47,"."),n()()(),t(48,"h3",7),e(49,"M\xE9todos"),n(),t(50,"table",8)(51,"tr",9)(52,"th",10)(53,"div",11)(54,"h4")(55,"span",12),e(56," setTheme "),n()()()()(),t(57,"tr",13)(58,"td",13)(59,"p"),e(60,"Aplica um tema ao componente de acordo com o tipo de tema e o n\xEDvel de acessibilidade especificados."),n(),t(61,"p"),e(62,"Este m\xE9todo configura o tema do componente com base no objeto "),t(63,"code"),e(64,"themeConfig"),n(),e(65," fornecido, no "),t(66,"code"),e(67,"themeType"),n(),e(68," e no "),t(69,"code"),e(70,"a11yLevel"),n(),e(71,`.
Al\xE9m disso, ele pode opcionalmente salvar a prefer\xEAncia de tema no localStorage, se solicitado.`),n()()()(),t(72,"h5")(73,"b"),e(74,"Par\xE2metros"),n()(),t(75,"table",14)(76,"tr",15)(77,"th",16),e(78,"Nome"),n(),t(79,"th",16),e(80,"Tipo"),n(),t(81,"th",16),e(82,"Descri\xE7\xE3o"),n()(),t(83,"tr",9)(84,"td",17),e(85," themeConfig"),n(),t(86,"td",18)(87,"code",19),e(88," PoTheme "),n()(),t(89,"td",13)(90,"p"),e(91,"Configura\xE7\xE3o de tema a ser aplicada ao componente."),n()()(),t(92,"tr",9)(93,"td",17),e(94," themeType"),n(),t(95,"td",18)(96,"code",19),e(97," PoThemeTypeEnum "),n()(),t(98,"td",13)(99,"p"),e(100,"(Opcional) Tipo de tema, podendo ser 'light' (claro) ou 'dark' (escuro). O tema claro \xE9 o padr\xE3o."),n()()(),t(101,"tr",9)(102,"td",17),e(103," a11yLevel"),n(),t(104,"td",18)(105,"code",19),e(106," PoThemeA11yEnum "),n()(),t(107,"td",13)(108,"p"),e(109,"(Opcional) N\xEDvel de acessibilidade dos componentes, podendo ser AA ou AAA. Padr\xE3o \xE9 AAA."),n()()(),t(110,"tr",9)(111,"td",17),e(112," persistPreference"),n(),t(113,"td",18)(114,"code",19),e(115," boolean "),n()(),t(116,"td",13)(117,"p"),e(118,`(Opcional) Define se a prefer\xEAncia de tema deve ser salva no
localStorage para persist\xEAncia. Por padr\xE3o \xE9 `),t(119,"code"),e(120,"true"),n(),e(121,", ou seja, a prefer\xEAncia ser\xE1 salva automaticamente."),n()()()(),i(122,"br"),t(123,"table",8)(124,"tr",9)(125,"th",10)(126,"div",11)(127,"h4")(128,"span",12),e(129," getA11yLevel "),n()()()()(),t(130,"tr",13)(131,"td",13)(132,"p"),e(133,`Retorna o n\xEDvel de acessibilidade configurado no tema.
Se n\xE3o estiver configurado, retorna `),t(134,"code"),e(135,"AAA"),n(),e(136," como padr\xE3o."),n()()()(),t(137,"h5")(138,"b"),e(139,"Retorno"),n()(),t(140,"table",14)(141,"tr",15)(142,"th",16),e(143,"Tipo"),n(),t(144,"th",16),e(145,"Descri\xE7\xE3o"),n()(),t(146,"tr",9)(147,"td",18)(148,"code",19),e(149,"PoThemeA11yEnum"),n()(),t(150,"td",13)(151,"p"),e(152,"O n\xEDvel de acessibilidade, que pode ser "),t(153,"code"),e(154,"AA"),n(),e(155," ou "),t(156,"code"),e(157,"AAA"),n(),e(158,"."),n()()()(),i(159,"br"),t(160,"table",8)(161,"tr",9)(162,"th",10)(163,"div",11)(164,"h4")(165,"span",12),e(166," setA11yDefaultSizeSmall "),n()()()()(),t(167,"tr",13)(168,"td",13)(169,"p"),e(170,"Define o tamanho "),t(171,"code"),e(172,"small"),n(),e(173,` como padr\xE3o para componentes de formul\xE1rio que n\xE3o possuem um tamanho definido. Essa
configura\xE7\xE3o \xE9 aplicada globalmente apenas quando o n\xEDvel de acessibilidade for `),t(174,"code"),e(175,"AA"),n(),e(176,`. O valor definido \xE9 salvo no
`),t(177,"code"),e(178,"localStorage"),n(),e(179," sob a chave "),t(180,"code"),e(181,"po-default-size"),n(),e(182,"."),n(),t(183,"blockquote")(184,"p"),e(185,"Para garantir que o tamanho "),t(186,"code"),e(187,"small"),n(),e(188,` seja aplicado corretamente a todos os componentes, recomendamos
definir esta configura\xE7\xE3o `),t(189,"strong"),e(190,"junto com o n\xEDvel de acessibilidade "),t(191,"code"),e(192,"AA"),n(),e(193," na inicializa\xE7\xE3o da aplica\xE7\xE3o"),n(),e(194,`.
Se for aplicada em tempo de execu\xE7\xE3o, ser\xE1 necess\xE1rio recarregar a aplica\xE7\xE3o (`),t(195,"code"),e(196,"reload"),n(),e(197,`)
para que os estilos sejam aplicados corretamente.
Para ajustar a densidade visual dos componentes agrupadores (como pages, container, etc.), utilize tamb\xE9m
o m\xE9todo `),t(198,"code"),e(199,"setDensityMode"),n(),e(200," conforme necess\xE1rio."),n()()()()(),t(201,"h5")(202,"b"),e(203,"Par\xE2metros"),n()(),t(204,"table",14)(205,"tr",15)(206,"th",16),e(207,"Nome"),n(),t(208,"th",16),e(209,"Tipo"),n(),t(210,"th",16),e(211,"Descri\xE7\xE3o"),n()(),t(212,"tr",9)(213,"td",17),e(214," enable"),n(),t(215,"td",18)(216,"code",19),e(217," boolean "),n()(),t(218,"td",13)(219,"p"),e(220,"Habilita ou desabilita o tamanho "),t(221,"code"),e(222,"small"),n(),e(223," globalmente."),n()()()(),i(224,"br"),t(225,"table",8)(226,"tr",9)(227,"th",10)(228,"div",11)(229,"h4")(230,"span",12),e(231," getDensityMode "),n()()()()(),t(232,"tr",13)(233,"td",13)(234,"p"),e(235,`Retorna o modo de adensamento dos componentes agrupadores.
Se n\xE3o estiver configurado, retorna `),t(236,"code"),e(237,"medium"),n(),e(238," como padr\xE3o."),n()()()(),t(239,"h5")(240,"b"),e(241,"Retorno"),n()(),t(242,"table",14)(243,"tr",15)(244,"th",16),e(245,"Tipo"),n(),t(246,"th",16),e(247,"Descri\xE7\xE3o"),n()(),t(248,"tr",9)(249,"td",18)(250,"code",19),e(251,"PoDensityMode"),n()(),t(252,"td",13)(253,"p"),e(254,"O modo de adensamento, que pode ser "),t(255,"code"),e(256,"small"),n(),e(257," ou "),t(258,"code"),e(259,"medium"),n(),e(260,"."),n()()()(),i(261,"br"),t(262,"table",8)(263,"tr",9)(264,"th",10)(265,"div",11)(266,"h4")(267,"span",12),e(268," setDensityMode "),n()()()()(),t(269,"tr",13)(270,"td",13)(271,"p"),e(272,"Aplica o modo de adensamento compacto ("),t(273,"code"),e(274,"small"),n(),e(275,") ou espa\xE7oso ("),t(276,"code"),e(277,"medium"),n(),e(278,`) para os componentes agrupadores,
independentemente do n\xEDvel de acessibilidade. O valor definido \xE9 salvo no `),t(279,"code"),e(280,"localStorage"),n(),e(281,` sob a chave
`),t(282,"code"),e(283,"po-density-mode"),n(),e(284,"."),n()()()(),t(285,"h5")(286,"b"),e(287,"Par\xE2metros"),n()(),t(288,"table",14)(289,"tr",15)(290,"th",16),e(291,"Nome"),n(),t(292,"th",16),e(293,"Tipo"),n(),t(294,"th",16),e(295,"Descri\xE7\xE3o"),n()(),t(296,"tr",9)(297,"td",17),e(298," mode"),n(),t(299,"td",18)(300,"code",20),e(301," 'small' "),n(),t(302,"code",21),e(303," 'medium' "),n()(),t(304,"td",13)(305,"p"),e(306,"Define o modo de densidade: "),t(307,"code"),e(308,"small"),n(),e(309," para compacto, "),t(310,"code"),e(311,"medium"),n(),e(312,` para espa\xE7oso.
O valor padr\xE3o \xE9 `),t(313,"code"),e(314,"medium"),n(),e(315,"."),n()()()(),i(316,"br"),t(317,"table",8)(318,"tr",9)(319,"th",10)(320,"div",11)(321,"h4")(322,"span",12),e(323," persistThemeActive "),n()()()()(),t(324,"tr",13)(325,"td",13)(326,"p"),e(327,`Restaura e aplica as prefer\xEAncias visuais do usu\xE1rio para o tema da aplica\xE7\xE3o, garantindo que essas prefer\xEAncias
sejam persistidas no `),t(328,"code"),e(329,"localStorage"),n(),e(330," para uso em recarregamentos futuros."),n()()()(),t(331,"h5")(332,"b"),e(333,"Retorno"),n()(),t(334,"table",14)(335,"tr",15)(336,"th",16),e(337,"Tipo"),n(),t(338,"th",16),e(339,"Descri\xE7\xE3o"),n()(),t(340,"tr",9)(341,"td",18)(342,"code",19),e(343,"PoTheme"),n()(),t(344,"td",13)(345,"p"),e(346,"O tema atualmente aplicado."),n()()()(),i(347,"br"),t(348,"table",8)(349,"tr",9)(350,"th",10)(351,"div",11)(352,"h4")(353,"span",12),e(354," changeCurrentThemeType "),n()()()()(),t(355,"tr",13)(356,"td",13)(357,"p"),e(358,"Altera o tipo do tema armazenado e aplica os novos estilos ao documento."),n(),t(359,"p"),e(360,"Este m\xE9todo altera o tipo do tema armazenado ativo (light/dark)"),n()()()(),t(361,"h5")(362,"b"),e(363,"Par\xE2metros"),n()(),t(364,"table",14)(365,"tr",15)(366,"th",16),e(367,"Nome"),n(),t(368,"th",16),e(369,"Tipo"),n(),t(370,"th",16),e(371,"Descri\xE7\xE3o"),n()(),t(372,"tr",9)(373,"td",17),e(374," themeType"),n(),t(375,"td",18)(376,"code",19),e(377," PoThemeTypeEnum "),n()(),t(378,"td",13)(379,"p"),e(380,"O tipo de tema a ser aplicado, light ou dark."),n()()()(),i(381,"br"),t(382,"table",8)(383,"tr",9)(384,"th",10)(385,"div",11)(386,"h4")(387,"span",12),e(388," cleanThemeActive "),n()()()()(),t(389,"tr",13)(390,"td",13)(391,"p"),e(392,`M\xE9todo remove o tema armazenado e limpa todos os estilos de tema
aplicados ao documento.`),n()()()(),t(393,"h5")(394,"b"),e(395,"Par\xE2metros"),n()(),t(396,"table",14)(397,"tr",15)(398,"th",16),e(399,"Nome"),n(),t(400,"th",16),e(401,"Tipo"),n(),t(402,"th",16),e(403,"Descri\xE7\xE3o"),n()(),t(404,"tr",9)(405,"td",17),e(406," persistPreference"),n(),t(407,"td",18)(408,"code",19),e(409," boolean "),n()(),t(410,"td",13)(411,"p"),e(412,"(Opcional) Define se a prefer\xEAncia de tema n\xE3o deve ser mantida no localStorage para persist\xEAncia. "),t(413,"code"),e(414,"true"),n(),e(415," para remover, "),t(416,"code"),e(417,"false"),n(),e(418," para manter."),n()()()(),i(419,"br"),t(420,"table",8)(421,"tr",9)(422,"th",10)(423,"div",11)(424,"h4")(425,"span",12),e(426," getThemeActive "),n()()()()(),t(427,"tr",13)(428,"td",13)(429,"p"),e(430,"Retorna o tema ativo como um observable. Este m\xE9todo funcionar\xE1 apenas se o tema estiver armazenado no "),t(431,"code"),e(432,"localStorage"),n(),e(433,"."),n()()()(),t(434,"h5")(435,"b"),e(436,"Retorno"),n()(),t(437,"table",14)(438,"tr",15)(439,"th",16),e(440,"Tipo"),n(),t(441,"th",16),e(442,"Descri\xE7\xE3o"),n()(),t(443,"tr",9)(444,"td",18)(445,"code",19),e(446,"PoTheme"),n()(),t(447,"td",13)(448,"p"),e(449,"Tema ativo."),n()()()(),i(450,"br"),t(451,"table",8)(452,"tr",9)(453,"th",10)(454,"div",11)(455,"h4")(456,"span",12),e(457," setDefaultTheme "),n()()()()(),t(458,"tr",13)(459,"td",13)(460,"p"),e(461,'Define o tema atual como o tema "PoUI Padr\xE3o".'),n()()()(),t(462,"h5")(463,"b"),e(464,"Par\xE2metros"),n()(),t(465,"table",14)(466,"tr",15)(467,"th",16),e(468,"Nome"),n(),t(469,"th",16),e(470,"Tipo"),n(),t(471,"th",16),e(472,"Descri\xE7\xE3o"),n()(),t(473,"tr",9)(474,"td",17),e(475," type"),n(),t(476,"td",18)(477,"code",19),e(478," PoThemeTypeEnum "),n()(),t(479,"td",13)(480,"p"),e(481,"O tipo de Tema a ser aplicado, light / dark."),n()()()(),i(482,"br"),t(483,"table",8)(484,"tr",9)(485,"th",10)(486,"div",11)(487,"h4")(488,"span",12),e(489," setThemeType "),n()()()()(),t(490,"tr",13)(491,"td",13)(492,"p"),e(493,"Define o tipo (light/dark) quando um tema est\xE1 sendo aplicado."),n()()()(),t(494,"h5")(495,"b"),e(496,"Par\xE2metros"),n()(),t(497,"table",14)(498,"tr",15)(499,"th",16),e(500,"Nome"),n(),t(501,"th",16),e(502,"Tipo"),n(),t(503,"th",16),e(504,"Descri\xE7\xE3o"),n()(),t(505,"tr",9)(506,"td",17),e(507," theme"),n(),t(508,"td",18)(509,"code",19),e(510," PoTheme "),n()(),t(511,"td",13)(512,"p"),e(513,"Objeto contendo as defini\xE7\xF5es de tema a serem aplicadas no componente."),n()()(),t(514,"tr",9)(515,"td",17),e(516," themeType"),n(),t(517,"td",18)(518,"code",19),e(519," PoThemeTypeEnum "),n()(),t(520,"td",13)(521,"p"),e(522,"(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padr\xE3o, o tema claro \xE9 aplicado."),n()()()(),i(523,"br"),t(524,"table",8)(525,"tr",9)(526,"th",10)(527,"div",11)(528,"h4")(529,"span",12),e(530," setCurrentThemeType "),n()()()()(),t(531,"tr",13)(532,"td",13)(533,"p"),e(534,"Define o tipo (light/dark) para um tema j\xE1 ativo."),n()()()(),t(535,"h5")(536,"b"),e(537,"Par\xE2metros"),n()(),t(538,"table",14)(539,"tr",15)(540,"th",16),e(541,"Nome"),n(),t(542,"th",16),e(543,"Tipo"),n(),t(544,"th",16),e(545,"Descri\xE7\xE3o"),n()(),t(546,"tr",9)(547,"td",17),e(548," themeType"),n(),t(549,"td",18)(550,"code",19),e(551," PoThemeTypeEnum "),n()(),t(552,"td",13)(553,"p"),e(554,"(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padr\xE3o, o tema claro \xE9 aplicado."),n()()()(),i(555,"br"),t(556,"table",8)(557,"tr",9)(558,"th",10)(559,"div",11)(560,"h4")(561,"span",12),e(562," setThemeA11y "),n()()()()(),t(563,"tr",13)(564,"td",13)(565,"p"),e(566,"Define o n\xEDvel de acessibilidade quando um tema est\xE1 sendo aplicado."),n()()()(),t(567,"h5")(568,"b"),e(569,"Par\xE2metros"),n()(),t(570,"table",14)(571,"tr",15)(572,"th",16),e(573,"Nome"),n(),t(574,"th",16),e(575,"Tipo"),n(),t(576,"th",16),e(577,"Descri\xE7\xE3o"),n()(),t(578,"tr",9)(579,"td",17),e(580," theme"),n(),t(581,"td",18)(582,"code",19),e(583," PoTheme "),n()(),t(584,"td",13)(585,"p"),e(586,"Objeto contendo as defini\xE7\xF5es de tema a serem aplicadas no componente."),n()()(),t(587,"tr",9)(588,"td",17),e(589," a11y"),n(),t(590,"td",18)(591,"code",19),e(592," PoThemeA11yEnum "),n()(),t(593,"td",13)(594,"p"),e(595,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),n()()()(),i(596,"br"),t(597,"table",8)(598,"tr",9)(599,"th",10)(600,"div",11)(601,"h4")(602,"span",12),e(603," setCurrentThemeA11y "),n()()()()(),t(604,"tr",13)(605,"td",13)(606,"p"),e(607,"Define o n\xEDvel de acessibilidade para um tema j\xE1 ativo."),n()()()(),t(608,"h5")(609,"b"),e(610,"Par\xE2metros"),n()(),t(611,"table",14)(612,"tr",15)(613,"th",16),e(614,"Nome"),n(),t(615,"th",16),e(616,"Tipo"),n(),t(617,"th",16),e(618,"Descri\xE7\xE3o"),n()(),t(619,"tr",9)(620,"td",17),e(621," a11y"),n(),t(622,"td",18)(623,"code",19),e(624," PoThemeA11yEnum "),n()(),t(625,"td",13)(626,"p"),e(627,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),n()()()(),i(628,"br"),t(629,"h3"),e(630,"Interfaces"),n(),t(631,"h4",22)(632,"code",5),e(633,"PoThemeColor"),n()(),t(634,"div",2)(635,"p"),e(636,"Interface para representar as cores do tema."),n()(),t(637,"h4",7),e(638,"Propriedades"),n(),t(639,"table",14)(640,"tr",15)(641,"th",16),e(642,"Nome"),n(),t(643,"th",16),e(644,"Tipo"),n(),t(645,"th",16),e(646,"Descri\xE7\xE3o"),n()(),t(647,"tr",9)(648,"td",17)(649,"div",11)(650,"span",12),e(651," action"),i(652,"br"),n()()(),t(653,"td",18)(654,"code",23),e(655,"PoThemeColorAction"),n()(),t(656,"td",13)(657,"em")(658,"strong"),e(659,"(opcional)"),n()(),t(660,"p"),e(661,"Cores da Action a serem aplicadas."),n(),t(662,"p"),e(663,"Exemplo de uso:"),n(),t(664,"pre")(665,"code",24),e(666,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
 hover: 'var(--color-brand-01-dark)',
 pressed: 'var(--color-brand-01-darker)',
 disabled: 'var(--color-neutral-light-30)',
 focus: 'var(--color-brand-01-darkest)'
}
`),n()()()(),t(667,"tr",9)(668,"td",17)(669,"div",11)(670,"span",12),e(671," brand"),i(672,"br"),n()()(),t(673,"td",18)(674,"code",25),e(675,"poThemeColorBrand"),n()(),t(676,"td",13)(677,"em")(678,"strong"),e(679,"(opcional)"),n()(),t(680,"p"),e(681,"Cores da Brand a serem aplicadas."),n(),t(682,"p"),e(683,"Exemplo de uso:"),n(),t(684,"pre")(685,"code",26),e(686,`PoThemeColor.brand = {
 01: PoThemeColorTone,
 02: PoThemeColorTone,
 03: PoThemeColorTone
}
`),n()()()(),t(687,"tr",9)(688,"td",17)(689,"div",11)(690,"span",12),e(691," categorical"),i(692,"br"),n()()(),t(693,"td",18)(694,"code",27),e(695,"PoThemeColorCategorical"),n()(),t(696,"td",13)(697,"em")(698,"strong"),e(699,"(opcional)"),n()(),t(700,"p"),e(701,"Cores da Categorical a serem aplicadas."),n(),t(702,"p"),e(703,"Exemplo de uso:"),n(),t(704,"pre")(705,"code",26),e(706,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),n()()()(),t(707,"tr",9)(708,"td",17)(709,"div",11)(710,"span",12),e(711," categorical-overlay"),i(712,"br"),n()()(),t(713,"td",18)(714,"code",27),e(715,"PoThemeColorCategorical"),n()(),t(716,"td",13)(717,"em")(718,"strong"),e(719,"(opcional)"),n()(),t(720,"p"),e(721,"Cores da Categorical a serem aplicadas."),n(),t(722,"p"),e(723,"Exemplo de uso:"),n(),t(724,"pre")(725,"code",26),e(726,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),n()()()(),t(727,"tr",9)(728,"td",17)(729,"div",11)(730,"span",12),e(731," neutral"),i(732,"br"),n()()(),t(733,"td",18)(734,"code",28),e(735,"PoThemeColorNeutral"),n()(),t(736,"td",13)(737,"em")(738,"strong"),e(739,"(opcional)"),n()(),t(740,"p"),e(741,"Cores Neutrals a serem aplicadas."),n(),t(742,"p"),e(743,"Exemplo de uso:"),n(),t(744,"pre")(745,"code",26),e(746,`PoThemeColor.neutral = {
 light: { '00': string, '05': string, '10': string, '20': string, '30': string },
 mid: { '40': string, '60': string },
 dark: { '70': string, '80': string, '90': string, '95': string },
}
`),n()()()()(),t(747,"h4",22)(748,"code",5),e(749,"PoThemeColorAction"),n()(),t(750,"div",2)(751,"p"),e(752,"Interface para as cores de a\xE7\xE3o do tema."),n()(),t(753,"h4",7),e(754,"Propriedades"),n(),t(755,"table",14)(756,"tr",15)(757,"th",16),e(758,"Nome"),n(),t(759,"th",16),e(760,"Tipo"),n(),t(761,"th",16),e(762,"Descri\xE7\xE3o"),n()(),t(763,"tr",9)(764,"td",17)(765,"div",11)(766,"span",12),e(767," default"),i(768,"br"),n()()(),t(769,"td",18)(770,"code",29),e(771,"string"),n()(),t(772,"td",13)(773,"em")(774,"strong"),e(775,"(opcional)"),n()(),t(776,"p"),e(777,"Cores da Action 'Default'."),n(),t(778,"p"),e(779,"Exemplo de uso:"),n(),t(780,"pre")(781,"code",26),e(782,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
}
`),n()()()(),t(783,"tr",9)(784,"td",17)(785,"div",11)(786,"span",12),e(787," disabled"),i(788,"br"),n()()(),t(789,"td",18)(790,"code",29),e(791,"string"),n()(),t(792,"td",13)(793,"em")(794,"strong"),e(795,"(opcional)"),n()(),t(796,"p"),e(797,"Cores da Action de 'disabled'."),n(),t(798,"p"),e(799,"Exemplo de uso:"),n(),t(800,"pre")(801,"code",26),e(802,`PoThemeColor.action = {
 disabled: 'var(--color-neutral-light-30)',
}
`),n()()()(),t(803,"tr",9)(804,"td",17)(805,"div",11)(806,"span",12),e(807," focus"),i(808,"br"),n()()(),t(809,"td",18)(810,"code",29),e(811,"string"),n()(),t(812,"td",13)(813,"em")(814,"strong"),e(815,"(opcional)"),n()(),t(816,"p"),e(817,"Cores da Action para 'focus'."),n(),t(818,"p"),e(819,"Exemplo de uso:"),n(),t(820,"pre")(821,"code",26),e(822,`PoThemeColor.action = {
 focus: 'var(--color-brand-01-darkest)'
}
`),n()()()(),t(823,"tr",9)(824,"td",17)(825,"div",11)(826,"span",12),e(827," hover"),i(828,"br"),n()()(),t(829,"td",18)(830,"code",29),e(831,"string"),n()(),t(832,"td",13)(833,"em")(834,"strong"),e(835,"(opcional)"),n()(),t(836,"p"),e(837,"Cores da Action para 'hover'."),n(),t(838,"p"),e(839,"Exemplo de uso:"),n(),t(840,"pre")(841,"code",26),e(842,`PoThemeColor.action = {
 hover: 'var(--color-brand-01-dark)',
}
`),n()()()(),t(843,"tr",9)(844,"td",17)(845,"div",11)(846,"span",12),e(847," pressed"),i(848,"br"),n()()(),t(849,"td",18)(850,"code",29),e(851,"string"),n()(),t(852,"td",13)(853,"em")(854,"strong"),e(855,"(opcional)"),n()(),t(856,"p"),e(857,"Cores da Action para 'pressed'."),n(),t(858,"p"),e(859,"Exemplo de uso:"),n(),t(860,"pre")(861,"code",26),e(862,`PoThemeColor.action = {
 pressed: 'var(--color-brand-01-darker)',
}
`),n()()()()(),t(863,"h4",22)(864,"code",5),e(865,"PoThemeColorNeutral"),n()(),t(866,"div",2)(867,"p"),e(868,"Interface para as cores neutras do tema."),n()(),t(869,"h4",7),e(870,"Propriedades"),n(),t(871,"table",14)(872,"tr",15)(873,"th",16),e(874,"Nome"),n(),t(875,"th",16),e(876,"Tipo"),n(),t(877,"th",16),e(878,"Descri\xE7\xE3o"),n()(),t(879,"tr",9)(880,"td",17)(881,"div",11)(882,"span",12),e(883," dark"),i(884,"br"),n()()(),t(885,"td",18)(886,"code",30),e(887,`{ '70'?: string; '80'?: string; '90'?: string; '95'?: string;
}`),n()(),t(888,"td",13)(889,"em")(890,"strong"),e(891,"(opcional)"),n()(),t(892,"p"),e(893,"Cores Neutrals do tipo 'dark'."),n(),t(894,"p"),e(895,"Exemplo de uso:"),n(),t(896,"pre")(897,"code",26),e(898,`PoThemeColor.neutral.dark = {
 '70': '#4a5c60',
 '80': '#2c3739',
 '90': '#1d2426',
 '95': '#0b0e0e',
}
`),n()()()(),t(899,"tr",9)(900,"td",17)(901,"div",11)(902,"span",12),e(903," light"),i(904,"br"),n()()(),t(905,"td",18)(906,"code",31),e(907,`{ '00'?: string; '05'?: string; '10'?: string; '20'?: string; '30'?: string;
}`),n()(),t(908,"td",13)(909,"em")(910,"strong"),e(911,"(opcional)"),n()(),t(912,"p"),e(913,"Cores Neutrals do tipo 'light'."),n(),t(914,"p"),e(915,"Exemplo de uso:"),n(),t(916,"pre")(917,"code",26),e(918,`PoThemeColor.neutral.light = {
 '00': '#ffffff',
 '05': '#fbfbfb',
 '10': '#eceeee',
 '20': '#dadedf',
 '30': '#b6bdbf'
}
`),n()()()(),t(919,"tr",9)(920,"td",17)(921,"div",11)(922,"span",12),e(923," mid"),i(924,"br"),n()()(),t(925,"td",18)(926,"code",32),e(927,`{ '40'?: string; '60'?: string;
}`),n()(),t(928,"td",13)(929,"em")(930,"strong"),e(931,"(opcional)"),n()(),t(932,"p"),e(933,"Cores Neutrals do tipo 'mid'."),n(),t(934,"p"),e(935,"Exemplo de uso:"),n(),t(936,"pre")(937,"code",26),e(938,`PoThemeColor.neutral.mid = {
 '40': '#9da7a9',
 '60': '#6e7c7f',
}
`),n()()()()(),t(939,"h4",22)(940,"code",5),e(941,"PoThemeTokens"),n()(),t(942,"div",2)(943,"p"),e(944,"Interface para o tema da aplica\xE7\xE3o."),n()(),t(945,"h4",22)(946,"code",5),e(947,"PoThemeToken"),n()(),t(948,"div",2)(949,"p"),e(950,"Interface para os tokens do Tema."),n()(),t(951,"h4",7),e(952,"Propriedades"),n(),t(953,"table",14)(954,"tr",15)(955,"th",16),e(956,"Nome"),n(),t(957,"th",16),e(958,"Tipo"),n(),t(959,"th",16),e(960,"Descri\xE7\xE3o"),n()(),t(961,"tr",9)(962,"td",17)(963,"div",11)(964,"span",12),e(965," color"),i(966,"br"),n()()(),t(967,"td",18)(968,"code",33),e(969,"PoThemeColor"),n()(),t(970,"td",13)(971,"em")(972,"strong"),e(973,"(opcional)"),n()(),t(974,"p"),e(975,"Tokens do tipo 'color'"),n()()(),t(976,"tr",9)(977,"td",17)(978,"div",11)(979,"span",12),e(980," onRoot"),i(981,"br"),n()()(),t(982,"td",18)(983,"code",34),e(984,"DynamicProperties"),n()(),t(985,"td",13)(986,"em")(987,"strong"),e(988,"(opcional)"),n()(),t(989,"p"),e(990,`Tokens do tipo 'onRoot'
Esta propriedade adicionar\xE1 todos os tokens passados e adicionado direto no `),t(991,"code"),e(992,":root"),n()(),t(993,"p"),e(994,"Exemplo de uso:"),n(),t(995,"pre")(996,"code",26),e(997,`onRoot: {
  '--color-page-background-color-page': '#121212',
  '--color-toolbar-color-badge-text': 'var(--color-neutral-dark-95)',
},
`),n()()()(),t(998,"tr",9)(999,"td",17)(1e3,"div",11)(1001,"span",12),e(1002," perComponent"),i(1003,"br"),n()()(),t(1004,"td",18)(1005,"code",34),e(1006,"DynamicProperties"),n()(),t(1007,"td",13)(1008,"em")(1009,"strong"),e(1010,"(opcional)"),n()(),t(1011,"p"),e(1012,"Tokens do tipo 'perComponent'"),n(),t(1013,"p"),e(1014,"Exemplo de uso:"),n(),t(1015,"pre")(1016,"code",26),e(1017,`perComponent: {
  'po-badge': {
    '--color': 'var(--color-neutral-dark-95)',
  },
  'po-container': {
    '--background': '#121212',
  },
},
`),n()()()()(),t(1018,"h4",22)(1019,"code",5),e(1020,"PoTheme"),n()(),t(1021,"div",2)(1022,"p"),e(1023,"Interface para o m\xE9todo "),t(1024,"code"),e(1025,"setTheme()"),n(),e(1026,"."),n()(),t(1027,"h4",7),e(1028,"Propriedades"),n(),t(1029,"table",14)(1030,"tr",15)(1031,"th",16),e(1032,"Nome"),n(),t(1033,"th",16),e(1034,"Tipo"),n(),t(1035,"th",16),e(1036,"Descri\xE7\xE3o"),n()(),t(1037,"tr",9)(1038,"td",17)(1039,"div",11)(1040,"span",12),e(1041," active"),i(1042,"br"),n()()(),t(1043,"td",18)(1044,"code",35),e(1045,"PoThemeTypeEnum "),n(),t(1046,"code",36),e(1047," PoThemeActive"),n()(),t(1048,"td",13)(1049,"em")(1050,"strong"),e(1051,"(opcional)"),n()(),t(1052,"p"),e(1053,"Tipo e n\xEDvel de acessibilidade de tema ativo"),n()()(),t(1054,"tr",9)(1055,"td",17)(1056,"div",11)(1057,"span",12),e(1058," name"),i(1059,"br"),n()()(),t(1060,"td",18)(1061,"code",29),e(1062,"string"),n()(),t(1063,"td",13)(1064,"p"),e(1065,`Nome para o tema:
Ex.: default, totvs, sunset...`),n()()(),t(1066,"tr",9)(1067,"td",17)(1068,"div",11)(1069,"span",12),e(1070," type"),i(1071,"br"),n()()(),t(1072,"td",18)(1073,"code",37),e(1074,"PoThemeType "),n(),t(1075,"code",38),e(1076," Array<PoThemeType>"),n()(),t(1077,"td",13)(1078,"p"),e(1079,"Tipo de tema:"),n(),t(1080,"ul")(1081,"li"),e(1082,"light"),n(),t(1083,"li"),e(1084,"dark"),n()()()()(),t(1085,"h3"),e(1086,"Enums"),n(),t(1087,"h4",4)(1088,"code",5),e(1089,"PoThemeA11yEnum"),n()(),t(1090,"div",2)(1091,"p"),e(1092,"Enum para configurar o n\xEDvel de acessibilidade dos componentes atrav\xE9s do servi\xE7o de tema."),n(),t(1093,"pre")(1094,"code"),e(1095,`import { PoThemeA11yEnum } from '@po-ui/theme';

// Definindo o n\xEDvel de acessibilidade ao configurar as cores e o tipo do tema (light | dark)
themeService.setTheme(...theme, ...type, PoThemeA11yEnum.AA);

// Definindo o n\xEDvel de acessibilidade ao configurar apenas as cores do tema
themeService.setThemeA11y(...theme, PoThemeA11yEnum.AAA);

// Alterando o n\xEDvel de acessibilidade com as cores do tema j\xE1 definidas
themeService.setCurrentThemeA11y(PoThemeA11yEnum.AAA);
`),n()()(),t(1096,"h4",7),e(1097,"Propriedades"),n(),t(1098,"table",14)(1099,"tr",15)(1100,"th",16),e(1101,"Nome"),n(),t(1102,"th",16),e(1103,"Descri\xE7\xE3o"),n()(),t(1104,"tr",9)(1105,"td",17)(1106,"div",11)(1107,"span",12),e(1108," AA"),i(1109,"br"),n()()(),t(1110,"td",13)(1111,"p"),e(1112,"N\xEDvel de acessibilidade AA."),n(),t(1113,"ul")(1114,"li"),e(1115,"Define a espessura do "),t(1116,"code"),e(1117,"outline"),n(),e(1118," para "),t(1119,"strong"),e(1120,"2px"),n(),e(1121,"."),n(),t(1122,"li"),e(1123,"Disponibiliza o tamanho "),t(1124,"code"),e(1125,"small"),n(),e(1126,` para componentes de formul\xE1rio (buttons, inputs, checkboxes, radios e switches)
conforme suas documenta\xE7\xF5es.`),n()()()(),t(1127,"tr",9)(1128,"td",17)(1129,"div",11)(1130,"span",12),e(1131," AAA"),i(1132,"br"),n()()(),t(1133,"td",13)(1134,"p"),e(1135,"N\xEDvel de acessibilidade AAA."),n(),t(1136,"ul")(1137,"li"),e(1138,"Define a espessura do "),t(1139,"code"),e(1140,"outline"),n(),e(1141," para "),t(1142,"strong"),e(1143,"4px"),n(),e(1144,"."),n(),t(1145,"li"),e(1146,"N\xE3o disponibiliza o tamanho "),t(1147,"code"),e(1148,"small"),n(),e(1149," para componentes de formul\xE1rio."),n()()()()(),t(1150,"h4",4)(1151,"code",5),e(1152,"PoThemeTypeEnum"),n()(),t(1153,"div",2)(1154,"p"),e(1155,"Enum utilizado para configurar o tipo de tema suportado, \xE9 poss\xEDvel alternar entre os tipos definidos."),n(),t(1156,"pre")(1157,"code"),e(1158,`import { PoThemeTypeEnum } from '@po-ui/theme';

// Definindo o tipo de tema como claro
themeService.setTheme(...theme, PoThemeTypeEnum.light);

// Definindo o tipo de tema como escuro
themeService.setTheme(...theme, PoThemeTypeEnum.dark);

// Alterando o tipo do tema para um tema j\xE1 aplicado
themeService.setCurrentThemeType(PoThemeTypeEnum.dark);
`),n()()(),t(1159,"h4",7),e(1160,"Propriedades"),n(),t(1161,"table",14)(1162,"tr",15)(1163,"th",16),e(1164,"Nome"),n(),t(1165,"th",16),e(1166,"Descri\xE7\xE3o"),n()(),t(1167,"tr",9)(1168,"td",17)(1169,"div",11)(1170,"span",12),e(1171," light"),i(1172,"br"),n()()(),t(1173,"td",13)(1174,"p"),e(1175,"Define o tema como claro."),n()()(),t(1176,"tr",9)(1177,"td",17)(1178,"div",11)(1179,"span",12),e(1180," dark"),i(1181,"br"),n()()(),t(1182,"td",13)(1183,"p"),e(1184,"Define o tema como escuro."),n()()()()())},encapsulation:2})}return r})();var fe=(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=1;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,o){this.route=m,this.router=o}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let o=m.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(o){return new(o||r)(v($),v(ee))};static \u0275cmp=S({type:r,selectors:[["ng-component"]],standalone:!1,decls:6,vars:4,consts:[["p-title","Theme",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,a){o&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),E("p-click",function(){return a.changeTab("doc")}),i(3,"sample-po-theme-doc"),n(),t(4,"po-tab",3),E("p-click",function(){return a.changeTab("web")}),i(5,"sample-po-theme-labs-view"),n()()()),o&2&&(d("p-actions",a.actions),l(2),d("p-active",a.activeTab==="doc"),l(2),d("p-hide",a.hidePoWebSample)("p-active",a.activeTab==="web"))},dependencies:[he,P,D,be,ge],encapsulation:2})}return r})();var Le=[{path:"",component:fe}],Te=(()=>{class r{static \u0275fac=function(o){return new(o||r)};static \u0275mod=y({type:r});static \u0275inj=A({imports:[F.forChild(Le),F]})}return r})();var Xe=(()=>{class r{static \u0275fac=function(o){return new(o||r)};static \u0275mod=y({type:r});static \u0275inj=A({imports:[Se,Te]})}return r})();export{Xe as DocPoThemeModule};
