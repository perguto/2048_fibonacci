---
title: Explicit formula for the tribonacci sequence
css: [
./style/main.css,
./style/main_supplement.css
]
---
<style>
h1.title {
float: initial
}
</style>
In its full glory:

$$a_m = \left(\frac{1}{186} \, {\left({\left(\left(\frac{1}{2}\right)^{\frac{1}{3}} {\left(3 \, \sqrt{31} \sqrt{3} + 29\right)}^{\frac{1}{3}} {\left(i \, \sqrt{3} + 1\right)} + \frac{2 \, \left(\frac{1}{2}\right)^{\frac{2}{3}} {\left(-i \, \sqrt{3} + 1\right)}}{{\left(3 \, \sqrt{31} \sqrt{3} + 29\right)}^{\frac{1}{3}}} - 2\right)}^{2} + 2 \, \left(\frac{1}{2}\right)^{\frac{1}{3}} {\left(3 \, \sqrt{31} \sqrt{3} + 29\right)}^{\frac{1}{3}} {\left(i \, \sqrt{3} + 1\right)} + \frac{4 \, \left(\frac{1}{2}\right)^{\frac{2}{3}} {\left(-i \, \sqrt{3} + 1\right)}}{{\left(3 \, \sqrt{31} \sqrt{3} + 29\right)}^{\frac{1}{3}}} + 50\right)} {\left(-\frac{1}{6} \, \left(\frac{1}{2}\right)^{\frac{1}{3}} {\left(3 \, \sqrt{31} \sqrt{3} + 29\right)}^{\frac{1}{3}} {\left(i \, \sqrt{3} + 1\right)} - \frac{\left(\frac{1}{2}\right)^{\frac{2}{3}} {\left(-i \, \sqrt{3} + 1\right)}}{3 \, {\left(3 \, \sqrt{31} \sqrt{3} + 29\right)}^{\frac{1}{3}}} + \frac{1}{3}\right)}^{m} + \frac{1}{186} \, {\left({\left(\left(\frac{1}{2}\right)^{\frac{1}{3}} {\left(3 \, \sqrt{31} \sqrt{3} + 29\right)}^{\frac{1}{3}} {\left(-i \, \sqrt{3} + 1\right)} + \frac{2 \, \left(\frac{1}{2}\right)^{\frac{2}{3}} {\left(i \, \sqrt{3} + 1\right)}}{{\left(3 \, \sqrt{31} \sqrt{3} + 29\right)}^{\frac{1}{3}}} - 2\right)}^{2} + 2 \, \left(\frac{1}{2}\right)^{\frac{1}{3}} {\left(3 \, \sqrt{31} \sqrt{3} + 29\right)}^{\frac{1}{3}} {\left(-i \, \sqrt{3} + 1\right)} + \frac{4 \, \left(\frac{1}{2}\right)^{\frac{2}{3}} {\left(i \, \sqrt{3} + 1\right)}}{{\left(3 \, \sqrt{31} \sqrt{3} + 29\right)}^{\frac{1}{3}}} + 50\right)} {\left(-\frac{1}{6} \, \left(\frac{1}{2}\right)^{\frac{1}{3}} {\left(3 \, \sqrt{31} \sqrt{3} + 29\right)}^{\frac{1}{3}} {\left(-i \, \sqrt{3} + 1\right)} - \frac{\left(\frac{1}{2}\right)^{\frac{2}{3}} {\left(i \, \sqrt{3} + 1\right)}}{3 \, {\left(3 \, \sqrt{31} \sqrt{3} + 29\right)}^{\frac{1}{3}}} + \frac{1}{3}\right)}^{m} + \frac{1}{93} \, {\left(2 \, {\left(\left(\frac{1}{2}\right)^{\frac{1}{3}} {\left(3 \, \sqrt{31} \sqrt{3} + 29\right)}^{\frac{1}{3}} + \frac{2 \, \left(\frac{1}{2}\right)^{\frac{2}{3}}}{{\left(3 \, \sqrt{31} \sqrt{3} + 29\right)}^{\frac{1}{3}}} + 1\right)}^{2} - 2 \, \left(\frac{1}{2}\right)^{\frac{1}{3}} {\left(3 \, \sqrt{31} \sqrt{3} + 29\right)}^{\frac{1}{3}} - \frac{4 \, \left(\frac{1}{2}\right)^{\frac{2}{3}}}{{\left(3 \, \sqrt{31} \sqrt{3} + 29\right)}^{\frac{1}{3}}} + 25\right)} {\left(\frac{1}{3} \, \left(\frac{1}{2}\right)^{\frac{1}{3}} {\left(3 \, \sqrt{31} \sqrt{3} + 29\right)}^{\frac{1}{3}} + \frac{2 \, \left(\frac{1}{2}\right)^{\frac{2}{3}}}{3 \, {\left(3 \, \sqrt{31} \sqrt{3} + 29\right)}^{\frac{1}{3}}} + \frac{1}{3}\right)}^{m}\right)$$

As sage code: 

```python
(1/186*(((1/2)^(1/3)*(3*sqrt(31)*sqrt(3) + 29)^(1/3)*(I*sqrt(3) + 1) + 2*(1/2)^(2/3)*(-I*sqrt(3) + 1)/(3*sqrt(31)*sqrt(3) + 29)^(1/3) - 2)^2 + 2*(1/2)^(1/3)*(3*sqrt(31)*sqrt(3) + 29)^(1/3)*(I*sqrt(3) + 1) + 4*(1/2)^(2/3)*(-I*sqrt(3) + 1)/(3*sqrt(31)*sqrt(3) + 29)^(1/3) + 50)*(-1/6*(1/2)^(1/3)*(3*sqrt(31)*sqrt(3) + 29)^(1/3)*(I*sqrt(3) + 1) - 1/3*(1/2)^(2/3)*(-I*sqrt(3) + 1)/(3*sqrt(31)*sqrt(3) + 29)^(1/3) + 1/3)^m + 1/186*(((1/2)^(1/3)*(3*sqrt(31)*sqrt(3) + 29)^(1/3)*(-I*sqrt(3) + 1) + 2*(1/2)^(2/3)*(I*sqrt(3) + 1)/(3*sqrt(31)*sqrt(3) + 29)^(1/3) - 2)^2 + 2*(1/2)^(1/3)*(3*sqrt(31)*sqrt(3) + 29)^(1/3)*(-I*sqrt(3) + 1) + 4*(1/2)^(2/3)*(I*sqrt(3) + 1)/(3*sqrt(31)*sqrt(3) + 29)^(1/3) + 50)*(-1/6*(1/2)^(1/3)*(3*sqrt(31)*sqrt(3) + 29)^(1/3)*(-I*sqrt(3) + 1) - 1/3*(1/2)^(2/3)*(I*sqrt(3) + 1)/(3*sqrt(31)*sqrt(3) + 29)^(1/3) + 1/3)^m + 1/93*(2*((1/2)^(1/3)*(3*sqrt(31)*sqrt(3) + 29)^(1/3) + 2*(1/2)^(2/3)/(3*sqrt(31)*sqrt(3) + 29)^(1/3) + 1)^2 - 2*(1/2)^(1/3)*(3*sqrt(31)*sqrt(3) + 29)^(1/3) - 4*(1/2)^(2/3)/(3*sqrt(31)*sqrt(3) + 29)^(1/3) + 25)*(1/3*(1/2)^(1/3)*(3*sqrt(31)*sqrt(3) + 29)^(1/3) + 2/3*(1/2)^(2/3)/(3*sqrt(31)*sqrt(3) + 29)^(1/3) + 1/3)^m)
```

As python code: 

```python
sqrt = lambda n: n**.5
I=1j #imaginary unit
tribonacci = lambda m: (1/186*(((1/2)**(1/3)*(3*sqrt(31)*sqrt(3) + 29)**(1/3)*(I*sqrt(3) + 1) + 2*(1/2)**(2/3)*(-I*sqrt(3) + 1)/(3*sqrt(31)*sqrt(3) + 29)**(1/3) - 2)**2 + 2*(1/2)**(1/3)*(3*sqrt(31)*sqrt(3) + 29)**(1/3)*(I*sqrt(3) + 1) + 4*(1/2)**(2/3)*(-I*sqrt(3) + 1)/(3*sqrt(31)*sqrt(3) + 29)**(1/3) + 50)*(-1/6*(1/2)**(1/3)*(3*sqrt(31)*sqrt(3) + 29)**(1/3)*(I*sqrt(3) + 1) - 1/3*(1/2)**(2/3)*(-I*sqrt(3) + 1)/(3*sqrt(31)*sqrt(3) + 29)**(1/3) + 1/3)**m + 1/186*(((1/2)**(1/3)*(3*sqrt(31)*sqrt(3) + 29)**(1/3)*(-I*sqrt(3) + 1) + 2*(1/2)**(2/3)*(I*sqrt(3) + 1)/(3*sqrt(31)*sqrt(3) + 29)**(1/3) - 2)**2 + 2*(1/2)**(1/3)*(3*sqrt(31)*sqrt(3) + 29)**(1/3)*(-I*sqrt(3) + 1) + 4*(1/2)**(2/3)*(I*sqrt(3) + 1)/(3*sqrt(31)*sqrt(3) + 29)**(1/3) + 50)*(-1/6*(1/2)**(1/3)*(3*sqrt(31)*sqrt(3) + 29)**(1/3)*(-I*sqrt(3) + 1) - 1/3*(1/2)**(2/3)*(I*sqrt(3) + 1)/(3*sqrt(31)*sqrt(3) + 29)**(1/3) + 1/3)**m + 1/93*(2*((1/2)**(1/3)*(3*sqrt(31)*sqrt(3) + 29)**(1/3) + 2*(1/2)**(2/3)/(3*sqrt(31)*sqrt(3) + 29)**(1/3) + 1)**2 - 2*(1/2)**(1/3)*(3*sqrt(31)*sqrt(3) + 29)**(1/3) - 4*(1/2)**(2/3)/(3*sqrt(31)*sqrt(3) + 29)**(1/3) + 25)*(1/3*(1/2)**(1/3)*(3*sqrt(31)*sqrt(3) + 29)**(1/3) + 2/3*(1/2)**(2/3)/(3*sqrt(31)*sqrt(3) + 29)**(1/3) + 1/3)**m)
print(*list(map(tribonacci, range(20))),sep='\n')
```

In more detail:
<!-- 9/31 -2/31 *x_i 6/31 * x_i**2 -->

$$ a_m = \sum_{i=0}^2{x_i^n}\left(
\frac{6}{31} \, x_{i}^{2} - \frac{2}{31} \, x_{i} + \frac{9}{31}
\right),
$$

where $x_0,x_1,x_2$ are the solutions of the cubic equation 
$x^{3} - x^{2} - 1 = 0$. These roots can be expressed as explicit terms involving roots and third roots of complex numbers via [Cardano's formula](https://en.wikipedia.org/wiki/Cubic_equation#Cardano's_method) (see [this video by the "Mathologer"](https://www.youtube.com/watch?v=N-KXStupwsc) for an easy-to-understand derivation):

<!-- vim replace **(1/3) with cbrt -->
<!-- s/\\left(\(.*\)\\right)^{\\frac{1}{3}}/\\sqrt[3]{\1} -->
<!-- vim replace **(2/3) with cbrt**2 -->
<!-- s/\\left(\(.*\)\\right)^{\\frac{2}{3}}/\\sqrt[3]{\1}^2 -->

<!-- \begin{align*} -->
<!-- x_0 &= --> 
<!-- %\\ &= -->
<!-- \frac{1}{3} \, \left(\frac{1}{2}\right)^{\frac{1}{3}} {\left(3 \, \sqrt{31} \sqrt{3} + 29\right)}^{\frac{1}{3}} + \frac{2 \, \left(\frac{1}{2}\right)^{\frac{2}{3}}}{3 \, {\left(3 \, \sqrt{31} \sqrt{3} + 29\right)}^{\frac{1}{3}}} + \frac{1}{3} --> 
<!--  \\ -->
<!-- &\approx -->
<!-- 1.46557123187677 -->
<!-- \\ -->
<!-- x_1 &= -\frac{1}{6} \, \left(\frac{1}{2}\right)^{\frac{1}{3}} {\left(3 \, \sqrt{31} \sqrt{3} + 29\right)}^{\frac{1}{3}} {\left(i \, \sqrt{3} + 1\right)} - \frac{\left(\frac{1}{2}\right)^{\frac{2}{3}} {\left(-i \, \sqrt{3} + 1\right)}}{3 \, {\left(3 \, \sqrt{31} \sqrt{3} + 29\right)}^{\frac{1}{3}}} + \frac{1}{3} -->
<!-- \\ -->
<!-- &\approx -->
<!-- -0.232785615938384 - 0.792551992515448i -->
<!-- \\ -->
<!-- x_2 &= -\frac{1}{6} \, \left(\frac{1}{2}\right)^{\frac{1}{3}} {\left(3 \, \sqrt{31} \sqrt{3} + 29\right)}^{\frac{1}{3}} {\left(-i \, \sqrt{3} + 1\right)} - \frac{\left(\frac{1}{2}\right)^{\frac{2}{3}} {\left(i \, \sqrt{3} + 1\right)}}{3 \, {\left(3 \, \sqrt{31} \sqrt{3} + 29\right)}^{\frac{1}{3}}} + \frac{1}{3} -->
<!-- \\ -->
<!-- &\approx -->
<!-- -0.232785615938384 + 0.792551992515448i -->
<!-- \\ -->
<!-- \end{align*} -->

\begin{align*}
x_0 &= 
%\\ &=
\frac{1}{3} \, 
%
%\sqrt[3]{\frac{1}{2}} 

%{\left(
\sqrt[3]{
\frac{
3 \, \sqrt{63} + 29
}{2}
}
%\right)}^{\frac{1}{3}}
+ \frac{2 \, \left(\frac{1}{2}\right)^{\frac{2}{3}}}{3 \, {\left(3 \, \sqrt{63} + 29\right)}^{\frac{1}{3}}} + \frac{1}{3} 
 \\
&\approx
1.46557123187677
\\
x_1 &= -\frac{1}{6} \, 

%\sqrt[3]{\frac{1}{2}} {\left(3 \, \sqrt{63} + 29\right)}^{\frac{1}{3}} 
\sqrt[3]{
\frac{
3 \, \sqrt{63} + 29
}{2}
}

{\left(i \, \sqrt{3} + 1\right)} - \frac{\left(\frac{1}{2}\right)^{\frac{2}{3}} {\left(-i \, \sqrt{3} + 1\right)}}{3 \, {\left(3 \, \sqrt{63} + 29\right)}^{\frac{1}{3}}} + \frac{1}{3}
\\
&\approx
-0.232785615938384 - 0.792551992515448i
\\
x_2 &= -\frac{1}{6} \, 

%\sqrt[3]{\frac{1}{2}} {\left(3 \, \sqrt{63} + 29\right)}^{\frac{1}{3}} 
\sqrt[3]{
\frac{
3 \, \sqrt{63} + 29
}{2}
}

{\left(-i \, \sqrt{3} + 1\right)} - \frac{\left(\frac{1}{2}\right)^{\frac{2}{3}} {\left(i \, \sqrt{3} + 1\right)}}{3 \, {\left(3 \, \sqrt{63} + 29\right)}^{\frac{1}{3}}} + \frac{1}{3}
\\
&\approx
-0.232785615938384 + 0.792551992515448i
\\
\end{align*}

The following sage code generated the above formula:

```python
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
```
