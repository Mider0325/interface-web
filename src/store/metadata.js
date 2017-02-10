/**
 * 基本元数据配置
 */
const state = {
  methods: [
    { value: 'put', label: 'PUT' },
    { value: 'head', label: 'HEAD' },
    { value: 'delete', label: 'DELETE' },
    { value: 'post', label: 'POST' },
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
  ]
}
export default state
