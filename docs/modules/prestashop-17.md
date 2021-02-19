# Intégration Prestashop v17 - Pledg

## Etape 1 - Création du compte

### Option copilote

1. Nous configurons votre compte pour vous (vous pouvez prendre rendez-vous [ici](https://pledg.co/prenez-rendez-vous/))
2. Nous vous envoyons votre identifiant de compte (`merchant_uid`)

### Option self-service

1. Vous [créez votre compte](https://staging.dashboard.ecard.pledg.co/#/)
2. Vous relevez votre identifiant de compte (`merchant_uid`) sur votre [dashboard](https://staging.dashboard.ecard.pledg.co/#/)

## Etape 2 - Désinstallation (optionnelle)

Avant de refaire l'installation, une désinstallation complète du module est nécessaire.

- Sauvegarder votre paramétrage: avant de procéder à la désinstallation nous vous
  conseillons de sauvegarder votre paramétrage : cliquez dans le menu sur "Pledg - Paiements" et copiez vos identifiants (`merchant_uid`) pour chaque mode de paiement.

- Désinstaller le module
  - Allez dans le gestionnaire des modules en cliquant sur "Modules"
    dans le menu.
  - Recherchez le module Pledg.
  - Cliquez sur le bouton vert "Desactiver".
  - Cliquez sur le sous-menu à côté du bouton "Activer" et cliquez sur
    "Désinstaller".
  - Confirmez la désinstallation : une notification vous informera "Module(s) désinstallé(s) avec succès".

![EN_Capture_UninstallModule_Red.png](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/ebe6737d-5722-4974-b2d9-b1306a230cb0/EN_Capture_UninstallModule_Red.png)

⚠️ Avant de procéder à la réinstallation du module Pledg, il faut vider le cache du Prestashop. Pour cela, allez dans "Paramètres avancés"/"Performances" puis cliquez sur "Vider le cache".

![EN_Capture_ClearCache_Red.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/9d637eaa-45a7-4303-9183-fa094a0cba27/EN_Capture_ClearCache_Red.PNG)

## Etape 3 - Installation

- Téléchargez le [module Prestashop de Pledg](https://github.com/pledgcorporate/ecard-prestashop1.7/archive/master.zip)

- Préparez l'archive
  - Décompressez l'archive téléchargée.
  - Renommez le répertoire en "pledg" (attention pas de majuscules).
  - Recompressez l'archive.

- Ajoutez le module dans Prestashop
  - Allez dans gestionnaire des modules via le menu "Modules" et cliquez sur "Charger un module".
  - Sélectionnez l'archive "pledg" au format zip ; une notification vous indiquera que "Le module a bien été
    téléchargé".

![EN_Capture_AddModule_Red.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/a2af32d8-f3b3-4aee-970c-5c63f2ccf8be/EN_Capture_AddModule_Red.PNG)

Le module sera automatiquement activé et apparaitra dans la section "PLUS" du menu.

## Étape 4 - Configuration

🔧 Sur votre Back Office Prestashop, vous pouvez ajouter les différents moyens de paiements Pledg.

 - Dans le menu de gauche, aller dans PLUS > Pledg - Paiements [1]. Vous obtenez l'écran tel qu'indiqué sur l'image ci-dessous, listant les modes de paiement déjà paramétrés.
 - Cliquer sur Ajouter paiement [2].

 ![AddPayment.png](https://pledg-assets.s3-eu-west-1.amazonaws.com/ecard-plugin-doc/module/Prestashop1.7/AddPayment.png)

🔖 Compléter les informations puis cliquer sur enregistrer :

![FillNewPayment.png](https://pledg-assets.s3-eu-west-1.amazonaws.com/ecard-plugin-doc/module/Prestashop1.7/FillNewPayment.png)

Description des champs :

- Titre (obligatoire) : le titre du moyen de paiement ; ce titre apparaîtra à l'utilisateur (exemple : "Payez en 3x").
- Paiement activé : activer / désactiver ce mode paiement.
- Mode production : oui si vous voulez mettre ce mode de paiement en production, non pour l'utiliser en test.
- Marchant ID (obligatoire) : votre identifiant Marchant ID associé au mode de paiement (communiqué par Pledg et commençant par "mer_").
- Secret : Clé secrète de sécurisation des données de paiement (communiquée par Pledg et identique pour tous vos modes de paiement).
- Minimum : Montant d'achat minimum permettant à vos utilisateurs de payer avec ce mode de paiement.
- Maximum : Montant au delà duquel vos utilisateurs ne peuvent pas payer avec ce mode de paiement (si pas de plafond souhaité, indiquer 0).
- Icône : Permet de télécharger une icône que vos utilisateurs verront à côté de ce mode de paiement.
- Description : la description de votre paiement.
- Position : ordre de priorité pour l'affichage de vos différents modes de paiement Pledg. 

## Etape 5 - Test

Réalisez un test complet dans votre environnement :

- Remplissez votre panier avec des articles
- Procédez au paiement
- Vérifiez dans l'interface "Commandes" de l'administration que votre commande de test soit bien présente dans la liste.

![Capture_TestPaiement_Red.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/1be289ee-6a00-4d4f-807d-a68ae5e2a4ef/Capture_TestPaiement_Red.PNG)

Si vous avez des questions francois.delaitre@pledg.co 👋
