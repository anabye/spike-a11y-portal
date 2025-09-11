import{o as Ee,p as Se}from"./chunk-MGHF6CRC.js";import{Da as me,Db as ue,Ea as de,La as pe,O as ne,Pa as se,S as ie,Wa as ce,da as ae,ea as oe,fa as re,g as x,ga as N,ha as _,ia as le,ja as M,ka as I,la as C,mb as he,y as te,yb as P,zb as D}from"./chunk-6ZXZFM3Y.js";import{$a as q,Aa as d,Bb as U,Cc as H,Da as O,Dc as Q,Fc as J,Gc as K,Jc as X,Kc as Y,La as t,Ma as n,N as A,Na as i,Oc as Z,Ra as V,Sa as E,Tc as $,U as b,V as g,Vc as ee,Xc as F,_a as R,a as c,ab as j,b as u,cb as e,eb as z,gb as L,hb as k,ib as w,ja as m,jb as B,ka as v,lb as W,qa as S,ra as y,xb as G,zc as p}from"./chunk-S7P3J2XO.js";var Ae=["reactiveFormData"],ve=(()=>{class r{cdr;fb;poTheme;reactiveFormModal;a11yLevel;a11yLevelStorage="po-a11y-AAA";reactiveForm;theme=0;themeStorage="po-theme-default";a11yChangeListenerAAA;a11yChangeListenerAA;themeChangeListenerDark;themeChangeListenerDefault;a11yLevelOptions=[{label:"AA",value:"AA"},{label:"AAA",value:"AAA"}];themeOptions=[{label:"Light",value:0},{label:"Dark",value:1}];modalPrimaryAction={action:()=>this.reactiveFormModal.close(),label:"Close"};poThemeSample={name:"po-theme",type:{light:{color:{brand:{"01":{lightest:"#f2eaf6",lighter:"#d9c2e5",light:"#bd94d1",base:"#753399",dark:"#5b1c7d",darker:"#400e58",darkest:"#260538"},"02":{base:"#b92f72"},"03":{base:"#ffd464"}},action:u(c({},oe),{disabled:"var(--color-neutral-mid-40)"}),feedback:u(c({},N),{info:u(c({},N.info),{base:"#0079b8"})}),neutral:c({},re)},onRoot:u(c({},_.onRoot),{"--color-page-background-color-page":"var(--color-neutral-light-05)"}),perComponent:c({},_.perComponent)},dark:{color:{brand:{"01":{darkest:"#f2eaf6",darker:"#d9c2e5",dark:"#bd94d1",base:"#753399",light:"#5b1c7d",lighter:"#400e58",lightest:"#260538"},"02":{base:"#b92f72"},"03":{base:"#ffd464"}},action:u(c({},le),{disabled:"var(--color-neutral-mid-40)"}),feedback:u(c({},M),{info:u(c({},M.info),{base:"#0079b8"})}),neutral:{light:{"00":"#1c1c1c","05":"#202020",10:"#2b2b2b",20:"#3b3b3b",30:"#5a5a5a"},mid:{40:"#7c7c7c",60:"#a1a1a1"},dark:{70:"#c1c1c1",80:"#d9d9d9",90:"#eeeeee",95:"#fbfbfb"}}},onRoot:u(c({},I.onRoot),{"--color-page-background-color-page":"var(--color-neutral-light-05)"}),perComponent:c({},I.perComponent)}},active:ae.light};constructor(l,o,a){this.cdr=l,this.fb=o,this.poTheme=a;let s=this.poTheme.applyTheme();this.a11yLevel=this.poTheme.getA11yLevel(),s?this.theme=s.active||0:(this.poTheme.setTheme(this.poThemeSample,this.theme,this.a11yLevel),this.theme=this.poThemeSample.active),this.createReactiveForm(),this.a11yLevel==="AA"&&this.poTheme.setA11yDefaultSizeSmall(!0)}ngOnInit(){localStorage.getItem("po-ui-theme")&&(this.themeStorage=localStorage.getItem("po-ui-theme")),this.theme=this.themeStorage==="po-theme-default"?0:1,this.changeTheme(this.theme,!1),localStorage.getItem("po-ui-a11y")&&(this.a11yLevelStorage=localStorage.getItem("po-ui-a11y")),this.a11yLevel=this.a11yLevelStorage==="po-a11y-AAA"?x.AAA:x.AA,this.changeA11yLevel(this.a11yLevel,!1),this.themeChangeListenerDefault=()=>{this.changeTheme(0,!1),this.theme=0},this.themeChangeListenerDark=()=>{this.changeTheme(1,!1),this.theme=1},this.a11yChangeListenerAAA=()=>{this.changeA11yLevel(x.AAA,!1),this.a11yLevel=x.AAA},this.a11yChangeListenerAA=()=>{this.changeA11yLevel(x.AA,!1),this.a11yLevel=x.AA},window.addEventListener("po-a11y-AA",this.a11yChangeListenerAA),window.addEventListener("po-a11y-AAA",this.a11yChangeListenerAAA),window.addEventListener("po-theme-default",this.themeChangeListenerDefault),window.addEventListener("po-theme-dark",this.themeChangeListenerDark)}ngOnDestroy(){window.removeEventListener("po-theme-default",this.themeChangeListenerDefault),window.removeEventListener("po-theme-dark",this.themeChangeListenerDark),window.removeEventListener("po-a11y-AA",this.a11yChangeListenerAA),window.removeEventListener("po-a11y-AAA",this.a11yChangeListenerAAA)}changeA11yLevel(l,o=!0){this.poTheme.setCurrentThemeA11y(l),l==="AA"?localStorage.setItem("po-ui-a11y","po-a11y-AA"):localStorage.setItem("po-ui-a11y","po-a11y-AAA"),l===x.AA&&this.poTheme.setA11yDefaultSizeSmall(!0),o&&window.dispatchEvent(new Event("po-sample-change-a11y"))}changeTheme(l,o=!0){this.poTheme.setTheme(this.poThemeSample,l,this.a11yLevel),l===1?localStorage.setItem("po-ui-theme","po-theme-dark"):localStorage.setItem("po-ui-theme","po-theme-default"),o&&window.dispatchEvent(new Event("po-sample-change-theme")),this.a11yLevel==="AA"&&this.poTheme.setA11yDefaultSizeSmall(!0)}createReactiveForm(){this.reactiveForm=this.fb.group({name:["",p.compose([p.required,p.minLength(5),p.maxLength(30)])],address:["",p.compose([p.required,p.minLength(5),p.maxLength(50)])],number:["",p.compose([p.required,p.min(1),p.max(99999)])],email:["",p.required],website:["",p.required]})}saveForm(){this.reactiveFormModal.open()}static \u0275fac=function(o){return new(o||r)(v(G),v(Z),v(C))};static \u0275cmp=S({type:r,selectors:[["sample-po-theme-labs"]],viewQuery:function(o,a){if(o&1&&R(Ae,7),o&2){let s;q(s=j())&&(a.reactiveFormModal=s.first)}},standalone:!1,features:[B([C])],decls:22,vars:12,consts:[["reactiveFormData",""],["p-title","Example"],[3,"formGroup"],["formControlName","name","p-clean","","p-icon","an an-user","p-label","Customer name",1,"po-lg-6"],["formControlName","email","p-label","Email","p-clean","",1,"po-lg-6"],["formControlName","address","p-clean","","p-icon","an an-map-pin","p-label","Address",1,"po-lg-4","po-md-8"],["formControlName","number","p-label","Number","p-clean","",1,"po-lg-2","po-md-4"],["formControlName","website","p-label","Website","p-clean","",1,"po-lg-6"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Save successful",3,"p-primary-action"],["p-label","Name",1,"po-md-12",3,"p-value"],["p-label","Address",1,"po-md-6",3,"p-value"],["p-label","Number",1,"po-md-6",3,"p-value"],["p-label","Email",1,"po-md-6",3,"p-value"],["p-label","Website",1,"po-md-6",3,"p-value"],[1,"po-row","po-mt-3"],["name","theme","p-label","Theme Type",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","a11ylevel","p-label","Acessibility Level",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"]],template:function(o,a){if(o&1){let s=V();t(0,"po-widget",1)(1,"form",2),i(2,"po-input",3)(3,"po-email",4)(4,"po-input",5)(5,"po-number",6)(6,"po-url",7),t(7,"div",8)(8,"po-button",9),E("p-click",function(){return b(s),g(a.saveForm())}),n()()(),t(9,"po-modal",10,0)(11,"div",8),i(12,"po-info",11),n(),t(13,"div",8),i(14,"po-info",12)(15,"po-info",13),n(),t(16,"div",8),i(17,"po-info",14)(18,"po-info",15),n()()(),t(19,"div",16)(20,"po-radio-group",17),w("ngModelChange",function(h){return b(s),k(a.theme,h)||(a.theme=h),g(h)}),E("p-change",function(h){return b(s),g(a.changeTheme(h))}),n(),t(21,"po-radio-group",18),w("ngModelChange",function(h){return b(s),k(a.a11yLevel,h)||(a.a11yLevel=h),g(h)}),E("p-change",function(h){return b(s),g(a.changeA11yLevel(h))}),n()()}o&2&&(m(),d("formGroup",a.reactiveForm),m(7),d("p-disabled",!a.reactiveForm.valid),m(),d("p-primary-action",a.modalPrimaryAction),m(3),d("p-value",a.reactiveForm.controls.name.value),m(2),d("p-value",a.reactiveForm.controls.address.value),m(),d("p-value",a.reactiveForm.controls.number.value),m(2),d("p-value",a.reactiveForm.controls.email.value),m(),d("p-value",a.reactiveForm.controls.website.value),m(2),L("ngModel",a.theme),d("p-options",a.themeOptions),m(),L("ngModel",a.a11yLevel),d("p-options",a.a11yLevelOptions))},dependencies:[K,H,Q,J,X,Y,te,ne,me,de,pe,se,ce,ie,ue],encapsulation:2})}return r})();var Ce=r=>({"docs-sample-code-tabs":r}),be=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-theme-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,a){o&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Theme Labs"),n(),t(4,"a",2),E("click",function(){return a.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-theme-labs/sample-po-theme-labs.component.html"),n(),t(13,"pre",7),e(14,`<po-widget p-title="Example">
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
`),n()()()()(),t(21,"div",10),i(22,"sample-po-theme-labs"),n(),i(23,"hr")),o&2&&(m(5),O("po-icon "+a.sampleCodeButtonIcon),m(),z(" ",a.sampleCodeButtonLabel,""),m(),d("ngClass",W(4,Ce,a.hideSampleCodeTabs)))},dependencies:[U,Ee,P,D,ve],encapsulation:2})}return r})();var ge=(()=>{class r{static \u0275fac=function(o){return new(o||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-theme-doc"]],standalone:!1,decls:1153,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","guides/theme-service"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-method-table"],[1,"docs-api-properties-row"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-property-description"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-name-cell"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type"],["pan","",1,"docs-api-property-type","'small'"],["pan","",1,"docs-api-property-type","'medium'"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoThemeColorAction"],[1,"language-javascript"],["pan","",1,"docs-api-property-type","poThemeColorBrand"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","PoThemeColorCategorical"],["pan","",1,"docs-api-property-type","PoThemeColorNeutral"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","{","'70'?:","string;","'80'?:","string;","'90'?:","string;","'95'?:","string;","}"],["pan","",1,"docs-api-property-type","{","'00'?:","string;","'05'?:","string;","'10'?:","string;","'20'?:","string;","'30'?:","string;","}"],["pan","",1,"docs-api-property-type","{","'40'?:","string;","'60'?:","string;","}"],["pan","",1,"docs-api-property-type","PoThemeColor"],["pan","",1,"docs-api-property-type","DynamicProperties"],["pan","",1,"docs-api-property-type","PoThemeTypeEnum"],["pan","",1,"docs-api-property-type","PoThemeActive"],["pan","",1,"docs-api-property-type","PoThemeType"],["pan","",1,"docs-api-property-type","Array<PoThemeType>"]],template:function(o,a){o&1&&(t(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoThemeModule } from '@po-ui/ng-components';"),n()(),t(4,"div",2)(5,"p"),e(6,"M\xF3dulo respons\xE1vel por fornecer servi\xE7os relacionados ao tema PO."),n()(),t(7,"h3",3),e(8,"Services"),n(),t(9,"h4",4)(10,"code",5),e(11,"PoThemeService"),n()(),t(12,"div",2)(13,"p"),e(14,"O "),t(15,"code"),e(16,"PoThemeService"),n(),e(17," possibilita a personaliza\xE7\xE3o das cores do tema padr\xE3o do "),t(18,"code"),e(19,"PO-UI"),n(),e(20,", permitindo a altera\xE7\xE3o dos valores das vari\xE1veis de estilo usadas no CSS padr\xE3o."),n(),t(21,"blockquote")(22,"p"),e(23,"Para saber mais sobre como customizar o tema padr\xE3o verifique o item "),t(24,"a",6),e(25,"Customiza\xE7\xE3o de Temas usando o servi\xE7o PO-UI"),n(),e(26," na aba "),t(27,"code"),e(28,"Guias"),n(),e(29,"."),n()(),t(30,"blockquote")(31,"p"),e(32,"Obs.: N\xE3o est\xE1 documentado aqui e n\xE3o indicamos a customiza\xE7\xE3o das cores de 'feedback' por motivos de acessibilidade e usabilidade."),n()()(),t(33,"h3",7),e(34,"M\xE9todos"),n(),t(35,"table",8)(36,"tr",9)(37,"th",10)(38,"div",11)(39,"h4")(40,"span",12),e(41," setTheme "),n()()()()(),t(42,"tr",13)(43,"td",13)(44,"p"),e(45,"Aplica um tema ao componente de acordo com o tipo de tema e o n\xEDvel de acessibilidade especificados."),n(),t(46,"p"),e(47,"Este m\xE9todo configura o tema do componente com base no objeto "),t(48,"code"),e(49,"themeConfig"),n(),e(50," fornecido, no "),t(51,"code"),e(52,"themeType"),n(),e(53," e no "),t(54,"code"),e(55,"a11yLevel"),n(),e(56,`.
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
O valor padr\xE3o \xE9 `),t(261,"code"),e(262,"medium"),n(),e(263,"."),n()()()(),i(264,"br"),t(265,"table",8)(266,"tr",9)(267,"th",10)(268,"div",11)(269,"h4")(270,"span",12),e(271," persistThemeActive "),n()()()()(),t(272,"tr",13)(273,"td",13)(274,"p"),e(275,"Persiste e aplica as prefer\xEAncias visuais do usu\xE1rio para o tema da aplica\xE7\xE3o."),n(),t(276,"p"),e(277,"Este m\xE9todo recupera o tema armazenado no localStorage e o aplica \xE0 aplica\xE7\xE3o, incluindo:"),n(),t(278,"ul")(279,"li"),e(280,"Tema ativo (cores, tipo e acessibilidade)"),n(),t(281,"li"),e(282,"Tamanho padr\xE3o dos campos de formul\xE1rio ("),t(283,"code"),e(284,"small"),n(),e(285," ou "),t(286,"code"),e(287,"medium"),n(),e(288,")"),n(),t(289,"li"),e(290,"Modo de densidade visual dos componentes agrupadores ("),t(291,"code"),e(292,"small"),n(),e(293," ou "),t(294,"code"),e(295,"medium"),n(),e(296,")"),n()(),t(297,"p"),e(298,`Tamb\xE9m garante que as prefer\xEAncias de tamanho e densidade sejam salvas no localStorage,
permitindo que a experi\xEAncia visual do usu\xE1rio seja restaurada em recarregamentos futuros.`),n()()()(),t(299,"h5")(300,"b"),e(301,"Retorno"),n()(),t(302,"table",14)(303,"tr",15)(304,"th",16),e(305,"Tipo"),n(),t(306,"th",16),e(307,"Descri\xE7\xE3o"),n()(),t(308,"tr",9)(309,"td",18)(310,"code",19),e(311,"PoTheme"),n()(),t(312,"td",13)(313,"p"),e(314,"O tema atualmente aplicado."),n()()()(),i(315,"br"),t(316,"table",8)(317,"tr",9)(318,"th",10)(319,"div",11)(320,"h4")(321,"span",12),e(322," changeCurrentThemeType "),n()()()()(),t(323,"tr",13)(324,"td",13)(325,"p"),e(326,"Altera o tipo do tema armazenado e aplica os novos estilos ao documento."),n(),t(327,"p"),e(328,"Este m\xE9todo altera o tipo do tema armazenado ativo (light/dark)"),n()()()(),t(329,"h5")(330,"b"),e(331,"Par\xE2metros"),n()(),t(332,"table",14)(333,"tr",15)(334,"th",16),e(335,"Nome"),n(),t(336,"th",16),e(337,"Tipo"),n(),t(338,"th",16),e(339,"Descri\xE7\xE3o"),n()(),t(340,"tr",9)(341,"td",17),e(342," themeType"),n(),t(343,"td",18)(344,"code",19),e(345," PoThemeTypeEnum "),n()(),t(346,"td",13)(347,"p"),e(348,"O tipo de tema a ser aplicado, light ou dark."),n()()()(),i(349,"br"),t(350,"table",8)(351,"tr",9)(352,"th",10)(353,"div",11)(354,"h4")(355,"span",12),e(356," cleanThemeActive "),n()()()()(),t(357,"tr",13)(358,"td",13)(359,"p"),e(360,`M\xE9todo remove o tema armazenado e limpa todos os estilos de tema
aplicados ao documento.`),n()()()(),t(361,"h5")(362,"b"),e(363,"Par\xE2metros"),n()(),t(364,"table",14)(365,"tr",15)(366,"th",16),e(367,"Nome"),n(),t(368,"th",16),e(369,"Tipo"),n(),t(370,"th",16),e(371,"Descri\xE7\xE3o"),n()(),t(372,"tr",9)(373,"td",17),e(374," persistPreference"),n(),t(375,"td",18)(376,"code",19),e(377," boolean "),n()(),t(378,"td",13)(379,"p"),e(380,"(Opcional) Define se a prefer\xEAncia de tema n\xE3o deve ser mantida no localStorage para persist\xEAncia. "),t(381,"code"),e(382,"true"),n(),e(383," para remover, "),t(384,"code"),e(385,"false"),n(),e(386," para manter."),n()()()(),i(387,"br"),t(388,"table",8)(389,"tr",9)(390,"th",10)(391,"div",11)(392,"h4")(393,"span",12),e(394," getThemeActive "),n()()()()(),t(395,"tr",13)(396,"td",13)(397,"p"),e(398,"Retorna o tema ativo como um observable. Este m\xE9todo funcionar\xE1 apenas se o tema estiver armazenado no "),t(399,"code"),e(400,"localStorage"),n(),e(401,"."),n()()()(),t(402,"h5")(403,"b"),e(404,"Retorno"),n()(),t(405,"table",14)(406,"tr",15)(407,"th",16),e(408,"Tipo"),n(),t(409,"th",16),e(410,"Descri\xE7\xE3o"),n()(),t(411,"tr",9)(412,"td",18)(413,"code",19),e(414,"PoTheme"),n()(),t(415,"td",13)(416,"p"),e(417,"Tema ativo."),n()()()(),i(418,"br"),t(419,"table",8)(420,"tr",9)(421,"th",10)(422,"div",11)(423,"h4")(424,"span",12),e(425," setDefaultTheme "),n()()()()(),t(426,"tr",13)(427,"td",13)(428,"p"),e(429,'Define o tema atual como o tema "PoUI Padr\xE3o".'),n()()()(),t(430,"h5")(431,"b"),e(432,"Par\xE2metros"),n()(),t(433,"table",14)(434,"tr",15)(435,"th",16),e(436,"Nome"),n(),t(437,"th",16),e(438,"Tipo"),n(),t(439,"th",16),e(440,"Descri\xE7\xE3o"),n()(),t(441,"tr",9)(442,"td",17),e(443," type"),n(),t(444,"td",18)(445,"code",19),e(446," PoThemeTypeEnum "),n()(),t(447,"td",13)(448,"p"),e(449,"O tipo de Tema a ser aplicado, light / dark."),n()()()(),i(450,"br"),t(451,"table",8)(452,"tr",9)(453,"th",10)(454,"div",11)(455,"h4")(456,"span",12),e(457," setThemeType "),n()()()()(),t(458,"tr",13)(459,"td",13)(460,"p"),e(461,"Define o tipo (light/dark) quando um tema est\xE1 sendo aplicado."),n()()()(),t(462,"h5")(463,"b"),e(464,"Par\xE2metros"),n()(),t(465,"table",14)(466,"tr",15)(467,"th",16),e(468,"Nome"),n(),t(469,"th",16),e(470,"Tipo"),n(),t(471,"th",16),e(472,"Descri\xE7\xE3o"),n()(),t(473,"tr",9)(474,"td",17),e(475," theme"),n(),t(476,"td",18)(477,"code",19),e(478," PoTheme "),n()(),t(479,"td",13)(480,"p"),e(481,"Objeto contendo as defini\xE7\xF5es de tema a serem aplicadas no componente."),n()()(),t(482,"tr",9)(483,"td",17),e(484," themeType"),n(),t(485,"td",18)(486,"code",19),e(487," PoThemeTypeEnum "),n()(),t(488,"td",13)(489,"p"),e(490,"(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padr\xE3o, o tema claro \xE9 aplicado."),n()()()(),i(491,"br"),t(492,"table",8)(493,"tr",9)(494,"th",10)(495,"div",11)(496,"h4")(497,"span",12),e(498," setCurrentThemeType "),n()()()()(),t(499,"tr",13)(500,"td",13)(501,"p"),e(502,"Define o tipo (light/dark) para um tema j\xE1 ativo."),n()()()(),t(503,"h5")(504,"b"),e(505,"Par\xE2metros"),n()(),t(506,"table",14)(507,"tr",15)(508,"th",16),e(509,"Nome"),n(),t(510,"th",16),e(511,"Tipo"),n(),t(512,"th",16),e(513,"Descri\xE7\xE3o"),n()(),t(514,"tr",9)(515,"td",17),e(516," themeType"),n(),t(517,"td",18)(518,"code",19),e(519," PoThemeTypeEnum "),n()(),t(520,"td",13)(521,"p"),e(522,"(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padr\xE3o, o tema claro \xE9 aplicado."),n()()()(),i(523,"br"),t(524,"table",8)(525,"tr",9)(526,"th",10)(527,"div",11)(528,"h4")(529,"span",12),e(530," setThemeA11y "),n()()()()(),t(531,"tr",13)(532,"td",13)(533,"p"),e(534,"Define o n\xEDvel de acessibilidade quando um tema est\xE1 sendo aplicado."),n()()()(),t(535,"h5")(536,"b"),e(537,"Par\xE2metros"),n()(),t(538,"table",14)(539,"tr",15)(540,"th",16),e(541,"Nome"),n(),t(542,"th",16),e(543,"Tipo"),n(),t(544,"th",16),e(545,"Descri\xE7\xE3o"),n()(),t(546,"tr",9)(547,"td",17),e(548," theme"),n(),t(549,"td",18)(550,"code",19),e(551," PoTheme "),n()(),t(552,"td",13)(553,"p"),e(554,"Objeto contendo as defini\xE7\xF5es de tema a serem aplicadas no componente."),n()()(),t(555,"tr",9)(556,"td",17),e(557," a11y"),n(),t(558,"td",18)(559,"code",19),e(560," PoThemeA11yEnum "),n()(),t(561,"td",13)(562,"p"),e(563,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),n()()()(),i(564,"br"),t(565,"table",8)(566,"tr",9)(567,"th",10)(568,"div",11)(569,"h4")(570,"span",12),e(571," setCurrentThemeA11y "),n()()()()(),t(572,"tr",13)(573,"td",13)(574,"p"),e(575,"Define o n\xEDvel de acessibilidade para um tema j\xE1 ativo."),n()()()(),t(576,"h5")(577,"b"),e(578,"Par\xE2metros"),n()(),t(579,"table",14)(580,"tr",15)(581,"th",16),e(582,"Nome"),n(),t(583,"th",16),e(584,"Tipo"),n(),t(585,"th",16),e(586,"Descri\xE7\xE3o"),n()(),t(587,"tr",9)(588,"td",17),e(589," a11y"),n(),t(590,"td",18)(591,"code",19),e(592," PoThemeA11yEnum "),n()(),t(593,"td",13)(594,"p"),e(595,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),n()()()(),i(596,"br"),t(597,"h3"),e(598,"Interfaces"),n(),t(599,"h4",22)(600,"code",5),e(601,"PoThemeColor"),n()(),t(602,"div",2)(603,"p"),e(604,"Interface para representar as cores do tema."),n()(),t(605,"h4",7),e(606,"Propriedades"),n(),t(607,"table",14)(608,"tr",15)(609,"th",16),e(610,"Nome"),n(),t(611,"th",16),e(612,"Tipo"),n(),t(613,"th",16),e(614,"Descri\xE7\xE3o"),n()(),t(615,"tr",9)(616,"td",17)(617,"div",11)(618,"span",12),e(619," action"),i(620,"br"),n()()(),t(621,"td",18)(622,"code",23),e(623,"PoThemeColorAction"),n()(),t(624,"td",13)(625,"em")(626,"strong"),e(627,"(opcional)"),n()(),t(628,"p"),e(629,"Cores da Action a serem aplicadas."),n(),t(630,"p"),e(631,"Exemplo de uso:"),n(),t(632,"pre")(633,"code",24),e(634,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
 hover: 'var(--color-brand-01-dark)',
 pressed: 'var(--color-brand-01-darker)',
 disabled: 'var(--color-neutral-light-30)',
 focus: 'var(--color-brand-01-darkest)'
}
`),n()()()(),t(635,"tr",9)(636,"td",17)(637,"div",11)(638,"span",12),e(639," brand"),i(640,"br"),n()()(),t(641,"td",18)(642,"code",25),e(643,"poThemeColorBrand"),n()(),t(644,"td",13)(645,"em")(646,"strong"),e(647,"(opcional)"),n()(),t(648,"p"),e(649,"Cores da Brand a serem aplicadas."),n(),t(650,"p"),e(651,"Exemplo de uso:"),n(),t(652,"pre")(653,"code",26),e(654,`PoThemeColor.brand = {
 01: PoThemeColorTone,
 02: PoThemeColorTone,
 03: PoThemeColorTone
}
`),n()()()(),t(655,"tr",9)(656,"td",17)(657,"div",11)(658,"span",12),e(659," categorical"),i(660,"br"),n()()(),t(661,"td",18)(662,"code",27),e(663,"PoThemeColorCategorical"),n()(),t(664,"td",13)(665,"em")(666,"strong"),e(667,"(opcional)"),n()(),t(668,"p"),e(669,"Cores da Categorical a serem aplicadas."),n(),t(670,"p"),e(671,"Exemplo de uso:"),n(),t(672,"pre")(673,"code",26),e(674,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),n()()()(),t(675,"tr",9)(676,"td",17)(677,"div",11)(678,"span",12),e(679," categorical-overlay"),i(680,"br"),n()()(),t(681,"td",18)(682,"code",27),e(683,"PoThemeColorCategorical"),n()(),t(684,"td",13)(685,"em")(686,"strong"),e(687,"(opcional)"),n()(),t(688,"p"),e(689,"Cores da Categorical a serem aplicadas."),n(),t(690,"p"),e(691,"Exemplo de uso:"),n(),t(692,"pre")(693,"code",26),e(694,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),n()()()(),t(695,"tr",9)(696,"td",17)(697,"div",11)(698,"span",12),e(699," neutral"),i(700,"br"),n()()(),t(701,"td",18)(702,"code",28),e(703,"PoThemeColorNeutral"),n()(),t(704,"td",13)(705,"em")(706,"strong"),e(707,"(opcional)"),n()(),t(708,"p"),e(709,"Cores Neutrals a serem aplicadas."),n(),t(710,"p"),e(711,"Exemplo de uso:"),n(),t(712,"pre")(713,"code",26),e(714,`PoThemeColor.neutral = {
 light: { '00': string, '05': string, '10': string, '20': string, '30': string },
 mid: { '40': string, '60': string },
 dark: { '70': string, '80': string, '90': string, '95': string },
}
`),n()()()()(),t(715,"h4",22)(716,"code",5),e(717,"PoThemeColorAction"),n()(),t(718,"div",2)(719,"p"),e(720,"Interface para as cores de a\xE7\xE3o do tema."),n()(),t(721,"h4",7),e(722,"Propriedades"),n(),t(723,"table",14)(724,"tr",15)(725,"th",16),e(726,"Nome"),n(),t(727,"th",16),e(728,"Tipo"),n(),t(729,"th",16),e(730,"Descri\xE7\xE3o"),n()(),t(731,"tr",9)(732,"td",17)(733,"div",11)(734,"span",12),e(735," default"),i(736,"br"),n()()(),t(737,"td",18)(738,"code",29),e(739,"string"),n()(),t(740,"td",13)(741,"em")(742,"strong"),e(743,"(opcional)"),n()(),t(744,"p"),e(745,"Cores da Action 'Default'."),n(),t(746,"p"),e(747,"Exemplo de uso:"),n(),t(748,"pre")(749,"code",26),e(750,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
}
`),n()()()(),t(751,"tr",9)(752,"td",17)(753,"div",11)(754,"span",12),e(755," disabled"),i(756,"br"),n()()(),t(757,"td",18)(758,"code",29),e(759,"string"),n()(),t(760,"td",13)(761,"em")(762,"strong"),e(763,"(opcional)"),n()(),t(764,"p"),e(765,"Cores da Action de 'disabled'."),n(),t(766,"p"),e(767,"Exemplo de uso:"),n(),t(768,"pre")(769,"code",26),e(770,`PoThemeColor.action = {
 disabled: 'var(--color-neutral-light-30)',
}
`),n()()()(),t(771,"tr",9)(772,"td",17)(773,"div",11)(774,"span",12),e(775," focus"),i(776,"br"),n()()(),t(777,"td",18)(778,"code",29),e(779,"string"),n()(),t(780,"td",13)(781,"em")(782,"strong"),e(783,"(opcional)"),n()(),t(784,"p"),e(785,"Cores da Action para 'focus'."),n(),t(786,"p"),e(787,"Exemplo de uso:"),n(),t(788,"pre")(789,"code",26),e(790,`PoThemeColor.action = {
 focus: 'var(--color-brand-01-darkest)'
}
`),n()()()(),t(791,"tr",9)(792,"td",17)(793,"div",11)(794,"span",12),e(795," hover"),i(796,"br"),n()()(),t(797,"td",18)(798,"code",29),e(799,"string"),n()(),t(800,"td",13)(801,"em")(802,"strong"),e(803,"(opcional)"),n()(),t(804,"p"),e(805,"Cores da Action para 'hover'."),n(),t(806,"p"),e(807,"Exemplo de uso:"),n(),t(808,"pre")(809,"code",26),e(810,`PoThemeColor.action = {
 hover: 'var(--color-brand-01-dark)',
}
`),n()()()(),t(811,"tr",9)(812,"td",17)(813,"div",11)(814,"span",12),e(815," pressed"),i(816,"br"),n()()(),t(817,"td",18)(818,"code",29),e(819,"string"),n()(),t(820,"td",13)(821,"em")(822,"strong"),e(823,"(opcional)"),n()(),t(824,"p"),e(825,"Cores da Action para 'pressed'."),n(),t(826,"p"),e(827,"Exemplo de uso:"),n(),t(828,"pre")(829,"code",26),e(830,`PoThemeColor.action = {
 pressed: 'var(--color-brand-01-darker)',
}
`),n()()()()(),t(831,"h4",22)(832,"code",5),e(833,"PoThemeColorNeutral"),n()(),t(834,"div",2)(835,"p"),e(836,"Interface para as cores neutras do tema."),n()(),t(837,"h4",7),e(838,"Propriedades"),n(),t(839,"table",14)(840,"tr",15)(841,"th",16),e(842,"Nome"),n(),t(843,"th",16),e(844,"Tipo"),n(),t(845,"th",16),e(846,"Descri\xE7\xE3o"),n()(),t(847,"tr",9)(848,"td",17)(849,"div",11)(850,"span",12),e(851," dark"),i(852,"br"),n()()(),t(853,"td",18)(854,"code",30),e(855,`{ '70'?: string; '80'?: string; '90'?: string; '95'?: string;
}`),n()(),t(856,"td",13)(857,"em")(858,"strong"),e(859,"(opcional)"),n()(),t(860,"p"),e(861,"Cores Neutrals do tipo 'dark'."),n(),t(862,"p"),e(863,"Exemplo de uso:"),n(),t(864,"pre")(865,"code",26),e(866,`PoThemeColor.neutral.dark = {
 '70': '#4a5c60',
 '80': '#2c3739',
 '90': '#1d2426',
 '95': '#0b0e0e',
}
`),n()()()(),t(867,"tr",9)(868,"td",17)(869,"div",11)(870,"span",12),e(871," light"),i(872,"br"),n()()(),t(873,"td",18)(874,"code",31),e(875,`{ '00'?: string; '05'?: string; '10'?: string; '20'?: string; '30'?: string;
}`),n()(),t(876,"td",13)(877,"em")(878,"strong"),e(879,"(opcional)"),n()(),t(880,"p"),e(881,"Cores Neutrals do tipo 'light'."),n(),t(882,"p"),e(883,"Exemplo de uso:"),n(),t(884,"pre")(885,"code",26),e(886,`PoThemeColor.neutral.light = {
 '00': '#ffffff',
 '05': '#fbfbfb',
 '10': '#eceeee',
 '20': '#dadedf',
 '30': '#b6bdbf'
}
`),n()()()(),t(887,"tr",9)(888,"td",17)(889,"div",11)(890,"span",12),e(891," mid"),i(892,"br"),n()()(),t(893,"td",18)(894,"code",32),e(895,`{ '40'?: string; '60'?: string;
}`),n()(),t(896,"td",13)(897,"em")(898,"strong"),e(899,"(opcional)"),n()(),t(900,"p"),e(901,"Cores Neutrals do tipo 'mid'."),n(),t(902,"p"),e(903,"Exemplo de uso:"),n(),t(904,"pre")(905,"code",26),e(906,`PoThemeColor.neutral.mid = {
 '40': '#9da7a9',
 '60': '#6e7c7f',
}
`),n()()()()(),t(907,"h4",22)(908,"code",5),e(909,"PoThemeTokens"),n()(),t(910,"div",2)(911,"p"),e(912,"Interface para o tema da aplica\xE7\xE3o."),n()(),t(913,"h4",22)(914,"code",5),e(915,"PoThemeToken"),n()(),t(916,"div",2)(917,"p"),e(918,"Interface para os tokens do Tema."),n()(),t(919,"h4",7),e(920,"Propriedades"),n(),t(921,"table",14)(922,"tr",15)(923,"th",16),e(924,"Nome"),n(),t(925,"th",16),e(926,"Tipo"),n(),t(927,"th",16),e(928,"Descri\xE7\xE3o"),n()(),t(929,"tr",9)(930,"td",17)(931,"div",11)(932,"span",12),e(933," color"),i(934,"br"),n()()(),t(935,"td",18)(936,"code",33),e(937,"PoThemeColor"),n()(),t(938,"td",13)(939,"em")(940,"strong"),e(941,"(opcional)"),n()(),t(942,"p"),e(943,"Tokens do tipo 'color'"),n()()(),t(944,"tr",9)(945,"td",17)(946,"div",11)(947,"span",12),e(948," onRoot"),i(949,"br"),n()()(),t(950,"td",18)(951,"code",34),e(952,"DynamicProperties"),n()(),t(953,"td",13)(954,"em")(955,"strong"),e(956,"(opcional)"),n()(),t(957,"p"),e(958,`Tokens do tipo 'onRoot'
Esta propriedade adicionar\xE1 todos os tokens passados e adicionado direto no `),t(959,"code"),e(960,":root"),n()(),t(961,"p"),e(962,"Exemplo de uso:"),n(),t(963,"pre")(964,"code",26),e(965,`onRoot: {
  '--color-page-background-color-page': '#121212',
  '--color-toolbar-color-badge-text': 'var(--color-neutral-dark-95)',
},
`),n()()()(),t(966,"tr",9)(967,"td",17)(968,"div",11)(969,"span",12),e(970," perComponent"),i(971,"br"),n()()(),t(972,"td",18)(973,"code",34),e(974,"DynamicProperties"),n()(),t(975,"td",13)(976,"em")(977,"strong"),e(978,"(opcional)"),n()(),t(979,"p"),e(980,"Tokens do tipo 'perComponent'"),n(),t(981,"p"),e(982,"Exemplo de uso:"),n(),t(983,"pre")(984,"code",26),e(985,`perComponent: {
  'po-badge': {
    '--color': 'var(--color-neutral-dark-95)',
  },
  'po-container': {
    '--background': '#121212',
  },
},
`),n()()()()(),t(986,"h4",22)(987,"code",5),e(988,"PoTheme"),n()(),t(989,"div",2)(990,"p"),e(991,"Interface para o m\xE9todo "),t(992,"code"),e(993,"setTheme()"),n(),e(994,"."),n()(),t(995,"h4",7),e(996,"Propriedades"),n(),t(997,"table",14)(998,"tr",15)(999,"th",16),e(1e3,"Nome"),n(),t(1001,"th",16),e(1002,"Tipo"),n(),t(1003,"th",16),e(1004,"Descri\xE7\xE3o"),n()(),t(1005,"tr",9)(1006,"td",17)(1007,"div",11)(1008,"span",12),e(1009," active"),i(1010,"br"),n()()(),t(1011,"td",18)(1012,"code",35),e(1013,"PoThemeTypeEnum "),n(),t(1014,"code",36),e(1015," PoThemeActive"),n()(),t(1016,"td",13)(1017,"em")(1018,"strong"),e(1019,"(opcional)"),n()(),t(1020,"p"),e(1021,"Tipo e n\xEDvel de acessibilidade de tema ativo"),n()()(),t(1022,"tr",9)(1023,"td",17)(1024,"div",11)(1025,"span",12),e(1026," name"),i(1027,"br"),n()()(),t(1028,"td",18)(1029,"code",29),e(1030,"string"),n()(),t(1031,"td",13)(1032,"p"),e(1033,`Nome para o tema:
Ex.: default, totvs, sunset...`),n()()(),t(1034,"tr",9)(1035,"td",17)(1036,"div",11)(1037,"span",12),e(1038," type"),i(1039,"br"),n()()(),t(1040,"td",18)(1041,"code",37),e(1042,"PoThemeType "),n(),t(1043,"code",38),e(1044," Array<PoThemeType>"),n()(),t(1045,"td",13)(1046,"p"),e(1047,"Tipo de tema:"),n(),t(1048,"ul")(1049,"li"),e(1050,"light"),n(),t(1051,"li"),e(1052,"dark"),n()()()()(),t(1053,"h3"),e(1054,"Enums"),n(),t(1055,"h4",4)(1056,"code",5),e(1057,"PoThemeA11yEnum"),n()(),t(1058,"div",2)(1059,"p"),e(1060,"Enum para configurar o n\xEDvel de acessibilidade dos componentes atrav\xE9s do servi\xE7o de tema."),n(),t(1061,"pre")(1062,"code"),e(1063,`import { PoThemeA11yEnum } from '@po-ui/theme';

// Definindo o n\xEDvel de acessibilidade ao configurar as cores e o tipo do tema (light | dark)
themeService.setTheme(...theme, ...type, PoThemeA11yEnum.AA);

// Definindo o n\xEDvel de acessibilidade ao configurar apenas as cores do tema
themeService.setThemeA11y(...theme, PoThemeA11yEnum.AAA);

// Alterando o n\xEDvel de acessibilidade com as cores do tema j\xE1 definidas
themeService.setCurrentThemeA11y(PoThemeA11yEnum.AAA);
`),n()()(),t(1064,"h4",7),e(1065,"Propriedades"),n(),t(1066,"table",14)(1067,"tr",15)(1068,"th",16),e(1069,"Nome"),n(),t(1070,"th",16),e(1071,"Descri\xE7\xE3o"),n()(),t(1072,"tr",9)(1073,"td",17)(1074,"div",11)(1075,"span",12),e(1076," AA"),i(1077,"br"),n()()(),t(1078,"td",13)(1079,"p"),e(1080,"N\xEDvel de acessibilidade AA."),n(),t(1081,"ul")(1082,"li"),e(1083,"Define a espessura do "),t(1084,"code"),e(1085,"outline"),n(),e(1086," para "),t(1087,"strong"),e(1088,"2px"),n(),e(1089,"."),n(),t(1090,"li"),e(1091,"Disponibiliza o tamanho "),t(1092,"code"),e(1093,"small"),n(),e(1094,` para componentes de formul\xE1rio (buttons, inputs, checkboxes, radios e switches)
conforme suas documenta\xE7\xF5es.`),n()()()(),t(1095,"tr",9)(1096,"td",17)(1097,"div",11)(1098,"span",12),e(1099," AAA"),i(1100,"br"),n()()(),t(1101,"td",13)(1102,"p"),e(1103,"N\xEDvel de acessibilidade AAA."),n(),t(1104,"ul")(1105,"li"),e(1106,"Define a espessura do "),t(1107,"code"),e(1108,"outline"),n(),e(1109," para "),t(1110,"strong"),e(1111,"4px"),n(),e(1112,"."),n(),t(1113,"li"),e(1114,"N\xE3o disponibiliza o tamanho "),t(1115,"code"),e(1116,"small"),n(),e(1117," para componentes de formul\xE1rio."),n()()()()(),t(1118,"h4",4)(1119,"code",5),e(1120,"PoThemeTypeEnum"),n()(),t(1121,"div",2)(1122,"p"),e(1123,"Enum utilizado para configurar o tipo de tema suportado, \xE9 poss\xEDvel alternar entre os tipos definidos."),n(),t(1124,"pre")(1125,"code"),e(1126,`import { PoThemeTypeEnum } from '@po-ui/theme';

// Definindo o tipo de tema como claro
themeService.setTheme(...theme, PoThemeTypeEnum.light);

// Definindo o tipo de tema como escuro
themeService.setTheme(...theme, PoThemeTypeEnum.dark);

// Alterando o tipo do tema para um tema j\xE1 aplicado
themeService.setCurrentThemeType(PoThemeTypeEnum.dark);
`),n()()(),t(1127,"h4",7),e(1128,"Propriedades"),n(),t(1129,"table",14)(1130,"tr",15)(1131,"th",16),e(1132,"Nome"),n(),t(1133,"th",16),e(1134,"Descri\xE7\xE3o"),n()(),t(1135,"tr",9)(1136,"td",17)(1137,"div",11)(1138,"span",12),e(1139," light"),i(1140,"br"),n()()(),t(1141,"td",13)(1142,"p"),e(1143,"Define o tema como claro."),n()()(),t(1144,"tr",9)(1145,"td",17)(1146,"div",11)(1147,"span",12),e(1148," dark"),i(1149,"br"),n()()(),t(1150,"td",13)(1151,"p"),e(1152,"Define o tema como escuro."),n()()()()())},encapsulation:2})}return r})();var fe=(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=1;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,o){this.route=l,this.router=o}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let o=l.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(o){return new(o||r)(v($),v(ee))};static \u0275cmp=S({type:r,selectors:[["ng-component"]],standalone:!1,decls:6,vars:4,consts:[["p-title","Theme",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,a){o&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),E("p-click",function(){return a.changeTab("doc")}),i(3,"sample-po-theme-doc"),n(),t(4,"po-tab",3),E("p-click",function(){return a.changeTab("web")}),i(5,"sample-po-theme-labs-view"),n()()()),o&2&&(d("p-actions",a.actions),m(2),d("p-active",a.activeTab==="doc"),m(2),d("p-hide",a.hidePoWebSample)("p-active",a.activeTab==="web"))},dependencies:[he,P,D,be,ge],encapsulation:2})}return r})();var Le=[{path:"",component:fe}],Te=(()=>{class r{static \u0275fac=function(o){return new(o||r)};static \u0275mod=y({type:r});static \u0275inj=A({imports:[F.forChild(Le),F]})}return r})();var Xe=(()=>{class r{static \u0275fac=function(o){return new(o||r)};static \u0275mod=y({type:r});static \u0275inj=A({imports:[Se,Te]})}return r})();export{Xe as DocPoThemeModule};
