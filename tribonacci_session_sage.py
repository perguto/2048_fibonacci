# coding: utf-8
f=x**Integer(3)-x**Integer(2)-Integer(1)
solve([f],x)
latex(x)
roots=solve([f],x)
latex(roots[Integer(0)])
latex(roots)
print(*latex(roots))
print(latex(roots))
print(latex(*roots))
print(map(latex,roots))
print(*map(latex,roots))
list(map(latex,roots)
)
[a,b,c]=roots
a
b
c
a**Integer(2)
a.right_hand_side
a.right_hand_side()
a.right
a.right()
rhss=[a.right() for a in roots]
rhss
sum(rhss)
n(_)
simplify(sum(rhss))
map(n,rhss)
list(map(n,rhss))
sum(map(n,rhss))
sum(map(lambda z:z**Integer(2),rhss))
n(sum(map(lambda z:z**Integer(2),rhss)))
n(sum(map(lambda z:z**Integer(3),rhss)))
n(sum(map(lambda z:z**Integer(4),rhss)))
n(sum(map(lambda z:z**(-Integer(1)),rhss)))
n(sum(map(lambda z:z**(-Integer(2)),rhss)))
n(sum(map(lambda z:z**(-Integer(3)),rhss)))
M=matrix([[Integer(3),Integer(1),Integer(1)],[Integer(1),Integer(1),Integer(4)],[Integer(1),Integer(4),Integer(5)]])
M
M**(-Integer(1))
M**(-Integer(1))*[Integer(1),Integer(1),Integer(1)]
M**(-Integer(1))*Vector([Integer(1),Integer(1),Integer(1)])
M**(-Integer(1))*matrix([[Integer(1),Integer(1),Integer(1)]])
M**(-Integer(1))*matrix([[Integer(1)],[Integer(1)],[Integer(1)]])
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
get_ipython().run_line_magic('save', 'tribonacci_session_sage')
get_ipython().run_line_magic('save', '0-100 tribonacci_session_sage')
get_ipython().run_line_magic('hist', '')
get_ipython().run_line_magic('hist', '')
echo %hist
get_ipython().system('echo %hist')
get_ipython().run_line_magic('hist', '| echo')
get_ipython().run_line_magic('hist', '')
_
get_ipython().run_line_magic('history', '')
get_ipython().run_line_magic('pinfo', '%save')
get_ipython().run_line_magic('save', 'tribonacci_session_sage 1-1000')
