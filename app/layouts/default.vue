<template>
  <div class="layout-container">
    <MainHeader />
    <main class="content-view">
      <slot />
    </main>
    <MainFooter />
  </div>
</template>

<script></script>

<style lang="scss">
.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content-view {
  flex: 1;
  background-color: #02081d;
}
</style>
