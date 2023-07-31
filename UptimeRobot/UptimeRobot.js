//仅供学习参考，请勿商用
//作者：Sean

var obj = JSON.parse($response.body);

obj.account.subscription_expiry_date="2099-09-01T15:30:43.000Z";

obj.account.monitor_interval=1;

$done({body:JSON.stringify(obj)});