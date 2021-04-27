<template>
  <Modal title="Membership" v-show="modalVisible" @close="modalVisible = false">
    <div class="panel">
      <div class="search-box">
        <Icon name="search" />
        <input placeholder="Search for members..."/>
      </div>

      <div class="members">
        <div class="member">
          <img alt="profile" src="https://eu.ui-avatars.com/api/?name=Mike+Doe&background=cf000f&color=FFF" />
          <span>Mike Doe</span>
        </div>

        <div class="member">
          <img alt="profile" src="https://eu.ui-avatars.com/api/?name=Daniel+Voziak&background=cf000f&color=FFF" />
          <span>Daniel Voziak</span>
        </div>

        <div class="member">
          <img alt="profile" src="https://eu.ui-avatars.com/api/?name=Daniel+Voziak&background=cf000f&color=FFF" />
          <span>Daniel Voziak</span>
        </div>

        <div class="member">
          <img alt="profile" src="https://eu.ui-avatars.com/api/?name=Daniel+Voziak&background=cf000f&color=FFF" />
          <span>Daniel Voziak</span>
        </div>

        <div class="member">
          <img alt="profile" src="https://eu.ui-avatars.com/api/?name=Daniel+Voziak&background=cf000f&color=FFF" />
          <span>Daniel Voziak</span>
        </div>

        <div class="member">
          <img alt="profile" src="https://eu.ui-avatars.com/api/?name=Daniel+Voziak&background=cf000f&color=FFF" />
          <span>Daniel Voziak</span>
        </div>

        <div class="member">
          <img alt="profile" src="https://eu.ui-avatars.com/api/?name=Daniel+Voziak&background=cf000f&color=FFF" />
          <span>Daniel Voziak</span>
        </div>
      </div>
    </div>
  </Modal>

  <div class="teams">
    <h3>Teams</h3>

    <div class="teams-container">
      <div class="team-card" v-for="(team, index) in teams.teams" :key="index">
        <div class="top">
          <div class="team-name">
            <img
              src="https://eu.ui-avatars.com/api/?name=D&background=cf000f&color=FFF"
              alt="team avatar"
            />
            <h4>{{ team.name }}</h4>
          </div>
          <Dropdown class="is-smaller is-right">
            <template #trigger>
              <Icon name="more" />
            </template>
            <template #menu>
              <DropdownItem>
                <Icon name="left" />Left Team
              </DropdownItem>
              <DropdownItem @click="toggleModal">
                <Icon name="settings" />Membership
              </DropdownItem>
            </template>
          </Dropdown>
        </div>
        <div class="bottom">
          <div class="members">
            <img src="https://eu.ui-avatars.com/api/?name=Austyn+Bernhard" alt="member avatar" />
            <img
              src="https://eu.ui-avatars.com/api/?name=John+Doe&background=cf000f&color=fff"
              alt="member avatar"
            />
          </div>

          <button class="is-primary">
            See More
            <Icon name="chevron down" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  reactive,
  ref,
  onMounted,
} from 'vue';

import getAllTeams from '@/repositories/team';

import Icon from '@/components/Icon.vue';
import { Dropdown, DropdownItem } from '@/components/Dropdown.vue';
import Modal from '@/components/Modal.vue';

export default defineComponent({
  components: {
    Icon,
    Dropdown,
    DropdownItem,
    Modal,
  },
  setup() {
    const teams = reactive({ teams: [] });
    const modalVisible = ref(false);

    const toggleModal = () => {
      modalVisible.value = !modalVisible.value;
    };

    onMounted(async () => {
      const res = await getAllTeams();
      const { data } = res.data;
      teams.teams = data;
    });

    return {
      teams,
      modalVisible,
      toggleModal,
    };
  },
});
</script>
