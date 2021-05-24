<template>
  <div>选项式API</div>
  <p>name: {{ name }}</p>
</template>

<script lang="ts">
export default {
  data(): Record<string, unknown> {
    return {
      name: 'lala'
    };
  },
  mounted(): void {
    alert('mounted');
  }
};
</script>
