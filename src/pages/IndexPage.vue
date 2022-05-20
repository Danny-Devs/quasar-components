<template>
  <q-page class="flex flex-center">
    <q-input
      v-model="name"
      color="purple"
      label="name"
      outlined
      class="q-mr-lg"
    >
      <template v-slot:prepend>
        <q-icon name="person" />
      </template>
    </q-input>

    <q-btn
      color="accent"
      no-caps
      :icon="buttonLabel"
      :loading="isLoading"
      @click="
        $q.notify({
          message: 'Crushing it at quasar!!!!!!!',
          color: 'blue',
          position: 'center',
          icon: 'thumb_up',
        })
      "
    >
    </q-btn>
    <q-btn :disable="false" @click="isLoading = !isLoading"></q-btn>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const isLoading = ref(false);
const buttonLabel = ref("visibility_off");
</script>
