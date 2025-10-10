import{o as y,p as _e}from"./chunk-VHIWABDT.js";import{Ab as _,Eb as Z,Fa as B,Ma as he,O as ce,Pa as M,Q as Ee,Qa as xe,Sa as ve,Ta as Y,U as be,Xa as X,a as me,c as ue,nb as fe,ra as Se,sa as ge,v as O,vb as Ce,xb as we,zb as w}from"./chunk-RH5KSUEM.js";import{$a as U,Aa as E,Ca as te,Cb as C,Da as P,Dc as V,Ec as z,Fc as R,Gc as A,Ha as K,Hc as j,Kc as le,La as n,Lc as re,Ma as t,N as I,Na as o,Oc as pe,Q,Qb as ae,Ra as T,Sa as b,Ta as H,U as m,Uc as de,V as u,Wc as se,Yc as ee,_a as D,ab as k,bb as L,cb as e,eb as F,gb as S,hb as g,ib as h,ja as s,ka as $,kb as ne,lb as f,qa as x,ra as G,rb as ie,sb as oe,wa as J}from"./chunk-KZJHT32G.js";var ye=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-upload-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","upload","p-label","PO Upload","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile"]],template:function(r,i){r&1&&o(0,"po-upload",0)},dependencies:[M],encapsulation:2})}return l})();var Be=l=>({"docs-sample-code-tabs":l}),Pe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-upload-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Upload Basic"),t(),n(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-upload-basic/sample-po-upload-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-upload name="upload" p-label="PO Upload" p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"> </po-upload>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-upload-basic/sample-po-upload-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-upload-basic',
  templateUrl: 'sample-po-upload-basic.component.html',
  standalone: false
})
export class SamplePoUploadBasicComponent {}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-upload-basic"),t(),o(23,"hr")),r&2&&(s(5),P("po-icon "+i.sampleCodeButtonIcon),s(),F(" ",i.sampleCodeButtonLabel,""),s(),E("ngClass",f(4,Be,i.hideSampleCodeTabs)))},dependencies:[C,y,w,_,ye],encapsulation:2})}return l})();function He(l,je){if(l&1&&(n(0,"div")(1,"po-widget",21)(2,"form",22),o(3,"po-input",23)(4,"po-select",24)(5,"po-select",25)(6,"po-switch",26)(7,"po-switch",27),t()()()),l&2){let p=H();s(2),E("formGroup",p.actionForm),s(2),E("p-options",p.iconOptions),s(),E("p-options",p.typeOptions)}}var Me=(()=>{class l{fb=Q(pe);additionalHelpTooltip;allowedExtensions;customLiterals;dragDropHeight;event;formField;help;label;literals;maxFiles;maxSize;minSize;properties;restrictions;upload;url;headers;headersLabs;action;actionForm;size;propertiesOptions=[{value:"autoupload",label:"Automatic upload"},{value:"directory",label:"Directory"},{value:"disabled",label:"Disabled"},{value:"disabledRemoveFile",label:"Disabled Remove File"},{value:"dragDrop",label:"Drag Drop"},{value:"requiredUrl",label:"required Url"},{value:"multiple",label:"Multiple upload"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"restrictionsInfo",label:"Hide Restrictions Info"},{value:"selectButton",label:"Hide Select Files Button"},{value:"sendButton",label:"Hide Send Files Button"},{value:"showCustomAction",label:"Add Custom Action to Progress"},{value:"labelTextWrap",label:"Label Text Wrap"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];iconOptions=[{value:"an an-download",label:"an an-download"},{value:"an an-Server",label:"an an-Server"},{value:"an an-upload",label:"an an-upload"},{value:"an an-share",label:"an an-share"}];constructor(){this.initializeActionForm()}initializeActionForm(){this.actionForm=this.fb.group({label:[""],icon:[""],type:["default"],visible:[!0],disabled:[!1]})}ngOnInit(){this.restore(),this.actionForm.valueChanges.subscribe(p=>{this.updateAction(p)})}updateAction(p){this.action=p}changeEvent(p){this.event=p}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}onChangeHeaders(p){try{this.headers=JSON.parse(p)}catch{this.headers=void 0}}onChangeExtension(){let p=this.allowedExtensions.split(",").map(r=>r.trim());this.restrictions=Object.assign({},this.restrictions,{allowedExtensions:p})}onChangeMaxFiles(p){this.restrictions=Object.assign({},this.restrictions,{maxFiles:p})}onChangeMaxSize(p){this.restrictions=Object.assign({},this.restrictions,{maxFileSize:this.getValueInBytes(p)})}onChangeMinSize(p){this.restrictions=Object.assign({},this.restrictions,{minFileSize:this.getValueInBytes(p)})}restore(){this.additionalHelpTooltip="",this.allowedExtensions=void 0,this.customLiterals=void 0,this.dragDropHeight=void 0,this.event=void 0,this.formField=void 0,this.label=void 0,this.help=void 0,this.literals="",this.maxFiles=void 0,this.maxSize=void 0,this.minSize=void 0,this.properties=[],this.restrictions={},this.upload=void 0,this.url="https://po-sample-api.onrender.com/v1/uploads/addFile",this.headers=void 0,this.headersLabs=void 0,this.actionForm.reset({type:"default",visible:!0}),this.action={label:"",type:"default"},this.size="medium"}getValueInBytes(p){return 1048576*p}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-upload-labs"]],standalone:!1,decls:28,vars:47,consts:[["fRestrictions","ngForm"],["name","upload",3,"ngModelChange","p-custom-action-click","p-error","p-keydown","p-success","p-upload","ngModel","p-additional-help-tooltip","p-auto-upload","p-directory","p-disabled","p-required-url","p-disabled-remove-file","p-drag-drop","p-drag-drop-height","p-form-field","p-help","p-hide-select-button","p-hide-restrictions-info","p-hide-send-button","p-label","p-literals","p-multiple","p-optional","p-required","p-show-required","p-restrictions","p-size","p-url","p-headers","p-custom-action","p-label-text-wrap"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","allowedExtensions","p-help","Digite as extens\xF5es permitidas separadas por v\xEDrgula","p-label","Allowed Extensions","p-placeholder",".png, .jpeg, .jpg",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","maxFiles","p-clean","","p-help","Requer p-multiple habilitado","p-label","Max Files",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","dragDropHeight","p-clean","","p-help","Altura da \xE1rea de arrastar e soltar","p-label","Drag Drop Height","p-min","160",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","minSize","p-clean","","p-help","Em megabytes","p-label","Min File Size",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","maxSize","p-clean","","p-help","Em megabytes","p-label","Max File Size",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","formField","p-clean","","p-label","Form Field",1,"po-md-6",3,"ngModelChange","ngModel"],["name","url","p-clean","","p-label","URL","p-required","",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","headers","p-help",'Ex.: {"Authorization": "12312414"}',"p-label","Headers",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","literals","p-help",'Ex.: {"selectFile": "Select file", "deleteFile": "Delete file", "cancel": "Cancel sending"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","properties","p-columns","4","p-help","Select any options","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],[1,"po-row","po-mt-1"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"],["p-title","Action Button"],[1,"po-row",3,"formGroup"],["formControlName","label","p-label","Label",1,"po-md-6","po-lg-4"],["formControlName","icon","p-label","Icon",1,"po-md-6","po-lg-3",3,"p-options"],["formControlName","type","p-label","Type",1,"po-md-6","po-lg-3",3,"p-options"],["formControlName","disabled","p-label","Disabled",1,"po-md-3","po-lg-2"],["formControlName","visible","p-label","Visible",1,"po-md-3","po-lg-2"]],template:function(r,i){if(r&1){let d=T();n(0,"po-upload",1),h("ngModelChange",function(a){return m(d),g(i.upload,a)||(i.upload=a),u(a)}),b("p-custom-action-click",function(){return m(d),u(i.changeEvent("p-custom-action-click"))})("p-error",function(){return m(d),u(i.changeEvent("p-error"))})("p-keydown",function(){return m(d),u(i.changeEvent("p-keydown"))})("p-success",function(){return m(d),u(i.changeEvent("p-success"))})("p-upload",function(){return m(d),u(i.changeEvent("p-upload"))}),t(),o(1,"po-divider"),n(2,"div",2),o(3,"po-info",3),ie(4,"json"),o(5,"po-info",4),t(),o(6,"po-divider"),n(7,"div",2)(8,"form",null,0)(10,"po-input",5),h("ngModelChange",function(a){return m(d),g(i.allowedExtensions,a)||(i.allowedExtensions=a),u(a)}),b("p-change",function(){return m(d),u(i.onChangeExtension())}),t(),n(11,"po-number",6),h("ngModelChange",function(a){return m(d),g(i.maxFiles,a)||(i.maxFiles=a),u(a)}),b("p-change",function(){return m(d),u(i.onChangeMaxFiles(i.maxFiles))}),t(),n(12,"po-number",7),h("ngModelChange",function(a){return m(d),g(i.dragDropHeight,a)||(i.dragDropHeight=a),u(a)}),t(),n(13,"po-number",8),h("ngModelChange",function(a){return m(d),g(i.minSize,a)||(i.minSize=a),u(a)}),b("p-change",function(){return m(d),u(i.onChangeMinSize(i.minSize))}),t(),n(14,"po-number",9),h("ngModelChange",function(a){return m(d),g(i.maxSize,a)||(i.maxSize=a),u(a)}),b("p-change",function(){return m(d),u(i.onChangeMaxSize(i.maxSize))}),t(),o(15,"po-divider"),n(16,"po-input",10),h("ngModelChange",function(a){return m(d),g(i.label,a)||(i.label=a),u(a)}),t(),n(17,"po-input",11),h("ngModelChange",function(a){return m(d),g(i.help,a)||(i.help=a),u(a)}),t(),n(18,"po-input",12),h("ngModelChange",function(a){return m(d),g(i.additionalHelpTooltip,a)||(i.additionalHelpTooltip=a),u(a)}),t(),n(19,"po-input",13),h("ngModelChange",function(a){return m(d),g(i.formField,a)||(i.formField=a),u(a)}),t(),n(20,"po-input",14),h("ngModelChange",function(a){return m(d),g(i.url,a)||(i.url=a),u(a)}),t(),n(21,"po-input",15),h("ngModelChange",function(a){return m(d),g(i.headersLabs,a)||(i.headersLabs=a),u(a)}),b("p-change",function(a){return m(d),u(i.onChangeHeaders(a))}),t(),n(22,"po-input",16),h("ngModelChange",function(a){return m(d),g(i.literals,a)||(i.literals=a),u(a)}),b("p-change",function(){return m(d),u(i.changeLiterals())}),t(),n(23,"po-checkbox-group",17),h("ngModelChange",function(a){return m(d),g(i.properties,a)||(i.properties=a),u(a)}),t(),J(24,He,8,3,"div"),n(25,"po-radio-group",18),h("ngModelChange",function(a){return m(d),g(i.size,a)||(i.size=a),u(a)}),t(),n(26,"div",19)(27,"po-button",20),b("p-click",function(){return m(d),u(i.restore())}),t()()()()}r&2&&(S("ngModel",i.upload),E("p-additional-help-tooltip",i.additionalHelpTooltip)("p-auto-upload",i.properties.includes("autoupload"))("p-directory",i.properties.includes("directory"))("p-disabled",i.properties.includes("disabled"))("p-required-url",i.properties.includes("requiredUrl"))("p-disabled-remove-file",i.properties.includes("disabledRemoveFile"))("p-drag-drop",i.properties.includes("dragDrop"))("p-drag-drop-height",i.dragDropHeight)("p-form-field",i.formField)("p-help",i.help)("p-hide-select-button",i.properties.includes("selectButton"))("p-hide-restrictions-info",i.properties.includes("restrictionsInfo"))("p-hide-send-button",i.properties.includes("sendButton"))("p-label",i.label)("p-literals",i.customLiterals)("p-multiple",i.properties.includes("multiple"))("p-optional",i.properties.includes("optional"))("p-required",i.properties.includes("required"))("p-show-required",i.properties.includes("showRequired"))("p-restrictions",i.restrictions)("p-size",i.size)("p-url",i.url)("p-headers",i.headers)("p-custom-action",i.action)("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap")),s(3),E("p-value",oe(4,45,i.upload)),s(2),E("p-value",i.event),s(5),S("ngModel",i.allowedExtensions),s(),S("ngModel",i.maxFiles),s(),S("ngModel",i.dragDropHeight),s(),S("ngModel",i.minSize),s(),S("ngModel",i.maxSize),s(2),S("ngModel",i.label),s(),S("ngModel",i.help),s(),S("ngModel",i.additionalHelpTooltip),s(),S("ngModel",i.formField),s(),S("ngModel",i.url),s(),S("ngModel",i.headersLabs),s(),S("ngModel",i.literals),s(),S("ngModel",i.properties),E("p-options",i.propertiesOptions),s(),K(i.properties.includes("showCustomAction")?24:-1),s(),S("ngModel",i.size),E("p-options",i.sizeOptions))},dependencies:[j,V,z,A,R,le,re,O,me,ce,Ee,B,he,ve,M,Se,X,Z,ae],encapsulation:2})}return l})();var Ie=l=>({"docs-sample-code-tabs":l}),qe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-upload-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Upload Labs"),t(),n(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-upload-labs/sample-po-upload-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-upload
  name="upload"
  [(ngModel)]="upload"
  [p-additional-help-tooltip]="additionalHelpTooltip"
  [p-auto-upload]="properties.includes('autoupload')"
  [p-directory]="properties.includes('directory')"
  [p-disabled]="properties.includes('disabled')"
  [p-required-url]="properties.includes('requiredUrl')"
  [p-disabled-remove-file]="properties.includes('disabledRemoveFile')"
  [p-drag-drop]="properties.includes('dragDrop')"
  [p-drag-drop-height]="dragDropHeight"
  [p-form-field]="formField"
  [p-help]="help"
  [p-hide-select-button]="properties.includes('selectButton')"
  [p-hide-restrictions-info]="properties.includes('restrictionsInfo')"
  [p-hide-send-button]="properties.includes('sendButton')"
  [p-label]="label"
  [p-literals]="customLiterals"
  [p-multiple]="properties.includes('multiple')"
  [p-optional]="properties.includes('optional')"
  [p-required]="properties.includes('required')"
  [p-show-required]="properties.includes('showRequired')"
  [p-restrictions]="restrictions"
  [p-size]="size"
  [p-url]="url"
  [p-headers]="headers"
  [p-custom-action]="action"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  (p-custom-action-click)="changeEvent('p-custom-action-click')"
  (p-error)="changeEvent('p-error')"
  (p-keydown)="changeEvent('p-keydown')"
  (p-success)="changeEvent('p-success')"
  (p-upload)="changeEvent('p-upload')"
>
</po-upload>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="upload | json"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<div class="po-row">
  <form #fRestrictions="ngForm">
    <po-input
      class="po-md-6"
      name="allowedExtensions"
      [(ngModel)]="allowedExtensions"
      p-help="Digite as extens\xF5es permitidas separadas por v\xEDrgula"
      p-label="Allowed Extensions"
      p-placeholder=".png, .jpeg, .jpg"
      (p-change)="onChangeExtension()"
    >
    </po-input>

    <po-number
      class="po-md-6 po-lg-3"
      name="maxFiles"
      [(ngModel)]="maxFiles"
      p-clean
      p-help="Requer p-multiple habilitado"
      p-label="Max Files"
      (p-change)="onChangeMaxFiles(maxFiles)"
    >
    </po-number>

    <po-number
      class="po-md-6 po-lg-3"
      name="dragDropHeight"
      [(ngModel)]="dragDropHeight"
      p-clean
      p-help="Altura da \xE1rea de arrastar e soltar"
      p-label="Drag Drop Height"
      p-min="160"
    >
    </po-number>

    <po-number
      class="po-md-6 po-lg-3"
      name="minSize"
      [(ngModel)]="minSize"
      p-clean
      p-help="Em megabytes"
      p-label="Min File Size"
      (p-change)="onChangeMinSize(minSize)"
    >
    </po-number>

    <po-number
      class="po-md-6 po-lg-3"
      name="maxSize"
      [(ngModel)]="maxSize"
      p-clean
      p-help="Em megabytes"
      p-label="Max File Size"
      (p-change)="onChangeMaxSize(maxSize)"
    >
    </po-number>

    <po-divider />

    <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

    <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

    <po-input
      class="po-md-6"
      name="additionalHelpTooltip"
      [(ngModel)]="additionalHelpTooltip"
      p-clean
      p-label="Additional Help"
    >
    </po-input>

    <po-input class="po-md-6" name="formField" [(ngModel)]="formField" p-clean p-label="Form Field"> </po-input>

    <po-input class="po-md-12 po-lg-6" name="url" [(ngModel)]="url" p-clean p-label="URL" p-required> </po-input>

    <po-input
      class="po-md-12 po-lg-6"
      name="headers"
      [(ngModel)]="headersLabs"
      p-help='Ex.: {"Authorization": "12312414"}'
      p-label="Headers"
      (p-change)="onChangeHeaders($event)"
    >
    </po-input>

    <po-input
      class="po-md-12 po-lg-6"
      name="literals"
      [(ngModel)]="literals"
      p-help='Ex.: {"selectFile": "Select file", "deleteFile": "Delete file", "cancel": "Cancel sending"}'
      p-label="Literals"
      (p-change)="changeLiterals()"
    >
    </po-input>

    <po-checkbox-group
      class="po-md-12"
      name="properties"
      [(ngModel)]="properties"
      p-columns="4"
      p-help="Select any options"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>

    @if (properties.includes('showCustomAction')) {
      <div>
        <po-widget p-title="Action Button">
          <form [formGroup]="actionForm" class="po-row">
            <po-input class="po-md-6 po-lg-4" formControlName="label" p-label="Label" />
            <po-select class="po-md-6 po-lg-3" formControlName="icon" p-label="Icon" [p-options]="iconOptions" />
            <po-select class="po-md-6 po-lg-3" formControlName="type" p-label="Type" [p-options]="typeOptions" />
            <po-switch class="po-md-3 po-lg-2" formControlName="disabled" p-label="Disabled" />
            <po-switch class="po-md-3 po-lg-2" formControlName="visible" p-label="Visible" />
          </form>
        </po-widget>
      </div>
    }

    <po-radio-group
      class="po-md-12"
      name="size"
      [(ngModel)]="size"
      p-columns="4"
      p-label="Size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="sizeOptions"
    >
    </po-radio-group>

    <div class="po-row po-mt-1">
      <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
    </div>
  </form>
</div>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-upload-labs/sample-po-upload-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import {
  PoCheckboxGroupOption,
  PoProgressAction,
  PoSelectOption,
  PoRadioGroupOption,
  PoUploadFileRestrictions,
  PoUploadLiterals
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-labs',
  templateUrl: './sample-po-upload-labs.component.html',
  standalone: false
})
export class SamplePoUploadLabsComponent implements OnInit {
  private fb = inject(FormBuilder);

  additionalHelpTooltip: string;
  allowedExtensions: string;
  customLiterals: PoUploadLiterals;
  dragDropHeight: number;
  event: string;
  formField: string;
  help: string;
  label: string;
  literals: string;
  maxFiles: number;
  maxSize: number;
  minSize: number;
  properties: Array<string>;
  restrictions: PoUploadFileRestrictions;
  upload: Array<any>;
  url: string;
  headers: { [name: string]: string | Array<string> };
  headersLabs: string;
  action: PoProgressAction;
  actionForm: FormGroup;
  size: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'autoupload', label: 'Automatic upload' },
    { value: 'directory', label: 'Directory' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'disabledRemoveFile', label: 'Disabled Remove File' },
    { value: 'dragDrop', label: 'Drag Drop' },
    { value: 'requiredUrl', label: 'required Url' },
    { value: 'multiple', label: 'Multiple upload' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'restrictionsInfo', label: 'Hide Restrictions Info' },
    { value: 'selectButton', label: 'Hide Select Files Button' },
    { value: 'sendButton', label: 'Hide Send Files Button' },
    { value: 'showCustomAction', label: 'Add Custom Action to Progress' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Danger', value: 'danger' },
    { label: 'Default', value: 'default' }
  ];

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-download', label: 'an an-download' },
    { value: 'an an-Server', label: 'an an-Server' },
    { value: 'an an-upload', label: 'an an-upload' },
    { value: 'an an-share', label: 'an an-share' }
  ];

  constructor() {
    this.initializeActionForm();
  }

  initializeActionForm() {
    this.actionForm = this.fb.group({
      label: [''],
      icon: [''],
      type: ['default'],
      visible: [true],
      disabled: [false]
    });
  }

  ngOnInit() {
    this.restore();
    this.actionForm.valueChanges.subscribe(formValue => {
      this.updateAction(formValue);
    });
  }

  updateAction(formValue: any) {
    this.action = formValue;
  }

  changeEvent(event: string) {
    this.event = event;
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  onChangeHeaders(headers) {
    try {
      this.headers = JSON.parse(headers);
    } catch {
      this.headers = undefined;
    }
  }
  onChangeExtension() {
    const allowedExtensions = this.allowedExtensions.split(',').map(allowedExtension => allowedExtension.trim());
    this.restrictions = Object.assign({}, this.restrictions, { allowedExtensions });
  }

  onChangeMaxFiles(maxFiles: number) {
    this.restrictions = Object.assign({}, this.restrictions, { maxFiles });
  }

  onChangeMaxSize(maxSize: number) {
    this.restrictions = Object.assign({}, this.restrictions, { maxFileSize: this.getValueInBytes(maxSize) });
  }

  onChangeMinSize(minSize: number) {
    this.restrictions = Object.assign({}, this.restrictions, { minFileSize: this.getValueInBytes(minSize) });
  }

  restore() {
    this.additionalHelpTooltip = '';
    this.allowedExtensions = undefined;
    this.customLiterals = undefined;
    this.dragDropHeight = undefined;
    this.event = undefined;
    this.formField = undefined;
    this.label = undefined;
    this.help = undefined;
    this.literals = '';
    this.maxFiles = undefined;
    this.maxSize = undefined;
    this.minSize = undefined;
    this.properties = [];
    this.restrictions = {};
    this.upload = undefined;
    this.url = 'https://po-sample-api.onrender.com/v1/uploads/addFile';
    this.headers = undefined;
    this.headersLabs = undefined;
    this.actionForm.reset({ type: 'default', visible: true });
    this.action = { label: '', type: 'default' };
    this.size = 'medium';
  }

  private getValueInBytes(value: number) {
    return 1048576 * value;
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-upload-labs"),t(),o(23,"hr")),r&2&&(s(5),P("po-icon "+i.sampleCodeButtonIcon),s(),F(" ",i.sampleCodeButtonLabel,""),s(),E("ngClass",f(4,Ie,i.hideSampleCodeTabs)))},dependencies:[C,y,w,_,Me],encapsulation:2})}return l})();var Ge=["formOpportunity"],Je=()=>({maxFileSize:"204800"}),Te=(()=>{class l{poNotification=Q(ge);formOpportunity;biograph;linkedin;name;resume;uploadedResume;ngOnInit(){this.uploadedResume=!1}apply(){this.formOpportunity.reset(),this.uploadedResume=!1,this.poNotification.success("You were applied successfully")}resumeUploadError(){this.uploadedResume=!1}resumeUploadSuccess(){this.uploadedResume=!0}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-upload-resume"]],viewQuery:function(r,i){if(r&1&&D(Ge,7),r&2){let d;U(d=k())&&(i.formOpportunity=d.first)}},standalone:!1,decls:12,vars:7,consts:[["formOpportunity","ngForm"],[1,"po-row"],["name","name","p-clean","","p-label","Full Name","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"],["name","biograph","p-label","Biograph","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"],["name","linkedin","p-clean","","p-label","LinkedIn URL",1,"po-md-12",3,"ngModelChange","ngModel"],["name","resume","p-label","Resume","p-required","","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",1,"po-md-12",3,"ngModelChange","p-error","p-success","ngModel","p-restrictions"],["p-label","Apply",1,"po-md-4",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let d=T();n(0,"form",null,0)(2,"div",1)(3,"po-input",2),h("ngModelChange",function(a){return m(d),g(i.name,a)||(i.name=a),u(a)}),t()(),n(4,"div",1)(5,"po-textarea",3),h("ngModelChange",function(a){return m(d),g(i.biograph,a)||(i.biograph=a),u(a)}),t()(),n(6,"div",1)(7,"po-url",4),h("ngModelChange",function(a){return m(d),g(i.linkedin,a)||(i.linkedin=a),u(a)}),t()(),n(8,"div",1)(9,"po-upload",5),h("ngModelChange",function(a){return m(d),g(i.resume,a)||(i.resume=a),u(a)}),b("p-error",function(){return m(d),u(i.resumeUploadError())})("p-success",function(){return m(d),u(i.resumeUploadSuccess())}),t()(),n(10,"div",1)(11,"po-button",6),b("p-click",function(){return m(d),u(i.apply())}),t()()()}if(r&2){let d=L(1);s(3),S("ngModel",i.name),s(2),S("ngModel",i.biograph),s(2),S("ngModel",i.linkedin),s(2),S("ngModel",i.resume),E("p-restrictions",ne(6,Je)),s(2),E("p-disabled",d.invalid||!i.uploadedResume)}},dependencies:[j,V,z,A,R,O,B,Y,M,xe],encapsulation:2})}return l})();var Ye=l=>({"docs-sample-code-tabs":l}),De=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-upload-resume-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Upload - Resume"),t(),n(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-upload-resume/sample-po-upload-resume.component.html"),t(),n(13,"pre",7),e(14,`<form #formOpportunity="ngForm">
  <div class="po-row">
    <po-input class="po-md-12" name="name" [(ngModel)]="name" p-clean p-label="Full Name" p-required> </po-input>
  </div>

  <div class="po-row">
    <po-textarea class="po-md-12" name="biograph" [(ngModel)]="biograph" p-label="Biograph" p-required> </po-textarea>
  </div>

  <div class="po-row">
    <po-url class="po-md-12" name="linkedin" [(ngModel)]="linkedin" p-clean p-label="LinkedIn URL"> </po-url>
  </div>

  <div class="po-row">
    <po-upload
      class="po-md-12"
      name="resume"
      [(ngModel)]="resume"
      p-label="Resume"
      p-required
      p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
      [p-restrictions]="{ maxFileSize: '204800' }"
      (p-error)="resumeUploadError()"
      (p-success)="resumeUploadSuccess()"
    >
    </po-upload>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-4"
      p-label="Apply"
      [p-disabled]="formOpportunity.invalid || !uploadedResume"
      (p-click)="apply()"
    >
    </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-upload-resume/sample-po-upload-resume.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-resume',
  templateUrl: 'sample-po-upload-resume.component.html',
  standalone: false
})
export class SamplePoUploadResumeComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  @ViewChild('formOpportunity', { static: true }) formOpportunity: UntypedFormControl;

  biograph: string;
  linkedin: string;
  name: string;
  resume: string;
  uploadedResume: boolean;

  ngOnInit() {
    this.uploadedResume = false;
  }

  apply() {
    this.formOpportunity.reset();
    this.uploadedResume = false;

    this.poNotification.success('You were applied successfully');
  }

  resumeUploadError() {
    this.uploadedResume = false;
  }

  resumeUploadSuccess() {
    this.uploadedResume = true;
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-upload-resume"),t(),o(23,"hr")),r&2&&(s(5),P("po-icon "+i.sampleCodeButtonIcon),s(),F(" ",i.sampleCodeButtonLabel,""),s(),E("ngClass",f(4,Ye,i.hideSampleCodeTabs)))},dependencies:[C,y,w,_,Te],encapsulation:2})}return l})();var Ze=["upload"],$e=["stepper"],et=["submitForm"],tt=["sucessData"],nt=l=>({"po-invisible":l});function it(l,je){if(l&1){let p=T();n(0,"div",8)(1,"div",9)(2,"p",11),e(3,"Confirm informations"),t()(),o(4,"po-info",28)(5,"po-info",29)(6,"po-info",30),n(7,"po-button",31),b("p-click",function(){m(p);let i=H();return u(i.confirmSubmit())}),t()()}if(l&2){let p=H();s(4),E("p-value",p.project[0].name||"N/D"),s(),E("p-value",p.title||"N/D"),s(),E("p-value",p.description||"N/D")}}var Ue=(()=>{class l{upload;stepper;submitForm;sucessData;confirm={action:()=>{this.sucessData.close()},label:"Return"};description;project=[];restrictions={allowedExtensions:[".zip",".7z",".tar",".wim"]};title;ngOnInit(){this.newSubmit()}canSubmitProject(){return!!(this.project&&this.project.length)&&this.title&&this.description}confirmSubmit(){this.sucessData.open(),this.newSubmit(),this.stepper.first()}submitProject(){this.upload.sendFiles(),this.stepper.next()}newSubmit(){this.project=[],this.title=void 0,this.description=void 0}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-upload-rs"]],viewQuery:function(r,i){if(r&1&&(D(Ze,7),D($e,7),D(et,7),D(tt,7)),r&2){let d;U(d=k())&&(i.upload=d.first),U(d=k())&&(i.stepper=d.first),U(d=k())&&(i.submitForm=d.first),U(d=k())&&(i.sucessData=d.first)}},standalone:!1,decls:47,vars:15,consts:[["stepper",""],["submitForm","ngForm"],["upload",""],["sucessData",""],[1,"po-row"],["p-orientation","vertical","p-step-icons","","p-step-size","42",1,"po-lg-10","po-offset-lg-2","po-offset-xl-2"],["p-label","Welcome"],["p-title","Realize & Show",1,"po-lg-8","po-mt-2"],[1,"tht-row"],[1,"po-sm-12"],[1,"po-font-title"],[1,"po-font-text-large"],["p-label","Yes!","p-kind","primary",1,"po-sm-12","po-mt-2",3,"p-click"],["p-label","Submit",3,"p-can-active-next-step"],[1,"po-lg-10"],[1,"po-font-subtitle"],[1,"po-font-text-small-bold"],[1,"po-font-title","po-lg-2"],["p-icon","an an-cloud-arrow-up",1,"po-clickable",3,"click"],["p-icon","an an-fill an-x-circle",1,"po-clickable",3,"click","ngClass"],[1,"po-sm-12","po-mt-3","po-font-text-bold"],["name","project","p-hide-select-button","","p-hide-send-button","","p-required","","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",1,"po-sm-12",3,"ngModelChange","ngModel","p-restrictions"],["name","title","p-label","Title","p-placeholder","Be creative","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],["name","description","p-label","Description","p-maxlength","140","p-placeholder","Resume on few words","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],["p-label","Done",1,"po-sm-12","po-mt-2",3,"p-click","p-disabled"],["p-label","Confirm"],["p-title","Confirmation",3,"p-primary-action"],[1,"po-sm-12","po-font-title"],["p-label","File name",1,"po-md-4",3,"p-value"],["p-label","Title",1,"po-md-4",3,"p-value"],["p-label","Description",1,"po-md-4",3,"p-value"],["p-label","Confirm",1,"po-sm-12","po-mt-2","po-mb-2",3,"p-click"]],template:function(r,i){if(r&1){let d=T();n(0,"div",4)(1,"po-stepper",5,0)(3,"po-step",6)(4,"po-widget",7)(5,"div",8)(6,"div",9)(7,"h1",10),e(8,"Welcome, TOTVS!"),t(),n(9,"p",11),e(10,"Let's submit your project?"),t()()(),n(11,"div",8)(12,"po-button",12),b("p-click",function(){m(d);let a=L(2);return u(a.next())}),t()()()(),n(13,"po-step",13)(14,"po-widget",7)(15,"form",null,1)(17,"div",4)(18,"div",14)(19,"div",4)(20,"p",15),e(21,"Please, select your project:"),t()(),n(22,"div",4)(23,"p",16),e(24,"*Upload a zip file containing your project."),t()()(),n(25,"div",17)(26,"po-icon",18),b("click",function(){m(d);let a=L(32);return u(a.selectFiles())}),t(),n(27,"po-icon",19),b("click",function(){m(d);let a=L(32);return u(a.clear())}),t()()(),n(28,"div",4)(29,"label",20),e(30,"Attached"),t(),n(31,"po-upload",21,2),h("ngModelChange",function(a){return m(d),g(i.project,a)||(i.project=a),u(a)}),t()(),n(33,"div",4)(34,"po-input",22),h("ngModelChange",function(a){return m(d),g(i.title,a)||(i.title=a),u(a)}),t()(),n(35,"div",4)(36,"po-textarea",23),h("ngModelChange",function(a){return m(d),g(i.description,a)||(i.description=a),u(a)}),t()(),n(37,"div",8)(38,"po-button",24),b("p-click",function(){return m(d),u(i.submitProject())}),t()()()()(),n(39,"po-step",25)(40,"po-widget",7),J(41,it,8,3,"div",8),t()()()(),n(42,"po-modal",26,3)(44,"div",4)(45,"p",27),e(46,"Project successfully submited!"),t()()()}r&2&&(s(13),E("p-can-active-next-step",i.canSubmitProject.bind(i)),s(14),E("ngClass",f(13,nt,i.project.length<1)),s(2),te("po-invisible",i.project.length<1),s(2),S("ngModel",i.project),E("p-restrictions",i.restrictions),s(3),S("ngModel",i.title),E("p-disabled",i.project.length<1),s(2),S("ngModel",i.description),E("p-disabled",i.project.length<1),s(2),E("p-disabled",i.canSubmitProject()),s(3),K(i.canSubmitProject()?41:-1),s(),E("p-primary-action",i.confirm))},dependencies:[C,j,V,z,A,R,O,B,Y,M,ue,X,be,Ce,we,Z],encapsulation:2})}return l})();var at=l=>({"docs-sample-code-tabs":l}),ke=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-upload-rs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Upload - Realize & Show"),t(),n(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-upload-rs/sample-po-upload-rs.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
  <po-stepper
    #stepper
    class="po-lg-10 po-offset-lg-2 po-offset-xl-2"
    p-orientation="vertical"
    p-step-icons
    p-step-size="42"
  >
    <po-step p-label="Welcome">
      <po-widget class="po-lg-8 po-mt-2" p-title="Realize & Show">
        <div class="tht-row">
          <div class="po-sm-12">
            <h1 class="po-font-title">Welcome, TOTVS!</h1>
            <p class="po-font-text-large">Let's submit your project?</p>
          </div>
        </div>

        <div class="tht-row">
          <po-button class="po-sm-12 po-mt-2" p-label="Yes!" p-kind="primary" (p-click)="stepper.next()"> </po-button>
        </div>
      </po-widget>
    </po-step>

    <po-step p-label="Submit" [p-can-active-next-step]="canSubmitProject.bind(this)">
      <po-widget class="po-lg-8 po-mt-2" p-title="Realize & Show">
        <form #submitForm="ngForm">
          <div class="po-row">
            <div class="po-lg-10">
              <div class="po-row">
                <p class="po-font-subtitle">Please, select your project:</p>
              </div>

              <div class="po-row">
                <p class="po-font-text-small-bold">*Upload a zip file containing your project.</p>
              </div>
            </div>

            <div class="po-font-title po-lg-2">
              <po-icon p-icon="an an-cloud-arrow-up" class="po-clickable" (click)="upload.selectFiles()"></po-icon>
              <po-icon
                p-icon="an an-fill an-x-circle"
                class="po-clickable"
                [ngClass]="{ 'po-invisible': project.length < 1 }"
                (click)="upload.clear()"
              ></po-icon>
            </div>
          </div>

          <div class="po-row">
            <label class="po-sm-12 po-mt-3 po-font-text-bold" [class.po-invisible]="project.length < 1">Attached</label>
            <po-upload
              #upload
              class="po-sm-12"
              name="project"
              [(ngModel)]="project"
              p-hide-select-button
              p-hide-send-button
              p-required
              p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
              [p-restrictions]="restrictions"
            >
            </po-upload>
          </div>

          <div class="po-row">
            <po-input
              class="po-sm-12"
              name="title"
              [(ngModel)]="title"
              p-label="Title"
              p-placeholder="Be creative"
              p-required
              [p-disabled]="project.length < 1"
            >
            </po-input>
          </div>

          <div class="po-row">
            <po-textarea
              class="po-sm-12"
              name="description"
              [(ngModel)]="description"
              p-label="Description"
              p-maxlength="140"
              p-placeholder="Resume on few words"
              p-required
              [p-disabled]="project.length < 1"
            >
            </po-textarea>
          </div>

          <div class="tht-row">
            <po-button
              class="po-sm-12 po-mt-2"
              p-label="Done"
              [p-disabled]="canSubmitProject()"
              (p-click)="submitProject()"
            >
            </po-button>
          </div>
        </form>
      </po-widget>
    </po-step>

    <po-step p-label="Confirm">
      <po-widget class="po-lg-8 po-mt-2" p-title="Realize & Show">
        @if (canSubmitProject()) {
          <div class="tht-row">
            <div class="po-sm-12">
              <p class="po-font-text-large">Confirm informations</p>
            </div>
            <po-info class="po-md-4" p-label="File name" [p-value]="project[0].name || 'N/D'"> </po-info>
            <po-info class="po-md-4" p-label="Title" [p-value]="title || 'N/D'"> </po-info>
            <po-info class="po-md-4" p-label="Description" [p-value]="description || 'N/D'"> </po-info>
            <po-button class="po-sm-12 po-mt-2 po-mb-2" p-label="Confirm" (p-click)="confirmSubmit()"> </po-button>
          </div>
        }
      </po-widget>
    </po-step>
  </po-stepper>
</div>

<po-modal #sucessData p-title="Confirmation" [p-primary-action]="confirm">
  <div class="po-row">
    <p class="po-sm-12 po-font-title">Project successfully submited!</p>
  </div>
</po-modal>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-upload-rs/sample-po-upload-rs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoModalAction, PoModalComponent, PoStepperComponent, PoUploadComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-rs',
  templateUrl: 'sample-po-upload-rs.component.html',
  standalone: false
})
export class SamplePoUploadRsComponent implements OnInit {
  @ViewChild('upload', { static: true }) upload: PoUploadComponent;
  @ViewChild('stepper', { static: true }) stepper: PoStepperComponent;
  @ViewChild('submitForm', { static: true }) submitForm: NgForm;
  @ViewChild('sucessData', { static: true }) sucessData: PoModalComponent;

  confirm: PoModalAction = {
    action: () => {
      this.sucessData.close();
    },
    label: 'Return'
  };

  description: string;
  project: Array<any> = [];
  restrictions = { allowedExtensions: ['.zip', '.7z', '.tar', '.wim'] };
  title: string;

  ngOnInit() {
    this.newSubmit();
  }

  canSubmitProject() {
    return !!(this.project && this.project.length) && this.title && this.description;
  }

  confirmSubmit() {
    this.sucessData.open();
    this.newSubmit();
    this.stepper.first();
  }

  submitProject() {
    this.upload.sendFiles();
    this.stepper.next();
  }

  private newSubmit() {
    this.project = [];
    this.title = undefined;
    this.description = undefined;
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-upload-rs"),t(),o(23,"hr")),r&2&&(s(5),P("po-icon "+i.sampleCodeButtonIcon),s(),F(" ",i.sampleCodeButtonLabel,""),s(),E("ngClass",f(4,at,i.hideSampleCodeTabs)))},dependencies:[C,y,w,_,Ue],encapsulation:2})}return l})();var Le=(()=>{class l{customAction={icon:"an an-download",type:"default",visible:!1};uploadSuccess(){this.customAction.visible=!0}onCustomActionClick(p){if(!p.rawFile){console.error("Arquivo inv\xE1lido ou n\xE3o encontrado.");return}this.downloadFile(p.rawFile)}downloadFile(p){let r=URL.createObjectURL(p),i=document.createElement("a");i.href=r,i.download=p.name,i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(r)}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-upload-download"]],standalone:!1,decls:1,vars:2,consts:[["name","upload","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",3,"p-custom-action-click","p-success","p-custom-action","p-multiple"]],template:function(r,i){r&1&&(n(0,"po-upload",0),b("p-custom-action-click",function(c){return i.onCustomActionClick(c)})("p-success",function(){return i.uploadSuccess()}),t()),r&2&&E("p-custom-action",i.customAction)("p-multiple",!0)},dependencies:[M],encapsulation:2})}return l})();var pt=l=>({"docs-sample-code-tabs":l}),Ve=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-upload-download-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Upload - with Download Button"),t(),n(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-upload-download/sample-po-upload-download.component.html"),t(),n(13,"pre",7),e(14,`<po-upload
  name="upload"
  p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
  [p-custom-action]="customAction"
  (p-custom-action-click)="onCustomActionClick($event)"
  [p-multiple]="true"
  (p-success)="uploadSuccess()"
></po-upload>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-upload-download/sample-po-upload-download.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';
import { PoProgressAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-download',
  templateUrl: 'sample-po-upload-download.component.html',
  standalone: false
})
export class SamplePoUploadDownloadComponent {
  customAction: PoProgressAction = {
    icon: 'an an-download',
    type: 'default',
    visible: false
  };

  uploadSuccess() {
    this.customAction.visible = true;
  }

  onCustomActionClick(file: { rawFile: File }) {
    if (!file.rawFile) {
      console.error('Arquivo inv\xE1lido ou n\xE3o encontrado.');
      return;
    }

    this.downloadFile(file.rawFile);
  }

  downloadFile(rawFile: File) {
    // Cria uma URL tempor\xE1ria para o arquivo
    const url = URL.createObjectURL(rawFile);

    // Cria um link <a> tempor\xE1rio para iniciar o download
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = rawFile.name; // Define o nome do arquivo para o download
    anchor.style.display = 'none';

    // Adiciona o link ao DOM, aciona o clique e remove o link
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

    // Libera a mem\xF3ria utilizada pela URL tempor\xE1ria
    URL.revokeObjectURL(url);
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-upload-download"),t(),o(23,"hr")),r&2&&(s(5),P("po-icon "+i.sampleCodeButtonIcon),s(),F(" ",i.sampleCodeButtonLabel,""),s(),E("ngClass",f(4,pt,i.hideSampleCodeTabs)))},dependencies:[C,y,w,_,Le],encapsulation:2})}return l})();var ze=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-upload-doc"]],standalone:!1,decls:1682,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-html"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoUploadComponent"),t()(),n(21,"div",2)(22,"p"),e(23,"O componente "),n(24,"code"),e(25,"po-upload"),t(),e(26,` permite que o usu\xE1rio envie arquivo(s) ao servidor e acompanhe o progresso.
Este componente tamb\xE9m possibilita algumas configura\xE7\xF5es como: \u2013 Envio de diret\xF3rios, onde ele acessa o diret\xF3rio selecionado assim como seus sub-diret\xF3rios;`),t(),n(27,"ul")(28,"li"),e(29,"M\xFAltipla sele\xE7\xE3o, onde o usu\xE1rio pode enviar mais de um arquivo ao servidor."),t(),n(30,"li"),e(31,`Auto envio, onde o arquivo \xE9 enviado imediatamente ap\xF3s a sele\xE7\xE3o do usu\xE1rio, n\xE3o necessitando que o usu\xE1rio
clique em enviar.`),t(),n(32,"li"),e(33,"Restri\xE7\xF5es de formatos de arquivo e tamanho."),t(),n(34,"li"),e(35,"Fun\xE7\xE3o de sucesso que ser\xE1 disparada quando os arquivos forem enviados com sucesso."),t(),n(36,"li"),e(37,"Fun\xE7\xE3o de erro que ser\xE1 disparada quando houver erro no envio dos arquivos."),t(),n(38,"li"),e(39,"Permite habilitar uma \xE1rea onde os arquivos podem ser arrastados."),t()()(),n(40,"div",6)(41,"h4",7),e(42,"Seletor"),t(),n(43,"pre",8),e(44,`<po-upload
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-auto-upload="boolean"
    p-custom-action="PoProgressAction"
    (p-custom-action-click)="EventEmitter"
    p-directory="boolean"
    p-disabled="boolean"
    p-disabled-remove-file="boolean"
    p-drag-drop="boolean"
    p-drag-drop-height="number"
    p-restrictions="PoUploadFileRestrictions"
    p-form-field="string"
    p-headers="{
    [name: string]: string | Array<string>;
}"
    p-help="string"
    p-hide-restrictions-info="boolean"
    p-hide-select-button="boolean"
    p-hide-send-button="boolean"
    p-multiple="boolean"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-literals="PoUploadLiterals"
    name="string"
    (ng-model-change)="EventEmitter"
    (p-error)="EventEmitter"
    (p-success)="EventEmitter"
    (p-upload)="EventEmitter"
    p-optional="boolean"
    p-helper="PoHelperOptions | string"
    p-required="boolean"
    p-required-url="boolean"
    p-show-required="boolean"
    p-size="string"
    p-url="string" >
</po-upload>
`),t()(),n(45,"h4",9),e(46,"Propriedades"),t(),n(47,"table",10)(48,"tr",11)(49,"th",12),e(50,"Nome"),t(),n(51,"th",12),e(52,"Tipo"),t(),n(53,"th",12),e(54,"Padr\xE3o"),t(),n(55,"th",12),e(56,"Descri\xE7\xE3o"),t()(),n(57,"tr",13)(58,"td",14)(59,"div",15)(60,"span",16),e(61," (p-additional-help)"),o(62,"br"),t()(),n(63,"div",17),e(64,"Deprecated"),t()(),n(65,"td",18)(66,"code",19),e(67,"EventEmitter"),t()(),n(68,"td",20),e(69,"-"),t(),n(70,"td",21)(71,"em")(72,"strong"),e(73,"(opcional)"),t()(),n(74,"p"),e(75,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),n(76,"code"),e(77,"p-help"),t(),e(78,"."),t(),n(79,"blockquote")(80,"p"),e(81,"Essa propriedade est\xE1 "),n(82,"strong"),e(83,"depreciada"),t(),e(84," e ser\xE1 removida na vers\xE3o "),n(85,"code"),e(86,"23.x.x"),t(),e(87,". Recomendamos utilizar a propriedade "),n(88,"code"),e(89,"p-helper"),t(),e(90," que oferece mais recursos e flexibilidade."),t()()()(),n(91,"tr",13)(92,"td",14)(93,"div",22)(94,"span",23),e(95," p-additional-help-tooltip"),o(96,"br"),t()(),n(97,"div",17),e(98,"Deprecated"),t()(),n(99,"td",18)(100,"code",24),e(101,"string"),t()(),n(102,"td",20),e(103,"-"),t(),n(104,"td",21)(105,"em")(106,"strong"),e(107,"(opcional)"),t()(),n(108,"p"),e(109,"Exibe um \xEDcone de ajuda adicional ao "),n(110,"code"),e(111,"p-help"),t(),e(112,`, com o texto desta propriedade no tooltip.
Se o evento `),n(113,"code"),e(114,"p-additional-help"),t(),e(115,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),n(116,"strong"),e(117,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(118,"blockquote")(119,"p"),e(120,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),n(121,"blockquote")(122,"p"),e(123,"Essa propriedade est\xE1 "),n(124,"strong"),e(125,"depreciada"),t(),e(126," e ser\xE1 removida na vers\xE3o "),n(127,"code"),e(128,"23.x.x"),t(),e(129,". Recomendamos utilizar a propriedade "),n(130,"code"),e(131,"p-helper"),t(),e(132," que oferece mais recursos e flexibilidade."),t()()()(),n(133,"tr",13)(134,"td",14)(135,"div",22)(136,"span",23),e(137," p-append-in-body"),o(138,"br"),t()()(),n(139,"td",18)(140,"code",25),e(141,"boolean"),t()(),n(142,"td",20)(143,"p")(144,"code"),e(145,"false"),t()()(),n(146,"td",21)(147,"em")(148,"strong"),e(149,"(opcional)"),t()(),n(150,"p"),e(151,"Define que o tooltip ("),n(152,"code"),e(153,"p-additional-help-tooltip"),t(),e(154,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o dentro do componente. Essa
op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o
posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),n(155,"blockquote")(156,"p"),e(157,"Quando utilizado com "),n(158,"code"),e(159,"p-additional-help-tooltip"),t(),e(160,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),n(161,"tr",13)(162,"td",14)(163,"div",22)(164,"span",23),e(165," p-auto-focus"),o(166,"br"),t()()(),n(167,"td",18)(168,"code",25),e(169,"boolean"),t()(),n(170,"td",20)(171,"p")(172,"code"),e(173,"false"),t()()(),n(174,"td",21)(175,"em")(176,"strong"),e(177,"(opcional)"),t()(),n(178,"p"),e(179,"Aplica foco no elemento ao ser iniciado."),t(),n(180,"blockquote")(181,"p"),e(182,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(183,"tr",13)(184,"td",14)(185,"div",22)(186,"span",23),e(187," p-auto-upload"),o(188,"br"),t()()(),n(189,"td",18)(190,"code",25),e(191,"boolean"),t()(),n(192,"td",20)(193,"p")(194,"code"),e(195,"false"),t()()(),n(196,"td",21)(197,"em")(198,"strong"),e(199,"(opcional)"),t()(),n(200,"p"),e(201,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),t(),n(202,"blockquote")(203,"p"),e(204,"Esta propriedade funciona somente se a propriedade "),n(205,"code"),e(206,"p-url"),t(),e(207," tiver um valor atribu\xEDdo."),t()()()(),n(208,"tr",13)(209,"td",14)(210,"div",22)(211,"span",23),e(212," p-custom-action"),o(213,"br"),t()()(),n(214,"td",18)(215,"code",26),e(216,"PoProgressAction"),t()(),n(217,"td",20),e(218,"-"),t(),n(219,"td",21)(220,"em")(221,"strong"),e(222,"(opcional)"),t()(),n(223,"p"),e(224,"Define uma a\xE7\xE3o personalizada no componente "),n(225,"code"),e(226,"po-upload"),t(),e(227,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),t(),n(228,"p"),e(229,"A a\xE7\xE3o deve implementar a interface "),n(230,"strong"),e(231,"PoProgressAction"),t(),e(232,", permitindo configurar propriedades como:"),t(),n(233,"ul")(234,"li")(235,"code"),e(236,"label"),t(),e(237,": Texto do bot\xE3o."),t(),n(238,"li")(239,"code"),e(240,"icon"),t(),e(241,": \xCDcone a ser exibido no bot\xE3o."),t(),n(242,"li")(243,"code"),e(244,"type"),t(),e(245,": Tipo de bot\xE3o (ex.: "),n(246,"code"),e(247,"danger"),t(),e(248," ou "),n(249,"code"),e(250,"default"),t(),e(251,")."),t(),n(252,"li")(253,"code"),e(254,"disabled"),t(),e(255,": Indica se o bot\xE3o deve estar desabilitado."),t(),n(256,"li")(257,"code"),e(258,"visible"),t(),e(259,": Indica se o bot\xE3o deve estar vis\xEDvel."),t()(),n(260,"p")(261,"strong"),e(262,"Exemplo de uso:"),t()(),n(263,"pre")(264,"code",27),e(265,`<po-upload
 [p-custom-action]="customAction"
 (p-custom-action-click)="onCustomActionClick($event)">
</po-upload>
`),t()(),n(266,"pre")(267,"code",28),e(268,`customAction: PoProgressAction = {
  label: 'Baixar',
  icon: 'an an-download',
  type: 'default',
  visible: true
};

onCustomActionClick(file: PoUploadFile) {
  console.log(\`A\xE7\xE3o personalizada clicada para o arquivo: \${file.name}\`);
}
`),t()()()(),n(269,"tr",13)(270,"td",14)(271,"div",15)(272,"span",16),e(273," (p-custom-action-click)"),o(274,"br"),t()()(),n(275,"td",18)(276,"code",19),e(277,"EventEmitter"),t()(),n(278,"td",20),e(279,"-"),t(),n(280,"td",21)(281,"em")(282,"strong"),e(283,"(opcional)"),t()(),n(284,"p"),e(285,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),n(286,"code"),e(287,"p-custom-action"),t(),e(288,"."),t(),n(289,"p"),e(290,`O evento retorna o arquivo associado \xE0 barra de progresso onde a a\xE7\xE3o foi clicada,
permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),t(),n(291,"p")(292,"strong"),e(293,"Exemplo de uso:"),t()(),n(294,"pre")(295,"code",27),e(296,`<po-upload
 [p-custom-action]="customAction"
 (p-custom-action-click)="onCustomActionClick($event)">
</po-upload>
`),t()(),n(297,"pre")(298,"code",28),e(299,`customAction: PoProgressAction = {
  label: 'Baixar',
  icon: 'an an-download',
  type: 'default',
  visible: true
};

onCustomActionClick(file: PoUploadFile) {
  console.log(\`A\xE7\xE3o personalizada clicada para o arquivo: \${file.name}\`);
  // L\xF3gica para download do arquivo
  this.downloadFile(file);
}

downloadFile(file: PoUploadFile) {
  // Exemplo de download
  console.log(\`Iniciando o download do arquivo: \${file.name}\`);
}
`),t()()()(),n(300,"tr",13)(301,"td",14)(302,"div",22)(303,"span",23),e(304," p-directory"),o(305,"br"),t()()(),n(306,"td",18)(307,"code",25),e(308,"boolean"),t()(),n(309,"td",20)(310,"p")(311,"code"),e(312,"false"),t()()(),n(313,"td",21)(314,"em")(315,"strong"),e(316,"(opcional)"),t()(),n(317,"p"),e(318,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),t(),n(319,"blockquote")(320,"p"),e(321,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),t()(),n(322,"blockquote")(323,"p"),e(324,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),n(325,"strong"),e(326,"Internet Explorer"),t(),e(327,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),t()()()(),n(328,"tr",13)(329,"td",14)(330,"div",22)(331,"span",23),e(332," p-disabled"),o(333,"br"),t()()(),n(334,"td",18)(335,"code",25),e(336,"boolean"),t()(),n(337,"td",20),e(338,"-"),t(),n(339,"td",21)(340,"em")(341,"strong"),e(342,"(opcional)"),t()(),n(343,"p"),e(344,"Indica que o campo ser\xE1 desabilitado."),t()()(),n(345,"tr",13)(346,"td",14)(347,"div",22)(348,"span",23),e(349," p-disabled-remove-file"),o(350,"br"),t()()(),n(351,"td",18)(352,"code",25),e(353,"boolean"),t()(),n(354,"td",20)(355,"p")(356,"code"),e(357,"false"),t()()(),n(358,"td",21)(359,"em")(360,"strong"),e(361,"(opcional)"),t()(),n(362,"p"),e(363,"Desabilita bot\xE3o de remover o(s) arquivo(s) selecionado(s)."),t()()(),n(364,"tr",13)(365,"td",14)(366,"div",22)(367,"span",23),e(368," p-drag-drop"),o(369,"br"),t()()(),n(370,"td",18)(371,"code",25),e(372,"boolean"),t()(),n(373,"td",20)(374,"p")(375,"code"),e(376,"false"),t()()(),n(377,"td",21)(378,"em")(379,"strong"),e(380,"(opcional)"),t()(),n(381,"p"),e(382,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),t(),n(383,"blockquote")(384,"p"),e(385,"Recomendamos utilizar apenas um "),n(386,"code"),e(387,"po-upload"),t(),e(388," com esta funcionalidade por tela."),t()()()(),n(389,"tr",13)(390,"td",14)(391,"div",22)(392,"span",23),e(393," p-drag-drop-height"),o(394,"br"),t()()(),n(395,"td",18)(396,"code",29),e(397,"number"),t()(),n(398,"td",20)(399,"p")(400,"code"),e(401,"320"),t()()(),n(402,"td",21)(403,"em")(404,"strong"),e(405,"(opcional)"),t()(),n(406,"p"),e(407,"Define em "),n(408,"em"),e(409,"pixels"),t(),e(410," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),n(411,"code"),e(412,"160px"),t(),e(413,"."),t(),n(414,"blockquote")(415,"p"),e(416,"Esta propriedade funciona somente se a propriedade "),n(417,"code"),e(418,"p-drag-drop"),t(),e(419," estiver habilitada."),t()()()(),n(420,"tr",13)(421,"td",14)(422,"div",22)(423,"span",23),e(424," p-restrictions"),o(425,"br"),t()()(),n(426,"td",18)(427,"code",30),e(428,"PoUploadFileRestrictions"),t()(),n(429,"td",20),e(430,"-"),t(),n(431,"td",21)(432,"em")(433,"strong"),e(434,"(opcional)"),t()(),n(435,"p"),e(436,"Objeto que segue a defini\xE7\xE3o da interface "),n(437,"code"),e(438,"PoUploadFileRestrictions"),t(),e(439,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),t()()(),n(440,"tr",13)(441,"td",14)(442,"div",22)(443,"span",23),e(444," p-form-field"),o(445,"br"),t()()(),n(446,"td",18)(447,"code",24),e(448,"string"),t()(),n(449,"td",20)(450,"p")(451,"code"),e(452,"files"),t()()(),n(453,"td",21)(454,"em")(455,"strong"),e(456,"(opcional)"),t()(),n(457,"p"),e(458,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),n(459,"code"),e(460,"p-url"),t(),e(461,"."),t()()(),n(462,"tr",13)(463,"td",14)(464,"div",22)(465,"span",23),e(466," p-headers"),o(467,"br"),t()()(),n(468,"td",18)(469,"code",31),e(470,"{ [name: string]: string "),t(),n(471,"code",32),e(472,` Array<string>;
}`),t()(),n(473,"td",20),e(474,"-"),t(),n(475,"td",21)(476,"p"),e(477,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),t()()(),n(478,"tr",13)(479,"td",14)(480,"div",22)(481,"span",23),e(482," p-help"),o(483,"br"),t()()(),n(484,"td",18)(485,"code",24),e(486,"string"),t()(),n(487,"td",20),e(488,"-"),t(),n(489,"td",21)(490,"em")(491,"strong"),e(492,"(opcional)"),t()(),n(493,"p"),e(494,"Texto de apoio para o campo."),t()()(),n(495,"tr",13)(496,"td",14)(497,"div",22)(498,"span",23),e(499," p-hide-restrictions-info"),o(500,"br"),t()()(),n(501,"td",18)(502,"code",25),e(503,"boolean"),t()(),n(504,"td",20)(505,"p")(506,"code"),e(507,"false"),t()()(),n(508,"td",21)(509,"em")(510,"strong"),e(511,"(opcional)"),t()(),n(512,"p"),e(513,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),t()()(),n(514,"tr",13)(515,"td",14)(516,"div",22)(517,"span",23),e(518," p-hide-select-button"),o(519,"br"),t()()(),n(520,"td",18)(521,"code",25),e(522,"boolean"),t()(),n(523,"td",20)(524,"p")(525,"code"),e(526,"false"),t()()(),n(527,"td",21)(528,"em")(529,"strong"),e(530,"(opcional)"),t()(),n(531,"p"),e(532,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),t(),n(533,"blockquote")(534,"p"),e(535,"Caso o valor definido seja "),n(536,"code"),e(537,"true"),t(),e(538,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),n(539,"code"),e(540,"selectFiles()"),t(),e(541," para sele\xE7\xE3o de arquivos."),t()()()(),n(542,"tr",13)(543,"td",14)(544,"div",22)(545,"span",23),e(546," p-hide-send-button"),o(547,"br"),t()()(),n(548,"td",18)(549,"code",25),e(550,"boolean"),t()(),n(551,"td",20)(552,"p")(553,"code"),e(554,"false"),t()()(),n(555,"td",21)(556,"em")(557,"strong"),e(558,"(opcional)"),t()(),n(559,"p"),e(560,"Omite o bot\xE3o de envio de arquivos."),t(),n(561,"blockquote")(562,"p"),e(563,"Caso o valor definido seja "),n(564,"code"),e(565,"true"),t(),e(566,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),n(567,"code"),e(568,"sendFiles()"),t(),e(569," para envio do(s) arquivo(s) selecionado(s)."),t()()()(),n(570,"tr",13)(571,"td",14)(572,"div",22)(573,"span",23),e(574," p-multiple"),o(575,"br"),t()()(),n(576,"td",18)(577,"code",25),e(578,"boolean"),t()(),n(579,"td",20),e(580,"-"),t(),n(581,"td",21)(582,"em")(583,"strong"),e(584,"(opcional)"),t()(),n(585,"p"),e(586,"Define se pode selecionar mais de um arquivo."),t(),n(587,"blockquote")(588,"p"),e(589,"Se utilizada a "),n(590,"code"),e(591,"p-directory"),t(),e(592,", habilita-se automaticamente esta propriedade."),t()()()(),n(593,"tr",13)(594,"td",14)(595,"div",15)(596,"span",16),e(597," (p-keydown)"),o(598,"br"),t()()(),n(599,"td",18)(600,"code",19),e(601,"EventEmitter"),t()(),n(602,"td",20),e(603,"-"),t(),n(604,"td",21)(605,"em")(606,"strong"),e(607,"(opcional)"),t()(),n(608,"p"),e(609,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(610,"code"),e(611,"KeyboardEvent"),t(),e(612," com informa\xE7\xF5es sobre a tecla."),t()()(),n(613,"tr",13)(614,"td",14)(615,"div",22)(616,"span",23),e(617," p-label"),o(618,"br"),t()()(),n(619,"td",18)(620,"code",24),e(621,"string"),t()(),n(622,"td",20),e(623,"-"),t(),n(624,"td",21)(625,"em")(626,"strong"),e(627,"(opcional)"),t()(),n(628,"p"),e(629,"R\xF3tulo do campo."),t()()(),n(630,"tr",13)(631,"td",14)(632,"div",22)(633,"span",23),e(634," p-label-text-wrap"),o(635,"br"),t()()(),n(636,"td",18)(637,"code",25),e(638,"boolean"),t()(),n(639,"td",20)(640,"p")(641,"code"),e(642,"false"),t()()(),n(643,"td",21)(644,"em")(645,"strong"),e(646,"(opcional)"),t()(),n(647,"p"),e(648,"Habilita a quebra autom\xE1tica do texto da propriedade "),n(649,"code"),e(650,"p-label"),t(),e(651,". Quando "),n(652,"code"),e(653,"p-label-text-wrap"),t(),e(654,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),n(655,"tr",13)(656,"td",14)(657,"div",22)(658,"span",23),e(659," p-literals"),o(660,"br"),t()()(),n(661,"td",18)(662,"code",33),e(663,"PoUploadLiterals"),t()(),n(664,"td",20),e(665,"-"),t(),n(666,"td",21)(667,"em")(668,"strong"),e(669,"(opcional)"),t()(),n(670,"p"),e(671,"Objeto com as literais usadas no "),n(672,"code"),e(673,"po-upload"),t(),e(674,"."),t(),n(675,"p"),e(676,"Existem duas maneiras de customizar o componente:"),t(),n(677,"ul")(678,"li"),e(679,"passando um objeto implementando a interface "),n(680,"code"),e(681,"PoUploadLiterals"),t(),e(682," com todas as literais dispon\xEDveis;"),t(),n(683,"li"),e(684,"passando apenas as literais que deseja customizar:"),n(685,"pre")(686,"code"),e(687,`const customLiterals: PoUploadLiterals = {
  folders: 'Pastas',
  selectFile: 'Buscar arquivo',
  startSending: 'Enviar'
};
`),t()()()(),n(688,"p"),e(689,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente:"),t(),n(690,"pre")(691,"code"),e(692,`<po-upload
  [p-literals]="customLiterals">
</po-upload>
`),t()(),n(693,"blockquote")(694,"p"),e(695,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do "),n(696,"em"),e(697,"browser"),t(),e(698," (pt, en, es, ru)."),t()()()(),n(699,"tr",13)(700,"td",14)(701,"div",22)(702,"span",23),e(703," name"),o(704,"br"),t()()(),n(705,"td",18)(706,"code",24),e(707,"string"),t()(),n(708,"td",20),e(709,"-"),t(),n(710,"td",21)(711,"p"),e(712,"Define o valor do atributo "),n(713,"code"),e(714,"name"),t(),e(715," do componente."),t()()(),n(716,"tr",13)(717,"td",14)(718,"div",15)(719,"span",16),e(720," (ngModelChange)"),o(721,"br"),t()()(),n(722,"td",18)(723,"code",19),e(724,"EventEmitter"),t()(),n(725,"td",20),e(726,"-"),t(),n(727,"td",21)(728,"em")(729,"strong"),e(730,"(opcional)"),t()(),n(731,"p"),e(732,"Fun\xE7\xE3o para atualizar o ngModel do componente, necess\xE1rio quando n\xE3o for utilizado dentro da "),n(733,"em"),e(734,"tag"),t(),n(735,"code"),e(736,"form"),t(),e(737,"."),t(),n(738,"p"),e(739,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),n(740,"code"),e(741,"strictTemplates"),t(),e(742,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),t(),n(743,"pre")(744,"code"),e(745,`<po-upload ... [ngModel]="UploadModel" (ngModelChange)="uploadModel = $event"> </po-upload>
`),t()()()(),n(746,"tr",13)(747,"td",14)(748,"div",15)(749,"span",16),e(750," (p-error)"),o(751,"br"),t()()(),n(752,"td",18)(753,"code",19),e(754,"EventEmitter"),t()(),n(755,"td",20),e(756,"-"),t(),n(757,"td",21)(758,"em")(759,"strong"),e(760,"(opcional)"),t()(),n(761,"p"),e(762,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),t(),n(763,"blockquote")(764,"p"),e(765,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),n(766,"code"),e(767,"HttpErrorResponse"),t(),e(768,"."),t()()()(),n(769,"tr",13)(770,"td",14)(771,"div",15)(772,"span",16),e(773," (p-success)"),o(774,"br"),t()()(),n(775,"td",18)(776,"code",19),e(777,"EventEmitter"),t()(),n(778,"td",20),e(779,"-"),t(),n(780,"td",21)(781,"em")(782,"strong"),e(783,"(opcional)"),t()(),n(784,"p"),e(785,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),t(),n(786,"blockquote")(787,"p"),e(788,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),n(789,"code"),e(790,"HttpResponse"),t(),e(791,"."),t()()()(),n(792,"tr",13)(793,"td",14)(794,"div",15)(795,"span",16),e(796," (p-upload)"),o(797,"br"),t()()(),n(798,"td",18)(799,"code",19),e(800,"EventEmitter"),t()(),n(801,"td",20),e(802,"-"),t(),n(803,"td",21)(804,"em")(805,"strong"),e(806,"(opcional)"),t()(),n(807,"p"),e(808,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e as propriedades data e extraFormData,
que ser\xE3o enviadas em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),t(),n(809,"blockquote")(810,"p"),e(811,"data, nesta propriedade pode ser informado algum dado"),t()(),n(812,"pre")(813,"code"),e(814,`event.data = {id: 'id do usu\xE1rio'};
`),t()(),n(815,"blockquote")(816,"p"),e(817,`extraFormData, nesta propriedade pode ser informado algum dado solicitado pela API
que n\xE3o possa estar no objeto `),n(818,"code"),e(819,"data"),t(),e(820,`, assim o conte\xFAdo sar\xE1 extra\xEDdo do objeto e
enviado como par\xE2metro`),t()(),n(821,"pre")(822,"code"),e(823,`event.extraFormData = {id: 'id do usu\xE1rio'};
`),t()()()(),n(824,"tr",13)(825,"td",14)(826,"div",22)(827,"span",23),e(828," p-optional"),o(829,"br"),t()()(),n(830,"td",18)(831,"code",25),e(832,"boolean"),t()(),n(833,"td",20)(834,"p")(835,"code"),e(836,"false"),t()()(),n(837,"td",21)(838,"em")(839,"strong"),e(840,"(opcional)"),t()(),n(841,"p"),e(842,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(843,"blockquote")(844,"p"),e(845,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(846,"ul")(847,"li"),e(848,"O campo conter "),n(849,"code"),e(850,"p-required"),t(),e(851,";"),t(),n(852,"li"),e(853,"N\xE3o possuir "),n(854,"code"),e(855,"p-help"),t(),e(856," e/ou "),n(857,"code"),e(858,"p-label"),t(),e(859,"."),t()()()(),n(860,"tr",13)(861,"td",14)(862,"div",22)(863,"span",23),e(864," p-helper"),o(865,"br"),t()()(),n(866,"td",18)(867,"code",34),e(868,"PoHelperOptions "),t(),n(869,"code",24),e(870," string"),t()(),n(871,"td",20),e(872,"-"),t(),n(873,"td",21)(874,"em")(875,"strong"),e(876,"(opcional)"),t()(),n(877,"p"),e(878,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label."),t(),n(879,"blockquote")(880,"p"),e(881,"Caso o "),n(882,"code"),e(883,"p-label"),t(),e(884,` n\xE3o esteja definido, o componente po-helper n\xE3o ser\xE1 exibido.
Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional (`),n(885,"code"),e(886,"p-additional-help-tooltip"),t(),e(887," e "),n(888,"code"),e(889,"p-additional-help"),t(),e(890,") ser\xE1 ignorado."),t()()()(),n(891,"tr",13)(892,"td",14)(893,"div",22)(894,"span",23),e(895," p-required"),o(896,"br"),t()()(),n(897,"td",18)(898,"code",25),e(899,"boolean"),t()(),n(900,"td",20)(901,"p")(902,"code"),e(903,"false"),t()()(),n(904,"td",21)(905,"em")(906,"strong"),e(907,"(opcional)"),t()(),n(908,"p"),e(909,"Define que o campo ser\xE1 obrigat\xF3rio."),t()()(),n(910,"tr",13)(911,"td",14)(912,"div",22)(913,"span",23),e(914," p-required-url"),o(915,"br"),t()()(),n(916,"td",18)(917,"code",25),e(918,"boolean"),t()(),n(919,"td",20)(920,"p")(921,"code"),e(922,"true"),t()()(),n(923,"td",21)(924,"em")(925,"strong"),e(926,"(opcional)"),t()(),n(927,"p"),e(928,"Define se a propriedade "),n(929,"code"),e(930,"p-url"),t(),e(931," \xE9 obrigat\xF3ria."),t(),n(932,"p"),e(933,"Caso a propriedade seja definida como "),n(934,"code"),e(935,"false"),t(),e(936,":"),t(),n(937,"ul")(938,"li"),e(939,'o bot\xE3o de "Selecionar arquivo" ficar\xE1 habilitado mesmo sem a propriedade '),n(940,"code"),e(941,"p-url"),t(),e(942," definida."),t(),n(943,"li"),e(944,'o bot\xE3o "Iniciar envio" ficar\xE1 oculto at\xE9 que a propriedade '),n(945,"code"),e(946,"p-url"),t(),e(947," seja definida."),t()(),n(948,"blockquote")(949,"p"),e(950,"Se utilizada com a propriedade "),n(951,"code"),e(952,"p-auto-upload"),t(),e(953," definida como "),n(954,"code"),e(955,"true"),t(),e(956," ser\xE1 necess\xE1rio definir a propriedade "),n(957,"code"),e(958,"p-url"),t(),e(959,"."),t()()()(),n(960,"tr",13)(961,"td",14)(962,"div",22)(963,"span",23),e(964," p-show-required"),o(965,"br"),t()()(),n(966,"td",18)(967,"code",25),e(968,"boolean"),t()(),n(969,"td",20),e(970,"-"),t(),n(971,"td",21)(972,"p"),e(973,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(974,"blockquote")(975,"p"),e(976,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(977,"ul")(978,"li"),e(979,"N\xE3o possuir "),n(980,"code"),e(981,"p-help"),t(),e(982," e/ou "),n(983,"code"),e(984,"p-label"),t(),e(985,"."),t()()()(),n(986,"tr",13)(987,"td",14)(988,"div",22)(989,"span",23),e(990," p-size"),o(991,"br"),t()()(),n(992,"td",18)(993,"code",24),e(994,"string"),t()(),n(995,"td",20)(996,"p")(997,"code"),e(998,"medium"),t()()(),n(999,"td",21)(1e3,"em")(1001,"strong"),e(1002,"(opcional)"),t()(),n(1003,"p"),e(1004,"Define o tamanho e as a\xE7\xF5es do componente:"),t(),n(1005,"ul")(1006,"li")(1007,"code"),e(1008,"small"),t(),e(1009,": altura do button como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(1010,"li")(1011,"code"),e(1012,"medium"),t(),e(1013,": altura do button como 44px."),t()(),n(1014,"blockquote")(1015,"p"),e(1016,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(1017,"code"),e(1018,"medium"),t(),e(1019,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(1020,"a",35),e(1021,"po-theme"),t(),e(1022,"."),t()()()(),n(1023,"tr",13)(1024,"td",14)(1025,"div",22)(1026,"span",23),e(1027," p-url"),o(1028,"br"),t()()(),n(1029,"td",18)(1030,"code",24),e(1031,"string"),t()(),n(1032,"td",20),e(1033,"-"),t(),n(1034,"td",21)(1035,"p"),e(1036,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),t()()()(),n(1037,"h3",9),e(1038,"M\xE9todos"),t(),n(1039,"table",36)(1040,"tr",13)(1041,"th",37)(1042,"div",22)(1043,"h4")(1044,"span",23),e(1045," clear "),t()()()()(),n(1046,"tr",21)(1047,"td",21)(1048,"p"),e(1049,"M\xE9todo respons\xE1vel por "),n(1050,"strong"),e(1051,"limpar"),t(),e(1052," o(s) arquivo(s) selecionado(s)."),t()()()(),o(1053,"br"),n(1054,"table",36)(1055,"tr",13)(1056,"th",37)(1057,"div",22)(1058,"h4")(1059,"span",23),e(1060," focus "),t()()()()(),n(1061,"tr",21)(1062,"td",21)(1063,"p"),e(1064,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(1065,"p"),e(1066,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(1067,"pre")(1068,"code"),e(1069,`import { PoUploadComponent } from '@po-ui/ng-components';

...

@ViewChild(PoUploadComponent, { static: true }) upload: PoUploadComponent;

focusUpload() {
  this.upload.focus();
}
`),t()()()()(),o(1070,"br"),n(1071,"table",36)(1072,"tr",13)(1073,"th",37)(1074,"div",22)(1075,"h4")(1076,"span",23),e(1077," selectFiles "),t()()()()(),n(1078,"tr",21)(1079,"td",21)(1080,"p"),e(1081,"M\xE9todo respons\xE1vel por "),n(1082,"strong"),e(1083,"abrir"),t(),e(1084," a janela para sele\xE7\xE3o de arquivo(s)."),t()()()(),o(1085,"br"),n(1086,"table",36)(1087,"tr",13)(1088,"th",37)(1089,"div",22)(1090,"h4")(1091,"span",23),e(1092," sendFiles "),t()()()()(),n(1093,"tr",21)(1094,"td",21)(1095,"p"),e(1096,"M\xE9todo respons\xE1vel por "),n(1097,"strong"),e(1098,"enviar"),t(),e(1099," o(s) arquivo(s) selecionado(s)."),t()()()(),o(1100,"br"),n(1101,"table",36)(1102,"tr",13)(1103,"th",37)(1104,"div",22)(1105,"h4")(1106,"span",23),e(1107," showAdditionalHelp "),t()()()()(),n(1108,"tr",21)(1109,"td",21)(1110,"p"),e(1111,"M\xE9todo que exibe "),n(1112,"code"),e(1113,"p-additionalHelpTooltip"),t(),e(1114," ou executa a a\xE7\xE3o definida em "),n(1115,"code"),e(1116,"p-additionalHelp"),t(),e(1117,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),n(1118,"code"),e(1119,"p-keydown"),t(),e(1120,"."),t(),n(1121,"blockquote")(1122,"p"),e(1123,"Exibe ou oculta o conte\xFAdo do componente "),n(1124,"code"),e(1125,"po-helper"),t(),e(1126," quando o componente estiver com foco e com label vis\xEDvel."),t()(),n(1127,"pre")(1128,"code"),e(1129,`<po-upload
 #upload
 ...
 p-additional-help-tooltip="Mensagem de ajuda complementar"
 (p-keydown)="onKeyDown($event, upload)"
></po-upload>
`),t()(),n(1130,"pre")(1131,"code"),e(1132,`//Exemplo com p-label e p-helper
<po-upload
 #upload
 ...
 p-label="Label do upload"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, upload)"
></po-upload>
`),t()(),n(1133,"pre")(1134,"code"),e(1135,`...
onKeyDown(event: KeyboardEvent, inp: PoUploadComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),o(1136,"br"),n(1137,"h3"),e(1138,"Interfaces"),t(),n(1139,"h4",38)(1140,"code",5),e(1141,"PoUploadFileRestrictions"),t()(),n(1142,"div",2)(1143,"p"),e(1144,`Interface que define as restri\xE7\xF5es dos arquivos a serem selecionados com base em regras predefinidas
para o seu tamanho, extens\xE3o e quantidade.`),t()(),n(1145,"h4",9),e(1146,"Propriedades"),t(),n(1147,"table",10)(1148,"tr",11)(1149,"th",12),e(1150,"Nome"),t(),n(1151,"th",12),e(1152,"Tipo"),t(),n(1153,"th",12),e(1154,"Descri\xE7\xE3o"),t()(),n(1155,"tr",13)(1156,"td",14)(1157,"div",22)(1158,"span",23),e(1159," allowedExtensions"),o(1160,"br"),t()()(),n(1161,"td",18)(1162,"code",39),e(1163,"Array<string>"),t()(),n(1164,"td",21)(1165,"em")(1166,"strong"),e(1167,"(opcional)"),t()(),n(1168,"p"),e(1169,"Extens\xF5es permitidas de arquivos que ser\xE3o enviados ao servidor, devendo ser informada uma cole\xE7\xE3o de extens\xF5es, por exemplo:"),t(),n(1170,"pre")(1171,"code"),e(1172,`allowedExtensions = ['.png', '.jpg', '.pdf'];
`),t()()()(),n(1173,"tr",13)(1174,"td",14)(1175,"div",22)(1176,"span",23),e(1177," maxFileSize"),o(1178,"br"),t()()(),n(1179,"td",18)(1180,"code",29),e(1181,"number"),t()(),n(1182,"td",21)(1183,"em")(1184,"strong"),e(1185,"(opcional)"),t()(),n(1186,"p"),e(1187,"Tamanho m\xE1ximo do arquivo a ser enviado ao servidor."),t(),n(1188,"p"),e(1189,"Deve ser informado um valor em "),n(1190,"em"),e(1191,"bytes"),t(),e(1192,", por exemplo: "),n(1193,"code"),e(1194,"31457280"),t(),e(1195," (30MB)."),t(),n(1196,"blockquote")(1197,"p"),e(1198,"Por padr\xE3o o valor \xE9 "),n(1199,"code"),e(1200,"30 MB"),t(),e(1201,"."),t()()()(),n(1202,"tr",13)(1203,"td",14)(1204,"div",22)(1205,"span",23),e(1206," maxFiles"),o(1207,"br"),t()()(),n(1208,"td",18)(1209,"code",29),e(1210,"number"),t()(),n(1211,"td",21)(1212,"em")(1213,"strong"),e(1214,"(opcional)"),t()(),n(1215,"p"),e(1216,"Quantidade m\xE1xima de arquivos para o "),n(1217,"em"),e(1218,"upload"),t(),e(1219,"."),t(),n(1220,"blockquote")(1221,"p"),e(1222,"Esta propriedade ser\xE1 v\xE1lida somente se a propriedade "),n(1223,"code"),e(1224,"p-multiple"),t(),e(1225," estiver habilitada e seu valor for maior do que zero."),t()()()(),n(1226,"tr",13)(1227,"td",14)(1228,"div",22)(1229,"span",23),e(1230," minFileSize"),o(1231,"br"),t()()(),n(1232,"td",18)(1233,"code",29),e(1234,"number"),t()(),n(1235,"td",21)(1236,"em")(1237,"strong"),e(1238,"(opcional)"),t()(),n(1239,"p"),e(1240,"Tamanho m\xEDnimo em "),n(1241,"em"),e(1242,"bytes"),t(),e(1243," do arquivo que ser\xE1 enviado ao servidor."),t(),n(1244,"blockquote")(1245,"p"),e(1246,"Por padr\xE3o o valor \xE9 "),n(1247,"code"),e(1248,"0"),t(),e(1249,"."),t()()()()(),n(1250,"h4",38)(1251,"code",5),e(1252,"PoUploadLiterals"),t()(),n(1253,"div",2)(1254,"p"),e(1255,"Interface para defini\xE7\xE3o das literais usadas no "),n(1256,"code"),e(1257,"po-upload"),t(),e(1258,"."),t()(),n(1259,"h4",9),e(1260,"Propriedades"),t(),n(1261,"table",10)(1262,"tr",11)(1263,"th",12),e(1264,"Nome"),t(),n(1265,"th",12),e(1266,"Tipo"),t(),n(1267,"th",12),e(1268,"Descri\xE7\xE3o"),t()(),n(1269,"tr",13)(1270,"td",14)(1271,"div",22)(1272,"span",23),e(1273," dragFilesHere"),o(1274,"br"),t()()(),n(1275,"td",18)(1276,"code",24),e(1277,"string"),t()(),n(1278,"td",21)(1279,"em")(1280,"strong"),e(1281,"(opcional)"),t()(),n(1282,"p"),e(1283,"Texto indicativo para a \xE1rea onde os arquivos devem ser arrastados quando utilizada a propriedade "),n(1284,"code"),e(1285,"p-drag-drop"),t(),e(1286,"."),t()()(),n(1287,"tr",13)(1288,"td",14)(1289,"div",22)(1290,"span",23),e(1291," dragFoldersHere"),o(1292,"br"),t()()(),n(1293,"td",18)(1294,"code",24),e(1295,"string"),t()(),n(1296,"td",21)(1297,"em")(1298,"strong"),e(1299,"(opcional)"),t()(),n(1300,"p"),e(1301,"Texto indicativo para a \xE1rea onde os diret\xF3rios devem ser arrastados quando utilizada a propriedade "),n(1302,"code"),e(1303,"p-drag-drop"),t(),e(1304,"."),t()()(),n(1305,"tr",13)(1306,"td",14)(1307,"div",22)(1308,"span",23),e(1309," dropFilesHere"),o(1310,"br"),t()()(),n(1311,"td",18)(1312,"code",24),e(1313,"string"),t()(),n(1314,"td",21)(1315,"em")(1316,"strong"),e(1317,"(opcional)"),t()(),n(1318,"p"),e(1319,"Texto indicativo para a \xE1rea onde os arquivos devem ser soltos quando utilizada a propriedade "),n(1320,"code"),e(1321,"p-drag-drop"),t()()()(),n(1322,"tr",13)(1323,"td",14)(1324,"div",22)(1325,"span",23),e(1326," dropFoldersHere"),o(1327,"br"),t()()(),n(1328,"td",18)(1329,"code",24),e(1330,"string"),t()(),n(1331,"td",21)(1332,"em")(1333,"strong"),e(1334,"(opcional)"),t()(),n(1335,"p"),e(1336,"Texto indicativo para a \xE1rea onde os diret\xF3rios devem ser soltos quando utilizada a propriedade "),n(1337,"code"),e(1338,"p-drag-drop"),t(),e(1339,"."),t()()(),n(1340,"tr",13)(1341,"td",14)(1342,"div",22)(1343,"span",23),e(1344," errorOccurred"),o(1345,"br"),t()()(),n(1346,"td",18)(1347,"code",24),e(1348,"string"),t()(),n(1349,"td",21)(1350,"em")(1351,"strong"),e(1352,"(opcional)"),t()(),n(1353,"p"),e(1354,"Texto a ser exibido quando ocorrer erro no envio do arquivo."),t()()(),n(1355,"tr",13)(1356,"td",14)(1357,"div",22)(1358,"span",23),e(1359," files"),o(1360,"br"),t()()(),n(1361,"td",18)(1362,"code",24),e(1363,"string"),t()(),n(1364,"td",21)(1365,"em")(1366,"strong"),e(1367,"(opcional)"),t()(),n(1368,"p"),e(1369,"Par\xE2metro "),n(1370,"em"),e(1371,"files"),t(),e(1372," para o texto de exibi\xE7\xE3o quando arrastado um arquivo para um local inv\xE1lido com a op\xE7\xE3o de "),n(1373,"em"),e(1374,"dragDrop"),t(),e(1375,"."),t()()(),n(1376,"tr",13)(1377,"td",14)(1378,"div",22)(1379,"span",23),e(1380," folders"),o(1381,"br"),t()()(),n(1382,"td",18)(1383,"code",24),e(1384,"string"),t()(),n(1385,"td",21)(1386,"em")(1387,"strong"),e(1388,"(opcional)"),t()(),n(1389,"p"),e(1390,"Par\xE2metro "),n(1391,"em"),e(1392,"folders"),t(),e(1393," para o texto de exibi\xE7\xE3o quando arrastado um arquivo para um local inv\xE1lido com a op\xE7\xE3o de "),n(1394,"em"),e(1395,"dragDrop"),t(),e(1396,"."),t()()(),n(1397,"tr",13)(1398,"td",14)(1399,"div",22)(1400,"span",23),e(1401," invalidDropArea"),o(1402,"br"),t()()(),n(1403,"td",18)(1404,"code",24),e(1405,"string"),t()(),n(1406,"td",21)(1407,"em")(1408,"strong"),e(1409,"(opcional)"),t()(),n(1410,"p"),e(1411,"Texto exibido caso o usu\xE1rio arrastar um arquivo para um local inv\xE1lido ao utilizar a op\xE7\xE3o de "),n(1412,"em"),e(1413,"dragDrop"),t(),e(1414,"."),t()()(),n(1415,"tr",13)(1416,"td",14)(1417,"div",22)(1418,"span",23),e(1419," selectFile"),o(1420,"br"),t()()(),n(1421,"td",18)(1422,"code",24),e(1423,"string"),t()(),n(1424,"td",21)(1425,"em")(1426,"strong"),e(1427,"(opcional)"),t()(),n(1428,"p"),e(1429,"Texto exibido no label do bot\xE3o de sele\xE7\xE3o dos arquivos."),t()()(),n(1430,"tr",13)(1431,"td",14)(1432,"div",22)(1433,"span",23),e(1434," selectFiles"),o(1435,"br"),t()()(),n(1436,"td",18)(1437,"code",24),e(1438,"string"),t()(),n(1439,"td",21)(1440,"em")(1441,"strong"),e(1442,"(opcional)"),t()(),n(1443,"p"),e(1444,"Texto exibido no label do bot\xE3o de sele\xE7\xE3o dos arquivos ao utilizar a propriedade "),n(1445,"code"),e(1446,"p-multiple"),t(),e(1447,"."),t()()(),n(1448,"tr",13)(1449,"td",14)(1450,"div",22)(1451,"span",23),e(1452," selectFilesOnComputer"),o(1453,"br"),t()()(),n(1454,"td",18)(1455,"code",24),e(1456,"string"),t()(),n(1457,"td",21)(1458,"em")(1459,"strong"),e(1460,"(opcional)"),t()(),n(1461,"p"),e(1462,`Texto utilizado para indicar a possibilidade de sele\xE7\xE3o de arquivos na \xE1rea onde podem ser arrastados os arquivos
ao utilizar a op\xE7\xE3o de `),n(1463,"em"),e(1464,"dragDrop"),t(),e(1465,"."),t()()(),n(1466,"tr",13)(1467,"td",14)(1468,"div",22)(1469,"span",23),e(1470," selectFolder"),o(1471,"br"),t()()(),n(1472,"td",18)(1473,"code",24),e(1474,"string"),t()(),n(1475,"td",21)(1476,"em")(1477,"strong"),e(1478,"(opcional)"),t()(),n(1479,"p"),e(1480,"Texto exibido no label do bot\xE3o de sele\xE7\xE3o dos arquivos ao utilizar a propriedade "),n(1481,"code"),e(1482,"p-directory"),t(),e(1483,"."),t()()(),n(1484,"tr",13)(1485,"td",14)(1486,"div",22)(1487,"span",23),e(1488," selectFolderOnComputer"),o(1489,"br"),t()()(),n(1490,"td",18)(1491,"code",24),e(1492,"string"),t()(),n(1493,"td",21)(1494,"em")(1495,"strong"),e(1496,"(opcional)"),t()(),n(1497,"p"),e(1498,`Texto utilizado para indicar a possibilidade de sele\xE7\xE3o de diret\xF3rio na \xE1rea onde podem ser arrastados os arquivos
ao utilizar a op\xE7\xE3o de `),n(1499,"em"),e(1500,"dragDrop"),t(),e(1501,"."),t()()(),n(1502,"tr",13)(1503,"td",14)(1504,"div",22)(1505,"span",23),e(1506," sentWithSuccess"),o(1507,"br"),t()()(),n(1508,"td",18)(1509,"code",24),e(1510,"string"),t()(),n(1511,"td",21)(1512,"em")(1513,"strong"),e(1514,"(opcional)"),t()(),n(1515,"p"),e(1516,"Texto a ser exibido quando o envio do arquivo for realizado com sucesso."),t()()(),n(1517,"tr",13)(1518,"td",14)(1519,"div",22)(1520,"span",23),e(1521," startSending"),o(1522,"br"),t()()(),n(1523,"td",18)(1524,"code",24),e(1525,"string"),t()(),n(1526,"td",21)(1527,"em")(1528,"strong"),e(1529,"(opcional)"),t()(),n(1530,"p"),e(1531,"Texto exibido no label do bot\xE3o para iniciar o envio dos arquivos."),t()()()(),n(1532,"h4",38)(1533,"code",5),e(1534,"PoProgressAction"),t()(),n(1535,"div",2)(1536,"p"),e(1537,"Interface para as a\xE7\xF5es dos componentes po-progress e po-upload."),t()(),n(1538,"h4",9),e(1539,"Propriedades"),t(),n(1540,"table",10)(1541,"tr",11)(1542,"th",12),e(1543,"Nome"),t(),n(1544,"th",12),e(1545,"Tipo"),t(),n(1546,"th",12),e(1547,"Descri\xE7\xE3o"),t()(),n(1548,"tr",13)(1549,"td",14)(1550,"div",22)(1551,"span",23),e(1552," disabled"),o(1553,"br"),t()()(),n(1554,"td",18)(1555,"code",25),e(1556,"boolean "),t(),n(1557,"code",40),e(1558," Function"),t()(),n(1559,"td",21)(1560,"em")(1561,"strong"),e(1562,"(opcional)"),t()(),n(1563,"p"),e(1564,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),t(),n(1565,"p"),e(1566,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),t()()(),n(1567,"tr",13)(1568,"td",14)(1569,"div",22)(1570,"span",23),e(1571," icon"),o(1572,"br"),t()()(),n(1573,"td",18)(1574,"code",24),e(1575,"string "),t(),n(1576,"code",41),e(1577," TemplateRef<void>"),t()(),n(1578,"td",21)(1579,"em")(1580,"strong"),e(1581,"(opcional)"),t()(),n(1582,"p"),e(1583,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),t(),n(1584,"p"),e(1585,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(1586,"a",42),e(1587,"Biblioteca de \xEDcones"),t(),e(1588,". conforme exemplo abaixo:"),t(),n(1589,"pre")(1590,"code"),e(1591,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),t()(),n(1592,"p"),e(1593,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),t(),n(1594,"pre")(1595,"code"),e(1596,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),t()(),n(1597,"p"),e(1598,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(1599,"code"),e(1600,"TemplateRef"),t(),e(1601,`, conforme exemplo abaixo:
component.html:`),t(),n(1602,"pre")(1603,"code"),e(1604,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),t()(),n(1605,"p"),e(1606,"component.ts:"),t(),n(1607,"pre")(1608,"code"),e(1609,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),t()()()(),n(1610,"tr",13)(1611,"td",14)(1612,"div",22)(1613,"span",23),e(1614," label"),o(1615,"br"),t()()(),n(1616,"td",18)(1617,"code",24),e(1618,"string"),t()(),n(1619,"td",21)(1620,"em")(1621,"strong"),e(1622,"(opcional)"),t()(),n(1623,"p"),e(1624,"R\xF3tulo da a\xE7\xE3o."),t()()(),n(1625,"tr",13)(1626,"td",14)(1627,"div",22)(1628,"span",23),e(1629," type"),o(1630,"br"),t()()(),n(1631,"td",18)(1632,"code",24),e(1633,"string"),t()(),n(1634,"td",21)(1635,"em")(1636,"strong"),e(1637,"(opcional)"),t()(),n(1638,"p"),e(1639,"Define a cor do item, sendo "),n(1640,"code"),e(1641,"default"),t(),e(1642," o padr\xE3o."),t(),n(1643,"p"),e(1644,"Valores v\xE1lidos:"),t(),n(1645,"ul")(1646,"li")(1647,"code"),e(1648,"default"),t()(),n(1649,"li")(1650,"code"),e(1651,"danger"),t(),e(1652," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),t()()()(),n(1653,"tr",13)(1654,"td",14)(1655,"div",22)(1656,"span",23),e(1657," visible"),o(1658,"br"),t()()(),n(1659,"td",18)(1660,"code",25),e(1661,"boolean "),t(),n(1662,"code",40),e(1663," Function"),t()(),n(1664,"td",21)(1665,"em")(1666,"strong"),e(1667,"(opcional)"),t()(),n(1668,"p"),e(1669,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),t(),n(1670,"blockquote")(1671,"p"),e(1672,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),t()(),n(1673,"p"),e(1674,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),t(),n(1675,"ul")(1676,"li")(1677,"p"),e(1678,"Fun\xE7\xE3o que deve retornar um booleano."),t()(),n(1679,"li")(1680,"p"),e(1681,"Informar diretamente um valor booleano."),t()()()()()()())},dependencies:[y],encapsulation:2})}return l})();var Re=(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,r){this.route=p,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||l)($(de),$(se))};static \u0275cmp=x({type:l,selectors:[["ng-component"]],standalone:!1,decls:10,vars:4,consts:[["p-title","Upload",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),b("p-click",function(){return i.changeTab("doc")}),o(3,"sample-po-upload-doc"),t(),n(4,"po-tab",3),b("p-click",function(){return i.changeTab("web")}),o(5,"sample-po-upload-basic-view")(6,"sample-po-upload-labs-view")(7,"sample-po-upload-resume-view")(8,"sample-po-upload-rs-view")(9,"sample-po-upload-download-view"),t()()()),r&2&&(E("p-actions",i.actions),s(2),E("p-active",i.activeTab==="doc"),s(2),E("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[fe,w,_,Pe,qe,De,ke,Ve,ze],encapsulation:2})}return l})();var mt=[{path:"",component:Re}],Ae=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=G({type:l});static \u0275inj=I({imports:[ee.forChild(mt),ee]})}return l})();var Yt=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=G({type:l});static \u0275inj=I({imports:[_e,Ae]})}return l})();export{Yt as DocPoUploadModule};
