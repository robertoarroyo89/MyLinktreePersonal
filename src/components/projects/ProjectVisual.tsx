import Image from "next/image";
import type { ProjectVisual as ProjectVisualName } from "@/types/project";

function SetrynVisual() {
  return <div className="visual-scene setryn-scene" aria-hidden="true">
    <div className="setryn-glow" />
    <div className="setryn-header"><strong>Setryn</strong><span>Esta semana</span></div>
    <div className="setryn-week">
      <div><span>LU</span><b>24</b></div><div><span>MA</span><b>25</b></div><div><span>MI</span><b>26</b></div><div><span>JU</span><b>27</b></div><div><span>VI</span><b>28</b></div><div><span>SÁ</span><b>29</b></div><div className="active"><span>DO</span><b>30</b></div>
    </div>
    <div className="setryn-rest"><i>☾</i><div><small>HOY</small><strong>Día de descanso</strong></div><b>+</b></div>
    <div className="setryn-power">
      <span>NIVEL DE PODER</span><strong>Base</strong>
      <p><small>0 XP de entrenamiento</small><small>300 para Chispa</small></p>
      <div><i /></div>
    </div>
    <div className="setryn-achievements">
      <span>LOGROS</span><strong>0 de 61 desbloqueados</strong>
      <div><i>◇</i><i>◇</i><i>◇</i></div>
    </div>
    <div className="setryn-nav"><span>Inicio</span><span>Planes</span><span>Entrenar</span><span>Progreso</span></div>
  </div>;
}

function HabitsVisual() {
  return <div className="visual-scene habits-scene" aria-hidden="true">
    <div className="habits-orbit" />
    <div className="habits-window">
      <div className="habits-window-top"><span>HOY</span><b>4 / 6</b></div>
      <div className="habits-window-hero">
        <strong>Un pequeño paso<br />también cuenta.</strong>
        <Image className="habits-mascot" src="/habitos-mascot.png" width={1199} height={1312} sizes="(min-width: 900px) 10rem, 6rem" alt="" />
      </div>
      <div className="habits-progress"><i /></div>
      <small>4 de 6 completados</small>
      <div className="habits-list">
        <div><i>✓</i><span>Beber agua</span></div>
        <div><i>✓</i><span>Caminar</span></div>
        <div><i>·</i><span>Mis compromisos</span></div>
      </div>
    </div>
  </div>;
}

function DetoxVisual() {
  return <div className="visual-scene detox-scene" aria-hidden="true">
    <div className="detox-halo" />
    <div className="detox-brand"><i /> Detox digital</div>
    <p className="detox-phrase">Vuelve a mirar<br />hacia arriba.</p>
    <div className="detox-progress-card">
      <span>DÍA 08 / 30</span>
      <strong>Tu atención vuelve a ti.</strong>
      <div><i /></div>
    </div>
    <Image className="detox-capybara" src="/detox-capybara.webp" width={640} height={585} sizes="(min-width: 900px) 30rem, 18rem" alt="" />
  </div>;
}

function LateTapVisual() {
  return <div className="visual-scene latetap-scene" aria-hidden="true">
    <div className="slot-card slot-one"><span>HOY</span><strong>18:30</strong><small><i /> Disponible ahora</small></div>
    <div className="tap-orbit"><div className="tap-button">TAP</div></div>
    <div className="slot-card slot-two"><span>ÚLTIMA HORA</span><strong>−30%</strong><small>Queda 1 hueco</small></div>
  </div>;
}

function AzaharVisual() {
  return <div className="visual-scene azahar-scene" aria-hidden="true">
    <div className="botanical botanical-one"><span /><span /><span /></div>
    <div className="botanical botanical-two"><span /><span /></div>
    <div className="azahar-window">
      <div className="window-top"><span>AZAHAR</span><span>24 · 05 · 26</span></div>
      <div className="azahar-heading"><small>PRÓXIMO PASO</small><strong>Todo en su sitio.</strong></div>
      <div className="planner-grid">
        <div><span>INVITADOS</span><strong>118</strong><small>94 confirmados</small></div>
        <div><span>PRESUPUESTO</span><strong>72%</strong><small>Todo bajo control</small></div>
      </div>
      <ul><li><i /> Confirmar menú de prueba <b>HOY</b></li><li><i /> Revisar distribución de mesas <b>JUE</b></li><li><i /> Llamar a fotografía <b>VIE</b></li></ul>
    </div>
  </div>;
}

function FlujoVisual() {
  return <div className="visual-scene flujo-scene" aria-hidden="true">
    <div className="balance-card"><span>BALANCE TOTAL</span><strong>12.480,20 €</strong><small>+8,4% este mes</small></div>
    <div className="chart-card">
      <div className="chart-top"><span>VISTA GENERAL</span><b>6 MESES</b></div>
      <div className="bar-chart">{[42, 56, 48, 68, 61, 86, 74].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div>
      <div className="chart-labels"><span>FEB</span><span>ABR</span><span>JUN</span><span>AGO</span></div>
    </div>
    <div className="transaction-list"><span>ÚLTIMOS MOVIMIENTOS</span><p><i>••</i><b>Suscripción producto</b><em>−12,99 €</em></p><p><i>↙</i><b>Ingreso proyecto</b><em>+850,00 €</em></p></div>
  </div>;
}

function OratoriaVisual() {
  return <div className="visual-scene oratoria-scene" aria-hidden="true">
    <div className="stage-rings"><i /><i /><i /></div>
    <div className="mic"><span /><b /></div>
    <div className="lesson-card"><small>LECCIÓN 04 / 12</small><strong>El poder<br />de una pausa.</strong><div className="waveform">{[30, 65, 42, 84, 55, 96, 61, 38, 72, 49, 88, 34].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div><p><span>06:42</span><span>12:08</span></p></div>
  </div>;
}

function AtmosVisual() {
  return <div className="visual-scene weather-scene" aria-hidden="true">
    <div className="atmos-sky" /><div className="atmos-haze" /><div className="atmos-grain" />
    <div className="atmos-minimal">
      <div className="atmos-sun" />
      <div className="atmos-cloud atmos-cloud-one" /><div className="atmos-cloud atmos-cloud-two" />
      <div className="atmos-minimal-temp"><strong>31<sup>°</sup></strong></div>
      <div className="atmos-dock">
        <div><i /><b>31°</b></div><div><i /><b>27°</b></div><div><i /><b>22°</b></div><div><i /><b>23°</b></div>
      </div>
    </div>
  </div>;
}

export function ProjectVisual({ visual }: { visual: ProjectVisualName }) {
  if (visual === "setryn") return <SetrynVisual />;
  if (visual === "habits") return <HabitsVisual />;
  if (visual === "detox") return <DetoxVisual />;
  if (visual === "latetap") return <LateTapVisual />;
  if (visual === "azahar") return <AzaharVisual />;
  if (visual === "flujo") return <FlujoVisual />;
  if (visual === "oratoria") return <OratoriaVisual />;
  return <AtmosVisual />;
}
