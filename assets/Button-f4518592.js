import{j as e,a as t,F as l,B as s,P as a}from"./Button.stories-1be7b543.js";import{M as c,C as h}from"./index-0aadd2b8.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-246aea32.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function o(i){const n=Object.assign({h1:"h1",p:"p",h4:"h4",h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",strong:"strong",em:"em"},r(),i.components);return t(l,{children:[e(c,{of:s,title:"Button"}),`
`,e(n.h1,{id:"button",children:"Button"}),`
`,e(n.p,{children:"Button component with different props."}),`
`,e(n.h4,{id:"example",children:"Example"}),`
`,e(h,{of:a}),`
`,e(n.h2,{id:"usage",children:"Usage"}),`
`,e(n.pre,{children:e(n.code,{className:"language-ts",children:`import {Button} from "sld-ui";

const Example = () => {
  return (
      <Button
        size={"small"}
        text={"Button"}
        onClick={()=> console.log("Clicked")}
        primary
      />
  );
};

export default Example;
`})}),`
`,e(n.h4,{id:"arguments",children:"Arguments"}),`
`,t(n.ul,{children:[`
`,t(n.li,{children:[e(n.strong,{children:"text"})," ",e(n.em,{children:e(n.code,{children:"() => void"})})," - A string that represents the text content of the button."]}),`
`,t(n.li,{children:[e(n.strong,{children:"primary"})," - A boolean indicating whether the button should have a primary styling or not. Typically, a primary button stands out as the main action in a user interface."]}),`
`,t(n.li,{children:[e(n.strong,{children:"disabled"})," - A boolean indicating whether the button should be disabled or not. When disabled, the button cannot be clicked or interacted with."]}),`
`,t(n.li,{children:[e(n.strong,{children:"size"}),' - A string with one of three possible values: "small," "medium," or "large." It defines the size or dimensions of the button.']}),`
`,t(n.li,{children:[e(n.strong,{children:"onClick"})," - A function that is called when the button is clicked. It receives a MouseEventHandler for handling the click event on the button element."]}),`
`]})]})}function C(i={}){const{wrapper:n}=Object.assign({},r(),i.components);return n?e(n,Object.assign({},i,{children:e(o,i)})):o(i)}export{C as default};
//# sourceMappingURL=Button-f4518592.js.map
