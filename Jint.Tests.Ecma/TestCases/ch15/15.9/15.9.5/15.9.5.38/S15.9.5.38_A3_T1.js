// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * The Date.prototype.setMonth property "length" has { ReadOnly, DontDelete, DontEnum } attributes
 *
 * @path ch15/15.9/15.9.5/15.9.5.38/S15.9.5.38_A3_T1.js
 * @description Checking ReadOnly attribute
 */

x = Date.prototype.setMonth.length;
Date.prototype.setMonth.length = 1;
if (Date.prototype.setMonth.length !== x) {
  $ERROR('#1: The Date.prototype.setMonth.length has the attribute ReadOnly');
}

