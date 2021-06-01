# Installation Prestashop v16 - Pledg

## Etape 1 - Création du compte

### Option copilote

1. Nous configurons votre compte pour vous (vous pouvez prendre rendez-vous [ici](https://pledg.co/prenez-rendez-vous/))
2. Nous vous envoyons votre identifiant de compte (`merchant_uid`)

### Option self-service

1. Vous [créez votre compte](https://staging.dashboard.ecard.pledg.co/#/)
2. Vous relevez votre identifiant de compte (`merchant_uid`) sur votre [dashboard](https://staging.dashboard.ecard.pledg.co/#/)

## Etape 1bis - Désinstallation (optionnelle)

Avant de refaire l'installation, une désinstallation complète du module est nécessaire.

- Désinstaller le module
  - Allez dans le gestionnaire des modules en cliquant sur "Modules et services" dans le menu.
  - Recherchez le module Pledg.
  - Cliquez sur le bouton vert "Desactiver".
  - Cliquez sur le sous-menu à côté du bouton "Activer" et cliquez sur "Supprimer".
  - Confirmez la suppression ; une notification vous informera que le "Module(s) désinstallé(s) avec succès" et vous ne devriez plus voir les paiements Pledg dans le menu de gauche.

![Capture_UnInstallModule_Red.png](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/9010e5b6-d143-4f3d-98e0-a32a7580f16b/Capture_UnInstallModule_Red.png)

![UninstallModule.png](https://pledg-assets.s3-eu-west-1.amazonaws.com/ecard-plugin-doc/module/Prestashop1.6/UnintallModule.png)

⚠️ Avant de procéder à la réinstallation du module Pledg, il faut vider le cache du Prestashop. Pour cela, allez dans "Paramètres avancés"/"Performances" puis cliquez sur "Vider le cache".

![Capture_ViderLeCache_Red.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/061493f9-70f4-4ecb-9b62-5cc5a694149e/Capture_ViderLeCache_Red.PNG)

## Etape 2 - Installation

- Téléchargez le [module Prestashop de Pledg](https://github.com/pledgcorporate/ecard-prestashop1.6/archive/master.zip)

- Préparez l'archive
  - Décompressez l'archive téléchargée.
  - Renommez le répertoire en "pledg" (**attention pas de majuscules**).
  - Recompressez l'archive (vous devez obtenir une archive "pledg.zip", qui contient un répertoire "pledg", qui contient les resources du module).

- Ajoutez le module dans Prestashop
  - Allez dans "Modules et services" et cliquez sur "Ajouter un nouveau module".
  - Sélectionnez l'archive "pledg" au format zip et cliquez sur "Chargez le module" ; une notification vous indiquera que "Le module a bien été téléchargé".

![Capture_AddNewModule_Red.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/996e5b89-f14f-4ba5-990c-03c20859f9ad/Capture_AddNewModule_Red.PNG)

- Installez le module Pledg
  - Recherchez le module Pledg dans la liste des modules.
  - Cliquez sur le bouton "installer".

![Capture_InstallNewModule_Red.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/218d8a4e-4833-4939-b8c1-be48b055f499/Capture_InstallNewModule_Red.PNG)

- Cliquez sur le bouton "Continuer l'installation" ; une notification vous indiquera "Module(s) installé(s) avec succès".

![Capture_InstallNewModule_Confirmation_Red.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/069c0740-ed5b-48a6-a5ce-b9217b3492ac/Capture_InstallNewModule_Confirmation_Red.PNG)

Une fois l'installation terminée, un nouvel élément "Pledg - Paiements" doit apparaitre dans les menus de Prestashop.

![Capture_InstalledNewModule_Red.png](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/14e75310-7192-4534-8fa7-70a23cd749aa/Capture_InstalledNewModule_Red.png)

## Étape 3 - Configuration

🔧 Sur votre Back Office Prestashop, vous pouvez ajouter les différents moyens de paiements Pledg.

- allez dans Pledg - Paiements :

![Capture_InstalledNewModule_Red.png](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/b1170405-f81d-4eee-8f9f-06d806346703/Capture_InstalledNewModule_Red.png)

- ajoutez un mode de paiement :

![Capture_ConfigurationAddPaiment_Red.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/bdd07499-d20b-4ab7-b7d4-0b8fbc2b557b/Capture_ConfigurationAddPaiment_Red.PNG)

- complétez les informations :

![FillNewPayment.png](https://pledg-assets.s3-eu-west-1.amazonaws.com/ecard-plugin-doc/module/Prestashop1.6/FillNewPayment.png)
    - Remplissez les champs.
    - Cliquez sur le bouton "Enregistrer" ; une notification vous indiquera "Création réussie".
    - Répétez l'opération d'ajout pour tous vos modes de paiements Pledg.

Description des champs :

    - Titre (obligatoire) : le titre du moyen de paiement ; ce titre apparaîtra à l'utilisateur (exemple : "Payez en 3x").
    - Activer le paiement : oui si vous voulez activer ce mode paiement.
    - Mode production : oui si vous voulez mettre ce mode de paiement en production.
    - Marchant ID (obligatoire) : votre identifiant Marchant ID associé au mode de paiement (communiqué par Pledg).
    - Secret : Clé secrète de sécurisation des données de paiement (communiquée par Pledg et identique pour tous vos modes de paiement).
	- Minimum : Montant d'achat minimum permettant à vos utilisateurs de payer avec ce mode de paiement.
	- Maximum : Montant au delà duquel vos utilisateurs ne peuvent pas payer avec ce mode de paiement (si pas de plafond souhaité, indiquer 0).
	- Icône : Permet de télécharger une icône que vos utilisateurs verront à côté de ce mode de paiement.
    - Description : la description de votre paiement.
	- Position : ordre de priorité pour l'affichage de vos différents modes de paiement Pledg.

⚠️ Les moyens de paiement Pledg s'afficheront sur votre page de paiement dans **l'ordre dans lequel vous les avez ajoutés**.

## Etape 4 - Test

Réalisez un test complet dans votre environnement :

- Remplissez votre panier avec des articles
- Procédez au paiement
- Vérifiez dans l'interface "Commandes" de l'administration que votre commande de test soit bien présente dans la liste.

![Capture_TestCommande_Red.png](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/5a348b10-bce0-4e62-ac69-004dba37793f/Capture_TestCommande_Red.png)

Si vous avez des questions francois.delaitre@pledg.co 👋
