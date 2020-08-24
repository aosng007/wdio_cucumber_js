import { When, Then } from 'cucumber';

When ("I select item {string} from multi value input box", (value)=> {
    const selector = '//input[1]/../..';
    const valueSelector = selector+`//div/div[text()='${value}']`;
    $(selector).click();
    $(valueSelector).click();

});

Then ("the multi value input box has value {string}", (value)=> {
    const selector = '//input[1]';
   const textValue = $(selector).getValue();
    expect(textValue).toContain(value);
});

