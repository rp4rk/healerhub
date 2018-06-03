import ScaleLoader from '../../node_modules/vue-spinner/src/ScaleLoader.vue';
import VueProgressiveImage from '../../node_modules/vue-progressive-image/dist/vue-progressive-image';

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.component('scale-loader', ScaleLoader);
  Vue.use(VueProgressiveImage);
};
