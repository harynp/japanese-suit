import DashboardLayout from 'src/components/DashboardLayout'
import Home from 'src/components/Home'
// GeneralViews
import NotFound from 'src/components/NotFoundPage.vue'

// Admin pages
import Game from 'src/components/Game.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/room',
    component: DashboardLayout,
    children: [
      {
        path: '',
        name: 'Japanese Suit',
        component: Game
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
