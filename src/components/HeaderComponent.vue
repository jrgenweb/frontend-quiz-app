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

    /* console.log(route.params.type, 'params')
    iconPath.value = route.params.type */


    quizzData.value = fn.getQuizzDataByTitle(route.params.type);
    iconPath.value = '/src/' + quizzData.value.icon;
    //console.log(fn.getQuizzDataByTitle(route.params.type), 'header data');
    /* switch (route.params.type) {
        case 'HTML':
            iconPath.value = "/src/assets/images/icon-html.svg"
            break
        case 'JavaScript':
            iconPath.value = "/src/assets/images/icon-js.svg"
            break;
        case 'CSS':
            iconPath.value = "/src/assets/images/icon-css.svg"
            break;
        case 'Accessibility':
            iconPath.value = "/src/assets/images/icon-accessibility.svg"
            break;
        default: break;
    } */


});

</script>
<template>
    <div>
        <h2><img :src="iconPath" :data-name="quizzData.title"> {{ $route.params.type }} </h2>
        <SwitchButton></SwitchButton>
    </div>
</template>


<style scoped>
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