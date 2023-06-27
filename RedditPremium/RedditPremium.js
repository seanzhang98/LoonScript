//RedditPremium
//仅供学习参考，请勿商用
//作者：Sean

var obj = JSON.parse($response.body);

obj.["has_subscribed_to_premium"]=true;

$done({body:JSON.stringify(obj)});