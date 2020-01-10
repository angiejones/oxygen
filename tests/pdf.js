const file = './assets/A Journey Through Test Automation Patterns.pdf'
const text = 'But as soon as we are finished'
const page = 17
pdf.assert(file, text, page, 'Text not found')