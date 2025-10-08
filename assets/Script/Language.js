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
        this.thomas = [
            '<on click="Caleb"><color=#FF7A00><u>Caleb</u></color></on>\'s grandchild married a curly-haired man.', // English
            'Внук <on click="Caleb"><color=#FF7A00><u>Caleb</u></color></on> женился на мужчине с кудрявыми волосами.', // Russian
            '<on click="Caleb"><color=#FF7A00><u>Caleb</u></color></on>의 손주가 곱슬머리 남자와 결혼했어요.', // Korean
            '<on click="Caleb"><color=#FF7A00><u>Caleb</u></color></on>の孫はくせ毛の男性と結婚しました。', // Japanese
            'El nieto de <on click="Caleb"><color=#FF7A00><u>Caleb</u></color></on> se casó con un hombre de cabello rizado.', // Spanish
            '<on click="Caleb"><color=#FF7A00><u>Caleb</u></color></on>的孙子娶了一个卷发的男人。', // Chinese
            'Der Enkel von <on click="Caleb"><color=#FF7A00><u>Caleb</u></color></on> hat einen lockigen Mann geheiratet.', // German
            'Le petit-enfant de <on click="Caleb"><color=#FF7A00><u>Caleb</u></color></on> a épousé un homme aux cheveux bouclés.', // French
            'O neto de <on click="Caleb"><color=#FF7A00><u>Caleb</u></color></on> se casou com um homem de cabelos cacheados.', // Portuguese
        ];

        this.mason = [
            '<on click="Angela"><color=#FF7A00><u>Angela</u></color></on>\'s grandchild always brings laughter to the family.', // English
            'Внук <on click="Angela"><color=#FF7A00><u>Angela</u></color></on> всегда приносит смех в семью.', // Russian
            '<on click="Angela"><color=#FF7A00><u>Angela</u></color></on>의 손주는 항상 가족에게 웃음을 선사해요.', // Korean
            '<on click="Angela"><color=#FF7A00><u>Angela</u></color></on>の孫はいつも家族に笑いをもたらします。', // Japanese
            'El nieto de <on click="Angela"><color=#FF7A00><u>Angela</u></color></on> siempre trae risas a la familia.', // Spanish
            '<on click="Angela"><color=#FF7A00><u>Angela</u></color></on>的孙子总是给家人带来欢笑。', // Chinese
            'Der Enkel von <on click="Angela"><color=#FF7A00><u>Angela</u></color></on> bringt der Familie immer Freude und Lachen.', // German
            'Le petit-enfant de <on click="Angela"><color=#FF7A00><u>Angela</u></color></on> apporte toujours des rires à la famille.', // French
            'O neto de <on click="Angela"><color=#FF7A00><u>Angela</u></color></on> sempre traz risadas para a família.', // Portuguese
        ];

        this.diane = [
            '<on click="Gregory"><color=#FF7A00><u>Gregory</u></color></on>\'s grandchild usually dyes her hair white.', // English
            'Внучка <on click="Gregory"><color=#FF7A00><u>Gregory</u></color></on> обычно красит волосы в белый цвет.', // Russian
            '<on click="Gregory"><color=#FF7A00><u>Gregory</u></color></on>의 손녀는 보통 머리를 하얗게 염색해요.', // Korean
            '<on click="Gregory"><color=#FF7A00><u>Gregory</u></color></on>の孫は普段髪を白く染めます。', // Japanese
            'La nieta de <on click="Gregory"><color=#FF7A00><u>Gregory</u></color></on> suele teñirse el cabello de blanco.', // Spanish
            '<on click="Gregory"><color=#FF7A00><u>Gregory</u></color></on>的孙女通常把头发染成白色。', // Chinese
            'Die Enkelin von <on click="Gregory"><color=#FF7A00><u>Gregory</u></color></on> färbt sich normalerweise die Haare weiß.', // German
            'La petite-fille de <on click="Gregory"><color=#FF7A00><u>Gregory</u></color></on> se teint habituellement les cheveux en blanc.', // French
            'A neta de <on click="Gregory"><color=#FF7A00><u>Gregory</u></color></on> geralmente pinta o cabelo de branco.', // Portuguese
        ];

        this.gregory = [
            '<on click="Gregory"><color=#FF7A00><u>Gregory</u></color></on> is <on click="Angela"><color=#FF7A00><u>Angela</u></color></on>\'s son.', // English
            '<on click="Gregory"><color=#FF7A00><u>Gregory</u></color></on> — сын <on click="Angela"><color=#FF7A00><u>Angela</u></color></on>.', // Russian
            '<on click="Gregory"><color=#FF7A00><u>Gregory</u></color></on>는 <on click="Angela"><color=#FF7A00><u>Angela</u></color></on>의 아들이에요.', // Korean
            '<on click="Gregory"><color=#FF7A00><u>Gregory</u></color></on>は<on click="Angela"><color=#FF7A00><u>Angela</u></color></on>の息子です。', // Japanese
            '<on click="Gregory"><color=#FF7A00><u>Gregory</u></color></on> es el hijo de <on click="Angela"><color=#FF7A00><u>Angela</u></color></on>.', // Spanish
            '<on click="Gregory"><color=#FF7A00><u>Gregory</u></color></on>是<on click="Angela"><color=#FF7A00><u>Angela</u></color></on>的儿子。', // Chinese
            '<on click="Gregory"><color=#FF7A00><u>Gregory</u></color></on> ist der Sohn von <on click="Angela"><color=#FF7A00><u>Angela</u></color></on>.', // German
            '<on click="Gregory"><color=#FF7A00><u>Gregory</u></color></on> est le fils de <on click="Angela"><color=#FF7A00><u>Angela</u></color></on>.', // French
            '<on click="Gregory"><color=#FF7A00><u>Gregory</u></color></on> é o filho de <on click="Angela"><color=#FF7A00><u>Angela</u></color></on>.', // Portuguese
        ];

        this.kathleen = [
            '<on click="Brittany"><color=#FF7A00><u>Brittany</u></color></on>\'s daughter has curly hair just like her mother.', // English
            'У дочери <on click="Brittany"><color=#FF7A00><u>Brittany</u></color></on> кудрявые волосы, как у её матери.', // Russian
            '<on click="Brittany"><color=#FF7A00><u>Brittany</u></color></on>의 딸은 엄마처럼 곱슬머리를 가지고 있어요.', // Korean
            '<on click="Brittany"><color=#FF7A00><u>Brittany</u></color></on>の娘は母親と同じようにくせ毛です。', // Japanese
            'La hija de <on click="Brittany"><color=#FF7A00><u>Brittany</u></color></on> tiene el cabello rizado, igual que su madre.', // Spanish
            '<on click="Brittany"><color=#FF7A00><u>Brittany</u></color></on>的女儿和她妈妈一样有卷发。', // Chinese
            'Die Tochter von <on click="Brittany"><color=#FF7A00><u>Brittany</u></color></on> hat lockiges Haar, genau wie ihre Mutter.', // German
            'La fille de <on click="Brittany"><color=#FF7A00><u>Brittany</u></color></on> a les cheveux bouclés, tout comme sa mère.', // French
            'A filha de <on click="Brittany"><color=#FF7A00><u>Brittany</u></color></on> tem cabelos cacheados, assim como a mãe.', // Portuguese
        ];

        this.liam = [
            '<on click="Liam"><color=#FF7A00><u>Liam</u></color></on> is <on click="Doris"><color=#FF7A00><u>Doris</u></color></on>\'s husband.', // English
            '<on click="Liam"><color=#FF7A00><u>Liam</u></color></on> — муж <on click="Doris"><color=#FF7A00><u>Doris</u></color></on>.', // Russian
            '<on click="Liam"><color=#FF7A00><u>Liam</u></color></on>은 <on click="Doris"><color=#FF7A00><u>Doris</u></color></on>의 남편이에요.', // Korean
            '<on click="Liam"><color=#FF7A00><u>Liam</u></color></on>は<on click="Doris"><color=#FF7A00><u>Doris</u></color></on>の夫です。', // Japanese
            '<on click="Liam"><color=#FF7A00><u>Liam</u></color></on> es el esposo de <on click="Doris"><color=#FF7A00><u>Doris</u></color></on>.', // Spanish
            '<on click="Liam"><color=#FF7A00><u>Liam</u></color></on>是<on click="Doris"><color=#FF7A00><u>Doris</u></color></on>的丈夫。', // Chinese
            '<on click="Liam"><color=#FF7A00><u>Liam</u></color></on> ist der Ehemann von <on click="Doris"><color=#FF7A00><u>Doris</u></color></on>.', // German
            '<on click="Liam"><color=#FF7A00><u>Liam</u></color></on> est le mari de <on click="Doris"><color=#FF7A00><u>Doris</u></color></on>.', // French
            '<on click="Liam"><color=#FF7A00><u>Liam</u></color></on> é o marido de <on click="Doris"><color=#FF7A00><u>Doris</u></color></on>.', // Portuguese
        ];

    }

    getThomasText() {
        return this.thomas[this.language];
    }
    getMasonText() {
        return this.mason[this.language];
    }
    
    getDianeText() {
        return this.diane[this.language];
    }
    
    getGregoryText() {
        return this.gregory[this.language];
    }
    
    getKathleenText() {
        return this.kathleen[this.language];
    }
    
    getLiamText() {
        return this.liam[this.language];
    }
    // getMinervaText() {
    //     return this.minerva[this.language];
    // }
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