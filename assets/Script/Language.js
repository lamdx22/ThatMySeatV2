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
            '<color=#FF7A00><u>Caleb</u></color>\'s grandchild married a curly-haired man.', // English
            'Внук <color=#FF7A00><u>Caleb</u></color> женился на мужчине с кудрявыми волосами.', // Russian
            '<color=#FF7A00><u>Caleb</u></color>의 손주가 곱슬머리 남자와 결혼했어요.', // Korean
            '<color=#FF7A00><u>Caleb</u></color>の孫はくせ毛の男性と結婚しました。', // Japanese
            'El nieto de <color=#FF7A00><u>Caleb</u></color> se casó con un hombre de cabello rizado.', // Spanish
            '<color=#FF7A00><u>Caleb</u></color>的孙子娶了一个卷发的男人。', // Chinese
            'Der Enkel von <color=#FF7A00><u>Caleb</u></color> hat einen lockigen Mann geheiratet.', // German
            'Le petit-enfant de <color=#FF7A00><u>Caleb</u></color> a épousé un homme aux cheveux bouclés.', // French
            'O neto de <color=#FF7A00><u>Caleb</u></color> se casou com um homem de cabelos cacheados.', // Portuguese
        ];
        this.mason = [
            '<color=#FF7A00><u>Angela</u></color>\'s grandchild always brings laughter to the family.', // English
            'Внук <color=#FF7A00><u>Angela</u></color> всегда приносит смех в семью.', // Russian
            '<color=#FF7A00><u>Angela</u></color>의 손주는 항상 가족에게 웃음을 선사해요.', // Korean
            '<color=#FF7A00><u>Angela</u></color>の孫はいつも家族に笑いをもたらします。', // Japanese
            'El nieto de <color=#FF7A00><u>Angela</u></color> siempre trae risas a la familia.', // Spanish
            '<color=#FF7A00><u>Angela</u></color>的孙子总是给家人带来欢笑。', // Chinese
            'Der Enkel von <color=#FF7A00><u>Angela</u></color> bringt der Familie immer Freude und Lachen.', // German
            'Le petit-enfant de <color=#FF7A00><u>Angela</u></color> apporte toujours des rires à la famille.', // French
            'O neto de <color=#FF7A00><u>Angela</u></color> sempre traz risadas para a família.', // Portuguese

        ];
        this.diane = [
            '<color=#FF7A00><u>Gregory</u></color>\'s grandchild usually dyes her hair white.', // English
            'Внучка <color=#FF7A00><u>Gregory</u></color> обычно красит волосы в белый цвет.', // Russian
            '<color=#FF7A00><u>Gregory</u></color>의 손녀는 보통 머리를 하얗게 염색해요.', // Korean
            '<color=#FF7A00><u>Gregory</u></color>の孫は普段髪を白く染めます。', // Japanese
            'La nieta de <color=#FF7A00><u>Gregory</u></color> suele teñirse el cabello de blanco.', // Spanish
            '<color=#FF7A00><u>Gregory</u></color>的孙女通常把头发染成白色。', // Chinese
            'Die Enkelin von <color=#FF7A00><u>Gregory</u></color> färbt sich normalerweise die Haare weiß.', // German
            'La petite-fille de <color=#FF7A00><u>Gregory</u></color> se teint habituellement les cheveux en blanc.', // French
            'A neta de <color=#FF7A00><u>Gregory</u></color> geralmente pinta o cabelo de branco.', // Portuguese

        ];
        this.gregory = [
            '<color=#FF7A00><u>Gregory</u></color> is <color=#FF7A00><u>Angela</u></color>\'s son.', // English
            '<color=#FF7A00><u>Gregory</u></color> — сын <color=#FF7A00><u>Angela</u></color>.', // Russian
            '<color=#FF7A00><u>Gregory</u></color>는 <color=#FF7A00><u>Angela</u></color>의 아들이에요.', // Korean
            '<color=#FF7A00><u>Gregory</u></color>は<color=#FF7A00><u>Angela</u></color>の息子です。', // Japanese
            '<color=#FF7A00><u>Gregory</u></color> es el hijo de <color=#FF7A00><u>Angela</u></color>.', // Spanish
            '<color=#FF7A00><u>Gregory</u></color>是<color=#FF7A00><u>Angela</u></color>的儿子。', // Chinese
            '<color=#FF7A00><u>Gregory</u></color> ist der Sohn von <color=#FF7A00><u>Angela</u></color>.', // German
            '<color=#FF7A00><u>Gregory</u></color> est le fils de <color=#FF7A00><u>Angela</u></color>.', // French
            '<color=#FF7A00><u>Gregory</u></color> é o filho de <color=#FF7A00><u>Angela</u></color>.', // Portuguese

        ];
        this.kathleen = [
            '<color=#FF7A00><u>Brittany</u></color>\'s daughter has curly hair just like her mother.', // English
            'У дочери <color=#FF7A00><u>Brittany</u></color> кудрявые волосы, как у её матери.', // Russian
            '<color=#FF7A00><u>Brittany</u></color>의 딸은 엄마처럼 곱슬머리를 가지고 있어요.', // Korean
            '<color=#FF7A00><u>Brittany</u></color>の娘は母親と同じようにくせ毛です。', // Japanese
            'La hija de <color=#FF7A00><u>Brittany</u></color> tiene el cabello rizado, igual que su madre.', // Spanish
            '<color=#FF7A00><u>Brittany</u></color>的女儿和她妈妈一样有卷发。', // Chinese
            'Die Tochter von <color=#FF7A00><u>Brittany</u></color> hat lockiges Haar, genau wie ihre Mutter.', // German
            'La fille de <color=#FF7A00><u>Brittany</u></color> a les cheveux bouclés, tout comme sa mère.', // French
            'A filha de <color=#FF7A00><u>Brittany</u></color> tem cabelos cacheados, assim como a mãe.', // Portuguese

        ];
        this.liam = [
            '<color=#FF7A00><u>Liam</u></color> is <color=#FF7A00><u>Doris</u></color>\'s husband.', // English
            '<color=#FF7A00><u>Liam</u></color> — муж <color=#FF7A00><u>Doris</u></color>.', // Russian
            '<color=#FF7A00><u>Liam</u></color>은 <color=#FF7A00><u>Doris</u></color>의 남편이에요.', // Korean
            '<color=#FF7A00><u>Liam</u></color>は<color=#FF7A00><u>Doris</u></color>の夫です。', // Japanese
            '<color=#FF7A00><u>Liam</u></color> es el esposo de <color=#FF7A00><u>Doris</u></color>.', // Spanish
            '<color=#FF7A00><u>Liam</u></color>是<color=#FF7A00><u>Doris</u></color>的丈夫。', // Chinese
            '<color=#FF7A00><u>Liam</u></color> ist der Ehemann von <color=#FF7A00><u>Doris</u></color>.', // German
            '<color=#FF7A00><u>Liam</u></color> est le mari de <color=#FF7A00><u>Doris</u></color>.', // French
            '<color=#FF7A00><u>Liam</u></color> é o marido de <color=#FF7A00><u>Doris</u></color>.', // Portuguese

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