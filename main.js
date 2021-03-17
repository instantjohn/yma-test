const yma = require('standard-youtube-music-api')

const ttt = new yma.YoutubeMusicAPI();

var res;

ttt.search(ttt.searchData).then(res => res);
