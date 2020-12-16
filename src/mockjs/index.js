import Mock from 'mockjs'

function parseUri(str) { // 从字符串中拆分uri
    const array = str.split('&')
    const data = {}
    array.forEach(item => {
        data[item.split('=')['0']] = item.split('=')['1']
    })
    return data
}

Mock.setup({
    timeout: 2000
})
Mock.mock('invoke.jsp', 'post', request => {
    const uri = parseUri(request.body).uri
    const rule = rules[uri]
    return Mock.mock(rule)
})
const rules = {
    'uri1': {
        'name': '@cname',
        'date': '@date',
        'age|10-30': 1
    },
    'uri2': {},
    'uri3': {}
}
