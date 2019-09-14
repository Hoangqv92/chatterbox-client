var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  renderRoom: function(room) {
    // call template
    this.$select.html(function() {
      return `<option value=${room}>${room}</option>`;
    });
  }



};
