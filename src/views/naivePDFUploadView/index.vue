<!-- n-upload的PDF上传与预览 -->
<template>
  <div class="content">
    <div class="main">
        <n-form ref="formRef" :model="formParams" :rules="rules">
          <n-grid :cols="24" :x-gap="20">
              <n-form-item-gi label="选择文档:" :span="24" path="fileLink">
                  <n-upload 
                      v-model:value="formParams.fileLink"
                      :max="1"
                      :on-change="handleFileChange"
                      @before-upload="beforeUpload"
                  >
                    <n-button>上传文件</n-button>
                  </n-upload>
              </n-form-item-gi>
          </n-grid>
        </n-form>
    </div>
    <div class="table">
        <n-data-table
          :bordered="false"
          :single-line="false"
          :columns="columns"
          :data="tableData"
        />
    </div>
    <!-- <iframe :src="iframeUrl" style="position:absolute;"></iframe> -->
  </div>
</template>
<script>
import { defineComponent, reactive, ref, h } from 'vue'
import { useMessage, NUpload, NButton, NDataTable } from "naive-ui";
export default defineComponent({
    components: {
      NUpload,
      NButton,
      NDataTable
    },
    setup() {
        const message = useMessage();
        const formRef = ref()
        const formParams = reactive({
            fileLink: '',
        })
        const rules = reactive({
            fileLink: [
                {
                    required: true,
                    message: '请选择文档!',
                    trigger: ['blur'],
                },
            ],
        })
        // 限制文件类型
        const beforeUpload = (file) => {
            const allowedExtensions = [
                'application/pdf',
            ];
            const fileExtension = file.file.type;
            // console.log(fileExtension)

            if (!allowedExtensions.includes(fileExtension)) {
                message.error("只能上传pdf格式的文件，请重新上传");
                return false;
            }
            return true;
        }
        // 表格数据
        const tableData = ref([])
        const iframeUrl = ref("");
        const previewPDF = (row) => {
            // 实现预览PDF的逻辑
            // console.log('预览PDF', row);
            const blob = new Blob([row],{type: 'application/pdf'});
            iframeUrl.value = window.URL.createObjectURL(blob);
        }
        // 表格列
        const columns = [
            {
              title: "文档名称",
              key: "name",
              width: '230px',
            },
            {
              title: "操作",
              key: 'actions',
              width: '230px',
              render(row){
                  return h('div', [
                      h(NButton, {
                          size: 'small',
                          text: true,
                          type: 'info',
                          style: { marginRight: '16px' },
                          onClick: () => previewPDF(row),
                      }, () => '预览PDF'),
                  ])
              },
              fixed: 'right',
            },
        ]
        // 处理文件选择变化
        // const handleFileChange = (fileList) => {
        //     formParams.fileLink = fileList.fileList.length ? fileList.fileList[0].fullPath : '';
        const handleFileChange = (options) => {
            // console.log(options)
            const { file, fileList } = options;
            if (fileList.length > 0) {
                formParams.fileLink = fileList[0].name; // 存储文件名
                // 将文件信息添加到tableData数组中
                tableData.value.push({
                    fullPath: fileList[0].fullPath, // 使用文件唯一标识符作为key
                    name: fileList[0].name, // 文件名
                    // 其他文件属性可以根据需要添加
                });
                // console.log(tableData)
            }
        }
        return {
            formRef,
            formParams,
            rules,
            handleFileChange,
            beforeUpload,
            columns,
            tableData,
            previewPDF,
            iframeUrl
        }
    },
})
</script>

<style lang="scss" scoped>
.content{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .main {
        margin: 100px 0;
    }
}
</style>
