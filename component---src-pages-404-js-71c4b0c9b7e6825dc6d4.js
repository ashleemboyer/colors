(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(148);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},145:function(e,t,a){var n;e.exports=(n=a(147))&&n.default||n},146:function(e){e.exports={data:{site:{siteMetadata:{title:"Material Palette a11y Helper"}}}}},147:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),u=a(55),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(u.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},148:function(e,t,a){"use strict";var n=a(146),r=a(0),i=a.n(r),l=a(4),u=a.n(l),o=a(33),s=a.n(o),c=(a(145),i.a.createContext({})),d=function(e){return i.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func};var p=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{marginBottom:"1.45rem",textAlign:"center"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.a,{to:"/",style:{color:"black",textDecoration:"none"}},t)),i.a.createElement("p",null,"Should I use black or white text on a colorful background?")))};p.propTypes={siteTitle:u.a.string},p.defaultProps={siteTitle:""};var m=p;a(150);a.d(t,"b",function(){return h});var f=function(e){var t=e.children;return i.a.createElement(d,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0,textAlign:"center"}},i.a.createElement("main",null,t),i.a.createElement("footer",{style:{marginTop:"100px"}},"© ",(new Date).getFullYear(),", Built by"," ",i.a.createElement("a",{href:"https://twitter.com/ashleemboyer"},"Ashlee")," ","with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})};function h(e){var t=e.substring(1,3),a=e.substring(3,5),n=e.substring(5,7),r=parseInt(t,16)/255;r<=.03928?r/=12.92:r=Math.pow((r+.055)/1.055,2.4);var i=parseInt(a,16)/255;i<=.03928?i/=12.92:i=Math.pow((i+.055)/1.055,2.4);var l=parseInt(n,16)/255;return l<=.03928?l/=12.92:l=Math.pow((l+.055)/1.055,2.4),.2126*r+.7152*i+.0722*l>.179?"#000000":"#ffffff"}f.propTypes={children:u.a.node.isRequired};t.a=f}}]);
//# sourceMappingURL=component---src-pages-404-js-71c4b0c9b7e6825dc6d4.js.map