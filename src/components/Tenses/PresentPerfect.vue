<template>
    <div v-if="description" v-html="description" class="description"></div>
    <div class="table">
        <div class="div1">Tense</div>
        <div class="div2">Form</div>
        <div class="div3">Use</div>
        <div class="div16">Signal words</div>
        <div class="div4">
            Present Perfect
        </div>
        <div class="div5">
            have/has + <span class="inf">past participle*</span><span class="inf w100">(3nd irregular verbs)</span>
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
                    <td class="bg-accent-1">have</td>
                    <td> </td>
                    <td class="bg-accent-3">seen</td>
                    <td>ET.</td>
                </tr>
                <tr>
                    <td>He, she, it</td>
                    <td class="bg-accent-1">has</td>
                    <td></td>
                    <td class="bg-accent-3">eaten</td>
                    <td>mine.</td>
                </tr>
                <tr>
                    <th rowspan="2">-</th>
                    <td>I, you, we, they</td>
                    <td class="bg-accent-1">have</td>
                    <td>not</td>
                    <td class="bg-accent-3">played</td>
                    <td>football.</td>
                </tr>
                <tr>
                    <td>He, she, it</td>
                    <td class="bg-accent-1">has</td>
                    <td>not</td>
                    <td class="bg-accent-3">been</td>
                    <td>to Rome.</td>
                </tr>
                <tr>
                    <th rowspan="2">?</th>
                    <td class="bg-accent-1">Have</td>
                    <td>I, you, we, they</td>
                    <td>&nbsp;</td>
                    <td class="bg-accent-3">finished?</td>
                    <td></td>
                </tr>
                <tr>
                    <td class="bg-accent-1">Has</td>
                    <td>he, she, it</td>
                    <td>&nbsp;</td>
                    <td class="bg-accent-3">done</td>
                    <td>it?</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="div9 use">
            <ul>
                <li>you say that sth. has happened or is finished in the past and it has a connection to the present</li>
                <li>action started in the past and continues up to the present</li>
            </ul>
        </div>
        <div class="div17 signal-words">
            <ul>
                <li>just</li>
                <li>yet</li>
                <li>never</li>
                <li>ever</li>
                <li>already</li>
                <li>so far</li>
                <li>up to now</li>
                <li>since</li>
                <li>for</li>
                <li>recently</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PresentPerfect",
        props: {
            description: {
                type: String,
            }
        }
    }
</script>

<style src="@/assets/grammar.style.css" scoped>

</style>