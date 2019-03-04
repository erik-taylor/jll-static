define(["handlebars"], function(Handlebars) { return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return " - "
    + container.escapeExpression(((helper = (helper = helpers.page_title || (depth0 != null ? depth0.page_title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"page_title","hash":{},"data":data}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.meta_data : depth0)) != null ? stack1.meta_description : stack1), depth0));
},"5":function(container,depth0,helpers,partials,data) {
    return "Hello there! I’m Leah, a 20-something living in San Diego! Welcome to my Blog!";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "www.jetlagleah.com"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.meta_data : depth0)) != null ? stack1.meta_image : stack1), depth0));
},"9":function(container,depth0,helpers,partials,data) {
    return "www.jetlagleah.com/remote/direct_uploads/jetlagleah_donuts.jpg";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.meta_data : depth0)) != null ? stack1.meta_url : stack1), depth0));
},"13":function(container,depth0,helpers,partials,data) {
    return "www.jetlagleah.com/";
},"15":function(container,depth0,helpers,partials,data) {
    return "background-image: url("
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.cover : depth0), depth0))
    + ");\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "background-image: url("
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.background_image : stack1), depth0))
    + ");\n";
},"19":function(container,depth0,helpers,partials,data) {
    return "background-repeat: repeat;\nbackground-position: center center;\n";
},"21":function(container,depth0,helpers,partials,data) {
    return "background-size: 100% auto;\nbackground-size: cover;\n";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "color: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.accent_color : stack1), depth0))
    + ";\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=helpers.helperMissing, alias5="function";

  return "<meta charset=\"utf-8\">\n<title>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.site_name : stack1), depth0))
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.page_title : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</title>\n<meta name=\"description\" content=\""
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.meta_data : depth0)) != null ? stack1.meta_description : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no\">\n<meta property=\"og:type\" content=\"Blog\" />\n<meta property=\"og:title\" content=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.site_name : stack1), depth0))
    + " - "
    + alias2(((helper = (helper = helpers.page_title || (depth0 != null ? depth0.page_title : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"page_title","hash":{},"data":data}) : helper)))
    + "\" />\n<meta property=\"og:description\" content=\""
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.meta_data : depth0)) != null ? stack1.meta_description : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "\" />\n<meta property=\"og:image\" content=\""
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.meta_data : depth0)) != null ? stack1.meta_image : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + "\" />\n<meta property=\"og:url\" content=\""
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.meta_data : depth0)) != null ? stack1.meta_url : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(13, data, 0),"data":data})) != null ? stack1 : "")
    + "\" />\n<meta property=\"og:site_name\" content=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.site_name : stack1), depth0))
    + " - "
    + alias2(((helper = (helper = helpers.page_title || (depth0 != null ? depth0.page_title : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"page_title","hash":{},"data":data}) : helper)))
    + "\" />\n<meta name=\"twitter:title\" content=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.site_name : stack1), depth0))
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.page_title : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n<meta name=\"twitter:description\" content=\""
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.meta_data : depth0)) != null ? stack1.meta_description : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\n<meta name=\"twitter:image\" content=\""
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.meta_data : depth0)) != null ? stack1.meta_image : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\n<meta name=\"twitter:site\" content=\"@JetlagLeah\">\n<meta name=\"twitter:creator\" content=\"@JetlagLeah\">\n\n<link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"/apple-touch-icon.png\">\n<link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"/favicon-32x32.png\">\n<link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"/favicon-16x16.png\">\n<link rel=\"manifest\" href=\"/site.webmanifest\">\n<link rel=\"mask-icon\" href=\"/safari-pinned-tab.svg\" color=\"#5bbad5\">\n<meta name=\"msapplication-TileColor\" content=\"#603cba\">\n<meta name=\"theme-color\" content=\"#ffffff\">\n\n<style type=\"text/css\">\nbody {\n"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.cover : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(17, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.tile_background : stack1),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.program(21, data, 0),"data":data})) != null ? stack1 : "")
    + "font-family: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.body_text_font_family : stack1), depth0))
    + ";\n}\nh1, h2, h3, h4, h5, h6, span.siteName {\nfont-family: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.headers_font_family : stack1), depth0))
    + ";\n"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.accented_headers : stack1),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "}\na {\ncolor: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.accent_color : stack1), depth0))
    + ";\n}\n.aBackgroundTint {\nbackground: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.background_tint_color : stack1), depth0))
    + ";\nopacity: 0."
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.background_tint : stack1), depth0))
    + "\n}\n.inner {\nwidth: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.blog_width : stack1), depth0))
    + ";\n}\n</style>\n<link rel=\"stylesheet\" href=\"/assets/css/main.css\">\n<link rel=\"stylesheet\" href=\"/assets/css/bootstrap-grid.min.css\">\n<script defer src=\"https://use.fontawesome.com/releases/v5.7.1/js/all.js\" integrity=\"sha384-eVEQC9zshBn0rFj4+TU78eNA19HMNigMviK/PU/FFjLXqa/GKPgX58rvt5Z8PLs7\" crossorigin=\"anonymous\"></script>\n<script src=\"/assets/js/instafeed.min.js\"></script>\n\n<!-- Global site tag (gtag.js) - Google Analytics -->\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-135543302-1\"></script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'UA-135543302-1');\n</script>\n\n";
},"useData":true}); });