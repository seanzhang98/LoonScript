//仅供学习参考，请勿商用
//作者：Sean

var obj = JSON.parse($response.body);

obj.account.subscription_expiry_date="2099-09-01T15:30:43.000Z";

obj.account.monitor_interval=1;

obj.account.monitor_limit: 200;

obj.account.payment_period: 1;

obj.account.active_subscription = {
      "status": "active",
      "provider": "64c7e1bfb6dabf582ddafcf6",
      "id": 52490,
      "plan": {
        "id": 1,
        "featureDefinition": {
          "features": [
            "ssl-monitoring",
            "domain-expiration",
            "monitor-advanced-settings",
            "maintenance-window",
            "heartbeat",
            "advanced-notifications",
            "psp-customization",
            "psp-custom-domain",
            "psp-analytics",
            "bulk-import",
            "bulk-export",
            "api",
            "team-integrations",
            "subusers-notif-only"
          ],
          "limits": {
            "subusers-notif-only": 0,
            "psp": 3,
            "monitor-interval": 60,
            "subusers": 0,
            "personal-alert-contacts": 1
          }
        },
        "planName": "Pro"
      },
      "paymentPeriod": "monthly",
      "subscription_expiry_date": "2099-09-01T15:30:43.000Z",
      "monitorLimit": 200
};

$done({body:JSON.stringify(obj)});