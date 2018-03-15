/////Первое и второе задание/////
window.onload = function () {
    var str = "'Hello.' 'Hi, Mark, it's Allie.' 'I'm really sorry, but the traffic this morning is terrible.' 'I'm going be very late.' 'OK.' 'I think the best thing is for you to take a taxi to the station…' '…and then get train to the airport.' 'No problem, I'll call a taxi.'";
    var div = document.getElementById('startStr');
    div.innerHTML = str;
    
    document.getElementById('running').onclick = function () {
        div.innerHTML = str.replace(/('(?!\b)|(?!\b)')/g, '"');
    }
}
