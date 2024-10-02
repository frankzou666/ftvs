var spa=(function($){
    //declare variables
    var configMap= { 
          extended_height:434,
          extended_title:'Click to retract',
          retracted_height:16,
          retracted_title:'Click to extend',
          template:'<div class="spa-slider"><\/div>'

    };
    var $chatSlider;
    var toggerSlider,onClickSlider , initModule

    // clicker handler
    onClickSlider = function(event){
        toggerSlider();
        return false

    }
    toggerSlider= function(){
         //get the current height
         var slider_height = $chatSlider.height();
         if (slider_height===configMap.retracted_height) {
            $chatSlider.animate({height:configMap.extended_height}).attr('title',configMap.extended_title)
            return true;

         } else if (slider_height===configMap.extended_height) {
            $chatSlider.animate({height:configMap.retracted_height}).attr('title',configMap.retracted_title)
            return true;

         }  else {
            return false;
         }

         return false;

    };

    initModule = function($container){
        $container.html= configMap.template
        $chatSlider = $container.find('.spa-slider')
        $chatSlider.attr('title',configMap.retracted_title).click(onClickSlider)
        

    }

    return {initModule:initModule}
 
 
}())

// inital applicaiton 
$(document).ready(

    function() {
       spa.initModule($('#spa'))
    }
)