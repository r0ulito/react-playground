# La syntaxe JSX en profondeur

Maintenant que nous avons modifié notre code pour respecter la syntaxe JSX, creusons un peu plus.

### [Les accolades](https://fr.reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx)

En JSX, au sein d'accolades, nous pouvons utiliser n'importe quelle expression JavaScript valide

```javascript
    <p>{2 + 2}</p>
    // deviendra <p>4</p>

    const name = 'Julien JOVY'
    const element = <h1>Bonjour, {name}</h1>
    // deviendra <h1>Bonjour, Julien JOVY</h1>
```

### [Les attributs](https://fr.reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx)

JSX utilise la casse camelCase pour les noms d'attributs HTML. `tabindex` devient `tabIndex`, et `class` devient `className`.

Nous pouvons utliser des accolades pour intégrer des expression JavaScript

```javascript
    const nameOne = 'Julien JOVY'
    const elementOne = <h1 title={nameOne}>Bonjour</h1>
    // deviendra <h1 title="Julien JOVY">Bonjour</h1>

    // Nous pouvons également mettre du texte comme ceci
    const nameTwo = 'Julien JOVY'
    const elementTwo = <h1 title="Un super Nom">Bonjour, {nameTwo}</h1>
```

Nous pouvons donc utiliser soit les guillemets pour des notation texte, soit les accolades pour des expression JS. 

Mais &#x26A0; pas les deux en même temps &#x26A0;

---

## Énoncé 

Déclarons une const `lastName` contenant notre nom et une autre nommée `firstName` contenant notre prénom les deux seront en lowerCase.

Modifier le code de l'exercice précédent pour afficher dans des `<span>` le `lastName` en rouge et en upperCase et le `firstName` avec la première lettre en upperCase.

Pour cela nous devrons ajouter une feuille de style CSS (nommons-là `style.css`) et ajouter une classe à l'élement qui doit être affiché en rouge. Pensez à l'inclure dans `index.html`


### Bonus:

Créer une fonction qui va nous permettre de retourner nos Strings dans le format souhaité


---

Pour passer à la suite vous devez commit vos changements puis checkout sur la branche exo4
