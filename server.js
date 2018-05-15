const Discord = require('discord.js'); //เรียก discord.js มาใช้
const botRem = new Discord.Client(); //ประกาศ client ขึ้นมา

//คูดาวน์ 8 ชม.
var loopStart = 28800000;
var loopEnd   = 43200000;
var limitTime = 14400000;

var addtimezone = 25200000;


var moment = require('moment-timezone');

var kzarkaDead;
var kzarkarRespawnStart;
var kzarkarRespawnEnd;

//event นี้ทำงานเมื่อ login สำเร็จ
botRem.on('ready', () => {
    console.log('Kzarka ready!');
});
//รอรับ event message เวลามีข้อความโผล่มาในแชท function นี้ก็จะทำงาน
botRem.on('message', message => { 
    if (message.content === 'คจา') {
        message.reply('คจาจะเกิดเวลา '+convertTime(kzarkarRespawnStart)+' น. - ' +  convertTime(kzarkarRespawnEnd) + ' น.'  );
    }else if(message.content === 'คจาตาย'){
        kzarkaDead = new Date(moment.now()+addtimezone);
        kzarkarRespawnStart = new Date(moment.now()+loopStart+addtimezone);
        kzarkarRespawnEnd = new Date(moment.now()+loopEnd+addtimezone);
        message.reply('รีเซ็ตลูปเกิด คจาตายเวลา '+convertTime(kzarkaDead)+ ' น.');
    }else if(message.content === 'คจารอเกิด'){
        kzarkarRespawnStart = new Date(moment.now()+addtimezone);
        kzarkarRespawnEnd = new Date(moment.now()+limitTime+addtimezone);
        message.reply('เซ็ตเวลาคจาเกิด '+convertTime(kzarkarRespawnStart)+' น. - ' +  convertTime(kzarkarRespawnEnd) + ' น.'  );
    }
});


function convertTime(vardate){
    var hour;
    var minute;
    
    if (vardate.getHours().toString().length == 1){
        hour = '0'+vardate.getHours().toString();
    }else{
        hour = vardate.getHours().toString();
    }

    if (vardate.getMinutes().toString().length == 1){
        minute = '0'+vardate.getMinutes().toString();
    }else{
        minute = vardate.getMinutes().toString();
    }

    return hour+':'+minute;
}



botRem.login('NDQ1NjgxMjg2OTI2MDQxMTE2.Ddu_Eg.HKqcjmXZbGAjppC1Ss3EUEf0oCA');


