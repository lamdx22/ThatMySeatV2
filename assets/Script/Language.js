class Language {
    //languages = ['en','es','vn','jp','kr', 'ru']
    constructor() {
        this.EN = 0;
        this.RU = 1;
        this.JP = 2;
        this.KR = 3;
        this.VN = 4;
        this.ES = 5;

        this.language = this.EN;
        this.dracoM = [
            '<color=#FF7A00><u>Baby</u></color> needs a child safety seat.', // English
            '<color=#FF7A00><u>Малышу</u></color> нужно детское автокресло.', // Russian
            '<color=#FF7A00><u>아기</u></color>는 유아용 안전 좌석이 필요해요.', // Korean
            '<color=#FF7A00><u>赤ちゃん</u></color>はチャイルドシートが必要です。', // Japanese
            '<color=#FF7A00><u>Bebé</u></color> necesita un asiento de seguridad infantil.', // Spanish
            '<color=#FF7A00><u>宝宝</u></color>需要儿童安全座椅。', // Chinese
            '<color=#FF7A00><u>Baby</u></color> braucht einen Kindersitz.', // German
            '<color=#FF7A00><u>Bébé</u></color> a besoin d\'un siège auto pour enfant.', // French
            '<color=#FF7A00><u>Bebê</u></color> precisa de um assento de segurança infantil.', // Portuguese
        ];
        this.albusD = [
            '<color=#FF7A00><u>Matthew</u></color> is the only one who can drive the bus.', // English
            '<color=#FF7A00><u>Matthew</u></color> — единственный, кто может вести автобус.', // Russian
            '<color=#FF7A00><u>Matthew</u></color>만이 버스를 운전할 수 있어요.', // Korean
            '<color=#FF7A00><u>Matthew</u></color>だけがバスを運転できます。', // Japanese
            '<color=#FF7A00><u>Matthew</u></color> es el único que puede conducir el autobús.', // Spanish
            '<color=#FF7A00><u>Matthew</u></color>是唯一能开公交车的人。', // Chinese
            '<color=#FF7A00><u>Matthew</u></color> ist der Einzige, der den Bus fahren kann.', // German
            '<color=#FF7A00><u>Matthew</u></color> est le seul à pouvoir conduire le bus.', // French
            '<color=#FF7A00><u>Matthew</u></color> é o único que pode dirigir o ônibus.', // Portuguese
        ];
        this.harryP = [
            '<color=#FF7A00><u>Lori</u></color> has to stay in the cage.', // English
            '<color=#FF7A00><u>Lori</u></color> должна оставаться в клетке.', // Russian
            '<color=#FF7A00><u>Lori</u></color>는 우리 안에 있어야 해요.', // Korean
            '<color=#FF7A00><u>Lori</u></color>は檻の中にいなければなりません。', // Japanese
            '<color=#FF7A00><u>Lori</u></color> tiene que quedarse en la jaula.', // Spanish
            '<color=#FF7A00><u>Lori</u></color>必须待在笼子里。', // Chinese
            '<color=#FF7A00><u>Lori</u></color> muss im Käfig bleiben.', // German
            '<color=#FF7A00><u>Lori</u></color> doit rester dans la cage.', // French
            '<color=#FF7A00><u>Lori</u></color> tem que ficar na gaiola.', // Portuguese
        ];
        this.ronW = [
            '<color=#FF7A00><u>Evelyn</u></color> like sitting in the corner.', // English
            '<color=#FF7A00><u>Evelyn</u></color> любит сидеть в углу.', // Russian
            '<color=#FF7A00><u>Evelyn</u></color>은 구석에 앉아 있는 걸 좋아해요.', // Korean
            '<color=#FF7A00><u>Evelyn</u></color>は隅に座るのが好きです。', // Japanese
            '<color=#FF7A00><u>Evelyn</u></color> le gusta sentarse en la esquina.', // Spanish
            '<color=#FF7A00><u>Evelyn</u></color>喜欢坐在角落里。', // Chinese
            '<color=#FF7A00><u>Evelyn</u></color> sitzt gerne in der Ecke.', // German
            '<color=#FF7A00><u>Evelyn</u></color> aime s’asseoir dans le coin.', // French
            '<color=#FF7A00><u>Evelyn</u></color> gosta de sentar no canto.', // Portuguese
        ];
        this.hermioneG = [
            "<color=#FF7A00><u>HermioneG</u></color> sat opposite <color=#FF7A00><u>RonW</u></color>, happily welcoming <color=#FF7A00><u>HarryP</u></color>.", // English
            "<color=#FF7A00><u>HermioneG</u></color> села напротив <color=#FF7A00><u>RonW</u></color>, радостно приветствуя <color=#FF7A00><u>HarryP</u></color>.", // Russian
            "<color=#FF7A00><u>HermioneG</u></color>は<color=#FF7A00><u>RonW</u></color>の向かいに座り、<color=#FF7A00><u>HarryP</u></color>を嬉しそうに迎えた。", // Japanese
            "<color=#FF7A00><u>HermioneG</u></color>는 <color=#FF7A00><u>RonW</u></color> 맞은편에 앉아 <color=#FF7A00><u>HarryP</u></color>를 기쁘게 맞이했다.", // Korean
            "<color=#FF7A00><u>HermioneG</u></color> ngồi đối diện <color=#FF7A00><u>RonW</u></color>, vui vẻ chào đón <color=#FF7A00><u>HarryP</u></color>.", // Vietnamese
            "<color=#FF7A00><u>HermioneG</u></color> se sentó frente a <color=#FF7A00><u>RonW</u></color>, dando la bienvenida alegremente a <color=#FF7A00><u>HarryP</u></color>." // Spanish
        ];
        this.minerva = [
            'The baby is cared for by a wonderful mother, <color=#FF7A00><u>Abigail</u></color>.', // English
            'Малыша заботливо воспитывает замечательная мама, <color=#FF7A00><u>Abigail</u></color>.', // Russian
            '아기는 멋진 엄마 <color=#FF7A00><u>Abigail</u></color>의 보살핌을 받고 있어요.', // Korean
            '赤ちゃんは素晴らしいお母さん、<color=#FF7A00><u>Abigail</u></color>に育てられています。', // Japanese
            'El bebé está cuidado por una madre maravillosa, <color=#FF7A00><u>Abigail</u></color>.', // Spanish
            '宝宝由一位很棒的妈妈<color=#FF7A00><u>Abigail</u></color>照顾。', // Chinese
            'Das Baby wird von einer wundervollen Mutter, <color=#FF7A00><u>Abigail</u></color>, betreut.', // German
            'Le bébé est pris en charge par une merveilleuse mère, <color=#FF7A00><u>Abigail</u></color>.', // French
            'O bebê é cuidado por uma mãe maravilhosa, <color=#FF7A00><u>Abigail</u></color>.', // Portuguese
        ];
    }

    getDracoText() {
        return this.dracoM[this.language];
    }
    getAlbusText() {
        return this.albusD[this.language];
    }
    
    getHarryText() {
        return this.harryP[this.language];
    }
    
    getRonText() {
        return this.ronW[this.language];
    }
    
    getHagrideText() {
        return this.hagride[this.language];
    }
    
    getHermioneText() {
        return this.hermioneG[this.language];
    }
    getMinervaText() {
        return this.minerva[this.language];
    }
    // getLanguage() {
    //     var lang = 'VI';
    //     switch (this.language) {
    //         case this.VI:
    //             lang = 'VI';
    //             break;
    //         case this.EN:
    //             lang = 'EN';
    //             break;
    //         case this.JA:
    //             lang = 'JP';
    //             break;
    //         case this.KO:
    //             lang = 'KR';
    //             break;
    //         case this.TW:
    //             lang = 'TW';
    //             break;
    //         case this.DE:
    //             lang = 'DE';
    //             break;
    //         case this.ES:
    //             lang = 'ES';
    //             break;
    //         case this.PT:
    //             lang = 'PT';
    //             break;
    //         case this.RU:
    //             lang = 'RU';
    //             break;
    //         case this.HI:
    //             lang = 'HI';
    //             break;
    //         case this.AR:
    //             lang = 'AR';
    //             break;
    //         case this.ID:
    //             lang = 'ID';
    //             break;
    //         case this.PH:
    //             lang = 'PH';
    //             break;
    //         case this.TH:
    //             lang = 'TH';
    //             break;
    //     }
    //     return lang;
    // }
}
var language = new Language();
export default language;