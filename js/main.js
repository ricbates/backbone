
/* var Song = Backbone.Model.extend();

var SongView = Backbone.View.extend({
    events: {
        "click .bookmark": "onClickBookmark",   
        "click": "onClick",    
    },
    onClick: function() {
        console.log("Listen Clicked!");
    },
    
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
*/

var person = {
    name: "Rick",
    walk: function() {
        this.trigger("walking", {
            speed:1,
            startTime: "08:00"
        });
    }
};
_.extend(person, Backbone.Events);

/* person.on("walking", function(e) {
    console.log("Person walking");
    console.log("Event Args: ", e );
});


person.off("walking"); // next line does nothing
person.walk(); */

person.once("walking", function(e) {
    console.log("Person walking");
    console.log("Event Args: ", e );
});

person.walk();
person.walk();
person.walk();  // only first instance runs
