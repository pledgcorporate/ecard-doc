# Dashboard Pledg - Mode d'emploi

!! Vous trouverez ici les éléments relatifs à l'utilisation du dashboard Pledg.

## I - Connexion :

Nous vous avons créé des accès au dashboard, pour vous connecter, il vous suffit de cliquer sur ce lien : https://dashboard.ecard.pledg.co/#/

![Capture.PNG](https://storage.googleapis.com/slite-api-files-production/files/16cb4189-7bb4-43eb-986b-9b2ae1b74712/Capture.PNG)

a) Cliquez sur "Log in"

b) Réinitialisez le mot de passe en cliquant obligatoirement sur :

![Capture.PNG](https://storage.googleapis.com/slite-api-files-production/files/70ad746d-9434-48a0-8cc0-87e733341cd9/Capture.PNG)

c) Connectez-vous à nouveau avec le mot de passe choisi.

Remarque : pour vous connecter au **Dashboard de test (Staging)**, cliquez sur le lien suivant : https://staging.dashboard.ecard.pledg.co/?#/

## II - Présentation générale du Dashboard

Après vous êtres identifiés, vous arrivez sur l'interface principale du Dashboard Pledg.

![Capture_Présentation_Red.png](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/98b78af6-fa5c-47c6-a807-8395c87cf3e9/Capture_Pr%C3%A9sentation_Red.png)

Vous y trouverez :

**(1)** - La liste de vos moyens de paiement Pledg associée d'une courte description de leur type (exemple "2x Installment" pour un paiement fractionné en deux échéances). Cliquez sur l'un des comptes / moyens de paiement Pledg pour le consulter.

**(2)** - Cliquez sur "Créer un compte" pour créer un nouveau moyen de paiement Pledg.

**(3)** - Vous pouvez changer la langue du Dashboard.

**(4)** - Cliquez sur "Déconnexion" pour quitter le Dashboard.

## III - Consultation d'un compte

Dans les comptes, cliquez sur le compte / moyen de paiement Pledg que vous voulez consulter.

![Capture_CompteConsulter_Red.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/72819614-f179-4057-b046-738d97ed5b66/Capture_CompteConsulter_Red.PNG)

Sur la partie droite de l'écran sont affichées

- Les principales caractéristiques du moyen de paiement,
- La liste des derniers paiements,
- La liste des derniers virements.

### Principales caractéristiques du compte

![Capture_ComptePrincipalesCaractéristiques.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/aceaae24-fa80-45e2-8f3f-7b76c8448c52/Capture_ComptePrincipalesCaract%C3%A9ristiques.PNG)

- UID: l'identifiant technique de votre moyen de paiement aussi appelé MerID.
- Clé : la clé privé de votre moyen de paiement ; elle permet d'authentifier et sécuriser les échanges d'information par une signature. Tous les comptes ne sont pas configurées avec un clé.
- Type : le type de paiement configuré : "Fractionné", "Différé" ...
- Collaborateurs: le nombre de collaborateurs ayant accès au compte (dans cet exemple : un collaborateur).
- Bouton modification : en cliquant sur le bouton vous pouvez modifier certaines informations du compte.

### Modification des caractéristiques d'un compte

Cliquez sur le petite icone "crayon de modification" située sous les collaborateurs des caractéristiques principales du compte.

![Capture_CompteModification1.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/a78b4a6f-56af-4efe-b28d-f0dc821a772b/Capture_CompteModification1.PNG)

Modifiez les informations souhaitées et cliquez sur le bouton "Modifier".

- "Brève description": texte donnant une brève description de votre compte (dans cet exemple "2x" pour un paiement fractionné en deux fois),
- "URL du logo": sélectionnez un fichier avec votre logo et chargez le,
- "Type de paiement" (<u>non modifiable)</u> : paramètre indiquant le type de paiement (dans cet exemple "Fractionné"),
- "Nombre d'échéances" (<u>non modifiable)</u> : le nombre d'échéances de votre moyen de paiement dans le cas d'un paiement fractionné (dans cet exemple "2 échéances") ; à titre informatif, sur le droit vous trouverez les frais appliqués sur l'acheteur (dans cet exemple 0,5%),
- "Signature requise" : activez ou désactivez la signature pour ce compte.

![Capture_CompteModification2_Red.png](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/65c62cba-f906-49ce-bdf9-92b25b05ca33/Capture_CompteModification2_Red.png)

En dessous des caractéristiques modifiables du compte, vous pouvez: ajouter/supprimer et consulter la liste des collaborateurs ayant accès au compte.

## IV - Consultation des derniers paiements

Dans la liste des comptes, cliquez sur le compte / moyen de paiement pour lequel vous voulez consultez les derniers paiements.

![Capture_CompteDerniersPaiements_Red.png](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/bb73d40b-3d0f-4c59-87ad-eab86afb1a55/Capture_CompteDerniersPaiements_Red.png)

La liste des cinq derniers paiements est affichée avec :

- Le montant et sa devise,
- Le statut du paiement :
  - **_COLLECTING_** : Paiement accepté.
  - **_PRIMARY_KO_** : Transaction refusée.
- La référence du marchand communiquée au paiement Pledg,
- L'identification du client : son adresse internet et éventuellement son numéro de téléphone,
- La date du paiement.

### Affichage de tous les paiements

Cliquez sur "**Tout afficher**" pour consulter l'ensemble des paiements réalisés sur ce compte.

![Capture_CompteTousPaiements_Red.png](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/dd4736b4-3d99-48d0-a0a2-7db7e0bb437f/Capture_CompteTousPaiements_Red.png)

Des outils en haut de liste vous permettent de :

- Recherche un paiement en tapant la référence du marchand,
- Filtrer la liste par date, statut et montant,
- Exporter les éléments de la liste au format CSV.

Pour obtenir le détail d'un paiement, cliquez sur l'œil situé à droite de la ligne du paiement.

### Consultation du détail d'un paiement

Cliquez sur l'œil du paiement que vous voulez consulter.

![Capture_PurchaseDetailMain_Red.png](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/d1f6be47-edc6-459b-9bfd-71bf02c5b2eb/Capture_PurchaseDetailMain_Red.png)

Les principales caractéristiques du paiement sont suivies par :

**Les échéances**

- Dans le cadre d'un paiement factionné, vous trouverez la liste des échéances avec les dates, montants et statuts associés :

![Capture_PurchaseDetailEcheance.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/759e6d22-3c2d-4019-85d9-aa274c8020ad/Capture_PurchaseDetailEcheance.PNG)

- Dans le cadre d'un paiement différé, vous trouverez l'échéance avec sa date, montant et statut associé :

![Capture_PurchaseDetailEcheance_2.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/a29110c5-e169-454b-9aee-ee09227e0a2a/Capture_PurchaseDetailEcheance_2.PNG)

**Les remboursements / Refunds**

![Capture_PurchaseDetailRefund.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/b2cd060a-b496-4c7a-bcae-18d733fd3678/Capture_PurchaseDetailRefund.PNG)

## V- Consultation des derniers virements

A compléter

## VI - Créer un nouveau compte

Pour créer un nouveau compte, cliquez sur le bouton "Créer un compte" en bas de la liste de comptes.

![Capture_NouveauCompte.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/1641e1d2-f301-484c-b2b4-91b9714755fd/Capture_NouveauCompte.PNG)

Remplissez l'ensemble des champs puis cliquez sur le bouton "Créer".

- Nom de l'entreprise
- Brève description
- URL du logo
- Type de paiement :
  - "Différé".
  - "Avec acompte/solde" : complétez les champs "Pourcentage de l'acompte" et "Nombre max de jours avant capture du solde".
  - "Fractionné" : complétez le champ "Nombre d'échéances". Le nombre d'échéances ne peut pas excéder 12x.
  - "Redirection".
- Signature requise : cochez la case si vous voulez signer les échanges.

⚠️ Tous les champs sont requis (y compris le logo).

Une fois créée, le nouveau compte / moyen de paiement Pledg apparaît dans la liste des comptes. En cliquant dessus, vous retrouverez ses caractéristiques.

⚠️ Ce compte nouvellement créé, n'est pas **directement fonctionnel en production**. Des actions sont nécessaires par Pledg pour compléter sa configuration et mettre à jour le contrat d'utilisation.

## VII - Annexes

Tableau de traduction de types de paiement :

![Capture.PNG](https://storage.googleapis.com/slite-api-files-production/files/72aee2cf-d43b-41dc-919e-57fa3b0f8123/Capture.PNG)

---

Si vous avez des questions clea@pledg.co 👋

2020-11-23
