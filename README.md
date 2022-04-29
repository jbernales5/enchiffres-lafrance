# La France en Chiffres

Centralisons des données neutres et officielles permettant à tout un chacun de se faire un avis sur le bilan du président sortant.

![logo la france en chiffres](https://lafrance.enchiffres.fr/assets/images/home-img-og.jpg)

## Je veux participer

Toute personne est la bienvenue au sein de ce projet. Nous sommes persuadés que c'est à travers un travail collaboratif continu que nous serons capables de mettre en place le dashboard le plus riche en données pour permettre à tout un chacun de se poser les bonnes questions.

Vous pouvez soit apporter des données et des sources de données différentes, soit apporter des modifications et amélioration au site web.

Pour apporter des données, vous devez clôner le dépôt GIT, faire une branche suivant la nomenclature pertinente (`feat/<code_feature_name>` ou `data/<dataset_name>`) puis faire une Pull Request qui sera revue et validée pour intégration.

### Apporter des données (data/<dataset_name>)

Les données se trouvent dans le dossier `Datasets` et sont triées par catégorie et sous-catégories. Vous devrez déposer vos fichiers source (CSV, Excel, etc.) dans le dossier correspondant.

Les données sont actuellement insérées à la main à travers le fichier `webapp/src/data.ts`.

Chaque jeu de données s'appelle `<section>Data` où `<section>` est le nom de la catégorie principale de donées. 

Le découpage des données est le suivant:

#### Catégorie principale

```javascript
export interface DataSection {
  sectionTitle: string, // Titre de la catégorie
  graphsBySubsection: Subsection[] // Graphs groupés par sous-catégorie
}
```

#### Sous-catégorie

```javascript
export interface Subsection {
  subsectionTitle: string, // Titre de la sous-catégorie
  selectorValue: number, // Valeur du selecteur, par défaut à 0
  graphs: Graph[] // Ensemble de graphs associés à la sous-catégorie
}
```

#### Graph

```javascript
export interface Graph{
  graphTitle: string, // Titre du graph
  graph: GraphData, // Données du graph
  options: ChartOptions, // Options liées à l'affichage du graph
  type: ChartType, // Type de graph (camembert, ligne, etc.)
  selectorId: number, // Id associé au selecteur
  source: string, // Source des données
  dataIds?: string[] // Id associé aux données (optionnel)
}
```

Afin de rajouter vos données, vous pouvez vous baser sur les jeux de données déjà insérés comme par exemple `socialData`, `jobData`, `enterpriseData`.

### Apporter du code et des améliorations au site (feat/<code_feature_name>)

L'ensemble du code du site web se trouve dans le dossier `/src`.

Le site web est un site Angular classique utilisant le framework NgZorro et ng2-charts avec le plugin chartjs-plugin-annotation.

Pour lancer une version du site sur votre machine, naviguez au dossier `/src`, lancez la commande `npm install` puis `ng serve -o`.