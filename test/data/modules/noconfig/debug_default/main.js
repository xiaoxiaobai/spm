define("#public/1.0.0/contact/model/m",["../../core/js/config","../../core/js/utils"],function(e,t,n){var r='<div>hello</div> <input name="nihai" value=\'{"name": "a"}\'/>',i=e("../../core/js/config"),s=e("../../core/js/utils");t.say=function(){s.log("tpl----->"+r),s.log("config--->",i)}}),define("#public/1.0.0/core/js/config",[],{name:"config",version:"1.0"}),define("#public/1.0.0/core/js/utils",[],function(e,t){t.log=function(e){console.info("[log] "+e)}}),define("#public/1.0.0/main",["./contact/model/m","./core/js/config","./core/js/utils","#jquery/1.7.2/jquery","#base/1.0.0/base","#class/1.0.0/class","#events/1.0.0/events"],function(e,t,n){var r=e("./contact/model/m"),i=e("#jquery/1.7.2/jquery"),s=e("#base/1.0.0/base");t.say=function(e){r.say(),console.info(i(e)),console.info(s)}});