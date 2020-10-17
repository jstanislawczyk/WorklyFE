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

      <button class="register__submit" type="submit">Register</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'Register',
  data() {
    return {
      user: {
        nick: '',
        email: '',
        password: '',
        passwordRepeat: '',
      },
    };
  },
  methods: {
    registerUser() {
      console.log(this.user);
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
