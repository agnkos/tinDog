class Dog {
    constructor(data) {
        Object.assign(this, data)
    }

    setMatchStatus(bool) {
        this.hasBeenLiked = bool
        this.hasBeenSwiped = true
    }

    getDogHtml() {
        const { name, avatar, age, bio } = this
        return `
        <img src="${avatar}" alt="picture of ${name}">
        <div class="dog-info">
            <h1>${name}, ${age}</h1>
            <p>${bio}</p>
        </div>
        `
    }
}

export { Dog }
