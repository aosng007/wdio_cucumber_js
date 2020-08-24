import { When, Then } from 'cucumber';

When ("Click on the {string} checkbox", (label)=> {
    $(`(//label[text()='${label}'])[1]`).click();
});
