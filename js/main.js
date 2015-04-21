
var Song = Backbone.Model.extend();

var SongView = Backbone.View.extend({
    events: {
        "click .bookmark": "onClickBookmark",   
        "click": "onClick",    
    },
    onClick: function() {
        console.log("Listen Clicked!");
    },
    /*onClickBookmark: function() {
        console.log("Bookmark Clicked!");
    },*/
    onClickBookmark: function(e) {
        e.stopPropagation();// this prevents all click events from firing
        console.log("Bookmark Clicked!");
    },
    render: function() {
        this.$el.html(this.model.get("title") + "<button>Listen</button><button class='bookmark'>Bookmark</button>");
    }
});
var song = new Song({title: "New song title", artist: "Miles Davis", publishYear: "1959",});

var songView = new SongView({ el: "#container", model: song });
songView.render();