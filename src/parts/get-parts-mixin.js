import { mapState, mapActions } from 'vuex';

export default {
  created() {
    this.getParts();
  },
  computed: {
    ...mapState('robots', { robotParts: 'parts' }),
    parts() {
      return (
        this.robotParts || {
          heads: [],
          arms: [],
          torsos: [],
          bases: [],
        }
      );
    },
  },
  methods: {
    ...mapActions('robots', ['getParts']),
  },
};
