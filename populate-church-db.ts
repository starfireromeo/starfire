console.log('Initizalizing loading database ... ');

//import {database, initializeApp} from "firebase";
//import {firebaseConfig} from "./src/environments/firebase.config";
//import {dbData} from "./db-data-lyrics";
//console.log(dbData);

//console.log('Initizalizing Firebase database ... ');

//initializeApp(firebaseConfig);

//const songsRef = database().ref('songs');

//dbData.songs.forEach( song => {

//  console.log('adding song', song.title);

//   let versesPerSong = [];
//   song.verses.forEach((verse:any) =>  {

//    console.log('adding verse ', verse.verse_number);

//    versesPerSong.push({
//        verse_number: verse.verse_number,
//        verse: verse.verse
//    });

//  });

//  const songsRef = songsRef.push({
//      title: song.title,
//      size: song.size,
//      font: song.font,
//      verses: versesPerSong
//  });
//});

