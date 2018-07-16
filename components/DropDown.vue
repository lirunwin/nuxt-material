<template>
  <label class="dropdown">
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
  </label>
</template>

<script>
export default {
  name: "DropDown"
};
</script>

<style lang="scss">
.dropdown {
  border: 1px $primary-color solid;
  border-radius: $border-radius;
  display: block;
  max-width: 100%;
  height: 32px;
  margin-right: $size1;
  overflow: hidden;
  background: $input-bg-color;
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
    background:transparent;
    height: 100%;
    width: 100%;
    outline: none;
  }
}
</style>
