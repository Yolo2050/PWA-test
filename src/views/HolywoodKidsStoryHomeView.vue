<script setup>
  import { useFeinStore } from '@/stores/fein'
  const store = useFeinStore()
  // import { agenda4weeks } from  '@/assets/data/HK/info_lesson.json'
  // console.log(agenda4weeks.lesson.length)

  import { ref } from 'vue'

  const lessons = ref([])

  // JSON 파일을 가져옴
  import lessonData from '@/assets/data/bookdata/HK/HK101A/info_lesson.json'
  lessons.value = lessonData.lesson
  /*
 video 부분 추가함
  */
  const videoPlayer = ref(null)

  const playVideo = () => {
    if (videoPlayer.value) {
      videoPlayer.value.classList.remove('hidden')
      videoPlayer.value.play()
      videoPlayer.value.requestFullscreen()
    }
  }
</script>

<template>
  <div id="app">
    <nav class="navbar">
      <a href="#">
        <i class="fas fa-arrow-left"></i>
      </a>
      <!-- <h1>{{ seriesName }} {{ contentTitle }}</h1> -->
      <h1>seriesName contentTitle HK101A</h1>
    </nav>
    <div class="content">
      <div class="outer-box">
        <img
          class="full-width"
          src="@/assets/images/HK101A.png"
          alt="Image"
        />
      </div>
      <div class="outer-box">
        <ul>
          <li
            v-for="(lesson, index) in lessons"
            :key="lesson.title"
            class="bar-box"
          >
            <h2>&nbsp; Week {{ index + 1 }}</h2>
            {{ lesson.title }}
            <button @click="store.goToWeekView">Go</button>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <p>
        출처
        <a
          href="https://kr.freepik.com/free-psd/3d-dreamscape-with-clouds-and-fairytale-elements_36190186.htm#page=3&position=1&from_view=collections"
          >Freepik</a
        >
      </p>
      <button @click="playVideo">Play Video</button>
      <video
        ref="videoPlayer"
        src="@/temp-folder/1-1_Story_1.mp4"
        class="hidden"
        controls
      ></video>
    </div>
  </div>
</template>

<style scoped>
  div#app {
    width: 100%;
    height: 100%;
    /* 배경 이미지 설정 */
    background-image: url('@/assets/images/background/bg_00.jpg');

    /* 페이지 크기에 맞게 배경 이미지 크기를 자동 조절 */
    background-size: cover;

    /* 배경 이미지 반복 방식 설정 */
    background-repeat: no-repeat;

    /* 배경 이미지 위치 조절 (선택 사항) */
    background-position: center center;
  }

  .navbar {
    display: block;
    position: absolute;
    top: 2.5rem;
    left: 0;
    width: 100%;
    text-align: center;

    align-items: center;
    background-color: #b93bdc;
    color: #fff;
    /* padding: 1rem;
  position: fixed;
  height: 10%; */
  }

  .content {
    /* 넘쳐도 스크롤 바 나오지 않게게 */
    /* overflow-x: hidden; */
    overflow-y: hidden;
    align-content: center;

    /* navbar의 높이만큼 패딩 추가 */
    padding-top: calc(1.5rem + 20px * 2); /* navbar의 높이 + 상하 패딩 */
  }
  .outer-box {
    width: 35%;
    height: 40%;
    float: left;
    margin: 2rem 1rem 1rem 2rem;
    padding: 1rem;
    align-items: center;
    /* border: #000 solid 2px; */
  }

  .full-width {
    width: 100%;
    height: auto;
    /* 화면비를 유지하며 가능한 한 많은 영역 채우기 */
    object-fit: cover;
  }

  .bar-box {
    width: 100%;
    height: 100px;
    background-color: #fff;
    /* border:#000 solid 2px; */
    margin: 1rem;
  }

  .bar-box h2 {
    text-align: left;
    font-size: 1.3rem;
    padding: 1%;
  }

  /*  rem 크기 단위 사용  */
  html {
    font-size: 16px;
  }
</style>
