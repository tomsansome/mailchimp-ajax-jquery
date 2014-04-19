var AjaxChimp = {};

AjaxChimp.placeholder = {
  showLabel: function() {
    if(!Modernizr.input.placeholder){
      $('label').show();
    }
  }
}

AjaxChimp.signUp = {

  init: function() {
    this.submitForm();
  },

  loading: function() {
    $('.result').show().html('Loading...');
  },

  formResult: function(data) {
    $('.result').html(data);
    $('.mailchimp-input').val('');
  },

  submitForm: function() {
    $('#mailchimp-signup').submit(function() {

      AjaxChimp.signUp.loading();

      var action = $(this).attr('action');
      $.ajax({
        url: action,
        type: 'POST',
        data: {
          email: $('#mailchimp-email').val(),
          fname: $('#mailchimp-fname').val(),
          lname: $('#mailchimp-lname').val()
        },
        success: function(data){
          AjaxChimp.signUp.formResult(data);
        },
        error: function(data) {
          AjaxChimp.signUp.formResult(data);
        }
      });
    return false;
    });
  }

}

$(function(){
  AjaxChimp.placeholder.showLabel();
  AjaxChimp.signUp.init();    
});