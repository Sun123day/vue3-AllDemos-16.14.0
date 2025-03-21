/*
 * @Description: 全局注册部分antd组件
 * @Author: gonghong
 * @Date: 2024-02-19 14:58:58
 * @LastEditTime: 2024-02-26 14:27:11
 * @LastEditors: Me
 * @LastEditTime: 2025-03-20
 */
import {
  create,
  NPopconfirm,
  NUpload,
  NButton,
  NCard,
  NCollapse,
  NDivider,
  NDropdown,
  NEllipsis,
  NIcon,
  NFloatButton,
  NAutoComplete,
  NForm,
  NFormItem,
  NGrid,
  NGi,
  NGridItem,
  NFormItemGi,
  NInput,
  NRadio,
  NEmpty,
  NImage,
  NSpace,
  NScrollbar,
  NConfigProvider,
  NTooltip,
  NAvatar,
  NSpin,
  NNotificationProvider,
  NLoadingBarProvider,
  NMessageProvider,
  NDialogProvider,
  NCheckbox,
  NMenu,
  NBadge,
  NTabs,
  NTabPane,
  NSelect,
} from 'naive-ui'

const naive = create({
  components: [
      NPopconfirm,
      NUpload,
      NButton,
      NCard,
      NCollapse,
      NDivider,
      NDropdown,
      NEllipsis,
      NIcon,
      NFloatButton,
      NAutoComplete,
      NForm,
      NFormItem,
      NGrid,
      NGi,
      NGridItem,
      NFormItemGi,
      NInput,
      NRadio,
      NEmpty,
      NImage,
      NSpace,
      NScrollbar,
      NConfigProvider,
      NTooltip,
      NAvatar,
      NSpin,
      NNotificationProvider,
      NLoadingBarProvider,
      NMessageProvider,
      NDialogProvider,
      NCheckbox,
      NMenu,
      NBadge,
      NTabs,
      NTabPane,
      NSelect,
  ],
})
export const useNaiveComponents = App => {
  if (App) {
      App.use(naive)
  }
}