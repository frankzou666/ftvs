$(document).on(
    'DOMContentLoaded',
    function()
    {
        $('div#finderFiles')
            .on(
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
            )
            .on(
                'appendFile.finder',
                'div.finderDirectory, div.finderFile',
                function(event, file)
                {
                    console.log(file.path);
                    console.log($(this));
                }
            );

        $('div#finderFiles div.finderNode:first')
            .trigger('click.finder');
        
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
                        var file = $(this).clone();
                         
                        $('div#finderFiles').append(file);

                        file.trigger(
                            'appendFile.finder', {
                                path : file.data('path')
                            }
                        );
                    }
                );
                
                addedAdditionalFiles = true;
            }
        );
    }
);
