const app = new Vue({
    el: '#root',
    data: {
        logoImg: 'https://www.boolean.careers/images/misc/logo.png',
        error: false,
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
        }
    }

})


