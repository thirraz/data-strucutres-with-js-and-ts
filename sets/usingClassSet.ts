import { SSet } from "./classSet";

/* const set = new SSet();

set.add(1);
console.log(set.values());
console.log(set.has(1));
console.log(set.size());
set.add(2);
console.log(set.values());
console.log(set.has(2));
console.log(set.size());
set.delete(1);
console.log(set.values());
set.delete(2);
console.log(set.values()); */

console.log("UNION Operation");
console.log();
const setA = new SSet();
setA.add(1);
setA.add(2);
setA.add(3);

const setB = new SSet();
setA.add(3);
setB.add(4);
setB.add(5);
setB.add(6);

const unionAB = setA.union(setB);
console.log(unionAB.values());

console.log();
console.log();

console.log("INTERSECTION Operation");
console.log();

const setC = new SSet();
setC.add(1);
setC.add(2);
setC.add(3);

const setD = new SSet();
setD.add(2);
setD.add(3);
setD.add(4);

const intersectionCD = setC.intersection(setD);
console.log(intersectionCD.values());

console.log();
console.log();

console.log("DIFFERENCE Operation");
console.log();

const setE = new SSet();
setE.add(1);
setE.add(2);
setE.add(3);

const setF = new SSet();
setF.add(2);
setF.add(3);
setF.add(4);

const differenceEF = setE.difference(setF);
const differenceFE = setF.difference(setE);
console.log(differenceEF.values());
console.log(differenceFE.values());

console.log();
console.log();

console.log("SUBSET Verification");
const setG = new SSet();
setG.add(1);
setG.add(2);

const setH = new SSet();
setH.add(1);
setH.add(2);
setH.add(3);

const setI = new SSet();
setI.add(2);
setI.add(3);
setI.add(4);

console.log(setG.isSubsetOf(setH));
console.log(setA.isSubsetOf(setI));
