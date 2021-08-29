# [Nos premiers composants](https://fr.reactjs.org/docs/components-and-props.html#function-and-class-components)

### Composants sous forme de fonctions

Ça reste le moyen le plus simple de définir un composant.

```javascript
    function Welcome(props) {
        return <h1>Bonjour, {props.name}</h1>;
    }
```

---

### Composants sous forme de classes

Il est également possible d'utiliser une classe ES6 pour définir un composant.

```javascript
    class Welcome extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return <h1>Bonjour, {this.props.name}</h1>;
        }
    }
```
---


## Énoncé

Reprenons le code de l'exercice précédent.
Nous allons ajouter deux nouveaux composants.
L'un sera nommé `firstName`, l'autre `lastName`.

Ainsi nous allons remplacer nos deux `<span>` par leur composant respectif. 

Libre à vous d'utilisez la méthode de votre choix, mais sachez que la correction sera faite avec des composants fonctionnels.

Comme dans l'exercice 3 le `lastName` sera affiché en rouge et en upperCase et le `firstName` avec la première lettre en upperCase.

---

### Bonus 

Rajouter les fonctions de formatages dans chaque composants.

Le faire avec les deux approches (Classes et Fonctions).





