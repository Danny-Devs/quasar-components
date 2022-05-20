<script setup>
import { ref, onMounted } from "vue";

const canvas = ref(null);
const ctx = ref(null);

onMounted(() => {
  ctx.value = canvas.value.getContext("2d");
  canvas.value.width = 640;
  canvas.value.height = 480;

  ctx.value.fillStyle = "green";
  ctx.value.strokeStyle = "yellow";
  ctx.value.fillRect(50, 50, 100, 100);
  ctx.value.lineWidth = 20;

  ctx.value.fillRect(0, 0, canvas.value.width, canvas.value.height);
  ctx.value.beginPath();
  ctx.value.moveTo(canvas.value.width / 2, canvas.value.height / 2);
  ctx.value.lineTo(300, 300);
  ctx.value.stroke();
});
</script>

<template>
  <q-page class="bg-positive flex flex-center">
    <canvas ref="canvas" id="canvas1"></canvas>
  </q-page>
</template>

<style scoped>
#canvas1 {
  background: rgb(29, 29, 52);
  position: absolute;
  top: 0;
  left: 0;
}
</style>
