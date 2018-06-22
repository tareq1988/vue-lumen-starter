import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

export default {
  watch: {
    loading: function(value) {
      if ( value ) {
        NProgress.configure({
          showSpinner: false
        });
        NProgress.start();
      } else {
        NProgress.done();
      }
    }
  }
}
