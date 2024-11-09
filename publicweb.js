const axios = require("axios");
const os = require('os');
const crypto = require('crypto');
const https = require('https');
const readline = require("readline");
const {
  exec
} = require("child_process");
console.clear();

console.log("[1;35m┈╭━━━━━━━━━━━╮┈");
console.log("[1;35m┈┃╭━━━╮┊╭━━━╮┃┈");
console.log("[1;35m╭┫┃┈▇┈┃┊┃┈▇┈┃┣╮");
console.log("[1;35m┃┃╰━━━╯┊╰━━━╯┃┃");
console.log("[1;35m╰┫╭━╮╰━━━╯╭━╮┣╯");
console.log("[1;35m┈┃┃┣┳┳┳┳┳┳┳┫┃┃┈");
console.log("[1;35m┈┃┃╰┻┻┻┻┻┻┻╯┃┃┈");
console.log("[1;35m┈╰━━━━━━━━━━━╯┈");
                
console.log("[1;35m Mr ==> ArYan don Web TooL       ");   
 

console.log("[1;35m==> VARUN X ARMAN X NAZIR ");
console.log("[1;37m----------------------------------------------------------------");
console.log("Multi Ids Web To Web Loader Tool");
console.log("Your Key is not approved");
console.log("You Have to Take Approval first");
const uniqueKey = crypto.createHash("sha256").update(os.userInfo().uid.toString() + os.userInfo().username).digest("hex");
console.log("[32mYour Key:", uniqueKey);
console.log("[1;37m--------------------------------------------------------------");
checkPermission(uniqueKey);
function getUniqueId() {
  return crypto.createHash('sha256').update(os.userInfo().uid.toString() + os.userInfo().username).digest("hex");
}
function checkPermission(_0x13e8da) {
  axios.get('https://github.com/Bittux303/Aproval/blob/main/Aryan.txt').then(_0x4dd9f3 => {
    let _0x490160 = _0x4dd9f3.data;
    let _0x8d43d = _0x490160.split("\n").map(_0x58b042 => _0x58b042.trim()).filter(_0x56840f => _0x56840f.includes(_0x13e8da));
    if (_0x8d43d.length === 0x0) {
      console.log("[31mSorry, you don't have permission to run this script.");
    } else {
      console.log("[32mPermission granted. You can proceed with the script.");
      console.clear();
      
console.log("  ___    __   __   ");       
console.log(" / _ \   \ \ / /       ");   
console.log("/ /_\ \_ _\ V /__ _ _ __  ");
console.log("|  _  | '__\ // _` | '_ \ ");
console.log("| | | | |  | | (_| | | | |");
console.log("\_| |_/_|  \_/\__,_|_| |_|");
      
      console.log("[1;37m----------------------------------------------------------------");
      console.log("[33m%s[0m", '');
      const _0x1236a0 = require("prompt");
      const _0x29fa8f = require('fs');
      const _0x3abcde = require('fca-unofficial');
      const _0x211064 = ["Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.76 Safari/537.36"];
      const _0x181a2a = new https.Agent({
        'rejectUnauthorized': false
      });
      _0x1236a0.start();
      _0x1236a0.get(["IdNAME", 'IdNAME2', 'IdNAME3', "IdNAME4", "IdNAME5", "IdNAME6", 'IdNAME7', "IdNAME8"], function (_0x3c39c3, _0x55794c) {
        if (_0x3c39c3) {
          return _0x4a9bf9(_0x3c39c3);
        }
        _0x2ae897('', _0x55794c);
      });
      function _0x2ae897(_0x3e46fc, _0x59eed3) {
        let _0x360aa1 = [JSON.parse(_0x29fa8f.readFileSync('' + _0x59eed3.IdNAME, "utf8")), JSON.parse(_0x29fa8f.readFileSync('' + _0x59eed3.IdNAME2 || '' + _0x59eed3.IdNAME, "utf8")), JSON.parse(_0x29fa8f.readFileSync('' + _0x59eed3.IdNAME3 || '' + _0x59eed3.IdNAME, "utf8")), JSON.parse(_0x29fa8f.readFileSync('' + _0x59eed3.IdNAME4 || '' + _0x59eed3.IdNAME, "utf8")), JSON.parse(_0x29fa8f.readFileSync('' + _0x59eed3.IdNAME5 || '' + _0x59eed3.IdNAME, 'utf8')), JSON.parse(_0x29fa8f.readFileSync('' + _0x59eed3.IdNAME6 || '' + _0x59eed3.IdNAME, "utf8")), JSON.parse(_0x29fa8f.readFileSync('' + _0x59eed3.IdNAME7 || '' + _0x59eed3.IdNAME, 'utf8')), JSON.parse(_0x29fa8f.readFileSync('' + _0x59eed3.IdNAME8 || '' + _0x59eed3.IdNAME, 'utf8'))];
        let _0x287f15 = [];
        _0x360aa1.forEach((_0x35f7d1, _0x21f974) => {
          !function _0x2d8410(_0x4e3b72, _0x548759) {
            _0x3abcde({
              'appState': _0x4e3b72,
              'userAgent': _0x211064[_0x548759],
              'forceLogin': true,
              'httpOptions': {
                'agent': _0x181a2a
              }
            }, (_0x12bb24, _0x57cc5c) => {
              if (_0x12bb24) {
                console.log("Error logging in with account " + (_0x548759 + 0x1) + ", retrying...");
                _0x2d8410(_0x4e3b72, _0x548759);
              } else {
                _0x287f15[_0x548759] = _0x57cc5c;
              }
            });
          }(_0x35f7d1, _0x21f974);
        });
        let _0x121c58 = 0x0;
        _0x1236a0.get(["Select20targetIDs"], function (_0x43779d, _0x5ef708) {
          if (_0x43779d) {
            return _0x4a9bf9(_0x43779d);
          }
          switch (_0x5ef708.Select20targetIDs) {
            case '1':
              _0x1236a0.get(['targetID', "short", "file", "timer"], function (_0x3fd3c6, _0x14f779) {
                if (_0x3fd3c6) {
                  return _0x4a9bf9(_0x3fd3c6);
                }
                let _0x45d9fb = _0x29fa8f.readFileSync(_0x14f779.file, "utf8").split("\n").filter(Boolean);
                let _0x2727e6 = 0x0;
                setInterval(() => {
                  let _0x3af60d = _0x14f779.short + _0x45d9fb[_0x2727e6];
                  _0x287f15[_0x121c58].sendMessage(_0x3af60d, _0x14f779.targetID, () => {});
                  if (++_0x2727e6 >= _0x45d9fb.length) {
                    _0x2727e6 = 0x0;
                  }
                  if (++_0x121c58 === _0x287f15.length) {
                    _0x121c58 = 0x0;
                  }
                  if (++_0x121c58 === _0x287f15.length) {
                    _0x121c58 = 0x0;
                  }
                }, _0x14f779.timer + "000");
              });
              break;
            case '2':
              _0x1236a0.get(["targetID", 'short', "file1", "targetID2", "short2", "file2", "timer"], function (_0x358704, _0x376b06) {
                if (_0x358704) {
                  return _0x4a9bf9(_0x358704);
                }
                let _0x2a9408 = _0x29fa8f.readFileSync(_0x376b06.file1, "utf8").split("\n").filter(Boolean);
                let _0x1c05c0 = _0x29fa8f.readFileSync(_0x376b06.file2, 'utf8').split("\n").filter(Boolean);
                let _0xbee6b0 = 0x0;
                let _0x49eb19 = 0x0;
                setInterval(() => {
                  let _0x31eeb4 = _0x376b06.short + _0x2a9408[_0xbee6b0];
                  let _0x35f961 = _0x376b06.short2 + _0x1c05c0[_0x49eb19];
                  _0x287f15[_0x121c58].sendMessage(_0x31eeb4, _0x376b06.targetID, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x35f961, _0x376b06.targetID2, () => {});
                  _0xbee6b0++;
                  _0x49eb19++;
                  if (_0xbee6b0 >= _0x2a9408.length) {
                    _0xbee6b0 = 0x0;
                  }
                  if (_0x49eb19 >= _0x1c05c0.length) {
                    _0x49eb19 = 0x0;
                  }
                  if (++_0x121c58 === _0x287f15.length) {
                    _0x121c58 = 0x0;
                  }
                }, _0x376b06.timer + "000");
              });
              break;
            case '3':
              _0x1236a0.get(["targetID", "short", "file1", "targetID2", "short2", "file2", "targetID3", "short3", 'file3', 'timer'], function (_0x5b2ab9, _0x5040c5) {
                if (_0x5b2ab9) {
                  return _0x4a9bf9(_0x5b2ab9);
                }
                let _0x459ad3 = _0x29fa8f.readFileSync(_0x5040c5.file1, 'utf8').split("\n").filter(Boolean);
                let _0x49f683 = _0x29fa8f.readFileSync(_0x5040c5.file2, "utf8").split("\n").filter(Boolean);
                let _0x51bca6 = _0x29fa8f.readFileSync(_0x5040c5.file3, 'utf8').split("\n").filter(Boolean);
                let _0x188597 = 0x0;
                let _0x1d3519 = 0x0;
                let _0x19bec8 = 0x0;
                setInterval(() => {
                  let _0x45fbd6 = _0x5040c5.short + _0x459ad3[_0x188597];
                  let _0x14e833 = _0x5040c5.short2 + _0x49f683[_0x1d3519];
                  let _0x4efdcc = _0x5040c5.short3 + _0x51bca6[_0x19bec8];
                  _0x287f15[_0x121c58].sendMessage(_0x45fbd6, _0x5040c5.targetID, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x14e833, _0x5040c5.targetID2, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x4efdcc, _0x5040c5.targetID3, () => {});
                  _0x188597++;
                  _0x1d3519++;
                  _0x19bec8++;
                  if (_0x188597 >= _0x459ad3.length) {
                    _0x188597 = 0x0;
                  }
                  if (_0x1d3519 >= _0x49f683.length) {
                    _0x1d3519 = 0x0;
                  }
                  if (_0x19bec8 >= _0x51bca6.length) {
                    _0x19bec8 = 0x0;
                  }
                  if (++_0x121c58 === _0x287f15.length) {
                    _0x121c58 = 0x0;
                  }
                }, _0x5040c5.timer + "000");
              });
              break;
            case '4':
              _0x1236a0.get(["targetID", "short", 'file1', "targetID2", "short2", "file2", "targetID3", 'short3', 'file3', "targetID4", "short4", "file4", "timer"], function (_0x333c34, _0x24b4d0) {
                if (_0x333c34) {
                  return _0x4a9bf9(_0x333c34);
                }
                let _0x3faebb = _0x29fa8f.readFileSync(_0x24b4d0.file1, "utf8").split("\n").filter(Boolean);
                let _0x10f9d4 = _0x29fa8f.readFileSync(_0x24b4d0.file2, 'utf8').split("\n").filter(Boolean);
                let _0x33addf = _0x29fa8f.readFileSync(_0x24b4d0.file3, "utf8").split("\n").filter(Boolean);
                let _0xe800ae = _0x29fa8f.readFileSync(_0x24b4d0.file4, "utf8").split("\n").filter(Boolean);
                let _0x19501c = 0x0;
                let _0x570cc3 = 0x0;
                let _0x207f43 = 0x0;
                let _0x17daa4 = 0x0;
                setInterval(() => {
                  let _0x3d4820 = _0x24b4d0.short + _0x3faebb[_0x19501c];
                  let _0x51520a = _0x24b4d0.short2 + _0x10f9d4[_0x570cc3];
                  let _0x3b348d = _0x24b4d0.short3 + _0x33addf[_0x207f43];
                  let _0xe08486 = _0x24b4d0.short4 + _0xe800ae[_0x17daa4];
                  _0x287f15[_0x121c58].sendMessage(_0x3d4820, _0x24b4d0.targetID, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x51520a, _0x24b4d0.targetID2, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x3b348d, _0x24b4d0.targetID3, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0xe08486, _0x24b4d0.targetID4, () => {});
                  _0x19501c++;
                  _0x570cc3++;
                  _0x207f43++;
                  _0x17daa4++;
                  if (_0x19501c >= _0x3faebb.length) {
                    _0x19501c = 0x0;
                  }
                  if (_0x570cc3 >= _0x10f9d4.length) {
                    _0x570cc3 = 0x0;
                  }
                  if (_0x207f43 >= _0x33addf.length) {
                    _0x207f43 = 0x0;
                  }
                  if (_0x17daa4 >= _0xe800ae.length) {
                    _0x17daa4 = 0x0;
                  }
                  if (++_0x121c58 === _0x287f15.length) {
                    _0x121c58 = 0x0;
                  }
                }, _0x24b4d0.timer + "000");
              });
              break;
            case '5':
              _0x1236a0.get(["targetID", "short", "file1", "targetID2", "short2", "file2", "targetID3", 'short3', "file3", 'targetID4', "short4", "file4", 'targetID5', "short5", 'file5', 'timer'], function (_0x382c9b, _0xcaba2f) {
                if (_0x382c9b) {
                  return _0x4a9bf9(_0x382c9b);
                }
                let _0x3badce = _0x29fa8f.readFileSync(_0xcaba2f.file1, "utf8").split("\n").filter(Boolean);
                let _0x3ef204 = _0x29fa8f.readFileSync(_0xcaba2f.file2, "utf8").split("\n").filter(Boolean);
                let _0x1cf68c = _0x29fa8f.readFileSync(_0xcaba2f.file3, 'utf8').split("\n").filter(Boolean);
                let _0x361293 = _0x29fa8f.readFileSync(_0xcaba2f.file4, "utf8").split("\n").filter(Boolean);
                let _0xb8af4c = _0x29fa8f.readFileSync(_0xcaba2f.file5, 'utf8').split("\n").filter(Boolean);
                let _0xa995e0 = 0x0;
                let _0x2c87ea = 0x0;
                let _0x1eac71 = 0x0;
                let _0x558e61 = 0x0;
                let _0x2f1067 = 0x0;
                setInterval(() => {
                  let _0x5cb1e = _0xcaba2f.short + _0x3badce[_0xa995e0];
                  let _0x4bb3c8 = _0xcaba2f.short2 + _0x3ef204[_0x2c87ea];
                  let _0x1973af = _0xcaba2f.short3 + _0x1cf68c[_0x1eac71];
                  let _0x526434 = _0xcaba2f.short4 + _0x361293[_0x558e61];
                  let _0x3b9671 = _0xcaba2f.short5 + _0xb8af4c[_0x2f1067];
                  _0x287f15[_0x121c58].sendMessage(_0x5cb1e, _0xcaba2f.targetID, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x4bb3c8, _0xcaba2f.targetID2, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x1973af, _0xcaba2f.targetID3, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x526434, _0xcaba2f.targetID4, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x3b9671, _0xcaba2f.targetID5, () => {});
                  _0xa995e0++;
                  _0x2c87ea++;
                  _0x1eac71++;
                  _0x558e61++;
                  _0x2f1067++;
                  if (_0xa995e0 >= _0x3badce.length) {
                    _0xa995e0 = 0x0;
                  }
                  if (_0x2c87ea >= _0x3ef204.length) {
                    _0x2c87ea = 0x0;
                  }
                  if (_0x1eac71 >= _0x1cf68c.length) {
                    _0x1eac71 = 0x0;
                  }
                  if (_0x558e61 >= _0x361293.length) {
                    _0x558e61 = 0x0;
                  }
                  if (_0x2f1067 >= _0xb8af4c.length) {
                    _0x2f1067 = 0x0;
                  }
                  if (++_0x121c58 === _0x287f15.length) {
                    _0x121c58 = 0x0;
                  }
                }, _0xcaba2f.timer + "000");
              });
              break;
            case '6':
              _0x1236a0.get(["targetID", 'short', "file1", 'targetID2', "short2", 'file2', "targetID3", "short3", "file3", "targetID4", 'short4', "file4", "targetID5", 'short5', "file5", "targetID6", "short6", "file6", 'timer'], function (_0x44e9fd, _0x4e6959) {
                if (_0x44e9fd) {
                  return _0x4a9bf9(_0x44e9fd);
                }
                let _0x318600 = _0x29fa8f.readFileSync(_0x4e6959.file1, 'utf8').split("\n").filter(Boolean);
                let _0x1f7bb5 = _0x29fa8f.readFileSync(_0x4e6959.file2, 'utf8').split("\n").filter(Boolean);
                let _0x34cf6c = _0x29fa8f.readFileSync(_0x4e6959.file3, "utf8").split("\n").filter(Boolean);
                let _0x1fe033 = _0x29fa8f.readFileSync(_0x4e6959.file4, 'utf8').split("\n").filter(Boolean);
                let _0x394b3e = _0x29fa8f.readFileSync(_0x4e6959.file5, "utf8").split("\n").filter(Boolean);
                let _0x588d2a = _0x29fa8f.readFileSync(_0x4e6959.file6, "utf8").split("\n").filter(Boolean);
                let _0x40e7a4 = 0x0;
                let _0x5d1fc3 = 0x0;
                let _0x4a3e1f = 0x0;
                let _0x11436a = 0x0;
                let _0x44e3df = 0x0;
                let _0x41e073 = 0x0;
                setInterval(() => {
                  let _0x4bd764 = _0x4e6959.short + _0x318600[_0x40e7a4];
                  let _0x58a347 = _0x4e6959.short2 + _0x1f7bb5[_0x5d1fc3];
                  let _0x4e61f9 = _0x4e6959.short3 + _0x34cf6c[_0x4a3e1f];
                  let _0x2ad729 = _0x4e6959.short4 + _0x1fe033[_0x11436a];
                  let _0x54e36a = _0x4e6959.short5 + _0x394b3e[_0x44e3df];
                  let _0x35a8f5 = _0x4e6959.short6 + _0x588d2a[_0x41e073];
                  _0x287f15[_0x121c58].sendMessage(_0x4bd764, _0x4e6959.targetID, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x58a347, _0x4e6959.targetID2, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x4e61f9, _0x4e6959.targetID3, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x2ad729, _0x4e6959.targetID4, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x54e36a, _0x4e6959.targetID5, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x35a8f5, _0x4e6959.targetID6, () => {});
                  _0x40e7a4++;
                  _0x5d1fc3++;
                  _0x4a3e1f++;
                  _0x11436a++;
                  _0x44e3df++;
                  _0x41e073++;
                  if (_0x40e7a4 >= _0x318600.length) {
                    _0x40e7a4 = 0x0;
                  }
                  if (_0x5d1fc3 >= _0x1f7bb5.length) {
                    _0x5d1fc3 = 0x0;
                  }
                  if (_0x4a3e1f >= _0x34cf6c.length) {
                    _0x4a3e1f = 0x0;
                  }
                  if (_0x11436a >= _0x1fe033.length) {
                    _0x11436a = 0x0;
                  }
                  if (_0x44e3df >= _0x394b3e.length) {
                    _0x44e3df = 0x0;
                  }
                  if (_0x41e073 >= _0x588d2a.length) {
                    _0x41e073 = 0x0;
                  }
                  if (++_0x121c58 === _0x287f15.length) {
                    _0x121c58 = 0x0;
                  }
                }, _0x4e6959.timer + "000");
              });
              break;
            case '7':
              _0x1236a0.get(["targetID", "short", "file1", 'targetID2', "short2", "file2", "targetID3", 'short3', "file3", "targetID4", "short4", "file4", 'targetID5', "short5", 'file5', "targetID6", 'short6', "file6", 'targetID7', "short7", "file7", 'timer'], function (_0xbb0c89, _0x37d280) {
                if (_0xbb0c89) {
                  return _0x4a9bf9(_0xbb0c89);
                }
                let _0xd345d8 = _0x29fa8f.readFileSync(_0x37d280.file1, "utf8").split("\n").filter(Boolean);
                let _0xcdfdd = _0x29fa8f.readFileSync(_0x37d280.file2, 'utf8').split("\n").filter(Boolean);
                let _0x2d8391 = _0x29fa8f.readFileSync(_0x37d280.file3, "utf8").split("\n").filter(Boolean);
                let _0x1f20d0 = _0x29fa8f.readFileSync(_0x37d280.file4, "utf8").split("\n").filter(Boolean);
                let _0x2ee59a = _0x29fa8f.readFileSync(_0x37d280.file5, "utf8").split("\n").filter(Boolean);
                let _0x2baf1c = _0x29fa8f.readFileSync(_0x37d280.file6, "utf8").split("\n").filter(Boolean);
                let _0x3fccce = _0x29fa8f.readFileSync(_0x37d280.file7, 'utf8').split("\n").filter(Boolean);
                let _0x55f287 = 0x0;
                let _0x294a66 = 0x0;
                let _0x501051 = 0x0;
                let _0x289bc1 = 0x0;
                let _0x1ecb2e = 0x0;
                let _0x4be2ef = 0x0;
                let _0x4eaf4e = 0x0;
                setInterval(() => {
                  let _0x3cc2a6 = _0x37d280.short + _0xd345d8[_0x55f287];
                  let _0x2aef81 = _0x37d280.short2 + _0xcdfdd[_0x294a66];
                  let _0x18f60f = _0x37d280.short3 + _0x2d8391[_0x501051];
                  let _0x1867cc = _0x37d280.short4 + _0x1f20d0[_0x289bc1];
                  let _0x3a9e5f = _0x37d280.short5 + _0x2ee59a[_0x1ecb2e];
                  let _0x4ec9cc = _0x37d280.short6 + _0x2baf1c[_0x4be2ef];
                  let _0x2b94fb = _0x37d280.short7 + _0x2baf1c[_0x4be2ef];
                  _0x287f15[_0x121c58].sendMessage(_0x3cc2a6, _0x37d280.targetID, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x2aef81, _0x37d280.targetID2, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x18f60f, _0x37d280.targetID3, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x1867cc, _0x37d280.targetID4, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x3a9e5f, _0x37d280.targetID5, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x4ec9cc, _0x37d280.targetID6, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x2b94fb, _0x37d280.targetID7, () => {});
                  _0x55f287++;
                  _0x294a66++;
                  _0x501051++;
                  _0x289bc1++;
                  _0x1ecb2e++;
                  _0x4be2ef++;
                  _0x4eaf4e++;
                  if (_0x55f287 >= _0xd345d8.length) {
                    _0x55f287 = 0x0;
                  }
                  if (_0x294a66 >= _0xcdfdd.length) {
                    _0x294a66 = 0x0;
                  }
                  if (_0x501051 >= _0x2d8391.length) {
                    _0x501051 = 0x0;
                  }
                  if (_0x289bc1 >= _0x1f20d0.length) {
                    _0x289bc1 = 0x0;
                  }
                  if (_0x1ecb2e >= _0x2ee59a.length) {
                    _0x1ecb2e = 0x0;
                  }
                  if (_0x4be2ef >= _0x2baf1c.length) {
                    _0x4be2ef = 0x0;
                  }
                  if (_0x4eaf4e >= _0x3fccce.length) {
                    _0x4eaf4e = 0x0;
                  }
                  if (++_0x121c58 === _0x287f15.length) {
                    _0x121c58 = 0x0;
                  }
                }, _0x37d280.timer + "000");
              });
              break;
            case '8':
              _0x1236a0.get(["targetID", "short", 'file1', 'targetID2', "short2", "file2", 'targetID3', "short3", "file3", 'targetID4', "short4", "file4", "targetID5", "short5", 'file5', "targetID6", "short6", "file6", "targetID7", 'short7', "file7", "targetID8", 'short8', "file8", 'timer'], function (_0x3b5a71, _0x1a44f7) {
                if (_0x3b5a71) {
                  return _0x4a9bf9(_0x3b5a71);
                }
                let _0x5241ae = _0x29fa8f.readFileSync(_0x1a44f7.file1, 'utf8').split("\n").filter(Boolean);
                let _0x90338e = _0x29fa8f.readFileSync(_0x1a44f7.file2, "utf8").split("\n").filter(Boolean);
                let _0x28c340 = _0x29fa8f.readFileSync(_0x1a44f7.file3, 'utf8').split("\n").filter(Boolean);
                let _0x471084 = _0x29fa8f.readFileSync(_0x1a44f7.file4, "utf8").split("\n").filter(Boolean);
                let _0x3604ae = _0x29fa8f.readFileSync(_0x1a44f7.file5, "utf8").split("\n").filter(Boolean);
                let _0xbd1108 = _0x29fa8f.readFileSync(_0x1a44f7.file6, 'utf8').split("\n").filter(Boolean);
                let _0x46ad58 = _0x29fa8f.readFileSync(_0x1a44f7.file7, 'utf8').split("\n").filter(Boolean);
                let _0x47827a = _0x29fa8f.readFileSync(_0x1a44f7.file8, 'utf8').split("\n").filter(Boolean);
                let _0x563515 = 0x0;
                let _0x59238e = 0x0;
                let _0x37e4a8 = 0x0;
                let _0x35f829 = 0x0;
                let _0x2c7bb0 = 0x0;
                let _0x3b1250 = 0x0;
                let _0x14822c = 0x0;
                let _0x3a976f = 0x0;
                setInterval(() => {
                  let _0x8b3d69 = _0x1a44f7.short + _0x5241ae[_0x563515];
                  let _0x2b38ea = _0x1a44f7.short2 + _0x90338e[_0x59238e];
                  let _0x34ed31 = _0x1a44f7.short3 + _0x28c340[_0x37e4a8];
                  let _0x412739 = _0x1a44f7.short4 + _0x471084[_0x35f829];
                  let _0x4b8f28 = _0x1a44f7.short5 + _0x3604ae[_0x2c7bb0];
                  let _0x21101d = _0x1a44f7.short6 + _0xbd1108[_0x3b1250];
                  let _0x2eb731 = _0x1a44f7.short7 + _0x46ad58[_0x14822c];
                  let _0x1c1846 = _0x1a44f7.short8 + _0x47827a[_0x3a976f];
                  _0x287f15[_0x121c58].sendMessage(_0x8b3d69, _0x1a44f7.targetID, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x2b38ea, _0x1a44f7.targetID2, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x34ed31, _0x1a44f7.targetID3, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x412739, _0x1a44f7.targetID4, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x4b8f28, _0x1a44f7.targetID5, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x21101d, _0x1a44f7.targetID6, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x2eb731, _0x1a44f7.targetID7, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x1c1846, _0x1a44f7.targetID8, () => {});
                  _0x563515++;
                  _0x59238e++;
                  _0x37e4a8++;
                  _0x35f829++;
                  _0x2c7bb0++;
                  _0x3b1250++;
                  _0x14822c++;
                  _0x3a976f++;
                  if (_0x563515 >= _0x5241ae.length) {
                    _0x563515 = 0x0;
                  }
                  if (_0x59238e >= _0x90338e.length) {
                    _0x59238e = 0x0;
                  }
                  if (_0x37e4a8 >= _0x28c340.length) {
                    _0x37e4a8 = 0x0;
                  }
                  if (_0x35f829 >= _0x471084.length) {
                    _0x35f829 = 0x0;
                  }
                  if (_0x2c7bb0 >= _0x3604ae.length) {
                    _0x2c7bb0 = 0x0;
                  }
                  if (_0x3b1250 >= _0xbd1108.length) {
                    _0x3b1250 = 0x0;
                  }
                  if (_0x14822c >= _0x46ad58.length) {
                    _0x14822c = 0x0;
                  }
                  if (_0x3a976f >= _0x47827a.length) {
                    _0x3a976f = 0x0;
                  }
                  if (++_0x121c58 === _0x287f15.length) {
                    _0x121c58 = 0x0;
                  }
                }, _0x1a44f7.timer + '000');
              });
              break;
            case '9':
              _0x1236a0.get(["targetID", "short", "file1", "targetID2", "short2", 'file2', "targetID3", "short3", "file3", 'targetID4', 'short4', "file4", 'targetID5', 'short5', "file5", "targetID6", "short6", "file6", "targetID7", "short7", 'file7', "targetID8", 'short8', 'file8', "targetID9", "short9", "file9", 'timer'], function (_0xfcc0b3, _0x4b0f4f) {
                if (_0xfcc0b3) {
                  return _0x4a9bf9(_0xfcc0b3);
                }
                let _0x40616c = _0x29fa8f.readFileSync(_0x4b0f4f.file1, "utf8").split("\n").filter(Boolean);
                let _0x194677 = _0x29fa8f.readFileSync(_0x4b0f4f.file2, 'utf8').split("\n").filter(Boolean);
                let _0xc65a37 = _0x29fa8f.readFileSync(_0x4b0f4f.file3, 'utf8').split("\n").filter(Boolean);
                let _0x1bec2c = _0x29fa8f.readFileSync(_0x4b0f4f.file4, "utf8").split("\n").filter(Boolean);
                let _0x3da8b5 = _0x29fa8f.readFileSync(_0x4b0f4f.file5, 'utf8').split("\n").filter(Boolean);
                let _0x192e6d = _0x29fa8f.readFileSync(_0x4b0f4f.file6, "utf8").split("\n").filter(Boolean);
                let _0x58a09b = _0x29fa8f.readFileSync(_0x4b0f4f.file7, "utf8").split("\n").filter(Boolean);
                let _0x57c072 = _0x29fa8f.readFileSync(_0x4b0f4f.file8, "utf8").split("\n").filter(Boolean);
                let _0x5c878d = _0x29fa8f.readFileSync(_0x4b0f4f.file9, 'utf8').split("\n").filter(Boolean);
                let _0x3ba51e = 0x0;
                let _0x3ebbdc = 0x0;
                let _0x1e7726 = 0x0;
                let _0x2be6c3 = 0x0;
                let _0x54ec5e = 0x0;
                let _0x1f658d = 0x0;
                let _0x14cf6b = 0x0;
                let _0x527c45 = 0x0;
                let _0x1dcc86 = 0x0;
                setInterval(() => {
                  let _0x554cb4 = _0x4b0f4f.short + _0x40616c[_0x3ba51e];
                  let _0x175fee = _0x4b0f4f.short2 + _0x194677[_0x3ebbdc];
                  let _0x2d59b0 = _0x4b0f4f.short3 + _0xc65a37[_0x1e7726];
                  let _0x475ac4 = _0x4b0f4f.short4 + _0x1bec2c[_0x2be6c3];
                  let _0x30ffaf = _0x4b0f4f.short5 + _0x3da8b5[_0x54ec5e];
                  let _0x385cdb = _0x4b0f4f.short6 + _0x192e6d[_0x1f658d];
                  let _0x3ff351 = _0x4b0f4f.short7 + _0x58a09b[_0x14cf6b];
                  let _0x1f9432 = _0x4b0f4f.short8 + _0x57c072[_0x527c45];
                  let _0x40ddb1 = _0x4b0f4f.short9 + _0x5c878d[_0x1dcc86];
                  _0x287f15[_0x121c58].sendMessage(_0x554cb4, _0x4b0f4f.targetID, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x175fee, _0x4b0f4f.targetID2, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x2d59b0, _0x4b0f4f.targetID3, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x475ac4, _0x4b0f4f.targetID4, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x30ffaf, _0x4b0f4f.targetID5, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x385cdb, _0x4b0f4f.targetID6, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x3ff351, _0x4b0f4f.targetID7, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x1f9432, _0x4b0f4f.targetID8, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x40ddb1, _0x4b0f4f.targetID9, () => {});
                  _0x3ba51e++;
                  _0x3ebbdc++;
                  _0x1e7726++;
                  _0x2be6c3++;
                  _0x54ec5e++;
                  _0x1f658d++;
                  _0x14cf6b++;
                  _0x527c45++;
                  _0x1dcc86++;
                  if (_0x3ba51e >= _0x40616c.length) {
                    _0x3ba51e = 0x0;
                  }
                  if (_0x3ebbdc >= _0x194677.length) {
                    _0x3ebbdc = 0x0;
                  }
                  if (_0x1e7726 >= _0xc65a37.length) {
                    _0x1e7726 = 0x0;
                  }
                  if (_0x2be6c3 >= _0x1bec2c.length) {
                    _0x2be6c3 = 0x0;
                  }
                  if (_0x54ec5e >= _0x3da8b5.length) {
                    _0x54ec5e = 0x0;
                  }
                  if (_0x1f658d >= _0x192e6d.length) {
                    _0x1f658d = 0x0;
                  }
                  if (_0x14cf6b >= _0x58a09b.length) {
                    _0x14cf6b = 0x0;
                  }
                  if (_0x527c45 >= _0x57c072.length) {
                    _0x527c45 = 0x0;
                  }
                  if (_0x1dcc86 >= _0x5c878d.length) {
                    _0x1dcc86 = 0x0;
                  }
                  if (++_0x121c58 === _0x287f15.length) {
                    _0x121c58 = 0x0;
                  }
                }, _0x4b0f4f.timer + "000");
              });
              break;
            case '10':
              _0x1236a0.get(["targetID", "short", 'file1', "targetID2", "short2", "file2", 'targetID3', "short3", 'file3', "targetID4", 'short4', "file4", "targetID5", "short5", "file5", "targetID6", "short6", "file6", "targetID7", "short7", 'file7', "targetID8", "short8", "file8", "targetID9", "short9", "file9", "targetID10", 'short10', "file10", 'timer'], function (_0x185bea, _0x50bae7) {
                if (_0x185bea) {
                  return _0x4a9bf9(_0x185bea);
                }
                let _0x4d489a = _0x29fa8f.readFileSync(_0x50bae7.file1, "utf8").split("\n").filter(Boolean);
                let _0x584ae2 = _0x29fa8f.readFileSync(_0x50bae7.file2, "utf8").split("\n").filter(Boolean);
                let _0x382862 = _0x29fa8f.readFileSync(_0x50bae7.file3, 'utf8').split("\n").filter(Boolean);
                let _0x176e5b = _0x29fa8f.readFileSync(_0x50bae7.file4, "utf8").split("\n").filter(Boolean);
                let _0xc6c379 = _0x29fa8f.readFileSync(_0x50bae7.file5, "utf8").split("\n").filter(Boolean);
                let _0x49ccb2 = _0x29fa8f.readFileSync(_0x50bae7.file6, "utf8").split("\n").filter(Boolean);
                let _0x5cfdf4 = _0x29fa8f.readFileSync(_0x50bae7.file7, 'utf8').split("\n").filter(Boolean);
                let _0x3ca17c = _0x29fa8f.readFileSync(_0x50bae7.file8, 'utf8').split("\n").filter(Boolean);
                let _0x25c316 = _0x29fa8f.readFileSync(_0x50bae7.file9, "utf8").split("\n").filter(Boolean);
                let _0x493ac1 = _0x29fa8f.readFileSync(_0x50bae7.file10, 'utf8').split("\n").filter(Boolean);
                let _0x520a7d = 0x0;
                let _0xce411 = 0x0;
                let _0x551a50 = 0x0;
                let _0x5def49 = 0x0;
                let _0x449224 = 0x0;
                let _0x10d3e0 = 0x0;
                let _0x17dac7 = 0x0;
                let _0x48a6b6 = 0x0;
                let _0x54a810 = 0x0;
                let _0x2fabc9 = 0x0;
                setInterval(() => {
                  let _0xeb70f9 = _0x50bae7.short + _0x4d489a[_0x520a7d];
                  let _0x57b856 = _0x50bae7.short2 + _0x584ae2[_0xce411];
                  let _0x21ad51 = _0x50bae7.short3 + _0x382862[_0x551a50];
                  let _0x5822c3 = _0x50bae7.short4 + _0x176e5b[_0x5def49];
                  let _0x2c2d48 = _0x50bae7.short5 + _0xc6c379[_0x449224];
                  let _0x17dc31 = _0x50bae7.short6 + _0x49ccb2[_0x10d3e0];
                  let _0x2b5bae = _0x50bae7.short7 + _0x5cfdf4[_0x17dac7];
                  let _0x56c95c = _0x50bae7.short8 + _0x3ca17c[_0x48a6b6];
                  let _0xccdaad = _0x50bae7.short9 + _0x25c316[_0x54a810];
                  let _0x3aebcd = _0x50bae7.short10 + _0x493ac1[_0x2fabc9];
                  _0x287f15[_0x121c58].sendMessage(_0xeb70f9, _0x50bae7.targetID, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x57b856, _0x50bae7.targetID2, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x21ad51, _0x50bae7.targetID3, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x5822c3, _0x50bae7.targetID4, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x2c2d48, _0x50bae7.targetID5, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x17dc31, _0x50bae7.targetID6, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x2b5bae, _0x50bae7.targetID7, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x56c95c, _0x50bae7.targetID8, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0xccdaad, _0x50bae7.targetID9, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x3aebcd, _0x50bae7.targetID10, () => {});
                  _0x520a7d++;
                  _0xce411++;
                  _0x551a50++;
                  _0x5def49++;
                  _0x449224++;
                  _0x10d3e0++;
                  _0x17dac7++;
                  _0x48a6b6++;
                  _0x54a810++;
                  _0x2fabc9++;
                  if (_0x520a7d >= _0x4d489a.length) {
                    _0x520a7d = 0x0;
                  }
                  if (_0xce411 >= _0x584ae2.length) {
                    _0xce411 = 0x0;
                  }
                  if (_0x551a50 >= _0x382862.length) {
                    _0x551a50 = 0x0;
                  }
                  if (_0x5def49 >= _0x176e5b.length) {
                    _0x5def49 = 0x0;
                  }
                  if (_0x449224 >= _0xc6c379.length) {
                    _0x449224 = 0x0;
                  }
                  if (_0x10d3e0 >= _0x49ccb2.length) {
                    _0x10d3e0 = 0x0;
                  }
                  if (_0x17dac7 >= _0x5cfdf4.length) {
                    _0x17dac7 = 0x0;
                  }
                  if (_0x48a6b6 >= _0x3ca17c.length) {
                    _0x48a6b6 = 0x0;
                  }
                  if (_0x54a810 >= _0x25c316.length) {
                    _0x54a810 = 0x0;
                  }
                  if (_0x2fabc9 >= _0x493ac1.length) {
                    _0x2fabc9 = 0x0;
                  }
                  if (++_0x121c58 === _0x287f15.length) {
                    _0x121c58 = 0x0;
                  }
                }, _0x50bae7.timer + '000');
              });
              break;
            case '11':
              _0x1236a0.get(["targetID", "short", "file1", "targetID2", 'short2', 'file2', 'targetID3', "short3", "file3", "targetID4", 'short4', 'file4', "targetID5", "short5", 'file5', "targetID6", 'short6', 'file6', 'targetID7', "short7", "file7", 'targetID8', 'short8', "file8", "targetID9", "short9", "file9", "targetID10", "short10", "file10", "targetID11", "short11", 'file11', "timer"], function (_0x568b86, _0x504717) {
                if (_0x568b86) {
                  return _0x4a9bf9(_0x568b86);
                }
                let _0x1fddf4 = _0x29fa8f.readFileSync(_0x504717.file1, 'utf8').split("\n").filter(Boolean);
                let _0x19017d = _0x29fa8f.readFileSync(_0x504717.file2, "utf8").split("\n").filter(Boolean);
                let _0x3da73b = _0x29fa8f.readFileSync(_0x504717.file3, 'utf8').split("\n").filter(Boolean);
                let _0x1864ff = _0x29fa8f.readFileSync(_0x504717.file4, "utf8").split("\n").filter(Boolean);
                let _0x4df78b = _0x29fa8f.readFileSync(_0x504717.file5, "utf8").split("\n").filter(Boolean);
                let _0x2f3cf2 = _0x29fa8f.readFileSync(_0x504717.file6, 'utf8').split("\n").filter(Boolean);
                let _0x403ca7 = _0x29fa8f.readFileSync(_0x504717.file7, 'utf8').split("\n").filter(Boolean);
                let _0x44760b = _0x29fa8f.readFileSync(_0x504717.file8, "utf8").split("\n").filter(Boolean);
                let _0x1ae9a5 = _0x29fa8f.readFileSync(_0x504717.file9, "utf8").split("\n").filter(Boolean);
                let _0x24a6c8 = _0x29fa8f.readFileSync(_0x504717.file10, "utf8").split("\n").filter(Boolean);
                let _0x5cee40 = _0x29fa8f.readFileSync(_0x504717.file11, "utf8").split("\n").filter(Boolean);
                let _0x47f1fc = 0x0;
                let _0x3a5290 = 0x0;
                let _0x1c0d9d = 0x0;
                let _0x1ed16f = 0x0;
                let _0x2db767 = 0x0;
                let _0xb1cbc2 = 0x0;
                let _0x48262e = 0x0;
                let _0x3754a4 = 0x0;
                let _0x5c73ba = 0x0;
                let _0x18f31e = 0x0;
                let _0x3a5e3e = 0x0;
                setInterval(() => {
                  let _0x4fbc1f = _0x504717.short + _0x1fddf4[_0x47f1fc];
                  let _0x599429 = _0x504717.short2 + _0x19017d[_0x3a5290];
                  let _0x1d7536 = _0x504717.short3 + _0x3da73b[_0x1c0d9d];
                  let _0x2f5343 = _0x504717.short4 + _0x1864ff[_0x1ed16f];
                  let _0x1e4003 = _0x504717.short5 + _0x4df78b[_0x2db767];
                  let _0x39b96a = _0x504717.short6 + _0x2f3cf2[_0xb1cbc2];
                  let _0x4db690 = _0x504717.short7 + _0x403ca7[_0x48262e];
                  let _0x490c0a = _0x504717.short8 + _0x44760b[_0x3754a4];
                  let _0x21cefd = _0x504717.short9 + _0x1ae9a5[_0x5c73ba];
                  let _0x300541 = _0x504717.short10 + _0x24a6c8[_0x18f31e];
                  let _0xbbb41e = _0x504717.short11 + _0x5cee40[_0x3a5e3e];
                  _0x287f15[_0x121c58].sendMessage(_0x4fbc1f, _0x504717.targetID, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x599429, _0x504717.targetID2, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x1d7536, _0x504717.targetID3, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x2f5343, _0x504717.targetID4, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x1e4003, _0x504717.targetID5, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x39b96a, _0x504717.targetID6, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x4db690, _0x504717.targetID7, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x490c0a, _0x504717.targetID8, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x21cefd, _0x504717.targetID9, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x300541, _0x504717.targetID10, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0xbbb41e, _0x504717.targetID10, () => {});
                  _0x47f1fc++;
                  _0x3a5290++;
                  _0x1c0d9d++;
                  _0x1ed16f++;
                  _0x2db767++;
                  _0xb1cbc2++;
                  _0x48262e++;
                  _0x3754a4++;
                  _0x5c73ba++;
                  _0x18f31e++;
                  _0x3a5e3e++;
                  if (_0x47f1fc >= _0x1fddf4.length) {
                    _0x47f1fc = 0x0;
                  }
                  if (_0x3a5290 >= _0x19017d.length) {
                    _0x3a5290 = 0x0;
                  }
                  if (_0x1c0d9d >= _0x3da73b.length) {
                    _0x1c0d9d = 0x0;
                  }
                  if (_0x1ed16f >= _0x1864ff.length) {
                    _0x1ed16f = 0x0;
                  }
                  if (_0x2db767 >= _0x4df78b.length) {
                    _0x2db767 = 0x0;
                  }
                  if (_0xb1cbc2 >= _0x2f3cf2.length) {
                    _0xb1cbc2 = 0x0;
                  }
                  if (_0x48262e >= _0x403ca7.length) {
                    _0x48262e = 0x0;
                  }
                  if (_0x3754a4 >= _0x44760b.length) {
                    _0x3754a4 = 0x0;
                  }
                  if (_0x5c73ba >= _0x1ae9a5.length) {
                    _0x5c73ba = 0x0;
                  }
                  if (_0x18f31e >= _0x24a6c8.length) {
                    _0x18f31e = 0x0;
                  }
                  if (_0x3a5e3e >= _0x5cee40.length) {
                    _0x3a5e3e = 0x0;
                  }
                  if (++_0x121c58 === _0x287f15.length) {
                    _0x121c58 = 0x0;
                  }
                }, _0x504717.timer + "000");
              });
              break;
            case '12':
              _0x1236a0.get(["targetID", "short", "file1", "targetID2", "short2", "file2", 'targetID3', 'short3', 'file3', "targetID4", 'short4', "file4", "targetID5", "short5", "file5", "targetID6", "short6", 'file6', "targetID7", "short7", "file7", "targetID8", "short8", "file8", "targetID9", "short9", "file9", "targetID10", "short10", "file10", "targetID11", 'short11', "file11", "targetID12", "short12", 'file12', "timer"], function (_0x13ab2f, _0x5e701d) {
                if (_0x13ab2f) {
                  return _0x4a9bf9(_0x13ab2f);
                }
                let _0x13b8e8 = _0x29fa8f.readFileSync(_0x5e701d.file1, 'utf8').split("\n").filter(Boolean);
                let _0x123ec9 = _0x29fa8f.readFileSync(_0x5e701d.file2, "utf8").split("\n").filter(Boolean);
                let _0x306f6b = _0x29fa8f.readFileSync(_0x5e701d.file3, "utf8").split("\n").filter(Boolean);
                let _0x3a4981 = _0x29fa8f.readFileSync(_0x5e701d.file4, "utf8").split("\n").filter(Boolean);
                let _0x2bb144 = _0x29fa8f.readFileSync(_0x5e701d.file5, "utf8").split("\n").filter(Boolean);
                let _0x4cc165 = _0x29fa8f.readFileSync(_0x5e701d.file6, "utf8").split("\n").filter(Boolean);
                let _0x353fb5 = _0x29fa8f.readFileSync(_0x5e701d.file7, "utf8").split("\n").filter(Boolean);
                let _0x184973 = _0x29fa8f.readFileSync(_0x5e701d.file8, "utf8").split("\n").filter(Boolean);
                let _0x4bdcaa = _0x29fa8f.readFileSync(_0x5e701d.file9, "utf8").split("\n").filter(Boolean);
                let _0x16ed29 = _0x29fa8f.readFileSync(_0x5e701d.file10, 'utf8').split("\n").filter(Boolean);
                let _0x573381 = _0x29fa8f.readFileSync(_0x5e701d.file11, "utf8").split("\n").filter(Boolean);
                let _0x3234f8 = _0x29fa8f.readFileSync(_0x5e701d.file12, "utf8").split("\n").filter(Boolean);
                let _0x229dbf = 0x0;
                let _0x5a13f7 = 0x0;
                let _0x200dbc = 0x0;
                let _0x1ab97b = 0x0;
                let _0x6bbabf = 0x0;
                let _0x47fb3b = 0x0;
                let _0x494f04 = 0x0;
                let _0x27c4bc = 0x0;
                let _0x5f4d28 = 0x0;
                let _0x2036bf = 0x0;
                let _0x34d7ca = 0x0;
                let _0x5ce3ad = 0x0;
                setInterval(() => {
                  let _0x3936f1 = _0x5e701d.short + _0x13b8e8[_0x229dbf];
                  let _0x506d1b = _0x5e701d.short2 + _0x123ec9[_0x5a13f7];
                  let _0x482eea = _0x5e701d.short3 + _0x306f6b[_0x200dbc];
                  let _0x157699 = _0x5e701d.short4 + _0x3a4981[_0x1ab97b];
                  let _0x56419f = _0x5e701d.short5 + _0x2bb144[_0x6bbabf];
                  let _0x464769 = _0x5e701d.short6 + _0x4cc165[_0x47fb3b];
                  let _0x5af400 = _0x5e701d.short7 + _0x353fb5[_0x494f04];
                  let _0x36e520 = _0x5e701d.short8 + _0x184973[_0x27c4bc];
                  let _0x4c5460 = _0x5e701d.short9 + _0x4bdcaa[_0x5f4d28];
                  let _0xb3006b = _0x5e701d.short10 + _0x16ed29[_0x2036bf];
                  let _0x372524 = _0x5e701d.short11 + _0x573381[_0x34d7ca];
                  let _0x1124a1 = _0x5e701d.short12 + _0x3234f8[_0x5ce3ad];
                  _0x287f15[_0x121c58].sendMessage(_0x3936f1, _0x5e701d.targetID, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x506d1b, _0x5e701d.targetID2, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x482eea, _0x5e701d.targetID3, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x157699, _0x5e701d.targetID4, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x56419f, _0x5e701d.targetID5, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x464769, _0x5e701d.targetID6, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x5af400, _0x5e701d.targetID7, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x36e520, _0x5e701d.targetID8, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x4c5460, _0x5e701d.targetID9, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0xb3006b, _0x5e701d.targetID10, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x372524, _0x5e701d.targetID11, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x1124a1, _0x5e701d.targetID12, () => {});
                  _0x229dbf++;
                  _0x5a13f7++;
                  _0x200dbc++;
                  _0x1ab97b++;
                  _0x6bbabf++;
                  _0x47fb3b++;
                  _0x494f04++;
                  _0x27c4bc++;
                  _0x5f4d28++;
                  _0x2036bf++;
                  _0x34d7ca++;
                  _0x5ce3ad++;
                  if (_0x229dbf >= _0x13b8e8.length) {
                    _0x229dbf = 0x0;
                  }
                  if (_0x5a13f7 >= _0x123ec9.length) {
                    _0x5a13f7 = 0x0;
                  }
                  if (_0x200dbc >= _0x306f6b.length) {
                    _0x200dbc = 0x0;
                  }
                  if (_0x1ab97b >= _0x3a4981.length) {
                    _0x1ab97b = 0x0;
                  }
                  if (_0x6bbabf >= _0x2bb144.length) {
                    _0x6bbabf = 0x0;
                  }
                  if (_0x47fb3b >= _0x4cc165.length) {
                    _0x47fb3b = 0x0;
                  }
                  if (_0x494f04 >= _0x353fb5.length) {
                    _0x494f04 = 0x0;
                  }
                  if (_0x27c4bc >= _0x184973.length) {
                    _0x27c4bc = 0x0;
                  }
                  if (_0x5f4d28 >= _0x4bdcaa.length) {
                    _0x5f4d28 = 0x0;
                  }
                  if (_0x2036bf >= _0x16ed29.length) {
                    _0x2036bf = 0x0;
                  }
                  if (_0x34d7ca >= _0x573381.length) {
                    _0x34d7ca = 0x0;
                  }
                  if (_0x5ce3ad >= _0x3234f8.length) {
                    _0x5ce3ad = 0x0;
                  }
                  if (++_0x121c58 === _0x287f15.length) {
                    _0x121c58 = 0x0;
                  }
                }, _0x5e701d.timer + "000");
              });
            case '13':
              _0x1236a0.get(['targetID', "short", "file1", "targetID2", "short2", 'file2', "targetID3", "short3", "file3", 'targetID4', "short4", "file4", "targetID5", "short5", "file5", "targetID6", "short6", "file6", "targetID7", "short7", "file7", 'targetID8', 'short8', "file8", 'targetID9', "short9", "file9", "targetID10", "short10", 'file10', "targetID11", "short11", "file11", 'targetID12', "short12", "file12", "targetID13", 'short13', "short13", "timer"], function (_0x3b6137, _0xb336b3) {
                if (_0x3b6137) {
                  return _0x4a9bf9(_0x3b6137);
                }
                let _0x4ebe39 = _0x29fa8f.readFileSync(_0xb336b3.file1, "utf8").split("\n").filter(Boolean);
                let _0x562dac = _0x29fa8f.readFileSync(_0xb336b3.file2, "utf8").split("\n").filter(Boolean);
                let _0x48172b = _0x29fa8f.readFileSync(_0xb336b3.file3, "utf8").split("\n").filter(Boolean);
                let _0x5c96c9 = _0x29fa8f.readFileSync(_0xb336b3.file4, 'utf8').split("\n").filter(Boolean);
                let _0x23eb9b = _0x29fa8f.readFileSync(_0xb336b3.file5, 'utf8').split("\n").filter(Boolean);
                let _0x899fc3 = _0x29fa8f.readFileSync(_0xb336b3.file6, "utf8").split("\n").filter(Boolean);
                let _0x4231be = _0x29fa8f.readFileSync(_0xb336b3.file7, "utf8").split("\n").filter(Boolean);
                let _0x33f098 = _0x29fa8f.readFileSync(_0xb336b3.file8, 'utf8').split("\n").filter(Boolean);
                let _0x3af785 = _0x29fa8f.readFileSync(_0xb336b3.file9, "utf8").split("\n").filter(Boolean);
                let _0x2b8283 = _0x29fa8f.readFileSync(_0xb336b3.file10, "utf8").split("\n").filter(Boolean);
                let _0x5ec072 = _0x29fa8f.readFileSync(_0xb336b3.file11, 'utf8').split("\n").filter(Boolean);
                let _0x30df47 = _0x29fa8f.readFileSync(_0xb336b3.file12, 'utf8').split("\n").filter(Boolean);
                let _0x2415f0 = _0x29fa8f.readFileSync(_0xb336b3.file13, "utf8").split("\n").filter(Boolean);
                let _0x31b334 = 0x0;
                let _0x262d67 = 0x0;
                let _0x241d15 = 0x0;
                let _0x4d4b4b = 0x0;
                let _0x1d20ac = 0x0;
                let _0x4d4b13 = 0x0;
                let _0x52c012 = 0x0;
                let _0x5a38ca = 0x0;
                let _0x1d7482 = 0x0;
                let _0xb131dc = 0x0;
                let _0x54f081 = 0x0;
                let _0x947e4b = 0x0;
                let _0x5d0acb = 0x0;
                setInterval(() => {
                  let _0x708477 = _0xb336b3.short + _0x4ebe39[_0x31b334];
                  let _0x252596 = _0xb336b3.short2 + _0x562dac[_0x262d67];
                  let _0xf69342 = _0xb336b3.short3 + _0x48172b[_0x241d15];
                  let _0x1a72f7 = _0xb336b3.short4 + _0x5c96c9[_0x4d4b4b];
                  let _0xa7f7d4 = _0xb336b3.short5 + _0x23eb9b[_0x1d20ac];
                  let _0x3a6b36 = _0xb336b3.short6 + _0x899fc3[_0x4d4b13];
                  let _0x5b5bf2 = _0xb336b3.short7 + _0x4231be[_0x52c012];
                  let _0x4baccc = _0xb336b3.short8 + _0x33f098[_0x5a38ca];
                  let _0x33d48c = _0xb336b3.short9 + _0x3af785[_0x1d7482];
                  let _0x5c87bf = _0xb336b3.short10 + _0x2b8283[_0xb131dc];
                  let _0x2e53c9 = _0xb336b3.short11 + _0x5ec072[_0x54f081];
                  let _0x2f4c45 = _0xb336b3.short12 + _0x30df47[_0x947e4b];
                  let _0x51129c = _0xb336b3.short13 + _0x2415f0[_0x5d0acb];
                  _0x287f15[_0x121c58].sendMessage(_0x708477, _0xb336b3.targetID, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x252596, _0xb336b3.targetID2, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0xf69342, _0xb336b3.targetID3, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x1a72f7, _0xb336b3.targetID4, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0xa7f7d4, _0xb336b3.targetID5, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x3a6b36, _0xb336b3.targetID6, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x5b5bf2, _0xb336b3.targetID7, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x4baccc, _0xb336b3.targetID8, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x33d48c, _0xb336b3.targetID9, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x5c87bf, _0xb336b3.targetID10, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x2e53c9, _0xb336b3.targetID11, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x2f4c45, _0xb336b3.targetID12, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x51129c, _0xb336b3.targetID13, () => {});
                  _0x31b334++;
                  _0x262d67++;
                  _0x241d15++;
                  _0x4d4b4b++;
                  _0x1d20ac++;
                  _0x4d4b13++;
                  _0x52c012++;
                  _0x5a38ca++;
                  _0x1d7482++;
                  _0xb131dc++;
                  _0x54f081++;
                  _0x947e4b++;
                  _0x5d0acb++;
                  if (_0x31b334 >= _0x4ebe39.length) {
                    _0x31b334 = 0x0;
                  }
                  if (_0x262d67 >= _0x562dac.length) {
                    _0x262d67 = 0x0;
                  }
                  if (_0x241d15 >= _0x48172b.length) {
                    _0x241d15 = 0x0;
                  }
                  if (_0x4d4b4b >= _0x5c96c9.length) {
                    _0x4d4b4b = 0x0;
                  }
                  if (_0x1d20ac >= _0x23eb9b.length) {
                    _0x1d20ac = 0x0;
                  }
                  if (_0x4d4b13 >= _0x899fc3.length) {
                    _0x4d4b13 = 0x0;
                  }
                  if (_0x52c012 >= _0x4231be.length) {
                    _0x52c012 = 0x0;
                  }
                  if (_0x5a38ca >= _0x33f098.length) {
                    _0x5a38ca = 0x0;
                  }
                  if (_0x1d7482 >= _0x3af785.length) {
                    _0x1d7482 = 0x0;
                  }
                  if (_0xb131dc >= _0x2b8283.length) {
                    _0xb131dc = 0x0;
                  }
                  if (_0x54f081 >= _0x5ec072.length) {
                    _0x54f081 = 0x0;
                  }
                  if (_0x947e4b >= _0x30df47.length) {
                    _0x947e4b = 0x0;
                  }
                  if (_0x5d0acb >= _0x2415f0.length) {
                    _0x5d0acb = 0x0;
                  }
                  if (++_0x121c58 === _0x287f15.length) {
                    _0x121c58 = 0x0;
                  }
                }, _0xb336b3.timer + "000");
              });
              break;
            case '14':
              _0x1236a0.get(["targetID", 'short', "file1", 'targetID2', "short2", "file2", "targetID3", 'short3', "file3", "targetID4", 'short4', "file4", "targetID5", 'short5', "file5", 'targetID6', 'short6', "file6", "targetID7", "short7", "file7", 'targetID8', "short8", "file8", "targetID9", 'short9', "file9", "targetID10", "short10", "file10", "targetID11", "short11", "file11", "targetID12", "short12", "file12", "targetID13", 'short13', "short13", 'targetID14', "short14", "file14", 'timer'], function (_0x5437b3, _0x457d1a) {
                if (_0x5437b3) {
                  return _0x4a9bf9(_0x5437b3);
                }
                let _0x55c3e1 = _0x29fa8f.readFileSync(_0x457d1a.file1, "utf8").split("\n").filter(Boolean);
                let _0x3c9fb7 = _0x29fa8f.readFileSync(_0x457d1a.file2, 'utf8').split("\n").filter(Boolean);
                let _0x27256f = _0x29fa8f.readFileSync(_0x457d1a.file3, "utf8").split("\n").filter(Boolean);
                let _0x4a0fd3 = _0x29fa8f.readFileSync(_0x457d1a.file4, "utf8").split("\n").filter(Boolean);
                let _0xa99046 = _0x29fa8f.readFileSync(_0x457d1a.file5, "utf8").split("\n").filter(Boolean);
                let _0x597092 = _0x29fa8f.readFileSync(_0x457d1a.file6, "utf8").split("\n").filter(Boolean);
                let _0x4a099b = _0x29fa8f.readFileSync(_0x457d1a.file7, 'utf8').split("\n").filter(Boolean);
                let _0x77bc9c = _0x29fa8f.readFileSync(_0x457d1a.file8, "utf8").split("\n").filter(Boolean);
                let _0x3d670c = _0x29fa8f.readFileSync(_0x457d1a.file9, "utf8").split("\n").filter(Boolean);
                let _0x558256 = _0x29fa8f.readFileSync(_0x457d1a.file10, 'utf8').split("\n").filter(Boolean);
                let _0x5469eb = _0x29fa8f.readFileSync(_0x457d1a.file11, 'utf8').split("\n").filter(Boolean);
                let _0x49b0ce = _0x29fa8f.readFileSync(_0x457d1a.file12, "utf8").split("\n").filter(Boolean);
                let _0x513144 = _0x29fa8f.readFileSync(_0x457d1a.file13, 'utf8').split("\n").filter(Boolean);
                let _0x13cd29 = _0x29fa8f.readFileSync(_0x457d1a.file14, 'utf8').split("\n").filter(Boolean);
                let _0x53d7c7 = 0x0;
                let _0x374235 = 0x0;
                let _0x156ce9 = 0x0;
                let _0x40be52 = 0x0;
                let _0x4f1ec0 = 0x0;
                let _0xe18e52 = 0x0;
                let _0x570a67 = 0x0;
                let _0x4956c0 = 0x0;
                let _0x266123 = 0x0;
                let _0x131de5 = 0x0;
                let _0xea56d7 = 0x0;
                let _0x4f17a6 = 0x0;
                let _0x118948 = 0x0;
                let _0x1bfcde = 0x0;
                setInterval(() => {
                  let _0xdd9e0d = _0x457d1a.short + _0x55c3e1[_0x53d7c7];
                  let _0x58868f = _0x457d1a.short2 + _0x3c9fb7[_0x374235];
                  let _0x5aa6eb = _0x457d1a.short3 + _0x27256f[_0x156ce9];
                  let _0x51bf3d = _0x457d1a.short4 + _0x4a0fd3[_0x40be52];
                  let _0x1be4c3 = _0x457d1a.short5 + _0xa99046[_0x4f1ec0];
                  let _0x4ae874 = _0x457d1a.short6 + _0x597092[_0xe18e52];
                  let _0x3d41eb = _0x457d1a.short7 + _0x4a099b[_0x570a67];
                  let _0x29bf1e = _0x457d1a.short8 + _0x77bc9c[_0x4956c0];
                  let _0x43f1a9 = _0x457d1a.short9 + _0x3d670c[_0x266123];
                  let _0x259978 = _0x457d1a.short10 + _0x558256[_0x131de5];
                  let _0x2aeede = _0x457d1a.short11 + _0x5469eb[_0xea56d7];
                  let _0x4d69c5 = _0x457d1a.short12 + _0x49b0ce[_0x4f17a6];
                  let _0x37e54c = _0x457d1a.short13 + _0x513144[_0x118948];
                  let _0x542b30 = _0x457d1a.short14 + _0x13cd29[_0x1bfcde];
                  _0x287f15[_0x121c58].sendMessage(_0xdd9e0d, _0x457d1a.targetID, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x58868f, _0x457d1a.targetID2, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x5aa6eb, _0x457d1a.targetID3, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x51bf3d, _0x457d1a.targetID4, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x1be4c3, _0x457d1a.targetID5, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x4ae874, _0x457d1a.targetID6, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x3d41eb, _0x457d1a.targetID7, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x29bf1e, _0x457d1a.targetID8, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x43f1a9, _0x457d1a.targetID9, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x259978, _0x457d1a.targetID10, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x2aeede, _0x457d1a.targetID11, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x4d69c5, _0x457d1a.targetID12, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x37e54c, _0x457d1a.targetID13, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x542b30, _0x457d1a.targetID14, () => {});
                  _0x53d7c7++;
                  _0x374235++;
                  _0x156ce9++;
                  _0x40be52++;
                  _0x4f1ec0++;
                  _0xe18e52++;
                  _0x570a67++;
                  _0x4956c0++;
                  _0x266123++;
                  _0x131de5++;
                  _0xea56d7++;
                  _0x4f17a6++;
                  _0x118948++;
                  _0x1bfcde++;
                  if (_0x53d7c7 >= _0x55c3e1.length) {
                    _0x53d7c7 = 0x0;
                  }
                  if (_0x374235 >= _0x3c9fb7.length) {
                    _0x374235 = 0x0;
                  }
                  if (_0x156ce9 >= _0x27256f.length) {
                    _0x156ce9 = 0x0;
                  }
                  if (_0x40be52 >= _0x4a0fd3.length) {
                    _0x40be52 = 0x0;
                  }
                  if (_0x4f1ec0 >= _0xa99046.length) {
                    _0x4f1ec0 = 0x0;
                  }
                  if (_0xe18e52 >= _0x597092.length) {
                    _0xe18e52 = 0x0;
                  }
                  if (_0x570a67 >= _0x4a099b.length) {
                    _0x570a67 = 0x0;
                  }
                  if (_0x4956c0 >= _0x77bc9c.length) {
                    _0x4956c0 = 0x0;
                  }
                  if (_0x266123 >= _0x3d670c.length) {
                    _0x266123 = 0x0;
                  }
                  if (_0x131de5 >= _0x558256.length) {
                    _0x131de5 = 0x0;
                  }
                  if (_0xea56d7 >= _0x5469eb.length) {
                    _0xea56d7 = 0x0;
                  }
                  if (_0x4f17a6 >= _0x49b0ce.length) {
                    _0x4f17a6 = 0x0;
                  }
                  if (_0x118948 >= _0x513144.length) {
                    _0x118948 = 0x0;
                  }
                  if (_0x1bfcde >= _0x13cd29.length) {
                    _0x1bfcde = 0x0;
                  }
                  if (++_0x121c58 === _0x287f15.length) {
                    _0x121c58 = 0x0;
                  }
                }, _0x457d1a.timer + "000");
              });
              break;
            case '14':
              _0x1236a0.get(["targetID", "short", "file1", "targetID2", "short2", 'file2', "targetID3", "short3", "file3", "targetID4", "short4", "file4", 'targetID5', "short5", 'file5', "targetID6", "short6", "file6", "targetID7", "short7", "file7", "targetID8", "short8", 'file8', "targetID9", "short9", "file9", "targetID10", 'short10', "file10", "targetID11", "short11", "file11", 'targetID12', "short12", 'file12', "targetID13", "short13", "short13", 'targetID14', "short14", 'file14', 'targetID15', "short15", "file15", "timer"], function (_0x56f864, _0x16dc1d) {
                if (_0x56f864) {
                  return _0x4a9bf9(_0x56f864);
                }
                let _0x35ac15 = _0x29fa8f.readFileSync(_0x16dc1d.file1, "utf8").split("\n").filter(Boolean);
                let _0x2881af = _0x29fa8f.readFileSync(_0x16dc1d.file2, "utf8").split("\n").filter(Boolean);
                let _0x298275 = _0x29fa8f.readFileSync(_0x16dc1d.file3, "utf8").split("\n").filter(Boolean);
                let _0x5e2b46 = _0x29fa8f.readFileSync(_0x16dc1d.file4, "utf8").split("\n").filter(Boolean);
                let _0x3247cb = _0x29fa8f.readFileSync(_0x16dc1d.file5, "utf8").split("\n").filter(Boolean);
                let _0x22d342 = _0x29fa8f.readFileSync(_0x16dc1d.file6, "utf8").split("\n").filter(Boolean);
                let _0x3d0a73 = _0x29fa8f.readFileSync(_0x16dc1d.file7, "utf8").split("\n").filter(Boolean);
                let _0x1abd2f = _0x29fa8f.readFileSync(_0x16dc1d.file8, 'utf8').split("\n").filter(Boolean);
                let _0x468fbc = _0x29fa8f.readFileSync(_0x16dc1d.file9, "utf8").split("\n").filter(Boolean);
                let _0x3f6f2b = _0x29fa8f.readFileSync(_0x16dc1d.file10, "utf8").split("\n").filter(Boolean);
                let _0x289e0e = _0x29fa8f.readFileSync(_0x16dc1d.file11, "utf8").split("\n").filter(Boolean);
                let _0x1f3de8 = _0x29fa8f.readFileSync(_0x16dc1d.file12, "utf8").split("\n").filter(Boolean);
                let _0x13061f = _0x29fa8f.readFileSync(_0x16dc1d.file13, 'utf8').split("\n").filter(Boolean);
                let _0x664d67 = _0x29fa8f.readFileSync(_0x16dc1d.file14, "utf8").split("\n").filter(Boolean);
                let _0x9140c0 = _0x29fa8f.readFileSync(_0x16dc1d.file15, 'utf8').split("\n").filter(Boolean);
                let _0x19bcc6 = 0x0;
                let _0x2a3180 = 0x0;
                let _0x1a843f = 0x0;
                let _0x477346 = 0x0;
                let _0x498a2e = 0x0;
                let _0x13143e = 0x0;
                let _0x1ffec3 = 0x0;
                let _0x3ef135 = 0x0;
                let _0x56e4db = 0x0;
                let _0x395b25 = 0x0;
                let _0x2748cf = 0x0;
                let _0x5a6334 = 0x0;
                let _0x5186c1 = 0x0;
                let _0x16719d = 0x0;
                let _0x44211e = 0x0;
                setInterval(() => {
                  let _0x32821b = _0x16dc1d.short + _0x35ac15[_0x19bcc6];
                  let _0x191de1 = _0x16dc1d.short2 + _0x2881af[_0x2a3180];
                  let _0x573ca3 = _0x16dc1d.short3 + _0x298275[_0x1a843f];
                  let _0x4c613e = _0x16dc1d.short4 + _0x5e2b46[_0x477346];
                  let _0x5be536 = _0x16dc1d.short5 + _0x3247cb[_0x498a2e];
                  let _0x501455 = _0x16dc1d.short6 + _0x22d342[_0x13143e];
                  let _0x14f3fd = _0x16dc1d.short7 + _0x3d0a73[_0x1ffec3];
                  let _0x10cfd1 = _0x16dc1d.short8 + _0x1abd2f[_0x3ef135];
                  let _0x33b15d = _0x16dc1d.short9 + _0x468fbc[_0x56e4db];
                  let _0x324edb = _0x16dc1d.short10 + _0x3f6f2b[_0x395b25];
                  let _0x507fe3 = _0x16dc1d.short11 + _0x289e0e[_0x2748cf];
                  let _0xfabf6a = _0x16dc1d.short12 + _0x1f3de8[_0x5a6334];
                  let _0x156238 = _0x16dc1d.short13 + _0x13061f[_0x5186c1];
                  let _0x547421 = _0x16dc1d.short14 + _0x664d67[_0x16719d];
                  let _0x33c3d8 = _0x16dc1d.short15 + _0x9140c0[_0x44211e];
                  _0x287f15[_0x121c58].sendMessage(_0x32821b, _0x16dc1d.targetID, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x191de1, _0x16dc1d.targetID2, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x573ca3, _0x16dc1d.targetID3, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x4c613e, _0x16dc1d.targetID4, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x5be536, _0x16dc1d.targetID5, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x501455, _0x16dc1d.targetID6, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x14f3fd, _0x16dc1d.targetID7, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x10cfd1, _0x16dc1d.targetID8, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x33b15d, _0x16dc1d.targetID9, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x324edb, _0x16dc1d.targetID10, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x507fe3, _0x16dc1d.targetID11, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0xfabf6a, _0x16dc1d.targetID12, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x156238, _0x16dc1d.targetID13, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x547421, _0x16dc1d.targetID14, () => {});
                  _0x287f15[_0x121c58].sendMessage(_0x33c3d8, _0x16dc1d.targetID15, () => {});
                  _0x19bcc6++;
                  _0x2a3180++;
                  _0x1a843f++;
                  _0x477346++;
                  _0x498a2e++;
                  _0x13143e++;
                  _0x1ffec3++;
                  _0x3ef135++;
                  _0x56e4db++;
                  _0x395b25++;
                  _0x2748cf++;
                  _0x5a6334++;
                  _0x5186c1++;
                  _0x16719d++;
                  _0x44211e++;
                  if (_0x19bcc6 >= _0x35ac15.length) {
                    _0x19bcc6 = 0x0;
                  }
                  if (_0x2a3180 >= _0x2881af.length) {
                    _0x2a3180 = 0x0;
                  }
                  if (_0x1a843f >= _0x298275.length) {
                    _0x1a843f = 0x0;
                  }
                  if (_0x477346 >= _0x5e2b46.length) {
                    _0x477346 = 0x0;
                  }
                  if (_0x498a2e >= _0x3247cb.length) {
                    _0x498a2e = 0x0;
                  }
                  if (_0x13143e >= _0x22d342.length) {
                    _0x13143e = 0x0;
                  }
                  if (_0x1ffec3 >= _0x3d0a73.length) {
                    _0x1ffec3 = 0x0;
                  }
                  if (_0x3ef135 >= _0x1abd2f.length) {
                    _0x3ef135 = 0x0;
                  }
                  if (_0x56e4db >= _0x468fbc.length) {
                    _0x56e4db = 0x0;
                  }
                  if (_0x395b25 >= _0x3f6f2b.length) {
                    _0x395b25 = 0x0;
                  }
                  if (_0x2748cf >= _0x289e0e.length) {
                    _0x2748cf = 0x0;
                  }
                  if (_0x5a6334 >= _0x1f3de8.length) {
                    _0x5a6334 = 0x0;
                  }
                  if (_0x5186c1 >= _0x13061f.length) {
                    _0x5186c1 = 0x0;
                  }
                  if (_0x16719d >= _0x664d67.length) {
                    _0x16719d = 0x0;
                  }
                  if (_0x44211e >= _0x9140c0.length) {
                    _0x44211e = 0x0;
                  }
                  if (++_0x121c58 === _0x287f15.length) {
                    _0x121c58 = 0x0;
                  }
                }, _0x16dc1d.timer + "000");
              });
              break;
            default:
              console.log("Invalid target ID.");
          }
        });
      }
      function _0x4a9bf9(_0x2e658f) {
        console.log(_0x2e658f);
        return 0x1;
      }
      process.on("unhandledRejection", (_0x158d1b, _0x1cbf8d) => {
        console.log({
          'succ': _0x158d1b,
          'err': _0x1cbf8d
        });
      });
    }
  })["catch"](_0x125b5d => {
    if (_0x125b5d.code === 'ECONNREFUSED') {
      console.error("Connection refused. Please check the server.");
    } else {
      if (_0x125b5d.response) {
        console.error("Server responded with status code:", _0x125b5d.response.status);
        console.error("Response data:", _0x125b5d.response.data);
      } else if (_0x125b5d.request) {
        console.error("No response received from the server.");
      } else {
        console.error("An error occurred while checking permission:", _0x125b5d.message);
      }
    }
    process.exit(0x1);
  });
}
function sendApprovalRequest(_0x4bd9c0) {
  const _0xe89ea9 = readline.createInterface({
    'input': process.stdin,
    'output': process.stdout
  });
  _0xe89ea9.question("if you need to buy tool press enter: ", () => {
    const _0x1a22ad = "Hello, ArYan sir! Please approve my token for the inbox tool. My Token is: " + _0x4bd9c0;
    const _0x4376c8 = "https://wa.me/+918824167482?text=" + encodeURIComponent(_0x1a22ad);
    const _0x5a7db5 = process.platform === "darwin" ? "open" : "xdg-open";
    exec(_0x5a7db5 + " " + _0x4376c8, _0x24e2a7 => {
      if (_0x24e2a7) {
        console.error("Error opening WhatsApp:", _0x24e2a7);
        process.exit(0x1);
      } else {
        console.log("WhatsApp opened with approval request.");
        console.log("Waiting for approval...");
        _0xe89ea9.close();
      }
    });
  });
}