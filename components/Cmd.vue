<template>
  <div class="line">
    <div class="prompt">takahiro_sato@portfolio $ </div><div class="cmd"> {{ cmd }}</div><div class="cursor">❚</div>
  </div>
</template>

<script>
export default {
  props: {
    cmd: String
  }
};
</script>

<style>
.line {
  color: #fefefe;
  padding-left: 10px;
  width: 90vw;
}
.prompt {
  color: #ccc;
  text-align: left;
  float: left;
  white-space: normal;
  overflow: hidden;
  word-wrap: normal;
}
.cmd {
  margin-left: 5px;
  color: #fefefe;
  animation: type 0.3s 0.2s steps(10, end) forwards;
  width: 0;
  text-align: left;
  white-space: normal;
  overflow: hidden;
  float: left;
}

.cursor {
  animation: blink 0.3s 0.2s 2 forwards;
  float: left;
}

@keyframes type {
  to {
    width: auto;
  }
}

@keyframes blink {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>

