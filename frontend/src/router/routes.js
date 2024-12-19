const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/popisknjiga', component: () => import('pages/PopisknjigaPage.vue') },
      { path: '/popisKnjiga1', component: () => import('pages/PopisKnjigaPage1.vue') },
      { path: '/pretrazivanje', component: () => import('pages/TraziKnjiguPage.vue') },
      { path: '/o_nama', component: () => import('pages/ONamaPage.vue') },
      { path: '/lokacija', component: () => import('pages/LokacijaPage.vue') },
      { path: '/login', component: () => import('pages/LoginPage.vue') },
      { path: '/registracija', component: () => import('pages/RegistracijaPage.vue') },
      { path: '/Rezervacije', component: () => import('pages/RezervacijePage.vue') },
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AdminPage.vue') },
      { path: '/admin/popisknjiga', component: () => import('pages/PopisknjigaPage.vue') },
      { path: '/admin/popisKnjiga1', component: () => import('pages/PopisKnjigaPage1.vue') },
      { path: '/admin/pretrazivanje', component: () => import('pages/TraziKnjiguPage.vue') },
      { path: '/admin/popis_korisnika', component: () => import('pages/PopisKorisnikaPage.vue') },
      { path: '/admin/unos_knjiga', component: () => import('pages/UnosKnjigaPage.vue') },
      { path: '/logout', component: () => import('pages/LogoutPage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
