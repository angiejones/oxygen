email.init('{EMAIL ADDRESS}', '{PASSWORD}', 'imap.gmail.com', 993, true, 3000);
let mail = email.getLastEmail(60, '{SUBJECT}', 5000);
log.info(JSON.stringify(mail, null, 2));
assert.equal(mail.body.includes('a breath of fresh air'),true, 'Email content not found')