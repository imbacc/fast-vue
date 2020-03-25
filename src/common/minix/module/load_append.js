import load_append_class from '../../class/load_append_class.js';

export default{
	data() {
		return {
			load_append_obj: this.get_load_append_class(),
		}
	},
	methods: {
		get_load_append_class(){
			return new load_append_class(this)
		},
	},
}