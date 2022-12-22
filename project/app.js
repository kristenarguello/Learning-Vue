function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            round: 1,
            winner: null,
            logs: []
        }
    },
    methods: {
        attackMonster() {
            const attackValue = getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
            this.logMessage('player','attack', attackValue);
            this.round++;
        },
        attackPlayer() {
            const attackValue = getRandomValue(8, 15);
            this.playerHealth -= attackValue;
            this.logMessage('monster','attack', attackValue);

        },
        specialAttackMonster() {
            const attackValue = getRandomValue(10, 25);
            this.monsterHealth -= attackValue;
            this.logMessage('player','special-attack', attackValue);
            this.attackPlayer();
            this.round++;
        },
        specialEnable() {
            return this.round % 3 !== 0;
        },
        heal() {
            this.round++;
            const healValue = getRandomValue(8, 20);
            if (healValue + this.playerHealth > 100)
                this.playerHealth = 100;
            else
                this.playerHealth += healValue;
            this.logMessage('player','heal',healValue);
            this.attackPlayer();
        },
        newGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.round = 1;
            this.winner = null;
            this.logs = []
        },
        surrender() {
            this.winner = 'monster';
        },
        logMessage(who, what, value) {
            this.logs.unshift({
                by: who,
                type: what,
                amount: value
            });
        }
    },
    computed: {
        monsterBar() {
            if (this.monsterHealth < 0) {
                return {width: '0%'}
            }
            return { width: this.monsterHealth + '%' }
        },
        playerBar() {
            if (this.playerHealth < 0) {
                return {width: '0%'}
            }
            return { width: this.playerHealth + '%' }
        }
    },
    watch: {
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth > 0) {
                this.winner = 'player';
            }
            else if (value <= 0) {
                this.wiiner = 'both'
            }
        },
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth > 0) {
                this.winner = 'monster'
            }
        }
    }
}).mount('#game');