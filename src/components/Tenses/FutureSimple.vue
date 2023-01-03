<template>
    <div v-if="description" v-html="description" class="description"></div>
    <div class="table">
        <div class="div1">Tense</div>
        <div class="div2">Form</div>
        <div class="div3">Use</div>
        <div class="div16">Signal words</div>
        <div class="div4">
            Future Simple
        </div>
        <div class="div5">
            will +<span class="inf">infinitive</span>
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
                    <td class="bg-accent-1">will</td>
                    <td>&nbsp;</td>
                    <td class="bg-accent-3">open</td>
                    <td>the door.</td>
                </tr>
                <tr>
                    <td>He, she, it</td>
                    <td class="bg-accent-1">will</td>
                    <td>&nbsp;</td>
                    <td class="bg-accent-3">finish</td>
                    <td>before me.</td>
                </tr>
                <tr>
                    <th rowspan="2">-</th>
                    <td>I, you, we, they</td>
                    <td class="bg-accent-1">will</td>
                    <td>not</td>
                    <td class="bg-accent-3">be</td>
                    <td>at school tomorrow.</td>
                </tr>
                <tr>
                    <td>He, she, it</td>
                    <td class="bg-accent-1">will</td>
                    <td>not</td>
                    <td class="bg-accent-3">leave</td>
                    <td>yet.</td>
                </tr>
                <tr>
                    <th rowspan="2">?</th>
                    <td class="bg-accent-1">Will</td>
                    <td>I, you, we, they</td>
                    <td>&nbsp;</td>
                    <td class="bg-accent-3">arrive</td>
                    <td>on time?</td>
                </tr>
                <tr>
                    <td class="bg-accent-1">Will</td>
                    <td>he, she, it</td>
                    <td>&nbsp;</td>
                    <td class="bg-accent-3">want</td>
                    <td>dinner?</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="div9 use">
            <ul>
                <li>predictions about the future (you think that sth. will happen)</li>
                <li>you decide to do sth. spontaneously at the time of speaking, you haven't made a decision before</li>
                <li>main clause in type I of the if clauses</li>
            </ul>
        </div>
        <div class="div17 signal-words">
            <ul>
                <li>tomorrow</li>
                <li>next year</li>
                <li>later</li>
                <li>as soon as</li>
                <li>in three days</li>
                <li>soon</li>
                <li>tonight</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FutureSimple",
        props: {
            description: {
                type: String,
            }
        }
    }
</script>

<style src="@/assets/grammar.style.css" scoped>

</style>