const app = new Vue({
    el: '#root',
    data: {
        logoImg: 'https://www.boolean.careers/images/misc/logo.png',
        error: false,
        completedTasks: [],
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
                return this.error = true
            }
        },
        checked(i) {
            if (!this.completedTasks.includes(i)) {
                this.completedTasks.push(i)
                console.log(this.completedTasks);
            } else {
                this.completedTasks.splice(i, 1)
                console.log(this.completedTasks);
            }
        },
    },


})


