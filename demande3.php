<?php
$notes = array('Do' => 'C', 'Ré' => 'D', 'Mi' => 'E', 'Fa' => 'F', 'Sol' => 'G', 'La' => 'A', 'Si' => 'B');
if (isset($_POST['note_classique'])) {
    if (isset($notes[$_POST['note_classique']])) {
        echo 'La notation américaine de la note '.$_POST['note_classique'].' est '.$notes[$_POST['note_classique']].'.';
    }
    else {
        echo 'Veuillez spécifier une note.';
    }
}
else {      
?>
    <form id="form" action="demande3.php" method="post">
        <select id="note_classique">
          <option value="">Choix</option>
          <?php
            foreach ($notes as $note_classique => $note_americaine) {
              echo '<option value="'.$note_classique.'">'.$note_classique.'</option>';
            }
          ?>
        </select>
    </form>
    <p id="result">Choissisez une note pour retrouver sa correspondance.</p>
    <button id="close">Fermer</button>
<?php 
}
?>
