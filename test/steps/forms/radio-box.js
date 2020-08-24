import { When, Then } from 'cucumber';

When ("Click on the {string} radio box", (label)=> {
    $(`(//label[text()='${label}'])[1]`).click();
});
