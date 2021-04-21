<template>
    <div class="box">
        <h1 class="title">Задачи</h1>
        <Task v-for="task in allTasks" :key="task.id" :task="task"/>
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
        ...mapGetters(['allTasks'])
    },
    }
</script>

