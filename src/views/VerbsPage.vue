<template>
    <h1>
        <span v-show="irregularVerbsStatus">Table of irregular verbs</span>
        <span v-show="modalVerbsStatus">Table of modal verbs</span>
    </h1>

    <div class="buttons">
        <main-button :disabled="irregularVerbsStatus"
                   @click="modalVerbsStatus = false, irregularVerbsStatus = true"
                   class="btn">
            Irregular verbs
        </main-button>
        <main-button :disabled="modalVerbsStatus"
                   @click="modalVerbsStatus = true, irregularVerbsStatus = false"
                   class="btn">
            Modal verbs
        </main-button>
    </div>
    <table class="irregularTable" v-if="irregularVerbsStatus">
        <thead>
            <tr>
                <th>Infinitive</th>
                <th title="Past Simple">Past Simple</th>
                <th title="Past Participle">Past Participle</th>
                <th>Translation</th>
            </tr>
        </thead>
        <tbody>

        <tr>
            <td>be</td>
            <td>was, were</td>
            <td>been</td>
            <td>Быть</td>
        </tr>
        <tr>
            <td>beat</td>
            <td>beat</td>
            <td>beaten</td>
            <td>Бить</td>
        </tr>
        <tr>
            <td>become</td>
            <td>became</td>
            <td>become</td>
            <td>Становиться</td>
        </tr>
        <tr>
            <td>begin</td>
            <td>began</td>
            <td>begun</td>
            <td>Начинать</td>
        </tr>
        <tr>
            <td>bleed</td>
            <td>bled</td>
            <td>bled</td>
            <td>Кровоточить</td>
        </tr>
        <tr>
            <td>blow</td>
            <td>blew</td>
            <td>blown</td>
            <td>Дуть</td>
        </tr>
        <tr>
            <td>break</td>
            <td>broke</td>
            <td>broken</td>
            <td>Ломать</td>
        </tr>
        <tr>
            <td>bring</td>
            <td>brought</td>
            <td>brought</td>
            <td>Приносить</td>
        </tr>
        <tr>
            <td>build</td>
            <td>built</td>
            <td>built</td>
            <td>Строить</td>
        </tr>
        <tr>
            <td>burn</td>
            <td>burnt</td>
            <td>burnt</td>
            <td>Гореть</td>
        </tr>
        <tr>
            <td>burst</td>
            <td>burst</td>
            <td>burst</td>
            <td>Взрываться</td>
        </tr>
        <tr>
            <td>buy</td>
            <td>bought</td>
            <td>bought</td>
            <td>Покупать</td>
        </tr>
        <tr>
            <td>catch</td>
            <td>caught</td>
            <td>caught</td>
            <td>Ловить, хватать, успеть</td>
        </tr>
        <tr>
            <td>choose</td>
            <td>chose</td>
            <td>chosen</td>
            <td>Выбирать</td>
        </tr>
        <tr>
            <td>come</td>
            <td>came</td>
            <td>come</td>
            <td>Приходить</td>
        </tr>
        <tr>
            <td>cost</td>
            <td>cost</td>
            <td>cost</td>
            <td>Стоить</td>
        </tr>
        <tr>
            <td>creep</td>
            <td>crept</td>
            <td>crept</td>
            <td>Ползать</td>
        </tr>
        <tr>
            <td>cut</td>
            <td>cut</td>
            <td>cut</td>
            <td>Резать</td>
        </tr>
        <tr>
            <td>do</td>
            <td>did</td>
            <td>done</td>
            <td>Делать</td>
        </tr>
        <tr>
            <td>draw</td>
            <td>drew</td>
            <td>drawn</td>
            <td>Рисовать, тащить</td>
        </tr>
        <tr>
            <td>dream</td>
            <td>dreamt</td>
            <td>dreamt</td>
            <td>Мечтать, дремать</td>
        </tr>
        <tr>
            <td>drink</td>
            <td>drank</td>
            <td>drunk</td>
            <td>Пить</td>
        </tr>
        <tr>
            <td>drive</td>
            <td>drove</td>
            <td>driven</td>
            <td>Водить (машину)</td>
        </tr>
        <tr>
            <td>eat</td>
            <td>ate</td>
            <td>eaten</td>
            <td>Есть</td>
        </tr>
        <tr>
            <td>fall</td>
            <td>fell</td>
            <td>fallen</td>
            <td>Падать</td>
        </tr>
        <tr>
            <td>feed</td>
            <td>fed</td>
            <td>fed</td>
            <td>Кормить</td>
        </tr>
        <tr>
            <td>feel</td>
            <td>felt</td>
            <td>felt</td>
            <td>Чувствовать</td>
        </tr>
        <tr>
            <td>fight</td>
            <td>fought</td>
            <td>fought</td>
            <td>Бороться</td>
        </tr>
        <tr>
            <td>find</td>
            <td>found</td>
            <td>found</td>
            <td>Находить</td>
        </tr>
        <tr>
            <td>fit</td>
            <td>fit</td>
            <td>fit</td>
            <td>Подходить по размеру</td>
        </tr>
        <tr>
            <td>fly</td>
            <td>flew</td>
            <td>flown</td>
            <td>Летать</td>
        </tr>
        <tr>
            <td>forget</td>
            <td>forgot</td>
            <td>forgotten</td>
            <td>Забывать</td>
        </tr>
        <tr>
            <td>forgive</td>
            <td>forgave</td>
            <td>forgiven</td>
            <td>Прощать</td>
        </tr>
        <tr>
            <td>freeze</td>
            <td>froze</td>
            <td>frozen</td>
            <td>Замерзать</td>
        </tr>
        <tr>
            <td>get</td>
            <td>got</td>
            <td>got</td>
            <td>Получать</td>
        </tr>
        <tr>
            <td>give</td>
            <td>gave</td>
            <td>given</td>
            <td>Давать</td>
        </tr>
        <tr>
            <td>go</td>
            <td>went</td>
            <td>gone</td>
            <td>Идти</td>
        </tr>
        <tr>
            <td>grow</td>
            <td>grew</td>
            <td>grown</td>
            <td>Расти</td>
        </tr>
        <tr>
            <td>hang</td>
            <td>hung</td>
            <td>hung</td>
            <td>Вешать</td>
        </tr>
        <tr>
            <td>have</td>
            <td>had</td>
            <td>had</td>
            <td>Иметь</td>
        </tr>
        <tr>
            <td>hear</td>
            <td>heard</td>
            <td>heard</td>
            <td>Слышать</td>
        </tr>
        <tr>
            <td>hide</td>
            <td>hid</td>
            <td>hidden</td>
            <td>Прятать</td>
        </tr>
        <tr>
            <td>hit</td>
            <td>hit</td>
            <td>hit</td>
            <td>Попадать в цель</td>
        </tr>
        <tr>
            <td>hold</td>
            <td>held</td>
            <td>held</td>
            <td>Держать</td>
        </tr>
        <tr>
            <td>hurt</td>
            <td>hurt</td>
            <td>hurt</td>
            <td>Причинить боль</td>
        </tr>
        <tr>
            <td>keep</td>
            <td>kept</td>
            <td>kept</td>
            <td>Держать (хранить)</td>
        </tr>
        <tr>
            <td>kneel</td>
            <td>knelt</td>
            <td>knelt</td>
            <td>Стоять на коленях</td>
        </tr>
        <tr>
            <td>know</td>
            <td>knew</td>
            <td>known</td>
            <td>Знать</td>
        </tr>
        <tr>
            <td>lay</td>
            <td>laid</td>
            <td>laid</td>
            <td>Класть</td>
        </tr>
        <tr>
            <td>lead</td>
            <td>led</td>
            <td>led</td>
            <td>Вести</td>
        </tr>
        <tr>
            <td>lean</td>
            <td>leant</td>
            <td>leant</td>
            <td>Наклоняться</td>
        </tr>
        <tr>
            <td>learn</td>
            <td>learnt</td>
            <td>learnt</td>
            <td>Учить</td>
        </tr>
        <tr>
            <td>leave</td>
            <td>left</td>
            <td>left</td>
            <td>Оставлять</td>
        </tr>
        <tr>
            <td>lend</td>
            <td>lent</td>
            <td>lent</td>
            <td>Давать взаймы (деньги)</td>
        </tr>
        <tr>
            <td>let</td>
            <td>let</td>
            <td>let</td>
            <td>Позволять</td>
        </tr>
        <tr>
            <td>lie</td>
            <td>lay</td>
            <td>lain</td>
            <td>Лежать</td>
        </tr>
        <tr>
            <td>light</td>
            <td>lit</td>
            <td>lit</td>
            <td>Освещать</td>
        </tr>
        <tr>
            <td>lose</td>
            <td>lost</td>
            <td>lost</td>
            <td>Терять</td>
        </tr>
        <tr>
            <td>make</td>
            <td>made</td>
            <td>made</td>
            <td>Производить</td>
        </tr>
        <tr>
            <td>mean</td>
            <td>meant</td>
            <td>meant</td>
            <td>Значить</td>
        </tr>
        <tr>
            <td>meet</td>
            <td>met</td>
            <td>met</td>
            <td>Встречать</td>
        </tr>
        <tr>
            <td>mistake</td>
            <td>mistook</td>
            <td>mistaken</td>
            <td>Ошибаться</td>
        </tr>
        <tr>
            <td>pay</td>
            <td>paid</td>
            <td>paid</td>
            <td>Платить</td>
        </tr>
        <tr>
            <td>prove</td>
            <td>proved</td>
            <td>proven</td>
            <td>Доказывать</td>
        </tr>
        <tr>
            <td>put</td>
            <td>put</td>
            <td>put</td>
            <td>Положить</td>
        </tr>
        <tr>
            <td>quit</td>
            <td>quit</td>
            <td>quit</td>
            <td>Покидать (бросать)</td>
        </tr>
        <tr>
            <td>read</td>
            <td>read</td>
            <td>read</td>
            <td>Читать</td>
        </tr>
        <tr>
            <td>ride</td>
            <td>rode</td>
            <td>ridden</td>
            <td>Ездить верхом</td>
        </tr>
        <tr>
            <td>ring</td>
            <td>rang</td>
            <td>rung</td>
            <td>Звенеть</td>
        </tr>
        <tr>
            <td>rise</td>
            <td>rose</td>
            <td>risen</td>
            <td>Подниматься</td>
        </tr>
        <tr>
            <td>run</td>
            <td>ran</td>
            <td>run</td>
            <td>Бежать</td>
        </tr>
        <tr>
            <td>say</td>
            <td>said</td>
            <td>said</td>
            <td>Говорить</td>
        </tr>
        <tr>
            <td>see</td>
            <td>saw</td>
            <td>seen</td>
            <td>Видеть</td>
        </tr>
        <tr>
            <td>seek</td>
            <td>sought</td>
            <td>sought</td>
            <td>Искать</td>
        </tr>
        <tr>
            <td>sell</td>
            <td>sold</td>
            <td>sold</td>
            <td>Продавать</td>
        </tr>
        <tr>
            <td>send</td>
            <td>sent</td>
            <td>sent</td>
            <td>Посылать</td>
        </tr>
        <tr>
            <td>set</td>
            <td>set</td>
            <td>set</td>
            <td>Ставить</td>
        </tr>
        <tr>
            <td>sew</td>
            <td>sewed</td>
            <td>sewn</td>
            <td>Шить</td>
        </tr>
        <tr>
            <td>shake</td>
            <td>shook</td>
            <td>shaken</td>
            <td>Встряхивать</td>
        </tr>
        <tr>
            <td>show</td>
            <td>showed</td>
            <td>shown</td>
            <td>Показывать</td>
        </tr>
        <tr>
            <td>shrink</td>
            <td>shrank</td>
            <td>shrunk</td>
            <td>Сжиматься</td>
        </tr>
        <tr>
            <td>shut</td>
            <td>shut</td>
            <td>shut</td>
            <td>Закрывать</td>
        </tr>
        <tr>
            <td>sing</td>
            <td>sang</td>
            <td>sung</td>
            <td>Петь</td>
        </tr>
        <tr>
            <td>sink</td>
            <td>sank</td>
            <td>sunk</td>
            <td>Тонуть</td>
        </tr>
        <tr>
            <td>sit</td>
            <td>sat</td>
            <td>sat</td>
            <td>Сидеть</td>
        </tr>
        <tr>
            <td>sleep</td>
            <td>slept</td>
            <td>slept</td>
            <td>Спать</td>
        </tr>
        <tr>
            <td>slide</td>
            <td>slid</td>
            <td>slid</td>
            <td>Скользить</td>
        </tr>
        <tr>
            <td>sow</td>
            <td>sowed</td>
            <td>sown</td>
            <td>Сеять</td>
        </tr>
        <tr>
            <td>speak</td>
            <td>spoke</td>
            <td>spoken</td>
            <td>Говорить</td>
        </tr>
        <tr>
            <td>spell</td>
            <td>spelt</td>
            <td>spelt</td>
            <td>Произносить по буквам</td>
        </tr>
        <tr>
            <td>spend</td>
            <td>spent</td>
            <td>spent</td>
            <td>Тратить</td>
        </tr>
        <tr>
            <td>spill</td>
            <td>spilt</td>
            <td>spilt</td>
            <td>Проливать</td>
        </tr>
        <tr>
            <td>spoil</td>
            <td>spoilt</td>
            <td>spoilt</td>
            <td>Портить</td>
        </tr>
        <tr>
            <td>spread</td>
            <td>spread</td>
            <td>spread</td>
            <td>Расстилать</td>
        </tr>
        <tr>
            <td>spring</td>
            <td>sprang</td>
            <td>sprung</td>
            <td>Прыгать</td>
        </tr>
        <tr>
            <td>stand</td>
            <td>stood</td>
            <td>stood</td>
            <td>Стоять</td>
        </tr>
        <tr>
            <td>steal</td>
            <td>stole</td>
            <td>stolen</td>
            <td>Красть</td>
        </tr>
        <tr>
            <td>stick</td>
            <td>stuck</td>
            <td>stuck</td>
            <td>Колоть</td>
        </tr>
        <tr>
            <td>sting</td>
            <td>stung</td>
            <td>stung</td>
            <td>Жалить</td>
        </tr>
        <tr>
            <td>sweep</td>
            <td>swept</td>
            <td>swept</td>
            <td>Выметать</td>
        </tr>
        <tr>
            <td>swell</td>
            <td>swelled</td>
            <td>swollen</td>
            <td>Разбухать</td>
        </tr>
        <tr>
            <td>swim</td>
            <td>swam</td>
            <td>swum</td>
            <td>Плавать</td>
        </tr>
        <tr>
            <td>swing</td>
            <td>swung</td>
            <td>swung</td>
            <td>Качать</td>
        </tr>
        <tr>
            <td>take</td>
            <td>took</td>
            <td>taken</td>
            <td>Брать, взять</td>
        </tr>
        <tr>
            <td>teach</td>
            <td>taught</td>
            <td>taught</td>
            <td>Учить</td>
        </tr>
        <tr>
            <td>tear</td>
            <td>tore</td>
            <td>torn</td>
            <td>Рвать</td>
        </tr>
        <tr>
            <td>tell</td>
            <td>told</td>
            <td>told</td>
            <td>Рассказывать</td>
        </tr>
        <tr>
            <td>think</td>
            <td>thought</td>
            <td>thought</td>
            <td>Думать</td>
        </tr>
        <tr>
            <td>throw</td>
            <td>threw</td>
            <td>thrown</td>
            <td>Бросать</td>
        </tr>
        <tr>
            <td>understand</td>
            <td>understood</td>
            <td>understood</td>
            <td>Понимать</td>
        </tr>
        <tr>
            <td>wake</td>
            <td>woke</td>
            <td>woken</td>
            <td>Просыпаться</td>
        </tr>
        <tr>
            <td>wear</td>
            <td>wore</td>
            <td>worn</td>
            <td>Носить (одежду)</td>
        </tr>
        <tr>
            <td>weep</td>
            <td>wept</td>
            <td>wept</td>
            <td>Плакать</td>
        </tr>
        <tr>
            <td>wet</td>
            <td>wet</td>
            <td>wet</td>
            <td>Мочить</td>
        </tr>
        <tr>
            <td>win</td>
            <td>won</td>
            <td>won</td>
            <td>Выигрывать</td>
        </tr>
        <tr>
            <td>wind</td>
            <td>wound</td>
            <td>wound</td>
            <td>Извиваться</td>
        </tr>
        <tr>
            <td>write</td>
            <td>wrote</td>
            <td>written</td>
            <td>Писать</td>
        </tr>
        </tbody>
    </table>

    <table class="modalTable"  v-if="modalVerbsStatus">
        <thead>
        <tr>
            <th><b>Modal</b></th>
            <th><b>USES</b></th>
            <th><b>Present / Future </b></th>
            <th> <b>PAST </b></th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>be supposed to</td>
            <td>expectation</td>
            <td>We <b>are supposed to</b> meet them here.</td>
            <td>We <b>were supposed to</b> meet here.</td>
        </tr>
        <tr>
            <td>be to </td>
            <td>strong expectation</td>
            <td>We <b>are to</b> meet them here.</td>
            <td> We <b>were to</b> meet them here.</td>
        </tr>
        <tr>
            <td>
                can / could<br>
                Can - Can't<br>
                Could
            </td>
            <td>
                ability / possibility<br>
                informal permission <br>
                informal polite request <br>
                impossibility (negative only)
            </td>
            <td>
                I <b>can</b> learn modal verbs online.<br>
                You <b>can</b> use my car tomorrow. <br>
                <b>Can</b> I borrow your book?<br>
                Cats <b>can't</b> swim.
            </td>
            <td>
                I <b>could</b> jump high a few years ago but now I <b>can't</b>.<br>
                That <b>can't</b> have been true!</td>
        </tr>
        <tr>
            <td>have to</td>
            <td>necessity <br>lack of necessity (negative)</td>
            <td>
                I <b>have to</b> go to class today.<br>
                I <b>don't have to</b> go to class today.
            </td>
            <td>I <b>had to</b> go to class yesterday.<br>
                I <b>didn't have to</b> go to class yesterday.
            </td>
        </tr>
        <tr>
            <td>have got to</td>
            <td>necessity</td>
            <td>I <b>have got to</b> go to class today</td>
            <td>I <b>had to</b> go to class yesterday.</td>
        </tr>
        <tr>
            <td>had better</td>
            <td>strongly advised</td>
            <td>You <b>had better</b> be on time.</td>
            <td> (past form uncommon) </td>
        </tr>
        <tr>
            <td> may </td>
            <td> polite request <br>formal permission <br> less than 50% certainty </td>
            <td>
                <b>May</b> I borrow your book? <br>
                You <b>may</b> leave the room. <br>
                He <b>may</b> be at the school.<br>
            </td>
            <td> He <b>may</b> have been at school.</td>
        </tr>
        <tr>
            <td>Might</td>
            <td>less than 50% certainty </td>
            <td>He <b>might</b> be at school.</td>
            <td>He <b>might have been</b> at school. </td>
        </tr>
        <tr>
            <td>must</td>
            <td>
                strong necessity <br>
                prohibition<br>
                95% certainty
            </td>
            <td>
                I <b>must</b> go to class today.<br>
                You <b>must not</b> open that door.<br>
                Mary isn't in class. She <b>must</b> <u>be</u> sick.(present only)
            </td>
            <td>
                I <b>had to</b> go to class yesterday.<br>
                Mary <b>must</b> <u>have been</u> sick yesterday.
            </td>
        </tr>
        <tr>
            <td>ought to</td>
            <td>
                advisability<br>
                80% certainty
            </td>
            <td>
                I <b>ought to</b> study tonight.<br>
                She <b>ought to</b> be at school
            </td>
            <td>
                I <b>ought to</b> have studied last night.<br>
                She <b>ought to</b> have done well on the test.
            </td>
        </tr>
        <tr>
            <td>shall</td>
            <td>ask another person's opinion (only used with I or we)</td>
            <td>
                <b>Shall</b> I invite them too? <br>
                Shall we dance?
            </td>
            <td></td>
        </tr>
        <tr>
            <td>should</td>
            <td>
                advisability <br>
                80% certainty<br>
            </td>
            <td>
                I <b>should</b> study tonight <br>
                He <b>should</b> be at school<br>
            </td>
            <td>
                You <b>should</b> have paid your bills. <br>
                He <b>should</b> have done well on the test.
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>

    export default {
        name: "IrregularVerbs",
        data() {
            return {
                irregularVerbsStatus: true,
                modalVerbsStatus: false
            }
        },

    }
</script>

<style scoped>
    h1 {
        margin-bottom: 80px;
    }

    .irregularTable {
        max-width: 900px;
    }
    .modalTable {
        max-width: 1200px;
    }


    .buttons {
        display: flex;
        justify-content: center;
        margin-top: 15px;
    }

    .btn {
        margin: 0 10px;
    }



</style>