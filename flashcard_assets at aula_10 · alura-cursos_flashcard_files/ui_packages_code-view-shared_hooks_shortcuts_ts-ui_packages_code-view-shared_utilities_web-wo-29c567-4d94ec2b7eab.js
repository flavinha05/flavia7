"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["ui_packages_code-view-shared_hooks_shortcuts_ts-ui_packages_code-view-shared_utilities_web-wo-29c567"],{62353:(e,i,t)=>{t.d(i,{V3:()=>a,_y:()=>s,wk:()=>d});var o=t(95140),r=t(92836);let l={cursorNavigationHopWordLeft:{hotkey:"Alt+ArrowLeft,Ctrl+ArrowLeft",useWhileBlobFocused:!0,noModifierHotkey:["ArrowLeft"],modifierRequired:!0},cursorNavigationHopWordRight:{hotkey:"Alt+ArrowRight,Ctrl+ArrowRight",useWhileBlobFocused:!0,noModifierHotkey:["ArrowRight"],modifierRequired:!0},cursorNavigationTopOfPage:{hotkey:"Meta+ArrowUp",useWhileBlobFocused:!0,noModifierHotkey:["ArrowUp"],modifierRequired:!0},cursorNavigationBottomOfPage:{hotkey:"Meta+ArrowDown",useWhileBlobFocused:!0,noModifierHotkey:["ArrowDown"],modifierRequired:!0},cursorNavigationEnd:{hotkey:"End,Meta+ArrowRight",useWhileBlobFocused:!0,noModifierHotkey:["End"]},cursorNavigationHome:{hotkey:"Home,Meta+ArrowLeft",useWhileBlobFocused:!0,noModifierHotkey:["Home"]},cursorNavigationPageUp:{hotkey:"PageUp",useWhileBlobFocused:!0,noModifierHotkey:["PageUp"]},cursorNavigationPageDown:{hotkey:"PageDown",useWhileBlobFocused:!0,noModifierHotkey:["PageDown"]},cursorNavigationArrowDown:{hotkey:"ArrowDown",useWhileBlobFocused:!0,noModifierHotkey:["ArrowDown"]},cursorNavigationArrowUp:{hotkey:"ArrowUp",useWhileBlobFocused:!0,noModifierHotkey:["ArrowUp"]},cursorNavigationArrowLeft:{hotkey:"ArrowLeft",useWhileBlobFocused:!0,noModifierHotkey:["ArrowLeft"]},cursorNavigationArrowRight:{hotkey:"ArrowRight",useWhileBlobFocused:!0,noModifierHotkey:["ArrowRight"]},cursorNavigationShiftHopWordLeft:{hotkey:"Alt+Shift+ArrowLeft,Ctrl+Shift+ArrowLeft",useWhileBlobFocused:!0,noModifierHotkey:["ArrowLeft"],modifierRequired:!0},cursorNavigationShiftHopWordRight:{hotkey:"Alt+Shift+ArrowRight,Ctrl+Shift+ArrowRight",useWhileBlobFocused:!0,noModifierHotkey:["ArrowRight"],modifierRequired:!0},cursorNavigationShiftTopOfPage:{hotkey:"Meta+Shift+ArrowUp",useWhileBlobFocused:!0,noModifierHotkey:["ArrowUp"],modifierRequired:!0},cursorNavigationShiftBottomOfPage:{hotkey:"Meta+Shift+ArrowDown",useWhileBlobFocused:!0,noModifierHotkey:["ArrowDown"],modifierRequired:!0},cursorNavigationShiftEnd:{hotkey:"Shift+End,Meta+Shift+ArrowRight",useWhileBlobFocused:!0,noModifierHotkey:["End"],modifierRequired:!0},cursorNavigationShiftHome:{hotkey:"Shift+Home,Meta+Shift+ArrowLeft",useWhileBlobFocused:!0,noModifierHotkey:["Home"],modifierRequired:!0},cursorNavigationShiftPageUp:{hotkey:"Shift+PageUp",useWhileBlobFocused:!0,noModifierHotkey:["PageUp"],modifierRequired:!0},cursorNavigationShiftPageDown:{hotkey:"Shift+PageDown",useWhileBlobFocused:!0,noModifierHotkey:["PageDown"],modifierRequired:!0},cursorNavigationShiftArrowDown:{hotkey:"Shift+ArrowDown",useWhileBlobFocused:!0,noModifierHotkey:["ArrowDown"],modifierRequired:!0},cursorNavigationShiftArrowUp:{hotkey:"Shift+ArrowUp",useWhileBlobFocused:!0,noModifierHotkey:["ArrowUp"],modifierRequired:!0},cursorNavigationShiftArrowLeft:{hotkey:"Shift+ArrowLeft",useWhileBlobFocused:!0,noModifierHotkey:["ArrowLeft"],modifierRequired:!0},cursorNavigationShiftArrowRight:{hotkey:"Shift+ArrowRight",useWhileBlobFocused:!0,noModifierHotkey:["ArrowRight"],modifierRequired:!0},cursorNavigationHighlightLine:{text:"J",hotkey:"Shift+J",useWhileBlobFocused:!0,noModifierHotkey:["J"],modifierRequired:!0},cursorNavigationGoLineUp:{hotkey:"Ctrl+p",useWhileBlobFocused:!0,noModifierHotkey:["p"],modifierRequired:!0},cursorNavigationOpenHelpDialog:{hotkey:"Alt+F1,Control+Alt+\u02D9,Control+Alt+h",useWhileBlobFocused:!0,noModifierHotkey:["F1","h","\u02D9"],modifierRequired:!0},cursorNavigationGoLineDown:{hotkey:"Ctrl+n",useWhileBlobFocused:!0,noModifierHotkey:["n"],modifierRequired:!0},cursorNavigationEnter:{text:"\u2318 Enter",hotkey:"Meta+Enter",useWhileBlobFocused:!0,noModifierHotkey:["Enter"],modifierRequired:!0},cursorNavigationSpace:{hotkey:" ",useWhileBlobFocused:!0,noModifierHotkey:[" "],modifierRequired:!1},cursorNavigationShiftSpace:{hotkey:"Shift+ ",useWhileBlobFocused:!0,noModifierHotkey:[" "],modifierRequired:!0},expandAndFocusLineContextMenu:{text:"Shift Alt C",hotkey:"Alt+Shift+C,Alt+Shift+\xc7",useWhileBlobFocused:!0,noModifierHotkey:["C"],modifierRequired:!0},copyFilePathShortcut:{text:"\u2318 shift .",hotkey:"Meta+Shift+>",useWhileBlobFocused:!0,noModifierHotkey:["."],modifierRequired:!0},copyPermalinkShortcut:{text:"\u2318 shift ,",hotkey:"Meta+Shift+<",useWhileBlobFocused:!0,noModifierHotkey:[","],modifierRequired:!0},copyRawContentShortcut:{text:"\u2318 shift c",hotkey:"Meta+Shift+C",useWhileBlobFocused:!0,noModifierHotkey:["c"],modifierRequired:!0},downloadRawContentShortcut:{text:"\u2318 shift s",hotkey:"Meta+Shift+S",useWhileBlobFocused:!0,noModifierHotkey:["s"],modifierRequired:!0},editFileShortcut:{hotkey:"e,Shift+E",useWhileBlobFocused:!0,noModifierHotkey:["e","E"]},goToLineShortcut:{text:"l",hotkey:"l,Shift+L",ariaKeyShortcuts:"l",useWhileBlobFocused:!0,noModifierHotkey:["l","L"]},alternativeGoToLineShortcut:{hotkey:"Mod+Alt+g",ariaKeyShortcuts:"Mod+Alt+g",useWhileBlobFocused:!0,noModifierHotkey:["g","G"]},findInFileShortcut:{hotkey:"Meta+f, F3",text:"\u2318 f",ariaKeyShortcuts:"Meta+F",useWhileBlobFocused:!0,noModifierHotkey:["f","F3"],modifierRequired:!0},findFilesShortcut:{hotkey:"t,Shift+T",useWhileBlobFocused:!0,noModifierHotkey:["t","T"]},findSelectionShortcut:{hotkey:"Meta+e",useWhileBlobFocused:!0,noModifierHotkey:["e"],modifierRequired:!0},findNextShortcut:{hotkey:"Mod+g"},findPrevShortcut:{hotkey:"Mod+Shift+G"},openWithGitHubDevShortcut:{hotkey:"., Meta+Shift+/",useWhileBlobFocused:!0,noModifierHotkey:["."]},openWithGitHubDevInNewWindowShortcut:{hotkey:"Shift+.,Shift+>,>",useWhileBlobFocused:!0,noModifierHotkey:[">"]},permalinkShortcut:{hotkey:"y,Shift+Y",useWhileBlobFocused:!0,noModifierHotkey:["y","Y"]},searchShortcut:{hotkey:"/",useWhileBlobFocused:!0,noModifierHotkey:["/"]},selectAllShortcut:{hotkey:"Meta+a",useWhileBlobFocused:!0,noModifierHotkey:["a"],modifierRequired:!0},selectEditTabShortcut:{hotkey:"Mod+Shift+P"},submitCommitDialogShortcut:{hotkey:"Mod+Enter"},refSelectorShortcut:{hotkey:"w",text:"w",useWhileBlobFocused:!0,noModifierHotkey:["w"]},escapeRightClickMenu:{hotkey:"Escape",useWhileBlobFocused:!0,noModifierHotkey:["Escape"]},toggleFocusedPaneShortcut:{hotkey:"Meta+F6,Meta+Shift+F6",useWhileBlobFocused:!0,noModifierHotkey:["F6"],modifierRequired:!0},toggleSymbolsShortcut:{hotkey:"Meta+i",useWhileBlobFocused:!0,noModifierHotkey:["i"],modifierRequired:!0},toggleTreeShortcut:{hotkey:"Meta+b",useWhileBlobFocused:!0,noModifierHotkey:["b"],modifierRequired:!0},viewBlameShortcut:{hotkey:"b,Shift+B,Meta+/ Meta+b",useWhileBlobFocused:!0,noModifierHotkey:["b"]},viewCodeShortcut:{hotkey:"Meta+/ Meta+c",useWhileBlobFocused:!0,modifierRequired:!0},viewPreviewShortcut:{hotkey:"Meta+/ Meta+p"},viewRawContentShortcut:{text:"\u2318 / \u2318 r",hotkey:"Meta+/ Meta+r",useWhileBlobFocused:!0,noModifierHotkey:["r"],modifierRequired:!0},findSymbolShortcut:{hotkey:"r,Shift+R",useWhileBlobFocused:!0,noModifierHotkey:["r","R"],modifierRequired:!1}},n=new Map;function d(){let e=(0,r.X)(["mac"]),[i]=(0,o.I)(()=>!1,!0,[]),t=0;if(e?t=1:i||(t=2),!n.has(t)){var d,s;let o=l;e||i||(o=Object.keys(d=o).reduce((e,i)=>{let t=d[i];return e[i]={hotkey:t.hotkey?.replace(/Meta/g,"Control"),text:t.text?.replace(/⌘/g,"Ctrl").replace(/⇧/g,"Shift"),ariaKeyShortcuts:t.ariaKeyShortcuts?.replace(/Meta/g,"Control"),useWhileBlobFocused:t.useWhileBlobFocused,modifierRequired:t.modifierRequired,noModifierHotkey:t.noModifierHotkey},e},{})),i&&(o=Object.keys(s=o).reduce((e,i)=>{let t=s[i];return e[i]={hotkey:void 0,text:t.text?.replace(/⌘/g,"Ctrl").replace(/⇧/g,"Shift"),ariaKeyShortcuts:t.ariaKeyShortcuts?.replace(/Meta/g,"Control"),useWhileBlobFocused:t.useWhileBlobFocused,modifierRequired:t.modifierRequired,noModifierHotkey:t.noModifierHotkey},e},{})),n.set(t,o)}return n.get(t)}function s(){let e=d();return Object.keys(e).reduce((i,t)=>{let o=e[t];if(o.useWhileBlobFocused&&o.noModifierHotkey&&o.modifierRequired)for(let e of o.noModifierHotkey)i.includes(e)||i.push(e);return i},[])}function a(){let e=d();return Object.keys(e).reduce((i,t)=>{let o=e[t];if(o.useWhileBlobFocused&&o.noModifierHotkey&&!o.modifierRequired)for(let e of o.noModifierHotkey)i.includes(e)||i.push(e);return i},[])}},37363:(e,i,t)=>{t.d(i,{z:()=>WebWorker});let WebWorker=class WebWorker{set onmessage(e){this.worker.onmessage=e}postMessage(e){this.worker.postMessage(e)}terminate(){this.worker.terminate()}constructor(e,i){try{this.worker=new Worker(e)}catch(e){console.warn("Web workers are not available. Please enable web workers to benefit from the improved performance."),this.worker=new MainThreadWorker(i)}}};let MainThreadWorker=class MainThreadWorker{async postMessage(e){if(this.terminated)return;let i={data:this.job({data:e})};this.onmessage?.(i)}terminate(){this.terminated=!0}constructor(e){this.job=e,this.terminated=!1}}},51888:(e,i,t)=>{function o(e){return`line-${e}`}function r(e,i,t){return`${e}${"left"===i?"L":"R"}${t}`}function l(e){return"DELETION"===e?"left":"right"}function n(e,i=!1,t=!1){if(t)return"var(--bgColor-attention-muted, var(--color-attention-subtle))";switch(e){case"ADDITION":return i?"var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num))":"var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line))";case"DELETION":return i?"var(--diffBlob-deletionNum-bgColor, var(--diffBlob-deletion-bgColor-num))":"var(--diffBlob-deletionLine-bgColor, var(--diffBlob-deletion-bgColor-line))";case"HUNK":return i?"var(--diffBlob-hunkNum-bgColor, var(--diffBlob-hunk-bgColor-num))":"var(--diffBlob-hunkLine-bgColor, var(--bgColor-accent-muted))";case"EMPTY":return i?"var(--diffBlob-emptyNum-bgColor, var(--diffBlob-hunk-bgColor-num))":"var(--diffBlob-emptyLine-bgColor, var(--bgColor-accent-muted))";default:return}}function d(e){let i=0;if(e)for(let t of e)i=Math.max(i,t?.left??0,t?.right??0);return Math.max(8*i.toString().length+20,40).toString()}t.d(i,{IQ:()=>r,Sq:()=>o,XU:()=>l,c7:()=>d,gK:()=>n})},94640:(e,i,t)=>{t.d(i,{Jg:()=>a,nq:()=>u,uP:()=>f.u,zl:()=>c.z,$e:()=>p,P3:()=>m,wj:()=>x,l4:()=>M,Qe:()=>b,Ah:()=>j});var o=t(74848),r=t(20053),l=t(22084),n=t(51888);let d=e=>{let{dragging:i,isHighlighted:t,isLeftColumn:d,colSpan:s,line:a,lineAnchor:h}=e,u=a.html,f="";return["ADDITION","DELETION"].includes(a.type)&&["+","-"].includes(u[0])&&(f=u[0],u=u.slice(1)),(0,o.jsx)("td",{className:(0,r.$)("diff-text-cell",{"border-left color-border-accent-emphasis":i&&t,"border-right":d&&"HUNK"!==a.type}),colSpan:s,id:h?(0,n.Sq)(h):void 0,style:{backgroundColor:(0,n.gK)(a.type,!1,t)},children:(0,o.jsxs)("code",{"data-code-marker":f,className:(0,r.$)("diff-text syntax-highlighted-line",{addition:"ADDITION"===a.type,deletion:"DELETION"===a.type}),children:[e.lineChild,(0,o.jsx)(l.mo,{className:(0,r.$)("diff-text-inner",{"color-fg-muted":"HUNK"===a.type}),html:u,style:{marginLeft:"CONTEXT"===a.type?"-7px":void 0}})]})})};try{d.displayName||(d.displayName="DiffText")}catch{}let s=({ariaLabel:e,children:i,hasExpanderButton:t,lineType:l,colSpan:d,interactiveProps:s,isHighlighted:a,...h})=>{let u=(0,o.jsx)("code",{className:"pr-2",children:i});return s&&(u=(0,o.jsx)("button",{className:"diff-line-number-button",...s,"aria-label":e,children:u})),(0,o.jsx)("td",{"aria-label":s?void 0:e,"data-line-number":!0,className:(0,r.$)("diff-line-number",{"has-expander":t,clickable:!!s}),colSpan:d||1,style:{backgroundColor:(0,n.gK)(l,!0,a)},...h,children:u})};try{s.displayName||(s.displayName="LineNumber")}catch{}let a=({dragging:e,isHighlighted:i,isLeftColumn:t,isSplit:r,lineAnchor:l,line:n,lineChild:a,onLineNumberClick:h})=>{let u="CONTEXT"===n.type||"INJECTED_CONTEXT"===n.type,f="ADDITION"!==n.type,c=f||!r,y="DELETION"!==n.type,m=y&&!u||!r,g=r&&u?t?n.left:n.right:n.left;return(0,o.jsxs)(o.Fragment,{children:[c&&(0,o.jsx)(s,{ariaLabel:`Line ${f?n.left?.toString():n.right?.toString()}`,lineType:n.type,interactiveProps:h?{onClick:h}:null,isHighlighted:i,children:f&&g}),m&&(0,o.jsx)(s,{ariaLabel:`Line ${y?n.right?.toString():n.left?.toString()}`,lineType:n.type,interactiveProps:h?{onClick:h}:null,isHighlighted:i,children:y&&n.right}),(0,o.jsx)(d,{dragging:e,isHighlighted:i,isLeftColumn:t,line:n,lineAnchor:l,lineChild:a})]})};try{a.displayName||(a.displayName="DiffLinePart")}catch{}var h=t(75177);function u(){return(0,o.jsx)(h.A,{"aria-hidden":"true",as:"svg",version:"1.1",viewBox:"0 0 340 84",xmlns:"http://www.w3.org/2000/svg",sx:{bottom:"0 !important",clip:"rect(1px, 1px, 1px, 1px)",clipPath:"inset(50%)",height:"84px",position:"absolute",width:"320px"},children:(0,o.jsxs)("defs",{children:[(0,o.jsxs)("clipPath",{id:"diff-placeholder",children:[(0,o.jsx)("rect",{height:"11.9298746",rx:"2",width:"67.0175439",x:"0",y:"0"}),(0,o.jsx)("rect",{height:"11.9298746",rx:"2",width:"100.701754",x:"18.9473684",y:"47.7194983"}),(0,o.jsx)("rect",{height:"11.9298746",rx:"2",width:"37.8947368",x:"0",y:"71.930126"}),(0,o.jsx)("rect",{height:"11.9298746",rx:"2",width:"53.3333333",x:"127.017544",y:"48.0703769"}),(0,o.jsx)("rect",{height:"11.9298746",rx:"2",width:"72.9824561",x:"187.719298",y:"48.0703769"}),(0,o.jsx)("rect",{height:"11.9298746",rx:"2",width:"140.350877",x:"76.8421053",y:"0"}),(0,o.jsx)("rect",{height:"11.9298746",rx:"2",width:"140.350877",x:"17.8947368",y:"23.8597491"}),(0,o.jsx)("rect",{height:"11.9298746",rx:"2",width:"173.684211",x:"166.315789",y:"23.8597491"})]}),(0,o.jsxs)("linearGradient",{id:"animated-diff-gradient",spreadMethod:"reflect",x1:"0",x2:"0",y1:"0",y2:"1",children:[(0,o.jsx)("stop",{offset:"0",stopColor:"#eee"}),(0,o.jsx)("stop",{offset:"0.2",stopColor:"#eee"}),(0,o.jsx)("stop",{offset:"0.5",stopColor:"#ddd"}),(0,o.jsx)("stop",{offset:"0.8",stopColor:"#eee"}),(0,o.jsx)("stop",{offset:"1",stopColor:"#eee"}),(0,o.jsx)("animateTransform",{attributeName:"y1",dur:"1s",repeatCount:"3",values:"0%; 100%; 0"}),(0,o.jsx)("animateTransform",{attributeName:"y2",dur:"1s",repeatCount:"3",values:"100%; 200%; 0"})]})]})})}try{u.displayName||(u.displayName="DiffPlaceholder")}catch{}var f=t(73560),c=t(97394),y=t(38621);function m({currentLine:e,hunkButton:i,isLeftColumn:t,isSplit:r}){return r&&!t?null:(0,o.jsxs)(o.Fragment,{children:[i?(0,o.jsx)(s,{colSpan:r?1:2,hasExpanderButton:!0,lineType:e.type,children:i}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s,{lineType:e.type,children:(0,o.jsx)(y.KebabHorizontalIcon,{})}),!r&&(0,o.jsx)(s,{lineType:e.type,children:(0,o.jsx)(y.KebabHorizontalIcon,{})})]}),(0,o.jsx)(d,{isHighlighted:!1,isLeftColumn:!0,colSpan:r?3:void 0,line:e})]})}try{m.displayName||(m.displayName="HunkHeaderDiffLine")}catch{}function g(){return(0,o.jsx)("div",{className:"hunk-kebab-icon pr-2 pb-1",children:(0,o.jsx)(y.KebabHorizontalIcon,{})})}try{g.displayName||(g.displayName="HunkKebabIcon")}catch{}function p({isLeftColumn:e}){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s,{lineType:"EMPTY"}),(0,o.jsx)("td",{className:(0,r.$)("empty-diff-line",{"border-right":e}),colSpan:1})]})}try{p.displayName||(p.displayName="EmptyDiffLine")}catch{}function x(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("thead",{className:"sr-only",children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{scope:"col",children:"Original file line number"}),(0,o.jsx)("th",{scope:"col",children:"Original file line"}),(0,o.jsx)("th",{scope:"col",children:"Diff line number"}),(0,o.jsx)("th",{scope:"col",children:"Diff line change"})]})}),(0,o.jsxs)("colgroup",{children:[(0,o.jsx)("col",{width:e.lineWidth}),(0,o.jsx)("col",{}),(0,o.jsx)("col",{width:e.lineWidth}),(0,o.jsx)("col",{})]}),(0,o.jsx)("tbody",{children:e.children})]})}try{x.displayName||(x.displayName="SplitDiffTable")}catch{}function b(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("thead",{className:"sr-only",children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{scope:"col",children:"Original file line number"}),(0,o.jsx)("th",{scope:"col",children:"Diff line number"}),(0,o.jsx)("th",{scope:"col",children:"Diff line change"})]})}),(0,o.jsxs)("colgroup",{children:[(0,o.jsx)("col",{width:e.lineWidth}),(0,o.jsx)("col",{width:e.lineWidth}),(0,o.jsx)("col",{width:"100%"})]}),(0,o.jsx)("tbody",{children:e.children})]})}try{b.displayName||(b.displayName="UnifiedDiffTable")}catch{}let k={diffTextCell:"UnifiedDiffLines-module__diffTextCell--UAuIr",diffHunkCell:"UnifiedDiffLines-module__diffHunkCell--qPkzg",diffHunkText:"UnifiedDiffLines-module__diffHunkText--Sfwuu",diffTextInner:"UnifiedDiffLines-module__diffTextInner--IuEAA",diffTextMarker:"UnifiedDiffLines-module__diffTextMarker--MdAo4",syntaxHighlightedAdditionLine:"UnifiedDiffLines-module__syntaxHighlightedAdditionLine--lU_S2",syntaxHighlightedDeletionLine:"UnifiedDiffLines-module__syntaxHighlightedDeletionLine--xgQwN",diffLineNumber:"UnifiedDiffLines-module__diffLineNumber--bzzxf"};function N({line:e,children:i}){return(0,o.jsx)("td",{className:k.diffLineNumber,style:{backgroundColor:(0,n.gK)(e.type,!0),textAlign:"center"},children:(0,o.jsx)("code",{children:i})})}function S({line:e}){return(0,o.jsx)("td",{colSpan:4,className:k.diffHunkCell,valign:"top",children:(0,o.jsxs)(h.A,{sx:{display:"flex",flexDirection:"row"},children:[(0,o.jsx)(g,{}),(0,o.jsx)("code",{className:k.diffHunkText,children:(0,o.jsx)(l.mo,{className:(0,r.$)(k.diffTextInner,"color-fg-muted"),html:e.html})})]})})}function w({line:e}){let i="HUNK"===e.type,t="ADDITION"!==e.type,d="DELETION"!==e.type,s="ADDITION"===e.type?"+":"DELETION"===e.type?"-":void 0;return(0,o.jsxs)("tr",{children:[i&&(0,o.jsx)(S,{line:e}),!i&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(N,{line:e,children:t&&e.left}),(0,o.jsx)(N,{line:e,children:d&&e.right}),(0,o.jsx)("td",{className:k.diffTextCell,style:{backgroundColor:(0,n.gK)(e.type,!1)},children:(0,o.jsxs)("code",{className:(0,r.$)("ADDITION"===e.type&&k.syntaxHighlightedAdditionLine,"DELETION"===e.type&&k.syntaxHighlightedDeletionLine),children:[!!s&&(0,o.jsx)("span",{className:k.diffTextMarker,children:s}),(0,o.jsx)(l.mo,{className:k.diffTextInner,html:e.html,style:{backgroundColor:(0,n.gK)(e.type,!1)}})]})})]})]})}function M({sx:e,lines:i,lineWidth:t,tabSize:r}){let l=i.map((e,i)=>(0,o.jsx)(w,{line:e,tabSize:r},i));return(0,o.jsx)(h.A,{as:"table",className:"tab-size","data-tab-size":r,sx:{borderTop:0,borderBottom:0,borderLeft:1,borderRight:1,borderStyle:"solid",borderColor:"border.muted",...e},children:(0,o.jsx)(b,{lineWidth:t,children:l})})}try{N.displayName||(N.displayName="LineNumberCell")}catch{}try{S.displayName||(S.displayName="HunkCell")}catch{}try{w.displayName||(w.displayName="UnifiedDiffRow")}catch{}try{M.displayName||(M.displayName="UnifiedDiffLines")}catch{}function H(e){return"LEFT"===e?"-":"RIGHT"===e?"+":""}function j({startDiffSide:e,endDiffSide:i,originalStartLine:t,originalEndLine:o}){return e&&i&&"number"==typeof t&&"number"==typeof o?0===t&&1===o&&e===i?"-1 to +1":e===i&&t===o?`${H(e)}${t}`:`${H(e)}${t} to ${H(i)}${o}`:""}},60188:(e,i,t)=>{t.d(i,{D:()=>l});var o=t(7572),r=t(97156);function l(e){if(!r.XC)return;let i=r.XC.querySelector("title"),t=r.XC.createElement("title");t.textContent=e,i?i.textContent!==e&&(i.replaceWith(t),(0,o.i)(e)):(r.XC.head.appendChild(t),(0,o.i)(e))}},27500:(e,i,t)=>{t.d(i,{Z:()=>r});var o=t(96540);function r({focusRowRef:e,mouseRowRef:i}){let[t,r]=o.useState(!1);return o.useEffect(()=>{if(e.current&&i.current){let t=()=>{let i=e.current?.querySelector(".PRIVATE_TreeView-item-content-text");i?.scrollWidth!==i?.offsetWidth&&r(!0)};e.current.onfocus=()=>{t()},e.current.onblur=()=>{r(!1)},i.current.onmouseenter=()=>{t()},i.current.onmouseleave=()=>{r(!1)}}},[e,i]),t}},89504:(e,i,t)=>{t.d(i,{d:()=>n,t:()=>d});var o=t(74848),r=t(96540);let l=r.createContext({});function n({repository:e,children:i}){return(0,o.jsxs)(l.Provider,{value:e,children:[" ",i," "]})}function d(){return r.useContext(l)}try{l.displayName||(l.displayName="CurrentRepositoryContext")}catch{}try{n.displayName||(n.displayName="CurrentRepositoryProvider")}catch{}},86584:(e,i,t)=>{t.d(i,{Q:()=>n,i:()=>d});var o=t(74848),r=t(96540);let l=r.createContext(void 0);function n({user:e,children:i}){return(0,o.jsxs)(l.Provider,{value:e,children:[" ",i," "]})}function d(){return r.useContext(l)}try{l.displayName||(l.displayName="CurrentUserContext")}catch{}try{n.displayName||(n.displayName="CurrentUserProvider")}catch{}},73560:(e,i,t)=>{t.d(i,{u:()=>n});var o=t(74848),r=t(20053);let l={diffSquare:"DiffSquares-module__diffSquare--h5kjy",addition:"DiffSquares-module__addition--jeNtt",deletion:"DiffSquares-module__deletion--hKV3q",neutral:"DiffSquares-module__neutral--VlyoP"};function n({squares:e}){return(0,o.jsx)("div",{className:"d-flex",children:e.map((e,i)=>(0,o.jsx)("div",{"data-testid":`${e} diffstat`,className:(0,r.$)(l.diffSquare,l[e])},i))})}try{n.displayName||(n.displayName="DiffSquares")}catch{}},97394:(e,i,t)=>{t.d(i,{z:()=>d});var o=t(74848),r=t(94977),l=t(73560);let n={addition:"addition",deletion:"deletion",neutral:"neutral"};function d({linesAdded:e=0,linesDeleted:i=0,linesChanged:t=0,tooltipDirection:d}){if(!e&&!i&&!t||0===t)return null;let{greenSquares:s,redSquares:a,graySquares:h}=function(e,i,t){let o=t>5?5/t:1,r=Math.floor(e*o),l=Math.floor(i*o);return{greenSquares:r,redSquares:l,graySquares:5-r-l}}(e,i,t),u=[...Array(s).fill(n.addition),...Array(a).fill(n.deletion),...Array(h).fill(n.neutral)];return(0,o.jsxs)("div",{className:"d-flex flex-items-center gap-1 px-1",children:[e>0&&(0,o.jsxs)("span",{className:"f6 text-bold fgColor-success",children:["+",e]}),i>0&&(0,o.jsxs)("span",{className:"f6 text-bold fgColor-danger",children:["-",i]}),(0,o.jsx)(r.A,{"aria-label":function({linesAdded:e,linesChanged:i,linesDeleted:t}){return`${i} ${1===i?"change":"changes"}: ${e} ${1===e?"addition":"additions"} & ${t} ${1===t?"deletion":"deletions"}`}({linesAdded:e,linesChanged:t,linesDeleted:i}),direction:d??"e",children:(0,o.jsx)(l.u,{squares:u})})]})}try{d.displayName||(d.displayName="DiffStats")}catch{}}}]);
//# sourceMappingURL=ui_packages_code-view-shared_hooks_shortcuts_ts-ui_packages_code-view-shared_utilities_web-wo-29c567-e6efc02c095e.js.map