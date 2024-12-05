"use strict";(self.webpackChunktekdi_docs=self.webpackChunktekdi_docs||[]).push([[7619],{41185:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"notifications-service/devops","title":"Devops","description":"Installation","source":"@site/docs/notifications-service/8_devops.md","sourceDirName":"notifications-service","slug":"/notifications-service/devops","permalink":"/docs/notifications-service/devops","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"sidebar_position":8},"sidebar":"tutorialSidebar","previous":{"title":"API Docs","permalink":"/docs/notifications-service/api-docs"},"next":{"title":"Introduction","permalink":"/docs/notifications-service/apis/notification"}}');var s=i(74848),t=i(28453);const a={sidebar_position:8},o="Devops",d={},l=[{value:"1. Clone git repository",id:"1-clone-git-repository",level:4},{value:"2. Setup DB",id:"2-setup-db",level:4},{value:"3. Environment Variables",id:"3-environment-variables",level:4},{value:"4. Run the Application",id:"4-run-the-application",level:4}];function c(e){const n={code:"code",h1:"h1",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"devops",children:"Devops"})}),"\n",(0,s.jsx)(n.p,{children:"Installation"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Steps to install locally for development"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"1-clone-git-repository",children:"1. Clone git repository"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git clone https://github.com/tekdi/notification-microservice\ncd notification-microservice\nnpm install\n"})}),"\n",(0,s.jsx)(n.h4,{id:"2-setup-db",children:"2. Setup DB"}),"\n",(0,s.jsx)(n.p,{children:"Make sure you have PostgreSQL installed and running. Create a database for the notification service"}),"\n",(0,s.jsx)(n.h4,{id:"3-environment-variables",children:"3. Environment Variables"}),"\n",(0,s.jsx)(n.p,{children:"Create a .env file in the root directory of your project and add the necessary environment variables."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dotenv",children:'\n#server\nPOSTGRES_HOST="add-here"\nPOSTGRES_PORT="add-here"\nPOSTGRES_USERNAME="add-here"\nPOSTGRES_PASSWORD="add-here"\nPOSTGRES_DATABASE="add-here"\nPOSTGRES_SCHEMA="add-here"\n\n#Email config\nEMAIL_TYPE=smtp\nEMAIL_HOST="add-here"\nEMAIL_PORT="add-here"\nEMAIL_USER="add-here"\nEMAIL_PASS="add-here"\nEMAIL_FROM="add-here"\n\n#RABBITMQ LOCAL\nRABBITMQ_URL=amqp://localhost:5672\n\n#push notification\nFCM_KEY="add-here"\nFCM_URL=""add-here"\nFIREBASE_PROJECT_ID="add-here"\nFIREBASE_PRIVATE_KEY="add-here"\nFIREBASE_CLIENT_EMAIL="add-here"\n\nTWILIO_ACCOUNT_SID ="add-here"\nTWILIO_AUTH_TOKEN ="add-here"\nSMS_FROM ="add-here"\n'})}),"\n",(0,s.jsx)(n.h4,{id:"4-run-the-application",children:"4. Run the Application"}),"\n",(0,s.jsx)(n.p,{children:"Before starting application make sure RabbitMQ server should be up and running."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"npm run start:dev\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Steps to install on server (Should have a docker compose file)","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Recommended Infrastructure (should cover Dev & Prod)"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);