<script lang="ts">
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
export default {
  data() {
    let i = ref(10);
    let isVisible = ref<boolen>(0)
    let cssStyle  = ref({fontSize:"28px"});
    return {
      i,cssStyle,isVisible
    }
  },
  methods: {
    showAlert: function () {
      alert("ok")
    },
    showKey:function(event){
        if (event.keyCode===90) {
          this.isVisible = 1

        }
        alert(event.keyCode)

    },
    btnToggle:function(){
      this.isVisible = !this.isVisible;

    }
  }

}
</script>

<template>
  <div v-show="isVisible">i am a toggle</div>
  <button @click="btnToggle" >点我</button>
  <MyComponent></MyComponent>

</template>

<style scoped></style>
