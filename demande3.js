window.onload = function(){
    var openButton = document.getElementById('notation')
    openButton.onclick = function(event) {
        var content = document.getElementById('content');
        if (content) {
          openButton.style.display="none";
          content.style.display = "";
        }
        else {
            var xmlhttp=new XMLHttpRequest();
            xmlhttp.addEventListener('readystatechange', function(event) {
                if (xmlhttp.readyState==4) {
                    if (xmlhttp.status == "200") {
                        // récupération des données et traitement
                        //var div = document.getElementById('result');
                        openButton.style.display = 'none';
                        content = document.createElement('div');
                        content.setAttribute('id', 'content');
                        content.innerHTML = xmlhttp.responseText;
                        document.body.appendChild(content);
                        var result = document.getElementById('result');
                        var select = document.getElementById('note_classique');
                        //onchange status
                        select.onchange = function(){
                            xmlhttp=new XMLHttpRequest();
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
                              xmlhttp.send("note_classique=" + select.value);
                        };
                        var closeButton = document.getElementById('close')
                        closeButton.onclick = function(event) {
                          content.style.display = "none";
                          openButton.style.display = "";
                        };
                    }
                    else {
                        alert('error code ' + xmlhttp.status + ' : ' + xmlhttp.statusText);
                    }
                }
            });
            xmlhttp.open("GET", 'demande3.php', true);
            xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded; charset=UTF-8");
            xmlhttp.send();
        }
    }
}
