<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="styles.css">
    <title>Document</title>
</head>
<body>
    

<!-- contenue du site -->

<div class="titre">
<h1 >Pokédex</h1>
</div>

<div class="recherche">
<label for="pokedex">Liste des Pokémons :</label>            
<select name="poke" id="pokedex"><option value="blablza">  Selection du Pokémon  </option></select>
<button  class="rech" id ="rechercher">Lancer une recherche   </button>
<form><input Type="button" value="Effacer" onClick="history.go(0)"></form>
</div>



    <div class="boite">
<div class="resultat">
<h1 id="name">    </h1>
<h1 id="pv">      </h1>
<h1 id="type">    </h1>
<h1 id="idp">     </h1>
<h1 id="taille">  </h1>
<h1 id="poids">   </h1>
<img id="img" src="" >  
</div>
    </div>
<script src="pokemon-data.js"></script>

</body>
</html>
