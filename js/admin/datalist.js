!function(t){function e(e){for(var a,s,d=e[0],o=e[1],r=e[2],m=0,u=[];m<d.length;m++)s=d[m],Object.prototype.hasOwnProperty.call(l,s)&&l[s]&&u.push(l[s][0]),l[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);for(c&&c(e);u.length;)u.shift()();return i.push.apply(i,r||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,d=1;d<n.length;d++){var o=n[d];0!==l[o]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},l={3:0},i=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var d=window.webpackJsonp=window.webpackJsonp||[],o=d.push.bind(d);d.push=e,d=d.slice();for(var r=0;r<d.length;r++)e(d[r]);var c=o;i.push([39,0]),n()}({0:function(t,e,n){"use strict";n.d(e,"j",(function(){return b})),n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return r})),n.d(e,"m",(function(){return g})),n.d(e,"h",(function(){return v})),n.d(e,"u",(function(){return w})),n.d(e,"a",(function(){return L})),n.d(e,"o",(function(){return k})),n.d(e,"t",(function(){return c})),n.d(e,"r",(function(){return m})),n.d(e,"w",(function(){return u})),n.d(e,"g",(function(){return _})),n.d(e,"f",(function(){return y})),n.d(e,"p",(function(){return T})),n.d(e,"i",(function(){return $})),n.d(e,"v",(function(){return h})),n.d(e,"n",(function(){return q})),n.d(e,"s",(function(){return B})),n.d(e,"e",(function(){return E})),n.d(e,"l",(function(){return f})),n.d(e,"q",(function(){return d})),n.d(e,"k",(function(){return p})),n.d(e,"d",(function(){return s}));var a=n(1),l=n(7),i=(n(5),n(4));let s=new(n.n(i).a)({lineWidth:0,lineNum:0,dotR:0,dotNum:0,preGroundColor:[10,80],backGroundColor:[150,250],fontSize:24,fontFamily:["Helvetica","Arial"],fontStyle:"fill",content:"012345789",length:4}),d=(t,e,n)=>{let a=new Date;a.setTime(a.getTime()+60*n*60*1e3);let l="expires="+a.toUTCString();document.cookie=t+"="+e+";"+l+";path=/"},o=async t=>{try{return(await Object(l.a)({method:t.method,url:t.url,params:t.params,data:t.data})).data}catch(t){return console.log(t),{message:"資料庫連接異常",style:"offLine",error:"offLine"}}},r=t=>{document.getElementById("systemBox")&&document.getElementById("systemBox").remove();let e=`\n        <div id="popup" class="popup">\n            <div>\n                <i class="fa-solid ${t.icon} fa-5x"></i>\n                <h4 class="mt-3">${t.infoA}</h4> \n                <h6>${t.infoB}</h6>\n            </div>\n        </div>\n    `,n=document.createElement("div");n.classList.add("popup"),n.innerHTML=e,document.querySelector("body").appendChild(n),setTimeout(()=>{window.location.href=t.link},3e3)},c=t=>{document.getElementById("systemBox")&&document.getElementById("systemBox").remove();let e=`\n        <div id="msgBox" class="msgBox">\n            <div class="msgInfo">\n                    <i class="fas ${t.icon} icon"></i>\n                <h4>${t.msg}</h4>\n            </div>\n        </div>\n    `,n=document.createElement("div");n.innerHTML=e,document.querySelector("body").appendChild(n),setTimeout(()=>{t.link?window.location.href=t.link:window.location.reload()},3e3)},m=t=>{let e=`\n        <div id="confirmBox" class="confirmBox">\n            <div class="confirmInfo">\n                <i class="fas ${t.icon} icon"></i>\n                <h6> ${t.text} </h6>\n                <button type="button"  data-confirm="1" class="btn btn-danger">${t.btn1}</button>\n                <button type="button"  data-confirm="0" class="btn btn-primary">${t.btn2}</button>\n            </div>\n        </div>\n    `,n=document.createElement("div");return n.innerHTML=e,document.querySelector("body").appendChild(n),new Promise((t,e)=>{document.getElementById("confirmBox").querySelectorAll(".btn").forEach(e=>{e.addEventListener("click",e=>{t(Number(e.target.dataset.confirm))})})})},u=t=>{document.getElementById("confirmBox")&&document.getElementById("confirmBox").remove();let e=`\n        <div id="systemBox" class="systemBox">\n            <div class="systemInfo">\n                ${t}\n                <br> <div class="lds-spinner"> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> </div>\n            </div>\n        </div>\n    `,n=document.createElement("div");n.innerHTML=e,document.querySelector("body").appendChild(n)},f=t=>{let e=`\n        <div id="msgBox" class="msgBox">\n            <div class="msgInfo">\n                <i class="fas ${t.icon} icon"></i>\n                <div>${t.msg}</div>\n                <button class="btn btn-primary mt-3" id="removeMsg" >\n                    我知道了\n                </button>\n            </div>\n        </div>\n    `,n=document.createElement("div");n.innerHTML=e,document.querySelector("body").appendChild(n),document.getElementById("removeMsg").addEventListener("click",()=>{n.remove()})},p=t=>{let e=`\n        <div id="msgBox" class="msgBox">\n            <div class="msgInfo">\n                <i class="fas ${t.icon} icon"></i>\n                <h4 class="mt-3">${t.infoA}</h4> \n                <h6>${t.infoB}</h6>\n                <button class="btn btn-primary mt-3" id="removeMsg" >\n                    我知道了\n                </button>\n            </div>\n        </div>\n    `,n=document.createElement("div");n.innerHTML=e,document.querySelector("body").appendChild(n),document.getElementById("removeMsg").addEventListener("click",()=>{window.location.href=t.link})},b=()=>{const t=document.cookie.split(";");for(let e=0;e<t.length;e++){const n=t[e].trim();if(n.startsWith("sosonews_user_id"))return Number(n.substring("sosonews_user_id".length+1))}return null},h=()=>{const t=document.cookie.split(";");for(let e=0;e<t.length;e++){const n=t[e].trim();if(n.startsWith("sosonews_staff_data")){let t=decodeURIComponent(n.substring("sosonews_staff_data".length+1));return JSON.parse(t)}}return null},g=t=>{let e=t.split("/");return e[e.length-1]},v=t=>{let e="";return[{en:"nameVal",tw:"暱稱",test:/^[^\s]{1,15}$/},{en:"accountVal",tw:"帳號",test:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/},{en:"passwordVal",tw:"密碼",test:/^[a-zA-Z0-9]{6,}$/}].forEach(n=>{n.test.test(t[n.en])&&!/\s/.test(t[n.en])?0:e+=n.tw+"不符合規格!<br/>"}),e},y=t=>{let e="";return[{en:"nameVal",tw:"姓名",test:/.+/},{en:"emailVal",tw:"E-mail",test:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/},{en:"typeVal",tw:"詢問事項",test:/.+/},{en:"detailVal",tw:"詢問細節",test:/.+/}].forEach(n=>{""!==t[n.en]&&"null"!==t[n.en]?n.test.test(t[n.en])?0:e+=n.tw+"不符合規格!<br/>":e+=n.tw+"不能為空<br/>"}),e},_=(t,e,n)=>{let a="";return[{en:"tag_name",tw:"標籤中文",test:/^[\u4e00-\u9fa50-9]{1,10}$/},{en:"tag_val",tw:"標籤英文",test:/^[a-z0-9]{1,15}$/}].forEach(l=>{if(l.test.test(t[l.en])&&!/\s/.test(t[l.en]))if("addTag"==n){e.some(e=>e[l.en]===t[l.en])?a+=l.tw+"重複!<br/>":0}else 0;else a+=l.tw+"不符合規格!<br/>"}),a},$=t=>{let e="";return[{en:"staff_account",tw:"帳號",test:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/},{en:"staff_pasword",tw:"密碼",test:/^[a-zA-Z0-9]{6,}$/},{en:"staff_name",tw:"暱稱",test:/^[^\s]{1,15}$/},{en:"staff_title",tw:"職稱",test:/^[^\s]{1,15}$/},{en:"staff_limit",tw:"權限",test:/.+/}].forEach(n=>{""!==t[n.en]&&"null"!==t[n.en]?n.test.test(t[n.en])?0:e+=n.tw+"不符合規格!<br/>":e+=n.tw+"不能為空<br/>"}),e},E=t=>{let e=t.target.files[0],n=e.name.toLowerCase().split(".").pop(),a="";return["jpg","jpeg"].includes(n)||(a+="圖片不符合規格。<br/>"),e.size>3145728&&(a+="檔案大小超過限制。<br/>"),""==a?{sizeOk:!0,msg:a}:{sizeOk:!1,msg:a}},w=t=>{let e=document.getElementById("previewImage");const n=t.target.files[0],a=new FileReader;return a.addEventListener("load",()=>{e.src=a.result}),n?(a.readAsDataURL(n),B(!0)):B(!1)},B=t=>{let e=document.getElementById("imageInput"),n=document.getElementById("deleteImage"),a=document.getElementById("actionImageInput"),l=document.getElementById("beforeName"),i=document.getElementById("changImage"),s=document.getElementById("previewImage");return t?(e.classList.remove("d-none"),n.classList.remove("d-none"),a.innerHTML="選擇檔案",l.innerHTML="未選擇任何檔案",i.classList.add("d-none"),0):(e.classList.add("d-none"),n.classList.add("d-none"),a.innerHTML="選擇檔案",l.innerHTML="未選擇任何檔案",i.classList.remove("d-none"),s.src="assets/uplodeimg.png",1)},L=(t,e)=>{let n=document.getElementById("pageNav"),a=Math.ceil(t.length/e);if(a>1){let t='\n            <ul class="pagination" >\n                <li class="disabled" id="pagePrevious">\n                    <span class="page-link">&laquo;</span>\n                </li> \n        ';for(let e=0;e<a;e++)e==a-2&&a>6&&(t+='\n                    <li class="disabled" id="hideNav">\n                        <span class="page-link">...</span>\n                    </li> \n                '),t+=`\n                <li class="page-item" data-page="${e+1}">\n                    <span class="page-link">${e+1}</span>\n                </li>\n            `;t+='\n                    <li class="" id="pageNext">\n                    <span class="page-link">&raquo;</span>\n                </li>\n            </ul>\n        ',n.innerHTML=t,document.querySelector(".page-item").classList.add("active"),a>6&&x(1,a)}else n.innerHTML="";let l=[];for(let n=0;n<t.length;n+=e){let a=t.slice(n,n+e);l.push(a)}return l},I=(t,e,n)=>{let l="";switch(e){case"user":l+="\n                <thead><tr><th>大頭照</th><th>帳號</th><th>暱稱</th><th>註冊日期</th><th>密碼</th><th>自我介紹</th><th>文章數</th><th>留言數</th><th>推薦作者</th><th>編輯</th></tr></thead>\n            ",l+='<tbody class="userList">',t.forEach(t=>{let e=null,n=null,i=null;e=t.image_path?`${a.b}/api/${t.image_path}`:"/assets/user.png",n=Number(t.hot)?"checked":"",i=t.sentence?t.sentence:"",l+=`\n                <tr>\n                    <td>\n                        <div class="userImgBG">\n                            <div class="userImg" style="background-image: url(${e});">\n                            </div>\n                        </div>\n                    </td>\n                    <td>${t.account}</td>\n                    <td><a href="../article-list.html?id=${t.id}" target="_blank">\n                        ${t.name}\n                        </a>\n                    </td>\n                    <td>${t.date}</td>\n                    <td>${t.password}</td>\n                    <td>${i}</td>\n                    <td>${t.articl_total}</td>\n                    <td>${t.comment_total}</td>\n                    <td>\n                        <div class="switchBtn">\n                            <div class="custom-control custom-switch">\n                                <input type="checkbox" ${n} class="custom-control-input" id="user-hot-${t.id}">\n                                <label class="custom-control-label" for="user-hot-${t.id}"></label>\n                            </div>\n                        </div>\n                    </td>\n                    <td>\n                        <button type="submit" data-id="${t.id}" data-table="user" data-type="delete"  class="btn btn-sm btn-danger delete mb-1" title="刪除">\n                            <i class="fas fa-lg fa-times"></i>\n                        </button>\n                    </td>\n                </tr>\n                `}),l+="</tbody>";break;case"tag":l+="\n                <thead><tr><th>標籤中文</th><th>標籤英文</th><th>文章數</th><th>排序</th><th>編輯</th></tr></thead>\n            ",l+='<tbody class="tagList" id="tagList">',t.forEach(t=>{l+=`\n                    <tr>\n                        <td>${t.tag_name}</td>\n                        <td>${t.tag_val}</td>\n                        <td>${t.article_count}</td>\n                        <td>${t.tag_idx}</td>\n                        <td>\n                            <button type="submit" data-id="${t.id}" data-table="tag" data-type="delete" class="btn btn-sm btn-danger delete mb-1" title="刪除">\n                                <i class="fas fa-lg fa-times"></i>\n                            </button>\n\n                            <button type="submit" data-id="${t.id}" data-table="tag" data-type="edit"  class="btn btn-sm btn-primary edit mb-1" title="編輯">\n                                <i class="fa-solid fa-pen"></i>\n                            </button>\n\n                            <div data-id="${t.id}" data-idx="${t.tag_idx}" data-table="tag" data-type="move"  class="btn btn-sm btn-secondary moveIcon mb-1" title="移動">\n                                <i class="fa-solid fa-up-down-left-right"></i>\n                            </div>\n                        </td>\n                    </tr>\n                `}),l+="</tbody>";break;case"article":l+="\n                <thead><tr><th>圖片</th><th>標題</th><th>作者</th><th>標籤</th><th>時間</th><th>內文</th><th>留言數</th><th>上線</th><th>熱門新聞</th><th>首頁輪撥</th><th>編輯</th></tr></thead> \n            ",l+='<tbody class="articleList">',t.forEach(t=>{let e=null,n=null,i=null,s=null;e=t.image_path?`${a.b}/api/${t.image_path}`:"/assets/img.png",n=Number(t.hot)?"checked":"",s=Number(t.online)?"checked":"",i=Number(t.banner)?"checked":"",l+=`\n                <tr>\n                    <td>\n                        <div class="photoImgBG">\n                            <div class="photoImg" style="background-image: url(${e});">\n                            </div>\n                        </div>\n                    </td>\n                    <td>\n                        <a href="../article.html?id=${t.id}" target="_blank">\n                           ${t.title}\n                        </a>\n                    </td>\n                    <td>\n                        <a href="../article-list.html?id=${t.user_id}" target="_blank">\n                        ${t.user_name}\n                        </a>\n                    </td>\n                    <td>${t.tag_name}</td>\n                    <td>\n                        ${t.date} <br/>\n                        ${t.time}\n                    </td>\n                    <td>\n                        ${t.article35}...\n                    </td>\n                    <td>\n                        ${t.comment_count}\n                    </td>\n                    <td>\n                        <div class="switchBtn">\n                            <div class="custom-control custom-switch">\n                                <input type="checkbox" class="custom-control-input" id="article-online-${t.id}" ${s}>\n                                <label class="custom-control-label" for="article-online-${t.id}"></label>\n                            </div>\n                        </div>\n                    </td>\n                    <td>\n                        <div class="switchBtn">\n                            <div class="custom-control custom-switch">\n                                <input type="checkbox" class="custom-control-input" id="article-hot-${t.id}" ${n}>\n                                <label class="custom-control-label" for="article-hot-${t.id}"></label>\n                            </div>\n                        </div>\n                    </td>\n                    <td>\n                        <div class="switchBtn">\n                            <div class="custom-control custom-switch">\n                                <input type="checkbox" class="custom-control-input" id="article-banner-${t.id}" ${i}>\n                                <label class="custom-control-label" for="article-banner-${t.id}"></label>\n                            </div>\n                        </div>\n                    </td>\n                    <td>\n                        <button type="submit" data-id="${t.id}" data-table="article" data-type="delete"  class="btn btn-sm btn-danger delete mb-1" title="刪除">\n                            <i class="fas fa-lg fa-times"></i>\n                        </button>\n                    </td>\n                </tr>\n                `}),l+="</tbody>";break;case"comment":l="\n                <thead><tr><th>文章標題</th><th>留言</th><th>留言者</th><th>時間</th><th>編輯</th></tr></thead>\n            ",l+='<tbody class="commentList">',t.forEach(t=>{l+=`\n                    <tr>\n                        <td>\n                            <a href="../article.html?id=${t.article_id}" target="_blank">\n                                ${t.title}\n                            </a>\n                        </td>\n                        <td>\n                            ${t.comment}\n                        </td>\n                        \n                        <td>${t.user_name}</td>\n                        <td>\n                            ${t.date} <br/>\n                            ${t.time}\n                        </td>\n                        <td>\n                            <button type="submit" data-id="${t.id}" data-table="comment" data-type="delete"  class="btn btn-sm btn-danger delete mb-1" title="刪除">\n                                <i class="fas fa-lg fa-times"></i>\n                            </button>\n                        </td>\n                    </tr>\n                `}),l+="</tbody>";break;case"inquiry":l="\n                <thead><tr><th>詢問事項</th><th>姓名</th><th>E-mail</th><th>時間</th><th>詢問細節</th><th>回覆</th></tr></thead>\n            ",l+='<tbody class="inquiryList">',t.forEach(t=>{let e=`\n                <button type="submit" data-id="${t.id}" data-table="inquiry" data-type="reply"  class="btn btn-sm btn-primary edit mb-1" title="回信">\n                    <i class="fa-solid fa-reply"></i>\n                </button>`,n=`\n                <button type="submit" data-id="${t.id}" data-table="inquiry" data-type="replyDetail"  class="btn btn-sm btn-danger edit mb-1" title="回信內容">\n                    <i class="fa-solid fa-envelope"></i>\n                </button>`,a="";a=t.confirm_detail?n:e,l+=`\n                    <tr>\n                        <td>${t.type}</td>\n                        <td>${t.name}</td>\n                        <td>${t.email}</td>\n                        <td>${t.data}</td>\n                        <td>${t.detail}</td>\n                        <td>${a}</td>\n                    </tr>\n                `}),l+="</tbody>";break;case"staff":let e={user:"會員資料",tag:"標籤",article:"文章",comment:"留言",inquiry:"聯絡我們",staff:"管理人員"};l="\n                <thead><tr><th>帳號</th><th>密碼</th><th>暱稱</th><th>職稱</th><th>權限</th><th>編輯</th></tr></thead>\n            ",l+='<tbody class="staffList">',t.forEach(t=>{let n=t.staff_limit.split(","),a="<ul>";n.forEach(t=>{a+=`<li>${e[t]} </li>`}),a+="<ul>",l+=`\n                    <tr>\n                        <td>${t.account}</td>\n                        <td>${t.password}</td>\n                        <td>${t.name}</td>\n                        <td>${t.job_title}</td>\n                        <td>${a}</td>\n                        <td>\n                            <button type="submit" data-id="${t.id}" data-table="staff" data-type="delete"  class="btn btn-sm btn-danger delete mb-1" title="刪除">\n                                <i class="fas fa-lg fa-times"></i>\n                            </button>\n                            <button type="submit" data-id="${t.id}" data-table="staff" data-type="edit-staff"  class="btn btn-sm btn-primary edit mb-1" title="編輯">\n                                <i class="fa-solid fa-pen"></i>\n                            </button>\n                        </td>\n                    </tr>\n                `}),l+="</tbody>";break;case"article-list":t.forEach(t=>{let e=url("?id"),n=null,i=null;n=t.image_path?`${a.b}/api/${t.image_path}`:"/assets/img.png",i=e?`<span class="tag">${t.tag_name}</span>`:`<a class="authorPage"  href="article-list.html?id=${t.user_id}">${t.user_name}</a> | `;let s=null;s=Number(t.online)?"":' <div class="icon"><i class="fas fa-eye-slash"></i></div>',l+=` <ul class="articleBox">\n                            <li class="img" style="background-image: url(${n});" >\n                               ${s}\n                            </li>\n                            <li class="title">\n                                <a href="article.html?id=${t.id}">\n                                    ${t.title}\n                                </a>\n                                <div class="author">\n                                ${i}${t.date}</div>\n                            </li>\n                        </ul>\n                        `})}n.innerHTML=l},k=(t,e,n)=>{if(t.length>1){let a=document.getElementById("pagePrevious"),l=document.getElementById("pageNext"),i=document.querySelectorAll(".page-item"),s=document.getElementById("pageNav"),d=1;a.addEventListener("click",()=>{1!=d&&i[d-2].click()}),l.addEventListener("click",()=>{d!=i.length&&i[d].click()}),i.forEach(o=>{o.addEventListener("click",o=>{let r=Number(o.currentTarget.dataset.page);d!==r&&(s.querySelector(".active").classList.remove("active"),o.currentTarget.classList.add("active"),d=r),s.querySelector(".disabled")&&s.querySelector(".disabled").classList.remove("disabled"),d==i.length?l.classList.add("disabled"):1==d&&a.classList.add("disabled"),i.length>6&&x(d,i.length),I(t[d-1],e,n)})}),I(t[d-1],e,n)}else I(t[0],e,n);document.getElementById("systemBox")&&document.getElementById("systemBox").remove()},x=(t,e)=>{let n=t-1,a=e,l=document.getElementById("hideNav"),i=document.querySelectorAll(".page-item");if(i.forEach(t=>{t.classList.add("d-none")}),n+6>=a){l.classList.add("d-none");for(let t=a-6;t<a;t++)i[t].classList.remove("d-none")}else{let t=[i[n],i[n+1],i[n+2],i[a-1],i[a-2]];l.classList.remove("d-none"),t.forEach(t=>{t.classList.remove("d-none")})}},T=t=>{document.querySelectorAll("input").forEach(e=>{e.addEventListener("focus",()=>{t.innerHTML=""})})},q=t=>t.replace(/\n/g,"<br>")},1:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return a}));let a="https://yuting.website/side-project/sosonews",l={user:a+"/api/menber.php",article:a+"/api/article-fun.php",comment:a+"/api/comment-fun.php",staff:a+"/api/staff-fun.php",tag:a+"/api/tag-fun.php",sentmail:a+"/api/sent-mail.php",inquiry:a+"/api/inquiry-fun.php"}},39:function(t,e,n){"use strict";n.r(e);var a=n(0),l=(n(5),n(1)),i=n(31);let s=url("?page");if(!s){let t={icon:"fas fa-user-lock",msg:"沒有選擇資料庫",link:"index.html"};Object(a.t)(t)}if(null!=Object(a.v)()){let t=Object(a.v)().limit.split(",");if(!t.some(t=>t===s)){let t={icon:"fas fa-user-lock",msg:"沒有閱覽權限",link:"index.html"};Object(a.t)(t)}document.querySelectorAll(".nav-item").forEach(e=>{t.some(t=>null!==e.querySelector("#page"+t))||e.remove()})}else window.location.href="login.html";document.getElementById("logout").addEventListener("click",()=>{document.cookie="sosonews_staff_data=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";Object(a.b)({icon:"fa-user-xmark",infoA:"已登出",infoB:"等等帶你回登入頁",link:"index.html"})}),document.getElementById("page"+s).classList.add("active");let d=document.getElementById("result"),o=document.getElementById("pageNav"),r=document.getElementById("datalistTable"),c=document.getElementById("pageTitle"),m=null,u=null,f=null,p=null,b="",h=[],g=[];switch(s){case"user":m="會員資料",u="fa-user",f="getMenberList",p=l.a.user,r.classList.add("userTable"),g=["account","password","name","sentence"];break;case"tag":m="標籤",u="fa-tag",b="<button class=\"btn btn-outline-info\" id='addNewTag'>新增標籤</button> <button class=\"btn btn-outline-secondary \" id='renewIdx'>儲存排序</button>",f="getTagList",p=l.a.tag,r.classList.add("tagTable"),g=["tag_name","tag_val"];break;case"article":m="文章",u="fa-file-alt",f="getArticleList",p=l.a.article,r.classList.add("articleTable"),g=["title","article","user_name"];break;case"comment":m="留言",u="fa-comment-dots",f="getCommentList",p=l.a.comment,r.classList.add("commentTable"),g=["comment","title","user_name"];break;case"inquiry":m="聯絡我們",u="fa-envelope-open-text",f="getInquiryList",p=l.a.inquiry,r.classList.add("inquiryTable");break;case"staff":m="管理人員",u="fa-user-gear",b="<button class=\"btn btn-outline-info\" id='addNewStaff'>新增管理人員</button>",f="getStaffList",p=l.a.staff,r.classList.add("staffTable")}let v=`\n    <i class="fas ${u} icon"></i> ${m}\n    <button class="btn btn-outline-info showAll" >\n        顯示全部<span class="badge badge-info" id="dataTotal"></span>\n    </button>\n    ${b}\n`;c.innerHTML=v;let y={method:"get",url:p,params:{action:f}};function _(t){let e=`\n    <div class="staffBox">\n        <div class="staffInfo">\n            <h4>${t.title} <span class="warning">✱為必填</span></h4>\n            <hr class="mb-3">\n            <form id="staffForm" class="staffForm">\n                <div class="form-group">\n                    <label for="staff_account" class="col-form-label"><span class="redFont">✱</span> 帳號：</label>\n                    <input type="text" id="staff_account" name="staff_account" class="form-control " required placeholder="E-mail，之後不可修改" value='${t.data.account}' ${t.account}> \n                </div>  \n                <div class="form-group">\n                    <label for="staff_pasword"><span class="redFont">✱</span> 密碼：</label>\n                    <input type="password" id="staff_password" name="staff_pasword" placeholder="至少6個不含特殊符號的英文數字" class="form-control" value='${t.data.password}' required>\n                </div>\n                <div class="form-group W50">\n                    <label for="staff_name"><span class="redFont">✱</span> 暱稱：</label>\n                    <input type="text" id="staff_name" name="staff_name" placeholder="限制15字內" class="form-control" maxlength="15" value='${t.data.name}' required>\n                </div> \n                <div class="form-group W50">\n                    <label for="staff_title"><span class="redFont">✱</span> 職稱：</label>\n                    <input type="text" id="staff_title" name="staff_title" placeholder="公司職稱" class="form-control"  maxlength="15" value='${t.data.job_title}' required>\n                </div> \n\n                <div class="form-group">\n                    <label for="staff_limit"><span class="redFont">✱</span> 權限：</label>\n                    <select class="custom-select" id="staff_limit" multiple required>\n                        <option value="user">會員資料</option>\n                        <option value="tag">標籤</option>\n                        <option value="article">文章</option>\n                        <option value="comment">留言</option>\n                        <option value="inquiry">聯絡我們 </option>\n                        <option value="staff">管理人員 </option>\n                    </select>\n                </div>\n                \n                <div id="resultStaff" class="result mb-3"></div> \n                <button class="btn btn-primary" type="submit"> ${t.btnText} </button>\n                <div class="btn btn-outline-secondary" id="removeIt">取消</div>\n            </form>\n        </div>\n    </div>\n    `,n=document.createElement("div");if(n.innerHTML=e,document.querySelector("body").appendChild(n),""!==t.data.staff_limit){let e=t.data.staff_limit.split(",");document.getElementById("staff_limit").querySelectorAll("option").forEach(t=>{e.forEach(e=>{t.value==e&&(t.selected=!0)})})}document.getElementById("removeIt").addEventListener("click",()=>{n.remove()}),document.getElementById("staffForm").addEventListener("submit",e=>{e.preventDefault();let n=document.getElementById("resultStaff"),l=document.getElementById("staff_limit"),i=Array.from(l.options).filter(t=>t.selected).map(t=>t.value),s={staff_account:document.getElementById("staff_account").value.trim(),staff_password:document.getElementById("staff_password").value.trim(),staff_name:document.getElementById("staff_name").value.trim(),staff_title:document.getElementById("staff_title").value.trim(),staff_limit:i.join(",")},d=Object(a.i)(s);if(Object(a.p)(n),""===d){Object(a.w)("資料新增中....");const e=new FormData;e.append("action",t.action),e.append("account",s.staff_account),e.append("password",s.staff_password),e.append("name",s.staff_name),e.append("job_title",s.staff_title),e.append("staff_limit",s.staff_limit);let l={method:"post",url:p,data:e,headers:{"Content-Type":"multipart/form-data"}};Object(a.c)(l).then(t=>{if(t.error||"error"==t)document.getElementById("systemBox").remove(),n.innerHTML=t.message;else{let e={icon:"fas fa-upload",msg:t.message,link:!1};Object(a.t)(e)}})}else n.innerHTML=d})}function $(t){let e=`\n        <div class="tagBox">\n            <div class="tagInfo">\n                <h4>${t.title}</h4>\n                <hr class="mb-3">\n                <form id="tagForm" class="tagForm">\n                    <div class="form-group">\n                        <label for="tag_name">標籤中文：</label>\n                        <input type="text" id="tag_name" name="tag_name" placeholder="10字內中文不包含空格" class="form-control" ${t.tag_name}>\n                    </div>\n                    <div class="form-group mb-4">\n                        <label for="tag_val">標籤英文：</label>\n                        <input type="text" id="tag_val" name="tag_val" placeholder="15字內英文小寫不包含空格" class="form-control" ${t.tag_val}>\n                        ${t.warning}\n                    </div>\n                    <div id="resulTag" class="result mb-3"></div> \n                    <button class="btn btn-primary" type="submit">${t.btnText}</button>\n                    <div class="btn btn-outline-secondary" id="removeIt">取消</div>\n                </form>\n            </div>\n        </div>\n    `,n=document.createElement("div");n.innerHTML=e,document.querySelector("body").appendChild(n),document.getElementById("removeIt").addEventListener("click",()=>{n.remove()}),document.getElementById("tagForm").addEventListener("submit",e=>{e.preventDefault();let n={tag_name:document.getElementById("tag_name").value.trim(),tag_val:document.getElementById("tag_val").value.trim()},l=Object(a.g)(n,h,t.action);if(""===l){Object(a.w)("資料新增中....");const e=new FormData;e.append("action",t.action),e.append("tag_name",n.tag_name),e.append("tag_val",n.tag_val);let l={method:"post",url:p,data:e,headers:{"Content-Type":"multipart/form-data"}};Object(a.c)(l).then(e=>{if(e.error||"error"==e)console.log(e);else{let e={icon:"fas fa-upload",msg:t.msg,link:!1};Object(a.t)(e)}})}else{document.getElementById("resulTag").innerHTML=l}})}function E(t,e){let n='\n        <div id="confirmBox" class="inquiryBox">\n            <div class="previewMail">';"replyDetail"==e&&(n+=`<div class="date"><i class="fas fa-calendar-alt icon"></i>  ${t.date}</div>`),n+=`<div  class="mailContent">\n                    <div class="banner">\n                        <img src="https://i.imgur.com/GuzKHB9.png" alt="" class="img-fluid">\n                    </div>\n                    <div class="info">\n                        <h3>親愛的 ${t.user_name} 您好：</h3>\n                        <h5 class="first">關於您詢問 \n                            <strong>${t.inquiry_type}</strong>的問題</h5>\n                        <p>\n                        ${t.mail_content}\n                        </p>\n                        <h5 class="second">若您有任何疑問，請不吝與我們聯繫。 </h5>\n                        <h5 class="third">\n                        此致， <br/>\n                        ${t.staff_title}  ${t.staff_name}\n                        </h5>\n                    </div>\n                    <div class="footer">\n                    ※注意：此郵件由系統自動傳送，請勿直接回覆。若有任何疑問，歡迎透過網站 <a href="http://www.sosonews.today/inquiry.html" target="_blank">聯絡我們</a> 與我們聯絡。\n                    </div>\n                </div>`,"reply"==e?n+='<div class="btn-glup">\n                    <button type="button"  data-confirm="1" class="btn btn-danger btn35">確認寄出</button>\n                    <button type="button"  data-confirm="0" class="btn btn-primary btn35">取消</button>\n                </div>':"replyDetail"==e&&(n+='<div class="btn-glup">\n                    <button type="button"  data-confirm="0" class="btn btn-primary">關閉</button>\n                </div>'),n+=" </div></div> ";let a=document.createElement("div");return a.innerHTML=n,document.querySelector("body").appendChild(a),new Promise((t,e)=>{document.getElementById("confirmBox").querySelectorAll(".btn").forEach(e=>{e.addEventListener("click",e=>{t(Number(e.target.dataset.confirm))})})})}Object(a.c)(y).then(t=>{if(t.message?d.innerHTML=t.message:(h=t,function(t,e){let n="tag"===e?t.length:10,i=Object(a.a)(t,n);Object(a.o)(i,e,r),function(){let t=document.getElementById("dataListForm");t.addEventListener("change",t=>{if(t.preventDefault(),console.log(t.target.id),"tagList"!==t.target.id){let e=t.target.id.split("-"),n=e[0],i=e[1],s=e[2],d=null;d=t.target.checked?1:0;const o=new FormData;o.append("action",`${n}-${i}`),o.append("id",s),o.append(i,d);let r={method:"post",url:l.a[n],data:o,headers:{"Content-Type":"multipart/form-data"}};Object(a.c)(r).then(t=>{if(!t.error){let t={icon:"fas fa-upload",msg:"更新成功",link:!1};Object(a.t)(t)}})}}),t.addEventListener("submit",t=>{t.preventDefault();let e=t.submitter.dataset.id,n=t.submitter.dataset.type,i=t.submitter.dataset.table,s=new Array;switch(n){case"delete":let t={icon:"fa-exclamation-circle",text:"相關資料會一併被刪除，確定要這麼做?",btn1:"確定",btn2:"取消"};Object(a.r)(t).then(t=>{if(t){Object(a.w)("資料更新中....");const t=new FormData;t.append("action","delete-"+i),t.append("id",e);let n={method:"post",url:l.a[i],data:t,headers:{"Content-Type":"multipart/form-data"}};Object(a.c)(n).then(t=>{if(!t.error){let t=null;t="user"==i?"fa-user-alt-slash":"far fa-trash-alt";let e={icon:t,msg:"刪除成功",link:!1};Object(a.t)(e)}})}else document.getElementById("confirmBox").remove()});break;case"edit":s=h.filter(t=>t.id==e),$({title:"編輯標籤",msg:"編輯成功",tag_name:`required value="${s[0].tag_name}"`,tag_val:`disabled="disabled" readonly="" value="${s[0].tag_val}"`,btnText:"確定修改",action:"editTag",warning:'<small class="text-danger form-text">英文不可修改</small>',data:""});break;case"edit-staff":s=h.filter(t=>t.id==e),_({title:"編輯管理人員",msg:"修改成功",action:"editStaff",account:"readonly",btnText:"送出",data:s[0]});break;case"reply":!function(t){let e=document.createElement("div");e.innerHTML='\n        <div class="inquiryBox">\n            <div class="inquiryInfo">\n                <h4> 回覆信件 </h4>\n                <hr class="mb-3">\n                <form id="inquiryForm" class="inquiryForm">\n                    <div class="form-group">\n                        <label for="mail_content">信件內容：</label>\n                        <textarea rows="7" class="form-control" id="mail_content" name="mail_content" placeholder="" class="form-control" required></textarea>\n                    </div>\n                    <div id="resulInquiry" class="result mb-3"></div> \n                    <button class="btn btn-primary" type="submit">預覽信件</button>\n                    <div class="btn btn-outline-secondary" id="removeIt">取消</div>\n                </form>\n            </div>\n        </div>\n    ',document.querySelector("body").appendChild(e),document.getElementById("removeIt").addEventListener("click",()=>{e.remove()}),document.getElementById("inquiryForm").addEventListener("submit",e=>{e.preventDefault();let n=document.getElementById("mail_content").value.trim();if(""!=n){let e=Object(a.v)(),i=h.filter(e=>e.id===t);console.log(i),E({user_name:i[0].name,inquiry_type:i[0].type,mail_content:Object(a.n)(n),staff_name:e.name,staff_title:e.title},"reply").then(i=>{if(i){Object(a.w)("信件寄送中....");const i=new FormData;i.append("action","replyMail"),i.append("id",t),i.append("mail_content",n),i.append("staff_name",e.name),i.append("staff_title",e.title);let s={method:"post",url:l.a.sentmail,data:i,headers:{"Content-Type":"multipart/form-data"}};Object(a.c)(s).then(t=>{if(t.error||"error"==t)console.log(t);else{let e={icon:"fa-paper-plane",msg:t.message,link:!1};Object(a.t)(e)}})}else document.getElementById("confirmBox").remove()})}else alert("請填寫正確資料")})}(e);break;case"replyDetail":!function(t){let e={method:"get",url:l.a.inquiry,params:{action:"getOenInquiry",id:t}};Object(a.c)(e).then(t=>{if(!t.error&&"error"!=t){console.log(t),E({date:t.confirm_date,user_name:t.user_name,inquiry_type:t.inquiry_type,mail_content:Object(a.n)(t.mail_content),staff_title:t.staff_title,staff_name:t.staff_name},"replyDetail").then(t=>{t||document.getElementById("confirmBox").remove()})}})}(e)}})}()}(t,s)),document.getElementById("dataTotal").innerText=t.length,"tag"==s){document.getElementById("addNewTag").addEventListener("click",()=>{$({title:"新增標籤",msg:"新增成功",tag_name:"required",tag_val:"required",btnText:"送出",action:"addTag",warning:"",data:""})});let t=document.getElementById("tagList"),e=document.getElementById("renewIdx");new i.a(t,{handle:".moveIcon",animation:150,onEnd:()=>{e.classList.add("blink"),setTimeout(()=>{e.classList.remove("blink")},1500)}}),e.addEventListener("click",()=>{let t=[];document.querySelectorAll(".moveIcon").forEach((e,n)=>{t.push({id:e.dataset.id,tag_idx:n+1})});const e=new FormData;e.append("action","changeTagIdx"),e.append("idxArr",JSON.stringify(t));let n={method:"post",url:p,data:e,headers:{"Content-Type":"multipart/form-data"}};Object(a.c)(n).then(t=>{if(!t.error){let t={icon:"fas fa-upload",msg:"更新成功",link:!1};Object(a.t)(t)}})})}if("staff"==s){document.getElementById("addNewStaff").addEventListener("click",()=>{_({title:"新增管理人員",msg:"新增成功",btnText:"送出",action:"addStaff",account:"",data:{id:"",date:"",account:"",password:"",name:"",job_title:"",staff_limit:""}})})}});let w=document.getElementById("searchForm");w.querySelectorAll(".search-select").forEach(t=>{t.classList.contains("search-"+s)||t.remove()}),w.addEventListener("submit",t=>{t.preventDefault()}),w.addEventListener("change",t=>{let e=[];t.currentTarget.querySelectorAll(".form-control").forEach(t=>{t.value=t.value.trim(),"null"!=t.value&&""!=t.value&&e.push({selectName:t.dataset.search,selectVal:t.value})});let n=h,l=10;if(Object(a.w)("資料搜尋中...."),e.forEach(t=>{switch(t.selectName){case"keyword":let e=t.selectVal;n=n.filter(t=>{let n=[];return g.forEach(a=>{t[a]?n.push(t[a].includes(e)):n.push(!1)}),n.includes(!0)});break;case"row":l=Number(t.selectVal);break;case"hot":"all"!=t.selectVal&&(n=n.filter(e=>e.hot==t.selectVal));break;case"online":"all"!=t.selectVal&&(n=n.filter(e=>e.online==t.selectVal));break;case"news":"all"!=t.selectVal&&(n=n.filter(e=>e.hot==t.selectVal));break;case"banner":"all"!=t.selectVal&&(n=n.filter(e=>e.banner==t.selectVal))}}),n.length>0){let t=Object(a.a)(n,l);Object(a.o)(t,s,r)}else o.innerHTML="",r.innerHTML="沒有符合的資料",document.getElementById("systemBox").remove()})}});