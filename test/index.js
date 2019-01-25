'use strict';

require('mocha');

const assert = require('assert');
const getNestedObject = require('../lib');

describe('test getNestedObject function', function () {

    it('should properly return a object or array nested in the objects or arrays', function () {
        const obj = {
            id: 101,
            email: 'jack@dev.com',
            personalInfo: {
                name: 'Jack',
                address: {
                    line1: 'westwish st',
                    line2: 'washmasher',
                    city: 'San Jose',
                    state: 'WX'
                },
                education: {
                    school: {
                        NIIT: {
                            country: { name: 'Vietnam', location: 'Asia', city: 'Saigon' },
                            country: { name: 'Canada', location: 'North America', city: 'Vancouver' },
                        },
                        NAIT: [
                            { country: 'Canada', city: 'Edmonton' },
                            { country: 'Canada', city: 'Vancouver' }
                        ]
                    }
                },
                project: [
                    { description: 'caro', language: 'c#' },
                    { description: 'snake', language: 'c++' }
                ]
            }
        };

        const result = { country: 'Canada', city: 'Vancouver' };

        assert.deepEqual(getNestedObject(obj, 'personalInfo.education.school.NAIT.1'), result);
    });

    it('should properly return a object or array nested in the objects or arrays', function () {
        const obj = [1, 2, 3, 4, 5, ['a', 'b', 'c'], { firstName: 'Khoa', lastName: 'Huynh' }];

        const result = 'c';

        assert.deepEqual(getNestedObject(obj, '5.2'), result);
    });
});
