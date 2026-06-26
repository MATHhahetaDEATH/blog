---
tags:
publish: true
---
Textbook: James B Hartle, *Gravity: An Introduction to Einstein's General Relativity*

Gravity(Hartle, Pearson, 2014)
## Ch3 Space, Time and Gravity in Newtonian Physics

1. Newton's first law: There exists an *inertial* frame(coordinate system) in which the motion of any free particle can be described by giving its coordinates w.r.t time $t$($x(t),y(t),z(t)$) and its acceleration as zero($\frac{d^2x}{dt^2}=0,\frac{d^2y}{dt^2}=0,\frac{d^2z}{dt^2}=0$). 
	1. Note: A "free particle" is defined to have $F_{total}=0$. However, the definition of force relies on Newton's second law, which in turn depends on the notion of an inertial frame. To break this circularity, we may provisionally assume "free particle" to be of **some** specific property. One possible constraint is that the relative motion between inertial frames be limited to (1) displacement, (2) rotation and (3) uniform motion(i.e. $x'=x+vt$ with $v$ constant) only. A simple argument shows that there must be at least three non-collinear points with zero acceleration. (counter-example: $x'=x+\lambda x_{particle}$ is also possible if the definition involves only one particle)
2. The principle of relativity: "However, all Newtonian mechanics, including Newton’s second law, is consistent with the following Principle of Relativity: " Identical experiments carried out in different inertial frames give identical results. 
	1. "A principle of relativity relating the form of the laws of physics in inertial frames differing by displacements and rotations is possible only because the geometry of Euclidean space shares those symmetries."
3. Newtonian gravity. 
4. Gravitational and inertial mass: $F=m_{I}a,F_{grav}=-\frac{Gm_{G}M_{G}}{r^2}e_{r} \simeq m_{G}g$. Experiment shows that all bodies fall with the same acceleration, implying that $m_{I} \propto m_{G}$. They can be **defined** to be equal. "It is this experimental fact that allows a geometric theory of gravity and underlies general relativity." 
5. Variational principle for Newtonian mechanics: Let the *Lagrangian* $L(\dot{x},x)=\frac{1}{2}m\dot{x}^2-V(x)$ and the *action* $S[x(t)]=\int_{t_{A}}^{t_{B}} dtL(\dot{x}(t),x(t))$. The Euler-Lagrange equation for $S$ is $-\frac{d}{dt}\left( \frac{ \partial L }{ \partial \dot{x} } \right)+\frac{ \partial L }{ \partial x }=0, \iff m \ddot{x}=-\frac{dV}{dx}$, consistent to Newton's second law. Therefore all possible paths can be solved from that $S$ reaches its extrema. 

## Ch4 Principles of Special Relativity

1. The addition of velocities and the Michelson-Morley experiment: Suppose that the uniform motion takes place at x-axis only, $x'=x-vt$. Then $$V^{x'}=V^x-v,\quad V^{y'}=V^y,\quad V^{z'}=V^z. \qquad \textit{(Newtonian addition of velocities)}$$Recall that in Maxwell's equations the speed of light is assumed to be constant for whatever frame. The transformation above implies that Maxwell's equations can be valid only in one inertial frame, formerly called the "ether".  Michelson and Morley's experiment(1887) showed that this law was not correct: The speed of light would be $c \pm V_{\oplus}$ in directions parallel to the Earth and $c$ perpendicular to it, if the law were correct. However direct measurement showed that $c$ is isotropic. 
![](https://img.ksmtang.com/obsidian/Pasted image 20260328172637.png)
2. Einstein's resolution and its consequences. 
3. Spacetime: "The correct geometric arena for physics is, therefore, not a separate space and absolute time but rather a four-dimensional uniﬁcation of space and time called *spacetime*." 
	1. Line element: We need to find an alternative for Newtonian transformation of velocities, so as to keep the speed of light constant in every inertial frames. One possible(and the simplest/most "fundamental") choice is $ds^2=-(cdt)^2+dx^2+dy^2+dz^2$. 
	2. Light cones: Two points are $(\Delta s)^2>0$ <-> spacelike separated, $=0$ <-> null(lightlike, i.e. the points can be connected by light rays with speed $c$) separated, $<0$ <-> timelike separated. *Light cone* is the locus of points that are null separated from point P. Suppose two events P,A is measured to have an interval of $\Delta t',\Delta t$ in two different frames. Since(see below) $\frac{\Delta t'}{\Delta t} = \frac{1}{\Delta t} \gamma\left( \Delta t-\frac{v\Delta x}{c^2} \right)=\sqrt{ 1-\frac{v^2}{c^2} }>0 \iff v<c$, we know that to keep the same temporal order(causal relationship) of P,A in all frames, A must be inside of the light cone(viz. they are timelike separated). We can further introduce the *proper time* $d\tau$ s.t. $d\tau^2=-\frac{ds^2}{c^2}$ to compare between P,A. (Formally $d\tau$ means the time measured in the particle's rest frame)
![](https://img.ksmtang.com/obsidian/Pasted image 20260329102743.png)
4. Time dilation and the twin paradox: 
	1. Time dilation: $d\tau=\left( dt^2-\frac{1}{c^2}(dx^2+dy^2+dz^2) \right)^{1/2}=\left( 1-\frac{v^2}{c^2} \right)^{1/2}dt$. 
	2. The twin paradox: Two twins move along different (timelike) world lines. For convenience we may suppose one to be at rest. Since $\left( 1-\frac{v^2}{c^2} \right)^{1/2}<1$ holds, the moving one's proper time is always shorter than the rest one. 
5. Lorentz boosts: Introduce *rapidity* $\phi=\tanh^{-1}\left( \frac{v}{c} \right)$. Define the *Lorentz transformation* $\begin{pmatrix}ct' \\ x' \end{pmatrix} = \Lambda_{\phi} \begin{pmatrix}ct \\ x\end{pmatrix}$. Here $\Lambda_{\phi}=\begin{pmatrix} \cosh \phi & -\sinh \phi \\ -\sinh \phi & \cosh \phi \end{pmatrix}$ satisfies $\Lambda_{\phi_{1}+\phi_{2}}=\Lambda_{\phi_{1}}\Lambda_{\phi_{2}}$. One can easily verify $ds^2$ is constant under such transformation. Eliminate $\phi$ in terms of $v$, we have $$t'=\gamma\left( t-\frac{vx}{c^2} \right),\quad x'=\gamma(x-vt),\quad y'=y,\quad z'=z,$$where $\gamma=\left( 1-\frac{v^2}{c^2} \right)^{-1/2}$. 
	1. Lorentz contraction: $L=\gamma L_{*}$. 
	2. Addition of velocities: The composition of two boosts $\Lambda_{\phi_{1}},\Lambda_{\phi_{2}}$ is equivalent to a boost of parameters $\Lambda_{\phi_{1}+\phi_{2}}$. In terms of $v$, that is $v=\frac{v_{1}+v_{2}}{1+\frac{v_{1}v_{2}}{c^2}}$. Consider a particle described by $x(t)$ in one frame and $x'(t)$ in another(which is moving along the x-axis of the first of velocity $v$). The communicative diagram shows $\phi_{v}=\phi_{V^x}+\phi_{-V^{x'}}$, or $V^{x'}= \frac{V^x-v}{1-\frac{vV^x}{c^2}}$. This can be derived out from $V^{x'}=\frac{dx'}{dt'}=\frac{\gamma(dx-vdt)}{\gamma\left( dt-\frac{v}{c^2}dx \right)}=\frac{V^x-v}{1-\frac{vV^x}{c^2}}$ as well. Similarly $V^{y'}=\sqrt{ 1-\frac{v^2}{c^2} } \frac{V^{y}}{1-\frac{vV^x}{c^2}},V^{z'}=\sqrt{ 1-\frac{v^2}{c^2} } \frac{V^{z}}{1-\frac{vV^x}{c^2}}$. 
```tikz
\usepackage{tikz-cd}

\begin{document}

\begin{tikzcd}
    {frame~x} && {rest~frame} \\
    \\
    && {frame~x'}
    \arrow["\phi_{V^{x}}", from=1-1, to=1-3]
    \arrow["\phi_v"', from=1-1, to=3-3]
    \arrow["\phi_{V^{x'}}"', from=3-3, to=1-3]
\end{tikzcd}

\end{document}

```

## Ch5 Special Relativistic Mechanics

1. Four-vectors: $\mathbf{a}=a^t\mathbf{e}_{t} + a^x\mathbf{e}_{x}+a^y\mathbf{e}_{y}+a^z\mathbf{e}_{z}=a^{\alpha}\mathbf{e}_{\alpha}$($\alpha=0,1,2,3$). $\mathbf{a} \cdot \mathbf{b}=\eta_{\alpha \beta} a^{\alpha}b^{\beta}$, where $\eta_{\alpha \beta}=\mathbf{e}_{\alpha} \cdot \mathbf{e}_{\beta}$. In Minkowski space $(\eta_{\alpha \beta}) = \begin{pmatrix} -c^2 & & & \\ & 1 & & \\ & & 1 & \\ & & & 1  \end{pmatrix}$. Let *metric tensor* $\eta=\eta_{\alpha \beta}d\mathbf{e}_{\alpha} \otimes d\mathbf{e}_{\beta}$, then $\eta(\mathbf{a},\mathbf{b})$ gives $\mathbf{a} \cdot \mathbf{b}$. 
	1. Lorentz boost: $\mathbf{a}'=\Lambda_{\phi} \mathbf{a}$. 
![](https://img.ksmtang.com/obsidian/Pasted image 20260406112338.png)
2. Special relativistic kinematics: A world line is described by $x^\alpha=x^\alpha(\tau)$, where $\tau$=proper time. Define the *four-velocity* $\mathbf{u}$ with $u^{\alpha}=\frac{dx^{\alpha}}{d\tau}$. Since $u^{\alpha}=\frac{dx_{\alpha}}{dt} \cdot \frac{dt}{d\tau}$, we have $\mathbf{u}=(\gamma c,\gamma V)$. 
	1. $\frac{d\gamma}{d\tau}=\gamma^4 \frac{V \cdot a}{c^2}$. Then $\mathbf{a}=(\gamma^4 \frac{V \cdot a}{c},\gamma^4 \frac{V \cdot a}{c^2}V+\gamma^2a)$. 
	2. $\mathbf{u}^2=\mathbf{u} \cdot \mathbf{u}=-c^2$. $\mathbf{u} \cdot \mathbf{a}=0$. 
3. Special relativistic dynamics: 
	1. Equation of motion: (1) In the absence of forces, $\frac{d\mathbf{u}}{d\tau}=0$. (2) $m \frac{d\mathbf{u}}{d\tau}=\mathbf{f}$($\mathbf{f}$=the *four-force*, $m$=the *rest mass*). 
	2. Energy-momentum: *Four-momentum* $\mathbf{p}=m \mathbf{u}=\left( \frac{mc}{\sqrt{ 1-\frac{V^2}{c^2} }},\frac{mV}{\sqrt{ 1-\frac{V^2}{c^2} }}\right)$. Define $E=\gamma mc^2,p=\gamma mV$. Then $\mathbf{p}=\left( \frac{E}{c}, p \right)$. Substitute this into $\mathbf{p}^2=-m^2c^2$ to find $E=(m^2c^2+p^2)^{1/2}$. 
		1. When $V\ll c$($\frac{V}{c} \simeq 0$): $p^t=mc+\frac{1}{c} \frac{1}{2}mV^2+\cdots,p=mV+\cdots$. $E= mc^2+\frac{1}{2}mV^2$. 
		2. $\mathbf{f}=\frac{d\mathbf{p}}{d\tau}=\left( \gamma \frac{F\cdot V}{c},\gamma F \right)$. **Note** here $F$ is defined as $\frac{dp}{dt}=m \frac{d(\gamma v)}{dt}$. Direct calculation shows $F=\gamma ma+\gamma^3 m\frac{V\cdot a}{c^2} V$. One can verify that this equation is consistent with $\frac{d\mathbf{p}}{d\tau}=m\mathbf{a}$. Decompose $F,a$ into $F_{\parallel},F_{\bot}$ and $a_{\parallel},a_{\bot}$. Then $F_{\parallel}=\gamma^3ma_{\parallel}$, $F_{\bot}=\gamma ma_{\bot}$. 
4. Variational principle: 
	1. The world line of a **free** particle between two timelike separated points extremises the proper time/distance between them. Consider $S=-m\int ds$. Parameterise the world line using $\sigma$, i.e. $x^{\alpha}=x^{\alpha}(\sigma)$. $ds=\left( -\eta_{\alpha\beta} \frac{dx^{\alpha}}{d\sigma} \frac{dx^\beta}{d\sigma} \right)^{1/2}d\sigma$, then $S=\int Ld\sigma$ where $L=-m\left( -\eta_{\alpha\beta} \dot{x^{\alpha}} \dot{x^{\beta}} \right)^{1/2}$. Applying Euler-Lagrange equation we have $\frac{d}{d\sigma}\left( \frac{ \partial L }{ \partial \dot{x^{\alpha}} } \right)-\frac{ \partial L }{ \partial x^\alpha }=0$. Calculation shows $m \frac{D}{d\sigma}\left[ \dot{x^{\mu}} \left( -\dot{x}^2 \right)^{-1/2} \right]=m \frac{D}{d\sigma}\left[ \dot{x^{\mu}} \left( -\eta_{\alpha\beta} \dot{x^{\alpha}} \dot{x^{\beta}} \right)^{-1/2} \right]=0$(*covariant derivative* $\frac{D}{d\sigma}$ can be understood as the derivative on curved surfaces). We can choose $\sigma=\tau$ to have $\dot{x}^2=c^2$. Then $m \frac{D \dot{x^\mu}}{d\tau}=0$. 
		1. Generally we can write $m \frac{D \dot{x^\mu}}{d\sigma}=f(\sigma)\dot{x^\mu}$, yielding the geodesic. The parameter $\sigma$ determines the "velocity"(w.r.t "time" $\sigma$) of the particle. There always exists an *affine parameter* $\sigma$ s.t $m \frac{D \dot{x^\mu}}{d\sigma}=0$. 
	2. When external force is taken into account, e.g. electromagnetic force, the action becomes $S=-m\int ds+q\int A_{\alpha}dx^{\alpha}$ and Lagrangian becomes $L=-m\left( -\eta_{\alpha\beta} \dot{x^{\alpha}} \dot{x^{\beta}} \right)^{1/2}+qA_{\alpha}\dot{x^{\alpha}}$. $m \frac{D}{d\sigma}\left[ \dot{x^{\mu}} \left( -\dot{x}^2 \right)^{-1/2} \right]=qF_{\nu}^{\mu} \dot{x^{\nu}}$. Then $m \frac{D^2x^\mu}{d\tau^2}=qF_{\nu}^{\mu} \frac{dx^{\nu}}{d\tau}$, align with Lorentz force. 
5. Light rays(photons): 
	1. World line: The action $S=-m\int ds=0$. However we can adapt another form of action $S'=\frac{1}{2}\int \eta_{\alpha\beta}\dot{x^{\alpha}} \dot{x^{\beta}}d\sigma$(which means energy). $S'$ has the same condition for maximisation, i.e. $m \frac{D \dot{x^\mu}}{d\sigma}=f(\sigma)\dot{x^\mu}$. 
	2. Energy, momentum, frequency and wave vector: $E=\hbar \omega$. $\vec{p}=\frac{E\vec{V}}{c^2}=\hbar \vec{k}$(*wave three-vector* $|k|=\frac{\omega}{c}$). Then $\mathbf{p}=(\hbar|k|,\hbar \vec{k})=\hbar \mathbf{k}$. $\mathbf{p}^2=0$ yields $m=0$. 
	3. Doppler shift and relativistic beaming: Applying Lorentz boost we have $\omega'=\omega \frac{\sqrt{ 1-\frac{V^2}{c^2} }}{1-\frac{V\cos \alpha'}{c}} \simeq \omega\left( 1+\frac{V}{c}\cos \alpha' \right)$($V\ll c$), where $\alpha'$ is the angle between the $x'$-axis and the direction of the photon. Similarly $\omega = \omega' \frac{\sqrt{ 1- \frac{V^2}{c^2} }}{1+ \frac{V\cos\alpha}{c}}$. Cancel $\frac{\omega}{\omega'}$ to get $\cos \alpha'= \frac{\cos\alpha+\beta}{1+\beta \cos\alpha}$. 
6. Observers and observations: $x^{\alpha}=x^{\alpha}(\tau)$. Here $\tau$ satisfying $d\tau^2=-\frac{1}{c^2}ds^2$ is "handpicked"(~~钦定~~) as the local rest frame's "time", so as to match the definition of *ideal clock*, that its measurement of time is dependent on velocity only. 
	1. Alternatively we may let $x^{\alpha}=x^{\alpha}(\sigma)$ and choose $\sigma$, since four-velocity $u$ is defined by $x,\sigma$ and conversely $\sigma$ can be determined by $u,x$. But $\tau$ is the parameter under which the metric remains constant(or intuitively it yields an "even" parameterisation): $| \frac{dx}{d\tau} |^2=\text{constant}$. 
![](https://img.ksmtang.com/obsidian/Pasted image 20260412113623.png)
	2. Observations: $\mathbf{p}$ the four-momentum of a particle, $\{ \mathbf{e}_{\hat{\alpha}} \}_{\alpha=0,1,2,3}$ the base vectors of the observer's frame. Then $\mathbf{p}=p^{\hat{\alpha}} \mathbf{e}_{\hat{\alpha}}$, or $p^{\hat{0}}=-\mathbf{p} \cdot \mathbf{e}_{\hat{0}}$ and $p^{\hat{\alpha}}=\mathbf{p} \cdot \mathbf{e}_{\hat{\alpha}}$ for $\alpha=1,2,3$. Define energy $E$ to be the temporal(i.e. $\mathbf{e}_{\hat{0}}$) component of $\mathbf{p}$, 3-momentum be the spatial component of $\mathbf{p}$, so as to be align with the physical meaning of $E,p$ in classical mechanics(time/space translation generator, refer to Noether theorem). 


## Ch6 Gravity as Geometry

1. Testing the equality of gravitational and inertial mass: 
	1. Eötvös experiments: Take $\hat{y}$ to be along the fiber and $\hat{x}$ perpendicular to both the fiber and the rod. Note that by choosing the local frame in this way we can rule out the common properties(e.g. the latitude). We first make the two masses to be equal in "weight"(i.e. $\hat{y} \cdot G_{eff,A} = \hat{y} \cdot  G_{eff,B}$). Then observe whether there is a torsion, indicating that $\hat{x} \cdot G_{eff,A} \neq \hat{x} \cdot  G_{eff,B}$. In fact there isn't. Thus we know $G_{eff,A}=G_{eff,B}$, or $\frac{m_{G}}{m_{I}}$ is independent of material. 
![](https://img.ksmtang.com/obsidian/Pasted image 20260516114308.png)
2. The equivalence principle(in the context of Newtonian gravity): "There is no experiment that can distinguish a uniform acceleration from a uniform gravitational ﬁeld." 
	1. Gravity attracts light: If light curves in a frame accelerating at $g$, then it must also curve in the gravitational field. 
![](https://img.ksmtang.com/obsidian/Pasted image 20260602170813.png)
3. Clocks in a gravitational field: Suppose A at the top(of the rocket) is emitting light at intervals of $\Delta \tau_{A}$, while B at the bottom is receiving it at intervals of $\Delta \tau_{B}$. For every pulse, $F(t_{e},t_{r})=y_{A}(t_{e})-c(t_{r}-t_{e})-y_{B}(t_{r})=0$ holds. Compare two adjacent pulses: $0=\delta F=(y_{A}'(t_{e})+c)\delta t_{e} - (y_{B}'(t_{r})+c)\delta t_{r}$, or $\frac{\delta t_{r}}{\delta t_{e}} = \frac{c+v_{e}}{c+v_{r}}$. Then $\frac{\Delta \tau_{B}}{\Delta \tau_{A}}= \sqrt{ \frac{v_{r}^2-c^2}{v_{e}^2-c^2} } \cdot \frac{c+v_{e}}{c+v_{r}} = \exp(\chi_{e} - \chi_{r})<1$, where $\chi=\arctan\left( \frac{v}{c} \right)$. 
	1. When terms like $\left( \frac{gh}{c^2} \right)^2$ can be neglected: $\frac{\Delta \tau_{B}}{\Delta \tau_{A}} \sim 1-\frac{gh}{c^2}$. Generally we have $\Delta \tau_{B} \sim \left( 1+ \frac{\Phi_{A}-\Phi_{B}}{c^2}  \right) \Delta \tau_{A}$($\Phi$=gravitational potential). 
![](https://img.ksmtang.com/obsidian/Pasted image 20260603112818.png)
4. The global positioning system: The decisive corrections include those for time dilation & gravitational potential. 
5. Spacetime is curved. 
6. Newtonian gravity in spacetime terms: The line element is defined as $ds^2=-\left( 1+2 \frac{\Phi(x^i)}{c^2} \right)(cdt)^2+\left( 1-2 \frac{\Phi(x^i)}{c^2} \right)(dx^2+dy^2+dz^2)$. 
	1. Rates of emission and reception: $\Delta \tau_{A} \sim \left( 1+ \frac{\Phi_{A}}{c^2} \right)\Delta t,\Delta \tau_{B} \sim \left( 1+ \frac{\Phi_{B}}{c^2} \right)\Delta t$, then $\Delta \tau_{B} = \frac{1+ \frac{\Phi_{B}}{c^2}}{1+ \frac{\Phi_{A}}{c^2}} \Delta \tau_{A} \sim \left( 1+ \frac{\Phi_{B}-\Phi_{A}}{c^2} \right)\Delta \tau_{A}$. 
	2. Newtonian motion in spacetime terms: $\tau_{AB}=\int_{A}^B d\tau = \int_{A}^B dt\left(  \left( 1+\frac{2\Phi}{c^2} \right) -\frac{1}{c^2}\left( 1-\frac{2\Phi}{c^2} \right) V^2 \right)^{\color{blue}{1/2}} \simeq \int_{A}^B dt\left( 1- \frac{1}{c^2} \left(  \frac{1}{2}V^2 -\Phi \right)  \right)$, the combination of corrections for time dilation & gravitational potential. 
		1. To extremise $\tau_{AB}$ is to extremise the Lagrangian $L=\frac{1}{2}V^2-\Phi$. Euler-Lagrange equation further implies $V^2=-\nabla \Phi$, equivalent to $F=ma$. 
![](https://img.ksmtang.com/obsidian/Pasted image 20260605112338.png)


## Ch7 The Description of Curved Spacetime

1. Coordinates. 
2. Metric. 
3. The summation convention. 
4. Local inertial frames: At each point $P$ of spacetime(with the metric $g$) there exists a set of coordinates $x'^{\alpha}$ s.t. $g'_{\alpha \beta}(x'_{P})=\eta_{\alpha \beta}$. Formally that means to diagnolise $g$. Furthermore one can find $x'^{\alpha}$ s.t. $\frac{ \partial g'_{\alpha \beta} }{ \partial x'^{\gamma} }\mid_{x=x_{P}}=0$, constituting the *local inertial frame*. However it's not always possible to find $x'^\alpha$ that make the second derivatives vanish as well. 
5. Light cones and world lines: "In short, the *local* light cone structure of general relativity is the same as that of ﬂat spacetime."
6. Length, area, volume, and four-volume for diagonal metrics. 
7. Embedding diagrams and wormholes. 【龙女仆，Spilhaus Projection】
8. Vectors in curved spacetime. 
9. Three-dimensional surfaces in four-dimensional spacetime. 


## Ch8 Geodesics

In Newtonian mechanics a *free* particle is uninfluenced by any force—gravitation included. In general relativity *free* means free from any influences besides the curvature of spacetime.

1. The geodesic equation: $$\frac{d^2x^{\alpha}}{d\tau^2} = -\Gamma _{\beta \gamma}^{\alpha} \frac{dx^{\beta}}{d\tau} \frac{dx^{\gamma}}{d\tau} \quad \Leftrightarrow \frac{du^{\alpha}}{d\tau} = -\Gamma _{\beta \gamma}^{\alpha} u^{\beta}u^{\gamma}, $$where the *Christoffel symbols* $\Gamma_{\beta \gamma}^{\alpha}$ can be determined (from Euler-Lagrange equation directly) to be $\Gamma_{\beta\gamma}^{\alpha} = \frac{1}{2}g^{\alpha\delta}(\partial_{\beta}g_{\gamma\delta} + \partial_{\gamma}g_{\beta\delta} - \partial_{\delta}g_{\beta\gamma})$. 
2. Solving the geodesic equation--symmetries and conservation laws. Consider a metric which holds constant under transformation $x'^\mu=x^{\mu}+\varepsilon \xi^{\mu}(x)$. $g_{\mu \nu}(x)=g'_{\mu \nu}(x)=g_{\mu \nu}(x+\varepsilon \xi(x))$ yields that $( \xi^{\rho}\partial_{\rho}g_{\mu \nu}+g_{\rho \nu}\partial_{ \mu}\xi^{\rho}+g_{\mu \rho}\partial_{\nu}\xi^{\rho} )\varepsilon+o(\varepsilon)=0$. We can define $\xi=\xi(x)$ to be a *Killing vector* indicating the conservation. 
	1. From Killing symmetry we have $\frac{d}{d\tau}(\xi_{\mu}u^{\mu})=0$ i.e. $\xi \cdot u=const$. Subsequently $\xi \cdot p=const$. 
3. Null geodesics. 
4. Local inertial frames and freely falling frames. 
	1. Local inertial frame: (1) $g_{\alpha \beta}(P)=\eta_{\alpha \beta}$; (2) $\partial_{\gamma}g_{\alpha \beta}(P)=0$, or equivalently $\Gamma_{\beta \gamma}^{\alpha}(P)=0$. 
	2. Freely falling frame: "the Christoffel symbols vanish all along a geodesic, not just at one point on it". "A freely falling frame is a local inertial frame all along a geodesic."


## Ch9 The Geometry Outside a Spherical Star

1. Schwarzschild geometry: $ds^2 = -\left(1 - \frac{2GM}{c^2 r}\right) (c\,dt)^2 + \left(1 - \frac{2GM}{c^2 r}\right)^{\color{blue}-1} dr^2 + r^2 \left(d\theta^2 + \sin^2\theta \, d\phi^2\right)$. 
2. The gravitational redshift: $\hbar \omega_{*} = -p \cdot u_{obs}=-p \cdot \left( \left( 1- \frac{2GM}{c^2R} \right)^{-1}\xi \right)=\left( 1- \frac{2GM}{c^2R} \right)^{-1} (-\xi \cdot p)$, where $\xi \cdot p$ is a constant. Then $\omega_{\infty}=\omega_{*}\left( 1- \frac{2GM}{c^2R} \right)^{1/2}$. 
3. Particle orbits--precession of the perihelion: 
	1. Conserved quantities: Obviously $ds^2$ is independent of $t,\phi$. Then $e:=-\xi \cdot u=c^2\left( 1- \frac{2GM}{c^2r} \right) \frac{dt}{d\tau}$(energy per unit mass) and $\ell:=\eta \cdot u=r^2 \sin^2\theta \frac{d\phi}{d\tau}$(angular momentum per unit mass) are constants. 
	2. Effective potential and radial equation: WLOG we can let $\theta=\frac{\pi}{2}$ and $u^{\theta}=0$, which means the orbit lies in a "plane". $u \cdot u=-c^2$ then gives $-c^2\left( 1- \frac{2GM}{c^2r} \right)(u^t)^2+\left( 1- \frac{2GM}{c^2r} \right)^{-1} (u^r)^2+r^2(u^{\phi})^2=-c^2$, or $$-\left( 1- \frac{2GM}{c^2r} \right)^{-1} \frac{e^2}{c^2}+\left( 1- \frac{2GM}{c^2r} \right)^{-1} \left(  \frac{dr}{d\tau}  \right)^2+ \frac{\ell^2}{r^2} =-c^2.$$Define  $\mathcal{E}= \frac{e^2-c^4}{2c^2}$, the *effective potential* $V_{eff}(r)=-\frac{GM}{r}+\frac{\ell^2}{2r^2}-\frac{GM\ell^2}{c^2r^3}$. Then $\mathcal{E}=\frac{1}{2}\left( \frac{dr}{d\tau} \right)^2+V_{eff}(r)$. 
		1. Comparison with Newtonian energy: Let $e=c^2+\frac{E_{Newt}}{m}$ to have $\mathcal{E}=\frac{E_{Newt}}{m}+ \frac{E_{Newt}^2}{2m^2c^2} \sim \frac{E_{Newt}}{m}$(when $v\ll c$). The equation can be rewritten as $E_{Newt}=\frac{m}{2}\left( \frac{dr}{d\tau} \right)^2+\frac{L^2}{2mr^2}-\frac{GMm}{r}-\frac{GML^2}{c^2mr^3} \sim \frac{m}{2}\left( \frac{dr}{dt} \right)^2+ \frac{L^2}{2mr^2}-\frac{GMm}{r}$, where $L:=m\ell$. 
		2. $V_{eff}(r)$: Basically $V_{eff}\to -\frac{GM}{r},r \to \infty$ and $V_{eff}\left( r_{s} \right)=V_{eff}\left( \frac{2GM}{c^2} \right)=-\frac{c^2}{2}$. From solving $\frac{dV_{eff}}{dr}=0$ the extrema can be found to be correspond to  $r_{\pm}=\frac{\ell^2}{2GM} \left( 1 \pm \sqrt{  1-12\left( \frac{GM}{c\ell} \right)^2  } \right)$. 
![](https://img.ksmtang.com/obsidian/Pasted image 20260618102854.png)![](https://img.ksmtang.com/obsidian/Pasted image 20260618104900.png)
	3. Radial plunge orbits: Released from infinity with zero angular momentum, the mass has $e=c^2, \ell=0, \mathcal{E}=0$. Substitute into the equations above to get $\frac{dr}{d\tau}=-\sqrt{ \frac{2GM}{r} }$. This differential equation yields $r=\left( \frac{3}{2} \right)^{2/3}(2M)^{1/3}(\tau_{*}-\tau)^{2/3}$. With $\frac{dt}{d\tau}=\left( 1- \frac{2GM}{c^2r} \right)^{-1}$ we can further get $t = t_{*} + \frac{2GM}{c^{3}} \left( -\frac{2}{3} \left( \frac{c^{2} r}{2GM} \right)^{3/2} - 2 \left( \frac{c^{2} r}{2GM} \right)^{1/2} + \log \left| \frac{(c^{2} r / 2GM)^{1/2} + 1}{(c^{2} r / 2GM)^{1/2} - 1} \right| \right)$. 
	4. Stable circular orbits: 