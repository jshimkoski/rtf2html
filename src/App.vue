<template>
  <div class="p-6 space-y-6">
  <h1 class="text-2xl">RTF 2 HTML</h1>
  <div class="grid grid-cols-2 gap-6">
    <div class="space-y-2">
      <h2 class="text-xl">Editor</h2>
      <Editor v-model="text" />
    </div>
    <div class="space-y-2">
      <h2 class="text-xl">Source</h2>
      <textarea v-model="text" class="w-full h-full p-4 border rounded" />
    </div>
  </div>
  </div>
</template>

<script>
import Editor from "./components/Editor.vue";

export default {
  components: {
    Editor
  },
  data() {
    return {
      text: "",
    };
  },
};
</script>