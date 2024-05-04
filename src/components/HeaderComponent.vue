<script setup>
import { onMounted, ref } from 'vue';
import SwitchButton from '../components/SwitchButton.vue'
import { useRoute } from 'vue-router';

import * as fn from '../functions/functions';

const route = useRoute();

const iconPath = ref(0);
const quizzData = ref({});
const props = defineProps({
    title: String,
    icon: String
});

onMounted(() => {

    //console.log(route.params.type)



});


function loadImage(path) {


    if (path) {
        let helper = fn.getIcon(path);


        console.log(helper.icon + 'path')
        //quizzData.value = helper;
        iconPath.value = fn.getImageUrl(helper.icon.substring(2));
        console.log(quizzData.value, 'quizzdataaaaa');
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

    & img[data-name="HTML"] {
        padding: 0.5rem;
        border-radius: 0.5rem;
        background-color: #FFF1E9;
    }

    & img[data-name="CSS"] {
        background-color: #E0FDEF;
    }

    & img[data-name="JavaScript"] {

        background-color: #EBF0FF;
    }

    & img[data-name="Accessibility"] {

        background-color: #F6E7FF;
    }
}
</style>