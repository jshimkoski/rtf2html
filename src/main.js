import { createApp } from 'vue'
import CKEditor from '@ckeditor/ckeditor5-vue';
import App from './App.vue'
import './index.css'

createApp(App).use(CKEditor).mount('#app')
