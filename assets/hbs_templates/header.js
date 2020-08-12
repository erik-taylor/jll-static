define(["handlebars"], function(Handlebars) { return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    <li><a href=\"/archive/\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.archive_link_text : stack1), depth0))
    + "</a></li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "                    <li><a href=\"/pages/"
    + alias2(alias1((depth0 != null ? depth0.page_slug : depth0), depth0))
    + "/\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.navigation_title : stack1), depth0))
    + "</a></li>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                <li><a href=\"/archive/\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.archive_link_text : stack1), depth0))
    + "</a></li>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "                <li><a href=\"/pages/"
    + alias2(alias1((depth0 != null ? depth0.page_slug : depth0), depth0))
    + "/\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.navigation_title : stack1), depth0))
    + "</a></li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=helpers.blockHelperMissing, buffer = 
  "<header data-lax-opacity=\"80 1, 140 0.5, 200 0\" class=\"header-wrapper lax\">\n    <div class=\"inner logoInner\">\n        <a href=\"/\">\n            <span class=\"siteName\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.site_name : stack1), depth0))
    + "</span>\n        </a>\n    </div>\n    <div class=\"nav-wrapper\">\n        <div class=\"inner\">\n            <nav>            \n                <ul class=\"nav-list\">                \n                    <li class=\"ddItem\">\n                        <a href=\"/adventures/\">Adventures</a>\n                        <ul class=\"ddList\">\n                            <li><a href=\"/tips/\">-Tips</a></li><br/>\n                            <li><a href=\"/trips/\">-Trips</a></li>\n                        </ul>\n                    </li>\n                    <li><a href=\"/sustainability/\">Sustainability</a></li>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.show_archive_link : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    <li><a href=\"/about/\">About</a></li>\n                    <li><a href=\"/contact/\">Contact</a></li>\n";
  stack1 = ((helper = (helper = helpers.navlinks || (depth0 != null ? depth0.navlinks : depth0)) != null ? helper : alias2),(options={"name":"navlinks","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.navlinks) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "                </ul>\n            </nav>\n        </div>\n    </div>\n\n    <nav id=\"mobile-menu\">\n        <div id=\"menuToggle\">\n            <input type=\"checkbox\" />\n\n            <span></span>\n            <span></span>\n            <span></span>\n\n            \n            <ul id=\"menu\">\n                <li>\n                    <a href=\"/adventures/\">Adventures</a>\n                    <ul>\n                        <li><a href=\"/tips/\">-Tips</a></li>\n                        <li><a href=\"/trips/\">-Trips</a></li>\n                    </ul>\n                </li>\n                <li><a href=\"/sustainability/\">Sustainability</a></li>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.show_archive_link : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                <li><a href=\"/about/\">About</a></li>\n                <li><a href=\"/contact/\">Contact</a></li>\n";
  stack1 = ((helper = (helper = helpers.navlinks || (depth0 != null ? depth0.navlinks : depth0)) != null ? helper : alias2),(options={"name":"navlinks","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.navlinks) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </ul>\n        </div>\n    </nav>\n</header>";
},"useData":true}); });