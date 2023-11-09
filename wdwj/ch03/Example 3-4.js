$(document).on(
    'DOMContentLoaded',
    function()
    {
        var eventHandlerActive = false;
        
        function applyEventHandler()
        {
            if (eventHandlerActive)
            {
                return;
            }
            
            $('div#finderFiles').on(
                'click.finder',
                'div.finderDirectory, div.finderFile',
                function(event)
                {
                    $('div.finderIconSelected')
                        .removeClass('finderIconSelected');
        
                    $('span.finderDirectoryNameSelected')
                        .removeClass('finderDirectoryNameSelected');
                    
                    $('span.finderFileNameSelected')
                        .removeClass('finderFileNameSelected');
        
                    $(this).find('div.finderIcon')
                        .addClass('finderIconSelected');
        
                    $(this).find('div.finderDirectoryName span')
                        .addClass('finderDirectoryNameSelected');
    
                    $(this).find('div.finderFileName span')
                        .addClass('finderFileNameSelected');
                }
            );
            
            eventHandlerActive = true;
        }
        
        function removeEventHandler()
        {
            $('div#finderFiles').off('click.finder');
            
            eventHandlerActive = false;
        }
        
        $('div#finderFiles div.finderNode:first')
            .trigger('click');
        
        //开始在原素上绑定事件
        applyEventHandler();
        
        $('button#finderApplyEventHandler').click(
            function()
            {
                applyEventHandler();
            }
        );
        
        $('button#finderRemoveEventHandler').click(
            function()
            {
                removeEventHandler();
            }
        );
    }
);
