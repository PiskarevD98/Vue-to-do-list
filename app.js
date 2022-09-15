Vue.createApp({
    data: () => ({
        Html: '<h1>Планы на сегодня</h1>',
        title: 'Мои планы',
        person : {
            firstName: 'Dima',
            lastName: 'Pi4kar',
            age: 24,
        },
        items: [],
        status: true,
    }),
    methods: {
        addItem() {
            this.items.unshift(this.$refs.myInput.value)
            this.$refs.myInput.value = ''
        },
        remove(i) {
            this.items.splice(i, 1)
        },
    }, 
    computed: {
        eventItems() {
            return this.items
        },
        done() {
            if(this.status == false) {
                return 'done-task '
            } else {
                return ''
            }
        }
    }
}).mount('#app')
