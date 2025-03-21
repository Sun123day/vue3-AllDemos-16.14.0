<template>
  <div class="container">
    <div class="content">
      <div class="upload-container">
        <n-upload
            v-model:file-list="fileList"
            :max="2"
            list-type="image-card"
            @before-upload="beforeUpload"
            :on-change="handleFileChange"
        />
            <!-- style="width: 200px; height: 200px;" -->
      </div>
      <div class="btn-container">
        <n-button type="primary" @click="handleConfirm">
        确认
        </n-button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive } from 'vue'
import { useMessage, NUpload, NButton } from "naive-ui";

const message = useMessage();
export default defineComponent({
  components: {
    NUpload,
    NButton
  },
  setup() {
    const avatar = ref('')
    // const fileList = ref(
    //     avatar ? [{ url: avatar }] : [{ url: '' }]  // 使用传入的头像作为默认值
    // );
    const fileList = ref(
       [{ url: avatar }]  // 使用传入的头像作为默认值
    );
    const beforeUpload = async(data) => {
      const file = data.file.file

      if (file?.type !== "image/png" && file?.type !== "image/jpeg") {
        message.error("只能上传png或jpg格式的图片文件，请重新上传");
        return false;
      }

      // 检查文件大小是否小于 10MB
      const maxSize = 10 * 1024 * 1024;  // 10MB
      if (file?.size > maxSize) {
          message.error("图片文件不能超过 10MB，请重新上传");
          return false;
      }

      return true;
    }

    const handleFileChange = (data) => {
        console.log("data.fileList.length", data.fileList.length);
        // console.log("data", typeof data);
        // console.log("data", data);
        // if (data.fileList.length > 0) {
        //     const file = data.fileList[0].file;
        // 默认没图片时
        if (data.fileList.length == 1) {
            const file = data.fileList[0].file;
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                const result = reader.result;
                if(typeof result === "string") {
                avatar.value = result;
                fileList.value = [{ 
                    url: result
                }];
                }
            };
        }
        // 检测到有图片时
        if (data.fileList.length == 2) {
            const file = data.fileList[1].file;
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                const result = reader.result;
                if(typeof result === "string") {
                  avatar.value = result;
                  fileList.value = [{ 
                      url: result
                  }];
                }
            };
        }
    };
    const handleConfirm = () => {
      console.log("fileList", fileList.value);
      console.log("avatar", avatar.value);
    }
    return {
      avatar,
      fileList,
      beforeUpload,
      handleFileChange,
      handleConfirm,
    }
  },
})
</script>

<style scoped>
.container {
  padding: 16px;
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.upload-container {
  /* width: 200px;
  height: 200px; */
}
.btn-container {
  display: flex;
  align-items: flex-end;
}
</style>