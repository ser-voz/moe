<template>
    <div v-if="description" v-html="description" class="description"></div>
    <div class="table">
        <div class="div1">Tense</div>
        <div class="div2">Form</div>
        <div class="div3">Use</div>
        <div class="div16">Signal words</div>
        <div class="div4">
            Past Continuous
        </div>
        <div class="div5">
            was/were + <span class="inf">infinitive </span> &nbsp;+&nbsp;<span class="end">-ing </span><br/>
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
                    <td class="bg-accent-1">was</td>
                    <td>&nbsp;</td>
                    <td class="bg-accent-3">watching</td>
                    <td>TV.</td>
                </tr>
                <tr>
                    <td>You</td>
                    <td class="bg-accent-1">were</td>
                    <td>&nbsp;</td>
                    <td class="bg-accent-3">working</td>
                    <td>hard.</td>
                </tr>
                <tr>
                    <th rowspan="2">-</th>
                    <td>She, he, it</td>
                    <td class="bg-accent-1">was</td>
                    <td>not</td>
                    <td class="bg-accent-3">helping</td>
                    <td>Mary.</td>
                </tr>
                <tr>
                    <td>We, they</td>
                    <td class="bg-accent-1">were</td>
                    <td>not</td>
                    <td class="bg-accent-3">joking.</td>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <th rowspan="2">?</th>
                    <td class="bg-accent-1">Was</td>
                    <td>you</td>
                    <td>&nbsp;</td>
                    <td class="bg-accent-3">being</td>
                    <td>silly?</td>
                </tr>
                <tr>
                    <td class="bg-accent-1">Were</td>
                    <td>they</td>
                    <td>&nbsp;</td>
                    <td class="bg-accent-3">playing</td>
                    <td>football?</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="div9 use">
            <ul>
                <li>an action happened in the middle of another action</li>
                <li>someone was doing sth. at a certain time (in the past) - you do not know whether it was finished or not</li>
            </ul>
        </div>
        <div class="div17 signal-words">
            <ul>
                <li>while</li>
            </ul>
        </div>
    </div>
    <br>
    <div v-if="examples" class="examples">
        <h2>Examples:</h2>
        <div>
            <small v-if="examples?.passive">Active voice</small>
            <ol class="active-voice">
                <li v-for="item in examples.active">
                    {{ item }}
                </li>
            </ol>
        </div>
        <div v-if="examples?.passive">
            <small>Passive voice</small>
            <ol class="passive-voice">
                <li v-for="item in examples.passive">
                    {{ item }}
                </li>
            </ol>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PastContinuous",
        props: {
            description: {
                type: String,
            },
            examples: {
                type: Object
            }
        }
    }
</script>

<style src="@/assets/grammar.style.css" scoped>

</style>