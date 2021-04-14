const app = new Vue({
    el: '#app',

    data: {
        todo: '',
        todos: ['Homework', 'Shopping']
    },
    methods: {
        saveTodo() {
            this.todos.push(this.todo)
            this.todo = ''
        },

        deleteTodo(index) {
            this.todos.splice(index, 1);
        }
    }
});