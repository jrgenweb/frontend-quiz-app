<script setup>
import { onMounted, ref } from 'vue';
import router from '@/router';
import * as fn from '../functions/functions';


const quizzCategories = ref(0)


onMounted(() => {
    quizzCategories.value = fn.loadQuizzCategories()
})




</script>

<template>
    <main>
        <div class="flex">
            <div>
                <h1>Welcome to the <span>Frontend Quiz!</span></h1>
                <p>Pick a subject to get started</p>
            </div>

            <div class="cards">
                <div class="card" v-bind:key="index" @click="router.push('/questions/' + item.title)"
                    v-for="item, index in quizzCategories">
                    <img :src="fn.getImageUrl(item.icon.substring(2))" :alt="item.title + ' logo'"
                        :data-title="item.title">
                    <span>{{ item.title }}</span>
                </div>
            </div>

        </div>
    </main>
</template>


<style scoped>
p {
    font-style: italic;
    margin-top: 0.5rem;
    margin-left: 0.2rem;
    margin-bottom: 2.5rem;
}

a {
    margin: 0;
    padding: 0;
}

h1 {
    line-height: 1;
    font-size: var(--fs-heading-l);

    margin-top: 0.5rem;
    letter-spacing: -0.3px;
    line-height: 120%;

    & span {
        display: block;
        font-weight: bold;
    }
}

@media (min-width:37.5rem) {
    p {
        margin-top: 52px;
        margin-bottom: 72px;
    }
}

a {
    color: var(--color-text);
    text-decoration: none;
}

.cards {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

}

.card {
    width: inherit;
    background-color: var(--color-card-bg);
    border-radius: 12px;


    padding: 12px;
    font-size: var(--fs-heading-s);

    display: flex;
    align-items: center;
    gap: 1.25rem;

    & span {
        font-weight: var(--fw-700);
    }

    &:hover {
        cursor: pointer;
    }

}




.card img {
    padding: 0.5rem;
    border-radius: 0.5rem;
    width: 40px;
}

@media (min-width:37.5rem) {
    .card img {
        width: 56px;
    }

    a .card {
        padding: 1.25rem;
        border-radius: 24px;
    }
}

/* .card:nth-child(1) img {
    background-color: #FFF1E9;
}

.card:nth-child(2) img {
    background-color: #E0FDEF;
}

.card:nth-child(3) img {
    background-color: #EBF0FF;
}

.card:nth-child(4) img {
    background-color: #F6E7FF;
} */

.cards a:not(:first-child) .card {
    margin-top: 1.5rem;

}
</style>