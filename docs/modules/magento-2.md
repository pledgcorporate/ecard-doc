# Intégration Magento v2.4 - Pledg

Procédure à suivre pour l'intégration du module Magento

## **Étape 1 **

1. Nous configurons votre compte
1. Nous vous envoyons votre <mark>Merchant ID</mark>

## Etape 2 - Désinstallation (optionnelle)

Vous pouvez désinstaller le module via Composer de PHP ou via SSH

### Via PHP

- En cours de rédaction

### Via SSH

- Ouvrez une connexion ssh dans un terminal.

  - Exemple de commande :

    `ssh -i [ma_clé_privé] bitnami@3.248.210.54`

- Désactivez le module.

  - Commande :

    `sudo su`

    `cd /opt/bitnami/apps/magento/htdocs`

    `bin/magento-cli module:disable --clear-static-content Pledg_PledgPaymentGateway`

    `exit`

- Supprimez le module

  - Commande :

    `sudo rm -rf apps/magento/htdocs/app/code/Pledg`

## **Étape 2 : installation du module** 📥

Vous pouvez installer le module soit via Composer de PHP ou via SSH.

### Via PHP

- Dézipper le fichier dans le répertoire _app/code_

https://drive.google.com/file/d/1abfuNdlFyX0UhfMaaqBUkW12LOUQVoTx/view?usp=sharing

Le code doit impérativement se trouver dans le répertoire \_app/code/Ginidev/PledgPaymentGateway \_pour que les étapes suivantes fonctionnent.

- En ligne de commande exécutez cette commande :

`php bin/magento setup:upgrade`

- En ligne de commande exécutez cette commande :

`php bin/magento setup:static-content:deploy fr_FR -f`

- En ligne de commande, vérifiez que le module a été correctement installé

`$ php bin/magento module:status Ginidev_PledgPaymentGateway`

`Module is enabled`

### Via SSH

- Créez les répertoires Pledg/PledgPaymentGateway et copiez les fichiers contenus dans l'archive téléchargée.
- Compressez le répertoire Pledg et transférez le sur votre serveur Magento.
  - Exemple de commande : `scp -i [ma_clé_privé] Pledg.zip bitnami@3.248.210.54:Pledg.zip`
- Ouvrez une connexion ssh dans un terminal.
  - Exemple de commande : `ssh -i [ma_clé_privé] bitnami@3.248.210.54`
- Copiez et décompressez l'archive Pledg dans le répertoire app/code.

  - Commandes :

    `sudo cp Pledg.zip apps/magento/htdocs/app/code/`

    `cd apps/magento/htdocs/app/code/`

    `sudo unzip Pledg.zip`

- Installez le module.

  - Commandes :

    `sudo su`

    `cd /opt/bitnami/apps/magento/htdocs`

    `bin/magento-cli setup:upgrade`

    `bin/magento-cli setup:static-content:deploy fr_FR -f`

- Vérifiez l'installation.

  - Commande :

    `bin/magento-cli module:status Pledg_PledgPaymentGateway`

    La commande vous retourne "Module is enabled" si le module est bien installé.

Le module Pledg a été correctement installé.

## **Étape 3 : Configurer votre boutique Magento** 🔧

Dans l'interface d'administration de Magento :

- Allez dans `Stores > Configuration > Sales > Payment methods > Other payment methods`.

![Capture_Configuration_Red.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/9b0546e5-10c0-4b6a-b2c4-e309e1047231/Capture_Configuration_Red.PNG)

- Paramétrez la Configuration générale

![Capture_ConfigurationGénérale.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/16e667a2-eb4c-4f5e-b600-a2fe489ca846/Capture_ConfigurationG%C3%A9n%C3%A9rale.PNG)

_Pensez à activer ou désactiver le staging en fonction de l’environnement_ ✏️

- Paramétrez vos différentes solutions de paiement

Par exemple, si vous avez 3 solutions de paiement, paramétrez la 1ère, 2ième et 3ième Solution de paiement en utilisant le merID que nous avons communiqué pour chacune d'entre elles.

![Capture_PremiereSolutionDePaiement.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/54edf463-d291-4008-a45f-731899e9b0a4/Capture_PremiereSolutionDePaiement.PNG)

- Sauvegardez la configuration en cliquant sur le bouton "Save Config"

* Videz le cache de Magento
  - Allez dans SYSTEM > Cache management et cliquez sur le bouton "Flush Magento Cache".
  - Attenez jusqu'à avoir la notification "The Magento cache storage has been flushed."; après cette opération, tous les types de cache dans la liste doivent être au statut "ENABLED".

![Capture_FlushCache_Red.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/ee4d282d-2123-4884-a445-a63d9c0a6b2a/Capture_FlushCache_Red.PNG)

- [x] Il conviendra de vider le cache pour la bonne prise en compte des modifications (dans la cli, `php bin/magento cache:flush`.

## **Étape 4 : Tester le checkout \*\***🔦\*\*

Réalisez un test complet dans votre environnement :

- Remplissez votre panier avec des articles
- Procédez au paiement
- Vérifiez dans l'interface SALES > ORDERS de l'administration que votre commande de test soit bien présente dans la liste.

![Capture_TestCHeckout.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/1c1b2417-7ff4-4321-8ff1-cdb4a9934d4a/Capture_TestCHeckout.PNG)

## **NB : Installation via Composer \*\***🔦\*\*

Pour l'installation via composer, voir le Readme du paquet sur [https://github.com/pledgcorporate/ecard-magento](https://slack-redir.net/link?url=https%3A%2F%2Fgithub.com%2Fpledgcorporate%2Fecard-magento)   il suffit d'exécuter cette commande (dans le répertoire du projet) :

composer require pledg/module-pledg-payment-gateway:"dev-master"Attention toutefois à la version de PHP, Magento n'est pas encore compatible avec PHP 7.4.

Dans certain cas il faudra lancer Composer avec la bonne version de PHP, par exemple dans ma configuration cela donne ceci :

/usr/bin/php7.3 /usr/local/bin/composer require pledg/module-pledg-payment-gateway:"dev-master"

- A VOIR POUR STRIPE

🗝 Vous retrouverez les clés relatives à votre compte sur [Stripe](https://dashboard.stripe.com/dashboard) :

<mark>Accueil</mark> > <mark>Développeurs</mark> > <mark>Clé API</mark>

![Capture d’écran 2020-04-06 à 18.13.38.png](https://storage.googleapis.com/slite-api-files-production/files/9e1758f5-cecc-40ee-853f-ab61ac1b4885/Capture%2520d%25u2019e%25u0301cran%25202020-04-06%2520a%25u0300%252018.13.38.png)

Pour obtenir les clés publiques + secrète <mark>DEV</mark> cochez :

![Capture d’écran 2020-04-06 à 18.15.32.png](https://storage.googleapis.com/slite-api-files-production/files/1f4111c5-8f4b-4cda-aaa7-0de75792f71e/Capture%2520d%25u2019e%25u0301cran%25202020-04-06%2520a%25u0300%252018.15.32.png)

Si vous avez des questions francois.delaitre@pledg.co 👋

2020-11-16
