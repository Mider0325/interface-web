/**
 * 基本元数据配置
 */
const state = {
  paramsType: [
    'string',
    'number',
    'boolean',
    'object',
    'array',
    'array(string)',
    'array(number)',
    'array(boolean)',
    'array(object)',
    'ref'
  ],
  methods: [
    { value: 'post', label: 'POST' },
    { value: 'put', label: 'PUT' },
    { value: 'head', label: 'HEAD' },
    { value: 'delete', label: 'DELETE' },
    { value: 'patch', label: 'PATCH' },
    { value: 'get', label: 'GET' },
    { value: 'options', label: 'OPTIONS' }
  ],
  projectPower: [
    {
      value: '1',
      label: '创建者'
    },
    {
      value: '2',
      label: '管理员'
    },
    {
      value: '3',
      label: '开发人'
    },
    {
      value: '4',
      label: '游客'
    }
  ],
  groupPower: [
    {
      value: '1',
      label: '创建者'
    },
    {
      value: '2',
      label: '管理员'
    },
    {
      value: '3',
      label: '游客'
    }
  ],
  mockAdvice: [
    { value: '@boolean', desc: '' },
    { value: '@natural', desc: '' },
    { value: '@integer', desc: '' },
    { value: '@float', desc: '' },
    { value: '@character', desc: '' },
    { value: '@string', desc: '' },
    { value: '@range', desc: '' },
    { value: '@date', desc: '' },
    { value: '@time', desc: '' },
    { value: '@datetime', desc: '' },
    { value: '@now', desc: '' },
    { value: '@image', desc: '' },
    { value: '@dataImage', desc: '' },
    { value: '@color', desc: '' },
    { value: '@hex', desc: '' },
    { value: '@rgb', desc: '' },
    { value: '@rgba', desc: '' },
    { value: '@hsl', desc: '' },
    { value: '@paragraph', desc: '' },
    { value: '@sentence', desc: '' },
    { value: '@word', desc: '' },
    { value: '@title', desc: '' },
    { value: '@cparagraph', desc: '' },
    { value: '@csentence', desc: '' },
    { value: '@cword', desc: '' },
    { value: '@ctitle', desc: '' },
    { value: '@first', desc: '' },
    { value: '@last', desc: '' },
    { value: '@name', desc: '' },
    { value: '@cfirst', desc: '' },
    { value: '@clast', desc: '' },
    { value: '@cname', desc: '' },
    { value: '@url', desc: '' },
    { value: '@domain', desc: '' },
    { value: '@protocol', desc: '' },
    { value: '@tld', desc: '' },
    { value: '@email', desc: '' },
    { value: '@ip', desc: '' },
    { value: '@region', desc: '' },
    { value: '@province', desc: '' },
    { value: '@city', desc: '' },
    { value: '@county', desc: '' },
    { value: '@zip', desc: '' },
    { value: '@capitalize', desc: '' },
    { value: '@upper', desc: '' },
    { value: '@lower', desc: '' },
    { value: '@pick', desc: '' },
    { value: '@shuffle', desc: '' },
    { value: '@guid', desc: '' },
    { value: '@id', desc: '' },
    { value: '@increment', desc: '' }
  ]
}
export default state
