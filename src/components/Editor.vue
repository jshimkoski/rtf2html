<template>
  <ckeditor
    :editor="editor"
    v-model="editorData"
    :config="editorConfig"
  ></ckeditor>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  name: "app",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      editor: ClassicEditor,
      editorConfig: {
        // The configuration of the editor.
        toolbar: [
          // "heading",
          // "|",
          "bold",
          "italic",
          "|",
          "link",
          "|",
          "bulletedList",
          "numberedList",
        ],
      },
    };
  },
  computed: {
    editorData: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
};
</script>

<style>
.ck-content > blockquote,
.ck-content > dl,
.ck-content > dd,
.ck-content > h1,
.ck-content > h2,
.ck-content > h3,
.ck-content > h4,
.ck-content > h5,
.ck-content > h6,
.ck-content > hr,
.ck-content > figure,
.ck-content > p,
.ck-content > pre {
  margin: revert;
}

.ck-content a {
  all: revert;
}

.ck-content > ol,
.ck-content > ul {
  list-style: revert;
  margin: revert;
  padding: revert;
}

.ck-content > table {
  border-collapse: revert;
}

.ck-content > h1,
.ck-content > h2,
.ck-content > h3,
.ck-content > h4,
.ck-content > h5,
.ck-content > h6 {
  font-size: revert;
  font-weight: revert;
}
</style>