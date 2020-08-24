import { Given, Then } from 'cucumber';

Given ("I am on {string} url", (url)=> {
     browser.url(url);
});

Given ("I am on Home page", ()=> {
    browser.url("/");
});

Then ("I see {string} title", (title)=> {
     expect(browser.getTitle()).toContain(title);
});



