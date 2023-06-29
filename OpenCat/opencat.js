var body = $response.body;
var obj = JSON.parse(body);

obj.app = {
    "status": "activated",
    "update_required": false,
    "report_upload_variant": 2
  }

body = JSON.stringify(obj); 
$done({body});