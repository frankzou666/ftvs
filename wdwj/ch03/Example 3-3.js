$(document).on(
    'DOMContentLoaded',
    function()
    {
        $('div#finderFiles').on(
            'click',
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

        $('div#finderFiles div.finderNode:first')
            .trigger('click');
        
        var addedAdditionalFiles = false;

        $('body').dblclick(
            function()
            {
                if (addedAdditionalFiles)
                {
                    return;
                }

                $('div#finderAdditionalFiles > div.finderFile').each(
                     function()
                     {
                         $('div#finderFiles').append(
                             $(this).clone()
                         );
                     }
                );
                
                addedAdditionalFiles = true;
            }
        );
    }
);
