# [Faire remonter l'état](https://fr.reactjs.org/docs/lifting-state-up.html)

Assez souvent plusieurs composants ont besoin de reflétrer les mêmes données dynamiques. Il est conseillé de faire remonter l'état partagé dans leur ancêtre commun le plus proche. Nous allons voir comment cela fonctionne.

Lisons la documentation avant de passer à l'exercice (prenez 30 minutes et posez des questions)

### [Ce qu'il faut Retenir](https://fr.reactjs.org/docs/lifting-state-up.html#lessons-learned)

Il ne doit y avoir qu'une seule "*source de vérité*" pour toute donnée qui change dans une application React. L'état est d'abord ajouté au composant qui en a besoin pour s'afficher.

Ensuite, si d'autres composants en ont également besoin, nous pouvons faire remonter l'état dans l'ancêtre commun le plus proche. Nous ne synchroniserons pas les états de différents composants, on se basera sur des données qui se propagent [du haut vers le bas](https://fr.reactjs.org/docs/state-and-lifecycle.html#the-data-flows-down)

Faire remonter l'état implique une petite gymnastique mentale, qui nous force à écrire du code générique. Contrairement à des frameworks comme VueJs qui utilisent une liaison des données [bi-directionnelle](https://fr.vuejs.org/v2/guide/forms.html)


## Énoncé
---

### Partie 1

Nous allons créer notre deuxième "*petite*" application. Elle permettra de convertir une valeur décimal en valeur binaire.

Nous allons donc créer deux composants `App` et `BaseNumberInput`.
Le composant `App` devra rendre 2 composants `BaseNumberInput`
- l'un nous permettra de saisir la valeur décimale
- l'autre affichera la conversion en valeur binaire

Dans le composant `BaseNumberInput` l'attribut *(prop)* `onChangeBase` permettra de modifier l'état du composant `App`

```javascript

// Dans App
(
<BaseNumberInput onChangeBase={handleChange}>
)

// Dans BaseNumberInput

(
props.onChangeBase(e.target.value)
)

```

---

### Partie 2

Nous allons implémenter la logique dans l'autre sens. C'est à dire que si nous rentrons un binaire dans le deuxième champ (celui qui faisait la conversion en binaire) la conversion vers une valeur décimale sera affichée dans le premier champ.


### Bonus

Nous reprendrons le code fourni à la partie 2 et nous allons maintenant proposer un menu déroulant permettant de choisir la base dans laquelle nous voulons convertir une valeur décimale.
Nous utiliserons les bases:
- binaire
- ternaire
- septénaire
- hexadécimal

Une fois la base sélectionnée le champ de saisie apparait et la conversion peut alors se faire


### Indices

La méthode `toString()` nous permettra de convertir facilement nos inputs dans les bases souhaitées. 
⚠️La plupart des objets `JavaScript` surcharge la methode `toString()`. Celle dont nous aurons besoin sera celle de l'objet `Number` ⚠️

<small>Peut-être que nous aurons également besoin de la méthode [`parseInt()`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/parseInt)</small>





---

Pour passer à la suite vous devez commit vos changements puis checkout sur la branche exo11








