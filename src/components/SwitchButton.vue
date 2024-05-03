<script setup>
import IconSunDark from './icons/IconSunDark.vue'
import IconMoonDark from './icons/IconMoonDark.vue' 
</script>
<template>
    <div>

        <IconSunDark class="icon" />
        <label class="switch">
            <input type="checkbox">
            <span class="slider round"></span>
        </label>

        <IconMoonDark class="icon" />

    </div>
</template>

<style scoped>
div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.icon {
    width: 14px;
    height: 14px;
}

/* The switch - the box around the slider */
.switch {
    position: relative;
    display: inline-block;
    width: 32px;
    /*60*/
    height: 20px;
    /*34*/
}

/* Hide default HTML checkbox */
.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

/* The slider */
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--clr-primary);
    -webkit-transition: .4s;
    transition: .4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 12px;
    /**26 */
    width: 12px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked+.slider {
    background-color: var(--clr-primary);
}

input:focus+.slider {
    box-shadow: 0 0 1px #2196F3;
}

input:checked+.slider:before {
    -webkit-transform: translateX(12px);
    -ms-transform: translateX(12px);
    transform: translateX(12px);
}

/* Rounded sliders */
.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}


@media (min-width:37.5rem) {
    .switch {
        width: 48px;
        height: 28px;
    }

    .slider:before {
        height: 20px;
        width: 20px;
    }

    input:checked+.slider:before {
        -webkit-transform: translateX(20px);
        -ms-transform: translateX(20px);
        transform: translateX(20px);
    }
}
</style>