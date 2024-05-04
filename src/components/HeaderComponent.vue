<script setup>
import { ref } from 'vue';
import SwitchButton from '../components/SwitchButton.vue'


import * as fn from '../functions/functions';



const iconPath = ref(0);


function loadImage(path) {
    if (path) {
        let helper = fn.getIcon(path);
        iconPath.value = fn.getImageUrl(helper.icon.substring(2));
    }
    return path;
}
</script>
<template>
    <div class="header">
        <h2><img v-if="$route.params.type" :src="iconPath" :data-title="$route.params.type"> {{
            loadImage($route.params.type) }} </h2>
        <SwitchButton></SwitchButton>
    </div>
</template>


<style scoped>
.header {
    padding: 0 0.3rem;
}

h2 {
    display: flex;
    align-items: center;
    gap: 1rem;
}
</style>