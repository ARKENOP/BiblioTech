## TODO 1: Navigation incorrecte

**Nature du problème**:
Certains liens rechargent complètement la page au lieu d'utiliser le routeur Angular.

**Solution technique**:
J'ai remplacé les attributs `href` par `routerLink` dans les balises `<a>` pour utiliser la navigation du routeur Angular, ce qui évite le rechargement complet de la page.

**Concepts Angular utilisés**:
- **Directives**: Utilisation de la directive `routerLink` pour gérer la navigation.
- **Routing**: Configuration et utilisation du routeur Angular pour une navigation fluide sans rechargement de page.

## TODO 2: Besoin de formatage de texte

**Nature du problème**:
Les catégories de livres ne sont pas affichées correctement. Le formatage du texte n'est pas esthétique.

**Solution technique**:
J'ai créé un pipe personnalisé `FormatPipe` qui remplace les underscores par des espaces et met le premier mot en majuscule, le reste en minuscule. Ce pipe est ensuite appliqué aux catégories de livres dans le template HTML.

**Concepts Angular utilisés**:
- **Pipes**: Création et utilisation d'un pipe personnalisé pour transformer le texte.
- **Templates**: Application du pipe dans le template HTML pour formater le texte.

## TODO 3: Structure de page incomplète

**Nature du problème**:
L'application manque de modularité et de réutilisation de code. Les éléments communs comme le header et le footer sont dupliqués dans plusieurs fichiers.

**Solution technique**:
J'ai extrait les éléments communs (header et footer) en composants réutilisables `HeaderComponent` et `FooterComponent`. Ces composants sont ensuite utilisés dans le template principal `app.component.html`.

**Concepts Angular utilisés**:
- **Composants**: Création de composants réutilisables pour le header et le footer.
- **Templates**: Utilisation des nouveaux composants dans le template principal pour améliorer la modularité et la réutilisation du code.

## TODO 4: Pages non affichées

**Nature du problème**:
Certaines pages ne s'affichent pas correctement, empêchant les utilisateurs d'accéder à certaines fonctionnalités.

**Solution technique**:
J'ai vérifié la configuration des routes dans `app.routes.ts` pour m'assurer que toutes les routes sont correctement définies. J'ai également vérifié que les composants sont correctement importés et utilisés dans `app.component.ts`.

**Concepts Angular utilisés**:
- **Routing**: Utilisation des routes pour naviguer entre les pages.
- **Composants**: Importation et utilisation correcte des composants dans les routes et le template principal.

## TODO 5: Route manquante

**Nature du problème**:
La page de détail d'un livre n'est pas accessible, empêchant les utilisateurs de voir les détails d'un livre.

**Solution technique**:
J'ai ajouté une route pour la page de détail d'un livre dans le fichier de configuration des routes `app.routes.ts`. Cette route utilise le paramètre `id` pour afficher les détails du livre correspondant.

**Concepts Angular utilisés**:
- **Routing**: Configuration et ajout d'une nouvelle route pour accéder à la page de détail d'un livre.
- **Paramètres de route**: Utilisation du paramètre `id` pour charger les détails du livre correspondant.

## TODO 6: Formulaire incomplet

**Nature du problème**:
Le formulaire d'ajout de livre n'est pas implémenté, empêchant les utilisateurs d'ajouter de nouveaux livres.

**Solution technique**:
J'ai créé un formulaire avec les champs `title`, `author`, `description`, et `category` dans `add-book.component.ts`.

**Concepts Angular utilisés**:
- **Formulaires réactifs**: Création et gestion d'un formulaire réactif avec `FormBuilder` et `FormGroup`.

## TODO 7: Validations manquantes

**Nature du problème**:
Le formulaire accepte des données invalides, ce qui peut entraîner la soumission de données incomplètes ou incorrectes.

**Solution technique**:
J'ai ajouté des validations aux champs du formulaire dans `add-book.component.ts` pour garantir que seules des données valides peuvent être soumises. J'ai également ajouté des messages d'erreur appropriés dans le template HTML `add-book.component.html` pour informer les utilisateurs des erreurs de validation.

**Concepts Angular utilisés**:
- **Formulaires réactifs**: Ajout de validations aux champs du formulaire avec `Validators`.
- **Templates**: Affichage des messages d'erreur de validation dans le template HTML.

## TODO 8: Navigation manquante

**Nature du problème**:
Impossible de revenir à la page précédente depuis certaines vues, ce qui bloque l'utilisateur sur certaines pages.

**Solution technique**:
J'ai ajouté un bouton de retour dans le template HTML `book-detail.component.html` et implémenté la méthode `goBack` dans `book-detail.component.ts` pour naviguer vers la page précédente en utilisant le service `Location`.

**Concepts Angular utilisés**:
- **Navigation**: Utilisation du service `Location` pour naviguer vers la page précédente.
- **Templates**: Ajout d'un bouton de retour dans le template HTML pour permettre la navigation.

## TODO 9: Erreur dans la console

**Nature du problème**:
Erreur "Cannot read properties of undefined" dans la console, ce qui peut entraîner un plantage de l'application lorsque les données ne sont pas chargées.

**Solution technique**:
J'ai utilisé l'opérateur `*ngIf` dans le template HTML `book-detail.component.html` pour vérifier que les données sont chargées avant de les afficher. Cela permet d'éviter l'accès à des propriétés non définies.

**Concepts Angular utilisés**:
- **Directives structurelles**: Utilisation de `*ngIf` pour conditionner l'affichage des données.
- **Gestion des données asynchrones**: Vérification que les données sont chargées avant de les utiliser.

## TODO 10: Directive non appliquée

**Nature du problème**:
Certains éléments ne sont pas mis en évidence comme prévu, ce qui dégrade l'expérience utilisateur en manquant d'indications visuelles.

**Solution technique**:
J'ai modifié la directive `highlight` pour qu'elle affecte le poids du texte lorsque l'élément doit être mis en évidence. J'ai ensuite appliqué cette directive aux titres des livres dans les templates `book-detail.component.html` et `book-list.component.html`.

**Concepts Angular utilisés**:
- **Directives**: Création et application d'une directive personnalisée pour mettre en évidence des éléments.
- **Templates**: Utilisation de la directive dans les templates HTML pour améliorer l'expérience utilisateur.

## TODO 11: Bouton non fonctionnel

**Nature du problème**:
Certains boutons ne réagissent pas aux clics, empêchant les actions d'être effectuées.

**Solution technique**:
J'ai vérifié que la méthode `goBack` est correctement définie dans `book-detail.component.ts` et que le bouton utilise correctement l'événement `(click)` pour appeler cette méthode dans `book-detail.component.html`.

**Concepts Angular utilisés**:
- **Gestion des événements**: Utilisation de l'événement `(click)` pour lier le bouton à la méthode `goBack`.
- **Navigation**: Utilisation de la méthode `goBack` pour naviguer vers la page précédente.

## TODO 12: Données non affichées

**Nature du problème**:
Les données sont chargées mais n'apparaissent pas dans l'interface, empêchant l'utilisateur de voir les informations importantes.

**Solution technique**:
J'ai vérifié que les données sont correctement assignées à la variable `books` dans `book-list.component.ts` et que cette variable est utilisée correctement dans le template HTML `book-list.component.html` pour afficher les données.

**Concepts Angular utilisés**:
- **Services**: Utilisation d'un service pour charger les données.
- **Templates**: Utilisation de la directive `*ngFor` pour afficher les données dans le template HTML.

## TODO 13: Descriptions trop longues

**Nature du problème**:
Les descriptions des livres prennent trop de place, ce qui encombre l'interface utilisateur et la rend moins lisible.

**Solution technique**:
J'ai créé un pipe personnalisé `truncate` pour limiter la longueur du texte affiché et ajouter des points de suspension si la description est plus longue. Ce pipe est ensuite appliqué aux descriptions des livres dans le template HTML `book-list.component.html`.

**Concepts Angular utilisés**:
- **Pipes**: Création et utilisation d'un pipe personnalisé pour transformer le texte.
- **Templates**: Application du pipe dans le template HTML pour limiter la longueur des descriptions.

## TODO 14: Retour utilisateur manquant

**Nature du problème**:
Aucune confirmation n'est affichée après certaines actions, ce qui empêche l'utilisateur de savoir si son action a réussi ou échoué.

**Solution technique**:
J'ai utilisé le service `MatSnackBar` d'Angular Material pour afficher des notifications après les actions d'ajout de livre, de modification de favori et de suppression de livre. Ces notifications informent l'utilisateur du succès ou de l'échec de l'action.

**Concepts Angular utilisés**:
- **Services**: Utilisation du service `MatSnackBar` pour afficher des notifications.
- **Gestion des événements**: Affichage de notifications après les actions de modification de favori et de suppression de livre.

## TODO 15: Erreur d'affichage du titre

**Nature du problème**:
Les titres ne s'affichent pas correctement, ce qui rend l'information présentée incorrecte ou mal formatée.

**Solution technique**:
J'ai ajouté le pipe `uppercase` d'Angular pour transformer le texte en majuscules. Ce pipe est ensuite appliqué au titre dans le template HTML `home.component.html`.

**Concepts Angular utilisés**:
- **Pipes**: Utilisation d'un pipe d'Angular pour transformer le texte en majuscules.
- **Templates**: Application du pipe dans le template HTML pour afficher le titre en majuscules.

## TODO 16: Directive incomplète

**Nature du problème**:
La directive highlight ne fonctionne pas comme prévu, ce qui dégrade l'expérience utilisateur en manquant d'indications visuelles.

**Solution technique**:
J'ai modifié la directive `highlight` pour qu'elle affecte le poids du texte lorsque l'input sur les favoris est `true`. Cette directive est ensuite appliquée aux champs `title` des livres dans les templates `book-detail.component.html` et `book-list.component.html`.

**Concepts Angular utilisés**:
- **Directives**: Création et application d'une directive personnalisée pour mettre en évidence des éléments.
- **Templates**: Utilisation de la directive dans les templates HTML pour améliorer l'expérience utilisateur.
