
# [Les événements](https://fr.reactjs.org/docs/handling-events.html)

En HTML on on passe une fonction sous forme de chaîne de caractères

```html
<button onclick="triggerConnect()">
    Se connecter
</button>
```

En JSX on passe une fonction en tant que gestionnaire d'événements

```javascript

const triggerConnect = (e) => {
    e.preventDefault();
    // do stuff
}

return (
    <button onClick={triggerConnect}>
        Se connecter
    </button>
)
```


## Énoncé

Modifions le code de notre horloge pour afficher deux boutons qui permettront de colorer le texte de l'horloge dans une couleur aléatoire, et de réinitaliser la couleur à `black`

Il nous faudra pour cela ajouter au `state` la couleur de base afin de pouvoir l'appliquer à l'élement `<h2>`

### Bonus

Modifions les boutons pour qu'ils arrêtent et re-synchronisent l'horloge.
Il faudra regarder du côté de [useRef](https://fr.reactjs.org/docs/hooks-reference.html#useref) pour pouvoir stocker une référence à notre setInterval.

---

Pour passer à la suite vous devez commit vos changements puis checkout sur la branche exo7








