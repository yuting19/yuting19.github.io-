!function(t){function e(e){for(var a,d,s=e[0],r=e[1],o=e[2],u=0,m=[];u<s.length;u++)d=s[u],Object.prototype.hasOwnProperty.call(i,d)&&i[d]&&m.push(i[d][0]),i[d]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);for(c&&c(e);m.length;)m.shift()();return l.push.apply(l,o||[]),n()}function n(){for(var t,e=0;e<l.length;e++){for(var n=l[e],a=!0,s=1;s<n.length;s++){var r=n[s];0!==i[r]&&(a=!1)}a&&(l.splice(e--,1),t=d(d.s=n[0]))}return t}var a={},i={9:0},l=[];function d(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,d),n.l=!0,n.exports}d.m=t,d.c=a,d.d=function(t,e,n){d.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},d.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},d.t=function(t,e){if(1&e&&(t=d(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)d.d(n,a,function(e){return t[e]}.bind(null,a));return n},d.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return d.d(e,"a",e),e},d.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},d.p="";var s=window.webpackJsonp=window.webpackJsonp||[],r=s.push.bind(s);s.push=e,s=s.slice();for(var o=0;o<s.length;o++)e(s[o]);var c=r;l.push([41,0]),n()}({0:function(t,e,n){"use strict";n.d(e,"i",(function(){return m})),n.d(e,"c",(function(){return d})),n.d(e,"b",(function(){return s})),n.d(e,"k",(function(){return p})),n.d(e,"g",(function(){return b})),n.d(e,"s",(function(){return $})),n.d(e,"a",(function(){return _})),n.d(e,"m",(function(){return B})),n.d(e,"r",(function(){return r})),n.d(e,"p",(function(){return o})),n.d(e,"u",(function(){return c})),n.d(e,"f",(function(){return g})),n.d(e,"e",(function(){return f})),n.d(e,"n",(function(){return k})),n.d(e,"h",(function(){return v})),n.d(e,"t",(function(){return h})),n.d(e,"l",(function(){return L})),n.d(e,"q",(function(){return E})),n.d(e,"d",(function(){return y})),n.d(e,"j",(function(){return u})),n.d(e,"o",(function(){return l}));var a=n(1),i=n(6);n(4);let l=(t,e,n)=>{let a=new Date;a.setTime(a.getTime()+60*n*60*1e3);let i="expires="+a.toUTCString();document.cookie=t+"="+e+";"+i+";path=/"},d=async t=>{try{return(await Object(i.a)({method:t.method,url:t.url,params:t.params,data:t.data})).data}catch(t){return console.log(t),"error"}},s=t=>{document.getElementById("systemBox")&&document.getElementById("systemBox").remove();let e=`\n        <div id="popup" class="popup">\n            <div>\n                <i class="fa-solid ${t.icon} fa-5x"></i>\n                <h4 class="mt-3">${t.infoA}</h4> \n                <h6>${t.infoB}</h6>\n            </div>\n        </div>\n    `,n=document.createElement("div");n.classList.add("popup"),n.innerHTML=e,document.querySelector("body").appendChild(n),setTimeout(()=>{window.location.href=t.link},3e3)},r=t=>{document.getElementById("systemBox")&&document.getElementById("systemBox").remove();let e=`\n        <div id="msgBox" class="msgBox">\n            <div class="msgInfo">\n                    <i class="fas ${t.icon} icon"></i>\n                <h4>${t.msg}</h4>\n            </div>\n        </div>\n    `,n=document.createElement("div");n.innerHTML=e,document.querySelector("body").appendChild(n),setTimeout(()=>{t.link?window.location.href=t.link:window.location.reload()},3e3)},o=t=>{let e=`\n        <div id="confirmBox" class="confirmBox">\n            <div class="confirmInfo">\n                <i class="fas ${t.icon} icon"></i>\n                <h6> ${t.text} </h6>\n                <button type="button"  data-confirm="1" class="btn btn-danger">${t.btn1}</button>\n                <button type="button"  data-confirm="0" class="btn btn-primary">${t.btn2}</button>\n            </div>\n        </div>\n    `,n=document.createElement("div");return n.innerHTML=e,document.querySelector("body").appendChild(n),new Promise((t,e)=>{document.getElementById("confirmBox").querySelectorAll(".btn").forEach(e=>{e.addEventListener("click",e=>{t(Number(e.target.dataset.confirm))})})})},c=t=>{document.getElementById("confirmBox")&&document.getElementById("confirmBox").remove();let e=`\n        <div id="systemBox" class="systemBox">\n            <div class="systemInfo">\n                ${t}\n                <br> <div class="lds-spinner"> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> </div>\n            </div>\n        </div>\n    `,n=document.createElement("div");n.innerHTML=e,document.querySelector("body").appendChild(n)},u=t=>{let e=`\n        <div id="msgBox" class="msgBox">\n            <div class="msgInfo">\n                <i class="fas ${t.icon} icon"></i>\n                <div>${t.msg}</div>\n                <button class="btn btn-primary mt-3" id="removeMsg" >\n                    我知道了\n                </button>\n            </div>\n        </div>\n    `,n=document.createElement("div");n.innerHTML=e,document.querySelector("body").appendChild(n),document.getElementById("removeMsg").addEventListener("click",()=>{n.remove()})},m=()=>{const t=document.cookie.split(";");for(let e=0;e<t.length;e++){const n=t[e].trim();if(n.startsWith("sosonews_user_id"))return Number(n.substring("sosonews_user_id".length+1))}return null},h=()=>{const t=document.cookie.split(";");for(let e=0;e<t.length;e++){const n=t[e].trim();if(n.startsWith("sosonews_staff_data")){let t=decodeURIComponent(n.substring("sosonews_staff_data".length+1));return JSON.parse(t)}}return null},p=t=>{let e=t.split("/");return e[e.length-1]},b=t=>{let e="";return[{en:"nameVal",tw:"暱稱",test:/^[^\s]{1,15}$/},{en:"accountVal",tw:"帳號",test:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/},{en:"passwordVal",tw:"密碼",test:/^[a-zA-Z0-9]{6,}$/}].forEach(n=>{n.test.test(t[n.en])&&!/\s/.test(t[n.en])?0:e+=n.tw+"不符合規格!<br/>"}),e},f=t=>{let e="";return[{en:"nameVal",tw:"姓名",test:/.+/},{en:"emailVal",tw:"E-mail",test:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/},{en:"typeVal",tw:"詢問事項",test:/.+/},{en:"detailVal",tw:"詢問細節",test:/.+/}].forEach(n=>{""!==t[n.en]&&"null"!==t[n.en]?n.test.test(t[n.en])?0:e+=n.tw+"不符合規格!<br/>":e+=n.tw+"不能為空<br/>"}),e},g=(t,e,n)=>{let a="";return[{en:"tag_name",tw:"標籤中文",test:/^[\u4e00-\u9fa50-9]{1,10}$/},{en:"tag_val",tw:"標籤英文",test:/^[a-z0-9]{1,15}$/}].forEach(i=>{if(i.test.test(t[i.en])&&!/\s/.test(t[i.en]))if("addTag"==n){e.some(e=>e[i.en]===t[i.en])?a+=i.tw+"重複!<br/>":0}else 0;else a+=i.tw+"不符合規格!<br/>"}),a},v=t=>{let e="";return[{en:"staff_account",tw:"帳號",test:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/},{en:"staff_pasword",tw:"密碼",test:/^[a-zA-Z0-9]{6,}$/},{en:"staff_name",tw:"暱稱",test:/^[^\s]{1,15}$/},{en:"staff_title",tw:"職稱",test:/^[^\s]{1,15}$/},{en:"staff_limit",tw:"權限",test:/.+/}].forEach(n=>{""!==t[n.en]&&"null"!==t[n.en]?n.test.test(t[n.en])?0:e+=n.tw+"不符合規格!<br/>":e+=n.tw+"不能為空<br/>"}),e},y=t=>{let e=t.target.files[0],n=e.name.toLowerCase().split(".").pop(),a="";return["jpg","jpeg"].includes(n)||(a+="圖片不符合規格。<br/>"),e.size>3145728&&(a+="檔案大小超過限制。<br/>"),""==a?{sizeOk:!0,msg:a}:{sizeOk:!1,msg:a}},$=t=>{let e=document.getElementById("previewImage");const n=t.target.files[0],a=new FileReader;return a.addEventListener("load",()=>{e.src=a.result}),n?(a.readAsDataURL(n),E(!0)):E(!1)},E=t=>{let e=document.getElementById("imageInput"),n=document.getElementById("deleteImage"),a=document.getElementById("actionImageInput"),i=document.getElementById("beforeName"),l=document.getElementById("changImage"),d=document.getElementById("previewImage");return t?(e.classList.remove("d-none"),n.classList.remove("d-none"),a.innerHTML="選擇檔案",i.innerHTML="未選擇任何檔案",l.classList.add("d-none"),0):(e.classList.add("d-none"),n.classList.add("d-none"),a.innerHTML="選擇檔案",i.innerHTML="未選擇任何檔案",l.classList.remove("d-none"),d.src="/src/assets/uplodeimg.png",1)},_=(t,e)=>{let n=document.getElementById("pageNav"),a=Math.ceil(t.length/e);if(a>1){let t='\n            <ul class="pagination" >\n                <li class="disabled" id="pagePrevious">\n                    <span class="page-link">&laquo;</span>\n                </li> \n        ';for(let e=0;e<a;e++)e==a-2&&a>6&&(t+='\n                    <li class="disabled" id="hideNav">\n                        <span class="page-link">...</span>\n                    </li> \n                '),t+=`\n                <li class="page-item" data-page="${e+1}">\n                    <span class="page-link">${e+1}</span>\n                </li>\n            `;t+='\n                    <li class="" id="pageNext">\n                    <span class="page-link">&raquo;</span>\n                </li>\n            </ul>\n        ',n.innerHTML=t,document.querySelector(".page-item").classList.add("active"),a>6&&I(1,a)}else n.innerHTML="";let i=[];for(let n=0;n<t.length;n+=e){let a=t.slice(n,n+e);i.push(a)}return i},w=(t,e,n)=>{let i="";switch(e){case"user":i+="\n                <thead><tr><th>大頭照</th><th>帳號</th><th>暱稱</th><th>註冊日期</th><th>密碼</th><th>自我介紹</th><th>文章數</th><th>留言數</th><th>推薦作者</th><th>編輯</th></tr></thead>\n            ",i+='<tbody class="userList">',t.forEach(t=>{let e=null,n=null,l=null;e=t.image_path?`${a.b}/api/${t.image_path}`:"/assets/user.png",n=Number(t.hot)?"checked":"",l=t.sentence?t.sentence:"",i+=`\n                <tr>\n                    <td>\n                        <div class="userImgBG">\n                            <div class="userImg" style="background-image: url(${e});">\n                            </div>\n                        </div>\n                    </td>\n                    <td>${t.account}</td>\n                    <td><a href="../article-list.html?id=${t.id}" target="_blank">\n                        ${t.name}\n                        </a>\n                    </td>\n                    <td>${t.date}</td>\n                    <td>${t.password}</td>\n                    <td>${l}</td>\n                    <td>${t.articl_total}</td>\n                    <td>${t.comment_total}</td>\n                    <td>\n                        <div class="switchBtn">\n                            <div class="custom-control custom-switch">\n                                <input type="checkbox" ${n} class="custom-control-input" id="user-hot-${t.id}">\n                                <label class="custom-control-label" for="user-hot-${t.id}"></label>\n                            </div>\n                        </div>\n                    </td>\n                    <td>\n                        <button type="submit" data-id="${t.id}" data-table="user" data-type="delete"  class="btn btn-sm btn-danger delete mb-1" title="刪除">\n                            <i class="fas fa-lg fa-times"></i>\n                        </button>\n                    </td>\n                </tr>\n                `}),i+="</tbody>";break;case"tag":i+="\n                <thead><tr><th>標籤中文</th><th>標籤英文</th><th>文章數</th><th>排序</th><th>編輯</th></tr></thead>\n            ",i+='<tbody class="tagList" id="tagList">',t.forEach(t=>{i+=`\n                    <tr>\n                        <td>${t.tag_name}</td>\n                        <td>${t.tag_val}</td>\n                        <td>${t.article_count}</td>\n                        <td>${t.tag_idx}</td>\n                        <td>\n                            <button type="submit" data-id="${t.id}" data-table="tag" data-type="delete" class="btn btn-sm btn-danger delete mb-1" title="刪除">\n                                <i class="fas fa-lg fa-times"></i>\n                            </button>\n\n                            <button type="submit" data-id="${t.id}" data-table="tag" data-type="edit"  class="btn btn-sm btn-primary edit mb-1" title="編輯">\n                                <i class="fa-solid fa-pen"></i>\n                            </button>\n\n                            <div data-id="${t.id}" data-idx="${t.tag_idx}" data-table="tag" data-type="move"  class="btn btn-sm btn-secondary moveIcon mb-1" title="移動">\n                                <i class="fa-solid fa-up-down-left-right"></i>\n                            </div>\n                        </td>\n                    </tr>\n                `}),i+="</tbody>";break;case"article":i+="\n                <thead><tr><th>圖片</th><th>標題</th><th>作者</th><th>標籤</th><th>時間</th><th>內文</th><th>留言數</th><th>上線</th><th>熱門新聞</th><th>首頁輪撥</th><th>編輯</th></tr></thead> \n            ",i+='<tbody class="articleList">',t.forEach(t=>{let e=null,n=null,l=null,d=null;e=t.image_path?`${a.b}/api/${t.image_path}`:"/assets/img.png",n=Number(t.hot)?"checked":"",d=Number(t.online)?"checked":"",l=Number(t.banner)?"checked":"",i+=`\n                <tr>\n                    <td>\n                        <div class="photoImgBG">\n                            <div class="photoImg" style="background-image: url(${e});">\n                            </div>\n                        </div>\n                    </td>\n                    <td>\n                        <a href="../article.html?id=${t.id}" target="_blank">\n                           ${t.title}\n                        </a>\n                    </td>\n                    <td>\n                        <a href="../article-list.html?id=${t.user_id}" target="_blank">\n                        ${t.user_name}\n                        </a>\n                    </td>\n                    <td>${t.tag_name}</td>\n                    <td>\n                        ${t.date} <br/>\n                        ${t.time}\n                    </td>\n                    <td>\n                        ${t.article35}...\n                    </td>\n                    <td>\n                        ${t.comment_count}\n                    </td>\n                    <td>\n                        <div class="switchBtn">\n                            <div class="custom-control custom-switch">\n                                <input type="checkbox" class="custom-control-input" id="article-online-${t.id}" ${d}>\n                                <label class="custom-control-label" for="article-online-${t.id}"></label>\n                            </div>\n                        </div>\n                    </td>\n                    <td>\n                        <div class="switchBtn">\n                            <div class="custom-control custom-switch">\n                                <input type="checkbox" class="custom-control-input" id="article-hot-${t.id}" ${n}>\n                                <label class="custom-control-label" for="article-hot-${t.id}"></label>\n                            </div>\n                        </div>\n                    </td>\n                    <td>\n                        <div class="switchBtn">\n                            <div class="custom-control custom-switch">\n                                <input type="checkbox" class="custom-control-input" id="article-banner-${t.id}" ${l}>\n                                <label class="custom-control-label" for="article-banner-${t.id}"></label>\n                            </div>\n                        </div>\n                    </td>\n                    <td>\n                        <button type="submit" data-id="${t.id}" data-table="article" data-type="delete"  class="btn btn-sm btn-danger delete mb-1" title="刪除">\n                            <i class="fas fa-lg fa-times"></i>\n                        </button>\n                    </td>\n                </tr>\n                `}),i+="</tbody>";break;case"comment":i="\n                <thead><tr><th>文章標題</th><th>留言</th><th>留言者</th><th>時間</th><th>編輯</th></tr></thead>\n            ",i+='<tbody class="commentList">',t.forEach(t=>{i+=`\n                    <tr>\n                        <td>\n                            <a href="../article.html?id=${t.article_id}" target="_blank">\n                                ${t.title}\n                            </a>\n                        </td>\n                        <td>\n                            ${t.comment}\n                        </td>\n                        \n                        <td>${t.user_name}</td>\n                        <td>\n                            ${t.date} <br/>\n                            ${t.time}\n                        </td>\n                        <td>\n                            <button type="submit" data-id="${t.id}" data-table="comment" data-type="delete"  class="btn btn-sm btn-danger delete mb-1" title="刪除">\n                                <i class="fas fa-lg fa-times"></i>\n                            </button>\n                        </td>\n                    </tr>\n                `}),i+="</tbody>";break;case"inquiry":i="\n                <thead><tr><th>詢問事項</th><th>姓名</th><th>E-mail</th><th>時間</th><th>詢問細節</th><th>回覆</th></tr></thead>\n            ",i+='<tbody class="inquiryList">',t.forEach(t=>{let e=`\n                <button type="submit" data-id="${t.id}" data-table="inquiry" data-type="reply"  class="btn btn-sm btn-primary edit mb-1" title="回信">\n                    <i class="fa-solid fa-reply"></i>\n                </button>`,n=`\n                <button type="submit" data-id="${t.id}" data-table="inquiry" data-type="replyDetail"  class="btn btn-sm btn-danger edit mb-1" title="回信內容">\n                    <i class="fa-solid fa-envelope"></i>\n                </button>`,a="";a=t.confirm_detail?n:e,i+=`\n                    <tr>\n                        <td>${t.type}</td>\n                        <td>${t.name}</td>\n                        <td>${t.email}</td>\n                        <td>${t.data}</td>\n                        <td>${t.detail}</td>\n                        <td>${a}</td>\n                    </tr>\n                `}),i+="</tbody>";break;case"staff":let e={user:"會員資料",tag:"標籤",article:"文章",comment:"留言",inquiry:"聯絡我們",staff:"管理人員"};i="\n                <thead><tr><th>帳號</th><th>密碼</th><th>暱稱</th><th>職稱</th><th>權限</th><th>編輯</th></tr></thead>\n            ",i+='<tbody class="staffList">',t.forEach(t=>{let n=t.staff_limit.split(","),a="<ul>";n.forEach(t=>{a+=`<li>${e[t]} </li>`}),a+="<ul>",i+=`\n                    <tr>\n                        <td>${t.account}</td>\n                        <td>${t.password}</td>\n                        <td>${t.name}</td>\n                        <td>${t.job_title}</td>\n                        <td>${a}</td>\n                        <td>\n                            <button type="submit" data-id="${t.id}" data-table="staff" data-type="delete"  class="btn btn-sm btn-danger delete mb-1" title="刪除">\n                                <i class="fas fa-lg fa-times"></i>\n                            </button>\n                            <button type="submit" data-id="${t.id}" data-table="staff" data-type="edit-staff"  class="btn btn-sm btn-primary edit mb-1" title="編輯">\n                                <i class="fa-solid fa-pen"></i>\n                            </button>\n                        </td>\n                    </tr>\n                `}),i+="</tbody>";break;case"article-list":t.forEach(t=>{let e=url("?id"),n=null,l=null;n=t.image_path?`${a.b}/api/${t.image_path}`:"/assets/img.png",l=e?`<span class="tag">${t.tag_name}</span>`:`<a class="authorPage"  href="article-list.html?id=${t.user_id}">${t.user_name}</a> | `;let d=null;d=Number(t.online)?"":' <div class="icon"><i class="fas fa-eye-slash"></i></div>',i+=` <ul class="articleBox">\n                            <li class="img" style="background-image: url(${n});" >\n                               ${d}\n                            </li>\n                            <li class="title">\n                                <a href="article.html?id=${t.id}">\n                                    ${t.title}\n                                </a>\n                                <div class="author">\n                                ${l}${t.date}</div>\n                            </li>\n                        </ul>\n                        `})}n.innerHTML=i},B=(t,e,n)=>{if(t.length>1){let a=document.getElementById("pagePrevious"),i=document.getElementById("pageNext"),l=document.querySelectorAll(".page-item"),d=document.getElementById("pageNav"),s=1;a.addEventListener("click",()=>{1!=s&&l[s-2].click()}),i.addEventListener("click",()=>{s!=l.length&&l[s].click()}),l.forEach(r=>{r.addEventListener("click",r=>{let o=Number(r.currentTarget.dataset.page);s!==o&&(d.querySelector(".active").classList.remove("active"),r.currentTarget.classList.add("active"),s=o),d.querySelector(".disabled")&&d.querySelector(".disabled").classList.remove("disabled"),s==l.length?i.classList.add("disabled"):1==s&&a.classList.add("disabled"),l.length>6&&I(s,l.length),w(t[s-1],e,n)})}),w(t[s-1],e,n)}else w(t[0],e,n);document.getElementById("systemBox")&&document.getElementById("systemBox").remove()},I=(t,e)=>{let n=t-1,a=e,i=document.getElementById("hideNav"),l=document.querySelectorAll(".page-item");if(l.forEach(t=>{t.classList.add("d-none")}),n+6>=a){i.classList.add("d-none");for(let t=a-6;t<a;t++)l[t].classList.remove("d-none")}else{let t=[l[n],l[n+1],l[n+2],l[a-1],l[a-2]];i.classList.remove("d-none"),t.forEach(t=>{t.classList.remove("d-none")})}},k=t=>{document.querySelectorAll("input").forEach(e=>{e.addEventListener("focus",()=>{t.innerHTML=""})})},L=t=>t.replace(/\n/g,"<br>")},1:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a}));let a="http://yuting.website/side-project/sosonews",i={user:a+"/api/menber.php",article:a+"/api/article-fun.php",comment:a+"/api/comment-fun.php",staff:a+"/api/staff-fun.php",tag:a+"/api/tag-fun.php",sentmail:a+"/api/sent-mail.php",inquiry:a+"/api/inquiry-fun.php"}},41:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n(0);n(4);let l=Object(i.i)();null==l&&(window.location.href="login.html");let d=document.getElementById("addArticle"),s=document.getElementById("title"),r=document.getElementById("tag"),o=document.getElementById("imageInput"),c=(document.getElementById("article"),document.getElementById("online")),u=document.getElementById("previewImage"),m=document.getElementById("actionImageInput"),h=document.getElementById("beforeName"),p=document.getElementById("deleteImage"),b=0;m.addEventListener("click",()=>{o.click()}),o.addEventListener("change",t=>{if(Object(i.d)(t).sizeOk)b=Object(i.s)(t);else{let e=Object(i.d)(t).msg;t.target.value="";let n={icon:"fa-file-excel",msg:e};Object(i.j)(n)}}),p.addEventListener("click",()=>{b=Object(i.q)(!1)});let f=url("?id");if(f){let t={method:"get",url:a.a.article,params:{action:"getOneArticle",id:f,login_id:l}};Object(i.c)(t).then(t=>{if(Number(t.user_id)===Number(l))t.image_path&&(u.src=`${a.b}/api/${t.image_path}`,h.innerText=Object(i.k)(t.image_path),p.classList.remove("d-none")),s.value=t.title,function(t){let e={method:"get",url:a.a.article,params:{action:"getAllTag"}};Object(i.c)(e).then(e=>{let n="";n="null"==t?'<option disabled selected  value="null"> 請選擇標籤 </option>':"<option disabled> 請選擇標籤 </option>",e.forEach(e=>{t==e.tag_val?n+=`<option value="${e.tag_val}" selected>${e.tag_name}</option>`:n+=`<option value="${e.tag_val}">${e.tag_name}</option>`}),r.innerHTML=n})}(t.tag_val),tinymce.init({selector:"#article",language:"zh_TW",plugins:"image link imagetools",images_upload_url:a.b+"/api/upimg.php",images_upload_base_path:a.b+"/api/",menubar:!1,toolbar:"fontsizeselect | bold italic underline removeformat | link image |  alignleft aligncenter alignright alignjustify lineheight | outdent indent |  undo redo ",setup:e=>{e.on("init",()=>{e.setContent(t.article)})}}),0==t.online&&(c.checked=!1);else{let t={icon:"fa-circle-exclamation",infoA:"沒有編輯權限",infoB:"返回文章列表",link:"article-list.html?id="+l};Object(i.b)(t)}})}else{let t={icon:"fa-circle-exclamation",infoA:"找不到文章",infoB:"返回文章列表",link:"article-list.html?id="+l};Object(i.b)(t)}d.addEventListener("submit",(async function(t){t.preventDefault(),Object(i.u)("文章更新中....");const e=new FormData;e.append("action","updataArticle"),e.append("id",f),e.append("title",s.value),e.append("tag_val",r.value),e.append("article",tinymce.activeEditor.getContent()),e.append("image",o.files[0]),e.append("online",c.checked?1:0),e.append("deleteImage",b);let n={method:"post",url:a.a.article,data:e,headers:{"Content-Type":"multipart/form-data"}};Object(i.c)(n).then(t=>{let e=t.message;if("更新成功!"==e){let t={icon:"fa-file-pen",infoA:"更新成功",infoB:"等等帶你去看看",link:"article.html?id="+f};Object(i.b)(t)}else document.getElementById("systemBox").remove(),document.getElementById("result").innerHTML=e})}))}});