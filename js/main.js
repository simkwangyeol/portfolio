console.log('The weather today is predicted to be ❄snowy!')
svg_str = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" d="M440.5 345.8L408.1 327c11.8-12.3 26-18.2 26.2-18.3 7.5-3 11.4-11.4 8.9-19.1-1.9-5.9-7.4-9.8-13.5-9.8-1.9 0-3.7.4-5.5 1.1-1 .4-24.4 10-41.9 31.2l-96.3-56 96.3-56c17.5 21.2 40.8 30.8 41.9 31.2 1.8.7 3.6 1.1 5.5 1.1 6.1 0 11.6-4 13.5-9.8 2.5-7.7-1.4-16.1-8.9-19.1-.1-.1-14.3-6-26.2-18.3l32.4-18.8c7.2-4.2 9.6-13.4 5.5-20.6-2.7-4.7-7.7-7.6-13.1-7.6-2.6 0-5.3.7-7.6 2L393.1 159c-4.5-16.2-2.7-31.4-2.6-32 1.1-8.1-4.1-15.6-12-17.3-1-.2-2-.3-3-.3-7.1 0-13 5.2-14.1 12.4-.2 1.1-3.6 26 6.1 52.2l-96 56v-99.2c26.9-4.7 46.8-20.2 47.7-20.9 3.1-2.5 5.1-6 5.4-10 .3-4-.9-7.8-3.6-10.8-2.9-3.2-7-5.1-11.4-5.1-3.4 0-6.8 1.2-9.5 3.3-.1.1-12.2 9.4-28.6 13.6V63.1c0-8.2-7.1-15.1-15.5-15.1s-15.5 6.9-15.5 15.1v37.5c-16.3-4.2-28.4-13.5-28.6-13.6-2.7-2.1-6-3.3-9.5-3.3-4.4 0-8.5 1.9-11.4 5.1-2.7 3-4 7-3.6 10.9.3 3.9 2.3 7.4 5.4 9.9.9.7 20.8 16.2 47.7 20.9v99.2l-96-56c9.6-26 6.2-51.1 6-52.2-1-7.2-6.9-12.4-14-12.4-1 0-2 .1-3 .3-7.9 1.6-13.2 9.3-12 17.3 0 .2 2 15.5-2.6 31.9L86.6 140c-2.3-1.3-4.9-2-7.6-2-5.4 0-10.4 2.9-13.1 7.6-4.1 7.2-1.7 16.5 5.5 20.6l32.4 18.8c-11.7 12.1-25.7 18.1-26.2 18.3-7.5 3-11.4 11.4-8.9 19.1 1.9 5.9 7.4 9.8 13.5 9.8 1.9 0 3.7-.4 5.5-1.1 1-.4 24.4-10 41.9-31.2l96.3 56-96.3 56c-17.5-21.2-40.8-30.8-41.9-31.2-1.8-.7-3.6-1.1-5.5-1.1-6.1 0-11.6 4-13.5 9.8-2.5 7.7 1.4 16 8.9 19.1.5.2 14.5 6.2 26.2 18.3l-32.4 18.8c-7.2 4.2-9.6 13.4-5.5 20.6 2.7 4.7 7.7 7.6 13.1 7.6 2.6 0 5.3-.7 7.6-2l32.3-18.8c4.6 16.5 2.6 31.8 2.6 32-1.2 8 4.1 15.7 12 17.3 1 .2 2 .3 3 .3 7.1 0 13-5.2 14.1-12.4.2-1.1 3.6-26-6.1-52.2l96-56v99.2c-26.9 4.7-46.8 20.2-47.7 20.9-3.1 2.5-5.1 6-5.4 10-.3 4 .9 7.8 3.6 10.8 2.9 3.2 7 5.1 11.4 5.1 3.4 0 6.8-1.2 9.5-3.3.1-.1 12.3-9.4 28.6-13.6v37.5c0 8.2 7.1 15.1 15.5 15.1s15.5-6.9 15.5-15.1v-37.5c16.3 4.2 28.4 13.5 28.6 13.6 2.7 2.1 6.1 3.3 9.5 3.3 4.4 0 8.5-1.9 11.4-5.1 2.7-3 4-7 3.6-10.9-.3-3.9-2.3-7.4-5.4-9.9-.9-.7-20.8-16.2-47.7-20.9V282l96 56c-9.6 26-6.2 51.1-6 52.2 1 7.2 6.9 12.4 14 12.4 1 0 2-.1 3-.3 7.9-1.6 13.1-9.2 12-17.3-.1-.5-1.9-15.7 2.6-32l32.2 18.8c2.3 1.3 4.9 2 7.6 2 5.4 0 10.4-2.9 13.1-7.6 4.1-6.9 1.7-16.2-5.5-20.4z"/></svg>`
snow = new DOMParser().parseFromString(svg_str, 'text/xml').children[0]

// set the svg's position to fixed
snow.style.position = "fixed"
snow.style.top = '-24px'

// new snowflake
let newSnow = () => {
	// create a new snow
	let clonedSnow = snow.cloneNode(true);

	// assign to it a random left
	let left = Math.floor(document.body.offsetWidth * Math.random())
	clonedSnow.style.left = left + 'px';
	clonedSnow.style.color = '#fff';

	// add it to the dom
	document.body.append(clonedSnow)

	// assign to it a random speed
	let time = Math.max(10 * Math.random(), 5) * 1000

	let anim = clonedSnow.animate([ { top: (window.innerHeight + 24) + 'px' } ], { duration: time, fill: 'forwards' })

	// garbage collection
	anim.onfinish = el => el.target.effect.target.remove()

	return snow
}

wait = time => new Promise(res => setTimeout(res, time))

let asyncIterate = async (start, iterations, fn) => {
	let i = start;
	let call = res => fn(res)
		.then(async result => {
			if (i >= iterations) return result;
			i++
			return await call(i)
		});
	return await call(i);
}

// also don't run it for people who do not 
if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: true)').matches) {
	console.log('No snow for you because you (prefers-reduced-motion)')
} else {
	asyncIterate(0, Infinity, async () => {
		// wait 10 seconds if the user is not active
		// if (navigator.userActivation && !navigator.userActivation.isActive) return await wait(10000);
		if (document.visibilityState && document.visibilityState != 'visible') return await wait(10000).then(() => console.log('page was not visible'));
		await wait(Math.max(3 * Math.random(), 1) * 300)
		newSnow();
	})
}

$(function () {
  // .btn_top을 500px 도달시 나타남
  // window -> 브라우저 창을 의미함 
  $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
          $(".btn_top").fadeIn();
          // 안보이던 화살표 버튼이 500px 이상으로 스크롤이 내려오면 나타남
      } else {
          $(".btn_top").fadeOut(); // 500px 이하일 경우 사라짐
      }
  });

  // .logo와 .btn_top 클릭시 최상단으로 가게 하기
  // 로고와 화살표를 클릭했을때 최상단(TOP:0)으로 위치 
  $(".logo, .btn_top").on("click", function () {
      $("html,body").animate({
          scrollTop: 0
      }, 400); //0.4초
  });
  // .on() - 이벤트 등록 메서드 



  //각 메뉴 클릭 시 스크롤 이벤트 처리
// 1. 메뉴와 라인 색변경
    // 스크롤 이벤트 핸들러 등록 
    $(window).scroll(function () {
      // 현재의 스크롤 위치 가져옴
      var height = $(document).scrollTop();
  
      // 스크롤의 위치에 따라 활성화 되는 클래스를 추가 또는 제거함
  
      // 모든 메뉴 항목에서 active 클래스 제거
      $(".header_main>ul>li").removeClass("active");
  
      // 만약, 스크롤의 위치가 0~1144px 사이에 있다면,
      if (height >= 0 && height <= 1850) {
          // 첫 번째 메뉴에 active 클래스 추가
          $(".header_main>ul>li:nth-child(1)").addClass("active");
      }
      // 만약, 스크롤의 위치가 1145~4724px 사이에 있다면,
      else if (height >= 1851 && height <= 2750) {
          // 두 번째 메뉴에 active 클래스 추가
          $(".header_main>ul>li:nth-child(2)").addClass("active");
      }
      // 위의 조건을 만족하지 않는 경우
      else {
          // 세 번째 메뉴에 active 클래스 추가
          $(".header_main>ul>li:nth-child(3)").addClass("active");
      }

    //
    //else{$(".header_main>ul>li").removeClass("active");
      //모든 메뉴 항목에서 active 클래스 제거
    //}


  });

//.2 각 메뉴 클릭시 각 영역으로 이동
    //ABOUT 메뉴 클릭시 해당 위치로 이동
$(".header_main>ul>li:nth-child(1)").on("click",function(){
var about = $("#skill").position();
$("html,body").animate({
  scrollTop:about.top - -170
},400)

$(".header_menu>ul>li").removeClass("active");
$(this).addClass("active"); });

    //Porfolio
$(".header_main>ul>li:nth-child(2)").on("click",function(){
var porfolio = $("#porfolio").position();
$("html,body").animate({
  scrollTop:porfolio.top - -310
},400);


$(".header_menu>ul>li").removeClass("active");
$(this).addClass("active"); });

     //Other Design 메뉴 클릭시 해당 위치로 이동
$(".header_main>ul>li:nth-child(3)").on("click",function(){
  var etc = $("#etc").position();
  $("html,body").animate({
    scrollTop:etc.top - 100
  },400);
  
  
$(".header_menu>ul>li").removeClass("active");
$(this).addClass("active"); });


});

$(document).ready(function(){
    var zindex = 10;
    
    $("div.card").click(function(e){
      e.preventDefault();
  
      var isShowing = false;
  
      if ($(this).hasClass("show")) {
        isShowing = true
      }
  
      if ($("div.cards").hasClass("showing")) {
        // a card is already in view
        $("div.card.show")
          .removeClass("show");
  
        if (isShowing) {
          // this card was showing - reset the grid
          $("div.cards")
            .removeClass("showing");
        } else {
          // this card isn't showing - get in with it
          $(this)
            .css({zIndex: zindex})
            .addClass("show");
  
        }
  
        zindex++;
  
      } else {
        // no cards in view
        $("div.cards")
          .addClass("showing");
        $(this)
          .css({zIndex:zindex})
          .addClass("show");
  
        zindex++;
      }
      
    });
  });
  
/*--------------------
Vars
--------------------*/
let progress = 50
let startX = 0
let active = 0
let isDown = false

/*--------------------
Contants
--------------------*/
const speedWheel = 0.02
const speedDrag = -0.1

/*--------------------
Get Z
--------------------*/
const getZindex = (array, index) => (array.map((_, i) => (index === i) ? array.length : array.length - Math.abs(index - i)))

/*--------------------
Items
--------------------*/
const $items = document.querySelectorAll('.carousel-item')
const $cursors = document.querySelectorAll('.cursor')

const displayItems = (item, index, active) => {
  const zIndex = getZindex([...$items], active)[index]
  item.style.setProperty('--zIndex', zIndex)
  item.style.setProperty('--active', (index-active)/$items.length)
}

/*--------------------
Animate
--------------------*/
const animate = () => {
  progress = Math.max(0, Math.min(progress, 100))
  active = Math.floor(progress/100*($items.length-1))
  
  $items.forEach((item, index) => displayItems(item, index, active))
}
animate()

/*--------------------
Click on Items
--------------------*/
$items.forEach((item, i) => {
  item.addEventListener('click', () => {
    progress = (i/$items.length) * 100 + 10
    animate()
  })
})

/*--------------------
Handlers
--------------------*/
const handleWheel = e => {
  const wheelProgress = e.deltaY * speedWheel
  progress = progress + wheelProgress
  animate()
}

const handleMouseMove = (e) => {
  if (e.type === 'mousemove') {
    $cursors.forEach(($cursor) => {
      $cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    })
  }
  if (!isDown) return
  const x = e.clientX || (e.touches && e.touches[0].clientX) || 0
  const mouseProgress = (x - startX) * speedDrag
  progress = progress + mouseProgress
  startX = x
  animate()
}

const handleMouseDown = e => {
  isDown = true
  startX = e.clientX || (e.touches && e.touches[0].clientX) || 0
}

const handleMouseUp = () => {
  isDown = false
}

/*--------------------
Listeners
--------------------*/
document.addEventListener('mousewheel', handleWheel)
document.addEventListener('mousedown', handleMouseDown)
document.addEventListener('mousemove', handleMouseMove)
document.addEventListener('mouseup', handleMouseUp)
document.addEventListener('touchstart', handleMouseDown)
document.addEventListener('touchmove', handleMouseMove)
document.addEventListener('touchend', handleMouseUp)

"use strict";
(function () {
	window.onload = () => {
		const obj = document.querySelector("#gallery");
		const time = 10000;
		function animStart() {
			if (obj.classList.contains("active") == false) {
				obj.classList.add("active");
				setTimeout(() => {
					animEnd();
				}, time);
			}
		}
		function animEnd() {
			obj.classList.remove("active");
			obj.offsetWidth;
		}
		document.addEventListener("scroll", function () {
			// scroll or scrollend
			animStart();
		});
		window.addEventListener("resize", animStart);
		animStart();
	};
})();
