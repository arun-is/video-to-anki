const argv = require('yargs').argv;
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const Subtitle = require('subtitle');

var p1 = readSubtitle(argv.s),
    p2 = readSubtitle(argv.t);

// wait for both files to be read before continuing
Promise.all([p1,p2]).then(values => console.log(values));

// return a promise of subtitle data given a path
function readSubtitle(path) {
  return new Promise((resolve, reject) => {
    if(path) {
      fs.readFile(path, "utf-8", function (err,data) {
        if (err) {
          return console.err(err);
        }
        resolve(data);
      });
    } else {
      reject();
    }
  });
}





// readSRT(callback);
//
// function readSRT(callback) {
//   if(argv.s) {
//
//     // read srt file
//     fs.readFile(argv.s, "utf-8", function (err,data) {
//
//       if (err) {
//         return console.err(err);
//       }
//
//       callback(data);
//
//     });
//
//   }
// }
//
// function callback (data) {
//   // initialize caption object
//   var captions = new subtitle();
//
//   // parse .srt file
//   captions.parse(data);
//
//   // create dir if needed
//   try {
//     fs.mkdirSync('bin');
//   }
//   catch (err) {
//     console.error(err);
//   }
//
//   console.log(captions.getSubtitles());
//
//   // write srt file
//   // fs.writeFile("bin/test.json", JSON.stringify(subtitles), function(err) {
//   //     if(err) {
//   //         return console.error(err);
//   //     }
//   //     console.log("The file was saved!");
//   // });
//
//   ffmpeg(argv.v)
//     .screenshots({
//       timestamps: ['00:10.123', '10:20.123', '20:30.123'],
//       filename: 'thumbnail-at-%s-seconds.png',
//       folder: 'bin'
//     })
//     .on('error', function(err) {
//       console.log(err);
//     });
//
// }
