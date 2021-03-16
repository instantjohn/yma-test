const yma = require('standard-youtube-music-api')

const ttt = new yma.YoutubeMusicAPI();

console.log(ttt.search("hello"));
console.log(ttt.searchVideos("hello"));

// console.log(ttt.headers);
// console.log(ttt.playerData);
// console.log(ttt.nextData);
// console.log(ttt.browseData);
// console.log(ttt.searchData);
// console.log(ttt.k);
