# Installation Magento v2 - Pledg

## Etape 1 - Création du compte

### Option copilote

1. Nous configurons votre compte pour vous (vous pouvez prendre rendez-vous [ici](https://pledg.co/prenez-rendez-vous/))
2. Nous vous envoyons votre identifiant de compte (`merchant_uid`)

### Option self-service

1. Vous [créez votre compte](https://staging.dashboard.ecard.pledg.co/#/)
2. Vous relevez votre identifiant de compte (`merchant_uid`) sur votre [dashboard](https://staging.dashboard.ecard.pledg.co/#/)


## Etape 2 - Installation

L'installation, la mise à jour et la désinstallation du module se font via Composer de PHP.

Avant d'exécuter les commandes, il faut se connecter en SSH au serveur et se positionner dans le répertoire racine de Magento.

Dans cet exemple, le dossier racine est /var/www/magento

![image](https://user-images.githubusercontent.com/79847865/119630138-f38f3380-be0e-11eb-9256-29093d127dd3.png)

### Installation

Les commandes à exécuter sont les suivantes :

```bash
composer require pledg/module-pledg-payment-gateway
php bin/magento module:enable Pledg_PledgPaymentGateway --clear-static-content
php bin/magento setup:upgrade
php bin/magento setup:di:compile
php bin/magento setup:static-content:deploy <languages>
php bin/magento cache:clean
```

### Mise à jour

```bash
composer update pledg/module-pledg-payment-gateway
php bin/magento setup:upgrade
php bin/magento setup:di:compile
php bin/magento setup:static-content:deploy <languages>
php bin/magento cache:clean
```

### Désinstallation

```bash
php bin/magento module:disable Pledg_PledgPaymentGateway
composer remove pledg/module-pledg-payment-gateway
```

## Étape 3 : Configurer votre boutique Magento 🔧

Dans l'interface d'administration de Magento :

- Allez dans `Stores > Configuration > Sales > Payment methods > Other payment methods`.

![Capture_Configuration_Red.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/9b0546e5-10c0-4b6a-b2c4-e309e1047231/Capture_Configuration_Red.PNG)

- Paramétrez la Configuration générale

![image](https://user-images.githubusercontent.com/79847865/119631763-7c5a9f00-be10-11eb-80c2-bf73092ae13c.png)

Si il s'agit d'un environement de dev/test, il faut activer le staging. Les requêtes seront automatiquement dirigées vers les serveurs de test de Pledg.

- Paramétrez vos différentes solutions de paiement

L'écran de configuration d'un moyen de paiement Pledg est le suivant :
![image](https://user-images.githubusercontent.com/79847865/119632208-e3785380-be10-11eb-9687-821304175c3d.png)

Nous allons documenter l'usage de chaque champ :

- Enabled : permet de spécifier si le moyen de paiement est activé, c'est à dire si il est proposé au client sur la page de paiement.
- Title/description : Libellé et description du moyen de paiement qui seront affichés au client sur la page de paiement.
- Logo : permet de télécharger un logo qui sera affiché sur la page de paiement au niveau du moyen de paiement.
- Merchant UID mapping : Pour chaque pays pour lequel le moyen de paiement est activé, il faut renseigner le merchant_uid correspondant. Pledg vous transmet un merchant_uid par pays configuré.
- secret key : Il s'agit de la clé secrète utilisée pour signer les échanges entre le site marchand et Pledg. Pledg transmet au marchand le secret à renseigner.
- Minimum order amount to activate payment method : Permet de définir un montant minimum en dessous duquel le moyen de paiement n'est pas proposé au client.
- Maximum order amount to activate payment method : Permet de définir un montant maximum au delà duquel le moyen de paiement ne sera pas proposé au client.
- Sort order : il s'agit d'un entier permettant de configurer dans quel ordre seront proposés les moyens de paiement sur la page de paiement.

Une fois tout les champs renseignés, sauvegarder la configuration (bouton "Save Config" en haut à droite de l'écran).

### Troubleshooting

Si les modifications de la configuration du moyen de paiement ne sont pas prises en compte, il faut vider le cache de Magento
  - Allez dans System > Cache management et cliquez sur le bouton "Flush Magento Cache".
  - Attenez jusqu'à avoir la notification "The Magento cache storage has been flushed.".

![Capture_FlushCache_Red.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/ee4d282d-2123-4884-a445-a63d9c0a6b2a/Capture_FlushCache_Red.PNG)

- Si le problème persiste, se connecter en SSH au serveur, se positionner dans le dossier racine de Magento et exétuter la commande :

`php bin/magento cache:clean`

## Étape 4 : Tester le checkout 🔦

Réalisez un test complet dans votre environnement :

- Remplissez votre panier avec des articles
- Procédez au paiement
- Vérifiez dans l'interface SALES > ORDERS de l'administration que votre commande de test soit bien présente dans la liste.

![Capture_TestCHeckout.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/1c1b2417-7ff4-4321-8ff1-cdb4a9934d4a/Capture_TestCHeckout.PNG)

## NB : Installation via Composer 🔦

Pour l'installation via composer, voir le [Readme](https://github.com/pledgcorporate/ecard-magento)

Si vous avez des questions francois.delaitre@pledg.co 👋
