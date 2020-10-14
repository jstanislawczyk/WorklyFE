<template>
  <div class="register">
    <form
      @submit.prevent="registerUser"
      class="register__form"
    >
      <label>
        <input
          type="text"
          v-model="user.email"
        >
        {{ user.email }}
      </label>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>

import { required } from 'vuelidate';

export default {
  name: 'Register',
  data() {
    return {
      user: {
        email: '',
      },
    };
  },
  validations: {
    email: {
      required,
    },
  },
  methods: {
    registerUser() {
      console.log(123123);
      console.log(this.user.email);
      console.log(this.validations);
    },
  },
};
</script>

<style scoped lang="scss">

</style>
