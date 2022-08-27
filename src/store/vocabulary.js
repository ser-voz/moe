import {defineStore} from 'pinia'
import getters from "@/store/getters/getters";

export const vocStore = defineStore('vocabulary', {
    state: () => {
        return {
            list: [
                {
                    _id: "62d8482f83029dd889c18db6",
                    eng: "obviously",
                    transcription: "ˈäbvēəslē",
                    tn: "очевидно",
                    otherTranslation: "явно, мабуть, видно, звичайно",
                    sentences: [
                        {
                            en: "I obviously can't be around when it happens.",
                            tn: "Ну, мені явно краще не бути тут, коли це відбудеться."
                        },
                        {
                            en: "Well... he obviously took it to heart.",
                            tn: "Ну... він, мабуть, прийняв це близько до серця."
                        },
                        {
                            en: "But obviously it's important, so whatever.",
                            tn: "Але звісно, це важливо, тож проїхали."
                        }
                    ],
                    __v: 0
                },
                {
                    _id: "62d9034d30566707449958a4",
                    eng: "warn",
                    transcription: "wôrn",
                    tn: "попереджати",
                    otherTranslation: "застерігати, попереджати",
                    sentences: [
                        {
                            en: "I won't warn you twice.",
                            tn: "Я не попереджатиму вас двічі."
                        },
                        {
                            en: "I'll warn you once.",
                            tn: "Я попереджаю вас вперше і востаннє."
                        }
                    ],
                    __v: 0
                },
                {
                    _id: "62d944b77ce32e1f5772cf43",
                    eng: "offend",
                    transcription: "əˈfend",
                    tn: "образити",
                    otherTranslation: "",
                    sentences: [],
                    __v: 0
                },
                {
                    _id: "62d944c77ce32e1f5772cf45",
                    eng: "expect",
                    transcription: "ikˈspekt",
                    tn: "чекати",
                    otherTranslation: "рассчитывать",
                    sentences: [
                        {
                            en: "She's not what you might expect.",
                            tn: "Вона не зовсім така, як ви можете очікувати."
                        },
                        {
                            en: "This is what you should expect.",
                            tn: "Це те, на що ви маєте розраховувати."
                        },
                        {
                            en: "They expect me every day, rain or shine.",
                            tn: "Щодня вони чекають на мене, і в дощ, і в ясну погоду."
                        }
                    ],
                    __v: 0
                },
                {
                    _id: "62d944d17ce32e1f5772cf47",
                    eng: "sentence",
                    transcription: "sen(t)əns",
                    tn: "речення",
                    otherTranslation: "засудити, засуджувати, покарання, вирок",
                    sentences: [
                        {
                            en: "Stop before you finish that sentence.",
                            tn: "Зупинися, доки ти не домовила цю пропозицію."
                        },
                        {
                            en: "You're here to serve your sentence.",
                            tn: "Ти тут для того, щоби відпрацювати своє покарання."
                        },
                        {
                            en: "The sentence was reportedly carried out.",
                            tn: "Вирок був, як стверджується, виконано."
                        }
                    ],
                    __v: 0
                },
                {
                    _id: "62d944dc7ce32e1f5772cf49",
                    eng: "conversation",
                    transcription: "känvərˈsāSH(ə)n",
                    tn: "розмова",
                    otherTranslation: "діалог, розмова",
                    sentences: [
                        {
                            en: "I have had this very conversation.",
                            tn: "У мене вже була така сама розмова."
                        }
                    ],
                    __v: 0
                },
                {
                    _id: "62d944e37ce32e1f5772cf4b",
                    eng: "except",
                    transcription: "ikˈsept",
                    tn: "крім",
                    otherTranslation: "за исключением, исключать, только",
                    sentences: [
                        {
                            en: "Nobody here except you and me.",
                            tn: "Тут немає нікого, окрім тебе та мене, хлопче."
                        },
                        {
                            en: "And nobody saw it coming except you.",
                            tn: "І ніхто не знав, що так буде, окрім тебе."
                        }
                    ],
                    __v: 0
                },
                {
                    _id: "62d944ea7ce32e1f5772cf4d",
                    eng: "familiar",
                    transcription: "fəˈmilyər",
                    tn: "знайомий",
                    otherTranslation: "добре знайомий, звичний",
                    sentences: [
                        {
                            en: "I remember why this is familiar.",
                            tn: "Я згадав, чому це мені знайоме."
                        },
                        {
                            en: "The large dungeon he had entered was horribly familiar.",
                            tn: "Величезне підземелля, до якого він увійшов, було дуже знайоме."
                        }
                    ],
                    __v: 0
                },
                {
                    _id: "62d944f77ce32e1f5772cf4f",
                    eng: "desire",
                    transcription: "dəˈzī(ə)r",
                    tn: "бажання",
                    otherTranslation: "бажати, хотіти, побажання, волевиявлення, прагнення",
                    sentences: [
                        {
                            en: "He said he didn't feel any desire.",
                            tn: "Він сказав, що він не мав жодного бажання."
                        },
                        {
                            en: "Personal desire never influences my aesthetic judgment.",
                            tn: "Мої бажання ніколи не впливають на моє естетичне сприйняття."
                        },
                        {
                            en: "China fully understands the desire of Ukraine for security assurance.",
                            tn: "Китай з повним розумінням ставиться до прагнення України щодо отримання гарантій безпеки."
                        }
                    ],
                    __v: 0
                }
            ],
            search: '',
        }
    },
    getters,
    actions: {
        getFromLocal() {
            this.list = JSON.parse(localStorage.getItem('vocabulary'));
        },
        create(item) {
            item._id = Date.now();
            this.list.push(item);
        },
        update(item) {
            this.list.map(el => el._id === item._id ? el = item : null);
        },
        delete(item) {
            let index = this.list.findIndex(el => el._id === item._id);
            this.list.splice(index, 1);
        }
    }
})

