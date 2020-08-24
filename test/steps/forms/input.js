import { When, Then } from 'cucumber';

When ("I can fill {string} in the input box {string}", (label, value)=> {
    $(`input[aria-label='${label}']`).setValue(value);
});

Then ("input with label {string} has value {string}", (label, value)=> {
   const textValue = $(`input[aria-label='${label}']`).getValue();
    expect(textValue).toContain(value);
});

When ("I login using email {string} and password {string}", (email, password)=> {
    $(`input[aria-label='Email']`).setValue(email);
    $(`input[aria-label='Password']`).setValue(password);
    $(`(//button[text()='Login'])[1]`).click();
});
