import Vue from 'vue'
import routes from './routes'

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      let pathArray = this.currentRoute.split('/');
      pathArray.shift();
      console.log(pathArray);
      let pathThread = routes;
      console.log(pathArray, pathArray.length);
      while (pathArray.length > 1) {
        pathThread = pathThread[pathArray[0]];
        pathArray.shift();
        console.log(pathThread, pathArray, 1);
      }
      let matchingView = pathThread;
      if (typeof(matchingView) === 'object') {
        let temp = matchingView[pathArray[0]];
        console.log(temp);
        matchingView = temp;
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
