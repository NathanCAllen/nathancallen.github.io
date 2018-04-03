import Vue from 'vue'
import routes from './routes'

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname,
  },
  computed: {
    ViewComponent () {
      let matchingView = routes[this.currentRoute];
      if (!matchingView) {
        const routeSplit = this.currentRoute.split('/');
        matchingView = `${routeSplit[1]}/Base`;
      }
      return matchingView
        ? require('./pages/' + matchingView + '.vue')
        : require('./pages/404.vue');
    }
  },
  render(h) {
    return h(this.ViewComponent);
  }
});

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
});
