# Integration

## Merchant parameters

When Pledg integrates a merchant in its platform, it assigns a unique merchantUid to this merchant.

If a merchant uses the plugin for different types of payments (i.e. split,
installment, deferred, down payment and redirection), it is considered by Pledg as distinct
merchants, and must therefore be assigned distinct merchantUid's.

In parallel, the merchant indicates to Pledg the values to be assigned to the configuration parameters below.

| Name | Payment types | Payment Modes | Mandatory | Description | Usage |
|------|---------------|-----------|-------------|-------|----|
| Name          | All| All | Yes | Name of the merchant | To fill the emails/SMS |
| Site URL      | All | All | Yes | URL of web site of the merchant |  To fill the emails |
| Picture URL   | All | All | Yes | URL of the logo of the merchant | To fill the emails |
| CSS URL       | All | All | No | URL of the iframe CSS | To customize the layout of the payment funnel |
| GTU URL       | Split | All | No | URL of the general terms of use (GTU) of the merchant | To customize the layout of the payment funnel |
| GTU message   | Split | All | No | Label of the link to the GTU of the merchant | To customize the layout of the payment funnel |
| Use 3DS | All| All | No | Either *always*, *never* (unless it is required by the card) or *auto* (i.e. only depending on the purchase amount) (*auto* by default) | |
| PSP connnector | All| eCard | No | Connection parameters to the merchant PSP | To use the plugin in back mode |
| Timezone      | All| All | No | Timezone (*Europe/Paris* by default) | To localize the date and time in the emails/SMS |
| Mocked ecard | All| All | No | Test eCard | In a test environment, the PSP may expect to receive specific test credit cards (see [Stripe](https://stripe.com/docs/testing#cards) or [Adyen](https://docs.adyen.com/developers/test-cards/test-card-numbers), for instance) and may then reject the eCard. This parameter allows to override the eCard informations. |
| Requested opt | All| All | No | If *in*, the optin is requested in the funnel; if *out*, the optout is requested in the funnel; if *disabled*, no optin or optout is requested (*out* by default) | |
| Payment type | All| All | Yes | Either *SPLIT*, *INSTALLMENT*, *DEFERRED*, *DOWN PAYMENT* or *REDIRECTION* (*SPLIT* by default) | |
| Country code | All| All | No | Country code (ISO 3166-1 alpha-2 code) (*FR* by default) | To format a local phone number to the E164 format and customize T&Cs |
| Secret | All| All | No | Secret used to decode the signature of the parameters provided by the merchant (see [Signature](#signature-of-the-parameters)). | |
| Send confirmation email | All| All | Yes | If *true* send confirmation email at the end of the transaction. | |
| Preauthorization renewal period | All| All | No | Duration in days after which the non-captured preauthorizations are renewed (*7* by default) | |
| Leader can pay alone | Split| All | No | If *true*, the split payment mechanism is used even if the user did not specify any co-buyer (*true* by default) | |
| Purchase end notification URL | Split| All | No | URL to notify the merchant of the end of the split payment of the purchase | See [Split purchase end notification](#split-purchase-end-notification) |
| Deposit percentage | Down payment| All | No/Yes | Ratio between the amount of the deposit and the amount of the purchase (only if the payment is split between a deposit and a balance) | |
| Maximum balance payment delay | Down payment| All | No/Yes | Maximum delay, in days, between the creation of the purchase and the payment of the balance  (only if the payment is split between a deposit and a balance) | |
| Number of installments | Installment| All | Yes | Number of installments | |
| Fees | Installment/Deferred | All | No | Fees, in percent of the purchase (*0* by default) | For Installment, these fees are added to the amount of the first installment |
| Funding limit | Installment | All | No | Maximum cumulated amount of all the installments except the first one | |
| Delay | Deferred | All | Yes | Delay in days | |
| Preauthorization percentage | Deferred| All | No | Percentage of the purchase charged which is preauthorized (*100* by default) | |
| Redirection type | Redirection| All | Yes | *Cofidis*, *Cetelem*, *Bancontact* or *idEAL* | |
| Countries | Redirection| All | No | Countries supported by the external PSP (*FR* by default) | |
| Address is mandatory | Installment/Deferred/Down payment| All | Yes | Client address should be given on purchase creation (*Yes* by default) | See [scoring settings](#common-scoring-settings) |
| Address must be valid | Installment/Deferred/Down payment| All | Yes | Given client address should be valid (*Yes* by default) | See [scoring settings](#common-scoring-settings) |
| Minimum amount cents | Redirection| All | Yes | Minimum amount supported by the external PSP | |
| Minimum amount cents | Installment/Deferred | All | No | Minimum amount supported | |
| Maximum amount cents | Redirection| All | Yes | Maximum amount supported by the external PSP | |
| Maximum amount cents | Installment/Deferred | All | No | Maximum amount supported | |
| Send owed share reminder | Installment/Deferred/Down payment| All | No | If *true*, a reminder is sent by email and SMS to inform the client that the share will soon be debited (*true* by default) | |
| Payment params | All| transfer | Yes | IBAN and BIC of the merchant | |

## HTML

```html

<body>

...

<!-- form to submit the eCard infos - front mode only -->
<form id="form" method="post" action="your-payment-triggering-server-side-code">
    <input type="text" id="card-number" name="card-number">
    <input type="text" id="card-expiry-month" name="card-expiry-month">
    <input type="text" id="card-expiry-year" name="card-expiry-year">
    <input type="text" id="card-cvc" name="card-cvc">
</form>

<!-- button to open the Pledg payment funnel -->
<button id="pledg-button" type="button">Split the payment</button>

<!-- Optional - We mention it only to illustrate the "configure" method of the plugin -->
<input type="text" name="customer-email" id="customer-email" value="sales@pledg.co">

...

<!-- This script contains the code of the plugin -->
<script src="https://s3-eu-west-1.amazonaws.com/pledg-assets/ecard-plugin/<BRANCH>/plugin.min.js"></script>

<!-- This script contains the call to the plugin
     See the "Javascript" section below -->
<script type="text/javascript">
...
</script>

</body>
```

BRANCH must be equal to *master* on the **production** platform, and to *staging* on the **staging** platform.

## JavaScript

```javascript
<script type="text/javascript">

var button = document.querySelector("#pledg-button")

new Pledg(button, {
    // the Pledg merchant id
    merchantUid: "mer_uid",
    // the amount **in cents** of the purchase
    amountCents: 30550,
    // the email of the customer (optional - here, it is retrieved from a control on the page)
    email: document.querySelector("#customer-email").value,
    // the title of the purchase
    title: "STAY IN LONDON",
    // the subtitle of the purchase
    subtitle: "Fly + Hotel 2 nights (3 rooms)",
    // the reference of the purchase
    reference: "order_123",
    // the name of the customer (optional, to improve anti-fraud)
    firstName: "Gaëlle",
    lastName: "Guéguen",
    // the shipping address (optional, to improve anti-fraud)
    address: {
        street: "2, rue Frézier",
        city: "Brest",
        zipcode: "29200",
        stateProvince: "Bretagne",
        country: "FR"
     },
    // the function which triggers the payment
    onSuccess: function (result) {
        document.querySelector("#card-number").value = result.card_number
        document.querySelector("#card-expiry-month").value = result.expiry_month
        document.querySelector("#card-expiry-year").value = result.expiry_year
        document.querySelector("#card-cvc").value = result.cvc
        document.querySelector("#form").submit()
    },
    // the function which can be used to handle the errors
    onError: function (error) {
        // see the "Errors" section for more a detailed explanation
    },
})

// The code below illustrates how the plugin can be reconfigured after its creation.
// Here, when the focus leaves the control #customer-email, the new email is
// set in the configuration of the plugin.
// All the parameters of the plugin can be reconfigured dynamically using the
// "configure" method.
document.querySelector("#customer-email").addEventListener("blur", function(e) {
            pledgInstance.configure({
                email: document.querySelector("#customer-email").value
            })
        })
</script>
```

Under the hood, the plugin sets a JavaScript listener to catch (and then handle) the
eCard generated by the Pledg iframe.

The eCard is generated within the Pledg iframe and sent to the plugin using the standard
browser API `Window.postMessage`.

**Important notes**:

* The `<script>...</script>` sections must be located at the bottom of the
  page, i.e. just before `</body>`, so that the loading of the scripts does
  not slow down the display of the page
* The script containing the call to the plugin must be loaded together with
  the page, and not later, when the user clicks on the button, for 2 reasons:
  * For performance reasons, it is better to initialize the plugin as soon
    as possible
  * The plugin manages by itself the binding of the *click* event on the
    button with the opening of the funnel
* The plugin must be instantiated only once, i.e. `new Pledg(...)` must be
  called only once

## CSS (optional)

The merchant can customize the layout of the funnel with the CSS specified
in the database. This CSS is retrieved by the iframe and applied to its content.

An **example** of CSS is provided [there](https://s3-eu-west-1.amazonaws.com/pledg-assets/merchants/prod/ebuydemo.css).

When the iframe is displayed in a popin, the merchant can customize its overlay
by applying a style to the class `.pledg-iframe-overlay` in the CSS used by the
page containing the Pledg button:

```css
.pledg-iframe-overlay {
    background: rgba(255, 255, 255, 0.3);
}
```

## Settings

As illustrated above, the Pledg button must be instantiated like this:
`new Pledg(button, settings)`.

The settings are passed as the second argument of the `Pledg` class.

All available settings, required and optional, are detailed below.

### Required settings

| Name | Type | Details |
|--|--|--|
| `amountCents` | `integer` | Amount **in cents** to be credited on the eCard. The maximum value is currently 1000000. |
| `merchantUid` | `string` | Your merchant id |
| `email` | `string` | Email of the client |
| `firstName` | `string` | First name of the client |
| `lastName` | `string` | Last name of the client |
| `reference` | `string` |  Unique reference of the purchase in the system of the merchant (note: if the merchant calls the plugin with a given reference and if the purchase is successfully completed, the merchant cannot call the plugin with the same reference anymore) |
| `title` | `string` |  Title of the purchase |
| `onSuccess` | `function` | Function which handles the result (eCard in front mode and transaction in the other modes) passed as argument (not required in the redirection payment without iframe) |

### Optional settings

| Name | Type | Details | Scoring |
|--|--|--|--|
| `onError` | `function` | Function that should handle and display potential errors | Not Used |
| `onOpen` | `function` | Function to call when the iframe is opened (typically to hide/display some DOM elements) | Not Used |
| `onClose` | `function` | Function to call when the iframe is closed (typically to hide/display some DOM elements) | Not Used |
| `onCancel` | `function` | Function to call when the user closes himself the iframe without completing the payment | Not Used |
| `subtitle` | `string` | Subtitle of the purchase (use `\|` as line separator) | Not Used |
| `currency` | `string` | Currency of the amount (*EUR* by default - only *EUR*, *GBP*, *CZK* and *NZD* are supported) | Not Used |
| `containerElement` | `element` | DOM element which must contain the iframe (if not set, the iframe is displayed as a popin). It is **strongly** recommended to use a container and not a popin. Indeed, iOS does not support very well the large iframe in popins. Technically, if the popin is larger than the viewport, the window scrolls down automatically. This is a problem when creating the shares, since the user cannot see what he is typing. If it is absolutely necessary to use a popin, the plugin can be hidden for iOS devices (see an exemple of code [there](https://staging.merchant.ecard.pledg.co/popin-demo.html)). | Not Used |
| `lang` | `string` | Language to be used (*de_DE*, *en_GB*, *es_ES*, *fr_FR*, *it_IT* and *nl_NL* only - *fr_FR* by default) | Not Used |
| `paymentNotificationUrl` | `string` | Merchant URL (*https://www.example.com*) or email address (*mailto:john.doe@gmail.com*) to call at the payment end | Not Used |
| [`metadata`](https://pledgcorporate.github.io/ecard-plugin-doc/#/plugin/README?id=metadata) | `Object` | Merchant-specific data (typically, a tour operator may set `{departure_date: "2019-02-01"}` in this field) | Not Used |
| `countryCode` | `string` | Can be used to override merchant `Country code` from [Merchant parameters](#merchant-parameters) settings for a purchase | Not Used |
| `redirectUrl` | `string` | URL where the customer must be redirected after the payment (required in direct call or in redirection payment without iframe) | Not Used |
| `cancelUrl` | `string` | URL where the customer must be redirected when he cancels the payment or when the payment fails (required in direct call or in redirection payment without iframe) | Not Used |
| `balancePaymentDate` | `string` | Date of payment of the balance (`YYYY-MM-DD`). Only for DOWN_PAYMENT payments. The latest possible date of balance payment is always today + the delay in days specified in the configuration. If `balancePaymentDate` is set, it is the balance payment date, and it must be before the latest possible one. If `balancePaymentDate` is not set, the balance payment date is the latest possible one.| Not Used |
| `deferredPaymentDate` | `string` | Date of deferred payment (`YYYY-MM-DD`). Only for DEFERRED payments. The latest possible date of deferred payment is always today + the delay in days specified in the configuration. If `deferredPaymentDate` is set, it is the deferred payment date, and it must be before the latest possible one. If `deferredPaymentDate` is not set, the deferred payment date is the latest possible one. | Not Used |
| `secondInstallmentPaymentDate` | `string` | Date of the second installment (`YYYY-MM-DD`). Only for INSTALLMENT payments. Delays the second installment at the specified date. All the following shares will start from `secondInstallmentPaymentDate` and be monthly separated. See details [below](#how-to-delay-the-second-share-expiration-date-for-installment-payments). | Not Used |
| `signature` | `string` | Signature of all the parameters except, of course, the signature itself (see [Signature](#signature-of-the-parameters)). | Not Used |
| `showCloseButton` | `boolean` | Indicates whether the red cross on the upper right corner should be displayed (*true* by default). | Not Used |
| `externalCheckoutValidation` | `boolean` | Indicates whether validation button is displayed by the merchant or not (*false* by default). | Not Used |
| `validateCheckout` | `function` | Function to call to validate payment form when validation button is handled by merchant (`externalCheckoutValidation` set to *true*). | Not Used |
| `onCheckoutFormStatusChange` | `boolean` | Function with parameter `boolean` `readiness` to inform the merchant when validation button shall be greyed out (`externalCheckoutValidation` set to *true*). | Not Used |
| `civility` | `string` | Customer civility (`Mr` or `Ms`) | Mandatory |
| `phoneNumber` | `string` | Customer phone number (E164) | Mandatory |
| `address` | `{street: string, city: string, stateProvince: string, zipcode: string, country: string}` | Customer billing address (the country must be an ISO 3166-1 alpha-2 code - `country` must be equal to `FR` for installment and deferred payments) | Mandatory |
| `shippingAddress` | `{street: string, city: string, stateProvince: string, zipcode: string, country: string}` | Customer shipping address (the country must be an ISO 3166-1 alpha-2 code) | Optional |
| `birthDate` |  `string` | Customer birth date (`YYYY-MM-DD`) | Optional |
| `birthCity` | `string` | Customer birth city | Optional |
| `birthZipcode` | `string` | Customer birth zip code | Optional |
| `birthStateProvince` | `string`  | Customer birth region | Optional |
| `birthCountry` | `string` | Customer birth country (ISO 3166-1 alpha-2 code) | Optional |

#### How to delay the second share expiration date for installment payments?

If `secondInstallmentPaymentDate` is lower than payment created date we do not
consider `secondInstallmentPaymentDate` value.

For regulation purpose, the funding duration cannot exceed 12 months. Thus, if
`secondInstallmentPaymentDate` is too far from created date, we aggregate the
exceeding installments into one (see example below).

Examples:

- A 5 installments payment of 500€ created on `2020-01-01`
with no `secondInstallmentPaymentDate`:
  - 1st share: 100€, due the `2020-01-01`
  - 2nd share: 100€, due the `2020-02-01`
  - 3rd share: 100€, due the `2020-03-01`
  - 4th share: 100€, due the `2020-04-01`
  - 5th share: 100€, due the `2020-05-01`

- A 5 installments payment of 500€ created on `2020-01-01`
with `secondInstallmentPaymentDate = "2020-05-15"`:
  - 1st share: 100€, due the `2020-01-01`
  - 2nd share: 100€, due the `2020-05-15`
  - 3rd share: 100€, due the `2020-06-15`
  - 4th share: 100€, due the `2020-07-15`
  - 5th share: 100€, due the `2020-08-15`

- A 5 installments payment of 500€ created on `2020-01-01`
with `secondInstallmentPaymentDate = "2020-11-15"`:
   - 1st share: 100€, due the `2020-01-01`
   - 2nd share: 100€, due the `2020-11-15`
   - 3rd share: 300€, due the `2020-12-15`

### Metadata

In addition to the parameters described in the [previous](https://pledgcorporate.github.io/ecard-plugin-doc/#/plugin/README?id=optional-settings) section, the field `metadata` of the plugin contains :

* scoring data about the session
* vertical-specific scoring data

This field `metadata` contains a JSON.

The names of the fields are in lower case and in underscore case.

The fields with a name ending with `_date` represent a date, expressed as specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_3166-1) (i.e. with the format `YYYY-MM-DD`).

The fields with a name ending with `country` represent a country, expressed as Alpha-2 code as specified in [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1) (i.e. `FR` for France).

The scoring data has the following structure :

* Scoring data about the session :

The possible values for the field `session.channel` are the following: `desktop`, `mobile`, `call_center`, `point_of_sale`.

For B2B customers, the company id value is in the `session.customer_id`.

```json
{
    "session": {
        "customer_id": "xxx",
        "duration_seconds": 4612,
        "channel":  "desktop"
    }
}
```

* Vertical-specific scoring data :
  - Travel merchants :
    The possible values for the field `travellers.document.type` are the following: `passport`, `visa`, `identity`, `driver_licence`.

    The fields with a name ending with `_airport` are [IATA airport codes](https://en.wikipedia.org/wiki/IATA_airport_code).

    ```json
    {
        "travel": {
            "number_of_travellers": 3,
            "departure_date": "2019-06-14",
            "departure_city": "Paris",
            "departure_airport": "CDG",
            "departure_country": "FR",
            "return_date": "2019-06-30",
            "return_city": "Milano",
            "return_airport": "MXP",
            "return_country": "IT",
            "buy_date": "2019-05-10",
            "insurance": true
        },
        "travellers": [{
                "id": "xxx1",
                "buyer": true,
                "birth_date": "1980-01-21",
                "document": {
                    "type": "passport",
                    "validity_date": "2020-02-18",
                    "country": "FR"
                }
            },
            {
                "id": "xxx2",
                "buyer": false,
                "birth_date": "1982-03-17",
                "document": {
                    "type": "passport",
                    "validity_date": "2021-10-18",
                    "country": "ES"
                }
            },
            {
                "id": "xxx3",
                "buyer": false,
                "birth_date": "2019-03-15"
            }
        ]
    }
    ```

  - Accomodation merchants :
    `merchant_data` value is any merchant-specific data in JSON format.

    ```json
    {
        "stay": {
            "reference": "Edenarc",
            "duration_days": 7,
            "name": "2 single beds - standard category",
            "amount_cents": 99700,
            "merchant_data": {
                "category": "apparthotel"
            },
            "insurance": true,
            "arrival_date": "2019-06-14",
            "departure_date": "2019-06-14",
            "country": "FR",
            "location": "Les Arcs",
            "number_of_adults": 2,
            "number_of_children": 2
        }
    }
    ```

  - Retail merchants :
    The possible values for the field `delivery_mode` are the following: `home`, `relay`.

    The possible values for the field `delivery_speed` are the following:
    * `1` : Express (lass than 24 hours)
    * `2` : Standard
    * `3` : Click and Collect
    * `4` : Instant

    The possible values for the field `type` are the following: `physical`, `virtual`.

    The possible values for the field `category` are the following:
    * `1` : Food & Gastronomy
    * `2` : Auto & Moto
    * `3` : Culture & Entertainment
    * `4` : Home & Garden
    * `5` : Home appliance
    * `6` : Auctions and Group Purchases
    * `7` : Flowers & Gifts
    * `8` : Computers & Software
    * `9` : Health beauty
    * `10` : Particular services
    * `11` : Professional services
    * `12` : Sport
    * `13` : Clothing & Accessories
    * `14` : Travel & Tourism
    * `15` : HiFi, Photo & Videos
    * `16` : Telephony & Communication
    * `17` : Jewelry & Precious Metals
    * `18` : Baby items and accessories
    * `19` : Sound & Light

    `merchant_data` value is any merchant-specific data in JSON format.

    ```json
    {
        "delivery_mode": "home",
        "delivery_speed": 2,
        "products": [{
            "reference": "xxx",
            "type": "physical",
            "quantity": 1,
            "name": "string",
            "unit_amount_cents": 0,
            "category": 15,
            "merchant_data": {
                "category_path": "Electronics Store > Widgets",
                "global_trade_item_number": "1234567",
                "manufacturer_part_number": "ABCDEF",
                "brand": "Some brand"
            }
        }]
    }
    ```

## Signature of the parameters

Most of the parameters passed to the plugin can be signed.

In this case, they are not passed directly to the plugin but within a single parameter called `signature` which contains a JSON Web Token (JWT).

This token is generated with a secret shared between Pledg and the merchant. The merchant uses this secret on its backend to generate the token, and Pledg uses the same secret to decode it.

The merchant can also specify a validity period when generating the token.

The payload of the token is a JSON containing all the parameters normally passed to the plugin, except:

- The parameter `signature` itself
- The callbacks `onSuccess`, `onCancel`, `onError` and `onOpen`
- The parameter `container`

Here is an example of code generating the token on the backend of the merchant. In this example, the front of the merchant sends a request to the backend of the merchant with a JSON containing all the parameters passed to the plugin, so that the backend of the merchant signs them:

```javascript
app.post('/generate-signature', function (req, res) {
    data = req.body
    var jwt = require('jsonwebtoken');
    var signature = jwt.sign({
                        data:data,
                    },process.env.SECRET,
                    { expiresIn: '1d' });
    res.send(JSON.stringify(signature))
});
```

An exemple of integration on the front of the merchant is provided [there](https://staging.merchant.ecard.pledg.co/standard-demo-with-signature.html).

Many technical resources related to JWT (documentation, validation tools, etc.) are available on https://jwt.io.

## Errors handling

An error is an object containing two properties: `type` and `message`, for instance:

```javascript
{
    type: "invalid_request_error",
    message: "The provided property email is invalid"
}
```

Errors are all handled in the `onError` function:

```javascript
new Pledg(button, {
    // ... Other settings merchantUid, amountCents, ...

    onError: function (error) {
        if (error.type === "payment_refused") {
            // Handle payment_refused errors here
        } else if (error.type === "invalid_request_error") {
            // Handle invalid_request_error errors here
        } else if (error.type === "internal_error") {
            // Handle internal_error errors here
        }
    },
})
```

The different values for `error.type` are the following:

| Name | Cause |
|------|-------|
| Initialization errors |
| `invalid_request_error` | Your settings are malformed (ex.: invalid `merchantId`, invalid `email`, invalid `amountCents`, ...) |
| `maintenance` | The Pledg backend is under maintenance |
| `internal_error` | The Pledg backend failed |
| Payment errors |
| `payment_refused` | The PSP of Pledg failed |
| `bad_gateway` | The PSP of the merchant failed (back mode only) |
| `3DS_confirmation_timeout` | The 3DS payment process could not be completed on time |
| `direct_confirmation_timeout` | The direct (i.e. without 3DS) payment process could not be completed on time |
| `not_eligible` | The customer is not eligible to this type of payment (an authorization may appear on the customer account but no money will be debited) |

Important notes:
- If the error is an initialization error, it may be worth that the `onError` callback hides the Pledg component. Indeed, such an error implies that the Pledg component is not usable in this context. It is recommended that the `onError` callback does not redirect to an error page, since this error may occur even if the user does not click on the Pledg button.
- If the error is a payment error, it may be worth to display an error message or to redirect to an error page.

When an error is raised, the iframe is always closed.

If a payment is rejected by the PSP (3DS failed,
insufficient funds, etc.), an error message is displayed to the
user inside the iframe, but no error is raised by the plugin. Indeed,
in such as situation, the user keeps the possibility to retry
with another card.

## Tests

To test the integration on the **staging** platform:
* In the HTML, set:
```
<script src="https://s3-eu-west-1.amazonaws.com/pledg-assets/ecard-plugin/staging/plugin.min.js"></script>
```
* When testing the payment funnel, in the payment screen:
  * For the card number:
    * To test the funnel without 3DS: use *4000056655665556* (3DS not supported - PSP accepts direct and 3DS payments (aka *passive 3DS*))
    * To test the funnel with 3DS when it succeeds: use *4000000000003063* (3DS required - PSP accepts only 3DS payments)
    * To test the funnel with 3DS when it fails: use *378282246310005* (3DS not supported - PSP accept only 3DS payments)
    * To test other cases: use the test card numbers provided in the [documentation of Stripe](https://stripe.com/docs/testing#cards)
  * For the expiration date, use 02/22
  * For the CVC, use *222*

The specificities of the integration of a particular mode are detailed in the `Integration` section of the mode in this document.

## Demos

Many examples of integration are available [online](https://staging.merchant.ecard.pledg.co/home.html).

The easiest way to integrate the plugin is to copy/paste the code of the most relevant example and to adapt it to your particuliar needs.

## Front mode

### Use case

This mode should be used when the card payment form is a plain form (i.e. not an iframe) hosted on the merchant's payment page.
In this case, the eCard information can be directly passed to the card payment form on the merchant frontend.

### Sequence diagram

```mermaid
sequenceDiagram
Note right of Merchant Front: The customer clicks<br>on the Pledg button
Merchant Front->> Pledg Plugin: Javascript call
Note right of Pledg Plugin: The Pledg Plugin opens<br>inside the Merchant Front<br>an iframe containing<br>the Pledg Front
Pledg Plugin->> Pledg Front: HTTP GET
Note right of Pledg Front: The customer validates<br>the terms of the<br>payment facility
Note right of Pledg Front: The customer sets<br>the cards details
Pledg Front->> Pledg PSP: Customer card details
Pledg PSP->> Pledg Front: Token
Pledg Front->> Pledg Back: Token
Note right of Pledg Back: The token is registered<br>for future use
Pledg Back->> Pledg PSP: Charge request
Pledg PSP->> Pledg Back: OK
Pledg Back->> Pledg Virtual card provider: Virtual card request
Pledg Virtual card provider->> Pledg Back: Virtual card details
Pledg Back->> Pledg Front: Virtual card details
Pledg Front->> Pledg Plugin: Virtual card details
Pledg Plugin->> Merchant Front: Virtual card details
Merchant Front->> Merchant Back: Virtual card details
```

### Integration

This mode is particularly simple to deploy as there is strictly no
configuration to be completed on the merchant backend or merchant PSP.

For the specific case of a payment page using the Stripe form:
* Different public Stripe keys must be used in the staging and the production
* To determine if the Stripe form uses a token or a source:
  * Open the Stripe form in a browser (see an example [there](https://staging.merchant.ecard.pledg.co/front-stripe-token-demo.html))
  * Open the debugger in the browser
  * Position the mouse in the debugger on the Stripe form
  * Enter a card and validate
  * Some hidden inputs should be added at the bottom of the form, indicating if a token or a source is used, with which labels

### Result

The structure of the result passed to onSuccess is:

```json
{"card_number": "4242424242424242",
 "cvc": "123",
 "expiry_month": "04",
 "expiry_year": "2042",
 "purchase": {"meta_data": {"departure-date": "2022-03-30"},
              "reference": "PLEDG_8264294208561",
              "uid": "pur_7ec9d640-dec9-45bb-83ca-02fc22fbfb5c"}
}
```

### Notification

The merchant can specify at the purchase creation a webhook to be called when the virtual card is generated.

The webhook URL is an optional parameter of the purchase: `paymentNotificationUrl`.

This webhook is a *POST* which body contains the card number, expiration date and CVC.

When the virtual card is notified to the backend of the merchant, it is not sent to the front, which receives only an empty dictionary.

Example:

```json
POST /merchant_payment_notification_url

{"cvc":"789",
 "currency":"EUR",
 "expiration_date":"30-06-2020",
 "currency_symbol":"€",
 "uid":"vcar_da870335-769d-4ac9-9d23-09af03add773",
 "vcp_reference":"5132180289753097669",
 "account":{"uid":"acc_acf21f48-7138-4866-a59c-004fd90f30c8"},
 "updated":"04-12-2019",
 "created":"04-12-2019",
 "card_number":"5132180289753097",
 "purchase":{"uid":"pur_9ae3e186-6f94-449d-bc3e-f2221621e1e5",
             "reference":"A/31D135BA/V"},
 "merchant_uid":"mer_e821ccca-7a16-45a7-8b00-0a6015e16123",
 "amount":79.0,
 "amount_cents":7900}
```

### Demo

A demo in a classic payment page is available [there](https://staging.merchant.ecard.pledg.co/standard-demo.html).

Other demos, in a payment page using the Stripe payment form, are available: one using a
[token](https://staging.merchant.ecard.pledg.co/front-stripe-token-demo.html) and another
one using a [source](https://staging.merchant.ecard.pledg.co/front-stripe-source-demo.html).

## Back mode

### Use case

This mode should be used when:

1. The payment page is hosted by the merchant's Payment Service Provider or
2. The payment form is integrated on an iframe on the merchant's payment page. This is the case when the eCard information cannot be directly passed to the card payment form on the merchant frontend.

### Sequence diagram

```mermaid
sequenceDiagram
Note right of Merchant Front: The customer clicks<br>on the Pledg button
Merchant Front->> Pledg Plugin: Javascript call
Note right of Pledg Plugin: The Pledg Plugin opens<br>inside the Merchant Front<br>an iframe containing<br>the Pledg Front
Pledg Plugin->> Pledg Front: HTTP GET
Note right of Pledg Front: The customer validates<br>the terms of the<br>payment facility
Note right of Pledg Front: The customer sets<br>the cards details
Pledg Front->> Pledg PSP: Customer card details
Pledg PSP->> Pledg Front: Token
Pledg Front->> Pledg Back: Token
Note right of Pledg Back: The token is registered<br>for future use
Pledg Back->> Pledg PSP: Charge request
Pledg PSP->> Pledg Back: OK
Pledg Back->> Pledg Virtual card provider: Virtual card request
Pledg Virtual card provider->> Pledg Back: Virtual card details
Pledg Back->> Merchant PSP: Charge request
Merchant PSP->>Pledg Back: Transaction result
Pledg Back->> Pledg Front: Transaction result
Merchant PSP->>Merchant Back: Notification
Pledg Front->> Pledg Plugin: Transaction result
Pledg Plugin->> Merchant Front: Transaction result
Merchant Front->> Merchant Back: Transaction result
```

### Integration

#### Adyen

When the PSP of the merchant is Adyen, the merchant must provide to Pledg
the following parameters:

| description                                                            |
|------------------------------------------------------------------------|
| Account username                                                       |
| Password                                                               |
| Your merchant account (upper left hand corner of your Adyen dashboard) |

#### SystemPay / PayZen

When the PSP of the merchant is SystemPay or Payzen, the merchant must provide to Pledg
the following parameters:

- For SOAP webservices:

| description            |
|------------------------|
| Shop id                |
| Production Certificate |

- For REST webservices:

| description   |
|---------------|
| username      |
| password      |

#### Ogone

When the PSP of the merchant is Ogone , the merchant must provide to Pledg
the following parameters:

| description   |
|---------------|
| Login         |
| Api User      |
| Api Password  |
| Signature     |

Login is the global account.
To more infos about the Api User please see:

- https://payment-services.ingenico.com/int/en/ogone/support/guides/user%20guides/shopping-carts/what-is-an-api-user
- https://payment-services.ingenico.com/int/en/ogone/support/guides/integration%20guides/directlink/general-procedures-and-security-settings#apiuser

### Standard result

The structure of the result (which is independent of the merchant
PSP) passed to onSuccess is:

```json
{"transaction": {"created_at": "2018-12-10T16:12:36.122775Z",
                 "error": null,
                 "id": "psp_id",
                 "sandbox": False,
                 "status": "completed"},
 "purchase": {"meta_data": {"departure-date": "2022-03-30"},
              "reference": "PLEDG_6500735432411",
              "uid": "pur_c9299823-810e-4e8b-a7c3-bde856e6840c"}
}
```

The id is the true PSP id (for example Stripe), not the Pledg id. It can be retrieved in the PSP dashboard.

The transaction statuses are documented [there](https://docs.processout.com/payments/handle-status-changes-webhooks/#transaction-statuses).

### Payzen result

The structure of the result passed to onSuccess is:

```json
{"transaction": {"created_at": "2018-12-10T16:12:36.122775Z",
                 "error": null,
                 "id": "payzen_transaction_id",    # ex 9xxxx7
                 "uid": "payzen_transaction_uid",  # ex a717ae49e2844cb19ef19a702dc1xxxx
                 "status": "payzen_status_label",  # always AUTHORISED
                 "reference": "foo-bar-baz"}}
```

The Payzen web service `createPayment` called by the back returns in `paymentResponse` the transaction id and uid:

- the uid is the new Payzen id, which is the one to be used
- the id the old Payzen id, still provided for backward compatibility

For more information, see [there](https://payzen.io/en-EN/webservices-payment/implementation-webservices-v5/generating-an-uuid-backward-compatibility.html).

`paymentResponse` also contains the values `responseCode` and `transactionStatusLabel`.

If `responseCode` is different from `0`, the plugin calls the `onError` callback.

If `transactionStatusLabel` is different from `AUTHORISED`, the plugin calls the `onError` callback.

In the result above, `status` contains the `transactionStatusLabel` value, i.e. `AUTHORISED`.

For more information, see [there](https://payzen.io/en-EN/webservices-payment/implementation-webservices-v5/49commonresponse.html).

For SOAP webservice the result can be provided as a JWT, encoded with a secret shared between Pledg and the merchant.

For REST webservice, if the purchase was configured with a `payment_notification_url` Payzen will send an IPN to this url.
For more information on Payzen's IPN, see [there](https://payzen.io/en-EN/rest/V4.0/api/kb/ipn_usage.html)

### Standard notification

The merchant can specify at the purchase creation a webhook to be called at the end of the PSP payment (i.e. when the PSP returns to Pledg the payment result).

#### Body

The webhook URL is an optional parameter of the purchase: `paymentNotificationUrl`.

This webhook is a *POST* which body contains the transaction id and status.

Example:

```json
POST /merchant_payment_notification_url

{"created_at": "2019-04-04T12:20:34.97138Z",
 "id": "test-valid",
 "additional_data": {"xx": "yy"},
 "metadata": {"foo":"bar"},
 "status": "completed",
 "sandbox": "true",
 "error": "",
 "reference": "PLEDG_1086986786391",
 "signature": "B1C777835C01CA96AC4C3097FD46A7CA49B92BE157EDE0CB3552880D12A15359"}
```

`additional_data` contains optional additional data sent by the PSP, for example ids to make refunds.

`metadata` contains optional metadata sent originally by the merchant. This can be useful to allow the merchant to map the incoming notifications with the original purchases.

The transaction statuses are documented [there](https://docs.processout.com/payments/handle-status-changes-webhooks/#transaction-statuses).

#### Signature of the result

This webhook has a `signature` field to check that it was sent from Pledg

Pledg will create a secret key for the merchant, and the merchant will use it to check the signature following these steps.

Here are the notification keys used to calculate the signature:

- `created_at`
- `error`
- `id`
- `reference`
- `sandbox`
- `status`

Please note that you must not use the `additional_data`, `metadata` and `signature` keys.

Here is an example with the secret key as `SECRET`.

1. Sort by alphabetic order these parameters:

```json
{"created_at": "2019-04-04T12:20:34.97138Z",
 "error": "",
 "id": "test-valid",
 "reference": "PLEDG_1086986786391",
 "sandbox": "true",
 "status": "completed"}
```

2. Concatenate the parameters in the form `key=value` with the secret key between two parameters:

```json
created_at=2019-04-04T12:20:34.97138ZSECRETerror=SECRETid=test-validSECRETreference=PLEDG_1086986786391SECRETsandbox=trueSECRETstatus=completed

```

3. Apply the SHA256 algorithm to the string:
(you can check it with https://passwordsgenerator.net/sha256-hash-generator/)

```
B1C777835C01CA96AC4C3097FD46A7CA49B92BE157EDE0CB3552880D12A15359
```

4. Check the value of the signature field received.

### Payzen notification

Let us consider a merchant using Payzen and where the customer completes the payment with the Payzen front library.

In this situation, Payzen normally notifies the result of the payment to the merchant.

If now the merchant integrates Pledg in back mode, Payzen does not notify the merchant because the payment is completed server-to-server.

The Pledg platform can then send the same notification as the one Payzen should have have sent, so that the integration is seamless for the merchant.

The merchant must specify at the purchase creation the webhook URL to be called at the end of the payment.

This webhook URL is an optional parameter of the purchase: `paymentNotificationUrl`.

### Ogone notification

The principle is exactly the same as for Payzen, for the same reasons.

### Demo

A demo is available [there](https://staging.merchant.ecard.pledg.co/back-stripe-demo.html).

## Transfer mode

### Use case

Instead of paying the merchant using an ecard, payment will be done by sending money to the merchant using bank transfers.
Once a purchase is validated from Pledg side, the full purchase amount will be transfered to the merchant at the end of the day (money should be received in the next 3 business days).
If several purchases are made for a given merchant, they will be aggregated all together in one transfer.

### Sequence diagram

```mermaid
sequenceDiagram
Note right of Merchant Front: The customer clicks<br>on the Pledg button
Merchant Front->> Pledg Plugin: Javascript call
Note right of Pledg Plugin: The Pledg Plugin opens<br>inside the Merchant Front<br>an iframe containing<br>the Pledg Front
Pledg Plugin->> Pledg Front: HTTP GET
Note right of Pledg Front: The customer validates<br>the terms of the<br>payment facility
Note right of Pledg Front: The customer sets<br>the cards details
Pledg Front->> Pledg PSP: Customer card details
Pledg PSP->> Pledg Front: Token
Pledg Front->> Pledg Back: Token
Note right of Pledg Back: The token is registered<br>for future use
Pledg Back->> Pledg PSP: Charge request
Pledg PSP->> Pledg Back: OK
Note right of Pledg Back: The Pledg Back<br>registers the transfer<br> for future execution
Pledg Back->> Pledg Front: OK
Pledg Front->> Pledg Plugin: OK
Pledg Plugin->> Merchant Front: OK
Merchant Front->> Merchant Back: OK
```

### Integration

This mode is particularly simple to deploy as there is strictly no
configuration to be completed on the merchant backend or merchant PSP.

### Result

The structure of the result passed to onSuccess is:

```json
{"purchase": {"meta_data": {"departure-date": "2022-03-30"},
              "reference": "PLEDG_6500735432411",
              "uid": "pur_c9299823-810e-4e8b-a7c3-bde856e6840c"}
}
```

### Notification

To notify the merchant that the purchase was completed successfully, a notification will be sent using `paymentNotificationUrl` as a `POST`.
The body of the notification will be as such:

```json
{
   "reference":"purchase_reference",
   "created":"2020-09-17 15:00:02.052177",
   "transfer_order_item_uid":"tri_fasdkfiasfsd234nfs7f5d",
   "merchant_uid":"mer_e821ccca-7a16-45a7-8b00-0a6015e16123",
   "purchase_uid":"pur_6c48d42b-f29b-4f84-bee8-3cb2b964b600",
   "amount_cents":10000
}
```

If there is a `secret` in your [Merchant parameters](#merchant-parameters), it will be used to sign the notification body with jwt.

```
{
    "signature": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZWZlcmVuY2UiOiJwdXJjaGFzZV9yZWZlcmVuY2UiLCJjcmVhdGVkIjoiMjAyMC0wOS0xNyAxNTowMDowMi4wNTIxNzciLCJ0cmFuc2Zlcl9vcmRlcl9pdGVtX3VpZCI6InRyaV9mYXNka2ZpYXNmc2QyMzRuZnM3ZjVkIiwiYW1vdW50X2NlbnRzIjoxMDAwMH0.6ZhlvdcPgjwwBfxCrRpzaBGoRxTCoqtWJzFhB8pw4Ys"
}
```

### Demo

A demo is available [there](https://staging.merchant.ecard.pledg.co/transfer-demo.html).

## Direct call of the Pledg front

Normally, the eCard plugin is loaded in the payment page of the merchant and the plugin calls the Pledg front in an iframe. All in all, for the merchant, the Pledg front is hidden behind by the plugin.

Nevertheless, some merchants do not want to load the eCard plugin in their payment page. To address this use case, it is possible to call directly the Pledg front, without passing through the eCard plugin.

The specificities of this integration are the following:
* The settings `redirectUrl` and `cancelUrl` are mandatory
* The settings `container`, `onSuccess`, `onCancel`, `onError` and `onOpen` are not applicable
* The host of the URL is `https://staging.front.ecard.pledg.co` in staging and `https://front.ecard.pledg.co` in production
* The path of the URL is  `/purchases`
* It is recommended to add a random text at the end of the URL to prevent any caching effect

An exemple of such an integration is available [there](https://staging.merchant.ecard.pledg.co/split-url-call.html).

If you want to implement the direct call of the Pledg front with signed data, you can add the parameter `signature`
to the url (see [Signature](#signature-of-the-parameters)).

An exemple of direct call of Pledg front using signature can be found here [there](https://staging.merchant.ecard.pledg.co/split-url-call-with-signature.html)

It must be underlined that this integration provides a worse user experience, compared to the integration with the plugin.

## Direct call of the Pledg back

This integration is possible only when the client pays by transfer.

The API is exactly the same as [the one used to call the front](#direct-call-of-the-pledg-front), with the following differences:
* The settings `redirectUrl` et `cancelUrl` are not applicable
* The host of the URL is `https://staging.back.ecard.pledg.co` in staging and `https://back.ecard.pledg.co` in production
* The path of the URL is `/api/payment_by_transfer`
* The signature is mandatory

To ease the accounting reconciliation, the client must set in the transfer descriptor the purchase UID returned by Pledg.

An exemple of such an integration is available [there](https://staging.merchant.ecard.pledg.co/payment_by_transfer.html).

## Refunds

### Front and back modes

When the merchant wants to refund a customer, there are 2 situations:
* The merchant has already debited the virtual card:
  * The merchant must then recredit the virtual card. About 2 days later, Pledg will be notified of this recredit and will refund the customer.
* The merchant has not debited the virtual card yet:
  * If the merchant does nothing: Pledg will be notified about 10 days later that the virtual card has not been debited, and will refund the customer.
  * If the merchant uses the endpoint `https://back.ecard.pledg.co/api/purchases/{purchase_uid}/release POST`, Pledg immediately refunds the customer. This endpoint is protected, i.e. the merchant must use the credentials provided by Pledg to that aim.

### Transfer mode

For the payment by transfer, the merchant can issue a refund by using the endpoint `https://back.ecard.pledg.co/api/purchases/{purchase_uid}/credit_by_transfer POST`, with the desired `amount_cents` in the body. This endpoint is protected, i.e. the merchant must use the credentials provided by Pledg to that aim.

## Payment schedule simulation

We offer the possibility for the merchant to simulate the payment schedule that the client would pay.
It is a `post` request to the endpoint : `api/users/me/merchants/<string:merchant_uid>/simulate_payment_schedule`

### JSON parameters
| Parameter | Description | Required |
|------|---------------|-----------|
| `amount_cents` | amount_cents of the purchase | true |
| `created` | date when the purchase would be created (format : "yyyy-mm-dd") | true |
| `second_installment_date`|  for installment payments | false |

## Redirection payment

For the redirection payment, the sequence diagrams mentioned above are not completely relevant.

Instead, the messages exchanged are detailed below.

### Redirection in an iframe

1. The user clicks on the Pledg payment button, which opens the external PSP payment funnel inside an iframe
2. The user completes the payment in the external PSP web site
3. The Pledg backend is notified by the PSP that the payment completed

a) Front mode:

4. The Pledg backend generates an eCard credited with the total amount of the purchase
5. The plugin returns the details of the eCard
6. The merchant frontend submits the eCard to the merchant backend for payment, as if it was a standard card
7. The user lands on the merchant payment confirmation page

b) Back mode:

4. The Pledg backend generates an eCard credited with the total amount of the purchase
5. The Pledg backend submits the eCard to the merchant PSP for payment, via the PSP API
6. The plugin returns the result of the payment
7. The merchant frontend submits the result of the payment to the merchant backend
8. The user lands on the merchant payment confirmation page

c) Transfer mode:

4. The Pledg backend adds the purchase amount to the global amount it will transfer to the merchant at the end of the day.
5. The plugin returns the result of the payment
6. The user lands on the merchant payment confirmation page

### Redirection in a new page

1. The user clicks on the Pledg payment button, which opens the external PSP payment funnel in a new page
2. The user completes the payment in the external PSP web site
3. The Pledg backend is notified by the PSP that the payment completed

a) Front mode:

4. The Pledg backend generates an eCard credited with the total amount of the purchase
5. The customer is redirected to the merchant web site (which is normally notified by its PSP that the payment was completed), with the details of the eCard appended to the URL
6. The merchant frontend submits the eCard to the merchant backend for payment, as if it was a standard card
7. The user lands on the merchant payment confirmation page

b) Back mode:

4. The Pledg backend generates an eCard credited with the total amount of the purchase
5. The Pledg backend submits the eCard to the merchant PSP for payment, via the PSP API
6. The customer is redirected to the merchant web site (which is normally notified by its PSP that the payment was completed), with the result of the payment appended to the URL

c) Transfer mode:

4. The Pledg backend adds the purchase amount to the global amount it will transfer to the merchant at the end of the day.
5. The customer is redirected to the merchant web site (which is normally notified by its PSP that the payment was completed)
6. The user lands on the merchant payment confirmation page

## Tag manager

The code of the plugin and the code to instantiate the plugin can be loaded by a tag manager.
Be aware that tag manager is likely to be blocked by content blockers (ads, tracking).
Including this script through it may cause issues if tag manager don't load properly.

The configuration for GTM is the following:

1. Create a tag in the Google Tag Manager interface. This tag has a GTM_ID and contains a piece of HTML/Javascript code to be injected in the payment page.

2. Set in the tag the code detailed in the [JavaScript](#javascript) section above. The only difference is that the parameters passed to the plugin are the attributes of the `dataLayer` structure (see the following step).

```javascript
<script src="https://s3-eu-west-1.amazonaws.com/pledg-assets/ecard-plugin/<BRANCH>/plugin.min.js"></script>

<script type="text/javascript">

var button = document.querySelector("#pledg-button")

new Pledg(button, {
    // the Pledg merchant id
    merchantUid: "mer_uid",
    title: {{dataLayer - title}},
    subtitle: {{dataLayer - subtitle}},
    email: document.querySelector("#customer-email").value,
    amountCents: {{dataLayer - amountCents}},
    reference: {{dataLayer- reference}},
    currency: {{dataLayer - currency}},
    ...
})
...
</script>
```

3. At the beginning of the `head` and `body` sections of the HTML payment page, add the scripts provided by the Google Tag Manager (see the section *Install Google Tag Manager* in the Google Tag Manager administration interface)

4. At the bottom of the HTML payment page, set the `dataLayer` variables and trigger the event to load the tag

```javascript
<script type="text/javascript">
    // Set the variables
    dataLayer.push({
        "title": "STAY IN LONDON",
        "subtitle": "Fly + Hotel 2 nights (3 rooms)",
        "amountCents": 30550,
        "reference": "order_123",
        "currency": "EUR"
    })
    // Trigger the tag once dataLayer variables are set
    dataLayer.push({
        "event": "loadPledgTag"
    })
</script>
```

## Split purchase end notification

The merchant can define a webhook to be notified of the end of the split purchase.

This webhook is called when all co-buyers have paid their share or, at the latest, at the end of a period of 48 hours after the purchase

This webhook is a *POST* which body contains the merchant reference of the purchase and the Pledg uid the purchase:

```
POST /merchant_webhook_purchase_end
{"reference": "merchant_purchase_reference", "uid": "pledg_purchase_uid"}
```

This webhook is provided only for information, without any error managment or retry.

## 3DS

The virtual cards do not support the 3DS.

Therefore, if, in some situations, the merchant forces the 3DS verification, it will always fail.

To avoid this, the merchant should deactivate the 3DS verification for the virtual cards provided by Pledg, which can be identified with their BIN:
- 513218 (for Arkea)
- 522719 (for Edenred corporate)
- 591014 (for Edenred consumer)

## Amount and type of the initial charge

The amount of the initial charge made on the customer account as well as its type (preauthorization or capture) depends on the payment facility.

| Payment facility | Type              | Amount                          |
| ---------------- | ----------------- | ------------------------------- |
| Split            | Preauthorization  | Total amount of the purchase    |
| Installment      | Capture           | Amount of the first installment |
| Deferred         | Preauthorization  | Percentage of the total amount of the purchase |
| Down payment     | Capture           | Amount of the deposit           |

