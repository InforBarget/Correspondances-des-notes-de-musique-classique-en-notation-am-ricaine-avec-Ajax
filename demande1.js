window.onload = function(){
    var button = document.getElementById('notation')
    button.onclick = function(event) {

        button.remove(); 

        var notes = new Array(
            {
                c: "Do",
                a: "C"
            },
            {
                c: "Ré",
                a: "D"
            },
            {
                c: "Mi",
                a: "E"
            },
            {
                c: "Fa",
                a: "F"
            },
            {
                c: "Sol",
                a: "G"
            },
            {
                c: "La",
                a: "A"
            },
            {
                c: "Si",
                a: "B"
            });
            var div = document.createElement('div');
            var form = document.createElement('form');
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
                option.innerHTML = notes[i].c;
                select.appendChild(option);
            }

            //Create div
            document.body.appendChild(div);
            div.setAttribute('id','displayAmericanNote');
            div.innerHTML = "Choissisez une note pour voir la correspondence.";

            //onchange status
            select.onchange = function(){
                var selectWithId = document.getElementById('select'); 
                var clickedOption = selectWithId.options[selectWithId.selectedIndex].value;

                if(clickedOption == 0)
                {
                    div.innerHTML = "Aucune note n'a été choisie.";
                } 
                else
                {
                    i = clickedOption;
                    div.innerHTML = "La notation américaine pour la note \"" + notes[i].c + "\" est \"" + notes[i].a +"\".";
                } 
            }
    }
}
