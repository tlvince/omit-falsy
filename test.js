const test = require('tap').test
const omitFalsy = require('.')

test('title', t => {
  const obj = {
    a: 'foo',
    b: '',
    c: 0,
    d: 'bar'
  }
  const actual = omitFalsy(obj)
  const expected = {
    a: 'foo',
    d: 'bar'
  }
  t.same(actual, expected)
  t.end()
})
