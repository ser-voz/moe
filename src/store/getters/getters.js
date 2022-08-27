
//Multiple getters for vocabulary and sentences store
export const getters = {
    oddItems() {
        return [...this.searchedItems].filter((item, index) => index % 2 === 0);
    },
    evenItems() {
        return [...this.searchedItems].filter((item, index) => index % 2 === 1);
    },
    searchedItems() {
        return [...this.list].filter(item =>
            this.search.match(/^[а-яА-Я]+$/) ? item.tn.toLowerCase().includes(this.search) :
                item.eng.toLowerCase().includes(this.search)
        );
    },
}
export default getters;