import { When } from 'cucumber';

When ("I click on {string} item in section {string} navbar", (link, section)=> {
    const dropdown = "//div[@data-preview='Navbar']//span[@name='angle-down']";
    const option = $(dropdown + `/..//div[text()='${link}']`);


    $(dropdown).moveTo();
    expect(option.isDisplayedInViewport()).toBeTruthy();
    option.click();
});
