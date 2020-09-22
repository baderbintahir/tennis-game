class Person {
    constructor(fullName) {
        this.fullName = {
            firstName: fullName.split(' ')[0],
            lastName: fullName.split(' ')[1]
        }
    }
}

class TennisPlayer extends Person {
    constructor(fullName) {
        super(fullName)
        this.setsWon = 0
        this.setsLost = 0
        this.gamesWon = 0
    }
}

class TennisGame {
    constructor(p1, p2) {
        this.player1 = new TennisPlayer(p1)
        this.player2 = new TennisPlayer(p2)
        this.i = 0
    }

    game() {
        if (Math.round((Math.random() * 1))) {
            this.player1.setsWon += 1
            this.player2.setsLost += 1

            let setInfo = document.createElement("p");
            setInfo.innerHTML = `Set${++this.i}: ${this.player1.fullName.firstName} ${this.player1.fullName.lastName} Won`

            let setInfoDiv = document.querySelector('.set-info')
            setInfoDiv.appendChild(setInfo)

            if (this.player1.setsWon == 5) {
                this.player1.gamesWon += 1
                this.player1.setsWon = 0
                this.player1.setsLost = 0
                this.player2.setsWon = 0
                this.player2.setsLost = 0
                this.i = 0

                let setInfo = document.createElement("p");
                setInfo.innerHTML = `Winner: ${this.player1.fullName.firstName} ${this.player1.fullName.lastName}`

                let setInfoDiv = document.querySelector('.set-info')
                setInfoDiv.appendChild(setInfo)
            }
        } else {
            this.player2.setsWon += 1
            this.player1.setsLost += 1

            let setInfo = document.createElement("p");
            setInfo.innerHTML = `Set${++this.i}: ${this.player2.fullName.firstName} ${this.player2.fullName.lastName} Won`

            let setInfoDiv = document.querySelector('.set-info')
            setInfoDiv.appendChild(setInfo)

            if (this.player2.setsWon == 5) {
                this.player2.gamesWon += 1
                this.player1.setsWon = 0
                this.player1.setsLost = 0
                this.player2.setsWon = 0
                this.player2.setsLost = 0
                this.i = 0

                let setInfo = document.createElement("p");
                setInfo.innerHTML = `Winner: ${this.player2.fullName.firstName} ${this.player2.fullName.lastName}`

                let setInfoDiv = document.querySelector('.set-info')
                setInfoDiv.appendChild(setInfo)
            }


        }

        document.querySelector('.p1-set-wins').innerHTML = this.player1.setsWon
        document.querySelector('.p1-set-loses').innerHTML = this.player1.setsLost
        document.querySelector('.p1-games-won').innerHTML = this.player1.gamesWon


        document.querySelector('.p2-set-wins').innerHTML = this.player2.setsWon
        document.querySelector('.p2-set-loses').innerHTML = this.player2.setsLost
        document.querySelector('.p2-games-won').innerHTML = this.player2.gamesWon

    }
}

document.querySelector('#start').addEventListener('click', () => {

    const p1 = document.querySelector('#p1').value
    const p2 = document.querySelector('#p2').value

    document.querySelector('.p1-name').innerHTML = p1
    document.querySelector('.p1-set-wins').innerHTML = 0
    document.querySelector('.p1-set-loses').innerHTML = 0
    document.querySelector('.p1-games-won').innerHTML = 0
    document.querySelector('#p1').value = ""


    document.querySelector('.p2-name').innerHTML = p2
    document.querySelector('.p2-set-wins').innerHTML = 0
    document.querySelector('.p2-set-loses').innerHTML = 0
    document.querySelector('.p2-games-won').innerHTML = 0
    document.querySelector('#p2').value = ""

    document.querySelector('.set-info').innerHTML = ""

    let game_1 = new TennisGame(p1, p2)

    document.querySelector('#new-set').addEventListener('click', () => {
        game_1.game()
    })
})