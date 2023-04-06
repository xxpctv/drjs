{"spider": "https://agit.ai/xxpctv/m/raw/branch/master/ar/323tt",
"wallpaper": "https://tool.weetai.cn/api",
"sites":[{"key":"Tutu_spider","name":"TuTu","api":"csp_TutuYs","type":3,"filterable":1,"quickSearch":1,"searchable":1,"ext":"SRK#e%4UYtU#KiEo*vsPqpr0cC4bxAQWqiaojio6sYmm*x5hn#rcCt"},
{"key":"纸条","name":"纸条","type":3,"api":"csp_Paper","ext": "http://我不是.肥猫.love:63/token.php","jar":"https://agit.ai/xxpctv/m/raw/branch/master/ar/0404fm"}, 
{"key":"MV","name":"MV","type":3,"api":"csp_Bili","searchable":1,"quickSearch":1,
"filterable":1,"ext":"https://download.kstore.space/download/2883/PY/bili1.json","jar":"https://download.kstore.space/download/2883/PY/1010.jar;md5;c5c337bb2793598e9aa5953898fbb087"},
{"key":"drpy_js_JRKAN直播","name":"球赛","type" : 3,"api" : "https://download.kstore.space/download/2883/drpy.min.js","ext" : "https://agit.ai/xxpctv/m/raw/branch/master/py/JRKAN.js"}
],

"parses": [
{"name": "web聚合","type": 3,"url": "Web"},
{"name": "解析聚合","type": 3,"url": "Demo"},
{"name": "parwix稳定","type": 0,"url": "https://jx.bozrc.com:4433/player/?url="},
{"name":"jsonp","type":0,"url":"https://jx.jsonplayer.com/player/?url="},
{"name":"-13号","type":0,"url":"http://w.h100.top/jxhx/jx/?url="},
{"name":"bozrc","type":1,"url":"https://jx.bozrc.com:4433/player/?url="},
{"name":"-13号","type":0,"url":"http://w.h100.top/jxhx/jx/?url="},
{"name":"-14号","type":0,"url":"https://jx.cainisi.cf/?v="},
{"name":"-15号","type":0,"url":"https://www.yemu.xyz/?url=","ext":{"flag":["qq","腾讯","qiyi","iqiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"777","type":0,"url":"https://jx.777jiexi.com/player/?url="},
{"name" : "瞄影嗅探","type":0,"url":"http://www.miaoys.cc/vip/?url="},
{"name":"parwix","type":0,"url":"https://jx.jsonplayer.com/player/?url="},
{"name":"txcgb","type":0,"url":"http://yy.freeee.ml/jx/player/777player/?url="},
{"name":"三维空间","type":0,"url":"http://txcgb.3vkj.club/player/777/?url="},
{"name":"热铁盒","type":0,"url":"https://txcgb.rth1.one/777/?url="},
{"name":"xdv","type":0,"url":"http://jx.xdv.icu/api/?key=fdUDqtKcMazhsmI7Ni&url="},
{"name":"花","type":1,"url":"http://45.248.10.163:4433/json.php?wap=0&url="},
{"name":"miaoys","type":0,"url":"http://www.miaoys.cc/vip/?url="},
{"name":"1920","type":1,"url":"https://www.1920lgzy.top/json.php?url=","ext":{"header":{"User-Agent":"Mozilla/5.0"}}},
{"name":"parses","type":1,"url":"https://jiexi.parses.repl.co/api.php?url="},
{"name":"点","type":1,"url":"https://json.xn--9kq078cdn3a.cc/api/?key=694138485bf1110c147f85d92e86edc3&url="},
{"name":"ysmjx","type":1,"url":"http://pandown.pro/app/ysmjx.php?url="},
{"name":"gotka","type":1,"url":"http://newjiexi.gotka.top/keyu3.php?url="},
{"name":"kuanjv","type":1,"url":"http://rxjx.kuanjv.com/allm3u8.php?url="},
{"name":"lanlan","type":1,"url":"http://lanlan.ckflv.cn/?url="},
{"name":"无名","type":0,"url":"https://www.administratorw.com/video.php?url="},
{"name":"1920l","type":1,"url":"https://www.1920lgzy.top/json.php?url="},
{"name":"yemu","type":0,"url":"https://www.yemu.xyz/?url="},
{
		"name": "OKjx嗅探",
		"type": 0,
		"url": "https://okjx.cc/?url="
	}],

    "rules": [
    {"host": "*","rule": ["default.365yg.com"]},
    {"host": "dyxs20.com","rule": [".m3u8"]},
    {"host": "www.agemys.cc","rule": ["cdn-tos","obj/tos-cn"]},
    {"host": "zjmiao.com","rule": ["play.videomiao.vip/API.php","time="]},
    {"host": "www.sharenice.net","rule": ["http.*?/play.{0,3}\\?[^url]{2,8}=.*"]},
    {"host": "www.sharenice.net","rule": ["qianpailive.com","vid="]},
    {"host": "*","rule": ["douyin.com/aweme","video_id="]},
    {"host": "*","rule": ["huoshan.com","/item/video/"]},
    {"host": "*","rule": ["http((?!http).){12,}?\\.(m3u8|mp4|flv|avi|mkv|rm|wmv|mpg|m4a)\\?.*"]},
    {"host": "*","rule": ["http((?!http).){12,}\\.(m3u8|mp4|flv|avi|mkv|rm|wmv|mpg|m4a)"]}],
    "lives":[{"name":"live","type":0,"url":"http://home.jundie.top:81/Cat/tv/live.txt","epg":"http://epg.112114.xyz/?ch={name}&date={date}","logo":"https://epg.112114.xyz/logo/{name}.png"}],
   "flags": ["youku","qq","iqiyi","qiyi","letv","sohu","tudou","pptv","mgtv","wasu","bilibili","csm3u8"],
   "ijk": [
   {"group":"软解码","options":[{"category":4,"name":"opensles","value":"0"},{"category":4,"name":"overlay-format","value":"842225234"},{"category":4,"name":"framedrop","value":"1"},{"category":4,"name":"soundtouch","value":"1"},{"category":4,"name":"start-on-prepared","value":"1"},{"category":1,"name":"http-detect-rangeupport","value":"0"},{"category":1,"name":"fflags","value":"fastseek"},{"category":2,"name":"skip_loop_filter","value":"48"},{"category":4,"name":"reconnect","value":"1"},{"category":4,"name":"enable-accurateeek","value":"0"},{"category":4,"name":"mediacodec","value":"0"},{"category":4,"name":"mediacodec-auto-rotate","value":"0"},{"category":4,"name":"mediacodec-handle-resolution-change","value":"0"},{"category":4,"name":"mediacodec-hevc","value":"0"},{"category":1,"name":"dns_cache_timeout","value":"600000000"}]},
   {"group":"硬解码","options":[{"category":4,"name":"opensles","value":"0"},{"category":4,"name":"overlay-format","value":"842225234"},{"category":4,"name":"framedrop","value":"1"},{"category":4,"name":"soundtouch","value":"1"},{"category":4,"name":"start-on-prepared","value":"1"},{"category":1,"name":"http-detect-rangeupport","value":"0"},{"category":1,"name":"fflags","value":"fastseek"},{"category":2,"name":"skip_loop_filter","value":"48"},{"category":4,"name":"reconnect","value":"1"},{"category":4,"name":"enable-accurateeek","value":"0"},{"category":4,"name":"mediacodec","value":"1"},{"category":4,"name":"mediacodec-auto-rotate","value":"1"},{"category":4,"name":"mediacodec-handle-resolution-change","value":"1"},{"category":4,"name":"mediacodec-hevc","value":"1"},{"category":1,"name":"dns_cache_timeout","value":"600000000"}]}],
   "ads": ["mimg.0c1q0l.cn","www.googletagmanager.com","www.google-analytics.com","mc.usihnbcq.cn","mg.g1mm3d.cn","mscs.svaeuzh.cn","cnzz.hhttm.top","tp.vinuxhome.com","cnzz.mmstat.com","www.baihuillq.com","s23.cnzz.com","z3.cnzz.com","c.cnzz.com","stj.v1vo.top","z12.cnzz.com","img.mosflower.cn","tips.gamevvip.com","ehwe.yhdtns.com","xdn.cqqc3.com","www.jixunkyy.cn","sp.chemacid.cn","hm.baidu.com","s9.cnzz.com","z6.cnzz.com","um.cavuc.com","mav.mavuz.com","wofwk.aoidf3.com","z5.cnzz.com","xc.hubeijieshikj.cn","tj.tianwenhu.com","xg.gars57.cn","k.jinxiuzhilv.com","cdn.bootcss.com","ppl.xunzhuo123.com","xomk.jiangjunmh.top","img.xunzhuo123.com","z1.cnzz.com","s13.cnzz.com","xg.huataisangao.cn","z7.cnzz.com","xg.huataisangao.cn","z2.cnzz.com","s96.cnzz.com","q11.cnzz.com","thy.dacedsfa.cn","xg.whsbpw.cn","s19.cnzz.com","z8.cnzz.com","s4.cnzz.com","f5w.as12df.top","ae01.alicdn.com","www.92424.cn","k.wudejia.com","vivovip.mmszxc.top","qiu.xixiqiu.com","cdnjs.hnfenxun.com","cms.qdwght.com"]}
