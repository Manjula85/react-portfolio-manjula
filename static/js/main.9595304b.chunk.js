(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{12:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),o=a(6),r=a.n(o),s=(a(12),a(2));function c(e){return e.charAt(0).toUpperCase()+e.slice(1)}var l=a(0);var d=function(e){var t=e.categories,a=void 0===t?[]:t,i=e.setCurrentCategory,o=e.currentCategory;return Object(n.useEffect)((function(){document.title=c(o.name)}),[o]),Object(l.jsx)("header",{className:"flex-row px-1 stripe-2",children:Object(l.jsxs)("nav",{children:[Object(l.jsx)("br",{}),Object(l.jsx)("h1",{children:"Manjula"}),Object(l.jsx)("ul",{className:"flex-row",children:a.map((function(e){return Object(l.jsx)("li",{className:"mx-1 ".concat(o.name===e.name&&"navActive"),children:Object(l.jsx)("h3",{children:Object(l.jsx)("span",{onClick:function(){i(e)},children:c(e.name)})})},e.name)}))})]})})},h=a.p+"static/media/current-pic.f4a6ed4e.jpg";var j=function(){return Object(l.jsxs)("section",{className:"my-5",children:[Object(l.jsx)("h1",{id:"about",children:" The About section"}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{src:h,style:{width:"40%",height:"auto"},floated:"left",alt:"cover"}),Object(l.jsx)("h4",{children:"I am an aspiring 'Full Stack Developer'. I am currently employed in the maintenance sector as a maintenance assistant. The inspiration towards creating a software was first as a solution for many issues I find myself at work. There are many tasks like keeping track of inventory and cataloguing purchases still being done through inefficient methods. I knew that it required more custom software, but I lacked the knowledge to do it. I did try to solve issues like keeping track of orders I purchased through learning SQL but I wasn't able to develop more on it. Even though I did try to learn other software online it was a very slow process. So that is when I thought of joining this course. But other than just solving the issues at work I would love to move into a better paying software development sector one day!"})]})]})};var u=function(){return Object(l.jsxs)("section",{className:"my-5",children:[Object(l.jsxs)("p",{children:["Download my"," ",Object(l.jsx)("span",{children:Object(l.jsx)("b",{children:Object(l.jsx)("a",{href:"Resume.docx",download:!0,children:"RESUME"})})})]}),Object(l.jsx)("br",{}),Object(l.jsx)("h2",{children:"Front-end Proficiencies"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"HTML"}),Object(l.jsx)("li",{children:"CSS"}),Object(l.jsx)("li",{children:"JavaScript"}),Object(l.jsx)("li",{children:"jQuery"}),Object(l.jsx)("li",{children:"responsive design"}),Object(l.jsx)("li",{children:"React"}),Object(l.jsx)("li",{children:"Bootstrap"})]}),Object(l.jsx)("h2",{children:"Back-end Proficiencies"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"HTML"}),Object(l.jsx)("li",{children:"APIs"}),Object(l.jsx)("li",{children:"Node"}),Object(l.jsx)("li",{children:"Express"}),Object(l.jsx)("li",{children:"MySQL, Sequelize"}),Object(l.jsx)("li",{children:"MongoDB, Mongoose"}),Object(l.jsx)("li",{children:"REST"}),Object(l.jsx)("li",{children:"GraphQL"})]})]})},m=a(3),b=a(5),g=a.p+"static/media/LI-Logo.a95afc06.png",p=a(7),x=a.n(p);var O=function(){var e=Object(n.useState)({name:"",email:"",message:""}),t=Object(s.a)(e,2),a=t[0],i=t[1],o=Object(n.useState)(""),r=Object(s.a)(o,2),c=r[0],d=r[1],h=a.name,j=a.email,u=a.message,p=Object(n.useState)(""),O=Object(s.a)(p,2),f=O[0],v=O[1];function y(e){switch(console.log(e.target.value),i(Object(b.a)(Object(b.a)({},a),{},Object(m.a)({},e.target.name,e.target.value))),e.target.name){case"name":e.target.value.length>0?d(""):d("".concat(e.target.name," is required."));break;case"email":var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);d(t?"":"Your email is invalid.");break;case"message":e.target.value.length>0?d(""):d("Your message is invalid.")}}return Object(l.jsxs)("section",{style:{float:"none"},children:[Object(l.jsx)("table",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{style:{width:"20%",height:"auto"},children:Object(l.jsx)("h1",{"data-testid":"h1tag",children:"Contact me"})}),Object(l.jsx)("td",{style:{width:"65%",height:"auto"},children:Object(l.jsx)("a",{href:"https://www.linkedin.com/in/manjula-guneratne/",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("img",{src:g,style:{width:"15%",height:"auto"},alt:"linkedin"})})})]})}),Object(l.jsx)("br",{}),Object(l.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),console.log("Error message: "+c),0===c.length&&h.length>0&&j.length>0&&u.length>0&&(console.log("Submit form",a),x.a.sendForm("service_v07f92b","template_c6tm34i",e.target,"user_lyaYYxicXzJitwc6ufAhw").then((function(e){v("sent"),console.log(e.text)}),(function(e){console.log(e.text)})))},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("lable",{htmlFor:"name",children:"Name:"}),Object(l.jsx)("input",{type:"text",name:"name",onBlur:y,defaultValue:h})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("lable",{htmlFor:"email",children:"Email address:"}),Object(l.jsx)("input",{type:"email",name:"email",onBlur:y,defaultValue:j})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("lable",{htmlFor:"message",children:"Message:"}),Object(l.jsx)("textarea",{type:"message",name:"message",rows:"5",onBlur:y,defaultValue:u})]}),c&&Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:"error-text",children:c})}),Object(l.jsx)("button",{"data-testid":"button",type:"submit",value:"send",children:"Submit"})]}),f&&Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:"sent-text",children:"Email sent to mgunerate3@gmail.com"})})]})},f=a.p+"static/media/coders_bay.2b362819.PNG",v=a.p+"static/media/covid_positivity.e5170308.PNG",y=a.p+"static/media/dog_dash.8bfd59c8.PNG",w=a.p+"static/media/nosql.14e36c56.PNG",k=a.p+"static/media/note_taker.231c0b93.PNG",S=a.p+"static/media/orm_mapping.13111b66.PNG",_=a.p+"static/media/timed_quiz.edf45fe7.PNG",N=function(){var e=Object(n.useState)([{name:"dog_dash",image_path:"dog_dash.ba9dd062",category:"portfolio",link:"https://dog-dash.herokuapp.com/",git_hub:"https://github.com/manjula-guneratne/walk-my-dog",description:"This is a web application for seeking dog walker. Even though more and more people are working from home and have potentially more time to take care of their dogs, the reality is that some people have a job function that does not allow them to go outside for a dog walk. Even when the dog owner has time, he may want to spend it on other activities than walking the dog. Elderly people could also need help walking their dog especially during cold weather.",technologies:"Apollo/React-Hooks,Apollo-Boost, Graphql, React, JWT-Decode, React-Scripts, Semantic-UI, AWS S3, Apollo-Server-Express, Bcrypt, Express.js, JsonWebToken, Mongoose, Stripe"},{name:"coders_bay",image_path:"coders_bay.433e8425",category:"portfolio",link:"https://the-coders-bay-app.herokuapp.com/",git_hub:"https://github.com/manjula-guneratne/codersbay",description:"The Coders Bay is an online forum where like minded individuals can post about all things that are code. If you need assistance with a project our coaches can work with you for a fee! Want a coding buddy? Join the chat room and get to know someone! Our goal is to provide a hub for knowledge and collaboration.",technologies:"JavaScript, Express, Node.js, Bootstrap, Socket.io, MySQL2, bcrypt, Express Handlebars, Sequelize"},{name:"covid_positivity",image_path:"covid_positivity.97c87e95",category:"portfolio",link:"https://uot-project1-group07.github.io/project1-group07/",git_hub:"https://github.com/manjula-guneratne/project1-group07",description:"A site to help individuals who are self isolating due to covid have a positive mind set and give them information that has helped others in the past. Emotional and financial.",technologies:"HTML, CSS, CSS Frameworks (Materialize CSS and Semantic UI), Javascript and API's"},{name:"nosql",image_path:"nosql.c8bbcdcf",category:"portfolio",link:"https://github.com/manjula-guneratne/social-media-Manjula",git_hub:"https://github.com/manjula-guneratne/social-media-Manjula",description:"To give users access to a social network where they can share thier thoughts, react to friends' thoughts and create a friends list.",technologies:"JavaScript, Node, npm, Express, Moment, mongoose, routes"},{name:"note_taker",image_path:"note_taker.96f9df41",category:"portfolio",link:"https://manjula-guneratne.github.io/NoteTaker-Manjula/",git_hub:"https://manjula-guneratne.github.io/NoteTaker-Manjula/",description:"To create a Notepad where one can store, edit and delete data. The project uses express as the server to communicate with the HTML and CSS front-end with the JavaScript and Node.js back-end.",technologies:"JavaScript, Node, HTML, CSS, Express"},{name:"orm_mapping",image_path:"orm_mapping.ef54c58e",category:"portfolio",link:"https://github.com/manjula-guneratne/e-commerce-Manjula",git_hub:"https://github.com/manjula-guneratne/e-commerce-Manjula",description:"To create a website to monitor and manupulate store inventory and manage customer information.",technologies:"JavaScript, Node, npm, Express, dotenv, sequelize, express, routes"},{name:"timed_quiz",image_path:"timed_quiz.1b938e9f",category:"portfolio",link:"https://manjula-guneratne.github.io/timed-quiz-Manjula/",git_hub:"https://github.com/manjula-guneratne/timed-quiz-Manjula",description:"Creating a quiz using DOM principles.",technologies:"HTML, CSS, JavaScript, Bootstrap, DOM"}]),t=Object(s.a)(e,1)[0],a=function(e){switch(e){case"coders_bay":return f;case"covid_positivity":return v;case"dog_dash":return y;case"nosql":return w;case"note_taker":return k;case"orm_mapping":return S;case"timed_quiz":return _}};return Object(l.jsx)("div",{children:t.length?Object(l.jsx)("section",{children:t.map((function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h4",{style:{color:"#a3a3c2"},children:e.name}),Object(l.jsxs)("div",{className:"flex-container",children:[Object(l.jsx)("div",{className:"flex-image",children:Object(l.jsx)("img",{src:a(e.name),alt:e.name},e.name)}),Object(l.jsxs)("div",{className:" flex-description",children:[e.description,Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:Object(l.jsx)("u",{children:"Technologies used"})}),e.technologies]}),Object(l.jsxs)("div",{className:"flex-links",children:[Object(l.jsx)("p",{children:Object(l.jsx)("u",{children:"Associated links"})}),Object(l.jsx)("a",{href:e.git_hub,target:"_blank",rel:"noreferrer",children:"Git Hub"}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:"Project link"})]})]}),Object(l.jsx)("br",{})]})}))}):Object(l.jsx)("h3",{children:"No posts"})})};var M=function(e){return e.currentCategory,Object(l.jsx)("section",{children:Object(l.jsx)(N,{})})},T=[{name:"About",description:"A breif intro about me"},{name:"Portfolio",description:"All the projects I have done so far"},{name:"Contact",description:"A form to contact me"},{name:"Resume",description:"Downloadable qualifications"}];var C=function(){var e=Object(n.useState)(T[0]),t=Object(s.a)(e,2),a=t[0],i=t[1];return console.log("Current category:"+JSON.stringify(a.name)),Object(l.jsxs)("div",{children:[Object(l.jsx)(d,{categories:T,setCurrentCategory:i,currentCategory:a}),Object(l.jsx)("main",{children:{About:Object(l.jsx)(j,{}),Portfolio:Object(l.jsx)(M,{}),Contact:Object(l.jsx)(O,{}),Resume:Object(l.jsx)(u,{})}[a.name]}),Object(l.jsx)("footer",{children:Object(l.jsx)("table",{className:"footerTable",children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{className:"footerTableTd",children:Object(l.jsx)("a",{href:"mailto:mguneratne3@gamil.com",children:"mguneratne3@gamil.com"})}),Object(l.jsx)("td",{className:"footerTableTd",children:Object(l.jsx)("a",{href:"https://github.com/manjula-guneratne",children:"https://github.com/manjula-guneratne"})}),Object(l.jsx)("td",{children:Object(l.jsx)("a",{href:"https://twitter.com/MGuneratne",children:"https://twitter.com/MGuneratne"})})]})})})]})},E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),n(e),i(e),o(e),r(e)}))};r.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(C,{})}),document.getElementById("root")),E()}},[[16,1,2]]]);
//# sourceMappingURL=main.9595304b.chunk.js.map