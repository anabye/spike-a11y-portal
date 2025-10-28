import{o as y,p as _e}from"./chunk-KTXVLMHP.js";import{Ab as _,Eb as $,Fa as W,Ma as ge,O as ce,Pa as M,Q as Ee,Qa as he,Sa as ve,Ta as X,U as Se,Xa as Z,a as se,c as ue,nb as fe,ra as be,sa as xe,v as B,vb as Ce,xb as we,zb as w}from"./chunk-4M2FSNLW.js";import{$a as U,$c as te,Aa as E,Ca as ne,Da as P,Fb as C,Gc as L,Ha as K,Hc as z,Ic as R,Jc as O,Kc as j,La as n,Ma as t,N as H,Na as o,Nc as le,Oc as re,Q,Ra as q,Rc as de,Sa as S,Ta as N,Tb as ae,U as s,V as u,Xc as pe,Zc as me,_a as D,ab as k,bb as V,cb as e,eb as F,gb as x,hb as g,ib as h,ja as m,ka as ee,nb as Y,ob as v,qa as b,ra as G,ub as ie,vb as oe,wa as J}from"./chunk-CBLD3XJL.js";var ye=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-upload-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","upload","p-label","PO Upload","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile"]],template:function(r,i){r&1&&o(0,"po-upload",0)},dependencies:[M],encapsulation:2})}return a})();var Ie=a=>({"docs-sample-code-tabs":a}),Pe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-upload-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Upload Basic"),t(),n(4,"a",2),S("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-upload-basic/sample-po-upload-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-upload name="upload" p-label="PO Upload" p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"> </po-upload>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-upload-basic/sample-po-upload-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-upload-basic',
  templateUrl: 'sample-po-upload-basic.component.html',
  standalone: false
})
export class SamplePoUploadBasicComponent {}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-upload-basic"),t(),o(23,"hr")),r&2&&(m(5),P("po-icon "+i.sampleCodeButtonIcon),m(),F(" ",i.sampleCodeButtonLabel,""),m(),E("ngClass",v(4,Ie,i.hideSampleCodeTabs)))},dependencies:[C,y,w,_,ye],encapsulation:2})}return a})();function He(a,Be){if(a&1&&(n(0,"div")(1,"po-widget",22)(2,"form",23),o(3,"po-input",24)(4,"po-select",25)(5,"po-select",26)(6,"po-switch",27)(7,"po-switch",28),t()()()),a&2){let d=N();m(2),E("formGroup",d.actionForm),m(2),E("p-options",d.iconOptions),m(),E("p-options",d.typeOptions)}}var Me=(()=>{class a{fb=Q(de);helperText;allowedExtensions;customLiterals;dragDropHeight;event;formField;help;label;literals;modalActions;maxFiles;maxSize;minSize;properties;restrictions;upload;url;headers;headersLabs;action;customModalActions;actionForm;size;propertiesOptions=[{value:"autoupload",label:"Automatic upload"},{value:"directory",label:"Directory"},{value:"disabled",label:"Disabled"},{value:"disabledRemoveFile",label:"Disabled Remove File"},{value:"dragDrop",label:"Drag Drop"},{value:"requiredUrl",label:"required Url"},{value:"multiple",label:"Multiple upload"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"restrictionsInfo",label:"Hide Restrictions Info"},{value:"selectButton",label:"Hide Select Files Button"},{value:"sendButton",label:"Hide Send Files Button"},{value:"showCustomAction",label:"Add Custom Action to Progress"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"showThumbnail",label:"Show Thumbnail"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];iconOptions=[{value:"an an-download",label:"an an-download"},{value:"an an-Server",label:"an an-Server"},{value:"an an-upload",label:"an an-upload"},{value:"an an-share",label:"an an-share"}];constructor(){this.initializeActionForm()}initializeActionForm(){this.actionForm=this.fb.group({label:[""],icon:[""],type:["default"],visible:[!0],disabled:[!1]})}ngOnInit(){this.restore(),this.actionForm.valueChanges.subscribe(d=>{this.updateAction(d)})}updateAction(d){this.action=d}changeEvent(d){this.event=d}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}changeModalActions(){try{this.customModalActions=JSON.parse(this.modalActions)}catch{this.customModalActions=void 0}}onChangeHeaders(d){try{this.headers=JSON.parse(d)}catch{this.headers=void 0}}onChangeExtension(){let d=this.allowedExtensions.split(",").map(r=>r.trim());this.restrictions=Object.assign({},this.restrictions,{allowedExtensions:d})}onChangeMaxFiles(d){this.restrictions=Object.assign({},this.restrictions,{maxFiles:d})}onChangeMaxSize(d){this.restrictions=Object.assign({},this.restrictions,{maxFileSize:this.getValueInBytes(d)})}onChangeMinSize(d){this.restrictions=Object.assign({},this.restrictions,{minFileSize:this.getValueInBytes(d)})}restore(){this.helperText="",this.allowedExtensions=void 0,this.customLiterals=void 0,this.dragDropHeight=void 0,this.event=void 0,this.formField=void 0,this.label=void 0,this.help=void 0,this.literals="",this.modalActions="",this.maxFiles=void 0,this.maxSize=void 0,this.minSize=void 0,this.properties=[],this.restrictions={},this.upload=void 0,this.url="https://po-sample-api.onrender.com/v1/uploads/addFile",this.headers=void 0,this.headersLabs=void 0,this.actionForm.reset({type:"default",visible:!0}),this.action={label:"",type:"default"},this.customModalActions=[],this.size="medium"}getValueInBytes(d){return 1048576*d}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-upload-labs"]],standalone:!1,decls:29,vars:51,consts:[["fRestrictions","ngForm"],["name","upload",3,"ngModelChange","p-custom-action-click","p-error","p-keydown","p-success","p-upload","p-open-modal-preview","p-remove","ngModel","p-helper","p-auto-upload","p-directory","p-disabled","p-required-url","p-disabled-remove-file","p-drag-drop","p-drag-drop-height","p-form-field","p-help","p-hide-select-button","p-hide-restrictions-info","p-hide-send-button","p-label","p-literals","p-multiple","p-optional","p-required","p-show-required","p-show-thumbnail","p-restrictions","p-size","p-url","p-headers","p-custom-action","p-label-text-wrap","p-custom-modal-actions"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","allowedExtensions","p-help","Digite as extens\xF5es permitidas separadas por v\xEDrgula","p-label","Allowed Extensions","p-placeholder",".png, .jpeg, .jpg",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","maxFiles","p-clean","","p-help","Requer p-multiple habilitado","p-label","Max Files",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","dragDropHeight","p-clean","","p-help","Altura da \xE1rea de arrastar e soltar","p-label","Drag Drop Height","p-min","160",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","minSize","p-clean","","p-help","Em megabytes","p-label","Min File Size",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","maxSize","p-clean","","p-help","Em megabytes","p-label","Max File Size",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","formField","p-clean","","p-label","Form Field",1,"po-md-6",3,"ngModelChange","ngModel"],["name","url","p-clean","","p-label","URL","p-required","",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","headers","p-help",'Ex.: {"Authorization": "12312414"}',"p-label","Headers",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","literals","p-help",'Ex.: {"selectFile": "Select file", "deleteFile": "Delete file", "cancel": "Cancel sending"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","customModalActions","p-help",'Ex.: [{"label": "Label", "disabled": false}]',"p-label","Custom Modal Actions",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel","p-disabled"],["name","properties","p-columns","4","p-help","Select any options","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],[1,"po-row","po-mt-1"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"],["p-title","Action Button"],[1,"po-row",3,"formGroup"],["formControlName","label","p-label","Label",1,"po-md-6","po-lg-4"],["formControlName","icon","p-label","Icon",1,"po-md-6","po-lg-3",3,"p-options"],["formControlName","type","p-label","Type",1,"po-md-6","po-lg-3",3,"p-options"],["formControlName","disabled","p-label","Disabled",1,"po-md-3","po-lg-2"],["formControlName","visible","p-label","Visible",1,"po-md-3","po-lg-2"]],template:function(r,i){if(r&1){let p=q();n(0,"po-upload",1),h("ngModelChange",function(l){return s(p),g(i.upload,l)||(i.upload=l),u(l)}),S("p-custom-action-click",function(){return s(p),u(i.changeEvent("p-custom-action-click"))})("p-error",function(){return s(p),u(i.changeEvent("p-error"))})("p-keydown",function(){return s(p),u(i.changeEvent("p-keydown"))})("p-success",function(){return s(p),u(i.changeEvent("p-success"))})("p-upload",function(){return s(p),u(i.changeEvent("p-upload"))})("p-upload",function(){return s(p),u(i.changeEvent("p-upload"))})("p-open-modal-preview",function(){return s(p),u(i.changeEvent("p-open-modal-preview"))})("p-remove",function(){return s(p),u(i.changeEvent("p-remove"))}),t(),o(1,"po-divider"),n(2,"div",2),o(3,"po-info",3),ie(4,"json"),o(5,"po-info",4),t(),o(6,"po-divider"),n(7,"div",2)(8,"form",null,0)(10,"po-input",5),h("ngModelChange",function(l){return s(p),g(i.allowedExtensions,l)||(i.allowedExtensions=l),u(l)}),S("p-change",function(){return s(p),u(i.onChangeExtension())}),t(),n(11,"po-number",6),h("ngModelChange",function(l){return s(p),g(i.maxFiles,l)||(i.maxFiles=l),u(l)}),S("p-change",function(){return s(p),u(i.onChangeMaxFiles(i.maxFiles))}),t(),n(12,"po-number",7),h("ngModelChange",function(l){return s(p),g(i.dragDropHeight,l)||(i.dragDropHeight=l),u(l)}),t(),n(13,"po-number",8),h("ngModelChange",function(l){return s(p),g(i.minSize,l)||(i.minSize=l),u(l)}),S("p-change",function(){return s(p),u(i.onChangeMinSize(i.minSize))}),t(),n(14,"po-number",9),h("ngModelChange",function(l){return s(p),g(i.maxSize,l)||(i.maxSize=l),u(l)}),S("p-change",function(){return s(p),u(i.onChangeMaxSize(i.maxSize))}),t(),o(15,"po-divider"),n(16,"po-input",10),h("ngModelChange",function(l){return s(p),g(i.label,l)||(i.label=l),u(l)}),t(),n(17,"po-input",11),h("ngModelChange",function(l){return s(p),g(i.help,l)||(i.help=l),u(l)}),t(),n(18,"po-input",12),h("ngModelChange",function(l){return s(p),g(i.helperText,l)||(i.helperText=l),u(l)}),t(),n(19,"po-input",13),h("ngModelChange",function(l){return s(p),g(i.formField,l)||(i.formField=l),u(l)}),t(),n(20,"po-input",14),h("ngModelChange",function(l){return s(p),g(i.url,l)||(i.url=l),u(l)}),t(),n(21,"po-input",15),h("ngModelChange",function(l){return s(p),g(i.headersLabs,l)||(i.headersLabs=l),u(l)}),S("p-change",function(l){return s(p),u(i.onChangeHeaders(l))}),t(),n(22,"po-input",16),h("ngModelChange",function(l){return s(p),g(i.literals,l)||(i.literals=l),u(l)}),S("p-change",function(){return s(p),u(i.changeLiterals())}),t(),n(23,"po-input",17),h("ngModelChange",function(l){return s(p),g(i.modalActions,l)||(i.modalActions=l),u(l)}),S("p-change",function(){return s(p),u(i.changeModalActions())}),t(),n(24,"po-checkbox-group",18),h("ngModelChange",function(l){return s(p),g(i.properties,l)||(i.properties=l),u(l)}),t(),J(25,He,8,3,"div"),n(26,"po-radio-group",19),h("ngModelChange",function(l){return s(p),g(i.size,l)||(i.size=l),u(l)}),t(),n(27,"div",20)(28,"po-button",21),S("p-click",function(){return s(p),u(i.restore())}),t()()()()}r&2&&(x("ngModel",i.upload),E("p-helper",i.helperText)("p-auto-upload",i.properties.includes("autoupload"))("p-directory",i.properties.includes("directory"))("p-disabled",i.properties.includes("disabled"))("p-required-url",i.properties.includes("requiredUrl"))("p-disabled-remove-file",i.properties.includes("disabledRemoveFile"))("p-drag-drop",i.properties.includes("dragDrop"))("p-drag-drop-height",i.dragDropHeight)("p-form-field",i.formField)("p-help",i.help)("p-hide-select-button",i.properties.includes("selectButton"))("p-hide-restrictions-info",i.properties.includes("restrictionsInfo"))("p-hide-send-button",i.properties.includes("sendButton"))("p-label",i.label)("p-literals",i.customLiterals)("p-multiple",i.properties.includes("multiple"))("p-optional",i.properties.includes("optional"))("p-required",i.properties.includes("required"))("p-show-required",i.properties.includes("showRequired"))("p-show-thumbnail",i.properties.includes("showThumbnail"))("p-restrictions",i.restrictions)("p-size",i.size)("p-url",i.url)("p-headers",i.headers)("p-custom-action",i.action)("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-custom-modal-actions",i.customModalActions),m(3),E("p-value",oe(4,49,i.upload)),m(2),E("p-value",i.event),m(5),x("ngModel",i.allowedExtensions),m(),x("ngModel",i.maxFiles),m(),x("ngModel",i.dragDropHeight),m(),x("ngModel",i.minSize),m(),x("ngModel",i.maxSize),m(2),x("ngModel",i.label),m(),x("ngModel",i.help),m(),x("ngModel",i.helperText),m(),x("ngModel",i.formField),m(),x("ngModel",i.url),m(),x("ngModel",i.headersLabs),m(),x("ngModel",i.literals),m(),x("ngModel",i.modalActions),E("p-disabled",!i.properties.includes("showThumbnail")),m(),x("ngModel",i.properties),E("p-options",i.propertiesOptions),m(),K(i.properties.includes("showCustomAction")?25:-1),m(),x("ngModel",i.size),E("p-options",i.sizeOptions))},dependencies:[j,L,z,O,R,le,re,B,se,ce,Ee,W,ge,ve,M,be,Z,$,ae],encapsulation:2})}return a})();var Ge=a=>({"docs-sample-code-tabs":a}),Te=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-upload-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Upload Labs"),t(),n(4,"a",2),S("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-upload-labs/sample-po-upload-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-upload
  name="upload"
  [(ngModel)]="upload"
  [p-helper]="helperText"
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
  [p-show-thumbnail]="properties.includes('showThumbnail')"
  [p-restrictions]="restrictions"
  [p-size]="size"
  [p-url]="url"
  [p-headers]="headers"
  [p-custom-action]="action"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-custom-modal-actions]="customModalActions"
  (p-custom-action-click)="changeEvent('p-custom-action-click')"
  (p-error)="changeEvent('p-error')"
  (p-keydown)="changeEvent('p-keydown')"
  (p-success)="changeEvent('p-success')"
  (p-upload)="changeEvent('p-upload')"
  (p-upload)="changeEvent('p-upload')"
  (p-open-modal-preview)="changeEvent('p-open-modal-preview')"
  (p-remove)="changeEvent('p-remove')"
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

    <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

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

    <po-input
      class="po-md-12 po-lg-6"
      name="customModalActions"
      [(ngModel)]="modalActions"
      [p-disabled]="!properties.includes('showThumbnail')"
      p-help='Ex.: [{"label": "Label", "disabled": false}]'
      p-label="Custom Modal Actions"
      (p-change)="changeModalActions()"
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
  PoUploadLiterals,
  PoModalAction
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-labs',
  templateUrl: './sample-po-upload-labs.component.html',
  standalone: false
})
export class SamplePoUploadLabsComponent implements OnInit {
  private fb = inject(FormBuilder);

  helperText: string;
  allowedExtensions: string;
  customLiterals: PoUploadLiterals;
  dragDropHeight: number;
  event: string;
  formField: string;
  help: string;
  label: string;
  literals: string;
  modalActions: string;
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
  customModalActions: Array<PoModalAction>;
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
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'showThumbnail', label: 'Show Thumbnail' }
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

  changeModalActions() {
    try {
      this.customModalActions = JSON.parse(this.modalActions);
    } catch {
      this.customModalActions = undefined;
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
    this.helperText = '';
    this.allowedExtensions = undefined;
    this.customLiterals = undefined;
    this.dragDropHeight = undefined;
    this.event = undefined;
    this.formField = undefined;
    this.label = undefined;
    this.help = undefined;
    this.literals = '';
    this.modalActions = '';
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
    this.customModalActions = [];
    this.size = 'medium';
  }

  private getValueInBytes(value: number) {
    return 1048576 * value;
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-upload-labs"),t(),o(23,"hr")),r&2&&(m(5),P("po-icon "+i.sampleCodeButtonIcon),m(),F(" ",i.sampleCodeButtonLabel,""),m(),E("ngClass",v(4,Ge,i.hideSampleCodeTabs)))},dependencies:[C,y,w,_,Me],encapsulation:2})}return a})();var Ke=["formOpportunity"],Ye=()=>({maxFileSize:"204800"}),qe=(()=>{class a{poNotification=Q(xe);formOpportunity;biograph;linkedin;name;resume;uploadedResume;ngOnInit(){this.uploadedResume=!1}apply(){this.formOpportunity.reset(),this.uploadedResume=!1,this.poNotification.success("You were applied successfully")}resumeUploadError(){this.uploadedResume=!1}resumeUploadSuccess(){this.uploadedResume=!0}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-upload-resume"]],viewQuery:function(r,i){if(r&1&&D(Ke,7),r&2){let p;U(p=k())&&(i.formOpportunity=p.first)}},standalone:!1,decls:12,vars:7,consts:[["formOpportunity","ngForm"],[1,"po-row"],["name","name","p-clean","","p-label","Full Name","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"],["name","biograph","p-label","Biograph","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"],["name","linkedin","p-clean","","p-label","LinkedIn URL",1,"po-md-12",3,"ngModelChange","ngModel"],["name","resume","p-label","Resume","p-required","","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",1,"po-md-12",3,"ngModelChange","p-error","p-success","ngModel","p-restrictions"],["p-label","Apply",1,"po-md-4",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let p=q();n(0,"form",null,0)(2,"div",1)(3,"po-input",2),h("ngModelChange",function(l){return s(p),g(i.name,l)||(i.name=l),u(l)}),t()(),n(4,"div",1)(5,"po-textarea",3),h("ngModelChange",function(l){return s(p),g(i.biograph,l)||(i.biograph=l),u(l)}),t()(),n(6,"div",1)(7,"po-url",4),h("ngModelChange",function(l){return s(p),g(i.linkedin,l)||(i.linkedin=l),u(l)}),t()(),n(8,"div",1)(9,"po-upload",5),h("ngModelChange",function(l){return s(p),g(i.resume,l)||(i.resume=l),u(l)}),S("p-error",function(){return s(p),u(i.resumeUploadError())})("p-success",function(){return s(p),u(i.resumeUploadSuccess())}),t()(),n(10,"div",1)(11,"po-button",6),S("p-click",function(){return s(p),u(i.apply())}),t()()()}if(r&2){let p=V(1);m(3),x("ngModel",i.name),m(2),x("ngModel",i.biograph),m(2),x("ngModel",i.linkedin),m(2),x("ngModel",i.resume),E("p-restrictions",Y(6,Ye)),m(2),E("p-disabled",p.invalid||!i.uploadedResume)}},dependencies:[j,L,z,O,R,B,W,X,M,he],encapsulation:2})}return a})();var Ze=a=>({"docs-sample-code-tabs":a}),De=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-upload-resume-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Upload - Resume"),t(),n(4,"a",2),S("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-upload-resume/sample-po-upload-resume.component.html"),t(),n(13,"pre",7),e(14,`<form #formOpportunity="ngForm">
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
`),t()()()()(),n(21,"div",10),o(22,"sample-po-upload-resume"),t(),o(23,"hr")),r&2&&(m(5),P("po-icon "+i.sampleCodeButtonIcon),m(),F(" ",i.sampleCodeButtonLabel,""),m(),E("ngClass",v(4,Ze,i.hideSampleCodeTabs)))},dependencies:[C,y,w,_,qe],encapsulation:2})}return a})();var et=["upload"],tt=["stepper"],nt=["submitForm"],it=["sucessData"],ot=a=>({"po-invisible":a});function at(a,Be){if(a&1){let d=q();n(0,"div",8)(1,"div",9)(2,"p",11),e(3,"Confirm informations"),t()(),o(4,"po-info",28)(5,"po-info",29)(6,"po-info",30),n(7,"po-button",31),S("p-click",function(){s(d);let i=N();return u(i.confirmSubmit())}),t()()}if(a&2){let d=N();m(4),E("p-value",d.project[0].name||"N/D"),m(),E("p-value",d.title||"N/D"),m(),E("p-value",d.description||"N/D")}}var Ue=(()=>{class a{upload;stepper;submitForm;sucessData;confirm={action:()=>{this.sucessData.close()},label:"Return"};description;project=[];restrictions={allowedExtensions:[".zip",".7z",".tar",".wim"]};title;ngOnInit(){this.newSubmit()}canSubmitProject(){return!!(this.project&&this.project.length)&&this.title&&this.description}confirmSubmit(){this.sucessData.open(),this.newSubmit(),this.stepper.first()}submitProject(){this.upload.sendFiles(),this.stepper.next()}newSubmit(){this.project=[],this.title=void 0,this.description=void 0}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-upload-rs"]],viewQuery:function(r,i){if(r&1&&(D(et,7),D(tt,7),D(nt,7),D(it,7)),r&2){let p;U(p=k())&&(i.upload=p.first),U(p=k())&&(i.stepper=p.first),U(p=k())&&(i.submitForm=p.first),U(p=k())&&(i.sucessData=p.first)}},standalone:!1,decls:47,vars:15,consts:[["stepper",""],["submitForm","ngForm"],["upload",""],["sucessData",""],[1,"po-row"],["p-orientation","vertical","p-step-icons","","p-step-size","42",1,"po-lg-10","po-offset-lg-2","po-offset-xl-2"],["p-label","Welcome"],["p-title","Realize & Show",1,"po-lg-8","po-mt-2"],[1,"tht-row"],[1,"po-sm-12"],[1,"po-font-title"],[1,"po-font-text-large"],["p-label","Yes!","p-kind","primary",1,"po-sm-12","po-mt-2",3,"p-click"],["p-label","Submit",3,"p-can-active-next-step"],[1,"po-lg-10"],[1,"po-font-subtitle"],[1,"po-font-text-small-bold"],[1,"po-font-title","po-lg-2"],["p-icon","an an-cloud-arrow-up",1,"po-clickable",3,"click"],["p-icon","an an-fill an-x-circle",1,"po-clickable",3,"click","ngClass"],[1,"po-sm-12","po-mt-3","po-font-text-bold"],["name","project","p-hide-select-button","","p-hide-send-button","","p-required","","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",1,"po-sm-12",3,"ngModelChange","ngModel","p-restrictions"],["name","title","p-label","Title","p-placeholder","Be creative","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],["name","description","p-label","Description","p-maxlength","140","p-placeholder","Resume on few words","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],["p-label","Done",1,"po-sm-12","po-mt-2",3,"p-click","p-disabled"],["p-label","Confirm"],["p-title","Confirmation",3,"p-primary-action"],[1,"po-sm-12","po-font-title"],["p-label","File name",1,"po-md-4",3,"p-value"],["p-label","Title",1,"po-md-4",3,"p-value"],["p-label","Description",1,"po-md-4",3,"p-value"],["p-label","Confirm",1,"po-sm-12","po-mt-2","po-mb-2",3,"p-click"]],template:function(r,i){if(r&1){let p=q();n(0,"div",4)(1,"po-stepper",5,0)(3,"po-step",6)(4,"po-widget",7)(5,"div",8)(6,"div",9)(7,"h1",10),e(8,"Welcome, TOTVS!"),t(),n(9,"p",11),e(10,"Let's submit your project?"),t()()(),n(11,"div",8)(12,"po-button",12),S("p-click",function(){s(p);let l=V(2);return u(l.next())}),t()()()(),n(13,"po-step",13)(14,"po-widget",7)(15,"form",null,1)(17,"div",4)(18,"div",14)(19,"div",4)(20,"p",15),e(21,"Please, select your project:"),t()(),n(22,"div",4)(23,"p",16),e(24,"*Upload a zip file containing your project."),t()()(),n(25,"div",17)(26,"po-icon",18),S("click",function(){s(p);let l=V(32);return u(l.selectFiles())}),t(),n(27,"po-icon",19),S("click",function(){s(p);let l=V(32);return u(l.clear())}),t()()(),n(28,"div",4)(29,"label",20),e(30,"Attached"),t(),n(31,"po-upload",21,2),h("ngModelChange",function(l){return s(p),g(i.project,l)||(i.project=l),u(l)}),t()(),n(33,"div",4)(34,"po-input",22),h("ngModelChange",function(l){return s(p),g(i.title,l)||(i.title=l),u(l)}),t()(),n(35,"div",4)(36,"po-textarea",23),h("ngModelChange",function(l){return s(p),g(i.description,l)||(i.description=l),u(l)}),t()(),n(37,"div",8)(38,"po-button",24),S("p-click",function(){return s(p),u(i.submitProject())}),t()()()()(),n(39,"po-step",25)(40,"po-widget",7),J(41,at,8,3,"div",8),t()()()(),n(42,"po-modal",26,3)(44,"div",4)(45,"p",27),e(46,"Project successfully submited!"),t()()()}r&2&&(m(13),E("p-can-active-next-step",i.canSubmitProject.bind(i)),m(14),E("ngClass",v(13,ot,i.project.length<1)),m(2),ne("po-invisible",i.project.length<1),m(2),x("ngModel",i.project),E("p-restrictions",i.restrictions),m(3),x("ngModel",i.title),E("p-disabled",i.project.length<1),m(2),x("ngModel",i.description),E("p-disabled",i.project.length<1),m(2),E("p-disabled",i.canSubmitProject()),m(3),K(i.canSubmitProject()?41:-1),m(),E("p-primary-action",i.confirm))},dependencies:[C,j,L,z,O,R,B,W,X,M,ue,Z,Se,Ce,we,$],encapsulation:2})}return a})();var rt=a=>({"docs-sample-code-tabs":a}),ke=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-upload-rs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Upload - Realize & Show"),t(),n(4,"a",2),S("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-upload-rs/sample-po-upload-rs.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
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
`),t()()()()(),n(21,"div",10),o(22,"sample-po-upload-rs"),t(),o(23,"hr")),r&2&&(m(5),P("po-icon "+i.sampleCodeButtonIcon),m(),F(" ",i.sampleCodeButtonLabel,""),m(),E("ngClass",v(4,rt,i.hideSampleCodeTabs)))},dependencies:[C,y,w,_,Ue],encapsulation:2})}return a})();var Ae=(()=>{class a{customAction={icon:"an an-download",type:"default",visible:!1};uploadSuccess(){this.customAction.visible=!0}onCustomActionClick(d){if(!d.rawFile){console.error("Arquivo inv\xE1lido ou n\xE3o encontrado.");return}this.downloadFile(d.rawFile)}downloadFile(d){let r=URL.createObjectURL(d),i=document.createElement("a");i.href=r,i.download=d.name,i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(r)}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-upload-download"]],standalone:!1,decls:1,vars:2,consts:[["name","upload","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",3,"p-custom-action-click","p-success","p-custom-action","p-multiple"]],template:function(r,i){r&1&&(n(0,"po-upload",0),S("p-custom-action-click",function(c){return i.onCustomActionClick(c)})("p-success",function(){return i.uploadSuccess()}),t()),r&2&&E("p-custom-action",i.customAction)("p-multiple",!0)},dependencies:[M],encapsulation:2})}return a})();var mt=a=>({"docs-sample-code-tabs":a}),Ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-upload-download-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Upload - with Download Button"),t(),n(4,"a",2),S("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-upload-download/sample-po-upload-download.component.html"),t(),n(13,"pre",7),e(14,`<po-upload
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
`),t()()()()(),n(21,"div",10),o(22,"sample-po-upload-download"),t(),o(23,"hr")),r&2&&(m(5),P("po-icon "+i.sampleCodeButtonIcon),m(),F(" ",i.sampleCodeButtonLabel,""),m(),E("ngClass",v(4,mt,i.hideSampleCodeTabs)))},dependencies:[C,y,w,_,Ae],encapsulation:2})}return a})();var ut=()=>[".png",".jpg",".jpeg",".gif"],ct=a=>({allowedExtensions:a,maxFiles:5,maxFileSize:2057280}),Le=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-upload-preview"]],standalone:!1,decls:1,vars:6,consts:[["name","upload","p-label","PO Upload com Pr\xE9-visualiza\xE7\xE3o","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",3,"p-restrictions","p-show-thumbnail","p-multiple"]],template:function(r,i){r&1&&o(0,"po-upload",0),r&2&&E("p-restrictions",v(4,ct,Y(3,ut)))("p-show-thumbnail",!0)("p-multiple",!0)},dependencies:[M],encapsulation:2})}return a})();var St=a=>({"docs-sample-code-tabs":a}),ze=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-upload-preview-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Upload - with Preview"),t(),n(4,"a",2),S("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-upload-preview/sample-po-upload-preview.component.html"),t(),n(13,"pre",7),e(14,`<po-upload
  name="upload"
  p-label="PO Upload com Pr\xE9-visualiza\xE7\xE3o"
  p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
  [p-restrictions]="{ allowedExtensions: ['.png', '.jpg', '.jpeg', '.gif'], maxFiles: 5, maxFileSize: 2057280 }"
  [p-show-thumbnail]="true"
  [p-multiple]="true"
></po-upload>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-upload-preview/sample-po-upload-preview.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';
import { PoProgressAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-preview',
  templateUrl: 'sample-po-upload-preview.component.html',
  standalone: false
})
export class SamplePoUploadPreviewComponent {}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-upload-preview"),t(),o(23,"hr")),r&2&&(m(5),P("po-icon "+i.sampleCodeButtonIcon),m(),F(" ",i.sampleCodeButtonLabel,""),m(),E("ngClass",v(4,St,i.hideSampleCodeTabs)))},dependencies:[C,y,w,_,Le],encapsulation:2})}return a})();var Re=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-upload-doc"]],standalone:!1,decls:2212,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-html"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","Array<PoModalAction>"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoUploadComponent"),t()(),n(21,"div",2)(22,"p"),e(23,"O componente "),n(24,"code"),e(25,"po-upload"),t(),e(26,` permite que o usu\xE1rio envie arquivo(s) ao servidor e acompanhe o progresso.
Este componente tamb\xE9m possibilita algumas configura\xE7\xF5es como: \u2013 Envio de diret\xF3rios, onde ele acessa o diret\xF3rio selecionado assim como seus sub-diret\xF3rios;`),t(),n(27,"ul")(28,"li"),e(29,"M\xFAltipla sele\xE7\xE3o, onde o usu\xE1rio pode enviar mais de um arquivo ao servidor."),t(),n(30,"li"),e(31,`Auto envio, onde o arquivo \xE9 enviado imediatamente ap\xF3s a sele\xE7\xE3o do usu\xE1rio, n\xE3o necessitando que o usu\xE1rio
clique em enviar.`),t(),n(32,"li"),e(33,"Restri\xE7\xF5es de formatos de arquivo e tamanho."),t(),n(34,"li"),e(35,"Fun\xE7\xE3o de sucesso que ser\xE1 disparada quando os arquivos forem enviados com sucesso."),t(),n(36,"li"),e(37,"Fun\xE7\xE3o de erro que ser\xE1 disparada quando houver erro no envio dos arquivos."),t(),n(38,"li"),e(39,"Permite habilitar uma \xE1rea onde os arquivos podem ser arrastados."),t()(),n(40,"h4"),e(41,"Tokens customiz\xE1veis"),t(),n(42,"p"),e(43,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),n(44,"blockquote")(45,"p"),e(46,"Para maiores informa\xE7\xF5es, acesse o guia "),n(47,"a",6),e(48,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(49,"."),t()(),n(50,"table")(51,"thead")(52,"tr")(53,"th"),e(54,"Propriedade"),t(),n(55,"th"),e(56,"Descri\xE7\xE3o"),t(),n(57,"th"),e(58,"Valor Padr\xE3o"),t()()(),n(59,"tbody")(60,"tr")(61,"td")(62,"strong"),e(63,"TEXT SUPPORT"),t()(),o(64,"td")(65,"td"),t(),n(66,"tr")(67,"td")(68,"code"),e(69,"--font-family-text-support"),t()(),n(70,"td"),e(71,"Fam\xEDlia tipogr\xE1fica usada no texto de suporte"),t(),n(72,"td")(73,"code"),e(74,"var(--font-family-theme)"),t()()(),n(75,"tr")(76,"td")(77,"code"),e(78,"--text-color-text-support"),t()(),n(79,"td"),e(80,"Cor da fonte no texto de suporte"),t(),n(81,"td")(82,"code"),e(83,"var(--color-neutral-dark-90)"),t()()(),n(84,"tr")(85,"td")(86,"strong"),e(87,"UPLOAD CONTENT"),t()(),o(88,"td")(89,"td"),t(),n(90,"tr")(91,"td")(92,"code"),e(93,"--background-color-content"),t(),e(94," \xA0"),t(),n(95,"td"),e(96,"Cor de fundo"),t(),n(97,"td")(98,"code"),e(99,"var(--color-neutral-light-10)"),t()()(),n(100,"tr")(101,"td")(102,"code"),e(103,"--border-color-content"),t()(),n(104,"td"),e(105,"Cor da borda"),t(),n(106,"td")(107,"code"),e(108,"var(--color-neutral-light-20)"),t()()(),n(109,"tr")(110,"td")(111,"code"),e(112,"--border-radius-content"),t()(),n(113,"td"),e(114,"Cont\xE9m o valor do raio dos cantos do elemento"),t(),n(115,"td")(116,"code"),e(117,"var(--border-radius-md)"),t()()(),n(118,"tr")(119,"td")(120,"code"),e(121,"--text-color-file-name"),t()(),n(122,"td"),e(123,"Cor do texto do nome do arquivo"),t(),n(124,"td")(125,"code"),e(126,"var(--color-neutral-dark-90)"),t()()(),n(127,"tr")(128,"td")(129,"code"),e(130,"--font-family-file-name"),t()(),n(131,"td"),e(132,"Fam\xEDlia tipogr\xE1fica usada no texto do arquivo"),t(),n(133,"td")(134,"code"),e(135,"var(--font-family-theme)"),t()()(),n(136,"tr")(137,"td")(138,"code"),e(139,"--text-color-info-bar"),t()(),n(140,"td"),e(141,"Cor do texto de informa\xE7\xE3o"),t(),n(142,"td")(143,"code"),e(144,"var(--color-neutral-mid-60)"),t()()(),n(145,"tr")(146,"td")(147,"code"),e(148,"--font-family-info-bar"),t()(),n(149,"td"),e(150,"Fam\xEDlia tipogr\xE1fica usada no texto de informa\xE7\xE3o"),t(),n(151,"td")(152,"code"),e(153,"var(--font-family-theme)"),t()()(),n(154,"tr")(155,"td")(156,"strong"),e(157,"ERROR STATE"),t()(),o(158,"td")(159,"td"),t(),n(160,"tr")(161,"td")(162,"code"),e(163,"--background-color-content-error"),t()(),n(164,"td"),e(165,"Cor de fundo do container de erro"),t(),n(166,"td")(167,"code"),e(168,"var(--color-neutral-light-00)"),t()()(),n(169,"tr")(170,"td")(171,"code"),e(172,"--border-color-content-error"),t()(),n(173,"td"),e(174,"Cor da borda do container de erro"),t(),n(175,"td")(176,"code"),e(177,"var(--color-feedback-negative-base)"),t()()(),n(178,"tr")(179,"td")(180,"code"),e(181,"--text-color-error"),t()(),n(182,"td"),e(183,"Cor do texto do container de erro"),t(),n(184,"td")(185,"code"),e(186,"var(--color-feedback-negative-dark)"),t()()(),n(187,"tr")(188,"td")(189,"code"),e(190,"--color-icon-error"),t()(),n(191,"td"),e(192,"Cor do \xEDcone no estado de erro"),t(),n(193,"td")(194,"code"),e(195,"var(--color-feedback-negative-base)"),t()()(),n(196,"tr")(197,"td")(198,"code"),e(199,"--font-family-error"),t()(),n(200,"td"),e(201,"Fam\xEDlia tipogr\xE1fica usada no texto de erro"),t(),n(202,"td")(203,"code"),e(204,"var(--font-family-theme)"),t()()(),n(205,"tr")(206,"td")(207,"strong"),e(208,"UPLOADED STATE"),t()(),o(209,"td")(210,"td"),t(),n(211,"tr")(212,"td")(213,"code"),e(214,"--background-color-content-uploaded"),t()(),n(215,"td"),e(216,"Cor de fundo do container com status de enviado"),t(),n(217,"td")(218,"code"),e(219,"var(--color-neutral-light-00)"),t()()(),n(220,"tr")(221,"td")(222,"code"),e(223,"--border-color-content-uploaded"),t()(),n(224,"td"),e(225,"Cor da borda do container com status de enviado"),t(),n(226,"td")(227,"code"),e(228,"var(--color-neutral-light-20)"),t()()(),n(229,"tr")(230,"td")(231,"strong"),e(232,"INTERACTIVE STATE"),t()(),o(233,"td")(234,"td"),t(),n(235,"tr")(236,"td")(237,"code"),e(238,"--text-color-file-name-interactive"),t()(),n(239,"td"),e(240,"Cor do texto do nome do arquivo quando interativo"),t(),n(241,"td")(242,"code"),e(243,"var(--color-action-default)"),t()()(),n(244,"tr")(245,"td")(246,"strong"),e(247,"THUMBNAIL"),t()(),o(248,"td")(249,"td"),t(),n(250,"tr")(251,"td")(252,"code"),e(253,"--color-icon-thumbnail"),t()(),n(254,"td"),e(255,"Cor do \xEDcone na thumbnail"),t(),n(256,"td")(257,"code"),e(258,"var(--color-action-default)"),t()()(),n(259,"tr")(260,"td")(261,"code"),e(262,"--border-width-thumbnail"),t()(),n(263,"td"),e(264,"Tamanho da fonte na thumbnail"),t(),n(265,"td")(266,"code"),e(267,"var(--border-width-sm)"),t()()(),n(268,"tr")(269,"td")(270,"code"),e(271,"--border-radius-thumbnail"),t()(),n(272,"td"),e(273,"Cont\xE9m o valor do raio dos cantos na thumbnail"),t(),n(274,"td")(275,"code"),e(276,"var(--border-radius-md)"),t()()(),n(277,"tr")(278,"td")(279,"code"),e(280,"--background-color-thumbnail"),t()(),n(281,"td"),e(282,"Cor de fundo na thumbnail"),t(),n(283,"td")(284,"code"),e(285,"var(--color-neutral-light-05)"),t()()(),n(286,"tr")(287,"td")(288,"strong"),e(289,"Focused"),t()(),o(290,"td")(291,"td"),t(),n(292,"tr")(293,"td")(294,"code"),e(295,"--outline-color-focused"),t()(),n(296,"td"),e(297,"Cor do outline do estado de focus"),t(),n(298,"td")(299,"code"),e(300,"var(--color-action-focus)"),t()()()()()(),n(301,"div",7)(302,"h4",8),e(303,"Seletor"),t(),n(304,"pre",9),e(305,`<po-upload
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-auto-upload="boolean"
    p-custom-action="PoProgressAction"
    (p-custom-action-click)="EventEmitter"
    p-custom-modal-actions="Array<PoModalAction>"
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
    (p-cancel)="EventEmitter"
    (p-error)="EventEmitter"
    (p-open-modal-preview)="EventEmitter"
    (p-remove)="EventEmitter"
    (p-success)="EventEmitter"
    (p-upload)="EventEmitter"
    p-optional="boolean"
    p-helper="PoHelperOptions | string"
    p-required="boolean"
    p-required-url="boolean"
    p-show-required="boolean"
    p-show-thumbnail="boolean"
    p-size="string"
    p-url="string" >
</po-upload>
`),t()(),n(306,"h4",10),e(307,"Propriedades"),t(),n(308,"table",11)(309,"tr",12)(310,"th",13),e(311,"Nome"),t(),n(312,"th",13),e(313,"Tipo"),t(),n(314,"th",13),e(315,"Padr\xE3o"),t(),n(316,"th",13),e(317,"Descri\xE7\xE3o"),t()(),n(318,"tr",14)(319,"td",15)(320,"div",16)(321,"span",17),e(322," (p-additional-help)"),o(323,"br"),t()(),n(324,"div",18),e(325,"Deprecated"),t()(),n(326,"td",19)(327,"code",20),e(328,"EventEmitter"),t()(),n(329,"td",21),e(330,"-"),t(),n(331,"td",22)(332,"em")(333,"strong"),e(334,"(opcional)"),t()(),n(335,"p"),e(336,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),t(),n(337,"blockquote")(338,"p"),e(339,"Essa propriedade est\xE1 "),n(340,"strong"),e(341,"depreciada"),t(),e(342," e ser\xE1 removida na vers\xE3o "),n(343,"code"),e(344,"23.x.x"),t(),e(345,". Recomendamos utilizar a propriedade "),n(346,"code"),e(347,"p-helper"),t(),e(348," que oferece mais recursos e flexibilidade."),t()()()(),n(349,"tr",14)(350,"td",15)(351,"div",23)(352,"span",24),e(353," p-additional-help-tooltip"),o(354,"br"),t()(),n(355,"div",18),e(356,"Deprecated"),t()(),n(357,"td",19)(358,"code",25),e(359,"string"),t()(),n(360,"td",21),e(361,"-"),t(),n(362,"td",22)(363,"em")(364,"strong"),e(365,"(opcional)"),t()(),n(366,"p"),e(367,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),n(368,"code"),e(369,"po-helper"),t(),e(370,`.
`),n(371,"strong"),e(372,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(373,"blockquote")(374,"p"),e(375,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),n(376,"blockquote")(377,"p"),e(378,"Essa propriedade est\xE1 "),n(379,"strong"),e(380,"depreciada"),t(),e(381," e ser\xE1 removida na vers\xE3o "),n(382,"code"),e(383,"23.x.x"),t(),e(384,". Recomendamos utilizar a propriedade "),n(385,"code"),e(386,"p-helper"),t(),e(387," que oferece mais recursos e flexibilidade."),t()()()(),n(388,"tr",14)(389,"td",15)(390,"div",23)(391,"span",24),e(392," p-append-in-body"),o(393,"br"),t()()(),n(394,"td",19)(395,"code",26),e(396,"boolean"),t()(),n(397,"td",21)(398,"p")(399,"code"),e(400,"false"),t()()(),n(401,"td",22)(402,"em")(403,"strong"),e(404,"(opcional)"),t()(),n(405,"p"),e(406,"Define que o popover ("),n(407,"code"),e(408,"p-helper"),t(),e(409,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o dentro do componente. Essa
op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o
posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),n(410,"blockquote")(411,"p"),e(412,"Quando utilizado com "),n(413,"code"),e(414,"p-helper"),t(),e(415,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),t()()()(),n(416,"tr",14)(417,"td",15)(418,"div",23)(419,"span",24),e(420," p-auto-focus"),o(421,"br"),t()()(),n(422,"td",19)(423,"code",26),e(424,"boolean"),t()(),n(425,"td",21)(426,"p")(427,"code"),e(428,"false"),t()()(),n(429,"td",22)(430,"em")(431,"strong"),e(432,"(opcional)"),t()(),n(433,"p"),e(434,"Aplica foco no elemento ao ser iniciado."),t(),n(435,"blockquote")(436,"p"),e(437,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(438,"tr",14)(439,"td",15)(440,"div",23)(441,"span",24),e(442," p-auto-upload"),o(443,"br"),t()()(),n(444,"td",19)(445,"code",26),e(446,"boolean"),t()(),n(447,"td",21)(448,"p")(449,"code"),e(450,"false"),t()()(),n(451,"td",22)(452,"em")(453,"strong"),e(454,"(opcional)"),t()(),n(455,"p"),e(456,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),t(),n(457,"blockquote")(458,"p"),e(459,"Esta propriedade funciona somente se a propriedade "),n(460,"code"),e(461,"p-url"),t(),e(462," tiver um valor atribu\xEDdo."),t()()()(),n(463,"tr",14)(464,"td",15)(465,"div",23)(466,"span",24),e(467," p-custom-action"),o(468,"br"),t()()(),n(469,"td",19)(470,"code",27),e(471,"PoProgressAction"),t()(),n(472,"td",21),e(473,"-"),t(),n(474,"td",22)(475,"em")(476,"strong"),e(477,"(opcional)"),t()(),n(478,"p"),e(479,"Define uma a\xE7\xE3o personalizada no componente "),n(480,"code"),e(481,"po-upload"),t(),e(482,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),t(),n(483,"p"),e(484,"A a\xE7\xE3o deve implementar a interface "),n(485,"strong"),e(486,"PoProgressAction"),t(),e(487,", permitindo configurar propriedades como:"),t(),n(488,"ul")(489,"li")(490,"code"),e(491,"label"),t(),e(492,": Texto do bot\xE3o."),t(),n(493,"li")(494,"code"),e(495,"icon"),t(),e(496,": \xCDcone a ser exibido no bot\xE3o."),t(),n(497,"li")(498,"code"),e(499,"type"),t(),e(500,": Tipo de bot\xE3o (ex.: "),n(501,"code"),e(502,"danger"),t(),e(503," ou "),n(504,"code"),e(505,"default"),t(),e(506,")."),t(),n(507,"li")(508,"code"),e(509,"disabled"),t(),e(510,": Indica se o bot\xE3o deve estar desabilitado."),t(),n(511,"li")(512,"code"),e(513,"visible"),t(),e(514,": Indica se o bot\xE3o deve estar vis\xEDvel."),t()(),n(515,"p")(516,"strong"),e(517,"Exemplo de uso:"),t()(),n(518,"pre")(519,"code",28),e(520,`<po-upload
 [p-custom-action]="customAction"
 (p-custom-action-click)="onCustomActionClick($event)">
</po-upload>
`),t()(),n(521,"pre")(522,"code",29),e(523,`customAction: PoProgressAction = {
  label: 'Baixar',
  icon: 'an an-download',
  type: 'default',
  visible: true
};

onCustomActionClick(file: PoUploadFile) {
  console.log(\`A\xE7\xE3o personalizada clicada para o arquivo: \${file.name}\`);
}
`),t()()()(),n(524,"tr",14)(525,"td",15)(526,"div",16)(527,"span",17),e(528," (p-custom-action-click)"),o(529,"br"),t()()(),n(530,"td",19)(531,"code",20),e(532,"EventEmitter"),t()(),n(533,"td",21),e(534,"-"),t(),n(535,"td",22)(536,"em")(537,"strong"),e(538,"(opcional)"),t()(),n(539,"p"),e(540,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),n(541,"code"),e(542,"p-custom-action"),t(),e(543,"."),t(),n(544,"p"),e(545,`O evento retorna o arquivo associado \xE0 barra de progresso onde a a\xE7\xE3o foi clicada,
permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),t(),n(546,"p")(547,"strong"),e(548,"Exemplo de uso:"),t()(),n(549,"pre")(550,"code",28),e(551,`<po-upload
 [p-custom-action]="customAction"
 (p-custom-action-click)="onCustomActionClick($event)">
</po-upload>
`),t()(),n(552,"pre")(553,"code",29),e(554,`customAction: PoProgressAction = {
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
`),t()()()(),n(555,"tr",14)(556,"td",15)(557,"div",23)(558,"span",24),e(559," p-custom-modal-actions"),o(560,"br"),t()()(),n(561,"td",19)(562,"code",30),e(563,"Array<PoModalAction>"),t()(),n(564,"td",21),e(565,"-"),t(),n(566,"td",22)(567,"em")(568,"strong"),e(569,"(opcional)"),t()(),n(570,"p"),e(571,`Define uma ou duas a\xE7\xF5es personalizadas do modal de pr\xE9-visualiza\xE7\xE3o, adicionando um bot\xE3o ou dois bot\xF5es no canto inferior direito
do modal.`),t(),n(572,"p"),e(573,"A a\xE7\xE3o deve implementar a interface "),n(574,"strong"),e(575,"PoModalAction"),t(),e(576,", permitindo configurar propriedades como:"),t(),n(577,"ul")(578,"li")(579,"code"),e(580,"label"),t(),e(581,": Texto do bot\xE3o."),t(),n(582,"li")(583,"code"),e(584,"action"),t(),e(585,": \xCDcone a ser exibido no bot\xE3o."),t(),n(586,"li")(587,"code"),e(588,"danger"),t(),e(589,": Define a propriedade "),n(590,"code"),e(591,"p-danger"),t(),e(592," do bot\xE3o."),t(),n(593,"li")(594,"code"),e(595,"disabled"),t(),e(596,": Indica se o bot\xE3o deve estar desabilitado."),t(),n(597,"li")(598,"code"),e(599,"visible"),t(),e(600,": Indica se o bot\xE3o deve estar vis\xEDvel."),t()(),n(601,"p")(602,"strong"),e(603,"Exemplo de uso:"),t()(),n(604,"pre")(605,"code",28),e(606,`<po-upload
 [p-custom-modal-actions]="customActions"
</po-upload>
`),t()(),n(607,"pre")(608,"code",29),e(609,`customActions:  Array<PoModalAction> = [
 { label: 'Confirmar', action: this.confirmModal.bind(this) },
 { label: 'Cancelar', action: this.closeModal.bind(this) }
];
`),t()()()(),n(610,"tr",14)(611,"td",15)(612,"div",23)(613,"span",24),e(614," p-directory"),o(615,"br"),t()()(),n(616,"td",19)(617,"code",26),e(618,"boolean"),t()(),n(619,"td",21)(620,"p")(621,"code"),e(622,"false"),t()()(),n(623,"td",22)(624,"em")(625,"strong"),e(626,"(opcional)"),t()(),n(627,"p"),e(628,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),t(),n(629,"blockquote")(630,"p"),e(631,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),t()(),n(632,"blockquote")(633,"p"),e(634,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),n(635,"strong"),e(636,"Internet Explorer"),t(),e(637,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),t()()()(),n(638,"tr",14)(639,"td",15)(640,"div",23)(641,"span",24),e(642," p-disabled"),o(643,"br"),t()()(),n(644,"td",19)(645,"code",26),e(646,"boolean"),t()(),n(647,"td",21),e(648,"-"),t(),n(649,"td",22)(650,"em")(651,"strong"),e(652,"(opcional)"),t()(),n(653,"p"),e(654,"Indica que o campo ser\xE1 desabilitado."),t()()(),n(655,"tr",14)(656,"td",15)(657,"div",23)(658,"span",24),e(659," p-disabled-remove-file"),o(660,"br"),t()()(),n(661,"td",19)(662,"code",26),e(663,"boolean"),t()(),n(664,"td",21)(665,"p")(666,"code"),e(667,"false"),t()()(),n(668,"td",22)(669,"em")(670,"strong"),e(671,"(opcional)"),t()(),n(672,"p"),e(673,"Desabilita bot\xE3o de remover o(s) arquivo(s) selecionado(s)."),t()()(),n(674,"tr",14)(675,"td",15)(676,"div",23)(677,"span",24),e(678," p-drag-drop"),o(679,"br"),t()()(),n(680,"td",19)(681,"code",26),e(682,"boolean"),t()(),n(683,"td",21)(684,"p")(685,"code"),e(686,"false"),t()()(),n(687,"td",22)(688,"em")(689,"strong"),e(690,"(opcional)"),t()(),n(691,"p"),e(692,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),t(),n(693,"blockquote")(694,"p"),e(695,"Recomendamos utilizar apenas um "),n(696,"code"),e(697,"po-upload"),t(),e(698," com esta funcionalidade por tela."),t()()()(),n(699,"tr",14)(700,"td",15)(701,"div",23)(702,"span",24),e(703," p-drag-drop-height"),o(704,"br"),t()()(),n(705,"td",19)(706,"code",31),e(707,"number"),t()(),n(708,"td",21)(709,"p")(710,"code"),e(711,"320"),t()()(),n(712,"td",22)(713,"em")(714,"strong"),e(715,"(opcional)"),t()(),n(716,"p"),e(717,"Define em "),n(718,"em"),e(719,"pixels"),t(),e(720," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),n(721,"code"),e(722,"160px"),t(),e(723,"."),t(),n(724,"blockquote")(725,"p"),e(726,"Esta propriedade funciona somente se a propriedade "),n(727,"code"),e(728,"p-drag-drop"),t(),e(729," estiver habilitada."),t()()()(),n(730,"tr",14)(731,"td",15)(732,"div",23)(733,"span",24),e(734," p-restrictions"),o(735,"br"),t()()(),n(736,"td",19)(737,"code",32),e(738,"PoUploadFileRestrictions"),t()(),n(739,"td",21),e(740,"-"),t(),n(741,"td",22)(742,"em")(743,"strong"),e(744,"(opcional)"),t()(),n(745,"p"),e(746,"Objeto que segue a defini\xE7\xE3o da interface "),n(747,"code"),e(748,"PoUploadFileRestrictions"),t(),e(749,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),t()()(),n(750,"tr",14)(751,"td",15)(752,"div",23)(753,"span",24),e(754," p-form-field"),o(755,"br"),t()()(),n(756,"td",19)(757,"code",25),e(758,"string"),t()(),n(759,"td",21)(760,"p")(761,"code"),e(762,"files"),t()()(),n(763,"td",22)(764,"em")(765,"strong"),e(766,"(opcional)"),t()(),n(767,"p"),e(768,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),n(769,"code"),e(770,"p-url"),t(),e(771,"."),t()()(),n(772,"tr",14)(773,"td",15)(774,"div",23)(775,"span",24),e(776," p-headers"),o(777,"br"),t()()(),n(778,"td",19)(779,"code",33),e(780,"{ [name: string]: string "),t(),n(781,"code",34),e(782,` Array<string>;
}`),t()(),n(783,"td",21),e(784,"-"),t(),n(785,"td",22)(786,"p"),e(787,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),t()()(),n(788,"tr",14)(789,"td",15)(790,"div",23)(791,"span",24),e(792," p-help"),o(793,"br"),t()()(),n(794,"td",19)(795,"code",25),e(796,"string"),t()(),n(797,"td",21),e(798,"-"),t(),n(799,"td",22)(800,"em")(801,"strong"),e(802,"(opcional)"),t()(),n(803,"p"),e(804,"Texto de apoio para o campo."),t()()(),n(805,"tr",14)(806,"td",15)(807,"div",23)(808,"span",24),e(809," p-hide-restrictions-info"),o(810,"br"),t()()(),n(811,"td",19)(812,"code",26),e(813,"boolean"),t()(),n(814,"td",21)(815,"p")(816,"code"),e(817,"false"),t()()(),n(818,"td",22)(819,"em")(820,"strong"),e(821,"(opcional)"),t()(),n(822,"p"),e(823,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),t()()(),n(824,"tr",14)(825,"td",15)(826,"div",23)(827,"span",24),e(828," p-hide-select-button"),o(829,"br"),t()()(),n(830,"td",19)(831,"code",26),e(832,"boolean"),t()(),n(833,"td",21)(834,"p")(835,"code"),e(836,"false"),t()()(),n(837,"td",22)(838,"em")(839,"strong"),e(840,"(opcional)"),t()(),n(841,"p"),e(842,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),t(),n(843,"blockquote")(844,"p"),e(845,"Caso o valor definido seja "),n(846,"code"),e(847,"true"),t(),e(848,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),n(849,"code"),e(850,"selectFiles()"),t(),e(851," para sele\xE7\xE3o de arquivos."),t()()()(),n(852,"tr",14)(853,"td",15)(854,"div",23)(855,"span",24),e(856," p-hide-send-button"),o(857,"br"),t()()(),n(858,"td",19)(859,"code",26),e(860,"boolean"),t()(),n(861,"td",21)(862,"p")(863,"code"),e(864,"false"),t()()(),n(865,"td",22)(866,"em")(867,"strong"),e(868,"(opcional)"),t()(),n(869,"p"),e(870,"Omite o bot\xE3o de envio de arquivos."),t(),n(871,"blockquote")(872,"p"),e(873,"Caso o valor definido seja "),n(874,"code"),e(875,"true"),t(),e(876,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),n(877,"code"),e(878,"sendFiles()"),t(),e(879," para envio do(s) arquivo(s) selecionado(s)."),t()()()(),n(880,"tr",14)(881,"td",15)(882,"div",23)(883,"span",24),e(884," p-multiple"),o(885,"br"),t()()(),n(886,"td",19)(887,"code",26),e(888,"boolean"),t()(),n(889,"td",21),e(890,"-"),t(),n(891,"td",22)(892,"em")(893,"strong"),e(894,"(opcional)"),t()(),n(895,"p"),e(896,"Define se pode selecionar mais de um arquivo."),t(),n(897,"blockquote")(898,"p"),e(899,"Se utilizada a "),n(900,"code"),e(901,"p-directory"),t(),e(902,", habilita-se automaticamente esta propriedade."),t()()()(),n(903,"tr",14)(904,"td",15)(905,"div",16)(906,"span",17),e(907," (p-keydown)"),o(908,"br"),t()()(),n(909,"td",19)(910,"code",20),e(911,"EventEmitter"),t()(),n(912,"td",21),e(913,"-"),t(),n(914,"td",22)(915,"em")(916,"strong"),e(917,"(opcional)"),t()(),n(918,"p"),e(919,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(920,"code"),e(921,"KeyboardEvent"),t(),e(922," com informa\xE7\xF5es sobre a tecla."),t()()(),n(923,"tr",14)(924,"td",15)(925,"div",23)(926,"span",24),e(927," p-label"),o(928,"br"),t()()(),n(929,"td",19)(930,"code",25),e(931,"string"),t()(),n(932,"td",21),e(933,"-"),t(),n(934,"td",22)(935,"em")(936,"strong"),e(937,"(opcional)"),t()(),n(938,"p"),e(939,"R\xF3tulo do campo."),t()()(),n(940,"tr",14)(941,"td",15)(942,"div",23)(943,"span",24),e(944," p-label-text-wrap"),o(945,"br"),t()()(),n(946,"td",19)(947,"code",26),e(948,"boolean"),t()(),n(949,"td",21)(950,"p")(951,"code"),e(952,"false"),t()()(),n(953,"td",22)(954,"em")(955,"strong"),e(956,"(opcional)"),t()(),n(957,"p"),e(958,"Habilita a quebra autom\xE1tica do texto da propriedade "),n(959,"code"),e(960,"p-label"),t(),e(961,". Quando "),n(962,"code"),e(963,"p-label-text-wrap"),t(),e(964,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),n(965,"tr",14)(966,"td",15)(967,"div",23)(968,"span",24),e(969," p-literals"),o(970,"br"),t()()(),n(971,"td",19)(972,"code",35),e(973,"PoUploadLiterals"),t()(),n(974,"td",21),e(975,"-"),t(),n(976,"td",22)(977,"em")(978,"strong"),e(979,"(opcional)"),t()(),n(980,"p"),e(981,"Objeto com as literais usadas no "),n(982,"code"),e(983,"po-upload"),t(),e(984,"."),t(),n(985,"p"),e(986,"Existem duas maneiras de customizar o componente:"),t(),n(987,"ul")(988,"li"),e(989,"passando um objeto implementando a interface "),n(990,"code"),e(991,"PoUploadLiterals"),t(),e(992," com todas as literais dispon\xEDveis;"),t(),n(993,"li"),e(994,"passando apenas as literais que deseja customizar:"),n(995,"pre")(996,"code"),e(997,`const customLiterals: PoUploadLiterals = {
  folders: 'Pastas',
  selectFile: 'Buscar arquivo',
  startSending: 'Enviar'
};
`),t()()()(),n(998,"p"),e(999,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente:"),t(),n(1e3,"pre")(1001,"code"),e(1002,`<po-upload
  [p-literals]="customLiterals">
</po-upload>
`),t()(),n(1003,"blockquote")(1004,"p"),e(1005,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do "),n(1006,"em"),e(1007,"browser"),t(),e(1008," (pt, en, es, ru)."),t()()()(),n(1009,"tr",14)(1010,"td",15)(1011,"div",23)(1012,"span",24),e(1013," name"),o(1014,"br"),t()()(),n(1015,"td",19)(1016,"code",25),e(1017,"string"),t()(),n(1018,"td",21),e(1019,"-"),t(),n(1020,"td",22)(1021,"p"),e(1022,"Define o valor do atributo "),n(1023,"code"),e(1024,"name"),t(),e(1025," do componente."),t()()(),n(1026,"tr",14)(1027,"td",15)(1028,"div",16)(1029,"span",17),e(1030," (ngModelChange)"),o(1031,"br"),t()()(),n(1032,"td",19)(1033,"code",20),e(1034,"EventEmitter"),t()(),n(1035,"td",21),e(1036,"-"),t(),n(1037,"td",22)(1038,"em")(1039,"strong"),e(1040,"(opcional)"),t()(),n(1041,"p"),e(1042,"Fun\xE7\xE3o para atualizar o ngModel do componente, necess\xE1rio quando n\xE3o for utilizado dentro da "),n(1043,"em"),e(1044,"tag"),t(),n(1045,"code"),e(1046,"form"),t(),e(1047,"."),t(),n(1048,"p"),e(1049,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),n(1050,"code"),e(1051,"strictTemplates"),t(),e(1052,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),t(),n(1053,"pre")(1054,"code"),e(1055,`<po-upload ... [ngModel]="UploadModel" (ngModelChange)="uploadModel = $event"> </po-upload>
`),t()()()(),n(1056,"tr",14)(1057,"td",15)(1058,"div",16)(1059,"span",17),e(1060," (p-cancel)"),o(1061,"br"),t()()(),n(1062,"td",19)(1063,"code",20),e(1064,"EventEmitter"),t()(),n(1065,"td",21),e(1066,"-"),t(),n(1067,"td",22)(1068,"em")(1069,"strong"),e(1070,"(opcional)"),t()(),n(1071,"p"),e(1072,"Evento ser\xE1 disparado ao clicar no \xEDcone de fechar."),t(),n(1073,"blockquote")(1074,"p"),e(1075,"Por par\xE2metro ser\xE1 passado o objeto do arquivo."),t()()()(),n(1076,"tr",14)(1077,"td",15)(1078,"div",16)(1079,"span",17),e(1080," (p-error)"),o(1081,"br"),t()()(),n(1082,"td",19)(1083,"code",20),e(1084,"EventEmitter"),t()(),n(1085,"td",21),e(1086,"-"),t(),n(1087,"td",22)(1088,"em")(1089,"strong"),e(1090,"(opcional)"),t()(),n(1091,"p"),e(1092,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),t(),n(1093,"blockquote")(1094,"p"),e(1095,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),n(1096,"code"),e(1097,"HttpErrorResponse"),t(),e(1098,"."),t()()()(),n(1099,"tr",14)(1100,"td",15)(1101,"div",16)(1102,"span",17),e(1103," (p-open-modal-preview)"),o(1104,"br"),t()()(),n(1105,"td",19)(1106,"code",20),e(1107,"EventEmitter"),t()(),n(1108,"td",21),e(1109,"-"),t(),n(1110,"td",22)(1111,"em")(1112,"strong"),e(1113,"(opcional)"),t()(),n(1114,"p"),e(1115,"Evento ser\xE1 disparado ao abrir o modal de pr\xE9-visualiza\xE7\xE3o."),t(),n(1116,"blockquote")(1117,"p"),e(1118,"Por par\xE2metro ser\xE1 passado o objeto do arquivo."),t()()()(),n(1119,"tr",14)(1120,"td",15)(1121,"div",16)(1122,"span",17),e(1123," (p-remove)"),o(1124,"br"),t()()(),n(1125,"td",19)(1126,"code",20),e(1127,"EventEmitter"),t()(),n(1128,"td",21),e(1129,"-"),t(),n(1130,"td",22)(1131,"em")(1132,"strong"),e(1133,"(opcional)"),t()(),n(1134,"p"),e(1135,"Evento ser\xE1 disparado ao clicar no \xEDcone de remover."),t(),n(1136,"blockquote")(1137,"p"),e(1138,"Por par\xE2metro ser\xE1 passado o objeto do arquivo."),t()()()(),n(1139,"tr",14)(1140,"td",15)(1141,"div",16)(1142,"span",17),e(1143," (p-success)"),o(1144,"br"),t()()(),n(1145,"td",19)(1146,"code",20),e(1147,"EventEmitter"),t()(),n(1148,"td",21),e(1149,"-"),t(),n(1150,"td",22)(1151,"em")(1152,"strong"),e(1153,"(opcional)"),t()(),n(1154,"p"),e(1155,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),t(),n(1156,"blockquote")(1157,"p"),e(1158,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),n(1159,"code"),e(1160,"HttpResponse"),t(),e(1161,"."),t()()()(),n(1162,"tr",14)(1163,"td",15)(1164,"div",16)(1165,"span",17),e(1166," (p-upload)"),o(1167,"br"),t()()(),n(1168,"td",19)(1169,"code",20),e(1170,"EventEmitter"),t()(),n(1171,"td",21),e(1172,"-"),t(),n(1173,"td",22)(1174,"em")(1175,"strong"),e(1176,"(opcional)"),t()(),n(1177,"p"),e(1178,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e as propriedades data e extraFormData,
que ser\xE3o enviadas em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),t(),n(1179,"blockquote")(1180,"p"),e(1181,"data, nesta propriedade pode ser informado algum dado"),t()(),n(1182,"pre")(1183,"code"),e(1184,`event.data = {id: 'id do usu\xE1rio'};
`),t()(),n(1185,"blockquote")(1186,"p"),e(1187,`extraFormData, nesta propriedade pode ser informado algum dado solicitado pela API
que n\xE3o possa estar no objeto `),n(1188,"code"),e(1189,"data"),t(),e(1190,`, assim o conte\xFAdo sar\xE1 extra\xEDdo do objeto e
enviado como par\xE2metro`),t()(),n(1191,"pre")(1192,"code"),e(1193,`event.extraFormData = {id: 'id do usu\xE1rio'};
`),t()()()(),n(1194,"tr",14)(1195,"td",15)(1196,"div",23)(1197,"span",24),e(1198," p-optional"),o(1199,"br"),t()()(),n(1200,"td",19)(1201,"code",26),e(1202,"boolean"),t()(),n(1203,"td",21)(1204,"p")(1205,"code"),e(1206,"false"),t()()(),n(1207,"td",22)(1208,"em")(1209,"strong"),e(1210,"(opcional)"),t()(),n(1211,"p"),e(1212,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(1213,"blockquote")(1214,"p"),e(1215,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(1216,"ul")(1217,"li"),e(1218,"O campo conter "),n(1219,"code"),e(1220,"p-required"),t(),e(1221,";"),t(),n(1222,"li"),e(1223,"N\xE3o possuir "),n(1224,"code"),e(1225,"p-help"),t(),e(1226," e/ou "),n(1227,"code"),e(1228,"p-label"),t(),e(1229,"."),t()()()(),n(1230,"tr",14)(1231,"td",15)(1232,"div",23)(1233,"span",24),e(1234," p-helper"),o(1235,"br"),t()()(),n(1236,"td",19)(1237,"code",36),e(1238,"PoHelperOptions "),t(),n(1239,"code",25),e(1240," string"),t()(),n(1241,"td",21),e(1242,"-"),t(),n(1243,"td",22)(1244,"em")(1245,"strong"),e(1246,"(opcional)"),t()(),n(1247,"p"),e(1248,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),n(1249,"code"),e(1250,"p-label"),t(),e(1251," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),n(1252,"code"),e(1253,"p-label"),t(),e(1254,"."),t(),n(1255,"blockquote")(1256,"p"),e(1257,"Para mais informa\xE7\xF5es acesse: "),n(1258,"a",37),e(1259,"https://po-ui.io/documentation/po-helper"),t(),e(1260,"."),t()(),n(1261,"blockquote")(1262,"p"),e(1263,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),n(1264,"code"),e(1265,"p-additional-help-tooltip"),t(),e(1266," e "),n(1267,"code"),e(1268,"p-additional-help"),t(),e(1269,") ser\xE1 ignorado."),t()()()(),n(1270,"tr",14)(1271,"td",15)(1272,"div",23)(1273,"span",24),e(1274," p-required"),o(1275,"br"),t()()(),n(1276,"td",19)(1277,"code",26),e(1278,"boolean"),t()(),n(1279,"td",21)(1280,"p")(1281,"code"),e(1282,"false"),t()()(),n(1283,"td",22)(1284,"em")(1285,"strong"),e(1286,"(opcional)"),t()(),n(1287,"p"),e(1288,"Define que o campo ser\xE1 obrigat\xF3rio."),t()()(),n(1289,"tr",14)(1290,"td",15)(1291,"div",23)(1292,"span",24),e(1293," p-required-url"),o(1294,"br"),t()()(),n(1295,"td",19)(1296,"code",26),e(1297,"boolean"),t()(),n(1298,"td",21)(1299,"p")(1300,"code"),e(1301,"true"),t()()(),n(1302,"td",22)(1303,"em")(1304,"strong"),e(1305,"(opcional)"),t()(),n(1306,"p"),e(1307,"Define se a propriedade "),n(1308,"code"),e(1309,"p-url"),t(),e(1310," \xE9 obrigat\xF3ria."),t(),n(1311,"p"),e(1312,"Caso a propriedade seja definida como "),n(1313,"code"),e(1314,"false"),t(),e(1315,":"),t(),n(1316,"ul")(1317,"li"),e(1318,'o bot\xE3o de "Selecionar arquivo" ficar\xE1 habilitado mesmo sem a propriedade '),n(1319,"code"),e(1320,"p-url"),t(),e(1321," definida."),t(),n(1322,"li"),e(1323,'o bot\xE3o "Iniciar envio" ficar\xE1 oculto at\xE9 que a propriedade '),n(1324,"code"),e(1325,"p-url"),t(),e(1326," seja definida."),t()(),n(1327,"blockquote")(1328,"p"),e(1329,"Se utilizada com a propriedade "),n(1330,"code"),e(1331,"p-auto-upload"),t(),e(1332," definida como "),n(1333,"code"),e(1334,"true"),t(),e(1335," ser\xE1 necess\xE1rio definir a propriedade "),n(1336,"code"),e(1337,"p-url"),t(),e(1338,"."),t()()()(),n(1339,"tr",14)(1340,"td",15)(1341,"div",23)(1342,"span",24),e(1343," p-show-required"),o(1344,"br"),t()()(),n(1345,"td",19)(1346,"code",26),e(1347,"boolean"),t()(),n(1348,"td",21),e(1349,"-"),t(),n(1350,"td",22)(1351,"p"),e(1352,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(1353,"blockquote")(1354,"p"),e(1355,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(1356,"ul")(1357,"li"),e(1358,"N\xE3o possuir "),n(1359,"code"),e(1360,"p-help"),t(),e(1361," e/ou "),n(1362,"code"),e(1363,"p-label"),t(),e(1364,"."),t()()()(),n(1365,"tr",14)(1366,"td",15)(1367,"div",23)(1368,"span",24),e(1369," p-show-thumbnail"),o(1370,"br"),t()()(),n(1371,"td",19)(1372,"code",26),e(1373,"boolean"),t()(),n(1374,"td",21)(1375,"p")(1376,"code"),e(1377,"true"),t()()(),n(1378,"td",22)(1379,"em")(1380,"strong"),e(1381,"(opcional)"),t()(),n(1382,"p"),e(1383,"Exibe a pr\xE9-visualiza\xE7\xE3o de imagens ao anex\xE1-las."),t(),n(1384,"blockquote")(1385,"p"),e(1386,"Propriedade funciona apenas em arquivos de formato de imagem ("),n(1387,"code"),e(1388,".png"),t(),e(1389,", "),n(1390,"code"),e(1391,".jpg"),t(),e(1392,", "),n(1393,"code"),e(1394,".jpeg"),t(),e(1395," e "),n(1396,"code"),e(1397,".gif"),t(),e(1398,`).
Ser\xE1 ignorada em outros tipos de arquivo.`),t()()()(),n(1399,"tr",14)(1400,"td",15)(1401,"div",23)(1402,"span",24),e(1403," p-size"),o(1404,"br"),t()()(),n(1405,"td",19)(1406,"code",25),e(1407,"string"),t()(),n(1408,"td",21)(1409,"p")(1410,"code"),e(1411,"medium"),t()()(),n(1412,"td",22)(1413,"em")(1414,"strong"),e(1415,"(opcional)"),t()(),n(1416,"p"),e(1417,"Define o tamanho e as a\xE7\xF5es do componente:"),t(),n(1418,"ul")(1419,"li")(1420,"code"),e(1421,"small"),t(),e(1422,": altura do button como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(1423,"li")(1424,"code"),e(1425,"medium"),t(),e(1426,": altura do button como 44px."),t()(),n(1427,"blockquote")(1428,"p"),e(1429,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(1430,"code"),e(1431,"medium"),t(),e(1432,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(1433,"a",38),e(1434,"po-theme"),t(),e(1435,"."),t()()()(),n(1436,"tr",14)(1437,"td",15)(1438,"div",23)(1439,"span",24),e(1440," p-url"),o(1441,"br"),t()()(),n(1442,"td",19)(1443,"code",25),e(1444,"string"),t()(),n(1445,"td",21),e(1446,"-"),t(),n(1447,"td",22)(1448,"p"),e(1449,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),t()()()(),n(1450,"h3",10),e(1451,"M\xE9todos"),t(),n(1452,"table",39)(1453,"tr",14)(1454,"th",40)(1455,"div",23)(1456,"h4")(1457,"span",24),e(1458," clear "),t()()()()(),n(1459,"tr",22)(1460,"td",22)(1461,"p"),e(1462,"M\xE9todo respons\xE1vel por "),n(1463,"strong"),e(1464,"limpar"),t(),e(1465," o(s) arquivo(s) selecionado(s)."),t()()()(),o(1466,"br"),n(1467,"table",39)(1468,"tr",14)(1469,"th",40)(1470,"div",23)(1471,"h4")(1472,"span",24),e(1473," focus "),t()()()()(),n(1474,"tr",22)(1475,"td",22)(1476,"p"),e(1477,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(1478,"p"),e(1479,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(1480,"pre")(1481,"code"),e(1482,`import { PoUploadComponent } from '@po-ui/ng-components';

...

@ViewChild(PoUploadComponent, { static: true }) upload: PoUploadComponent;

focusUpload() {
  this.upload.focus();
}
`),t()()()()(),o(1483,"br"),n(1484,"table",39)(1485,"tr",14)(1486,"th",40)(1487,"div",23)(1488,"h4")(1489,"span",24),e(1490," closeModal "),t()()()()(),n(1491,"tr",22)(1492,"td",22)(1493,"p"),e(1494,"M\xE9todo respons\xE1vel por fechar o modal."),t()()()(),o(1495,"br"),n(1496,"table",39)(1497,"tr",14)(1498,"th",40)(1499,"div",23)(1500,"h4")(1501,"span",24),e(1502," selectFiles "),t()()()()(),n(1503,"tr",22)(1504,"td",22)(1505,"p"),e(1506,"M\xE9todo respons\xE1vel por "),n(1507,"strong"),e(1508,"abrir"),t(),e(1509," a janela para sele\xE7\xE3o de arquivo(s)."),t()()()(),o(1510,"br"),n(1511,"table",39)(1512,"tr",14)(1513,"th",40)(1514,"div",23)(1515,"h4")(1516,"span",24),e(1517," sendFiles "),t()()()()(),n(1518,"tr",22)(1519,"td",22)(1520,"p"),e(1521,"M\xE9todo respons\xE1vel por "),n(1522,"strong"),e(1523,"enviar"),t(),e(1524," o(s) arquivo(s) selecionado(s)."),t()()()(),o(1525,"br"),n(1526,"table",39)(1527,"tr",14)(1528,"th",40)(1529,"div",23)(1530,"h4")(1531,"span",24),e(1532," showAdditionalHelp "),t()()()()(),n(1533,"tr",22)(1534,"td",22)(1535,"p"),e(1536,"M\xE9todo que exibe "),n(1537,"code"),e(1538,"p-helper"),t(),e(1539," ou executa a a\xE7\xE3o definida em "),n(1540,"code"),e(1541,"p-helper{eventOnClick}"),t(),e(1542," ou em "),n(1543,"code"),e(1544,"p-additionalHelp"),t(),e(1545,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),n(1546,"code"),e(1547,"p-keydown"),t(),e(1548,"."),t(),n(1549,"blockquote")(1550,"p"),e(1551,"Exibe ou oculta o conte\xFAdo do componente "),n(1552,"code"),e(1553,"po-helper"),t(),e(1554," quando o componente estiver com foco."),t()(),n(1555,"pre")(1556,"code"),e(1557,`//Exemplo com p-label e p-helper
<po-upload
 #upload
 ...
 p-label="Label do upload"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, upload)"
></po-upload>
`),t()(),n(1558,"pre")(1559,"code"),e(1560,`...
onKeyDown(event: KeyboardEvent, inp: PoUploadComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),o(1561,"br"),n(1562,"h3"),e(1563,"Interfaces"),t(),n(1564,"h4",41)(1565,"code",5),e(1566,"PoUploadFileRestrictions"),t()(),n(1567,"div",2)(1568,"p"),e(1569,`Interface que define as restri\xE7\xF5es dos arquivos a serem selecionados com base em regras predefinidas
para o seu tamanho, extens\xE3o e quantidade.`),t()(),n(1570,"h4",10),e(1571,"Propriedades"),t(),n(1572,"table",11)(1573,"tr",12)(1574,"th",13),e(1575,"Nome"),t(),n(1576,"th",13),e(1577,"Tipo"),t(),n(1578,"th",13),e(1579,"Descri\xE7\xE3o"),t()(),n(1580,"tr",14)(1581,"td",15)(1582,"div",23)(1583,"span",24),e(1584," allowedExtensions"),o(1585,"br"),t()()(),n(1586,"td",19)(1587,"code",42),e(1588,"Array<string>"),t()(),n(1589,"td",22)(1590,"em")(1591,"strong"),e(1592,"(opcional)"),t()(),n(1593,"p"),e(1594,"Extens\xF5es permitidas de arquivos que ser\xE3o enviados ao servidor, devendo ser informada uma cole\xE7\xE3o de extens\xF5es, por exemplo:"),t(),n(1595,"pre")(1596,"code"),e(1597,`allowedExtensions = ['.png', '.jpg', '.pdf'];
`),t()()()(),n(1598,"tr",14)(1599,"td",15)(1600,"div",23)(1601,"span",24),e(1602," maxFileSize"),o(1603,"br"),t()()(),n(1604,"td",19)(1605,"code",31),e(1606,"number"),t()(),n(1607,"td",22)(1608,"em")(1609,"strong"),e(1610,"(opcional)"),t()(),n(1611,"p"),e(1612,"Tamanho m\xE1ximo do arquivo a ser enviado ao servidor."),t(),n(1613,"p"),e(1614,"Deve ser informado um valor em "),n(1615,"em"),e(1616,"bytes"),t(),e(1617,", por exemplo: "),n(1618,"code"),e(1619,"31457280"),t(),e(1620," (30MB)."),t(),n(1621,"blockquote")(1622,"p"),e(1623,"Por padr\xE3o o valor \xE9 "),n(1624,"code"),e(1625,"30 MB"),t(),e(1626,"."),t()()()(),n(1627,"tr",14)(1628,"td",15)(1629,"div",23)(1630,"span",24),e(1631," maxFiles"),o(1632,"br"),t()()(),n(1633,"td",19)(1634,"code",31),e(1635,"number"),t()(),n(1636,"td",22)(1637,"em")(1638,"strong"),e(1639,"(opcional)"),t()(),n(1640,"p"),e(1641,"Quantidade m\xE1xima de arquivos para o "),n(1642,"em"),e(1643,"upload"),t(),e(1644,"."),t(),n(1645,"blockquote")(1646,"p"),e(1647,"Esta propriedade ser\xE1 v\xE1lida somente se a propriedade "),n(1648,"code"),e(1649,"p-multiple"),t(),e(1650," estiver habilitada e seu valor for maior do que zero."),t()()()(),n(1651,"tr",14)(1652,"td",15)(1653,"div",23)(1654,"span",24),e(1655," minFileSize"),o(1656,"br"),t()()(),n(1657,"td",19)(1658,"code",31),e(1659,"number"),t()(),n(1660,"td",22)(1661,"em")(1662,"strong"),e(1663,"(opcional)"),t()(),n(1664,"p"),e(1665,"Tamanho m\xEDnimo em "),n(1666,"em"),e(1667,"bytes"),t(),e(1668," do arquivo que ser\xE1 enviado ao servidor."),t(),n(1669,"blockquote")(1670,"p"),e(1671,"Por padr\xE3o o valor \xE9 "),n(1672,"code"),e(1673,"0"),t(),e(1674,"."),t()()()()(),n(1675,"h4",41)(1676,"code",5),e(1677,"PoUploadLiterals"),t()(),n(1678,"div",2)(1679,"p"),e(1680,"Interface para defini\xE7\xE3o das literais usadas no "),n(1681,"code"),e(1682,"po-upload"),t(),e(1683,"."),t()(),n(1684,"h4",10),e(1685,"Propriedades"),t(),n(1686,"table",11)(1687,"tr",12)(1688,"th",13),e(1689,"Nome"),t(),n(1690,"th",13),e(1691,"Tipo"),t(),n(1692,"th",13),e(1693,"Descri\xE7\xE3o"),t()(),n(1694,"tr",14)(1695,"td",15)(1696,"div",23)(1697,"span",24),e(1698," close"),o(1699,"br"),t()()(),n(1700,"td",19)(1701,"code",25),e(1702,"string"),t()(),n(1703,"td",22)(1704,"em")(1705,"strong"),e(1706,"(opcional)"),t()(),n(1707,"p"),e(1708,"Texto do leitor de tela ao focar no \xEDcone de fechar."),t()()(),n(1709,"tr",14)(1710,"td",15)(1711,"div",23)(1712,"span",24),e(1713," continue"),o(1714,"br"),t()()(),n(1715,"td",19)(1716,"code",25),e(1717,"string"),t()(),n(1718,"td",22)(1719,"em")(1720,"strong"),e(1721,"(opcional)"),t()(),n(1722,"p"),e(1723,"Texto do bot\xE3o padr\xE3o do modal de pr\xE9-visualizar."),t()()(),n(1724,"tr",14)(1725,"td",15)(1726,"div",23)(1727,"span",24),e(1728," doneText"),o(1729,"br"),t()()(),n(1730,"td",19)(1731,"code",25),e(1732,"string"),t()(),n(1733,"td",22)(1734,"em")(1735,"strong"),e(1736,"(opcional)"),t()(),n(1737,"p"),e(1738,"Texto a ser exibido no container de informa\xE7\xE3o quando o estado for de sucesso."),t()()(),n(1739,"tr",14)(1740,"td",15)(1741,"div",23)(1742,"span",24),e(1743," dragFilesHere"),o(1744,"br"),t()()(),n(1745,"td",19)(1746,"code",25),e(1747,"string"),t()(),n(1748,"td",22)(1749,"em")(1750,"strong"),e(1751,"(opcional)"),t()(),n(1752,"p"),e(1753,"Texto indicativo para a \xE1rea onde os arquivos devem ser arrastados quando utilizada a propriedade "),n(1754,"code"),e(1755,"p-drag-drop"),t(),e(1756,"."),t()()(),n(1757,"tr",14)(1758,"td",15)(1759,"div",23)(1760,"span",24),e(1761," dragFoldersHere"),o(1762,"br"),t()()(),n(1763,"td",19)(1764,"code",25),e(1765,"string"),t()(),n(1766,"td",22)(1767,"em")(1768,"strong"),e(1769,"(opcional)"),t()(),n(1770,"p"),e(1771,"Texto indicativo para a \xE1rea onde os diret\xF3rios devem ser arrastados quando utilizada a propriedade "),n(1772,"code"),e(1773,"p-drag-drop"),t(),e(1774,"."),t()()(),n(1775,"tr",14)(1776,"td",15)(1777,"div",23)(1778,"span",24),e(1779," dropFilesHere"),o(1780,"br"),t()()(),n(1781,"td",19)(1782,"code",25),e(1783,"string"),t()(),n(1784,"td",22)(1785,"em")(1786,"strong"),e(1787,"(opcional)"),t()(),n(1788,"p"),e(1789,"Texto indicativo para a \xE1rea onde os arquivos devem ser soltos quando utilizada a propriedade "),n(1790,"code"),e(1791,"p-drag-drop"),t()()()(),n(1792,"tr",14)(1793,"td",15)(1794,"div",23)(1795,"span",24),e(1796," dropFoldersHere"),o(1797,"br"),t()()(),n(1798,"td",19)(1799,"code",25),e(1800,"string"),t()(),n(1801,"td",22)(1802,"em")(1803,"strong"),e(1804,"(opcional)"),t()(),n(1805,"p"),e(1806,"Texto indicativo para a \xE1rea onde os diret\xF3rios devem ser soltos quando utilizada a propriedade "),n(1807,"code"),e(1808,"p-drag-drop"),t(),e(1809,"."),t()()(),n(1810,"tr",14)(1811,"td",15)(1812,"div",23)(1813,"span",24),e(1814," errorOccurred"),o(1815,"br"),t()()(),n(1816,"td",19)(1817,"code",25),e(1818,"string"),t()(),n(1819,"td",22)(1820,"em")(1821,"strong"),e(1822,"(opcional)"),t()(),n(1823,"p"),e(1824,"Texto a ser exibido quando ocorrer erro no envio do arquivo."),t()()(),n(1825,"tr",14)(1826,"td",15)(1827,"div",23)(1828,"span",24),e(1829," files"),o(1830,"br"),t()()(),n(1831,"td",19)(1832,"code",25),e(1833,"string"),t()(),n(1834,"td",22)(1835,"em")(1836,"strong"),e(1837,"(opcional)"),t()(),n(1838,"p"),e(1839,"Par\xE2metro "),n(1840,"em"),e(1841,"files"),t(),e(1842," para o texto de exibi\xE7\xE3o quando arrastado um arquivo para um local inv\xE1lido com a op\xE7\xE3o de "),n(1843,"em"),e(1844,"dragDrop"),t(),e(1845,"."),t()()(),n(1846,"tr",14)(1847,"td",15)(1848,"div",23)(1849,"span",24),e(1850," folders"),o(1851,"br"),t()()(),n(1852,"td",19)(1853,"code",25),e(1854,"string"),t()(),n(1855,"td",22)(1856,"em")(1857,"strong"),e(1858,"(opcional)"),t()(),n(1859,"p"),e(1860,"Par\xE2metro "),n(1861,"em"),e(1862,"folders"),t(),e(1863," para o texto de exibi\xE7\xE3o quando arrastado um arquivo para um local inv\xE1lido com a op\xE7\xE3o de "),n(1864,"em"),e(1865,"dragDrop"),t(),e(1866,"."),t()()(),n(1867,"tr",14)(1868,"td",15)(1869,"div",23)(1870,"span",24),e(1871," invalidDropArea"),o(1872,"br"),t()()(),n(1873,"td",19)(1874,"code",25),e(1875,"string"),t()(),n(1876,"td",22)(1877,"em")(1878,"strong"),e(1879,"(opcional)"),t()(),n(1880,"p"),e(1881,"Texto exibido caso o usu\xE1rio arrastar um arquivo para um local inv\xE1lido ao utilizar a op\xE7\xE3o de "),n(1882,"em"),e(1883,"dragDrop"),t(),e(1884,"."),t()()(),n(1885,"tr",14)(1886,"td",15)(1887,"div",23)(1888,"span",24),e(1889," preview"),o(1890,"br"),t()()(),n(1891,"td",19)(1892,"code",25),e(1893,"string"),t()(),n(1894,"td",22)(1895,"em")(1896,"strong"),e(1897,"(opcional)"),t()(),n(1898,"p"),e(1899,"T\xEDtulo do modal de pr\xE9-visualizar."),t()()(),n(1900,"tr",14)(1901,"td",15)(1902,"div",23)(1903,"span",24),e(1904," selectFile"),o(1905,"br"),t()()(),n(1906,"td",19)(1907,"code",25),e(1908,"string"),t()(),n(1909,"td",22)(1910,"em")(1911,"strong"),e(1912,"(opcional)"),t()(),n(1913,"p"),e(1914,"Texto exibido no label do bot\xE3o de sele\xE7\xE3o dos arquivos."),t()()(),n(1915,"tr",14)(1916,"td",15)(1917,"div",23)(1918,"span",24),e(1919," selectFiles"),o(1920,"br"),t()()(),n(1921,"td",19)(1922,"code",25),e(1923,"string"),t()(),n(1924,"td",22)(1925,"em")(1926,"strong"),e(1927,"(opcional)"),t()(),n(1928,"p"),e(1929,"Texto exibido no label do bot\xE3o de sele\xE7\xE3o dos arquivos ao utilizar a propriedade "),n(1930,"code"),e(1931,"p-multiple"),t(),e(1932,"."),t()()(),n(1933,"tr",14)(1934,"td",15)(1935,"div",23)(1936,"span",24),e(1937," selectFilesOnComputer"),o(1938,"br"),t()()(),n(1939,"td",19)(1940,"code",25),e(1941,"string"),t()(),n(1942,"td",22)(1943,"em")(1944,"strong"),e(1945,"(opcional)"),t()(),n(1946,"p"),e(1947,`Texto utilizado para indicar a possibilidade de sele\xE7\xE3o de arquivos na \xE1rea onde podem ser arrastados os arquivos
ao utilizar a op\xE7\xE3o de `),n(1948,"em"),e(1949,"dragDrop"),t(),e(1950,"."),t()()(),n(1951,"tr",14)(1952,"td",15)(1953,"div",23)(1954,"span",24),e(1955," selectFolder"),o(1956,"br"),t()()(),n(1957,"td",19)(1958,"code",25),e(1959,"string"),t()(),n(1960,"td",22)(1961,"em")(1962,"strong"),e(1963,"(opcional)"),t()(),n(1964,"p"),e(1965,"Texto exibido no label do bot\xE3o de sele\xE7\xE3o dos arquivos ao utilizar a propriedade "),n(1966,"code"),e(1967,"p-directory"),t(),e(1968,"."),t()()(),n(1969,"tr",14)(1970,"td",15)(1971,"div",23)(1972,"span",24),e(1973," selectFolderOnComputer"),o(1974,"br"),t()()(),n(1975,"td",19)(1976,"code",25),e(1977,"string"),t()(),n(1978,"td",22)(1979,"em")(1980,"strong"),e(1981,"(opcional)"),t()(),n(1982,"p"),e(1983,`Texto utilizado para indicar a possibilidade de sele\xE7\xE3o de diret\xF3rio na \xE1rea onde podem ser arrastados os arquivos
ao utilizar a op\xE7\xE3o de `),n(1984,"em"),e(1985,"dragDrop"),t(),e(1986,"."),t()()(),n(1987,"tr",14)(1988,"td",15)(1989,"div",23)(1990,"span",24),e(1991," sentWithSuccess"),o(1992,"br"),t()()(),n(1993,"td",19)(1994,"code",25),e(1995,"string"),t()(),n(1996,"td",22)(1997,"em")(1998,"strong"),e(1999,"(opcional)"),t()(),n(2e3,"p"),e(2001,"Texto a ser exibido quando o envio do arquivo for realizado com sucesso."),t()()(),n(2002,"tr",14)(2003,"td",15)(2004,"div",23)(2005,"span",24),e(2006," startSending"),o(2007,"br"),t()()(),n(2008,"td",19)(2009,"code",25),e(2010,"string"),t()(),n(2011,"td",22)(2012,"em")(2013,"strong"),e(2014,"(opcional)"),t()(),n(2015,"p"),e(2016,"Texto exibido no label do bot\xE3o para iniciar o envio dos arquivos."),t()()(),n(2017,"tr",14)(2018,"td",15)(2019,"div",23)(2020,"span",24),e(2021," thumbnail"),o(2022,"br"),t()()(),n(2023,"td",19)(2024,"code",25),e(2025,"string"),t()(),n(2026,"td",22)(2027,"em")(2028,"strong"),e(2029,"(opcional)"),t()(),n(2030,"p"),e(2031,"Texto do leitor da miniatura da imagem."),t()()(),n(2032,"tr",14)(2033,"td",15)(2034,"div",23)(2035,"span",24),e(2036," tryAgain"),o(2037,"br"),t()()(),n(2038,"td",19)(2039,"code",25),e(2040,"string"),t()(),n(2041,"td",22)(2042,"em")(2043,"strong"),e(2044,"(opcional)"),t()(),n(2045,"p"),e(2046,"Texto de Tente novamente ao ocorrer erro ao enviar."),t()()(),n(2047,"tr",14)(2048,"td",15)(2049,"div",23)(2050,"span",24),e(2051," uploadingText"),o(2052,"br"),t()()(),n(2053,"td",19)(2054,"code",25),e(2055,"string"),t()(),n(2056,"td",22)(2057,"em")(2058,"strong"),e(2059,"(opcional)"),t()(),n(2060,"p"),e(2061,"Texto a ser exibido no container de informa\xE7\xE3o quando o estado for enviando."),t()()()(),n(2062,"h4",41)(2063,"code",5),e(2064,"PoProgressAction"),t()(),n(2065,"div",2)(2066,"p"),e(2067,"Interface para as a\xE7\xF5es dos componentes po-progress e po-upload."),t()(),n(2068,"h4",10),e(2069,"Propriedades"),t(),n(2070,"table",11)(2071,"tr",12)(2072,"th",13),e(2073,"Nome"),t(),n(2074,"th",13),e(2075,"Tipo"),t(),n(2076,"th",13),e(2077,"Descri\xE7\xE3o"),t()(),n(2078,"tr",14)(2079,"td",15)(2080,"div",23)(2081,"span",24),e(2082," disabled"),o(2083,"br"),t()()(),n(2084,"td",19)(2085,"code",26),e(2086,"boolean "),t(),n(2087,"code",43),e(2088," Function"),t()(),n(2089,"td",22)(2090,"em")(2091,"strong"),e(2092,"(opcional)"),t()(),n(2093,"p"),e(2094,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),t(),n(2095,"p"),e(2096,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),t()()(),n(2097,"tr",14)(2098,"td",15)(2099,"div",23)(2100,"span",24),e(2101," icon"),o(2102,"br"),t()()(),n(2103,"td",19)(2104,"code",25),e(2105,"string "),t(),n(2106,"code",44),e(2107," TemplateRef<void>"),t()(),n(2108,"td",22)(2109,"em")(2110,"strong"),e(2111,"(opcional)"),t()(),n(2112,"p"),e(2113,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),t(),n(2114,"p"),e(2115,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(2116,"a",45),e(2117,"Biblioteca de \xEDcones"),t(),e(2118,". conforme exemplo abaixo:"),t(),n(2119,"pre")(2120,"code"),e(2121,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),t()(),n(2122,"p"),e(2123,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),t(),n(2124,"pre")(2125,"code"),e(2126,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),t()(),n(2127,"p"),e(2128,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(2129,"code"),e(2130,"TemplateRef"),t(),e(2131,`, conforme exemplo abaixo:
component.html:`),t(),n(2132,"pre")(2133,"code"),e(2134,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),t()(),n(2135,"p"),e(2136,"component.ts:"),t(),n(2137,"pre")(2138,"code"),e(2139,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),t()()()(),n(2140,"tr",14)(2141,"td",15)(2142,"div",23)(2143,"span",24),e(2144," label"),o(2145,"br"),t()()(),n(2146,"td",19)(2147,"code",25),e(2148,"string"),t()(),n(2149,"td",22)(2150,"em")(2151,"strong"),e(2152,"(opcional)"),t()(),n(2153,"p"),e(2154,"R\xF3tulo da a\xE7\xE3o."),t()()(),n(2155,"tr",14)(2156,"td",15)(2157,"div",23)(2158,"span",24),e(2159," type"),o(2160,"br"),t()()(),n(2161,"td",19)(2162,"code",25),e(2163,"string"),t()(),n(2164,"td",22)(2165,"em")(2166,"strong"),e(2167,"(opcional)"),t()(),n(2168,"p"),e(2169,"Define a cor do item, sendo "),n(2170,"code"),e(2171,"default"),t(),e(2172," o padr\xE3o."),t(),n(2173,"p"),e(2174,"Valores v\xE1lidos:"),t(),n(2175,"ul")(2176,"li")(2177,"code"),e(2178,"default"),t()(),n(2179,"li")(2180,"code"),e(2181,"danger"),t(),e(2182," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),t()()()(),n(2183,"tr",14)(2184,"td",15)(2185,"div",23)(2186,"span",24),e(2187," visible"),o(2188,"br"),t()()(),n(2189,"td",19)(2190,"code",26),e(2191,"boolean "),t(),n(2192,"code",43),e(2193," Function"),t()(),n(2194,"td",22)(2195,"em")(2196,"strong"),e(2197,"(opcional)"),t()(),n(2198,"p"),e(2199,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),t(),n(2200,"blockquote")(2201,"p"),e(2202,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),t()(),n(2203,"p"),e(2204,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),t(),n(2205,"ul")(2206,"li")(2207,"p"),e(2208,"Fun\xE7\xE3o que deve retornar um booleano."),t()(),n(2209,"li")(2210,"p"),e(2211,"Informar diretamente um valor booleano."),t()()()()()()())},dependencies:[y],encapsulation:2})}return a})();var Oe=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=6;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||a)(ee(pe),ee(me))};static \u0275cmp=b({type:a,selectors:[["ng-component"]],standalone:!1,decls:11,vars:4,consts:[["p-title","Upload",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),S("p-click",function(){return i.changeTab("doc")}),o(3,"sample-po-upload-doc"),t(),n(4,"po-tab",3),S("p-click",function(){return i.changeTab("web")}),o(5,"sample-po-upload-basic-view")(6,"sample-po-upload-labs-view")(7,"sample-po-upload-resume-view")(8,"sample-po-upload-rs-view")(9,"sample-po-upload-download-view")(10,"sample-po-upload-preview-view"),t()()()),r&2&&(E("p-actions",i.actions),m(2),E("p-active",i.activeTab==="doc"),m(2),E("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[fe,w,_,Pe,Te,De,ke,Ve,ze,Re],encapsulation:2})}return a})();var gt=[{path:"",component:Oe}],je=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=G({type:a});static \u0275inj=H({imports:[te.forChild(gt),te]})}return a})();var dn=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=G({type:a});static \u0275inj=H({imports:[_e,je]})}return a})();export{dn as DocPoUploadModule};
