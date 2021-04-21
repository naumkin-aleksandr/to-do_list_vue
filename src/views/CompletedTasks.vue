<template>
    <div class="box">
        <h1 class="title">Выполненные задачи</h1>
        <h2 class="title" v-if="!counterCompletedTasks">Выполненных задач не найдено</h2>
        <Task  v-for="task in completedTasks"  :key="task.id" :task="task"/>
    </div>
</template>


<script>
    import {mapGetters} from 'vuex';

    import Task from '../components/Taks.vue';

    export default {
        name: 'TasksList',
        components: {
            Task,
        },
        computed: {
            ...mapGetters(['completedTasks', 'counterCompletedTasks'])
        },
    }
</script>