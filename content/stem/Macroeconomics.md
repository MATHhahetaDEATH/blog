---
tags:
publish: true
---
## Ch1 The Solow Growth Model

1. Assumptions. 
	1. $Y(t)=F(K(t),A(t)L(t))$, Y=Output, K=Capital, A=Knowledge/Effectiveness of labor, L=Labor. 
		1. AL=Effective labor. The parameter $A$ may enter in the form of $AK,AL,AF$. However, since the ratio of capital to output $\frac{K}{Y}$ tends to be a constant over extended periods(*balanced growth path*, see following), the most compatible assumption would be $AL$(labor augmenting). 
	2. $F(cK, cAL)=cF(K,AL)$; $\frac{Y}{AL} = F\left( \frac{K}{AL},1 \right)$, $y = f(k)$. *Constant Returns to Scale* in its two arguments $K, AL$. 
		1. The combination of two separate assumptions: 
			1. The economy is big enough that there will be no more gains from further specialisation. (the optimal efficiency within the given constraints has already achieved)
			2. Factors other than K,AL(natural resources, etc.) are relatively unimportant. 
		2. $f(0)=0,f'(k)>0,f''(k)<0$; (Inada conditions)$f'(k)\to \infty, k\to 0$, $f'(k) \to 0, k\to \infty$. 
		3. Example(Cobb-Douglas function): $F(K,AL)=K^{\alpha}(AL)^{1-\alpha}, 0<\alpha<1$, $f(k)=k^{\alpha}$. 
			1. In and only in this case $AL,AK,AF$ all satisfy CRS. 
	3. $\dot{L}(t)=nL(t), \dot{A}(t)=gA(t)$; $\dot{K}(t) = (Y(t)-C(t))-\delta K(t)$, Y=Production(per unit time), C=Consumption(per unit time), I=Y-C=Investment(EX=0), $\delta$=Depreciation rate(per unit time) of capital. 
		1. Corollary: $\ln L(t)=\ln L(0)+nt$, $L(t)=L(0)e^nt$. 
		2. $Y$ is divided into $I,C$ in a fixed proportion. $\dot{K}(t)=sY(t)-\delta K(t)$. To reach a steady state, $sY(t)=\delta K(t)$. 
2. Dynamics of $k$: $\dot{k}(t)=sf(k(t))-(n+g+\delta)k(t)$, actual investment - breakeven investment. 
	1. To satisfy the assumptions above, there must be one and only one intersect of actual and breakeven investment, the point of convergence $k^*$. 
	2. *Balanced growth path*: each variable of the model is growing at a constant rate(deduced from the condition $k=k^*$). 
!https://img.ksmtang.com/obsidian/fallback.jpeg]!https://img.ksmtang.com/obsidian/fallback.jpeg]
3. Impact of change in the saving rate: A permanent increase in the saving rate $s$ lifts the curve of actual investment(thus the value of $k^*$ rises, the balanced growth path changes). 
	1. Output: produces a temporary increase in the growth rate of $\frac{Y}{L}$ and $\dot{k}$. *Level effect* instead of *Growth effect*. (only technological progress have growth effect)
	2. Consumption: $c=(1-s)f(k)$ decreases immediately then rise slowly with the increase of $f(k)$ until $c^* = f(k^*)-(n+g+\delta)k^*$. Since $\frac{ \partial c^* }{ \partial s }=(f'(k^*)-(n+g+\delta)) \frac{ \partial k^* }{ \partial s }$ where $\frac{ \partial k^* }{ \partial s } >0$, $c^*$ increases iff $f'(k^*)$(the marginal product of capital) exceeds $n+g+\delta$. As $s$ increases from a low value, consumption first increases then decreases, reaching its peak when $s$ makes $\frac{ \partial c^* }{ \partial s }=0$(the corresponding value of $k^*$=the *golden-rule* level). 
4. Quantitative implications. 
	1. $\frac{ \partial y^* }{ \partial s } = f'(k^*) \frac{ \partial k^* }{ \partial s }$, where $\frac{ \partial k^* }{ \partial s } = \frac{f(k^*)}{(n+g+\delta)-sf'(k^*)}$(directly from $\frac{ \partial \dot{k} }{ \partial s }=0$). Ultimately we have $\frac{s}{y^*} \frac{ \partial y^* }{ \partial s } = \frac{\alpha_{K}(k^*)}{1-\alpha_{K}(k^*)}$ where $\alpha_{K}$ denotes the elasticity of output w.r.t $k=k^*$(namely $\alpha_{K} = \frac{kf'(k)}{f(k)}$). 
		1. A way to estimate: If capital earns its marginal product, the share of total income that goes to capital(on the balanced growth path) is $\frac{k^*f'(k^*)}{f(k^*)}$, i.e. $\alpha_{K}(k^*)$. The value(in most countries) is about $\frac{1}{3}$ then the elasticity of $y$ w.r.t $s$ is about $\frac{1}{2}$. 
	2. Speed of convergence: $\dot{k} \sim -\lambda(k(t)-k^*)$ when $k\to k^*$, where $\lambda = -\frac{ \partial \dot{k} }{ \partial k } \big|_{k=k^*} = (1-\alpha_{K}(k^*))(n+g+\delta) >0$. 
5. Conclusion: Economic growth and cross-country income differences can be explained only by the advancement/difference of the effectiveness of labor(i.e. technological progress). 
6. Applications:
	1. Growth accounting: $\frac{\dot{Y}(t)}{Y(t)} = \alpha_{K}(t) \frac{\dot{K(t)}}{K(t)} + \alpha_{L}(t) \frac{\dot{L}(t)}{L(t)} + R(t)$, where $\alpha_{K},\alpha_{L}$ denotes the elasticity of output w.r.t capital, labor, $R(t)=\frac{A(t)}{Y(t)} \frac{ \partial Y(t) }{ \partial A(t) } \frac{\dot{A}(t)}{A(t)}$. Then $\frac{\dot{Y}(t)}{Y(t)} - \frac{\dot{L}(t)}{L(t)} = \alpha_{K}(t) \left( \frac{\dot{K}(t)}{K(t)} - \frac{\dot{L}(t)}{L(t)} \right) + R(t)$, or $\frac{d}{dt} \ln \left( \frac{Y}{L} \right) = \alpha_{K} \frac{d}{dt} \ln\left( \frac{K}{L} \right) + R$. 
	2. Convergence. 
7. Environment & economic growth: 
	1. A baseline case: Let $Y(t)=K(t)^{\alpha} R(t)^{\beta} T(t)^{\gamma} (A(t)L(t))^{1-\alpha-\beta-\gamma}$, where $R,T$ denote the resources, amount of land and $\dot{T}(t)=0, \dot{R}=-bR(t)$ when $t$ is suff large. Then $g_{Y}(t)=\alpha g_{K}(t)+\beta g_{R}(t)+\gamma g_{T}(t)+(1-\alpha-\beta-\gamma)\left[g_{A}(t)+g_{L}(t)\right]$. 
		1. $g_{K}=\frac{sY(t)}{K(t)}-\delta$, therefore when $g_{k}$ exceeds its BGP value, $\frac{Y}{K}$ falls, causing $g_{k}$'s decrease, thus $g_{k}$ can finally converge to its BGP value. 
		2. $g_{Y/L}^{bgp}=\frac{ (1-\alpha-\beta-\gamma)(n+g)-\beta b }{1-\alpha}-n = \frac{ (1-\alpha-\beta-\gamma)g-\beta b - (\beta+\gamma)n }{1-\alpha}$, that means technological advance serves as a spur and land/resource limitation as a drag. 
	2. An illustrative calculation: Consider a compared economy where $\dot{T}(t)=nT(t),\dot{R}(t)=nR(t)$. Here $\tilde{g}_{Y/L}^{bgp} = \frac{ (1-\alpha-\beta-\gamma)g }{1-\alpha}$, then $Drag = \frac{ \beta b + (\beta+\gamma)n }{1-\alpha}$. Actually the influence of such drag is somewhat smaller that imagination. 
	3. A complication: 


## Ch2 Part A The Ramsey-Cass-Koopmans Model

1. Assumptions: (differences only)
	1. No depreciation(only for convenience): $\dot{K}(t) = Y(t)-\zeta(t)$, here $\zeta$ denotes total consumption. 
	2. Firms: They all have a common production function and common prices for all factors; CRS holds. Thus total output $Y(t)=F(K(t),A(t)L(t))$. Firms maximise profits. Since they are owned by households, any profits earned accrue to the households. 
	3. Households: The size of each grows at rate $n$. Each member supplies $1$ unit of labor. It rents every capital it owned to firms(with initial capital holdings of $\frac{K(0)}{H}$). Consumption + saving = labor + capital income. Utility function: $U=\int_{t=0}^{\infty} e^{-\rho t}u(C(t)) \frac{L(t)}{H} dt$, where $C(t)$=consumption of each member, $u(\cdot)$=instantaneous utility function(utility of each member at a given date), $L(t)$=total population($\frac{L(t)}{H}$=$\#$ members of the household), $\rho$=the discount rate. 
		1. $u(C(t))=\frac{C(t)^{1-\theta}}{1-\theta}, \theta>0, \rho-n-(1-\theta)g>0$, the CRRA(constant-relative-risk-aversion) utility. 
2. Behaviours: 
	1. Firms: $F(K,AL)=rK+wL$(with CRS, Euler's theorem implies $F= \frac{ \partial F }{ \partial K }K + \frac{ \partial F }{ \partial L }L$ then firms have zero profits), $r(t)=f'(k(t))$, $w(t)=f(k(t))-k(t)f'(k(t))$. 
	2. Households: 
		1. Budget constraint: $\int_{t=0}^{\infty} e^{-R(t)}C(t) \frac{L(t)}{H}dt \leq \frac{K(0)}{H} + \int_{t=0}^{\infty} e^{-R(t)}W(t) \frac{L(t)}{H} dt$, where $W$=labor earning per person(=$Aw$), $C$=consumption per person(=$Ac$). Since the household's wealth at time $s$ is $\frac{K(s)}{H}=e^{R(s)} \frac{K(0)}{H} + \int_{t=0}^s e^{R(s)-R(t)}(W(t)-C(t)) \frac{L(t)}{H} dt$, the constraint can be written in the form of $\lim_{ s \to \infty } e^{-R(s)} \frac{K(s)}{H} \geq 0$(*no-Ponzi-game condition*). 
		2. Maximisation: $U=B\int_{0}^{\infty} e^{-\beta t} \frac{c(t)^{1-\theta}}{1-\theta} dt$, where $B=\frac{A(0)^{1-\theta}L(0)}{H}$ and $\beta=\rho-n-(1-\theta)g >0$. $Constraint=k(0) + \int_{0}^{\infty} (w(t)-c(t))e^{(n+g)t-R(t)}dt \geq 0$, or $\lim_{ s \to \infty } e^{-R(s)} e^{(n+g)s}k(s) \geq 0$. When lifetime utility is maximised, the budget constraint takes the equality. Set $\mathcal{L}=U+\lambda \cdot Constraint$, the first-order condition for $c(t)$ is $Be^{-\beta t}c(t)^{-\theta} = \lambda e^{-R(t)} e^{(n+g)t}$. Take logs and take derivative w.r.t. $t$, $\frac{\dot{c}(t)}{c(t)} = \frac{r(t)-\rho-\theta g}{\theta}$(*Euler Equation*). Then $\frac{\dot{C}(t)}{C(t)}=\frac{r(t)-\rho}{\theta}$. Here $c(0)$ satisfies and is determined by $c(0) \int_{0}^{\infty} \exp\left( \frac{(1-\theta)R(t)+(\theta n-\rho)t}{\theta} \right)dt = \int_{0}^{\infty} e^{-R(t)}e^{(n+g)t}c(t)=k(0)+\int_{0}^{\infty}e^{-R(t)}e^{(n+g)t}w(t)$. 
3. Dynamics: 
	1. $c$: $\frac{\dot{c}(t)}{c(t)} = \frac{f'(k(t))-\rho-\theta g}{\theta}$. Let $k=k^*$ when $\dot{c}(t)=0$. Then $c$ is rising when $k<k^*$, falling when $k>k^*$. 
	2. $k$: $\dot{k}(t)=f(k(t))-c(t)-(n+g)k(t)$. $c$ is rising in $k$ when $\dot{k} >0$, falling when $\dot{k}<0$. 
	3. The phase diagram(given initial values of $c,k$): Here the peak of the $\dot{k}=0$ curve is $k_{GR}$ which satisfies $f'(k_{GR})=n+g$(when $c$ reaches its peak under the condition of equilibrium). Since $\beta >0$ and $f'$ is decreasing in $k$, $k^*<k_{GR}$. The origin, intersection of $c=0$ and $\dot{k}=0$ and E are stationary point($\dot{c}=\dot{k}=0$). 
!https://img.ksmtang.com/obsidian/fallback.jpeg]!https://img.ksmtang.com/obsidian/fallback.jpeg]
	4. The initial value of $c$: When $c$ starts at a point above F, $k$ would eventually be negative; below F, $\lim_{ s \to \infty } e^{-R(s)} e^{(n+g)s}k(s) >0$ indicating that the utility function has not maximised. Therefore $c$ can only be at the level of F, constituting the *saddle path*. 
!https://img.ksmtang.com/obsidian/fallback.jpeg]
4. Efficiency: For social planners who control the allocation between $C,K$ directly, to reach Pareto efficiency is to find an allocation path $\{ C(t),K(t) \}_{t=0}^{\infty}$ to maximise $\int_{0}^{\infty} e^{-\rho t}u(C(t))dt$ under the constraint $\dot{k}(t)=f(k(t))-c(t)-(n+g)k(t)$. Households' and firms' behaviour yield the same result. Since planner's choice can maximise the welfare, the competitive equilibrium maximises it as well. (the *first welfare theorem* with dynamics taken into account)
5. The balanced growth path: Once the economy converges to point E, $c,k,y,s$ are constant and the result of Solow model can be applied. 
6. The effects of a fall in the discount rate: Note that the stock of capital $k$ cannot change discontinuously. Let $\tilde{c}=c-c^*,\tilde{k}=k-k^*$. Around the BGP we have $\dot{\tilde{c}} \sim \frac{ \partial \dot{c} }{ \partial k } \tilde{k} + \frac{ \partial \dot{c} }{ \partial c } \tilde{c}, \dot{\tilde{k}} \sim \frac{ \partial \dot{k} }{ \partial k } \tilde{k} + \frac{ \partial \dot{k} }{ \partial c } \tilde{c}$. Substitute the dynamics of $c,k$ in, $\dot{\tilde{c}} \sim \frac{f''(k^*)c^*}{\theta} \tilde{k}, \dot{\tilde{k}} \sim \beta \tilde{k}-\tilde{c}$, or $\frac{\dot{\tilde{c}}}{\tilde{c}} \sim \frac{f''(k^*)c^*}{\theta} \frac{\tilde{k}}{\tilde{c}}, \frac{\dot{\tilde{k}}}{\tilde{k}} \sim \beta - \frac{\tilde{c}}{\tilde{k}}$. 
	1. When $\tilde{c},\tilde{k}$ rise/fall at a same rate, $\frac{\tilde{c}}{\tilde{k}}$ remains constant i.e. the economy moves along a specific line $\tilde{c}=C_{1}e^{\mu t},\tilde{k}=C_{2}e^{\mu t}$ to point E. Actually $\mu^2-\beta \mu + \frac{f''(k^*)c^*}{\theta}=0$ has two solutions $\mu_{1}<0,\mu_{2}>0$, corresponding to line AA(converge to E) and BB(away from E, omitted). 
!https://img.ksmtang.com/obsidian/fallback.jpeg]!https://img.ksmtang.com/obsidian/fallback.jpeg]
7. The effects of government purchases: Gov buys output at rate $G(t)$(per unit of $AL$ per unit time). The purchases are all devoted to public consumption; financed by taxes of amount $G(t)$. Then $\dot{k}(t)=f(k(t))-c(t){\color{blue} -G(t)}-(n+g)k(t)$(consumption) and $Constraint=k(0) + \int_{0}^{\infty} (w(t){\color{blue} -G(t)}-c(t))e^{(n+g)t-R(t)}dt \geq 0$(tax). 
	1. A permanent increase in $G(t)$: Since the implication of this increase is even in time, adjusting the time pattern of consumption won't raise the value of $U$. The size of the immediate fall in consumption equals $G(t)$. (compare the case of Solow model where such increase will crowd out investment $I=s(Y-GovPurchase)$)
	2. A temporary increase in $G(t)$: Note that $c$ cannot change discontinuously at the time that $G$ returns, otherwise the utility function wouldn't be optimal. Households tend to pay the additional taxes from the savings(short-term, thus cut the investment, figure(c))/after reducing consumption(long-term, figure(a)). 
!https://img.ksmtang.com/obsidian/fallback.jpeg]


## Ch2 Part B The Diamond Model

1. Assumptions: There is turnover in the population. For simplicity, time is assumed to be discrete. Each individual lives for two periods(young&old): supplies $1$ unit of labor and divides income between consumption $C_{1,t}$(in the current period) and investment & consumes($C_{2,t}$) the saving and interest. Then $K_{t+1}=(w_{t}A_{t}-C_{1,t})L_{t}=s(r_{t+1})w_{t}A_{t}L_{t}$(for individuals born at time $t$). (Here $C_{1,t}$ actually means $c_{1,t}$, or per $AL$)
	1. Utility(CRSA): $U_{t}=\frac{C_{1,t}^{1-\theta}}{1-\theta} + \frac{1}{1+\rho} \frac{C_{2,t+1}^{1-\theta}}{1-\theta},\theta >0,\rho > -1$. 
2. Household behaviour: Budget constraint $C_{2,t+1}=(1+r_{t+1})(w_{t}A_{t}-C_{1,t})$. The optimisation requires $\frac{C_{2,t+1}}{C_{1,t}}=\left( \frac{1+r_{t+1}}{1+\rho} \right)^{1/\theta}$, or $\ln C_{2,t+1}-\ln C_{1,t} = \frac{1}{\theta} \ln \frac{1+r_{t+1}}{1+\rho} \sim \frac{r_{t+1}-\rho}{\theta}$. 
	1. Substituting for $C_{2,t+1}$: $C_{1,t} = \frac{(1+\rho)^{1/\theta}}{(1+\rho)^{1/\theta} + (1+r_{t+1})^{(1-\theta)/\theta}} A_{t}w_{t} = (1-s(r_{t+1}))A_{t}w_{t}$. Then $s(r_{t+1})=\frac{(1+r_{t+1})^{(1-\theta)/\theta}}{(1+\rho)^{1/\theta} + (1+r_{t+1})^{(1-\theta)/\theta}}$. $s$ is increasing in $r_{t+1}$ iff $\theta <1$. 
3. Resource constraint: Output = investment + consumption of the young + ... of the old, $Y_{t}=C_{1,t}L_{t} + C_{2,t}L_{t-1} + K_{t+1}$ or $f(k_{t})=C_{1,t} + \frac{1}{(1+n)(1+g)}C_{2,t} + (1+n)(1+g)k_{t+1}$. 
4. Dynamics: $k_{t+1} = \frac{1}{(1+n)(1+g)}s(r_{t+1})w_{t} =  \frac{1}{(1+n)(1+g)} s(f'(k_{t+1}))(f(k_{t})-k_{t}f'(k_{t}))$. 
	1. Simple case(logarithmic utility($\theta=1$), C-D production): $k_{t+1}= \frac{1}{(1+n)(1+g)} \frac{1}{2+\rho} (1-\alpha)k_{t}^{\alpha}$. From Banach fixed-point theorem we know $k$ would eventually converge to $k^* = \left(  \frac{1}{(1+n)(1+g)} \frac{1}{2+\rho} (1-\alpha) \right)^{1/(1-\alpha)}$. 
		1. After the economy converges to its BGP, results of Solow model can be applied. 
		2. A fall in $\rho$ results in a rise in $s$ and $k_{t+1}$. 
!https://img.ksmtang.com/obsidian/fallback.jpeg]
	2. Speed of convergence: Let $\lambda = \frac{dk_{t+1}}{dk_{t}}\big|_{k_{t}=k^*}$, $k_{t}-k^* \sim \lambda^t (k_{0}-k^*)$. Actually $\lambda = \alpha$ in the case below. 
	3. General cases: For example in (a) $k_{1}^*,k_{3}^*$ are stable while $k_{2}^*$ is unstable. 
!https://img.ksmtang.com/obsidian/fallback.jpeg]
5. The possibility of dynamic inefficiency: For example with assumptions of log, C-D and $g=0$, $f'(k^*)=\frac{\alpha}{1-\alpha} (1+n)(2+\rho),f'(k_{GR})=n$. $k^*$ may exceed or fall short of $k_{GR}$. 
	1. Economy is efficient iff $k^* \leq k_{GR}$: The social planner chooses sequences $\{ C_{1,t},C_{2,t},K_{t+1} \}_{t=0}^{\infty}$ to maximise $\sum_{t=0}^{\infty} e^{-\gamma t}U_{t}$ subject to the constraint of resources. Set Lagrangian $$\mathcal{L} = \sum_{t=0}^{\infty} e^{-\gamma t}\left( \frac{C_{1,t}^{1-\theta}}{1-\theta} + \frac{1}{1+\rho} \frac{C_{2,t+1}^{1-\theta}}{1-\theta} + \lambda_{t}\left( f(k_{t}) - C_{1,t} - \frac{1}{(1+n)(1+g)}C_{2,t} - (1+n)(1+g)k_{t+1} \right) \right).$$First-order conditions are$$\begin{cases} \lambda_{t}=C_{1,t}^{-\theta} & \text{w.r.t } C_{1,t} \\ \frac{C_{2,t+1}^{-\theta}}{1+\rho} = e^{-\gamma} \frac{\lambda_{t+1}}{(1+n)(1+g)} & \text{w.r.t } C_{2,t+1} \\ \lambda_{t}(1+n)(1+g) = e^{-\gamma}\lambda_{t+1}f'(k_{t+1}) & \text{w.r.t } k_{t+1} \end{cases}.$$Hence $\frac{C_{1,t+1}}{C_{1,t}} = \left( \frac{e^{-\gamma}f'(k_{t+1})}{(1+n)(1+g)} \right)^{-\theta}$. In steady state($C_{1,t+1}=C_{1,t},k_{t+1}=k_{t}=k^{SP}$), $f'(k^{SP})=\frac{(1+n)(1+g)}{e^{-\gamma}} \geq n+g = f'(k_{GR})$, or $k^{SP} \leq k_{GR}$. When $k^* > k_{GR}$, $k^*$ can never be $k^{SP}$(or to say that appointing $k$ to be $k_{GR}$ raises consumption in all future periods, a Pareto improvement). Otherwise there exists(guaranteed by the continuity of $e^{-\gamma}$) a sequence $\{ C_{1,t},C_{2,t},K_{t+1} \}_{t=0}^{\infty}$ to make $k^*=k^{SP}$. 