# coding: utf-8
f=x**3-x**2-1
roots=solve([f],x)
rhss=[a.right() for a in roots]
n(sum(map(lambda z:z**0,rhss))) # 3
n(sum(map(lambda z:z**1,rhss))) # 1
n(sum(map(lambda z:z**2,rhss))) # 1
n(sum(map(lambda z:z**3,rhss))) # 4
n(sum(map(lambda z:z**4,rhss))) # 5
M=matrix([[3,1,1],[1,1,4],[1,4,5]])
cs=M**(-1)*matrix([[1],[1],[1]])
sequence = lambda n: sum([xi**n*coefficient(xi) for xi in rhss])
coefficient = lambda y:sum([y**i*cs[i] for i in range(3)])
var("m")
latex(sequence(m))
