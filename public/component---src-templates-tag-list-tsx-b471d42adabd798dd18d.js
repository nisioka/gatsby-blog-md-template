"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[225],{1877:function(e,t,n){n.d(t,{N:function(){return c},y:function(){return o}});var a,l,r=n(5276),i=n(4715);const o=i.Ay.header(a||(a=(0,r.A)(["\n  text-align: center;\n\n  h1 {\n    &:after {\n      margin: 0 auto;\n      content: '';\n      display: block;\n      width: 98%;\n      height: 3px;\n      background: var(--orange);\n    }\n  }\n"]))),c=i.Ay.ol(l||(l=(0,r.A)(["\n  column-count: 1;\n  list-style: none;\n  padding: 0;\n  margin: 0 -15px;\n  display: flex;\n  flex-wrap: wrap;\n  width: var(--maxWidth-full);\n\n  li {\n    padding: 5px;\n    margin: var(--spacing-1) ;\n    box-sizing: border-box;\n    border: 1px solid var(--black);\n    border-radius: 5px;\n\n    a {\n      color: var(--black);\n      text-decoration: none;\n    }\n\n    h2 {\n      font-size: var(--fontSize-2);\n    }\n  }\n  .thumbnail {\n    float: left;\n  }\n\n  @media screen and (min-width: 512px) {\n    column-count: 2;\n\n    li {\n      padding: 15px;\n      width: 48%;\n\n      h2 {\n        font-size: var(--fontSize-3);\n      }\n\n      a {\n        &:hover h2 {\n          text-decoration: underline;\n        }\n      }\n    }\n  }\n  @media screen and (min-width: 768px) {\n    column-count: 3;\n\n    li {\n      width: 32%;\n    }\n  }\n"])))},949:function(e,t,n){n.r(t);var a=n(6540),l=n(4794),r=n(500),i=n(1911),o=n(1042),c=n(2532),m=n(1877);t.default=e=>{let{pageContext:t,data:n,location:d}=e;const u=t.tag,s=(0,r.A)(n.allMdx,n.allWpPost,n.allFile),g="【"+u+"】タグ 一覧";return 0===s.length?a.createElement(i.A,{location:d},a.createElement(o.A,{title:g}),a.createElement("p",null,"そのタグの記事はありません。")):a.createElement(i.A,{location:d},a.createElement(o.A,{title:g}),a.createElement(m.y,null,a.createElement("h1",null,g),a.createElement("p",null,s.length," 記事あります")),a.createElement(m.N,null,s.map((e=>a.createElement("li",{key:e.slug},a.createElement("article",{className:"post-list-item",itemType:"http://schema.org/Article"},a.createElement(l.Link,{to:e.slug},a.createElement("h2",null,a.createElement("span",null,e.title)),a.createElement("section",null,a.createElement("div",null,a.createElement("small",null,a.createElement("time",null,e.date))),a.createElement("div",{className:"thumbnail"},void 0===e.gatsbyImage||a.createElement(c.G,{alt:e.altText,image:e.gatsbyImage,className:"thumbnail"})),a.createElement("p",{dangerouslySetInnerHTML:{__html:e.excerpt}})))))))))}},500:function(e,t,n){var a=n(2532);t.A=function(e,t,n){let l={};n&&n.edges.forEach((e=>{l[e.node.relativePath]=e.node.childImageSharp.gatsbyImageData}));const r=e.nodes,i=t.nodes;return r.map((e=>({title:e.frontmatter.title,excerpt:e.excerpt,slug:e.fields.slug,date:e.frontmatter.date,description:e.frontmatter.description,altText:e.frontmatter.featuredImagePath,gatsbyImage:(0,a.c)(l[e.frontmatter.featuredImagePath||"featured/defaultThumbnail.png"])}))).concat(i.map((e=>{var t,n;return{title:e.title,excerpt:e.excerpt,slug:"/"+e.slug,date:e.date,altText:(null===(t=e.featuredImage)||void 0===t?void 0:t.node.altText)||"",gatsbyImage:(null===(n=e.featuredImage)||void 0===n?void 0:n.node.gatsbyImage)||(0,a.c)(l["featured/defaultThumbnail.png"])}}))).sort(((e,t)=>new Date(t.date).getTime()-new Date(e.date).getTime()))}}}]);
//# sourceMappingURL=component---src-templates-tag-list-tsx-b471d42adabd798dd18d.js.map