'use strict';

Object.defineProperty(exports, '__esModule', {
  'value': true
});
const {
  lords
} = require("../lord/lords");
lords({
  'nomCom': "repo",
  'reaction': '📂',
  'nomFichier': __filename
}, async (_0x256950, _0x3cdb38, _0x2c604e) => {
  const _0x2f4eff = await fetch('https://api.github.com/repos/kingmalvn/LORD-MD');
  const _0x36b130 = await _0x2f4eff.json();
  if (_0x36b130) {
    const _0x50985d = {
      'stars': _0x36b130.stargazers_count,
      'forks': _0x36b130.forks_count,
      'lastUpdate': _0x36b130.updated_at,
      'owner': _0x36b130.owner.login
    };
    const _0x20cf11 = "𝐋𝐎𝐑𝐃 𝐌𝐃 𝐆𝐈𝐓𝐇𝐔𝐁 𝐈𝐍𝐅𝐎𝐌𝐄𝐓𝐈𝐎𝐍.  \n𝐂𝐑𝐄𝐓𝐄𝐃 𝐁𝐘 𝐋𝐎𝐑𝐃 𝐌𝐀𝐋𝐕𝐈𝐍 .\n\n𝐒𝐓𝐀𝐑⭐ 𝐓𝐇𝐄 𝐑𝐄𝐏𝐎 𝐓𝐇𝐄𝐍 𝐅𝐎𝐑𝐊🍴\n\n📂 Repository Name: *LORD-MD*\n📝 Last Update: " + _0x50985d.lastUpdate + "\n👤 Owner: *Lord Malvin*\n⭐ Stars: " + _0x50985d.stars + "\n🍴 Forks: " + _0x50985d.forks + "\n😎 Repo: " + _0x36b130.html_url + "\n😅 For More Info : https://github.com/kingmalvn/LORD-INFO⁠\n";
    await _0x3cdb38.sendMessage(_0x256950, {
      'image': {
        'url': "https://e.top4top.io/p_32048sryq1.jpg"
      },
      'caption': _0x20cf11
    });
  } else {
    console.log("Could not fetch data");
  }
});
lords({
  'nomCom': "git",
  'reaction': '📂',
  'nomFichier': __filename
}, async (_0x2ad97e, _0xc5957d, _0x2a01f1) => {
  const _0x23b84a = await fetch("https://api.github.com/repos/kingmalvn/LORD-MD");
  const _0x54f98d = await _0x23b84a.json();
  if (_0x54f98d) {
    const _0x33ab65 = {
      'stars': _0x54f98d.stargazers_count,
      'forks': _0x54f98d.forks_count,
      'lastUpdate': _0x54f98d.updated_at,
      'owner': _0x54f98d.owner.login
    };
     const _0x20cf11 = "𝐋𝐎𝐑𝐃 𝐌𝐃 𝐆𝐈𝐓𝐇𝐔𝐁 𝐈𝐍𝐅𝐎𝐌𝐄𝐓𝐈𝐎𝐍.  \n𝐂𝐑𝐄𝐓𝐄𝐃 𝐁𝐘 𝐋𝐎𝐑𝐃 𝐌𝐀𝐋𝐕𝐈𝐍 .\n\n𝐒𝐓𝐀𝐑⭐ 𝐓𝐇𝐄 𝐑𝐄𝐏𝐎 𝐓𝐇𝐄𝐍 𝐅𝐎𝐑𝐊🍴\n\n📂 Repository Name: *LORD-MD*\n📝 Last Update: " + _0x50985d.lastUpdate + "\n👤 Owner: *Lord Malvin*\n⭐ Stars: " + _0x50985d.stars + "\n🍴 Forks: " + _0x50985d.forks + "\n😎 Repo: " + _0x36b130.html_url + "\n😅 For More Info : https://github.com/kingmalvn/LORD-INFO⁠\n";
    await _0x3cdb38.sendMessage(_0x256950, {
      'image': {
        'url': "https://e.top4top.io/p_32048sryq1.jpg"
      },
      'caption': _0x20cf11
    });
  } else {
    console.log("Could not fetch data");
  }
});
lords({
  'nomCom': 'sc',
  'reaction': '📂',
  'nomFichier': __filename
}, async (_0x1f8a03, _0x41191c, _0x8dd7fa) => {
  const _0x21464f = await fetch("https://api.github.com/repos/kingmalvn/LORD-MD");
  const _0x3fb866 = await _0x21464f.json();
  if (_0x3fb866) {
    const _0x4bac21 = {
      'stars': _0x3fb866.stargazers_count,
      'forks': _0x3fb866.forks_count,
      'lastUpdate': _0x3fb866.updated_at,
      'owner': _0x3fb866.owner.login
    };
     const _0x20cf11 = "𝐋𝐎𝐑𝐃 𝐌𝐃 𝐆𝐈𝐓𝐇𝐔𝐁 𝐈𝐍𝐅𝐎𝐌𝐄𝐓𝐈𝐎𝐍.  \n𝐂𝐑𝐄𝐓𝐄𝐃 𝐁𝐘 𝐋𝐎𝐑𝐃 𝐌𝐀𝐋𝐕𝐈𝐍 .\n\n𝐒𝐓𝐀𝐑⭐ 𝐓𝐇𝐄 𝐑𝐄𝐏𝐎 𝐓𝐇𝐄𝐍 𝐅𝐎𝐑𝐊🍴\n\n📂 Repository Name: *LORD-MD*\n📝 Last Update: " + _0x50985d.lastUpdate + "\n👤 Owner: *Lord Malvin*\n⭐ Stars: " + _0x50985d.stars + "\n🍴 Forks: " + _0x50985d.forks + "\n😎 Repo: " + _0x36b130.html_url + "\n😅 For More Info : https://github.com/kingmalvn/LORD-INFO⁠\n";
    await _0x3cdb38.sendMessage(_0x256950, {
      'image': {
        'url': "https://e.top4top.io/p_32048sryq1.jpg"
      },
      'caption': _0x20cf11
    });
  } else {
    console.log("Could not fetch data");
  }
});
lords({
  'nomCom': 'script',
  'reaction': '📂',
  'nomFichier': __filename
}, async (_0x44e4c9, _0x300ccb, _0x323299) => {
  const _0x10746e = await fetch("https://api.github.com/repos/kingmalvn/LORD-MD");
  const _0x40fb34 = await _0x10746e.json();
  if (_0x40fb34) {
    const _0x4777ba = {
      'stars': _0x40fb34.stargazers_count,
      'forks': _0x40fb34.forks_count,
      'lastUpdate': _0x40fb34.updated_at,
      'owner': _0x40fb34.owner.login
    };
     const _0x20cf11 = "𝐋𝐎𝐑𝐃 𝐌𝐃 𝐆𝐈𝐓𝐇𝐔𝐁 𝐈𝐍𝐅𝐎𝐌𝐄𝐓𝐈𝐎𝐍.  \n𝐂𝐑𝐄𝐓𝐄𝐃 𝐁𝐘 𝐋𝐎𝐑𝐃 𝐌𝐀𝐋𝐕𝐈𝐍 .\n\n𝐒𝐓𝐀𝐑⭐ 𝐓𝐇𝐄 𝐑𝐄𝐏𝐎 𝐓𝐇𝐄𝐍 𝐅𝐎𝐑𝐊🍴\n\n📂 Repository Name: *LORD-MD*\n📝 Last Update: " + _0x50985d.lastUpdate + "\n👤 Owner: *Lord Malvin*\n⭐ Stars: " + _0x50985d.stars + "\n🍴 Forks: " + _0x50985d.forks + "\n😎 Repo: " + _0x36b130.html_url + "\n😅 For More Info : https://github.com/kingmalvn/LORD-INFO⁠\n";
    await _0x3cdb38.sendMessage(_0x256950, {
      'image': {
        'url': "https://e.top4top.io/p_32048sryq1.jpg"
      },
      'caption': _0x20cf11
    });
  } else {
    console.log("Could not fetch data");
  }
});













































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































