<template>
  <main-view-header>
    <template #header>
      <main-view-header-title :title="title" />
    </template>
    <template #tools>
      <main-view-header-tools-item
        @click="openSidebar"
        icon-mdi
        icon-name="info-outline"
      />
    </template>
  </main-view-header>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import useSidebar from '@/use/sidebar'
import MainViewHeader from '@/components/Main/MainView/MainViewHeader/MainViewHeader.vue'
import MainViewHeaderTitle from '@/components/Main/MainView/MainViewHeader/MainViewHeaderTitle.vue'
import MainViewHeaderToolsItem from '@/components/Main/MainView/MainViewHeader/MainViewHeaderToolsItem.vue'

export default defineComponent({
  name: 'DMViewHeader',
  components: {
    MainViewHeader,
    MainViewHeaderTitle,
    MainViewHeaderToolsItem
  },
  props: {
    userName: {
      type: String,
      required: true
    }
  },
  setup(props, context) {
    const { openSidebar } = useSidebar()
    const title = computed(() => `@ ${props.userName}`)
    return { openSidebar, title }
  }
})
</script>

<style lang="scss" module></style>
