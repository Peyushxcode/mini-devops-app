const {add} = require('./math');

test('adds 2 + 3 correctly' , ()=>{
    expect(add(2,3)).toBe(5);
});