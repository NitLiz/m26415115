/**
 * Created by yustu on 09-May-17.
 */
/**
 * Created by yustu on 09-May-17.
 */
$(document).ready(function(){
  function is_field_empty(field) {
    return (field.val() === null || field.val() === '');
  }
  function is_field_length_more_than_required(field, required_length) {
    return (field.val().length < required_length);
  }
  function is_field_checked(field) {
    return field.prop('checked');
  }
  function is_field_has_white_space(field) {
    return /\s/g.test(field.val());
  }
  function is_field_has_valid_email(field) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(field.val());
  }

  function check_email(email) {
    if (is_field_empty(email)) {
      $("#email-error").text('email cannot be empty');
      return false;
    } else if (!is_field_has_valid_email(email)) {
      $("#email-error").text('email is not valid');
      return false;
    } else {
      $("#email-error").text('');
      return true;
    }
  }

  function check_username(username) {
    if (is_field_empty(username)) {
      $("#username-error").text('username cannot be empty');
      return false;
    } else if (is_field_length_more_than_required(username, 3)) {
      $("#username-error").text('username must contain more than 3 character');
      return false;
    } else if (is_field_has_white_space(username)) {
      $("#username-error").text('username cannot have space character');
      return false;
    } else {
      $("#username-error").text('');
      return true;
    }
  }

  function check_password(password, confirm_password) {
    if (is_field_empty(password)) {
      $("#password-error").text('password cannot be empty');
      return false;
    } else if (is_field_length_more_than_required(password, 3)) {
      $("#password-error").text('password must contain more than 3 character');
      return false;
    } else if (password.val() !== confirm_password.val()) {
      $("#password-error").text('password and confirm password do not match');
      return false;
    } else {
      $("#password-error").text('');
      return true;
    }
  }

  function check_agreement(agreement) {
    if (!is_field_checked(agreement)) {
      $("#agreement-error").text('you must agree');
      return false;
    } else {
      $("#agreement-error").text('');
      return true;
    }
  }

  $("#submit-btn").click(function(){
    email_result = check_email($("#email"));
    username_result = check_username($("#username"));
    password_result = check_password($("#password"), $("#confirm-password"));
    agreement_result = check_agreement($("#agreement"));

    if (email_result && username_result &&
        password_result && agreement_result) {
      $("#register-user").submit();
    }
  });
});