const coinsup = 100 //thay số coins được nhận khi đoán trúng
const coinsdown = 50 //thay số coins bị mất khi yêu cầu gợi ý
const timeUnsend = 5 //thời gian thu hồi tin nhắn sau khi trả lời đúng trong thời gian timeUnsend
const axios = global.nodemodule["axios"];
module.exports.config = {
    name: "dhbc",
    version: "1.2.0",
    hasPermssion: 0,
    credits: "D-Jukie", //thay credits hộ luôn =))
    description: "Đuổi hình bắt chữ trên chính messenger của bạn!!!",
    commandCategory: "Giải trí",
    usages: "[1/2]",
    cooldowns: 0
};


function _0x4ede(){const _0x43da45=['wzIvW','link1','\x20sách.','floor','threadID','hJIdU','\x20đã\x20trả\x20lờ','link2','ể\x20trả\x20lời:','reply','utf-8','i\x20chính\x20xá','⚡️Lựa\x20chọn\x20','-Official/','QeZeB','data','xem\x20gợi\x20ý\x20','ync','adhbc.json','\x20để\x20chọn\x20c','decreaseMo','PHmOZ',':\x20Một\x20ảnh\x0a','client','createRead','Số\x20dư\x20khôn','handleRepl','rsqUR','age','976482kdsEFF','DKCHZ','/cache/anh','qPXmN','⚡️Gợi\x20ý\x20cho','CpEvX','⚡️Vui\x20lòng\x20','body','tukhoa','VXyyA','toLowerCas','JwwDg','eeDaM','1.png','push','FzCvK','n\x20nhắn\x20này','config','hbLxj','ehyir','adhbc2.jso','suggestion','length','exports','227299jJDbxK','chbDz','BDTTD','random','ợi\x20ý\x20-\x20để\x20','reply\x20tin\x20','\x0aGợi\x20ý:\x20','getData','rYGfj','XXyew','EfZuB','NziVg','increaseMo','constructo','MyiqZ','ney','c!\x0a⚡️Đáp\x20án','chbYw','\x20credits\x20đ','attachment','WrPnj','Yggof','fs-extra','jcetH','2.png','messageID','alqCC','\x0a\x0aReply:\x20G','Exuyl','toString','https://ra','VHktU','ypyec','cMixk','RLQOS','apply','fchIc','writeFileS','lSkNE','jWuLL','18224PiRHjG','search','dDcdO','dhbc','bdtgK','nodemodule','money','from','Stream','nhắn\x20này\x20đ','ã\x20bị\x20thay\x20','518VLBrlY','ha\x20:v','xVlcT','get','arraybuffe','JdvZh','fjOBW','BCGhA','A/main/dat','ợi\x20ý!!','rFtON','2\x20(-','KNjca','w.githubus','link','VdyNY','aCZcL','senderID','sendMessag','g\x20reply\x20ti','HYQKC','cFSrZ','QpZPh','\x20số','679458vVfQfW','responseTy','vJQLL','nsDMe','apikey-DAT','\x20(-','unsendMess','⚡️Phát\x20hiện','hế\x20độ','ercontent.','\x0a\x0a⚡️Vui\x20lòn','ZeDEJ','64964ytlrla','ộ\x20chơi:\x0a\x0a1','2uXoUSI','com/Shiron','gợi\x20ý','⚡️Sai\x20rồi\x20n','sokitu','siPQJ','g\x20đủ\x20','dhbc2','\x20(+','bjuDQ','FKmOc','PvVKi','thêm\x20chế\x20đ','(((.+)+)+)','qgzTl','aRPdv','baBQH','choosee','crdMg','author','reply2','vhPGS','rqPCb','name','type','UHnda','SzJmZ','đổi','ehPaU','\x20bạn\x20là:\x20\x0a','xXGRK','BPSSk','HMIvw','722481SvnHbI','253805XhzgvJ'];_0x4ede=function(){return _0x43da45;};return _0x4ede();}(function(_0x5d78e1,_0x4901b5){function _0x10be34(_0x941830,_0x6708fb,_0x47d2da,_0x2f903e){return _0x2904(_0x941830- -0x235,_0x47d2da);}const _0x29de8f=_0x5d78e1();function _0x9df076(_0x57a9ea,_0x4c84ef,_0x26783c,_0x5c46fb){return _0x2904(_0x26783c-0x143,_0x57a9ea);}while(!![]){try{const _0x88a004=-parseInt(_0x9df076(0x1c4,0x1ec,0x203,0x20c))/(0xb4e+0x3*0xf6+-0xe2f)*(parseInt(_0x9df076(0x286,0x283,0x25c,0x24b))/(-0x1221*0x1+-0x15*0x71+0x1b68))+parseInt(_0x10be34(-0x1ac,-0x1bd,-0x155,-0x15f))/(-0xc87*0x3+0xbd9*0x1+0xa9*0x27)+parseInt(_0x9df076(0x260,0x26b,0x25a,0x286))/(0x13*-0x17b+-0x5c4+0x21e9)+-parseInt(_0x10be34(-0x1ab,-0x17b,-0x1a4,-0x194))/(0x1*-0x18be+-0x29*-0xd+0x16ae)+-parseInt(_0x10be34(-0x12a,-0x12f,-0x11e,-0x183))/(-0x2*0x640+-0x4d7+0x23*0x7f)+parseInt(_0x9df076(0x265,0x25d,0x236,0x26b))/(0xd4e+0x1eb0+-0x8cb*0x5)*(parseInt(_0x10be34(-0x14d,-0x129,-0xf8,-0x18b))/(0x1*-0x18c1+0x24dd+0x305*-0x4))+parseInt(_0x10be34(-0x18d,-0x176,-0x158,-0x176))/(-0x1b1d+-0x33a*0x4+0x280e);if(_0x88a004===_0x4901b5)break;else _0x29de8f['push'](_0x29de8f['shift']());}catch(_0x42fcd7){_0x29de8f['push'](_0x29de8f['shift']());}}}(_0x4ede,-0x7283+0x1c4f9+-0x1f5b*-0x7));const _0x2ae091=(function(){let _0x2f4710=!![];return function(_0x4fe8f9,_0x4a767f){const _0x512613=_0x2f4710?function(){function _0xcd78f(_0x165630,_0x43a23b,_0x2542c9,_0x2b833f){return _0x2904(_0x43a23b-0x142,_0x165630);}if(_0x4a767f){const _0x473a47=_0x4a767f[_0xcd78f(0x1dd,0x225,0x257,0x263)](_0x4fe8f9,arguments);return _0x4a767f=null,_0x473a47;}}:function(){};return _0x2f4710=![],_0x512613;};}()),_0x183f1c=_0x2ae091(this,function(){function _0x3d515e(_0x4d471f,_0x58e0ff,_0xe4a703,_0x3c694d){return _0x2904(_0xe4a703- -0xe,_0x58e0ff);}const _0x1a5863={};_0x1a5863['ZUgXy']='(((.+)+)+)'+'+$';function _0x36c15f(_0x3c33d4,_0x1a34cf,_0xa36f93,_0x2190b0){return _0x2904(_0xa36f93-0x24f,_0x2190b0);}const _0x23047c=_0x1a5863;return _0x183f1c['toString']()[_0x3d515e(0xec,0x98,0xdb,0x11f)](_0x3d515e(0x37,0x62,0x67,0x2a)+'+$')[_0x3d515e(0x7f,0xc7,0xcf,0x8d)]()[_0x3d515e(0x104,0x112,0xbf,0x111)+'r'](_0x183f1c)[_0x3d515e(0xba,0x12c,0xdb,0x116)](_0x23047c['ZUgXy']);});function _0x58108(_0x3bec32,_0x1e5304,_0x56040c,_0xb29a4e){return _0x2904(_0x1e5304- -0x31,_0xb29a4e);}function _0x2904(_0x21e4b8,_0x4ee7cf){const _0x5da2d8=_0x4ede();return _0x2904=function(_0x344b68,_0xfa178f){_0x344b68=_0x344b68-(-0x5*-0x557+-0xb4e+-0x2*0x77e);let _0x182db1=_0x5da2d8[_0x344b68];return _0x182db1;},_0x2904(_0x21e4b8,_0x4ee7cf);}function _0x5a02c3(_0x3da43a,_0x47fc3b,_0x158c42,_0x4a2e16){return _0x2904(_0x3da43a-0x1db,_0x4a2e16);}_0x183f1c(),module[_0x58108(0x93,0x8e,0xa3,0x9c)][_0x5a02c3(0x280,0x266,0x293,0x26a)+'y']=async function({args:_0x3504f4,event:_0x3357ea,Users:_0x57bb2b,api:_0x1a46f2,handleReply:_0x43cf13,Currencies:_0x3442b0}){function _0x40d6fe(_0x3ae8e6,_0x40147b,_0xa14c16,_0x2ef0ff){return _0x58108(_0x3ae8e6-0x11b,_0xa14c16- -0x34e,_0xa14c16-0x6d,_0x3ae8e6);}const _0x58b691={'vhPGS':_0x40d6fe(-0x328,-0x310,-0x2eb,-0x29a),'EYQMX':function(_0x1ff782,_0x191b52){return _0x1ff782!==_0x191b52;},'bdtgK':_0x40d6fe(-0x2b6,-0x2a8,-0x2b5,-0x2c3),'QFJPv':function(_0x5d7789,_0x3a9ab1){return _0x5d7789===_0x3a9ab1;},'VXyyA':_0x501ea0(0x15a,0x179,0x1b1,0x1b6),'DKCHZ':_0x40d6fe(-0x30f,-0x308,-0x303,-0x321),'QpZPh':'choosee','RLQOS':function(_0x1785b4,_0x3eb8b7){return _0x1785b4===_0x3eb8b7;},'UHnda':_0x501ea0(0x1b7,0x175,0x1b4,0x17e),'qgzTl':_0x40d6fe(-0x335,-0x319,-0x30e,-0x2f4),'lSkNE':_0x40d6fe(-0x2a0,-0x31d,-0x2d2,-0x2af),'Exuyl':function(_0x31c4cf,_0x42f51d){return _0x31c4cf*_0x42f51d;},'ehyir':_0x501ea0(0x15f,0x161,0x1a3,0x1e9),'VdyNY':_0x501ea0(0x1df,0x1b8,0x1c4,0x176)+'r','BDTTD':function(_0x164351,_0x426a08){return _0x164351+_0x426a08;},'HYQKC':_0x40d6fe(-0x31d,-0x2de,-0x2d5,-0x2ee)+_0x501ea0(0x131,0x18a,0x182,0x16a),'cMixk':'utf-8','KNjca':function(_0x15d4ee,_0x19ef45){return _0x15d4ee+_0x19ef45;},'fjOBW':_0x501ea0(0x17b,0x198,0x177,0x16b)+_0x40d6fe(-0x2c1,-0x2d1,-0x2a7,-0x288),'nsDMe':function(_0x286586,_0x1d155a){return _0x286586+_0x1d155a;},'PvVKi':function(_0x886df,_0x180b18){return _0x886df(_0x180b18);},'mdhdT':_0x40d6fe(-0x2c3,-0x2fd,-0x2d1,-0x28f)+'nhập\x201\x20con'+_0x40d6fe(-0x294,-0x233,-0x275,-0x26a),'BCGhA':_0x501ea0(0x15f,0x186,0x153,0x10e),'ypyec':function(_0x293485,_0x2529f9){return _0x293485==_0x2529f9;},'PHmOZ':_0x40d6fe(-0x331,-0x2f1,-0x315,-0x303),'rqPCb':function(_0x2e6107,_0x1381e1){return _0x2e6107>_0x1381e1;},'hJIdU':function(_0x1dc608,_0x588c63){return _0x1dc608!==_0x588c63;},'JwwDg':_0x40d6fe(-0x2ed,-0x314,-0x2f8,-0x330),'ZeDEJ':'iwkHw','jcetH':function(_0x27f217,_0xcd2b63,_0x807fc4){return _0x27f217(_0xcd2b63,_0x807fc4);},'HMIvw':function(_0x4e5138,_0x452866){return _0x4e5138*_0x452866;},'uJNOy':function(_0x4a6860,_0x2e5b2a){return _0x4a6860==_0x2e5b2a;},'rFtON':_0x40d6fe(-0x2e5,-0x2d5,-0x2b4,-0x2f4),'hbLxj':_0x40d6fe(-0x329,-0x2c3,-0x2fd,-0x2a8)};var {tukhoa:_0x3a6975,suggestions:_0x507a15}=_0x43cf13;function _0x501ea0(_0x1dc2d6,_0x107a11,_0x4c9aed,_0x43ab54){return _0x58108(_0x1dc2d6-0x3f,_0x4c9aed-0xfe,_0x4c9aed-0x154,_0x43ab54);}switch(_0x43cf13[_0x501ea0(0x187,0x109,0x14d,0x154)]){case _0x58b691[_0x501ea0(0x18c,0x1ab,0x1d6,0x1a6)]:{if(_0x58b691['EYQMX'](_0x58b691[_0x501ea0(0x131,0x18a,0x143,0xf8)],_0x58b691[_0x40d6fe(-0x2b2,-0x292,-0x299,-0x25e)])){switch(_0x3357ea['body']){case'2':{_0x1a46f2[_0x40d6fe(-0x25b,-0x26c,-0x26e,-0x228)+'age'](_0x43cf13[_0x501ea0(0x1f8,0x1c0,0x1a6,0x16f)]);const _0x5ca556=await axios['get']('https://ra'+'w.githubus'+'ercontent.'+'com/Shiron'+_0x501ea0(0x1bc,0x176,0x165,0x154)+'apikey-DAT'+_0x501ea0(0x1c7,0x206,0x1c8,0x1a6)+_0x40d6fe(-0x2ea,-0x2ea,-0x2e2,-0x292)),_0x392107=_0x5ca556[_0x40d6fe(-0x317,-0x332,-0x2e5,-0x2af)][_0x40d6fe(-0x284,-0x2ab,-0x294,-0x2b8)][_0x501ea0(0x169,0x14e,0x18b,0x1bf)],_0x1c9f9d=_0x5ca556[_0x40d6fe(-0x32b,-0x2bf,-0x2e5,-0x2c0)][_0x501ea0(0x187,0x1ad,0x1b8,0x165)][Math[_0x40d6fe(-0x2f9,-0x2fd,-0x2f1,-0x2f0)](_0x58b691[_0x40d6fe(-0x256,-0x2d7,-0x2a3,-0x2f0)](Math[_0x501ea0(0x1df,0x196,0x190,0x18b)](),_0x392107))],_0x2a466d=_0x1c9f9d['tukhoa'],_0xbc6404=_0x1c9f9d[_0x501ea0(0x1bb,0x1c2,0x18a,0x15d)+'s'],_0x5a30bf=global[_0x40d6fe(-0x2b8,-0x276,-0x292,-0x2c1)][_0x58b691['ehyir']],_0x4ab32b=_0x1c9f9d[_0x501ea0(0x176,0xf5,0x139,0x12e)],_0x2fdf6f=_0x1c9f9d['link1'],_0x294cfc=_0x1c9f9d[_0x501ea0(0x130,0x135,0x15f,0x179)],_0x2a87c3={};_0x2a87c3[_0x40d6fe(-0x287,-0x2c9,-0x273,-0x2a6)+'pe']=_0x58b691['VdyNY'];let _0x4ce18d=(await axios[_0x501ea0(0x18f,0x19d,0x1c3,0x1d3)](_0x2fdf6f,_0x2a87c3))['data'];_0x5a30bf[_0x40d6fe(-0x284,-0x251,-0x29a,-0x2d2)+_0x501ea0(0x12d,0x1b7,0x169,0x127)](_0x58b691[_0x501ea0(0x15a,0x16e,0x18f,0x1e8)](__dirname,_0x58b691[_0x40d6fe(-0x282,-0x2cc,-0x278,-0x26b)]),Buffer[_0x40d6fe(-0x2c9,-0x2ba,-0x290,-0x28e)](_0x4ce18d,_0x58b691[_0x501ea0(0x1aa,0x1f3,0x1ae,0x161)]));const _0x54f716={};_0x54f716[_0x501ea0(0x229,0x1cf,0x1d9,0x219)+'pe']=_0x58b691[_0x501ea0(0x198,0x1ce,0x1cf,0x17d)];let _0x354d48=(await axios[_0x40d6fe(-0x2be,-0x270,-0x289,-0x24d)](_0x294cfc,_0x54f716))[_0x40d6fe(-0x305,-0x2d3,-0x2e5,-0x336)];_0x5a30bf[_0x501ea0(0x1c3,0x1cb,0x1b2,0x1f1)+_0x501ea0(0x126,0x17d,0x169,0x198)](_0x58b691[_0x40d6fe(-0x24a,-0x28d,-0x280,-0x2ae)](__dirname,_0x58b691[_0x501ea0(0x1bb,0x20c,0x1c6,0x16f)]),Buffer[_0x501ea0(0x19e,0x19f,0x1bc,0x214)](_0x354d48,_0x58b691[_0x40d6fe(-0x25d,-0x269,-0x29e,-0x251)]));var _0x2caa94=[];_0x2caa94['push'](_0x5a30bf[_0x40d6fe(-0x32a,-0x2b3,-0x2dc,-0x327)+_0x40d6fe(-0x275,-0x2d5,-0x28f,-0x2c7)](__dirname+(_0x40d6fe(-0x2e8,-0x32a,-0x2d5,-0x30a)+_0x501ea0(0x151,0x15a,0x182,0x1c3)))),_0x2caa94[_0x40d6fe(-0x2e1,-0x2a2,-0x2c9,-0x2ce)](_0x5a30bf[_0x501ea0(0x179,0x1af,0x170,0x12b)+'Stream'](_0x58b691['KNjca'](__dirname,_0x58b691[_0x40d6fe(-0x2c8,-0x28f,-0x286,-0x2de)])));const _0x106042={};_0x106042[_0x501ea0(0x172,0x195,0x17c,0x178)]=_0x40d6fe(-0x2d0,-0x27c,-0x2d1,-0x307)+'reply\x20tin\x20'+_0x501ea0(0x167,0x213,0x1be,0x1eb)+_0x40d6fe(-0x2c5,-0x2c6,-0x2ec,-0x2a8)+_0x501ea0(0x160,0x19f,0x193,0x166)+_0x4ab32b+(_0x501ea0(0x1a6,0x1cf,0x1a8,0x156)+_0x501ea0(0x1c9,0x139,0x191,0x145)+_0x40d6fe(-0x296,-0x2c9,-0x2e4,-0x2eb)+_0x501ea0(0x1d8,0x21e,0x1cb,0x184))+coinsdown+'$)',_0x106042['attachment']=_0x2caa94;var _0x3ee62f=_0x106042;return _0x1a46f2['sendMessag'+'e'](_0x3ee62f,_0x3357ea['threadID'],(_0x16dfb0,_0x3b372e)=>{function _0x49dee2(_0x1ff08a,_0x30c5d4,_0x52b8fb,_0x3427a6){return _0x40d6fe(_0x1ff08a,_0x30c5d4-0xa2,_0x30c5d4-0xc6,_0x3427a6-0x8b);}function _0xdc6f24(_0x374cc2,_0x310734,_0xe89824,_0x269cef){return _0x40d6fe(_0x374cc2,_0x310734-0x1bf,_0x310734-0x369,_0x269cef-0x10a);}const _0x370320={};_0x370320[_0xdc6f24(0xb1,0x95,0xc9,0x40)]=_0x58b691[_0xdc6f24(0x42,0x67,0x5c,0x31)];const _0x2a0759=_0x370320;if(_0x58b691['EYQMX'](_0x58b691['bdtgK'],_0x58b691[_0xdc6f24(0xb8,0xd6,0x105,0xfb)])){const _0x188569={};_0x188569[_0xdc6f24(0x21,0x6a,0x92,0x32)]=_0x2a0759[_0x49dee2(-0x20d,-0x20e,-0x218,-0x1fd)],_0x188569['name']=this[_0xdc6f24(0x5a,0xa3,0x4f,0x94)][_0x49dee2(-0x211,-0x23a,-0x25f,-0x249)],_0x188569['author']=_0x470232[_0xdc6f24(0xa2,0xee,0xb1,0xbc)],_0x188569[_0xdc6f24(0x7c,0xc3,0xf1,0xdb)]=_0x2c8a66['messageID'],_0x188569[_0x49dee2(-0x22b,-0x209,-0x215,-0x251)]=_0x436684,_0x188569['suggestion'+'s']=_0x3ac9f4,_0x3b95da[_0x49dee2(-0x20b,-0x217,-0x1db,-0x206)]['handleRepl'+'y'][_0xdc6f24(0x68,0xa0,0x83,0x7e)](_0x188569);}else{const _0x540f30={};_0x540f30[_0x49dee2(-0x1f9,-0x239,-0x268,-0x231)]=_0x58b691[_0xdc6f24(0xa3,0x67,0x19,0x15)],_0x540f30[_0x49dee2(-0x22b,-0x23a,-0x20c,-0x274)]=this['config']['name'],_0x540f30[_0x49dee2(-0x1f1,-0x23e,-0x278,-0x225)]=_0x3357ea[_0x49dee2(-0x182,-0x1b5,-0x18f,-0x1f5)],_0x540f30[_0xdc6f24(0xa0,0xc3,0x8e,0xef)]=_0x3b372e[_0x49dee2(-0x232,-0x1e0,-0x18a,-0x218)],_0x540f30[_0xdc6f24(0x8d,0x9a,0xe4,0x97)]=_0x2a466d,_0x540f30[_0x49dee2(-0x1a7,-0x1fc,-0x216,-0x1a3)+'s']=_0xbc6404,global[_0x49dee2(-0x1f7,-0x217,-0x1c7,-0x231)]['handleRepl'+'y'][_0xdc6f24(0x53,0xa0,0xb8,0x4e)](_0x540f30);}});}case'1':{_0x1a46f2[_0x40d6fe(-0x292,-0x220,-0x26e,-0x22d)+'age'](_0x43cf13[_0x501ea0(0x1dc,0x1ee,0x1a6,0x1dd)]);const _0x23b3a9=await axios['get'](_0x501ea0(0x1e6,0x1d4,0x1ab,0x189)+_0x501ea0(0x18b,0x1e6,0x1cd,0x17a)+'ercontent.'+_0x40d6fe(-0x2e5,-0x2f9,-0x316,-0x339)+_0x40d6fe(-0x33d,-0x2f9,-0x2e7,-0x2f5)+_0x501ea0(0x1e1,0x22b,0x1dc,0x20a)+_0x501ea0(0x1a1,0x191,0x1c8,0x194)+_0x501ea0(0x1d8,0x17d,0x189,0x181)+'n'),_0x1df6ba=_0x23b3a9[_0x40d6fe(-0x2ac,-0x2de,-0x2e5,-0x30b)][_0x40d6fe(-0x2c0,-0x31a,-0x310,-0x2cf)][_0x501ea0(0x161,0x1a3,0x18b,0x172)],_0x3b967f=_0x23b3a9['data']['dhbc2'][Math[_0x40d6fe(-0x29b,-0x2ab,-0x2f1,-0x2c0)](_0x58b691[_0x40d6fe(-0x297,-0x24d,-0x2a3,-0x268)](Math[_0x501ea0(0x1ad,0x143,0x190,0x16f)](),_0x1df6ba))],_0x13242a=_0x3b967f[_0x40d6fe(-0x281,-0x308,-0x2cf,-0x2de)],_0x240256=_0x3b967f[_0x501ea0(0x161,0x1af,0x18a,0x144)+'s'],_0x525117=global['nodemodule'][_0x58b691[_0x501ea0(0x177,0x17b,0x188,0x1e0)]],_0x1c2812=_0x3b967f[_0x501ea0(0x187,0x177,0x139,0x105)],_0x2d570d=_0x3b967f[_0x501ea0(0x225,0x208,0x1ce,0x1b2)],_0x1f7968={};_0x1f7968[_0x40d6fe(-0x268,-0x25a,-0x273,-0x25f)+'pe']=_0x40d6fe(-0x2b6,-0x270,-0x288,-0x2c8)+'r';let _0x19a5b4=(await axios[_0x501ea0(0x1c6,0x1e0,0x1c3,0x16c)](_0x2d570d,_0x1f7968))['data'];_0x525117['writeFileS'+_0x501ea0(0x1a3,0x1a4,0x169,0x14d)](_0x58b691[_0x40d6fe(-0x2a3,-0x2d2,-0x280,-0x271)](__dirname,_0x40d6fe(-0x28b,-0x2cb,-0x2d5,-0x312)+_0x501ea0(0x12c,0x15f,0x182,0x1bf)),Buffer[_0x40d6fe(-0x28b,-0x2a2,-0x290,-0x23d)](_0x19a5b4,_0x40d6fe(-0x2f1,-0x301,-0x2ea,-0x2ee)));var _0x2caa94=[];_0x2caa94[_0x40d6fe(-0x292,-0x280,-0x2c9,-0x299)](_0x525117['createRead'+_0x40d6fe(-0x2cb,-0x253,-0x28f,-0x252)](_0x58b691[_0x501ea0(0x1af,0x22b,0x1db,0x233)](__dirname,_0x58b691[_0x501ea0(0x1ab,0x1dd,0x1d4,0x20c)])));const _0x455104={};_0x455104[_0x501ea0(0x17d,0x188,0x17c,0x1b6)]=_0x501ea0(0x1c0,0x164,0x17b,0x15a)+_0x40d6fe(-0x28e,-0x30f,-0x2ba,-0x2d3)+_0x501ea0(0x19b,0x1db,0x1be,0x17f)+_0x501ea0(0x157,0x113,0x160,0x18b)+_0x40d6fe(-0x2d3,-0x2de,-0x2b9,-0x2ae)+_0x1c2812+(_0x40d6fe(-0x2f4,-0x2f4,-0x2a4,-0x253)+_0x501ea0(0x1a3,0x185,0x191,0x1d3)+'xem\x20gợi\x20ý\x20'+_0x40d6fe(-0x22a,-0x265,-0x281,-0x29b))+coinsdown+'$)',_0x455104['attachment']=_0x2caa94;var _0x3ee62f=_0x455104;return _0x1a46f2[_0x501ea0(0x1f1,0x1e3,0x1d2,0x213)+'e'](_0x3ee62f,_0x3357ea[_0x40d6fe(-0x2e7,-0x2b3,-0x2f0,-0x2d2)],(_0x4aadce,_0x1bcf64)=>{function _0x5d77eb(_0x1a7b11,_0x4e62f0,_0x114183,_0x11ba92){return _0x501ea0(_0x1a7b11-0x172,_0x4e62f0-0x19f,_0x114183- -0x37,_0x1a7b11);}function _0x318126(_0x17a728,_0x5d3f85,_0x33be32,_0x521d5b){return _0x501ea0(_0x17a728-0x14,_0x5d3f85-0x8a,_0x17a728- -0x277,_0x33be32);}if(_0x58b691['QFJPv'](_0x5d77eb(0x159,0xfb,0x108,0x146),_0x58b691[_0x318126(-0xf9,-0x144,-0xb9,-0x106)])){const _0x7bc734=_0x4030a9[_0x5d77eb(0x159,0x1d0,0x179,0x16d)](_0x5345b8,arguments);return _0x772ac=null,_0x7bc734;}else{const _0x45bf6d={};_0x45bf6d[_0x5d77eb(0x12c,0xc9,0x116,0x115)]=_0x58b691[_0x5d77eb(0x100,0xed,0x13f,0xeb)],_0x45bf6d[_0x318126(-0x12b,-0x148,-0x147,-0x16a)]=this[_0x5d77eb(0x153,0x176,0x14f,0x17b)][_0x318126(-0x12b,-0x140,-0x17c,-0x16b)],_0x45bf6d[_0x318126(-0x12f,-0x104,-0xe7,-0x137)]=_0x3357ea[_0x5d77eb(0x153,0x1c9,0x19a,0x1c9)],_0x45bf6d['messageID']=_0x1bcf64[_0x318126(-0xd1,-0x107,-0x114,-0x8c)],_0x45bf6d[_0x5d77eb(0x16a,0x168,0x146,0x134)]=_0x13242a,_0x45bf6d[_0x318126(-0xed,-0xd7,-0xc8,-0xed)+'s']=_0x240256,global[_0x318126(-0x108,-0xc3,-0x111,-0x15e)]['handleRepl'+'y'][_0x5d77eb(0x158,0x122,0x14c,0x103)](_0x45bf6d);}});}}const _0x3ab7ae=_0x58b691[_0x501ea0(0x17b,0x194,0x140,0x12c)](parseInt,_0x3357ea[_0x501ea0(0x1d3,0x1a6,0x17c,0x1bc)]);if(isNaN(_0x3357ea[_0x501ea0(0x15e,0x12a,0x17c,0x198)]))return _0x1a46f2[_0x40d6fe(-0x23a,-0x29d,-0x27a,-0x28e)+'e'](_0x58b691['mdhdT'],_0x3357ea[_0x501ea0(0x183,0x193,0x15c,0x125)],_0x3357ea['messageID']);if(_0x3ab7ae>-0x1*0x1c96+0x1632+-0x5b*-0x12||_0x3ab7ae<-0x1064+0x1b58+-0xaf3)return _0x1a46f2[_0x501ea0(0x1f0,0x1aa,0x1d2,0x217)+'e'](_0x40d6fe(-0x2a5,-0x2ab,-0x2e8,-0x2e7)+'không\x20nằm\x20'+'trong\x20danh'+_0x501ea0(0x176,0x161,0x15a,0x11f),_0x3357ea[_0x501ea0(0x1b4,0x117,0x15c,0x15a)],_0x3357ea['messageID']);}else{const _0x568b92={};_0x568b92['type']=_0x58b691['DKCHZ'],_0x568b92[_0x40d6fe(-0x2c5,-0x2c2,-0x300,-0x325)]=this[_0x501ea0(0x189,0x178,0x186,0x180)][_0x40d6fe(-0x2c7,-0x2c1,-0x300,-0x2fb)],_0x568b92['author']=_0x380418[_0x40d6fe(-0x274,-0x230,-0x27b,-0x284)],_0x568b92['messageID']=_0xccfe33[_0x501ea0(0x183,0x17a,0x1a6,0x1d6)],_0x568b92[_0x40d6fe(-0x2fc,-0x31e,-0x2cf,-0x2df)]=_0x3ada2a,_0x568b92['suggestion'+'s']=_0x36a7ec,_0x375252['client']['handleRepl'+'y'][_0x501ea0(0x18c,0x18c,0x183,0x145)](_0x568b92);}}case _0x501ea0(0x19e,0x1b5,0x161,0x168):{if(_0x58b691[_0x40d6fe(-0x2cc,-0x24b,-0x285,-0x2ce)]!==_0x58b691[_0x501ea0(0x1bf,0x191,0x1c7,0x18e)])_0x41ee60[_0x40d6fe(-0x291,-0x24b,-0x26e,-0x2b0)+_0x40d6fe(-0x2ce,-0x2a3,-0x2d8,-0x30c)](_0x1a142f['messageID']);else{const _0x12a55d=_0x3357ea[_0x501ea0(0x1cf,0x17e,0x17c,0x19f)];if(_0x58b691[_0x40d6fe(-0x293,-0x29c,-0x29f,-0x29c)](_0x12a55d['toLowerCas'+'e'](),_0x58b691[_0x40d6fe(-0x330,-0x2d1,-0x2df,-0x2fb)])){let _0x3afc41=(await _0x3442b0[_0x501ea0(0x164,0x1bc,0x194,0x1c8)](_0x3357ea[_0x501ea0(0x178,0x1bd,0x1d1,0x216)]))[_0x40d6fe(-0x2a4,-0x2b4,-0x291,-0x2ac)];if(_0x58b691[_0x40d6fe(-0x329,-0x2e3,-0x301,-0x30c)](coinsdown,_0x3afc41))return _0x1a46f2[_0x501ea0(0x1f8,0x1a8,0x1d2,0x1a2)+'e']('Số\x20dư\x20khôn'+_0x40d6fe(-0x351,-0x2ba,-0x311,-0x339)+coinsdown+('$\x20để\x20xem\x20g'+_0x40d6fe(-0x2ad,-0x23b,-0x283,-0x2bc)),_0x3357ea[_0x501ea0(0x165,0x125,0x15c,0x136)],_0x3357ea[_0x40d6fe(-0x28d,-0x26e,-0x2a6,-0x2fe)]);await _0x3442b0[_0x40d6fe(-0x32c,-0x31a,-0x2e0,-0x2a0)+_0x40d6fe(-0x2c7,-0x2df,-0x2b0,-0x2b0)](_0x3357ea[_0x40d6fe(-0x27e,-0x28e,-0x27b,-0x28e)],parseInt(coinsdown)),_0x1a46f2['sendMessag'+'e']('⚡️Gợi\x20ý\x20cho'+_0x501ea0(0x192,0x16f,0x152,0x171)+_0x507a15+_0x40d6fe(-0x24a,-0x228,-0x26f,-0x2bd)+coinsdown+'$)',_0x3357ea[_0x501ea0(0x1a6,0x11d,0x15c,0x14e)],_0x3357ea[_0x40d6fe(-0x2fd,-0x25d,-0x2a6,-0x259)]);}else{if(_0x12a55d[_0x501ea0(0x145,0x12a,0x17f,0x1ca)+'e']()==_0x3a6975){if(_0x58b691[_0x40d6fe(-0x297,-0x340,-0x2ef,-0x343)](_0x58b691[_0x501ea0(0x16a,0x15e,0x180,0x1d8)],_0x58b691[_0x501ea0(0x18f,0x196,0x1e3,0x225)])){await _0x3442b0[_0x501ea0(0x1b7,0x1e0,0x199,0x17a)+_0x501ea0(0x16e,0x146,0x19c,0x151)](_0x3357ea[_0x501ea0(0x186,0x189,0x1d1,0x1a6)],_0x58b691[_0x501ea0(0x15f,0x108,0x140,0x196)](parseInt,coinsup));var _0x1c8851=await _0x57bb2b['getData'](_0x3357ea[_0x40d6fe(-0x26d,-0x2a2,-0x27b,-0x231)]);return _0x58b691[_0x40d6fe(-0x273,-0x283,-0x2a8,-0x2ce)](setTimeout,function(){function _0x551626(_0x2d4075,_0x4caa3a,_0x4af0a5,_0x20d1d0){return _0x501ea0(_0x2d4075-0x12f,_0x4caa3a-0x1c5,_0x4caa3a- -0x11f,_0x2d4075);}function _0x2ddba2(_0x1929b7,_0xae14c8,_0xebb3,_0x4d9c71){return _0x501ea0(_0x1929b7-0x44,_0xae14c8-0x24,_0xae14c8- -0x45d,_0x1929b7);}_0x1a46f2[_0x551626(0xc9,0xbf,0x6d,0xa1)+_0x2ddba2(-0x33d,-0x2e9,-0x2e3,-0x33d)](_0x43cf13[_0x2ddba2(-0x2d0,-0x2b7,-0x2ca,-0x26c)]);},_0x58b691[_0x501ea0(0x1a2,0x16c,0x155,0xfe)](timeUnsend,-0xd*0x2c4+0xd15*-0x2+0x4206)),_0x1a46f2[_0x40d6fe(-0x2aa,-0x2b2,-0x27a,-0x2b2)+'e']('⚡️'+_0x1c8851[_0x40d6fe(-0x30d,-0x314,-0x300,-0x2af)]+(_0x40d6fe(-0x2b1,-0x2f2,-0x2ee,-0x2e3)+_0x501ea0(0x119,0x1ba,0x163,0x19f)+_0x501ea0(0x192,0x18e,0x19d,0x18a)+':\x20')+_0x3a6975+_0x40d6fe(-0x352,-0x327,-0x30f,-0x33e)+coinsup+'$)',_0x3357ea[_0x501ea0(0x163,0x14e,0x15c,0x13c)],_0x3357ea[_0x40d6fe(-0x24e,-0x2ee,-0x2a6,-0x283)]);}else _0x6ceb98[_0x501ea0(0x20b,0x226,0x1de,0x192)+_0x501ea0(0x11c,0x1ae,0x174,0x174)](_0x4841f9[_0x501ea0(0x1d0,0x1f0,0x1a6,0x1ae)]);}else return _0x1a46f2['sendMessag'+'e'](_0x501ea0(0xee,0x137,0x138,0x12a)+_0x40d6fe(-0x23f,-0x243,-0x28b,-0x2b7),_0x3357ea['threadID'],_0x3357ea[_0x40d6fe(-0x2e5,-0x2cd,-0x2a6,-0x252)]);}}};break;case _0x58b691[_0x40d6fe(-0x2d9,-0x2c7,-0x2d6,-0x297)]:{const _0x41a4f0=_0x3357ea[_0x40d6fe(-0x328,-0x30c,-0x2d0,-0x2ab)];if(_0x41a4f0[_0x40d6fe(-0x28b,-0x2cf,-0x2cd,-0x29a)+'e']()==_0x58b691[_0x501ea0(0x13f,0x1bb,0x16d,0x1ab)]){let _0x57b8cf=(await _0x3442b0[_0x40d6fe(-0x2dd,-0x2fa,-0x2b8,-0x2f8)](_0x3357ea[_0x40d6fe(-0x264,-0x239,-0x27b,-0x2c5)]))['money'];if(coinsdown>_0x57b8cf)return _0x1a46f2['sendMessag'+'e'](_0x501ea0(0x19b,0x171,0x171,0x1ab)+_0x501ea0(0xeb,0x189,0x13b,0xf4)+coinsdown+('$\x20để\x20xem\x20g'+'ợi\x20ý!!'),_0x3357ea[_0x40d6fe(-0x2c7,-0x2f9,-0x2f0,-0x315)],_0x3357ea['messageID']);await _0x3442b0[_0x501ea0(0x120,0x11c,0x16c,0x18b)+_0x40d6fe(-0x2b4,-0x264,-0x2b0,-0x2ad)](_0x3357ea[_0x501ea0(0x21e,0x214,0x1d1,0x1e1)],_0x58b691[_0x40d6fe(-0x35c,-0x33d,-0x30c,-0x31a)](parseInt,coinsdown)),_0x1a46f2[_0x40d6fe(-0x278,-0x26f,-0x27a,-0x292)+'e'](_0x501ea0(0x18a,0x1a8,0x179,0x179)+'\x20bạn\x20là:\x20\x0a'+_0x507a15+'\x20(-'+coinsdown+'$)',_0x3357ea[_0x40d6fe(-0x30d,-0x2b7,-0x2f0,-0x340)],_0x3357ea[_0x501ea0(0x1a1,0x16e,0x1a6,0x1d6)]);}else{if(_0x58b691['uJNOy'](_0x41a4f0[_0x501ea0(0x164,0x1b8,0x17f,0x1c7)+'e'](),_0x3a6975)){if(_0x58b691[_0x40d6fe(-0x243,-0x2c9,-0x282,-0x272)]===_0x58b691[_0x501ea0(0x166,0x18e,0x187,0x1a8)]){const _0x226639={};_0x226639['type']=_0x58b691[_0x501ea0(0x1b9,0x1a3,0x1d6,0x1d4)],_0x226639[_0x40d6fe(-0x342,-0x2f5,-0x300,-0x2d7)]=this[_0x501ea0(0x1d3,0x17d,0x186,0x199)][_0x501ea0(0x15e,0x18d,0x14c,0x121)],_0x226639['author']=_0xa97307[_0x501ea0(0x1bc,0x17a,0x1d1,0x20d)],_0x226639[_0x501ea0(0x1ce,0x1dd,0x1a6,0x162)]=_0x4e918a[_0x40d6fe(-0x2fd,-0x2a9,-0x2a6,-0x25d)],_0x2e1b5f[_0x501ea0(0x1bc,0x176,0x16f,0x159)][_0x501ea0(0x15a,0x13b,0x172,0x155)+'y'][_0x40d6fe(-0x2ef,-0x2d7,-0x2c9,-0x317)](_0x226639);}else{await _0x3442b0['increaseMo'+_0x40d6fe(-0x28d,-0x2ed,-0x2b0,-0x277)](_0x3357ea[_0x501ea0(0x1d0,0x1f0,0x1d1,0x1c1)],_0x58b691[_0x40d6fe(-0x363,-0x350,-0x30c,-0x2ce)](parseInt,coinsup));var _0x1c8851=await _0x57bb2b['getData'](_0x3357ea[_0x501ea0(0x1eb,0x19a,0x1d1,0x1f2)]);return _0x58b691[_0x501ea0(0x158,0x174,0x1a4,0x18d)](setTimeout,function(){const _0x26fa50={};function _0x3100ff(_0x3b6334,_0x3c3176,_0x4adc1f,_0x35fa35){return _0x501ea0(_0x3b6334-0x16f,_0x3c3176-0x122,_0x4adc1f- -0x277,_0x3c3176);}_0x26fa50['chbDz']=_0x58b691['DKCHZ'];const _0xf85ef8=_0x26fa50;function _0x52d128(_0x23066e,_0x47599a,_0x44c874,_0x23cb40){return _0x501ea0(_0x23066e-0x65,_0x47599a-0x93,_0x23cb40-0xdf,_0x23066e);}if(_0x58b691[_0x52d128(0x2aa,0x2e1,0x279,0x28e)](_0x58b691[_0x3100ff(-0x125,-0x168,-0x129,-0x13a)],_0x58b691[_0x3100ff(-0xea,-0xff,-0x129,-0x142)]))_0x1a46f2[_0x3100ff(-0xd2,-0x4c,-0x99,-0x62)+_0x52d128(0x2a6,0x236,0x23d,0x253)](_0x43cf13[_0x52d128(0x267,0x2d4,0x2da,0x285)]);else{const _0x53a441={};_0x53a441[_0x3100ff(-0xf1,-0xd9,-0x12a,-0xf3)]=_0xf85ef8[_0x52d128(0x2aa,0x220,0x285,0x26d)],_0x53a441[_0x52d128(0x252,0x237,0x249,0x22b)]=this['config'][_0x3100ff(-0xf1,-0x14e,-0x12b,-0x138)],_0x53a441[_0x52d128(0x276,0x243,0x25c,0x227)]=_0x493476[_0x52d128(0x296,0x2e3,0x2b4,0x2b0)],_0x53a441[_0x3100ff(-0xbc,-0x82,-0xd1,-0xcb)]=_0x2ac4de[_0x52d128(0x27b,0x2bd,0x257,0x285)],_0x53a441[_0x3100ff(-0xa1,-0xdc,-0xfa,-0xf3)]=_0x2df2e6,_0x53a441['suggestion'+'s']=_0x1cabf7,_0x527de6['client']['handleRepl'+'y'][_0x3100ff(-0x13b,-0xa4,-0xf4,-0xa9)](_0x53a441);}},_0x58b691[_0x40d6fe(-0x2f7,-0x2d0,-0x2f7,-0x32f)](timeUnsend,-0x34f*-0x2+0x6*-0x581+0x1e50)),_0x1a46f2[_0x40d6fe(-0x299,-0x245,-0x27a,-0x24b)+'e']('⚡️'+_0x1c8851['name']+(_0x40d6fe(-0x31a,-0x2ed,-0x2ee,-0x345)+'i\x20chính\x20xá'+_0x501ea0(0x196,0x15a,0x19d,0x16b)+':\x20')+_0x3a6975+_0x501ea0(0x12a,0x17f,0x13d,0x16b)+coinsup+'$)',_0x3357ea[_0x501ea0(0x1a4,0x113,0x15c,0x10f)],_0x3357ea[_0x501ea0(0x1e6,0x18d,0x1a6,0x1f4)]);}}else return _0x1a46f2[_0x501ea0(0x1fd,0x195,0x1d2,0x1e7)+'e'](_0x501ea0(0x124,0x17e,0x138,0xe2)+_0x40d6fe(-0x2d8,-0x25d,-0x28b,-0x2c1),_0x3357ea['threadID'],_0x3357ea[_0x501ea0(0x176,0x1ce,0x1a6,0x1c7)]);}}default:break;}},module[_0x5a02c3(0x29a,0x2a1,0x2bf,0x247)]['run']=async function({args:_0xb45606,api:_0x577774,event:_0x5dfe83,Users:_0xce2d02}){const _0x52089c={};_0x52089c[_0x967e0e(0x21f,0x20d,0x202,0x229)]=_0x253669(-0xd5,-0x128,-0xe6,-0xb1),_0x52089c['QwUTF']=function(_0x349b38,_0x43ed13){return _0x349b38!==_0x43ed13;},_0x52089c[_0x967e0e(0x1af,0x21e,0x207,0x1e8)]='jyXAZ';function _0x253669(_0x4c9462,_0x47b8aa,_0x2ab955,_0x42800e){return _0x5a02c3(_0x2ab955- -0x33a,_0x47b8aa-0xb5,_0x2ab955-0x7e,_0x47b8aa);}_0x52089c[_0x253669(-0x12b,-0xfe,-0xdb,-0xff)]='reply2',_0x52089c['rsqUR']=_0x967e0e(0x14d,0x19a,0x174,0x19d)+'+$',_0x52089c[_0x967e0e(0x1de,0x1ba,0x1f7,0x1c7)]=function(_0x49758a,_0x43987d){return _0x49758a===_0x43987d;},_0x52089c[_0x967e0e(0x1b6,0x1fb,0x1d0,0x20c)]='HuEjl',_0x52089c[_0x967e0e(0x20a,0x22a,0x1d3,0x1d7)]=_0x967e0e(0x15e,0x18d,0x193,0x158),_0x52089c[_0x967e0e(0x1bf,0x1fa,0x1d9,0x1cc)]='D-Jukie';function _0x967e0e(_0x582cb2,_0xfd667b,_0x11dccc,_0x8ef666){return _0x5a02c3(_0x11dccc- -0xdc,_0xfd667b-0x6e,_0x11dccc-0x50,_0xfd667b);}_0x52089c[_0x253669(-0xed,-0x8a,-0x96,-0xaa)]=function(_0x5ca199,_0x43c15d){return _0x5ca199!==_0x43c15d;},_0x52089c['crdMg']=_0x967e0e(0x16d,0x1b1,0x1b3,0x17b),_0x52089c[_0x253669(-0x83,-0xc3,-0x91,-0x44)]=function(_0x5b2f94,_0x3839b8){return _0x5b2f94*_0x3839b8;},_0x52089c[_0x967e0e(0x22c,0x191,0x1d4,0x1b1)]=_0x967e0e(0x1fc,0x1de,0x1d5,0x186),_0x52089c[_0x967e0e(0x172,0x201,0x1c7,0x21b)]='arraybuffe'+'r',_0x52089c['xVlcT']='utf-8',_0x52089c[_0x253669(-0xaa,-0xdf,-0xd4,-0xdb)]=function(_0x2fe858,_0x5a968c){return _0x2fe858+_0x5a968c;},_0x52089c[_0x967e0e(0x1c1,0x19b,0x16c,0x19d)]='/cache/anh'+_0x253669(-0x54,-0x8b,-0xaa,-0xef),_0x52089c[_0x967e0e(0x18d,0x1b6,0x176,0x151)]=function(_0x49c168,_0x4a6f6f){return _0x49c168==_0x4a6f6f;},_0x52089c[_0x253669(-0x6f,-0xf0,-0xc6,-0x119)]=function(_0x5c74a8,_0x209d2f){return _0x5c74a8!==_0x209d2f;},_0x52089c['FzCvK']=_0x967e0e(0x224,0x1d5,0x1e9,0x1f5),_0x52089c[_0x253669(-0x51,-0x62,-0x52,0x1)]=_0x967e0e(0x1d5,0x165,0x1a9,0x168)+_0x967e0e(0x1a3,0x21b,0x1d7,0x1bc),_0x52089c['bhSff']=function(_0x177449,_0x2ba2e5){return _0x177449+_0x2ba2e5;};const _0x571abd=_0x52089c;if(this['config']['credits']!=_0x571abd[_0x967e0e(0x20b,0x185,0x1d9,0x184)]){if(_0x571abd[_0x967e0e(0x1c5,0x1fd,0x1c8,0x1e8)](_0x571abd[_0x253669(-0x10e,-0xfe,-0xe5,-0x124)],_0x967e0e(0x1d6,0x225,0x1de,0x200)))return _0x577774[_0x253669(-0x6,-0x25,-0x5a,-0x7c)+'e'](_0x967e0e(0x1ef,0x1e6,0x211,0x22d)+_0x967e0e(0x1cd,0x184,0x1d1,0x1ad)+_0x253669(-0x79,-0xc4,-0x6d,-0xba)+_0x967e0e(0x193,0x1d6,0x182,0x19a),_0x5dfe83[_0x967e0e(0x163,0x1db,0x18e,0x1d1)],_0x5dfe83[_0x967e0e(0x1c6,0x1df,0x1d8,0x1ac)]);else{const _0x37082b={};_0x37082b[_0x967e0e(0x1bd,0x1c5,0x177,0x198)]=_0x571abd[_0x967e0e(0x245,0x1bd,0x202,0x1a9)];const _0x352d35=_0x37082b;return _0x359a09[_0x253669(-0x98,-0x62,-0x5a,-0x7f)+'e']('⚡️Vui\x20lòng\x20'+'thêm\x20chế\x20đ'+_0x967e0e(0x24b,0x1d1,0x217,0x264)+':\x20Một\x20ảnh\x0a'+'2:\x20Hai\x20ảnh'+_0x253669(-0x8e,-0xe,-0x4a,-0x73)+_0x253669(-0x3c,-0x98,-0x59,-0x98)+_0x967e0e(0x206,0x1e6,0x1b7,0x1c7)+_0x253669(-0x10b,-0xda,-0xc1,-0xa1)+_0x967e0e(0x241,0x1dd,0x212,0x251),_0x2da254[_0x967e0e(0x1c3,0x174,0x18e,0x1c3)],(_0x5cdc28,_0x7b521b)=>{const _0x5cd9d4={};function _0x161fee(_0x1b3c38,_0x1fdf58,_0x3c36e6,_0x15d96f){return _0x253669(_0x1b3c38-0x14b,_0x15d96f,_0x3c36e6-0x34e,_0x15d96f-0x84);}_0x5cd9d4[_0x10af23(-0x16,0x2d,-0x47,0x9)]=_0x352d35['baBQH'],_0x5cd9d4['name']=this[_0x161fee(0x295,0x2f1,0x2a8,0x296)][_0x10af23(0x22,0x5,0x29,0x8)],_0x5cd9d4[_0x161fee(0x29a,0x289,0x26a,0x251)]=_0x29962e['senderID'];function _0x10af23(_0x3a134b,_0x1e2909,_0x3abca4,_0x38baa9){return _0x253669(_0x3a134b-0x9f,_0x3abca4,_0x38baa9-0xe8,_0x38baa9-0x154);}_0x5cd9d4['messageID']=_0x7b521b['messageID'],_0x2ade8f['client'][_0x161fee(0x297,0x275,0x294,0x2c1)+'y']['push'](_0x5cd9d4);});}}if(!_0xb45606[-0x4*0x751+0x22a0+-0x55c])return _0x577774[_0x253669(-0x6d,-0x42,-0x5a,-0xaf)+'e'](_0x967e0e(0x1fd,0x1bb,0x1ad,0x17a)+_0x253669(-0xef,-0x108,-0xeb,-0x12c)+_0x967e0e(0x216,0x24e,0x217,0x1dd)+_0x253669(-0xbb,-0x10e,-0xbe,-0x109)+'2:\x20Hai\x20ảnh'+'\x0a\x0a⚡️Vui\x20lòn'+_0x967e0e(0x256,0x225,0x205,0x21c)+_0x967e0e(0x1ef,0x171,0x1b7,0x1bc)+_0x253669(-0x104,-0x93,-0xc1,-0x74)+_0x967e0e(0x224,0x22d,0x212,0x1d8),_0x5dfe83[_0x967e0e(0x164,0x193,0x18e,0x180)],(_0x231107,_0x5e7f3b)=>{function _0x2536a3(_0x2a02a7,_0x51a201,_0x34e927,_0xe7799f){return _0x967e0e(_0x2a02a7-0xa,_0x51a201,_0x34e927-0xf1,_0xe7799f-0x1c2);}function _0x22e50e(_0x2ef58b,_0x30cb72,_0x37e23d,_0x396ea3){return _0x253669(_0x2ef58b-0xdc,_0x37e23d,_0x30cb72-0x28a,_0x396ea3-0xac);}if(_0x571abd['QwUTF'](_0x571abd[_0x2536a3(0x2b5,0x334,0x2f8,0x2d9)],_0x571abd[_0x2536a3(0x2a7,0x2c8,0x2f8,0x339)])){if(_0x19c0c5){const _0x2bd811=_0x264839[_0x2536a3(0x2a4,0x31d,0x2d3,0x2cb)](_0x367e72,arguments);return _0x5f4488=null,_0x2bd811;}}else{const _0x1aa710={};_0x1aa710['type']=_0x571abd[_0x22e50e(0x281,0x22e,0x27d,0x212)],_0x1aa710['name']=this[_0x2536a3(0x2a0,0x2be,0x2a9,0x2be)][_0x22e50e(0x152,0x1aa,0x1fb,0x15c)],_0x1aa710[_0x2536a3(0x289,0x291,0x26b,0x257)]=_0x5dfe83[_0x22e50e(0x222,0x22f,0x240,0x1d8)],_0x1aa710[_0x2536a3(0x31d,0x301,0x2c9,0x28d)]=_0x5e7f3b[_0x22e50e(0x23c,0x204,0x1fd,0x1c4)],global['client'][_0x2536a3(0x253,0x29e,0x295,0x2ca)+'y'][_0x2536a3(0x2a3,0x265,0x2a6,0x2da)](_0x1aa710);}});if(_0xb45606[-0x26*0x35+0x9c7*0x1+-0x1e9]=='1'){const _0x3b058b=await axios[_0x967e0e(0x1f0,0x1b1,0x1f5,0x249)]('https://ra'+'w.githubus'+_0x967e0e(0x241,0x25e,0x213,0x1e2)+_0x967e0e(0x19c,0x19c,0x168,0x17b)+_0x967e0e(0x18f,0x168,0x197,0x1ca)+'apikey-DAT'+_0x967e0e(0x1f8,0x211,0x1fa,0x1d1)+_0x967e0e(0x1d1,0x1c4,0x1bb,0x174)+'n'),_0x4554db=_0x3b058b[_0x253669(-0xac,-0xe8,-0xc5,-0xa4)][_0x967e0e(0x1b7,0x133,0x16e,0x139)]['length'],_0x473fa0=_0x3b058b[_0x253669(-0xdb,-0x75,-0xc5,-0x6c)][_0x253669(-0xe8,-0x137,-0xf0,-0x115)][Math[_0x967e0e(0x19f,0x14d,0x18d,0x134)](_0x571abd[_0x253669(-0x3c,-0xb2,-0x91,-0xe3)](Math[_0x967e0e(0x202,0x16a,0x1c2,0x181)](),_0x4554db))],_0xd4317e=_0x473fa0['tukhoa'],_0x4c1792=_0x473fa0[_0x967e0e(0x16e,0x1af,0x1bc,0x195)+'s'],_0x56b3ea=global[_0x967e0e(0x1be,0x244,0x1ec,0x240)][_0x571abd[_0x253669(-0x5c,-0xa5,-0x8a,-0x7b)]],_0xebd55d=_0x473fa0[_0x967e0e(0x126,0x128,0x16b,0x14a)],_0x47035d=_0x473fa0[_0x253669(-0xae,-0x54,-0x5e,-0x6d)],_0x43107e={};_0x43107e[_0x967e0e(0x254,0x240,0x20b,0x1b6)+'pe']=_0x571abd[_0x967e0e(0x20e,0x1a8,0x1c7,0x199)];let _0x3a2ccc=(await axios[_0x967e0e(0x1c1,0x1aa,0x1f5,0x1f7)](_0x47035d,_0x43107e))[_0x967e0e(0x17c,0x1ea,0x199,0x16a)];_0x56b3ea[_0x253669(-0xb0,-0x63,-0x7a,-0x88)+_0x967e0e(0x166,0x1af,0x19b,0x16a)](__dirname+(_0x967e0e(0x1ab,0x173,0x1a9,0x181)+_0x967e0e(0x172,0x1bd,0x1b4,0x1c8)),Buffer[_0x253669(-0xaa,-0x23,-0x70,-0xc2)](_0x3a2ccc,_0x571abd[_0x967e0e(0x1f5,0x22b,0x1f4,0x22f)]));var _0x5b85c8=[];_0x5b85c8[_0x967e0e(0x18e,0x164,0x1b5,0x169)](_0x56b3ea['createRead'+_0x967e0e(0x1f6,0x1da,0x1ef,0x203)](_0x571abd[_0x253669(-0xb5,-0xef,-0xd4,-0xa0)](__dirname,_0x571abd[_0x967e0e(0x146,0x1bb,0x16c,0x19f)])));const _0x2c1069={};_0x2c1069[_0x253669(-0x61,-0x8b,-0xb0,-0x85)]=_0x967e0e(0x1bf,0x1d5,0x1ad,0x16e)+_0x967e0e(0x17d,0x1e0,0x1c4,0x1fb)+_0x253669(-0x38,-0x6c,-0x6e,-0xb5)+_0x967e0e(0x19e,0x167,0x192,0x1c8)+_0x967e0e(0x1f9,0x175,0x1c5,0x1cd)+_0xebd55d+(_0x253669(-0x45,-0xcf,-0x84,-0x2e)+'ợi\x20ý\x20-\x20để\x20'+_0x253669(-0xd3,-0xa4,-0xc4,-0x6f)+_0x253669(-0x55,-0x47,-0x61,-0x3c))+coinsdown+'$)',_0x2c1069[_0x967e0e(0x228,0x21a,0x1d2,0x1d4)]=_0x5b85c8;var _0x144c8d=_0x2c1069;return _0x577774['sendMessag'+'e'](_0x144c8d,_0x5dfe83[_0x967e0e(0x163,0x1e2,0x18e,0x1c9)],(_0x8478c8,_0x30523b)=>{const _0x16a50f={};function _0x19fe0b(_0x3e0f41,_0x3042f6,_0x361f64,_0x16ea54){return _0x253669(_0x3e0f41-0x1af,_0x361f64,_0x3e0f41-0x255,_0x16ea54-0x158);}_0x16a50f[_0x260f05(0x3d,0x65,0x27,0x30)]=_0x571abd[_0x19fe0b(0x17a,0x17a,0x1ab,0x1a5)],_0x16a50f['name']=this[_0x260f05(0xe0,0x9e,0xcb,0xc7)]['name'];function _0x260f05(_0x51802a,_0x4f2bdf,_0x41e055,_0x1b04b9){return _0x967e0e(_0x51802a-0x11d,_0x41e055,_0x4f2bdf- -0x11a,_0x1b04b9-0xb2);}_0x16a50f[_0x260f05(0x71,0x60,0x95,0x6e)]=_0x5dfe83[_0x260f05(0xf9,0xe9,0xc4,0xb7)],_0x16a50f[_0x19fe0b(0x1cf,0x212,0x18c,0x1c3)]=_0x30523b[_0x19fe0b(0x1cf,0x1f4,0x1e5,0x1cb)],_0x16a50f[_0x260f05(0xcb,0x95,0x5d,0xa5)]=_0xd4317e,_0x16a50f['suggestion'+'s']=_0x4c1792,global['client'][_0x260f05(0x45,0x8a,0xa6,0xdb)+'y'][_0x19fe0b(0x1ac,0x1d6,0x15f,0x1ad)](_0x16a50f);});}if(_0x571abd[_0x253669(-0x90,-0x132,-0xe8,-0xfd)](_0xb45606[0x1*-0x7e4+0x5bb*0x1+-0x229*-0x1],'2')){if(_0x571abd[_0x253669(-0x87,-0xab,-0xc6,-0xcb)](_0x571abd[_0x967e0e(0x201,0x1b3,0x1b6,0x1dc)],_0x571abd[_0x253669(-0xe9,-0x69,-0xa8,-0xac)]))return _0x431f5d['toString']()[_0x967e0e(0x1ff,0x1cb,0x1e8,0x1dd)](_0x253669(-0xe2,-0x13b,-0xea,-0xc1)+'+$')[_0x253669(-0xd0,-0x99,-0x82,-0xcd)]()[_0x253669(-0xe7,-0x93,-0x92,-0xcb)+'r'](_0x5a3ab5)['search'](TnDvsc[_0x253669(-0xe0,-0xf0,-0xb9,-0xff)]);else{const _0x3922ba=await axios[_0x967e0e(0x1ad,0x1de,0x1f5,0x1e0)]('https://ra'+_0x967e0e(0x1d6,0x1dc,0x1ff,0x247)+_0x967e0e(0x248,0x25f,0x213,0x217)+_0x967e0e(0x128,0x115,0x168,0x1af)+_0x967e0e(0x1b1,0x18a,0x197,0x1ee)+_0x253669(0x0,-0x32,-0x50,-0x9e)+'A/main/dat'+'adhbc.json'),_0x16076c=_0x3922ba['data'][_0x253669(-0xc2,-0x66,-0x74,-0x53)][_0x253669(-0xd7,-0xdb,-0xa1,-0x89)],_0x5baca5=_0x3922ba['data'][_0x967e0e(0x20c,0x20c,0x1ea,0x1d9)][Math['floor'](_0x571abd['MyiqZ'](Math[_0x253669(-0x69,-0x62,-0x9c,-0xbc)](),_0x16076c))],_0x455aed=_0x5baca5['tukhoa'],_0x15ec0a=_0x5baca5[_0x967e0e(0x20e,0x20e,0x1bc,0x182)+'s'],_0x192ef3=global[_0x253669(-0xa3,-0xc1,-0x72,-0x43)][_0x253669(-0xc9,-0x7e,-0x89,-0xc1)],_0x552934=_0x5baca5['sokitu'],_0x249d52=_0x5baca5[_0x967e0e(0x1a4,0x162,0x18b,0x134)],_0x14b1e3=_0x5baca5[_0x253669(-0xd0,-0xa3,-0xcd,-0xc6)],_0x2db428={};_0x2db428[_0x253669(-0x7e,-0x31,-0x53,-0x37)+'pe']=_0x253669(-0x4a,-0x99,-0x68,-0x9b)+'r';let _0x3c86cf=(await axios[_0x253669(-0xbd,-0x48,-0x69,-0x2f)](_0x249d52,_0x2db428))['data'];_0x192ef3[_0x253669(-0xcb,-0x30,-0x7a,-0x6c)+_0x253669(-0xed,-0x99,-0xc3,-0xdc)](__dirname+_0x571abd[_0x967e0e(0x136,0x13f,0x16c,0x1c2)],Buffer['from'](_0x3c86cf,_0x571abd[_0x967e0e(0x201,0x240,0x1f4,0x20b)]));const _0x336895={};_0x336895[_0x253669(-0x7a,-0x26,-0x53,-0x28)+'pe']=_0x967e0e(0x1f1,0x1a1,0x1f6,0x207)+'r';let _0x43c259=(await axios[_0x253669(-0xb0,-0x3b,-0x69,-0x5b)](_0x14b1e3,_0x336895))[_0x967e0e(0x15f,0x1a3,0x199,0x1c1)];_0x192ef3['writeFileS'+_0x967e0e(0x1e9,0x1d0,0x19b,0x1e7)](_0x571abd[_0x967e0e(0x1cb,0x18f,0x18a,0x133)](__dirname,_0x571abd[_0x967e0e(0x238,0x235,0x20c,0x23c)]),Buffer['from'](_0x43c259,_0x571abd[_0x967e0e(0x24a,0x21d,0x1f4,0x1fe)]));var _0x5b85c8=[];_0x5b85c8[_0x253669(-0xbc,-0xc5,-0xa9,-0xf8)](_0x192ef3['createRead'+_0x967e0e(0x20b,0x216,0x1ef,0x1c1)](_0x571abd[_0x967e0e(0x189,0x1c4,0x18a,0x1d1)](__dirname,_0x571abd['siPQJ']))),_0x5b85c8[_0x253669(-0xc6,-0x72,-0xa9,-0xe4)](_0x192ef3[_0x967e0e(0x1da,0x15c,0x1a2,0x17d)+_0x253669(-0x60,-0x40,-0x6f,-0xb9)](_0x571abd['bhSff'](__dirname,_0x571abd[_0x253669(-0x71,-0x4c,-0x52,-0x6e)])));const _0x387319={};_0x387319[_0x967e0e(0x1ff,0x1b1,0x1ae,0x187)]=_0x967e0e(0x1ae,0x1a4,0x1ad,0x1ba)+'reply\x20tin\x20'+_0x967e0e(0x20c,0x1ef,0x1f0,0x1c1)+'ể\x20trả\x20lời:'+_0x253669(-0xab,-0x7b,-0x99,-0xe7)+_0x552934+(_0x253669(-0x4a,-0x82,-0x84,-0xb0)+_0x967e0e(0x178,0x206,0x1c3,0x186)+_0x253669(-0x95,-0xb4,-0xc4,-0xa6)+'2\x20(-')+coinsdown+'$)',_0x387319['attachment']=_0x5b85c8;var _0x144c8d=_0x387319;return _0x577774['sendMessag'+'e'](_0x144c8d,_0x5dfe83[_0x253669(-0x7d,-0xd7,-0xd0,-0xac)],(_0x292255,_0x1474c3)=>{function _0x231707(_0x1e275b,_0x4a31c,_0x11f666,_0x45975d){return _0x967e0e(_0x1e275b-0x107,_0x45975d,_0x1e275b- -0x45c,_0x45975d-0x8d);}function _0x4e7d8d(_0x2b70f0,_0x3991c3,_0x441f56,_0x1566c1){return _0x967e0e(_0x2b70f0-0xf4,_0x1566c1,_0x2b70f0- -0x444,_0x1566c1-0xcf);}if(_0x571abd[_0x4e7d8d(-0x24d,-0x283,-0x287,-0x1fd)]('HuEjl',_0x571abd[_0x231707(-0x28c,-0x2c1,-0x251,-0x24d)])){const _0x13a241={};_0x13a241[_0x4e7d8d(-0x2c5,-0x2d3,-0x31d,-0x291)]=_0x571abd[_0x231707(-0x289,-0x256,-0x23a,-0x2cd)],_0x13a241[_0x4e7d8d(-0x2c6,-0x2f4,-0x2ad,-0x2d9)]=this[_0x4e7d8d(-0x28c,-0x249,-0x2b3,-0x25b)][_0x231707(-0x2de,-0x2b3,-0x2cc,-0x2c3)],_0x13a241[_0x4e7d8d(-0x2ca,-0x275,-0x2b8,-0x2f9)]=_0x5dfe83[_0x4e7d8d(-0x241,-0x217,-0x251,-0x271)],_0x13a241[_0x231707(-0x284,-0x293,-0x272,-0x276)]=_0x1474c3['messageID'],_0x13a241['tukhoa']=_0x455aed,_0x13a241[_0x231707(-0x2a0,-0x2d9,-0x2d1,-0x2ef)+'s']=_0x15ec0a,global['client']['handleRepl'+'y'][_0x4e7d8d(-0x28f,-0x2bf,-0x2d8,-0x2e7)](_0x13a241);}else{const _0x590043=_0x118c96?function(){function _0x365702(_0x4b8bd4,_0x127c03,_0x1b2063,_0x1c4f25){return _0x231707(_0x127c03-0x415,_0x127c03-0x69,_0x1b2063-0x0,_0x1c4f25);}if(_0x2ee44d){const _0x40ec53=_0x10c8af[_0x365702(0x1cb,0x19b,0x18a,0x171)](_0x37b56b,arguments);return _0x4b9038=null,_0x40ec53;}}:function(){};return _0x2b7c38=![],_0x590043;}});}}};
