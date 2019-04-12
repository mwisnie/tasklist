// returns error message if input is invalid; if valid, returns null
export function checkInputForErrors(value, validationRules) {
  let error = null;

  if (!validationRules) {
    return null;
  }

  if (validationRules.required) {
    error = value.trim() !== '' ? null : 'Value is required.'
    if (error) {
      return error;
    }
  }

  if (validationRules.isEmail) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    error = pattern.test(value) ? null : 'Invalid email.';
    if (error) {
      return error;
    }
  }

  if (validationRules.minLength) {
    error = value.length < validationRules.minLength ? 'Must be minimum 6 characters.' : null;
    if (error) {
      return error;
    }
  }

  return error;
}