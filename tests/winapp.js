win.init({
    app: "Calculator",
    platformName: "Windows"
})

win.click("~num1Button")
win.click("~plusButton")
win.click("~num7Button")
win.click("~equalButton")
win.assertText("~CalculatorResults", "Display is 8")