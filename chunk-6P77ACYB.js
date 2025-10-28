import{o as Ee,p as Se}from"./chunk-KTXVLMHP.js";import{Ab as D,Ea as le,Eb as ue,Fa as de,Ma as pe,Q as ne,Qa as se,U as ie,Xa as ce,fa as ae,ga as oe,ha as re,ia as _,j as x,ja as N,ka as me,la as M,ma as O,na as C,nb as he,v as te,zb as P}from"./chunk-4M2FSNLW.js";import{$a as q,$c as F,Aa as d,Ab as G,Da as I,Dc as p,Fb as U,Gc as H,Hc as Q,Jc as J,Kc as K,La as t,Ma as n,N as A,Na as i,Nc as X,Oc as Y,Ra as V,Sa as E,Sc as Z,U as b,V as g,Xc as $,Zc as ee,_a as R,a as c,ab as j,b as u,cb as e,eb as z,gb as L,hb as k,ib as w,ja as l,ka as v,mb as B,ob as W,qa as S,ra as y}from"./chunk-CBLD3XJL.js";var Ae=["reactiveFormData"],ve=(()=>{class r{cdr;fb;poTheme;reactiveFormModal;a11yLevel;a11yLevelStorage="po-a11y-AAA";reactiveForm;theme=0;themeStorage="po-theme-default";a11yChangeListenerAAA;a11yChangeListenerAA;themeChangeListenerDark;themeChangeListenerDefault;a11yLevelOptions=[{label:"AA",value:"AA"},{label:"AAA",value:"AAA"}];themeOptions=[{label:"Light",value:0},{label:"Dark",value:1}];modalPrimaryAction={action:()=>this.reactiveFormModal.close(),label:"Close"};poThemeSample={name:"po-theme",type:{light:{color:{brand:{"01":{lightest:"#f2eaf6",lighter:"#d9c2e5",light:"#bd94d1",base:"#753399",dark:"#5b1c7d",darker:"#400e58",darkest:"#260538"},"02":{base:"#b92f72"},"03":{base:"#ffd464"}},action:u(c({},oe),{disabled:"var(--color-neutral-mid-40)"}),feedback:u(c({},_),{info:u(c({},_.info),{base:"#0079b8"})}),neutral:c({},re)},onRoot:u(c({},N.onRoot),{"--color-page-background-color-page":"var(--color-neutral-light-05)"}),perComponent:c({},N.perComponent)},dark:{color:{brand:{"01":{darkest:"#f2eaf6",darker:"#d9c2e5",dark:"#bd94d1",base:"#753399",light:"#5b1c7d",lighter:"#400e58",lightest:"#260538"},"02":{base:"#b92f72"},"03":{base:"#ffd464"}},action:u(c({},me),{disabled:"var(--color-neutral-mid-40)"}),feedback:u(c({},M),{info:u(c({},M.info),{base:"#0079b8"})}),neutral:{light:{"00":"#1c1c1c","05":"#202020",10:"#2b2b2b",20:"#3b3b3b",30:"#5a5a5a"},mid:{40:"#7c7c7c",60:"#a1a1a1"},dark:{70:"#c1c1c1",80:"#d9d9d9",90:"#eeeeee",95:"#fbfbfb"}}},onRoot:u(c({},O.onRoot),{"--color-page-background-color-page":"var(--color-neutral-light-05)"}),perComponent:c({},O.perComponent)}},active:ae.light};constructor(m,o,a){this.cdr=m,this.fb=o,this.poTheme=a;let s=this.poTheme.applyTheme();this.a11yLevel=this.poTheme.getA11yLevel(),s?this.theme=s.active||0:(this.poTheme.setTheme(this.poThemeSample,this.theme,this.a11yLevel),this.theme=this.poThemeSample.active),this.createReactiveForm(),this.a11yLevel==="AA"&&this.poTheme.setA11yDefaultSizeSmall(!0)}ngOnInit(){localStorage.getItem("po-ui-theme")&&(this.themeStorage=localStorage.getItem("po-ui-theme")),this.theme=this.themeStorage==="po-theme-default"?0:1,this.changeTheme(this.theme,!1),localStorage.getItem("po-ui-a11y")&&(this.a11yLevelStorage=localStorage.getItem("po-ui-a11y")),this.a11yLevel=this.a11yLevelStorage==="po-a11y-AAA"?x.AAA:x.AA,this.changeA11yLevel(this.a11yLevel,!1),this.themeChangeListenerDefault=()=>{this.changeTheme(0,!1),this.theme=0},this.themeChangeListenerDark=()=>{this.changeTheme(1,!1),this.theme=1},this.a11yChangeListenerAAA=()=>{this.changeA11yLevel(x.AAA,!1),this.a11yLevel=x.AAA},this.a11yChangeListenerAA=()=>{this.changeA11yLevel(x.AA,!1),this.a11yLevel=x.AA},window.addEventListener("po-a11y-AA",this.a11yChangeListenerAA),window.addEventListener("po-a11y-AAA",this.a11yChangeListenerAAA),window.addEventListener("po-theme-default",this.themeChangeListenerDefault),window.addEventListener("po-theme-dark",this.themeChangeListenerDark)}ngOnDestroy(){window.removeEventListener("po-theme-default",this.themeChangeListenerDefault),window.removeEventListener("po-theme-dark",this.themeChangeListenerDark),window.removeEventListener("po-a11y-AA",this.a11yChangeListenerAA),window.removeEventListener("po-a11y-AAA",this.a11yChangeListenerAAA)}changeA11yLevel(m,o=!0){this.poTheme.setCurrentThemeA11y(m),m==="AA"?localStorage.setItem("po-ui-a11y","po-a11y-AA"):localStorage.setItem("po-ui-a11y","po-a11y-AAA"),m===x.AA&&this.poTheme.setA11yDefaultSizeSmall(!0),o&&window.dispatchEvent(new Event("po-sample-change-a11y"))}changeTheme(m,o=!0){this.poTheme.setTheme(this.poThemeSample,m,this.a11yLevel),m===1?localStorage.setItem("po-ui-theme","po-theme-dark"):localStorage.setItem("po-ui-theme","po-theme-default"),o&&window.dispatchEvent(new Event("po-sample-change-theme")),this.a11yLevel==="AA"&&this.poTheme.setA11yDefaultSizeSmall(!0)}createReactiveForm(){this.reactiveForm=this.fb.group({name:["",p.compose([p.required,p.minLength(5),p.maxLength(30)])],address:["",p.compose([p.required,p.minLength(5),p.maxLength(50)])],number:["",p.compose([p.required,p.min(1),p.max(99999)])],email:["",p.required],website:["",p.required]})}saveForm(){this.reactiveFormModal.open()}static \u0275fac=function(o){return new(o||r)(v(G),v(Z),v(C))};static \u0275cmp=S({type:r,selectors:[["sample-po-theme-labs"]],viewQuery:function(o,a){if(o&1&&R(Ae,7),o&2){let s;q(s=j())&&(a.reactiveFormModal=s.first)}},standalone:!1,features:[B([C])],decls:22,vars:12,consts:[["reactiveFormData",""],["p-title","Example"],[3,"formGroup"],["formControlName","name","p-clean","","p-icon","an an-user","p-label","Customer name",1,"po-lg-6"],["formControlName","email","p-label","Email","p-clean","",1,"po-lg-6"],["formControlName","address","p-clean","","p-icon","an an-map-pin","p-label","Address",1,"po-lg-4","po-md-8"],["formControlName","number","p-label","Number","p-clean","",1,"po-lg-2","po-md-4"],["formControlName","website","p-label","Website","p-clean","",1,"po-lg-6"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Save successful",3,"p-primary-action"],["p-label","Name",1,"po-md-12",3,"p-value"],["p-label","Address",1,"po-md-6",3,"p-value"],["p-label","Number",1,"po-md-6",3,"p-value"],["p-label","Email",1,"po-md-6",3,"p-value"],["p-label","Website",1,"po-md-6",3,"p-value"],[1,"po-row","po-mt-3"],["name","theme","p-label","Theme Type",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","a11ylevel","p-label","Acessibility Level",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"]],template:function(o,a){if(o&1){let s=V();t(0,"po-widget",1)(1,"form",2),i(2,"po-input",3)(3,"po-email",4)(4,"po-input",5)(5,"po-number",6)(6,"po-url",7),t(7,"div",8)(8,"po-button",9),E("p-click",function(){return b(s),g(a.saveForm())}),n()()(),t(9,"po-modal",10,0)(11,"div",8),i(12,"po-info",11),n(),t(13,"div",8),i(14,"po-info",12)(15,"po-info",13),n(),t(16,"div",8),i(17,"po-info",14)(18,"po-info",15),n()()(),t(19,"div",16)(20,"po-radio-group",17),w("ngModelChange",function(h){return b(s),k(a.theme,h)||(a.theme=h),g(h)}),E("p-change",function(h){return b(s),g(a.changeTheme(h))}),n(),t(21,"po-radio-group",18),w("ngModelChange",function(h){return b(s),k(a.a11yLevel,h)||(a.a11yLevel=h),g(h)}),E("p-change",function(h){return b(s),g(a.changeA11yLevel(h))}),n()()}o&2&&(l(),d("formGroup",a.reactiveForm),l(7),d("p-disabled",!a.reactiveForm.valid),l(),d("p-primary-action",a.modalPrimaryAction),l(3),d("p-value",a.reactiveForm.controls.name.value),l(2),d("p-value",a.reactiveForm.controls.address.value),l(),d("p-value",a.reactiveForm.controls.number.value),l(2),d("p-value",a.reactiveForm.controls.email.value),l(),d("p-value",a.reactiveForm.controls.website.value),l(2),L("ngModel",a.theme),d("p-options",a.themeOptions),l(),L("ngModel",a.a11yLevel),d("p-options",a.a11yLevelOptions))},dependencies:[K,H,Q,J,X,Y,te,ne,le,de,pe,se,ce,ie,ue],encapsulation:2})}return r})();var Ce=r=>({"docs-sample-code-tabs":r}),be=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-theme-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,a){o&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Theme Labs"),n(),t(4,"a",2),E("click",function(){return a.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-theme-labs/sample-po-theme-labs.component.html"),n(),t(13,"pre",7),e(14,`<po-widget p-title="Example">
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
`),n()()()()(),t(21,"div",10),i(22,"sample-po-theme-labs"),n(),i(23,"hr")),o&2&&(l(5),I("po-icon "+a.sampleCodeButtonIcon),l(),z(" ",a.sampleCodeButtonLabel,""),l(),d("ngClass",W(4,Ce,a.hideSampleCodeTabs)))},dependencies:[U,Ee,P,D,ve],encapsulation:2})}return r})();var ge=(()=>{class r{static \u0275fac=function(o){return new(o||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-theme-doc"]],standalone:!1,decls:1186,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","guides/theme-service"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-method-table"],[1,"docs-api-properties-row"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-property-description"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-name-cell"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type"],["pan","",1,"docs-api-property-type","'small'"],["pan","",1,"docs-api-property-type","'medium'"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoThemeColorAction"],[1,"language-javascript"],["pan","",1,"docs-api-property-type","poThemeColorBrand"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","PoThemeColorCategorical"],["pan","",1,"docs-api-property-type","PoThemeColorNeutral"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","{","'70'?:","string;","'80'?:","string;","'90'?:","string;","'95'?:","string;","}"],["pan","",1,"docs-api-property-type","{","'00'?:","string;","'05'?:","string;","'10'?:","string;","'20'?:","string;","'30'?:","string;","}"],["pan","",1,"docs-api-property-type","{","'40'?:","string;","'60'?:","string;","}"],["pan","",1,"docs-api-property-type","PoThemeColor"],["pan","",1,"docs-api-property-type","DynamicProperties"],["pan","",1,"docs-api-property-type","PoThemeTypeEnum"],["pan","",1,"docs-api-property-type","PoThemeActive"],["pan","",1,"docs-api-property-type","PoThemeType"],["pan","",1,"docs-api-property-type","Array<PoThemeType>"]],template:function(o,a){o&1&&(t(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoThemeModule } from '@po-ui/ng-components';"),n()(),t(4,"div",2)(5,"p"),e(6,"M\xF3dulo do servi\xE7o PoThemeService."),n()(),t(7,"h3",3),e(8,"Services"),n(),t(9,"h4",4)(10,"code",5),e(11,"PoThemeService"),n()(),t(12,"div",2)(13,"p"),e(14,"O servi\xE7o "),t(15,"code"),e(16,"PoThemeService"),n(),e(17," permite customizar as cores do tema padr\xE3o do "),t(18,"code"),e(19,"PO-UI"),n(),e(20,` e definir o n\xEDvel de acessibilidade
mais adequado ao projeto.`),n(),t(21,"p"),e(22,"O n\xEDvel "),t(23,"strong"),e(24,"AAA"),n(),e(25,` (padr\xE3o) garante maior contraste, \xE1reas clic\xE1veis amplas e espa\xE7amentos maiores entre os elementos,
enquanto o n\xEDvel `),t(26,"strong"),e(27,"AA"),n(),e(28,` mant\xE9m a conformidade com as diretrizes de acessibilidade, mas com propor\xE7\xF5es mais equilibradas
e contornos mais sutis.`),n(),t(29,"p"),e(30,"O servi\xE7o tamb\xE9m possibilita configurar a "),t(31,"strong"),e(32,"densidade de espa\xE7amentos"),n(),e(33,`, permitindo ajustar o espa\xE7o entre e dentro dos
componentes. Essa configura\xE7\xE3o pode ser utilizada com qualquer n\xEDvel de acessibilidade.`),n(),t(34,"blockquote")(35,"p"),e(36,"Observa\xE7\xE3o: a customiza\xE7\xE3o das cores de "),t(37,"code"),e(38,"feedback"),n(),e(39," n\xE3o \xE9 recomendada por motivos de acessibilidade e usabilidade."),n()(),t(40,"blockquote")(41,"p"),e(42,`Para saber mais sobre como customizar o tema padr\xE3o, consulte o item
`),t(43,"a",6),e(44,"Customiza\xE7\xE3o de Temas usando o servi\xE7o PO-UI"),n(),e(45," na aba "),t(46,"code"),e(47,"Guias"),n(),e(48,"."),n()()(),t(49,"h3",7),e(50,"M\xE9todos"),n(),t(51,"table",8)(52,"tr",9)(53,"th",10)(54,"div",11)(55,"h4")(56,"span",12),e(57," setTheme "),n()()()()(),t(58,"tr",13)(59,"td",13)(60,"p"),e(61,"Aplica um tema ao componente de acordo com o tipo de tema e o n\xEDvel de acessibilidade especificados."),n(),t(62,"p"),e(63,"Este m\xE9todo configura o tema do componente com base no objeto "),t(64,"code"),e(65,"themeConfig"),n(),e(66," fornecido, no "),t(67,"code"),e(68,"themeType"),n(),e(69," e no "),t(70,"code"),e(71,"a11yLevel"),n(),e(72,`.
Al\xE9m disso, ele pode opcionalmente salvar a prefer\xEAncia de tema no localStorage, se solicitado.`),n()()()(),t(73,"h5")(74,"b"),e(75,"Par\xE2metros"),n()(),t(76,"table",14)(77,"tr",15)(78,"th",16),e(79,"Nome"),n(),t(80,"th",16),e(81,"Tipo"),n(),t(82,"th",16),e(83,"Descri\xE7\xE3o"),n()(),t(84,"tr",9)(85,"td",17),e(86," themeConfig"),n(),t(87,"td",18)(88,"code",19),e(89," PoTheme "),n()(),t(90,"td",13)(91,"p"),e(92,"Configura\xE7\xE3o de tema a ser aplicada ao componente."),n()()(),t(93,"tr",9)(94,"td",17),e(95," themeType"),n(),t(96,"td",18)(97,"code",19),e(98," PoThemeTypeEnum "),n()(),t(99,"td",13)(100,"p"),e(101,"(Opcional) Tipo de tema, podendo ser 'light' (claro) ou 'dark' (escuro). O tema claro \xE9 o padr\xE3o."),n()()(),t(102,"tr",9)(103,"td",17),e(104," a11yLevel"),n(),t(105,"td",18)(106,"code",19),e(107," PoThemeA11yEnum "),n()(),t(108,"td",13)(109,"p"),e(110,"(Opcional) N\xEDvel de acessibilidade dos componentes, podendo ser AA ou AAA. Padr\xE3o \xE9 AAA."),n()()(),t(111,"tr",9)(112,"td",17),e(113," persistPreference"),n(),t(114,"td",18)(115,"code",19),e(116," boolean "),n()(),t(117,"td",13)(118,"p"),e(119,`(Opcional) Define se a prefer\xEAncia de tema deve ser salva no
localStorage para persist\xEAncia. Por padr\xE3o \xE9 `),t(120,"code"),e(121,"true"),n(),e(122,", ou seja, a prefer\xEAncia ser\xE1 salva automaticamente."),n()()()(),i(123,"br"),t(124,"table",8)(125,"tr",9)(126,"th",10)(127,"div",11)(128,"h4")(129,"span",12),e(130," getA11yLevel "),n()()()()(),t(131,"tr",13)(132,"td",13)(133,"p"),e(134,`Retorna o n\xEDvel de acessibilidade configurado no tema.
Se n\xE3o estiver configurado, retorna `),t(135,"code"),e(136,"AAA"),n(),e(137," como padr\xE3o."),n()()()(),t(138,"h5")(139,"b"),e(140,"Retorno"),n()(),t(141,"table",14)(142,"tr",15)(143,"th",16),e(144,"Tipo"),n(),t(145,"th",16),e(146,"Descri\xE7\xE3o"),n()(),t(147,"tr",9)(148,"td",18)(149,"code",19),e(150,"PoThemeA11yEnum"),n()(),t(151,"td",13)(152,"p"),e(153,"O n\xEDvel de acessibilidade, que pode ser "),t(154,"code"),e(155,"AA"),n(),e(156," ou "),t(157,"code"),e(158,"AAA"),n(),e(159,"."),n()()()(),i(160,"br"),t(161,"table",8)(162,"tr",9)(163,"th",10)(164,"div",11)(165,"h4")(166,"span",12),e(167," setA11yDefaultSizeSmall "),n()()()()(),t(168,"tr",13)(169,"td",13)(170,"p"),e(171,"Define o tamanho "),t(172,"code"),e(173,"small"),n(),e(174,` como padr\xE3o para componentes de formul\xE1rio que n\xE3o possuem um tamanho definido. Essa
configura\xE7\xE3o \xE9 aplicada globalmente apenas quando o n\xEDvel de acessibilidade for `),t(175,"code"),e(176,"AA"),n(),e(177,`. O valor definido \xE9 salvo no
`),t(178,"code"),e(179,"localStorage"),n(),e(180," sob a chave "),t(181,"code"),e(182,"po-default-size"),n(),e(183,"."),n(),t(184,"blockquote")(185,"p"),e(186,"Para garantir que o tamanho "),t(187,"code"),e(188,"small"),n(),e(189,` seja aplicado corretamente a todos os componentes, recomendamos
definir esta configura\xE7\xE3o `),t(190,"strong"),e(191,"junto com o n\xEDvel de acessibilidade "),t(192,"code"),e(193,"AA"),n(),e(194," na inicializa\xE7\xE3o da aplica\xE7\xE3o"),n(),e(195,`.
Se for aplicada em tempo de execu\xE7\xE3o, ser\xE1 necess\xE1rio recarregar a aplica\xE7\xE3o (`),t(196,"code"),e(197,"reload"),n(),e(198,`)
para que os estilos sejam aplicados corretamente.
Para ajustar a densidade visual dos componentes agrupadores (como pages, container, etc.), utilize tamb\xE9m
o m\xE9todo `),t(199,"code"),e(200,"setDensityMode"),n(),e(201," conforme necess\xE1rio."),n()()()()(),t(202,"h5")(203,"b"),e(204,"Par\xE2metros"),n()(),t(205,"table",14)(206,"tr",15)(207,"th",16),e(208,"Nome"),n(),t(209,"th",16),e(210,"Tipo"),n(),t(211,"th",16),e(212,"Descri\xE7\xE3o"),n()(),t(213,"tr",9)(214,"td",17),e(215," enable"),n(),t(216,"td",18)(217,"code",19),e(218," boolean "),n()(),t(219,"td",13)(220,"p"),e(221,"Habilita ou desabilita o tamanho "),t(222,"code"),e(223,"small"),n(),e(224," globalmente."),n()()()(),i(225,"br"),t(226,"table",8)(227,"tr",9)(228,"th",10)(229,"div",11)(230,"h4")(231,"span",12),e(232," getDensityMode "),n()()()()(),t(233,"tr",13)(234,"td",13)(235,"p"),e(236,`Retorna o modo de adensamento dos componentes agrupadores.
Se n\xE3o estiver configurado, retorna `),t(237,"code"),e(238,"medium"),n(),e(239," como padr\xE3o."),n()()()(),t(240,"h5")(241,"b"),e(242,"Retorno"),n()(),t(243,"table",14)(244,"tr",15)(245,"th",16),e(246,"Tipo"),n(),t(247,"th",16),e(248,"Descri\xE7\xE3o"),n()(),t(249,"tr",9)(250,"td",18)(251,"code",19),e(252,"PoDensityMode"),n()(),t(253,"td",13)(254,"p"),e(255,"O modo de adensamento, que pode ser "),t(256,"code"),e(257,"small"),n(),e(258," ou "),t(259,"code"),e(260,"medium"),n(),e(261,"."),n()()()(),i(262,"br"),t(263,"table",8)(264,"tr",9)(265,"th",10)(266,"div",11)(267,"h4")(268,"span",12),e(269," setDensityMode "),n()()()()(),t(270,"tr",13)(271,"td",13)(272,"p"),e(273,"Aplica o modo de adensamento compacto ("),t(274,"code"),e(275,"small"),n(),e(276,") ou espa\xE7oso ("),t(277,"code"),e(278,"medium"),n(),e(279,`) para os componentes agrupadores,
independentemente do n\xEDvel de acessibilidade. O valor definido \xE9 salvo no `),t(280,"code"),e(281,"localStorage"),n(),e(282,` sob a chave
`),t(283,"code"),e(284,"po-density-mode"),n(),e(285,"."),n()()()(),t(286,"h5")(287,"b"),e(288,"Par\xE2metros"),n()(),t(289,"table",14)(290,"tr",15)(291,"th",16),e(292,"Nome"),n(),t(293,"th",16),e(294,"Tipo"),n(),t(295,"th",16),e(296,"Descri\xE7\xE3o"),n()(),t(297,"tr",9)(298,"td",17),e(299," mode"),n(),t(300,"td",18)(301,"code",20),e(302," 'small' "),n(),t(303,"code",21),e(304," 'medium' "),n()(),t(305,"td",13)(306,"p"),e(307,"Define o modo de densidade: "),t(308,"code"),e(309,"small"),n(),e(310," para compacto, "),t(311,"code"),e(312,"medium"),n(),e(313,` para espa\xE7oso.
O valor padr\xE3o \xE9 `),t(314,"code"),e(315,"medium"),n(),e(316,"."),n()()()(),i(317,"br"),t(318,"table",8)(319,"tr",9)(320,"th",10)(321,"div",11)(322,"h4")(323,"span",12),e(324," persistThemeActive "),n()()()()(),t(325,"tr",13)(326,"td",13)(327,"p"),e(328,`Restaura e aplica as prefer\xEAncias visuais do usu\xE1rio para o tema da aplica\xE7\xE3o, garantindo que essas prefer\xEAncias
sejam persistidas no `),t(329,"code"),e(330,"localStorage"),n(),e(331," para uso em recarregamentos futuros."),n()()()(),t(332,"h5")(333,"b"),e(334,"Retorno"),n()(),t(335,"table",14)(336,"tr",15)(337,"th",16),e(338,"Tipo"),n(),t(339,"th",16),e(340,"Descri\xE7\xE3o"),n()(),t(341,"tr",9)(342,"td",18)(343,"code",19),e(344,"PoTheme"),n()(),t(345,"td",13)(346,"p"),e(347,"O tema atualmente aplicado."),n()()()(),i(348,"br"),t(349,"table",8)(350,"tr",9)(351,"th",10)(352,"div",11)(353,"h4")(354,"span",12),e(355," changeCurrentThemeType "),n()()()()(),t(356,"tr",13)(357,"td",13)(358,"p"),e(359,"Altera o tipo do tema armazenado e aplica os novos estilos ao documento."),n(),t(360,"p"),e(361,"Este m\xE9todo altera o tipo do tema armazenado ativo (light/dark)"),n()()()(),t(362,"h5")(363,"b"),e(364,"Par\xE2metros"),n()(),t(365,"table",14)(366,"tr",15)(367,"th",16),e(368,"Nome"),n(),t(369,"th",16),e(370,"Tipo"),n(),t(371,"th",16),e(372,"Descri\xE7\xE3o"),n()(),t(373,"tr",9)(374,"td",17),e(375," themeType"),n(),t(376,"td",18)(377,"code",19),e(378," PoThemeTypeEnum "),n()(),t(379,"td",13)(380,"p"),e(381,"O tipo de tema a ser aplicado, light ou dark."),n()()()(),i(382,"br"),t(383,"table",8)(384,"tr",9)(385,"th",10)(386,"div",11)(387,"h4")(388,"span",12),e(389," cleanThemeActive "),n()()()()(),t(390,"tr",13)(391,"td",13)(392,"p"),e(393,`M\xE9todo remove o tema armazenado e limpa todos os estilos de tema
aplicados ao documento.`),n()()()(),t(394,"h5")(395,"b"),e(396,"Par\xE2metros"),n()(),t(397,"table",14)(398,"tr",15)(399,"th",16),e(400,"Nome"),n(),t(401,"th",16),e(402,"Tipo"),n(),t(403,"th",16),e(404,"Descri\xE7\xE3o"),n()(),t(405,"tr",9)(406,"td",17),e(407," persistPreference"),n(),t(408,"td",18)(409,"code",19),e(410," boolean "),n()(),t(411,"td",13)(412,"p"),e(413,"(Opcional) Define se a prefer\xEAncia de tema n\xE3o deve ser mantida no localStorage para persist\xEAncia. "),t(414,"code"),e(415,"true"),n(),e(416," para remover, "),t(417,"code"),e(418,"false"),n(),e(419," para manter."),n()()()(),i(420,"br"),t(421,"table",8)(422,"tr",9)(423,"th",10)(424,"div",11)(425,"h4")(426,"span",12),e(427," getThemeActive "),n()()()()(),t(428,"tr",13)(429,"td",13)(430,"p"),e(431,"Retorna o tema ativo como um observable. Este m\xE9todo funcionar\xE1 apenas se o tema estiver armazenado no "),t(432,"code"),e(433,"localStorage"),n(),e(434,"."),n()()()(),t(435,"h5")(436,"b"),e(437,"Retorno"),n()(),t(438,"table",14)(439,"tr",15)(440,"th",16),e(441,"Tipo"),n(),t(442,"th",16),e(443,"Descri\xE7\xE3o"),n()(),t(444,"tr",9)(445,"td",18)(446,"code",19),e(447,"PoTheme"),n()(),t(448,"td",13)(449,"p"),e(450,"Tema ativo."),n()()()(),i(451,"br"),t(452,"table",8)(453,"tr",9)(454,"th",10)(455,"div",11)(456,"h4")(457,"span",12),e(458," setDefaultTheme "),n()()()()(),t(459,"tr",13)(460,"td",13)(461,"p"),e(462,'Define o tema atual como o tema "PoUI Padr\xE3o".'),n()()()(),t(463,"h5")(464,"b"),e(465,"Par\xE2metros"),n()(),t(466,"table",14)(467,"tr",15)(468,"th",16),e(469,"Nome"),n(),t(470,"th",16),e(471,"Tipo"),n(),t(472,"th",16),e(473,"Descri\xE7\xE3o"),n()(),t(474,"tr",9)(475,"td",17),e(476," type"),n(),t(477,"td",18)(478,"code",19),e(479," PoThemeTypeEnum "),n()(),t(480,"td",13)(481,"p"),e(482,"O tipo de Tema a ser aplicado, light / dark."),n()()()(),i(483,"br"),t(484,"table",8)(485,"tr",9)(486,"th",10)(487,"div",11)(488,"h4")(489,"span",12),e(490," setThemeType "),n()()()()(),t(491,"tr",13)(492,"td",13)(493,"p"),e(494,"Define o tipo (light/dark) quando um tema est\xE1 sendo aplicado."),n()()()(),t(495,"h5")(496,"b"),e(497,"Par\xE2metros"),n()(),t(498,"table",14)(499,"tr",15)(500,"th",16),e(501,"Nome"),n(),t(502,"th",16),e(503,"Tipo"),n(),t(504,"th",16),e(505,"Descri\xE7\xE3o"),n()(),t(506,"tr",9)(507,"td",17),e(508," theme"),n(),t(509,"td",18)(510,"code",19),e(511," PoTheme "),n()(),t(512,"td",13)(513,"p"),e(514,"Objeto contendo as defini\xE7\xF5es de tema a serem aplicadas no componente."),n()()(),t(515,"tr",9)(516,"td",17),e(517," themeType"),n(),t(518,"td",18)(519,"code",19),e(520," PoThemeTypeEnum "),n()(),t(521,"td",13)(522,"p"),e(523,"(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padr\xE3o, o tema claro \xE9 aplicado."),n()()()(),i(524,"br"),t(525,"table",8)(526,"tr",9)(527,"th",10)(528,"div",11)(529,"h4")(530,"span",12),e(531," setCurrentThemeType "),n()()()()(),t(532,"tr",13)(533,"td",13)(534,"p"),e(535,"Define o tipo (light/dark) para um tema j\xE1 ativo."),n()()()(),t(536,"h5")(537,"b"),e(538,"Par\xE2metros"),n()(),t(539,"table",14)(540,"tr",15)(541,"th",16),e(542,"Nome"),n(),t(543,"th",16),e(544,"Tipo"),n(),t(545,"th",16),e(546,"Descri\xE7\xE3o"),n()(),t(547,"tr",9)(548,"td",17),e(549," themeType"),n(),t(550,"td",18)(551,"code",19),e(552," PoThemeTypeEnum "),n()(),t(553,"td",13)(554,"p"),e(555,"(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padr\xE3o, o tema claro \xE9 aplicado."),n()()()(),i(556,"br"),t(557,"table",8)(558,"tr",9)(559,"th",10)(560,"div",11)(561,"h4")(562,"span",12),e(563," setThemeA11y "),n()()()()(),t(564,"tr",13)(565,"td",13)(566,"p"),e(567,"Define o n\xEDvel de acessibilidade quando um tema est\xE1 sendo aplicado."),n()()()(),t(568,"h5")(569,"b"),e(570,"Par\xE2metros"),n()(),t(571,"table",14)(572,"tr",15)(573,"th",16),e(574,"Nome"),n(),t(575,"th",16),e(576,"Tipo"),n(),t(577,"th",16),e(578,"Descri\xE7\xE3o"),n()(),t(579,"tr",9)(580,"td",17),e(581," theme"),n(),t(582,"td",18)(583,"code",19),e(584," PoTheme "),n()(),t(585,"td",13)(586,"p"),e(587,"Objeto contendo as defini\xE7\xF5es de tema a serem aplicadas no componente."),n()()(),t(588,"tr",9)(589,"td",17),e(590," a11y"),n(),t(591,"td",18)(592,"code",19),e(593," PoThemeA11yEnum "),n()(),t(594,"td",13)(595,"p"),e(596,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),n()()()(),i(597,"br"),t(598,"table",8)(599,"tr",9)(600,"th",10)(601,"div",11)(602,"h4")(603,"span",12),e(604," setCurrentThemeA11y "),n()()()()(),t(605,"tr",13)(606,"td",13)(607,"p"),e(608,"Define o n\xEDvel de acessibilidade para um tema j\xE1 ativo."),n()()()(),t(609,"h5")(610,"b"),e(611,"Par\xE2metros"),n()(),t(612,"table",14)(613,"tr",15)(614,"th",16),e(615,"Nome"),n(),t(616,"th",16),e(617,"Tipo"),n(),t(618,"th",16),e(619,"Descri\xE7\xE3o"),n()(),t(620,"tr",9)(621,"td",17),e(622," a11y"),n(),t(623,"td",18)(624,"code",19),e(625," PoThemeA11yEnum "),n()(),t(626,"td",13)(627,"p"),e(628,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),n()()()(),i(629,"br"),t(630,"h3"),e(631,"Interfaces"),n(),t(632,"h4",22)(633,"code",5),e(634,"PoThemeColor"),n()(),t(635,"div",2)(636,"p"),e(637,"Interface para representar as cores do tema."),n()(),t(638,"h4",7),e(639,"Propriedades"),n(),t(640,"table",14)(641,"tr",15)(642,"th",16),e(643,"Nome"),n(),t(644,"th",16),e(645,"Tipo"),n(),t(646,"th",16),e(647,"Descri\xE7\xE3o"),n()(),t(648,"tr",9)(649,"td",17)(650,"div",11)(651,"span",12),e(652," action"),i(653,"br"),n()()(),t(654,"td",18)(655,"code",23),e(656,"PoThemeColorAction"),n()(),t(657,"td",13)(658,"em")(659,"strong"),e(660,"(opcional)"),n()(),t(661,"p"),e(662,"Cores da Action a serem aplicadas."),n(),t(663,"p"),e(664,"Exemplo de uso:"),n(),t(665,"pre")(666,"code",24),e(667,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
 hover: 'var(--color-brand-01-dark)',
 pressed: 'var(--color-brand-01-darker)',
 disabled: 'var(--color-neutral-light-30)',
 focus: 'var(--color-brand-01-darkest)'
}
`),n()()()(),t(668,"tr",9)(669,"td",17)(670,"div",11)(671,"span",12),e(672," brand"),i(673,"br"),n()()(),t(674,"td",18)(675,"code",25),e(676,"poThemeColorBrand"),n()(),t(677,"td",13)(678,"em")(679,"strong"),e(680,"(opcional)"),n()(),t(681,"p"),e(682,"Cores da Brand a serem aplicadas."),n(),t(683,"p"),e(684,"Exemplo de uso:"),n(),t(685,"pre")(686,"code",26),e(687,`PoThemeColor.brand = {
 01: PoThemeColorTone,
 02: PoThemeColorTone,
 03: PoThemeColorTone
}
`),n()()()(),t(688,"tr",9)(689,"td",17)(690,"div",11)(691,"span",12),e(692," categorical"),i(693,"br"),n()()(),t(694,"td",18)(695,"code",27),e(696,"PoThemeColorCategorical"),n()(),t(697,"td",13)(698,"em")(699,"strong"),e(700,"(opcional)"),n()(),t(701,"p"),e(702,"Cores da Categorical a serem aplicadas."),n(),t(703,"p"),e(704,"Exemplo de uso:"),n(),t(705,"pre")(706,"code",26),e(707,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),n()()()(),t(708,"tr",9)(709,"td",17)(710,"div",11)(711,"span",12),e(712," categorical-overlay"),i(713,"br"),n()()(),t(714,"td",18)(715,"code",27),e(716,"PoThemeColorCategorical"),n()(),t(717,"td",13)(718,"em")(719,"strong"),e(720,"(opcional)"),n()(),t(721,"p"),e(722,"Cores da Categorical a serem aplicadas."),n(),t(723,"p"),e(724,"Exemplo de uso:"),n(),t(725,"pre")(726,"code",26),e(727,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),n()()()(),t(728,"tr",9)(729,"td",17)(730,"div",11)(731,"span",12),e(732," neutral"),i(733,"br"),n()()(),t(734,"td",18)(735,"code",28),e(736,"PoThemeColorNeutral"),n()(),t(737,"td",13)(738,"em")(739,"strong"),e(740,"(opcional)"),n()(),t(741,"p"),e(742,"Cores Neutrals a serem aplicadas."),n(),t(743,"p"),e(744,"Exemplo de uso:"),n(),t(745,"pre")(746,"code",26),e(747,`PoThemeColor.neutral = {
 light: { '00': string, '05': string, '10': string, '20': string, '30': string },
 mid: { '40': string, '60': string },
 dark: { '70': string, '80': string, '90': string, '95': string },
}
`),n()()()()(),t(748,"h4",22)(749,"code",5),e(750,"PoThemeColorAction"),n()(),t(751,"div",2)(752,"p"),e(753,"Interface para as cores de a\xE7\xE3o do tema."),n()(),t(754,"h4",7),e(755,"Propriedades"),n(),t(756,"table",14)(757,"tr",15)(758,"th",16),e(759,"Nome"),n(),t(760,"th",16),e(761,"Tipo"),n(),t(762,"th",16),e(763,"Descri\xE7\xE3o"),n()(),t(764,"tr",9)(765,"td",17)(766,"div",11)(767,"span",12),e(768," default"),i(769,"br"),n()()(),t(770,"td",18)(771,"code",29),e(772,"string"),n()(),t(773,"td",13)(774,"em")(775,"strong"),e(776,"(opcional)"),n()(),t(777,"p"),e(778,"Cores da Action 'Default'."),n(),t(779,"p"),e(780,"Exemplo de uso:"),n(),t(781,"pre")(782,"code",26),e(783,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
}
`),n()()()(),t(784,"tr",9)(785,"td",17)(786,"div",11)(787,"span",12),e(788," disabled"),i(789,"br"),n()()(),t(790,"td",18)(791,"code",29),e(792,"string"),n()(),t(793,"td",13)(794,"em")(795,"strong"),e(796,"(opcional)"),n()(),t(797,"p"),e(798,"Cores da Action de 'disabled'."),n(),t(799,"p"),e(800,"Exemplo de uso:"),n(),t(801,"pre")(802,"code",26),e(803,`PoThemeColor.action = {
 disabled: 'var(--color-neutral-light-30)',
}
`),n()()()(),t(804,"tr",9)(805,"td",17)(806,"div",11)(807,"span",12),e(808," focus"),i(809,"br"),n()()(),t(810,"td",18)(811,"code",29),e(812,"string"),n()(),t(813,"td",13)(814,"em")(815,"strong"),e(816,"(opcional)"),n()(),t(817,"p"),e(818,"Cores da Action para 'focus'."),n(),t(819,"p"),e(820,"Exemplo de uso:"),n(),t(821,"pre")(822,"code",26),e(823,`PoThemeColor.action = {
 focus: 'var(--color-brand-01-darkest)'
}
`),n()()()(),t(824,"tr",9)(825,"td",17)(826,"div",11)(827,"span",12),e(828," hover"),i(829,"br"),n()()(),t(830,"td",18)(831,"code",29),e(832,"string"),n()(),t(833,"td",13)(834,"em")(835,"strong"),e(836,"(opcional)"),n()(),t(837,"p"),e(838,"Cores da Action para 'hover'."),n(),t(839,"p"),e(840,"Exemplo de uso:"),n(),t(841,"pre")(842,"code",26),e(843,`PoThemeColor.action = {
 hover: 'var(--color-brand-01-dark)',
}
`),n()()()(),t(844,"tr",9)(845,"td",17)(846,"div",11)(847,"span",12),e(848," pressed"),i(849,"br"),n()()(),t(850,"td",18)(851,"code",29),e(852,"string"),n()(),t(853,"td",13)(854,"em")(855,"strong"),e(856,"(opcional)"),n()(),t(857,"p"),e(858,"Cores da Action para 'pressed'."),n(),t(859,"p"),e(860,"Exemplo de uso:"),n(),t(861,"pre")(862,"code",26),e(863,`PoThemeColor.action = {
 pressed: 'var(--color-brand-01-darker)',
}
`),n()()()()(),t(864,"h4",22)(865,"code",5),e(866,"PoThemeColorNeutral"),n()(),t(867,"div",2)(868,"p"),e(869,"Interface para as cores neutras do tema."),n()(),t(870,"h4",7),e(871,"Propriedades"),n(),t(872,"table",14)(873,"tr",15)(874,"th",16),e(875,"Nome"),n(),t(876,"th",16),e(877,"Tipo"),n(),t(878,"th",16),e(879,"Descri\xE7\xE3o"),n()(),t(880,"tr",9)(881,"td",17)(882,"div",11)(883,"span",12),e(884," dark"),i(885,"br"),n()()(),t(886,"td",18)(887,"code",30),e(888,`{ '70'?: string; '80'?: string; '90'?: string; '95'?: string;
}`),n()(),t(889,"td",13)(890,"em")(891,"strong"),e(892,"(opcional)"),n()(),t(893,"p"),e(894,"Cores Neutrals do tipo 'dark'."),n(),t(895,"p"),e(896,"Exemplo de uso:"),n(),t(897,"pre")(898,"code",26),e(899,`PoThemeColor.neutral.dark = {
 '70': '#4a5c60',
 '80': '#2c3739',
 '90': '#1d2426',
 '95': '#0b0e0e',
}
`),n()()()(),t(900,"tr",9)(901,"td",17)(902,"div",11)(903,"span",12),e(904," light"),i(905,"br"),n()()(),t(906,"td",18)(907,"code",31),e(908,`{ '00'?: string; '05'?: string; '10'?: string; '20'?: string; '30'?: string;
}`),n()(),t(909,"td",13)(910,"em")(911,"strong"),e(912,"(opcional)"),n()(),t(913,"p"),e(914,"Cores Neutrals do tipo 'light'."),n(),t(915,"p"),e(916,"Exemplo de uso:"),n(),t(917,"pre")(918,"code",26),e(919,`PoThemeColor.neutral.light = {
 '00': '#ffffff',
 '05': '#fbfbfb',
 '10': '#eceeee',
 '20': '#dadedf',
 '30': '#b6bdbf'
}
`),n()()()(),t(920,"tr",9)(921,"td",17)(922,"div",11)(923,"span",12),e(924," mid"),i(925,"br"),n()()(),t(926,"td",18)(927,"code",32),e(928,`{ '40'?: string; '60'?: string;
}`),n()(),t(929,"td",13)(930,"em")(931,"strong"),e(932,"(opcional)"),n()(),t(933,"p"),e(934,"Cores Neutrals do tipo 'mid'."),n(),t(935,"p"),e(936,"Exemplo de uso:"),n(),t(937,"pre")(938,"code",26),e(939,`PoThemeColor.neutral.mid = {
 '40': '#9da7a9',
 '60': '#6e7c7f',
}
`),n()()()()(),t(940,"h4",22)(941,"code",5),e(942,"PoThemeTokens"),n()(),t(943,"div",2)(944,"p"),e(945,"Interface para o tema da aplica\xE7\xE3o."),n()(),t(946,"h4",22)(947,"code",5),e(948,"PoThemeToken"),n()(),t(949,"div",2)(950,"p"),e(951,"Interface para os tokens do Tema."),n()(),t(952,"h4",7),e(953,"Propriedades"),n(),t(954,"table",14)(955,"tr",15)(956,"th",16),e(957,"Nome"),n(),t(958,"th",16),e(959,"Tipo"),n(),t(960,"th",16),e(961,"Descri\xE7\xE3o"),n()(),t(962,"tr",9)(963,"td",17)(964,"div",11)(965,"span",12),e(966," color"),i(967,"br"),n()()(),t(968,"td",18)(969,"code",33),e(970,"PoThemeColor"),n()(),t(971,"td",13)(972,"em")(973,"strong"),e(974,"(opcional)"),n()(),t(975,"p"),e(976,"Tokens do tipo 'color'"),n()()(),t(977,"tr",9)(978,"td",17)(979,"div",11)(980,"span",12),e(981," onRoot"),i(982,"br"),n()()(),t(983,"td",18)(984,"code",34),e(985,"DynamicProperties"),n()(),t(986,"td",13)(987,"em")(988,"strong"),e(989,"(opcional)"),n()(),t(990,"p"),e(991,`Tokens do tipo 'onRoot'
Esta propriedade adicionar\xE1 todos os tokens passados e adicionado direto no `),t(992,"code"),e(993,":root"),n()(),t(994,"p"),e(995,"Exemplo de uso:"),n(),t(996,"pre")(997,"code",26),e(998,`onRoot: {
  '--color-page-background-color-page': '#121212',
  '--color-toolbar-color-badge-text': 'var(--color-neutral-dark-95)',
},
`),n()()()(),t(999,"tr",9)(1e3,"td",17)(1001,"div",11)(1002,"span",12),e(1003," perComponent"),i(1004,"br"),n()()(),t(1005,"td",18)(1006,"code",34),e(1007,"DynamicProperties"),n()(),t(1008,"td",13)(1009,"em")(1010,"strong"),e(1011,"(opcional)"),n()(),t(1012,"p"),e(1013,"Tokens do tipo 'perComponent'"),n(),t(1014,"p"),e(1015,"Exemplo de uso:"),n(),t(1016,"pre")(1017,"code",26),e(1018,`perComponent: {
  'po-badge': {
    '--color': 'var(--color-neutral-dark-95)',
  },
  'po-container': {
    '--background': '#121212',
  },
},
`),n()()()()(),t(1019,"h4",22)(1020,"code",5),e(1021,"PoTheme"),n()(),t(1022,"div",2)(1023,"p"),e(1024,"Interface para o m\xE9todo "),t(1025,"code"),e(1026,"setTheme()"),n(),e(1027,"."),n()(),t(1028,"h4",7),e(1029,"Propriedades"),n(),t(1030,"table",14)(1031,"tr",15)(1032,"th",16),e(1033,"Nome"),n(),t(1034,"th",16),e(1035,"Tipo"),n(),t(1036,"th",16),e(1037,"Descri\xE7\xE3o"),n()(),t(1038,"tr",9)(1039,"td",17)(1040,"div",11)(1041,"span",12),e(1042," active"),i(1043,"br"),n()()(),t(1044,"td",18)(1045,"code",35),e(1046,"PoThemeTypeEnum "),n(),t(1047,"code",36),e(1048," PoThemeActive"),n()(),t(1049,"td",13)(1050,"em")(1051,"strong"),e(1052,"(opcional)"),n()(),t(1053,"p"),e(1054,"Tipo e n\xEDvel de acessibilidade de tema ativo"),n()()(),t(1055,"tr",9)(1056,"td",17)(1057,"div",11)(1058,"span",12),e(1059," name"),i(1060,"br"),n()()(),t(1061,"td",18)(1062,"code",29),e(1063,"string"),n()(),t(1064,"td",13)(1065,"p"),e(1066,`Nome para o tema:
Ex.: default, totvs, sunset...`),n()()(),t(1067,"tr",9)(1068,"td",17)(1069,"div",11)(1070,"span",12),e(1071," type"),i(1072,"br"),n()()(),t(1073,"td",18)(1074,"code",37),e(1075,"PoThemeType "),n(),t(1076,"code",38),e(1077," Array<PoThemeType>"),n()(),t(1078,"td",13)(1079,"p"),e(1080,"Tipo de tema:"),n(),t(1081,"ul")(1082,"li"),e(1083,"light"),n(),t(1084,"li"),e(1085,"dark"),n()()()()(),t(1086,"h3"),e(1087,"Enums"),n(),t(1088,"h4",4)(1089,"code",5),e(1090,"PoThemeA11yEnum"),n()(),t(1091,"div",2)(1092,"p"),e(1093,"Enum para configurar o n\xEDvel de acessibilidade dos componentes atrav\xE9s do servi\xE7o de tema."),n(),t(1094,"pre")(1095,"code"),e(1096,`import { PoThemeA11yEnum } from '@po-ui/theme';

// Definindo o n\xEDvel de acessibilidade ao configurar as cores e o tipo do tema (light | dark)
themeService.setTheme(...theme, ...type, PoThemeA11yEnum.AA);

// Definindo o n\xEDvel de acessibilidade ao configurar apenas as cores do tema
themeService.setThemeA11y(...theme, PoThemeA11yEnum.AAA);

// Alterando o n\xEDvel de acessibilidade com as cores do tema j\xE1 definidas
themeService.setCurrentThemeA11y(PoThemeA11yEnum.AAA);
`),n()()(),t(1097,"h4",7),e(1098,"Propriedades"),n(),t(1099,"table",14)(1100,"tr",15)(1101,"th",16),e(1102,"Nome"),n(),t(1103,"th",16),e(1104,"Descri\xE7\xE3o"),n()(),t(1105,"tr",9)(1106,"td",17)(1107,"div",11)(1108,"span",12),e(1109," AA"),i(1110,"br"),n()()(),t(1111,"td",13)(1112,"p"),e(1113,"N\xEDvel de acessibilidade AA."),n(),t(1114,"ul")(1115,"li"),e(1116,"Define a espessura do "),t(1117,"code"),e(1118,"outline"),n(),e(1119," para "),t(1120,"strong"),e(1121,"2px"),n(),e(1122,"."),n(),t(1123,"li"),e(1124,"Disponibiliza o tamanho "),t(1125,"code"),e(1126,"small"),n(),e(1127,` para componentes de formul\xE1rio (buttons, inputs, checkboxes, radios e switches)
conforme suas documenta\xE7\xF5es.`),n()()()(),t(1128,"tr",9)(1129,"td",17)(1130,"div",11)(1131,"span",12),e(1132," AAA"),i(1133,"br"),n()()(),t(1134,"td",13)(1135,"p"),e(1136,"N\xEDvel de acessibilidade AAA."),n(),t(1137,"ul")(1138,"li"),e(1139,"Define a espessura do "),t(1140,"code"),e(1141,"outline"),n(),e(1142," para "),t(1143,"strong"),e(1144,"4px"),n(),e(1145,"."),n(),t(1146,"li"),e(1147,"N\xE3o disponibiliza o tamanho "),t(1148,"code"),e(1149,"small"),n(),e(1150," para componentes de formul\xE1rio."),n()()()()(),t(1151,"h4",4)(1152,"code",5),e(1153,"PoThemeTypeEnum"),n()(),t(1154,"div",2)(1155,"p"),e(1156,"Enum utilizado para configurar o tipo de tema suportado, \xE9 poss\xEDvel alternar entre os tipos definidos."),n(),t(1157,"pre")(1158,"code"),e(1159,`import { PoThemeTypeEnum } from '@po-ui/theme';

// Definindo o tipo de tema como claro
themeService.setTheme(...theme, PoThemeTypeEnum.light);

// Definindo o tipo de tema como escuro
themeService.setTheme(...theme, PoThemeTypeEnum.dark);

// Alterando o tipo do tema para um tema j\xE1 aplicado
themeService.setCurrentThemeType(PoThemeTypeEnum.dark);
`),n()()(),t(1160,"h4",7),e(1161,"Propriedades"),n(),t(1162,"table",14)(1163,"tr",15)(1164,"th",16),e(1165,"Nome"),n(),t(1166,"th",16),e(1167,"Descri\xE7\xE3o"),n()(),t(1168,"tr",9)(1169,"td",17)(1170,"div",11)(1171,"span",12),e(1172," light"),i(1173,"br"),n()()(),t(1174,"td",13)(1175,"p"),e(1176,"Define o tema como claro."),n()()(),t(1177,"tr",9)(1178,"td",17)(1179,"div",11)(1180,"span",12),e(1181," dark"),i(1182,"br"),n()()(),t(1183,"td",13)(1184,"p"),e(1185,"Define o tema como escuro."),n()()()()())},encapsulation:2})}return r})();var fe=(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=1;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,o){this.route=m,this.router=o}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let o=m.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(o){return new(o||r)(v($),v(ee))};static \u0275cmp=S({type:r,selectors:[["ng-component"]],standalone:!1,decls:6,vars:4,consts:[["p-title","Theme",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,a){o&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),E("p-click",function(){return a.changeTab("doc")}),i(3,"sample-po-theme-doc"),n(),t(4,"po-tab",3),E("p-click",function(){return a.changeTab("web")}),i(5,"sample-po-theme-labs-view"),n()()()),o&2&&(d("p-actions",a.actions),l(2),d("p-active",a.activeTab==="doc"),l(2),d("p-hide",a.hidePoWebSample)("p-active",a.activeTab==="web"))},dependencies:[he,P,D,be,ge],encapsulation:2})}return r})();var Le=[{path:"",component:fe}],Te=(()=>{class r{static \u0275fac=function(o){return new(o||r)};static \u0275mod=y({type:r});static \u0275inj=A({imports:[F.forChild(Le),F]})}return r})();var Xe=(()=>{class r{static \u0275fac=function(o){return new(o||r)};static \u0275mod=y({type:r});static \u0275inj=A({imports:[Se,Te]})}return r})();export{Xe as DocPoThemeModule};
