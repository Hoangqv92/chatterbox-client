var Messages = {

  // create a function to sort data, then render sorted data
  filterMessages: function () {
    if (MessagesView.data.results !== undefined) {
      for (var i = 0; i < MessagesView.data.results.length; i++) {
        // check if username, roomname, and text exist
        //// if they don't make a new property with empty string
        if (MessagesView.data.results[i].username === undefined) {
          MessagesView.data.results[i].username = '';
        }
        if (MessagesView.data.results[i].roomname === undefined) {
          MessagesView.data.results[i].roomname = '';
        }
        if (MessagesView.data.results[i].text === undefined) {
          MessagesView.data.results[i].text = '';
        }
      }
    }
  }
};