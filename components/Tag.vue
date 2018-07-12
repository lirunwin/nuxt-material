<template lang="html">
  <div class="tag"><slot></slot></div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.tag {
    line-height: 1;
    padding: 0.5rem 1rem;
    display: inline-block;
    border-radius: $border-radius;
    background: $input-bg-color;
    margin-right: 1.5rem;
    margin-bottom: 0.5rem;
}
</style>
