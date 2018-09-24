<template>
  <div class="cmd-result">
    <span v-for="cmd in result" v-bind:key="cmd.text">
      <pre v-if="cmd.pre" v-html="cmd.text" />
      <span v-else v-bind:style="cmd.style" v-html="cmd.text" />
      {{ cmd.separator }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    result: Array
  }
};
</script>

<style>
.cmd-result {
  color: #fefefe;
  padding-left: 10px;
  text-align: left;
  white-space: normal;
  overflow: hidden;
  animation: show 0.1s linear 0.5s forwards;
  opacity: 0;
  margin-bottom: 5px;
}
@keyframes show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
