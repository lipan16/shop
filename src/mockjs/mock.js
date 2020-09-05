import Mock from 'mockjs'
import rules from './rules.js'

Mock.mock('as', 'get', {
  'name': '@cname',
  'date': '@date',
  'age|10-30': 1
})

Mock.mock('getChengpinDetails.php', uri => {
  return Mock.mock(rules[uri])
})

// Mock.setup({timeout: 2000})
