// ESLint에게 해당 파일이 Node.js 환경에서 사용될 것임을 알려줌
/*eslint-env node*/  

// Tailwind CSS의`Config`인터페이스를 준수하는 객체를 반환한다는 것을 알려줌
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue, js, ts}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

