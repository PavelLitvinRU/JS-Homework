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