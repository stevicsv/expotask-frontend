<template>
  <Dropdown>
    <template #trigger>
      <h4>Click here</h4>
    </template>
    <template #multipleMenu="{ isActive, setActive, close }">
      <DropdownGroup v-show="isActive('main')" key="main" id="main">
        <DropdownItem>Main</DropdownItem>
        <DropdownItem @click="setActive('promote')">Promote</DropdownItem>
      </DropdownGroup>
      <DropdownGroup v-show="isActive('promote')" key="promote">
        <DropdownItem @click="setActive('main')">
          <Icon name="chevron down"/>
          Back to Main
        </DropdownItem>
        <DropdownItem>Moderator</DropdownItem>
        <DropdownItem @click="close">Member</DropdownItem>
      </DropdownGroup>
    </template>
  </Dropdown>
</template>

<script>
import { defineComponent } from 'vue';
import Icon from '@/components/Icon.vue';
import { Dropdown, DropdownGroup, DropdownItem } from '@/components/Dropdown.vue';

export default defineComponent({
  components: {
    Icon, Dropdown, DropdownGroup, DropdownItem,
  },
});
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
