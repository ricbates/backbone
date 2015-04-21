
var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
    model: Song
});

var SongView = Backbone.View.extend({
    tagName: "li",
   
    render: function() {
        this.$el.html(this.model.get("title"));
        
        return this;
    }
});

var SongsView = Backbone.View.extend({
    
    tagName: "ul",
    
    render: function(){
        
        var self = this;
        
        this.model.each(function(song) {
            var songView = new SongView({ model: song});
            // this.$el.append(songView.render().$el);  --> this 'this' refers to a different scope variable.
            self.$el.append(songView.render().$el); // add self to correct
        })
    }
});

var songs = new Songs([
    new Song({title: "Blue in Green"}),
    new Song({title: "Red in Orange"}),
    new Song({title: "Blues Baby"}),
    new Song({title: "Blue Byou"}),
]);


/* var songView = new SongView({
    el: "#container", model: song
});
songView.render(); */

var songsView = new SongsView({
    el: "#songs", model: songs
});
songsView.render();

