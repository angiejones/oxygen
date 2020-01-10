const response = http.get(
    'https://www.googleapis.com/books/v1/volumes?q=9781451648546',
    {'content-type': 'application/json'}
)

log.info(JSON.stringify(response))
assert.equal(response.totalItems, 1259, 'Total items incorrect')
assert.equal(response.items[0].id, 'nvgdAwAAQBAJ', 'Item ID incorrect')