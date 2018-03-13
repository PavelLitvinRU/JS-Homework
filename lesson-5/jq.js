$(function() {
    const cartURL = 'http://localhost:3000/cart/';
    const domain = 'http://localhost:3000/';

    function dataSamp(section, identifier, subsection, textLink) {
        $.ajax({
            url: domain + section,
            dataType: 'json',
            success: function(section) {
                var $ul = $(identifier);
                section.forEach(function(subsection) {
                    var $div = $('<div/>').attr({ 'class': 'list' });
                    $div.append($('<p/>').text(subsection.name));
                    $div.append($('<img />').attr({ 'src': subsection.img }));
                    $div.append($('<a/>').text(textLink).attr({
                        href: '#',
                        'data-id': subsection.id,
                        'data-price': subsection.price,
                        'data-name': subsection.name,
                        'data-img': subsection.img
                    }));
                    $ul.append($div);
                });
                $(identifier).append($ul);
            }
        });
    }
    dataSamp('goods', '#goods', 'good', 'Купить');
    $('#goods').on('click', 'div>a', function(event) {
        $.ajax({
            url: cartURL,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                id: $(this).attr('data-id'),
                price: $(this).attr('data-price'),
                name: $(this).attr('data-name'),
            }),
            success: function() {
                $('#cart div').remove();
                dataSamp('cart', '#cart', 'data', 'Удалить');
            }
        });
        event.preventDefault();
    });

    $('#cart').on('click', 'div>a', function(event) {
        $.ajax({
            url: cartURL + $(this).attr('data-id'),
            type: 'DELETE',
            context: this,
            contentType: 'application/json',
            data: JSON.stringify({
                id: $(this).attr('data-id')
            }),
            success: function() {
                var del = $(this).parent();
                del.remove();
            }
        });
        event.preventDefault();
    })
})