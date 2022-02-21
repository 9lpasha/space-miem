let Store = function(){
    let that = this
    this.NavElements = ['Главная', 'ВКВС', 'Расчёты', 'Эмулятор', 'Контакты']
    this.LineUnderOnePoint = {
        width: '',
        posFirst: ''
    }

    this.updateLine = (width, posFirst) => {
        that.LineUnderOnePoint = {
            width: width,
            posFirst: posFirst
        }
    }
    this.currentMenu = 4
    this.updateCurrentMenu = (news) => {
        that.currentMenu = news
    }
}

export let store = new Store()