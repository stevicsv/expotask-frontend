<template>Testing...</template>

<script>
</script>

<style lang="scss">
.dashboard-layout {
  display: grid;
  grid-template-columns: 264px auto;

  .sidebar {
    position: relative;
    padding: 2rem 2.5rem;
    height: 100vh;

    .indication-line {
      position: absolute;
      top: 0;
      right: 0;
      width: 2px;
      height: 100vh;
      background-color: #eaecf0;

      .active-line {
        position: relative;
        width: 2px;
        height: 24px;
        background-color: #f46b3e;
        transition: all 300ms ease-in-out;
      }
    }
  }

  .content {
    margin: 2rem 4rem;
  }
}

.sidebar {
  .logo {
    width: 8.75rem;
  }

  .nav {
    margin-top: 2rem;

    a {
      display: flex;
      align-items: center;
      height: 2.5rem;
      font-size: 1rem;
      font-weight: 500;
      line-height: 1.5rem;
      color: #a2a9b1;
      cursor: pointer;
      user-select: none;

      &.is-active {
        color: #54595d;
      }
    }
  }
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.icon {
  width: 1rem;
}
</style>
