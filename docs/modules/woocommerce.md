# Intégration Woocommerce - Pledg

Procédure à suivre pour l'intégration du module Woocommerce

## **Étape 1 **

1. Nous configurons votre compte
1. Nous vous envoyons votre/vos <mark>Merchant ID</mark>

## Etape 2 - Désinstallation (optionnelle)

Avant de refaire l'installation, une désinstallation complète du module est nécessaire.

- Sauvegarder votre paramétrage: avant de procéder à la désinstallation nous vous conseillons de sauvegarder votre paramétrage.
  - Allez dans WooCommerce > Settings et cliquez sur l'onglet "Payments" ; Copiez vos identifiants MerID ... pour chaque mode de paiement.

* Désinstaller le module
  - Allez dans le gestionnaire des modules en cliquant sur Plugins > Installed Plugins dans le menu.
  - Recherchez le module Pledg.
  - Cliquez sur "Desactivate" en bleu.
  - Cliquez sur "Delete" en rouge.
  - Confirmez la désinstallation ; notification vous informera que le "**WooCommerce Pledg** was successfully deleted".

![Capture_Desinstallation_Red.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/b37f7c9b-f71e-48d0-97a4-6ad77392bdc0/Capture_Desinstallation_Red.PNG)

## **Etape 3 - Installation**

- Téléchargez le module Prestashop de Pledg

  https://github.com/pledgcorporate/ecard-woocommerce/archive/master.zip

* Préparez l'archive
  - Décompressez l'archive téléchargée.
  - Renommez le répertoire en "woocommerce_pledg" (attention pas de majuscules).
  - Recompressez l'archive.

- Ajoutez le module dans WordPress
  - Allez dans gestionnaire des modules via le menu "Plugins > Add new" et cliquez sur "Charger un module".
  - Cliquez sur "Upload Plugin".
  - Sélectionnez l'archive "woocommerce_pledg" au format zip et cliquez sur le bouton "Install Now".

![Capture_Install_Red.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/8081223d-fb75-48ee-8d4a-58b34ee9584a/Capture_Install_Red.PNG)

    - Puis cliquez sur le bouton "Activate Plugin" ; une notification vous indiquera "Plugin activated."

![Capture_InstallActivate_Red.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/b613da20-e592-44a2-9d35-81dd87048315/Capture_InstallActivate_Red.PNG)

## **Étape 4 - Configuration**

🔧 Sur votre Back Office Woocommerce, vous pouvez ajouter les différents moyens de paiements Pledg.

Pour cela, allez dans Woocommerce > Setting > Payments où vous trouverez la liste des moyens de paiement Pledg que vous pouvez paramétrer.

![Capture_ConfigurationList_Red.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/afd77fdf-ef64-4a90-90b6-4a7da4e1b80c/Capture_ConfigurationList_Red.PNG)

Pour chacun de vos MerchantID, configurer une méthode Pledg. Ceux que vous avez configuré et activé apparaitront dans la moyens de paiement disponibles pour le client.

🔖 Cliquez sur le bouton "Set Up" et complétez les informations, puis cliquez une sur le bouton "Save changes" ; un notification vous informera que "Your settings have been saved.":

![Capture d’écran 2020-05-18 à 16.27.04.png](https://storage.googleapis.com/slite-api-files-production/files/4668dda5-7a5f-4ea3-8bd5-fdc26710f20d/Capture%2520d%25u2019e%25u0301cran%25202020-05-18%2520a%25u0300%252016.27.04.png)

<u>Description des champs : </u>

- Titre (obligatoire) : le titre du moyen de paiement ; ce titre apparaîtra à l'utilisateur (exemple : "Payez en 3x").
- Activer/Désactiver : oui si vous voulez activer ce mode paiement.
- Mode développement/Mode production : oui si vous voulez mettre ce mode de paiement en production.
- Marchant ID (obligatoire) : votre identifiant Marchant ID associé au mode de paiement (communiqué par Pledg).
- Description : la description de votre paiement.

⚠️ Le nombre de moyens de paiement Pledg maximum est de 6.

## Etape 5 - Test

Réalisez un test complet dans votre environnement :

- Remplissez votre panier avec des articles
- Procédez au paiement
- Vérifiez dans l'interface "WooCommerce > Orders" de l'administration que votre commande de test soit bien présente dans la liste.

![Capture_Test_Red.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/bb81c96a-ad11-4675-9faa-43b69431bb3c/Capture_Test_Red.PNG)

Si vous avez des questions francois.delaitre@pledg.co 👋

2020-11-16
