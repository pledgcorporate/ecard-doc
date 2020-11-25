# Installation Magento v2 - Pledg

## Etape 1 - Création du compte

### Option copilote

1. Nous configurons votre compte pour vous (vous pouvez prendre rendez-vous [ici](https://pledg.co/prenez-rendez-vous/))
2. Nous vous envoyons votre identifiant de compte (`merchant_uid`)

### Option self-service

1. Vous [créez votre compte](https://staging.dashboard.ecard.pledg.co/#/)
2. Vous relevez votre identifiant de compte (`merchant_uid`) sur votre [dashboard](https://staging.dashboard.ecard.pledg.co/#/)

## Etape 1bis - Désinstallation (optionnelle)

Vous pouvez désinstaller le module via Composer de PHP ou via SSH

### Via PHP

- En cours de rédaction

### Via SSH

- Ouvrez une connexion ssh dans un terminal.

```bash
ssh -i [ma_clé_privé] [user]@[host]
```

- Désactivez le module.

```bash
sudo su
cd [Magento root folder]app/code
bin/magento module:disable --clear-static-content Pledg_PledgPaymentGateway
```

- Supprimez le module

```bash
rm -rf app/code/Pledg
```

## Étape 2 : installation du module 📥

Vous pouvez installer le module soit via Composer de PHP ou via la CLI Magento.

### Via Composer

En cours de rédaction

### Via la CLI Magento

- Dézipper le [fichier](https://drive.google.com/file/d/1abfuNdlFyX0UhfMaaqBUkW12LOUQVoTx/view?usp=sharing) dans le répertoire _app/code_
Le code doit impérativement se trouver dans le répertoire _app/code/Ginidev/PledgPaymentGateway\_ pour que les étapes suivantes fonctionnent.
- Installer le module

```bash
php bin/magento setup:upgrade
php bin/magento setup:static-content:deploy fr_FR -f
```

- En ligne de commande, vérifiez que le module a été correctement installé

```bash
>>> php bin/magento module:status Ginidev_PledgPaymentGateway
Module is enabled
```

## Étape 3 : Configurer votre boutique Magento 🔧

Dans l'interface d'administration de Magento :

- Allez dans `Stores > Configuration > Sales > Payment methods > Other payment methods`.

![Capture_Configuration_Red.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/9b0546e5-10c0-4b6a-b2c4-e309e1047231/Capture_Configuration_Red.PNG)

- Paramétrez la Configuration générale

![Capture_ConfigurationGénérale.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/16e667a2-eb4c-4f5e-b600-a2fe489ca846/Capture_ConfigurationG%C3%A9n%C3%A9rale.PNG)

_Pensez à activer ou désactiver le staging en fonction de l’environnement_ ✏️

- Paramétrez vos différentes solutions de paiement

Par exemple, si vous avez 3 solutions de paiement, paramétrez la 1ère, 2ième et 3ième Solution de paiement en utilisant le `merchant_uid` pour chacune d'entre elles.

![Capture_PremiereSolutionDePaiement.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/54edf463-d291-4008-a45f-731899e9b0a4/Capture_PremiereSolutionDePaiement.PNG)

- Sauvegardez la configuration en cliquant sur le bouton "Save Config"
- Videz le cache de Magento
  - Allez dans System > Cache management et cliquez sur le bouton "Flush Magento Cache".
  - Attenez jusqu'à avoir la notification "The Magento cache storage has been flushed.".

![Capture_FlushCache_Red.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/ee4d282d-2123-4884-a445-a63d9c0a6b2a/Capture_FlushCache_Red.PNG)

- [x] Il conviendra de vider le cache pour la bonne prise en compte des modifications (dans la cli, `php bin/magento cache:flush`.

## Étape 4 : Tester le checkout 🔦

Réalisez un test complet dans votre environnement :

- Remplissez votre panier avec des articles
- Procédez au paiement
- Vérifiez dans l'interface SALES > ORDERS de l'administration que votre commande de test soit bien présente dans la liste.

![Capture_TestCHeckout.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/1c1b2417-7ff4-4321-8ff1-cdb4a9934d4a/Capture_TestCHeckout.PNG)

## NB : Installation via Composer 🔦

Pour l'installation via composer, voir le [Readme](https://github.com/pledgcorporate/ecard-magento)

Si vous avez des questions francois.delaitre@pledg.co 👋
