# coding: utf-8
f=x**Integer(3)-x**Integer(2)-Integer(1)
roots=solve([f],x)
rhss=[a.right() for a in roots]
n(sum(map(lambda z:z**Integer(0),rhss))) # 3
n(sum(map(lambda z:z**Integer(1),rhss))) # 1
n(sum(map(lambda z:z**Integer(2),rhss))) # 1
n(sum(map(lambda z:z**Integer(3),rhss))) # 4
n(sum(map(lambda z:z**Integer(4),rhss))) # 5
n(sum(map(lambda z:z**(-Integer(1)),rhss))) 
n(sum(map(lambda z:z**(-Integer(2)),rhss)))
n(sum(map(lambda z:z**(-Integer(3)),rhss)))
M=matrix([[Integer(3),Integer(1),Integer(1)],[Integer(1),Integer(1),Integer(4)],[Integer(1),Integer(4),Integer(5)]])
M
cs=M**(-Integer(1))*matrix([[Integer(1)],[Integer(1)],[Integer(1)]])
coefficient = lambda y:sum([y**i*cs[i] for i in cs])
sequence = lambda n: sum([xi**n*coefficient(xi) for xi in rhss])
sequence(Integer(1))
coefficient(Integer(1))
cs
cs[Integer(1)]
coefficient
coefficient[Integer(0)]
coefficient(Integer(0))
coefficient(Integer(1))
coefficient = lambda y:sum([y**i*cs[i] for i in range(Integer(3))])
coefficient(Integer(1))
coefficient(Integer(2))
coefficient(Integer(3))
sequence(Integer(1))
n(sequence(Integer(1)))
n(sequence(Integer(2)))
n(sequence(Integer(3)))
n(sequence(Integer(0)))
sequence(x)
x
sequence(n)
sequence(m)
var("m")
m
sequence(m)
latex(sequence(m))
