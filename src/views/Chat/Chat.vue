<template>
  <div class="d-block mt-3">
    <div class="d-flex flex-column flex-basis" :class="chat.userId == this.$store.state.user.id ? 'align-items-end' : 'align-items-start'">
      <div class="mb-1">
        <span class="text-muted small" v-text="chat.name || 'Unknown'"></span>
      </div>
      <div>
        <div
          class="d-inline bg-primary text-white p-2 rounded"
          v-text="chat.message"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["chat"],
};
</script>