<?php
// tableau notation classique => notation américaine note de musique
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $notes_classiques = array('Do', 'Ré', 'Mi', 'Fa', 'Sol', 'LA', 'Si');
    $notes_us = array('C', 'D', 'E', 'F', 'G', 'A', 'B');
    if (isset($_POST['note_classique']) && isset($notes_classiques[$_POST['note_classique']])) {
        $note = $_POST['note_classique'];
        echo 'La note classique '.$notes_classiques[$note].' correspond à la note américaine '.$notes_us[$note].'.';
    }
    else {
        echo  "Aucune note choisi.";
    }
}
else {
?> 
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <script src="demande2.js"></script>
        <title>Equivalence des notes de musique classiques/américaines</title>
    </head>
      <body>
        <button id="notation">Notation</button>
      </body>
  </html>
<?php

}
?>
