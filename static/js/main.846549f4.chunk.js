(this.webpackJsonprumble_viz=this.webpackJsonprumble_viz||[]).push([[0],{10:function(e,t,a){e.exports=a(21)},15:function(e,t,a){},16:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var l=a(0),o=a.n(l),i=a(7),n=a.n(i),r=(a(15),a(16),a(9)),c=a(1),s=a(2),m=a(4),p=a(3),d=a(5);var u=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.selectedApplication?this.props.selectedApplication.applicationName:null;return o.a.createElement("div",{className:"list-group-flush",style:{maxHeight:window.innerHeight,overflowY:"scroll"}},this.props.applications.map((function(a,l){return o.a.createElement("button",{className:"list-group-item list-group-item list-group-item-action text-left ".concat(t===a.applicationName?"active":""),key:l,onClick:function(){e.props.handeApplicationSelect(a)}},a.applicationName)})))}}]),t}(l.Component),f={"web-app":{servlet:[{"servlet-name":"cofaxCDS","servlet-class":"org.cofax.cds.CDSServlet","init-param":{"configGlossary:installationAt":"Philadelphia, PA","configGlossary:adminEmail":"ksm@pobox.com","configGlossary:poweredBy":"Cofax","configGlossary:poweredByIcon":"/images/cofax.gif","configGlossary:staticPath":"/content/static",templateProcessorClass:"org.cofax.WysiwygTemplate",templateLoaderClass:"org.cofax.FilesTemplateLoader",templatePath:"templates",templateOverridePath:"",defaultListTemplate:"listTemplate.htm",defaultFileTemplate:"articleTemplate.htm",useJSP:!1,jspListTemplate:"listTemplate.jsp",jspFileTemplate:"articleTemplate.jsp",cachePackageTagsTrack:200,cachePackageTagsStore:200,cachePackageTagsRefresh:60,cacheTemplatesTrack:100,cacheTemplatesStore:50,cacheTemplatesRefresh:15,cachePagesTrack:200,cachePagesStore:100,cachePagesRefresh:10,cachePagesDirtyRead:10,searchEngineListTemplate:"forSearchEnginesList.htm",searchEngineFileTemplate:"forSearchEngines.htm",searchEngineRobotsDb:"WEB-INF/robots.db",useDataStore:!0,dataStoreClass:"org.cofax.SqlDataStore",redirectionClass:"org.cofax.SqlRedirection",dataStoreName:"cofax",dataStoreDriver:"com.microsoft.jdbc.sqlserver.SQLServerDriver",dataStoreUrl:"jdbc:microsoft:sqlserver://LOCALHOST:1433;DatabaseName=goon",dataStoreUser:"sa",dataStorePassword:"dataStoreTestQuery",dataStoreTestQuery:"SET NOCOUNT ON;select test='test';",dataStoreLogFile:"/usr/local/tomcat/logs/datastore.log",dataStoreInitConns:10,dataStoreMaxConns:100,dataStoreConnUsageLimit:100,dataStoreLogLevel:"debug",maxUrlLength:500}},{"servlet-name":"cofaxEmail","servlet-class":"org.cofax.cds.EmailServlet","init-param":{mailHost:"mail1",mailHostOverride:"mail2"}},{"servlet-name":"cofaxAdmin","servlet-class":"org.cofax.cds.AdminServlet"},{"servlet-name":"fileServlet","servlet-class":"org.cofax.cds.FileServlet"},{"servlet-name":"cofaxTools","servlet-class":"org.cofax.cms.CofaxToolsServlet","init-param":{templatePath:"toolstemplates/",log:1,logLocation:"/usr/local/tomcat/logs/CofaxTools.log",logMaxSize:"",dataLog:1,dataLogLocation:"/usr/local/tomcat/logs/dataLog.log",dataLogMaxSize:"",removePageCache:"/content/admin/remove?cache=pages&id=",removeTemplateCache:"/content/admin/remove?cache=templates&id=",fileTransferFolder:"/usr/local/tomcat/webapps/content/fileTransferFolder",lookInContext:1,adminGroupID:4,betaServer:!0}}],"servlet-mapping":{cofaxCDS:"/",cofaxEmail:"/cofaxutil/aemail/*",cofaxAdmin:"/admin/*",fileServlet:"/static/*",cofaxTools:"/tools/*"},taglib:{"taglib-uri":"cofax.tld","taglib-location":"/WEB-INF/tlds/cofax.tld"}}};var h=a(8),g=a.n(h),v=(a(20),o.a.forwardRef((function(e,t){return o.a.createElement("form",{onSubmit:function(t){e.onSubmit(),t.preventDefault()}},o.a.createElement("div",{className:"input-group input-group-lg mb-3"},o.a.createElement("input",{type:"text",ref:t,className:"form-control",placeholder:"Enter client Id"}),o.a.createElement("div",{className:"input-group-append"},o.a.createElement("button",{className:"btn btn-outline-secondary",type:"submit"},"Search"))))})));function S(e){return o.a.createElement("div",{style:{textAlign:"left",overflowY:"scroll",maxHeight:window.innerHeight}},o.a.createElement(g.a,{id:"json-pretty",data:e.data}))}function b(e){return o.a.createElement("div",{className:"alert alert-danger",role:"alert"},"An error occurred")}var E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).ref=void 0,a.state={clientId:null,result:null,isLoadingResult:!1},a.ref=o.a.createRef(),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleFormSubmit",value:function(){var e=this;this.setState({isLoadingResult:!0}),(this.ref.current.value,this.props.selectedApplication.applicationName,new Promise((function(e,t){setTimeout((function(){e(f)}),2e3)}))).then((function(t){e.setState({result:t,isLoadingResult:!1,error:null})})).catch((function(t){e.setState({result:null,isLoadingResult:!1,error:t})}))}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,this.state.result?o.a.createElement(S,{data:this.state.result}):this.state.isLoadingResult?o.a.createElement("div",{className:"alert alert-primary",role:"alert"},"Fetching data..."):o.a.createElement(v,{ref:this.ref,onSubmit:function(){e.handleFormSubmit()}}),this.state.error?o.a.createElement(b,null):null)}}]),t}(l.Component),x=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={applications:[],applicationData:null,isLoadingApplications:!0,selectedApplication:null},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;new Promise((function(e,t){setTimeout((function(){for(var t=[],a=0;a<20;a++)t.push({applicationName:"Application ".concat(a+1),otherData:"Other-data"});e(t)}),1e3)})).then((function(t){t=t.slice(),e.setState({isLoadingApplications:!1,applications:t})})).catch((function(){}))}},{key:"handeApplicationSelect",value:function(e){this.setState({selectedApplication:Object(r.a)({},e)})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"row"},this.state.isLoadingApplications?o.a.createElement("div",{className:"col-md-12"},o.a.createElement("div",{className:"alert alert-primary",role:"alert"},"Fetching applications...")):o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"col-md-6"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-header"}," Applications "),o.a.createElement("div",{className:"card-body"},o.a.createElement(u,{applications:this.state.applications,selectedApplication:this.state.selectedApplication,handeApplicationSelect:function(t){e.handeApplicationSelect(t)}})))),o.a.createElement("div",{className:"col-md-6"},this.state.selectedApplication?o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-header"},this.state.selectedApplication.applicationName),o.a.createElement("div",{className:"card-body"},o.a.createElement(E,{selectedApplication:this.state.selectedApplication}))):null))))}}]),t}(l.Component),T=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(o.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.846549f4.chunk.js.map