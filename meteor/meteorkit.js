/* Meteorkit: UIKit for Meteor
   meteorkit.js - Dynamic Loading Functions
   Released under the GPLv3 License
*/

  /** METEORKIT **/
    UIkit.base_url = Meteor.absoluteUrl()+"packages/derektbrown_meteorkit/src/";
  //UIkit.base_url = "https://cdnjs.cloudflare.com/ajax/libs/uikit/2.21.0/"

    UIkit.templates = {};
    UIkit.renderers = {};
    UIkit.helpers = {};

        UIkit.registerHelper = function(name, helper){
          UIkit.helpers[name] = helper;
        }

        UIkit.registerRenderer = function(name, renderer){
          UIkit.renderers[name] = renderer;
        }

    /** Apply Helpers Function **/
        UIkit.registerTemplate = function(self){
          /** Add Element to Templates **/
            UIkit.templates[(self.viewName.replace("Template.", ""))] = self;

          /** Pass Attributes to DOM */
            self.onRendered(function(){
              var self = this;
              $.each(self.data, function(key, value){
                  if(key === "class"){
                    $.each(value.split(" "), function(d, newClass){
                        $(self.firstNode).addClass(newClass);
                    });
                  }
                  else{
                    $(self.firstNode).attr(key, value);
                  }
              });
            });

          /** Add Helpers and Renderers **/
            self.helpers(UIkit.helpers);

            self.onRendered(function(){
              var DOMTemplate = this;
              _.each(UIkit.renderers, function(value){
                  value(DOMTemplate);
              });
            });
        }

    /** Iterate and Apply Helpers and Renderers to UIKit Templates **/
         Meteor.startup(function(){
           for(var property in Template){
             var template = Template[property];
             if(Blaze.isTemplate(template)){
               if(template.viewName.indexOf("Template.uk_") > -1)
                UIkit.registerTemplate(template);
             }
           }
         });


  /** UIKIT TEMPLATES **/

  /** UIKIT HELPERS **/

  /** UIKIT RENDERER **/
      UIkit.registerRenderer("uk_tooltip", function(DOMTemplate){
        if(DOMTemplate.data && typeof(DOMTemplate.data['data-uk-tooltip']) !== 'undefined'){
            Meteor.Loader.loadCss(UIkit.base_url+'css/components/tooltip.min.css');
            Meteor.Loader.loadJs(UIkit.base_url+'js/components/tooltip.min.js', function(){
            });
        }
      });
