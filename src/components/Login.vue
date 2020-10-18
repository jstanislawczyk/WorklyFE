<template>
  <div class="login">
    <form
      @submit.prevent="loginUser"
      class="login__form"
    >
      <h2 class="login__title">Login</h2>

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

      <button class="login__submit" type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import formValidation from '@/mixins/FormValidation';

export default {
  name: 'Login',
  mixins: [formValidation],
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    loginUser() {
      console.log('REGISTER');
    },
  },
};
</script>

<style scoped lang="scss">
  @import "../scss/colors.scss";
  @import "../scss/mixins/form.scss";

  .login {
    @include form;
  }

</style>
