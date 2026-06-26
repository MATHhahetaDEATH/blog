---
tags:
publish: true
---
## Electrostatics 静电学

1. Classical(nonquantum) vs quantum: $10^{-12}$m (atom~$10^{-10}$m). {Further examples on the differences of classical&quantum theories}
2. Electric charge: 
	1. Two classes of charge: positive & negative. 
		1. Observed fact: "Electricity began to be studied scientiﬁcally in the eighteenth century. Two kinds of electricity were distinguished: resinous electricity is left on an amber rod when rubbed with fur, while vitreous electricity is left on a glass rod when rubbed with silk. Unlike charges were found to attract each other, while like charges repel each other." Equivalence class. {Definition of equivalence relation/class}
		2. The naming: Benjamin Franklin (1706–1790) gave our modern terms positive and negative to vitreous and resinous electricity, respectively. "丝绸摩擦过的玻璃棒"=positive, "毛皮摩擦过的硬橡胶棒"=negative. {The structure of those materials and the chemical mechanism behind the phenomena}
	2. {Common ways to measure the quality of charge}
	3. Antiparticle: Properties having an opposite(e.g. electric charge, magnetic moment) is reversed whereas those admit no opposite(e.g. mass) remains. {Examples and explanations of other properties of common particles}
		1. The universe around us consists mainly of matter rather than antimatter. Then positive charge is usually found on protons and negative charge on electrons. 
	4. Conservation: The creation of a positively charged particle is always accompanied by the simultaneous creation of a negatively charged one (given what we have observed so far). e.g. photon -> $e^-+e^+$. {Details on the conversion from photon to charges and reverse}
	5. Quantisation: The magnitudes of electric charges are always multiples of $e$, the amount of charge carried by a single electron. (As for quarks, the basic unit is $e/3$) {Theories on the possible reason why quantisation holds and why the basic unit is exactly $e$}
3. Coulomb's law: $F_{10} = k\dfrac{q_1q_0}{r_{10}^3}\vec{r_{10}} = -F_{01}$, where $k=\dfrac{1}{4\pi \varepsilon _0}$. {Differences between "(physical) law" and "(mathematical) theorem"}
	1. Assumptions: (1) static (2) point charge(the distance between(rather than inside) charges dominates the interaction; note that when considering the interaction between a charge and **itself** we can't assume it to be a point) (3) ignore other forms of interaction(e.g. universal gravity). {Intentions to make these assumptions}
	2. Insights: 
		1. To identify the point charges we have to incorporate some of the intrinsic properties as variants. Possible ones are quality/spin/magnetic moment/etc and experiment shows that mainly quality matters. 
		2. {Inverse-square law}
		3. {Superposition principle}
	3. Constants and units: $\varepsilon_{0}$=vacuum permittivity, $k$=Coulomb constant. In CGS(centimetre-gram-second) electrostatic units, two like charges of $1$esu repel one another with a force of $1$dyne. {Approximation values of the constants/units like $\varepsilon_{0},k,e,C$ and further introduction of CGS}
4. The electric field: Define *intensity* $E(x,y,z) :=\sum_{i} k\frac{q_{i}}{r^3} \vec{r}$ to draw a vector field from interactions between charges. $E$ can be understood as the limit of $\frac{F}{q_{0}},q_{0}\to 0$($q_{0}$=test charge). 
	1. What is an electric field: {Explanations on the essence of the electric field, including concepts like action-at-a-distance}
	2. Flux: $\Phi:=\int_{\partial V}E \cdot  \hat{n}d\mathcal{A}$. Circulation: $\Gamma := \oint_{C} E \cdot ds$. The direction is determined by right-hand rule. 
		1. Gauss's law: $\text{flux}=\int_{\partial V}E \cdot  \hat{n}d\mathcal{A} = \frac{1}{\varepsilon_{0}}\sum_{\text{enclosed}}q = \frac{1}{\varepsilon_{0}} \int_{V} \rho d\mathcal{V}$. Applying Gauss' theorem, we have $\frac{1}{\varepsilon_{0}} \int_{V} \rho d\mathcal{V} = \int_{V} (\nabla \cdot \underline{\Phi})d\mathcal{V}$. According to the arbitrariness of $V$, $\mathrm{div}E := \nabla \cdot E = \frac{\rho}{\varepsilon_{0}}$. 
		2. Loop theorem: $\oint_{C} E \cdot ds=0$, or $0 = \oint_{\partial S} \Psi = \iint_{S}d\Psi = \iint_{S} (\nabla \times E)\cdot \hat{n}d\mathcal{A}$. Thus $\mathrm{curl}E:= \nabla \times E=0$. 
		3. “We may say that we have met two kinds of derivatives of a vector field. One kind, the divergence, involves the rate of change of a vector component in its own direction, $\frac{ \partial F_{x} }{ \partial x }$, and so on. The other kind, the curl, is a sort of "sideways derivative," involving the rate of change of $F_{x}$ as we move in the $y$ or $z$ direction.”
	3. The laplacian: $\nabla ^2(\cdot) :=\mathrm{div}(\nabla(\cdot))=\frac{ \partial^2 }{ \partial x^2 } + \frac{ \partial^2 }{ \partial y^2 } + \frac{ \partial^2 }{ \partial z^2 }$. 
		1. Poisson's equation: $\nabla^2 \varphi = -\frac{\rho}{\varepsilon_{0}}$(combining the existence of $\varphi$ and the value of $\mathrm{div}E$). 
		2. Laplace's equation: $\nabla^2 \varphi=0$. "We run into it in many branches of physics. Indeed one might say that from a mathematical point of view the theory of classical fields is mostly a study of the solutions of this equation. " Its solution, harmonic function, satisfies many properties. e.g. The average value of $\varphi$ over $\partial S$($S$=sphere) is equal to the value of $\varphi$ at the centre of $S$. 
		3. Green function: $\nabla^2_{x}G(x,x')=\delta (x-x')$. Then $G(x,x')=-\frac{1}{4\pi} \frac{1}{|x-x'|}$. The general solution of Poisson's equation is $\varphi(x)=-\frac{1}{\varepsilon_{0}} \iiint_{\mathbb{R}^3}G(x,x')\rho(x')d \mathcal{V}$, consistent to what we have obtained from Coulomb's law. 
		4. Uniqueness theorem: The charge distribution(the field) can be uniquely determined by (1) Poisson's equation (2) some specific boundary conditions. 
	4. Differential forms: Consider a 1-form $\Psi$ and 2-form $\Phi$ s.t. $E= \underline{\Psi} = \underline{\Phi}$(actually $\Phi = \star \Psi$). $\Psi = E \cdot dr = -d\varphi$, the potential difference/work; $\Phi = E \cdot  \hat{n}d\mathcal{A}$, the flux; $d\Phi = (\nabla \cdot E) \mathcal{V} = \rho \mathcal{V}$(Gauss's law), the quantity of charge. Furthermore, $\mathrm{curl}E \leftrightarrow \star d\Psi$, $\mathrm{div}E \leftrightarrow \star d\Phi$. 
![](https://img.ksmtang.com/obsidian/Pasted image 20260312165750.png)
5. Work and energy: $W_{1 \to 2}= \int_{r_{1}}^{r_{2}}(-qE)ds= \int_{r_{1}}^{r_{2}} \left(-k\frac{q_{0}q}{r^2} \right)ds=k\frac{q_{0}q}{r_{2}}-k\frac{q_{0}q}{r_{1}}$. Electrical forces are *conservative*, or when exerted to a charge the work done is dependent on and only on the two ends of the route. This can be proved by combining electric field's irrotational property and Poincare's lemma.  {Intuitive explanation of conservative force/field and 判断保守场的方法（如存在势函数，旋度为零……）}
	1. Potential: The potential difference is defined as $\varphi_{12}=\frac{W_{1\to 2}}{q_{0}} = \int_{r_{1}}^{r_{2}}(-E)$.  When hold P1 fixed $\varphi$ becomes a scalar field/function/0-form. One can easily verify that such $\varphi$ satisfies $\Psi = -d\varphi$($E=-\nabla \varphi$). We usually choose P1 to be at infinity(unless in this case the potential at a finite distance becomes infinity). 
	2. Electrostatic energy: The work **exerted** to assemble a specific arrangement of charges. By superposition principle, we may assume the charges to be placed one by one. $W=\sum_{j>i}k\frac{q_{i}q_{j}}{r_{ij}}= \frac{1}{2}\sum_{i}q_{i} \sum_{j \neq i}k \frac{q_{j}}{r_{ij}} =  \frac{1}{2}\sum_{i}q_{i} \sum_{j \neq i} U_{ji} = \frac{1}{2}\sum_{i}q_{i} \varphi_{i}$(for discrete distribution). $W=\frac{1}{2} \int \rho \varphi d\mathcal{V}$(for continuous distribution). 
6. Conductors: "The electrical difference between a good conductor and a good insulator is as vast as the mechanical difference between a liquid and a solid."
	1. Stationary state: The electric field strength inside a (homogeneous and isotropic $\sim$ non-electrostatic force doesn't exist) conductor must be $0$ or the freely moving charge carriers is in motion. Consequentially the surface is equipotential. When placed in an external field, charge carriers move to maintain $E=0$ inside. "Because this "automatically" happens in every conductor, it is really only the surface of a conductor that we need to consider when we are concerned with the external fields."

| Properties                      | Insulators                                                                                                                                                                                                               | Conductors                                                                                                                                                                                                                                |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Electric field inside           | Depends on the distribution of charges: uniform(symmetrical) distribution on a sphere -> $E=0$(Gauss's law); otherwise -> $E \neq 0$. External electric field may polarise the dielectric and influence $E$. (see below) | $E=E_{\text{external}}+E_{\text{induced}}=0$                                                                                                                                                                                              |
| Surface                         | $\nabla^2 \varphi=-\frac{\rho}{\varepsilon_{0}}$. Specifically, it's equipotential when charges are uniformly distributed on a sphere.                                                                                   | Equipotential. ($\rho =0$, note that $\sigma$ needs not to be zero)                                                                                                                                                                       |
| Charge distribution             | Depends on the structure of the material and external field. Greater curvature -> greater $\rho$.                                                                                                                        | Only on the external surface. Greater curvature -> greater $\sigma$.($\sigma = \partial_{n}\varphi$ where $\varphi\|_{S}=\text{const},\varphi\|_{V}=0$. With the gap a constant, curvature $\ce{^}$= gradient $\ce{^}$= $\sigma$$\ce{^}$) |
| Electric field **just** outside | Depends on $\varphi$.                                                                                                                                                                                                    | $E=\frac{\sigma}{\varepsilon_{0}}$, perpendicular to the surface.                                                                                                                                                                         |

![](https://img.ksmtang.com/obsidian/Pasted image 20260314114425.png)![](https://img.ksmtang.com/obsidian/Pasted image 20260314114438.png)![](https://img.ksmtang.com/obsidian/Pasted image 20260314114455.png)
![](https://img.ksmtang.com/obsidian/Pasted image 20260319142544.png)
	2. General method to analyse $E_{rem} \to \text{Charge distribution}$: $E_{rem}=E_{total}-E_{local}$. 
		1. $\rho d\mathcal{V}$: $E_{local}= \frac{\rho r}{3\varepsilon_{0}} \to 0,d\mathcal{V} \to 0$. $\sigma d\mathcal{A}$ is the same. However, $\lambda dl$ generates a field which cannot converge. 
	3. Induced charges and compensating charges: {more details on electrostatic induction, e.g. opposite charges accumulate at the far end}
	4. Shielding: $E=0$ inside a hollow conductor of any shape which is neutral in electric charge. This can be derived smartly by applying the unique theorem. 
	5. {Applications of conductor's properties, e.g. point discharge}
7. Capacitance and capacitors: 
	1. $\varphi$ and $Q$: $Q=\oint_{S}\sigma d\mathcal{A}$. When $\varphi_{0}$(on the surface of the conductor) becomes $k$ times larger, by unique theorem we know that $\varphi$(everywhere) is $k$ times larger too. Then $\sigma' = \varepsilon_{0} E = -\varepsilon_{0} \nabla \varphi'=k\sigma$(dependent on the value of $\varphi$ in the **neighbourhood** of the surface), resulting in $Q'=kQ$. Suppose these changes are caused by a perturbation $f(t)$. We've proved that $\varphi ,\varphi_{12}, Q,E,\sigma$ response homogeneously(齐次地)(in effect also linearly, 线性地, guaranteed by superposition law) to however large $f(t)$. 
	2. Capacitance: $C:=\frac{Q}{\varphi}$. For convenience, define $u$ to be the solution of $\nabla^2u|_{V}=0$($V$=outside) and $u|_{S}=1$. Then $\sigma = -\varepsilon_{0}\varphi_{0}\partial_{n} u$, $C=-\varepsilon_{0}\oint_{S} \partial_{n}ud\mathcal{A}$. We noticed that $\nabla \cdot (u\nabla u)= \nabla u \cdot \nabla u + u \cdot \nabla \cdot(\nabla u)$. By Gauss' theorem, we have $\int_{V} \nabla \cdot (u\nabla u) d\mathcal{V} = \oint_{S} u\nabla u \cdot nd\mathcal{A} = \oint_{S} u\partial_{n}u d\mathcal{A}$(*Green's First Identity*). Substitute the left side with the equation above(and apply $\nabla^2 u|_{V}=0,u_{S}=1$): $\int_{V} |\nabla u|^2 d\mathcal{V} = \oint_{S} \partial_{n}u d\mathcal{A}$(note here $V$ means inside). We can now write $C=\varepsilon_{0} \int_{V} |\nabla u|^2 d\mathcal{V}$ and find it relative to (1) $V$, the shape of the conductor; (2) $u$, which can be obtained from the information about **the shape and the external field**. 
		1. $Q=\varepsilon_{0} \varphi_{0} \int_{V} |\nabla u|^2 d\mathcal{V}$, $W=\int UdQ = \frac{1}{2}C\varphi_{0}^2 = \frac{\varepsilon_{0}}{2} \varphi_{0}^2 \int_{V} |\nabla u|^2 d\mathcal{V} = \frac{\varepsilon_{0}}{2} \int_{V} |\nabla \varphi|^2 d\mathcal{V}$. 
			1. Hence the energy density $\frac{dW}{d\mathcal{V}}= \frac{1}{2}\varepsilon_{0}E^2$. 
		2. Multiple conductors: Define $u_{i}$ such that $\nabla^2u_{i}|_{V_{i}}=0,u_{i}|_{S_{j}}=\delta_{ij}$. Decompose $\varphi$ w.r.t $\{ u_{i} \}$, $\varphi=\sum \varphi_{i}u_{i}$. Then $Q_{i} = \varepsilon_{0} \int_{S_{i}}\partial_{n}\varphi d\mathcal{A} = \sum_{j} C_{ij} \varphi_{j}$, $W = \frac{1}{2} \sum_{i,j} C_{ij} \varphi_{i} \varphi_{j}$, where $C_{ij} = \varepsilon_{0} \int_{S_{i}} \partial_{n} u_{j} d\mathcal{A}$. 
![](https://img.ksmtang.com/obsidian/Pasted image 20260317104409.png)
			1. Let capacitance matrix $C\mathbf{}=\begin{pmatrix}C_{ij}\end{pmatrix}_{i,j}$ and vectors $\varphi = (\varphi_{i})_{i},Q=(Q_{i})_{i}$. Then $Q=C \varphi$, $W=\frac{1}{2} \varphi^TC\varphi$. 
			2. $C_{ij}=C_{ji}$: Notice $0=\int_{V}(u_{i}\nabla ^2u_{j}-u_{j} \nabla^2u_{i})d\mathcal{V}=\int_{\partial V}( u_{i}\partial_{n}u_{j }-u_{j}\partial_{n }u_{i} )d\mathcal{S}$(*Green's Second Identity*). Here $\partial V=\bigcup S_{k}$. Therefore $0=\sum_{k}\int_{S_{k}}(\delta_{ik}\partial_{n} u_{j} - \delta_{jk} \partial_{n}u_{i})d\mathcal{A} = \int_{S_{i}}\partial_{n} u_{j}d\mathcal{A} - \int_{S_{j}}\partial_{n} u_{i}d\mathcal{A} = \frac{1}{\varepsilon_{0}}(C_{ij}-C_{ji})$. This can be derived also by writing $W= \frac{\varepsilon_{0}}{2} \int_{V} |\nabla \varphi|^2 d\mathcal{V} = \frac{\varepsilon_{0}}{2} \int_{V} \left( \sum_{i} \varphi_{i} \nabla u_{i} \right) \cdot \left( \sum_{j} \varphi_{j} \nabla u_{j} \right) d\mathcal{V} = \frac{1}{2} \sum_{i,j}\varphi_{i}\varphi_{j}C'_{ij}$, where $C'_{ij}=\varepsilon_{0} \int (\nabla u_{i} \cdot \nabla u_{j}) d\mathcal{V}$. One can easily prove that $C'=\begin{pmatrix}C'_{ij}\end{pmatrix}$ is symmetric and $C'_{ij}=C_{ij}$. 
			3. Since $Q=\nabla W$(w.r.t $\varphi$), $\varphi$ can be treated as (generalised) coordinates, $Q$ as force and $W$ remains to be the energy(Compare $W=\frac{1}{2}kx^2,F=-kx$). Another view, we chose $\varphi_{0}$ to measure the "scale": $Q=\varphi_{0}Q_{0}$, $W=\varphi_{0}^2W_{0}$, etc. Naturally $\{ \varphi_{i} \}$ measure the scale in different directions, constructing a coordinate system. 
	3. Capacitor: "The object itself, comprising the two conductors, insulating material to hold the conductors apart, and perhaps electrical terminals or leads, is called a *capacitor*. " Since $C_{12}=C_{21}$, we can define such value as the capacitance of the capacitor. $C=\frac{Q}{\varphi_{12}}$. Most equations for one conductor can be applied, e.g. $W=\frac{1}{2} C\varphi_{12}^2$. 
8. Dielectrics: The material between two plate react to external electric field in different ways. For conductors, the free charges can move an "infinite" distance. For air, the electrons can hardly move. For those in the middle, a specific amount of +/- charges appear on both surface. Compare with the case of vacuum. Consider a conductor connected to a power source. After inserting the dielectric,  $\varphi_{12},E$ remain the same. Then $Q-\int \sigma_{-} = Q_{0}$. Let $Q=\varepsilon_{r} Q_{0}$. $\varepsilon_{r}$(*relative dielectric constant*) can be used to measure the dielectric property(**not** conductive property) of the material. 
	1. "The theory which enables us to do this was fully worked out by the physicists of the nineteenth century. Lacking a complete picture of the atomic structure of matter, they were more or less obliged to adopt a macroscopic description...... we shall find it hard to answer some rather obvious-sounding questions...... For instance, what is the strength of the electric field inside the dielectric slab when there are certain charges on the plates? Electric field strength is defined by the force on a test charge. How can we put a test charge inside a perfectly dense solid, without disturbing anything, and measure the force on it? What would that force mean, if we did measure it?......Fortunately another line of attack is available to us, one that leads up from the microscopic or *atomic* level."
![](https://img.ksmtang.com/obsidian/Pasted image 20260320120002.png)![](https://img.ksmtang.com/obsidian/Pasted image 20260321115843.png)![](https://img.ksmtang.com/obsidian/Pasted image 20260320120932.png)
	2. Applying $E'=- \frac{P}{\varepsilon_{0}}$: $\frac{P}{E}= \varepsilon_{0} (\varepsilon_{r}-1)=: \varepsilon_{0}\chi_{e}$, with $\chi_{e}$ the *electric susceptibility*. $\chi_{e}$ is determined by the properties of the material. Therefore $\varepsilon_{r}=1+\chi_{e}$ is an intrinsic property, rather than a measured value. (Ex2.6)
	3. Recall that $\rho_{bound} = -\nabla \cdot P$. Let *electric displacement* vector $D=\varepsilon_{0}E+P$: $D=\varepsilon_{0}E+\varepsilon_{0} \chi_{e}E=\varepsilon_{0}\varepsilon_{r}E=:\varepsilon E$, where *dielectric constant* $\varepsilon=\varepsilon_{0}\varepsilon_{r}$. Then $\nabla \cdot D = \rho + \nabla \cdot P = \rho - \rho_{bound}=\rho_{free}$. Consequently $\sigma_{free}=D \cdot \hat{n}$. Now we can elaborate the model above(and some generalised cases) in a more essential way. {the motivation for defining this new parameter}
		1. $\varphi_{12}$ fixed: $\sigma_{free}=D=\varepsilon E=\varepsilon E_{0} =\varepsilon_{r}\sigma_{0}$(-> $Q=\varepsilon_{r}Q_{0}$). 
		2. $Q$ fixed: $D=\sigma_{free}=\sigma_{0}$. $E=\frac{D}{\varepsilon}=\frac{\sigma_{0}}{\varepsilon_{0} \varepsilon_{r}} = \frac{1}{\varepsilon_{r}}E_{0}$. 
		3. Note: The equations above apply equally to conductors as well as capacitors. But for conductors, $\sigma$ is not a constant and is determined by(solved from) $D,P$. (Ex: 10.9,10.10/Ex2.5,10.11,溶剂的亲电性,Ex2.4)
![](https://img.ksmtang.com/obsidian/Pasted image 20260321124420.png)
	4. Details on $\chi_{e}$: 
		1. Polar molecules: $\langle p \rangle \simeq \frac{p_{0}^2}{3k_{B}T}E$($p_{0}$=the moment of one molecule, $k_{B}$=Boltzmann constant, $T$=thermodynamic scale). Then $\chi_{e}= \frac{Np_{0}^2}{\varepsilon_{0}3k_{B}T} \propto \frac{1}{T}$. 
		2. Non-polar molecules: Apply $E'=-\frac{P}{3\varepsilon_{0}}$. We have $P=\alpha N\left( E+\frac{P}{3\varepsilon_{0}} \right) = \frac{N\alpha}{1-N\alpha/3\varepsilon_{0}}E$, or $\frac{\varepsilon _r-1}{\varepsilon_{r}+2}= \frac{N\alpha}{3\varepsilon_{0}}$(*Clausius-Mossotti equation*). 
		3. Anisotropy materials: $P$ may not be parallel to $E$. If $\chi_{e}$ is dependent from $E$, the material is called to be linear. 
		4. More examples: {more examples of materials, e.g. 压电体, 永极体}
	5. Essential laws & theorems adapted for $D$: 

| Category                        | Electric Field $E$                                                                                                       | Electric Displacement Field $D$                                            |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| Definition                      | Force per unit charge: $E = \frac{F}{q}$                                                                                 | Accounts for free charge and polarization: $D = \varepsilon_0 E + P$       |
| Relation to Medium              | Depends on medium (affected by polarization)                                                                             | Separates free and bound charge effects                                    |
| Vacuum Relation                 | $E = \frac{D}{\varepsilon_0}$                                                                                            | $D = \varepsilon_0 E$                                                      |
| Linear Dielectric               | $E = \frac{D}{\varepsilon}$                                                                                              | $D = \varepsilon E$                                                        |
| Gauss’s Law                     | $\oint E\cdot dS = \frac{Q_{\text{total}}}{\varepsilon_0}$, $\nabla \cdot E = \frac{\rho_{\text{total}}}{\varepsilon_0}$ | $\oint D\cdot dS = Q_{\text{free}}$, $\nabla \cdot D = \rho_{\text{free}}$ |
| Circulation Law                 | $\nabla \times E = 0$ (conservative field)                                                                               | No simple general curl expression                                          |
| Potential Relation              | $E = -\nabla V$                                                                                                          | No direct scalar potential                                                 |
| Field Line Origin/End           | Start on positive charges, end on negative charges (including bound charges)                                             | Start/end only on free charges                                             |
| Field Line Continuity           | Generally discontinuous across boundaries                                                                                | Normal component tied to free surface charge                               |
| Boundary Condition (Normal)     | $E_{1n} - E_{2n} = \frac{\sigma_{\text{total}}}{\varepsilon_0}$                                                          | $D_{1n} - D_{2n} = \sigma_{\text{free}}$                                   |
| Boundary Condition (Tangential) | Tangential component continuous: $E_{1t} = E_{2t}$                                                                       | Tangential component generally discontinuous                               |
| Mathematical Nature             | Conservative (electrostatics)                                                                                            | Generally non-conservative                                                 |
| Application                     | General electric field analysis                                                                                          | Especially useful in materials (dielectrics)                               |
| Energy Density                  | $\frac{1}{2} \varepsilon E^2$                                                                                            | $\frac{1}{2} E \cdot D$                                                    |
| Units                           | V/m                                                                                                                      | C/m²                                                                       |




## Circuit Analysis 电路分析

1. Electric currents: To evaluate the motion of charges(macroscopically), define current $I:=\frac{dq}{dt}$ to be the amount of charge passing a fixed mark in unit time. 
	1. 


## Magnetostatic and Quasi-stationary Electromagnetic Fields 静磁学与准静态电磁场









## Electromagnetic Waves 电磁波













prompt: 我将给你一份物理学课程的提纲，将这份提纲做修正、扩充。要求：（1）提纲的具体内容不应修改。扩充的内容也要基于提纲中给定的符号、角标、名称。例外情况是有明显语病、表意不明、不流畅措辞的和公式不标准的（例如用$df$而不是$\mathrm{d}f$，物理单位使用斜体而非正体），此时需要合理修正。（2）需要扩充的内容的大致说明在{}中，这些内容的位置和{}的位置相同，有些是用于补充，有些充当提纲（此时需要先写出提纲再补充细节）。（3）所有内容以英文输出，术语遵循学术标准，措辞尽量简洁（允许口语化表达）。（4）新定义的物理量如果没有给出单位需要备注。（5）所有括号，逗号等使用半角。现在给你一个案例：input=「The naming: Benjamin Franklin (1706–1790) gave our modern terms positive and negative to vitreous and resinous electricity, respectively. "丝绸摩擦过的玻璃棒"=positive, "毛皮摩擦过的硬橡胶棒"=negative. {The structure of those materials and the chemical mechanism behind the phenomena}」output=「The naming: Benjamin Franklin (1706–1790) gave the modern terms positive and negative to vitreous and resinous electricity, respectively. "丝绸摩擦过的玻璃棒"=positive, "毛皮摩擦过的硬橡胶棒"=negative. {Glass rods become positively charged because the oxygen atoms in their surface silicon-oxygen bonds have high electronegativity, yet glass loses electrons more readily than silk in the triboelectric series. Hard rubber rods become negatively charged primarily because the sulfur atoms in their vulcanized cross-linked structure have strong electronegativity, making them prone to gain electrons from fur.}」你可以看到其中修正了一些语法问题并正确扩充了内容（注意扩充内容要准确、简洁），且几乎没有修改原来的内容。以下是提纲：


prompt2: 我将给你一份物理学课程的提纲，将提纲适当分块并修正以配合latex的beamer（所有需要用的格式/颜色都定义了，你只需要输出每个frame的代码即可）。（1）提纲数字列表的第一级约等于subsection（即「第零级」对于section），但beamer中实际没有subsection的层级，因此你应该把这个标记为frame的参数，即\begin{frame}{这里是参数}\end{frame}；接下来的第二级（如果有）尽量做到每一个都独立为一个frame，格式视情况而定，但一定要确保能够一眼看出「这是下一个话题了」。（2）原来的提纲中有一些特殊格式：用双引号括起来且很明显是大段引用的，用colorbox加斜体（格式为\begin{block}{title}
content...
\end{colorblock}）；很明显是Since...then...we have...的大段公式推导，在合理的地方设置为行间公式（例如公式过长或者角标太多）；还有一种情况就是出现了一些超长论述（如Glass rods become positively charged because the oxygen atoms in their surface silicon-oxygen bonds have high electronegativity, yet glass loses electrons more readily than silk in the triboelectric series. Hard rubber rods become negatively charged primarily because the sulfur atoms in their vulcanized cross-linked structure have strong electronegativity, making them prone to gain electrons from fur.），为了区分主次，这些大段论述也像刚才说的那样放在colorblock中，但不加斜体。（3）提纲是markdown格式，其中的粗体、斜体、表格等需要转换为latex格式。（4）所有内容以英文输出。不要修改任何一个单词/表达（可以修改标点；在整理公式推导时可以合理变换引导词如then; we have; etc.）！！！！！！（5）作为尺寸的参考，这些内容几乎占满了一整个frame「\begin{block}{Observed fact}
        \itshape Electricity began to be studied scientifically in the eighteenth century. Two kinds of electricity were distinguished: resinous electricity is left on an amber rod when rubbed with fur, while vitreous electricity is left on a glass rod when rubbed with silk. Unlike charges were found to attract each other, while like charges repel each other.
    \end{block}
    \textbf{Equivalence class.} \\
    \textit{Definition:} An equivalence relation $\sim$ on a set of charged bodies satisfies reflexivity ($A \sim A$), symmetry ($A \sim B \implies B \sim A$), and transitivity ($A \sim B \land B \sim C \implies A \sim C$). Here, $A \sim B$ if body $A$ and body $B$ exert forces in the same direction on a third test charge. This partitions all charged objects into two disjoint equivalence classes: positive and negative.」接下来是提纲：

電磁気学補完計画











