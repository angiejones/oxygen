module.exports = {

    searchPage: {
        url: 'https://automationbookstore.dev/',
        searchBar: 'id=searchBar',
        hiddenBooks: 'li.ui-screen-hidden',
        visibleBooks: 'li:not(.ui-screen-hidden)',
        visibleTitles: 'li:not(.ui-screen-hidden) h2',     

        open() {
            web.init()
            web.open(this.url)
        } ,

        search(query){
            web.type(this.searchBar, query)
            web.waitForExist(this.hiddenBooks)
        },

        getNumberOfVisibleBooks(){
            return web.getElementCount(this.visibleBooks)
        },

        getTitlesOfVisibleBooks(){
            return web.findElements(this.visibleTitles).map(e => web.getText(e))
        }
    }
}