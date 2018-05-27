var app = new Vue({
    el: '#app',
    data: {
        todo: null,
        todos: []
    },
    methods: {
        add(todo) {
            if (!this.todoIsValid) {
                return;
            }
            this.todos.push({ content: todo, finished: false });
            this.todo = null;
        },
        remove(todo) {
            this.todos = this.todos.filter((item) => {
                return item != todo;
            });
        }
    },
    computed: {
        todoIsValid() {
            return !!this.todo;
        }
    }
})