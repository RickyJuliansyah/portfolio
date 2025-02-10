import{B as S}from"./BaseButton-BIlCVgX5.js";import{P as w}from"./PillsButton-BUI6Vp0C.js";import{_ as b,a as M}from"./AppHeader-BY-k40x1.js";import{e as A}from"./eventBus-ev1McF12.js";import{c as n,b as m,a as e,r as p,F as l,d,o as t,w as g,t as h,f as P,e as u,T as k}from"./index-BvQXzQra.js";const x={components:{BaseButton:S,PillsButton:w,AppHeader:M},data(){return{loading:!0,portfolio:[{id:1,nameApplication:"MAJ Integrated System Dashboard (MISD)",pathImage:"MISD",about:"MAJ Integrated System Dashboard (MISD) is a web-based application designed to integrate and display operational data from various departments at PT Mekar Armada Jaya in one centralized platform. With features such as real-time data integration from SAP and other internal systems, interactive dashboards, report automation, and notification systems, MISD helps improve operational efficiency, data accuracy, and transparency in company information management. Using Vue.js technology in the frontend and PHP (CodeIgniter) in the backend, this application offers a responsive and user-friendly interface to support faster and more accurate decision-making across various divisions, including Stamping, Welding, PPIC, Logistics, and Marketing.",technology:[{name:"Vue JS",pathImage:"vuejs"},{name:"Codeigniter 3",pathImage:"ci"},{name:"MySQL",pathImage:"mysql"},{name:"Vuetify",pathImage:"vuetify"},{name:"Socket.IO",pathImage:"socket"},{name:"Pinia",pathImage:"pinia"}],department:[{name:"Marketing",pathImage:"mkt"},{name:"Finance",pathImage:"fin"},{name:"Logistic",pathImage:"log"},{name:"Stamping",pathImage:"stp"},{name:"Welding",pathImage:"wld"},{name:"PPC",pathImage:"ppc"},{name:"Purchasing",pathImage:"pud"}],appMenu:[{name:"Login",pathImage:"MISD/login"},{name:"Dashboard",pathImage:"MISD/home"},{name:"Andon Achievement Laporan Kerja Harian - Form Input",pathImage:"MISD/lkh"},{name:"Andon Schedule Achievement Laporan Kerja Harian - Form Display",pathImage:"MISD/andon"},{name:"Andon Schedule Achievement Laporan Kerja Harian",pathImage:"MISD/schedule"},{name:"Mieruka Shipping",pathImage:"MISD/shipping"},{name:"Rundown Inventory Finish Part",pathImage:"MISD/ifp"},{name:"Integrated Warehouse",pathImage:"MISD/iw"}]},{id:2,nameApplication:"MAJ Central Hub",pathImage:"CENTRAL",about:"MAJ Central HUB is a web-based application that serves as the main portal for accessing all internal applications at PT Mekar Armada Jaya. This application presents a complete list of systems used across various departments, allowing users to easily find and access needed applications with just one click. With an intuitive interface and efficient navigation, MAJ Central HUB enhances system integration, reduces application search time, and ensures each user can quickly connect to relevant platforms according to their roles and needs.",technology:[{name:"Vue JS",pathImage:"vuejs"},{name:"Codeigniter 3",pathImage:"ci"},{name:"MySQL",pathImage:"mysql"},{name:"Vuetify",pathImage:"vuetify"},{name:"Pinia",pathImage:"pinia"}],department:[{name:"Marketing",pathImage:"mkt"},{name:"Finance",pathImage:"fin"},{name:"Logistic",pathImage:"log"},{name:"Stamping",pathImage:"stp"},{name:"Welding",pathImage:"wld"},{name:"PPC",pathImage:"ppc"},{name:"Purchasing",pathImage:"pud"}],appMenu:[{name:"Home Page",pathImage:"CENTRAL/homepage"},{name:"Andon (Report) List",pathImage:"CENTRAL/andon"},{name:"Application List",pathImage:"CENTRAL/app"},{name:"Management Data",pathImage:"CENTRAL/management"}]},{id:3,nameApplication:"Rundown Stock MAJ",about:"MAJ Stock Rundown is a web-based application used to monitor Finish Part Inventory, Raw Material Inventory, and Work in Progress through informative and interactive graphics. This application pulls data directly from SAP and Excel files, then groups it by car model and customer to provide a clearer picture of stock availability at each production stage. With real-time data visualization, MAJ Stock Rundown helps relevant teams analyze stock trends, optimize production planning, and ensure smooth supply chain operations at PT Mekar Armada Jaya.",pathImage:"STOCK",technology:[{name:"Codeigniter 3",pathImage:"ci"},{name:"MySQL",pathImage:"mysql"},{name:"Tailwind",pathImage:"tailwind"},{name:"Socket.IO",pathImage:"socket"}],department:[{name:"Marketing",pathImage:"mkt"},{name:"Finance",pathImage:"fin"},{name:"Logistic",pathImage:"log"},{name:"Stamping",pathImage:"stp"},{name:"Welding",pathImage:"wld"},{name:"PPC",pathImage:"ppc"},{name:"Purchasing",pathImage:"pud"}],appMenu:[{name:"Field Management",pathImage:"STOCK/field"},{name:"Display Management",pathImage:"STOCK/display"},{name:"Rundown Stock Inventory Finish Part",pathImage:"STOCK/ifp"},{name:"Rundown Stock Inventory Raw Material",pathImage:"STOCK/irm"},{name:"Rundown Stock Work In Progress",pathImage:"STOCK/wip"}]},{id:4,nameApplication:"UI/UX Design Sumsel Tourism",pathImage:"SUMSEL",about:"Sumsel Tourism UI/UX is a learning project I worked on through the BuildWithAngga.com platform, where I delved into user interface (UI) and user experience (UX) design principles in the context of tourism website development. In this project, I designed a digital platform that showcases the beauty of South Sumatra tourism using a user-centered design approach, from creating wireframes and interactive prototypes to developing attractive visual designs. This website is designed to help tourists easily discover interesting tourist destinations in South Sumatra, complete with information about local cuisine, accommodation, and travel tips.",technology:[{name:"Figma",pathImage:"figma"}],department:[],appMenu:[{name:"Travel Details",pathImage:"UIUX/detail"},{name:"Checkout Page",pathImage:"UIUX/checkout"},{name:"Success Page",pathImage:"UIUX/success"}]},{id:5,nameApplication:"Company Profile PT Sriwijaya Agro Industri",pathImage:"PT-SAI",about:"PT Sriwijaya Agro Industri's company profile is a digital platform designed to introduce and promote the company to the general public, particularly in the agro-industry sector. On the home page, visitors can access various important information about the company, from the history of PT Sriwijaya Agro Industri's establishment, company vision and mission, to a portfolio of their flagship products. Interestingly, this application is equipped with a news management feature specifically managed by administrators, allowing all the latest updates about the company, activities, or developments in the agricultural industry to be directly shared with the public and kept up-to-date. With this structured content management system, the information displayed on the website remains fresh and relevant for visitors who want to learn more about PT Sriwijaya Agro Industri.",technology:[{name:"Codeigniter 4",pathImage:"ci"},{name:"MySQL",pathImage:"mysql"},{name:"Bootstrap",pathImage:"bootstrap"}],department:[],appMenu:[{name:"Home Page",pathImage:"SAI/home"},{name:"Admin Login",pathImage:"SAI/login"},{name:"Dashboard",pathImage:"SAI/dashboard"},{name:"News Management",pathImage:"SAI/news"}]},{id:6,nameApplication:"ARSIMO PT SAI",pathImage:"E-ARSIP",about:"PT Sriwijaya Agro Industri's E-Archive Application is a digital document management system specifically designed to efficiently and securely organize, store, and manage various company archives. With comprehensive document management features, this application enables employees to easily upload, categorize, and search for important company documents such as correspondence, contracts, financial reports, and other legal documents.",technology:[{name:"Codeigniter 4",pathImage:"ci"},{name:"MySQL",pathImage:"mysql"},{name:"Bootstrap",pathImage:"bootstrap"}],department:[{name:"General Affair",pathImage:"ga"},{name:"Secretary",pathImage:"sec"},{name:"Finance",pathImage:"fin"},{name:"Marketing",pathImage:"mkt"}],appMenu:[{name:"Admin Login",pathImage:"ARSIMO/login"},{name:"Dashboard",pathImage:"404"},{name:"E Arsip Management",pathImage:"404"}]},{id:7,nameApplication:"Monev Tagihan Keuangan BPJS Kesehatan Kantor Cabang Utama Palembang",pathImage:"MONEV",about:"The BPJS Healthcare Financial Billing Monitoring and Evaluation (Monev) Application for the Palembang Main Branch Office is a final project I developed during my Diploma III education. This system is specifically designed to optimize the financial billing monitoring and evaluation process at BPJS Healthcare Palembang Main Branch Office by featuring payment status tracking, billing data management, real-time reporting, and financial data visualization through an informative dashboard. This application assists BPJS Healthcare officers in monitoring billing flows, identifying late payments, and generating analytical reports that facilitate decision-making.",technology:[{name:"PHP",pathImage:"php"},{name:"Javascript",pathImage:"js"},{name:"MySQL",pathImage:"mysql"},{name:"Materialize CSS",pathImage:"m-css"}],department:[{name:"Finance and Collection",pathImage:"fincol"},{name:"IT",pathImage:"it"}],appMenu:[{name:"Login",pathImage:"BPJS/login"},{name:"Dashboard",pathImage:"BPJS/dashboard"},{name:"Charts Overview",pathImage:"BPJS/graph"},{name:"Report Data",pathImage:"BPJS/data"},{name:"Upload Data",pathImage:"BPJS/upload"},{name:"Account Management",pathImage:"BPJS/akun"}]}]}},mounted(){setTimeout(()=>{this.loading=!1},1e3)},methods:{navigateToDetail(s){const a=this.portfolio.find(c=>c.id===s);a&&(A.project=a,this.$router.push(`/detail-project/${s}`).then(()=>{this.$nextTick(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})})}))}}},T={class:"grid grid-cols-12 w-full mx-auto mt-4 md:px-20 xs:px-4 mb-10"},C={key:0},B={class:"flex xs:block xs:col-span-12 gap-1 items-center mt-3"},D={class:"flex gap-1"},L={key:1,class:"flex flex-col flex-grow"},j={class:"bg-neutral rounded-md h-60 flex justify-center items-center"},_=["src","alt"],J={class:"font-semi-bold my-2"},H={class:"flex xs:block xs:col-span-12 gap-1 items-center"};function R(s,a,c,O,r,I){const f=p("AppHeader"),y=p("PillsButton"),v=p("BaseButton");return t(),n("div",T,[m(f),a[5]||(a[5]=e("h1",{class:"col-span-12 font-extra-bold xl:text-5xl md:text-5xl md:text-left xs:text-4xl xl:mt-4 xs:mt-14 xs:text-center mb-2"}," PORTFOLIO ",-1)),(t(!0),n(l,null,d(r.portfolio,i=>(t(),n("div",{key:i.id,class:"m-2 xl:col-span-4 lg:col-span-6 xs:col-span-12 p-4 bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col hover:bg-gray-100"},[m(k,{name:"fade",mode:"out-in"},{default:g(()=>[r.loading?(t(),n("div",C,[a[1]||(a[1]=e("div",{class:"flex items-center justify-center h-60 bg-gray-300 rounded-md animate-pulse"},[e("svg",{class:"w-10 h-10 text-gray-200 dark:text-gray-600","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 18"},[e("path",{d:"M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"})])],-1)),a[2]||(a[2]=e("div",{class:"h-4 bg-gray-200 rounded-full w-60 my-2"},null,-1)),e("div",B,[e("div",D,[(t(),n(l,null,d(4,o=>e("div",{key:o,class:"h-6 w-20 bg-gray-200 rounded-full max-w-[480px] mb-3"})),64))])]),a[3]||(a[3]=e("div",{class:"h-10 w-full py-2 mt-auto bg-gray-200 rounded-md my-2"},null,-1))])):(t(),n("div",L,[e("div",j,[e("img",{src:`/portfolio/images/project/${i.pathImage}.webp`,alt:`${i.pathImage} image`,class:"h-full w-auto object-contain rounded-md outline-1 outline-primary",onLoad:a[0]||(a[0]=o=>r.loading=!1)},null,40,_)]),e("h4",J,h(i.nameApplication),1),e("div",H,[(t(!0),n(l,null,d(i.technology,o=>(t(),P(y,{key:o.name},{default:g(()=>[u(h(o.name),1)]),_:2},1024))),128))]),m(v,{onClick:o=>I.navigateToDetail(i.id),class:"py-2 mt-auto flex items-center justify-center gap-2"},{default:g(()=>a[4]||(a[4]=[u(" View Project "),e("svg",{class:"w-6 h-6","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 19V6a1 1 0 0 1 1-1h4.032a1 1 0 0 1 .768.36l1.9 2.28a1 1 0 0 0 .768.36H16a1 1 0 0 1 1 1v1M3 19l3-8h15l-3 8H3Z"})],-1)])),_:2},1032,["onClick"])]))]),_:2},1024)]))),128))])}const V=b(x,[["render",R]]);export{V as default};
