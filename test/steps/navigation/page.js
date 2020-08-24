import { Then } from 'cucumber';

Then ("page display header {string}", (heading)=> {
        expect($$(`h1,h3`).filter(item => {return item.getText() === heading}).length > 0).toBeTruthy();
});

