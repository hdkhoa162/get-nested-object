# get-nested-object! [![Build Status](https://travis-ci.org/hdkhoa162/get-nested-object.svg?branch=master)](https://travis-ci.org/hdkhoa162/get-nested-object) [![NPM total downloads](https://img.shields.io/npm/dt/get-nested-object.svg?style=flat)](https://www.npmjs.org/package/get-nested-object)

This plugin helps find and return a nested object or array included in parent arrays or objects.

## Install
Install with npm:
```bash
npm install --save get-nested-object
```

## Usage

```javascript
// Find and return a nested object or array included in parent arrays or objects.

// Exp1
var getNestedObject = require('get-nested-object');
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
getNestedObject(obj, 'personalInfo.education.school.NAIT.1');
// => { country: 'Canada', city: 'Vancouver' };

// Exp2
const obj = [1, 2, 3, 4, 5, ['a', 'b', 'c'], { firstName: 'Khoa', lastName: 'Huynh' }];
getNestedObject(obj, '5.2');
// => 'c';

```

## Test

```
npm run test

```