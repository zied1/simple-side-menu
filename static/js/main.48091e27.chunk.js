(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n(26)},21:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(7),s=n.n(o),c=n(8),l=n(9),r=n(13),m=n(10),p=n(14),u=n(28),d=n(29),f=n(5),E=n(11),g=n.n(E),h=(n(21),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(r.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={isOpen:!0,isExpandable:!0},n.toggleMenuSelection=function(e){n.setState({isExpandable:e})},n.toggleMenu=function(){n.setState(function(e){return{isOpen:!e.isOpen}})},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isExpandable,n=e.isOpen;return i.a.createElement(u.a,null,i.a.createElement(f.Container,null,i.a.createElement(f.SideMenu,{isOpen:n,header:i.a.createElement(f.Header,{logo:"https://cdn-images-1.medium.com/max/1200/1*YsPpBr_PgtyTR6CFDmKU9g.png",title:"Side Menu"}),items:M,isExpandable:t}),i.a.createElement("div",{className:"main"},i.a.createElement("nav",{className:"nav-bar"},i.a.createElement("div",{className:"nav-bar__left"},!t&&i.a.createElement("div",{className:"btn-menu",onClick:this.toggleMenu},i.a.createElement("i",{className:"material-icons btn-menu__icon"},"menu")),i.a.createElement("h1",{className:"title"},"Side Menu")),i.a.createElement("label",{className:"nav-bar__right",htmlFor:"normal-switch"},i.a.createElement("span",{className:"label"},"IS EXPANDABLE"),i.a.createElement(g.a,{onChange:this.toggleMenuSelection,checked:t,id:"normal-switch"}))),i.a.createElement(d.a,{exact:!0,path:"/simple-side-menu/",component:v}),i.a.createElement(d.a,{path:"/simple-side-menu/group/new",component:w}),i.a.createElement(d.a,{path:"/simple-side-menu/group/person/new",component:N}),i.a.createElement(d.a,{path:"/simple-side-menu/notifications/active",component:O}),i.a.createElement(d.a,{path:"/simple-side-menu/notifications/off",component:_}),i.a.createElement(d.a,{path:"/simple-side-menu/settings/profile",component:S}),i.a.createElement(d.a,{path:"/simple-side-menu/settings/apps",component:C}),i.a.createElement(d.a,{path:"/simple-side-menu/sign-out",component:x}))))}}]),t}(a.PureComponent)),b=function(e){var t=e.path;return i.a.createElement("h4",{className:"path"},t)},v=function(){return i.a.createElement(b,{path:"/dashboard"})},w=function(){return i.a.createElement(b,{path:"/group/new"})},N=function(){return i.a.createElement(b,{path:"/group/person/new"})},O=function(){return i.a.createElement(b,{path:"/notifications/active"})},_=function(){return i.a.createElement(b,{path:"/notifications/off"})},S=function(){return i.a.createElement(b,{path:"/settings/profile"})},C=function(){return i.a.createElement(b,{path:"/settings/apps"})},x=function(){return i.a.createElement(b,{path:"/sign-out"})},M=[{title:"Dashboard",iconClassName:"fa fa-dashboard",icon:"",to:"/simple-side-menu"},{title:"Group",isCollapsible:!0,icon:"group",subItems:[{title:"New group",icon:"group_add",to:"/simple-side-menu/group/new"},{title:"New person",icon:"person_add",to:"/simple-side-menu/group/person/new"}]},{title:"Notifications",icon:"notifications",subItems:[{title:"Active",icon:"notifications_active",to:"/simple-side-menu/notifications/active"},{title:"Off",icon:"notifications_off",to:"/simple-side-menu/notifications/off"}]},{title:"Settings",isCollapsible:!0,iconClassName:"ion-gear-b",subItems:[{title:"Profile",icon:"person",to:"/simple-side-menu/settings/profile"},{title:"Applications",icon:i.a.createElement("i",{className:"material-icons"},"apps"),to:"/simple-side-menu/settings/apps"}]},{title:"Sign out",icon:i.a.createElement("i",{className:"ion-log-out"}),to:"/simple-side-menu/sign-out"}];s.a.render(i.a.createElement(h,null),document.getElementById("root"))}},[[15,2,1]]]);
//# sourceMappingURL=main.48091e27.chunk.js.map