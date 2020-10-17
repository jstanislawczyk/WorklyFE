<template>
  <div class="home">
    <div class="info">
      <h1 class="info__header">Organize your work time efficiently</h1>
      <span class="info__description">
        It's important to know how much time we spend on various activities. <br />
        With Workly you can track your time with greater ease and efficiency.
      </span>
      <router-link to="/user/panel" class="info__link">Organize</router-link>
    </div>

    <div class="features">
      <div class="features__feature">
        <div class="features__circle">
          <img
            class="features__icon"
            src="@/assets/checklist.svg"
            alt="Register time icon"
          />
        </div>

        <span class="features__title">
          Log your time
        </span>

        <span class="features__description">
          Log your tasks per day with time spend on them
        </span>
      </div>

      <div class="features__feature">
        <div class="features__circle features__circle--green">
          <img
            class="features__icon"
            src="@/assets/project-management.svg"
            alt="Register time icon"
          />
        </div>

        <span class="features__title">
          Multiple projects
        </span>

        <span class="features__description">
          Create different projects and organize them easily
        </span>
      </div>

      <div class="features__feature">
        <div class="features__circle features__circle--blue">
          <img
            class="features__icon"
            src="@/assets/stats.svg"
            alt="Stats icon"
          />
        </div>

        <span class="features__title">
          Gather statistics
        </span>

        <span class="features__description">
          Receive statistics related to your logged time
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped lang="scss">
  @import "../scss/colors.scss";
  @import "../scss/mixins/common.scss";

  .home {
    height: 100%;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 40%;

    &__header {
      margin-top: 0;
      font-size: 37px;
      font-weight: 400;
    }

    &__description {
      margin-top: 10px;
      font-size: 17px;
    }

    &__link {
      @include button;

      margin-top: 50px;
    }
  }

  .features {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60%;
    padding: 0 20%;
    background: #DDD;

    &__feature {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 250px;
      height: 300px;
    }

    &__circle {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 130px;
      width: 130px;
      background-color: #F00;
      border: none;
      border-radius: 50%;

      &--blue {
        background: #96D9E0;
      }

      &--green {
        background: #65D84B;
      }
    }

    &__icon {
      width: 60%;
    }

    &__title {
      margin-top: 25px;
      font-size: 25px;
      color: $violet;
    }

    &__description {
      margin-top: 10px;
    }
  }

</style>
