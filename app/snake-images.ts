export type SnakeImage = {
  avif: string;
  webp: string;
  alt: string;
  photographer: string;
  observedAt: string;
  location: string;
  observationUrl: string;
  license: string;
  licenseUrl: string;
  badge: string;
  reviewedAt: string;
};

type ImageMeta = [photographer: string, observedAt: string, location: string, observationId: number, license?: "CC0"];

const ccBy = "https://creativecommons.org/licenses/by/4.0/";
const cc0 = "https://creativecommons.org/publicdomain/zero/1.0/";

function imageSeries(id: string, alt: string, rows: ImageMeta[]): SnakeImage[] {
  return rows.map(([photographer, observedAt, location, observationId, license], index) => ({
    avif: `/snakes/${id}-${index + 1}.avif`,
    webp: `/snakes/${id}-${index + 1}.webp`,
    alt: `${alt}（野外观察照片 ${index + 1}）`,
    photographer,
    observedAt,
    location,
    observationUrl: `https://www.inaturalist.org/observations/${observationId}`,
    license: license ?? "CC BY 4.0",
    licenseUrl: license === "CC0" ? cc0 : ccBy,
    badge: "野外观察 · 已复核",
    reviewedAt: "2026-08-08",
  }));
}

type SourceMeta = [
  photographer: string,
  observedAt: string,
  location: string,
  sourceUrl: string,
  license: string,
  licenseUrl: string,
  badge: string,
];

function sourceSeries(id: string, name: string, rows: SourceMeta[]): SnakeImage[] {
  return rows.map(([photographer, observedAt, location, observationUrl, license, licenseUrl, badge], index) => ({
    avif: `/snakes/${id}-${index + 1}.avif`,
    webp: `/snakes/${id}-${index + 1}.webp`,
    alt: `${name}经来源页复核的形态照片 ${index + 1}`,
    photographer,
    observedAt,
    location,
    observationUrl,
    license,
    licenseUrl,
    badge,
    reviewedAt: "2026-08-08",
  }));
}

export const snakeImages: Record<string, SnakeImage[]> = {
  deinagkistrodon: imageSeries("deinagkistrodon", "尖吻蝮粗壮身体、上翘吻端和深色三角背斑", [
    ["camellia_l", "2025-06-26", "浙江 · 杭州", 322433736],
    ["angryphyco", "2024-06-30", "福建 · 宁德", 248386505],
    ["angryphyco", "2025-07-05", "浙江 · 丽水", 295880436],
  ]),
  "bungarus-multi": imageSeries("bungarus-multi", "银环蛇蓝黑色身体和规则窄白环", [
    ["camellia_l", "2025-07-05", "海南 · 东方", 322440222],
    ["Modest_Reindeer", "2026-05-08", "广西 · 桂林", 387442366],
    ["angryphyco", "2026-06-20", "福建 · 宁德", 374848390],
  ]),
  naja: imageSeries("naja", "舟山眼镜蛇体形、扩颈姿态和颈背斑纹", [
    ["灯管儿", "2022-09-18", "广东 · 广州", 143865436],
    ["angryphyco", "2021-05-06", "福建 · 宁德", 374788075],
    ["灯管儿", "2020-05-09", "广东 · 东莞", 53698830],
  ]),
  trimeresurus: imageSeries("trimeresurus", "福建竹叶青蛇绿色身体、宽头和红褐尾端", [
    ["Lawrence Hylton", "2024-07-05", "湖南", 228461941],
    ["angryphyco", "2026-07-28", "福建 · 宁德", 386427882],
    ["bloodlesshunting", "2023-08-28", "浙江 · 遂昌", 190175564],
  ]),
  "white-lipped-pit-viper": imageSeries("white-lipped-pit-viper", "白唇竹叶青蛇鲜绿色身体、三角形头部和浅色唇部", [
    ["observe-syz", "2025-10-17", "广东 · 广州", 321628603, "CC0"],
    ["Pat Heslop-Harrison", "2025-11-22", "广东 · 广州", 327659572],
    ["Michael Meiring", "2024-09-22", "广东 · 广州", 243347563],
  ]),
  protobothrops: imageSeries("protobothrops", "原矛头蝮褐色身体和大型不规则背斑", [
    ["Theo Busschau", "2025-07-29", "广东 · 清远", 304908221],
    ["Lawrence Hylton", "2024-07-05", "湖南", 228462193],
    ["Lawrence Hylton", "2024-07-04", "广东 · 清远", 228360790],
  ]),
  gloydius: imageSeries("gloydius", "短尾蝮短粗身体、宽头和两列深色背斑", [
    ["Jiao Sun（孙娇）", "2022-04-07", "湖北 · 武汉", 346148643],
    ["Robyn Perkins", "2017-03-27", "河南 · 信阳", 313972178],
    ["Theo Busschau", "2025-07-21", "北京", 334481608],
  ]),
  "elaphe-carinata": imageSeries("elaphe-carinata", "王锦蛇粗壮身体、起棱鳞片和深色网纹", [
    ["angryphyco", "2022-09-03", "福建 · 宁德", 310452858],
    ["angryphyco", "2026-06-21", "福建 · 福鼎", 374797662],
    ["angryphyco", "2025-07-05", "浙江 · 丽水", 295882683],
  ]),
  "cyclophiops-major": imageSeries("cyclophiops-major", "翠青蛇均匀绿色身体、狭长头部和大眼", [
    ["angryphyco", "2026-06-19", "福建 · 宁德", 374858962],
    ["黄彦豪", "2024-07-27", "福建 · 福州", 233711976],
    ["灯管儿", "2020-05-09", "广东 · 东莞", 53698960],
  ]),
  "ptyas-dhumnades": imageSeries("ptyas-dhumnades", "乌梢蛇深色修长身体和长尾", [
    ["paul2910", "2025-06-13", "中国（原记录未细化）", 289251227, "CC0"],
    ["Wang.QG", "2022-10-04", "浙江 · 温州", 138233859],
    ["Jane Charlen", "2024-09-12", "北京", 241241323],
  ]),
  "bungarus-fasciatus": imageSeries("bungarus-fasciatus", "金环蛇宽阔黑黄环纹和隆起背脊", [
    ["observe-syz", "2026-05-05", "海南 · 儋州", 358619734, "CC0"],
    ["灯管儿", "2022-09-18", "广东 · 广州", 143865481],
    ["灯管儿", "2020-05-09", "广东 · 东莞", 53699609],
  ]),
  "lycodon-rufozonatus": imageSeries("lycodon-rufozonatus", "赤链蛇深色身体和红褐色横斑", [
    ["camellia_l", "2025-06-24", "浙江 · 杭州", 307826825],
    ["angryphyco", "2024-06-30", "福建 · 宁德", 248386351],
    ["angryphyco", "2022-09-17", "福建 · 宁德", 310453189],
  ]),
  "ptyas-korros": imageSeries("ptyas-korros", "灰鼠蛇修长体形和橄榄灰色鳞片", [
    ["lemonhuang", "2022-10-27", "广东", 140129751],
    ["vladtepesh", "2025-12-07", "广西 · 桂林", 329786664],
    ["vladtepesh", "2025-04-15", "广东", 270572275],
  ]),
  "ptyas-mucosa": imageSeries("ptyas-mucosa", "滑鼠蛇修长体形、明显鳞缘和从深褐到棕黄色的体色变化", [
    ["Lawrence Hylton", "2024-02-04", "广东", 200617635],
    ["Oleg Kosterin", "2025-05-22", "印度 · 喀拉拉邦", 291376651],
    ["Surabhi Srivastava", "2024-04-29", "印度 · 特伦甘纳邦", 212098553],
  ]),
  "boiga-kraepelini": imageSeries("boiga-kraepelini", "绞花林蛇细长身体、大眼和深色横带", [
    ["angryphyco", "2023-09-08", "福建 · 宁德", 182398248],
    ["angryphyco", "2026-06-19", "福建 · 宁德", 374848907],
    ["angryphyco", "2023-05-06", "福建 · 宁德", 311221968],
  ]),
  "elaphe-dione": imageSeries("elaphe-dione", "白条锦蛇浅色纵纹和不规则深色横斑", [
    ["Jiao Sun（孙娇）", "2019-10-26", "北京", 226447079],
    ["Wang.QG", "2021-05-27", "上海", 81314114],
    ["belvedere04", "2024-05-19", "山东 · 威海", 219065744],
  ]),
  "psammodynastes-pulverulentus": imageSeries("psammodynastes-pulverulentus", "紫沙蛇小型身体、宽头和不规则褐色斑纹", [
    ["chao7", "2024-06-29", "海南 · 乐东", 225895422, "CC0"],
    ["chao7", "2024-08-01", "海南 · 昌江", 232926692, "CC0"],
    ["灯管儿", "2020-08-02", "广东 · 广州", 55236613],
  ]),
  "ophiophagus": sourceSeries("ophiophagus", "眼镜王蛇", [
    ["Lawrence Hylton", "2021-09-14", "原记录未公开地点", "https://www.inaturalist.org/observations/95133147", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
    ["Lawrence Hylton", "2021-06-11", "原记录未公开地点", "https://www.inaturalist.org/observations/140855317", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
    ["Lawrence Hylton", "2021-04-24", "原记录未公开地点", "https://www.inaturalist.org/observations/75024971", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
  ]),
  "naja-kaouthia": sourceSeries("naja-kaouthia", "孟加拉眼镜蛇", [
    ["Ramit Singal", "2014-10-29", "Potasali 784102", "https://www.inaturalist.org/observations/261439115", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
    ["Ian Dugdale", "2024-10-02", "Khlong Hat, Khlong Hat District, Sa Kaeo, Thailand", "https://www.inaturalist.org/observations/247573238", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
    ["Sevin Dee", "2022-04-08", "Kaeng Krachan", "https://www.inaturalist.org/observations/110849160", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
  ]),
  "yunnan-pit-viper": sourceSeries("yunnan-pit-viper", "云南竹叶青蛇", [
    ["Ian Dugdale", "2023-08-22", "224, Doi Pha Hom Pok National Park, Tambon Pong Nam Ron, Amphoe Fang, Chang Wat Chiang Mai 50110, Thailand", "https://www.inaturalist.org/observations/313451484", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
    ["Ian Dugdale", "2018-05-24", "Huai Duea, Si Than, Phu Kradueng District, Loei 42180, Thailand", "https://www.inaturalist.org/observations/313451488", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
    ["Ian Dugdale", "2018-05-27", "Makkhaeng, Kok Sathon, Dan Sai District, Loei 42120, Thailand", "https://www.inaturalist.org/observations/313451485", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
  ]),
  "ovophis": sourceSeries("ovophis", "山烙铁头蛇", [
    ["James Eaton", "2019-04-27", "Eaglenest Wildlife Sanctuary, 790003", "https://www.inaturalist.org/observations/223305485", "CC0", "https://creativecommons.org/publicdomain/zero/1.0/", "野外观察 · 已复核"],
    ["Ashwin Viswanathan", "2021-12-31", "Arunachal Pradesh 792001, India", "https://www.inaturalist.org/observations/104097992", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
    ["Ansil B.R.", "2021-12-31", "Arunachal Pradesh, India", "https://www.inaturalist.org/observations/106235336", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
  ]),
  "daboia": sourceSeries("daboia", "泰国圆斑蝰", [
    ["Ian Dugdale", "2020-07-03", "Sa Kaeo, Thailand", "https://www.inaturalist.org/observations/301531006", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
    ["nmoorhatch", "2019-10-29", "West Manggarai Regency, East Nusa Tenggara, Indonesia", "https://www.inaturalist.org/observations/36705339", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
    ["Aiken Lau", "2024-08-02", "Loh Liang National Park, Kabupaten Manggarai Barat, East Nusa Tenggara, ID", "https://www.inaturalist.org/observations/240169674", "CC0", "https://creativecommons.org/publicdomain/zero/1.0/", "野外观察 · 已复核"],
  ]),
  "gloydius-intermedius": sourceSeries("gloydius-intermedius", "中介蝮", [
    ["Kim, Hyun-tae", "2017-07-15", "Wolchulsan, Yeongam, KR-CN, KR", "https://www.inaturalist.org/observations/7072747", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
    ["Andrew Bazdyrev", "2023-05-25", "г. Владивосток, Приморский край, Россия", "https://www.inaturalist.org/observations/198436012", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
    ["Alexander A. Fomichev", "2019-07-03", "Russia, Primorsky Krai, Ol'khovaya Mountain", "https://www.inaturalist.org/observations/37778872", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
  ]),
  "hydrophis-cyanocinctus": sourceSeries("hydrophis-cyanocinctus", "青环海蛇", [
    ["Chao Shi", "2025-08-04", "Hainan, CN-HA, CN", "https://www.inaturalist.org/observations/303595637", "CC0", "https://creativecommons.org/publicdomain/zero/1.0/", "渔获记录 · 物种已复核"],
    ["evannazareth", "2019-08-16", "South Andaman, IN-AN, IN", "https://www.inaturalist.org/observations/32455812", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "渔获记录 · 物种已复核"],
    ["Chao Shi", "2025-08-04", "Hainan, CN-HA, CN", "https://www.inaturalist.org/observations/303595637", "CC0", "https://creativecommons.org/publicdomain/zero/1.0/", "渔获记录 · 物种已复核"],
  ]),
  "hydrophis-curtus": sourceSeries("hydrophis-curtus", "平颏海蛇", [
    ["Светлана Царахова", "2024-02-07", "Бенолим, Гоа, Индия", "https://www.inaturalist.org/observations/198689573", "CC0", "https://creativecommons.org/publicdomain/zero/1.0/", "野外观察 · 已复核"],
    ["Светлана Царахова", "2024-02-07", "Бенолим, Гоа, Индия", "https://www.inaturalist.org/observations/198689573", "CC0", "https://creativecommons.org/publicdomain/zero/1.0/", "野外观察 · 已复核"],
    ["Светлана Царахова", "2024-02-07", "Бенолим, Гоа, Индия", "https://www.inaturalist.org/observations/198689573", "CC0", "https://creativecommons.org/publicdomain/zero/1.0/", "野外观察 · 已复核"],
  ]),
  "rhabdophis-tigrinus": sourceSeries("rhabdophis-tigrinus", "虎斑颈槽蛇", [
    ["WATANABE Hitoshi 渡辺仁", "2020-10-25", "Hachiōji, JP-TK, JP", "https://www.inaturalist.org/observations/63480601", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
    ["kamataryo", "2021-08-15", "県道40号, 米原市, 滋賀県, JP", "https://www.inaturalist.org/observations/128217356", "CC0", "https://creativecommons.org/publicdomain/zero/1.0/", "野外观察 · 已复核"],
    ["rachelandjun", "2021-06-07", "野河内渓谷", "https://www.inaturalist.org/observations/83478080", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
  ]),
  "rhabdophis-subminiatus": sourceSeries("rhabdophis-subminiatus", "红脖颈槽蛇", [
    ["Fathurrahman Sidiq", "2021-11-13", "dusun kaloran selogiri", "https://www.inaturalist.org/observations/101105586", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
    ["eyrezer", "2017-04-22", "Jl. Rancabentang No.56-58, Ciumbuleuit, Kec. Cidadap, Kota Bandung, Jawa Barat 40142, Indonesia", "https://www.inaturalist.org/observations/49395989", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
    ["Dr. Guido Bohne", "2009-02-12", "Indonesia", "https://www.inaturalist.org/observations/388425177", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
  ]),
  "orthriophis-taeniurus": sourceSeries("orthriophis-taeniurus", "黑眉锦蛇", [
    ["Wang.QG", "2022-09-28", "上海世纪公园", "https://www.inaturalist.org/observations/136779558", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
    ["Wang.QG", "2022-09-28", "上海世纪公园", "https://www.inaturalist.org/observations/136779558", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
    ["Ian Dugdale", "2018-10-09", "Khao Chot, Si Sawat District, Kanchanaburi, Thailand", "https://www.inaturalist.org/observations/301466729", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
  ]),
  "euprepiophis-mandarinus": sourceSeries("euprepiophis-mandarinus", "玉斑锦蛇", [
    ["Licheng Shih", "2024-07-09", "272台灣宜蘭縣南澳鄉台灣山毛櫸國家步道", "https://www.inaturalist.org/observations/228963871", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
    ["Wang.QG", "2026-05-30", "杭州市临安区", "https://www.inaturalist.org/observations/366656708", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
    ["angryphyco", "2021-10-03", "Ningde, CN-FJ, CN", "https://www.inaturalist.org/observations/310458905", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
  ]),
  "sinomicrurus-macclellandi": sourceSeries("sinomicrurus-macclellandi", "中华珊瑚蛇", [
    ["chintan sheth", "2026-06-16", "Talo Budhi Road, Lower Subansiri, Arunachal Pradesh, IN", "https://www.inaturalist.org/observations/372893534", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
    ["chintan sheth", "2026-06-16", "Talo Budhi Road, Lower Subansiri, Arunachal Pradesh, IN", "https://www.inaturalist.org/observations/372893534", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
    ["Ian Dugdale", "2016-11-07", "339 Khao Laem National Park, Tambon Prang Phe, Amphoe Sangkhla Buri, Chang Wat Kanchanaburi 71240, Thailand", "https://www.inaturalist.org/observations/301530951", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
  ]),
  "protobothrops-jerdonii": sourceSeries("protobothrops-jerdonii", "菜花原矛头蝮", [
    ["joho tayu", "2024-04-02", "792101", "https://www.inaturalist.org/observations/205076835", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
    ["Eha Tacho", "2024-07-02", "QWW3+VWM, Anini, 792101", "https://www.inaturalist.org/observations/246572124", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
    ["Eugene Popov", "2022-11-05", "Vietnam", "https://www.inaturalist.org/observations/141762666", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
  ]),
  "vipera-berus": sourceSeries("vipera-berus", "极北蝰", [
    ["Alexander A. Fomichev", "2015-07-11", "Mongolia, Bayan-Oulgiy Aimag, Khorabain-Salaa River valley", "https://www.inaturalist.org/observations/2447525", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
    ["Josip Skejo", "2015-06-02", "Tuk Vojni, Hrvatska", "https://www.inaturalist.org/observations/45164317", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
    ["Jean-Paul Boerekamps", "2020-09-14", "Oberer Hohneweg, Wernigerode, Saksen-Anhalt, DE", "https://www.inaturalist.org/observations/59651177", "CC0", "https://creativecommons.org/publicdomain/zero/1.0/", "野外观察 · 已复核"],
  ]),
  "laticauda-laticaudata": sourceSeries("laticauda-laticaudata", "蓝灰扁尾海蛇", [
    ["John Barkla", "2019-08-27", "Niue", "https://www.inaturalist.org/observations/32456974", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
    ["林正文", "2024-07-18", "952台灣台東縣蘭嶼鄉", "https://www.inaturalist.org/observations/231871483", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
    ["林正文", "2024-07-18", "952台灣台東縣蘭嶼鄉", "https://www.inaturalist.org/observations/231871480", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
  ]),
  "ahaetulla-prasina": sourceSeries("ahaetulla-prasina", "绿瘦蛇", [
    ["anukma", "2022-03-19", "Malaysia", "https://www.inaturalist.org/observations/108937052", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
    ["anukma", "2022-03-19", "Malaysia", "https://www.inaturalist.org/observations/108937052", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
    ["anukma", "2022-03-19", "Malaysia", "https://www.inaturalist.org/observations/108937052", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
  ]),
  "elaphe-schrenckii": sourceSeries("elaphe-schrenckii", "棕黑锦蛇", [
    ["Repina Tatyana", "2007-05-07", "Горно-Таежное, Приморский край, Россия, 692533", "https://www.inaturalist.org/observations/28724084", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
    ["Kim, Hyun-tae", "2010-08-13", "Ongjin, KR-IN, KR", "https://www.inaturalist.org/observations/2510899", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
    ["Татьяна Прозорова", "2014-05-31", "Архаринский р-н, Амурская обл., Россия", "https://www.inaturalist.org/observations/26316753", "CC0", "https://creativecommons.org/publicdomain/zero/1.0/", "野外观察 · 已复核"],
  ]),
  "lycodon-ruhstrati": sourceSeries("lycodon-ruhstrati", "黑背白环蛇", [
    ["雲一百香果", "2022-08-22", "台灣屏東縣", "https://www.inaturalist.org/observations/132810855", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
    ["Teddy Gilbert", "2026-06-27", "Taitung, TW-TA, TW", "https://www.inaturalist.org/observations/376427094", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
    ["Teddy Gilbert", "2026-06-22", "Taiwan", "https://www.inaturalist.org/observations/374501287", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
  ]),
  "lycodon-septentrionalis": sourceSeries("lycodon-septentrionalis", "白链蛇", [
    ["Ashwin Viswanathan", "2024-05-31", "792101", "https://www.inaturalist.org/observations/219929136", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
    ["Jigu", "2025-05-20", "792101", "https://www.inaturalist.org/observations/282593869", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
    ["Ashwin Viswanathan", "2022-05-22", "Roing 792110", "https://www.inaturalist.org/observations/121958163", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
  ]),
  "malayopython-bivittatus": sourceSeries("malayopython-bivittatus", "缅甸蟒", [
    ["Adam Cushen", "2022-04-28", "Everglades National Park, US-FL, US", "https://www.inaturalist.org/observations/115186699", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
    ["Lawrence Hylton", "2021-07-26", "原记录未公开地点", "https://www.inaturalist.org/observations/88711236", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
    ["Lawrence Hylton", "2021-07-28", "原记录未公开地点", "https://www.inaturalist.org/observations/106536163", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
  ]),
  "orientocoluber-spinalis": sourceSeries("orientocoluber-spinalis", "黄脊游蛇", [
    ["Marco Mussita", "2023-09-03", "Huixian, Xinxiang, Henan, China", "https://www.inaturalist.org/observations/181521183", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
    ["Kim, Hyun-tae", "2008-10-03", "Pocheon, KR-KG, KR", "https://www.inaturalist.org/observations/26631", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
    ["Kim, Hyun-tae", "2008-10-03", "Pocheon, KR-KG, KR", "https://www.inaturalist.org/observations/26631", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
  ]),
  "achalinus-spinalis": sourceSeries("achalinus-spinalis", "黑脊蛇", [
    ["unipon", "2021-10-02", "Japan", "https://www.inaturalist.org/observations/349482684", "CC0", "https://creativecommons.org/publicdomain/zero/1.0/", "野外观察 · 已复核"],
    ["りなべる", "2021-10-26", "溝尻, 舞鶴市, 京都府, JP", "https://www.inaturalist.org/observations/138604990", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
    ["renshuchu", "2017-09-24", "Nagano, JP", "https://www.inaturalist.org/observations/171686705", "CC0", "https://creativecommons.org/publicdomain/zero/1.0/", "野外观察 · 已复核"],
  ]),
  "mangshan": sourceSeries("mangshan", "莽山原矛头蝮", [
    ["Junkyardsparkle", "2014-03-24", "洛杉矶动物园", "https://commons.wikimedia.org/wiki/File:Protobothrops_mangshanensis_mang_pitviper_LA_zoo_side.jpg", "CC0", "https://creativecommons.org/publicdomain/zero/1.0/", "圈养个体 · 物种已复核"],
    ["Junkyardsparkle", "2014-03-24", "洛杉矶动物园", "https://commons.wikimedia.org/wiki/File:Protobothrops_mangshanensis_mang_pitviper_LA_zoo_top.jpg", "CC0", "https://creativecommons.org/publicdomain/zero/1.0/", "圈养个体 · 物种已复核"],
    ["Bloopityboop", "2024-06-24", "布朗克斯动物园", "https://commons.wikimedia.org/wiki/File:Mangashan_Pit_Viper_(Protobothrops_mangshanensis).jpg", "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0/", "圈养个体 · 物种已复核"],
  ]),
  "gloydius-saxatilis": sourceSeries("gloydius-saxatilis", "岩栖蝮", [
    ["Bubsir", "2010-07-12", "来源页未注明地点", "https://commons.wikimedia.org/wiki/File:Gloydius_Saxatilis.jpg", "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0/", "开放档案 · 物种已复核"],
    ["National Institute of Ecology", "日期见来源页", "韩国生态研究记录", "https://commons.wikimedia.org/wiki/File:Gloydius_saxatilis.jpg", "KOGL Type 1", "https://www.kogl.or.kr/info/licenseType1.do", "机构档案 · 物种已复核"],
    ["Gaeho77", "2023-05-27", "韩国 · 舒川", "https://commons.wikimedia.org/wiki/File:Gloydius_saxatilis,_Seocheon.jpg", "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0/", "野外观察 · 物种已复核"],
  ]),
  "elaphe-bimaculata": sourceSeries("elaphe-bimaculata", "双斑锦蛇", [
    ["J. Polák", "2018-05-21", "来源页未注明地点", "https://commons.wikimedia.org/wiki/File:Elaphe_bimaculata.jpg", "CC0", "https://creativecommons.org/publicdomain/zero/1.0/", "开放档案 · 物种已复核"],
  ]),
  "gloydius-strauchi": sourceSeries("gloydius-strauchi", "高原蝮", [
    ["Post of Kyrgyzstan", "1996", "吉尔吉斯斯坦邮票", "https://commons.wikimedia.org/wiki/File:Stamp_of_Kyrgyzstan_110.jpg", "Public domain", "https://commons.wikimedia.org/wiki/Commons:Copyright_rules_by_territory/Kyrgyzstan", "物种插画 · 非实拍"],
  ]),
  "elaphe-moellendorffi": sourceSeries("elaphe-moellendorffi", "百花锦蛇", [
    ["J. Patrick Fischer", "2009-08-28", "圈养记录", "https://commons.wikimedia.org/wiki/File:Orthriophis_moellendorffi_juvenile.JPG", "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0/", "圈养个体 · 物种已复核"],
    ["Derek Hennen", "2017-07-28", "越南", "https://www.inaturalist.org/observations/59104260", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
    ["James Hunt", "2026-06-21", "越南", "https://www.inaturalist.org/observations/374218914", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
  ]),
  "pareas-chinensis": sourceSeries("pareas-chinensis", "中华钝头蛇", [
    ["camellia_l", "2025-06-04", "Dayi County, Chengdu, Sichuan, China", "https://www.inaturalist.org/observations/288575077", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
    ["camellia_l", "2025-06-04", "Dayi County, Chengdu, Sichuan, China", "https://www.inaturalist.org/observations/288575077", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "野外观察 · 已复核"],
  ]),
  "trimerodytes-annularis": sourceSeries("trimerodytes-annularis", "赤腹水蛇", [
    ["Joe25065", "2026-02-26", "台湾 · 台北北投", "https://reptile.tbn.org.tw/occurrence/b262fe96-2210-4425-baaf-274d32e8b2a1", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "专家鉴定记录 · 已复核"],
    ["Jimmy Crystal", "2025-07-30", "台湾 · 台北北投", "https://reptile.tbn.org.tw/occurrence/8f603339-5b21-48fb-814d-bf24abb16799", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "专家鉴定记录 · 已复核"],
    ["马维骏", "2024-07-15", "台湾 · 台北北投", "https://reptile.tbn.org.tw/occurrence/2e12fad6-71ba-4556-bbf5-e181ef37d66f", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "专家鉴定记录 · 已复核"],
  ]),
};
