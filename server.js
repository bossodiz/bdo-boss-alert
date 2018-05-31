const Discord = require('discord.js'); //เรียก discord.js มาใช้
const botRem = new Discord.Client(); //ประกาศ client ขึ้นมา

//คูดาวน์ 8 ชม.
var loopStart = 28800000;
var loopEnd   = 43200000;
var limitTime = 14400000;

var addtimezone = 25200000;
 
var newtimekzarka = ['02:00','00:00','18:00','02:00','00:00','18:00','02:00','00:00','18:00','02:00'];
var round = 0;

var moment = require('moment-timezone');


var kzarkaDead = new Date();
var kzarkarRespawnStart = new Date();
var kzarkarRespawnEnd = new Date();

var bossreset = true;

//event นี้ทำงานเมื่อ login สำเร็จ
botRem.on('ready', () => {
    console.log('Kzarka ready!');
});
//รอรับ event message เวลามีข้อความโผล่มาในแชท function นี้ก็จะทำงาน
botRem.on('message', message => { 
    var command = message.content.replace(/\s\s+/g, ' ');
    if (command === 'คจา') {
        message.reply('คจาจะเกิดเวลา '+newtimekzarka[round]+' น.');
        // if(!bossreset){
        //     message.reply('คจาจะเกิดเวลา '+convertTime(kzarkarRespawnStart)+' น. - ' +  convertTime(kzarkarRespawnEnd) + ' น.'  );
        // }else{
        //     message.reply('เซิฟเวอร์ปิดปรับปรุง รอเวลารายงานใหม่');
        // }
    }else if(command === 'คจารีเซ็ต'){
        // bossreset = true;
        // message.reply('คจารีเซ็ต');
    }else if(command === 'คจาตาย'){
        message.reply('คจาตายรอบเวลา '+newtimekzarka[round]+ ' น. / รอบต่อไปเวลา '+newtimekzarka[round+1]+' น.');
        round+=1;
        if(round === 10){
            round = 0;
        }
        // bossreset = false;
        // kzarkaDead = new Date(moment.now()+addtimezone);
        // kzarkarRespawnStart = new Date(moment.now()+loopStart+addtimezone);
        // kzarkarRespawnEnd = new Date(moment.now()+loopEnd+addtimezone);
        // message.reply('รีเซ็ตลูปเกิด คจาตายเวลา '+convertTime(kzarkaDead)+ ' น.');
    }else if(command === 'คจาเวลา'){
        var msg =   '\n'+
                    'จันทร์\t02:00\n'+
                    'อังคาร\t00:00\t18:00\n'+
                    'พุธ\t02:00\n'+
                    'พฤหัส\t00:00\t18:00\n'+
                    'ศุกร์\t02:00\n'+
                    'เสาร์\t00:00\t18:00\n'+
                    'อาทิตย์\t02:00';
        message.reply(msg);   
    
    }else if(command.substring(0,7) === 'คจาเกิด'){
        // var valuetext = command.substring(8,command.length).split(" ");
        // var a = valuetext[0];
        // var b = valuetext[1];
        // var c = valuetext[2];

        // if(c === 'ชม'){
        //     var time = parseInt(b)*60*60*1000;
        // }else{
        //     var time = parseInt(b)*60*1000;
        // }
        // if(a === '+'){
        //     kzarkarRespawnStart = kzarkarRespawnStart.setTime(kzarkarRespawnStart.getTime()+time);
        //     kzarkarRespawnEnd = kzarkarRespawnEnd.setTime(kzarkarRespawnEnd.getTime()+time);
        // }else{
        //     kzarkarRespawnStart = kzarkarRespawnStart.setTime(kzarkarRespawnStart.getTime()-time);
        //     kzarkarRespawnEnd = kzarkarRespawnEnd.setTime(kzarkarRespawnEnd.getTime()-time);
        // }
        // kzarkarRespawnStart = new Date(kzarkarRespawnStart);
        // kzarkarRespawnEnd = new Date(kzarkarRespawnEnd);
        // message.reply('คจาจะเกิดเวลา '+convertTime(kzarkarRespawnStart)+' น. - ' +  convertTime(kzarkarRespawnEnd) + ' น.'  );
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


