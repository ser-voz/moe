<template>
    <div v-if="description" v-html="description" class="description"></div>
    <div class="table">
        <div class="div1">Tense</div>
        <div class="div2">Form</div>
        <div class="div3">Use</div>
        <div class="div16">Signal words</div>
        <div class="div4">
            Present Perfect Continuous
        </div>
        <div class="div5">
            have/has + <span class="green">been</span>&nbsp;+&nbsp;<span class="inf">infinitive </span> &nbsp;+&nbsp;<span class="end">-ing </span><br/>
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
                    <td class="bg-accent-1">have <span class="green">been</span></td>
                    <td> </td>
                    <td class="bg-accent-3">waiting</td>
                    <td>for one hour.</td>
                </tr>
                <tr>
                    <td>He, she, it</td>
                    <td class="bg-accent-1">has <span class="green">been</span></td>
                    <td></td>
                    <td class="bg-accent-3">talking</td>
                    <td>too much.</td>
                </tr>
                <tr>
                    <th rowspan="2">-</th>
                    <td>I, you, we, they</td>
                    <td class="bg-accent-1">have</td>
                    <td>not</td>
                    <td class="bg-accent-3"><span class="green">been</span> going.</td>
                    <td></td>
                </tr>
                <tr>
                    <td>He, she, it</td>
                    <td class="bg-accent-1">has</td>
                    <td>not</td>
                    <td class="bg-accent-3"><span class="green">been</span> playing</td>
                    <td>football.</td>
                </tr>
                <tr>
                    <th rowspan="2">?</th>
                    <td class="bg-accent-1">Have</td>
                    <td>I, you, we, they</td>
                    <td>&nbsp;</td>
                    <td class="bg-accent-3"><span class="green">been</span> seeing</td>
                    <td>her?</td>
                </tr>
                <tr>
                    <td class="bg-accent-1">Has</td>
                    <td>he, she, it</td>
                    <td>&nbsp;</td>
                    <td class="bg-accent-3"><span class="green">been</span> doing</td>
                    <td>their homework?</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="div9 use">
            <ul>
                <li>action began in the past and has just stopped</li>
                <li>how long the action has been happening</li>
                <li><b>emphasis: length of time of an action</b></li>
            </ul>
        </div>
        <div class="div17 signal-words">
            <ul>
                <li>all day</li>
                <li>the whole day</li>
                <li>how long</li>
                <li>since</li>
                <li>for</li>
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
        name: "PresentPerfectContinuous",
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