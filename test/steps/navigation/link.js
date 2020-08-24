import { When } from 'cucumber';

When ("I click on {string} link", (link)=> {
     $(`=${link}`).click();
});
