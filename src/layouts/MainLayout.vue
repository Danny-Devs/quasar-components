<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <!-- LEFT SIDEBAR -->
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Components </q-item-label>

        <q-item clickable to="ajax-bar">
          <q-item-section> QAjaxBar </q-item-section>
        </q-item>

        <q-item clickable to="avatar">
          <q-item-section side>
            <q-avatar color="blue" text-color="white"
              ><img
                src="https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png"
            /></q-avatar>
          </q-item-section>
          <q-item-section> QAvatar </q-item-section>
        </q-item>

        <q-item clickable to="canvas">
          <q-item-section> HTML Canvas </q-item-section>
        </q-item>

        <q-item clickable to="examples">
          <q-item-section> Vue 3 Doc Examples </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";

const leftDrawerOpen = ref(false);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>
