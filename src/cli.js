import { runBatch, simulate } from './engine.js';
const args=Object.fromEntries(process.argv.slice(2).map(s=>s.replace(/^--/,'').split('=')));
const opts={a:args.a||'marine',b:args.b||'zergling',games:Number(args.games||1000),seed:Number(args.seed||42)};
console.log(JSON.stringify({options:opts,batch:runBatch(opts),sample:simulate(opts)},null,2));

