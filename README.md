## Énoncé

Nous allons mobiliser les concepts appris dans les exercices précédents.

Pour cela nous allons créer une application de gestion de liste de tâches à faire.

### Partie 1

Nous allons gérer l'input qui permet la saisie du `title` de la `Todo` afin de pouvoir la créer.

Cet input:

- Doit être un composant contrôlé
- Doit écouter l'événement qui détecte la pression d'une touche du clavier pour valider la saisie avec la touche `Entrée` et l'annuler avec la touche `Echap`
- Quand la saisie est validée on s'assure de bien avoir notre objet todo (au moins en faisant un console.log dans les premiers temps) et que le champ soit vidé
- Quand la saisie est annulée on vide le champ

#### Comment faire ?

Nous allons passer par une variable d'état que l'on va nommer `newTodo` qui nous permettra de gérer les saisies, et qui contiendra les données à ajouter à la liste.

un objet `newTodo` doit respecter le modèle suivant :

```javascript
    let newTodo = {
        id: 1
        title: 'ma super tâche',
        isCompleted : false,
        isEditing: false
    }
```

### Partie 2

Nous allons maintenant faire en sorte qu'en appuyant sur entrée dans l'input, le `newTodo` s'ajoute à la liste des `todos`.

Il faudra donc mettre à jour la variable d'état qui contient la liste.

Dans un premier temps nous allons utiliser le `hook d'effet` pour `console.log` notre liste à chaque fois qu'elle change

Ensuite il faudra faire en sorte que le composant `TodoList` reçoive la nouvelle liste.

### Partie 3

Nous allons maintenant travailler dans le composant `TodoItem` afin que celui-ci affiche en plus du `title`, l'état `isCompleted` (faites comme bon vous semblera)

Il faudra lui ajouter un bouton qui permet de changer son état. Ainsi qu'un bouton permettant de la supprimer de la liste.

Quand l'état est à `isCompleted === true`, le `title` du `TodoItem` doit être barré

> _E.G_ : Ma todo active | ~~Ma todo complétée~~

### Partie 4

Nous allons maintenant travailler dans le composant `TodoFilter` afin que celui-ci affiche 3 boutons.
L'un permettra de ne pas filtrer la liste. Un autre permettra d'afficher seulement les `TodoItem` qui sont à l'état `isCompleted === true` et le dernier d'afficher seulement les `TodoItem` qui sont à l'état `isCompleted === false`.

Il est évident que nous devrons travailler avec une nouvelle variable d'état qui contient la liste des todos où l'on applique le filtre

### Partie 5

Nous allons maintenant faire en sorte qu'en double cliquant sur le `title`d'un `TodoItem` on affiche un input qui nous permet d'éditer la valeur de ce `title`.
Comme l'input précédant il devra écouter les événements de clavier afin de pouvoir valider la saisie avec la touche `Entrée`.

### Partie 6

Nous allons maintenant implémenter le bouton qui permet de supprimer les `TodoItem`qui ont l'état `isCompleted === true`.
Ce bouton ne doit apparaitre que si au moins une des todos est complétée.

## Astuces

⚠️ Vous n'êtes pas dans l'obligation de mettre un <button>bouton</button>.

N'importe quel élément HTML qui écoute le clic permettra cette action.

---

Nous sommes arrivés à la fin de ce module. Bravo à vous si vous vous êtes accrochés jusque-là.

> YOU'RE BREATHTAKING !
>
> <cite>Keanu Reeves</cite>

> OnDoubleClick C'EST D'LA MERDE
>
> <cite>[V1dev](https://github.com/Sata51) && [Cyriil77](https://>github.com/cyrilmarceau)</cite>
