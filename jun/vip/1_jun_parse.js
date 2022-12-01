text = `hostname=api.bjxkhc.com,baidu.com,caiyunapp.com,

# https://moyu-server.miht.ml/api/notion/text-code?page_id=38b5ae07-f1d2-4c42-a35e-a54fada76e87
# ======= A ======= #
# 爱美剧Vip (by huihui）(官网：app.meiju2018.com)    api.bjxkhc.com
#ads
^http(s)://api.bjxkhc.com/index.php/app/ios/ads/index url reject-dict
^http(s)://api.bjxkhc.com/index.php/app/ios/ver/index_ios$ url reject
^http(s)://api.bjxkhc.com/index.php/app/ios/pay/ok$ url reject-dict
#VIP&ads
^https?:\/\/api.bjxkhc.com\/index\.php\/app\/ios\/(vod\/show|(user|vod|topic|type)\/index) url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/aimeiju.js


# ======= B ======= #
#百度网盘解锁视频超清在线看，点重试
https:\/\/pan\.baidu\.com\/rest\/2\.0\/membership\/user url script-response-body https://raw.githubusercontent.com/ThorJsbox/QuanX/master/Rewrite_local/APP/BaiduCloud.js

# ======= C ======= #
#彩云（解锁VIP）   biz.caiyunapp.com
^https:\/\/biz\.caiyunapp\.com\/v2\/user.+ url script-response-body https://raw.githubusercontent.com/zwf234/rules/master/js/caiyun.js


# ======= D ======= #
# ======= E ======= #
# ======= F ======= #
# Fit健身会员 （by黑黑酱）
#^https:\/\/bea\.sportq\.com\/SFitWeb\/sfit\/getUserBaseInfo url script-response-body https://raw.githubusercontent.com/liu123aq/nzw9314_QuantumultX/master/Script/fit.js

# ======= G ======= #
# ======= H ======= #
# ======= I ======= #
# ======= J ======= #
# ======= K ======= #
# keep解锁会员    *.gotokeep.com
^https://(.+).gotokeep.com(/athena/v5/people/my|/nuocha/plans) url script-response-body https://raw.githubusercontent.com/zwf234/rules/master/js/keep.js
# Keep 解锁私人课程和动作库 (QX存在bug 该脚本可能无法生效)
#^https:\/\/api\.gotokeep\.com\/(.+\/subject|.+\/dynamic) url script-response-body https://raw.githubusercontent.com/liu123aq/nzw9314_QuantumultX/master/NobyDa/Surge/JS/Keep.js


# ======= L ======= #
# ======= M ======= #
# 美图秀秀(2022.01.17)    api.xiuxiu.meitu.com, h5.xiuxiu.meitu.com
# 注：解锁高级会员（包括但不限于：付费海报模板、高级滤镜、高级素材等），无须登陆
^https?:\/\/(h5|api)\.xiuxiu\.meitu\.com\/v\d\/(h\d\/vip|vip|user)\/ url script-response-body https://raw.githubusercontent.com/I-am-R-E/QuantumultX/main/JavaScript/MeiTuXiuXiu.js

#轻颜相机 & ulike & 蒸汽波相机(vaporcam)三合一 解锁VIP(By @s y & Alex0510)
https://(commerce-.*api|pay).(faceu|wecut).(com|mobi)/(commerce|apple)/(iosAppVerifyReceipt.php|v1/subscription/user_info) url script-response-body https://raw.githubusercontent.com/liu123aq/nzw9314_QuantumultX/master/Script/qyxj.js

# 美颜相机一次性解锁内购（by黑黑酱）
#^https:\/\/api\.meiyan\.com\/iap\/verify\.json url script-response-body https://raw.githubusercontent.com/liu123aq/nzw9314_QuantumultX/master/Script/myxj.js

# 美颜相机解锁vip    *.meiyan.com, *.meitu.com
^https://.*.mei(yan|tu).com\/.* url script-response-body https://raw.githubusercontent.com/Alex0510/Eric/master/surge/Script/myCamera.js

# ======= N ======= #
# 南方周末(2022.01.21)。     api.infzm.com
# 注：登陆后，白嫖年费会员到2030年，白嫖年费会员所有课程 ，白嫖所有付费课程。
^https?:\/\/api\.infzm\.com\/mobile\/(user|contents\?|contents\/\d+\?|contents\/\d+\/isview\?|course_borrow|courses\/\d+\?|mall|course_items) url script-response-body https://raw.githubusercontent.com/I-am-R-E/QuantumultX/main/JavaScript/NanFangZhouMo.js

# ======= O ======= #
# ======= P ======= #

#无限试用Python Ai
^http:\/\/ws\.60he\.com\/user* url script-response-body https://raw.githubusercontent.com/ThorJsbox/QuanX/master/Rewrite_local/APP/PythonAI.js


#泼辣修图    api.polaxiong.com
https:\/\/api\.polaxiong\.com\/v1\/payments\/appleiap\/receipts/confirmation url script-request-body https://qxnav.com/rules/QuantumultX/js/pola.js


#  解锁PlaneFinder高级订阅    app-live.planefinder.net
^https?:\/\/app\-live\.planefinder\.net\/api\/v\d+\/account\/\w+\/login url script-response-body https://raw.githubusercontent.com/I-am-R-E/Functional-Store-Hub/Master/PlaneFinder/Script/PlaneFinder.js
# > 11 PornHub[网页优化] - 网站地址：https://cn.pornhub.com
^https:\/\/(cn|www)\.pornhub\.com\/_xa\/ads url reject-dict
^https?:/\/(cn|www)\.pornhub\.com(\/?$|\/([?]|view|video).*$) url script-response-body https://qxnav.top/rules/QuantumultX/js/backup/js/pornhub.js

# > 11 PornHub[网页优化]@ddgksf2013 - 网站地址：https://cn.pornhub.com  更多网站请看 https://ghproxy.com/https://github.com/hw1991/qx/blob/main/rewrite/vip.conf
^https:\/\/(cn|www)\.pornhub\.com\/_xa\/ads url reject-dict
^https?:/\/(cn|www)\.pornhub\.com(\/?$|\/([?]|view|video).*$) url script-response-body https://github.com/ddgksf2013/Cuttlefish/raw/master/Html/JS/pornhub.js


# ======= Q ======= #
# ======= R ======= #
# ======= S ======= #
# 扫描全能王-手机扫描仪+解锁VIP      ap*.intsig.net
^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/smqnw.js

#解锁Spotify 部分 Premium ，需ios15以上系统   spclient.wg.spotify.com
^https:\/\/spclient\.wg\.spotify\.com\/(bootstrap\/v1\/bootstrap|user-customization-service\/v1\/customize)$ url script-response-body https://raw.githubusercontent.com/app2smile/rules/master/js/spotify-proto.js


# ======= T ======= #
# TestFlight账户管理脚本     testflight.apple.com
^https:\/\/testflight\.apple\.com\/v\d\/(app|account|invite)s\/ url script-analyze-echo-response https://raw.githubusercontent.com/NobyDa/Script/master/TestFlight/TestFlightAccount.js

# > 解除国区TF下载限制
^https?:\/\/testflight\.apple\.com\/v2\/accounts\/.*\/apps\/\d*/builds/\d*/install url request-body storefrontId" : ".*" request-body storefrontId" : "143441-1,29"

# > TIDAL解锁HiFi Plus   api.tidal.com
# 脚本功能：TIDAL解锁HiFi Plus   软件版本：2.48.0【美区下载】   下载地址：http://t.cn/A662gqIO
^https?:\/\/api\.tidal\.com\/v1\/users\/\d+\/subscription.+ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/TIDALHiFiPlusCrack.js
^https?:\/\/api\.tidal\.com\/v1\/tracks/\d+\/playbackinfopostpaywall.+ url script-analyze-echo-response https://raw.githubusercontent.com/yqc007/QuantumultX/master/TidalHiFiPlusCrack.js

# Termius 解锁本地pro  (By Maasea)
https:\/\/api\.termius\.com\/api\/v3\/bulk\/account\/ url script-response-body https://raw.githubusercontent.com/liu123aq/nzw9314_QuantumultX/master/NobyDa/Surge/JS/Termius.js


# ======= U ======= #
# ======= V ======= #
# ======= W ======= #
# > WPS解锁稻壳会员
^https?:\/\/account\.wps\.cn\/api\/v3\/mine\/vips url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/WPSDocerVIPuserCrack.js
^https?:\/\/.+\.(docer.)?wps.cn\/(user\/v1\/vip|android\/mb\/buy|download\/v1\/ios|partner\/invoke\/usable|(api|rank)\/v1(\/mobile\/mb)?\/detail) url script-request-header https://raw.githubusercontent.com/yqc007/QuantumultX/master/WPSDocerVIPowerCrack.js



#网易云(APP出现播放错误)
;^http[s]?:\/\/.+(player/url|playlist|entrance|/eapi/search/).*$ url script-request-header https://raw.githubusercontent.com/gjwj666/qx/main/wyy.js

#网易蜗牛读书+解锁VIP     p.du.163.com
^https:\/\/p\.du\.163\.com\/gain\/readtime\/info\.json url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/yywnds.js

# 网易有道词典+解锁VIP     dict.youdao.com
^https:\/\/dict\.youdao\.com\/vip\/user\/status url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/wyydcd.js

# ======= X ======= #
# 迅雷不限速     xluser-ssl.xunlei.com
https://xluser-ssl.xunlei.com/xluser.core.login/v3/getuserinfo url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/xunlei.js

# XMind思维导图 更新时间：2022.08.13 解锁Xmind思维导图订阅到2030年   www.xmind.cn, www.xmind.net
https:\/\/www\.xmind\.cn\/\_res\/devices url script-response-body https://raw.githubusercontent.com/zwf234/rules/master/js/xmind.js

# ======= Y ======= #
#YOUTUBE 无字幕机翻简体中文
https:\/\/www.youtube.com\/api\/timedtext\?.+&lang=(?!(zh|zh\-Hans)&)((?!&tlang=zh\-Hans).)*$ url request-header \sHTTP/1\.1(\r\n) request-header &tlang=zh-Hans HTTP/1.1$1
// 简体；直接订阅  有繁体翻译介绍，打开链接查看
// https://raw.githubusercontent.com/id77/QuantumultX/master/rewrite/Youtube_CC.conf

# ======= Z ======= #
`;

const getDomins = (text) => {
    // 读取第一行
    let hostname = text.match(/hostname.*/g)[0]
    dos = []
    // console.log(hostname.replace(/hostname=/g, ''))
    hostname.replace(/hostname=/g, '').split(',').forEach((item) => {
        dos.push(item)
    })
    return dos
}
const getRules = (text) => {
    let hostname = text.match(/hostname.*/g)[0]
    let hostnames = []
    let content = text.replace(/hostname.*/g, '')
    const regex = /(\^https|https).*/g;
    content.match(regex).forEach((item) => {
        console.log(item) 
        xxx = /\/\/(.*?)\//g; 
        // 获取group1
        let groupos = xxx.exec(item)
        if (groupos) {
            let domain = groupos[1]
        console.log(domain)
        console.log("=============")
        hostnames.push(domain)
        }
        
    })
    return hostnames
}
domains  = getRules(text) 
domains = [...new Set(domains)]// domains 去重
console.log(domains.join('\n'))

aaa = ` 
api.bjxkhc.com
pan.baidu.com
biz.caiyunapp.com
bea.sportq.com
*.gotokeep.com
api.gotokeep.com
h5.xiuxiu.meitu.com
api.xiuxiu.meitu.com
commerce-.*api.faceu.com
pay.faceu.com
commerce-.*api.wecut.com
pay.wecut.com
commerce-.*api.faceu.mobi
pay.faceu.mobi
commerce-.*api.wecut.mobi
pay.wecut.mobi
api.meiyan.com
.*.meiyan.com 
.*.meitu.com 
api.infzm.com
raw.githubusercontent.com
api.polaxiong.com
app-live.planefinder.net
www.pornhub.com
cn.pornhub.com 
api.intsig.net
api-cs.intsig.net
spclient.wg.spotify.com
testflight.apple.com
api.tidal.com
api.termius.com
account.wps.cn
*docker*.wps.cn
p.du.163.com
dict.youdao.com
xluser-ssl.xunlei.com
www.xmind.cn
www.youtube.com
`
console.log(aaa.replace(/\n/g, ','))