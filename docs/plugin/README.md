# Introduction

The `eCard` solution developed by [Pledg](https://www.pledg.co) is a Javascript
plugin/mobile SDK allowing any e-merchant to propose the *split*, *installment*, *deferred*, *down payment* and *redirection payment* facilities to their customers:

- **Split payment**: the payment is shared between the customer and the specified co-buyers
- **Installment payment**: the payment is shared in several installments
- **Deferred payment**: the payment is completed only after a certain delay
- **Down payment**: the payment is shared between a deposit and a balance
- **Redirection payment**: the payment is completed on the web site of an external PSP (Cofidis, Cetelem, Bancontact, idEAL)

In most cases, the plugin/SDK generates an `eCard`, i.e. a debit bank card
provisioned with the amount of the purchase, with which the payment can be
immediately completed.

An alternative solution consists in paying the merchant with a bank transfer. 
Once a purchase is completed, a transfer is completed towards the bank of the merchant,
with the amount of the purchase, and within the next 3 business days.

The code of the payment page/screen of the merchant just has to call the plugin/SDK, initialized with:

- The details of the purchase (amount, currency, reference, etc. - see [Settings](/plugin/README#settings))
- The callback to execute after receiving the result from the plugin/SDK

The plugin/SDK can be used in two different modes: front mode and back mode. The
differences between these two modes are summarized in the table below:

|                                        | Front mode   | Back mode  | Transfer mode |
| -------------------------------------- | ------------ | ---------- | ------------- |
| **Integration for the merchant**       | Frontend     | Frontend   | Frontend      |
| **Backend completing the payment**     | Merchant     | Pledg      | Pledg         |
| **Method to pay the merchant**         | eCard        | eCard      | transfer      |
| **Result returned by the plugin/SDK**  | eCard infos  | Payment result returned by the PSP of the merchant | Nothing | 
| **Scope of the callback**              | Submit for debit the ecard infos to the merchant backend | Submit for info the payment result to the merchant backend | Submit for info the transfer completion to the merchant backend |
