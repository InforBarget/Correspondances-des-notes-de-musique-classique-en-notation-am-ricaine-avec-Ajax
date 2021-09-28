window.onload = function(){
    var button = document.getElementById('notation')
    button.onclick = function(event) {

        button.remove(); 

        var notes = new Array('Do', 'Ré', 'Mi', 'Fa', 'Sol', 'La', 'Si');
            var form = document.createElement('form');
            form.action = "demande2.php"
            var select = document.createElement('select');

            //create form elements
            document.body.appendChild(form);
            form.appendChild(select);
            select.setAttribute("id","select");
            //option vide
            select.appendChild(document.createElement('option'));
            //Set options
            for (var i=0; i< notes.length; i++)
            {
                var option = document.createElement('option');
                option.value = i;
                option.innerHTML = notes[i];
                select.appendChild(option);
            }

            //Create p
            var result = document.createElement('p');
            document.body.appendChild(result);
            result.setAttribute('id','result');
            result.innerHTML = "Choissisez une note pour voir la correspondance.";

            //onchange status
            select.onchange = function(){
                var xmlhttp=new XMLHttpRequest();
                xmlhttp.addEventListener('readystatechange', function(event) {
                    if (xmlhttp.readyState==4) {
                        if (xmlhttp.status == "200") {
                            result.innerHTML = xmlhttp.responseText;
                        }
                        else {
                            alert('error code ' + xmlhttp.status + ' : ' + xmlhttp.statusText);
                        }
                    }
                });
                xmlhttp.open("POST", form.action, true);
                xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded; charset=UTF-8");
                xmlhttp.send("note_classique=" + form.select.value);
            };
    }
}
