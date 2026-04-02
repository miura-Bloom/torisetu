const fs = require('fs');
const path = require('path');

const members = [
  {
    id: 'sato_mai',
    name: '佐藤 万愛',
    office: '本社',
    called: 'まいさん♡',
    type: 'ドライバー',
    type_desc: '目的や成果を明確にし、突き進みます。物事のスピード感と目指す先があればあるほどやりがい・達成感を感じます。逆に、目標がないとモチベーションが下がりやすいです。',
    strengths: ['目標達成志向：目標があると頑張れます！', 'チームワーク：チームで頑張るのが好きです。', '部下・後輩の育成：長女なのもあり、後輩ちゃんのために尽くしたいタイプです'],
    hobby: 'マーベル映画を観ること / 愛犬と遊ぶこと / ピラティス★',
    food: 'スタバゴールド会員／ラーメン。癖が強い食べ物・辛いものが好きです。',
    motivation: '朝ご飯を食べる余裕のある朝だったとき / 職場が笑い声や会話であふれているとき / お菓子をいただけたとき',
    stress: 'ベランダのリクライニングチェアに座ってコーヒー飲みながらボーっとすること.。o○',
  },
  {
    id: 'furuzato_mao',
    name: '古里 真生',
    office: '本社',
    called: '古里さん',
    type: 'ドライバー（主導型）',
    type_desc: '目的や期限等があれば力を発揮しやすいです。逆に結論が見えないまま話が続いたり目的が明確でなかったり優先順位が曖昧な状況などでは、力を発揮できないことがあります。',
    strengths: ['素直さ：基本的に好き嫌いがはっきりしているのと自分の気持ちに嘘つくのが苦手だからです。', 'ポジティブ：何事もうまくいくと思っているからです。', '行動力：思ったらすぐ行動に移さないと気が済まない性格だからです。'],
    hobby: '読書 / 旅行 / 体を動かすこと',
    food: '好きな食べ物はからあげです。',
    motivation: '任された仕事がある時',
    stress: 'プライベートで発散',
  },
  {
    id: 'horinouchi_kano',
    name: '堀之内 叶',
    office: '本社',
    called: '堀之内さん（呼びやすい呼び方でOK）',
    type: 'エミアブル（協調型）',
    type_desc: '自分の気持ちを大切にしつつ、相手を思いやるコミュニケーションを心がけています。',
    strengths: ['素直さ：様々な角度の意見を聞き入れ、自分に活かすことが得意です。', '自己管理：自己理解をし、心身ともに健康でいられるように過ごしています。', '誠実さ：すべての人に誠意をもって接するように心がけています。'],
    hobby: 'ガチャガチャを集めること。好きなシリーズはコンプリートするまで回してしまいます。',
    food: '甘いものが好きです。',
    motivation: '①褒めてもらえた時 ②欲しいものができた時 ③お休みの日の前日',
    stress: '岩盤浴に行きます。何も考えない時間を作ることを大切にしています。',
  },
  {
    id: 'yamada_mamoru',
    name: '山田 守',
    office: '本社',
    called: '「部長」と呼んでください',
    type: 'ドライバースタイル（主導型）',
    type_desc: '目的を明確にして、物事をスピーディーに進めることを意識しています。判断や決断は早いほうですが、強く言いすぎないように注意しています。結論から話してもらえると助かります。',
    strengths: ['素直さ：相手の意見や考え方を肯定的に受け入れる。', 'ポジティブ思考：いかなる状況でも、前向きな姿勢や考え方で行動する。', '自信：自分の能力や信念を自ら信頼しており、自己責任のもとに行動する。'],
    hobby: 'お酒を飲むこと / 投資 / 多趣味になりたい^^',
    food: 'お酒 / ラーメン',
    motivation: '任されたとき（責任） / 負けたくない時（競争） / 頼られたとき（期待）',
    stress: '去年からジムに通い始めました。体を動かすとストレス発散、リフレッシュできます！',
  },
  {
    id: 'nishihara_ryoichi',
    name: '西原 亮一',
    office: '本社',
    called: '亮一社長',
    type: 'アナリティカル（分析型）',
    type_desc: '正確さや根拠を大切にしており、事前に情報を整理してから進めることを意識しています。',
    strengths: ['タイムマネジメント', 'スピード', 'メンバーへの公平さ'],
    hobby: 'ジョギング。普段5〜10km走っています。出張先でのジョギングや各地のフルマラソンが楽しみです。来年の鹿児島マラソンに社員と一緒に走るのが楽しみです！',
    food: 'チョコレートケーキとアイスコーヒー。お酒をやめて甘いものを欲するようになりました。',
    motivation: '①特に大事なことを決める会議に臨むとき ②本社の社員と定期面談をするとき ③初めてのゴルフ場でゴルフをするとき',
    stress: 'マッサージです。日頃体を動かしているので、張ったり凝ったりしている部分をほぐしてもらえるのが気持ちいいです。',
  },
  {
    id: 'cho_yusuke',
    name: '長 祐介',
    office: '本社',
    called: '「長さん・長くん」と呼んでください',
    type: 'ドライバー（主導型）',
    type_desc: '目的を明確にして物事をスピーディーに進めることを意識していますが、なかなか上手くいきません。結論から話してもらえると助かります。',
    strengths: ['素直さ：物事や他人の意見を肯定的に受け入れる柔軟な姿勢や態度を持っています。', '使命感：自分が担当する業務の社会的な意義を深く理解し、その責任を全うすべく気概をもって行動しています。', '慎重さ：よりよい結果を得るために物事を思慮深く考えてから行動しています'],
    hobby: '動物が好きで、犬2匹・ハムスター1匹・フクロモモンガ2匹を飼っています。あとゲームはバイオハザードにハマっています。',
    food: '最近パスタにハマっています。家で作る納豆パスタが一番好き。スーパーのママーの5分茹でるやつが最高です。',
    motivation: '①追い込まれた時 ②新しい文房具を買ったとき ③大きな仕事を任せられた時',
    stress: '①寝る：しっかり寝ると頭がスッキリして気持ちを切り替えられます ②犬の散歩：犬とめっちゃダッシュで散歩して心身共に疲れることでリラックスできます',
  },
  {
    id: 'nakadake_shin',
    name: '中武 慎援',
    office: '宮崎営業所',
    called: '中武係長・中武さん',
    type: 'アナリティカル（分析型）',
    type_desc: '正確さや根拠を大切にしており、事前に情報を整理してから進める事を意識しています。慎重に考える事が多い為、判断に少し時間が掛かる事もあります。あらかじめ情報を共有してもらえると安心して取り組めます。',
    strengths: ['チャレンジ精神：失敗を恐れず課題に積極的に取り組む事を意識しています。', '感謝：仕事もプライベートの時でも常に感謝の気持ちを持って行動しています。', '段取り：効率良く仕事が出来るように計画を立てて行動しています。'],
    hobby: '趣味：野球 / マイブーム：スポーツ観戦（MLBを観るのが好きです。）',
    food: '果物は梨、野菜はスナックピースを茹でて食べるのが好きです。飲み物はジンジャエールが好きです。（お酒は飲みません）',
    motivation: 'お客様の役に立っていると感じた時 / 新鮮な野菜をお客様に届ける責任を感じた時 / 社員から頼ってもらえた時',
    stress: '野球をしているので、体を動かす事でストレス発散しています。',
  },
  {
    id: 'nishikawa_shuichi',
    name: '西川 修一',
    office: '宮崎営業所',
    called: '西川所長',
    type: 'ドライバー（主導型）',
    type_desc: '仕事では、成果を出すためにどう動くか、どうしたら社員が成果を上げられるかを意識しています。チームとして動き、同じ方向に向けて全員で努力し、成果を出せることが力の源になっています。目的が明確でないときは、考えてしまうことがあります。',
    strengths: ['誠実さ：何事も一生懸命取り組みます。出来ないこともありますが、皆で協力しながら解決をしていきます。', '感謝：皆さんがいて助け合いながら全てが成り立っています。感謝の気持ちを大切に行動します。', '分析力：商品の相場・販路分析には自信があります。それを活かしチームで動きましょう。'],
    hobby: '野球観戦 / ゴルフ（超初心者）',
    food: 'らーめんキャプテンさんの【ゴジラーメン】 / ペペロンチーノ / アルコールは強くありませんが、ビール・焼酎が好きです。',
    motivation: '部下の成長を感じた時：課題を一緒に解決して、出来る事が増えていくことに喜びを感じます / チームワーク：後輩社員が困っている際に社員同士で解決していく姿を見るとき / 懇親会：社内の食事会などで楽しく過ごせている姿を見たとき',
    stress: '飲みに行って発散した後に解決方法を探していきます。',
  },
  {
    id: 'kubo_tomofumi',
    name: '久保 智史',
    office: '山口営業所',
    called: '久保さん・久保主任（役職名だけで呼ばれるのは好きではないです）',
    type: 'エクスプレッシング（表現型）',
    type_desc: '会社内、取引先でもコミュニケーションを大切にしています。人と人との繋がりを求めているので、職場でも仕事以外の話をするように心がけています。',
    strengths: ['コミュニケーション：自分から積極的にコミュニケーションを取っています。', 'チャレンジ精神：毎日を当たり前に過ごさない様にしています。新しい事に取り組んでいく事が好きで、楽しむ為に努力します。', '段取り：日々の必ず行う業務はルーティン化し段取り良くすることで作業効率が上がり時間を作ることが出来るので困ったら言ってください。解決してみせます。'],
    hobby: '子供が3人いるので一緒に遊んだりゲームをすること。ニンテンドースイッチのゼルダを子供のいない間だけしています。',
    food: '魚が好きなので刺身があると嬉しいです。お酒はバーボン（ウイスキー）にこだわりがあります。',
    motivation: '家族の誰かが喜ぶためなら / 人に褒められたとき / 目標等何かを達成できそうなとき',
    stress: 'ストレスを感じることはありますが、これといって発散方法はありません。時間が解決してくれると思って生きてきました。',
  },
  {
    id: 'tanaka_hisakazu',
    name: '田中 寿和',
    office: '山口営業所',
    called: '田中所長',
    type: 'アナリティカル（分析型）',
    type_desc: '正確さや根拠を大切にしていると出ましたが、あまり固く考えたことはないです。問題などが起きたときは一緒に解決できるように手助けしたいので些細なことでも相談してもらえればありがたいです。',
    strengths: ['思いやり：相手が何を考えているかを大切にします。', '失敗を活かす力：ミスやクレームに経歴は関係ありません。逃げずに一緒に解決します。', '段取り：社員の働きやすい環境づくりを常に意識しています。'],
    hobby: 'サッカー観戦（テレビ・現地） / 料理（妻より台所に立っています）',
    food: 'お酒（ハイボール・芋焼酎） / レバーやユッケなどの生肉 / 刺身',
    motivation: '頼りにされたとき：良いことも悪いことも相談に応えたいのでどんどん頼ってください。/ 仕事が忙しいとき：大型連休などの入れ込み前は特にやる気が出ます。/ 家族と過ごすとき：頑張って稼ごうと思います。',
    stress: '社員に誘ってもらいフットサルに参加することです。体を動かすことは好きなので一緒に何かできればうれしいです。',
  },
  {
    id: 'tokuda_shintaro',
    name: '徳田 晋太郎',
    office: '東海静岡営業所',
    called: '徳田次長',
    type: '協調型スタイル',
    type_desc: '周囲の気持ちや雰囲気に目が向きやすいです。相手の話を丁寧に聞きながらチームがうまくまわるように支える役割を担っています。',
    strengths: ['思いやり：相手の事を考えながら発言するように心がけています。', '感謝：何事にも感謝の気持ちを持って取り組んでいます。', 'ユニーク：面白く、楽しくなるように考えるのが得意です。'],
    hobby: 'ネットフリックス鑑賞',
    food: '野菜よりはお肉が好きです。魚よりもお肉が好きです。お肉に勝るものはありません！',
    motivation: '①自分のイメージ通りに物事が進んだとき ②頼ってもらえたとき ③1人よりもチームで動く方がやる気が出ます',
    stress: 'カラオケが好きです！歌うときに感情移入して歌うと気持ちがいいです。',
  },
  {
    id: 'tanaka_takashi',
    name: '田中 孝史',
    office: '東海静岡営業所',
    called: '所長・たかし',
    type: 'ドライバー（主導型）',
    type_desc: '仕事の場面では行動力が高まり、任されている感覚や信頼されている実感があるとモチベーションが上がりやすくなります。',
    strengths: ['コミュニケーション：人と話をする事が好きです。社内でもお客様でもまずは相手の話をしっかり聞いてコミュニケーションを取るようにしています。', '自信：仕事はもちろんですが、日頃の生活にも全て自信をもつようにしています。', 'ポジティブ思考：マイナスな事は考えません！！'],
    hobby: 'スポーツ観戦（特に野球が好き） / 休日は2人の子供と遊ぶ事が楽しみです。',
    food: 'カレーが大好きです！ / 休日の前の日はお酒を飲みます。',
    motivation: '営業所の皆さんとお酒を飲みながら色々な話をしたとき / 数字に直結するような大きな商談があるとき / 周りに認めてもらえたとき',
    stress: 'よく寝て、よく食べて、人とたくさん話をすることです。',
  },
  {
    id: 'sugiyama_taemi',
    name: '杉山 妙美',
    office: '東海名古屋営業所',
    called: '杉山さん',
    type: 'ドライバー（主導型）',
    type_desc: 'コミュニケーションを大事に、楽しく仕事ができるように心がけています。お互いの成長をめざしながら、話しやすい環境づくりを大事にしています。',
    strengths: ['素直さ', '誠実さ', '感謝'],
    hobby: 'YouTube・ホットヨガ・読書',
    food: '寿司・みかん・コーヒー',
    motivation: '明確でやりがいのある目標があるとき、がんばります。/ 頼ってもらえると、嬉しくなります。/ 誰かの役にたつと思えると、がんばります。',
    stress: '話して、すっきりします。/ YouTubeを見たり、好きなことをして、すっきりします。',
  },
  {
    id: 'tanaka_kazuya',
    name: '田中 和也',
    office: '東海名古屋営業所',
    called: '【所長】と気軽に呼んでもらえると嬉しいです',
    type: 'エミアブル（協調型）',
    type_desc: '普段から人との関係性や安心感を大切にしているので、従業員ひとりひとりの話をよく聞くことを意識しています。人と話すことが好きなので仕事の話以外でも気軽に話しかけてください。',
    strengths: ['ポジティブ思考：ミスしても引きずらず切り替えます。基本前向きな話が好きです。', 'チームワーク：大変な時周りを見てサポートするタイプです。協力して目標を達成するのが好きです。', '高い志：現状に満足せず、常に成長することを意識しています。'],
    hobby: 'お酒を飲むこと / ジム通い / ゴルフ（まだまだ下手ですけど笑）',
    food: '米焼酎（白岳しろ）・ハイボール / 豚骨ラーメン',
    motivation: '上司に褒められたとき / 家族や従業員に頼りにされたとき / お客様の要望に応えるとき',
    stress: 'いろいろありますが、強いていうのならば奥さんとの「晩酌タイム」です。',
  },
  {
    id: 'matsumoto_takuya',
    name: '松元 琢也',
    office: '大分営業所',
    called: '松元所長・たくや（上司からは「たくや」と呼ばれます）',
    type: 'エクスプレッシブ（表現型）',
    type_desc: '「やる時」「楽しむ時」など状況に合わせ、メリハリをつけることを意識しています。会話する際は、一方的に話すのではなく、相手の話を最後まで聞くこと、冷静に落ち着いて話すことを心掛けています。',
    strengths: ['失敗を恐れず前向きにチャレンジする気持ち', '何をするにもイヤイヤするのではなく楽しみ方を自分なりに見つけやっていきたい', 'その場にいるだけで明るくなれる、笑いが溢れるような人になりたい'],
    hobby: '流行っているといわれるお店、食べ物でも自分の目、口で確かめること。/ 昭和の曲を聴くこと、歌うこと。',
    food: '基本嫌いな食べ物、飲み物はありません。フレッシュ青果に入社してからは特に「野菜」が好きになりました。お酒も好き！',
    motivation: '家族が皆健康でいること。子供の成長を感じるとき / 欲しかったものが手に入ったとき / 仕事で目標を達成できたとき（営業所皆で取り組み皆で達成したときは特に！）',
    stress: '鹿児島出身ですが、昔から温泉が大好きです。転勤で大分へ来てからもよく温泉へ行きサウナ・露天風呂など満喫しています。とてもリフレッシュできます！',
  },
  {
    id: 'sakurai_takumi',
    name: '櫻井 拓実',
    office: '大分営業所',
    called: 'たくみ・たくちゃん（フレンドリーな感じで！）',
    type: '協調型（エシアブル）',
    type_desc: '基本的に誰とでも話すことができますが、人見知りなので最初はなかなか話すのが苦手です。話しかけられたら話しますし、慣れてきたらみんなでワイワイするのが好きです。',
    strengths: ['柔軟：どんなことにも基本柔軟に対応できます。', 'ポジティブ：トラブルが起きたりしても、何とかなるだろう精神でいます。', '勉強好き：新しいことを覚えて、日々成長したいと思います。'],
    hobby: 'パチンコ',
    food: '好きな食べ物は、基本甘いものです。好きな飲み物は、ミルクティーです。',
    motivation: '①誰かを助けるとき ②上司が自分の知らないところで褒めていてくれたとき ③新しい仕事に挑戦して、成功として認められたとき',
    stress: 'パチンコ / お酒をたくさん飲む / 甘い食べ物・飲み物',
  },
  {
    id: 'watanabe_takayuki',
    name: '渡辺 隆之',
    office: '岡山営業所',
    called: '渡辺さん',
    type: 'タイプD',
    type_desc: '常に他者の意見を尊重することを意識しています。',
    strengths: ['継続力：石の上にも3年の精神', '使命感：他者に頼らず自己解決', '感謝：いつもありがとうと言うくせをつけている'],
    hobby: '釣り：3ヵ月に1回ほど船釣り。瀬戸内海は最高です。',
    food: '牛肉 / お酒です。',
    motivation: '部下の努力が実った時 / 売上が高い時 / 他人が頑張っている姿を見た時',
    stress: 'サッカー鑑賞、子供と外で遊ぶことです。',
  },
  {
    id: 'nishi_yutaro',
    name: '西 裕太郎',
    office: '岡山営業所',
    called: '所長・西所長（名字は西と短いので覚えやすいですよ）',
    type: '協調型',
    type_desc: '社員が困っていたりした時は、声をかけたり、社員とのコミュニケーションをとるように意識しています。',
    strengths: ['チャレンジ精神：何もかもまずチャレンジすることを意識しています。', 'ポジティブ思考：失敗しても引きずらず（しっかり反省します。）前進あるのみです。', '感謝：何事にも感謝の気持ちを持ちながら日々業務に励んでいます。'],
    hobby: '高校野球観戦 / ゴルフも最近マイブームになりつつあります。',
    food: 'チョコレート・黒砂糖 / 緑茶、水、ブラックコーヒー',
    motivation: '社員、1人1人が成長したなと感じる時です。',
    stress: 'カラオケで好きな曲を歌う事 / バッティングセンターで気が済むまで打ち続ける事',
  },
  {
    id: 'nishihara_yoshito',
    name: '西原 喜人',
    office: '長崎営業所',
    called: '【喜人所長】もしくは【喜人部長】',
    type: 'エミアブル（協調型）',
    type_desc: '人との関係性や安心感を大切にしており、相手の話をよく聞くことを意識しています。人と話しするのは好きなので、気軽に話しかけていただけると嬉しいです。',
    strengths: ['感謝：みんなの協力があっての自分だと思っていますので、つねに感謝の気持ちをもって仕事しております。', '自己開示：自己開示なくして他人も心を開いてくれないと思っているので、常にオープンマインドです。', 'チームワーク：個人で行うより、チームで行えば力が何倍も発揮できると思います。'],
    hobby: '今の時期はプロ野球観戦 / 料理も好きで、作ることも食べる事も好きです。',
    food: '芋焼酎【水割り・ソーダ割】 / 唐揚げ / 明太クリームパスタ',
    motivation: '相談された時：頼られるのは好きなので、どんどん相談してください。/ 部下の成長を感じた時：アドバイスによって出来なかった事が出来るようになった部下を見るとやる気がでます。/ 飲み会をしている時：また楽しい飲み会を開ける様に頑張ろうと思えます。',
    stress: '行きつけのスナックで歌を歌えば次の日には発散しています。/ 無心で手の込んだ料理を作って発散しています。',
  },
];

function getInitial(name) {
  return name.replace(/\s/g, '')[0];
}

const colors = ['#1a9e3f','#2eb85c','#147a30','#0d6b27','#3dc96e'];

function buildPage(m, idx) {
  const color = colors[idx % colors.length];
  const strengthsHTML = m.strengths.map(s => `<li>${s}</li>`).join('');

  return `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${m.name} のトリセツ | フレッシュ青果</title>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&family=Noto+Serif+JP:wght@400;700&display=swap" rel="stylesheet">
<style>
  :root {
    --green: #1a9e3f;
    --green-dark: #147a30;
    --green-light: #e8f5eb;
    --green-mid: #c8e6ce;
    --white: #ffffff;
    --text: #1a2e1c;
    --text-light: #4a6b4e;
    --card-color: ${color};
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'Noto Sans JP', sans-serif;
    background: var(--green-light);
    min-height: 100vh;
    color: var(--text);
    padding-bottom: 40px;
  }

  .hero {
    background: var(--card-color);
    padding: 0 0 32px;
    position: relative;
    overflow: hidden;
  }
  .hero::before {
    content: '';
    position: absolute;
    top: -40px; right: -40px;
    width: 200px; height: 200px;
    background: rgba(255,255,255,0.08);
    border-radius: 50%;
  }
  .hero::after {
    content: '';
    position: absolute;
    bottom: -60px; left: -30px;
    width: 180px; height: 180px;
    background: rgba(255,255,255,0.06);
    border-radius: 50%;
  }

  .back-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: rgba(255,255,255,0.85);
    text-decoration: none;
    font-size: 13px;
    padding: 16px 20px 8px;
    font-weight: 500;
    position: relative;
    z-index: 1;
  }
  .back-btn:hover { color: white; }

  .hero-content {
    padding: 16px 24px 0;
    position: relative;
    z-index: 1;
  }

  .office-tag {
    display: inline-block;
    background: rgba(255,255,255,0.2);
    color: white;
    font-size: 11px;
    padding: 4px 12px;
    border-radius: 50px;
    margin-bottom: 12px;
    font-weight: 500;
    letter-spacing: 0.05em;
  }

  .avatar-name {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;
  }

  .avatar {
    width: 64px; height: 64px;
    border-radius: 50%;
    background: rgba(255,255,255,0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    font-weight: 900;
    color: white;
    flex-shrink: 0;
    border: 3px solid rgba(255,255,255,0.4);
  }

  .hero h1 {
    font-size: 26px;
    font-weight: 900;
    color: white;
    letter-spacing: 0.05em;
  }

  .called-badge {
    margin-top: 8px;
    background: rgba(255,255,255,0.15);
    border-radius: 12px;
    padding: 10px 16px;
    color: white;
    font-size: 13px;
    line-height: 1.6;
  }
  .called-badge strong {
    display: block;
    font-size: 11px;
    opacity: 0.75;
    margin-bottom: 2px;
    font-weight: 500;
    letter-spacing: 0.08em;
  }

  .content {
    padding: 20px 16px;
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .section {
    background: white;
    border-radius: 16px;
    padding: 18px 20px;
    box-shadow: 0 2px 8px rgba(26,158,63,0.07);
    animation: fadeUp 0.4s ease both;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .section:nth-child(1) { animation-delay: 0.05s; }
  .section:nth-child(2) { animation-delay: 0.1s; }
  .section:nth-child(3) { animation-delay: 0.15s; }
  .section:nth-child(4) { animation-delay: 0.2s; }
  .section:nth-child(5) { animation-delay: 0.25s; }

  .section-label {
    font-size: 10px;
    font-weight: 700;
    color: var(--card-color);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-bottom: 6px;
  }

  .section-title {
    font-size: 14px;
    font-weight: 700;
    color: var(--text-light);
    margin-bottom: 10px;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--green-mid);
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .section-body {
    font-size: 14px;
    line-height: 1.75;
    color: var(--text);
  }

  .type-box {
    background: var(--green-light);
    border-left: 3px solid var(--card-color);
    border-radius: 0 10px 10px 0;
    padding: 12px 14px;
    margin-bottom: 8px;
  }

  .type-name {
    font-weight: 700;
    font-size: 15px;
    color: var(--card-color);
    margin-bottom: 6px;
  }

  .strengths-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .strengths-list li {
    padding: 10px 14px;
    background: var(--green-light);
    border-radius: 10px;
    font-size: 13px;
    line-height: 1.6;
    position: relative;
    padding-left: 28px;
  }

  .strengths-list li::before {
    content: '✦';
    position: absolute;
    left: 10px;
    color: var(--card-color);
    font-size: 10px;
    top: 13px;
  }
</style>
</head>
<body>

<div class="hero">
  <a class="back-btn" href="list.html">‹ 一覧に戻る</a>
  <div class="hero-content">
    <span class="office-tag">${m.office}</span>
    <div class="avatar-name">
      <div class="avatar">${getInitial(m.name)}</div>
      <h1>${m.name}</h1>
    </div>
    <div class="called-badge">
      <strong>呼ばれたい名前</strong>
      ${m.called}
    </div>
  </div>
</div>

<div class="content">

  <div class="section">
    <div class="section-label">A-5</div>
    <div class="section-title">💬 コミュニケーションスタイル</div>
    <div class="type-box">
      <div class="type-name">${m.type}</div>
      <div class="section-body">${m.type_desc}</div>
    </div>
  </div>

  <div class="section">
    <div class="section-label">A-6</div>
    <div class="section-title">✨ 持ち味（3つ）</div>
    <ul class="strengths-list">${strengthsHTML}</ul>
  </div>

  <div class="section">
    <div class="section-label">B-1 / B-2</div>
    <div class="section-title">🎯 趣味・好きなもの</div>
    <div class="section-body">
      <p style="margin-bottom:8px"><strong>趣味・マイブーム：</strong>${m.hobby}</p>
      <p><strong>好きな食べ物・飲み物：</strong>${m.food}</p>
    </div>
  </div>

  <div class="section">
    <div class="section-label">C-1</div>
    <div class="section-title">🔥 やる気がでるとき</div>
    <div class="section-body">${m.motivation}</div>
  </div>

  <div class="section">
    <div class="section-label">D-3</div>
    <div class="section-title">💆 ストレス発散方法</div>
    <div class="section-body">${m.stress}</div>
  </div>

</div>

<script>
  if (!sessionStorage.getItem('auth')) {
    window.location.href = 'index.html';
  }
</script>
</body>
</html>`;
}

// 全ページ生成
members.forEach((m, i) => {
  const html = buildPage(m, i);
  fs.writeFileSync(path.join(__dirname, `${m.id}.html`), html, 'utf8');
  console.log(`✓ ${m.name} → ${m.id}.html`);
});

console.log(`\n完了！ ${members.length}ページ生成しました。`);
