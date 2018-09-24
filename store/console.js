export const state = () => ({
  commands: [],
  selectedTab: 'home',
})

export const mutations = {
  next(state, value) {
    state.commands.push(value);
  },
  clear(state) {
    state.commands.splice(0, state.commands.length);
  },
  selectTab(state, value) {
    state.selectedTab = value;
  },
}

export const actions = {
  next(context, value) {
    context.commit('next', value);
  },
  clear(context) {
    context.commit('clear');
  },
  selectTab(context, value) {
    context.commit('selectTab', value);
  }
}
