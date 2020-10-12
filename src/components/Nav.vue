<template>
  <nav class="nav">
    <div>
      <router-link to="/" class="nav__link">
        <img
          class="nav__logo"
          src="@/assets/workly-logo.png"
          alt="Workly logo" />
      </router-link>
    </div>
    <div class="nav__links">
      <router-link to="/user/panel" class="nav__link">User panel</router-link>
      <router-link to="/login" class="nav__link">Login</router-link>
      <router-link to="/register" class="nav__link">Register</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
};
</script>

<style scoped lang="scss">
  @import "../scss/colors.scss";

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 60px;
    padding: 0 10px;
    background: $violet;
    background: linear-gradient(90deg, $violet 45%, #FF0041 100%);
    color: #FFF;

    &__logo {
      width: 75px;
    }

    &__links {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }

    &__link {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      margin: auto;
      padding: 0 15px;
      text-decoration: none;
      font-weight: 500;
      color: #FFF;
      transition: .3s;

      &:hover {
        color: #FFE0E0;
      }
    }
  }

</style>
