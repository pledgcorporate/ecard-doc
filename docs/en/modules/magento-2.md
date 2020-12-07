# Installation Magento v2 - Pledg

## Step 1 - Account creation

### Co-driver option

1. We set up your account for you (you can make an appointment [here](https://pledg.co/prenez-rendez-vous/))
2. We send you your account ID (`merchant_uid`)

### Self-service option

1. You [create your account](https://staging.dashboard.ecard.pledg.co/#/)
2. You take your account identifier (`merchant_uid`) on your [dashboard](https://staging.dashboard.ecard.pledg.co/#/)

## Step 1bis - Uninstallation (optional)

You can uninstall the module via Composer from PHP or via SSH.

### Via PHP

- In the process of being written

### Via SSH

- Open an ssh connection in a machine.

```bash
ssh -i [my_private_key] [user]@[host]
```

- Deactivate the module.

```bash
sudo su
cd [Magento root folder]app/code
bin/magento module:disable --clear-static-content Pledg_PledgPaymentGateway
```

- Delete the module

```bash
rm -rf app/code/Pledg
```

## Step 2: installation of the 📥 module

You can install the module either via Composer of PHP or via the CLI Magento.

### Via Composer

In the process of being written

### Via the CLI Magento

- Unzip the [file](https://drive.google.com/file/d/1abfuNdlFyX0UhfMaaqBUkW12LOUQVoTx/view?usp=sharing) in the _app/code_ directory.
The code must be in the _app/code/Ginidev/PledgPaymentGateway\_ directory for the following steps to work.
- Install the module

```bash
php bin/magento setup:upgrade
php bin/magento setup:static-content:deploy en_EN -f
```

- At the command line, check that the module has been correctly installed.

```bash
>>> php bin/magento module:status Ginidev_PledgPaymentGateway
Module is enabled
```

## Step 3: Configure your Magento shop 🔧

In the administration interface of Magento :

- Go to `Stores > Configuration > Sales > Payment methods > Other payment methods`.

![Capture_Configuration_Red.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/9b0546e5-10c0-4b6a-b2c4-e309e1047231/Capture_Configuration_Red.PNG)

- Set the General Configuration

![Capture_ConfigurationGeneral.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/16e667a2-eb4c-4f5e-b600-a2fe489ca846/Capture_ConfigurationG%C3%A9n%C3%A9rale.PNG)

Remember to enable or disable staging depending on the environment_ ✏️

- Set up your different payment solutions

For example, if you have 3 Payment Solutions, set up the 1st, 2nd and 3rd Payment Solution using the `merchant_uid` for each of them.

![Capture_FirstPaymentSolution.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/54edf463-d291-4008-a45f-731899e9b0a4/Capture_FirstPaymentSolution.PNG)

- Save the configuration by clicking on the "Save Config" button.
- Empty Magento's cache
  - Go to System > Cache management and click on the "Flush Magento Cache" button.
  - Wait until you get the notification "The Magento cache storage has been flushed".

![Capture_FlushCache_Red.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/ee4d282d-2123-4884-a445-a63d9c0a6b2a/Capture_FlushCache_Red.PNG)

- x] It will be necessary to empty the cache for the correct taking into account of the modifications (in the cli, `php bin/magento cache:flush`.

## Step 4: Test the checkout 🔦

Carry out a complete test in your environment :

- Fill your basket with items
- Proceed to payment
- Check in the SALES > ORDERS interface of the administration that your test order is present in the list.

![Capture_TestCHeckout.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/1c1b2417-7ff4-4321-8ff1-cdb4a9934d4a/Capture_TestCHeckout.PNG)

## NB: Installation via Composer 🔦

For installation via dial-up, see [Readme](https://github.com/pledgcorporate/ecard-magento).

If you have any questions francois.delaitre@pledg.co 👋
