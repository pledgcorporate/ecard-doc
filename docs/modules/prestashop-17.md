# Intégration Prestashop v17 - Pledg

Procédure à suivre pour l'intégration du module Prestashop v17 (version avril 2020)

## **Étape 1 **

1. Nous configurons votre compte
1. Nous vous envoyons votre/vos <mark>Merchant ID</mark>

## Etape 2 - Désinstallation (optionnelle)

Avant de refaire l'installation, une désinstallation complète du module est nécessaire.

- Sauvegarder votre paramétrage: avant de procéder à la désinstallation nous vous
  conseillons de sauvegarder votre paramétrage.
  - Cliquez dans le menu sur "Pledg - Paiements" et copiez vos identifiants
    MerID ... pour chaque mode de paiement.

* Désinstaller le module
  - Allez dans le gestionnaire des modules en cliquant sur "Modules"
    dans le menu.

  - Recherchez le module Pledg.

  - Cliquez sur le bouton vert "Desactiver".

  - Cliquez sur le sous-menu à côté du bouton "Activer" et cliquez sur
    "Désinstaller".

  - Confirmez la désinstallation ; notification vous informera que le "Module(s)

  - désinstallé(s) avec succès".

![EN_Capture_UninstallModule_Red.png](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/ebe6737d-5722-4974-b2d9-b1306a230cb0/EN_Capture_UninstallModule_Red.png)

⚠️ Avant de procéder à la réinstallation du module Pledg, il faut vider le cache du

Prestashop. Pour cela, allez dans "Paramètres avancés"/"Performances" puis cliquez

sur "Vider le cache".

![EN_Capture_ClearCache_Red.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/9d637eaa-45a7-4303-9183-fa094a0cba27/EN_Capture_ClearCache_Red.PNG)

## **Etape 3 - Installation**

- Téléchargez le module Prestashop de Pledg

  https://github.com/pledgcorporate/ecard-prestashop1.7/archive/master.zip

* Préparez l'archive

  - Décompressez l'archive téléchargée.

  - Renommez le répertoire en "pledg" (attention pas de majuscules).

  - Recompressez l'archive.

- Ajoutez le module dans Prestashop
  - Allez dans gestionnaire des modules via le menu "Modules" et cliquez sur "Charger un module".

  - Sélectionnez l'archive "pledg" au format zip ; une notification vous indiquera que "Le module a bien été
    téléchargé".

![EN_Capture_AddModule_Red.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/a2af32d8-f3b3-4aee-970c-5c63f2ccf8be/EN_Capture_AddModule_Red.PNG)

Le module sera automatiquement activé et apparaitra dans la section "PLUS" du menu.

## **Étape 4 - Configuration **

🔧 Sur votre Back Office Prestashop, vous pouvez ajouter les différents moyens de paiements Pledg.

Allez dans détails > Pledg - Paiements.

🔖 **Compléter les informations **:

![Capture d’écran 2020-04-14 à 11.34.11.png](https://storage.googleapis.com/slite-api-files-production/files/558407ef-2e0e-4a6d-a7e0-b3a40d6c9745/Capture%2520d%25u2019e%25u0301cran%25202020-04-14%2520a%25u0300%252011.34.11.png)

<u>Description des champs :
</u>

- Titre (obligatoire) : le titre du moyen de paiement ; ce titre apparaîtra à
  l'utilisateur (exemple : "Payez en 3x").
- Activer le paiement : oui si vous voulez activer ce mode paiement.
- Mode production : oui si vous voulez mettre ce mode de paiement en
  production.
- Marchant ID (obligatoire) : votre identifiant Marchant ID associé au mode de
  paiement (communiqué par Pledg).
- Description : la description de votre paiement.

⚠️ Les moyens de paiement Pledg s'afficheront sur votre page de paiement dans **l'ordre dans lequel vous les avez ajoutés**.

## Etape 5 - Test

Réalisez un test complet dans votre environnement :

- Remplissez votre panier avec des articles
- Procédez au paiement
- Vérifiez dans l'interface "Commandes" de l'administration que votre commande de test soit bien présente dans la liste.

![Capture_TestPaiement_Red.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/1be289ee-6a00-4d4f-807d-a68ae5e2a4ef/Capture_TestPaiement_Red.PNG)

Si vous avez des questions francois.delaitre@pledg.co 👋

2020-11-13
