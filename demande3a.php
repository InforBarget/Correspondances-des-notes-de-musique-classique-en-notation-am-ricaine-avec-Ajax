<!doctype html>
<?php
  // tableau notation classique => notation américaine note de musique
  $notes = array('do' => 'C', 'ré' => 'D', 'mi' => 'E', 'fa' => 'F', 'sol' => 'G', 'la' => 'A', 'si' => 'B');
  $result = "";
   if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST['note_classique'])) {
      $result = "<p>Aucune note choisie!</p>";
    }
    else {
      $note = $_POST['note_classique'];
      $result =  '<p>La note classique \' '.$note.' \' correspond à la note américaine \' '.$notes[$note].' \'.</p>';
    }
  }
?>
<html lang='fr'>
  <head>
    <meta charset="UTF-8" />
    <title>Correspondance américaine d'une note de musique</title>
  </head>
  <body>
    <h1>Correspondance des notes de musique classiques et anglaises</h1>
    <form action="exemple2.php" method="post" id="form1">
      <fieldset>
        <legend>Correspondance classique->anglaise</legend>
        <p>Choisissez une note:</p>
        <select name="note_classique">
          <option value="">Choix</option>
          <?php
            foreach ($notes as $note_classique => $note_americaine) {
              echo '<option value="'.$note_classique.'">'.$note_classique.'</option>';
            }
          ?>
        </select>
        </br>
        <input type="submit" name="envoyer" value="Afficher la correspondance" /></p>
        <div id="resultat">
          <?php
	    echo $result;
          ?>
        </div>
      </fieldset>
    </form>
  </body>
</html>

