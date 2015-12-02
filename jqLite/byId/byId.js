var testJqLiteDOM = document.getElementById("testjqLite");
var testJqLiteDOMAngular = angular.element(testJqLiteDOM);
var testJqLiteDOMAngularEach = testJqLiteDOMAngular[0];

console.log('testJqLiteDOM -> ', testJqLiteDOM);
console.log('testJqLiteDOMAngular -> ', testJqLiteDOMAngular);
console.log('testJqLiteDOMAngularEach -> ', testJqLiteDOMAngularEach);
console.log('testJqLiteDOMAngularEach id -> ', testJqLiteDOMAngularEach.id);