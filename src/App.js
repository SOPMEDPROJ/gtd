import logoShort from './img/logoShort.svg';
import logoLong from './img/logoLong.svg';
import menuIcon from './img/menu.svg';
import closeIcon from './img/close.svg';
import arrowRight from './img/arrowRight.svg';
import ellipses from './img/ellipse333.svg';
import teherIcon from './img/tether.svg';
import uniswapIcon from './img/uniswap.svg';
import wazirzIcon from './img/wazirx.svg';
import lineWeb from './img/line.svg';
import dollars from './img/dolar.svg';
import person from './img/person.svg';
import support from './img/support.svg';
import tiktak from './img/clock.svg';
import nftCard1 from './img/1.mp4'
import nftCar2 from './img/2.mp4'
import nftCar3 from './img/3.mp4'
import nftCar4 from './img/4.mp4'
import volna1 from './img/volna1.svg'
import volna2 from './img/volna2.svg'
import teacher1 from './img/teacher1.png'
import teacher2 from './img/teacher2.png'
import teacher3 from './img/teacher3.png'
import feedb1 from './img/feedb1.png'
import feedb2 from './img/feedb2.png'
import phone from './img/phone.png';
import contactsHead from './img/contacts.svg'
import fb from './img/facebook.svg'
import vk from './img/vk.svg'
import be from './img/behance.svg'
import gm from './img/gmail.svg'
import tg from './img/telegram.svg'
import sliderPrevBtn from './img/sliderPrev.svg'
import sliderNextBtn from './img/sliderNext.svg'
import learning from  './img/learning.svg'
import statistics from './img/statistics.svg'

import CountdownTimer from './CountdownTimer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import './App.css';

function App() {
  const NOW_IN_MS = new Date(2023, 9, 28, 0, 0, 0)

   const dateTimeAfterThreeDays = NOW_IN_MS;
  return (
    <div className="App overflow-hidden">
      <header className='flex justify-around items-center pt-10'>
        <div className='flex items-center '>
          <button className='menu-btn' onClick={menuBtn}><img alt='' src={menuIcon}></img></button>
          <img alt='' src={logoShort} className='logoShort'></img>
          <img alt='' src={logoLong} className='longLogo'></img>
        </div>
        <ul className='header-menu flex justify-between w-[400px]'>
          <li><a href='#'>Главная</a></li>
          <li><a href='#pocket'>Товары</a></li>
          <li><a href='#learning'>Трейдинг</a></li>
          <li><a href='#sale'>Скидки</a></li>
        </ul>
        <a href='https://t.me/luxury_ebaka'><button className='buy-course border py-3 px-8 rounded-full hover:bg-trava focus:bg-trava'>Купить курс</button></a>

      </header>
      <div id='modalWindow' className='modal-header bg-modal text-center pt-5 hidden'>
        <button onClick={closeBtn} className='absolute left-5'><img alt='' src={closeIcon}></img></button>
        <ul className='modal-menu pt-10 font'>
          <li><a href='#'>Главная</a></li>
          <li><a href='#pocket'>Товары</a></li>
          <li><a href='#learning'>Трейдинг</a></li>
          <li><a href='#sale'>Скидки</a></li>
          </ul>
      </div>
      <section className='main mt-32'>
        <div></div>
        <div className='second'>
          <div className='flex flex-col justify-center content-center flex-wrap'>
            <h1 className='site-name uppercase mb-10 float-left text-start'> globatrade<br /> dynamics</h1>
            <p className='main-info'>Мы web-студия которая <br /> работает уже больше 3-х лет</p>




            <CountdownTimer targetDate={dateTimeAfterThreeDays} />



            <div className='flex buttons-main'>
              <a href='https://t.me/luxury_ebaka'><button className='buyCourse2 flex items-center py-4 px-7 mr-3 border-2 rounded-full text-white uppercase'>купить курс <img alt='' className='pl-3' src={arrowRight}></img></button></a>
              <a href='#forma'><button className='py-4 px-7 border-2 border-white rounded-full text-smoke uppercase text-sm'>остались вопросы?</button></a>            </div>
          </div>
          <div className='flex justify-end'>
            <img alt='' src={ellipses} className='justify-self-end ellipses'></img>
            <div className='course-status'>
              <ul className='w-[500px] absolute block right-32 mt-44'>
                <p className='uppercase text-white text-2xl mb-3 text-center'>🔥топ 5</p>
                <li className='course-table mb-3 rounded-full flex items-center text-white py-3 px-4'>1 <img alt='' className='pl-2' src={teherIcon}></img><span className='px-2'>Tether </span><span className='text-smoke text-xs'>USDT</span>
                  <span className='relative left-[285px] text-courseState text-xs stv'></span></li>
                <li className='course-table mb-3 rounded-full flex items-center text-white py-3 px-4'>2 <img alt='' className='pl-2' src={uniswapIcon}></img><span className='px-2'>Uniswap </span><span className='text-smoke text-xs'>UNI</span> <span className='relative left-[280px] text-courseState text-xs stf'></span></li>
                <li className='course-table mb-3 rounded-full flex items-center text-white py-3 px-4'>3 <img alt='' className='pl-2' src={wazirzIcon}></img><span className='px-2'>Wazirx </span><span className='text-smoke text-xs'>WRX</span> <span className='relative left-[285px] text-red text-xs sts'></span></li>
                <li className='course-table mb-3 rounded-full flex items-center text-white py-3 px-4'>4 <img alt='' className='pl-2' src={teherIcon}></img><span className='px-2'>Tether </span><span className='text-smoke text-xs'>USDT</span> <span className='relative left-[285px] text-courseState text-xs sts'></span></li>
                <li className='course-table rounded-full flex items-center text-white py-3 px-4'>5 <img alt='' className='pl-2' src={uniswapIcon}></img><span className='px-2'>Uniswap </span><span className='text-smoke text-xs'>UNI</span> <span className='relative left-[280px] text-courseState text-xs stfr'></span></li>

              </ul>
            </div>
          </div>
        </div>
        <div></div>

      </section>
      <div className='flex py-2 text-white justify-evenly items-center bg-gray status mt-[35px] max-lg:hidden'>
      <a href='https://t.me/luxury_ebaka'><button className='font-bold py-3 px-6 rounded-full buy-gradient'>Купить курс</button></a>
        
        <ul className='w-[350px] '>
          <li className='flex justify-between text-smoke'>Участников всего: <span className='text-white font-bold'>400</span></li>
          <li className='flex justify-between text-smoke'>Успешно закончили курс: <span className='text-white font-bold'>376</span></li>
        </ul>
        <div className='flex flex-col leading-9'>
          <p className='text-smoke flex w-[350px] justify-between'>Заработано учениками:<span className='text-white font-bold'>40 000₽</span></p>
          <img alt='' src={lineWeb}></img>
          <p className='text-smoke flex justify-between'>0 <span>1 000 000 000₽</span></p>
        </div>
      </div>

      <img alt='' src={statistics} className='w-full mt-6 stat-img hidden'></img>

      <div className='text-white w-[85vw] mx-auto third mt-10 max-[459]:m-0'>
        <img alt='' src={volna1} className='fixed left-0 -z-10 img-volna'></img>
        <div className='flex flex-col justify-center h-[400px] cols2'>
          <h1 className='course-info'>О КУРСАХ И ШКОЛЕ</h1>
          <p className='text-smoke font-light w-full'>GlobalTrade Dynamics-GTD онлайн школа по обучению молодых трейдеров, которая была создана двумя Друзьями Александр и Kira. Мы уже обучаем более 3 лет, на нашем счету 10000 учеников, которые после месяца обучения,заработали стоимость своего курса.....</p>
          <button className='button-background-move'>Читать</button>
        </div>
        <div className='dollar-block rounded-xl flex flex-col'>
          <h3 className='mt-10 ml-10 text-2xl'>Приемлимые <br />цены</h3>
          <p className='ml-10 mt-3 w-[300px]'>Мы максимально оптимизируем наш труд, для того, чтобы цены были доступными</p>
          <img alt='' src={dollars} className='w-[220px] place-self-end relative mt-10'></img>
        </div>
        <div className='gray-block rounded-xl flex flex-col'>
          <h3 className='mt-10 ml-10 text-2xl'>Зарплаты <br /> трейдеров</h3>
          <p className='ml-10 mt-3 '>80 000 рублей - зарплата начинающего специалиста по данным hh.ru <br></br> 500 000 рублей - зарплата опытного трэйдера, по данным hh.ru</p>
          <img alt='' src={tiktak} className='w-[220px] place-self-end relative mt-10'></img>
        </div>
        <div className='gray-block rounded-xl flex flex-col'>
          <h3 className='mt-10 ml-10 text-2xl'>Реферальная <br /> программа</h3>
          <p className='ml-10 mt-3 w-[300px]'>ПЕРВЫМ 60 УЧАСТНИКАМ <br /><span className='text-lg'>20%</span><br /> <br />EST CLUB<br /><span className='text-lg'>24%</span></p>
          <img alt='' src={person} className='w-[220px] place-self-end flex justify-self-end'></img>
        </div>
        <div className='gray-block rounded-xl flex flex-col'>
          <h3 className='mt-10 ml-10 text-2xl'>Консультация <br /> перед заказом</h3>
          <p className='ml-10 mt-3 w-[300px]'>Наши менеджеры в сети 24/7, и готовы помочь вам, а так же ответить на ваши вопросы</p>
          <img alt='' src={support} className='w-[220px] place-self-end relative mt-10'></img>
        </div>
      </div>

      <section id='pocket' className='w-[85vw] mx-auto flex flex-col'>
        <img alt='' src={volna2} className='fixed left-0 img-volna'></img>
        <h1 className='text-center mt-20 text-white packages-header'>Пакеты</h1>
        <div className='grid slider mx-auto w-full gap-6 packet'>
          <div className='slide border border-smoke rounded-3xl bg-gray1'>
            <video className=' rounded-3xl' src={nftCard1} playsInline={true} autoPlay={true} loop={true}></video>
            <h1 className=' text-center text-white mt-4 text-2xl font-bold'>Фокс Группа GLOBALTRADE</h1>
            <p className='text-center text-whitesmoke mt-3'>Присоединяйтесь к нашей группе по обучению торговле криптовалютой! Узнавайте стратегии, анализируйте рынок и развивайтесь в мире криптоинвестиций вместе с опытными трейдерами.</p>
            <div className='flex justify-around text-white mt-4'>
              <h2 className='text-xl flex flex-col text-center'>80.000₽ <span className='text-whitesmoke text-lg font-light'>90 дней</span></h2>
              <button className='flex justify-center items-center py-3 px-6 border rounded-full moreBtn'>Подробнее <img className='ml-3' alt='' src={arrowRight}></img></button>
            </div>
          </div>
          <div className='slide border border-smoke rounded-3xl bg-gray1'>
          <video className=' rounded-3xl' src={nftCard1} playsInline={true} autoPlay={true} loop={true}></video>
            <h1 className=' text-center text-white mt-4 text-2xl font-bold'>Фокс Группа P2P EXPRESS</h1>
            <p className='text-center text-whitesmoke mt-3'>Присоединяйтесь к нашей группе по обучению торговле криптовалютой! Узнавайте стратегии, анализируйте рынок и развивайтесь в мире криптоинвестиций вместе с опытными трейдерами.</p>
            <div className='flex justify-around text-white mt-4'>
              <h2 className='text-xl flex flex-col text-center'>70.000₽ <span className='text-whitesmoke text-lg font-light'>90 дней</span></h2>
              <button className='flex justify-center items-center py-3 px-6 border rounded-full moreBtn'>Подробнее <img className='ml-3' alt='' src={arrowRight}></img></button>
            </div>
          </div>
          <div className='slide border border-smoke rounded-3xl bg-gray1'>
          <video className=' rounded-3xl' src={nftCard1} playsInline={true} autoPlay={true} loop={true}></video>
            <h1 className=' text-center text-white mt-4 text-2xl font-bold'>Стандарт Группа TRADE CAPITAL</h1>
            <p className='text-center text-whitesmoke mt-3'>Присоединяйтесь к нашей группе по обучению торговле криптовалютой! Узнавайте стратегии, анализируйте рынок и развивайтесь в мире криптоинвестиций вместе с опытными трейдерами.</p>
            <div className='flex justify-around text-white mt-4'>
              <h2 className='text-xl flex flex-col text-center'>49.999₽ <span className='text-whitesmoke text-lg font-light'>90 дней</span></h2>
              <button className='flex justify-center items-center py-3 px-6 border rounded-full moreBtn'>Подробнее <img className='ml-3' alt='' src={arrowRight}></img></button>
            </div>
          </div>
          <div className='slide border border-smoke rounded-3xl bg-gray1'>
          <video className=' rounded-3xl' src={nftCard1} playsInline={true} autoPlay={true} loop={true}></video>
            <h1 className=' text-center text-white mt-4 text-2xl font-bold'>Стандарт Группа PEER PULSE</h1>
            <p className='text-center text-whitesmoke mt-3'>Присоединяйтесь к нашей группе по обучению торговле криптовалютой! Узнавайте стратегии, анализируйте рынок и развивайтесь в мире криптоинвестиций вместе с опытными трейдерами.</p>
            <div className='flex justify-around text-white mt-4'>
              <h2 className='text-xl flex flex-col text-center'>35.000₽ <span className='text-whitesmoke text-lg font-light'>90 дней</span></h2>
              <button className='flex justify-center items-center py-3 px-6 border rounded-full moreBtn'>Подробнее <img className='ml-3' alt='' src={arrowRight}></img></button>
            </div>
          </div>
        </div>
      </section>

      <section  id='learning' className='w-[100vw] mx-auto text-white flex flex-col text-center mt-24'>
        <h1 className='lrnProgram font-bold packages-header uppercase'>программа обучения</h1>
        <p className='text-smoke mt-7 roboto'>Больше 90% учеников прошли полный курс и смогли заработать первый миллион</p>
        <img alt='' src={learning} className='learnind-img'></img>
      </section>

      <section id='sale'>
        <img alt='' src={volna2} className='fixed left-0 img-volna'></img>
        <h1 className='text-center mt-20 text-white packages-header'>Тарифы</h1>

        <div className='w-[80vw] mx-auto gap-6 place-items-start place-content-start justify-center grid mt-20 h-fit tarrifs'>
          <div className='p-8 bg-gray1 rounded-4xl text-center text-smoke border border-smoke'>
            <h1 className='text-white text-3xl font-bold py-3'>Фокс Группа<br />GLOBAL TRADE</h1>
            <p className='mb-3'>
            <ul id="focus-group" class="max-w-md space-y-1 text-gray-500 list-inside text-start dark:text-gray-400">
					<li id="focus-item" class="flex items-center">
						<svg id="gull" class="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
							aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
							viewBox="0 0 20 20">
							<path
								d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
						</svg>
						Закрытая группа с куратором
					</li>
					<li id="focus-item" class="flex items-center">
						<svg id="gull" class="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
							aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
							viewBox="0 0 20 20">
							<path
								d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
						</svg>
						Торговля на бирже вместе с трейдерами Практика в жизни
					</li>
					<li id="focus-item" class="flex items-center">
						<svg id="gull" class="w-3.5 h-3.5 mr-2 text-green-700 dark:text-green-600 flex-shrink-0"
							aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
							viewBox="0 0 20 20">
							<path
								d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
						</svg>
						В конце курса проведем слет лучших трейдеров на котором сможете принять участия и вы
					</li>
					<li id="focus-item" class="flex items-center">
						<svg id="gull" class="w-3.5 h-3.5 mr-2 text-green-700 dark:text-green-600 flex-shrink-0"
							aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
							viewBox="0 0 20 20">
							<path
								d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
						</svg>
						Обучение на практике
					</li>
					<li id="focus-item" class="flex items-center">
						<svg id="gull" class="w-3.5 h-3.5 mr-2 text-green-700 dark:text-green-600 flex-shrink-0"
							aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
							viewBox="0 0 20 20">
							<path
								d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
						</svg>
						Лучшие Спикеры
					</li>
					<li id="focus-item" class="flex items-center">
						<svg id="gull" class="w-3.5 h-3.5 mr-2 text-green-700 dark:text-green-600 flex-shrink-0"
							aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
							viewBox="0 0 20 20">
							<path
								d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
						</svg>
						профессиональные трейдеры
					</li>
					<li id="focus-item" class="flex items-center">
						<svg id="gull" class="w-3.5 h-3.5 mr-2 text-green-700 dark:text-green-600 flex-shrink-0"
							aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
							viewBox="0 0 20 20">
							<path
								d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
						</svg>
						индивидуальные модули для каждого ученика
					</li>
					<li id="focus-item" class="flex items-center">
						<svg id="gull" class="w-3.5 h-3.5 mr-2 text-green-700 dark:text-green-600 flex-shrink-0"
							aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
							viewBox="0 0 20 20">
							<path
								d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
						</svg>
						Домашние задания каждую неделю
					</li>
					<li id="focus-item" class="flex items-center">
						<svg id="gull" class="w-3.5 h-3.5 mr-2 text-green-700 dark:text-green-600 flex-shrink-0"
							aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
							viewBox="0 0 20 20">
							<path
								d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
						</svg>
						Интерактивная форма с обучаюшимися
					</li>
					<li id="focus-item" class="flex items-center">
						<svg id="gull" class="w-3.5 h-3.5 mr-2 text-green-700 dark:text-green-600 flex-shrink-0"
							aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
							viewBox="0 0 20 20">
							<path
								d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
						</svg>
						Проверка домашнего задания
					</li>
					<li id="focus-item" class="flex items-center">
						<svg id="gull" class="w-3.5 h-3.5 mr-2 text-green-700 dark:text-green-600 flex-shrink-0"
							aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
							viewBox="0 0 20 20">
							<path
								d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
						</svg>
						Разбор ошибок исправления их
					</li>
					<li id="focus-item" class="flex items-center">
						<svg id="gull" class="w-3.5 h-3.5 mr-2 text-green-700 dark:text-green-600 flex-shrink-0"
							aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
							viewBox="0 0 20 20">
							<path
								d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
						</svg>
						Сертификаты об обучение
					</li>
					<li id="focus-item" class="flex items-center">
						<svg id="gull" class="w-3.5 h-3.5 mr-2 text-green-700 dark:text-green-600 flex-shrink-0"
							aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
							viewBox="0 0 20 20">
							<path
								d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
						</svg>
						Отправка ваших резюме в лучшие компании
					</li>
					<h1 class="header-3months"></h1>
				</ul>
            </p>
            <div className='flex justify-between place-self-end mt-[190px]'>
              <h2 className='text-white text-2xl flex flex-col'>80.000₽ <span className='text-smoke text-xl'>90 дней</span></h2>
              <button className='moreBtn px-8 py-4 flex justify-between items-center border rounded-full text-white'>Подробнее <img className='ml-3' alt='' src={arrowRight}></img></button>
            </div>
          </div>
          <div className='p-8 bg-gray1 rounded-4xl text-center text-smoke border border-smoke'>
            <h1 className='text-white text-3xl font-bold py-3'>Фокс Группа<br /> P2P EXPRESS</h1>
            <p className='mb-3'>
                <ul id="focus-group" class="max-w-md space-y-1 text-gray-500 text-start list-inside dark:text-gray-400">
              <li id="focus-item" class="flex items-center">
                <svg id="gull" class="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Закрытая группа с куратором
              </li>
              <li id="focus-item" class="flex items-center">
                <svg id="gull" class="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Торговля на бирже вместе с трейдерами
              </li>
              <li id="focus-item" class="flex items-center">
                <svg id="gull" class="w-3.5 h-3.5 mr-2 text-green-700 dark:text-green-600 flex-shrink-0"
                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                В конце курса проведем слет лучших трейдеров на котором сможете принять участия и вы
              </li>
              <li id="focus-item" class="flex items-center">
                <svg id="gull" class="w-3.5 h-3.5 mr-2 text-green-700 dark:text-green-600 flex-shrink-0"
                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Обучение на практике
              </li>
              <li id="focus-item" class="flex items-center">
                <svg id="gull" class="w-3.5 h-3.5 mr-2 text-green-700 dark:text-green-600 flex-shrink-0"
                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Лучшие Спикеры
              </li>
              <li id="focus-item" class="flex items-center">
                <svg id="gull" class="w-3.5 h-3.5 mr-2 text-green-700 dark:text-green-600 flex-shrink-0"
                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                профессиональные трейдеры
              </li>
              <li id="focus-item" class="flex items-center">
                <svg id="gull" class="w-3.5 h-3.5 mr-2 text-green-700 dark:text-green-600 flex-shrink-0"
                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                индивидуальные модули для каждого ученика
              </li>
              <li id="focus-item" class="flex items-center">
                <svg id="gull" class="w-3.5 h-3.5 mr-2 text-green-700 dark:text-green-600 flex-shrink-0"
                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Домашние задания каждую неделю
              </li>
              <li id="focus-item" class="flex items-center">
                <svg id="gull" class="w-3.5 h-3.5 mr-2 text-green-700 dark:text-green-600 flex-shrink-0"
                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Интерактивная форма с обучаюшимися
              </li>
              <li id="focus-item" class="flex items-center">
                <svg id="gull" class="w-3.5 h-3.5 mr-2 text-green-700 dark:text-green-600 flex-shrink-0"
                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Проверка домашнего задания
              </li>
              <li id="focus-item" class="flex items-center">
                <svg id="gull" class="w-3.5 h-3.5 mr-2 text-green-700 dark:text-green-600 flex-shrink-0"
                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Разбор ошибок исправления их
              </li>
              <li id="focus-item" class="flex items-center">
                <svg id="gull" class="w-3.5 h-3.5 mr-2 text-green-700 dark:text-green-600 flex-shrink-0"
                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Сертификаты об обучение
              </li>
              <li id="focus-item" class="flex items-center">
                <svg id="gull" class="w-3.5 h-3.5 mr-2 text-green-700 dark:text-green-600 flex-shrink-0"
                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Отправка ваших резюме в лучшие компании
              </li>
            </ul>
            </p>
            <div className='flex justify-between items-center mt-[190px]'>
              <h2 className='text-white text-2xl flex flex-col'>70.000₽ <span className='text-smoke text-xl'>90 дней</span></h2>
              <button className='moreBtn px-8 py-4 flex justify-between items-center border rounded-full text-white'>Подробнее <img className='ml-3' alt='' src={arrowRight}></img></button>
            </div>
          </div>
          <div className='p-8 bg-gray1 rounded-4xl text-center text-smoke border border-smoke'>
            <h1 className='text-white text-3xl font-bold py-3'>Стандарт Группа<br />TRADE CAPITAL</h1>
            <p className='mb-3'>
                <ul id="focus-group" class="max-w-md space-y-1 text-gray-500 text-start list-inside dark:text-gray-400">
              <li id="focus-item" class="flex items-center">
                <svg id="gull" class="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Обучение на практике
              </li>
              <li id="focus-item" class="flex items-center">
                <svg id="gull" class="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Спикеры — профессиональные трейдеры
              </li>
              <li id="focus-item" class="flex items-center">
                <svg id="gull" class="w-3.5 h-3.5 mr-2 text-green-700 dark:text-green-600 flex-shrink-0"
                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Домашние задания каждую неделю
              </li>
              <li id="focus-item" class="flex items-center">
                <svg id="gull" class="w-3.5 h-3.5 mr-2 text-green-700 dark:text-green-600 flex-shrink-0"
                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Интерактивная форма с обучаюшимися
              </li>
              <li id="focus-item" class="flex items-center">
                <svg id="gull" class="w-3.5 h-3.5 mr-2 text-green-700 dark:text-green-600 flex-shrink-0"
                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Проверка домашнего задания
              </li>
              <li id="focus-item" class="flex items-center">
                <svg id="gull" class="w-3.5 h-3.5 mr-2 text-green-700 dark:text-green-600 flex-shrink-0"
                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Разбор ошибок исправления их
              </li>
              <li id="focus-item" class="flex items-center">
                <svg id="gull" class="w-3.5 h-3.5 mr-2 text-green-700 dark:text-green-600 flex-shrink-0"
                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Сертификаты об обучение
              </li>
            </ul>
            </p>
            <div className='flex justify-between items-center mt-[190px]'>
              <h2 className='text-white text-2xl flex flex-col'>49.999₽ <span className='text-smoke text-xl'>90 дней</span></h2>
              <button className='moreBtn px-8 py-4 flex justify-between items-center border rounded-full text-white'>Подробнее <img className='ml-3' alt='' src={arrowRight}></img></button>
            </div>
          </div>
          <div className='p-8 bg-gray1 rounded-4xl text-center text-smoke border border-smoke'>
            <h1 className='text-white text-3xl font-bold py-3'>Стандарт Группа<br />P2P Обучение</h1>
            <p className='mb-3'>
                <ul id="focus-group" class="max-w-md space-y-1 text-gray-500 text-start list-inside dark:text-gray-400">
              <li id="focus-item" class="flex items-center">
                <svg id="gull" class="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Обучение на практике
              </li>
              <li id="focus-item" class="flex items-center">
                <svg id="gull" class="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Спикеры — профессиональные трейдеры
              </li>
              <li id="focus-item" class="flex items-center">
                <svg id="gull" class="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Индивидуальные модули для каждого ученика
              </li>
              <li id="focus-item" class="flex items-center">
                <svg id="gull" class="w-3.5 h-3.5 mr-2 text-green-700 dark:text-green-600 flex-shrink-0"
                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Домашние задания каждую неделю
              </li>
              <li id="focus-item" class="flex items-center">
                <svg id="gull" class="w-3.5 h-3.5 mr-2 text-green-700 dark:text-green-600 flex-shrink-0"
                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Интерактивная форма с обучаюшимися
              </li>
              <li id="focus-item" class="flex items-center">
                <svg id="gull" class="w-3.5 h-3.5 mr-2 text-green-700 dark:text-green-600 flex-shrink-0"
                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Проверка домашнего задания
              </li>
              <li id="focus-item" class="flex items-center">
                <svg id="gull" class="w-3.5 h-3.5 mr-2 text-green-700 dark:text-green-600 flex-shrink-0"
                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Разбор ошибок исправления их
              </li>
              <li id="focus-item" class="flex items-center">
                <svg id="gull" class="w-3.5 h-3.5 mr-2 text-green-700 dark:text-green-600 flex-shrink-0"
                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Сертификаты об обучение
              </li>
            </ul>
            </p>
            <div className='flex justify-between items-center mt-[190px]'>
              <h2 className='text-white text-2xl flex flex-col'>35.000₽ <span className='text-smoke text-xl'>90 дней</span></h2>
              <button className='moreBtn px-8 py-4 flex justify-between items-center border rounded-full text-white'>Подробнее <img className='ml-3' alt='' src={arrowRight}></img></button>
            </div>
          </div>
        </div>
      </section>

      <section className='flex flex-col mx-auto w-[85vw] items-center'>
        <h1 className='teachers-head text-center mt-48'>Ваши преподователи</h1>
        <ul className='flex justify-around text-white w-full text-center mt-16 teachers-ul'>
          <li className='flex flex-col justify-center items-center'>
            <img className='w-[200px] mb-4' alt='' src={teacher1}></img>
            <h2 className='text-xl font-bold'>Александр Сергеевич</h2>
            <p className='text-smoke text-sm mt-1 mb-4'>Специалист P2P</p>
            <button className='border rounded-full py-3 px-6 roboto bioBtn'>Биография</button>
          </li>
          <li className='flex flex-col justify-center items-center'>
            <img a className='w-[200px] mb-4' lt='' src={teacher2}></img>
            <h2 className='text-xl font-bold'>Владимир Данилович</h2>
            <p className='text-smoke text-sm mt-1 mb-4'>Специалист криптовалюты</p>
            <button className='border rounded-full py-3 px-6 roboto bioBtn'>Биография</button>
          </li>
          <li className='flex flex-col justify-center items-center'>
            <img a className='w-[200px] mb-4' lt='' src={teacher3}></img>
            <h2 className='text-xl font-bold'>Дмитрий Иванов</h2>
            <p className='text-smoke text-sm mt-1 mb-4'>Специалист криптовалюты</p>
            <button className='border rounded-full py-3 px-6 roboto bioBtn'>Биография</button>
          </li>
        </ul>
      </section>

      <section>
        <img alt='' src={volna2} className='fixed left-0 img-volna'></img>
        <h1 className='text-center mt-20 packages-header'>Отзывы</h1>
        <Swiper
          className='w-[1080px] mt-20 h-[600px]'
          slidesPerView={3}
          loop={true}
          spaceBetween={30}
          modules={[EffectCoverflow]} effect='coverflow'
          coverflowEffect={{
            rotate: 0,
            scale: 0.8,
            slideShadows: false
          }}
        >
          <SwiperSlide className=''>
            <img className='w-full' alt='' src={feedb1}></img>
          </SwiperSlide>
          <SwiperSlide className=''>
            <img className='w-full' alt='' src={feedb2}></img>
          </SwiperSlide>
          <SwiperSlide className=''>
            <img className='w-full' alt='' src={feedb1}></img>
          </SwiperSlide>
          <SwiperSlide className=''>
            <img className='w-full' alt='' src={feedb2}></img>
          </SwiperSlide>
        </Swiper>
      </section>

      <section  id='forma' className='flex flex-col text-center w-full form overflow-visible pt-10 mt-56'>

        <div className='form-bg flex-col flex w-[85vw] mx-auto items-start justify-around '><h1 className=' teachers-head mb-10 text-left'>Оставь заявку</h1>
          <form>
            <ul className='grid max-[750px]:grid-cols-1 h-full grid-cols-2 gap-x-6 text-white text-left form-ul'>
              <li>
                <p className='text-lg text-whitesmoke relative left-3'>Ваше фио</p>
                <input type='email' id='email' className='rounded-full text-lg py-2 px-6 mb-6 text-white border-smoke border outline-none montserrat'></input>
              </li>
              <li>
                <p className='text-lg text-whitesmoke relative left-3'>ваш номер телефона</p>
                <input type='email' id='email' className='rounded-full text-lg py-2 px-6 mb-6 text-white border-smoke border outline-none montserrat'></input>
              </li>
              <li>
                <p className='text-lg text-whitesmoke relative left-3'>ваш телеграм</p>
                <input type='email' id='email' className='rounded-full text-lg py-2 px-6 mb-6 text-white border-smoke border outline-none montserrat'></input>
              </li>
              <li>
                <p className='text-lg text-whitesmoke relative left-3'> ваш e-mail адрес</p>
                <input type='email' id='email' className='rounded-full text-lg py-2 px-6 mb-6 text-white border-smoke border outline-none montserrat'></input>
              </li>
              <li>
                <p className='text-lg text-whitesmoke relative left-3'>ваш комментари (по желанию)</p>
                <input type='email' id='email' className='rounded-full text-lg py-2 px-6 mb-6 text-white border-smoke border outline-none montserrat'></input>
              </li>
              <li>
                <button className='py-3 px-6  relative top-6 rounded-full sendBtn max-[750px]:-top-3'>отправить</button>
              </li>
            </ul>
          </form>
          <div className=''>
            <img alt='' src={phone} className='absolute max-[1350px]:hidden z-5 right-24 -top-10 float-right'></img>
          </div>
        </div>
        
      </section>
      <div className=''>
            <img alt='' src={phone} className='phone-img hidden '></img>
          </div>

      <section className='flex flex-col  justify-between h-full bg-gray1 z-50'>
        <h1 className='teachers-head text-center'>Контакты</h1>
        <ul className='text-center flex justify-around w-[75vw] mx-auto contacts'>
          <li className='border rounded-full p-3 border-white bg-white flex socialBtn'><a href='https://t.me/luxury_ebaka'><img className='' alt='' src={fb}></img></a></li>
          <li className='border rounded-full p-3 border-white bg-white flex socialBtn'><a href='https://t.me/luxury_ebaka'><img className='' alt='' src={be}></img></a></li>
          <li className='border rounded-full p-3 border-white bg-white flex socialBtn'><a href='https://t.me/luxury_ebaka'><img className='' alt='' src={tg}></img></a></li>
          <li className='border rounded-full p-3 border-white bg-white flex socialBtn'><a href='https://t.me/luxury_ebaka'><img className='' alt='' src={vk}></img></a></li>
          <li className='border rounded-full p-3 border-white bg-white flex socialBtn'><a href='https://t.me/luxury_ebaka'><img className='' alt='' src={gm}></img></a></li>
        </ul>
        <h4 className='text-center text-smoke roboto'>
          Craeted by OU VISUAL - softprank@gmail.com
        </h4>
      </section>

    </div>
  );
}
export default App;

document.querySelector('body').style.backdropFilter = "grayscale(100%)"
function menuBtn() {
  document.querySelector('#modalWindow').classList.remove('hidden')
}
function closeBtn() {
  document.querySelector('#modalWindow').classList.add('hidden')
}

