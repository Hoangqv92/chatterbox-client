var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // call Messages method to sort data obj
    Messages.filterMessages();
    // render message object
    for (var i = 0; i < MessagesView.data.results.length; i++) {
      MessagesView.render(MessagesView.data.results[i]);
    }
  },

  renderMessage: function(message) {
    // iterate through App.data
    //call message view for each msg object
    // append return value to chats
    var messageBlock = '';
    console.log('data from render:', MessagesView.data);

    messageBlock += MessageView.render(message);
    this.$chats.append(messageBlock);
  }

};