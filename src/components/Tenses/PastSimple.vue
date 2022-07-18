<template>
    <div v-if="description" v-html="description" class="description"></div>
    <div class="table">
        <div class="div1">Tense</div>
        <div class="div2">Form</div>
        <div class="div3">Use</div>
        <div class="div16">Signal words</div>
        <div class="div4">
            Past Simple
        </div>
        <div class="div5">
            <span class="inf">infinitive </span> &nbsp;+&nbsp;<span class="end">-ed </span><br/>
            <span class="inf w100">2nd irregular verbs </span>
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
                    <td class="bg-accent-1">&nbsp;</td>
                    <td>&nbsp;</td>
                    <td class="bg-accent-3">went</td>
                    <td>to school.</td>
                </tr>
                <tr>
                    <td>You</td>
                    <td class="bg-accent-1">&nbsp;</td>
                    <td>&nbsp;</td>
                    <td class="bg-accent-3">worked</td>
                    <td>very hard.</td>
                </tr>
                <tr>
                    <th rowspan="2">-</th>
                    <td>She, he, it</td>
                    <td class="bg-accent-1">did</td>
                    <td>not</td>
                    <td class="bg-accent-3">go</td>
                    <td>with me.</td>
                </tr>
                <tr>
                    <td>I, we, they</td>
                    <td class="bg-accent-1">did</td>
                    <td>not</td>
                    <td class="bg-accent-3">work</td>
                    <td>yesterday.</td>
                </tr>
                <tr>
                    <th rowspan="2">?</th>
                    <td class="bg-accent-1">Did</td>
                    <td>you</td>
                    <td>&nbsp;</td>
                    <td class="bg-accent-3">go</td>
                    <td>to London?</td>
                </tr>
                <tr>
                    <td class="bg-accent-1">Did</td>
                    <td>they</td>
                    <td>&nbsp;</td>
                    <td class="bg-accent-3">work</td>
                    <td>at home?</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="div9 use">
            action finished in the past,<br/> mostly connected with an expression of time (no connection to the present)
        </div>
        <div class="div17 signal-words">
            <ul>
                <li>last ...</li>
                <li>... ago</li>
                <li>in 1990</li>
                <li>yesterday</li>
            </ul>
        </div>
        </div>
</template>

<script>
    export default {
        name: "PastSimple",
        props: {
            description: {
                type: String,
            }
        }
    }
</script>

<style src="@/assets/grammar.style.css" scoped>

</style>
