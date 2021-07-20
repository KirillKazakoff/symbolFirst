export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        this.members.add(character);
    }

    addAll(...characters) {
        characters.forEach((character) => this.members.add(character));
    }

    toArray() {
        return [...this.members];
    }

    [Symbol.iterator]() {
        let index = -1;
        const chars = [...this.members];

        return {
            next: () => {
                index += 1;
                return {
                    value: chars[index],
                    done: index === chars.length,
                };
            },
        };
    }
}
