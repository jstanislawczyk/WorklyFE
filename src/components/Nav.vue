<template>
  <nav class="nav">
    <div>
      <router-link to="/">
        <img
          class="nav__logo"
          src="@/assets/workly-logo.png"
          alt="Workly logo" />
      </router-link>
    </div>
    <div class="nav__links">
      <router-link to="/management/panel" class="nav__link">Management panel</router-link>
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
    padding: 0;
    background: $blue-violet-gradient;
    color: #FFF;

    &__logo {
      width: 75px;
      padding: 0 10px;
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
      position: relative;
      height: 100%;
      margin: auto;
      padding: 0 15px;
      text-decoration: none;
      font-weight: 500;
      color: #FFF;

      &::after {
        display: block;
        content: '';
        width: 0;
        height: 1px;
        background: #FFF;
        position: absolute;
        bottom: 17px;
        left: 15px;
        transition: .4s;
      }

      &:hover::after {
        width: calc(100% - 30px);
      }
    }
  }

</style>
