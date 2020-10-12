<template>
  <main class="main">
    <router-view/>
  </main>
</template>

<script>

export default {
  name: 'Main',
};
</script>

<style scoped lang="scss">

  .main {
    height: calc(100% - 60px);
  }

</style>
