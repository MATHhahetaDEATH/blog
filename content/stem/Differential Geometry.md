---
tags:
publish: true
---
Textbook: 
*Visual Differential Geometry and Forms: A Mathematical Drama in Five Acts* by Tristan Needham
## 1-Forms

1. Basic definitions: A linear, real-valued function of a single vector input, $\omega :V\to \mathbb{R}$. The addition and (scalar) multiplication of 1-forms can be naturally defined that the set of all 1-forms constitute a vector space, the *dual* to $V$. Then $v(\omega):=\omega(v)$(contraction, see below). 
	1. Visualisation: A ground plane defined by $\omega(v)=0$ and a stack of parallel planes defined by $\omega(v)=h$. By adjusting the spacing of planes (to be $\frac{1}{\omega(1)}$) we can make $\omega(v) = \# \text{planes pierced by } v$. 
![](https://img.ksmtang.com/obsidian/Pasted image 20260301124342.png)
	2. Gradient 1-form: Recall that in a topographic map, the steepness is inversely proportional to the (smallest) distance between neighbouring contours, $steepness=\sup_{\delta s} \frac{\delta h}{\delta s} \sim \sup_{ds} \frac{dh}{ds} = \sup_{|v|=1} \nabla f \cdot v = |\nabla f|$(reaches equal iff $v \parallel \nabla f$). Let $\zeta$ to be a (1-form) field that $\zeta_{p}$ is an 1-form defined by $\zeta_{p}(v)=(\# \text{projected contour pierced by }v) \cdot \delta h$ in the immediate vicinity of $p$. 
![](https://img.ksmtang.com/obsidian/Pasted image 20260301124358.png)
2. Basis 1-forms: Consider a basis $\{ e_{j} \}$ for $T_{p}$ and the *dual basis* $\{ \omega^i \}$ for $T_{p}^*$, in which $\omega^i(v)=v^i$(An equivalent definition being $\omega^i(e_{j})=\delta_{j}^i$). Actually any 1-form $\varphi$ satisfies $\varphi = \sum \varphi(e_{j})\omega^j$. 
3. The gradient as a 1-form: $df(v):=\nabla_{v} f$($d$=exterior derivative). 
	1. $dx^j(v) = \left( \sum v^i \frac{ \partial }{ \partial x^i } \right)x^j=v^j$ where $x^j$ is an operator to extract the $j$-th coordinate of $v \in \mathbb{R}^n$. Note that formally $dx^j$ has a same effect but act on a direction $v \in T_{p}M$ and means the change rate of $x^j$ on direction $v$. We call $\{ dx^j \}=\{ \omega^j \}$ the *Cartesian basis* of 1-forms dual to $\{ e_{j} \}$. 
![](https://img.ksmtang.com/obsidian/Pasted image 20260301174446.png)
	2. Substitue $\varphi=df$ in, $df = \sum (df(e_{i}))dx^j = \sum \frac{ \partial f }{ \partial x^j }dx^j$. 
	3. Geometric meaning: Consider a manifold characterised by $\{ (x,f(x)) \in \mathbb{R}^n \times \mathbb{R} \}$. Apply the definition of $\zeta_{p}(v)$ then $\zeta = df$. 
4. Geometric intuition of 1-forms: Multiply by $k$ <-> compress the stack by $k$; Simple calculations shows that the addition($2dx+dy$ for example) of 1-forms is itself a 1-form corresponding to a new stack constructed like the figure shows. 
![](https://img.ksmtang.com/obsidian/Pasted image 20260301174521.png)

## Tensors

1. Definitions: A tensor $H(\varphi_{1},\cdots,\varphi_{f} \| v_{1},\cdots, v_{v})$ of valence $\begin{Bmatrix} f \\v \end{Bmatrix}$ at $p$ is a multilinear, real-valued function of $f$ 1-forms and $v$ vectors. Its value at $p$ only depends on the value of 1-forms and vectors at $p$.  $H:(T_{p}^*M)^f \times (T_{p}M)^v \to \mathbb{R}^n$. 
	1. Operation: For tensors with a same valence, addition can be defined naturally; The tensor product is defined as $(\varphi \otimes \psi)(v,w):=\varphi(v)\psi(w)$ for $\begin{Bmatrix} 0 \\1 \end{Bmatrix}$ tensors(1-forms). Then simply $(J \otimes T)(\cdots)=J(\cdots)T(\cdots)$ for tensors of general valences. 
2. Components: $T_{ij}:=T(e_{i},e_{j})$, then $T(v,w)=\sum T_{ij}v^iw^j = \sum T_{ij} (dx^i \otimes dx^j)(v,w)$, or $T=\sum T_{ij}(dx^i \otimes dx^j)$. Directly we see that $\{ dx^i \otimes dx^j \}$ forms a basis for tensors of valance $\begin{Bmatrix} 0 \\2 \end{Bmatrix}$. Similarly consider $(v \otimes w)(\varphi,\psi)=\sum v^iw^j (e_{i} \otimes e_{j})(\varphi,\psi)$ and $\{ e_{i} \otimes e_{j} \}$ as a basis for $\begin{Bmatrix} 2 \\0 \end{Bmatrix}$s. Generally we may decompose $\begin{Bmatrix} f \\v \end{Bmatrix}$s using the basis $\{ (e_{i_{1}} \otimes \cdots \otimes e_{i_{f}} ) \otimes (dx^{j_{1}} \otimes \cdots \otimes dx^{j_{v}}) \}$. 
3. Changing val: 
	1. Contraction: $\varphi(v)=\left( \sum \varphi_{i}dx^j \right)\left( \sum v^je_{j} \right) = \sum (\varphi_{i}v^j)(dx^ie_{j})=\sum \varphi_{i}v^j$, independent of the specific components of $\varphi,v$(trace of a matrix). Now suppose a general case of $A \otimes B$. When summing over an upper index(contravariant) of $A$ and a lower index(covariant) of $B$(i.e. $\sum A^{ij}B_{jk}$), we get another tensor (1) whose valance has each index reduced by 1 compared to that of $A \otimes B$, (2) which is independent of the choice of basis. 
	2. Metric tensor: Consider a metric tensor $g$ of valence $\begin{Bmatrix}0 \\ 2\end{Bmatrix}$ and a map from vector $n$ to 1-form $\nu$ that $\nu(w):=g(w,n)$. Calculation shows that $\nu=\sum n_{i}dx^i$ where $n_{i}=\sum g_{ij}n^j$. Let, e.g. $R(u,v,w,n)=R(\nu \| u,v,w)$ then $R_{ijkl}=\sum_{m} R_{ijk}^m g_{ml}$. The process in called *index lowering*. Correspondingly we can take $\tilde{g}$ of valence $\begin{Bmatrix}2\\ 0\end{Bmatrix}$ to define $n(\varphi):=\tilde{g}(\varphi,\nu)$ to do *index raising.* 

## 2-Forms

1. Basic definitions: A 2-form $\Psi$ is an antisymmetric tensor of valence $\begin{Bmatrix}0 \\2\end{Bmatrix}$, that is $\Psi(v,u)=-\Psi(u,v)$. A p-form is a completely antisymmetric tensor of valence $\begin{Bmatrix}0 \\p\end{Bmatrix}$, meaning that swapping any two of the inputs reverses the sign. 
	1. $\mathcal{A}(u,v):=\text{oriented area of the parallelogram with edges }u,v$. Obviously $\mathcal{A}$ is a 2-form. 
	2. Wedge product: We can split $\varphi \otimes \psi$ into the sum of a symmetric tensor and an antisymmetric tensor and define the latter to be the *wedge product*, i.e. $\varphi \wedge \psi:=\varphi \otimes \psi - \psi \otimes \varphi$. Besides the inputs, we have the antisymmetry of the wedge product itself $\varphi \wedge \psi = - \psi \wedge \varphi$. 
	3. $\mathcal{A}=dx \wedge dy$. In a general case, $(\varphi \wedge \psi)(v_{1},v_{2})=\mathcal{A}(F(v_{1}),F(v_{2}))$. 
![](https://img.ksmtang.com/obsidian/Pasted image 20260303115351.png)
2. Basis: $\{ dx^i \wedge dx^j:i<j \}$ constitutes a basis for the 2-forms. $\Psi = \Psi_{12}(dx \wedge dy)$ for $\mathbb{R}^2$ and $\Psi = \Psi_{23}(dy \wedge dz) + \Psi_{31}(dz \wedge dx) + \Psi_{12}(dx \wedge dy)$ for $\mathbb{R}^3$. 
![](https://img.ksmtang.com/obsidian/Pasted image 20260303122311.png)
3. Flux: Let $\underline{\Psi}=\begin{pmatrix} \Psi^1 \\ \Psi^2 \\ \Psi^3 \end{pmatrix} = \begin{pmatrix} \Psi_{23} \\ \Psi_{31} \\ \Psi_{12} \end{pmatrix}$. Now imagine a uniform flow of fluid with velocity $\underline{\Psi}$ and define $\Phi(v_{1},v_{2})=\text{Amount of fluid crossing P per unit time}=\text{flux of }\underline{\Psi} \text{ through P}$. The flux is positive iff the direction of P and $\underline{\Psi}$ is on the same side. By simple calculation we find that $\Phi=\Psi$. 
![](https://img.ksmtang.com/obsidian/Pasted image 20260303121910.png)
4. Vector and wedge products: Let $\underline{\varphi}=\begin{pmatrix} \varphi_{1} \\ \varphi_{2} \\ \varphi_{3}\end{pmatrix}$ where $\varphi=\varphi_{1}dx^1 + \varphi_{2}dx^2 + \varphi_{3} dx^3$. Then $\underline{\Psi}= \underline{\varphi} \times  \underline{\sigma}$ where $\Psi = \varphi \wedge \sigma$, or $\underline{\Psi}=\Psi$. This holds in and only in $\mathbb{R}^3$ where $\frac{1}{2}n(n-1)=n$. 
	1. The volume of a parallelepiped with edges $u,v, \underline{\Omega}$: Volume=flux=$\Omega(u,v)=\begin{pmatrix} \Omega^1 \\ \Omega^2 \\ \Omega^3 \end{pmatrix} \cdot \begin{pmatrix} u^2v^3-u^3v^2 \\ u^3v^1-u^1v^3 \\ u^1v^2-u^2v^1 \end{pmatrix} = \det \begin{pmatrix} \underline{\Omega} & u & v \end{pmatrix}$. 
![](https://img.ksmtang.com/obsidian/Pasted image 20260303124340.png)
5. The Faraday and Maxwell electromagnetic 2-forms: Consider electric field $\underline{E}=\begin{pmatrix}E_{x} \\ E_{y} \\ E_{z}\end{pmatrix}$ and magnetic field $\underline{B}=\begin{pmatrix}B_{x} \\ B_{y} \\ B_{z}\end{pmatrix}$. The corresponding 2-forms and 1-forms: $$E = E_{x}(dy \wedge dz) + E_{y}(dz \wedge dx) + E_{z}(dx \wedge dy),\quad \varepsilon=E_{x}dx+E_{y}dy+E_{z}dz, $$$$B = B_{x}(dy \wedge dz) + B_{y}(dz \wedge dx) + B_{z}(dx \wedge dy),\quad \beta=B_{x}dx+B_{y}dy+B_{z}dz. $$Now define *Faraday 2-form* $F=\varepsilon \wedge dt+B$, *Maxwell 2-form* $\star F=\beta \wedge dt-E$, both in $4$ dimensions. Actually here $\star$ means Hodge dual. 

## 3-Forms

1. The wedge product of a 2-form and 1-form: $(\Psi \wedge \sigma)(v_{1},v_{2},v_{3}):=\Psi(v_{1},v_{2})\sigma(v_{3}),\Psi(v_{3},v_{1})\sigma(v_{2})+\Psi(v_{2},v_{3})\sigma(v_{1})$. Note that $\Psi \wedge \sigma =\sigma \wedge \Psi$. Generally if $\Psi$ is a $p$-form and $\Omega$ is a $q$-form, then $\Psi \wedge \Omega = (-1)^{pq}\Omega \wedge \Psi$. 
2. The volume 3-form: Easy to verify $\mathcal{V}(u,v, \underline{\Omega})=\Omega(u,v)$ where $\mathcal{V}=dx^1 \wedge dx^2 \wedge dx^3$. 
3. The wedge product of three(and more) 1-forms is associative: We can write without ambiguity $\underset{1}{\sigma} \wedge \underset{2}{\sigma} \wedge \underset{3}{\sigma}$. Geometrically thinking, we can also define $F:v \mapsto \begin{pmatrix} \underset{1}{\sigma}(v) \\ \underset{2}{\sigma}(v) \\ \underset{3}{\sigma}(v) \end{pmatrix}$ and $\underset{1}{\sigma} \wedge \underset{2}{\sigma} \wedge \underset{3}{\sigma}:(v_{1},v_{2},v_{3}) \mapsto \det \begin{pmatrix} F(v_{1}) & F(v_{2}) & F(v_{3}) \end{pmatrix}$. This definition can be generalised to the wedge product of $p$ 1-forms. 
	1. Abstract definition of wedge product: (1) Bilinearity (2) associativity and (3) graded antisymmetry are enough to determine the operation. 
	2. Explicit formula: $(\varphi \wedge \psi)(v_{1},\cdots,v_{{p+q}}) = \frac{1}{p!q!} \sum_{\sigma \in S_{p+q}} \mathrm{sgn}(\sigma) \varphi(v_{\sigma(1)},\cdots,v_{\sigma(p)})\psi(v_{\sigma(p+1)},\cdots,v_{\sigma(p+q)})$. 
4. Basis: $\{ dx^{i_{1}} \wedge \cdots \wedge dx^{i_{p}}:i_{1} < \cdots < i_{p} \}$ forms a basis for $p$-forms. 

## Differentiation

1. The exterior derivative: Concentrating on one point $p \in M$, a 0-form is a scalar. Then for different $p$s these scalars constitutes a function(scalar field) $f$. The exterior derivative $d$ increases the degree of the form by one to allow for the input of an additional vector(direction). Similarly we can take an 1-form field $\varphi$ and vector field $u,v$ to define $d\varphi(u,v)=\nabla_{u}\varphi(v)-\nabla_{v}\varphi(u)-\varphi([u,v])$, where the *commutator* $[u,v]:= \nabla_{u}v-\nabla_{v}u$(we subtract this term to ensure the independence of the variations of the vector fields). 
	1. Simplification of $d\varphi$: Choose the vector fields to be constant and basis to be $\{ dx^k \}$. Then $d\varphi=\sum \partial_{i}\varphi_{j}(dx^i \wedge dx^j) = \sum d\varphi_{j} \wedge dx^j$. 
	2. $p$-forms: $d\Phi = \sum d\Phi_{i_{1},\cdots,i_{p}} \wedge (dx^{i_{1}} \wedge \cdots dx^{i_{p}} ) = \sum dx^j \wedge \partial_{j} \Phi$. 
2. The Leibniz rule: $d(\Phi \wedge \Psi) = (d\Phi) \wedge \Psi + (-1)^{\deg \Phi}\Phi \wedge(d\Psi)$. 
	1. Another way to define $d$: A linear operator satisfying (1) the Leibniz rule (2) the equation of total derivative for functions(0-forms). 
3. Closed and extra forms: 
	1. $d^2=0$: We start from $d^2\varphi = \sum d(\partial_{i}\varphi_{j}) \wedge dx^i \wedge dx^j = \sum (\partial_{k} \partial_{i}\varphi_{j}dx^k \wedge dx^i) \wedge dx^j=0$ for a 2-form $\varphi$. By induction we can verify $d^2 \Phi$ holds for $\Phi$ of every degrees of form. 
	2. Definition: $\Upsilon$ is *closed* <-> $d\Upsilon =0$, $\Upsilon$ is *exact* <-> $\exists \text{potential } \Psi,\Upsilon=d\Psi$. 
		1. Poincare Lemma: If a closed $\Upsilon$ is defined on a simply connected region, then it's also exact. 
4. Vector calculus via forms: $\underline{d\varphi}=\begin{pmatrix}\partial_{2}\varphi_{3}-\partial_{3}\varphi_{2} \\ \partial_{3}\varphi_{1}-\partial_{1}\varphi_{3} \\ \partial_{1}\varphi_{2}-\partial_{2}\varphi_{1}\end{pmatrix}=\nabla \times  \underline{\varphi}:=\mathrm{curl} \underline{\varphi}$. $d\Psi =  \begin{pmatrix} \partial_{1}  \\ \partial_{2} \\ \partial_{3} \end{pmatrix} \cdot \begin{pmatrix} \Psi^1 \\ \Psi^2 \\ \Psi^3 \end{pmatrix} dx^1 \wedge dx^2 \wedge dx^3 = (\nabla \cdot \underline{\Psi}) \cdot \mathcal{V} =: (\mathrm{div}\underline{\Psi})\mathcal{V}$. 
	1. Applying $d^2=0$ to $\varphi=df,\Psi=d\varphi$ we have $\nabla \times \nabla f=0, \nabla \cdot(\nabla \times  \underline{\varphi})=0$. 
	2. Calculation including $\nabla \cdot$ and $\nabla \times$ can be translated to the language of forms. (usually with the lemma that $\varphi \wedge \Psi = (\underline{\varphi} \cdot \underline{\Psi}) \mathcal{V}$)
5. Maxwell's equations: ($d_{S}$ denotes the spatial part of the spacetime $d$, i.e. $df=d_{S}f+\partial_{t}fdt$)
	1. Source-free equations: $\nabla \cdot \underline{B} = 0, \nabla \times \underline{E} + \partial_{t} \underline{B}=0$. Consider $dF=d(\varepsilon \wedge dt)+dB = ( (\text{flux 2-form of }\nabla \times \underline{E}) \wedge dt ) + ( (\nabla \cdot \underline{B})\mathcal{V}+dt \wedge \partial_{t}B ) = (\nabla \cdot \underline{B})\mathcal{V}+(\text{flux 2-form of }\nabla \times \underline{E}+\partial_{t}\underline{B}) \wedge dt$. Then $F$ is closed. Applying Poincare lemma we know locally there exists a 1-form *potential* $A$ s.t. $F=dA$. 
	2. Source equations(in Gaussian units): $\nabla \cdot \underline{E} = 4\pi \rho, \nabla \times \underline{B} - \partial_{t} \underline{E}=4\pi \underline{j}$. Similarly we have $d\star F=4\pi \star J$, where $J=-\rho dt+j$ and $\star J=-\rho \mathcal{V}+(\text{flux 2-form of } \underline{j}) \wedge dt$. 

## Integration

1. The line integral of a 1-form: $\int_{K} \varphi := \mathcal{C}_{K}(\underline{\varphi}) = \int_{K} \underline{\varphi} \cdot dr = \lim\sum \underline{\varphi} \cdot \delta r = \lim\sum \varphi(\delta r)$. 
	1. Path-independence <-> vanishing loop integrals. 
	2. Exact form: Let $\varphi =df$. Substitute $\varphi(\delta r)=df(\delta r) \sim \delta f$ into the definition, we have $\int_{K}df=f(b)-f(a)$. 
2. The exterior derivative as an integral: 
	1. $d(\text{1-form})$: *Circulation* $\Omega(\varepsilon u,\varepsilon v):=\oint_{\Pi(\varepsilon u,\varepsilon v)}\varphi$. We can evaluate $\Omega$ using the midpoints: $\Omega(\varepsilon u,\varepsilon v) \sim \varphi_{a}(\varepsilon u)+\varphi_{b}(\varepsilon v)+\varphi_{c}(-\varepsilon u)+\varphi_{d}(-\varepsilon v) \sim \nabla_{\varepsilon u}\varphi(\varepsilon v)-\nabla_{\varepsilon v}\varphi(\varepsilon u)$. Note here $u,v$ are vector fields and need not to be constant. The parallelogram is closed yields that $\Phi_{\varepsilon}^v \circ \Phi_{\varepsilon}^u-\Phi_{\varepsilon}^u \circ \Phi_{\varepsilon}^v =0$. Taylor expand shows that $\Phi_{\varepsilon}^u(x) = x+\varepsilon u(x) + \frac{\varepsilon^2}{2}(u \cdot \nabla)u+O(\varepsilon^3)$. Necessarily the coefficient of $\varepsilon^2$ vanishes, i.e $(u\cdot \nabla)v-(v \cdot \nabla)u=0$ or $[\varepsilon u,\varepsilon v]=0$(Frobenius theorem ensures that this is also a sufficient condition). Thus $\Omega(\varepsilon u,\varepsilon v) \sim d\varphi(\varepsilon u,\varepsilon v)=(\nabla \times \underline{\varphi})\cdot  \hat{n}\mathcal{A}(\varepsilon u,\varepsilon v)$, or the circulation ultimately equals to the flux. 
![](https://img.ksmtang.com/obsidian/Pasted image 20260304101149.png)
	2. $d(\text{2-form})$: *Outward flux* $\Omega(\varepsilon u,\varepsilon v,\varepsilon w):=\iint_{\Pi(\varepsilon u,\varepsilon v,\varepsilon w)} \Psi \sim d\Psi(\varepsilon u,\varepsilon v,\varepsilon w)=(\nabla \cdot  \underline{\Psi}) \mathcal{V}(\varepsilon u,\varepsilon v,\varepsilon w)$. 
![](https://img.ksmtang.com/obsidian/Pasted image 20260304115434.png)
3. Fundamental theorem of exterior calculus(generalised Stokes's theorem): $\int_{R}d\Phi = \int_{\partial R} \Phi$. 
	1. Area: $\oint_{\partial R}xdy = \sum \oint_{\partial (\delta R)} xdy$, here $\delta R$ is a rectangle stripped from $R$ parallel to $x$-axis. Obviously $\oint_{\partial (\delta R)} xdy = \delta x\delta y = \mathcal{A}(\delta R)$ then $\oint_{\partial R}xdy = \mathcal{A}(R)$. Applying FTEC directly we have $\oint_{\partial R}xdy =\iint_{R}d(xdy) = \iint_{R} dx \wedge dy = \mathcal{A}(R)$. 
	2. $\partial^2=0$: Applying FTEC twice yields $0=\int_{R}d^2\Phi = \int_{\partial R}d\Phi=\int_{\partial^2R} \Phi$ for every $\Phi,R$ , then $\partial ^2=0$. Conversely $d^2=0$ if we know $\partial ^2=0$. 
	3. 0-form(Newton-Leibniz): $\int_{K}df=f(b)-f(a)$. 
	4. 1-form: 
		1. Green's theorem: $d\varphi = d\varphi_{1} \wedge dx^1 + d\varphi_{2} \wedge dx^2 = \partial_{2}\varphi_{1}dx^2 \wedge dx^1 + \partial_{1}\varphi_{2}dx^1 \wedge dx^2 = (\partial_{1}\varphi_{2}-\partial_{2}\varphi_{1})dx^1 \wedge dx^2$. Then $\oint_{\partial R} \varphi_{1}dx^1+\varphi_{2}dx^2 = \oint_{\partial R}\varphi = \iint_{R} d\varphi=\iint_{R}(\partial_{1}\varphi_{2}-\partial_{2}\varphi_{1})dx^1 \wedge dx^2$. 
		2. Stokes's theorem: $\oint_{\partial S} \underline{\varphi} \cdot dr= \oint_{\partial S} \varphi = \iint_{S}d\varphi = \iint_{S} (\nabla \times \underline{\varphi}) \cdot  \hat{n}d\mathcal{A}$. 
	5. 2-form(Gauss's/divergence theorem): $\iiint_{V}(\nabla \cdot \underline{\Psi})d\mathcal{V} = \iiint_{V} d\Psi =\oint_{\partial V}\Psi=\oint_{S} \underline{\Psi} \cdot  \hat{n} d\mathcal{A}$. 


![](https://img.ksmtang.com/obsidian/Pasted image 20260621122018.png)