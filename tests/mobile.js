const caps = {
  "deviceName": "emulator-5554",
  "platformName": "android",
  "appPackage": "me.hachy.todo",
  "appActivity": ".MainActivity",
  "noReset": "true"
}

mob.init(caps)

const task = 'write blog post'
mob.click('id=main_fab')
mob.type('id=edit_text', task)
mob.click('id=create_task')

const tasks = mob.findElements('id=todo_title')
assert.equal(tasks.length, 1, 'Number of tasks')
assert.equal(tasks[0].getText(), task, 'Expected task')

mob.closeApp()