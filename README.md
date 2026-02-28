# Julio Nieto | Frontend Developer Portfolio

Un portfolio web altamente interactivo y optimizado, diseñado para mostrar proyectos, habilidades y experiencia con una estética premium inspirada en el Glassmorphism y la fluidez 3D.

## 🚀 Tecnologías Principales

- **Framework Core:** [Next.js 15 (App Router)](https://nextjs.org) y [React](https://react.dev)
- **Estilos y Arquitectura CSS:** [Tailwind CSS v4](https://tailwindcss.com) moderno.
- **Animaciones y Físicas:** [Framer Motion](https://www.framer.com/motion/)
- **Tipografía e Iconografía:** Geist Font y [Lucide React](https://lucide.dev/)
- **Gestión de Temas:** `next-themes` (Soporte nativo Claro/Oscuro dinámico)

## ✨ Características Destacadas Técnicas

- **Animaciones de Alto Rendimiento:** Transiciones a 60 FPS, carruseles 3D con cálculos de masa elástica (Spring Physics) e iluminación atmosférica matemática acelerada por hardware (`transform-gpu`).
- **Renderizado y Lazy Loading:** Arquitectura estructurada en Next.js. El esqueleto crítico (Hero y Navbar) carga de manera inmediata, mientras que los bloques pesados se hidratan progresivamente bajo demanda (Dynamic Imports) reduciendo masivamente el JS inicial.
- **Glassmorphism Reactivo:** Implementación de tarjetas de cristal puro que reaccionan matemáticamente a la posición del puntero del ratón, calculando gradientes vía máscaras CSS sin forzar costosos re-renders del estado de React.
- **Código Limpio (Clean Code):** Componetización estricta, documentación en formato JSDoc, control seguro del Cumulative Layout Shift (CLS) en la carga y memoizaciones exhaustivas (`React.memo`, `useCallback`) que evitan el "re-renderizado en cascada".

## 💻 Ejecución Local

1. Instala las dependencias del proyecto de forma local:
   ```bash
   npm install
   ```

2. Arranca el servidor local de desarrollo:
   ```bash
   npm run dev
   ```

3. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para interactuar con la interfaz.

## 👨‍💻 Acerca del Autor

**Julio Nieto Cordón** es un Desarrollador Web Frontend y creador de interfaces inmersivas. Ubicado en Andalucía (España), Julio se especializa en acortar la brecha visual entre el diseño conceptual y la ingeniería técnica de componentes escalables. 

Su filosofía de desarrollo prioriza:
1. **La Experiencia de Usuario (UI/UX) por encima de todo:** Las interfaces deben invitar al tacto, responder fluidamente y guiar intuitivamente.
2. **Atención enfermiza al detalle:** Cuidado extremo de paddings, sombras microscópicas, micro-animaciones y consistencia tipográfica.
3. **Escalabilidad del Código:** Arquitecturas que no solo funcionan hoy, sino que están documentadas y ordenadas para los equipos del mañana.

---
[✉️ Email](mailto:julioniecor@gmail.com) • [💼 LinkedIn](https://www.linkedin.com/in/julioniecor/) • [🐙 GitHub](https://github.com/JulioNiecor) • Hecho con pasión, React y Tailwind.
