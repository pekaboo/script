/***********************************

> 应用名称：阿里云盘
> 脚本作者：Cuttlefish
> 微信账号：墨鱼手记
> 更新时间：2022-10-16
> 通知频道：https://t.me/ddgksf2021
> 投稿助手：https://t.me/ddgksf2013_bot
> 脚本功能：优化首页display
> 问题反馈：📮 ddgksf2013@163.com 📮
> 特别说明：⛔⛔⛔
            本脚本仅供学习交流使用，禁止转载售卖
            ⛔⛔⛔



[rewrite_local]

# ～ 阿里云盘（2022-10-16）@ddgksf2013
^https?:\/\/api\.aliyundrive\.com\/apps\/v\d\/users\/apps\/widgets$ url script-response-body https://codeberg.org/ddgksf2013/Cuttlefish/raw/branch/master/Script/alidrive.js

[mitm]

hostname=api.pixcakeai.com

***********************************/

// let ddgksf2013 = JSON.parse($response.body);
// if (ddgksf2013.result) {
//     ddgksf2013.result = Object.values(ddgksf2013.result).filter(item => (item["appCode"]=="file" || item["appCode"]=="video"));
// }

let xsdg_user_info = '{"code":0,"data":{"complete_info_dialog":false,"org_backend_info":{"access_url":"https://business.pixcakeai.com","is_show":false},"org_info":{"info_state":2,"tag":0,"usage_mode":1},"patch":0,"show_complete_info":false,"show_product_orders":true,"user_info":{"id":1,"is_new":0,"is_vip":1,"name":"","org_id":1,"phone":"13888888888","phone_cc":86,"role_id":1,"state":1,"type":1,"uuid":"d2253194-38c5-11ed-a261-0242ac120002"},"vip_info":[{"end_time":"2099-09-13T09:26:27+08:00","left_count":999,"pre_left_count":999,"start_time":"2022-09-13T09:26:27+08:00","total_count":999}],"watermark":0}}'
let xsdg_user_post = '{"code":0,"data":{}}'
let xsdg_user_login = '{"code":1,"error":"verify code not exist","message":"fuck it"}'
// let xsdg_user_login = '{"code":0,"data":{"oid":383778,"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjowLCJlbnYiOiJwcm8iLCJleHAiOjE2NzIyOTM4MzYsIm9wZW5pZCI6IiIsInBob25lIjoiMTgwOTQ3NDQ5OTYiLCJzZXNzaW9uX2tleSI6IiIsInRva2VuX3R5cGUiOjEsInVzZXJfaWQiOjM4NTg3MH0.hO6dZ_rbIAEW6y3NMomBJIJ6bp_n0EwsIHCOYVXrlZE","user_id":385870}}'
if($request.url.indexOf("/v1/api/app/user/info") != -1){
    $done({body: xsdg_user_info});
}else if($request.url.indexOf("v2/api/project/export/post") != -1) {
    $done({body: xsdg_user_post});
}else if($request.url.indexOf("/v4/api/app/project_list") != -1) {
    // let rst = JSON.parse($response.body)  
    // $done({body: JSON.stringify(rst)});
    // $done({body: '{"code":0,"error":"Insufficient Funds","message":"xxxxxxxxxxxxx"}'});
    $done({body: xsdg_user_post});
}else if($request.url.indexOf("/v2/app/login") != -1) {
    $done({body: xsdg_user_login});
}else {
    $done({body: $response.body});
}