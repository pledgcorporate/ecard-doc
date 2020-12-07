# Installation Prestashop v16 - Pledg

## Step 1 - Account creation

### Co-driver option

1. We set up your account for you (you can make an appointment [here](https://pledg.co/prenez-rendez-vous/))
2. We send you your account ID (`merchant_uid`)

### Self-service option

1. You [create your account](https://staging.dashboard.ecard.pledg.co/#/)
2. You take your account identifier (`merchant_uid`) on your [dashboard](https://staging.dashboard.ecard.pledg.co/#/)

## Step 1bis - Uninstallation (optional)

Before redoing the installation, a complete uninstallation of the module is necessary.

- Save your settings: before uninstalling the module we advise you to save your settings: click on "Pledg - Payments" in the menu and copy your identifiers (`merchant_uid`) for each payment method.

- Uninstalling the module
  - Go to the module manager by clicking on "Modules and services" in the menu.
  - Look for the Pledg module.
  - Click on the green "Deactivate" button.
  - Click on the submenu next to the "Activate" button and click on "Delete".
  - Confirm the deletion; a notification will inform you that the "Module(s) uninstalled successfully".

![Capture_UnInstallModule_Red.png](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/9010e5b6-d143-4f3d-98e0-a32a7580f16b/Capture_UnInstallModule_Red.png)

![Capture_UnInstallModule2_Red.png](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/88772f17-8f58-4e8a-aa6b-c64765529aae/Capture_UnInstallModule2_Red.png)

⚠️ Before reinstalling the Pledg module, the Prestashop's cache must be emptied. To do this, go to "Advanced Settings"/"Performance" and click on "Empty Cache".

![Capture_ViderLeCache_Red.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/061493f9-70f4-4ecb-9b62-5cc5a694149e/Capture_ViderLeCache_Red.PNG)

## Step 2 - Installation

- Download the [Pledg Prestashop module](https://github.com/pledgcorporate/ecard-prestashop1.6/archive/master.zip)

- Prepare the archive
  - Unzip the downloaded archive.
  - Rename the directory to "pledg" (**attention no capital letters**).
  - Recompress the archive.

- Add the module in Prestashop
  - Go to "Modules and services" and click on "Add a new module".
  - Select the "pledg" archive in zip format and click on "Load module"; a notification will indicate that "The module has been downloaded".

![Capture_AddNewModule_Red.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/996e5b89-f14f-4ba5-990c-03c20859f9ad/Capture_AddNewModule_Red.PNG)

- Install the Pledg module
  - Look for the Pledg module in the list of modules.
  - Click on the "install" button.

![Capture_InstallNewModule_Red.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/218d8a4e-4833-4939-b8c1-be48b055f499/Capture_InstallNewModule_Red.PNG)

    - Click on the "Continue Installation" button; a notification will indicate "Module(s) installed successfully".

![Capture_InstallNewModule_Confirmation_Red.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/069c0740-ed5b-48a6-a5ce-b9217b3492ac/Capture_InstallNewModule_Confirmation_Red.PNG)

Once the installation is complete, a new item "Pledg - Payments" should appear in the Prestashop menus.

![Capture_InstalledNewModule_Red.png](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/14e75310-7192-4534-8fa7-70a23cd749aa/Capture_InstalledNewModule_Red.png)

## Step 3 - Configuration

🔧 On your Prestashop Back Office, you can add the various Pledg payment methods.

- Go to Pledg - Payments :

![Capture_InstalledNewModule_Red.png](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/b1170405-f81d-4eee-8f9f-06d806346703/Capture_InstalledNewModule_Red.png)

- add a payment method :

![Capture_ConfigurationAddPaiment_Red.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/bdd07499-d20b-4ab7-b7d4-0b8fbc2b557b/Capture_ConfigurationAddPaiment_Red.PNG)

- complete the information :

![Capture_ConfigurationAddPaimentFields_Red.png](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/fd761524-04cc-421a-a68a-5c02dc4eb6e2/Capture_ConfigurationAddPaimentFields_Red.png)
    - Fill in the fields.
    - Click on the "Save" button; a notification will say "Creation successful".
    - Repeat the add operation for all your Pledg payment methods.

Description of the fields :

    - Title (required): the title of the payment method; this title will appear to the user (example: "Pay in 3x").
    - Activate payment: yes if you want to activate this payment method.
    - Production mode: yes if you want to put this payment method into production.
    - Marchant ID (required): your Marchant ID associated with the payment method (communicated by Pledg).
    - Secret (required): your secret key used to certify payments (communicated by Pledg).
    - Description: the description of your payment.

⚠️ Pledg payment methods will be displayed on your payment page in **the order in which you added them**.

## Step 5 - Test

Carry out a complete test in your environment :

- Fill your basket with items
- Proceed to payment
- Check in the "Orders" interface of the administration that your test order is present in the list.

![Capture_TestCommand_Red.png](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/5a348b10-bce0-4e62-ac69-004dba37793f/Capture_TestCommand_Red.png)

If you have any questions francois.delaitre@pledg.co 👋
