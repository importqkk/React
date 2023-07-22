# 2023-07-22
library - 웹사이트를 만들때 사용하는 부품

터미널 cmd에서 아래처럼 순서대로 입력
(파일 경로에 한글, 띄어쓰기, 대문자 있으면 안됨(대문자는 불확실), 폴더명이 'react'면 안됨(앞뒤에 뭐가 붙어야 함))
1. npm install -g create-react-app
2. create-react-app .
3. npm run start
- 원래는 npx create-react-app .로 해야 하는데, 안돼서 앞 1, 2줄로 대체함

배포하는 법
- npm run build
  -> build 파일 생기면서 빌드되고, 해당 파일의 index.html이 배포되는 파일
- https://app.netlify.com/drop: 무료 배포해주는 사이트. build 폴더 자체를 드래그 앤 드롭하면 서비스가 시작됨
