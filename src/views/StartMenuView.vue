<script setup>
//import TheWelcome from '../components/TheWelcome.vue'

import { onMounted, ref } from 'vue';
import * as fn from '../functions/functions';

const quizzCategories = ref(0)
onMounted(() => {
    quizzCategories.value = fn.loadQuizzCategories()
    console.log(fn.loadQuizzCategories());
})

</script>

<template>
    <main>

        <div class="header">

        </div>

        <div class="flex">
            <div>
                <h1>Welcome to the <span>Frontend Quiz!</span></h1>
                <p>Pick a subject to get started</p>
            </div>
            <div class="">
                <div class="cards">


                    <RouterLink :to="'/questions/' + item.title" v-bind:key="index"
                        v-for="item, index in quizzCategories">
                        <div class="card">
                            <img :src="'/src/' + item.icon" alt="HTML logo">
                            <span>{{ item.title }}</span>
                        </div>
                    </RouterLink>


                </div>
            </div>
        </div>
    </main>
</template>


<style scoped>
p {
    font-style: italic;
    margin-top: 52px;
    margin-bottom: 72px;
}

a {
    color: var(--color-text);
    text-decoration: none;
}

.cards {
    width: 100%;
}

a .card {
    width: inherit;
    background-color: var(--color-card-bg);
    border-radius: 1.5rem;


    padding: 1.25rem;
    font-size: var(--fs-heading-s);

    display: flex;
    align-items: center;
    gap: 2rem;

    & span {
        font-weight: var(--fw-700);
    }

}

.card img {
    padding: 0.5rem;
    border-radius: 0.5rem;
}

a:nth-child(1) .card img {
    background-color: #FFF1E9;
}

a:nth-child(2) .card img {
    background-color: #E0FDEF;
}

a:nth-child(3) .card img {
    background-color: #EBF0FF;
}

a:nth-child(4) .card img {
    background-color: #F6E7FF;
}

.cards a:not(:first-child) .card {
    margin-top: 1.5rem;

}

.card:hover {
    cursor: pointer;
}
</style>