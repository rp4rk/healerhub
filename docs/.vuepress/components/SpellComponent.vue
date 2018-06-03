<script>
import { http } from './util/cache';
import { API_URL, IMAGE_URL } from './util/constants';
import { castTime } from './util/spellMetaData';
import getSpellId from './util/spells';

export default {
  props: ['id', 'spellName', 'spellClass'],

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
      const id = this.id || getSpellId(this.spellName, this.spellClass);
      this.isLoading = true;

      if (this.spellName === "Shadow Mend") {
        console.log(id);
      }

      http
        .get(`${API_URL}/${id}`)
        .then(({ data }) => {
          this.spells = this.spells.concat(data);
          this.currentSpell = this.spells[this.spells.length - 1];
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
