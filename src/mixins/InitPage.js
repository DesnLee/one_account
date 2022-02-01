import { __decorate } from "tslib";
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
let InitPage = class InitPage extends Vue {
    created() {
        this.$store.commit('tags/fetch');
        this.$store.commit('accounts/fetch');
        window.scrollTo({
            top: 0
        });
    }
};
InitPage = __decorate([
    Component
], InitPage);
export default InitPage;
//# sourceMappingURL=InitPage.js.map