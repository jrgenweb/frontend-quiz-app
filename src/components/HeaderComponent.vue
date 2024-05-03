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


    quizzData.value = fn.getQuizzDataByTitle(route.params.type);
    iconPath.value = '/src/' + quizzData.value.icon;



});

</script>
<template>
    <div class="header">
        <h2><img :src="iconPath" :data-name="quizzData.title"> {{ $route.params.type }} </h2>
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