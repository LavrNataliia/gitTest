xdescribe('https://prod.glassboxrnd.com:8443/webinterface/webui/', () => {
    xit('should have the right title', () => {
        browser.url('https://prod.glassboxrnd.com:8443/webinterface/login/')
        expect(browser).toHaveTitle('Glassbox | Log In');
        
    });

    
    xit('LoginPage', function () {
        browser.url('https://prod.glassboxrnd.com:8443/webinterface/login/');
        const Username = $('/html/body/gb-root/gb-login/gb-login-box/form/div/div[3]/gb-login-input[1]/input');
        Username.setValue('qa_nata');
        const Password = $('/html/body/gb-root/gb-login/gb-login-box/form/div/div[3]/gb-login-input[2]/input');
        Password.setValue('qwerty');
        browser.pause(2000);
        const LoginBtn = $('/html/body/gb-root/gb-login/gb-login-box/form/button');
        LoginBtn.click();
        browser.pause(5000); 
    });

    xit('MainPage', function () {
        browser.url('https://prod.glassboxrnd.com:8443/webinterface/webui/');
        expect(browser).toHaveTitle('Application Summary');
        browser.pause(2000); 
    });

    // xit('should demonstrate the click command', () => {
    //     browser.url('https://webdriver.io');
    //     const blogButton = $('[href="/blog/"]')
    //     browser.pause(2000);
    //     blogButton.click()
    //     browser.pause(2000);
    //     const guideButton = $('.nav-site.nav-site-internal [href="/docs/gettingstarted.html"]')
    //     guideButton.click()
    //     browser.pause(2000);
    // });
})