Nevernote.Views.NotesIndex = Backbone.View.extend({

  template: JST['notes/index'],

  render: function() {
    this.$el.html(this.template);

    return this;
  },

});
