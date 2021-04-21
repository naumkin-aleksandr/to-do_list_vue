<template>
    <div class="nav">
        <router-link class="nav__btn" to="/" exact>Задачи</router-link> 
        <router-link class="nav__btn" :to="{name: 'AddTask'}">Добавить задачу</router-link>
        <router-link class="nav__btn" :to="{name: 'UnfinishedTasks'}">
            Не выполненные
            <span class="nav__counter">{{counterUnfinishedTasks}}</span>
            </router-link>
        <router-link class="nav__btn" :to="{name: 'CompletedTasks'}">
            Выполненные 
            <span class="nav__counter">{{counterCompletedTasks}}</span>
            </router-link>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        computed: {
            ...mapGetters(['counterCompletedTasks', 'counterUnfinishedTasks'])
        }
    }
</script>

<style scoped lang="scss">
    .nav {
        display: flex;

        &__btn {
            margin-right: 20px;
            padding: 5px 10px;
            font-weight: 700;
            color: #fff;
            white-space: nowrap;
            border: 2px solid #fff;
            border-radius: 4px;
            transition: box-shadow .2s;

            &:not(.router-link-active):hover {
                box-shadow: 0 0 5px 1px #fff;
            }
        }
    }

    .router-link-active {
        color: #4943cd;
        background: #fff;
    }
    .router-link-active .nav__counter {
        color: #a039a2;
    }

</style>
