# Start up

Pledg's dashboard allows you to configure your means of payment and track the payments made to your various accounts.

## Account creation - first connection

If you do not have an account, you can create one at [test dashboard (staging)](https://staging.dashboard.ecard.pledg.co/#/).

When integration is complete, you can request activation of your account at support@pledg.co, and we will give you access to your [production dashboard](https://dashboard.ecard.pledg.co/#/).

[Capture.PNG](https://storage.googleapis.com/slite-api-files-production/files/16cb4189-7bb4-43eb-986b-9b2ae1b74712/Capture.PNG)

To log in :

* Click on "Log in"
* Reset the password by entering your email address after clicking on :
![Capture.PNG](https://storage.googleapis.com/slite-api-files-production/files/70ad746d-9434-48a0-8cc0-87e733341cd9/Capture.PNG)
* Click on the disposable link sent by email and specify a new password
* Login again with the chosen password

## General presentation of the dashboard

Once you have logged in, you will be taken to the main interface of the Pledg dashboard.

![Capture_Presentation_Red.png](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/98b78af6-fa5c-47c6-a807-8395c87cf3e9/Capture_Pr%C3%A9sentation_Red.png)

Here you will find :

1. The list of accounts (your Pledg payment means) with a short description of their type (e.g. "2x Installation" for a payment split into two instalments). Click on one of the accounts / Pledg payment methods to view it.
2. Click on "Create an account" to create a new Pledg payment method.
3. You can change the language of the dashboard
4. Click on "Logout" to exit the dashboard.

## Create a new means of payment

To create a new payment method, click on the "Create an account" button at the bottom of the list of payment methods.

![Capture_NewAccount.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/1641e1d2-e301-484c-b2b4-91b9714755fd/Capture_NewAccount.PNG)

Fill in all the fields then click on the "Create" button:

* Company name
* Logo URL
* Type of payment

| Payment type in English | Payment type in French | Setup
| ----------- | ----------- | ----------- |
| Deferred | Deferred | |
| Split | Installation | Fill in the field "Number of maturities" (cannot exceed 12x) |
| With down payment | Down payment | Fill in the fields "Percentage of down payment" and "Max number of days before capturing the balance" |

* Signature required: tick the box if you want to sign the exchanges.

⚠️ All fields are required (including logo).

Once created, the new Pledg account / payment method will appear in the list of accounts. By clicking on it, you will find its characteristics.

⚠️ This newly created account is not **directly functional in production**. Actions are necessary by Pledg to complete its configuration and update the user contract.

## Consulting an account

In the accounts, click on the account / Pledg payment method you want to view.

![Capture_AccountConsulter_Red.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/72819614-e179-4057-b046-738d97ed5b66/Capture_AccountConsulter_Red.PNG)

On the right side of the screen are displayed :

* The main characteristics of the means of payment
* The list of the last payments
* The list of the last transfers

### Key Account Features

![Capture_Main_AccountFeatures.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/aceaae24-fa80-45e2-8f3f-7b76c8448c52/Capture_Main_AccountFeatures%C3%A9ristiques.PNG)

* UID: the technical identifier of your payment method also called MerID
* Key: the private key of your means of payment; it allows you to authenticate and secure the exchange of information with a signature. ⚠️ the key is optional and its use is reserved for developers.
* Type: the type of payment configured: "Split", "Deferred" ...
* Employees: the number of employees with access to the account (in this example: one employee).
* Change button: by clicking on the button you can change some of the account information.

### Changing the features of an account

Click on the small "change pencil" icon located under the main account features staff.

![Capture_Account_Change1.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/a78b4a6f-56af-4efe-b28d-f0dc821a772b/Capture_Account_Change1.PNG)

Modify the desired information and click on the "Modify" button.

The following fields can be modified:

* "Brief description": text giving a brief description of your account (in this example "2x" for a payment split in two)
* "Logo URL": select a file with your logo and upload it.
* "Type of payment" (**not modifiable**): parameter indicating the type of payment (in this example "Split")
* "Number of instalments" (**not modifiable**): the number of instalments of your means of payment in the case of a split payment (in this example "2 instalments"); for information purposes, on the right you will find the charges applied to the buyer (in this example 0.5%)
* "Signature required": activate or deactivate the signature for this account

![Capture_AccountChange2_Red.png](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/65c62cba-f906-49ce-bdf9-92b25b05ca33/Capture_AccountChange2_Red.png)

Below the editable account characteristics, you can add/delete and view the list of collaborators who have access to the account.

## Viewing last payments

In the list of accounts, click on the account / payment method for which you want to view the latest payments.

![Capture_AccountLastPayments_Red.png](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/bb73d40b-3d0f-4c59-87ad-eab86afb1a55/Capture_AccountLastPayments_Red.png)

The list of the last five payments is displayed with :

* The amount and its currency
* Payment status :

  - `COLLECTING` : Payment accepted
  - `PRIMARY_KO`: Transaction refused

* The merchant's reference communicated to the Pledg payment
* Customer identification: email and phone number if necessary.
* The date of payment

### Displaying all payments

Click on "View All" to view all payments made to this account.

Account_Capture_All_Red_Payments.png](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/dd4736b4-3d99-48d0-a0a2-7db7e0bb437f/Account_Capture_All_Red_Payments.png)

Tools at the top of the list allow you to :

* Search for a payment by typing the merchant's reference number
* Filter the list by date, status and amount
* Export list items in CSV format

To obtain the details of a payment, click on the eye to the right of the payment line.

### Viewing the details of a payment

Click on the eye of the payment you want to view.

![Capture_PurchaseDetailMain_Red.png](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/d1f6be47-edc6-459b-9bfd-71bf02c5b2eb/Capture_PurchaseDetailMain_Red.png)

The main characteristics of the payment are followed by the following blocks:

* The due dates
  
- In the case of a split payment, you will find the list of due dates with the associated dates, amounts and status:
![Capture_PurchaseDetailPayment.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/759e6d22-3c2d-4019-85d9-aa274c8020ad/Capture_PurchaseDetailPayment.PNG)

- In the case of a deferred payment, you will find the due date with its date, amount and associated status:

![Capture_PurchaseDetailTerm_2.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/a29110c5-e169-454b-9aee-ee09227e0a2a/Capture_PurchaseDetailTerm_2.PNG)

* Refunds / Refunds

![Capture_PurchaseDetailRefund.PNG](https://storage.googleapis.com/slite-api-files-production/files/IRZjGiN~EW/b2cd060a-b496-4c7a-bcae-18d733fd3678/Capture_PurchaseDetailRefund.PNG)

## Consultation of the last transfers

To be completed

If you have any questions francois.delaitre@pledg.co 👋
