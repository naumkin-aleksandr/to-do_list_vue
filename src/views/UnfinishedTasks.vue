<template>
    <div class="box">
        <h1 class="title">Не выполненные задачи</h1>
        <h2 class="title" v-if="!counterUnfinishedTasks">Все задачи выполнены</h2>
        <Task  v-for="task in unfinishedTasks"  :key="task.id" :task="task"/>
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
        ...mapGetters(['unfinishedTasks', 'counterUnfinishedTasks'])
    },
}
</script>