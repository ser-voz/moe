<template>
    <div v-if="description" v-html="description" class="description"></div>
    <div class="table">
        <div class="div1">Tense</div>
        <div class="div2">Form</div>
        <div class="div3">Use</div>
        <div class="div16">Signal words</div>
        <div class="div4">
            Present Simple
        </div>
        <div class="div5">
            <span class="inf w100">infinitive</span> (he/she/it) +&nbsp;<span class="end"> -s, es</span>
        </div>
        <div class="div6">
            <table class="ec-table">
                <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th><strong>subject</strong></th>
                    <th class="bg-accent-1"><strong>auxiliary verb</strong></th>
                    <th>&nbsp;</th>
                    <th class="bg-accent-3"><strong>main verb</strong></th>
                    <th>&nbsp;</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th rowspan="2">+</th>
                    <td>I, you, we, they</td>
                    <td class="bg-accent-1"></td>
                    <td>&nbsp;</td>
                    <td class="bg-accent-3">like</td>
                    <td>coffee.</td>
                </tr>
                <tr>
                    <td>He, she, it</td>
                    <td class="bg-accent-1"></td>
                    <td>&nbsp;</td>
                    <td class="bg-accent-3">like<strong>s</strong></td>
                    <td>coffee.</td>
                </tr>
                <tr>
                    <th rowspan="2">-</th>
                    <td>I, you, we, they</td>
                    <td class="bg-accent-1">do</td>
                    <td>not</td>
                    <td class="bg-accent-3">like</td>
                    <td>coffee.</td>
                </tr>
                <tr>
                    <td>He, she, it</td>
                    <td class="bg-accent-1">do<strong>es</strong></td>
                    <td>not</td>
                    <td class="bg-accent-3">like</td>
                    <td>coffee.</td>
                </tr>
                <tr>
                    <th rowspan="2">?</th>
                    <td class="bg-accent-1">Do</td>
                    <td>I, you, we, they</td>
                    <td>&nbsp;</td>
                    <td class="bg-accent-3">like</td>
                    <td>coffee?</td>
                </tr>
                <tr>
                    <td class="bg-accent-1">Do<strong>es</strong></td>
                    <td>he, she, it</td>
                    <td>&nbsp;</td>
                    <td class="bg-accent-3">like</td>
                    <td>coffee?</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="div9 use">
            <ul>
                <li>something happens repeatedly</li>
                <li>how often something happens</li>
                <li>one action follows another</li>
                <li>things in general</li>
                <li>with the following verbs (to love, to hate, to think, etc.)</li>
                <li>future meaning: timetables, programmes</li>
            </ul>
        </div>
        <div class="div17 signal-words">
            <ul>
                <li>every day</li>
                <li>sometimes</li>
                <li>always</li>
                <li>often</li>
                <li>usually</li>
                <li>seldom</li>
                <li>never</li>
                <li>first ... then</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PresentSimple",
        props: {
            description: {
                type: String,
            }
        }
    }
</script>

<style src="@/assets/grammar.style.css" scoped>

</style>