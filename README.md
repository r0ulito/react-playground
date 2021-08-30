
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

Modifions le code de notre horloge pour afficher un bouton qui permettra de la stopper, et un autre pour la resynchroniser quand elle est arrêtée.

Nous allons donc créer deux nouveaux composants qui seront nos boutons. Ils seront à l'écoute sur l'événement `onClick` et déclencheront les instructions souhaitées. N'oubliez pas de prévenir le comportement par défaut.

---

Pour passer à la suite vous devez commit vos changements puis checkout sur la branche exo7








