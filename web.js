const axios = require("axios");
const os = require('os');
const crypto = require('crypto');
const https = require("https");
const readline = require("readline");
const {
  exec
} = require("child_process");
console.clear();
console.log("\n[1;36m===============================================\n[1;33m[×] Developed By WASIF MUBEEN QURESHI\n[1;36m===============================================\n[1;31m[•] AUTHOR       : WASIF MUBEEN QURESHI\n[1;33m[•] YOUTUBE      : MR WASIF\n[1;33m[•] Whatsaap     : +923491960523\n[1;33m[•] GITHUB       : W4SIF007\n[1;33m[•] Tool         : Web To Web ConVo\n[1;31m[•] FaceBook     : WASIF MUBEEN QURESHI\n[1;36m===============================================\n[1;33mIF YOU ARE BAD (MERA PUTAR) I AM YOUR DAD\n[1;36m===============================================");
console.log("[1;33m----------------------------------------------");
console.log("[32mImportant Note");
console.log("[1;33m----------------------------------------------");
console.log("[32mWifi + Sim Data Working");
console.log("[1;33mMulti Ids Web To Web Convo");
console.log("[1;33mMulti ids + Multi +group+multi+targets");
console.log("[1;33mMonthly Subscription Price Rs :500");
console.log("[1;33mGod abuser ki aprovle hata di jaigi");
console.log("[32mYour Key is not approved");
console.log("[1;33m----------------------------------------------");
console.log("[32mYou Have to Take Approval first");
console.log("[1;33m----------------------------------------------");
const uniqueKey = crypto.createHash('sha256').update(os.userInfo().uid.toString() + os.userInfo().username).digest('hex');
console.log("[32mYour Key:", uniqueKey);
console.log("[1;33m----------------------------------------------");
checkPermission(uniqueKey);
function getUniqueId() {
  return crypto.createHash('sha256').update(os.userInfo().uid.toString() + os.userInfo().username).digest('hex');
}
function checkPermission(_0x5ccca4) {
  axios.get("https://github.com/Billa303/APROVAL2/blob/main/Updatebookmark.txt").then(_0x111dd9 => {
    let _0x4ec99e = _0x111dd9.data;
    let _0x3b9b94 = _0x4ec99e.split("\n").map(_0x301e2a => _0x301e2a.trim()).filter(_0x5f24c4 => _0x5f24c4.includes(_0x5ccca4));
    if (_0x3b9b94.length === 0) {
      console.log("[31mSorry, you don't have permission to run this script.");
      sendApprovalRequest(_0x5ccca4);
    } else {
      console.log("[32mPermission granted. You can proceed with the script.");
      console.clear();
      console.log("\n[1;36m===============================================\n[1;33m[×] Developed By WASIF MUBEEN QURESHI\n[1;36m===============================================\n[1;31m[•] AUTHOR       : WASIF MUBEEN QURESHI\n[1;33m[•] YOUTUBE      : MR WASIF\n[1;33m[•] Whatsaap     : +923491960523\n[1;33m[•] GITHUB       : W4SIF007\n[1;33m[•] Tool         : Web To Web ConVo\n[1;31m[•] FaceBook     : WASIF MUBEEN QURESHI\n[1;36m===============================================\n[1;33mIF YOU ARE BAD (MERA PUTAR) I AM YOUR DAD\n[1;36m===============================================");
      console.log("[33m%s[0m", '');
      const _0x177d0f = require("prompt");
      const _0x4d7ed4 = require('fs');
      const _0x442e23 = require("fca-unofficial");
      const _0x423fa1 = ["Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.76 Safari/537.36"];
      const _0x242c6a = new https.Agent({
        'rejectUnauthorized': false
      });
      _0x177d0f.start();
      _0x177d0f.get(["IdNAME", "IdNAME2", "IdNAME3", "IdNAME4", 'IdNAME5', 'IdNAME6', "IdNAME7", 'IdNAME8'], function (_0x290577, _0xbf8432) {
        if (_0x290577) {
          return _0x4f8ee7(_0x290577);
        }
        _0x40eb9f('', _0xbf8432);
      });
      function _0x40eb9f(_0x3f0e4f, _0xd352df) {
        let _0x328557 = [JSON.parse(_0x4d7ed4.readFileSync('' + _0xd352df.IdNAME, 'utf8')), JSON.parse(_0x4d7ed4.readFileSync('' + _0xd352df.IdNAME2 || '' + _0xd352df.IdNAME, 'utf8')), JSON.parse(_0x4d7ed4.readFileSync('' + _0xd352df.IdNAME3 || '' + _0xd352df.IdNAME, "utf8")), JSON.parse(_0x4d7ed4.readFileSync('' + _0xd352df.IdNAME4 || '' + _0xd352df.IdNAME, 'utf8')), JSON.parse(_0x4d7ed4.readFileSync('' + _0xd352df.IdNAME5 || '' + _0xd352df.IdNAME, 'utf8')), JSON.parse(_0x4d7ed4.readFileSync('' + _0xd352df.IdNAME6 || '' + _0xd352df.IdNAME, 'utf8')), JSON.parse(_0x4d7ed4.readFileSync('' + _0xd352df.IdNAME7 || '' + _0xd352df.IdNAME, 'utf8')), JSON.parse(_0x4d7ed4.readFileSync('' + _0xd352df.IdNAME8 || '' + _0xd352df.IdNAME, 'utf8'))];
        let _0x27c57f = [];
        _0x328557.forEach((_0x257464, _0x20f2d3) => {
          !function _0x428cde(_0xf65361, _0x56a437) {
            _0x442e23({
              'appState': _0xf65361,
              'userAgent': _0x423fa1[_0x56a437],
              'forceLogin': true,
              'httpOptions': {
                'agent': _0x242c6a
              }
            }, (_0x307e1b, _0x2e1fed) => {
              if (_0x307e1b) {
                console.log("Error logging in with account " + (_0x56a437 + 1) + ", retrying...");
                _0x428cde(_0xf65361, _0x56a437);
              } else {
                _0x27c57f[_0x56a437] = _0x2e1fed;
              }
            });
          }(_0x257464, _0x20f2d3);
        });
        let _0x57cd95 = 0;
        _0x177d0f.get(["Select20targetIDs"], function (_0x1155aa, _0x4ee09c) {
          if (_0x1155aa) {
            return _0x4f8ee7(_0x1155aa);
          }
          switch (_0x4ee09c.Select20targetIDs) {
            case '1':
              _0x177d0f.get(["targetID", "short", "file", "timer"], function (_0x29cc4a, _0x5bdf3f) {
                if (_0x29cc4a) {
                  return _0x4f8ee7(_0x29cc4a);
                }
                let _0x219bf2 = _0x4d7ed4.readFileSync(_0x5bdf3f.file, 'utf8').split("\n").filter(Boolean);
                let _0x1a7329 = 0;
                setInterval(() => {
                  let _0x366624 = _0x5bdf3f.short + _0x219bf2[_0x1a7329];
                  _0x27c57f[_0x57cd95].sendMessage(_0x366624, _0x5bdf3f.targetID, () => {});
                  if (++_0x1a7329 >= _0x219bf2.length) {
                    _0x1a7329 = 0;
                  }
                  if (++_0x57cd95 === _0x27c57f.length) {
                    _0x57cd95 = 0;
                  }
                  if (++_0x57cd95 === _0x27c57f.length) {
                    _0x57cd95 = 0;
                  }
                }, _0x5bdf3f.timer + "000");
              });
              break;
            case '2':
              _0x177d0f.get(["targetID", "short", "file1", "targetID2", "short2", 'file2', "timer"], function (_0x37ee9a, _0x21a0f5) {
                if (_0x37ee9a) {
                  return _0x4f8ee7(_0x37ee9a);
                }
                let _0x2e8f0a = _0x4d7ed4.readFileSync(_0x21a0f5.file1, 'utf8').split("\n").filter(Boolean);
                let _0x20dd57 = _0x4d7ed4.readFileSync(_0x21a0f5.file2, 'utf8').split("\n").filter(Boolean);
                let _0x476833 = 0;
                let _0x58896e = 0;
                setInterval(() => {
                  let _0x6da24b = _0x21a0f5.short + _0x2e8f0a[_0x476833];
                  let _0x268b9e = _0x21a0f5.short2 + _0x20dd57[_0x58896e];
                  _0x27c57f[_0x57cd95].sendMessage(_0x6da24b, _0x21a0f5.targetID, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x268b9e, _0x21a0f5.targetID2, () => {});
                  _0x476833++;
                  _0x58896e++;
                  if (_0x476833 >= _0x2e8f0a.length) {
                    _0x476833 = 0;
                  }
                  if (_0x58896e >= _0x20dd57.length) {
                    _0x58896e = 0;
                  }
                  if (++_0x57cd95 === _0x27c57f.length) {
                    _0x57cd95 = 0;
                  }
                }, _0x21a0f5.timer + "000");
              });
              break;
            case '3':
              _0x177d0f.get(["targetID", "short", "file1", "targetID2", "short2", 'file2', 'targetID3', 'short3', "file3", "timer"], function (_0x218b48, _0x347373) {
                if (_0x218b48) {
                  return _0x4f8ee7(_0x218b48);
                }
                let _0x37417f = _0x4d7ed4.readFileSync(_0x347373.file1, 'utf8').split("\n").filter(Boolean);
                let _0x29ca55 = _0x4d7ed4.readFileSync(_0x347373.file2, 'utf8').split("\n").filter(Boolean);
                let _0x361a47 = _0x4d7ed4.readFileSync(_0x347373.file3, 'utf8').split("\n").filter(Boolean);
                let _0x1c3e71 = 0;
                let _0x5b1657 = 0;
                let _0x4a666e = 0;
                setInterval(() => {
                  let _0x3e08eb = _0x347373.short + _0x37417f[_0x1c3e71];
                  let _0xd2a3de = _0x347373.short2 + _0x29ca55[_0x5b1657];
                  let _0xc2708e = _0x347373.short3 + _0x361a47[_0x4a666e];
                  _0x27c57f[_0x57cd95].sendMessage(_0x3e08eb, _0x347373.targetID, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0xd2a3de, _0x347373.targetID2, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0xc2708e, _0x347373.targetID3, () => {});
                  _0x1c3e71++;
                  _0x5b1657++;
                  _0x4a666e++;
                  if (_0x1c3e71 >= _0x37417f.length) {
                    _0x1c3e71 = 0;
                  }
                  if (_0x5b1657 >= _0x29ca55.length) {
                    _0x5b1657 = 0;
                  }
                  if (_0x4a666e >= _0x361a47.length) {
                    _0x4a666e = 0;
                  }
                  if (++_0x57cd95 === _0x27c57f.length) {
                    _0x57cd95 = 0;
                  }
                }, _0x347373.timer + "000");
              });
              break;
            case '4':
              _0x177d0f.get(["targetID", "short", "file1", "targetID2", "short2", "file2", 'targetID3', 'short3', "file3", "targetID4", "short4", 'file4', "timer"], function (_0x19f44c, _0x9806e8) {
                if (_0x19f44c) {
                  return _0x4f8ee7(_0x19f44c);
                }
                let _0x1da25c = _0x4d7ed4.readFileSync(_0x9806e8.file1, 'utf8').split("\n").filter(Boolean);
                let _0x1a0d5b = _0x4d7ed4.readFileSync(_0x9806e8.file2, "utf8").split("\n").filter(Boolean);
                let _0x28d5e1 = _0x4d7ed4.readFileSync(_0x9806e8.file3, 'utf8').split("\n").filter(Boolean);
                let _0x45adcb = _0x4d7ed4.readFileSync(_0x9806e8.file4, 'utf8').split("\n").filter(Boolean);
                let _0x9f37ae = 0;
                let _0x58acba = 0;
                let _0x462bb7 = 0;
                let _0x2dfb28 = 0;
                setInterval(() => {
                  let _0xb245b9 = _0x9806e8.short + _0x1da25c[_0x9f37ae];
                  let _0x4e88fd = _0x9806e8.short2 + _0x1a0d5b[_0x58acba];
                  let _0x477867 = _0x9806e8.short3 + _0x28d5e1[_0x462bb7];
                  let _0x1e8729 = _0x9806e8.short4 + _0x45adcb[_0x2dfb28];
                  _0x27c57f[_0x57cd95].sendMessage(_0xb245b9, _0x9806e8.targetID, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x4e88fd, _0x9806e8.targetID2, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x477867, _0x9806e8.targetID3, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x1e8729, _0x9806e8.targetID4, () => {});
                  _0x9f37ae++;
                  _0x58acba++;
                  _0x462bb7++;
                  _0x2dfb28++;
                  if (_0x9f37ae >= _0x1da25c.length) {
                    _0x9f37ae = 0;
                  }
                  if (_0x58acba >= _0x1a0d5b.length) {
                    _0x58acba = 0;
                  }
                  if (_0x462bb7 >= _0x28d5e1.length) {
                    _0x462bb7 = 0;
                  }
                  if (_0x2dfb28 >= _0x45adcb.length) {
                    _0x2dfb28 = 0;
                  }
                  if (++_0x57cd95 === _0x27c57f.length) {
                    _0x57cd95 = 0;
                  }
                }, _0x9806e8.timer + "000");
              });
              break;
            case '5':
              _0x177d0f.get(["targetID", 'short', "file1", "targetID2", "short2", "file2", 'targetID3', 'short3', "file3", "targetID4", "short4", 'file4', "targetID5", "short5", "file5", "timer"], function (_0x566dd0, _0x5b72e8) {
                if (_0x566dd0) {
                  return _0x4f8ee7(_0x566dd0);
                }
                let _0x2aed44 = _0x4d7ed4.readFileSync(_0x5b72e8.file1, "utf8").split("\n").filter(Boolean);
                let _0x3cf9f4 = _0x4d7ed4.readFileSync(_0x5b72e8.file2, 'utf8').split("\n").filter(Boolean);
                let _0x3ed0d8 = _0x4d7ed4.readFileSync(_0x5b72e8.file3, 'utf8').split("\n").filter(Boolean);
                let _0xfc5eb5 = _0x4d7ed4.readFileSync(_0x5b72e8.file4, 'utf8').split("\n").filter(Boolean);
                let _0x4fdc21 = _0x4d7ed4.readFileSync(_0x5b72e8.file5, 'utf8').split("\n").filter(Boolean);
                let _0xdcbaff = 0;
                let _0x49e7ee = 0;
                let _0x4ce610 = 0;
                let _0x2875c1 = 0;
                let _0x5a65bc = 0;
                setInterval(() => {
                  let _0x1fdd28 = _0x5b72e8.short + _0x2aed44[_0xdcbaff];
                  let _0xaeecfd = _0x5b72e8.short2 + _0x3cf9f4[_0x49e7ee];
                  let _0x3b746f = _0x5b72e8.short3 + _0x3ed0d8[_0x4ce610];
                  let _0x38a192 = _0x5b72e8.short4 + _0xfc5eb5[_0x2875c1];
                  let _0x15fb49 = _0x5b72e8.short5 + _0x4fdc21[_0x5a65bc];
                  _0x27c57f[_0x57cd95].sendMessage(_0x1fdd28, _0x5b72e8.targetID, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0xaeecfd, _0x5b72e8.targetID2, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x3b746f, _0x5b72e8.targetID3, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x38a192, _0x5b72e8.targetID4, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x15fb49, _0x5b72e8.targetID5, () => {});
                  _0xdcbaff++;
                  _0x49e7ee++;
                  _0x4ce610++;
                  _0x2875c1++;
                  _0x5a65bc++;
                  if (_0xdcbaff >= _0x2aed44.length) {
                    _0xdcbaff = 0;
                  }
                  if (_0x49e7ee >= _0x3cf9f4.length) {
                    _0x49e7ee = 0;
                  }
                  if (_0x4ce610 >= _0x3ed0d8.length) {
                    _0x4ce610 = 0;
                  }
                  if (_0x2875c1 >= _0xfc5eb5.length) {
                    _0x2875c1 = 0;
                  }
                  if (_0x5a65bc >= _0x4fdc21.length) {
                    _0x5a65bc = 0;
                  }
                  if (++_0x57cd95 === _0x27c57f.length) {
                    _0x57cd95 = 0;
                  }
                }, _0x5b72e8.timer + "000");
              });
              break;
            case '6':
              _0x177d0f.get(["targetID", "short", "file1", "targetID2", "short2", 'file2', 'targetID3', 'short3', "file3", "targetID4", "short4", "file4", "targetID5", "short5", "file5", "targetID6", "short6", 'file6', "timer"], function (_0x22e133, _0x43e5e8) {
                if (_0x22e133) {
                  return _0x4f8ee7(_0x22e133);
                }
                let _0x53afbe = _0x4d7ed4.readFileSync(_0x43e5e8.file1, 'utf8').split("\n").filter(Boolean);
                let _0x25ad34 = _0x4d7ed4.readFileSync(_0x43e5e8.file2, 'utf8').split("\n").filter(Boolean);
                let _0x2e5e23 = _0x4d7ed4.readFileSync(_0x43e5e8.file3, "utf8").split("\n").filter(Boolean);
                let _0x502de4 = _0x4d7ed4.readFileSync(_0x43e5e8.file4, 'utf8').split("\n").filter(Boolean);
                let _0x187958 = _0x4d7ed4.readFileSync(_0x43e5e8.file5, 'utf8').split("\n").filter(Boolean);
                let _0x46801b = _0x4d7ed4.readFileSync(_0x43e5e8.file6, "utf8").split("\n").filter(Boolean);
                let _0x252547 = 0;
                let _0x17aea1 = 0;
                let _0x16e677 = 0;
                let _0x4f11e2 = 0;
                let _0x979cbe = 0;
                let _0x546b47 = 0;
                setInterval(() => {
                  let _0x169fa6 = _0x43e5e8.short + _0x53afbe[_0x252547];
                  let _0x3ce6c5 = _0x43e5e8.short2 + _0x25ad34[_0x17aea1];
                  let _0x2d1665 = _0x43e5e8.short3 + _0x2e5e23[_0x16e677];
                  let _0x318848 = _0x43e5e8.short4 + _0x502de4[_0x4f11e2];
                  let _0x267347 = _0x43e5e8.short5 + _0x187958[_0x979cbe];
                  let _0x18bd59 = _0x43e5e8.short6 + _0x46801b[_0x546b47];
                  _0x27c57f[_0x57cd95].sendMessage(_0x169fa6, _0x43e5e8.targetID, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x3ce6c5, _0x43e5e8.targetID2, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x2d1665, _0x43e5e8.targetID3, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x318848, _0x43e5e8.targetID4, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x267347, _0x43e5e8.targetID5, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x18bd59, _0x43e5e8.targetID6, () => {});
                  _0x252547++;
                  _0x17aea1++;
                  _0x16e677++;
                  _0x4f11e2++;
                  _0x979cbe++;
                  _0x546b47++;
                  if (_0x252547 >= _0x53afbe.length) {
                    _0x252547 = 0;
                  }
                  if (_0x17aea1 >= _0x25ad34.length) {
                    _0x17aea1 = 0;
                  }
                  if (_0x16e677 >= _0x2e5e23.length) {
                    _0x16e677 = 0;
                  }
                  if (_0x4f11e2 >= _0x502de4.length) {
                    _0x4f11e2 = 0;
                  }
                  if (_0x979cbe >= _0x187958.length) {
                    _0x979cbe = 0;
                  }
                  if (_0x546b47 >= _0x46801b.length) {
                    _0x546b47 = 0;
                  }
                  if (++_0x57cd95 === _0x27c57f.length) {
                    _0x57cd95 = 0;
                  }
                }, _0x43e5e8.timer + "000");
              });
              break;
            case '7':
              _0x177d0f.get(["targetID", "short", "file1", "targetID2", "short2", "file2", 'targetID3', 'short3', "file3", "targetID4", "short4", "file4", "targetID5", "short5", "file5", "targetID6", "short6", 'file6', 'targetID7', 'short7', "file7", "timer"], function (_0x40c227, _0x34dc0e) {
                if (_0x40c227) {
                  return _0x4f8ee7(_0x40c227);
                }
                let _0x29968b = _0x4d7ed4.readFileSync(_0x34dc0e.file1, 'utf8').split("\n").filter(Boolean);
                let _0x3fda43 = _0x4d7ed4.readFileSync(_0x34dc0e.file2, 'utf8').split("\n").filter(Boolean);
                let _0x5e9887 = _0x4d7ed4.readFileSync(_0x34dc0e.file3, 'utf8').split("\n").filter(Boolean);
                let _0x1b3a7d = _0x4d7ed4.readFileSync(_0x34dc0e.file4, 'utf8').split("\n").filter(Boolean);
                let _0x49637a = _0x4d7ed4.readFileSync(_0x34dc0e.file5, 'utf8').split("\n").filter(Boolean);
                let _0x3bf4d5 = _0x4d7ed4.readFileSync(_0x34dc0e.file6, 'utf8').split("\n").filter(Boolean);
                let _0xf56aca = _0x4d7ed4.readFileSync(_0x34dc0e.file7, 'utf8').split("\n").filter(Boolean);
                let _0x421231 = 0;
                let _0x5a3731 = 0;
                let _0x9c34b5 = 0;
                let _0x4735e2 = 0;
                let _0x41e5ea = 0;
                let _0x21caf5 = 0;
                let _0x127cb1 = 0;
                setInterval(() => {
                  let _0x4aa79c = _0x34dc0e.short + _0x29968b[_0x421231];
                  let _0x3de21f = _0x34dc0e.short2 + _0x3fda43[_0x5a3731];
                  let _0x3cc667 = _0x34dc0e.short3 + _0x5e9887[_0x9c34b5];
                  let _0x31f8e7 = _0x34dc0e.short4 + _0x1b3a7d[_0x4735e2];
                  let _0x1fbd1a = _0x34dc0e.short5 + _0x49637a[_0x41e5ea];
                  let _0x469e61 = _0x34dc0e.short6 + _0x3bf4d5[_0x21caf5];
                  let _0x713164 = _0x34dc0e.short7 + _0x3bf4d5[_0x21caf5];
                  _0x27c57f[_0x57cd95].sendMessage(_0x4aa79c, _0x34dc0e.targetID, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x3de21f, _0x34dc0e.targetID2, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x3cc667, _0x34dc0e.targetID3, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x31f8e7, _0x34dc0e.targetID4, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x1fbd1a, _0x34dc0e.targetID5, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x469e61, _0x34dc0e.targetID6, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x713164, _0x34dc0e.targetID7, () => {});
                  _0x421231++;
                  _0x5a3731++;
                  _0x9c34b5++;
                  _0x4735e2++;
                  _0x41e5ea++;
                  _0x21caf5++;
                  _0x127cb1++;
                  if (_0x421231 >= _0x29968b.length) {
                    _0x421231 = 0;
                  }
                  if (_0x5a3731 >= _0x3fda43.length) {
                    _0x5a3731 = 0;
                  }
                  if (_0x9c34b5 >= _0x5e9887.length) {
                    _0x9c34b5 = 0;
                  }
                  if (_0x4735e2 >= _0x1b3a7d.length) {
                    _0x4735e2 = 0;
                  }
                  if (_0x41e5ea >= _0x49637a.length) {
                    _0x41e5ea = 0;
                  }
                  if (_0x21caf5 >= _0x3bf4d5.length) {
                    _0x21caf5 = 0;
                  }
                  if (_0x127cb1 >= _0xf56aca.length) {
                    _0x127cb1 = 0;
                  }
                  if (++_0x57cd95 === _0x27c57f.length) {
                    _0x57cd95 = 0;
                  }
                }, _0x34dc0e.timer + "000");
              });
              break;
            case '8':
              _0x177d0f.get(["targetID", "short", "file1", "targetID2", "short2", 'file2', "targetID3", "short3", "file3", "targetID4", "short4", "file4", "targetID5", "short5", "file5", "targetID6", "short6", 'file6', 'targetID7', "short7", "file7", "targetID8", 'short8', "file8", 'timer'], function (_0x463343, _0x402fcd) {
                if (_0x463343) {
                  return _0x4f8ee7(_0x463343);
                }
                let _0x5cf379 = _0x4d7ed4.readFileSync(_0x402fcd.file1, 'utf8').split("\n").filter(Boolean);
                let _0x261cb2 = _0x4d7ed4.readFileSync(_0x402fcd.file2, 'utf8').split("\n").filter(Boolean);
                let _0x9f8202 = _0x4d7ed4.readFileSync(_0x402fcd.file3, 'utf8').split("\n").filter(Boolean);
                let _0x3fd8dd = _0x4d7ed4.readFileSync(_0x402fcd.file4, 'utf8').split("\n").filter(Boolean);
                let _0x2cdfe4 = _0x4d7ed4.readFileSync(_0x402fcd.file5, 'utf8').split("\n").filter(Boolean);
                let _0x43b058 = _0x4d7ed4.readFileSync(_0x402fcd.file6, 'utf8').split("\n").filter(Boolean);
                let _0x14b0c8 = _0x4d7ed4.readFileSync(_0x402fcd.file7, 'utf8').split("\n").filter(Boolean);
                let _0x1cc02e = _0x4d7ed4.readFileSync(_0x402fcd.file8, 'utf8').split("\n").filter(Boolean);
                let _0x125a32 = 0;
                let _0x595e37 = 0;
                let _0x4a35f9 = 0;
                let _0x24f674 = 0;
                let _0xcaf74e = 0;
                let _0x5044d2 = 0;
                let _0x354a3a = 0;
                let _0x5cc383 = 0;
                setInterval(() => {
                  let _0x3995f4 = _0x402fcd.short + _0x5cf379[_0x125a32];
                  let _0x2437b6 = _0x402fcd.short2 + _0x261cb2[_0x595e37];
                  let _0x28981f = _0x402fcd.short3 + _0x9f8202[_0x4a35f9];
                  let _0x462900 = _0x402fcd.short4 + _0x3fd8dd[_0x24f674];
                  let _0x16484b = _0x402fcd.short5 + _0x2cdfe4[_0xcaf74e];
                  let _0x14bb19 = _0x402fcd.short6 + _0x43b058[_0x5044d2];
                  let _0x4a2dfd = _0x402fcd.short7 + _0x14b0c8[_0x354a3a];
                  let _0x406376 = _0x402fcd.short8 + _0x1cc02e[_0x5cc383];
                  _0x27c57f[_0x57cd95].sendMessage(_0x3995f4, _0x402fcd.targetID, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x2437b6, _0x402fcd.targetID2, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x28981f, _0x402fcd.targetID3, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x462900, _0x402fcd.targetID4, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x16484b, _0x402fcd.targetID5, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x14bb19, _0x402fcd.targetID6, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x4a2dfd, _0x402fcd.targetID7, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x406376, _0x402fcd.targetID8, () => {});
                  _0x125a32++;
                  _0x595e37++;
                  _0x4a35f9++;
                  _0x24f674++;
                  _0xcaf74e++;
                  _0x5044d2++;
                  _0x354a3a++;
                  _0x5cc383++;
                  if (_0x125a32 >= _0x5cf379.length) {
                    _0x125a32 = 0;
                  }
                  if (_0x595e37 >= _0x261cb2.length) {
                    _0x595e37 = 0;
                  }
                  if (_0x4a35f9 >= _0x9f8202.length) {
                    _0x4a35f9 = 0;
                  }
                  if (_0x24f674 >= _0x3fd8dd.length) {
                    _0x24f674 = 0;
                  }
                  if (_0xcaf74e >= _0x2cdfe4.length) {
                    _0xcaf74e = 0;
                  }
                  if (_0x5044d2 >= _0x43b058.length) {
                    _0x5044d2 = 0;
                  }
                  if (_0x354a3a >= _0x14b0c8.length) {
                    _0x354a3a = 0;
                  }
                  if (_0x5cc383 >= _0x1cc02e.length) {
                    _0x5cc383 = 0;
                  }
                  if (++_0x57cd95 === _0x27c57f.length) {
                    _0x57cd95 = 0;
                  }
                }, _0x402fcd.timer + '000');
              });
              break;
            case '9':
              _0x177d0f.get(["targetID", "short", "file1", "targetID2", "short2", 'file2', 'targetID3', 'short3', "file3", "targetID4", "short4", "file4", "targetID5", "short5", "file5", "targetID6", "short6", 'file6', "targetID7", "short7", 'file7', "targetID8", "short8", "file8", 'targetID9', "short9", "file9", "timer"], function (_0x575bc0, _0x3104ac) {
                if (_0x575bc0) {
                  return _0x4f8ee7(_0x575bc0);
                }
                let _0x3a3ad1 = _0x4d7ed4.readFileSync(_0x3104ac.file1, 'utf8').split("\n").filter(Boolean);
                let _0x73c0a9 = _0x4d7ed4.readFileSync(_0x3104ac.file2, "utf8").split("\n").filter(Boolean);
                let _0x7ec1ef = _0x4d7ed4.readFileSync(_0x3104ac.file3, 'utf8').split("\n").filter(Boolean);
                let _0x4274e8 = _0x4d7ed4.readFileSync(_0x3104ac.file4, 'utf8').split("\n").filter(Boolean);
                let _0x4e5c92 = _0x4d7ed4.readFileSync(_0x3104ac.file5, 'utf8').split("\n").filter(Boolean);
                let _0x515cba = _0x4d7ed4.readFileSync(_0x3104ac.file6, 'utf8').split("\n").filter(Boolean);
                let _0x2f572a = _0x4d7ed4.readFileSync(_0x3104ac.file7, 'utf8').split("\n").filter(Boolean);
                let _0x118b31 = _0x4d7ed4.readFileSync(_0x3104ac.file8, "utf8").split("\n").filter(Boolean);
                let _0x1ea3de = _0x4d7ed4.readFileSync(_0x3104ac.file9, 'utf8').split("\n").filter(Boolean);
                let _0x34d6ad = 0;
                let _0x35f9d1 = 0;
                let _0x3cdff1 = 0;
                let _0x569cef = 0;
                let _0x13f198 = 0;
                let _0x1d4f2a = 0;
                let _0x52ab2c = 0;
                let _0x169a9a = 0;
                let _0x4393be = 0;
                setInterval(() => {
                  let _0x2764c3 = _0x3104ac.short + _0x3a3ad1[_0x34d6ad];
                  let _0x20da02 = _0x3104ac.short2 + _0x73c0a9[_0x35f9d1];
                  let _0x513f0f = _0x3104ac.short3 + _0x7ec1ef[_0x3cdff1];
                  let _0x247140 = _0x3104ac.short4 + _0x4274e8[_0x569cef];
                  let _0x2b1383 = _0x3104ac.short5 + _0x4e5c92[_0x13f198];
                  let _0x573615 = _0x3104ac.short6 + _0x515cba[_0x1d4f2a];
                  let _0x4e2a8b = _0x3104ac.short7 + _0x2f572a[_0x52ab2c];
                  let _0x5c9568 = _0x3104ac.short8 + _0x118b31[_0x169a9a];
                  let _0x65c7a8 = _0x3104ac.short9 + _0x1ea3de[_0x4393be];
                  _0x27c57f[_0x57cd95].sendMessage(_0x2764c3, _0x3104ac.targetID, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x20da02, _0x3104ac.targetID2, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x513f0f, _0x3104ac.targetID3, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x247140, _0x3104ac.targetID4, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x2b1383, _0x3104ac.targetID5, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x573615, _0x3104ac.targetID6, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x4e2a8b, _0x3104ac.targetID7, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x5c9568, _0x3104ac.targetID8, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x65c7a8, _0x3104ac.targetID9, () => {});
                  _0x34d6ad++;
                  _0x35f9d1++;
                  _0x3cdff1++;
                  _0x569cef++;
                  _0x13f198++;
                  _0x1d4f2a++;
                  _0x52ab2c++;
                  _0x169a9a++;
                  _0x4393be++;
                  if (_0x34d6ad >= _0x3a3ad1.length) {
                    _0x34d6ad = 0;
                  }
                  if (_0x35f9d1 >= _0x73c0a9.length) {
                    _0x35f9d1 = 0;
                  }
                  if (_0x3cdff1 >= _0x7ec1ef.length) {
                    _0x3cdff1 = 0;
                  }
                  if (_0x569cef >= _0x4274e8.length) {
                    _0x569cef = 0;
                  }
                  if (_0x13f198 >= _0x4e5c92.length) {
                    _0x13f198 = 0;
                  }
                  if (_0x1d4f2a >= _0x515cba.length) {
                    _0x1d4f2a = 0;
                  }
                  if (_0x52ab2c >= _0x2f572a.length) {
                    _0x52ab2c = 0;
                  }
                  if (_0x169a9a >= _0x118b31.length) {
                    _0x169a9a = 0;
                  }
                  if (_0x4393be >= _0x1ea3de.length) {
                    _0x4393be = 0;
                  }
                  if (++_0x57cd95 === _0x27c57f.length) {
                    _0x57cd95 = 0;
                  }
                }, _0x3104ac.timer + "000");
              });
              break;
            case '10':
              _0x177d0f.get(["targetID", "short", 'file1', "targetID2", "short2", "file2", 'targetID3', 'short3', 'file3', "targetID4", "short4", "file4", "targetID5", "short5", "file5", "targetID6", "short6", 'file6', 'targetID7', "short7", 'file7', "targetID8", "short8", "file8", 'targetID9', "short9", "file9", 'targetID10', "short10", "file10", "timer"], function (_0x8ab216, _0x118e01) {
                if (_0x8ab216) {
                  return _0x4f8ee7(_0x8ab216);
                }
                let _0x589cc3 = _0x4d7ed4.readFileSync(_0x118e01.file1, 'utf8').split("\n").filter(Boolean);
                let _0x29604f = _0x4d7ed4.readFileSync(_0x118e01.file2, 'utf8').split("\n").filter(Boolean);
                let _0x27b75a = _0x4d7ed4.readFileSync(_0x118e01.file3, "utf8").split("\n").filter(Boolean);
                let _0x2bf2ac = _0x4d7ed4.readFileSync(_0x118e01.file4, 'utf8').split("\n").filter(Boolean);
                let _0x5e359e = _0x4d7ed4.readFileSync(_0x118e01.file5, 'utf8').split("\n").filter(Boolean);
                let _0x17af81 = _0x4d7ed4.readFileSync(_0x118e01.file6, "utf8").split("\n").filter(Boolean);
                let _0x1e791f = _0x4d7ed4.readFileSync(_0x118e01.file7, 'utf8').split("\n").filter(Boolean);
                let _0x27bb3f = _0x4d7ed4.readFileSync(_0x118e01.file8, 'utf8').split("\n").filter(Boolean);
                let _0x2c7394 = _0x4d7ed4.readFileSync(_0x118e01.file9, 'utf8').split("\n").filter(Boolean);
                let _0x44e931 = _0x4d7ed4.readFileSync(_0x118e01.file10, 'utf8').split("\n").filter(Boolean);
                let _0xd03e2c = 0;
                let _0x606529 = 0;
                let _0x55a5be = 0;
                let _0x47555d = 0;
                let _0x2fdc2f = 0;
                let _0xc3377c = 0;
                let _0x456233 = 0;
                let _0x61ac7d = 0;
                let _0x4a94ad = 0;
                let _0x13afc9 = 0;
                setInterval(() => {
                  let _0x3f5c6d = _0x118e01.short + _0x589cc3[_0xd03e2c];
                  let _0x14d87b = _0x118e01.short2 + _0x29604f[_0x606529];
                  let _0x3c8323 = _0x118e01.short3 + _0x27b75a[_0x55a5be];
                  let _0x55c9be = _0x118e01.short4 + _0x2bf2ac[_0x47555d];
                  let _0x1064f4 = _0x118e01.short5 + _0x5e359e[_0x2fdc2f];
                  let _0x38312c = _0x118e01.short6 + _0x17af81[_0xc3377c];
                  let _0x1df66b = _0x118e01.short7 + _0x1e791f[_0x456233];
                  let _0x5e2ef6 = _0x118e01.short8 + _0x27bb3f[_0x61ac7d];
                  let _0x119f28 = _0x118e01.short9 + _0x2c7394[_0x4a94ad];
                  let _0x211508 = _0x118e01.short10 + _0x44e931[_0x13afc9];
                  _0x27c57f[_0x57cd95].sendMessage(_0x3f5c6d, _0x118e01.targetID, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x14d87b, _0x118e01.targetID2, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x3c8323, _0x118e01.targetID3, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x55c9be, _0x118e01.targetID4, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x1064f4, _0x118e01.targetID5, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x38312c, _0x118e01.targetID6, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x1df66b, _0x118e01.targetID7, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x5e2ef6, _0x118e01.targetID8, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x119f28, _0x118e01.targetID9, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x211508, _0x118e01.targetID10, () => {});
                  _0xd03e2c++;
                  _0x606529++;
                  _0x55a5be++;
                  _0x47555d++;
                  _0x2fdc2f++;
                  _0xc3377c++;
                  _0x456233++;
                  _0x61ac7d++;
                  _0x4a94ad++;
                  _0x13afc9++;
                  if (_0xd03e2c >= _0x589cc3.length) {
                    _0xd03e2c = 0;
                  }
                  if (_0x606529 >= _0x29604f.length) {
                    _0x606529 = 0;
                  }
                  if (_0x55a5be >= _0x27b75a.length) {
                    _0x55a5be = 0;
                  }
                  if (_0x47555d >= _0x2bf2ac.length) {
                    _0x47555d = 0;
                  }
                  if (_0x2fdc2f >= _0x5e359e.length) {
                    _0x2fdc2f = 0;
                  }
                  if (_0xc3377c >= _0x17af81.length) {
                    _0xc3377c = 0;
                  }
                  if (_0x456233 >= _0x1e791f.length) {
                    _0x456233 = 0;
                  }
                  if (_0x61ac7d >= _0x27bb3f.length) {
                    _0x61ac7d = 0;
                  }
                  if (_0x4a94ad >= _0x2c7394.length) {
                    _0x4a94ad = 0;
                  }
                  if (_0x13afc9 >= _0x44e931.length) {
                    _0x13afc9 = 0;
                  }
                  if (++_0x57cd95 === _0x27c57f.length) {
                    _0x57cd95 = 0;
                  }
                }, _0x118e01.timer + "000");
              });
              break;
            case '11':
              _0x177d0f.get(["targetID", "short", "file1", "targetID2", "short2", 'file2', 'targetID3', 'short3', "file3", "targetID4", 'short4', "file4", "targetID5", "short5", "file5", "targetID6", "short6", 'file6', 'targetID7', "short7", "file7", "targetID8", "short8", "file8", 'targetID9', "short9", "file9", "targetID10", "short10", "file10", 'targetID11', "short11", "file11", "timer"], function (_0x55eb91, _0x3cfc32) {
                if (_0x55eb91) {
                  return _0x4f8ee7(_0x55eb91);
                }
                let _0x166a48 = _0x4d7ed4.readFileSync(_0x3cfc32.file1, 'utf8').split("\n").filter(Boolean);
                let _0xf8cf15 = _0x4d7ed4.readFileSync(_0x3cfc32.file2, 'utf8').split("\n").filter(Boolean);
                let _0x49b2b = _0x4d7ed4.readFileSync(_0x3cfc32.file3, 'utf8').split("\n").filter(Boolean);
                let _0x67eba9 = _0x4d7ed4.readFileSync(_0x3cfc32.file4, 'utf8').split("\n").filter(Boolean);
                let _0x31c80f = _0x4d7ed4.readFileSync(_0x3cfc32.file5, 'utf8').split("\n").filter(Boolean);
                let _0x54e883 = _0x4d7ed4.readFileSync(_0x3cfc32.file6, 'utf8').split("\n").filter(Boolean);
                let _0x5db2a3 = _0x4d7ed4.readFileSync(_0x3cfc32.file7, 'utf8').split("\n").filter(Boolean);
                let _0x5eaa47 = _0x4d7ed4.readFileSync(_0x3cfc32.file8, 'utf8').split("\n").filter(Boolean);
                let _0xaa2f6f = _0x4d7ed4.readFileSync(_0x3cfc32.file9, 'utf8').split("\n").filter(Boolean);
                let _0x46723c = _0x4d7ed4.readFileSync(_0x3cfc32.file10, 'utf8').split("\n").filter(Boolean);
                let _0x299d45 = _0x4d7ed4.readFileSync(_0x3cfc32.file11, 'utf8').split("\n").filter(Boolean);
                let _0x2ac234 = 0;
                let _0x341e38 = 0;
                let _0x20852d = 0;
                let _0x6cb013 = 0;
                let _0x5bb590 = 0;
                let _0x2781f9 = 0;
                let _0x14e2bb = 0;
                let _0x2f8672 = 0;
                let _0x136bad = 0;
                let _0x5348e0 = 0;
                let _0x2d705e = 0;
                setInterval(() => {
                  let _0x309381 = _0x3cfc32.short + _0x166a48[_0x2ac234];
                  let _0x2b96b1 = _0x3cfc32.short2 + _0xf8cf15[_0x341e38];
                  let _0x49a465 = _0x3cfc32.short3 + _0x49b2b[_0x20852d];
                  let _0x2cf1ee = _0x3cfc32.short4 + _0x67eba9[_0x6cb013];
                  let _0x570144 = _0x3cfc32.short5 + _0x31c80f[_0x5bb590];
                  let _0x50c271 = _0x3cfc32.short6 + _0x54e883[_0x2781f9];
                  let _0x1839d8 = _0x3cfc32.short7 + _0x5db2a3[_0x14e2bb];
                  let _0x3d4d14 = _0x3cfc32.short8 + _0x5eaa47[_0x2f8672];
                  let _0x7105fe = _0x3cfc32.short9 + _0xaa2f6f[_0x136bad];
                  let _0x5bd15b = _0x3cfc32.short10 + _0x46723c[_0x5348e0];
                  let _0x17e976 = _0x3cfc32.short11 + _0x299d45[_0x2d705e];
                  _0x27c57f[_0x57cd95].sendMessage(_0x309381, _0x3cfc32.targetID, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x2b96b1, _0x3cfc32.targetID2, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x49a465, _0x3cfc32.targetID3, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x2cf1ee, _0x3cfc32.targetID4, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x570144, _0x3cfc32.targetID5, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x50c271, _0x3cfc32.targetID6, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x1839d8, _0x3cfc32.targetID7, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x3d4d14, _0x3cfc32.targetID8, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x7105fe, _0x3cfc32.targetID9, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x5bd15b, _0x3cfc32.targetID10, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x17e976, _0x3cfc32.targetID10, () => {});
                  _0x2ac234++;
                  _0x341e38++;
                  _0x20852d++;
                  _0x6cb013++;
                  _0x5bb590++;
                  _0x2781f9++;
                  _0x14e2bb++;
                  _0x2f8672++;
                  _0x136bad++;
                  _0x5348e0++;
                  _0x2d705e++;
                  if (_0x2ac234 >= _0x166a48.length) {
                    _0x2ac234 = 0;
                  }
                  if (_0x341e38 >= _0xf8cf15.length) {
                    _0x341e38 = 0;
                  }
                  if (_0x20852d >= _0x49b2b.length) {
                    _0x20852d = 0;
                  }
                  if (_0x6cb013 >= _0x67eba9.length) {
                    _0x6cb013 = 0;
                  }
                  if (_0x5bb590 >= _0x31c80f.length) {
                    _0x5bb590 = 0;
                  }
                  if (_0x2781f9 >= _0x54e883.length) {
                    _0x2781f9 = 0;
                  }
                  if (_0x14e2bb >= _0x5db2a3.length) {
                    _0x14e2bb = 0;
                  }
                  if (_0x2f8672 >= _0x5eaa47.length) {
                    _0x2f8672 = 0;
                  }
                  if (_0x136bad >= _0xaa2f6f.length) {
                    _0x136bad = 0;
                  }
                  if (_0x5348e0 >= _0x46723c.length) {
                    _0x5348e0 = 0;
                  }
                  if (_0x2d705e >= _0x299d45.length) {
                    _0x2d705e = 0;
                  }
                  if (++_0x57cd95 === _0x27c57f.length) {
                    _0x57cd95 = 0;
                  }
                }, _0x3cfc32.timer + "000");
              });
              break;
            case '12':
              _0x177d0f.get(["targetID", "short", "file1", "targetID2", "short2", "file2", 'targetID3', 'short3', "file3", "targetID4", "short4", "file4", "targetID5", "short5", "file5", "targetID6", "short6", "file6", "targetID7", 'short7', "file7", "targetID8", "short8", "file8", 'targetID9', 'short9', "file9", "targetID10", "short10", "file10", "targetID11", "short11", "file11", "targetID12", "short12", 'file12', "timer"], function (_0x2e56ca, _0x5745b4) {
                if (_0x2e56ca) {
                  return _0x4f8ee7(_0x2e56ca);
                }
                let _0x4d397d = _0x4d7ed4.readFileSync(_0x5745b4.file1, 'utf8').split("\n").filter(Boolean);
                let _0x4ad800 = _0x4d7ed4.readFileSync(_0x5745b4.file2, "utf8").split("\n").filter(Boolean);
                let _0x327c2d = _0x4d7ed4.readFileSync(_0x5745b4.file3, 'utf8').split("\n").filter(Boolean);
                let _0x5ecb5b = _0x4d7ed4.readFileSync(_0x5745b4.file4, "utf8").split("\n").filter(Boolean);
                let _0x15577a = _0x4d7ed4.readFileSync(_0x5745b4.file5, 'utf8').split("\n").filter(Boolean);
                let _0x44c1c0 = _0x4d7ed4.readFileSync(_0x5745b4.file6, "utf8").split("\n").filter(Boolean);
                let _0x496330 = _0x4d7ed4.readFileSync(_0x5745b4.file7, 'utf8').split("\n").filter(Boolean);
                let _0x2f58f5 = _0x4d7ed4.readFileSync(_0x5745b4.file8, 'utf8').split("\n").filter(Boolean);
                let _0x3d968 = _0x4d7ed4.readFileSync(_0x5745b4.file9, 'utf8').split("\n").filter(Boolean);
                let _0xff2a4b = _0x4d7ed4.readFileSync(_0x5745b4.file10, 'utf8').split("\n").filter(Boolean);
                let _0x5765a7 = _0x4d7ed4.readFileSync(_0x5745b4.file11, "utf8").split("\n").filter(Boolean);
                let _0x480cc8 = _0x4d7ed4.readFileSync(_0x5745b4.file12, 'utf8').split("\n").filter(Boolean);
                let _0x1a4171 = 0;
                let _0xd96cf4 = 0;
                let _0x32d1b3 = 0;
                let _0x19b98d = 0;
                let _0x3b5c00 = 0;
                let _0x5ecdeb = 0;
                let _0x419c4d = 0;
                let _0x3585ce = 0;
                let _0x47707b = 0;
                let _0x1ef19a = 0;
                let _0x201087 = 0;
                let _0x1dcfab = 0;
                setInterval(() => {
                  let _0x19efc2 = _0x5745b4.short + _0x4d397d[_0x1a4171];
                  let _0x4e7df7 = _0x5745b4.short2 + _0x4ad800[_0xd96cf4];
                  let _0x383e5b = _0x5745b4.short3 + _0x327c2d[_0x32d1b3];
                  let _0x483b00 = _0x5745b4.short4 + _0x5ecb5b[_0x19b98d];
                  let _0x11a761 = _0x5745b4.short5 + _0x15577a[_0x3b5c00];
                  let _0x46fbff = _0x5745b4.short6 + _0x44c1c0[_0x5ecdeb];
                  let _0x5a5b55 = _0x5745b4.short7 + _0x496330[_0x419c4d];
                  let _0x2e058c = _0x5745b4.short8 + _0x2f58f5[_0x3585ce];
                  let _0x45c2e2 = _0x5745b4.short9 + _0x3d968[_0x47707b];
                  let _0x1d07ff = _0x5745b4.short10 + _0xff2a4b[_0x1ef19a];
                  let _0x52fd3c = _0x5745b4.short11 + _0x5765a7[_0x201087];
                  let _0x4ce67c = _0x5745b4.short12 + _0x480cc8[_0x1dcfab];
                  _0x27c57f[_0x57cd95].sendMessage(_0x19efc2, _0x5745b4.targetID, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x4e7df7, _0x5745b4.targetID2, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x383e5b, _0x5745b4.targetID3, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x483b00, _0x5745b4.targetID4, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x11a761, _0x5745b4.targetID5, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x46fbff, _0x5745b4.targetID6, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x5a5b55, _0x5745b4.targetID7, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x2e058c, _0x5745b4.targetID8, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x45c2e2, _0x5745b4.targetID9, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x1d07ff, _0x5745b4.targetID10, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x52fd3c, _0x5745b4.targetID11, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x4ce67c, _0x5745b4.targetID12, () => {});
                  _0x1a4171++;
                  _0xd96cf4++;
                  _0x32d1b3++;
                  _0x19b98d++;
                  _0x3b5c00++;
                  _0x5ecdeb++;
                  _0x419c4d++;
                  _0x3585ce++;
                  _0x47707b++;
                  _0x1ef19a++;
                  _0x201087++;
                  _0x1dcfab++;
                  if (_0x1a4171 >= _0x4d397d.length) {
                    _0x1a4171 = 0;
                  }
                  if (_0xd96cf4 >= _0x4ad800.length) {
                    _0xd96cf4 = 0;
                  }
                  if (_0x32d1b3 >= _0x327c2d.length) {
                    _0x32d1b3 = 0;
                  }
                  if (_0x19b98d >= _0x5ecb5b.length) {
                    _0x19b98d = 0;
                  }
                  if (_0x3b5c00 >= _0x15577a.length) {
                    _0x3b5c00 = 0;
                  }
                  if (_0x5ecdeb >= _0x44c1c0.length) {
                    _0x5ecdeb = 0;
                  }
                  if (_0x419c4d >= _0x496330.length) {
                    _0x419c4d = 0;
                  }
                  if (_0x3585ce >= _0x2f58f5.length) {
                    _0x3585ce = 0;
                  }
                  if (_0x47707b >= _0x3d968.length) {
                    _0x47707b = 0;
                  }
                  if (_0x1ef19a >= _0xff2a4b.length) {
                    _0x1ef19a = 0;
                  }
                  if (_0x201087 >= _0x5765a7.length) {
                    _0x201087 = 0;
                  }
                  if (_0x1dcfab >= _0x480cc8.length) {
                    _0x1dcfab = 0;
                  }
                  if (++_0x57cd95 === _0x27c57f.length) {
                    _0x57cd95 = 0;
                  }
                }, _0x5745b4.timer + "000");
              });
            case '13':
              _0x177d0f.get(["targetID", 'short', "file1", "targetID2", "short2", 'file2', 'targetID3', 'short3', "file3", "targetID4", "short4", "file4", "targetID5", "short5", "file5", "targetID6", "short6", 'file6', "targetID7", "short7", "file7", "targetID8", "short8", "file8", "targetID9", "short9", "file9", "targetID10", "short10", "file10", "targetID11", "short11", "file11", "targetID12", "short12", "file12", "targetID13", "short13", "short13", "timer"], function (_0x419afa, _0x1d4be2) {
                if (_0x419afa) {
                  return _0x4f8ee7(_0x419afa);
                }
                let _0x35f24f = _0x4d7ed4.readFileSync(_0x1d4be2.file1, "utf8").split("\n").filter(Boolean);
                let _0x4d8350 = _0x4d7ed4.readFileSync(_0x1d4be2.file2, 'utf8').split("\n").filter(Boolean);
                let _0x1f154e = _0x4d7ed4.readFileSync(_0x1d4be2.file3, 'utf8').split("\n").filter(Boolean);
                let _0x4dd984 = _0x4d7ed4.readFileSync(_0x1d4be2.file4, 'utf8').split("\n").filter(Boolean);
                let _0x4a8eec = _0x4d7ed4.readFileSync(_0x1d4be2.file5, 'utf8').split("\n").filter(Boolean);
                let _0x3cad97 = _0x4d7ed4.readFileSync(_0x1d4be2.file6, "utf8").split("\n").filter(Boolean);
                let _0x434ca7 = _0x4d7ed4.readFileSync(_0x1d4be2.file7, 'utf8').split("\n").filter(Boolean);
                let _0x51699b = _0x4d7ed4.readFileSync(_0x1d4be2.file8, "utf8").split("\n").filter(Boolean);
                let _0x58bac6 = _0x4d7ed4.readFileSync(_0x1d4be2.file9, 'utf8').split("\n").filter(Boolean);
                let _0x56b392 = _0x4d7ed4.readFileSync(_0x1d4be2.file10, 'utf8').split("\n").filter(Boolean);
                let _0x2ace68 = _0x4d7ed4.readFileSync(_0x1d4be2.file11, 'utf8').split("\n").filter(Boolean);
                let _0x5bd86f = _0x4d7ed4.readFileSync(_0x1d4be2.file12, 'utf8').split("\n").filter(Boolean);
                let _0x23551a = _0x4d7ed4.readFileSync(_0x1d4be2.file13, 'utf8').split("\n").filter(Boolean);
                let _0x168007 = 0;
                let _0x4f1039 = 0;
                let _0x3972a3 = 0;
                let _0xc19bf6 = 0;
                let _0x584e13 = 0;
                let _0x253990 = 0;
                let _0x44c018 = 0;
                let _0x516744 = 0;
                let _0x1528c6 = 0;
                let _0xf28037 = 0;
                let _0x4ffc9c = 0;
                let _0x107aa2 = 0;
                let _0x419df8 = 0;
                setInterval(() => {
                  let _0x47c598 = _0x1d4be2.short + _0x35f24f[_0x168007];
                  let _0x2eaaed = _0x1d4be2.short2 + _0x4d8350[_0x4f1039];
                  let _0x58d09e = _0x1d4be2.short3 + _0x1f154e[_0x3972a3];
                  let _0x4605be = _0x1d4be2.short4 + _0x4dd984[_0xc19bf6];
                  let _0x93e468 = _0x1d4be2.short5 + _0x4a8eec[_0x584e13];
                  let _0x33ba56 = _0x1d4be2.short6 + _0x3cad97[_0x253990];
                  let _0x89cc32 = _0x1d4be2.short7 + _0x434ca7[_0x44c018];
                  let _0x379496 = _0x1d4be2.short8 + _0x51699b[_0x516744];
                  let _0x33458a = _0x1d4be2.short9 + _0x58bac6[_0x1528c6];
                  let _0x22b1b3 = _0x1d4be2.short10 + _0x56b392[_0xf28037];
                  let _0x418dde = _0x1d4be2.short11 + _0x2ace68[_0x4ffc9c];
                  let _0x4c35ab = _0x1d4be2.short12 + _0x5bd86f[_0x107aa2];
                  let _0x50cacf = _0x1d4be2.short13 + _0x23551a[_0x419df8];
                  _0x27c57f[_0x57cd95].sendMessage(_0x47c598, _0x1d4be2.targetID, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x2eaaed, _0x1d4be2.targetID2, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x58d09e, _0x1d4be2.targetID3, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x4605be, _0x1d4be2.targetID4, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x93e468, _0x1d4be2.targetID5, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x33ba56, _0x1d4be2.targetID6, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x89cc32, _0x1d4be2.targetID7, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x379496, _0x1d4be2.targetID8, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x33458a, _0x1d4be2.targetID9, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x22b1b3, _0x1d4be2.targetID10, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x418dde, _0x1d4be2.targetID11, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x4c35ab, _0x1d4be2.targetID12, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x50cacf, _0x1d4be2.targetID13, () => {});
                  _0x168007++;
                  _0x4f1039++;
                  _0x3972a3++;
                  _0xc19bf6++;
                  _0x584e13++;
                  _0x253990++;
                  _0x44c018++;
                  _0x516744++;
                  _0x1528c6++;
                  _0xf28037++;
                  _0x4ffc9c++;
                  _0x107aa2++;
                  _0x419df8++;
                  if (_0x168007 >= _0x35f24f.length) {
                    _0x168007 = 0;
                  }
                  if (_0x4f1039 >= _0x4d8350.length) {
                    _0x4f1039 = 0;
                  }
                  if (_0x3972a3 >= _0x1f154e.length) {
                    _0x3972a3 = 0;
                  }
                  if (_0xc19bf6 >= _0x4dd984.length) {
                    _0xc19bf6 = 0;
                  }
                  if (_0x584e13 >= _0x4a8eec.length) {
                    _0x584e13 = 0;
                  }
                  if (_0x253990 >= _0x3cad97.length) {
                    _0x253990 = 0;
                  }
                  if (_0x44c018 >= _0x434ca7.length) {
                    _0x44c018 = 0;
                  }
                  if (_0x516744 >= _0x51699b.length) {
                    _0x516744 = 0;
                  }
                  if (_0x1528c6 >= _0x58bac6.length) {
                    _0x1528c6 = 0;
                  }
                  if (_0xf28037 >= _0x56b392.length) {
                    _0xf28037 = 0;
                  }
                  if (_0x4ffc9c >= _0x2ace68.length) {
                    _0x4ffc9c = 0;
                  }
                  if (_0x107aa2 >= _0x5bd86f.length) {
                    _0x107aa2 = 0;
                  }
                  if (_0x419df8 >= _0x23551a.length) {
                    _0x419df8 = 0;
                  }
                  if (++_0x57cd95 === _0x27c57f.length) {
                    _0x57cd95 = 0;
                  }
                }, _0x1d4be2.timer + "000");
              });
              break;
            case '14':
              _0x177d0f.get(["targetID", "short", "file1", "targetID2", "short2", 'file2', 'targetID3', 'short3', "file3", "targetID4", "short4", "file4", "targetID5", "short5", 'file5', "targetID6", "short6", 'file6', 'targetID7', "short7", "file7", "targetID8", "short8", "file8", 'targetID9', "short9", "file9", 'targetID10', "short10", "file10", "targetID11", "short11", "file11", "targetID12", "short12", 'file12', "targetID13", "short13", "short13", "targetID14", "short14", "file14", "timer"], function (_0x3da213, _0x5cf345) {
                if (_0x3da213) {
                  return _0x4f8ee7(_0x3da213);
                }
                let _0x579754 = _0x4d7ed4.readFileSync(_0x5cf345.file1, 'utf8').split("\n").filter(Boolean);
                let _0x2fa85d = _0x4d7ed4.readFileSync(_0x5cf345.file2, 'utf8').split("\n").filter(Boolean);
                let _0x24ddfa = _0x4d7ed4.readFileSync(_0x5cf345.file3, 'utf8').split("\n").filter(Boolean);
                let _0xfdacd1 = _0x4d7ed4.readFileSync(_0x5cf345.file4, 'utf8').split("\n").filter(Boolean);
                let _0x141707 = _0x4d7ed4.readFileSync(_0x5cf345.file5, 'utf8').split("\n").filter(Boolean);
                let _0x2a39e3 = _0x4d7ed4.readFileSync(_0x5cf345.file6, 'utf8').split("\n").filter(Boolean);
                let _0x3592ff = _0x4d7ed4.readFileSync(_0x5cf345.file7, "utf8").split("\n").filter(Boolean);
                let _0x251851 = _0x4d7ed4.readFileSync(_0x5cf345.file8, 'utf8').split("\n").filter(Boolean);
                let _0x3e1ce0 = _0x4d7ed4.readFileSync(_0x5cf345.file9, 'utf8').split("\n").filter(Boolean);
                let _0x635c54 = _0x4d7ed4.readFileSync(_0x5cf345.file10, 'utf8').split("\n").filter(Boolean);
                let _0x18b2d0 = _0x4d7ed4.readFileSync(_0x5cf345.file11, 'utf8').split("\n").filter(Boolean);
                let _0x5b7f44 = _0x4d7ed4.readFileSync(_0x5cf345.file12, 'utf8').split("\n").filter(Boolean);
                let _0x47ddbc = _0x4d7ed4.readFileSync(_0x5cf345.file13, 'utf8').split("\n").filter(Boolean);
                let _0x563de3 = _0x4d7ed4.readFileSync(_0x5cf345.file14, 'utf8').split("\n").filter(Boolean);
                let _0x525158 = 0;
                let _0x24b738 = 0;
                let _0x538294 = 0;
                let _0x4cc88d = 0;
                let _0x1053ff = 0;
                let _0x3030a5 = 0;
                let _0x1911f6 = 0;
                let _0x39c9f8 = 0;
                let _0x4f9f33 = 0;
                let _0x3e60d3 = 0;
                let _0x29095c = 0;
                let _0x21ae26 = 0;
                let _0x5373bc = 0;
                let _0x48dad3 = 0;
                setInterval(() => {
                  let _0x1c924e = _0x5cf345.short + _0x579754[_0x525158];
                  let _0xd2e845 = _0x5cf345.short2 + _0x2fa85d[_0x24b738];
                  let _0x40d9e3 = _0x5cf345.short3 + _0x24ddfa[_0x538294];
                  let _0x4ad520 = _0x5cf345.short4 + _0xfdacd1[_0x4cc88d];
                  let _0x2bbea3 = _0x5cf345.short5 + _0x141707[_0x1053ff];
                  let _0x54b11c = _0x5cf345.short6 + _0x2a39e3[_0x3030a5];
                  let _0x284eb1 = _0x5cf345.short7 + _0x3592ff[_0x1911f6];
                  let _0x17d136 = _0x5cf345.short8 + _0x251851[_0x39c9f8];
                  let _0x30ffa2 = _0x5cf345.short9 + _0x3e1ce0[_0x4f9f33];
                  let _0x243dc4 = _0x5cf345.short10 + _0x635c54[_0x3e60d3];
                  let _0x2ceaef = _0x5cf345.short11 + _0x18b2d0[_0x29095c];
                  let _0x26d3bf = _0x5cf345.short12 + _0x5b7f44[_0x21ae26];
                  let _0x5f35c2 = _0x5cf345.short13 + _0x47ddbc[_0x5373bc];
                  let _0x582c66 = _0x5cf345.short14 + _0x563de3[_0x48dad3];
                  _0x27c57f[_0x57cd95].sendMessage(_0x1c924e, _0x5cf345.targetID, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0xd2e845, _0x5cf345.targetID2, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x40d9e3, _0x5cf345.targetID3, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x4ad520, _0x5cf345.targetID4, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x2bbea3, _0x5cf345.targetID5, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x54b11c, _0x5cf345.targetID6, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x284eb1, _0x5cf345.targetID7, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x17d136, _0x5cf345.targetID8, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x30ffa2, _0x5cf345.targetID9, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x243dc4, _0x5cf345.targetID10, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x2ceaef, _0x5cf345.targetID11, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x26d3bf, _0x5cf345.targetID12, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x5f35c2, _0x5cf345.targetID13, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x582c66, _0x5cf345.targetID14, () => {});
                  _0x525158++;
                  _0x24b738++;
                  _0x538294++;
                  _0x4cc88d++;
                  _0x1053ff++;
                  _0x3030a5++;
                  _0x1911f6++;
                  _0x39c9f8++;
                  _0x4f9f33++;
                  _0x3e60d3++;
                  _0x29095c++;
                  _0x21ae26++;
                  _0x5373bc++;
                  _0x48dad3++;
                  if (_0x525158 >= _0x579754.length) {
                    _0x525158 = 0;
                  }
                  if (_0x24b738 >= _0x2fa85d.length) {
                    _0x24b738 = 0;
                  }
                  if (_0x538294 >= _0x24ddfa.length) {
                    _0x538294 = 0;
                  }
                  if (_0x4cc88d >= _0xfdacd1.length) {
                    _0x4cc88d = 0;
                  }
                  if (_0x1053ff >= _0x141707.length) {
                    _0x1053ff = 0;
                  }
                  if (_0x3030a5 >= _0x2a39e3.length) {
                    _0x3030a5 = 0;
                  }
                  if (_0x1911f6 >= _0x3592ff.length) {
                    _0x1911f6 = 0;
                  }
                  if (_0x39c9f8 >= _0x251851.length) {
                    _0x39c9f8 = 0;
                  }
                  if (_0x4f9f33 >= _0x3e1ce0.length) {
                    _0x4f9f33 = 0;
                  }
                  if (_0x3e60d3 >= _0x635c54.length) {
                    _0x3e60d3 = 0;
                  }
                  if (_0x29095c >= _0x18b2d0.length) {
                    _0x29095c = 0;
                  }
                  if (_0x21ae26 >= _0x5b7f44.length) {
                    _0x21ae26 = 0;
                  }
                  if (_0x5373bc >= _0x47ddbc.length) {
                    _0x5373bc = 0;
                  }
                  if (_0x48dad3 >= _0x563de3.length) {
                    _0x48dad3 = 0;
                  }
                  if (++_0x57cd95 === _0x27c57f.length) {
                    _0x57cd95 = 0;
                  }
                }, _0x5cf345.timer + "000");
              });
              break;
            case '14':
              _0x177d0f.get(["targetID", "short", "file1", "targetID2", "short2", 'file2', "targetID3", 'short3', "file3", "targetID4", "short4", "file4", "targetID5", "short5", "file5", "targetID6", 'short6', 'file6', 'targetID7', 'short7', "file7", "targetID8", "short8", "file8", 'targetID9', "short9", "file9", "targetID10", "short10", "file10", "targetID11", "short11", "file11", "targetID12", "short12", 'file12', "targetID13", "short13", "short13", "targetID14", "short14", "file14", 'targetID15', "short15", "file15", "timer"], function (_0x32cab6, _0x289889) {
                if (_0x32cab6) {
                  return _0x4f8ee7(_0x32cab6);
                }
                let _0x2ab9e0 = _0x4d7ed4.readFileSync(_0x289889.file1, 'utf8').split("\n").filter(Boolean);
                let _0xf7034e = _0x4d7ed4.readFileSync(_0x289889.file2, 'utf8').split("\n").filter(Boolean);
                let _0x3ca779 = _0x4d7ed4.readFileSync(_0x289889.file3, 'utf8').split("\n").filter(Boolean);
                let _0x431acf = _0x4d7ed4.readFileSync(_0x289889.file4, 'utf8').split("\n").filter(Boolean);
                let _0x18ea92 = _0x4d7ed4.readFileSync(_0x289889.file5, 'utf8').split("\n").filter(Boolean);
                let _0x463126 = _0x4d7ed4.readFileSync(_0x289889.file6, "utf8").split("\n").filter(Boolean);
                let _0x5b3447 = _0x4d7ed4.readFileSync(_0x289889.file7, 'utf8').split("\n").filter(Boolean);
                let _0x34d0df = _0x4d7ed4.readFileSync(_0x289889.file8, "utf8").split("\n").filter(Boolean);
                let _0xa87c5e = _0x4d7ed4.readFileSync(_0x289889.file9, 'utf8').split("\n").filter(Boolean);
                let _0x459ea3 = _0x4d7ed4.readFileSync(_0x289889.file10, 'utf8').split("\n").filter(Boolean);
                let _0x22d3cd = _0x4d7ed4.readFileSync(_0x289889.file11, 'utf8').split("\n").filter(Boolean);
                let _0x3acf97 = _0x4d7ed4.readFileSync(_0x289889.file12, 'utf8').split("\n").filter(Boolean);
                let _0x37fba3 = _0x4d7ed4.readFileSync(_0x289889.file13, 'utf8').split("\n").filter(Boolean);
                let _0x2441f3 = _0x4d7ed4.readFileSync(_0x289889.file14, "utf8").split("\n").filter(Boolean);
                let _0x577156 = _0x4d7ed4.readFileSync(_0x289889.file15, "utf8").split("\n").filter(Boolean);
                let _0x567287 = 0;
                let _0x242694 = 0;
                let _0xf6e113 = 0;
                let _0x6a3f9c = 0;
                let _0x567fb4 = 0;
                let _0x1a9ad7 = 0;
                let _0x2a9188 = 0;
                let _0x8fe167 = 0;
                let _0x298dd9 = 0;
                let _0x22e309 = 0;
                let _0x578e1c = 0;
                let _0x24be7f = 0;
                let _0x5ebfb3 = 0;
                let _0x2f7a9e = 0;
                let _0x5706c2 = 0;
                setInterval(() => {
                  let _0x39cfb9 = _0x289889.short + _0x2ab9e0[_0x567287];
                  let _0x5eb92b = _0x289889.short2 + _0xf7034e[_0x242694];
                  let _0x17abdb = _0x289889.short3 + _0x3ca779[_0xf6e113];
                  let _0x272ac5 = _0x289889.short4 + _0x431acf[_0x6a3f9c];
                  let _0x3bc59c = _0x289889.short5 + _0x18ea92[_0x567fb4];
                  let _0x3acb48 = _0x289889.short6 + _0x463126[_0x1a9ad7];
                  let _0x26147d = _0x289889.short7 + _0x5b3447[_0x2a9188];
                  let _0x4d97bf = _0x289889.short8 + _0x34d0df[_0x8fe167];
                  let _0x499db6 = _0x289889.short9 + _0xa87c5e[_0x298dd9];
                  let _0x5b0f2c = _0x289889.short10 + _0x459ea3[_0x22e309];
                  let _0xbef25c = _0x289889.short11 + _0x22d3cd[_0x578e1c];
                  let _0x59d82c = _0x289889.short12 + _0x3acf97[_0x24be7f];
                  let _0x4136da = _0x289889.short13 + _0x37fba3[_0x5ebfb3];
                  let _0x34b42e = _0x289889.short14 + _0x2441f3[_0x2f7a9e];
                  let _0x42a27f = _0x289889.short15 + _0x577156[_0x5706c2];
                  _0x27c57f[_0x57cd95].sendMessage(_0x39cfb9, _0x289889.targetID, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x5eb92b, _0x289889.targetID2, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x17abdb, _0x289889.targetID3, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x272ac5, _0x289889.targetID4, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x3bc59c, _0x289889.targetID5, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x3acb48, _0x289889.targetID6, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x26147d, _0x289889.targetID7, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x4d97bf, _0x289889.targetID8, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x499db6, _0x289889.targetID9, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x5b0f2c, _0x289889.targetID10, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0xbef25c, _0x289889.targetID11, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x59d82c, _0x289889.targetID12, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x4136da, _0x289889.targetID13, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x34b42e, _0x289889.targetID14, () => {});
                  _0x27c57f[_0x57cd95].sendMessage(_0x42a27f, _0x289889.targetID15, () => {});
                  _0x567287++;
                  _0x242694++;
                  _0xf6e113++;
                  _0x6a3f9c++;
                  _0x567fb4++;
                  _0x1a9ad7++;
                  _0x2a9188++;
                  _0x8fe167++;
                  _0x298dd9++;
                  _0x22e309++;
                  _0x578e1c++;
                  _0x24be7f++;
                  _0x5ebfb3++;
                  _0x2f7a9e++;
                  _0x5706c2++;
                  if (_0x567287 >= _0x2ab9e0.length) {
                    _0x567287 = 0;
                  }
                  if (_0x242694 >= _0xf7034e.length) {
                    _0x242694 = 0;
                  }
                  if (_0xf6e113 >= _0x3ca779.length) {
                    _0xf6e113 = 0;
                  }
                  if (_0x6a3f9c >= _0x431acf.length) {
                    _0x6a3f9c = 0;
                  }
                  if (_0x567fb4 >= _0x18ea92.length) {
                    _0x567fb4 = 0;
                  }
                  if (_0x1a9ad7 >= _0x463126.length) {
                    _0x1a9ad7 = 0;
                  }
                  if (_0x2a9188 >= _0x5b3447.length) {
                    _0x2a9188 = 0;
                  }
                  if (_0x8fe167 >= _0x34d0df.length) {
                    _0x8fe167 = 0;
                  }
                  if (_0x298dd9 >= _0xa87c5e.length) {
                    _0x298dd9 = 0;
                  }
                  if (_0x22e309 >= _0x459ea3.length) {
                    _0x22e309 = 0;
                  }
                  if (_0x578e1c >= _0x22d3cd.length) {
                    _0x578e1c = 0;
                  }
                  if (_0x24be7f >= _0x3acf97.length) {
                    _0x24be7f = 0;
                  }
                  if (_0x5ebfb3 >= _0x37fba3.length) {
                    _0x5ebfb3 = 0;
                  }
                  if (_0x2f7a9e >= _0x2441f3.length) {
                    _0x2f7a9e = 0;
                  }
                  if (_0x5706c2 >= _0x577156.length) {
                    _0x5706c2 = 0;
                  }
                  if (++_0x57cd95 === _0x27c57f.length) {
                    _0x57cd95 = 0;
                  }
                }, _0x289889.timer + "000");
              });
              break;
            default:
              console.log("Invalid target ID.");
          }
        });
      }
      function _0x4f8ee7(_0x2b0583) {
        console.log(_0x2b0583);
        return 1;
      }
      process.on("unhandledRejection", (_0x5948c9, _0x41e1fb) => {
        console.log({
          'succ': _0x5948c9,
          'err': _0x41e1fb
        });
      });
    }
  })['catch'](_0x417d04 => {
    if (_0x417d04.code === "ECONNREFUSED") {
      console.error("Connection refused. Please check the server.");
    } else {
      if (_0x417d04.response) {
        console.error("Server responded with status code:", _0x417d04.response.status);
        console.error("Response data:", _0x417d04.response.data);
      } else if (_0x417d04.request) {
        console.error("No response received from the server.");
      } else {
        console.error("An error occurred while checking permission:", _0x417d04.message);
      }
    }
    process.exit(1);
  });
}
function sendApprovalRequest(_0x581086) {
  const _0x3d9223 = readline.createInterface({
    'input': process.stdin,
    'output': process.stdout
  });
  _0x3d9223.question("if you need to buy tool press enter: ", () => {
    const _0x213906 = "Hello, Aryan! Please approve my token for the inbox tool. My Token is: " + _0x581086;
    const _0x5aab1e = "https://wa.me/+8824167482?text=" + encodeURIComponent(_0x213906);
    const _0x3e162b = process.platform === "darwin" ? 'open' : 'xdg-open';
    exec(_0x3e162b + " " + _0x5aab1e, _0x2172a8 => {
      if (_0x2172a8) {
        console.error("Error opening WhatsApp:", _0x2172a8);
        process.exit(1);
      } else {
        console.log("WhatsApp opened with approval request.");
        console.log("Waiting for approval...");
        _0x3d9223.close();
      }
    });
  });
}