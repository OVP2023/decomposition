import React from 'react'
import ReactDOM from 'react-dom/client'
import News from './components/news.jsx'
import InformBlock from './components/informblock.jsx'
import Menu from './components/menu.jsx'
import Form from './components/form.jsx'
import BannerMain from './components/bannermain.jsx'
import BannerSmall from './components/bannersmall.jsx'
import LogoBig from './components/logobig.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <News text="Новость 1"/>
    <News text="Новость 2"/>
    <News text="Новость 3"/>
    <News text="Новость 4"/>
    <News text="Новость 5"/>
    <InformBlock title="Погода" />
    <InformBlock title="Карта Германии"/>
    <InformBlock title="Эфир"/>
    <InformBlock title="Телепрограмма"/>
    <InformBlock title="Посещаемое" />
    <Menu />
    <Form />
    <BannerMain />
    <BannerSmall />
    <LogoBig />
  </React.StrictMode>,
)
