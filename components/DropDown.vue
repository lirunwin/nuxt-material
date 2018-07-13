<template>
  <div class="dropdown">
    <!-- <input type="text" readonly class="dropdown-input">
    <div class="dropdown-option">
        // TODO: this is kidding, but i am run out of time
    </div> -->
    <select>
      <option value="1">请选择</option>
      <option value="1">选项2</option>
      <option value="1">选项3</option>
      <option value="1">选项4</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "DropDown"
};
</script>

<style lang="scss">
.dropdown {
  margin: 6px 8px;
  border: 1px $primary-color solid;
  border-radius: $border-radius;
  display: inline-block;
  max-width: 100%;
  height: 32px;
  width: auto;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  .dropdown-input {
    background: none;
    border: none;
    cursor: pointer;
  }
  .dropdown-option {
    position: absolute;
  }
  select {
    border: none;
    background: $input-bg-color;
    height: 100%;
    outline: none;
    display: inline-block;
    padding-left: 5px;
    padding-right: 5px;
  }
}
</style>
