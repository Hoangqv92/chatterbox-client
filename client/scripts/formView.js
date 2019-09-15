var FormView = {

  $form: $('form'),
  $message: $('#message').val(),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    console.log($('#message').val());
    console.log('msg:', this.$message);

    Messages.text = this.$message;

    var pageParameters = window.location.search.substring(1);
    var parameters = pageParameters.split('=');
    var username = parameters[1];
    Messages.username = username;

    Parse.create(Messages);
    // collect data from form
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};