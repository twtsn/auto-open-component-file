<template>
  <div class="home">
    <testA></testA>
    <testB></testB>
    <testC></testC>
  </div>
</template>
<script>
import testA from "../components/testA";
import testB from "../components/testB";
import testC from "../components/testC";
export default {
  name: "Home",
  components: {
    testA,
    testB,
    testC
  }
};
</script>
