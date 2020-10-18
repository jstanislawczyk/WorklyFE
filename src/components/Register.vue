<template>
  <div class="register">
    <form
      @submit.prevent="registerUser"
      class="register__form"
    >
      <h2 class="register__title">Register</h2>

      <label class="label">
        <span class="label__title">Nick</span>
        <input
          class="label__input"
          type="text"
          v-model="user.nick"
        >
      </label>

      <label class="label">
        <span class="label__title">Email</span>
        <input
          class="label__input"
          type="text"
          v-model="user.email"
        >
      </label>

      <label class="label">
        <span class="label__title">Password</span>
        <input
          class="label__input"
          type="password"
          v-model="user.password"
        >
      </label>

      <label class="label">
        <span class="label__title">Password repeat</span>
        <input
          class="label__input"
          type="password"
          v-model="user.passwordRepeat"
        >
      </label>

      <ul class="register__error-list">
        <li
          v-for="(error, index) in errors"
          v-bind:key="index"
          class="register__error"
        >
          {{ error }}
        </li>
      </ul>

      <button class="register__submit" type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import formValidation from '@/mixins/FormValidation';

export default {
  name: 'Register',
  mixins: [formValidation],
  data() {
    return {
      user: {
        nick: '',
        email: '',
        password: '',
        passwordRepeat: '',
      },
      errors: [],
    };
  },
  methods: {
    registerUser() {
      if (this.isFormValid()) {
        console.log('VALID');
      }
    },
    isFormValid() {
      this.errors = [];

      const nickValidation = this.stringHasSize(this.user.nick, 60, 4);

      if (!nickValidation.isValid) {
        this.errors.push(nickValidation.message);
      }

      const emailValidation = this.isEmail(this.user.email);

      if (!emailValidation.isValid) {
        this.errors.push(emailValidation.message);
      }

      const areEqualPasswords =
        this.areEqualPasswords(this.user.password, this.user.passwordRepeat);

      if (areEqualPasswords.isValid) {
        const passwordValidation = this.isPassword(this.user.password);

        if (!passwordValidation.isValid) {
          this.errors.push(passwordValidation.message);
        }
      } else {
        this.errors.push(areEqualPasswords.message);
      }

      return this.errors.length === 0;
    },
  },
};
</script>

<style scoped lang="scss">

  @import "../scss/colors.scss";
  @import "../scss/mixins/form.scss";

  .register {
    @include form;
  }

</style>
