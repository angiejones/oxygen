web.init();
web.open('https://automationbookstore.dev/');
web.click('id=searchBar');
web.type('id=searchBar', 'Agile Testing');
web.assertText('id=pid3_title', 'Agile Testing');
