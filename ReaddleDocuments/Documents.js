var body = $response.body;
var obj = JSON.parse(body);

obj = {
        "originalTransactionId": 480001553327238,
        "inAppStates": [
          {
            "productId": "com.readdle.ReaddleDocsIPad.subscription.month10_allusers",
            "subscriptionExpirationDate": "16:56 01/10/2099",
            "originalTransactionId": 480001553327238,
            "productName": "subscription",
            "isEligibleForIntroPeriod": false,
            "isInBillingRetryPeriod": false,
            "type": "subscription",
            "entitlements": [
              "ios.documents.pdf"
            ],
            "subscriptionGroupId": "20555224",
            "subscriptionState": "trial",
            "subscriptionAutoRenewStatus": "autoRenewOn",
            "isInGracePeriod": false
          },
          {
            "originalTransactionId": "0000",
            "entitlements": [],
            "type": "custom purchase",
            "productId": "documents6-user"
          }
        ],
        "receiptStatus": "ok",
        "chargingPlatform": "iOS AppStore",
        "bundleId": "com.readdle.ReaddleDocsIPad",
        "receiptId": 1442067367001,
        "statisticsInfo": {
          "events": []
        },
        "externalId": "9d1d307a-ff5a-5e13-abf3-6dc3b2dcc718"
      }

body = JSON.stringify(obj); 
$done({body});