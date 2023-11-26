$(document).ready(
    function()
    {        
        $('button#documentAppend').click(
            function(event)
            {
                event.preventDefault();
                
                if (!$('tr#johnLennonDoubleFantasy').length)
                {
                    $('table tbody').append(
                        "<tr id='johnLennonDoubleFantasy'>\n" + 
                            "<td>Double Fantasy</td>\n" +
                            "<td>1980</td>\n" + 
                        "</tr>\n"
                    );
                }
            }
        );

        $('button#documentPrepend').click(
            function(event)
            {
                event.preventDefault();

                if (!$('tr#johnLennonPlasticOnoBand').length)
                {
                    $('table tbody').prepend(
                        "<tr id='johnLennonPlasticOnoBand'>\n" + 
                            "<td>John Lennon/Plastic Ono Band</td>\n" +
                            "<td>1970</td>\n" +
                        "</tr>\n"
                    );
                }
            }
        );

        //移除最后一个table元素
        $('button#documentRemove').click(
            function(event){
                event.preventDefault();
                $('table tbody tr').last().empty();
                $('table tbody tr').last().remove();

            }

        );

        $('button#documentClone').click(
            function(event){
                event.preventDefault();
                console.log('clone..。。');

                //得到最后个元素并进行clone,然后加到最表格的最后一行
                var $tr=$('table tbody tr').last();
                $tr.attr('contenteditable',true);
                $('table tbody').append('<tr>'+$tr.html()+'</tr>');

            }

        );
    }
);
