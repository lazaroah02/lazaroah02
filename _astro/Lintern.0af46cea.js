import{j as E}from"./jsx-runtime.3a2d0367.js";import{r as t}from"./index.b2a7ed32.js";/* empty css                       */function x(){const n=navigator.userAgent||navigator.vendor||window.opera;return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(n)}function g(){const[n,l]=t.useState({x:0,y:0}),[o,i]=t.useState(!0),r=t.useRef(),s=t.useRef(),d=60,f=60,a=e=>{const{clientX:v,clientY:p}=e;l({x:v,y:p}),o&&i(!1)},m=()=>{cancelAnimationFrame(r.current),i(!0)},u=()=>{i(!1)},c=()=>{o===!1&&(s.current.style.transform=`
                translate(
                    ${n.x-d/2}px, 
                    ${n.y+window.scrollY-window.innerHeight/2-f/2}px
                )
            `,r.current=requestAnimationFrame(c))};return t.useEffect(()=>{if(x()===!1){const e=document.getElementById("home");return e.addEventListener("mousemove",a),e.addEventListener("mouseleave",m),e.addEventListener("mouseenter",u),r.current=requestAnimationFrame(c),()=>{e.removeEventListener("mousemove",a),e.removeEventListener("mouseleave",m),e.removeEventListener("mouseenter",u),cancelAnimationFrame(r.current)}}},[n]),o?null:E.jsx("div",{ref:s,className:"lintern"})}export{g as Lintern};
