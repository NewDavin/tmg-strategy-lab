# StarCraft TMG Simulator MVP

저그 고정 정책 기반 로스터 자동 전투기입니다. 저그 대 테란·저그·프로토스 매치업과 양측 로스터 구성을 보여 줍니다. 공식 Core Rules와 공식 P2P 카드 시트를 기준으로 유지하며, 커뮤니티 앱은 실행이나 데이터 로딩에 필요하지 않습니다. 한국어 명칭은 커뮤니티 번역을 참고할 수 있습니다.

## 실행

Node.js 20 이상에서:

```powershell
npm install
npm run start
```

표시된 로컬 주소를 브라우저에서 여십시오. 명령줄 대량 시뮬레이션은 다음과 같습니다.

```powershell
npm run simulate -- --a=marine --b=zergling --games=1000 --seed=42
npm test
```

Vite 설치 없이 UI만 바로 확인하려면 이 폴더에서 `python -m http.server 4173`을 실행한 뒤 `http://127.0.0.1:4173`을 여셔도 됩니다.

UI는 저그 로스터를 고정하며 상대 종족만 선택합니다. 엔진에는 기본 유닛 9종이 연결되어 있습니다.

## 구현 근거와 제한

- Core Rules 8.1: Movement → Assault → Combat → Scoring/Cleanup의 라운드 구조. MVP는 Movement와 Assault만 단순화해 사용합니다.
- 8.5.2–8.5.3: Speed까지 이동하고 적 Ground 유닛의 1인치 이내에서 종료하지 않음. MVP는 장애물 없는 1차원 보드입니다.
- 8.7.3–8.7.4: 사거리/타깃 확인, RoA 기반 Attack Pool, Hit, Surge, Armour, 조건부 Evade, Damage와 casualty 처리.
- 7.4: 마지막 모델 제거 시 유닛 파괴.
- Frontlines: 공식 카드 기준 5라운드, 파괴 Supply VP, 2라운드부터 마커 점수, 탈취 추가 VP, 10 VP 리드 즉시 종료.
- 데이터 권위: https://starcraft-tmg.com/fr/downloads 에 공개된 공식 Core Rules 및 종족별 P2P 카드 시트.

중요: 일반적인 사격에는 자동 Evade가 없습니다. 공식 룰대로 능력/키워드가 허용하거나, 교전 중인 표적이 Ranged Attack 피해를 받을 때만 Evade를 적용합니다. MVP는 후자만 구현합니다.

## 명시적 TODO

- 2D 보드, 실제 베이스 크기, 다중 모델 배치, coherency, terrain, LoS/cover/elevation
- 정식 activation/pass/initiative, reserve/deploy/supply, charge 및 close combat 전체
- 실제 2D 배치에 근거한 mission marker 점유 판정(현재는 1차원 위치 기반 간이 Frontlines VP), 정밀 게임 종료 조건
- 카드 자원/상태, 특수 능력, 업그레이드, 모든 weapon keyword
- 프로토스 Shield 처리(현재 HP/Armour만 반영)
- 다중 weapon batch, visible model별 casualty 제한, engaged casualty 우선순위
- 공식 카드 데이터와 커뮤니티 사이트 데이터의 버전 차이 자동 검증

현재 승률은 밸런스 결론이 아니라 구현·반복성 검증용 수치입니다.

