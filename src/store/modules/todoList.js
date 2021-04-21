export default {
    state: {
        tasks: [
            {
                id: 1,
                date: "20.04.2021",
                text: "Выучить HTML, CSS",
                status: true,
            },
            {
                id: 2,
                date: "20.04.2021",
                text: "Выучить JavaScript",
                status: false,
            },
            {
                id: 3,
                date: "20.04.2021",
                text: "Выучить Vue",
                status: false,
            },
        ],
    },
    mutations: {
        toggleStatus(state, id) {
            state.tasks = state.tasks.map((el) =>
                el.id === id ? { ...el, status: !el.status } : el
            );
        },
        createTask(state, newTask) {
            state.tasks.push(newTask);
        },
        deleteTask(state, id) {
            state.tasks = state.tasks.filter((el) => el.id !== id);
        },
        editTask(state, { id, text }) {
            state.tasks = state.tasks.map((el) =>
                el.id === id ? { ...el, text } : el
            );
        },
    },
    getters: {
        allTasks(state) {
            return state.tasks;
        },
        completedTasks(state) {
            return state.tasks.filter((el) => el.status);
        },
        unfinishedTasks(state) {
            return state.tasks.filter((el) => !el.status);
        },
        counterCompletedTasks(state) {
            return state.tasks.filter((el) => el.status).length;
        },
        counterUnfinishedTasks(state) {
            return state.tasks.filter((el) => !el.status).length;
        },
    },
    actions: {},
};
