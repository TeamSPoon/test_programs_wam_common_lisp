//------------------------------------------------------------------------------
// residue
//   current version assumes query is ground
//   current version does not use facts
//   current version does not do not
//   current version assumes global variable primitives
//   current version does not do consistency check
//------------------------------------------------------------------------------

  return answer}
     {return resoneexit(pl,al,adjoin(p,rl),facts,rules)};
     {return resallexit(pl,al,adjoin(p,rl),facts,rules)};
  return false}

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
rules = seq(read('r(X) :- p(X,Y) & q(Y)'), read('q(b)'));
query = read('r(a)');