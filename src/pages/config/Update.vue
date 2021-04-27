<template>
  <q-page class="column items-center q-gutter-lg text-white" padding>
    <!-- content -->
    <div class="q-pa-lg"/>
    <div class="q-pa-md">
      <Logo class="text-white text-h5"/>
    </div>
    <div class="column items-center">
      <span>Version Actual</span>
      <span class="text-secondary text-h6">0.5</span>
    </div>
    <div style="width: 80vw">
      <q-file dark v-model="file">
        <template v-slot:append>
          <q-icon name="folder-f"/>
        </template>
      </q-file>
    </div>
    <q-btn @click="upload" icon="upload" outline v-if="!uploading"/>
    <div class="q-pa-md self-stretch" v-else>
      <q-linear-progress track-color="accent" color="white" v-model="progress"/>
    </div>
  </q-page>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';

  export default defineComponent({
    // name: 'PageName'
    data() {
      return {
        OTASuccess: false,
        file: '',
        type: 'firmware',
        uploading: false,
        progress: 0
      };
    },
    methods: {
      upload() {
        const request = new XMLHttpRequest();
        const formData = new FormData();

        if (this.file == null) {
          return;
        }
        if (this.file.length === 0) return;
        formData.append(this.type, this.file);
        request.addEventListener('load', () => {
          if (request.status === 200) {
            console.log(request.responseText);
            this.OTASuccess = true;
          } else if (request.status !== 500) {
            console.log(request.statusText);
          } else {
            request.responseText;
          }
          this.uploading = false;
          this.progress = 0;
        });
        request.upload.addEventListener('progress', (e) => {
          this.progress = Math.trunc((e.loaded / e.total));
          console.log(this.progress * 100, '%');
        });

        request.open('post', 'esp/update');
        request.send(formData);
        this.uploading = true;
        // this.$axios.post('http://127.0.0.1/api/v1/update', formData, {
        //   headers: {
        //     'Content-Type': 'multipart/form-data'
        //   },
        //   onUploadProgress: progress => {
        //     console.log(Math.trunc(progress.loaded / progress.total));
        //   }
        // });
      }
    }
  });
</script>
