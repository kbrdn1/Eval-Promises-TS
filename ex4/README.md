# Exercice 4 : Réalisation d'un graphe plus complexe avec gestion d'erreur
- Comme pour l'exercice 1, vous devez implémenter le graphe proposé.
- Attention, celui-ci nécessite de gérer une durée pour chaque tâche.
- Celui-ci est un peu plus complexe : ![Voir capture](<graph2.png>)
- Explication textuelle du workflow : 
    - A : Démarre en premier, prends 2 secondes
    - B : Dépends de A, démarre dès que A est terminé, prends 3 secondes.
    - C : Dépends de A, démarre dès que A est terminé (en même temps que B), prends 1 secondes.
    - D : Dépends de B et de C, démarre seulement lorsque les deux sont terminés, prends 4 secondes.
    - E : Dépends de D, démarre seulement lorsque D est terminé, prends 3 secondes
    - F : Depends de C, démarre dès que C est terminé et prends 2 secondes.
- **Si vous n'arrivez pas du tout à gérer l'erreur, faites le même workflow sans l'erreur, ça vous donnera des points !**
- Exemple de retour attendu 
```
A démarre  
A termine  
B démarre  
C démarre  
C termine  
B termine  
D démarre  
D a échoué avec l'erreur : [Erreur simulée]  
E ne peut pas démarrer en raison de l'échec de D.  
F démarre  
F termine  
Exécution du workflow terminée avec des erreurs.
```

To install dependencies:

```bash
bun install
```

To run:

```bash
bun dev
```

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.1.29. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
