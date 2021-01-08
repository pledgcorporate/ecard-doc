# Lien de paiement

Pledg vous donne accès à une page qui vous permet de générer des liens de paiement. Vous pouvez transmettre ces liens aux acheteurs pour qu'ils vous règlent avec Pledg.

## Ouvrez la page de génération de lien

L'adresse de la [page de génération de lien de paiement](http://merchant.ecard.pledg.co/stand-alone-url-call-front-installment-payment.html?merchant_uid=mer_35c64fe7-aecc-469b-bbde-05c0d2572931&title=LIEN%20DE%20PAIEMENT&redirect_url=https://pledg.co&cancel_url=https://pledg.co) est :

`http://merchant.ecard.pledg.co/stand-alone-url-call-front-installment-payment.html?merchant_uid=[mer_uid]&title=LIEN%20DE%20PAIEMENT&redirect_url=https://pledg.co&cancel_url=https://pledg.co`

où [mer_uid] est votre identifiant de compte fourni à l'inscription.

Par défaut, les deux champs `redirect_url` et `cancel_url` sont initialisés avec l'URL de notre site https://pledg.co. 
Vous pouvez personnaliser ces champs avec les URLs de votre choix:
- redirect_url : le lien qui sera appelé après validation du paiement
- cancel_url : le lien qui sera appelé après annulation du paiement par le client

## Renseignez votre identifiant de compte

Renseignez votre identifiant de compte `mer_uid` en fonction du type de paiement choisi par l'acheteur.

::: tip
Attention à bien le **compléter et vérifier à chaque fois !** (ex ci-dessous)
:::

![Capture d’écran 2020-05-07 à 15.31.22.png](https://storage.googleapis.com/slite-api-files-production/files/9f93d846-b5ec-4017-8dee-0e2f3f6dab8f/Capture%2520d%25u2019e%25u0301cran%25202020-05-07%2520a%25u0300%252015.31.22.png)

## Renseignez les coordonnées de votre client

::: tip
Ces informations sont obligatoires pour générer le lien de paiement. Nous ne les communiquons pas.
:::

![Capture d’écran 2020-05-07 à 15.37.45.png](https://storage.googleapis.com/slite-api-files-production/files/f5530eec-8daf-42c8-859d-a5e183bc8136/Capture%2520d%25u2019e%25u0301cran%25202020-05-07%2520a%25u0300%252015.37.45.png)

## Générez et envoyez le lien

::: tip
N'oubliez pas de valider pour générer le lien de paiement
:::

![Capture d’écran 2020-05-07 à 15.42.05.png](https://storage.googleapis.com/slite-api-files-production/files/8dc7fab7-fa4f-4bef-afb9-0907473478fb/Capture%2520d%25u2019e%25u0301cran%25202020-05-07%2520a%25u0300%252015.42.05.png)

Si vous avez des questions francois.delaitre@pledg.co 👋
