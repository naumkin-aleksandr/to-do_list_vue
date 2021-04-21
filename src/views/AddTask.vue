<template>
    <div class="add-task">
        <h1 class="title">Добавить задачу</h1>
        <form class="add-task__form" @submit="addTask">
            <textarea class="add-task__message" v-model="message" placeholder="Введите текст"></textarea>
            <button class="add-task__btn" type="submit">Добавить</button>
        </form>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex';

    export default {
        name: 'AddTask',
        data() {
            return {
            message: '',
            }
        },
        methods: {
            ...mapMutations(['createTask']),
            addTask() {
            if(this.message.trim().length ===  0) return;
            const newTask = {
                id: Date.now(),
                date: new Date().toLocaleDateString(),
                text: this.message,
                status: false,
            }
            this.createTask(newTask);
            this.message = '';
            }
        }
    }
</script>

<style scoped lang="scss">
    .add-task {
        padding: 20px;
        text-align: center;

        &__form {
        max-width: 600px;
        margin: 0 auto;
        display: flex;
        flex-flow: column;
        }

        &__message {
        min-width: 380px;
        margin-bottom: 20px;
        height: 75px;
        padding: 5px ;
        font-size: 16px;
        line-height: 24px;
        border: 2px solid #4943cd;
        border-radius: 4px;
        }

        &__btn {
        width: 200px;
        padding: 7px 0;
        font-weight: 700;
        letter-spacing: 1px;
        color: #4943cd;
        background: #fff;
        border: 2px solid #4943cd;
        border-radius: 4px;
        cursor: pointer;
        transition: color .3s, border-color .3s, background .3s;

        &:hover {
            color: #fff;
            background: #4943cd;
            border-color: #4943cd;
        }
        }
    }
</style>