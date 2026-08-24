import test from 'node:test'; import assert from 'node:assert/strict'; import {makeUnit,moveToward,attack,mulberry32,simulate,runBatch,simulateRoster,runRosterBatch} from '../src/engine.js';
import {UNIT_CATALOG,TACTICAL_CATALOG,FACTION_CATALOG,ROSTERS} from '../src/data.js';
test('movement stops at engagement range',()=>{const a=makeUnit('marine','A',0),b=makeUnit('zergling','B',4);moveToward(a,b);assert.equal(a.x,3)});
test('out-of-range attack is illegal',()=>{const a=makeUnit('marine','A',0),b=makeUnit('zergling','B',20);assert.equal(attack(a,b,mulberry32(1)).legal,false)});
test('same seed is deterministic',()=>assert.deepEqual(simulate({seed:99}),simulate({seed:99})));
test('batch accounts for every game',()=>{const r=runBatch({games:50,seed:2});assert.equal(r.wins.A+r.wins.B+r.wins.draw,50)});
test('all three Zerg matchups are deterministic',()=>{for(const opponent of ['terran','zergMirror','protoss'])assert.deepEqual(simulateRoster({opponent,seed:7}),simulateRoster({opponent,seed:7}))});
test('roster batch accounts for every game',()=>{const r=runRosterBatch({opponent:'protoss',games:30,seed:2});assert.equal(r.wins.A+r.wins.B+r.wins.draw,30)});
test('all race catalogs are connected',()=>{assert.deepEqual(Object.fromEntries(Object.entries(UNIT_CATALOG).map(([k,v])=>[k,v.length])),{zerg:12,terran:7,protoss:7});assert.deepEqual(Object.fromEntries(Object.entries(TACTICAL_CATALOG).map(([k,v])=>[k,v.length])),{zerg:11,terran:10,protoss:10});for(const factions of Object.values(FACTION_CATALOG))assert.equal(factions.length,2)});
test('player race roster override is deterministic',()=>{const o={leftRoster:ROSTERS.protoss,enemyRoster:ROSTERS.terran,seed:17};assert.deepEqual(simulateRoster(o),simulateRoster(o))});

