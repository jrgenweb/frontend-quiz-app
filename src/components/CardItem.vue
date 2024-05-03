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
            <span class="icon">{{ letters[index] }}</span>
            <span>{{ text }}</span>
        </div>

    </div>
</template>

<style scoped>
a {
    text-decoration: none;
    /* color: var(--color-text-card); */
}

.card {

    --_padding: 12px;
    --_border-radius: 12px;

    width: 100%;
    background-color: var(--color-card-bg);
    border-radius: var(--_border-radius);


    padding: var(--_padding);
    padding-right: calc(var(--_padding) + 40px);
    font-size: var(--fs-heading-s);

    display: flex;
    align-items: center;
    gap: 1rem;

    outline: 2px solid transparent;
    transition: 0.3s;


    position: relative;

    & span {
        font-weight: var(--fw-700);
    }

    & .icon {
        width: 40px;
        height: 40px;
        color: var(--color-text-card);
    }

    &:hover {
        & .icon {
            background-color: var(--clr-primary-lighten);
            color: var(--clr-primary);
        }
    }

}


@media (min-width:37.5rem) {
    .card {
        --_padding: 1.25rem;
        --_border-radius: 1.5rem;
        gap: 2rem;

        & .icon {
            width: 56px;
            height: 56px;
        }
    }

    .icon {}
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



.card.correct {
    & .icon {
        background-color: var(--clr-success);
        color: var(--clr-white);
    }
}

.card.active.correct {
    outline: 2px solid var(--clr-success);
}


.active.fail::after {
    background: url('../assets/images/icon-error.svg');
}


.card.correct::after {
    background: url('../assets/images/icon-correct.svg');
}

.active.fail::after,
.card.correct::after {
    --_size: 24px;
    content: '';
    background-size: var(--_size) var(--_size);
    position: absolute;
    right: var(--_padding);
    width: var(--_size);
    height: var(--_size);
}



@media (min-width:37.5rem) {

    .active.fail::after,
    .card.correct::after {
        --_size: 30px;
    }

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