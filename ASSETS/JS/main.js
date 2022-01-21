const app = new Vue({
    el: '#root',
    data: {
        logoImg: 'https://www.boolean.careers/images/misc/logo.png',
        noTask: true,
        error: false,
        complete: true,
        emptyBin: true,
        newTask: "",
        completedTasks: [],
        deletedTasks: [],
        tasks: [],

    },
    methods: {
        removeTask(i) {
            this.deletedTasks.push(this.tasks[i])
            this.tasks.splice(i, 1)
            this.emptyBin = false
            if (this.tasks.length == 0) {
                this.noTask = true
            }
        },
        checkedTask(i) {
            this.completedTasks.push(this.tasks[i])
            this.tasks.splice(i, 1)
            this.complete = false
            if (this.tasks.length == 0) {
                this.noTask = true
            }
        },
        addTask() {
            if (this.newTask.length > 6) {
                this.tasks.push(this.newTask)
                this.error = false
                this.newTask = ""
                this.noTask = false
            } else {
                this.error = true
            }
        },
        redoTask(i) {
            this.tasks.push(this.completedTasks[i])
            this.completedTasks.splice(i, 1)
            this.noTask = false
            if (this.completedTasks.length == 0) {
                this.complete = true
            }
        },
        restoreTask(i) {
            this.tasks.push(this.deletedTasks[i])
            this.deletedTasks.splice(i, 1)
            this.noTask = false
            if (this.deletedTasks.length == 0) {
                this.emptyBin = true
            }
        },
        deleteAll() {
            this.deletedTasks = []
            this.emptyBin = true
        }

    },


})


