<script setup>
import { onMounted } from 'vue';


const props = defineProps({
    text: String,
    index: Number,
    state: Object
})
/**
 * CSS SELECTORS
 * active, active, hover
 * correct, correct + active , just correct 
 * fail, fail + active akkor piros ikon a nem aktivra
 * 
 */
const letters = "ABCDEFG"


onMounted(() => {

})
function click() {
    /* console.log(props.state.active, 'active') */
    console.log(props.state, 'bindClass');
}
</script>

<template>
    <div class="cards">

        <div class="card" :class="[state.correct, state.fail, { active: state.active }]" @click="click">
            <span class=" icon">{{ letters[index] }}</span>
            <span>{{ text }}</span>
        </div>

    </div>
</template>

<style scoped>
a {
    text-decoration: none;
    color: var(--color-text);
}

.card {
    width: 100%;
    background-color: var(--color-card-bg);
    border-radius: 1.5rem;


    padding: 1.25rem;
    font-size: var(--fs-heading-s);

    display: flex;
    align-items: center;
    gap: 2rem;

    outline: 2px solid transparent;
    transition: 0.3s;


    position: relative;

    & span {
        font-weight: var(--fw-700);
    }

    &:hover {
        & .icon {
            background-color: var(--clr-primary-lighten);
            color: var(--clr-primary);
        }
    }

}

.card.active {
    outline: 2px solid var(--clr-primary);

    & .icon {
        background-color: var(--clr-primary);
        color: var(--clr-white);
    }
}





.active.fail {
    outline: 2px solid var(--clr-danger);

    & .icon {
        background-color: var(--clr-danger);
        color: var(--clr-white);
    }
}

.active.fail::after {
    content: url('../assets/images/icon-error.svg');
    position: absolute;
    right: 1.25rem;
}

.card.correct {


    & .icon {
        background-color: var(--clr-success);
        color: var(--clr-white);
    }


}

.card.active.correct {
    outline: 2px solid var(--clr-success);
}

.card.correct::after {
    content: url('../assets/images/icon-correct.svg');
    position: absolute;
    right: 1.25rem;

}

.card .icon {
    padding: 0.5rem;
    border-radius: 0.5rem;
    background-color: #F4F6FA;
    width: 56px;
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;


    transition: 0.3s;
}




.card:hover {
    cursor: pointer;
}
</style>