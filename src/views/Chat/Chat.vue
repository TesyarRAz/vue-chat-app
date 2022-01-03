<template>
  <div class="d-block mt-3">
    <div class="mb-1">
      <span class="text-muted small" v-text="chat.name || 'Unknown'"></span>
    </div>
    <div class="d-inline bg-primary text-white p-2 rounded" v-text="chat.message"></div>
  </div>
</template>

<script>
export default {
    props: ['chat']
}
</script>