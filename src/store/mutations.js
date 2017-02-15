/**
 * Created with WebStorm.
 * User: stoneship
 * Email:258137678@qq.com
 * Date: 16/11/3
 * Time: 下午4:45
 * To change this template use File | Settings | File Templates.
 */
export const initMenuData = (state, data) => {
  state.app.menuData = data
}
export const initUserInfo = (state, data) => {
  state.userInfo = { ...state.userInfo, ...data }
}

export const changeActiveIndex = (state, data) => {
  // 通过更新子节点修改对应导航的列表信息
  state.app.activeIndex = data
}

export const changeNavIndex = (state, data) => {
  state.app.navIndex = data || 0
}

export const changeNavTwoIndex = (state, data) => {
  state.app.navTwoIndex = data || 0
}

export const updataTheme = (state, data) => {
  Object.assign(state.app.theme, data)
  window.localStorage.setItem('theme', JSON.stringify(state.app.theme))
}

export const changeAppSize = (state, data) => {
  if (data.width) {
    state.app.size.width = data.width
  }
  if (data.height) {
    state.app.size.height = data.height
  }
}
export const updataMessageNum = (state, data) => {
  state.updataMessageNum = data
}
