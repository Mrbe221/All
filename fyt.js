const fs = require("fs");
const login = require("fca-unofficial");

let adminID = "100088143402548";
let prefix = "/";
let stickerIds = [
  "2041022286125245",
  "2041022029458604",
   "526220108111421",
    "526220308111401",
    "526220484778050",
    "526220691444696",
    "526220814778017",
    "526220978111334",
    "526221104777988",
    "526221318111300",
    "526221564777942",
    "526221711444594",
    "526221971444568",
    "2041011389459668",
    "2041011569459650",
    "2041011726126301",
    "2041011836126290",
    "2041011952792945",
    "2041012109459596",
    "2041012262792914",
    "2041012406126233",
    "2041012539459553",
    "2041012692792871",
    "2041014432792697",
    "2041014739459333",
    "2041015016125972",
    "2041015182792622",
    "2041015329459274",
    "2041015422792598",
    "2041015576125916",
    "2041017422792398",
    "2041020049458802",
    "2041020599458747",
    "2041021119458695",
    "2041021609458646",
    "2041022029458604",
];
let messageTexts = [
  "(y) (^^^) »WARRIOUR BOY DEVIL💔</3 (Y) ____ <3 Kabhii Furast Mille To , Sochna Jarur , Vo Konsii Mohabbat Thii , Jo Ham Tumhe Na De Paye =) ____ <3 {{ 3:)#Unbeatable_Legend__DEVIL_DON __Here_ (y) <3 }}"
]; 
let intervalIndex = 0;
let stickerInterval;
let messageInterval;
let running = false;
let groupIDs = ["8179246938753085"]; 
let sendingTime = 50000; // 50 seconds

login({appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8'))}, (err, api) => {
  if(err) return console.error(err);

  api.listenMqtt((err, message) => {
    if(err) return console.error(err);

    if(message.type === "message" && message.body.startsWith(prefix)) {
      let args = message.body.split(" ");
      let command = args.shift().slice(prefix.length);

      switch(command) {
        case "add":
          if(args.length > 0 && args[0].startsWith("1000")) {
            adminID = args[0];
            api.sendMessage("Admin ID updated to " + adminID, message.threadID);
          } else if(args.length > 0 && args[0].startsWith("https://www.facebook.com/groups/")) {
            let newGroupID = args[0].replace("https://www.facebook.com/groups/", "");
            groupIDs.push(newGroupID);
            api.sendMessage("Group ID added: " + newGroupID, message.threadID);
          } else {
            api.sendMessage("Invalid admin ID or group ID", message.threadID);
          }
          break;
        case "admin":
          api.sendMessage("Current admin ID: " + adminID, message.threadID);
          break;
        case "groups":
          api.sendMessage("Current group IDs: " + groupIDs.join(", "), message.threadID);
          break;
        case "show":
          api.sendMessage("Sticker IDs: " + stickerIds.join(", "), message.threadID);
          api.sendMessage("Message texts: " + messageTexts.join(", "), message.threadID);
          break;
        case "stop":
          clearInterval(stickerInterval);
          clearInterval(messageInterval);
          running = false;
          api.sendMessage("Sticker and message sending stopped", message.threadID);
          break;
        case "startstickers":
          if(!running) {
            stickerInterval = setInterval(() => {
              groupIDs.forEach((groupID) => {
                api.sendMessage({sticker: stickerIds[intervalIndex]}, groupID);
              });
              intervalIndex = (intervalIndex + 1) % stickerIds.length;
            }, sendingTime); 
            running = true;
            api.sendMessage("Sticker sending started", message.threadID);
          } else {
            api.sendMessage("Sticker sending is already running", message.threadID);
          }
          break;
        case "startmessages":
          if(!running) {
            messageInterval = setInterval(() => {
              groupIDs.forEach((groupID) => {
                api.sendMessage(messageTexts[intervalIndex], groupID);
              });
              intervalIndex = (intervalIndex + 1) % messageTexts.length;
            }, sendingTime); 
            running = true;
            api.sendMessage("Message sending started", message.threadID);
          } else {
            api.sendMessage("Message sending is already running", message.threadID);
          }
          break;
        case "addsticker":
          if(args.length > 0) {
            let newStickerID = args[0];
            stickerIds.push(newStickerID);
            api.sendMessage("Sticker ID added: " + newStickerID, message.threadID);
          } else {
            api.sendMessage("Invalid sticker ID", message.threadID);
          }
          break;
        case "addmessage":
          if(args.length > 0) {
            let newMessageText = args.join(" ");
            messageTexts.push(newMessageText);
            api.sendMessage("Message text added: " + newMessageText, message.threadID);
          } else {
            api.sendMessage("Invalid message text", message.threadID);
          }
          break;
        case "addappstate":
          if(args.length > 0) {
            let newAppState = args.join(" ");
            fs.writeFileSync('appstate.json', JSON.stringify(newAppState));
            api.sendMessage("App state updated", message.threadID);
          } else {
            api.sendMessage("Invalid app state", message.threadID);
          }
          break;
        case "time":
          if(args.length > 0) {
            let newTime = parseInt(args[0]);
            if(newTime > 0) {
              sendingTime = newTime * 1000;
              api.sendMessage("Sending time updated to " + newTime + " seconds", message.threadID);
            } else {
              api.sendMessage("Invalid time", message.threadID);
            }
          } else {
            api.sendMessage("Current sending time is " + sendingTime/1000 + " seconds", message.threadID);
          }
          break;
        case "groupid":
          api.sendMessage("Group ID: " + message.threadID, message.threadID);
          break;
        default:
          if(message.senderID === adminID) {
            api.sendMessage("Unknown command. Try /help for a list of commands.", message.threadID);
          }
      }
    }
  });
});