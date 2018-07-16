<template lang="html">
<div class="md-layout md-gutter">
  <div class="md-layout-item md-size-40 pr-0">
    <div class="img-upload-preview border rounded" :style=" { backgroundImage: `url(${this.imageUrl})` }"></div>
  </div>
  <div class="md-layout-item">
    <md-button class="md-dense border mx-0 mt-0" @click="chooseFile">上传</md-button>
    <input type="file"
      ref="uploadImage"
      accept="image/*"
      @change="onFilePicked"
      class="fileInput">
    <div class="size-1">
      1.图片大小小余200k，支持jpg、png格式。<br>
      2.保证营业执照字迹清晰内容完整。
    </div>
  </div>
</div>
</template>

<script>
export default {
  data: () => ({
    image: null,
    imageUrl: require('@/static/img/img_placeholder.gif'),
  }),
  methods: {
    chooseFile() {
      this.$refs.uploadImage.click();
    },
    onFilePicked(event) {
      this.loading = true;
      const files = event.target.files;
      let filename = files[0].name;
      if (filename.lastIndexOf('.') <= 0) {
        return;
      }
      const fileReader = new FileReader();
      fileReader.readAsDataURL(files[0]);
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result;
      })

      this.image = files[0];

      let formData = new FormData();
      formData.append("file", files[0]);
      // var request = new XMLHttpRequest();
      // request.open("POST", "http://192.168.0.105:8085/common/upload");
      // request.send(formData);
      // this.uploadFile(formData)
      //   .then(res => {
      //     this.$emit('input', res.src);
      //     this.loading = false;
      //   });

    }
  }
}
</script>

<style lang="scss">
  .img-upload-preview {
    background-color: $input-bg-color;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100px;
    width: 100%;
    flex: 0 0 130px;
  }
  .fileInput {
    display: none;
  }
</style>
