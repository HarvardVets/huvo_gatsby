// given n, k-length arrays, returns an n*k array,r s.t.
// r = [a[0], b[0], c[0], ..., a[k-1], b[k-1], c[k-1]]
// where a,b,c are the input arrays
export function zip(arrays) {
  let r = []
  arrays[0].forEach(function(_, i) {
    let c = arrays.map(function(array) {
      return array[i]
    })
    r = r.concat(c)
  })
  return r
}
