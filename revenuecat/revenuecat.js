var body = $response.body;
var obj = JSON.parse(body);

obj.subscriber.entitlements = {
      "co.bergen.Darkroom.entitlement.allToolsAndFilters": {
        "expires_date": "2099-07-15T05:14:16Z",
        "grace_period_expires_date": null,
        "product_identifier": "co.bergen.Darkroom.product.year.everything",
        "purchase_date": "2022-07-08T05:14:16Z"
      },
      "co.bergen.Darkroom.entitlement.selectiveAdjustments": {
        "expires_date": "2099-07-15T05:14:16Z",
        "grace_period_expires_date": null,
        "product_identifier": "co.bergen.Darkroom.product.year.everything",
        "purchase_date": "2022-07-08T05:14:16Z"
      },
      "premium": {
        "grace_period_expires_date": null,
        "purchase_date": "2023-06-27T15:32:50Z",
        "product_identifier": "com.neybox.pillow.premium.year",
        "expires_date": "2099-07-15T05:14:16Z"
      },
      "Royale": {
        "grace_period_expires_date": null,
        "purchase_date": "2023-06-27T15:39:30Z",
        "product_identifier": "com.samvermette.Transit.royale.group2.annual",
        "expires_date": "2099-07-15T05:14:16Z"
      },
      "premium": {
        "grace_period_expires_date": null,
        "purchase_date": "2023-06-27T17:08:00Z",
        "product_identifier": "spark_799_1m_1w0",
        "expires_date": "2099-07-04T17:08:00Z"
      },
      "spark2": {
        "grace_period_expires_date": null,
        "purchase_date": "2022-08-05T10:26:37Z",
        "product_identifier": "rc_promo_spark2_lifetime",
        "expires_date": "2099-06-18T10:26:37Z"
      },
      "MySwimPro Coach": {
        "grace_period_expires_date": null,
        "purchase_date": "2023-06-28T14:36:15Z",
        "product_identifier": "com_myswimpro_elite_coach_yearly_v1_apple_v1",
        "expires_date": "2099-07-05T14:36:15Z"
      }
    },
  
obj.subscriber.subscriptions = {
      "co.bergen.Darkroom.product.year.everything": {
        "billing_issues_detected_at": null,
        "expires_date": "2099-07-15T05:14:16Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2022-07-08T05:14:17Z",
        "ownership_type": "PURCHASED",
        "period_type": "normal",
        "purchase_date": "2022-07-08T05:14:16Z",
        "store": "app_store",
        "unsubscribe_detected_at": null
      },
      "com.neybox.pillow.premium.year": {
        "original_purchase_date": "2023-06-27T15:32:51Z",
        "expires_date": "2099-07-15T05:14:16Z",
        "is_sandbox": false,
        "refunded_at": null,
        "auto_resume_date": null,
        "grace_period_expires_date": null,
        "period_type": "normal",
        "purchase_date": "2023-06-27T15:32:50Z",
        "billing_issues_detected_at": null,
        "ownership_type": "PURCHASED",
        "store": "app_store",
        "unsubscribe_detected_at": null
      },
      "com.samvermette.Transit.royale.group2.annual": {
        "original_purchase_date": "2023-06-27T15:39:31Z",
        "expires_date": "2099-07-15T05:14:16Z",
        "is_sandbox": false,
        "refunded_at": null,
        "auto_resume_date": null,
        "grace_period_expires_date": null,
        "period_type": "trial",
        "purchase_date": "2023-06-27T15:39:30Z",
        "billing_issues_detected_at": null,
        "ownership_type": "PURCHASED",
        "store": "app_store",
        "unsubscribe_detected_at": null
      },
      "spark_b_4199_1y_1w0": {
        "original_purchase_date": "2022-10-06T08:29:18Z",
        "expires_date": "2099-10-01T11:39:07Z",
        "is_sandbox": false,
        "refunded_at": null,
        "auto_resume_date": null,
        "grace_period_expires_date": null,
        "period_type": "normal",
        "purchase_date": "2022-10-07T10:39:07Z",
        "billing_issues_detected_at": null,
        "ownership_type": "PURCHASED",
        "store": "app_store",
        "unsubscribe_detected_at": null
      },
      "rc_promo_spark2_lifetime": {
        "is_sandbox": false,
        "period_type": "normal",
        "billing_issues_detected_at": null,
        "unsubscribe_detected_at": null,
        "grace_period_expires_date": null,
        "expires_date": "2099-06-18T10:26:37Z",
        "refunded_at": null,
        "original_purchase_date": "2022-08-05T10:26:37Z",
        "auto_resume_date": null,
        "purchase_date": "2022-08-05T10:26:37Z",
        "store": "promotional"
      },
      "spark_799_1m_1w0": {
        "original_purchase_date": "2023-06-27T17:08:02Z",
        "expires_date": "2099-07-04T17:08:00Z",
        "is_sandbox": false,
        "refunded_at": null,
        "auto_resume_date": null,
        "grace_period_expires_date": null,
        "period_type": "normal",
        "purchase_date": "2023-06-27T17:08:00Z",
        "billing_issues_detected_at": null,
        "ownership_type": "PURCHASED",
        "store": "app_store",
        "unsubscribe_detected_at": null
      },
      "com_myswimpro_elite_coach_yearly_v1_apple_v1": {
        "original_purchase_date": "2023-06-28T14:36:16Z",
        "expires_date": "2099-07-05T14:36:15Z",
        "is_sandbox": false,
        "refunded_at": null,
        "auto_resume_date": null,
        "grace_period_expires_date": null,
        "period_type": "normal",
        "purchase_date": "2023-06-28T14:36:15Z",
        "billing_issues_detected_at": null,
        "ownership_type": "PURCHASED",
        "store": "app_store",
        "unsubscribe_detected_at": null
      }
    }


body = JSON.stringify(obj); 
$done({body});