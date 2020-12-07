# Woocommerce installation - Pledg

## Step 1 - Account creation

### Co-driver option

1. We set up your account for you (you can make an appointment [here](https://pledg.co/prenez-rendez-vous/))
2. We send you your account ID (`merchant_uid`)

### Self-service option

1. You [create your account](https://staging.dashboard.ecard.pledg.co/#/)
2. You take your account identifier (`merchant_uid`) on your [dashboard](https://staging.dashboard.ecard.pledg.co/#/)

## Step 2 - Uninstallation (optional)

Before redoing the installation, a complete uninstallation of the module is necessary.

* Save your settings: before uninstalling the module, we recommend that you save your settings.
  - Go to WooCommerce > Settings and click on the "Payments" tab and copy your identifiers (`merchant_uid`) for each payment method.

* Uninstall the module
  - Go to the module manager by clicking on Plugins > Installed Plugins in the menu.
  - Look for the Pledg module.
  - Click on "Desactivate" in blue.
  - Click on "Delete" in red.
  - Confirm the uninstallation; a notification will inform you that the "**WooCommerce Pledg** was successfully deleted".

![Capture_Desinstallation_Red.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/b37f7c9b-f71e-48d0-97a4-6ad77392bdc0/Capture_Desinstallation_Red.PNG)

## Step 3 - Installation

- Download Pledg's WooCommerce module

  https://github.com/pledgcorporate/ecard-woocommerce/archive/master.zip

* Prepare the archive
  - Unzip the downloaded archive.
  - Rename the directory to "woocommerce_pledg" (please do not use capital letters).
  - Recompress the archive.

- Add the module in WordPress
  - Go to module manager via the menu "Plugins > Add new" and click on "Load module".
  - Click on "Upload Plugin".
  - Select the archive "woocommerce_pledg" in zip format and click on the "Install Now" button.

![Capture_Install_Red.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/8081223d-fb75-48ee-8d4a-58b34ee9584a/Capture_Install_Red.PNG)

    - Then click on the "Activate Plugin" button; a notification will say "Plugin activated".

![Capture_InstallActivate_Red.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/b613da20-e592-44a2-9d35-81dd87048315/Capture_InstallActivate_Red.PNG)

## Step 4 - Configuration

🔧 On your Woocommerce Back Office, you can add the different Pledg payment methods.

To do so, go to Woocommerce > Setting > Payments where you will find a list of the Pledg payment methods that you can set up.

![Capture_ConfigurationList_Red.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/afd77fdf-ef64-4a90-90b6-4a7da4e1b80c/Capture_ConfigurationList_Red.PNG)

For each of your account identifiers (`merchant_uid`), configure a Pledg method. The ones you have configured and activated will appear in the payment methods available to the customer.

🔖 Click on the "Set Up" button and complete the information, then click one on the "Save changes" button; a notification will inform you that "Your settings have been saved:

![Capture d’écran 2020-05-18 à 16.27.04.png](https://storage.googleapis.com/slite-api-files-production/files/4668dda5-7a5f-4ea3-8bd5-fdc26710f20d/Capture%2520d%25u2019e%25u0301cran%25202020-05-18%2520a%25u0300%252016.27.04.png)

Description of the fields :

- Title (required): the title of the means of payment; this title will appear to the user (example: "Pay in 3x").
- Enable/Disable: yes if you want to activate this payment method.
- Development/Production mode: yes if you want to put this payment method into production.
- Merchant ID (required): your Merchant ID associated with the payment method (communicated by Pledg).
- Description: the description of your payment.

⚠️ The maximum number of Pledg payment methods is 6.

## Step 5 - Test

Carry out a complete test in your environment :

- Fill your basket with items
- Proceed to payment
- Check in the "WooCommerce > Orders" interface of the administration that your test order is present in the list.

![Capture_Test_Red.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/bb81c96a-ad11-4675-9faa-43b69431bb3c/Capture_Test_Red.PNG)

If you have any questions francois.delaitre@pledg.co 👋
