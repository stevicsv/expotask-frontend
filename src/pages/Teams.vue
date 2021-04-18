<template>
  <div class="teams">
    <h3>Teams</h3>

    <div class="teams-container">
      <div class="team-card">
        <div class="top">
          <div class="team-name">
            <img
              src="https://eu.ui-avatars.com/api/?name=D&background=cf000f&color=FFF"
              alt="team avatar"
            />
            <h4>Daniel’s Managment Team</h4>
          </div>
          <Dropdown>
            <template #trigger>
              <Icon name="more" />
            </template>
            <template #menu>
              <DropdownItem>
                <Icon name="left" />Left Team
              </DropdownItem>
              <DropdownItem>
                <Icon name="settings" />Settings
              </DropdownItem>
            </template>
          </Dropdown>
        </div>
        <div class="bottom">
          <div class="members">
            <img src="https://eu.ui-avatars.com/api/?name=Austyn+Bernhard" alt="member avatar" />
            <img src="https://eu.ui-avatars.com/api/?name=John+Doe&background=cf000f&color=fff" alt="member avatar" />
          </div>

          <button class="is-primary">See More <Icon name="chevron down" /></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

import Icon from '@/components/Icon.vue';
import { Dropdown, DropdownItem } from '@/components/Dropdown.vue';

export default defineComponent({
  components: { Icon, Dropdown, DropdownItem },
  setup() {},
});
</script>
