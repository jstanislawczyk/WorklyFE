<template>
  <div class="work-management">
    <div class="nav">
      <button class="nav__button">
        Time
      </button>

      <button class="nav__button">
        Projects
      </button>
    </div>

    <div class="panel">

    </div>
  </div>
</template>

<script>

export default {
  name: 'WorkManagementPanel',
  methods: {

  },
};
</script>

<style scoped lang="scss">
  @import "../scss/colors.scss";

  .work-management {
    height: 100%;
    display: flex;
  }

  .nav {
    width: 200px;

    &__button {
      width: 100%;
      height: 60px;
      border: none;
      border-left: 4px solid #333;
      background: #FFF;
      text-transform: uppercase;
      font-size: 15px;

      &:hover {
        cursor: pointer;
        border-left: 4px solid $blue;
        background: #EEE;
      }
    }
  }

  .panel {
  }

</style>
