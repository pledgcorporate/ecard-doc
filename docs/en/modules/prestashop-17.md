# Integration Prestashop v17 - Pledg

## Step 1 - Account creation

### Co-driver option

1. We set up your account for you (you can make an appointment [here](https://pledg.co/prenez-rendez-vous/))
2. We send you your account ID (`merchant_uid`)

### Self-service option

1. You [create your account](https://staging.dashboard.ecard.pledg.co/#/)
2. You take your account identifier (`merchant_uid`) on your [dashboard](https://staging.dashboard.ecard.pledg.co/#/)

## Step 2 - Uninstallation (optional)

Before redoing the installation, a complete uninstallation of the module is necessary.

- Save your settings: before uninstalling the module, we recommend that you save your settings.
  We advise you to save your settings: click in the menu on "Pledg - Payments" and copy your identifiers (`merchant_uid`) for each payment method.

- Uninstall the module
  - Go to the module manager by clicking on "Modules".
    in the menu.
  - Look for the Pledg module.
  - Click on the green "Deactivate" button.
  - Click on the sub-menu next to the "Activate" button and click on
    "Uninstall".
  - Confirm the uninstallation: a notification will inform you "Module(s) uninstalled successfully".

![EN_Capture_UninstallModule_Red.png](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/ebe6737d-5722-4974-b2d9-b1306a230cb0/EN_Capture_UninstallModule_Red.png)

⚠️ Before reinstalling the Pledg module, the Prestashop's cache must be emptied. To do this, go to "Advanced Settings"/"Performance" and click on "Empty Cache".

![EN_Capture_ClearCache_Red.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/9d637eaa-45a7-4303-9183-fa094a0cba27/EN_Capture_ClearCache_Red.PNG)

## Step 3 - Installation

- Download the [Pledg Prestashop module](https://github.com/pledgcorporate/ecard-prestashop1.7/archive/master.zip)

- Prepare the archive
  - Unzip the downloaded archive.
  - Rename the directory to "pledg" (do not use capital letters).
  - Recompress the archive.

- Add the module in Prestashop
  - Go to module manager via the menu "Modules" and click on "Load module".
  - Select the "pledg" archive in zip format; a notification will tell you that "The module has been successfully uploaded
    downloaded".

![EN_Capture_AddModule_Red.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/a2af32d8-f3b3-4aee-970c-5c63f2ccf8be/EN_Capture_AddModule_Red.PNG)

The module will be automatically activated and will appear in the "MORE" section of the menu.

## Step 4 - Configuration

🔧 On your Prestashop Back Office, you can add the various Pledg payment methods.

In the left menu, go to MORE > Pledg - Payments [1]. You get to the screen as shown on the below image, listing all the Pledg payment methods already set up.
Click on "Add Payment" [2]

![AddPayment.png](https://pledg-assets.s3-eu-west-1.amazonaws.com/ecard-plugin-doc/module/Prestashop1.7/AddPayment.png)

🔖 Fill in the information then click on Save :

![FillNewPayment.png](https://pledg-assets.s3-eu-west-1.amazonaws.com/ecard-plugin-doc/module/Prestashop1.7/FillNewPayment.png)

Description of the fields :

- Title (required): the title of the means of payment; this title will appear to the user (example: "Pay in 3x").
- Activate payment: enable / disable this payment method.
- Production mode: yes if you want to put this payment method into production, no if you want to keep it in test mode for now.
- Marchant ID (required): your Marchant ID associated with the payment method (communicated by Pledg and starting with "mer_").
- Secret : Secret key for authentication (i.e. securing) the payments (communicated by Pledg).
- Minimum : minimum amount in the customer's cart, that allows them to use this payment method.
- Maximum : maximum amount till which the customer can use this payment (if you don't which to set a threshold, type 0).
- Icon : lets you upload an icon that the customers will see in front of this payment method.
- Description: the description of your payment.
- Position : order of priority of the selected payment method.

## Step 5 - Test

Carry out a complete test in your environment :

- Fill your basket with items
- Proceed to payment
- Check in the "Orders" interface of the administration that your test order is present in the list.

![Capture_TestPayment_Red.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/1be289ee-6a00-4d4f-807d-a68ae5e2a4ef/Capture_TestPayment_Red.PNG)

If you have any questions francois.delaitre@pledg.co 👋
