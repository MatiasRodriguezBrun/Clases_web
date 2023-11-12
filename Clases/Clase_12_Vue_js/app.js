const app = Vue.createApp({
    data() {
        return {
            showPlayers: true,
            player: 'Tevez',
            team: 'Boca',
            age: 35,
            
        }
    },
    methods: {
        changePlayer() {
            this.player = 'Palermo'
        },
        toggleShowPlayers() {
            this.showPlayers = !this.showPlayers
        },
    }
})

app.mount('#app')