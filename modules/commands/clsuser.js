// ko dùng chung với modules consle

module.exports.config={name:"csluser",version:"1.0.0",hasPermssion:1,credits:"ManhG",description:"Bật tắt console user",commandCategory:"admin",depndencies:{},usages:"",cooldowns:2},module.exports.handleEvent=async({event:e,api:o,Users:s,Threads:a})=>{const t=global.data.threadData.get(e.threadID)||{};if((void 0===t.console||1!=t.console)&&e.senderID!=global.data.botID){var n=await s.getNameUser(e.senderID),c=e.body||"Ảnh, video hoặc ký tự đặc biệt",d=["[33m","[34m","[35m","[36m","[31m","[1m"],l=d[Math.floor(Math.random()*d.length)];console.log("[32mTên:[37m ["+l+n+"[37m -> [0m"+c)}},module.exports.languages={vi:{on:"Bật",off:"Tắt",successText:"console thành công"},en:{on:"on",off:"off",successText:"console success!"}},module.exports.run=async function({api:e,event:o,Threads:s,getText:a}){const{threadID:t,messageID:n}=o;let c=(await s.getData(t)).data;return void 0===c.console||1==c.console?c.console=!1:c.console=!0,await s.setData(t,{data:c}),global.data.threadData.set(t,c),e.sendMessage(`${0==c.console?a("on"):a("off")} ${a("successText")}`,t,n)};
