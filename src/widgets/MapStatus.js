
class MapStatus {

    constructor() {
        this.dictionary = new Map();
        this.dictionary.set("projection", "");
        this.dictionary.set("coordinate", "");
        this.dictionary.set("resolution");
        this.dictionary.set("zoom", "");
    }

    getStatus(key) {
        return this.dictionary.get(key.toString().toLowerCase());
    }

    setStatus(key, value) {
        this.dictionary.set(key.toString().toLowerCase(), value);
    }
}

export { MapStatus };