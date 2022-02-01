import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class InitPage extends Vue {
  created() {
    this.$store.commit('tags/fetch');
    this.$store.commit('accounts/fetch');
    window.scrollTo({
      top: 0
    });
  }
}
