var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

    // render message object
    // for (var i = 0; i < MessagesView.data.results.length; i++) {
    //   MessagesView.render(MessagesView.data.results[i]);
    // }
  },

  renderMessage: function(message) {
    // iterate through App.data
    //call message view for each msg object
    // append return value to chats
    MessageView.correctMessage(message);
    this.$chats.append(MessageView.render(message));
  },

  // create method that iterates over App.data
  retrieveMessages: function() {
    App.data.results.forEach(function(message) {
      MessagesView.renderMessage(message);
    });
  }

};