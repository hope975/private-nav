const $siteList=$(".siteList"),$lastLi=$siteList.find("li.last"),x=localStorage.getItem("x"),xObject=JSON.parse(x),hashMap=xObject||[{logo:"A",url:"https://www.acfun.cn/"},{logo:"B",url:"https://www.bilibili.com/"},{logo:"T",url:"https://www.taobao.com/"}],simplifyUrl=e=>e.replace("https://","").replace("http:","").replace("www.","").replace(/\/.*/,""),$inp=$("#inp");$inp.on("keypress",(e=>{e.stopPropagation()}));let btn=document.querySelector("#btn"),inp=document.querySelector("#inp"),flag=0;btn.disabled=!0,inp.onfocus=function(){""===inp.value?(flag=0,btn.disabled=!0):(flag=1,btn.disabled=!1)},inp.oninput=function(){""===inp.value?(flag=0,btn.disabled=!0):(flag=1,btn.disabled=!1)};const render=()=>{$siteList.find("li:not(.last)").remove(),hashMap.forEach(((e,n)=>{const t=$(`<li>  \n                    <div class="site">\n                        <div class="logo">${e.logo}</div>\n                        <div class="link">${simplifyUrl(e.url)}</div>\n                        <div class="close">\n                          <svg class="icon">\n                            <use xlink:href="#icon-shanchu"></use>\n                          </svg>\n                        </div>         \n                    </div>\n    </li>`).insertBefore($lastLi);t.on("click",(()=>{window.open(e.url)})),t.on("click",".close",(e=>{e.stopPropagation(),hashMap.splice(n,1),render()}))}))};render(),$(".addButton").on("click",(()=>{let e=prompt("请输入您需要添加的网址");0!==e.indexOf("http")&&(e="https://"+e),hashMap.push({logo:simplifyUrl(e).toUpperCase()[0],url:e}),render()})),window.onbeforeunload=()=>{const e=JSON.stringify(hashMap);localStorage.setItem("x",e)},$(document).on("keypress",(e=>{const{key:n}=e;for(let e=0;e<hashMap.length;e++)hashMap[e].logo.toLowerCase()===n&&window.open(hashMap[e].url)}));
//# sourceMappingURL=index.5813c4ce.js.map
