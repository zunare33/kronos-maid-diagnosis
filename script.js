
const AURUM_IMG = "assets/maids/aurum.jpg";
const maids = [{"id": "crystal", "no": "01", "name": "クリスタル", "age": "21歳", "role": "メイド長", "type": "責任感の強い正統派メイド", "img": "assets/maids/crystal.jpg", "tags": ["正統派", "責任感", "管理", "清潔", "上品", "整理", "礼儀", "大人", "距離感"], "desc": "クロノス邸のメイド長。責任感と清潔感にあふれ、ご主人様の私室を隙なく整えてくれる正統派のお部屋係です。", "quote": "わたくしがご主人様のお部屋係を務める以上、何ひとつ不自由はさせません。"}, {"id": "sapphire", "no": "02", "name": "サファイア", "age": "19歳", "role": "一般メイド", "type": "完璧主義の実務派メイド", "img": "assets/maids/sapphire.jpg", "tags": ["完璧", "実務", "整理", "几帳面", "規律", "ベッド", "清潔", "努力家"], "desc": "仕事に誇りを持つ完璧主義者。ベッドメイキングや整理整頓を妥協なくこなす、実務能力重視のお部屋係です。", "quote": "私が担当する以上、ご主人様のお部屋は常に完璧に整えてみせます。"}, {"id": "aquamarine", "no": "03", "name": "アクアマリン", "age": "24歳", "role": "一般メイド", "type": "無邪気な古参メイド", "img": "assets/maids/aquamarine.jpg", "tags": ["明るい", "親しみ", "古参", "妹", "観察", "迷子", "気配り", "ムード"], "desc": "無邪気な妹キャラとして振る舞う古参メイド。明るさと経験で、屋敷に不慣れなご主人様を支えてくれます。", "quote": "困ったことがあったら、ぜーんぶアクアちゃんに聞いてね。"}, {"id": "iolite", "no": "04", "name": "アイオライト", "age": "18歳", "role": "一般メイド", "type": "慈悲深い聖母系メイド", "img": "assets/maids/iolite.jpg", "tags": ["癒し", "清楚", "献身", "看護", "穏やか", "優しい", "安らぎ", "礼儀"], "desc": "慈悲深く清らかなメイド。怪我の手当てや看病が得意で、疲れた心身をやさしく癒やしてくれます。", "quote": "ご主人様が少しでも安らかに過ごせますよう、心を込めてお仕えいたします。"}, {"id": "onyx", "no": "05", "name": "オニキス", "age": "19歳", "role": "一般メイド", "type": "穏やかで甘えん坊な癒やし系メイド", "img": "assets/maids/onyx.jpg", "tags": ["癒し", "親密", "温もり", "甘え", "穏やか", "マッサージ", "距離感", "安らぎ"], "desc": "穏やかで親しみやすく、マッサージが得意なメイド。近い距離感と温もりで、疲れをほぐしてくれます。", "quote": "ご主人様、お疲れではありませんか？ 私、マッサージは得意なんです。"}, {"id": "kohaku", "no": "06", "name": "コハク", "age": "17歳", "role": "一般メイド", "type": "無口で観察眼の鋭い静かなる陽キャ", "img": "assets/maids/kohaku.jpg", "tags": ["静か", "観察", "気配り", "無口", "行動", "読唇", "控えめ", "ミステリアス"], "desc": "口数は少ないけれど内面は陽気。鋭い観察眼で、言葉になる前の要望にも気づいてくれます。", "quote": "……お茶、冷める前にどうぞ。ご主人様、少し疲れてる顔だったから。"}, {"id": "garnet", "no": "07", "name": "ガーネット", "age": "18歳", "role": "一般メイド", "type": "規律に厳しいツンデレ警戒型メイド", "img": "assets/maids/garnet.jpg", "tags": ["規律", "警戒", "ツンデレ", "安全", "誠実", "几帳面", "毒見", "礼儀"], "desc": "生真面目で警戒心の強いメイド。厳しい態度の奥に、ご主人様の安全を守りたい責任感があります。", "quote": "別に心配しているわけではありません。ただの規則です。"}, {"id": "cassiterite", "no": "08", "name": "キャシテライト", "age": "17歳", "role": "一般メイド", "type": "現代日本から来た異世界転移メイド", "img": "assets/maids/cassiterite.jpg", "tags": ["現代", "知識", "ツッコミ", "料理", "親しみ", "会話", "柔軟", "新人"], "desc": "現代日本から異世界転移してきたメイド。現代知識と親しみやすい感覚で、屋敷暮らしに新しい風を入れてくれます。", "quote": "この世界にはない快適生活ってやつ、見せてあげるから！"}, {"id": "hisui", "no": "09", "name": "ヒスイ", "age": "16歳", "role": "一般メイド", "type": "世間知らずで心優しいお嬢様系新人メイド", "img": "assets/maids/hisui.jpg", "tags": ["お嬢様", "優雅", "天然", "新人", "朗読", "紅茶", "優しい", "上品"], "desc": "豪商の令嬢で、心優しい新人メイド。詩の朗読や上品なお茶の時間で、穏やかな空気を届けます。", "quote": "お茶の時間と詩の朗読なら、少しだけ自信がありますの。"}, {"id": "manao", "no": "10", "name": "マーナオ", "age": "17歳", "role": "一般メイド", "type": "愛嬌と打算を併せ持つ異国人風メイド", "img": "assets/maids/manao.jpg", "tags": ["社交", "愛嬌", "計算", "異国", "会話", "観察", "ご機嫌", "サボり", "親しみ"], "desc": "明るく社交的で、相手の望みを読むのが得意。少し打算的ながら、退屈しない時間を作るお部屋係です。", "quote": "ご主人様、そんなに難しい顔してたら損ですヨ？"}, {"id": "sphene", "no": "11", "name": "スフェーン", "age": "12歳", "role": "見習いメイド", "type": "世話焼きな見習い組リーダー", "img": "assets/maids/sphene.jpg", "tags": ["見習い", "世話焼き", "成長", "編み物", "魔導", "努力家", "優しい"], "desc": "見習い組のリーダー。まだ成長途中ですが、世話焼きで一生懸命に役に立とうとしてくれます。", "quote": "まだ見習いですけど、ご主人様のお役に立てるように頑張ります！"}, {"id": "ruby", "no": "12", "name": "ルビー", "age": "12歳", "role": "見習いメイド", "type": "いたずら好きな問題児見習いメイド", "img": "assets/maids/ruby.jpg", "tags": ["見習い", "いたずら", "元気", "鍵", "冒険", "小柄", "トラブル", "明るい"], "desc": "いたずら好きな見習いメイド。屋敷中の扉や抜け道に詳しく、退屈しない毎日を連れてきます。", "quote": "屋敷の面白い場所、こっそり教えてあげるね。"}, {"id": "jet", "no": "13", "name": "ジェット", "age": "12歳", "role": "見習いメイド", "type": "大人びた優等生見習いメイド", "img": "assets/maids/jet.jpg", "tags": ["見習い", "優等生", "静か", "ミステリアス", "奉仕", "瞑想", "控えめ"], "desc": "見習いながら何事もそつなくこなす優等生。静かで落ち着いた空気を私室に運びます。", "quote": "まだ見習いですが、できることは丁寧に務めます。"}, {"id": "citrine", "no": "14", "name": "シトリン", "age": "12歳", "role": "見習いメイド", "type": "背伸びしたがりのお姉さんぶり見習いメイド", "img": "assets/maids/citrine.jpg", "tags": ["見習い", "背伸び", "怖がり", "ライバル", "賑やか", "成長", "明るい"], "desc": "お姉さんぶりたい見習いメイド。強がりながらも一生懸命で、成長を見守りたくなる存在です。", "quote": "私がご主人様のお部屋係ですから、安心してください。たぶん！"}, {"id": "paraiba", "no": "15", "name": "パライバトルマリン", "nickname": "マリン", "age": "14歳", "role": "一般メイド", "type": "明るく元気なムードメーカー系メイド", "img": "assets/maids/paraiba.jpg", "tags": ["元気", "明るい", "屋外", "前向き", "ムード", "甘い", "素直", "行動"], "desc": "太陽のように明るいメイド。失敗してもすぐ立ち上がり、前向きな空気でご主人様を励まします。", "quote": "失敗しても、もう一度がんばりますから……ねっ！"}, {"id": "ruri", "no": "16", "name": "ルリ", "age": "14歳", "role": "一般メイド", "type": "音楽好きで穏やかな癒やし系メイド", "img": "assets/maids/ruri.jpg", "tags": ["癒し", "音楽", "穏やか", "恥ずかし", "献身", "ハープ", "静か", "優しい"], "desc": "ハープの演奏が得意な穏やかなメイド。柔らかな音色と献身で、私室を癒やしの空間にしてくれます。", "quote": "疲れた時は、ハープを弾きますね……♪"}, {"id": "nephrite", "no": "17", "name": "ネフライト", "age": "14歳", "role": "一般メイド", "type": "背伸びしたお嬢様系しっかり者メイド", "img": "assets/maids/nephrite.jpg", "tags": ["お嬢様", "背伸び", "暗算", "商家", "シスコン", "計算", "若手", "紅茶"], "desc": "ヒスイの妹で、しっかり者を自称するおませなメイド。暗算が得意で、備品管理にも向いています。", "quote": "備品の数も、お茶菓子の残りも、ぜんぶ暗算で……！"}, {"id": "peridot", "no": "18", "name": "ペリドット", "age": "24歳", "role": "一般メイド", "type": "経験豊富で冷静沈着なベテランメイド", "img": "assets/maids/peridot.jpg", "tags": ["経験", "冷静", "模様替え", "空間", "大人", "生活動線", "実務", "南方"], "desc": "経験豊富で冷静沈着なベテランメイド。家具配置や生活動線を整え、部屋を快適に変えてくれます。", "quote": "こちらの配置の方が、朝の支度も読書の時間も過ごしやすくなるはずです。"}, {"id": "emerald", "no": "19", "name": "エメラルド", "age": "18歳", "role": "一般メイド", "type": "料理上手で食いしん坊な家庭的メイド", "img": "assets/maids/emerald.jpg", "tags": ["料理", "家庭的", "食いしん坊", "穏やか", "妄想", "パン", "甘い", "親しみ"], "desc": "料理を作るのも食べるのも好きな家庭的メイド。温かな軽食で、ご主人様の心をほぐします。", "quote": "美味しいものを食べると、元気が出ますから。"}, {"id": "amethyst", "no": "20", "name": "アメジスト", "age": "18歳", "role": "一般メイド", "type": "無気力だが仕事は完璧なダウナー系メイド", "img": "assets/maids/amethyst.jpg", "tags": ["ダウナー", "効率", "静か", "干渉しない", "睡眠", "ラベンダー", "仕事が早い", "無気力"], "desc": "『面倒くさい』と言いながら、仕事は驚くほど迅速で完璧。干渉されすぎない関係を好む方にぴったりです。", "quote": "早く終わらせた方が、私も休めますから。"}, {"id": "alexandrite", "no": "21", "name": "アレキサンドライト", "age": "19歳", "role": "一般メイド", "type": "引っ込み思案で影のある修繕上手メイド", "img": "assets/maids/alexandrite.jpg", "tags": ["控えめ", "修繕", "影", "引っ込み思案", "裁縫", "静か", "劣等感", "スミレ"], "desc": "控えめで自信がないメイドですが、裁縫と修繕の腕は確か。静かに支え、信頼されると力を発揮します。", "quote": "目立つことは苦手ですけど、裁縫や修繕ならできます。"}, {"id": "topaz", "no": "22", "name": "トパーズ", "age": "17歳", "role": "一般メイド", "type": "身分を隠した高貴な令嬢メイド", "img": "assets/maids/topaz.jpg", "tags": ["優雅", "礼儀", "お嬢様", "紅茶", "天然", "清楚", "上品", "献身"], "desc": "身分を隠して奉仕を学ぶ名門貴族の令嬢。礼儀作法とお茶の時間の演出は一級品です。", "quote": "お茶のご用意でしたら、どうぞ私にお任せくださいませ。"}, {"id": "spinel", "no": "23", "name": "スピネル", "age": "19歳", "role": "一般メイド", "type": "体力仕事が得意な快活メイド", "img": "assets/maids/spinel.jpg", "tags": ["体力", "快活", "高所", "力仕事", "サバサバ", "行動", "屋外", "グレープフルーツ"], "desc": "考えるより先に体が動く快活メイド。重い荷物も高所清掃も、笑顔で引き受ける頼もしさがあります。", "quote": "重い荷物なら私に任せてください！"}, {"id": "monga", "no": "24", "name": "モンガ", "age": "17歳", "role": "一般メイド", "type": "南方出身の素直で明るい働き者メイド", "img": "assets/maids/monga.jpg", "tags": ["明るい", "素直", "力仕事", "床磨き", "異国", "南方", "働き者", "片言", "ココナッツ"], "desc": "南方から来た素直な働き者。言葉は少し苦手でも、床磨きと力仕事で全力で支えてくれます。", "quote": "モンガ、ご主人様のお部屋、ピカピカする！"}];
const questions = [{"text": "朝、あなたを起こしてくれるなら、どんなお部屋係が理想ですか？", "choices": [{"text": "時間ぴったりに、きっちり起こしてほしい", "tags": ["規律", "完璧", "正統派", "管理"], "bonus": ["crystal", "sapphire", "garnet"]}, {"text": "明るい声で、元気に一日を始めさせてほしい", "tags": ["明るい", "元気", "ムード", "前向き"], "bonus": ["paraiba", "ruby", "monga", "spinel"]}, {"text": "静かに様子を見て、優しく起こしてほしい", "tags": ["静か", "気配り", "穏やか", "癒し"], "bonus": ["kohaku", "ruri", "iolite", "alexandrite"]}, {"text": "紅茶や身支度まで、優雅に整えてほしい", "tags": ["優雅", "紅茶", "お嬢様", "礼儀"], "bonus": ["hisui", "topaz", "nephrite"]}]}, {"text": "ご主人様の私室に、いちばん欲しい雰囲気は？", "choices": [{"text": "隅々まで整った、清潔で規律ある空間", "tags": ["清潔", "整理", "几帳面", "実務"], "bonus": ["crystal", "sapphire", "garnet"]}, {"text": "温かくて、ほっとできる癒やしの空間", "tags": ["癒し", "温もり", "家庭的", "穏やか"], "bonus": ["iolite", "onyx", "emerald", "ruri"]}, {"text": "明るく賑やかで、退屈しない空間", "tags": ["賑やか", "元気", "いたずら", "社交"], "bonus": ["paraiba", "ruby", "manao", "citrine"]}, {"text": "静かで少し不思議な、落ち着ける空間", "tags": ["静か", "ミステリアス", "影", "控えめ"], "bonus": ["kohaku", "jet", "amethyst", "alexandrite"]}]}, {"text": "お部屋係に任せたい仕事をひとつ選ぶなら？", "choices": [{"text": "予定管理や身の回りの整理", "tags": ["管理", "几帳面", "規律", "整理"], "bonus": ["crystal", "sapphire", "garnet", "nephrite"]}, {"text": "軽食やお茶、食事まわりの準備", "tags": ["料理", "家庭的", "紅茶", "甘い"], "bonus": ["emerald", "hisui", "topaz", "cassiterite"]}, {"text": "家具移動、床磨き、高所清掃などの力仕事", "tags": ["体力", "力仕事", "床磨き", "高所"], "bonus": ["spinel", "monga", "peridot", "paraiba"]}, {"text": "服やカーテン、小物の修繕", "tags": ["裁縫", "修繕", "編み物", "静か"], "bonus": ["alexandrite", "sphene", "jet"]}]}, {"text": "お部屋係との距離感は、どれがいちばん近いですか？", "choices": [{"text": "心の距離が近く、親しげに接してほしい", "tags": ["親密", "甘え", "温もり", "親しみ"], "bonus": ["onyx", "aquamarine", "emerald"]}, {"text": "控えめに、必要な時だけそっと支えてほしい", "tags": ["控えめ", "静か", "気配り", "干渉しない"], "bonus": ["kohaku", "amethyst", "alexandrite", "ruri"]}, {"text": "厳しくてもいいので、正直に指摘してほしい", "tags": ["誠実", "ツンデレ", "警戒", "規律"], "bonus": ["garnet", "sapphire", "crystal"]}, {"text": "会話上手で、こちらの気分を読んでほしい", "tags": ["会話", "社交", "愛嬌", "ご機嫌"], "bonus": ["manao", "cassiterite", "hisui"]}]}, {"text": "クロノス邸での休日、誰と過ごしたいですか？", "choices": [{"text": "お茶と朗読で、優雅に過ごしたい", "tags": ["紅茶", "優雅", "朗読", "上品"], "bonus": ["hisui", "topaz", "nephrite"]}, {"text": "庭や屋敷の外で、体を動かしたい", "tags": ["屋外", "体力", "元気", "行動"], "bonus": ["spinel", "paraiba", "monga"]}, {"text": "料理や現代風の工夫を楽しみたい", "tags": ["料理", "現代", "家庭的", "親しみ"], "bonus": ["emerald", "cassiterite", "sapphire"]}, {"text": "屋敷の秘密や抜け道を探検したい", "tags": ["鍵", "冒険", "古参", "観察"], "bonus": ["ruby", "aquamarine", "kohaku"]}]}, {"text": "トラブルが起きた時、隣にいてほしいのは？", "choices": [{"text": "冷静に状況を見て、最適な手を打てる人", "tags": ["冷静", "経験", "効率", "実務"], "bonus": ["peridot", "amethyst", "crystal"]}, {"text": "明るく励まして、空気を変えてくれる人", "tags": ["明るい", "前向き", "素直", "ムード"], "bonus": ["paraiba", "monga", "aquamarine", "spinel"]}, {"text": "危険を見逃さず、安全を守ってくれる人", "tags": ["警戒", "安全", "規律", "毒見"], "bonus": ["garnet", "sapphire", "kohaku"]}, {"text": "手当てや優しい言葉で落ち着かせてくれる人", "tags": ["看護", "献身", "癒し", "優しい"], "bonus": ["iolite", "ruri", "onyx"]}]}, {"text": "あなたが惹かれる“個性”は？", "choices": [{"text": "まだ未熟でも、一生懸命に成長する姿", "tags": ["見習い", "成長", "世話焼き", "背伸び"], "bonus": ["sphene", "citrine", "jet", "ruby"]}, {"text": "静かで影があり、少しミステリアスな雰囲気", "tags": ["ミステリアス", "静か", "影", "控えめ"], "bonus": ["jet", "alexandrite", "kohaku", "amethyst"]}, {"text": "異国情緒や、文化の違いから生まれる新鮮さ", "tags": ["異国", "南方", "社交", "片言"], "bonus": ["manao", "monga", "peridot"]}, {"text": "現代的な発想や、軽いツッコミの親しみやすさ", "tags": ["現代", "知識", "ツッコミ", "会話"], "bonus": ["cassiterite", "manao", "emerald"]}]}, {"text": "あなたが好む仕事の進め方は？", "choices": [{"text": "手順通り、完璧に積み上げる", "tags": ["完璧", "几帳面", "正統派", "努力家"], "bonus": ["sapphire", "crystal", "garnet"]}, {"text": "無駄を省き、最短で結果を出す", "tags": ["効率", "干渉しない", "仕事が早い", "実務"], "bonus": ["amethyst", "peridot", "kohaku"]}, {"text": "考えるより動いて、体で覚える", "tags": ["体力", "行動", "力仕事", "快活"], "bonus": ["spinel", "monga", "paraiba"]}, {"text": "気持ちを大切にして、相手に寄り添う", "tags": ["癒し", "親しみ", "優しい", "献身"], "bonus": ["iolite", "onyx", "ruri", "hisui"]}]}, {"text": "お部屋係にするなら、どの立場の子が気になりますか？", "choices": [{"text": "頼れる大人や経験者に任せたい", "tags": ["経験", "大人", "冷静", "管理"], "bonus": ["peridot", "aquamarine", "crystal"]}, {"text": "同じ目線で話せる若手メイドがいい", "tags": ["若手", "新人", "会話", "親しみ"], "bonus": ["hisui", "cassiterite", "manao", "topaz"]}, {"text": "成長途中の見習いを見守りたい", "tags": ["見習い", "成長", "世話焼き", "優等生"], "bonus": ["sphene", "ruby", "jet", "citrine"]}, {"text": "少し手強い相手と信頼関係を築きたい", "tags": ["ツンデレ", "警戒", "規律", "影"], "bonus": ["garnet", "amethyst", "alexandrite"]}]}, {"text": "あなたの部屋で今いちばん解決したい悩みは？", "choices": [{"text": "ベッドや机まわりを完璧に整えたい", "tags": ["ベッド", "整理", "清潔", "完璧"], "bonus": ["sapphire", "crystal"]}, {"text": "家具の配置や動線をもっと快適にしたい", "tags": ["模様替え", "空間", "生活動線", "経験"], "bonus": ["peridot", "amethyst"]}, {"text": "服や布小物のほつれを直してほしい", "tags": ["裁縫", "修繕", "編み物"], "bonus": ["alexandrite", "sphene"]}, {"text": "眠れない夜や疲れた気分を癒やしてほしい", "tags": ["ラベンダー", "音楽", "癒し", "安らぎ"], "bonus": ["amethyst", "ruri", "iolite", "onyx"]}]}, {"text": "好きな香りに近いものを選ぶなら？", "choices": [{"text": "リネンやペパーミントの清潔感", "tags": ["清潔", "完璧", "整理"], "bonus": ["crystal", "sapphire"]}, {"text": "紅茶や花の上品な香り", "tags": ["紅茶", "優雅", "清楚", "上品"], "bonus": ["hisui", "topaz", "iolite", "nephrite"]}, {"text": "焼きたてのパンや太陽を浴びたコットン", "tags": ["家庭的", "明るい", "パン", "ムード"], "bonus": ["emerald", "paraiba"]}, {"text": "バニラ、ココナッツ、柑橘の元気な香り", "tags": ["南方", "異国", "体力", "快活"], "bonus": ["peridot", "monga", "spinel", "ruby"]}]}, {"text": "最後に。あなたがお部屋係に一番求めるものは？", "choices": [{"text": "生活を正してくれる頼もしさ", "tags": ["管理", "規律", "完璧", "責任感"], "bonus": ["crystal", "sapphire", "garnet", "peridot"]}, {"text": "心をほぐしてくれる優しさ", "tags": ["癒し", "穏やか", "温もり", "献身"], "bonus": ["iolite", "onyx", "ruri", "emerald"]}, {"text": "毎日を楽しくしてくれる明るさ", "tags": ["賑やか", "元気", "いたずら", "社交"], "bonus": ["paraiba", "ruby", "manao", "monga", "aquamarine"]}, {"text": "何も言わなくても気づいてくれる繊細さ", "tags": ["観察", "気配り", "控えめ", "静か"], "bonus": ["kohaku", "alexandrite", "amethyst", "jet"]}]}];

const introLines = [
  {speaker:"アウルム", text:"ようこそ、クロノス邸へ。\n私はこの屋敷で家令を務めております、アウルムと申します。"},
  {speaker:"アウルム", text:"あなた様は本日より、アルジェ・クロノス様の婚約者として、そして新たなるご主人様として、この屋敷でお過ごしになるお方。"},
  {speaker:"アウルム", text:"つきましては、あなた様専属の“お部屋係”を選出する必要がございます。"},
  {speaker:"アウルム", text:"お部屋係とは、ご主人様の私室と一日の暮らしをもっとも近くで支える専属メイドのことです。\n朝は起床のお声がけ、身支度、衣類や小物の準備。昼は予定確認、軽食やお茶、書類や荷物の整理。夜はお部屋の整え、戸締まり、翌日の準備まで担当いたします。"},
  {speaker:"アウルム", text:"もちろん、担当者によって得意分野は異なります。完璧に整える者、優しく寄り添う者、明るく励ます者……。\nあなた様の暮らし方に合うお部屋係を選ぶことが、クロノス邸での第一歩でございます。"},
  {speaker:"アウルム", text:"これから十二の質問をいたします。難しく考えず、お心のままにお答えくださいませ。\n……診断表は、たしかこの書類の中に……あら？ いえ、すべて予定通りでございます。"}
];

let state = "title";
let introIndex = 0;
let questionIndex = 0;
let directScores = {};
let tagScores = {};

const els = {
  stage: document.getElementById("stage"),
  characterImage: document.getElementById("characterImage"),
  titlePanel: document.getElementById("titlePanel"),
  dialogBox: document.getElementById("dialogBox"),
  speakerName: document.getElementById("speakerName"),
  dialogText: document.getElementById("dialogText"),
  choiceBox: document.getElementById("choiceBox"),
  nextBtn: document.getElementById("nextBtn"),
  progressWrap: document.getElementById("progressWrap"),
  progressLabel: document.getElementById("progressLabel"),
  progressBar: document.getElementById("progressBar"),
  resultPanel: document.getElementById("resultPanel"),
  galleryModal: document.getElementById("galleryModal"),
  galleryGrid: document.getElementById("galleryGrid"),
  profileModal: document.getElementById("profileModal"),
  profileTitle: document.getElementById("profileTitle"),
  profileBody: document.getElementById("profileBody"),
  musicBtn: document.getElementById("musicBtn")
};

const UNLOCK_KEY = "kronos_unlocked_maids_v2";
function getUnlocked(){
  try { return JSON.parse(localStorage.getItem(UNLOCK_KEY) || "[]"); }
  catch(e){ return []; }
}
function isUnlocked(id){ return getUnlocked().includes(id); }
function unlockMaid(id){
  const unlocked = getUnlocked();
  if(!unlocked.includes(id)){
    unlocked.push(id);
    localStorage.setItem(UNLOCK_KEY, JSON.stringify(unlocked));
    return true;
  }
  return false;
}
function resetUnlocks(){
  if(confirm("メイド一覧の解放状況をリセットしますか？")){
    localStorage.removeItem(UNLOCK_KEY);
    buildGallery();
    closeProfile();
  }
}

let audioCtx = null;
let bgmTimer = null;
let bgmEnabled = false;
let bgmStep = 0;
const chordProgression = [
  [261.63, 329.63, 392.00, 523.25],
  [220.00, 261.63, 329.63, 440.00],
  [174.61, 261.63, 349.23, 523.25],
  [196.00, 246.94, 392.00, 493.88]
];
function note(freq, start, dur, gain, type="sine"){
  if(!audioCtx) return;
  const osc = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  g.gain.setValueAtTime(0.0001, start);
  g.gain.linearRampToValueAtTime(gain, start + 0.08);
  g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
  osc.connect(g).connect(audioCtx.destination);
  osc.start(start);
  osc.stop(start + dur + 0.05);
}
function scheduleBgmBar(){
  if(!audioCtx || !bgmEnabled) return;
  const now = audioCtx.currentTime + 0.04;
  const chord = chordProgression[bgmStep % chordProgression.length];
  chord.forEach((f,i)=> note(f, now, 3.6, i === 0 ? 0.026 : 0.015, "triangle"));
  const melody = [chord[3], chord[2]*1.5, chord[1]*2, chord[2]*1.5];
  melody.forEach((f,i)=> note(f, now + i*0.75, 0.62, 0.018, "sine"));
  note(chord[0]/2, now, 3.4, 0.02, "sine");
  bgmStep++;
}
function startBgm(){
  if(bgmEnabled) return;
  audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
  if(audioCtx.state === "suspended") audioCtx.resume();
  bgmEnabled = true;
  if(els.musicBtn){
    els.musicBtn.textContent = "BGM ON";
    els.musicBtn.classList.add("sound-on");
  }
  scheduleBgmBar();
  bgmTimer = setInterval(scheduleBgmBar, 3000);
}
function stopBgm(){
  bgmEnabled = false;
  if(bgmTimer) clearInterval(bgmTimer);
  bgmTimer = null;
  if(els.musicBtn){
    els.musicBtn.textContent = "BGM OFF";
    els.musicBtn.classList.remove("sound-on");
  }
}
function toggleBgm(){ bgmEnabled ? stopBgm() : startBgm(); }

function init(){
  document.getElementById("startBtn").addEventListener("click", startGame);
  document.getElementById("restartBtn").addEventListener("click", showTitle);
  document.getElementById("galleryBtn").addEventListener("click", openGallery);
  document.getElementById("galleryBtn2").addEventListener("click", openGallery);
  document.getElementById("closeGallery").addEventListener("click", closeGallery);
  document.getElementById("closeProfile").addEventListener("click", closeProfile);
  document.getElementById("resetUnlock").addEventListener("click", resetUnlocks);
  els.musicBtn.addEventListener("click", toggleBgm);
  els.galleryModal.addEventListener("click", e => { if(e.target === els.galleryModal) closeGallery(); });
  els.profileModal.addEventListener("click", e => { if(e.target === els.profileModal) closeProfile(); });
  els.nextBtn.addEventListener("click", handleNext);
  buildGallery();
  showTitle();
}
function resetScores(){ directScores = {}; tagScores = {}; maids.forEach(m => directScores[m.id]=0); }
function showTitle(){
  state = "title";
  els.stage.classList.add("title-mode");
  els.titlePanel.classList.remove("hidden");
  els.dialogBox.classList.add("hidden");
  els.resultPanel.classList.add("hidden");
  els.characterImage.src = AURUM_IMG;
  els.characterImage.alt = "アウルム";
}
function startGame(){
  startBgm();
  resetScores();
  state = "intro"; introIndex = 0; questionIndex = 0;
  els.stage.classList.remove("title-mode");
  els.titlePanel.classList.add("hidden");
  els.resultPanel.classList.add("hidden");
  els.dialogBox.classList.remove("hidden");
  els.choiceBox.classList.add("hidden");
  els.progressWrap.classList.add("hidden");
  els.nextBtn.classList.remove("hidden");
  els.characterImage.src = AURUM_IMG;
  showIntroLine();
}
function handleNext(){
  if(state === "intro"){
    introIndex++;
    if(introIndex < introLines.length) showIntroLine(); else showQuestion();
  } else if(state === "afterChoice") {
    questionIndex++;
    if(questionIndex < questions.length) showQuestion(); else showResult();
  } else if(state === "result") { showTitle(); }
}
function setDialogue(speaker, text){
  els.speakerName.textContent = speaker;
  els.dialogText.textContent = text;
}
function showIntroLine(){
  const line = introLines[introIndex];
  setDialogue(line.speaker, line.text);
  els.nextBtn.textContent = introIndex === introLines.length - 1 ? "診断へ" : "次へ";
}
function showQuestion(){
  state = "question";
  const q = questions[questionIndex];
  els.characterImage.src = AURUM_IMG;
  setDialogue("アウルム", `【質問 ${questionIndex+1} / ${questions.length}】\n${q.text}`);
  els.progressWrap.classList.remove("hidden");
  els.progressLabel.textContent = `質問 ${questionIndex+1} / ${questions.length}`;
  els.progressBar.style.width = `${(questionIndex/questions.length)*100}%`;
  els.nextBtn.classList.add("hidden");
  els.choiceBox.innerHTML = "";
  q.choices.forEach((c,idx)=>{
    const btn = document.createElement("button");
    btn.className = "choice";
    btn.innerHTML = `<b>${idx+1}. ${escapeHtml(c.text)}</b>`;
    btn.addEventListener("click", ()=>chooseAnswer(c));
    els.choiceBox.appendChild(btn);
  });
  els.choiceBox.classList.remove("hidden");
}
function chooseAnswer(choice){
  choice.tags.forEach(tag => tagScores[tag] = (tagScores[tag]||0) + 1);
  choice.bonus.forEach(id => directScores[id] = (directScores[id]||0) + 3);
  state = "afterChoice";
  els.choiceBox.classList.add("hidden");
  els.nextBtn.classList.remove("hidden");
  els.nextBtn.textContent = questionIndex === questions.length - 1 ? "結果を見る" : "次の質問へ";
  els.progressBar.style.width = `${((questionIndex+1)/questions.length)*100}%`;
  setDialogue("アウルム", reactionText(choice));
}
function reactionText(choice){
  const variants = [
    `なるほど、「${choice.text}」でございますね。\nふむふむ……あなた様の傾向が少し見えてまいりました。`,
    `承知いたしました。\nこのお答えですと、あの子たちの適性が高そうです。……いえ、独り言でございます。`,
    `興味深いお答えです。\nでは、次の質問へ参りましょう。診断表は……はい、今度はちゃんとあります。`
  ];
  return variants[questionIndex % variants.length];
}
function scoreMaid(maid){
  let score = directScores[maid.id] || 0;
  for(const tag of maid.tags){ score += (tagScores[tag] || 0) * 2; }
  return score;
}
function showResult(){
  state = "result";
  const ranked = maids.map(m => ({...m, score: scoreMaid(m)})).sort((a,b)=> b.score - a.score || Number(a.no)-Number(b.no));
  const top = ranked[0];
  const top3 = ranked.slice(0,3);
  const maxScore = Math.max(...ranked.map(r=>r.score));
  const compat = Math.max(78, Math.min(99, 84 + Math.round((top.score / Math.max(1,maxScore))*15)));
  const isNewUnlock = unlockMaid(top.id);
  buildGallery();
  els.dialogBox.classList.add("hidden");
  els.resultPanel.classList.remove("hidden");
  els.characterImage.src = top.img;
  els.characterImage.alt = top.name;
  els.resultPanel.innerHTML = `
    <div class="result-visual"><img src="${top.img}" alt="${top.name}"></div>
    <div class="result-info">
      ${isNewUnlock ? `<div class="unlock-notice">新規解放：${top.name}のプロフィールがメイド一覧に追加されました</div>` : `<div class="unlock-notice">解放済：${top.name}のプロフィールはメイド一覧で確認できます</div>`}
      <div class="kicker">あなたのお部屋係は――</div>
      <h2>${top.name}</h2>
      <div class="compat">相性 ${compat}% ／ ${top.type}</div>
      <p class="result-desc">${top.desc}</p>
      <div class="quote">「${top.quote}」</div>
      <h3>相性上位3名</h3>
      <div class="subrank">${top3.map((m,i)=>`<div class="subrank-card"><b>${i+1}位：${m.name}</b><span>${m.type}</span></div>`).join("")}</div>
      <div class="result-actions">
        <button class="primary" onclick="startGame()">もう一度診断する</button>
        <button class="secondary" onclick="openGallery()">メイド一覧を見る</button>
        <button class="secondary" onclick="showTitle()">タイトルへ戻る</button>
      </div>
    </div>`;
}
function buildGallery(){
  const unlocked = getUnlocked();
  els.galleryGrid.innerHTML = maids.map(m=>{
    const open = unlocked.includes(m.id);
    const shownName = open ? m.name : "？？？";
    const shownText = open ? `${m.age}／${m.role}<br>${m.type}` : `No.${m.no}<br>診断結果で表示されると解放`;
    return `
      <article class="maid-card ${open ? "unlocked" : "locked"}" data-id="${m.id}" tabindex="0" role="button" aria-label="${open ? m.name : `未解放 No.${m.no}`}">
        <img src="${m.img}" alt="${shownName}">
        <div class="body"><b>${m.no}. ${shownName}</b><p>${shownText}</p></div>
      </article>`;
  }).join("");
  els.galleryGrid.querySelectorAll(".maid-card").forEach(card=>{
    card.addEventListener("click", ()=>openProfile(card.dataset.id));
    card.addEventListener("keydown", e=>{ if(e.key === "Enter" || e.key === " "){ e.preventDefault(); openProfile(card.dataset.id); }});
  });
}
function openGallery(){ buildGallery(); els.galleryModal.classList.remove("hidden"); }
function closeGallery(){ els.galleryModal.classList.add("hidden"); }
function openProfile(id){
  const maid = maids.find(m=>m.id === id);
  if(!maid) return;
  const open = isUnlocked(id);
  els.profileTitle.textContent = open ? `${maid.no}. ${maid.name}` : `No.${maid.no} 未解放`;
  if(open){
    const nickname = maid.nickname ? `<span>愛称：${maid.nickname}</span>` : "";
    els.profileBody.innerHTML = `
      <div class="profile-visual"><img class="profile-img" src="${maid.img}" alt="${maid.name}"></div>
      <div class="profile-info">
        <h3>${maid.name}</h3>
        <div class="profile-meta"><span>${maid.age}</span><span>${maid.role}</span>${nickname}<span>${maid.type}</span></div>
        <p class="profile-desc">${maid.desc}</p>
        <div class="profile-quote">「${maid.quote}」</div>
        <h4>診断属性</h4>
        <div class="profile-tags">${maid.tags.map(t=>`<span class="tag-chip">${t}</span>`).join("")}</div>
      </div>`;
  } else {
    els.profileBody.innerHTML = `
      <div class="profile-visual"><img class="profile-img silhouette" src="${maid.img}" alt="未解放シルエット"></div>
      <div class="profile-info">
        <h3>？？？</h3>
        <div class="profile-meta"><span>No.${maid.no}</span><span>未解放</span></div>
        <p class="profile-locked-text">このメイドのプロフィールはまだ解放されていません。<br>診断結果でこのメイドが「あなたのお部屋係」として表示されると、メイド一覧で詳細プロフィールを確認できるようになります。</p>
      </div>`;
  }
  els.profileModal.classList.remove("hidden");
}
function closeProfile(){ els.profileModal.classList.add("hidden"); }
function escapeHtml(str){ return str.replace(/[&<>"]/g, s=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[s])); }
window.startGame = startGame; window.openGallery = openGallery; window.showTitle = showTitle; window.openProfile = openProfile;
init();
