/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-550.js
 * @description ES5 Attributes - property ([[Get]] is a Function, [[Set]] is a Function, [[Enumerable]] is false, [[Configurable]] is true) is non-enumerable
 */


function testcase() {
        var obj = {};

        var getFunc = function () {
            return 1001;
        };

        var verifySetFunc = "data";
        var setFunc = function (value) {
            verifySetFunc = value;
        };

        Object.defineProperty(obj, "prop", {
            get: getFunc,
            set: setFunc,
            enumerable: false,
            configurable: true
        });

        var propertyDefineCorrect = obj.hasOwnProperty("prop");
        var desc = Object.getOwnPropertyDescriptor(obj, "prop");

        for (var p in obj) {
            if (p === "prop") {
                return false;
            }
        }

        return propertyDefineCorrect && desc.enumerable === false;
    }
runTestCase(testcase);
