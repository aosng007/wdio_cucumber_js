import { Given } from 'cucumber';

Given ("Click on the {string} tab", (tab)=> {
    $(`(//li[text()="${tab}"])[1]`).click();

});
