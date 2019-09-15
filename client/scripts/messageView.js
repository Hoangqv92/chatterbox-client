
var MessageView = {
// use '-' instead of '=' to HTML escape
  render: _.template(`
      <div class="chat">
        <div class="username">
          Username: <%- username %>
        </div>
        <div class="roomname">
          Roomname: <%- roomname %>
        </div>
        <div class="text">
          <%- text %>
        </div>
      </div>
    `),

  // create a function to sort data, then render sorted data
  correctMessage: function (message) {
    // check if username, roomname, and text exist
    //// if they don't make a new property with empty string
    if (message.username === undefined) {
      message.username = '';
    }
    if (message.roomname === undefined) {
      message.roomname = '';
    }
    if (message.text === undefined) {
      message.text = '';
    }
  }


};