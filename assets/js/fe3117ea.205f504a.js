"use strict";(self.webpackChunktekdi_docs=self.webpackChunktekdi_docs||[]).push([[5198],{92449:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>f,frontMatter:()=>r,metadata:()=>a,toc:()=>i});const a=JSON.parse('{"id":"todo-service/api-docs","title":"API Docs","description":"1. CREATE Todo API:","source":"@site/docs/todo-service/7_api-docs.md","sourceDirName":"todo-service","slug":"/todo-service/api-docs","permalink":"/docs/todo-service/api-docs","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"sidebar_position":7},"sidebar":"tutorialSidebar","previous":{"title":"Database Schema","permalink":"/docs/todo-service/database-schema"},"next":{"title":"Installation","permalink":"/docs/todo-service/devops"}}');var d=s(74848),t=s(28453);const r={sidebar_position:7},c="API Docs",o={},i=[];function l(e){const n={br:"br",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"api-docs",children:"API Docs"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"1. CREATE Todo API:"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Method:"})," POST",(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.strong,{children:"URL:"})," ",(0,d.jsx)(n.code,{children:"{{url}}/todo/create"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.strong,{children:"Headers:"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"accept: */*"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"Content-Type: application/json"})}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Request Body:"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n  "assigned_by": "2e4e9f76-d36c-4281-a65a-eaa3c8b6fea2",\n  "assigned_to": "2e4e9f76-d36c-4281-a65a-eaa3c8b6fea3",\n  "sender_msg": "Move from A-> B",\n  "context_id": "2e4e9f76-d36c-4281-a65a-eaa3c8b6f917",\n  "context": "user",\n  "start_date": "2024-11-05T19:00:00Z",\n  "due_date": "2024-11-07T19:00:00Z",\n  "status": "incomplete",\n  "completion_date": "2024-03-23T10:00:00Z",\n  "state": "publish",\n  "title": "Reassign",\n  "type": "assign",\n  "action_data": {\n    "action_name": "delete",\n    "status": "archived",\n    "oldCohortId": ["2e4e9f76-d36c-4281-a65a-eaa3c8b6fea2"],\n    "newCohortId": ["2e4e9f76-d36c-4281-a65a-eaa3c8b6fea3"]\n  },\n  "created_by": "eff008a8-2573-466d-b877-fddf6a4fc13e",\n  "updated_by": "eff008a8-2573-466d-b877-fddf6a4fc13e"\n}\n'})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Status:"})," CREATED (201)"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Response Body:"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n  "id": "api.todo.create",\n  "ver": "1.0",\n  "ts": "2024-10-17T16:10:19.909Z",\n  "params": {\n    "resmsgid": "a474af92-5855-4a67-ac0e-b52cf36094ee",\n    "status": "successful",\n    "error": null,\n    "errmsg": null\n  },\n  "responseCode": "CREATED",\n  "result": {\n    "assigned_by": "2e4e9f76-d36c-4281-a65a-eaa3c8b6fea2",\n    "assigned_to": "2e4e9f76-d36c-4281-a65a-eaa3c8b6fea4",\n    "sender_msg": "Mahima Shastri requested to re-assign Aisha Bhatt learning Center from: Koradi -> Khapari Dharmu",\n    "context_id": "2e4e9f76-d36c-4281-a65a-eaa3c8b6f918",\n    "context": "user",\n    "start_date": "2026-11-05T19:00:00Z",\n    "due_date": "2026-11-07T19:00:00Z",\n    "status": "incomplete",\n    "state": "publish",\n    "title": "Reassign",\n    "type": "assign",\n    "action_data": {\n      "action_name": "delete",\n      "status": "archived",\n      "oldCohortId": ["2e4e9f76-d36c-4281-a65a-eaa3c8b6fea2"],\n      "newCohortId": ["2e4e9f76-d36c-4281-a65a-eaa3c8b6fea3"]\n    },\n    "created_by": "eff008a8-2573-466d-b877-fddf6a4fc13e",\n    "updated_by": "eff008a8-2573-466d-b877-fddf6a4fc13e",\n    "asset_id": null,\n    "ideal_time": null,\n    "spent_time": null,\n    "todo_id": "4077ff48-c941-4239-b539-4f3b4324edf9",\n    "created_at": "2024-10-17T16:10:19.904Z",\n    "updated_at": "2024-10-17T16:10:19.904Z"\n  }\n}\n'})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"2. GET List Of Todo API :"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Method:"})," POST",(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.strong,{children:"URL:"})," ",(0,d.jsx)(n.code,{children:"{{url}}/todo/list"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.strong,{children:"Headers:"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"accept: */*"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"Content-Type: application/json"})}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Request Body:"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n  // "limit": 0,\n  // "offset": 0,\n  "filters": {\n    // "assigned_by": "2e4e9f76-d36c-4281-a65a-eaa3c8b6fea3",\n    // "assigned_to": "2e4e9f76-d36c-4281-a65a-eaa3c8b6fea4",\n    // "context_id": "2e4e9f76-d36c-4281-a65a-eaa3c8b6fe46",\n    "context": "user"\n    // "title": "Reassign",\n    // "state":"publish",\n    // "action_name": "delete",\n    // "status": [\n    //     "incomplete",\n    //     "complete"\n    // ],\n    // "due_date": {\n    //     "from": "2024-10-07T18:30:00Z",\n    //     "to": "2024-10-08T18:29:59Z"\n    // }\n  }\n}\n'})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Status:"})," OK (200)",(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.strong,{children:"Headers:"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"accept: */*"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"Content-Type: application/json"})}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Response Body:"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n  "id": "api.todo.list",\n  "ver": "1.0",\n  "ts": "2024-10-17T16:11:34.235Z",\n  "params": {\n    "resmsgid": "9130fc57-7663-49c6-8529-6127a833a7cd",\n    "status": "successful",\n    "error": null,\n    "errmsg": null\n  },\n  "responseCode": "OK",\n  "result": {\n    "totalCount": "3",\n    "fecthTodo": [\n      {\n        "todo_id": "edaebd9d-b045-481e-a27a-4c2c95e44e70",\n        "asset_id": null,\n        "ordering": 1,\n        "state": "publish",\n        "sender_msg": "Move A -> B",\n        "context_id": "2e4e9f76-d36c-4281-a65a-eaa3c8b6f913",\n        "context": "user",\n        "assigned_by": "2e4e9f76-d36c-4281-a65a-eaa3c8b6fea2",\n        "assigned_to": "2e4e9f76-d36c-4281-a65a-eaa3c8b6fea3",\n        "start_date": "2024-10-05T19:00:00.000Z",\n        "due_date": "2024-10-07T19:00:00.000Z",\n        "status": "incomplete",\n        "title": "Reassign",\n        "type": "assign",\n        "created_by": "eff008a8-2573-466d-b877-fddf6a4fc13e",\n        "updated_by": "eff008a8-2573-466d-b877-fddf6a4fc13e",\n        "created_at": "2024-09-30T12:23:58.589Z",\n        "updated_at": "2024-09-30T12:23:58.589Z",\n        "ideal_time": null,\n        "spent_time": null,\n        "completion_date": null,\n        "action_data": {\n          "status": "archived",\n          "action_name": "delete",\n          "newCohortId": ["2e4e9f76-d36c-4281-a65a-eaa3c8b6fea3"],\n          "oldCohortId": ["2e4e9f76-d36c-4281-a65a-eaa3c8b6fea2"]\n        }\n      },\n      {\n        "todo_id": "ddf13cbe-f9d6-472e-b8dc-a9078c43bdba",\n        "asset_id": null,\n        "ordering": 1,\n        "state": "publish",\n        "sender_msg": "Center from: Koradi -> Khapari Dharmu",\n        "context_id": "2e4e9f76-d36c-4281-a65a-eaa3c8b6f917",\n        "context": "user",\n        "assigned_by": "2e4e9f76-d36c-4281-a65a-eaa3c8b6fea2",\n        "assigned_to": "2e4e9f76-d36c-4281-a65a-eaa3c8b6fea3",\n        "start_date": "2024-11-05T19:00:00.000Z",\n        "due_date": "2024-11-07T19:00:00.000Z",\n        "status": "incomplete",\n        "title": "Reassign",\n        "type": "assign",\n        "created_by": "eff008a8-2573-466d-b877-fddf6a4fc13e",\n        "updated_by": "eff008a8-2573-466d-b877-fddf6a4fc13e",\n        "created_at": "2024-10-17T16:09:41.787Z",\n        "updated_at": "2024-10-17T16:09:41.787Z",\n        "ideal_time": null,\n        "spent_time": null,\n        "completion_date": null,\n        "action_data": {\n          "status": "archived",\n          "action_name": "delete",\n          "newCohortId": ["2e4e9f76-d36c-4281-a65a-eaa3c8b6fea3"],\n          "oldCohortId": ["2e4e9f76-d36c-4281-a65a-eaa3c8b6fea2"]\n        }\n      }\n    ]\n  }\n}\n'})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"3. UPDATE Todo API:"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Method:"})," PATCH",(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.strong,{children:"URL:"})," ",(0,d.jsx)(n.code,{children:"{{url}}/todo/:todoId"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.strong,{children:"Headers:"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"accept: */*"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"Content-Type: application/json"})}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Request Body:"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n {\n  "sender_msg": "updated requested to re-assign Aisha Bhatt learning Center from: Y -> Z",\n   "updated_by": "2e4e9f76-d36c-4281-a65a-eaa3c8b6fea2",\n    "spent_time" : "03:00:00"\n//    "status" : "rejected"\n}\n}\n'})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Status:"})," OK (200)"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Response Body:"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n  "id": "api.todo.update",\n  "ver": "1.0",\n  "ts": "2024-10-17T16:13:43.494Z",\n  "params": {\n    "resmsgid": "529e3a66-dd4d-4a6e-b611-9fce16ed3049",\n    "status": "successful",\n    "error": null,\n    "errmsg": null\n  },\n  "responseCode": "OK",\n  "result": {\n    "sender_msg": "updated requested to re-assign Aisha Bhatt learning Center from: Y -> Z",\n    "updated_by": "2e4e9f76-d36c-4281-a65a-eaa3c8b6fea2",\n    "spent_time": "03:00:00"\n  }\n}\n'})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"4. Get By Todo Id API:"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Method:"})," GET",(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.strong,{children:"URL:"})," ",(0,d.jsx)(n.code,{children:"{{url}}/todo/:todoId"})]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Response Body:"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n  "id": "api.todo.get",\n  "ver": "1.0",\n  "ts": "2024-10-17T16:14:29.802Z",\n  "params": {\n    "resmsgid": "2bfcfc2b-a98a-4b3b-8083-75de2b85fc55",\n    "status": "successful",\n    "error": null,\n    "errmsg": null\n  },\n  "responseCode": "OK",\n  "result": {\n    "todo_id": "4077ff48-c941-4239-b539-4f3b4324edf9",\n    "asset_id": null,\n    "ordering": 1,\n    "state": "publish",\n    "sender_msg": "updated requested to re-assign Aisha Bhatt learning Center from: Y -> Z",\n    "context_id": "2e4e9f76-d36c-4281-a65a-eaa3c8b6f918",\n    "context": "user",\n    "assigned_by": "2e4e9f76-d36c-4281-a65a-eaa3c8b6fea2",\n    "assigned_to": "2e4e9f76-d36c-4281-a65a-eaa3c8b6fea4",\n    "start_date": "2026-11-06",\n    "due_date": "2026-11-08",\n    "status": "incomplete",\n    "title": "Reassign",\n    "type": "assign",\n    "created_by": "eff008a8-2573-466d-b877-fddf6a4fc13e",\n    "updated_by": "2e4e9f76-d36c-4281-a65a-eaa3c8b6fea2",\n    "created_at": "2024-10-17T16:10:19.904Z",\n    "updated_at": "2024-10-17T16:13:43.490Z",\n    "ideal_time": null,\n    "spent_time": "03:00:00",\n    "completion_date": "2024-10-17",\n    "action_data": {\n      "status": "archived",\n      "action_name": "delete",\n      "newCohortId": ["2e4e9f76-d36c-4281-a65a-eaa3c8b6fea3"],\n      "oldCohortId": ["2e4e9f76-d36c-4281-a65a-eaa3c8b6fea2"]\n    }\n  }\n}\n'})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"5. DELETE By Todo Id API:"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Method:"})," DELETE",(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.strong,{children:"URL:"})," ",(0,d.jsx)(n.code,{children:"{{url}}/todo/:todoId"})]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Response Body:"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n  "id": "api.todo.delete",\n  "ver": "1.0",\n  "ts": "2024-10-17T16:14:40.150Z",\n  "params": {\n    "resmsgid": "2fff9046-8c6b-4593-9192-39e297583eae",\n    "status": "successful",\n    "error": null,\n    "errmsg": null\n  },\n  "responseCode": "OK",\n  "result": {\n    "generatedMaps": [],\n    "raw": [],\n    "affected": 1\n  }\n}\n'})})]})}function f(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}}}]);