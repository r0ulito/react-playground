# [Listes et clés](https://fr.reactjs.org/docs/lists-and-keys.html)

### [Afficher plusieurs composants](https://fr.reactjs.org/docs/lists-and-keys.html#rendering-multiple-components)

Dans l'exercice 3, nous avons vu que nous pouvions utiliser n'importe quelle expression JavaScript valide au sein des accolades. On peut également construire des collections d’éléments et les [inclure dans du JSX](https://fr.reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx) de la même manière.

```javascript
const numbers = [1, 2, 3, 4, 5];
// En itérant sur le tableau on retourne un élement <li> pour chacune des entrées
// et on assigne ses élements à la variables listItems
const listItems = numbers.map((number) =>
  <li>{number}</li>  
);

 //Puis on peut rendre nos élements comme ceci
 ReactDOM.render(
  <ul>{listItems}</ul>,
  document.querySelector('#app')
);

```

### [Les clés](https://fr.reactjs.org/docs/lists-and-keys.html#keys)

Si nous éxécutons le code précédent, nous verrons un warning dans la console nous disant qu'une `key` doit être fournie pour les élements d'une liste

```javascript
(
<li key={number.toString()}>{number}</li>
)
```

Les clés aident React à identifier quels éléments d’une liste ont changés, ont été ajoutés ou supprimés. Vous devez donner une clé à chaque élément dans un tableau afin d’apporter aux éléments un identifiant unique **au sein d'une même liste**.

Les `keys` n'ont pas besoin d'être globalement uniques.

⚠ On évitera d'utliser les index comme clé si l'ordre des éléments est susceptible de changer ⚠
> [Index as a key is an anti-pattern](https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318)
>
> <cite>Robin Pokorny</cite>



## Énoncé

Nous allons faire notre première petite application !

En utilisant l'api [{JSON} Placeholder](https://jsonplaceholder.typicode.com/) nous allons `fetch` l'url [`https://jsonplaceholder.typicode.com/users`](https://jsonplaceholder.typicode.com/users) afin d'obtenir un jeu de données d'utilisateurs.

Avec nos connaissances, nous allons afficher une "carte de visite" pour chaque utilisateur.
Elle devra contenir :
- nom
- email
- nom de la société
- numéro de téléphone
- site web

### Requis
- Les composants doivent être écrit dans l'approche fonctionnelle
- La `key` de chaque `User` sera la valeur de l'id dans l'objet JSON

### Indices

Il faudra nous assurer que les users sont bien présent avant de pouvoir afficher quoi que ce soit. Cherchons donc du côté du hook qui remplace `componentDidMount`, `componentDidUpdate` et `componentWillUnmount`

Nous aurons également besoin du hook d'état

Rappelez que pour l'instant nous utilisons React d'une manière peut conventionnelle ce qui fait que si nous voyons dans la documentation `useState` nous devons modifier par `React.useState`

---

Pour passer à la suite vous devez commit vos changements puis checkout sur la branche exo9








