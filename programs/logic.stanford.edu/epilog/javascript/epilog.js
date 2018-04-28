//------------------------------------------------------------------------------

function makeuniversal (variable,scope)

function newadjoin (x,s)
 {if (!findq(x,s)) {return s.concat(seq(x))};

function freevarsexp (x,al,vs)
  if (q===true || q===false) {return false};
  if (symbolp(p)) {if (symbolp(q)) {return p===q} else {return false}};

function pseudogroundp (exp,al)
     {var dum = al[exp];

function cons (x,l)

function car (l)

function amongp (x,y)
 {if (symbolp(y)) {return x==y};
  for (var i=0; i<y.length; i++) {if (amongp(x,y[i])) {return true}}
  return false}
// unifier
// plug
// standardize
//------------------------------------------------------------------------------

 {if (varp(y))
     {if (x===y) {return true};
      if (dum!==false) {return occurs(x,cdr(dum),al)};
      return false};
  if (symbolp(y)) {return false};
  for (var i=0; i<y.length; i++)
  return false}
  return false}

//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// vnifier
 {unifications++;
  return maatchify(x,al,y,bl,ol)}
  if (vnify(x,al,y,bl,ol)) {return true};
 {if (varp(y))
     {if (x===y && al===bl) {return true};
      return false};
  if (symbolp(y)) {return false};
  for (var i=0; i<y.length; i++)
  return false}
 {for (var i=0; i<data.length; i++) {insertfact(data[i],theory)};
  return theory}

function definemorerules (theory,data)
 {for (var i=0; i<data.length; i++) {insertrule(data[i],theory)};
  return theory}

function emptytheory (theory)
       if (equalp(datum,p)) {uninsert(datum,theory); return datum}};
       if (equalp(datum,p)) {uninsertfact(datum,theory); return datum}};
       if (equalp(datum,p)) {uninsertrule(datum,theory); return datum}};

function insertrule (p,theory)

function uninsert (p,theory)

function uninsertfact (p,theory)

function uninsertrule (p,theory)

//------------------------------------------------------------------------------

function viewindexps (p,theory)

//------------------------------------------------------------------------------
       dum = dataindexps(dum,al,facts);

     {var dum = al[p];
      return facts};
  var best = indexees(p[0],facts);

function ruleindexps (p,theory)
  return indexees(p[0],theory)}
  if (!isNaN(Number(x))) {return theory};
  var data = theory[x];


//------------------------------------------------------------------------------

function viewp (r,rules)
 {if (ruleindexing) {return (indexees(r,rules).length!==0)};
  for (var i=0; i<rules.length; i++)
      {if (operator(rules[i])===r) {return true}};
  return false}

function getbases (data)
 {var tables = seq();
  for (var i=0; i<data.length; i++)
      {tables = adjoin(operator(data[i]),tables)};
  return tables}

function getviews (data)
 {var tables = seq();
  for (var i=0; i<data.length; i++)
      {tables = adjoin(operator(data[i]),tables)};
  return tables}

function makepattern (relation,arity)
 {var pattern = seq(relation);
  for (var j=1; j<=arity; j++)
      {pattern[j] = 'X' + j};
  return pattern}

function getfactarity (relation,facts)

function getrulearity (relation,rules)
       if (symbolp(rules[i])) {continue};
       if (rules[i][0]===relation) {return rules[i].length-1};
       if (rules[i][0]==='rule' && !symbolp(rules[i][1]) && rules[i][1][0]===relation)
          {return rules[i][1].length-1}};

function sentences (relation,data)

function sentencen (m,n,relation,data)
  if (results.length>=n) {return results.slice(m,n)};
  if (results.length>=m) {return results.slice(m)};
  return seq()}

function viewfacts (relation,facts,rules)
  return sortfinds(pattern,pattern,facts,rules)}

//------------------------------------------------------------------------------

function basefindn (m,n,result,query,facts,rules)
 {var results = basefinds(result,query,facts,rules);
  if (results.length>=n) {return results.slice(m,n)};
  if (results.length>=m) {return results.slice(m)};
  return seq()}

//------------------------------------------------------------------------------

function baseone (x,p,pl,al,cont,facts,rules)
  if (symbolp(p)) {return baseoneatom(x,p,pl,al,cont,facts,rules)}
  if (pseudogroundp(p,al)) {return baseoneground(x,p,pl,al,cont,facts,rules)};

  return baseonedb(x,p,pl,al,cont,facts,rules)}
     {if (answer = baseoneexit(x,pl,al,cont,facts,rules))
         {backup(ol); return answer};
      backup(ol)};

function baseonenot (x,p,pl,al,cont,facts,rules)
     {return baseoneexit(x,pl,al,cont,facts,rules)};
  return false}
  for (var i=0; i<p.length; i++)
     {return baseoneexit(x,pl,al,cont,facts,rules)};
  return false}
 {var answer;
  if (answer = baseonebackground(x,p,pl,al,cont,facts,rules)) {return answer};
  return false}
  for (var i=0; i<data.length; i++)
       var answer = false;
              {backup(ol); return answer};
       var answer = false;

     {baseallexit(x,pl,al,cont,results,facts,rules)}}
      {baseall(x,p[i],pl,al,cont,results,facts,rules)}}
     {return baseallexit(x,pl,al,cont,results,facts,rules)};
  return false}

function basealldb (x,p,pl,al,cont,results,facts,rules)
 {baseallbackground(x,p,pl,al,cont,results,facts,rules);
  return false}
function baseallbackground (x,p,pl,al,cont,results,facts,rules)
  for (var i=0; i<data.length; i++)

//------------------------------------------------------------------------------

function testfindp (query,facts,rules)
function testfinds (x,p,facts,rules)
 {var answers = testalls(x,seq(p),seq(),facts,rules);

//------------------------------------------------------------------------------

function testone (x,p,pl,al,cont,facts,rules)
  if (symbolp(p)) {return testoneatom(x,p,pl,al,cont,facts,rules)}
  if (pseudogroundp(p,al)) {return testoneground(x,p,pl,al,cont,facts,rules)};

  return testonedb(x,p,pl,al,cont,facts,rules)}
     {if (answer = testoneexit(x,pl,al,cont,facts,rules))
         {backup(ol); return answer};
      backup(ol)};

function testonenot (x,p,pl,al,cont,facts,rules)
     {return testoneexit(x,pl,al,cont,facts,rules)};
  return false}
  for (var i=0; i<p.length; i++)
     {return testoneexit(x,pl,al,cont,facts,rules)};
  return false}
 {var answer;
  if (answer = testonebackground(x,p,pl,al,cont,facts,rules)) {return answer};
  return false}
  for (var i=0; i<data.length; i++)
       var answer = false;
              {backup(ol); return answer};
       var answer = false;

  if (p[0]==='same') {return testallsame(p,al,facts,rules)}
  if (compiledp(p[0])) {testallcompiled(p,al,facts,rules)}
  return testallrules(p,al,facts,rules)}


function testallsame (p,al,facts,rules)
  if (vnifyp(p[1],al,p[2],al,ol))
     {p = pluug(p,al,al);
      backup(ol);
      return seq(p)}
  return seq()}

  if (vnifyp(p[1],al,p[2],al,ol)) {backup(ol); return seq()};

function testallprovable (p,al,facts,rules)
  if (p!==false) {return seq(p)};
  return seq()}

  if (testfindp(p[1],facts,rules)) {return seq()};
  return seq(p)}

function testallor (p,al,facts,rules)
  for (var i=1; i<p.length; i++)
  return results}

function testallground (p,al,facts,rules)
  if (testonedb('true',p,seq(),seq(),nil,facts,rules)==='true') {return seq(p)};
  return seq()}

function testallcompiled (p,al,facts,rules)
  return subroutine.apply(null,pluug(p,al,al).slice(1))}

function testallrules (p,al,facts,rules)
  for (var i=0; i<data.length; i++)
           var ol = seq();
           if (vnifyp(p,al,data[i][1],bl,ol))
               var body = data[i].slice(2);
               var answers = testalls(head,body,bl,facts,rules);
               results = results.concat(answers);
               backup(ol)}}
       else {var ol = seq();
             if (maatchifyp(p,al,data[i],al,ol))
                {results[results.length] = data[i];
                 backup(ol)}}};
  return results}

function testalls (x,pl,al,facts,rules)
 {if (pl.length===0) {return seq(pluug(x,al,al))};
  var results = seq();
  var data = testall(pl[0],al,facts,rules);
  for (var i=0; i<data.length; i++)
       if (maatchify(pl[0],al,data[i],al,ol))
          {results = results.concat(testalls(x,tail(pl),al,facts,rules));
           backup(ol)}};
  return results}

function compiledp (rel)
 {return (typeof window['comp' + rel]==='function')}

//------------------------------------------------------------------------------
// special relations and operators
//------------------------------------------------------------------------------

var builtins = 
 ["matches","submatches","plus","minus","times","quotient",
  "symbolize","newsymbolize",
  "readstring","stringify","readstringall","stringifyall",
  "stringappend","stringmin",
  "append","listify","delistify"];

var listoperators = 
 ["maximum","minimum","range","midrange","sum","median","mean","variance","stddev"];

var aggregates = ["avgofall", "countofall", "setofall", "sumofall"];

function updateop (x) {return findq(x,["pos", "neg"])}
function builtinp (x) {return findq(x,builtins)}
function mathp (x) {return (typeof Math[x]==='function')}
function listop (x) {return findq(x,listoperators)}


function compfindn (m,n,result,query,facts,rules)
 {var results = sortfinds(result,query,facts,rules);
  if (results.length>=n) {return results.slice(m,n)};
  if (results.length>=m) {return results.slice(m)};
  return seq()}

function sortfinds (result,query,facts,rules)


function compone (x,p,pl,al,cont,facts,rules)
  if (symbolp(p)) {return componeatom(x,p,pl,al,cont,facts,rules)}
  if (builtinp(p[0])) {return componecall(x,p,pl,al,cont,facts,rules)}
  if (listop(p[0])) {return componelist(x,p,pl,al,cont,facts,rules)}

function componeatom (x,p,pl,al,cont,facts,rules)
  return componedb(x,p,pl,al,cont,facts,rules)}
     {if (answer = componeexit(x,pl,al,cont,facts,rules))
         {backup(ol); return answer};
      backup(ol)};

function componematches (x,p,pl,al,cont,facts,rules)
  if (!stringp(str)) {return false};
  var pat = pluug(p[2],al,al);
  if (!stringp(pat)) {return false};
  if (stringmatchp(str,pat)) {return componeexit(x,pl,al,cont,facts,rules)};
  return false}
function componesubmatches (x,p,pl,al,cont,facts,rules)
  str = str.substring(1,str.length-1);
  if (symbolp(str))
      var matches = str.match(re);
      if (matches!=null)
               var result = '"' + matches[i] + '"';
                   backup(ol)}}}};
function componecall (x,p,pl,al,cont,facts,rules)
  for (var i=1; i<p.length-1; i++)
      {var arg = pluug(p[i],al,al);
       if (varp(arg)) {return false} else {args[args.length] = arg}};
  var val = eval(p[0]).apply(null,args);
  if (!val) {return false};
  var ol = seq();
  var answer;
     {if (answer = componeexit(x,pl,al,cont,facts,rules))
         {backup(ol); return answer};
      backup(ol)};
  return false}

function componemath (x,p,pl,al,cont,facts,rules)
  for (var i=1; i<p.length-1; i++)
      {var arg = numberize(pluug(p[i],al,al));
       if (isNaN(arg)) {return false};
       args[args.length] = arg};
  var val = stringize(Math[p[0]].apply(null,args));
  var ol = seq();
  var answer;
     {if (answer = componeexit(x,pl,al,cont,facts,rules))
         {backup(ol); return answer};
      backup(ol)};
  return false}

function componelist (x,p,pl,al,cont,facts,rules)
  var s = numlistify(c);
  if (s===false) {return false};
  var val = stringize(eval(p[0]).call(null,s));
  var ol = seq();
  var answer;
     {if (answer = componeexit(x,pl,al,cont,facts,rules))
         {backup(ol); return answer};
      backup(ol)};
  return false}

function componemap (x,p,pl,al,cont,facts,rules)
  var val = map(p[1],pluug(p[2],al,al),facts,rules);
  if (val===false) {return false};
  var ol = seq();
     {var answer = componeexit(x,pl,al,cont,facts,rules);
      backup(ol);
      return answer};
  return false}

function componesetofall (x,p,pl,al,cont,facts,rules)
  var ol = seq();
  var answer;
  var result = listify(compfinds(p[1],p[2],facts,rules));
  if (vnifyp(p[3],al,result,al,ol))
     {if (answer = componeexit(x,pl,al,cont,facts,rules))
      backup(ol)};

function componecountofall (x,p,pl,al,cont,facts,rules)
  var answers = seq();
  compall(p[1],p[2],seq(),al,nil,answers,facts,rules);
  answers = vniquify(answers);
  var ol = seq();
  if (vnifyp(p[3],al,answers.length.toString(),al,ol))
     {var answer = componeexit(x,pl,al,cont,facts,rules);
      if (answer) {backup(ol); return answer};
      backup(ol)};

function componesumofall (x,p,pl,al,cont,facts,rules)
  var vars = freevarsexp(p[2],al,seq(p[1]));
  var answers = seq();
  compall(vars,p[2],seq(),al,nil,answers,facts,rules);
  answers = vniquify(answers);
  var result = 0;
  var ol = seq();
  for (var i=0; i<answers.length; i++) {result = result+numberize(answers[i][0])};
  if (!isNaN(result) && vnifyp(p[3],al,result.toString(),al,ol))
     {var answer = componeexit(x,pl,al,cont,facts,rules);
      if (answer) {backup(ol); return answer};
      backup(ol)};

function componeavgofall (x,p,pl,al,cont,facts,rules)
  var vars = freevarsexp(p[2],al,seq(p[1]));
  var answers = seq();
  compall(vars,p[2],seq(),al,nil,answers,facts,rules);
  answers = vniquify(answers);
  var total = 0;
  for (var i=0; i<answers.length; i++) {total = total+numberize(answers[i][0]*1)};
  var result = total / answers.length;
  var ol = seq();
  if (!isNaN(result) && vnifyp(p[3],al,result.toString(),al,ol))
     {var answer = componeexit(x,pl,al,cont,facts,rules);
      if (answer) {backup(ol); return answer};
      backup(ol)};

function componenot (x,p,pl,al,cont,facts,rules)
     {return componeexit(x,pl,al,cont,facts,rules)};
  return false}
  for (var i=1; i<p.length; i++)

function componeground (x,p,pl,al,cont,facts,rules)
     {return componeexit(x,pl,al,cont,facts,rules)};
  return false}
 {var answer;
  if (answer = componebackground(x,p,pl,al,cont,facts,rules)) {return answer};
  return false}
  for (var i=0; i<data.length; i++)
       var answer;
              {backup(ol); return answer};
       var answer;
  if (listop(p[0])) {return compalllist(x,p,pl,al,cont,results,facts,rules)}

  if (!stringp(str)) {return false};
  var pat = pluug(p[2],al,al);
  if (!stringp(pat)) {return false};
  if (stringmatchp(str,pat)) {return compallexit(x,pl,al,cont,results,facts,rules)};
  return false}
  str = str.substring(1,str.length-1);
  if (symbolp(str))
      var matches = str.match(re);
      if (matches!=null)
  for (var i=1; i<p.length-1; i++)
      {var arg = pluug(p[i],al,al);
       if (varp(arg)) {return false} else {args[args.length] = arg}};
  var val = eval(p[0]).apply(null,args);
  if (!val) {return false};
  var ol = seq();
     {compallexit(x,pl,al,cont,results,facts,rules); backup(ol)};
  return false}

function compallmath (x,p,pl,al,cont,results,facts,rules)
  for (var i=1; i<p.length-1; i++)
      {var arg = numberize(pluug(p[i],al,al));
       if (isNaN(arg)) {return false};
       args[args.length] = arg};
  var val = stringize(Math[p[0]].apply(null,args));
  var ol = seq();
     {compallexit(x,pl,al,cont,results,facts,rules); backup(ol)};
  return false}

function compalllist (x,p,pl,al,cont,results,facts,rules)
  var s = numlistify(c);
  if (s===false) {return false};
  var val = stringize(eval(p[0]).call(null,s));
  var ol = seq();
     {compallexit(x,pl,al,cont,results,facts,rules); backup(ol)};
  return false}

function compallmap (x,p,pl,al,cont,results,facts,rules)
  var val = map(p[1],pluug(p[2],al,al),facts,rules);
  if (val===false) {return false};
  var ol = seq();
     {compallexit(x,pl,al,cont,results,facts,rules); backup(ol)};
  return false}

function compallsetofall (x,p,pl,al,cont,results,facts,rules)
  var ol = seq();
  var answers = seq();
  compall(p[1],p[2],seq(),al,nil,answers,facts,rules);
  answers = vniquify(answers);
  var result = listify(answers);
  if (vnifyp(p[3],al,result,al,ol))
     {compallexit(x,pl,al,cont,results,facts,rules);
      backup(ol);
      return false};

function compallcountofall (x,p,pl,al,cont,results,facts,rules)
  var ol = seq();
  var answers = seq();
  compall(p[1],p[2],seq(),al,nil,answers,facts,rules);
  answers = vniquify(answers);
  if (vnifyp(p[3],al,answers.length.toString(),al,ol))
     {compallexit(x,pl,al,cont,results,facts,rules);
      backup(ol);
      return false};

function compallsumofall (x,p,pl,al,cont,results,facts,rules)
 {p = pluug(p,al,al);
  var vars = freevarsexp(p[2],al,seq(p[1]));
  var answers = seq();
  compall(vars,p[2],seq(),al,nil,answers,facts,rules);
  answers = vniquify(answers);
  var result = 0;
  var ol = seq();
  for (var i=0; i<answers.length; i++) {result = result+numberize(answers[i][0])};
  if (!isNaN(result) && vnifyp(p[3],al,result.toString(),al,ol))
     {compallexit(x,pl,al,cont,results,facts,rules);
      backup(ol);
      return false};
  return false}

function compallavgofall (x,p,pl,al,cont,results,facts,rules)
  var vars = freevarsexp(p[2],al,seq(p[1]));
  var answers = seq();
  compall(vars,p[2],seq(),al,nil,answers,facts,rules);
  answers = vniquify(answers);
  var total = 0;
  for (var i=0; i<answers.length; i++) {total = total+numberize(answers[i][0])};
  var result = total / answers.length;
  var ol = seq();
  if (!isNaN(result) && vnifyp(p[3],al,result.toString(),al,ol))
     {compallexit(x,pl,al,cont,results,facts,rules);
      backup(ol);
      return false};

function compallnot (x,p,pl,al,cont,results,facts,rules)
     {compallexit(x,pl,al,cont,results,facts,rules)}}
      {compall(x,p[i],pl,al,cont,results,facts,rules)}}

function compallground (x,p,pl,al,cont,results,facts,rules)
     {return compallexit(x,pl,al,cont,results,facts,rules)};
  return false}

function compalldb (x,p,pl,al,cont,results,facts,rules)
 {compallbackground(x,p,pl,al,cont,results,facts,rules);
  return false}
function compallbackground (x,p,pl,al,cont,results,facts,rules)
  for (var i=0; i<data.length; i++)
function plus ()
 {var result = 0;
      {var arg = numberize(arguments[i]);
       if (isNaN(arg)) {return false};
       result = result + arg};
  return stringize(result)}

function minus ()
 {if (arguments.length===0) {return 0};
  var result = numberize(arguments[0]);
      {var arg = numberize(arguments[i]);
       if (isNaN(arg)) {return false};
       result = result - arg};
  return stringize(result)}

function times ()
 {var result = 1;
      {var arg = numberize(arguments[i]);
       if (isNaN(arg)) {return false};
       result = result * arg};
  return stringize(result)}

function quotient ()
 {var result = numberize(arguments[0]);
      {var arg = numberize(arguments[i]);
       if (isNaN(arg)) {return false};
       result = result / arg};
  return stringize(result)}

//------------------------------------------------------------------------------
function maximum (s)
 {return Math.max.apply(null,s)}

function minimum (s)
 {return Math.min.apply(null,s)}

function range (s)
 {return maximum(s)-minimum(s)}

function midrange (s)
 {return range(s)/2}

function sum (s) 
 {var num = 0;
  for (var i=0; i<s.length; i++) {num += s[i]};
  return num}

function median (s)
 {s.sort(function(a, b) {return a - b});
  var mid = s.length/2;
  return mid%1 ? s[mid-0.5] : (s[mid-1] + s[mid])/2}

function mean (s)
 {return sum(s)/s.length}

function variance (s)
 {var avg = mean(s);
  return mean(s.map(function(num) {return Math.pow(num-avg,2)}))}

function stddev (s)
 {return Math.sqrt(variance(s))}

//------------------------------------------------------------------------------

function numberize (s)
 {if (s==='blank') {return 0};
  if (s==='false') {return 0};
  if (s==='true') {return 1};
  if (s==='infinity') {return Infinity};
  if (s==='neginfinity') {return -Infinity};
  return parseFloat(s)}

function stringize (s)
 {if (s===Infinity) {return 'infinity'};
  if (s===-Infinity) {return 'neginfinity'};
  return s + ''}

function symbolize (s)
 {s = s.replace(/[^a-z0-9]/gi,'');
  return s.toLowerCase()}

function newsymbolize (s)
 {s = replacediacritics(s);
  s = s.replace(/ /gi,'_');
  s = s.replace(/[^a-z_0-9]/gi,'');
  return s.toLowerCase()}

function replacediacritics(s)
 {var s;
  var diacritics = [
        /[\300-\306]/g, /[\340-\346]/g,  // A, a
        /[\310-\313]/g, /[\350-\353]/g,  // E, e
        /[\314-\317]/g, /[\354-\357]/g,  // I, i
        /[\322-\330]/g, /[\362-\370]/g,  // O, o
        /[\331-\334]/g, /[\371-\374]/g,  // U, u
        /[\321]/g, /[\361]/g, // N, n
        /[\307]/g, /[\347]/g, // C, c
    ];
  var chars = ['A','a','E','e','I','i','O','o','U','u','N','n','C','c'];
  for (var i = 0; i < diacritics.length; i++)
      {s = s.replace(diacritics[i],chars[i])};
  return s}

function stringmatchp (str,pat)
 {if (!stringp(str)) {return false};
  if (!stringp(pat)) {return false};
  str = str.slice(1,-1);
  pat = new RegExp(pat.slice(1,-1),'g');
  return pat.test(str)}

 {var exp='';
 {return '"' + grind(x) + '"'}

function stringifyall (x)
 {return '"' + stringifyallexp(x) + '"'}

function stringifyallexp (x)
 {if (x===nil) {return ''};
  if (symbolp(x)) {return ''};
  if (x[0]==='cons')
     {return grind(x[1]) + '\r' + stringifyallexp(x[2])};
  return ''}

function readstring (x)
 {return read(stripquotes(x))}

function readstringall (x)
 {return listify(readdata(stripquotes(x)))}

function stripquotes (x)
 {if (x[0]==='"' && x[x.length-1]==='"') {return x.slice(1,-1)};
  return x}

function quotify (x)
 {return '"'.concat(x).concat('"')}

function stringmin (x,y)
 {if (y<x) {return y} else {return x}}

//------------------------------------------------------------------------------
 {if (x===nil) {return true};
  if (symbolp(x)) {return false};
  if (x[0]==='cons') {return listp(x[2])};
  return false}

function append (l1,l2)
  if (symbolp(l1)) {return false};
  if (l1[0]!=='cons') {return false};
  return seq('cons',l1[1],append(l1[2],l2))}

function map (f,l,facts,rules)
 {if (l===nil) {return nil};
  if (symbolp(l) || l[0]!=='cons') {return false};
  var result = compfindx('Y',seq(f,l[1],'Y'),facts,rules);
  if (result===false) {return false};
  var results = map(f,l[2],facts,rules);
  if (results===false) {return false};
  return seq('cons',result,results)}

function listify (s)
 {var exp = nil;
  for (var i=s.length-1; i>=0; i--)
      {exp = seq('cons',s[i],exp)};
  return exp}
 {var s = seq();
  while (true)
   {if (c===nil) {return s};
    if (symbolp(c)) {return false};
    if (c[0]!=='cons') {return false};
    var arg = numberize(c[1]);
    if (isNaN(arg)) {return false};
    s[s.length] = arg;
    c = c[2]};
  return false}
 {var s = seq();
  while (true)
   {if (c===nil) {return s};
    if (symbolp(c)) {return false};
    if (c[0]!=='cons') {return false};
    s[s.length] = c[1];
    c = c[2]};
  return false}

function transform (conditions,additions,deletions,facts,rules)
 {var condition = maksand(conditions);
  var adds = seq();
  var dels = seq();
  for (var i=0; i<additions.length; i++)
      {adds = adds.concat(compfinds(additions[i],condition,facts,rules))};
  for (var i=0; i<deletions.length; i++)
      {dels = dels.concat(compfinds(deletions[i],condition,facts,rules))};
  for (var i=0; i<dels.length; i++) {dropfact(dels[i],facts)};
  for (var i=0; i<adds.length; i++) {savefact(adds[i],facts)};
  return true}

//------------------------------------------------------------------------------

function compupdate (facts,rules)
 {var adds = compadditions(facts,rules);
  var dels = compdeletions(facts,rules);
  for (var i=0; i<dels.length; i++) {dropfact(dels[i],facts)};
  for (var i=0; i<adds.length; i++) {savefact(adds[i],facts)};
  return true}

function compadditions (facts,rules)
 {var adds = seq();
  var data = rules; // indexees('transition',rules);
  for (var i=0; i<data.length; i++)
      {var rule = data[i];
       if (!symbolp(rule) && rule[0]==='transition')
          {adds = adds.concat(ruleadditions(data[i][1],data[i][2],facts,rules))}};
  return adds}

function ruleadditions (condition,conclusion,facts,rules)
 {if (symbolp(conclusion)) {return compfinds(conclusion,condition,facts,rules)};
  if (conclusion[0]==='not') {return seq()};
  if (conclusion[0]==='and')
     {var adds = seq();
      for (var i=1; i<conclusion.length; i++)
          {var answers = ruleadditions(condition,conclusion[i],facts,rules);
           adds = adds.concat(answers)};
      return adds};
  return compfinds(conclusion,condition,facts,rules)}

function compdeletions (facts,rules)
 {var dels = seq();
  var data = rules; // indexees('transition',rules);
  for (var i=0; i<data.length; i++)
      {var rule = data[i];
       if (!symbolp(rule) && rule[0]==='transition')
          {dels = dels.concat(ruledeletions(data[i][1],data[i][2],facts,rules))}};
  return dels}

function ruledeletions (condition,conclusion,facts,rules)
 {if (symbolp(conclusion)) {return seq()};
  if (conclusion[0]==='not')
     {return compfinds(conclusion[1],condition,facts,rules)};
  if (conclusion[0]==='and')
     {var dels = seq();
      for (var i=1; i<conclusion.length; i++)
          {var answers = ruledeletions(condition,conclusion[i],facts,rules);
           dels = dels.concat(answers)};
      return dels};
  return seq()}

//------------------------------------------------------------------------------

function hypofindp (query,adds,dels,facts,rules)

//------------------------------------------------------------------------------

function hypoone (x,p,pl,al,cont,adds,dels,facts,rules)
  if (symbolp(p)) {return hypooneatom(x,p,pl,al,cont,adds,dels,facts,rules)}

function hypooneatom (x,p,pl,al,cont,adds,dels,facts,rules)
  return hypoonedb(x,p,pl,al,cont,adds,dels,facts,rules)}
     {if (answer = hypooneexit(x,pl,al,cont,adds,dels,facts,rules))
         {backup(ol); return answer};
      backup(ol)};

function hypoonematches (x,p,pl,al,cont,adds,dels,facts,rules)
  if (!stringp(str)) {return false};
  var pat = pluug(p[2],al,al);
  if (!stringp(pat)) {return false};
  if (stringmatchp(str,pat)) {return hypooneexit(x,pl,al,cont,adds,dels,facts,rules)};
  return false}
function hypoonesubmatches (x,p,pl,al,cont,adds,dels,facts,rules)
  str = str.substring(1,str.length-1);
  if (symbolp(str))
      var matches = str.match(re);
      if (matches!=null)
               var result = '"' + matches[i] + '"';
                   backup(ol)}}}};
function hypoonecall (x,p,pl,al,cont,adds,dels,facts,rules)
  for (var i=1; i<p.length-1; i++)
      {var arg = pluug(p[i],al,al);
       if (varp(arg)) {return false} else {args[args.length] = arg}};
  var val = eval(p[0]).apply(null,args);
  if (!val) {return false};
  var ol = seq();
  var answer;
     {if (answer = hypooneexit(x,pl,al,cont,adds,dels,facts,rules))
         {backup(ol); return answer}};
  return false}

function hypoonemath (x,p,pl,al,cont,adds,dels,facts,rules)
  for (var i=1; i<p.length-1; i++)
      {var arg = numberize(pluug(p[i],al,al));
       if (isNaN(arg)) {return false};
       args[args.length] = arg};
  var val = stringize(Math[p[0]].apply(null,args));
  var ol = seq();
  var answer;
     {if (answer = hypooneexit(x,pl,al,cont,adds,dels,facts,rules))
         {backup(ol); return answer}};
  return false}

function hypoonelist (x,p,pl,al,cont,adds,dels,facts,rules)
  var s = numlistify(c);
  if (s===false) {return false};
  var val = stringize(eval(p[0]).call(null,s));
  var ol = seq();
  var answer;
     {if (answer = hypooneexit(x,pl,al,cont,adds,dels,facts,rules))
         {backup(ol); return answer}};
  return false}

function hypoonemap (x,p,pl,al,cont,adds,dels,facts,rules)
  var val = map(p[1],pluug(p[2],al,al),facts,rules);
  if (val===false) {return false};
  var ol = seq();
     {var answer = hypooneexit(x,pl,al,cont,adds,dels,facts,rules);
      backup(ol);
      return answer};
  return false}

function hypoonesetofall (x,p,pl,al,cont,adds,dels,facts,rules)
  var result = listify(hypofinds(p[1],p[2],adds,dels,facts,rules));
  var ol = seq();
  if (vnifyp(p[3],al,result,al,ol))
     {var answer = hypooneexit(x,pl,al,cont,adds,dels,facts,rules);
      backup(ol)};

function hypoonecountofall (x,p,pl,al,cont,adds,dels,facts,rules)
  var answers = seq();
  hypoall(p[1],p[2],seq(),al,nil,answers,adds,dels,facts,rules);
  answers = vniquify(answers);
  var ol = seq();
  if (vnifyp(p[3],al,answers.length.toString(),al,ol))
     {var answer = hypooneexit(x,pl,al,cont,adds,dels,facts,rules)
      if (answer) {backup(ol); return answer};
      backup(ol)};

function hypoonesumofall (x,p,pl,al,cont,adds,dels,facts,rules)
  var vars = freevarsexp(p[2],al,seq(p[1]));
  var answers = seq();
  hypoall(vars,p[2],seq(),al,nil,answers,adds,dels,facts,rules);
  answers = vniquify(answers);
  var result = 0;
  var ol = seq();
  for (var i=0; i<answers.length; i++) {result = result+numberize(answers[i][0])};
  if (!isNaN(result) && vnifyp(p[3],al,result.toString(),al,ol))
     {var answer = hypooneexit(x,pl,al,cont,adds,dels,facts,rules);
      if (answer) {backup(ol); return answer};
      backup(ol)};

function hypooneavgofall (x,p,pl,al,cont,adds,dels,facts,rules)
  var vars = freevarsexp(p[2],al,seq(p[1]));
  var answers = seq();
  hypoall(vars,p[2],seq(),al,nil,answers,adds,dels,facts,rules);
  answers = vniquify(answers);
  var total = 0;
  var ol = seq();
  for (var i=0; i<answers.length; i++) {total = total+answers[i][0]*1};
  var result = total / answers.length;
  if (!isNaN(result) && vnifyp(p[3],al,result.toString(),al,ol))
     {var answer = hypooneexit(x,pl,al,cont,adds,dels,facts,rules);
      if (answer) {backup(ol); return answer};
      backup(ol)};

function hypoonenot (x,p,pl,al,cont,adds,dels,facts,rules)
     {return hypooneexit(x,pl,al,cont,adds,dels,facts,rules)};
  return false}
  for (var i=1; i<p.length; i++)

function hypooneground (x,p,pl,al,cont,adds,dels,facts,rules)
     {return hypooneexit(x,pl,al,cont,adds,dels,facts,rules)};
  return false}
 {var answer;
  if (answer = hypoonebackground(x,p,pl,al,cont,adds,dels,facts,rules)) {return answer};
  return false}
              {backup(ol); return answer};
  var data = envvndexps(p,al,facts);
  for (var i=0; i<data.length; i++)
       var answer = false;
              {backup(ol); return answer};
       var answer = false;

  if (!stringp(str)) {return false};
  var pat = pluug(p[2],al,al);
  if (!stringp(pat)) {return false};
  if (stringmatchp(str,pat)) {return hypoallexit(x,pl,al,cont,results,adds,dels,facts,rules)};
  return false}
  str = str.substring(1,str.length-1);
  if (symbolp(str))
      var matches = str.match(re);
      if (matches!=null)
  for (var i=1; i<p.length-1; i++)
      {var arg = pluug(p[i],al,al);
       if (varp(arg)) {return false} else {args[args.length] = arg}};
  var val = eval(p[0]).apply(null,args);
  if (!val) {return false};
  var ol = seq();
     {hypoallexit(x,pl,al,cont,results,adds,dels,facts,rules); backup(ol)};
  return false}

function hypoallmath (x,p,pl,al,cont,results,adds,dels,facts,rules)
  for (var i=1; i<p.length-1; i++)
      {var arg = numberize(pluug(p[i],al,al));
       if (isNaN(arg)) {return false};
       args[args.length] = arg};
  var val = stringize(Math[p[0]].apply(null,args));
  var ol = seq();
     {hypoallexit(x,pl,al,cont,results,adds,dels,facts,rules); backup(ol)};
  return false}

function hypoalllist (x,p,pl,al,cont,results,adds,dels,facts,rules)
  var s = numlistify(c);
  if (s===false) {return false};
  var val = stringize(eval(p[0]).call(null,s));
  var ol = seq();
     {hypoallexit(x,pl,al,cont,results,adds,dels,facts,rules); backup(ol)};
  return false}

function hypoallmap (x,p,pl,al,cont,results,adds,dels,facts,rules)
  var val = map(p[1],pluug(p[2],al,al),facts,rules);
  if (val===false) {return false};
  var ol = seq();
     {hypoallexit(x,pl,al,cont,results,adds,dels,facts,rules); backup(ol)};
  return false}

function hypoallsetofall (x,p,pl,al,cont,results,adds,dels,facts,rules)
  var answers = seq();
  hypoall(p[1],p[2],seq(),al,nil,answers,adds,dels,facts,rules);
  answers = vniquify(answers);
  var result = listify(answers);
  var ol = seq();
  if (vnifyp(p[3],al,result,al,ol))
     {hypoallexit(x,pl,al,cont,results,adds,dels,facts,rules);
      backup(ol);
      return false};

function hypoallcountofall (x,p,pl,al,cont,results,adds,dels,facts,rules)
  var answers = seq();
  hypoall(p[1],p[2],seq(),al,nil,answers,adds,dels,facts,rules);
  answers = vniquify(answers);
  var ol = seq();
  if (vnifyp(p[3],al,answers.length.toString(),al,ol))
     {hypoallexit(x,pl,al,cont,results,adds,dels,facts,rules);
      backup(ol);
      return false};

function hypoallsumofall (x,p,pl,al,cont,results,adds,dels,facts,rules)
 {p = pluug(p,al,al);
  var vars = freevarsexp(p[2],al,seq(p[1]));
  var answers = seq();
  hypoall(vars,p[2],seq(),al,nil,answers,adds,dels,facts,rules);
  answers = vniquify(answers);
  var result = 0;
  var ol = seq();
  for (var i=0; i<answers.length; i++) {result = result+numberize(answers[i][0])};
  if (!isNaN(result) && vnifyp(p[3],al,result.toString(),al,ol))
     {hypoallexit(x,pl,al,cont,results,adds,dels,facts,rules);
      backup(ol);
      return false};
  return false}

function hypoallavgofall (x,p,pl,al,cont,results,adds,dels,facts,rules)
  var vars = freevarsexp(p[2],al,seq(p[1]));
  var answers = seq();
  hypoall(vars,p[2],seq(),al,nil,answers,adds,dels,facts,rules);
  answers = vniquify(answers);
  var total = 0;
  var ol = seq();
  for (var i=0; i<answers.length; i++) {total = total+answers[i][0]*1};
  var result = total / answers.length;
  if (!isNaN(result) && vnifyp(p[3],al,result.toString(),al,ol))
     {hypoallexit(x,pl,al,cont,results,adds,dels,facts,rules);
      backup(ol);
      return false};

function hypoallnot (x,p,pl,al,cont,results,adds,dels,facts,rules)
     {hypoallexit(x,pl,al,cont,results,adds,dels,facts,rules)}}
      {hypoall(x,p[i],pl,al,cont,results,adds,dels,facts,rules)}}

function hypoallground (x,p,pl,al,cont,results,adds,dels,facts,rules)
     {return hypoallexit(x,pl,al,cont,results,adds,dels,facts,rules)};
  return false}

function hypoalldb (x,p,pl,al,cont,results,adds,dels,facts,rules)
 {hypoallbackground(x,p,pl,al,cont,results,adds,dels,facts,rules);
  return false}
function hypoallbackground (x,p,pl,al,cont,results,adds,dels,facts,rules)
  var data = envvndexps(p,al,facts);
  for (var i=0; i<data.length; i++)

//------------------------------------------------------------------------------
 {var additions = hypoadditions(adds,dels,facts,rules);
  var deletions = hypodeletions(adds,dels,facts,rules);
  for (var i=0; i<deletions.length; i++) {dropfact(deletions[i],facts)};
  for (var i=0; i<additions.length; i++) {savefact(additions[i],facts)};
  return true}

function hypoadditions (adds,dels,facts,rules)
 {var additions = seq();
  var data = rules; // indexees('transition',rules);
  for (var i=0; i<data.length; i++)
      {var rule = data[i];
       if (!symbolp(rule) && rule[0]==='transition')
          {additions = additions.concat(hyporuleadditions(data[i][1],data[i][2],adds,dels,facts,rules))}};
  return additions}

function hyporuleadditions (condition,conclusion,adds,dels,facts,rules)
 {if (symbolp(conclusion))
     {return hypofinds(conclusion,condition,adds,dels,facts,rules)};
  if (conclusion[0]==='not') {return seq()};
  if (conclusion[0]==='and')
     {var additions = seq();
      for (var i=1; i<conclusion.length; i++)
          {var answers = 
               hyporuleadditions(condition,conclusion[i],adds,dels,facts,rules);
           additions = additions.concat(answers)};
      return additions};
  return hypofinds(conclusion,condition,adds,dels,facts,rules)}

function hypodeletions (adds,dels,facts,rules)
 {var deletions = seq();
  var data = rules; // indexees('transition',rules);
  for (var i=0; i<data.length; i++)
      {var rule = data[i];
       if (!symbolp(rule) && rule[0]==='transition')
          {deletions = deletions.concat(hyporuledeletions(data[i][1],data[i][2],adds,dels,facts,rules))}};
  return deletions}

function hyporuledeletions (condition,conclusion,adds,dels,facts,rules)
 {if (symbolp(conclusion)) {return seq()};
  if (conclusion[0]==='not')
     {return hypofinds(conclusion[1],condition,adds,dels,facts,rules)};
  if (conclusion[0]==='and')
     {var deletions = seq();
      for (var i=1; i<conclusion.length; i++)
          {var answers = 
               hyporuledeletions(condition,conclusion[i],adds,dels,facts,rules);
           deletions = deletions.concat(answers)};
      return deletions};
  return seq()}

//------------------------------------------------------------------------------

  var dum = compfindx(result,query,facts,rules);
  for (var i=0; i<temprules.length; i++) {uninsertrule(temprules[i],rules)};
  return dum}
  var answers = sortfinds(result,query,facts,rules);
  return answers}

//------------------------------------------------------------------------------
  return traceone(result,xl,query,seq(),xl,nil,facts,rules)}
  var answers = seq();

//------------------------------------------------------------------------------
  if (symbolp(p)) {return traceoneatom(x,xl,p,pl,al,cont,facts,rules)}

function traceoneatom (x,xl,p,pl,al,cont,facts,rules)
     {tracecall(p,al,xl,cont);
      traceexit(p,xl,xl,cont);
      return traceonegoals(x,xl,p,pl,al,cont,facts,rules)};
     {tracecall(p,al,xl,cont);
      tracefail(p,al,xl,cont);
      return false};
  return traceonedb(x,xl,p,pl,al,cont,facts,rules)}
  var ol = seq();
     {answer = traceoneexit(x,xl,pluug(p,al,xl),pl,al,cont,facts,rules);
      backup(ol);
      if (answer) {return answer}};
  tracefail(p,al,xl,cont);
  var ol = seq();
     {backup(ol); tracefail(p,al,xl,cont); return false};
  traceexit(p,xl,xl,cont);

function traceonematches (x,xl,p,pl,al,cont,facts,rules)
  var str = pluug(p[1],al,al);
  if (!stringp(str)) {return false};
  var pat = pluug(p[2],al,al);
  if (!stringp(pat)) {return false};
  if (stringmatchp(str,pat)) {return traceoneexit(x,xl,p,pl,al,cont,facts,rules)};
  tracefail(p,al,xl,cont);
  return false}

function traceonesubmatches (x,xl,p,pl,al,cont,facts,rules)
  var str = pluug(p[1],al,al);
  str = str.substring(1,str.length-1);
  if (symbolp(str))
      var matches = str.match(re);
      if (matches!=null)
               var result = '"' + matches[i] + '"';
                   backup(ol)}}}};
  tracefail(p,al,xl,cont);
  var args = seq();
  for (var i=1; i<p.length-1; i++)
      {var arg = pluug(p[i],al,al);
       if (varp(arg)) {return false} else {args[args.length] = arg}};
  var val = eval(p[0]).apply(null,args);
  if (!val) {return false};
  var ol = seq();
  var answer;
     {if (answer = traceoneexit(x,xl,p,pl,al,cont,facts,rules))
         {backup(ol); return answer};
      backup(ol)};
  tracefail(p,al,xl,cont);

function traceonemath (x,xl,p,pl,al,cont,facts,rules)
  var args = seq();
  for (var i=1; i<p.length-1; i++)
      {var arg = numberize(pluug(p[i],al,al));
       if (isNaN(arg)) {return false};
       args[args.length] = arg};
  var val = stringize(Math[p[0]].apply(null,args));
  var ol = seq();
  var answer;
     {if (answer = traceoneexit(x,xl,p,pl,al,cont,facts,rules))
         {backup(ol); return answer};
      backup(ol)};
  tracefail(p,al,xl,cont);

function traceonelist (x,xl,p,pl,al,cont,facts,rules)
  var c = pluug(p[1],al,al);
  var s = numlistify(c);
  if (s===false) {return false};
  var val = stringize(eval(p[0]).call(null,s));
  var ol = seq();
  var answer;
     {if (answer = traceoneexit(x,xl,p,pl,al,cont,facts,rules))
         {backup(ol); return answer};
      backup(ol)};
  tracefail(p,al,xl,cont);

function traceonemap (x,xl,p,pl,al,cont,facts,rules)
  var val = map(p[1],pluug(p[2],al,al),facts,rules);
  if (val===false) {return false};
  var ol = seq();
     {var answer = traceoneexit(x,xl,p,pl,al,cont,facts,rules);
      backup(ol);
      return answer};
  return false}

function traceonesetofall (x,xl,p,pl,al,cont,facts,rules)
  p = pluug(p,al,al);
  var ol = seq();
  var answer;
  var result = listify(tracefinds(p[1],p[2],facts,rules));
  if (vnifyp(p[3],al,result,al,ol))
     {if (answer = traceoneexit(x,xl,p,pl,al,cont,facts,rules))
      backup(ol)};

function traceonecountofall (x,xl,p,pl,al,cont,facts,rules)
  p = pluug(p,al,al);
  var answers = seq();
  traceall(p[1],al,p[2],seq(),al,nil,answers,facts,rules);
  answers = vniquify(answers);
  var ol = seq();
  if (vnifyp(p[3],al,answers.length.toString(),al,ol))
     {var answer = traceoneexit(x,xl,p,pl,al,cont,facts,rules);
      if (answer) {backup(ol); return answer};
      backup(ol)};

function traceonesumofall (x,xl,p,pl,al,cont,facts,rules)
  p = pluug(p,al,al);
  var vars = freevarsexp(p[2],al,seq(p[1]));
  var answers = seq();
  traceall(vars,al,p[2],seq(),al,nil,answers,facts,rules);
  answers = vniquify(answers);
  var result = 0;
  var ol = seq();
  for (var i=0; i<answers.length; i++) {result = result+numberize(answers[i][0])};
  if (!isNaN(result) && vnifyp(p[3],al,result.toString(),al,ol))
     {var answer = traceoneexit(x,xl,p,pl,al,cont,facts,rules);
      if (answer) {backup(ol); return answer};
      backup(ol)};

function traceoneavgofall (x,xl,p,pl,al,cont,facts,rules)
  p = pluug(p,al,al);
  var vars = freevarsexp(p[2],al,seq(p[1]));
  var answers = seq();
  traceall(vars,al,p[2],seq(),al,nil,answers,facts,rules);
  answers = vniquify(answers);
  var total = 0;
  for (var i=0; i<answers.length; i++) {total = total+numberize(answers[i][0]*1)};
  var result = total / answers.length;
  var ol = seq();
  if (!isNaN(result) && vnifyp(p[3],al,result.toString(),al,ol))
     {var answer = traceoneexit(x,xl,p,pl,al,cont,facts,rules);
      if (answer) {backup(ol); return answer};
      backup(ol)};

function traceonenot (x,xl,p,pl,al,cont,facts,rules)
  if (traceone(x,xl,p[1],seq(),al,nil,facts,rules)==false)
     {return traceoneexit(x,xl,pluug(p,al,xl),pl,al,cont,facts,rules)};
  tracefail(p,al,xl,cont);
  return traceonegoals(x,xl,p,concatenate(tail(p),pl),al,cont,facts,rules)}
  var answer;
  for (var i=1; i<p.length; i++)
  return false}

function traceoneground (x,xl,p,pl,al,cont,facts,rules)
     {return traceonegoals(x,xl,p,pl,al,cont,facts,rules)};
  return false}

function traceonedb (x,xl,p,pl,al,cont,facts,rules)
 {tracecall(p,al,xl,cont);
  var answer;
  if (answer = traceonebackground(x,xl,p,pl,al,cont,facts,rules)) {return answer};
  tracefail(p,al,xl,cont);
  for (var i=0; i<data.length; i++)
       var answer;
              {backup(ol); return answer};
           traceredo(pluug(p,al,xl),al,xl,cont)}};
       var answer;
  return traceonegoals(x,xl,p,pl,al,cont,facts,rules)}

function traceall (x,xl,p,pl,al,cont,results,facts,rules)
  //if (pseudogroundp(p,al)) {return traceallground(x,xl,p,pl,al,cont,results,facts,rules)}
  return false}

function traceallatom (x,xl,p,pl,al,cont,results,facts,rules)
     {tracecall(p,al,xl,cont);
      traceexit(p,xl,xl,cont);
      traceallgoals(x,xl,p,pl,al,cont,results,facts,rules)};
     {tracecall(p,al,xl,cont);
      tracefail(p,al,xl,cont);
      return false};
  tracealldb(x,xl,p,pl,al,cont,results,facts,rules);
  return false}
  var ol = seq();
  tracefail(p,al,xl,cont);
  return false}
  var ol = seq();
     {backup(ol); tracefail(p,al,xl,cont); return false};
  return traceallgoals(x,xl,p,pl,al,cont,results,facts,rules)}

function traceallmatches (x,xl,p,pl,al,cont,results,facts,rules)
  var str = pluug(p[1],al,al);
  if (!stringp(str)) {return false};
  var pat = pluug(p[2],al,al);
  if (!stringp(pat)) {return false};
  if (stringmatchp(str,pat)) {return traceallexit(x,xl,p,pl,al,cont,results,facts,rules)};
  tracefail(p,al,xl,cont);
  return false}

function traceallsubmatches (x,xl,p,pl,al,cont,results,facts,rules)
  var str = pluug(p[1],al,al)
  str = str.substring(1,str.length-1);
  if (symbolp(str))
      var matches = str.match(re);
      if (matches!=null)
  return false}
  var args = seq();
  for (var i=1; i<p.length-1; i++)
      {var arg = pluug(p[i],al,al);
       if (varp(arg)) {return false} else {args[args.length] = arg}};
  var val = eval(p[0]).apply(null,args);
  if (!val) {return false};
  var ol = seq();
     {traceallexit(x,xl,p,pl,al,cont,results,facts,rules); backup(ol); return false};
  tracefail(p,al,xl,cont);
  return false}

function traceallmath (x,xl,p,pl,al,cont,results,facts,rules)
  var args = seq();
  for (var i=1; i<p.length-1; i++)
      {var arg = numberize(pluug(p[i],al,al));
       if (isNaN(arg)) {return false};
       args[args.length] = arg};
  var val = stringize(Math[p[0]].apply(null,args));
  var ol = seq();
     {traceallexit(x,xl,p,pl,al,cont,results,facts,rules); backup(ol); return false};
  tracefail(p,al,xl,cont);
  return false}

function tracealllist (x,xl,p,pl,al,cont,results,facts,rules)
  var c = pluug(p[1],al,al);
  var s = numlistify(c);
  if (s===false) {return false};
  var val = stringize(eval(p[0]).call(null,s));
  var ol = seq();
     {traceallexit(x,xl,p,pl,al,cont,results,facts,rules); backup(ol); return false};
  tracefail(p,al,xl,cont);
  return false}

function traceallmap (x,xl,p,pl,al,cont,results,facts,rules)
  var val = map(p[1],pluug(p[2],al,al),facts,rules);
  if (val===false) {return false};
  var ol = seq();
     {traceallexit(x,xl,p,pl,al,cont,results,facts,rules); backup(ol)};
  return false}

function traceallsetofall (x,xl,p,pl,al,cont,results,facts,rules)
  p = pluug(p,al,al);
  var ol = seq();
  var answers = seq();
  traceall(p[1],al,p[2],seq(),al,nil,answers,facts,rules);
  answers = vniquify(answers);
  var result = listify(answers);
  if (vnifyp(p[3],al,result,al,ol))
     {traceallexit(x,xl,p,pl,al,cont,results,facts,rules);
      backup(ol);
      return false};

function traceallcountofall (x,xl,p,pl,al,cont,results,facts,rules)
  p = pluug(p,al,al);
  var ol = seq();
  var answers = seq();
  traceall(p[1],al,p[2],seq(),al,nil,answers,facts,rules);
  answers = vniquify(answers);
  if (vnifyp(p[3],al,answers.length.toString(),al,ol))
     {traceallexit(x,xl,p,pl,al,cont,results,facts,rules);
      backup(ol);
      return false};

function traceallsumofall (x,xl,p,pl,al,cont,results,facts,rules)
 {tracecall(p,al,xl,cont);
  p = pluug(p,al,al);
  var vars = freevarsexp(p[2],al,seq(p[1]));
  var answers = seq();
  traceall(vars,al,p[2],seq(),al,nil,answers,facts,rules);
  answers = vniquify(answers);
  var result = 0;
  var ol = seq();
  for (var i=0; i<answers.length; i++) {result = result+numberize(answers[i][0])};
  if (!isNaN(result) && vnifyp(p[3],al,result.toString(),al,ol))
     {traceallexit(x,xl,p,pl,al,cont,results,facts,rules);
      backup(ol);
      return false};
  return false}

function traceallavgofall (x,xl,p,pl,al,cont,results,facts,rules)
  p = pluug(p,al,al);
  var vars = freevarsexp(p[2],al,seq(p[1]));
  var answers = seq();
  traceall(vars,al,p[2],seq(),al,nil,answers,facts,rules);
  answers = vniquify(answers);
  var total = 0;
  for (var i=0; i<answers.length; i++) {total = total+numberize(answers[i][0])};
  var result = total / answers.length;
  var ol = seq();
  if (!isNaN(result) && vnifyp(p[3],al,result.toString(),al,ol))
     {traceallexit(x,xl,p,pl,al,cont,results,facts,rules);
      backup(ol);
      return false};

function traceallnot (x,xl,p,pl,al,cont,results,facts,rules)
  if (traceone(x,xl,p[1],seq(),al,nil,facts,rules)==false)
     {traceallexit(x,xl,pluug(p,al,xl),pl,al,cont,results,facts,rules)};
  return false}
  traceallgoals(x,xl,p,concatenate(tail(p),pl),al,cont,results,facts,rules);
  return false}
  for (var i=1; i<p.length; i++)
      {traceall(x,xl,p[i],pl,al,cont,results,facts,rules)};
  return false}

function traceallground (x,xl,p,pl,al,cont,results,facts,rules)
     {return traceallgoals(x,xl,p,pl,al,cont,results,facts,rules)};
  return false}

function tracealldb (x,xl,p,pl,al,cont,results,facts,rules)
 {tracecall(p,al,xl,cont);
  traceallbackground(x,xl,p,pl,al,cont,results,facts,rules);
  tracefail(p,al,xl,cont);
function traceallbackground (x,xl,p,pl,al,cont,results,facts,rules)
  for (var i=0; i<data.length; i++)
           traceredo(pluug(p,al,xl),al,xl,cont)}};
  return false}

function traceallrs (x,xl,p,pl,al,cont,results,facts,rules)
               backup(ol)}}
             traceredo(p,al,xl,cont)}}}

function traceallgoals (x,xl,p,pl,al,cont,results,facts,rules)
  if (nullp(cont)) {results.push(pluug(x,al,xl)); return true};
  traceallexit(x,xl,car(cont)[0],car(cont)[1],car(cont)[2],car(cont)[3],results,facts,rules);
  traceredo(car(cont)[0],car(cont)[2],xl,car(cont)[3])}

function traceallexit (x,xl,p,pl,al,cont,results,facts,rules)
  return traceallgoals(x,xl,p,pl,al,cont,results,facts,rules)}
function tracecall (p,al,xl,cont)
 {console.log(grindspaces(len(cont)) + 'Call: ' + grind(pluug(p,al,xl)))}

function traceexit (p,al,xl,cont)
 {console.log(grindspaces(len(cont)) + 'Exit: ' + grind(pluug(p,al,xl)))}

function traceredo (p,al,xl,cont)
 {console.log(grindspaces(len(cont)) + 'Redo: ' + grind(p))}

function tracefail (p,al,xl,cont)
 {console.log(grindspaces(len(cont)) + 'Fail: ' + grind(pluug(p,al,xl)))}

function grindspaces (n)
 {if (n===0) {return ''};
  return grindspaces(n-1) + '| '}

//------------------------------------------------------------------------------

function viewfindp (query,facts,rules)
function viewfinds (x,p,facts,rules)
 {var answers = viewalls(x,seq(p),seq(),facts,rules);

//------------------------------------------------------------------------------

function viewall (p,al,facts,rules)
  if (p[0]==='same') {return viewallsame(p,al,facts,rules)}
  if (listop(p[0])) {return viewalllist(p,al,facts,rules)}
  return viewallrules(p,al,facts,rules)}


function viewallsame (p,al,facts,rules)
  if (vnifyp(p[1],al,p[2],al,ol))
     {p = pluug(p,al,al);
      backup(ol);
      return seq(p)}
  return seq()}

  if (vnifyp(p[1],al,p[2],al,ol)) {backup(ol); return seq()};

function viewallmatches (p,al,facts,rules)
  if (!stringp(str)) {return false};
  var pat = pluug(p[2],al,al);
  if (!stringp(pat)) {return false};
  if (stringmatchp(str,pat)) {return seq(seq('matches',str,pat))};
  return seq()}
  str = str.substring(1,str.length-1);
  results = seq();
  if (symbolp(str))
      var matches = str.match(re);
      if (matches!=null)

function viewallcall (p,al,facts,rules)
  for (var i=1; i<p.length-1; i++)
      {var arg = pluug(p[i],al,al);
       if (varp(arg)) {return false} else {args[args.length] = arg}};
  var val = eval(p[0]).apply(null,args);
  if (!val) {return false};
  var ol = seq();
     {p = pluug(p,al,al);
      backup(ol);
      return seq(p)}
  return seq()}

function viewallmath (p,al,facts,rules)
  for (var i=1; i<p.length-1; i++)
      {var arg = numberize(pluug(p[i],al,al));
       if (isNaN(arg)) {return false};
       args[args.length] = arg};
  var val = stringize(Math[p[0]].apply(null,args));
  var ol = seq();
     {p = pluug(p,al,al);
      backup(ol);
      return seq(p)}
  return seq()}

function viewalllist (p,al,facts,rules)
  var s = numlistify(c);
  if (s===false) {return false};
  var val = stringize(eval(p[0]).call(null,s));
  var ol = seq();
     {p = pluug(p,al,al);
      backup(ol);
      return seq(p)}
  return seq()}

function viewallmap (p,al,facts,rules)
  var val = map(p[1],pluug(p[2],al,al),facts,rules);
  if (val===false) {return false};
  var ol = seq();
  if (vnifyp(p[3],al,val,al,ol))
     {p = pluug(p,al,al);
      backup(ol);
      return seq(p)}
  return seq()}

function viewallsetofall (p,al,facts,rules)
  var answers = viewfinds(p[1],p[2],facts,rules);
  var result = listify(answers);
  var ol = seq();
  if (vnifyp(p[3],al,result,al,ol))
     {p = pluug(p,al,al); backup(ol); return seq(p)};

function viewallcountofall (p,al,facts,rules)
  var answers = viewfinds(p[1],p[2],facts,rules);
  var ol = seq();
  if (vnifyp(p[3],al,answers.length.toString(),al,ol))
     {p = pluug(p,al,al); backup(ol); return seq(p)};

function viewallprovable (p,al,facts,rules)
  if (p!==false) {return seq(p)};
  return seq()}

  if (compfindp(p[1],facts,rules)) {return seq()};
  return seq(p)}

function viewallor (p,al,facts,rules)
  for (var i=1; i<p.length; i++)
  return results}

function viewallground (p,al,facts,rules)
  if (componedb('true',p,seq(),seq(),nil,facts,rules)==='true') {return seq(p)};
  return seq()}

function viewallrules (p,al,facts,rules)
  for (var i=0; i<data.length; i++)
           var ol = seq();
           if (vnifyp(p,al,data[i][1],bl,ol))
               var body = data[i].slice(2);
               var answers = viewalls(head,body,bl,facts,rules);
               results = results.concat(answers);
               backup(ol)}}
       else {var ol = seq();
             if (maatchifyp(p,al,data[i],al,ol))
                {results[results.length] = data[i];
                 backup(ol)}}};
  return results}

function viewalls (x,pl,al,facts,rules)
 {if (pl.length===0) {return seq(pluug(x,al,al))};
  var results = seq();
  var data = viewall(pl[0],al,facts,rules);
  for (var i=0; i<data.length; i++)
       if (maatchify(pl[0],al,data[i],al,ol))
          {results = results.concat(viewalls(x,tail(pl),al,facts,rules));
           backup(ol)}};
  return results}

//------------------------------------------------------------------------------
// baseresidue
//   assumes query is ground
//   does not do negation as failure on prims (correctly)
//   does not do consistency check (correctly) - assumes constraints folded in
//------------------------------------------------------------------------------
  if (answer) {return maksand(answer[0])};
  return false}

function baseresidues (query,prims,facts,rules)
  for (var i=0; i<answers.length; i++) {answers[i] = maksand(answers[i][0])};
  return uniquify(answers)}

//------------------------------------------------------------------------------
  if (symbolp(p)) {return baseresoneatom(p,pl,al,cont,prims,pos,neg,facts,rules)}
     {return baseresoneprimitive(p,pl,al,cont,prims,pos,neg,facts,rules)};
  if (answer = baseresonebackground(p,pl,al,cont,prims,pos,neg,facts,rules))
     {return answer};
     {return baseresoneprimitive(p,pl,al,cont,prims,pos,neg,facts,rules)};
  if (answer = baseresonebackground(p,pl,al,cont,prims,pos,neg,facts,rules))
     {return answer};
  var answer = false;
         {backup(ol); return answer};
      backup(ol)}
  return false}
  baseresall(p[1],seq(),al,nil,answers,prims,seq(),seq(),facts,rules);
  answers = flipsafely(answers);
  for (var i=0; i<answers.length; i++)
      {if (compatiblep(answers[i][0],answers[i][1],pos,neg))
          {var newpos = pos.concat(answers[i][0]);
           var newneg = neg.concat(answers[i][1]);
           var answer = false;
           if (answer = baseresoneexit(pl,al,cont,prims,newpos,newneg,facts,rules))
              {return answer}}};
  return false}

function baseresoneand (p,pl,al,cont,prims,pos,neg,facts,rules)
  return baseresoneexit(pl,al,cont,prims,pos,neg,facts,rules)}
  for (var i=0; i<p.length; i++)
      {if (answer = baseresone(p[i],pl,al,cont,prims,pos,neg,facts,rules))
          {return answer}};
  return false}
  if (groundp(p) & !find(p,neg))
     {pos = newadjoin(p,pos);
      return baseresoneexit(pl,al,cont,prims,pos,neg,facts,rules)};
  return false}
  for (var i=0; i<data.length; i++)
       if (vnifyp(data[i],al,p,al,ol))
              {backup(ol); return answer};
  return false}
       var answer = false;
                  {backup(ol); return answer};
                    {backup(ol); return answer};
  return false}

//------------------------------------------------------------------------------
     {return baseresallprimitive(p,pl,al,cont,results,prims,pos,neg,facts,rules)};
  baseresallbackground(p,pl,al,cont,results,prims,pos,neg,facts,rules);
  baseresallbackground(p,pl,al,cont,results,prims,pos,neg,facts,rules);
      backup(ol)}}
  baseresall(p[1],seq(),al,nil,answers,prims,seq(),seq(),facts,rules);
  answers = flipsafely(answers);
  for (var i=0; i<answers.length; i++)
      {if (compatiblep(answers[i][0],answers[i][1],pos,neg))
          {newpos = pos.concat(answers[i][0]);
           newneg = neg.concat(answers[i][1]);
           baseresallexit(pl,al,cont,results,prims,newpos,newneg,facts,rules)}};
  return false}

function baseresalland (p,pl,al,cont,results,prims,pos,neg,facts,rules)
      {baseresall(p[i],pl,al,cont,results,prims,pos,neg,facts,rules)}}
  if (groundp(p) & !find(p,neg))
     {pos = newadjoin(p,pos);
      return baseresallexit(pl,al,cont,results,prims,pos,neg,facts,rules)};
  return false}
  for (var i=0; i<data.length; i++)

//------------------------------------------------------------------------------

function flipsafely (answers)
 {return flip(seq(),seq(),0,answers,seq())}

function flip (pos,neg,n,inputs,outputs)
 {if (n>=inputs.length)
     {outputs[outputs.length] = seq(neg,pos);
      return outputs};
  for (var i=0; i<inputs[n][0].length; i++)
      {flip(pos.concat(seq(inputs[n][0][i])),neg,n+1,inputs,outputs)}
  for (var i=0; i<inputs[n][1].length; i++)
      {flip(pos,neg.concat(seq(inputs[n][1][i])),n+1,inputs,outputs)}
  return outputs}
 {for (var i=0; i<newpos.length; i++)
      {if (find(newpos[i],neg)) {return false}};
  for (var i=0; i<newneg.length; i++)
      {if (find(newneg[i],pos)) {return false}};
  for (var i=0; i<pos.length; i++)
      {if (find(pos[i],newneg)) {return false}};
  for (var i=0; i<neg.length; i++)
      {if (find(neg[i],newpos)) {return false}};
  return true}

//------------------------------------------------------------------------------
// compresidue
  if (answer) {return maksand(answer[0])};
  return false}

function compresidues (query,prims,facts,rules)
  for (var i=0; i<answers.length; i++) {answers[i] = maksand(answers[i][0])};
  return uniquify(answers)}

//------------------------------------------------------------------------------
  if (symbolp(p)) {return compresoneatom(p,pl,al,cont,prims,pos,neg,facts,rules)}
     {return compresoneprimitive(p,pl,al,cont,prims,pos,neg,facts,rules)};
  if (answer = compresonebackground(p,pl,al,cont,prims,pos,neg,facts,rules))
     {return answer};
     {return compresoneprimitive(p,pl,al,cont,prims,pos,neg,facts,rules)};
  if (answer = compresonebackground(p,pl,al,cont,prims,pos,neg,facts,rules))
     {return answer};
  var answer = false;
         {backup(ol); return answer};
      backup(ol)}
  return false}
  if (symbolp(str))
      if (matches!=null)
                   backup(ol)}}}};
  for (var i=1; i<p.length-1; i++)
      {var arg = pluug(p[i],al,al);
       if (varp(arg)) {return false} else {args[args.length] = arg}};
  var val = eval(p[0]).apply(null,args);
  var ol = seq();
  var answer = false;
     {if (answer = compresoneexit(pl,al,cont,prims,pos,neg,facts,rules))
         {backup(ol); return answer};
      backup(ol)};
  return false}

  for (var i=1; i<p.length-1; i++)
      {var arg = numberize(pluug(p[i],al,al));
       if (isNaN(arg)) {return false};
       args[args.length] = arg};
  var val = stringize(Math[p[0]].apply(null,args));
  var ol = seq();
  var answer = false;
     {if (answer = compresoneexit(pl,al,cont,prims,pos,neg,facts,rules))
         {backup(ol); return answer};
      backup(ol)};
  return false}

function compresonelist (p,pl,al,cont,prims,pos,neg,facts,rules)
  var s = numlistify(c);
  if (s===false) {return false};
  var val = stringize(eval(p[0]).call(null,s));
  var ol = seq();
  var answer = false;
     {if (answer = compresoneexit(pl,al,cont,prims,pos,neg,facts,rules))
         {backup(ol); return answer};
      backup(ol)};
  return false}

  var val = map(p[1],pluug(p[2],al,al),facts,rules);
  if (val===false) {return false};
  var ol = seq();
     {var answer = compresoneexit(pl,al,cont,prims,pos,neg,facts,rules);
      backup(ol);
      return answer};
  return false}

function compresonenot (p,pl,al,cont,prims,pos,neg,facts,rules)
  compresall(p[1],seq(),al,nil,answers,prims,seq(),seq(),facts,rules);
  answers = flipsafely(answers);
  for (var i=0; i<answers.length; i++)
      {if (compatiblep(answers[i][0],answers[i][1],pos,neg))
          {var newpos = pos.concat(answers[i][0]);
           var newneg = neg.concat(answers[i][1]);
           var answer = false;
           if (answer = compresoneexit(pl,al,cont,prims,newpos,newneg,facts,rules))
              {return answer}}};
  return false}

function compresoneand (p,pl,al,cont,prims,pos,neg,facts,rules)
  return compresoneexit(pl,al,cont,prims,pos,neg,facts,rules)}
  for (var i=0; i<p.length; i++)
      {if (answer = compresone(p[i],pl,al,cont,prims,pos,neg,facts,rules))
          {return answer}};
  return false}
  if (groundp(p) & !find(p,neg))
     {pos = newadjoin(p,pos);
      return compresoneexit(pl,al,cont,prims,pos,neg,facts,rules)};
  return false}
  for (var i=0; i<data.length; i++)
       if (vnifyp(data[i],al,p,al,ol))
              {backup(ol); return answer};
  return false}
       var answer = false;
                  {backup(ol); return answer};
                    {backup(ol); return answer};
  return false}

//------------------------------------------------------------------------------
     {return compresallprimitive(p,pl,al,cont,results,prims,pos,neg,facts,rules)};
  compresallbackground(p,pl,al,cont,results,prims,pos,neg,facts,rules);
  compresallbackground(p,pl,al,cont,results,prims,pos,neg,facts,rules);
      backup(ol)}}
  if (symbolp(str))
      if (matches!=null)
                   backup(ol)}}}};
  for (var i=1; i<p.length-1; i++)
      {var arg = pluug(p[i],al,al);
       if (varp(arg)) {return false} else {args[args.length] = arg}};
  var val = eval(p[0]).apply(null,args);
  var ol = seq();
     {compresallexit(pl,al,cont,results,prims,pos,neg,facts,rules);
      backup(ol)};
  return false}

  for (var i=1; i<p.length-1; i++)
      {var arg = numberize(pluug(p[i],al,al));
       if (isNaN(arg)) {return false};
       args[args.length] = arg};
  var val = stringize(Math[p[0]].apply(null,args));
  var ol = seq();
     {compresallexit(pl,al,cont,results,prims,pos,neg,facts,rules);
      backup(ol)};
  return false}

function compresalllist (p,pl,al,cont,results,prims,pos,neg,facts,rules)
  var s = numlistify(c);
  if (s===false) {return false};
  var val = stringize(eval(p[0]).call(null,s));
  var ol = seq();
     {compresallexit(pl,al,cont,results,prims,pos,neg,facts,rules);
      backup(ol)};
  return false}

  var val = map(p[1],pluug(p[2],al,al),facts,rules);
  if (val===false) {return false};
  var ol = seq();
     {compresallexit(x,pl,al,cont,results,prims,pos,neg,facts,rules); backup(ol)};
  return false}

function compresallnot (p,pl,al,cont,results,prims,pos,neg,facts,rules)
  compresall(p[1],seq(),al,nil,answers,prims,seq(),seq(),facts,rules);
  answers = flipsafely(answers);
  for (var i=0; i<answers.length; i++)
      {if (compatiblep(answers[i][0],answers[i][1],pos,neg))
          {newpos = pos.concat(answers[i][0]);
           newneg = neg.concat(answers[i][1]);
           compresallexit(pl,al,cont,results,prims,newpos,newneg,facts,rules)}};
  return false}

function compresalland (p,pl,al,cont,results,prims,pos,neg,facts,rules)
      {compresall(p[i],pl,al,cont,results,prims,pos,neg,facts,rules)}}
  if (groundp(p) & !find(p,neg))
     {pos = newadjoin(p,pos);
      return compresallexit(pl,al,cont,results,prims,pos,neg,facts,rules)};
  return false}
  for (var i=0; i<data.length; i++)

//------------------------------------------------------------------------------
    else if (charcode===93) {output[output.length] = ']'; cur++}
    else if (charcode===123) {output[output.length] = '{'; cur++}
                         && input.charCodeAt(cur+2)===62)
  return cur+1}

function scancomment (cur)
         input.charCodeAt(cur)!==10 && input.charCodeAt(cur)!==13)
   {cur++};
  if (left==='[') {return parselist()};
  while (current < input.length)

function parselist ()
 {if (input[current]===']') {current++; return nil};
  var head = parsexp('comma','comma');
  return seq('cons',head,parselistexp())}

function parselistexp ()
 {if (input[current]===']') {current++; return nil};
  if (input[current]==='comma')  
     {current++; return seq('cons',parsexp('comma','comma'),parselistexp())};
  return nil}

function parseinfix (left,op,rop)

function parsecons (left,rop)
     {return rop!=='!' && rop!=='=' && rop!==':' && rop!=='&' && rop!=='|' &&
             rop!=='=>' && rop!=='<=' && rop!=='<=>'};
     {return rop!=='!' && rop!=='=' && rop!==':' && rop!=='&' && rop!=='|' &&
             rop!=='=>' && rop!=='<=' && rop!=='<=>'};
     {return rop!=='!' && rop!=='=' && rop!==':' && rop!=='&' && rop!=='|' &&
             rop!=='=>' && rop!=='<=' && rop!=='<=>'};
     {return rop!=='!' && rop!=='=' && rop!==':' && rop!=='&' && rop!=='|' &&
             rop!=='=>' && rop!=='<=' && rop!=='<=>'};
  if (lop==='==>')
     {return rop!=='!' && rop!=='=' && rop!==':' && rop!=='&' && rop!=='|' &&
             rop!=='=>' && rop!=='<=' && rop!=='<=>'};

function printseq (p)
  if (p===false) {return 'false'};
  if (typeof p==='number') {return p};

function printspaces (n)
 {var exp = '';
  for (var i=0; i<n; i++) {exp += '  '};
  return exp}

//------------------------------------------------------------------------------

  if (p===null) {return ''};
  if (symbolp(p)) {return p};
  if (p[0]==='definition') {return grinddefinition(p,lop,rop)};

function grindcons (p,lop,rop)
 {if (listp(p)) {return grindlist(p)};
  var exp = '';

function grindlist (p)
 {var out = '[' + grind(p[1]);
  p = p[2];
  while (!symbolp(p) && p[0]==='cons')
   {out = out + ',' + grind(p[1]); p = p[2]};
  if (p!=='nil') {out = out + '|' + grind(p)};
  out = out + ']';
  return out}

function grindclause (p)
 {exp = '';
  for (var i=0; i<rules.length; i++)
      {exp += displayrule(rules[i]) + '\n'};
  return exp}
 {if (symbolp(p)) {return p};
  if (p[0]==='rule') {return disprule(p)};

function disprule (p)

function disptransition (p)
  if (symbolp(p[2]) || p[2][0]!=='and')
     {return grind(p[1]) + ' ==> ' + grind(p[2]) + '\n'};
  if (p[2].length<4)
     {return grind(p[1]) + ' ==>\n  ' + grind(p[2]) + '\n'};
  var exp = grind(p[1]) + ' ==>\n';

//------------------------------------------------------------------------------
// morefacts
// morerules
// loadfacts
// loadrules
// dumpfacts
// dumprules
//------------------------------------------------------------------------------

function morefacts (filename,target)
 {var contents = fs.readFileSync(filename).toString();
  var data = readdata(contents);
  definemorefacts(target,data);
  return true}

function morerules (filename,target)
 {var contents = fs.readFileSync(filename).toString();
  var data = readdata(contents);
  definemorerules(target,data);
  return true}

function loadfacts (filename,target)
 {var contents = fs.readFileSync(filename).toString();
  var data = readdata(contents);
  emptytheory(target);
  definemorefacts(target,data);
  return true}

function loadrules (filename,target)
 {var contents = fs.readFileSync(filename).toString();
  var data = readdata(contents);
  emptytheory(target);
  definemorerules(target,data);
  return true}

function dumpfacts (source,filename)
 {fs.writeFileSync(filename,showfacts(source));
  return true}

function showfacts (source)
 {var bases = getbases(source);
  var output = '';
  for (var i=0; i<bases.length; i++)
      {var facts = sentences(bases[i],source);
       for (j=0; j<facts.length; j++)
           {output += grind(facts[j]) + '\n'};
       output += '\n'};
  return output}

 {fs.writeFileSync(filename,showrules(source));
  return true}

function showrules (source)
 {var views = getviews(source);
  var output = '';
  for (var i=0; i<views.length; i++)
      {var rules = sentences(views[i],source);
       for (j=0; j<rules.length; j++)
           {output += grind(rules[j]) + '\n'};
       output += '\n'};
  return output}

// finderrors
//------------------------------------------------------------------------------

function finderrors (data)
 {var errors = findarityerrors(data);
  errors = errors.concat(findsafetyerrors(data));
  errors = errors.concat(findstratificationerrors(data));
  return errors}

//------------------------------------------------------------------------------

function findarityerrors (data)
 {arities = seq();
  for (var i=0; i<data.length; i++)
      {arities = getarities(data[i],arities)};
  var errors = seq();
  for (rel in arities)
      {if (arities[rel]==='mixed')
          {errors[errors.length] = 'Mixed arity: ' + grind(rel)}};
  return errors}

function getarities (p,arities)
 {if (symbolp(p)) {return addarity(p,0,arities)}
  if (findq(p[0],aggregates))
     {return getarities(p[2],arities)};
  if (p[0]==='not') {return getarities(p[1],arities)};
  if (p[0]==='and' || p[0]==='or' || p[0]==='rule')
     {for (var i=1; i<p.length; i++)
          {arities = getarities(p[i],arities)};
      return arities};
  return addarity(p[0],p.length-1,arities)}

function addarity (x,n,arities)
 {if (arities[x]==null) {arities[x] = n; return arities};
  if (arities[x]===n) {return arities};
  arities[x] = 'mixed';
  return arities}

//------------------------------------------------------------------------------

function findsafetyerrors (data)
 {var errors = seq();
  for (var i=0; i<data.length; i++)
      {if (!safep(data[i]))
          {errors[errors.length] = 'Unsafe rule: ' + grind(data[i])}};
  return errors}

function safep (exp)
  for (var i=2; i<rule.length; i++)
      {vs = safegoalp(rule[i],vs)
       if (vs===false) {return false}};
  return safeheadp(rule[1],vs)}

  for (var i=1; i<transition.length-1; i++)
      {vs = safegoalp(transition[i],vs)
       if (vs===false) {return false}};
  return safeheadp(transition[2],vs)}

 {if (symbolp(exp)) {return vs};
  if (exp[0]==='distinct')
     {if (groundedp(exp,vs)) {return vs} else {return false}};
  if (findq(exp[0],builtins))
     {for (var i=1; i<exp.length-1; i++)
          {if (!groundedp(exp[i],vs)) {return false}};
      return varsexp(exp[exp.length-1],vs)};
     {if (!groundedp(exp[1],vars(exp[2]))) {return false};
      if (!safegoalp(exp[2],seq())) {return false};
      //if (!safegoalp(exp[2],vs.concat(vars(exp[1])))) {return false};
      return varsexp(exp[3],vs)};
     {if (groundedp(exp[1],vs)) {return vs} else {return false}};
  if (exp[0]==='and')
     {for (var i=1; i<exp.length; i++)
          {vs = safegoalp(exp[i],vs)
           if (vs===false) {return false}}
      return vs};
  return varsexp(exp,vs)}

 {var hs = vars(exp);
  for (var i=0; i<hs.length; i++)

 {if (symbolp(p)) {return p};
  if (p[0]=='not' || p[0]=='rule') {return operator(p[1])};
  return p[0]}

function operands (p)
 {if (symbolp(p)) {return seq()};
  if (p[0]=='not' || p[0]=='rule') {return operands(p[1])};
  return p.slice(1)}

//------------------------------------------------------------------------------

function findstratificationerrors (data)
 {var strata = getstrata(data);
  var errors = seq();
  for (var i=0; i<data.length; i++)
      {if (!checkstratifiedrecursion(data[i],strata))
          {errors[errors.length] = 'Unstratified Recursion: ' + grind(data[i])}};
  for (var i=0; i<data.length; i++)
      {if (!checkstratifiednegation(data[i],strata))
          {errors[errors.length] = 'Unstratified Negation: ' + grind(data[i])}};
  return errors}

function checkstratifiednegation(datum, strata)
 {if (symbolp(datum)) {return true};
  if (datum[0]!=='rule') {return true};
  var stratum = strata[operator(datum[1])];
  for (var j=2; j<datum.length; j++)
      {if (symbolp(datum[j])) {continue};
       if (datum[j][0]==='not')
          {if (strata[operator(datum[j][1])]>=stratum) {return false};
           continue};
       if (aggregatep(datum[j][0]))
          {var rs = getrelations(datum[j],seq());
           for (var k=0; k<rs.length; k++)
               {if (strata[rs[k]]>=stratum) {return false}}}};
   return true}

function checkstratifiedrecursion (datum,strata)
 {if (symbolp(datum)) {return true};
  if (datum[0]!=='rule') {return true};
  var stratum = strata[operator(datum[1])];
  var hs = seq(); //vars(datum[1]);
  var vs = seq();
  for (var j = 2; j<datum.length; j++)
      {if (symbolp(datum[j]) || (datum[j][0]!=='not' && !aggregatep(datum[j])))
          {if (strata[operator(datum[j])]>=stratum)
              {hs = varsexp(datum[j],hs)}
           else {vs = varsexp(datum[j],vs)}}};
  for (var i=0; i<hs.length; i++)
      {if (!findq(hs[i],vs)) {return false}};
  return true}

var succ = {}, stack = [], vertex = {}, _index = 0, scc = [];

function getstrata(data)
 {var scc = getscc(data);
  var stratum = 0;
  var strata = seq();
  for (var i = scc.length-1; i>=0; i--)
      {for (var j=0; j<scc[i].length; j++)
           {strata[scc[i][j]] = stratum};
       stratum++};
  return strata}

function getscc(data)
 {scc = [], _index = 0, stack = [], vertex = {}, succ = {};
  var rs = getallrelations(data)
  for (var i=0; i<rs.length; i++)
      {succ[rs[i]] = [];
       vertex[rs[i]] = {}}
  for (var i=0; i<data.length; i++)
      {if (data[i][0] == "rule")
          {var headrel = operator(data[i][1]);
           var relsucc = getallrelations(data[i].slice(2));
           for (var j = 0; j < relsucc.length; j++)
               {succ[relsucc[j]] = adjoin(headrel, succ[relsucc[j]])}}}
  for (var i=0; i<rs.length; i++)
      {if (typeof vertex[rs[i]].index == 'undefined') {visit(rs[i])}};
  return scc}

function visit(v)
 {vertex[v].index = _index;
  vertex[v].low = _index;
  _index++;
  stack.push(v);
  vertex[v].onstack = true;
  for (var i=0; i<succ[v].length; i++)
      {var w = succ[v][i];
       if (updateop(w)) continue;
          {visit(w);
           vertex[v].low = Math.min(vertex[v].low,vertex[w].low)}
       else if (vertex[w].onstack)
               {vertex[v].low = Math.min(vertex[v].low,vertex[w].low)}}	
  if (vertex[v].low==vertex[v].index)
     {var _scc = [], w = null;
      while (w != v)
       {w = stack.pop();
        vertex[w].onstack = false;
        _scc.push(w)}
      scc.push(_scc)}}

function getallrelations (data)
 {var rs = seq();
  for (var i=0; i<data.length; i++)
      {rs = getrelations(data[i],rs)};
  return rs}

function getrelations (datum,rs)
 {if (symbolp(datum)) {return adjoin(datum,rs)};
  if (datum[0]==='not' || updateop(datum[0]))
     {return getrelations(datum[1],rs)};
  if (datum[0]==='rule' || datum[0]==='and' || datum[0]==='or')
     {for (var j=1; j<datum.length; j++) {rs = getrelations(datum[j],rs)};
      return rs};
  if (builtinp(datum[0])) {return rs};
  if (mathp(datum[0])) {return rs};
  if (listop(datum[0])) {return rs};
  if (aggregatep(datum[0])) {return getrelations(datum[2],rs)};
  return adjoin(datum[0],rs)}

//------------------------------------------------------------------------------