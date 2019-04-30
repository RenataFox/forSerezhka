import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import App from './App.vue'

import MainPage from './pages/MainPage.vue'
import FormulaPage from './pages/FormulaPage.vue'
import FormulsPage from './pages/FormulsPage.vue'
import NotPage from './pages/NotPage.vue'

// 2. Определяем несколько маршрутов
// Каждый маршрут должен указывать на компонент.
// "Компонентом" может быть как конструктор компонента, созданный
// через `Vue.extend()`, так и просто объект с опциями компонента.
// Мы поговорим о вложенных маршрутах позднее.
const routes = [
  { path: '/', component: MainPage },
  { path: '/formula', component: FormulsPage},
  { path: '/formula/:id', component: FormulaPage },
  { path: '*' , component: NotPage }
]

// 3. Создаём экземпляр маршрутизатора и передаём маршруты в опции `routes`
// Вы можете передавать и дополнительные опции, но пока не будем усложнять.
const router = new VueRouter({
  routes // сокращённая запись для `routes: routes`
})

// 4. Создаём и монтируем корневой экземпляр приложения.
// Убедитесь, что передали экземпляр маршрутизатора в опции
// `router`, чтобы позволить приложению знать о его наличии.
new Vue({
  el:'#app',  
  router,
  render:h => h(App)
})


/*new Vue({
  el: '#app',
  render: h => h(App)
})*/
