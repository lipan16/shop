import Mock from 'mockjs'
import rules from './rules.js'

Mock.mock('http://localhost:8080/goods', 'get', {
  'name': '@cname',
  'date': '@date',
  'age|10-30': 1
})

Mock.mock(/\/invoke.jsp/, 'get', uri => {
  return Mock.mock(rules[uri])
})

// Mock.setup({timeout: 2000})
