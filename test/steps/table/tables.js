import { Given, Then } from 'cucumber';
import * as R from 'ramda';

Then("the table {string} should have following rows", (name, table)=> {
    R.range(1,table.rawTable.length).forEach((rowNumber)=>{
        var actualData=[];
        var expectedData=table.rawTable[rowNumber];
        R.range(0,table.rawTable[0].length).forEach((item,index)=>{
            actualData.push($(`//div[@name='column-${name}-${index}']//div[${rowNumber}]`).getText());
        });
        expect(R.equals(actualData, expectedData)).toBeTruthy();


    });
});
