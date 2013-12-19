Nevernote.Views.NotebooksList = Support.CompositeView.extend({
  initialize: function() {
    _.bindAll(this, "render");

    this.bindTo(Nevernote.notebooks, "add", this.render);
    this.bindTo(Nevernote.notebooks, "remove", this.render);
    this.bindTo(Nevernote.notebooks, "change", this.render);
    this.bindTo(Nevernote.notebooks, "reset", this.render);
  },

  events: {
    "click .rename-notebook": "rename",
    "click .new-notebook" : "new"
  },

  render: function() {
    console.log('rendering');
    this.$el.html(JST['notebooks/list']());

    return this;
  },

  new: function(event) {
    event.preventDefault();

    var view = new Nevernote.Views.NotebookNew();
    var container = $('#lightbox');
    container.html(view.render().$el)
    container.toggleClass('hide');
  },

  rename: function(event) {
    event.preventDefault();
    notebook = Nevernote.notebooks.get($(event.currentTarget).attr('data-id'))

    var view = new Nevernote.Views.NotebookRename({ model: notebook });
    var container = $('#lightbox');
    container.html(view.render().$el)
    container.toggleClass('hide');
  }

});
