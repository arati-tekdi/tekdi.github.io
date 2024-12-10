"use strict";(self.webpackChunktekdi_docs=self.webpackChunktekdi_docs||[]).push([[560],{81873:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>b,default:()=>j,frontMatter:()=>F,metadata:()=>s,toc:()=>x});const s=JSON.parse('{"id":"user-service/apis/fields-controller-update-fields","title":"Update Field","description":"Update Field","source":"@site/docs/user-service/apis/fields-controller-update-fields.api.mdx","sourceDirName":"user-service/apis","slug":"/user-service/apis/fields-controller-update-fields","permalink":"/docs/user-service/apis/fields-controller-update-fields","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"fields-controller-update-fields","title":"Update Field","description":"Update Field","sidebar_label":"Update Field","hide_title":true,"hide_table_of_contents":true,"api":"eJyVVktv4zYQ/ivCnFpAu3bannRLnS4a9JAgj5NhLChxFHFNkVo+kriC/nsxpF5+Je7FkMmZjzMfv5lhC7pBw5zQ6pZDBt8ESm5XWjmjpUTz3TecOYzLkELDDKvRobGQrVtQrEbIoKTtWw4pGPzphUEOmTMeUxAKMmiYqyAFW1RYM8hacLuG3KwzQr1A122iI1r3p+Y7sjjEKbRyqBxtsaaRogghL35YrWjtCFrnP7BwFLChBJ1AS7sx3sMAUuBoCyMawoQMnipMyDLRZeIqTMohe44l89JBBtClIFmO8jK0YPoJXEjx3V0G2BtfBvkU4P4HLDl8Au3OYKLyNWRrCKmkoHyNRhSkDMaFJhijm+9cvylIoaiw2Ob6HTZz+NFVSpZLhKxk0mKXgjYcwzHTucrXOZqTuQzW5xNZdnPBjpi51hKZOgk6mJ8HJb0SP6iYcrf8Mt4H609ID8v3VIJBzcc4M4PzUG2XApPyrgwl/HHBCLsyyBxeQM9jg4UoBdpEzE5OCqaSHJMiwPB5HOO1BoQTGd3FjaTUZgKcI6w3gxCBGcN2kIJwGMk57DF0J8KRnGKT62nsNgOv184ZkXuH9lQfOcP15PQR310KVntT4A06JuSFB+y5fALPsUHF7Z26TG+j+Yewh5TZ5zAMbpwmPkPx2EYrGxn7bXl1fIXRL6mYTXJENcggsb4o0NrSS7n7StL+Y/n7CW9tcsE5KgixsBeaOj0m9QyLhTfC7YKQWUD84vQWFUmj2xxmHsNPvvUyqtFVmsf5VFRhuLkKMlh4i2bxerWIpCziCFy0/ZTraJSheY0zcBbFIw2hyMV+LOONsEb8g0GlFE6FjIfe1U/Ra+8qbcS/YbSFjGm8PUyD8a93VjcSp0E2XXE/i6aFcZocLT0dqKOPre+6U49dHk/zqalN7gc9aWoYobxn1b0efE5X3IkaOdA1MSJUqQOhvS4fK7G1FUvuJXOlNvWR2lcPzzfJ9f0tpEA3Fhevvi57PlgxVFCjrauZmpF7IJc93HZO26KRTChSsTfhQRCFtAYSEh18NfBEFRblBClkw7Npk0KlLfUzaNucWXw2suto+adHs4sqe2VGxHG4boELS998ZPkguPG5BL889Hf4a7J/11PQgzgVKfOVSU//IIUt7mZvu9Aoe8lSCHF3FQ/6EkQ1eR+90agYx3q7v35a/Q0p5P1jr9acnAx7C++Et3j8bCyEtRYkUy+evZBtBKV7Y564npfYNpRY/zEbcfsJ7lfbkC39dukZl7aNBdx1o33cOusxlni0Jr43Xdf9Bxcn7Yg=","sidebar_class_name":"patch api-method","info_path":"docs/user-service/apis/shiksha-platform","custom_edit_url":null},"sidebar":"tutorialSidebar","previous":{"title":"Search Field","permalink":"/docs/user-service/apis/fields-controller-search-fields"},"next":{"title":"Create Forms","permalink":"/docs/user-service/apis/forms-controller-create-cohort"}}');var a=i(74848),d=i(28453),r=i(57742),l=i.n(r),o=i(78178),n=i.n(o),p=i(19624),c=i.n(p),f=i(96226),u=i.n(f),h=(i(77675),i(19365),i(51107));const F={id:"fields-controller-update-fields",title:"Update Field",description:"Update Field",sidebar_label:"Update Field",hide_title:!0,hide_table_of_contents:!0,api:"eJyVVktv4zYQ/ivCnFpAu3bannRLnS4a9JAgj5NhLChxFHFNkVo+kriC/nsxpF5+Je7FkMmZjzMfv5lhC7pBw5zQ6pZDBt8ESm5XWjmjpUTz3TecOYzLkELDDKvRobGQrVtQrEbIoKTtWw4pGPzphUEOmTMeUxAKMmiYqyAFW1RYM8hacLuG3KwzQr1A122iI1r3p+Y7sjjEKbRyqBxtsaaRogghL35YrWjtCFrnP7BwFLChBJ1AS7sx3sMAUuBoCyMawoQMnipMyDLRZeIqTMohe44l89JBBtClIFmO8jK0YPoJXEjx3V0G2BtfBvkU4P4HLDl8Au3OYKLyNWRrCKmkoHyNRhSkDMaFJhijm+9cvylIoaiw2Ob6HTZz+NFVSpZLhKxk0mKXgjYcwzHTucrXOZqTuQzW5xNZdnPBjpi51hKZOgk6mJ8HJb0SP6iYcrf8Mt4H609ID8v3VIJBzcc4M4PzUG2XApPyrgwl/HHBCLsyyBxeQM9jg4UoBdpEzE5OCqaSHJMiwPB5HOO1BoQTGd3FjaTUZgKcI6w3gxCBGcN2kIJwGMk57DF0J8KRnGKT62nsNgOv184ZkXuH9lQfOcP15PQR310KVntT4A06JuSFB+y5fALPsUHF7Z26TG+j+Yewh5TZ5zAMbpwmPkPx2EYrGxn7bXl1fIXRL6mYTXJENcggsb4o0NrSS7n7StL+Y/n7CW9tcsE5KgixsBeaOj0m9QyLhTfC7YKQWUD84vQWFUmj2xxmHsNPvvUyqtFVmsf5VFRhuLkKMlh4i2bxerWIpCziCFy0/ZTraJSheY0zcBbFIw2hyMV+LOONsEb8g0GlFE6FjIfe1U/Ra+8qbcS/YbSFjGm8PUyD8a93VjcSp0E2XXE/i6aFcZocLT0dqKOPre+6U49dHk/zqalN7gc9aWoYobxn1b0efE5X3IkaOdA1MSJUqQOhvS4fK7G1FUvuJXOlNvWR2lcPzzfJ9f0tpEA3Fhevvi57PlgxVFCjrauZmpF7IJc93HZO26KRTChSsTfhQRCFtAYSEh18NfBEFRblBClkw7Npk0KlLfUzaNucWXw2suto+adHs4sqe2VGxHG4boELS998ZPkguPG5BL889Hf4a7J/11PQgzgVKfOVSU//IIUt7mZvu9Aoe8lSCHF3FQ/6EkQ1eR+90agYx3q7v35a/Q0p5P1jr9acnAx7C++Et3j8bCyEtRYkUy+evZBtBKV7Y564npfYNpRY/zEbcfsJ7lfbkC39dukZl7aNBdx1o33cOusxlni0Jr43Xdf9Bxcn7Yg=",sidebar_class_name:"patch api-method",info_path:"docs/user-service/apis/shiksha-platform",custom_edit_url:null},b=void 0,m={},x=[];function y(e){const t={p:"p",...(0,d.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h.default,{as:"h1",className:"openapi__heading",children:"Update Field"}),"\n",(0,a.jsx)(l(),{method:"patch",path:"/user/v1/fields/update/{fieldId}",context:"endpoint"}),"\n",(0,a.jsx)(t.p,{children:"Update Field"}),"\n",(0,a.jsx)(h.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,a.jsx)(n(),{parameters:[{name:"fieldId",required:!0,in:"path",schema:{type:"string"}}]}),"\n",(0,a.jsx)(c(),{title:"Body",body:{required:!0,content:{"application/json":{schema:{type:"object",properties:{name:{type:"string",description:"The name of the fields",default:""},label:{type:"string",description:"The label of the fields",default:""},context:{type:"string",description:"The context of the fields",default:""},contextType:{type:"string",description:"The contextType of the fields",default:""},type:{type:"string",enum:["text","numeric","radio","drop_down","checkbox"],default:"text",nullable:!1},ordering:{type:"number",description:"The ordering of the fields",default:0},required:{type:"boolean",description:"The required of the fields",default:!0},tenantId:{type:"string",description:"The tenantId of the fields",default:""},fieldParams:{description:"The fieldParams of the fields",default:{},allOf:[{type:"object",properties:{isCreate:{type:"boolean",description:"Specifies if the field can be created",default:!1},options:{description:"Options for the field",default:[],type:"array",items:{type:"string"}}},title:"FieldParams"}]},fieldAttributes:{type:"object",description:"The fieldAttributes of the fields",default:{}},sourceDetails:{type:"object",description:"The sourceDetails of the fields",default:{}},dependsOn:{type:"string",description:"The dependsOn of the fields",default:{}}},title:"FieldsUpdateDto"}}}}}),"\n",(0,a.jsx)(u(),{id:void 0,label:void 0,responses:{201:{description:"Fields has been created successfully."},403:{description:"Forbidden"}}})]})}function j(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(y,{...e})}):y(e)}}}]);