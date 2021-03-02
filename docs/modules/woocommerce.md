# Installation Woocommerce - Pledg

## Etape 1 - Création du compte

### Option copilote

1. Nous configurons votre compte pour vous(vous pouvez prendre rendez-vous [ici](https://pledg.co/prenez-rendez-vous/))
2. Nous vous envoyons votre identifiant de compte (`merchant_uid`)

### Option self-service

1. Vous [créez votre compte](https://staging.dashboard.ecard.pledg.co/#/)
2. Vous relevez votre identifiant de compte (`merchant_uid`) sur votre [dashboard](https://staging.dashboard.ecard.pledg.co/#/)

## Etape 2 - Désinstallation (optionnelle)

Avant de refaire l'installation, une désinstallation complète du module est nécessaire.

* Sauvegarder votre paramétrage: avant de procéder à la désinstallation nous vous conseillons de sauvegarder votre paramétrage.
  - Allez dans WooCommerce > Settings et cliquez sur l'onglet "Payments" et copiez vos identifiants (`merchant_uid`) pour chaque mode de paiement.

* Désinstaller le module
  - Allez dans le gestionnaire des modules en cliquant sur Plugins > Installed Plugins dans le menu.
  - Recherchez le module Pledg.
  - Cliquez sur "Desactivate" en bleu.
  - Cliquez sur "Delete" en rouge.
  - Confirmez la désinstallation ; une notification vous informera que le "**WooCommerce Pledg** was successfully deleted".

![Capture_Desinstallation_Red.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/b37f7c9b-f71e-48d0-97a4-6ad77392bdc0/Capture_Desinstallation_Red.PNG)

## Etape 3 - Installation

- Téléchargez le module WooCommerce de Pledg

  https://github.com/pledgcorporate/ecard-woocommerce/archive/master.zip
  
Récupérez l'archive telle quelle, puis :

- Ajoutez le module dans WordPress
  - Allez dans gestionnaire des modules via le menu "Extensions > Ajouter", et cliquez sur "Charger un module".
  - Cliquez sur "Téléverser une extension".
  - Sélectionnez l'archive que vous venez de récupérer avec le lien ci-dessus (au format zip) et cliquez sur le bouton "Installer Maintenant".

![Capture_Install_Red.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/8081223d-fb75-48ee-8d4a-58b34ee9584a/Capture_Install_Red.PNG)

    - Puis cliquez sur le bouton "Activer" ; une notification vous indiquera "Module activé"

![Capture_InstallActivate_Red.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/b613da20-e592-44a2-9d35-81dd87048315/Capture_InstallActivate_Red.PNG)

## Étape 4 - Configuration

🔧 Sur votre Back Office Woocommerce, vous pouvez ajouter les différents moyens de paiements Pledg.

Pour cela, allez dans Woocommerce > Réglages > Paiements où vous trouverez la liste des moyens de paiement Pledg que vous pouvez paramétrer.

![Capture_ConfigurationList_Red.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/afd77fdf-ef64-4a90-90b6-4a7da4e1b80c/Capture_ConfigurationList_Red.PNG)

Pour chacun de vos identifiant de compte (`merchant_uid`), configurer une méthode Pledg. Ceux que vous avez configurés et activés apparaitront dans les moyens de paiement disponibles pour le client.

🔖 Cliquez sur le bouton "Gérer" et complétez les informations, puis cliquez une sur le bouton "Enregistrer les modifications" ; une notification vous informera que "Vos réglages ont été enregistrés":

![FillPayment.png](https://pledg-assets.s3-eu-west-1.amazonaws.com/ecard-plugin-doc/module/WooCommerce/FillPayment.png)

Description des champs :

- Activer/Désactiver : oui si vous voulez activer ce mode paiement.
- Mode développement/Mode production : oui si vous voulez mettre ce mode de paiement en production.
- Merchant ID [Obligatoire] : votre identifiant Merchant ID associé au mode de paiement (communiqué par Pledg).
- Secret Key : Clé secrète de sécurisation des données de paiement (communiquée par Pledg). 
- Titre : Langue pour laquelle vous souhaitez définir le titre ci-dessous.
- Titre ([LangueSélectionnéeCiDessus]) : le titre du moyen de paiement pour la langue sélectionnée ; ce titre apparaîtra à l'utilisateur (exemple : "Payez en 3x"). [Obligatoire]
- Description : Langue pour laquelle vous souhaitez définir la description ci-dessous.
- Description ([LangueSélectionnéeCiDessus]) : la description de votre paiement.
- Montant minimum de commande : panier minimum à partir duquel le mode de paiement sera proposé au client.
- Montant maximum de commande : panier maximum au-delà duquel le mode de paiement ne sera proposé plus au client (indiquer "0" pour ne pas fixer de maximum).

⚠️ Le nombre de moyens de paiement Pledg maximum est de 6.

## Etape 5 - CSS (optionnel)

Si la taille des icônes en face de vos modes de paiement Pledg est trop grande, rajoutez un morceau de code CSS selon la procédure suivante :

1. Cliquez sur "Apparence" dans le menu de gauche, puis "Personnaliser":

![VersCss.PNG](https://pledg-assets.s3-eu-west-1.amazonaws.com/ecard-plugin-doc/module/WooCommerce/VersCss.png)

2. Sur la page nouvellement apparue, un nouveau menu s'affiche à gauche, cliquez sur "CSS additionnel" :

![CssAdditionnel.PNG](https://pledg-assets.s3-eu-west-1.amazonaws.com/ecard-plugin-doc/module/WooCommerce/CssAdditionnel.png)

3. Copier / coller ce morceau de code [1] :
	
	ul.payment_methods li img {
    vertical-align: middle;
    margin: -2px 0 0 .5em;
    padding: 0;
    position: relative;
    box-shadow: none;
    max-width: 23Px;
	}
	
Puis cliquez sur "Publier" [2] :

![CssSetting.PNG](https://pledg-assets.s3-eu-west-1.amazonaws.com/ecard-plugin-doc/module/WooCommerce/CssSetting.png)

## Etape 6 - Test

Réalisez un test complet dans votre environnement :

- Remplissez votre panier avec des articles
- Procédez au paiement
- Vérifiez dans l'interface "WooCommerce > Orders" de l'administration que votre commande de test soit bien présente dans la liste.

![Capture_Test_Red.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/bb81c96a-ad11-4675-9faa-43b69431bb3c/Capture_Test_Red.PNG)

Si vous avez des questions francois.delaitre@pledg.co 👋
