## Énoncé
Nous allons mobiliser les concepts appris dans les exercices précédents. 

Pour cela nous allons créer une application de gestion de liste de tâches à faire.

- Nous devrons conserver le composant `App` et le modifier pour qu'il réponde aux attentes suivantes:

    - La liste des `Todo` doit être présente dans le `state`
    - un objet `Todo` doit respecter le modèle suivant :

        ```javascript
        let todo = {
            title: 'ma super tâche',
            isCompleted : false
        }
        ```

- Un composant permettant d'afficher la liste des `Todo` doit être créer

- Nous implémenterons un input permettant la saisie du `title` lors de la création d'un `Todo`, cette saisie sera validée avec le bouton `Enter` et nous pourrons l'annuler avec `Echap`
- Un `Todo`:
    - peut être double-cliqué pour être modifié
    - doit comporter un bouton qui permet de le supprimer 
    - doit comporter autre bouton qui permet d'indiquer la complétion du `Todo`.
    - doit voir son `title` barré lorsque `Todo` est complété

    > *E.G* : Ma todo active | ~~Ma todo complétée~~

    <br>


- Nous mettrons en place un système de `filtrage`, permettant d'afficher soit:
    - Tous les `Todo`
    - Les `Todo` non complétés
    - Les `Todo` complétés

- Un bouton permettra de supprimer tous les `Todo` qui sont complétés *(seulement si au moins un `Todo` est à l'état isCompleted = true)*

Components:
- App
    
    - TodoList
        - TodoItem
    - FiltersContainer


---
State :

- todos list
- input
- filter: [all, active, completed]



---
event handling


onKeyDown
- escape to cancel
- enter submit


OnDoubleClick 
- edit => double click on a todo
> C'EST DE LA MERDE
>
><cite>[V1DEV](https://github.com/Sata51) && [CYRIIL77](https://>github.com/cyrilmarceau)</cite>



--- actions

- Delete all completed
- Delete a todo
- Create, Edit



---

Pour passer à la suite vous devez commit vos changements puis checkout sur la branche exo13








