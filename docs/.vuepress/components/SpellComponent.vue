<script>
import { http } from './util/cache';
import { API_URL, IMAGE_URL } from './util/constants';
import { castTime } from './util/spellMetaData';

export default {
  props: ['id'],

  // Fetches spell data
  created() {
    this.fetchSpellData();
  },

  methods: {
    // Returns a formatted cast time for the spell
    getCastTime() {
      return castTime(this.currentSpell.CastingTimeMs);
    },
    // Returns the image URI
    getImageURI() {
      return this.currentSpell.Icon && IMAGE_URL(this.currentSpell.Icon);
    },
    // Fetches the spell data
    fetchSpellData() {
      this.isLoading = true;

      http
        .get(`${API_URL}/${this.id}`)
        .then(({ data }) => {
          this.spells = this.spells.concat(data);
          this.currentSpell = this.spells[0];
          this.isLoading = false;
        })
        .catch(err => (this.isLoading = false));
    },
  },

  data() {
    return {
      currentSpell: false,
      isLoading: false,
      spells: [],
    };
  },
  
};
</script>
