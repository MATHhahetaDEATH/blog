---
tags:
publish: true
---
Textbook: Max Born, *Principles of optics: Electromagnetic theory of propagation, interference and diffraction of light*

Optics(Max Born, CUP, 1999)
## Ch1 Basic Properties of the Electromagnetic Field

1. The electromagnetic field. 
2. The wave equation and the velocity of light: 
	1. When $j=0,\rho=0$ and the medium is homogeneous, we have $\nabla^2 E- \frac{\varepsilon \mu}{c^2} \ddot{E}=0, \nabla^2 H- \frac{\varepsilon \mu}{c^2} \ddot{H}=0$. The "velocity" can be determined as $v=\frac{c}{\sqrt{ \varepsilon \mu }}$ by comparing $\nabla^2V- \frac{1}{v^2}\frac{ \partial^2 V }{ \partial t^2 }=0$. 
		1. **Note** this holds only for plane waves. Thus $v=\frac{c}{\sqrt{ \varepsilon \mu }}$ should better be conceived as a "characteristic velocity of propagation". 
	2. The law of refraction: $\frac{\sin\theta_{1}}{\sin\theta_{2}}=\frac{v_{1}}{v_{2}}=:n_{12}$(*refractive index*). An *absolute refractive index* $n:=\frac{c}{v}$ then satisfies $n_{12}=\frac{n_{2}}{n_{1}}$. 
		1. Equivalent to that the wave-front is continuous, or the intersection of the incident and refracted wave moves at a same speed on both sides of the boundary, $v_{1}=v'\sin\theta_{1},v_{2}=v'\sin\theta_{2}$. 
		2. Maxwell's formula: $n=\sqrt{ \varepsilon \mu }$. In fact $\mu$ is close to unity for most of nonmagnetic substances. 
!https://img.ksmtang.com/obsidian/fallback.jpeg]
3. Scalar waves: Solving $\nabla^2V- \frac{1}{v^2}\frac{ \partial^2 V }{ \partial t^2 }=0$. 
	1. Plane waves: $V=V(r\cdot s,t)$ where $r=r(x,y,z)$ is a position vector and $s=s(s_{x},s_{y},s_{z})$ is a unit vector in a fixed direction. The term "plane wave" is due to that $V$ holds constant over planes $r \cdot s = const$ which are perpendicular to $s$. We may take $\zeta=r \cdot s$ and find $\nabla^2V=\frac{ \partial^2 V }{ \partial \zeta^2 }$, simplifying the equation to $\frac{ \partial^2 V }{ \partial (\zeta -vt) \partial (\zeta+vt) }=0$. The general solution is $V=V_{1}(\zeta -vt)+V_{2}(\zeta +vt)$. $V_{1}$ holds constant for $(\zeta,t)\to(\zeta+v\tau ,t+\tau)$. Therefore it represents a disturbance propagated with $v$ in the $+\zeta$ direction. Likewise $V_{2}$ -> $-\zeta$ direction. 
!https://img.ksmtang.com/obsidian/fallback.jpeg]