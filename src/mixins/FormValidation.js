import validator from 'validator';

const formValidation = {
  methods: {
    isEmail: (email) => {
      let message;
      const isEmail = validator.isEmail(email);

      if (isEmail) {
        message = '';
      } else if (email.length > 0) {
        message = `Value '${email}' is not an email`;
      } else {
        message = 'Email cannot be empty';
      }

      return {
        isValid: isEmail,
        message,
      };
    },
    stringHasSize: (text, maximum = 100, minimum = 0) => {
      if (minimum > maximum) {
        [minimum, maximum] = [maximum, minimum];
      }

      const stringHasSize = text.length >= minimum && text.length <= maximum;

      return {
        isValid: stringHasSize,
        message: stringHasSize
          ? ''
          : `String size must be in the range ${minimum} to ${maximum}`,
      };
    },
    areEqualPasswords: (password, passwordRepeat) => {
      const passwordsAreEqual = password === passwordRepeat;

      return {
        isValid: passwordsAreEqual,
        message: passwordsAreEqual
          ? ''
          : 'Password and repeated password should be equal',
      };
    },
    isPassword: (password) => {
      const messages = [];
      let isValid = true;

      if (password.length < 6 || password.length >= 50) {
        isValid = false;
        messages.push('Password must have size between 6 and 50');
      }

      const hasNoLowerCase = !(/[a-z]/.test(password));

      if (hasNoLowerCase) {
        isValid = false;
        messages.push('Password requires at least one lowercase letter');
      }

      const hasNoUpperCase = !(/[A-Z]/.test(password));

      if (hasNoUpperCase) {
        isValid = false;
        messages.push('Password requires at least one uppercase letter');
      }

      return {
        isValid,
        message: messages.join(', '),
      };
    },
  },
};

export default formValidation;
