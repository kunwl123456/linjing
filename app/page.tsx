"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import * as echarts from "echarts";
import { ChinaData } from "china-map-geojson";
import { snakeAppearances, snakes, venomFilters } from "./snake-data";

const provinces = [
  { name: "新疆", x: 11, y: 31 }, { name: "西藏", x: 20, y: 61 },
  { name: "青海", x: 31, y: 43 }, { name: "甘肃", x: 43, y: 37 },
  { name: "内蒙古", x: 54, y: 20 }, { name: "黑龙江", x: 83, y: 15 },
  { name: "吉林", x: 84, y: 27 }, { name: "辽宁", x: 79, y: 36 },
  { name: "北京", x: 68, y: 34 }, { name: "天津", x: 72, y: 39 },
  { name: "河北", x: 65, y: 43 }, { name: "宁夏", x: 49, y: 45 },
  { name: "山西", x: 59, y: 45 }, { name: "山东", x: 71, y: 49 },
  { name: "陕西", x: 52, y: 53 }, { name: "河南", x: 62, y: 56 },
  { name: "江苏", x: 73, y: 59 }, { name: "安徽", x: 68, y: 64 },
  { name: "上海", x: 78, y: 65 }, { name: "湖北", x: 59, y: 65 },
  { name: "四川", x: 43, y: 64 }, { name: "重庆", x: 51, y: 68 },
  { name: "浙江", x: 74, y: 70 }, { name: "江西", x: 66, y: 73 },
  { name: "湖南", x: 57, y: 73 }, { name: "贵州", x: 49, y: 76 },
  { name: "云南", x: 38, y: 80 }, { name: "福建", x: 69, y: 80 },
  { name: "广东", x: 59, y: 84 }, { name: "广西", x: 50, y: 85 },
  { name: "香港", x: 62, y: 90 }, { name: "澳门", x: 57, y: 91 },
  { name: "海南", x: 55, y: 96 }, { name: "台湾", x: 77, y: 85 },
];

type ChinaMapProps = {
  highlighted: string[];
  selectedProvince: string;
  mode: "snake" | "province";
  onProvinceClick: (name: string) => void;
};

function ChinaMap({ highlighted, selectedProvince, mode, onProvinceClick }: ChinaMapProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<echarts.ECharts | null>(null);
  const clickRef = useRef(onProvinceClick);
  clickRef.current = onProvinceClick;

  useEffect(() => {
    if (!elementRef.current) return;
    echarts.registerMap("china-provinces", ChinaData as never);
    const chart = echarts.init(elementRef.current, undefined, { renderer: "canvas" });
    chartRef.current = chart;
    chart.on("click", (params) => {
      if (typeof params.name === "string" && params.name) clickRef.current(params.name);
    });
    const resize = () => chart.resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      chart.dispose();
      chartRef.current = null;
    };
  }, []);

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;
    const names = (ChinaData as { features: Array<{ properties: { name: string } }> }).features.map(
      (feature) => feature.properties.name,
    );
    chart.setOption({
      backgroundColor: "transparent",
      tooltip: {
        trigger: "item",
        backgroundColor: "#152018",
        borderWidth: 0,
        padding: [8, 11],
        textStyle: { color: "#f3f0e8", fontSize: 11 },
        formatter: (params: { name: string }) => {
          const count = snakes.filter((snake) => snake.provinces.includes(params.name)).length;
          return `<b>${params.name}</b><br/><span style="color:#aeb6ad">原型收录 ${count} 种 · 点击查看</span>`;
        },
      },
      series: [
        {
          type: "map",
          map: "china-provinces",
          roam: true,
          scaleLimit: { min: 1, max: 4 },
          zoom: 1.04,
          top: 35,
          bottom: 38,
          left: 30,
          right: 30,
          selectedMode: false,
          label: {
            show: true,
            color: "#475249",
            fontSize: 9,
            fontFamily: "Arial, Microsoft YaHei, sans-serif",
          },
          itemStyle: {
            areaColor: "#ded9cc",
            borderColor: "#69756d",
            borderWidth: 0.75,
          },
          emphasis: {
            label: { show: true, color: "#152018", fontWeight: "bold" },
            itemStyle: { areaColor: "#b8cf65", borderColor: "#152018", borderWidth: 1.5 },
          },
          data: names.map((name) => {
            const active = mode === "province" ? name === selectedProvince : highlighted.includes(name);
            return {
              name,
              itemStyle: active
                ? { areaColor: "#c8dc78", borderColor: "#234b34", borderWidth: 1.15 }
                : undefined,
              label: active ? { color: "#152018", fontWeight: "bold" } : undefined,
            };
          }),
        },
      ],
    });
  }, [highlighted, mode, selectedProvince]);

  return <div className="china-map-chart" ref={elementRef} role="img" aria-label="中国省级行政区交互地图" />;
}

export default function Home() {
  const [activeSnakeId, setActiveSnakeId] = useState(snakes[0].id);
  const [activeProvince, setActiveProvince] = useState("福建");
  const [mode, setMode] = useState<"snake" | "province">("snake");
  const [query, setQuery] = useState("");
  const [venomFilter, setVenomFilter] = useState<(typeof venomFilters)[number]>("全部");

  const activeSnake = snakes.find((snake) => snake.id === activeSnakeId) ?? snakes[0];
  const activeAppearance = snakeAppearances[activeSnake.id];
  const provinceSnakes = useMemo(
    () => snakes.filter((snake) => snake.provinces.includes(activeProvince)),
    [activeProvince],
  );
  const filteredSnakes = snakes.filter((snake) => {
    const filterMatch = venomFilter === "全部"
      || (venomFilter === "神经毒" && snake.venomClass === "neuro")
      || (venomFilter === "血液/细胞毒" && snake.venomClass === "hemo")
      || (venomFilter === "混合毒素" && snake.venomClass === "mixed")
      || (venomFilter === "肌毒" && snake.venomClass === "myo")
      || (venomFilter === "后沟牙" && snake.venomClass === "rear")
      || (venomFilter === "无毒" && snake.venomClass === "none");
    const searchMatch = `${snake.name}${snake.latin}${snake.tag}${snake.venomType}${snake.toxicity}`
      .toLowerCase().includes(query.toLowerCase());
    return filterMatch && searchMatch;
  });

  function chooseSnake(id: string) {
    setActiveSnakeId(id);
    setMode("snake");
  }

  function chooseProvince(name: string) {
    setActiveProvince(name);
    setMode("province");
  }

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="鳞境首页">
          <span className="brand-mark" aria-hidden="true">S</span>
          <span><b>鳞境</b><small>中国蛇类安全科普图鉴</small></span>
        </a>
        <nav aria-label="主导航">
          <a className="active" href="#atlas">分布图鉴</a>
          <a href="#safety">安全指南</a>
          <a href="#sources">数据说明</a>
        </nav>
        <span className="prototype-pill"><i /> 原型 · 演示数据</span>
      </header>

      <section className="hero" id="top">
        <div className="eyebrow">CHINA VENOMOUS SNAKE ATLAS · 01</div>
        <div className="hero-copy">
          <h1>认识它，<em>不是为了靠近它。</em></h1>
          <p>从一张地图出发，了解中国常见蛇类的分布、毒性机制与安全常识。</p>
        </div>
        <div className="hero-stat" aria-label="图鉴当前数据概览">
          <strong>{snakes.length}</strong><span>常见蛇类<br />解读档案</span>
          <b>34</b><span>省级行政区<br />交互索引</span>
        </div>
      </section>

      <section className="atlas" id="atlas">
        <aside className="species-panel">
          <div className="panel-heading">
            <div><span>01 / SPECIES</span><h2>选择蛇类</h2></div>
            <b>{String(filteredSnakes.length).padStart(2, "0")}</b>
          </div>
          <label className="search">
            <span aria-hidden="true">⌕</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜索中文名或学名" />
          </label>
          <div className="venom-filters" aria-label="按毒性类型筛选">
            {venomFilters.map((filter) => (
              <button key={filter} className={venomFilter === filter ? "on" : ""} onClick={() => setVenomFilter(filter)}>{filter}</button>
            ))}
          </div>
          <div className="snake-list">
            {filteredSnakes.map((snake, index) => (
              <button
                className={`snake-row ${activeSnakeId === snake.id && mode === "snake" ? "selected" : ""}`}
                key={snake.id}
                onClick={() => chooseSnake(snake.id)}
              >
                <span className="index">{String(index + 1).padStart(2, "0")}</span>
                <span className="mini-scale" style={{ "--accent": snake.accent } as React.CSSProperties} aria-hidden="true" />
                <span className="snake-title"><strong>{snake.name}</strong><i>{snake.latin}</i></span>
                <span className={`risk ${snake.risk === "高危" ? "high" : ""} ${snake.risk === "无毒" ? "safe" : ""}`}>{snake.risk}</span>
              </button>
            ))}
          </div>
        </aside>

        <div className="map-panel">
          <div className="map-toolbar">
            <div>
              <span>02 / DISTRIBUTION</span>
              <h2>{mode === "snake" ? `${activeSnake.name} · 省级记录` : `${activeProvince} · 蛇类索引`}</h2>
            </div>
            <div className="mode-switch" role="group" aria-label="地图查看方式">
              <button className={mode === "snake" ? "on" : ""} onClick={() => setMode("snake")}>按蛇种</button>
              <button className={mode === "province" ? "on" : ""} onClick={() => setMode("province")}>按省份</button>
            </div>
          </div>

          <div className="map-wrap" aria-label="中国省级毒蛇分布交互示意图">
            <div className="map-caption"><b>省级行政区地图</b><span>滚轮缩放 · 拖动查看 · 点击省份</span></div>
            <ChinaMap
              highlighted={activeSnake.provinces}
              selectedProvince={activeProvince}
              mode={mode}
              onProvinceClick={chooseProvince}
            />
            <div className="legend"><span><i className="confirmed" />演示记录</span><span><i />暂未收录</span></div>
            <div className="map-data-note">公开 GeoJSON 绘制 · 边界仅用于交互原型</div>
          </div>
        </div>

        <aside className="detail-panel">
          {mode === "snake" ? (
            <>
              <div className="detail-number">{String(snakes.indexOf(activeSnake) + 1).padStart(2, "0")}</div>
              <span className="detail-kicker">SPECIES FILE</span>
              <h2>{activeSnake.name}</h2>
              <p className="latin">{activeSnake.latin}</p>
              <div className="tags"><span>{activeSnake.family}</span><span>{activeSnake.tag}</span><span className={activeSnake.risk === "无毒" ? "safe-tag" : "danger"}>{activeSnake.risk}</span></div>
              <p className="description">{activeSnake.note}</p>
              <section className="appearance-section">
                <div className="section-label"><span>外观与远距离辨识</span><i>不可作为徒手鉴蛇依据</i></div>
                <p className="appearance-copy">{activeAppearance.appearance}</p>
                <div className="identity-point"><b>辨识提示</b><span>{activeAppearance.distinguishing}</span></div>
                <div className="lookalike-point"><b>易混淆</b><span>{activeAppearance.lookalikes}</span></div>
                <div className="identity-warning">只在安全距离观察或拍照。不要靠近查看瞳孔、牙齿、颊窝或腹面，也不要刺激蛇扩颈来确认种类。</div>
              </section>
              <section className={`toxicity-card ${activeSnake.venomClass}`}>
                <div className="toxicity-heading">
                  <span>毒性类型</span><b>{activeSnake.venomType}</b>
                </div>
                <p>{activeSnake.toxinSystem}</p>
              </section>
              <section className="symptom-section">
                <div className="section-label"><span>中毒 / 咬伤表现</span><i>表现因注毒量与个体差异而不同</i></div>
                <ol>
                  {activeSnake.symptoms.map((symptom, index) => (
                    <li key={symptom.label}><b>{String(index + 1).padStart(2, "0")}</b><span><strong>{symptom.label}</strong>{symptom.text}</span></li>
                  ))}
                </ol>
              </section>
              <div className="medical-note"><b>临床提示</b><span>{activeSnake.medicalNote}</span></div>
              <dl>
                <div><dt>演示分布</dt><dd>{activeSnake.provinces.length} 个省级地区</dd></div>
                <div><dt>毒性归类</dt><dd>{activeSnake.toxicity}</dd></div>
              </dl>
              <button className="province-jump" onClick={() => { setActiveProvince(activeSnake.provinces[0]); setMode("province"); }}>
                查看省份名录 <span>→</span>
              </button>
            </>
          ) : (
            <>
              <div className="detail-number">{String(provinces.findIndex((p) => p.name === activeProvince) + 1).padStart(2, "0")}</div>
              <span className="detail-kicker">PROVINCE FILE</span>
              <h2>{activeProvince}</h2>
              <p className="latin">当前图鉴收录 · {provinceSnakes.length} 种</p>
              <div className="province-list">
                {provinceSnakes.length ? provinceSnakes.map((snake) => (
                  <button key={snake.id} onClick={() => chooseSnake(snake.id)}>
                    <span style={{ background: snake.accent }} />
                    <b>{snake.name}</b><i>{snake.venomType}</i><em>→</em>
                  </button>
                )) : <p className="no-data">当前演示数据中暂无记录。<br />这不代表当地没有毒蛇。</p>}
              </div>
            </>
          )}
          <div className="source-note">毒性与症状按中国疾控中心公开科普和蛇伤临床共识归纳；不同蛇种、注毒量与个体反应差异很大，不能替代医疗诊断。分布记录仍将依据《中国蛇类》、中国动物主题数据库及省级名录继续校订。</div>
        </aside>
      </section>

      <section className="safety" id="safety">
        <div><span>FIELD NOTE · 01</span><h2>野外遇蛇，最重要的是保持距离。</h2></div>
        <ol>
          <li><b>01</b><span><strong>不要触碰</strong>不捕捉、不驱赶，缓慢退至安全距离。</span></li>
          <li><b>02</b><span><strong>被咬后少活动</strong>保持冷静，摘除患肢饰物，尽快就医。</span></li>
          <li><b>03</b><span><strong>不要切开吸吮</strong>不冰敷、不烧灼、不自行使用止血带。</span></li>
        </ol>
        <div className="emergency"><small>紧急情况</small><strong>立即拨打 120</strong></div>
      </section>

      <footer id="sources">
        <div className="brand footer-brand"><span className="brand-mark">S</span><span><b>鳞境</b><small>中国蛇类安全科普图鉴</small></span></div>
        <p>资料依据：中国疾控中心职业卫生与中毒控制所、蛇伤临床共识及动物学名录<br />不用于物种鉴定、野外捕捉或医疗诊断</p>
        <span>© 2026 SCALESCAPE</span>
      </footer>
    </main>
  );
}
