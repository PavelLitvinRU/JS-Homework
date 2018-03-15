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
$('.map').draggable({
    scroll: true,
    scrollSensitivity: 10,
    revert: true,
    revertDuration: 1000,
    axis: "x"
})
///////////////////////////////////////////////////////////
////////////// Календарь /////////////////////////////////
/////////////////////////////////////////////////////////
$("#data").datepicker({
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель',
        'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь',
        'Октябрь', 'Ноябрь', 'Декабрь'
    ],
    dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    firstDay: 1,
    dateFormat: "DD, d MM, yy"
});
///////////////////////////////////////////////////////////
////////////// По умолчанию диалоговое окно скрыто ///////
/////////////////////////////////////////////////////////
$('#dialog').dialog({
    autoOpen: false
});
///////////////////////////////////////////////////////////
////////////// Кнопка запуска проверки ///////////////////
/////////////////////////////////////////////////////////
function btnClick() {
    var validation = {
        name: /^[а-яёА-ЯЁ]{2,}$/,
        phone: /^[+][7][(]\d{3}[)]\d{3}[-]\d{4}$/,
        email: /^[a-zA-Z]{2,}\S?[a-zA-Z]{2,}[@][a-z]{2,}[.][a-zA-Z]{2,}$/
    };
    valid(validation.name, document.form.name.value, '#name');
    valid(validation.phone, document.form.phone.value, '#phone');
    valid(validation.email, document.form.email.value, '#email');
}
///////////////////////////////////////////////////////////
////////////// Функция валидации инпутов /////////////////
/////////////////////////////////////////////////////////
function valid(items, item, identifier) {
    if (items.test(item)) {
        $(identifier).css({ borderColor: 'blue' });
        $('#dialog').text('Спасибо, данные получены').dialog("open");
    } else {
        $(identifier).effect("bounce", "slow").css({ borderColor: 'red' });
        if (item === "") {
            $('#dialog').text('Пустое значение').dialog("open");
        } else {
            $('#dialog').text('Не верный формат').dialog("open");
        }
    }
}
window.onload = function() {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/?limit=151', true);

            xhr.timeout = 15000;
            xhr.ontimeout = function() {
                console.log('Не загрузился');
            }

            xhr.send();

            xhr.onreadystatechange = function() {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        var list = JSON.parse(xhr.responseText).results;
                        var section = document.createElement('section');
                        section.className = 'flex';
                        for (var i = 0; i < list.length; i++) {
                            var div = document.createElement('div');
                            div.className = 'block';
                            div.setAttribute('onclick', "openWin();");
                            var img = document.createElement('img');
                            var h4 = document.createElement('h4');
                            var j = i + 1;
                            img.setAttribute('src', 'sprites/' + j + '.png');
                            h4.textContent = list[i].name;
                            div.appendChild(img);
                            div.appendChild(h4);
                            section.appendChild(div);
                        }
                        document.getElementById('result').appendChild(section);
                    }
                }
            }

        }
/////Первое и второе задание/////
window.onload = function () {
    var str = "'Hello.' 'Hi, Mark, it's Allie.' 'I'm really sorry, but the traffic this morning is terrible.' 'I'm going be very late.' 'OK.' 'I think the best thing is for you to take a taxi to the station…' '…and then get train to the airport.' 'No problem, I'll call a taxi.'";
    var div = document.getElementById('startStr');
    div.innerHTML = str;
    
    document.getElementById('running').onclick = function () {
        div.innerHTML = str.replace(/('(?!\b)|(?!\b)')/g, '"');
    }
}
