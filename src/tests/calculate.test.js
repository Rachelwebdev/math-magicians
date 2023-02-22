import calculate from '../logic/calculate';

describe('Unit testing for calculate.js', () => {
    test('First time pressing +', () => {
        const myMockedObject = {
            total: null,
            next: null,
            operation: null,
        };
        
        let MockedButtonName = null;

        myMockedObject.total = '100';
        MockedButtonName = '+'

        expect(calculate(myMockedObject, MockedButtonName)).toStrictEqual({
            total: '100',
            next: null,
            operation: '+',
        });
    });

    test('100 plus 100 have to be equal to 200', () => {
        const myMockedObject = {
            total: '100',
            next: '100',
            operation: '+',
        };
        
        let MockedButtonName = '=';

        expect(calculate(myMockedObject, MockedButtonName)).toStrictEqual({
            total: '200',
            next: null,
            operation: null,
        });
    });

    test('100 minus 100 have to be equal to 0', () => {
        const myMockedObject = {
            total: '100',
            next: '100',
            operation: '-',
        };
        
        let MockedButtonName = '=';

        expect(calculate(myMockedObject, MockedButtonName)).toStrictEqual({
            total: '0',
            next: null,
            operation: null,
        });
    });

    test('100 multiply 100 have to be equal to 10000', () => {
        const myMockedObject = {
            total: '100',
            next: '100',
            operation: 'x',
        };
        
        let MockedButtonName = '=';

        expect(calculate(myMockedObject, MockedButtonName)).toStrictEqual({
            total: '10000',
            next: null,
            operation: null,
        });
    });

    test('100 divided by 100 have to be equal to 1', () => {
        const myMockedObject = {
            total: '100',
            next: '100',
            operation: '÷',
        };
        
        let MockedButtonName = '=';

        expect(calculate(myMockedObject, MockedButtonName)).toStrictEqual({
            total: '1',
            next: null,
            operation: null,
        });
    });

    test('100 divided by 0 have to be equal to Can\'t divide by 0.', () => {
        const myMockedObject = {
            total: '100',
            next: '0',
            operation: '÷',
        };
        
        let MockedButtonName = '=';

        expect(calculate(myMockedObject, MockedButtonName)).toStrictEqual({
            total: 'Can\'t divide by 0.',
            next: null,
            operation: null,
        });
    });
});
