"use strict";(self.webpackChunktekdi_docs=self.webpackChunktekdi_docs||[]).push([[7491],{66281:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>f,contentTitle:()=>U,default:()=>x,frontMatter:()=>b,metadata:()=>r,toc:()=>g});const r=JSON.parse('{"id":"user-service/apis/assign-role-controller-get-role","title":"Get User Role","description":"Get User Role","source":"@site/docs/user-service/apis/assign-role-controller-get-role.api.mdx","sourceDirName":"user-service/apis","slug":"/user-service/apis/assign-role-controller-get-role","permalink":"/docs/user-service/apis/assign-role-controller-get-role","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"assign-role-controller-get-role","title":"Get User Role","description":"Get User Role","sidebar_label":"Get User Role","hide_title":true,"hide_table_of_contents":true,"api":"eJyVU02P2jAU/CtoTq3kLtD25BvabVeolxVbTghVJnkQi2Bn7RdUGvm/Vy+BLCxspV4Sf7yPmXnjBr6iYNh6N82hMYnRbtzMl3TvHQdflhR+bYjlBAqVCWZHTCFCLxo4syNo1JHCNIdCoJfaBsqhOdSkYB00KsMFFGJW0M5AN+BDJVmRg3UbpKT6QkzOOLZSqk0tyOQU/pm8lK6x8i5SlPvPo5H8copZsJXwgoagHzwQG1veISl8HX25Dvruw8rmOTmBBDYb4YiwMhmWCpGyOlg+tLxNllGMn9hvyUEvloListgj8WAeKQyOwu2ICy8Cb4hbHbmAxlCUG+7HQ+nSbqLEx2HTSZqEOoV9p/cZimfRoyN8iaUXyFT2Bx2uhDwKPam58MH+aQff8rVu7dt0y6VEPBd2GwszeCoNr33Y4S3D+9n8YTB5mkJB8HWH47sRFDLv2GQM3UjlykfemRbbsftbcS4K9wyYfvOwKo11MrI6lHLXCbdoLSedx+I6GZHCq3xQ0EdPLhUKH1lSmmZlIs1DmZIcv9QUDp2qexOsWQntRYPcRlnn0GtTRrpCJ+TIMTQ+zI52/ziAuo36NAwnk9ibspYdFLZ0eH03aZnUaUL/h+C9tl35s9fUtxan9l58/PYTCqYWSc+Ns22Nc1wIops0Lj10aipfedE3U5qms2VKfXx39W5Gb9wuWugtU0p/AUfIlN0=","sidebar_class_name":"get api-method","info_path":"docs/user-service/apis/shiksha-platform","custom_edit_url":null},"sidebar":"tutorialSidebar","previous":{"title":"Remove User Role","permalink":"/docs/user-service/apis/assign-role-controller-delete-role"},"next":{"title":"Assign Tenant","permalink":"/docs/user-service/apis/assign-tenant-controller-create-user-tenant-mapping"}}');var l=t(74848),o=t(28453),i=t(57742),n=t.n(i),a=t(78178),d=t.n(a),c=t(19624),p=t.n(c),m=t(96226),u=t.n(m),h=(t(77675),t(19365),t(51107));const b={id:"assign-role-controller-get-role",title:"Get User Role",description:"Get User Role",sidebar_label:"Get User Role",hide_title:!0,hide_table_of_contents:!0,api:"eJyVU02P2jAU/CtoTq3kLtD25BvabVeolxVbTghVJnkQi2Bn7RdUGvm/Vy+BLCxspV4Sf7yPmXnjBr6iYNh6N82hMYnRbtzMl3TvHQdflhR+bYjlBAqVCWZHTCFCLxo4syNo1JHCNIdCoJfaBsqhOdSkYB00KsMFFGJW0M5AN+BDJVmRg3UbpKT6QkzOOLZSqk0tyOQU/pm8lK6x8i5SlPvPo5H8copZsJXwgoagHzwQG1veISl8HX25Dvruw8rmOTmBBDYb4YiwMhmWCpGyOlg+tLxNllGMn9hvyUEvloListgj8WAeKQyOwu2ICy8Cb4hbHbmAxlCUG+7HQ+nSbqLEx2HTSZqEOoV9p/cZimfRoyN8iaUXyFT2Bx2uhDwKPam58MH+aQff8rVu7dt0y6VEPBd2GwszeCoNr33Y4S3D+9n8YTB5mkJB8HWH47sRFDLv2GQM3UjlykfemRbbsftbcS4K9wyYfvOwKo11MrI6lHLXCbdoLSedx+I6GZHCq3xQ0EdPLhUKH1lSmmZlIs1DmZIcv9QUDp2qexOsWQntRYPcRlnn0GtTRrpCJ+TIMTQ+zI52/ziAuo36NAwnk9ibspYdFLZ0eH03aZnUaUL/h+C9tl35s9fUtxan9l58/PYTCqYWSc+Ns22Nc1wIops0Lj10aipfedE3U5qms2VKfXx39W5Gb9wuWugtU0p/AUfIlN0=",sidebar_class_name:"get api-method",info_path:"docs/user-service/apis/shiksha-platform",custom_edit_url:null},U=void 0,f={},g=[];function v(e){const s={p:"p",...(0,o.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(h.default,{as:"h1",className:"openapi__heading",children:"Get User Role"}),"\n",(0,l.jsx)(n(),{method:"get",path:"/user/v1/rbac/usersRoles/{userId}",context:"endpoint"}),"\n",(0,l.jsx)(s.p,{children:"Get User Role"}),"\n",(0,l.jsx)(h.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,l.jsx)(d(),{parameters:[{name:"userId",required:!0,in:"path",schema:{type:"string"}},{name:"tenantid",in:"header",schema:{type:"string"}}]}),"\n",(0,l.jsx)(p(),{title:"Body",body:void 0}),"\n",(0,l.jsx)(u(),{id:void 0,label:void 0,responses:{200:{description:"Role Detail."},403:{description:"Forbidden"}}})]})}function x(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(v,{...e})}):v(e)}}}]);