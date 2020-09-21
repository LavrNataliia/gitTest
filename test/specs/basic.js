describe('webdriver.io page', () => {
    xit('should have the right title', () => {
        browser.url('https://webdriver.io')
        expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js');
    });

    xit('should demonstrate the addValue command', () => {
        browser.url('https://webdriver.io')
        let input = $('#search_input_react')
        input.addValue('test')
        browser.pause(4000);
        input.addValue(123)
        browser.pause(2000);
    
        value = input.getValue()
        assert(value === 'test123') // true
    });
    xit('should demonstrate  setValue command', function () {
        browser.url('https://webdriver.io');
        const elem = $('#search_input_react');
        elem.setValue('test123');
        browser.pause(2000);
    });

    xit('should demonstrate the click command', () => {
        browser.url('https://webdriver.io');
        const blogButton = $('[href="/blog/"]')
        browser.pause(2000);
        blogButton.click()
        browser.pause(2000);
        const guideButton = $('.nav-site.nav-site-internal [href="/docs/gettingstarted.html"]')
        guideButton.click()
        browser.pause(2000);
    });

    xit('should demonstrate attr', () => {
        browser.url('https://webdriver.io');
        const input = $('#search_input_react')
        let attr = input.getValue ()
        console.log("Value is " + attr)

        input.setValue('123test')
        attr = input.getValue('value')
        console.log("Value2 is " + attr)
       
    });

    xit('should demonstrate getLocation func', () => {
        browser.url('https://webdriver.io');
        const logo = $('/html/body/div[1]/div/header/div/nav/ul/li[8]/a')
        const location = logo.getLocation();
        console.log("Location is" + location); // outputs: { x: 150, y: 20 }

    });

    xit('should demonstrate the getText function', () => {
        browser.url('https://webdriver.io');
        const elem = $('/html/body/div[1]/div/header/div/nav/ul/li[8]/a');
        console.log(elem.getText());
    });

    xit ('test', () => {
        browser.url('https://webdriver.io/');
        const Api = $('/html/body/div[1]/div/header/div/nav/ul/li[2]/a');
        Api.click();
        //expect(Api).toHaveText('API');
        console.log(browser.getUrl());
        console.log(browser.getTitle());
        
        console.log(Api.getText());

        
    
    });

    
})


