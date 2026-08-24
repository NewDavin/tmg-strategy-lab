// Numeric profiles are maintained locally. Official Archon/StarCraft PDFs are the authority.
// Korean labels may reference the community translation for readability only.
export const UNITS={
 marine:{id:'marine',name:'Marine',race:'Terran',hp:2,speed:4,armour:5,evade:5,tags:['Light','Biological','Ground'],weapon:{name:'C-14 Rifle',range:12,roa:2,hit:3,damage:1,surge:['Light'],surgeDie:'D3'}},marauder:{id:'marauder',name:'Marauder',race:'Terran',hp:5,speed:4,armour:4,evade:6,tags:['Armoured','Biological','Ground'],weapon:{name:'Quad K12',range:12,roa:3,hit:3,damage:1,surge:['Armoured'],surgeDie:'D3'}},goliath:{id:'goliath',name:'Goliath',race:'Terran',hp:10,speed:7,armour:4,evade:7,tags:['Armoured','Mechanical','Ground'],weapon:{name:'Autocannon',range:12,roa:9,hit:4,damage:1,surge:[],surgeDie:null}},
 zergling:{id:'zergling',name:'Zergling',race:'Zerg',hp:1,speed:4,armour:6,evade:4,tags:['Light','Biological','Ground'],weapon:{name:'Claws',range:1,roa:2,hit:4,damage:1,surge:['Light'],surgeDie:'D3'}},roach:{id:'roach',name:'Roach',race:'Zerg',hp:4,speed:4,armour:3,evade:5,tags:['Armoured','Biological','Ground'],weapon:{name:'Acid Saliva',range:8,roa:3,hit:3,damage:1,surge:[],surgeDie:null}},hydralisk:{id:'hydralisk',name:'Hydralisk',race:'Zerg',hp:4,speed:4,armour:5,evade:5,tags:['Light','Biological','Ground'],weapon:{name:'Needle Spines',range:12,roa:3,hit:3,damage:2,surge:['Light','Armoured'],surgeDie:'D3+1'}},
 zealot:{id:'zealot',name:'Zealot',race:'Protoss',hp:4,speed:4,armour:5,evade:5,tags:['Light','Biological','Ground'],weapon:{name:'Psi Blades',range:1,roa:4,hit:3,damage:1,surge:['Light'],surgeDie:'D3'}},stalker:{id:'stalker',name:'Stalker',race:'Protoss',hp:6,speed:4,armour:4,evade:6,tags:['Armoured','Mechanical','Ground'],weapon:{name:'Particle Disruptors',range:12,roa:4,hit:3,damage:2,surge:['Armoured'],surgeDie:'D3'}},adept:{id:'adept',name:'Adept',race:'Protoss',hp:3,speed:5,armour:5,evade:5,tags:['Light','Biological','Ground'],weapon:{name:'Glaive Cannon',range:8,roa:2,hit:3,damage:1,surge:['Light'],surgeDie:'D3+1'}}};
const zergCore=[{unit:'zergling',models:12,cost:180,supply:1,label:'Zergling 전투군'},{unit:'roach',models:3,cost:170,supply:1,label:'Roach 방벽대'},{unit:'hydralisk',models:4,cost:260,supply:3,label:'Hydralisk 화력대'},{unit:'roach',models:3,cost:170,supply:1,label:'Roach 지원대'}];
export const ROSTERS={zerg:{id:'zerg',name:'Zerg 실험 로스터',race:'Zerg',faction:'Zerg Swarm',tactical:[{name:'Spawning Pool',gas:25},{name:'Hydralisk Den',gas:35}],entries:zergCore},terran:{id:'terran',name:'Terran 기동화력',race:'Terran',faction:'Terran Armed Forces',tactical:[{name:'Barracks',gas:25},{name:'Factory',gas:35}],entries:[{unit:'marine',models:9,cost:210,supply:2,label:'Marine 1분대'},{unit:'marine',models:9,cost:210,supply:2,label:'Marine 2분대'},{unit:'marauder',models:4,cost:280,supply:2,label:'Marauder 중장갑대'},{unit:'goliath',models:1,cost:190,supply:2,label:'Goliath 지원기'}]},protoss:{id:'protoss',name:'Protoss 관문 로스터',race:'Protoss',faction:'Khalai',tactical:[{name:'Gateway',gas:25},{name:'Twilight Council',gas:45}],entries:[{unit:'zealot',models:3,cost:160,supply:2,label:'Zealot 돌격대'},{unit:'stalker',models:2,cost:270,supply:2,label:'Stalker 1분대'},{unit:'adept',models:4,cost:150,supply:1,label:'Adept 견제대'},{unit:'stalker',models:2,cost:270,supply:2,label:'Stalker 2분대'}]},zergMirror:{id:'zergMirror',name:'Zerg 미러 로스터',race:'Zerg',faction:'Zerg Swarm',tactical:[{name:'Spawning Pool',gas:25},{name:'Hydralisk Den',gas:35}],entries:zergCore.map((e,i)=>({...e,label:`${UNITS[e.unit].name} 미러 ${i+1}분대`}))}};
export const rosterTotals=r=>({minerals:r.entries.reduce((n,e)=>n+e.cost+(e.upgradeCost||0),0),gas:r.tactical.reduce((n,e)=>n+e.gas,0),supply:r.entries.reduce((n,e)=>n+e.supply,0),models:r.entries.reduce((n,e)=>n+e.models,0)});export const SOURCE_INVENTORY={terran:{units:7,tactical:10,faction:2},zerg:{units:12,tactical:11,faction:2},protoss:{units:7,tactical:11,faction:2}};
export const MISSIONS={
 frontlines:{name:'Frontlines',rounds:5,lead:10,rule:'적 Supply 파괴 VP · 2R부터 모든 점령 마커 +1VP · 상대에게서 탈환 +2VP'},
 gather:{name:'Gather the Resources',rounds:5,lead:10,rule:'적 Supply 파괴 VP · 2R부터 상대 진영 마커당 +2VP · Gather 행동 +1VP'},
 hold:{name:'Hold Position',rounds:5,lead:10,rule:'적 Supply 파괴 VP · 2R부터 아군/중립 마커 +1VP · 상대 마커 +2VP'},
 supply:{name:'Supply Drop',rounds:5,lead:12,rule:'적 Supply 파괴 VP · 활성 마커 점령 시 활성화 라운드만큼 VP 후 제거'},
 divide:{name:'Divide and Conquer',rounds:4,lead:10,rule:'적 Supply 파괴 VP · 전장 4분면 우세마다 +1VP · 중앙 마커 +2VP'}
};
export const BATTLEFIELD={name:'Lost Temple Object Board',reference:'Official Lost Temple terrain set · object layout prototype',size:'54 × 36 in',mission:'Frontlines',deployment:'Acropolis · Standard Engagement',missionRule:MISSIONS.frontlines.rule,terrain:['Wall ×2','Ramp ×2','High Ground ×2','Vespene Geyser ×2','Grass ×4']};
export const UNIT_CATALOG={zerg:[
 {unit:'zergling',label:'저글링',models:12,cost:180,supply:1,role:'Core',simReady:true},
 {unit:'corpse_roach',label:'송장 벌레 [바퀴]',models:3,cost:240,supply:1,role:'Core',simReady:false},
 {unit:'hydralisk',label:'히드라리스크',models:4,cost:260,supply:3,role:'Elite',simReady:true},
 {unit:'kerrigan',label:'케리건',models:1,cost:250,supply:3,role:'Hero · Unique',simReady:false},
 {unit:'kerrigan_raptor',label:'케리건 군단 랩터 [저글링]',models:6,cost:250,supply:2,role:'Elite · Unique',simReady:false},
 {unit:'omega_worm',label:'오메가 벌레',models:1,cost:0,supply:0,role:'Other',simReady:false},
 {unit:'queen',label:'여왕',models:1,cost:150,supply:1,role:'Support',simReady:false},
 {unit:'raptor',label:'랩터 [저글링]',models:12,cost:240,supply:2,role:'Elite',simReady:false},
 {unit:'roach',label:'바퀴',models:3,cost:170,supply:1,role:'Core',simReady:true},
 {unit:'roachling',label:'애바퀴',models:3,cost:0,supply:0,role:'Other',simReady:false},
 {unit:'swarm_zergling',label:'군단충 [저글링]',models:18,cost:260,supply:2,role:'Core',simReady:false},
 {unit:'pustule_roach',label:'고름 변종 [바퀴]',models:3,cost:200,supply:1,role:'Core',simReady:false}
] ,terran:[
 {unit:'marine',label:'해병',models:9,cost:210,supply:2,role:'Core',simReady:true},
 {unit:'goliath',label:'골리앗',models:1,cost:190,supply:2,role:'Elite',simReady:true},
 {unit:'jim_raynor',label:'짐 레이너',models:1,cost:250,supply:3,role:'Hero · Unique',simReady:false},
 {unit:'medic',label:'의무관',models:3,cost:110,supply:1,role:'Support',simReady:false},
 {unit:'point_defense_drone',label:'국지 방어기',models:1,cost:0,supply:0,role:'Other',simReady:false},
 {unit:'marauder',label:'불곰',models:4,cost:280,supply:2,role:'Core',simReady:true},
 {unit:'raynor_marine',label:'레이너 특공대 해병',models:6,cost:230,supply:2,role:'Core',simReady:false}
] ,protoss:[
 {unit:'pylon',label:'수정탑',models:1,cost:0,supply:0,role:'Other · 칼라이',simReady:false},
 {unit:'adept',label:'사도',models:4,cost:150,supply:1,role:'Core',simReady:true},
 {unit:'artanis',label:'아르타니스',models:1,cost:250,supply:3,role:'Hero · Unique',simReady:false},
 {unit:'archon_guard',label:'집정관 근위대 [광전사]',models:3,cost:280,supply:2,role:'Elite · Unique · 칼라이',simReady:false},
 {unit:'sentry',label:'파수기',models:2,cost:130,supply:1,role:'Support',simReady:false},
 {unit:'stalker',label:'추적자',models:2,cost:270,supply:2,role:'Elite',simReady:true},
 {unit:'zealot',label:'광전사',models:3,cost:160,supply:2,role:'Core',simReady:true}
]};
export const FACTION_CATALOG={
 zerg:['케리건의 군단','저그 군단'],
 terran:['레이너 특공대','테란 정규군'],
 protoss:['댈람','칼라이']
};
export const TACTICAL_CATALOG={
 zerg:[['가속 점막',0],['진화장',30],['부화장',30],['히드라리스크 굴',35],['번식지',35],['악성 점막',10],['대군주',35],['감시 군주',25],['바퀴 소굴',25],['산란못',25],['패스트 산란못',40]],
 terran:[['사관학교',35],['무기고',30],['병영',25],['전진 병영',40],['기술실 병영',45],['수송선',40],['공학 연구소',25],['군수 공장',35],['궤도 사령부',25],['보급고',40]],
 protoss:[['제련소',30],['시간 가속 관문',35],['관문',25],['연결체',35],['관측선',25],['과부화 연결체',35],['동력장',40],['황혼 의회',45],['차원 관문',40],['차원 분광기',35]]
};

