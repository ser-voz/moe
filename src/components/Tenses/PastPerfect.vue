<template>
    <div v-if="description" v-html="description" class="description"></div>
    <div class="table">
        <div class="div1">Tense</div>
        <div class="div2">Form</div>
        <div class="div3">Use</div>
        <div class="div16">Signal words</div>
        <div class="div4">
            Past Perfect
        </div>
        <div class="div5">
            had + <span class="inf">past participle*</span><span class="inf w100">(3nd irregular verbs)</span>
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
                    <td class="bg-accent-1">had</td>
                    <td> </td>
                    <td class="bg-accent-3">finished</td>
                    <td>my work.</td>
                </tr>
                <tr>
                    <td>He, she, it</td>
                    <td class="bg-accent-1">had</td>
                    <td></td>
                    <td class="bg-accent-3">eaten</td>
                    <td>before me.</td>
                </tr>
                <tr>
                    <th rowspan="2">-</th>
                    <td>I, you, we, they</td>
                    <td class="bg-accent-1">had</td>
                    <td>not</td>
                    <td class="bg-accent-3">gone</td>
                    <td>to school.</td>
                </tr>
                <tr>
                    <td>He, she, it</td>
                    <td class="bg-accent-1">had</td>
                    <td>not</td>
                    <td class="bg-accent-3">left.</td>
                    <td></td>
                </tr>
                <tr>
                    <th rowspan="2">?</th>
                    <td class="bg-accent-1">Had</td>
                    <td>I, you, we, they</td>
                    <td>&nbsp;</td>
                    <td class="bg-accent-3">arrived?</td>
                    <td></td>
                </tr>
                <tr>
                    <td class="bg-accent-1">Had</td>
                    <td>he, she, it</td>
                    <td>&nbsp;</td>
                    <td class="bg-accent-3">eaten</td>
                    <td>dinner?</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="div9 use">
            <ul>
                <li>mostly when two actions in a story are related to each other: the action which had already happened is put into Past Perfect, the other action into Simple Past</li>
                <li>the past of Present Perfect</li>
            </ul>
        </div>
        <div class="div17 signal-words">
            <ul>
                <li>already</li>
                <li>just</li>
                <li>never</li>
            </ul>
        </div>
    </div>
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
        name: "PastPerfect",
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