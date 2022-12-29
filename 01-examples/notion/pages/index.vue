<script setup lang="ts">
const { $notion } = useNuxtApp();
const { data } = await useAsyncData("notion-index", () => $notion.getPageBlocks("275b353c454f48d6b9ea8c06c9960897"));
const { mapPageUrl, pageLinkOptions } = useProps();
</script>

<template>
  <div>
    <NotionRenderer :blockMap="data" fullPage prism katex :mapPageUrl="mapPageUrl" :pageLinkOptions="pageLinkOptions" />
  </div>
</template>
