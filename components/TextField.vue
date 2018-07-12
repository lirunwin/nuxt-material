<template>
  <input class="text-feild">
</template>

<script>
export default {
  name: 'TextField'
}
</script>

<style lang="scss">
.text-feild {
    margin: 6px 8px;  
    background: $input-bg-color;
    border: 1px $input-border-color solid;
    height: 32px;
    border-radius: $input-border-radius;
    outline: none;
    display: inline-block;
    position: relative;
    vertical-align: top;
}
</style>
