# Prestashop 1.6

Procédure à suivre pour l'intégration du module Prestashop v16

## **Étape 1 **

1. Nous configurons votre compte Pledg
1. Nous vous envoyons votre/vos <mark>Merchant ID</mark> avec votre Secret

## Etape 2 - Désinstallation (optionnelle)

Avant de refaire l'installation, une désinstallation complète du module est nécessaire.

- Sauvegarder votre paramétrage: avant de procéder à la désinstallation nous vous conseillons de sauvegarder votre paramétrage.
  - Cliquez dans le menu sur "Pledg - Paiements" et copiez vos identifiants MerID, Secret ... pour chaque mode de paiement.

* Désinstaller le module
  - Allez dans le gestionnaire des modules en cliquant sur "Modules et services" dans le menu.
  - Recherchez le module Pledg.
  - Cliquez sur le bouton vert "Desactiver".
  - Cliquez sur le sous-menu à côté du bouton "Activer" et cliquez sur "Supprimer".
  - Confirmez la suppression ; notification vous informera que le "Module(s) désinstallé(s) avec succès".

![Capture_UnInstallModule_Red.png](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/9010e5b6-d143-4f3d-98e0-a32a7580f16b/Capture_UnInstallModule_Red.png)

![Capture_UnInstallModule2_Red.png](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/88772f17-8f58-4e8a-aa6b-c64765529aae/Capture_UnInstallModule2_Red.png)

⚠️ Avant de procéder à la réinstallation du module Pledg, il faut vider le cache du Prestashop. Pour cela, allez dans "Paramètres avancés"/"Performances" puis cliquez sur "Vider le cache".

![Capture_ViderLeCache_Red.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/061493f9-70f4-4ecb-9b62-5cc5a694149e/Capture_ViderLeCache_Red.PNG)

## **Etape 3 - Installation**

- **Téléchargez le module Prestashop de Pledg**

  https://github.com/pledgcorporate/ecard-prestashop1.6/archive/master.zip

* **Préparez l'archive **
  - Décompressez l'archive téléchargée.
  - Renommez le répertoire en "pledg" (**attention pas de majuscules**).
  - Recompressez l'archive.

- **Ajoutez le module dans Prestashop**
  - Allez dans "Modules et services" et cliquez sur "Ajouter un nouveau module".
  - Sélectionnez l'archive "pledg" au format zip et cliquez sur "Chargez le module" ; une notification vous indiquera que "Le module a bien été téléchargé".

![Capture_AddNewModule_Red.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/996e5b89-f14f-4ba5-990c-03c20859f9ad/Capture_AddNewModule_Red.PNG)

- **Installez le module Pledg**
  - Recherchez le module Pledg dans la liste des modules.
  - Cliquez sur le bouton "installer".

![Capture_InstallNewModule_Red.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/218d8a4e-4833-4939-b8c1-be48b055f499/Capture_InstallNewModule_Red.PNG)

    - Cliquez sur le bouton "Continuer l'installation" ; une notification vous indiquera que le "Module(s) installé(s) avec succès".

![Capture_InstallNewModule_Confirmation_Red.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/069c0740-ed5b-48a6-a5ce-b9217b3492ac/Capture_InstallNewModule_Confirmation_Red.PNG)

Une fois l'installation terminée, un nouvel élément "Pledg - Paiements" doit apparaitre dans les menus de Prestashop.

![Capture_InstalledNewModule_Red.png](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/14e75310-7192-4534-8fa7-70a23cd749aa/Capture_InstalledNewModule_Red.png)

## **Étape 4 - Configuration **

🔧 Sur votre Back Office Prestashop, vous pouvez ajouter les différents moyens de paiements Pledg.

- **Allez dans Pledg - Paiements :**

![Capture_InstalledNewModule_Red.png](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/b1170405-f81d-4eee-8f9f-06d806346703/Capture_InstalledNewModule_Red.png)

- **Ajoutez un mode de paiement :**

![Capture_ConfigurationAddPaiment_Red.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/bdd07499-d20b-4ab7-b7d4-0b8fbc2b557b/Capture_ConfigurationAddPaiment_Red.PNG)

- **Complétez les informations :**

![Capture_ConfigurationAddPaimentFields_Red.png](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/fd761524-04cc-421a-a68a-5c02dc4eb6e2/Capture_ConfigurationAddPaimentFields_Red.png)

    - Remplissez les champs.
    - Cliquez sur le bouton "Enregistrer" ; une notification vous indiquera "Création réussie".
    - Répétez l'opération d'ajout pour tous vos modes de paiements Pledg.

<u>Description des champs :</u>

    - Titre (obligatoire) : le titre du moyen de paiement ; ce titre apparaîtra à l'utilisateur (exemple : "Payez en 3x").
    - Activer le paiement : oui si vous voulez activer ce mode paiement.
    - Mode production : oui si vous voulez mettre ce mode de paiement en production.
    - Marchant ID (obligatoire) : votre identifiant Marchant ID associé au mode de paiement (communiqué par Pledg).
    - Secret  (obligatoire) : votre clé secrète permettant de certifier les paiements (communiquée par Pledg).
    - Description : la description de votre paiement.

⚠️ Les moyens de paiement Pledg s'afficheront sur votre page de paiement dans **l'ordre dans lequel vous les avez ajoutés**.

Si vous avez des questions clea@pledg.co 👋

2020-11-09
