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
  @import "../scss/mixins/common.scss";

  .register {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: $blue-violet-gradient;

    &__form {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 40%;
      height: auto;
      min-height: 300px;
      padding: 50px 0;
      background: #FFF;
      border-radius: 10px;
    }

    &__title {
      margin-bottom: 50px;
      font-size: 35px;
    }

    &__submit {
      @include button(200px, 50px);

      margin: 40px 0 20px;
    }

    & .label {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      position: relative;
      width: 80%;
      margin: 25px 0;
      overflow: hidden;

      &::after {
        display: block;
        content: '';
        width: 100%;
        height: 2px;
        position: absolute;
        bottom: 0;
        left: -100%;
        background: $blue-violet-gradient;
        transition: .5s;
      }

      &::before {
        display: block;
        content: '';
        width: 100%;
        height: 2px;
        position: absolute;
        bottom: 0;
        left: 0;
        background: #CCC;
        transition: 1s;
      }

      &:focus-within::after {
        left: 0;
      }

      &__title {
        width: 100%;
        text-align: left;
        font-size: 13px;
        text-transform: uppercase;
        color: #999;
      }

      &__input {
        width: 100%;
        height: 40px;
        border: none;
        font-size: 17px;
        color: #333;
      }
    }
  }

</style>
