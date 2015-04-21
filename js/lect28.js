
var Song = Backbone.Model.extend();

var SongView = Backbone.View.extend({
    render: function() {
        //underscore template
        var template = _.template($("#songTemplate").html());
        var html = template(this.model.toJSON()); // underscore does mnot understand backbone, needs to be passed JSON
        this.$el.html(html);
        
        return this;
    }
});
var song = new Song({title: "New song title", artist: "Miles Davis", publishYear: "1959", plays: 99});

var songView = new SongView({ el: "#songs", model: song });
songView.render();