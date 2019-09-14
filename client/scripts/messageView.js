
var MessageView = {
// use '-' instead of '=' to HTML escape
  render: _.template(`
      <div class="chat">
        <div class="username">
          <%- username %>
        </div>
        <div class="roomname">
          <%- roomname %>
        </div>
        <div class="text" "chat">
          <%- text %>
        </div>
      </div>
    `)

};