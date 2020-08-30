import Mock from 'mockjs'

Mock.mock('http://localhost:8080/goods', 'get', {
  'name': '@cname',
  'date': '@date',
  'age|10-30': 1
})
