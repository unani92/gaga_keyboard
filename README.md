# 가가라이브 키보드 컨트롤

해당 크롬 익스텐션은 마우스를 움직이기 귀찮은 유저들을 위해 만들었습니다. 
무단배포, 개조 환영합니다.... 😍😍😍😍😍

## 사용법

> 우선 마우스를 채팅창 밖으로 놓고 아무곳이나 클릭 후 사용합니다. 
> 채팅창에 포커스가 있으면 작동하지 않습니다.
> 즉 채팅 중(커서가 채팅에 있을 때)일때는 마우스로 채팅창 밖을 클릭해 커서가 지워져야 사용 가능합니다. 
> 향후 채팅창에 포커스가 있더라도 키보드로 동작하도록 코드 수정해 보겠습니다. 

1. 스페이스바: 채팅을 아직 시작하지 않았을 때 채팅을 시작합니다.
2. `(esc키 밑, 숫자 1 왼편에 위치) : 광고를 접어줍니다. 
3. esc키: 채팅을 종료합니다. 

## 리팩토링 계획(언제 할지는 모르겟지만.....)

1. 어떤 상황에서도 키보드 치면 동작하게 하기
2. 채팅에는 이상이 없지만 잘못된 키 누를 때(예: 채팅을 안하고 있는데 esc를 누르는 경우) JS 콘솔창에 에러 출력되는 문제 해결(이건 사실 에러핸들링 좀 하면 되는데 귀찮아서)
3. 기능 추가하기?????