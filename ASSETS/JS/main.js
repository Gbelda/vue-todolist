const app = new Vue({
    el: '#root',
    data: {
        logoImg: 'https://www.boolean.careers/images/misc/logo.png',
        complete: false,
        error: false,
        completedTasks: [],
        newTask: "",
        tasks: [
            'Fare i compiti',
            'Fare la spesa',
            'Fare il bucato'
        ],

    },
    methods: {
        removeTask(i) {
            this.tasks.splice(i, 1)
            if (this.tasks.length == 0) {
                return this.complete = true
            }
        },
        checked(i) {
            if (!this.completedTasks.includes(this.tasks[i])) {
                this.completedTasks.push(this.tasks[i])
                console.log(this.completedTasks);
            } else if (this.completedTasks.includes(this.tasks[i])) {
                this.completedTasks.splice(i, 1)
                console.log(this.completedTasks);
            }
        },
        addTask() {
            if (this.newTask.length > 6) {
                this.tasks.push(this.newTask)
                this.error = false
                this.newTask = ""
                console.log(this.tasks);
                this.complete = false
            } else {
                this.error = true
            }
        }
    },


})


