// IMPORT MODULES under test here:
import { sum, subtract } from '../utils.js';

const test = QUnit.test;

test('it should take in 7 and 5 and return 12', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 12;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = sum(7, 5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('subtract should take in 7 and 2 and return 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 5;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(7, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
