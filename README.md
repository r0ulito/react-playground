# [Affichage conditionnel](https://fr.reactjs.org/docs/conditional-rendering.html)

L’affichage conditionnel en React fonctionne de la même façon que les conditions en Javascript. On utilise l’instruction Javascript if ou l’opérateur ternaire pour créer des éléments représentant l’état courant, et on laisse React mettre à jour l’interface utilisateur (UI) pour qu’elle corresponde.

Considérons ces deux composants :
```javascript
function UserGreeting(props) {
  return <h1>Bienvenue !</h1>;
}

function GuestGreeting(props) {
  return <h1>Veuillez vous inscrire.</h1>;
}
```

Nous allons créer un composant Greeting qui affiche un de ces deux composants, selon qu’un utilisateur est connecté ou non :

```javascript
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

ReactDOM.render(
  // Essayez de changer ça vers isLoggedIn={true} :
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);
```

[Condition avec l’opérateur logique &&](https://fr.reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator)

Comme vu lors de l'exercice 3 nous pouvons au sein des accolades utiliser n'importe quelle expression JavaScript valide.

Ce qui peut-être pratique pour afficher un élément suivant une condition:

```javascript
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Bonjour !</h1>
      {unreadMessages.length > 0 &&
        <h2>
          Vous avez {unreadMessages.length} message(s) non-lu(s).
        </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById('root')
);
```


Dans cet exemple nous voyons que l'élement `<h2>` n'est rendu dans le DOM que si la variable unreadMessages contient des valeurs.


## Énoncé

En nous aidant de la documentation modifions le code d'exemple suivant:

```javascript
function UserGreeting(props) {
  return <h1>Bienvenue !</h1>;
}

function GuestGreeting(props) {
  return <h1>Veuillez vous inscrire.</h1>;
}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

ReactDOM.render(
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);
```
Nous allons faire en sorte d'utiliser une ternaire pour l'affichage conditionnel des composants `UserGreeting` et `GuestGreeting`. Et nous allons également ajouter un bouton qui nous permettra de changer la valeur de la prop `isLoggedIn` (mais rappelez-vous qu'elles sont en [lecture seule](https://fr.reactjs.org/docs/components-and-props.html#props-are-read-only), il faudra donc trouver un autre moyen)


---

Pour passer à la suite vous devez commit vos changements puis checkout sur la branche exo8








