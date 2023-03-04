function add(a,b) {
    return a+b;
}
function subtract(a,b) {
    return a-b;
}
export default add; //When we use export default then while importing the default import we can call that anything.
export {subtract as s};