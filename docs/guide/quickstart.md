# Démarrage

Le dashboard de Pledg vous permet de configurer vos moyens de paiement et suivre les paiements réalisés sur vos différents comptes.

## Création de compte - première connexion

Si vous n'avez pas de compte, vous pouvez en créer un à l'adresse suivante [dashboard de test (staging)](https://staging.dashboard.ecard.pledg.co/#/).

Lorsque l'intégration est terminée, vous pouvez demander l'activation de votre compte à l'adresse support@pledg.co, et nous vous donnons accès à votre [dashboard de production](https://dashboard.ecard.pledg.co/#/).

![Capture_Login.png](https://pledg-assets.s3-eu-west-1.amazonaws.com/ecard-plugin-doc/dashboard/fr/Capture_Login.png)

Pour vous connecter :

* Cliquez sur "Log in"
* Réinitialisez le mot de passe en renseignant votre email, après avoir cliqué sur :

![Capture_ForgotPassword.png](https://pledg-assets.s3-eu-west-1.amazonaws.com/ecard-plugin-doc/dashboard/fr/Capture_ForgotPassword.png)

* Cliquez sur le lien à usage unique envoyé par mail et spécifiez un nouveau mot de passe
* Connectez-vous à nouveau avec le mot de passe choisi

## Présentation générale du dashboard

Après vous êtres identifiés, vous arrivez sur l'interface principale du dashboard Pledg.

![Capture_Présentation_Red.png](https://pledg-assets.s3-eu-west-1.amazonaws.com/ecard-plugin-doc/dashboard/fr/Capture_Presentation_Red.png)

Vous y trouverez :

1. La liste de comptes (vos moyens de paiement Pledg) avec une courte description de leur type (exemple "2x Installment" pour un paiement fractionné en deux échéances). Cliquez sur l'un des comptes / moyens de paiement Pledg pour le consulter
2. Cliquez sur "Créer un compte" pour créer un nouveau moyen de paiement Pledg
3. Vous pouvez changer la langue du dashboard
4. Cliquez sur "Déconnexion" pour quitter le dashboard

## Créer un nouveau moyen de paiement

Pour créer un nouveau moyen de paiement, cliquez sur le bouton "Créer un compte" en bas de la liste de moyens de paiement.

![Capture_NouveauCompte.png](https://pledg-assets.s3-eu-west-1.amazonaws.com/ecard-plugin-doc/dashboard/fr/Capture_NouveauCompte.png)

Remplissez l'ensemble des champs puis cliquez sur le bouton "Créer" :

* Nom de l'entreprise
* URL du logo
* Type de paiement

| Type de paiement en français | Type de paiement en anglais | Paramétrage |
| ----------- | ----------- | ----------- |
| Différé | Deferred |  |
| Fractionné | Installment | Complétez le champ "Nombre d'échéances" (ne peut pas excéder 12x) |
| Avec accompte/solde | Down payment | Complétez les champs "Pourcentage de l'acompte" et "Nombre max de jours avant capture du solde" |

* Signature requise : cochez la case si vous voulez signer les échanges.

⚠️ Tous les champs sont requis (y compris le logo).

Une fois créé, le nouveau compte / moyen de paiement Pledg apparaît dans la liste des comptes. En cliquant dessus, vous retrouverez ses caractéristiques.

⚠️ Ce compte nouvellement créé, n'est pas **directement fonctionnel en production**. Des actions sont nécessaires par Pledg pour compléter sa configuration et mettre à jour le contrat d'utilisation.

## Consultation d'un compte

Dans les comptes, cliquez sur le compte / moyen de paiement Pledg que vous voulez consulter.

![Capture_CompteConsulter_Red.png](https://pledg-assets.s3-eu-west-1.amazonaws.com/ecard-plugin-doc/dashboard/fr/Capture_CompteConsulter_Red.png)

Sur la partie droite de l'écran sont affichées :

* Les principales caractéristiques du moyen de paiement
* La liste des derniers paiements
* La liste des derniers virements

### Principales caractéristiques du compte

![Capture_ComptePrincipalesCaracteristiques.png](https://pledg-assets.s3-eu-west-1.amazonaws.com/ecard-plugin-doc/dashboard/fr/Capture_ComptePrincipalesCaracteristiques.png)

* UID : l'identifiant technique de votre moyen de paiement aussi appelé MerID
* Clé : la clé privé de votre moyen de paiement ; elle permet d'authentifier et sécuriser les échanges d'information par une signature. ⚠️ la clé est facultative et son utilisation réservée aux développeurs.
* Type : le type de paiement configuré : "Fractionné", "Différé" ...
* Collaborateurs: le nombre de collaborateurs ayant accès au compte (dans cet exemple : un collaborateur)
* Bouton modification : en cliquant sur le bouton vous pouvez modifier certaines informations du compte

### Modification des caractéristiques d'un compte

Cliquez sur la petite icone "crayon de modification" située sous les collaborateurs des caractéristiques principales du compte.

![Capture_CompteModification1.png](https://pledg-assets.s3-eu-west-1.amazonaws.com/ecard-plugin-doc/dashboard/fr/Capture_CompteModification1.png)

Modifiez les informations souhaitées et cliquez sur le bouton "Modifier".

Les champs suivants sont modifiables :

* "Brève description": texte donnant une brève description de votre compte (dans cet exemple "2x" pour un paiement fractionné en deux fois)
* "URL du logo": sélectionnez un fichier avec votre logo et chargez le
* "Type de paiement" (**non modifiable**) : paramètre indiquant le type de paiement (dans cet exemple "Fractionné")
* "Nombre d'échéances" (**non modifiable**) : le nombre d'échéances de votre moyen de paiement dans le cas d'un paiement fractionné (dans cet exemple "2 échéances") ; à titre informatif, sur le droite vous trouverez les frais appliqués sur l'acheteur (dans cet exemple 0,5%)
* "Signature requise" : activez ou désactivez la signature pour ce compte

![Capture_CompteModification2_Red.png](https://pledg-assets.s3-eu-west-1.amazonaws.com/ecard-plugin-doc/dashboard/fr/Capture_CompteModification2_Red.png)

En dessous des caractéristiques modifiables du compte, vous pouvez ajouter/supprimer et consulter la liste des collaborateurs ayant accès au compte.

## Consultation des derniers paiements

Dans la liste des comptes, cliquez sur le compte / moyen de paiement pour lequel vous voulez consultez les derniers paiements.

![Capture_CompteDerniersPaiements_Red.png](https://pledg-assets.s3-eu-west-1.amazonaws.com/ecard-plugin-doc/dashboard/fr/Capture_CompteDerniersPaiements_Red.png)

La liste des cinq derniers paiements est affichée avec :

* Le montant et sa devise
* Le statut du paiement :

  - `COLLECTING` : Paiement accepté
  - `PRIMARY_KO` : Transaction refusée
  - `SCORING_KO` : Transaction refusée (le score du client est trop faible)
  - `CANCELLED` : Transaction annulée
* La référence du marchand communiquée au paiement Pledg
* L'identification du client : son email et éventuellement son numéro de téléphone
* La date du paiement

### Affichage de tous les paiements

Cliquez sur "Tout afficher" pour consulter l'ensemble des paiements réalisés sur ce compte.

![Capture_CompteTousPaiements_Red.png](https://pledg-assets.s3-eu-west-1.amazonaws.com/ecard-plugin-doc/dashboard/fr/Capture_CompteTousPaiements_Red.png)

Des outils en haut de la liste vous permettent de :

* Rechercher un paiement en tapant la référence du marchand
* Filtrer la liste par date, statut et montant
* Exporter les éléments de la liste au format CSV

Pour obtenir le détail d'un paiement, cliquez sur l'œil situé à droite de la ligne du paiement.

### Consultation du détail d'un paiement

Cliquez sur l'œil du paiement que vous voulez consulter.

![Capture_PurchaseDetailMain_Red.png](https://pledg-assets.s3-eu-west-1.amazonaws.com/ecard-plugin-doc/dashboard/fr/Capture_PurchaseDetailMain_Red.png)

Les principales caractéristiques du paiement sont suivies des sections :

* **Détail** :																							 
  - Date : la date à laquelle la transaction a été faite
  - Référence : la référence transmise à Pledg depuis votre site marchand
  - Virement (mode `transfert` uniquement) : la référence du virement fait au marchand pour régler l'achat
  - Carte virtuelle (uniquement pour les modes `back` et `front`) : le statut de la carte virtuelle auprès de notre banque. La signification des statuts est détaillée ci-dessous :
  
| Statut | Signification |
| ----------- | ----------- |
| `AUTHORIZED ON TIME` | la banque a reçu une demande d'autorisation du marchand dans les 3 minutes qui ont suivi la génération de la carte |
| `NOT_AUTHORIZED_ON_TIME` | la banque n'a reçu aucune demande d'autorisation du marchand même au bout de 3 minutes |
| `AUTHORIZED` | la banque a reçu une demande d'autorisation du marchand |
| `DEBITED` | la banque a reçu une demande de débit du marchand |
| `DEBITED_LOWER_AMOUNT` | la banque a reçu une demande de débit du marchand, pour un montant inférieur au montant autorisé |
| `DEBITED_GREATER_AMOUNT` | la banque a reçu une demande de débit du marchand, pour un montant supérieur au montant autorisé |
| `NOT DEBITED` | la banque a reçu une demande de débit du marchand, pour un montant supérieur au montant autorisé |
| `CREDITED` | la banque a reçu une demande de crédit du marchand |

* **Echéances**
  
  - Pour un paiement fractionné, vous trouverez la liste des échéances avec les dates, montants et statuts associés :
![Capture_PurchaseDetailEcheance.png](https://pledg-assets.s3-eu-west-1.amazonaws.com/ecard-plugin-doc/dashboard/fr/Capture_PurchaseDetailEcheance.png)
  - Pour un paiement différé, vous trouverez l'échéance avec sa date, montant et statut associé :
![Capture_PurchaseDetailEcheance_2.png](https://pledg-assets.s3-eu-west-1.amazonaws.com/ecard-plugin-doc/dashboard/fr/Capture_PurchaseDetailEcheance_2.png)

* **Les remboursements / Refunds**

Des remboursements partiels ou en totalité peuvent être faits sur un paiement. Vous avez la possibilité de suivre l'état des remboursements ou de procéder à une demande de remboursement pour les comptes paramétrés en mode transfert.

![Capture_PurchaseDetailRefund.png](https://pledg-assets.s3-eu-west-1.amazonaws.com/ecard-plugin-doc/dashboard/fr/Capture_PurchaseDetailRefund.png)

Si des remboursements ont été faits, la liste des opérations de remboursement est affichée.

![Capture_Refund_List.png](https://pledg-assets.s3-eu-west-1.amazonaws.com/ecard-plugin-doc/dashboard/fr/Capture_Refund_List.png)

Pour procéder au remboursement d'un client, le fonctionnement est différent entre les modes utilisant une carte virtuelle (`front` et `back`) et le mode `transfer` :

* Mode `front` et `back` (avec carte virtuelle) : connectez-vous à votre PSP (Prestataire de Service de Paiement) et recréditez la carte virtuelle ; la carte bancaire du client sera recréditée par la suite
* Mode `transfer` : la demande de remboursement se fait depuis le dashbord Pledg :

    - Cliquez sur le bouton "Demander un remboursement"
    - Renseignez le montant que vous voulez rembourser
    - Cliquez sur "Demander un remboursement" ; une notification vous indiquera que le remboursement a été pris en compte

![Capture_Refund_Demande.png](https://pledg-assets.s3-eu-west-1.amazonaws.com/ecard-plugin-doc/dashboard/fr/Capture_Refund_Demande.png)

**Remarques concernant le mode `transfer`**
::: tip
Pour rembourser la **totalité** de la commande d'un client, il faut que vous renseignez le montant total de la commande du client ; Si vous renseignez le montant correspondant aux échéances prélevées, cela correspondra à un remboursement partiel et les autres échéances seront débitées.
Pour rembourser **partiellement** une commande d'un client, renseignez le montant que vous voulez rembourser. Cette demande partielle ne produira pas forcément un crédit sur la carte bancaire du client. Le montant que vous voulez rembourser réduira ou annulera en priorité les échéances de prélèvement les plus lointaines du client.
:::

::: tip
Les remboursements sont généralement effectifs a **J+1** et apparaitrons à ce moment là dans la liste des remboursements du paiement dans le dashboard.
:::

## Consultation des derniers virements

Pour les comptes configurés en mode `transfer`, à savoir un virement quotidien est envoyé au marchand d'un montant correspondant à l'ensemble des commandes de la journée, la liste des virements effectués est consultable.

Cette section vous permet de réconcilier le paiement de vos commandes avec les virements que vous recevez sur votre compte bancaire.

![Capture_DerniersVirements_Red.png](https://pledg-assets.s3-eu-west-1.amazonaws.com/ecard-plugin-doc/dashboard/fr/Capture_DerniersVirements_Red.png)

Informations:

* Montant : le montant du virement
* Statut : `sent` lorsque le virement a bien été émis
* Reference : la référence du virement transmise
* Date : la date du virement

Cliquez sur le bouton "Tout afficher" pour voir la liste de tous les virements. Vous pouvez alors consulter le détail d'un virement avec la liste des commandes concernées.

![Capture_DerniersVirements_Details_Red.png](https://pledg-assets.s3-eu-west-1.amazonaws.com/ecard-plugin-doc/dashboard/fr/Capture_DerniersVirements_Details_Red.png)

Dans la section des "Paiements", vous pouvez consulter la liste de commandes correspondantes ainsi que la référence que vous avez transmise à Pledg.

Lorsque le montant est négatif, cela correspond à un remboursement. Quand vous procédez à une demande de remboursement, nous prélevons le montant du remboursement sur votre compte bancaire puis créditons la carte bancaire du client.

Si vous avez des questions francois.delaitre@pledg.co 👋
