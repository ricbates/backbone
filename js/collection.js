var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
    model: Song
});

var songs = new Songs([
    new Song({category: "Pop", title: "New song title 1",dl:100}),
    new Song({category: "Pop", title: "New song title 2",dl:110}),
    new Song({category: "Jazz", title: "New song title 3",dl:200})
]);

songs.add(new Song({category: "Jazz", title: "New Song title old 4",dl:10}));

var firstSong = songs.at(0);

var lastSong = songs.get("c4");

console.log(songs);

songs.remove(firstSong);
/* songs.remove(songs.at(songs.get("c4"))); */

console.log(songs);

songs.add(new Song({category: "Pop", title: "New Song title old 5",dl:111}), {at: 0});

console.log(songs);

songs.push(new Song({category: "Jazz", title: "New Song title old 6",dl:50}));

console.log(songs);

var oldSongs = songs.findWhere({category: "Pop"}); /* only return first instance */

var jazzSongs = songs.find({category: "Jazz"}); /* return all instances */

console.log("oldSongs " + oldSongs.attributes.title);

console.log("jazzSongs " + jazzSongs);

var topSongs = songs.filter(function(song){
    return song.get("dl") > 100;
});

console.log("Songs above 110 " + topSongs);

songs.each(function(song) {
    console.log(song.attributes.title);
});
