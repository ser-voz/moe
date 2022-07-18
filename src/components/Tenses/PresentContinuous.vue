<template>
    <div v-if="description" v-html="description" class="description"></div>
    <div class="table">
        <div class="div1">Tense</div>
        <div class="div2">Form</div>
        <div class="div3">Use</div>
        <div class="div16">Signal words</div>
        <div class="div4">
            Present Continuous
        </div>
        <div class="div5">
            to be (am/are/is) + <span class="inf">infinitive </span> &nbsp;+&nbsp;<span class="end">-ing </span><br/>
        </div>
        <div class="div6">
            <table class="ec-table">
                <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>subject</th>
                    <th class="bg-accent-1">auxiliary verb</th>
                    <th>&nbsp;</th>
                    <th class="bg-accent-3">main verb</th>
                    <th>&nbsp;</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th rowspan="2">+</th>
                    <td>I</td>
                    <td class="bg-accent-1">am</td>
                    <td>&nbsp;</td>
                    <td class="bg-accent-3">speaking</td>
                    <td>to you.</td>
                </tr>
                <tr>
                    <td>You</td>
                    <td class="bg-accent-1">are</td>
                    <td>&nbsp;</td>
                    <td class="bg-accent-3">reading</td>
                    <td>this.</td>
                </tr>
                <tr>
                    <th rowspan="2">-</th>
                    <td>She, he, it</td>
                    <td class="bg-accent-1">is</td>
                    <td>not</td>
                    <td class="bg-accent-3">staying</td>
                    <td>in London.</td>
                </tr>
                <tr>
                    <td>We, they</td>
                    <td class="bg-accent-1">are</td>
                    <td>not</td>
                    <td class="bg-accent-3">playing</td>
                    <td>football.</td>
                </tr>
                <tr>
                    <th rowspan="2">?</th>
                    <td class="bg-accent-1">Is</td>
                    <td>you</td>
                    <td>&nbsp;</td>
                    <td class="bg-accent-3">watching</td>
                    <td>TV?</td>
                </tr>
                <tr>
                    <td class="bg-accent-1">Are</td>
                    <td>they</td>
                    <td>&nbsp;</td>
                    <td class="bg-accent-3">waiting</td>
                    <td>for John?</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="div9 use">
            <ul>
                <li>something is happening at the same time of speaking or around it </li>
                <li>future meaning: when you have already decided and arranged to do it (a fixed plan, date)</li>
            </ul>
        </div>
        <div class="div17 signal-words">
            <ul>
                <li>now</li>
                <li>at the moment</li>
                <li>Look!</li>
                <li>Listen!</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PresentContinuous",
        props: {
            description: {
                type: String,
            }
        }
    }
</script>

<style src="@/assets/grammar.style.css" scoped>

</style>