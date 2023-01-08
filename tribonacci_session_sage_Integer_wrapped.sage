#Integer = lambda x:x
#x=4
# coding: utf-8
f=x**Integer(3)-x**Integer(2)-Integer(1)
roots=solve([f],x)
rhss=[a.right() for a in roots]
n(sum(map(lambda z:z**Integer(0),rhss))) # 3
n(sum(map(lambda z:z**Integer(1),rhss))) # 1
n(sum(map(lambda z:z**Integer(2),rhss))) # 1
n(sum(map(lambda z:z**Integer(3),rhss))) # 4
n(sum(map(lambda z:z**Integer(4),rhss))) # 5
M=matrix([[Integer(3),Integer(1),Integer(1)],[Integer(1),Integer(1),Integer(4)],[Integer(1),Integer(4),Integer(5)]])
cs=M**(-Integer(1))*matrix([[Integer(1)],[Integer(1)],[Integer(1)]])
sequence = lambda n: sum([xi**n*coefficient(xi) for xi in rhss])
coefficient = lambda y:sum([y**i*cs[i] for i in range(Integer(3))])
var("m")
latex(sequence(m))
