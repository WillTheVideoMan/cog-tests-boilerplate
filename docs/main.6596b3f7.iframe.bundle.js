(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1005:function(module,exports){},1008:function(module,exports){},1017:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(388).configure)([__webpack_require__(1018)],module,!1)}).call(this,__webpack_require__(71)(module))},1018:function(module,exports,__webpack_require__){var map={"./App/App.stories.js":1030,"./Button/Button.stories.js":1023,"./Spinner/Spinner.stories.js":1024,"./TextInput/TextInput.stories.js":1034};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1018},1023:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Confirm",(function(){return Confirm})),__webpack_require__.d(__webpack_exports__,"Danger",(function(){return Danger})),__webpack_require__.d(__webpack_exports__,"Inactive",(function(){return Inactive})),__webpack_require__.d(__webpack_exports__,"Loading",(function(){return Loading})),__webpack_require__.d(__webpack_exports__,"FullWidth",(function(){return FullWidth}));__webpack_require__(9),__webpack_require__(223);var react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(186),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(6);react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;__webpack_exports__.default={title:"Button",component:_Button__WEBPACK_IMPORTED_MODULE_3__.a,argTypes:{handleClick:{action:"handle click"},variant:{control:{type:"select",options:["default","danger","confirm","ghost"]}}}};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__.a,Object.assign({},args))};Template.displayName="Template";var Default=Template.bind({});Default.args={children:"Default",variant:"default",disabled:!1,loading:!1,fullWidth:!1};var Confirm=Template.bind({});Confirm.args={children:"Confirm",variant:"confirm",disabled:!1,loading:!1,fullWidth:!1};var Danger=Template.bind({});Danger.args={children:"Danger",variant:"danger",disabled:!1,loading:!1,fullWidth:!1};var Inactive=Template.bind({});Inactive.args={children:"Inactive",variant:"ghost",disabled:!0,loading:!1,fullWidth:!1};var Loading=Template.bind({});Loading.args={children:"Loading",variant:"default",disabled:!1,loading:!0,fullWidth:!1};var FullWidth=Template.bind({});FullWidth.args={children:"Full Width",variant:"default",disabled:!1,loading:!1,fullWidth:!0},Default.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Default.parameters),Confirm.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Confirm.parameters),Danger.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Danger.parameters),Inactive.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Inactive.parameters),Loading.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Loading.parameters),FullWidth.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},FullWidth.parameters)},1024:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__(9),__webpack_require__(223);var react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_Spinner__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(184),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(6);react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;__webpack_exports__.default={title:"Spinner",component:_Spinner__WEBPACK_IMPORTED_MODULE_3__.a,argTypes:{variant:{control:{type:"select",options:["light","dark"]}}}};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Spinner__WEBPACK_IMPORTED_MODULE_3__.a,Object.assign({},args))};Template.displayName="Template";var Default=Template.bind({});Default.args={variant:"dark",size:24},Default.parameters=Object.assign({storySource:{source:"(args) => <Spinner {...args} />"}},Default.parameters)},1028:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"decorators",(function(){return decorators})),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(17),__webpack_require__(42),__webpack_require__(52),__webpack_require__(1012),__webpack_require__(39),__webpack_require__(40),__webpack_require__(1013),__webpack_require__(1014),__webpack_require__(1015);var _templateObject,client_api=__webpack_require__(98),esm=__webpack_require__(5),react=__webpack_require__(0),react_default=__webpack_require__.n(react),taggedTemplateLiteral=__webpack_require__(547),styled_components_browser_esm=__webpack_require__(47),constants=__webpack_require__(28),GlobalStyle=Object(styled_components_browser_esm.a)(_templateObject||(_templateObject=Object(taggedTemplateLiteral.a)(["\n    /* http://meyerweb.com/eric/tools/css/reset/ \n    v2.0 | 20110126\n    License: none (public domain)\n    */\n    html, body, div, span, applet, object, iframe,\n    h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n    a, abbr, acronym, address, big, cite, code,\n    del, dfn, em, img, ins, kbd, q, s, samp,\n    small, strike, strong, sub, sup, tt, var,\n    b, u, i, center,\n    dl, dt, dd, ol, ul, li,\n    fieldset, form, label, legend,\n    table, caption, tbody, tfoot, thead, tr, th, td,\n    article, aside, canvas, details, embed, \n    figure, figcaption, footer, header, hgroup, \n    menu, nav, output, ruby, section, summary, \n    time, mark, audio, video {\n\t    margin: 0;\n\t    padding: 0;\n\t    border: 0;\n\t    font-size: 100%;\n\t    vertical-align: baseline;\n    }\n    /* HTML5 display-role reset for older browsers */\n    article, aside, details, figcaption, figure, \n    footer, header, hgroup, menu, nav, section {\n    \tdisplay: block;\n    }\n    ol, ul {\n\t    list-style: none;\n    }\n    blockquote, q {\n\t    quotes: none;\n    }\n    blockquote:before, blockquote:after,\n    q:before, q:after {\n\t    content: '';\n\t    content: none;\n    }\n    table {\n\t    border-collapse: collapse;\n\t    border-spacing: 0;\n    }\n\n    /* Custom Global Styles */\n    *,\n    *:before,\n    *:after {\n        box-sizing: border-box;\n        line-height: 1.45;\n        font-family: 'Lato', sans-serif;\n    }\n    *:focus:not(:focus-visible) {\n      outline: 4px solid transparent;\n    }\n    *:focus-visible {\n      box-shadow: 0 0 0 4px ",";\n      outline: 4px solid transparent;\n    }\n    html, body, #__next {\n        height: 100%;\n    }\n    #__next {\n        isolation: isolate;\n    }\n    a {\n      color: ",";\n    }\n"])),constants.a.alert.default,constants.a.secondary.default),jsx_runtime=__webpack_require__(6),decorators=(react_default.a.createElement,[function(Story){return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(GlobalStyle,{}),Object(jsx_runtime.jsx)(Story,{})]})}]),parameters={actions:{argTypesRegex:"^on[A-Z].*"}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.b)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.c)(loader,!1)}));case"parameters":return Object(client_api.d)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.d)(v,!1);default:return console.log(key+" was not supported :( !")}}))},1030:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__(9),__webpack_require__(223);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),slicedToArray=__webpack_require__(549),styled_components_browser_esm=__webpack_require__(47),client=__webpack_require__(244),Button=__webpack_require__(186),jsx_runtime=__webpack_require__(6),Title=(react_default.a.createElement,styled_components_browser_esm.b.h1.withConfig({displayName:"App__Title",componentId:"hlrrig-0"})(["color:red;font-size:","rem;text-align:center;"],1.5)),Area=styled_components_browser_esm.b.div.withConfig({displayName:"App__Area",componentId:"hlrrig-1"})(["position:relative;padding:16px;border:2px dashed black;border-radius:16px;"]),Label=styled_components_browser_esm.b.p.withConfig({displayName:"App__Label",componentId:"hlrrig-2"})(["position:absolute;top:-12px;background:white;padding-left:8px;margin-left:-4px;padding-right:8px;font-weight:bold;"]),Wrapper=styled_components_browser_esm.b.div.withConfig({displayName:"App__Wrapper",componentId:"hlrrig-3"})(["max-width:500px;margin:auto;display:grid;gap:16px;"]),App_App=function App(){var _useSession=Object(client.useSession)(),_useSession2=Object(slicedToArray.a)(_useSession,2),session=_useSession2[0],loading=_useSession2[1];return Object(jsx_runtime.jsxs)(Wrapper,{children:[Object(jsx_runtime.jsx)(Title,{children:"Cognitive Tests Boilerplate"}),Object(jsx_runtime.jsxs)(Area,{children:[Object(jsx_runtime.jsx)(Label,{children:"Authentication"}),!session&&!loading&&Object(jsx_runtime.jsxs)("ul",{children:[Object(jsx_runtime.jsx)("li",{children:"Not signed in"}),Object(jsx_runtime.jsx)("li",{children:Object(jsx_runtime.jsx)(Button.a,{handleClick:function handleClick(){return Object(client.signIn)()},variant:"default",fullWidth:!0,children:"Sign In"})})]}),session&&Object(jsx_runtime.jsxs)("ul",{children:[Object(jsx_runtime.jsxs)("li",{children:["Signed in as ",session.user.id]}),Object(jsx_runtime.jsxs)("li",{children:["Roles: ",session.user.roles]}),Object(jsx_runtime.jsxs)("li",{children:[Object(jsx_runtime.jsx)("a",{href:"/api/admin/gate-example",children:"Visit here"})," to see if you are a super secret admin."]}),Object(jsx_runtime.jsx)("li",{children:Object(jsx_runtime.jsx)(Button.a,{handleClick:function handleClick(){return Object(client.signOut)()},variant:"default",fullWidth:!0,children:"Sign Out"})})]}),loading&&Object(jsx_runtime.jsx)("ul",{children:Object(jsx_runtime.jsx)("li",{children:"Loading..."})})]}),Object(jsx_runtime.jsxs)(Area,{children:[Object(jsx_runtime.jsx)(Label,{children:"Sentry"}),Object(jsx_runtime.jsxs)("ul",{children:[Object(jsx_runtime.jsxs)("li",{children:[Object(jsx_runtime.jsx)("a",{href:"/api/admin/sentry-example",children:"Visit Here"})," to send an API request test error to Sentry."]}),Object(jsx_runtime.jsx)("li",{children:"Click to trigger a client-side error:"}),Object(jsx_runtime.jsx)("li",{children:Object(jsx_runtime.jsx)(Button.a,{handleClick:function handleClick(){throw new Error("A Client-side Error that Sentry will see.")},variant:"danger",fullWidth:!0,children:"Trigger"})})]})]}),Object(jsx_runtime.jsxs)(Area,{children:[Object(jsx_runtime.jsx)(Label,{children:"Storybook"}),Object(jsx_runtime.jsx)("a",{href:"https://willthevideoman.github.io/cog-tests-boilerplate/",children:"Visit Here"})," to see the Storybook Docs."]}),Object(jsx_runtime.jsxs)(Area,{children:[Object(jsx_runtime.jsx)(Label,{children:"Deployment Pipeline"}),Object(jsx_runtime.jsxs)("ul",{children:[Object(jsx_runtime.jsx)("li",{children:"Linting from ESLint"}),Object(jsx_runtime.jsx)("li",{children:"Formatting from Prettier"}),Object(jsx_runtime.jsx)("li",{children:"Testing from Jest"}),Object(jsx_runtime.jsx)("li",{children:" Hosting from Vercel"}),Object(jsx_runtime.jsx)("li",{children:"Data from FaunaDB"})]})]})]})};App_App.displayName="App",App_App.__docgenInfo={description:"Ayo this do be an app.",methods:[],displayName:"App"};var components_App_App=App_App;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/App/App.js"]={name:"App",docgenInfo:App_App.__docgenInfo,path:"src/components/App/App.js"});react_default.a.createElement,__webpack_exports__.default={title:"App",component:components_App_App};var App_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(components_App_App,Object.assign({},args))};App_stories_Template.displayName="Template";var Default=App_stories_Template.bind({});Default.args={},Default.parameters=Object.assign({storySource:{source:"(args) => <App {...args} />"}},Default.parameters)},1034:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Inactive",(function(){return Inactive}));__webpack_require__(9),__webpack_require__(223);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),objectWithoutProperties=__webpack_require__(149),styled_components_browser_esm=(__webpack_require__(10),__webpack_require__(47)),constants=__webpack_require__(28),jsx_runtime=__webpack_require__(6),Wrapper=(react_default.a.createElement,styled_components_browser_esm.b.div.withConfig({displayName:"TextInput__Wrapper",componentId:"sc-5gm92g-0"})(["display:flex;flex-direction:column;"])),FormLabel=styled_components_browser_esm.b.label.withConfig({displayName:"TextInput__FormLabel",componentId:"sc-5gm92g-1"})(["font-size:","rem;text-transform:uppercase;letter-spacing:2px;color:var(--input-color);margin-bottom:8px;"],.875),Input=styled_components_browser_esm.b.input.withConfig({displayName:"TextInput__Input",componentId:"sc-5gm92g-2"})(["padding:8px 16px;border:none;border-radius:8px;border:2px solid var(--input-border-color);font-size:","rem;color:var(--input-color);cursor:var(--input-cursor);&:hover{border-color:var(--input-border-color--hover);}&::placeholder{color:var(--input-placeholder-color);}"],1),VARIANTS={default:{"--input-color":constants.a.grey[200],"--input-placeholder-color":constants.a.grey[600],"--input-color--error":constants.a.bad.default,"--input-border-color":constants.a.grey[400],"--input-border-color--hover":constants.a.grey[200]},ghost:{"--input-color":constants.a.grey[600],"--input-placeholder-color":constants.a.grey[600],"--input-color--error":constants.a.grey[600],"--input-border-color":constants.a.grey[600],"--input-border-color--hover":constants.a.grey[600]}},ACTIVE_STATES={active:{"--input-cursor":"pointer"},disabled:{"--input-cursor":"not-allowed"}},TextInput_TextInput=function TextInput(_ref){var label=_ref.label,variant=_ref.variant,disabled=_ref.disabled,props=Object(objectWithoutProperties.a)(_ref,["label","variant","disabled"]),variantStyles=VARIANTS[variant];if(!variantStyles)throw new Error("No input variant found for variant: ".concat(variant));var styles=Object.assign({},variantStyles,ACTIVE_STATES[disabled?"disabled":"inactive"]);return Object(jsx_runtime.jsxs)(Wrapper,{style:styles,children:[Object(jsx_runtime.jsx)(FormLabel,{htmlFor:props.name,children:label}),Object(jsx_runtime.jsx)(Input,Object.assign({},props,{disabled:disabled}))]})};TextInput_TextInput.displayName="TextInput",TextInput_TextInput.defaultProps={variant:"default"},TextInput_TextInput.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"string"},required:!1,description:""},label:{type:{name:"string"},required:!1,description:""},value:{type:{name:"string"},required:!1,description:""},disabled:{type:{name:"bool"},required:!1,description:""},name:{type:{name:"string"},required:!1,description:""},type:{type:{name:"string"},required:!1,description:""},placeholder:{type:{name:"string"},required:!1,description:""}}};var components_TextInput_TextInput=TextInput_TextInput;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextInput/TextInput.js"]={name:"TextInput",docgenInfo:TextInput_TextInput.__docgenInfo,path:"src/components/TextInput/TextInput.js"});react_default.a.createElement,__webpack_exports__.default={title:"TextInput",component:components_TextInput_TextInput,argTypes:{variant:{control:{type:"select",options:["default","ghost"]}}}};var TextInput_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(components_TextInput_TextInput,Object.assign({},args))};TextInput_stories_Template.displayName="Template";var Default=TextInput_stories_Template.bind({});Default.args={label:"Email Address",value:"",variant:"default",disabled:!1,name:"email",type:"email",placeholder:"joe@smith.com"};var Inactive=TextInput_stories_Template.bind({});Inactive.args={label:"Email Address",value:"",variant:"ghost",disabled:!0,name:"email",type:"email",placeholder:"joe@smith.com"},Default.parameters=Object.assign({storySource:{source:"(args) => <TextInput {...args} />"}},Default.parameters),Inactive.parameters=Object.assign({storySource:{source:"(args) => <TextInput {...args} />"}},Inactive.parameters)},184:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_willhall_Documents_Code_NextJS_cog_tests_boilerplate_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(149),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(9),__webpack_require__(47)),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(6),Wrapper=(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement,styled_components__WEBPACK_IMPORTED_MODULE_3__.b.div.withConfig({displayName:"Spinner__Wrapper",componentId:"gyi5eh-0"})(["width:var(--spinner-size);height:var(--spinner-size);position:relative;@-webkit-keyframes sk-circleFadeDelay{0%,39%,100%{opacity:0;}40%{opacity:1;}}@keyframes sk-circleFadeDelay{0%,39%,100%{opacity:0;}40%{opacity:1;}}"])),Blip=styled_components__WEBPACK_IMPORTED_MODULE_3__.b.div.withConfig({displayName:"Spinner__Blip",componentId:"gyi5eh-1"})(["width:100%;height:100%;position:absolute;left:0;top:0;will-change:transform;-webkit-transform:rotate(var(--blip-rotation));-ms-transform:rotate(var(--blip-rotation));transform:rotate(var(--blip-rotation));&::before{content:'';display:block;margin:0 auto;width:10%;height:25%;background-color:currentColor;border-radius:","rem;-webkit-animation:sk-circleFadeDelay 1.2s infinite ease-in-out both;animation:sk-circleFadeDelay 1.2s infinite ease-in-out both;-webkit-animation-delay:var(--blip-animation-delay);animation-delay:var(--blip-animation-delay);}"],.5),Spinner=function Spinner(_ref){var size=_ref.size,delegated=Object(_Users_willhall_Documents_Code_NextJS_cog_tests_boilerplate_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.a)(_ref,["size"]);return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(Wrapper,Object.assign({},delegated,{style:{"--spinner-size":size+"px"},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Blip,{style:{"--blip-rotation":"30deg","--blip-animation-delay":"-1.1s"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Blip,{style:{"--blip-rotation":"60deg","--blip-animation-delay":"-1s"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Blip,{style:{"--blip-rotation":"90deg","--blip-animation-delay":"-0.9s"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Blip,{style:{"--blip-rotation":"120deg","--blip-animation-delay":"-0.8s"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Blip,{style:{"--blip-rotation":"150deg","--blip-animation-delay":"-0.7s"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Blip,{style:{"--blip-rotation":"180deg","--blip-animation-delay":"-0.6s"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Blip,{style:{"--blip-rotation":"210deg","--blip-animation-delay":"-0.5s"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Blip,{style:{"--blip-rotation":"240deg","--blip-animation-delay":"-0.4s"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Blip,{style:{"--blip-rotation":"270deg","--blip-animation-delay":"-0.3s"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Blip,{style:{"--blip-rotation":"300deg","--blip-animation-delay":"-0.2s"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Blip,{style:{"--blip-rotation":"330deg","--blip-animation-delay":"-0.1s"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Blip,{style:{"--blip-rotation":"0deg","--blip-animation-delay":"0s"}})]}))};Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{size:{type:{name:"number"},required:!1,description:""}}},__webpack_exports__.a=Spinner,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Spinner/Spinner.js"]={name:"Spinner",docgenInfo:Spinner.__docgenInfo,path:"src/components/Spinner/Spinner.js"})},186:function(module,__webpack_exports__,__webpack_require__){"use strict";var objectWithoutProperties=__webpack_require__(149),react=__webpack_require__(0),react_default=__webpack_require__.n(react),styled_components_browser_esm=(__webpack_require__(9),__webpack_require__(47)),constants=__webpack_require__(28),Spinner=__webpack_require__(184),jsx_runtime=__webpack_require__(6),Wrapper=(react_default.a.createElement,styled_components_browser_esm.b.button.withConfig({displayName:"Button__Wrapper",componentId:"sc-8y2ppg-0"})(["position:relative;display:var(--button-display);width:var(--button-width);margin:0;padding:8px ","px;border:none;border-radius:8px;color:var(--button-color);cursor:var(--button-cursor);background-color:var(--button-background-color);&:hover{background-color:var(--button-background-color--hover);}"],18)),ChildrenWrapper=styled_components_browser_esm.b.div.withConfig({displayName:"Button__ChildrenWrapper",componentId:"sc-8y2ppg-1"})(["opacity:var(--children-opacity);font-size:","rem;text-transform:uppercase;letter-spacing:2px;"],1),SpinnerWrapper=styled_components_browser_esm.b.div.withConfig({displayName:"Button__SpinnerWrapper",componentId:"sc-8y2ppg-2"})(["position:absolute;top:50%;left:50%;margin-top:-12px;margin-left:-12px;"]),VARIANTS={default:{"--button-color":constants.a.white,"--button-background-color":constants.a.primary.lighter,"--button-background-color--hover":constants.a.primary.darker},danger:{"--button-color":constants.a.white,"--button-background-color":constants.a.bad.lighter,"--button-background-color--hover":constants.a.bad.darker},confirm:{"--button-color":constants.a.grey[200],"--button-background-color":constants.a.good.lighter,"--button-background-color--hover":constants.a.good.darker},ghost:{"--button-color":constants.a.grey[200],"--button-background-color":constants.a.grey[800],"--button-background-color--hover":constants.a.grey[800]}},LOADING_STATES={loading:{"--children-opacity":0,"--button-cursor":"wait"},ready:{"--children-opacity":1,"--button-cursor":"pointer"}},ACTIVE_STATES={active:{},disabled:{"--button-cursor":"not-allowed"}},WIDTHS={fullWidth:{"--button-display":"block","--button-width":"100%"},content:{"--button-display":"inline","--button-width":"auto"}},Button_Button=function Button(_ref){var handleClick=_ref.handleClick,variant=_ref.variant,disabled=_ref.disabled,loading=_ref.loading,fullWidth=_ref.fullWidth,children=_ref.children,delegated=Object(objectWithoutProperties.a)(_ref,["handleClick","variant","disabled","loading","fullWidth","children"]),variantStyles=VARIANTS[variant];if(!variantStyles)throw new Error("No button variant found for variant: ".concat(variant));var styles=Object.assign({},variantStyles,LOADING_STATES[loading?"loading":"ready"],ACTIVE_STATES[disabled?"disabled":"active"],WIDTHS[fullWidth?"fullWidth":"content"]);return Object(jsx_runtime.jsxs)(Wrapper,Object.assign({},delegated,{style:styles,onClick:handleClick,disabled:disabled,children:[Object(jsx_runtime.jsx)(ChildrenWrapper,{children:children}),loading&&Object(jsx_runtime.jsx)(SpinnerWrapper,{children:Object(jsx_runtime.jsx)(Spinner.a,{size:24})})]}))};Button_Button.displayName="Button",Button_Button.defaultProps={variant:"default"},Button_Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"string"},required:!1,description:""},handleClick:{type:{name:"func"},required:!1,description:""},disabled:{type:{name:"bool"},required:!1,description:""},loading:{type:{name:"bool"},required:!1,description:""},fullWidth:{type:{name:"bool"},required:!1,description:""},children:{type:{name:"node"},required:!1,description:""}}};__webpack_exports__.a=Button_Button;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.js"]={name:"Button",docgenInfo:Button_Button.__docgenInfo,path:"src/components/Button/Button.js"})},28:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return COLORS}));var COLORS={black:"hsl(0deg, 0%, 0%)",white:"hsl(0deg, 0%, 100%)",primary:{lighter:"hsl(251deg, 83%, 70%)",default:"hsl(251deg, 83%, 65%)",darker:"hsl(251deg, 83%, 60%)"},secondary:{lighter:"hsl(23deg, 100%, 55%)",default:"hsl(23deg, 100%, 50%)",darker:"hsl(23deg, 100%, 45%)"},bad:{lighter:"hsl(356deg, 74%, 57%)",default:"hsl(356deg, 74%, 52%)",darker:"hsl(356deg, 74%, 47%)"},good:{lighter:"hsl(121deg, 90%, 86%)",default:"hsl(121deg, 90%, 81%)",darker:"hsl(121deg, 90%, 76%)"},info:{lighter:"hsl(222deg, 100%, 66%)",default:"hsl(222deg, 100%, 61%)",darker:"hsl(222deg, 100%, 56%)"},alert:{lighter:"hsl(44deg, 98%, 67%)",default:"hsl(44deg, 98%, 62%)",darker:"hsl(44deg, 98%, 57%)"},grey:{200:"hsl(0deg, 0%, 20%)",400:"hsl(0deg, 0%, 40%)",600:"hsl(0deg, 0%, 60%)",800:"hsl(0deg, 0%, 80%)"}}},570:function(module,exports,__webpack_require__){__webpack_require__(571),__webpack_require__(725),__webpack_require__(726),__webpack_require__(1025),__webpack_require__(1026),__webpack_require__(1031),__webpack_require__(1032),__webpack_require__(1029),__webpack_require__(1027),__webpack_require__(1033),__webpack_require__(919),__webpack_require__(1011),__webpack_require__(1028),module.exports=__webpack_require__(1017)},638:function(module,exports){},726:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(388)},920:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=920},925:function(module,exports){},927:function(module,exports){},937:function(module,exports){},939:function(module,exports){},964:function(module,exports){},966:function(module,exports){},967:function(module,exports){},972:function(module,exports){},974:function(module,exports){},993:function(module,exports){}},[[570,2,3]]]);